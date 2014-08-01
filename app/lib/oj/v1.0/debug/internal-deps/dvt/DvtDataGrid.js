define([], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
  // Create DvtObj so that it will be able to export the classes as needed.
  this.DvtObj = function() {};
  this.DvtObj['owner'] = window;
  
  /**
 * This class contains all utility methods used by the Grid.
 * @constructor
 */
function DvtDataGridUtils(dataGrid)
{
    this.scrollbarSize = -1;
    this.dataGrid = dataGrid;

    var userAgent = (navigator && navigator.userAgent) ? navigator.userAgent.toLowerCase() : null;
    
    this.os = this._determineOS(userAgent);
    this.platform = this._determinePlatform(userAgent);
}

// Platform Constants
DvtDataGridUtils.IE_PLATFORM = "ie";
DvtDataGridUtils.GECKO_PLATFORM = "gecko";
DvtDataGridUtils.WEBKIT_PLATFORM = "webkit";
DvtDataGridUtils.UNKNOWN_PLATFORM = "unknown";

// OS Constants
DvtDataGridUtils.WINDOWS_OS = "Windows";
DvtDataGridUtils.SOLARIS_OS = "Solaris";
DvtDataGridUtils.MAC_OS = "Mac";
DvtDataGridUtils.UNKNOWN_OS = "Unknown";

// @internal
DvtDataGridUtils.prototype.calculateScrollbarSize = function()
{
    // Create the measurement node
    var scrollDiv = document.createElement("div");
    scrollDiv.style.cssText = "width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px;";
    document.body.appendChild(scrollDiv);

    // Get the scrollbar width/height
    this.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;

    // Delete the DIV 
    document.body.removeChild(scrollDiv);
};

/**
 * Gets the size of the native scrollbar
 */
DvtDataGridUtils.prototype.getScrollbarSize = function()
{
    if (this.scrollbarSize == -1)
    {
        this.calculateScrollbarSize();
    }
    return this.scrollbarSize;
};

/**
 * Determine if the current agent is touch device
 */
DvtDataGridUtils.prototype.isTouchDevice = function()
{
    if (this.isTouch == undefined)
    {
        var agentName = navigator.userAgent.toLowerCase();
        if (agentName.indexOf("mobile") != -1 || agentName.indexOf("android") != -1)
        {
            this.isTouch = true;
        }
        else
        {
            this.isTouch = false;
        }
    }
    return this.isTouch;
};

/**
 * Copied from AdfDhtmlCommonUtils used in Faces
 * Adds a CSS className to the dom node if it doesn't already exist in the classNames list and
 * returns <code>true</code> if the class name was added.
 * @param {HTMLElement} domElement DOM Element to add style class name to
 * @param {string|null} className Name of style class to add
 * @return {boolean} <code>true</code> if the style class was added
 */
DvtDataGridUtils.prototype.addCSSClassName = function(domElement, className)
{
    var added, currentClassName, classNameIndex, newClassName;
    added = false;

    if (className != null)
    {
        currentClassName = domElement.className;

        // get the current location of the className to add in the classNames list
        classNameIndex = DvtDataGridUtils._getCSSClassNameIndex(currentClassName, className);

        // the className doesn't exist so add it
        if (classNameIndex == -1)
        {
            newClassName = currentClassName
                    ? className + " " + currentClassName
                    : className;

            domElement.className = newClassName;

            added = true;
        }
    }

    return added;
};

/**
 * Copied from AdfDhtmlCommonUtils used in Faces
 * Removes a CSS className to the dom node if it existd in the classNames list and
 * returns <code>true</code> if the class name was removed.
 * @param {HTMLElement} domElement DOM Element to remove style class name from
 * @param {string|null} className Name of style class to remove
 * @return {boolean} <code>true</code> if the style class was removed
 */
DvtDataGridUtils.prototype.removeCSSClassName = function(domElement, className)
{
    var removed, currentClassName, classNameIndex, classNameEndIndex, beforestring, afterstring, newClassName;
    removed = false;

    if (className != null)
    {
        currentClassName = domElement.className;

        classNameIndex = DvtDataGridUtils._getCSSClassNameIndex(currentClassName, className);

        // only need to do work if CSS class name is present
        if (classNameIndex != -1)
        {
            classNameEndIndex = classNameIndex + className.length;

            // the new classNames string is the string before our className and leading whitespace plus
            // the string after our className and trailing whitespace
            beforestring = (classNameIndex == 0)
                    ? null
                    : currentClassName.substring(0, classNameIndex);
            afterstring = (classNameEndIndex == currentClassName.length)
                    ? null
                    : currentClassName.substring(classNameEndIndex + 1); // skip space

            if (beforestring == null)
            {
                if (afterstring == null)
                {
                    newClassName = "";
                }
                else
                {
                    newClassName = afterstring;
                }
            }
            else
            {
                if (afterstring == null)
                {
                    newClassName = beforestring;
                }
                else
                {
                    newClassName = beforestring + afterstring;
                }
            }

            domElement.className = newClassName;

            removed = true;
        }
    }

    return removed;
};

/**
 * @param {HTMLElement|Element|EventTarget} domElement DOM Element to check for the style <code>className</code>
 * @param {string} className the CSS className to check for
 * @return {boolean} <code>true</code> if the className is in the element's list of classes
 */
DvtDataGridUtils.prototype.containsCSSClassName = function(domElement, className)
{
    if (className != null)
    {
        return DvtDataGridUtils._getCSSClassNameIndex(domElement.className, className) != -1;
    }
    return false;
};

/**
 * Copied from AdfDhtmlCommonUtils used in Faces
 * Returns the index at which <code>className</code> appears within <code>currentClassName</code>
 * with either a space or the beginning or end of <code>currentClassName</code> on either side.
 * This function optimizes the runtime speed by not creating objects in most cases and assuming
 * 1) It is OK to only check for spaces as whitespace characters
 * 2) It is rare for the searched className to be a substring of another className, therefore
 *    if we get a hit on indexOf, we have almost certainly found our className
 * 3) It is even rarer for the searched className to be a substring of more than one className,
 *    therefore, repeating the search from the end of the string should almost always either return
 *    our className or the original search hit from indexOf
 * @param {string} currentClassName Space-separated class name string to search
 * @param {string} className string to search for within currentClassName
 * @return {number} index of className in currentClassName, or -1 if it doesn't exist
 */
DvtDataGridUtils._getCSSClassNameIndex = function(currentClassName, className)
{
    var classNameLength, currentClassNameLength, nameIndex, hasStart, endIndex, hasEnd, lastNameIndex;
    // if no current class
    // SVG element className property is not of type string
    if (!currentClassName || !currentClassName.indexOf)
    {
        return -1;
    }

    // if the strings are equivalent, then the start index is the beginning of the string
    if (className === currentClassName)
    {
        return 0;
    }

    classNameLength = className.length;
    currentClassNameLength = currentClassName.length;

    // check if our substring exists in the string at all
    nameIndex = currentClassName.indexOf(className);

    // if our substring exists then our class exists if either:
    // 1) It is at the beginning of the classNames string and has a following space
    // 2) It is at the end of the classNames string and has a leading space
    // 3) It has a space on either side
    if (nameIndex >= 0)
    {
        hasStart = (nameIndex == 0) || (currentClassName.charAt(nameIndex - 1) == " ");
        endIndex = nameIndex + classNameLength;
        hasEnd = (endIndex == currentClassNameLength) || (currentClassName.charAt(endIndex) == " ");

        //one of the three condition above has been met so our string is in the parent string
        if (hasStart && hasEnd)
        {
            return nameIndex;
        }

        // our substring exists in the parent string but didn't meet the above conditions,  Were
        // going to be lazy and retest, searchig for our substring from the back of the classNames
        // string
        lastNameIndex = currentClassName.lastIndexOf(className);

        // if we got the same index as the search from the beginning then we aren't in here
        if (lastNameIndex != nameIndex)
        {
            // recheck the three match cases
            hasStart = currentClassName.charAt(lastNameIndex - 1);
            endIndex = lastNameIndex + classNameLength;
            hasEnd = (endIndex == currentClassNameLength) || (currentClassName.charAt(endIndex) == " ");

            if (hasStart && hasEnd)
            {
                return lastNameIndex;
            }

            // this should only happen if the searched for className is a substring of more
            // than one className in the classNames list, so it is OK for this to be slow.  We
            // also know at this point that we definitely didn't get a match at either the very
            // beginning or very end of the classNames string, so we can safely append spaces
            // at either end
            return currentClassName.indexOf(" " + className + " ");

        }
    }


    // no match
    return -1;


};

/**
 * Returns either the ctrl key or the command key in Mac OS
 */
DvtDataGridUtils.prototype.ctrlEquivalent = function(event)
{
    var isMac = (this.os === DvtDataGridUtils.MAC_OS);
    return (isMac ? event.metaKey : event.ctrlKey);
};

/**
 * Gets the scroll left of an element.  This method abstracts the inconsistency of scrollLeft
 * behavior in RTL mode between browsers.
 * @param {Element} element the dom element to retrieve scroll left
 * @private
 */
DvtDataGridUtils.prototype.getElementScrollLeft = function(element)
{
    var width, elemWidth;
    if (this.dataGrid.getResources().isRTLMode())
    {
        // see mozilla Bug 383026 scrollLeft property now returns negative values in rtl environment
        if (this.platform == DvtDataGridUtils.GECKO_PLATFORM || this.platform == DvtDataGridUtils.IE_PLATFORM)
            return Math.abs(element['scrollLeft']);
        else
        {
            // webkit browser
            width = this.dataGrid.getScrollableWidth();
            elemWidth = parseInt(element['style']['width'], 10);
            return Math.max(0, width - elemWidth - element['scrollLeft']);
        }
    }

    return element['scrollLeft'];

};

/**
 * Sets the scroll left of an element.  This method abstracts the inconsistency of scrollLeft
 * behavior in RTL mode between browsers.
 * @param {Element} element the dom element to set scroll left
 * @param {Number} scrollLeft the scroll left of the dom element
 * @private
 */
DvtDataGridUtils.prototype.setElementScrollLeft = function(element, scrollLeft)
{
    var width, elemWidth, newPos;
    if (this.dataGrid.getResources().isRTLMode())
    {
        if (this.platform === DvtDataGridUtils.GECKO_PLATFORM)
        {
            // see mozilla Bug 383026 scrollLeft property now returns negative values in rtl environment
            element['scrollLeft'] = 0-scrollLeft;
        }
        else if (this.platform == DvtDataGridUtils.IE_PLATFORM)
        {
            element['scrollLeft'] = scrollLeft;            
        }
        else
        {
            // webkit based browsers
            width = this.dataGrid.getScrollableWidth();
            elemWidth = parseInt(element['style']['width'], 10);
            newPos = width - elemWidth - scrollLeft;
            element['scrollLeft'] = newPos;
        }
    }
    else
    {
        element['scrollLeft'] = scrollLeft;
    }
};

/**
 * Determines the operating system. This value should be cached to prevent costly calculations. This value should be 
 * treated as a guess, as this code is copied from AdfAgent.guessOS().
 * @param {string} userAgent The lowercase user agent string, if available.
 * @return {string} The DvtDataGridUtils.***_OS constant describing the platform.
 * @private
 */
DvtDataGridUtils.prototype._determineOS = function(userAgent)
{  
    if(userAgent) 
    {
        if (userAgent.indexOf('win')!= -1)
            return DvtDataGridUtils.WINDOWS_OS;
        else if (userAgent.indexOf('mac') != -1)
            return DvtDataGridUtils.MAC_OS;
        else if (userAgent.indexOf('sunos') != -1)
            return DvtDataGridUtils.SOLARIS_OS;
    }
  
    return DvtDataGridUtils.UNKNOWN_OS;
};

/**
 * Determines the name of the platform. This value should be cached to prevent costly calculations.
 * Copied from DvtAgent (which itself is copied from AdfAgent)
 * @param {string} userAgent The lowercase user agent string, if available.
 * @return {string} The DvtDataGridUtils.***_PLATFORM constant describing the platform.
 * @private
 */
DvtDataGridUtils.prototype._determinePlatform = function(userAgent)
{  
    if (userAgent) 
    { 
        if(userAgent.indexOf("opera") != -1) // check opera first, since it mimics other browsers
            return DvtDataGridUtils.UNKNOWN_PLATFORM;
        else if (userAgent.indexOf("trident") != -1 || userAgent.indexOf("msie")!= -1)
            return DvtDataGridUtils.IE_PLATFORM;
        else if ((userAgent.indexOf("applewebkit") != -1) || (userAgent.indexOf("safari") != -1))
            return DvtDataGridUtils.WEBKIT_PLATFORM;
        else if(userAgent.indexOf("gecko/") != -1)
            return DvtDataGridUtils.GECKO_PLATFORM;
    }

    return DvtDataGridUtils.UNKNOWN_PLATFORM;
};
/**
 * The DvtDataGridOptions object provides convenient methods to access the options passed to the Grid.
 * @constructor
 * @param {Object=} options -options set on the grid.
 */
function DvtDataGridOptions(options)
{
    this.options = options;
}

/**
 * Helper method to extract properties
 * @param {string=} arg1 - key to extract in object
 * @param {string=} arg2 - key to extract in the value of object[arg1]
 * @param {string=} arg3 - key to extract in the value of object[arg1][arg2]
 * @return {string|number|Object|boolean|null}
 */
DvtDataGridOptions.prototype.extract = function(arg1, arg2, arg3)
{
    var val1, val2;
    if (arg1 != null)
    {
        val1 = this.options[arg1];
        if (arg2 != null && val1 != null)
        {
            val2 = val1[arg2]; 
            if (arg3 != null && val2 != null)
            {
                return val2[arg3];
            }
            return val2;
        }
        return val1;
    }
    return null;
};

/**
 * Evaluate the a function, if it is a constant return it
 * @param {string|number|Object|boolean|null} value - function or string of the raw property
 * @param {Object} obj - object to pass into value if it is a function 
 * @return {string|number|Object|boolean|null} the evaluated value(obj) if value a function, else return value
 */
DvtDataGridOptions.prototype.evaluate = function(value, obj)
{
    if (typeof value == 'function')
    {
        return value.call(this, obj);
    }
    return value;
};

/**
 * Get the property that was set on the option
 * @param {string} prop - the property to get from options
 * @param {string} axis - subobject to get row/column/cell
 * @return {string|number|Object|boolean|null} the raw value of the property
 */
DvtDataGridOptions.prototype.getRawProperty = function(prop, axis)
{
    var arg1, arg2, arg3;
    if (axis == "row" || axis == "column")
    {
        arg1 = "header";
        arg2 = axis;
        arg3 = prop;
    }
    else if (axis == "cell")
    {
        arg1 = "cell";
        arg2 = prop;
    }
    
    return this.extract(arg1, arg2, arg3);
};

/**
 * Get the evaluated property of the options
 * @param {string} prop - the property to get from options
 * @param {string} axis - subobject to get row/column/cell
 * @param {Object} obj - object to pass into property if it is a function 
 * @return {string|number|Object|boolean|null} the evaluated property
 */
DvtDataGridOptions.prototype.getProperty = function(prop, axis, obj)
{
    return this.evaluate(this.getRawProperty(prop, axis), obj);
};

/**
 * Get the null or default value if no value set
 * @param {string|number|Object|boolean|null} value - the value of the property
 * @param {boolean|null} defValue - the default value of the property
 * @return {string|number|Object|boolean|null} - value if not null, defValue if value is null, null if neither null
 */
DvtDataGridOptions.prototype.nullOrDefault = function(value, defValue)
{
    if (value != null)
    {
        return value;
    }
    if (defValue != null)
    {
        return defValue;
    }
    return null;
};

////////////////////////// Grid options /////////////////////////////////

/**
 * Get the row banding interval from the grid options
 * @return {string|number|Object|boolean} the row banding interval
 */
DvtDataGridOptions.prototype.getRowBandingInterval = function()
{
    var bandingInterval = this.extract("bandingInterval", "row");
    if (bandingInterval != null)
    {
        return bandingInterval;
    }
    return 0;
};

/**
 * Get the column banding interval from the grid options
 * @return {string|number|Object|boolean} the column banding interval
*/
DvtDataGridOptions.prototype.getColumnBandingInterval = function()
{
    var bandingInterval = this.extract("bandingInterval", "column");
    if (bandingInterval != null)
    {
        return bandingInterval;
    }
    return 0;
};

/**
 * Get the empty text from the grid options
 * @return {string|number|Object|boolean|null} the empty text
 */
DvtDataGridOptions.prototype.getEmptyText = function()
{
    return this.extract("emptyText");
};

/**
 * Get the horizontal gridlines from the grid options
 * @return {string|number|Object|boolean|null} horizontal gridlines visible/hidden
 */
DvtDataGridOptions.prototype.getHorizontalGridlines = function()
{
    var horizontalGridlines;
    horizontalGridlines = this.extract("gridlines", "horizontal");
    if (horizontalGridlines != null )
    {
        return horizontalGridlines;
    }
    return "visible";
};

/**
 * Get the vertical gridlines from the grid options
 * @return {string|number|Object|boolean|null} vertical gridlines visible/hidden
 */
DvtDataGridOptions.prototype.getVerticalGridlines = function()
{
    var verticalGridlines;
    verticalGridlines = this.extract("gridlines", "vertical");
    if (verticalGridlines != null )
    {
        return verticalGridlines;
    }
    return "visible";
};

/**
 * Get the inital row scroll position from the grid options
 * @return {string|number|Object|boolean|null} index or key of the row to show
 */
DvtDataGridOptions.prototype.getRowScrollPosition = function()
{
    var rowScrollPosition;
    rowScrollPosition = this.extract("scrollPosition", "key", "row");
    if (rowScrollPosition != null)
    {
        return rowScrollPosition;
    }
    return this.extract("scrollPosition", "index", "row");
};

/**
 * Get the inital column scroll position from the grid options
 * @return {string|number|Object|boolean|null} index or key of the column to show
 */
DvtDataGridOptions.prototype.getColumnScrollPosition = function()
{
    var columnScrollPosition;
    columnScrollPosition = this.extract("scrollPosition", "key", "column");
    if (columnScrollPosition != null)
    {
        return columnScrollPosition;
    }
    return this.extract("scrollPosition", "index", "column");
};

/**
 * Get the inital column scroll position from the grid options
 * @return {string|number|Object|boolean|null} index or key of the column to show
 */
DvtDataGridOptions.prototype.getScrollPositionMode = function()
{
    var scrollPosition;
    scrollPosition = this.extract("scrollPosition");
    if (scrollPosition == undefined)
    {
        return null;
    }
    if (scrollPosition['key'] != undefined)
    {
        return 'key';
    }
    if (scrollPosition['index'] != undefined)
    {
        return 'index';
    }    
    return null;
};

/**
 * Get the selection mode cardinality (none, single multiple)
 * @return {string|number|Object|boolean|null} none/single/multiple
 */
DvtDataGridOptions.prototype.getSelectionCardinality = function()
{
    var mode, key, val;
    mode = this.extract("selectionMode");
    if (mode == undefined)
        return "none";

    key = this.getSelectionMode();
    val = mode[key];
    if (val != null)
    {
        return val;
    }
    return "none";
};

/**
 * Get the selection mode (row,cell)
 * @return {string|number|Object|boolean|null} row/cell
 */
DvtDataGridOptions.prototype.getSelectionMode = function()
{
    var mode, cardinality;
    mode = this.extract("selectionMode");
    if (mode == undefined)
        return "cell";

    cardinality = mode['row'];
    if (cardinality != null && cardinality != "none")
    {
        return "row";
    }
    return "cell";
};

////////////////////////// Grid header/cell options /////////////////////////////////
/**
 * Is the given header sortable
 * @param {string} axis - axis to check if sort enabled
 * @param {Object} obj - header context
 * @return {string|number|Object|boolean|null} default or null
 */
DvtDataGridOptions.prototype.isSortable = function(axis, obj)
{
    return this.nullOrDefault(this.getProperty("sortable", axis, obj), false);
};

/**
 * Is the given header resizable
 * @param {string} axis - axis to check if resizing enabled
 * @param {Object} obj - header context
 * @return {string|number|Object|boolean|null} enable, disable, or null
 */
DvtDataGridOptions.prototype.isResizable = function(axis, obj)
{
    // if row header, ensure width does not return a function
    
    // if column header, ensure height does not return a function
    return this.nullOrDefault(this.getProperty("resizable", axis, obj), false);
};

/**
 * Get the inline style property on an object
 * @param {string} axis - axis to get style of
 * @param {Object} obj - context
 * @return {string|number|Object|boolean|null} inline style
 */
DvtDataGridOptions.prototype.getInlineStyle = function(axis, obj)
{
    return this.getProperty("style", axis, obj);
};

/**
 * Get the style class name property on an object
 * @param {string} axis - axis to get class name of
 * @param {Object} obj - context
 * @return {string|number|Object|boolean|null} class name
 */
DvtDataGridOptions.prototype.getStyleClass = function(axis, obj)
{
    return this.getProperty("className", axis, obj);
};

/**
 * Get the renderer of an axis
 * @param {string} axis - axis to get style of
 * @return {string|number|Object|boolean|null} axis renderer
 */
DvtDataGridOptions.prototype.getRenderer = function(axis)
{
    // return type expected to be function, so just return without further
    // evaluation
    return this.getRawProperty("renderer", axis);
};

/**
 * Get the scroll mode
 * @return {string} the scroll mode, which can be either "scroll", "loadMoreOnScroll", "auto".
 */
DvtDataGridOptions.prototype.getScrollPolicy = function()
{
    var mode = this.extract("scrollPolicy");
    if (mode == null)
    {
        mode = "auto";
    }

    return mode;
};
/**
 * Class used to keep track of whcih elements have been resized, has an object 
 * containing two objects 'row' and 'column', which should have objects of 
 * index:{size}. this.sizes = {axis:{index:{size}}}
 * @constructor
 */
function DvtDataGridSizingManager()
{
    this.sizes = {'column':{}, 'row':{}};
}

/**
 * Set a size in the sizes object in the sizing manager
 * @param {string} axis - column/row
 * @param {number} headerIndex - index of the element
 * @param {number} size - the size to put in the object
 */
DvtDataGridSizingManager.prototype.setSize = function(axis, headerKey, size)
{
    this.sizes[axis][headerKey] = size;
};

/**
 * Get a size from the sizing manager for a given axis and index, 
 * @param {string} axis - column/row
 * @param {number} headerIndex - index of the element
 * @return {number|null} a size if it exists
 */
DvtDataGridSizingManager.prototype.getSize = function(axis, headerKey)
{
    if (this.sizes[axis].hasOwnProperty(headerKey)){
        return this.sizes[axis][headerKey];
    }
    return null;
};

/**
 * Empty the sizing manager sizes
 */
DvtDataGridSizingManager.prototype.clear = function()
{
    this.sizes = {'column':{}, 'row':{}};
};
/**
 * Creates a new DataGrid
 * @constructor
 * @export
 */
var DvtDataGrid = function()
{
    // timeout used to trigger cleanup of rows/columns
    this.TIMEOUT = 100;
    this.MAX_COLUMN_THRESHOLD = 20;
    this.MAX_ROW_THRESHOLD = 30;

    this.m_cachedRowHeight = [];
    this.m_cachedColumnWidth = [];
    this.m_utils = new DvtDataGridUtils(this);

    this.m_discontiguousSelection = false;

    //used to know what row and column index is the first element in the cache, tells which columns and rows are in the cache
    this.m_cachedColumnWidthStartIndex = 0;
    this.m_cachedRowHeightStartIndex = 0;
    this.m_sizingManager = new DvtDataGridSizingManager();

    this.m_rowHeaderWidth = null;
    this.m_colHeaderHeight = null;
    
    // a mapping of style class+inline style combo to a dimension
    // to reduce the need to do excessive offsetWidth/offsetHeight
    this.m_styleClassDimensionMap = {};

    this.m_stopDatabodyScroll = false;
    this.m_captureScrolling = false;

    // cached whether row/column count are unknown
    this.m_isEstimateRowCount = undefined;
    this.m_isEstimateColumnCount = undefined;
    this.m_stopRowFetch = false;    
    this.m_stopRowHeaderFetch = false;
    this.m_stopColumnFetch = false;
    this.m_stopColumnHeaderFetch = false;

    this.callbacks = {
    };
};

// constants for key codes
DvtDataGrid.DOWN_KEY = 40;
DvtDataGrid.UP_KEY = 38;
DvtDataGrid.LEFT_KEY = 37;
DvtDataGrid.RIGHT_KEY = 39;
DvtDataGrid.F10_KEY = 121;

// constants for update animation
DvtDataGrid.UPDATE_ANIMATION_FADE_INOUT = 1;
DvtDataGrid.UPDATE_ANIMATION_SLIDE_INOUT = 2;
DvtDataGrid.UPDATE_ANIMATION_DURATION = 250;

/**
 * Sets options on DataGrid
 * @export
 * @param {Object} options - the options to set on the data grid
 */
DvtDataGrid.prototype.SetOptions = function(options)
{
    this.m_options = new DvtDataGridOptions(options);
};

/**
 * Gets options on DataGrid
 * @return {Object} the options set on the data grid
 */
DvtDataGrid.prototype.GetOptions = function()
{
    if (this.m_options == null)
    {
        this.m_options = new DvtDataGridOptions();
    }

    return this.m_options;
};

/**
 * Sets resources on DataGrid
 * @export
 * @param {Object} resources - the resources to set on the data grid
 */
DvtDataGrid.prototype.SetResources = function(resources)
{
    this.m_resources = resources;
};

/**
 * Gets resources from DataGrid
 * @export
 * @return {Object} the resources set on the data grid
 */
DvtDataGrid.prototype.getResources = function()
{
    return this.m_resources;
};

/**
 * Sets the data source on DataGrid
 * @export
 * @param {Object} dataSource - the data source to set on the data grid
 */
DvtDataGrid.prototype.SetDataSource = function(dataSource)
{
    dataSource.on("change", this.handleModelEvent.bind(this), this);
    // if it's not flattened datasource, these will be ignored
    dataSource.on("expand", this.handleExpandEvent.bind(this), this);
    dataSource.on("collapse", this.handleCollapseEvent.bind(this), this);
    
    this.m_dataSource = dataSource;
};

/**
 * Gets the data source from the DataGrid
 * @export
 * @return {Object} the data source set on the data grid
 */
DvtDataGrid.prototype.getDataSource = function()
{
    return this.m_dataSource;
};

/**
 * Register a callback when creating the header context or cell context.
 * @param {function(Object)} callback the callback function to inject addition or modify
 *        properties in the context.
 * @export
 */
DvtDataGrid.prototype.SetCreateContextCallback = function(callback)
{
    this.m_createContextCallback = callback;
};

/**
 * Whether high watermark scrolling is used
 * @return {boolean} true if high watermark scrolling is used, false otherwise
 * @private
 */
DvtDataGrid.prototype._isHighWatermarkScrolling = function()
{
    return (this.m_options.getScrollPolicy() != "scroll");
};

/**
 * Destructor method that should be called when the widget is destroyed. Removes event 
 * listeners on the document.
 * @export
 */
DvtDataGrid.prototype.destroy = function()
{
    delete this.m_fetching;
    document.removeEventListener("mousemove", this.docMouseMoveListener, false);
    document.removeEventListener("mouseup", this.docMouseUpListener, false);
    // unregister all listeners
    this.m_dataSource.off("change", this.handleModelEvent);
    this.m_dataSource.off("expand", this.handleExpandEvent);
    this.m_dataSource.off("collapse", this.handleCollapseEvent);
    
    delete this.m_styleClassDimensionMap;
    this.m_styleClassDimensionMap = {};
};

/**
 * Get the DataGrid root element
 * @return {Element} the root element
 */
DvtDataGrid.prototype.getRootElement = function()
{
    return this.m_root;
};

/**
 * Get the cached width of the root element. If not cached, sets the cached width.
 * @return {number} the cached width of the root element
 * @protected
 */
DvtDataGrid.prototype.getWidth = function()
{
    if (this.m_width == null)
    {
        this.m_width = this.getRootElement()['offsetWidth'];
    }

    return this.m_width;
};

/**
 * Get the cached height of the root element. If not cached, sets the cached height.
 * @return {number} the cached height of the root element
 * @protected
 */
DvtDataGrid.prototype.getHeight = function()
{
    if (this.m_height == null)
    {
        this.m_height = this.getRootElement()['offsetHeight'];
    }

    return this.m_height;
};

/**
 * Gets the scrollable width of the grid.
 * @return {number} the scrollable width of the grid
 * @protected
 */
DvtDataGrid.prototype.getScrollableWidth = function()
{
    var scrollerContent = this.m_scroller['firstChild'];
    return this.getElementWidth(scrollerContent);
};

/**
 * Get the viewport width, which is defined as 1.5 the size of the width of Grid
 * @return {number} the viewport width
 */
DvtDataGrid.prototype.getViewportWidth = function()
{
    var width = this.getWidth();
    return Math.round(width * 1.5);
};

/**
 * Get the viewport height, which is defined as 1.5 the size of the height of Grid
 * @return {number} the viewport height
 */
DvtDataGrid.prototype.getViewportHeight = function()
{
    var height = this.getHeight();
    return Math.round(height * 1.5);
};

/**
 * Calculate the fetch size for rows or columns
 * @param {string} axis - the axis 'row'/'column' to get fetch size on
 * @return {number} the fetch size
 */
DvtDataGrid.prototype.getFetchSize = function(axis)
{
    // get the cached fetch size, this should be clear when the size changes
    if (axis == "row")
    {
        if (this.m_rowFetchSize == null)
        {
            this.m_rowFetchSize = Math.round(this.getViewportHeight() / this.getDefaultRowHeight());
        }

        return this.m_rowFetchSize;
    }
    if (axis == "column")
    {
        if (this.m_columnFetchSize == null)
        {
            this.m_columnFetchSize = Math.round(this.getViewportWidth() / this.getDefaultColumnWidth());
        }
        return this.m_columnFetchSize;
    }

    return 0;
};

/**
 * If the empty text option is 'default' return default empty translated text, 
 * otherwise return the emptyText set in the options 
 * @return {string} the empty text
 */
DvtDataGrid.prototype.getEmptyText = function()
{
    var emptyText, resources;
    emptyText = this.m_options.getEmptyText();
    if (emptyText == null)
    {
        resources = this.getResources();
        emptyText = resources.getTranslatedText("empty");
    }
    return emptyText;
};

/**
 * Determine the size of the buffer that triggers fetching of rows. For example,
 * if the size of the buffer is zero, then the fetch will be triggered when the 
 * scroll position reached the end of where the current range ends
 * @return {number} the row threshold
 */
DvtDataGrid.prototype.getRowThreshold = function()
{
    return 0;
};

/**
 * Determine the size of the buffer that triggers fetching of columns. For example,
 * if the size of the buffer is zero, then the fetch will be triggered when the 
 * scroll position reached the end of where the current range ends.
 * @return {number} the column threshold
 */
DvtDataGrid.prototype.getColumnThreshold = function()
{
    return 0;
};

/**
 * Get the default row height if one is not specified via option
 * If the text height + padding in column headers is greater than 30, use the 
 * offset height of text + padding as default height
 * @return {number} the default row height
 */
DvtDataGrid.prototype.getDefaultRowHeight = function()
{
    var div, divHeight, resources;
    if (this.m_defaultRowHeight == null)
    {
       div = document.createElement('div');
       resources = this.getResources();
       div['className'] = resources.getMappedStyle("colheader") + " " + resources.getMappedStyle("headercell");
       div['style']['visibilty'] = 'hidden';
       div['style']['top'] = '0px';
       div['style']['visibilty'] = '0px';
       div['style']['height'] = 'auto';
       div.innerHTML = 'hq';
       this.m_root.appendChild(div);
       divHeight = div['offsetHeight'];
       this.m_root.removeChild(div);
       this.m_defaultRowHeight = Math.max(divHeight, 30);
    }
    return this.m_defaultRowHeight;
};

/**
 * Get the default column width if one is not specified via option
 * @return {number} the default column width
 */
DvtDataGrid.prototype.getDefaultColumnWidth = function()
{
    return 50;
};

/**
 * Get the border width on the root element, uses 
 * @private
 * @return {number} the border width on the root element
 */
DvtDataGrid.prototype.getRootBorderWidth = function()
{
    if (this.m_rootBorderWidth == null)
    {
        //IE/FF have issues with simply 'border-width'
        this.m_rootBorderWidth = parseInt(document.defaultView.getComputedStyle(this.getRootElement(), null).getPropertyValue('border-top-width'),10);
    }
    return this.m_rootBorderWidth;
}

/**
 * Helper method to construct a key to the StyleClassDimensionMap object
 * @param {Element} elem the element to construct a key for
 * @return {string} the key
 * @private
 */
DvtDataGrid.prototype._getStyleClassDimensionKey = function(elem)
{
    var className, inlineStyle;

    className = elem['className'];
    inlineStyle = elem['style']['cssText'];
    // include inline style as the key if it contains width/height (padding/margin/border too?)
    if (inlineStyle.indexOf('width') > 0 || inlineStyle.indexOf('height') > 0)
    {
        return className.concat(inlineStyle);
    }
    else
    {
        return className;
    }
};

/**
 * Method to determine the height of a row. Checks the sizing manager, then local 
 * cache, then falls back on the deafult.
 * @param {Element} elem - the row to find the height of
 * @param {number} index - the index of the row to find the height of
 * @param {string} key - the key of the row to find the height of
 * @return {number} the height of the row
 */
DvtDataGrid.prototype.getRowHeight = function(elem, index, key)
{
    var rowHeight;
    
    // check sizing manager first
    rowHeight = this.m_sizingManager.getSize('row', key);
    if (rowHeight != null) {
        return rowHeight;
    }    
    // check cache if not in sizing manager 
    rowHeight = this.m_cachedRowHeight[index - this.m_cachedRowHeightStartIndex];
    if (rowHeight == null)
    {
        // check style class mapping
        key = this._getStyleClassDimensionKey(elem);
        rowHeight = this.m_styleClassDimensionMap[key];
        if (rowHeight == null)
        {
            // exhausted all options, use offsetHeight then
            elem['style']['visibility'] = "hidden";
            document.body.appendChild(elem);
            rowHeight = elem['offsetHeight'];
            elem['style']['visibility'] = "visible";

            this.m_styleClassDimensionMap[key] = rowHeight;
        }
    }
    else
    {
        return rowHeight;
    }

    if (rowHeight === 0)
    {
        rowHeight = this.getDefaultRowHeight();
    }

    if (index - this.m_cachedRowHeightStartIndex < 0) {
        this.m_cachedRowHeight.unshift(rowHeight);
    } else {
        this.m_cachedRowHeight[index - this.m_cachedRowHeightStartIndex] = rowHeight;
    }
    return rowHeight;
};

/**
 * Method to determine the width of a column. Checks the sizing manager, then local 
 * cache, then falls back on the deafult.
 * @param {Element} elem - the column to find the width of
 * @param {number} index - the index of the column to find the width of
 * @param {string} key - the key of the column to find the width of
 * @return {number} the width of the column
 */
DvtDataGrid.prototype.getColumnWidth = function(elem, index, key)
{
    var columnWidth;
    //check the sizing manager first
    columnWidth = this.m_sizingManager.getSize('column', key);
    if (columnWidth != null) {
        return columnWidth;
    }    
    // check cache if not in sizing manager
    columnWidth = this.m_cachedColumnWidth[index - this.m_cachedColumnWidthStartIndex];
    if (columnWidth == null)
    {
        // check style class mapping
        key = this._getStyleClassDimensionKey(elem);
        columnWidth = this.m_styleClassDimensionMap[key];
        if (columnWidth == null)
        {
            // exhausted all options, use offsetWidth then
            if (elem['style']['width'] === '')
            {
                this.setElementWidth(elem, this.getDefaultColumnWidth());
            }
            elem['style']['visibility'] = "hidden";
            document.body.appendChild(elem);
            columnWidth = elem['offsetWidth'];
            elem['style']['visibility'] = "visible";

            this.m_styleClassDimensionMap[key] = columnWidth;
        }
    }
    else
    {
        return columnWidth;
    }

    if (columnWidth === 0) {
        columnWidth = this.getDefaultColumnWidth();
    }
    if (index - this.m_cachedColumnWidthStartIndex < 0) {
        this.m_cachedColumnWidth.unshift(columnWidth);
    } else {
        this.m_cachedColumnWidth[index - this.m_cachedColumnWidthStartIndex] = columnWidth;
    }

    return columnWidth;
};

/**
 * Helper method to create subid based on the root element's id
 * @param {string} subId - the id to append to the root element id
 * @return {string} the subId to append to the root element id
 */
DvtDataGrid.prototype.createSubId = function(subId)
{
    var id = this.getRootElement()['id'];
    if (id == null)
    {
        id = "";
    }

    return [id, subId].join(":");
};

/**
 * Checks whether header fetching is completed
 * @return {boolean} true if header fetching completed, else false
 */
DvtDataGrid.prototype.isHeaderFetchComplete = function()
{
    return (this.m_fetching['row'] === false && this.m_fetching['column'] === false);
};

/**
 * Checks whether header AND cell fetching is completed
 * @return {boolean} true if header AND cell fetching completed, else false
 */
DvtDataGrid.prototype.isFetchComplete = function()
{
    return (this.isHeaderFetchComplete() && this.m_fetching['cells'] === false);
};

/**
 * Checks whether the given rowIndex is the last row
 * @return {boolean} true if last row
 */
DvtDataGrid.prototype.isLastRow = function(rowIndex)
{
    if (rowIndex === this.getDataSource().getCount("row")-1)
    {
        return true;
    }
    return false;
};

/**
 * Checks whether the given columnINdex is the last column
 * @return {boolean} true if last row
 */
DvtDataGrid.prototype.isLastColumn = function(columnIndex)
{
    if (columnIndex === this.getDataSource().getCount("column")-1)
    {
        return true;
    }
    return false;
};

/**
 * Re-renders the data grid. Resets all the necessary properties.
 * @param {Element} root - the root dom element for the DataGrid.
 * @export
 */
DvtDataGrid.prototype.refresh = function(root)
{
    this.destroy();
    this.m_cachedRowHeight = [];
    this.m_cachedColumnWidth = [];
    this.m_sizingManager.clear();
    this.m_cachedColumnWidthStartIndex = 0;
    this.m_cachedRowHeightStartIndex = 0;    
    this.m_stopDatabodyScroll = false;
    this.m_captureScrolling = false;
    this.m_corner = null;
    this.m_bottomCorner = null;
    this.m_columnHeaderScrollbarSpacer = null;
    this.m_rowHeaderScrollbarSpacer = null;
    this.m_avgRowHeight = undefined;
    this.m_avgColWidth = undefined;
    this.m_colHeader = null;
    this.m_rowHeader = null;
    this.m_databody = null;
    this.m_scroller = null;
    this.m_isEstimateRowCount = undefined;
    this.m_isEstimateColumnCount = undefined;
    this.m_stopRowFetch = false;
    this.m_stopRowHeaderFetch = false;
    this.m_stopColumnFetch = false;
    this.m_stopColumnHeaderFetch = false;
    this.render(root);
};

/**
 * Renders the DataGrid, initializes DataGrid properties.
 * @param {Element} root - the root dom element for the DataGrid.
 * @export
 */
DvtDataGrid.prototype.render = function(root)
{
    this.m_timingStart = new Date();
    this.m_fetching = {
    };

    // since headers and cells are independently fetched, they could be returned
    // at a different time, therefore we'll need var to keep track the current range
    // for each one of them
    this.m_startRow = 0;
    this.m_startCol = 0;
    this.m_endRow = 0;
    this.m_endCol = 0;
    this.m_startRowPixel = 0;
    this.m_startColPixel = 0;
    this.m_endRowPixel = 0;
    this.m_endColPixel = 0;

    this.m_startRowHeader = 0;
    this.m_startColHeader = 0;
    this.m_endRowHeader = 0;
    this.m_endColHeader = 0;
    this.m_startRowHeaderPixel = 0;
    this.m_startColHeaderPixel = 0;
    this.m_endRowHeaderPixel = 0;
    this.m_endColHeaderPixel = 0;

    this.m_currentScrollLeft = 0;
    this.m_currentScrollTop = 0;

    this.buildGrid(root);
};

/**
 * Builds the DataGrid, adds root children (headers, scrollers, databody, corners),
 * initializes event listeners, and sets inital scroll position.
 * @param {Element} root - the root dom element for the DataGrid.
 */
DvtDataGrid.prototype.buildGrid = function(root)
{
    var status, accInfo, stateInfo, rtl, colHeader, rowHeader, scroller, databody, empty, emptyText;
    this.m_root = root;
    this.m_root.className = this.getResources().getMappedStyle("datagrid");
    this.m_root.setAttribute("role", "application");
    this.m_root.setAttribute("aria-labelledby", this.createSubId("info"));

    // not done initializing until initial headers/cells are fetched
    this.m_initialized = false;

    // set a tab index so it can be focus and keyboard navigation to work
    root.tabIndex = 0;

    status = this.buildStatus();
    root.appendChild(status);
    this.m_status = status;

    accInfo = this.buildAccInfo();    
    root.appendChild(accInfo);
    this.m_accInfo = accInfo;

    stateInfo = this.buildStateInfo();    
    root.appendChild(stateInfo);
    this.m_stateInfo = stateInfo;

    if (this.getDataSource() != null) {

        rtl = this.getResources().isRTLMode();
        colHeader = this.buildHeaders("column", this.getResources().getMappedStyle("colheader"));
        rowHeader = this.buildHeaders("row", this.getResources().getMappedStyle("rowheader"));
        scroller = this.buildScroller();
        databody = this.buildDatabody(scroller);

        if (rtl)
        {
            colHeader['style']['direction'] = "rtl";
            databody['style']['direction'] = "rtl";
            scroller['style']['direction'] = "rtl";
        }

        root.appendChild(colHeader);
        root.appendChild(rowHeader);
        root.appendChild(scroller);
        root.appendChild(databody);

        this.m_colHeader = colHeader;
        this.m_rowHeader = rowHeader;
        this.m_databody = databody;
        this.m_scroller = scroller;
                
        // register event listeners
        if (!root.addEventListener)
        {
            // IE8
            databody.attachEvent("onmousewheel", this.handleDatabodyMouseWheel.bind(this));
            databody.attachEvent("onmousedown", this.handleDatabodyMouseDown.bind(this));
            databody.attachEvent("onmousemove", this.handleDatabodyMouseDown.bind(this));
            databody.attachEvent("onmouseup", this.handleDatabodyMouseDown.bind(this));
            root.attachEvent("onkeydown", this.handleDatabodyKeyDown.bind(this));
        }
        else
        {
            databody.addEventListener("mousewheel", this.handleDatabodyMouseWheel.bind(this), false); // it's ok.. we don't support FF3.x (don't recognize mousewheel)
            databody.addEventListener("mousedown", this.handleDatabodyMouseDown.bind(this), false);
            databody.addEventListener("mousemove", this.handleDatabodyMouseMove.bind(this), false);
            databody.addEventListener("mouseup", this.handleDatabodyMouseUp.bind(this), false);
            databody.addEventListener("mouseout", this.handleDatabodyMouseOut.bind(this), false);
            databody.addEventListener("mouseover", this.handleDatabodyMouseOver.bind(this), false);
            root.addEventListener("keydown", this.handleDatabodyKeyDown.bind(this), false);
            root.addEventListener("focus", this.handleFocus.bind(this), false);

            this.m_isResizing = false;
            this.m_resizingElement = null;
            this.m_databodyDragState = false;

            this.docMouseMoveListener = this.handleMouseMove.bind(this);
            this.docMouseUpListener = this.handleMouseUp.bind(this);
            document.addEventListener("mousemove", this.docMouseMoveListener, false);
            document.addEventListener("mouseup", this.docMouseUpListener, false);
            rowHeader.addEventListener("mousedown", this.handleHeaderMouseDown.bind(this), false);
            colHeader.addEventListener("mousedown", this.handleHeaderMouseDown.bind(this), false);
            rowHeader.addEventListener("mouseover", this.handleHeaderMouseOver.bind(this), false);
            colHeader.addEventListener("mouseover", this.handleHeaderMouseOver.bind(this), false);
            rowHeader.addEventListener("mouseout", this.handleHeaderMouseOut.bind(this), false);
            colHeader.addEventListener("mouseout", this.handleHeaderMouseOut.bind(this), false);
            rowHeader.addEventListener("click", this.handleHeaderClick.bind(this), false);
            colHeader.addEventListener("click", this.handleHeaderClick.bind(this), false);

            if (this.m_utils.isTouchDevice())
            {
                databody.addEventListener("touchstart", this.handleTouchStart.bind(this), false);
                databody.addEventListener("touchmove", this.handleTouchMove.bind(this), false);
                databody.addEventListener("touchend", this.handleTouchEnd.bind(this), false);
                databody.addEventListener("touchcancel", this.handleTouchCancel.bind(this), false);
            }
            else
            {
                scroller.addEventListener("mousedown", this.handleScrollerMouseDown.bind(this), false);
                scroller.addEventListener("mouseup", this.handleScrollerMouseUp.bind(this), false);
            }
        }

        // sets accessibility info
        this.populateAccInfo(accInfo);

        // check if data is fetched and size the grid
        if (this.isFetchComplete() && !this.m_initialized)
        {
            this.resizeGrid();
            this.setInitialScrollPosition();
        }
        else if (this.isHeaderFetchComplete() && !this.m_initialized)
        {
            this.resizeHeaders();
        }
    } 
    else 
    {
        //if no datasource render empty text
        emptyText = this.getEmptyText();
        empty = document.createElement("div");
        empty['className'] = this.getResources().getMappedStyle("emptytext");      
        empty.setAttribute("id", this.createSubId("empty"));
        empty.innerHTML = emptyText;
        this.m_root.appendChild(empty);
    }
};

/**
 * Size the headers based on current width and height.
 * @private
 */
DvtDataGrid.prototype.resizeHeaders = function()
{
    var width, height, colHeader, rowHeader, colHeaderHeight, rowHeaderWidth, dir;

    if (this.m_colHeader == null || this.m_rowHeader == null)
    {
        return;
    }

    width = this.getWidth();
    height = this.getHeight();
    colHeader = this.m_colHeader;
    rowHeader = this.m_rowHeader;

    colHeaderHeight = this.getElementHeight(colHeader);
    rowHeaderWidth = this.getElementWidth(rowHeader);

    dir = this.getResources().isRTLMode() ? "right" : "left";
    this.setElementDir(rowHeader, 0, dir);
    this.setElementDir(rowHeader, colHeaderHeight, 'top');
    this.setElementHeight(rowHeader, height - colHeaderHeight);
    this.setElementDir(colHeader, rowHeaderWidth, dir);
    this.setElementWidth(colHeader, width - rowHeaderWidth);

    if (!this.m_utils.isTouchDevice())
    {
        this.buildCorners();
    }
};

/**
 * Size the headers, scroller, databody based on current width and height.
 * @private
 */
DvtDataGrid.prototype.resizeGrid = function()
{
    var width, height, colHeader, rowHeader, scroller, databody,
            colHeaderHeight, rowHeaderWidth, databodyContentWidth, databodyWidth, databodyContentHeight, databodyHeight,
            isTouchDevice, isDatabodyHorizontalScrollbarRequired, isDatabodyVerticalScrollbarRequired, scrollbarSize,
            dir, empty, emptyText, endTime, borderWidth;

    // this is the case where data is ready before dom structure is complete
    if (this.m_databody == null)
    {
        return;
    }

    //need to subtract the border width since we render inside border-box
    borderWidth = this.getRootBorderWidth();
    
    width = this.getWidth() - (2 * borderWidth);
    height = this.getHeight() - (2 * borderWidth);
    colHeader = this.m_colHeader;
    rowHeader = this.m_rowHeader;
    scroller = this.m_scroller;
    databody = this.m_databody;

    // cache these since they will be used in multiple places and we want to minimize reflow
    colHeaderHeight = this.getElementHeight(colHeader);
    rowHeaderWidth = this.getElementWidth(rowHeader);
    databodyContentWidth = this.getElementWidth(databody['firstChild']);
    databodyWidth = Math.min(databodyContentWidth, width - rowHeaderWidth);
    databodyContentHeight = this.getElementHeight(databody['firstChild']);
    databodyHeight = Math.min(databodyContentHeight, height - colHeaderHeight);

    isTouchDevice = this.m_utils.isTouchDevice();
    scrollbarSize = this.m_utils.getScrollbarSize();
    
    //determine which scrollbars are required, if needing one forces need of the other, allows rendering within the root div
    isDatabodyHorizontalScrollbarRequired = this.isDatabodyHorizontalScrollbarRequired(databodyWidth);
    if (isDatabodyHorizontalScrollbarRequired)
    {
        isDatabodyVerticalScrollbarRequired = this.isDatabodyVerticalScrollbarRequired(databodyHeight - scrollbarSize);
    } 
    else 
    {   
        isDatabodyVerticalScrollbarRequired = this.isDatabodyVerticalScrollbarRequired(databodyHeight);
        if (isDatabodyHorizontalScrollbarRequired)
        {   
            isDatabodyHorizontalScrollbarRequired = this.isDatabodyHorizontalScrollbarRequired(databodyWidth - scrollbarSize);
        }
    }
    this.m_hasHorizontalScroller = isDatabodyHorizontalScrollbarRequired;
    this.m_hasVerticalScroller = isDatabodyVerticalScrollbarRequired;

    if (isDatabodyHorizontalScrollbarRequired && isDatabodyVerticalScrollbarRequired)
    {
        databodyHeight -= scrollbarSize;
        databodyWidth -= scrollbarSize;
    }

    dir = this.getResources().isRTLMode() ? "right" : "left";
    this.setElementDir(rowHeader, 0, dir);
    this.setElementDir(rowHeader, colHeaderHeight, 'top');
    this.setElementHeight(rowHeader, databodyHeight);
    this.setElementDir(colHeader, rowHeaderWidth, dir);
    this.setElementWidth(colHeader, databodyWidth);
    this.setElementDir(databody, colHeaderHeight, 'top');
    this.setElementDir(databody, rowHeaderWidth, dir);
    this.setElementWidth(databody, databodyWidth);
    this.setElementHeight(databody, databodyHeight);

    // cache the scroll width and height to minimize reflow
    this.m_scrollWidth = databodyContentWidth - databodyWidth;
    this.m_scrollHeight = databodyContentHeight - databodyHeight;

    //add the scrollbar size if necessary to the scroller size
    if (isDatabodyHorizontalScrollbarRequired)
    {
        databodyHeight += scrollbarSize;
    }
    if (isDatabodyVerticalScrollbarRequired)
    {
        databodyWidth += scrollbarSize;
    }

    this.setElementDir(scroller, colHeaderHeight, 'top');
    this.setElementDir(scroller, rowHeaderWidth, dir);
    this.setElementWidth(scroller, databodyWidth);
    this.setElementHeight(scroller, databodyHeight);

    if (!isTouchDevice)
    {
        this.buildCorners();
    }

    // check if there's no data
    if (!this.m_initialized && this.m_startRow == 0 && this.m_endRow == 0 && this.m_startRowHeader == 0 && this.m_endRowHeader == 0)
    {
        emptyText = this.getEmptyText();
        empty = document.createElement("div");
        empty['className'] = this.getResources().getMappedStyle("emptytext");
        this.setElementDir(empty, colHeaderHeight, 'top');
        empty.innerHTML = emptyText;
        this.m_root.appendChild(empty);
    }
    
    // now we are initialized
    this.m_initialized = true;

    endTime = new Date();
};

/**
 * Build the corners of the grid. If they exist, removes them and rebuilds them.
 * @private
 */
DvtDataGrid.prototype.buildCorners = function() 
{
    var databodyWidth, databodyHeight, scrollbarSize, colHeaderHeight, rowHeaderWidth,
            corner, dir, rowHeaderScrollbarSpacer, columnHeaderScrollbarSpacer, bottomCorner;
    databodyWidth = this.getElementWidth(this.m_databody);
    databodyHeight = this.getElementHeight(this.m_databody);
    scrollbarSize = this.m_utils.getScrollbarSize();
    if (this.m_hasHorizontalScroller)
    {
        databodyHeight += scrollbarSize;
    }
    if (this.m_hasVerticalScroller)
    {
        databodyWidth += scrollbarSize;
    }
    colHeaderHeight = this.getElementHeight(this.m_colHeader);
    rowHeaderWidth = this.getElementWidth(this.m_rowHeader);
    dir = this.getResources().isRTLMode() ? "right" : "left";

    // remove existing corners/spacer elements first
    if (this.m_corner != null)
    {
        this.m_root.removeChild(this.m_corner);
    }

    if (this.m_rowHeaderScrollbarSpacer != null)
    {
        this.m_root.removeChild(this.m_rowHeaderScrollbarSpacer);
    }

    if (this.m_columnHeaderScrollbarSpacer != null)
    {
        this.m_root.removeChild(this.m_columnHeaderScrollbarSpacer);
    }

    if (this.m_bottomCorner != null)
    {
        this.m_root.removeChild(this.m_bottomCorner);
    }

    if (this.m_rowHeader['firstChild']['childNodes'].length !== 1)
    {
        // render corner
        corner = document.createElement("div");
        corner['id'] = this.createSubId("corner");
        corner['className'] = this.getResources().getMappedStyle("topcorner");
        this.setElementWidth(corner, rowHeaderWidth);
        this.setElementHeight(corner, colHeaderHeight);
        this.m_root.appendChild(corner);
        this.m_corner = corner;
    }

    // TODO: need to remove when there is no rowHeader content
    // render scrollbar spacer in row header if needed
    if (this.m_hasHorizontalScroller)
    {
        rowHeaderScrollbarSpacer = document.createElement("div");
        rowHeaderScrollbarSpacer['id'] = this.createSubId("rhSbSpacer");
        rowHeaderScrollbarSpacer['className'] = this.getResources().getMappedStyle("rowheaderspacer");
        this.setElementDir(rowHeaderScrollbarSpacer, (colHeaderHeight + databodyHeight - scrollbarSize), 'top');
        this.setElementDir(rowHeaderScrollbarSpacer, 0, dir);
        this.setElementWidth(rowHeaderScrollbarSpacer, rowHeaderWidth);
        this.setElementHeight(rowHeaderScrollbarSpacer, scrollbarSize);
        this.m_root.appendChild(rowHeaderScrollbarSpacer);
        this.m_rowHeaderScrollbarSpacer = rowHeaderScrollbarSpacer;
    } 
    else 
    {
        this.m_rowHeaderScrollbarSpacer = null;
    }


    // render scrollbar spacer in column header if needed
    if (this.m_hasVerticalScroller)
    {
        columnHeaderScrollbarSpacer = document.createElement("div");
        columnHeaderScrollbarSpacer['id'] = this.createSubId("chSbSpacer");
        columnHeaderScrollbarSpacer['className'] = this.getResources().getMappedStyle("colheaderspacer");
        this.setElementDir(columnHeaderScrollbarSpacer, (rowHeaderWidth + databodyWidth - scrollbarSize), dir);
        this.setElementWidth(columnHeaderScrollbarSpacer, scrollbarSize);
        this.setElementHeight(columnHeaderScrollbarSpacer, colHeaderHeight);
        this.m_root.appendChild(columnHeaderScrollbarSpacer);
        this.m_columnHeaderScrollbarSpacer = columnHeaderScrollbarSpacer;
    } 
    else 
    {
        this.m_columnHeaderScrollbarSpacer = null;
    }

    // render bottom corner (for both scrollbars) if needed
    if (this.m_hasHorizontalScroller && this.m_hasVerticalScroller)
    {
        bottomCorner = document.createElement("div");
        bottomCorner['id'] = this.createSubId("bcorner");
        bottomCorner['className'] = this.getResources().getMappedStyle("bottomcorner");
        this.setElementDir(bottomCorner, (colHeaderHeight + databodyHeight - scrollbarSize), 'top');
        this.setElementDir(bottomCorner, (rowHeaderWidth + databodyWidth - scrollbarSize), dir);
        this.setElementWidth(bottomCorner, scrollbarSize);
        this.setElementHeight(bottomCorner, scrollbarSize);
        this.m_root.appendChild(bottomCorner);
        this.m_bottomCorner = bottomCorner;
    } 
    else 
    {
        this.m_bottomCorner = null;
    }
};

/**
 * Sets the inital scroller postion
 */
DvtDataGrid.prototype.setInitialScrollPosition = function()
{
    var scrollMode, columnScrollPosition, rowScrollPosition, indexes, initialScrollLeft = 0, initialScrollTop = 0;
    scrollMode = this.m_options.getScrollPositionMode();
    if (this.m_scroller != undefined)
    {
        if (scrollMode != null)
        {
            columnScrollPosition = this.m_options.getColumnScrollPosition();
            rowScrollPosition = this.m_options.getRowScrollPosition();
            if (scrollMode === 'key')
            {
                indexes = this.getDataSource().indexes({row:rowScrollPosition, column:columnScrollPosition});
                columnScrollPosition = indexes['column'] === -1 ? 0:indexes['column'];
                rowScrollPosition = indexes['row'] === -1 ? 0:indexes['row'];
            }    
            initialScrollLeft = columnScrollPosition * this.m_avgColWidth;
            initialScrollTop = rowScrollPosition * this.m_avgRowHeight;
        }
        this.m_utils.setElementScrollLeft(this.m_scroller, initialScrollLeft);
        this.m_scroller['scrollTop'] = initialScrollTop;         
    }
};

/**
 * Determine if horizontal scrollbar is needed
 * @param {number|null=} expectedWidth - databody width
 * @return {boolean} true if horizontal scrollbar required
 */
DvtDataGrid.prototype.isDatabodyHorizontalScrollbarRequired = function(expectedWidth)
{
    var databody, scroller, expected;
    // if expected width of the databody is not specified, extract from style
    databody = this.m_databody;
    if (expectedWidth == null)
    {
        expected = this.getElementWidth(databody);
    } else {
        expected = expectedWidth;
    }
    
    scroller = databody['firstChild'];
    if (this.getElementWidth(scroller) > expected)
    {
        return true;
    }
    return false;
};

/**
 * Determine if vertical scrollbar is needed
 * @param {number|null=} expectedHeight - databody height
 * @return {boolean} true if vertical scrollbar required
 * @private
 */
DvtDataGrid.prototype.isDatabodyVerticalScrollbarRequired = function(expectedHeight)
{
    var databody, scroller, expected;
    // if expected height of the databody is not specified, extract from style
    databody = this.m_databody;
    if (expectedHeight == null)
    {
        expected =this.getElementHeight(databody);
    } else {
        expected = expectedHeight;
    }

    scroller = databody['firstChild'];
    if (this.getElementHeight(scroller) > expected)
    {
        return true;
    }
    return false;
};

/**
 * Build a status bar div
 * @return {Element} the root of the status bar
 * @private
 */
DvtDataGrid.prototype.buildStatus = function()
{
    var root = document.createElement("div");
    root['id'] = this.createSubId("status");
    root['className'] = this.getResources().getMappedStyle("status");
    root.setAttribute("role", "status");

    return root;
};

/**
 * Build the offscreen div used by screenreader
 * @return {Element} the root of the accessibility info div
 */
DvtDataGrid.prototype.buildAccInfo = function()
{
    var root = document.createElement("div");
    root['id'] = this.createSubId("info");
    root['className'] = this.getResources().getMappedStyle("info");
    root.setAttribute("role", "status");
    
    return root;
};

/**
 * Build the offscreen div used by screenreader for state information
 * @return {Element} the root of the accessibility state info div
 */
DvtDataGrid.prototype.buildStateInfo = function()
{
    var root = document.createElement("div");
    root['id'] = this.createSubId("state");
    root['className'] = this.getResources().getMappedStyle("info");
    
    return root;
};

/**
 * Sets the text on the offscreen div.  The text contains a summary text describing the grid
 * including structure information
 * @private
 */
DvtDataGrid.prototype.populateAccInfo = function(info)
{
    var datasource, rowCount, colCount, summary, key;

    datasource = this.getDataSource();
    rowCount = datasource.getCount('row');
    colCount = datasource.getCount('column');

    if (!this._isCountUnknown('row') && !this._isCountUnknown('column'))
    {
        key = 'summary-exact';
    }
    else
    {
        key = 'summary-estimate';
    }   

    summary = this.getResources().getTranslatedText(key, [rowCount, colCount]);
    info.innerHTML = summary;
};

/**
 * Determine whether the row/column count is unknown.
 * @param {string} axis the row/column axis
 * @param {boolean} true if the count for the axis is unknown, false otherwise
 * @private
 */
DvtDataGrid.prototype._isCountUnknown = function(axis)
{
    var datasource, rowPrecision, colPrecision, rowCount, colCount;

    datasource = this.getDataSource();
    if (axis === 'row')
    {
         if (this._isEstimateRowCount === undefined)
         {
             rowPrecision = datasource.getCountPrecision('row');
             rowCount = datasource.getCount('row');
             if (rowPrecision === 'estimate' || rowCount < 0)
             {
                 this._isEstimateRowCount = true;
             }
             else
             {
                 this._isEstimateRowCount = false;
             }
         }

         return this._isEstimateRowCount;
    }
    else if (axis === 'column')
    {
         if (this._isEstimateColumnCount === undefined)
         {
             colPrecision = datasource.getCountPrecision('column');
             colCount = datasource.getCount('column');
             if (colPrecision === 'estimate' || colCount < 0)
             {
                 this._isEstimateColumnCount = true;
             }
             else
             {
                 this._isEstimateColumnCount = false;
             }
         }

         return this._isEstimateColumnCount;
    }

    // unrecognize axis, just assume the count is known
    return false;
};

/**
 * Convenient method which returns true if row count is unknown or high watermark scrolling is used.
 * @return {boolean} true if count is unknown or high watermark scrolling is used, false otherwise.
 * @private
 */
DvtDataGrid.prototype._isCountUnknownOrHighwatermark = function(axis)
{
    return (this._isCountUnknown(axis) || this._isHighWatermarkScrolling());
};

/**
 * Build a header div
 * @param {string} axis - 'row' or 'column'
 * @param {string} styleClass - class to set on the header
 * @return {Element} the root of the header
 */
DvtDataGrid.prototype.buildHeaders = function(axis, styleClass)
{
    var root = document.createElement("div");
    root['id'] = this.createSubId(axis + "Header");
    root['className'] = styleClass + " " + this.getResources().getMappedStyle("header");

    this.fetchHeaders(axis, 0, root);

    return root;
};

/**
 * Fetch the headers by calling the fetch headers method on the data source. Pass 
 * callbacks for success and error to the data source.
 * @param {string} axis - 'row' or 'column'
 * @param {number} start - index to start fetching at
 * @param {Element} header - the root element of the axis header
 * @param {number=} fetchSize - number of headers to fetch
 * @param {Object=} callbacks - the optional callbacks to invoke when the fetch success or fail
 * @protected
 */
DvtDataGrid.prototype.fetchHeaders = function(axis, start, header, fetchSize, callbacks)
{
    var axisStart, axisEnd, count, headerRange, successCallback;
    // check if we are already fetching
    if (!this.m_fetching[axis])
    {
        this.m_fetching[axis] = {'start': start};
    }
    else
    {
        return;
    }

    // fetch size could be explicitly specified.  If not, use the calculated one.
    if (fetchSize == undefined)
    {
        fetchSize = this.getFetchSize(axis);

        // ensure we don't fetch more than we should if count is exact
        if (!this._isCountUnknown(axis))
        {
            axisStart = (axis == "row") ? this.m_startRow : this.m_startCol;
            axisEnd = (axis == "row") ? this.m_endRow : this.m_endCol;

            // append to end vs. insert to top
            if (start < axisStart)
            {
                fetchSize = Math.min(fetchSize, axisStart);
            }
            else
            {
                count = this.getDataSource().getCount(axis);
                // count should be > 0 at this point, but add a check just in case
                if (count >= 0)
                {
                    fetchSize = Math.min(fetchSize, Math.max(0, count - axisEnd));
                }
            }
        }
    }

    headerRange = {
        "axis": axis, "start": start, "count": fetchSize, "header": header
    };
    
    // check if overriding callbacks are specified
    if (callbacks != null && callbacks['success'] != null)
    {
        successCallback = callbacks['success'];
    }
    else
    {
        successCallback = this.handleHeadersFetchSuccess;
    }

    this.showStatusText();

    this.getDataSource().fetchHeaders(headerRange, {
        "success": successCallback, "error": this.handleHeadersFetchError
    }, {'success': this, 'error': this});
};

/** 
 * Checks whether header fetch result match the request
 * @param {Object} headerRange the header range for the response
 * @protected
 */
DvtDataGrid.prototype.isHeaderFetchResponseValid = function(headerRange)
{
    var axis, requestStart, responseStart;

    axis = headerRange['axis'];
    requestStart = headerRange['start'];
    responseStart = this.m_fetching[axis]['start'];

    // note we are not checking size since the actual return size might be different
    // then the request size (ex, no more rows)
    return (requestStart == responseStart);
};

/**
 * Handle a successful call to the data source fetchHeaders 
 * @param {Array.<(Object|string)>} results - an array of headers returned from the dataSource
 * @param {Object} headerRange - {"axis":,"start":,"count":,"header":}
 * @protected
 */
DvtDataGrid.prototype.handleHeadersFetchSuccess = function(results, headerRange)
{
    var axis, root, start, count;

    // validate result matches what we currently asks for
    if (!this.isHeaderFetchResponseValid(headerRange))
    {
        // not valid, so ignore result
        return;
    }

    // remove fetching message
    axis = headerRange["axis"];
    this.m_fetching[axis] = false;

    root = headerRange["header"];
    start = headerRange["start"];
    count = this.getDataSource().getCount(axis);

    if (axis === "column")
    {
        this.buildColumnHeaders(root, results, start, count);
    }
    else if (axis === "row")
    {
        this.buildRowHeaders(root, results, start, count);
    }

    if (this.isFetchComplete())
    {
        this.hideStatusText();
        if (!this.m_initialized)
        {
            this.resizeGrid();
            this.setInitialScrollPosition();
        }
    }
    else if (this.isHeaderFetchComplete())
    {
        if (!this.m_initialized)
        {
            this.resizeHeaders();
        }
    }

    if (this.m_initialized)
    {
        // check if we need to sync header scroll position
        this._syncScrollerAndHeaders();
    }    
};

/**
 * Handle an unsuccessful call to the data source fetchHeaders 
 * @param {Error} error - the error returned from the data source
 * @param {Object} headerRange - keys of {axis,start,count,header}
 */
DvtDataGrid.prototype.handleHeadersFetchError = function(error, headerRange)
{
    // remove fetching message
    var axis = headerRange["axis"];
    this.m_fetching[axis] = false;
};

/**
 * Build a header context object for a header and return it
 * @param {string} axis - 'row' or 'column'
 * @param {number} index - the index of the header
 * @param {Object} data - the data the cell contains
 * @param {Object} metadata - the metadata the cell contains
 * @param {Element} elem - the header element
 * @return {Object} the header context object, keys of {axis,index,data,key,datagrid}
 */
DvtDataGrid.prototype.createHeaderContext = function(axis, index, data, metadata, elem)
{
    var headerContext = {
    };
    headerContext['axis'] = axis;
    headerContext['index'] = index;
    headerContext['data'] = data;
    headerContext['datagrid'] = this;
    headerContext['parentElement'] = elem;

    var key = metadata['key'];
    if (key != null)
    {
        headerContext['key'] = key;
        // store the key in the header element for fast retrieval
        elem.setAttribute(this.getResources().getMappedAttribute('key'), key);
    }

    // invoke callback to allow ojDataGrid to change datagrid reference
    if (this.m_createContextCallback != null)
    {
        this.m_createContextCallback.call(this, headerContext);
    }

    return headerContext;
};

/**
 * Build column headers from the header data and start index.
 * @param {Element} headerRoot - the root element of the column headers
 * @param {Array.<Object>} headers - the header data returned from the data source
 * @param {number} start - the column index that the to start building at
 * @param {string} totalCount - the total number of columns in the table
 */
DvtDataGrid.prototype.buildColumnHeaders = function(headerRoot, headerSet, start, totalCount)
{
    var defaultHeight, scroller, renderer, totalColWidth, currentLeft, headerCount, firstHeader, headerClass, 
            dir, i, index, headerData, headerMetadata, headerContext, inlineStyle, styleClass, col, width, avgWidth, sortIndicators, content, sortableAttribute, resizableAttribute;

    defaultHeight = this.getDefaultRowHeight();
    headerCount = headerSet.getCount();

    // check if this is the first time column header is populated
    if (!headerRoot.hasChildNodes())
    {
        // if no column headers
        if (headerCount == 0)
        {
            this.setElementHeight(headerRoot, 0);
        }
        else
        {
            this.setElementHeight(headerRoot, defaultHeight);
        }

        scroller = document.createElement("div");
        scroller['className'] = this.getResources().getMappedStyle("row") + " " +(this.m_utils.isTouchDevice() ? this.getResources().getMappedStyle("scroller-mobile") : this.getResources().getMappedStyle("scroller"));
    }
    else
    {
        // if unknown count and there's no more column, mark it so we won't try to fetch again
        if (headerCount == 0 && this._isCountUnknown("column"))
        {
            this.m_stopColumnHeaderFetch = true;
            return;
        }

        scroller = headerRoot['firstChild'];
    }

    renderer = this.m_options.getRenderer("column");

    totalColWidth = 0;
    if (start < this.m_startColHeader)
    {
        currentLeft = this.m_startColHeaderPixel;
    }
    else
    {
        currentLeft = this.m_endColHeaderPixel;
    }
    firstHeader = scroller['firstChild'];
    headerClass = this.getResources().getMappedStyle("headercell") + " " + this.getResources().getMappedStyle("colheadercell");
    dir = this.getResources().isRTLMode() ? "right" : "left";
    sortableAttribute = this.getResources().getMappedAttribute('sortable');
    resizableAttribute = this.getResources().getMappedAttribute('resizable');
    for (i = 0; i < headerCount; i += 1)
    {
        // if we are building headers on the left, reverse index
        if (start < this.m_startColHeader)
        {
            index = start + headerCount-1-i;
        }
        else
        {
            index = start + i;
        }

        col = document.createElement("div");
        col['id'] = this.createSubId("c"+index);
        
        headerData = headerSet.getData(index);
        headerMetadata = headerSet.getMetadata(index);
        headerContext = this.createHeaderContext("column", index, headerData, headerMetadata, col);

        inlineStyle = this.m_options.getInlineStyle("column", headerContext);
        styleClass = this.m_options.getStyleClass("column", headerContext);
        
        //do not put borders on last header cell
        if (index === totalCount-1)
        {
            if (dir === 'left')
            {
                col['style']['borderRightStyle'] = 'none';
            }
            else
            {
                col['style']['borderLeftStyle'] = 'none';
            }            
        }

        if (inlineStyle != null)
        {
            col['style']['cssText'] = inlineStyle;
        }
        if (styleClass != null)
        {
            col['className'] = headerClass + " " + styleClass;
        }
        else
        {
            col['className'] = headerClass;
        }

        //check to make sure that column header height is only set once from the options
        if (this.m_colHeaderHeight == null && col['style']['height'] != "") 
        {
            this.m_colHeaderHeight = this.getElementHeight(col);
            this.setElementHeight(headerRoot, this.m_colHeaderHeight);
        }
        col['style']['height'] = '100%';

        // determines the width of the column header now that we have the class name 
        // and inline style set
        if (start < this.m_startColHeader) 
        {
            width = this.getColumnWidth(col, start + headerCount - 1 - i, headerContext['key']);
            this.m_cachedColumnWidthStartIndex -= 1;
        } 
        else 
        {
            width = this.getColumnWidth(col, start + i, headerContext['key']);
        }
        // todo: the width should only need to be set if it's been overridden
        this.setElementWidth(col, width);

        // assign left
        if (start < this.m_startColHeader)
        {
            this.setElementDir(col, (currentLeft - width), dir);
        }
        else
        {
            this.setElementDir(col, currentLeft, dir);
        }

        if (this._isHeaderResizeEnabled("column", headerContext))
        {
            col.setAttribute(resizableAttribute, "true");
        }

        if (renderer != null)
        {
            // if an element is returned from the renderer and the parent of that element is null, we will append 
            // the returned element to the parentElement.  If non-null, we won't do anything, assuming that the 
            // rendered content has already added into the DOM somewhere.
            content = renderer.call(this, headerContext);
            if (content != null)
            {
                if (content['parentNode'] === null)
                {
                    col.appendChild(content);
                }
                else if (content['parentNode'] != null)
                {
                    // parent node exists, do nothing
                }                
                else if (content.toString)
                {
                    col.appendChild(document.createTextNode(content.toString()));
                }
            }
        }
        else
        {
            col.appendChild(document.createTextNode(headerData.toString()));
        }
        
        // check if we need to render sort icons
        if (this._isSortEnabled("column", headerContext))
        {
            sortIndicators = this._buildSortIndicators();
            col.appendChild(sortIndicators);
            col.setAttribute(sortableAttribute, "true");
        }

        if (start < this.m_startColHeader)
        {
            currentLeft = currentLeft - width;
        }
        else
        {
            currentLeft = currentLeft + width;
        }
        totalColWidth = totalColWidth + width;

        if (start < this.m_startColHeader)
        {
            scroller.insertBefore(col, firstHeader);
            firstHeader = col;
        }
        else
        {
            scroller.appendChild(col);
        }
    }

    // whether this is adding columns to the left or right
    if (start < this.m_startColHeader)
    {
        // to the left
        this.m_startColHeader = this.m_startColHeader - headerCount;
        this.m_startColHeaderPixel = this.m_startColHeaderPixel - totalColWidth;
    }
    else
    {
        // to the right
        this.m_endColHeader = this.m_endColHeader + headerCount;
        this.m_endColHeaderPixel = this.m_endColHeaderPixel + totalColWidth;
    }

    if (!headerRoot.hasChildNodes())
    {
        headerRoot.appendChild(scroller);
    }

    // adjust column header canvas size if average width has changed
    if (headerCount > 0)
    {
        avgWidth = totalColWidth / headerCount;
        if (this.m_avgColHeaderWidth == 0 || avgWidth != this.m_avgColHeaderWidth)
        {
            this.m_avgColHeaderWidth = avgWidth;
            this.setElementWidth(scroller, (totalCount * avgWidth));
        }
    }

    // stop subsequent fetching if highwatermark scrolling is used and we have reach the last row, flag it.
    if (!this._isCountUnknown("column") && this._isHighWatermarkScrolling() && this.m_endColHeader >= totalCount)
    {
        this.m_stopColumnHeaderFetch = true;
    }
};

/**
 * Build row headers from the header data and start index.
 * @param {Element} headerRoot - the root element of the row headers
 * @param {Array.<Object>} headers - the header data returned from the data source
 * @param {number} start - the row index that the to start building at
 * @param {string} totalCount - the total number of rows in the table
 */
DvtDataGrid.prototype.buildRowHeaders = function(headerRoot, headerSet, start, totalCount)
{
    var defaultHeight, defaultWidth, headerCount, scroller, resizer, renderer, isAppend, top, totalRowHeight, 
            fragment, index, i, headerData, headerMetadata, headerContext, row, headerClass, inlineStyle, height, 
            col, styleClass, prev, resizableAttribute, content;

    defaultHeight = this.getDefaultRowHeight();
    defaultWidth = this.getDefaultColumnWidth();
    headerCount = headerSet.getCount();

    // check if this is the first time row header is populated
    if (!headerRoot.hasChildNodes())
    {
        scroller = document.createElement("div");
        scroller['className'] = this.m_utils.isTouchDevice() ? this.getResources().getMappedStyle("scroller-mobile") : this.getResources().getMappedStyle("scroller");

        if (headerCount == 0)
        {
            this.setElementWidth(headerRoot, 0);
            this.setElementHeight(scroller, 0);
        }
        else
        {
            this.setElementWidth(headerRoot, defaultWidth);
        }

        // TODO: remove the resizer div, but need to be careful as logic still takes the resizer into account when walking dom
        resizer = document.createElement("div");
        resizer['style']['display'] = 'none';
        this.setElementWidth(resizer, 1);
        this.setElementHeight(resizer, 0);

        scroller.appendChild(resizer);
    }
    else
    {
        // if unknown count and there's no more row, mark it so we won't try to fetch again
        if (headerCount == 0 && this._isCountUnknown("row"))
        {
            this.m_stopRowHeaderFetch = true;
            return;
        }

        scroller = headerRoot['firstChild'];
        resizer = scroller['firstChild'];
    }

    renderer = this.m_options.getRenderer("row");

    // whether this is adding rows to bottom (append) or top (insert)
    isAppend = start >= this.m_startRowHeader ? true : false;

    if (isAppend)
    {
        top = this.m_endRowHeaderPixel;
    }
    else
    {
        top = this.m_startRowHeaderPixel;
    }
    
    // if total row count is unknown, then calculate it using current count and fetch count
    if (totalCount == -1)
    {
        totalCount = this.m_endRowHeader + headerCount;
    }
    
    resizableAttribute = this.getResources().getMappedAttribute('resizable');
    totalRowHeight = 0;
    fragment = document.createDocumentFragment();
    for (i = 0; i < headerCount; i += 1)
    {
        if (isAppend)
        {
            index = start+i;
        }
        else
        {
            index = start+(headerCount-1-i);
        }

        row = document.createElement("div");
        row['id'] = this.createSubId("r"+index);

        headerData = headerSet.getData(index);
        headerMetadata = headerSet.getMetadata(index);
        headerContext = this.createHeaderContext("row", index, headerData, headerMetadata, row);

        inlineStyle = this.m_options.getInlineStyle("row", headerContext);
        styleClass = this.m_options.getStyleClass("row", headerContext);
        if (inlineStyle != null)
        {
            row['style']['cssText'] = inlineStyle;
        }
        //check to see that row header width is set only once from the options
        if (this.m_rowHeaderWidth == null && row['style']['width'] != "") {
            this.m_rowHeaderWidth = this.getElementWidth(row);
            this.setElementWidth(headerRoot, this.m_rowHeaderWidth);
        }

        row['className'] = this.getResources().getMappedStyle("row");
        height = this.getRowHeight(row, start + i, headerContext['key']);
        this.setElementHeight(row, height);
        if (isAppend)
        {
            row['style']['top'] = top + 'px';
            top = top + height;
        }
        else
        {
            top = top - height;
            row['style']['top'] = top + 'px';
        }
        col = document.createElement("div");
        headerClass = this.getResources().getMappedStyle("headercell") + " " +this.getResources().getMappedStyle("rowheadercell");
        if (styleClass != null)
        {
            col['className'] = headerClass + " " + styleClass;
        }
        else
        {
            col['className'] = headerClass;
        }
        
        //do not put bottom border on last row
        if (index === totalCount-1)
        {
            col['style']['borderBottomStyle'] = 'none';
        }

        if (this._isHeaderResizeEnabled("row", headerContext))
        {
            col.setAttribute(resizableAttribute, "true");
        }

        if (renderer != null)
        {
            // if an element is returned from the renderer and the parent of that element is null, we will append 
            // the returned element to the parentElement.  If non-null, we won't do anything, assuming that the 
            // rendered content has already added into the DOM somewhere.
            content = renderer.call(this, headerContext);
            if (content != null)
            {
                if (content['parentNode'] === null)
                {
                    col.appendChild(content);
                }
                else if (content['parentNode'] != null)
                {
                    // parent node exists, do nothing
                }                
                else if (content.toString)
                {
                    col.appendChild(document.createTextNode(content.toString()));
                }
            }
        }
        else
        {
            col.appendChild(document.createTextNode(headerData.toString()));
        }

        row.appendChild(col);
        if (isAppend)
        {
            fragment.appendChild(row);
        }
        else
        {
            fragment.insertBefore(row, fragment['firstChild']);
        }
        totalRowHeight = totalRowHeight + height;
    }


    if (isAppend)
    {
        scroller.appendChild(fragment);
        //if appending a row header, make sure the previous fragment has a bottom border if it was the last
        if (this.m_endRowHeader != 0  && headerCount != 0)
        {
            prev = scroller['childNodes'][this.m_endRowHeader];
            if (prev != null)
            {
                prev['firstChild']['style']['borderBottomStyle'] = '';
            }
        }
        this.m_endRowHeader = this.m_endRowHeader + headerCount;
        this.m_endRowHeaderPixel = this.m_endRowHeaderPixel + totalRowHeight;
    }
    else
    {
        // adjust resizer
        this.setElementHeight(resizer, Math.max(0, this.getElementHeight(resizer) - totalRowHeight));
        scroller.insertBefore(fragment, resizer['nextSibling']);  // insert right after the resizer
        this.m_startRowHeader = this.m_startRowHeader - headerCount;
        this.m_startRowHeaderPixel = Math.max(0, this.m_startRowHeaderPixel - totalRowHeight);
    }

    headerRoot.appendChild(scroller);

    // stop subsequent fetching if highwatermark scrolling is used and we have reach the last row, flag it.
    if (!this._isCountUnknown("row") && this._isHighWatermarkScrolling() && this.m_endRowHeader >= totalCount)
    {
        this.m_stopRowHeaderFetch = true;
    }
};

/**
 * Build a scroller div and add scroll listeners  to it
 * @return {Element} the root of the scroller
 */
DvtDataGrid.prototype.buildScroller = function()
{
    var root = document.createElement("div");
    root['id'] = this.createSubId("scroller");
    root['className'] = this.getResources().getMappedStyle("scrollers");
    if (!root.addEventListener)
    {
        root.attachEvent("onscroll", this.handleScroll.bind(this));
    }
    else
    {
        root.addEventListener("scroll", this.handleScroll.bind(this), false);
    }

    return root;
};

/**
 * Build the databody, fetching cells as well
 * @param {Element} scroller - the root of the scroller element
 * @return {Element} the root of databody
 */
DvtDataGrid.prototype.buildDatabody = function(scroller)
{
    var root = document.createElement("div");
    root['id'] = this.createSubId("databody");
    root['className'] = this.getResources().getMappedStyle("databody");

    this.fetchCells(root, scroller, 0, 0);

    return root;
};

/**
 * Fetch cells to put in the databody. Calls fetch cells on the data source, 
 * setting callbacks for success and failure.
 * @param {Element} databody - the root of the databody element
 * @param {Element} scroller - the root of the scroller element
 * @param {number} rowStart - the row to start fetching at
 * @param {number} colStart - the column to start fetching at
 * @param {number|null=} rowCount - the total number of rows in the data source, if undefined then calculated
 * @param {number=} colCount - the total number of columns in the data source, if undefined then calculated
 * @param {callbacks=} callbacks - specifies success and error callbacks.  If undefined then default callbacks are used
 * @protected
 */
DvtDataGrid.prototype.fetchCells = function(databody, scroller, rowStart, colStart, rowCount, colCount, callbacks)
{
    var count, rowRange, columnRange, successCallback;

    // checks if we are already fetching cells
    if (!this.m_fetching['cells'])
    {
        this.m_fetching['cells'] = {'row': rowStart, 'column': colStart};
    }
    else
    {
        return;
    }

    if (rowCount == null)
    {
        rowCount = this.getFetchSize("row");

        // ensure we don't fetch more than we should if count is exact
        if (!this._isCountUnknown("row"))
        {
            // append to end vs. insert to top
            if (rowStart < this.m_startRow)
            {
                rowCount = Math.min(rowCount, this.m_startRow);
            }
            else
            {
                count = this.getDataSource().getCount("row");
                // count should be > 0 at this point, but add a check just in case
                if (count >= 0)
                {
                    rowCount = Math.min(rowCount, Math.max(0, count - this.m_endRow));
                }
            }
        }
    }

    if (colCount == null)
    {
        colCount = this.getFetchSize("column");

        // ensure we don't fetch more than we should if count is exact
        if (!this._isCountUnknown("column"))
        {
            // append to end vs. insert to top
            if (colStart < this.m_startCol)
            {
                colCount = Math.min(colCount, this.m_startCol);
            }
            else
            {
                count = this.getDataSource().getCount("column");
                // count should be > 0 at this point, but add a check just in case
                if (count >= 0)
                {
                    colCount = Math.min(colCount, Math.max(0, count - this.m_endCol));
                }
            }
        }
    }

    rowRange = {
        "axis": "row", "start": rowStart, "count": rowCount
    };
    columnRange = {
        "axis": "column", "start": colStart, "count": colCount, "databody": databody, "scroller": scroller
    };
    
    // if there is a override success callback specified, use it, otherwise use default one
    if (callbacks != null && callbacks['success'] != null)
    {
        successCallback = callbacks['success'];
    }
    else
    {
        successCallback = this.handleCellsFetchSuccess;
    }
    
    this.showStatusText();

    this.getDataSource().fetchCells([rowRange, columnRange], {
        "success": successCallback, "error": this.handleHeadersFetchError
    }, {'success': this, 'error': this});
};

/**
 * Checks whether the response matches the current request
 * @param {Object} cellRange the cell range of the response
 * @protected
 */
DvtDataGrid.prototype.isCellFetchResponseValid = function(cellRange)
{
    var rowRange, responseRowStart, columnRange, responseColumnStart, requestCellRanges, requestRowStart, requestColumnStart;

    rowRange = cellRange[0];
    responseRowStart = rowRange['start'];

    columnRange = cellRange[1];
    responseColumnStart = columnRange['start'];

    requestCellRanges = this.m_fetching['cells'];
    requestRowStart = requestCellRanges['row'];
    requestColumnStart = requestCellRanges['column'];

    // note we are not checking size since the actual return size might be different
    // then the request size (ex, no more rows)
    return (requestRowStart == responseRowStart && requestColumnStart == responseColumnStart);    
};

/**
 * Returns true if this is a long scroll (or initial scroll)
 * @return {boolean} true if it is a long or initial scroll, false otherwise
 */
DvtDataGrid.prototype.isLongScroll = function()
{
    return (this.m_startRowPixel == this.m_endRowPixel && this.m_startColPixel == this.m_endColPixel);
};

/**
 * Checks whether the result is within the current viewport
 * @param {Object} cellSet - a CellSet object which encapsulates the result set of cells
 * @param {Array.<Object>} cellRange - [rowRange, columnRange] - [{"axis":,"start":,"count":},{"axis":,"start":,"count":,"databody":,"scroller":}]
 * @private
 */
DvtDataGrid.prototype.isCellFetchResponseInViewport = function(cellSet, cellRange)
{
    var rowRange, rowStart, rowEnd, columnRange, columnStart, columnEnd, rowStartPixel, rowEndPixel,
        columnStartPixel, columnEndPixel, viewportTop, viewportBottom, viewportLeft, viewportRight, rowCount, columnCount;

    if (isNaN(this.m_avgRowHeight) || isNaN(this.m_avgColWidth))
    {
        // initial scroll these are not defined so just return true
        return true;
    }

    rowRange = cellRange[0];
    rowStart = rowRange['start'];
    rowCount = cellSet.getCount("row");
    rowEnd = rowStart + rowCount;

    columnRange = cellRange[1];
    columnStart = columnRange['start'];
    columnCount = cellSet.getCount("column");
    columnEnd = columnStart + columnCount;

    // calculate the bound covered by the cellset
    rowStartPixel = this.m_avgRowHeight * rowStart;
    rowEndPixel = this.m_avgRowHeight * rowEnd;
    columnStartPixel = this.m_avgColWidth * columnStart;    
    columnEndPixel = this.m_avgColWidth * columnEnd;    

    // the viewport bounds, take databody width/height to account for scrollbar, header, border
    viewportTop = this.m_currentScrollTop;
    viewportBottom = this.m_currentScrollTop + this.getElementHeight(this.m_databody);
    viewportLeft = this.m_currentScrollLeft;
    viewportRight = this.m_currentScrollLeft + this.getElementWidth(this.m_databody);
    
    // if the all the rows and all the columns are fetched then obviously it
    // will be within the viewport
    if (!this._isCountUnknown('row') && this.getDataSource().getCount('row') == rowCount && rowEndPixel < viewportBottom)
    {
        // adjust the rowEndPixel so that it will pass the condition
        rowEndPixel = viewportBottom; 
    }

    if (!this._isCountUnknown('column') && this.getDataSource().getCount('column') == columnCount && columnEndPixel < viewportRight)
    {
        // adjust the columnEndPixel so that it will pass the condition
        columnEndPixel = viewportRight; 
    }
    
    // return true if the viewport fits inside the fetched range
    return (viewportTop >= rowStartPixel && viewportBottom <= rowEndPixel && viewportLeft >= columnStartPixel && viewportRight <= columnEndPixel);
};

/**
 * Determine whether the row/cell is draggable.
 * @return {boolean} true if the row/cell is draggable, false otherwise.
 * @protected
 */
DvtDataGrid.prototype.isDraggable = function()
{
    return false;
};

/**
 * Handle a successful call to the data source fetchCells. Create new row and 
 * cell DOM elements when necessary and then insert them into the databody.
 * @param {Object} cellSet - a CellSet object which encapsulates the result set of cells
 * @param {Array.<Object>} cellRange - [rowRange, columnRange] - [{"axis":,"start":,"count":},{"axis":,"start":,"count":,"databody":,"scroller":}]
 * @param {boolean} rowInsert - if this is triggered by a row insert event
 * @protected
 */
DvtDataGrid.prototype.handleCellsFetchSuccess = function(cellSet, cellRange, rowInsert)
{
    var totalRowCount, totalColumnCount, defaultHeight, rowRange, rowStart, rowCount,
            rowRangeNeedsUpdate, columnRange, columnStart, columnCount, columnRangeNeedsUpdate,
            databody, top, referenceRow, scroller, inner, databodyContent, resizer, 
            isAppend, fragment, totalRowHeight, i, avgHeight, avgWidth, 
            rows, totalColumnWidth, prev, addResult, topHotspot, bottomHotSpot; 
    totalRowCount = this.getDataSource().getCount("row");
    totalColumnCount = this.getDataSource().getCount("column");
    
    // if rowInsert is specified we can skip a couple of checks
    if (rowInsert === undefined)
    {
        rowInsert = false;

        // checks whether result matches what we requested
        if (!this.isCellFetchResponseValid(cellRange))
        {
            // ignore result if it is not valid
            return;
        }

        // checks if the response covers the viewport
        if (this.isLongScroll() && !this.isCellFetchResponseInViewport(cellSet, cellRange))
        {
            // clear cells fetching flag
            this.m_fetching['cells'] = false;

            // only start fetching again when the mouse has been released (note the flag is only set on mouse down)
            if (!this.m_captureScrolling)
            {
                // ignore the response and fetch another set for the current viewport
                this.handleLongScroll(this.m_currentScrollLeft, this.m_currentScrollTop);
            }
            return;
        }
    }

    defaultHeight = this.getDefaultRowHeight();

    rowRange = cellRange[0];
    rowStart = rowRange['start'];
    rowCount = cellSet.getCount("row");

      // for short fetch it would be equal for long fetch it would be > (bottom) or < (top)
    rowRangeNeedsUpdate = rowCount > 0 && (rowStart >= this.m_endRow || rowStart + rowCount <= this.m_startRow);

    // if no results returned and count is unknown, flag it so we won't try to fetch again
    // or if highwater mark scrolling is used and count is known and we have reach the last row, stop fetching
    if ((rowCount == 0 && this._isCountUnknown('row') && rowRange['count'] > 0) ||
        (rowRangeNeedsUpdate && this._isHighWatermarkScrolling() && !this._isCountUnknown('row') && (this.m_endRow + rowCount >= totalRowCount)))
    {
        this.m_stopRowFetch = true;
    }

    columnRange = cellRange[1];
    columnStart = columnRange['start'];
    columnCount = cellSet.getCount("column");

    columnRangeNeedsUpdate = columnCount > 0 && (columnStart == this.m_endCol || columnStart + columnCount == this.m_startCol);

    // if no results returned and count is unknown, flag it so we won't try to fetch again
    // or if highwater mark scrolling is used and count is known and we have reach the last column, stop fetching
    if ((columnCount == 0 && this._isCountUnknown('column') && columnRange['count'] > 0) ||
        (columnRangeNeedsUpdate && this._isHighWatermarkScrolling() && !this._isCountUnknown('column') && (this.m_endCol + columnCount >= totalColumnCount)))
    {
        this.m_stopColumnFetch = true;
    }

    databody = this.m_databody;
    if (databody == null)
    {
        // try to search for it in the param
        databody = columnRange['databody'];
    }

    scroller = this.m_scroller;
    if (scroller == null)
    {
        // try to search for it in the param
        scroller = columnRange['scroller'];
    }

    // complete the structure of scroller if it does not exists yet
    if (!scroller.hasChildNodes())
    {
        inner = document.createElement("div");
        scroller.appendChild(inner);
    }
    else
    {
        inner = scroller['firstChild'];
    }

    if (!databody.hasChildNodes())
    {
        // first time databody is constructed
        databodyContent = document.createElement("div");
        databodyContent['className'] = this.m_utils.isTouchDevice() ? this.getResources().getMappedStyle("scroller-mobile") : this.getResources().getMappedStyle("scroller");

        // TODO: remove the resizer div, but need to be careful as logic still takes the resizer into account when walking dom
        resizer = document.createElement("div");
        resizer['style']['display'] = 'none';
        this.setElementWidth(resizer, 1);
        this.setElementHeight(resizer, 0);

        databodyContent.appendChild(resizer);
    }
    else
    {
        databodyContent = databody['firstChild'];
        resizer = databodyContent['firstChild'];
    }

    // if these are new rows (append or insert in the middle)
    if (rowRangeNeedsUpdate || rowInsert)
    {
        // whether this is adding rows to bottom (append) or top (insert)
        isAppend = !rowInsert && rowStart >= this.m_startRow ? true : false;

        if (isAppend)
        {
            top = this.m_endRowPixel;
        }
        else
        {
            if (rowInsert)
            {
                referenceRow = databodyContent['childNodes'][rowStart-this.m_startRow+1];  
                top = parseInt(referenceRow['style']['top']);
            }
            else
            {
                top = this.m_startRowPixel;
            }
        }

        fragment = document.createDocumentFragment();
        addResult = this._addRows(fragment, (isAppend || rowInsert), top, rowStart, rowCount, columnStart, columnRangeNeedsUpdate, cellSet);
        totalRowHeight = addResult['totalRowHeight'];
        avgWidth = addResult['avgWidth'];
        avgHeight = totalRowHeight / rowCount;

        if (isAppend)
        {
            databodyContent.appendChild(fragment);
            // make sure there is a bottom border if adding a row to the bottom
            if (this.m_endRow != 0  && rowCount !=0)
            {
                prev = databodyContent['childNodes'][this.m_endRow];
                if (prev != null)
                {    
                    prev = prev['childNodes'];
                    for (i = 0; i < prev.length; i+=1)
                    {
                        prev[i]['style']['borderBottomStyle'] = '';
                    }
                }
            }
            // update row range info if neccessary
            this.m_endRow = this.m_endRow + rowCount;
            this.m_endRowPixel = this.m_endRowPixel + totalRowHeight;

            // initial fetch case where databody is empty
            if (!databody.hasChildNodes())
            {
                databody.appendChild(databodyContent);

                if (this.isDraggable())
                {
                    // these are hotspots for autoscroll when dnd happens
                    topHotspot = document.createElement("div");
                    bottomHotspot = document.createElement("div");
                    databody.appendChild(topHotspot);
                    databody.appendChild(bottomHotspot);
                }
            }
        }
        else if (rowInsert)
        {
            // find the row in which the new row will be inserted
            databodyContent.insertBefore(fragment, referenceRow);

            // update row range info if neccessary
            if (rowStart > this.m_startRow)
            {
                // added in the middle
                this.m_endRow = this.m_endRow + rowCount;
                this.m_endRowPixel = Math.max(0, this.m_endRowPixel + totalRowHeight);
            }
            else
            {
                this.m_startRow = rowStart;
                this.m_startRowPixel = Math.max(0, this.m_startRowPixel - totalRowHeight);
                // update resizer
                this.setElementHeight(resizer, Math.max(0, this.getElementHeight(resizer) - totalRowHeight));
            }

            this.pushRowsDown(referenceRow, totalRowHeight);
        }
        else
        {
            databodyContent.insertBefore(fragment, resizer['nextSibling']);

            // update row range info if neccessary
            this.m_startRow = this.m_startRow - rowCount;
            this.m_startRowPixel = Math.max(0, this.m_startRowPixel - totalRowHeight);
            // update resizer
            this.setElementHeight(resizer, Math.max(0, this.getElementHeight(resizer) - totalRowHeight));
        }
    }
    else if (columnRangeNeedsUpdate)
    {
        // no new rows, but new columns
        rows = databodyContent['childNodes'];
        // assert number of rows is the same as what's in the databody
        if (rowCount == rows.length - 1)
        {
            avgWidth = this._addColumns(rows, rowStart, rowCount, columnStart, cellSet);
        }
    }
    
    // if the total row count is unknown, then calculate it based on the current height and the added row height
    if (totalColumnCount != -1 && !this._isHighWatermarkScrolling())
    {
        totalColumnWidth = totalColumnCount * avgWidth;
    }
    else
    {
        totalColumnWidth = this.m_endColPixel;
    }
    // added to only do this on initialization
    // check to see if the average width and height has change and update the canvas and the scroller accordingly
    if (avgWidth != undefined && (this.m_avgColWidth == 0 || this.m_avgColWidth == undefined))
    {
        // the average column width should only be set once, it will only change when the column width varies between columns, but
        // in such case the new average column width would not be any more precise than previous one.
        this.m_avgColWidth = avgWidth;
        this.setElementWidth(databodyContent, totalColumnWidth);
        this.setElementWidth(inner, totalColumnWidth);
    }
    // if count is unknown, we'll need to update canvas if content is added
    else if ((totalColumnCount == -1 || this._isHighWatermarkScrolling()) && totalColumnWidth > this.getElementWidth(databodyContent))
    {
        this.setElementWidth(databodyContent, totalColumnWidth);
        this.setElementWidth(inner, totalColumnWidth);
    }

    // if the total row count is unknown, then calculate it based on the current height and the added row height
    if (totalRowCount != -1 && !this._isHighWatermarkScrolling())
    {
        totalRowHeight = totalRowCount * avgHeight;
    }
    else
    {
        totalRowHeight = this.m_endRowPixel;
    }
    
    if (avgHeight != undefined && (this.m_avgRowHeight == 0 || this.m_avgRowHeight == undefined))
    {
        // the average row height should only be set once, it will only change when the row height varies between rows, but
        // in such case the new average row height would not be any more precise than previous one.
        this.m_avgRowHeight = avgHeight;
        this.setElementHeight(databodyContent, totalRowHeight);
        this.setElementHeight(inner, totalRowHeight);
    }
    else if (((totalRowCount == -1 || this._isHighWatermarkScrolling()) && totalRowHeight > this.getElementHeight(databodyContent)) || (totalRowCount * avgHeight != this.getElementHeight(databodyContent)))
    {
        // in the insert case or unknown row count case
        this.setElementHeight(databodyContent, totalRowHeight);
        this.setElementHeight(inner, totalRowHeight);
    }

    // update column range info if neccessary
    if (columnRangeNeedsUpdate)
    {
        // add to left or to right
        if (columnStart < this.m_startCol)
        {
            this.m_startCol = this.m_startCol - columnCount;
        }
        else
        {
            this.m_endCol = this.m_endCol + columnCount;
        }
    }

    // fetch is done
    this.m_fetching['cells'] = false;

    if (this.m_initialized)
    {
        // check if we need to sync header and databody scroll position
        this._syncScrollerAndHeaders();
        this._syncScrollerAndDatabody();
    }
    
    // size the grid if fetch is done
    if (this.isFetchComplete())
    {
        this.hideStatusText();
        if (!this.m_initialized)
        {
            this.resizeGrid();
            this.setInitialScrollPosition();
        } 
        else if (this._isScrollerContentOutOfSync())
        {
            this.resizeGrid();
        }

        // highlight focus cell or header if specified
        if (this.m_scrollIndexAfterFetch != null)
        {
            this.scrollToIndex(this.m_scrollIndexAfterFetch);
            
            // if it is a header index
            if (this.m_activeHeader != null)
            {
                if (this.m_activeHeader['axis'] === 'row')
                {
                    this._focusRowHeader(this.m_scrollIndexAfterFetch['row']);
                }
                else if (this.m_activeHeader['axis'] === 'column')
                {
                    this._focusColumnHeader(this.m_scrollIndexAfterFetch['column']);
                }
            }
            else
            {
                if (this.m_scrollIndexAfterFetch == this.m_active)
                {
                    this.highlightActive();
                }
                else
                {
                    this.highlightIndex(this.m_scrollIndexAfterFetch);
                }
            }
            this.m_scrollIndexAfterFetch = null;
        }

        // apply current selection range to newly fetched cells
        // this is more efficient than looping over ranges when rendering cell
        if (this._isSelectionEnabled())
        {
            // todo: applySelection requires m_databody be populated
            if (this.m_databody == null)
            {
                this.m_databody = databody;
            }
            this.applySelection(rowStart, rowStart + rowCount, columnStart, columnStart + columnCount);
        }
    }

//    this.dumpRanges();
};

/**
 * Add columns to existing rows.
 * @param {Array} rows an array of existing row elements
 * @param {integer} rowStart the start row index of the cell set
 * @param {integer} rowCount the row count of the cell set
 * @param {integer} columnStart the start row index of the cell set
 * @param {Object} cellSet the result cell set from fetch operation
 * @return {number} the average width of the columns 
 * @private
 */
DvtDataGrid.prototype._addColumns = function(rows, rowStart, rowCount, columnStart, cellSet)
{
    var renderer, columnBandingInterval, horizontalGridlines, verticalGridlines, row, avgWidth, i;

    renderer = this.m_options.getRenderer("cell");
    columnBandingInterval = this.m_options.getColumnBandingInterval();
    horizontalGridlines = this.m_options.getHorizontalGridlines();
    verticalGridlines = this.m_options.getVerticalGridlines();

    for (i = 0; i < rowCount; i += 1)
    {
        // skip the first one which is a resizer
        row = rows[i + 1];

        // add the cells into existing row
        avgWidth = this.addCellsToRow(cellSet, row, rowStart + i, renderer, false, columnStart, (i == rowCount - 1), columnBandingInterval, horizontalGridlines, verticalGridlines);
    }

    return avgWidth;
};

/**
 * Add rows to the specified document element.
 * @param {Element} fragment the element in which the rows are added to
 * @param {boolean} isAppendOrInsert true if this is insert row to bottom or in the middle
 * @param {integer} top the top pixel position of the first row to be add
 * @param {integer} rowStart the start row index of the cell set
 * @param {integer} rowCount the row count of the cell set
 * @param {integer} columnStart the start row index of the cell set
 * @param {boolean} columnRangeNeedsUpdate true if column range needs update, false otherwise
 * @param {Object} cellSet the result cell set from fetch operation
 * @return {integer} the total row height
 * @private
 */
DvtDataGrid.prototype._addRows = function(fragment, isAppendOrInsert, top, rowStart, rowCount, columnStart, columnRangeNeedsUpdate, cellSet)
{
    var renderer, columnBandingInterval, rowBandingInterval, horizontalGridlines, verticalGridlines, row, avgWidth, totalRowHeight, index, height;

    renderer = this.m_options.getRenderer("cell");
    columnBandingInterval = this.m_options.getColumnBandingInterval();
    rowBandingInterval = this.m_options.getRowBandingInterval();
    horizontalGridlines = this.m_options.getHorizontalGridlines();
    verticalGridlines = this.m_options.getVerticalGridlines();

    totalRowHeight = 0;
    for (i = 0; i < rowCount; i += 1)
    {
        if (isAppendOrInsert)
        {
            index = rowStart + i;
        }
        else
        {
            index = rowStart + (rowCount-1-i);
        }
        row = document.createElement("div");

        if ((Math.floor(index / rowBandingInterval) % 2 === 1))
        {
            row['className'] = this.getResources().getMappedStyle("row") + " " + this.getResources().getMappedStyle("banded");
        }
        else
        {
            row['className'] = this.getResources().getMappedStyle("row");
        }

        // add the cells into the new row
        avgWidth = this.addCellsToRow(cellSet, row, index, renderer, true, columnStart, (i == rowCount - 1 && columnRangeNeedsUpdate), columnBandingInterval, horizontalGridlines, verticalGridlines);
        //set height once the rowKey is defined
        height = this.getRowHeight(row, index, row.getAttribute(this.getResources().getMappedAttribute('key')));
        this.setElementHeight(row, height);
        totalRowHeight = totalRowHeight + height;

        if (isAppendOrInsert)
        {
            row['style']['top'] = top + 'px';
            top = top + height;
            fragment.appendChild(row);
        }
        else
        {
            top = top - height;
            row['style']['top'] = top + 'px';
            fragment.insertBefore(row, fragment['firstChild']);
        }
    }

    return {"avgWidth": avgWidth, "totalRowHeight": totalRowHeight, "top": top};
};

/**
 * Returns true if the scroller dimension is out of sync with the databody content.
 * In which case we'll need to call ResizeGrid to re-layout the grid.
 * @return {boolean} true if the scroller dimension is out of sync with the databody content, false otherwise.
 * @private
 */
DvtDataGrid.prototype._isScrollerContentOutOfSync = function()
{
    var scrollerHeight, scrollerWidth, scrollerContent, scrollerContentHeight, scrollerContentWidth;

    // if scroller is not built yet just return false
    if (this.m_scroller == null)
    {
        return false;
    }

    scrollerHeight = this.getElementHeight(this.m_scroller);
    scrollerWidth = this.getElementWidth(this.m_scroller);
    scrollerContent = this.m_scroller['firstChild'];
    scrollerContentHeight = this.getElementHeight(scrollerContent);
    scrollerContentWidth = this.getElementWidth(scrollerContent);

    // if the content height is greater than scroller height but there's no vertical scrollbar or
    // if the content width is greater than scroller width but there's no horizontal scrollbar
    if ((this.m_endRowPixel > scrollerHeight && scrollerWidth == scrollerContentWidth) ||
        (this.m_endColPixel > scrollerWidth && scrollerHeight == scrollerContentHeight))
    {
        return true;
    }

    return false;
};

/**
 * Push the row and all of its next siblings down.
 * @param {Element} row the starting row to push down.
 * @param {number} adjustment the amount in pixel to push down.
 * @private
 */
DvtDataGrid.prototype.pushRowsDown = function(row, adjustment)
{
    while (row)
    {
        var top = parseInt(row['style']['top']) + adjustment;
        row['style']['top'] = top + 'px';
        row = row['nextSibling'];
    }
};

/**
 * Push the row and all of its next siblings up.
 * @param {Element} row the starting row to push up.
 * @param {number} adjustment the amount in pixel to push up.
 * @private
 */
DvtDataGrid.prototype.pushRowsUp = function(row, adjustment)
{
    this.pushRowsDown(row, 0-adjustment);
};

/**
 * Handle an unsuccessful call to the data source fetchCells 
 * @param {Error} error - the error returned from the data source
 * @param {Object} cellRanges
 */
DvtDataGrid.prototype.handleCellsFetchError = function(error, cellRanges)
{
};

/**
 * Build a cell context object for a cell and return it
 * @param {object} indexes - the row and column index of the cell
 * @param {Object} data - the data the cell contains
 * @param {Object} metadata - the metadata the cell contains
 * @param {Element} elem - the cell element
 * @return {Object} the cell context object, keys of {indexes,data,keys,datagrid}
 */
DvtDataGrid.prototype.createCellContext = function(indexes, data, metadata, elem)
{
    var cellContext;

    cellContext = {
    };
    cellContext['parentElement'] = elem;
    cellContext['indexes'] = indexes;
    cellContext['keys'] = metadata['keys'];
    cellContext['data'] = data;
    cellContext['datagrid'] = this;
    // include any other row and column metadata
    if (metadata['row'] && metadata['column'])
    {
        cellContext['metadata'] = {'row': metadata['row'], 'column': metadata['column']};
    }

    // invoke callback to allow ojDataGrid to change datagrid reference
    if (this.m_createContextCallback != null)
    {
        this.m_createContextCallback.call(this, cellContext);
    }

    return cellContext;
};

/**
 * Creates the cell element
 * @param {Object} metadata the metadata for the cell
 * @protected
 */
DvtDataGrid.prototype.createCellElement = function(metadata)
{
    return document.createElement("div")
};

/**
 * Adds cells to a row. Iterate over the cells passed in, create new div elements 
 * for them settign appropriate styles, and append or prepend them to the row based on the start column.
 * @param {Object} cells - the result set of cell data
 * @param {Element} row - the row element to add cells to
 * @param {number} rowIndex - the index of the row element
 * @param {function(Object)} renderer - the cell renderer
 * @param {boolean} isRowFetch - true if we fetched this row
 * @param {number} columnStart - the index to start start adding at
 * @param {boolean} updateColumnRangeInfo - true if we want to return average width
 * @param {number} columnBandingInterval - the column banding interval
 * @return {number|null} the average width if updateColumnRange is true, otherwise return nothing
 */
DvtDataGrid.prototype.addCellsToRow = function(cellSet, row, rowIndex, renderer, isRowFetch, columnStart, updateColumnRangeInfo, columnBandingInterval, horizontalGridlines, verticalGridlines)
{
    var isAppend, firstColumn, inlineStyleClass, cellStyleClass, currentLeft, dir, totalWidth, columnCount, indexes, cellData, cellMetadata, cellContext, j, cell, inlineStyle, width, content, columnIndex, keyAttribute;
    // appending columns to the right? todo: > or >=
    isAppend = (columnStart >= this.m_startCol);

    firstColumn = row['firstChild'];

    // if this is new row fetch or not appending column
    if (isRowFetch || !isAppend)
    {
        currentLeft = this.m_startColPixel;
    }
    else
    {
        currentLeft = this.m_endColPixel;
    }
    
    keyAttribute = this.getResources().getMappedAttribute('key');
    dir = this.getResources().isRTLMode() ? "right" : "left";
    totalWidth = 0;
    columnCount = cellSet.getCount("column");
    for (j = 0; j < columnCount; j += 1)
    {
        if (isAppend || isRowFetch)
        {
            columnIndex = columnStart + j;
        }
        else
        {
            columnIndex = columnStart + (columnCount - 1 - j);
        }

        indexes = {"row": rowIndex, "column": columnIndex};
        cellData = cellSet.getData(indexes);
        cellMetadata = cellSet.getMetadata(indexes);

        cell = this.createCellElement(cellMetadata);
        cell.setAttribute("tabIndex", -1);

        cellContext = this.createCellContext(indexes, cellData, cellMetadata, cell);

        // cache the row key if not done already
        if (!row.hasAttribute(keyAttribute))
        {
            row.setAttribute(keyAttribute, cellContext['keys']['row']);
        }
        
        //do not put borders on far edge column, edge row, turn off gridlines
        if (verticalGridlines === 'hidden' || this.isLastColumn(columnIndex))
        {
            if (dir === 'left')
            {
                cell['style']['borderRight'] = 'none';
            }
            else
            {
                cell['style']['borderLeftStyle'] = 'none';
            }
        }
        if (horizontalGridlines === 'hidden'|| this.isLastRow(rowIndex))
        {
            cell['style']['borderBottomStyle'] = 'none';
        }        
        
        inlineStyle = this.m_options.getInlineStyle("cell", cellContext);
        if (inlineStyle != null)
        {
            cell['style']['cssText'] = inlineStyle;
        }

        //determine if the newly fetched row should be banded
        if ((Math.floor(columnIndex / columnBandingInterval) % 2 === 1))
        {
            cellStyleClass = this.getResources().getMappedStyle("cell") + " " + this.getResources().getMappedStyle("banded");
        }
        else
        {
            cellStyleClass = this.getResources().getMappedStyle("cell");       
        }
        inlineStyleClass = this.m_options.getStyleClass("cell", cellContext);
        if (inlineStyleClass != null)
        {
            cell['className'] = cellStyleClass + " " + inlineStyleClass;
        }
        else
        {
            cell['className'] = cellStyleClass;            
        }

        //don't want developer setting height through css styles on cell
        cell['style']['height'] = '100%';
        
        // get width after class name and inline style set but before content set
        width = this.getColumnWidth(cell, columnIndex, cellContext['keys']['column']);
        this.setElementWidth(cell, width);

        if (isAppend || isRowFetch)
        {
            this.setElementDir(cell, currentLeft, dir);
        }
        else
        {
            this.setElementDir(cell, currentLeft - width, dir);
        }

        //add cell to live DOM while rendering
        this.m_root.appendChild(cell);
        
        if (renderer != null)
        {
            // if an element is returned from the renderer and the parent of that element is null, we will append 
            // the returned element to the parentElement.  If non-null, we won't do anything, assuming that the 
            // rendered content has already added into the DOM somewhere.
            content = renderer.call(this, cellContext);
            if (content != null)
            {
                if (content['parentNode'] === null)
                {
                    cell.appendChild(content);
                }
                else if (content['parentNode'] != null)
                {
                    // parent node exists, do nothing
                }                
                else if (content.toString)
                {
                    cell.appendChild(document.createTextNode(content.toString()));
                }
            }
        }
        else
        {
            cell.appendChild(document.createTextNode(cellData.toString()));
        }

        if (isAppend || isRowFetch)
        {
            row.appendChild(cell);
            currentLeft = currentLeft + width;
        }
        else
        {
            row.insertBefore(cell, firstColumn);
            firstColumn = cell;
            currentLeft = currentLeft - width;
        }

        // update column range info if neccessary
        if (updateColumnRangeInfo)
        {
            if (isAppend || isRowFetch)
            {
                this.m_endColPixel = this.m_endColPixel + width;
            }
            else
            {
                this.m_startColPixel = this.m_startColPixel - width;
            }
            totalWidth = totalWidth + width;
        }
    
        // if there is a row expander, process it
        if (this.m_currentRowExpander != null)
        {
            this._processRowExpander(this.m_currentRowExpander);
            this.m_currentRowExpander = null;
        }
    }

    if (updateColumnRangeInfo && columnCount > 0)
    {
        return totalWidth / columnCount;
    }
    return null;
};

/**
 * Handle an unsuccessful call to the data source fetchCells
 * @param {Error} errorStatus - the error returned from the data source
 * @param {Array.<Object>} cellRange - [rowRange, columnRange] - [{"axis":,"start":,"count":},{"axis":,"start":,"count":,"databody":,"scroller":}]
 */
DvtDataGrid.prototype.handleCellsFetchError = function(errorStatus, cellRange)
{
    // remove fetch message
    this.m_fetching['cells'] = false;
};

/**
 * Display the 'fetching' status message
 */
DvtDataGrid.prototype.showStatusText = function()
{
    var left, msg;
    msg = this.getResources().getTranslatedText("fetching");

    if (this.m_status['style']['display'] == "block")
    {
        return;
    }

    this.m_status['innerHTML'] = msg;
    this.m_status['style']['display'] = "block";

    left = this.getWidth() / 2 - this.m_status['offsetWidth'] / 2;
    this.m_status['style']['left'] = left + 'px';
};

/**
 * Hide the 'fetching' status message
 */
DvtDataGrid.prototype.hideStatusText = function()
{
    this.m_status['style']['display'] = "none";
};

/************************************** scrolling/virtualization ************************************/

/**
 * Handle a scroll event calling scrollTo
 * @param {Event} event - the scroll event triggering the method
 */
DvtDataGrid.prototype.handleScroll = function(event)
{
    var scrollLeft, scrollTop, scroller;
    if (!event)
    {
        event = window['event'];
    }

    if (!event['target'])
    {
        scroller = event['srcElement'];
    }
    else
    {
        scroller = event['target'];
    }

    scrollLeft = this.m_utils.getElementScrollLeft(scroller);
    scrollTop = scroller['scrollTop'];
    
    this.scrollTo(scrollLeft, scrollTop);
};

/**
 * Used by mouse wheel and touch scrolling to set the scroll position, 
 * since the deltas are obtained instead of new scroll position.
 * @param {number} deltaX - the change in X position
 * @param {number} deltaY - the change in Y position
 */
DvtDataGrid.prototype.scrollDelta = function(deltaX, deltaY)
{
    var scrollLeft, scrollTop;
    // prevent 'diagonal' scrolling
    if (deltaX != 0 && deltaY != 0)
    {
        // direction depends on which way moves the most
        if (deltaX > deltaY)
        {
            deltaY = 0;
        }
        else
        {
            deltaX = 0;
        }
    }

    scrollLeft = Math.max(0, Math.min(this.m_scrollWidth, this.m_currentScrollLeft - deltaX));
    scrollTop = Math.max(0, Math.min(this.m_scrollHeight, this.m_currentScrollTop - deltaY));
    
    // this should force a scroll event
    this.m_utils.setElementScrollLeft(this.m_scroller, scrollLeft);
    this.m_scroller['scrollTop'] = scrollTop;
};

/**
 * Checks whether we should stop scrolling the databody because there's no rows.  This is to avoid
 * showing blank spaces.
 * @return {boolean} true if should stop scrolling databody, false otherwise
 * @private
 */
DvtDataGrid.prototype._shouldScrollDatabody = function(scrollLeft, scrollTop)
{
    var viewportLeft, viewportRight, viewportTop, viewportBottom;

    viewportLeft = scrollLeft;
    viewportRight = scrollLeft + this.getElementWidth(this.m_databody);
    viewportTop = scrollTop;
    viewportBottom = scrollTop + this.getElementHeight(this.m_databody);

    // check the viewport bounds against what's in the databody
    // todo: find out why viewportRight and m_endColPixel is off by 2 pixels
    if (this.m_endRowPixel < viewportBottom || this.m_startRowPixel > viewportTop || this.m_endColPixel < viewportRight-2 || this.m_startColPixel > viewportLeft)
    {
        return false;
    }

    return true;
};

/**
 * Set the scroller position, using translate3d when permitted
 * @param {number} scrollLeft - the position the scroller left should be
 * @param {number} scrollTop - the position the scroller top should be
 */
DvtDataGrid.prototype.scrollTo = function(scrollLeft, scrollTop)
{
    this.m_currentScrollLeft = scrollLeft;
    this.m_currentScrollTop = scrollTop;

    // check if this is a long scroll
    if ((scrollLeft + this.getViewportWidth()) < this.m_startColPixel ||
            scrollLeft > this.m_endColPixel ||
            (scrollTop + this.getViewportHeight()) < this.m_startRowPixel ||
            scrollTop > this.m_endRowPixel)
    {
        this.handleLongScroll(scrollLeft, scrollTop);
    }
    else
    {
        this.fillViewport(scrollLeft, scrollTop);
    }

    // check if we should stop scrolling the databody because data has not catch up yet.
    if (!this._shouldScrollDatabody(scrollLeft, scrollTop))
    {
        this.m_stopDatabodyScroll = true;
        return;
    }

    this.m_stopDatabodyScroll = false;

    // update header and databody scroll position
    this._syncScrollerAndHeaders();
    this._syncScrollerAndDatabody();

    // check if we need to adjust scroller dimension
    this._adjustScrollerSize();

    // check if there's a cell to focus
    if (this.m_cellToFocus != null)
    {
        this.m_cellToFocus.focus();
        this.m_cellToFocus = null;
    }    
};

/**
 * Make sure the databody and the scroller is in sync, which could happen when scrolling
 * stopped awaiting fetch to complete.
 * @private
 */
DvtDataGrid.prototype._syncScrollerAndDatabody = function()
{
    var scrollLeft, scrollTop, databody, dir;

    scrollLeft = this.m_currentScrollLeft;
    scrollTop = this.m_currentScrollTop;

    databody = this.m_databody['firstChild'];    

    // use translate3d for smoother scrolling
    // this checks determine whether this is webkit and translated3d is supported
    if (window.hasOwnProperty('WebKitCSSMatrix') && new WebKitCSSMatrix().hasOwnProperty('m11'))
    {
        if (this.getResources().isRTLMode())
            databody.style.webkitTransform = "translate3d(" + scrollLeft + "px, " + (-scrollTop) + "px, 0)";
        else
            databody.style.webkitTransform = "translate3d(" + (-scrollLeft) + "px, " + (-scrollTop) + "px, 0)";
    }
    else
    {
        dir = this.getResources().isRTLMode() ? "right" : "left";
        this.setElementDir(databody, -scrollLeft, dir);
        this.setElementDir(databody, -scrollTop, 'top');
    }
};

/**
 * Make sure the header and the scroller is in sync, which could happen when scrolling
 * stopped awaiting fetch to complete.
 * @private
 */
DvtDataGrid.prototype._syncScrollerAndHeaders = function()
{
    var scrollLeft, scrollTop, colHeader, rowHeader, dir;

    scrollLeft = this.m_currentScrollLeft;
    scrollTop = this.m_currentScrollTop;

    colHeader = this.m_colHeader['firstChild'];
    rowHeader = this.m_rowHeader['firstChild'];

    // use translate3d for smoother scrolling
    // this checks determine whether this is webkit and translated3d is supported
    if (window.hasOwnProperty('WebKitCSSMatrix') && new WebKitCSSMatrix().hasOwnProperty('m11'))
    {
        if (this.getResources().isRTLMode())
            colHeader.style.webkitTransform = "translate3d(" + scrollLeft + "px, 0, 0)";
        else
            colHeader.style.webkitTransform = "translate3d(" + (-scrollLeft) + "px, 0, 0)";
        rowHeader.style.webkitTransform = "translate3d(0, " + (-scrollTop) + "px, 0)";
    }
    else
    {
        dir = this.getResources().isRTLMode() ? "right" : "left";
        this.setElementDir(colHeader, -scrollLeft, dir);
        this.setElementDir(rowHeader, -scrollTop, 'top');
    }
};

/**
 * Adjust the scroller when we scroll to the ends of the scroller.  The scroller dimension might
 * need adjustment due to 1) variable column width or row height due to custom sizing 2) the row
 * or column count is not exact.
 * @private
 */
DvtDataGrid.prototype._adjustScrollerSize = function()
{
    var  scrollerContent, scrollerContentHeight, scrollerContentWidth, databodyContent;
    scrollerContent = this.m_scroller['firstChild'];
    scrollerContentHeight = this.getElementHeight(scrollerContent);
    scrollerContentWidth = this.getElementWidth(scrollerContent);
    databodyContent = this.m_databody['firstChild'];

    // if (1) actual content is higher than scroller (regardless of the current position) OR
    //    (2) we have reached the last row and the actual content is shorter than scroller
    if ((this.m_endRowPixel > scrollerContentHeight) ||
        (this.getDataSource().getCount('row') == this.m_endRow && !this._isCountUnknown('row') && this.m_endRowPixel < scrollerContentHeight))
    {
        this.setElementHeight(scrollerContent, this.m_endRowPixel);
        this.setElementHeight(databodyContent, this.m_endRowPixel);
    }

    // if (1) actual content is wider than scroller (regardless of the current position) OR
    //    (2) we have reached the last column and the actual content is narrower than scroller
    if ((this.m_endColPixel > scrollerContentWidth) ||
        (this.getDataSource().getCount('column') == this.m_endCol && !this._isCountUnknown('column') && this.m_endColPixel < scrollerContentWidth))
    {
        this.setElementWidth(scrollerContent, this.m_endColPixel);
        this.setElementWidth(databodyContent, this.m_endColPixel);
    }
};

/**
 * Handle scroll to position that is completely outside of the current row/column range
 * For example, in Chrome it is possible to cause a "jump" back to the start position
 * This might also be needed if we decide to use delay scroll (to detect long scroll) to avoid
 * excessive fetching.
 * @param {number} scrollLeft - the position the scroller left should be
 * @param {number} scrollTop - the position the scroller top should be
 */
DvtDataGrid.prototype.handleLongScroll = function(scrollLeft, scrollTop)
{
    var startRow, startCol, startRowPixel, startColPixel;

    // do a fetch based on current scroll position
    startRow = Math.round(Math.max(0, scrollTop - this.getHeight() / 2) / this.m_avgRowHeight);
    startCol = Math.round(Math.max(0, scrollLeft - this.getWidth() / 2) / this.m_avgColWidth);
    startRowPixel = startRow * this.m_avgRowHeight;
    startColPixel = startCol * this.m_avgColWidth;

    // reset ranges
    this.m_startRow = startRow;
    this.m_endRow = startRow;
    this.m_startRowHeader = startRow;
    this.m_endRowHeader = startRow;
    this.m_startRowPixel = startRowPixel;
    this.m_endRowPixel = startRowPixel;
    this.m_startRowHeaderPixel = startRowPixel;
    this.m_endRowHeaderPixel = startRowPixel;

    this.m_startCol = startCol;
    this.m_endCol = startCol;
    this.m_startColHeader = startCol;
    this.m_endColHeader = startCol;
    this.m_startColPixel = startColPixel;
    this.m_endColPixel = startColPixel;
    this.m_startColHeaderPixel = startColPixel;
    this.m_endColHeaderPixel = startColPixel;

    // custom success callback so that we can reset all ranges and fields
    // initiate fetch of headers and cells
    this.fetchHeaders("row", startRow, this.m_rowHeader, undefined, {'success': function(headerSet, headerRange)
         { this.handleRowHeadersFetchSuccessForLongScroll(headerSet, headerRange, startRowPixel); }});
    this.fetchHeaders("column", startCol, this.m_colHeader, undefined, {'success': function(headerSet, headerRange)
         { this.handleColumnHeadersFetchSuccessForLongScroll(headerSet, headerRange); }});

    this.fetchCells(this.m_databody, this.m_scroller, startRow, startCol, null, null, {'success': function(cellSet, cellRange) 
         { this.handleCellsFetchSuccessForLongScroll(cellSet, cellRange, startRow, startCol, startRowPixel, startColPixel); }});
};

/**
 * Handle a successful call to the data source fetchHeaders for long scroll
 * @param {Array.<(Object|string)>} results - an array of headers returned from the dataSource
 * @param {Object} headerRange - {"axis":,"start":,"count":,"header":}
 * @protected
 */
DvtDataGrid.prototype.handleRowHeadersFetchSuccessForLongScroll = function(headerSet, headerRange, startRowPixel)
{
    var headerContent = this.m_rowHeader['firstChild'];
    headerResizer = headerContent['firstChild'].cloneNode();
    headerContent.innerHTML = "";
    headerContent.appendChild(headerResizer);

    this.setElementHeight(headerResizer, startRowPixel);

    this.handleHeadersFetchSuccess(headerSet, headerRange);
};

/**
 * Handle a successful call to the data source fetchHeaders for long scroll
 * @param {Array.<(Object|string)>} results - an array of headers returned from the dataSource
 * @param {Object} headerRange - {"axis":,"start":,"count":,"header":}
 * @protected
 */
DvtDataGrid.prototype.handleColumnHeadersFetchSuccessForLongScroll = function(headerSet, headerRange)
{
    var headerContent = this.m_colHeader['firstChild'];
    headerContent.innerHTML = "";

    this.handleHeadersFetchSuccess(headerSet, headerRange);
};

/**
 * Handle a successful call to the data source fetchCells. Create new row and 
 * cell DOM elements when necessary and then insert them into the databody.
 * @param {Object} cellSet - a CellSet object which encapsulates the result set of cells
 * @param {Array.<Object>} cellRange - [rowRange, columnRange] - [{"axis":,"start":,"count":},{"axis":,"start":,"count":,"databody":,"scroller":}]
 * @protected
 */
DvtDataGrid.prototype.handleCellsFetchSuccessForLongScroll = function(cellSet, cellRange, startRow, startCol, startRowPixel, startColPixel)
{
    // remove everything
    databodyContent = this.m_databody['firstChild'];
    databodyResizer = databodyContent['firstChild'].cloneNode();
    databodyContent.innerHTML = "";
    databodyContent.appendChild(databodyResizer);

    this.setElementHeight(databodyResizer, startRowPixel);

    // first reset all fields

    // now calls fetch success proc
    this.handleCellsFetchSuccess(cellSet, cellRange);
}

/**
 * Make sure the viewport is filled of cells
 * @param {number} scrollLeft - the position of the scroller left
 * @param {number} scrollTop - the position of the scroller top
 */
DvtDataGrid.prototype.fillViewport = function(scrollLeft, scrollTop)
{
    var viewportRight, databodyContent, fetchStartCol, fetchSize, viewportBottom, fetchStartRow;
    databodyContent = this.m_databody['firstChild'];

    viewportRight = scrollLeft + this.getElementWidth(this.m_databody);
    // scroll position passes the header content or reach the right (left for rtl) if count is unknown
    if (viewportRight > this.m_endColHeaderPixel || (viewportRight == this.m_endColHeaderPixel && this._isCountUnknownOrHighwatermark("column") && !this.m_stopColumnHeaderFetch))
    {
        // add column headers to right
        this.fetchHeaders("column", this.m_endColHeader, this.m_colHeader);

        // clean up left column headers
        if (!this._isHighWatermarkScrolling() && ((this.m_endColHeader - this.m_startColHeader) > this.MAX_COLUMN_THRESHOLD))
        {
            this.removeColumnHeadersFromLeft(this.m_colHeader);
        }
    }
    else if (scrollLeft < this.m_startColHeaderPixel)
    {
        // add column headers to left
        fetchStartCol = Math.max(0, this.m_startColHeader - this.getFetchSize("column"));
        fetchSize = Math.max(0, this.m_startColHeader - fetchStartCol);
        this.fetchHeaders("column", fetchStartCol, this.m_colHeader, fetchSize);

        // clean up right column headers
        if (!this._isHighWatermarkScrolling() && ((this.m_endColHeader - this.m_startColHeader) > this.MAX_COLUMN_THRESHOLD))
        {
            this.removeColumnHeadersFromRight(this.m_colHeader);
        }
    }

    // scroll position passes the databody content or reach the right (left if rtl) if count is unknown
    if (viewportRight > this.m_endColPixel || (viewportRight == this.m_endColPixel && this._isCountUnknownOrHighwatermark("column") && !this.m_stopColumnFetch))
    {
        // add columns to right
        this.fetchCells(this.m_databody, this.m_scroller, this.m_startRow, this.m_endCol, this.m_endRow - this.m_startRow);

        // clean up left columns
        if (!this._isHighWatermarkScrolling() && (this.m_endCol - this.m_startCol) > this.MAX_COLUMN_THRESHOLD)
        {
            this.removeColumnsFromLeft(this.m_databody);
        }
    }
    else if (scrollLeft < this.m_startColPixel)
    {
        // add columns to left
        fetchStartCol = Math.max(0, this.m_startCol - this.getFetchSize("column"));
        fetchSize = Math.max(0, this.m_startCol - fetchStartCol);
        this.fetchCells(this.m_databody, this.m_scroller, this.m_startRow, fetchStartCol, this.m_endRow - this.m_startRow, fetchSize);

        // clean up left columns
        if (!this._isHighWatermarkScrolling() && (this.m_endCol - this.m_startCol) > this.MAX_COLUMN_THRESHOLD)
        {
            this.removeColumnsFromRight(this.m_databody);
        }
    }

    viewportBottom = scrollTop + this.getElementHeight(this.m_databody);
    // scroll position passes the header content or reach the bottom if count is unknown
    if (viewportBottom > this.m_endRowHeaderPixel || (viewportBottom == this.m_endRowHeaderPixel && this._isCountUnknownOrHighwatermark("row") && !this.m_stopRowHeaderFetch))
    {
        // add row headers to bottom
        this.fetchHeaders("row", this.m_endRowHeader, this.m_rowHeader);

        // clean up top row headers
        if (!this._isHighWatermarkScrolling() && (this.m_endRowHeader - this.m_startRowHeader) > this.MAX_ROW_THRESHOLD)
        {
            this.removeRowHeadersFromTop(this.m_rowHeader);
        }
    }
    else if (Math.max(0, (scrollTop - this.getRowThreshold())) < this.m_startRowHeaderPixel)
    {
        // if we reach the top row then stop
        if (this.m_startRowHeader == 0)
        {
            return;
        }

        // add row headers to top
        fetchStartRow = Math.max(0, this.m_startRowHeader - this.getFetchSize("row"));
        fetchSize = Math.max(0, this.m_startRowHeader - fetchStartRow);
        this.fetchHeaders("row", fetchStartRow, this.m_rowHeader, fetchSize);

        // clean up bottom row headers
        if (!this._isHighWatermarkScrolling() && (this.m_endRowHeader - this.m_startRowHeader) > this.MAX_ROW_THRESHOLD)
        {
            this.removeRowHeadersFromBottom(this.m_rowHeader);
        }
    }

    // scroll position passes the databody content or reach the bottom if count is unknown
    if (viewportBottom > this.m_endRowPixel || (viewportBottom == this.m_endRowPixel && this._isCountUnknownOrHighwatermark("row") && !this.m_stopRowFetch))
    {
        // add rows to bottom
        this.fetchCellsToBottom();

        // clean up top rows
        if (!this._isHighWatermarkScrolling() && (this.m_endRow - this.m_startRow) > this.MAX_ROW_THRESHOLD)
        {
            this.removeRowsFromTop(this.m_databody);
        }
    }
    else if (Math.max(0, (scrollTop - this.getRowThreshold())) < this.m_startRowPixel)
    {
        // if we reach the top row then stop
        if (this.m_startRow == 0)
        {
            return;
        }

        // add rows to top
        this.fetchCellsToTop();

        // clean up bottom rows
        if (!this._isHighWatermarkScrolling() && (this.m_endRow - this.m_startRow) > this.MAX_ROW_THRESHOLD)
        {
            this.removeRowsFromBottom(this.m_databody);
        }
    }
};

/**
 * Fetch cells and append results to the bottom
 * @protected
 */
DvtDataGrid.prototype.fetchCellsToBottom = function()
{
    this.fetchCells(this.m_databody, this.m_scroller, this.m_endRow, this.m_startCol, null, this.m_endCol - this.m_startCol);
};

/**
 * Fetch cells and insert results to the top
 * @protected
 */
DvtDataGrid.prototype.fetchCellsToTop = function()
{
    var fetchSize, fetchStartRow;
    // add rows to top
    fetchStartRow = Math.max(0, this.m_startRow - this.getFetchSize("row"));
    fetchSize = Math.max(0, this.m_startRow - fetchStartRow);
    this.fetchCells(this.m_databody, this.m_scroller, fetchStartRow, this.m_startCol, fetchSize, this.m_endCol - this.m_startCol);
};

/**
 * Remove column headers to the left of the current viewport
 * @param {Element} colHeader - the root of the column headers
 */
DvtDataGrid.prototype.removeColumnHeadersFromLeft = function(colHeader)
{
    var colHeaderContent, headers, indexToRemove, left, colThreshold, i, j, header, prevLeft;
    
    colHeaderContent = colHeader['firstChild'];
    headers = colHeaderContent['childNodes'];
    indexToRemove = 0;
    left = 0;
    colThreshold = this.getColumnThreshold();
    for (i = 0; i < headers.length; i += 1)
    {
        header = headers[i];
        prevLeft = left;
        left = this.getElementDir(header, 'left');
        if (left > (this.m_currentScrollLeft - colThreshold))
        {
            indexToRemove = i - 1;
            this.m_startColHeader = this.m_startColHeader + indexToRemove;
            this.m_startColHeaderPixel = prevLeft;

            break;
        }
    }

    for (j = 0; j < indexToRemove; j += 1) {
        colHeaderContent.removeChild(colHeaderContent['firstChild']);
        this.m_cachedColumnWidth.splice(0, 1);
    }
    this.m_cachedColumnWidthStartIndex += indexToRemove;
};

/**
 * Remove cells to the left of the current viewport
 * @param {Element} databody - the root of the databody
 */
DvtDataGrid.prototype.removeColumnsFromLeft = function(databody)
{
    var databodyContent, rows, indexToRemove, left, colThreshold, columns, i, column, prevLeft, j, row, k;
    databodyContent = databody['firstChild'];
    rows = databodyContent['childNodes'];
    indexToRemove = 0;
    left = 0;
    colThreshold = this.getColumnThreshold();

    // no rows in databody, nothing to remove
    if (rows.length < 2)
    {
        return;
    }

    // just use the first row to find the cut off point
    columns = rows[1]['childNodes'];
    for (i = 0; i < columns.length; i += 1)
    {
        column = columns[i];
        prevLeft = left;
        left = this.getElementDir(column, 'left');
        if (left > (this.m_currentScrollLeft - colThreshold))
        {
            indexToRemove = i - 1;
            this.m_startCol = this.m_startCol + indexToRemove;
            this.m_startColPixel = prevLeft;

            break;
        }
    }

    // skip the first one which is the resizer
    for (j = 1; j < rows.length; j += 1)
    {
        row = rows[j];
        for (k = 0; k < indexToRemove; k += 1)
        {
            row.removeChild(row['firstChild']);            
        }
    }
};

/**
 * Remove column headers to the right of the current viewport
 * @param {Element} colHeader - the root of the column headers
 */
DvtDataGrid.prototype.removeColumnHeadersFromRight = function(colHeader)
{
    var colHeaderContent, threshold, column, width;
    colHeaderContent = colHeader['firstChild'];
    threshold = this.m_currentScrollLeft + this.getViewportWidth() + this.getColumnThreshold();

    // don't clean up if end of row header is not below the bottom of viewport
    if (this.m_endColHeaderPixel <= threshold)
    {
        return;
    }

    column = colHeaderContent['lastChild'];
    width = column['offsetWidth'];
    while (this.m_endColHeaderPixel + width > threshold)
    {
        colHeaderContent.removeChild(column);
        this.m_endColHeaderPixel = this.m_endColHeaderPixel - width;
        this.m_endColHeader -= 1;

        column = colHeaderContent['lastChild'];
        width = column['offsetWidth'];
    }
};

/**
 * Remove cells to the right of the current viewport
 * @param {Element} databody - the root of the databody
 */
DvtDataGrid.prototype.removeColumnsFromRight = function(databody)
{
    var databodyContent, threshold, columns, column, width, rows, j, row;
    databodyContent = databody['firstChild'];
    rows = databodyContent['childNodes'];
    threshold = this.m_currentScrollLeft + this.getViewportWidth() + this.getColumnThreshold();

    // don't clean up if end of row header is not below the bottom of viewport
    if (this.m_endColPixel <= threshold)
    {
        return;
    }

    columns = rows[1];
    column = columns['lastChild'];
    width = column['offsetWidth'];
    while (this.m_endColPixel + width > threshold)
    {
        for (j = 1; j < rows.length; j += 1) {
            row = rows[j];
            row.removeChild(row['lastChild']);
        }
        this.m_endColPixel = this.m_endColPixel - width;
        this.m_endCol -= 1;

        column = columns['lastChild'];
        width = column['offsetWidth'];
    }

};

/**
 * Remove row headers above the current viewport
 * @param {Element} rowHeader - the root of the row headers
 */
DvtDataGrid.prototype.removeRowHeadersFromTop = function(rowHeader)
{
    var rowHeaderContent, resizer, resizerHeight, rowThreshold, header, height;
    rowHeaderContent = rowHeader['firstChild'];
    resizer = rowHeaderContent['firstChild'];
    resizerHeight = this.getElementHeight(resizer);
    rowThreshold = this.getRowThreshold();
    if (resizerHeight >= this.m_currentScrollTop - rowThreshold)
    {
        return;
    }

    header = resizer['nextSibling'];
    height = header['offsetHeight'];
    // remove all rows from top until the threshold is reached
    while (resizerHeight + height < this.m_currentScrollTop - rowThreshold)
    {
        rowHeaderContent.removeChild(header);
        this.m_cachedRowHeight.splice(0, 1);
        this.m_cachedRowHeightStartIndex -= 1;

        this.m_startRowHeaderPixel = this.m_startRowHeaderPixel + height;
        this.m_startRowHeader += 1;

        resizerHeight = resizerHeight + height;
        header = resizer['nextSibling'];
        height = header['offsetHeight'];
    }
    
    this.setElementHeight(resizer, resizerHeight);
};

/**
 * Remove rows/cells above the current viewport
 * @param {Element} databody - the root of the databody
 */
DvtDataGrid.prototype.removeRowsFromTop = function(databody)
{
    var databodyContent, resizer, resizerHeight, rowThreshold, row, height;
    databodyContent = databody['firstChild'];
    resizer = databodyContent['firstChild'];
    resizerHeight = this.getElementHeight(resizer);
    rowThreshold = this.getRowThreshold();
    if (resizerHeight >= this.m_currentScrollTop - rowThreshold)
    {
        return;
    }

    row = resizer['nextSibling'];
    height = row['offsetHeight'];
    // remove all rows from top until the threshold is reached
    while (resizerHeight + height < this.m_currentScrollTop - rowThreshold)
    {
        databodyContent.removeChild(row);

        this.m_startRowPixel = this.m_startRowPixel + height;
        this.m_startRow += 1;

        resizerHeight = resizerHeight + height;
        row = resizer['nextSibling'];
        // if there's no more rows to remove from the databody
        if (row == null)
        {
            break;
        }
        height = row['offsetHeight'];
    }

    this.setElementHeight(resizer, resizerHeight);
};

/**
 * Remove row headers below the current viewport
 * @param {Element} rowHeader - the root of the row headers
 */
DvtDataGrid.prototype.removeRowHeadersFromBottom = function(rowHeader)
{
    var rowHeaderContent, threshold, row, height;
    rowHeaderContent = rowHeader['firstChild'];
    threshold = this.m_currentScrollTop + this.getViewportHeight() + this.getRowThreshold();

    // don't clean up if end of row header is not below the bottom of viewport
    if (this.m_endRowHeaderPixel <= threshold)
    {
        return;
    }

    row = rowHeaderContent['lastChild'];
    height = row['offsetHeight'];
    while (this.m_endRowHeaderPixel + height > threshold)
    {
        rowHeaderContent.removeChild(row);

        this.m_endRowHeaderPixel = this.m_endRowHeaderPixel - height;
        this.m_endRowHeader -= 1;

        row = rowHeaderContent['lastChild'];
        height = row['offsetHeight'];
    }
};

/**
 * Remove rows/cells below the current viewport
 * @param {Element} databody - the root of the databody
 */
DvtDataGrid.prototype.removeRowsFromBottom = function(databody)
{
    var databodyContent, threshold, row, height;
    databodyContent = databody['firstChild'];
    threshold = this.m_currentScrollTop + this.getViewportHeight() + this.getRowThreshold();

    // don't clean up if end of row header is not below the bottom of viewport
    if (this.m_endRowPixel > threshold)
    {
        return;
    }

    row = databodyContent['lastChild'];
    height = row['offsetHeight'];
    while (this.m_endRowPixel + height > threshold)
    {
        databodyContent.removeChild(row);

        this.m_endRowPixel = this.m_endRowPixel - height;
        this.m_endRow -= 1;

        row = databodyContent['lastChild'];
        height = row['offsetHeight'];
    }
};

/**
 * Handles mouse down on the scroller
 * @param {Event} event the mouse down event
 * @protected
 */
DvtDataGrid.prototype.handleScrollerMouseDown = function(event)
{
    // start keeping track of scrolling.  This is used to determine whether long scroll
    // should be invoke and also when to start fetching
    this.m_captureScrolling = true;
};

/**
 * Handles mouse up on the scroller
 * @param {Event} event the mouse up event
 * @protected
 */
DvtDataGrid.prototype.handleScrollerMouseUp = function(event)
{
    this.m_captureScrolling = false;

    // see if we need to check data covered the viewport
    if (this.isFetchComplete() && this.m_stopDatabodyScroll)
    {
        this.fillViewport(this.m_currentScrollLeft, this.m_currentScrollTop);
    }
};

/**
 * Debugging method to dump out current range info
 */
DvtDataGrid.prototype.dumpRanges = function()
{
    if (console != undefined && console.log)
    {
        console.log("=================");
        console.log("Start Row: " + this.m_startRow);
        console.log("  End Row: " + this.m_endRow);
        console.log("Start Column: " + this.m_startCol);
        console.log("  End Column: " + this.m_endCol);
        console.log("=================");
    }
};
/*********************************** end scrolling/virtualization ************************************/

/*********************************** start dom event handling ***************************************/

/**
 * Handle the callback from the widget to resize or sort.
 * @export
 * @param {Event} event - the original contextmenu event
 * @param {Object} ui - the ui returned from the context menu
 * @param {string} value - the value set in the dialog on resizing
 */
DvtDataGrid.prototype.handleContextMenuReturn = function(event, id, value)
{
    var target, cell, direction;
    target = event['target'];
    //Check if context menu inside a cell
    cell = this.findCell(target);
    if (id === this.m_resources.getMappedCommand('resizeHeight'))
    {
        if ((this.isResizeEnabled()))
        {
            if (cell != null)
            {
                target = this.getHeaderFromCell(cell, 'row')['firstChild'];
            }
            else 
            {
                target = this.findHeader(target);
            }
            this.handleContextMenuResize(target, 'resizeHeight', value);            
        }
    }
    else if (id === this.m_resources.getMappedCommand('resizeWidth'))
    {
        if ((this.isResizeEnabled()))
        {
            if (cell != null)
            {
                target = this.getHeaderFromCell(cell, 'column');
            } 
            else 
            {
                target = this.findHeader(target);
            }
            this.handleContextMenuResize(target, 'resizeWidth', value);            
        }
    }    
    else if (id === this.m_resources.getMappedCommand('sortColAsc') || id === this.m_resources.getMappedCommand('sortColDsc'))
    {
        direction = id === this.m_resources.getMappedCommand('sortColAsc') ? 'ascending':'descending';
        if (cell != null)
        {
            target = this.getHeaderFromCell(cell, 'column');
            if (this._isDOMElementSortable(target))
            {
                this._handleCellSort(event, direction, target);                              
            }
        }
        else
        {   
            if (this._isDOMElementSortable(target))
            {
                this._handleHeaderSort(event, direction);      
            }
        }
    }       

    else if (id === this.m_resources.getMappedCommand('sortRowAsc') || id === this.m_resources.getMappedCommand('sortRowDsc'))
    {
        direction = id === this.m_resources.getMappedCommand('sortRowAsc') ? 'ascending':'descending';
        if (cell != null)
        {
            target = this.getHeaderFromCell(cell, 'row');
            if (this._isDOMElementSortable(target))
            {
                this._handleCellSort(event, direction, target);                              
            }
        }
        else
        {   
            if (this._isDOMElementSortable(target))
            {
                this._handleHeaderSort(event, direction);      
            }
        }
    }        
};

/**
 * Determined if sort is supported for the specified axis.
 * @param {string} axis the axis which we check whether sort is supported.
 * @param {Object} obj headerContext
 * @private
 */
DvtDataGrid.prototype._isSortEnabled = function(axis, headerContext)
{
    var capability, sortable;
    capability = this.getDataSource().getCapability("sort");
    sortable = this.m_options.isSortable(axis, headerContext);
    if (sortable && (capability === "full" || capability === axis))
    {
        return true;
    }

    return false;
};

/**
 * Determined if sort is supported for the specified element.
 * @param {HMTLElement} element to check if sorting should be on
 * @private
 */
DvtDataGrid.prototype._isDOMElementSortable = function(element)
{
    if (this.m_utils.containsCSSClassName(element, this.getResources().getMappedStyle('sortascending')) ||
            this.m_utils.containsCSSClassName(element, this.getResources().getMappedStyle('sortdescending')))
    {
        element = element['parentNode']['parentNode'];
    }
    return element.getAttribute(this.getResources().getMappedAttribute('sortable')) == "true";
};

/**
 * Check if selection enabled by options on the grid
 * @return {boolean} true if selection enabled
 * @private
 */
DvtDataGrid.prototype._isSelectionEnabled = function()
{
    return (this.m_options.getSelectionCardinality() != "none");
};

/**
 * Check whether multiple row/cell selection is allowed by options on the grid
 * @return {boolean} true if multipl selection enabled
 */
DvtDataGrid.prototype.isMultipleSelection = function()
{
    return (this.m_options.getSelectionCardinality() == "multiple");
};

/**
 * Check if resizing enabled on any header by options on the grid
 * @return {boolean} true if resize enabled
 */
DvtDataGrid.prototype.isResizeEnabled = function()
{
    var row = this.m_options.isResizable("row"), column = this.m_options.isResizable("column");
    return (row["width"] !== "disable" || row["height"] !== "disable" || column["width"] !== "disable" || column["height"] !== "disable");
};

/**
 * Check if resizing enabled on a specific header
 * @param {string} axis the axis which we check whether sort is supported.
 * @param {Object} obj headerContext
 * @return {boolean} true if resize enabled
 */
DvtDataGrid.prototype._isHeaderResizeEnabled = function(axis, headerContext)
{
    var resizable = this.m_options.isResizable(axis, headerContext);
    if (axis == 'column')
    {
        if (typeof resizable['width'] == 'function')
        {
            return resizable['width'].call(this, headerContext) == 'enable' ? true:false;
        }
        return resizable['width'] == 'enable' ? true:false;
    }
    else if (axis == 'row')
    {
        if (typeof resizable['height'] == 'function')
        {
            return resizable['height'].call(this, headerContext) == 'enable' ? true:false;
        }
        return resizable['height'] == 'enable' ? true:false;
    }
    return false;
};

/**
 * Handle mousemove events on the document
 * @param {Event} event - mousemove event on the document
 */
DvtDataGrid.prototype.handleMouseMove = function(event)
{
    if (this.isResizeEnabled() && (this.m_databodyDragState == false))
    {
        this.handleResize(event);
    }
};

/**
 * Handle mousedown events on the headers
 * @param {Event} event - mousedown event on the headers
 */
DvtDataGrid.prototype.handleHeaderMouseDown = function(event)
{
    event.preventDefault();
    if (this.isResizeEnabled())
    {
        this.handleResizeMouseDown(event);
    }
};

/**
 * Handle mouseup events on the document
 * @param {Event} event - mouseup event on the document
 */
DvtDataGrid.prototype.handleMouseUp = function(event)
{
    event.preventDefault();
    if (this.isResizeEnabled())
    {
        this.handleResizeMouseUp(event);
    }
};

DvtDataGrid.prototype.handleHeaderMouseOver = function(event)
{
    if (this._isDOMElementSortable(event.target))
    {
        this._handleSortMouseOver(event);
    }
};

DvtDataGrid.prototype.handleHeaderMouseOut = function(event)
{
    if (this._isDOMElementSortable(event.target))
    {
        this._handleSortMouseOut(event);
    }
};

/**
 * Event handler for when row/column header is clicked
 * @protected
 * @param {Event} event - click event on the headers
 */
DvtDataGrid.prototype.handleHeaderClick = function(event)
{
    event.preventDefault();
    
    if (this._isDOMElementSortable(event.target))
    {
        this._handleHeaderSort(event);
    }
};

/**
 * Event handler for when mouse down anywhere in the databody
 * @protected
 * @param {Event} event - mousedown event on the databody
 */
DvtDataGrid.prototype.handleDatabodyMouseDown = function(event)
{
    // check if selection is enabled
    if (this._isSelectionEnabled())
    {
        this.handleDatabodyClickSelection(event);

        if (this.isMultipleSelection())
        {
            this.m_databodyDragState = true;
        }
    }
    else
    {
        // if selection is disable, we'll still need to highlight the active cell
        this.handleDatabodyClickActive(event);
    }
};

DvtDataGrid.prototype.handleDatabodyMouseOut = function(event)
{
    var selectionMode = this.m_options.getSelectionMode();
    if (selectionMode === 'cell')
    {    
        this.m_utils.removeCSSClassName(this.findCell(event.target), this.getResources().getMappedStyle('hover'));
    }
    else if (selectionMode === 'row')
    {
        this.m_utils.removeCSSClassName(this.findCell(event.target)['parentNode'], this.getResources().getMappedStyle('hover'));
    }
}

DvtDataGrid.prototype.handleDatabodyMouseOver = function(event)
{
    var selectionMode = this.m_options.getSelectionMode();
    if (selectionMode === 'cell')
    {
        this.m_utils.addCSSClassName(this.findCell(event.target), this.getResources().getMappedStyle('hover'));
    }
    else if (selectionMode === 'row')
    {
        this.m_utils.addCSSClassName(this.findCell(event.target)['parentNode'], this.getResources().getMappedStyle('hover'));         
    }        
}

/**
 * Event handler for when mouse move anywhere in the databody
 * @protected
 * @param {Event} event - mousemove event on the databody
 */
DvtDataGrid.prototype.handleDatabodyMouseMove = function(event)
{
    if (this.m_databodyDragState)
    {
        this.handleDatabodySelectionDrag(event);
    }
};

/**
 * Event handler for when mouse down anywhere in the databody
 * @protected
 * @param {Event} event - mouseup event on the databody
 */
DvtDataGrid.prototype.handleDatabodyMouseUp = function(event)
{
    this.m_databodyDragState = false;
};

/**
 * Event handler for when user press down a key in the databody
 * @protected
 * @param {Event} event - keydown event on the databody
 */
DvtDataGrid.prototype.handleDatabodyKeyDown = function(event)
{
    var cell;
    // if nothing is active, do nothing
    if (this.m_active == null && this.m_activeHeader == null)
    {
        return;
    }
      
    // check if header is active
    if (this.m_activeHeader != null)
    {
        //do not take control of keydown event if we aren't the active document element(context menu case)
        if (this.m_activeHeader['elem'] != document.activeElement)
        {
            return;
        }
        this.handleHeaderKeyDown(event);
    }
    else
    {
        //do not take control of keydown event if we aren't the active document element(context menu case)
        cell = this.getElementsInRange(this.createRange(this.m_active));
        if (cell == null || cell[0] != document.activeElement)
        {
            return;
        }        
        else if (this._isSelectionEnabled())
        {
            this.handleSelectionKeyDown(event);
        }
        else
        {
            // selection disable but still need to handle active cell navigation
            this.handleActiveKeyDown(event);
        }

        // see if we need to handle key event for row expander
        this.handleRowExpanderKeyDown(event);
    }
};

/**
 * Find top and left offset of an element relative to the (0,0) point on the page
 * @param {Element} element - the element to find left and top offset of
 * @return {Array.<number>} - [leftOffset, topOffset]
 */
DvtDataGrid.prototype.findPos = function(element)
{
    var parentPos, transform;
    if (element)
    {
        parentPos = this.findPos(element['offsetParent']);
        transform = this.getElementTranslationXYZ(element['parentNode']);
        return [
            parseInt(parentPos[0], 10) + parseInt(element['offsetLeft'], 10) + transform[0],
            parseInt(parentPos[1], 10) + parseInt(element['offsetTop'], 10) + transform[1]
        ];
    }
    return [0, 0];
};

/**
 * Get an elements transform3d X,Y,Z
 * @param {Element} element - the element to find transform3d X,Y,Z of
 * @return {Array.<number>} - [transformX, transformY, transformZ]
 */
DvtDataGrid.prototype.getElementTranslationXYZ = function(element)
{
    var cs, transform, matrixArray, transformX, transformY, transformZ;
    if (element)
    {
        cs = document.defaultView.getComputedStyle(element, null);
        transform = cs.getPropertyValue("-webkit-transform") ||
                cs.getPropertyValue("-moz-transform") ||
                cs.getPropertyValue("-ms-transform") ||
                cs.getPropertyValue("-o-transform") ||
                cs.getPropertyValue("transform");
        matrixArray = transform.substr(7, transform.length - 8).split(', ');
        transformX = isNaN(parseInt(matrixArray[4], 10)) ? 0 : parseInt(matrixArray[4], 10);
        transformY = isNaN(parseInt(matrixArray[5], 10)) ? 0 : parseInt(matrixArray[5], 10);
        transformZ = isNaN(parseInt(matrixArray[6], 10)) ? 0 : parseInt(matrixArray[6], 10);
        return [transformX, transformY, transformZ];
    }
    return [0, 0, 0];
};



/**
 * Event handler for when mouse wheel is used on the databody
 * @param {Event} event - mousewheel event on the databody
 */
DvtDataGrid.prototype.handleDatabodyMouseWheel = function(event)
{
    var deltaX, deltaY;
    // prevent scrolling of the page
    event.preventDefault();

    deltaX = 0;
    deltaY = 0;

    // Mac touchpad case
    if (event.wheelDeltaX)
    {
        deltaX = event.wheelDeltaX;
        deltaY = event.wheelDeltaY;
    }
    else
    {
        // using click-wheel on mouse, always vertical in this case
        deltaY = event.wheelDelta;
    }

    this.scrollDelta(deltaX, deltaY);
};

/**************** touch related methods ********************/

/**
 * Event handler for when touch is started on the databody
 * @param {Event} event - touchstart event on the databody
 */
DvtDataGrid.prototype.handleTouchStart = function(event)
{
    // we'll be handling touch
    event.preventDefault();

    var fingerCount = event.touches.length;
    // move = one finger swipe (or two?)
    if (fingerCount == 1)
    {
        // get the coordinates of the touch
        this.m_startX = event.touches[0].pageX;
        this.m_startY = event.touches[0].pageY;

        // need these to detect whether touch is hold and move vs. swipe
        this.m_currentX = this.m_startX;
        this.m_currentY = this.m_startY;        
        this.m_prevX = this.m_startX;
        this.m_prevY = this.m_startY;
        this.m_moveCount = 0;

        // flag it
        this.m_touchActive = true;
    }
    else
    {
        // more than one finger touched so cancel
        this.handleTouchCancel(event);
    }
};

/**
 * Event handler for when touch moves on the databody
 * @param {Event} event - touchmove event on the databody
 */
DvtDataGrid.prototype.handleTouchMove = function(event)
{
    var diffX, diffY;
    // we'll be handling touch
    event.preventDefault();

    if (this.m_touchActive)
    {
        this.m_currentX = event.touches[0].pageX;
        this.m_currentY = event.touches[0].pageY;

        diffX = this.m_currentX - this.m_prevX;
        diffY = this.m_currentY - this.m_prevY;
        if (Math.abs(diffX) < 10 && Math.abs(diffY) < 10)
        {
            // hold and move motion...
            this.handleTouchAndHoldScroll(diffX, diffY);
            this.m_moveCount++;
        }
        else
        {
            // a longer swipe, reset count and start x/y
            this.m_moveCount = 0;
            this.m_startX = this.m_currentX;
            this.m_startY = this.m_currentY;
        }
        this.m_prevX = this.m_currentX;
        this.m_prevY = this.m_currentY;
    }
    else
    {
        this.handleTouchCancel(event);
    }
};

/**
 * Event handler for when touch ends on the databody
 * @param {Event} event - touchend event on the databody
 */
DvtDataGrid.prototype.handleTouchEnd = function(event)
{
    var swipeLength, swipeAngle, swipeDir;
    event.preventDefault();

    if (this.m_touchActive)
    {
        // detect whether this is a select
        if (this._isSelectionEnabled())
        {
            if (this.m_currentX == this.m_startX && this.m_currentY == this.m_startY)
            {
                this.handleDatabodyClickSelection(event);
                return;
            }
        }

        // detect whether this is a swipe
        if (this.m_moveCount > 1)
        {
            this.handleTouchCancel(event); // reset the variables
            return;
        }

        // use the Distance Formula to determine the length of the swipe
        swipeLength = Math.round(Math.sqrt(Math.pow(this.m_currentX - this.m_startX, 2) + Math.pow(this.m_currentY - this.m_startY, 2)));
        // if the user swiped more than the minimum length (set at 0 now), perform the appropriate action
        if (swipeLength > 0)
        {
            swipeAngle = this.caluculateAngle();
            swipeDir = this.determineSwipeDirection(swipeAngle);
            this.handleSwipe(swipeLength, swipeDir);
        }
    }

    this.handleTouchCancel(event);
};

/**
 * Event handler for when touch is cancelled on the databody
 * @param {Event} event - touchcancel event on the databody
 */
DvtDataGrid.prototype.handleTouchCancel = function(event)
{
    // reset the variables back to default values
    this.m_touchActive = false;
    this.m_moveCount = 0;
    this.m_startX = 0;
    this.m_startY = 0;
    this.m_prevX = 0;
    this.m_prevY = 0;
    this.m_currentX = 0;
    this.m_currentY = 0;
};

/**
 * Handling touch and hold scroll
 * @param {number} deltaX - change in X scroll position
 * @param {number} deltaY - change in Y scroll position
 */
DvtDataGrid.prototype.handleTouchAndHoldScroll = function(deltaX, deltaY)
{
    this.scrollDelta(deltaX, deltaY);
};

/**
 * Handling swipe gesture scroll
 * @param {number} swipeLength - length of swipe
 * @param {string} swipeDirection - direction of swipe
 */
DvtDataGrid.prototype.handleSwipe = function(swipeLength, swipeDirection)
{
    // give it extra momentum
    swipeLength = swipeLength + 10;

    if (swipeDirection == 'down')
    {
        this.scrollDelta(0, swipeLength);
    }
    else if (swipeDirection == 'up')
    {
        this.scrollDelta(0, -swipeLength);
    }
    else if (swipeDirection == 'left')
    {
        this.scrollDelta(-swipeLength, 0);
    }
    else if (swipeDirection == 'right')
    {
        this.scrollDelta(swipeLength, 0);
    }
};

/**
 * Calculate the angle of the swipe using the current versus starting positions.
 */
DvtDataGrid.prototype.caluculateAngle = function()
{
    var X, Y, Z, r, swipeAngle;
    X = this.m_startX - this.m_currentX;
    Y = this.m_currentY - this.m_startY;

    Z = Math.round(Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2))); //the distance - rounded - in pixels
    r = Math.atan2(Y, X); //angle in radians (Cartesian system)
    swipeAngle = Math.round(r * 180 / Math.PI); //angle in degrees
    if (swipeAngle < 0)
    {
        swipeAngle = 360 - Math.abs(swipeAngle);
    }
    return swipeAngle;
};

