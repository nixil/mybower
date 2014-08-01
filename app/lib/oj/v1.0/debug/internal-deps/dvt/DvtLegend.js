define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  /**
 * Legend component.  This class should never be instantiated directly.  Use the
 * newInstance function instead.
 * @class
 * @constructor
 * @extends {DvtBaseComponent}
 * @export
 */
var DvtLegend = function() {};

DvtObj.createSubclass(DvtLegend, DvtBaseComponent, 'DvtLegend');


/**
 * Returns a new instance of DvtLegend.
 * @param {DvtContext} context The rendering context.
 * @param {string} callback The function that should be called to dispatch component events.
 * @param {object} callbackObj The optional object instance on which the callback function is defined.
 * @return {DvtLegend}
 * @export
 */
DvtLegend.newInstance = function(context, callback, callbackObj) {
  var legend = new DvtLegend();
  legend.Init(context, callback, callbackObj);
  return legend;
};


/**
 * Returns a copy of the default options for the specified skin.
 * @param {string} skin The skin whose defaults are being returned.
 * @return {object} The object containing defaults for this component.
 * @export
 */
DvtLegend.getDefaults = function(skin) 
{
  return (new DvtLegendDefaults()).getDefaults(skin);
};


/**
 * @override
 * @protected
 */
DvtLegend.prototype.Init = function(context, callback, callbackObj) {
  DvtLegend.superclass.Init.call(this, context, callback, callbackObj);
  this.setId('legend' + 1000 + Math.floor(Math.random() * 1000000000));

  // Create the defaults object
  this.Defaults = new DvtLegendDefaults();

  // Create the event handler and add event listeners
  this._eventManager = new DvtLegendEventManager(this);
  this._eventManager.addListeners(this);

  // Set up keyboard handler on non-touch devices
  if (!DvtAgent.isTouchDevice())
    this._eventManager.setKeyboardHandler(new DvtLegendKeyboardHandler(this._eventManager, this));

  /**
   * The array of logical objects for this legend.
   * @private
   */
  this._peers = [];
  /**
   * The array of scrollable legend sections for this legend.
   * @private
   */
  this._scrollableSections = [];
  /**
   * The object that stores the bounds for this legend
   * @private
   */
  this._bounds = null;

  this._bundle = new DvtUtilBundle();
};

/**
 * Retuns the translation bundle
 * @return {Object}
 */
DvtLegend.prototype.__getBundle = function() {
  return this._bundle;
};

/**
 * @override
 */
DvtLegend.prototype.SetOptions = function(options) {
  if (options) // Combine the user options with the defaults and store
    this.Options = this.Defaults.calcOptions(options);
  else if (!this.Options) // Create a default options object if none has been specified
    this.Options = this.GetDefaults();
};


/**
 * Returns the preferred dimensions for this component given the maximum available space.
 * @param {object} options The object containing specifications and data for this component.
 * @param {Number} maxWidth The maximum width available.
 * @param {Number} maxHeight The maximum height available.
 * @return {DvtDimension} The preferred dimensions for the object.
 */
DvtLegend.prototype.getPreferredSize = function(options, maxWidth, maxHeight) {
  // Update the options object.
  this.SetOptions(options);

  // Set the layout flag to indicate this is a layout pass only
  this.__getOptions()['isLayout'] = true;

  // Ask the legend to render its contents in the max space and find the space used.
  var availSpace = new DvtRectangle(0, 0, maxWidth, maxHeight);
  var dim = DvtLegendRenderer.render(this, availSpace);

  // Clear the rendered contents and reset state
  this.__getOptions()['isLayout'] = false;

  // Return the space used
  return dim;
};


/**
 * @override
 * @export
 */
DvtLegend.prototype.render = function(options, width, height) 
{
  // Update the options object.
  this.SetOptions(options);

  // Set the render flag to indicate we are rendering. Not being read correctly in flash - Bug 17310086
  this.__getOptions()['isLayout'] = false;

  // Clear any contents rendered previously
  this.removeChildren();

  // Render the legend
  var availSpace = new DvtRectangle(0, 0, width, height);
  DvtLegendRenderer.render(this, availSpace);
};


/**
 * Highlights the specified categories.
 * @param {array} categories The array of categories whose data items will be highlighted. If null or empty, all
 *                           highlighting will be removed.
 * @export
 */
DvtLegend.prototype.highlight = function(categories) {
  DvtCategoryRolloverHandler.highlight(categories, this.__getObjects());
};


/**
 * Processes the specified event.
 * @param {object} event
 * @param {object} source The component that is the source of the event, if available.
 */
DvtLegend.prototype.processEvent = function(event, source) {
  var type = event.getType();
  if (type == DvtCategoryRolloverEvent.TYPE_OVER || type == DvtCategoryRolloverEvent.TYPE_OUT) {
    if (this.__getOptions()['hoverBehavior'] == 'dim')
      DvtCategoryRolloverHandler.processEvent(event, this.__getObjects());
    // For scrollable legend interactivty
    for (var i = 0; i < this._scrollableSections.length; i++)
      this._scrollableSections[i].processCategoryRollover(event);
  }

  // Dispatch the event to the callback if it originated from within this component or if it is a popup event.
  if (this == source || type == DvtShowPopupEvent.TYPE || type == DvtHidePopupEvent.TYPE) {
    this.__dispatchEvent(event);
  }
};


/**
 * Returns the evaluated options object, which contains the user specifications
 * merged with the defaults.
 * @return {object} The options object.
 */
DvtLegend.prototype.__getOptions = function() {
  return this.Options;
};


/**
 * Returns the DvtEventManager for this component.
 * @return {DvtEventManager}
 */
DvtLegend.prototype.__getEventManager = function() {
  return this._eventManager;
};


/**
 * Registers the object peer with the legend.  The peer must be registered to participate
 * in interactivity.
 * @param {DvtLegendObjPeer} peer
 */
DvtLegend.prototype.__registerObject = function(peer) {
  this._peers.push(peer);
};


/**
 * Returns the peers for all objects within the legend.
 * @return {array}
 */
DvtLegend.prototype.__getObjects = function() {
  return this._peers;
};


/**
 * Registers a scrollable legend section the legend. Used for interactivity.
 * @param {DvtScrollableLegend} section
 */
DvtLegend.prototype.__registerScrollableSection = function(section) {
  this._scrollableSections.push(section);
};

/**
 * Releases all component resources to prevent memory leaks.
 * @override
 * @export
 */
DvtLegend.prototype.destroy = function() {
  if (this._eventManager) {
    this._eventManager.removeListeners(this);
    this._eventManager.destroy();
    this._eventManager = null;
  }

  // Call super last during destroy
  DvtLegend.superclass.destroy.call(this);
};

/**
 * Stores the bounds for this legend
 * @param {Object} bounds
 */
DvtLegend.prototype.__setBounds = function(bounds) {
  this._bounds = bounds;
};


/**
 * Returns the bounds for this legend
 * @return {Object} the object containing the bounds for this legend
 */
DvtLegend.prototype.__getBounds = function() {
  return this._bounds;
};

/**
 * Returns the automation object for this chart
 * @return {DvtAutomation} The automation object
 * @export
 */
DvtLegend.prototype.getAutomation = function() {
  return new DvtLegendAutomation(this);
};

/**
 * Returns the keyboard-focused object of the legend
 * @return {DvtKeyboardNavigable} The focused object.
 */
DvtLegend.prototype.getKeyboardFocus = function() {
  return this._eventManager.getFocus();
};

/**
 * Sets the navigable as the keyboard-focused object of the legend. It matches the id in case the legend
 * has been rerendered.
 * @param {DvtKeyboardNavigable} navigable The focused object.
 * @param {boolean} isShowingFocusEffect Whether the keyboard focus effect should be used.
 */
DvtLegend.prototype.setKeyboardFocus = function(navigable, isShowingFocusEffect) {
  for (var i = 0; i < this._peers.length; i++) {
    if (this._peers[i].getId() == navigable.getId()) {
      this._eventManager.setFocusObj(this._peers[i]);
      if (isShowingFocusEffect)
        this._peers[i].showKeyboardFocusEffect();
      break;
    }
  }
};
/**
 * Legend Constants
 * @class
 * @export
 */
var DvtLegendConstants = {};

DvtObj.createSubclass(DvtLegendConstants, DvtObj, 'DvtLegendConstants');


/**
 * @const
 * @export
 */
DvtLegendConstants.BACKGROUND = 'background';


/**
 * @const
 * @export
 */
DvtLegendConstants.LEGEND_ITEM = 'legendItem';


/**
 * @const
 * @export
 */
DvtLegendConstants.TITLE = 'title';
/**
 *  Provides automation services for a DVT component.
 *  @class DvtLegendAutomation
 *  @param {DvtLegend} dvtComponent
 *  @implements {DvtAutomation}
 *  @constructor
 *  @export
 */
var DvtLegendAutomation = function(dvtComponent) {
  this._legend = dvtComponent;
  this._options = this._legend.__getOptions();
};

