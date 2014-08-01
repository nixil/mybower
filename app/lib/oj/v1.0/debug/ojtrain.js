define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $)
{

/**
 * The ojTrain component allows a user to display a navigation visual that allows a user to go between different "steps"
 * Each step can display information about the state of the step("visited", "unvisited", "diabled")
 * and display a message type("error", "complete", "warning", "infromation")
 *
 *
 * @example <caption>Initialize component using widget API</caption>
 * &lt;div id="train"/&gt;<br/>
 * $("#train").ojTrain({'currentStep': "stp1", 'steps': [{name:'Step One', id:'stp1'},
 * {name:'Step Two', id:'stp2'},{name:'Step Three', id:'stp3'}]});
 * @example <caption>Using knockout, currentStep bind to observables - selectedStep</caption>
 * &lt;div id="train" data-bind="ojComponent:{component: 'ojTrain', currentStep: selectedStep, steps:[{name:'Step One', id:'stp1'},
 * {name:'Step Two', id:'stp2'},{name:'Step Three', id:'stp3'}]}"/&gt;gt;
 *
 * @class
 * @constructor
 * @name oj.ojTrain
 * @augments oj.baseComponent
 */
(function() {

    oj.__registerWidget("oj.ojTrain", $['oj']['baseComponent'], {
        version: "1.0.0",
        defaultElement: "<div>",
        widgetEventPrefix: "oj",
        options: {
            /**
             * The array of step objects. Each step must have an 'id' and 'name' variable, optional additonal variables are:
             * 'selection' - Indicates if the step is selectable and overrides the 'selection' variable passed in the options. Values are 'on' or 'off'.
             * 'state' - Indicates the state of the step. Possible options are 'visited', 'unvisited', 'disabled'. Default value is 'unvisited'
             * 'messageType' - The messageType icon to display on the step. Possible options are 'none', 'complete', 'error', or 'warning'. Default value is 'none'
             * @expose
             * @public
             * @instance
             * @memberof! oj.ojTrain
             */
            steps: [],
			
            /**
             * The global selection variable that sets a default section on all steps. By default, selection is set to "next",
             * meaning only the step after the selected one can be selected.
             * @expose
             * @public
             * @instance
             * @memberof! oj.ojTrain
             */
            selection: "next",
			
            /**
             * The currentStep variable indicates the id of the current selected step.
             * @expose
             * @public
             * @instance
             * @memberof! oj.ojTrain
             */
            currentStep: "",
            // Events

            /**
             * Fired whenever a supported component option changes, whether due to user interaction or programmatic
             * intervention.  If the new value is the same as the previous value, no event will be fired.
             *
             * Currently there is one supported option, <code class="prettyprint">"currentStep"</code>.  Additional
             * options may be supported in the future, so listeners should verify which option is changing
             * before taking any action.
             *
             * @expose
             * @event
             * @memberof! oj.ojTrain
             * @instance
             * @property {Event} event <code class="prettyprint">jQuery</code> event object
             * @property {Object} ui Parameters
             * @property {string} ui.option the name of the option that is changing
             * @property {string} ui.previousValue the previous value of the option
             * @property {string} ui.value the current value of the option
             * @property {Object} ui.optionMetadata information about the option that is changing
             * @property {string} ui.optionMetadata.writeback <code class="prettyprint">"shouldWrite"</code> or
             *           <code class="prettyprint">"shouldNotWrite"</code>.  For use by the JET writeback mechanism.
             *
             */
            optionChange: null

			/**
			 * Triggered when the train is created.
			 *
			 * @event
			 * @name create
			 * @memberof! oj.ojTrain
			 * @instance
			 * @property {Event} event <code class="prettyprint">jQuery</code> event object
			 * @property {Object} ui Empty object included for consistency with other events
			 *
			 */
        },
        /**
         * Variable for storing the number of steps in the train
         *
         * @private
         */
        _stepNum: 0,
		
        /**
         * Variable for storing the train information about each step in 2D Array form
         *
         * @private
         */
        _stepArray: null,
		
        /**
         * _create contains all actions that are needed fo the initialization of the train and is only called once.
         *
         * @override
         * @private
         */
        _create: function() {
            // Constrain initial value
            var options = this.options;
            this._super();
            var steps = options.steps;
            this._stepNum = steps.length;
            this._isRtl = this._GetReadingDirection() === "rtl";

            // Use margin-left normally and margin-right for rtl, same with alignment
            this._marginType = this._isRtl ? 'margin-right' : 'margin-left';
            this._alignType = this._isRtl ? 'right' : 'left';

            // Draw the background bar for the train
            var bar = $("<div class='oj-train-bar'></div>");
            this._maxStepWidth = this.element.width() < 107 * (this._stepNum - 1) + 72 ? (this.element.width() - 72) / (this._stepNum - 1) : 107;
            this._centerMargin = (this.element.width() - this._maxStepWidth * (this._stepNum - 1) - 72) / 2
            this._stepList = $("<ul>")
                    .attr({'aria-label': "Train Component"})
                    .css({'margin': "0", 'padding': "0"});
            if (this._stepNum > 1) {
                bar.css({'margin-top': "7px", 'width': ((this._stepNum - 1) * this._maxStepWidth) + "px"})
                        .css(this._marginType, 36 + this._centerMargin + "px")
                        .css(this._alignType, 0);
            }
            bar.appendTo(this.element);

            // Initialize the background progressbar object that will be updated to have the correct width based on the current step.
            this._progressbar = $("<div class='oj-train-bar-overlay'></div>");
            this._progressbar.appendTo(this.element);

            // Setup array that stores train information for each step.
            this._setupArray();
            this._currentStepIndex = this._getCurrentStepIndex(options.currentStep);

            // Draw each step. Visually each step consists of a background circle, a button, an icon, and a label.
            for (var i = 0; i < this._stepNum; i++)
            {
                // Create a list item to store each step.
                var stepTag = $("<li>")
                        .attr({'id': this._stepArray[i][1]})
                        .css({'list-style-type': "none", 'position': "absolute"})
                        .css(this._marginType, this._centerMargin + (this._maxStepWidth * i) + "px")
                        .css(this._alignType, 0);
                this._stepList.append(stepTag);
                if (i == (this._currentStepIndex + 1) && options.selection == "next")
                    this._stepArray[i][2] = "on";
                this._drawLabel(i);
                this._drawStepFill(i);
                this._drawButton(i);
                this._drawMessageType(i);
            }
            ;
            // Update background progressbar width to show the progress.
            this._updateProgressWidth();

            this.element.addClass("oj-train");
        },
		
        /**
         * Updates the overlay progressbar width based on the currentStepIndex variable
         *
         * @private
         */
        _updateProgressWidth: function() {
            var progressWidth = this._currentStepIndex === (this._stepNum - 1) ? ((this._stepNum - 1) * this._maxStepWidth) : (this._maxStepWidth * this._currentStepIndex + 53.5 * (this._maxStepWidth / 107));
            this._progressbar.css({'margin-top': "7px", 'width': progressWidth + "px"})
                    .css(this._marginType, this._centerMargin + 36 + "px")
                    .css(this._alignType, 0);
            this._stepList.appendTo(this.element);
        },
		
        /**
         * Set up the _stepArray(). The first dimension indicates the step index and the second dimension indicates the step variables.
         * The order of the step variables are: name, id, selection, state, messageType
         *
         * @private
         */
        _setupArray: function() {
            var options = this.options;
			this._stepArray = new Array();
            for (var i = 0; i < this._stepNum; i++) {
                var step = options.steps[i];
                this._stepArray[i] = new Array(5);
                this._stepArray[i][2] = options.selection && options.selection != "next" ? options.selection : "off";
                this._stepArray[i][3] = "unvisited";
                for (var key in step) {
                    if (key === "name")
                    {
                        this._stepArray[i][0] = step[key];
                    }
                    else if (key === "id")
                    {
                        this._stepArray[i][1] = step[key];
                    }
                    else if (key === "selection")
                    {
                        this._stepArray[i][2] = step[key];
                    }
                    else if (key === "state")
                    {
                        this._stepArray[i][3] = step[key];
                    }
                    else if (key === "messageType")
                    {
                        this._stepArray[i][4] = step[key];
                    }
                }
            }
        },
		
        /**
         * Draw the button object for the step based on the index. If a button for that step alread exists remove it and draw the new one.
         * @param {Number} index - The index of the step for which the button is being drawn.
         *
         * @private
         */
        _drawButton: function(index)
        {
            var button = $("<div/>");
            var scrnRead = $("<span/>");
            var self = this;
            var desc = "";
            if (this._stepArray[index])
            {
                var state = this._stepArray[index][3];
                if (this._currentStepIndex === index) {
                    button.addClass("oj-train-button-current");
                    desc = ". This is the current step.";
                }
                else
                {
                    if (state === "visited") {
                        button.addClass("oj-train-button-visited");
                        desc = ". This step has been visited.";
                    }
                    else if (state === "unvisited") {
                        button.addClass("oj-train-button-unvisited");
                        desc = ". This step has not been visited yet.";
                    }
                    else
                        button.addClass("oj-train-button-disabled");
                }
                if (this._stepArray[index][3] !== "disabled" && (this.options.disabled == null || !this.options.disabled)) {
                    if (this._stepArray[index][2] === "on") {
                        this._hoverable(button);
                        button.bind("click" + this.eventNamespace, function() {
                            var oldStep = self.options.currentStep;
                            self.options.currentStep = this.parentNode.id;
                            self._fireOptionChange("currentStep", oldStep, this.parentNode.id, true);
                        });
                    }
                }
                button.css({'margin-top': "4px", 'width': "12px", 'height': "12px"})
                        .css(this._marginType, "29px")
                        .css(this._alignType, 0);
                var stepLi = this._stepList.children().eq(index).children();

                // Check that there are at least 3 items in the list item indicating that a button has already been created for this step.
                // If there is remove it and insert the new button in the same position. If there isn't a preexsisting button, simply add one.
                if (stepLi.length >= 3) {
                    stepLi[2].parentNode.removeChild(stepLi[2]);
                    button.insertAfter(stepLi[1]);
                }
                else
                    this._stepList.children().eq(index).append(button);
                scrnRead.text(desc);
                scrnRead.css("display", "none");
                this._stepList.children().eq(index).find('a').append(scrnRead);
            }
        },
		
        /**
         * Draw the icon that displays the messageType for the step based on the index. If there already is an icon remove it and draw the new one.
         * @param {Number} index - The index of the step for which the icon is being drawn.
         *
         * @private
         */
        _drawMessageType: function(index)
        {
            var icon = $("<div/>");
            var scrnRead = $("<span/>");
            var desc = "";
            var self = this;
            if (this._stepArray[index])
            {
                var messageType = this._stepArray[index][4];
                if (messageType === "complete") {
                    icon.addClass("oj-train-icon-complete");
                    desc = " Complete";
                }
                else if (messageType === "info") {
                    icon.addClass("oj-train-icon-info");
                    desc = " Info";
                }
                else if (messageType === "error") {
                    icon.addClass("oj-train-icon-error");
                    desc = " Error";
                }
                else if (messageType === "warning") {
                    icon.addClass("oj-train-icon-warning");
                    desc = " Warning";
                }

                // Remove previous messageType
                var stepLi = this._stepList.children().eq(index).children();
                if (stepLi.length >= 4) {
                    stepLi[3].parentNode.removeChild(stepLi[3]);
                }
                // Make icon clickable
                if (this._stepArray[index][3] !== "disabled" && (this.options.disabled == null || !this.options.disabled)) {
                    if (this._stepArray[index][2] === "on") {
                        this._hoverable(icon);
                        icon.bind("click" + this.eventNamespace, function() {
                            var oldStep = self.options.currentStep;
                            self.options.currentStep = this.parentNode.id;
                            self._fireOptionChange("currentStep", oldStep, this.parentNode.id, true);
                        });
                    }
                }
                // Add new message
                if (messageType != null && messageType != "none") {
                    icon.css({'margin-top': "9px", 'height': "9px", 'width': "9px"})
                            .css(this._marginType, "34px")
                            .css(this._alignType, 0);
                    // If there is remove it and insert the new icon in the same position.
                    // Add description to span
                    scrnRead.text(desc);
                    scrnRead.css("display", "none");
                    this._stepList.children().eq(index).find('a').append(scrnRead);
                    this._stepList.children().eq(index).append(icon);

                }
            }
        },
		/**
         * Fire optionChange event 
         * @param {String} key - 'currentStep'
		 * @param {String} previousValue 
		 * @param {String} value
		 * @param {Boolean} originalEvent  
         *
         * @private
         */
        _fireOptionChange: function(key, previousValue, value, originalEvent) 
        {

            var ui = {
                "option": key,
                "previousValue": previousValue,
                "value": value,
                // (originalEvent is non-null) iff (option change is due to user interaction) iff (binding should write back the value)
                "optionMetadata": {'writeback': originalEvent ? "shouldWrite" : "shouldNotWrite"}
            };
            this._trigger('optionChange', originalEvent, ui);

        },
		
        /**
         * Draw the background circle for the step which is either light or dark base on if the step is before or after the selected step.
         * @param {Number} index - The index of the step for which the icon is being drawn.
         *
         * @private
         */
        _drawStepFill: function(index)
        {
            var stepFill = $("<div/>");
            if (this._stepArray[index])
            {
                if (index <= this._currentStepIndex)
                    stepFill.addClass("oj-train-stepBackground-overlay");
                else
                    stepFill.addClass("oj-train-stepBackground");
                stepFill.css(this._marginType, "25px")
                        .css(this._alignType, 0);
                var stepLi = this._stepList.children().eq(index).children();
                if (stepLi.length > 1)
                    stepLi[1].parentNode.removeChild(stepLi[1]);
                stepFill.insertAfter(stepLi[0]);

            }
        },
		
        /**
         * Draw the label for the step.
         * @param {Number} index - The index of the step for which the icon is being drawn.
         *
         * @private
         */
        _drawLabel: function(index)
        {
            var self = this;
            if (this._stepArray[index])
            {
                var name = this._stepArray[index][0];
                var label = $("<a>" + name + "</a>");
                label.addClass("oj-train-label");
                label.css('margin-bottom', "7px");
                label.css(this._alignType, 0);
                if (index === this._currentStepIndex)
                    label.addClass("oj-selected");
                else if (this._stepArray[index][3] === "visited")
                    label.addClass("oj-visited");
                else if (this._stepArray[index][3] === "disabled")
                    label.addClass("oj-disabled");
                if (this._stepArray[index][2] === "on" && (this.options.disabled == null || !this.options.disabled)) {
                    label.attr("href", "#");
                    this._hoverable(label);
                    label.bind("click keydown" + this.eventNamespace, /**
                                                                        * @suppress {missingProperties}
                                                                        */
                 function(event) {
			event.preventDefault();
                        if (event.keyCode === $.ui.keyCode.ENTER || event.type == "click") {
                            var oldStep = self.options.currentStep;
                            self.options.currentStep = this.parentNode.id;
                            self._fireOptionChange("currentStep", oldStep, this.parentNode.id, true);
                        }
                    });
                }
                var stepLi = this._stepList.children().eq(index).children();
                if (stepLi.length >= 1)
                    stepLi[0].parentNode.removeChild(stepLi[0]);
                this._stepList.children().eq(index).prepend(label);
            }
        },
		
        /**
         * Draw the label for the step.
         * @param {String} id - The index of the id whose id is being passed in.
         *
         * @private
         */
        _getCurrentStepIndex: function(id)
        {
            for (var i = 0; i < this._stepNum; i++) {
                if (this._stepArray[i] && this._stepArray[i][1] === id)
                    return i;
            }
            return 0;
        },
		
        /**
         * <p>Returns the name of the step based on the id passed in. If the step doesn't have a name, return null;</p>
         * @public
         * @param {String} id - The id of the step.
         * @return {String} name of step.
         * @expose
         * @instance
         * @memberof! oj.ojTrain
         */
        getStepName: function(id)
        {
            for (var i = 0; i < this._stepNum; i++) {
                if (this._stepArray[i] && this._stepArray[i][1] === id)
                    return this._stepArray[i][0];
            }
            return null;
        },
		
        /**
         * <p>Returns the id of the step based on the name passed in. If the step doesn't have an id, return null;</p>
         * @public
         * @param {String} name - The name of the step.
         * @return {String} id of step.
         * @expose
         * @instance
         * @memberof! oj.ojTrain
         */
        getStepId: function(name)
        {
            for (var i = 0; i < this._stepNum; i++) {
                if (this._stepArray[i] && this._stepArray[i][0] === name)
                    return this._stepArray[i][1];
            }
            return null;
        },
		
        /**
         * <p>Select the step based on the id provided. </p>
         * <p>Select should be run after running the deselect function on the previously selected step.  </p>
         * @public
         * @param {String} id - The id of the step being selected.
         * @expose
         * @memberof! oj.ojTrain
         * @instance
         */
        select: function(id)
        {
            for (var i = 0; i < this._stepNum; i++) {
                if (this._stepArray[i] && this._stepArray[i][1] === id)
                {
                    if (this.options.selection === "next" && (i + 1 < this._stepNum))
                    {
                        this._stepArray[i + 1][2] = "on";
                        this._drawLabel(i + 1);
                        this._drawButton(i + 1);
                    }
                    this._stepArray[i][3] = "current";
                    this._currentStepIndex = i;
                    this.options.currentStep = id;
                    this._drawLabel(i);
                    this._drawButton(i);
                    this._updateProgressWidth();
					break;
                }
            }
            for (var i = 0; i < this._stepNum; i++)
                this._drawStepFill(i);
        },
		
        /**
         * <p>Deselect the step based on the id provided. When deselecting a step selection, state, and messageType can be changed.</p>
         * <p>Deselect should be run before running select().  </p>
         * @public
         * @param {String} id - The id of the step being deselected.
         * @param {String} selection - Selection on the step once it is deselected, if this parameter isn't selection is set to "off" on this step.
         * @param {String} state - The state of the step once it is deselected, if this parameter isn't provided the state is set by default to "visited".
         * @param {String} messageType - The messageType to display for the deselected step, if this parameter isn't provided the messageType remains unchanged.
         * @expose
         * @instance
         * @memberof! oj.ojTrain
         */
        deselect: function(id, selection, state, messageType)
        {
            for (var i = 0; i < this._stepNum; i++) {
                if (this._stepArray[i] && this._stepArray[i][1] === id)
                {
                    selection ? this._stepArray[i][2] = selection : this._stepArray[i][2] = "off";
                    state ? this._stepArray[i][3] = state : this._stepArray[i][3] = "visited";
                    messageType ? this._stepArray[i][4] = messageType : this._stepArray[i][4] = "none";
                    this._currentStepIndex = -1;
                    if (this.options.selection === "next" && (i + 1 < this._stepNum))
                    {
                        this._stepArray[i + 1][2] = "off";
                        this._drawLabel(i + 1);
                        this._drawButton(i + 1);
                    }
                    this._drawLabel(i);
                    this._drawButton(i);
                    this._drawMessageType(i);
					break;
                }
            }
        },
		
        /**
         * <p>Returns the id of the next selectable step based on the currentStep id. If the current step is the last selectable step, returns null</p>
         * @public
         * @return {String} next selectable Id
         * @expose
         * @instance
         * @memberof! oj.ojTrain
         */
        nextSelectableStep: function()
        {
            for (var i = this._currentStepIndex; i < this._stepNum; i++) {
                if (i + 1 < this._stepNum && this._stepArray[i + 1] && this._stepArray[i + 1][2] === "on")
                {
                    return this._stepArray[i + 1][1];
                }
            }
            return this._stepArray[this._currentStepIndex][1];

        },
		
        /**
         * <p>Returns the id of the previous selectable step based on the currentStep id. If the current step is the first selectable step, returns null</p>
         * @public
         * @return {String} previous selectable Id
         * @expose
         * @instance
         * @memberof! oj.ojTrain
         */
        previousSelectableStep: function()
        {
            for (var i = this._currentStepIndex; i >= 0; i--) {
                if (this._stepArray[i - 1] && this._stepArray[i - 1][2] === "on")
                {
                    return this._stepArray[i - 1][1];
                }
            }
            return this._stepArray[this._currentStepIndex][1];
        }

    });
}( ));
});