/**
 * Determine the swipe direction based on angle
 * @param {number} swipeAngle - angle of swipe
 * @return {string} direction of swipe, left/right/up/down
 */
DvtDataGrid.prototype.determineSwipeDirection = function(swipeAngle)
{
    var swipeDirection;
    if ((swipeAngle <= 45) && (swipeAngle >= 0))
    {
        swipeDirection = 'left';
    }
    else if ((swipeAngle <= 360) && (swipeAngle >= 315))
    {
        swipeDirection = 'left';
    }
    else if ((swipeAngle >= 135) && (swipeAngle <= 225))
    {
        swipeDirection = 'right';
    }
    else if ((swipeAngle > 45) && (swipeAngle < 135))
    {
        swipeDirection = 'down';
    }
    else
    {
        swipeDirection = 'up';
    }
    return swipeDirection;
};
/************* end touch related methods ********************/

/**
 * Callback on a widget listener
 * @param {string} functionName - the function name to look up in the callbacks
 * @param {Object} details - the object to pass into the callback function
 */
DvtDataGrid.prototype.fireEvent = function(functionName, details)
{
    var callback;
    if (functionName == null || details == null)
    {
        return;
    }

    callback = this.callbacks[functionName];
    if (callback != null)
    {
        callback(details);
    }
};