DvtObj.createSubclass(DvtLegendAutomation, DvtAutomation, 'DvtLegendAutomation');

/**
 * Valid subIds inlcude:
 * <ul>
 * <li>section[sectionIndex0]:item[itemIndex]</li>
 * </ul>
 * @override
 */
DvtLegendAutomation.prototype.GetSubIdForDomElement = function(displayable) {
  var logicalObj = this._legend.__getEventManager().GetLogicalObject(displayable);
  if (logicalObj && (logicalObj instanceof DvtLegendObjPeer)) {
    var item = logicalObj.getData();
    var indexList = this._getIndicesFromItem(item, this._options);
    if (indexList)
      return 'section' + indexList;
  }
  return null;
};


/**
 * Returns the index values of the given legend item
 * @param {Object} item the legend item to find the indices of within legendOptions
 * @param {Object} legendOptions the legend options object
 * @return {String} [sectionIndex0] or [sectionIndex0]:item[itemIndex]
 * @private
 */
DvtLegendAutomation.prototype._getIndicesFromItem = function(item, legendOptions) {
  // If there are sections in this options object, recurse through the section object
  if (legendOptions['sections'] && legendOptions['sections'].length > 0) {
    for (var s = 0; s < legendOptions['sections'].length; s++) {
      if (legendOptions['sections'][s] == item)
        return '[' + s + ']';
      else {
        var itemIndex = this._getIndicesFromItem(item, legendOptions['sections'][s]);
        if (itemIndex)
          return '[' + s + ']' + itemIndex;
      }
    }
    return null;
  }
  // If we found the items list for a section, search the items of this section
  else if (legendOptions['items'] && legendOptions['items'].length > 0) {
    for (var i = 0; i < legendOptions['items'].length; i++) {
      if (legendOptions['items'][i] == item)
        return ':item[' + i + ']';
    }
    return null;
  }
};


/**
 * Returns the index values of the legend item that corresponds to the given series
 * @param {Object} series the chart series object
 * @param {Object} legendOptions the legend options object
 * @return {String} [sectionIndex0] or [sectionIndex0]:item[itemIndex]
 */
DvtLegendAutomation.prototype.getIndicesFromSeries = function(series, legendOptions) {
  // If there are sections in this options object, recurse through the section object
  if (legendOptions['sections'] && legendOptions['sections'].length > 0) {
    for (var s = 0; s < legendOptions['sections'].length; s++) {
      var itemIndex = this.getIndicesFromSeries(series, legendOptions['sections'][s]);
      if (itemIndex)
        return '[' + s + ']' + itemIndex;
    }
    return null;
  }
  // If we found the items list for a section, search the items of this section
  else if (legendOptions['items'] && legendOptions['items'].length > 0) {
    for (var i = 0; i < legendOptions['items'].length; i++) {
      if (legendOptions['items'][i]['text'] == series['name'])
        return ':item[' + i + ']';
    }
    return null;
  }
};


/**
 * Returns the legend item for the given subId
 * @param {Object} options the legend options object
 * @param {String} subId the subId of the desired legend item
 * @return {Object} the legend item corresponding to the given subId
 */
DvtLegendAutomation.prototype.getLegendItem = function(options, subId) {
  var openParen = subId.indexOf('[');
  var closeParen = subId.indexOf(']');
  if (openParen >= 0 && closeParen >= 0) {
    var index = subId.substring(openParen + 1, closeParen);
    var colonIndex = subId.indexOf(':');
    subId = subId.substring(closeParen + 1);
    var nextOpenParen = subId.indexOf('[');
    var nextCloseParen = subId.indexOf(']');
    // If there is another index layer recurse into the sections object at that index
    if (nextOpenParen >= 0 && nextCloseParen >= 0) {
      return this.getLegendItem(options['sections'][index], subId);
    }
    else { // If we are at the last index return the item/section object at that index
      if (colonIndex == 0)
        return options['items'][index];
      else
        return options['sections'][index];
    }
  }
};


/**
 * Valid subIds inlcude:
 * <ul>
 * <li>section[sectionIndex0]:item[itemIndex]</li>
 * </ul>
 * @override
 * @export
 */
DvtLegendAutomation.prototype.getDomElementForSubId = function(subId) {
  var legendItem = this.getLegendItem(this._options, subId);
  var legendPeers = this._legend.__getObjects();

  // Find the legend object peer for the item indexed by the subId and return the dom element of its displayable
  for (var i = 0; i < legendPeers.length; i++) {
    var item = legendPeers[i].getData();
    if (legendItem == item)
      return legendPeers[i].getDisplayables()[0].getElem();
  }
  return null;
};


/**
 * Returns the legend title. Used for verification.
 * @return {String} The legend title
 * @export
 */
DvtLegendAutomation.prototype.getTitle = function() {
  return this._options['title'];
};


/**
 * Returns an object containing data for a legend item. Used for verification.
 * Valid verification values inlcude:
 * <ul>
 * <li>text</li>
 * </ul>
 * @param {String} subIdPath The array of indices in the subId for the desired legend item
 * @return {Object} An object containing data for the legend item
 * @export
 */
DvtLegendAutomation.prototype.getItem = function(subIdPath) {
  var item;
  var index = subIdPath.shift();
  var options = this._options;
  while (index != undefined) {
    if (subIdPath.length > 0)
      options = options['sections'][index];
    else
      item = options['items'][index];
    index = subIdPath.shift();
  }
  var itemData = {
    'text': item['text'] ? item['text'] : null
  };

  return itemData;
};

/**
 * Returns an object containing data for a legend section. Used for verification.
 * Valid verification values inlcude:
 * <ul>
 * <li>title</li>
 * <li>item</li>
 * <li>section</li>
 * </ul>
 * @param {String} subIdPath The array of indices in the subId for the desired legend section
 * @return {Object} An object containing data for the legend section
 * @export
 */
DvtLegendAutomation.prototype.getSection = function(subIdPath) {
  var section;
  var index = subIdPath.shift();
  var options = this._options;
  while (index != undefined) {
    if (subIdPath.length > 0)
      options = options['sections'][index];
    else
      section = options['sections'][index];
    index = subIdPath.shift();
  }
  var sectionData = {
    'title': section['title'] ? section['title'] : null,
    'items' : section['items'] ? this._generateItemObjects(section['items']) : null,
    'sections': section['sections'] ? this._generateSectionObjects(section['sections']) : null
  };

  return sectionData;
};

/**
 * Returns an array containing data for an array of legend items
 * @param {Array} items The array of legend items
 * @return {Array} An array containing objects with data for each legend item
 * @private
 */
DvtLegendAutomation.prototype._generateItemObjects = function(items) {
  var itemDataArray = [];

  for (var i = 0; i < items.length; i++) {
    itemDataArray.push({'text': items[i]['text']});
  }

  return itemDataArray;
};

/**
 * Returns an array containing data for an array of legend sections
 * @param {Array} sections The array of legend sections
 * @return {Array} An array containing objects with data for each legend section
 * @private
 */
DvtLegendAutomation.prototype._generateSectionObjects = function(sections) {
  var sectionDataArray = [];

  for (var i = 0; i < sections.length; i++) {
    sectionDataArray.push({
      'title': sections[i]['title'] ? sections[i]['title'] : null,
      'items' : sections[i]['items'] ? this._generateItemObjects(sections[i]['items']) : null,
      'sections': sections[i]['sections'] ? this._generateSectionObjects(sections[i]['sections']) : null
    });
  }

  return sectionDataArray;
};
/**
 * Default values and utility functions for component versioning.
 * @class
 * @constructor
 * @extends {DvtBaseComponentDefaults}
 */
var DvtLegendDefaults = function() {
  this.Init({'skyros': DvtLegendDefaults.VERSION_1, 'alta': DvtLegendDefaults.SKIN_ALTA});
};

DvtObj.createSubclass(DvtLegendDefaults, DvtBaseComponentDefaults, 'DvtLegendDefaults');


/**
 * Contains overrides for the 'alta' skin.
 */
DvtLegendDefaults.SKIN_ALTA = {
  'skin': DvtCSSStyle.SKIN_ALTA,
  'textStyle': new DvtCSSStyle("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"),
  'titleStyle': new DvtCSSStyle("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #333333;"),
  'colors': DvtCSSStyle.COLORS_ALTA
};


/**
 * Defaults for version 1.
 */
DvtLegendDefaults.VERSION_1 = {
  'skin': DvtCSSStyle.SKIN_SKYROS,
  'orientation': 'vertical',
  'position': null,
  'backgroundColor': null,
  'borderColor': null,
  'textStyle': new DvtCSSStyle('font-size: 11px; color: #333333;'),
  'titleStyle': new DvtCSSStyle('font-size: 12px; color: #003d5b;'),
  'titleHalign': 'start',
  'hideAndShowBehavior': 'none',
  'hoverBehavior': 'none',
  'scrolling': 'asNeeded',

  // default color ramp, marker shape, and line width, for internal use
  'colors': DvtCSSStyle.COLORS_SKYROS,
  'markerShape': 'square',
  'lineWidth': 3,

  //*********** Internal Attributes *************************************************//
  'layout': {
    // Gap ratio is multiplied against all gap sizes
    'gapRatio': 1.0,
    'outerGapWidth': 3, 'outerGapHeight': 3, // Used by Treemap for legend creation
    'titleGap': 3,
    'markerSize': 10, 'markerGap': 5,
    'rowGap': 0, 'columnGap': 8,
    'sectionGap': 6
  },

  'isLayout': false // true if rendering for layout purposes
};


