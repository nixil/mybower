/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "knockout", "ojs/ojpagingcontrol", "ojs/ojknockout-model"], function($oj$$18$$, $$$$18$$, $ko$$3$$) {
  $oj$$18$$.$CollectionPagingDataSource$ = function $$oj$$18$$$$CollectionPagingDataSource$$($collection$$29$$) {
    this.$collection$ = $collection$$29$$;
    this.current = 0;
    this.Init();
    this.$dataWindow$ = [];
    this.setPageSize(10);
  };
  $goog$exportPath_$$("CollectionPagingDataSource", $oj$$18$$.$CollectionPagingDataSource$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$CollectionPagingDataSource$, $oj$$18$$.$PagingDataSource$, "oj.CollectionPagingDataSource");
  $oj$$18$$.$CollectionPagingDataSource$.prototype.Init = function $$oj$$18$$$$CollectionPagingDataSource$$$Init$() {
    $oj$$18$$.$CollectionPagingDataSource$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.Init", {Init:$oj$$18$$.$CollectionPagingDataSource$.prototype.Init});
  $oj$$18$$.$CollectionPagingDataSource$.prototype.$_getSize$ = function $$oj$$18$$$$CollectionPagingDataSource$$$$_getSize$$() {
    return this.hasMore() ? this.pageSize : this.totalSize() - this.startIndex();
  };
  $oj$$18$$.$CollectionPagingDataSource$.prototype.$_refreshDataWindow$ = function $$oj$$18$$$$CollectionPagingDataSource$$$$_refreshDataWindow$$() {
    this.$dataWindow$ = Array(this.$_getSize$());
    var $self$$84$$ = this;
    return this.$collection$.$IterativeAt$(this.startIndex(), this.startIndex() + this.$dataWindow$.length).then(function($array$$13$$) {
      for (var $i$$220$$ = 0;$i$$220$$ < $array$$13$$.length;$i$$220$$++) {
        $self$$84$$.$dataWindow$[$i$$220$$] = $array$$13$$[$i$$220$$];
      }
      $self$$84$$.$_refreshObservableDataWindow$();
    });
  };
  $oj$$18$$.$CollectionPagingDataSource$.prototype.$_refreshObservableDataWindow$ = function $$oj$$18$$$$CollectionPagingDataSource$$$$_refreshObservableDataWindow$$() {
    if (void 0 !== this.$observableDataWindow$) {
      this.$observableDataWindow$.removeAll();
      for (var $i$$221$$ = 0;$i$$221$$ < this.$dataWindow$.length;$i$$221$$++) {
        this.$observableDataWindow$.push($oj$$18$$.$KnockoutUtils$.map(this.$dataWindow$[$i$$221$$]));
      }
    }
  };
  $oj$$18$$.$CollectionPagingDataSource$.prototype.$getWindow$ = function $$oj$$18$$$$CollectionPagingDataSource$$$$getWindow$$() {
    return this.$dataWindow$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getWindow", {$getWindow$:$oj$$18$$.$CollectionPagingDataSource$.prototype.$getWindow$});
  $oj$$18$$.$CollectionPagingDataSource$.prototype.$getWindowObservable$ = function $$oj$$18$$$$CollectionPagingDataSource$$$$getWindowObservable$$() {
    void 0 === this.$observableDataWindow$ && (this.$observableDataWindow$ = $ko$$3$$.observableArray(), this.$_refreshObservableDataWindow$());
    return this.$observableDataWindow$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.getWindowObservable", {$getWindowObservable$:$oj$$18$$.$CollectionPagingDataSource$.prototype.$getWindowObservable$});
  $oj$$18$$.$CollectionPagingDataSource$.prototype.fetch = function $$oj$$18$$$$CollectionPagingDataSource$$$fetch$($options$$285$$) {
    var $opts$$19$$ = $options$$285$$ || {};
    void 0 !== $opts$$19$$.startIndex && (this.current = $opts$$19$$.startIndex);
    void 0 !== $opts$$19$$.pageSize && (this.pageSize = $opts$$19$$.pageSize);
    var $self$$85$$ = this;
    try {
      this.$collection$.fetch({success:function() {
        $self$$85$$.$_refreshDataWindow$().then(function() {
          $self$$85$$.$_processSuccess$($opts$$19$$);
        });
      }});
    } catch ($e$$77$$) {
      $self$$85$$.$_refreshDataWindow$().then(function() {
        $self$$85$$.$_processSuccess$($opts$$19$$);
      });
    }
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.fetch", {fetch:$oj$$18$$.$CollectionPagingDataSource$.prototype.fetch});
  $oj$$18$$.$CollectionPagingDataSource$.prototype.$_processSuccess$ = function $$oj$$18$$$$CollectionPagingDataSource$$$$_processSuccess$$($options$$286_opts$$20$$) {
    $options$$286_opts$$20$$ = $options$$286_opts$$20$$ || {};
    this.handleEvent("sync", null);
    $options$$286_opts$$20$$.success && $options$$286_opts$$20$$.success();
  };
  $oj$$18$$.$CollectionPagingDataSource$.prototype.handleEvent = function $$oj$$18$$$$CollectionPagingDataSource$$$handleEvent$($eventType$$38$$, $event$$187$$) {
    $oj$$18$$.$CollectionPagingDataSource$.$superclass$.handleEvent.call(this, $eventType$$38$$, $event$$187$$);
  };
  $oj$$18$$.$CollectionPagingDataSource$.prototype.hasMore = function $$oj$$18$$$$CollectionPagingDataSource$$$hasMore$() {
    return this.startIndex() + this.pageSize < this.totalSize();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.hasMore", {hasMore:$oj$$18$$.$CollectionPagingDataSource$.prototype.hasMore});
  $oj$$18$$.$CollectionPagingDataSource$.prototype.next = function $$oj$$18$$$$CollectionPagingDataSource$$$next$() {
    if (this.hasMore()) {
      this.current += this.pageSize;
      var $self$$86$$ = this;
      return this.$_refreshDataWindow$().then(function() {
        $self$$86$$.$_processSuccess$(null);
      });
    }
    this.$_processSuccess$(null);
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.next", {next:$oj$$18$$.$CollectionPagingDataSource$.prototype.next});
  $oj$$18$$.$CollectionPagingDataSource$.prototype.previous = function $$oj$$18$$$$CollectionPagingDataSource$$$previous$() {
    0 > this.startIndex() - this.pageSize ? this.current = 0 : this.current -= this.pageSize;
    var $self$$87$$ = this;
    return this.$_refreshDataWindow$().then(function() {
      $self$$87$$.$_processSuccess$(null);
    });
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.previous", {previous:$oj$$18$$.$CollectionPagingDataSource$.prototype.previous});
  $oj$$18$$.$CollectionPagingDataSource$.prototype.setPageSize = function $$oj$$18$$$$CollectionPagingDataSource$$$setPageSize$($n$$22$$) {
    this.pageSize = $n$$22$$;
  };
  $oj$$18$$.$CollectionPagingDataSource$.prototype.startIndex = function $$oj$$18$$$$CollectionPagingDataSource$$$startIndex$() {
    return this.current;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.startIndex", {startIndex:$oj$$18$$.$CollectionPagingDataSource$.prototype.startIndex});
  $oj$$18$$.$CollectionPagingDataSource$.prototype.size = function $$oj$$18$$$$CollectionPagingDataSource$$$size$() {
    var $w$$5$$ = this.$getWindow$();
    return $w$$5$$ ? $w$$5$$.length : 0;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.size", {size:$oj$$18$$.$CollectionPagingDataSource$.prototype.size});
  $oj$$18$$.$CollectionPagingDataSource$.prototype.totalSize = function $$oj$$18$$$$CollectionPagingDataSource$$$totalSize$() {
    return this.$collection$.length;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("CollectionPagingDataSource.prototype.totalSize", {totalSize:$oj$$18$$.$CollectionPagingDataSource$.prototype.totalSize});
  $oj$$18$$.$ArrayPagingDataSource$ = function $$oj$$18$$$$ArrayPagingDataSource$$($data$$125$$) {
    this.data = $data$$125$$;
    this.current = 0;
    this.Init();
    this.setPageSize(10);
  };
  $goog$exportPath_$$("ArrayPagingDataSource", $oj$$18$$.$ArrayPagingDataSource$, $oj$$18$$);
  $oj$$18$$.$Object$.$createSubclass$($oj$$18$$.$ArrayPagingDataSource$, $oj$$18$$.$PagingDataSource$, "oj.ArrayPagingDataSource");
  $oj$$18$$.$ArrayPagingDataSource$.prototype.Init = function $$oj$$18$$$$ArrayPagingDataSource$$$Init$() {
    $oj$$18$$.$ArrayPagingDataSource$.$superclass$.Init.call(this);
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.Init", {Init:$oj$$18$$.$ArrayPagingDataSource$.prototype.Init});
  $oj$$18$$.$ArrayPagingDataSource$.prototype.$_getSize$ = function $$oj$$18$$$$ArrayPagingDataSource$$$$_getSize$$() {
    return this.hasMore() ? this.pageSize : this.totalSize() - this.startIndex();
  };
  $oj$$18$$.$ArrayPagingDataSource$.prototype.$_refreshDataWindow$ = function $$oj$$18$$$$ArrayPagingDataSource$$$$_refreshDataWindow$$() {
    this.$dataWindow$ = Array(this.$_getSize$());
    for (var $i$$222$$ = 0;$i$$222$$ < this.$dataWindow$.length;$i$$222$$++) {
      this.$dataWindow$[$i$$222$$] = this.data[this.startIndex() + $i$$222$$];
    }
    this.$_refreshObservableDataWindow$();
    this.handleEvent("sync", null);
  };
  $oj$$18$$.$ArrayPagingDataSource$.prototype.$_refreshObservableDataWindow$ = function $$oj$$18$$$$ArrayPagingDataSource$$$$_refreshObservableDataWindow$$() {
    if (void 0 !== this.$observableDataWindow$) {
      this.$observableDataWindow$.removeAll();
      for (var $i$$223$$ = 0;$i$$223$$ < this.$dataWindow$.length;$i$$223$$++) {
        this.$observableDataWindow$.push(this.$dataWindow$[$i$$223$$]);
      }
    }
  };
  $oj$$18$$.$ArrayPagingDataSource$.prototype.handleEvent = function $$oj$$18$$$$ArrayPagingDataSource$$$handleEvent$($eventType$$39$$, $event$$188$$) {
    $oj$$18$$.$ArrayPagingDataSource$.$superclass$.handleEvent.call(this, $eventType$$39$$, $event$$188$$);
  };
  $oj$$18$$.$ArrayPagingDataSource$.prototype.$getWindow$ = function $$oj$$18$$$$ArrayPagingDataSource$$$$getWindow$$() {
    return this.$dataWindow$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getWindow", {$getWindow$:$oj$$18$$.$ArrayPagingDataSource$.prototype.$getWindow$});
  $oj$$18$$.$ArrayPagingDataSource$.prototype.$getWindowObservable$ = function $$oj$$18$$$$ArrayPagingDataSource$$$$getWindowObservable$$() {
    void 0 === this.$observableDataWindow$ && (this.$observableDataWindow$ = $ko$$3$$.observableArray(), this.$_refreshObservableDataWindow$());
    return this.$observableDataWindow$;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.getWindowObservable", {$getWindowObservable$:$oj$$18$$.$ArrayPagingDataSource$.prototype.$getWindowObservable$});
  $oj$$18$$.$ArrayPagingDataSource$.prototype.fetch = function $$oj$$18$$$$ArrayPagingDataSource$$$fetch$($options$$287_opts$$21$$) {
    $options$$287_opts$$21$$ = $options$$287_opts$$21$$ || {};
    void 0 !== $options$$287_opts$$21$$.startIndex && (this.current = $options$$287_opts$$21$$.startIndex);
    void 0 !== $options$$287_opts$$21$$.pageSize && (this.pageSize = $options$$287_opts$$21$$.pageSize);
    this.$_refreshDataWindow$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.fetch", {fetch:$oj$$18$$.$ArrayPagingDataSource$.prototype.fetch});
  $oj$$18$$.$ArrayPagingDataSource$.prototype.hasMore = function $$oj$$18$$$$ArrayPagingDataSource$$$hasMore$() {
    return this.startIndex() + this.pageSize < this.totalSize();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.hasMore", {hasMore:$oj$$18$$.$ArrayPagingDataSource$.prototype.hasMore});
  $oj$$18$$.$ArrayPagingDataSource$.prototype.next = function $$oj$$18$$$$ArrayPagingDataSource$$$next$() {
    this.hasMore() && (this.current += this.pageSize, this.$_refreshDataWindow$());
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.next", {next:$oj$$18$$.$ArrayPagingDataSource$.prototype.next});
  $oj$$18$$.$ArrayPagingDataSource$.prototype.previous = function $$oj$$18$$$$ArrayPagingDataSource$$$previous$() {
    0 > this.startIndex() - this.pageSize ? this.current = 0 : this.current -= this.pageSize;
    this.$_refreshDataWindow$();
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.previous", {previous:$oj$$18$$.$ArrayPagingDataSource$.prototype.previous});
  $oj$$18$$.$ArrayPagingDataSource$.prototype.setPageSize = function $$oj$$18$$$$ArrayPagingDataSource$$$setPageSize$($n$$23$$) {
    this.pageSize = $n$$23$$;
    this.$_refreshDataWindow$();
  };
  $oj$$18$$.$ArrayPagingDataSource$.prototype.startIndex = function $$oj$$18$$$$ArrayPagingDataSource$$$startIndex$() {
    return this.current;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.startIndex", {startIndex:$oj$$18$$.$ArrayPagingDataSource$.prototype.startIndex});
  $oj$$18$$.$ArrayPagingDataSource$.prototype.size = function $$oj$$18$$$$ArrayPagingDataSource$$$size$() {
    return this.$getWindow$().length;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.size", {size:$oj$$18$$.$ArrayPagingDataSource$.prototype.size});
  $oj$$18$$.$ArrayPagingDataSource$.prototype.totalSize = function $$oj$$18$$$$ArrayPagingDataSource$$$totalSize$() {
    return this.data.length;
  };
  $oj$$18$$.$Object$.$exportPrototypeSymbol$("ArrayPagingDataSource.prototype.totalSize", {totalSize:$oj$$18$$.$ArrayPagingDataSource$.prototype.totalSize});
});
