define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore'], 
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

/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

// jim retrieved from https://raw.github.com/jquery/jquery-ui/1-10-stable/ui/jquery.ui.button.js on 6/29/2013, and then modified

// -------------------------------------------------------------------------------------------------------
// This file contains both the Button and Buttonset components,
// so that they can share the same wrapper function / closure containing shared "private static members".
// -------------------------------------------------------------------------------------------------------

(function() // Button / Buttonset wrapper function, to keep "private static members" private
{

/**
 * @class
 * @name oj.ojButton
 * @augments oj.baseComponent
 * @since 0.6
 * 
 * @classdesc
 * <h3 id="buttonOverview-section">
 *   JET Button Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#buttonOverview-section"></a>
 * </h3>
 * 
 * <p>Description: Themeable, WAI-ARIA-compliant push buttons and toggle buttons, with appropriate styles for hover, active, checked, and disabled.
 * 
 * <p>There are two types of JET Buttons: push buttons and toggle buttons.
 * 
 * 
 * <h3 id="pushButtons-section">
 *   Push Buttons
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pushButtons-section"></a>
 * </h3>
 * 
 * <p>Push buttons are ordinary buttons that do not stay pressed in when clicked.  
 * Push buttons are created from buttons, anchors, and inputs of type button, submit, and reset.  Button elements are typically a good general-purpose choice.
 * 
 * 
 * <h3 id="toggleButtons-section">
 *   Toggle Buttons
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#toggleButtons-section"></a>
 * </h3>
 * 
 * <p>Toggle buttons are buttons that toggle between a selected state and an unselected state when clicked.  
 * Toggle buttons are created from radio buttons and checkboxes (inputs of type radio and checkbox).
 * 
 * <p>For toggle buttons, the input must have a label, which must be a sibling of the input that precedes the input.
 * The label's <code class="prettyprint">for</code> attribute must refer to the input's <code class="prettyprint">id</code> attribute. 
 * 
 * <p>A new wrapper element is created around the label and input, so that the component has a single root, while avoiding the accessibility problems
 * caused by nesting the input inside the label.  
 * 
 * <p>The label-precedes-input requirement ensures compatibility with the JET <code class="prettyprint">ojComponent</code> binding on the input element, 
 * which expects all relevant DOM elements, including label, to be already available with all their attributes resolved.
 * 
 * <p>The wrapper and label are styled to appear as the button, while the underlying input is updated on click. 
 * 
 * <p> Note that a given radio button must not be both checked and disabled, unless all radios in the group are disabled, since this removes 
 * the entire radio group from the tab order in mainstream browsers.  This issue applies to native radios and is not unique to JET.
 * 
 * 
 * <h3 id="buttonsetToolbar-section">
 *   Buttonsets and Toolbars
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#buttonsetToolbar-section"></a>
 * </h3>
 * 
 * <p>The [JET Buttonset]{@link oj.ojButtonset} component can be used to group related buttons, such as a group of radios or checkboxes.  Buttonset provides
 * visual and semantic grouping and WAI-ARIA-compliant focus management.  See the Buttonset API doc for more information.
 * 
 * <p>Also, buttons and buttonsets can be placed in a [JET Toolbar]{@link oj.ojToolbar}.  Like Buttonset, Toolbar is themable and provides WAI-ARIA-compliant 
 * focus management.  See the Toolbar API doc for more information.
 * 
 * 
 * <h3 id="keyboard-section">
 *   Keyboard interaction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
 * <p>Per WAI-ARIA requirements for role="button", all flavors of JET Button support invocation via both <kbd>Enter</kbd> and <kbd>Spacebar</kbd>, even when the 
 * underlying DOM element does not.
 * 
 * 
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 * 
 * <p>Disabled content: JET supports an accessible luminosity contrast ratio, 
 * as specified in <a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast">WCAG 2.0 - Section 1.4.3 "Contrast"</a>, 
 * in the themes that are accessible.  (See the "Theming" chapter of the JET Developer Guide for more information on which 
 * themes are accessible.)  Note that Section 1.4.3 says that text or images of text that are part of an inactive user 
 * interface component have no contrast requirement.  Because disabled content may not meet the minimum contrast ratio 
 * required of enabled content, it cannot be used to convey meaningful information.<p>
 * 
 * 
 * <h3 id="eventHandling-section">
 *   Event Handling
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#eventHandling-section"></a>
 * </h3>
 * 
 * <p>It's most reliable to register click handlers directly on the button, rather than on an ancestor.  For example, if any of the button's DOM is swapped out in a click 
 * handler (e.g. alternating the text and icon between "Play" and "Pause"), the bubbling will stop if the click target was part of the content that was removed in the swap.
 * 
 * <p>In lieu of a shared listener on an ancestor, syntax like <code class="prettyprint">$( "#ancestor :oj-button" ).click( myFunc );</code> can be used to set a handler on many 
 * buttons at once. 
 * 
 * 
 * <h3 id="pseudos-section">
 *   Pseudo-selectors
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
 * </h3>
 * 
 * <p>The <code class="prettyprint">:oj-button</code> pseudo-selector can be used in jQuery expressions to select JET Buttons.  For example:
 * 
 * <pre class="prettyprint">
 * <code>$( ":oj-button" ) // selects all JET Buttons on the page
 * $myEventTarget.closest( ":oj-button" ) // selects the closest ancestor that is a JET Button
 * </code></pre>
 * 
 * 
 * <h3 id="state-section">
 *   Setting Component State
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#state-section"></a>
 * </h3>
 * 
 * <p>In JET, when setting component state after create time, the correct approach depends on whether the component has a JS API for that state.
 * 
 * <p>State with a JS API, such as Button's disabled state, checked state, and label, should be set after creation via that API (which in those examples is 
 * <code class="prettyprint">option()</code>), not by directly manipulating the DOM after creation.  This can be done by calling that JS API directly, or by binding 
 * a component option like <code class="prettyprint">disabled</code> to an observable using the <code class="prettyprint">ojComponent</code> binding.  
 * In the latter case, updates should always be made via the observable, since updates to the observable will update the option, while updates flow from the 
 * component option to the observable only for UI interaction, not for programmatic updates via the API.
 * 
 * <p>Built-in KO bindings, like KO's <code class="prettyprint">disable</code> binding, should not be used for state with a JS API, since that is tatamount to 
 * updating the DOM directly.  The component option should be bound instead, via JET's <code class="prettyprint">ojComponent</code> binding.
 * 
 * <p>If a button's checked state needs to be set programmatically, then it should be wrapped in a Buttonset so that its <code class="prettyprint">checked</code> 
 * option can be used.  It is OK for a Buttonset to contain only one Button.
 * 
 * <p>State with no JS API should be set by manipulating the DOM directly in an allowable way, and then calling <code class="prettyprint">refresh()</code> 
 * on the affected component(s).  E.g. the reading direction (LTR / RTL) is changed by by setting the <code class="prettyprint">"dir"</code> attribute on the 
 * <code class="prettyprint">&lt;html></code> node and calling <code class="prettyprint">refresh()</code>.  
 * 
 * <p>When using a built-in Knockout binding (as opposed to the <code class="prettyprint">ojComponent</code> binding), keep in mind that those bindings do not 
 * execute the necessary <code class="prettyprint">refresh()</code> call after updating the DOM.  Updates that flow from the component to the observable, 
 * as a result of user interaction, are not problematic.  But updates in the other direction, that programmatically update the DOM because the observable changed, 
 * will not be picked up until the next <code class="prettyprint">refresh()</code>.
 * 
 * 
 * <h3 id="jqui2jet-section">
 *   JET for jQuery UI developers
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
 * </h3>
 * 
 * <!-- TODO: discuss component state, refresh(), etc. -->
 * <ol>
 *   <li>All JQUI and JET components inherit <code class="prettyprint">disable()</code> and <code class="prettyprint">enable()</code> methods from the base class.  This API 
 *       duplicates the functionality of the <code class="prettyprint">disabled</code> option.  In JET, to keep the API as lean as possible, we 
 *       have chosen not to document these methods outside of this section.</li>
 *   <li>JQUI Button has a Boolean <code class="prettyprint">text</code> option indicating whether to hide the label when icons are present.
 *       In JET, we prefer to avoid Booleans for future flexibility, so JET Button instead has an expandable <code class="prettyprint">display</code> option accepting 
 *       the values <code class="prettyprint">"all"</code> and <code class="prettyprint">"icons"</code>.</li>
 *   <li>In JQUI Button, the <code class="prettyprint">icons</code> option accepts keys named <code class="prettyprint">"primary"</code> and 
 *       <code class="prettyprint">"secondary"</code>.  For clarity, these options have been renamed in JET Button to <code class="prettyprint">"start"</code> and 
 *       <code class="prettyprint">"end"</code>, our standard directionality-neutral terms for (in LTR) "left" and "right".</li>
 * </ol>
 * 
 * 
 * <p>Also, event names for all JET components are prefixed with "oj", instead of component-specific prefixes like "button" or "menu".  
 * E.g. the JQUI <code class="prettyprint">buttoncreate</code> event is <code class="prettyprint">ojcreate</code> in JET, as shown in the doc for that event.
 * Reason:  This makes the API more powerful.  It allows apps to listen to "foo" events from <em>all</em> JET components via:
 * 
 * <pre class="prettyprint">
 * <code>$( ".selector" ).on( "ojfoo", myFunc);
 * </code></pre>
 * 
 * or to "foo" events only from JET Buttons (the JQUI functionality) via:
 * 
 * <pre class="prettyprint">
 * <code>$( ".selector" ).on( "ojfoo", ":oj-button", myFunc);
 * </code></pre>
 * 
 * 
 * <!-- - - - - Above this point, the tags are for the class.
 *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
 * 
 * 
 * @desc Creates a JET Button.  If called after the button is already created, it is equivalent to the 
 * "set many options" overload of <code class="prettyprint">option()</code>.  
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize the button with no options specified:</caption>
 * $( ".selector" ).ojButton();
 * 
 * @example <caption>Initialize the button with some options and callbacks specified:</caption>
 * $( ".selector" ).ojButton( { "label": "Copy", "create": function( event, ui ) {} } );
 * 
 * @example <caption>Initialize a push button via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;button id="paste" data-bind="ojComponent: { component: 'ojButton', 
 *                                              label: 'Paste', 
 *                                              create: setupButton }">
 * 
 * @example <caption>Initialize a toggle button via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;label for="check">Toggle&lt;/label>
 * &lt;input type="checkbox" id="check" data-bind="ojComponent: {component: 'ojButton'}"/>
 */
oj.__registerWidget("oj.ojButton", $['oj']['baseComponent'], 
{
    defaultElement: "<button>", // added to externs.js, since this is an override of a superclass member.  (That's the rule for public methods, what about protected fields?)  Would @override do the job and be better than externing?
    widgetEventPrefix : "oj", 
    options: // options is in externs.js, so no need for quotes
    { 
        /**
         * Disables the button if set to <code class="prettyprint">true</code>.
         * 
         * <p>After create time, the <code class="prettyprint">disabled</code> state should be set via this API, not by setting the underlying DOM attribute.
         * 
         * <p>The 2-way <code class="prettyprint">disabled</code> binding offered by the <code class="prettyprint">ojComponent</code> binding 
         * should be used instead of Knockout's built-in <code class="prettyprint">disable</code> and <code class="prettyprint">enable</code> bindings, 
         * as the former sets the API, while the latter sets the underlying DOM attribute.
         * 
         * @expose
         * @memberof oj.ojButton
         * @instance
         * @type {?boolean}
         * @default <code class="prettyprint">false</code>
         * 
         * @example <caption>Initialize the button with the <code class="prettyprint">disabled</code> option specified:</caption>
         * $( ".selector" ).ojButton( { "disabled": true } );
         * 
         * @example <caption>Get or set the <code class="prettyprint">disabled</code> option, after initialization:</caption>
         * // getter
         * var disabled = $( ".selector" ).ojButton( "option", "disabled" );
         * 
         * // setter
         * $( ".selector" ).ojButton( "option", "disabled", true );
         */
        disabled: null,
        
        /**
         * Whether to display both the label and icons (<code class="prettyprint">"all"</code>) or just the icons (<code class="prettyprint">"icons"</code>).
         * In the latter case, the label is displayed in a tooltip instead, unless a tooltip was already supplied at create time.  
         * 
         * <p>The <code class="prettyprint">display</code> option will be ignored if no icons are specified via the <code class="prettyprint">icons</code> option.
         * 
         * @expose
         * @memberof oj.ojButton
         * @instance
         * @type {string}
         * @ojvalue {string} "all" Display both the label and icons.
         * @ojvalue {string} "icons" Display only the icons.
         * @default <code class="prettyprint">"all"</code>
         * 
         * @example <caption>Initialize the button with the <code class="prettyprint">display</code> option specified:</caption>
         * $( ".selector" ).ojButton( { "display": "icons" } );
         * 
         * @example <caption>Get or set the <code class="prettyprint">display</code> option, after initialization:</caption>
         * // getter
         * var display = $( ".selector" ).ojButton( "option", "display" );
         * 
         * // setter
         * $( ".selector" ).ojButton( "option", "display", "icons" );
         */
        display: "all",
        
        /**
         * Text to show in the button. 
         * 
         * <p>When not specified (<code class="prettyprint">null</code>) at create time, the element's HTML content is used, or its 
         * <code class="prettyprint">value</code> attribute if the element is an input element of type button, submit, or reset, or 
         * the HTML content of the associated label element if the element is an input of type radio or checkbox.
         * 
         * <p>After create time, the label should be set via this API, not by setting the underlying DOM attribute.
         * 
         * <p>The 2-way <code class="prettyprint">label</code> binding offered by the <code class="prettyprint">ojComponent</code> 
         * binding should be used instead of Knockout's built-in <code class="prettyprint">text</code> binding, as the former 
         * sets the API, while the latter sets the underlying DOM attribute.
         * 
         * @expose
         * @memberof oj.ojButton
         * @instance
         * @type {?string}
         * @default <code class="prettyprint">null</code>
         * 
         * @example <caption>Initialize the button with the <code class="prettyprint">label</code> option specified:</caption>
         * $( ".selector" ).ojButton( { "label": "custom label" } );
         * 
         * @example <caption>Get or set the <code class="prettyprint">label</code> option, after initialization:</caption>
         * // getter
         * var label = $( ".selector" ).ojButton( "option", "label" );
         * 
         * // setter
         * $( ".selector" ).ojButton( "option", "label", "custom label" );
         */
        label: null,
        
        /**
         * <p>Icons to display in the button.  Support is as follows:
         * <ul>
         *   <li>Any combination of start and end icons can be specified, with or without the label (see <code class="prettyprint">display</code> option).</li>
         *   <li>Icons are supported for push buttons created from buttons and anchors, and for toggle buttons (radios and checkboxes).</li>
         *   <li>Icons are not supported for push buttons created from inputs of type button, submit, and reset.</li>
         * </ul>
         * 
         * <p>The start icon is displayed before the label text (on the left in LTR), and the end icon is displayed after the 
         * label (on the right in LTR).  In RTL, the positions are reversed.
         * 
         * <p>The <code class="prettyprint">start</code> and <code class="prettyprint">end</code> properties accept the following values:
         * 
         * <ul>
         *   <li>One or more style class names (as seen in the examples).</li>
         *   <li><code class="prettyprint">null</code>, indicating "no icon."</li>
         *   <li><code class="prettyprint">"auto"</code>, supported for the end icon only.  This value indicates that the end icon is a dropdown arrow if this is a menu button, and is absent otherwise.</li>
         * </ul>
         * 
         * @expose
         * @memberof oj.ojButton
         * @instance
         * @type {Object}
         * @default <code class="prettyprint">{ start: null, end: "auto" }</code>
         * 
         * @example <caption>Initialize the button, specifying both icons:</caption>
         * $( ".selector" ).ojButton({ "icons": { start: "demo-icon-font demo-bookmark-icon-16", 
         *                                        end: "auto" } });
         * 
         * @example <caption>Get or set the <code class="prettyprint">icons</code> option, after initialization:</caption>
         * // getter
         * var icons = $( ".selector" ).ojButton( "option", "icons" );
         * 
         * // setter, specifying both icons:
         * $( ".selector" ).ojButton( "option", "icons", { start: "oj-fwk-icon-caret-start oj-fwk-icon", 
         *                                                 end: "demo-icon-font demo-grid-icon-16" } );
         */
        icons:
        {
            /**
             * <p>The start icon of the button.  See the top-level <code class="prettyprint">icons</code> option for details.
             * 
             * @expose
             * @alias icons.start
             * @memberof! oj.ojButton
             * @instance
             * @type {?string}
             * @default <code class="prettyprint">null</code>
             * 
             * @example <caption>Get or set the <code class="prettyprint">icons.start</code> sub-option, after initialization:</caption>
             * // getter
             * var startIcon = $( ".selector" ).ojButton( "option", "icons.start" );
             * 
             * // setter:
             * $( ".selector" ).ojButton( "option", "icons.start", "oj-fwk-icon-caret-start oj-fwk-icon" );
             */
            start: null,
            /**
             * <p>The end icon of the button.  See the top-level <code class="prettyprint">icons</code> option for details.
             * 
             * @expose
             * @alias icons.end
             * @memberof! oj.ojButton
             * @instance
             * @type {?string}
             * @default <code class="prettyprint">"auto"</code>
             * 
             * @example <caption>Get or set the <code class="prettyprint">icons.end</code> sub-option, after initialization:</caption>
             * // getter
             * var startIcon = $( ".selector" ).ojButton( "option", "icons.end" );
             * 
             * // setter:
             * $( ".selector" ).ojButton( "option", "icons.end", "demo-icon-font demo-grid-icon-16" );
             */
            end: "auto" 
        },
        
        /**
         * <p>JQ selector identifying the JET Menu that the button should launch. If specified, the button is a WAI-ARIA-compliant menu button.  
         * 
         * <p>By default, menu buttons have a downward pointing "dropdown" arrow for their end icon.  See the <code class="prettyprint">icons</code> option for details.
         * 
         * <p>Menu button functionality is supported for Buttons based on button or anchor tags.  (Buttons based on input tags either do not support the dropdown icon, 
         * or do not make sense for use as a menu button, or both.)
         * 
         * <p>The JET Menu should be initialized before being set on a button's <code class="prettyprint">menu</code> option.  This means that if the menu is specified 
         * at create time, then the menu should be initialized first, before the button referencing it is initialized.  If the components are initialized using 
         * <code class="prettyprint">ojComponent</code> bindings, then the order can be controlled either by using separate <code class="prettyprint">applyBindings</code> 
         * calls, or by placing the menu before the button in the document.
         * 
         * <p>The menu-before-button ordering can lead to a less intuitive tab order.  To avoid this while using a single <code class="prettyprint">applyBindings</code> call, the
         * <code class="prettyprint">menu</code> option can be set after both components are initialized, thus meeting the requirement that the menu be inited when set 
         * on the button.
         * 
         * @expose
         * @memberof oj.ojButton
         * @instance
         * @type {Object}
         * @default <code class="prettyprint">null</code>
         * 
         * @example <caption>Initialize a menu button:</caption>
         * $( ".selector" ).ojButton({ "menu": "#myMenu" });
         * 
         * @example <caption>Get or set the <code class="prettyprint">menu</code> option, after initialization:</caption>
         * // getter
         * var menu = $( ".selector" ).ojButton( "option", "menu" );
         * 
         * // setter
         * $( ".selector" ).ojButton( "option", "menu", ".my-marker-class" );
         */
        menu: null

        // Events
        
        /**
         * Triggered when the button is created.
         *
         * @event 
         * @name create
         * @memberof oj.ojButton
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Empty object included for consistency with other events
         * 
         * @example <caption>Initialize the button with the <code class="prettyprint">create</code> callback specified:</caption>
         * $( ".selector" ).ojButton({
         *     "create": function( event, ui ) {}
         * });
         * 
         * @example <caption>Bind an event listener to the <code class="prettyprint">ojcreate</code> event:</caption>
         * $( ".selector" ).on( "ojcreate", function( event, ui ) {} );
         */
        // create event declared in superclass, but we still want the above API doc
    },
    
    _create: function() // Override of protected base class method.  Method name needn't be quoted since is in externs.js.
    {
        // Add "form reset" handler to form (if any) that updates checked state of all buttons on form.
        // Register on the form once with a "static" button namespace, not once per button with each particular button's namespace, 
        // so handler doesn't get removed if this particular button is destroyed.
        this.element.closest( "form" )
            .unbind( "reset" + BUTTON_EVENT_NAMESPACE )
            .bind( "reset" + BUTTON_EVENT_NAMESPACE, function() {
                var form = $( this );
                setTimeout(function() {
                    var $buttons = form.find( ":oj-button" ).each(function() {
                        $( this ).data( "oj-ojButton" )._applyCheckedStateFromDom(false);
                    });
                    
                    // if last button in form has been destroyed or moved out, remove the handler
                    if (!$buttons.length)
                        form.unbind( "reset" + BUTTON_EVENT_NAMESPACE );
                }, 1 );
            } );
        
        // Sync up disabled option and disabled DOM property.
        // If app set the option to valid value (true/false), then that wins, else DOM wins (which always has a valid value).
        if ( typeof this.options.disabled !== "boolean" )
        {   // then app either didn't set the option from its initial value of null, or they set it 
            // to invalid value which we'll ignore, so set the option from the DOM.  Just set the ivar without calling _setOption()
            // here, since we call it below.
            // For anchors, this line always sets it to false.  (Neither JQUI nor JET look for the .oj-disabled class for anchors, 
            // so the only way to disable an anchor button at create time is via the API.  At refresh time, JQUI did look 
            // for the .oj-disabled class, but our refresh doesn't handle disabled.)
            this.options.disabled = !!this.element.prop( "disabled" );
        } // else the app definitely set the option to true or false, since default was null, so set app's value 
        // on the DOM.  No need to do that here, since we call _setOption("disabled"...) below, which sets the DOM property.
        
        // facilitate removing menuButton handlers separately, if app clears the "menu" option
        this.menuEventNamespace = this.eventNamespace + "menu";
        
        this._initButtonTypes();
        this.hasTitle = !!this.rootElement.attr( "title" );

        var self = this,
            options = this.options,
            toggleButton = this.type === "checkbox" || this.type === "radio",
            activeClass = !toggleButton ? "oj-active" : "",
            focusClass = "oj-focus";

        this.rootElement.addClass( BASE_CLASSES );
        
        this.buttonElement
            .bind( "mouseenter" + this.eventNamespace, function() {
                if ( options.disabled )
                    return;
                if ( this === _lastActive ) 
                    self.rootElement.addClass( "oj-active" );

                self.rootElement.addClass( "oj-hover" )
                                .removeClass( "oj-default" );
            })
            .bind( "mouseleave" + this.eventNamespace, function() {
                self.rootElement.removeClass( "oj-hover" );

                if ( options.disabled )
                    return;
                self.rootElement.removeClass( activeClass );
                self._addOrRemoveOJDefaultClass();
            })
            .bind( "click" + this.eventNamespace, function( event ) {
                if ( options.disabled )
                {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                }
            });

        this.element
            .attr( "role", "button" )
            .bind( "focus" + this.eventNamespace, function() {
                // no need to check disabled, focus won't be triggered anyway
                self.rootElement.addClass( focusClass )
                                .removeClass( "oj-default" );
            })
            .bind( "blur" + this.eventNamespace, function() {
                self.rootElement.removeClass( focusClass );
                self._addOrRemoveOJDefaultClass();
            });

        if ( toggleButton )
        {
            this.element.bind( "change" + this.eventNamespace, function( event ) {
                self._applyCheckedStateFromDom(true); // we just get one change event for entire radio group, even though up to 2 changed, so must refresh entire radio group, not just this button
                
                // if in a buttonset that tracks checked state (i.e. checkbox set or single 
                // radio group), then set that option and fire optionChange event
                var buttonset = $( this ).closest( ":oj-buttonset" ).data( "oj-ojButtonset" );
                var checkedState = buttonset && buttonset._getCheckedFromDom(buttonset.$buttons);
                if (buttonset && checkedState!==undefined)
                {
                    buttonset._optionChangeOriginalEvent = event;
                    
                    // only sets the option and fires optionChange, since _optionChangeOriginalEvent ivar is set
                    buttonset._setOption("checked", checkedState);
                }
            });
            
            // Required for FF, where click-drag on checkbox/radio btn's label(JET decorates label as button for toggle buttons ) 
            // will not yield in to click event and also trasfers focus out of the <input> element and hence breaks arrow navigation. 
            // To fix, If mouse moves between mouseDown/mouseUp (drag) with in the boundaries of button then focus should be set 
            // on the button which will ensure proper arrow key navigation(see bug 18477039 for more details).
            this.buttonElement
                .bind("mousedown" + this.eventNamespace, function(event) {
                    if (options.disabled)
                        return;
                    _lastToggleActive = this;
                    self.document.one("mouseup", function() {
                        _lastToggleActive = null;
                    });
                })
                .bind("mouseup" + this.eventNamespace, function(event) {
                    if (options.disabled)
                        return;
                    if (this === _lastToggleActive) {
                        self.element.focus();
                    }
                });
        }

        if ( this.type === "checkbox" )
        {
            this.buttonElement.bind( "click" + this.eventNamespace, function(event) {
                if ( options.disabled )
                    return false;
            });
            
            // role="button" requires both Space and Enter support, but radios and checkboxes natively support only Space, so add Enter.
            // This fire-click-on-Enter logic gives Enter the same behavior as Space for checkboxes in Chrome, FF, and IE9:
            // In Chrome28 and IE9, for Space and Enter on Checkboxes, first the "checked" value updates, then change event, then click event.
            // In FF22, for Space and Enter on Checkboxes, first the "checked" value updates, then click event, then change event.
            // Unlike the radio Enter handler, we get this good behavior by only firing "click".
            this.element.bind( "keyup" + this.eventNamespace, function(event) {
                if ( event.keyCode === $.ui.keyCode.ENTER ) {
                    if ( !options.disabled ) {
                        //console.log("checkbox Enter handler firing click event");
                        self.element.click();
                    }
                }
            });
        } else if ( this.type === "radio" )
        {
            this.buttonElement.bind( "click" + this.eventNamespace, function() {
                if ( options.disabled )
                {
                    return false;
                }
            });
            
            // role="button" requires both Space and Enter support, but radios and checkboxes natively support only Space, so add Enter.
            // For radios, this handler gives Enter in Chrome28/ IE9/ FF22 the same behavior as Space on Chrome.  Since Space in IE/FF is 
            // different than Space in Chrome, this means that Enter and Space are not quite the same within those browsers.
            // For Space and Enter on unchecked radios in Chrome28 and IE9:
            //   - first the "Checked" value updates, then change event, then click event.
            // For already-checked radios, where activation would just check it again:
            //   - Space and Enter in Chrome28, and Enter in IE9:  do nothing.
            //   - Space in IE9:  first the "Checked" value updates, then click event.  (No change event since nothing changed.)
            //     (This is the only Chrome/IE9 Space/Enter difference.)
            // In FF22:
            //   - Space on unchecked radios: first the "Checked" value updates, then click event, then change event.
            //   - Enter on unchecked radios is same as Chrome.  (Different event ordering than FF.)
            //   - Space on checked radios is like IE9: first the "Checked" value updates, then click event.  (No change event since nothing changed.)
            //   - Enter on checked radios is same as Chrome.  (Do-nothing.)
            this.element.bind( "keyup" + this.eventNamespace, function(event) {
                if ( event.keyCode === $.ui.keyCode.ENTER )
                {
                    if ( !self.element[0].checked && !options.disabled ) {
                        //console.log("radio Enter handler found radio unchecked, so checking it and firing click event");

                        // Unlike the checkbox Enter handler, we set checked=true and fire changed before firing click, without which 
                        // we didn't get the exact behavior described above.  Without setting checked, the click handlers in all 3 desktop
                        // browsers saw the "old" "checked" value when Enter was pressed on radios, which broke Buttonset's focus mgmt logic.
                        // If we set checked, then change no longer fires automatically, in at least some browsers, so we have to fire it 
                        // manually, both for apps that rely on it, and because our code relies on our change listener to update the "checked" styling.
                        self.element[0].checked = true;
                        self.element.change();
                        self.element.click();
                    }
                }
            });
        } else // neither checkbox nor radio, so not a toggle button, so element, buttonElement, and rootElement are all the same node
        {
            this.buttonElement
                .bind( "mousedown" + this.eventNamespace, function( event ) {
                    if ( options.disabled ) {
                        return false;
                    }
                    if ( event.which === 1 ) // don't show active/pressed-down state unless left mouse button, since only that button will click the button after mouseup
                    { 
                        $( this ).addClass( "oj-active" )
                                 .removeClass( "oj-default" );
                        _lastActive = this;
                        self.document.one( "mouseup", function() {
                            _lastActive = null;
                        });
                    }
                })
                .bind( "mouseup" + this.eventNamespace, function() {
                    if ( options.disabled ) 
                        return false;
                    $( this ).removeClass( "oj-active" );
                    self._addOrRemoveOJDefaultClass();
                })
                .bind( "keydown" + this.eventNamespace, function(event) {
                    if ( options.disabled ) 
                        return false;
                    if ( event.keyCode === $.ui.keyCode.SPACE || event.keyCode === $.ui.keyCode.ENTER ) {
                        $( this ).addClass( "oj-active" )
                                 .removeClass( "oj-default" );
                    }
                })
                // see #8559, we bind to blur here in case the button element loses
                // focus between keydown and keyup, it would be left in an "active" state
                .bind( "keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                    $( this ).removeClass( "oj-active" );
                    self._addOrRemoveOJDefaultClass();
                });

            if ( this.buttonElement.is("a") ) 
            {
                //Chrome is not updating document.activeElement on click of <a> which is needed for ojPopup and 
                //setting tabIndex to a non-negative value will fix this. Refer bug 18744322 
                var tabIndex = this.buttonElement.attr( "tabindex" ); 
                if(tabIndex === 'undefined' || tabIndex === null || isNaN(tabIndex) || parseInt(tabIndex, 10) < 0 ) // Don't override if user already set a positive tabIndex.
                {
                    this.buttonElement.attr( "tabindex", "0" ); 
                }   

                this.buttonElement.bind( "keyup" + this.eventNamespace, function(event) {
                    if ( event.keyCode === $.ui.keyCode.SPACE ) 
                    {
                        // JQUI's TODO: pass through original event correctly (just as 2nd argument doesn't work)
                        $( this ).click();
                    }
                });
            }
        } // end of: if (checkbox) {} else if (radio) {} else {} 
        
        this._setOption( "disabled", options.disabled );
        this._handleLabelAndIconsAtCreateTime();
        this._setupMenuButton();
        
        // call this at the *end* of _create, since it needs to know whether any state classes like oj-active, oj-disabled, oj-selected, oj-hover, .oj-focus 
        // have been applied.
        this._addOrRemoveOJDefaultClass();

        this._super();
    },
   
    _initButtonTypes: function() // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    { 
        var labelSelector, checked;

        // for toggle buttons (radio/checkbox), element is <input>, buttonElement is <label>,
        // and rootElement is a new wrapper element we create.
        if ( this.element.is("input[type=checkbox]") )
            this.type = "checkbox";
        else if ( this.element.is("input[type=radio]") )
            this.type = "radio";
        
        // for push buttons (next 2 cases), element, buttonElement, and rootElement are all the same elem.  We ignore <label> if present.
        else if ( this.element.is("input[type=button],input[type=submit],input[type=reset]") )
            this.type = "input";
        else if ( this.element.is("button,a"))
            this.type = "button";
        else 
            throw new Error("JET Button not supported on this element type");

        if ( this.type === "checkbox" || this.type === "radio" ) 
        {
            // TBD: rather than requiring the label to be supplied, should we just create one for them if it's not there?
            labelSelector = "label[for='" + this.element.attr("id") + "']";
            this.buttonElement = this.element.siblings().filter( labelSelector ).addClass( "oj-button-label" );
             
            this.element
                .addClass( "oj-helper-hidden-accessible" )
                .add(this.buttonElement) // doesn't mutate this.element
                .wrapAll("<span></span>"); // add root node around label/input

            this.rootElement = this.element.parent(); // the new root
            
            checked = this.element[0].checked;
            if ( checked ) {
                this.rootElement.addClass( "oj-selected" )
                                .removeClass( "oj-default");
            }
            // else no need to removeClass since this code runs only at _create time
            
            // must be set for toggle buttons even if false, since presence of this attr conveys to AT's 
            // whether it's a toggle button or push button.
            this.element.attr( "aria-pressed", checked );
        } else 
        {
            this.buttonElement = this.element;
            this.rootElement = this.element;
        }
    },

    /**
     * Returns a <code class="prettyprint">jQuery</code> object containing the element visually representing the button.  For checkboxes and radios, this is the label, not the input.  
     * 
     * <p>This method does not accept any arguments.
     * 
     * @expose
     * @memberof oj.ojButton
     * @instance
     * @return {jQuery} the button
     * 
     * @example <caption>Invoke the <code class="prettyprint">widget</code> method:</caption>
     * var widget = $( ".selector" ).ojButton( "widget" );
     */
    widget: function() // Override of public base class method.  Method name needn't be quoted since is in externs.js.
    { 
        return this.rootElement;
    },
    
    _destroy: function() // Override of protected base class method.  Method name needn't be quoted since is in externs.js.
    {
        this._removeMenuBehavior();
        
        // TBD: won't need this after the restore-attrs feature is in place.
        this.element
            .removeClass( "oj-helper-hidden-accessible" )
            .removeAttr( "role" )
            .removeAttr( "aria-pressed" );
        
        var isToggle = this.type === "checkbox" || this.type === "radio";
        
        // TBD: won't need this after the restore-attrs feature is in place.
        if ( !isToggle ) 
            this.rootElement.removeClass( BASE_CLASSES + " " + STATE_CLASSES + " " + TYPE_CLASSES );
        
        this.buttonElement.html( this.buttonElement.find(".oj-button-text").html() );
        
        if ( !isToggle )
        {
            // TBD: won't need this after the restore-attrs feature is in place.
            if ( !this.hasTitle )
                this.rootElement.removeAttr( "title" );
        } else 
        {
            this.buttonElement.removeClass( "oj-button-label" ); // TBD: won't need this after the restore-attrs feature is in place.
            
            // Bug 18721589: If the button is stamped out by a KO foreach (with or without a containing buttonset), and the foreach 
            // observable is updated to no longer include the button, then _destroy() is called.  Due to the ordering of tasks, if 
            // unwrap() is called directly, the nodes winds up back into the DOM.  To avoid this, we use setTimeout(0).  Per 
            // architect request, we don't call unwrap() if the wrapper has no parent, as in this KO case, to avoid uncertainty as 
            // to what unwrap would do.  (In case this ever causes a problem for apps intentionally destroying a disconnected button, 
            // note that in practice it doesn't seem to cause problems to unwrap in that case.)
            var self = this;
            setTimeout(function() {
                if (self.rootElement.parent().length) {
                    self.element.unwrap(); // remove rootElement
                }
            }, 0 );
        }

        if( _lastToggleActive === this.buttonElement[0] )
        {
            _lastToggleActive = null; //clear _lastToggleActive flag, while destroying the button.
        }
    },
    
    // In browsers [Chrome v35, Firefox v24.5, IE9, Safari v6.1.4], blur and mouseleave events are generated for hidden content but not detached content, 
    // so for detached content only, we must use this hook to remove the focus and hover classes.  
    _NotifyDetached: function() {
        //Remove focus/hover/active style classes when button element got detached from document. 
        //This ensures that button is displayed without hover/focus state when it is re-attached to DOM. Refer bug 18819266.
        this.rootElement.removeClass("oj-active oj-hover oj-focus");
        this._addOrRemoveOJDefaultClass();
    },

    _setOption: function( key, value, flags ) // Override of protected base class method.  Method name needn't be quoted since is in externs.js.
    {
        this._super( key, value, flags );
        
        switch (key) 
        {
            case "disabled":
                // _super() applies oj-disabled and aria-disabled to rootElement (see code below), and removes oj-hover/focus/active from associated "-ables"
                value = !!value;
                
                if (!this.element.is("a")) // i.e. <button> or <input> (including type=radio|checkbox|other)
                {
                    // <button> and <input> (including type=radio|checkbox|other) have this property, but <a> doesn't
                    this.element.prop( "disabled", value ); // JQUI sets this for <a>'s too.
                    
                    //Toggle oj-enabled style class based on the disabled flag as it should have either oj-enabled or oj-disbaled not both at any point of time.
                    this.widget().toggleClass( "oj-enabled", !value );
                    
                    // _super() puts aria-disabled on the rootElement.  Per wai-aria, don't put aria-disabled on element already having disabled 
                    // attr.  (And if we DID apply aria-disabled, for radios/checkboxes it should go on the element / input, not the buttonElement / label or rootElement, 
                    // so the _super() behavior used by JQUI button is doubly wrong.)
                    this.rootElement.removeAttr( "aria-disabled" );
                } // else is <a>, so we keep the aria-disabled that _super() put on it.
                  // Unlike radios/checkboxes, _super() puts it on the correct element for <a>'s since element and rootElement are both the <a>.
                
                if (value)
                {
                    // TBD: when the handling of oj-active in baseComponent._setOption("disabled") is finalized, review whether this should be handled there instead.
                    this.widget().removeClass("oj-active oj-default oj-hover oj-focus");
                    
                    // when disabling a menu button, dismiss the menu if open
                    this._dismissMenu(null, null, true);
                }
                else
                {
                    this._addOrRemoveOJDefaultClass();
                }

                break;
            case "label":
                this._setLabelOption();
                break;
            case "display":
                if ( this.type !== "input" ) // <input type=button|submit|reset> doesn't support child nodes, thus no icons, icon-only buttons, etc.
                    this._setDisplayOptionOnDom();
                break;
            case "icons":
                this._setIconsOption(true);
                break;
            case "menu": // setting/clearing the menu sets whether this is a menuButton
                if (this.options.icons.end === "auto") // then the end icon is a dropdown arrow iff the new menu value points to a valid menu, so must call...
                    this._setIconsOption(false);
                this._setupMenuButton();
                break;
        }
    },
    
    /**
     * Refreshes the button. JET components require a <code class="prettyprint">refresh()</code> after a supported DOM change is made 
     * that affects the component, of which the component would otherwise be unaware.  
     * 
     * <p>This method calls <code class="prettyprint">baseComponent.refresh()</code>, but doesn't currently do anything Button-specific.
     * Note that anything having a JS API, such as the Button's label, disabled state, and checked state, must be set via the API, not 
     * by mutating the DOM and calling <code class="prettyprint">refresh()</code>.  (For the checked state, see Buttonset's 
     * <code class="prettyprint">checked</code> option.)  
     * 
     * @expose 
     * @memberof oj.ojButton
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     * $( ".selector" ).ojButton( "refresh" );
     */
    refresh: function() // Override of public base class method (unlike JQUI).  Method name needn't be quoted since is in externs.js.
    {
        this._super();
    },
    
    // If this button is radio/checkbox, then this method gets the checked state from DOM's 
    // "checked" prop and toggles oj-selected and aria-pressed accordingly.
    // If wholeGroup param is true, and this button is a radio, then do that for all buttons in the group.
    _applyCheckedStateFromDom: function(wholeGroup) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        if ( this.type === "radio" ) 
        {
            (wholeGroup ? _radioGroup( this.element[0] ) : this.element ).each(function() {
                var $radioWidget = $( this ).data( "oj-ojButton" ); // definitely exists because _radioGroup() checks for :oj-button 
                
                if ( this.checked )
                {
                    $radioWidget.rootElement.addClass( "oj-selected" )
                                            .removeClass( "oj-default" );
                    $radioWidget.element.attr( "aria-pressed", "true" );
                } else 
                {
                    $radioWidget.rootElement.removeClass( "oj-selected" );
                    $radioWidget._addOrRemoveOJDefaultClass();
                    $radioWidget.element.attr( "aria-pressed", "false" );
                }
            });
        } else if ( this.type === "checkbox" ) 
        {
            if ( this.element[0].checked ) 
            {
                this.rootElement.addClass( "oj-selected" )
                                .removeClass( "oj-default" );
                this.element.attr( "aria-pressed", "true" );
            } else 
            {
                this.rootElement.removeClass( "oj-selected" );
                this._addOrRemoveOJDefaultClass();
                this.element.attr( "aria-pressed", "false" );
            }
        }
    },
    
    /* 
     * Method name sums it up.  Should only be called at create time.
     */
    _handleLabelAndIconsAtCreateTime: function() // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        var keepDom = false;
        if ( this.options.label === null ) {
            keepDom = true;
            this.options.label = (this.type === "input" ? this.buttonElement.val() : this.buttonElement.html());
        }
        
        if ( this.type === "input" ) { // <input type=button|submit|reset> doesn't support child nodes, thus no icons, etc.
            this._setLabelOnDomOfSpanlessButton();
        } else { // <button>, <a>, checkboxes, and radios
            var textSpan = this._setLabelOnDomAtCreateTime(keepDom);
            var hasStartIcon = this._setIconOnDom(true);
            var hasEndIcon = this._setIconOnDom(false);
            this._setDisplayOptionOnDom(textSpan, hasStartIcon, hasEndIcon);
        }
    },
    
    /*
     * Replace the button contents with a span containing the label:
     * - If app didn't set the label option, then reparent their DOM label to the new span.
     * - If app set the label option, then set escaped version onto label span.
     * Either way, button contents are completely replaced with the new span.
     * 
     * Should only be called at create time.
     * 
     * return the new textSpan
     */
    _setLabelOnDomAtCreateTime: function(keepDom) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        var buttonElement = this.buttonElement;
        var textSpan = $( "<span class='oj-button-text'></span>", this.document[0] );
        
        if (keepDom) {
            textSpan.append(buttonElement.contents());
        } else { 
            buttonElement.empty();
            textSpan.text(this.options.label); // performs escaping; e.g. if label is <a>foo</a>, then text() replaces the span's contents with a text node containing that literal string (rather than setting innerHtml).
        }
        
        buttonElement.append(textSpan);
        return textSpan;
    },
    
    /*
     * Following is an old TBD from before the refactoring.  Now that we've sharply reduced the amount of unnecessary DOM replacement when 
     * options like label and icons are set, is this still an issue?  If so, can we further minimize the churn to fix it?
     * TBD: Per http://www.quirksmode.org/blog/archives/2007/01/a_note_about_ev.html, if a click handler blows away the thing that was 
     * clicked, it stops the click event from bubbling any further.  For antonym buttons like Play/Pause where the app puts a click handler
     * on the button that toggles its label and/or icons, this method replaces the clicked element, e.g. a <span> inside the <button>, 
     * stopping the bubble. [UPDATE: we keep the span now but change its contents.  Does that fix it?].  This makes bubbling brittle.  
     * Consider improving and/or doc'ing the issue.
     */
    
    /*
     * This method takes care of everything that needs to happen when the "label" option is set *after* create time.
     */
    _setLabelOption: function() // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        if ( this.type === "input" ) { // <input type=button|submit|reset> doesn't support child nodes, thus no icons, etc.
            this._setLabelOnDomOfSpanlessButton();
        } else {
            var textSpan = this.buttonElement.find( '.oj-button-text' );
            textSpan.text(this.options.label); // performs escaping; e.g. if label is <a>foo</a>, then text() replaces the span's contents with a text node containing that literal string (rather than setting innerHtml).
            this._setDisplayOptionOnDom(textSpan);
        }
    },
    
    /*
     * This method should only be called when the button is a "spanless" button, i.e. <input type=button|submit|reset>. It is called when the label is set, 
     * both at create time and when it is set later.  
     */
    _setLabelOnDomOfSpanlessButton: function() // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        // TBD: The "if label" check is from JQUI.  Is there some reason that setting "" should be ignored?
        // Probably not too harmful since they should set "display" option to "icons" instead, or set " " if they really want to.
        if ( this.options.label )
            this.element.val( this.options.label ); // escaping is automatic; e.g. if label is <span>foo</span>, then val() sets that literal string on the input's "value" attr.
    },
    
    /*
     * When the param is true, this method takes care of everything that needs to happen when the "icons" option is set *after* create time.
     * When the param is false, this method takes care of everything that needs to happen when the "menu" option is set *after* create time, when icons.end is already "auto", 
     * which the caller should verify before calling this method.  (When icons.end === "auto", toggling the "is a menuButton" status affects the end icon.)
     */
    _setIconsOption: function(doStart) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        if ( this.type === "input" ) // <input type=button|submit|reset> doesn't support child nodes, thus no icons, etc.
            return;
        
        var hasStartIcon;
        if (doStart)
            hasStartIcon = this._setIconOnDom(true);
        
        var hasEndIcon = this._setIconOnDom(false);
        this._setDisplayOptionOnDom(undefined, hasStartIcon, hasEndIcon);
    },
    
    /*
     * This method sets either the start or end icon on the DOM, depending on the param, adding or removing the 
     * icon span as needed.  It is called both at create time and when the icon changes later.
     * 
     * param isStart boolean, whether is start or end icon
     * return boolean indicating whether an icon was set on DOM
     */
    _setIconOnDom: function(isStart) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        if (isStart) {
            var standardIconClass = 'oj-button-icon-start';
            var appIconClass = this.options.icons.start;
            var lastIvar = "_lastStartIcon";
            var pendTo = "prependTo";
        } else {
            standardIconClass = 'oj-button-icon-end';
            appIconClass = this._getEndIconOption();
            lastIvar = "_lastEndIcon";
            pendTo = "appendTo";
        }
        
        var iconSpan = this.buttonElement.find( "."+standardIconClass );
        
        if ( appIconClass ) {
            if ( iconSpan.length ) {
                // remove the app icon class we set last time
                var oldAppIconClass = this[lastIvar];
                iconSpan.removeClass(oldAppIconClass);
            } else {
                iconSpan = $( "<span></span>" )
                    .addClass( standardIconClass )
                    [pendTo]( this.buttonElement );
            }
            iconSpan.addClass( appIconClass );
        } else {
            iconSpan.remove();
        }
        
        // remember the app icon class we set, so we can remove it next time
        this[lastIvar] = appIconClass;
        
        return !!appIconClass;
    },
    
    /*
     * Gets the actual end icon.  If icons.end is "auto", the answer depends on whether this is a menuButton or not.
     */
    _getEndIconOption: function() // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        var icons = this.options.icons;
        return (icons.end === "auto") 
               ? (this._getMenu() ? "oj-component-icon oj-button-menu-dropdown-icon" : null)
               : icons.end;
    },
    
    /*
     * Hides / shows the label, and adds / removes the rootElement tooltip, depending on whether 
     * display is "icons" (and whether there are in fact icons).  Doesn't add/remove the 
     * tooltip if app provided one initially.
     * 
     * Sets the corresponding root style class, e.g. "oj-button-text-only" or "oj-button-text-icon-start".
     * 
     * TODO: need to call this *after* setRootAttributes so app has a chance to set their own 
     * tooltip for checkbox/radio.  
     * 
     * Must be called when display, icons, or label options are set.
     * If icons.end is "auto", must be called when menu option is set.
     * 
     * Caller must check that it's not a spanless button before calling this method.
     * 
     * All params optional.
     */
    _setDisplayOptionOnDom: function(textSpan, hasStartIcon, hasEndIcon) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        if (textSpan === undefined)
            textSpan = this.buttonElement.find( '.oj-button-text' );
        if (hasStartIcon === undefined)
            hasStartIcon = !!this.options.icons.start;
        if (hasEndIcon === undefined)
            hasEndIcon = !!this._getEndIconOption();
        
        var multipleIcons = hasStartIcon && hasEndIcon;
        var atLeastOneIcon = hasStartIcon || hasEndIcon;
        var displayIsIcons = this.options.display === "icons";
        
        if ( atLeastOneIcon && displayIsIcons )
        {
            textSpan.addClass( "oj-helper-hidden-accessible" );
            
            if ( !this.hasTitle )
            {
                var buttonText = /** @type {string}  tell GCC is getter, not setter, overload of text() */
                                 (textSpan.text());
                this.rootElement.attr( "title", $.trim( buttonText ) ); // use buttonText, which is escaped, not options.label, which isn't!
            }
        } else
        {
            textSpan.removeClass( "oj-helper-hidden-accessible" );
            
            if ( !this.hasTitle )
                this.rootElement.removeAttr( "title" );
        }
        
        var buttonClass = 
            !atLeastOneIcon
                ? "oj-button-text-only"
                : displayIsIcons
                    ? multipleIcons ? "oj-button-icons-only" : "oj-button-icon-only"
                    : multipleIcons 
                        ? "oj-button-text-icons"
                        : hasStartIcon
                            ? "oj-button-text-icon-start" 
                            : "oj-button-text-icon-end";
        
        this.rootElement.removeClass( TYPE_CLASSES )
                        .addClass( buttonClass );
    },
    
    /* 
     * This method adds/removes menuButton stuff from the element, based on the Button's "menu" option.
     */
    _setupMenuButton: function() // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        this._removeMenuBehavior();
        
        var menu = this._getMenu(); // non-null iff all criteria are met for this to truly be a menuButton
        if ( menu ) 
        {
            var self = this;
            this.element
                .attr("aria-haspopup", true)
                .on( "keydown" + this.menuEventNamespace, function( event ) { 
                    if (event.which === $.ui.keyCode.DOWN ) 
                    {
                        self._showMenu(event, "firstItem", menu);
                        return false;
                    } else if (event.which === $.ui.keyCode.ESCAPE )
                    {
                        self._dismissMenu(event, menu);
                        return false;
                    }

                    return true;
                })
                .on( "click" + this.menuEventNamespace, function( event ) {
                    //console.log("mb click handler");
                    if (!menu.__spaceEnterDownInMenu)
                    {
                        //console.log("mb click handler toggling");
                        self._toggleMenu(event, menu);
                    }
                    menu.__spaceEnterDownInMenu = false;
                    return false;
                });
            menu.widget()
                .on( "oj__dismiss" + this.menuEventNamespace, function( event, ui ) {
                    //console.log(this.options.label + ": mb dismiss handler");
                    self._menuDismissHandler(event);
                })
                .on( "ojbeforeshow" + this.menuEventNamespace, function( event, ui ) {
                    //console.log(this.options.label + ": mb beforeshow handler");
                    // if something else launches the same menu (including the case where it's our own *context* menu),
                    // then the *menuButton* menu is no longer showing, so unpress the button.
                    if (!self._launchingMenu)
                    {
                        //console.log(this.options.label + ": mb beforeshow handler calling dismiss handler");
                        self._menuDismissHandler(event);
                    }
                    self._launchingMenu = false;
                });
        }
    },
    
    /*
     * This method removes menuButton functionality from the element
     */
    _removeMenuBehavior: function() { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        this.element
            .removeAttr( "aria-haspopup" )
            .off( this.menuEventNamespace );
    },
    
    /* 
     * This Button is a MenuButton iff 1-3 are all true:
     *   (1) the "menu" option is specified
     *   (2) it's well-formed and points to a valid, already inited JET Menu
     *   (3) this is a <button> or <a> (not <input> of any type).
     * This method returns isMenuButton ? menu : null.
     * (Do NOT return null just because button is disabled, since that would mean disabled menuButtons lose their dropdown arrow, and possibly other problems.)
     */
    _getMenu: function() { // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
        var menu = this.options.menu;
//        var menuOptionSpecified = !!menu;
        
        if ( menu ) 
            menu = $(menu).data( "oj-ojMenu" ); // if selector finds >1 element, .data() uses the first one.
                                                // if selector finds 0 elements, .data() returns nothing.
        if ( menu && this.element.not("input"))
            return menu;
        
//        if (menuOptionSpecified)
            // TODO: log: menu option specified but was malformed or this is an input
        
        return null;
    },
    
    /*
     * Shows the menuButton menu if there is one and we're not disabled.
     * 
     * MenuButton types:
     * - We support menuButtons on push buttons based on <button> and <a>.
     *     - Architects require that we support menuButtons on at least some types of push buttons.
     *       I.e. if checkbox-based menuButtons were supported, it would not be OK for that to be the only type that's supported.
     * - <input type=button|submit|reset> work fine using the same code path as <button> and <a>, but architects approved proposal 
     *   not to support them for following reasons:
     *     - submit/reset menubuttons are semantically / behaviorally absurd.
     *     - these types don't support icons, i.e. the dropdown icon.
     *     - reduces exposure to issues like we had for checkboxes, without sacrificing anything since these flavors were undesirable
     *       for menuButton use anyway.
     *  - Radios are inappropriate for menuButtons.  Alternate clicks should open and close the menu, with corresponding visual 
     *    feedback from button, but radios are idempotent: they stay pressed on repeated clicks.
     *  - Architects approved proposal not to support checkboxes for following reasons:  
     *      - Checkbox-based menuButtons were considered a bit odd, and we had zero requirements for it.
     *      - The only thing they buy anyone is the checked state corresponding to the menu-open state, but there are several ways for 
     *        apps to find out if the menu is open, e.g. check its "hidden" status, check whether the oj-selected class is present, etc.
     *      - They proved to be somewhat brittle, with *different* event-ordering problems in each browser.  Even if we spent the time 
     *        to fix it, they could still be a source of problems later, which didn't seem worth it for a flavor no one wanted.
     * 
     * param event required
     * param focus required
     * param menu optional. pass it if already have it
     */
    _showMenu: function(event, focus, menu) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        if (this.options.disabled) 
            return;
        if (!menu)
            menu = this._getMenu();
        if (menu) 
        {
            // Per UX requirements, menuButtons should look pressed/checked iff the menu is open:
            // - For push buttons, per architectural review, just add/remove oj-selected even though it's a push button.
            //     - Per a11y review, that's fine, but do NOT apply aria-pressed to push buttons, which would turn it into a toggle button for AT users.  He said that 
            //       would just confuse things, and that the visual pressed-in look was just eye candy in this case, not semantics that we need to show to AT users. 
            // - If checkbox menuButtons were supported, obviously we'd toggle the pressed look by checking/unchecking the button, which in turn would toggle oj-selected.
            //   In that case, we'd fire DOM checked event (right?) and if wrapped in Buttonset, update its checked option and fire optionChange event.
            this.rootElement.addClass( "oj-selected" )
                            .removeClass( "oj-default" );
            
            // No need to fire click event, since not appropriate for DownArrow, and already fired for user click.
            
            this._launchingMenu = true;
            menu.show(event, {"launcher": this.element, "focus": focus});
            this._menuVisible = true;
        }
    },
    
    /*
     * Dismisses the menuButton menu if there is one, and if either we're not disabled or force is true
     * 
     * param event optional
     * param menu optional. pass it if already have it
     * param force if true, will skip the disabled check; useful when dismissing *because* we've become disabled
     */
    _dismissMenu: function(event, menu, force) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        if (!force && this.options.disabled) 
            return;
        if (!menu)
            menu = this._getMenu();
        if (menu)
        {
            menu.__collapseAll( event, true ); //Close open menus before hiding the popup so that submenus will not be shown on reopen.
            menu.__dismiss(event); // causes _menuDismissHandler to be called
        }    
    },
    
    /*
     * Handles menu dismissals, whether or not we dismissed it ourselves.  
     * See comments on similar code in _showMenu().
     * 
     * Also called by the beforeShow listener we put on the menu, *if* the launch was by something else, 
     * including our own context menu.  So if something steals our menu, we uncheck the button.
     * 
     * param event must remain optional, since some callers of _dismissMenu have no event
     */
    _menuDismissHandler: function(event) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        //console.log(this.options.label + ": button._menuDismissHandler called");
        if ( this.type === "button" ) {
            // then only reason for .oj-selected to be present is if it's an open menu button, 
            // in which case remove the class since the menu is being dismissed
            this.rootElement.removeClass( "oj-selected" );
            this._addOrRemoveOJDefaultClass();
        }
        // else it's not a menu button.  Probably never called in that case, but if it is, there's no need to 
        // clear oj-selected.  If this is a toggle button, doing so w/b harmful.

        
        this._menuVisible = false;
    },
    
    /*
     * Shows or dismisses the menu.
     * 
     * param event required
     * param menu optional. pass it if already have it
     */
    _toggleMenu: function(event, menu) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        if (this._menuVisible)
        {
            //console.log(this.options.label + ": _toggleMenu dismissing");
            this._dismissMenu(event, menu);
        } else 
        {
            //console.log(this.options.label + ": _toggleMenu showing");
            this._showMenu(event, "none", menu);
        }
    },

    /*
     * Adds the <code class="prettyprint">oj-default</code> marker to the component element if it is not already marked with any one these state markers, else removes oj-default: 
     * <code class="prettyprint">oj-active, oj-disabled, oj-selected, oj-hover, .oj-focus</code>
     */
    _addOrRemoveOJDefaultClass: function()
    {
        if ( ! this.rootElement.is( ".oj-active, .oj-disabled, .oj-selected, .oj-hover, .oj-focus" ))
            this.rootElement.addClass( "oj-default" );
        else
            this.rootElement.removeClass( "oj-default" );
    }
    
    // API doc for inherited methods with no JS in this file:

    /**
     * Removes the button functionality completely. This will return the element back to its pre-init state.
     * 
     * <p>This method does not accept any arguments.
     * 
     * @method
     * @name oj.ojButton#destroy
     * @memberof oj.ojButton
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">destroy</code> method:</caption>
     * $( ".selector" ).ojButton( "destroy" );
     */
});