/**
 * Scales down gap sizes based on the size of the component.
 * @param {object} options The object containing options specifications for this component.
 * @param {Number} defaultSize The default gap size.
 * @return {Number}
 */
DvtLegendDefaults.getGapSize = function(options, defaultSize) {
  return Math.ceil(defaultSize * options['layout']['gapRatio']);
};
/**
 * Event Manager for DvtLegend.
 * @param {DvtLegend} legend
 * @class
 * @extends {DvtEventManager}
 * @constructor
 */
var DvtLegendEventManager = function(legend) {
  this.Init(legend.getCtx(), legend.processEvent, legend);
  this._legend = legend;
};

DvtObj.createSubclass(DvtLegendEventManager, DvtEventManager, 'DvtLegendEventManager');


/**
 * Returns the parameters for the DvtComponentUIEvent for an object with the specified arguments.
 * @param {string} type The type of object that was the target of the event.
 * @param {object} [id] The id of the object, if one exists.
 * @return {object}
 */
DvtLegendEventManager.getUIEventParams = function(type, id) {
  return {'type': type, 'id': id};
};


/**
 * @override
 */
DvtLegendEventManager.prototype.FireUIEvent = function(type, logicalObj) {
  var params = null;
  if (logicalObj instanceof DvtSimpleObjPeer && logicalObj.getParams() != null)
    params = logicalObj.getParams();
  else if (logicalObj instanceof DvtLegendObjPeer)
    params = DvtLegendEventManager.getUIEventParams(DvtLegendConstants.LEGEND_ITEM, logicalObj.getId());

  this.FireEvent(new DvtComponentUIEvent(type, params), this._legend);
};


/**
 * @override
 */
DvtLegendEventManager.prototype.OnClick = function(event) {
  DvtLegendEventManager.superclass.OnClick.call(this, event);

  var obj = this.GetLogicalObject(event.target);
  if (!obj)
    return;

  var hideShow = this.processHideShowEvent(obj);
  var action = this._processActionEvent(obj);

  // If a hide/show or action occurs, the event should not bubble.
  if (hideShow || action)
    event.stopPropagation();
};


/**
 * @override
 */
DvtLegendEventManager.prototype.OnMouseOver = function(event) {
  DvtLegendEventManager.superclass.OnMouseOver.call(this, event);

  var obj = this.GetLogicalObject(event.target);
  if (!obj)
    return;

  // Category Rollover Support.  If rollover occurs, the event should not bubble.
  if (this._processRolloverEvent(obj, true))
    event.stopPropagation();

  // Accessibility Support
  this.UpdateActiveElement(obj);
};


/**
 * @override
 */
DvtLegendEventManager.prototype.OnMouseOut = function(event) {
  DvtLegendEventManager.superclass.OnMouseOut.call(this, event);

  var obj = this.GetLogicalObject(event.target);
  if (!obj)
    return;

  // Category Rollover Support.  If rollover occurs, the event should not bubble.
  if (this._processRolloverEvent(obj, false))
    event.stopPropagation();
};


/**
 * @override
 */
DvtLegendEventManager.prototype.HandleTouchClickInternal = function(evt) {
  var obj = this.GetLogicalObject(evt.target);
  if (!obj)
    return;

  // bug 13810791: if hideAndShow/action is enabled, it takes precedence over series highlighting
  var touchEvent = evt.touchEvent;
  var hideShow = this.processHideShowEvent(obj);
  var action = this._processActionEvent(obj);
  if ((hideShow || action) && touchEvent)
    touchEvent.preventDefault();
};


/**
 * @override
 */
DvtLegendEventManager.prototype.HandleTouchHoverStartInternal = function(event) {
  var obj = this.GetLogicalObject(event.target);
  if (this._processRolloverEvent(obj, true))
    event.stopPropagation();
};

/**
 * @override
 */
DvtLegendEventManager.prototype.HandleTouchHoverEndInternal = function(event) {
  var obj = this.GetLogicalObject(event.target);
  if (this._processRolloverEvent(obj, false))
    event.stopPropagation();
};

/**
 * @override
 */
DvtLegendEventManager.prototype.HandleTouchHoverOverInternal = function(event) {
  var obj = this.GetLogicalObject(event.target);
  if (this._processRolloverEvent(obj, true))
    event.stopPropagation();
};


/**
 * @override
 */
DvtLegendEventManager.prototype.HandleTouchHoverOutInternal = function(event) {
  // Category Rollover Support.  If rollover occurs, the event should not bubble.
  var obj = this.GetLogicalObject(event.target);
  if (this._processRolloverEvent(obj, false))
    event.stopPropagation();
};


/**
 * Processes a hide and show action on the specified legend item.  Returns true if a hide or
 * show has been performed.
 * @param {DvtLegendObjPeer} obj The legend item that was clicked.
 * @return {boolean} True if an event was fired.
 */
DvtLegendEventManager.prototype.processHideShowEvent = function(obj) {
  // Don't continue if not enabled
  if (this._legend.__getOptions()['hideAndShowBehavior'] == 'none')
    return false;

  var categories = obj.getCategories ? obj.getCategories() : null;
  if (!categories || categories.length <= 0)
    return false;


  var dataItem = obj.getData();
  var visibility = dataItem['categoryVisibility'];

  // Update the legend markers
  var displayables = obj.getDisplayables();
  for (var i = 0; i < displayables.length; i++) {
    var displayable = displayables[i];
    if (displayable instanceof DvtMarker) // setHollow is a toggle
      displayable.setHollow(obj.getColor());
    else if (displayable instanceof DvtRect)
      obj.UpdateAriaLabel(displayable);
  }

  // Update the state and create the event
  var id = categories[0];
  if (visibility == 'hidden') {
    // Currently hidden, show
    dataItem['categoryVisibility'] = 'visible';
    this.FireEvent(new DvtCategoryHideShowEvent(DvtCategoryHideShowEvent.TYPE_SHOW, id), this._legend);
  }
  else {
    // Currently visible, hide
    dataItem['categoryVisibility'] = 'hidden';
    this.FireEvent(new DvtCategoryHideShowEvent(DvtCategoryHideShowEvent.TYPE_HIDE, id), this._legend);
  }

  // Return true since an event was fired
  return true;
};


/**
 * Processes an action on the specified legend item.  Returns true if an action event is fired.
 * @param {DvtLegendObjPeer} obj The legend item that was clicked.
 * @return {boolean} True if an event was fired.
 * @private
 */
DvtLegendEventManager.prototype._processActionEvent = function(obj) {
  if (obj && obj.getAction && obj.getAction()) {
    this.FireEvent(new DvtActionEvent(DvtActionEvent.SUBTYPE_ACTION, obj.getAction(), obj.getId()), this._legend);
    return true;
  }
  return false;
};


/**
 * Processes a rollover action on the specified legend item.  Returns true if a rollover
 * event has been fired.
 * @param {DvtLegendObjPeer} obj The legend item that was the target of the event.
 * @param {boolean} bOver True if this is a rollover, false if this is a rollout.
 * @return {boolean} True if an event was fired.
 * @private
 */
DvtLegendEventManager.prototype._processRolloverEvent = function(obj, bOver) {
  // Don't continue if not enabled
  if (this._legend.__getOptions()['hoverBehavior'] == 'none')
    return false;

  var categories = (obj && obj.getCategories) ? obj.getCategories() : null;
  if (!categories || categories.length <= 0)
    return false;

  // Fire the rollover event
  var eventType = bOver ? DvtCategoryRolloverEvent.TYPE_OVER : DvtCategoryRolloverEvent.TYPE_OUT;
  this.FireEvent(new DvtCategoryRolloverEvent(eventType, categories[0]), this._legend);
  return true;
};
/*---------------------------------------------------------------------------------*/
/*  DvtLegendKeyboardHandler     Keyboard handler for Legend                       */
/*---------------------------------------------------------------------------------*/
/**
  *  @param {DvtEventManager} manager The owning DvtEventManager
  *  @param {DvtLegend} legend
  *  @class DvtLegendKeyboardHandler
  *  @extends {DvtKeyboardHandler}
  *  @constructor
  */
var DvtLegendKeyboardHandler = function(manager, legend)
{
  this.Init(manager, legend);
};

DvtObj.createSubclass(DvtLegendKeyboardHandler, DvtKeyboardHandler, 'DvtLegendKeyboardHandler');


/**
 * @override
 */
