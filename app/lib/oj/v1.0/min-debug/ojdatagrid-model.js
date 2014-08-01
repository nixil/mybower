/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojdatacollection-common", "ojs/ojmodel"], function($oj$$33$$, $$$$33$$) {
  $oj$$33$$.$CollectionCellSet$ = function $$oj$$33$$$$CollectionCellSet$$($startRow$$2$$, $endRow$$2$$, $startColumn$$2$$, $endColumn$$2$$, $collection$$51$$, $columns$$16$$, $offset$$24$$) {
    $oj$$33$$.$Assert$.$assertNumber$($startRow$$2$$, null);
    $oj$$33$$.$Assert$.$assertNumber$($endRow$$2$$, null);
    $oj$$33$$.$Assert$.$assertNumber$($startColumn$$2$$, null);
    $oj$$33$$.$Assert$.$assertNumber$($endColumn$$2$$, null);
    $oj$$33$$.$Assert$.$assertArrayOrNull$($columns$$16$$);
    this.$m_startRow$ = $startRow$$2$$;
    this.$m_endRow$ = $endRow$$2$$;
    this.$m_startColumn$ = $startColumn$$2$$;
    this.$m_endColumn$ = $endColumn$$2$$;
    this.$m_collection$ = $collection$$51$$;
    this.$m_columns$ = $columns$$16$$;
    this.$m_offset$ = $offset$$24$$;
  };
  $goog$exportPath_$$("CollectionCellSet", $oj$$33$$.$CollectionCellSet$, $oj$$33$$);
  $oj$$33$$.$CollectionCellSet$.prototype.getData = function $$oj$$33$$$$CollectionCellSet$$$getData$($column$$21_indexes$$9$$) {
    var $self$$119$$ = this;
    this.$_getModel$($column$$21_indexes$$9$$);
    this.$_getModel$($column$$21_indexes$$9$$).done(function($model$$68$$) {
      $self$$119$$.$model$ = $model$$68$$;
    });
    if (null == $self$$119$$.$model$) {
      return null;
    }
    $column$$21_indexes$$9$$ = $column$$21_indexes$$9$$.column;
    $oj$$33$$.$Assert$.assert($column$$21_indexes$$9$$ >= this.$m_startColumn$ && $column$$21_indexes$$9$$ <= this.$m_endColumn$);
    return $self$$119$$.$model$.get(this.$m_columns$[$column$$21_indexes$$9$$]);
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getData", {getData:$oj$$33$$.$CollectionCellSet$.prototype.getData});
  $oj$$33$$.$CollectionCellSet$.prototype.getMetadata = function $$oj$$33$$$$CollectionCellSet$$$getMetadata$($column$$22_indexes$$10$$) {
    var $self$$120$$ = this;
    this.$_getModel$($column$$22_indexes$$10$$);
    this.$_getModel$($column$$22_indexes$$10$$).done(function($model$$70$$) {
      $self$$120$$.$model$ = $model$$70$$;
    });
    if (null == $self$$120$$.$model$) {
      return null;
    }
    $column$$22_indexes$$10$$ = $column$$22_indexes$$10$$.column;
    $oj$$33$$.$Assert$.assert($column$$22_indexes$$10$$ >= this.$m_startColumn$ && $column$$22_indexes$$10$$ <= this.$m_endColumn$);
    return{keys:{row:$oj$$33$$.$CollectionDataGridUtils$.$_getModelKey$($self$$120$$.$model$), column:this.$m_columns$[$column$$22_indexes$$10$$]}};
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getMetadata", {getMetadata:$oj$$33$$.$CollectionCellSet$.prototype.getMetadata});
  $oj$$33$$.$CollectionCellSet$.prototype.$_getModel$ = function $$oj$$33$$$$CollectionCellSet$$$$_getModel$$($column$$23_indexes$$11$$) {
    var $row$$49$$;
    $oj$$33$$.$Assert$.$assertObject$($column$$23_indexes$$11$$);
    $row$$49$$ = $column$$23_indexes$$11$$.row;
    null != this.$m_offset$ && ($row$$49$$ += this.$m_offset$);
    $column$$23_indexes$$11$$ = $column$$23_indexes$$11$$.column;
    $oj$$33$$.$Assert$.assert($row$$49$$ >= this.$m_startRow$ && $row$$49$$ <= this.$m_endRow$ && $column$$23_indexes$$11$$ >= this.$m_startColumn$ && $column$$23_indexes$$11$$ <= this.$m_endColumn$);
    return this.$m_collection$.at($row$$49$$, {deferred:!0});
  };
  $oj$$33$$.$CollectionCellSet$.prototype.$getCount$ = function $$oj$$33$$$$CollectionCellSet$$$$getCount$$($axis$$22$$) {
    return "row" === $axis$$22$$ ? Math.max(0, this.$m_endRow$ - this.$m_startRow$) : "column" === $axis$$22$$ ? Math.max(0, this.$m_endColumn$ - this.$m_startColumn$) : 0;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getCount", {$getCount$:$oj$$33$$.$CollectionCellSet$.prototype.$getCount$});
  $oj$$33$$.$CollectionCellSet$.prototype.$getStartRow$ = function $$oj$$33$$$$CollectionCellSet$$$$getStartRow$$() {
    return this.$m_startRow$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getStartRow", {$getStartRow$:$oj$$33$$.$CollectionCellSet$.prototype.$getStartRow$});
  $oj$$33$$.$CollectionCellSet$.prototype.$getEndRow$ = function $$oj$$33$$$$CollectionCellSet$$$$getEndRow$$() {
    return this.$m_endRow$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getEndRow", {$getEndRow$:$oj$$33$$.$CollectionCellSet$.prototype.$getEndRow$});
  $oj$$33$$.$CollectionCellSet$.prototype.$getStartColumn$ = function $$oj$$33$$$$CollectionCellSet$$$$getStartColumn$$() {
    return this.$m_startColumn$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getStartColumn", {$getStartColumn$:$oj$$33$$.$CollectionCellSet$.prototype.$getStartColumn$});
  $oj$$33$$.$CollectionCellSet$.prototype.$getEndColumn$ = function $$oj$$33$$$$CollectionCellSet$$$$getEndColumn$$() {
    return this.$m_endColumn$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getEndColumn", {$getEndColumn$:$oj$$33$$.$CollectionCellSet$.prototype.$getEndColumn$});
  $oj$$33$$.$CollectionCellSet$.prototype.getCollection = function $$oj$$33$$$$CollectionCellSet$$$getCollection$() {
    return this.$m_collection$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getCollection", {getCollection:$oj$$33$$.$CollectionCellSet$.prototype.getCollection});
  $oj$$33$$.$CollectionCellSet$.prototype.$getColumns$ = function $$oj$$33$$$$CollectionCellSet$$$$getColumns$$() {
    return this.$m_columns$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionCellSet.prototype.getColumns", {$getColumns$:$oj$$33$$.$CollectionCellSet$.prototype.$getColumns$});
  $oj$$33$$.$CollectionDataGridUtils$ = function $$oj$$33$$$$CollectionDataGridUtils$$() {
  };
  $oj$$33$$.$CollectionDataGridUtils$.$_getModelKey$ = function $$oj$$33$$$$CollectionDataGridUtils$$$_getModelKey$$($model$$71$$) {
    var $key$$105$$;
    $key$$105$$ = $model$$71$$.$GetId$();
    null == $key$$105$$ && ($key$$105$$ = $model$$71$$.$GetCid$());
    return $key$$105$$;
  };
  $oj$$33$$.$CollectionHeaderSet$ = function $$oj$$33$$$$CollectionHeaderSet$$($start$$35$$, $end$$10$$, $headers$$5$$, $collection$$52$$, $rowHeader$$3$$, $offset$$25$$) {
    $oj$$33$$.$Assert$.$assertNumber$($start$$35$$, null);
    $oj$$33$$.$Assert$.$assertNumber$($end$$10$$, null);
    $oj$$33$$.$Assert$.$assertArrayOrNull$($headers$$5$$);
    this.$m_start$ = $start$$35$$;
    this.$m_end$ = $end$$10$$;
    this.$m_headers$ = $headers$$5$$;
    this.$m_collection$ = $collection$$52$$;
    this.$m_rowHeader$ = $rowHeader$$3$$;
    this.$m_offset$ = $offset$$25$$;
  };
  $goog$exportPath_$$("CollectionHeaderSet", $oj$$33$$.$CollectionHeaderSet$, $oj$$33$$);
  $oj$$33$$.$CollectionHeaderSet$.prototype.getData = function $$oj$$33$$$$CollectionHeaderSet$$$getData$($index$$202$$) {
    $oj$$33$$.$Assert$.assert($index$$202$$ <= this.$m_end$ && $index$$202$$ >= this.$m_start$);
    var $self$$121$$ = this;
    return null != this.$m_rowHeader$ && null != this.$m_collection$ ? (null != this.$m_offset$ && ($index$$202$$ += this.$m_offset$), this.$m_collection$.at($index$$202$$, {deferred:!0}).done(function($model$$72$$) {
      $self$$121$$.$model$ = $model$$72$$;
    }), $self$$121$$.$model$.get(this.$m_rowHeader$)) : this.$m_headers$[$index$$202$$];
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getData", {getData:$oj$$33$$.$CollectionHeaderSet$.prototype.getData});
  $oj$$33$$.$CollectionHeaderSet$.prototype.getMetadata = function $$oj$$33$$$$CollectionHeaderSet$$$getMetadata$($index$$203$$) {
    var $self$$122$$;
    return null != this.$m_rowHeader$ && null != this.$m_collection$ ? ($self$$122$$ = this, null != this.$m_offset$ && ($index$$203$$ += this.$m_offset$), this.$m_collection$.at($index$$203$$, {deferred:!0}).done(function($model$$73$$) {
      $self$$122$$.$model$ = $model$$73$$;
    }), null == $self$$122$$.$model$ ? null : {key:$oj$$33$$.$CollectionDataGridUtils$.$_getModelKey$($self$$122$$.$model$)}) : {key:this.getData($index$$203$$)};
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getMetadata", {getMetadata:$oj$$33$$.$CollectionHeaderSet$.prototype.getMetadata});
  $oj$$33$$.$CollectionHeaderSet$.prototype.$getCount$ = function $$oj$$33$$$$CollectionHeaderSet$$$$getCount$$() {
    return Math.max(0, this.$m_end$ - this.$m_start$);
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getCount", {$getCount$:$oj$$33$$.$CollectionHeaderSet$.prototype.$getCount$});
  $oj$$33$$.$CollectionHeaderSet$.prototype.$getStart$ = function $$oj$$33$$$$CollectionHeaderSet$$$$getStart$$() {
    return this.$m_start$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getStart", {$getStart$:$oj$$33$$.$CollectionHeaderSet$.prototype.$getStart$});
  $oj$$33$$.$CollectionHeaderSet$.prototype.$getEnd$ = function $$oj$$33$$$$CollectionHeaderSet$$$$getEnd$$() {
    return this.$m_end$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getEnd", {$getEnd$:$oj$$33$$.$CollectionHeaderSet$.prototype.$getEnd$});
  $oj$$33$$.$CollectionHeaderSet$.prototype.$getHeaders$ = function $$oj$$33$$$$CollectionHeaderSet$$$$getHeaders$$() {
    return this.$m_headers$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getHeaders", {$getHeaders$:$oj$$33$$.$CollectionHeaderSet$.prototype.$getHeaders$});
  $oj$$33$$.$CollectionHeaderSet$.prototype.$getRowHeader$ = function $$oj$$33$$$$CollectionHeaderSet$$$$getRowHeader$$() {
    return this.$m_rowHeader$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getRowHeader", {$getRowHeader$:$oj$$33$$.$CollectionHeaderSet$.prototype.$getRowHeader$});
  $oj$$33$$.$CollectionHeaderSet$.prototype.getCollection = function $$oj$$33$$$$CollectionHeaderSet$$$getCollection$() {
    return this.$m_collection$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionHeaderSet.prototype.getCollection", {getCollection:$oj$$33$$.$CollectionHeaderSet$.prototype.getCollection});
  $oj$$33$$.$CollectionDataGridDataSource$ = function $$oj$$33$$$$CollectionDataGridDataSource$$($collection$$53$$, $options$$311$$) {
    this.$collection$ = $collection$$53$$;
    null != $options$$311$$ && (this.$rowHeader$ = $options$$311$$.rowHeader, this.columns = $options$$311$$.columns);
    this.$_startIndex$ = 0;
    this.$_pageSize$ = -1;
    $oj$$33$$.$CollectionDataGridDataSource$.$superclass$.constructor.call(this);
  };
  $goog$exportPath_$$("CollectionDataGridDataSource", $oj$$33$$.$CollectionDataGridDataSource$, $oj$$33$$);
  $oj$$33$$.$Object$.$createSubclass$($oj$$33$$.$CollectionDataGridDataSource$, $oj$$33$$.$DataGridDataSource$, "oj.CollectionDataGridDataSource");
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.Init = function $$oj$$33$$$$CollectionDataGridDataSource$$$Init$() {
    $oj$$33$$.$CollectionDataGridDataSource$.$superclass$.Init.call(this);
    this.$pendingHeaderCallback$ = {};
    !this.$_isRemote$() && null == this.columns && 0 < this.$collection$.length && (this.columns = this.$collection$.first().keys(), -1 != this.columns.indexOf(this.$rowHeader$) && this.columns.splice(this.columns.indexOf(this.$rowHeader$), 1));
    this.$_registerEventListeners$();
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.Init", {Init:$oj$$33$$.$CollectionDataGridDataSource$.prototype.Init});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_registerEventListeners$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_registerEventListeners$$() {
    this.$collection$.on("add", this.$_handleModelAdded$.bind(this));
    this.$collection$.on("remove", this.$_handleModelDeleted$.bind(this));
    this.$collection$.on("change", this.$_handleModelChanged$.bind(this));
    this.$collection$.on("refresh", this.$_handleCollectionRefresh$.bind(this));
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_isRemote$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_isRemote$$() {
    return null != this.$collection$.url || null != this.$collection$.customURL;
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_isDataAvailable$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_isDataAvailable$$() {
    return this.$_isRemote$() ? null != this.data : !0;
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_isHeaderAvailable$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_isHeaderAvailable$$($axis$$23$$) {
    if (this.$_isRemote$()) {
      if ("column" === $axis$$23$$) {
        return null != this.columns;
      }
      if ("row" === $axis$$23$$ && null != this.$rowHeader$) {
        return null != this.data;
      }
    }
    return!0;
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$getCount$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$getCount$$($axis$$24$$) {
    if (!this.$_isHeaderAvailable$($axis$$24$$)) {
      return this.precision = "estimate", -1;
    }
    this.precision = "exact";
    return "row" == $axis$$24$$ ? this.size() : "column" == $axis$$24$$ ? this.columns.length : 0;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCount", {$getCount$:$oj$$33$$.$CollectionDataGridDataSource$.prototype.$getCount$});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$getCountPrecision$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$getCountPrecision$$($axis$$25$$) {
    null == this.precision && this.$getCount$($axis$$25$$);
    return this.precision;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCountPrecision", {$getCountPrecision$:$oj$$33$$.$CollectionDataGridDataSource$.prototype.$getCountPrecision$});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$fetchHeaders$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$fetchHeaders$$($headerRange$$7$$, $callbacks$$45$$, $callbackObjects$$16$$) {
    var $axis$$26$$, $callback$$103$$;
    $axis$$26$$ = $headerRange$$7$$.axis;
    this.$_isHeaderAvailable$($axis$$26$$) ? this.$_handleHeaderFetchSuccess$($headerRange$$7$$, $callbacks$$45$$, $callbackObjects$$16$$) : null != $callbacks$$45$$ && ($callback$$103$$ = {}, $callback$$103$$.$headerRange$ = $headerRange$$7$$, $callback$$103$$.callbacks = $callbacks$$45$$, $callback$$103$$.$callbackObjects$ = $callbackObjects$$16$$, this.$pendingHeaderCallback$[$axis$$26$$] = $callback$$103$$);
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetchHeaders", {$fetchHeaders$:$oj$$33$$.$CollectionDataGridDataSource$.prototype.$fetchHeaders$});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_handleHeaderFetchSuccess$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_handleHeaderFetchSuccess$$($headerRange$$8$$, $callbacks$$46$$, $callbackObjects$$17$$, $actualRange_end$$11$$) {
    var $axis$$27$$, $start$$36$$, $count$$38$$, $headerSet$$3$$;
    $axis$$27$$ = $headerRange$$8$$.axis;
    $start$$36$$ = $headerRange$$8$$.start;
    $count$$38$$ = $headerRange$$8$$.count;
    $oj$$33$$.$Assert$.assert("row" === $axis$$27$$ || "column" === $axis$$27$$);
    $oj$$33$$.$Assert$.assert(0 < $count$$38$$);
    "column" === $axis$$27$$ ? null != this.columns ? ($actualRange_end$$11$$ = Math.min(this.columns.length, $start$$36$$ + $count$$38$$), $headerSet$$3$$ = new $oj$$33$$.$CollectionHeaderSet$($start$$36$$, $actualRange_end$$11$$, this.columns)) : $headerSet$$3$$ = new $oj$$33$$.$ArrayHeaderSet$($start$$36$$, $start$$36$$, $axis$$27$$, null) : "row" === $axis$$27$$ && (null != this.$rowHeader$ ? (null != $actualRange_end$$11$$ && ($count$$38$$ = $actualRange_end$$11$$.count), $actualRange_end$$11$$ = 
    Math.min(this.size(), $start$$36$$ + $count$$38$$), 0 < this.$_pageSize$ ? ($actualRange_end$$11$$ = Math.min($actualRange_end$$11$$, this.totalSize() - this.$_startIndex$), $headerSet$$3$$ = new $oj$$33$$.$CollectionHeaderSet$($start$$36$$, $actualRange_end$$11$$, this.columns, this.$collection$, this.$rowHeader$, this.$_startIndex$)) : $headerSet$$3$$ = new $oj$$33$$.$CollectionHeaderSet$($start$$36$$, $actualRange_end$$11$$, this.columns, this.$collection$, this.$rowHeader$)) : $headerSet$$3$$ = 
    new $oj$$33$$.$ArrayHeaderSet$($start$$36$$, $start$$36$$, $axis$$27$$, null));
    null != $callbacks$$46$$ && $callbacks$$46$$.success && $callbacks$$46$$.success.call($callbackObjects$$17$$.success, $headerSet$$3$$, $headerRange$$8$$);
    this.$pendingHeaderCallback$[$axis$$27$$] = null;
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_getRanges$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_getRanges$$($cellRanges$$4$$) {
    var $i$$276$$, $cellRange$$4$$, $rowStart$$4$$, $rowCount$$3$$, $colStart$$1$$, $colCount$$;
    for ($i$$276$$ = 0;$i$$276$$ < $cellRanges$$4$$.length;$i$$276$$ += 1) {
      $cellRange$$4$$ = $cellRanges$$4$$[$i$$276$$], $oj$$33$$.$Assert$.assert("row" === $cellRange$$4$$.axis || "column" === $cellRange$$4$$.axis), $oj$$33$$.$Assert$.assert(0 < $cellRange$$4$$.count), "row" === $cellRange$$4$$.axis ? ($rowStart$$4$$ = $cellRange$$4$$.start, $rowCount$$3$$ = $cellRange$$4$$.count) : "column" === $cellRange$$4$$.axis && ($colStart$$1$$ = $cellRange$$4$$.start, $colCount$$ = $cellRange$$4$$.count);
    }
    return{rowStart:$rowStart$$4$$, rowCount:$rowCount$$3$$, colStart:$colStart$$1$$, colCount:$colCount$$};
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_handleCellFetchSuccess$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_handleCellFetchSuccess$$($cellRanges$$5$$, $callbacks$$47$$, $callbackObjects$$18$$, $actualRange$$1_rowEnd$$1$$) {
    var $colEnd$$1_ranges$$1$$, $cellSet$$3_rowStart$$5$$, $colStart$$2$$;
    $colEnd$$1_ranges$$1$$ = this.$_getRanges$($cellRanges$$5$$);
    $cellSet$$3_rowStart$$5$$ = $colEnd$$1_ranges$$1$$.rowStart;
    $actualRange$$1_rowEnd$$1$$ = null != $actualRange$$1_rowEnd$$1$$ ? Math.min(this.size(), $cellSet$$3_rowStart$$5$$ + $actualRange$$1_rowEnd$$1$$.count) : Math.min(this.size(), $cellSet$$3_rowStart$$5$$ + $cellRanges$$5$$.count);
    $colStart$$2$$ = $colEnd$$1_ranges$$1$$.colStart;
    $colEnd$$1_ranges$$1$$ = Math.min(this.columns.length, $colStart$$2$$ + $colEnd$$1_ranges$$1$$.colCount);
    0 < this.$_pageSize$ ? ($actualRange$$1_rowEnd$$1$$ = Math.min($actualRange$$1_rowEnd$$1$$, this.totalSize() - this.$_startIndex$), $cellSet$$3_rowStart$$5$$ = new $oj$$33$$.$CollectionCellSet$($cellSet$$3_rowStart$$5$$, $actualRange$$1_rowEnd$$1$$, $colStart$$2$$, $colEnd$$1_ranges$$1$$, this.$collection$, this.columns, this.$_startIndex$)) : $cellSet$$3_rowStart$$5$$ = new $oj$$33$$.$CollectionCellSet$($cellSet$$3_rowStart$$5$$, $actualRange$$1_rowEnd$$1$$, $colStart$$2$$, $colEnd$$1_ranges$$1$$, 
    this.$collection$, this.columns);
    null != $callbacks$$47$$ && null != $callbacks$$47$$.success && (null != $callbacks$$47$$ && null == $callbackObjects$$18$$ && ($callbackObjects$$18$$ = {}), $callbacks$$47$$.success.call($callbackObjects$$18$$.success, $cellSet$$3_rowStart$$5$$, $cellRanges$$5$$), this.$_fetchCalls$ = 0);
    this.$pendingCellCallback$ = null;
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$fetchCells$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$fetchCells$$($cellRanges$$6$$, $callbacks$$48$$, $callbackObjects$$19$$) {
    this.$_isDataAvailable$() ? this.$_handleCellFetchSuccess$($cellRanges$$6$$, $callbacks$$48$$, $callbackObjects$$19$$) : (null != $callbacks$$48$$ && (this.$pendingCellCallback$ = {}, this.$pendingCellCallback$.$cellRanges$ = $cellRanges$$6$$, this.$pendingCellCallback$.callbacks = $callbacks$$48$$, this.$pendingCellCallback$.$callbackObjects$ = $callbackObjects$$19$$), this.$_fetchCells$($cellRanges$$6$$));
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.fetchCells", {$fetchCells$:$oj$$33$$.$CollectionDataGridDataSource$.prototype.$fetchCells$});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_processPendingHeaderCallbacks$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_processPendingHeaderCallbacks$$($axis$$28$$) {
    var $pendingCallback$$, $headerRange$$9$$, $callbacks$$49$$, $callbackObjects$$20$$, $actualRange$$2$$;
    $pendingCallback$$ = this.$pendingHeaderCallback$[$axis$$28$$];
    null != $pendingCallback$$ && ($headerRange$$9$$ = $pendingCallback$$.$headerRange$, $callbacks$$49$$ = $pendingCallback$$.callbacks, $callbackObjects$$20$$ = $pendingCallback$$.$callbackObjects$, "row" === $axis$$28$$ && ($actualRange$$2$$ = $pendingCallback$$.$actualRange$), this.$_handleHeaderFetchSuccess$($headerRange$$9$$, $callbacks$$49$$, $callbackObjects$$20$$, $actualRange$$2$$));
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_processPendingCellCallbacks$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_processPendingCellCallbacks$$() {
    this.$_handleCellFetchSuccess$(this.$pendingCellCallback$.$cellRanges$, this.$pendingCellCallback$.callbacks, this.$pendingCellCallback$.$callbackObjects$, this.$pendingCellCallback$.$actualRange$);
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_fetchCells$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_fetchCells$$($cellRanges$$8_ranges$$2$$) {
    var $rowStart$$6$$;
    $cellRanges$$8_ranges$$2$$ = this.$_getRanges$($cellRanges$$8_ranges$$2$$);
    $rowStart$$6$$ = $cellRanges$$8_ranges$$2$$.rowStart;
    0 < this.$_pageSize$ && ($rowStart$$6$$ += this.$_startIndex$);
    this.$collection$.$setRangeLocal$($rowStart$$6$$, $cellRanges$$8_ranges$$2$$.rowCount).done(function($start$$37$$, $count$$39$$) {
      var $first$$7$$ = this.$collection$.at($rowStart$$6$$, {deferred:!0});
      this.$_setActualCallbackRanges$($start$$37$$, $count$$39$$);
      null != $first$$7$$ && void 0 === this.columns && $first$$7$$.done(function($model$$74$$) {
        this.$_setupColumns$($model$$74$$);
      }.bind(this));
      null != this.$pendingHeaderCallback$ && (this.$_processPendingHeaderCallbacks$("column"), this.$_processPendingHeaderCallbacks$("row"));
      null != this.$pendingCellCallback$ && this.$_processPendingCellCallbacks$();
      0 < this.$_pageSize$ && $oj$$33$$.$DataGridDataSource$.$superclass$.handleEvent.call(this, "sync", !0);
    }.bind(this));
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_setActualCallbackRanges$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_setActualCallbackRanges$$($start$$38$$, $count$$40$$) {
    var $actualRange$$4$$ = {start:$start$$38$$, count:$count$$40$$};
    null != this.$pendingHeaderCallback$.row && (this.$pendingHeaderCallback$.row.$actualRange$ = $actualRange$$4$$);
    null != this.$pendingCellCallback$ && (this.$pendingCellCallback$.$actualRange$ = $actualRange$$4$$);
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_setupColumns$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_setupColumns$$($model$$75$$) {
    this.columns = $model$$75$$.keys();
    -1 != this.columns.indexOf(this.$rowHeader$) && this.columns.splice(this.columns.indexOf(this.$rowHeader$), 1);
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.keys = function $$oj$$33$$$$CollectionDataGridDataSource$$$keys$($atPromise_indexes$$12$$) {
    var $rowIndex$$6$$, $columnIndex$$3$$, $rowKey$$21$$, $columnKey$$3$$, $dfd$$6$$;
    $rowIndex$$6$$ = $atPromise_indexes$$12$$.row + this.$_startIndex$;
    $columnIndex$$3$$ = $atPromise_indexes$$12$$.column;
    $dfd$$6$$ = $$$$33$$.Deferred();
    $atPromise_indexes$$12$$ = this.$collection$.at($rowIndex$$6$$, {deferred:!0});
    null != $atPromise_indexes$$12$$ ? $atPromise_indexes$$12$$.done(function($rowModel$$) {
      $rowKey$$21$$ = $oj$$33$$.$CollectionDataGridUtils$.$_getModelKey$($rowModel$$);
      null == this.columns && this.$_setupColumns$($rowModel$$);
      $columnKey$$3$$ = this.columns[$columnIndex$$3$$];
      $dfd$$6$$.resolve({row:null == $rowKey$$21$$ ? null : $rowKey$$21$$, column:null == $columnKey$$3$$ ? null : $columnKey$$3$$});
    }.bind(this)) : $dfd$$6$$.resolve({row:null, column:null});
    return $dfd$$6$$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.keys", {keys:$oj$$33$$.$CollectionDataGridDataSource$.prototype.keys});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$indexes$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$indexes$$($keys$$15$$) {
    var $rowKey$$22$$, $columnKey$$4$$, $dfd$$7$$, $columnIndex$$4$$;
    $rowKey$$22$$ = $keys$$15$$.row;
    $columnKey$$4$$ = $keys$$15$$.column;
    $dfd$$7$$ = $$$$33$$.Deferred();
    this.$collection$.indexOf($rowKey$$22$$, {deferred:!0}).done(function($rowIndex$$7$$) {
      null == this.columns && this.$collection$.first(1, {deferred:!0}).done(function($model$$76$$) {
        this.$_setupColumns$($model$$76$$);
      }.bind(this));
      $columnIndex$$4$$ = this.columns.indexOf($columnKey$$4$$);
      $dfd$$7$$.resolve({row:null == $rowIndex$$7$$ ? -1 : $rowIndex$$7$$, column:null == $columnIndex$$4$$ ? -1 : $columnIndex$$4$$});
    }.bind(this));
    return $dfd$$7$$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.indexes", {$indexes$:$oj$$33$$.$CollectionDataGridDataSource$.prototype.$indexes$});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.getCapability = function $$oj$$33$$$$CollectionDataGridDataSource$$$getCapability$($feature$$16$$) {
    return "sort" === $feature$$16$$ ? "column" : "move" === $feature$$16$$ ? "row" : null;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCapability", {getCapability:$oj$$33$$.$CollectionDataGridDataSource$.prototype.getCapability});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.sort = function $$oj$$33$$$$CollectionDataGridDataSource$$$sort$($axis$$29_criteria$$14$$, $callbacks$$51$$, $callbackObjects$$22$$) {
    var $comparator$$15$$, $direction$$10$$ = $axis$$29_criteria$$14$$.direction, $key$$106$$ = $axis$$29_criteria$$14$$.key;
    $axis$$29_criteria$$14$$ = $axis$$29_criteria$$14$$.axis;
    null == $callbackObjects$$22$$ && ($callbackObjects$$22$$ = {});
    "column" === $axis$$29_criteria$$14$$ ? (-1 < this.$collection$.$fetchSize$ && this.$collection$.hasMore ? (this.$collection$.comparator = $key$$106$$, this.$collection$.sortDirection = "ascending" === $direction$$10$$ ? 1 : -1) : ("ascending" === $direction$$10$$ && ($comparator$$15$$ = function $$comparator$$15$$$($a$$81$$, $b$$48$$) {
      var $as$$2$$, $bs$$2$$;
      $a$$81$$ = $a$$81$$.get($key$$106$$);
      $b$$48$$ = $b$$48$$.get($key$$106$$);
      $as$$2$$ = isNaN($a$$81$$);
      $bs$$2$$ = isNaN($b$$48$$);
      $a$$81$$ instanceof Date && ($a$$81$$ = $a$$81$$.toISOString(), $as$$2$$ = !0);
      $b$$48$$ instanceof Date && ($b$$48$$ = $b$$48$$.toISOString(), $bs$$2$$ = !0);
      return $as$$2$$ && $bs$$2$$ ? $a$$81$$ < $b$$48$$ ? -1 : $a$$81$$ === $b$$48$$ ? 0 : 1 : $as$$2$$ ? 1 : $bs$$2$$ ? -1 : $a$$81$$ - $b$$48$$;
    }), "descending" === $direction$$10$$ && ($comparator$$15$$ = function $$comparator$$15$$$($a$$82$$, $b$$49$$) {
      var $as$$3$$, $bs$$3$$;
      $a$$82$$ = $a$$82$$.get($key$$106$$);
      $b$$49$$ = $b$$49$$.get($key$$106$$);
      $as$$3$$ = isNaN($a$$82$$);
      $bs$$3$$ = isNaN($b$$49$$);
      $a$$82$$ instanceof Date && ($a$$82$$ = $a$$82$$.toISOString());
      $b$$49$$ instanceof Date && ($b$$49$$ = $b$$49$$.toISOString());
      return $as$$3$$ && $bs$$3$$ ? $a$$82$$ > $b$$49$$ ? -1 : $a$$82$$ === $b$$49$$ ? 0 : 1 : $as$$3$$ ? -1 : $bs$$3$$ ? 1 : $b$$49$$ - $a$$82$$;
    }), this.$collection$.comparator = $comparator$$15$$), this.$collection$.sort(), null != $callbacks$$51$$ && null != $callbacks$$51$$.success && $callbacks$$51$$.success.call($callbackObjects$$22$$.success)) : null != $callbacks$$51$$ && null != $callbacks$$51$$.error && $callbacks$$51$$.error.call($callbackObjects$$22$$.error, "Axis value not supported");
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.sort", {sort:$oj$$33$$.$CollectionDataGridDataSource$.prototype.sort});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.move = function $$oj$$33$$$$CollectionDataGridDataSource$$$move$($moveKey$$2$$, $atKey$$2$$) {
    var $indexPromise$$;
    this.$collection$.get($moveKey$$2$$, {deferred:!0}).done(function($moveModel$$) {
      null == $atKey$$2$$ ? (this.$collection$.remove($moveModel$$), this.$collection$.add($moveModel$$)) : ($moveKey$$2$$ === $atKey$$2$$ ? ($indexPromise$$ = this.$collection$.indexOf($atKey$$2$$, {deferred:!0}), this.$collection$.remove($moveModel$$)) : (this.$collection$.remove($moveModel$$), $indexPromise$$ = this.$collection$.indexOf($atKey$$2$$, {deferred:!0})), $indexPromise$$.done(function($newIndex$$1$$) {
        this.$collection$.add($moveModel$$, {at:$newIndex$$1$$, $force$:!0});
      }.bind(this)));
    }.bind(this));
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.move", {move:$oj$$33$$.$CollectionDataGridDataSource$.prototype.move});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_getModelEvent$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_getModelEvent$$($operation$$6$$, $rowKey$$23$$, $rowIndex$$8$$, $columnIndex$$5$$) {
    var $event$$355$$ = {source:this};
    $event$$355$$.operation = $operation$$6$$;
    $event$$355$$.keys = {row:$rowKey$$23$$, column:null};
    $event$$355$$.indexes = {row:$rowIndex$$8$$, column:$columnIndex$$5$$};
    return $event$$355$$;
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_handleModelAdded$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_handleModelAdded$$($model$$77$$) {
    var $event$$356$$, $rowKey$$24$$;
    this.$collection$.indexOf($model$$77$$, {deferred:!0}).done(function($atPromise$$1_index$$204$$) {
      $rowKey$$24$$ = $oj$$33$$.$CollectionDataGridUtils$.$_getModelKey$($model$$77$$);
      $event$$356$$ = this.$_getModelEvent$("insert", $rowKey$$24$$, 0 < $atPromise$$1_index$$204$$ - this.$_startIndex$ ? $atPromise$$1_index$$204$$ - this.$_startIndex$ : 0, -1);
      this.handleEvent("change", $event$$356$$);
      $atPromise$$1_index$$204$$ < this.$_pageSize$ + this.$_startIndex$ && ($atPromise$$1_index$$204$$ = this.$collection$.at(this.$_startIndex$ + this.$_pageSize$, {deferred:!0}), null != $atPromise$$1_index$$204$$ && $atPromise$$1_index$$204$$.done(function($overfillModel$$) {
        null != $model$$77$$ && this.$_handleModelDeleted$($overfillModel$$);
      }.bind(this)));
    }.bind(this));
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_handleModelDeleted$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_handleModelDeleted$$($model$$78$$) {
    this.handleEvent("change", this.$_getModelEvent$("delete", $oj$$33$$.$CollectionDataGridUtils$.$_getModelKey$($model$$78$$)));
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_handleModelChanged$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_handleModelChanged$$($model$$79$$) {
    var $event$$358$$, $rowKey$$26$$;
    this.$collection$.indexOf($model$$79$$, {deferred:!0}).done(function($index$$205$$) {
      $rowKey$$26$$ = $oj$$33$$.$CollectionDataGridUtils$.$_getModelKey$($model$$79$$);
      $index$$205$$ = 0 < $index$$205$$ - this.$_startIndex$ ? $index$$205$$ - this.$_startIndex$ : -1;
      $event$$358$$ = this.$_getModelEvent$("update", $rowKey$$26$$, $index$$205$$, -1);
      this.handleEvent("change", $event$$358$$);
    }.bind(this));
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$_handleCollectionRefresh$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$_handleCollectionRefresh$$() {
    this.handleEvent("change", this.$_getModelEvent$("refresh", null));
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.setPageSize = function $$oj$$33$$$$CollectionDataGridDataSource$$$setPageSize$($n$$34$$) {
    this.$_pageSize$ = $n$$34$$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.setPageSize", {setPageSize:$oj$$33$$.$CollectionDataGridDataSource$.prototype.setPageSize});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.size = function $$oj$$33$$$$CollectionDataGridDataSource$$$size$() {
    return 0 === this.$collection$.length ? -1 : null != this.$_pageSize$ && 0 < this.$_pageSize$ && this.$collection$.size() > this.$_pageSize$ ? this.$_pageSize$ : this.$collection$.size();
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.size", {size:$oj$$33$$.$CollectionDataGridDataSource$.prototype.size});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.totalSize = function $$oj$$33$$$$CollectionDataGridDataSource$$$totalSize$() {
    return null != this.$collection$ ? this.$collection$.totalResults : -1;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.totalSize", {totalSize:$oj$$33$$.$CollectionDataGridDataSource$.prototype.totalSize});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.hasMore = function $$oj$$33$$$$CollectionDataGridDataSource$$$hasMore$() {
    return null != this.$collection$ ? this.$collection$.hasMore : !1;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.hasMore", {hasMore:$oj$$33$$.$CollectionDataGridDataSource$.prototype.hasMore});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.fetch = function $$oj$$33$$$$CollectionDataGridDataSource$$$fetch$($options$$312$$) {
    this.$_startIndex$ = null != $options$$312$$ ? null != $options$$312$$.startIndex ? $options$$312$$.startIndex : 0 : 0;
    this.handleEvent("change", {operation:"sync", pageSize:this.$_pageSize$});
  };
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.getCollection = function $$oj$$33$$$$CollectionDataGridDataSource$$$getCollection$() {
    return this.$collection$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getCollection", {getCollection:$oj$$33$$.$CollectionDataGridDataSource$.prototype.getCollection});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$getColumns$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$getColumns$$() {
    return this.columns;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getColumns", {$getColumns$:$oj$$33$$.$CollectionDataGridDataSource$.prototype.$getColumns$});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$getRowHeader$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$getRowHeader$$() {
    return this.$rowHeader$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getRowHeader", {$getRowHeader$:$oj$$33$$.$CollectionDataGridDataSource$.prototype.$getRowHeader$});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$getStartIndex$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$getStartIndex$$() {
    return this.$_startIndex$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getStartIndex", {$getStartIndex$:$oj$$33$$.$CollectionDataGridDataSource$.prototype.$getStartIndex$});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$getPageSize$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$getPageSize$$() {
    return this.$_pageSize$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getPageSize", {$getPageSize$:$oj$$33$$.$CollectionDataGridDataSource$.prototype.$getPageSize$});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.$getFetchCalls$ = function $$oj$$33$$$$CollectionDataGridDataSource$$$$getFetchCalls$$() {
    return this.$_fetchCalls$;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getFetchCalls", {$getFetchCalls$:$oj$$33$$.$CollectionDataGridDataSource$.prototype.$getFetchCalls$});
  $oj$$33$$.$CollectionDataGridDataSource$.prototype.getData = function $$oj$$33$$$$CollectionDataGridDataSource$$$getData$() {
    return this.data;
  };
  $oj$$33$$.$Object$.$exportPrototypeSymbol$("CollectionDataGridDataSource.prototype.getData", {getData:$oj$$33$$.$CollectionDataGridDataSource$.prototype.getData});
});
