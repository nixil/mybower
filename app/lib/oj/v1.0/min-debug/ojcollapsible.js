/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$31$$, $$$$31$$) {
  (function() {
    var $uid$$ = 0;
    $oj$$31$$.$__registerWidget$("oj.ojCollapsible", $$$$31$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{expanded:!1, disabled:null, expandOn:"click", expandArea:"disclosureIcon", beforeExpand:null, expand:null, beforeCollapse:null, collapse:null, optionChange:null}, _ComponentCreate:function() {
      this._super();
      this.$activatable$ = $$$$31$$();
      this.element.addClass("oj-collapsible oj-component");
      this.$_processPanels$();
      this.$_refresh$();
    }, $_showContextMenu$:function($menu$$16$$, $event$$334$$) {
      $menu$$16$$.show($event$$334$$, {launcher:this.element.find(".oj-collapsible-header-icon").first(), focus:"menu"});
    }, $_createIcons$:function() {
      var $icon$$2$$ = this.options.expanded ? "oj-collapsible-open-icon" : "oj-collapsible-close-icon";
      (this.$_isDisabled$() ? $$$$31$$("\x3cspan\x3e") : $$$$31$$("\x3ca href\x3d'#'\x3e")).addClass("oj-component-icon oj-clickable-icon oj-collapsible-header-icon " + $icon$$2$$).attr("aria-labelledby", this.header.attr("id")).prependTo(this.header);
    }, $_destroyIcons$:function() {
      this.header.children(".oj-collapsible-header-icon").remove();
    }, _destroy:function() {
      this.$_cleanup$();
      this.element.removeClass("oj-collapsible oj-component oj-expanded oj-collapsed oj-disabled");
      this.$_isDisabled$() && this.$_findFocusables$(this.header).removeAttr("tabIndex");
      this.header.removeClass("oj-collapsible-header").each(function() {
        /^oj-collapsible/.test(this.id) && this.removeAttribute("id");
      });
      this.$_findFirstFocusableInHeader$().removeAttr("role").removeAttr("aria-controls").removeAttr("aria-expanded").removeAttr("aria-disabled");
      this.$_destroyIcons$();
      this.$_findFocusables$(this.content).removeAttr("tabIndex");
      this.content.css("display", "").removeAttr("aria-hidden").removeAttr("tabIndex").removeClass("oj-component-content oj-collapsible-content").each(function() {
        /^oj-collapsible/.test(this.id) && this.removeAttribute("id");
      });
    }, $_cleanup$:function() {
      this.$_tearDownEvents$();
      this.content && (this.content.unwrap(), this.$wrapper$ = null);
    }, $_isDisabled$:function() {
      return this.element.hasClass("oj-disabled");
    }, $_getExpandAreaSelector$:function() {
      return "header" == this.options.expandArea ? "\x3e .oj-collapsible-header" : "\x3e .oj-collapsible-header \x3e .oj-collapsible-header-icon";
    }, _setOption:function($key$$101$$, $value$$202$$, $flags$$34$$) {
      "expanded" === $key$$101$$ ? this.$_setCollapsed$($value$$202$$) : ("expandOn" === $key$$101$$ || "expandArea" === $key$$101$$ ? (this.$_tearDownEvents$(), this._super($key$$101$$, $value$$202$$, $flags$$34$$), this.$_setupEvents$()) : this._super($key$$101$$, $value$$202$$, $flags$$34$$), "disabled" === $key$$101$$ && (this.header.add(this.header.next()), this.element.toggleClass("oj-disabled", !!$value$$202$$)));
    }, $_keydown$:function($event$$335$$) {
      if (!$event$$335$$.altKey && !$event$$335$$.ctrlKey) {
        var $keyCode$$4$$ = $$$$31$$.ui.keyCode;
        switch($event$$335$$.keyCode) {
          case $keyCode$$4$$.SPACE:
          ;
          case $keyCode$$4$$.ENTER:
            this.$_toggleHandler$($event$$335$$);
        }
      }
    }, refresh:function() {
      this._super();
      this.$_cleanup$();
      this.$_processPanels$();
      this.$_destroyIcons$();
      this.$_refresh$();
    }, $_processPanels$:function() {
      this.header = this.element.children(":first-child").addClass("oj-collapsible-header");
      this.content = this.header.next().addClass("oj-collapsible-content oj-component-content");
      this.content.wrap("\x3cdiv\x3e\x3c/div\x3e");
      this.$wrapper$ = this.content.parent().addClass("oj-collapsible-wrapper");
      this.options.disabled && this.element.addClass("oj-disabled");
      this.$_isDisabled$() && this.$_findFocusables$(this.header).attr("tabIndex", -1);
    }, $_refresh$:function() {
      var $focusable$$2_header$$7$$ = this.header, $content$$25$$ = this.content, $options$$304$$ = this.options, $collapsibleId$$ = "oj-collapsible-" + (this.element.attr("id") || ++$uid$$), $headerId$$ = $focusable$$2_header$$7$$.attr("id"), $contentId$$ = $content$$25$$.attr("id");
      $headerId$$ || $focusable$$2_header$$7$$.attr("id", $collapsibleId$$ + "-header");
      $contentId$$ || ($contentId$$ = $collapsibleId$$ + "-content", $content$$25$$.attr("id", $contentId$$));
      this.$_createIcons$();
      $focusable$$2_header$$7$$ = this.$_findFirstFocusableInHeader$();
      $focusable$$2_header$$7$$.attr("role", "button").attr("aria-controls", $contentId$$);
      this.$_isDisabled$() && $focusable$$2_header$$7$$.attr("aria-disabled", !0);
      this.$_isDisabled$() || this.$_setContentTabIndex$($options$$304$$.expanded ? "0" : "-1");
      $options$$304$$.expanded ? (this.element.removeClass("oj-collapsed"), this.element.addClass("oj-expanded"), $content$$25$$.attr({"aria-hidden":"false"}), $focusable$$2_header$$7$$.attr("aria-expanded", "true")) : (this.element.removeClass("oj-expanded"), this.element.addClass("oj-collapsed"), this.$wrapper$.css({"max-height":0, "overflow-y":"hidden", display:"none"}), this.$wrapper$.css("max-height", 0), $content$$25$$.attr({"aria-hidden":"true"}), $focusable$$2_header$$7$$.attr("aria-expanded", 
      "false"));
      this.$_setupEvents$();
    }, $_setCollapsed$:function($expanded$$5$$) {
      $expanded$$5$$ !== this.options.expanded && ($expanded$$5$$ ? this.expand(!0) : this.collapse(!0));
    }, $_setupEvents$:function() {
      var $events$$3$$ = {keydown:this.$_keydown$}, $event$$336_expandArea$$ = this.options.expandOn;
      if ($event$$336_expandArea$$) {
        var $self$$110$$ = this;
        $$$$31$$.each($event$$336_expandArea$$.split(" "), function($index$$186$$, $eventName$$1$$) {
          $events$$3$$[$eventName$$1$$] = $self$$110$$.$_toggleHandler$;
        });
      }
      $event$$336_expandArea$$ = this.element.find(this.$_getExpandAreaSelector$());
      this._on($event$$336_expandArea$$, $events$$3$$);
      this._on(this.$wrapper$, {transitionend:this.$_transitionEndHandler$, webkitTransitionEnd:this.$_transitionEndHandler$, otransitionend:this.$_transitionEndHandler$, oTransitionEnd:this.$_transitionEndHandler$});
      this.$_isDisabled$() || (this._on(this.element, {ojexpand:this.$_expandCollapseHandler$, ojcollapse:this.$_expandCollapseHandler$, ojfocus:this.$_focusHandler$, ojfocusout:this.$_focusHandler$}), this._hoverable($event$$336_expandArea$$), this._focusable($event$$336_expandArea$$), this.$_activatable$($event$$336_expandArea$$));
    }, $_tearDownEvents$:function() {
      this._off(this.element.find(this.$_getExpandAreaSelector$()));
      this.$wrapper$ && this._off(this.$wrapper$);
      this._off(this.element.add(this.content));
    }, $_toggleHandler$:function($event$$337$$) {
      this.$_isDisabled$() || (this.options.expanded ? this.collapse(!0, $event$$337$$) : this.expand(!0, $event$$337$$), $event$$337$$.preventDefault(), $event$$337$$.stopPropagation(), this.header.find(".oj-collapsible-header-icon").focus());
    }, $_expandCollapseHandler$:function($event$$338$$) {
      if (!this.$_isDisabled$() && $event$$338$$.target === this.element[0] && !$event$$338$$.isDefaultPrevented()) {
        var $element$$67$$ = this.element, $options$$305$$ = this.options, $content$$26$$ = this.content, $wrapper$$1$$ = this.$wrapper$, $isCollapse$$ = "ojcollapse" === $event$$338$$.type;
        $event$$338$$.preventDefault();
        $options$$305$$.expanded = !$isCollapse$$;
        $wrapper$$1$$.$contentHeight$ = $wrapper$$1$$.outerHeight();
        $isCollapse$$ ? ($wrapper$$1$$.removeClass("oj-collapsible-transition"), $wrapper$$1$$.css({"max-height":$wrapper$$1$$.$contentHeight$, "overflow-y":"hidden"}), setTimeout(function() {
          $wrapper$$1$$.addClass("oj-collapsible-transition").css({"max-height":0});
          $element$$67$$.removeClass("oj-expanded");
          $element$$67$$.addClass("oj-collapsed");
        }, 10)) : ($wrapper$$1$$.show(), setTimeout(function() {
          $wrapper$$1$$.$contentHeight$ += $content$$26$$.outerHeight();
          $wrapper$$1$$.addClass("oj-collapsible-transition").css({"max-height":$wrapper$$1$$.$contentHeight$});
          $element$$67$$.removeClass("oj-collapsed");
          $element$$67$$.addClass("oj-expanded");
        }, 1));
        this.header.find(".oj-collapsible-header-icon").toggleClass("oj-collapsible-open-icon", !$isCollapse$$).toggleClass("oj-collapsible-close-icon", $isCollapse$$ || !1).end();
        this.content.attr("aria-hidden", $isCollapse$$);
        this.$_findFirstFocusableInHeader$().attr("aria-expanded", !$isCollapse$$);
        this.$_setContentTabIndex$($isCollapse$$ ? "-1" : "0");
      }
    }, $_focusHandler$:function($event$$339$$) {
      if (this.$_isDisabled$()) {
        return null;
      }
      "ojfocusout" == $event$$339$$.type ? (this.$_findFirstFocusableInHeader$().attr("tabIndex", -1), $event$$339$$.preventDefault(), $event$$339$$.stopPropagation()) : "ojfocus" == $event$$339$$.type && (this.$_findFirstFocusableInHeader$().attr("tabIndex", 0).focus(), $event$$339$$.preventDefault(), $event$$339$$.stopPropagation());
    }, $_findFirstFocusableInHeader$:function() {
      return this.$_findFocusables$(this.header).first();
    }, $_setContentTabIndex$:function($value$$203$$) {
      return this.$_findFocusables$(this.content).attr("tabIndex", $value$$203$$);
    }, $_findFocusables$:function($start$$34$$) {
      return this.$_isDisabled$() ? $start$$34$$.find("span") : $start$$34$$.find("a,:input");
    }, expand:function($vetoable$$, $event$$340$$) {
      if (!this.$_isDisabled$()) {
        var $eventData$$10$$ = {header:this.header, content:this.content};
        $vetoable$$ && !1 === this._trigger("beforeExpand", $event$$340$$, $eventData$$10$$) || (this._trigger("expand", $event$$340$$, $eventData$$10$$), this.$_fireOptionChange$("expanded", !1, !0, $event$$340$$ ? !0 : !1));
      }
    }, collapse:function($vetoable$$1$$, $event$$341$$) {
      if (!this.$_isDisabled$()) {
        var $eventData$$11$$ = {header:this.header, content:this.content};
        $vetoable$$1$$ && !1 === this._trigger("beforeCollapse", $event$$341$$, $eventData$$11$$) || (this._trigger("collapse", $event$$341$$, $eventData$$11$$), this.$_fireOptionChange$("expanded", !0, !1, $event$$341$$ ? !0 : !1));
      }
    }, $_transitionEndHandler$:function($event$$342$$) {
      this.$_isDisabled$() || ("max-height" == ($event$$342$$.originalEvent ? $event$$342$$.originalEvent.propertyName : null) && ($event$$342$$.preventDefault(), $event$$342$$.stopPropagation()), this.options.expanded ? this.$wrapper$.css({"max-height":9999, "overflow-y":""}) : this.$wrapper$.hide(), this.$wrapper$.removeClass("oj-collapsible-transition"));
    }, $_activatable$:function($element$$68$$) {
      this.$activatable$ = this.$activatable$.add($element$$68$$);
      this._on($element$$68$$, {mousedown:function($event$$343$$) {
        $$$$31$$($event$$343$$.currentTarget).addClass("oj-active");
      }, mouseup:function($event$$344$$) {
        $$$$31$$($event$$344$$.currentTarget).removeClass("oj-active");
      }});
    }, $_fireOptionChange$:function($key$$102$$, $previousValue$$6$$, $value$$204$$, $originalEvent$$4$$) {
      this._trigger("optionChange", $originalEvent$$4$$, {option:$key$$102$$, previousValue:$previousValue$$6$$, value:$value$$204$$, optionMetadata:{writeback:$originalEvent$$4$$ ? "shouldWrite" : "shouldNotWrite"}});
    }, getNodeBySubId:function($locator$$25_subId$$17$$) {
      if (null == $locator$$25_subId$$17$$) {
        return this.element ? this.element[0] : null;
      }
      $locator$$25_subId$$17$$ = $locator$$25_subId$$17$$.subId;
      switch($locator$$25_subId$$17$$) {
        case "oj-collapsible-content":
          return this.content;
        case "oj-collapsible-header":
          return this.header;
        case "oj-collapsible-header-icon":
          return this.header.find("." + $locator$$25_subId$$17$$)[0];
      }
      return null;
    }});
  })();
});