DvtLegendKeyboardHandler.prototype.Init = function(manager, legend) {
  DvtLegendKeyboardHandler.superclass.Init.call(this, manager);
  this._legend = legend;
};


/**
 * @override
 */
DvtLegendKeyboardHandler.prototype.processKeyDown = function(event) {
  var keyCode = event.keyCode;
  var currentNavigable = this._eventManager.getFocus();

  if (keyCode == DvtKeyboardEvent.TAB) {
    if (currentNavigable) {
      event.preventDefault();
      return currentNavigable;
    }

    // navigate to the default
    var navigables = this._legend.__getObjects();
    if (navigables.length > 0) {
      event.preventDefault();
      return this.getDefaultNavigable(navigables);
    }
  }
  else if (keyCode == DvtKeyboardEvent.ENTER) {
    if (currentNavigable)
      this._legend.__getEventManager().processHideShowEvent(currentNavigable);
  }
  else
    return DvtLegendKeyboardHandler.superclass.processKeyDown.call(this, event);
};
/**
 * Logical object for legend data object displayables.
 * @param {DvtLegend} legend The owning legend instance.
 * @param {array} displayables The array of associated DvtDisplayables.
 * @param {string} id The id of the legend item.
 * @param {string} tooltip The tooltip of the legend item.
 * @class
 * @constructor
 * @implements {DvtLogicalObject}
 * @implements {DvtCategoricalObject}
 */
var DvtLegendObjPeer = function(legend, displayables, id, tooltip) {
  this.Init(legend, displayables, id, tooltip);
};

DvtObj.createSubclass(DvtLegendObjPeer, DvtObj, 'DvtLegendObjPeer');


/**
 * @param {DvtLegend} legend The owning legend instance.
 * @param {array} displayables The array of associated DvtDisplayables.
 * @param {object} item The definition of the legend item.
 * @param {string} tooltip The tooltip of the legend item.
 */
DvtLegendObjPeer.prototype.Init = function(legend, displayables, item, tooltip) {
  this._legend = legend;
  this._displayables = displayables;
  this._item = item;
  this._id = item['id'] ? item['id'] : item['text'];
  this._action = item['action'];
  this._spb = item['_spb']; // popup support
  this._tooltip = tooltip;
  this._isShowingKeyboardFocusEffect = false;

  // Apply the cursor for the action if specified
  if (this._action) {
    for (var i = 0; i < this._displayables.length; i++) {
      this._displayables[i].setCursor(DvtSelectionEffectUtils.getSelectingCursor());
    }
  }
};


/**
 * Creates a data item to identify the specified displayable and registers it with the legend.
 * @param {array} displayables The displayables to associate.
 * @param {DvtLegend} legend The owning legend instance.
 * @param {object} item The definition of the legend item.
 * @param {string} tooltip The tooltip of the legend item.
 * @return {DvtLegendObjPeer}
 */
DvtLegendObjPeer.associate = function(displayables, legend, item, tooltip) {
  // Item must have displayables and an id to be interactive.
  if (!displayables || !item)
    return null;

  // Create the logical object.
  var identObj = new DvtLegendObjPeer(legend, displayables, item, tooltip);

  // Register with the legend
  legend.__registerObject(identObj);

  // Finally associate using the event manager
  for (var i = 0; i < displayables.length; i++)
    legend.__getEventManager().associate(displayables[i], identObj);

  return identObj;
};


/**
 * Returns the data object defining this legend item.
 * @return {object} The data object defining this legend item.
 */
DvtLegendObjPeer.prototype.getData = function() {
  return this._item;
};


/**
 * Returns the primary data color for this legend item.
 * @return {string} The color string.
 */
DvtLegendObjPeer.prototype.getColor = function() {
  return this._item['color'];
};


/**
 * Returns the id for this legend item.
 * @return {object} The id for this legend item.
 */
DvtLegendObjPeer.prototype.getId = function() {
  return this._id;
};

//---------------------------------------------------------------------//
// Rollover and Hide/Show Support: DvtLogicalObject impl               //
//---------------------------------------------------------------------//


/**
 * @override
 */
DvtLegendObjPeer.prototype.getDisplayables = function() {
  return this._displayables;
};

//---------------------------------------------------------------------//
// Rollover and Hide/Show Support: DvtCategoricalObject impl           //
//---------------------------------------------------------------------//


/**
 * @override
 */
DvtLegendObjPeer.prototype.getCategories = function(category) {
  return [this._id];
};


/**
 * @override
 */
DvtLegendObjPeer.prototype.getTooltip = function(target) {
  return this._tooltip;
};


/**
 * Return the action string for the legend item, if any exists.
 * @return {string} the action outcome for the legend item.
 */
DvtLegendObjPeer.prototype.getAction = function() {
  return this._action;
};

//---------------------------------------------------------------------//
// Popup Support: DvtPopupSource impl                                  //
//---------------------------------------------------------------------//


/**
 * @override
 */
DvtLegendObjPeer.prototype.getShowPopupBehaviors = function() {
  return this._spb;
};

/**
 * @override
 */
DvtLegendObjPeer.prototype.getAriaLabel = function() {
  if (this._legend.__getOptions()['hideAndShowBehavior'] != 'none') {
    var bundle = this._legend.__getBundle();
    var states = [bundle.getTranslatedString(this.getData()['categoryVisibility'] == 'hidden' ?
              'STATE_HIDDEN' : 'STATE_VISIBLE')];
    return DvtDisplayable.generateAriaLabel(this.getData()['text'], states, bundle);
  }
  return null;
};

/**
 * Updates the aria label for a map data object
 * @param {DvtDisplayable} displayable The displayable to update
 * @protected
 */
DvtLegendObjPeer.prototype.UpdateAriaLabel = function(displayable) {
  if (!DvtAgent.deferAriaCreation())
    displayable.setAriaProperty('label', this.getAriaLabel());
};


//---------------------------------------------------------------------//
// Keyboard Support: DvtKeyboardNavigable impl                         //
//---------------------------------------------------------------------//
/**
 * @override
 */
DvtLegendObjPeer.prototype.getNextNavigable = function(event) {
  if (event.type == DvtMouseEvent.CLICK)
    return this;

  var navigables = this._legend.__getObjects();
  return DvtKeyboardHandler.getNextNavigable(this, event, navigables);
};


/**
 * @override
 */
DvtLegendObjPeer.prototype.getKeyboardBoundingBox = function(targetCoordinateSpace) {
  if (this._displayables[0])
    return this._displayables[0].getDimensions(targetCoordinateSpace);
  else
    return new DvtRectangle(0, 0, 0, 0);
};

/**
 * @override
 */
DvtLegendObjPeer.prototype.getTargetElem = function() {
  if (this._displayables[0])
    return this._displayables[0].getElem();
  return null;
};

/**
 * @override
 */
DvtLegendObjPeer.prototype.showKeyboardFocusEffect = function() {
  this._isShowingKeyboardFocusEffect = true;
  if (this._displayables[0])
    this._displayables[0].setSolidStroke(DvtAgent.getFocusColor());
};


/**
 * @override
 */
DvtLegendObjPeer.prototype.hideKeyboardFocusEffect = function() {
  this._isShowingKeyboardFocusEffect = false;
  if (this._displayables[0])
    this._displayables[0].setStroke(null);
};


/**
 * @override
 */
DvtLegendObjPeer.prototype.isShowingKeyboardFocusEffect = function() {
  return this._isShowingKeyboardFocusEffect;
};
/**
 * Renderer for DvtLegend.
 * @class
 */
var DvtLegendRenderer = new Object();

DvtObj.createSubclass(DvtLegendRenderer, DvtObj, 'DvtLegendRenderer');

DvtLegendRenderer._DEFAULT_ITEM_WIDTH = 10;
DvtLegendRenderer._MAX_LINE_WIDTH = 5;
DvtLegendRenderer._MAX_LINE_WIDTH_WITH_MARKER = 2;
DvtLegendRenderer._LINE_MARKER_SIZE = 6;


/**
 * Renders the legend.
 * @param {DvtLegend} legend The legend being rendered.
 * @param {DvtRectangle} availSpace The available space.
 * @return {DvtDimension} The dimension of the legend.
 */
