define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore', 'ojs/ojmodel','ojs/ojdatacollection-common'], 
       /*
        * @param {Object} oj 
        * @param {jQuery} $
        */
       function(oj, $, compCore)
{

/**
 * @preserve Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
 
/**
 * @class 
 * @name oj.ojRowExpander
 * @augments oj.baseComponent
 *
 * @classdesc
 * <h3 id="rowexpanderOverview-section">
 *   JET RowExpander Component
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rowexpanderOverview-section"></a>
 * </h3>
 * <p>Description: A JET RowExpander is a component that is primarily used inside the JET Table and JET DataGrid widgets.  It enables hierarchical data to be display in a JET Table and JET DataGrid.</p>
 *
 * <p>To enable expand and collapse of rows, developers must specify oj.FlattenedTreeTableDataSource as data when used within JET Table and oj.FlattenedTreeDataGridDataSource as data when used within JET DataGrid.</p>
 *
 * <h3 id="keyboard-section">
 *   Keyboard interaction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
 * </h3>
 * <table class="keyboard-table">
 *   <thead>
 *     <tr>
 *       <th>Key</th>
 *       <th>Use</th>
 *     </tr>
 *   </thead>
 *   <tbody>
 *     <tr>
 *       <td><kbd>Ctrl+Right Arrow</kbd></td>
 *       <td>Expand the currently focused row that contains a row expander.</td>
 *     </tr>
 *     <tr>
 *       <td><kbd>Ctrl+Left Arrow</kbd></td>
 *       <td>Collapse the currently focused row that contains a row expander.</td>
 *     </tr>
 *   </tbody>
 * </table>
 *
 * <h3 id="rtl-section">
 *   Reading direction
 *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
 * </h3>
 * 
 * <p>The location of the row expander will be reversed in RTL reading direction.</p>
 * <p>As with any JET component, in the unusual case that the directionality (LTR or RTL) changes post-init, the component containing the row expander (JET Table or JET DataGrid) must be <code class="prettyprint">refresh()</code>ed.  
 */
oj.__registerWidget('oj.ojRowExpander', $['oj']['baseComponent'],
{
    version: "1.0.0",
    widgetEventPrefix: 'oj',
    options:
            {
                /**
                 * The context object obtained from the column renderer (Table) or cell renderer (DataGrid)
                 * 
                 * @expose 
                 * @memberof! oj.ojRowExpander
                 * @instance
                 * @type {Object}
                 * @default <code class="prettyprint">null</code>
                 * 
                 */
                context: null,
                /**
                 * The number of pixels to indent for each level
                 * 
                 * @expose 
                 * @memberof! oj.ojRowExpander
                 * @instance
                 * @type {number}
                 * @default <code class="prettyprint">10</code>
                 * 
                 */
                indent: 10,
                /**
                 * Triggered when a expand is performed on the row expander
                 *
                 * @expose 
                 * @event 
                 * @memberof! oj.ojRowExpander
                 * @instance
                 * @property {Event} event <code class="prettyprint">jQuery</code> event object
                 * 
                 * @example <caption>Initialize the row expander with the <code class="prettyprint">expand</code> callback specified:</caption>
                 * $( ".selector" ).ojRowExpander({
                 *     "expand": function( event, ui ) {}
                 * });
                 *
                 * @example <caption>Bind an event listener to the <code class="prettyprint">ojexpand</code> event:</caption>
                 * $( ".selector" ).on( "ojexpand", function( event, ui ) {} );
                 */
                expand: null,
                /**
                 * Triggered when a collapse is performed on the row expander
                 *
                 * @expose 
                 * @event 
                 * @memberof! oj.ojRowExpander
                 * @instance
                 * @property {Event} event <code class="prettyprint">jQuery</code> event object
                 * 
                 * @example <caption>Initialize the row expander with the <code class="prettyprint">collapse</code> callback specified:</caption>
                 * $( ".selector" ).ojRowExpander({
                 *     "collapse": function( event, ui ) {}
                 * });
                 *
                 * @example <caption>Bind an event listener to the <code class="prettyprint">ojcollapse</code> event:</caption>
                 * $( ".selector" ).on( "ojcollapse", function( event, ui ) {} );
                 */
                collapse: null
            },
    classNames:
            {
                'root': 'oj-rowexpander',
                'icon': 'oj-component-icon',
                'clickable': 'oj-clickable-icon',
                'expand': 'oj-rowexpander-expand-icon',
                'collapse': 'oj-rowexpander-collapse-icon',
                'leaf': 'oj-rowexpander-leaf-icon',
                'lazyload': 'oj-rowexpander-lazyload-icon'
            },
    /**
     * Create the row expander
     * @memberof! oj.ojRowExpander
     * @private
     */
    _create: function()
    {
        this._super();
        this.element.addClass(this.classNames['root']);
    },
    /**
     * Initialize the row expander
     * @memberof! oj.ojRowExpander
     * @private
     */
    _init: function()
    {
        var self = this, context;
        this._super();
        this._addIcon();
        
        context = this.options['context'];
        this.component = context['component'];
        this.datasource = context['datasource'];

        //root hidden so subtract 1
        this.depth = context['depth'];
        this.indentation = (this.depth - 1) * this.options['indent'];
        this.iconState = context['state'];
        this.rowKey = context['key'];
        this.index = context['index'];
        this.parentKey = context['parentKey'];

        this._setIndentationWidth();
        this._setIconStateClass();

        if (this.iconState === 'expanded' || this.iconState === 'collapsed')
        {
            $(this.icon).on('click', function() {
                self._fireExpandCollapse();
            });
            $(this.element).on('keypress', function(event) {
                var code = event.keyCode || event.which;
                if (code === $.ui.keyCode.ENTER || $.ui.keyCode.SPACE)
                {
                    self._fireExpandCollapse();
                }
            });

            // listen for key down event from host component
            if (this.component != null)
            {
                this.handleKeyDownCallback = this._handleKeyDownEvent.bind(this);
                $(this.component.element).on('ojkeydown', this.handleKeyDownCallback);
            }

            // listens for expand and collapse event from flattened datasource
            // this could be due to user clicks, keyboard shortcuts or programmatically
            if (this.datasource != null)
            {
                this.handleExpandCallback = this._handleExpandEvent.bind(this);
                this.handleCollapseCallback = this._handleCollapseEvent.bind(this);

                this.datasource.on("expand", this.handleExpandCallback, this);
                this.datasource.on("collapse", this.handleCollapseCallback, this);
            }
        }

        // listen for active key change event from host component
        if (this.component != null)
        {
            this.handleActiveKeyChangeCallback = this._handleActiveKeyChangeEvent.bind(this);
            $(this.component.element).on('ojactive', this.handleActiveKeyChangeCallback);
        }
    },
    /**
     * Refresh the row expander having made external modifications
     *      
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof! oj.ojRowExpander
     * @instance
     * 
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     * $( ".selector" ).ojRowExpander( "refresh" );
     */
    refresh: function()
    {
        this.element.empty();
        this._init();
    },
    /**
     * destroy the row expander
     *      
     * <p>This method does not accept any arguments.
     * 
     * @expose 
     * @memberof! oj.ojRowExpander
     * @instance
     * @private     
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     * $( ".selector" ).ojRowExpander( "destroy" );
     */
    _destroy: function()
    {
        // unregister keydown and active key change handlers
        if (this.component != null)
        {
            $(this.component.element).off('ojkeydown', this.handleKeyDownCallback);
            $(this.component.element).off('ojactive', this.handleActiveKeyChangeCallback);
        }

        // unregister expand/collapse events
        if (this.datasource != null)
        {
            this.datasource.off("expand", this.handleExpandCallback, this);
            this.datasource.off("collapse", this.handleCollapseCallback, this);
        }

        this.removeClass(this.classNames['root']);
        this.element.empty();
    },
    /**
     * Add an icon to the row expander with appropriate class names for a clickable icon.
     * @private	 
     */
    _addIcon: function()
    {
        this.icon = $('<a></a>').addClass(this.classNames['icon']).addClass(this.classNames['clickable']);
        this.element.append(this.icon);
    },
    /**
     * Add a class name on the icon
     * @private	 
     * @param {string} classKey the key of the appropriate icon class expand/collapse/leaf
     */
    _addIconClass: function(classKey)
    {
        this.icon.addClass(this.classNames[classKey]);
    },
    /**
     * Remove a class name on the icon
     * @private
     * @param {string} classKey the key of the appropriate icon class expand/collapse/leaf
     */
    _removeIconClass: function(classKey)
    {
        this.icon.removeClass(this.classNames[classKey]);
    },
    /**
     * Set the icon class to the the iconState property
     * @private
     */
    _setIconStateClass: function()
    {
        switch (this.iconState)
        {
            case 'leaf':
                this._addIconClass('leaf');
                break;
            case 'collapsed':
                this._addIconClass('expand');
                this._ariaExpanded(false);
                break;
            case 'expanded':
                this._addIconClass('collapse');
                this._ariaExpanded(true);
                break;
            case 'loading':
                this._addIconClass('lazyload');
                break;
        }

    },
    /**
     * Removes the icon class of the iconState property
     * @private
     */
    _removeIconStateClass: function()
    {
        switch (this.iconState)
        {
            case 'leaf':
                this._removeIconClass('leaf');
                break;
            case 'collapsed':
                this._removeIconClass('expand');
                break;
            case 'expanded':
                this._removeIconClass('collapse');
                break;
            case 'loading':
                this._removeIconClass('lazyload');
                break;
        }

    },
    /**
     * Handles active key change event from host component (ojDataGrid or ojTable)
     * @param {Event} event
     * @param {Object} ui
     * @private
     */
    _handleActiveKeyChangeEvent: function(event, ui)
    {
        var rowKey, message;

        if (ui['activeKey'] != null)
        {
            rowKey = ui['activeKey']['rowKey'];
            // if the event is for this row and the active key change event is triggered
            // by row change and not column change
            if (this.rowKey === rowKey && (ui['previousActiveKey'] == null || ui['previousActiveKey']['row'] != ui['activeKey']['row']))
            {   
                // if the component allows AccessibleContext to be set
                if (this.component._setAccessibleContext)
                {
                    // description of row expander for screen reader
                    // todo: get index from TreeDataSource as well since that could change
                    message = this.getTranslatedString('accessibleRowDescription', {'level': this.depth, 'num': this.index+1, 'total': this.datasource.getWrappedDataSource().getChildCount(this.parentKey)});

                    this.component._setAccessibleContext({'message': message});
                }
            }
        }
    },
    /**
     * Handles keydown event from host component (ojDataGrid or ojTable)
     * @param {Event} event
     * @param {Object} ui
     * @private
     */
    _handleKeyDownEvent: function(event, ui)
    {
        var rowKey, code;

        rowKey = ui['rowKey'];
        if (this.rowKey === rowKey)
        {
            code = event.keyCode || event.which;
            // ctrl (or equivalent) is pressed
            if (event.ctrlKey)
            {
                // Ctrl+Right expands, Ctrl+Left collapse in accordance with WAI-ARIA best practice
                // consume the event as it's processed
                if (code == $.ui.keyCode.RIGHT)
                {
                    this._loading();
                    this.datasource.expand(this.rowKey);
                }
                else if (code == $.ui.keyCode.LEFT)
                {
                    this._loading();
                    this.datasource.collapse(this.rowKey);
                }
            }
        }
    },
    /**
     * Put row expander in a loading state.  This is called during expand/collapse.
     * @private
     */
    _loading: function()
    {
        this._removeIconStateClass();
        this.iconState = 'loading';
        this._setIconStateClass();
    },
    /**
     * Handle an expand event coming from the datasource, 
     * update the icon and the aria-expand property
     * @private
     */
    _handleExpandEvent: function(event)
    {
        var rowKey = event['rowKey'];
        if (rowKey === this.rowKey)
        {
            this._removeIconStateClass();
            this.iconState = 'expanded';
            this._setIconStateClass();
            this._ariaExpanded(true);
            this._trigger('expand');
        }
    },
    /**
     * Handle a collapse event coming from the datasource, 
     * update the icon and the aria-expand property
     * @private
     */
    _handleCollapseEvent: function(event)
    {
        var rowKey = event['rowKey'];
        if (rowKey === this.rowKey)
        {
            this._removeIconStateClass();
            this.iconState = 'collapsed';
            this._setIconStateClass();
            this._ariaExpanded(false);
            this._trigger('collapse');        
        }
    },
    /**
     * Fire the expand or collapse on the datasource and the oj event on the widget 
     * @private
     */
    _fireExpandCollapse: function()
    {
        var state = this.iconState; 

        // show loading icon, note this changes the icon state to 'loading'
        this._loading();

        // invoke expand/collapse on datasource
        if (state === 'collapsed')
        {
            this.datasource.expand(this.rowKey);
        }
        else if (state === 'expanded')
        {
            this.datasource.collapse(this.rowKey);
        }
    },
    /**
     * Sets the indentation width to the original width plus the indentation
     * @private
     */
    _setIndentationWidth: function()
    {
        if (this._GetReadingDirection() === "rtl")
        {
            this.element.width((this.element.width() + this.indentation) + 'px');
        }
        else
        {
            this.element.width((this.element.width() + this.indentation) + 'px');
        }
    },
    /**
     * Sets the icon's aria-expanded property to the boolean passed in
     * @param {boolean|null} bool true if expanded false if not
     * @private
     */
    _ariaExpanded: function(bool)
    {
        this.icon.attr('aria-expanded', bool);
    }
});

});