/**
 * @class
 * @name oj.ojButtonset
 * @augments oj.baseComponent
 * @since 0.6
 * 
 * @classdesc
 * <h3 id="buttonsetOverview-section">
 *   JET Buttonset Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#buttonsetOverview-section"></a>
 * </h3>
 * 
 * <p>Description: Themeable, WAI-ARIA-compliant visual and semantic grouping container for [JET Buttons]{@link oj.ojButton}.
 * 
 * <p>The JET Buttonset component can be used to group related buttons, such as a group of radios or checkboxes.  Buttonset provides
 * visual and semantic grouping and WAI-ARIA-compliant focus management.
 * 
 * <p>When a Buttonset is created or refreshed, it creates JET Buttons out of all contained DOM elements supported by JET Button 
 * that are not already Buttons, by calling <code class="prettyprint">.ojButton()</code> on them.
 * 
 * <p>A buttonset that contains radios should contain all radios in the radio group.  Checkboxes and radios in the buttonset should specify the 
 * <code class="prettyprint">value</code> attribute, since the <code class="prettyprint">checked</code> option refers to that attribute.
 * 
 * 
 * <h3 id="keyboard-section">
 *   Keyboard interaction and Focus management
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
 * <p>JET Buttonset manages its own focus.  It maintains a single tabstop, with arrow-key navigation within the buttonset.  This navigation 
 * skips disabled buttons, wraps around at the end, and adjusts correctly in RTL.
 * 
 * <p> When tabbing back into the buttonset, focus goes to the most recently focused button.  (To address a browser limitation, if that button is an 
 * unchecked radio having a checked groupmate, the latter is focused instead.)
 * 
 * <p>As with any JET Button, buttons in a buttonset are activated with <kbd>Enter</kbd> or <kbd>Spacebar</kbd>.  
 * 
 * <p>The application should not do anything to interfere with the focus management.  E.g. it should not set the <code class="prettyprint">tabindex</code> of the buttons, or 
 * do anything that prevents enabled buttons from being a tabstop.  Also, enabled buttons should remain user-visible, without which arrow-key
 * navigation to the button would cause the focus to seemingly disappear.
 * 
 * <p>The buttonset's focus management should be turned off when placing the buttonset in a [JET Toolbar]{@link oj.ojToolbar}.  See the <code class="prettyprint">focusManagement</code> option.
 * 
 * 
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 * 
 * <p>JET Buttonset takes care of focus management, as noted above, and setting <code class="prettyprint">role="group"</code> on the buttonset element.  
 * 
 * <p>In addition, as shown in the online demos, the application is responsible for applying <code class="prettyprint">aria-label</code> and/or 
 * <code class="prettyprint">aria-controls</code> attributes like the following to the buttonset element, if applicable per the instructions that follow:
 * 
 * <pre class="prettyprint">
 * <code>aria-label="Choose only one beverage.  Use left and right arrow keys to navigate."
 * aria-controls="myTextEditor"
 * </code></pre>
 * 
 * <p>A sentence like the first is appropriate for a buttonset consisting of a radio group, in order to convey the "select one" semantics 
 * to AT users.  It should be omitted for checkboxes and push buttons.
 * 
 * <p>The second sentence lets the user know how to navigate.  It should be omitted if the buttonset's focus management is turned off via 
 * the <code class="prettyprint">focusManagement</code> option.
 * 
 * <p>The <code class="prettyprint">aria-controls</code> attribute is appropriate if the buttonset is controlling something else on the page, e.g. 
 * bold/italic/underline buttons controlling a rich text editor.  
 *
 * <p>Disabled content: JET supports an accessible luminosity contrast ratio, 
 * as specified in <a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast">WCAG 2.0 - Section 1.4.3 "Contrast"</a>, 
 * in the themes that are accessible.  (See the "Theming" chapter of the JET Developer Guide for more information on which 
 * themes are accessible.)  Note that Section 1.4.3 says that text or images of text that are part of an inactive user 
 * interface component have no contrast requirement.  Because disabled content may not meet the minimum contrast ratio 
 * required of enabled content, it cannot be used to convey meaningful information.<p>
 * 
 * 
 * <h3 id="rtl-section">
 *   Reading direction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
 * </h3>
 * 
 * <p>The only supported way to set the reading direction (LTR or RTL) is to set the <code class="prettyprint">"dir"</code> attribute on the 
 * <code class="prettyprint">&lt;html></code> element of the page.  As with any JET component, in the unusual case that the reading direction
 * is changed post-init, the buttonset must be <code class="prettyprint">refresh()</code>ed, or the page must be reloaded. 
 * 
 * 
 * <h3 id="pseudos-section">
 *   Pseudo-selectors
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#pseudos-section"></a>
 * </h3>
 * 
 * <p>The <code class="prettyprint">:oj-buttonset</code> pseudo-selector can be used in jQuery expressions to select JET Buttonsets.  For example:
 * 
 * <pre class="prettyprint">
 * <code>$( ":oj-buttonset" ) // selects all JET Buttonsets on the page
 * $myEventTarget.closest( ":oj-buttonset" ) // selects the closest ancestor that is a JET Buttonset
 * </code></pre>
 * 
 * 
 * <h3 id="binding-section">
 *   Declarative Binding
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#binding-section"></a>
 * </h3>
 * 
 * <p>For components like Buttonset and Menu that contain a number of like items, applications may wish to use a <code class="prettyprint">foreach</code> Knockout binding 
 * to stamp out the contents.  This binding cannot live on the same node as the JET <code class="prettyprint">ojComponent</code> binding, and must instead live on a nested 
 * virtual element as follows:
 * 
 * <pre class="prettyprint">
 * <code>&lt;div id="drinkset" data-bind="ojComponent: {component: 'ojButtonset', checked: drink}"
 *      aria-label="Choose only one beverage.  Use left and right arrow keys to navigate.">
 *     &lt;!-- ko foreach: drinkRadios -->
 *         &lt;label data-bind="attr: {for: id}, text: label">&lt;/label>
 *         &lt;input type="radio" name="beverage"
 *                data-bind="value: id, attr: {id: id}"/>
 *     &lt;!-- /ko -->
 * &lt;/div>
 * </code></pre>
 * 
 * 
 * <h3 id="jqui2jet-section">
 *   JET for jQuery UI developers
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#jqui2jet-section"></a>
 * </h3>
 * 
 * <ol>
 *   <li>All JQUI and JET components inherit <code class="prettyprint">disable()</code> and <code class="prettyprint">enable()</code> methods from the base class.  This API 
 *       duplicates the functionality of the <code class="prettyprint">disabled</code> option.  In JET, to keep the API as lean as possible, we 
 *       have chosen not to document these methods outside of this section.</li>
 *   <li>JQUI Buttonset has an undocumented <code class="prettyprint">items</code> option allowing apps to get and set the selector used by Buttonset to find all its 
 *       buttonizable descendants.  This option has been removed in JET, as we do not want this to be settable.</li>
 *   <li>The focus management functionality is new in JET.</li>
 * </ol>
 * 
 * <p>Also, event names for all JET components are prefixed with "oj", instead of component-specific prefixes like "buttonset" or "menu".  
 * E.g. the JQUI <code class="prettyprint">buttonsetcreate</code> event is <code class="prettyprint">ojcreate</code> in JET, as shown in the doc for that event.
 * Reason:  This makes the API more powerful.  It allows apps to listen to "foo" events from <em>all</em> JET components via:
 * 
 * <pre class="prettyprint">
 * <code>$( ".selector" ).on( "ojfoo", myFunc);
 * </code></pre>
 * 
 * or to "foo" events only from JET Buttonsets (the JQUI functionality) via:
 * 
 * <pre class="prettyprint">
 * <code>$( ".selector" ).on( "ojfoo", ":oj-buttonset", myFunc);
 * </code></pre>
 * 
 * 
 * <!-- - - - - Above this point, the tags are for the class.
 *              Below this point, the tags are for the constructor (initializer). - - - - - - -->
 * 
 * 
 * @desc Creates a JET Buttonset.  If called after the buttonset is already created, is equivalent to the 
 * "set many options" overload of <code class="prettyprint">option()</code>.  
 * 
 * @param {Object=} options a map of option-value pairs to set on the component
 * 
 * @example <caption>Initialize the buttonset with no options specified:</caption>
 * $( ".selector" ).ojButtonset();
 * 
 * @example <caption>Initialize the buttonset with some options and callbacks specified:</caption>
 * $( ".selector" ).ojButtonset( { "disabled": true, "create": function( event, ui ) {} } );
 * 
 * @example <caption>Initialize the buttonset via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div id="beverages" data-bind="ojComponent: { component: 'ojButtonset', 
 *                                               disabled: true, 
 *                                               create: setupButtonset }">
 */
