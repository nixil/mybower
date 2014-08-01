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
*/
define(["ojs/ojcore", "jquery", "ojs/ojmodel", "ojs/ojdatacollection-common", "ojs/ojtable"], function($oj$$15$$, $$$$15$$) {
  $oj$$15$$.$ModelRow$ = function $$oj$$15$$$$ModelRow$$($model$$50$$, $options$$269$$) {
    $oj$$15$$.$ModelRow$._init(this, $model$$50$$, $options$$269$$, null);
  };
  $goog$exportPath_$$("ModelRow", $oj$$15$$.$ModelRow$, $oj$$15$$);
  $oj$$15$$.$Object$.$createSubclass$($oj$$15$$.$ModelRow$, $oj$$15$$.$Row$, "ModelRow.ModelRow");
  $oj$$15$$.$ModelRow$.prototype.Init = function $$oj$$15$$$$ModelRow$$$Init$() {
    $oj$$15$$.$Row$.$superclass$.Init.call(this);
  };
  $oj$$15$$.$ModelRow$.prototype.attributes = {};
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.attributes", {attributes:$oj$$15$$.$ModelRow$.prototype.attributes});
  $oj$$15$$.$ModelRow$.prototype.id = null;
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.id", {id:$oj$$15$$.$ModelRow$.prototype.id});
  $oj$$15$$.$ModelRow$.prototype.$idAttribute$ = null;
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.idAttribute", {$idAttribute$:$oj$$15$$.$ModelRow$.prototype.$idAttribute$});
  $oj$$15$$.$ModelRow$._init = function $$oj$$15$$$$ModelRow$$_init$($row$$45$$, $model$$51$$, $options$$270$$, $properties$$11$$) {
    var $prop$$71$$ = null;
    $row$$45$$.Init();
    $row$$45$$.$_model$ = $model$$51$$;
    $row$$45$$.id = $model$$51$$.id;
    $row$$45$$.$idAttribute$ = $model$$51$$.$idAttribute$;
    $row$$45$$.attributes = $model$$51$$.attributes;
    $row$$45$$.index = $model$$51$$.index;
    $options$$270$$ = $options$$270$$ || {};
    for ($prop$$71$$ in $properties$$11$$) {
      $properties$$11$$.hasOwnProperty($prop$$71$$) && ($row$$45$$[$prop$$71$$] = $properties$$11$$[$prop$$71$$]);
    }
    $row$$45$$.context = $options$$270$$.context;
  };
  $oj$$15$$.$ModelRow$.prototype.clone = function $$oj$$15$$$$ModelRow$$$clone$() {
    return this.$_model$.clone();
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.clone", {clone:$oj$$15$$.$ModelRow$.prototype.clone});
  $oj$$15$$.$ModelRow$.prototype.get = function $$oj$$15$$$$ModelRow$$$get$($property$$24$$) {
    return this.$_model$.get($property$$24$$);
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.get", {get:$oj$$15$$.$ModelRow$.prototype.get});
  $oj$$15$$.$ModelRow$.prototype.$getModel$ = function $$oj$$15$$$$ModelRow$$$$getModel$$() {
    return this.$_model$;
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.getModel", {$getModel$:$oj$$15$$.$ModelRow$.prototype.$getModel$});
  $oj$$15$$.$ModelRow$.prototype.set = function $$oj$$15$$$$ModelRow$$$set$($property$$25$$, $value$$181$$, $options$$271$$) {
    return this.$_model$.set($property$$25$$, $value$$181$$, $options$$271$$);
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.set", {set:$oj$$15$$.$ModelRow$.prototype.set});
  $oj$$15$$.$ModelRow$.prototype.keys = function $$oj$$15$$$$ModelRow$$$keys$() {
    return this.$_model$.keys();
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.keys", {keys:$oj$$15$$.$ModelRow$.prototype.keys});
  $oj$$15$$.$ModelRow$.prototype.values = function $$oj$$15$$$$ModelRow$$$values$() {
    return this.$_model$.values();
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.values", {values:$oj$$15$$.$ModelRow$.prototype.values});
  $oj$$15$$.$ModelRow$.prototype.pairs = function $$oj$$15$$$$ModelRow$$$pairs$() {
    return this.$_model$.pairs();
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("ModelRow.prototype.pairs", {pairs:$oj$$15$$.$ModelRow$.prototype.pairs});
  $oj$$15$$.$CollectionRowSet$ = function $$oj$$15$$$$CollectionRowSet$$($collection$$26$$, $options$$272$$) {
    $oj$$15$$.$CollectionRowSet$._init(this, $collection$$26$$, $options$$272$$, null);
  };
  $goog$exportPath_$$("CollectionRowSet", $oj$$15$$.$CollectionRowSet$, $oj$$15$$);
  $oj$$15$$.$CollectionRowSet$.prototype.$comparator$ = null;
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.comparator", {$comparator$:$oj$$15$$.$CollectionRowSet$.prototype.$comparator$});
  $oj$$15$$.$CollectionRowSet$.prototype.$sortSupported$ = !0;
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.sortSupported", {$sortSupported$:$oj$$15$$.$CollectionRowSet$.prototype.$sortSupported$});
  $oj$$15$$.$Object$.$createSubclass$($oj$$15$$.$CollectionRowSet$, $oj$$15$$.$RowSet$, "CollectionRowSet.CollectionRowSet");
  $oj$$15$$.$CollectionRowSet$.prototype.Init = function $$oj$$15$$$$CollectionRowSet$$$Init$() {
    $oj$$15$$.$CollectionRowSet$.$superclass$.Init.call(this);
  };
  $oj$$15$$.$CollectionRowSet$._init = function $$oj$$15$$$$CollectionRowSet$$_init$($rowSet$$5$$, $collection$$27$$, $options$$273$$, $properties$$12$$) {
    var $prop$$72$$;
    $rowSet$$5$$.$_eventHandlers$ = [];
    $rowSet$$5$$.$_startIndex$ = 0;
    $rowSet$$5$$.Init();
    if ($properties$$12$$) {
      for ($prop$$72$$ in $properties$$12$$) {
        $properties$$12$$.hasOwnProperty($prop$$72$$) && ($rowSet$$5$$[$prop$$72$$] = $properties$$12$$[$prop$$72$$]);
      }
    }
    $rowSet$$5$$.$_collection$ = $collection$$27$$;
    $rowSet$$5$$.$_addCollectionEventListeners$();
  };
  $oj$$15$$.$CollectionRowSet$.prototype.at = function $$oj$$15$$$$CollectionRowSet$$$at$($index$$158$$, $options$$274$$) {
    var $model$$52$$ = this.$_collection$.at($index$$158$$, $options$$274$$);
    if (null != $model$$52$$) {
      if ($model$$52$$ instanceof $oj$$15$$.$Model$) {
        return new $oj$$15$$.$ModelRow$($model$$52$$);
      }
      var $deferredModel$$ = $$$$15$$.Deferred();
      $$$$15$$.when($model$$52$$).done(function($resolvedModel$$1$$) {
        $deferredModel$$.resolve(new $oj$$15$$.$ModelRow$($resolvedModel$$1$$));
      });
      return $deferredModel$$;
    }
    return null;
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.at", {at:$oj$$15$$.$CollectionRowSet$.prototype.at});
  $oj$$15$$.$CollectionRowSet$.prototype.fetch = function $$oj$$15$$$$CollectionRowSet$$$fetch$($options$$275$$) {
    if (this.$_canFetch$.call(this)) {
      this.$_startFetch$.call(this);
      $options$$275$$ = $options$$275$$ || {};
      var $self$$79$$ = this, $isPaged$$ = null != $options$$275$$.startIndex ? !0 : !1;
      this.$_startIndex$ = $isPaged$$ ? $options$$275$$.startIndex : 0;
      var $pageSize$$5$$ = 0 < $options$$275$$.pageSize ? $options$$275$$.pageSize : -1;
      $options$$275$$.pageSize = $pageSize$$5$$;
      $options$$275$$.startIndex = this.$_startIndex$;
      $options$$275$$.refresh = !0;
      $isPaged$$ ? this.$_collection$.$setRangeLocal$(this.$_startIndex$, $pageSize$$5$$).done(function() {
        $self$$79$$.$_endFetch$.call($self$$79$$, $options$$275$$);
      }) : this.$_collection$.fetch({success:function($collection$$28$$) {
        $self$$79$$.$_collection$ = $collection$$28$$;
        $self$$79$$.$_endFetch$.call($self$$79$$, $options$$275$$);
      }});
    }
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.fetch", {fetch:$oj$$15$$.$CollectionRowSet$.prototype.fetch});
  $oj$$15$$.$CollectionRowSet$.prototype.get = function $$oj$$15$$$$CollectionRowSet$$$get$($id$$27$$, $options$$276$$) {
    return new $oj$$15$$.$ModelRow$(this.$_collection$.get($id$$27$$, $options$$276$$));
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.get", {get:$oj$$15$$.$CollectionRowSet$.prototype.get});
  $oj$$15$$.$CollectionRowSet$.prototype.getCollection = function $$oj$$15$$$$CollectionRowSet$$$getCollection$() {
    return this.$_collection$;
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.getCollection", {getCollection:$oj$$15$$.$CollectionRowSet$.prototype.getCollection});
  $oj$$15$$.$CollectionRowSet$.prototype.hasMore = function $$oj$$15$$$$CollectionRowSet$$$hasMore$() {
    return this.$_collection$.hasMore;
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.hasMore", {hasMore:$oj$$15$$.$CollectionRowSet$.prototype.hasMore});
  $oj$$15$$.$CollectionRowSet$.prototype.indexOf = function $$oj$$15$$$$CollectionRowSet$$$indexOf$($row$$46$$, $options$$277$$) {
    return this.$_collection$.indexOf($row$$46$$.$getModel$(), $options$$277$$);
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.indexOf", {indexOf:$oj$$15$$.$CollectionRowSet$.prototype.indexOf});
  $oj$$15$$.$CollectionRowSet$.prototype.isEmpty = function $$oj$$15$$$$CollectionRowSet$$$isEmpty$() {
    return this.$_collection$.isEmpty();
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.isEmpty", {isEmpty:$oj$$15$$.$CollectionRowSet$.prototype.isEmpty});
  $oj$$15$$.$CollectionRowSet$.prototype.size = function $$oj$$15$$$$CollectionRowSet$$$size$() {
    return this.$_collection$.size();
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.size", {size:$oj$$15$$.$CollectionRowSet$.prototype.size});
  $oj$$15$$.$CollectionRowSet$.prototype.sort = function $$oj$$15$$$$CollectionRowSet$$$sort$() {
    this.$_collection$.comparator = this.comparator;
    return this.$_collection$.sort(null);
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.sort", {sort:$oj$$15$$.$CollectionRowSet$.prototype.sort});
  $oj$$15$$.$CollectionRowSet$.prototype.totalSize = function $$oj$$15$$$$CollectionRowSet$$$totalSize$() {
    return this.$_collection$.totalResults;
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionRowSet.prototype.totalSize", {totalSize:$oj$$15$$.$CollectionRowSet$.prototype.totalSize});
  $oj$$15$$.$CollectionRowSet$.prototype.$_addCollectionEventListeners$ = function $$oj$$15$$$$CollectionRowSet$$$$_addCollectionEventListeners$$() {
    var $self$$80$$ = this;
    this.$_collection$.on($oj$$15$$.$Events$.$EventType$.ADD, function($event$$168$$) {
      $oj$$15$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$80$$, $oj$$15$$.$RowSet$.$EventType$.ADD, new $oj$$15$$.$ModelRow$($event$$168$$));
    });
    this.$_collection$.on($oj$$15$$.$Events$.$EventType$.REMOVE, function($event$$169$$) {
      $oj$$15$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$80$$, $oj$$15$$.$RowSet$.$EventType$.REMOVE, new $oj$$15$$.$ModelRow$($event$$169$$));
    });
    this.$_collection$.on($oj$$15$$.$Events$.$EventType$.RESET, function($event$$170$$) {
      $oj$$15$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$80$$, $oj$$15$$.$RowSet$.$EventType$.RESET, $event$$170$$);
    });
    this.$_collection$.on($oj$$15$$.$Events$.$EventType$.SORT, function($event$$171$$, $eventOpts$$1$$) {
      null != $eventOpts$$1$$ && $eventOpts$$1$$.add || $oj$$15$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$80$$, $oj$$15$$.$RowSet$.$EventType$.SORT, $event$$171$$);
    });
    this.$_collection$.on($oj$$15$$.$Events$.$EventType$.CHANGE, function($event$$172$$) {
      $oj$$15$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$80$$, $oj$$15$$.$RowSet$.$EventType$.CHANGE, new $oj$$15$$.$ModelRow$($event$$172$$));
    });
    this.$_collection$.on($oj$$15$$.$Events$.$EventType$.DESTROY, function($event$$173$$) {
      $oj$$15$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$80$$, $oj$$15$$.$RowSet$.$EventType$.REMOVE, $event$$173$$);
    });
    this.$_collection$.on($oj$$15$$.$Events$.$EventType$.REFRESH, function($event$$174$$) {
      $oj$$15$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$80$$, $oj$$15$$.$RowSet$.$EventType$.REFRESH, $event$$174$$);
    });
    this.$_collection$.on($oj$$15$$.$Events$.$EventType$.ERROR, function($event$$175$$) {
      $oj$$15$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call($self$$80$$, $oj$$15$$.$RowSet$.$EventType$.ERROR, $event$$175$$);
      $self$$80$$.$_endFetch$.call($self$$80$$, {refresh:!1});
    });
  };
  $oj$$15$$.$CollectionRowSet$.prototype.$_canFetch$ = function $$oj$$15$$$$CollectionRowSet$$$$_canFetch$$() {
    return!this.$_isFetching$;
  };
  $oj$$15$$.$CollectionRowSet$.prototype.$_startFetch$ = function $$oj$$15$$$$CollectionRowSet$$$$_startFetch$$() {
    this.$_isFetching$ = !0;
    $oj$$15$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$15$$.$RowSet$.$EventType$.REQUEST, null);
  };
  $oj$$15$$.$CollectionRowSet$.prototype.$_endFetch$ = function $$oj$$15$$$$CollectionRowSet$$$$_endFetch$$($options$$278$$) {
    this.$_isFetching$ = !1;
    $oj$$15$$.$CollectionRowSet$.$superclass$.$_handleEvent$.call(this, $oj$$15$$.$RowSet$.$EventType$.SYNC, $options$$278$$);
  };
  $oj$$15$$.$CollectionTableDataSource$ = function $$oj$$15$$$$CollectionTableDataSource$$($data$$123$$, $options$$279$$) {
    this.data = {};
    if (!($data$$123$$ instanceof $oj$$15$$.$Collection$)) {
      throw Error($oj$$15$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_SUMMARY + "\n" + $oj$$15$$.$TableDataSource$.$_LOGGER_MSG$._ERR_DATA_INVALID_TYPE_DETAIL);
    }
    $oj$$15$$.$CollectionTableDataSource$.$superclass$.constructor.call(this, $data$$123$$, $options$$279$$);
    this.$_rowSet$ = new $oj$$15$$.$CollectionRowSet$($data$$123$$, this.options);
    this.$_addRowSetEventListeners$();
    this.Init();
    if (null != $options$$279$$ && ("enabled" == $options$$279$$.startFetch || null == $options$$279$$.startFetch) || null == $options$$279$$) {
      var $self$$81$$ = this;
      setTimeout(function() {
        $self$$81$$.fetch({startFetch:"enabled"});
      }, 0);
    }
  };
  $goog$exportPath_$$("CollectionTableDataSource", $oj$$15$$.$CollectionTableDataSource$, $oj$$15$$);
  $oj$$15$$.$Object$.$createSubclass$($oj$$15$$.$CollectionTableDataSource$, $oj$$15$$.$TableDataSource$, "oj.CollectionTableDataSource");
  $oj$$15$$.$CollectionTableDataSource$.prototype.Init = function $$oj$$15$$$$CollectionTableDataSource$$$Init$() {
    $oj$$15$$.$CollectionTableDataSource$.$superclass$.Init.call(this);
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.Init", {Init:$oj$$15$$.$CollectionTableDataSource$.prototype.Init});
  $oj$$15$$.$CollectionTableDataSource$.prototype.at = function $$oj$$15$$$$CollectionTableDataSource$$$at$($index$$159$$) {
    return this.$_rowSet$.at($index$$159$$);
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.at", {at:$oj$$15$$.$CollectionTableDataSource$.prototype.at});
  $oj$$15$$.$CollectionTableDataSource$.prototype.fetch = function $$oj$$15$$$$CollectionTableDataSource$$$fetch$($options$$280$$) {
    $options$$280$$ = $options$$280$$ || {};
    null != $options$$280$$.startIndex && $oj$$15$$.$CollectionTableDataSource$.$superclass$.startIndex.call(this, $options$$280$$.startIndex);
    "enabled" == $options$$280$$.startFetch ? (this.$_rowSet$.isEmpty() || "undefined" === typeof this.$_rowSet$.size()) && this.$_rowSet$.fetch($options$$280$$) : this.$_rowSet$.fetch($options$$280$$);
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.fetch", {fetch:$oj$$15$$.$CollectionTableDataSource$.prototype.fetch});
  $oj$$15$$.$CollectionTableDataSource$.prototype.get = function $$oj$$15$$$$CollectionTableDataSource$$$get$($id$$28$$) {
    return this.$_rowSet$.get($id$$28$$);
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.get", {get:$oj$$15$$.$CollectionTableDataSource$.prototype.get});
  $oj$$15$$.$CollectionTableDataSource$.prototype.hasMore = function $$oj$$15$$$$CollectionTableDataSource$$$hasMore$() {
    return null != this.$_rowSet$ ? this.$_rowSet$.hasMore() : !1;
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.hasMore", {hasMore:$oj$$15$$.$CollectionTableDataSource$.prototype.hasMore});
  $oj$$15$$.$CollectionTableDataSource$.prototype.indexOf = function $$oj$$15$$$$CollectionTableDataSource$$$indexOf$($row$$47$$) {
    return this.$_rowSet$.indexOf($row$$47$$);
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.indexOf", {indexOf:$oj$$15$$.$CollectionTableDataSource$.prototype.indexOf});
  $oj$$15$$.$CollectionTableDataSource$.prototype.size = function $$oj$$15$$$$CollectionTableDataSource$$$size$() {
    return this.$_rowSet$.size();
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.size", {size:$oj$$15$$.$CollectionTableDataSource$.prototype.size});
  $oj$$15$$.$CollectionTableDataSource$.prototype.sort = function $$oj$$15$$$$CollectionTableDataSource$$$sort$($criteria$$12_direction$$8$$) {
    var $key$$75$$ = $criteria$$12_direction$$8$$.key;
    $criteria$$12_direction$$8$$ = $criteria$$12_direction$$8$$.direction;
    var $comparator$$14$$ = null;
    "ascending" == $criteria$$12_direction$$8$$ ? $comparator$$14$$ = function $$comparator$$14$$$($row$$48$$) {
      return $$$$15$$.isFunction($row$$48$$.get) ? $row$$48$$.get($key$$75$$) : $row$$48$$[$key$$75$$]();
    } : "descending" == $criteria$$12_direction$$8$$ && ($comparator$$14$$ = function $$comparator$$14$$$($rowA$$1$$, $rowB$$1$$) {
      var $a$$73$$, $b$$45$$;
      $$$$15$$.isFunction($rowA$$1$$.get) ? ($a$$73$$ = $rowA$$1$$.get($key$$75$$), $b$$45$$ = $rowB$$1$$.get($key$$75$$)) : ($a$$73$$ = $rowA$$1$$[$key$$75$$](), $b$$45$$ = $rowB$$1$$[$key$$75$$]());
      return $a$$73$$ === $b$$45$$ ? 0 : $a$$73$$ > $b$$45$$ ? -1 : 1;
    });
    this.$_rowSet$.comparator = $comparator$$14$$;
    this.$_rowSet$.sort();
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.sort", {sort:$oj$$15$$.$CollectionTableDataSource$.prototype.sort});
  $oj$$15$$.$CollectionTableDataSource$.prototype.totalSize = function $$oj$$15$$$$CollectionTableDataSource$$$totalSize$() {
    return this.$_rowSet$.totalSize();
  };
  $oj$$15$$.$Object$.$exportPrototypeSymbol$("CollectionTableDataSource.prototype.totalSize", {totalSize:$oj$$15$$.$CollectionTableDataSource$.prototype.totalSize});
  $oj$$15$$.$CollectionTableDataSource$.prototype.$_addRowSetEventListeners$ = function $$oj$$15$$$$CollectionTableDataSource$$$$_addRowSetEventListeners$$() {
    var $self$$82$$ = this;
    this.$_rowSet$.on($oj$$15$$.$RowSet$.$EventType$.ADD, function($event$$176$$) {
      $self$$82$$.$isFetching$ = !1;
      $oj$$15$$.$TableDataSource$.$superclass$.handleEvent.call($self$$82$$, $oj$$15$$.$TableDataSource$.$EventType$.ADD, $event$$176$$);
    });
    this.$_rowSet$.on($oj$$15$$.$RowSet$.$EventType$.REMOVE, function($event$$177$$) {
      $self$$82$$.$isFetching$ = !1;
      $oj$$15$$.$TableDataSource$.$superclass$.handleEvent.call($self$$82$$, $oj$$15$$.$TableDataSource$.$EventType$.REMOVE, $event$$177$$);
    });
    this.$_rowSet$.on($oj$$15$$.$RowSet$.$EventType$.REQUEST, function($event$$178$$) {
      $self$$82$$.$isFetching$ = !0;
      $oj$$15$$.$TableDataSource$.$superclass$.handleEvent.call($self$$82$$, $oj$$15$$.$TableDataSource$.$EventType$.REQUEST, $event$$178$$);
    });
    this.$_rowSet$.on($oj$$15$$.$RowSet$.$EventType$.RESET, function($event$$179$$) {
      $self$$82$$.$isFetching$ = !1;
      $oj$$15$$.$TableDataSource$.$superclass$.handleEvent.call($self$$82$$, $oj$$15$$.$TableDataSource$.$EventType$.RESET, $event$$179$$);
    });
    this.$_rowSet$.on($oj$$15$$.$RowSet$.$EventType$.REFRESH, function($event$$180$$) {
      $self$$82$$.$isFetching$ = !1;
      $oj$$15$$.$TableDataSource$.$superclass$.handleEvent.call($self$$82$$, $oj$$15$$.$TableDataSource$.$EventType$.REFRESH, $event$$180$$);
    });
    this.$_rowSet$.on($oj$$15$$.$RowSet$.$EventType$.SORT, function($event$$181$$) {
      $self$$82$$.$isFetching$ = !1;
      $oj$$15$$.$TableDataSource$.$superclass$.handleEvent.call($self$$82$$, $oj$$15$$.$TableDataSource$.$EventType$.SORT, $event$$181$$);
    });
    this.$_rowSet$.on($oj$$15$$.$RowSet$.$EventType$.CHANGE, function($event$$182$$) {
      $self$$82$$.$isFetching$ = !1;
      $oj$$15$$.$TableDataSource$.$superclass$.handleEvent.call($self$$82$$, $oj$$15$$.$TableDataSource$.$EventType$.CHANGE, $event$$182$$);
    });
    this.$_rowSet$.on($oj$$15$$.$RowSet$.$EventType$.SYNC, function($event$$183$$) {
      $self$$82$$.$isFetching$ = !1;
      $oj$$15$$.$TableDataSource$.$superclass$.handleEvent.call($self$$82$$, $oj$$15$$.$TableDataSource$.$EventType$.SYNC, $event$$183$$);
    });
    this.$_rowSet$.on($oj$$15$$.$RowSet$.$EventType$.ERROR, function($event$$184$$) {
      $self$$82$$.$isFetching$ = !1;
      $oj$$15$$.$TableDataSource$.$superclass$.handleEvent.call($self$$82$$, $oj$$15$$.$TableDataSource$.$EventType$.ERROR, $event$$184$$);
    });
  };
});