DvtLegendRenderer.render = function(legend, availSpace) {
  var options = legend.__getOptions();

  var gapWidth = DvtLegendDefaults.getGapSize(options, options['layout']['outerGapWidth']);
  var gapHeight = DvtLegendDefaults.getGapSize(options, options['layout']['outerGapHeight']);
  var legendSpace = new DvtRectangle(availSpace.x + gapWidth, availSpace.y + gapHeight,
      availSpace.w - 2 * gapWidth, availSpace.h - 2 * gapHeight);

  legend.__setBounds(legendSpace.clone());

  // return if there's no space
  if (legendSpace.w <= 0)
    return new DvtDimension(0, 0);

  var background;
  if (!options['isLayout'])
    background = DvtLegendRenderer._createBackground(legend, availSpace);

  var isHoriz = (options['orientation'] == 'vertical' ? false : true);

  var titleDim = DvtLegendRenderer._renderTitle(legend, options['title'], legendSpace, null);
  legendSpace.y += titleDim.h;
  // Bug 17368977: IE9 attributes slightly too much height for the legend title
  legendSpace.h -= Math.floor(titleDim.h);

  // Row heights are same across all section so just calc once for all sections
  var rowHeight = DvtLegendRenderer._getRowHeight(legend);

  var bScrollable = (options['scrolling'] !== 'off');

  var sectionsDim;
  if (!isHoriz)
    sectionsDim = DvtLegendRenderer._renderVerticalSections(legend, legendSpace, rowHeight, bScrollable);
  else
    sectionsDim = DvtLegendRenderer._renderHorizontalSections(legend, legendSpace, rowHeight);

  var totalDim = titleDim.getUnion(sectionsDim);

  // TODO hzhang Make the reparenting work with a scrollable container and stop illegal private access
  if (legend._scrollableSections.length <= 0) {
    // All objects above are rendered directly into the legend itself.  Reparent to a child container so that we can
    // center the contents.  We need to use a while loop since the child list is being modified.
    var container = new DvtContainer(legend.getCtx());
    while (legend.getNumChildren() > 0) {
      container.addChild(legend.getChildAt(0));
    }
    legend.addChild(container);

    // Center the child container
    // TODO (panho): totalDim.h is incorrect
    container.setTranslateX((availSpace.w - totalDim.w) / 2 - totalDim.x);
    //container.setTranslateY((availSpace.h-totalDim.h)/2 - totalDim.y);
  }

  // Render the background.  This is done here to avoid interfering with the centering of legend content.
  if (background)
    legend.addChildAt(background, 0);

  if (options['isLayout']) {
    // Return the preferred dimension (not the actual one)
    return new DvtDimension(Math.max(titleDim.w, sectionsDim.w) + 2 * gapWidth, totalDim.h + 2 * gapHeight);
  } else {
    // Return the actual dimension
    return new DvtDimension(totalDim.w + 2 * gapWidth, totalDim.h + 2 * gapHeight);
  }
};


/**
 * Creates and returns the legend background/border colors and updates the available space.
 * @param {DvtLegend} legend The legend being rendered.
 * @param {DvtRectangle} availSpace The available space.
 * @return {DvtDisplayable} The background for the legend.
 * @private
 */
DvtLegendRenderer._createBackground = function(legend, availSpace) {
  var options = legend.__getOptions();
  var backgroundColor = options['backgroundColor'];
  var borderColor = options['borderColor'];

  if (backgroundColor || borderColor) {
    var rect = new DvtRect(legend.getCtx(), availSpace.x, availSpace.y, availSpace.w, availSpace.h);

    if (backgroundColor)
      rect.setSolidFill(backgroundColor);
    else
      rect.setInvisibleFill(); // otherwise the borderColor will fill the rect

    if (borderColor) {
      rect.setSolidStroke(borderColor);
      rect.setPixelHinting(true);
    }

    // Associate with logical object to support DvtComponentUIEvent
    var params = DvtLegendEventManager.getUIEventParams(DvtLegendConstants.BACKGROUND);
    legend.__getEventManager().associate(rect, new DvtSimpleObjPeer(null, null, null, params));

    return rect;
  }

  return null;
};


/**
 * Renders the legend title and updates the available space.
 * @param {DvtLegend} legend The legend being rendered.
 * @param {string} titleStr
 * @param {DvtRectangle} availSpace The available space.
 * @param {object} section The section attributes, if this is a section
 * @return {DvtRectangle} The dimension of the title.
 */
DvtLegendRenderer._renderTitle = function(legend, titleStr, availSpace, section) {
  var options = legend.__getOptions();

  if (!titleStr)
    return new DvtRectangle(availSpace.x, availSpace.y, 0, 0);

  // Create the title object and add to legend
  var title = new DvtOutputText(legend.getCtx(), titleStr, availSpace.x, availSpace.y);
  var titleStyle = (section && section['titleStyle']) ? new DvtCSSStyle(section['titleStyle']) : options['titleStyle'];
  title.setCSSStyle(titleStyle);

  if (DvtTextUtils.fitText(title, availSpace.w, availSpace.h, legend)) {
    // Associate with logical object to support DvtComponentUIEvent and tooltips
    var params = DvtLegendEventManager.getUIEventParams(DvtLegendConstants.TITLE);
    legend.__getEventManager().associate(title, new DvtSimpleObjPeer(title.getUntruncatedTextString(), null, null, params));

    // Position the title based on text size and legend position
    var titleDims = title.measureDimensions();
    var gap = DvtLegendDefaults.getGapSize(options, options['layout']['titleGap']);

    if (!options['isLayout']) {
      var titleHalign = (section && section['titleHalign']) ? section['titleHalign'] : options['titleHalign'];
      DvtLayoutUtils.align(availSpace, titleHalign, title, titleDims.w);
    }
    else {
      legend.removeChild(title);
    }

    titleDims.h += gap;
    return titleDims;
  }
  else {
    return new DvtRectangle(availSpace.x, availSpace.y, 0, 0);
  }
};

DvtLegendRenderer._getLegendSections = function(section, sections) {
  var nestedSections = section['sections'];
  sections.push(section);
  if (nestedSections) {
    for (var i = 0; i < nestedSections.length; i++)
      DvtLegendRenderer._getLegendSections(nestedSections[i], sections);
  }
};


/**
 * Renders a vertical legend.
 * @param {DvtLegend} legend The legend being rendered.
 * @param {DvtRectangle} availSpace The available space.
 * @param {number} rowHeight The height of a legend row.
 * @param {boolean} bScrollable Whether the legend may be scrollable.
 * @return {DvtRectangle} The total dimension of the sections
 * @private
 */
DvtLegendRenderer._renderVerticalSections = function(legend, availSpace, rowHeight, bScrollable) {
  var options = legend.__getOptions();
  var sectionHeights = DvtLegendRenderer._calcSectionHeights(legend, availSpace, rowHeight, bScrollable);

  var legendSections = [];
  for (var i = 0; i < options['sections'].length; i++) {
    DvtLegendRenderer._getLegendSections(options['sections'][i], legendSections);
  }

  var numSections = legendSections.length;
  var sectionGap = DvtLegendDefaults.getGapSize(options, options['layout']['sectionGap']);

  var sectionSpace = availSpace.clone();
  var totalDim = null;
  var sectionDim;
  for (i = 0; i < legendSections.length; i++) {
    sectionSpace.h = sectionHeights[i];
    sectionDim = DvtLegendRenderer._renderSection(legend, legendSections[i], i, sectionSpace, rowHeight, bScrollable);
    if (i != numSections - 1 && legendSections[i]['items'])
      sectionSpace.y += sectionDim.h + sectionGap;
    totalDim = totalDim ? totalDim.getUnion(sectionDim) : sectionDim;
  }

  return totalDim;
};


/**
 * Renders a horizontal legend.
 * @param {DvtLegend} legend The legend being rendered.
 * @param {DvtRectangle} availSpace The available space.
 * @param {number} rowHeight The height of a legend row.
 * @return {DvtRectangle} The total dimension of the sections
 * @private
 */
DvtLegendRenderer._renderHorizontalSections = function(legend, availSpace, rowHeight) {
  // TODO (panho): Clean up this function
  // TODO (panho): Fix section width calculation

  var options = legend.__getOptions();
  var isRTL = DvtAgent.isRightToLeft(legend.getCtx());

  var legendWidth = 0;
  var legendSections = [];
  for (var i = 0; i < options['sections'].length; i++)
    DvtLegendRenderer._getLegendSections(options['sections'][i], legendSections);
  var numSections = legendSections.length;

  var totalItems = 0;
  for (var j = 0; j < legendSections.length; j++) {
    if (legendSections[j]['items'])
      totalItems += legendSections[j]['items'].length;
  }

  var sectionGap = DvtLegendDefaults.getGapSize(options, options['layout']['sectionGap']);
  var maxWidth = availSpace.w - sectionGap * (numSections - 1);

  var sectionSpace;    // avail space for the section
  var sectionMaxWidth; // maximum width of the section
  var sectionDim;      // actual dim of the section
  var totalDim;        // total dim of the sections

  // Pass in a percentage of max height/width based on proportion that legend section items account for
  if (options['sections']) {
    var nestedSectionCounter = 0;
    var outerSectionTitleHeight = 0;
    for (var i = 0; i < numSections; i++) {
      // Compute the available space for this section
      sectionSpace = availSpace.clone();
      var sectionItems = legendSections[i]['items'];
      if (sectionItems) {
        sectionMaxWidth = Math.round((sectionItems.length / totalItems) * maxWidth);
        sectionSpace.w = sectionMaxWidth;
        if (isRTL) {
          sectionSpace.x = availSpace.x + availSpace.w - legendWidth - sectionSpace.w;
        } else {
          sectionSpace.x = availSpace.x + legendWidth;
        }
        if (nestedSectionCounter > 0) {
          sectionSpace.y += outerSectionTitleHeight;
          sectionSpace.h -= outerSectionTitleHeight;
        }

        sectionDim = DvtLegendRenderer._renderSection(legend, legendSections[i], i, sectionSpace, rowHeight, false);
        if (nestedSectionCounter > 0) {
          sectionSpace.h += outerSectionTitleHeight;
          nestedSectionCounter--;
        }
        legendWidth += sectionDim.w;
        if (i != numSections - 1) {
          legendWidth += sectionGap;
        }
      }
      else { // Render section title for nested sections
        sectionSpace.w = availSpace.w - legendWidth;
        if (isRTL) {
          sectionSpace.x = availSpace.x;
        } else {
          sectionSpace.x = availSpace.x + legendWidth;
        }
        sectionDim = DvtLegendRenderer._renderSection(legend, legendSections[i], i, sectionSpace, rowHeight, false);
        outerSectionTitleHeight = sectionDim.h;
        nestedSectionCounter = legendSections[i]['sections'].length;
      }

      totalDim = totalDim ? totalDim.getUnion(sectionDim) : sectionDim;
    }
  }

  return totalDim;
};