oj.__registerWidget("oj.ojButtonset", $['oj']['baseComponent'], 
{
    // private.  Was an undocumented JQUI option, which we removed, so I moved from options to here and added underscore.  Leave unquoted so gets renamed by GCC as desired.
    _items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a",
    
    widgetEventPrefix : "oj", 

    options: // options is in externs.js.  TODO: same as other prototype fields.
    {
        /**
         * The <code class="prettyprint">checked</code> option indicates which radio or checkboxes in the Buttonset are selected.
         * It corresponds to the <code class="prettyprint">value</code> attribute of those elements, which should always be set.
         * 
         * <p>If this Buttonset consists of a single radio group, and no other buttons, then <code class="prettyprint">checked</code> 
         * is a string equal to the <code class="prettyprint">value</code> attribute of the checked radio.  The option is 
         * <code class="prettyprint">null</code> if and only if no radio is selected.  Thus, an n-radio group has n+1 valid 
         * <code class="prettyprint">checked</code> values: the n radio values, and <code class="prettyprint">null</code> .
         * 
         * <p>If this Buttonset consists of one or more checkboxes, and no other buttons, then <code class="prettyprint">checked</code> is 
         * a possibly empty, non-<code class="prettyprint">null</code> string array containing the <code class="prettyprint">value</code> 
         * attributes of the checked checkboxes.  This array has "set", not "list", semantics; i.e. order is neither important nor guaranteed.
         * Thus, an n-checkbox set has 2^n valid <code class="prettyprint">checked</code> values: the 2^n possible subsets of n checkboxes.
         * 
         * <p>In all other cases, <code class="prettyprint">checked</code> is <code class="prettyprint">null</code>.
         * 
         * <p>After create time, the <code class="prettyprint">checked</code> state should be set via this API, not by setting the underlying DOM attribute.  
         * 
         * <p>The 2-way <code class="prettyprint">checked</code> binding offered by the <code class="prettyprint">ojComponent</code> binding 
         * should be used instead of Knockout's built-in <code class="prettyprint">checked</code> binding,
         * as the former sets the API, while the latter sets the underlying DOM attribute.
         * 
         * <p>It's still possible for the <code class="prettyprint">checked</code> option and DOM get out of synch by other means, e.g. if set of Buttons 
         * contained in the Buttonset changes, possibly due to a Knockout binding.  In this case, the app is responsible for updating the 
         * <code class="prettyprint">checked</code> option. 
         * 
         * <p>An <code class="prettyprint">optionChange</code> event is fired whenever this option changes, whether due to user interaction 
         * or programmatic intervention.  If the value is the same as the previous value (using order-independent "set" equality for 
         * checkboxes), no event will be fired.
         * 
         * <p>Often there is no need to listen for this event, since the <code class="prettyprint">ojComponent</code> 
         * <code class="prettyprint">checked</code> binding, discussed above, will update the bound 
         * observable whenever the <code class="prettyprint">checked</code> state changes.  
         * 
         * @expose
         * @memberof oj.ojButtonset
         * @instance
         * @type {?string|Array.<string>|undefined}
         * @default If not initially set, is initialized to reflect the initial DOM state
         * 
         * @example <caption>Initialize a buttonset with the <code class="prettyprint">checked</code> option specified:</caption>
         * // radio
         * $( ".selector" ).ojButtonset( { "checked": "tea" } );
         * 
         * // checkbox
         * $( ".selector" ).ojButtonset( { "checked": ["bold", "italic"] } );
         * 
         * @example <caption>Get or set the <code class="prettyprint">checked</code> option, after initialization:</caption>
         * // getter
         * var display = $( ".selector" ).ojButtonset( "option", "checked" );
         * 
         * // radio setter
         * $( ".selector" ).ojButtonset( "option", "checked", "tea" );
         * 
         * // checkbox setter
         * $( ".selector" ).ojButtonset( "option", "checked", ["bold", "italic"] );
         */
        checked: undefined, // initial value that's different from any valid values like null, so _create() can tell whether app set it.
                            // At Create time will definitely be replaced with valid value.
        
        /**
         * If the <code class="prettyprint">disabled</code> option is set to <code class="prettyprint">true</code> at create time, then 
         * all its buttons will be disabled.  If it is <code class="prettyprint">false</code> at create time, then each button's 
         * <code class="prettyprint">disabled</code> status will be set from the button's API and DOM in the same way 
         * as a standalone JET Button.
         * 
         * <p>Setting the <code class="prettyprint">disabled</code> option after creation will enable or disable all contained buttons.  Enabling or 
         * disabling the individual buttons will not update the value of Buttonset's <code class="prettyprint">disabled</code> option.
         * 
         * @member
         * @name disabled
         * @memberof oj.ojButtonset
         * @instance
         * @type {boolean}
         * @default <code class="prettyprint">false</code>
         * 
         * @example <caption>Initialize the buttonset with the <code class="prettyprint">disabled</code> option specified:</caption>
         * $( ".selector" ).ojButtonset( { "disabled": true } );
         * 
         * @example <caption>Get or set the <code class="prettyprint">disabled</code> option, after initialization:</caption>
         * // getter (does not reflect changes made directly to the buttons)
         * var disabled = $( ".selector" ).ojButtonset( "option", "disabled" );
         * 
         * // setter
         * $( ".selector" ).ojButtonset( "option", "disabled", true );
         */
        // disabled option declared in superclass, but we still want the above API doc
        
        /**
         * The <code class="prettyprint">focusManagement</code> option should be set to <code class="prettyprint">"none"</code> when the 
         * Buttonset is placed in a [JET Toolbar]{@link oj.ojToolbar}.  This allows the Toolbar to manage the focus with no interference from the Buttonset, 
         * so that arrow keys move within the entire Toolbar, not just within the Buttonset.  
         * 
         * @expose
         * @memberof oj.ojButtonset
         * @instance
         * @type {string}
         * @ojvalue {string} "oneTabstop" Focus management is enabled.  The Buttonset is a single tabstop with arrow-key navigation.
         * @ojvalue {string} "none" Focus management is disabled, to avoid interfering with the focus management of a containing component.
         * @default <code class="prettyprint">"oneTabstop"</code>
         * 
         * @example <caption>Initialize the buttonset with the <code class="prettyprint">focusManagement</code> option specified:</caption>
         * $( ".selector" ).ojButtonset( { "focusManagement": "none" } );
         * 
         * @example <caption>Get or set the <code class="prettyprint">focusManagement</code> option, after initialization:</caption>
         * // getter
         * var display = $( ".selector" ).ojButtonset( "option", "focusManagement" );
         * 
         * // setter
         * $( ".selector" ).ojButtonset( "option", "focusManagement", "none" );
         */
        focusManagement: "oneTabstop",
        
        // Events
        
        /**
         * Fired whenever a supported component option changes, whether due to user interaction or programmatic 
         * intervention.  If the new value is the same as the previous value, no event will be fired.
         * 
         * <p>Currently there is one supported option, <code class="prettyprint">checked</code>.  Additional 
         * options may be supported in the future, so listeners should verify which option is changing 
         * before taking any action.
         * 
         * <p>Often there is no need to listen for this event, since the 2-way <code class="prettyprint">checked</code> 
         * binding offered by the <code class="prettyprint">ojComponent</code> binding will update the bound 
         * observable whenever the <code class="prettyprint">checked</code> state changes.
         * 
         * @expose 
         * @event 
         * @memberof oj.ojButtonset
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Parameters
         * @property {string} ui.option the name of the option that is changing
         * @property {?string|Array.<string>} ui.previousValue the previous value of the option.
         *     <code class="prettyprint">null</code> iff the previous value was <code class="prettyprint">null</code>.
         * @property {?string|Array.<string>} ui.value the current value of the option.
         *     <code class="prettyprint">null</code> iff the current value is <code class="prettyprint">null</code>.
         * @property {Object} ui.optionMetadata information about the option that is changing
         * @property {string} ui.optionMetadata.writeback <code class="prettyprint">"shouldWrite"</code> or 
         *           <code class="prettyprint">"shouldNotWrite"</code>.  For use by the JET writeback mechanism.
         * 
         * @example <caption>Initialize the buttonset with the <code class="prettyprint">optionChange</code> callback specified:</caption>
         * $( ".selector" ).ojButtonset({
         *     "optionChange": function( event, ui ) {}
         * });
         *
         * @example <caption>Bind an event listener to the <code class="prettyprint">ojoptionchange</code> event:</caption>
         * $( ".selector" ).on( "ojoptionchange", function( event, ui ) {} );
         */
        optionChange: null
        
        /**
         * Triggered when the buttonset is created.
         *
         * @event 
         * @name create
         * @memberof oj.ojButtonset
         * @instance
         * @property {Event} event <code class="prettyprint">jQuery</code> event object
         * @property {Object} ui Empty object included for consistency with other events
         * 
         * @example <caption>Initialize the buttonset with the <code class="prettyprint">create</code> callback specified:</caption>
         * $( ".selector" ).ojButtonset({
         *     "create": function( event, ui ) {}
         * });
         * 
         * @example <caption>Bind an event listener to the <code class="prettyprint">ojcreate</code> event:</caption>
         * $( ".selector" ).on( "ojcreate", function( event, ui ) {} );
         */
        // create event declared in superclass, but we still want the above API doc
    },
    
    // If this is a radio or checkbox buttonset, and the specified checked value is valid, 
    //   then sets it on the buttons' checked properties in the DOM, and returns true,
    // Else it's an invalid value, or it's the non-radio, non-checkbox case and null was passed, which is valid for that case, 
    //   then returns false without changing DOM.
    // Does not set oj-selected or aria-pressed, so must call _applyCheckedStateFromDom() after this.  
    //   TBD: optionally, this method could do that work, perhaps controlled by a param
    // This method is called by _setOption("checked", ...) and _create > _setup.  
    // Does NOT require the buttons to already be JET Buttons (useful for _setup caller).
    _setCheckedOnDom: function(checked, $buttons) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        var type = $.type(checked);
        var valid;
        
        // If caller passes null there are 3 cases: (the radio branch handles null in all cases)
        // - This is a radio group, for which null means "no radio checked".  The radio branch will uncheck all radios
        //   and return true indicating that it was a valid value so it updated the DOM.
        // - This is a checkbox set, for which null is an invalid value.  The radio branch will correctly do nothing and return false.  
        // - Neither radio nor checkbox case, for which null is the one and only valid value.  The radio branch will do nothing 
        //   (correct; there's nothing to set on the DOM) and return false.  The only caller than calls in this case is the 
        //   _create > _setup caller, for which either return value is OK, since it can either keep the null value or call 
        //   _getCheckedFromDom which will return null.  _setOption doesn't call this method in this 3rd case.  
        if (type === "string" || type === "null") // radio
        {
            // before setting *any* buttons, verify that *all* buttons are radios in same group, and that the checked 
            // value to be set is null or matches one of the radio values
            var name = $buttons[0].name;
            valid = (name || $buttons.length<=1) // if name is "" and there's >1 radio, then they're in separate radio groups
                && $buttons.filter("input[type=radio][name=" + name + "]").length === $buttons.length 
                && (checked===null || $buttons.filter("[value=" + checked + "]").length);
            
            if ( valid )
            {
                $buttons.each(function() {
                    this.checked = (this.value === checked);
                });
            }
            
            return valid;
        } else if (type === "array") // checkbox
        {
            // before setting any buttons, verify that the checked value to be set is valid:
            
            // verify that all buttons are checkboxes, since is array
            valid = $buttons.filter("input[type=checkbox]").length === $buttons.length;
            
            // in a sorted copy of the array (concat makes a copy), verify no dupes and 
            // that all entries are values in the buttonset
            var last;
            valid = valid && checked.concat().sort().every(function(elem, index, array) {
                var retVal = elem !== last && $buttons.filter("[value=" + elem + "]").length;
                last = elem;
                return retVal;
            });
            
            if (valid)
            {
                $buttons.each(function() {
                    this.checked = (checked.indexOf(this.value) > -1);
                });
            }
            return valid;
        } else 
        {
            // didn't set on DOM b/c value was invalid (not the right type for *any* kind of buttonset)
            return false; 
        }
    },
    
    // if all buttons are radios with same group, returns value attr of selected radio (string), or null if none selected
    // else if all buttons are checkboxes, returns non-null, possibly empty string array containing values of selected checkboxes
    // else returns undefined.  In the API we use null, not undefined, for this case, so callers should map undefined to null before setting on DOM. 
    _getCheckedFromDom: function($buttons) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        var checked = undefined;
        var isRadio = null;
        var name = null;
        
        $buttons.each(function(index) {
            // at this point, all previous buttons, if any, were all radios in same group, or were all checkboxes
            var tagName = this.tagName.toLowerCase();
            if (tagName !== "input")
            {
                checked = undefined;
                return false; // stop iterating
            }
            
            var currentType = this.type.toLowerCase();
            var currentIsRadio;
            var currentName;
            
            if (currentType === "radio"){
                currentIsRadio = true;
                currentName = this.name.toLowerCase();
            } else if (currentType === "checkbox")
            {
                currentIsRadio = false;
                currentName = null;
            } else 
            {
                checked = undefined;
                return false; // stop iterating
            }
            
            // at this point, current button is input of type radio or checkbox
            
            // If this is not the first button, then bail if:
            // - this is a radio and previous were checkboxes or vice versa
            // - this is a radio in a different group than previous ones, which can happen 
            //   if the group names are different, or if the names are all "", in which 
            //   case each radio is in a separate radio group.
            if ( (checked !== undefined) // must be !== not != 
                 && ( currentIsRadio !== isRadio 
                      || currentName !== name
                      || (isRadio && !name) ) )
            { 
                checked = undefined;
                return false; // stop iterating
            }
            
            // at this point, all buttons so far including this one are either all radios in same group, or are all checkboxes
            
            if (checked === undefined) // this is first button
            {
                checked = currentIsRadio 
                    ? this.checked ? this.value : null
                    : this.checked ? [this.value] : [];
                isRadio = currentIsRadio;
                name = currentName;
            } else if (this.checked)
            {
                if (isRadio) 
                    checked = this.value;
                else
                    checked.push(this.value);
            } // else not first button and not checked, so leave "checked" at whatever value we set on previous iteration
        });
        
        return checked;
    },
    
    // are 2 checked option values equal?
    _checkedEquals: function(checked1, checked2) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        // handle null, string, and (rare) identically equal arrays
        if (checked1 === checked2)
            return true;
        else // handle arrays.  order needn't be same
            return $.type(checked1) === "array" && $.type(checked2) === "array" 
                   && !$(checked1).not(checked2).length && !$(checked2).not(checked1).length;
        
    },
    
    _create: function() // Override of protected base class method.  Method name needn't be quoted since is in externs.js.
    {
        this.element
            .addClass( "oj-buttonset oj-component" )
            .attr( "role", "group" );
        
        // call _setup from _create, not _init, so create listeners (called after _create before _init) see a fully inited component.
        // We don't implement _init at all, since it's intended to perform startup behaviors like autoOpen, 
        // not initing state or performing a refresh, and we have no such startup behaviors.
        this._setup(true);
        
        this._super(); // TODO: call this at beginning of method.  This will happen as part of the JET create-time refactoring.
    },

    /* 
     * Component developers: This API and functionality is subject to change pending architectural review!
     * See the baseComponent method for preliminary API doc.
     */
    _showContextMenu: function(menu, event)
    {
      // TODO: currently CM not supported when focusManagement off, because there's not necessarily a tabbable thing in the buttonset if 
      // focus is somewhere else in the toolbar.  Need to put focus on (say) body in that case.  New focus() solution should address this sort of thing.
      menu.show(event, {"launcher": this.element.find(":oj-button[tabindex=0]"), "focus": "menu"});
    },

    _setOption: function( key, value ) // Override of protected base class method.  Method name needn't be quoted since is in externs.js.
    {
        var bail = false;
        
        // if Button is calling this method due to user interaction checking a button, this is set; else it's not.
        var optionChangeOriginalEvent = this._optionChangeOriginalEvent;
        this._optionChangeOriginalEvent = null;
        
        if ( key === "disabled" )
            this.$buttons.ojButton( "option", key, value );
        
        // if app called option(), but not if called because user clicked button.  In latter case we know we 
        // passed a valid non-undefined value, and DOM is already up to date.
        if ( key === "checked" && !optionChangeOriginalEvent) 
        {
            if (value === null && this._getCheckedFromDom(this.$buttons) === undefined)
            {
                // _getCheckedFromDom() returns undefined iff buttonset is neither a single radio group nor a checkbox set.
                // In this case, when they pass null (the only valid value), there's nothing to set on DOM, 
                // but let_super() call and event firing logic run since it's a valid value.  The event almost always 
                // won't fire since the old value would have been null too, but if it was a different value the event 
                // will fire as it should.  The only way that could happen is if this buttonset was previously a checkbox set 
                // or single radio group, but now is not (e.g. incompatible button added), and buttonset hasn't been refreshed since then.
            } else 
            {
                var successful = this._setCheckedOnDom(value, this.$buttons);
                if (successful) 
                {
                    // Set oj-selected/aria-pressed on all buttons' DOM:
                    this.$buttons.each(function() {
                        $( this ).data( "oj-ojButton" )._applyCheckedStateFromDom(false);
                    });
                    // Let _super() call and event firing happen.
                } else 
                { // invalid value
                    // Don't set anything on DOM.
                    bail = true; // don't fire event or call _super()
                    // TODO: Maybe log.
                }
            }
        }
        
        if (!bail)
        {
            var previousValue = this.options[key];
            this._super( key, value );
            // TBD: optionally could reference some metadata somewhere rather than hard-coding list of supported options and their equals methods here,
            //      e.g. static buttonsetOptionChangeMap = { "checked" : {equals: checkedEquals} }
            if ( key === "checked" ) // the only supported optionChange option
                this._fireOptionChange(key, previousValue, value, this._checkedEquals, optionChangeOriginalEvent); 
        }
    },
    
    // TBD: this method could be pushed up to superclass if desired.
    _fireOptionChange: function(key, previousValue, value, equals, originalEvent) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        if (!equals.call(this, previousValue, value))
        {
            var ui = { 
                "option": key,
                "previousValue": previousValue, 
                "value": value,
                // (originalEvent is non-null) iff (option change is due to user interaction) iff (binding should write back the value)
                "optionMetadata": {"writeback": originalEvent ? "shouldWrite" : "shouldNotWrite"}
            };
            this._trigger( "optionChange", originalEvent, ui );
        }
    },
    
    /**
     * Refreshes the buttonset, including the following:
     * 
     * <ul>
     *   <li>Creates JET Buttons out of all contained DOM elements supported by JET Button that are not already Buttons, by calling <code class="prettyprint">.ojButton()</code> on them.
     *   <li>Re-applies focus management / keyboard navigation.
     *   <li>Applies special styles to the first and last button of the buttonset (e.g. for rounded corners, depending on theming).
     *   <li>Rechecks the reading direction (LTR vs. RTL).
     * </ul>
     * 
     * <p>A <code class="prettyprint">refresh()</code> is required in the following circumstances:
     * <ul>
     *   <li>After buttons are added to or removed from the buttonset.</li>
     *   <li>After a change to the <code class="prettyprint">disabled</code> status of any of the buttons in the buttonset.</li>
     *   <li>After the reading direction (LTR vs. RTL) changes.</li>
     * </ul>
     * 
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof oj.ojButtonset
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     * $( ".selector" ).ojButtonset( "refresh" );
     */
    refresh: function() // Override of public base class method (unlike JQUI).  Method name needn't be quoted since is in externs.js.
    {
        this._super();
        this._setup(false);
    },
    
    _setup: function(isCreate) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        var self = this;
        this.isRtl = this._GetReadingDirection() === "rtl";
        this.$buttons = this.element.find( this._items );
        
        if (isCreate) 
        {
            // At create time, if app provided a valid "checked" option, it wins over whatever's in the DOM.
            var successful = this._setCheckedOnDom(this.options.checked, this.$buttons);
            // Successful or not, don't call _setOption(), since don't want to fire optionChange event at create time
            // (The JQUI framework does NOT call _setOption at create time.)  Refresh happens below.
            if (!successful) // option value wasn't valid
            {
                var newChecked = this._getCheckedFromDom(this.$buttons);
                this.options.checked = newChecked === undefined ? null : newChecked;
            }
            // At create time, successful set or not, checked option and checked props are now in synch, so we just need to 
            // set .oj-selected and aria-pressed on each button.  This is done below by either the _applyCheckedStateFromDom()
            // call (for existing buttons) or the initializer call (for new buttons).
        } // else it's refresh time.  If the DOM's checked state is out of synch with the checked option, it's either because 
          // the app directly set the "checked" attr of an existing Button in the Buttonset, which we don't support (they should 
          // have used the component API instead), or the set of buttons in the set has changed (possibly because a KO foreach 
          // binding added/removed buttons).  In the latter case, we require that the app update the "checked" option, by setting 
          // the bound observable (if present) or calling option() (otherwise). 
        
        this.$buttons
            // refresh any buttons underneath us that already exist, like JQUI does
            // TBD:  Now that Bset has a checked option, the recursive refreshing of the Bset's buttons is necessary in more cases than before.  
            //   Review whether it's still desirable to add a refresh() param that would allow turning off this recursive
            //   refreshing.  That was previously approved, but changing the default (compared to JQUI) was not approved.
            //   The refresh param wouldn't help for creates; for that we'd need to add a Buttonset option.  
            //   See also _destroy() code comment.
            .filter( ":oj-button" )
                .ojButton( "refresh" )
                .each(function() {
                    $( this ).data( "oj-ojButton" )._applyCheckedStateFromDom(false); // set .oj-selected and aria-pressed
                })
            .end()
            
            // Create buttons underneath us
            .not( ":oj-button" )
                .ojButton() // sets .oj-selected and aria-pressed
            .end()
        
            // Update rounded corners
            .map(function() {
                return $( this ).ojButton( "widget" )[ 0 ];
            })
                .removeClass( "oj-buttonset-corner-start oj-buttonset-corner-end" )
                .filter( ":first" )
                    .addClass( "oj-buttonset-corner-start" )
                .end()
                .filter( ":last" )
                    .addClass( "oj-buttonset-corner-end" )
                .end()
            .end()
            
        // See disabled option's jsdoc for description of how disabled is handled at create and refresh time.
        // Must do this after creating the buttons above since at create time, a true value for Bset.disabled should win over the DOM and Button API.
        // Must do this before the focus mgmt code, which needs to know which buttons are disabled.
        if (isCreate && this.options.disabled)
            this.$buttons.ojButton("option", "disabled", true);
        
        if (this.options.focusManagement==="oneTabstop")
        {
            // When buttonset is binding listeners to buttons, use the Buttonset's eventNamespace, not the Button's 
            // eventNamespace, to facilitate later unbinding only the Buttonset listeners.
        
            // For checkbox/radio, we're binding to inputs, not labels.
            
            // Put listeners on every button, b/c it's too unreliable to put them on the buttonset node and rely on event bubbling.
            // - E.g. bubbling doesn't work for antonym buttons (is this still true after the refactoring?) -- see comment on Button._setLabelOption().
            // - Likewise, focus mgmt can't just break if app listener stops propagation.
            // - Both of these problems still happen when using the delegation / selector overload of .on(); there is no special JQ bubbling magic.
            
            this.$buttons
                .unbind( "keydown" + this.eventNamespace )
                .bind( "keydown" + this.eventNamespace, function(event) { 
                    self._handleKeyDown(event, $(this)); 
                })

                .unbind( "click" + this.eventNamespace )
                .bind( "click" + this.eventNamespace, function(event) {
                    if ( !$(this).ojButton("option", "disabled") ) 
                    { 
                        // Normally the button will be tabbable after the click, since (a) if we reach here, the clicked button is enabled, and 
                        // (b) an unchecked radio before the click will normally be checked after the click.  But just in case it's unchecked 
                        // (e.g. due to app listener), we let callee run it thru _mapToTabbable() before using, as usual.
                        self._setTabStop( $(this) );
                    }
                })
                .unbind( "focus" + this.eventNamespace )
                .bind( "focus" + this.eventNamespace, function(event) { 
                    self._setTabStop( $(this) );
                });
        
            // the subset of Buttonset buttons that are enabled.  Disabled buttons are not tabbable.
            this.$enabledButtons = this.$buttons.filter(function(index) {
                return !$( this ).ojButton( "option", "disabled" );
            });

            this._initTabindexes(isCreate);
        }
    },
    
    // For create, make only the first enabled button tabbable.  (We decided to have Shift-Tab go to first, not last, button.)
    // For refreshes, keep the existing tabstop if we can, otherwise proceed as with create.
    // Either way, if that button is a radio and some radio in its group is checked, make that one tabbable instead.
    // If there are no enabled buttons, makes them all untabbable.
    // No return value.
    _initTabindexes: function(isCreate) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        // even for refreshes where we'll wind up keeping the same tabstop, must make everything untabbable first, to ensure any new buttons become untabbable.
        var $last = $(this._lastTabStop);
        this._lastTabStop = undefined;
        this.$buttons.attr( "tabindex", "-1" );
        var $newTabStop; // callee might map this to radio groupmate
        
        // TBD: for refreshes when $last is a disabled radio with a checked enabled groupmate and they are in the buttonset, the groupmate would be 
        // a valid tabstop, but this defaults to the first.
        if (isCreate || !$last.is(this.$enabledButtons)) 
        {
            // is create, or is refresh but must treat like create b/c $last is empty, or not enabled, or no longer in the buttonset
            $newTabStop = this.$enabledButtons.first(); // if empty (none enabled), no tabstop will be set
        } else 
        {
            // is a refresh, and $last is non-empty and is an enabled button still in the buttonset.  May be a radio whose groupmate
            // has become checked, in which case callee will map it to that groupmate.
            $newTabStop = $last;
        }
        this._setTabStop( $newTabStop );
    },
    
    // For each button in $button (in our usage always 0-1 button hence $button singular), if that button is an unchecked radio 
    // with a checked groupmate (which means it's not tabbable), then map it to the checked one (checked enabled radios are 
    // tabbable, and we know it's enabled per the argument below).
    // 
    // $button contains 0 or more buttons to map.  Must be enabled since disabled buttons aren't tabbable.
    // Returns the mapped JQ object (which the caller will make the tabstop).
    // 
    // We know that this.$enabledButtons contains all buttons in $button, and all of their potentially checked radio-groupmates, since:
    // - The above "enabled" requirement guarantees that $button's contents are all in $enabledButtons.
    // - The prohibition against radio groupmates that are not in the buttonset, and the prohibition against checked disabled groupmates 
    //   of enabled radios, guarantee that if $button is a radio, then all of its potentially checked groupmates are enabled and thus in 
    //   $enabledButtons.
    // 
    // Firefox browser issue:   (TODO: should we doc this?  File FF and/or JET bug?)
    // 
    // When this method maps an unchecked radio to its checked groupmate, the caller ensures that the former still has focus, but the latter
    // is the tabstop for when the user tabs out and back in.  When tabbing / Shift-Tabbing from the unchecked radio in the direction of the 
    // checked one, Chrome and IE9 are smart enough to tab out of the radio group to the adjacent tabstop as desired.  But in FF, focus goes to 
    // the checked one, which is not what we want.
    // 
    // Reason: Chrome and IE9 are smart enough never to tab within a radio group.  If focus is in the radio group, Tab and Shift-Tab exit the radio group.
    // But in FF, [a radio is reachable via Tab/Shift-Tab from within the group] if [it's enabled, tabindex != -1, and either checked or has no 
    // checked groupmates], i.e. [it would be reachable via Tab/Shift-Tab from outside the group if all its groupmates happened to be untabbable 
    // (e.g. disabled)].  In other words, FF is the only one that fails to distinguish between radios that could be valid tabstops from outside, and
    // those that should be valid tabstops from inside.  
    // 
    // This impl improves on the native behavior.  In FF, in an unchecked radio group, every single radio is a tabstop.  Our use of tabindex=-1 
    // guarantees that we never tab within the group in that case.  It's only a checked groupmate that can be tabbed to from within. (So at 
    // most one unwanted tabstop.)
    // 
    // After much time and effort, the latter issue seems to be infeasible to fix in any robust, non-brittle way.  E.g.:
    // - Clearing all tabstops and restoring on tab-out of buttonset:  FF provides no reliable way to find out whether a blur is exiting the entire 
    //   buttonset.  The obvious setTimeout workaround needed to be unacceptably long (e.g. 250ms) and even then was unreliable.  If we ever fail 
    //   to restore the tabstop, the buttonset becomes untabbable and inaccessible.
    // - Every other approach had similar robustness issues. 
    _mapToTabbable: function( $button ) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        var $enabledButtons = this.$enabledButtons;
        return $button.map(function(index, elem) {
            // Buttons other than radios, and checked radios, are always tabbable if they're enabled, which this method requires.
            // Radios w/ name="" (incl name omitted) are not in a radio group, not even with other radios with w/ name="".  Radios 
            // with no groupmates are always tabbable, since either they're checked, or they're unchecked with no checked groupmate.
            if (elem.type != "radio" || elem.checked || elem.name == "")
                return elem;
            else 
            {
                // elem is unchecked radio in real (not "") group, which is tabbable iff no groupmate is checked.  Per above doc, we know that 
                // all of its potentially checked groupmates are in $enabledButtons.
                var $checkedRadio = _radioGroup(elem, $enabledButtons).filter(":checked");
                return ($checkedRadio.length ? $checkedRadio[0] : elem);
            }
        });
    },
    
    // Set which button is in the tab sequence.
    // $button should contain 0 or 1 button to be made tabbable (since at most one should be tabbable at a time).
    //   If 0 (i.e. no enabled buttons), all will become untabbable.  If 1, it must be tabbable in every way (e.g. enabled) except possibly 
    //   being an unchecked radio with a checked groupmate, which this method will map to its checked groupmate, which 
    //   we know is enabled thus tabbable since we require that checked radios with enabled groupmates not be disabled.  
    // No return value.
    _setTabStop: function( $button ) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
