define(['ojs/ojcore', 'jquery', 'knockout', 'jqueryui', 'ojs/ojknockout', 'ojs/ojmessaging'], function(oj, $, ko)
{
/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/*jslint browser: true, devel: true*/

/**
 * Tracks the validity of a group of components bound to this observable. It also provides 
 * properties and methods that the page author can use to enforce form validation best practice.
 * 
 * <p>
 * When the <code class="prettyprint">invalidComponentTracker</code> binding attribute is present, 
 * often it is bound to an ko observable. At runtime the framework creates an instance of this type 
 * <code class="prettyprint">oj.InvalidComponentTracker</code> and and sets it on the bound 
 * observable. <br/> 
 * This object can be used by page authors to do the following - 
 * <ul>
 * <li>determine if there are invalid components tracked by this object that are currently showing 
 * (ui) errors. See {@link oj.InvalidComponentTracker#invalid} </li>
 * <li>determine if there are invalid components tracked by this object that are currently deferring 
 * showing (ui) errors </li>
 * <li>set focus on the first invalid, if there are invalid components showing (ui) errors, </li>
 * <li>show all error messages and set focus on the first invalid component, if there are invalid 
 * components with deferred messages</li>
 * </ul>
 * NOTE: The framework doesn't support deferring valid messages. E.g. a warning or lower
 * </p>
 * 
 * @example <caption> Bind an observable to the <code class="prettyprint">invalidComponentTracker</code> and access an instance of the oj.InvalidComponentTracker object.</caption>
 * &lt;input id="username" type="text" required 
 *   data-bind="ojComponent: {component: 'ojInputText', value: userName, 
 *    invalidComponentTracker: tracker}">
 * &lt;input id="password" type="text" required 
 *   data-bind="ojComponent: {component: 'ojInputPassword', value: password, 
 *    invalidComponentTracker: tracker}">
 * 
 * &lt;script>
 * function MyViewModel() { 
 *   var self = this;
 *   var tracker = ko.observable();
 *   
 *   log = function ()
 *   {
 *     var trackerObj = ko.utils.unwrapObservable(self.tracker);
 *     console.log(trackerObj instanceof oj.InvalidComponentTracker); // true 
 *   }
 * }
 * &lt;/script>
 * 
 * @class oj.InvalidComponentTracker 
 * @constructor
 * @class
 * @export
 * @since 0.7
 */
oj.InvalidComponentTracker = function()
{
  this.Init();
};

// Subclass from oj.Object 
oj.Object.createSubclass(oj.InvalidComponentTracker, oj.Object, "oj.InvalidComponentTracker");

// DOCLETS for public properties

/**
 * Whether there is at least one component (tracked by this object) that is invalid and is currently 
 * showing messages.
 * 
 * NOTE: <code class="prettyprint">invalid</code> is a ko observable.
 * 
 * @example <caption>Disable button using <code class="prettyprint">invalid</code> property:</caption>
 * &lt;input id="username" type="text" required 
 *   data-bind="ojComponent: {component: 'ojInputText', value: userName, 
 *    invalidComponentTracker: tracker}">
 * &lt;input id="password" type="text" required 
 *   data-bind="ojComponent: {component: 'ojInputPassword', value: password, 
 *    invalidComponentTracker: tracker}">
 * &lt;button type="button" data-bind="ojComponent: {component: 'ojButton', label: 'Create',
 *   disabled: tracker()['invalid']()}"></button>
 *   
 * &lt;script>
 * var userName = ko.observable();
 * var password = ko.observable();
 * var tracker = ko.observable();
 * &lt;/script>
 * 
 * @member 
 * @name invalid
 * @access public
 * @instance
 * @default false 
 * @type {boolean}
 * @expose
 * @memberof! oj.InvalidComponentTracker
 */


/**
 * Whether there is at least one component that is invalid and has deferred showing any of its 
 * messages.
 * 
 * NOTE: <code class="prettyprint">invalidDeferred</code> is a ko observable.
 * 
 * @example <caption>Enable button using <code class="prettyprint">invalidDeferred</code> property:</caption>
 * &lt;input id="username" type="text" required 
 *   data-bind="ojComponent: {component: 'ojInputText', value: userName, 
 *    invalidComponentTracker: tracker}">
 * &lt;input id="password" type="text" required 
 *   data-bind="ojComponent: {component: 'ojInputPassword', value: password, 
 *    invalidComponentTracker: tracker}">
 * &lt;br/>
 * &lt;button type="button" data-bind="ojComponent: {component: 'ojButton', label: 'Create',
 *   disabled: !tracker()['invalidDeferred']()}"></button>
 * 
 * &lt;script>
 * var userName = ko.observable();
 * var password = ko.observable();
 * var tracker = ko.observable();
 * &lt;/script>
 * 
 * @member 
 * @name invalidDeferred
 * @access public
 * @instance
 * @default false 
 * @type {boolean}
 * @expose
 * @memberof! oj.InvalidComponentTracker
 */
/**
 * Initializer
 * @protected
 * @memberof! oj.InvalidComponentTracker
 * @instance
 */
oj.InvalidComponentTracker.prototype.Init = function () 
{
  var self = this;
  oj.InvalidComponentTracker.superclass.Init.call(this);
  
  // INTERNAL PROPERTIES
  // all tracked components
  this._tracked = ko.observableArray([]);
  
  // invalid components currently showing messages. Contains indices from tracked.
  this._invalid = ko.observableArray([]); 
  
  // invalid components currently deferring showing messages. Contains 
  // indices from tracked.
  this._invalidDeferred = ko.observableArray([]); 
  
  // PUBLIC PROPERTIES
  this['invalid'] = ko.computed(function() {
        return self._invalid().indexOf(true) >= 0;
      });
      
  this['invalidDeferred'] = ko.computed(function() {
        return self._invalidDeferred().indexOf(true) >= 0;
      });
};

/**
 * Sets focus on first invalid component currently showing an error. This method will not consider 
 * components that are marked invalid but are deferring showing messages. <br/>
 * To show deferred messages on all tracked components and set focus on the the first invalid 
 * component refer to oj.InvalidComponentTracker#showMessagesAndFocusOnFirstInvalid.
 * 
 * @return {boolean} true if we have an invalid component that we can focus on; false if unable to 
 * locate a component to focus on or there are no invalid components. 
 * @export
 * @memberof! oj.InvalidComponentTracker
 * @instance
 */
oj.InvalidComponentTracker.prototype.focusOnFirstInvalid = function()
{
  var firstInvalid = null, self = this, updateCounter = this._updateCounter;
  if (this['invalid']())
  {
    firstInvalid = this._getFirstInvalidElement();
  }
  
  // always call focus handler on a timer; to give time for updates to be applied on compoent. 
  // oj.ComponentBinding.applyUpdates, happens on a timer.
  setTimeout(function () {
      // trouble is sometimes when this timer is called, firstInvalid may not have been determined 
      // yet. Or the invalid states could have changed in between the timer being set and the 
      // callback being called.
      firstInvalid = (updateCounter === self._updateCounter) ? 
                        firstInvalid || self._getFirstInvalidElement() : self._getFirstInvalidElement(); 
      if (firstInvalid)
      {
        // Call a protected method Focus() exposed on editable components for now.
        firstInvalid.call(firstInvalid, "Focus");
      }
    }, 1);
  
  return firstInvalid ? true : false;
};

/**
 * Shows all messages including the ones marked deferred on all tracked components. Does not 
 * automatically set focus on the first invalid component.
 * 
 * @example <caption>Show all messages deferred or otherwise, on all components:</caption>
 *  function ViewModel ()
 *  {
 *    self = this;
 *    var tracker = ko.observable();
 *   // ...
 *   
 *   showAllMessages : function ()
 *   {
 *      var trackerObj = ko.utils.unwrapObservable(self.tracker);
        return trackerObj.showMessages())
 *    }
 *  }
 * 
 * @export
 * @memberof! oj.InvalidComponentTracker
 * @instance
 */
oj.InvalidComponentTracker.prototype.showMessages = function()
{
  var deferredInvalids, tracked, tr;
  if (this['invalidDeferred']())
  {
    tracked = ko.utils.unwrapObservable(this._tracked);
    deferredInvalids = ko.utils.unwrapObservable(this._invalidDeferred);
    //   - calling component.showMessages() on the components with deferred messages moves all 
    //     deferred messages to the immediate group, which updates the invalidComponentTracker.
    for (var index in deferredInvalids)
    {
      if (deferredInvalids[index])
      {
        tr = tracked[index].call(tr, "showMessages");
      }
    }
  }
};

/**
 * Instructs component to show all messages including ones that were deferred, and sets focus on 
 * first invalid component. 
 * 
 * @return {boolean} true if there was an invalid component that was focused on; false if unable to 
 * locate a component to focus or if there are no invalid components. 
 * 
 * @example <caption>Show validation messages that were deferred and set focus on first invalid component:</caption>
 *  function ViewModel ()
 *  {
 *    self = this;
 *    var tracker = ko.observable();
 *   // ...
 *   
 *   // show all messages deferred or otherwise, and set focus on the first invalid component
 *   showAllMessages : function ()
 *   {
 *      var trackerObj = ko.utils.unwrapObservable(self.tracker);
 *      var hasInvalidDeferredMessages = ko.utils.unwrapObservable(trackerObj['invalidDeferred']);
 * 
 *      if (hasInvalidDeferredMessages)
 *      {
 *        return trackerObj.showMessagesAndFocusOnFirstInvalid())
 *      }
 *    }
 *  }
 * @export
 * @memberof! oj.InvalidComponentTracker
 * @instance
 */
oj.InvalidComponentTracker.prototype.showMessagesAndFocusOnFirstInvalid = function()
{
  this.showMessages();
  
  if (this['invalid']())
  {
    return this.focusOnFirstInvalid();
  }
  
  return false;
};


// P R I V A T E    M E T H O D S

/**
 * Gets the first invalid component and returns the component to focus on.
 * 
 * @returns the component instance that has focus or null
 * @private
 */
oj.InvalidComponentTracker.prototype._getFirstInvalidElement = function ()
{
  var firstInvalid, i, focusable = null, idx = 0,
  invalids = ko.utils.unwrapObservable(this._invalid), tracked = ko.utils.unwrapObservable(this._tracked);

  // locate first invalid component and set focus on it
  for (idx = 0; idx < invalids.length; idx++)
  {
    firstInvalid = invalids[idx];
    if (firstInvalid)
    {
      return tracked[idx];
    }
  };

  return focusable;
};

/**
 * Updates the internal properties to reflect the current validity state of the component, using 
 * new messages.
 * 
 * @param {Object} component the component that has the new messages
 * @returns {undefined}
 * @private
 * @memberof! oj.InvalidComponentTracker
 * @instance
 */
oj.InvalidComponentTracker.prototype._update = function (component)
{
  var tracked = ko.utils.unwrapObservable(this._tracked), 
          invalid = ko.utils.unwrapObservable(this._invalid),
          invalidDeferred = ko.utils.unwrapObservable(this._invalidDeferred),
          compValid = component.call(component, "isValid"), 
          newMessages = component.call(component, "getMessages"),
          trackedIndex = -1, item, arr;
  
  oj.Assert.assertArray(tracked);

  $.each(tracked, function (index, item)
  {
    if (trackedIndex < 0 && item === component)
    {
      trackedIndex = index;
      return;
    }
  });

  // add/update/remove from array as the case may be
  if (newMessages)
  {
    if (trackedIndex < 0)
    {
      // push component into array
      trackedIndex = tracked.push(component) - 1;
      invalid.push(false);
      invalidDeferred.push(false);
    }
    else
    {
      // reset 
      invalid.splice(trackedIndex, 1, false);
      invalidDeferred.splice(trackedIndex, 1, false);
    }
    
    if (!compValid)
    {
      // check if we have invalid messages currently showing; 
      arr = oj.InvalidComponentTracker._hasInvalidMessages(newMessages) ? 
              invalid : oj.InvalidComponentTracker._hasInvalidDeferredMessages(newMessages) ? 
                invalidDeferred : null;
      
      if (arr)
      {
        if (trackedIndex >= 0)
        {
          // mark component as invalid or invalidDeferred to match the trackedIndex
          arr.splice(trackedIndex, 1, true);
        }
        else
        {
          arr.push(true);
        }
      }
    }
    else
    {
      // component is valid; clear the arrays.
      if (trackedIndex >= 0)
      {
        invalid.splice(trackedIndex, 1, false);
        invalidDeferred.splice(trackedIndex, 1, false);
      }
    }
    
    this._invalid(invalid);
    this._invalidDeferred(invalidDeferred);
    // every time messages mutates, we track it. 
    if (this._updateCounter === undefined)
    {
      this._updateCounter = 0;
    }
    this._updateCounter++;    
  }
};

/**
 * helper to determine if we have invalid messages among the list of messages that are currently 
 * showing i.e., that are not marked for deferred display.
 * 
 * @param {!Array} messages list of all messages associated with component
 * @returns {boolean}
 * @private
 * @memberof! oj.InvalidComponentTracker
 * @instance
 */
oj.InvalidComponentTracker._hasInvalidMessages = function (messages)
{
  var immediateDisplayMsgs = oj.InvalidComponentTracker._getImmediateMessages(messages) || [];
  
  var maxLevel = oj.Message.getMaxSeverity(immediateDisplayMsgs);
  if (maxLevel >= oj.Message.SEVERITY_LEVEL['ERROR'])
  {
    return true;
  }

  return false;
};

/**
 * helper to determine if we have invalid messages among the list of deferred messages
 * 
 * @param {!Array} messages list of all messages associated with component
 * @returns {boolean}
 * @private
 * @memberof! oj.InvalidComponentTracker
 * @instance
 */
oj.InvalidComponentTracker._hasInvalidDeferredMessages = function (messages)
{
  var deferredDisplayMsgs = oj.InvalidComponentTracker._getDeferredMessages(messages) || [];
  
  var maxLevel = oj.Message.getMaxSeverity(deferredDisplayMsgs);
  if (maxLevel >= oj.Message.SEVERITY_LEVEL['ERROR'])
  {
    return true;
  }

  return false;
};


/**
 * Returns an array of messages that are currently showing, i.e., not marked for deferred display.
 * 
 * @return {Array} of messages each an instance of oj.Message
 * @private
 */
oj.InvalidComponentTracker._getImmediateMessages = function (messages)
{
  var immediateMsgs = [], msg;
  for (var index in messages)
  {
    msg = messages[index];
    // gather component messages marked for immediate display 
    if (msg instanceof oj.ComponentMessage && !msg.canDisplay())
    {
      continue;
    }
    immediateMsgs.push(msg);
  }
  
  return immediateMsgs;
};

/**
 * Returns an array of messages that are not marked for deferred display.
 * 
 * @return {Array} of messages each an instance of oj.Message
 * @private
 */
oj.InvalidComponentTracker._getDeferredMessages = function (messages)
{
  var deferredMsgs = [], msg;
  for (var index in messages)
  {
    msg = messages[index];
    // gather component messages marked for immediate display 
    if (msg instanceof oj.ComponentMessage && !msg.canDisplay())
    {
      deferredMsgs.push(msg);
    }    
  }
  
  return deferredMsgs;
};

/**
 * Adds a component that this observable is tracking. 
 * @param {!Object} added
 * @private 
 */
oj.InvalidComponentTracker.prototype._addComponent = function (added) 
{
  if (added) 
  {
    this._tracked.push(added);
  }
};

/**
 * Adds a component that is currently invalid. 
 * @param {!Object} invalid
 * @private 
 */
oj.InvalidComponentTracker.prototype._addInvalidComponent = function (invalid) 
{
  if (invalid) 
  {
    this._invalid.push(invalid);
  }
  // todo: update the 'invalid' observable?
};

/**
 * Adds a component that is currently invalid. 
 * @param {!Object} invalid
 * @private 
 */
oj.InvalidComponentTracker.prototype._addInvalidDeferredComponent = function (invalid) 
{
  if (invalid) 
  {
    this._invalidDeferred.push(invalid);
  }
  // todo: update the 'invalidDeferred' observable?
};

/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */

/*jslint browser: true, devel: true*/

/**
 * An extension to oj.ComponentBinding, properties exposed on this binding are available 
 * to jet components that extend from oj.editableValue. 
 * 
 * @class oj.ValueBinding 
 * 
 * @constructor
 * @class
 * @export
 * @see oj.ComponentBinding
 * @see oj.editableValue
 * @since 0.6
 */
oj.ValueBinding = function(){};


/** 
 * When bound to an observable, the framework pushes an object of type oj.InvalidComponentTracker 
 * onto it. The object itself tracks the validity of a group of editable components.
 * <p>
 * When this attribute is present the binding registers a default handler for the 'optionChange' 
 * event fired by jet editable components whenever its validity (i.e. 'messagesComponent' or 
 * 'messagesCustom' options) changes. The handler pushes the current validity of the component onto 
 * the tracker. <br/>
 * The observable bound to this attribute is often used across multiple component binding 
 * declarations.
 * </p>
 * @example <caption>Track validity of multiple components using a single observable bound to the <code class="prettyprint">invalidComponentTracker</code> attribute:</caption>
 * &lt;input id="username" type="text" name="username" required 
 *   data-bind="ojComponent: {component: 'ojInputText', value: userName, 
 *                            invalidComponentTracker: tracker}">
 * 
 * &lt;input id="password" type="password" name="password" required 
 *   data-bind="ojComponent: {component: 'ojInputPassword', value: password, 
 *   invalidComponentTracker: tracker}"/>
 *   
 * // ViewModel that defines the tracker observable
 * &lt;script>
 * function MemberViewModel() 
 * { 
 *   var self = this;
 *   
 *   self.tracker = ko.observable();
 *   
 *   self.userName = ko.observable();   
 *   self.password = ko.observable();
 * }
 * &lt;/script>
 * 
 * @example <caption>Use tracker property <code class="prettyprint">invalid</code> to disable button:</caption>
 * // button is disabled if there are components currently showing errors
 * &lt;button type="button" data-bind="ojComponent: {component: 'ojButton', label: 'Submit',
 *            disabled: tracker()['invalid']()}"></button>
 * 
 * @see oj.InvalidComponentTracker
 * @export
 * @access public
 * @name invalidComponentTracker
 * @instance
 * @memberof! oj.ValueBinding
 * @since 0.7
 * 
 */
oj.ValueBinding._ATTRIBUTE_INVALID_COMPONENT_TRACKER = 'invalidComponentTracker';

oj.ValueBinding._ATTRIBUTE_MESSAGES_COMPONENT = 'messagesComponent';
oj.ValueBinding._ATTRIBUTE_MESSAGES_CUSTOM = 'messagesCustom';

/** 
 * The optionChange attribute is managed in order to wrap an existing callback with or register a 
 * default invalidComponentTracker writeback. The callback is called when the 'messagesCustom' or 
 * 'messagesComponent' options change. 
 * 
 * @private
 * @const
 */
oj.ValueBinding._ATTRIBUTE_OPTIONCHANGE = "optionChange";

oj.ValueBinding._init = function (property, value, element, component, valueAccessor) 
{
  var initProps = {}, options = valueAccessor.call(), 
      optionChangeProp = oj.ValueBinding._ATTRIBUTE_OPTIONCHANGE,
      optionChangeObs = options[optionChangeProp], 
      optionChangeFunc = oj.ComponentBinding._toJS(optionChangeObs);
  
  if (property === oj.ValueBinding._ATTRIBUTE_INVALID_COMPONENT_TRACKER)
  {
    // register a writeback for invalidComponentTracker property by registering an event handler for 
    // the optionChange event.
    if (!optionChangeFunc)
    {
      oj.ValueBinding._registerInvalidComponentTrackerWriteback(options, initProps, component);
    }
    // initProps[property] = value; // we don't really need to initialize this property on component
  }
  else if (property === oj.ValueBinding._ATTRIBUTE_OPTIONCHANGE)
  {
    oj.ValueBinding._registerInvalidComponentTrackerWriteback(options, initProps, component);
  }
 
  return initProps;
};

/**
 * Register a default callback for the 'optionChange' event. The callback writes the component and 
 * its validity to the invalidComponentTracker observable.
 * 
 * @param {Object} options
 * @param {Object} initProps
 * @param {Object} component
 * @private
 */
oj.ValueBinding._registerInvalidComponentTrackerWriteback = function(options, initProps, component)
{
  var optionChangeProp = oj.ValueBinding._ATTRIBUTE_OPTIONCHANGE, 
      optionChangeObs = options[optionChangeProp], oldOptionChangeFunc, 
      ictObs = options[oj.ValueBinding._ATTRIBUTE_INVALID_COMPONENT_TRACKER], 
      icTracker = ko.utils.unwrapObservable(ictObs);


  oldOptionChangeFunc = oj.ComponentBinding._toJS(optionChangeObs);
  
  // we don't push to invalidComponentTracker if the observable is not set.
  if (ko.isObservable(ictObs) && 
      icTracker == null)
  {
    // create an instance of oj.InvalidComponentTracker and set it on the observable.
    icTracker = new oj.InvalidComponentTracker();
    ictObs(icTracker);
  }
  
  if (icTracker !== null)
  {
    // Register a default callback for the (oj)'optionChange' event. The callback writes the 
    // validity payload to 'invalidComponentTracker' observable
    if (!oldOptionChangeFunc || oldOptionChangeFunc instanceof Function)
    {
      // The anonymous inner function listener will be delegating to the original listener if there 
      // is one. 
      initProps[optionChangeProp] = function(event, data)
      {
        if (oldOptionChangeFunc)
        {
          oldOptionChangeFunc.call(this, event, data);
        }
        
        // optionChange can be triggered for various options; we are interested in changes to 
        // messagesCustom or messagesComponent
        if (data['option'] === oj.ValueBinding._ATTRIBUTE_MESSAGES_COMPONENT || 
                data['option'] === oj.ValueBinding._ATTRIBUTE_MESSAGES_CUSTOM)
        {
          if (ko.isWriteableObservable(ictObs))
          {
            icTracker._update.call(icTracker, component);
          }
        }
      };
    }
  }
};

/**
 * ojValue Behavior Definition and Injection
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojValue',
  
  'attributes': [oj.ValueBinding._ATTRIBUTE_INVALID_COMPONENT_TRACKER,
                 oj.ValueBinding._ATTRIBUTE_OPTIONCHANGE],
               
  'init': oj.ValueBinding._init
});

/**
 * Default declaration for ojInputText
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojInputText',
  'use': 'ojValue'
});

/**
 * Default declaration for ojInputNumber
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojInputNumber',
  'use': 'ojValue'
});

/**
 * Default declaration for ojRadioCheckbox
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojRadioCheckbox',
  'use': 'ojValue'
});

oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojRadioset',
  'use': 'ojValue'
});

oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojCheckboxset',
  'use': 'ojValue'
});
/**
 * Default declaration for ojInputDateTime
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojInputDateTime',
  'use': 'ojValue'
});

/**
 * Default declaration for ojInputDate
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojInputDate',
  'use': 'ojValue'
});

/**
 * Default declaration for ojInputTime
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojInputTime',
  'use': 'ojValue'
});

/**
 * Default declaration for ojInputPassword
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojInputPassword',
  'use': 'ojValue'
});

/**
 * Default declaration for ojTextArea
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojTextArea',
  'use': 'ojValue'
});

/**
 * Default declaration for ojCombobox
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojCombobox',
  'use': 'ojValue'
});

/**
 * Default declaration for ojSelect
 */
oj.ComponentBinding.getDefaultInstance().setupManagedAttributes(
{
  'for': 'ojSelect',
  'use': 'ojValue'
});
});