/**
 * Add a callback function to the callbacks object
 * @param {string} functionName - the function name to callback on
 * @param {Object.<Function>} handler - the function to callback to
 */
DvtDataGrid.prototype.addListener = function(functionName, handler)
{
    this.callbacks[functionName] = handler;
};
/*********************************** end dom event handling ***************************************/

/**
 * Set the style height on an element in pixels
 * @param {HTMLElement} elem - the element to set height on
 * @param {number} height - the pixel height to set the element to
 */
DvtDataGrid.prototype.setElementHeight = function(elem, height)
{
    elem['style']['height'] = height + "px";
};

/**
 * Get a number of the style height of an element 
 * @param {HTMLElement} elem - the element to get height on
 * @return {number} the style height of the element
 */
DvtDataGrid.prototype.getElementHeight = function(elem)
{
    return parseInt(elem['style']['height'], 10);
};

/**
 * Set the style width on an element in pixels
 * @param {HTMLElement} elem - the element to set width on
 * @param {number} width - the pixel width to set the element to
 */
DvtDataGrid.prototype.setElementWidth = function(elem, width)
{
    elem['style']['width'] = width + "px";
};

/**
 * Get a number of the style width of an element 
 * @param {HTMLElement} elem - the element to get width on
 * @return {number} the style width of the element
 */