//        if (!window.setTabStopCounter) window.setTabStopCounter=1; // REMOVE, is only for console.log's
//        console.log("in _setTabStop: " + window.setTabStopCounter++ + ".  Orig (premap) button checked: " + $button[0].checked); // + " and is:");
//        console.log($button[0]);
        
        $button = this._mapToTabbable( $button );
        var button = $button[0]; // button is undefined iff $button is empty iff we need to clear all tabstops b/c there are no enabled buttons to make tabbable
        var last = this._lastTabStop; // last is undefined iff $(last) is empty iff there are no existing tabstops to clear (b/c _initTabindexes just ran 
                                      // or previously there were no enabled buttons to make tabbable)
        
//        console.log("mapped button and last button are:");  console.log(button);  console.log(last);  console.log(".");
        
        // Cases: both are undefined: have no tabstops; want to keep it that way (b/c none enabled), so do nothing
        //        both are node X: X is the tabstop; want to keep it that way, so do nothing
        //        last is node X; button is undefined: X is the tabstop; want to clear it w/o replacing it (b/c none enabled).  This logic does that.
        //        last is undefined; button is node X: no existing tabstop; want to make X the tabstop.  This logic does that.
        //        last is node X; button is node Y: X is the tabstop; want to clear it and make Y the tabstop.  This logic does that.
        if ( button !== last) {
            //console.log("setting tab stop to " + $button.attr("id"));  console.log("$(last).length:");  console.log($(last).length);
            
            $(last).attr( "tabindex", "-1" ); // no-op iff $(last) is empty iff (see comment above)
            $button.attr( "tabindex", "0" ); // no-op iff $button is empty iff (see comment above)
            this._lastTabStop = button;
        }
    },
    
    // No return value.
    _handleKeyDown: function(event, $button) // Private, not an override (not in base class).  Method name unquoted so will be safely optimized (renamed) by GCC as desired.
    {
        switch (event.which) {
            case $.ui.keyCode.LEFT:  // left arrow
            case $.ui.keyCode.RIGHT: // right arrow
                event.preventDefault();
                
                var $enabledButtons = this.$enabledButtons;
                var length = $enabledButtons.length;
                if (length<2) // nowhere to navigate to; currently focused button is the only enabled one in buttonset
                    break;
                
                var oldIndex = $enabledButtons.index($button);
                var increment = ((event.which == $.ui.keyCode.RIGHT) ^ this.isRtl) ? 1 : -1;
                var newIndex = (oldIndex+increment+length)%length; // wrap around if at start/end of buttonset
                
                // A11y office recommended treating radios like other buttons: Arrow moves focus without selecting, Spacebar selects, 
                // which we prefer too.  Since we're using role='button', not 'radio', we don't need to follow the WAI-ARIA radio behavior 
                // where Arrow moves focus and selects, Ctrl-Arrow moves focus without selecting.  
                $enabledButtons.eq(newIndex).focus();
                break;
            case $.ui.keyCode.UP:   // up arrow
            case $.ui.keyCode.DOWN: // down arrow
                // Per above comment, treating radios like buttons, which have no native or WAI-ARIA-mandated up/down arrow behavior, 
                // so disable native focus-and-select behavior.  
                if ( $button.attr("type")=="radio" )
                    event.preventDefault();
                break;
            
            // Don't need Space/Enter handlers.  For all buttons except already-checked radios in some browsers, Space/Enter fire a click event 
            // (natively or manually), which already calls _setTabStop.  For checked radios (which are focused if they're getting 
            // this key event), _setTabStop has already been called for whichever happened 2nd:  focus (an already checked radio) or
            // check (an already focused radio) via click/Space/Enter.  We don't support programmatically checking the button; it must 
            // be done via the "checked" option.
        }
    },
    
    _destroy: function() // Override of protected base class method.  Method name needn't be quoted since is in externs.js.
    {
        this.element
            .removeClass( "oj-buttonset oj-component" )
            .removeAttr( "role" );
        
        if (this.options.focusManagement==="oneTabstop") 
            this.$buttons.attr( "tabindex", "0" );
        
        this.$buttons
            .map(function() {
                return $( this ).ojButton( "widget" )[ 0 ];
            })
                // do .removeClass outside the filter in case button has been destroyed but still has these Buttonset styles on it.
                // TBD: if this has definitely been taken care of already for destroyed buttons, then move inside filter.
                .removeClass( "oj-buttonset-corner-start oj-buttonset-corner-end" )
            .end()
    
            // Recursively destroy Bset's buttons like JQUI.  
            // TBD: The recursive destroy makes it impossible to ungroup the buttons if desired, i.e. destroy the Buttonset without destroying its buttons.
            //   As discussed in _setup() code comment, it was approved to add refresh() and/or destroy() params that would allow turning off
            //   the recursive behavior, but changing the default (compared to JQUI) was not approved.
            //   When not destroying the buttons, must instead restore the buttons to a not-in-buttonset state, i.e. remove Bset stuff, restore any 
            //   Button stuff we removed, etc.
            .ojButton( "destroy" );
    }
    
    // API doc for inherited methods with no JS in this file:

    /**
     * Returns a <code class="prettyprint">jQuery</code> object containing the buttonset element.  
     * 
     * <p>This method does not accept any arguments.
     * 
     * @method
     * @name oj.ojButtonset#widget
     * @memberof oj.ojButtonset
     * @instance
     * @return {jQuery} the buttonset element
     * 
     * @example <caption>Invoke the <code class="prettyprint">widget</code> method:</caption>
     * var widget = $( ".selector" ).ojButtonset( "widget" );
     */

    /**
     * Removes the buttonset functionality completely, including focus management, and recursively <code class="prettyprint">destroy()</code>s 
     * the contained buttons. This will return the element back to its pre-init state.
     * 
     * <p>This method does not accept any arguments.
     * 
     * @method
     * @name oj.ojButtonset#destroy
     * @memberof oj.ojButtonset
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">destroy</code> method:</caption>
     * $( ".selector" ).ojButtonset( "destroy" );
     */
});

