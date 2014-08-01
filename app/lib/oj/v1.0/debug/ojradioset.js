define(['ojs/ojcore', 'jquery', 'ojs/ojeditablevalue', 'ojs/ojradiocheckbox'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $)
{

/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
/*!
 * JET Radioset @VERSION
 */
/**
 * @class
 * @name oj.ojRadioset
 * @augments oj.editableValue
 * @classdesc
 * <p>
 * The JET Radioset component (ojRadioset) enhances a group of 
 * <code class="prettyprint">input type="radio"</code> elements. It 
 * manages the selected value of the group and it adds required validation. 
 * It also adds and removes the correct
 * oj-* styles to the dom elements so it has the JET styling and is themable.
 * </p>
 * <p>To use an ojRadioset, group all the inputs and their labels within a 
 *   container dom element, e.g., <code class="prettyprint">div</code>.
 *   For accessibility, set <code class="prettyprint">aria-labelledby</code> on 
 *   this container dom element.
 *   Also set each input's <code class="prettyprint">id</code> attribute, and 
 *   refer to that in the input's label's 
 *   <code class="prettyprint">for</code> attribute.
 *   Then create the ojRadioset on this container dom element.  
 * </p>
 * <p>
 *  The fieldset/legend elements are not a supported way 
 *   to group and label ojRadioset, so <code class="prettyprint">fieldset</code> cannot be the 
 *   container dom element on which you create the ojRadioset. 
 *   Grouping with a <code class="prettyprint">div</code> element and using 
 *   a <code class="prettyprint">label</code> element allows you to
 *   lay out your labels/fields in more ways than if you used a fieldset/legend. 
 *   Both are equally accessible. 
 * </p>
 * <p>
 *  Radioset is used by selecting a container element which contains the 
 *  radio input elements and calling <code class="prettyprint">ojRadioset()</code>. 
 *  You can enable and disable a radio set, 
 *  which will enable and disable all contained radios. 
 * </p>
 * <p>
 *  Radioset does not have a readOnly option since HTML does not support
 *  readonly on radios and checkboxes.
 * </p>
 * 
 * <h3 id="keyboard-section">
 *   Keyboard interaction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
 * <p>The radioset does not add any extra keyboard navigation to the input radios. 
 * The keyboard interaction comes from the native browser.
 * </p>
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 * 
 * <p>JET Radioset takes care of setting 
 * <code class="prettyprint">role="radiogroup"</code> on the radioset element.  
 * 
 * <p>As shown in the online demos, the application is responsible for applying 
 * <code class="prettyprint">aria-labelledby</code>
 * to point to the radioset's label element for the group of radios.
 * <p>Disabled content: JET supports an accessible luminosity contrast ratio, 
 * as specified in <a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast">WCAG 2.0 - Section 1.4.3 "Contrast"</a>, 
 * in the themes that are accessible.  (See the "Theming" chapter of the JET Developer Guide for more information on which 
 * themes are accessible.)  Note that Section 1.4.3 says that text or images of text that are part of an inactive user 
 * interface component have no contrast requirement.  Because disabled content may not meet the minimum contrast ratio 
 * required of enabled content, it cannot be used to convey meaningful information.<p>
 * <h3 id="label-section">
 *   Label and Radioset
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#label-section"></a>
 * </h3>
 * <p>
 * For accessibility, you should associate a label element with the radioset
 * by putting an <code>id</code> on the label, and then setting the 
 * <code>aria-labelledby</code> attribute on the radioset dom to be the label's id.
 * Note: The radioset's label is not the same as the label for each radio. The 
 * radioset's label will have the required and help information on it, 
 * not the label for each radio.
 * </p>
 * <p>
 * The component will decorate its associated label with required and help 
 * information, if the <code>required</code> and <code>help</code> options are set. 
 * </p>
 * <h3 id="jqui2jet-section">
 *   JET for jQuery UI developers
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
 * </h3>
 * 
 * <p>
 *   All JQUI and JET components inherit <code class="prettyprint">disable()</code> 
 *   and <code class="prettyprint">enable()</code> methods from the base class. 
 *    This API duplicates the functionality of the 
 *    <code class="prettyprint">disabled</code> option.  
 *    In JET, to keep the API as lean as possible, we have chosen not to document 
 *    these methods outside of this section.
 * </p>
 * <!-- - - - - Above this point, the tags are for the class.
 *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
 * 
 * @desc Creates a JET Radioset.
 *  For JET Radioset, if the DOM changes (for example, you add/remove a radio), 
 *  you should <code class="prettyprint">refresh()</code>.
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize the radioset with no options specified:</caption>
 * $(".selector").ojRadioset();
 * 
 * @example <caption>Initialize the radioset with some options and callbacks specified:</caption>
 * $( ".selector" ).ojRadioset( { "value": "copy", "valuechange": 
 * function( event, ui ) {alert("valuechanged from " + ui.previousValue + " to " + ui.value);} } );             
 * @example <caption>Initialize component using widget API</caption>
 * &lt;label id="grouplabel">Greetings&lt;/label>
 * &lt;div id="radioset" aria-labelledby="grouplabel">
 *   &lt;input id="helloid" value="hello" type="radio" name="greetings"/&gt;
 *   &lt;label for="helloid"/&gt;Hello&lt;/label>
 *   &lt;input id="bonjourid" value="bonjour" type="radio" name="greetings"/&gt;
 *   &lt;label for="bonjourid"/&gt;Bonjour&lt;/label>
 *   &lt;input id="ciaoid" value="ciao" type="radio" name="greetings"/&gt;
 *   &lt;label for="ciaoid"/&gt;Ciao&lt;/label>
 * &lt;div>
 * <br/>
 * // set the value to "ciao". (The 'ciao' radio will be checked)
 * $("#radioset").ojRadioset({'option', 'value', 'ciao'});
 * 
 * @example <caption>Initialize a radioset via the JET 
 * <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;label id="grouplabel">Time&lt;/label>
 * &lt;div id="radioset" data-bind="ojComponent: {component: 'ojRadioset', value: 'night'} 
 *   aria-labelledby="grouplabel" >
 *   &lt;input id="morningid" value="morning" type="radio" name="time"/&gt;
 *   &lt;label for="morningid"/&gt;Morning&lt;/label>
 *   &lt;input id="nightid" value="night" type="radio" name="time"/&gt;
 *   &lt;label for="nightid"/&gt;Night&lt;/label>
 * &lt;div>
 * <br/>
  * @example <caption>Using knockout, value bind to observable:</caption>
 * &lt;label id="grouplabel">Time&lt;/label>
 * &lt;div id="radioset" data-bind="ojComponent: {component: 'ojRadioset', 
 * value: currentTime} 
 *   aria-labelledby="grouplabel" >
 *   &lt;input id="morningid" value="morning" type="radio" name="time"/&gt;
 *   &lt;label for="morningid"/&gt;Morning&lt;/label>
 *   &lt;input id="nightid" value="night" type="radio" name="time"/&gt;
 *   &lt;label for="nightid"/&gt;Night&lt;/label>
 * &lt;div>
 * <br/>
 * // in the model, make the currentTime variable a knockout observable.
 * // The model and the component's value option will stay in sync. Change the
 * // component's value option and the model will change. Change the model,
 * // and the component's value option will change. Click on a radio, and both
 * // will change.
 * self.currentTime = ko.observable("night");
 * @constructor
 */
oj.__registerWidget("oj.ojRadioset", $['oj']['editableValue'],
{
  version : "1.0.0",  
  defaultElement : "<div>", 
  widgetEventPrefix : "oj", 
  options : 
  {
    /** 
     * <p>
     * This is a tri-state disabled. Disabled true disables the component and all the inputs/labels. 
     * Disabled false enables the component and all the inputs/labels. Disabled null means
     * the inputs disabled state will take effect.
     * <p>
     * After create time, the disabled state should be set via this API, not by setting the underlying DOM attribute. 
     *  
     * <p>The 2-way <code class="prettyprint">disabled</code> binding offered by 
     * the <code class="prettyprint">ojComponent</code> binding 
     * should be used instead of Knockout's built-in <code class="prettyprint">disable</code> 
     * and <code class="prettyprint">enable</code> bindings, 
     * as the former sets the API, while the latter sets the underlying DOM attribute.
     * 
     * @example <caption>Initialize component with <code class="prettyprint">disabled</code> option:</caption>
     * $(".selector").ojRadioset({"disabled": true});
     * 
     * @expose 
     * @type {?boolean|null|undefined}
     * @default <code class="prettyprint">null</code>. disabled defaults to null, and the 
     * input's disabled state will take effect.
     * @public
     * @instance
     * @memberof! oj.ojRadioset
     */
    disabled: null
  },
  /**** start Public APIs ****/
      
   /**
   * Refreshes the radioset
   * <p>A <code class="prettyprint">refresh()</code> is required 
   * when a radioset is programatically changed, like in the following circumstances:
   * <ul>
   *   <li>After radios are added or removed or modified (without using ojRadioset) in the DOM.</li>
   * </ul>    
   * @expose 
   * @memberof! oj.ojRadioset
   * @instance
   * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
   * $( ".selector" ).ojRadioset( "refresh" );
   */
  refresh: function() 
  {
    this._super();
    // refresh the ojRadioCheckbox's that exist, and  of the type=radio inputs that 
    // are not yet ojRadioCheckboxs, make them ojRadioCheckboxs.
    this.$radios = this._findRadiosWithMatchingName()
                    .filter( ".oj-radio" )
                    ._ojRadioCheckbox("refresh")
                    .end()                  
                    // Create ojRadioCheckbox out of any 'new' radios.
                     // the END is key here. It makes it so that 
                     // this.$radios has ALL the radios.
                     // .not if a filter, it removes elements that do not have the
                     // oj-radio style class from the list of all input[type=radio]s.
                    .not( ".oj-radio" )
                    ._ojRadioCheckbox()
                    .end();
         
    this._setup();
  },
  /**
   * Returns a jQuery object containing the element visually representing the radioset. 
   * 
   * <p>This method does not accept any arguments.
   * 
   * @expose
   * @memberof! oj.ojRadioset
   * @instance
   * @return {jQuery} the radio
  */
  widget : function ()
  {
    return this.uiRadioset;
  },
          
   /**** end Public APIs ****/         
          
  /**** start internal widget functions ****/   
       
  /**
   * After _ComponentCreate and _AfterCreate, 
   * the widget should be 100% set up. this._super should be called first.
   * @override
   * @protected
   */
  _ComponentCreate : function ()
  {
    this._super();
    // first check to see if this.element is NOT a fieldset. If fieldset, throw error.
    if (this.element.is("fieldset"))
    {
      throw new Error("ojRadioset cannot be bound to a fieldset. Use a div instead.");
    }
    // turn each radio into ojRadioCheckbox. Do this first, since we need it
    // in calls from 'create'.
    this.$radios = this._findRadiosWithMatchingName()._ojRadioCheckbox();

    this.uiRadioset = this.element.addClass("oj-radioset oj-component")
                                  .attr( "role", "radiogroup" );
    this._on(this._events);
    this._setup(); // TODO: by this time the option is already defaulted to true or false. Hmm...

  },
  /**
   * Returns a jquery object that is a set of elements that are input type radio
   * and have the name of the first radio found.
   * 
   * @return {Object} jquery object of all the radios within the root dom element
   * that have the same 'name' attribute as the first radio found.
   * @private
   */
  _findRadiosWithMatchingName : function ()
  {
    //return this.element.find('input[type=radio]'); // simplest thing to do.
    
    var first = this.element.find("input[type=radio]:first");
    if (first.length === 0)
    {
      oj.Logger.warn("Could not find any input type=radio within this element");
    }
    // get the name attribute of the first input radio
    var name = first.attr("name");
    // find all input radios with matching name
    if (name === undefined)
    {
    	// search for all radios with no name
      var allradios = this.element.find("input[type=radio]");
      // now loop and find the ones without 'name' attribute
      return allradios.not("[name]");
    }
    else
    {
    	// search for all radios with the name
      var selector = "input[type=radio][name=" + name + "]";
      return this.element.find(selector);
    	
    }
  },
  /* 
   * Component developers: This API and functionality is subject to change pending architectural review!
   * See the baseComponent method for preliminary API doc.
   */
  _showContextMenu: function(menu, event)
  {
    // TODO: confirm this logic
    var radios = this.element.find("input[type=radio]");
    var checked = radios.filter(":checked");
    var launcher = checked.length ? checked : radios.first(); 
    menu.show(event, {"launcher": launcher, "focus": "menu"});
  },
  /**
   * _setup is called on create and refresh. Use the disabled option to 
   * update the component. If the component's option is disabled, then
   * leave it alone.
   */
  _setup: function() 
  {

    // disable radio if element was already disabled
    if (this.options.disabled === true)
    {
      // calls _setOption disable is true, which in turn disables all radios.
      this.disable();
    }
    else if (this.options.disabled === false)
    {
      this.enable();
    }
  },   
  _events : 
  {
    'change' : function (event)
    {
      
      this._HandleChangeEvent(event);
    }
  },

  /**
   * @param {Event} event DOM event 
   * @override
   * @protected
   * @memberof! oj.ojRadioset
   */
  _HandleChangeEvent: function(event)
  {
    // TODO make sure the target is an input radio?
    // TODO any more checks I need to do?
    //alert("XYZ In _changeSetValue target is " + event.target + " And the value of the input is " + event.target.value);

    // should I double check that the event.target is the same as the 'checked'?
    // if (event.target === this.$radios.filter(":checked"))???
    // _SetValue triggers valuechange event
    this._super(event);
  },
                  
  /**
   * Returns the display value that is ready to be passed to the converter.
   * 
   * @param {Object} value the stored value if available that needs to be formatted for display
   * @override
   * @protected
   * @memberof! oj.ojRadioset
   */
  _GetDisplayValue : function (value) 
  {
    // return the value of the 'checked' radio
    return this._GetElementValue();
  },
  /**
   * Called when the display value on the element needs to be updated 
   * as a result of a value change. 
   * ojRadioset stores a String value, and this value matches the value
   * of the currently checked radio. So, if we need to set the display value,
   * what this means is we need to 'check' the radio whose value matches the
   * displayValue.
   * 
   * @param {String} displayValue of the new string to be displayed
   * @override
   * @protected
   * @memberof! oj.ojRadioset
  */  
  _SetDisplayValue : function (displayValue) 
  {

    if (displayValue != null)
    {
      // If we found a radio with a matching value, and it isn't already checked,
      // then check it. If it is already checked, do nothing.
      // If we can't find a radio with a matching value, then we uncheck 
      // all the radios. We do this so that the radio state matches the value option
      // value.
      
      var valueFilter = "[value='" + displayValue + "']"; 
      if (valueFilter !== undefined && this.$radios !== undefined)
      {
        var radioWithMatchingValue = 
            this.$radios.filter(valueFilter);
        // found a radio with a matching value
        if (radioWithMatchingValue !== undefined && radioWithMatchingValue.length > 0)
        {
          // if not already checked, then mark as checked.
          if (!radioWithMatchingValue.prop('checked'))
          {
            radioWithMatchingValue._ojRadioCheckbox("option", "checked", true);
          }
        }
        else
        {
          // did not find any radios with a matching value, so uncheck
          // all of them.
          this.$radios._ojRadioCheckbox("option", "checked", false);
        }
      }
      // TODO Do I need to refresh
    } 
  },
  /**
   * Returns the element's value. Normally, this is a call to this.element.val(),
   * but in the case of ojRadioset, the element's value is really the value
   * of the checked radio in the set.
   * @override
   * @protected
   * @memberof! oj.ojRadioset
   */
  _GetElementValue : function () 
  {
    // "input:checked" selects radios that are currently checked as 
    // reflected in their boolean (true or false) checked property, 
    // which is affected when the user clicks the radio for example.
    // for radio, there will be one or none checked; 
    // if none are checked, return null (checkedRadio.val() is undefined if nothing is checked)
    var checkedRadio = this.$radios.filter(":checked");
    if (checkedRadio.length === 0)
      return null;
    else
      return checkedRadio.val();
  },
          
 
  _InitOptions : function (originalDefaults, constructorOptions)
  {
    var radios, checkedRadio, result;
    var props = [{"attribute": "disabled", "defaultOptionValue": null, "validateOption": true},
                 {"attribute": "placeholder", "defaultOptionValue": ""},
                 {"attribute": "required", "defaultOptionValue": "optional", 
                  "coerceDomValue": true, "validateOption": true},
                 {"attribute": "title", "defaultOptionValue": ""}
                 // {"attribute": "value", "defaultOptionValue": null}
               ]; 
    
    this._super(originalDefaults, constructorOptions);
    oj.EditableValueUtils.initializeOptionsFromDom(props, constructorOptions, this);  
    
    // TODO: PAVI - Let's discuss 
    if (this.options["value"] == null) // null or undefined
    {
      // return the checked values by simply looking at DOM node
      radios = this._findRadiosWithMatchingName();
      checkedRadio = radios.filter(":checked");
      result = (checkedRadio.length === 0) ? null : checkedRadio.val();
      this.options['value'] = result;
    }
    
    // DISABLED. EditableValue defaults disabled to null if it hasn't been set.
    // If disabled is null, then I should let each child show through.
  },
  
  /**
   * Returns the default styleclass for the component. Currently this is 
   * used to pass to the _ojLabel component, which will append -label and 
   * add the style class onto the label. This way we can style the label
   * specific to the input component. For example, for inline labels, the
   * radioset/checkboxset components need to have margin-top:0, whereas all the
   * other inputs need it to be .5em. So we'll have a special margin-top style 
   * for .oj-label-inline.oj-radioset-label
   * All input components must override
   * 
   * @return {string}
   * @memberof! oj.ojRadioset
   * @override
   * @protected
   */
  _GetDefaultStyleClass : function ()
  {
    return "oj-radioset";
  },
  /**
   * Returns a jquery object of the elements representing the 
   * content nodes (input type=radio). This is used in EditableValue to add
   * aria-describedby to the input when there is a help icon, to add
   * aria-required and aria-invalid
   * @protected
   * @override
   * @memberof! oj.ojRadioset
   */
  _GetContentElement : function ()
  {
    return this._findRadiosWithMatchingName();
  },
   /**
   * Called when a aria-required attribute needs to be set or removed. 
   * Most inputs/selects need aria-required on the input element (aka 'content')
   * But it is not legal to have aria-required on radio/checkboxes.
   * Subclasses can override to put aria-required where they want.
   * 
   * @param {Object=} value the current value of the required option
   * @memberof! oj.ojRadioset
   * @instance
   * @protected
   */
  _RefreshAriaRequired : function (value)
  {
    var ariaValue, rootNode = this.uiRadioset;

    ariaValue = (value == "required") ? true : false;
    if (ariaValue && rootNode) 
    {
      rootNode.attr("aria-required", ariaValue);
    }
    else
    {
      rootNode.removeAttr("aria-required");
    }
  }, 
  /**
   * Note that _setOption does not get called during create in the super class. 
   * It only gets called when the component has already been created.
   * @override
   * @private
   */
  _setOption : function (key, value)
  {
    this._superApply(arguments);
    
    if ( key === "disabled" ) {
      // disables/enables all the radios
      this.$radios._ojRadioCheckbox( "option", key, value );
    }
  },
  /**
   * Return the subcomponent node represented by the documented locator attribute values.
   * Test authors should target spinner sub elements using the following names:
   * <ul>
   * <li><b>oj-radioset-inputs</b>: the radioset's input elements</li>
   * </ul>
   * 
   * @expose
   * @override
   * @memberof! oj.ojRadioset
   * @instance
   * @param {Object} locator An Object containing at minimum a subId property 
   * whose value is a string, documented by the component, that allows the component to 
   * look up the subcomponent associated with that string.  It contains:
   * <ul>
   * <li>
   * component: optional - in the future there may be more than one component 
   *   contained within a page element
   * </li>
   * <li>
   * subId: the string, documented by the component, that the component expects 
   * in getNodeBySubId to locate a particular subcomponent 
   * </li>
   * </ul>  
   * @returns {Element|null} the subcomponent located by the subId string 
   * passed in locator, if found.
   */
  getNodeBySubId: function(locator)
  {
    var node = this._super(locator), subId;
    if (!node)
    {
      subId = locator['subId'];
      if (subId === "oj-radioset-inputs") {
        node = this.$radios;
      }
    }
    
    // Non-null locators have to be handled by the component subclasses
    return node || null;
  }, 
  
  /**
   * TODO: What is our 'destroy' strategy with regards to html attributes that 
   * they have initially on their dom, but we change? like disabled? Do we store 
   * on data at the beginning, then restore from this data, and then call removeData?
   * @override
   * @private
   */
  _destroy : function ()
  {  
    this._super();
    // base class removes oj-disabled
    this.element.removeClass("oj-radioset oj-enabled oj-component")
                .removeAttr( "role" );
    if (this.$radios)
    {
      this.$radios._ojRadioCheckbox( "destroy" );
    }
  }
  /**** end internal widget functions ****/ 
 
});
});
