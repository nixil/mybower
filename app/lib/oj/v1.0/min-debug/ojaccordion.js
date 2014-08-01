/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojcollapsible"], function($oj$$28$$, $$$$28$$) {
  (function() {
    $oj$$28$$.$__registerWidget$("oj.ojAccordion", $$$$28$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{multiple:!1, expanded:null, beforeExpand:null, expand:null, beforeCollapse:null, collapse:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-accordion oj-component").attr("role", "group");
      this.$_refresh$();
    }, $_showContextMenu$:function($menu$$15$$, $event$$320$$) {
      $menu$$15$$.show($event$$320$$, {launcher:this.element.find(".oj-collapsible-header-icon").first(), focus:"menu"});
    }, _destroy:function() {
      this.element.removeClass("oj-accordion oj-component").removeAttr("role");
      this.element.children().removeClass("oj-accordion-collapsible");
      this.element.children(".oj-accordion-created").removeClass("oj-accordion-created").ojCollapsible("destroy");
    }, _setOption:function($key$$91$$, $value$$201$$, $flags$$33$$) {
      "multiple" === $key$$91$$ ? !1 == $value$$201$$ && !0 == this.options.multiple && this.$colllapsibles$.hasClass("oj-expanded").first().siblings(".oj-collapsible").trigger("ojcollapse") : "expanded" === $key$$91$$ && this.$_setExpandedOption$($value$$201$$);
      this._super($key$$91$$, $value$$201$$, $flags$$33$$);
      "disabled" === $key$$91$$ && (($value$$201$$ = !!$value$$201$$) && this.$colllapsibles$.each(function() {
        null == $$$$28$$(this).ojCollapsible("option", $key$$91$$) && $$$$28$$(this).ojCollapsible("option", $key$$91$$, $value$$201$$);
      }), this.element.toggleClass("oj-disabled", $value$$201$$));
    }, refresh:function() {
      this._super();
      this.$_refresh$();
    }, $_refresh$:function() {
      this.$_makeCollapsible$();
      this._setOption("disabled", this.options.disabled);
      this._setOption("expanded", this.options.expanded);
      this.$_setupEvents$();
    }, $_makeCollapsible$:function() {
      this.element.children(":oj-collapsible").each(function() {
        $$$$28$$(this).ojCollapsible("option", "expandArea", "header");
      });
      this.$colllapsibles$ = this.element.children().not(":oj-ojCollapsible").ojCollapsible({expandArea:"header"}).addClass("oj-accordion-created").end().addClass("oj-accordion-collapsible");
    }, $_setupEvents$:function() {
      var $events$$2$$ = {keydown:this.$_keydown$, ojbeforeexpand:this.$_beforeExpandHandler$, ojexpand:this.$_expandHandler$, ojbeforecollapse:this.$_beforeCollapseHandler$, ojcollapse:this.$_collapseHandler$};
      this._off(this.$colllapsibles$);
      this._on(this.$colllapsibles$, $events$$2$$);
    }, $_keydown$:function($event$$321$$) {
      if (!$event$$321$$.altKey && !$event$$321$$.ctrlKey && ($$$$28$$($event$$321$$.target).hasClass("oj-collapsible-header") || $$$$28$$($event$$321$$.target).hasClass("oj-collapsible-header-icon"))) {
        var $keyCode$$3$$ = $$$$28$$.ui.keyCode, $enabledCollapsibles$$ = this.$colllapsibles$.not(".oj-disabled"), $length$$16$$ = $enabledCollapsibles$$.length, $target$$80$$ = $$$$28$$($event$$321$$.target).closest(".oj-collapsible"), $currentIndex$$1$$ = $enabledCollapsibles$$.index($target$$80$$), $toFocus$$ = !1;
        if (0 <= $currentIndex$$1$$) {
          switch($event$$321$$.keyCode) {
            case $keyCode$$3$$.RIGHT:
            ;
            case $keyCode$$3$$.DOWN:
              $toFocus$$ = $enabledCollapsibles$$[($currentIndex$$1$$ + 1) % $length$$16$$];
              break;
            case $keyCode$$3$$.LEFT:
            ;
            case $keyCode$$3$$.UP:
              $toFocus$$ = $enabledCollapsibles$$[($currentIndex$$1$$ - 1 + $length$$16$$) % $length$$16$$];
              break;
            case $keyCode$$3$$.HOME:
              $toFocus$$ = $enabledCollapsibles$$[0];
              break;
            case $keyCode$$3$$.END:
              $toFocus$$ = $enabledCollapsibles$$[$length$$16$$ - 1];
          }
        }
        $toFocus$$ && ($target$$80$$ && $$$$28$$($target$$80$$).trigger("ojfocusout"), $$$$28$$($toFocus$$).trigger("ojfocus"), $event$$321$$.preventDefault());
      }
    }, $_findTargetSiblings$:function($closestCollapsible_event$$322$$) {
      return!this.options.multiple && ($closestCollapsible_event$$322$$ = $$$$28$$($closestCollapsible_event$$322$$.target).closest(".oj-collapsible"), $closestCollapsible_event$$322$$.parent().is(":oj-ojAccordion")) ? $closestCollapsible_event$$322$$.siblings(".oj-collapsible.oj-expanded").map(function() {
        return $$$$28$$(this).data("oj-ojCollapsible");
      }) : $$$$28$$();
    }, $_beforeExpandHandler$:function($event$$323$$) {
      if (!this.$_isTargetMyCollapsible$($event$$323$$)) {
        return!0;
      }
      var $result$$26$$, $self$$102$$ = this, $newData$$3$$;
      this.$_findTargetSiblings$($event$$323$$).each(function() {
        var $beforeCollapsedData_collapsible$$ = this.element;
        $newData$$3$$ = $self$$102$$.$_initEventData$($beforeCollapsedData_collapsible$$, $$$$28$$($event$$323$$.target));
        $beforeCollapsedData_collapsible$$ = {header:$beforeCollapsedData_collapsible$$.find(".oj-collapsible-header"), content:$beforeCollapsedData_collapsible$$.find(".oj-collapsible-content")};
        return $result$$26$$ = this._trigger("beforeCollapse", $event$$323$$, $beforeCollapsedData_collapsible$$);
      });
      $newData$$3$$ || ($newData$$3$$ = $self$$102$$.$_initEventData$(null, $$$$28$$($event$$323$$.target)));
      this.options.multiple || this._trigger("beforeExpand", $event$$323$$, $newData$$3$$);
      return $result$$26$$;
    }, $_expandHandler$:function($event$$324$$, $eventData$$5$$) {
      if (this.$_isTargetMyCollapsible$($event$$324$$)) {
        var $newData$$4$$, $self$$103$$ = this;
        this.$_findTargetSiblings$($event$$324$$).each(function() {
          this.collapse(!1, $event$$324$$, $eventData$$5$$);
          $newData$$4$$ = $self$$103$$.$_initEventData$(this.element, $$$$28$$($event$$324$$.target));
        });
        $newData$$4$$ || ($newData$$4$$ = $self$$103$$.$_initEventData$(null, $$$$28$$($event$$324$$.target)));
        this.options.multiple || this._trigger("expand", $event$$324$$, $newData$$4$$);
        this.$_updateExpanded$();
      }
    }, $_beforeCollapseHandler$:function($event$$325$$, $eventData$$6$$) {
      return this.$_isTargetMyCollapsible$($event$$325$$) && !this.options.multiple ? this._trigger("beforeCollapse", $event$$325$$, this.$_initCollapseEventData$($event$$325$$, $eventData$$6$$)) : !0;
    }, $_collapseHandler$:function($event$$326$$, $eventData$$7$$) {
      if (this.$_isTargetMyCollapsible$($event$$326$$)) {
        var $newData$$5$$ = this.$_initCollapseEventData$($event$$326$$, $eventData$$7$$);
        this.options.multiple || this._trigger("collapse", $event$$326$$, $newData$$5$$);
        this.$_updateExpanded$();
      }
    }, $_initEventData$:function($fromC$$, $toC$$) {
      return{fromCollapsible:$fromC$$, toCollapsible:$toC$$};
    }, $_initCollapseEventData$:function($event$$327$$, $eventData$$9$$) {
      var $newData$$6$$;
      if ($eventData$$9$$.toCollapsible) {
        $newData$$6$$ = $eventData$$9$$;
      } else {
        if ($event$$327$$.originalEvent && $event$$327$$.originalEvent.target) {
          var $collapsible$$1$$ = $$$$28$$($event$$327$$.originalEvent.target);
          $collapsible$$1$$.hasClass("oj-collapsible") && ($newData$$6$$ = this.$_initEventData$($$$$28$$($event$$327$$.target), $collapsible$$1$$));
        }
        $newData$$6$$ || ($newData$$6$$ = this.$_initEventData$($$$$28$$($event$$327$$.target), null));
      }
      return $newData$$6$$;
    }, $_isTargetMyCollapsible$:function($event$$328$$) {
      return $$$$28$$($event$$328$$.target).is(this.$colllapsibles$);
    }, $_updateExpanded$:function() {
      var $result$$27$$ = [];
      this.$colllapsibles$.each(function($index$$169$$) {
        $$$$28$$(this).ojCollapsible("option", "expanded") && $result$$27$$.push($index$$169$$);
      });
      this.options.expanded = $result$$27$$;
    }, $_inExpanded$:function($expanded$$3$$, $oCollapsible$$, $ei_index$$170$$) {
      void 0 === $ei_index$$170$$ && ($ei_index$$170$$ = $oCollapsible$$.index());
      $ei_index$$170$$ = $expanded$$3$$.indexOf($ei_index$$170$$);
      return-1 != $ei_index$$170$$ ? $ei_index$$170$$ : $expanded$$3$$.indexOf($oCollapsible$$.attr("id"));
    }, $_setExpandedOption$:function($expanded$$4_i$$271$$) {
      var $idMap$$ = {};
      this.$colllapsibles$.each(function($index$$171$$) {
        var $id$$35$$ = $$$$28$$(this).attr("id");
        $id$$35$$ && ($idMap$$[$id$$35$$] = $index$$171$$);
      });
      var $expandedList$$ = [];
      Array.isArray($expanded$$4_i$$271$$) && $expanded$$4_i$$271$$.each(function($index$$172$$) {
        "string" === typeof this ? void 0 !== $idMap$$[this] && ($expandedList$$[$idMap$$[this]] = !0) : "number" === typeof this && ($expandedList$$[$index$$172$$] = !0);
      });
      for ($expanded$$4_i$$271$$ = 0;$expanded$$4_i$$271$$ < $expandedList$$.length;$expanded$$4_i$$271$$++) {
        $$$$28$$(this.$colllapsibles$[$expanded$$4_i$$271$$]).ojCollapsible("option", "expanded", !!this);
      }
      this.$_updateExpanded$();
    }, getNodeBySubId:function($collapsible$$2_locator$$22$$) {
      if (null == $collapsible$$2_locator$$22$$) {
        return this.element ? this.element[0] : null;
      }
      var $subId$$16$$ = $collapsible$$2_locator$$22$$.subId;
      $collapsible$$2_locator$$22$$ = this.$colllapsibles$[$collapsible$$2_locator$$22$$.index];
      switch($subId$$16$$) {
        case "oj-accordion-content":
          $subId$$16$$ = "oj-collapsible-content";
          break;
        case "oj-accordion-header":
          $subId$$16$$ = "oj-collapsible-header";
          break;
        case "oj-accordion-header-icon":
          $subId$$16$$ = "oj-collapsible-header-icon";
          break;
        case "oj-accordion-collapsible":
          return $collapsible$$2_locator$$22$$;
        default:
          return null;
      }
      return $$$$28$$($collapsible$$2_locator$$22$$).ojCollapsible("getNodeBySubId", {$subId$:$subId$$16$$});
    }});
  })();
});
