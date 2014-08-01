define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojvalidation', 'ojs/ojpopup'], 
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

/*jslint browser: true*/

/**
 * A messaging strategy that uses an instance of ojPopup component to show and hide messaging content.
 * 
 * @param {Array} displayOptions an array of messaging artifacts displayed in the popup.
 * @constructor
 * @extends {oj.MessagingStrategy}
 * @private
 */
oj.PopupMessagingStrategy = function (displayOptions)
{
  this.Init(displayOptions);
};

/**
 * Registers the PopupMessagingStrategy constructor function with oj.ComponentMessaging. 
 * 
 * @private
 */
oj.ComponentMessaging.registerMessagingStrategy(oj.ComponentMessaging._DISPLAY_TYPE.NOTEWINDOW, 
                               oj.PopupMessagingStrategy);
                               
// Subclass from oj.MessagingStrategy 
oj.Object.createSubclass(oj.PopupMessagingStrategy, oj.MessagingStrategy, "oj.PopupMessagingStrategy");

/**
 * Messaging popup defaults for components, by component type. A special 'default' type defines the 
 * defaults for most editableValue components. 
 * The following properties are available - 
 * 'events' - these specify the on handlers for events that are setup to open and close popups
 * 'position' - specifies the type of element the popup is positioned against.
 * @private
 */
oj.PopupMessagingStrategy._DEFAULTS_BY_COMPONENT = 
{
  "ojRadioset": 
  {
    position: 'launcher', 
    events: {open: "focusin mouseover", close: "mouseout"}
  },
  "ojCheckboxset": 
  {
    position: 'launcher', 
    events: {open: "focusin mouseover", close: "mouseout"}
  },
  "default": 
  {
    events: {open: "focusin"}
  }
};

oj.PopupMessagingStrategy._DEFAULT_STATUS_ICON_SELECTORS = "oj-component-icon oj-message-status-icon ";

/**
 * Initializes the popup messaging strategy.
 *  
 * @param {Array} displayOptions an array of messaging artifacts displayed in the popup.
 * @private
 */
oj.PopupMessagingStrategy.prototype.Init = function (displayOptions) 
{
  oj.PopupMessagingStrategy.superclass.Init.call(this, displayOptions);
};

/**
 * Sets up a tooltip for the component instance using the messaging content provided. 
 * 
 * @param {Object} component widget instance
 * @param {Object} launcher element that laucnhes the messaging popup. 
 * @param {Object} content the messaging content
 * @private
 * 
 */
oj.PopupMessagingStrategy.prototype.activate = function (component, launcher, content)
{
  oj.PopupMessagingStrategy.superclass.activate.call(this, component, launcher, content);
  this._initMessagingPopup();
  
  // Since activate can be called anytime widget is initialized we want to make sure and update its 
  // state
  this.update(content);
};


/**
 * Updates the tooltip content associated to the component instance using the updated messaging 
 * content provided. 
 * 
 * @param {Object} content the messaging content
 * @private
 * 
 */
oj.PopupMessagingStrategy.prototype.update = function (content)
{
  oj.PopupMessagingStrategy.superclass.update.call(this, content);
};

/**
 * Cleans up messages on the component and destroys any widgets it created.
 * 
 * @param {Object} content the messaging content
 * @private
 */
oj.PopupMessagingStrategy.prototype.deactivate = function (content)
{
  var self = this, compDefaults = 
    oj.PopupMessagingStrategy._DEFAULTS_BY_COMPONENT[this.GetComponent().widgetName],
      events = compDefaults ? compDefaults.events : 
                  oj.PopupMessagingStrategy._DEFAULTS_BY_COMPONENT["default"].events;
  
  // Remove event handlers setup on launcher
  if (events['open'])
  {
    this.GetLauncher().off(events['open'], self._openPopup);
  }
  
  if (events['close'])
  {
    this.GetLauncher().off(events['close'], self._closePopup);
  }
  this._destroyTooltip();
  oj.PopupMessagingStrategy.superclass.deactivate.call(this, content);
};

oj.PopupMessagingStrategy.prototype.reinitialize = function (newDisplayOptions)
{
  oj.PopupMessagingStrategy.superclass.reinitialize.call(this, newDisplayOptions);
};

/**
 * Return the subcomponent node represented by the documented locator attribute values.
 * 
 * @param {string} subId
 * @param {number=} index
 * @private
 */
oj.PopupMessagingStrategy.prototype.getNodeBySubId = function (subId, index)
{
  var firstHintGrp = null;
  if (!this._isPopupInitialized())
  {
    return null;
  }
  
  if (subId === "oj-messaging-popup-content")
  {
    return this.$messagingContentRoot[0];
  }
  else if (subId === "oj-messaging-popup-message")
  {
    return this.$messagingContentRoot.find(".oj-message > .oj-message-content")[index || 0];
  }
  else if (subId === "oj-messaging-popup-validator-hint")
  {
    return this.$messagingContentRoot.find(".oj-form-control-hints > .oj-form-control-hint-validator")[index || 0];
  }
  else if (subId === "oj-messaging-popup-converter-hint")
  {
    return this.$messagingContentRoot.find(".oj-form-control-hints > .oj-form-control-hint-converter")[0];
  }
  else if (subId === "oj-messaging-popup-title")
  {
    return this.$messagingContentRoot.find(".oj-form-control-hints > .oj-form-control-hint-title")[0];
  }
  
  return null;
};

/**
 * 
 * @param {Event} event Opens a popup. This handler is called in the context of 
 * the launcher usually the this.element or some relevant node the messaging 
 * popup is associated to.
 * @property {Object} event.data.strategy the strategy object 
 * @private
 */
oj.PopupMessagingStrategy.prototype._openPopup = function (event)
{
  var self = event.data && event.data['strategy'], domNode;
  // window.console.log(event.type + " called: tooltip opened");
  var latestContent = self._buildPopupHtml();
  if (self._isPopupInitialized() && latestContent)
  {
    // replace popup messaging content with new content
    domNode = self.$messagingContentRoot[0];
    domNode.innerHTML = "";
    domNode.innerHTML = latestContent;
    self.$messagingContentRoot.ojPopup("open", self.GetLauncher());
  }
};

oj.PopupMessagingStrategy.prototype._closePopup = function (event)
{
  // window.console.log(event.type + " called; tooltip closed");
  //$(this).tooltip("disable").tooltip('close');
  var self = event.data && event.data['strategy'];
  self.$messagingContentRoot.ojPopup("close", self.GetLauncher());
};

oj.PopupMessagingStrategy.prototype._handleMouseLeave = function (e)
{
  // needed to turn off default open of tooltip for mouseleave. 
  // window.console.log(event.type + " called: turning off default open of tooltip");
  e.preventDefault();
  e.stopImmediatePropagation(); 
  return false;
};

// Associates the ojPopup component to the messaging content root.
oj.PopupMessagingStrategy.prototype._initMessagingPopup = function ()
{
  var self = this; 
  if (!this._isPopupInitialized())
  {
    var jqLauncher = this.GetLauncher(), popupOptions, jPositionOf = this._getPopupPosition(),
        compDefaults = 
        oj.PopupMessagingStrategy._DEFAULTS_BY_COMPONENT[this.GetComponent().widgetName],
        events = compDefaults ? compDefaults.events : 
                  oj.PopupMessagingStrategy._DEFAULTS_BY_COMPONENT["default"].events,
                  jqRoot = this.GetComponent().widget();
    
    // 1. associate the ojPopup component to wrapper <div> for popup content
    // 2. remember the popup content root
    // 3. wire up on() event handlers for registered events that open and close popup. E.g., focusin.
    // 4. autoDismissal happens automatically when focus leaves component. For other events like 
    // mouseover it's required to call off() 
    
    this.$messagingContentRoot = $(this._getPopupContentHtml());
    // append to body instead of component root as styles set on it can bleed through
    $("body").append(this.$messagingContentRoot);
    // jqRoot.append(this.$messagingContentRoot);
    popupOptions = {'rootAttributes' : {'class' : 'oj-messaging-popup'},
                    'initialFocus': 'none', 
                    'tail': 'simple', 
                    'autoDismiss': 'focusLoss', 
                    'position': {my: 'start bottom', at: 'end top', collision: 'flipfit', 
                                 of: jPositionOf}};
               
    this.$messagingContentRoot.ojPopup(popupOptions);
      
    if (events['open'])
    {
      jqLauncher.on(events['open'], {'strategy': self}, self._openPopup);
    }
    if (events['close'])
    {
      jqLauncher.on(events['close'], {'strategy': self}, self._closePopup);
    }

  }
};

/**
 * Returns the jquery element popup should be position on. We always position on tip of component 
 * root unless specifically overridden. Components like radion and checkboxset use the launcher, 
 * which in the inputs
 * @private
 */
oj.PopupMessagingStrategy.prototype._getPopupPosition = function()
{
  var compDefaults = 
    oj.PopupMessagingStrategy._DEFAULTS_BY_COMPONENT[this.GetComponent().widgetName];
  
  if (compDefaults)
  {
    if (compDefaults.position && compDefaults.position === "launcher")
    {
      return this.GetLauncher();
    }
  }
  
  return this.GetComponent().widget();
};

oj.PopupMessagingStrategy.prototype._getPopupContentHtml = function ()
{
  return "" + "<div class='oj-messaging-popup-container'></div>"; 
};

oj.PopupMessagingStrategy.prototype._destroyTooltip = function ()
{
  if (this._isPopupInitialized())
  {
    if (this.$messagingContentRoot)
    {
      this.$messagingContentRoot.ojPopup("destroy");
      this.$messagingContentRoot.remove();
    }
  }
};

/**
 * Returns the content to show inside popup.
 * @private
 * @return {String|string} content
 */
oj.PopupMessagingStrategy.prototype._buildPopupHtml = function ()
{
  var nwHtml = "", component = this.GetComponent(), jDocument = component.document, 
          document = jDocument[0], nwContent = [], addSeparator = false, that = this; 
  
  if (this.ShowMessages()) 
  {
    nwContent.push(this._buildMessagesHtml());
  }
  
  if (this.ShowConverterHint() || this.ShowValidatorHint() || this.ShowTitle())
  {
    nwContent.push(this._buildHintsHtml(document));
  }
  
  // TODO: Add support for shortDesc, instrcution text etc.
  $.each(nwContent, function(i, content) 
    {
      if (content)
      {
        if (addSeparator)
        {
          nwHtml = nwHtml.concat(that._getSeparatorHtml(document));
        }
        else
        {
          addSeparator = true; 
        }
        
        nwHtml = nwHtml.concat(content);
      }
    });
    
  return nwHtml;
};

/**
 * Returns the content to show inside tooltip.
 * @private
 * @return {string} content
 */
oj.PopupMessagingStrategy.prototype._buildMessagesHtml = function ()
{
  var messages, content = "", i, j, severity, severityStr,severityLevel,
          message, maxSeverity = this.GetMaxSeverity(), summary, detail, messageObj, 
          messagesByTypes={}, messagesByType = [];

  if (this.HasMessages())
  {
    messages = this.GetMessages();
    
    // Step1: build an indexed array of messages by severity level.
    for (i = 0; i < messages.length; i++)
    {
      message = messages[i];
      
      if (!(message instanceof oj.Message))
      {
        messageObj = new oj.Message(message['summary'], message['detail'], message['severity']);
      }
      else
      {
        messageObj = message;
      }
      
      severityLevel = oj.Message.getSeverityLevel(messageObj['severity']);
      if (!messagesByTypes[severityLevel])
      {
        messagesByTypes[severityLevel] = [];
      }
      
      messagesByTypes[severityLevel].push(messageObj);
    }
    
    // Step 2: starting with maxSeverity level build messages with decreasing severity
    for (i = maxSeverity; i >= oj.Message.SEVERITY_LEVEL['CONFIRMATION']; i--)
    {
      messagesByType = messagesByTypes[i] || [];
      
      for (j = 0; j < messagesByType.length; j++)
      {
        message = messagesByType[j];
        oj.Assert.assertPrototype(message, oj.Message);

        severityLevel = oj.Message.getSeverityLevel(message['severity']);
        severityStr = this._getSeverityTranslatedString(severityLevel);
        summary = message['summary'] || severityStr;
        // if detail is empty we don't care to duplicate summary
        detail = message['detail'] || "";
        
        // build message dom
        // (x) <Summary Text>
        // <Detail Text>
        
        content = content.concat("<div class='oj-message'>")
                         .concat("<span class='" + this._getSeverityIconSelector(severityLevel) + 
                                      "' title='" + severityStr + "' role='img'></span>")
                         .concat("<span class='oj-message-content'>")
                         .concat("<div class='oj-message-summary'>" + summary + "</div>");
        if (detail)
        {
          content = content.concat("<div class='oj-message-detail'>" + detail + "</div>");
        }
        
        content = content.concat("</div>"); // end of oj-message
      }
    }
  }
  return content;
};

/**
 * All hints including title
 * @param {Document} document
 * @return {string} html content for all hints.
 * @private
 */
oj.PopupMessagingStrategy.prototype._buildHintsHtml = function (document)
{
  var hints = [], i, hintsHtml = "", hint;
  
  if (this.ShowConverterHint())
  {
    hints = this.GetConverterHint();
    hint = hints.length ? hints[0] : "";
    hintsHtml += this._buildHintHtml(document, 
                                     "oj-form-control-hint-converter", 
                                     hint);
  }
  
  if (this.ShowValidatorHint())
  {
    hints = this.GetValidatorHints();
    for (i = 0; i < hints.length; i++)
    {
      hintsHtml += this._buildHintHtml(document, 
                                       "oj-form-control-hint-validator", 
                                       hints[i]);
    }
  }

  if (this.ShowTitle())
  {
    hintsHtml += this._buildHintHtml(document, "oj-form-control-hint-title", this.GetTitle());
  }
  
  return hintsHtml ? "<div class='oj-form-control-hints'>" + hintsHtml + "</div>": "";
};

oj.PopupMessagingStrategy.prototype._buildHintHtml = function (document, selector, hintText)
{
  var jTitleDom, classes = "oj-form-control-hint";
  if (hintText)
  {
    jTitleDom = $(document.createElement("div"));
    classes += " " + selector;
    jTitleDom.addClass(classes);
    jTitleDom.append(this._getHintDom(document, hintText));
  }
  
  return jTitleDom ? jTitleDom.get(0).outerHTML : "";
};

oj.PopupMessagingStrategy.prototype._getHintDom = function(document, hintText) 
{
  var jHintDom = null;
  // 
  if (oj.DomUtils.isHTMLContent(hintText)) 
  {
    jHintDom = oj.DomUtils.cleanHtml(hintText.substring(6, hintText.length - 7));
  }
  else 
  {
    jHintDom = $(document.createElement("div"));
    jHintDom.text(hintText);
    jHintDom = jHintDom.get(0);
  }
    
  return jHintDom;
}; 

oj.PopupMessagingStrategy.prototype._getSeparatorHtml = function (document)
{
  var jSeparatorDom; 
  jSeparatorDom = $(document.createElement("hr"));
  
  return jSeparatorDom ? jSeparatorDom.get(0).outerHTML : "";
};


oj.PopupMessagingStrategy.prototype._getSeverityTranslatedString = function (severity)
{
  var sevTypeStr;
  // get the translated string for the severity
  switch (severity)
  {
    case oj.Message.SEVERITY_LEVEL['FATAL']:
      sevTypeStr = oj.Translations.getTranslatedString('oj-message.fatal');
      break;
    case oj.Message.SEVERITY_LEVEL['ERROR']:
      sevTypeStr = oj.Translations.getTranslatedString('oj-message.error');
      break;
    case oj.Message.SEVERITY_LEVEL['WARNING']:
      sevTypeStr = oj.Translations.getTranslatedString('oj-message.warning');
      break;
    case oj.Message.SEVERITY_LEVEL['INFO']:
      sevTypeStr = oj.Translations.getTranslatedString('oj-message.info');
      break;
    case oj.Message.SEVERITY_LEVEL['CONFIRMATION']:
      sevTypeStr = oj.Translations.getTranslatedString('oj-message.confirmation');
      break;
  }
  
  return sevTypeStr;
  
};

oj.PopupMessagingStrategy.prototype._getSeverityIconSelector = function (severity)
{
  var sevIconStr;
  // get the icon selector for the severity
  switch (severity)
  {
    case oj.Message.SEVERITY_LEVEL['FATAL']:
      sevIconStr = 'oj-message-error-icon';
      break;
    case oj.Message.SEVERITY_LEVEL['ERROR']:
      sevIconStr = 'oj-message-error-icon';
      break;
    case oj.Message.SEVERITY_LEVEL['WARNING']:
      sevIconStr = 'oj-message-warning-icon';
      break;
    case oj.Message.SEVERITY_LEVEL['INFO']:
      sevIconStr = 'oj-message-info-icon';
      break;
    case oj.Message.SEVERITY_LEVEL['CONFIRMATION']:
      sevIconStr = 'oj-message-confirmation-icon';
      break;
  }
  
  return oj.PopupMessagingStrategy._DEFAULT_STATUS_ICON_SELECTORS + sevIconStr;
};

oj.PopupMessagingStrategy.prototype._isPopupInitialized = function ()
{
  return (this.$messagingContentRoot) ? 
    this.$messagingContentRoot.is(":oj-popup") : false;
};