DvtDataGrid.prototype.getElementWidth = function(elem)
{
    return parseInt(elem['style']['width'], 10);
};

/**
 * Set the style left/right/top/bottom on an element in pixels
 * @param {HTMLElement} elem - the element to set width on
 * @param {number} pix - the pixel width to set the element to
 * @param {string} dir - 'left','right','top,'bottom'
 * */
DvtDataGrid.prototype.setElementDir = function(elem, pix, dir)
{
    elem['style'][dir] = pix + "px";
};

/**
 * Get a number of the style left/right/top/bottom of an element 
 * @param {HTMLElement} elem - the element to get style left/right/top/bottom on
 * @param {string} dir - 'left','right','top,'bottom' 
 * @return {number} the style left/right/top/bottom of the element
 */
DvtDataGrid.prototype.getElementDir = function(elem, dir)
{
    return parseInt(elem['style'][dir], 10);
};

/************************* Model change event *****************************************/
/**
 * @private
 */
DvtDataGrid.BEFORE = 1;

/**
 * @private
 */
DvtDataGrid.AFTER = 2;

/**
 * @private
 */
DvtDataGrid.INSIDE = 3;

/**
 * Checks whether an index (row/column) is within the range of the current viewport.
 * @param {Object} the row and column indexes
 * @return {number} BEFORE if the index is before the current viewport, AFTER if the index is after 
 *         the current viewport, INSIDE if the index is within the current viewport
 * @private
 */
