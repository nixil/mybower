/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define("ojs/ojcore jquery ojs/ojcomponentcore ojs/ojmenu ojs/ojdatacollection-common ojs/ojpagingcontrol".split(" "), function($oj$$14$$, $$$$14$$) {
  $oj$$14$$.$FlattenedTreeRowSet$ = function $$oj$$14$$$$FlattenedTreeRowSet$$($data$$97$$, $options$$242$$) {
    $oj$$14$$.$FlattenedTreeRowSet$._init(this, $data$$97$$, $options$$242$$);
  };
  $goog$exportPath_$$("FlattenedTreeRowSet", $oj$$14$$.$FlattenedTreeRowSet$, $oj$$14$$);
  $oj$$14$$.$Object$.$createSubclass$($oj$$14$$.$FlattenedTreeRowSet$, $oj$$14$$.$RowSet$, "oj.FlattenedTreeRowSet");
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.Init = function $$oj$$14$$$$FlattenedTreeRowSet$$$Init$() {
    $oj$$14$$.$FlattenedTreeRowSet$.$superclass$.Init.call(this);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.Init", {Init:$oj$$14$$.$FlattenedTreeRowSet$.prototype.Init});
  $oj$$14$$.$FlattenedTreeRowSet$._init = function $$oj$$14$$$$FlattenedTreeRowSet$$_init$($rowSet$$4$$, $data$$98$$) {
    $rowSet$$4$$.$_eventHandlers$ = [];
    $rowSet$$4$$.$_startIndex$ = 0;
    $rowSet$$4$$.Init();
    $rowSet$$4$$.$_data$ = $data$$98$$;
    $rowSet$$4$$.$_data$.$insertRows$ = function $$rowSet$$4$$$$_data$$$insertRows$$($insertAtIndex$$2$$, $i$$174_insertAtKey$$1$$, $nodeSet$$28$$) {
      var $row$$23$$, $rowIdx$$1$$;
      for ($i$$174_insertAtKey$$1$$ = 0;$i$$174_insertAtKey$$1$$ < $nodeSet$$28$$.$getCount$();$i$$174_insertAtKey$$1$$++) {
        $rowIdx$$1$$ = $insertAtIndex$$2$$ + $i$$174_insertAtKey$$1$$, $row$$23$$ = new $oj$$14$$.$ArrayRow$($nodeSet$$28$$.getData($i$$174_insertAtKey$$1$$), {context:$nodeSet$$28$$.getMetadata($i$$174_insertAtKey$$1$$)}), $row$$23$$.index = $rowIdx$$1$$, $oj$$14$$.$FlattenedTreeRowSet$.$superclass$.$_handleEvent$.call($rowSet$$4$$, $oj$$14$$.$RowSet$.$EventType$.ADD, $row$$23$$);
      }
    };
    $rowSet$$4$$.$_data$.$removeRows$ = function $$rowSet$$4$$$$_data$$$removeRows$$($rowKeys$$2$$) {
      var $i$$175$$, $row$$24$$, $rowIdx$$2$$;
      for ($i$$175$$ = 0;$i$$175$$ < $rowKeys$$2$$.length;$i$$175$$++) {
        $rowIdx$$2$$ = $rowKeys$$2$$[$i$$175$$].index - $i$$175$$, $row$$24$$ = new $oj$$14$$.$ArrayRow$({}, null), $row$$24$$.index = $rowIdx$$2$$, $oj$$14$$.$FlattenedTreeRowSet$.$superclass$.$_handleEvent$.call($rowSet$$4$$, $oj$$14$$.$RowSet$.$EventType$.REMOVE, $row$$24$$);
      }
    };
  };
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.add = function $$oj$$14$$$$FlattenedTreeRowSet$$$add$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.add", {add:$oj$$14$$.$FlattenedTreeRowSet$.prototype.add});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.at = function $$oj$$14$$$$FlattenedTreeRowSet$$$at$($index$$152$$) {
    var $nodeSet$$29$$ = this.$_currentNodeSet$;
    $index$$152$$ = $nodeSet$$29$$.$getStart$() + $index$$152$$;
    return new $oj$$14$$.$ArrayRow$($nodeSet$$29$$.getData($index$$152$$), {context:$nodeSet$$29$$.getMetadata($index$$152$$)});
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.at", {at:$oj$$14$$.$FlattenedTreeRowSet$.prototype.at});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.clone = function $$oj$$14$$$$FlattenedTreeRowSet$$$clone$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.clone", {clone:$oj$$14$$.$FlattenedTreeRowSet$.prototype.clone});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.collapse = function $$oj$$14$$$$FlattenedTreeRowSet$$$collapse$($rowKey$$17$$) {
    this.$_data$.collapse($rowKey$$17$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.collapse", {collapse:$oj$$14$$.$FlattenedTreeRowSet$.prototype.collapse});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.expand = function $$oj$$14$$$$FlattenedTreeRowSet$$$expand$($rowKey$$18$$) {
    this.$_data$.expand($rowKey$$18$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.expand", {expand:$oj$$14$$.$FlattenedTreeRowSet$.prototype.expand});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.fetch = function $$oj$$14$$$$FlattenedTreeRowSet$$$fetch$($options$$246$$) {
    $options$$246$$ = $options$$246$$ || {};
    null != $options$$246$$.startIndex && (this.$_startIndex$ = $options$$246$$.startIndex);
    var $rangeCount$$ = Number.MAX_VALUE;
    null != $options$$246$$.pageSize && ($rangeCount$$ = $options$$246$$.pageSize);
    this.$_data$.$fetchRows$({start:this.$_startIndex$, count:$rangeCount$$}, {success:function($nodeSet$$30$$) {
      this.$_handleFetchRowsSuccess$($nodeSet$$30$$);
    }.bind(this), error:function() {
    }.bind(this)});
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.fetch", {fetch:$oj$$14$$.$FlattenedTreeRowSet$.prototype.fetch});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.get = function $$oj$$14$$$$FlattenedTreeRowSet$$$get$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.get", {get:$oj$$14$$.$FlattenedTreeRowSet$.prototype.get});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.hasMore = function $$oj$$14$$$$FlattenedTreeRowSet$$$hasMore$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return!1;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.hasMore", {hasMore:$oj$$14$$.$FlattenedTreeRowSet$.prototype.hasMore});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.indexOf = function $$oj$$14$$$$FlattenedTreeRowSet$$$indexOf$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return 0;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.indexOf", {indexOf:$oj$$14$$.$FlattenedTreeRowSet$.prototype.indexOf});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.isEmpty = function $$oj$$14$$$$FlattenedTreeRowSet$$$isEmpty$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return!0;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.isEmpty", {isEmpty:$oj$$14$$.$FlattenedTreeRowSet$.prototype.isEmpty});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.on = function $$oj$$14$$$$FlattenedTreeRowSet$$$on$($eventType$$31$$, $eventHandler$$8$$) {
    if ("expand" == $eventType$$31$$ || "collapse" == $eventType$$31$$) {
      this.$_data$.on($eventType$$31$$, $eventHandler$$8$$);
    } else {
      $oj$$14$$.$FlattenedTreeRowSet$.$superclass$.on.call(this, $eventType$$31$$, $eventHandler$$8$$);
    }
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.on", {on:$oj$$14$$.$FlattenedTreeRowSet$.prototype.on});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.off = function $$oj$$14$$$$FlattenedTreeRowSet$$$off$($eventType$$32$$, $eventHandler$$9$$) {
    "expand" == $eventType$$32$$ || "collapse" == $eventType$$32$$ ? this.$_data$.off($eventType$$32$$, $eventHandler$$9$$) : $oj$$14$$.$FlattenedTreeRowSet$.$superclass$.off.call(this, $eventType$$32$$, $eventHandler$$9$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.off", {off:$oj$$14$$.$FlattenedTreeRowSet$.prototype.off});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.remove = function $$oj$$14$$$$FlattenedTreeRowSet$$$remove$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.remove", {remove:$oj$$14$$.$FlattenedTreeRowSet$.prototype.remove});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.reset = function $$oj$$14$$$$FlattenedTreeRowSet$$$reset$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.reset", {reset:$oj$$14$$.$FlattenedTreeRowSet$.prototype.reset});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.size = function $$oj$$14$$$$FlattenedTreeRowSet$$$size$() {
    var $range$$21$$ = this.$_data$.$getFetchedRange$();
    return $range$$21$$.end - $range$$21$$.start;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.size", {size:$oj$$14$$.$FlattenedTreeRowSet$.prototype.size});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.sort = function $$oj$$14$$$$FlattenedTreeRowSet$$$sort$($criteria$$7$$) {
    return this.$_data$.getWrappedDataSource().sort($criteria$$7$$, {success:function($nodeSet$$31$$) {
      this.$_handleFetchRowsSuccess$($nodeSet$$31$$);
      $oj$$14$$.$FlattenedTreeRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$14$$.$RowSet$.$EventType$.SORT, null);
    }.bind(this), error:function() {
    }.bind(this)});
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.sort", {sort:$oj$$14$$.$FlattenedTreeRowSet$.prototype.sort});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.startIndex = function $$oj$$14$$$$FlattenedTreeRowSet$$$startIndex$() {
    return 0;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.startIndex", {startIndex:$oj$$14$$.$FlattenedTreeRowSet$.prototype.startIndex});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.totalSize = function $$oj$$14$$$$FlattenedTreeRowSet$$$totalSize$() {
    return-1;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeRowSet.prototype.totalSize", {totalSize:$oj$$14$$.$FlattenedTreeRowSet$.prototype.totalSize});
  $oj$$14$$.$FlattenedTreeRowSet$.prototype.$_handleFetchRowsSuccess$ = function $$oj$$14$$$$FlattenedTreeRowSet$$$$_handleFetchRowsSuccess$$($nodeSet$$32$$) {
    this.$_currentNodeSet$ = $nodeSet$$32$$;
  };
  $oj$$14$$.$TableDataSource$ = function $$oj$$14$$$$TableDataSource$$($data$$100$$, $options$$251$$) {
    if (this.constructor == $oj$$14$$.$TableDataSource$) {
      throw Error($oj$$14$$.$TableDataSource$.$_LOGGER_MSG$.$_ERR_TABLE_DATASOURCE_INSTANTIATED_SUMMARY$ + "\n" + $oj$$14$$.$TableDataSource$.$_LOGGER_MSG$.$_ERR_TABLE_DATASOURCE_INSTANTIATED_DETAIL$);
    }
    this.data = $data$$100$$;
    this.options = $options$$251$$;
    this.$isFetching$ = !1;
    this.$_startIndex$ = 0;
    this.Init();
  };
  $goog$exportPath_$$("TableDataSource", $oj$$14$$.$TableDataSource$, $oj$$14$$);
  $oj$$14$$.$Object$.$createSubclass$($oj$$14$$.$TableDataSource$, $oj$$14$$.$DataSource$, "oj.TableDataSource");
  $oj$$14$$.$TableDataSource$.prototype.Init = function $$oj$$14$$$$TableDataSource$$$Init$() {
    $oj$$14$$.$TableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.Init", {Init:$oj$$14$$.$TableDataSource$.prototype.Init});
  $oj$$14$$.$TableDataSource$.prototype.at = function $$oj$$14$$$$TableDataSource$$$at$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.at", {at:$oj$$14$$.$TableDataSource$.prototype.at});
  $oj$$14$$.$TableDataSource$.prototype.fetch = function $$oj$$14$$$$TableDataSource$$$fetch$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.fetch", {fetch:$oj$$14$$.$TableDataSource$.prototype.fetch});
  $oj$$14$$.$TableDataSource$.prototype.get = function $$oj$$14$$$$TableDataSource$$$get$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return null;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.get", {get:$oj$$14$$.$TableDataSource$.prototype.get});
  $oj$$14$$.$TableDataSource$.prototype.getCapability = function $$oj$$14$$$$TableDataSource$$$getCapability$() {
    return null;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.getCapability", {getCapability:$oj$$14$$.$TableDataSource$.prototype.getCapability});
  $oj$$14$$.$TableDataSource$.prototype.hasMore = function $$oj$$14$$$$TableDataSource$$$hasMore$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return!1;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.hasMore", {hasMore:$oj$$14$$.$TableDataSource$.prototype.hasMore});
  $oj$$14$$.$TableDataSource$.prototype.indexOf = function $$oj$$14$$$$TableDataSource$$$indexOf$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return 0;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.indexOf", {indexOf:$oj$$14$$.$TableDataSource$.prototype.indexOf});
  $oj$$14$$.$TableDataSource$.prototype.size = function $$oj$$14$$$$TableDataSource$$$size$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return 0;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.size", {size:$oj$$14$$.$TableDataSource$.prototype.size});
  $oj$$14$$.$TableDataSource$.prototype.sort = function $$oj$$14$$$$TableDataSource$$$sort$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.sort", {sort:$oj$$14$$.$TableDataSource$.prototype.sort});
  $oj$$14$$.$TableDataSource$.prototype.startIndex = function $$oj$$14$$$$TableDataSource$$$startIndex$($startIndex$$6$$) {
    null != $startIndex$$6$$ && (this.$_startIndex$ = $startIndex$$6$$);
    return this.$_startIndex$;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.startIndex", {startIndex:$oj$$14$$.$TableDataSource$.prototype.startIndex});
  $oj$$14$$.$TableDataSource$.prototype.totalSize = function $$oj$$14$$$$TableDataSource$$$totalSize$() {
    $oj$$14$$.$Assert$.$failedInAbstractFunction$();
    return 0;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDataSource.prototype.totalSize", {totalSize:$oj$$14$$.$TableDataSource$.prototype.totalSize});
  $oj$$14$$.$TableDataSource$.$EventType$ = {ADD:"add", REMOVE:"remove", RESET:"reset", REFRESH:"refresh", SORT:"sort", CHANGE:"change", REQUEST:"request", SYNC:"sync", ERROR:"error"};
  $goog$exportPath_$$("TableDataSource.EventType", $oj$$14$$.$TableDataSource$.$EventType$, $oj$$14$$);
  $oj$$14$$.$TableDataSource$.$_LOGGER_MSG$ = {_ERR_TABLE_DATASOURCE_INSTANTIATED_SUMMARY:"oj.TableDataSource constructor called.", _ERR_TABLE_DATASOURCE_INSTANTIATED_DETAIL:"Please do not instantiate oj.TableDataSource. Please use one of the subclasses instead such as oj.ArrayTableDataSource or oj.CollectionTableDataSource.", _ERR_DATA_INVALID_TYPE_SUMMARY:"Invalid data type.", _ERR_DATA_INVALID_TYPE_DETAIL:"Please specify the appropriate data type."};
  $goog$exportPath_$$("TableDataSource._LOGGER_MSG", $oj$$14$$.$TableDataSource$.$_LOGGER_MSG$, $oj$$14$$);
  $oj$$14$$.$PagingTableDataSource$ = function $$oj$$14$$$$PagingTableDataSource$$($dataSource$$7$$) {
    if (!($dataSource$$7$$ instanceof $oj$$14$$.$TableDataSource$)) {
      throw Error($oj$$14$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$14$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    this.$dataSource$ = $dataSource$$7$$;
    this.$_startIndex$ = 0;
    this.Init();
  };
  $goog$exportPath_$$("PagingTableDataSource", $oj$$14$$.$PagingTableDataSource$, $oj$$14$$);
  $oj$$14$$.$Object$.$createSubclass$($oj$$14$$.$PagingTableDataSource$, $oj$$14$$.$PagingDataSource$, "oj.PagingTableDataSource");
  $oj$$14$$.$PagingTableDataSource$.prototype.Init = function $$oj$$14$$$$PagingTableDataSource$$$Init$() {
    $oj$$14$$.$PagingTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.Init", {Init:$oj$$14$$.$PagingTableDataSource$.prototype.Init});
  $oj$$14$$.$PagingTableDataSource$.prototype.getWrappedDataSource = function $$oj$$14$$$$PagingTableDataSource$$$getWrappedDataSource$() {
    return this.$dataSource$;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getWrappedDataSource", {getWrappedDataSource:$oj$$14$$.$PagingTableDataSource$.prototype.getWrappedDataSource});
  $oj$$14$$.$PagingTableDataSource$.prototype.fetch = function $$oj$$14$$$$PagingTableDataSource$$$fetch$($options$$254$$) {
    null != $options$$254$$ && (this.$_startIndex$ = $options$$254$$.startIndex);
    $options$$254$$.pageSize = null != $options$$254$$.pageSize ? $options$$254$$.pageSize : this.$_pageSize$;
    $options$$254$$.startIndex = this.$_startIndex$;
    this.$dataSource$.fetch($options$$254$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.fetch", {fetch:$oj$$14$$.$PagingTableDataSource$.prototype.fetch});
  $oj$$14$$.$PagingTableDataSource$.prototype.next = function $$oj$$14$$$$PagingTableDataSource$$$next$() {
    this.$dataSource$.totalSize() > this.$_startIndex$ && (this.$_currentStartIndex$ = this.$_currentStartIndex$ ? this.$_currentStartIndex$ + this.$_pageSize$ : this.$_startIndex$ + this.$_pageSize$, this.$_currentPageSize$ += this.$_pageSize$, this.fetch({startIndex:this.$_currentStartIndex$, pageSize:this.$_pageSize$, fetchType:"next"}));
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.next", {next:$oj$$14$$.$PagingTableDataSource$.prototype.next});
  $oj$$14$$.$PagingTableDataSource$.prototype.previous = function $$oj$$14$$$$PagingTableDataSource$$$previous$() {
    if (0 != this.$_startIndex$ || -1 != this.$_startIndex$) {
      this.$_startIndex$ -= this.$_pageSize$, this.$_startIndex$ = 0 > this.$_startIndex$ ? 0 : this.$_startIndex$, this.$_currentPageSize$ += this.$_pageSize$, this.fetch({startIndex:this.$_startIndex$, pageSize:this.$_currentPageSize$, fetchType:"previous"});
    }
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.previous", {previous:$oj$$14$$.$PagingTableDataSource$.prototype.previous});
  $oj$$14$$.$PagingTableDataSource$.prototype.setPageSize = function $$oj$$14$$$$PagingTableDataSource$$$setPageSize$($n$$21$$) {
    this.$_pageSize$ = $n$$21$$;
    this.$_currentPageSize$ = this.$_startIndex$ + $n$$21$$;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.setPageSize", {setPageSize:$oj$$14$$.$PagingTableDataSource$.prototype.setPageSize});
  $oj$$14$$.$PagingTableDataSource$.prototype.startIndex = function $$oj$$14$$$$PagingTableDataSource$$$startIndex$() {
    return this.$_startIndex$;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.startIndex", {startIndex:$oj$$14$$.$PagingTableDataSource$.prototype.startIndex});
  $oj$$14$$.$PagingTableDataSource$.prototype.at = function $$oj$$14$$$$PagingTableDataSource$$$at$($index$$154$$) {
    return this.$dataSource$.at($index$$154$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.at", {at:$oj$$14$$.$PagingTableDataSource$.prototype.at});
  $oj$$14$$.$PagingTableDataSource$.prototype.get = function $$oj$$14$$$$PagingTableDataSource$$$get$($id$$24$$) {
    return this.$dataSource$.get($id$$24$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.get", {get:$oj$$14$$.$PagingTableDataSource$.prototype.get});
  $oj$$14$$.$PagingTableDataSource$.prototype.getCapability = function $$oj$$14$$$$PagingTableDataSource$$$getCapability$($feature$$12$$) {
    return this.$dataSource$.getCapability($feature$$12$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.getCapability", {getCapability:$oj$$14$$.$PagingTableDataSource$.prototype.getCapability});
  $oj$$14$$.$PagingTableDataSource$.prototype.hasMore = function $$oj$$14$$$$PagingTableDataSource$$$hasMore$() {
    return this.$dataSource$.hasMore();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.hasMore", {hasMore:$oj$$14$$.$PagingTableDataSource$.prototype.hasMore});
  $oj$$14$$.$PagingTableDataSource$.prototype.indexOf = function $$oj$$14$$$$PagingTableDataSource$$$indexOf$($model$$48$$) {
    return this.$dataSource$.indexOf($model$$48$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.indexOf", {indexOf:$oj$$14$$.$PagingTableDataSource$.prototype.indexOf});
  $oj$$14$$.$PagingTableDataSource$.prototype.on = function $$oj$$14$$$$PagingTableDataSource$$$on$($eventType$$33$$, $eventHandler$$10$$) {
    var $self$$67$$ = this, $dataSource$$8$$ = this.$dataSource$;
    return $eventType$$33$$ == $oj$$14$$.$TableDataSource$.$EventType$.SYNC ? $dataSource$$8$$.on($eventType$$33$$, function($event$$110$$) {
      $self$$67$$.$_handleSyncEvent$($event$$110$$, $eventHandler$$10$$);
    }) : $dataSource$$8$$.on($eventType$$33$$, $eventHandler$$10$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.on", {on:$oj$$14$$.$PagingTableDataSource$.prototype.on});
  $oj$$14$$.$PagingTableDataSource$.prototype.off = function $$oj$$14$$$$PagingTableDataSource$$$off$($eventType$$34$$, $eventHandler$$11$$) {
    return this.$dataSource$.off($eventType$$34$$, $eventHandler$$11$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.off", {off:$oj$$14$$.$PagingTableDataSource$.prototype.off});
  $oj$$14$$.$PagingTableDataSource$.prototype.size = function $$oj$$14$$$$PagingTableDataSource$$$size$() {
    return null != this.$_currentPageSize$ && 0 < this.$_currentPageSize$ && this.$dataSource$.size() > this.$_currentPageSize$ ? this.$_currentPageSize$ : this.$dataSource$.size();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.size", {size:$oj$$14$$.$PagingTableDataSource$.prototype.size});
  $oj$$14$$.$PagingTableDataSource$.prototype.sort = function $$oj$$14$$$$PagingTableDataSource$$$sort$($criteria$$9$$) {
    this.$dataSource$.sort($criteria$$9$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.sort", {sort:$oj$$14$$.$PagingTableDataSource$.prototype.sort});
  $oj$$14$$.$PagingTableDataSource$.prototype.totalSize = function $$oj$$14$$$$PagingTableDataSource$$$totalSize$() {
    return this.$dataSource$.totalSize();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("PagingTableDataSource.prototype.totalSize", {totalSize:$oj$$14$$.$PagingTableDataSource$.prototype.totalSize});
  $oj$$14$$.$PagingTableDataSource$.prototype.$_handleSyncEvent$ = function $$oj$$14$$$$PagingTableDataSource$$$$_handleSyncEvent$$($event$$111$$, $eventHandler$$12$$) {
    if ("next" == $event$$111$$.fetchType) {
      var $dataSource$$10$$ = this.$dataSource$, $startIndex$$7$$ = $event$$111$$.startIndex, $pageSize$$4$$ = $event$$111$$.pageSize;
      this.$_startIndex$ = 0;
      var $i$$176$$;
      for ($i$$176$$ = $startIndex$$7$$;$i$$176$$ < $startIndex$$7$$ + $pageSize$$4$$;$i$$176$$++) {
        $dataSource$$10$$.handleEvent($oj$$14$$.$RowSet$.$EventType$.ADD, this.$dataSource$.at($i$$176$$));
      }
    } else {
      $eventHandler$$12$$($event$$111$$);
    }
  };
  $oj$$14$$.$ArrayTableDataSource$ = function $$oj$$14$$$$ArrayTableDataSource$$($data$$101$$, $options$$255$$) {
    this.data = {};
    if (!($data$$101$$ instanceof Array) && "function" != typeof $data$$101$$ && "function" != typeof $data$$101$$.$subscribe$) {
      throw Error($oj$$14$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$14$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    $oj$$14$$.$ArrayTableDataSource$.$superclass$.constructor.call(this, $data$$101$$, $options$$255$$);
    this.$_rowSet$ = new $oj$$14$$.$ArrayRowSet$($data$$101$$, this.options);
    this.$_addRowSetEventListeners$();
    if (null != $options$$255$$ && ("enabled" == $options$$255$$.startFetch || null == $options$$255$$.startFetch) || null == $options$$255$$) {
      var $self$$68$$ = this;
      setTimeout(function() {
        $self$$68$$.fetch({startFetch:"enabled"});
      }, 0);
    }
  };
  $goog$exportPath_$$("ArrayTableDataSource", $oj$$14$$.$ArrayTableDataSource$, $oj$$14$$);
  $oj$$14$$.$Object$.$createSubclass$($oj$$14$$.$ArrayTableDataSource$, $oj$$14$$.$TableDataSource$, "oj.ArrayTableDataSource");
  $oj$$14$$.$ArrayTableDataSource$.prototype.Init = function $$oj$$14$$$$ArrayTableDataSource$$$Init$() {
    $oj$$14$$.$ArrayTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.Init", {Init:$oj$$14$$.$ArrayTableDataSource$.prototype.Init});
  $oj$$14$$.$ArrayTableDataSource$.prototype.add = function $$oj$$14$$$$ArrayTableDataSource$$$add$($m$$22$$, $options$$256$$) {
    this.$_rowSet$.add($m$$22$$, $options$$256$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.add", {add:$oj$$14$$.$ArrayTableDataSource$.prototype.add});
  $oj$$14$$.$ArrayTableDataSource$.prototype.at = function $$oj$$14$$$$ArrayTableDataSource$$$at$($index$$155$$) {
    return this.$_rowSet$.at($index$$155$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.at", {at:$oj$$14$$.$ArrayTableDataSource$.prototype.at});
  $oj$$14$$.$ArrayTableDataSource$.prototype.fetch = function $$oj$$14$$$$ArrayTableDataSource$$$fetch$($options$$257$$) {
    $options$$257$$ = $options$$257$$ || {};
    null != $options$$257$$.startIndex && $oj$$14$$.$ArrayTableDataSource$.$superclass$.startIndex.call(this, $options$$257$$.startIndex);
    "enabled" == $options$$257$$.startFetch ? (this.$_rowSet$.isEmpty() || "undefined" === typeof this.$_rowSet$.size()) && this.$_rowSet$.fetch($options$$257$$) : this.$_rowSet$.fetch($options$$257$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.fetch", {fetch:$oj$$14$$.$ArrayTableDataSource$.prototype.fetch});
  $oj$$14$$.$ArrayTableDataSource$.prototype.get = function $$oj$$14$$$$ArrayTableDataSource$$$get$($id$$25$$) {
    return this.$_rowSet$.get($id$$25$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.get", {get:$oj$$14$$.$ArrayTableDataSource$.prototype.get});
  $oj$$14$$.$ArrayTableDataSource$.prototype.getCapability = function $$oj$$14$$$$ArrayTableDataSource$$$getCapability$() {
    return "full";
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.getCapability", {getCapability:$oj$$14$$.$ArrayTableDataSource$.prototype.getCapability});
  $oj$$14$$.$ArrayTableDataSource$.prototype.hasMore = function $$oj$$14$$$$ArrayTableDataSource$$$hasMore$() {
    return null != this.$_rowSet$ ? this.$_rowSet$.hasMore() : !1;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.hasMore", {hasMore:$oj$$14$$.$ArrayTableDataSource$.prototype.hasMore});
  $oj$$14$$.$ArrayTableDataSource$.prototype.indexOf = function $$oj$$14$$$$ArrayTableDataSource$$$indexOf$($row$$29$$) {
    return this.$_rowSet$.indexOf($row$$29$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.indexOf", {indexOf:$oj$$14$$.$ArrayTableDataSource$.prototype.indexOf});
  $oj$$14$$.$ArrayTableDataSource$.prototype.remove = function $$oj$$14$$$$ArrayTableDataSource$$$remove$($m$$23$$, $options$$258$$) {
    this.$_rowSet$.remove($m$$23$$, $options$$258$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.remove", {remove:$oj$$14$$.$ArrayTableDataSource$.prototype.remove});
  $oj$$14$$.$ArrayTableDataSource$.prototype.reset = function $$oj$$14$$$$ArrayTableDataSource$$$reset$($data$$103$$, $options$$259$$) {
    this.$_rowSet$.reset($data$$103$$, $options$$259$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.reset", {reset:$oj$$14$$.$ArrayTableDataSource$.prototype.reset});
  $oj$$14$$.$ArrayTableDataSource$.prototype.size = function $$oj$$14$$$$ArrayTableDataSource$$$size$() {
    return this.$_rowSet$.size();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.size", {size:$oj$$14$$.$ArrayTableDataSource$.prototype.size});
  $oj$$14$$.$ArrayTableDataSource$.prototype.sort = function $$oj$$14$$$$ArrayTableDataSource$$$sort$($criteria$$10_direction$$7$$) {
    var $key$$73$$ = $criteria$$10_direction$$7$$.key;
    $criteria$$10_direction$$7$$ = $criteria$$10_direction$$7$$.direction;
    var $comparator$$13$$ = null;
    "ascending" == $criteria$$10_direction$$7$$ ? $comparator$$13$$ = function $$comparator$$13$$$($row$$30$$) {
      return $$$$14$$.isFunction($row$$30$$.get) ? $row$$30$$.get($key$$73$$) : $row$$30$$[$key$$73$$]();
    } : "descending" == $criteria$$10_direction$$7$$ && ($comparator$$13$$ = function $$comparator$$13$$$($rowA$$, $rowB$$) {
      var $a$$72$$, $b$$44$$;
      $$$$14$$.isFunction($rowA$$.get) ? ($a$$72$$ = $rowA$$.get($key$$73$$), $b$$44$$ = $rowB$$.get($key$$73$$)) : ($a$$72$$ = $rowA$$[$key$$73$$](), $b$$44$$ = $rowB$$[$key$$73$$]());
      return $a$$72$$ === $b$$44$$ ? 0 : $a$$72$$ > $b$$44$$ ? -1 : 1;
    });
    this.$_rowSet$.comparator = $comparator$$13$$;
    this.$_rowSet$.sort();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.sort", {sort:$oj$$14$$.$ArrayTableDataSource$.prototype.sort});
  $oj$$14$$.$ArrayTableDataSource$.prototype.totalSize = function $$oj$$14$$$$ArrayTableDataSource$$$totalSize$() {
    return this.$_rowSet$.totalSize();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("ArrayTableDataSource.prototype.totalSize", {totalSize:$oj$$14$$.$ArrayTableDataSource$.prototype.totalSize});
  $oj$$14$$.$ArrayTableDataSource$.prototype.$_addRowSetEventListeners$ = function $$oj$$14$$$$ArrayTableDataSource$$$$_addRowSetEventListeners$$() {
    var $self$$69$$ = this;
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.ADD, function($event$$112$$) {
      $self$$69$$.$isFetching$ = !1;
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$69$$, $oj$$14$$.$TableDataSource$.$EventType$.ADD, $event$$112$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.REMOVE, function($event$$113$$) {
      $self$$69$$.$isFetching$ = !1;
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$69$$, $oj$$14$$.$TableDataSource$.$EventType$.REMOVE, $event$$113$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.REQUEST, function($event$$114$$) {
      $self$$69$$.$isFetching$ = !0;
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$69$$, $oj$$14$$.$TableDataSource$.$EventType$.REQUEST, $event$$114$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.RESET, function($event$$115$$) {
      $self$$69$$.$isFetching$ = !1;
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$69$$, $oj$$14$$.$TableDataSource$.$EventType$.RESET, $event$$115$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.SORT, function($event$$116$$) {
      $self$$69$$.$isFetching$ = !1;
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$69$$, $oj$$14$$.$TableDataSource$.$EventType$.SORT, $event$$116$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.CHANGE, function($event$$117$$) {
      $self$$69$$.$isFetching$ = !1;
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$69$$, $oj$$14$$.$TableDataSource$.$EventType$.CHANGE, $event$$117$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.SYNC, function($event$$118$$) {
      $self$$69$$.$isFetching$ = !1;
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$69$$, $oj$$14$$.$TableDataSource$.$EventType$.SYNC, $event$$118$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.ERROR, function($event$$119$$) {
      $self$$69$$.$isFetching$ = !1;
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$69$$, $oj$$14$$.$TableDataSource$.$EventType$.ERROR, $event$$119$$);
    });
  };
  (function() {
    $oj$$14$$.$__registerWidget$("oj.ojTable", $$$$14$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3ctable\x3e", widgetEventPrefix:"oj", options:{accessibility:null, data:null, emptyText:null, horizontalGridVisible:"enabled", rowRenderer:null, selectionMode:null, verticalGridVisible:"enabled", columns:[{renderer:null, className:null, field:null, footerClassName:null, footerRenderer:null, footerStyle:null, headerClassName:null, headerRenderer:null, headerStyle:null, headerText:null, id:null, 
    sortable:"auto", sortProperty:null, style:null}], columnsDefault:{renderer:null, className:null, field:null, footerClassName:null, footerRenderer:null, footerStyle:null, headerClassName:null, headerRenderer:null, headerStyle:null, headerText:null, sortable:"auto", sortProperty:null, style:null}, activeRow:null, preActiveRow:null, select:null, scroll:null}, $_BUNDLE_KEY$:{$_MSG_FETCHING_DATA$:"msgFetchingData", $_MSG_NO_DATA$:"msgNoData", $_LABEL_SELECT_COLUMN$:"labelSelectColumn", $_LABEL_SELECT_ROW$:"labelSelectRow"}, 
    $_LOGGER_MSG$:{$_ERR_PREACTIVEROW_ERROR_SUMMARY$:"Did not change active row due to error.", $_ERR_PREACTIVEROW_ERROR_DETAIL$:"Error detail: {error}.", $_ERR_ACTIVEROW_UNAVAILABLE_INDEX_SUMMARY$:"Did not change active row due to unavailable row index.", $_ERR_ACTIVEROW_UNAVAILABLE_INDEX_DETAIL$:"Unavailable row index: {rowIdx}.", $_ERR_REFRESHROW_INVALID_INDEX_SUMMARY$:"Invalid row index value.", $_ERR_REFRESHROW_INVALID_INDEX_DETAIL$:"Row index: {rowIdx}.", $_ERR_DATA_INVALID_TYPE_SUMMARY$:"Invalid data type.", 
    $_ERR_DATA_INVALID_TYPE_DETAIL$:"Please specify the appropriate data type."}, $_COLUMN_HEADER_ID$:"_headerColumn", $_COLUMN_HEADER_TEXT_ID$:"_headerColumnText", $_COLUMN_HEADER_ASC_ID$:"_headerColumnAsc", $_COLUMN_HEADER_DSC_ID$:"_headerColumnDsc", $_COLUMN_HEADER_ID_PREFIX$:"_hdrCol", $_OPTION_AUTO$:"auto", $_OPTION_ENABLED$:"enabled", $_OPTION_DISABLED$:"disabled", $_OPTION_NONE$:"none", $_OPTION_SELECTION_MODES$:{$_SINGLE$:"single", $_MULTIPLE$:"multiple"}, $_COLUMN_SORT_ORDER$:{$_ASCENDING$:"ascending", 
    $_DESCENDING$:"descending"}, $_KEYBOARD_CODES$:{$_KEYBOARD_CODE_CTRL$:17, $_KEYBOARD_CODE_SHIFT$:16, $_KEYBOARD_CODE_SPACEBAR$:32, $_KEYBOARD_CODE_ENTER$:13, $_KEYBOARD_CODE_UP$:38, $_KEYBOARD_CODE_DOWN$:40, $_KEYBOARD_CODE_LEFT$:37, $_KEYBOARD_CODE_RIGHT$:39, $_KEYBOARD_CODE_HOME$:36, $_KEYBOARD_CODE_END$:35, $_KEYBOARD_CODE_TAB$:9, $_KEYBOARD_CODE_ESC$:27, $_KEYBOARD_MODIFIER_SHIFT$:"shiftKey"}, activeRow:function($errDetail$$6_index$$156$$) {
      var $data$$104_errSummary$$6_oldIndex$$ = this.$_getData$();
      if (null == $errDetail$$6_index$$156$$) {
        if ($data$$104_errSummary$$6_oldIndex$$ && null != this.$_activeRowIndex$) {
          return this.$_activeRowIndex$;
        }
      } else {
        if (-1 != $errDetail$$6_index$$156$$ && (!$data$$104_errSummary$$6_oldIndex$$ || 0 == $data$$104_errSummary$$6_oldIndex$$.size() || -1 > $errDetail$$6_index$$156$$)) {
          throw $data$$104_errSummary$$6_oldIndex$$ = this.$_LOGGER_MSG$.$_ERR_ACTIVEROW_UNAVAILABLE_INDEX_SUMMARY$, $errDetail$$6_index$$156$$ = $oj$$14$$.$Translations$.$applyParameters$(this.$_LOGGER_MSG$.$_ERR_ACTIVEROW_UNAVAILABLE_INDEX_DETAIL$, {rowIdx:$errDetail$$6_index$$156$$}), Error($data$$104_errSummary$$6_oldIndex$$ + "\n" + $errDetail$$6_index$$156$$);
        }
        if (this.$_activeRowIndex$ != $errDetail$$6_index$$156$$) {
          $data$$104_errSummary$$6_oldIndex$$ = this.$_activeRowIndex$;
          try {
            this._trigger("preactiverow", null, {newRowIndex:$errDetail$$6_index$$156$$, oldRowIndex:$data$$104_errSummary$$6_oldIndex$$});
          } catch ($err$$10$$) {
            throw $data$$104_errSummary$$6_oldIndex$$ = this.$_LOGGER_MSG$.$_ERR_PREACTIVEROW_ERROR_SUMMARY$, $errDetail$$6_index$$156$$ = $oj$$14$$.$Translations$.$applyParameters$(this.$_LOGGER_MSG$.$_ERR_PREACTIVEROW_ERROR_DETAIL$, {error:$err$$10$$.toString()}), Error($data$$104_errSummary$$6_oldIndex$$ + "\n" + $errDetail$$6_index$$156$$);
          }
          this.$_activeRowIndex$ = $errDetail$$6_index$$156$$;
          this._trigger("activerow", null, {newRowIndex:$errDetail$$6_index$$156$$, oldRowIndex:$data$$104_errSummary$$6_oldIndex$$});
          this.$_setRowFocus$($errDetail$$6_index$$156$$, !0, null);
        }
        return $errDetail$$6_index$$156$$;
      }
      return-1;
    }, columnMetaData:function($columnIdx$$) {
      var $columns$$2$$ = this.$_getColumnDefs$();
      return null === $columnIdx$$ || 0 == arguments.length ? $columns$$2$$ : $columns$$2$$[$columnIdx$$];
    }, getNodeBySubId:function($columnIdx$$1_locator$$12_tableHeaderColumn$$) {
      if (null == $columnIdx$$1_locator$$12_tableHeaderColumn$$) {
        return this.element ? this.element[0] : null;
      }
      var $rowIdx$$3_subId$$11_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ = $columnIdx$$1_locator$$12_tableHeaderColumn$$.subId;
      if ("oj-table-cell" === $rowIdx$$3_subId$$11_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$) {
        return $rowIdx$$3_subId$$11_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ = $columnIdx$$1_locator$$12_tableHeaderColumn$$.rowIndex, $columnIdx$$1_locator$$12_tableHeaderColumn$$ = $columnIdx$$1_locator$$12_tableHeaderColumn$$.columnIndex, this.$_getTableDomUtils$().$getTableBodyCell$($rowIdx$$3_subId$$11_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$, $columnIdx$$1_locator$$12_tableHeaderColumn$$)[0];
      }
      if ("oj-table-header" === $rowIdx$$3_subId$$11_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ || "oj-table-sort-ascending" === $rowIdx$$3_subId$$11_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ || "oj-table-sort-descending" === $rowIdx$$3_subId$$11_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$) {
        if ($columnIdx$$1_locator$$12_tableHeaderColumn$$ = $columnIdx$$1_locator$$12_tableHeaderColumn$$.index, $columnIdx$$1_locator$$12_tableHeaderColumn$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$1_locator$$12_tableHeaderColumn$$), null != $columnIdx$$1_locator$$12_tableHeaderColumn$$) {
          if ("oj-table-header" === $rowIdx$$3_subId$$11_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$) {
            return $columnIdx$$1_locator$$12_tableHeaderColumn$$[0];
          }
          $rowIdx$$3_subId$$11_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ = "oj-table-sort-ascending" === $rowIdx$$3_subId$$11_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ ? $columnIdx$$1_locator$$12_tableHeaderColumn$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$) : $columnIdx$$1_locator$$12_tableHeaderColumn$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$);
          if (0 < $rowIdx$$3_subId$$11_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$.length) {
            return $rowIdx$$3_subId$$11_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$[0];
          }
        }
      } else {
        if ("oj-table-footer" === $rowIdx$$3_subId$$11_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ && ($columnIdx$$1_locator$$12_tableHeaderColumn$$ = $columnIdx$$1_locator$$12_tableHeaderColumn$$.index, $rowIdx$$3_subId$$11_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$ = this.$_getTableDomUtils$().$getTableFooterCell$($columnIdx$$1_locator$$12_tableHeaderColumn$$), null != $rowIdx$$3_subId$$11_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$)) {
          return $rowIdx$$3_subId$$11_tableFooterCell_tableHeaderColumnSortAsc_tableHeaderColumnSortDsc$$[0];
        }
      }
      return null;
    }, refresh:function() {
      this._super();
      this.$_refresh$(!0);
    }, refreshRow:function($errDetail$$7_row$$31_rowIdx$$4$$) {
      var $data$$105_errSummary$$7$$ = this.$_getData$();
      if (!$data$$105_errSummary$$7$$) {
        return!1;
      }
      if (isNaN($errDetail$$7_row$$31_rowIdx$$4$$) || 0 > $errDetail$$7_row$$31_rowIdx$$4$$ || $errDetail$$7_row$$31_rowIdx$$4$$ > $data$$105_errSummary$$7$$.size() - 1) {
        throw $data$$105_errSummary$$7$$ = this.$_LOGGER_MSG$.$_ERR_REFRESHROW_INVALID_INDEX_SUMMARY$, $errDetail$$7_row$$31_rowIdx$$4$$ = $oj$$14$$.$Translations$.$applyParameters$(this.$_LOGGER_MSG$.$_ERR_REFRESHROW_INVALID_INDEX_DETAIL$, {rowIdx:$errDetail$$7_row$$31_rowIdx$$4$$.toString()}), new RangeError($data$$105_errSummary$$7$$ + "\n" + $errDetail$$7_row$$31_rowIdx$$4$$);
      }
      $errDetail$$7_row$$31_rowIdx$$4$$ = $data$$105_errSummary$$7$$.at($errDetail$$7_row$$31_rowIdx$$4$$);
      if (null == $errDetail$$7_row$$31_rowIdx$$4$$) {
        return!1;
      }
      try {
        this.$_asyncRefreshTableBodyRow$($errDetail$$7_row$$31_rowIdx$$4$$);
      } catch ($e$$74$$) {
        throw $e$$74$$;
      }
      return!0;
    }, selection:function($selection$$2_selectionIdxs$$) {
      if (null != $selection$$2_selectionIdxs$$) {
        this.$_clearSelectedRows$();
        var $i$$177_selectedRowIdxs$$, $j$$28_rangeArray_startRowIdx$$, $endColumnIdx_rangeObj_selectedColumnIdxs$$, $endRowIdx_rowSelection$$, $rangeCount$$1_startColumnIdx$$;
        for ($i$$177_selectedRowIdxs$$ = 0;$i$$177_selectedRowIdxs$$ < $selection$$2_selectionIdxs$$.length;$i$$177_selectedRowIdxs$$++) {
          $endColumnIdx_rangeObj_selectedColumnIdxs$$ = $selection$$2_selectionIdxs$$[$i$$177_selectedRowIdxs$$];
          if (null == $endColumnIdx_rangeObj_selectedColumnIdxs$$.start || null == $endColumnIdx_rangeObj_selectedColumnIdxs$$.end) {
            return console.log("Error: Invalid range object in selection. Both start and end objects must be specified"), null;
          }
          $j$$28_rangeArray_startRowIdx$$ = $endColumnIdx_rangeObj_selectedColumnIdxs$$.start.row;
          $endRowIdx_rowSelection$$ = $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.row;
          $rangeCount$$1_startColumnIdx$$ = $endColumnIdx_rangeObj_selectedColumnIdxs$$.start.column;
          $endColumnIdx_rangeObj_selectedColumnIdxs$$ = $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.column;
          if (null != $j$$28_rangeArray_startRowIdx$$ && null != $endRowIdx_rowSelection$$ && null != $rangeCount$$1_startColumnIdx$$ && null != $endColumnIdx_rangeObj_selectedColumnIdxs$$) {
            return console.log("Error: Invalid range object in selection - Can only support row or column selection. Not both"), null;
          }
          if (null != $j$$28_rangeArray_startRowIdx$$ && null != $endRowIdx_rowSelection$$) {
            for (;$j$$28_rangeArray_startRowIdx$$ <= $endRowIdx_rowSelection$$;$j$$28_rangeArray_startRowIdx$$++) {
              try {
                this.$_setRowSelection$($j$$28_rangeArray_startRowIdx$$, !0, null);
              } catch ($e$$75$$) {
                console.log("Error: " + $e$$75$$);
              }
            }
          } else {
            if (null != $rangeCount$$1_startColumnIdx$$ && null != $endColumnIdx_rangeObj_selectedColumnIdxs$$) {
              for ($j$$28_rangeArray_startRowIdx$$ = $rangeCount$$1_startColumnIdx$$;$j$$28_rangeArray_startRowIdx$$ <= $endColumnIdx_rangeObj_selectedColumnIdxs$$;$j$$28_rangeArray_startRowIdx$$++) {
                try {
                  this.$_setHeaderColumnSelection$($j$$28_rangeArray_startRowIdx$$, !0, null);
                } catch ($e$$76$$) {
                  console.log("Error: " + $e$$76$$);
                }
              }
            } else {
              return console.log("Error: Invalid range object in selection -"), console.log("start row: " + $j$$28_rangeArray_startRowIdx$$), console.log("end row: " + $endRowIdx_rowSelection$$), console.log("start column: " + $rangeCount$$1_startColumnIdx$$), console.log("end column: " + $endColumnIdx_rangeObj_selectedColumnIdxs$$), null;
            }
          }
        }
        return this.selection();
      }
      $i$$177_selectedRowIdxs$$ = this.$_getSelectedRowIdxs$();
      $endColumnIdx_rangeObj_selectedColumnIdxs$$ = this.$_getSelectedHeaderColumnIdxs$();
      $selection$$2_selectionIdxs$$ = null;
      $endRowIdx_rowSelection$$ = !0;
      if (null != $i$$177_selectedRowIdxs$$ && 0 < $i$$177_selectedRowIdxs$$.length) {
        $selection$$2_selectionIdxs$$ = $i$$177_selectedRowIdxs$$;
      } else {
        if (null != $endColumnIdx_rangeObj_selectedColumnIdxs$$ && 0 < $endColumnIdx_rangeObj_selectedColumnIdxs$$.length) {
          $selection$$2_selectionIdxs$$ = $endColumnIdx_rangeObj_selectedColumnIdxs$$, $endRowIdx_rowSelection$$ = !1;
        } else {
          return null;
        }
      }
      $j$$28_rangeArray_startRowIdx$$ = [];
      $rangeCount$$1_startColumnIdx$$ = 0;
      var $previousIdx$$ = null, $selectionIdx$$;
      for ($i$$177_selectedRowIdxs$$ = 0;$i$$177_selectedRowIdxs$$ < $selection$$2_selectionIdxs$$.length;$i$$177_selectedRowIdxs$$++) {
        $selectionIdx$$ = $selection$$2_selectionIdxs$$[$i$$177_selectedRowIdxs$$], 0 == $i$$177_selectedRowIdxs$$ ? ($endColumnIdx_rangeObj_selectedColumnIdxs$$ = [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.start = [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.end = [], $endRowIdx_rowSelection$$ ? ($endColumnIdx_rangeObj_selectedColumnIdxs$$.start.row = $selectionIdx$$, $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.row = $selectionIdx$$) : ($endColumnIdx_rangeObj_selectedColumnIdxs$$.start.column = 
        $selectionIdx$$, $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.column = $selectionIdx$$), $j$$28_rangeArray_startRowIdx$$[0] = $endColumnIdx_rangeObj_selectedColumnIdxs$$) : ($endColumnIdx_rangeObj_selectedColumnIdxs$$ = $j$$28_rangeArray_startRowIdx$$[$rangeCount$$1_startColumnIdx$$], $endRowIdx_rowSelection$$ ? $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.row = $selectionIdx$$ : $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.column = $selectionIdx$$, $selectionIdx$$ != $previousIdx$$ + 
        1 && ($endRowIdx_rowSelection$$ ? ($endColumnIdx_rangeObj_selectedColumnIdxs$$.end.row = $previousIdx$$, $endColumnIdx_rangeObj_selectedColumnIdxs$$ = [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.start = [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.end = [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.start.row = $selectionIdx$$, $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.row = $selectionIdx$$) : ($endColumnIdx_rangeObj_selectedColumnIdxs$$.end.column = $previousIdx$$, $endColumnIdx_rangeObj_selectedColumnIdxs$$ = 
        [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.start = [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.end = [], $endColumnIdx_rangeObj_selectedColumnIdxs$$.start.column = $selectionIdx$$, $endColumnIdx_rangeObj_selectedColumnIdxs$$.end.column = $selectionIdx$$), $rangeCount$$1_startColumnIdx$$++, $j$$28_rangeArray_startRowIdx$$[$rangeCount$$1_startColumnIdx$$] = $endColumnIdx_rangeObj_selectedColumnIdxs$$)), $previousIdx$$ = $selectionIdx$$;
      }
      return $j$$28_rangeArray_startRowIdx$$;
    }, scrollLeft:function($value$$176$$) {
      if (null != $value$$176$$) {
        if (isNaN($value$$176$$) || 0 > $value$$176$$) {
          return console.log("Error: Invalid scrollLeft value: " + $value$$176$$), null;
        }
        this.$_getTableDomUtils$().$getScroller$().scrollLeft($value$$176$$);
      }
      return this.$_getTableDomUtils$().$getScroller$().scrollLeft();
    }, scrollTop:function($value$$177$$) {
      if (null != $value$$177$$) {
        if (isNaN($value$$177$$) || 0 > $value$$177$$) {
          return console.log("Error: Invalid scrollTop value: " + $value$$177$$), null;
        }
        this.$_getTableDomUtils$().$getScroller$().scrollTop($value$$177$$);
      }
      return this.$_getTableDomUtils$().$getScroller$().scrollTop();
    }, _ComponentCreate:function() {
      this._super();
      this.$_draw$();
      this.$_registerCustomEvents$();
      this._on(this.$_events$);
      this.$_registerDomEventListeners$();
      this.$_registerDataSourceEventListeners$();
    }, _destroy:function() {
      this.$_getData$();
      this.$_unregisterDataSourceEventListeners$();
      this.$_getTableDomUtils$().$getTableBody$().removeAttr($oj$$14$$.Components.$_OJ_CONTAINER_ATTR$);
      this.element.children().remove("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_CLASS$);
      this.element.children().remove("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_BODY_CLASS$);
      this.element.children().remove("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_CLASS$);
      var $tableContainer$$ = this.$_getTableDomUtils$().$getTableContainer$();
      null != $tableContainer$$ && ($tableContainer$$[0].parentNode.appendChild(this.element), $tableContainer$$[0].parentNode.removeChild($tableContainer$$[0]));
      this.element.removeClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_CLASS$);
    }, $_draw$:function() {
      this.element.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_CLASS$);
      this.$_getTableDomUtils$().$createInitialTable$(this.$_isTableHeaderless$(), this.$_isTableFooterless$(), this.$_handleContextMenuBeforeShow$.bind(this), this.$_handleContextMenuSelect$.bind(this));
      this.$_getTableDomUtils$().$styleInitialTable$();
      this.$_refreshTableHeader$();
      this.$_refreshTableFooter$();
      this.$_getTableDomUtils$().$refreshTableDimensions$(!0);
      this.options.disabled && this.disable();
      this.$_registerResizeListener$(this.$_getTableDomUtils$().$getTableContainer$());
    }, $_events$:{blur:function($event$$120$$) {
      var $table$$ = this.$_getTableDomUtils$().$getTable$();
      0 < $table$$.has($event$$120$$.relatedTarget).length || null != $event$$120$$.originalEvent && $event$$120$$.originalEvent.explicitOriginalTarget == $table$$[0] || (this.$_clearKeyboardKeys$(), this.$_clearFocusedHeaderColumn$(), this.$_clearFocusedRow$(), this.$_setTableNavigationMode$(!1));
    }, "click .oj-table-checkbox-acc-select-column":function($event$$121$$) {
      var $columnIdx$$2$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$121$$.currentTarget)), $selected$$13$$ = $$$$14$$($event$$121$$.currentTarget).is(":checked");
      $selected$$13$$ && this.$_setHeaderColumnFocus$($columnIdx$$2$$, !0, null);
      this.$_setHeaderColumnSelection$($columnIdx$$2$$, $selected$$13$$, $event$$121$$.currentTarget, $event$$121$$);
      $event$$121$$.stopPropagation();
    }, "click .oj-table-checkbox-acc-select-row":function($event$$122$$) {
      var $rowIdx$$5$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($event$$122$$.currentTarget)), $selected$$14$$ = $$$$14$$($event$$122$$.currentTarget).is(":checked");
      $selected$$14$$ && this.$_setRowFocus$($rowIdx$$5$$, !0, null);
      this.$_setRowSelection$($rowIdx$$5$$, $selected$$14$$, $event$$122$$.currentTarget, $event$$122$$);
      $event$$122$$.stopPropagation();
    }, keydown:function($event$$123$$) {
      if (!(null != this.$_getTableDomUtils$().$getTableFooter$() && 0 < this.$_getTableDomUtils$().$getTableFooter$().has($event$$123$$.target).length) && (this.$_addKeyboardKey$($event$$123$$.keyCode), 1 == this.$_getKeyboardKeys$().length || 2 == this.$_getKeyboardKeys$().length)) {
        if (this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_SPACEBAR$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_HOME$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_END$)) {
          $event$$123$$.preventDefault(), $event$$123$$.stopPropagation();
        }
        this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) ? this.$_handleKeydownUpDown$($event$$123$$) : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_LEFT$) || this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_RIGHT$) ? this.$_handleKeydownLeftRight$($event$$123$$) : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_TAB$) && this.$_handleKeydownTab$($event$$123$$);
      }
    }, keyup:function($event$$124$$) {
      if (!(null != this.$_getTableDomUtils$().$getTableFooter$() && 0 < this.$_getTableDomUtils$().$getTableFooter$().has($event$$124$$.target).length)) {
        if (1 == this.$_getKeyboardKeys$().length) {
          var $keyboardCode1$$ = this.$_getKeyboardKeys$()[0];
          $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_SPACEBAR$ ? this.$_handleKeyupSpacebar$($event$$124$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_ENTER$ ? this.$_handleKeyupEnter$($event$$124$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_HOME$ ? this.$_handleKeyupHome$($event$$124$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_END$ ? this.$_handleKeyupEnd$($event$$124$$) : $keyboardCode1$$ == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_ESC$ && 
          this.$_handleKeyupEsc$($event$$124$$);
          this.$_removeKeyboardKey$($keyboardCode1$$);
        }
        this.$_removeKeyboardKey$($event$$124$$.keyCode);
      }
    }, "mouseenter .oj-table-column-header":function($columnIdx$$3_event$$125$$) {
      $columnIdx$$3_event$$125$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($columnIdx$$3_event$$125$$.currentTarget));
      this.$_showTableHeaderColumnSortLink$($columnIdx$$3_event$$125$$);
    }, "mouseleave .oj-table-column-header":function($columnIdx$$4_event$$126$$) {
      $columnIdx$$4_event$$126$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($columnIdx$$4_event$$126$$.currentTarget));
      this.$_hideTableHeaderColumnSortLink$($columnIdx$$4_event$$126$$, !0);
      this.$_hideTableHeaderColumnSortLink$($columnIdx$$4_event$$126$$, !1);
    }, "mouseenter .oj-table-data-cell":function($event$$127_rowIdx$$6$$) {
      $event$$127_rowIdx$$6$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($event$$127_rowIdx$$6$$.currentTarget));
      this.$_updateRowCellsClass$($event$$127_rowIdx$$6$$, {hover:!0});
    }, "mouseleave .oj-table-data-cell":function($event$$128_rowIdx$$7$$) {
      $event$$128_rowIdx$$7$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($event$$128_rowIdx$$7$$.currentTarget));
      this.$_updateRowCellsClass$($event$$128_rowIdx$$7$$, {hover:!1});
    }, "click .oj-table-column-header-asc-link":function($event$$129$$) {
      this.$_checkFocus$();
      var $columnIdx$$5$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$129$$.target)), $tableHeaderColumn$$1$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$5$$);
      $tableHeaderColumn$$1$$ && ($tableHeaderColumn$$1$$.data("sorted") == this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ ? this.$_handleSortTableHeaderColumn$($columnIdx$$5$$, !1) : this.$_handleSortTableHeaderColumn$($columnIdx$$5$$, !0), $event$$129$$.preventDefault(), $event$$129$$.stopPropagation());
    }, "click .oj-table-column-header-acc-asc-link":function($event$$130$$) {
      this.$_checkFocus$();
      var $columnIdx$$6$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$130$$.target));
      this.$_handleSortTableHeaderColumn$($columnIdx$$6$$, !0);
      $event$$130$$.preventDefault();
      $event$$130$$.stopPropagation();
    }, "click .oj-table-column-header-dsc-link":function($event$$131$$) {
      this.$_checkFocus$();
      var $columnIdx$$7$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$131$$.target)), $tableHeaderColumn$$2$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$7$$);
      $tableHeaderColumn$$2$$ && ($tableHeaderColumn$$2$$.data("sorted") == this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ ? this.$_handleSortTableHeaderColumn$($columnIdx$$7$$, !0) : this.$_handleSortTableHeaderColumn$($columnIdx$$7$$, !1), $event$$131$$.preventDefault(), $event$$131$$.stopPropagation());
    }, "click .oj-table-column-header-acc-dsc-link":function($event$$132$$) {
      this.$_checkFocus$();
      var $columnIdx$$8$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$132$$.target));
      this.$_handleSortTableHeaderColumn$($columnIdx$$8$$, !1);
      $event$$132$$.preventDefault();
      $event$$132$$.stopPropagation();
    }, "click .oj-table-data-cell":function($event$$133$$) {
      this.$_checkFocus$();
      var $rowIdx$$8$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($event$$133$$.currentTarget));
      this.$_setRowFocus$($rowIdx$$8$$, !0, $event$$133$$.currentTarget);
      if (1 == this.$_getKeyboardKeys$().length) {
        if (this.$_getKeyboardKeys$()[0] == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_SHIFT$) {
          var $lastSelectedRowIdx$$ = this.$_getLastRowSelection$();
          if (null != $lastSelectedRowIdx$$) {
            if ($rowIdx$$8$$ < $lastSelectedRowIdx$$) {
              var $i$$178$$;
              for ($i$$178$$ = $rowIdx$$8$$;$i$$178$$ <= $lastSelectedRowIdx$$;$i$$178$$++) {
                this.$_setRowSelection$($i$$178$$, !0, $event$$133$$.currentTarget, $event$$133$$);
              }
            } else {
              for ($i$$178$$ = $lastSelectedRowIdx$$;$i$$178$$ <= $rowIdx$$8$$;$i$$178$$++) {
                this.$_setRowSelection$($i$$178$$, !0, $event$$133$$.currentTarget, $event$$133$$);
              }
            }
          }
        } else {
          this.$_getKeyboardKeys$()[0] == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_CTRL$ && this.$_setRowSelection$($rowIdx$$8$$, !this.$_getRowSelection$($rowIdx$$8$$), $event$$133$$.currentTarget, $event$$133$$);
        }
      } else {
        0 == this.$_getKeyboardKeys$().length && this.$_setRowSelection$($rowIdx$$8$$, !this.$_getRowSelection$($rowIdx$$8$$), $event$$133$$.currentTarget, $event$$133$$);
      }
    }, "click .oj-table-column-header":function($event$$134$$) {
      this.$_checkFocus$();
      var $columnIdx$$9$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($event$$134$$.currentTarget));
      this.$_setHeaderColumnFocus$($columnIdx$$9$$, !0, $event$$134$$.currentTarget);
      if (1 == this.$_getKeyboardKeys$().length) {
        if (this.$_getKeyboardKeys$()[0] == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_SHIFT$) {
          var $lastSelectedColumnIdx$$ = this.$_getLastHeaderColumnSelection$();
          if (null != $lastSelectedColumnIdx$$) {
            if ($columnIdx$$9$$ < $lastSelectedColumnIdx$$) {
              var $i$$179$$;
              for ($i$$179$$ = $columnIdx$$9$$;$i$$179$$ <= $lastSelectedColumnIdx$$;$i$$179$$++) {
                this.$_setHeaderColumnSelection$($i$$179$$, !0, $event$$134$$.currentTarget, $event$$134$$);
              }
            } else {
              for ($i$$179$$ = $lastSelectedColumnIdx$$;$i$$179$$ <= $columnIdx$$9$$;$i$$179$$++) {
                this.$_setHeaderColumnSelection$($i$$179$$, !0, $event$$134$$.currentTarget, $event$$134$$);
              }
            }
          }
        } else {
          this.$_getKeyboardKeys$()[0] == this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_CTRL$ && this.$_setHeaderColumnSelection$($columnIdx$$9$$, !this.$_getHeaderColumnSelection$($columnIdx$$9$$), $event$$134$$.currentTarget, $event$$134$$);
        }
      } else {
        0 == this.$_getKeyboardKeys$().length && this.$_setHeaderColumnSelection$($columnIdx$$9$$, !this.$_getHeaderColumnSelection$($columnIdx$$9$$), $event$$134$$.currentTarget, $event$$134$$);
      }
      $event$$134$$.preventDefault();
    }}, $_refresh$:function($immediate$$1$$) {
      this.$_clearCachedMetadata$();
      this.$_data$ != this.options.data && this.$_clearCachedDataMetadata$();
      this.$_getTableDomUtils$().$clearCachedDom$();
      var $self$$70$$ = this;
      setTimeout(function() {
        $self$$70$$.$_refreshAll$($immediate$$1$$);
      }, 0);
    }, _setOption:function($key$$74$$, $value$$178$$) {
      this._superApply(arguments);
      this.$_refresh$(!0);
    }, $_addKeyboardKey$:function($keyCode$$) {
      var $foundCode_keyboardKeys$$ = !1, $found$$4_prop$$69$$;
      for ($found$$4_prop$$69$$ in this.$_KEYBOARD_CODES$) {
        this.$_KEYBOARD_CODES$.hasOwnProperty($found$$4_prop$$69$$) && this.$_KEYBOARD_CODES$[$found$$4_prop$$69$$] == $keyCode$$ && ($foundCode_keyboardKeys$$ = !0);
      }
      if ($foundCode_keyboardKeys$$) {
        $foundCode_keyboardKeys$$ = this.$_getKeyboardKeys$();
        $found$$4_prop$$69$$ = !1;
        var $i$$180$$;
        for ($i$$180$$ = 0;$i$$180$$ < $foundCode_keyboardKeys$$.length;$i$$180$$++) {
          if ($foundCode_keyboardKeys$$[$i$$180$$] == $keyCode$$) {
            $found$$4_prop$$69$$ = !0;
            break;
          }
        }
        $found$$4_prop$$69$$ || $foundCode_keyboardKeys$$.push($keyCode$$);
      }
    }, $_addSingleTableBodyRow$:function($rowIdx$$9$$, $row$$32$$, $docFrag$$) {
      var $tableBodyRow$$ = this.$_getTableDomUtils$().$createTableBodyRow$($rowIdx$$9$$);
      this.$_getTableDomUtils$().$styleTableBodyRow$($tableBodyRow$$);
      this.$_getTableDomUtils$().$insertTableBodyRow$($rowIdx$$9$$, $tableBodyRow$$, $docFrag$$);
      $row$$32$$ instanceof $oj$$14$$.$Row$ ? this.$_refreshTableBodyRow$($rowIdx$$9$$, $row$$32$$, $tableBodyRow$$, $docFrag$$) : this.$_asyncRefreshTableBodyRow$($row$$32$$);
    }, $_asyncRefreshTableBodyRow$:function($row$$33$$) {
      var $self$$71$$ = this;
      $$$$14$$.when($row$$33$$).done(function($resolvedModel$$) {
        setTimeout(function() {
          var $rowIdx$$10$$ = $resolvedModel$$.index - $self$$71$$.$_getData$().startIndex();
          $self$$71$$.$_refreshTableBodyRow$($rowIdx$$10$$, $resolvedModel$$);
          $self$$71$$.$_getTableDomUtils$().$refreshTableDimensions$();
        }, 0);
      });
    }, $_checkFocus$:function() {
      this.$_isFocused$() || this.$_getTableDomUtils$().$getTable$().focus();
    }, $_clearCachedMetadata$:function() {
      this.$_columnDefArray$ = null;
      this.$_setTableNavigationMode$(!1);
    }, $_clearCachedDataMetadata$:function() {
      null != this.$_data$ && this.$_unregisterDataSourceEventListeners$();
      this.$_data$ = null;
    }, $_clearKeyboardKeys$:function() {
      this.$_keyboardKeys$ = [];
    }, $_clearFocusedHeaderColumn$:function() {
      var $focusedHeaderColumnIdx$$ = this.$_getFocusedHeaderColumnIdx$();
      null != $focusedHeaderColumnIdx$$ && this.$_setHeaderColumnFocus$($focusedHeaderColumnIdx$$, !1, null);
    }, $_clearFocusedRow$:function() {
      var $focusedRowIdx$$ = this.$_getFocusedRowIdx$();
      null != $focusedRowIdx$$ && this.$_setRowFocus$($focusedRowIdx$$, !1, null);
    }, $_clearSelectedHeaderColumns$:function() {
      var $selectedHeaderColumnIdxs$$ = this.$_getSelectedHeaderColumnIdxs$(), $i$$181$$;
      for ($i$$181$$ = 0;$i$$181$$ < $selectedHeaderColumnIdxs$$.length;$i$$181$$++) {
        this.$_setHeaderColumnSelection$($selectedHeaderColumnIdxs$$[$i$$181$$], !1, null);
      }
    }, $_clearSelectedRows$:function() {
      var $selectedRowIdxs$$1$$ = this.$_getSelectedRowIdxs$(), $i$$182$$;
      for ($i$$182$$ = 0;$i$$182$$ < $selectedRowIdxs$$1$$.length;$i$$182$$++) {
        this.$_setRowSelection$($selectedRowIdxs$$1$$[$i$$182$$], !1, null);
      }
    }, $_clearSortedHeaderColumn$:function($columnIdx$$10$$) {
      var $sortedTableHeaderColumnIdx$$ = this.$_getSortedTableHeaderColumnIdx$();
      if (null != $sortedTableHeaderColumnIdx$$) {
        var $sortedTableHeaderColumn$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($sortedTableHeaderColumnIdx$$), $sorted$$2$$ = $sortedTableHeaderColumn$$.data("sorted");
        $sortedTableHeaderColumn$$.data("sorted", null);
        $sortedTableHeaderColumnIdx$$ != $columnIdx$$10$$ ? $sorted$$2$$ == this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ ? this.$_hideTableHeaderColumnSortLink$($sortedTableHeaderColumnIdx$$, !0) : this.$_hideTableHeaderColumnSortLink$($sortedTableHeaderColumnIdx$$, !1) : ($sortedTableHeaderColumn$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$), $sortedTableHeaderColumn$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$));
      }
    }, $_executeQueuedTableBodyRowOperations$:function() {
      if (null != this.$_rowOperationQueue$) {
        var $lastOperation_lastOperationEventType$$ = this.$_rowOperationQueue$[this.$_rowOperationQueue$.length - 1];
        null != $lastOperation_lastOperationEventType$$ && ($lastOperation_lastOperationEventType$$ = $lastOperation_lastOperationEventType$$.$eventType$, $lastOperation_lastOperationEventType$$ == $oj$$14$$.$TableDataSource$.$EventType$.ADD ? this.$_executeTableBodyRowsAdd$(this.$_rowOperationQueue$) : $lastOperation_lastOperationEventType$$ == $oj$$14$$.$TableDataSource$.$EventType$.REMOVE ? this.$_executeTableBodyRowsRemove$(this.$_rowOperationQueue$) : $lastOperation_lastOperationEventType$$ == 
        $oj$$14$$.$TableDataSource$.$EventType$.CHANGE && this.$_executeTableBodyRowsChange$(this.$_rowOperationQueue$), this.$_rowOperationQueue$ = []);
      }
    }, $_executeTableBodyRowsAdd$:function($rows$$7$$) {
      var $batchAdd_j$$29_tableBody$$ = !1;
      if (1 < $rows$$7$$.length) {
        var $i$$183_tableBodyRowBefore$$, $columns$$3_isContiguous_tableBodyDocFrag$$ = !0;
        for ($i$$183_tableBodyRowBefore$$ = 0;$i$$183_tableBodyRowBefore$$ < $rows$$7$$.length;$i$$183_tableBodyRowBefore$$++) {
          if (0 != $i$$183_tableBodyRowBefore$$ && $rows$$7$$[$i$$183_tableBodyRowBefore$$ - 1].$rowIdx$ != $rows$$7$$[$i$$183_tableBodyRowBefore$$].$rowIdx$ - 1) {
            $columns$$3_isContiguous_tableBodyDocFrag$$ = !1;
            break;
          }
        }
        if ($columns$$3_isContiguous_tableBodyDocFrag$$) {
          $batchAdd_j$$29_tableBody$$ = this.$_getTableDomUtils$().$getTableBody$();
          $columns$$3_isContiguous_tableBodyDocFrag$$ = $$$$14$$(document.createDocumentFragment());
          for ($i$$183_tableBodyRowBefore$$ = 0;$i$$183_tableBodyRowBefore$$ < $rows$$7$$.length;$i$$183_tableBodyRowBefore$$++) {
            this.$_addSingleTableBodyRow$($rows$$7$$[$i$$183_tableBodyRowBefore$$].$rowIdx$, $rows$$7$$[$i$$183_tableBodyRowBefore$$].row, $columns$$3_isContiguous_tableBodyDocFrag$$);
          }
          0 == $rows$$7$$[0].$rowIdx$ ? $batchAdd_j$$29_tableBody$$.prepend($columns$$3_isContiguous_tableBodyDocFrag$$) : ($i$$183_tableBodyRowBefore$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rows$$7$$[0].$rowIdx$), null != $i$$183_tableBodyRowBefore$$ ? $batchAdd_j$$29_tableBody$$[0].insertBefore($columns$$3_isContiguous_tableBodyDocFrag$$[0], $i$$183_tableBodyRowBefore$$[0]) : $batchAdd_j$$29_tableBody$$[0].insertBefore($columns$$3_isContiguous_tableBodyDocFrag$$[0], null));
          for ($i$$183_tableBodyRowBefore$$ = 0;$i$$183_tableBodyRowBefore$$ < $rows$$7$$.length;$i$$183_tableBodyRowBefore$$++) {
            for (this.$_getTableDomUtils$().$renderDelayedTableBodyRow$($rows$$7$$[$i$$183_tableBodyRowBefore$$].$rowIdx$), $columns$$3_isContiguous_tableBodyDocFrag$$ = this.$_getColumnDefs$(), $batchAdd_j$$29_tableBody$$ = 0;$batchAdd_j$$29_tableBody$$ < $columns$$3_isContiguous_tableBodyDocFrag$$.length;$batchAdd_j$$29_tableBody$$++) {
              this.$_getTableDomUtils$().$renderDelayedTableBodyCell$($rows$$7$$[$i$$183_tableBodyRowBefore$$].$rowIdx$, $batchAdd_j$$29_tableBody$$);
            }
          }
          this.$_getTableDomUtils$().$clearDelayedRenderRows$();
          this.$_getTableDomUtils$().$clearDelayedRenderCells$();
          $batchAdd_j$$29_tableBody$$ = !0;
        }
      }
      if (!$batchAdd_j$$29_tableBody$$) {
        for ($i$$183_tableBodyRowBefore$$ = 0;$i$$183_tableBodyRowBefore$$ < $rows$$7$$.length;$i$$183_tableBodyRowBefore$$++) {
          this.$_addSingleTableBodyRow$($rows$$7$$[$i$$183_tableBodyRowBefore$$].$rowIdx$, $rows$$7$$[$i$$183_tableBodyRowBefore$$].row);
        }
      }
      this.$_getTableDomUtils$().$clearCachedDomRowData$();
      this.$_getTableDomUtils$().$refreshTableDimensions$();
    }, $_executeTableBodyRowsChange$:function($rows$$8$$) {
      var $i$$184$$;
      for ($i$$184$$ = 0;$i$$184$$ < $rows$$8$$.length;$i$$184$$++) {
        this.$_asyncRefreshTableBodyRow$($rows$$8$$[$i$$184$$].row);
      }
      this.$_getTableDomUtils$().$refreshTableDimensions$();
    }, $_executeTableBodyRowsRemove$:function($rows$$9$$) {
      var $i$$185$$, $tableBodyRow$$1_tableBodyRows$$;
      for ($i$$185$$ = 0;$i$$185$$ < $rows$$9$$.length;$i$$185$$++) {
        $tableBodyRow$$1_tableBodyRows$$ = this.$_getTableDomUtils$().$getTableBodyRows$(), null != $tableBodyRow$$1_tableBodyRows$$ && $rows$$9$$[$i$$185$$].$rowIdx$ < $tableBodyRow$$1_tableBodyRows$$.length && 0 <= $rows$$9$$[$i$$185$$].$rowIdx$ && ($tableBodyRow$$1_tableBodyRows$$ = $$$$14$$($tableBodyRow$$1_tableBodyRows$$[$rows$$9$$[$i$$185$$].$rowIdx$]), $tableBodyRow$$1_tableBodyRows$$[0].parentNode.removeChild($tableBodyRow$$1_tableBodyRows$$[0]), this.$_getTableDomUtils$().$clearCachedDomRowData$())
        ;
      }
      this.$_getTableDomUtils$().$refreshTableDimensions$();
    }, $_getColumnDefs$:function() {
      this.$_columnDefArray$ || (this.$_columnDefArray$ = this.$_getColumnMetadata$());
      return this.$_columnDefArray$;
    }, $_getColumnMetadata$:function() {
      var $columns$$4_columnsSortedArray$$ = this.options.columns, $columnsDefault_sortSupportedData$$ = this.options.columnsDefault;
      if ((0 == $columns$$4_columnsSortedArray$$.length || 1 == $columns$$4_columnsSortedArray$$.length && null == $columns$$4_columnsSortedArray$$[0].id && null == $columns$$4_columnsSortedArray$$[0].headerText && null == $columns$$4_columnsSortedArray$$[0].field) && null == $columnsDefault_sortSupportedData$$.headerText && null == $columnsDefault_sortSupportedData$$.field) {
        return[];
      }
      var $defaultedColumns$$ = [], $data$$107_i$$186$$;
      for ($data$$107_i$$186$$ = 0;$data$$107_i$$186$$ < $columns$$4_columnsSortedArray$$.length;$data$$107_i$$186$$++) {
        $defaultedColumns$$[$data$$107_i$$186$$] = $$$$14$$.extend({}, $columnsDefault_sortSupportedData$$, $columns$$4_columnsSortedArray$$[$data$$107_i$$186$$]);
      }
      $columns$$4_columnsSortedArray$$ = [];
      for ($data$$107_i$$186$$ = 0;$data$$107_i$$186$$ < $defaultedColumns$$.length;$data$$107_i$$186$$++) {
        $columns$$4_columnsSortedArray$$.push($defaultedColumns$$[$data$$107_i$$186$$]);
      }
      $data$$107_i$$186$$ = this.$_getData$();
      $columnsDefault_sortSupportedData$$ = !1;
      null != $data$$107_i$$186$$ && "full" == $data$$107_i$$186$$.getCapability("sort") && ($columnsDefault_sortSupportedData$$ = !0);
      for ($data$$107_i$$186$$ = 0;$data$$107_i$$186$$ < $defaultedColumns$$.length;$data$$107_i$$186$$++) {
        null == $columns$$4_columnsSortedArray$$[$data$$107_i$$186$$].id && ($columns$$4_columnsSortedArray$$[$data$$107_i$$186$$].id = this.$_COLUMN_HEADER_ID_PREFIX$ + $data$$107_i$$186$$), null != $columns$$4_columnsSortedArray$$[$data$$107_i$$186$$].sortable && $columns$$4_columnsSortedArray$$[$data$$107_i$$186$$].sortable != this.$_OPTION_AUTO$ || !$columnsDefault_sortSupportedData$$ || ($columns$$4_columnsSortedArray$$[$data$$107_i$$186$$].sortable = this.$_OPTION_ENABLED$);
      }
      return $columns$$4_columnsSortedArray$$;
    }, $_getColumnIdxsForElementsWithStyleClass$:function($elements$$1_styleClass$$) {
      $elements$$1_styleClass$$ = this.$_getTableDomUtils$().$getTable$().find($elements$$1_styleClass$$);
      var $columnIdxs$$ = [];
      if ($elements$$1_styleClass$$ && 0 < $elements$$1_styleClass$$.length) {
        var $i$$187$$, $j$$30$$, $alreadyAdded$$, $columnIdx$$11$$;
        for ($i$$187$$ = 0;$i$$187$$ < $elements$$1_styleClass$$.length;$i$$187$$++) {
          $columnIdx$$11$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($$$$14$$($elements$$1_styleClass$$.get($i$$187$$)));
          $alreadyAdded$$ = !1;
          for ($j$$30$$ = 0;$j$$30$$ < $columnIdxs$$.length;$j$$30$$++) {
            $columnIdxs$$[$j$$30$$] == $columnIdx$$11$$ && ($alreadyAdded$$ = !0);
          }
          $alreadyAdded$$ || $columnIdxs$$.push($columnIdx$$11$$);
        }
      }
      return $columnIdxs$$;
    }, $_getColumnRenderer$:function($columnIdx$$12$$, $type$$77$$) {
      var $column$$9$$ = this.$_getColumnDefs$()[$columnIdx$$12$$];
      return "cell" == $type$$77$$ ? $column$$9$$.renderer : "footer" == $type$$77$$ ? $column$$9$$.footerRenderer : "header" == $type$$77$$ ? $column$$9$$.headerRenderer : null;
    }, $_getData$:function() {
      if (!this.$_data$ && null != this.options.data) {
        var $data$$108$$ = this.options.data;
        if ($data$$108$$ instanceof $oj$$14$$.$TableDataSource$ || $data$$108$$ instanceof $oj$$14$$.$PagingTableDataSource$) {
          this.$_data$ = $data$$108$$;
        } else {
          throw Error(this.$_LOGGER_MSG$.$_ERR_DATA_INVALID_TYPE_SUMMARY$ + "\n" + this.$_LOGGER_MSG$.$_ERR_DATA_INVALID_TYPE_DETAIL$);
        }
        this.$_registerDataSourceEventListeners$();
      }
      return this.$_data$;
    }, $_getFocusedHeaderColumnIdx$:function() {
      return this.$_getColumnIdxsForElementsWithStyleClass$("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$ + "." + $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$)[0];
    }, $_getFocusedRowIdx$:function() {
      return this.$_getRowIdxsForElementsWithStyleClass$("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$ + "." + $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$)[0];
    }, $_getHeaderColumnFocus$:function($columnIdx$$13$$) {
      return this.$_getHeaderColumnState$($columnIdx$$13$$).$focused$;
    }, $_getHeaderColumnSelection$:function($columnIdx$$14$$) {
      return this.$_getHeaderColumnState$($columnIdx$$14$$).selected;
    }, $_getColumnSelectionMode$:function() {
      return null == this.options.selectionMode ? null : this.options.selectionMode.column;
    }, $_getHeaderColumnState$:function($columnIdx$$15_headerColumn$$) {
      $columnIdx$$15_headerColumn$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$15_headerColumn$$);
      return{$focused$:$columnIdx$$15_headerColumn$$.hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$), selected:$columnIdx$$15_headerColumn$$.hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$)};
    }, $_getKeyboardKeys$:function() {
      this.$_keyboardKeys$ || (this.$_keyboardKeys$ = []);
      return this.$_keyboardKeys$.reverse();
    }, $_getLastHeaderColumnSelection$:function() {
      return null != this.$_lastSelectedColumnIdxArray$ && 0 < this.$_lastSelectedColumnIdxArray$.length ? this.$_lastSelectedColumnIdxArray$[0] : null;
    }, $_getLastRowSelection$:function() {
      return null != this.$_lastSelectedRowIdxArray$ && 0 < this.$_lastSelectedRowIdxArray$.length ? this.$_lastSelectedRowIdxArray$[0] : null;
    }, $_getJQueryElement$:function($elements$$2$$, $type$$78$$) {
      var $i$$188$$;
      for ($i$$188$$ = 0;$i$$188$$ < $$$$14$$($elements$$2$$).length;$i$$188$$++) {
        if ($$$$14$$($$$$14$$($elements$$2$$)[$i$$188$$]).is($type$$78$$)) {
          return $$$$14$$($elements$$2$$)[$i$$188$$];
        }
      }
      return null;
    }, $_getRowFocus$:function($rowIdx$$11$$) {
      return this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$11$$).hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$);
    }, $_getRowHover$:function($rowIdx$$12$$) {
      return this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$12$$).hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
    }, $_getRowIdxsForElementsWithStyleClass$:function($elements$$3_styleClass$$1$$) {
      $elements$$3_styleClass$$1$$ = this.$_getTableDomUtils$().$getTable$().find($elements$$3_styleClass$$1$$);
      var $rowIdxs$$ = [];
      if ($elements$$3_styleClass$$1$$ && 0 < $elements$$3_styleClass$$1$$.length) {
        var $i$$189$$, $j$$31$$, $rowIdx$$13$$, $alreadyAdded$$1$$;
        for ($i$$189$$ = 0;$i$$189$$ < $elements$$3_styleClass$$1$$.length;$i$$189$$++) {
          $rowIdx$$13$$ = this.$_getTableDomUtils$().$getElementRowIdx$($$$$14$$($elements$$3_styleClass$$1$$.get($i$$189$$)));
          $alreadyAdded$$1$$ = !1;
          for ($j$$31$$ = 0;$j$$31$$ < $rowIdxs$$.length;$j$$31$$++) {
            $rowIdxs$$[$j$$31$$] == $rowIdx$$13$$ && ($alreadyAdded$$1$$ = !0);
          }
          $alreadyAdded$$1$$ || $rowIdxs$$.push($rowIdx$$13$$);
        }
      }
      return $rowIdxs$$;
    }, $_getRowRenderer$:function() {
      return this.options.rowRenderer;
    }, $_getRowSelection$:function($rowIdx$$14$$) {
      return this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$14$$).hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
    }, $_getRowSelectionMode$:function() {
      return null == this.options.selectionMode ? null : this.options.selectionMode.row;
    }, $_getSelectedHeaderColumnIdxs$:function() {
      return this.$_getColumnIdxsForElementsWithStyleClass$("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$ + "." + $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
    }, $_getSelectedRowIdxs$:function() {
      return this.$_getRowIdxsForElementsWithStyleClass$("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$ + "." + $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
    }, $_getSortedTableHeaderColumnIdx$:function() {
      var $tableHeaderColumns$$ = this.$_getTableDomUtils$().$getTableHeaderColumns$(), $i$$190$$, $sorted$$3$$;
      for ($i$$190$$ = 0;$i$$190$$ < $tableHeaderColumns$$.length;$i$$190$$++) {
        if ($sorted$$3$$ = $$$$14$$($tableHeaderColumns$$[$i$$190$$]).data("sorted"), null != $sorted$$3$$) {
          return $i$$190$$;
        }
      }
      return null;
    }, $_getTabbableElements$:function($element$$52_tabbableElements$$) {
      $element$$52_tabbableElements$$ = $element$$52_tabbableElements$$.find(":tabbable");
      return null != $element$$52_tabbableElements$$ && 0 < $element$$52_tabbableElements$$.length ? $element$$52_tabbableElements$$ : null;
    }, $_getTableDomUtils$:function() {
      this.$_tableDomUtils$ || (this.$_tableDomUtils$ = new $oj$$14$$.$TableDomUtils$(this));
      return this.$_tableDomUtils$;
    }, $_getTableRowCount$:function() {
      var $rows$$10$$ = this.$_getTableDomUtils$().$getTableBodyRows$();
      return null != $rows$$10$$ ? $rows$$10$$.length : 0;
    }, $_handleContextMenuBeforeShow$:function($columnIdx$$16_event$$135_headerColumn$$1$$) {
      var $contextMenu$$2_tableBodyCell$$ = this.$_getTableDomUtils$().$_menuContainer$;
      this.$_contextMenuEvent$ = $columnIdx$$16_event$$135_headerColumn$$1$$.originalEvent.originalEvent;
      "keydown" === this.$_contextMenuEvent$.type ? $contextMenu$$2_tableBodyCell$$.ojMenu("option", "menuPosition", {my:"left top", at:"left bottom", of:this.$contextMenuEvent$.target}) : $contextMenu$$2_tableBodyCell$$.ojMenu("option", "menuPosition", {my:"left top", at:"left bottom"});
      $columnIdx$$16_event$$135_headerColumn$$1$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$14$$(this.$_contextMenuEvent$.target), "oj-table-column-header");
      $contextMenu$$2_tableBodyCell$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$14$$(this.$_contextMenuEvent$.target), "oj-table-data-cell");
      null != $contextMenu$$2_tableBodyCell$$ && ($columnIdx$$16_event$$135_headerColumn$$1$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($contextMenu$$2_tableBodyCell$$), $columnIdx$$16_event$$135_headerColumn$$1$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$16_event$$135_headerColumn$$1$$));
      $columnIdx$$16_event$$135_headerColumn$$1$$.attr("data-oj-sortable") == this.$_OPTION_ENABLED$ ? (this.$_getTableDomUtils$().$_menuContainer$.find("[data-oj-command\x3doj-table-sortAsc]").removeClass("oj-disabled"), this.$_getTableDomUtils$().$_menuContainer$.find("[data-oj-command\x3doj-table-sortDsc]").removeClass("oj-disabled")) : (this.$_getTableDomUtils$().$_menuContainer$.find("[data-oj-command\x3doj-table-sortAsc]").addClass("oj-disabled"), this.$_getTableDomUtils$().$_menuContainer$.find("[data-oj-command\x3doj-table-sortDsc]").addClass("oj-disabled"));
    }, $_handleContextMenuSelect$:function($event$$136$$, $ui$$3$$) {
      var $menuItemCommand$$ = $ui$$3$$.item.attr("data-oj-command"), $headerColumn$$2$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$14$$(this.$_contextMenuEvent$.target), "oj-table-column-header"), $tableBodyCell$$1$$ = this.$_getTableDomUtils$().$getFirstAncestor$($$$$14$$(this.$_contextMenuEvent$.target), "oj-table-data-cell"), $columnIdx$$17$$ = null;
      null != $headerColumn$$2$$ && ($columnIdx$$17$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($headerColumn$$2$$));
      null != $tableBodyCell$$1$$ && ($columnIdx$$17$$ = this.$_getTableDomUtils$().$getElementColumnIdx$($tableBodyCell$$1$$));
      "oj-table-sortAsc" == $menuItemCommand$$ ? this.$_handleSortTableHeaderColumn$($columnIdx$$17$$, !0) : "oj-table-sortDsc" == $menuItemCommand$$ && this.$_handleSortTableHeaderColumn$($columnIdx$$17$$, !1);
    }, $_handleDataError$:function($error$$17$$) {
      this.$_hideStatusMessage$();
      throw $error$$17$$;
    }, $_handleDataFetchStart$:function() {
      this.$_showStatusMessage$();
    }, $_handleDataFetchEnd$:function($event$$138$$) {
      $event$$138$$.refresh && this.$_refreshAll$(!0);
      this.$_hideStatusMessage$();
    }, $_handleDataReset$:function() {
      this.$_hideStatusMessage$();
      this.$_refreshAll$();
      this.activeRow(-1);
    }, $_handleDataRowAdd$:function($event$$140$$) {
      var $rowIdx$$15$$ = $event$$140$$.index, $data$$109_endIndex$$5$$ = this.$_getData$();
      this.$_hideStatusMessage$();
      var $startIndex$$8$$ = $data$$109_endIndex$$5$$.startIndex(), $data$$109_endIndex$$5$$ = $startIndex$$8$$ + $data$$109_endIndex$$5$$.size() - 1;
      null != $rowIdx$$15$$ && ($rowIdx$$15$$ < $startIndex$$8$$ || $rowIdx$$15$$ > $data$$109_endIndex$$5$$) || (0 <= $rowIdx$$15$$ && ($rowIdx$$15$$ -= $startIndex$$8$$), this.$_queueTableBodyRowOperation$($oj$$14$$.$TableDataSource$.$EventType$.ADD, $rowIdx$$15$$, $event$$140$$));
    }, $_handleDataRowChange$:function($event$$141$$) {
      var $rowIdx$$16$$ = $event$$141$$.index, $data$$110_endIndex$$6$$ = this.$_getData$();
      this.$_hideStatusMessage$();
      var $startIndex$$9$$ = $data$$110_endIndex$$6$$.startIndex(), $data$$110_endIndex$$6$$ = $startIndex$$9$$ + $data$$110_endIndex$$6$$.size() - 1;
      null != $rowIdx$$16$$ && ($rowIdx$$16$$ < $startIndex$$9$$ || $rowIdx$$16$$ > $data$$110_endIndex$$6$$) || (0 <= $rowIdx$$16$$ && ($rowIdx$$16$$ -= $startIndex$$9$$), this.$_queueTableBodyRowOperation$($oj$$14$$.$TableDataSource$.$EventType$.CHANGE, $rowIdx$$16$$, $event$$141$$));
    }, $_handleDataRowRemove$:function($event$$142$$) {
      var $rowIdx$$17$$ = $event$$142$$.index, $data$$111_startIndex$$10$$ = this.$_getData$();
      this.$_hideStatusMessage$();
      this.$_getTableDomUtils$().$getTableBodyRows$() && ($data$$111_startIndex$$10$$ = $data$$111_startIndex$$10$$.startIndex(), this.$_queueTableBodyRowOperation$($oj$$14$$.$TableDataSource$.$EventType$.REMOVE, $rowIdx$$17$$ - $data$$111_startIndex$$10$$, $event$$142$$));
    }, $_handleDataSort$:function() {
      this.$_hideStatusMessage$();
      this.$_refreshTableBody$();
      this.$_getTableDomUtils$().$refreshTableDimensions$(!0);
      var $activeRowIdx$$ = this.activeRow();
      null != $activeRowIdx$$ && this.$_setRowFocus$($activeRowIdx$$, !0, null);
    }, $_handleKeydownLeftRight$:function($event$$144$$) {
      var $focusedHeaderColumnIdx$$1$$ = this.$_getFocusedHeaderColumnIdx$(), $columns$$6_newFocusedHeaderColumnSelection$$ = this.$_getColumnDefs$();
      if (null != $focusedHeaderColumnIdx$$1$$) {
        var $newFocusedHeaderColumnIdx$$ = $focusedHeaderColumnIdx$$1$$;
        this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_LEFT$) ? $newFocusedHeaderColumnIdx$$ = 0 < $focusedHeaderColumnIdx$$1$$ ? $focusedHeaderColumnIdx$$1$$ - 1 : $focusedHeaderColumnIdx$$1$$ : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_RIGHT$) && ($newFocusedHeaderColumnIdx$$ = $focusedHeaderColumnIdx$$1$$ < $columns$$6_newFocusedHeaderColumnSelection$$.length - 1 ? $focusedHeaderColumnIdx$$1$$ + 1 : $focusedHeaderColumnIdx$$1$$);
        $newFocusedHeaderColumnIdx$$ != $focusedHeaderColumnIdx$$1$$ && (this.$_setHeaderColumnFocus$($newFocusedHeaderColumnIdx$$, !0, null), $event$$144$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] && ($columns$$6_newFocusedHeaderColumnSelection$$ = this.$_getHeaderColumnSelection$($newFocusedHeaderColumnIdx$$), this.$_setHeaderColumnSelection$($newFocusedHeaderColumnIdx$$, !$columns$$6_newFocusedHeaderColumnSelection$$, null, $event$$144$$), $columns$$6_newFocusedHeaderColumnSelection$$ && 
        this.$_getHeaderColumnSelection$($focusedHeaderColumnIdx$$1$$) && this.$_setHeaderColumnSelection$($focusedHeaderColumnIdx$$1$$, !1, null, $event$$144$$)));
      }
    }, $_handleKeydownTab$:function($event$$145$$) {
      var $tabHandled_tabbableElementsInDocument$$ = !1, $focusedRowIdx$$1_tabbableElementsInRow_tableBodyRow$$2_tableTabIndex$$ = this.$_getFocusedRowIdx$();
      if (null != $focusedRowIdx$$1_tabbableElementsInRow_tableBodyRow$$2_tableTabIndex$$ && this.$_tableNavMode$) {
        var $tabbableElementsInBody_tabbableElementsInTable_table$$1_tableBody$$1$$ = this.$_getTableDomUtils$().$getTableBody$(), $tabbableElementsInBody_tabbableElementsInTable_table$$1_tableBody$$1$$ = this.$_getTabbableElements$($tabbableElementsInBody_tabbableElementsInTable_table$$1_tableBody$$1$$);
        if (null != $tabbableElementsInBody_tabbableElementsInTable_table$$1_tableBody$$1$$) {
          var $tabHandled_tabbableElementsInDocument$$ = !0, $currentFocusElement$$ = document.activeElement, $isCurrentlyFocused$$ = !1, $i$$191$$;
          for ($i$$191$$ = 0;$i$$191$$ < $tabbableElementsInBody_tabbableElementsInTable_table$$1_tableBody$$1$$.length;$i$$191$$++) {
            if ($currentFocusElement$$ == $tabbableElementsInBody_tabbableElementsInTable_table$$1_tableBody$$1$$[$i$$191$$]) {
              $isCurrentlyFocused$$ = !0;
              break;
            }
          }
          if ($isCurrentlyFocused$$) {
            return;
          }
          $event$$145$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] || ($focusedRowIdx$$1_tabbableElementsInRow_tableBodyRow$$2_tableTabIndex$$ = this.$_getTableDomUtils$().$getTableBodyRow$($focusedRowIdx$$1_tabbableElementsInRow_tableBodyRow$$2_tableTabIndex$$), $focusedRowIdx$$1_tabbableElementsInRow_tableBodyRow$$2_tableTabIndex$$ = this.$_getTabbableElements$($focusedRowIdx$$1_tabbableElementsInRow_tableBodyRow$$2_tableTabIndex$$), null != $focusedRowIdx$$1_tabbableElementsInRow_tableBodyRow$$2_tableTabIndex$$ ? 
          $$$$14$$($focusedRowIdx$$1_tabbableElementsInRow_tableBodyRow$$2_tableTabIndex$$[0]).focus() : $$$$14$$($tabbableElementsInBody_tabbableElementsInTable_table$$1_tableBody$$1$$[0]).focus(), $event$$145$$.preventDefault(), $event$$145$$.stopPropagation());
        }
      }
      $tabHandled_tabbableElementsInDocument$$ || ($tabbableElementsInBody_tabbableElementsInTable_table$$1_tableBody$$1$$ = this.$_getTableDomUtils$().$getTable$(), $tabHandled_tabbableElementsInDocument$$ = this.$_getTabbableElements$($$$$14$$(document)), $tabbableElementsInBody_tabbableElementsInTable_table$$1_tableBody$$1$$ = this.$_getTabbableElements$($tabbableElementsInBody_tabbableElementsInTable_table$$1_tableBody$$1$$), $focusedRowIdx$$1_tabbableElementsInRow_tableBodyRow$$2_tableTabIndex$$ = 
      $tabHandled_tabbableElementsInDocument$$.index(this.$_getTableDomUtils$().$getTable$()), $$$$14$$($tabHandled_tabbableElementsInDocument$$[$focusedRowIdx$$1_tabbableElementsInRow_tableBodyRow$$2_tableTabIndex$$ + $tabbableElementsInBody_tabbableElementsInTable_table$$1_tableBody$$1$$.length + 1]).focus(), $event$$145$$.preventDefault(), $event$$145$$.stopPropagation());
      this.$_removeKeyboardKey$($event$$145$$.keyCode);
    }, $_handleKeydownUpDown$:function($event$$146$$) {
      var $focusedRowIdx$$2$$ = this.$_getFocusedRowIdx$(), $focusedHeaderColumnIdx$$2_newFocusedRowIdx$$ = this.$_getFocusedHeaderColumnIdx$();
      if (null != $focusedRowIdx$$2$$) {
        var $data$$112_newFocusedRowSelection$$ = this.$_getData$(), $focusedHeaderColumnIdx$$2_newFocusedRowIdx$$ = $focusedRowIdx$$2$$;
        this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) ? $focusedHeaderColumnIdx$$2_newFocusedRowIdx$$ = 0 < $focusedRowIdx$$2$$ ? $focusedRowIdx$$2$$ - 1 : $focusedRowIdx$$2$$ : this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) && ($focusedHeaderColumnIdx$$2_newFocusedRowIdx$$ = $focusedRowIdx$$2$$ < $data$$112_newFocusedRowSelection$$.size() - 1 ? $focusedRowIdx$$2$$ + 1 : $focusedRowIdx$$2$$);
        $focusedHeaderColumnIdx$$2_newFocusedRowIdx$$ != $focusedRowIdx$$2$$ ? (this.$_setRowFocus$($focusedHeaderColumnIdx$$2_newFocusedRowIdx$$, !0, null), $event$$146$$[this.$_KEYBOARD_CODES$.$_KEYBOARD_MODIFIER_SHIFT$] && ($data$$112_newFocusedRowSelection$$ = this.$_getRowSelection$($focusedHeaderColumnIdx$$2_newFocusedRowIdx$$), this.$_setRowSelection$($focusedHeaderColumnIdx$$2_newFocusedRowIdx$$, !$data$$112_newFocusedRowSelection$$, null, $event$$146$$), $data$$112_newFocusedRowSelection$$ && 
        this.$_getRowSelection$($focusedRowIdx$$2$$) && this.$_setRowSelection$($focusedRowIdx$$2$$, !1, null, $event$$146$$))) : $focusedHeaderColumnIdx$$2_newFocusedRowIdx$$ == $focusedRowIdx$$2$$ && 0 == $focusedRowIdx$$2$$ && this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_UP$) && this.$_setHeaderColumnFocus$(0, !0, null);
      } else {
        null != $focusedHeaderColumnIdx$$2_newFocusedRowIdx$$ && this.$_isKeyboardKeyPressed$(this.$_KEYBOARD_CODES$.$_KEYBOARD_CODE_DOWN$) && this.$_setRowFocus$(0, !0, null);
      }
    }, $_handleKeyupEnd$:function() {
      var $focusedColumnIdx$$ = this.$_getFocusedHeaderColumnIdx$();
      null != $focusedColumnIdx$$ && $focusedColumnIdx$$ != this.$_getColumnDefs$().length - 1 && this.$_setHeaderColumnFocus$(this.$_getColumnDefs$().length - 1, !0, null);
    }, $_handleKeyupEnter$:function() {
      var $focusedColumnIdx$$1$$ = this.$_getFocusedHeaderColumnIdx$();
      if (null != $focusedColumnIdx$$1$$ && this.$_getColumnDefs$()[$focusedColumnIdx$$1$$].sortable == this.$_OPTION_ENABLED$) {
        var $sorted$$4$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($focusedColumnIdx$$1$$).data("sorted");
        null == $sorted$$4$$ || $sorted$$4$$ == this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ ? this.$_handleSortTableHeaderColumn$($focusedColumnIdx$$1$$, !0) : this.$_handleSortTableHeaderColumn$($focusedColumnIdx$$1$$, !1);
      }
    }, $_handleKeyupEsc$:function($event$$149$$) {
      $event$$149$$.preventDefault();
      $event$$149$$.stopPropagation();
      this.$_getTableDomUtils$().$getTable$().focus();
      this.$_setTableNavigationMode$(!1);
    }, $_handleKeyupHome$:function() {
      var $focusedColumnIdx$$2$$ = this.$_getFocusedHeaderColumnIdx$();
      null != $focusedColumnIdx$$2$$ && 0 != $focusedColumnIdx$$2$$ && this.$_setHeaderColumnFocus$(0, !0, null);
    }, $_handleKeyupSpacebar$:function($event$$151$$) {
      var $focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$ = this.$_getFocusedRowIdx$();
      null != $focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$ ? this.$_setRowSelection$($focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$, !this.$_getRowSelection$($focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$), null, $event$$151$$) : ($focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$ = this.$_getFocusedHeaderColumnIdx$(), null != $focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$ && this.$_setHeaderColumnSelection$($focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$, !this.$_getHeaderColumnSelection$($focusedHeaderColumnIdx$$3_focusedRowIdx$$3$$), 
      null, $event$$151$$));
    }, $_handleSortTableHeaderColumn$:function($columnIdx$$18$$, $ascending$$) {
      this.$_clearSortedHeaderColumn$($columnIdx$$18$$);
      var $column$$10_tableHeaderColumn$$4$$ = this.$_getColumnDefs$()[$columnIdx$$18$$], $headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink_sortField$$ = null == $column$$10_tableHeaderColumn$$4$$.sortProperty ? $column$$10_tableHeaderColumn$$4$$.field : $column$$10_tableHeaderColumn$$4$$.sortProperty, $column$$10_tableHeaderColumn$$4$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$18$$);
      this.$_invokeDataSort$($headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink_sortField$$, $ascending$$, null);
      $ascending$$ ? ($column$$10_tableHeaderColumn$$4$$.data("sorted", this.$_COLUMN_SORT_ORDER$.$_ASCENDING$), $headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink_sortField$$ = $column$$10_tableHeaderColumn$$4$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$), $headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink_sortField$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$), $headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink_sortField$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), 
      $headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink_sortField$$ = $column$$10_tableHeaderColumn$$4$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$), $headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink_sortField$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), $headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink_sortField$$ = $column$$10_tableHeaderColumn$$4$$.find("." + 
      $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$)) : ($column$$10_tableHeaderColumn$$4$$.data("sorted", this.$_COLUMN_SORT_ORDER$.$_DESCENDING$), $headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink_sortField$$ = $column$$10_tableHeaderColumn$$4$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$), $headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink_sortField$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$), 
      $headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink_sortField$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), $headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink_sortField$$ = $column$$10_tableHeaderColumn$$4$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$), $headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink_sortField$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), 
      $headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink_sortField$$ = $column$$10_tableHeaderColumn$$4$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$));
      $headerColumnAsc_headerColumnAscLink_headerColumnDsc_headerColumnDscLink_sortField$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
      this.$_hideTableHeaderColumnSortLink$($columnIdx$$18$$, !$ascending$$);
    }, $_hideNoDataMessage$:function() {
      this.$_getTableDomUtils$().$getTableNoDataMessage$().css("display", "none");
    }, $_hideStatusMessage$:function() {
      this.$_getTableDomUtils$().$getTableStatusMessage$().css("display", "none");
    }, $_hideTableHeaderColumnSortLink$:function($columnIdx$$19$$, $ascending$$1$$) {
      if (this.$_getColumnDefs$()[$columnIdx$$19$$].sortable == this.$_OPTION_ENABLED$) {
        var $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$19$$), $sorted$$5$$ = $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$.data("sorted");
        !$ascending$$1$$ || null != $sorted$$5$$ && $sorted$$5$$ != this.$_COLUMN_SORT_ORDER$.$_DESCENDING$ ? $ascending$$1$$ || null != $sorted$$5$$ && $sorted$$5$$ != this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ || ($headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$ = $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$), $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), 
        $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$), $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$)) : ($headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$ = $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$), 
        $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$), $headerColumnAscLink$$1_headerColumnDscLink$$1_tableHeaderColumn$$5$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$));
      }
    }, $_invokeDataSort$:function($sortField$$1$$, $ascending$$2$$) {
      var $data$$113$$ = this.$_getData$();
      if (!$data$$113$$) {
        return null;
      }
      this.$_showStatusMessage$();
      var $sortCriteria$$ = {};
      $sortCriteria$$.key = $sortField$$1$$;
      $sortCriteria$$.direction = $ascending$$2$$ ? this.$_COLUMN_SORT_ORDER$.$_ASCENDING$ : this.$_COLUMN_SORT_ORDER$.$_DESCENDING$;
      $data$$113$$.sort($sortCriteria$$);
    }, $_isColumnMetadataUpdated$:function() {
      if (null != this.$_columnDefArray$) {
        var $columnsMetadata$$ = this.$_getColumnMetadata$();
        if (this.$_columnDefArray$.length != $columnsMetadata$$.length) {
          return!0;
        }
        var $i$$192$$, $prop$$70$$;
        for ($i$$192$$ = 0;$i$$192$$ < $columnsMetadata$$.length;$i$$192$$++) {
          for ($prop$$70$$ in $columnsMetadata$$[$i$$192$$]) {
            if ($columnsMetadata$$[$i$$192$$].hasOwnProperty($prop$$70$$) && $columnsMetadata$$[$i$$192$$][$prop$$70$$] != this.$_columnDefArray$[$i$$192$$][$prop$$70$$]) {
              return!0;
            }
          }
        }
        return!1;
      }
      return!0;
    }, $_isFocused$:function() {
      var $currentFocusElement$$1$$ = $$$$14$$(document.activeElement), $table$$2$$ = this.$_getTableDomUtils$().$getTable$();
      return $table$$2$$[0] != $currentFocusElement$$1$$[0] && 0 == $table$$2$$.has($currentFocusElement$$1$$).length ? !1 : !0;
    }, $_isKeyboardKeyPressed$:function($keyCode$$1$$) {
      var $keyboardKeys$$1$$ = this.$_getKeyboardKeys$(), $i$$193$$;
      for ($i$$193$$ = 0;$i$$193$$ < $keyboardKeys$$1$$.length;$i$$193$$++) {
        if ($keyboardKeys$$1$$[$i$$193$$] == $keyCode$$1$$) {
          return!0;
        }
      }
      return!1;
    }, $_isTableFooterless$:function() {
      var $columns$$7$$ = this.$_getColumnDefs$(), $i$$194$$, $footerRenderer$$;
      for ($i$$194$$ = 0;$i$$194$$ < $columns$$7$$.length;$i$$194$$++) {
        if ($footerRenderer$$ = this.$_getColumnRenderer$($i$$194$$, "footer"), null != $footerRenderer$$) {
          return!1;
        }
      }
      return!0;
    }, $_isTableHeaderless$:function() {
      var $columns$$8$$ = this.$_getColumnDefs$(), $i$$195$$;
      for ($i$$195$$ = 0;$i$$195$$ < $columns$$8$$.length;$i$$195$$++) {
        if (null != $columns$$8$$[$i$$195$$].headerText || null != $columns$$8$$[$i$$195$$].headerStyle || null != $columns$$8$$[$i$$195$$].sortable && $columns$$8$$[$i$$195$$].sortable != this.$_OPTION_NONE$ || null != $columns$$8$$[$i$$195$$].sortProperty || null != $columns$$8$$[$i$$195$$].headerRenderer) {
          return!1;
        }
      }
      return!0;
    }, $_isTableHeaderColumnsRendered$:function() {
      return!0 == this.$_renderedTableHeaderColumns$;
    }, $_isTableNavigationMode$:function() {
      return this.$_tableNavMode$;
    }, $_queueTableBodyRowOperation$:function($eventType$$35$$, $rowIdx$$18$$, $row$$37$$) {
      var $self$$72$$ = this;
      this.$_rowOperationQueue$ || (this.$_rowOperationQueue$ = []);
      var $executeImmediate_i$$196$$ = !1, $foundExisting_lastOperation$$1$$ = this.$_rowOperationQueue$[this.$_rowOperationQueue$.length - 1];
      null != $foundExisting_lastOperation$$1$$ && $foundExisting_lastOperation$$1$$.$eventType$ != $eventType$$35$$ && (this.$_executeQueuedTableBodyRowOperations$(), $executeImmediate_i$$196$$ = !0);
      null != this.$_queueExecutionTimer$ || $executeImmediate_i$$196$$ || (setTimeout(function() {
        $self$$72$$.$_executeQueuedTableBodyRowOperations$();
        $self$$72$$.$_queueExecutionTimer$ = null;
      }, 0), this.$_queueExecutionTimer$ = !0);
      $foundExisting_lastOperation$$1$$ = !1;
      for ($executeImmediate_i$$196$$ = 0;$executeImmediate_i$$196$$ < this.$_rowOperationQueue$.length;$executeImmediate_i$$196$$++) {
        this.$_rowOperationQueue$[$executeImmediate_i$$196$$].$eventType$ == $eventType$$35$$ && this.$_rowOperationQueue$[$executeImmediate_i$$196$$].$rowIdx$ == $rowIdx$$18$$ && this.$_rowOperationQueue$[$executeImmediate_i$$196$$].row == $row$$37$$ && (this.$_rowOperationQueue$[$executeImmediate_i$$196$$] = {$eventType$:$eventType$$35$$, $rowIdx$:$rowIdx$$18$$, row:$row$$37$$}, $foundExisting_lastOperation$$1$$ = !0);
      }
      $foundExisting_lastOperation$$1$$ || this.$_rowOperationQueue$.push({$eventType$:$eventType$$35$$, $rowIdx$:$rowIdx$$18$$, row:$row$$37$$});
    }, $_refreshAll$:function($immediate$$2$$) {
      if (this.$_isColumnMetadataUpdated$() || !this.$_isTableHeaderColumnsRendered$() && !this.$_isTableHeaderless$()) {
        this.$_clearCachedMetadata$(), this.$_refreshTableHeader$();
      }
      this.$_refreshTableFooter$();
      this.$_refreshTableBody$();
      null != this.$_getData$() && this.$_getData$().$isFetching$ && this.$_showStatusMessage$();
      this.$_getTableDomUtils$().$refreshTableDimensions$($immediate$$2$$);
    }, $_refreshTableBody$:function() {
      var $j$$33_tableBody$$2$$ = this.$_getTableDomUtils$().$getTableBody$(), $columns$$9_data$$114$$ = this.$_getData$();
      $j$$33_tableBody$$2$$.empty();
      this.$_getTableDomUtils$().$clearCachedDomRowData$();
      if ($columns$$9_data$$114$$ && 0 != $columns$$9_data$$114$$.size() && 0 != this.$_getColumnDefs$().length) {
        this.$_hideNoDataMessage$();
        this.$_getTableDomUtils$().$clearDelayedRenderRows$();
        this.$_getTableDomUtils$().$clearDelayedRenderCells$();
        var $tableBodyDocFrag$$1$$ = $$$$14$$(document.createDocumentFragment()), $startIndex$$11$$ = $columns$$9_data$$114$$.startIndex(), $endIndex$$7$$ = $startIndex$$11$$ + $columns$$9_data$$114$$.size(), $i$$197$$, $row$$38$$, $rowIdx$$19$$, $tableBodyRow$$3$$;
        for ($i$$197$$ = $startIndex$$11$$;$i$$197$$ < $endIndex$$7$$;$i$$197$$++) {
          $rowIdx$$19$$ = $i$$197$$ - $startIndex$$11$$, $row$$38$$ = $columns$$9_data$$114$$.at($i$$197$$), null != $row$$38$$ && ($tableBodyRow$$3$$ = this.$_getTableDomUtils$().$createTableBodyRow$($rowIdx$$19$$), this.$_getTableDomUtils$().$styleTableBodyRow$($tableBodyRow$$3$$), this.$_getTableDomUtils$().$insertTableBodyRow$($rowIdx$$19$$, $tableBodyRow$$3$$, $tableBodyDocFrag$$1$$), $row$$38$$ instanceof $oj$$14$$.$Row$ ? this.$_refreshTableBodyRow$($rowIdx$$19$$, $row$$38$$, $tableBodyRow$$3$$, 
          $tableBodyDocFrag$$1$$) : this.$_asyncRefreshTableBodyRow$($row$$38$$));
        }
        $j$$33_tableBody$$2$$.append($tableBodyDocFrag$$1$$);
        for ($i$$197$$ = $startIndex$$11$$;$i$$197$$ < $endIndex$$7$$;$i$$197$$++) {
          for ($rowIdx$$19$$ = $i$$197$$ - $startIndex$$11$$, this.$_getTableDomUtils$().$renderDelayedTableBodyRow$($rowIdx$$19$$), $columns$$9_data$$114$$ = this.$_getColumnDefs$(), $j$$33_tableBody$$2$$ = 0;$j$$33_tableBody$$2$$ < $columns$$9_data$$114$$.length;$j$$33_tableBody$$2$$++) {
            this.$_getTableDomUtils$().$renderDelayedTableBodyCell$($rowIdx$$19$$, $j$$33_tableBody$$2$$);
          }
        }
        this.$_getTableDomUtils$().$clearDelayedRenderRows$();
        this.$_getTableDomUtils$().$clearDelayedRenderCells$();
      } else {
        this.$_showNoDataMessage$();
      }
    }, $_refreshTableBodyRow$:function($rowIdx$$20$$, $row$$39$$, $tableBodyRow$$4$$, $docFrag$$1$$) {
      var $j$$34_rowRenderer$$ = this.$_getRowRenderer$(), $columns$$10_rowContext$$ = this.$_getColumnDefs$();
      if (isNaN($rowIdx$$20$$) || 0 > $rowIdx$$20$$) {
        throw "Error: Invalid rowIdx value: " + $rowIdx$$20$$;
      }
      this.$_hideNoDataMessage$();
      if (null == $tableBodyRow$$4$$) {
        if ($tableBodyRow$$4$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$20$$)) {
          $tableBodyRow$$4$$.empty(), this.$_getTableDomUtils$().$createTableBodyCellAccSelect$($rowIdx$$20$$, $tableBodyRow$$4$$);
        } else {
          return;
        }
      }
      if ($j$$34_rowRenderer$$) {
        var $columns$$10_rowContext$$ = this.$_getTableDomUtils$().$getRendererContextObject$($row$$39$$, $tableBodyRow$$4$$[0]), $cellRenderer_delayedRowObj$$ = {};
        $cellRenderer_delayedRowObj$$.$rowContext$ = $columns$$10_rowContext$$;
        $cellRenderer_delayedRowObj$$.rowRenderer = $j$$34_rowRenderer$$;
        $cellRenderer_delayedRowObj$$.$tableBodyRow$ = $tableBodyRow$$4$$;
        $cellRenderer_delayedRowObj$$.row = $row$$39$$;
        this.$_getTableDomUtils$().$addDelayedRenderRow$($rowIdx$$20$$, $cellRenderer_delayedRowObj$$);
        null == $docFrag$$1$$ && (this.$_getTableDomUtils$().$renderDelayedTableBodyRow$($rowIdx$$20$$), this.$_getTableDomUtils$().$clearDelayedRenderRows$());
      } else {
        for ($j$$34_rowRenderer$$ = 0;$j$$34_rowRenderer$$ < $columns$$10_rowContext$$.length;$j$$34_rowRenderer$$++) {
          $cellRenderer_delayedRowObj$$ = this.$_getColumnRenderer$($j$$34_rowRenderer$$, "cell"), this.$_getTableDomUtils$().$setTableBodyCell$($rowIdx$$20$$, $j$$34_rowRenderer$$, $tableBodyRow$$4$$, $row$$39$$, $cellRenderer_delayedRowObj$$), null == $docFrag$$1$$ && (this.$_getTableDomUtils$().$renderDelayedTableBodyCell$($rowIdx$$20$$, $j$$34_rowRenderer$$), this.$_getTableDomUtils$().$clearDelayedRenderCells$());
        }
      }
    }, $_refreshTableFooter$:function() {
      var $columns$$11$$ = this.$_getColumnDefs$(), $tableFooter_tableFooterRow$$ = this.$_getTableDomUtils$().$getTableFooter$();
      if (!$tableFooter_tableFooterRow$$) {
        if (this.$_isTableFooterless$()) {
          return;
        }
        $tableFooter_tableFooterRow$$ = this.$_getTableDomUtils$().$createTableFooter$();
        this.$_getTableDomUtils$().$styleTableFooter$($tableFooter_tableFooterRow$$);
      }
      $tableFooter_tableFooterRow$$ = this.$_getTableDomUtils$().$getTableFooterRow$();
      $tableFooter_tableFooterRow$$.empty();
      if ($columns$$11$$ && 0 < $columns$$11$$.length) {
        this.$_getTableDomUtils$().$createTableFooterAccSelect$($tableFooter_tableFooterRow$$);
        var $i$$198$$, $column$$12_footerCellContent$$, $footerRenderer$$1$$, $footerCell$$;
        for ($i$$198$$ = 0;$i$$198$$ < $columns$$11$$.length;$i$$198$$++) {
          $column$$12_footerCellContent$$ = $columns$$11$$[$i$$198$$], $footerRenderer$$1$$ = this.$_getColumnRenderer$($i$$198$$, "footer"), $footerCell$$ = this.$_getTableDomUtils$().$createTableFooterCell$(), this.$_getTableDomUtils$().$styleTableFooterCell$($i$$198$$, $footerCell$$), this.$_getTableDomUtils$().$insertTableFooterCell$($i$$198$$, $footerCell$$), $footerRenderer$$1$$ && ($column$$12_footerCellContent$$ = $footerRenderer$$1$$({footerContext:this.$_getTableDomUtils$().$getRendererContextObject$(null, 
          $footerCell$$[0]), column:$column$$12_footerCellContent$$}), null != $column$$12_footerCellContent$$ ? ($footerCell$$.empty(), $footerCell$$.append($column$$12_footerCellContent$$)) : ($footerCell$$ = $$$$14$$($tableFooter_tableFooterRow$$.children(":not(." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$ + ")")[$i$$198$$]), this.$_getTableDomUtils$().$styleTableFooterCell$($i$$198$$, $footerCell$$)));
        }
      }
    }, $_refreshTableHeader$:function() {
      var $columns$$12$$ = this.$_getColumnDefs$(), $tableHeader_tableHeaderRow$$ = this.$_getTableDomUtils$().$getTableHeader$();
      if (!$tableHeader_tableHeaderRow$$) {
        if (this.$_isTableHeaderless$()) {
          return;
        }
        $tableHeader_tableHeaderRow$$ = this.$_getTableDomUtils$().$createTableHeader$();
        this.$_getTableDomUtils$().$styleTableHeader$($tableHeader_tableHeaderRow$$);
      }
      $tableHeader_tableHeaderRow$$ = this.$_getTableDomUtils$().$getTableHeaderRow$();
      $tableHeader_tableHeaderRow$$.empty();
      if ($columns$$12$$ && 0 < $columns$$12$$.length) {
        var $i$$199_tableHeaderAccSelectRowColumn$$ = this.$_getTableDomUtils$().$createTableHeaderAccSelectRowColumn$();
        $tableHeader_tableHeaderRow$$.append($i$$199_tableHeaderAccSelectRowColumn$$);
        for (var $column$$13_headerColumnContent$$, $headerRenderer$$, $headerColumn$$3$$, $i$$199_tableHeaderAccSelectRowColumn$$ = 0;$i$$199_tableHeaderAccSelectRowColumn$$ < $columns$$12$$.length;$i$$199_tableHeaderAccSelectRowColumn$$++) {
          $column$$13_headerColumnContent$$ = $columns$$12$$[$i$$199_tableHeaderAccSelectRowColumn$$], $headerRenderer$$ = this.$_getColumnRenderer$($i$$199_tableHeaderAccSelectRowColumn$$, "header"), $headerColumn$$3$$ = this.$_getTableDomUtils$().$createTableHeaderColumn$($i$$199_tableHeaderAccSelectRowColumn$$), this.$_getTableDomUtils$().$insertTableHeaderColumn$($i$$199_tableHeaderAccSelectRowColumn$$, $headerColumn$$3$$), $headerRenderer$$ && ($column$$13_headerColumnContent$$ = $headerRenderer$$({headerContext:this.$_getTableDomUtils$().$getRendererContextObject$(null, 
          $headerColumn$$3$$[0]), column:$column$$13_headerColumnContent$$}), null != $column$$13_headerColumnContent$$ ? ($headerColumn$$3$$.empty(), $headerColumn$$3$$.append($column$$13_headerColumnContent$$)) : ($headerColumn$$3$$ = $$$$14$$($tableHeader_tableHeaderRow$$.children(":not(." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$ + ")")[$i$$199_tableHeaderAccSelectRowColumn$$]), this.$_getTableDomUtils$().$setTableHeaderColumnAttributes$($i$$199_tableHeaderAccSelectRowColumn$$, 
          $headerColumn$$3$$), this.$_getTableDomUtils$().$styleTableHeaderColumn$($i$$199_tableHeaderAccSelectRowColumn$$, $headerColumn$$3$$))), this.$_getTableDomUtils$().$createTableHeaderColumnAccSelect$($i$$199_tableHeaderAccSelectRowColumn$$, this.$_getColumnSelectionMode$());
        }
        this.$_renderedTableHeaderColumns$ = !0;
      }
    }, $_registerCustomEvents$:function() {
      var $jqEventSpecial$$ = $$$$14$$.event.special;
      $jqEventSpecial$$.ojtableactiverow = {handle:function $$jqEventSpecial$$$ojtableactiverow$handle$($event$$152$$, $JSCompiler_OptimizeArgumentsArray_p0$$) {
        return $event$$152$$.handleObj.handler.apply(this, [$event$$152$$, $JSCompiler_OptimizeArgumentsArray_p0$$]);
      }};
      $jqEventSpecial$$.ojtablepreactiverow = {handle:function $$jqEventSpecial$$$ojtablepreactiverow$handle$($event$$153$$, $JSCompiler_OptimizeArgumentsArray_p1$$) {
        return $event$$153$$.handleObj.handler.apply(this, [$event$$153$$, $JSCompiler_OptimizeArgumentsArray_p1$$]);
      }};
      $jqEventSpecial$$.ojtablescroll = {handle:function $$jqEventSpecial$$$ojtablescroll$handle$($event$$154$$, $JSCompiler_OptimizeArgumentsArray_p2$$) {
        return $event$$154$$.handleObj.handler.apply(this, [$event$$154$$, $JSCompiler_OptimizeArgumentsArray_p2$$]);
      }};
      $jqEventSpecial$$.ojtableselect = {handle:function $$jqEventSpecial$$$ojtableselect$handle$($event$$155$$, $JSCompiler_OptimizeArgumentsArray_p3$$) {
        return $event$$155$$.handleObj.handler.apply(this, [$event$$155$$, $JSCompiler_OptimizeArgumentsArray_p3$$]);
      }};
    }, $_registerDataSourceEventListeners$:function() {
      var $data$$115$$ = this.$_getData$();
      if (null != $data$$115$$) {
        this.$_unregisterDataSourceEventListeners$();
        this.$_dataSourceEventHandlers$ = [];
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.REQUEST, eventHandler:this.$_handleDataFetchStart$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.SYNC, eventHandler:this.$_handleDataFetchEnd$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.SORT, eventHandler:this.$_handleDataSort$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.ADD, eventHandler:this.$_handleDataRowAdd$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.REMOVE, eventHandler:this.$_handleDataRowRemove$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.CHANGE, eventHandler:this.$_handleDataRowChange$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.RESET, eventHandler:this.$_handleDataReset$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$14$$.$TableDataSource$.$EventType$.ERROR, eventHandler:this.$_handleDataError$.bind(this)});
        var $i$$200$$;
        for ($i$$200$$ = 0;$i$$200$$ < this.$_dataSourceEventHandlers$.length;$i$$200$$++) {
          $data$$115$$.on(this.$_dataSourceEventHandlers$[$i$$200$$].eventType, this.$_dataSourceEventHandlers$[$i$$200$$].eventHandler);
        }
      }
    }, $_registerDomEventListeners$:function() {
      null != this.$_getTableDomUtils$().$getScroller$() && this.$_getTableDomUtils$().$getScroller$().scroll(function($event$$156$$) {
        var $scrollLeft$$ = $$$$14$$($event$$156$$.target).scrollLeft(), $maxScrollLeft_scrollTop$$ = $$$$14$$($event$$156$$.target)[0].scrollWidth - $$$$14$$($event$$156$$.target)[0].clientWidth;
        "rtl" === this.$_GetReadingDirection$() && ($scrollLeft$$ = $maxScrollLeft_scrollTop$$ - $scrollLeft$$);
        var $maxScrollLeft_scrollTop$$ = $$$$14$$($event$$156$$.target).scrollTop(), $tableHeader$$1_tableHeaderRow$$1$$ = this.$_getTableDomUtils$().$getTableHeader$();
        $tableHeader$$1_tableHeaderRow$$1$$ && (this.$_getTableDomUtils$().$isDivScroller$() ? ("rtl" === this.$_GetReadingDirection$() ? $tableHeader$$1_tableHeaderRow$$1$$.css("right", "-" + $scrollLeft$$ + "px") : $tableHeader$$1_tableHeaderRow$$1$$.css("left", "-" + $scrollLeft$$ + "px"), $tableHeader$$1_tableHeaderRow$$1$$.css("width", this.$_tableHeaderWidth$ + $scrollLeft$$ + "px")) : ($tableHeader$$1_tableHeaderRow$$1$$ = this.$_getTableDomUtils$().$getTableHeaderRow$()) && ("rtl" === this.$_GetReadingDirection$() ? 
        $tableHeader$$1_tableHeaderRow$$1$$.css("right", "-" + $scrollLeft$$ + "px") : $tableHeader$$1_tableHeaderRow$$1$$.css("left", "-" + $scrollLeft$$ + "px")), this._trigger("scroll", $event$$156$$, {scrollLeft:$$$$14$$($event$$156$$.target).scrollLeft(), scrollTop:$maxScrollLeft_scrollTop$$}));
      }.bind(this));
    }, $_registerResizeListener$:function($element$$54$$) {
      if (!this.$_isResizeListenerAdded$) {
        var $self$$74$$ = this;
        $oj$$14$$.$DomUtils$.$addResizeListener$($element$$54$$[0], function($width$$18$$, $height$$15$$) {
          $self$$74$$.$_getTableDomUtils$().$refreshTableDimensions$(!1, $width$$18$$, $height$$15$$);
        });
        this.$_isResizeListenerAdded$ = !0;
      }
    }, $_removeKeyboardKey$:function($keyCode$$2$$) {
      var $keyboardKeys$$2$$ = this.$_getKeyboardKeys$(), $i$$201$$;
      for ($i$$201$$ = 0;$i$$201$$ < $keyboardKeys$$2$$.length;$i$$201$$++) {
        $keyboardKeys$$2$$[$i$$201$$] == $keyCode$$2$$ && $keyboardKeys$$2$$.splice($i$$201$$, 1);
      }
    }, $_scrollColumnIntoViewport$:function($columnIdx$$20_scrollbarWidth$$) {
      var $tableBody$$3$$ = this.$_getTableDomUtils$().$getTableBody$(), $headerColumnRect_tableHeaderColumn$$6$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$20_scrollbarWidth$$);
      if ($headerColumnRect_tableHeaderColumn$$6$$) {
        $columnIdx$$20_scrollbarWidth$$ = this.$_getTableDomUtils$().$getScrollbarWidth$();
        var $headerColumnRect_tableHeaderColumn$$6$$ = $headerColumnRect_tableHeaderColumn$$6$$.get(0).getBoundingClientRect(), $tableBodyRect$$ = $tableBody$$3$$.get(0).getBoundingClientRect(), $scrollLeftDiff_scrolledLeft$$ = !1;
        $headerColumnRect_tableHeaderColumn$$6$$.left < $tableBodyRect$$.left && ($scrollLeftDiff_scrolledLeft$$ = $tableBodyRect$$.left - $headerColumnRect_tableHeaderColumn$$6$$.left, $tableBody$$3$$.scrollLeft($tableBody$$3$$.scrollLeft() - $scrollLeftDiff_scrolledLeft$$), $scrollLeftDiff_scrolledLeft$$ = !0);
        $headerColumnRect_tableHeaderColumn$$6$$.right > $tableBodyRect$$.right - $columnIdx$$20_scrollbarWidth$$ && !$scrollLeftDiff_scrolledLeft$$ && ($scrollLeftDiff_scrolledLeft$$ = $headerColumnRect_tableHeaderColumn$$6$$.right - $tableBodyRect$$.right + $columnIdx$$20_scrollbarWidth$$, $tableBody$$3$$.scrollLeft($tableBody$$3$$.scrollLeft() + $scrollLeftDiff_scrolledLeft$$));
      }
    }, $_scrollRowIntoViewport$:function($rowIdx$$21_scrollTopDiff_scrollbarHeight$$) {
      var $rowRect_tableBodyRow$$5$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$21_scrollTopDiff_scrollbarHeight$$);
      $rowIdx$$21_scrollTopDiff_scrollbarHeight$$ = this.$_getTableDomUtils$().$getScrollbarHeight$();
      var $rowRect_tableBodyRow$$5$$ = $rowRect_tableBodyRow$$5$$.get(0).getBoundingClientRect(), $scrollingElement$$ = this.$_getTableDomUtils$().$getScroller$(), $scrollingElementRect$$ = $scrollingElement$$.get(0).getBoundingClientRect(), $scrolledDown$$ = !1;
      $rowRect_tableBodyRow$$5$$.bottom > $scrollingElementRect$$.bottom - $rowIdx$$21_scrollTopDiff_scrollbarHeight$$ && ($rowIdx$$21_scrollTopDiff_scrollbarHeight$$ = $rowRect_tableBodyRow$$5$$.bottom - $scrollingElementRect$$.bottom + $rowIdx$$21_scrollTopDiff_scrollbarHeight$$, $scrollingElement$$.scrollTop($scrollingElement$$.scrollTop() + $rowIdx$$21_scrollTopDiff_scrollbarHeight$$), $scrolledDown$$ = !0);
      $rowRect_tableBodyRow$$5$$.top < $scrollingElementRect$$.top && !$scrolledDown$$ && ($rowIdx$$21_scrollTopDiff_scrollbarHeight$$ = $scrollingElementRect$$.top - $rowRect_tableBodyRow$$5$$.top, $scrollingElement$$.scrollTop($scrollingElement$$.scrollTop() - $rowIdx$$21_scrollTopDiff_scrollbarHeight$$));
    }, $_setHeaderColumnFocus$:function($columnIdx$$21$$, $focused$$, $element$$55$$) {
      if ($focused$$) {
        var $focusedHeaderColumnIdx$$4$$ = this.$_getFocusedHeaderColumnIdx$();
        null != $focusedHeaderColumnIdx$$4$$ && $focusedHeaderColumnIdx$$4$$ != $columnIdx$$21$$ && this.$_setHeaderColumnFocus$($focusedHeaderColumnIdx$$4$$, !1, $element$$55$$);
        this.$_clearFocusedRow$();
        this.$_clearSelectedRows$();
        this.$_scrollColumnIntoViewport$($columnIdx$$21$$);
      }
      this.$_setHeaderColumnState$($columnIdx$$21$$, {$focused$:$focused$$}, $element$$55$$);
    }, $_setHeaderColumnSelection$:function($accSelectionColumn_columnIdx$$22$$, $selected$$15$$, $element$$56$$, $event$$157$$) {
      if (this.$_getColumnSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ || this.$_getColumnSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_MULTIPLE$) {
        if (isNaN($accSelectionColumn_columnIdx$$22$$) || 0 > $accSelectionColumn_columnIdx$$22$$) {
          throw "Error: Invalid column selection value: " + $accSelectionColumn_columnIdx$$22$$;
        }
        this.$_getColumnSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ && $selected$$15$$ && this.$_clearSelectedHeaderColumns$();
        this.$_setHeaderColumnState$($accSelectionColumn_columnIdx$$22$$, {selected:$selected$$15$$}, $element$$56$$, $event$$157$$);
        this.$_setLastHeaderColumnSelection$($accSelectionColumn_columnIdx$$22$$, $selected$$15$$);
        $accSelectionColumn_columnIdx$$22$$ = this.$_getTableDomUtils$().$getTableHeaderColumnAccSelect$($accSelectionColumn_columnIdx$$22$$);
        $$$$14$$($accSelectionColumn_columnIdx$$22$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_COLUMN_CLASS$)[0]).prop("checked", $selected$$15$$);
      }
    }, $_setHeaderColumnState$:function($columnIdx$$23$$, $selected$$16_state$$, $element$$57_headerColumn$$4$$, $event$$158$$) {
      if ($element$$57_headerColumn$$4$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$23$$)) {
        var $focused$$1$$ = $selected$$16_state$$.$focused$;
        $selected$$16_state$$ = $selected$$16_state$$.selected;
        if (null != $selected$$16_state$$) {
          var $selectionChanged$$ = !1;
          $element$$57_headerColumn$$4$$.hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) != $selected$$16_state$$ && ($selected$$16_state$$ ? $element$$57_headerColumn$$4$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) : $element$$57_headerColumn$$4$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$), $selectionChanged$$ = !0);
          $selectionChanged$$ && this._trigger("select", $event$$158$$, {column:$columnIdx$$23$$, selectionAdded:$selected$$16_state$$});
        }
        null != $focused$$1$$ && ($focused$$1$$ ? ($element$$57_headerColumn$$4$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$), this.$_showTableHeaderColumnSortLink$($columnIdx$$23$$)) : ($element$$57_headerColumn$$4$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$), this.$_hideTableHeaderColumnSortLink$($columnIdx$$23$$, !0), this.$_hideTableHeaderColumnSortLink$($columnIdx$$23$$, !1)));
        this.$_updateHeaderColumnCellsClass$($columnIdx$$23$$);
      }
    }, $_setLastHeaderColumnSelection$:function($columnIdx$$24$$, $selected$$17$$) {
      this.$_lastSelectedColumnIdxArray$ || (this.$_lastSelectedColumnIdxArray$ = []);
      var $i$$202$$;
      for ($i$$202$$ = 0;$i$$202$$ < this.$_lastSelectedColumnIdxArray$.length;$i$$202$$++) {
        if (this.$_lastSelectedColumnIdxArray$[$i$$202$$] == $columnIdx$$24$$) {
          this.$_lastSelectedColumnIdxArray$.splice($i$$202$$, 1);
          break;
        }
      }
      $selected$$17$$ && this.$_lastSelectedColumnIdxArray$.push($columnIdx$$24$$);
    }, $_setLastRowSelection$:function($rowIdx$$22$$, $selected$$18$$) {
      this.$_lastSelectedRowIdxArray$ || (this.$_lastSelectedRowIdxArray$ = []);
      for (var $i$$203$$ = 0;$i$$203$$ < this.$_lastSelectedRowIdxArray$.length;$i$$203$$++) {
        if (this.$_lastSelectedRowIdxArray$[$i$$203$$] == $rowIdx$$22$$) {
          this.$_lastSelectedRowIdxArray$.splice($i$$203$$, 1);
          break;
        }
      }
      $selected$$18$$ && this.$_lastSelectedRowIdxArray$.push($rowIdx$$22$$);
    }, $_setRowFocus$:function($rowIdx$$23$$, $focused$$2$$, $element$$58$$) {
      if (-1 == $rowIdx$$23$$) {
        this.$_clearFocusedRow$();
      } else {
        var $tableBodyRow$$6$$ = this.$_getTableDomUtils$().$getTableBodyRow$($rowIdx$$23$$);
        if ($tableBodyRow$$6$$) {
          if ($focused$$2$$) {
            var $focusedRowIdx$$4$$ = this.$_getFocusedRowIdx$();
            null != $focusedRowIdx$$4$$ && $focusedRowIdx$$4$$ != $rowIdx$$23$$ && this.$_setRowFocus$($focusedRowIdx$$4$$, !1, $element$$58$$);
            this.activeRow($rowIdx$$23$$) == $rowIdx$$23$$ && ($tableBodyRow$$6$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$), this.$_scrollRowIntoViewport$($rowIdx$$23$$), this.$_updateRowCellsClass$($rowIdx$$23$$, {$focused$:!0, hover:!1}), this.$_clearFocusedHeaderColumn$(), this.$_clearSelectedHeaderColumns$(), this.$_setTableNavigationMode$(!0));
          } else {
            $tableBodyRow$$6$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$);
          }
          this.$_updateRowCellsClass$($rowIdx$$23$$, {$focused$:$focused$$2$$});
        }
      }
    }, $_setRowSelection$:function($accSelectionCell_rowIdx$$24$$, $selected$$19$$, $element$$59_tableBodyRow$$7$$, $event$$159$$) {
      if (this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ || this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_MULTIPLE$) {
        if (isNaN($accSelectionCell_rowIdx$$24$$) || 0 > $accSelectionCell_rowIdx$$24$$) {
          throw "Error: Invalid row selection value: " + $accSelectionCell_rowIdx$$24$$;
        }
        this.$_getRowSelectionMode$() == this.$_OPTION_SELECTION_MODES$.$_SINGLE$ && $selected$$19$$ && this.$_clearSelectedRows$();
        $element$$59_tableBodyRow$$7$$ = this.$_getTableDomUtils$().$getTableBodyRow$($accSelectionCell_rowIdx$$24$$);
        var $selectionChanged$$1$$ = !1;
        $element$$59_tableBodyRow$$7$$.hasClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) != $selected$$19$$ && ($selected$$19$$ ? $element$$59_tableBodyRow$$7$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) : $element$$59_tableBodyRow$$7$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$), $selectionChanged$$1$$ = !0);
        $selectionChanged$$1$$ && this._trigger("select", $event$$159$$, {row:$accSelectionCell_rowIdx$$24$$, selectionAdded:$selected$$19$$});
        $selectionChanged$$1$$ && ($selected$$19$$ ? this.$_updateRowCellsClass$($accSelectionCell_rowIdx$$24$$, {hover:!1, $focused$:!1, selected:!0}) : this.$_updateRowCellsClass$($accSelectionCell_rowIdx$$24$$, {selected:!1}));
        this.$_setLastRowSelection$($accSelectionCell_rowIdx$$24$$, $selected$$19$$);
        $accSelectionCell_rowIdx$$24$$ = this.$_getTableDomUtils$().$getTableBodyCellAccSelect$($element$$59_tableBodyRow$$7$$);
        $$$$14$$($accSelectionCell_rowIdx$$24$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_ROW_CLASS$)[0]).prop("checked", $selected$$19$$);
      }
    }, $_setTableNavigationMode$:function($value$$179$$) {
      this.$_tableNavMode$ = $value$$179$$;
    }, $_showNoDataMessage$:function() {
      this.$_getTableDomUtils$().$getTableNoDataMessage$().css("display", "inline");
    }, $_showStatusMessage$:function() {
      this.$_getTableDomUtils$().$getTableStatusMessage$().css("display", "inline");
    }, $_showTableHeaderColumnSortLink$:function($columnIdx$$25_tableHeaderColumn$$7$$) {
      if (this.$_getColumnDefs$()[$columnIdx$$25_tableHeaderColumn$$7$$].sortable == this.$_OPTION_ENABLED$ && ($columnIdx$$25_tableHeaderColumn$$7$$ = this.$_getTableDomUtils$().$getTableHeaderColumn$($columnIdx$$25_tableHeaderColumn$$7$$)) && null == $columnIdx$$25_tableHeaderColumn$$7$$.data("sorted")) {
        var $headerColumnAscLink$$2$$ = $columnIdx$$25_tableHeaderColumn$$7$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$);
        $headerColumnAscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_ENABLED$);
        $headerColumnAscLink$$2$$.removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
        $columnIdx$$25_tableHeaderColumn$$7$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
        $columnIdx$$25_tableHeaderColumn$$7$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
      }
    }, $_unregisterDataSourceEventListeners$:function() {
      var $data$$116$$ = this.$_getData$();
      if (null != this.$_dataSourceEventHandlers$ && null != $data$$116$$) {
        var $i$$204$$;
        for ($i$$204$$ = 0;$i$$204$$ < this.$_dataSourceEventHandlers$.length;$i$$204$$++) {
          $data$$116$$.off(this.$_dataSourceEventHandlers$[$i$$204$$].eventType, this.$_dataSourceEventHandlers$[$i$$204$$].eventHandler);
        }
      }
    }, $_updateHeaderColumnCellsClass$:function($columnIdx$$26$$) {
      var $selected$$20$$ = this.$_getHeaderColumnState$($columnIdx$$26$$).selected, $data$$117$$ = this.$_getData$(), $i$$205$$, $tableBodyCell$$2$$;
      for ($i$$205$$ = 0;$i$$205$$ < $data$$117$$.size();$i$$205$$++) {
        $tableBodyCell$$2$$ = this.$_getTableDomUtils$().$getTableBodyCell$($i$$205$$, $columnIdx$$26$$), $selected$$20$$ ? $$$$14$$($tableBodyCell$$2$$).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) : $$$$14$$($tableBodyCell$$2$$).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
      }
    }, $_updateRowCellsClass$:function($rowIdx$$25$$, $state$$2$$) {
      var $tableBodyCells$$ = this.$_getTableDomUtils$().$getTableBodyCells$($rowIdx$$25$$), $focused$$3$$ = $state$$2$$.$focused$, $selected$$21$$ = $state$$2$$.selected, $hover$$ = $state$$2$$.hover;
      if ($tableBodyCells$$) {
        if (null != $hover$$) {
          var $i$$206$$;
          for ($i$$206$$ = 0;$i$$206$$ < $tableBodyCells$$.length;$i$$206$$++) {
            $hover$$ ? $$$$14$$($tableBodyCells$$[$i$$206$$]).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$) : $$$$14$$($tableBodyCells$$[$i$$206$$]).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_HOVER$);
          }
        }
        if (null != $focused$$3$$) {
          for ($i$$206$$ = 0;$i$$206$$ < $tableBodyCells$$.length;$i$$206$$++) {
            $focused$$3$$ ? $$$$14$$($tableBodyCells$$[$i$$206$$]).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$) : $$$$14$$($tableBodyCells$$[$i$$206$$]).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_FOCUS$);
          }
        }
        if (null != $selected$$21$$) {
          for ($i$$206$$ = 0;$i$$206$$ < $tableBodyCells$$.length;$i$$206$$++) {
            $selected$$21$$ ? $$$$14$$($tableBodyCells$$[$i$$206$$]).addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$) : $$$$14$$($tableBodyCells$$[$i$$206$$]).removeClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_SELECTED$);
          }
        }
      }
    }});
  })();
  $oj$$14$$.$FlattenedTreeTableDataSource$ = function $$oj$$14$$$$FlattenedTreeTableDataSource$$($data$$118$$, $options$$262$$) {
    $options$$262$$ = $options$$262$$ || {};
    if (!($data$$118$$ instanceof $oj$$14$$.$FlattenedTreeDataSource$)) {
      throw Error($oj$$14$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$14$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    this.$dataSource$ = $data$$118$$;
    this.$_rowSet$ = new $oj$$14$$.$FlattenedTreeRowSet$($data$$118$$, $options$$262$$);
    this.$_addRowSetEventListeners$();
    this.Init();
    if (null != $options$$262$$ && ("enabled" == $options$$262$$.startFetch || null == $options$$262$$.startFetch) || null == $options$$262$$) {
      var $self$$75$$ = this;
      setTimeout(function() {
        $self$$75$$.fetch({startFetch:"enabled"});
      }, 0);
    }
  };
  $goog$exportPath_$$("FlattenedTreeTableDataSource", $oj$$14$$.$FlattenedTreeTableDataSource$, $oj$$14$$);
  $oj$$14$$.$Object$.$createSubclass$($oj$$14$$.$FlattenedTreeTableDataSource$, $oj$$14$$.$TableDataSource$, "oj.FlattenedTreeTableDataSource");
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.Init = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$Init$() {
    $oj$$14$$.$FlattenedTreeTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.Init", {Init:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.Init});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.getCapability = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$getCapability$($feature$$14$$) {
    return this.$dataSource$.getCapability($feature$$14$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.getCapability", {getCapability:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.getCapability});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.getWrappedDataSource = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$getWrappedDataSource$() {
    return this.$dataSource$;
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.getWrappedDataSource", {getWrappedDataSource:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.getWrappedDataSource});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.fetch = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$fetch$($options$$263$$) {
    this.$_rowSet$.fetch($options$$263$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.fetch", {fetch:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.fetch});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.at = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$at$($index$$157$$) {
    return this.$_rowSet$.at($index$$157$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.at", {at:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.at});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.collapse = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$collapse$($rowKey$$19$$) {
    this.$_rowSet$.collapse($rowKey$$19$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.collapse", {collapse:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.collapse});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.expand = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$expand$($rowKey$$20$$) {
    this.$_rowSet$.expand($rowKey$$20$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.expand", {expand:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.expand});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.get = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$get$($id$$26$$) {
    return this.$_rowSet$.get($id$$26$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.get", {get:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.get});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.hasMore = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$hasMore$() {
    return this.$_rowSet$.hasMore();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.hasMore", {hasMore:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.hasMore});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.indexOf = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$indexOf$($model$$49$$) {
    return this.$_rowSet$.indexOf($model$$49$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.indexOf", {indexOf:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.indexOf});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.on = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$on$($eventType$$36$$, $eventHandler$$13$$) {
    if ("expand" == $eventType$$36$$ || "collapse" == $eventType$$36$$) {
      this.$_rowSet$.on($eventType$$36$$, $eventHandler$$13$$);
    } else {
      $oj$$14$$.$FlattenedTreeTableDataSource$.$superclass$.on.call(this, $eventType$$36$$, $eventHandler$$13$$);
    }
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.on", {on:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.on});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.off = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$off$($eventType$$37$$, $eventHandler$$14$$) {
    "expand" == $eventType$$37$$ || "collapse" == $eventType$$37$$ ? this.$_rowSet$.off($eventType$$37$$, $eventHandler$$14$$) : $oj$$14$$.$FlattenedTreeTableDataSource$.$superclass$.off.call(this, $eventType$$37$$, $eventHandler$$14$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.off", {off:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.off});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.size = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$size$() {
    return this.$_rowSet$.size();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.size", {size:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.size});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.sort = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$sort$($criteria$$11$$) {
    this.$_rowSet$.sort($criteria$$11$$);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.sort", {sort:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.sort});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.startIndex = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$startIndex$() {
    return this.$_rowSet$.startIndex();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.startIndex", {startIndex:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.startIndex});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.totalSize = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$totalSize$() {
    return this.$_rowSet$.totalSize();
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("FlattenedTreeTableDataSource.prototype.totalSize", {totalSize:$oj$$14$$.$FlattenedTreeTableDataSource$.prototype.totalSize});
  $oj$$14$$.$FlattenedTreeTableDataSource$.prototype.$_addRowSetEventListeners$ = function $$oj$$14$$$$FlattenedTreeTableDataSource$$$$_addRowSetEventListeners$$() {
    var $self$$76$$ = this;
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.ADD, function($event$$160$$) {
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$76$$, $oj$$14$$.$TableDataSource$.$EventType$.ADD, $event$$160$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.REMOVE, function($event$$161$$) {
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$76$$, $oj$$14$$.$TableDataSource$.$EventType$.REMOVE, $event$$161$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.REQUEST, function($event$$162$$) {
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$76$$, $oj$$14$$.$TableDataSource$.$EventType$.REQUEST, $event$$162$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.RESET, function($event$$163$$) {
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$76$$, $oj$$14$$.$TableDataSource$.$EventType$.RESET, $event$$163$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.SORT, function($event$$164$$) {
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$76$$, $oj$$14$$.$TableDataSource$.$EventType$.SORT, $event$$164$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.CHANGE, function($event$$165$$) {
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$76$$, $oj$$14$$.$TableDataSource$.$EventType$.CHANGE, $event$$165$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.SYNC, function($event$$166$$) {
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$76$$, $oj$$14$$.$TableDataSource$.$EventType$.SYNC, $event$$166$$);
    });
    this.$_rowSet$.on($oj$$14$$.$RowSet$.$EventType$.ERROR, function($event$$167$$) {
      $oj$$14$$.$TableDataSource$.$superclass$.handleEvent.call($self$$76$$, $oj$$14$$.$TableDataSource$.$EventType$.ERROR, $event$$167$$);
    });
  };
  $oj$$14$$.$TableDomUtils$ = function $$oj$$14$$$$TableDomUtils$$($component$$12$$) {
    this.$component$ = $component$$12$$;
    this.options = $component$$12$$.options;
    this.element = $component$$12$$.element;
    this.Init();
    var $self$$77$$ = this;
    setInterval(function() {
      null != $self$$77$$.$_refreshTableDimensionsTimer$ && ($self$$77$$.$_refreshTableDimensions$($self$$77$$.$_refreshTableDimensionsTimer$.width, $self$$77$$.$_refreshTableDimensionsTimer$.height), $self$$77$$.$_refreshTableDimensionsTimer$ = null);
    }, 50);
  };
  $goog$exportPath_$$("TableDomUtils", $oj$$14$$.$TableDomUtils$, $oj$$14$$);
  $oj$$14$$.$Object$.$createSubclass$($oj$$14$$.$TableDomUtils$, $oj$$14$$.$Object$, "oj.TableDomUtils");
  $oj$$14$$.$TableDomUtils$.prototype.Init = function $$oj$$14$$$$TableDomUtils$$$Init$() {
    $oj$$14$$.$TableDomUtils$.$superclass$.Init.call(this);
  };
  $oj$$14$$.$Object$.$exportPrototypeSymbol$("TableDomUtils.prototype.Init", {Init:$oj$$14$$.$TableDomUtils$.prototype.Init});
  $oj$$14$$.$TableDomUtils$.prototype.$addDelayedRenderCell$ = function $$oj$$14$$$$TableDomUtils$$$$addDelayedRenderCell$$($rowIdx$$26$$, $columnIdx$$27$$, $delayedCellObj$$) {
    this.$_delayedRenderCells$ || (this.$_delayedRenderCells$ = []);
    var $delayedRowCells$$ = this.$_delayedRenderCells$[$rowIdx$$26$$];
    $delayedRowCells$$ || ($delayedRowCells$$ = []);
    $delayedRowCells$$[$columnIdx$$27$$] = $delayedCellObj$$;
    this.$_delayedRenderCells$[$rowIdx$$26$$] = $delayedRowCells$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$addDelayedRenderRow$ = function $$oj$$14$$$$TableDomUtils$$$$addDelayedRenderRow$$($rowIdx$$27$$, $delayedRowObj$$1$$) {
    this.$_delayedRenderRows$ || (this.$_delayedRenderRows$ = []);
    this.$_delayedRenderRows$[$rowIdx$$27$$] = $delayedRowObj$$1$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$clearCachedDom$ = function $$oj$$14$$$$TableDomUtils$$$$clearCachedDom$$() {
    this.$clearCachedDomRowData$();
    this.$_tableContainerDimensions$ = null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$clearCachedDomRowData$ = function $$oj$$14$$$$TableDomUtils$$$$clearCachedDomRowData$$() {
    this.$_cachedDomTableBodyRows$ = null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$clearDelayedRenderCells$ = function $$oj$$14$$$$TableDomUtils$$$$clearDelayedRenderCells$$() {
    if (null != this.$_delayedRenderCells$) {
      for (;0 < this.$_delayedRenderCells$.length;) {
        this.$_delayedRenderCells$.pop();
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$clearDelayedRenderRows$ = function $$oj$$14$$$$TableDomUtils$$$$clearDelayedRenderRows$$() {
    if (null != this.$_delayedRenderRows$) {
      for (;0 < this.$_delayedRenderRows$.length;) {
        this.$_delayedRenderRows$.pop();
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createContextMenu$ = function $$oj$$14$$$$TableDomUtils$$$$createContextMenu$$($handleContextMenuBeforeShow$$, $handleContextMenuSelect$$) {
    var $menuContainer$$1_menuContainerId$$ = null, $listItems$$1_sortMenu$$1$$ = $menuContainer$$1_menuContainerId$$ = null, $self$$78$$ = this;
    null == this.options.contextMenu && null == this.$getTable$().attr("contextmenu") ? ($menuContainer$$1_menuContainerId$$ = $$$$14$$(document.createElement("ul")), $menuContainer$$1_menuContainerId$$.css("display", "none"), $menuContainer$$1_menuContainerId$$.attr("id", this.$getTable$().attr("id") + "contextmenu"), this.$getTableContainer$().append($menuContainer$$1_menuContainerId$$), $listItems$$1_sortMenu$$1$$ = this.$createContextMenuItem$("sort"), $menuContainer$$1_menuContainerId$$.append($listItems$$1_sortMenu$$1$$), 
    $menuContainer$$1_menuContainerId$$.ojMenu(), this.$component$._setOption("contextMenu", "#" + $menuContainer$$1_menuContainerId$$.attr("id"))) : ($menuContainer$$1_menuContainerId$$ = null == this.options.contextMenu ? this.$getTable$().attr("contextmenu") : this.options.contextMenu, $menuContainer$$1_menuContainerId$$ = $$$$14$$("#" + $menuContainer$$1_menuContainerId$$), $listItems$$1_sortMenu$$1$$ = $menuContainer$$1_menuContainerId$$.find("[data-oj-command]"), $listItems$$1_sortMenu$$1$$.each(function() {
      var $command$$7$$;
      0 === $$$$14$$(this).children("a").length && ($command$$7$$ = $$$$14$$(this).attr("data-oj-command").split("-"), $$$$14$$(this).replaceWith($self$$78$$.$createContextMenuItem$($command$$7$$[$command$$7$$.length - 1])));
    }), $menuContainer$$1_menuContainerId$$.ojMenu("refresh"));
    $menuContainer$$1_menuContainerId$$.on("ojbeforeshow", $handleContextMenuBeforeShow$$);
    $menuContainer$$1_menuContainerId$$.on("ojselect", $handleContextMenuSelect$$);
    this.$_menuContainer$ = $menuContainer$$1_menuContainerId$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createContextMenuItem$ = function $$oj$$14$$$$TableDomUtils$$$$createContextMenuItem$$($command$$8$$) {
    return "sort" === $command$$8$$ ? $$$$14$$(this.$createContextMenuListItem$($command$$8$$)).append($$$$14$$("\x3cul\x3e\x3c/ul\x3e").append($$$$14$$(this.$createContextMenuListItem$("sortAsc"))).append($$$$14$$(this.$createContextMenuListItem$("sortDsc")))) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createContextMenuListItem$ = function $$oj$$14$$$$TableDomUtils$$$$createContextMenuListItem$$($command$$9$$) {
    var $contextMenuListItem$$ = $$$$14$$(document.createElement("li"));
    $contextMenuListItem$$.attr("data-oj-command", "oj-table-" + $command$$9$$);
    $contextMenuListItem$$.append(this.$createContextMenuLabel$($command$$9$$));
    return $contextMenuListItem$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createContextMenuLabel$ = function $$oj$$14$$$$TableDomUtils$$$$createContextMenuLabel$$($command$$10$$) {
    var $contextMenuLabel$$ = $$$$14$$(document.createElement("a"));
    $contextMenuLabel$$.attr("href", "#");
    var $commandString$$ = null;
    "sort" == $command$$10$$ ? $commandString$$ = this.$component$.$getTranslatedString$("labelSort") : "sortAsc" == $command$$10$$ ? $commandString$$ = this.$component$.$getTranslatedString$("labelSortAsc") : "sortDsc" == $command$$10$$ && ($commandString$$ = this.$component$.$getTranslatedString$("labelSortDsc"));
    $contextMenuLabel$$.append($commandString$$);
    return $contextMenuLabel$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createInitialTable$ = function $$oj$$14$$$$TableDomUtils$$$$createInitialTable$$($isTableHeaderless$$, $isTableFooterless$$, $handleContextMenuBeforeShow$$1$$, $handleContextMenuSelect$$1$$) {
    this.$getTable$();
    this.$createTableContainer$();
    this.$createContextMenu$($handleContextMenuBeforeShow$$1$$, $handleContextMenuSelect$$1$$);
    this.$isDivScroller$() && this.$createTableDivScroller$();
    $isTableHeaderless$$ || this.$createTableHeader$();
    $isTableFooterless$$ || this.$createTableFooter$();
    this.$createTableBody$();
    this.$createTableNoDataMessage$();
    this.$createTableStatusMessage$();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableBody$ = function $$oj$$14$$$$TableDomUtils$$$$createTableBody$$() {
    var $table$$4$$ = this.$getTable$(), $tableBody$$4$$ = $$$$14$$(document.createElement("tbody"));
    $table$$4$$.append($tableBody$$4$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$createTableBodyCell$$() {
    return $$$$14$$(document.createElement("td"));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableBodyCellAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$createTableBodyCellAccSelect$$($rowIdx$$29$$, $tableBodyRow$$8$$) {
    var $accSelectionCell$$1$$ = this.$getTableBodyCellAccSelect$($tableBodyRow$$8$$), $accSelectCheckbox$$2_isTableHeaderless$$1$$ = null == this.$getTableHeader$() ? !0 : !1;
    if (null == $accSelectionCell$$1$$) {
      $accSelectionCell$$1$$ = $$$$14$$(document.createElement("td"));
      $accSelectionCell$$1$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$);
      $accSelectionCell$$1$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
      $accSelectCheckbox$$2_isTableHeaderless$$1$$ || $accSelectionCell$$1$$.attr("headers", $oj$$14$$.$TableDomUtils$.$_COLUMN_HEADER_ROW_SELECT_ID$);
      $accSelectCheckbox$$2_isTableHeaderless$$1$$ = $$$$14$$(document.createElement("input"));
      $accSelectCheckbox$$2_isTableHeaderless$$1$$.attr("id", "acc_sel_row" + $rowIdx$$29$$);
      $accSelectCheckbox$$2_isTableHeaderless$$1$$.attr("type", "checkbox");
      $accSelectCheckbox$$2_isTableHeaderless$$1$$.attr("tabindex", "-1");
      var $selectRowTitle$$ = this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_LABEL_SELECT_ROW$);
      $accSelectCheckbox$$2_isTableHeaderless$$1$$.attr("title", $selectRowTitle$$);
      $accSelectCheckbox$$2_isTableHeaderless$$1$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_ROW_CLASS$);
      $accSelectionCell$$1$$.append($accSelectCheckbox$$2_isTableHeaderless$$1$$);
      $tableBodyRow$$8$$.prepend($accSelectionCell$$1$$);
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$createTableBodyRow$$($rowIdx$$30$$) {
    var $tableBodyRow$$9$$ = $$$$14$$(document.createElement("tr"));
    this.$createTableBodyCellAccSelect$($rowIdx$$30$$, $tableBodyRow$$9$$);
    return $tableBodyRow$$9$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableContainer$ = function $$oj$$14$$$$TableDomUtils$$$$createTableContainer$$() {
    var $tableContainer$$1$$ = $$$$14$$(document.createElement("div"));
    this.element.parent()[0].replaceChild($tableContainer$$1$$[0], this.element[0]);
    $tableContainer$$1$$.prepend(this.element);
    this.$_cachedDomTableContainer$ = $tableContainer$$1$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableFooter$ = function $$oj$$14$$$$TableDomUtils$$$$createTableFooter$$() {
    var $table$$5$$ = this.$getTable$(), $tableFooter$$1$$ = $$$$14$$(document.createElement("tfoot")), $tableBody$$5_tableFooterRow$$1_tableHeader$$2$$ = $$$$14$$(document.createElement("tr"));
    this.$createTableFooterAccSelect$($tableBody$$5_tableFooterRow$$1_tableHeader$$2$$);
    $tableFooter$$1$$.append($tableBody$$5_tableFooterRow$$1_tableHeader$$2$$);
    $tableBody$$5_tableFooterRow$$1_tableHeader$$2$$ = this.$getTableHeader$();
    null != $tableBody$$5_tableFooterRow$$1_tableHeader$$2$$ ? $tableBody$$5_tableFooterRow$$1_tableHeader$$2$$.after($tableFooter$$1$$) : ($tableBody$$5_tableFooterRow$$1_tableHeader$$2$$ = this.$getTableBody$(), null != $tableBody$$5_tableFooterRow$$1_tableHeader$$2$$ ? $tableBody$$5_tableFooterRow$$1_tableHeader$$2$$.before($tableFooter$$1$$) : $table$$5$$.append($tableFooter$$1$$));
    return $tableFooter$$1$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableFooterAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$createTableFooterAccSelect$$($tableFooterRow$$2$$) {
    var $accFooterCell$$ = $tableFooterRow$$2$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
    null != $accFooterCell$$ && 0 < $accFooterCell$$.length ? $$$$14$$($accFooterCell$$[0]) : ($accFooterCell$$ = $$$$14$$(document.createElement("td")), $accFooterCell$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$), $accFooterCell$$.attr("tabindex", "-1"), $tableFooterRow$$2$$.prepend($accFooterCell$$));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableFooterCell$ = function $$oj$$14$$$$TableDomUtils$$$$createTableFooterCell$$() {
    return $$$$14$$(document.createElement("td"));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableHeader$ = function $$oj$$14$$$$TableDomUtils$$$$createTableHeader$$() {
    var $table$$6$$ = this.$getTable$(), $tableHeader$$3$$ = $$$$14$$(document.createElement("thead")), $tableBody$$6_tableFooter$$2_tableHeaderRow$$2$$ = $$$$14$$(document.createElement("tr"));
    $tableHeader$$3$$.append($tableBody$$6_tableFooter$$2_tableHeaderRow$$2$$);
    $tableBody$$6_tableFooter$$2_tableHeaderRow$$2$$ = this.$getTableFooter$();
    null != $tableBody$$6_tableFooter$$2_tableHeaderRow$$2$$ ? $tableBody$$6_tableFooter$$2_tableHeaderRow$$2$$.before($tableHeader$$3$$) : ($tableBody$$6_tableFooter$$2_tableHeaderRow$$2$$ = this.$getTableBody$(), null != $tableBody$$6_tableFooter$$2_tableHeaderRow$$2$$ ? $tableBody$$6_tableFooter$$2_tableHeaderRow$$2$$.before($tableHeader$$3$$) : $table$$6$$.append($tableHeader$$3$$));
    return $tableHeader$$3$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableHeaderAccSelectRowColumn$ = function $$oj$$14$$$$TableDomUtils$$$$createTableHeaderAccSelectRowColumn$$() {
    var $headerColumn$$5$$ = $$$$14$$(document.createElement("th"));
    $headerColumn$$5$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$);
    $headerColumn$$5$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
    $headerColumn$$5$$.attr("id", $oj$$14$$.$TableDomUtils$.$_COLUMN_HEADER_ROW_SELECT_ID$);
    var $selectRowTitle$$1$$ = this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_LABEL_SELECT_ROW$);
    $headerColumn$$5$$.attr("title", $selectRowTitle$$1$$);
    $headerColumn$$5$$.css("visibility", "hidden");
    $headerColumn$$5$$.append($selectRowTitle$$1$$);
    return $headerColumn$$5$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableHeaderColumn$ = function $$oj$$14$$$$TableDomUtils$$$$createTableHeaderColumn$$($columnIdx$$30_headerColumnRowDiv$$) {
    var $column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$ = this.$component$.columnMetaData($columnIdx$$30_headerColumnRowDiv$$), $headerColumn$$6$$ = $$$$14$$(document.createElement("th"));
    this.$styleTableHeaderColumn$($columnIdx$$30_headerColumnRowDiv$$, $headerColumn$$6$$);
    $columnIdx$$30_headerColumnRowDiv$$ = $$$$14$$(document.createElement("div"));
    $columnIdx$$30_headerColumnRowDiv$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ROW_CLASS$);
    $columnIdx$$30_headerColumnRowDiv$$.css("float", "none");
    $column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$.sortable == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ && ("rtl" === this.$component$.$_GetReadingDirection$() ? $columnIdx$$30_headerColumnRowDiv$$.css("padding-left", "0px") : $columnIdx$$30_headerColumnRowDiv$$.css("padding-right", "0px"));
    $headerColumn$$6$$.append($columnIdx$$30_headerColumnRowDiv$$);
    $headerColumn$$6$$.attr("abbr", $column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$.headerText);
    $headerColumn$$6$$.attr("title", $column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$.headerText);
    var $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$ = $$$$14$$(document.createElement("div"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_TEXT_CLASS$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$.css("display", "inline-block");
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$.attr("style", $column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$.headerStyle);
    $column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$.headerClassName && $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$.addClass($column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$.headerClassName);
    $columnIdx$$30_headerColumnRowDiv$$.append($headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$.append($column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$.headerText);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$ = $$$$14$$(document.createElement("div"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_CLASS$);
    $columnIdx$$30_headerColumnRowDiv$$.append($headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$);
    if ($column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$.sortable == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$) {
      var $headerColumnAccAscLink_headerColumnAscLink$$3$$ = $$$$14$$(document.createElement("a"));
      $headerColumnAccAscLink_headerColumnAscLink$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_LINK_CLASS$);
      $headerColumnAccAscLink_headerColumnAscLink$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_WIDGET_ICON_CLASS$);
      $headerColumnAccAscLink_headerColumnAscLink$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ASC_ICON_CLASS$);
      $headerColumnAccAscLink_headerColumnAscLink$$3$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
      $headerColumnAccAscLink_headerColumnAscLink$$3$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$);
      this.$component$._hoverable($headerColumnAccAscLink_headerColumnAscLink$$3$$);
      $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$.append($headerColumnAccAscLink_headerColumnAscLink$$3$$);
      $headerColumnAccAscLink_headerColumnAscLink$$3$$ = $$$$14$$(document.createElement("a"));
      $headerColumnAccAscLink_headerColumnAscLink$$3$$.attr("tabindex", "0");
      $headerColumnAccAscLink_headerColumnAscLink$$3$$.attr("href", "#");
      $headerColumnAccAscLink_headerColumnAscLink$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_ASC_LINK_CLASS$);
      $headerColumnAccAscLink_headerColumnAscLink$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
      $headerColumnAccAscLink_headerColumnAscLink$$3$$.append(this.$component$.$getTranslatedString$("labelSortAsc"));
      $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$.append($headerColumnAccAscLink_headerColumnAscLink$$3$$);
      $headerColumn$$6$$.attr("data-oj-sortable", $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$);
    }
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$ = $$$$14$$(document.createElement("div"));
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_CLASS$);
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$);
    $columnIdx$$30_headerColumnRowDiv$$.append($headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$);
    $column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$.sortable == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ && ($column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$ = $$$$14$$(document.createElement("a")), $column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_LINK_CLASS$), $column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_WIDGET_ICON_CLASS$), $column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_DSC_ICON_CLASS$), 
    $column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_DISABLED$), $column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), this.$component$._hoverable($column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$), $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$.append($column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$), $column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$ = 
    $$$$14$$(document.createElement("a")), $column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$.attr("tabindex", "0"), $column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$.attr("href", "#"), $column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_DSC_LINK_CLASS$), $column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$), $column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$.append(this.$component$.$getTranslatedString$("labelSortDsc")), 
    $headerColumnAscDiv_headerColumnDscDiv_headerColumnTextDiv$$.append($column$$14_headerColumnAccDscLink_headerColumnDscLink$$2$$));
    return $headerColumn$$6$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableHeaderColumnAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$createTableHeaderColumnAccSelect$$($columnIdx$$31$$, $columnSelectionMode$$2$$) {
    if ($columnSelectionMode$$2$$ == $oj$$14$$.$TableDomUtils$.$_OPTION_SELECTION_MODES$.$_SINGLE$ || $columnSelectionMode$$2$$ == $oj$$14$$.$TableDomUtils$.$_OPTION_SELECTION_MODES$.$_MULTIPLE$) {
      var $headerColumn$$7$$ = this.$getTableHeaderColumn$($columnIdx$$31$$), $accSelectionHeaderColumn$$ = this.$getTableHeaderColumnAccSelect$($columnIdx$$31$$);
      if (null == $accSelectionHeaderColumn$$) {
        $accSelectionHeaderColumn$$ = $$$$14$$(document.createElement("div"));
        $accSelectionHeaderColumn$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS$);
        $accSelectionHeaderColumn$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
        var $accSelectCheckbox$$3$$ = $$$$14$$(document.createElement("input"));
        $accSelectCheckbox$$3$$.attr("id", "acc_sel_col" + $columnIdx$$31$$);
        $accSelectCheckbox$$3$$.attr("type", "checkbox");
        $accSelectCheckbox$$3$$.attr("tabindex", "-1");
        var $selectColumnTitle$$ = this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_LABEL_SELECT_COLUMN$);
        $accSelectCheckbox$$3$$.attr("title", $selectColumnTitle$$);
        $accSelectCheckbox$$3$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_CHECKBOX_ACC_SELECT_COLUMN_CLASS$);
        $accSelectionHeaderColumn$$.append($accSelectCheckbox$$3$$);
        $headerColumn$$7$$.prepend($accSelectionHeaderColumn$$);
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableDivScroller$ = function $$oj$$14$$$$TableDomUtils$$$$createTableDivScroller$$() {
    var $table$$7$$ = this.$getTable$(), $tableContainer$$2$$ = this.$getTableContainer$(), $tableDivScroller$$ = $$$$14$$(document.createElement("div"));
    $tableDivScroller$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_SCROLLER_CLASS$);
    $tableContainer$$2$$[0].replaceChild($tableDivScroller$$[0], $table$$7$$[0]);
    $tableDivScroller$$.append($table$$7$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableNoDataMessage$ = function $$oj$$14$$$$TableDomUtils$$$$createTableNoDataMessage$$() {
    var $tableContainer$$3$$ = this.$getTableContainer$(), $noDataMessage$$2$$ = $$$$14$$(document.createElement("div"));
    $noDataMessage$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_NO_DATA_MESSAGE_CLASS$);
    $noDataMessage$$2$$.css("display", "none");
    $noDataMessage$$2$$.css("position", "absolute");
    $noDataMessage$$2$$.css("z-index", 5);
    var $emptyTextMsg$$ = null, $emptyTextMsg$$ = null != this.options.emptyText ? this.options.emptyText : this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_MSG_NO_DATA$);
    $noDataMessage$$2$$.append($emptyTextMsg$$);
    $tableContainer$$3$$.append($noDataMessage$$2$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$createTableStatusMessage$ = function $$oj$$14$$$$TableDomUtils$$$$createTableStatusMessage$$() {
    var $tableContainer$$4$$ = this.$getTableContainer$(), $statusMessage$$2$$ = $$$$14$$(document.createElement("div"));
    $statusMessage$$2$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_CLASS$);
    $statusMessage$$2$$.css("display", "none");
    $statusMessage$$2$$.css("position", "absolute");
    $statusMessage$$2$$.css("z-index", 5);
    $statusMessage$$2$$.append(this.$component$.$getTranslatedString$(this.$component$.$_BUNDLE_KEY$.$_MSG_FETCHING_DATA$));
    $tableContainer$$4$$.append($statusMessage$$2$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getElementColumnIdx$ = function $$oj$$14$$$$TableDomUtils$$$$getElementColumnIdx$$($element$$60_tableFooterCell$$2$$) {
    var $tableBodyCell$$4_tableHeaderColumn$$8$$ = this.$getFirstAncestor$($element$$60_tableFooterCell$$2$$, $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
    if (null != $tableBodyCell$$4_tableHeaderColumn$$8$$) {
      return $tableBodyCell$$4_tableHeaderColumn$$8$$.parent().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$).index($tableBodyCell$$4_tableHeaderColumn$$8$$);
    }
    $tableBodyCell$$4_tableHeaderColumn$$8$$ = this.$getFirstAncestor$($element$$60_tableFooterCell$$2$$, $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$);
    if (null != $tableBodyCell$$4_tableHeaderColumn$$8$$) {
      return $tableBodyCell$$4_tableHeaderColumn$$8$$.parent().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$).index($tableBodyCell$$4_tableHeaderColumn$$8$$);
    }
    $element$$60_tableFooterCell$$2$$ = this.$getFirstAncestor$($element$$60_tableFooterCell$$2$$, $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
    return null != $element$$60_tableFooterCell$$2$$ ? $element$$60_tableFooterCell$$2$$.parent().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$).index($element$$60_tableFooterCell$$2$$) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getElementRowIdx$ = function $$oj$$14$$$$TableDomUtils$$$$getElementRowIdx$$($element$$61$$) {
    return this.$getFirstAncestor$($element$$61$$, $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$).index();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableContainerDimensions$ = function $$oj$$14$$$$TableDomUtils$$$$getTableContainerDimensions$$() {
    var $tableContainer$$5$$ = this.$getTableContainer$();
    $tableContainer$$5$$.attr("style", "");
    this.$styleTableContainer$($tableContainer$$5$$);
    var $i$$207_tableHeight$$, $tableContainerChildrenDisplayStyle$$ = [];
    for ($i$$207_tableHeight$$ = 0;$i$$207_tableHeight$$ < $tableContainer$$5$$.children().length;$i$$207_tableHeight$$++) {
      $tableContainerChildrenDisplayStyle$$[$i$$207_tableHeight$$] = $$$$14$$($tableContainer$$5$$.children()[$i$$207_tableHeight$$]).css("display").toString(), $$$$14$$($tableContainer$$5$$.children()[$i$$207_tableHeight$$]).css("display", "none");
    }
    $i$$207_tableHeight$$ = 1 < $tableContainer$$5$$.height() ? $tableContainer$$5$$.height() : 0;
    var $dimensions_tableWidth$$ = 1 < $tableContainer$$5$$.width() ? $tableContainer$$5$$.width() : 0, $dimensions_tableWidth$$ = {height:$i$$207_tableHeight$$, width:$dimensions_tableWidth$$};
    for ($i$$207_tableHeight$$ = 0;$i$$207_tableHeight$$ < $tableContainer$$5$$.children().length;$i$$207_tableHeight$$++) {
      $$$$14$$($tableContainer$$5$$.children()[$i$$207_tableHeight$$]).css("display", $tableContainerChildrenDisplayStyle$$[$i$$207_tableHeight$$]);
    }
    return $dimensions_tableWidth$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getFirstAncestor$ = function $$oj$$14$$$$TableDomUtils$$$$getFirstAncestor$$($element$$62$$, $className$$13$$) {
    var $parents$$2$$;
    if (null == $element$$62$$) {
      return null;
    }
    $element$$62$$ = $$$$14$$($element$$62$$);
    if ($element$$62$$.hasClass($className$$13$$)) {
      return $element$$62$$;
    }
    $parents$$2$$ = $element$$62$$.parents("." + $className$$13$$);
    return 0 != $parents$$2$$.length ? $parents$$2$$.eq(0) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getRendererContextObject$ = function $$oj$$14$$$$TableDomUtils$$$$getRendererContextObject$$($row$$40$$, $parentElement$$1$$) {
    var $context$$40$$ = [];
    $context$$40$$.component = this.$component$;
    var $dataSource$$11_rowContext$$1$$ = this.options.data;
    $dataSource$$11_rowContext$$1$$ instanceof $oj$$14$$.$PagingTableDataSource$ && ($dataSource$$11_rowContext$$1$$ = $dataSource$$11_rowContext$$1$$.getWrappedDataSource());
    $context$$40$$.datasource = $dataSource$$11_rowContext$$1$$;
    $context$$40$$.parentElement = $parentElement$$1$$;
    if (null != $row$$40$$) {
      $context$$40$$.status = this.$getRendererStatusObject$($row$$40$$);
      var $dataSource$$11_rowContext$$1$$ = $row$$40$$.context, $i$$208$$;
      for ($i$$208$$ in $dataSource$$11_rowContext$$1$$) {
        $dataSource$$11_rowContext$$1$$.hasOwnProperty($i$$208$$) && ($context$$40$$[$i$$208$$] = $dataSource$$11_rowContext$$1$$[$i$$208$$]);
      }
    }
    return $context$$40$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getRendererStatusObject$ = function $$oj$$14$$$$TableDomUtils$$$$getRendererStatusObject$$($row$$41$$) {
    return{rowIndex:this.options.data.indexOf($row$$41$$), rowKey:$row$$41$$.id, activeRow:this.$component$.activeRow()};
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getScrollbarHeight$ = function $$oj$$14$$$$TableDomUtils$$$$getScrollbarHeight$$() {
    var $scroller$$ = this.$getScroller$();
    return $scroller$$.get(0).offsetHeight - $scroller$$.get(0).clientHeight;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getScrollbarWidth$ = function $$oj$$14$$$$TableDomUtils$$$$getScrollbarWidth$$() {
    var $scroller$$1$$ = this.$getScroller$();
    return $scroller$$1$$.get(0).offsetWidth - $scroller$$1$$.get(0).clientWidth;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getScroller$ = function $$oj$$14$$$$TableDomUtils$$$$getScroller$$() {
    return this.$isDivScroller$() ? this.$getTableDivScroller$() : this.$getTableBody$();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTable$ = function $$oj$$14$$$$TableDomUtils$$$$getTable$$() {
    return $$$$14$$(this.element);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBody$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBody$$() {
    if (!this.$_cachedDomTableBody$) {
      var $table$$8$$ = this.$getTable$(), $tableBody$$7$$ = null;
      $table$$8$$ && ($tableBody$$7$$ = $table$$8$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_BODY_CLASS$)) && 0 < $tableBody$$7$$.length && (this.$_cachedDomTableBody$ = $$$$14$$($tableBody$$7$$.get(0)));
    }
    return this.$_cachedDomTableBody$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyCell$$($rowIdx$$31_tableBodyCells$$1$$, $columnIdx$$32$$, $tableBodyRow$$11$$) {
    return($rowIdx$$31_tableBodyCells$$1$$ = this.$getTableBodyCells$($rowIdx$$31_tableBodyCells$$1$$, $tableBodyRow$$11$$)) ? $rowIdx$$31_tableBodyCells$$1$$.length > $columnIdx$$32$$ ? $$$$14$$($rowIdx$$31_tableBodyCells$$1$$[$columnIdx$$32$$]) : null : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyCellAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyCellAccSelect$$($accSelectionCell$$2_tableBodyRow$$12$$) {
    return null != $accSelectionCell$$2_tableBodyRow$$12$$ && ($accSelectionCell$$2_tableBodyRow$$12$$ = $accSelectionCell$$2_tableBodyRow$$12$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$), null != $accSelectionCell$$2_tableBodyRow$$12$$ && 0 < $accSelectionCell$$2_tableBodyRow$$12$$.length) ? $$$$14$$($accSelectionCell$$2_tableBodyRow$$12$$[0]) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyCells$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyCells$$($rowIdx$$32$$, $tableBodyRow$$13$$) {
    $tableBodyRow$$13$$ || ($tableBodyRow$$13$$ = this.$getTableBodyRow$($rowIdx$$32$$));
    if (!$tableBodyRow$$13$$) {
      return null;
    }
    var $tableBodyCellElements$$ = $tableBodyRow$$13$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
    return null != $tableBodyCellElements$$ && 0 < $tableBodyCellElements$$.length ? $tableBodyCellElements$$ : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyRow$$($rowIdx$$33$$) {
    var $tableBodyRows$$2$$ = this.$getTableBodyRows$();
    return $tableBodyRows$$2$$ && null != $rowIdx$$33$$ ? $tableBodyRows$$2$$.length > $rowIdx$$33$$ ? $$$$14$$($tableBodyRows$$2$$[$rowIdx$$33$$]) : null : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableBodyRows$ = function $$oj$$14$$$$TableDomUtils$$$$getTableBodyRows$$() {
    if (!this.$_cachedDomTableBodyRows$) {
      var $tableBodyRowElements$$ = this.$getTableBody$().children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$);
      null != $tableBodyRowElements$$ && 0 < $tableBodyRowElements$$.length && (this.$_cachedDomTableBodyRows$ = $tableBodyRowElements$$);
    }
    return this.$_cachedDomTableBodyRows$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableContainer$ = function $$oj$$14$$$$TableDomUtils$$$$getTableContainer$$() {
    this.$_cachedDomTableContainer$ || (this.$isDivScroller$() ? this.$_cachedDomTableContainer$ = $$$$14$$(this.element.get(0).parentNode.parentNode) : this.$_cachedDomTableContainer$ = $$$$14$$(this.element.get(0).parentNode));
    return this.$_cachedDomTableContainer$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableFooter$ = function $$oj$$14$$$$TableDomUtils$$$$getTableFooter$$() {
    var $table$$9$$ = this.$getTable$(), $tableFooter$$3$$ = null;
    return $table$$9$$ && ($tableFooter$$3$$ = $table$$9$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CLASS$)) && 0 < $tableFooter$$3$$.length ? $$$$14$$($tableFooter$$3$$.get(0)) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableFooterCell$ = function $$oj$$14$$$$TableDomUtils$$$$getTableFooterCell$$($columnIdx$$33$$) {
    var $tableFooterCells_tableFooterRow$$3$$ = this.$getTableFooterRow$(), $tableFooterCells_tableFooterRow$$3$$ = $$$$14$$($tableFooterCells_tableFooterRow$$3$$).children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
    return $tableFooterCells_tableFooterRow$$3$$.length >= $columnIdx$$33$$ ? $$$$14$$($tableFooterCells_tableFooterRow$$3$$[$columnIdx$$33$$]) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableFooterRow$ = function $$oj$$14$$$$TableDomUtils$$$$getTableFooterRow$$() {
    if (!this.$_cachedDomTableFooterRow$) {
      var $tableFooter$$4$$ = this.$getTableFooter$();
      if (!$tableFooter$$4$$) {
        return null;
      }
      this.$_cachedDomTableFooterRow$ = $$$$14$$($tableFooter$$4$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_ROW_CLASS$).get(0));
    }
    return this.$_cachedDomTableFooterRow$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeader$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeader$$() {
    if (!this.$_cachedDomTableHeader$) {
      var $table$$10$$ = this.$getTable$(), $tableHeader$$4$$ = null;
      $table$$10$$ && ($tableHeader$$4$$ = $table$$10$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_CLASS$)) && 0 < $tableHeader$$4$$.length && (this.$_cachedDomTableHeader$ = $$$$14$$($tableHeader$$4$$.get(0)));
    }
    return this.$_cachedDomTableHeader$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeaderColumn$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeaderColumn$$($columnIdx$$34$$) {
    var $headerColumns$$ = this.$getTableHeaderColumns$();
    return $headerColumns$$ ? $headerColumns$$.length > $columnIdx$$34$$ ? $$$$14$$($headerColumns$$[$columnIdx$$34$$]) : null : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeaderColumnAccSelect$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeaderColumnAccSelect$$($accSelectionCell$$3_columnIdx$$35_headerColumn$$8$$) {
    $accSelectionCell$$3_columnIdx$$35_headerColumn$$8$$ = this.$getTableHeaderColumn$($accSelectionCell$$3_columnIdx$$35_headerColumn$$8$$);
    return null != $accSelectionCell$$3_columnIdx$$35_headerColumn$$8$$ && ($accSelectionCell$$3_columnIdx$$35_headerColumn$$8$$ = $accSelectionCell$$3_columnIdx$$35_headerColumn$$8$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS$), null != $accSelectionCell$$3_columnIdx$$35_headerColumn$$8$$ && 0 < $accSelectionCell$$3_columnIdx$$35_headerColumn$$8$$.length) ? $$$$14$$($accSelectionCell$$3_columnIdx$$35_headerColumn$$8$$[0]) : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeaderColumns$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeaderColumns$$() {
    var $headerColumnElements_tableHeaderRow$$3$$ = this.$getTableHeaderRow$();
    return null != $headerColumnElements_tableHeaderRow$$3$$ && ($headerColumnElements_tableHeaderRow$$3$$ = $headerColumnElements_tableHeaderRow$$3$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$), null != $headerColumnElements_tableHeaderRow$$3$$ && 0 < $headerColumnElements_tableHeaderRow$$3$$.length) ? $headerColumnElements_tableHeaderRow$$3$$ : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableHeaderRow$ = function $$oj$$14$$$$TableDomUtils$$$$getTableHeaderRow$$() {
    if (!this.$_cachedDomTableHeaderRow$) {
      var $tableHeader$$5$$ = this.$getTableHeader$();
      if (!$tableHeader$$5$$) {
        return null;
      }
      this.$_cachedDomTableHeaderRow$ = $$$$14$$($tableHeader$$5$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_ROW_CLASS$).get(0));
    }
    return this.$_cachedDomTableHeaderRow$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableDivScroller$ = function $$oj$$14$$$$TableDomUtils$$$$getTableDivScroller$$() {
    if (!this.$_cachedDomTableDivScroller$) {
      var $tableContainer$$6_tableDivScroller$$1$$ = this.$getTableContainer$();
      $tableContainer$$6_tableDivScroller$$1$$ && ($tableContainer$$6_tableDivScroller$$1$$ = $tableContainer$$6_tableDivScroller$$1$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_SCROLLER_CLASS$)) && 0 < $tableContainer$$6_tableDivScroller$$1$$.length && (this.$_cachedDomTableDivScroller$ = $$$$14$$($tableContainer$$6_tableDivScroller$$1$$.get(0)));
    }
    return this.$_cachedDomTableDivScroller$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableNoDataMessage$ = function $$oj$$14$$$$TableDomUtils$$$$getTableNoDataMessage$$() {
    if (!this.$_cachedDomTableNoDataMessage$) {
      var $noDataMessage$$3_tableContainer$$7$$ = this.$getTableContainer$();
      $noDataMessage$$3_tableContainer$$7$$ && ($noDataMessage$$3_tableContainer$$7$$ = $noDataMessage$$3_tableContainer$$7$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_NO_DATA_MESSAGE_CLASS$)) && 0 < $noDataMessage$$3_tableContainer$$7$$.length && (this.$_cachedDomTableNoDataMessage$ = $$$$14$$($noDataMessage$$3_tableContainer$$7$$.get(0)));
    }
    return this.$_cachedDomTableNoDataMessage$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$getTableStatusMessage$ = function $$oj$$14$$$$TableDomUtils$$$$getTableStatusMessage$$() {
    if (!this.$_cachedDomTableStatusMessage$) {
      var $statusMessage$$3_tableContainer$$8$$ = this.$getTableContainer$();
      $statusMessage$$3_tableContainer$$8$$ && ($statusMessage$$3_tableContainer$$8$$ = $statusMessage$$3_tableContainer$$8$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_STATUS_MESSAGE_CLASS$)) && 0 < $statusMessage$$3_tableContainer$$8$$.length && (this.$_cachedDomTableStatusMessage$ = $$$$14$$($statusMessage$$3_tableContainer$$8$$.get(0)));
    }
    return this.$_cachedDomTableStatusMessage$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$insertTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$insertTableBodyCell$$($rowIdx$$34_tableBodyCells$$2$$, $accSelectionCell$$4_columnIdx$$36$$, $tableBodyCell$$5$$, $tableBodyRow$$14$$) {
    this.$setTableBodyCellAttributes$($rowIdx$$34_tableBodyCells$$2$$, $accSelectionCell$$4_columnIdx$$36$$, $tableBodyCell$$5$$);
    $rowIdx$$34_tableBodyCells$$2$$ = $$$$14$$($tableBodyRow$$14$$).children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
    0 == $accSelectionCell$$4_columnIdx$$36$$ ? ($accSelectionCell$$4_columnIdx$$36$$ = $tableBodyRow$$14$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$), null != $accSelectionCell$$4_columnIdx$$36$$ && 0 < $accSelectionCell$$4_columnIdx$$36$$.length ? $$$$14$$($accSelectionCell$$4_columnIdx$$36$$[0]).after($tableBodyCell$$5$$) : $tableBodyRow$$14$$.prepend($tableBodyCell$$5$$)) : $rowIdx$$34_tableBodyCells$$2$$.length >= $accSelectionCell$$4_columnIdx$$36$$ ? 
    $$$$14$$($rowIdx$$34_tableBodyCells$$2$$.get($accSelectionCell$$4_columnIdx$$36$$ - 1)).after($tableBodyCell$$5$$) : $$$$14$$($tableBodyRow$$14$$).append($tableBodyCell$$5$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$insertTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$insertTableBodyRow$$($rowIdx$$35$$, $tableBodyRow$$15$$, $docFrag$$2$$) {
    var $tableBodyRows$$3$$ = null;
    if (null == $docFrag$$2$$) {
      var $tableBody$$9$$ = this.$getTableBody$(), $tableBodyRows$$3$$ = $tableBody$$9$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$)
    } else {
      $tableBodyRows$$3$$ = $docFrag$$2$$.children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$);
    }
    null == $docFrag$$2$$ ? 0 == $rowIdx$$35$$ ? $tableBody$$9$$.prepend($tableBodyRow$$15$$) : $tableBodyRows$$3$$.length >= $rowIdx$$35$$ ? $$$$14$$($tableBodyRows$$3$$.get($rowIdx$$35$$ - 1)).after($tableBodyRow$$15$$) : $tableBody$$9$$.append($tableBodyRow$$15$$) : $docFrag$$2$$.append($tableBodyRow$$15$$);
    this.$clearCachedDomRowData$();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$insertTableFooterCell$ = function $$oj$$14$$$$TableDomUtils$$$$insertTableFooterCell$$($columnIdx$$37$$, $tableFooterCell$$3$$) {
    var $tableFooterRow$$4$$ = this.$getTableFooterRow$(), $accFooterCell$$1_tableFooterCells$$1$$ = $$$$14$$($tableFooterRow$$4$$).children("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
    0 == $columnIdx$$37$$ ? ($accFooterCell$$1_tableFooterCells$$1$$ = $tableFooterRow$$4$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$), null != $accFooterCell$$1_tableFooterCells$$1$$ && 0 < $accFooterCell$$1_tableFooterCells$$1$$.length ? $$$$14$$($accFooterCell$$1_tableFooterCells$$1$$[0]).after($tableFooterCell$$3$$) : $tableFooterRow$$4$$.prepend($tableFooterCell$$3$$)) : $tableFooterRow$$4$$.length >= $columnIdx$$37$$ ? $$$$14$$($accFooterCell$$1_tableFooterCells$$1$$.get($columnIdx$$37$$ - 
    1)).after($tableFooterCell$$3$$) : $tableFooterRow$$4$$.append($tableFooterCell$$3$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$insertTableHeaderColumn$ = function $$oj$$14$$$$TableDomUtils$$$$insertTableHeaderColumn$$($columnIdx$$38$$, $tableHeaderColumn$$9$$) {
    var $tableHeaderRow$$4$$ = this.$getTableHeaderRow$(), $accSelectionColumn$$1_tableHeaderColumns$$1$$ = this.$getTableHeaderColumns$();
    this.$setTableHeaderColumnAttributes$($columnIdx$$38$$, $tableHeaderColumn$$9$$);
    var $oldTableHeaderColumn$$ = this.$getTableHeaderColumn$($columnIdx$$38$$);
    $oldTableHeaderColumn$$ ? $oldTableHeaderColumn$$.replaceWith($tableHeaderColumn$$9$$) : 0 == $columnIdx$$38$$ ? ($accSelectionColumn$$1_tableHeaderColumns$$1$$ = $tableHeaderRow$$4$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$), null != $accSelectionColumn$$1_tableHeaderColumns$$1$$ && 0 < $accSelectionColumn$$1_tableHeaderColumns$$1$$.length ? $$$$14$$($accSelectionColumn$$1_tableHeaderColumns$$1$$[0]).after($tableHeaderColumn$$9$$) : $tableHeaderRow$$4$$.prepend($tableHeaderColumn$$9$$)) : 
    $accSelectionColumn$$1_tableHeaderColumns$$1$$.length >= $columnIdx$$38$$ ? $$$$14$$($accSelectionColumn$$1_tableHeaderColumns$$1$$.get($columnIdx$$38$$ - 1)).after($tableHeaderColumn$$9$$) : $tableHeaderRow$$4$$.append($tableHeaderColumn$$9$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$isDivScroller$ = function $$oj$$14$$$$TableDomUtils$$$$isDivScroller$$() {
    return this.$_isIE$() && 10 > this.$_isIE$() ? !0 : !1;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$isTableContainerScrollable$ = function $$oj$$14$$$$TableDomUtils$$$$isTableContainerScrollable$$() {
    var $tableContainer$$9$$ = this.$getTableContainer$(), $noDataMessage$$4$$ = this.$getTableNoDataMessage$(), $noDataDisplay$$ = $noDataMessage$$4$$.css("display").toString();
    $noDataMessage$$4$$.css("display", "none");
    var $statusMessage$$4$$ = this.$getTableStatusMessage$(), $statusMessageDisplay$$ = $statusMessage$$4$$.css("display").toString();
    $statusMessage$$4$$.css("display", "none");
    var $result$$22$$ = [];
    $result$$22$$[0] = 0 < this.$_tableContainerDimensions$.height && 0 < $tableContainer$$9$$[0].clientHeight && $tableContainer$$9$$[0].scrollHeight > $tableContainer$$9$$[0].clientHeight ? !0 : !1;
    $result$$22$$[1] = 0 < this.$_tableContainerDimensions$.width && 0 < $tableContainer$$9$$[0].clientWidth && $tableContainer$$9$$[0].scrollWidth > $tableContainer$$9$$[0].clientWidth ? !0 : !1;
    $noDataMessage$$4$$.css("display", $noDataDisplay$$);
    $statusMessage$$4$$.css("display", $statusMessageDisplay$$);
    return $result$$22$$;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$refreshTableDimensions$ = function $$oj$$14$$$$TableDomUtils$$$$refreshTableDimensions$$($immediate$$3$$, $width$$20$$, $height$$17$$) {
    $immediate$$3$$ ? this.$_refreshTableDimensions$($width$$20$$, $height$$17$$) : this.$_refreshTableDimensionsTimer$ = {width:$width$$20$$, height:$height$$17$$};
  };
  $oj$$14$$.$TableDomUtils$.prototype.$renderDelayedTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$renderDelayedTableBodyCell$$($rowIdx$$37$$, $columnIdx$$39$$) {
    var $delayedCell_tableBodyCell$$6$$ = this.$_getDelayedRenderCell$($rowIdx$$37$$, $columnIdx$$39$$);
    if (null != $delayedCell_tableBodyCell$$6$$) {
      var $cellColumnContent$$ = $delayedCell_tableBodyCell$$6$$.$cellRenderer$({cellContext:$delayedCell_tableBodyCell$$6$$.$cellContext$, column:$delayedCell_tableBodyCell$$6$$.column, data:$delayedCell_tableBodyCell$$6$$.data, row:$delayedCell_tableBodyCell$$6$$.row.attributes});
      null != $cellColumnContent$$ ? $delayedCell_tableBodyCell$$6$$.$tableBodyCell$.append($cellColumnContent$$) : ($delayedCell_tableBodyCell$$6$$ = $$$$14$$($delayedCell_tableBodyCell$$6$$.$tableBodyRow$.children(":not(." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_ACC_SELECT_CLASS$ + ")")[$columnIdx$$39$$]), this.$setTableBodyCellAttributes$($rowIdx$$37$$, $columnIdx$$39$$, $delayedCell_tableBodyCell$$6$$), this.$styleTableBodyCell$($columnIdx$$39$$, $delayedCell_tableBodyCell$$6$$));
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$renderDelayedTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$renderDelayedTableBodyRow$$($rowIdx$$38$$) {
    var $delayedRow_i$$209_tableBodyRow$$17$$ = this.$_getDelayedRenderRow$($rowIdx$$38$$);
    if (null != $delayedRow_i$$209_tableBodyRow$$17$$) {
      var $rowContent_tableBody$$10_tableBodyCells$$3$$ = $delayedRow_i$$209_tableBodyRow$$17$$.rowRenderer({rowContext:$delayedRow_i$$209_tableBodyRow$$17$$.$rowContext$, row:$delayedRow_i$$209_tableBodyRow$$17$$.row.attributes}), $delayedRow_i$$209_tableBodyRow$$17$$ = $delayedRow_i$$209_tableBodyRow$$17$$.$tableBodyRow$;
      null != $rowContent_tableBody$$10_tableBodyCells$$3$$ ? $delayedRow_i$$209_tableBodyRow$$17$$.append($rowContent_tableBody$$10_tableBodyCells$$3$$) : ($rowContent_tableBody$$10_tableBodyCells$$3$$ = this.$getTableBody$(), $delayedRow_i$$209_tableBodyRow$$17$$ = $$$$14$$($rowContent_tableBody$$10_tableBodyCells$$3$$.children()[$rowIdx$$38$$]), this.$clearCachedDomRowData$(), this.$styleTableBodyRow$($delayedRow_i$$209_tableBodyRow$$17$$));
      this.$createTableBodyCellAccSelect$($rowIdx$$38$$, $delayedRow_i$$209_tableBodyRow$$17$$);
      $rowContent_tableBody$$10_tableBodyCells$$3$$ = $delayedRow_i$$209_tableBodyRow$$17$$.children("td");
      for ($delayedRow_i$$209_tableBodyRow$$17$$ = 1;$delayedRow_i$$209_tableBodyRow$$17$$ < $rowContent_tableBody$$10_tableBodyCells$$3$$.length;$delayedRow_i$$209_tableBodyRow$$17$$++) {
        var $tableBodyCell$$7$$ = $$$$14$$($rowContent_tableBody$$10_tableBodyCells$$3$$[$delayedRow_i$$209_tableBodyRow$$17$$]);
        this.$setTableBodyCellAttributes$($rowIdx$$38$$, $delayedRow_i$$209_tableBodyRow$$17$$ - 1, $tableBodyCell$$7$$);
        this.$styleTableBodyCell$($delayedRow_i$$209_tableBodyRow$$17$$ - 1, $tableBodyCell$$7$$);
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$setTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$setTableBodyCell$$($rowIdx$$39$$, $columnIdx$$40$$, $tableBodyRow$$18$$, $row$$43$$, $cellRenderer$$1$$) {
    var $column$$15$$ = this.$component$.columnMetaData()[$columnIdx$$40$$], $tableBodyCell$$8$$ = this.$getTableBodyCell$($rowIdx$$39$$, $columnIdx$$40$$, $tableBodyRow$$18$$);
    $tableBodyCell$$8$$ ? $tableBodyCell$$8$$.empty() : ($tableBodyCell$$8$$ = this.$createTableBodyCell$(), this.$styleTableBodyCell$($columnIdx$$40$$, $tableBodyCell$$8$$), this.$insertTableBodyCell$($rowIdx$$39$$, $columnIdx$$40$$, $tableBodyCell$$8$$, $tableBodyRow$$18$$));
    var $data$$119$$ = null;
    null != $column$$15$$.field && ($data$$119$$ = $row$$43$$.get($column$$15$$.field));
    if ($cellRenderer$$1$$) {
      var $cellContext$$1$$ = this.$getRendererContextObject$($row$$43$$, $tableBodyCell$$8$$[0]), $delayedCellObj$$1$$ = {};
      $delayedCellObj$$1$$.$cellRenderer$ = $cellRenderer$$1$$;
      $delayedCellObj$$1$$.$cellContext$ = $cellContext$$1$$;
      $delayedCellObj$$1$$.data = $data$$119$$;
      $delayedCellObj$$1$$.row = $row$$43$$;
      $delayedCellObj$$1$$.column = $column$$15$$;
      $delayedCellObj$$1$$.$tableBodyRow$ = $tableBodyRow$$18$$;
      $delayedCellObj$$1$$.$tableBodyCell$ = $tableBodyCell$$8$$;
      this.$addDelayedRenderCell$($rowIdx$$39$$, $columnIdx$$40$$, $delayedCellObj$$1$$);
    } else {
      $tableBodyCell$$8$$.append($data$$119$$);
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$setTableBodyCellAttributes$ = function $$oj$$14$$$$TableDomUtils$$$$setTableBodyCellAttributes$$($cellRowHeaderId_rowIdx$$40$$, $column$$16_columnIdx$$41$$, $tableBodyCell$$9$$) {
    var $accessibility_headers$$4$$ = this.options.accessibility;
    $column$$16_columnIdx$$41$$ = this.$component$.columnMetaData($column$$16_columnIdx$$41$$);
    var $rowHeaderColumnId$$ = null, $isTableHeaderless$$2$$ = null == this.$getTableHeader$() ? !0 : !1, $rowHeaderColumnId$$ = null != $accessibility_headers$$4$$ && null != $accessibility_headers$$4$$.rowHeader ? $accessibility_headers$$4$$.rowHeader : this.$component$.columnMetaData(0).id;
    $cellRowHeaderId_rowIdx$$40$$ = $rowHeaderColumnId$$ + "_" + $cellRowHeaderId_rowIdx$$40$$;
    $accessibility_headers$$4$$ = $column$$16_columnIdx$$41$$.id;
    $rowHeaderColumnId$$ == $column$$16_columnIdx$$41$$.id ? ($tableBodyCell$$9$$.attr("id", $cellRowHeaderId_rowIdx$$40$$), $isTableHeaderless$$2$$ && ($accessibility_headers$$4$$ = "")) : $accessibility_headers$$4$$ = $isTableHeaderless$$2$$ ? $cellRowHeaderId_rowIdx$$40$$ : $accessibility_headers$$4$$ + " " + $cellRowHeaderId_rowIdx$$40$$;
    $tableBodyCell$$9$$.attr("headers") || $tableBodyCell$$9$$.attr("headers", $accessibility_headers$$4$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$setTableHeaderColumnAttributes$ = function $$oj$$14$$$$TableDomUtils$$$$setTableHeaderColumnAttributes$$($columnIdx$$42$$, $tableHeaderColumn$$10$$) {
    var $column$$17$$ = this.$component$.columnMetaData($columnIdx$$42$$);
    $tableHeaderColumn$$10$$.attr("id") || $tableHeaderColumn$$10$$.attr("id", $column$$17$$.id);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleInitialTable$ = function $$oj$$14$$$$TableDomUtils$$$$styleInitialTable$$() {
    var $table$$11$$ = this.$getTable$(), $tableContainer$$10$$ = this.$getTableContainer$(), $tableHeader$$6$$ = $table$$11$$.children("thead"), $tableHeader$$6$$ = 0 < $tableHeader$$6$$.length ? $$$$14$$($tableHeader$$6$$[0]) : null, $tableFooter$$5$$ = $table$$11$$.children("tfoot"), $tableFooter$$5$$ = 0 < $tableFooter$$5$$.length ? $$$$14$$($tableFooter$$5$$[0]) : null, $tableBody$$11$$ = $table$$11$$.children("tbody"), $tableBody$$11$$ = 0 < $tableBody$$11$$.length ? $$$$14$$($tableBody$$11$$[0]) : 
    null;
    $table$$11$$.attr("tabindex", "0");
    this.$component$._focusable($table$$11$$);
    this.$component$._focusable($tableContainer$$10$$);
    this.$component$._hoverable($table$$11$$);
    this.$styleTableHeader$($tableHeader$$6$$);
    this.$styleTableFooter$($tableFooter$$5$$);
    this.$styleTableBody$($tableBody$$11$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableBody$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableBody$$($tableBody$$12$$) {
    $tableBody$$12$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_BODY_CLASS$);
    $tableBody$$12$$.attr($oj$$14$$.Components.$_OJ_CONTAINER_ATTR$, this.$component$.widgetName);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableBodyCell$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableBodyCell$$($columnIdx$$43$$, $tableBodyCell$$10$$) {
    var $options$$265$$ = this.options, $lastColumn$$ = $columnIdx$$43$$ == this.$component$.columnMetaData().length - 1 ? !0 : !1, $column$$18$$ = this.$component$.columnMetaData($columnIdx$$43$$);
    null != $column$$18$$.style && $tableBodyCell$$10$$.attr("style") != $column$$18$$.style && $tableBodyCell$$10$$.attr("style", $column$$18$$.style);
    $tableBodyCell$$10$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$) || $tableBodyCell$$10$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_CLASS$);
    "none" != $tableBodyCell$$10$$.css("float") && $tableBodyCell$$10$$.css("float", "none");
    "none" != $tableBodyCell$$10$$.css("-moz-user-select") && $tableBodyCell$$10$$.css("-moz-user-select", "none");
    $options$$265$$.verticalGridVisible != $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ || $lastColumn$$ || $tableBodyCell$$10$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_VGRID_LINES_CLASS$) || $tableBodyCell$$10$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_VGRID_LINES_CLASS$);
    $options$$265$$.horizontalGridVisible == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ && ($tableBodyCell$$10$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_HGRID_LINES_CLASS$) || $tableBodyCell$$10$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_CELL_HGRID_LINES_CLASS$));
    $column$$18$$.className && ($tableBodyCell$$10$$.hasClass($column$$18$$.className) || $tableBodyCell$$10$$.addClass($column$$18$$.className));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableBodyRow$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableBodyRow$$($tableBodyRow$$20$$) {
    $tableBodyRow$$20$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$) || $tableBodyRow$$20$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_DATA_ROW_CLASS$);
    this.$component$._hoverable($tableBodyRow$$20$$);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableContainer$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableContainer$$($tableContainer$$11$$) {
    var $rootAttributes$$1_table$$12$$ = this.options.rootAttributes;
    $tableContainer$$11$$.attr("class", "");
    var $attr$$17$$, $value$$180$$;
    for ($attr$$17$$ in $rootAttributes$$1_table$$12$$) {
      $rootAttributes$$1_table$$12$$.hasOwnProperty($attr$$17$$) && ($value$$180$$ = $rootAttributes$$1_table$$12$$[$attr$$17$$], $tableContainer$$11$$.attr($attr$$17$$, $value$$180$$));
    }
    $tableContainer$$11$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_CONTAINER_CLASS$);
    $tableContainer$$11$$.addClass($oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$.$_WIDGET$);
    $rootAttributes$$1_table$$12$$ = this.$getTable$();
    $tableContainer$$11$$.attr("style", $rootAttributes$$1_table$$12$$.attr("style").toString());
    $tableContainer$$11$$.css("overflow", "hidden");
    $tableContainer$$11$$.css("display", "inline-block");
    $tableContainer$$11$$.css("position", "relative");
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableFooter$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableFooter$$($tableFooter$$6_tableFooterRow$$5$$) {
    $tableFooter$$6_tableFooterRow$$5$$ && ($tableFooter$$6_tableFooterRow$$5$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CLASS$), $tableFooter$$6_tableFooterRow$$5$$ = $$$$14$$($tableFooter$$6_tableFooterRow$$5$$.children("tr")[0]), $tableFooter$$6_tableFooterRow$$5$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_ROW_CLASS$), $tableFooter$$6_tableFooterRow$$5$$.css("position", "relative"));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableFooterCell$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableFooterCell$$($columnIdx$$44$$, $tableFooterCell$$4$$) {
    var $options$$267$$ = this.options, $lastColumn$$1$$ = $columnIdx$$44$$ == this.$component$.columnMetaData().length - 1 ? !0 : !1, $column$$19$$ = this.$component$.columnMetaData($columnIdx$$44$$);
    $tableFooterCell$$4$$.attr("style", $column$$19$$.footerStyle);
    $tableFooterCell$$4$$.hasClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$) || $tableFooterCell$$4$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_CLASS$);
    $tableFooterCell$$4$$.css("float", "none");
    $tableFooterCell$$4$$.css("-moz-user-select", "none");
    $options$$267$$.verticalGridVisible != $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ || $lastColumn$$1$$ || $tableFooterCell$$4$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_FOOTER_CELL_VGRID_LINES_CLASS$);
    $column$$19$$.footerClassName && $tableFooterCell$$4$$.addClass($column$$19$$.footerClassName);
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableHeader$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableHeader$$($tableHeader$$7_tableHeaderRow$$5$$) {
    $tableHeader$$7_tableHeaderRow$$5$$ && ($tableHeader$$7_tableHeaderRow$$5$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_CLASS$), $tableHeader$$7_tableHeaderRow$$5$$.css("display", "table-header-group"), $tableHeader$$7_tableHeaderRow$$5$$ = $$$$14$$($tableHeader$$7_tableHeaderRow$$5$$.children("tr")[0]), $tableHeader$$7_tableHeaderRow$$5$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_TABLE_HEADER_ROW_CLASS$), $tableHeader$$7_tableHeaderRow$$5$$.css("position", "relative"));
  };
  $oj$$14$$.$TableDomUtils$.prototype.$styleTableHeaderColumn$ = function $$oj$$14$$$$TableDomUtils$$$$styleTableHeaderColumn$$($columnIdx$$45$$, $tableHeaderColumn$$11$$) {
    var $lastColumn$$2$$ = $columnIdx$$45$$ == this.$component$.columnMetaData().length - 1 ? !0 : !1, $column$$20$$ = this.$component$.columnMetaData($columnIdx$$45$$);
    $tableHeaderColumn$$11$$.addClass($oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_CELL_CLASS$);
    $tableHeaderColumn$$11$$.attr("style", $column$$20$$.headerStyle);
    $tableHeaderColumn$$11$$.css("float", "none");
    $lastColumn$$2$$ && $tableHeaderColumn$$11$$.css("borderRight", "none");
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_getDelayedRenderCell$ = function $$oj$$14$$$$TableDomUtils$$$$_getDelayedRenderCell$$($rowIdx$$42$$, $columnIdx$$46$$) {
    return null != this.$_delayedRenderCells$ && null != this.$_delayedRenderCells$[$rowIdx$$42$$] ? this.$_delayedRenderCells$[$rowIdx$$42$$][$columnIdx$$46$$] : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_getDelayedRenderRow$ = function $$oj$$14$$$$TableDomUtils$$$$_getDelayedRenderRow$$($rowIdx$$43$$) {
    return null != this.$_delayedRenderRows$ ? this.$_delayedRenderRows$[$rowIdx$$43$$] : null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_isIE$ = function $$oj$$14$$$$TableDomUtils$$$$_isIE$$() {
    var $resultArray_userAgent$$ = navigator.userAgent;
    if ("Microsoft Internet Explorer" == navigator.appName) {
      if ($resultArray_userAgent$$ = /MSIE ([0-9]{1,}[.0-9]{0,})/.exec($resultArray_userAgent$$), null != $resultArray_userAgent$$) {
        return parseFloat($resultArray_userAgent$$[1]);
      }
    } else {
      if (0 <= $resultArray_userAgent$$.indexOf("Trident")) {
        return 11;
      }
    }
    return null;
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_refreshTableDimensions$ = function $$oj$$14$$$$TableDomUtils$$$$_refreshTableDimensions$$($width$$21$$, $height$$18$$) {
    var $isTableHeightScrolled_options$$268$$ = this.options, $table$$13_tableDivScroller$$2$$ = this.$getTable$(), $tableHeader$$8$$ = this.$getTableHeader$(), $tableBodyWidth_tableFooter$$7_totalHeight$$ = this.$getTableFooter$(), $tableBodyHeight_tableHeaderRow$$6$$ = this.$getTableHeaderRow$(), $scrollbarWidth$$2_tableContainer$$12$$ = this.$getTableContainer$(), $tableBody$$13$$ = this.$getTableBody$(), $data$$120$$ = $isTableHeightScrolled_options$$268$$.data;
    this.$_removeTableDimensionsStyling$();
    $table$$13_tableDivScroller$$2$$.css("display", "table");
    this.$_specifiedTableStyle$ || (this.$_specifiedTableStyle$ = $table$$13_tableDivScroller$$2$$.attr("style"));
    this.$_tableContainerDimensions$ ? (0 < $width$$21$$ && this.$_tableContainerWidthConstrained$ && (this.$_tableContainerDimensions$.width = $width$$21$$), 0 < $height$$18$$ && this.$_tableContainerHeightConstrained$ && (this.$_tableContainerDimensions$.height = $height$$18$$)) : ($table$$13_tableDivScroller$$2$$.attr("style", this.$_specifiedTableStyle$), this.$_tableContainerDimensions$ = this.$getTableContainerDimensions$(), 0 == this.$_tableContainerDimensions$.height || this.$isDivScroller$() || 
    ($table$$13_tableDivScroller$$2$$.css("position", "absolute"), $table$$13_tableDivScroller$$2$$.css("top", "0px"), $table$$13_tableDivScroller$$2$$.css("bottom", "0px"), $table$$13_tableDivScroller$$2$$.css("display", "table")), this.$_tableContainerWidthConstrained$ = this.$_tableContainerHeightConstrained$ = !0, 0 == this.$_tableContainerDimensions$.height && (this.$_tableContainerHeightConstrained$ = !1), 0 == this.$_tableContainerDimensions$.width && (this.$_tableContainerWidthConstrained$ = 
    !1));
    var $isTableHeightScrolled_options$$268$$ = this.$isTableContainerScrollable$()[0], $isTableWidthScrolled$$ = this.$isTableContainerScrollable$()[1], $captionHeight_isTableMinHeightSet$$ = !1, $minHeight$$ = parseInt($table$$13_tableDivScroller$$2$$.css("minHeight"), 10);
    if (0 < $minHeight$$) {
      var $captionHeight_isTableMinHeightSet$$ = !0, $caption_tableHeaderHeight$$ = 0;
      null != $tableHeader$$8$$ && ($caption_tableHeaderHeight$$ = $tableHeader$$8$$.height());
      var $tableFooterHeight$$ = 0;
      null != $tableBodyWidth_tableFooter$$7_totalHeight$$ && ($tableFooterHeight$$ = $tableBodyWidth_tableFooter$$7_totalHeight$$.height());
      $tableBody$$13$$.css("min-height", $minHeight$$ - $caption_tableHeaderHeight$$ - $tableFooterHeight$$ + "px");
    }
    if ($isTableHeightScrolled_options$$268$$ || $isTableWidthScrolled$$ || this.$_tableContainerHeightConstrained$ || this.$_tableContainerWidthConstrained$ || $captionHeight_isTableMinHeightSet$$) {
      this.$_setColumnWidths$();
      $captionHeight_isTableMinHeightSet$$ = 0;
      $caption_tableHeaderHeight$$ = $table$$13_tableDivScroller$$2$$.children("caption");
      null != $caption_tableHeaderHeight$$ && 0 < $caption_tableHeaderHeight$$.length && ($captionHeight_isTableMinHeightSet$$ = $$$$14$$($caption_tableHeaderHeight$$[0]).height());
      $caption_tableHeaderHeight$$ = 0;
      null != $tableHeader$$8$$ && ($tableHeader$$8$$.css("position", "absolute"), $tableHeader$$8$$.css("top", $captionHeight_isTableMinHeightSet$$ + "px"), $tableBodyHeight_tableHeaderRow$$6$$.css("display", "block"), this.$isDivScroller$() ? $scrollbarWidth$$2_tableContainer$$12$$.css("padding-top", $tableHeader$$8$$.height() + "px") : ($caption_tableHeaderHeight$$ = $tableHeader$$8$$.height(), $tableBody$$13$$.css("top", $caption_tableHeaderHeight$$ + "px")));
      $tableFooterHeight$$ = 0;
      null != $tableBodyWidth_tableFooter$$7_totalHeight$$ && ($tableBodyWidth_tableFooter$$7_totalHeight$$.css("position", "absolute"), $tableBodyWidth_tableFooter$$7_totalHeight$$.css("display", "block"), $tableFooterHeight$$ = $tableBodyWidth_tableFooter$$7_totalHeight$$.height());
      $tableBody$$13$$.css("display", "block");
      $table$$13_tableDivScroller$$2$$.css("display", "block");
      this.$isDivScroller$() ? $isTableHeightScrolled_options$$268$$ && $scrollbarWidth$$2_tableContainer$$12$$.css("padding-top", $caption_tableHeaderHeight$$ + "px") : ($tableBody$$13$$.css("position", "relative"), $tableBody$$13$$.css("overflow-y", "auto"), $isTableWidthScrolled$$ ? (null != $data$$120$$ && 0 < $data$$120$$.size() ? ($tableBody$$13$$.css("overflow-x", "auto"), $tableBody$$13$$.css("width", this.$_tableContainerDimensions$.width), null != $tableHeader$$8$$ && $tableHeader$$8$$.css("width", 
      this.$_tableContainerDimensions$.width)) : $scrollbarWidth$$2_tableContainer$$12$$.css("overflow-x", "auto"), null != $tableBodyHeight_tableHeaderRow$$6$$ && $tableBodyHeight_tableHeaderRow$$6$$.css("position", "relative")) : $tableBody$$13$$.css("overflow-x", "hidden"), $isTableHeightScrolled_options$$268$$ && ($tableBodyHeight_tableHeaderRow$$6$$ = this.$_tableContainerDimensions$.height - $caption_tableHeaderHeight$$ - $tableFooterHeight$$ - $captionHeight_isTableMinHeightSet$$, 0 < $tableBodyHeight_tableHeaderRow$$6$$ && 
      ($tableBody$$13$$.css("height", $tableBodyHeight_tableHeaderRow$$6$$ + "px"), $tableBody$$13$$.css("min-height", $tableBodyHeight_tableHeaderRow$$6$$ + "px"))));
      null != $tableBodyWidth_tableFooter$$7_totalHeight$$ && $tableBodyWidth_tableFooter$$7_totalHeight$$.css("top", $caption_tableHeaderHeight$$ + $tableBody$$13$$.height() + "px");
      if (!$isTableWidthScrolled$$ && ((null == $data$$120$$ || 0 == $data$$120$$.size()) && null != $tableHeader$$8$$ && 0 < $tableHeader$$8$$.width() ? $tableBody$$13$$.css("width", $tableHeader$$8$$.width() + "px") : $tableBody$$13$$.css("width", ""), 0 == this.$_tableContainerDimensions$.width)) {
        $tableBody$$13$$.css("display", "inline-block");
        if (0 < $tableBody$$13$$.width()) {
          $table$$13_tableDivScroller$$2$$.css("width", $tableBody$$13$$.width() + "px"), $scrollbarWidth$$2_tableContainer$$12$$.css("width", $tableBody$$13$$.width() + "px");
        } else {
          if (null != $data$$120$$ && 0 < $data$$120$$.size() && 0 < $tableBody$$13$$.children().length) {
            this.$_refreshTableDimensionsTimer$ = {width:$width$$21$$, height:$height$$18$$};
            return;
          }
        }
        $tableBody$$13$$.css("display", "block");
      }
      $tableBodyWidth_tableFooter$$7_totalHeight$$ = $tableBody$$13$$.width();
      null != $tableHeader$$8$$ && ($scrollbarWidth$$2_tableContainer$$12$$ = this.$getScrollbarWidth$(), 0 < $scrollbarWidth$$2_tableContainer$$12$$ ? ($tableHeader$$8$$.css("overflow", "hidden"), $tableHeader$$8$$.css("width", $tableBodyWidth_tableFooter$$7_totalHeight$$ - $scrollbarWidth$$2_tableContainer$$12$$ + "px")) : $tableHeader$$8$$.css("width", $tableBodyWidth_tableFooter$$7_totalHeight$$ + "px"));
      0 != this.$_tableContainerDimensions$.height || this.$isDivScroller$() || ($tableBodyWidth_tableFooter$$7_totalHeight$$ = $caption_tableHeaderHeight$$ + $tableFooterHeight$$ + $tableBody$$13$$.height(), $table$$13_tableDivScroller$$2$$.css("height", $tableBodyWidth_tableFooter$$7_totalHeight$$ + "px"));
      this.$isDivScroller$() && ($table$$13_tableDivScroller$$2$$ = this.$getTableDivScroller$(), $table$$13_tableDivScroller$$2$$.css("overflow", "auto"), $isTableWidthScrolled$$ && $table$$13_tableDivScroller$$2$$.css("width", this.$_tableContainerDimensions$.width), $isTableHeightScrolled_options$$268$$ && $table$$13_tableDivScroller$$2$$.css("height", this.$_tableContainerDimensions$.height), null != $tableHeader$$8$$ && (this.$_tableHeaderWidth$ = $tableHeader$$8$$.width()), $tableBody$$13$$.css("float", 
      "left"));
      this.$_removeTableBodyCellBottomBorder$();
    } else {
      null != $data$$120$$ && 0 < $data$$120$$.size() ? $tableBody$$13$$.css("display", "table-row-group") : $tableBody$$13$$.css("display", "block");
    }
    this.$_refreshTableMessagingPosition$();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_refreshTableMessagingPosition$ = function $$oj$$14$$$$TableDomUtils$$$$_refreshTableMessagingPosition$$() {
    var $tableContainer$$13_tableHeaderHeight$$1$$ = this.$getTableContainer$(), $tableHeader$$9$$ = this.$getTableHeader$(), $tableStatusMessage$$ = this.$getTableStatusMessage$(), $tableNoDataMessage$$ = this.$getTableNoDataMessage$();
    $tableStatusMessage$$.css("top", $tableContainer$$13_tableHeaderHeight$$1$$.height() / 2 + "px");
    $tableStatusMessage$$.css("left", ($tableContainer$$13_tableHeaderHeight$$1$$.width() - $tableStatusMessage$$.width()) / 2 + "px");
    null != $tableHeader$$9$$ ? ($tableContainer$$13_tableHeaderHeight$$1$$ = $tableHeader$$9$$.height(), $tableNoDataMessage$$.css("top", $tableContainer$$13_tableHeaderHeight$$1$$ + $tableHeader$$9$$[0].offsetTop + "px")) : $tableNoDataMessage$$.css("top", "0px");
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_removeHeaderColumnAndCellColumnWidths$ = function $$oj$$14$$$$TableDomUtils$$$$_removeHeaderColumnAndCellColumnWidths$$() {
    var $data$$121_tableBodyCell$$11$$ = this.options.data, $columns$$14$$ = this.$component$.columnMetaData(), $i$$210_tableBodyRows$$4$$, $headerColumn$$9$$;
    for ($i$$210_tableBodyRows$$4$$ = 0;$i$$210_tableBodyRows$$4$$ < $columns$$14$$.length;$i$$210_tableBodyRows$$4$$++) {
      $headerColumn$$9$$ = this.$getTableHeaderColumn$($i$$210_tableBodyRows$$4$$), null != $headerColumn$$9$$ && $headerColumn$$9$$.css("min-width", "");
    }
    if (null != $data$$121_tableBodyCell$$11$$ && 0 < $data$$121_tableBodyCell$$11$$.size() && ($i$$210_tableBodyRows$$4$$ = this.$getTableBodyRows$(), null != $i$$210_tableBodyRows$$4$$ && 0 < $i$$210_tableBodyRows$$4$$.length)) {
      for ($i$$210_tableBodyRows$$4$$ = 0;$i$$210_tableBodyRows$$4$$ < $columns$$14$$.length;$i$$210_tableBodyRows$$4$$++) {
        $data$$121_tableBodyCell$$11$$ = this.$getTableBodyCell$(0, $i$$210_tableBodyRows$$4$$, null), null != $data$$121_tableBodyCell$$11$$ && $data$$121_tableBodyCell$$11$$.css("min-width", "");
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_removeTableBodyCellBottomBorder$ = function $$oj$$14$$$$TableDomUtils$$$$_removeTableBodyCellBottomBorder$$() {
    if (this.options.horizontalGridVisible == $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$) {
      var $i$$211_table$$14_tableRect$$ = this.$getTable$(), $tableBodyCells$$4_tableBodyRows$$5$$ = this.$getTableBodyRows$();
      if (null != $tableBodyCells$$4_tableBodyRows$$5$$ && 0 < $tableBodyCells$$4_tableBodyRows$$5$$.length) {
        var $lastTableBodyRow_lastTableBodyRowRect$$ = $$$$14$$($tableBodyCells$$4_tableBodyRows$$5$$[$tableBodyCells$$4_tableBodyRows$$5$$.length - 1]), $tableBodyCells$$4_tableBodyRows$$5$$ = this.$getTableBodyCells$($tableBodyCells$$4_tableBodyRows$$5$$.length - 1, $lastTableBodyRow_lastTableBodyRowRect$$);
        if (null != $tableBodyCells$$4_tableBodyRows$$5$$ && 0 < $tableBodyCells$$4_tableBodyRows$$5$$.length) {
          var $lastTableBodyRow_lastTableBodyRowRect$$ = $lastTableBodyRow_lastTableBodyRowRect$$[0].getBoundingClientRect(), $i$$211_table$$14_tableRect$$ = $i$$211_table$$14_tableRect$$[0].getBoundingClientRect(), $borderBottomWidth$$ = parseInt($$$$14$$($tableBodyCells$$4_tableBodyRows$$5$$[0]).css("borderBottomWidth"), 10);
          if ($lastTableBodyRow_lastTableBodyRowRect$$.bottom + $borderBottomWidth$$ == $i$$211_table$$14_tableRect$$.bottom) {
            for ($i$$211_table$$14_tableRect$$ = 0;$i$$211_table$$14_tableRect$$ < $tableBodyCells$$4_tableBodyRows$$5$$.length;$i$$211_table$$14_tableRect$$++) {
              "0" != $$$$14$$($tableBodyCells$$4_tableBodyRows$$5$$[$i$$211_table$$14_tableRect$$]).css("border-bottom") && $$$$14$$($tableBodyCells$$4_tableBodyRows$$5$$[$i$$211_table$$14_tableRect$$]).css("border-bottom", "0");
            }
          }
        }
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_removeTableDimensionsStyling$ = function $$oj$$14$$$$TableDomUtils$$$$_removeTableDimensionsStyling$$() {
    var $table$$15$$ = this.$getTable$(), $tableHeader$$10$$ = this.$getTableHeader$(), $tableHeaderRow$$7$$ = this.$getTableHeaderRow$(), $tableBody$$14$$ = this.$getTableBody$();
    null != $tableHeader$$10$$ && ($tableHeader$$10$$.attr("style", ""), $tableHeaderRow$$7$$.attr("style", ""));
    $table$$15$$.css("display", "");
    $tableBody$$14$$.attr("style", "");
    this.$_removeHeaderColumnAndCellColumnWidths$();
  };
  $oj$$14$$.$TableDomUtils$.prototype.$_setColumnWidths$ = function $$oj$$14$$$$TableDomUtils$$$$_setColumnWidths$$() {
    var $data$$122_tableBodyCell$$12$$ = this.options.data, $columns$$15$$ = this.$component$.columnMetaData(), $columnWidths$$ = [], $columnPaddingWidths$$ = [], $i$$212_tableBodyRows$$6$$, $headerColumn$$10_headerColumnRowDiv$$1$$, $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$, $headerColumnTextDiv$$1$$;
    for ($i$$212_tableBodyRows$$6$$ = 0;$i$$212_tableBodyRows$$6$$ < $columns$$15$$.length;$i$$212_tableBodyRows$$6$$++) {
      $headerColumn$$10_headerColumnRowDiv$$1$$ = this.$getTableHeaderColumn$($i$$212_tableBodyRows$$6$$), null != $headerColumn$$10_headerColumnRowDiv$$1$$ && ($columnWidths$$[$i$$212_tableBodyRows$$6$$] = $headerColumn$$10_headerColumnRowDiv$$1$$.width(), $columnPaddingWidths$$[$i$$212_tableBodyRows$$6$$] = parseInt($headerColumn$$10_headerColumnRowDiv$$1$$.css("padding-right"), 10) + parseInt($headerColumn$$10_headerColumnRowDiv$$1$$.css("padding-left"), 10), $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$ = 
      null, ($headerColumnTextDiv$$1$$ = $headerColumn$$10_headerColumnRowDiv$$1$$.find("." + $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_TEXT_CLASS$)) && 0 < $headerColumnTextDiv$$1$$.length && ($adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$ = $headerColumnTextDiv$$1$$.get(0).clientHeight), null != $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$ && ($headerColumn$$10_headerColumnRowDiv$$1$$ = $headerColumn$$10_headerColumnRowDiv$$1$$.find("." + 
      $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$.$_COLUMN_HEADER_ROW_CLASS$), $headerColumn$$10_headerColumnRowDiv$$1$$.css("min-height", $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$ + "px")));
    }
    for ($i$$212_tableBodyRows$$6$$ = 0;$i$$212_tableBodyRows$$6$$ < $columns$$15$$.length;$i$$212_tableBodyRows$$6$$++) {
      $headerColumn$$10_headerColumnRowDiv$$1$$ = this.$getTableHeaderColumn$($i$$212_tableBodyRows$$6$$), null != $headerColumn$$10_headerColumnRowDiv$$1$$ && $headerColumn$$10_headerColumnRowDiv$$1$$.css("min-width", $columnWidths$$[$i$$212_tableBodyRows$$6$$] + "px"), $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$ = this.$getTableFooterCell$($i$$212_tableBodyRows$$6$$), null != $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$ && 
      $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$.css("min-width", $columnWidths$$[$i$$212_tableBodyRows$$6$$] + "px");
    }
    if (null != $data$$122_tableBodyCell$$12$$ && 0 < $data$$122_tableBodyCell$$12$$.size() && ($i$$212_tableBodyRows$$6$$ = this.$getTableBodyRows$(), null != $i$$212_tableBodyRows$$6$$ && 0 < $i$$212_tableBodyRows$$6$$.length)) {
      for ($i$$212_tableBodyRows$$6$$ = 0;$i$$212_tableBodyRows$$6$$ < $columns$$15$$.length;$i$$212_tableBodyRows$$6$$++) {
        $data$$122_tableBodyCell$$12$$ = this.$getTableBodyCell$(0, $i$$212_tableBodyRows$$6$$, null), null != $data$$122_tableBodyCell$$12$$ && ($adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$ = parseInt($data$$122_tableBodyCell$$12$$.css("padding-right"), 10) + parseInt($data$$122_tableBodyCell$$12$$.css("padding-left"), 10), $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$ = $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$ > 
        $columnPaddingWidths$$[$i$$212_tableBodyRows$$6$$] ? $columnWidths$$[$i$$212_tableBodyRows$$6$$] - $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$ + $columnPaddingWidths$$[$i$$212_tableBodyRows$$6$$] : $columnWidths$$[$i$$212_tableBodyRows$$6$$] + $columnPaddingWidths$$[$i$$212_tableBodyRows$$6$$] - $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$, $data$$122_tableBodyCell$$12$$.css("min-width", $adjustedColumnWidth_footerCell$$1_headerColumnTextDivHeight_tableBodyCellPaddingWidth$$ + 
        "px"));
      }
    }
  };
  $oj$$14$$.$TableDomUtils$.$CSS_CLASSES$ = {$_CHECKBOX_ACC_SELECT_COLUMN_CLASS$:"oj-table-checkbox-acc-select-column", $_CHECKBOX_ACC_SELECT_ROW_CLASS$:"oj-table-checkbox-acc-select-row", $_TABLE_CONTAINER_CLASS$:"oj-table-container", $_TABLE_SCROLLER_CLASS$:"oj-table-scroller", $_TABLE_CLASS$:"oj-table", $_TABLE_FOOTER_CLASS$:"oj-table-footer", $_TABLE_FOOTER_ROW_CLASS$:"oj-table-footer-row", $_TABLE_HEADER_CLASS$:"oj-table-header", $_TABLE_HEADER_ROW_CLASS$:"oj-table-header-row", $_COLUMN_HEADER_CELL_CLASS$:"oj-table-column-header-cell", 
  $_COLUMN_HEADER_ACC_SELECT_COLUMN_CLASS$:"oj-table-column-header-acc-select-column", $_COLUMN_HEADER_ACC_SELECT_ROW_CLASS$:"oj-table-column-header-acc-select-row", $_COLUMN_HEADER_ROW_CLASS$:"oj-table-column-header", $_COLUMN_HEADER_TEXT_CLASS$:"oj-table-column-header-text", $_COLUMN_HEADER_ASC_CLASS$:"oj-table-column-header-asc", $_COLUMN_HEADER_DSC_CLASS$:"oj-table-column-header-dsc", $_COLUMN_HEADER_ACC_ASC_LINK_CLASS$:"oj-table-column-header-acc-asc-link", $_COLUMN_HEADER_ACC_DSC_LINK_CLASS$:"oj-table-column-header-acc-dsc-link", 
  $_COLUMN_HEADER_ASC_LINK_CLASS$:"oj-table-column-header-asc-link", $_COLUMN_HEADER_DSC_LINK_CLASS$:"oj-table-column-header-dsc-link", $_COLUMN_HEADER_ASC_ICON_CLASS$:"oj-table-column-header-asc-icon", $_COLUMN_HEADER_DSC_ICON_CLASS$:"oj-table-column-header-dsc-icon", $_TABLE_BODY_CLASS$:"oj-table-body", $_TABLE_DATA_ROW_CLASS$:"oj-table-body-row", $_TABLE_DATA_CELL_CLASS$:"oj-table-data-cell", $_TABLE_DATA_CELL_ACC_SELECT_CLASS$:"oj-table-data-cell-acc-select", $_TABLE_DATA_CELL_VGRID_LINES_CLASS$:"oj-table-data-cell-vgrid-lines", 
  $_TABLE_DATA_CELL_HGRID_LINES_CLASS$:"oj-table-data-cell-hgrid-lines", $_TABLE_FOOTER_CELL_CLASS$:"oj-table-footer-cell", $_TABLE_FOOTER_CELL_VGRID_LINES_CLASS$:"oj-table-footer-cell-vgrid-lines", $_TABLE_STATUS_MESSAGE_CLASS$:"oj-table-status-message", $_TABLE_NO_DATA_MESSAGE_CLASS$:"oj-table-no-data-message", $_WIDGET_ICON_CLASS$:"oj-component-icon", $_HIDDEN_CONTENT_ACC_CLASS$:"oj-helper-hidden-accessible"};
  $oj$$14$$.$TableDomUtils$.$MARKER_STYLE_CLASSES$ = {$_WIDGET$:"oj-component", $_ACTIVE$:"oj-active", $_CLICKABLE_ICON$:"oj-clickable-icon", $_DISABLED$:"oj-disabled", $_ENABLED$:"oj-enabled", $_FOCUS$:"oj-focus", $_HOVER$:"oj-hover", $_SELECTED$:"oj-selected"};
  $oj$$14$$.$TableDomUtils$.$_COLUMN_HEADER_ROW_SELECT_ID$ = "_hdrColRowSel";
  $oj$$14$$.$TableDomUtils$.$_OPTION_ENABLED$ = "enabled";
  $oj$$14$$.$TableDomUtils$.$_OPTION_DISABLED$ = "disabled";
  $oj$$14$$.$TableDomUtils$.$_OPTION_SELECTION_MODES$ = {$_SINGLE$:"single", $_MULTIPLE$:"multiple"};
});
