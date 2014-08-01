/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$21$$, $$$$21$$) {
  (function() {
    $oj$$21$$.$__registerWidget$("oj.ojMenu", $$$$21$$.oj.baseComponent, {defaultElement:"\x3cul\x3e", delay:300, role:"menu", widgetEventPrefix:"oj", $_MENU_CLICK_AWAY_HANDLER_KEY$:"ojMenuClickAwayHandler", options:{menuPosition:{my:"start top", at:"start bottom"}, menuSelector:"ul", submenuPosition:{my:"start top", at:"end top"}, beforeShow:null, blur:null, focus:null, select:null}, _create:function() {
      this.$activeMenu$ = this.element;
      this.$mouseHandled$ = !1;
      this.element.uniqueId().addClass("oj-menu oj-component").toggleClass("oj-menu-icons", !!this.element.find(".oj-component-icon").length).attr({role:this.role, tabIndex:"0"});
      this._on(!0, {"mousedown .oj-menu-item":function($event$$213$$) {
        this.options.disabled && $event$$213$$.preventDefault();
      }, click:function($event$$214$$) {
        this.options.disabled && $event$$214$$.preventDefault();
      }, keydown:function($event$$215$$) {
        this.options.disabled && $event$$215$$.keyCode === $$$$21$$.ui.keyCode.ESCAPE && this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$215$$);
      }});
      this.options.disabled && this.element.addClass("oj-disabled").attr("aria-disabled", "true");
      this._on({"mousedown .oj-menu-item \x3e a":function($event$$216$$) {
        $event$$216$$.preventDefault();
      }, "click .oj-disabled \x3e a":function($event$$217$$) {
        $event$$217$$.preventDefault();
      }, click:function() {
        this.$mouseHandled$ = !1;
      }, "click .oj-menu-item:has(a)":function($event$$219$$) {
        var $target$$77$$ = $$$$21$$($event$$219$$.target).closest(".oj-menu-item");
        !this.$mouseHandled$ && $target$$77$$.not(".oj-disabled").length && (this.$mouseHandled$ = !0, $event$$219$$.preventDefault(), this.$active$ && this.$active$.closest($target$$77$$).length && this.$active$.get(0) != $target$$77$$.get(0) || ($target$$77$$.has(".oj-menu").length ? this.expand($event$$219$$) : (this.select($event$$219$$), this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.$active$ && 1 === this.$active$.parents(".oj-menu").length && clearTimeout(this.$timer$)))));
      }, "mouseenter .oj-menu-item":function($event$$220$$) {
        var $target$$78$$ = $$$$21$$($event$$220$$.currentTarget);
        $target$$78$$.siblings().children(".oj-active").removeClass("oj-active");
        this.focus($event$$220$$, $target$$78$$);
      }, mouseleave:this.collapseAll, "mouseleave .oj-menu":this.collapseAll, focus:function($event$$221$$, $keepActiveItem$$) {
        var $item$$9$$ = this.$active$ || this.element.children(".oj-menu-item").eq(0);
        $keepActiveItem$$ || this.focus($event$$221$$, $item$$9$$);
      }, keydown:this.$_keydown$, keyup:function($event$$222$$) {
        if ($event$$222$$.keyCode == $$$$21$$.ui.keyCode.ENTER || $event$$222$$.keyCode == $$$$21$$.ui.keyCode.SPACE) {
          this.$__spaceEnterDownInMenu$ = !1;
        }
      }});
      this.$_setup$();
      this.$_registerClickAwayHandler$();
      this._super();
    }, $_registerClickAwayHandler$:function() {
      var $clikAwayHandler$$ = this.document.data(this.$_MENU_CLICK_AWAY_HANDLER_KEY$);
      $clikAwayHandler$$ || ($clikAwayHandler$$ = function $$clikAwayHandler$$$($event$$223$$) {
        if ("focus" === $event$$223$$.type || "mousedown" === $event$$223$$.type || 93 == $event$$223$$.which || 121 == $event$$223$$.which && $event$$223$$.shiftKey || 93 == $event$$223$$.keyCode) {
          var $openPopupMenus$$ = $_openPopupMenus$$.slice(0, $_openPopupMenus$$.length);
          $$$$21$$.each($openPopupMenus$$, function($index$$164$$, $menu$$9$$) {
            !$$$$21$$($event$$223$$.target).closest($menu$$9$$.element).length && ("keydown" === $event$$223$$.type || "mousedown" === $event$$223$$.type && 3 === $event$$223$$.which || !$$$$21$$($event$$223$$.target).closest($menu$$9$$.$_launcher$).length || $menu$$9$$.$_isContextMenu$ && "mousedown" === $event$$223$$.type && 3 !== $event$$223$$.which) && ($menu$$9$$.collapseAll($event$$223$$), $menu$$9$$.$_launcher$ && $menu$$9$$.$__dismiss$($event$$223$$));
          });
        }
      }, this.document.data(this.$_MENU_CLICK_AWAY_HANDLER_KEY$, $clikAwayHandler$$), this.document[0].addEventListener("keydown", $clikAwayHandler$$, !0), this.document[0].addEventListener("mousedown", $clikAwayHandler$$, !0), this.document[0].addEventListener("focus", $clikAwayHandler$$, !0));
    }, $_unregisterClickAwayHandler$:function() {
      var $clikAwayHandler$$1$$ = this.document.data(this.$_MENU_CLICK_AWAY_HANDLER_KEY$);
      $clikAwayHandler$$1$$ && 1 === $$$$21$$(":oj-menu").length && (this.document[0].removeEventListener("keydown", $clikAwayHandler$$1$$, !0), this.document[0].removeEventListener("mousedown", $clikAwayHandler$$1$$, !0), this.document[0].removeEventListener("focus", $clikAwayHandler$$1$$, !0), this.document.removeData(this.$_MENU_CLICK_AWAY_HANDLER_KEY$));
    }, _destroy:function() {
      this.element.removeAttr("aria-activedescendant").find(".oj-menu").addBack().removeClass("oj-menu oj-component oj-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
      this.element.find(".oj-menu-item").removeClass("oj-menu-item").removeAttr("role").children("a").removeAttr("aria-disabled").removeUniqueId().removeClass("oj-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
        var $elem$$23$$ = $$$$21$$(this);
        $elem$$23$$.data("oj-ojMenu-submenu-icon") && $elem$$23$$.remove();
      });
      this.element.find("a").removeAttr("aria-expanded");
      this.element.find(".oj-menu-divider").removeClass("oj-menu-divider").removeAttr("role");
      this.$_unregisterClickAwayHandler$();
      0 <= $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
    }, $_keydown$:function($event$$224$$) {
      function $escape$$1$$($value$$189$$) {
        return $value$$189$$.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$\x26");
      }
      var $match$$17_prev$$2$$, $activeItemId_character$$, $skip_topLevelAnchorSelector$$, $regex$$1$$, $preventDefault$$ = !0;
      switch($event$$224$$.keyCode) {
        case $$$$21$$.ui.keyCode.HOME:
          this.$_move$("first", "first", $event$$224$$);
          break;
        case $$$$21$$.ui.keyCode.END:
          this.$_move$("last", "last", $event$$224$$);
          break;
        case $$$$21$$.ui.keyCode.UP:
          this.previous($event$$224$$);
          break;
        case $$$$21$$.ui.keyCode.DOWN:
          this.next($event$$224$$);
          break;
        case $$$$21$$.ui.keyCode.LEFT:
        ;
        case $$$$21$$.ui.keyCode.RIGHT:
          $event$$224$$.keyCode === $$$$21$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? this.$active$ && !this.$active$.is(".oj-disabled") && this.expand($event$$224$$) : this.collapse($event$$224$$);
          break;
        case $$$$21$$.ui.keyCode.ENTER:
        ;
        case $$$$21$$.ui.keyCode.SPACE:
          this.$_activate$($event$$224$$);
          this.$__spaceEnterDownInMenu$ = !0;
          var $self$$92$$ = this;
          setTimeout(function() {
            $self$$92$$.$__spaceEnterDownInMenu$ = !1;
          }, 100);
          break;
        case $$$$21$$.ui.keyCode.ESCAPE:
          this.$_launcher$ ? ($activeItemId_character$$ = this.element.attr("aria-activedescendant"), $skip_topLevelAnchorSelector$$ = "#" + this.element.attr("id") + "\x3e*\x3ea", $activeItemId_character$$ && !$$$$21$$("#" + $activeItemId_character$$).is($skip_topLevelAnchorSelector$$) ? this.collapse($event$$224$$) : this.$_focusLauncherAndDismiss$($event$$224$$)) : this.collapse($event$$224$$);
          break;
        default:
          $preventDefault$$ = !1, $match$$17_prev$$2$$ = this.$previousFilter$ || "", $activeItemId_character$$ = String.fromCharCode($event$$224$$.keyCode), $skip_topLevelAnchorSelector$$ = !1, clearTimeout(this.$filterTimer$), $activeItemId_character$$ === $match$$17_prev$$2$$ ? $skip_topLevelAnchorSelector$$ = !0 : $activeItemId_character$$ = $match$$17_prev$$2$$ + $activeItemId_character$$, $regex$$1$$ = new RegExp("^" + $escape$$1$$($activeItemId_character$$), "i"), $match$$17_prev$$2$$ = this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$21$$(this).children("a").text());
          }), $match$$17_prev$$2$$ = $skip_topLevelAnchorSelector$$ && -1 !== $match$$17_prev$$2$$.index(this.$active$.next()) ? this.$active$.nextAll(".oj-menu-item") : $match$$17_prev$$2$$, $match$$17_prev$$2$$.length || ($activeItemId_character$$ = String.fromCharCode($event$$224$$.keyCode), $regex$$1$$ = new RegExp("^" + $escape$$1$$($activeItemId_character$$), "i"), $match$$17_prev$$2$$ = this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$21$$(this).children("a").text());
          })), $match$$17_prev$$2$$.length ? (this.focus($event$$224$$, $match$$17_prev$$2$$), 1 < $match$$17_prev$$2$$.length ? (this.$previousFilter$ = $activeItemId_character$$, this.$filterTimer$ = this._delay(function() {
            delete this.$previousFilter$;
          }, 1E3)) : delete this.$previousFilter$) : delete this.$previousFilter$;
      }
      $preventDefault$$ && $event$$224$$.preventDefault();
    }, $_activate$:function($event$$225$$) {
      this.$active$.is(".oj-disabled") || (this.$active$.children("a[aria-haspopup\x3d'true']").length ? this.expand($event$$225$$) : this.select($event$$225$$));
    }, refresh:function() {
      this._super();
      this.$_setup$();
    }, $_setup$:function() {
      this.$isRtl$ = "rtl" === this.$_GetReadingDirection$();
      var $self$$93$$ = this, $children$$5_submenus$$ = this.element.find(this.options.menuSelector);
      $children$$5_submenus$$.filter(":not(.oj-menu)").addClass("oj-menu oj-component").hide().attr({role:this.role, "aria-hidden":"true"}).each(function() {
        var $menu$$10$$ = $$$$21$$(this), $item$$10_itemId$$ = $self$$93$$.$_getSubmenuItem$($menu$$10$$), $submenuIcon$$ = $$$$21$$("\x3cspan\x3e");
        $submenuIcon$$.addClass("oj-menu-submenu-icon oj-component-icon").data("oj-ojMenu-submenu-icon", !0);
        $item$$10_itemId$$.attr("aria-haspopup", "true").attr("aria-expanded", "false").prepend($submenuIcon$$);
        $item$$10_itemId$$ = $item$$10_itemId$$.attr("id");
        $menu$$10$$.attr("aria-labelledby", $item$$10_itemId$$);
      });
      $children$$5_submenus$$ = $children$$5_submenus$$.add(this.element).children();
      $children$$5_submenus$$.filter(".oj-menu-divider").has("a").removeClass("oj-menu-divider oj-menu-item").removeAttr("role");
      $children$$5_submenus$$.filter(":not(.oj-menu-item):has(a)").addClass("oj-menu-item").attr("role", "presentation").children("a").uniqueId().attr({tabIndex:"-1", role:"menuitem"});
      $children$$5_submenus$$.filter(":not(.oj-menu-item)").each(function() {
        var $item$$11$$ = $$$$21$$(this);
        /[^\-\u2014\u2013\s]/.test($item$$11$$.text()) || $item$$11$$.addClass("oj-menu-divider").attr("role", "separator");
      });
      $children$$5_submenus$$.filter(".oj-disabled").children("a").attr("aria-disabled", "true");
      $children$$5_submenus$$.filter(":not(.oj-disabled)").children("a").removeAttr("aria-disabled");
      this.$active$ && !$$$$21$$.contains(this.element[0], this.$active$[0]) && this.blur();
    }, $_getSubmenuItem$:function($submenu$$) {
      return $submenu$$.prev("a");
    }, $_itemRole$:function() {
      return "menuitem";
    }, focus:function($event$$226$$, $item$$12$$) {
      var $focused$$4_nested$$;
      this.blur($event$$226$$, $event$$226$$ && "focus" === $event$$226$$.type);
      this.$active$ = $item$$12$$.first();
      $focused$$4_nested$$ = this.$active$.children("a").addClass("oj-focus");
      this.role && this.element.attr("aria-activedescendant", $focused$$4_nested$$.attr("id"));
      this.$active$.parent().closest(".oj-menu-item").children("a:first").addClass("oj-active");
      $event$$226$$ && "keydown" === $event$$226$$.type ? this.$_close$() : this.$timer$ = this._delay(function() {
        this.$_close$();
      }, this.delay);
      $focused$$4_nested$$ = $item$$12$$.children(".oj-menu");
      $focused$$4_nested$$.length && $event$$226$$ && /^mouse/.test($event$$226$$.type) && !this.$active$.hasClass("oj-disabled") && this.$_startOpening$($focused$$4_nested$$);
      this.$activeMenu$ = $item$$12$$.parent();
      this._trigger("focus", $event$$226$$, {item:$item$$12$$});
    }, blur:function($event$$227$$, $JSCompiler_OptimizeArgumentsArray_p4$$) {
      $JSCompiler_OptimizeArgumentsArray_p4$$ || clearTimeout(this.$timer$);
      this.$active$ && (this.$active$.children("a").removeClass("oj-focus"), this.$active$ = null, this._trigger("blur", $event$$227$$, {item:this.$active$}));
    }, $_focusLauncherAndDismiss$:function($event$$228$$) {
      this.$_launcher$.focus();
      this.$__dismiss$($event$$228$$);
    }, $__dismiss$:function($event$$229$$) {
      this.element.hide().attr("aria-hidden", "true");
      this.$_launcher$ = void 0;
      this._trigger("__dismiss", $event$$229$$, {});
      0 <= $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
    }, show:function($event$$230$$, $params$$17$$) {
      this.$_popupInited$ || (this.$_popupInit$(), this.$_popupInited$ = !0);
      if ($params$$17$$ && $params$$17$$.launcher) {
        this.$_isContextMenu$ = $event$$230$$ ? ("mousedown" === $event$$230$$.type || "contextmenu" === $event$$230$$.type) && 3 === $event$$230$$.which || 93 == $event$$230$$.which || 121 == $event$$230$$.which && $event$$230$$.shiftKey : !1;
        var $launcher$$7$$ = $params$$17$$.launcher;
        if (this._trigger("beforeShow", $event$$230$$, {launcher:$launcher$$7$$})) {
          var $launcher$$7$$ = "string" === $$$$21$$.type($launcher$$7$$) ? $$$$21$$("#" + $launcher$$7$$) : $launcher$$7$$, $currentMenu$$ = this.element[0], $focusFirstItem_openPopupMenus$$1_position$$7$$ = $_openPopupMenus$$.slice(0, $_openPopupMenus$$.length);
          $$$$21$$.each($focusFirstItem_openPopupMenus$$1_position$$7$$, function($index$$165$$, $menu$$11$$) {
            $menu$$11$$.element[0] !== $currentMenu$$ && ($menu$$11$$.collapseAll($event$$230$$), $menu$$11$$.$_launcher$ && $menu$$11$$.$__dismiss$($event$$230$$));
          });
          $focusFirstItem_openPopupMenus$$1_position$$7$$ = $oj$$21$$.$PositionUtils$.$normalizeHorizontalAlignment$(this.options.menuPosition, this.$isRtl$);
          null == $focusFirstItem_openPopupMenus$$1_position$$7$$.of && ($focusFirstItem_openPopupMenus$$1_position$$7$$.of = $event$$230$$ && "contextmenu" === $event$$230$$.type ? $event$$230$$ : $launcher$$7$$);
          this.element.show().removeAttr("aria-hidden").position($focusFirstItem_openPopupMenus$$1_position$$7$$);
          (($focusFirstItem_openPopupMenus$$1_position$$7$$ = !$params$$17$$.focus || "firstItem" === $params$$17$$.focus) || "menu" === $params$$17$$.focus) && this.element.focus();
          $focusFirstItem_openPopupMenus$$1_position$$7$$ ? this.focus($event$$230$$, this.element.children().first()) : this.blur($event$$230$$);
          this.$_launcher$ = $launcher$$7$$;
          $_openPopupMenus$$.push(this);
        }
      }
    }, $_popupInit$:function() {
      this.element.css({position:"absolute"});
    }, $_startOpening$:function($submenu$$1$$) {
      clearTimeout(this.$timer$);
      "true" === $submenu$$1$$.attr("aria-hidden") && (this.$timer$ = this._delay(function() {
        this.$_close$();
        this.$_open$($submenu$$1$$);
      }, this.delay));
    }, $_open$:function($submenu$$2$$) {
      var $position$$8$$ = $$$$21$$.extend({of:this.$active$}, $oj$$21$$.$PositionUtils$.$normalizeHorizontalAlignment$(this.options.submenuPosition, this.$isRtl$));
      clearTimeout(this.$timer$);
      this.element.find(".oj-menu").not($submenu$$2$$.parents(".oj-menu")).hide().attr("aria-hidden", "true");
      $submenu$$2$$.show().removeAttr("aria-hidden").position($position$$8$$);
      this.$_getSubmenuItem$($submenu$$2$$).attr("aria-expanded", "true");
      !this.$_launcher$ && 0 > $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.push(this);
    }, collapseAll:function($event$$231$$, $all$$1$$) {
      this.$__collapseAll$($event$$231$$, $all$$1$$, this.delay);
    }, $__collapseAll$:function($event$$232$$, $all$$2$$, $delay$$3$$) {
      function $collapseMenu$$() {
        var $currentMenu$$1$$ = $all$$2$$ ? $self$$94$$.element : $$$$21$$($event$$232$$ && $event$$232$$.target).closest($self$$94$$.element.find(".oj-menu"));
        $currentMenu$$1$$.length || ($currentMenu$$1$$ = $self$$94$$.element);
        $self$$94$$.$_close$($currentMenu$$1$$);
        $self$$94$$.blur($event$$232$$);
        $self$$94$$.$activeMenu$ = $currentMenu$$1$$;
      }
      clearTimeout(this.$timer$);
      var $self$$94$$ = this;
      $delay$$3$$ ? this.$timer$ = this._delay($collapseMenu$$, $delay$$3$$) : $collapseMenu$$();
    }, $_close$:function($startMenu$$) {
      $startMenu$$ || ($startMenu$$ = this.$active$ ? this.$active$.parent() : this.element);
      var $menus$$1$$ = $startMenu$$.find(".oj-menu");
      $menus$$1$$.hide().attr("aria-hidden", "true");
      this.$_getSubmenuItem$($menus$$1$$).attr("aria-expanded", "false");
      $startMenu$$.find("a.oj-active").removeClass("oj-active");
      this.$_launcher$ || 0 <= $_openPopupMenus$$.indexOf(this) && $startMenu$$ === this.element && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
    }, collapse:function($event$$233$$) {
      var $newItem$$ = this.$activeMenu$ && this.$activeMenu$.closest(".oj-menu-item", this.element);
      $newItem$$ && $newItem$$.length && (this.$_close$(), this.focus($event$$233$$, $newItem$$));
    }, expand:function($event$$234$$) {
      var $newItem$$1$$ = this.$active$ && this.$active$.children(".oj-menu ").children(".oj-menu-item").first();
      $newItem$$1$$ && $newItem$$1$$.length && (this.$_open$($newItem$$1$$.parent()), this._delay(function() {
        this.focus($event$$234$$, $newItem$$1$$);
      }));
    }, next:function($event$$235$$) {
      this.$_move$("next", "first", $event$$235$$);
    }, previous:function($event$$236$$) {
      this.$_move$("prev", "last", $event$$236$$);
    }, $_isFirstItem$:function() {
      return this.$active$ && !this.$active$.prevAll(".oj-menu-item").length;
    }, $_isLastItem$:function() {
      return this.$active$ && !this.$active$.nextAll(".oj-menu-item").length;
    }, $_move$:function($direction$$9$$, $filter$$5$$, $event$$237$$) {
      var $next$$2$$;
      this.$active$ && ($next$$2$$ = "first" === $direction$$9$$ || "last" === $direction$$9$$ ? this.$active$["first" === $direction$$9$$ ? "prevAll" : "nextAll"](".oj-menu-item").eq(-1) : this.$active$[$direction$$9$$ + "All"](".oj-menu-item").eq(0));
      $next$$2$$ && $next$$2$$.length && this.$active$ || ($next$$2$$ = this.$activeMenu$.children(".oj-menu-item")[$filter$$5$$]());
      this.focus($event$$237$$, $next$$2$$);
    }, select:function($event$$238$$) {
      if (!this.$active$ && $event$$238$$ && $event$$238$$.target) {
        var $menuItem_ui$$8$$ = $$$$21$$($event$$238$$.target).closest(".oj-menu-item");
        $menuItem_ui$$8$$.closest(this.element).length && (this.$active$ = $menuItem_ui$$8$$);
      }
      !this.$active$ || this.$active$.has(".oj-menu").length || this.$active$.is(".oj-disabled") ? $oj$$21$$.$Logger$.warn("Selecting a disabled item or parent menu item is not allowed.") : ($menuItem_ui$$8$$ = {item:this.$active$}, this.$__collapseAll$($event$$238$$, !0), this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$238$$), this._trigger("select", $event$$238$$, $menuItem_ui$$8$$));
    }});
    var $_openPopupMenus$$ = [];
  })();
});