// -----------------------------------------------------------------------------
// "private static members" shared by all buttons and buttonsets
// -----------------------------------------------------------------------------

var _lastActive;
var _lastToggleActive;
    
    // "static" namespace for events associated with all buttons on page/form/etc., not just one.  E.g. see form reset handler at top of _create().
    // this.eventNamespace, used for individual button instances, is .ojButtonX, whereX = 0, 1, 2, etc.
var BUTTON_EVENT_NAMESPACE = ".ojButton",
    
    BASE_CLASSES = "oj-button oj-component oj-enabled oj-default", // oj-enabled is a state class, but convenient to include in this var instead
    STATE_CLASSES = "oj-hover oj-active oj-selected", // TBD: oj-hover doesn't really need to be listed here since this var is only used to remove classes from rootElement at destroy time, which already happens because we register rootElement as a hoverable.  Same might apply to oj-active if we switch to an activeable paradigm.
    TYPE_CLASSES = "oj-button-icons-only oj-button-icon-only oj-button-text-icons oj-button-text-icon-start oj-button-text-icon-end oj-button-text-only",
    
    /**
     * In all cases, the return value includes only radios that are an :oj-button, i.e. radios that have been buttonized.
     * 
     * Where this method looks for radio groupmates:
     *
     * - If $elems is present (even if empty), 
     *     - This method will only look in that set, and will not attempt to weed out any false positives as defined below. 
     *       (So in this case, return value includes the specified radio iff it's an :oj-button in $elems.)
     * - Else this method looks in exactly the places where groupmates (including the original radio) would live, i.e. not in 
     *   the places false positives would live.  (So in both of the following cases, return value includes the specified radio 
     *   iff it's an :oj-button.)  Specifically:
     *     - If radio is in a form, this method will only look in that form.
     *     - Else, this method will look in the radio's document, but not in any forms.
     * 
     * Radios w/ name="" (incl name omitted) are not in a radio group (i.e. no SelectOne semantics), not even with other radios with 
     * w/ name="".  So if radio is nameless, the return value will include only radio (or nothing at all if it isn't an :oj-button, or 
     * if $elems is passed and it doesn't include radio).  
     * 
     * False positives: radios with nonempty names that match radio's name, but are actually not groupmates (i.e. no SelectOne 
     * relationship), e.g. because they're from a different form.
     * 
     * 
     * @param {!Element} radio  a radio button.  Not a JQ object, other button or element type, or null.
     * @param {jQuery=} $elems  optional JQ object, containing 0 or more elems that aren't necessarily radios or buttons, in which to look for groupmates.
     *                          E.g. the elements in a buttonset or toolbar.  Must not contain any false positives as defined above.
     */
    _radioGroup = function( radio, $elems )
    {
        var name = radio.name,
            form = radio.form,
            $radios;
        if ( name ) 
        {
            name = name.replace( /'/g, "\\'" ); // escape single quotes
            var selector = ":radio[name='" + name + "']:oj-button";
            if ( $elems ) 
            {
                $radios = $elems.filter( selector );
            } else if ( form ) 
            {
                $radios = $( form ).find( selector );
            } else 
            {
                $radios = $( selector, radio.ownerDocument )
                    .filter(function() {
                        return !this.form;
                    });
            }
        } else 
        {
            $radios = ($elems ? $elems.filter( radio ) : $( radio )).filter(":oj-button");
        }
        return $radios;
    };

}() ); // end of Button / Buttonset wrapper function

});