/**
 * Renders the specified section.
 * @param {DvtLegend} legend The legend being rendered.
 * @param {object} section The data for the section to render.
 * @param {number} sectionIndex The index of the section being rendered.
 * @param {DvtRectangle} availSectionSpace The available space.
 * @param {number} rowHeight The height of a legend row.
 * @param {boolean} bScrollable True if scrolling is allowed.
 * @return {DvtRectangle} The dim of the section
 * @private
 */
DvtLegendRenderer._renderSection = function(legend, section, sectionIndex, availSectionSpace, rowHeight, bScrollable) {
  // TODO (panho): Clean up this method
  // TODO (panho): Set the column widths optimally

  // Section must exist to be rendered
  if (!section)
    return;

  var availSpace = availSectionSpace.clone();

  // Cache useful fields
  var options = legend.__getOptions();
  var context = legend.getCtx();
  var initAvailY = availSpace.y;
  var markerSize = options['layout']['markerSize'];
  var markerGap = DvtLegendDefaults.getGapSize(options, options['layout']['markerGap']);
  var rowGap = DvtLegendDefaults.getGapSize(options, options['layout']['rowGap']);
  var colGap = DvtLegendDefaults.getGapSize(options, options['layout']['columnGap']);

  // Determine legend section title
  var titleDim = DvtLegendRenderer._renderTitle(legend, section['title'], availSpace, section);
  availSpace.y += titleDim.h;

  // See if this is a section group which contains more legend sections
  if (!section['items']) {
    availSpace.h = titleDim.h;
    return;
  }

  //Title should always be on its own row
  availSpace.h -= titleDim.h;
  initAvailY += titleDim.h;

  // Determine needed cols and rows
  var legendInfo = DvtLegendRenderer._calcSectionSpace(legend, availSpace, rowHeight, section['items'], bScrollable);
  var numCols = legendInfo['numCols'];
  var numRows = legendInfo['numRows'];
  var colWidth = legendInfo['width'];

  // Update availSpace with space required for regular or scrollable legend
  var legendHeight = numRows * (rowHeight + rowGap) - rowGap;
  // Bug 1736897: availSpace.h is rounded up to fix bug in IE9 & Chrome
  availSpace.h = Math.ceil(Math.min(availSpace.h, legendHeight) + titleDim.h);
  availSpace.w = (colWidth * numCols) + (colGap * (numCols - 1));

  // No need to render during layout pass
  if (options['isLayout']) {
    if (numRows == 1) {
      var totalWidth = 0;
      for (var i = 0; i < section['items'].length; i++) {
        var item = section['items'][i];
        var itemTextWidth = Math.ceil(DvtLegendRenderer._getTextWidth(legend, item.text));
        totalWidth += itemTextWidth + markerSize + markerGap + colGap;
      }
      availSpace.w = Math.min(availSpace.w, totalWidth - colGap);
    }

    return availSpace;
  }

  // Don't render if not enough space
  if (numRows == 0 || numCols == 0)
    return availSpace;

  // If rendering, check to see if scrolling is allowed. If it is, create a DvtScrollableLegend if needed
  // We currently only support scrolling for vertical legends.
  var scrollableLegend = null;
  var container = legend;
  var fullLegendHeight = numRows * (rowHeight + rowGap) - rowGap + titleDim.h;
  var numItems = section['items'].length;
  if (options['orientation'] === 'vertical' && bScrollable && fullLegendHeight > availSpace.h)
  {
    var handle = DvtLegendRenderer._createHandle(legend, context, availSpace, sectionIndex);
    scrollableLegend = DvtLegendRenderer._createScrollableLegend(legend, context, availSpace, handle, fullLegendHeight, numItems);
    legend.__registerScrollableSection(scrollableLegend);
    container = handle;
  }

  // For text truncation
  var textSpace = colWidth - markerSize - markerGap;

  // For BIDI
  var isRTL = DvtAgent.isRightToLeft(legend.getCtx());

  // Render the items one by one
  var currRow = 0;
  var currCol = 1;

  // Sections with a single row of legend items
  if (numRows == 1) {
    // Calculate the unused space if all space was assigned equally
    var extraTextSpace = 0;
    for (var i = 0; i < numItems; i++) {
      var item = section['items'][i];
      var itemTextWidth = Math.ceil(DvtLegendRenderer._getTextWidth(legend, item.text));
      if (itemTextWidth < textSpace)
        extraTextSpace += textSpace - itemTextWidth;
    }

    for (var i = 0; i < numItems; i++) {
      var item = section['items'][i];

      var markerX = isRTL ? availSpace.x + availSpace.w - markerSize : availSpace.x;
      var textX = isRTL ? availSpace.x + availSpace.w - markerSize - markerGap : availSpace.x + markerSize + markerGap;

      // Create legend marker
      var marker = DvtLegendRenderer._createLegendMarker(legend, markerX, availSpace.y, rowHeight, markerSize, item, i);

      // Create legend text
      var label = item['text'];
      var itemTextWidth = Math.ceil(DvtLegendRenderer._getTextWidth(legend, item.text));
      var text = null;
      if (label) {
        if (itemTextWidth < textSpace) {
          text = DvtLegendRenderer._createLegendText(legend, context, availSpace, textSpace, label, options['textStyle']);
        }
        else {
          text = DvtLegendRenderer._createLegendText(legend, context, availSpace, textSpace + extraTextSpace, label, options['textStyle']);
          if (text != null) {
            itemTextWidth = Math.ceil(DvtLegendRenderer._getTextWidth(legend, text.getTextString()));
            extraTextSpace -= (textSpace - itemTextWidth);
          }

        }

        itemTextWidth = text != null ? Math.ceil(DvtLegendRenderer._getTextWidth(legend, text.getTextString())) : 0;

        if (text) {
          text.setX(textX);
          text.setY(availSpace.y + rowHeight / 2);
          if (isRTL)
            text.alignRight();
        }
      }

      // Add legend marker to legend. Legend text has been added by _createLegendText.
      legend.addChild(marker);

      // Draw a rectangle on top of the legend item.  This rectangle is used for interactivity and to ensure that
      // rollover is smooth when moving across legend items.
      colWidth = itemTextWidth + markerSize + markerGap;
      var startX = Math.min(markerX, textX);
      var itemWidth = (currCol == numCols) ? colWidth : colWidth + colGap;
      var itemRect = new DvtRect(context, startX, availSpace.y, itemWidth, rowHeight);
      itemRect.setInvisibleFill();
      container.addChild(itemRect);

      // Associate for interactivity. Scrollable legend doesn't handle eventing.
      var tooltip = text != null ? text.getUntruncatedTextString() : null;
      var peer = DvtLegendObjPeer.associate([itemRect, marker, text], legend, item, tooltip);

      // Legend item visibility support
      if (item['categoryVisibility'] == 'hidden' && peer)
        marker.setHollow(peer.getColor());

      if (legend.__getOptions()['hideAndShowBehavior'] != 'none') {
        itemRect.setAriaRole('img');
        peer.UpdateAriaLabel(itemRect);
      }

      // Update coordiantes for next row
      availSpace.y += (rowHeight + rowGap);
      currRow++;

      if (currRow === numRows && currCol !== numCols) {
        availSpace.y = initAvailY;
        if (isRTL)
          availSpace.w -= colWidth + colGap;
        else
          availSpace.x += colWidth + colGap;
        currRow = 0;
        currCol++;
      }
    }
  }
  else {
    // iterate through items
    for (var i = 0; i < numItems; i++) {
      var item = section['items'][i];
      var markerX = isRTL ? availSpace.x + availSpace.w - markerSize : availSpace.x;
      var textX = isRTL ? availSpace.x + availSpace.w - markerSize - markerGap : availSpace.x + markerSize + markerGap;

      // Create legend marker
      var marker = DvtLegendRenderer._createLegendMarker(legend, markerX, availSpace.y, rowHeight, markerSize, item, i);

      // Create legend text
      var label = item.text;
      var text = null;
      if (label) {
        text = DvtLegendRenderer._createLegendText(container, context, availSpace, textSpace, label, options['textStyle']);
        if (text) {
          text.setX(textX);
          text.setY(availSpace.y + rowHeight / 2);
          if (isRTL)
            text.alignRight();
        }
      }

      // Add legend items to legend. Legend text has been added by _createLegendText.
      container.addChild(marker);

      // Draw a rectangle on top of the legend item.  This rectangle is used for interactivity and to ensure that
      // rollover is smooth when moving across legend items.
      var startX = Math.min(markerX, textX);
      var itemWidth = (currCol == numCols) ? colWidth : colWidth + colGap;
      var itemRect = new DvtRect(context, startX, availSpace.y, itemWidth, rowHeight);
      itemRect.setInvisibleFill();
      container.addChild(itemRect);

      // Associate for interactivity. Scrollable legend doesn't handle eventing.
      var tooltip = text != null ? text.getUntruncatedTextString() : null;
      var peer = DvtLegendObjPeer.associate([itemRect, marker, text], legend, item, tooltip);

      // For scrollable legend interactivity
      if (scrollableLegend && peer instanceof DvtLegendObjPeer)
        scrollableLegend.__registerObject(peer);

      // Legend item visibility support
      if (item['categoryVisibility'] == 'hidden' && peer)
        marker.setHollow(peer.getColor());

      if (legend.__getOptions()['hideAndShowBehavior'] != 'none') {
        itemRect.setAriaRole('img');
        peer.UpdateAriaLabel(itemRect);
      }

      // Update coordinates for next row
      availSpace.y += (rowHeight + rowGap);
      currRow++;
      if (currRow === numRows && currCol !== numCols) {
        availSpace.y = initAvailY;
        if (isRTL)
          availSpace.w -= colWidth + colGap;
        else
          availSpace.x += colWidth + colGap;
        currRow = 0;
        currCol++;
      }
    }
  }

  // Set the y to the bottom of the section for rendering the next section
  availSpace.y = initAvailY + availSpace.h - titleDim.height;
  return new DvtRectangle(availSectionSpace.x, initAvailY - titleDim.height, availSectionSpace.w, availSpace.h);
};


