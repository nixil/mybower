/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define("ojs/ojcore jquery ojs/internal-deps/datagrid/DvtDataGrid ojs/ojcomponentcore ojs/ojdatacollection-common ojs/ojinputnumber ojs/ojmenu ojs/ojdialog ojs/ojpagingcontrol".split(" "), function($oj$$11$$, $$$$11$$, $DvtDataGrid$$1$$) {
  $oj$$11$$.$ArrayDataGridDataSource$ = function $$oj$$11$$$$ArrayDataGridDataSource$$($data$$71$$, $options$$229$$) {
    null != $options$$229$$ && (this.$rowHeaderKey$ = $options$$229$$.rowHeader);
    $oj$$11$$.$ArrayDataGridDataSource$.$superclass$.constructor.call(this, $data$$71$$);
  };
  $goog$exportPath_$$("ArrayDataGridDataSource", $oj$$11$$.$ArrayDataGridDataSource$, $oj$$11$$);
  $oj$$11$$.$Object$.$createSubclass$($oj$$11$$.$ArrayDataGridDataSource$, $oj$$11$$.$DataGridDataSource$, "oj.ArrayDataGridDataSource");
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.Init = function $$oj$$11$$$$ArrayDataGridDataSource$$$Init$() {
    this.columns = this.$_getColumnsForScaffolding$(this.data);
    this.$_initializeRowKeys$();
    $oj$$11$$.$ArrayDataGridDataSource$.$superclass$.Init.call(this);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.Init", {Init:$oj$$11$$.$ArrayDataGridDataSource$.prototype.Init});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$_initializeRowKeys$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$_initializeRowKeys$$() {
    var $i$$149$$;
    this.$rowKeys$ = [];
    for ($i$$149$$ = 0;$i$$149$$ < this.data.length;$i$$149$$ += 1) {
      this.$rowKeys$[$i$$149$$] = $i$$149$$.toString();
    }
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$_getColumnsForScaffolding$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$_getColumnsForScaffolding$$($data$$72$$) {
    var $propertyName$$8$$, $columns$$;
    if ("number" !== typeof $data$$72$$.length || 0 === $data$$72$$.length) {
      return[];
    }
    $columns$$ = [];
    for ($propertyName$$8$$ in $data$$72$$[0]) {
      $data$$72$$[0].hasOwnProperty($propertyName$$8$$) && (void 0 != this.$rowHeaderKey$ && $propertyName$$8$$ == this.$rowHeaderKey$ || $columns$$.push($propertyName$$8$$));
    }
    return $columns$$;
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$getCount$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$getCount$$($axis$$2$$) {
    return "row" === $axis$$2$$ ? this.data.length : "column" === $axis$$2$$ ? this.columns.length : 0;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getCount", {$getCount$:$oj$$11$$.$ArrayDataGridDataSource$.prototype.$getCount$});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$getHeaderData$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$getHeaderData$$($axis$$3$$, $index$$135$$) {
    if ("row" === $axis$$3$$) {
      return void 0 != this.$rowHeaderKey$ ? this.data[$index$$135$$][this.$rowHeaderKey$] : 0 < this.data.length && this.data[0] instanceof Array ? void 0 === this.$rowKeys$[$index$$135$$] ? $index$$135$$.toString() : this.$rowKeys$[$index$$135$$] : null;
    }
    if ("column" === $axis$$3$$) {
      return this.columns[$index$$135$$];
    }
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$getHeaderMetadata$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$getHeaderMetadata$$($axis$$4$$, $index$$136$$) {
    return "row" === $axis$$4$$ && void 0 != this.$rowHeaderKey$ ? {key:$index$$136$$.toString()} : {key:this.$getHeaderData$($axis$$4$$, $index$$136$$)};
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$fetchHeaders$$($headerRange$$1$$, $callbacks$$22$$, $callbackObjects$$3$$) {
    var $axis$$5_headerSet$$, $start$$26$$, $count$$31_end$$7$$;
    $axis$$5_headerSet$$ = $headerRange$$1$$.axis;
    $start$$26$$ = $headerRange$$1$$.start;
    $count$$31_end$$7$$ = $headerRange$$1$$.count;
    $oj$$11$$.$Assert$.assert("row" === $axis$$5_headerSet$$ || "column" === $axis$$5_headerSet$$);
    $oj$$11$$.$Assert$.assert($start$$26$$ < this.$getCount$($axis$$5_headerSet$$));
    $oj$$11$$.$Assert$.assert(0 < $count$$31_end$$7$$);
    $start$$26$$ = Math.max(0, $start$$26$$);
    $count$$31_end$$7$$ = "column" === $axis$$5_headerSet$$ ? Math.min(this.columns.length, $start$$26$$ + $count$$31_end$$7$$) : void 0 !== this.$rowHeaderKey$ || 0 < this.data.length && this.data[0] instanceof Array ? Math.min(this.data.length, $start$$26$$ + $count$$31_end$$7$$) : $start$$26$$;
    $axis$$5_headerSet$$ = new $oj$$11$$.$ArrayHeaderSet$($start$$26$$, $count$$31_end$$7$$, $axis$$5_headerSet$$, this);
    null != $callbacks$$22$$ && null != $callbacks$$22$$.success && (null == $callbackObjects$$3$$ && ($callbackObjects$$3$$ = {}), $callbacks$$22$$.success.call($callbackObjects$$3$$.success, $axis$$5_headerSet$$, $headerRange$$1$$));
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$11$$.$ArrayDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$getCellData$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$getCellData$$($row$$16$$, $column$$4$$) {
    return this.data[$row$$16$$][this.columns[$column$$4$$]];
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$getCellMetadata$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$getCellMetadata$$($row$$17$$, $column$$5$$) {
    return{keys:{row:this.$rowKeys$[$row$$17$$], column:this.columns[$column$$5$$]}};
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$fetchCells$$($cellRanges$$, $callbacks$$23$$, $callbackObjects$$4$$) {
    var $cellSet_i$$150$$, $cellRange$$1$$, $rowStart$$1$$, $rowEnd$$, $colStart$$, $colEnd$$;
    for ($cellSet_i$$150$$ = 0;$cellSet_i$$150$$ < $cellRanges$$.length;$cellSet_i$$150$$ += 1) {
      $cellRange$$1$$ = $cellRanges$$[$cellSet_i$$150$$], $oj$$11$$.$Assert$.assert("row" === $cellRange$$1$$.axis || "column" === $cellRange$$1$$.axis), $oj$$11$$.$Assert$.assert($cellRange$$1$$.start < this.$getCount$($cellRange$$1$$.axis)), $oj$$11$$.$Assert$.assert(0 < $cellRange$$1$$.count), "row" === $cellRange$$1$$.axis ? ($rowStart$$1$$ = $cellRange$$1$$.start, $rowEnd$$ = Math.min(this.data.length, $rowStart$$1$$ + $cellRange$$1$$.count)) : "column" === $cellRange$$1$$.axis && ($colStart$$ = 
      $cellRange$$1$$.start, $colEnd$$ = Math.min(this.columns.length, $colStart$$ + $cellRange$$1$$.count));
    }
    void 0 === $rowEnd$$ || void 0 === $colEnd$$ ? null != $callbacks$$23$$ && null != $callbacks$$23$$.error && (null == $callbackObjects$$4$$ && ($callbackObjects$$4$$ = {}), $callbacks$$23$$.error.call($callbackObjects$$4$$.error)) : ($cellSet_i$$150$$ = new $oj$$11$$.$ArrayCellSet$($rowStart$$1$$, $rowEnd$$, $colStart$$, $colEnd$$, this), null != $callbacks$$23$$ && null != $callbacks$$23$$.success && (null == $callbackObjects$$4$$ && ($callbackObjects$$4$$ = {}), $callbacks$$23$$.success.call($callbackObjects$$4$$.success, 
    $cellSet_i$$150$$, $cellRanges$$)));
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$11$$.$ArrayDataGridDataSource$.prototype.$fetchCells$});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.keys = function $$oj$$11$$$$ArrayDataGridDataSource$$$keys$($indexes$$1$$) {
    return{row:this.$rowKeys$[$indexes$$1$$.row], column:this.columns[$indexes$$1$$.column]};
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.keys", {keys:$oj$$11$$.$ArrayDataGridDataSource$.prototype.keys});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$indexes$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$indexes$$($keys$$8$$) {
    var $columnKey$$ = $keys$$8$$.column;
    return{row:this.$rowKeys$.indexOf($keys$$8$$.row), column:this.columns.indexOf($columnKey$$)};
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.indexes", {$indexes$:$oj$$11$$.$ArrayDataGridDataSource$.prototype.$indexes$});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.sort = function $$oj$$11$$$$ArrayDataGridDataSource$$$sort$($criteria$$4_direction$$4$$, $callbacks$$24$$, $callbackObjects$$5$$) {
    var $sortArray$$ = [], $indices$$ = [], $newData$$2$$ = [], $newColumns$$ = [], $newRowKeys$$ = [], $axis$$6_i$$151$$, $headerIndex_headerKey$$;
    $axis$$6_i$$151$$ = $criteria$$4_direction$$4$$.axis;
    $headerIndex_headerKey$$ = $criteria$$4_direction$$4$$.key;
    $criteria$$4_direction$$4$$ = $criteria$$4_direction$$4$$.direction;
    null != $callbacks$$24$$ && null == $callbackObjects$$5$$ && ($callbackObjects$$5$$ = {});
    if ("column" === $axis$$6_i$$151$$) {
      $headerIndex_headerKey$$ = this.columns.indexOf($headerIndex_headerKey$$);
      for ($axis$$6_i$$151$$ = 0;$axis$$6_i$$151$$ < this.data.length;$axis$$6_i$$151$$ += 1) {
        $sortArray$$[$axis$$6_i$$151$$] = this.data[$axis$$6_i$$151$$][this.columns[$headerIndex_headerKey$$]], $indices$$[$axis$$6_i$$151$$] = $axis$$6_i$$151$$;
      }
      $indices$$.sort(this.$_naturalSort$($sortArray$$, $criteria$$4_direction$$4$$));
      for ($axis$$6_i$$151$$ = 0;$axis$$6_i$$151$$ < this.data.length;$axis$$6_i$$151$$ += 1) {
        $newData$$2$$[$axis$$6_i$$151$$] = this.data[$indices$$[$axis$$6_i$$151$$]], $newRowKeys$$[$axis$$6_i$$151$$] = this.$rowKeys$[$indices$$[$axis$$6_i$$151$$]];
      }
      this.data = $newData$$2$$;
      this.$rowKeys$ = $newRowKeys$$;
      null != $callbacks$$24$$ && null != $callbacks$$24$$.success && $callbacks$$24$$.success.call($callbackObjects$$5$$.success);
    } else {
      if ("row" === $axis$$6_i$$151$$) {
        $headerIndex_headerKey$$ = this.$rowKeys$.indexOf($headerIndex_headerKey$$);
        for ($axis$$6_i$$151$$ = 0;$axis$$6_i$$151$$ < this.columns.length;$axis$$6_i$$151$$ += 1) {
          $sortArray$$[$axis$$6_i$$151$$] = this.data[$headerIndex_headerKey$$][this.columns[$axis$$6_i$$151$$]], $indices$$[$axis$$6_i$$151$$] = $axis$$6_i$$151$$;
        }
        $indices$$.sort(this.$_naturalSort$($sortArray$$, $criteria$$4_direction$$4$$));
        for ($axis$$6_i$$151$$ = 0;$axis$$6_i$$151$$ < this.columns.length;$axis$$6_i$$151$$ += 1) {
          $newColumns$$[$axis$$6_i$$151$$] = this.columns[$indices$$[$axis$$6_i$$151$$]];
        }
        this.columns = $newColumns$$;
        null !== $callbacks$$24$$ && null != $callbacks$$24$$.success && $callbacks$$24$$.success.call($callbackObjects$$5$$.success);
      } else {
        null !== $callbacks$$24$$ && null != $callbacks$$24$$.error && $callbacks$$24$$.error.call($callbackObjects$$5$$.error, "Invalid axis value");
      }
    }
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.sort", {sort:$oj$$11$$.$ArrayDataGridDataSource$.prototype.sort});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.getCapability = function $$oj$$11$$$$ArrayDataGridDataSource$$$getCapability$($feature$$8$$) {
    return "sort" === $feature$$8$$ ? "column" : "move" === $feature$$8$$ ? "row" : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getCapability", {getCapability:$oj$$11$$.$ArrayDataGridDataSource$.prototype.getCapability});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$_naturalSort$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$_naturalSort$$($sortArray$$1$$, $direction$$5$$) {
    if ("ascending" === $direction$$5$$) {
      return function($a$$70$$, $b$$42$$) {
        var $as$$, $bs$$;
        $a$$70$$ = $sortArray$$1$$[$a$$70$$];
        $b$$42$$ = $sortArray$$1$$[$b$$42$$];
        $as$$ = isNaN($a$$70$$);
        $bs$$ = isNaN($b$$42$$);
        $a$$70$$ instanceof Date && ($a$$70$$ = $a$$70$$.toISOString(), $as$$ = !0);
        $b$$42$$ instanceof Date && ($b$$42$$ = $b$$42$$.toISOString(), $bs$$ = !0);
        return $as$$ && $bs$$ ? $a$$70$$ < $b$$42$$ ? -1 : $a$$70$$ === $b$$42$$ ? 0 : 1 : $as$$ ? 1 : $bs$$ ? -1 : $a$$70$$ - $b$$42$$;
      };
    }
    if ("descending" === $direction$$5$$) {
      return function($a$$71$$, $b$$43$$) {
        var $as$$1$$, $bs$$1$$;
        $a$$71$$ = $sortArray$$1$$[$a$$71$$];
        $b$$43$$ = $sortArray$$1$$[$b$$43$$];
        $as$$1$$ = isNaN($a$$71$$);
        $bs$$1$$ = isNaN($b$$43$$);
        $a$$71$$ instanceof Date && ($a$$71$$ = $a$$71$$.toISOString(), $as$$1$$ = !0);
        $b$$43$$ instanceof Date && ($b$$43$$ = $b$$43$$.toISOString(), $bs$$1$$ = !0);
        return $as$$1$$ && $bs$$1$$ ? $a$$71$$ > $b$$43$$ ? -1 : $a$$71$$ === $b$$43$$ ? 0 : 1 : $as$$1$$ ? -1 : $bs$$1$$ ? 1 : $b$$43$$ - $a$$71$$;
      };
    }
  };
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.move = function $$oj$$11$$$$ArrayDataGridDataSource$$$move$($moveKey$$, $atKey$$) {
    var $moveData_moveKeyIndex$$, $atKeyIndex_event$$66$$;
    $moveData_moveKeyIndex$$ = this.$rowKeys$.indexOf($moveKey$$);
    this.$rowKeys$.splice($moveData_moveKeyIndex$$, 1);
    $moveData_moveKeyIndex$$ = this.data.splice($moveData_moveKeyIndex$$, 1)[0];
    $atKeyIndex_event$$66$$ = {source:this, operation:"delete", keys:{row:$moveKey$$, column:null}};
    this.handleEvent("change", $atKeyIndex_event$$66$$);
    null === $atKey$$ ? (this.$rowKeys$.push($moveKey$$), this.data.push($moveData_moveKeyIndex$$)) : ($atKeyIndex_event$$66$$ = this.$rowKeys$.indexOf($atKey$$), this.$rowKeys$.splice($atKeyIndex_event$$66$$, 0, $moveKey$$), this.data.splice($atKeyIndex_event$$66$$, 0, $moveData_moveKeyIndex$$));
    $atKeyIndex_event$$66$$ = {source:this, operation:"insert", keys:{row:$moveKey$$, column:null}};
    this.handleEvent("change", $atKeyIndex_event$$66$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.move", {move:$oj$$11$$.$ArrayDataGridDataSource$.prototype.move});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$getRowHeaderKey$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$getRowHeaderKey$$() {
    return this.$rowHeaderKey$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getRowHeaderKey", {$getRowHeaderKey$:$oj$$11$$.$ArrayDataGridDataSource$.prototype.$getRowHeaderKey$});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$getColumns$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$getColumns$$() {
    return this.columns;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getColumns", {$getColumns$:$oj$$11$$.$ArrayDataGridDataSource$.prototype.$getColumns$});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.$getRowKeys$ = function $$oj$$11$$$$ArrayDataGridDataSource$$$$getRowKeys$$() {
    return this.$rowKeys$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getRowKeys", {$getRowKeys$:$oj$$11$$.$ArrayDataGridDataSource$.prototype.$getRowKeys$});
  $oj$$11$$.$ArrayDataGridDataSource$.prototype.getData = function $$oj$$11$$$$ArrayDataGridDataSource$$$getData$() {
    return this.data;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayDataGridDataSource.prototype.getData", {getData:$oj$$11$$.$ArrayDataGridDataSource$.prototype.getData});
  $oj$$11$$.$DataGridResources$ = function $$oj$$11$$$$DataGridResources$$($rtlMode$$, $translationFunction$$) {
    this.$rtlMode$ = $rtlMode$$;
    this.$translationFunction$ = $translationFunction$$;
    this.$styles$ = {};
    this.$styles$.datagrid = "oj-datagrid";
    this.$styles$.cell = "oj-datagrid-cell";
    this.$styles$.banded = "oj-datagrid-banded";
    this.$styles$.row = "oj-datagrid-row";
    this.$styles$.databody = "oj-datagrid-databody";
    this.$styles$.topcorner = "oj-datagrid-top-corner";
    this.$styles$.bottomcorner = "oj-datagrid-bottom-corner";
    this.$styles$.rowheaderspacer = "oj-datagrid-row-header-spacer";
    this.$styles$.colheaderspacer = "oj-datagrid-column-header-spacer";
    this.$styles$.status = "oj-datagrid-status";
    this.$styles$.emptytext = "oj-datagrid-empty-text";
    this.$styles$.header = "oj-datagrid-header";
    this.$styles$.headercell = "oj-datagrid-header-cell";
    this.$styles$.headercellcontent = "oj-datagrid-header-cell-content";
    this.$styles$.rowheader = "oj-datagrid-row-header";
    this.$styles$.colheader = "oj-datagrid-column-header";
    this.$styles$.colheadercell = "oj-datagrid-column-header-cell";
    this.$styles$.rowheadercell = "oj-datagrid-row-header-cell";
    this.$styles$["scroller-mobile"] = "oj-datagrid-scroller-touch";
    this.$styles$.scroller = "oj-datagrid-scroller";
    this.$styles$.scrollers = "oj-datagrid-scrollers";
    this.$styles$.focus = "oj-focus";
    this.$styles$.hover = "oj-hover";
    this.$styles$.active = "oj-active";
    this.$styles$.selected = "oj-selected";
    this.$styles$.disabled = "oj-disabled";
    this.$styles$.enabled = "oj-enabled";
    this.$styles$["default"] = "oj-default";
    this.$styles$.sortcontainer = "oj-datagrid-sort-icon-container";
    this.$styles$.sortascending = "oj-datagrid-sort-ascending-icon";
    this.$styles$.sortdescending = "oj-datagrid-sort-descending-icon";
    this.$styles$.icon = "oj-component-icon";
    this.$styles$.clickableicon = "oj-clickable-icon-nocontext";
    this.$styles$.info = "oj-helper-hidden-accessible";
    this.$styles$.rowexpander = "oj-rowexpander";
    this.$styles$.cut = "oj-datagrid-cut";
    this.$styles$.move = "oj-datagrid-move";
    this.$styles$.droptarget = "oj-datagrid-drop-target";
    this.$styles$.selectaffordancetop = "oj-datagrid-touch-selection-affordance-top";
    this.$styles$.selectaffordancebottom = "oj-datagrid-touch-selection-affordance-bottom";
    this.$styles$.toucharea = "oj-datagrid-touch-area";
    this.$commands$ = {};
    this.$commands$.sortCol = "oj-datagrid-sortCol";
    this.$commands$.sortColAsc = "oj-datagrid-sortColAsc";
    this.$commands$.sortColDsc = "oj-datagrid-sortColDsc";
    this.$commands$.sortRow = "oj-datagrid-sortRow";
    this.$commands$.sortRowAsc = "oj-datagrid-sortRowAsc";
    this.$commands$.sortRowDsc = "oj-datagrid-sortRowDsc";
    this.$commands$.resize = "oj-datagrid-resize";
    this.$commands$.resizeWidth = "oj-datagrid-resizeWidth";
    this.$commands$.resizeHeight = "oj-datagrid-resizeHeight";
    this.$commands$.cut = "oj-datagrid-cut";
    this.$commands$.paste = "oj-datagrid-paste";
    this.attributes = {};
    this.attributes.key = "data-oj-key";
    this.attributes.resizable = "data-oj-resizable";
    this.attributes.sortable = "data-oj-sortable";
    this.attributes.sortDir = "data-oj-sortdir";
    this.attributes.expander = "data-oj-expander";
    this.attributes.expanderIndex = "data-oj-expander-index";
    this.attributes.container = $oj$$11$$.Components.$_OJ_CONTAINER_ATTR$;
  };
  $goog$exportPath_$$("DataGridResources", $oj$$11$$.$DataGridResources$, $oj$$11$$);
  $oj$$11$$.$DataGridResources$.prototype.$isRTLMode$ = function $$oj$$11$$$$DataGridResources$$$$isRTLMode$$() {
    return "rtl" === this.$rtlMode$ ? !0 : !1;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.isRTLMode", {$isRTLMode$:$oj$$11$$.$DataGridResources$.prototype.$isRTLMode$});
  $oj$$11$$.$DataGridResources$.prototype.$getTranslatedText$ = function $$oj$$11$$$$DataGridResources$$$$getTranslatedText$$($key$$54$$, $args$$12$$) {
    return this.$translationFunction$($key$$54$$, $args$$12$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getTranslatedText", {$getTranslatedText$:$oj$$11$$.$DataGridResources$.prototype.$getTranslatedText$});
  $oj$$11$$.$DataGridResources$.prototype.$getMappedStyle$ = function $$oj$$11$$$$DataGridResources$$$$getMappedStyle$$($key$$55$$) {
    return null != $key$$55$$ ? this.$styles$[$key$$55$$] : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedStyle", {$getMappedStyle$:$oj$$11$$.$DataGridResources$.prototype.$getMappedStyle$});
  $oj$$11$$.$DataGridResources$.prototype.$getMappedCommand$ = function $$oj$$11$$$$DataGridResources$$$$getMappedCommand$$($key$$56$$) {
    return null != $key$$56$$ ? this.$commands$[$key$$56$$] : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedCommand", {$getMappedCommand$:$oj$$11$$.$DataGridResources$.prototype.$getMappedCommand$});
  $oj$$11$$.$DataGridResources$.prototype.$getMappedAttribute$ = function $$oj$$11$$$$DataGridResources$$$$getMappedAttribute$$($key$$57$$) {
    return null != $key$$57$$ ? this.attributes[$key$$57$$] : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedAttribute", {$getMappedAttribute$:$oj$$11$$.$DataGridResources$.prototype.$getMappedAttribute$});
  $oj$$11$$.$__registerWidget$("oj.ojDataGrid", $$$$11$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{bandingInterval:{row:0, column:0}, data:null, emptyText:null, gridlines:{horizontal:"visible", vertical:"visible"}, scrollPosition:null, selectionMode:null, dnd:{$reorder$:{row:"disable"}}, header:{row:{className:null, renderer:null, resizable:{width:"disable", height:"disable"}, sortable:"auto", style:null}, column:{className:null, renderer:null, resizable:{width:"disable", height:"disable"}, 
  sortable:"auto", style:null}}, cell:{className:null, renderer:null, style:null}, select:null, resize:null, sort:null}, _create:function() {
    $$$$11$$(this.root).addClass("oj-component");
    this._super();
    this.root = this.element[0];
    this.$rootId$ = this.root.getAttribute("id");
    this.grid = new $DvtDataGrid$$1$$;
    this.$redrawSet$ = {data:"all", header:["className", "renderer", "style", "template"]};
  }, _init:function() {
    var $self$$44$$ = this;
    $$$$11$$(this.root).empty();
    this._super();
    this.$resources$ = new $oj$$11$$.$DataGridResources$(this.$_GetReadingDirection$(), this.$_getTranslation$.bind($self$$44$$));
    this.$_setDataSource$();
    this.$_addContextMenu$();
    null != this.$datasource$ && this.grid.SetDataSource(this.$datasource$);
    this.grid.SetOptions(this.options);
    this.grid.SetResources(this.$resources$);
    this.grid.SetCreateContextCallback(this.$_modifyContext$.bind($self$$44$$));
    this.grid.addListener("resize", function($details$$) {
      $self$$44$$._trigger("resize", $details$$.event, $details$$.ui);
    });
    this.grid.addListener("select", function($details$$1$$) {
      $self$$44$$._trigger("select", $details$$1$$.event, $details$$1$$.ui);
    });
    this.grid.addListener("sort", function($details$$2$$) {
      $self$$44$$._trigger("sort", $details$$2$$.event, $details$$2$$.ui);
    });
    this.grid.addListener("keydown", function($details$$3$$) {
      $self$$44$$._trigger("keydown", $details$$3$$.event, $details$$3$$.ui);
    });
    this.grid.addListener("active", function($details$$4$$) {
      $self$$44$$._trigger("active", $details$$4$$.event, $details$$4$$.ui);
    });
    this.grid.render(this.root);
    this.$_registerResizeListener$(this.root);
  }, refresh:function() {
    this._super();
    $$$$11$$(this.root).empty();
    this.$_setDataSource$();
    null != this.$datasource$ && this.grid.SetDataSource(this.$datasource$);
    this.grid.SetOptions(this.options);
    this.grid.SetResources(this.$resources$);
    this.grid.refresh(this.root);
  }, _destroy:function() {
    this.grid.destroy();
    $$$$11$$(this.root).empty();
  }, _setOptions:function($options$$230$$, $flags$$19$$) {
    var $key$$58$$;
    if (this.$datasource$) {
      this.$_setUpdatedOptions$($options$$230$$, $flags$$19$$);
    } else {
      for ($key$$58$$ in $options$$230$$) {
        this._setOption($key$$58$$, $options$$230$$[$key$$58$$], $flags$$19$$);
      }
    }
  }, $_setUpdatedOptions$:function($options$$231$$, $flags$$20$$) {
    var $i$$152$$, $key$$59$$, $isRefresh$$, $elm$$, $itm$$, $opt$$19$$;
    $isRefresh$$ = !1;
    for ($key$$59$$ in $options$$231$$) {
      if ($key$$59$$ in this.$redrawSet$) {
        if ("header" == $key$$59$$) {
          for ($elm$$ in $options$$231$$.header) {
            if ("column" == $elm$$ || "row" == $elm$$ || "cell" == $elm$$) {
              for ($itm$$ in $options$$231$$.header[$elm$$]) {
                for ($i$$152$$ = 0;$i$$152$$ < this.$redrawSet$.header.length;$i$$152$$++) {
                  if ($itm$$ == this.$redrawSet$.header[$i$$152$$]) {
                    for ($opt$$19$$ in this.options.header[$elm$$]) {
                      if ($opt$$19$$ == $itm$$ && $options$$231$$.header[$elm$$][$itm$$] != this.options.header[$elm$$][$itm$$]) {
                        $isRefresh$$ = !0;
                        break;
                      }
                    }
                  }
                }
                if ($isRefresh$$) {
                  break;
                }
              }
            }
            if ($isRefresh$$) {
              break;
            }
          }
        } else {
          if ("data" != $key$$59$$) {
            for ($opt$$19$$ in this.options) {
              if ($opt$$19$$ == $key$$59$$ && !$oj$$11$$.$Object$.$compareValues$($options$$231$$[$key$$59$$], this.options[$opt$$19$$])) {
                $isRefresh$$ = !0;
                break;
              }
            }
          }
        }
      }
    }
    for ($key$$59$$ in $options$$231$$) {
      this._setOption($key$$59$$, $options$$231$$[$key$$59$$], $flags$$20$$);
    }
    $isRefresh$$ ? this.refresh() : this.grid.UpdateOptions($options$$231$$);
  }, _setOption:function($key$$60$$, $value$$157$$, $flags$$21$$) {
    this._super($key$$60$$, $value$$157$$, $flags$$21$$);
  }, $_isResizeEnabled$:function($axis$$7$$, $direction$$6$$) {
    return "disable" !== this.options.header[$axis$$7$$].resizable[$direction$$6$$];
  }, $_isSortEnabled$:function($axis$$8$$) {
    return "disable" !== this.options.header[$axis$$8$$].sortable;
  }, $_addContextMenu$:function() {
    var $self$$45$$, $menuContainer$$, $listItems_resizeMenu$$ = null, $sortMenu$$ = null, $moveMenu$$ = null, $sortCapability$$;
    $self$$45$$ = this;
    if (null == this.options.contextMenu) {
      if (null != this.$datasource$) {
        $menuContainer$$ = $$$$11$$("\x3cul\x3e");
        $menuContainer$$.css("display", "none").attr("id", this.$rootId$ + "contextmenu");
        $$$$11$$(this.root).append($menuContainer$$);
        if (this.$_isResizeEnabled$("column", "width") || this.$_isResizeEnabled$("column", "height") || this.$_isResizeEnabled$("row", "width") || this.$_isResizeEnabled$("row", "height")) {
          $listItems_resizeMenu$$ = this.$_buildContextMenuItem$("resize");
        }
        $sortCapability$$ = this.$datasource$.getCapability("sort");
        !this.$_isSortEnabled$("column") || "column" !== $sortCapability$$ && "full" !== $sortCapability$$ || ($sortMenu$$ = this.$_buildContextMenuItem$("sortCol"));
        !this.$_isSortEnabled$("row") || "row" !== $sortCapability$$ && "full" !== $sortCapability$$ || ($sortMenu$$ = null != $sortMenu$$ ? $sortMenu$$.add(this.$_buildContextMenuItem$("sortRow")) : this.$_buildContextMenuItem$("sortRow"));
        if ("enable" === this.options.dnd.reorder) {
          switch(this.$datasource$.getCapability("move")) {
            case "none":
              break;
            default:
              $moveMenu$$ = $$$$11$$(this.$_buildContextMenuListItem$("cut")).add($$$$11$$(this.$_buildContextMenuListItem$("paste")));
          }
        }
        $menuContainer$$.append($listItems_resizeMenu$$).append($sortMenu$$).append($moveMenu$$);
        $menuContainer$$.ojMenu();
        this._setOption("contextMenu", "#" + $menuContainer$$.attr("id"));
        $menuContainer$$.on("ojbeforeshow", this.$_handleContextMenuBeforeShow$.bind(this));
        $menuContainer$$.on("ojselect", this.$_handleContextMenuSelect$.bind(this));
      }
    } else {
      $menuContainer$$ = $$$$11$$(this.options.contextMenu), $listItems_resizeMenu$$ = $menuContainer$$.find("[data-oj-command]"), $listItems_resizeMenu$$.each(function() {
        var $command$$;
        0 === $$$$11$$(this).children("a").length && ($command$$ = $$$$11$$(this).attr("data-oj-command").split("-"), $$$$11$$(this).replaceWith($self$$45$$.$_buildContextMenuItem$($command$$[$command$$.length - 1])));
      }), $menuContainer$$.ojMenu("refresh"), $menuContainer$$.on("ojbeforeshow", this.$_handleContextMenuBeforeShow$.bind(this)), $menuContainer$$.on("ojselect", this.$_handleContextMenuSelect$.bind(this));
    }
  }, $_buildContextMenuItem$:function($command$$1$$) {
    if ("resize" === $command$$1$$) {
      return $$$$11$$(this.$_buildContextMenuListItem$("resize")).append($$$$11$$("\x3cul\x3e\x3c/ul\x3e").append($$$$11$$(this.$_buildContextMenuListItem$("resizeWidth"))).append($$$$11$$(this.$_buildContextMenuListItem$("resizeHeight"))));
    }
    if ("sortCol" === $command$$1$$) {
      return $$$$11$$(this.$_buildContextMenuListItem$("sortCol")).append($$$$11$$("\x3cul\x3e\x3c/ul\x3e").append($$$$11$$(this.$_buildContextMenuListItem$("sortColAsc"))).append($$$$11$$(this.$_buildContextMenuListItem$("sortColDsc"))));
    }
    if ("sortRow" === $command$$1$$) {
      return $$$$11$$(this.$_buildContextMenuListItem$("sortRow")).append($$$$11$$("\x3cul\x3e\x3c/ul\x3e").append($$$$11$$(this.$_buildContextMenuListItem$("sortRowAsc"))).append($$$$11$$(this.$_buildContextMenuListItem$("sortRowDsc"))));
    }
    if (-1 != Object.keys(this.$resources$.$commands$).indexOf($command$$1$$)) {
      return $$$$11$$(this.$_buildContextMenuListItem$($command$$1$$));
    }
  }, $_buildContextMenuListItem$:function($command$$2$$) {
    return "\x3cli data-oj-command\x3d" + this.$_getMappedCommand$($command$$2$$) + "\x3e" + this.$_buildContextMenuLabel$($command$$2$$) + "\x3c/li\x3e";
  }, $_buildContextMenuLabel$:function($command$$3_key$$61$$) {
    $command$$3_key$$61$$ = "label" + $command$$3_key$$61$$.charAt(0).toUpperCase() + $command$$3_key$$61$$.slice(1);
    return'\x3ca href\x3d"#"\x3e' + this.$_getTranslation$($command$$3_key$$61$$) + "\x3c/a\x3e";
  }, $_getContextMenu$:function() {
    return $$$$11$$(this.options.contextMenu).get(0);
  }, $_getTranslation$:function($key$$62$$, $args$$13$$) {
    return this.$getTranslatedString$($key$$62$$, $args$$13$$);
  }, $_handleResizeDialog$:function() {
    var $value$$158$$ = $$$$11$$("#" + this.$rootId$ + "spinner").ojInputNumber("option", "value");
    $$$$11$$("#" + this.$rootId$ + "dialog").ojDialog("destroy");
    $$$$11$$("#" + this.$rootId$ + "spinner").ojInputNumber("destroy");
    this.grid.handleContextMenuReturn(this.$contextMenuEvent$, this.$menuItemFunction$, $value$$158$$);
    this.$contextMenuEvent$.target.focus();
  }, $_buildResizeDialog$:function($title$$8$$, $initialSize$$) {
    var $dialog$$, $dialogBody$$, $spinner$$, $dialogFooter$$, $dialogOKButton$$;
    $dialog$$ = $$$$11$$("#" + this.$rootId$ + "dialog");
    $spinner$$ = $$$$11$$("#" + this.$rootId$ + "spinner");
    if (0 === $dialog$$.length || 0 === $spinner$$.length) {
      $dialog$$ = $$$$11$$("\x3cdiv\x3e"), $dialog$$.attr("id", this.$rootId$ + "dialog"), $dialog$$.attr("title", $title$$8$$), $dialogBody$$ = $$$$11$$('\x3cdiv class\x3d"oj-dialog-body"\x3e\x3c/div\x3e'), $dialogFooter$$ = $$$$11$$('\x3cdiv class\x3d"oj-dialog-footer"\x3e\x3c/div\x3e'), $dialog$$.append($dialogBody$$).append($dialogFooter$$), $spinner$$ = $$$$11$$('\x3cinput id\x3d"' + this.$rootId$ + 'spinner"/\x3e'), $dialogOKButton$$ = $$$$11$$("\x3cbutton\x3e"), $dialogBody$$.append($spinner$$), 
      $dialogFooter$$.append($dialogOKButton$$), $$$$11$$(this.root).append($dialog$$), $dialogOKButton$$.ojButton({$component$:"ojButton", label:"OK"}), $dialogOKButton$$.on("click", this.$_handleResizeDialog$.bind(this));
    }
    $spinner$$.ojInputNumber({$component$:"ojInputNumber", max:1E3, min:20, step:1, value:$initialSize$$});
    $dialog$$.ojDialog({initialVisibility:"show", position:{my:"center center", at:"center center", collision:"none", of:$$$$11$$(this.root)}});
  }, $_handleContextMenuSelect$:function($event$$68$$, $ui$$) {
    var $initialSize$$1_parent$$25$$;
    this.$menuItemFunction$ = $ui$$.item.attr("data-oj-command");
    if (this.$menuItemFunction$ === this.$_getMappedCommand$("sortColAsc") || this.$menuItemFunction$ === this.$_getMappedCommand$("sortColDsc") || this.$menuItemFunction$ === this.$_getMappedCommand$("cut") || this.$menuItemFunction$ === this.$_getMappedCommand$("paste")) {
      this.grid.handleContextMenuReturn(this.$contextMenuEvent$, this.$menuItemFunction$, null);
    } else {
      if (this.$menuItemFunction$ === this.$_getMappedCommand$("resizeWidth") || this.$menuItemFunction$ === this.$_getMappedCommand$("resizeHeight")) {
        $initialSize$$1_parent$$25$$ = this.$_findFirstAncestor$($$$$11$$(this.$contextMenuEvent$.target), "oj-datagrid-headercell"), $initialSize$$1_parent$$25$$ = null != $initialSize$$1_parent$$25$$ ? this.$menuItemFunction$ === this.$_getMappedCommand$("resizeWidth") ? $initialSize$$1_parent$$25$$.outerWidth() : $initialSize$$1_parent$$25$$.outerHeight() : this.$menuItemFunction$ === this.$_getMappedCommand$("resizeWidth") ? $$$$11$$(this.$contextMenuEvent$.target).outerWidth() : $$$$11$$(this.$contextMenuEvent$.target).outerHeight(), 
        this.$_buildResizeDialog$($ui$$.item.text(), $initialSize$$1_parent$$25$$);
      }
    }
  }, $_handleContextMenuBeforeShow$:function($capabilities_cell_event$$69_header$$4$$) {
    var $contextMenu$$;
    $contextMenu$$ = $$$$11$$(this.$_getContextMenu$());
    this.$contextMenuEvent$ = $capabilities_cell_event$$69_header$$4$$.originalEvent.originalEvent;
    "keydown" === this.$contextMenuEvent$.type ? $contextMenu$$.ojMenu("option", "menuPosition", {my:"left top", at:"left bottom", of:this.$contextMenuEvent$.target}) : $contextMenu$$.ojMenu("option", "menuPosition", {my:"left top", at:"left bottom"});
    $capabilities_cell_event$$69_header$$4$$ = this.$_findFirstAncestor$($$$$11$$(this.$contextMenuEvent$.target).eq(0), this.$_getMappedStyle$("cell"));
    null != $capabilities_cell_event$$69_header$$4$$ ? $capabilities_cell_event$$69_header$$4$$ = this.$_getCellCapability$($capabilities_cell_event$$69_header$$4$$) : ($capabilities_cell_event$$69_header$$4$$ = this.$_findFirstAncestor$($$$$11$$(this.$contextMenuEvent$.target).eq(0), this.$_getMappedStyle$("headercell")), $capabilities_cell_event$$69_header$$4$$ = this.$_getHeaderCapability$($capabilities_cell_event$$69_header$$4$$));
    this.$_manageContextMenu$($capabilities_cell_event$$69_header$$4$$);
  }, $_addContextMenuCapability$:function($command$$4$$) {
    var $contextMenu$$1$$;
    $contextMenu$$1$$ = $$$$11$$(this.$_getContextMenu$());
    $contextMenu$$1$$.find("[data-oj-command\x3d" + $command$$4$$ + "]").hasClass("oj-disabled") || $contextMenu$$1$$.find("[data-oj-command\x3d" + $command$$4$$ + "]").addClass("oj-disabled");
  }, $_removeContextMenuCapability$:function($command$$5$$) {
    $$$$11$$(this.$_getContextMenu$()).find("[data-oj-command\x3d" + $command$$5$$ + "]").removeClass("oj-disabled");
  }, $_manageContextMenu$:function($capabilities$$1$$) {
    var $property$$23$$, $command$$6$$;
    for ($property$$23$$ in $capabilities$$1$$) {
      $capabilities$$1$$.hasOwnProperty($property$$23$$) && ($command$$6$$ = this.$resources$.$getMappedCommand$($property$$23$$), "disable" === $capabilities$$1$$[$property$$23$$] ? this.$_addContextMenuCapability$($command$$6$$) : this.$_removeContextMenuCapability$($command$$6$$));
    }
  }, $_findFirstAncestor$:function($element$$36$$, $className$$8$$) {
    var $parents$$1$$;
    if ($element$$36$$.hasClass($className$$8$$)) {
      return $element$$36$$;
    }
    $parents$$1$$ = $element$$36$$.parents("." + $className$$8$$);
    return 0 != $parents$$1$$.length ? $parents$$1$$.eq(0) : null;
  }, $_findCellIndex$:function($columnIndex$$1_element$$37$$) {
    var $row$$18$$;
    $row$$18$$ = $columnIndex$$1_element$$37$$.parent();
    $columnIndex$$1_element$$37$$ = $row$$18$$.children().index($columnIndex$$1_element$$37$$);
    return{rowIndex:$row$$18$$.parent().children().index($row$$18$$) - 1, columnIndex:$columnIndex$$1_element$$37$$};
  }, $_findHeadersByCellIndex$:function($columnHeader_index$$137$$) {
    var $rowHeader$$;
    $rowHeader$$ = this.$_getRowHeader$().children().eq(0).children().eq($columnHeader_index$$137$$.rowIndex + 1);
    $columnHeader_index$$137$$ = this.$_getColumnHeader$().children().eq(0).children().eq($columnHeader_index$$137$$.columnIndex);
    return{rowHeader:$rowHeader$$, columnHeader:$columnHeader_index$$137$$};
  }, $_getGrid$:function() {
    return $$$$11$$(this.root);
  }, $_getColumnHeader$:function() {
    return $$$$11$$("#" + this.$rootId$ + "\\:columnHeader");
  }, $_getRowHeader$:function() {
    return $$$$11$$("#" + this.$rootId$ + "\\:rowHeader");
  }, $_getDatabody$:function() {
    return $$$$11$$("#" + this.$rootId$ + "\\:databody");
  }, $_getDatabodyRows$:function() {
    return $$$$11$$("#" + this.$rootId$ + "\\:databody ." + this.$_getMappedStyle$("row"));
  }, $_getCellCapability$:function($capabilities$$2_cell$$1_index$$138$$) {
    var $columnHeader$$1_headers$$2$$, $rowHeader$$1$$;
    $capabilities$$2_cell$$1_index$$138$$ = this.$_findCellIndex$($capabilities$$2_cell$$1_index$$138$$);
    $columnHeader$$1_headers$$2$$ = this.$_findHeadersByCellIndex$($capabilities$$2_cell$$1_index$$138$$);
    $capabilities$$2_cell$$1_index$$138$$ = {$resizeWidth$:"disable", $resizeHeight$:"disable", $sortRow$:"disable", $sortCol$:"disable"};
    $rowHeader$$1$$ = $columnHeader$$1_headers$$2$$.rowHeader;
    $columnHeader$$1_headers$$2$$ = $columnHeader$$1_headers$$2$$.columnHeader;
    0 !== $columnHeader$$1_headers$$2$$.length && ("true" === $columnHeader$$1_headers$$2$$.attr(this.$_getMappedAttribute$("resizable")) && ($capabilities$$2_cell$$1_index$$138$$.resizeWidth = "enable"), "true" === $columnHeader$$1_headers$$2$$.attr(this.$_getMappedAttribute$("sortable")) && ($capabilities$$2_cell$$1_index$$138$$.sortCol = "enable"));
    0 !== $rowHeader$$1$$.length && ("true" === $rowHeader$$1$$.attr(this.$_getMappedAttribute$("resizable")) && ($capabilities$$2_cell$$1_index$$138$$.resizeHeight = "enable"), "true" === $rowHeader$$1$$.attr(this.$_getMappedAttribute$("sortable")) && ($capabilities$$2_cell$$1_index$$138$$.sortRow = "enable"));
    return $capabilities$$2_cell$$1_index$$138$$;
  }, $_getHeaderCapability$:function($header$$5$$) {
    var $capabilities$$3$$;
    $capabilities$$3$$ = {$resizeWidth$:"disable", $resizeHeight$:"disable", $sortRow$:"disable", $sortCol$:"disable"};
    null !== $header$$5$$ && ($header$$5$$.hasClass(this.$_getMappedStyle$("colheadercell")) ? ("true" === $header$$5$$.attr(this.$_getMappedAttribute$("resizable")) && ($capabilities$$3$$.resizeWidth = "enable"), $capabilities$$3$$.resizeHeight = this.$_isResizeEnabled$("column", "height") ? "enable" : "disable", "true" === $header$$5$$.attr(this.$_getMappedAttribute$("sortable")) && ($capabilities$$3$$.sortCol = "enable")) : ("true" === $header$$5$$.attr(this.$_getMappedAttribute$("resizable")) && 
    ($capabilities$$3$$.resizeHeight = "enable"), $capabilities$$3$$.resizeWidth = this.$_isResizeEnabled$("row", "width") ? "enable" : "disable", "true" === $header$$5$$.attr(this.$_getMappedAttribute$("sortable")) && ($capabilities$$3$$.sortRow = "enable")));
    return $capabilities$$3$$;
  }, $_setDataSource$:function() {
    this.$datasource$ = null != this.options.data ? this.options.data : null;
  }, $_modifyContext$:function($context$$38$$) {
    $context$$38$$.component = this;
  }, $_setAccessibleContext$:function($context$$39$$) {
    this.grid.SetAccessibleContext($context$$39$$);
  }, $_registerResizeListener$:function($element$$38$$) {
    if ($element$$38$$ && !this.$_isResizeListenerAdded$) {
      var $self$$46$$ = this;
      $oj$$11$$.$DomUtils$.$addResizeListener$($element$$38$$, function($width$$14$$, $height$$13$$) {
        0 < $width$$14$$ && 0 < $height$$13$$ && $self$$46$$.grid.HandleResize($width$$14$$, $height$$13$$);
      });
      this.$_isResizeListenerAdded$ = !0;
    }
  }, selection:function($ranges$$) {
    if (void 0 === $ranges$$) {
      return this.grid.GetSelection();
    }
    this.grid.SetSelection($ranges$$);
  }, getNodeBySubId:function($columnIndex$$2_index$$139_locator$$6$$) {
    var $axis$$9_subId$$6$$, $className$$9_rowIndex$$3$$;
    if (null == $columnIndex$$2_index$$139_locator$$6$$) {
      return this.element ? this.element[0] : null;
    }
    $axis$$9_subId$$6$$ = $columnIndex$$2_index$$139_locator$$6$$.subId;
    switch($axis$$9_subId$$6$$) {
      case "oj-datagrid-cell":
        $className$$9_rowIndex$$3$$ = this.$_getMappedStyle$("cell");
        break;
      case "oj-datagrid-header":
        $className$$9_rowIndex$$3$$ = this.$_getMappedStyle$("headercell");
        break;
      case "oj-datagrid-sort-ascending":
        $className$$9_rowIndex$$3$$ = "oj-datagrid-sort-ascending-icon";
        break;
      case "oj-datagrid-sort-descending":
        $className$$9_rowIndex$$3$$ = "oj-datagrid-sort-descending-icon";
        break;
      default:
        return null;
    }
    if ("oj-datagrid-cell" === $axis$$9_subId$$6$$) {
      return $className$$9_rowIndex$$3$$ = $columnIndex$$2_index$$139_locator$$6$$.rowIndex, $columnIndex$$2_index$$139_locator$$6$$ = $columnIndex$$2_index$$139_locator$$6$$.columnIndex, this.$_getDatabodyRows$().eq($className$$9_rowIndex$$3$$).children().eq($columnIndex$$2_index$$139_locator$$6$$);
    }
    $axis$$9_subId$$6$$ = $columnIndex$$2_index$$139_locator$$6$$.axis;
    $columnIndex$$2_index$$139_locator$$6$$ = $columnIndex$$2_index$$139_locator$$6$$.index;
    return "column" === $axis$$9_subId$$6$$ ? $$$$11$$("#" + this.$rootId$ + "\\:columnHeader ." + $className$$9_rowIndex$$3$$).eq($columnIndex$$2_index$$139_locator$$6$$) : "row" === $axis$$9_subId$$6$$ ? $$$$11$$("#" + this.$rootId$ + "\\:rowHeader ." + $className$$9_rowIndex$$3$$).eq($columnIndex$$2_index$$139_locator$$6$$) : null;
  }, $_getMappedStyle$:function($key$$63$$) {
    return this.$resources$.$getMappedStyle$($key$$63$$);
  }, $_getMappedAttribute$:function($key$$64$$) {
    return this.$resources$.$getMappedAttribute$($key$$64$$);
  }, $_getMappedCommand$:function($key$$65$$) {
    return this.$resources$.$getMappedCommand$($key$$65$$);
  }});
  $oj$$11$$.$FlattenedTreeCellSet$ = function $$oj$$11$$$$FlattenedTreeCellSet$$($startRow$$, $endRow$$, $startColumn$$, $endColumn$$, $nodeSet$$22$$, $columns$$1$$) {
    $oj$$11$$.$Assert$.$assertNumber$($startRow$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($endRow$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($startColumn$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($endColumn$$, null);
    $oj$$11$$.$Assert$.$assertArrayOrNull$($columns$$1$$);
    this.$m_startRow$ = $startRow$$;
    this.$m_endRow$ = $endRow$$;
    this.$m_startColumn$ = $startColumn$$;
    this.$m_endColumn$ = $endColumn$$;
    this.$m_nodeSet$ = $nodeSet$$22$$;
    this.$m_columns$ = $columns$$1$$;
  };
  $goog$exportPath_$$("FlattenedTreeCellSet", $oj$$11$$.$FlattenedTreeCellSet$, $oj$$11$$);
  $oj$$11$$.$FlattenedTreeCellSet$.prototype.getData = function $$oj$$11$$$$FlattenedTreeCellSet$$$getData$($indexes$$2_row$$19_rowData$$4$$) {
    var $column$$6_columnKey$$1_relIndex$$2$$;
    $column$$6_columnKey$$1_relIndex$$2$$ = this.$_getRelIndexes$($indexes$$2_row$$19_rowData$$4$$);
    if (null == $column$$6_columnKey$$1_relIndex$$2$$) {
      return null;
    }
    $indexes$$2_row$$19_rowData$$4$$ = $column$$6_columnKey$$1_relIndex$$2$$[0];
    $column$$6_columnKey$$1_relIndex$$2$$ = $column$$6_columnKey$$1_relIndex$$2$$[1];
    $oj$$11$$.$Assert$.assert($indexes$$2_row$$19_rowData$$4$$ < this.$m_nodeSet$.$getStart$() + this.$m_nodeSet$.$getCount$() && $column$$6_columnKey$$1_relIndex$$2$$ < this.$m_columns$.length);
    $column$$6_columnKey$$1_relIndex$$2$$ = this.$m_columns$[$column$$6_columnKey$$1_relIndex$$2$$];
    $indexes$$2_row$$19_rowData$$4$$ = this.$m_nodeSet$.getData($indexes$$2_row$$19_rowData$$4$$);
    return null != $indexes$$2_row$$19_rowData$$4$$ ? $indexes$$2_row$$19_rowData$$4$$.get ? $indexes$$2_row$$19_rowData$$4$$.get($column$$6_columnKey$$1_relIndex$$2$$) : $indexes$$2_row$$19_rowData$$4$$[$column$$6_columnKey$$1_relIndex$$2$$] : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getData", {getData:$oj$$11$$.$FlattenedTreeCellSet$.prototype.getData});
  $oj$$11$$.$FlattenedTreeCellSet$.prototype.getMetadata = function $$oj$$11$$$$FlattenedTreeCellSet$$$getMetadata$($indexes$$3_metadata$$9_row$$20$$) {
    var $column$$7_columnKey$$2_relIndex$$3$$;
    $column$$7_columnKey$$2_relIndex$$3$$ = this.$_getRelIndexes$($indexes$$3_metadata$$9_row$$20$$);
    if (null == $column$$7_columnKey$$2_relIndex$$3$$) {
      return null;
    }
    $indexes$$3_metadata$$9_row$$20$$ = $column$$7_columnKey$$2_relIndex$$3$$[0];
    $column$$7_columnKey$$2_relIndex$$3$$ = $column$$7_columnKey$$2_relIndex$$3$$[1];
    $oj$$11$$.$Assert$.assert($indexes$$3_metadata$$9_row$$20$$ < this.$m_nodeSet$.$getStart$() + this.$m_nodeSet$.$getCount$() && $column$$7_columnKey$$2_relIndex$$3$$ < this.$m_columns$.length);
    $column$$7_columnKey$$2_relIndex$$3$$ = this.$m_columns$[$column$$7_columnKey$$2_relIndex$$3$$];
    $indexes$$3_metadata$$9_row$$20$$ = this.$m_nodeSet$.getMetadata($indexes$$3_metadata$$9_row$$20$$);
    $indexes$$3_metadata$$9_row$$20$$.keys = {row:$indexes$$3_metadata$$9_row$$20$$.key, column:$column$$7_columnKey$$2_relIndex$$3$$};
    return $indexes$$3_metadata$$9_row$$20$$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getMetadata", {getMetadata:$oj$$11$$.$FlattenedTreeCellSet$.prototype.getMetadata});
  $oj$$11$$.$FlattenedTreeCellSet$.prototype.$_getRelIndexes$ = function $$oj$$11$$$$FlattenedTreeCellSet$$$$_getRelIndexes$$($column$$8_indexes$$4$$) {
    var $row$$21$$;
    $oj$$11$$.$Assert$.$assertObject$($column$$8_indexes$$4$$);
    if (null == this.$m_nodeSet$ || 0 == this.$m_nodeSet$.length) {
      return null;
    }
    $row$$21$$ = $column$$8_indexes$$4$$.row - this.$m_startRow$ + this.$m_nodeSet$.$getStart$();
    $column$$8_indexes$$4$$ = $column$$8_indexes$$4$$.column;
    $oj$$11$$.$Assert$.$assertNumber$($row$$21$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($column$$8_indexes$$4$$, null);
    $oj$$11$$.$Assert$.assert(0 <= $row$$21$$ && 0 <= $column$$8_indexes$$4$$);
    return[$row$$21$$, $column$$8_indexes$$4$$];
  };
  $oj$$11$$.$FlattenedTreeCellSet$.prototype.$getStart$ = function $$oj$$11$$$$FlattenedTreeCellSet$$$$getStart$$($axis$$10$$) {
    return "row" === $axis$$10$$ ? this.$m_startRow$ : "column" === $axis$$10$$ ? this.$m_startColumn$ : 0;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getStart", {$getStart$:$oj$$11$$.$FlattenedTreeCellSet$.prototype.$getStart$});
  $oj$$11$$.$FlattenedTreeCellSet$.prototype.$getCount$ = function $$oj$$11$$$$FlattenedTreeCellSet$$$$getCount$$($axis$$11$$) {
    return "row" === $axis$$11$$ ? Math.min(this.$m_endRow$ - this.$m_startRow$, this.$m_nodeSet$.$getCount$()) : "column" === $axis$$11$$ ? this.$m_endColumn$ - this.$m_startColumn$ : 0;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeCellSet.prototype.getCount", {$getCount$:$oj$$11$$.$FlattenedTreeCellSet$.prototype.$getCount$});
  $oj$$11$$.$FlattenedTreeHeaderSet$ = function $$oj$$11$$$$FlattenedTreeHeaderSet$$($start$$27$$, $end$$8$$, $headers$$3$$, $nodeSet$$23$$, $rowHeader$$2$$) {
    $oj$$11$$.$Assert$.$assertNumber$($start$$27$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($end$$8$$, null);
    $oj$$11$$.$Assert$.$assertArrayOrNull$($headers$$3$$);
    this.$m_start$ = $start$$27$$;
    this.$m_end$ = $end$$8$$;
    this.$m_headers$ = $headers$$3$$;
    this.$m_nodeSet$ = $nodeSet$$23$$;
    this.$m_rowHeader$ = $rowHeader$$2$$;
  };
  $goog$exportPath_$$("FlattenedTreeHeaderSet", $oj$$11$$.$FlattenedTreeHeaderSet$, $oj$$11$$);
  $oj$$11$$.$FlattenedTreeHeaderSet$.prototype.getData = function $$oj$$11$$$$FlattenedTreeHeaderSet$$$getData$($index$$140_rowData$$5$$) {
    $oj$$11$$.$Assert$.assert($index$$140_rowData$$5$$ <= this.$m_end$ && $index$$140_rowData$$5$$ >= this.$m_start$);
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? ($index$$140_rowData$$5$$ = this.$m_nodeSet$.getData($index$$140_rowData$$5$$), null != $index$$140_rowData$$5$$ ? $index$$140_rowData$$5$$.get(this.$m_rowHeader$) : null) : this.$m_headers$[$index$$140_rowData$$5$$];
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getData", {getData:$oj$$11$$.$FlattenedTreeHeaderSet$.prototype.getData});
  $oj$$11$$.$FlattenedTreeHeaderSet$.prototype.getMetadata = function $$oj$$11$$$$FlattenedTreeHeaderSet$$$getMetadata$($index$$141$$) {
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? this.$m_nodeSet$.getMetadata($index$$141$$) : {key:this.getData($index$$141$$)};
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getMetadata", {getMetadata:$oj$$11$$.$FlattenedTreeHeaderSet$.prototype.getMetadata});
  $oj$$11$$.$FlattenedTreeHeaderSet$.prototype.$getCount$ = function $$oj$$11$$$$FlattenedTreeHeaderSet$$$$getCount$$() {
    return null != this.$m_rowHeader$ && null != this.$m_nodeSet$ ? Math.min(this.$m_nodeSet$.$getCount$(), this.$m_end$ - this.$m_start$) : Math.max(0, this.$m_end$ - this.$m_start$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeHeaderSet.prototype.getCount", {$getCount$:$oj$$11$$.$FlattenedTreeHeaderSet$.prototype.$getCount$});
  $oj$$11$$.$ArrayCellSet$ = function $$oj$$11$$$$ArrayCellSet$$($startRow$$1$$, $endRow$$1$$, $startColumn$$1$$, $endColumn$$1$$, $callback$$82$$) {
    $oj$$11$$.$Assert$.$assertNumber$($startRow$$1$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($endRow$$1$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($startColumn$$1$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($endColumn$$1$$, null);
    this.$m_startRow$ = $startRow$$1$$;
    this.$m_endRow$ = $endRow$$1$$;
    this.$m_startColumn$ = $startColumn$$1$$;
    this.$m_endColumn$ = $endColumn$$1$$;
    this.$m_callback$ = $callback$$82$$;
  };
  $goog$exportPath_$$("ArrayCellSet", $oj$$11$$.$ArrayCellSet$, $oj$$11$$);
  $oj$$11$$.$ArrayCellSet$.prototype.getData = function $$oj$$11$$$$ArrayCellSet$$$getData$($indexes$$5$$) {
    return this.$m_callback$.$getCellData$($indexes$$5$$.row, $indexes$$5$$.column);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getData", {getData:$oj$$11$$.$ArrayCellSet$.prototype.getData});
  $oj$$11$$.$ArrayCellSet$.prototype.getMetadata = function $$oj$$11$$$$ArrayCellSet$$$getMetadata$($indexes$$6$$) {
    return this.$m_callback$.$getCellMetadata$($indexes$$6$$.row, $indexes$$6$$.column);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getMetadata", {getMetadata:$oj$$11$$.$ArrayCellSet$.prototype.getMetadata});
  $oj$$11$$.$ArrayCellSet$.prototype.$getStart$ = function $$oj$$11$$$$ArrayCellSet$$$$getStart$$($axis$$12$$) {
    return "row" == $axis$$12$$ ? this.$m_startRow$ : "column" == $axis$$12$$ ? this.$m_startColumn$ : -1;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStart", {$getStart$:$oj$$11$$.$ArrayCellSet$.prototype.$getStart$});
  $oj$$11$$.$ArrayCellSet$.prototype.$getCount$ = function $$oj$$11$$$$ArrayCellSet$$$$getCount$$($axis$$13$$) {
    return "row" === $axis$$13$$ ? Math.max(0, this.$m_endRow$ - this.$m_startRow$) : "column" === $axis$$13$$ ? Math.max(0, this.$m_endColumn$ - this.$m_startColumn$) : 0;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getCount", {$getCount$:$oj$$11$$.$ArrayCellSet$.prototype.$getCount$});
  $oj$$11$$.$ArrayCellSet$.prototype.$getStartRow$ = function $$oj$$11$$$$ArrayCellSet$$$$getStartRow$$() {
    return this.$m_startRow$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStartRow", {$getStartRow$:$oj$$11$$.$ArrayCellSet$.prototype.$getStartRow$});
  $oj$$11$$.$ArrayCellSet$.prototype.$getStartColumn$ = function $$oj$$11$$$$ArrayCellSet$$$$getStartColumn$$() {
    return this.$m_startColumn$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayCellSet.prototype.getStartColumn", {$getStartColumn$:$oj$$11$$.$ArrayCellSet$.prototype.$getStartColumn$});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$($treeDataSource$$1$$, $options$$232$$) {
    $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.constructor.call(this, $treeDataSource$$1$$, $options$$232$$);
  };
  $goog$exportPath_$$("FlattenedTreeDataGridDataSource", $oj$$11$$.$FlattenedTreeDataGridDataSource$, $oj$$11$$);
  $oj$$11$$.$Object$.$createSubclass$($oj$$11$$.$FlattenedTreeDataGridDataSource$, $oj$$11$$.$FlattenedTreeDataSource$, "oj.FlattenedTreeDataGridDataSource");
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.Init = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$Init$() {
    $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.Init.call(this);
    this.$m_columns$ = $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getOption$.call(this, "columns");
    this.$m_rowHeader$ = $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getOption$.call(this, "rowHeader");
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.Init", {Init:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.Init});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$getCountPrecision$$($axis$$14$$) {
    return "row" === $axis$$14$$ ? "estimate" : "actual";
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$getCount$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$getCount$$($axis$$15$$) {
    return "row" === $axis$$15$$ ? -1 : "column" === $axis$$15$$ ? this.$m_columns$.length : 0;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCount", {$getCount$:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$getCount$});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$fetchHeaders$$($headerRange$$2$$, $callbacks$$25$$, $callbackObjects$$6$$) {
    var $axis$$16$$, $headerSet$$1$$;
    $axis$$16$$ = $headerRange$$2$$.axis;
    if ("column" === $axis$$16$$) {
      $headerSet$$1$$ = new $oj$$11$$.$FlattenedTreeHeaderSet$($headerRange$$2$$.start, $headerRange$$2$$.start + $headerRange$$2$$.count, this.$m_columns$);
    } else {
      if ("row" === $axis$$16$$) {
        if (null != this.$m_rowHeader$) {
          this.$m_fetchHeaderRequest$ = {range:$headerRange$$2$$, callbacks:$callbacks$$25$$, callbackObjects:$callbackObjects$$6$$};
          return;
        }
        $headerSet$$1$$ = new $oj$$11$$.$ArrayHeaderSet$($headerRange$$2$$.start, $headerRange$$2$$.start, $axis$$16$$, null);
      }
    }
    null != $headerSet$$1$$ && null != $callbacks$$25$$ && null != $callbacks$$25$$.success && (null == $callbackObjects$$6$$ && ($callbackObjects$$6$$ = {}), $callbacks$$25$$.success.call($callbackObjects$$6$$.success, $headerSet$$1$$, $headerRange$$2$$));
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$fetchCells$$($cellRanges$$1$$, $callbacks$$26$$, $callbackObjects$$7$$) {
    var $i$$153$$, $cellRange$$2$$, $rowStart$$2$$, $rowCount$$1$$;
    for ($i$$153$$ = 0;$i$$153$$ < $cellRanges$$1$$.length;$i$$153$$++) {
      if ($cellRange$$2$$ = $cellRanges$$1$$[$i$$153$$], "row" == $cellRange$$2$$.axis) {
        $rowStart$$2$$ = $cellRange$$2$$.start;
        $rowCount$$1$$ = $cellRange$$2$$.count;
        break;
      }
    }
    $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.$fetchRows$.call(this, {start:$rowStart$$2$$, count:$rowCount$$1$$}, {success:function($nodeSet$$24$$) {
      this.$_handleFetchRowsSuccess$($nodeSet$$24$$, $cellRanges$$1$$, $callbacks$$26$$, $callbackObjects$$7$$, 0);
    }.bind(this), error:function($status$$8$$) {
      this.$_handleFetchRowsError$($status$$8$$, {start:$rowStart$$2$$, count:$rowCount$$1$$}, $callbacks$$26$$, $callbackObjects$$7$$);
    }.bind(this)});
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$fetchCells$});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.keys = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$keys$($colIndex_indexes$$7$$) {
    var $rowIndex$$4$$;
    $rowIndex$$4$$ = $colIndex_indexes$$7$$.row;
    $colIndex_indexes$$7$$ = $colIndex_indexes$$7$$.column;
    return $rowIndex$$4$$ > $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getFetchedRange$.call(this).end || $colIndex_indexes$$7$$ > this.$m_columns$.length ? null : {row:$oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.getKey.call(this, $rowIndex$$4$$), column:this.$m_columns$[$colIndex_indexes$$7$$]};
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.keys", {keys:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.keys});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$indexes$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$indexes$$($colKey$$1_keys$$9$$) {
    var $rowIndex$$5_rowKey$$16$$, $colIndex$$1$$, $i$$154$$;
    $rowIndex$$5_rowKey$$16$$ = $colKey$$1_keys$$9$$.row;
    $colKey$$1_keys$$9$$ = $colKey$$1_keys$$9$$.column;
    $rowIndex$$5_rowKey$$16$$ = $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.$getIndex$.call(this, $rowIndex$$5_rowKey$$16$$);
    for ($i$$154$$ = 0;$i$$154$$ < this.$m_columns$.length;$i$$154$$++) {
      if (this.$m_columns$[$i$$154$$] === $colKey$$1_keys$$9$$) {
        $colIndex$$1$$ = $i$$154$$;
        break;
      }
    }
    return 0 <= $rowIndex$$5_rowKey$$16$$ && 0 <= $colIndex$$1$$ ? {row:$rowIndex$$5_rowKey$$16$$, column:$colIndex$$1$$} : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.indexes", {$indexes$:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$indexes$});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.sort = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$sort$($criteria$$5$$, $callbacks$$27$$, $callbackObjects$$8$$) {
    return $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.getWrappedDataSource.call(this).sort($criteria$$5$$, {success:function() {
      this.$_handleSortSuccess$($callbacks$$27$$, $callbackObjects$$8$$);
    }.bind(this), error:$callbacks$$27$$.error});
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.sort", {sort:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.sort});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleSortSuccess$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$_handleSortSuccess$$($callbacks$$28$$, $callbackObjects$$9$$) {
    this.refresh();
    $callbacks$$28$$.success && (null == $callbackObjects$$9$$ && ($callbackObjects$$9$$ = {}), $callbacks$$28$$.success.call($callbackObjects$$9$$.success));
  };
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.move = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$move$($rowToMove$$2$$, $referenceRow$$2$$, $position$$5$$, $callbacks$$29$$) {
    $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.getWrappedDataSource.call(this).move($rowToMove$$2$$, $referenceRow$$2$$, $position$$5$$, $callbacks$$29$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.move", {move:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.move});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.getCapability = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$getCapability$($feature$$9$$) {
    return "default" === $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.getWrappedDataSource.call(this).getCapability($feature$$9$$) ? "column" : "none";
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeDataGridDataSource.prototype.getCapability", {getCapability:$oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.getCapability});
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$insertMetadata$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$insertMetadata$$($key$$66$$, $metadata$$10$$) {
    $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.$insertMetadata$.call(this, $key$$66$$, $metadata$$10$$);
  };
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleFetchRowsSuccess$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$_handleFetchRowsSuccess$$($cellSet$$1_nodeSet$$25$$, $cellRanges$$2$$, $callbacks$$30$$, $callbackObjects$$10$$) {
    var $headerRange$$3_i$$155$$, $cellRange$$3$$, $rowStart$$3$$, $rowCount$$2$$, $columnStart$$, $columnCount$$;
    for ($headerRange$$3_i$$155$$ = 0;$headerRange$$3_i$$155$$ < $cellRanges$$2$$.length;$headerRange$$3_i$$155$$++) {
      $cellRange$$3$$ = $cellRanges$$2$$[$headerRange$$3_i$$155$$], "row" == $cellRange$$3$$.axis ? ($rowStart$$3$$ = $cellRange$$3$$.start, $rowCount$$2$$ = $cellRange$$3$$.count) : "column" == $cellRange$$3$$.axis && ($columnStart$$ = $cellRange$$3$$.start, $columnCount$$ = $cellRange$$3$$.count);
    }
    this.$m_fetchHeaderRequest$ && ($headerRange$$3_i$$155$$ = this.$m_fetchHeaderRequest$.range, $headerRange$$3_i$$155$$.start == $rowStart$$3$$ && $headerRange$$3_i$$155$$.count == $rowCount$$2$$ && this.$_handleRowHeaderFetchSuccess$($cellSet$$1_nodeSet$$25$$, $headerRange$$3_i$$155$$, this.$m_fetchHeaderRequest$.callbacks, this.$m_fetchHeaderRequest$.callbackObjects), this.$m_fetchHeaderRequest$ = null);
    $cellSet$$1_nodeSet$$25$$ = new $oj$$11$$.$FlattenedTreeCellSet$($rowStart$$3$$, $rowStart$$3$$ + $rowCount$$2$$, $columnStart$$, $columnStart$$ + $columnCount$$, $cellSet$$1_nodeSet$$25$$, this.$m_columns$);
    $callbacks$$30$$.success && (null == $callbackObjects$$10$$ && ($callbackObjects$$10$$ = {}), $callbacks$$30$$.success.call($callbackObjects$$10$$.success, $cellSet$$1_nodeSet$$25$$, $cellRanges$$2$$));
  };
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleFetchRowsError$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$_handleFetchRowsError$$($status$$9$$, $headerCallbacks_range$$16$$, $callbacks$$31$$, $callbackObjects$$11$$) {
    var $headerCallbackObjects_headerRange$$4$$;
    this.$m_fetchHeaderRequest$ && ($headerCallbackObjects_headerRange$$4$$ = this.$m_fetchHeaderRequest$.range, $headerCallbackObjects_headerRange$$4$$.start == $headerCallbacks_range$$16$$.start && $headerCallbackObjects_headerRange$$4$$.count == $headerCallbacks_range$$16$$.count && ($headerCallbacks_range$$16$$ = this.$m_fetchHeaderRequest$.callbacks, $headerCallbackObjects_headerRange$$4$$ = this.$m_fetchHeaderRequest$.callbackObjects, $headerCallbacks_range$$16$$.error && (null == $headerCallbackObjects_headerRange$$4$$ && 
    ($headerCallbackObjects_headerRange$$4$$ = {}), $headerCallbacks_range$$16$$.error.call($headerCallbackObjects_headerRange$$4$$.error, $status$$9$$))), this.$m_fetchHeaderRequest$ = null);
    $callbacks$$31$$.error && (null == $callbackObjects$$11$$ && ($callbackObjects$$11$$ = {}), $callbacks$$31$$.success.call($callbackObjects$$11$$.error, $status$$9$$));
  };
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$_handleRowHeaderFetchSuccess$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$_handleRowHeaderFetchSuccess$$($headerSet$$2_nodeSet$$26$$, $headerRange$$5$$, $callbacks$$32$$, $callbackObjects$$12$$) {
    $headerSet$$2_nodeSet$$26$$ = new $oj$$11$$.$FlattenedTreeHeaderSet$($headerRange$$5$$.start, $headerRange$$5$$.start + $headerRange$$5$$.count, this.$m_columns$, $headerSet$$2_nodeSet$$26$$, this.$m_rowHeader$);
    $callbacks$$32$$.success && (null == $callbackObjects$$12$$ && ($callbackObjects$$12$$ = {}), $callbacks$$32$$.success.call($callbackObjects$$12$$.success, $headerSet$$2_nodeSet$$26$$, $headerRange$$5$$));
  };
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$insertRows$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$insertRows$$($cellSet$$2_insertAtIndex$$1$$, $insertAtRowKey$$, $event$$70_nodeSet$$27$$) {
    $cellSet$$2_insertAtIndex$$1$$ = new $oj$$11$$.$FlattenedTreeCellSet$($cellSet$$2_insertAtIndex$$1$$, $cellSet$$2_insertAtIndex$$1$$ + $event$$70_nodeSet$$27$$.$getCount$(), 0, this.$m_columns$.length, $event$$70_nodeSet$$27$$, this.$m_columns$);
    $event$$70_nodeSet$$27$$ = {source:this, operation:"insert"};
    $event$$70_nodeSet$$27$$.result = $cellSet$$2_insertAtIndex$$1$$;
    $event$$70_nodeSet$$27$$.keys = {row:$insertAtRowKey$$};
    $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.handleEvent.call(this, "change", $event$$70_nodeSet$$27$$);
  };
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$removeRows$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$removeRows$$($event$$71_rowKeys$$1$$) {
    var $keys$$10$$, $i$$156$$;
    $keys$$10$$ = [];
    for ($i$$156$$ = 0;$i$$156$$ < $event$$71_rowKeys$$1$$.length;$i$$156$$++) {
      $keys$$10$$.push({row:$event$$71_rowKeys$$1$$[$i$$156$$].key});
    }
    $event$$71_rowKeys$$1$$ = {source:this, operation:"delete"};
    $event$$71_rowKeys$$1$$.keys = $keys$$10$$;
    $oj$$11$$.$FlattenedTreeDataGridDataSource$.$superclass$.handleEvent.call(this, "change", $event$$71_rowKeys$$1$$);
  };
  $oj$$11$$.$FlattenedTreeDataGridDataSource$.prototype.$handleMaxCountReached$ = function $$oj$$11$$$$FlattenedTreeDataGridDataSource$$$$handleMaxCountReached$$($range$$17$$, $callbacks$$33$$) {
    $callbacks$$33$$.success.call(null, new $oj$$11$$.$EmptyNodeSet$(null, $range$$17$$.start));
  };
  $oj$$11$$.$PagingDataGridDataSource$ = function $$oj$$11$$$$PagingDataGridDataSource$$($dataSource$$4$$) {
    if (!($dataSource$$4$$ instanceof $oj$$11$$.$CollectionDataGridDataSource$)) {
      throw new $oj$$11$$.$Message$("Not a datagridatasource", "Not a datagridatasource", $oj$$11$$.$Message$.$SEVERITY_LEVEL$.ERROR);
    }
    this.$dataSource$ = $dataSource$$4$$;
    this.$_startIndex$ = 0;
    this.Init();
  };
  $goog$exportPath_$$("PagingDataGridDataSource", $oj$$11$$.$PagingDataGridDataSource$, $oj$$11$$);
  $oj$$11$$.$Object$.$createSubclass$($oj$$11$$.$PagingDataGridDataSource$, $oj$$11$$.$PagingDataSource$, "oj.PagingDataGridDataSource");
  $oj$$11$$.$PagingDataGridDataSource$.prototype.Init = function $$oj$$11$$$$PagingDataGridDataSource$$$Init$() {
    $oj$$11$$.$PagingDataGridDataSource$.$superclass$.Init.call(this);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.Init", {Init:$oj$$11$$.$PagingDataGridDataSource$.prototype.Init});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.fetch = function $$oj$$11$$$$PagingDataGridDataSource$$$fetch$($options$$234$$) {
    this.$_startIndex$ = $options$$234$$.startIndex;
    this.$dataSource$.setPageSize(this.$_currentPageSize$);
    this.$dataSource$.fetch($options$$234$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetch", {fetch:$oj$$11$$.$PagingDataGridDataSource$.prototype.fetch});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.hasMore = function $$oj$$11$$$$PagingDataGridDataSource$$$hasMore$() {
    return this.$dataSource$.hasMore();
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.hasMore", {hasMore:$oj$$11$$.$PagingDataGridDataSource$.prototype.hasMore});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.next = function $$oj$$11$$$$PagingDataGridDataSource$$$next$() {
    this.$dataSource$.totalSize() > this.$_startIndex$ && (this.$_currentPageSize$ += this.$_pageSize$, this.$dataSource$.setPageSize(this.$_currentPageSize$), this.fetch({startIndex:this.$_startIndex$}));
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.next", {next:$oj$$11$$.$PagingDataGridDataSource$.prototype.next});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.previous = function $$oj$$11$$$$PagingDataGridDataSource$$$previous$() {
    if (0 != this.$_startIndex$ || -1 != this.$_startIndex$) {
      this.$_startIndex$ -= this.$_pageSize$, this.$_startIndex$ = 0 > this.$_startIndex$ ? 0 : this.$_startIndex$, this.$_currentPageSize$ += this.$_pageSize$, this.$dataSource$.setPageSize(this.$_currentPageSize$), this.fetch({startIndex:this.$_startIndex$});
    }
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.previous", {previous:$oj$$11$$.$PagingDataGridDataSource$.prototype.previous});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.setPageSize = function $$oj$$11$$$$PagingDataGridDataSource$$$setPageSize$($n$$20$$) {
    this.$_pageSize$ = $n$$20$$;
    this.$_currentPageSize$ = this.$_startIndex$ + $n$$20$$;
    this.$dataSource$.setPageSize(this.$_currentPageSize$);
  };
  $oj$$11$$.$PagingDataGridDataSource$.prototype.startIndex = function $$oj$$11$$$$PagingDataGridDataSource$$$startIndex$() {
    return this.$_startIndex$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.startIndex", {startIndex:$oj$$11$$.$PagingDataGridDataSource$.prototype.startIndex});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.$getCount$ = function $$oj$$11$$$$PagingDataGridDataSource$$$$getCount$$($axis$$17$$) {
    return this.$dataSource$.$getCount$($axis$$17$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCount", {$getCount$:$oj$$11$$.$PagingDataGridDataSource$.prototype.$getCount$});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$11$$$$PagingDataGridDataSource$$$$getCountPrecision$$($axis$$18$$) {
    return this.$dataSource$.$getCountPrecision$($axis$$18$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$11$$.$PagingDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$11$$$$PagingDataGridDataSource$$$$fetchHeaders$$($headerRange$$6$$, $callbacks$$34$$, $callbackObjects$$13$$) {
    return this.$dataSource$.$fetchHeaders$($headerRange$$6$$, $callbacks$$34$$, $callbackObjects$$13$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$11$$.$PagingDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$11$$$$PagingDataGridDataSource$$$$fetchCells$$($cellRanges$$3$$, $callbacks$$35$$, $callbackObjects$$14$$) {
    return this.$dataSource$.$fetchCells$($cellRanges$$3$$, $callbacks$$35$$, $callbackObjects$$14$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$11$$.$PagingDataGridDataSource$.prototype.$fetchCells$});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.keys = function $$oj$$11$$$$PagingDataGridDataSource$$$keys$($indexes$$8$$) {
    return this.$dataSource$.keys($indexes$$8$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.keys", {keys:$oj$$11$$.$PagingDataGridDataSource$.prototype.keys});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.$indexes$ = function $$oj$$11$$$$PagingDataGridDataSource$$$$indexes$$($keys$$11$$) {
    return this.$dataSource$.$indexes$($keys$$11$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.indexes", {$indexes$:$oj$$11$$.$PagingDataGridDataSource$.prototype.$indexes$});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.on = function $$oj$$11$$$$PagingDataGridDataSource$$$on$($eventType$$29$$, $eventHandler$$6$$) {
    return this.$dataSource$.on($eventType$$29$$, $eventHandler$$6$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.on", {on:$oj$$11$$.$PagingDataGridDataSource$.prototype.on});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.off = function $$oj$$11$$$$PagingDataGridDataSource$$$off$($eventType$$30$$, $eventHandler$$7$$) {
    return this.$dataSource$.off($eventType$$30$$, $eventHandler$$7$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.off", {off:$oj$$11$$.$PagingDataGridDataSource$.prototype.off});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.getCapability = function $$oj$$11$$$$PagingDataGridDataSource$$$getCapability$($feature$$10$$) {
    return this.$dataSource$.getCapability($feature$$10$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.getCapability", {getCapability:$oj$$11$$.$PagingDataGridDataSource$.prototype.getCapability});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.size = function $$oj$$11$$$$PagingDataGridDataSource$$$size$() {
    return this.$dataSource$.size();
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.size", {size:$oj$$11$$.$PagingDataGridDataSource$.prototype.size});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.sort = function $$oj$$11$$$$PagingDataGridDataSource$$$sort$($criteria$$6$$, $callbacks$$36$$, $callbackObjects$$15$$) {
    this.$dataSource$.sort($criteria$$6$$, $callbacks$$36$$, $callbackObjects$$15$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.sort", {sort:$oj$$11$$.$PagingDataGridDataSource$.prototype.sort});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.totalSize = function $$oj$$11$$$$PagingDataGridDataSource$$$totalSize$() {
    return this.$dataSource$.totalSize();
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("PagingDataGridDataSource.prototype.totalSize", {totalSize:$oj$$11$$.$PagingDataGridDataSource$.prototype.totalSize});
  $oj$$11$$.$PagingDataGridDataSource$.prototype.move = function $$oj$$11$$$$PagingDataGridDataSource$$$move$($moveKey$$1$$, $atKey$$1$$) {
    return this.$dataSource$.move($moveKey$$1$$, $atKey$$1$$);
  };
  $oj$$11$$.$ArrayHeaderSet$ = function $$oj$$11$$$$ArrayHeaderSet$$($start$$28$$, $end$$9$$, $axis$$19$$, $callback$$83$$) {
    $oj$$11$$.$Assert$.$assertNumber$($start$$28$$, null);
    $oj$$11$$.$Assert$.$assertNumber$($end$$9$$, null);
    this.$m_start$ = $start$$28$$;
    this.$m_end$ = $end$$9$$;
    this.$m_axis$ = $axis$$19$$;
    this.$m_callback$ = $callback$$83$$;
  };
  $goog$exportPath_$$("ArrayHeaderSet", $oj$$11$$.$ArrayHeaderSet$, $oj$$11$$);
  $oj$$11$$.$ArrayHeaderSet$.prototype.getData = function $$oj$$11$$$$ArrayHeaderSet$$$getData$($index$$142$$) {
    if (null == this.$m_callback$) {
      return null;
    }
    $oj$$11$$.$Assert$.assert($index$$142$$ <= this.$m_end$ && $index$$142$$ >= this.$m_start$);
    return this.$m_callback$.$getHeaderData$(this.$m_axis$, $index$$142$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getData", {getData:$oj$$11$$.$ArrayHeaderSet$.prototype.getData});
  $oj$$11$$.$ArrayHeaderSet$.prototype.getMetadata = function $$oj$$11$$$$ArrayHeaderSet$$$getMetadata$($index$$143$$) {
    if (null == this.$m_callback$) {
      return null;
    }
    $oj$$11$$.$Assert$.assert($index$$143$$ <= this.$m_end$ && $index$$143$$ >= this.$m_start$);
    return this.$m_callback$.$getHeaderMetadata$(this.$m_axis$, $index$$143$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getMetadata", {getMetadata:$oj$$11$$.$ArrayHeaderSet$.prototype.getMetadata});
  $oj$$11$$.$ArrayHeaderSet$.prototype.$getCount$ = function $$oj$$11$$$$ArrayHeaderSet$$$$getCount$$() {
    return null == this.$m_callback$ ? 0 : Math.max(0, this.$m_end$ - this.$m_start$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getCount", {$getCount$:$oj$$11$$.$ArrayHeaderSet$.prototype.$getCount$});
  $oj$$11$$.$ArrayHeaderSet$.prototype.$getStart$ = function $$oj$$11$$$$ArrayHeaderSet$$$$getStart$$() {
    return this.$m_start$;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("ArrayHeaderSet.prototype.getStart", {$getStart$:$oj$$11$$.$ArrayHeaderSet$.prototype.$getStart$});
});
