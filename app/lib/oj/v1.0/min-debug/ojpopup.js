define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$41$$, $$$$39$$) {
  (function() {
    var $_TAIL_STYLES$$ = "oj-left oj-center oj-right oj-top oj-middle oj-bottom".split(" "), $_TAIL_ALIGN_RULES$$ = {"right-top":"oj-right oj-top", "right-middle":"oj-right oj-middle", "right-bottom":"oj-right oj-bottom", "left-top":"oj-left oj-top", "left-middle":"oj-left oj-middle", "left-bottom":"oj-left oj-bottom", "center-top":"oj-center oj-top", "center-middle":"oj-left oj-middle", "center-bottom":"oj-center oj-bottom"};
    $oj$$41$$.$__registerWidget$("oj.ojPopup", $$$$39$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{autoDismiss:"focusLoss", chrome:"default", initialFocus:"none", position:{my:"start top", at:"start bottom", of:"", collision:"flip"}, tail:"none", beforeOpen:null, open:null, beforeClose:null, close:null, focus:null}, _ComponentCreate:function() {
      this._super();
      var $rootElement$$ = $$$$39$$("\x3cdiv\x3e");
      this.$_rootElement$ = $rootElement$$.hide().addClass("oj-popup").attr("aria-hidden", "true");
      $rootElement$$.addClass("oj-helper-reset-inheritable oj-component");
      var $content$$27$$ = $$$$39$$("\x3cdiv\x3e").addClass("oj-popup-content");
      $content$$27$$.appendTo($rootElement$$);
      this.element.after($rootElement$$);
      this.element.appendTo($content$$27$$);
      this.element.show();
      this.$_createTail$();
      this.$_setChrome$();
      this.$_createLiveRegion$();
      this.$_usingCallback$ = $$$$39$$.proxy(this.$_usingHandler$, this);
    }, _destroy:function() {
      this._super();
      this.isOpen() && this.close();
      this.$_destroyTail$();
      this.$_destroyLiveRegion$();
      delete this.$_usingCallback$;
      this.$_rootElement$.replaceWith(this.element);
      this.element.hide();
    }, widget:function() {
      return this.$_rootElement$;
    }, open:function($launcher$$10$$, $position$$18$$) {
      if (this.isOpen() && (this.close(), this.isOpen())) {
        return;
      }
      this.$_setLauncher$($launcher$$10$$);
      var $message$$35_rootElement$$1$$ = this.$_rootElement$;
      $launcher$$10$$ = this.$_launcher$;
      $oj$$41$$.$Assert$.$assertPrototype$($message$$35_rootElement$$1$$, jQuery);
      $oj$$41$$.$Assert$.$assertPrototype$($launcher$$10$$, jQuery);
      $oj$$41$$.$StringUtils$.$isEmptyOrUndefined$($message$$35_rootElement$$1$$.attr("id")) && $message$$35_rootElement$$1$$.uniqueId();
      if (!1 !== this._trigger("beforeOpen")) {
        this.$_setPosition$($position$$18$$);
        var $options$$323$$ = this.options;
        this.$_setAutoDismiss$($options$$323$$.autoDismiss);
        this._on(!0, $$$$39$$(window), {resize:this.$_resizeHandler$});
        this._on(!0, $message$$35_rootElement$$1$$, {keydown:this.$_keydownHandler$});
        this._on(!0, $launcher$$10$$, {keydown:this.$_keydownHandler$});
        this.$_addDescribedBy$();
        $message$$35_rootElement$$1$$.removeAttr("aria-hidden");
        $message$$35_rootElement$$1$$.attr("role", "tooltip");
        $position$$18$$ = $options$$323$$.position;
        $message$$35_rootElement$$1$$.show();
        var $isRtl$$2$$ = "rtl" === this.$_GetReadingDirection$();
        $message$$35_rootElement$$1$$.position($oj$$41$$.$PositionUtils$.$normalizeHorizontalAlignment$($position$$18$$, $isRtl$$2$$));
        this._trigger("open");
        this.$_intialFocus$();
        $message$$35_rootElement$$1$$ = this.$getTranslatedString$("none" === $options$$323$$.initialFocus ? "ariaLiveRegionInitialFocusNone" : "ariaLiveRegionInitialFocusFirstFocusable");
        this.$_announceLiveRegion$($message$$35_rootElement$$1$$);
      }
    }, close:function() {
      if (this.isOpen() && !1 !== this._trigger("beforeClose")) {
        this.$_restoreFocus$();
        var $launcher$$11_position$$19$$ = this.$_launcher$, $rootElement$$2$$ = this.$_rootElement$;
        $oj$$41$$.$Assert$.$assertPrototype$($rootElement$$2$$, jQuery);
        $oj$$41$$.$Assert$.$assertPrototype$($launcher$$11_position$$19$$, jQuery);
        $rootElement$$2$$.hide();
        $rootElement$$2$$.attr("aria-hidden", "true");
        this.$_removeDescribedBy$();
        this.$_setAutoDismiss$();
        this._off($$$$39$$(window), "resize");
        this._off($rootElement$$2$$, "keydown");
        this._off($launcher$$11_position$$19$$, "keydown");
        delete this.$_launcher$;
        $launcher$$11_position$$19$$ = this.options.position;
        $launcher$$11_position$$19$$._ofo && (delete $launcher$$11_position$$19$$._ofo, delete $launcher$$11_position$$19$$.of);
        this.$_announceLiveRegion$(null);
        this._trigger("close");
      }
    }, isOpen:function() {
      return this.$_rootElement$.is(":visible");
    }, _setOption:function($key$$112$$, $value$$222$$) {
      var $options$$324$$ = this.options;
      switch($key$$112$$) {
        case "tail":
          $value$$222$$ !== $options$$324$$.tail && this.$_setTail$($value$$222$$);
          break;
        case "chrome":
          $value$$222$$ !== $options$$324$$.chrome && this.$_setChrome$($value$$222$$);
          break;
        case "position":
          this.$_setPosition$($value$$222$$);
          this.isOpen() && this.$_resizeHandler$();
          return;
        case "autoDismiss":
          this.isOpen() && $value$$222$$ !== $options$$324$$.autoDismiss && this.$_setAutoDismiss$($value$$222$$);
      }
      this._superApply(arguments);
    }, $_getRootStyle$:function() {
      return "oj-popup";
    }, $_setTail$:function($tail$$) {
      this.$_destroyTail$();
      this.$_createTail$($tail$$);
      this.$_resizeHandler$();
    }, $_createTail$:function($tail$$1_tailDecoration_tailStyle$$) {
      $tail$$1_tailDecoration_tailStyle$$ = $tail$$1_tailDecoration_tailStyle$$ ? $tail$$1_tailDecoration_tailStyle$$ : this.options.tail;
      if ("none" !== $tail$$1_tailDecoration_tailStyle$$) {
        $tail$$1_tailDecoration_tailStyle$$ = ["oj-popup-tail", $tail$$1_tailDecoration_tailStyle$$].join("-");
        var $tailDom$$ = $$$$39$$("\x3cdiv\x3e").hide().addClass("oj-popup-tail").addClass($tail$$1_tailDecoration_tailStyle$$);
        this.$_tailId$ = "#" + $tailDom$$.uniqueId().attr("id");
        var $rootElement$$3$$ = this.$_rootElement$;
        $oj$$41$$.$Assert$.$assertPrototype$($rootElement$$3$$, jQuery);
        $tailDom$$.appendTo($rootElement$$3$$);
        $rootElement$$3$$.addClass($tail$$1_tailDecoration_tailStyle$$);
      }
    }, $_getTail$:function() {
      var $tailId$$ = this.$_tailId$;
      return $tailId$$ ? $$$$39$$($tailId$$) : null;
    }, $_destroyTail$:function() {
      var $tail$$2_tailStyle$$1$$ = this.$_getTail$();
      $tail$$2_tailStyle$$1$$ && $tail$$2_tailStyle$$1$$.remove();
      delete this.$_tailId$;
      var $tail$$2_tailStyle$$1$$ = ["oj-popup-tail", this.options.tail].join("-"), $rootElement$$4$$ = this.$_rootElement$;
      $oj$$41$$.$Assert$.$assertPrototype$($rootElement$$4$$, jQuery);
      $rootElement$$4$$.removeClass($tail$$2_tailStyle$$1$$);
    }, $_setChrome$:function($chrome$$1_chromeDecoration$$) {
      $chrome$$1_chromeDecoration$$ = $chrome$$1_chromeDecoration$$ ? $chrome$$1_chromeDecoration$$ : this.options.chrome;
      var $rootElement$$5$$ = this.$_rootElement$;
      $oj$$41$$.$Assert$.$assertPrototype$($rootElement$$5$$, jQuery);
      "default" === $chrome$$1_chromeDecoration$$ && $rootElement$$5$$.hasClass("oj-popup-no-chrome") ? $rootElement$$5$$.removeClass("oj-popup-no-chrome") : "none" !== $chrome$$1_chromeDecoration$$ || $rootElement$$5$$.hasClass("oj-popup-no-chrome") || $rootElement$$5$$.addClass("oj-popup-no-chrome");
    }, $_setLauncher$:function($launcher$$12$$) {
      $launcher$$12$$ ? "string" === $$$$39$$.type($launcher$$12$$) ? $launcher$$12$$ = $$$$39$$($launcher$$12$$) : 1 === $launcher$$12$$.nodeType && ($launcher$$12$$ = $$$$39$$($launcher$$12$$)) : $launcher$$12$$ = $$$$39$$(document.activeElement);
      if ($launcher$$12$$ instanceof jQuery && 1 < $launcher$$12$$.length) {
        var $rootElement$$6$$ = this.$_rootElement$;
        $oj$$41$$.$Assert$.$assertPrototype$($rootElement$$6$$, jQuery);
        for (var $i$$292$$ = 0;$i$$292$$ < $launcher$$12$$.length;$i$$292$$++) {
          var $target$$81$$ = $launcher$$12$$[0];
          if (!$oj$$41$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$6$$[0], $target$$81$$)) {
            $launcher$$12$$ = $$$$39$$($target$$81$$);
            break;
          }
        }
      } else {
        if (!($launcher$$12$$ instanceof jQuery) || $launcher$$12$$ instanceof jQuery && 0 === $launcher$$12$$.length) {
          $launcher$$12$$ = $$$$39$$(document.activeElement);
        }
      }
      $oj$$41$$.$Assert$.$assertPrototype$($launcher$$12$$, jQuery);
      this.$_launcher$ = $launcher$$12$$;
    }, $_setPosition$:function($position$$20$$) {
      var $launcher$$13_options$$325_usingCallback$$ = this.options;
      $position$$20$$ && ($launcher$$13_options$$325_usingCallback$$.position = $$$$39$$.extend($launcher$$13_options$$325_usingCallback$$[$position$$20$$], $position$$20$$));
      $position$$20$$ = $launcher$$13_options$$325_usingCallback$$.position;
      $launcher$$13_options$$325_usingCallback$$ = this.$_usingCallback$;
      $oj$$41$$.$Assert$.$assertFunction$($launcher$$13_options$$325_usingCallback$$);
      $$$$39$$.isFunction($position$$20$$.using) && $position$$20$$.using !== $launcher$$13_options$$325_usingCallback$$ && ($position$$20$$.origUsing = $position$$20$$.using);
      $position$$20$$.using = $launcher$$13_options$$325_usingCallback$$;
      $launcher$$13_options$$325_usingCallback$$ = this.$_launcher$;
      $oj$$41$$.$Assert$.$assertPrototype$($launcher$$13_options$$325_usingCallback$$, jQuery);
      $position$$20$$.of || ($position$$20$$.of = $launcher$$13_options$$325_usingCallback$$, $position$$20$$._ofo = !0);
    }, $_usingHandler$:function($pos$$12$$, $props$$17$$) {
      var $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ = $props$$17$$.element.element;
      $oj$$41$$.$Assert$.$assertPrototype$($leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$, jQuery);
      var $origUsing_tail$$3$$ = this.$_getTail$();
      if ($origUsing_tail$$3$$) {
        $origUsing_tail$$3$$.hide();
        for (var $i$$293_tailHOffset_tailStyle$$2_tailVOffset$$ = 0;$i$$293_tailHOffset_tailStyle$$2_tailVOffset$$ < $_TAIL_STYLES$$.length;$i$$293_tailHOffset_tailStyle$$2_tailVOffset$$++) {
          $origUsing_tail$$3$$.removeClass($_TAIL_STYLES$$[$i$$293_tailHOffset_tailStyle$$2_tailVOffset$$]), $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$.removeClass($_TAIL_STYLES$$[$i$$293_tailHOffset_tailStyle$$2_tailVOffset$$]);
        }
        $origUsing_tail$$3$$.removeAttr("style");
        $i$$293_tailHOffset_tailStyle$$2_tailVOffset$$ = $_TAIL_ALIGN_RULES$$[[$props$$17$$.horizontal, $props$$17$$.vertical].join("-")];
        $oj$$41$$.$Assert$.$assertString$($i$$293_tailHOffset_tailStyle$$2_tailVOffset$$);
        $origUsing_tail$$3$$.addClass($i$$293_tailHOffset_tailStyle$$2_tailVOffset$$);
        $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$.addClass($i$$293_tailHOffset_tailStyle$$2_tailVOffset$$);
        $origUsing_tail$$3$$.show();
        "left" === $props$$17$$.horizontal || "right" === $props$$17$$.horizontal ? ($i$$293_tailHOffset_tailStyle$$2_tailVOffset$$ = ($origUsing_tail$$3$$.outerWidth() - 1) * ("left" === $props$$17$$.horizontal ? 1 : -1), $pos$$12$$.left += $i$$293_tailHOffset_tailStyle$$2_tailVOffset$$) : "center" === $props$$17$$.horizontal && ($i$$293_tailHOffset_tailStyle$$2_tailVOffset$$ = ($origUsing_tail$$3$$.outerHeight() - 1) * ("top" === $props$$17$$.vertical ? 1 : -1), $pos$$12$$.top += $i$$293_tailHOffset_tailStyle$$2_tailVOffset$$);
        $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$.css($pos$$12$$);
        "middle" === $props$$17$$.vertical ? ($leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ = $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$.height(), $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ = Math.round(($leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ / 2 - $origUsing_tail$$3$$.outerHeight() / 2) / $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ * 100), $origUsing_tail$$3$$.css({top:$leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ + 
        "%"})) : "center" === $props$$17$$.horizontal && ($leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ = $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$.width(), $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ = Math.round(($leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ / 2 - $origUsing_tail$$3$$.outerWidth() / 2) / $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ * 100), $origUsing_tail$$3$$.css({left:$leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$ + 
        "%"}));
        ($origUsing_tail$$3$$ = this.options.position.origUsing) && $origUsing_tail$$3$$($pos$$12$$, $props$$17$$);
      } else {
        $leftPercent_rootElement$$7_rootHeight_rootWidth_topPercent$$.css($pos$$12$$);
      }
    }, $_resizeHandler$:function() {
      var $rootElement$$8$$ = this.$_rootElement$;
      $oj$$41$$.$Assert$.$assertPrototype$($rootElement$$8$$, jQuery);
      var $position$$21$$ = this.options.position;
      $oj$$41$$.$Assert$.$assertObject$($position$$21$$);
      var $isRtl$$3$$ = "rtl" === this.$_GetReadingDirection$();
      $rootElement$$8$$.position($oj$$41$$.$PositionUtils$.$normalizeHorizontalAlignment$($position$$21$$, $isRtl$$3$$));
    }, $_intialFocus$:function($first$$9_nodes$$4_rootElement$$9_skipOptionCheck$$) {
      var $options$$327$$ = this.options;
      if ($first$$9_nodes$$4_rootElement$$9_skipOptionCheck$$ || "none" !== $options$$327$$.initialFocus) {
        if ($first$$9_nodes$$4_rootElement$$9_skipOptionCheck$$ || "firstFocusable" === $options$$327$$.initialFocus) {
          $first$$9_nodes$$4_rootElement$$9_skipOptionCheck$$ = this.element.find(":focusable"), 0 < $first$$9_nodes$$4_rootElement$$9_skipOptionCheck$$.length ? ($first$$9_nodes$$4_rootElement$$9_skipOptionCheck$$ = $first$$9_nodes$$4_rootElement$$9_skipOptionCheck$$[0], $oj$$41$$.$Assert$.$assertDomElement$($first$$9_nodes$$4_rootElement$$9_skipOptionCheck$$), $$$$39$$($first$$9_nodes$$4_rootElement$$9_skipOptionCheck$$).focus()) : ($first$$9_nodes$$4_rootElement$$9_skipOptionCheck$$ = this.$_rootElement$, 
          $oj$$41$$.$Assert$.$assertPrototype$($first$$9_nodes$$4_rootElement$$9_skipOptionCheck$$, jQuery), $first$$9_nodes$$4_rootElement$$9_skipOptionCheck$$.attr("tabindex", "-1"), $first$$9_nodes$$4_rootElement$$9_skipOptionCheck$$.focus()), this._trigger("focus");
        }
      }
    }, $_isFocusInPopup$:function($activeElement$$1$$) {
      $activeElement$$1$$ || ($activeElement$$1$$ = document.activeElement);
      $oj$$41$$.$Assert$.$assertDomElement$($activeElement$$1$$);
      if (!$activeElement$$1$$) {
        return!1;
      }
      var $rootElement$$10$$ = this.$_rootElement$;
      $oj$$41$$.$Assert$.$assertPrototype$($rootElement$$10$$, jQuery);
      return $oj$$41$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$10$$[0], $activeElement$$1$$);
    }, $_isFocusInLauncher$:function($activeElement$$2$$) {
      $activeElement$$2$$ || ($activeElement$$2$$ = document.activeElement);
      $oj$$41$$.$Assert$.$assertDomElement$($activeElement$$2$$);
      var $launcher$$14$$ = this.$_launcher$;
      $oj$$41$$.$Assert$.$assertPrototype$($launcher$$14$$, jQuery);
      return $oj$$41$$.$DomUtils$.$isAncestorOrSelf$($launcher$$14$$[0], $activeElement$$2$$);
    }, $_restoreFocus$:function() {
      if (this.$_isFocusInPopup$()) {
        var $launcher$$15$$ = this.$_launcher$;
        $oj$$41$$.$Assert$.$assertPrototype$($launcher$$15$$, jQuery);
        $launcher$$15$$.focus();
      }
    }, $_keydownHandler$:function($event$$378_launcher$$16$$) {
      if (!$event$$378_launcher$$16$$.isDefaultPrevented()) {
        var $target$$82$$ = $event$$378_launcher$$16$$.target;
        $oj$$41$$.$Assert$.$assertDomElement$($target$$82$$);
        if (27 === $event$$378_launcher$$16$$.keyCode) {
          $event$$378_launcher$$16$$.preventDefault(), this.close();
        } else {
          if (117 === $event$$378_launcher$$16$$.keyCode) {
            this.$_isFocusInPopup$($target$$82$$) ? ($event$$378_launcher$$16$$.preventDefault(), $event$$378_launcher$$16$$ = this.$_launcher$, $oj$$41$$.$Assert$.$assertPrototype$($event$$378_launcher$$16$$, jQuery), $event$$378_launcher$$16$$.focus()) : this.$_isFocusInLauncher$($target$$82$$) && ($event$$378_launcher$$16$$.preventDefault(), this.$_intialFocus$(!0));
          } else {
            if (9 === $event$$378_launcher$$16$$.keyCode && this.$_isFocusInPopup$($target$$82$$)) {
              var $lastNode_nodes$$5$$ = this.element.find(":tabbable");
              if (0 < $lastNode_nodes$$5$$.length) {
                var $firstNode$$ = $lastNode_nodes$$5$$[0];
                $oj$$41$$.$Assert$.$assertDomElement$($firstNode$$);
                $lastNode_nodes$$5$$ = $lastNode_nodes$$5$$[$lastNode_nodes$$5$$.length - 1];
                $oj$$41$$.$Assert$.$assertDomElement$($lastNode_nodes$$5$$);
                $firstNode$$ === $target$$82$$ && $event$$378_launcher$$16$$.shiftKey ? ($event$$378_launcher$$16$$.preventDefault(), $$$$39$$($lastNode_nodes$$5$$).focus()) : $lastNode_nodes$$5$$ !== $target$$82$$ || $event$$378_launcher$$16$$.shiftKey || ($event$$378_launcher$$16$$.preventDefault(), $$$$39$$($firstNode$$).focus());
              } else {
                $event$$378_launcher$$16$$.preventDefault(), $event$$378_launcher$$16$$ = this.$_launcher$, $oj$$41$$.$Assert$.$assertPrototype$($event$$378_launcher$$16$$, jQuery), $event$$378_launcher$$16$$.focus();
              }
            }
          }
        }
      }
    }, $_setAutoDismiss$:function($autoDismiss$$) {
      var $documentElement$$ = document.documentElement, $focusLossCallback$$ = this.$_focusLossCallback$;
      $focusLossCallback$$ && ($documentElement$$.removeEventListener("mousedown", $focusLossCallback$$, !0), $documentElement$$.removeEventListener("focus", $focusLossCallback$$, !0), delete this.$_focusLossCallback$);
      "focusLoss" === $autoDismiss$$ && ($focusLossCallback$$ = this.$_focusLossCallback$ = $$$$39$$.proxy(this.$_dismissalHandler$, this), $documentElement$$.addEventListener("mousedown", $focusLossCallback$$, !0), $documentElement$$.addEventListener("focus", $focusLossCallback$$, !0));
    }, $_dismissalHandler$:function($event$$379_target$$83$$) {
      var $launcher$$17$$ = this.$_launcher$, $rootElement$$11$$ = this.$_rootElement$;
      $oj$$41$$.$Assert$.$assertPrototype$($launcher$$17$$, jQuery);
      $oj$$41$$.$Assert$.$assertPrototype$($rootElement$$11$$, jQuery);
      $event$$379_target$$83$$ = $event$$379_target$$83$$.target;
      $oj$$41$$.$Assert$.$assertDomElement$($event$$379_target$$83$$);
      $oj$$41$$.$DomUtils$.$isAncestorOrSelf$($launcher$$17$$[0], $event$$379_target$$83$$) || $oj$$41$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$11$$[0], $event$$379_target$$83$$) || this.close();
    }, $_addDescribedBy$:function() {
      var $launcher$$18$$ = this.$_launcher$, $popupId_rootElement$$12$$ = this.$_rootElement$;
      $oj$$41$$.$Assert$.$assertPrototype$($launcher$$18$$, jQuery);
      $oj$$41$$.$Assert$.$assertPrototype$($popupId_rootElement$$12$$, jQuery);
      var $popupId_rootElement$$12$$ = $popupId_rootElement$$12$$.attr("id"), $describedby_tokens$$2$$ = $launcher$$18$$.attr("aria-describedby"), $describedby_tokens$$2$$ = $describedby_tokens$$2$$ ? $describedby_tokens$$2$$.split(/\s+/) : [];
      $describedby_tokens$$2$$.push($popupId_rootElement$$12$$);
      $describedby_tokens$$2$$ = $$$$39$$.trim($describedby_tokens$$2$$.join(" "));
      $launcher$$18$$.attr("aria-describedby", $describedby_tokens$$2$$);
    }, $_removeDescribedBy$:function() {
      var $launcher$$19$$ = this.$_launcher$, $index$$213_popupId$$1_rootElement$$13$$ = this.$_rootElement$;
      $oj$$41$$.$Assert$.$assertPrototype$($launcher$$19$$, jQuery);
      $oj$$41$$.$Assert$.$assertPrototype$($index$$213_popupId$$1_rootElement$$13$$, jQuery);
      var $index$$213_popupId$$1_rootElement$$13$$ = $index$$213_popupId$$1_rootElement$$13$$.attr("id"), $describedby$$1_tokens$$3$$ = $launcher$$19$$.attr("aria-describedby"), $describedby$$1_tokens$$3$$ = $describedby$$1_tokens$$3$$ ? $describedby$$1_tokens$$3$$.split(/\s+/) : [], $index$$213_popupId$$1_rootElement$$13$$ = $$$$39$$.inArray($index$$213_popupId$$1_rootElement$$13$$, $describedby$$1_tokens$$3$$);
      -1 !== $index$$213_popupId$$1_rootElement$$13$$ && $describedby$$1_tokens$$3$$.splice($index$$213_popupId$$1_rootElement$$13$$, 1);
      ($describedby$$1_tokens$$3$$ = $$$$39$$.trim($describedby$$1_tokens$$3$$.join(" "))) ? $launcher$$19$$.attr("aria-describedby", $describedby$$1_tokens$$3$$) : $launcher$$19$$.removeAttr("aria-describedby");
    }, $_createLiveRegion$:function() {
      var $rootElement$$14$$ = this.$_rootElement$;
      $oj$$41$$.$Assert$.$assertPrototype$($rootElement$$14$$, jQuery);
      var $liveRegionId$$ = this.$_getSubId$("ariaLive"), $liveRegion$$ = this.$_liveRegion$ = $$$$39$$("\x3cdiv\x3e");
      $liveRegion$$.attr({id:$liveRegionId$$, role:"log", "aria-live":"polite", "aria-relevant":"additions"});
      $liveRegion$$.addClass("oj-helper-hidden-accessible");
      $liveRegion$$.appendTo(document.body);
      $rootElement$$14$$.data("oj-aria-controls", $liveRegionId$$);
    }, $_announceLiveRegion$:function($message$$36$$) {
      var $liveRegion$$1$$ = this.$_liveRegion$;
      $oj$$41$$.$Assert$.$assertPrototype$($liveRegion$$1$$, jQuery);
      $liveRegion$$1$$.children().remove();
      $oj$$41$$.$StringUtils$.isEmpty($message$$36$$) || $$$$39$$("\x3cdiv\x3e").text($message$$36$$).appendTo($liveRegion$$1$$);
    }, $_destroyLiveRegion$:function() {
      var $liveRegion$$2_rootElement$$15$$ = this.$_liveRegion$;
      $oj$$41$$.$Assert$.$assertPrototype$($liveRegion$$2_rootElement$$15$$, jQuery);
      $liveRegion$$2_rootElement$$15$$.remove();
      delete this.$_liveRegion$;
      $liveRegion$$2_rootElement$$15$$ = this.$_rootElement$;
      $oj$$41$$.$Assert$.$assertPrototype$($liveRegion$$2_rootElement$$15$$, jQuery);
      $liveRegion$$2_rootElement$$15$$.removeData("oj-aria-controls");
    }, $_getSubId$:function($sub$$1$$) {
      return this.uuid + "_" + $sub$$1$$;
    }});
  })();
});
