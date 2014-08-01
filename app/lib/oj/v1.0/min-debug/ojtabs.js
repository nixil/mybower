/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojconveyorbelt"], function($oj$$32$$, $$$$32$$) {
  (function() {
    var $_arMenuCmdMap$$1$$ = {cut:"ojtabscut", "paste-before":"ojtabspastebefore", "paste-after":"ojtabspasteafter"};
    $oj$$32$$.$__registerWidget$("oj.ojTabs", $$$$32$$.oj.baseComponent, {widgetEventPrefix:"oj", delay:300, options:{selected:0, disabled:!1, truncation:"auto", selectOn:"click", orientation:"horizontal", removable:!1, removeCueText:"Removable", reorderable:!1, beforeSelect:null, select:null, beforeDeselect:null, deselect:null, beforeRemove:null, remove:null, optionChange:null}, _ComponentCreate:function() {
      var $self$$111$$ = this, $options$$306$$ = this.options;
      this._super();
      this.$running$ = !1;
      this.$_setupOrientation$($options$$306$$.orientation);
      this.$_processTabs$();
      if (Array.isArray($options$$306$$.disabled)) {
        var $disabledTabs_initialSelected$$ = this.$tabs$.filter(".oj-disabled");
        $options$$306$$.disabled = $$$$32$$.unique($options$$306$$.disabled.concat($$$$32$$.map($disabledTabs_initialSelected$$, function($li$$1$$) {
          return $self$$111$$.$tabs$.index($li$$1$$);
        }))).sort();
      }
      $disabledTabs_initialSelected$$ = $options$$306$$.selected;
      $options$$306$$.selected = void 0;
      this.$_menu$ = {};
      this.$_menu$.$usermenu$ = !1;
      this.$_menu$.$$container$ = !1;
      this.$_menu$.$$elemPasteBefore$ = !1;
      this.$_menu$.$$elemPasteAfter$ = !1;
      this.$_initMenu$();
      this.$_applyMenu$();
      this.$_refresh$();
      $disabledTabs_initialSelected$$ = this.$_getPanelId$($disabledTabs_initialSelected$$);
      void 0 === $disabledTabs_initialSelected$$ && ($disabledTabs_initialSelected$$ = this.$_indexToId$(0));
      $options$$306$$.selected = $disabledTabs_initialSelected$$;
    }, _init:function() {
      this.$_fireSelectEvents$(this.options.selected);
    }, $_fireSelectEvents$:function($selected$$22$$) {
      this.$_isTabDisabled$($selected$$22$$) && (this.options.selected = this.$_getNextEnabledTab$($selected$$22$$));
      this.$_activate$(this.options.selected);
    }, $_showContextMenu$:function($menu$$17$$, $event$$345$$) {
      $menu$$17$$.show($event$$345$$, {launcher:this.$_getTabBar$().children("[tabindex\x3d0]"), focus:"menu"});
    }, $_tabKeydown$:function($event$$346$$) {
      var $anchor_focusedTab$$ = $$$$32$$(this.document[0].activeElement).closest("li"), $selectedIndex$$ = this.$tabs$.index($anchor_focusedTab$$), $goingForward$$ = !0;
      if (!this.$_handlePageNav$($event$$346$$)) {
        switch($event$$346$$.keyCode) {
          case $$$$32$$.ui.keyCode.RIGHT:
          ;
          case $$$$32$$.ui.keyCode.DOWN:
            $selectedIndex$$++;
            break;
          case $$$$32$$.ui.keyCode.UP:
          ;
          case $$$$32$$.ui.keyCode.LEFT:
            $goingForward$$ = !1;
            $selectedIndex$$--;
            break;
          case $$$$32$$.ui.keyCode.END:
            $selectedIndex$$ = this.$tabs$.length - 1;
            break;
          case $$$$32$$.ui.keyCode.HOME:
            $selectedIndex$$ = 0;
            break;
          case 46:
            if ($anchor_focusedTab$$ = this.$active$.find(".oj-tabs-close-icon")) {
              $event$$346$$.preventDefault(), this.$_removeTabHandler$({target:$anchor_focusedTab$$, currentTarget:$anchor_focusedTab$$, preventDefault:$$$$32$$.noop});
            }
            return;
          default:
            return;
        }
        $event$$346$$.preventDefault();
        clearTimeout(this.$activating$);
        var $panelId$$ = this.$_focusNextTab$($selectedIndex$$, $goingForward$$);
        $event$$346$$.ctrlKey || ($anchor_focusedTab$$.attr("aria-selected", "false"), this.$_getTabByPanelId$($panelId$$).attr("aria-selected", "true"), this.$activating$ = this._delay(function() {
          this.option("selected", $panelId$$);
        }, this.delay));
      }
    }, $_panelKeydown$:function($event$$347$$) {
      !this.$_handlePageNav$($event$$347$$) && $event$$347$$.ctrlKey && $event$$347$$.keyCode === $$$$32$$.ui.keyCode.UP && ($event$$347$$.preventDefault(), this.$active$.focus());
    }, $_handlePageNav$:function($event$$348$$) {
      var $selectedIndex$$1$$ = this.$_idToIndex$(this.options.selected);
      if ($event$$348$$.ctrlKey && $event$$348$$.keyCode === $$$$32$$.ui.keyCode.PAGE_UP) {
        return this.$_activate$(this.$_focusNextTab$($selectedIndex$$1$$ - 1, !1)), !0;
      }
      if ($event$$348$$.ctrlKey && $event$$348$$.keyCode === $$$$32$$.ui.keyCode.PAGE_DOWN) {
        return this.$_activate$(this.$_focusNextTab$($selectedIndex$$1$$ + 1, !0)), !0;
      }
    }, $_isTabDisabled$:function($index$$187$$) {
      return-1 != $$$$32$$.inArray($index$$187$$, this.options.disabled);
    }, $_findNextTab$:function($index$$188$$, $goingForward$$1$$) {
      function $constrain$$() {
        $index$$188$$ > $lastTabIndex$$ && ($index$$188$$ = 0);
        0 > $index$$188$$ && ($index$$188$$ = $lastTabIndex$$);
        return $index$$188$$;
      }
      for (var $lastTabIndex$$ = this.$tabs$.length - 1;this.$_isTabDisabled$($constrain$$());) {
        $index$$188$$ = $goingForward$$1$$ ? $index$$188$$ + 1 : $index$$188$$ - 1;
      }
      return $index$$188$$;
    }, $_focusNextTab$:function($index$$189$$, $goingForward$$2$$) {
      $index$$189$$ = this.$_findNextTab$($index$$189$$, $goingForward$$2$$);
      this.$_getTab$($index$$189$$).focus();
      return this.$_indexToId$($index$$189$$);
    }, $_getNextEnabledTab$:function($index$$190_panelId$$1$$) {
      $index$$190_panelId$$1$$ = this.$_idToIndex$($index$$190_panelId$$1$$);
      for (var $next$$4$$ = $index$$190_panelId$$1$$ + 1, $lastTabIndex$$1$$ = this.$tabs$.length - 1;$next$$4$$ <= $lastTabIndex$$1$$;) {
        if (!this.$_isTabDisabled$($next$$4$$)) {
          return this.$_indexToId$($next$$4$$);
        }
        $next$$4$$++;
      }
      for ($next$$4$$ = $index$$190_panelId$$1$$ - 1;0 <= $next$$4$$;) {
        if (!this.$_isTabDisabled$($next$$4$$)) {
          return this.$_indexToId$($next$$4$$);
        }
        $next$$4$$--;
      }
    }, _setOption:function($key$$103$$, $value$$205$$, $flags$$35$$) {
      "selected" === $key$$103$$ ? ($value$$205$$ = this.$_getPanelId$($value$$205$$), void 0 !== $value$$205$$ && this.$_activate$($value$$205$$)) : "disabled" === $key$$103$$ ? (this.$_setupDisabled$($value$$205$$), this.refresh()) : "removable" === $key$$103$$ ? this.$_setRemovable$($value$$205$$) : "reorderable" === $key$$103$$ ? $value$$205$$ !== this.options.reorderable && (this.options.reorderable = $value$$205$$, this.$_setupReorder$()) : "orientation" === $key$$103$$ ? (this.$_setupOrientation$($value$$205$$), 
      this.refresh()) : ("contextMenu" === $key$$103$$ && (this.$_clearMenu$(), $value$$205$$ && this.$_initMenu$($value$$205$$)), this._super($key$$103$$, $value$$205$$, $flags$$35$$), "selectOn" === $key$$103$$ && (this.$_tearDownEvents$(), this._super($key$$103$$, $value$$205$$), this.$_setupEvents$()));
    }, refresh:function() {
      this._super();
      this.$_destroyCloseIcons$();
      this.$_processTabs$();
      this.$_refresh$();
    }, $_refresh$:function() {
      var $options$$307$$ = this.options;
      this.$active$ = this.$tabs$.length && void 0 !== $options$$307$$.selected ? this.$_getTabByPanelId$($options$$307$$.selected) : $$$$32$$();
      this.$_setupDisabled$($options$$307$$.disabled);
      this.$_createCloseIcons$();
      this.$_tearDownEvents$();
      this.$_setupEvents$();
      this.$tabs$.not(this.$active$).attr({"aria-selected":"false", tabIndex:"-1"});
      this.$panels$.not(this.$_getPanelForTab$(this.$active$)).hide().attr({"aria-expanded":"false", "aria-hidden":"true"});
      this.$active$.length ? (this.$active$.addClass("oj-selected").attr({"aria-selected":"true", tabIndex:"0"}), this.$_getPanelForTab$(this.$active$).show().attr({"aria-expanded":"true", "aria-hidden":"false"})) : this.$_getTab$(0).attr("tabIndex", "0");
      void 0 !== this.$_initialActivate$ && (this.$_fireSelectEvents$(this.$_initialActivate$), this.$_initialActivate$ = void 0);
      "horizontal" == $options$$307$$.orientation && (this.$_truncateBeforeOverflow$(), this.$_addConveyor$());
      this.$_setupReorder$();
    }, $_addConveyor$:function() {
      if ("horizontal" == this.options.orientation) {
        var $tabsId$$ = this.$tablist$.uniqueId().attr("id"), $conveyorDiv$$ = this.$_getTabbarWrapper$().wrap("\x3cdiv\x3e").parent();
        $conveyorDiv$$.uniqueId().attr("id");
        $conveyorDiv$$.addClass("oj-tabs-conveyorbelt");
        this.$conveyor$ = $conveyorDiv$$.ojConveyorBelt({orientation:"horizontal", contentParent:"#" + $tabsId$$});
      }
    }, $_processTabs$:function() {
      var $self$$112$$ = this;
      this.$_destroyTabBar$();
      this.$tablist$ = $$$$32$$("\x3cul\x3e").addClass("oj-tabs-nav oj-helper-clearfix").attr("role", "tablist").prependTo(this.element);
      this.$tabs$ = $$$$32$$();
      this.$panels$ = $$$$32$$();
      this.$titles$ = $$$$32$$();
      this.element.children(":not(.oj-tabs-nav)").each(function($index$$191$$) {
        var $anchorId_header$$8$$ = $$$$32$$(this).find("\x3e :first-child"), $chd_headerClone_panel$$ = $anchorId_header$$8$$.clone();
        $chd_headerClone_panel$$.addClass("oj-tabs-title").css({display:""}).attr({"aria-hidden":"false"});
        $self$$112$$.$titles$ = $self$$112$$.$titles$.add($chd_headerClone_panel$$);
        var $anchor$$1_originalAriaControls$$ = $chd_headerClone_panel$$.wrap("\x3cli\x3e\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e\x3c/li\x3e").parent();
        $anchor$$1_originalAriaControls$$.addClass("oj-tabs-anchor").attr({role:"presentation", tabIndex:"-1"});
        var $tab$$ = $anchor$$1_originalAriaControls$$.parent().addClass("oj-tabs-tab-content").parent().addClass("oj-tabs-default").attr({role:"tab", "aria-hidden":"false", tabIndex:"-1"});
        $tab$$.appendTo($self$$112$$.$tablist$);
        $self$$112$$.$tabs$ = $self$$112$$.$tabs$.add($tab$$);
        $chd_headerClone_panel$$ = $chd_headerClone_panel$$[0];
        $chd_headerClone_panel$$.id && $self$$112$$.$_addPrefixId$($chd_headerClone_panel$$);
        $anchorId_header$$8$$.find("[id]").each(function() {
          $self$$112$$.$_addPrefixId$(this);
        });
        $anchorId_header$$8$$.hide().attr({"aria-hidden":"true"});
        $anchorId_header$$8$$ = $anchor$$1_originalAriaControls$$.uniqueId().attr("id");
        $anchor$$1_originalAriaControls$$ = $tab$$.attr("aria-controls");
        $chd_headerClone_panel$$ = $$$$32$$(this);
        $chd_headerClone_panel$$.hasClass("oj-disabled") && $self$$112$$.disable($index$$191$$);
        $anchor$$1_originalAriaControls$$ && $tab$$.data("oj-tabs-aria-controls", $anchor$$1_originalAriaControls$$);
        $tab$$.attr({"aria-controls":$chd_headerClone_panel$$.uniqueId().attr("id"), "aria-labelledby":$anchorId_header$$8$$});
        $self$$112$$.$panels$ = $self$$112$$.$panels$.add($chd_headerClone_panel$$);
        $chd_headerClone_panel$$.attr("aria-labelledby", $anchorId_header$$8$$);
      });
      if ("vertical" == this.options.orientation) {
        var $maxTabWidth$$ = 0, $sumTabHeight$$ = 0;
        this.$tabs$.addClass("oj-selected").each(function() {
          var $tab$$1$$ = $$$$32$$(this);
          $maxTabWidth$$ = Math.max($maxTabWidth$$, $tab$$1$$.width());
          $sumTabHeight$$ += $tab$$1$$.outerHeight(!0);
        }).removeClass("oj-selected");
        this.options.removable && ($maxTabWidth$$ += 28);
        this.$tabs$.css({width:$maxTabWidth$$ + "px"});
        var $outerWidth$$ = this.$tablist$.outerWidth(!0);
        "rtl" == this.$_GetReadingDirection$() ? this.$panels$.css({"margin-right":$outerWidth$$ - 1 + "px", "min-height":$sumTabHeight$$ + "px"}) : this.$panels$.css({"margin-left":$outerWidth$$ - 1 + "px", "min-height":$sumTabHeight$$ + "px"});
      }
      this.$panels$.addClass("oj-tabs-panel").attr("role", "tabpanel");
    }, $_setupDisabled$:function($disabled$$4$$) {
      Array.isArray($disabled$$4$$) && ($disabled$$4$$.length ? $disabled$$4$$.length === this.$tabs$.length && ($disabled$$4$$ = !0) : $disabled$$4$$ = !1);
      var $self$$113$$ = this;
      this.options.disabled = $disabled$$4$$;
      this.$tabs$.each(function($index$$192$$) {
        !0 === $disabled$$4$$ || $self$$113$$.$_isTabDisabled$($index$$192$$) ? $$$$32$$(this).addClass("oj-disabled").attr("aria-disabled", "true") : $$$$32$$(this).removeClass("oj-disabled").removeAttr("aria-disabled");
      });
    }, $_setupEvents$:function() {
      this.element.on("mousedown" + this.eventNamespace, ".oj-tabs-nav \x3e li", function($event$$350$$) {
        $$$$32$$(this).is(".oj-disabled") && $event$$350$$.preventDefault();
      });
      var $events$$4$$ = {keydown:this.$_tabKeydown$}, $enabledTabs_event$$349$$ = this.options.selectOn;
      if ($enabledTabs_event$$349$$) {
        var $self$$114$$ = this;
        $$$$32$$.each($enabledTabs_event$$349$$.split(" "), function($index$$193$$, $eventName$$2$$) {
          $events$$4$$[$eventName$$2$$] = $self$$114$$.$_eventHandler$;
        });
      }
      $enabledTabs_event$$349$$ = this.$tabs$.not(".oj-disabled");
      this._on($enabledTabs_event$$349$$, $events$$4$$);
      this._on(this.$panels$, {keydown:this.$_panelKeydown$});
      if (this.options.removable) {
        var $revents$$ = {click:this.$_removeTabHandler$};
        this._on($enabledTabs_event$$349$$.find(".oj-tabs-close-icon"), $revents$$);
      }
      this._focusable($enabledTabs_event$$349$$);
      this._hoverable($enabledTabs_event$$349$$);
      this.$_activeable$($enabledTabs_event$$349$$);
    }, $_tearDownEvents$:function() {
      var $enabledTabs$$1$$ = this.$tabs$.not(".oj-disabled");
      this._off($enabledTabs$$1$$);
      this._off(this.$panels$);
      this.element.off("mousedown" + this.eventNamespace);
    }, $_eventHandler$:function($event$$351$$) {
      var $options$$308$$ = this.options, $active_eventData$$12$$ = this.$active$, $tab$$2$$ = $$$$32$$($event$$351$$.currentTarget).closest("li"), $clickedIsActive$$ = $active_eventData$$12$$ && $tab$$2$$[0] === $active_eventData$$12$$[0], $oToContent$$ = this.$_getPanelForTab$($tab$$2$$), $active_eventData$$12$$ = {fromTab:$active_eventData$$12$$ && $active_eventData$$12$$.length ? this.$_getPanelForTab$($active_eventData$$12$$) : $$$$32$$(), toTab:$oToContent$$};
      $event$$351$$.preventDefault();
      $tab$$2$$.hasClass("oj-disabled") || this.$running$ || $clickedIsActive$$ || !1 === this._trigger("beforeDeselect", $event$$351$$, $active_eventData$$12$$) || !1 === this._trigger("beforeSelect", $event$$351$$, $active_eventData$$12$$) || ($options$$308$$.selected = $oToContent$$.attr("id"), this.$active$ = $tab$$2$$, $active_eventData$$12$$.fromTab.length || $active_eventData$$12$$.toTab.length || $$$$32$$.error("ojTabs: Mismatching fragment identifier."), this.$_toggle$($event$$351$$, $active_eventData$$12$$));
    }, $_toggle$:function($event$$352$$, $eventData$$13$$) {
      var $toShow$$ = $eventData$$13$$.toTab, $toHide$$ = $eventData$$13$$.fromTab, $fromId$$, $toId$$;
      $eventData$$13$$ && ($toHide$$ && ($fromId$$ = $toHide$$.attr("id")), $toShow$$ && ($toId$$ = $toShow$$.attr("id")));
      this.$running$ = !0;
      var $fromTab$$ = this.$_getTabByPanelId$($fromId$$).removeClass("oj-selected");
      $toHide$$.hide();
      this.$_getTabByPanelId$($toId$$).addClass("oj-selected");
      $toShow$$.show();
      this.$running$ = !1;
      this._trigger("deselect", $event$$352$$, $eventData$$13$$);
      this._trigger("select", $event$$352$$, $eventData$$13$$);
      this.$_fireOptionChange$("selected", $fromId$$, $toId$$, $event$$352$$ ? !0 : !1);
      $toHide$$.attr({"aria-expanded":"false", "aria-hidden":"true"});
      $fromTab$$.attr("aria-selected", "false");
      $toShow$$.length && $toHide$$.length ? $fromTab$$.attr("tabIndex", "-1") : $toShow$$.length && this.$tabs$.filter(function() {
        return "0" === $$$$32$$(this).attr("tabIndex");
      }).attr("tabIndex", "-1");
      $toShow$$.attr({"aria-expanded":"true", "aria-hidden":"false"});
      this.$_getTabByPanelId$($toId$$).attr({"aria-selected":"true", tabIndex:"0"});
    }, $_activate$:function($active$$1_anchor$$2_panelId$$2$$) {
      void 0 !== $active$$1_anchor$$2_panelId$$2$$ && ($active$$1_anchor$$2_panelId$$2$$ = this.$_getTabByPanelId$($active$$1_anchor$$2_panelId$$2$$), this.$active$ && $active$$1_anchor$$2_panelId$$2$$[0] === this.$active$[0] || ($active$$1_anchor$$2_panelId$$2$$ = $active$$1_anchor$$2_panelId$$2$$.find(".oj-tabs-anchor")[0], this.$_eventHandler$({target:$active$$1_anchor$$2_panelId$$2$$, currentTarget:$active$$1_anchor$$2_panelId$$2$$, preventDefault:$$$$32$$.noop})));
    }, $_createCloseIcons$:function() {
      if (this.options.removable) {
        var $removeCueText$$ = this.$getTranslatedString$("removeCueText");
        this.$tabs$.not(".oj-disabled").each(function($index$$194_rmId$$) {
          var $div$$6$$ = $$$$32$$(this).find("\x3e :first-child");
          $index$$194_rmId$$ = "ojtabs-id_rm_" + $index$$194_rmId$$;
          $$$$32$$(this).attr("aria-describedby", $index$$194_rmId$$);
          $$$$32$$("\x3ca href\x3d'#'\x3e").addClass("oj-tabs-icon oj-component-icon oj-clickable-icon oj-tabs-close-icon").attr({id:$index$$194_rmId$$, tabIndex:"-1", "aria-label":$removeCueText$$, role:"presentation"}).appendTo($div$$6$$);
        });
      }
    }, $_destroyCloseIcons$:function() {
      this.$tabs$.find("oj-tabs-close-icon").remove();
    }, $_destroyTabBar$:function() {
      this.$_tabMaxWidthApplied$ = !1;
      this.$_hasResizeListener$ && ($oj$$32$$.$DomUtils$.$removeResizeListener$(this.element[0], $$$$32$$.proxy(this.$_handleResize$, this)), this.$_hasResizeListener$ = !1, this.$_originalWidth$ = void 0);
      this.$conveyor$ ? (this.$conveyor$.ojConveyorBelt("destroy"), this.$conveyor$.remove(), this.$active$ = this.$conveyor$ = null) : this.element.children(".oj-tabs-nav").remove();
    }, _destroy:function() {
      this.$_clearMenu$();
      var $orientation$$2$$ = this.options.orientation;
      "vertical" == $orientation$$2$$ ? this.element.removeClass("oj-tabs-vertical oj-component oj-helper-clearfix") : this.element.removeClass("oj-tabs oj-component ");
      this.$_destroyTabBar$();
      this.$panels$.each(function() {
        $$$$32$$(this).removeAttr("tabIndex").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("role").removeClass("oj-active oj-disabled oj-tabs-panel").css("display", "");
        "vertical" == $orientation$$2$$ && $$$$32$$(this).css("margin-left", "").css("min-height", "");
        $$$$32$$(this).find("\x3e :first-child").css("display", "").removeAttr("aria-hidden");
      });
    }, enable:function($index$$195$$) {
      var $disabled$$5$$ = this.options.disabled;
      !1 !== $disabled$$5$$ && ($disabled$$5$$ = void 0 === $index$$195$$ ? !1 : Array.isArray($disabled$$5$$) ? $$$$32$$.map($disabled$$5$$, function($num$$9$$) {
        return $num$$9$$ !== $index$$195$$ ? $num$$9$$ : null;
      }) : $$$$32$$.map(this.$tabs$, function($li$$2$$, $num$$10$$) {
        return $num$$10$$ !== $index$$195$$ ? $num$$10$$ : null;
      }), this.$_setupDisabled$($disabled$$5$$));
    }, disable:function($index$$196$$) {
      var $disabled$$6$$ = this.options.disabled;
      if (!0 !== $disabled$$6$$) {
        if (void 0 === $index$$196$$) {
          $disabled$$6$$ = !0;
        } else {
          if (this.$_isTabDisabled$($index$$196$$)) {
            return;
          }
          $disabled$$6$$ = Array.isArray($disabled$$6$$) ? $$$$32$$.merge([$index$$196$$], $disabled$$6$$).sort() : [$index$$196$$];
        }
        this.$_setupDisabled$($disabled$$6$$);
      }
    }, $_setRemovable$:function($removable$$) {
      $removable$$ !== this.options.removable && (this.options.removable = $removable$$, this.refresh());
    }, $_removeTabHandler$:function($event$$353$$) {
      var $tab$$3$$ = $$$$32$$($event$$353$$.currentTarget).closest("li"), $panel$$1$$ = this.$_getPanelForTab$($tab$$3$$), $eventData$$14$$ = {tab:$panel$$1$$};
      if ($tab$$3$$ && !1 !== this._trigger("beforeRemove", $event$$353$$, $eventData$$14$$)) {
        var $idxRmTab$$ = this.$tabs$.index($tab$$3$$);
        $tab$$3$$.hasClass("oj-selected") && (this.options.selected = this.$_getNextEnabledTab$($panel$$1$$.attr("id")), this.$_initialActivate$ = this.options.selected);
        if (Array.isArray(this.options.disabled)) {
          for (var $adis$$ = this.options.disabled, $i$$275$$ = $adis$$.length - 1;0 <= $i$$275$$;$i$$275$$--) {
            $idxRmTab$$ == $adis$$[$i$$275$$] ? this.options.disabled = $adis$$ = $adis$$.splice($i$$275$$, 1) : $idxRmTab$$ < $adis$$[$i$$275$$] && ($adis$$[$i$$275$$] -= 1);
          }
        }
        $panel$$1$$.remove();
        $tab$$3$$.remove();
        this.refresh();
        this.$active$.focus();
        this._trigger("remove", $event$$353$$, $eventData$$14$$);
      }
    }, addTab:function($newTab$$) {
      this.element.append($newTab$$);
      var $options$$309$$ = this.options;
      this.refresh();
      void 0 === $options$$309$$.selected && this.$_isTabDisabled$(this.$tabs$.length - 1) && ($options$$309$$.selected = $newTab$$.attr("id"));
      this.$tabs$.last()[0].scrollIntoView(!1);
    }, $_setupReorder$:function() {
      var $tabBar$$ = this.$_getTabBar$();
      if (this.options.reorderable && !0 !== this.options.disabled) {
        var $self$$117$$ = this;
        $tabBar$$.sortable({axis:"horizontal" == $self$$117$$.options.orientation ? "x" : "y", stop:function($event$$354$$, $ui$$27$$) {
          var $mvTab$$ = $ui$$27$$.item;
          $self$$117$$.$_doReorder$($mvTab$$, $mvTab$$.prev());
        }});
      } else {
        $tabBar$$.sortable({disabled:!0});
      }
    }, $_setupOrientation$:function($value$$206$$) {
      $value$$206$$ || ($value$$206$$ = this.options.orientation);
      if ("horizontal" == $value$$206$$) {
        "vertical" == this.options.orientation && this.$panels$ && this.$panels$.each(function() {
          $$$$32$$(this).css("margin-left", "").css("min-height", "");
        }), this.element.addClass("oj-tabs oj-component");
      } else {
        if ("vertical" == $value$$206$$) {
          this.element.addClass("oj-tabs-vertical oj-component oj-helper-clearfix");
        } else {
          return;
        }
      }
      this.options.orientation = $value$$206$$;
    }, $_sanitizeSelector$:function($hash$$1$$) {
      return $hash$$1$$ ? $hash$$1$$.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$\x26") : "";
    }, $_getPanelForTab$:function($id$$36_tab$$4$$) {
      $id$$36_tab$$4$$ = $$$$32$$($id$$36_tab$$4$$).attr("aria-controls");
      return this.element.find(this.$_sanitizeSelector$("#" + $id$$36_tab$$4$$));
    }, $_getTab$:function($index$$197$$) {
      return this.$tabs$.eq($index$$197$$);
    }, $_getTabBar$:function() {
      return this.$conveyor$ ? this.$conveyor$.find(".oj-tabs-nav") : this.element.children(".oj-tabs-nav");
    }, $_getTabbarWrapper$:function() {
      var $ulParent$$ = this.$tablist$.parent();
      $ulParent$$.hasClass("oj-tabs-conveyor") || ($ulParent$$ = this.$tablist$.wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-conveyor"));
      return $ulParent$$;
    }, $_addPrefixId$:function($elem$$45$$) {
      0 > $elem$$45$$.id.indexOf("ojtabs-id_") && $$$$32$$($elem$$45$$).attr("id", "ojtabs-id_" + $elem$$45$$.id);
    }, getNodeBySubId:function($index$$198_locator$$26$$) {
      if (null == $index$$198_locator$$26$$) {
        return this.element ? this.element[0] : null;
      }
      var $subId$$18$$ = $index$$198_locator$$26$$.subId;
      $index$$198_locator$$26$$ = $index$$198_locator$$26$$.index;
      switch($subId$$18$$) {
        case "oj-conveyorbelt":
          return this.$conveyor$ ? this.$conveyor$[0] : null;
        case "oj-tabs-panel":
          return this.$panels$[$index$$198_locator$$26$$];
        case "oj-tabs-title":
          return this.$titles$[$index$$198_locator$$26$$];
        case "oj-tabs-close-icon":
          return this.$_getTab$($index$$198_locator$$26$$).find("." + $subId$$18$$)[0];
      }
      return null;
    }, $_getTabsWidth$:function() {
      return this.element[0].clientWidth;
    }, $_isOverflow$:function() {
      return this.$_originalWidth$ > this.$_getTabsWidth$();
    }, $_isMaxWidthApplied$:function() {
      return this.$_tabMaxWidthApplied$;
    }, $_setMaxWidthApplied$:function($bval$$) {
      this.$_tabMaxWidthApplied$ = $bval$$;
    }, $_getTabMaxWidth$:function() {
      var $max$$8$$ = Math.floor(this.$_getTabsWidth$() / this.$tabs$.length);
      this.options.removable && ($max$$8$$ -= 28);
      return $max$$8$$;
    }, $_applyTabMaxWidth$:function() {
      if (!this.$_tabMaxWidthApplied$) {
        var $maxWidth$$2$$ = this.$_getTabMaxWidth$();
        this.$titles$.each(function() {
          $$$$32$$(this).css("max-width", "" + $maxWidth$$2$$ + "px").addClass("oj-tabs-title-overflow");
        });
        this.$_setMaxWidthApplied$(!0);
      }
    }, $_removeTabMaxWidth$:function() {
      this.$_tabMaxWidthApplied$ && (this.$titles$.each(function() {
        $$$$32$$(this).css("max-width", "").removeClass("oj-tabs-title-overflow");
      }), this.$_setMaxWidthApplied$(!1));
    }, $_logMessage$:function() {
    }, $_handleResize$:function() {
      this.$_isOverflow$() ? this.$_applyTabMaxWidth$() : this.$_removeTabMaxWidth$();
    }, $_isProgressive$:function() {
      return "auto" == this.options.truncation || "progressive" == this.options.truncation;
    }, $_truncateBeforeOverflow$:function() {
      "horizontal" == this.options.orientation && 0 < this.$tabs$.length && this.$_isProgressive$() && ($oj$$32$$.$DomUtils$.$addResizeListener$(this.element[0], $$$$32$$.proxy(this.$_handleResize$, this)), this.$_hasResizeListener$ = !0, this.$_originalWidth$ = this.$_getTabbarWrapper$()[0].scrollWidth, this.$_isOverflow$() && this.$_applyTabMaxWidth$());
    }, $_fireOptionChange$:function($key$$104$$, $previousValue$$7$$, $value$$207$$, $originalEvent$$5$$) {
      this._trigger("optionChange", $originalEvent$$5$$, {option:$key$$104$$, previousValue:$previousValue$$7$$, value:$value$$207$$, optionMetadata:{writeback:$originalEvent$$5$$ ? "shouldWrite" : "shouldNotWrite"}});
    }, $_handleContextMenuBeforeShow$:function($disabledState$$1_e$$120$$) {
      this.$_menu$.tab = "keydown" === $disabledState$$1_e$$120$$.originalEvent.originalEvent.type ? this.$active$ : $$$$32$$($disabledState$$1_e$$120$$.originalEvent.target).closest("li");
      this.$_menu$.$tabId$ = this.$_menu$.tab.attr("id");
      this.$_menu$.$$container$.ojMenu("option", "menuPosition", {my:"left top", at:"left bottom", of:this.$_menu$.tab[0]});
      this.$_menu$.$usermenu$ && (this.$_menu$.$$elemPasteBefore$ || this.$_menu$.$$elemPasteAfter$) && ($disabledState$$1_e$$120$$ = !this.$_menu$.$cutTab$, this.$_menu$.$$elemPasteBefore$.hasClass("oj-disabled") != $disabledState$$1_e$$120$$ && ($disabledState$$1_e$$120$$ ? (this.$_menu$.$$elemPasteBefore$.addClass("oj-disabled"), this.$_menu$.$$elemPasteAfter$.addClass("oj-disabled")) : (this.$_menu$.$$elemPasteBefore$.removeClass("oj-disabled"), this.$_menu$.$$elemPasteAfter$.removeClass("oj-disabled")), 
      this.$_menu$.$$container$.ojMenu("refresh")));
    }, $_buildContextMenuItem$:function($cmd$$4_label$$6$$) {
      var $id$$37$$ = $_arMenuCmdMap$$1$$[$cmd$$4_label$$6$$];
      $cmd$$4_label$$6$$ = '\x3ca href\x3d"#"\x3e' + this.$getTranslatedString$($cmd$$4_label$$6$$) + "\x3c/a\x3e";
      return $$$$32$$("\x3cli id\x3d" + $id$$37$$ + "\x3e" + $cmd$$4_label$$6$$ + "\x3c/li\x3e");
    }, $_menu_cut$:function($obj$$105$$) {
      if (!$obj$$105$$ || !$obj$$105$$.length) {
        return!1;
      }
      this.$_menu$.$cutTab$ = $obj$$105$$;
    }, $_menu_paste$:function($obj$$106$$, $pasteBefore$$) {
      if (!$obj$$106$$ || !$obj$$106$$.length || !this.$_menu$.$cutTab$) {
        return!1;
      }
      var $mvTab$$1$$ = this.$_menu$.$cutTab$;
      this.$_menu$.$cutTab$ = !1;
      this.$_doReorder$($mvTab$$1$$, $obj$$106$$, $pasteBefore$$);
    }, $_handleContextMenuSelect$:function($ev$$5$$, $ui$$30$$) {
      var $id$$38$$ = $ui$$30$$ ? $ui$$30$$.item.attr("id") : void 0;
      "ojtabscut" === $id$$38$$ ? this.$_menu_cut$(this.$_menu$.tab) : "ojtabspastebefore" === $id$$38$$ ? this.$_menu_paste$(this.$_menu$.tab, !0) : "ojtabspasteafter" === $id$$38$$ && this.$_menu_paste$(this.$_menu$.tab, !1);
    }, $_initMenu$:function($newVal$$1$$) {
      var $$m$$1_menu$$18$$, $dm$$1_t$$20$$;
      $newVal$$1$$ || this.options.contextMenu || ($$m$$1_menu$$18$$ = this.element.attr("contextmenu")) && (this.options.contextMenu = "#" + $$m$$1_menu$$18$$);
      if ($newVal$$1$$ || this.options.contextMenu) {
        $$m$$1_menu$$18$$ = $newVal$$1$$ || this.options.contextMenu;
        $dm$$1_t$$20$$ = $$$$32$$.type($$m$$1_menu$$18$$);
        if ("function" == $dm$$1_t$$20$$) {
          try {
            $$m$$1_menu$$18$$ = $$m$$1_menu$$18$$();
          } catch ($e$$121$$) {
            $$m$$1_menu$$18$$ = null;
          }
          $dm$$1_t$$20$$ = $$$$32$$.type($$m$$1_menu$$18$$);
        }
        if ("string" === $dm$$1_t$$20$$) {
          if ($$m$$1_menu$$18$$ = $$$$32$$($$m$$1_menu$$18$$)) {
            $$m$$1_menu$$18$$.css("display", "none");
            $dm$$1_t$$20$$ = this.$_menu$;
            if (!$dm$$1_t$$20$$) {
              return;
            }
            $dm$$1_t$$20$$.$$container$ = $$m$$1_menu$$18$$;
            $dm$$1_t$$20$$.$usermenu$ = !0;
          }
          this.$_menu$.$usermenu$ && $newVal$$1$$ && this.$_applyMenu$();
        }
      }
    }, $_applyMenu$:function() {
      if (this.$_menu$ && this.$_menu$.$usermenu$ && this.options.reorderable) {
        var $$menuContainer$$1$$ = this.$_menu$.$$container$, $self$$118$$ = this;
        $$menuContainer$$1$$.on("ojselect", $$$$32$$.proxy(this.$_handleContextMenuSelect$, this));
        $$menuContainer$$1$$.on("ojbeforeshow", $$$$32$$.proxy(this.$_handleContextMenuBeforeShow$, this));
        var $bChanged$$1$$ = !1;
        $$menuContainer$$1$$.find("[data-oj-command]").each(function() {
          if (0 === $$$$32$$(this).children("a").length) {
            var $command$$11$$ = $$$$32$$(this).attr("data-oj-command").slice(8);
            $$$$32$$(this).replaceWith($self$$118$$.$_buildContextMenuItem$($command$$11$$));
            $$$$32$$(this).addClass("oj-menu-item");
            $bChanged$$1$$ = !0;
          }
        });
        $bChanged$$1$$ && $$menuContainer$$1$$.ojMenu("refresh");
        this.$_menu$.$$elemPasteBefore$ = $$menuContainer$$1$$.find("#ojtabspastebefore");
        this.$_menu$.$$elemPasteAfter$ = $$menuContainer$$1$$.find("#ojtabspasteafter");
      }
    }, $_clearMenu$:function() {
      var $menu$$19$$ = this.$_menu$;
      $menu$$19$$ && $menu$$19$$.$usermenu$ && ($menu$$19$$.$usermenu$ = !1, $menu$$19$$.$$container$.off("ojselect"), $menu$$19$$.$$container$.off("beforeshow"), $menu$$19$$.$$container$ = null);
    }, $_doReorder$:function($mvContent_mvTab$$2$$, $prevTab$$, $pasteBefore$$1$$) {
      if (!this.$_isTabDisabled$($mvContent_mvTab$$2$$.index())) {
        $mvContent_mvTab$$2$$ = this.$_getPanelForTab$($mvContent_mvTab$$2$$);
        var $tabBar$$1$$ = this.$_getTabBar$();
        $prevTab$$.length ? $pasteBefore$$1$$ ? this.$_getPanelForTab$($prevTab$$).before($mvContent_mvTab$$2$$) : this.$_getPanelForTab$($prevTab$$).after($mvContent_mvTab$$2$$) : 0 < this.$panels$.length && this.$panels$.first().before($mvContent_mvTab$$2$$);
        var $arr$$23$$ = [];
        $tabBar$$1$$.children(".oj-disabled").each(function() {
          $arr$$23$$.push($$$$32$$(this).index());
        });
        this.options.disabled = $arr$$23$$;
        this.refresh();
      }
    }, $_getTabByPanelId$:function($panelId$$3$$) {
      return this.$_getTab$(this.$_idToIndex$($panelId$$3$$));
    }, $_getPanelId$:function($idOrIndex$$) {
      if ("number" === typeof $idOrIndex$$) {
        if (0 <= $idOrIndex$$ && $idOrIndex$$ < this.$panels$.length) {
          return this.$_indexToId$($idOrIndex$$);
        }
      } else {
        if ("string" === typeof $idOrIndex$$ && -1 != this.$_idToIndex$($idOrIndex$$)) {
          return $idOrIndex$$;
        }
      }
    }, $_indexToId$:function($index$$201$$) {
      return this.$panels$.eq($index$$201$$).attr("id");
    }, $_idToIndex$:function($id$$39$$) {
      return this.$panels$.index($$$$32$$("#" + $id$$39$$));
    }});
  })();
});