/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @class
 * @abstract
 * @name oj.editableValue
 * @augments oj.baseComponent
 * @since 0.6
 * 
 * @classdesc
 * Abstract base class for all editable components that are value holders and require 
 * validation and messaging capabilities.<br/>
 * Validation is run at various times by the component. Whether a validation error encountered is 
 * reported to the end-user right-away or not, depends on the context the validation was run under. 
 * 
 * <br/>
 * <h3 id="validation-errors-section">
 * Reporting Validation Errors
 * <a class="bookmarkable-link" title="Bookmarkable Link" href="#validation-errors-section"></a>
 * </h3>
 * <h4>Validation errors are reported to user immediately in these cases:</h4>
 * <ul>
 * <li>When value changes as a result of user interaction. Both 
 * <code class="prettyprint">messagesComponent</code> and <code class="prettyprint">messagesCustom</code>
 * options are cleared and full validation is run, i.e., the value is parsed and validated.</li>
 * <li>When the <code class="prettyprint">validate</code> method is called by app. Only the 
 * <code class="prettyprint">messagesComponent</code> option is cleared, so it may be necessary for 
 * page author to clear <code class="prettyprint">messagesCustom</code> option before calling this 
 * method. See <code class="prettyprint">validate</code> method for details.</li>
 * </ul>
 * 
 * <h4>Validation errors are not reported to user immediately, i.e., are deferred, in these cases:</h4>
 * <ul>
 *  <li>When a component is created. It runs the validators that participate in deferred validation. 
 *  No messages are cleared prior to running validation.</li>  
 *  <li>When <code class="prettyprint">value</code> option changes programmatically. Only 
 *  <code class="prettyprint">messagesComponent</code> is cleared prior to running validation. Page 
 *  authors may need to clear custom messages they added, if necessary. </li>
 *  <li>When <code class="prettyprint">required</code> option changes programmatically. Again only 
 *  <code class="prettyprint">messagesComponent</code> is cleared and validation is re-run but only 
 *  when required is set. It may be necessary to clear custom messages added by the app. </li>
 *  <li>When <code class="prettyprint">reset</code> method is called. Both 
 *  <code class="prettyprint">messagesComponent</code> and <code class="prettyprint">messagesCustom</code>
 *  options are cleared and deferred validation run. See <code class="prettyprint">reset</code> method for details.</li>
 * </ul>
 * 
 * <br/>
 * <h3 id="deferred-messages-section">
 * Showing Deferred Messages
 * <a class="bookmarkable-link" title="Bookmarkable Link" href="#deferred-messages-section"></a>
 * </h3>
 * Deferred validation messages are displayed only when page author requests for it explicitly in 
 * one of the following ways: 
 * <ul>
 * <li>calls the helper methods <code class="prettyprint">showMessages</code> or 
 * <code class="prettyprint">showMessagesAndFocusOnFirstInvalid</code>. See 
 * {@link oj.InvalidComponentTracker} for details and refer to the validation demos.
 * <li>calls the <code class="prettyprint">showMessages</code> method on the component</li>
 * </ul>
 * 
 * <br/>
 * <h3 id="deferred-validators-section">
 * Validators Participating in Deferred Validation
 * <a class="bookmarkable-link" title="Bookmarkable Link" href="#deferred-validators-section"></a>
 * </h3>
 * The required validator alone participates in deferred validation. 
 *  
 * 
 * @example <caption>Initialize component value using options</caption>
 * &lt;input id="foo" type="text"/&gt;
 * &lt;script&gt;
 * &nbsp;&nbsp;$('#foo").ojInputText({'value': 'abc'});
 * &lt;/script&gt;
 * // using knockout ojComponent binding
 * &lt;input id="foo" data-bind="ojComponent: {component: 'ojInputText', value: 'abc'}"/&gt;
 * @example <caption>Initialize component value using ko observable</caption>
 * &lt;input id="foo" data-bind="ojComponent: {component: 'ojInputText', value: salary}"/&gt;
 * &lt;script&gt;
 * &nbsp;&nbsp;var salary = ko.observable('abc');
 * &lt;/script&gt;
 * @example <caption>Initialize component value using element value</caption>
 * &lt;input id="foo" data-bind="ojComponent: {component: 'ojInputText'}" value='abc'/&gt;
 */
oj.__registerWidget('oj.editableValue', $['oj']['baseComponent'], 
{
  widgetEventPrefix: "oj",
  
  options: 
  {
    /** 
     * Whether the component is disabled. 
     *  
     * <p>The 2-way <code class="prettyprint">disabled</code> binding offered by 
     * the <code class="prettyprint">ojComponent</code> binding 
     * should be used instead of Knockout's built-in <code class="prettyprint">disable</code> 
     * and <code class="prettyprint">enable</code> bindings, 
     * as the former sets the API, while the latter sets the underlying DOM attribute.
     * 
     * @example <caption>Initialize component with <code class="prettyprint">disabled</code> option:</caption>
     * $(".selector").ojFoo({"disabled": true}); // Foo is InputText, InputNumber, Select, etc.
     * 
     * @expose 
     * @type {?boolean|undefined}
     * @default <code class="prettyprint">false</code>. The element's disabled property is used as 
     * its initial value if it exists, when the option is not explicitly set. When neither is set, 
     * disabled defaults to false.
     * @public
     * @instance
     * @memberof! oj.editableValue
     */
    disabled: undefined,
    
    /**
     * Help information that goes on the label. When help is set on the input component, then 
     * help information is added to the input's label.
     * <p>
     * The properties supported on the help option are:
     * 
     * @property {string=} definition this is the help definition text. It is what shows up
     * when the user hovers over the label or the help icon. No formatted text is available for 
     * help definition because the help definition renders on 'title' attribute. 
     * The default value is null.
     * @property {string=} source this is the help source url. If present, a help icon will
     * render next to the label and the anchor's target is this source. The default value is null.
     * 
     * @expose 
     * @memberof! oj.editableValue
     * @instance
     * @type {Object.<string, string>}
     * @default <code class="prettyprint">{help : {definition' :null, source: null}}</code>
     * 
     * @example <caption>Initialize the input with the help definition and external url information:</caption>
     * // Foo is InputText, InputNumber, Select, etc.
     * $( ".selector" ).ojFoo({ "help": {"definition":"some help definition, "source":"some external url" } });
     * 
     * 
     * @example <caption>Set the <code class="prettyprint">help</code> option, after initialization:</caption>
     *
     * // setter
     * // Foo is InputText, InputNumber, Select, etc.
     * $( ".selector" ).ojFoo( "option", "help", {"definition":"fill out the name", "source":"http:\\www.oracle.com" } );
     * 
     */
    help: {definition: null, source: null},
    
    /**
     * List of messages added as a result of component validation. The framework sets this option 
     * so page authors can only read this option, they cannot change it.<br/>
     * Each message in the array is either an instance of oj.Message or an object that duck types it. 
     * See {@link oj.Message} for details. <br/>
     * 
     * @example <caption>Get the current set of <code class="prettyprint">messages</code> for the component:</caption>
     * // Foo is InputText, InputNumber, Select, etc.
     * var messages = $(".selector").ojFoo("option", "messagesComponent"); 
     * 
     * @expose 
     * @access public
     * @instance
     * @memberof! oj.editableValue
     * @default empty array when no option is set.
     * @type {Array|undefined}
     * @since 0.7
     */    
    messagesComponent : undefined, 
    
    /**
     * List of messages an app would add to the component. An app would typically set this option 
     * when they have a business/custom validation that runs outside of the component and they wish 
     * to notify the component, so it can show it. <br/>
     * Each message in the array is either an instance of oj.Message or an object that duck types it. 
     * See {@link oj.Message} for details. <br/>
     * 
     * 
     * @example <caption>Get the current list of app messages using <code class="prettyprint">messagesCustom</code> option:</caption>
     * // Foo is InputText, InputNumber, Select, etc.
     * var customMsgs = $(".selector").ojFoo("option", "messagesCustom"); 
     * 
     * @example <caption>Clear all messages set on the component:</caption>
     * // Foo is InputText, InputNumber, Select, etc.
     * $(".selector").ojFoo("option", "messagesCustom", []); 
     * 
     * @example <caption>Add app message (of default error severity) to component using the <code class="prettyprint">messagesCustom</code> option:</caption>
     * var msgs = [];
     * msgs.push({'summary': 'Error Summary', 'detail': 'Error Detail'}); 
     * // Foo is InputText, InputNumber, Select, etc.
     * $(".selector").ojFoo("option", "messagesCustom", msgs);
     * 
     * @expose 
     * @access public
     * @instance
     * @memberof! oj.editableValue
     * @default empty array when no option is set.
     * @type {Array|undefined}
     * @since 0.7
     */    
    messagesCustom : undefined,
    
    /**
     * Specifies how a component wants various 'messaging artifacts' to be displayed in relation to 
     * itself. It takes an Object literal containing the following properties<br/>
     * 
     * The types of messaging artifacts include <code class="prettyprint">messages</code>, 
     * <code class="prettyprint">converterHint</code>, <code class="prettyprint">validatorHint</code>, 
     * <code class="prettyprint">title</code>. <br/>
     * The display options for each type is either an array of or string. When an array is specified 
     * the first display option takes precedence over the second and so on. NOTE: In the future we 
     * plan to support additional display options like 'inline'. 
     * <p>
     * Today JET editable components set defaults that applies to the entire app/page. See 
     * {@link oj.Components.html#setDefaultOptions} for details. Normally page authors wouldn't need
     * to change the defaults, but it is possible to override the specific defaults as explained 
     * below. 
     * </p>
     * 
     * @property {Array|string=} converterHint - supported values are <code class="prettyprint">'placeholder'</code>, 
     * <code class="prettyprint">'notewindow'</code>, <code class="prettyprint">'none'</code>. The 
     * default value is <code class="prettyprint">['placeholder', 'notewindow']</code>. When there 
     * is already a placeholder set on the component, the converter hint falls back to display 
     * type of 'notewindow'. To change the default value you can do this - <br/> 
     * E.g. <code class="prettyprint">{'messagingDisplayOptions: {'converterHint': ['none']}}</code>
     * @property {Array|string=} validatorHint - supported values are <code class="prettyprint">'notewindow'</code>, 
     * <code class="prettyprint">'none'</code>. To change the default value you can do this - <br/>
     * <code class="prettyprint">{'messagingDisplayOptions: {'validatorHint': ['none']}}</code>
     * @property {Array|string=} messages - supported values are <code class="prettyprint">'notewindow'</code>, 
     * <code class="prettyprint">'none'</code>. To change the default value you can do this - <br/>
     * E.g. <code class="prettyprint">{'messagingDisplayOptions: {'messages': 'none'}}</code>
     * @property {Array|string=} title - supported values are <code class="prettyprint">'notewindow'</code>, 
     * <code class="prettyprint">'none'</code>. To change the default value you can do this - <br/>
     * E.g. <code class="prettyprint">{'messagingDisplayOptions: {'title': 'none'}}</code>
     * 
     * @example <caption>Initialize component and override default for converterHint using <code class="prettyprint">messagingDisplayOptions</code>:</caption>
     * // Only messages will get shown in the notewindow associated to this component
     * // Foo is InputText, InputNumber, Select, etc.
     * $(".selector").ojFoo("option", "messagingDisplayOptions", {
     *   'converterHint': 'none',
     *   'validatorHint': 'none',
     *   'title' : 'none'
     * });
     * 
     * @expose 
     * @access public
     * @instance
     * @default <code class="prettyprint">
     * {<br/>
     * &nbsp;&nbsp;'messages': ['notewindow'], <br/>
     * &nbsp;&nbsp;'converterHint': ['placeholder', 'notewindow'], <br/>
     * &nbsp;&nbsp;'validatorHint': ['notewindow'], <br/>
     * &nbsp;&nbsp;'title': ['notewindow']<br/>
     * }</code>
     * @memberof! oj.editableValue
     * @type {Object|undefined}
     */
    messagingDisplayOptions : undefined,
    
    /** 
     * Whether the component is required. <br/>
     * 
     * @ojvalue {string} "optional" - implies a value is not required to be provided by the user. 
     * This is the default.
     * @ojvalue {string} "required" - implies a value is required to be provided by user and the 
     * input's label will render a required icon. Additionally a required validator - 
     * (@link oj.RequiredValidator) - is implicitly used if no explicit required validator is set. 
     * An explicit required validator can be set by page authors using the validators option. 
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">required</code> option:</caption>
     * $(".selector").ojFoo({required: 'required'}); // Foo is InputText, InputNumber, Select, etc.<br/>
     * @example <caption>Initialize <code class="prettyprint">required</code> otpion from html attribute 'required':</caption>
     * &lt;input type="text" value= "foobar" required/><br/>
     * // reading the required option will return "required"
     * $(".selector").ojFoo("option", "required"); // Foo is InputText, InputNumber, Select, etc.<br/>
     * 
     * @example <caption>Using <code class="prettyprint">required</code> option and setting an explicit required validator:</caption>
     * &lt;!-- Foo is InputText, InputNumber, Select, etc. -->
     * &lt;input type="text" value="foobar" required data-bind="ojComponent: {
     *   component: 'ojFoo', 
     *   value: password, 
     *   validators: [{type: 'required', options : {
                        messageSummary: '\'{label}\' Required', 
                        messageDetail: 'A value is required for this field'}}]}"/>
     * @expose 
     * @access public
     * @instance
     * @default when the option is not set, the element's required property is used as its initial 
     * value if it exists.
     * @memberof! oj.editableValue
     * @type {string|undefined}
     */
    required: undefined,
    
    /** 
     * Represents advisory information for the component, such as would be appropriate for a tooltip. 
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">title</code> option:</caption>
     * &lt;!-- Foo is InputText, InputNumber, Select, etc. -->
     * &lt;input id="username" type="text" data-bind="
     *    ojComponent: {component: 'ojFoo', title : 'enter at least 3 alphanumeric characters', 
     *                  pattern: '[a-zA-Z0-9]{3,}', value: ''}"/><br/>
     * 
     * @example <caption>Initialize <code class="prettyprint">title</code> option from html attribute 'title':</caption>
     * &lt;!-- Foo is InputText, InputNumber, Select, etc. -->
     * &lt;input id="username" type="text" value= "foobar" title="enter at least 3 alphanumeric characters" 
     *           pattern="[a-zA-Z0-9]{3,}"/><br/>
     * $("#username").ojFoo({}); // Foo is InputText, InputNumber, Select, etc. 
     * 
     * // reading the title option will return "enter at least 3 alphanumeric characters"
     * $("#username").ojFoo("option", "title"); // Foo is InputText, InputNumber, Select, etc. <br/>
     * 
     * @expose 
     * @access public
     * @instance
     * @default when the option is not set, the element's title attribute is used as its initial 
     * value if it exists. 
     * @memberof! oj.editableValue
     * @type {string|undefined}
     */    
    title: undefined,
    
    /** 
     * List of validators, where each item is either an instance that duck types {@link oj.Validator}, 
     * or is an Object literal containing the following properties. 
     * 
     * <p>
     * After the component is initialized, changing the <code class="prettyprint">validators</code> 
     * option can present issues that need to addressed appropriately <br/>
     * &nbsp;&nbsp;- if component is valid, the current value that passed validations earlier may now be invalid. 
     * For example, if the new validator lowered the max value to be lower than the current value, 
     * invalidating the current value. In such cases the page author has the option of calling 
     * validate() method to re-run validators against the current value. In other cases it may be 
     * necessary to re-initialize the component.<br/>
     * &nbsp;&nbsp;- if the component was invalid when the validators changed, it may be necessary for the 
     * page author to clear messages on the component, or in some cases re-initialize the 
     * component. <br/>
     * </p>
     * 
     * @property {string} type - the validator type that has a {@link oj.ValidatorFactory} that can 
     * be retrieved using the {@link oj.Validation} module. For a list of supported validators refer 
     * to {@link oj.ValidatorFactory}. <br/>
     * E.g., <code class="prettyprint">{validators: [{type: 'regExp'}]}</code>
     * @property {Object=} options - optional Object literal of options that the validator expects. 
     * <br/>
     * E.g., <code class="prettyprint">{validators: [{type: 'regExp', options: {pattern: '[a-zA-Z0-9]{3,}'}}]}</code>

     * 
     * @example <caption>Initialize the component with validator object literal:</caption>
     * // Foo is InputText, InputNumber, Select, etc.
     * $(".selector").ojFoo({
     *   validators: [{
     *     type: 'numberRange', 
     *     options : {
     *       hint: {hintMinimum: 'Enter a value greater than '{min}'}, 
     *       min: 100
     *     }
     *   }],
     * });
     * 
     * NOTE: oj.Validation.validatorFactory('numberRange') returns the validator factory that is used 
     * to instantiate a range validator for numbers.
     * 
     * @example <caption>Initialize the component with multiple validator instances:</caption>
     * var validator1 = new MyCustomValidator({'foo': 'A'}); 
     * var validator2 = new MyCustomValidator({'foo': 'B'});
     * // Foo is InputText, InputNumber, Select, etc.
     * $(".selector").ojFoo({
     *   value: 10, 
     *   validators: [validator1, validator2]
     * });
     * 
     * @expose 
     * @access public
     * @instance
     * @memberof! oj.editableValue
     * @type {Array|undefined}
     */    
    validators: undefined,
    
    /** 
     * The value of the component. 
     * 
     * @example <caption>Initialize the component with the <code class="prettyprint">value</code> option specified:</caption>
     * $(".selector").ojFoo({'value': '10'}); // Foo is InputText, InputNumber, Select, etc.<br/>
     * @example <caption>Get or set the <code class="prettyprint">value</code> option, after initialization:</caption>
     * // Getter: returns '10'
     * $(".selector").ojFoo("option", "value");// Foo is InputText, InputNumber, Select, etc.
     * // Setter: sets '20'
     * $(".selector").ojFoo("option", "value", '20'); // Foo is InputText, InputNumber, Select, etc.
     * 
     * @expose 
     * @access public
     * @instance
     * @default When the option is not set, the element's dom value is used as its initial value 
     * if it exists. The type of value is as defined by the component that extends this class. Refer 
     * to specific components for defaults.
     * @memberof! oj.editableValue
     * @type {Object|undefined}
     */
    value: undefined,
    
    // Events
    /**
     * Triggered when the following options change. 
     * <ul>
     * <li><code class="prettyprint"><strong>messages</strong></code>: a component's validity 
     * changes when its list of messages changes. <br/>
     * <li><code class="prettyprint"><strong>value</strong></code>: when the component's value changes. </li>
     * </ul>
     * 
     * <p>The event payload has the following properties - </p>
     * @property {Event} event <code class="prettyprint">jQuery</code> event object
     * @property {Object} data event payload
     * @property {Object} data.component the component method (aka widget method) commonly used to 
     * invoke methods on components (widgets) created using widget factory. Normally the event 
     * packages the previous and current values for the option, but to lookup other options in your 
     * listener you can do this - <br/>
     * <code class="prettyprint">
     * $(".selector").on({ <br/>
     * &nbsp;&nbsp;'ojoptionchange': function (event, data) {<br/>
     * &nbsp;&nbsp;&nbsp;&nbsp;var component = data['component'];<br/>
     * &nbsp;&nbsp;&nbsp;&nbsp;var required = component("option", "required");<br/>
     * &nbsp;&nbsp;};<br/>
     * });
     * </code>
     * @property {string} data.option the name of the option that changed, i.e. "messagesComponent", 
     * "messsagesCustom" or "value".
     * @property {Object} data.previousValue - an Object holding the previous value of the option
     * @property {Object} data.value - an Object holding the current value of the option
     * @property {Object} data.optionMetadata information about the option that changed
     * @property {string} data.optionMetadata.writeback <code class="prettyprint">"shouldWrite"</code> or
     *  <code class="prettyprint">"shouldNotWrite"</code>. For use by the JET writeback mechanism. 
     *  
     * @example <caption>Initialize the component with the <code class="prettyprint">optionChange</code> callback to be notified of changes to the component's validity</caption>
     * // Foo is InputText, InputNumber, Select, etc.
     * $(".selector").ojFoo({ 
     *   'optionChange': function (event, data) {} 
     * });
     * @example <caption>Bind an event listener to the ojoptionchange event</caption>
     * $(".selector").on({
     *   'ojoptionchange': function (event, data) {
     *       window.console.log("option changing is: " + data['option']);
     *   };
     * });
     * 
     * @memberof! oj.editableValue
     * @expose
     * @event 
     * @access public
     * @instance
     *
     */
    optionChange: undefined
    
    // B I N D I N G - O N L Y     A T T R I B U T E S
    
        // TODO: Add at-example tag(s)?
        /**
         * <p>Tracks the validity of a group of components.  See {@link oj.InvalidComponentTracker}
         * for more information and usage examples.
         * 
         * <p>This attribute is exposed only via the <code class="prettyprint">ojComponent</code> 
         * binding, and is not a component option.
         * 
         * @ojbindingonly
         * @member
         * @name invalidComponentTracker
         * @memberof oj.editableValue
         * @instance
         * @type {oj.InvalidComponentTracker}
         * @default <code class="prettyprint">null</code>
         */
	},
  
  // P U B L I C    M E T H O D S
  
  /**
   * Returns an array of all messages currently associated with the component. This includes custom 
   * messages from <code class="prettyprint">messagesCustom</code> option and 
   * framework messages from <code class="prettyprint">messagesComponent</code> option. 
   * <p> 
   * Each message object includes properties already specified by the contract for 
   * {@link oj.Message}. An additional property <code class="prettyprint">'display'</code> is added 
   * so authors can tell which message has deferred display. Supported values for 
   * <code class="prettyprint">display</code> are <code class="prettyprint">'immediate'</code> and 
   * <code class="prettyprint">'deferred'</code>.
   * 
   * @example <caption>Get all messages associated with the component</caption>
   * var allMsgs = $('#it1").ojInputText('getMessages');
   * for (i = 0; i < allMsgs.length; i++) 
   * {
   *   msg = allMsgs[i]; 
   *   console.log("summary: " + msg['summary'] + " display: " + msg['display']);
   * }
   * 
   * @see oj.Message
   * @expose
   * @override
   * @memberof! oj.editableValue
   * @instance
   * @returns {Array.<Object>} an Array of all messages or an empty array if there are no messages. 
   * Each message object contains the properties 'summary', 'detail', 'severity' and 'display'.
   * 
   * @since 0.7
   */
  getMessages : function ()
  {
    var allMsgs = [], msg;
    var compMsgs = this.options['messagesComponent'];
    allMsgs = compMsgs.concat(this.options['messagesCustom']);
    
    // expose it so page authors can tell if the 
    for (var i = 0; i < allMsgs.length; i++)
    {
      msg = allMsgs[i];
      if (msg instanceof oj.ComponentMessage || msg instanceof oj.Message)
      {
        msg['display'] = msg.canDisplay() ? 'immediate' : 'deferred';
      }
      else if (msg instanceof Object)
      {
        msg['display'] = "immediate";
      }
    }
    
    return allMsgs;
  },
  
  /**
   * Return the subcomponent node represented by the documented locator attribute values. <br/>
   * If the locator is null or no subId string is provided then this method returns the element that 
   * this component was initalized with. <br/>
   * If a subId was provided but a subcomponent node cannot be located this method returns null.
   * 
   * <p>If the <code class="prettyprint">locator</code> or its <code class="prettyprint">subId</code> is 
   * <code class="prettyprint">null</code>, then this method returns the element on which this component was initalized.
   * 
   * <p>If a <code class="prettyprint">subId</code> was provided but no corresponding node 
   * can be located, then this method returns <code class="prettyprint">null</code>.
   * 
   * @expose
   * @override
   * @memberof oj.editableValue
   * @instance
   * 
   * @param {Object} locator An Object containing, at minimum, a <code class="prettyprint">subId</code> 
   * property.  See the table for details on its fields.
   * 
   * @property {string=} locator.subId - A string that identifies a particular DOM node in this component.
   * 
   * <p>The supported sub-ID's are documented in the <a href="#subids-section">Sub-ID's</a> section of this document.
   * 
   * @property {number=} locator.index - A zero-based index, used to locate a message content node 
   * or a hint node within the popup. This is applicable when the 
   * <a href="#oj-messaging-popup-message">"oj-messaging-popup-message"</a> or 
   * <a href="#oj-messaging-popup-message">"oj-messaging-popup-validator-hint"</a> subIds are used. 
   * If no index is provided, zero is assumed.
   * 
   * @returns {Element|null} The DOM node located by the <code class="prettyprint">subId</code> string passed in 
   * <code class="prettyprint">locator</code>, or <code class="prettyprint">null</code> if none is found.
   * 
   * @example <caption>Get the node for a certain subId:</caption>
   * // Foo is ojInputNumber, ojInputDate, etc.
   * var node = $( ".selector" ).ojFoo( "getNodeBySubId", {'subId': 'oj-some-sub-id'} );
   */
  getNodeBySubId: function(locator)
  {
    var node = this._super(locator), subId, cm, index = 0;
    if (!node)
    {
      subId = locator['subId'];
      index = locator['index'] || 0;
      cm = this._getComponentMessaging();
      switch (subId)
      {
        case "oj-messaging-popup-content" :
        case "oj-messaging-popup-converter-hint" :
        case "oj-messaging-popup-title" :
          node = cm.getNodeBySubId(subId);
          break;
        
        case "oj-messaging-popup-validator-hint" :
        case "oj-messaging-popup-message" :
          node = cm.getNodeBySubId(subId, index);
          break;
      }
    }  
    
    // Non-null locators not recognized by this class need to be handled by subclasses.
    return node || null;
  },
           
  /**
   * whether the component is currently valid. 
   * @example <caption>Check whether the component is valid:</caption>
   * var value = $(".selector").ojInputText("isValid");
   * @returns {boolean}
   * @access public
   * @instance
   * @expose
   * @memberof! oj.editableValue
   */
  isValid : function ()
  {
    return this.__valid === undefined ? true : this.__valid;
  },
  
  /**
   * Called typically when the DOM underneath the component has changed requiring a re-render 
   * of the component. Calling <code class="prettyprint">refresh</code> does not update the 
   * component's display value. In order to overwrite any user entered data that the component might 
   * be displaying it's important to call the <code class="prettyprint">reset</code> method.
   * <p>
   * When some external condition that impacts the validity of the component changes, such as when 
   * the locale for the page changes, a component might need to be entirely re-created. 
   * When a locale changes, the locale specific options used by its converter, validators or its 
   * hints and translations will need to be updated. If a component is not recreated then it would 
   * at least need to be refreshed and reset. The latter is needed as validation errors may no 
   * longer be relevant for the new locale. 
   * </p>
   * 
   * @example <caption>Refresh component.</caption>
   * $(selector).ojInputText("refresh");<br/>
   * @see #reset
   * 
   * @access public
   * @instance
   * @expose
   * @memberof! oj.editableValue
   * @since 0.7
   */
  refresh : function ()
  {
    this._super();
    // TODO: revisit
    this._doRefresh(true);
  },
  
  /**
   * A convenience method that resets the component by clearing both its 
   * <code class="prettyprint">messagesCustom</code> and 
   * <code class="prettyprint">messagesCOmponent</code> options and pushes its value as the 
   * component's display value. User entered values will be erased when this method is called.
   * 
   * @example <caption>Reset component. Clears <code class="prettyprint">messagesCustom</code> and <code class="prettyprint">messagesCOmponent</code> options</caption>
   * $(selector).ojInputText("reset"); <br/>
   * 
   * @example <caption>Reset component but not clear custom messages. Component messages will be cleared and deferred validation run.</caption>
   * optionValue = this.options['value']; 
   * $(selector).ojInputText("option", "value", optionValue); <br/>
   * 
   * @access public
   * @instance
   * @expose
   * @memberof! oj.editableValue
   * @since 0.7
   */
  reset : function ()
  {
    var resetValue = this.options['value'];
    
    this._clearAllMessages();
    this._updateValueOption(resetValue);
  },
  
  /**
   * Instructs component to show deferred messages immediately. Triggers an 
   * <code class="prettyprint">optionChange</code> event if there were deferred messages. If no 
   * messages are currently marked for deferred display, this method does nothing. <br/>
   * To view messages user has to set focus on the component. <br/>
   * NOTE: When a component runs its validation in deferred mode, any validation error raised is 
   * marked for deferred display. 
   * 
   * @example <caption>Display all messages including deferred ones.</caption>
   * $(selector).ojInputText("showMessages");
   * @access public
   * @instance
   * @expose
   * @memberof! oj.editableValue
   * @since 0.7
   */
  showMessages : function ()
  {
    var msgs = this._messagesComponent, msg, mutated = false, i, clonedMsgs = [];
    // update internal property, clone it and set that on 'messagesComponent' option.
    for (i = 0; i < msgs.length; i++)
    {
      msg = msgs[i];
      if (msg instanceof oj.ComponentMessage)
      {
        mutated = mutated || msg._forceDisplayImmediate();
      }
      
      clonedMsgs.push(msg.clone());
    }
    
    if (mutated)
    {
      this.options['messagesComponent'] = clonedMsgs; 
      // component validity did not change, so trigger optionChange but don't writeback. 
      this._TriggerOptionChange("messagesComponent", msgs, false /* shouldWriteback */);
    }
  },
  
  /**
   * A convenience method to validate the component's 'value', using all validators registered on 
   * the component. It's important to note that this method validates the 
   * <code class="prettyprint">value</code> option and not the UI value. 
   * <p>
   * If the component is invalid because the user entered value (UI value) is invalid, it may be 
   * necessary to reset the UI value by calling the reset() method before calling this method.<br/>
   * 
   * OTOH, if the component is invalid because of custom messages that the app added, then it may 
   * also be necessary to clear the <code class="prettyprint">messagesCustom</code> before calling 
   * this method. 
   * </p>
   * 
   * At the time this method is called,
   * <ol> 
   * <li>If component is currently marked invalid, then this method calls showMessages() and 
   * returns false; otherwise moves to next step.</li>
   * <li>If there are no validators setup for the component this method returns true. Otherwise 
   * moves to next step</li>
   * <li>Runs validators on current value. The first validator that fails updates the component's 
   * validity, adds messages, which triggers the optionChange event and returns false. If all 
   * validations pass then method returns true</li>
   * </ol>
   * 
   * @returns {boolean} true if component passed validation, false if there was an error.
   * 
   * @example <caption>Validate component using its current value.</caption>
   * // clear custom messages 
   * $(.selector).ojInputText('option', 'messagesCustom', []);
   * // validate value. validation errors are displayed if any based on the messagingDisplayOptions.
   * $(.selector).ojInputText('validate');
   * 
   * @example <caption>Reset component and validate</caption>
   * // clear custom messages 
   * $(.selector).ojInputText('option', 'messagesCustom', []);
   * // reset component
   * $(.selector).ojInputText('reset');
   * // validate value. 
   * $(.selector).ojInputText('validate');
   * 
   * @deprecated param 'requiredOnly' has been deprecated since version 0.7. 
   * 
   * @access public
   * @expose
   * @instance
   * @memberof! oj.editableValue
   * @since 0.7
   */
  
  /*
  Scenario 1: validate called when there are UI errors; 
                                      
  (A) Initial State

  --------------------------------------------------------------------------------------------------
  |   |   | UI Value    | Valid     | CompMessages  |  Value      | CustomMessages |  Model Value  |
  --------------------------------------------------------------------------------------------------
  |(A)|   | 'bar'       |  false    |  [err]        |  'foo'      |     []         |  'foo'        |

  |   |   |  (1) 'bar'  | (2) false |  [err]        |  'foo'      |     []         |  'foo'        |
  |   |(3)|  (5) 'foo'  | (4) true  |  []           |  'foo'      |     []         |  'foo'        |

    - (1) author clears messagesCustom and calls validate; 
    - (2) since valid==false, method returns
      
      To fix the above problem author has to reset the value
    - (3) reset the component 
    - (4) valid = false
    - (5) model value pushed to UI
  */ 
  validate : function ()
  {
    var mode = this._VALIDATION_MODE.VALIDATORS_ONLY; // always run all validators
        
    // TODO: needs review
    // 1. If component is currently invalid, it's either because we have deferred validation errors 
    //    or because the UI value is currently invalid. 
    // 2. if component is valid, then run all validators. 
    // 3. if component fails validation after running validation return false, else return true
    
    if (!this.isValid())
    {
      this.showMessages();
      return false; /* 1 */
    }
    else
    {
      this._doRunImmediateValidation(this.options['value'], undefined, mode, 
                                     this._VALIDATION_CONTEXT.COMPONENT_VALIDATE); /* 2 */
      if (!this.isValid())
      {
        return false;
      }
    
      return true;
    }
  },
  
  // P R O T E C T E D    C O N S T A N T S   A N D   M E T H O D S

  // *********** START WIDGET FACTORY METHODS (they retain _camelcase naming convention) **********
  
  /**
   * Validation mode specifying the kind of validation that gets run.
   * @protected
   * @memberof! oj.editableValue
   * @const
   */       
  _VALIDATION_MODE : {FULL : 1, VALIDATORS_ONLY : 2, REQUIRED_VALIDATOR_ONLY : 3},
  
  /**
   * Called at component create time primarily to initialize options, often using DOM values. This 
   * method is called before _ComponentCreate is called, so components that override this method 
   * should be aware that the component has not been rendered yet. The element DOM is available and 
   * can be relied on to retrieve any default values. <p>
   * 
   * This method sets defaults for its options that have a DOM namesake. E.g., value, required, 
   * disabled etc. Subclasses can override this method to set their own defaults for these options.
   * Example, the value option is often not set on this.element for components like radioset, which
   * walk the sub-tree to determine the value.
   * 
   * @param {!Object} originalDefaults - original default options defined on the widget and its ancestors
   * @param {?Object} constructorOptions - options passed into the wiget constructor
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _InitOptions : function(originalDefaults, constructorOptions)
  {
    this._super(originalDefaults, constructorOptions);
    
    // tracks options that were initialized from DOM. in AfterCreate these will trigger optionChange 
    // to perform writeback
    this._optionsInitializedFromDom = [];
  },

  /**
   * Initializes options defined by this base class.
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _ComponentCreate : function ()
  {
    var node = this.element, 
        attrsToRemove = ["required", "title"], //remove attributes that trigger html5 validation + 
                                               // inline bubble
        savedAttributes = this._GetSavedAttributes(node); 
    
    this._super();
    
    this.options['messagesComponent'] = this.options['messagesComponent'] || [];
    this.options['messagesCustom'] = this.options['messagesCustom'] || [];
    // initialize internal array that stores original references to message object. 
    // 'messagesComponent' not only clones the array it holds a copy of the message object. The 
    // worry is page authors can change the message objects themselves. 
    this._messagesComponent = [];

    // update element DOM for disabled
    if (typeof this.options['disabled'] === "boolean")
    {
      node.prop("disabled", this.options['disabled']);
    }
    
    // we do this here instead of in _InitOptions because here we have the final value.
    if (this.options['placeholder'])
    {
      // update element placeholder
      this._SetPlaceholder(this.options['placeholder']);
    }
    
    // remove html5 validation attributes; it's safe to remove these here because components should 
    // have already initialized options based on DOM in _InitOptions().
    $.each(attrsToRemove, function (index, value)
    {
      if (value in savedAttributes)
      {
        node.removeAttr(value);
      }
    });
  },
  
  /**
   * The value option alone is initialized here since it requires the component to be fully
   * created. Calling this.options.value before this method does not guarantee the correct 
   * value to be returned.
   *
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _AfterCreate : function ()
  {
    this._super();
    
    // decorate the label
    this._createOjLabel();
    
    // refresh value, theming and aria attributes
    this._doRefresh(false);

    // initialize component messaging
    this._initComponentMessaging();
    
    // if option was initialized from DOM we track these updates alone and trigger optionChange for 
    // writebacks
    this._doAfterCreateOptionChanges();
    
    // run deferred validation 
    this._doAfterCreateValidation();

    this.widget().addClass("oj-form-control");
  },
  
  /**
   * Detaches the widget from the element and restores element exactly like it was before the widget 
   * was attached.
   * @protected
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * 
   */
  _destroy : function ()
  {
    var widget = this.widget();
    
    this._clearAllMessages(null, true);
    this._getComponentMessaging().deactivate(this._getMessagingContent());
    // remove all selectors added to the widget
    $.each(this._OPTION_TO_CSS_MAPPING, function() { 
        widget.removeClass(this.toString());
      });
    widget.removeClass("oj-form-control");
    // remove all aria attributes added to the element  
    this.element.removeAttr("aria-required");
    if (this.$label)
    {
      this.$label._ojLabel( "destroy" );
    }
    return this._super();
  },

  /**
   * Sets focus on the element that naturally gets focus. For example, this would be the input 
   * element for input type components. <br/>
   * 
   * @returns {*} a truthy value if focus was set to the intended element, a falsey value otherwise.
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   * @since 0.7
   */
  Focus : function ()
  {
    this._GetContentElement().focus();
    return true;
  },
  
  /**
   * Called (by the widget factory) when the option changes, this method responds to the change 
   * by refreshing the component if needed. This method is not called for the options passed in 
   * during the creation of the widget.
   * 
   * @param {string} name of the option
   * @param {Object|string} value
   * @param {Object?} flags - optional flags. The following flags are currently supported:
   * <ul>
   *  <li>changed - true if the caller wants to indicate the value has changed, so no comparison is necessary</li>
   * </ul>
   * 
   * @expose
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _setOption : function (name, value, flags) 
  {
    var retVal, previous, shouldRefresh = true, forceDisplayValueRefresh = false,
      runDeferredValidationAfterSetOptions = false, skipSetOption = false;
    
    // Step 1: Remember previous values
    if (typeof name === "string" && value !== undefined)
    {
      switch (name)
      {
        case "value":
          previous = this.options['value'];
          break;
          
        case "messagesComponent":
          // this option can never be set programmatically by page author
          skipSetOption = true;
          break;
          
        case "messagesCustom":
          previous = this.options['messagesCustom'] || [];
          break;

        case "messagingDisplayOptions":
          previous = $.extend({}, this.options['messagingDisplayOptions']);
          break;
      }
    }
    
    if (skipSetOption)
    {
      return this; // only done for messagesComponent
    }
    
    // Step 2: Update option value 
    retVal = this._superApply(arguments);
    
    // Step 3: Do post processing like triggering events, refreshing component DOM etc.
    switch(name)
    {
      case "converter":
        forceDisplayValueRefresh = true; // when converter changes format of value could change
        this._converterOptionChanged();
        break;
      
      case "messagesCustom":
        // app messages changed; update component messaging
        this._messagesCustomOptionChanged(previous, flags);
        break; 
        
      case "messagingDisplayOptions" :
        // clear the cached merged options; the getter setup for this.options['messagingDisplayOptions']
        // will merge the new value with the defaults
        this.__messagingDisplayOptions = null;
        this._initComponentMessaging();
        
        break;
      
      case "placeholder":
        shouldRefresh = false, //  no reason to refresh component when placeholder changes.
        this._placeholderOptionChanged(flags);
        break;
      
      case "required":
        // shouldRefresh=true because hints and label should refresh to show new state
        runDeferredValidationAfterSetOptions = true;
        break;
        
      case "title":
        // update messagingstrategy
        this._getComponentMessaging().update(
                this._getMessagingContent(this.__MESSAGING_CONTENT_UPDATE_TYPE.TITLE));
        break;

      case "validators":
        // Clear the cached normalized list of all validator instances
        // TODO: it's possible that when required validator type is set that we need to run deferred 
        // validations
        this._ResetAllValidators();
        shouldRefresh = false;
        break;
        
        
      case "value":
        forceDisplayValueRefresh = true; // always overwrite component display value
        runDeferredValidationAfterSetOptions = true; // attempt to run deferred validations
        this._valueOptionChanged(previous, flags);
        
        break;
    }
    
    if (shouldRefresh)
    {
      this._Refresh(name, value, forceDisplayValueRefresh);
      // refresh aria attributes if needed
      this._refreshAria(name, value);
      // some options have special CSS selectors that need to be added or removed on the widget 
      this._refreshTheming(name, value);
    }      

    if (runDeferredValidationAfterSetOptions)
    {
      this._doSetOptionValidation(name, flags); 
    }
    return retVal;
  },
  
  // *********** END WIDGET FACTORY METHODS **********
  
  /**
   * Returns a jquery object of the element representing the content node. This could be a jQuery 
   * object of the element the widget was invoked on - typically this is an input or select or 
   * textarea element for which a value can be set.
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   * @return {Object} the jquery element that represents the editable content. E.g., an input
   */
  _GetContentElement : function ()
  {
    return this.element;
  },

  /**
   * Returns a jquery object of the element representing the primary label node for the input 
   * component. 
   * First we look for the aria-labelledby attribute on the input.
   * If that's not found, we look for the label with 'for' attribute 
   * pointing to input.
   * If that's not found, we walk up the dom looking for aria-labelledby.
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   * @return {Object} the jquery element that represents the input component's label.
   *  return null if it can't find anything.
   */
  _GetLabelElement : function ()
  {
    // If input has aria-labelledby set, then look for label it is referring to.
    var queryResult = this._getAriaLabelledByElement(this.element);
    if (queryResult !== null && queryResult.length !== 0)
    {
      return queryResult;
    }
    
    // if no aria-labelledby is on the input, then look for a label with 'for'
    // set.
    var id = this.element.prop("id");
    if (id !== undefined)
    {
      var labelQuery = "label[for='" + id + "']";
      queryResult = $(labelQuery);
      if (queryResult.length !== 0)
      {
        return queryResult;
      }
    }
 
    // if no aria-labelledby on input and no label with 'for' pointing to input,
    // then as a final step we walk up the dom to see if aria-labelledby is set.
    // If so, then we find the label it is referring to.
    // This would be the case when you have multiple inputs grouped in a div 
    // <label id="grouplabel">Address</label>
    // <div aria-labelledby="grouplabel"><input/><input/><input/></div>
    var ariaElement = this.element.closest("[aria-labelledby]");
    if (ariaElement.length !== 0)
    {
      // Element has aria-labelledby set, so look for label it is referring to.
      queryResult = this._getAriaLabelledByElement(ariaElement);
      if (queryResult !== null && queryResult.length !== 0)
      {
        return queryResult;
      }
    }
    return null;

  },
  
  
  /**
   * Returns the element's value. Normally, this is a call to this.element.val(), but for some 
   * components, it could be something else. E.g., for ojRadioset the element's value is really the 
   * value of the selected radio in the set. 
   * 
   * @override
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _GetElementValue : function () 
  {
    return this.element.val();
  },
  

/**
   * Returns a jquery object of the element that triggers messaging behavior. The trigger element 
   * is usually an input or select or textarea element for which a value can be set/retrieved and 
   * validated. 
   * 
   * @return {Object} jquery object 
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _GetMessagingLauncherElement : function ()
  {
    return this._GetContentElement();
  },
  
  /**
   * Returns the normalized converter instance.
   * 
   * @return {Object} a converter instance or null
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _GetConverter : function () 
  {
    // this.__converter holds the instance
    if (!this.__converter)
    {
      var converterOption = this.options['converter'];
      this.__converter = oj.IntlConverterUtils.getConverterInstance(converterOption);
    }
    
    return this.__converter || null;
  },

  /**
   * Returns an array of default validators used by component. The list of default validators are 
   * for the internal use of the component and are not a part of this.options.validators. E.g., if 
   * the pattern attribute or option is set, a RegExpValidator instance is automatically created and 
   * added to this list. RequiredValidtor is tracked separately from the default validators.
   * 
   * @return {Object} a map of string name to the validator instance. 
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _GetDefaultValidators : function ()
  {
    if (!this.__defaultValidators)
    {
      this.__defaultValidators = {};
    }
    
    return this.__defaultValidators;
  },
          
  /**
   * Returns the display value that is ready to be passed to the converter.
   * 
   * @param {Object} value the stored value if available that needs to be formatted for display
   * @return {string} usually a string display value
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _GetDisplayValue : function (value) 
  {
    return this._GetContentElement().val();
  },

  /**
   * Returns an array of all validators built by merging the validators option set on the component 
   * and the default validators setup by the component. <br/>
   * This does not include the default required validator. Components can override to add to this 
   * array of validators.
   * 
   * @return {Array} of validators
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _GetAllValidators : function ()
  {
    if (!this.__allValidators)
    {
      var allValidators = [], validatorsOption = this.options['validators'], validator, 
          isValidatorInstance = true, defaultValidatorMap = this._GetDefaultValidators(), 
          defaultValidators = [], vType, vOptions, vTypeStr, normalizedValidators, i;

      // combine public and internal validators to get the combined list
      for (var val in defaultValidatorMap) 
      {
        if (defaultValidatorMap.hasOwnProperty(val)) 
        {
          defaultValidators.push(defaultValidatorMap[val]);
        }          
      }
      allValidators = allValidators.concat(defaultValidators);
        
      if (validatorsOption)
      {
        normalizedValidators = [];
        // Normalize validators 
        for (i = 0; i < validatorsOption.length; i++)
        {
          validator = validatorsOption[i];
          if (typeof validator === "object") 
          {
            // check if we have an actual validator instance that implements the validate() method
            // oj.Validation.__doImplementsCheck(validator, oj.Validator);
            if (!(validator['validate'] && typeof validator['validate'] === "function"))
            {
              isValidatorInstance = false;
            }
            
            if (!isValidatorInstance)
            {
              // we maybe dealing with an object literal
              // {'type': 'numberRange', 'options': { 'min': 100, 'max': 1000,
              //                                    'hint': {'hintMinimum': 'some hint'}}}
              vTypeStr = validator['type'];
              if (vTypeStr && typeof vTypeStr === "string")
              {
                vType = oj.Validation.validatorFactory(vTypeStr);
                if (vType)
                {
                  vOptions = $.extend({}, validator['options']) || {};
                  // we push converter into the options if not provided explicitly. This is to allow
                  // validators to format values shown in the hint and messages
                  vOptions['converter'] = vOptions['converter'] || this._GetConverter();
                  vOptions['label'] = vOptions['label'] || this._getLabelText();
                  validator = vType.createValidator(vOptions);
                }
                else
                {
                  oj.Logger.error("Unable to locate a validatorFactory for the requested type: " + vTypeStr);
                }
              }
            }
            
            normalizedValidators.push(validator);
          }
          else
          {
            oj.Logger.error("Unable to parse the validator provided:" + validator);
          }
        }

        allValidators = allValidators.concat(normalizedValidators);
      }
      
      this.__allValidators = allValidators;
    }
    
    return this.__allValidators || [];
  },
  
  /**
   * EditableValue caches the validators to be run, within this.__allValidators variable.
   * This is great; however when the default validators need to be reset [i.e. min + max changing] 
   * then the cached this.__allValidators needs to be cleared out. 
   * This method also updates the messaging strategies as hints associated with validators could 
   * have changed.
   * 
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _ResetAllValidators : function () 
  {
    if (this.__allValidators)
    {
      this.__allValidators.length = 0;
    }
    this.__allValidators = null;
    
    // update messagingstrategy as hints associated with validators could have changed
    this._getComponentMessaging().update(this._getMessagingContent(this.__MESSAGING_CONTENT_UPDATE_TYPE.VALIDATOR_HINTS));

  },

  /**
   * Whether the component is required.
   * 
   * @return {boolean} true if required; false
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _IsRequired : function () 
  {
    // by default we check if required attribute is set on the element.
    return this.options['required'] === "required";
  },
            
  
  /**
   * Convenience handler for the DOM 'change' event. Subclasses are expected to wire up event 
   * handlers for DOM events that they wish to handle.<br/>
   * 
   * The implementation retrieves the display value for the component by calling _GetDisplayValue() 
   * and calls _SetValue(), with full validation.
   * 
   * @param {Event} event DOM event 
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _HandleChangeEvent : function (event) 
  {
    var submittedValue = this._GetDisplayValue();
    // run full validation
    this._SetValue(submittedValue, event);
  }, 

  /**
   * Called in response to a change in the options set for this component, this method refreshes the 
   * component display value. Subclasses can override to provide custom refresh behavior.
   * 
   * @param {String=} name the name of the option that was changed
   * @param {Object=} value the current value of the option
   * @param {boolean=} forceDisplayValueRefresh
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _Refresh : function (name, value, forceDisplayValueRefresh)
  {
    switch (name)
    {
      case "converter":
        value = this.options['value'];
        this._refreshComponentDisplayValue(value, forceDisplayValueRefresh);
        // this._updateElementDisplayValue(value);
        break;
         
      case "value":
        this._refreshComponentDisplayValue(value, forceDisplayValueRefresh); 
        //this._updateElementDisplayValue(value);
        break;

      case "required":
        // need to keep the label in sync with the input
        if (this.$label)
        {
          this.$label._ojLabel("option", "required", value);
        }
        break;
        
      case "help":
        // refresh the help - need to keep the label in sync with the input.
        var helpDef = this.options.help["definition"];
        var helpSource = this.options.help["source"];
        var labelHelpIconWrapper = this._ariaDescribedByHelpIconWrapper(helpSource);

        if (this.$label)
        {
          // Calling option this way calls _setOption in _ojLabel.
          // order matters here. When _ojLabel's help is changed, it removes
          // the help dom, then re-adds it. We need to make sure _ojLabel's  
          // describedById option is there so we can find the dom to remove
          // and recreate if needed.
          this.$label._ojLabel("option", "describedById", labelHelpIconWrapper);
          this.$label._ojLabel("option", "help", 
                          {"definition":helpDef, 
                          "source":helpSource});
        }
        break;        
    }
  },
  /**
   * Called when a aria-required attribute needs to be set or removed. 
   * Most inputs/selects need aria-required on the input element (aka 'content')
   * But it is not legal to have aria-required on radio/checkboxes.
   * Subclasses can override to put aria-required where they want.
   * 
   * @param {Object=} value the current value of the required option
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _RefreshAriaRequired : function (value)
  {
    var ariaValue, contentNode = this._GetContentElement();

    ariaValue = (value == "required") ? true : false;
    if (ariaValue && contentNode) 
    {
      contentNode.attr("aria-required", ariaValue);
    }
    else
    {
      contentNode.removeAttr("aria-required");
    }
  },

  /**
   * Called when the display value on the element needs to be updated. This method updates the 
   * (content) element value. Widgets can override this method to update the element appropriately. 
   * 
   * @param {String} displayValue of the new string to be displayed
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
  */  
  _SetDisplayValue : function (displayValue) 
  {
    var contentElem = this._GetContentElement();
    contentElem.val(displayValue);
  },
  
  /**
   * Called when a component needs to write user entered value (UI value) into the component. 
   * Sets the value on the component after clearing all messages.  <br/>
   * 
   * @param {string|Object} newValue the value to be set. Usually this is the string display value
   * @param {Object=} event an optional event if this was a result of ui interaction. For user 
   * initiated actions that trigger a DOM event, passing this event is required. E.g., if user action 
   * causes a 'blur' event. <br/>
   * @param {{validationMode:number}=} options an Object literal that callers pass in to determine 
   * how validation gets run. Keys and values to pass in options are as follows:
   * 'validationMode': {number} Accepted values (defined in _VALIDATION_MODE) are - 
   * <ul>
   *   <li>FULL - the default and runs both the converter and all validators. </li>
   *   <li>VALIDATORS_ONLY - runs all validators including the required validator is run.</li>
   *   <li>REQUIRED_VALIDATOR_ONLY - runs just the required validator. </li>
   * </ul>  
   *   
   * @return {boolean} false if value was not set due to validation error. 
   * @example  <caption>Widget subclasses can use this convention to run full validation</caption>
   * this._SetValue(value, event);
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   * 
   */
  /*
  Scenario 1: _SetValue called with the same UI value; This does nothing and returns false
  Scenario 2: _SetValue called with the different UI value but fails component validation; 
                                      
  (A) Initial State

  --------------------------------------------------------------------------------------------------
  |   |   | UI Value    | Valid     | CompMessages  |  Value      | CustomMessages |  Model Value  |
  --------------------------------------------------------------------------------------------------
  |(A)|   | 'foo'       |  false    |  []           |  'foo'      |     [err]      |  'foo'        |

  |   |   |  (1) 'fred' | (3) true  |  (2) []       | null        |     (2) []     |  'foo'        |
  |   |(3)|  'fred'     | (4) false |  (5) [err]    |             |                |               |

    - (1) UI Value updated to 'fred'; 
    - (2) both messagesComponent amd messagesCustom cleared; optionChange triggered
    - (2) Valid is true because we currently have no messages; 
    - (3) runs full validation; fails some validator
    - (4) valid = false
    - (5) messagesComponent has errors; optionChange triggered
  */
  _SetValue : function (newValue, event, options)
  {
    var mode; //todo: previousValue = this.options['value']
    
    // disallow setting a value of undefined by widgets
    if (newValue === undefined)
    {
      oj.Logger.warn("Attempt to set a value of undefined");
      return false;
    }
    
    if (this._CanSetValue())
    {
      mode = options && options.validationMode ? options.validationMode : this._VALIDATION_MODE.FULL;
      
      // if the display value didn't really change there is no reason to clear messages!!
      if (!(newValue === this._getLastSubmittedValue())) 
      {
        this._clearAllMessages(event);
        this._setLastSubmittedValue(newValue);

        newValue = this._doRunImmediateValidation(newValue, event, mode, 
                                                  this._VALIDATION_CONTEXT.USER_ACTION);
        if (!this.isValid())
        {
          return false;
        }
      }
      else
      {
        if (oj.Logger.level > oj.Logger.LEVEL_WARN)
        {
          oj.Logger.info("Validation skipped and value option not updated as submitted value '" + 
                  (newValue.toString) ? newValue.toString() : newValue + " same as previous.");
        }
        return false;
      }
      
      this._updateValueOption(newValue, event);
      
      /*
      
      // before writing the new value to the option, check if it's same as the current option 
      // value to avoid unnecessary writes to option, observable etc. This means no triggering 
      // a optionChange event, but it may be necessary to refresh the displayValue.
      // TODO: revisit this check
      if (this._ValueEquals(previousValue, newValue))
      {
        this._updateElementDisplayValue(newValue, event);
        if (oj.Logger.level > oj.Logger.LEVEL_WARN)
        {
          oj.Logger.info("The value was not set on the component. It's the same as the current value - " + 
                  (newValue.toString) ? newValue.toString() : newValue);
        }
      }
      else
      {
        this._updateValueOption(newValue, event);
      }
      */
    }
    
    return true;
  },
    
  /**
   * Whether the a value can be set on the component. If the component is 
   * disabled then setting value on component is a no-op. 
   * 
   * @see #_SetValue
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _CanSetValue: function ()
  {
    var disabled = this.options['disabled'] || false;
    
    if (disabled)
    {
      return false;
    }
    
    return true;
  },
  
  /**
   * Called anytime the label DOM changes requiring a reset of any dependent feature that caches the 
   * label, including all validators.
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected   
   */
  _RefreshLabelDependents : function ()
  {
    // for now reset all validators
    this.__defaultReqValOptions = {};
    this._ResetAllValidators();
  },  

  /**
   * Sets the placeholder text on the content element by default. It sets the placeholder attribute
   * on the element. Component subclasses can override this method to control where placeholder text
   * gets set.
   * @param {string} value
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _SetPlaceholder : function(value)
  {
    this._GetContentElement().attr("placeholder", value);
  },
  
  /**
   * Called during _InitOptions, when the option was initialized from DOM. This 
   * method tracks all these options. In _AfterCreate() each option is written back.
   * 
   * @param {String} option name of the option
   * @param {Object|number|string|boolean|undefined} previousValue
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _InitializedOptionFromDom : function (option, previousValue) 
  {
    this._optionsInitializedFromDom.push({"option": option, "previousValue": previousValue});
  },
  
  /**
   * Triggers a 'optionChange' event on the component. The options that trigger this event are 
   * 'value' and 'messagesCustom', 'messagesComponent'.
   *  
   * @param {string} option name of the option that changed
   * @param {string|number|Object} previousValue an array of the previous 
   * @param {boolean=} shouldWriteback when set to true writeback happens.
   * @param {Event=} originalEvent 
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
   _TriggerOptionChange : function (option, previousValue, shouldWriteback, originalEvent)
   {
     oj.Assert.assertNonEmptyString(option, "");
     
     var writebackVal = (shouldWriteback || false) ? {'writeback': 'shouldWrite'} : 
             {'writeback': 'shouldNotWrite'},
      dataHash = {
       'option': option,
       'component': oj.Components.getWidgetConstructor(this.element),
       'previousValue': previousValue, 
       'value' : this.options[option],
       'optionMetadata': writebackVal};

     switch(option)
     {
       case 'messagesComponent':
       case 'messagesCustom':
         
        this._trigger('optionChange', originalEvent || null, dataHash);
        // not preventing default behavior. So show messages
        this._getComponentMessaging().update(this._getMessagingContent());
        break;
        
      case 'value':
        // users can't cancel the value change event as the event is triggered after the value changes
        this._trigger('optionChange', originalEvent || null, dataHash);
        break;
        
      default:
        break;
     }
     
   },

  /**
   * Compares 2 values for equality and returns true if they are equal; false otherwise. Calls 
   * oj.Object.compareValues() which works for most Javascript data types.
   * 
   * @param {Object|string|undefined} value1 first value
   * @param {Object|string|undefined} value2 another value
   * @return {boolean}
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _ValueEquals : function (value1, value2)
  {
    return oj.Object.compareValues(value1, value2);
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
   * 
   * @memberof! oj.editableValue
   * @instance
   * @protected
   */
  _GetDefaultStyleClass : function ()
  {
    return "oj-editablevalue";
  },
    
  
  // I N T E R N A L   P R I V A T E   C O N S T A N T S    A N D   M E T H O D S 
  // Subclasses should not override or call these methods
  
  /**
   * Types of messaging content to update.
   * <ul>
   * <li>'ALL' - builds all messaging content</li>
   * <li>'VALIDITY_STATE' - updates only validityState every time validation runs and there are 
   * new messages or when the messages option changes.</li>
   * <li>'CONVERTER_HINT' - updates only converter hints, this is used when converter option 
   * changes</li>
   * <li>'VALIDATOR_HINTS' - updates only validator hints, this is used when validators option 
   * changes</li>
   * <li>'TITLE' - updates only title, when the title property changes</li>
   * </ul>
   * @private
   */
  __MESSAGING_CONTENT_UPDATE_TYPE : {ALL : 1, 
                                     VALIDITY_STATE : 2, 
                                     CONVERTER_HINT : 3, 
                                     VALIDATOR_HINTS : 4, 
                                     TITLE : 5},
                                   
  /**
   * when below listed options are passed to the component, corresponding CSS will be toggled
   * @private
   * @const
   * @type {Object}
   * @memberof! oj.editableValue
   */
  _OPTION_TO_CSS_MAPPING: {
    "disabled": "oj-disabled",
    "required": "oj-required"
  },
  
  /**
   * The various contexts validation can be run in by the component. 
   * <ul>
   * <li>COMPONENT_CREATE - when component is created and we run validators. usually messages are 
   * not displayed right away, i.e, are 'deferred'. </li>
   * <li>VALUE_OPTION_CHANGE - when component's value is updated programmatically. messages are  
   * deferred.</li>
   * <li>REQUIRED_OPTION_CHANGE - when component's required option is updated programmatically. messages are
   * deferred.</li>
   * <li>USER_ACTION - when component runs validation as a result of user interating with component.
   * messages are displayed immediately.</li>
   * <li>COMPONENT_VALIDATE - when component's validate() method is called explicitly. messages are 
   * displayed immediately.</li>
   * </ul>
   * 
   * @private
   * @const
   * @type {Object}
   * @memberof! oj.editableValue
   * 
   */
  _VALIDATION_CONTEXT : {
    COMPONENT_CREATE : 1,
    VALUE_OPTION_CHANGE: 2,
    REQUIRED_OPTION_CHANGE : 3,
    USER_ACTION: 4,
    COMPONENT_VALIDATE: 5
  },
    

  /**
   * Clears all messages for this component. Today this only happens when <br/>
   *  - the component's value changes as a result of user interaction, <br/>
   *  - the reset method is called, <br/>
   *  - component is destroyed.<br/>
   * 
   * @param {Event=} event
   * @param {boolean=} doNotSetOption default value is false; a true value clears the option 
   * directly without using the public option method, causing no events to be fired. 
   * @private
   * @memberof! oj.editableValue
   * @instance
   */
  _clearAllMessages : function(event, doNotSetOption)
  {
    doNotSetOption = doNotSetOption ? true : false;
    if (!doNotSetOption)
    {
      this._clearComponentMessages(event);
      this._clearCustomMessages(event);
    }
    else
    {
      this._messagesComponent = [];
      this.options['messagesComponent'] = [];
      this.options['messagesCustom'] = [];
    }
  },
  
  /**
   * Generally 'messageComponent' option property is changed directly, without invoking the option() 
   * method.
   * 
   * @param {Event=} event
   * 
   * @private
   * @memberof! oj.editableValue
   * @instance
   */
  _clearComponentMessages : function (event)
  {
    var flags = {};
    
    if (event)
    {  
      flags['_oj_originalEvent'] = event;
    }
    flags['changed'] = !this._messagesEquals(this._messagesComponent, []);
    this._messagesComponent = [];
    this.options['messagesComponent'] = [];

    // option has mutated. Set changed flag to always trigger optionChange. 
    this._messagesComponentOptionChanged(this.options['messagesComponent'], flags);
  },
  
  /**
   * Clears 'messageCustom' option when the following occurs - <br/>
   * - when user value changes <br/>
   * - when reset is called <br/>
   * - when component is destroyed <br/>
   * 
   * @param {Event=} event
   * 
   * @private
   * @memberof! oj.editableValue
   * @instance
   */  
  _clearCustomMessages : function (event)
  {
    var msgsHash = {}, flags = {};
    msgsHash['messagesCustom'] = [];
    if (event)
    {  
      flags['_oj_originalEvent'] = event;
    }
    this.option(msgsHash, flags);
  },  
  
  // called when 'converter' option changed, usually from option/setOption calls
  _converterOptionChanged : function ()
  {
    // When the converter changes clear the cached converter instance.
    this.__converter = null;

    // also update messagingstrategy as hint associated with converter could have changed
    this._getComponentMessaging().update(
            this._getMessagingContent(this.__MESSAGING_CONTENT_UPDATE_TYPE.CONVERTER_HINT));
  },

  
  /** 
   * Create the _ojLabel component
   * @private
   * @memberof! oj.editableValue
   * @instance
   * 
   */
  _createOjLabel : function ()
  {
    this.$label = this._GetLabelElement();
    if (this.$label)
    {
      var helpDef = this.options['help']['definition'];
      var helpSource = this.options['help']['source'];

      var labelHelpIconWrapper = this._ariaDescribedByHelpIconWrapper(helpSource);
      // create the ojLabel component 
      this.$label._ojLabel(
    //   {inputLabelStyleClass: this._GetDefaultStyleClass()+"-label",
        {rootAttributes:{'class': this._GetDefaultStyleClass()+"-label"},
        describedById: labelHelpIconWrapper, 
        required:this.options['required'], 
        help:{'definition': helpDef, 'source': helpSource}});

    }    
  },

  /**
   * For values that were initialized from DOM, trigger optionChange to ensure writebacks.
   * @private 
   * @memberof! oj.editableValue
   * @instance
   * 
   */
  _doAfterCreateOptionChanges : function ()
  {
    var self = this;
    $.each(this._optionsInitializedFromDom, function(index, item) 
    {
      // the option has already mutated. 
      self._TriggerOptionChange(item["option"], item['previousValue'], true /* shouldWriteback*/); 
    });
    
    this._optionsInitializedFromDom = null;
  },
  
  /**
   * Perform any validation as a last step after component is created. Typically deferred validators 
   * are run here. If there is a validation failure, the 
   * <code class="prettyprint">messagesComponent</code> option is updated.
   * 
   * @private
   * @memberof! oj.editableValue
   * @instance
   */
  
  /*
  Scenario 1: Model Value is empty; 
  (A) Page author initializes component and Initial State when this method is called;

  --------------------------------------------------------------------------------------------------
  |   |   | UI Value    | Valid     | CompMessages  |  Value      | CustomMessages |  Model Value  |
  --------------------------------------------------------------------------------------------------
  |(A)|   |             |           |  []           | null        |     []         |  null         |

  |   |   |  (1) ''     | (2) true  |  []           | null        |     []         |  null         |
  |   |(3)|  ''         | (4) false |  (5) [err]    |             |                |               |

    - (1) UI Value updated to ''; 
    - (2) Valid is true because we currently have no messages; CompMessages is empty
    - (3) runs deferred validation; fails deferred (required) validation 
    - (4) valid = false
    - (5) CompMessages has errors

  Scenario 2: Model Value is non-empty; 
  Is the same as above except for the last line below.
  (A) Page author initializes component and Initial State when this method is called;

  --------------------------------------------------------------------------------------------------
  |   |   | UI Value    | Valid     | CompMessages  |  Value      | CustomMessages |  Model Value  |
  --------------------------------------------------------------------------------------------------
  |(A)|   |             |           |  []           | null        |     []         |  null         |

  |   |   |  (1) ''     | (2) true  |  []           | null        |     []         |  null         |
  |   |(3)|  ''         | (4) true  |  (5) []       |             |                |               |

    - (3) runs deferred validation; passes deferred (required) validation 
    - (4) valid = true
    - (5) CompMessages has no errors

  Scenario 3: Component can be initialized with custom errors; If invalid messages are present it 
  affects Valid.
  */
  _doAfterCreateValidation : function () 
  {
    var validationMsg = this._runDeferredValidators(this._VALIDATION_CONTEXT.COMPONENT_CREATE);
    if (validationMsg)
    {
      // TODO:  we pass no event; we don't care to writeback. Or should we?
      this._updateComponentMessagesOption(validationMsg); 
    }
    else
    {
      // TODO: Revisit  
      // even though messagesComponent hasn't mutated, trigger optionChange so 
      // invalidComponentTracker can track this component. ComponentBinding.setupManagedAttributes() 
      // does not yet support a AfterCreate callback; if it did, that can be used to populate 
      // invalidComponentTracker. Also no writeback necessary.
      this._messagesComponentOptionChanged(this.options['messagesComponent'], {'changed': true});
    }
    
    // trigger optionChange for messagesCustom so invalidComponentTracker can track this component, 
    // but no writeback necessary
    this._messagesCustomOptionChanged(this.options['messagesCustom'], {'changed': true});
  },
  
  /**
   * Runs  deferred validation for certain option changes - value, required etc.
   * 
   * @param {string} option
   * @param {Object=} flags 
   * @returns {undefined}
   * @private
   * @memberof! oj.editableValue
   * @instance
   */
  _doSetOptionValidation : function (option, flags)
  {
    var valMsg, isUIValueChange = false;
    switch (option)
    {
      case 'value':
      
        // Run deferred validation only when value option was updated programmatically 
        if (flags)
        {
          // _oj_originalEvent specifies the dom event that triggered the change
          isUIValueChange = flags['_oj_originalEvent'] ? true : false;
        }

        if (!isUIValueChange)
        {
          this._clearComponentMessages(null);

          valMsg = this._runDeferredValidators(this._VALIDATION_CONTEXT.VALUE_OPTION_CHANGE);
          if (valMsg)
          {
            // TODO:  we pass no event; we don't care to writeback. Should we?
            this._updateComponentMessagesOption(valMsg); 
          }
        }
        break;
      
      case "required":
        this._clearComponentMessages(null);

        // Run deferred validation only when required is true. required option never changes as a 
        // result of user/dom event
        if (this._IsRequired())
        {
          valMsg = this._runDeferredValidators(this._VALIDATION_CONTEXT.REQUIRED_OPTION_CHANGE);
        }
        break;
        
      case "validators":
        // TODO
        // should we run deferred validation? There is really no reason to, since the only time all 
        // validators get run is during user interaction and validate()
        break;
    }  
  },
  
  /**
   * Refreshes the component to respond to DOM changes, in which case fullRefresh=true. This 
   * internal method is also called when the component's theme or accessibility attributes need to 
   * be refreshed.
   * @param {boolean} fullRefresh true if a full refresh of the component is desired.
   * @private
   * @memberof! oj.editableValue
   * @instance
   */
  _doRefresh : function (fullRefresh)
  {
    // we decided not to clear messages on refresh because the user intends to refresh the component 
    // using the latest DOM and latest option values. Page Authors will need to clear messages and 
    // generally ensure component state is accurate and as expected before calling refresh().
    
    fullRefresh = fullRefresh || false;
    if (fullRefresh)
    {
      // the DOM for the label and its text could have changed. 
      if (this.$label)
      {
        this.$label._ojLabel("refresh");
      }
      
      // also clear out anything that relies on the label 
      this._RefreshLabelDependents();
      
      // re-initialize component messaging, since refresh() can be called when the locale 
      // changes, requiring component to show messaging artifacts for current locale. 
      // E.g., hints, placeholder, are all retrieved for the current locale. Typically when 
      // switching locales user should have cleared messages.
      this._initComponentMessaging();
    }
        
    this._Refresh("value", this.options['value']);
    this._refreshAria("required", this.options.required);
    this._refreshTheming("required", this.options.required);
    this._refreshTheming("disabled", this.options.disabled);
  },

  
  /**
   * Runs validators in deferred mode. In certain contexts, validators marked as 'deferred' (1) are 
   * run (2) but displaying error messages is deferred until later. <br/>
   * NOTE (1): Today only required is marked as 'deferred' validator <br/>
   * NOTE (2): The deferred validators are run against the current value. 
   * 
   * @param {number} context the context in which validation is run. 
   * @param {Event=} event the original event or undefined
   * @return {Object|string} parsed value 
   * @throws {Object} Usually the oj.ComponentMessage or an instance of oj.Message when there was a 
   * validation failure. 
   * @private
   * @memberof! oj.editableValue
   * @instance
   */
  _doRunDeferredValidation : function (context, event) 
  {
    var value = this.options['value'], newMsg;

    try
    {
      // TODO: Today required is the only validator that runs deferred. We need a generic way to 
      // retrieve deferred validators. 
      this._validateValue(value, this._VALIDATION_MODE.REQUIRED_VALIDATOR_ONLY);
    }
    catch (ve)
    {
      newMsg = this._processValidationError(ve, event, context);
      // Defer updating messages option as the caller might want to update later
      throw (newMsg);
    }
    
    return value;
  },
  
  /**
   * Runs validation based on the mode settings. 
   * @param {Object} value to parse and/or validate
   * @param {Event=} event the original event or undefined
   * @param {number=} mode determines how validation is run. see _VALIDATION_MODE
   * @param {number=} context determines when validation is being run.
   * 
   * @return {Object|string} parsed value 
   * 
   * @private
   * @memberof! oj.editableValue
   * @instance
   */
  _doRunImmediateValidation : function (value, event, mode, context) 
  {
    var newValue = value, newMsg;

    // callers of this function should clear messages 
    try
    {
      // Step 1: only when "full" validation is requested converters get run
      if (mode === this._VALIDATION_MODE.FULL)
      {
        // Step1: Parse value using converter
        newValue = this._parseValue(value);
      }

      // Step 2: Run validators
      this._validateValue(newValue, mode === this._VALIDATION_MODE.REQUIRED_VALIDATOR_ONLY);
    }
    catch (ve)
    {
      newMsg = this._processValidationError(ve, event, context);
      // update messages option so validation errors get reported immediately
      this._updateComponentMessagesOption (newMsg, event);
    }
    
    return newValue;
  },
  
  /**
   * Gets the last stored model value
   * 
   * @private
   * @memberof! oj.editableValue
   * @instance
   */
  _getLastModelValue : function ()
  {
    return this.__oj_lastModelValue;
  },
          
  _getLastSubmittedValue : function () 
  {
    return this.__oj_lastElementValue;
  },
  /**
   * Get the element whose id matches the elem's aria-labelledby value, if any.
   * @param {Object} elem the dom element from which you want to get the 
   * aria-labelledby property value
   * @return {Object} if element does not have aria-labelledby defined, then
   *    returns null. If it  does, then return a new jQuery object with the 
   *    label with an id equal to the aria-labelledby value. If no match, then
   *    the jQuery object will be empty.
   *    
   * @private
   * @memberof! oj.editableValue
   * @instance
   */
  _getAriaLabelledByElement: function (elem)
  {
    // look for a label with an id equal to the value of aria-labelledby. 
    // .prop does not work for aria-labelledby. Need to use .attr to find
    // aria-labelledby.
    var ariaId = elem.attr("aria-labelledby");

    if (ariaId !== undefined )
    {
      var labelQuery = "label[id='" + ariaId + "']"; 
      return $(labelQuery);
    }    
    else
      return null;
  },

  /**  
   * If there is help source (an external URL), then construct an
   * id from the element's id, render aria-describedby with this id, and then
   * return the id to be used by the ojLabel.
   * 
   * For accessibility, we need to wrap help icons with a div. 
   * Then, on the input component we use aria-describedby to point to this div.
   * &lt;div id="fooIcons"&gt;
   *   &lt;span class="oj-label-help-icon oj-component-icon oj-clickable-icon"&gt;
   *   /&lt;span/&gt;
   * /&lt;div/&gt;
   * &lt;input aria-describedby="fooIcons" id="foo" type="text"/&gt;
   *    
   * This function constructs an id to put on the help icon div and returns it.
   * It also adds the aria-describedby on the input.
   * 
   * We render the help icon only if there is help source.
   * 
   * @return {string} an id we constructed
   * @param {string} helpSource helpSource must be present
   * for the aria-describedby to be rendered.
   * @private
   * @memberof! oj.editableValue
   * @instance
   * 
   */
  _ariaDescribedByHelpIconWrapper : function (helpSource)
  {
    // generate a unique id if one does not exist, then get the id and use it to 
    // create an id that will be set on the label help icon wrapper
    this.element.uniqueId();
    var id = this.element.prop("id");
    var labelHelpIconWrapperId = id + "Icons";
    if (helpSource)
    {  
      var contentElements = this._GetContentElement();        

      // aria-describedby can be a list of ids, so make sure to append
      //contentElements.attr("aria-describedby", labelHelpIconWrapperId);
      contentElements.each(function() {
        var ariaDescBy = $(this).attr("aria-describedby");
        if (ariaDescBy)
          $(this).attr("aria-describedby", ariaDescBy + ' ' + labelHelpIconWrapperId);
        else
          $(this).attr("aria-describedby", labelHelpIconWrapperId);
     });
    }
    return labelHelpIconWrapperId;  
  },
  
  /**
   * This method is different from getMessages() wherein the latter merges 'messagesComponent' 
   * option instead, a clone of the internal _messagesComponent, with the 'messagesCustom' option.
   * 
   * @returns {Array}
   * @private
   * @memberof! oj.editableValue
   * @instance
   */
  _getMessages : function()
  {
    return this.options['messagesCustom'].concat(this._messagesComponent);
  },
  
  // helper method to retrieve the label text.          
  _getLabelText : function ()
  {
    if (this.$label)
    {
      return this.$label.text();
    }
  },

  _getValidityState : function ()
  {
    var allMsgs = [];
    if (this.__validityState)
    {
      return this.__validityState;
    }
    else
    {
      
      this.__validityState = new oj.ComponentValidity(this.isValid(), this._getMessages());
    }
    return this.__validityState;
  },

  
  /**        
   * Whether component has invalid messages.
   * 
   * @return {boolean} true if invalid; false otherwise
   * @private
   * @memberof! oj.editableValue
   * @instance
   */
  _hasInvalidMessages : function ()
  {
    var allMsgs = this._getMessages(), 
        maxLevel = oj.Message.getMaxSeverity(allMsgs);
    if (maxLevel >= oj.Message.SEVERITY_LEVEL['ERROR'])
    {
      return true;
    }
    
    return false;
  },
  
  /**
   * Initializes component messaging both when component is initialized or when 
   * messagingDisplayOptions is set/changed. 
   * 
   * @private
   * @memberof! oj.editableValue
   * @instance
   */
  _initComponentMessaging : function()
  {
    var compMessaging = this._getComponentMessaging(), 
            messagingLauncher = this._GetMessagingLauncherElement(), 
            messagingContent = this._getMessagingContent(this.__MESSAGING_CONTENT_UPDATE_TYPE.ALL);
    
    // if default placeholder is currently set then it needs to be cleared here. This is needed for 
    // the following reasons
    // i. a component is reinitialized when the locale changed, requiring the converter hint for 
    // new locale to be set as placeholder.
    // ii. or a component's placeholder option or messagingDisplayOptions option, could have changed 
    // requiring the placeholder to be reset if it's currently set to the default.
    // 
    if (!this.__customPlaceholderSet)
    {
      this.options['placeholder'] = "";
    }
    
    compMessaging.activate(messagingLauncher, messagingContent);
  },
  
  _messagesComponentOptionChanged : function (previous, flags)
  {
    this._messagesChanged("messagesComponent", previous, flags);
  },
  
  _messagesCustomOptionChanged : function (previous, flags)
  {
    this._messagesChanged("messagesCustom", previous, flags);
  },
  
  /**
   * Called after the messages option has changed. Only in rare cases is previous different from the 
   * current value.
   * @param {string} option name 
   * @param {Array} previous the previous messages array
   * @param {Object=} flags 
   * @returns {undefined}
   * @private
   */
  _messagesChanged : function(option, previous, flags) 
  {
    var shouldTriggerOptionChange = false, msgs = this.options[option], shouldWriteback = false, 
            originalEvent;
        
    if (flags)
    {
      // 'changed' set to true when ko knows the option changed, or component changes the option
      shouldTriggerOptionChange = flags['changed'] || false;
      // _oj_originalEvent specifies the dom event that triggered the change
      originalEvent = flags['_oj_originalEvent'] || null;
      shouldWriteback = originalEvent ? true : false;
    }
    
    // update the valid flag
    this._updateValid();
    
    // update component messaging
    this._getComponentMessaging().update(this._getMessagingContent());

    // trigger optionChange if we are skipping comparison or when messages are different
    if (shouldTriggerOptionChange || !this._messagesEquals(previous, msgs))
    {
      this._TriggerOptionChange(option, previous, shouldWriteback, originalEvent);
    }
  },
  
  _placeholderOptionChanged : function (flags)
  {
    var refreshMessagingOptions = 
          //  _oj_messaging_update indicates whether the current change is from the messaging module.
          // see ComponentMessaging for details
          flags && flags['_oj_messaging_update'] ? false : true,
                  value = this.options['placeholder'];

    this._SetPlaceholder(value);
    if (refreshMessagingOptions)
    {
      // if placeholder was set and it's not from messaging code, then the messaging preferences 
      // will need to re-evaluated. E.g., the default display for 
      // converterHint: ['placeholder', 'notewindow'] is 'placeholder', and if user were to set a 
      // custom placeholder, this overrides the default display for convererHint from 'placeholder'
      // to 'notewindow'. 
      this.__customPlaceholderSet = true;
      this._initComponentMessaging();
    }
    else
    {
      this.__customPlaceholderSet = false;
    }
  },
    
    
  _setLastModelValue : function (value)
  {
    this.__oj_lastModelValue = value;
  },

  _setLastSubmittedValue : function (value) 
  {
    this.__oj_lastElementValue = value;
  },

  
  /**
   * Adds a message to the <code class="prettyprint">messagesComponent</code> option. This method 
   * does not call the option() method. It updates the option property directly and trigger 
   * optionChange.
   * 
   * @param {Object} message a Message object. 
   * @param {Event=} event
   * @private
   * @memberof! oj.editableValue
   * @instance
   */
  _updateComponentMessagesOption : function(message, event) 
  {
    var flags = {};
    oj.Assert.assertPrototype(message, oj.Message);
    
    if (message) 
    {
      this._messagesComponent.push(message);
      this.options['messagesComponent'].push(message.clone());
      flags['changed'] = true;
    }
    
    if (event)
    {  
      flags['_oj_originalEvent'] = event;
    }
    
    // trigger an optionChange and update component messaging
    this._messagesComponentOptionChanged(this.options['messagesComponent'], flags);
  },
       
  _updateValueOption : function (newValue, event)
  {
    var values = {}, flags = {};
    values['value'] = newValue;
    if (event)
    {  
      flags['_oj_originalEvent'] = event;
    }

    this.option(values, flags);
  },

  
  /**
   * Update valid flag based on current value of the messages option.
   * 
   * @private
   * @memberof! oj.editableValue
   * @instance
   */
  _updateValid : function ()
  {
    var msgs = this._getMessages(), hasMessages;
    // When new messages are written update valid
    hasMessages = msgs && msgs.length !== 0;
    this.__valid = true;
    if (hasMessages)
    {
      this.__valid = !this._hasInvalidMessages();
    }
  },
  
  /*
   * Called after value option has changed, from option/_setOption() methods. The value option 
   * changes only in the following cases: <br/>
   * 
   * - programmatic updates using component option() method (called directly or from binding)<br/>
   * - user updates as a result of UI interaction
   * @private
   * @instance
   * @memberof! oj.editableValue
   */ 

  // value option can change in the following ways.
  /*
  Scenario 1: UI Value is set in Model but returns with Custom Errors;

  (A) Initial State
  (B) Page author sets 'messagesCustom' because there are app errors

  --------------------------------------------------------------------------------------------------
  |   |   | UI Value    | Valid     | CompMessages  |  Value      | CustomMessages |  Model Value  |
  --------------------------------------------------------------------------------------------------
  |(A)|   |  'bar'      | false     |  []           | 'bar'       |     []         |  'bar'        |

  |(B)|   |  'bar'      | (2) false |  []           | 'bar'       |     (1) [err]  |  'bar'       |

  (B) - _setOption('messagesCustom', [err]) called;
    - (1) adds custom messages; triggers optionChange 
    - (2) valid = false
  
  Scenario 2: App programmatically sets new 'value'; And clears 'messagesCustom' (app errors)

  (A) Initial State
  (B) Page author clears custom (app) errors before setting the new value
  (C) Page author sets new model value; 

  --------------------------------------------------------------------------------------------------
  |   |   | UI Value    | Valid     | CompMessages  |  Value      | CustomMessages |  Model Value  |
  --------------------------------------------------------------------------------------------------
  |(A)|   |  'bar'      | false     |  []           | 'bar'       |     [err]      |  'bar'        |

  |(B)|   |  'bar'      | (2) true  |  []           | 'bar'       |     (1) []     |  'lucy'       |
  |(C)|   |  (4) 'lucy' | true      |  []           | (3) 'lucy'  |                |  'lucy'       |
  |   |(5)|  'lucy'     | (7) true  |  (6) []       |             |                |               |
  // or                                                  
  |   |(5)|  'lucy'     | (8) false |  (9) [err]    |             |                |               |

  (B) - _setOption('messagesCustom', []) called;
    - (1) messagesCustom cleared; triggers optionChange 
    - (2) valid = true
  (C) - _setOption('value', 'lucy') called;
      - (3) value changed; 
      - (4) display value updated
      - (5) deferred validation run; 
      - (6) messagesComponent cleared 
      - (7) valid = true
      - (8) if there are errors CompMessages will be [err] and Valid=false
      - (9) if there are no errors things stay the same as step (7)
  
  NOTE: When there are no app errors page author has to do nothing; just set the new value and the 
  rest will be taken care of

  Scenario 3: App Programmatically sets same value in order to reset; But UI Value is different and 
  has component errors.
                                            
  (A) Initial. user entered 'bar' and component is showing error
  (B) Page author wants to reset UI value by setting model value 'foo' again

  --------------------------------------------------------------------------------------------------
  |   |   | UI Value    | Valid     | CompMessages  |  Value      | CustomMessages |  Model Value  |
  --------------------------------------------------------------------------------------------------
  |(A)|   |  'bar'      | false     |  [err]        | 'foo'       |     []         |  'foo'        |

  |(B)|   |  (2) 'foo'  | false     |  [err]        | (1) 'foo'   |     []         |  'foo'        |
  |   |(3)|             | (5) true  |  (4) []       |             |                |               |

  (B) - ojComp('option', 'value', 'foo') needs to be called on component directly when the model 
          value is a primitive; or the value can be updated on observable but obs.valueHasMutated() 
          may need to be called.
    - (1) value option updated. 
    - (2) displayValue updated to 'foo'
    - (3) deferred validation run;
    - (4) messagesComponent cleared 
    - (5) valid = true
  // NOTE: Alternately author can call reset();
  */
  _valueOptionChanged : function (previous, flags)
  {
    var newValue = this.options['value'], shouldTriggerOptionChange = false, 
            shouldWriteback = false, originalEvent;
    
    if (flags)
    {
      // 'changed' set to true when Knockout already knows that the option values changed. 
      // in such cases skip comparing values.
      shouldTriggerOptionChange = flags['changed'] || false;
      // _oj_originalEvent specifies the dom event that triggered the change
      originalEvent = flags['_oj_originalEvent'] || null;
      shouldWriteback = flags['_oj_originalEvent'] ? true : false;
    }
    
    // we trigger a optionChange event when value is different from previous, except
    // when explicitly asked to skip comparing values (1).
    // 
    // (1) 'changed' flag tells us the value has changed, don't bother comparing values. This is 
    // the case when ko observalue mutates or option is mutated directly.
    if (shouldTriggerOptionChange || !this._ValueEquals(previous, newValue))
    {
      this._TriggerOptionChange('value', previous, shouldWriteback, originalEvent);
    }
  },
         
  
  /**
   * Formats the value for display, based on the converter options. If no converter is set then 
   * returns the value as is.
   * 
   * @param {string} value value to be formatted
   * 
   * @return {string} formatted value
   * @throws {Error} when an error occurs during formatting
   * @private
   * @memberof! oj.editableValue
   * @instance
   */
  _formatValue : function (value)
  {
    var formattedValue = value, converter = this._GetConverter();
    
    // don't clear messages here because we clear messages only when direct user interaction with 
    // component changes value. All other usecases we expect page authors to clear messages.

    if (converter)
    {
      // TODO: We should support chaining converters but for now we use just the first converter 
      // to parse.

      // Check if we have a converter instance
      if (typeof converter === "object") 
      {
        if (converter['format'] && typeof converter['format'] === "function")
        {
          formattedValue = converter['format'](value);
        }
        else
        {
          if (oj.Logger.level > oj.Logger.LEVEL_WARN)
          {
            oj.Logger.info("converter does not support the format method.");
          }
        }
      }
    }
    
    return formattedValue;
  },
  
  /**
   * @private
   * @memberof! oj.editableValue
   * @instance
   */
  _getComponentMessaging : function ()
  {
    if (!this.__componentMessaging)
    {
      this.__componentMessaging = new oj.ComponentMessaging(this);
    }
    
    return this.__componentMessaging;
  },
  
  /**
   * Returns the required validator instance or creates it if needed and caches it.
   * 
   * @private
   * @memberof! oj.editableValue
   * @instance
   */
  _getDefaultRequiredValidator : function ()
  {
    var vf;
    
    // TODO: Should we cache the same instance of required validator for all components?
    this.__defaultReqValOptions = {'label': this._getLabelText()};    
    vf = oj.Validation.validatorFactory(oj.ValidatorFactory.VALIDATOR_TYPE_REQUIRED);
    return vf ? vf.createValidator(this.__defaultReqValOptions) : null;
  },

  /**
   * Returns an array of validator hints.
   * @param {Array} allValidators
   * @private
   * @memberof! oj.editableValue
   * @instance
   */        
  _getHintsForAllValidators : function(allValidators)
  {
    var validator, validatorHints = [], vHint = "", i;
    if (this._IsRequired())
    {
      validator = this._hasRequiredInValidators(allValidators);
      if (!validator)
      {
        // get the hint for the default required validator and push into array if it's not already 
        // present in the validators array
        validator = this._getDefaultRequiredValidator();
        if (validator['getHint'] && typeof validator['getHint'] === "function")
        {
          vHint = validator['getHint']();
          if (vHint)
          {
            validatorHints.push(vHint);
          }
        }
      }
    }

    // loop through all remaining validators
    for (i = 0; i < allValidators.length; i++)
    {
      validator = allValidators[i], vHint = "";
      if (typeof validator === "object") 
      {
        if (validator['getHint'] && typeof validator['getHint'] === "function")
        {
          vHint = validator['getHint']();
          if (vHint)
          {
            validatorHints.push(vHint);
          }
        }
      }
    }

    return validatorHints;
  },
  
  /**
   * Returns content that will be used by messaging strategies.
   * 
   * @param {number} updateType of messaging content to update. Accepted values are defined by 
   * this.__MESSAGING_CONTENT_UPDATE_TYPE.
   * 
   * @private
   * @memberof! oj.editableValue
   * @instance
   */
  _getMessagingContent : function (updateType)
  {
    var messagingContent = {}, converter = this._GetConverter(), converterHint, allValidators, 
            validatorHints = [], messages;
    updateType = updateType || this.__MESSAGING_CONTENT_UPDATE_TYPE.VALIDITY_STATE;
    
    // Add validityState which includes messages, valid and severity
    if (updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.ALL || 
        updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.VALIDITY_STATE)
    {
      messages = this._getMessages();
      
      // update validityState before packaging it
      this._getValidityState().update(this.isValid(), messages);
      messagingContent['validityState'] = this._getValidityState();
    }
    
    if (updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.ALL || 
        updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.CONVERTER_HINT)
    {
      if (converter)
      {
        if (typeof converter === "object") 
        {
          if (converter['getHint'] && typeof converter['getHint'] === "function")
          {
            converterHint = converter['getHint']() || "";
            messagingContent['converterHint'] = converterHint;
          }
        }
      }
    }
    
    if (updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.ALL || 
        updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.VALIDATOR_HINTS)
    {
      allValidators = this._GetAllValidators();
      validatorHints = this._getHintsForAllValidators(allValidators) || [];
      messagingContent['validatorHint'] = validatorHints;
    }
    
    if (updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.ALL || 
        updateType === this.__MESSAGING_CONTENT_UPDATE_TYPE.TITLE)
    {
      messagingContent['title'] = this.options['title'] || "";
    }
    
    return messagingContent;
  },
          
  /**
   * Checks if a required validator is set explicitly on the validators array and return it.
   * @param {Array} allValidators
   * @return {Object|null} required validator instance
   * @private
   * @memberof! oj.editableValue
   * @instance
   */
  _hasRequiredInValidators : function (allValidators)
  {
    var validator = null, i, required = null;
    for (i = 0; i < allValidators.length; i++)
    {
      validator = allValidators[i];
      if (validator instanceof oj.RequiredValidator)
      {
        required = validator;
        break;
      }
    }

    return required;
  },
  
  /**
   * Compares the messages arrays for equality.
   * 
   * @param {Array} pm previous messages
   * @param {Array} m new messages
   * @returns {boolean} true if equal false otherwise
   * @private
   * @memberof! oj.editableValue
   * @instance
   * 
   */
  _messagesEquals : function (pm, m)
  {
    var match = -1, pmo, passed = true, previousMsgs = $.extend([], pm), msgs = $.extend([], m);
    if (previousMsgs === msgs) return true;
    if (previousMsgs == null || msgs == null) 
    {
      return false;
    }
    if (previousMsgs.length !== msgs.length)
    {
      return false;
    }
    
    $.each(previousMsgs, function (i, pMsg) 
    {
      if (!(pMsg instanceof oj.Message))
      {
        // oj.Messge has equals()
        pmo = new oj.Message(pMsg['summary'], pMsg['detail'], pMsg['severity']);
      }
      else
      {
        pmo = pMsg;
      }
      match = -1;
      $.each(msgs, function(j, msg) {
        {
          if (pmo.equals(msg))
          {
            match = j;
            return; // found a match, so break out of loop
          }
        }
      });
      
      // remove entry at 'match' index from msgs
      if (match > -1)
      {
        msgs.splice(match, 1);
      }
      else
      {
        // we found no match so no need to loop
        passed = false;
        return;
      }
    });
    
    return passed;
  },
  
  /**
   * Parses the value using the converter set and returns the parsed value. If parsing fails the 
   * error is written into the element 
   * 
   * @param {string=} submittedValue to parse
   * @return {Object} parsed value 
   * @throws {Error} an Object with message
   * @private
   * @memberof! oj.editableValue
   * @instance
   */
  _parseValue: function(submittedValue) 
  {
    var converter = this._GetConverter(), parsedValue = submittedValue;
    
    if (converter)
    {
      // TODO: We should support chaining converters but for now we use just the first converter 
      // to parse.

      if (typeof converter === "object") 
      {
        if (converter['parse'] && typeof converter['parse'] === "function")
        {
          // we are dealing with a converter instance
          parsedValue = converter['parse'](submittedValue);
        }
        else
        {
          if (oj.Logger.level > oj.Logger.LEVEL_WARN)
          {
            oj.Logger.info("converter does not support the parse method.");
          }
        }
      }
    }
    
    return parsedValue;
  },

  /**
   * Processes the validation exception and updates the element.
   * 
   * @param {Error} e instance of Error
   * @param {Event=} event the original event that triggered the validation.
   * @param {number=} context the context in which the validation error was thrown
   * @private
   * @memberof! oj.editableValue
   * @instance
   */
  _processValidationError : function (e, event, context)
  {
    var ojmessage, summary, detail, severity, options = {};
    if (e instanceof oj.ConverterError || e instanceof oj.ValidatorError)
    {
      ojmessage = e.getMessage();
      oj.Assert.assertPrototype(ojmessage, oj.Message);

      severity = ojmessage['severity'];
      summary = ojmessage['summary'];
      detail = ojmessage['detail'];
    }
    else
    {
      // TODO: is this error message generic enough to use for both converter and validator errors?
      severity = oj.Message.SEVERITY_LEVEL['ERROR'];
      summary = oj.Translations.getTranslatedString("oj-message.error");
      detail = e['message'] || oj.Translations.getTranslatedString("oj-converter.detail");
      // ojmessage = new oj.Message(summary, detail, severity);
    }
    
    options['context'] = context || 0;
    switch (context)
    {
      case this._VALIDATION_CONTEXT.COMPONENT_CREATE:
      case this._VALIDATION_CONTEXT.VALUE_OPTION_CHANGE :
      case this._VALIDATION_CONTEXT.REQUIRED_OPTION_CHANGE: 
        options['display'] = oj.ComponentMessage.DISPLAY_TYPE.DEFERRED;
        break;

      // for all other contexts validation messages are marked for immediate display
      default: 
        options['display'] = oj.ComponentMessage.DISPLAY_TYPE.IMMEDIATE;
        break;
    }
    return new oj.ComponentMessage(summary, detail, severity, options);
  },

  /**
   * Called when a aria attribute needs to be set or removed. 
   * @param {string} option name of the option
   * @param {Object|string} value
   * @private
   * @memberof! oj.editableValue
   * @instance
   */
  _refreshAria : function (option, value)
  {
    switch (option)
    {
      case "required":
        this._RefreshAriaRequired(value);
        break;
        
      default:
        break;
    }
  },
          
  /**
   * Refreshes the component display value, only when the current value is different from the last 
   * saved value, unless asked to always refresh the display value.
   * 
   * @param {Object|undefined} value the changed value that needs to be updated on UI
   * @param {boolean=} fullRefresh false is the default; true means always refresh component 
   * display value using the current option value. This overwrites any UI value, the user may have 
   * entered.
   * 
   * @private
   * @memberof! oj.editableValue
   * @instance
   */        
  _refreshComponentDisplayValue : function (value, fullRefresh)
  {
    var modelValue = value || this.options['value'], lastModelValue, shouldUpdateElementValue;
    
    lastModelValue = this._getLastModelValue();
    shouldUpdateElementValue = fullRefresh || (modelValue !== lastModelValue) || false;

    if (shouldUpdateElementValue)
    {
      this._updateElementDisplayValue(modelValue);
    }
  },


  /**
   * Toggles css selector on the widget. E.g., when required option changes, the oj-required 
   * selector needs to be toggled.
   * @param {string} option
   * @param {Object|string} value 
   * @private
   * @memberof! oj.editableValue
   * @instance
   */        
  _refreshTheming : function (option, value)
  {
    if (this._OPTION_TO_CSS_MAPPING.hasOwnProperty(option)) 
    {
      // required is 'required' or 'optional'. Treat anything but 'required' as false.
      if (option !== "required") {
        this.widget().toggleClass(this._OPTION_TO_CSS_MAPPING[option], !!value);
      }
      else {
        this.widget().toggleClass(this._OPTION_TO_CSS_MAPPING[option], (value === "required"));
      }
    }
  },
  
  /**
   * Runs validators eagerly in certain contexts. One such context is when a editable component is 
   * created. They are eager validators because they are run 'eagerly' (or preemptively) but 
   * component 'defers' displaying errors on until asked to. 
   * 
   * @param {number} context in which validation was run. 
   * 
   * @returns {Object|null} the validation message usually of type oj.ComponentMessage. When running 
   * deferred validation we care less about the value, but care more about any validation errors.
   * @private 
   * @memberof! oj.editableValue
   * @instance
   */
  _runDeferredValidators : function (context) 
  {
    var newValue, msg;
    switch(context)
    {
      case this._VALIDATION_CONTEXT.VALUE_OPTION_CHANGE:
      case this._VALIDATION_CONTEXT.REQUIRED_OPTION_CHANGE:
      case this._VALIDATION_CONTEXT.COMPONENT_CREATE:
        try
        {
          newValue = this._doRunDeferredValidation(context);
        }
        catch (e)
        {
          msg = e;
        }
        break;
    }
    
    return msg || null;
  },
  
  _updateElementDisplayValue : function (modelValue, event)
  {
    var displayValue, newMsg;
    // cache the new model value on the element 
    this._setLastModelValue(modelValue);

    // Update element with the displayValue
    displayValue = modelValue;

    try
    {
      displayValue = this._formatValue(modelValue);
    }
    catch (e)
    {
      newMsg = this._processValidationError(e, event);
      // update messages option right away; we are attempting to show the display value
      this._updateComponentMessagesOption (newMsg, event);
    }
    
    this._SetDisplayValue(displayValue); 
    this._setLastSubmittedValue(this._GetDisplayValue());
  },
    
  /**
   * Validates the value by running through the list of regsitered validators. The algorithm is as 
   * follows -
   * 1. check to see if we are currently valid, if not return
   * 2. run required check. 
   * 3. if value is not empty get all the validators and validate in sequence. 
   * 4. if all validators pass return.
   * 
   * Callers can rely on the 'valid' options property to determine the validity state of the 
   * component after calling this method
   * 
   * @param {Object|undefined} value to be validated
   * @param {boolean} requiredOnly true only runs required validation
   * @throws {Error} when validation fails.
   * @private
   * @memberof! oj.editableValue
   * @instance
   */
  _validateValue : function (value, requiredOnly)
  {
    if (!this.isValid())
    {
      return;
    }
    
    var allValidators = this._GetAllValidators(), validator, i, reqValRun = false;

    // run required validation before anything else; 
    if (this._IsRequired())
    {
      validator = this._hasRequiredInValidators(allValidators);
      if (!validator)
      {
        validator = this._getDefaultRequiredValidator();
      }
      validator.validate(value);
      reqValRun = true;
    }

    // Only run other validators when required validation passes and only if all validators are 
    // requested to be run
    if (!requiredOnly)
    {
      for (i = 0; i < allValidators.length; i++)
      {
        validator = allValidators[i];
        if (typeof validator === "object") 
        {
          // validators : [required, numberRange]
          if (validator['validate'] && typeof validator['validate'] === "function")
          {
            if (validator instanceof oj.RequiredValidator && reqValRun)
            {
              // skip running required validation again
              continue;
            }
            validator['validate'](value);
          }
          else
          {
            if (oj.Logger.level > oj.Logger.LEVEL_WARN)
            {
              oj.Logger.info("validator does not support the validate method.");
            }
          }
        
        }
      }
    }
  }     
});

oj.Components.setDefaultOptions(
  {
    'editableValue': // properties for all editableValue components 
    {
      'messagingDisplayOptions': oj.Components.createDynamicPropertyGetter(
        function(context) 
        {
          // var inTable = context['containers'].indexOf('ojTable') >= 0;
          return  {
                    'messages': ['notewindow'], 
                    'converterHint': ['placeholder', 'notewindow'], 
                    'validatorHint': ['notewindow'], 
                    'title': ['notewindow']
                  };
        }
      )
    }
  }
);

//////////////////     SUB-IDS     //////////////////

/**
 * <p>Sub-ID for the node that shows messaging content in the popup associated with 
 * the component.
 * 
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-messaging-popup-content
 * @memberof oj.editableValue
 * @instance
 * 
 * @example <caption>Get the messaging content node from a component's popup:</caption>
 * // Foo is ojInputNumber, ojInputText, etc.
 * var node = $( ".selector" ).ojFoo( "getNodeBySubId", {'subId': 'oj-messaging-popup-content'} );
 */

/**
 * <p>Sub-ID for a node showing a message inside the popup associated with the component.
 * 
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-messaging-popup-message
 * @memberof oj.editableValue
 * @instance
 * 
 * @example <caption>Get the first message node inside the popup containing the summary and detail text:</caption>
  * // Foo is ojInputNumber, ojInputText, etc.
 * var node = $( ".selector" ).ojFoo( "getNodeBySubId", {'subId': 'oj-messaging-popup-message', 'index': 0} );
 */

/**
 * <p>Sub-ID for a node showing a validator hint inside the popup associated with the component.
 * 
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-messaging-popup-validator-hint
 * @memberof oj.editableValue
 * @instance
 * @since 0.7
 * 
 * @example <caption>Get the first validator hint node inside the popup:</caption>
 * // Foo is ojInputNumber, ojInputText, etc.
 * var node = $( ".selector" ).ojFoo( "getNodeBySubId", {'subId': 'oj-messaging-popup-validator-hint', 'index': 0} );
 */

/**
 * <p>Sub-ID for a node showing a converter hint inside the popup associated with the component.
 * 
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-messaging-popup-converter-hint
 * @memberof oj.editableValue
 * @instance
 * @since 0.7
 * 
 * @example <caption>Get the converter hint node inside the popup:</caption>
 * // Foo is ojInputNumber, ojInputText, etc.
 * var node = $( ".selector" ).ojFoo( "getNodeBySubId", {'subId': 'oj-messaging-popup-converter-hint'} );
 */

/**
 * <p>Sub-ID for the title node of the popup associated with the component.  
 * 
 * <p>See the <a href="#getNodeBySubId">getNodeBySubId</a> and 
 * <a href="#getSubIdByNode">getSubIdByNode</a> methods for details.
 * 
 * @ojsubid
 * @member
 * @name oj-messaging-popup-title
 * @memberof oj.editableValue
 * @instance
 * 
 * @example <caption>Get the title node from a component's popup:</caption>
 * // Foo is ojInputNumber, ojInputText, etc.
 * var node = $( ".selector" ).ojFoo( "getNodeBySubId", {'subId': 'oj-messaging-popup-title'} );
 */
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
/*!
 * JET Label This component is private. @VERSION
 */
/**
 * The _ojLabel component is a private component. It is not meant to be used
 * on a label element directly. Instead EditableValue components 
 * use the _ojLabel component in the internal implementation. 
 * <p>
 * The _ojLabel component decorates the input component's label with
 * extra dom for the required icon and help information (help
 * icon, help description, and help external url). If oj-label* styles are on
 * the label element, then the _ojLabel element will move them onto its root
 * dom element.
 * </p>
 * <h3 id="keyboard-section">
 *   Keyboard interaction and Focus management
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * <p>You can hover over the help and the required icons for additional information. 
 * You can also hover over the label to see the help definition text if there is some. 
 * </p>
 * @class
 * @private
 * @constructor
 * @name oj._ojLabel
 * @augments oj.baseComponent
 */
oj.__registerWidget("oj._ojLabel", $['oj']['baseComponent'],
{
  version : "1.0.0",  
  defaultElement : "<label>", 
  widgetEventPrefix : "oj", 
  options : 
  {
    /** 
     * The id of the input component that is associated with this label.
     * It is used to create an id for label's help icon dom (if any)
     * and that in turn is referred to with aria-describedby on the 
     * input component. This is needed for accessibility so that the screen
     * reader knows that the help icon is related to the input.
     * @expose 
     * @public
     * @instance
     * @memberof! oj._ojLabel
     */
    describedById: null,
    /**
     * The help information that goes on the label.  The help options are:
     * <ul>
     * <li>definition - this is the help definition text. It is what shows up
     * when the user hovers over the label or the help icon.</li>
     * <li>source - this is the help source url. If present, a help icon will
     * render next to the label and the anchor's target is this source.
     * </ul>
     * 
     * @expose 
     * @memberof! oj._ojLabel
     * @instance
     * @type {Object.<string, string>}
     * @default <code class="prettyprint">TODO: what goes here?</code>
     * 
     * @example <caption>Initialize the label with the help definition and external url information:</caption>
     * $( ".selector" )._ojLabel({ help: {definition:"some help definition", source:"some external url" } });
     * 
     * @example <caption>Set the <code class="prettyprint">help</code> option, after initialization:</caption>
     *
     * // setter
     * $( ".selector" )._ojLabel( "option", "help", {definition:"fill out the name", source:"http:\\www.oracle.com" } );
     */
    help: {definition: null, source: null},
    /** 
     * Whether this label should have a required icon.  Allowed values for 
     * required are 'required' and 'optional', 'optional' being the default.
     * @expose 
     * @public
     * @instance
     * @memberof! oj._ojLabel
     */
    required: null,
    /**
     * Allows you to set certain attributes on the root dom element.
     * For _ojLabel, we use 'class' only. The input components (via
     * EditableValue) set a styleclass on the _ojLabel's root in case
     * component-specific label styling is needed. For example, ojradioset
     * would pass class: 'oj-radioset-label'. ojinputtext would pass class:
     * 'oj-inputtext-label'. 
     *
     * @example <caption>Initialize root dom element with the set of 
     * <code class="prettyprint">rootAttributes</code>:</caption>
     * $(".selector")._ojLabel("option", "rootAttributes", {
     *   'class': 'oj-inputtext-label'
     * });
     * 
     * @expose
     * @access public
     * @memberof! oj._ojLabel
     * @instance
     * @type {Object|undefined}
     * @default <code class="prettyprint">{ id: null, class: null, style:null }</code>
     */
     rootAttributes: undefined
  },
 /**
  * @private
  * @const
  */
  _BUNDLE_KEY:
  {
    _TOOLTIP_HELP:      'tooltipHelp',
    _TOOLTIP_REQUIRED:  'tooltipRequired'    
  },
  /**** start Public APIs ****/
   
  /**
   * Returns a jQuery object containing the root dom element of the label 
   * 
   * <p>This method does not accept any arguments.
   * 
   * @expose
   * @memberof! oj._ojLabel
   * @instance
   * @return {jQuery} the label
  */
  widget : function ()
  {
    return this.uiLabel;
  },
  /**
   * Refreshes the required and help dom.
   * @example <caption>Clear messages and refresh component.</caption>
   * $(selector).ojInputText("option", "messages", []); <br/>
   * $(selector).ojInputText("refresh");
   * component 
   * @access public
   * @instance
   * @expose
   * @memberof! oj._ojLabel
   */
  refresh : function ()
  {
    this._super();
    this._refreshRequired();
    this._refreshHelp();
  },
          
   /**** end Public APIs ****/         
          
  /**** start internal widget functions ****/   
       
  /**
   * After _create, the widget should be 100% set up.
   * @override
   * @private
   */
  _create : function ()
  {
    this._super();

    this._drawOnCreate();

  },
  /**
   * set up styles on create
   * @private
   */
  _drawOnCreate : function ()
  {
    // wrap the label with a root dom element (oj-label) and its child 
    // (oj-label-group). Then point this.uiLabel to the root dom element.

    this.uiLabel = this.element.wrap(this._uiLabelWrapperHtml())
                               .closest(".oj-component");
                       
    // move an oj-label styles off of this.element, and put on the 
    // root dom element. Save these so we can put these back on 
    // this.element on destroy.
    this._moveClassesToRoot();
    if (this.options.help['definition'] || this.options.help['source'])
    { 
      this._insertHelpHtml();
      this._addHelpDefToLabel();
    }
    
    if (this.options.required === "required")
    {
      // Add or remove 'required' dom.
      // required. should go right before the label.
      this.element.before(this._requiredHtml());
    }
   },
   /**
   * move oj-label* classes from label element onto the root dom element
   * @private
   */
  _moveClassesToRoot : function ()
  {
    var classes = this.element.attr("class");
    this.movedClassArray  = [];
    if (classes)
    {
      var arrayOfClasses = classes.split(/\s+/);
      var numClasses = arrayOfClasses.length;
      for (var i=0; i < numClasses; i++)
      {
        var className = arrayOfClasses[i];
        // if class name has -label- in it, then move it
        // (e.g., oj-label, oj-label-inline, oj-md-label-nowrap, 
        // oj-md-labels-inline)
        if (className.indexOf("-label") > 0)
        {
          this.uiLabel.addClass(className); 
          this.element.removeClass(className);
          this.movedClassArray.push(className);
        }
      }
    }
  },
  /**
   * return the html string for the root dom element
   * @private
   */
  _uiLabelWrapperHtml : function ()
  {
    var rootAttributes = this.options.rootAttributes;
    var inputLabelClass;
    
    if (rootAttributes)
    {
      inputLabelClass = this.options.rootAttributes['class'];
    }
    
    if (inputLabelClass !== null)
    {
      return "<div class='oj-label oj-component " + inputLabelClass + 
              "'><div class='oj-label-group'></div></div>";
    }
    else
    {
      return "<div class='oj-label oj-component'><div class='oj-label-group'></div></div>";
    }

    
    
  },
  /** 
   * return the html string for the span with oj-label-required-icon
   * @private
   */
  _requiredHtml : function ()
  {
    var required = this.getTranslatedString(this._BUNDLE_KEY._TOOLTIP_REQUIRED);
    // TODO: Do we need oj-component-icon? I'm not seeing it in the label demos
    return "<span class='oj-label-required-icon oj-component-icon' title='" 
            + required + "'></span>";
  },
  /** 
   * return the html string of the span and its help information.
   * if (source), show help icon
   * if (helpDef), add 'title'=helpDef on help icon.
   * @private
   */
  _helpHtml : function (helpDef, source, describedById)
  {
    // construct the help html
    // if source (external url), then render a clickable help icon
    // if helpDef, then render oj-label-help-def style class on the label
    if (source)
    {
      var helpHtml = "<span id='" + describedById + "'>";
      helpHtml += "<a href='" + source + "' target='_blank'><span class=";
      helpHtml += "'oj-label-help-icon oj-component-icon oj-clickable-icon' title='";
      if (helpDef)
        helpHtml += helpDef;
      else
      {
        var tooltipHelp = this.getTranslatedString(this._BUNDLE_KEY._TOOLTIP_HELP);
        helpHtml += tooltipHelp;
      }
      helpHtml += "' role='img'></span>";
      helpHtml += "</a></span>"
    }
    return helpHtml;
  },
   /** 
   * Add help definition information to the label element.
   * @private
   */
  _addHelpDefToLabel : function ()
  {
    var helpDef = this.options.help['definition'];
    if (helpDef)
    {
      // add oj-label-help-def styleclass to the label.
      // add title to the label.
      // TODO APPEND title to the label if there is already a title
      this.element.addClass("oj-label-help-def");
      // append helpDef to title. We concatenate in case label already has
      // title set. Usually the app dev will use title OR helpDef, not both.
      var title = this.element.attr("title");
      if (title)
        this.element.attr("title", title + ' ' + helpDef);
      else
        this.element.attr("title", helpDef);
      
    }
  },
     /** 
   * Add help definition information to the label element.
   * @private
   */
  _removeHelpDefToLabel : function ()
  {
      this.element.removeClass("oj-label-help-def");
      this.element.attr("title", "");
  },
  /** 
   * finds the oj-label-group dom node and prepends the help html to it.
   * @private
   */
  _insertHelpHtml : function ()
  {
    var helpSource = this.options.help['source'];
    if (helpSource)
    {
      var helpDef = this.options.help['definition'];
      this.uiLabel.find(".oj-label-group").prepend(
        this._helpHtml(helpDef, 
                       helpSource,
                       this.options.describedById));
    }                     
  },
  /** 
   * refresh the help dom --
   * find the help root dom node and remove it if it is there 
   * and add back the help html. Helpful if a help option changed.
   * @private
   */  
  _refreshHelp : function ()
  {
    if (this.options.describedById !== null)
    {
      var describedById = "#" + this.options.describedById;
      this.uiLabel.find(describedById).remove();
    }
    // remove the style off of label dom as well.
    this._removeHelpDefToLabel();
    
    // now insert back if needed
    this._insertHelpHtml();
    this._addHelpDefToLabel();
  },
  /** 
   * refresh the required dom --
   * if required is required, then add the required dom if it isn't already there
   * if required is optional, remove the required dom if it is there.
   * Helpful if the required option changed.
   * @private
   */   
  _refreshRequired : function ()
  {
    // Add or remove 'required' dom.
    if (this.options.required === "required")
    {
      // required. should go right before the label if it isn't already there.
      if (this.uiLabel.find(".oj-label-required-icon").length === 0)
        this.element.before(this._requiredHtml());
    }
    else 
    {
      // not required, so find dom node with oj-label-required-icon on it.
      // Remove it.
      this.uiLabel.find(".oj-label-required-icon").remove();
    }
  },
  /**
   * Note that _setOption does not get called during create. it only gets called
   * when the component has already been created.
   * @override
   * @protected
   */
  _setOption : function (key, value)
  {
    this._superApply(arguments);

    if (key === "required")
    {
      this._refreshRequired();
    }

    // if user changed the help definition or source, then update the UI.
    // Find the help dom first. If it exists, replace it with new dom.
    // if it doesn't exist, add it.
     if (key === "help")
    {
      this._refreshHelp();
    }
  }, 
  /**
   * Return the subcomponent node represented by the documented locator attribute values.
   * Test authors should target spinner sub elements using the following names:
   * <ul>
   * <li><b>oj-label-help-icon</b>: the label's help icon</li>
   * <li><b>oj-label-help-icon-anchor</b>: the anchor tag of the help icon</li>
   * <li><b>oj-label-required-icon</b>: the label's required icon</li>
   * </ul>
   * 
   * @expose
   * @override
   * @memberof! oj._ojLabel
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
    var node = this._super(locator);
    if (!node)
    {
      var subId = locator['subId'];
      if (subId === "oj-label-help-icon") {
        node = this.widget().find(".oj-label-help-icon")[0];
      }
      if (subId === "oj-label-help-icon-anchor") {
        node = this.widget().find(".oj-label-help-icon").parent()[0];
      }
      if (subId === "oj-label-required-icon") {
        node = this.widget().find(".oj-label-required-icon")[0];
      }
    }    
    // Non-null locators have to be handled by the component subclasses
    return node || null;
  },  
  /**
   * 
   * @override
   * @protected
   */
  _destroy : function ()
  { 
    // replace the dom we added back with the element dom.
    this._super();
    // replace the oj-label* style classes we moved  to the root dom node 
    // on create
    for (var i=0; i < this.movedClassArray.length; i++)
    {
      this.element.addClass(this.movedClassArray[i]);
    }  
    this._removeHelpDefToLabel();
    
    this.uiLabel.replaceWith(this.element);
  }
  
  /**** end internal widget functions ****/ 
 
});
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/**
 * @class JET Editable Component Utils
 * @export
 * @since 0.6
 * 
 */
oj.EditableValueUtils = {};

/**
 * This method is called during _InitOptions() to initialize a component option value from DOM. This 
 * uusally is the case when the option value is undefined, 
 * i.e., this.options.optionName === undefined.
 * <br/>
 * Returns the attribute value for the given attribute on the element appropriately converted, or 
 * the default, if the attribute isn't set on the element.<br/>
 * 
 * @param {Object} element the element the component is initialized with.
 * @param {string} attribute the name of the element's attribtue. Example, value, disabled etc.
 * 
 * @returns {Object} a JSON object containing the following properties - <br/>
 * <ul>
 * <li><b>fromDom</b> - whether the option value was initialized from DOM. When true the option's 
 * value is written back (to observable).</li> 
 * <li><b>value</b> - the option value. the attribute value or the default if the attribute isn't 
 * set on the element.</li> 
 * </ul>
 * 
 * @private
 */
oj.EditableValueUtils.getAttributeValue = function (element, attribute)
{
  var result, attrVal, propVal, returnVal = {}; 
  
  if (element && attribute)
  {
    switch (attribute)
    {
      case "disabled" :
        result = element.attr("disabled") !== undefined ? 
          !!element.prop("disabled") : undefined;
        break;
        
      case "pattern":
        result = element.prop("pattern") || undefined; 
        break; 
        
      case "placeholder":
        result = element.prop("placeholder") || undefined;
        break;
        
      case "readonly": 
        result = element.attr("readonly") !== undefined ? 
          !!element.prop("readonly") : undefined; 
        break;
      
      case "required":
        attrVal = element.attr("required");
        propVal = element.prop("required");

        // If attribute is present and not undefined
        //   - In IE9, required attribute is not supported at all, so attr() is defined, prop() is 
        //   undefined. In such cases set default to !!attrVal
        //   - Otherwise set to !!propVal
        // If neither attr is undefined then use defaultValue
        // TODO: review needed 
        result = (attrVal !== undefined) ? 
          ((propVal !== undefined) ? !!propVal : !!attrVal) : undefined;
        
        break;
      
      case "title":
        result = element.prop("title");
        break;
        
      case "value":
        // element attribute may not be set, in which case default to null
        result = element.val() || undefined;
        break;
      
      case "min": 
        //same logic for min + max as in default
      case "max":
      
      default: 
        result = element.attr(attribute) || undefined;
        break;
    }
  }
  
  if (result !== undefined)
  {
    returnVal.fromDom = true;
    returnVal.value = result;
  }
  else
  {
    returnVal.fromDom = false;
    // returnVal.value = defaultValue; 
  }
  return returnVal;
};

/**
 * Called from component._InitOptions(), when a component might need to initialize its options from 
 * DOM. This usually is done when the constructor option is undefined, even in the case where 
 * this.options.option has a value that comes from app defaults or component (original) default. 
 * See below for details.
 * <p>
 * IMPORTANT: Do not call this method after component has been created, since option values are 
 * mutated directly after that point.</p>
 * 
 * The 'final' value an option uses/initializes from, can come from these places (in order of least 
 * to most likely) - <br/>
 * <ol>
 * <li>component default - this is the widget default </li><br/>
 * <li>app default - this is what a page author defines for the value in the page/app</li> <br/>
 * <li>dom value - if your option also has a dom attribute, this is the value set on element for 
 * component. </li> <br/>
 * <li>constructor value - this is the value page author sets on the component binding </li><br/>
 * </ol>
 * 
 * At the time _InitOptions is called, (1), (2) and (4) are merged, but this may not be the value a 
 * component wants for the option, especially when (4) is undefined. For example, if these values 
 * were set for a component - <br/>
 * (1) - 'foo'<br/>
 * (2) - 'bar'<br/>
 * (3) - 'lucy'<br/>
 * (4) - undefined<br/>
 * <p>
 * at the time _InitOptions is called, this.options.option is set to 'bar', but because DOM value 
 * wins over app default or component default, component needs to check if the constructor value was 
 * undefined and if so, set option to 'lucy'. <br/>
 * If the dom value is not set, then the component provided default value - defaultOptionValue gets 
 * used. This method always defaults the value to be - this.options.option || defaultOptionValue -  
 * because we think if neither (3) nor (4) is set, then the value from (2) should win over the 
 * defaultOptionValue. <br/>
 * </p>
 * 
 * @param {Object} props an Object literal that a component provides with the following properties 
 * that helps determine the final value for one or more options.
 * 
 * @property {string} props.attribute - name of DOM attribute
 * @property {string|undefined} props.option - name of the option if different from attribute name.
 * @property {Object|null|string|number|boolean} props.defaultOptionValue - the default value to use
 * for the option when the DOM value is not set. For example, editable components bound to inputs, 
 * would pass false as the default for disabled option, while components like the *set components 
 * would pass null, because they support a tri-state.
 * 
 * @property {Function|boolean|undefined} props.coerceDomValue - if the DOM value is set and 
 * coercing the dom value is needed, then either set to boolean true, which uses the default 
 * coercion rules for common attributes (a), or provide a custom callback (b). <p>
 * E.g., 'value' option for input number, input date etc. have special rules for coercing the value,
 *  so thse provide a custom callback. For common attributes like required and disabled, set the 
 *  value to true so the default oj.EditableValueUtils#coerceDomValueForOption method gets used.
 *  
 * @property {Function|boolean|undefined} props.validateOption - if set to true, then it calls 
 * oj.EditableValueUtils.validateValueForOption method to validate the option. OTOH, components 
 * can pass a call 
 * 
 * @param {Object} constructorOptions the options set on the component instance, often using 
 * component binding.
 * @param {Object} comp component instance.
 * 
 *  
 * @public
 */
oj.EditableValueUtils.initializeOptionsFromDom = function (props, constructorOptions, comp)
{
  // Loop through props to initialize option 
  $.each(props, function(index, prop)
    {
      var attribute = prop["attribute"], option = prop["option"] || attribute, result, 
          coerceDomValue = prop["coerceDomValue"],
          validateOption = prop["validateOption"],
          element = comp.element, 
          finalValue, previousValue = comp.options[option];
      
      /* The precedence for the value that an option uses is as follows from lowest to highest -
       *
       * (1) component default - this is the widget default
       * (2) app default - this is what a page author defines for the value in the page / app
       * (3) dom value - if your option also has a dom attribute, this is the value set on element. 
       * (4) constructor value - this is the value page author sets on the component binding
       *      
       * When (4) is undefined then attempt to default from (3). But if (3) is undefined use a 
       * defaultValue that component determines. If constructor option was not set then default 
       * value is the merged option value (i.e., this.options) || a hard-coded default determined 
       * by component.
       */
      
      // Step 1: use DOM value
      if (constructorOptions[option] === undefined)
      {
        previousValue = comp.options[option];
        result = oj.EditableValueUtils.getAttributeValue(element, attribute);
        
        // if we are using domValue then coerce the dom value before writing to options and trigegr 
        // option change so the value is written back (to ko)
        if (result.fromDom)
        {
          finalValue = result.value;
          
          // only required needs coercing so not bad
          if (coerceDomValue) 
          {
            if (typeof coerceDomValue === "boolean")
            {
              finalValue = oj.EditableValueUtils.coerceDomValueForOption(option, finalValue);
            }
            else if (typeof coerceDomValue === "function")
            {
              finalValue = coerceDomValue.call(comp, finalValue);
            }
          }
          comp.options[option] = finalValue;
          comp._InitializedOptionFromDom(option, previousValue);
        }
        else
        {
          // hmm, no dom value found; if comp.options also happens to be undefined then simply use 
          // the default option value. 
          if (previousValue === undefined)
          {
            comp.options[option] = prop["defaultOptionValue"];
          }
        }
      }
     
      // Step 2: validate the option value if needed
      if (validateOption)
      {
        if (typeof validateOption === "boolean")
        {
          oj.EditableValueUtils.validateValueForOption(option, comp.options[option]);
        }
        else if (typeof validateOption === "function")
        {
          validateOption.call(comp);
        }
      }
    });
};

  /**
   * Validates value set for the option and throws error if invalid.
   * 
   * @param {string} option name of the option. Validates options common to all edtiableValue 
   * holders.
   * @param {string|Object|boolean|number|undefined} value of the option that is validated
   * 
   * @throws {Error} if option value is invalid
   * @public
   */
  oj.EditableValueUtils.validateValueForOption = function (option, value)
  {
    var error = false;
    
    switch (option)
    {
      case 'required' :
        if (value !== "required" && value !== "optional")
        {
          error = true; 
        }
        break;
      
      case "readOnly":
      case "disabled" :
        if (value !== null &&  typeof value !== "boolean")
        {
          error = true;
        }
        
        break;
    }
    
    if (error)
    {
      throw "Option '" + option + " 'has invalid value set: " + value;
    }
  };
  
  
  /**
   * Coerces the dom value being used for the option, and throws error if invalid.
   * 
   * @param {string} option name of the option.
   * @param {string|Object|boolean|number|null} domValue dom value that is being coerced to the 
   * option value
   * @throws {Error} if domValue cannot be coerced appropriately
   * @public
   */
  oj.EditableValueUtils.coerceDomValueForOption = function(option, domValue) 
  { 
    var coerced = domValue;
    switch (option)
    {
      case 'required' :
        coerced = domValue ? "required" : "optional";
        break;
    }
    
    return coerced;
  };

});