/**
 * Calculates the heights of the legend sections.
 * @param {DvtLegend} legend The legend being rendered.
 * @param {DvtRectangle} availSpace The available space.
 * @param {number} rowHeight The height of a legend row.
 * @param {boolean} bScrollable True if scrolling is allowed.
 * @return {array} The array of the heights of the sections.
 */
DvtLegendRenderer._calcSectionHeights = function(legend, availSpace, rowHeight, bScrollable) {
  //TODO (panho): Clean up this method
  var options = legend.__getOptions();

  var isLayout = options['isLayout'];
  options['isLayout'] = true;

  var legendHeight = 0;
  var legendWidth = 0;
  var legendX = availSpace.x;
  var legendY = availSpace.y;

  var legendSections = [];
  for (var i = 0; i < options['sections'].length; i++)
    DvtLegendRenderer._getLegendSections(options['sections'][i], legendSections);
  var numSections = legendSections.length;

  var sectionGap = DvtLegendDefaults.getGapSize(options, options['layout']['sectionGap']);
  var maxHeight = availSpace.h - sectionGap * (numSections - 1);
  var maxWidth = availSpace.w;

  var arSectionSpace = [];
  var sectionDim;
  // Give each section max legend space and determine the space needed
  for (var i = 0; i < numSections; i++) {
    availSpace.h = maxHeight;
    availSpace.w = maxWidth;
    sectionDim = DvtLegendRenderer._renderSection(legend, legendSections[i], i, availSpace, rowHeight, bScrollable);
    arSectionSpace[i] = sectionDim.h;
  }

  // Give each section equal space and determine leftover/needed space
  arSectionSpaceNeeded = [];
  numShortSections = 0;
  extraSpace = 0;
  var equalSpace = maxHeight / numSections;
  for (i = 0; i < numSections; i++) {
    var spaceNeeded = arSectionSpace[i] - equalSpace;
    if (spaceNeeded <= 0) {
      arSectionSpaceNeeded[i] = 0;
      extraSpace -= spaceNeeded;// Keep track of unused space
    }
    else {
      arSectionSpace[i] = equalSpace;
      arSectionSpaceNeeded[i] = spaceNeeded;
      numShortSections++;
    }
  }

  // If there is unused space, distribute evenly across all sections that need it until there is no more
  while (extraSpace > 0 && numShortSections > 0) {
    var splitSpace = extraSpace / numShortSections;

    for (i = 0; i < numSections; i++) {
      if (arSectionSpaceNeeded[i] > 0) {
        spaceNeeded = arSectionSpaceNeeded[i] - splitSpace;
        if (spaceNeeded <= 0) {
          arSectionSpace[i] += arSectionSpaceNeeded[i];// Filled space needs, update
          arSectionSpaceNeeded[i] = 0;
          extraSpace = extraSpace - (splitSpace + spaceNeeded);// Keep track of unused space
          numShortSections--;// Decrement sections that still need space
        }
        else {
          arSectionSpace[i] += splitSpace;
          extraSpace -= splitSpace;
          arSectionSpaceNeeded[i] = spaceNeeded;
        }
      }
    }
  }

  // Pre render again in new allocated space
  availSpace.x = legendX;
  availSpace.y = legendY;
  availSpace.w = maxWidth;
  for (i = 0; i < numSections; i++) {
    availSpace.h = arSectionSpace[i];
    DvtLegendRenderer._renderSection(legend, legendSections[i], i, availSpace, rowHeight, bScrollable);
    availSpace.x = legendX;
    legendWidth = Math.max(availSpace.w, legendWidth);
    legendHeight += availSpace.h;
    if (i != numSections - 1) {
      availSpace.y = availSpace.h + legendY + sectionGap;
      legendHeight += sectionGap;
    }
  }

  availSpace.w = legendWidth;
  availSpace.h = legendHeight;
  availSpace.x = legendX;
  availSpace.y = legendY;
  options['isLayout'] = isLayout;

  return arSectionSpace;
};


/**
 * Returns the space required for a legend section.
 * @param {DvtLegend} legend The legend being rendered.
 * @param {DvtRectangle} availSpace The available space.
 * @param {number} rowHeight The height of a legend row.
 * @param {object} items The legend items to be rendered.
 * @param {boolean} bScrollable True if scrolling is allowed.
 * @return {object} Map containing width, rows and columns in the legend.
 * @private
 */
DvtLegendRenderer._calcSectionSpace = function(legend, availSpace, rowHeight, items, bScrollable) {
  var options = legend.__getOptions();

  // Use widest text since using # of chars can be wrong for unicode
  var textWidth = 0;
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var tempWidth = DvtLegendRenderer._getTextWidth(legend, item.text);
    if (tempWidth > textWidth) {
      textWidth = tempWidth;
    }
  }

  // Row variables
  var markerSize = options['layout']['markerSize'];
  var markerGap = DvtLegendDefaults.getGapSize(options, options['layout']['markerGap']);
  var rowGap = DvtLegendDefaults.getGapSize(options, options['layout']['rowGap']);
  var colGap = DvtLegendDefaults.getGapSize(options, options['layout']['columnGap']);

  var numRows;
  var colWidth;
  var numCols;
  var fullColWidth = (options['isLayout'] ? Math.ceil(markerSize + markerGap + textWidth) : availSpace.w);

  var isHoriz = (options['orientation'] == 'vertical' ? false : true);
  if (isHoriz) {
    // For horizontal layouts, try to go all the way across using fullColWidth, if not enough space,
    // maximize depth and then determine cols to reduce text truncation
    var fullNumCols = Math.floor(availSpace.w / fullColWidth);
    numCols = Math.min(fullNumCols, items.length);
    numRows = Math.ceil((((fullColWidth + colGap) * items.length) - colGap) / availSpace.w);
    if ((numRows * (rowHeight + rowGap)) - rowGap > availSpace.h) {
      // Bug 17369106: Math.ceil(availSpace.h + rowGap) stops IE9 from calculating numRows as 0
      // so that labels in horizontal lengends with titles get rendered.
      numRows = Math.floor(Math.ceil(availSpace.h + rowGap) / (rowHeight + rowGap));
      numCols = Math.ceil(items.length / numRows);
    }
  }
  else {
    // For scrollable legends, don't wrap legend items into more than one column
    if (bScrollable) {
      numCols = 1;
      numRows = items.length;
    }
    else {
      // For vertical layouts use full depth and then increase cols as necessary
      numRows = Math.min(Math.floor((availSpace.h + rowGap) / (rowHeight + rowGap)), items.length);
      numCols = Math.ceil(items.length / numRows);
    }
  }
  var maxColWidth = (availSpace.w - (colGap * (numCols - 1))) / numCols;
  colWidth = Math.min(fullColWidth, maxColWidth);

  if (colWidth < markerSize)
    return {'width' : 0, 'height' : 0, 'numCols' : 0, 'numRows' : 0};

  return {'width' : colWidth, 'numCols' : numCols, 'numRows' : numRows};
};


