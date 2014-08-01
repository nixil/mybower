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
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdatacollection-common"], function($oj$$10$$, $$$$10$$) {
  $oj$$10$$.$PagingDataSource$ = function $$oj$$10$$$$PagingDataSource$$($dataSource$$) {
    this.$dataSource$ = $dataSource$$;
    this.Init();
  };
  $goog$exportPath_$$("PagingDataSource", $oj$$10$$.$PagingDataSource$, $oj$$10$$);
  $oj$$10$$.$Object$.$createSubclass$($oj$$10$$.$PagingDataSource$, $oj$$10$$.$DataSource$, "oj.PagingDataSource");
  $oj$$10$$.$PagingDataSource$.prototype.Init = function $$oj$$10$$$$PagingDataSource$$$Init$() {
    $oj$$10$$.$PagingDataSource$.$superclass$.Init.call(this);
  };
  $oj$$10$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.Init", {Init:$oj$$10$$.$PagingDataSource$.prototype.Init});
  $oj$$10$$.$PagingDataSource$.prototype.fetch = function $$oj$$10$$$$PagingDataSource$$$fetch$() {
    $oj$$10$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$10$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.fetch", {fetch:$oj$$10$$.$PagingDataSource$.prototype.fetch});
  $oj$$10$$.$PagingDataSource$.prototype.hasMore = function $$oj$$10$$$$PagingDataSource$$$hasMore$() {
    $oj$$10$$.$Assert$.$failedInAbstractFunction$();
    return!1;
  };
  $oj$$10$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.hasMore", {hasMore:$oj$$10$$.$PagingDataSource$.prototype.hasMore});
  $oj$$10$$.$PagingDataSource$.prototype.next = function $$oj$$10$$$$PagingDataSource$$$next$() {
    $oj$$10$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$10$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.next", {next:$oj$$10$$.$PagingDataSource$.prototype.next});
  $oj$$10$$.$PagingDataSource$.prototype.previous = function $$oj$$10$$$$PagingDataSource$$$previous$() {
    $oj$$10$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$10$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.previous", {previous:$oj$$10$$.$PagingDataSource$.prototype.previous});
  $oj$$10$$.$PagingDataSource$.prototype.setPageSize = function $$oj$$10$$$$PagingDataSource$$$setPageSize$() {
    $oj$$10$$.$Assert$.$failedInAbstractFunction$();
  };
  $oj$$10$$.$PagingDataSource$.prototype.startIndex = function $$oj$$10$$$$PagingDataSource$$$startIndex$() {
    $oj$$10$$.$Assert$.$failedInAbstractFunction$();
    return 0;
  };
  $oj$$10$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.startIndex", {startIndex:$oj$$10$$.$PagingDataSource$.prototype.startIndex});
  $oj$$10$$.$PagingDataSource$.prototype.size = function $$oj$$10$$$$PagingDataSource$$$size$() {
    $oj$$10$$.$Assert$.$failedInAbstractFunction$();
    return 0;
  };
  $oj$$10$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.size", {size:$oj$$10$$.$PagingDataSource$.prototype.size});
  $oj$$10$$.$PagingDataSource$.prototype.totalSize = function $$oj$$10$$$$PagingDataSource$$$totalSize$() {
    $oj$$10$$.$Assert$.$failedInAbstractFunction$();
    return 0;
  };
  $oj$$10$$.$Object$.$exportPrototypeSymbol$("PagingDataSource.prototype.totalSize", {totalSize:$oj$$10$$.$PagingDataSource$.prototype.totalSize});
  $oj$$10$$.$PagingDataSource$.$EventType$ = {ADD:"add", REMOVE:"remove", RESET:"reset", SYNC:"sync", REFRESH:"refresh"};
  $goog$exportPath_$$("PagingDataSource.EventType", $oj$$10$$.$PagingDataSource$.$EventType$, $oj$$10$$);
  (function() {
    $oj$$10$$.$__registerWidget$("oj.ojPagingControl", $$$$10$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{data:null, pageSize:25, pageOptions:{layout:["auto"], maxPageLinks:6}, loadMoreOptions:{maxCount:500}, mode:"page"}, $_BUNDLE_KEY$:{$_LABEL_ACC_PAGING$:"labelAccPaging", $_LABEL_ACC_NAV_FIRST_PAGE$:"labelAccNavFirstPage", $_LABEL_ACC_NAV_LAST_PAGE$:"labelAccNavLastPage", $_LABEL_ACC_NAV_NEXT_PAGE$:"labelAccNavNextPage", $_LABEL_ACC_NAV_PREVIOUS_PAGE$:"labelAccNavPreviousPage", 
    $_LABEL_ACC_NAV_PAGE$:"labelAccNavPage", $_LABEL_LOAD_MORE$:"labelLoadMore", $_LABEL_NAV_INPUT_PAGE$:"labelNavInputPage", $_LABEL_NAV_INPUT_PAGE_MAX$:"labelNavInputPageMax", $_LABEL_NAV_INPUT_PAGE_SUMMARY$:"labelNavInputPageSummary", $_MSG_ITEM_RANGE$:"msgItemRange", $_MSG_ITEM_RANGE_UNKNOWN$:"msgItemRangeUnknown", $_TIP_NAV_INPUT_PAGE$:"tipNavInputPage", $_TIP_NAV_PAGE_LINK$:"tipNavPageLink", $_TIP_NAV_NEXT_PAGE$:"tipNavNextPage", $_TIP_NAV_PREVIOUS_PAGE$:"tipNavPreviousPage", $_TIP_NAV_FIRST_PAGE$:"tipNavFirstPage", 
    $_TIP_NAV_LAST_PAGE$:"tipNavLastPage", $_ERR_PAGE_INVALID_SUMMARY$:"pageInvalid.summary", $_ERR_PAGE_INVALID_DETAIL$:"pageInvalid.detail", $_ERR_DATA_INVALID_TYPE_SUMMARY$:"dataInvalidType.summary", $_ERR_DATA_INVALID_TYPE_DETAIL$:"dataInvalidType.detail", $_ERR_MAXPAGELINKS_INVALID_SUMMARY$:"maxPageLinksInvalid.summary", $_ERR_MAXPAGELINKS_INVALID_DETAIL$:"maxPageLinksInvalid.detail"}, $_MARKER_STYLE_CLASSES$:{$_WIDGET$:"oj-component", $_ACTIVE$:"oj-active", $_CLICKABLE_ICON$:"oj-clickable-icon", 
    $_DISABLED$:"oj-disabled", $_ENABLED$:"oj-enabled", $_FOCUS$:"oj-focus", $_HOVER$:"oj-hover", $_SELECTED$:"oj-selected"}, $_CSS_CLASSES$:{$_PAGING_CONTROL_CLASS$:"oj-pagingcontrol", $_PAGING_CONTROL_ACC_LABEL_CLASS$:"oj-pagingcontrol-acc-label", $_PAGING_CONTROL_CONTENT_CLASS$:"oj-pagingcontrol-content", $_PAGING_CONTROL_LOAD_MORE_CLASS$:"oj-pagingcontrol-loadmore", $_PAGING_CONTROL_LOAD_MORE_LINK_CLASS$:"oj-pagingcontrol-loadmore-link", $_PAGING_CONTROL_LOAD_MORE_RANGE_CLASS$:"oj-pagingcontrol-loadmore-range", 
    $_PAGING_CONTROL_NAV_CLASS$:"oj-pagingcontrol-nav", $_PAGING_CONTROL_NAV_ARROW_CLASS$:"oj-pagingcontrol-nav-arrow", $_PAGING_CONTROL_NAV_ARROW_SECTION_CLASS$:"oj-pagingcontrol-nav-arrow-section", $_PAGING_CONTROL_NAV_PAGE_CLASS$:"oj-pagingcontrol-nav-page", $_PAGING_CONTROL_NAV_PAGE_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-page-acc-label", $_PAGING_CONTROL_NAV_LABEL_CLASS$:"oj-pagingcontrol-nav-label", $_PAGING_CONTROL_NAV_INPUT_SECTION_CLASS$:"oj-pagingcontrol-nav-input-section", $_PAGING_CONTROL_NAV_INPUT_CLASS$:"oj-pagingcontrol-nav-input", 
    $_PAGING_CONTROL_NAV_INPUT_MAX_CLASS$:"oj-pagingcontrol-nav-input-max", $_PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS$:"oj-pagingcontrol-nav-input-summary", $_PAGING_CONTROL_NAV_PAGES_SECTION_CLASS$:"oj-pagingcontrol-nav-pages-section", $_PAGING_CONTROL_NAV_PAGES_LINKS_CLASS$:"oj-pagingcontrol-nav-pages-links", $_PAGING_CONTROL_NAV_FIRST_CLASS$:"oj-pagingcontrol-nav-first", $_PAGING_CONTROL_NAV_FIRST_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-first-acc-label", $_PAGING_CONTROL_NAV_PREVIOUS_CLASS$:"oj-pagingcontrol-nav-previous", 
    $_PAGING_CONTROL_NAV_PREVIOUS_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-previous-acc-label", $_PAGING_CONTROL_NAV_NEXT_CLASS$:"oj-pagingcontrol-nav-next", $_PAGING_CONTROL_NAV_NEXT_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-next-acc-label", $_PAGING_CONTROL_NAV_LAST_CLASS$:"oj-pagingcontrol-nav-last", $_PAGING_CONTROL_NAV_LAST_ACC_LABEL_CLASS$:"oj-pagingcontrol-nav-last-acc-label", $_PAGING_CONTROL_NAV_FIRST_ICON_CLASS$:"oj-pagingcontrol-nav-first-icon", $_PAGING_CONTROL_NAV_PREVIOUS_ICON_CLASS$:"oj-pagingcontrol-nav-previous-icon", 
    $_PAGING_CONTROL_NAV_NEXT_ICON_CLASS$:"oj-pagingcontrol-nav-next-icon", $_PAGING_CONTROL_NAV_LAST_ICON_CLASS$:"oj-pagingcontrol-nav-last-icon", $_WIDGET_ICON_CLASS$:"oj-component-icon", $_HIDDEN_CONTENT_ACC_CLASS$:"oj-helper-hidden-accessible"}, $_DATA_ATTR_PAGE_NUM$:"data-oj-pagenum", $_OPTION_ENABLED$:"enabled", $_OPTION_DISABLED$:"disabled", $_MODE$:{$_LOAD_MORE$:"loadMore", $_PAGE$:"page"}, $_PAGE_OPTION_LAYOUT$:{$_AUTO$:"auto", $_INPUT$:"input", $_RANGE_TEXT$:"rangeText", $_PAGES$:"pages", 
    $_NAV$:"nav"}, firstPage:function() {
      var $data$$56$$ = this.$_getData$();
      if (null != $data$$56$$) {
        try {
          this.$_startIndex$ = 0, $data$$56$$.fetch({startIndex:0});
        } catch ($err$$3$$) {
          return!1;
        }
        return!0;
      }
      return!1;
    }, previousPage:function() {
      var $data$$57$$ = this.$_getData$();
      if (null != $data$$57$$) {
        var $page$$ = this.$_getCurrentPage$();
        try {
          this.$_startIndex$ = this.$_getStartIndexForPage$($page$$ - 1), $data$$57$$.fetch({startIndex:this.$_startIndex$});
        } catch ($err$$4$$) {
          return!1;
        }
        return!0;
      }
      return!1;
    }, nextPage:function() {
      var $data$$58$$ = this.$_getData$();
      if (null != $data$$58$$) {
        var $page$$1$$ = this.$_getCurrentPage$();
        try {
          this.$_startIndex$ = this.$_getStartIndexForPage$($page$$1$$ + 1), $data$$58$$.fetch({startIndex:this.$_startIndex$});
        } catch ($err$$5$$) {
          return!1;
        }
        return!0;
      }
      return!1;
    }, lastPage:function() {
      var $data$$59$$ = this.$_getData$();
      if (null != $data$$59$$) {
        try {
          this.$_startIndex$ = this.$_getStartIndexForPage$(this.$_getTotalPages$()), $data$$59$$.fetch({startIndex:this.$_startIndex$});
        } catch ($err$$6$$) {
          return!1;
        }
        return!0;
      }
      return!1;
    }, page:function($page$$2$$) {
      try {
        this.$_startIndex$ = this.$_getStartIndexForPage$($page$$2$$), this.$_getData$().fetch({startIndex:this.$_startIndex$});
      } catch ($err$$7$$) {
        return!1;
      }
      return!0;
    }, loadNext:function() {
      if (null != this.$_getData$()) {
        try {
          this.$_getData$().next();
        } catch ($err$$8$$) {
          return!1;
        }
        return!0;
      }
      return!1;
    }, refresh:function() {
      this._super();
      null != this.$_fetchTimer$ && (this.$_fetchTimer$ = null, this.$_getData$().fetch({startIndex:this.$_startIndex$}));
      this.$_refresh$(!0);
    }, getNodeBySubId:function($index$$134_locator$$5$$) {
      if (null == $index$$134_locator$$5$$) {
        return this.element ? this.element[0] : null;
      }
      var $subId$$5$$ = $index$$134_locator$$5$$.subId;
      return "oj-pagingcontrol-nav-input" === $subId$$5$$ ? this.$_getPagingControlNavInput$() : "oj-pagingcontrol-nav-input-max" === $subId$$5$$ ? this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_MAX_CLASS$) : "oj-pagingcontrol-nav-input-summary" === $subId$$5$$ ? this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS$) : "oj-pagingcontrol-nav-first" === $subId$$5$$ ? this.$_getPagingControlContainer$().find("." + 
      this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_CLASS$) : "oj-pagingcontrol-nav-next" === $subId$$5$$ ? this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_CLASS$) : "oj-pagingcontrol-nav-previous" === $subId$$5$$ ? this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_CLASS$) : "oj-pagingcontrol-nav-last" === $subId$$5$$ ? this.$_getPagingControlContainer$().find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_CLASS$) : 
      "oj-pagingcontrol-nav-page" === $subId$$5$$ ? ($index$$134_locator$$5$$ = $index$$134_locator$$5$$.index, this.$_getPagingControlContainer$().find("[" + this.$_DATA_ATTR_PAGE_NUM$ + "\x3d" + $index$$134_locator$$5$$ + "]")) : null;
    }, _ComponentCreate:function() {
      this._super();
      this.$_registerDataSourceEventListeners$();
      this.$_draw$();
      this.$_registerResizeListener$(this.$_getPagingControlContainer$());
      this._on(this.$_events$);
      var $self$$42$$ = this;
      setInterval(function() {
        null != $self$$42$$.$_refreshTimer$ && ($self$$42$$.$_refreshInternal$(), $self$$42$$.$_refreshTimer$ = null);
      }, 50);
      setInterval(function() {
        null != $self$$42$$.$_fetchTimer$ && ($self$$42$$.$_getData$().fetch({startIndex:$self$$42$$.$_startIndex$}), $self$$42$$.$_fetchTimer$ = null);
      }, 100);
    }, _destroy:function() {
      this.$_unregisterDataSourceEventListeners$();
    }, $_draw$:function() {
      var $options$$227$$ = this.options;
      this.element.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_CLASS$);
      this.element.addClass(this.$_MARKER_STYLE_CLASSES$.$_WIDGET$);
      this.$_startIndex$ = 0;
      this.$_createPagingControlAccLabel$();
      this.$_createPagingControlContent$();
      $options$$227$$.mode == this.$_MODE$.$_LOAD_MORE$ ? (this.$_createPagingControlLoadMore$(), this.$_createPagingControlLoadMoreLink$(), this.$_createPagingControlLoadMoreRange$()) : this.$_createPagingControlNav$();
      null != this.$_getData$() && 0 == this.$_getData$().size() && (this.$_getData$().setPageSize($options$$227$$.pageSize), this.$_getData$().fetch({startIndex:this.$_startIndex$}));
    }, $_events$:{"click .oj-pagingcontrol-loadmore-link":function($event$$46$$) {
      this.loadNext();
      $event$$46$$.preventDefault();
    }, "click .oj-pagingcontrol-nav-page":function($event$$47$$) {
      var $pageNum$$ = $$$$10$$($event$$47$$.target).attr("data-oj-pagenum");
      this.page($pageNum$$);
      $event$$47$$.preventDefault();
    }, "click .oj-pagingcontrol-nav-first":function($event$$48$$) {
      this.firstPage();
      $event$$48$$.preventDefault();
    }, "click .oj-pagingcontrol-nav-previous":function($event$$49$$) {
      this.previousPage();
      $event$$49$$.preventDefault();
    }, "click .oj-pagingcontrol-nav-next":function($event$$50$$) {
      this.nextPage();
      $event$$50$$.preventDefault();
    }, "click .oj-pagingcontrol-nav-last":function($event$$51$$) {
      this.lastPage();
      $event$$51$$.preventDefault();
    }, "mousedown .oj-pagingcontrol-nav-first":function($event$$52$$) {
      $$$$10$$($event$$52$$.target).addClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$52$$.preventDefault();
    }, "mousedown .oj-pagingcontrol-nav-previous":function($event$$53$$) {
      $$$$10$$($event$$53$$.target).addClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$53$$.preventDefault();
    }, "mousedown .oj-pagingcontrol-nav-next":function($event$$54$$) {
      $$$$10$$($event$$54$$.target).addClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$54$$.preventDefault();
    }, "mousedown .oj-pagingcontrol-nav-last":function($event$$55$$) {
      $$$$10$$($event$$55$$.target).addClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$55$$.preventDefault();
    }, "mouseup .oj-pagingcontrol-nav-first":function($event$$56$$) {
      $$$$10$$($event$$56$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$56$$.preventDefault();
    }, "mouseup .oj-pagingcontrol-nav-previous":function($event$$57$$) {
      $$$$10$$($event$$57$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$57$$.preventDefault();
    }, "mouseup .oj-pagingcontrol-nav-next":function($event$$58$$) {
      $$$$10$$($event$$58$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$58$$.preventDefault();
    }, "mouseup .oj-pagingcontrol-nav-last":function($event$$59$$) {
      $$$$10$$($event$$59$$.target).removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$);
      $event$$59$$.preventDefault();
    }, "change .oj-pagingcontrol-nav-input":function($errSummary_event$$60$$) {
      try {
        var $errDetail_pageNum$$1$$ = parseInt($$$$10$$($errSummary_event$$60$$.target).val(), 10);
        this.page($errDetail_pageNum$$1$$);
      } catch ($err$$9$$) {
        throw $errSummary_event$$60$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_PAGE_INVALID_SUMMARY$), $errDetail_pageNum$$1$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_PAGE_INVALID_DETAIL$), new $oj$$10$$.$Message$($errSummary_event$$60$$, $errDetail_pageNum$$1$$, $oj$$10$$.$Message$.$SEVERITY_LEVEL$.ERROR);
      }
    }}, $_refresh$:function($immediate$$) {
      $immediate$$ ? this.$_refreshInternal$() : this.$_refreshTimer$ = !0;
    }, $_refreshInternal$:function() {
      this.$_data$ != this.options.data && (this.$_clearCachedDataMetadata$(), this.$_fetchTimer$ = !0);
      if (this.options.mode == this.$_MODE$.$_LOAD_MORE$) {
        var $data$$63$$ = this.$_getData$(), $pagingControlLoadMore$$ = this.$_getPagingControlLoadMore$();
        null != $data$$63$$ && $data$$63$$.size() == $data$$63$$.totalSize() ? $pagingControlLoadMore$$.css("display", "none") : ($pagingControlLoadMore$$.css("display", ""), this.$_refreshPagingControlLoadMoreRange$());
      } else {
        this.$_refreshPagingControlNav$();
      }
    }, _setOption:function($key$$53$$, $value$$156$$) {
      this._superApply(arguments);
      this.$_refresh$(!0);
    }, $_clearCachedDataMetadata$:function() {
      null != this.$_data$ && this.$_unregisterDataSourceEventListeners$();
      this.$_data$ = null;
    }, $_clearCachedDomLoadMoreRange$:function() {
      this.$_cachedDomPagingControlLoadMoreRange$ = null;
    }, $_clearCachedDomPagingControlNav$:function() {
      this.$_cachedDomPagingControlNavInputSummary$ = this.$_cachedDomPagingControlNavInput$ = this.$_cachedDomPagingControlNav$ = null;
    }, $_getCurrentPage$:function() {
      return 0 == this.$_startIndex$ ? 1 : Math.ceil((this.$_startIndex$ + 1) / this.options.pageSize);
    }, $_getData$:function() {
      if (!this.$_data$ && null != this.options.data) {
        var $data$$64_errSummary$$1$$ = this.options.data;
        if ($data$$64_errSummary$$1$$ instanceof $oj$$10$$.$PagingDataSource$) {
          this.$_data$ = $data$$64_errSummary$$1$$;
        } else {
          var $data$$64_errSummary$$1$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_DATA_INVALID_TYPE_SUMMARY$), $errDetail$$1$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_DATA_INVALID_TYPE_DETAIL$);
          throw new $oj$$10$$.$Message$($data$$64_errSummary$$1$$, $errDetail$$1$$, $oj$$10$$.$Message$.$SEVERITY_LEVEL$.ERROR);
        }
        this.$_data$.setPageSize(this.options.pageSize);
        this.$_registerDataSourceEventListeners$();
      }
      return this.$_data$;
    }, $_getItemRangeText$:function() {
      var $data$$65$$ = this.$_getData$(), $itemRangeText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_ITEM_RANGE$, {pageFrom:this.$_startIndex$, pageTo:0, pageTotal:0});
      null != $data$$65$$ && ($itemRangeText$$ = -1 != $data$$65$$.totalSize() ? this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_ITEM_RANGE$, {pageFrom:this.$_startIndex$ + 1, pageTo:this.$_startIndex$ + $data$$65$$.size(), pageTotal:$data$$65$$.totalSize()}) : this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_MSG_ITEM_RANGE_UNKNOWN$, {pageFrom:this.$_startIndex$ + 1, pageTo:this.$_startIndex$ + $data$$65$$.size()}));
      return $itemRangeText$$;
    }, $_getMaxPageLinks$:function() {
      return this.options.pageOptions.maxPageLinks;
    }, $_getStartIndexForPage$:function($page$$3$$) {
      var $startIndex$$3$$ = ($page$$3$$ - 1) * this.options.pageSize, $totalPages$$ = this.$_getTotalPages$();
      if (0 > $startIndex$$3$$) {
        throw "Value must be greater than 0";
      }
      if (0 < $totalPages$$ && $page$$3$$ > $totalPages$$) {
        throw "Value cannot be greater than the total number of pages";
      }
      return $startIndex$$3$$;
    }, $_getTotalPages$:function() {
      var $data$$66$$ = this.$_getData$(), $totalSize$$ = 0;
      null != $data$$66$$ && ($totalSize$$ = $data$$66$$.totalSize());
      return-1 == $totalSize$$ ? -1 : Math.ceil($totalSize$$ / this.options.pageSize);
    }, $_handleDataFetchEnd$:function() {
      this.$_refresh$();
    }, $_handleDataReset$:function() {
      this.$_startIndex$ = 0;
      this.$_getData$().setPageSize(this.options.pageSize);
      this.$_refresh$(!0);
      this.$_getData$().fetch({startIndex:this.$_startIndex$});
    }, $_handleDataRefresh$:function() {
      this.$_refresh$();
      this.$_getData$().fetch({startIndex:this.$_startIndex$});
    }, $_handleDataRowAdd$:function($event$$64_rowIdx$$) {
      if (this.options.mode == this.$_MODE$.$_PAGE$) {
        var $data$$67_pageSize$$2$$ = this.$_getData$(), $totalSize$$1$$ = 0;
        null != $data$$67_pageSize$$2$$ && ($totalSize$$1$$ = $data$$67_pageSize$$2$$.totalSize());
        $data$$67_pageSize$$2$$ = this.options.pageSize;
        $event$$64_rowIdx$$ = $event$$64_rowIdx$$.index;
        var $startIndex$$4$$ = this.$_getStartIndexForPage$(this.$_getCurrentPage$());
        if ($startIndex$$4$$ != this.$_startIndex$ || $event$$64_rowIdx$$ >= $startIndex$$4$$ && $event$$64_rowIdx$$ < $startIndex$$4$$ + $data$$67_pageSize$$2$$ && $totalSize$$1$$ > $data$$67_pageSize$$2$$) {
          this.$_startIndex$ = $startIndex$$4$$, this.$_fetchTimer$ = !0;
        }
      }
      this.$_refresh$();
    }, $_handleDataRowRemove$:function() {
      0 >= this.$_getTotalPages$() ? this.$_startIndex$ = 0 : this.$_getCurrentPage$() > this.$_getTotalPages$() && (this.$_startIndex$ = this.$_getStartIndexForPage$(this.$_getTotalPages$()), this.$_fetchTimer$ = !0);
      1 < this.$_getTotalPages$() && (this.$_fetchTimer$ = !0);
      this.$_refresh$();
    }, $_refreshPagingControlLoadMoreRange$:function() {
      var $pagingControlLoadMoreRange$$ = this.$_getPagingControlLoadMoreRange$();
      $pagingControlLoadMoreRange$$[0].parentNode.removeChild($pagingControlLoadMoreRange$$[0]);
      this.$_createPagingControlLoadMoreRange$();
      this.$_clearCachedDomLoadMoreRange$();
    }, $_refreshPagingControlNav$:function() {
      var $elementWidth_pageOptionLayout$$ = this.options.pageOptions.layout;
      this.$_getPagingControlContent$().empty();
      this.$_clearCachedDomPagingControlNav$();
      this.$_createPagingControlNav$();
      this.$_refreshPagingControlNavArrows$();
      if (-1 < $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $elementWidth_pageOptionLayout$$)) {
        var $elementWidth_pageOptionLayout$$ = this.element.width(), $pagingControlNavArrowSection$$ = this.$_getPagingControlNavArrowSection$(), $pagingControlNavInputSection_pagingControlNavWidth$$ = this.$_getPagingControlNavInputSection$(), $pagingControlNavPageLinks$$ = this.$_getPagingControlNavPageLinks$(), $pagingControlNavInputSummary$$ = this.$_getPagingControlNavInputSummary$(), $pagingControlNavInputSection_pagingControlNavWidth$$ = $pagingControlNavArrowSection$$[0].offsetWidth + $pagingControlNavInputSection_pagingControlNavWidth$$[0].offsetWidth;
        $pagingControlNavInputSection_pagingControlNavWidth$$ > $elementWidth_pageOptionLayout$$ ? $pagingControlNavInputSection_pagingControlNavWidth$$ - $pagingControlNavPageLinks$$.width() <= $elementWidth_pageOptionLayout$$ ? $pagingControlNavPageLinks$$.css("display", "none") : $pagingControlNavInputSection_pagingControlNavWidth$$ - $pagingControlNavPageLinks$$.width() - $pagingControlNavInputSummary$$.width() <= $elementWidth_pageOptionLayout$$ ? ($pagingControlNavPageLinks$$.css("display", 
        "none"), $pagingControlNavInputSummary$$.css("display", "none")) : ($pagingControlNavPageLinks$$.css("display", "none"), $pagingControlNavInputSummary$$.css("display", "none"), $pagingControlNavArrowSection$$.css("display", "none")) : 0 < $pagingControlNavInputSection_pagingControlNavWidth$$ && ($pagingControlNavPageLinks$$.css("display", ""), $pagingControlNavInputSummary$$.css("display", ""), $pagingControlNavArrowSection$$.css("display", ""));
      }
    }, $_refreshPagingControlNavArrows$:function() {
      var $pagingControlNavArrowSection$$1_pagingControlNavNext$$ = this.$_getPagingControlNavArrowSection$(), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $pagingControlNavArrowSection$$1_pagingControlNavNext$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_CLASS$);
      $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ && 0 < $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.length && ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $$$$10$$($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$[0]), 1 == this.$_getCurrentPage$() ? ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), 
      $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr("tabindex", "-1")) : ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr("tabindex", "0")));
      ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $pagingControlNavArrowSection$$1_pagingControlNavNext$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_CLASS$)) && 0 < $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.length && ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $$$$10$$($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$[0]), 1 == this.$_getCurrentPage$() ? ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), 
      $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr("tabindex", "-1")) : ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr("tabindex", 
      "0")));
      ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $pagingControlNavArrowSection$$1_pagingControlNavNext$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_CLASS$)) && 0 < $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.length && ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$ = $$$$10$$($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$[0]), this.$_getCurrentPage$() == this.$_getTotalPages$() ? 
      ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr("tabindex", "-1")) : ($pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), 
      $pagingControlNavFirst_pagingControlNavLast_pagingControlNavPrevious$$.attr("tabindex", "0")));
      ($pagingControlNavArrowSection$$1_pagingControlNavNext$$ = $pagingControlNavArrowSection$$1_pagingControlNavNext$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_CLASS$)) && 0 < $pagingControlNavArrowSection$$1_pagingControlNavNext$$.length && ($pagingControlNavArrowSection$$1_pagingControlNavNext$$ = $$$$10$$($pagingControlNavArrowSection$$1_pagingControlNavNext$$[0]), this.$_getCurrentPage$() == this.$_getTotalPages$() ? ($pagingControlNavArrowSection$$1_pagingControlNavNext$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), 
      $pagingControlNavArrowSection$$1_pagingControlNavNext$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavArrowSection$$1_pagingControlNavNext$$.attr("tabindex", "-1")) : ($pagingControlNavArrowSection$$1_pagingControlNavNext$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$), $pagingControlNavArrowSection$$1_pagingControlNavNext$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavArrowSection$$1_pagingControlNavNext$$.attr("tabindex", "0")));
    }, $_registerDataSourceEventListeners$:function() {
      var $data$$68$$ = this.$_getData$();
      if (null != $data$$68$$) {
        this.$_unregisterDataSourceEventListeners$();
        this.$_dataSourceEventHandlers$ = [];
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingDataSource$.$EventType$.ADD, eventHandler:this.$_handleDataRowAdd$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingDataSource$.$EventType$.REMOVE, eventHandler:this.$_handleDataRowRemove$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingDataSource$.$EventType$.RESET, eventHandler:this.$_handleDataReset$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingDataSource$.$EventType$.REFRESH, eventHandler:this.$_handleDataRefresh$.bind(this)});
        this.$_dataSourceEventHandlers$.push({eventType:$oj$$10$$.$PagingDataSource$.$EventType$.SYNC, eventHandler:this.$_handleDataFetchEnd$.bind(this)});
        var $i$$146$$;
        for ($i$$146$$ = 0;$i$$146$$ < this.$_dataSourceEventHandlers$.length;$i$$146$$++) {
          $data$$68$$.on(this.$_dataSourceEventHandlers$[$i$$146$$].eventType, this.$_dataSourceEventHandlers$[$i$$146$$].eventHandler);
        }
      }
    }, $_registerResizeListener$:function($element$$35$$) {
      if (!this.$_isResizeListenerAdded$) {
        var $self$$43$$ = this;
        $oj$$10$$.$DomUtils$.$addResizeListener$($element$$35$$[0], function() {
          $self$$43$$.$_refresh$();
        });
        this.$_isResizeListenerAdded$ = !0;
      }
    }, $_unregisterDataSourceEventListeners$:function() {
      var $data$$69$$ = this.$_getData$();
      if (null != this.$_dataSourceEventHandlers$ && null != $data$$69$$) {
        var $i$$147$$;
        for ($i$$147$$ = 0;$i$$147$$ < this.$_dataSourceEventHandlers$.length;$i$$147$$++) {
          $data$$69$$.off(this.$_dataSourceEventHandlers$[$i$$147$$].eventType, this.$_dataSourceEventHandlers$[$i$$147$$].eventHandler);
        }
      }
    }, $_createAccLabelSpan$:function($text$$8$$, $className$$7$$) {
      var $accLabel$$ = $$$$10$$(document.createElement("span"));
      $accLabel$$.addClass($className$$7$$);
      $accLabel$$.addClass(this.$_CSS_CLASSES$.$_HIDDEN_CONTENT_ACC_CLASS$);
      $accLabel$$.append($text$$8$$);
      return $accLabel$$;
    }, $_createPagingControlAccLabel$:function() {
      var $pagingControlContainer$$ = this.$_getPagingControlContainer$(), $pagingControlAccLabel_pagingControlAccLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_PAGING$), $pagingControlAccLabel_pagingControlAccLabelText$$ = this.$_createAccLabelSpan$($pagingControlAccLabel_pagingControlAccLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_ACC_LABEL_CLASS$), $pagingControlAccLabelId$$ = this.element.attr("id") + "_oj_pgCtrl_acc_label";
      $pagingControlAccLabel_pagingControlAccLabelText$$.attr("id", $pagingControlAccLabelId$$);
      $pagingControlContainer$$.append($pagingControlAccLabel_pagingControlAccLabelText$$);
      return $pagingControlAccLabel_pagingControlAccLabelText$$;
    }, $_createPagingControlAccNavPageLabel$:function() {
      var $pagingControlAccNavPageLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavPageLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGE_ACC_LABEL_CLASS$);
    }, $_createPagingControlAccNavFirstLabel$:function() {
      var $pagingControlAccNavFirstLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_FIRST_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavFirstLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_ACC_LABEL_CLASS$);
    }, $_createPagingControlAccNavLastLabel$:function() {
      var $pagingControlAccNavLastLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_LAST_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavLastLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_ACC_LABEL_CLASS$);
    }, $_createPagingControlAccNavNextLabel$:function() {
      var $pagingControlAccNavNextLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_NEXT_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavNextLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_ACC_LABEL_CLASS$);
    }, $_createPagingControlAccNavPreviousLabel$:function() {
      var $pagingControlAccNavPreviousLabelText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_ACC_NAV_PREVIOUS_PAGE$);
      return this.$_createAccLabelSpan$($pagingControlAccNavPreviousLabelText$$, this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_ACC_LABEL_CLASS$);
    }, $_createPagingControlContent$:function() {
      var $pagingControlContainer$$1$$ = this.$_getPagingControlContainer$(), $pagingControlContent$$1$$ = $$$$10$$(document.createElement("div"));
      $pagingControlContent$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_CONTENT_CLASS$);
      var $pagingControlAccLabelId$$1$$ = this.$_getPagingControlAccLabel$().attr("id");
      $pagingControlContent$$1$$.attr("role", "navigation");
      $pagingControlContent$$1$$.attr("aria-labelledby", $pagingControlAccLabelId$$1$$);
      $pagingControlContainer$$1$$.append($pagingControlContent$$1$$);
      return $pagingControlContent$$1$$;
    }, $_createPagingControlLoadMore$:function() {
      var $pagingControlContent$$2$$ = this.$_getPagingControlContent$(), $pagingControlLoadMore$$1$$ = $$$$10$$(document.createElement("div"));
      $pagingControlLoadMore$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_CLASS$);
      $pagingControlContent$$2$$.append($pagingControlLoadMore$$1$$);
      return $pagingControlLoadMore$$1$$;
    }, $_createPagingControlLoadMoreLink$:function() {
      var $pagingControlLoadMore$$2$$ = this.$_getPagingControlLoadMore$(), $pagingControlLoadMoreLink$$ = $$$$10$$(document.createElement("a"));
      $pagingControlLoadMoreLink$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_LINK_CLASS$);
      var $loadMoreText$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_LOAD_MORE$);
      $pagingControlLoadMoreLink$$.append($loadMoreText$$);
      $pagingControlLoadMoreLink$$.attr("tabindex", "0");
      $pagingControlLoadMoreLink$$.attr("href", "#");
      $pagingControlLoadMore$$2$$.append($pagingControlLoadMoreLink$$);
      return $pagingControlLoadMoreLink$$;
    }, $_createPagingControlLoadMoreRange$:function() {
      this.$_getData$();
      var $pagingControlLoadMore$$3$$ = this.$_getPagingControlLoadMore$(), $pagingControlLoadMoreRange$$1$$ = $$$$10$$(document.createElement("span"));
      $pagingControlLoadMoreRange$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_RANGE_CLASS$);
      var $loadMoreRangeText$$ = this.$_getItemRangeText$();
      $pagingControlLoadMoreRange$$1$$.append($loadMoreRangeText$$);
      $pagingControlLoadMore$$3$$.append($pagingControlLoadMoreRange$$1$$);
      return $pagingControlLoadMoreRange$$1$$;
    }, $_createPagingControlNav$:function() {
      var $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$ = this.options.pageOptions.layout;
      null == $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$ && ($pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$ = [this.$_PAGE_OPTION_LAYOUT$.$_AUTO$]);
      var $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$ = this.$_getPagingControlContent$(), $pagingControlNav$$ = $$$$10$$(document.createElement("div"));
      $pagingControlNav$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_CLASS$);
      $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($pagingControlNav$$);
      if (-1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_INPUT$, $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$)) {
        $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$ = $$$$10$$(document.createElement("div"));
        $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SECTION_CLASS$);
        $pagingControlNav$$.append($pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$);
        var $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = $$$$10$$(document.createElement("label"));
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LABEL_CLASS$);
        var $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_NAV_INPUT_PAGE$);
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.append($itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$);
        $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$);
        $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$ = $$$$10$$(document.createElement("input"));
        $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_CLASS$);
        var $navInputPageTip$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_INPUT_PAGE$);
        this._focusable(this.element);
        $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$.attr("title", $navInputPageTip$$);
        $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$.attr("tabindex", "0");
        $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$.val(this.$_getCurrentPage$());
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.append($itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$);
        0 < this.$_getTotalPages$() && ($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = $$$$10$$(document.createElement("span")), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_MAX_CLASS$), 
        $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_NAV_INPUT_PAGE_MAX$, {pageMax:this.$_getTotalPages$()}), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.append($itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$), 
        $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$));
        if (-1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_RANGE_TEXT$, $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$)) {
          $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = $$$$10$$(document.createElement("span")), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS$), 
          $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$ = this.$_getItemRangeText$(), $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_LABEL_NAV_INPUT_PAGE_SUMMARY$, 
          {pageSummary:$itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$}), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.append($itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$), 
          $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$);
        }
      }
      $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$ = $$$$10$$(document.createElement("div"));
      $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_SECTION_CLASS$);
      $pagingControlNav$$.append($pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$);
      if (-1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_NAV$, $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$)) {
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = $$$$10$$(document.createElement("a")), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_CLASS$), 
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_CLASS$), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_FIRST_ICON_CLASS$), 
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_WIDGET_ICON_CLASS$), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), 
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$ = 
        this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_FIRST_PAGE$), this._hoverable($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), this._focusable($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), 
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.attr("title", $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.attr("tabindex", 
        "0"), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.attr("href", "#"), $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$ = this.$_createPagingControlAccNavFirstLabel$(), 
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.append($itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$), $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), 
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = $$$$10$$(document.createElement("a")), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_CLASS$), 
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_CLASS$), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PREVIOUS_ICON_CLASS$), 
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_WIDGET_ICON_CLASS$), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), 
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$ = 
        this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_PREVIOUS_PAGE$), this._hoverable($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), this._focusable($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), 
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.attr("title", $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.attr("tabindex", 
        "0"), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.attr("href", "#"), $itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$ = this.$_createPagingControlAccNavPreviousLabel$(), 
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.append($itemRangeText$$1_navFirstPageTip_navInputPageLabel_navInputPageMaxLabel_navInputPageSummaryLabel_navPreviousPageTip_pagingControlNavFirstAccLabel_pagingControlNavInput_pagingControlNavPreviousAccLabel$$), $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$)
        ;
      }
      if (-1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_PAGES$, $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$)) {
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = $$$$10$$(document.createElement("div")), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGES_SECTION_CLASS$), 
        $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), this.$_createPagingControlNavPages$($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$, 
        this.$_getMaxPageLinks$());
      }
      if (-1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_AUTO$, $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$) || -1 != $$$$10$$.inArray(this.$_PAGE_OPTION_LAYOUT$.$_NAV$, $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$)) {
        $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$ = $$$$10$$(document.createElement("a")), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_CLASS$), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_CLASS$), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_NEXT_ICON_CLASS$), 
        $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_WIDGET_ICON_CLASS$), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = 
        this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_NEXT_PAGE$), this._hoverable($pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$), this._focusable($pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("title", $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), 
        $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("tabindex", "0"), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("href", "#"), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = this.$_createPagingControlAccNavNextLabel$(), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.append($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), 
        $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$ = $$$$10$$(document.createElement("a")), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_CLASS$), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_CLASS$), 
        $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_LAST_ICON_CLASS$), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_CSS_CLASSES$.$_WIDGET_ICON_CLASS$), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_CLICKABLE_ICON$), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), 
        $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_LAST_PAGE$), this._hoverable($pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$), this._focusable($pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$), 
        $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("title", $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("tabindex", "0"), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.attr("href", 
        "#"), $navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$ = this.$_createPagingControlAccNavLastLabel$(), $pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$.append($navLastPageTip_navNextPageTip_pagingControlNavFirst$$1_pagingControlNavLabel_pagingControlNavLastAccLabel_pagingControlNavMaxLabel_pagingControlNavNextAccLabel_pagingControlNavPagesSection_pagingControlNavPrevious$$1_pagingControlNavSummaryLabel$$), 
        $pagingControlContent$$3_pagingControlNavArrowSection$$2_pagingControlNavInputSection$$1$$.append($pageOptionLayout$$1_pagingControlNavLast$$1_pagingControlNavNext$$1$$);
      }
      return $pagingControlNav$$;
    }, $_createPagingControlNavPages$:function($parentDiv$$, $numLinks$$) {
      if (5 > $numLinks$$) {
        var $errSummary$$2_pagingControlNavPagesLinks$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_MAXPAGELINKS_INVALID_SUMMARY$), $errDetail$$2_totalPages$$1$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_ERR_MAXPAGELINKS_INVALID_DETAIL$);
        throw new $oj$$10$$.$Message$($errSummary$$2_pagingControlNavPagesLinks$$, $errDetail$$2_totalPages$$1$$, $oj$$10$$.$Message$.$SEVERITY_LEVEL$.ERROR);
      }
      $errSummary$$2_pagingControlNavPagesLinks$$ = $$$$10$$(document.createElement("div"));
      $errSummary$$2_pagingControlNavPagesLinks$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGES_LINKS_CLASS$);
      $parentDiv$$.append($errSummary$$2_pagingControlNavPagesLinks$$);
      var $errDetail$$2_totalPages$$1$$ = this.$_getTotalPages$(), $currentPage$$1_pageAfterCurrent_pageNum$$2$$ = this.$_getCurrentPage$(), $i$$148_numPagesToAdd$$ = $numLinks$$, $pageList$$ = [];
      if (1 <= $currentPage$$1_pageAfterCurrent_pageNum$$2$$) {
        if (-1 != $errDetail$$2_totalPages$$1$$ && $errDetail$$2_totalPages$$1$$ <= $i$$148_numPagesToAdd$$) {
          for ($i$$148_numPagesToAdd$$ = $pageList$$[0] = 1;$i$$148_numPagesToAdd$$ < $errDetail$$2_totalPages$$1$$;$i$$148_numPagesToAdd$$++) {
            $pageList$$[$i$$148_numPagesToAdd$$] = $i$$148_numPagesToAdd$$ + 1;
          }
        } else {
          $pageList$$.push(1);
          1 != $currentPage$$1_pageAfterCurrent_pageNum$$2$$ && $pageList$$.push($currentPage$$1_pageAfterCurrent_pageNum$$2$$);
          $currentPage$$1_pageAfterCurrent_pageNum$$2$$ != $errDetail$$2_totalPages$$1$$ && -1 != $errDetail$$2_totalPages$$1$$ && $pageList$$.push($errDetail$$2_totalPages$$1$$);
          var $i$$148_numPagesToAdd$$ = $i$$148_numPagesToAdd$$ - $pageList$$.length, $pageBeforeCurrent$$ = $currentPage$$1_pageAfterCurrent_pageNum$$2$$ - 1, $numPagesAfterCurrent$$ = 1;
          if ($currentPage$$1_pageAfterCurrent_pageNum$$2$$ == $errDetail$$2_totalPages$$1$$ || $currentPage$$1_pageAfterCurrent_pageNum$$2$$ == $errDetail$$2_totalPages$$1$$ - 1) {
            $numPagesAfterCurrent$$ = 0;
          }
          for (;$i$$148_numPagesToAdd$$ > $numPagesAfterCurrent$$ && 1 < $pageBeforeCurrent$$;) {
            $pageList$$.push($pageBeforeCurrent$$), $pageBeforeCurrent$$--, $i$$148_numPagesToAdd$$--;
          }
          $currentPage$$1_pageAfterCurrent_pageNum$$2$$ += 1;
          for (-1 == $errDetail$$2_totalPages$$1$$ && ($i$$148_numPagesToAdd$$ = 1);0 < $i$$148_numPagesToAdd$$ && ($currentPage$$1_pageAfterCurrent_pageNum$$2$$ <= $errDetail$$2_totalPages$$1$$ || -1 == $errDetail$$2_totalPages$$1$$);) {
            $pageList$$.push($currentPage$$1_pageAfterCurrent_pageNum$$2$$), $currentPage$$1_pageAfterCurrent_pageNum$$2$$++, $i$$148_numPagesToAdd$$--;
          }
        }
        $pageList$$.sort(function($a$$69$$, $b$$41$$) {
          return $a$$69$$ - $b$$41$$;
        });
        for ($i$$148_numPagesToAdd$$ = 0;$i$$148_numPagesToAdd$$ < $pageList$$.length;$i$$148_numPagesToAdd$$++) {
          $currentPage$$1_pageAfterCurrent_pageNum$$2$$ = $pageList$$[$i$$148_numPagesToAdd$$], this.$_createPagingControlNavPage$($errSummary$$2_pagingControlNavPagesLinks$$, $currentPage$$1_pageAfterCurrent_pageNum$$2$$), $i$$148_numPagesToAdd$$ != $pageList$$.length - 1 && $currentPage$$1_pageAfterCurrent_pageNum$$2$$ != $pageList$$[$i$$148_numPagesToAdd$$ + 1] - 1 && this.$_createPagingControlNavPage$($errSummary$$2_pagingControlNavPagesLinks$$, -1);
        }
        -1 == $errDetail$$2_totalPages$$1$$ && this.$_createPagingControlNavPage$($errSummary$$2_pagingControlNavPagesLinks$$, -1);
      }
      return $errSummary$$2_pagingControlNavPagesLinks$$;
    }, $_createPagingControlNavPage$:function($parentDiv$$1$$, $pageNum$$3$$) {
      var $accPageLabel_currentPage$$2_pageTitle$$ = this.$_getCurrentPage$(), $pagingControlNavPage$$ = null;
      -1 == $pageNum$$3$$ ? ($pagingControlNavPage$$ = $$$$10$$(document.createElement("span")), $pagingControlNavPage$$.append("...")) : ($accPageLabel_currentPage$$2_pageTitle$$ == $pageNum$$3$$ ? ($pagingControlNavPage$$ = $$$$10$$(document.createElement("div")), $pagingControlNavPage$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$), $pagingControlNavPage$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$), $pagingControlNavPage$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavPage$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$)) : 
      ($pagingControlNavPage$$ = $$$$10$$(document.createElement("a")), $pagingControlNavPage$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_SELECTED$), $pagingControlNavPage$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_ACTIVE$), $pagingControlNavPage$$.removeClass(this.$_MARKER_STYLE_CLASSES$.$_DISABLED$), $pagingControlNavPage$$.addClass(this.$_MARKER_STYLE_CLASSES$.$_ENABLED$)), $pagingControlNavPage$$.attr("data-oj-pagenum", $pageNum$$3$$), $pagingControlNavPage$$.addClass(this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGE_CLASS$), 
      $accPageLabel_currentPage$$2_pageTitle$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TIP_NAV_PAGE_LINK$, {pageNum:$pageNum$$3$$.toString()}), this._hoverable($pagingControlNavPage$$), this._focusable($pagingControlNavPage$$), $pagingControlNavPage$$.attr("title", $accPageLabel_currentPage$$2_pageTitle$$), $pagingControlNavPage$$.attr("tabindex", "0"), $pagingControlNavPage$$.attr("href", "#"), $accPageLabel_currentPage$$2_pageTitle$$ = this.$_createPagingControlAccNavPageLabel$(), $pagingControlNavPage$$.append($accPageLabel_currentPage$$2_pageTitle$$), 
      $pagingControlNavPage$$.append($pageNum$$3$$.toString()), this._hoverable($pagingControlNavPage$$));
      $parentDiv$$1$$.append($pagingControlNavPage$$);
      return $pagingControlNavPage$$;
    }, $_getPagingControlAccLabel$:function() {
      var $pagingControlContainer$$2$$ = this.$_getPagingControlContainer$(), $pagingControlContentAccLabel$$ = null;
      $pagingControlContainer$$2$$ && ($pagingControlContentAccLabel$$ = $pagingControlContainer$$2$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_ACC_LABEL_CLASS$)) && 0 < $pagingControlContentAccLabel$$.length && ($pagingControlContentAccLabel$$ = $$$$10$$($pagingControlContentAccLabel$$.get(0)));
      return $pagingControlContentAccLabel$$;
    }, $_getPagingControlContainer$:function() {
      return $$$$10$$(this.element);
    }, $_getPagingControlContent$:function() {
      if (!this.$_cachedDomPagingControlContent$) {
        var $pagingControlContainer$$3$$ = this.$_getPagingControlContainer$(), $pagingControlContent$$4$$ = null;
        $pagingControlContainer$$3$$ && ($pagingControlContent$$4$$ = $pagingControlContainer$$3$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_CONTENT_CLASS$)) && 0 < $pagingControlContent$$4$$.length && (this.$_cachedDomPagingControlContent$ = $$$$10$$($pagingControlContent$$4$$.get(0)));
      }
      return this.$_cachedDomPagingControlContent$;
    }, $_getPagingControlLoadMore$:function() {
      if (!this.$_cachedDomPagingControlLoadMore$) {
        var $pagingControlContent$$5$$ = this.$_getPagingControlContent$(), $pagingControlLoadMore$$4$$ = null;
        $pagingControlContent$$5$$ && ($pagingControlLoadMore$$4$$ = $pagingControlContent$$5$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_CLASS$)) && 0 < $pagingControlLoadMore$$4$$.length && (this.$_cachedDomPagingControlLoadMore$ = $$$$10$$($pagingControlLoadMore$$4$$.get(0)));
      }
      return this.$_cachedDomPagingControlLoadMore$;
    }, $_getPagingControlLoadMoreLink$:function() {
      if (!this.$_cachedDomPagingControlLoadMoreLink$) {
        var $pagingControlLoadMore$$5$$ = this.$_getPagingControlLoadMore$(), $pagingControlLoadMoreLink$$1$$ = null;
        $pagingControlLoadMore$$5$$ && ($pagingControlLoadMoreLink$$1$$ = $pagingControlLoadMore$$5$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_LINK_CLASS$)) && 0 < $pagingControlLoadMoreLink$$1$$.length && (this.$_cachedDomPagingControlLoadMoreLink$ = $$$$10$$($pagingControlLoadMoreLink$$1$$.get(0)));
      }
      return this.$_cachedDomPagingControlLoadMoreLink$;
    }, $_getPagingControlLoadMoreRange$:function() {
      if (!this.$_cachedDomPagingControlLoadMoreRange$) {
        var $pagingControlLoadMore$$6$$ = this.$_getPagingControlLoadMore$(), $pagingControlLoadMoreRange$$2$$ = null;
        $pagingControlLoadMore$$6$$ && ($pagingControlLoadMoreRange$$2$$ = $pagingControlLoadMore$$6$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_LOAD_MORE_RANGE_CLASS$)) && 0 < $pagingControlLoadMoreRange$$2$$.length && (this.$_cachedDomPagingControlLoadMoreRange$ = $$$$10$$($pagingControlLoadMoreRange$$2$$.get(0)));
      }
      return this.$_cachedDomPagingControlLoadMoreRange$;
    }, $_getPagingControlNav$:function() {
      if (!this.$_cachedDomPagingControlNav$) {
        var $pagingControlContent$$6$$ = this.$_getPagingControlContent$(), $pagingControlNav$$1$$ = null;
        $pagingControlContent$$6$$ && ($pagingControlNav$$1$$ = $pagingControlContent$$6$$.children("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_CLASS$)) && 0 < $pagingControlNav$$1$$.length && (this.$_cachedDomPagingControlNav$ = $$$$10$$($pagingControlNav$$1$$.get(0)));
      }
      return this.$_cachedDomPagingControlNav$;
    }, $_getPagingControlNavInput$:function() {
      if (!this.$_cachedDomPagingControlNavInput$) {
        var $pagingControlNav$$2$$ = this.$_getPagingControlNav$(), $pagingControlNavInput$$1$$ = null;
        $pagingControlNav$$2$$ && ($pagingControlNavInput$$1$$ = $pagingControlNav$$2$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_CLASS$)) && 0 < $pagingControlNavInput$$1$$.length && (this.$_cachedDomPagingControlNavInput$ = $$$$10$$($pagingControlNavInput$$1$$.get(0)));
      }
      return this.$_cachedDomPagingControlNavInput$;
    }, $_getPagingControlNavInputSummary$:function() {
      if (!this.$_cachedDomPagingControlNavInputSummary$) {
        var $pagingControlNav$$3$$ = this.$_getPagingControlNav$(), $pagingControlNavInputSummary$$1$$ = null;
        $pagingControlNav$$3$$ && ($pagingControlNavInputSummary$$1$$ = $pagingControlNav$$3$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SUMMARY_CLASS$)) && 0 < $pagingControlNavInputSummary$$1$$.length && (this.$_cachedDomPagingControlNavInputSummary$ = $$$$10$$($pagingControlNavInputSummary$$1$$.get(0)));
      }
      return this.$_cachedDomPagingControlNavInputSummary$;
    }, $_getPagingControlNavPageLinks$:function() {
      var $pagingControlNav$$4$$ = this.$_getPagingControlNav$(), $pagingControlNavPageLinks$$1$$ = null;
      $pagingControlNav$$4$$ && ($pagingControlNavPageLinks$$1$$ = $pagingControlNav$$4$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_PAGES_LINKS_CLASS$)) && 0 < $pagingControlNavPageLinks$$1$$.length && ($pagingControlNavPageLinks$$1$$ = $$$$10$$($pagingControlNavPageLinks$$1$$.get(0)));
      return $pagingControlNavPageLinks$$1$$;
    }, $_getPagingControlNavArrowSection$:function() {
      var $pagingControlNav$$5$$ = this.$_getPagingControlNav$(), $pagingControlNavArrowSection$$3$$ = null;
      $pagingControlNav$$5$$ && ($pagingControlNavArrowSection$$3$$ = $pagingControlNav$$5$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_ARROW_SECTION_CLASS$)) && 0 < $pagingControlNavArrowSection$$3$$.length && ($pagingControlNavArrowSection$$3$$ = $$$$10$$($pagingControlNavArrowSection$$3$$.get(0)));
      return $pagingControlNavArrowSection$$3$$;
    }, $_getPagingControlNavInputSection$:function() {
      var $pagingControlNav$$6$$ = this.$_getPagingControlNav$(), $pagingControlNavInputSection$$2$$ = null;
      $pagingControlNav$$6$$ && ($pagingControlNavInputSection$$2$$ = $pagingControlNav$$6$$.find("." + this.$_CSS_CLASSES$.$_PAGING_CONTROL_NAV_INPUT_SECTION_CLASS$)) && 0 < $pagingControlNavInputSection$$2$$.length && ($pagingControlNavInputSection$$2$$ = $$$$10$$($pagingControlNavInputSection$$2$$.get(0)));
      return $pagingControlNavInputSection$$2$$;
    }});
  })();
});
