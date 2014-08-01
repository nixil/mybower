define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojdvt-base', 'ojs/internal-deps/dvt/DvtGauge'], function(oj, $)
{
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

// Base class for all gauge components
oj.__registerWidget('oj.dvtBaseGauge', $['oj']['dvtBaseComponent'], 
{
  /**
   * Reacts to changes to the 'value' option by triggering a 'optionChange' event if the value changes from its previous 
   * value. Refer to the optionChange event for details.
   * @param {String|Object|string=} key a single string representing a key or an object representing a group 
   * of options
   * @param {Object=} value of the key
   * @fires oj.editableValue#optionChange
   * @override
   * @protected
   */
  _setOption : function (key, value)
  {
    // Keep track of whether this is a user driven change to determine whether writeback is needed.
    var bUserDrivenChange = this._bUserDrivenChange;
    this._bUserDrivenChange = false;
  
    // If this contains an update of the value property, retrieve the previous value
    var previousValue, valueOptionSet = false;
    if (typeof key === "string" && value !== undefined)
    {
      // Explicit key or key/value is passed in.
      if(key === "value") {
        valueOptionSet = true;
        previousValue = this.options['value'];
      }
    }
    else if (typeof key === "object" && key)
    {
      // Object literal of key...values is passed in - ('option', {key: value, key2: value2})
      if (key['value'] !== undefined)
      {
        valueOptionSet = true;
        previousValue = this.options['value'];
      }
    }
    
    // Step 2: call the super to set the option 
    var ret = this._superApply(arguments);
    
    // Step 3: trigger events if needed
    if (valueOptionSet)
    {
      var newValue = this.options['value'];
      
      // trigger a optionChange event only when the newValue is different from the previousValue to 
      // avoid recursion. E.g., setOption() triggers optionChange, which calls ko binding callback, 
      // which then writes to observable. Which then causes binding update to call set option again
      if (!oj.Object.__innerEquals(previousValue, newValue))
      {
        var ui = {
          'option': 'value', 
          'previousValue': previousValue, 'value': newValue,
          "optionMetadata": {'writeback': bUserDrivenChange ? "shouldWrite" : "shouldNotWrite"}
        };
        this._trigger('optionChange', null, ui);
      }
    }
    
    return ret;
  },

  /**
   * @override
   */
  _GetChildStyleClasses : function() {
    var styleClasses = this._super();
    styleClasses['oj-gauge-metric-label'] = {'path' : 'metricLabel/style', 'property' : 'CSS_TEXT_PROPERTIES'};
    styleClasses['oj-gauge-tick-label'] = {'path' : 'tickLabel/style', 'property' : 'CSS_TEXT_PROPERTIES'};
// TODO HZHANG threshold colors needs bug fix 17334522
//    styleClasses['oj-gauge-threshold-index1'] = {'path' : '', 'type' : 'color'};
//    styleClasses['oj-gauge-threshold-index2'] = {'path' : '', 'type' : 'color'};
//    styleClasses['oj-gauge-threshold-index3'] = {'path' : '', 'type' : 'color'};
    return styleClasses;
  },
  
  /**
   * @override
   */
  _GetTranslationMap: function() {
    // Safe to modify super's map because function guarentees a new map is returned
    var ret = this._super();
    ret['DvtGaugeBundle.EMPTY_TEXT'] = this._GetTranslatedResource('msgNoData');
    return ret;
  },
  
  /**
   * @override
   */
  _HandleEvent : function(event) {
    var type = event && event.getType ? event.getType() : null;
    if(type === DvtValueChangeEvent.TYPE) {
      // Fired after the value change interaction is complete
      this._bUserDrivenChange = true;
      this.option('value', event.getNewValue());
    }
    else if(type === DvtValueChangeEvent.TYPE_INPUT) {
      // Fired during the value change interaction for each change
      this._trigger('input', null, {'value': event.getNewValue()});
    }
    else {
      this._super(event);
    }
  }
});
/**
 * @class 
 * @name oj.ojStatusMeterGauge
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="statusMeterGaugeOverview-section">
 *   JET Status Meter Gauge Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#statusMeterGaugeOverview-section"></a>
 * </h3>
 * 
 * <p>Status meter gauge component for JET, supporting horizontal and circular status meters.</p>
 * 
 * <p>This component should be bound to an HTML div element, and the SVG DOM that it generates should be treated as a 
 * black box, as it is subject to change.  This component should not be extended.</p>
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div data-bind="ojComponent: {
 *   component: 'ojStatusMeterGauge',
 *   value: 63, min: 0, max: 100, 
 *   thresholds: [{max: 33}, {max: 67}, {}]
 * }"/>
 * </code>
 * </pre>
 * 
 * <h3 id="statusMeterGaugeOptions-section">
 *   Options
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#statusMeterGaugeOptions-section"></a>
 * </h3>
 * 
 * <p>Full documentation for the options method, including APIs for data, style properties, and interactivity, is 
 * available <a title="Options Documentation" href="dvt/statusMeterGauge.xml">here</a>.</p>
 * 
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 * 
 * <p>The application is responsible for populating the shortDesc value in the 
 * component options object with meaningful descriptors when the component does 
 * not provide a default descriptor.</p>
 * 
 * <h3 id="keyboard-section">
 *   Keyboard interaction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
 * <table class="keyboard-table">
 *   <thead>
 *     <tr>
 *       <th>Key</th>
 *       <th>Use</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><kbd>Tab</kbd></td>
 *       <td>Move focus to next component.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+Tab</kbd></td>
 *       <td>Move focus to previous component.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>UpArrow</kbd></td>
 *       <td>Increase value.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>DownArrow</kbd></td>
 *       <td>Decrease value.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>LeftArrow</kbd></td>
 *       <td>Decrease value in left-to-right locales. Increase value in right-to-left locales.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>RightArrow</kbd></td>
 *       <td>Increase value in left-to-right locales. Decrease value in right-to-left locales.</td>
 *     </tr>
 *   </tbody>
 * </table>
 * 
 * <h3 id="rtl-section">
 *   Reading direction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
 * </h3>
 * 
 * <p>
 *   As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the 
 *   component must be <code class="prettyprint">refresh()</code>ed.
 * </p>
 * 
 * @desc Creates a JET Status Meter Gauge.
 * @example <caption>Initialize the Status Meter Gauge with no options specified:</caption>
 * $(".selector").ojStatusMeterGauge();
 * 
 * @example <caption>Initialize the Status Meter Gauge with some options:</caption>
 * $(".selector").ojStatusMeterGauge({value: 63, min: 0, max: 100, thresholds: [{max: 33}, {max: 67}, {}]});
 * 
 * @example <caption>Initialize the Status Meter Gauge via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div data-bind="ojComponent: {component: 'ojStatusMeterGauge'}">
 */
oj.__registerWidget('oj.ojStatusMeterGauge', $['oj']['dvtBaseGauge'], 
{
  version : "1.0.0", 
  widgetEventPrefix : "oj", 
  options: {
    /**
     * Triggered during a value change gesture on mouse or touch move.
     * 
     * @property {Object} ui event payload
     * @property {number} ui.value the value of the gauge
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">input</code> callback specified:</caption>
     * $(".selector").ojStatusMeterGauge({
     *   "input": function(event, ui){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojinput</code> event:</caption>
     * $(".selector").on("ojinput", function(event, ui){});
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojStatusMeterGauge
     * @instance
     */
    input : null,
    
    /**
     * Triggered when the following component options change. 
     * <ul>
     * <li><strong>value</strong>: when the component's value changes. </li>
     * </ul>
     * 
     * @property {Object} data event payload
     * @property {string} data.option the name of the option that changed, i.e. "value"
     * @property {Object} data.previousValue an Object holding the previous value of the option
     * @property {Object} data.value an Object holding the current value of the option
     * @property {Object} ui.optionMetadata information about the option that is changing
     * @property {string} ui.optionMetadata.writeback <code class="prettyprint">"shouldWrite"</code> or
     *                    <code class="prettyprint">"shouldNotWrite"</code>.  For use by the JET writeback mechanism.
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">optionChange</code> callback:</caption>
     * $(".selector").ojStatusMeterGauge({
     *   'optionChange': function (event, data) {} 
     * });
     * 
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojoptionchange</code> event:</caption>
     * $(".selector").on({
     *   'ojoptionchange': function (event, data) {
     *       window.console.log("option changing is: " + data['option']);
     *   };
     * });
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojStatusMeterGauge
     * @instance
     */
    optionChange: null
  },
  
  /**
   * @override
   */
  _CreateDvtComponent : function(context, callback, callbackObj) {
    return DvtStatusMeterGauge.newInstance(context, callback, callbackObj);
  },
  
  /**
   * @override
   */
  _GetComponentStyleClasses : function() {
    var styleClasses = this._super();
    styleClasses.push('oj-statusmetergauge');
    return styleClasses;
  },
  
  /**
   * @override
   */
  _Render : function() {
    // Display the title of the surrounding div as the tooltip
    this.options['shortDesc'] = this.element.attr('title');
  
    // Call the super to render
    this._super();
  },
  
  /**
   * Returns the gauge's metric label. 
   * @return {Object} The metric label object
   * @expose
   */
  getMetricLabel: function() {
    var auto = this._component.getAutomation();
    return auto.getMetricLabel();
  }
});
/**
 * @class 
 * @name oj.ojLedGauge
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="ledGaugeOverview-section">
 *   JET LED Gauge Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#ledGaugeOverview-section"></a>
 * </h3>
 * 
 * <p>LED gauge component for JET.  LED gauges are used to highlight a specific metric value in relation to its 
 * thresholds.<p>
 * 
 * <p>This component should be bound to an HTML div element, and the SVG DOM that it generates should be treated as a 
 * black box, as it is subject to change.  This component should not be extended.</p>
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div data-bind="ojComponent: {
 *   component: 'ojLedGauge',
 *   value: 63, min: 0, max: 100, 
 *   thresholds: [{max: 33}, {max: 67}, {}]
 * }"/>
 * </code>
 * </pre>
 * 
 * <h3 id="ledGaugeOptions-section">
 *   Options
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#ledGaugeOptions-section"></a>
 * </h3>
 * 
 * <p>Full documentation for the options method, including APIs for data, style properties, and interactivity, is 
 * available <a title="Options Documentation" href="dvt/ledGauge.xml">here</a>.</p>
 * 
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 * 
 * <p>The application is responsible for populating the shortDesc value in the 
 * component options object with meaningful descriptors when the component does 
 * not provide a default descriptor.</p>
 * 
 * <h3 id="rtl-section">
 *   Reading direction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
 * </h3>
 * 
 * <p>
 *   As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the 
 *   component must be <code class="prettyprint">refresh()</code>ed.
 * </p>
 * 
 * @desc Creates a JET LED Gauge.
 * @example <caption>Initialize the LED Gauge with no options specified:</caption>
 * $(".selector").ojLedGauge();
 * 
 * @example <caption>Initialize the LED Gauge with some options:</caption>
 * $(".selector").ojLedGauge({value: 63, min: 0, max: 100, thresholds: [{max: 33}, {max: 67}, {}]});
 * 
 * @example <caption>Initialize the LED Gauge via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div data-bind="ojComponent: {component: 'ojLedGauge'}">
 */
oj.__registerWidget('oj.ojLedGauge', $['oj']['dvtBaseGauge'], 
{
  version : "1.0.0", 
  widgetEventPrefix : "oj", 
  options: {
  },
  
  /**
   * @override
   */
  _CreateDvtComponent : function(context, callback, callbackObj) {
    return DvtLedGauge.newInstance(context, callback, callbackObj);
  },
  
  /**
   * @override
   */
  _GetComponentStyleClasses : function() {
    var styleClasses = this._super();
    styleClasses.push('oj-ledgauge');
    return styleClasses;
  },
  
  /**
   * @override
   */
  _Render : function() {
    // Display the title of the surrounding div as the tooltip
    this.options['shortDesc'] = this.element.attr('title');
  
    // Call the super to render
    this._super();
  },
  
  /**
   * Returns the gauge's metric label. 
   * @return {Object} The metric label object
   * @expose
   */
  getMetricLabel: function() {
    var auto = this._component.getAutomation();
    return auto.getMetricLabel();
  }
});
/**
 * @class 
 * @name oj.ojRatingGauge
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="ratingGaugeOverview-section">
 *   JET Rating Gauge Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#ratingGaugeOverview-section"></a>
 * </h3>
 * 
 * <p>Rating gauge component for JET.  Rating gauges are typically used to display or accept user feedback on a product
 * or service.</p>
 * 
 * <p>This component should be bound to an HTML div element, and the SVG DOM that it generates should be treated as a 
 * black box, as it is subject to change.  This component should not be extended.</p>
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div data-bind="ojComponent: {component: 'ojRatingGauge', value: 4}"/>
 * </code>
 * </pre>
 * 
 * <h3 id="ratingGaugeOptions-section">
 *   Options
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#ratingGaugeOptions-section"></a>
 * </h3>
 * 
 * <p>Full documentation for the options method, including APIs for data, style properties, and interactivity, is 
 * available <a title="Options Documentation" href="dvt/ratingGauge.xml">here</a>.</p>
 * 
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 * 
 * <p>The application is responsible for populating the shortDesc value in the 
 * component options object with meaningful descriptors when the component does 
 * not provide a default descriptor.</p>
 * 
 * <h3 id="keyboard-section">
 *   Keyboard interaction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
 * <table class="keyboard-table">
 *   <thead>
 *     <tr>
 *       <th>Key</th>
 *       <th>Use</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><kbd>Tab</kbd></td>
 *       <td>Move focus to next component.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+Tab</kbd></td>
 *       <td>Move focus to previous component.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>UpArrow</kbd></td>
 *       <td>Increase value.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>DownArrow</kbd></td>
 *       <td>Decrease value.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>LeftArrow</kbd></td>
 *       <td>Decrease value in left-to-right locales. Increase value in right-to-left locales.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>RightArrow</kbd></td>
 *       <td>Increase value in left-to-right locales. Decrease value in right-to-left locales.</td>
 *     </tr>
 *   </tbody>
 * </table>
 * 
 * <h3 id="rtl-section">
 *   Reading direction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
 * </h3>
 * 
 * <p>
 *   As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the 
 *   component must be <code class="prettyprint">refresh()</code>ed.
 * </p>
 * 
 * @desc Creates a JET Rating Gauge.
 * @example <caption>Initialize the Rating Gauge with no options specified:</caption>
 * $(".selector").ojRatingGauge();
 * 
 * @example <caption>Initialize the Rating Gauge with some options:</caption>
 * $(".selector").ojRatingGauge({value: 4});
 * 
 * @example <caption>Initialize the Rating Gauge via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div data-bind="ojComponent: {component: 'ojRatingGauge'}">
 */
oj.__registerWidget('oj.ojRatingGauge', $['oj']['dvtBaseGauge'], 
{
  version : "1.0.0", 
  widgetEventPrefix : "oj", 
  options: {
    /**
     * Triggered during a value change gesture on mouse or touch move.
     * 
     * @property {Object} ui event payload
     * @property {number} ui.value the value of the gauge
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">input</code> callback specified:</caption>
     * $(".selector").ojRatingGauge({
     *   "input": function(event, ui){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojinput</code> event:</caption>
     * $(".selector").on("ojinput", function(event, ui){});
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojRatingGauge
     * @instance
     */
    input : null,
    
    /**
     * Triggered when the following component options change. 
     * <ul>
     * <li><strong>value</strong>: when the component's value changes. </li>
     * </ul>
     * 
     * @property {Object} data event payload
     * @property {string} data.option the name of the option that changed, i.e. "value"
     * @property {Object} data.previousValue an Object holding the previous value of the option
     * @property {Object} data.value an Object holding the current value of the option
     * @property {Object} ui.optionMetadata information about the option that is changing
     * @property {string} ui.optionMetadata.writeback <code class="prettyprint">"shouldWrite"</code> or
     *                    <code class="prettyprint">"shouldNotWrite"</code>.  For use by the JET writeback mechanism.
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">optionChange</code> callback:</caption>
     * $(".selector").ojRatingGauge({
     *   'optionChange': function (event, data) {} 
     * });
     * 
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojoptionchange</code> event:</caption>
     * $(".selector").on({
     *   'ojoptionchange': function (event, data) {
     *       window.console.log("option changing is: " + data['option']);
     *   };
     * });
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojRatingGauge
     * @instance
     */
    optionChange: null
  },
  
  /**
   * @override
   */
  _CreateDvtComponent : function(context, callback, callbackObj) {
    return DvtRatingGauge.newInstance(context, callback, callbackObj);
  },
  
  /**
   * @override
   */
  _GetComponentStyleClasses : function() {
    var styleClasses = this._super();
    styleClasses.push('oj-ratinggauge');
    //TODO HZHANG Add style classes for rating gauge selected/hover/unselected/changed
    return styleClasses;
  },
  
  /**
   * @override
   */
  _Render : function() {
    // Display the title of the surrounding div as the tooltip
    this.options['shortDesc'] = this.element.attr('title');
  
    // Call the super to render
    this._super();
  }
});
/**
 * @class 
 * @name oj.ojDialGauge
 * @augments oj.baseComponent
 * 
 * @classdesc
 * <h3 id="dialGaugeOverview-section">
 *   JET Dial Gauge Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#dialGaugeOverview-section"></a>
 * </h3>
 * 
 * <p>Dial gauge component for JET.  Dial gauges are used to display a metric value in relation to the minimum and 
 * maximum possible values for that metric.</p>
 * 
 * <p>This component should be bound to an HTML div element, and the SVG DOM that it generates should be treated as a 
 * black box, as it is subject to change.  This component should not be extended.</p>
 * 
 * <pre class="prettyprint">
 * <code>
 * &lt;div data-bind="ojComponent: {
 *   component: 'ojDialGauge',
 *   value: 63, min: 0, max: 100, 
 *   metricLabel: {rendered: 'on'}
 * }"/>
 * </code>
 * </pre>
 * 
 * <h3 id="dialGaugeOptions-section">
 *   Options
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#dialGaugeOptions-section"></a>
 * </h3>
 * 
 * <p>Full documentation for the options method, including APIs for data, style properties, and interactivity, is 
 * available <a title="Options Documentation" href="dvt/dialGauge.xml">here</a>.</p>
 * 
 * <h3 id="a11y-section">
 *   Accessibility
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
 * </h3>
 * 
 * <p>The application is responsible for populating the shortDesc value in the 
 * component options object with meaningful descriptors when the component does 
 * not provide a default descriptor.</p>
 * 
 * <h3 id="keyboard-section">
 *   Keyboard interaction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * 
 * <table class="keyboard-table">
 *   <thead>
 *     <tr>
 *       <th>Key</th>
 *       <th>Use</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><kbd>Tab</kbd></td>
 *       <td>Move focus to next component.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Shift+Tab</kbd></td>
 *       <td>Move focus to previous component.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>UpArrow</kbd></td>
 *       <td>Increase value.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>DownArrow</kbd></td>
 *       <td>Decrease value.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>LeftArrow</kbd></td>
 *       <td>Decrease value in left-to-right locales. Increase value in right-to-left locales.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>RightArrow</kbd></td>
 *       <td>Increase value in left-to-right locales. Decrease value in right-to-left locales.</td>
 *     </tr>
 *   </tbody>
 * </table>
 * 
 * <h3 id="rtl-section">
 *   Reading direction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
 * </h3>
 * 
 * <p>
 *   As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the 
 *   component must be <code class="prettyprint">refresh()</code>ed.
 * </p>
 * 
 * @desc Creates a JET Dial Gauge.
 * @example <caption>Initialize the Dial Gauge with no options specified:</caption>
 * $(".selector").ojDialGauge();
 * 
 * @example <caption>Initialize the Dial Gauge with some options:</caption>
 * $(".selector").ojDialGauge({value: 63, min: 0, max: 100, metricLabel: {rendered: 'on'}});
 * 
 * @example <caption>Initialize the Dial Gauge via the JET <code class="prettyprint">ojComponent</code> binding:</caption>
 * &lt;div data-bind="ojComponent: {component: 'ojDialGauge'}">
 */
oj.__registerWidget('oj.ojDialGauge', $['oj']['dvtBaseGauge'], 
{
  version : "1.0.0", 
  widgetEventPrefix : "oj", 
  options: {
    /**
     * Triggered during a value change gesture on mouse or touch move.
     * 
     * @property {Object} ui event payload
     * @property {number} ui.value the value of the gauge
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">input</code> callback specified:</caption>
     * $(".selector").ojDialGauge({
     *   "input": function(event, ui){}
     * });
     *
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojinput</code> event:</caption>
     * $(".selector").on("ojinput", function(event, ui){});
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojDialGauge
     * @instance
     */
    input : null,
    
    /**
     * Triggered when the following component options change. 
     * <ul>
     * <li><strong>value</strong>: when the component's value changes. </li>
     * </ul>
     * 
     * @property {Object} data event payload
     * @property {string} data.option the name of the option that changed, i.e. "value"
     * @property {Object} data.previousValue an Object holding the previous value of the option
     * @property {Object} data.value an Object holding the current value of the option
     * @property {Object} ui.optionMetadata information about the option that is changing
     * @property {string} ui.optionMetadata.writeback <code class="prettyprint">"shouldWrite"</code> or
     *                    <code class="prettyprint">"shouldNotWrite"</code>.  For use by the JET writeback mechanism.
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">optionChange</code> callback:</caption>
     * $(".selector").ojDialGauge({
     *   'optionChange': function (event, data) {} 
     * });
     * 
     * @example <caption>Bind an event listener to the <code class="prettyprint">ojoptionchange</code> event:</caption>
     * $(".selector").on({
     *   'ojoptionchange': function (event, data) {
     *       window.console.log("option changing is: " + data['option']);
     *   };
     * });
     * 
     * @expose 
     * @event 
     * @memberof! oj.ojDialGauge
     * @instance
     */
    optionChange: null
  },
  
  /**
   * @override
   */
  _CreateDvtComponent : function(context, callback, callbackObj) {
    return DvtDialGauge.newInstance(context, callback, callbackObj);
  },

  /**
   * @override
   */
  _GetComponentStyleClasses : function() {
    var styleClasses = this._super();
    styleClasses.push('oj-dialgauge');
    return styleClasses;
  },
  
  /**
   * @override
   */
  _Render : function() {
    // Display the title of the surrounding div as the tooltip
    this.options['shortDesc'] = this.element.attr('title');
	
	// Set images for dial gauge	
	this._SetImages();
	
    // Call the super to render
    this._super();
  },
  
   _SetImages: function() {
    // Pass the correct background image information
	var backgroundImages = this.options['background'];
	var indicatorImages = this.options['indicator'];
	var background = "";
	var indicator = "";
	
	if(typeof backgroundImages === 'string') {
	  if(backgroundImages === "rectangleAlta") {
	    background = [{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/alta-rectangle-200x200.png'), width: 200, height: 154},
		{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/alta-rectangle-400x400.png'), width: 400, height: 309}];
      }
	  
	  else if(backgroundImages === "domeAlta") {
	    background = [{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/alta-dome-200x200.png') , width: 200, height: 154},
		{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/alta-dome-400x400.png') , width: 400, height: 309}];
	  }
	  
	  else if(backgroundImages === "circleAntique") {
	    background = [{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/antique-circle-200x200.png'), width: 200, height: 200},
		{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/antique-circle-400x400.png'), width: 400, height: 400}];
	  }
	  
	  else if(backgroundImages === "rectangleAntique") {
	    background = [{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/antique-rectangle-200x200.png'), width: 200, height: 168},
		{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/antique-rectangle-400x400.png'), width: 400, height: 335}];
	  }
	  else if(backgroundImages === "domeAntique") {
	    background = [{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/antique-dome-200x200.png'), width: 200, height: 176},
		{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/antique-dome-400x400.png'), width: 400, height: 352}];
	  }
	  
	  else if(backgroundImages === "circleLight") {
	    background = [{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/light-circle-200x200.png'), width: 200, height: 200},
		{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/light-circle-400x400.png'), width: 400, height: 400}];
	  }
	  
	  else if(backgroundImages === "rectangleLight") {
	    background = [{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/light-rectangle-200x200.png'), width: 200, height: 154},
		{src: oj.Config.getResourceUrl('resources\internal-deps/dvt/gauge/light-rectangle-400x400.png'), width: 400, height: 307}];
	  }
	  else if(backgroundImages === "domeLight") {
	    background = [{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/light-dome-200x200.png'), width: 200, height: 138},
		{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/light-dome-400x400.png'), width: 400, height: 276}];
	  }
	  
	  else if(backgroundImages === "circleDark") {
	    background = [{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/dark-circle-200x200.png'), width: 200, height: 200},
		{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/dark-circle-400x400.png'), width: 400, height: 400}];
	  }
	  
	  else if(backgroundImages === "rectangleDark") {
	    background = [{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/dark-rectangle-200x200.png'), width: 200, height: 154},
		{src: oj.Config.getResourceUrl('resources\internal-deps/dvt/gauge/dark-rectangle-400x400.png'), width: 400, height: 307}];
	  }
	  else if(backgroundImages === "domeDark") {
	    background = [{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/dark-dome-200x200.png'), width: 200, height: 138},
		{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/dark-dome-400x400.png'), width: 400, height: 276}];
	  }
	  else {
	    background = [{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/alta-circle-200x200.png'), width: 200, height: 200},
		{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/alta-circle-400x400.png'), width: 400, height: 400}];
	  }
	  this.options['_backgroundImages'] = background;
	}
	if(typeof indicatorImages === 'string') {
	  if(indicatorImages === "needleAntique") {
	    indicator = [{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/antique-needle-1600x1600.png'), width: 81, height: 734}];
      }
	  
	  else if(indicatorImages === "needleDark") {
	    indicator = [{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/dark-needle-1600x1600.png'),  width: 454, height: 652}];
	  }
	  
	  else if(indicatorImages === "needleLight") {
	    indicator = [{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/light-needle-1600x1600.png'),  width: 454, height: 652}];
	  }
	  else
	    indicator = [{src: oj.Config.getResourceUrl('resources/internal-deps/dvt/gauge/alta-needle-1600x1600.png'),  width: 374, height: 575}];
	  this.options['_indicatorImages'] = indicator;
	}  
  },
	
  /**
   * Returns the gauge's metric label. 
   * @return {Object} The metric label object
   * @expose
   */
  getMetricLabel: function() {
    var auto = this._component.getAutomation();
    return auto.getMetricLabel();
  }
});
});