/**
 * Returns the height of a single item in the legend.
 * @param {DvtLegend} legend The legend being rendered.
 * @return {number} The height of a legend item.
 */
DvtLegendRenderer._getRowHeight = function(legend) {
  var options = legend.__getOptions();

  // Figure out the legend item height
  var text = new DvtOutputText(legend.getCtx(), 'Test');
  text.setCSSStyle(options['textStyle']);
  text.alignMiddle();
  var dims = DvtTextUtils.guessTextDimensions(text);
  return Math.ceil(Math.max(dims.h, options['layout']['markerSize']));
};


/**
 * Returns the width of a text object in the legend with legend CSS styles applied.
 * @param {DvtLegend} legend The legend being rendered.
 * @param {string} label The text to be rendered.
 * @return {number} The width of the text object.
 */
DvtLegendRenderer._getTextWidth = function(legend, label) {
  var options = legend.__getOptions();

  // Figure out the legend item height
  var text = new DvtOutputText(legend.getCtx(), label);
  text.setCSSStyle(options['textStyle']);
  var dims = text.measureDimensions();
  return dims.w;
};


/**
 * Creates a legend item. Adds the text to the legend if it's not empty.
 * @param {DvtLegend} legend The legend being rendered.
 * @param {DvtContext} context The context in which to create the legend item.
 * @param {DvtRectangle} availSpace The available space.
 * @param {number} textSpace The width allowed for text.
 * @param {String} label The content of the text object.
 * @param {String} style The CSS style string to apply to the text object.
 * @return {DvtText}
 * @private
 */
DvtLegendRenderer._createLegendText = function(legend, context, availSpace, textSpace, label, style) {
  // Draw the legend text.
  var text = new DvtOutputText(context, label);
  text.alignMiddle();
  text.setCSSStyle(style);
  text = DvtTextUtils.fitText(text, textSpace, availSpace.h, legend) ? text : null;
  return text;
};


/**
 * Creates a legend item.
 * @param {DvtLegend} legend The legend being rendered.
 * @param {number} x The x coordinate of the legend marker.
 * @param {number} y The y coordinate of the legend marker.
 * @param {number} rowHeight The height of the legend item.
 * @param {number} markerSize The size of the legend item.
 * @param {object} item The data for the legend item.
 * @param {number} i The index of the legend marker. Used for determining the default color.
 * @return {DvtShape}
 * @private
 */
DvtLegendRenderer._createLegendMarker = function(legend, x, y, rowHeight, markerSize, item, i) {
  // Apply the default styles
  var legendOptions = legend.__getOptions();
  if (!item['markerShape'])
    item['markerShape'] = legendOptions['markerShape'];

  if (!item['color']) {
    var colorRamp = legendOptions['colors'];
    item['color'] = colorRamp[i % colorRamp.length];
  }

  if (!item['lineWidth'])
    item['lineWidth'] = legendOptions['lineWidth'];

  var marker;
  if (item['type'] == 'line') {
    item['lineWidth'] = Math.min(item['lineWidth'], DvtLegendRenderer._MAX_LINE_WIDTH);
    marker = DvtLegendRenderer._createLine(legend.getCtx(), x, y, rowHeight, item);
  }
  else if (item['type'] == 'lineWithMarker') {
    item['lineWidth'] = Math.min(item['lineWidth'], DvtLegendRenderer._MAX_LINE_WIDTH_WITH_MARKER);
    marker = DvtLegendRenderer._createLine(legend.getCtx(), x, y, rowHeight, item);

    // Only create the marker if the legend item corresponds to a visible category
    if (item['categoryVisibility'] != 'hidden')
      marker.addChild(DvtLegendRenderer._createMarker(legend, x, y, rowHeight, DvtLegendRenderer._LINE_MARKER_SIZE, item));
  }
  else {
    marker = DvtLegendRenderer._createMarker(legend, x, y, rowHeight, markerSize, item);
  }
  return marker;
};


/**
 * Creates a marker item.
 * @param {DvtLegend} legend The legend being rendered.
 * @param {number} x The x coordinate of the legend marker.
 * @param {number} y The y coordinate of the legend marker.
 * @param {number} rowHeight The height of the legend item.
 * @param {number} itemSize The size of the legend item
 * @param {object} item The data for the legend item.
 * @return {DvtMarker}
 * @private
 */
DvtLegendRenderer._createMarker = function(legend, x, y, rowHeight, itemSize, item) {
  var context = legend.getCtx();
  var legendOptions = legend.__getOptions();

  // Find the style values
  var itemShape = item['markerShape'];
  var itemColor = item['markerColor'] ? item['markerColor'] : item['color'];
  var itemPattern = item['pattern'];

  // Create the marker
  var markerY = y + (rowHeight - itemSize) / 2;
  var markerX = (item['type'] == 'lineWithMarker' ? x + (DvtLegendRenderer._DEFAULT_ITEM_WIDTH - itemSize) / 2 : x);

  var legendMarker;
  if (itemPattern) {
    // Pattern markers must be translated, since the pattern starts at the origin of the shape
    legendMarker = new DvtMarker(context, itemShape, legendOptions['skin'], 0, 0, itemSize, itemSize);
    legendMarker.setFill(new DvtPatternFill(itemPattern, itemColor, '#FFFFFF'));
    legendMarker.setTranslate(markerX, markerY);
  }
  else {
    legendMarker = new DvtMarker(context, itemShape, legendOptions['skin'], markerX, markerY, itemSize, itemSize);
    legendMarker.setSolidFill(itemColor);
  }

  if (item['borderColor']) {
    var borderWidth = item['_borderWidth'] ? item['_borderWidth'] : 1;
    legendMarker.setSolidStroke(item['borderColor'], null, borderWidth);
  }

  // Use pixel hinting for crisp squares
  if (itemShape == 'square')
    legendMarker.setPixelHinting(true);

  return legendMarker;
};


/**
 * Creates a line item.
 * @param {DvtContext} context The context in which to create the legend item.
 * @param {number} x The x coordinate of the legend marker.
 * @param {number} y The y coordinate of the legend marker.
 * @param {number} rowHeight The height of the legend item.
 * @param {object} item The data for the legend item.
 * @return {DvtLine}
 * @private
 */
DvtLegendRenderer._createLine = function(context, x, y, rowHeight, item) {
  var textY = y + rowHeight / 2;
  var line = new DvtLine(context, x, textY, x + DvtLegendRenderer._DEFAULT_ITEM_WIDTH, textY);
  var stroke = new DvtSolidStroke(item['color'], 1, item['lineWidth']);

  // Set the line style. The size and the spacing of the dash/dot has to be shrunk so that it's readable inside the 10px box.
  var style = item['lineStyle'];
  if (style == 'dashed')
    stroke.setType(DvtStroke.convertTypeString(style), '4,2,4');
  else if (style == 'dotted')
    stroke.setType(DvtStroke.convertTypeString(style), '2');

  line.setStroke(stroke);
  line.setPixelHinting(true);
  return line;
};


/**
 * Creates a handle for a scrollable legend.
 * @param {DvtLegend} legend The legend being rendered
 * @param {DvtContext} context The context in which to create the legend item.
 * @param {DvtRectangle} availSpace The available space.
 * @param {String} id The handle id.
 * @return {DvtHandle}
 * @private
 */
DvtLegendRenderer._createHandle = function(legend, context, availSpace, id) {
  var boundRect = [availSpace.x, availSpace.y, availSpace.x + availSpace.w, availSpace.y + availSpace.h];
  var clipRect = availSpace.clone();
  var clipId = legend.getId() + '_' + id;
  var handle = new DvtHandle(context, 'legendHandler', boundRect, clipRect, clipId);
  legend.addChild(handle);
  return handle;
};


/**
 * Creates a scrollable legend and registers it with the parent legend container.
 * @param {DvtLegend} legend The legend being rendered.
 * @param {DvtContext} context The context in which to create the legend item.
 * @param {DvtRectangle} availSpace The available space.
 * @param {DvtHandle} handle The legend handle to associate with.
 * @param {number} legendHeight The height of all the legend items.
 * @param {number} numItems The number of legend rows.
 * @return {DvtScrollableLegend}
 * @private
 */
DvtLegendRenderer._createScrollableLegend = function(legend, context, availSpace, handle, legendHeight, numItems) {
  var scrollableLegend = new DvtScrollableLegend(context, availSpace.x, availSpace.y, availSpace.w, availSpace.h, legendHeight, handle, numItems);
  scrollableLegend.setTouchManager(legend.__getEventManager().getTouchManager());
  legend.addChild(scrollableLegend);
  handle.render();// rendering must occur after scrollabe legend has created and set the clip path on the handle
  return scrollableLegend;
};
});