DvtDataGrid.prototype._isInViewport = function(indexes)
{
    var rowIndex, columnIndex;

    rowIndex = indexes['row'];
    columnIndex = indexes['column'];

    if (rowIndex === -1 && columnIndex === -1)
    {
        // actually, this is an invalid index... should throw an error?
        return -1;
    }
    
    // if row index wasn't specified, just verify the column range
    if (rowIndex === -1)
    {
        if (columnIndex < this.m_startCol)
        {
            return DvtDataGrid.BEFORE;
        }

        if (columnIndex > this.m_endCol)
        {
            return DvtDataGrid.AFTER;
        }

        // if it's not before or after, it must be inside
        return DvtDataGrid.INSIDE;
    }

    // if column index wasn't specified, just verify the row range
    if (columnIndex === -1)
    {
        if (rowIndex < this.m_startRow)
        {
            return DvtDataGrid.BEFORE;
        }

        if (rowIndex > this.m_endRow)
        {
            return DvtDataGrid.AFTER;
        }

        // if it's not before or after, it must be inside
        return DvtDataGrid.INSIDE;
    }

    // both row and column index are defined, then check both ranges
    if (columnIndex >= this.m_startCol && columnIndex <= this.m_endCol && rowIndex >= this.m_startRow && rowIndex <= this.m_endRow)
    {
        return DvtDataGrid.INSIDE;
    }

    // undefined
    return -1;
};

/**
 * Model event handler
 * @param {Object} event the model change event
 * @protected
 */
DvtDataGrid.prototype.handleModelEvent = function(event)
{
    var operation, keys, cellSet;

    operation = event['operation'];
    keys = event['keys'];

    if (operation === 'insert')
    {
        cellSet = event['result'];
        if (cellSet != null)
        {
            // range insert event with cellset returned
            this._handleModelInsertRangeEvent(cellSet);
        }
        else
        {
            this._handleModelInsertEvent(keys);
        }
    }
    else if (operation === 'update')
    {
        this._handleModelUpdateEvent(keys);
    }
    else if (operation === 'delete')
    {
        this._handleModelDeleteEvent(keys);
    }
    else if (operation === 'refresh')
    {
        this._handleModelRefreshEvent();
    }
    else if (operation === 'sync')
    {
        this._handleModelSyncEvent(event);
    }
};

/**
 * Handles model insert event
 * @param {Object} keys the key that identifies the row that got inserted.
 * @private
 */
DvtDataGrid.prototype._handleModelInsertEvent = function(keys)
{
    var indexes, flag, scrollTop;

    indexes = this.getDataSource().indexes(keys)

    // checks if the new row/column is in the viewport
    flag = this._isInViewport(indexes);
    if (flag === DvtDataGrid.INSIDE)
    {
        // an insert can only be a insert new row or new column.  A cell insert is
        // automatically treated as row insert
        if (keys['row'])
        {
            this.fetchCells(this.m_databody, this.m_scroller, indexes['row'], this.m_startCol, 1, this.m_endCol-this.m_startCol, {"success": this._handleCellInsertsFetchSuccess});
        }
        else if (keys['column'])
        {
            // todo: handle column insert
        }
    }
    else
    {
        // figure out the scroll position of the inserted row
        scrollTop = indexes['row'] * this.m_avgRowHeight;

        // just do a long scroll to make the inserted row visible
        this.m_scroller['scrollTop'] = scrollTop;        
    }
};

/**
 * Handle a successful call to the data source fetchCells. Update the row and 
 * cell DOM elements when necessary.
 * @param {Object} cellSet - a CellSet object which encapsulates the result set of cells
 * @param {Array.<Object>} cellRange - [rowRange, columnRange] - [{"axis":,"start":,"count":},{"axis":,"start":,"count":,"databody":,"scroller":}]
 */
DvtDataGrid.prototype._handleCellInsertsFetchSuccess = function(cellSet, cellRanges)
{
    var rowStart;

    // so that grid will be resize
    this.m_initialized = false;

    // insert the row
    this.handleCellsFetchSuccess(cellSet, cellRanges, this.m_endRow > cellRanges[0]['start']);

    // make sure the new row is in range
    rowStart = cellRanges[0]['start'];
    this._scrollRowIntoViewport(rowStart);

    // clean up rows outside of viewport (for non-highwatermark scrolling only)
    if (!this._isHighWatermarkScrolling())
    {
        this._cleanupViewport();
    }
};

/**
 * Scrolls the row with index into the viewport
 * @param {number} index the row index
 * @private
 */
DvtDataGrid.prototype._scrollRowIntoViewport = function(index)
{
    var absIndex, databodyContent, row, viewportTop, viewportBottom, rowTop, diff;

    absIndex = index - this.m_startRow;
    databodyContent = this.m_databody['firstChild'];
    row = databodyContent['childNodes'][absIndex+1];
    if (row == null)
    {
        // something is wrong the newly inserted row does not exists
        return;
    }

    viewportTop = this.m_currentScrollTop;
    viewportBottom = this.m_currentScrollTop + this.getElementHeight(this.m_databody);

    rowTop = row.offsetTop;
    diff = viewportTop - rowTop;
    if (diff > 0)
    {
        // row added to top, scroll up
        this.scrollDelta(0, diff);
    }
    else
    {
        diff = viewportBottom - rowTop;
        if (diff < 0)
        {
            // row added to bottom, scroll down
            this.scrollDelta(0, diff);
        }
    }
};

/**
 * Remove any rows that are outside of the viewport.
 * @private
 */
DvtDataGrid.prototype._cleanupViewport = function()
{
    var viewportTop, viewportBottom;

    viewportTop = this.m_currentScrollTop;
    viewportBottom = this.m_currentScrollTop + this.getElementHeight(this.m_databody);

    if (viewportTop > this.m_startRowPixel)
    {
        // clean up top rows
        if ((this.m_endRow - this.m_startRow) > this.MAX_ROW_THRESHOLD)
        {
            this.removeRowsFromTop(this.m_databody);
        }
    }
    else if (viewportBottom < this.m_endRowPixel)
    {
        // clean up bottom rows
        if ((this.m_endRow - this.m_startRow) > this.MAX_ROW_THRESHOLD)
        {
            this.removeRowsFromBottom(this.m_databody);
        }
    }
    this.updateRowBanding();
    this.updateColumnBanding();
};

/**
 * Handles model range insert event
 * @param {Object} cellSet the range of cells inserted.
 * @private
 */
DvtDataGrid.prototype._handleModelInsertRangeEvent = function(cellSet)
{
    var rowRange, columnRange;

    // reconstruct the cell ranges from result
    rowRange = {"axis": "row", "start": cellSet.getStart("row"), "count": cellSet.getCount("row")};
    columnRange = {"axis": "column", "start": cellSet.getStart("column"), "count": cellSet.getCount("column")};
    
    // insert the rows
    this._handleCellInsertsFetchSuccess(cellSet, [rowRange, columnRange]);
};

/**
 * Handles model update event
 * @param {Object} keys the key that identifies the row that got updated.
 * @private
 */
DvtDataGrid.prototype._handleModelUpdateEvent = function(keys)
{
    var indexes, flag, rowRange, columnRange;

    indexes = this.getDataSource().indexes(keys)

    // if the new row/column is in the viewport
    flag = this._isInViewport(indexes);
    if (flag === DvtDataGrid.INSIDE)
    {
        // range for the updated row
        rowRange = {"axis": "row", "start": indexes['row'], "count": 1};
        columnRange = {"axis": "column", "start": this.m_startCol, "count": this.m_endCol-this.m_startCol};

        this.showStatusText();

        // fetch the updated row
        this.getDataSource().fetchCells([rowRange, columnRange], {"success": this._handleCellUpdatesFetchSuccess, 
            "error": this.handleHeadersFetchError}, {'success': this, 'error': this});
    }

    // if it's not in range then do nothing
};

/**
 * Handle a successful call to the data source fetchCells. Update the row and 
 * cell DOM elements when necessary.
 * @param {Object} cellSet - a CellSet object which encapsulates the result set of cells
 * @param {Array.<Object>} cellRange - [rowRange, columnRange] - [{"axis":,"start":,"count":},{"axis":,"start":,"count":,"databody":,"scroller":}]
 * @private
 */
DvtDataGrid.prototype._handleCellUpdatesFetchSuccess = function(cellSet, cellRange)
{
    var rowStart, databodyContent, renderer, columnBandingInterval, rowBandingInterval, rowIndex, row;

    rowStart = cellRange[0]['start'];
    databodyContent = this.m_databody['firstChild'];

    renderer = this.m_options.getRenderer("cell");
    columnBandingInterval = this.m_options.getColumnBandingInterval();
    rowBandingInterval = this.m_options.getRowBandingInterval();

    // gets the relative index to the dom
    rowIndex = rowStart - this.m_startRow;
    row = databodyContent.childNodes[rowIndex+1];  // +1 since first one is resizer

    // update the cells in the row
    this._updateCellsInRow(cellSet, row, rowIndex, renderer, this.m_startCol, columnBandingInterval, rowBandingInterval);
};

/**
 * Retrieves the type of update animation to use.
 * @return {number} the type of update animation.  See constants.
 * @private
 */
DvtDataGrid.prototype._getUpdateAnimation = function()
{
    return DvtDataGrid.UPDATE_ANIMATION_SLIDE_INOUT;
};

/**
 * Retrieves the update animation duration.
 * @return {number} the animation duration.
 * @private
 */
DvtDataGrid.prototype._getUpdateAnimationDuration = function()
{
    return DvtDataGrid.UPDATE_ANIMATION_DURATION;
};

/**
 * Adds cells to a row. Iterate over the cells passed in, create new div elements 
 * for them settign appropriate styles, and append or prepend them to the row based on the start column.
 * @param {Object} cells - the result set of cell data
 * @param {Element} row - the row element to update cells
 * @param {number} rowIndex - the index of the row element
 * @param {function(Object)} renderer - the cell renderer
 * @param {number} columnStart - the index to start start adding at
 * @param {number} columnBandingInterval - the column banding interval
 * @param {number} rowBandingInterval - the row banding interval
 * @private
 */
DvtDataGrid.prototype._updateCellsInRow = function(cellSet, row, rowIndex, renderer, columnStart, columnBandingInterval, rowBandingInterval)
{
    var animationType, animationDuration;

    animationType = this._getUpdateAnimation();
    animationDuration = this._getUpdateAnimationDuration();

    switch(animationType)
    {
        case DvtDataGrid.UPDATE_ANIMATION_FADE_INOUT:
            row['style']['opacity'] = 0;
            break;
        case DvtDataGrid.UPDATE_ANIMATION_SLIDE_INOUT:
            row['style']['left'] = this.getWidth()+'px';
            break;
        default:
            // do nothing
    }
    
    setTimeout(function() {
        // clear the content of the row first
        row.innerHTML = "";

        // calls addCellsToRow
        this.addCellsToRow(cellSet, row, rowIndex, renderer, true, columnStart, false, columnBandingInterval);

        // hide fetching text now that we are done
        this.hideStatusText();

        setTimeout(function() {
            switch(animationType)
            {
                case DvtDataGrid.UPDATE_ANIMATION_FADE_INOUT:
                    row['style']['opacity'] = 1;
                    break;
                case DvtDataGrid.UPDATE_ANIMATION_SLIDE_INOUT:
                    row['style']['left'] = '0px';
                    break;
                default:
                    // do nothing
            }
        }, animationDuration);
    }.bind(this), animationDuration);
};

/**
 * Handles model delete event
 * @param {Object} keys the key that identifies the row that got deleted.
 * @private
 */
DvtDataGrid.prototype._handleModelDeleteEvent = function(keys)
{
    var key, i, rowKey, row, totalHeight, height, referenceRow, databodyContent, scrollerContent, databodyContentHeight;

    // make it an array if it's a single entry event
    if (!Array.isArray(keys))
    {
        keys = new Array(keys);
    }

    totalHeight = 0;
    for (i=0; i<keys.length; i++)
    {
        key = keys[i];

        // delete row or column
        if (key['row'])
        {
            rowKey = key['row'];
            // find the row locally, we can't ask the datasource for its index since
            // it's already removed.
            row = this._findRowByKey(rowKey);
            if (row != null)
            {
                height = this.getElementHeight(row);

                referenceRow = row['nextSibling'];
                this.pushRowsUp(referenceRow, height);
                row['parentNode'].removeChild(row);
                row['style']['display'] = 'none';
            }
            else
            {
                // outside of viewport
                height = this.m_avgRowHeight;
            }

            // adjust range
            this.m_endRow = this.m_endRow - 1;
            this.m_endRowPixel = this.m_endRowPixel - height;

            totalHeight = totalHeight + height;
        }
        else if (keys['column'])
        {
            // todo: handle remove column
        }
    }

    // adjust the databody height         
    databodyContent = this.m_databody['firstChild'];
    scrollerContent = this.m_scroller['firstChild'];
    databodyContentHeight = this.getElementHeight(databodyContent)-totalHeight;
    this.setElementHeight(databodyContent, databodyContentHeight);
    this.setElementHeight(scrollerContent, databodyContentHeight);

    // now resize the grid
    this.resizeGrid();

    // check viewport to see if we need to fetch because of deleted row causing empty spaces
    this.m_stopRowFetch = false;
    this.fillViewport(this.m_currentScrollLeft, this.m_currentScrollTop);
};

/**
 * Find the row element by row key
 * @param {Object} key the row key
 * @return {Element} the row element
 * @private
 */
DvtDataGrid.prototype._findRowByKey = function(key)
{
    var databodyContent, rows, row, i, rowKey, keyAttribute;
    
    if (this.m_databody == null)
    {
        return null;
    }

    databodyContent = this.m_databody['firstChild'];
    rows = databodyContent['childNodes'];
    keyAttribute = this.getResources().getMappedAttribute('key');
    for (i=1; i<rows.length; i++)
    {
        row = rows[i];
        rowKey = row.getAttribute(keyAttribute);
        if (rowKey == key)
        {
            return row;
        }        
    }

    // can't find it, the row is not in viewport
    return null;
};

/**
 * Handles model refresh event
 * @private
 */
DvtDataGrid.prototype._handleModelRefreshEvent = function()
{
   // for refresh, we'll just re-render the viewport
   this.handleLongScroll(this.m_currentScrollLeft, this.m_currentScrollTop);
};

/**
 * Handles data source fetch end (model sync) event
 * @param {Object} event the model event
 * @private
 */
DvtDataGrid.prototype._handleModelSyncEvent = function(event)
{
    var startRow, pageSize,startRowPixel, startCol, startColPixel;
    //Currently these are set to zero for now, may come from the event later
    startRow = 0;
    startRowPixel = 0;   
    startCol = 0;
    startColPixel = 0;
    pageSize = event['pageSize'];

    //cancel previous fetch calls
    this.m_fetching = {};

    // reset ranges
    this.m_startRow = startRow;
    this.m_endRow = startRow;
    this.m_startRowHeader = startRow;
    this.m_endRowHeader = startRow;
    this.m_startRowPixel = startRowPixel;
    this.m_endRowPixel = startRowPixel;
    this.m_startRowHeaderPixel = startRowPixel;
    this.m_endRowHeaderPixel = startRowPixel; 
    this.m_startCol = startCol;
    this.m_endCol = startCol;
    this.m_startColHeader = startCol;
    this.m_endColHeader = startCol;
    this.m_startColPixel = startColPixel;
    this.m_endColPixel = startColPixel;
    this.m_startColHeaderPixel = startColPixel;
    this.m_endColHeaderPixel = startColPixel;    
    
    //reset cached sizing
    this.m_cachedRowHeight = [];
    this.m_cachedColumnWidth = [];
    this.m_cachedRowHeightStartIndex = 0;    
    this.m_cachedColumnWidthStartIndex = 0;    

    this.m_stopDatabodyScroll = false;
    this.m_captureScrolling = false;
    this.m_avgRowHeight = undefined;
    this.m_avgColWidth = undefined;

    this.m_isEstimateRowCount = undefined;
    this.m_isEstimateColumnCount = undefined;
    this.m_stopRowFetch = false;
    this.m_stopRowHeaderFetch = false;
    this.m_stopColumnFetch = false;
    this.m_stopColumnHeaderFetch = false;
    
    //clear selections
    this.m_selection = null;    
    this.m_active = null;
    
    //use long scroll callback to empty the headers/databody
    if (!this.m_initialized)
    {
        this.fetchHeaders("column", 0, this.m_colHeader);
        this.fetchHeaders("row", startRow, this.m_rowHeader);
        this.fetchCells(this.m_databody, this.m_scroller, startRow, 0);
    } 
    else 
    {
        this.fetchHeaders("row", startRow, this.m_rowHeader, undefined, {'success': function(headerSet, headerRange)
            {
                this.handleRowHeadersFetchSuccessForLongScroll(headerSet, headerRange, startRowPixel);
            }});
        this.fetchHeaders("column", startCol, this.m_colHeader, undefined, {'success': function(headerSet, headerRange)
            {
                this.handleColumnHeadersFetchSuccessForLongScroll(headerSet, headerRange);
            }});

        this.fetchCells(this.m_databody, this.m_scroller, startRow, startCol, null, null, {'success': function(cellSet, cellRange)
            {
                this.handleCellsFetchSuccessForLongScroll(cellSet, cellRange, startRow, startCol, startRowPixel, startColPixel);
            }});
        this.setInitialScrollPosition();

    }

};

/************************************ active cell navigation ******************************/
/**
 * Handles click to make a cell active
 * @param {Event} event
 */
DvtDataGrid.prototype.handleDatabodyClickActive = function(event)
{
    var cell, index;

    cell = this.findCell(event.target);
    if (cell != null)
    {
        index = this.createIndex(this.getRowIndex(cell['parentNode']), this.getCellIndex(cell));
    }

    if (index != null && index != undefined)
    {
        // make sure the cell is visible
        this.scrollToIndex(index);
        
        this.activeAndFocus(index);
    }
};

/**
 * Focus on the specified element and make it active
 * @param {Object} index - the end index of the selection.      
 */
DvtDataGrid.prototype.activeAndFocus = function(index)
{
    if (this.m_active != null)
    {
        // unhighlight previous
        this.unhighlightActive();
    }

    this.m_active = index;
    this.highlightActive();
};

/**
 * Retrieve the index of a row
 * @param {Element|EventTarget} row
 * @return {number}
 */
DvtDataGrid.prototype.getRowIndex = function(row)
{
    var index = this.m_startRow;
    while (row['previousSibling'])
    {
        index += 1;
        row = row['previousSibling'];
    }
    return index - 1; // the first row is a resizer, skip it
};

/**
 * Retrieve the (column) index of a cell
 * @param {Element|EventTarget} cell
 * @return {number}
 */
DvtDataGrid.prototype.getCellIndex = function(cell)
{
    var index = this.m_startCol;
    while (cell['previousSibling'])
    {
        index += 1;
        cell = cell['previousSibling'];
    }
    return index;
};

