define(["ojs/ojcore", "jquery", "ojs/ojdatacollection-common", "ojs/ojmodel"], function($oj$$30$$, $$$$30$$) {
  $oj$$30$$.$CollectionTreeDataSource$ = function $$oj$$30$$$$CollectionTreeDataSource$$($options$$295$$) {
    $options$$295$$ = $options$$295$$ || {};
    this.$rootCollection$ = $options$$295$$.root;
    this.$childCollectionCallback$ = $options$$295$$.childCollectionCallback;
    this.$parseMetadata$ = $options$$295$$.parseMetadata;
    this.$sortkey$ = null;
    this.$sortdir$ = "none";
    this.$cache$ = {};
    $oj$$30$$.$CollectionTreeDataSource$.$superclass$.constructor.call(this);
  };
  $goog$exportPath_$$("CollectionTreeDataSource", $oj$$30$$.$CollectionTreeDataSource$, $oj$$30$$);
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$parseMetadata$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$parseMetadata$$($model$$53$$) {
    return{key:$model$$53$$.idAttribute + "\x3d" + $model$$53$$.id};
  };
  $oj$$30$$.$Object$.$createSubclass$($oj$$30$$.$CollectionTreeDataSource$, $oj$$30$$.$TreeDataSource$, "oj.CollectionTreeDataSource");
  $oj$$30$$.$CollectionTreeDataSource$.prototype.Init = function $$oj$$30$$$$CollectionTreeDataSource$$$Init$() {
    $oj$$30$$.$CollectionTreeDataSource$.$superclass$.Init.call(this);
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.Init", {Init:$oj$$30$$.$CollectionTreeDataSource$.prototype.Init});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$getChildCount$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$getChildCount$$($parent$$30$$) {
    var $childColl$$ = this.$cache$[$parent$$30$$];
    if ($childColl$$ && 0 < $childColl$$.length) {
      return $childColl$$.length;
    }
    this.$getChildCollection$($parent$$30$$, {success:function($coll$$3$$) {
      return $coll$$3$$.length;
    }});
    return-1;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCount", {$getChildCount$:$oj$$30$$.$CollectionTreeDataSource$.prototype.$getChildCount$});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$getChildCollection$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$getChildCollection$$($key$$92$$, $callbacks$$37$$) {
    this.$fetchChildren$($key$$92$$, null, {success:function($nodeSet$$33$$) {
      $callbacks$$37$$.success($nodeSet$$33$$.$collection$);
    }, error:$callbacks$$37$$.error});
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getChildCollection", {$getChildCollection$:$oj$$30$$.$CollectionTreeDataSource$.prototype.$getChildCollection$});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$fetchChildren$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$fetchChildren$$($parent$$31$$, $range$$23$$, $callbacks$$38$$) {
    $range$$23$$ = $range$$23$$ || {};
    var $start$$30$$ = $range$$23$$.start ? $range$$23$$.start : 0, $count$$32$$ = $range$$23$$.count ? $range$$23$$.count : -1;
    if (null === $parent$$31$$) {
      this.$FetchCollection$(null, $start$$30$$, $count$$32$$, $callbacks$$38$$, null);
    } else {
      var $self$$104$$ = this;
      this.$_getModelForId$(this.$rootCollection$, $parent$$31$$, 0).done(function($collection$$30_parentModel$$) {
        $collection$$30_parentModel$$ ? ($collection$$30_parentModel$$ = $self$$104$$.$GetChildCollection$($collection$$30_parentModel$$.$model$), $self$$104$$.$FetchCollection$($collection$$30_parentModel$$, $start$$30$$, $count$$32$$, $callbacks$$38$$, $parent$$31$$)) : $callbacks$$38$$ && $callbacks$$38$$.error && $callbacks$$38$$.error($parent$$31$$);
      });
    }
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchChildren", {$fetchChildren$:$oj$$30$$.$CollectionTreeDataSource$.prototype.$fetchChildren$});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$ModelAdded$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$ModelAdded$$($event$$330_model$$54$$, $collection$$31$$, $options$$297$$) {
    var $index$$174$$ = 0;
    $options$$297$$ && $options$$297$$.at && ($index$$174$$ = $options$$297$$.at);
    $event$$330_model$$54$$ = this.$_createEvent$(this, "insert", $index$$174$$, this.$_getParentChain$($collection$$31$$), this.$_putModelInRowset$($event$$330_model$$54$$));
    this.handleEvent("insert", $event$$330_model$$54$$);
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$ModelRemoved$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$ModelRemoved$$($event$$331_model$$55$$, $collection$$32$$, $options$$298$$) {
    var $index$$175$$ = 0;
    $options$$298$$ && $options$$298$$.index && ($index$$175$$ = $options$$298$$.index);
    this.$_removeCollectionFromCache$($event$$331_model$$55$$);
    $event$$331_model$$55$$ = this.$_createEvent$(this, "delete", $index$$175$$, this.$_getParentChain$($collection$$32$$), null);
    this.handleEvent("delete", $event$$331_model$$55$$);
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$ModelUpdated$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$ModelUpdated$$($event$$332_model$$56$$) {
    var $collectionForModel$$ = this.$_getCollectionForModel$($event$$332_model$$56$$), $index$$176$$ = null, $parents$$3$$ = null;
    $collectionForModel$$ && ($index$$176$$ = $collectionForModel$$.index, $parents$$3$$ = this.$_getParentChain$($collectionForModel$$.$collection$));
    $event$$332_model$$56$$ = this.$_createEvent$(this, "update", $index$$176$$, $parents$$3$$, this.$_putModelInRowset$($event$$332_model$$56$$));
    this.handleEvent("update", $event$$332_model$$56$$);
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$CollectionRefreshed$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$CollectionRefreshed$$($collection$$33_event$$333$$) {
    $collection$$33_event$$333$$ = this.$_createEvent$(this, "refresh", null, this.$_getParentChain$($collection$$33_event$$333$$), null);
    this.handleEvent("refresh", $collection$$33_event$$333$$);
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_putModelInRowset$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_putModelInRowset$$($model$$57_rowset$$) {
    var $rows$$11$$ = [];
    $rows$$11$$.push($model$$57_rowset$$.attributes);
    var $options$$301$$ = {};
    $options$$301$$.idAttribute = $model$$57_rowset$$.idAttribute;
    $model$$57_rowset$$ = new $oj$$30$$.$ArrayRowSet$($rows$$11$$, $options$$301$$);
    $model$$57_rowset$$.fetch();
    return $model$$57_rowset$$;
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_getParentChain$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_getParentChain$$($coll$$4_collection$$34$$) {
    var $parents$$4$$ = [], $parent$$32$$ = null;
    do {
      $parent$$32$$ = this.$_getParentOfCollection$($coll$$4_collection$$34$$), null !== $parent$$32$$ && ($parent$$32$$ !== $oj$$30$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ && $parents$$4$$.unshift($parent$$32$$), $coll$$4_collection$$34$$ = this.$_getCollectionOfKey$($parent$$32$$));
    } while (null != $parent$$32$$);
    return $parents$$4$$;
  };
  $oj$$30$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$ = "%!@ROOT%#@!";
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_getCacheKey$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_getCacheKey$$($model$$58$$) {
    var $key$$93$$ = $model$$58$$ instanceof $oj$$30$$.$Model$ ? this.$parseMetadata$($model$$58$$).key : $model$$58$$;
    return $model$$58$$ ? $key$$93$$ : $oj$$30$$.$CollectionTreeDataSource$.$ROOT_CACHE_KEY$;
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$__getParentsChildCollectionFromCache$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$__getParentsChildCollectionFromCache$$($model$$59$$) {
    return this.$cache$[this.$_getCacheKey$($model$$59$$)];
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_setCollectionInCache$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_setCollectionInCache$$($model$$60$$, $collection$$35$$) {
    $collection$$35$$.on($oj$$30$$.$Events$.$EventType$.ADD, this.$ModelAdded$, this);
    $collection$$35$$.on($oj$$30$$.$Events$.$EventType$.REMOVE, this.$ModelRemoved$, this);
    $collection$$35$$.on($oj$$30$$.$Events$.$EventType$.CHANGE, this.$ModelUpdated$, this);
    $collection$$35$$.on($oj$$30$$.$Events$.$EventType$.SYNC, this.$CollectionRefreshed$, this);
    this.$cache$[this.$_getCacheKey$($model$$60$$)] = $collection$$35$$;
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_removeCollectionFromCache$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_removeCollectionFromCache$$($key$$94_model$$61$$) {
    $key$$94_model$$61$$ = this.$_getCacheKey$($key$$94_model$$61$$);
    for (var $prop$$75$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$75$$) && $prop$$75$$ === $key$$94_model$$61$$) {
        this.$cache$[$key$$94_model$$61$$].off(null, null, this);
        delete this.$cache$[$key$$94_model$$61$$];
        break;
      }
    }
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_keyInCollection$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_keyInCollection$$($key$$95$$, $collection$$36$$) {
    for (var $count$$33$$ = $collection$$36$$.length, $i$$273$$ = 0;$i$$273$$ < $count$$33$$;$i$$273$$++) {
      var $currKey$$1$$ = this.$_getCacheKey$($collection$$36$$.at($i$$273$$));
      if ($key$$95$$ === $currKey$$1$$) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_getCollectionForModel$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_getCollectionForModel$$($model$$62$$) {
    for (var $prop$$76$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$76$$)) {
        for (var $collection$$37$$ = this.$cache$[$prop$$76$$], $i$$274$$ = 0;$i$$274$$ < $collection$$37$$.length;$i$$274$$++) {
          if ($collection$$37$$.at($i$$274$$) === $model$$62$$) {
            return{index:$i$$274$$, $collection$:$collection$$37$$};
          }
        }
      }
    }
    return null;
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_getCollectionOfKey$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_getCollectionOfKey$$($key$$96$$) {
    for (var $prop$$77$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$77$$)) {
        var $collection$$38$$ = this.$cache$[$prop$$77$$];
        if (this.$_keyInCollection$($key$$96$$, $collection$$38$$)) {
          return $collection$$38$$;
        }
      }
    }
    return null;
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_getParentOfCollection$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_getParentOfCollection$$($collection$$39$$) {
    for (var $prop$$78$$ in this.$cache$) {
      if (this.$cache$.hasOwnProperty($prop$$78$$) && this.$cache$[$prop$$78$$] === $collection$$39$$) {
        return $prop$$78$$;
      }
    }
    return null;
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$GetChildCollection$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$GetChildCollection$$($parentModel$$1$$) {
    var $cached$$ = !0, $collection$$40$$ = this.$__getParentsChildCollectionFromCache$($parentModel$$1$$);
    $collection$$40$$ || ($cached$$ = !1, $collection$$40$$ = this.$childCollectionCallback$(this.$rootCollection$, $parentModel$$1$$), null != $collection$$40$$ && (this.$_applySortToCollection$($collection$$40$$), this.$_setCollectionInCache$($parentModel$$1$$, $collection$$40$$)));
    return{$collection$:$collection$$40$$, $cached$:$cached$$};
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_createEvent$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_createEvent$$($source$$11$$, $operation$$5$$, $index$$177$$, $parent$$33$$, $data$$157$$) {
    return{source:$source$$11$$, operation:$operation$$5$$, index:$index$$177$$, parent:$parent$$33$$, data:$data$$157$$};
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$FetchCollection$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$FetchCollection$$($collection$$41$$, $start$$31$$, $count$$34$$, $callbacks$$39$$, $parent$$34$$) {
    var $self$$105$$ = this;
    null === $collection$$41$$ && (($collection$$41$$ = this.$__getParentsChildCollectionFromCache$(null)) ? $collection$$41$$ = {$collection$:$collection$$41$$, $cached$:!0} : ($collection$$41$$ = {$collection$:$self$$105$$.$rootCollection$, $cached$:!1}, $self$$105$$.$_setCollectionInCache$(null, this.$rootCollection$)));
    $collection$$41$$ && $self$$105$$.$_fetch$($collection$$41$$, function($coll$$5$$) {
      $callbacks$$39$$.success && $callbacks$$39$$.success($self$$105$$.$_getNodeSet$($coll$$5$$, $parent$$34$$, $start$$31$$, $count$$34$$));
    }, $callbacks$$39$$.error);
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_getNodeSet$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_getNodeSet$$($collection$$42$$, $parent$$35$$, $start$$32$$, $count$$35$$) {
    return new $oj$$30$$.$CollectionNodeSet$($parent$$35$$, $collection$$42$$, this, $start$$32$$, $count$$35$$);
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_scanForKey$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_scanForKey$$($collection$$43$$, $key$$97$$) {
    function $checkNext$$($index$$178$$, $collection$$44$$, $key$$98$$) {
      $index$$178$$ < $collection$$44$$.length ? $collection$$44$$.at($index$$178$$, {deferred:!0}).done(function($model$$63$$) {
        if ($model$$63$$) {
          var $parse$$5$$ = $self$$106$$.$parseMetadata$($model$$63$$);
          if ($key$$98$$ === $parse$$5$$.key) {
            return $dfd$$3$$.resolve($model$$63$$), $dfd$$3$$;
          }
        }
        $index$$178$$++;
        $checkNext$$($index$$178$$, $collection$$44$$, $key$$98$$);
      }) : $dfd$$3$$.resolve(null);
    }
    var $dfd$$3$$ = $$$$30$$.Deferred(), $self$$106$$ = this;
    $checkNext$$(0, $collection$$43$$, $key$$97$$);
    return $dfd$$3$$;
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_getModelForId$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_getModelForId$$($collection$$45$$, $key$$99$$, $depth$$19$$) {
    var $dfd$$4$$ = $$$$30$$.Deferred(), $self$$107$$ = this;
    this.$_scanForKey$($collection$$45$$, $key$$99$$).done(function($model$$64$$) {
      function $getNextCollection$$($index$$179$$, $tds$$) {
        if ($index$$179$$ < $max$$7$$) {
          var $childColl$$1$$ = $tds$$.$GetChildCollection$($collection$$45$$.at($index$$179$$));
          $childColl$$1$$.$collection$ ? $tds$$.$_fetch$($childColl$$1$$, function($fetchColl$$) {
            $tds$$.$_getModelForId$($fetchColl$$, $key$$99$$, $depth$$19$$ + 1).done(function($childModel$$) {
              $childModel$$ ? $dfd$$4$$.resolve($childModel$$) : ($index$$179$$++, $getNextCollection$$($index$$179$$, $tds$$));
            });
          }, null) : ($index$$179$$++, $getNextCollection$$($index$$179$$, $tds$$));
        } else {
          $dfd$$4$$.resolve(null);
        }
      }
      if ($model$$64$$) {
        return $dfd$$4$$.resolve({$model$:$model$$64$$, depth:$depth$$19$$}), $dfd$$4$$;
      }
      var $max$$7$$ = $collection$$45$$.length;
      $getNextCollection$$(0, $self$$107$$);
    });
    return $dfd$$4$$.promise();
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_fetch$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_fetch$$($collectionCacheObj$$, $success$$15$$, $error$$18$$) {
    $collectionCacheObj$$.$cached$ ? $success$$15$$($collectionCacheObj$$.$collection$) : (this.$sortkey$ && "none" !== this.$sortkey$ && ($collectionCacheObj$$.$collection$.$comparator$ = this.$sortkey$, $collectionCacheObj$$.$collection$.$sortDirection$ = this.$sortdir$), 0 < $collectionCacheObj$$.$collection$.length ? $success$$15$$($collectionCacheObj$$.$collection$) : $collectionCacheObj$$.$collection$.fetch({success:function($fetchColl$$1$$) {
      $success$$15$$($fetchColl$$1$$);
    }, error:$error$$18$$}));
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$fetchDescendants$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$fetchDescendants$$($parent$$36$$, $callbacks$$40$$) {
    var $self$$108$$ = this;
    null === $parent$$36$$ ? this.$FetchCollection$(null, 0, -1, {success:function($nodeSet$$34$$) {
      $nodeSet$$34$$.$FetchDescendants$({success:function() {
        $callbacks$$40$$.success && $callbacks$$40$$.success($nodeSet$$34$$);
      }});
    }}, null) : this.$_getModelForId$(this.$rootCollection$, $parent$$36$$, 0).done(function($collection$$46_parentModel$$2$$) {
      $collection$$46_parentModel$$2$$ && ($collection$$46_parentModel$$2$$ = $self$$108$$.$GetChildCollection$($collection$$46_parentModel$$2$$.$model$), $self$$108$$.$FetchCollection$($collection$$46_parentModel$$2$$, 0, -1, {success:function($nodeSet$$35$$) {
        $nodeSet$$35$$.$FetchDescendants$({success:function() {
          $callbacks$$40$$.success && $callbacks$$40$$.success($nodeSet$$35$$);
        }});
      }}, $parent$$36$$));
    });
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.fetchDescendants", {$fetchDescendants$:$oj$$30$$.$CollectionTreeDataSource$.prototype.$fetchDescendants$});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.sort = function $$oj$$30$$$$CollectionTreeDataSource$$$sort$($criteria$$13$$, $callbacks$$41$$) {
    var $key$$100$$ = $criteria$$13$$.key, $dir$$1$$ = $criteria$$13$$.direction, $needSort$$2$$ = !1;
    $key$$100$$ !== this.$sortkey$ && (this.$sortkey$ = $key$$100$$, $needSort$$2$$ = !0);
    $dir$$1$$ !== this.$sortdir$ && (this.$sortdir$ = $dir$$1$$, $needSort$$2$$ = !0);
    if ($needSort$$2$$) {
      "none" === this.$sortdir$ && (this.$cache$ = {});
      for (var $prop$$79$$ in this.$cache$) {
        this.$cache$.hasOwnProperty($prop$$79$$) && this.$_applySortToCollection$(this.$cache$[$prop$$79$$]);
      }
    }
    $callbacks$$41$$ && $callbacks$$41$$.success && $callbacks$$41$$.success();
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.sort", {sort:$oj$$30$$.$CollectionTreeDataSource$.prototype.sort});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$_applySortToCollection$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$_applySortToCollection$$($collection$$48$$) {
    $collection$$48$$.comparator = this.$sortkey$;
    $collection$$48$$.sortDirection = "ascending" === this.$sortdir$ ? 1 : -1;
    $collection$$48$$.sort();
  };
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$getSortCriteria$$() {
    return{key:this.$sortkey$, direction:this.$sortdir$};
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getSortCriteria", {$getSortCriteria$:$oj$$30$$.$CollectionTreeDataSource$.prototype.$getSortCriteria$});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.move = function $$oj$$30$$$$CollectionTreeDataSource$$$move$() {
    $oj$$30$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.move", {move:$oj$$30$$.$CollectionTreeDataSource$.prototype.move});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.$moveOK$ = function $$oj$$30$$$$CollectionTreeDataSource$$$$moveOK$$() {
    return "invalid";
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.moveOK", {$moveOK$:$oj$$30$$.$CollectionTreeDataSource$.prototype.$moveOK$});
  $oj$$30$$.$CollectionTreeDataSource$.prototype.getCapability = function $$oj$$30$$$$CollectionTreeDataSource$$$getCapability$($feature$$15$$) {
    return "sort" === $feature$$15$$ ? "default" : "move" === $feature$$15$$ ? "none" : "batchFetch" === $feature$$15$$ || "fetchDescendants" === $feature$$15$$ ? "disable" : null;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionTreeDataSource.prototype.getCapability", {getCapability:$oj$$30$$.$CollectionTreeDataSource$.prototype.getCapability});
  $oj$$30$$.$CollectionNodeSet$ = function $$oj$$30$$$$CollectionNodeSet$$($parentKey$$11$$, $collection$$49$$, $treeDataSource$$2$$, $start$$33$$, $count$$36$$) {
    this.$parentKey$ = $parentKey$$11$$;
    this.$collection$ = $collection$$49$$;
    this.$childNodeSet$ = [];
    this.$treeDataSource$ = $treeDataSource$$2$$;
    this.start = $start$$33$$ < $collection$$49$$.length ? $start$$33$$ : $collection$$49$$.length - 1;
    this.count = -1 === $count$$36$$ ? $collection$$49$$.length : Math.min($collection$$49$$.length, $count$$36$$);
  };
  $goog$exportPath_$$("CollectionNodeSet", $oj$$30$$.$CollectionNodeSet$, $oj$$30$$);
  $oj$$30$$.$CollectionNodeSet$.prototype.$FetchDescendants$ = function $$oj$$30$$$$CollectionNodeSet$$$$FetchDescendants$$($callbacks$$43$$) {
    this.$_fetchDescendants$(this).done(function() {
      $callbacks$$43$$.success && $callbacks$$43$$.success();
    });
  };
  $oj$$30$$.$CollectionNodeSet$.prototype.$_fetchDescendants$ = function $$oj$$30$$$$CollectionNodeSet$$$$_fetchDescendants$$($nodeSet$$36$$) {
    function $nextNode$$($index$$180$$) {
      $index$$180$$ < $count$$37$$ ? $nodeSet$$36$$.$FetchChildNodeSet$($index$$180$$, {success:function($childNodeSet$$1$$) {
        null !== $childNodeSet$$1$$ ? $nodeSet$$36$$.$_fetchDescendants$($childNodeSet$$1$$).done(function() {
          $nextNode$$($index$$180$$ + 1);
        }) : $nextNode$$($index$$180$$ + 1);
      }}) : $dfd$$5$$.resolve();
    }
    var $dfd$$5$$ = $$$$30$$.Deferred(), $count$$37$$ = $nodeSet$$36$$.$getCount$();
    $nextNode$$(0);
    return $dfd$$5$$.promise();
  };
  $oj$$30$$.$CollectionNodeSet$.prototype.$FetchChildNodeSet$ = function $$oj$$30$$$$CollectionNodeSet$$$$FetchChildNodeSet$$($index$$181$$, $callbacks$$44$$) {
    var $model$$65_parentKey$$12$$ = this.$collection$.at($index$$181$$);
    if (this.$treeDataSource$.$parseMetadata$($model$$65_parentKey$$12$$).leaf) {
      this.$childNodeSet$[$index$$181$$] = null, $callbacks$$44$$.success(null);
    } else {
      var $collection$$50$$ = this.$treeDataSource$.$GetChildCollection$($model$$65_parentKey$$12$$), $model$$65_parentKey$$12$$ = this.$treeDataSource$.$parseMetadata$($model$$65_parentKey$$12$$).key, $self$$109$$ = this;
      this.$treeDataSource$.$FetchCollection$($collection$$50$$, 0, -1, {success:function($nodeSet$$37$$) {
        $self$$109$$.$childNodeSet$[$index$$181$$] = $nodeSet$$37$$;
        $callbacks$$44$$.success($nodeSet$$37$$);
      }}, $model$$65_parentKey$$12$$);
    }
  };
  $oj$$30$$.$CollectionNodeSet$.prototype.getParent = function $$oj$$30$$$$CollectionNodeSet$$$getParent$() {
    return this.$parentKey$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getParent", {getParent:$oj$$30$$.$CollectionNodeSet$.prototype.getParent});
  $oj$$30$$.$CollectionNodeSet$.prototype.$getStart$ = function $$oj$$30$$$$CollectionNodeSet$$$$getStart$$() {
    return this.start;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getStart", {$getStart$:$oj$$30$$.$CollectionNodeSet$.prototype.$getStart$});
  $oj$$30$$.$CollectionNodeSet$.prototype.$getCount$ = function $$oj$$30$$$$CollectionNodeSet$$$$getCount$$() {
    return this.count;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getCount", {$getCount$:$oj$$30$$.$CollectionNodeSet$.prototype.$getCount$});
  $oj$$30$$.$CollectionNodeSet$.prototype.getData = function $$oj$$30$$$$CollectionNodeSet$$$getData$($index$$182$$) {
    this.$_checkRange$($index$$182$$);
    return this.$collection$.at($index$$182$$).attributes;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getData", {getData:$oj$$30$$.$CollectionNodeSet$.prototype.getData});
  $oj$$30$$.$CollectionNodeSet$.prototype.$_checkRange$ = function $$oj$$30$$$$CollectionNodeSet$$$$_checkRange$$($index$$183$$) {
    if ($index$$183$$ < this.start || $index$$183$$ > this.start + this.count) {
      throw "Out of range";
    }
  };
  $oj$$30$$.$CollectionNodeSet$.prototype.getMetadata = function $$oj$$30$$$$CollectionNodeSet$$$getMetadata$($index$$184_model$$66_parse$$7$$) {
    this.$_checkRange$($index$$184_model$$66_parse$$7$$);
    var $metadata$$11$$ = {};
    $index$$184_model$$66_parse$$7$$ = this.$collection$.at($index$$184_model$$66_parse$$7$$);
    $index$$184_model$$66_parse$$7$$ = this.$treeDataSource$.$parseMetadata$($index$$184_model$$66_parse$$7$$);
    $metadata$$11$$.key = $index$$184_model$$66_parse$$7$$.key;
    $metadata$$11$$.leaf = $index$$184_model$$66_parse$$7$$.leaf;
    $metadata$$11$$.depth = $index$$184_model$$66_parse$$7$$.depth;
    return $metadata$$11$$;
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getMetadata", {getMetadata:$oj$$30$$.$CollectionNodeSet$.prototype.getMetadata});
  $oj$$30$$.$CollectionNodeSet$.prototype.$getChildNodeSet$ = function $$oj$$30$$$$CollectionNodeSet$$$$getChildNodeSet$$($index$$185$$) {
    this.$_checkRange$($index$$185$$);
    return this.$childNodeSet$[$index$$185$$];
  };
  $oj$$30$$.$Object$.$exportPrototypeSymbol$("CollectionNodeSet.prototype.getChildNodeSet", {$getChildNodeSet$:$oj$$30$$.$CollectionNodeSet$.prototype.$getChildNodeSet$});
});