/**
 * Find the cell element (recursively if needed)
 * @private
 * @param {Element|EventTarget} elem
 * @return {Element|EventTarget}
 */
DvtDataGrid.prototype.findCell = function(elem)
{
    return this.find(elem, "cell");
};

/**
 * Find the cell element (recursively if needed)
 * @param {Element|EventTarget} elem
 * @param {string} key
 * @param {string=} className 
 * @return {Element|EventTarget}
 */
DvtDataGrid.prototype.find = function(elem, key, className)
{
    // if element is null or if we reach the root of DataGrid
    if (elem == null || elem == this.getRootElement())
    {
        return null;
    }

    // recursively walk up the element and find the class name that matches the cell class name
    if (className == undefined)
    {
        className = this.getResources().getMappedStyle(key);
    }

    if (className == null)
    {
        return null;
    }

    // if the element contains the cell class name, then it's a cell, otherwise go up
    if (this.m_utils.containsCSSClassName(elem, className))
    {
        return elem;
    }
    return this.find(elem['parentNode'], key, className);
};

/**
 * Highlight active element
 */
DvtDataGrid.prototype.highlightActive = function()
{
    var cell = this.highlightIndex(this.m_active, "active");
    // also set focus index on it
    if (cell != null)
    {
        // focus on the cell (or first cell in the row)
        this.setAriaProperties(cell, true);
    }
};

/**
 * Unhighlight the active index, and turn the active index to selected instead if selectActive is true.
 * @param {boolean=} selectActive
 */
DvtDataGrid.prototype.unhighlightActive = function(selectActive)
{
    var cell, selectedClassName;
    cell = this.unhighlightIndex(this.m_active, true);
    if (selectActive)
    {
        selectedClassName = this.getResources().getMappedStyle("selected");
        if (selectedClassName != null)
        {
            this.highlightIndex(this.m_active, selectedClassName);
        }
    }

    // also set focus index on it
    if (cell != null)
    {
        this.unsetAriaProperties(cell);
    }
};

/**
 * Highlight a single cell index
 * @param {Object} index
 * @param {string=} style
 * @return {Element} the cell element that got highlighted.
 */
DvtDataGrid.prototype.highlightIndex = function(index, style)
{
    var cell, range, className, singleCell;

    range = this.createRange(index);
    cell = this.getElementsInRange(range);
    if (cell == null || cell.length == 0)
    {
        return;
    }

    if (style == undefined)
    {
        style = "selected";
    }

    singleCell = cell[0];
    className = this.getResources().getMappedStyle(style);
    if (className != null)
    {
        this.m_utils.addCSSClassName(singleCell, className);
        // only do it if index is a cell
        if (index['row'] && index['column'])
        {
            this.setAriaProperties(singleCell);
        }
    }        

    return singleCell;
};

/**
 * Unhighlight a single cell index
 * @param {Object} index
 * @param {boolean=} activeOnly
 */
DvtDataGrid.prototype.unhighlightIndex = function(index, activeOnly)
{
    var cell, range, activeClassName, selectedClassName, singleCell;
    range = this.createRange(index);
    cell = this.getElementsInRange(range);
    if (cell == null || cell.length == 0)
    {
        return;
    }

    singleCell = cell[0];
    activeClassName = this.getResources().getMappedStyle("active");
    if (activeClassName != null)
    {
        this.m_utils.removeCSSClassName(singleCell, activeClassName);
    }

    if (activeOnly == undefined || !activeOnly)
    {
        selectedClassName = this.getResources().getMappedStyle("selected");
        if (selectedClassName != null)
        {
            this.m_utils.removeCSSClassName(singleCell, selectedClassName);
            this.unsetAriaProperties(singleCell);
        }
    }

    return singleCell;
};

/**
 * Sets appropriate wai-aria properties on a cell.
 * @param {Element} the cell element in which to set all wai-aria properties.
 * @param {boolean} whether to set focus on the cell
 */
DvtDataGrid.prototype.setAriaProperties = function(cell, focus)
{
    // set focus index
    cell.setAttribute("tabIndex", 0);
    // needed for JAWS in FF
    // cell.setAttribute("contenteditable", "true");
    cell.setAttribute("aria-labelledby", this.getLabelledBy(cell));        

    if (focus != undefined)
    {
        // check to see if we should focus on the cell later
        if (this.m_cellToFocus == null || this.m_cellToFocus != cell)
        {
            cell.focus();
        }
    }
};

/**
 * Reset all wai-aria properties from a cell.
 * @param {Element} the cell element in which to reset all wai-aria properties.
 */
DvtDataGrid.prototype.unsetAriaProperties = function(cell)
{
    // reset focus index
    cell.setAttribute("tabIndex", -1);
    // remove aria related attributes
    cell.removeAttribute("contenteditable");
    cell.removeAttribute("aria-labelledby");        
};

/**
 * Returns the wai-aria labelled by property for a cell
 * @param {Element} cell the element for the cell
 * @return {string} the wai-aria labelled by property for the cell
 */
DvtDataGrid.prototype.getLabelledBy = function(cell)
{
    var label, row, rowIndex, rows, colIndex, columns;

    label = "";
    // the row header, if any    
    if (this.m_rowHeader != null)
    {
        row = cell['parentNode'];
        rowIndex = this.findIndexOf(row);
        if (rowIndex > -1)
        {
            rows = this.m_rowHeader['firstChild']['childNodes'];
            // row headers might not exists
            if (rowIndex < rows.length)
            {
                label = rows[rowIndex]['id'];
            }
        }
    }
    
    // the column header
    if (this.m_colHeader != null)
    {
        colIndex = this.findIndexOf(cell);
        if (colIndex > -1)
        {
            columns = this.m_colHeader['firstChild']['childNodes'];
            if (colIndex < columns.length)
            {
                if (label == "")
                {
                    label = columns[colIndex]['id'];
                }
                else
                {
                    label = [label, columns[colIndex]['id']].join(",");
                }
            }
        }
    }
    
    // finally the state info
    if (label == "")
    {
        label = this.createSubId("state");
    }
    else
    {
        label = [label, this.createSubId("state")].join(",");
    }
    
    return label;
};

/**
 * Returns the header that is in line with a cell along an axis. 
 * Key Note: in the case of row, we return the row not the headercell
 * @param {Element} cell the element for the cell
 * @param {string} axis the axis along which to find the header, 'row', 'column'
 * @return {Element} the header Element along the axis
 */
DvtDataGrid.prototype.getHeaderFromCell = function(cell, axis)
{
    var row, rowIndex, rows, colIndex, columns;
    if (axis === 'row') {
        if (this.m_rowHeader != null)
        {
            row = cell['parentNode'];
            rowIndex = this.findIndexOf(row);
            if (rowIndex > -1)
            {                
                rows = this.m_rowHeader['firstChild']['childNodes'];
                // row headers might not exists
                if (rowIndex < rows.length)
                {
                    
                    return rows[rowIndex];
                }
            }
        }
    }
    else if (axis === 'column')
    {
        if (this.m_colHeader != null)
        {
            colIndex = this.findIndexOf(cell);
            if (colIndex > -1)
            {
                columns = this.m_colHeader['firstChild']['childNodes'];
                if (colIndex < columns.length)
                {
                    return columns[colIndex];
                }
            }
        }
    }
    return null;
};



/**
 * Helper method to find the index of a child from its parent
 * @param {Element} elem an HTML element
 * @return {number} the index of the element relative to its parent
 */
DvtDataGrid.prototype.findIndexOf = function(elem)
{
    var child, children, index, i;

    children = elem['parentNode']['childNodes'];
    index = -1;
    for (i=0; i<children.length; i += 1)
    {
        child = children[i];
        if (child === elem)
        {
            return index+1;
        }

        if (child.nodeName == 'DIV')
        {
            index++;
        }
    }

    return index;
};

/**
 * Creates a range object given the start and end index
 * @param {Object} startIndex - the start index of the range
 * @param {Object=} endIndex - the end index of the range.  Optional, if not specified it represents a single cell/row 
 * @return {Object} a range object representing the start and end index.
 */
DvtDataGrid.prototype.createRange = function(startIndex, endIndex)
{
    var startRow, endRow, startColumn, endColumn;
    // todo: retrieve key from model
    if (endIndex)
    {
        // -1 means unbound
        if (startIndex['row'] < endIndex['row'] || endIndex['row'] == -1)
        {
            startRow = startIndex['row'];
            endRow = endIndex['row'];
        }
        else
        {
            startRow = endIndex['row'];
            endRow = startIndex['row'];
        }

        // row based selection does not have column specified for range
        if (!isNaN(startIndex['column']) && !isNaN(endIndex['column']))
        {
            // -1 means unbound
            if (startIndex['column'] < endIndex['column'] || endIndex['column'] == -1)
            {
                startColumn = startIndex['column'];
                endColumn = endIndex['column'];
            }
            else
            {
                startColumn = endIndex['column'];
                endColumn = startIndex['column'];
            }

            startIndex = {
                "row": startRow, "column": startColumn
            };
            endIndex = {
                "row": endRow, "column": endColumn
            };
        }
        else
        {
            startIndex = {
                "row": startRow
            };
            endIndex = {
                "row": endRow
            };
        }
    }

    return {
        "startIndex": startIndex, "endIndex": endIndex
    };
};

/**
 * Retrieve the end index of the range, return start index if end index is undefined
 * @return {Object}
 */
DvtDataGrid.prototype.getEndIndex = function(range)
{
    return (range['endIndex'] == null) ? range['startIndex'] : range['endIndex'];
};

/**
 * Grabs all the elements in the databody which are within the specified range.
 * @param range - the range in which to get the elements
 * @param {number=} startRow
 * @param {number=} endRow
 * @param {number=} startCol
 * @param {number=} endCol
 * @return {Array}
 */
DvtDataGrid.prototype.getElementsInRange = function(range, startRow, endRow, startCol, endCol)
{
    var startIndex, endIndex, rangeStartRow, rangeEndRow, rangeStartColumn, rangeEndColumn, nodes, databodyContent, rows, i, columns, j, cell, row;
    if (startRow == undefined)
    {
        startRow = this.m_startRow;
    }
    if (endRow == undefined)
    {
        endRow = this.m_endRow;
    }

    startIndex = range['startIndex'];
    endIndex = this.getEndIndex(range);

    rangeStartRow = startIndex['row'];
    rangeEndRow = endIndex['row'];
    // index = -1 means unbounded index
    if (rangeEndRow == -1)
    {
        rangeEndRow = Number.MAX_VALUE;
    }

    // check if in the rendered range
    if (endRow < rangeStartRow || rangeEndRow < startRow)
    {
        return null;
    }

    if (!isNaN(startIndex['column']) && !isNaN(endIndex['column']))
    {
        rangeStartColumn = startIndex['column'];
        rangeEndColumn = endIndex['column'];
        // index = -1 means unbounded index
        if (rangeEndColumn == -1)
        {
            rangeEndColumn = Number.MAX_VALUE;
        }

        // check if in the rendered range
        if (this.m_endCol < rangeStartColumn || rangeEndColumn < this.m_startCol)
        {
            return null;
        }
    }

    nodes = [];
    // now walk the databody to find the nodes in range
    databodyContent = this.m_databody['firstChild'];
    rows = databodyContent['childNodes'];

    // the range is within the databody, calculate the relative position
    rangeStartRow = Math.max(0, rangeStartRow - this.m_startRow);
    rangeEndRow = Math.min(rows.length - 1, rangeEndRow - this.m_startRow + 1);

    // cell case
    if (!isNaN(rangeStartColumn) && !isNaN(rangeEndColumn))
    {
        if (startCol == undefined)
        {
            startCol = this.m_startCol;
        }
        if (endCol == undefined)
        {
            endCol = this.m_endCol;
        }

        rangeStartColumn = Math.max(0, rangeStartColumn - this.m_startCol);
        rangeEndColumn = rangeEndColumn - this.m_startCol + 1;
        for (i = rangeStartRow; i < rangeEndRow; i += 1)
        {
            // i+1 since first row is the resizer
            columns = rows[i + 1]['childNodes'];
            for (j = rangeStartColumn; j < Math.min(columns.length, rangeEndColumn); j += 1)
            {
                cell = columns[j];
                nodes.push(cell);
            }
        }
    }
    else
    {// row case
        for (i = rangeStartRow; i < rangeEndRow; i += 1)
        {
            row = rows[i + 1];
            nodes.push(row);
        }
    }

    return nodes;
};

/**
 * Handles key event for active cell
 * @param {Event} event
 */
DvtDataGrid.prototype.handleActiveKeyDown = function(event)
{
    var keyCode;

    if (this._isFocusableElement(event.target))
    {
        // if this is a key operation on a focusable element, don't
        // override the behavior
        return;
    }

    keyCode = event.keyCode;
    if (this.isArrowKey(keyCode))
    {
        this.handleCellArrowKeys(keyCode, false);            
    }
};

/**
 * Determine whether the element is a focusable element.
 * @param {Element} elem the element to check
 * @return {boolean} true if element is a focusable element, false otherwise.
 * @private
 */
DvtDataGrid.prototype._isFocusableElement = function(elem)
{
    var tagName = elem.tagName;
    return (tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT' || tagName === 'BUTTON' || tagName === 'A' || (elem.getAttribute("tabIndex") != null && parseInt(elem.getAttribute("tabIndex")) >= 0));
};

/**
 * 
 * @param {number} keyCode
 * @return {boolean}
 */
DvtDataGrid.prototype.isArrowKey = function(keyCode)
{
    return (keyCode == DvtDataGrid.UP_KEY || keyCode == DvtDataGrid.DOWN_KEY || keyCode == DvtDataGrid.LEFT_KEY || keyCode == DvtDataGrid.RIGHT_KEY);
};

/**
 * Creates an index object for the cell/row
 * @param {number=} row - the start index of the range
 * @param {number=} column - the end index of the range.  Optional, if not specified it represents a single cell/row 
 * @return {Object} an index object
 */
DvtDataGrid.prototype.createIndex = function(row, column)
{
    if (row != null)
    {
        if (column != null)
        {
            return {"row": row, "column": column};
        }
        return { "row": row};
    }

    return null;
};

/**
 * Handles key event for header
 * @param {Event} event
 */
DvtDataGrid.prototype.handleHeaderKeyDown = function(event)
{
    var axis, index, elem, keyCode;
 
    // if no active header, then return
    if (this.m_activeHeader == null)
    {
        return;
    }

    keyCode = event.keyCode;
    if (this.isArrowKey(keyCode))
    {
        this.handleHeaderArrowKeys(keyCode);            
    }
    else if (keyCode == DvtDataGrid.SPACE_KEY)
    {
        // select entire row or column
        if (this._isSelectionEnabled() && this.isMultipleSelection())
        {
            axis = this.m_activeHeader['axis'];
            index = this.m_activeHeader['index'];

            if (axis === "row")
            {
                this._selectEntireRow(index, event);
            }
            else if (axis === "column")
            {
                this._selectEntireColumn(index, event);
            }
        }
    }
    else if (keyCode == DvtDataGrid.ENTER_KEY)
    {
        // sort
        elem = this.m_activeHeader['elem'];
        // first check if the column is sortable
        if (elem.getAttribute(this.getResources().getMappedAttribute("sortable")) == "true")
        {
            this._handleKeyboardSort(elem, event);
        }
    }
};

/**
 * Handles arrow keys navigation on header
 * @param {number} keyCode description
 */
DvtDataGrid.prototype.handleHeaderArrowKeys = function(keyCode)
{
    var axis, index, elem, newCellIndex;

    // ensure that there's no outstanding fetch requests
    if (!this.isFetchComplete())
    {
        return;
    }

    if (this.getResources().isRTLMode())
    {
        if (keyCode == DvtDataGrid.LEFT_KEY)
        {
            keyCode = DvtDataGrid.RIGHT_KEY;
        }
        else if (keyCode == DvtDataGrid.RIGHT_KEY)
        {
            keyCode = DvtDataGrid.LEFT_KEY;
        }
    }

    axis = this.m_activeHeader['axis'];
    index = this.m_activeHeader['index'];
    elem = this.m_activeHeader['elem'];

    switch (keyCode)
    {
        case DvtDataGrid.LEFT_KEY:
            if (axis === 'column' && index > 0)
            {
                this._setActiveHeader(index-1, elem['previousSibling']);
                this._scrollToActiveHeader();
            }
            break;
        case DvtDataGrid.RIGHT_KEY:
            if (axis === 'row')
            {
                // row header, move to databody
                this._setActiveHeader(-1);
                this.m_activeHeader = null;

                // make the first cell of the current row active
                // no need to scroll since it will be in the viewport
                newCellIndex = this.createIndex(index, 0);
                if (this._isSelectionEnabled())
                {
                    this.selectAndFocus(newCellIndex);
                }
                else
                {
                    this.activeAndFocus(newCellIndex);
                }
            }
            else
            {
                if (this._isCountUnknown("column") || index + 1 < this.getDataSource().getCount("column"))
                {
                    this._setActiveHeader(index+1, elem['nextSibling']);
                    this._scrollToActiveHeader();
                }
            }
            break;
        case DvtDataGrid.UP_KEY:
            if (axis === 'row' && index > 0)
            {
                this._setActiveHeader(index-1, elem['previousSibling']);
                this._scrollToActiveHeader();
            }
            break;
        case DvtDataGrid.DOWN_KEY:
            if (axis === 'column')
            {
                // column header, move to databody
                this._setActiveHeader(-1);
                this.m_activeHeader = null;

                // make the cell of the first row and current column active
                // no need to scroll since it will be in the viewport
                newCellIndex = this.createIndex(0, index);
                if (this._isSelectionEnabled())
                {
                    this.selectAndFocus(newCellIndex);
                }
                else
                {
                    this.activeAndFocus(newCellIndex);
                }
            }
            else
            {
                if (this._isCountUnknown("row") || index + 1 < this.getDataSource().getCount("row"))
                {
                    this._setActiveHeader(index+1, elem['nextSibling']);
                    this._scrollToActiveHeader();
                }
            }
            break;
    }
};

/**
 * Sets the current active header
 * @param {number} index the index of the new active header
 * @param {Element=} elem the new active header element
 * @param {string=} axis the axis of the new active header
 * @private
 */
DvtDataGrid.prototype._setActiveHeader = function(index, elem, axis)
{
    var activeClassName = this.getResources().getMappedStyle("active");

    // unhighlight existing one
    if (this.m_activeHeader != null && this.m_activeHeader['elem'] != null)
    {
        if (this.m_activeHeader['axis'] === "row")
        {
            if (this.m_activeHeader['elem']['firstChild'] != null)
            {
                this.m_utils.removeCSSClassName(this.m_activeHeader['elem']['firstChild'], activeClassName);
            }
        }
        else
        {
            this.m_utils.removeCSSClassName(this.m_activeHeader['elem'], activeClassName);
        }
    }

    // set the new one if specified
    if (index != -1)
    {
        if (this.m_activeHeader == null)
        {
            this.m_activeHeader = {};
        }

        if (axis != undefined)
        {
            this.m_activeHeader['axis'] = axis;
        }

        this.m_activeHeader['index'] = index;

        // elem will be null if the header is not in the loaded yet
        if (elem != null)
        {
            this.m_activeHeader['elem'] = elem;
            if (this.m_activeHeader['axis'] === "row")
            {
                if (this.m_activeHeader['elem']['firstChild'] != null)
                {
                    this.m_utils.addCSSClassName(this.m_activeHeader['elem']['firstChild'], activeClassName);
                }
            }
            else
            {
                this.m_utils.addCSSClassName(this.m_activeHeader['elem'], activeClassName);
            }
        }
    }
};

/**
 * Scroll and focus on the active header
 * @private
 */
DvtDataGrid.prototype._scrollToActiveHeader = function()
{
    var axis, index, elem, indexes;

    axis = this.m_activeHeader['axis'];
    index = this.m_activeHeader['index'];
    elem = this.m_activeHeader['elem'];

    if (axis === "column")
    {
        indexes = {"row": 0, "column": index};
    }
    else if (axis === "row")
    {
        indexes = {"row": index, "column": 0};
    }

    this.scrollToIndex(indexes);
 
    // if scrollToIndex scrolls, then override the cell to focus to the header cell
    if (this.m_cellToFocus != null)
    {
        elem.setAttribute("tabIndex", 0);            
        this.m_cellToFocus = elem;
    }
    else if (elem != null)
    {
        // focus the header element
        this._focusHeaderElem(elem);
    }
};

/**
 * Handles arrow keys navigation on cell
 * @param {number} keyCode description
 * @param {boolean=} isExtend
 */
DvtDataGrid.prototype.handleCellArrowKeys = function(keyCode, isExtend)
{
    var currentCellIndex, row, column, newCellIndex, processed, focusFunc;

    // ensure that there's no outstanding fetch requests
    if (!this.isFetchComplete())
    {
        return;
    }

    if (isExtend)
    {
        currentCellIndex = this.m_selectionFrontier;
    }
    else
    {
        currentCellIndex = this.m_active;
    }

    if (currentCellIndex == null)
    {
        return;
    }

    if (this.getResources().isRTLMode())
    {
        if (keyCode == DvtDataGrid.LEFT_KEY)
        {
            keyCode = DvtDataGrid.RIGHT_KEY;
        }
        else if (keyCode == DvtDataGrid.RIGHT_KEY)
        {
            keyCode = DvtDataGrid.LEFT_KEY;
        }
    }

    // invoke different function for handling focusing on active cell depending on whether selection is enabled
    focusFunc = this._isSelectionEnabled() ? this.selectAndFocus.bind(this) : this.activeAndFocus.bind(this);
    processed = false;
    row = currentCellIndex['row'];
    column = currentCellIndex['column'];

    // navigation to cell using arrow keys.  We are using index instead of dom element
    // because the dom element might not be there in all cases
    switch (keyCode)
    {
        case DvtDataGrid.LEFT_KEY:
            if (column > 0)
            {
                // for left and right key in row selection mode, we'll be only shifting active cell and
                // selection will not be affected
                if (this.m_options.getSelectionMode() == "row")
                {
                    // ensure active cell index is used for row since it might use frontier if extended
                    newCellIndex = this.createIndex(this.m_active['row'], column - 1);
                    this.scrollToIndex(newCellIndex);
                    this.activeAndFocus(newCellIndex);
                }
                else
                {
                    newCellIndex = this.createIndex(row, column - 1);
                    this.scrollToIndex(newCellIndex);
                    if (isExtend)
                    {
                        this.extendSelection(newCellIndex);
                    }
                    else
                    {
                        focusFunc(newCellIndex);
                    }
                }
                processed = true;
            }
            else
            {
                // reached the first column, go to row header if available
                this._focusRowHeader(row);
            }
            break;
        case DvtDataGrid.RIGHT_KEY:
            if (this._isCountUnknown("column") || column + 1 < this.getDataSource().getCount("column"))
            {
                // for left and right key in row selection mode, we'll be only shifting active cell and
                // selection will not be affected
                if (this.m_options.getSelectionMode() == "row")
                {
                    // ensure active cell index is used for row since it might use frontier if extended
                    newCellIndex = this.createIndex(this.m_active['row'], column + 1);
                    this.scrollToIndex(newCellIndex);
                    this.activeAndFocus(newCellIndex);
                }
                else
                {
                    newCellIndex = this.createIndex(row, column + 1);
                    this.scrollToIndex(newCellIndex);
                    if (isExtend)
                    {
                        this.extendSelection(newCellIndex);
                    }
                    else
                    {
                         focusFunc(newCellIndex);
                    }
                }
                processed = true;
            }
            else if (!isExtend)
            {
                // if anchor cell is in the last column, and they arrow right (without Shift), then collapse the range to just the focus cell.  (Matches Excel and intuition.)
                focusFunc(currentCellIndex);
                this.scrollToIndex(currentCellIndex);
                processed = true;
            }
            break;
        case DvtDataGrid.UP_KEY:
            if (row > 0)
            {
                newCellIndex = this.createIndex(row - 1, column);
                this.scrollToIndex(newCellIndex);
                if (isExtend)
                {
                    this.extendSelection(newCellIndex);
                }
                else
                {
                    focusFunc(newCellIndex);
                }
                processed = true;
            }
            else
            {
                // reached the first row, go to column header if available
                this._focusColumnHeader(column);
            }            
            break;
        case DvtDataGrid.DOWN_KEY:
            if (this._isCountUnknown("row") || row + 1 < this.getDataSource().getCount("row"))
            {
                newCellIndex = this.createIndex(row + 1, column);
                this.scrollToIndex(newCellIndex);
                if (isExtend)
                {
                    this.extendSelection(newCellIndex);
                }
                else
                {
                    focusFunc(newCellIndex);
                }
                processed = true;
            }
            else if (!isExtend)
            {
                // if anchor cell is in the last row, and they arrow down (without Shift), then collapse the range to just the focus cell.  (Matches Excel and intuition.)
                focusFunc(currentCellIndex);
                this.scrollToIndex(currentCellIndex);
                processed = true;
            }
            break;
        case DvtDataGrid.HOME_KEY:
            // selects the first cell of the current row
            newCellIndex = this.createIndex(row, 0);
            focusFunc(newCellIndex);
            this.scrollToIndex(newCellIndex);
            processed = true;
            break;
        case DvtDataGrid.END_KEY:
            // selects the last cell of the current row
            if (!this._isCountUnknown("column"))
                newCellIndex = this.createIndex(row, Math.max(0, this.getDataSource().getCount("column") - 1));
            else
                newCellIndex = this.createIndex(row, Math.max(0, this.m_endCol - 1));

            focusFunc(newCellIndex);
            this.scrollToIndex(newCellIndex);
            processed = true;
            break;
    }

    // per excel, user have to hit shift+f8 again to create another discontiguous selection
    if (isExtend && this.m_discontiguousSelection)
    {
        this.m_discontiguousSelection = false;
    }

    return processed;
};

/**
 * Shift focus to column header from databody OR right after fetch
 * @param {number} columnIndex the index of the column to focus
 * @private
 */
DvtDataGrid.prototype._focusColumnHeader = function(columnIndex)
{
    var relIndex, columns, column;

    // first check whether column header is available
    if (this.m_colHeader != null && this.m_colHeader['firstChild'])
    {
        relIndex = columnIndex - this.m_startColHeader;
        columns = this.m_colHeader['firstChild']['childNodes'];
        if (relIndex < columns.length)
        {
            column = columns[relIndex];

            // focus the header element
            this._focusHeaderElem(column);

            // clear current active cell
            if (this.m_active != null)
            {
                this.unhighlightActive();
                this.m_active = null;

                // clear selection
                if (this._isSelectionEnabled())
                {
                    this._clearSelection();
                }
            }

            // store current active header info
            this._setActiveHeader(columnIndex, column, "column");
        }
    }
};

/**
 * Focus on a header element
 * @param {Element} elem the header element
 * @private
 */
DvtDataGrid.prototype._focusHeaderElem = function(elem)
{
    // temp set tabindex so it can receive focus
    elem.setAttribute("tabIndex", 0);            

    // highlight header and set focus
    elem.focus();
};

/**
 * Shift focus to row header from databody OR right after fetch
 * @param {number} rowIndex the index of the row to focus
 * @private
 */
DvtDataGrid.prototype._focusRowHeader = function(rowIndex)
{
    var relIndex, rows, row;

    // first check whether row header is available
    if (this.m_rowHeader != null && this.m_rowHeader['firstChild'])
    {
        relIndex = rowIndex - this.m_startRowHeader + 1;  // +1 because of resizer
        rows = this.m_rowHeader['firstChild']['childNodes'];
        if (relIndex < rows.length)
        {
            row = rows[relIndex];

            // focus the header element
            this._focusHeaderElem(row);

            // clear current active cell
            if (this.m_active != null)
            {
                this.unhighlightActive();
                this.m_active = null;

                // clear selection
                if (this._isSelectionEnabled())
                {
                    this._clearSelection();
                }
            }

            // store current active header info
            this._setActiveHeader(rowIndex, row, "row");
        }
    }
};

/**
 * Scrolls to an  index
 * @param {Object} index - the end index of the selection.      
 */
DvtDataGrid.prototype.scrollToIndex = function(index)
{
    var row, column, deltaX, deltaY, scrollTop, databodyContent, rowElem, viewportTop, viewportBottom, rowTop, rowHeight, scrollLeft, cell, cellLeft, cellWidth, viewportLeft, viewportRight;
    row = index['row'];
    column = index['column'];

    deltaX = 0;
    deltaY = 0;

    // check if index is completely outside of rendered
    if (row < this.m_startRow || row >= this.m_endRow)
    {
        if (row < this.m_startRow)
        {
            scrollTop = this.m_avgRowHeight * row;
        }
        else
        {
            scrollTop = this.m_avgRowHeight * (row + 1) - this.getElementHeight(this.m_databody);
        }
        deltaY = this.m_currentScrollTop - scrollTop;

        // remember to focus on the row after fetch
        this.m_scrollIndexAfterFetch = index;
    }
    else
    {
        // it's rendered, find location and scroll to it
        databodyContent = this.m_databody['firstChild'];
        rowElem = databodyContent['childNodes'][row - this.m_startRow + 1];  // +1 to skip resizer

        viewportTop = this.m_currentScrollTop;
        viewportBottom = this.m_currentScrollTop + this.getElementHeight(this.m_databody);
        rowTop = parseInt(rowElem['style']['top']);
        rowHeight = this.getElementHeight(rowElem);
        if (rowTop + rowHeight > viewportBottom)
        {
            deltaY = viewportBottom - (rowTop + rowHeight);
        }
        else if (rowTop < viewportTop)
        {
            deltaY = viewportTop - rowTop;
        }
    }

    // if column is defined and it's not already a fetch outside of rendered
    if (!isNaN(column) && this.m_scrollIndexAfterFetch == null)
    {
        // check if index is completely outside of rendered
        // approximate scroll position
        if (column < this.m_startCol || column >= this.m_endCol)
        {            
            if (column < this.m_startCol)
            {
                scrollLeft = this.m_avgColWidth * column;
            }
            else
            {
                scrollLeft = this.m_avgColWidth * (column + 1) - this.getElementWidth(this.m_databody);
            }
            deltaX = this.m_currentScrollLeft - scrollLeft;

            // remember to focus on the cell after fetch
            this.m_scrollIndexAfterFetch = index;
        }
        else
        {            
            // it's rendered, find location and scroll to it
            databodyContent = this.m_databody['firstChild'];
            rowElem = databodyContent['childNodes'][row - this.m_startRow + 1];  // +1 to skip resizer
            cell = rowElem['childNodes'][column - this.m_startCol];
            cellLeft = this.getElementDir(cell, 'left');
            cellWidth = cell['offsetWidth']; // or from cache?

            viewportLeft = this.m_currentScrollLeft;
            viewportRight = this.m_currentScrollLeft + this.getElementWidth(this.m_databody);
            if (cellLeft < viewportLeft)
            {
                deltaX = viewportLeft - cellLeft;
            }
            else if (cellLeft + cellWidth > viewportRight)
            {
                deltaX = viewportRight - (cellLeft + cellWidth);
            }
        }
    }

    // scroll if either horiz or vert scroll pos has changed
    if (deltaX != 0 || deltaY != 0)
    {    
        if (cell != null)        
        {
            // delay focus on cell until databody has scrolled (by the scroll event handler)
            this.m_cellToFocus = cell;
        }
        this.scrollDelta(deltaX, deltaY);
    }
};

/**
 * Locate the header element.  Look up recursively from its parent if neccessary.
 * @param {Element} elem the starting point to locate the header element
 * @param {string} headerCellClassName the name of the header cell class name
 * @return {Element|null} the header element
 * @private
 */
DvtDataGrid.prototype.findHeader = function(elem, headerCellClassName)
{
    if (headerCellClassName == undefined)
    {
        headerCellClassName = this.getResources().getMappedStyle("headercell");
    }

    if (headerCellClassName != null)
    {
        if (this.m_utils.containsCSSClassName(elem, headerCellClassName))
        {
            // found header element
            return elem;
        }
        else if (elem['parentNode'])
        {
            // recursive call with parent node
            return this.findHeader(elem['parentNode'], headerCellClassName);
        }
        else if (elem === this.m_root)
        {
            // short circuit to terminal when root is reached
            return null;
        }
    }

    // all other case returns null
    return null;
};

/**
 * Restore focus to the active cell once the DataGrid gains focus.
 * @private
 */
DvtDataGrid.prototype.handleFocus = function(event)
{
    var active, activeClassName;

    // if there's no active cell, then nothing to do
    if (this.m_active == null)
    {
        return;
    }

    active = document.activeElement;
    activeClassName = this.getResources().getMappedStyle("active");
    // if the active element is the current active cell, do nothing
    if (active != null && this.m_utils.containsCSSClassName(active, activeClassName))
    {
        return;
    }

    this.highlightActive();
};

/**
 * Ensures row banding is set on the proper rows
 * @private
 */
DvtDataGrid.prototype.updateRowBanding = function()
{
    var rowBandingInterval, rows, i, index, bandingClass;
    rowBandingInterval = this.m_options.getRowBandingInterval();
    if (rowBandingInterval > 0)
    {
        rows = this.m_databody['firstChild']['childNodes'];
        bandingClass = this.getResources().getMappedStyle("banded");
        for (i = 1; i < rows.length; i++)
        {
            index = this.m_startRow + i - 1;
            if ((Math.floor(index / rowBandingInterval) % 2 === 1))
            {
                if (!this.m_utils.containsCSSClassName(rows[i], bandingClass))
                {
                    this.m_utils.addCSSClassName(rows[i], bandingClass);
                }
            }
            else
            {
                if (this.m_utils.containsCSSClassName(rows[i], bandingClass))
                {
                    this.m_utils.removeCSSClassName(rows[i], bandingClass);
                }
            }
        }
    }
};

/**
 * Ensures column banding is set on the proper rows
 * @private
 */
DvtDataGrid.prototype.updateColumnBanding = function()
{
    var columnBandingInterval, rows, i, index, bandingClass, j, row;
    columnBandingInterval = this.m_options.getColumnBandingInterval();
    if (columnBandingInterval > 0)
    {
        rows = this.m_databody['firstChild']['childNodes'];
        bandingClass = this.getResources().getMappedStyle("banded");
        for (i = 1; i < rows.length; i+=1)
        {
            row = rows[i]['childNodes'];
            for (j=0; j < row.length; j+=1)
            {
                index = this.m_startCol + j;
                if ((Math.floor(index / columnBandingInterval) % 2 === 1))
                {
                    if (!this.m_utils.containsCSSClassName(row[j], bandingClass))
                    {
                        this.m_utils.addCSSClassName(row[j], bandingClass);
                    }
                }
                else
                {
                    if (this.m_utils.containsCSSClassName(row[j], bandingClass))
                    {
                        this.m_utils.removeCSSClassName(rows[j], bandingClass);
                    }
                }
            }
        }
    }
};

/*************************** row expander related methods *******************************/
/**
 * Checks whether the row expander is a leaf.
 * @param {Element} rowExpander the root dom of the row expander.
 * @return {boolean} true if the row expander is a leaf, false otherwise. 
 * @private
 */
DvtDataGrid.prototype._isLeaf = function(rowExpander)
{
    var button = rowExpander['firstChild'];
    return (button.getAttribute("aria-expanded") === null);
};

/**
 * Checks whether the row expander is expanded.
 * @param {Element} rowExpander the root dom of the row expander.
 * @return {boolean} true if the row expander is expanded, false otherwise. 
 * @private
 */
DvtDataGrid.prototype._isExpanded = function(rowExpander)
{
    var button = rowExpander['firstChild'];
    return (button.getAttribute("aria-expanded") == "true");
};

/**
 * Register a row expander dom element.  This method is called by ojDataGrid.
 * @param {Element} the row expander root element
 * @export
 */
DvtDataGrid.prototype.registerRowExpander = function(rowExpander)
{
    this.m_currentRowExpander = rowExpander;
}

/**
 * Process a registered row expander.
 * todo: this could be eliminated and merge with registerRowExpander if the cell was added to the
 * row before the cell renderer is invoked.
 * @param {Element} the row expander root element
 * @private
 */
DvtDataGrid.prototype._processRowExpander = function(rowExpander)
{
    var expanded, leaf, cell, row, index;

    // mark with an attribute so that we can find it later
    rowExpander.setAttribute(this.getResources().getMappedAttribute("expander"), "true");

    // mark the row so that we can quickly tell whether the row contains an expandable expander
    if (!this._isLeaf(rowExpander))
    {
        cell = this.findCell(rowExpander);        
        row = cell['parentNode'];
        index = Array.prototype.indexOf.call(row['childNodes'], cell);

        // store a hint to where to find the expander
        row.setAttribute(this.getResources().getMappedAttribute("expanderIndex"), index);

        // expanded state, only non-leaf node would have it
        row.setAttribute("aria-expanded", this._isExpanded(rowExpander));
    }

    // the screen reader must convey 1) if there are expandable rows 2) how many rows are expanded
};

/**
 * Handles when a key down is pressed on a row with a row expander.
 * @param {Event} the DOM event
 * @protected
 */
DvtDataGrid.prototype.handleRowExpanderKeyDown = function(event)
{
    var cell, row, index, keyCode, dataSource, rowKey, expanded;

    cell = this.findCell(event.target);
    if (cell == null)
    {
        // should not happen
        return;
    }

    row = cell['parentNode'];
    index = row.getAttribute(this.getResources().getMappedAttribute("expanderIndex"));
    // check with a row expander exists
    if (index != null && !isNaN(index))
    {
        // there is an expandable row expander
        var keyCode = event.keyCode;
        if (keyCode === DvtDataGrid.LEFT_KEY || keyCode === DvtDataGrid.RIGHT_KEY)
        {
            if (this.m_utils.ctrlEquivalent(event))
            {
                dataSource = this.getDataSource();
                rowKey = row.getAttribute(this.getResources().getMappedAttribute("key"));
                expanded = row.getAttribute("aria-expanded");
                if (keyCode === DvtDataGrid.RIGHT_KEY)
                {
                    // make sure it's not already expanded
                    if (expanded === "false")
                    {
                        // call expand listeners
                        dataSource.expand(rowKey);
                    }
                }
                else
                {
                    // make sure it's not expanded
                    if (expanded === "true")
                    {
                        // call collapse listeners
                        dataSource.collapse(rowKey);
                    }
                }
            }
        }
    }
};

/**
 * Sets the accessibility status text
 * @param {string} key the message key
 * @private
 */
DvtDataGrid.prototype._setAccInfoText = function(key)
{
    var text = this.getResources().getTranslatedText(key);
    if (text != null)
    {
        this.m_accInfo.innerHTML = text;
    }
};

/**
 * Handles expand event from the flattened datasource.
 * @param {Object} event the expand event
 * @private
 */
DvtDataGrid.prototype.handleExpandEvent = function(event)
{
    // update screen reader alert
    this._setAccInfoText("expand");
};

/**
 * Handles collapse event from the flattened datasource.
 * @param {Object} event the collapse event
 * @private
 */
DvtDataGrid.prototype.handleCollapseEvent = function(event)
{
    // update screen reader alert
    this._setAccInfoText("collapse");
};
// constants for key codes
DvtDataGrid.ENTER_KEY = 13;
DvtDataGrid.ESC_KEY = 27;
DvtDataGrid.F2_KEY = 113;
DvtDataGrid.F8_KEY = 119;
DvtDataGrid.HOME_KEY = 36;
DvtDataGrid.END_KEY = 35;
DvtDataGrid.TAB_KEY = 9;
DvtDataGrid.SPACE_KEY = 32;

/**
 * Checks whether there are any focusable element inside a cell
 * @return {boolean}
 */
DvtDataGrid.prototype._isContainFocusableElement = function(elem)
{
    var elems = this.getFocusableElementsInNode(elem);
    return (elems.length > 0);
};

/**
 * Unhighlights the selection.  Does not change selection, focus cell, anchor, or frontier
 */
DvtDataGrid.prototype.unhighlightSelection = function()
{
    var i, ranges;
    ranges = this.GetSelection();
    for (i = 0; i < ranges.length; i += 1)
    {
        this.unhighlightRange(ranges[i]);
    }

    // if row selection, need to unhighlight active cell separately
    if (this.m_active != null && this.m_options.getSelectionMode() == "row")
    {
        this.unhighlightActive();
    }
};

/**
 * Unhighlights the range.
 * @param {Object} range
 */
DvtDataGrid.prototype.unhighlightRange = function(range)
{
    var elems = this.getElementsInRange(range);
    this.unhighlightElems(elems);
};

/**
 * Highlights the range.
 * @param {Object} range
 */
DvtDataGrid.prototype.highlightRange = function(range)
{
    var elems = this.getElementsInRange(range);
    this.highlightElems(elems);
};

/**
 * Unhighlight elements
 * @param {Array} elems
 */
DvtDataGrid.prototype.unhighlightElems = function(elems)
{
    var i, selectedClassName, activeClassName, elem;
    if (elems == null || elems.length == 0)
    {
        return;
    }

    selectedClassName = this.getResources().getMappedStyle("selected");
    activeClassName = this.getResources().getMappedStyle("active");

    // remove any selected or active styling set on the elements
    if (selectedClassName != null && activeClassName != null)
    {
        for (i = 0; i < elems.length; i += 1)
        {
            elem = elems[i];
            this.m_utils.removeCSSClassName(elem, activeClassName);
            this.m_utils.removeCSSClassName(elem, selectedClassName);
            this.unsetAriaProperties(elem);
        }
    }
};

/**
 * Highlight elements
 * @param {Array} elems
 */
DvtDataGrid.prototype.highlightElems = function(elems)
{
    var selectedClassName, i, elem;
    if (elems == null || elems.length == 0)
    {
        return;
    }

    selectedClassName = this.getResources().getMappedStyle("selected");
    if (selectedClassName != null)
    {
        for (i = 0; i < elems.length; i += 1)
        {
            elem = elems[i];
            this.m_utils.addCSSClassName(elem, selectedClassName);
            this.setAriaProperties(elem);
        }
    }
};

/**
 * Apply current selection to a range.  This is called when a newly set of cells are 
 * rendered and selection needs to be applied on them.
 * @param {number} startRow
 * @param {number} endRow
 * @param {number} startCol
 * @param {number} endCol
 */
DvtDataGrid.prototype.applySelection = function(startRow, endRow, startCol, endCol)
{
    var i, ranges, elems;
    ranges = this.GetSelection();
    for (i = 0; i < ranges.length; i += 1)
    {
        elems = this.getElementsInRange(ranges[i], startRow, endRow, startCol, endCol);
        this.highlightElems(elems);
    }
};

/**
 * Handles click and drag to select multiple cells/rows
 * @param {Event} event
 */
DvtDataGrid.prototype.handleDatabodySelectionDrag = function(event)
{
    var index, cell;

    cell = this.findCell(event.target);
    if (cell != null)
    {
        index = {
            "row": this.getRowIndex(cell['parentNode']), "column": this.getCellIndex(cell)
        };
        this.extendSelection(index);
    }
 
    // fire event if processed
    this.fireSelectionEvent(event);
};

/**
 * Checks whether a cell is selected.  This is used in touch logic in handleDatabodyClickSelection.
 * @param {Element} cell the cell element
 * @return {boolean} true if the cell is selected, false otherwise.
 * @private
 */
DvtDataGrid.prototype._isSelected = function(cell)
{
    var selectedClassName = this.getResources().getMappedStyle("selected");
    if (selectedClassName != null)
    {
        return this.m_utils.containsCSSClassName(cell, selectedClassName);
    }

    // should not end up here
    return false;
};

/**
 * Deselect a cell/row.  This is used in touch logic in handleDatabodyClickSelection.
 * @param {Object} index the cell index of the cell/row to deselect
 * @private
 */
DvtDataGrid.prototype._deselect = function(index)
{
    var rowIndex, columnIndex, indexToRemove, ranges, i, range, startIndex, endIndex, rangeStartRow, 
        rangeEndRow, rangeStartColumn, rangeEndColumn;

    if (this.m_options.getSelectionMode() == "row")
    {
        // drop the column index
        index = this.createIndex(index['row']);
    }

    rowIndex = index['row'];
    columnIndex = index['column'];

    // find the range in current selection
    indexToRemove = -1;
    ranges = this.GetSelection();
    for (i = 0; i < ranges.length; i += 1)
    {
        range = ranges[i];
        startIndex = range['startIndex'];
        endIndex = this.getEndIndex(range);

        rangeStartRow = startIndex['row'];
        rangeEndRow = endIndex['row'];

        if (rangeStartRow != rowIndex || rangeEndRow != rowIndex)
            continue;

        if (!isNaN(startIndex['column']) && !isNaN(endIndex['column']))
        {
            rangeStartColumn = startIndex['column'];
            rangeEndColumn = endIndex['column'];

            if (rangeStartColumn != columnIndex || rangeEndColumn != columnIndex)
                continue;

            // both row and column index matches, we are done
            indexToRemove = i;
            break;
        }
        else
        {
            // if column index is defined in index, skip this range
            if (!isNaN(columnIndex))
                continue;

            // no column index, and row matches
            indexToRemove = i;
            break;
        }
    }

    // unhighlight index and remove from selection
    if (indexToRemove != -1)
    {
        this.unhighlightRange(ranges[indexToRemove]);
        ranges.splice(indexToRemove, 1);
    }
};

/**
 * Handles click to select multiple cells/rows
 * @param {Event} event
 */
DvtDataGrid.prototype.handleDatabodyClickSelection = function(event)
{
    var index, cell, ctrlKey, shiftKey, clone;

    cell = this.findCell(event.target);
    if (cell != null)
    {
        index = {
            "row": this.getRowIndex(cell['parentNode']), "column": this.getCellIndex(cell)
        };
    }

    if (index != null && index != undefined)
    {
        // make sure the cell is visible
        this.scrollToIndex(index);

        // clone the current selection
        clone = this.GetSelection().slice(0);
  
        ctrlKey = this.m_utils.ctrlEquivalent(event);
        shiftKey = event.shiftKey;
        if (this.isMultipleSelection())
        {
            if (this.m_utils.isTouchDevice())
            {
                // for touch device, when multiple selection is enable
                // do not deselect the existing selection unless it's already selected
                if (this._isSelected(cell))
                {
                    this._deselect(index);
                }
                else
                {
                    this.augmentSelectionAndFocus(index);
                }
            }
            else
            {
                if (!ctrlKey && !shiftKey)
                {
                    this.selectAndFocus(index);
                }
                else if (!ctrlKey && shiftKey)
                {
                    this.extendSelection(index);
                }
                else
                {
                    this.augmentSelectionAndFocus(index);
                }
            }
        }
        else
        {
            this.selectAndFocus(index);
        }

        // fire event if selection has changed
        if (!this._compareSelections(this.GetSelection(), clone))
        {
            this.fireSelectionEvent(event);
        }
    }
};

/**
 * Compare the two selection to see if they are identical.
 * @param {Object} selection1 the first selection
 * @param {Object} selection2 the seonc selection
 * @return {boolean} true if the selections are identical, false otherwise
 * @private
 */
DvtDataGrid.prototype._compareSelections = function(selection1, selection2)
{
    return false;
};

/**
 * Find the row element (recursively if needed)
 * @private
 * @param {Element|EventTarget} elem
 * @return {Element|EventTarget}
 */
DvtDataGrid.prototype.findRow = function(elem)
{
    // recursively walk up the element and find the class name that matches the row class name
    return this.find(elem, "row");
};

/**
 * Clear the current selection.
 * @private
 */
DvtDataGrid.prototype._clearSelection = function()
{
    var selection;

    // unhighlight previous selection
    this.unhighlightSelection();

    // clear the ranges
    selection = this.GetSelection();
    // clear selection
    selection.length = 0;
};

/************************* key handler methods ************************************/
/**
 * Determine if the data grid is in actionable mode.
 * @return returns true if the data grid is in actionable mode, false otherwise.
 * @protected
 */
DvtDataGrid.prototype.isActionableMode = function()
{
    return (this.m_keyMode == "actionable");
};

/**
 * Sets whether the data grid is in actionable mode
 * @param {boolean} flag true to set grid to actionable mode, false otherwise
 * @protected
 */
DvtDataGrid.prototype.setActionableMode = function(flag)
{
    if (flag)
    {
        this.m_keyMode = "actionable";
    }
    else
    {
        this.m_keyMode = "navigation";
    }
};

/**
 * Handles key event for selection
 * @param {Event} event
 */
DvtDataGrid.prototype.handleSelectionKeyDown = function(event)
{
    var keyCode, ctrlKey, shiftKey, selection, column, row, startIndex, endIndex, newRange, processed;

    keyCode = event.keyCode;

    if (this.isActionableMode())
    {
        // Esc key goes to navigation mode
        if (keyCode == DvtDataGrid.ESC_KEY)
        {
            this.setActionableMode(false);
            // focus back on the active cell
            this.highlightActive();
        }

        // if arrow key is used and there's no focusable element inside the cell
        // it breaks the actionable mode
        if (this.isArrowKey(keyCode) && !this._isContainFocusableElement(this.findCell(event.target)))
        {
            this.setActionableMode(false);

            // perform the arrow key action
            ctrlKey = this.m_utils.ctrlEquivalent(event);
            shiftKey = event.shiftKey;
            processed = this.handleCellArrowKeys(keyCode, (shiftKey && !ctrlKey && this.isMultipleSelection()));

            // fire event if processed
            if (processed)
            {
                this.fireSelectionEvent(event);
            }
        }
    }
    else
    {
        // F2 key or Enter key goes to actionable mode
        if (keyCode == DvtDataGrid.F2_KEY || keyCode == DvtDataGrid.ENTER_KEY)
        {
            this.setActionableMode(true);
            // focus on first focusable item in the cell
            this._setFocusToFirstFocusableElement(this.findCell(event.target));
        }
        else if (keyCode == DvtDataGrid.TAB_KEY)
        {
            // stop default tabing behavior
            event.preventDefault();

            // tab goes to the next focusable element next outside the grid, shift tab goes to the prev focusable element
            if (event.shiftKey)
            {
                this.focusPrevElementOutsideGrid();
            }
            else
            {
                this.focusNextElementOutsideGrid();
            }
        }
        else if (this.isArrowKey(keyCode) || keyCode == DvtDataGrid.HOME_KEY || keyCode == DvtDataGrid.END_KEY)
        {
            ctrlKey = this.m_utils.ctrlEquivalent(event);
            shiftKey = event.shiftKey;
            processed = this.handleCellArrowKeys(keyCode, (shiftKey && !ctrlKey && this.isMultipleSelection()));
            
            // fire event if processed
            if (processed)
            {
                this.fireSelectionEvent(event);
            }
        }
        else if (event.shiftKey && keyCode == DvtDataGrid.F8_KEY)
        {
            this.m_discontiguousSelection = !this.m_discontiguousSelection;
        }
        else if (keyCode == DvtDataGrid.SPACE_KEY)
        {
            ctrlKey = this.m_utils.ctrlEquivalent(event);
            shiftKey = event.shiftKey;
            if (this.m_options.getSelectionMode() == "cell" && this.isMultipleSelection() && ((shiftKey && !ctrlKey) || ctrlKey))
            {
                if (ctrlKey)
                {
                    // selects the current column
                    column = this.m_active['column'];
                    this._selectEntireColumn(column, event);
                }
                else
                {
                    // selects the current row
                    row = this.m_active['row'];
                    this._selectEntireRow(row, event);
                }
            }
        }
    }
};

/**
 * Selects the entire row of cells
 * @param {number} row the row index
 * @param {event} the dom event that triggers the selection
 * @private
 */
DvtDataGrid.prototype._selectEntireRow = function(row, event)
{
    var startIndex, endIndex;

    // create the start and end index then selects the range
    startIndex = this.createIndex(row, 0);
    endIndex = this.createIndex(row, -1);

    this._selectRange(startIndex, endIndex, event);
};

/**
 * Selects the entire column of cells
 * @param {number} column the column index
 * @param {event} the dom event that triggers the selection
 * @private
 */
DvtDataGrid.prototype._selectEntireColumn = function(column, event)
{
    var startIndex, endIndex;

    // create the start and end index then selects the range
    startIndex = this.createIndex(0, column);
    endIndex = this.createIndex(-1, column);

    this._selectRange(startIndex, endIndex, event);
};

/**
 * Selects a range of cells.
 * @param {Object} startIndex the start row/column indexes
 * @param {Object} endIndex the end row/column indexes 
 * @param {event} the dom event that triggers the selection
 * @private
 */
DvtDataGrid.prototype._selectRange = function(startIndex, endIndex, event)
{
    var newRange;

    // first clear selection
    this._clearSelection();

    newRange = this.createRange(startIndex, endIndex);
    this.GetSelection().push(newRange);
    this.highlightRange(newRange);

    if (this.m_active != null)
    {
        // reset frontier to be the same as active
        this.m_selectionFrontier = this.m_active;

        this.highlightActive();
    }

    // fire selection event
    this.fireSelectionEvent(event);
};


/**
 * Shift focus to the previous focusable element before the grid in the DOM tree.
 * @param {Element=} the current element to search, if undefined then use the datagrid root node. 
 * @private
 */
DvtDataGrid.prototype.focusPrevElementOutsideGrid = function(elem)
{
    var prev, parent;

    if (elem == undefined)
        elem = this.getRootElement();

    prev = elem['previousElementSibling'];
    if (prev != null)
    {
        if (this._isFocusableElement(prev))
        {
            prev.focus();
        }
        else
        {
            this.focusPrevElementOutsideGrid(prev);
        }            
    }
    else
    {
        parent = elem['parentNode'];
        if (parent != null)
        {
            var lastChild = parent['lastElementChild'];
            if (lastChild != null && this._isFocusableElement(lastChild))
            {
                lastChild.focus();
            }
            else
            {
                this.focusPrevElementOutsideGrid(lastChild);
            }
        }
    }
};

/**
 * Shift focus to the next focusable element after the grid in the DOM tree.
 * @param {Element=} the current element to search, if undefined then use the datagrid root node. 
 * @private
 */
DvtDataGrid.prototype.focusNextElementOutsideGrid = function(elem)
{
    var next, firstChild;

    if (elem == undefined)
        elem = this.getRootElement();

    next = elem['nextElementSibling'];
    if (next != null)
    {
        if (this._isFocusableElement(next))
        {
            next.focus();
        }
        else
        {
            this.focusNextElementOutsideGrid(next);
        }            
    }
    else
    {
        firstChild = elem['firstElementChild'];
        if (firstChild != null)
        {
            if (this._isFocusableElement(firstChild))
            {
                firstChild.focus();
            }
            else
            {
                this.focusNextElementOutsideGrid(firstChild);
            }
        }
    }
};

/**
 * Retrieve the current selection
 * @return {Array} an array of ranges
 * @export
 */
DvtDataGrid.prototype.GetSelection = function()
{
    if (this.m_selection == null)
    {
        this.m_selection = [];
    }
    return this.m_selection;
};

/**
 * Sets a range of selections
 * @param {Array} selection
 * @export
 */
DvtDataGrid.prototype.SetSelection = function(selection)
{
    // it can be null but cannot be undefined
    if (selection != undefined)
    {
        if (selection == null)
        {
            selection = [];
        }

        this.m_selection = selection;
        // if it's not render yet, don't apply selection
        if (this.m_databody != null)
        {
            this.applySelection(this.m_startRow, this.m_endRow, this.m_startCol, this.m_endCol);
        }
        this.fireSelectionEvent(null);
    }
};

/**
 * Fires selection event
 * @param {Event} event the dom event that triggers the selection
 * @protected
 */
DvtDataGrid.prototype.fireSelectionEvent = function(event)
{
    var details = {
        'event': event, 'ui': {
            'selection': this.GetSelection()
        }
    };
    this.fireEvent('select', details);
};

/**
 * Shift+click to extend the selection
 * @param {Object} index - the end index of the selection.    
 */
DvtDataGrid.prototype.extendSelection = function(index)
{
    var anchor, newRange, selection, currentRange, startIndexesMatch, endIndexesMatch;
    // find the the top left index
    anchor = this.m_active;
    if (anchor == null)
    {
        return;
    }

    // assign frontier before we change index;
    this.m_selectionFrontier = index;

    if (this.m_options.getSelectionMode() == "row")
    {
        // drop the column index
        index = this.createIndex(index['row']);
    }
    newRange = this.createRange(anchor, index);
    selection = this.GetSelection();
    currentRange = selection[selection.length - 1];

    // checks if selection has changed
    startIndexesMatch = (currentRange['startIndex']['row'] == newRange['startIndex']['row']);
    if (currentRange['startIndex']['column'] != null && newRange['startIndex']['column'] != null)
    {
        startIndexesMatch = startIndexesMatch && (currentRange['startIndex']['column'] == newRange['startIndex']['column']);
    }

    endIndexesMatch = (currentRange['endIndex']['row'] == newRange['endIndex']['row']);
    if (currentRange['endIndex']['column'] != null && newRange['endIndex']['column'] != null)
    {
        endIndexesMatch = endIndexesMatch && (currentRange['endIndex']['column'] == newRange['endIndex']['column']);
    }

    if (startIndexesMatch && endIndexesMatch)
    {
        return;
    }

    // replace the current range
    selection.pop();
    selection.push(newRange);

    this.unhighlightRange(currentRange);
    this.highlightRange(newRange);
    this.highlightActive();
};

/**
 * Ctrl+click to add cell/row to the current selection
 * @param {Object} index - the end index of the selection.    
 */
DvtDataGrid.prototype.augmentSelectionAndFocus = function(index)
{
    var selection, range;

    selection = this.GetSelection();

    // if the selection is initially set externally, there is no active cell
    // so we better checks for null
    if (selection.length > 0 && this.m_active != null)
    {
        this.unhighlightActive(!this.m_discontiguousSelection);
    }

    // update active cell and frontier
    this.m_active = index;
    this.m_selectionFrontier = index;

    // update selection model
    if (this.m_options.getSelectionMode() == "row")
    {
        // drop the column index
        index = this.createIndex(index['row']);
    }
    // ensure end index is specified when push to selection
    range = this.createRange(index, index);
    selection.push(range);

    // highlight index
    this.highlightActive();
    this.highlightIndex(index, 'selected');
};

/**
 * Selects the focus on the specified element
 * @param {Object} index - the end index of the selection.      
 */
DvtDataGrid.prototype.selectAndFocus = function(index)
{
    if (!this.m_discontiguousSelection)
    {
        // clear selection
        this._clearSelection();
    }
    else
    {
        if (this.m_active != null && this.m_selectionFrontier == this.m_active)
        {
            // unhighlight previous
            this.unhighlightActive();

            // remove the last selection
            this.GetSelection().pop();
        }
    }

    // add the elem to selection
    this.augmentSelectionAndFocus(index);
};

/**
 * Returns the relative index to the to the row (out of cells that are rendered)
 * @param {Element} cell
 * @return {number}
 */
DvtDataGrid.prototype.getRelativeCellIndex = function(cell)
{
    return this.getCellIndex(cell) - this.m_startCol;
};
/********************* end key handler methods ************************************/

/********************* focusable/editable element related methods *****************/
DvtDataGrid.prototype._setFocusToFirstFocusableElement = function(elem)
{
    var elems = this.getFocusableElementsInNode(elem);
    if (elems.length > 0)
    {
        elems[0].focus();
    }
};

/**
 * @param {Element} node
 */
DvtDataGrid.prototype.getFocusableElementsInNode = function(node)
{
    var inputElems, nodes, elem, nodeCount, inputRegExp, i;
    inputElems = [];

    if (document.evaluate)
    {
        // FF and IE are not case sensitive with x-path, but webkit browser are (GoogleChrome and Safari only recognize lower case)
        // to be safe, we check for both lower and upper case 
        nodes = document.evaluate(".//input|.//select|.//textarea|.//button|.//a|.//INPUT|.//SELECT|.//TEXTAREA|.//BUTTON|.//A",
                node, null, XPathResult.ANY_TYPE, null);
        elem = nodes.iterateNext();
        while (elem)
        {
            if (!elem.disabled && (!elem.tabIndex || elem.tabIndex > 0) && this.isElementVisible(elem, node))
            {
                inputElems.push(elem);
            }

            elem = nodes.iterateNext();
        }
    }
    else
    {
        nodes = node.getElementsByTagName("*");
        nodeCount = nodes.length;
        inputRegExp = /^INPUT|SELECT|BUTTON|^A\b|TEXTAREA/;
        // we don't want to use AdfDhtmlPivotTablePeer._INPUT_REGEXP because it has OPTION in the regexp
        // in IE, each 'option' after 'select' elem will be counted as an input element(and cause duplicate input elems returned)
        // this will cause problem with TAB/Shift-TAB (recognizing whether to go to next cell or to tab within the current cell
        for (i = 0; i < nodeCount; i+=1)
        {
            elem = nodes[i];
            if (elem.tagName.match(inputRegExp) && !elem.disabled && (!elem.tabIndex || elem.tabIndex > 0) && this.isElementVisible(elem, node))
            {
                inputElems.push(elem);
            }
        }
    }
    return inputElems;
};

//Methods used but not defined
DvtDataGrid.prototype.isElementVisible = function(elem, node)
{
    return true;
};
/**
 * Handles what to do when the mouse moves. Sets the cursor based on .manageHeaderCursor(),
 * If this.m_isResizing is set to true, treats movement as resizing, calling .handleResizeMouseMove()
 * @param {Event} event - a mousemove event
 */
DvtDataGrid.prototype.handleResize = function(event)
{
    //if not resizing, monitor the cursor position, otherwise handle resizing
    if (this.m_isResizing === false)
    {
        //if a column header, row header, or rowheader, parent div check if the cursor needs to be changed
        if (this.m_utils.containsCSSClassName(event['target'], this.getResources().getMappedStyle('colheadercell')) ||
                this.m_utils.containsCSSClassName(event['target'], this.getResources().getMappedStyle('rowheadercell')))
        {
            this.m_cursor = this.manageHeaderCursor(event);
            document['body']['style']['cursor'] = this.m_cursor;
        }
        else
        {
            this.m_cursor = 'default';
            document['body']['style']['cursor'] = 'default';
        }
    }
    else
    {
        this.handleResizeMouseMove(event);
    }
};

/**
 * On mousedown, if the cursor was set to row/col -resize, set the required resize values.
 * @param {Event} event - a mousedown event
 */
DvtDataGrid.prototype.handleResizeMouseDown = function(event) {
    if (this.m_cursor === 'col-resize' || this.m_cursor === 'row-resize') {
        this.m_isResizing = true;
        this.m_lastMouseX = event['pageX'];
        this.m_lastMouseY = event['pageY'];
        this.m_overResizeLeft = 0;
        this.m_overResizeMinLeft = 0;
        this.m_overResizeTop = 0;
        this.m_overResizeMinTop = 0;
        this.m_overResizeRight = 0;
        this.m_overResizeBottom = 0;

    }
};

/**
 * On mouseup, if we were resizing, handle cursor and callback firing.
 * @param {Event} event - a mouseup event
 */
DvtDataGrid.prototype.handleResizeMouseUp = function(event) {
    var size, details;
    if (this.m_isResizing === true)
    {
        //set the information we want to callback with in the resize event and callback
        size = (this.m_cursor === 'col-resize') ? this.m_resizingElement['style']['width'] : this.m_resizingElement['style']['height'];
        details = {
            'event': event, 'ui': {
                'header': this.m_resizingElement, 'size': size
            }
        };
        this.fireEvent('resize', details);

        //no longer resizing
        this.m_isResizing = false;
        document['body']['style']['cursor'] = 'default';
        this.m_cursor = 'default';
    }
};

/**
 * Check if has data-resizable attribute is set to 'true' on a header
 * @param {HMTLElement} element - element to check if has data-resizable true
 * @return {boolean} true if data-resizable attribute is 'true'
 */
DvtDataGrid.prototype._isDOMElementResizable = function(element)
{
    return element.getAttribute(this.getResources().getMappedAttribute('resizable')) === "true";
};

/**
 * Check if has data-resizable attribute is set to 'true' on the header before that one
 * @param {HMTLElement} element - element to check if previous sibling has data-resizable true
 * @return {boolean} true if data-resizable attribute on the previouos sibling is 'true'
 */
DvtDataGrid.prototype._isDOMElementSiblingResizable = function(element)
{
    if (this.m_utils.containsCSSClassName(element, this.getResources().getMappedStyle('colheadercell')))
    {
        if (element['previousSibling'] !== null)
        {
            return element['previousSibling'].getAttribute(this.getResources().getMappedAttribute('resizable')) === "true";
        }
    }
    else if (this.m_utils.containsCSSClassName(element, this.getResources().getMappedStyle('rowheadercell')))
    {
        if (element['parentNode']['previousSibling']['firstChild'] !== null)
        {
            return element['parentNode']['previousSibling']['firstChild'].getAttribute(this.getResources().getMappedAttribute('resizable')) === "true";
        }
    }
    return false;
};

/**
 * Determine what the document cursor should be for header cells.
 * @param {Event} event - a mousemove event
 * @return {string} the cursor type for a given mouse location
 */
DvtDataGrid.prototype.manageHeaderCursor = function(event)
{
    var elem = event['target'], resizeHeaderMode, edges, cursorX, cursorY, offsetPixel, widthResizable, heightResizable, siblingResizable, rtl;
    //determine the element/header type that should be used for resizing if applicable
    elem = event['target'];
 
    if (this.m_utils.containsCSSClassName(elem, this.getResources().getMappedStyle('colheadercell')))
    {
        resizeHeaderMode = 'column';
        heightResizable = this.m_options.isResizable(resizeHeaderMode)['height'] === "enable" ? true:false;
        widthResizable = this._isDOMElementResizable(elem);
        siblingResizable = this._isDOMElementSiblingResizable(elem);

    }
    else if (this.m_utils.containsCSSClassName(elem, this.getResources().getMappedStyle('rowheadercell')))
    {
        resizeHeaderMode = 'row';
        widthResizable = this.m_options.isResizable(resizeHeaderMode)['width'] === "enable" ? true:false;
        heightResizable = this._isDOMElementResizable(elem);
        siblingResizable = this._isDOMElementSiblingResizable(elem);        
    }
    else 
    {
        return 'default';
    }

    cursorX = event['pageX'];
    cursorY = event['pageY'];
    edges = this.getHeaderEdgePixels(elem);
    offsetPixel = 5;
    rtl = this.getResources().isRTLMode();
    
    //check to see if resizable was enabled on the grid and then check the position of the cursor to the element border
    //we always choose the element preceding the border (so for rows the header before the bottom border)
    if (widthResizable)
    {
        if ( rtl ? cursorX < edges[0] + offsetPixel : cursorX > edges[2] - offsetPixel)
        {
            this.m_resizingElement = elem;
            return 'col-resize';
        }
    }
    if (resizeHeaderMode === 'column' && siblingResizable && (rtl ? cursorX > edges[2] - offsetPixel: cursorX < edges[0] + offsetPixel))
    {
        this.m_resizingElement = elem['previousSibling'];
        if (this.m_resizingElement !== null)
        {
            return 'col-resize';
        }
    }
    if (heightResizable)
    {
        if (cursorY > edges[3] - offsetPixel)
        {
            this.m_resizingElement = elem;
            return 'row-resize';
        }
    }
    
    if (resizeHeaderMode === 'row' && siblingResizable && cursorY < edges[1] + offsetPixel)
    {
        this.m_resizingElement = elem['parentNode']['previousSibling']['firstChild'];
        if (this.m_resizingElement !== null)
        {
            return 'row-resize';
        }
    }
    
    return 'default';
};

/**
 * On mousemove see which type of resizing we are doing and call the appropriate resizer after calculating 
 * the new elements width based on current and last X and Y page coordinates.
 * @param {Event} event - a mousemove event
 */
DvtDataGrid.prototype.handleResizeMouseMove = function(event)
{
    var resizeHeaderMode, oldElementWidth, newElementWidth, oldElementHeight, newElementHeight;
    //update stored mouse position
    this.m_currentMouseX = event['pageX'];
    this.m_currentMouseY = event['pageY'];

    //check to see if we are resizing a column or row
    if (this.m_utils.containsCSSClassName(this.m_resizingElement, this.getResources().getMappedStyle('colheadercell')))
    {
        resizeHeaderMode = 'column';
    }
    else
    {
        resizeHeaderMode = 'row';
    }

    //handle width resizing for columns/rows
    if (this.m_cursor === 'col-resize')
    {
        if (resizeHeaderMode === 'column')
        {
            oldElementWidth = isNaN(this.getElementWidth(this.m_resizingElement)) ? this.getDefaultColumnWidth() : this.getElementWidth(this.m_resizingElement);
            newElementWidth = this.getNewElementWidth('column', oldElementWidth);
            this.resizeColWidth(oldElementWidth, newElementWidth);
        }
        else if (resizeHeaderMode === 'row')
        {
            oldElementWidth = this.getElementWidth(this.m_rowHeader);
            newElementWidth = this.getNewElementWidth('row', oldElementWidth);
            this.resizeRowWidth(oldElementWidth, newElementWidth);
        }
    }
    //handle height resizing for columns/rows
    else if (this.m_cursor === 'row-resize')
    {
        if (resizeHeaderMode === 'row')
        {
            oldElementHeight = isNaN(this.getElementHeight(this.m_resizingElement['parentNode'])) ? this.getDefaultRowHeight() : this.getElementHeight(this.m_resizingElement['parentNode']);
            newElementHeight = this.getNewElementHeight('row', oldElementHeight);
            this.resizeRowHeight(oldElementHeight, newElementHeight);
        }
        else if (resizeHeaderMode === 'column')
        {
            oldElementHeight = this.getElementHeight(this.m_colHeader);
            newElementHeight = this.getNewElementHeight('column', oldElementHeight);
            this.resizeColHeight(oldElementHeight, newElementHeight);
        }
    }

    //rebuild the corners
    this.buildCorners();

    //update the last mouse X/Y
    this.m_lastMouseX = this.m_currentMouseX;
    this.m_lastMouseY = this.m_currentMouseY;
};

/**
 * Resize the width of column headers, and the column cells. Also resize the 
 * scroller and databody accordingly. Set the left(or right) style value on all 
 * cells/columns following(preceeding) the resizing element. Update the end 
 * column pixel as well.
 * @param {number} oldElementWidth - the elements width prior to resizing
 * @param {number} newElementWidth - the elements width after resizing
 */
DvtDataGrid.prototype.resizeColWidth = function(oldElementWidth, newElementWidth)
{
    var widthChange, oldScrollerWidth, newScrollerWidth, databodyWidth;
    widthChange = newElementWidth - oldElementWidth;
    oldScrollerWidth = this.getElementWidth(this.m_scroller['firstChild']);
    newScrollerWidth = oldScrollerWidth + widthChange;
    databodyWidth = this.getElementWidth(this.m_databody);
    //Never let the scroller be samller than the databody
    if (newScrollerWidth >= databodyWidth)
    {
        this.setElementWidth(this.m_scroller['firstChild'], newScrollerWidth);
        this.setElementWidth(this.m_databody['firstChild'], newScrollerWidth);
        this.setElementWidth(this.m_colHeader['firstChild'], newScrollerWidth);
        this.manageResizeScrollbars();
        this.setElementWidth(this.m_resizingElement, newElementWidth);
        //helper to update all elements this effects
        this.resizeColumnWidthAndShift(newElementWidth, widthChange);
        this.m_endColPixel += widthChange;
        this.m_endColHeaderPixel += widthChange;
        this.m_avgColWidth = newScrollerWidth / this.getDataSource().getCount('column');
    } else {
        this.m_overResizeLeft += widthChange;
    }
};

/**
 * Resize the height of row headers, and the rows cells. Also resize the 
 * scroller and databody accordingly. Update the end row pixel as well.
 * @param {number} oldElementHeight - the elements height prior to resizing
 * @param {number} newElementHeight - the elements height after resizing
 */
DvtDataGrid.prototype.resizeRowHeight = function(oldElementHeight, newElementHeight)
{
    var heightChange, oldScrollerHeight, newScrollerHeight, databodyHeight, newParentHeight, index;
    heightChange = newElementHeight - oldElementHeight;
    oldScrollerHeight = this.getElementHeight(this.m_scroller['firstChild']);
    newScrollerHeight = oldScrollerHeight + heightChange;
    databodyHeight = this.getElementHeight(this.m_databody);
    //Never let the scroller be samller than the databody    
    if (newScrollerHeight >= databodyHeight)
    {
        this.setElementHeight(this.m_resizingElement['parentNode'], newElementHeight);
        newParentHeight = this.getElementHeight(this.m_rowHeader['firstChild']) + heightChange;
        this.setElementHeight(this.m_rowHeader['firstChild'], newParentHeight);
        this.setElementHeight(this.m_scroller['firstChild'], newScrollerHeight);
        this.setElementHeight(this.m_databody['firstChild'], newScrollerHeight);

        //set row height on the appropriate databody row, set the new value in the sizingManager
        this.resizeRowHeightAndShift(newElementHeight, heightChange);
        
        this.manageResizeScrollbars();

        this.m_endRowPixel += heightChange;
        this.m_endRowHeaderPixel += heightChange;
        this.m_avgRowHeight = newScrollerHeight / this.getDataSource().getCount('row');
    }
};

/**
 * Resize the height of column headers. Also resize the scroller and databody 
 * accordingly.
 * @param {number} oldElementHeight - the column header height prior to resizing
 * @param {number} newElementHeight - the column header height after resizing
 */
DvtDataGrid.prototype.resizeColHeight = function(oldElementHeight, newElementHeight)
{
    var databody, scroller, rowHeader, heightChange, databodyHeight;
    this.setElementHeight(this.m_colHeader, newElementHeight);
    this.m_colHeaderHeight = newElementHeight + "px";

    databody = this.m_databody;
    scroller = this.m_scroller;
    rowHeader = this.m_rowHeader;
    heightChange = newElementHeight - oldElementHeight;
    databodyHeight = this.getElementHeight(databody);

    this.setElementHeight(databody, (databodyHeight - heightChange));
    this.setElementDir(databody, newElementHeight, 'top');
    this.setElementHeight(rowHeader, (databodyHeight - heightChange));
    this.setElementDir(rowHeader, newElementHeight, 'top');
    this.setElementHeight(scroller, (this.getElementHeight(scroller) - heightChange));
    this.setElementDir(scroller, newElementHeight, 'top');

    this.manageResizeScrollbars();

};

/**
 * Resize the width of row headers. Also resize the scroller and databody 
 * accordingly.
 * @param {number} oldElementWidth - the row header width prior to resizing
 * @param {number} newElementWidth - the row header width after resizing
 */
DvtDataGrid.prototype.resizeRowWidth = function(oldElementWidth, newElementWidth)
{
    var databody, scroller, colHeader, widthChange, databodyWidth, dir;

    this.setElementWidth(this.m_rowHeader, newElementWidth);
    this.m_rowHeaderWidth = newElementWidth + "px";
    this.manageResizeScrollbars();

    databody = this.m_databody;
    scroller = this.m_scroller;
    colHeader = this.m_colHeader;
    widthChange = newElementWidth - oldElementWidth;
    databodyWidth = this.getElementWidth(databody);

    dir = this.getResources().isRTLMode() ? "right" : "left";
    this.setElementWidth(databody, (databodyWidth - widthChange));
    this.setElementDir(databody, newElementWidth, dir);
    this.setElementWidth(colHeader, (databodyWidth - widthChange));
    this.setElementDir(colHeader, newElementWidth, dir);
    this.setElementWidth(scroller, (this.getElementWidth(scroller) - widthChange));
    this.setElementDir(scroller, newElementWidth, dir);
};

/**
 * Determine what the new element width should be based on minimum values. 
 * Accounts for the overshoot potential of passing up the boundries set.
 * @param {string} axis - the axis along which we need a new width
 * @param {number} oldElementWidth - the element width prior to resizing
 * @return {number} the element width after resizing
 */
DvtDataGrid.prototype.getNewElementWidth = function(axis, oldElementWidth)
{
    var minWidth, databodyWidth, deltaWidth, newElementWidth, oldScrollerWidth, halfGridWidth, widthChange;
    minWidth = 20;
    databodyWidth = this.getElementWidth(this.m_databody);
    deltaWidth = this.getResources().isRTLMode() ? this.m_lastMouseX - this.m_currentMouseX : this.m_currentMouseX - this.m_lastMouseX;
    newElementWidth = oldElementWidth + deltaWidth + this.m_overResizeLeft + this.m_overResizeMinLeft + this.m_overResizeRight;
    oldScrollerWidth = this.getElementWidth(this.m_scroller['firstChild']);
    halfGridWidth = Math.round(this.getElementWidth(this.m_root) / 2);

    //check to make sure the scroller is bigger than the databody
    if (oldScrollerWidth + deltaWidth + this.m_overResizeLeft < databodyWidth)
    {
        this.m_overResizeLeft += deltaWidth - databodyWidth + oldScrollerWidth;
        widthChange = databodyWidth - oldScrollerWidth;
        newElementWidth = oldElementWidth + widthChange;
    }
    //check to make sure the element exceeds the minimum width
    else if (newElementWidth < minWidth)
    {
        this.m_overResizeMinLeft += deltaWidth - minWidth + oldElementWidth;
        newElementWidth = minWidth;
    }
    else
    {
        this.m_overResizeMinLeft = 0;
        this.m_overResizeLeft = 0;
    }
    //check to make sure row header width don't exceed half of the grid width
    if (axis === 'row')
    {
        if (newElementWidth > halfGridWidth)
        {
            this.m_overResizeRight += deltaWidth - halfGridWidth + oldElementWidth;
            newElementWidth = halfGridWidth;
        }
        else
        {
            this.m_overResizeRight = 0;
        }
    }
    return newElementWidth;
};

/**
 * Determine what the new element height should be based on minimum values. 
 * Accounts for the overshoot potential of passing up the boundries set.
 * @param {string} axis - the axis along which we need a new width
 * @param {number} oldElementHeight - the element height prior to resizing
 * @return {number} the element height after resizing
 */
DvtDataGrid.prototype.getNewElementHeight = function(axis, oldElementHeight)
{
    var databodyHeight, minHeight, deltaHeight, newElementHeight, oldScrollerHeight, halfGridHeight;
    minHeight = 20;
    databodyHeight = this.getElementHeight(this.m_databody);
    deltaHeight = this.m_currentMouseY - this.m_lastMouseY;
    newElementHeight = oldElementHeight + deltaHeight + this.m_overResizeTop + this.m_overResizeMinTop + this.m_overResizeBottom;
    oldScrollerHeight = this.getElementHeight(this.m_scroller['firstChild']);
    halfGridHeight = Math.round(this.getElementHeight(this.m_root) / 2);    
    //Check to make sure the scroller height exceed the databody height
    if (oldScrollerHeight + deltaHeight + this.m_overResizeTop < databodyHeight)
    {
        this.m_overResizeTop += deltaHeight - databodyHeight + oldScrollerHeight;
        newElementHeight = oldElementHeight + databodyHeight - oldScrollerHeight;
    }
    //Check to make sure the element height exceeds the minimum height
    if (newElementHeight < minHeight)
    {
        this.m_overResizeMinTop += deltaHeight - minHeight + oldElementHeight;
        newElementHeight = minHeight;
    }
    else
    {
        this.m_overResizeMinTop = 0;
        this.m_overResizeTop = 0;
    }
    //check to make sure column header width don't exceed half of the grid height
    if (axis === 'column')
    {
        if (newElementHeight > halfGridHeight)
        {
            this.m_overResizeBottom += deltaHeight - halfGridHeight + oldElementHeight;
            newElementHeight = halfGridHeight;
        }
        else
        {
            this.m_overResizeBottom = 0;
        }
    }
    return newElementHeight;
};

/**
 * Manages the databody and scroller sizing when the scrollbars are added and 
 * removed scrollbars from the grid. This allows the grid container to maintain 
 * size as it renders scrollbars inside tahther than out. 
 */
DvtDataGrid.prototype.manageResizeScrollbars = function() {
    var databody, scroller, colHeader, rowHeader, databodyWidth, databodyHeight, isDatabodyVerticalScrollbarRequired, isDatabodyHorizontalScrollbarRequired, scrollbarSize;
    databody = this.m_databody;
    scroller = this.m_scroller;
    colHeader = this.m_colHeader;
    rowHeader = this.m_rowHeader;
    databodyWidth = this.getElementWidth(databody);
    databodyHeight = this.getElementHeight(databody);
    isDatabodyVerticalScrollbarRequired = this.isDatabodyVerticalScrollbarRequired(databodyHeight);
    isDatabodyHorizontalScrollbarRequired = this.isDatabodyHorizontalScrollbarRequired(databodyWidth);
    
    scrollbarSize = this.m_utils.getScrollbarSize();
    // if we need to add a horizontal scrollbar, check to see if we also need to add a vertical one now that we've lost that scrollbar height
    if (isDatabodyHorizontalScrollbarRequired && !isDatabodyVerticalScrollbarRequired && !this.m_hasHorizontalScroller && !this.m_hasVerticalScroller)
    {
        isDatabodyVerticalScrollbarRequired = this.isDatabodyVerticalScrollbarRequired(databodyHeight - scrollbarSize);
    }
    // if we need to add a vertical scrollbar, check to see if we also need to add a horizontal one now that we've lost that scrollbar width    
    else if (!isDatabodyHorizontalScrollbarRequired && isDatabodyVerticalScrollbarRequired && !this.m_hasHorizontalScroller && !this.m_hasVerticalScroller)
    {
        isDatabodyHorizontalScrollbarRequired = this.isDatabodyHorizontalScrollbarRequired(databodyWidth - scrollbarSize);
    }
    // if we need have all scrollbars and need them still, make sure we can't just eliminate both (if the scrollbar is the difference between scroller and databody)
    else if (isDatabodyHorizontalScrollbarRequired && isDatabodyVerticalScrollbarRequired && this.m_hasHorizontalScroller && this.m_hasVerticalScroller) {
        if (!this.isDatabodyVerticalScrollbarRequired(databodyHeight + scrollbarSize) && !this.isDatabodyHorizontalScrollbarRequired(databodyWidth + scrollbarSize)) {
            isDatabodyHorizontalScrollbarRequired = false;
            isDatabodyVerticalScrollbarRequired = false;
        }
    }
    
    //update databody, column header and row header when scrollers removed
    if (!isDatabodyVerticalScrollbarRequired && !isDatabodyHorizontalScrollbarRequired && this.m_hasHorizontalScroller && this.m_hasVerticalScroller) {
        this.setElementWidth(databody, databodyWidth + scrollbarSize);
        this.setElementHeight(databody, databodyHeight + scrollbarSize);
        this.setElementWidth(colHeader, databodyWidth + scrollbarSize);
        this.setElementHeight(rowHeader, databodyHeight + scrollbarSize);
        //workaround for scrollbars not hiding
        scroller['style']['overflow'] = "visible";
    }
    //update databody and column header when vertical scroller removed
    else if (!isDatabodyVerticalScrollbarRequired && this.m_hasVerticalScroller) {
        this.setElementWidth(databody, databodyWidth + scrollbarSize);
        this.setElementWidth(colHeader, databodyWidth + scrollbarSize);
    }
    //update databody and row header when horizontal scroller removed
    else if (!isDatabodyHorizontalScrollbarRequired && this.m_hasHorizontalScroller) {
        this.setElementHeight(databody, databodyHeight + scrollbarSize);
        this.setElementHeight(rowHeader, databodyHeight + scrollbarSize);
    }

    //update databody, column header and row header when scrollers added
    if (isDatabodyVerticalScrollbarRequired && isDatabodyHorizontalScrollbarRequired && !this.m_hasHorizontalScroller && !this.m_hasVerticalScroller) {
        scroller['style']['overflow'] = "auto";
        this.setElementWidth(databody, databodyWidth - scrollbarSize);
        this.setElementHeight(databody, databodyHeight - scrollbarSize);
        this.setElementWidth(colHeader, databodyWidth - scrollbarSize);
        this.setElementHeight(rowHeader, databodyHeight - scrollbarSize);
    }
    //update databody and column header when vertical scroller added    
    else if (isDatabodyVerticalScrollbarRequired && !this.m_hasVerticalScroller) {
        scroller['style']['overflow'] = "auto";
        this.setElementWidth(databody, databodyWidth - scrollbarSize);
        this.setElementWidth(colHeader, databodyWidth - scrollbarSize);
    }
    //update databody and row header when horizontal scroller added    
    else if (isDatabodyHorizontalScrollbarRequired && !this.m_hasHorizontalScroller) {
        scroller['style']['overflow'] = "auto";
        this.setElementHeight(databody, databodyHeight - scrollbarSize);
        this.setElementHeight(rowHeader, databodyHeight - scrollbarSize);
    }

    //set whether or not the scrollers are on
    this.m_hasHorizontalScroller = isDatabodyHorizontalScrollbarRequired;
    this.m_hasVerticalScroller = isDatabodyVerticalScrollbarRequired;
};

/**
 * Resizes all cell in the resizing element's column, and updates the left(right)
 * postion on the cells and column headers that follow(preceed) that column.
 * @param {number} newWidth - the width of the resizing element
 * @param {number} widthChange - the change in width of the resizing element
 */
DvtDataGrid.prototype.resizeColumnWidthAndShift = function(newWidth, widthChange)
{
    var dir, databodyRows, children, after, i, newStart, j;
    dir = this.getResources().isRTLMode() ? "right" : "left";
    databodyRows = this.m_databody['firstChild']['childNodes'];
    children = this.m_resizingElement['parentNode']['childNodes'];
    after = false;
    if (children.length === databodyRows[1]['childNodes'].length)
    {
        this.m_databody['style']['display'] = 'none';
        this.m_colHeader['style']['display'] = 'none';
            
        for (i = 0; i < children.length; i += 1)
        {
            if (children[i] !== this.m_resizingElement && after === true)
            {
                newStart = this.getElementDir(children[i], dir) + widthChange;
                this.setElementDir(children[i], newStart, dir);
                for (j = 1; j < databodyRows.length; j += 1)
                {
                    this.setElementDir(databodyRows[j]['childNodes'][i], newStart, dir);
                }
            } else if (children[i] === this.m_resizingElement)
            {
                after = true;
                this.m_sizingManager.setSize('column', this.m_resizingElement.getAttribute(this.getResources().getMappedAttribute('key')), newWidth);
                for (j = 1; j < databodyRows.length; j += 1)
                {
                    this.setElementWidth(databodyRows[j]['childNodes'][i], newWidth);
                }
            }
        }
        
        this.m_databody['style']['display'] = 'block';
        this.m_colHeader['style']['display'] = 'block';        
    }
};

/**
 * Resizes the resizing elements row, and updates the top
 * postion on the rows and row headers that follow that column.
 * @param {number} newHeight - the width of the resizing element
 * @param {number} heightChange - the change in width of the resizing element
 */
DvtDataGrid.prototype.resizeRowHeightAndShift = function(newHeight, heightChange)
{
    var databodyRows, rowHeaders, after, i, newStart, j;
    databodyRows = this.m_databody['firstChild']['childNodes'];
    rowHeaders = this.m_resizingElement['parentNode']['parentNode']['childNodes'];
    after = false;
    if (databodyRows.length === rowHeaders.length)
    {
        this.m_databody['style']['display'] = 'none';
        this.m_rowHeader['style']['display'] = 'none';
        
        for (i = 1; i < rowHeaders.length; i += 1)
        {
            if (rowHeaders[i]['firstChild'] !== this.m_resizingElement && after === true)
            {
                newStart = this.getElementDir(rowHeaders[i], 'top') + heightChange;
                this.setElementDir(rowHeaders[i], newStart, 'top');
                this.setElementDir(databodyRows[i], newStart, 'top');

            } else if (rowHeaders[i]['firstChild'] === this.m_resizingElement)
            {
                after = true;
                this.m_sizingManager.setSize('row', this.m_resizingElement['parentNode'].getAttribute(this.getResources().getMappedAttribute('key')), newHeight);
                this.setElementHeight(databodyRows[i], newHeight);
            }
        }
        
        this.m_databody['style']['display'] = 'block';
        this.m_rowHeader['style']['display'] = 'block';
    }
};

/**
 * Takes the original target of the context menu and maps it to the appropriate 
 * column/row header to resize and selects the right resize function.
 * @param {HTMLElement|EventTarget} target - the context menu was applied to
 * @param {string} id - 'width' or 'height'
 * @param {string} val - new width or height to resize to
 */
DvtDataGrid.prototype.handleContextMenuResize = function(target, id, val) {
    var initialValue, value;
    value = parseInt(val, 10);
    if (this.m_utils.containsCSSClassName(target, this.getResources().getMappedStyle('sortascending')) ||
            this.m_utils.containsCSSClassName(target, this.getResources().getMappedStyle('sortdescending')) ||
            this.m_utils.containsCSSClassName(target, this.getResources().getMappedStyle('sortindicators')))
    {
        target = this.findHeader(target);
    }    
    this.m_resizingElement = target;
    if (id === 'resizeWidth')
    {
        initialValue = target['offsetWidth'];
        if (initialValue !== value) {
            if (this.m_utils.containsCSSClassName(this.m_resizingElement, this.getResources().getMappedStyle('colheadercell')))
            {
                if (this._isDOMElementResizable(this.m_resizingElement))
                {
                    this.resizeColWidth(initialValue, value);
                }
            }
            else
            {
                this.resizeRowWidth(initialValue, value);
            }
        }
    }
    else if (id === 'resizeHeight')
    {
        initialValue = target['offsetHeight'];
        if (initialValue !== value) {
            if (this.m_utils.containsCSSClassName(this.m_resizingElement, this.getResources().getMappedStyle('colheadercell')))
            {
                this.resizeColHeight(initialValue, value);
            } else
            {
                if (this._isDOMElementResizable(this.m_resizingElement))
                {
                    this.resizeRowHeight(initialValue, value);
                }
            }
        }
    }

    this.buildCorners();
};


/**
 * Get the edges (left,right,top,bottom) pixel locations relative to the page
 * @param {HTMLElement} elem - the element to find edges of
 * @return {Array.<number>} An array of numbers [leftEdge, topEdge, rightEdge, bottomEdge]
 */
DvtDataGrid.prototype.getHeaderEdgePixels = function(elem)
{
    var elementXY, leftEdge, topEdge, rightEdge, bottomEdge, targetWidth, targetHeight;
     elementXY = this.findPos(elem);
     leftEdge = elementXY[0];
     topEdge = elementXY[1];
    if (this.m_utils.containsCSSClassName(elem, this.getResources().getMappedStyle('colheadercell')))
    {
         targetWidth = isNaN(this.getElementWidth(elem)) ? this.getDefaultColumnWidth() : this.getElementWidth(elem);
         targetHeight = this.getElementHeight(this.m_colHeader);
    } else
    {
         targetWidth = this.getElementWidth(this.m_rowHeader);
         targetHeight = isNaN(this.getElementHeight(elem)) ? this.getDefaultRowHeight() : this.getElementHeight(elem);
    }
     rightEdge = leftEdge + targetWidth;
     bottomEdge = topEdge + targetHeight;
    return [leftEdge, topEdge, rightEdge, bottomEdge];
};


/**
 * Event handler for handling mouse over event on headers.
 * @param {Event} event the DOM event
 * @private
 */
DvtDataGrid.prototype._handleSortMouseOver = function(event)
{
    var clsName, ascendingClassName, descendingClassName;
    
    // checks if the mouse out is trigger by leaving the sort icons
    clsName = event.target['className'];
    ascendingClassName = this.getResources().getMappedStyle("sortascending");
    descendingClassName = this.getResources().getMappedStyle("sortdescending");
    if (clsName == ascendingClassName || clsName == descendingClassName)
    {
        return;
    }

    // show the sort indicators
    this._showOrHideSortIndicators(event, false);
};

/**
 * Event handler for handling mouse out event on headers.
 * @param {Event} event the DOM event
 * @private
 */
DvtDataGrid.prototype._handleSortMouseOut = function(event)
{
    var clsName = null, ascendingClassName, descendingClassName;
    
    // checks if the mouse out is trigger by hovering over the sort icons
    if (event.relatedTarget != null)
    {
        clsName = event.relatedTarget['className'];
    }

    ascendingClassName = this.getResources().getMappedStyle("sortascending");
    descendingClassName = this.getResources().getMappedStyle("sortdescending");
    if (clsName == ascendingClassName || clsName == descendingClassName)
        return;

    this._showOrHideSortIndicators(event, true);
};

/**
 * Show or hide the sort indicator icons.
 * @param {Event} event the dom event
 * @param {boolean} hide true if hide the icons, false to show the icons
 * @private
 */
DvtDataGrid.prototype._showOrHideSortIndicators = function(event, hide)
{
    var header, indicators;

    // shows the sort indicator
    header = this.findHeader(event.target);
    if (header != null)
    {
        indicators = header['lastChild'];
        // check if the sort icons exists
        if (indicators != null && indicators['className'] == this.getResources().getMappedStyle("sortindicators"))
        {
            indicators['style']['display'] = hide ? "none" : "inline-block";
        }
    }
};

/**
 * Creates the sort indicator icons and the panel around them.
 * @return {Element} the sort indicator icons panel
 * @private
 */
DvtDataGrid.prototype._buildSortIndicators = function()
{
    var sortIndicators, sortAscendIcon, sortDescendIcon;

    sortIndicators = document.createElement("div");
    sortIndicators['className'] = this.getResources().getMappedStyle("sortindicators");
    sortAscendIcon = document.createElement("a");
    sortAscendIcon['className'] = this.getResources().getMappedStyle("sortascending");
    sortDescendIcon = document.createElement("a");
    sortDescendIcon['className'] = this.getResources().getMappedStyle("sortdescending");

    sortIndicators.appendChild(sortAscendIcon);
    sortIndicators.appendChild(sortDescendIcon);

    return sortIndicators;
};

/**
 * Handles sorting using keyboard (enter key while focus on header).  See HandleHeaderKeyDown.
 * @private
 */
DvtDataGrid.prototype._handleKeyboardSort = function(header, event)
{
    var direction = header.getAttribute(this.getResources().getMappedAttribute('sortDir'));
    if (direction == null || direction === "descending")
    {
        direction = "ascending";
    }
    else
    {
        direction = "descending";
    }    

    this._doHeaderSort(event, header, direction);
};

/**
 * Handles click on the header, this would perform the sort operation.
 * @param {Event} event the DOM event
 * @private
 */
DvtDataGrid.prototype._handleHeaderSort = function(event, direction)
{
    var sortAscendClassName, sortDescendClassName, target, header;

    sortAscendClassName = this.getResources().getMappedStyle("sortascending");
    sortDescendClassName = this.getResources().getMappedStyle("sortdescending");

    target = event.target;
    header = this.findHeader(target);
    if (header != null)
    {
        // use the class name to determine if it's asecnding or descending
        if (event['direction'] == null)
        {
            if (target['className'] == sortAscendClassName)
            {
                direction = "ascending";
            }
            else if (target['className'] == sortDescendClassName)
            {
                direction = "descending";
            }
        }
        this._doHeaderSort(event, header, direction);
    }
};

/**
 * Handles click on the header, this would perform the sort operation.
 * @param {Event} event the DOM event
 * @private
 */
DvtDataGrid.prototype._handleCellSort = function(event, direction, header)
{
    var target;
    target = event.target;
    if (header != null)
    {
        this._doHeaderSort(event, header, direction);
    }
};

/**
 * Handles click on the header, this would perform the sort operation.
 * @param {Event} event the DOM event
 * @param {Element} header the header element
 * @param {string} direction the sort direction
 * @private
 */
DvtDataGrid.prototype._doHeaderSort = function(event, header, direction)
{
    var key, axis, details, criteria;
    
    // needed for toggle and screenreader
    header.setAttribute(this.getResources().getMappedAttribute('sortDir'), direction);
    
    // get the key and axis  
    key = this._getKey(header);
    axis = this._getAxis(header);

    // creates the criteria object and invoke sort on the data source
    if (direction != null && key != null && axis != null)
    {
        // show status message
        this.showStatusText();

        // invoke sort
        criteria = {"axis": axis, "key": key, "direction": direction};
        this.getDataSource().sort(criteria, {"success": this._handleSortSuccess.bind(this), "error": this._handleSortError.bind(this)});

        // fire event
        details = {
            'event': event, 'ui': {
                'header': key,
                'direction': direction
            }
        };
        this.fireEvent("sort", details);
    }
};

/**
 * Callback method invoked when the sort operation failed.
 * @private
 */
DvtDataGrid.prototype._handleSortError = function()
{
    this.hideStatusText();
};

/**
 * Retrieve the key from header.
 * @param {Element} header the header to retrieve the key from.
 * @return {Object|null} the key of the header
 * @private
 */
DvtDataGrid.prototype._getKey = function(header)
{
    return header.getAttribute(this.getResources().getMappedAttribute('key'));
};

/**
 * Determine the axis of the header.
 * @param {Element} header the header to determine the axis, returns either "row" or "column".
 * @return {string|null} the axis of the header
 * @private
 */
DvtDataGrid.prototype._getAxis = function(header)
{
    var columnHeaderCellClassName, rowHeaderCellClassName;

    columnHeaderCellClassName = this.getResources().getMappedStyle("colheadercell");
    rowHeaderCellClassName = this.getResources().getMappedStyle("rowheadercell");

    if (this.m_utils.containsCSSClassName(header, columnHeaderCellClassName))
    {
        return "column";
    }

    if (this.m_utils.containsCSSClassName(header, rowHeaderCellClassName))
    {
        return "row";
    }

    return null;
};


/**
 * Callback method invoked when the sort operation completed successfully.
 * @private
 */
DvtDataGrid.prototype._handleSortSuccess = function()
{
    // hide the message
    this.hideStatusText();

    // sort is completed successfully, now fetch the sorted data
    // fetch cells for the current range but with sort specific callback
    // scroll position should remain unchanged
    this.fetchCells(this.m_databody, this.m_scroller, this.m_startRow, this.m_startCol, this.m_endRow-this.m_startRow, this.m_endCol-this.m_startCol, {"success": this.handleCellsFetchSuccessForSort, "error": this.handleCellsFetchError});
};

/**
 * Handle a successful call to the data source fetchCells after sort. 
 * @param {Object} cellSet a CellSet object which encapsulates the result set of cells
 * @param {Array.<Object>} cellRange [rowRange, columnRange] - [{"axis":,"start":,"count":},{"axis":,"start":,"count":,"databody":,"scroller":}]
 */
DvtDataGrid.prototype.handleCellsFetchSuccessForSort = function(cellSet, cellRange)
{
    var rowRange, rowStart, rowCount, columnRange, columnStart, columnCount, newRowElements, oldRowElements;

    this.m_fetching['cells'] = false;
    
    // size the grid if fetch is done
    if (this.isFetchComplete())
    {
        this.hideStatusText();
    }

    // obtain params for _addRows
    rowRange = cellRange[0];
    rowStart = rowRange['start'];
    rowCount = cellSet.getCount("row");

    columnRange = cellRange[1];
    columnStart = columnRange['start'];
    columnCount = cellSet.getCount("column");

    // the rows AFTER sort should be inside the newRowElements fragment
    newRowElements = document.createDocumentFragment();
    this._addRows(newRowElements, true, this.m_startRowPixel, rowStart, rowCount, columnStart, false, cellSet);
    
    oldRowElements = this.m_databody['firstChild'];
    
    // now compare the two set of rows and animate
    //vvc     
    this.processSortAnimationToPosition(false, "bottom", 800, 10, "linear", oldRowElements, newRowElements); 
};

//--animation---vvc-------------------------------------------------------------
/**
 * Check if value is numeric. 
 * @param {Object} v
 * @return {boolean} 
 * * @private
 */
DvtDataGrid.prototype.isNumeric = function(v)
{
    var expr = /^-{0,1}\d*\.{0,1}\d+$/;
    return (expr.test(v));
};

/**
 * Create array of "data-key" values. 
 * @param {Element} initialData the element from which the "data-key" elements are extracted
 * @return {Array.<Object>} 
 * @private
 */
DvtDataGrid.prototype.getDataKeySet = function (initialData)
{
    var dataKeySet, keyAttr, i, j;

    dataKeySet = [];    
    keyAttr = this.getResources().getMappedAttribute('key');
    for(i = 0; i < initialData.childElementCount; i++)
    {
        for(j = 0; j < initialData.children[i].attributes.length; j++)
        {
            if(initialData.children[i].attributes[j].nodeName == keyAttr)
            {
                dataKeySet.push(initialData.children[i].attributes[j].nodeValue);
                break;
            }
        }
    }
    return dataKeySet;
};


/**
 * Check if CSS property is supported by appropriate vendors
 * @param {string} cssprop css property
 * @return {string} css property with appropiate vendor's prefix
 * @private
 */
DvtDataGrid.prototype.getCssSupport = function(cssprop) 
{
    var vendors, root, i, css3mc;

    vendors = ['', '-moz-', '-webkit-', '-o-', '-ms-', '-khtml-'];
    root = document.documentElement;
    
    function toCamel(str) 
    {
        return str.replace(/\-([a-z])/gi, function(match, val) 
        {
            // convert first letter after "-" to uppercase
            return val.toUpperCase();
        });
    }
    
    for (i = 0; i < vendors.length; i++) 
    {
        css3mc = toCamel(vendors[i] + cssprop);
        // if property starts with 'Ms'
        if (css3mc.substr(0, 2) == 'Ms')
        {
            // Convert 'M' to lowercase            
            css3mc = 'm' + css3mc.substr(1);
        }
        if (css3mc in root.style) 
        {
            return css3mc;
        }
    }

    return undefined;
};

/**
 * Change or add CSS property of element
 * @param {Element} target the element to which css property will be added
 * @param {string} prop the style property name
 * @param {string} value the value of css property
 * @param {string} action the flag variable if it is require to remove css property
 * @private
 */
DvtDataGrid.prototype.changeStyleProperty = function(target, prop, value, action)
{
    if (typeof prop != "undefined")
    {
        target.style[prop] = (action == "remove") ? "" : value;
    }
};

/**
 * Add set of required animation rules to the element
 * @param {Element} target the element to which animation rules will be added
 * @param {number} duration the duration of animation
 * @param {number} delay the delay of animation
 * @param {string} timing the easing function 
 * @param {number} y the final position (in pixels) of the current animation
 * @private
 */
DvtDataGrid.prototype.addUpDownMoveStyle = function(target, duration, delay, timing, y)
{
    this.changeStyleProperty(target, this.getCssSupport('transition-delay'), delay);
    this.changeStyleProperty(target, this.getCssSupport('transition-timing-function'), timing);
    this.changeStyleProperty(target, this.getCssSupport('transition-duration'), duration);
    this.changeStyleProperty(target, this.getCssSupport('transform'), 'translate3d(0,'+y+'px,0)');
};

/**
 * The main method for animation of the DataGrid rows from before-sort to the after-sort potitions
 * @param {boolean} deb the debug swith
 * @param {string} direction the parameter that control the movements of new rows from top or from bottom of visible area
 * @param {number} duration the duration of animation
 * @param {number} delay_offset the initial delay of animation
 * @param {string} timing the easing function 
 * @param {Object} oldElementSet the DOM structure on which tha animation will be performed. Initially contains DOM elements in before sorting order
 * @param {Element} newElementSet the element that contains set of sub-elements in "after-sorting" order
 * @private
 */
DvtDataGrid.prototype.processSortAnimationToPosition = function(deb, direction, duration, delay_offset, timing, oldElementSet, newElementSet)
{
    var me, pos, oldLength, oldSet, newSet, animOrder, restSet, v, gridHeight, colHeaderHeight, gridBodyHeight, 
        rowHeight, offset, scrollTop, limitRangeInPixels, rowsForAppend, restSetLength, i, j, key, k, kk, l,
        dkey, delay, keyAttr, order, idx, bottomLimit, topLimit, rowPos, child, colHeader;
    
    me = this;
    pos = 0;
    oldLength = oldElementSet.childElementCount;
    oldSet = this.getDataKeySet(oldElementSet);
    newSet = this.getDataKeySet(newElementSet);
    animOrder = [];
    restSet = [];
    gridHeight = this.getHeight();
    colHeader = this.m_colHeader;
    colHeaderHeight = this.getElementHeight(colHeader);
    gridBodyHeight = gridHeight - colHeaderHeight;
    rowHeight = this.getDefaultRowHeight();
    offset = parseInt(oldElementSet.firstElementChild.attributes['style'].value.split("height:")[1].split("px")[0], 10);
    if (!offset)
    {
        offset = 0;
    }
    scrollTop = this.m_scroller['scrollTop']-offset;
    limitRangeInPixels = [scrollTop, scrollTop+gridBodyHeight];
    rowsForAppend = [];
    restSetLength = 0;
    keyAttr = this.getResources().getMappedAttribute('key');
    
    if(deb)
    {
        for (i = 0; i < oldElementSet.childElementCount-1; i++)
        {
            for(j = 0; j < oldElementSet.childNodes[i + 1].childNodes.length; j++)
            {
                // yellow old 
                oldElementSet.childNodes[i + 1].childNodes[j].style.backgroundColor = "#F5F17A";
            }
        }
    }
 
     //define initial order of rows before sorting
    for (i = 0; i < oldSet.length; i++) 
    {
        animOrder[oldSet[i]] = i;       
    }
       
    //define direction and how far (in number of rows) the position of row before sorting against its position after sorting 
    //if rows after sort are not presented in the old set(before sorting) add them to the restSet hash
    for (j = 0; j < newSet.length; j++) 
    {
        if (animOrder.hasOwnProperty(newSet[j])) 
        {
            if (animOrder[newSet[j]] > j) 
            {
                v = animOrder[newSet[j]] - j;
                animOrder[newSet[j]] = "up_-" + v;
            } 
            else if (animOrder[newSet[j]] < j) 
            {
                v = j - animOrder[newSet[j]];
                animOrder[newSet[j]] = "down_" + v;
            } 
            else if (animOrder[newSet[j]] == j) 
            {
                animOrder[newSet[j]] = "no_0";
            }
        } 
        else 
        {
            restSet[newSet[j]] = j;
        }
    }
          
    //define the rows from new (after sorting) set that should be added to old set for future animation      
    for(key in restSet)
    {
        if(restSet.hasOwnProperty(key))
        {
            restSetLength++;          
            idx = restSet[key];
            bottomLimit = limitRangeInPixels[1]+oldElementSet.childNodes[1].clientHeight;
            topLimit = limitRangeInPixels[0]-oldElementSet.childNodes[1].clientHeight;
            rowPos = idx*oldElementSet.childNodes[1].clientHeight;
            if(rowPos < bottomLimit)
            {
                if(rowPos > topLimit)
                {
                    child = newElementSet.children[idx];
                    if(deb)
                    {
                        for(j = 0; j < child.childNodes.length; j++)
                        {
                            //green new 
                            child.childNodes[j].style.backgroundColor = "#B8F2B6";
                        }
                    }
                    rowsForAppend.push(child);
                }
            }
        }
    }       
        
    //check for the rest of rows from old set that not presented in the new one    
    for (kk = 0; kk < oldSet.length; kk++) 
    {
        if(animOrder.hasOwnProperty(oldSet[kk]))
        {
            if (this.isNumeric(animOrder[oldSet[kk]])) 
            {
                animOrder[oldSet[kk]] = "up_30";              
            }
        }
    } 

    //correct position of new rows added to old set on the border of visible area
    for (k = 0; k < rowsForAppend.length; k++) 
    {
        for(kk=0; kk < rowsForAppend[k].attributes.length; kk++)
        {
            dkey = null;
            if(rowsForAppend[k].attributes[kk].nodeName == keyAttr)
            {
                dkey = rowsForAppend[k].attributes[kk].nodeValue;
                if(restSet.hasOwnProperty(dkey))
                {
                    order = restSet[dkey];
                    if(direction == 'top')
                    {
                        me.addUpDownMoveStyle(rowsForAppend[k], 0, 0, 'linear', -order*rowHeight); 
                    }
                    else 
                    {    
                        me.addUpDownMoveStyle(rowsForAppend[k], 0, 0, 'linear', limitRangeInPixels[1]-order*rowHeight);                     
                    }
                }
            }
        }
        oldElementSet.appendChild(rowsForAppend[k]);
    }

    //main animation loop
    for (l = 0; l < oldElementSet.childElementCount; l++)
    {   
        delay = delay_offset*l + "ms";
        if(l < oldLength-1)
        {
            pos = parseInt(animOrder[oldSet[l]].split('_')[1], 10) * rowHeight;
            if(pos < 0)
            {
                if(pos*(-1) > gridHeight)
                {
                    if(deb)
                    {
                        for(j = 0; j < oldElementSet.childNodes[l + 1].childNodes.length; j++)
                        {
                            //red, out of grid body                             
                            oldElementSet.childNodes[l + 1].childNodes[j].style.backgroundColor = "#FF8C80";
                        }
                    }
                }
            }
            if(pos < limitRangeInPixels[1]-l*rowHeight)
            {
                    this.addUpDownMoveStyle(oldElementSet.childNodes[l + 1], duration/2+"ms", delay, timing, pos);
            } 
            else 
            {                
                if(deb)
                { 
                    for(j = 0; j < oldElementSet.childNodes[l + 1].childNodes.length; j++)
                    {    
                        //red, out of grid body                                  
                        oldElementSet.childNodes[l + 1].childNodes[j].style.backgroundColor = "#FF8C80";               
                    }
                }
                if(direction == 'top')
                {
                    if((l+1)*oldElementSet.childNodes[1].clientHeight < limitRangeInPixels[1])
                    {
                        pos = -(l+1)*oldElementSet.childNodes[1].clientHeight;
                        this.addUpDownMoveStyle(oldElementSet.childNodes[l + 1], duration/2+"ms", delay, timing, pos);
                    }
                } 
                else 
                {
                    pos = limitRangeInPixels[1]-(l-1)*oldElementSet.childNodes[1].clientHeight;
                    this.addUpDownMoveStyle(oldElementSet.childNodes[l + 1], duration/2+"ms", delay, timing, pos);
                }
            }
        } 
        else 
        {
            me.addUpDownMoveStyle(oldElementSet.childNodes[l+1], duration/2 + "ms", delay, timing, 0);
        }
        if (l == oldElementSet.childElementCount - 2) 
        {
            oldElementSet.childNodes[l].addEventListener('transitionend', function() 
            {         
                setTimeout(function()
                {
                    me.handleLongScroll(me.m_currentScrollLeft, me.m_currentScrollTop);
                }, 1000);
            }, false);
            break;
        }
    }      
};
return DvtDataGrid;
});