/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$24$$, $$$$24$$) {
  (function() {
    var $mouseHandled$$ = !1;
    $$$$24$$(document).mouseup(function() {
      $mouseHandled$$ = !1;
    });
    $oj$$24$$.$__registerWidget$("oj.ojResizable", $$$$24$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{cancel:"input,textarea,button,select,option", distance:1, delay:0, maxHeight:null, maxWidth:null, minHeight:10, minWidth:10, alsoResize:!1, animate:!1, animateDuration:"slow", animateEasing:"swing", containment:!1, ghost:!1, grid:!1, handles:"e,s,se", helper:!1, resize:null, start:null, stop:null}, $_mouseInit$:function() {
      var $that$$3$$ = this;
      this.element.bind("mousedown." + this.widgetName, function($event$$257$$) {
        return $that$$3$$.$_mouseDown$($event$$257$$);
      }).bind("click." + this.widgetName, function($event$$258$$) {
        if (!0 === $$$$24$$.data($event$$258$$.target, $that$$3$$.widgetName + ".preventClickEvent")) {
          return $$$$24$$.removeData($event$$258$$.target, $that$$3$$.widgetName + ".preventClickEvent"), $event$$258$$.stopImmediatePropagation(), !1;
        }
      });
    }, $_mouseDestroy$:function() {
      this.element.unbind("." + this.widgetName);
      this.$_mouseMoveDelegate$ && this.document.unbind("mousemove." + this.widgetName, this.$_mouseMoveDelegate$).unbind("mouseup." + this.widgetName, this.$_mouseUpDelegate$);
    }, $_mouseDown$:function($event$$259$$) {
      if (!$mouseHandled$$) {
        this.$_mouseStarted$ && this.$_mouseUp$($event$$259$$);
        this.$_mouseDownEvent$ = $event$$259$$;
        var $that$$4$$ = this, $btnIsLeft$$ = 1 === $event$$259$$.which, $elIsCancel$$ = "string" === typeof this.options.cancel && $event$$259$$.target.nodeName ? $$$$24$$($event$$259$$.target).closest(this.options.cancel).length : !1;
        if (!$btnIsLeft$$ || $elIsCancel$$ || !this.$_mouseCapture$($event$$259$$)) {
          return!0;
        }
        (this.$mouseDelayMet$ = !this.options.delay) || setTimeout(function() {
          $that$$4$$.$mouseDelayMet$ = !0;
        }, this.options.delay);
        if (this.$_mouseDistanceMet$($event$$259$$) && this.$mouseDelayMet$ && (this.$_mouseStarted$ = !1 !== this.$_mouseStart$($event$$259$$), !this.$_mouseStarted$)) {
          return $event$$259$$.preventDefault(), !0;
        }
        !0 === $$$$24$$.data($event$$259$$.target, this.widgetName + ".preventClickEvent") && $$$$24$$.removeData($event$$259$$.target, this.widgetName + ".preventClickEvent");
        this.$_mouseMoveDelegate$ = function $this$$_mouseMoveDelegate$$($event$$260$$) {
          return $that$$4$$.$_mouseMove$($event$$260$$);
        };
        this.$_mouseUpDelegate$ = function $this$$_mouseUpDelegate$$($event$$261$$) {
          return $that$$4$$.$_mouseUp$($event$$261$$);
        };
        this.document.bind("mousemove." + this.widgetName, this.$_mouseMoveDelegate$).bind("mouseup." + this.widgetName, this.$_mouseUpDelegate$);
        $event$$259$$.preventDefault();
        return $mouseHandled$$ = !0;
      }
    }, $_mouseMove$:function($event$$262$$) {
      if ($$$$24$$.ui.$ie$ && (!document.documentMode || 9 > document.documentMode) && !$event$$262$$.button || !$event$$262$$.which) {
        return this.$_mouseUp$($event$$262$$);
      }
      if (this.$_mouseStarted$) {
        return this.$_mouseDrag$($event$$262$$), $event$$262$$.preventDefault();
      }
      this.$_mouseDistanceMet$($event$$262$$) && this.$mouseDelayMet$ && ((this.$_mouseStarted$ = !1 !== this.$_mouseStart$(this.$_mouseDownEvent$, $event$$262$$)) ? this.$_mouseDrag$($event$$262$$) : this.$_mouseUp$($event$$262$$));
      return!this.$_mouseStarted$;
    }, $_mouseUp$:function($event$$263$$) {
      this.document.unbind("mousemove." + this.widgetName, this.$_mouseMoveDelegate$).unbind("mouseup." + this.widgetName, this.$_mouseUpDelegate$);
      this.$_mouseStarted$ && (this.$_mouseStarted$ = !1, $event$$263$$.target === this.$_mouseDownEvent$.target && $$$$24$$.data($event$$263$$.target, this.widgetName + ".preventClickEvent", !0), this.$_mouseStop$($event$$263$$));
      return $mouseHandled$$ = !1;
    }, $_mouseDistanceMet$:function($event$$264$$) {
      return Math.max(Math.abs(this.$_mouseDownEvent$.pageX - $event$$264$$.pageX), Math.abs(this.$_mouseDownEvent$.pageY - $event$$264$$.pageY)) >= this.options.distance;
    }, $_mouseDelayMet$:function() {
      return this.$mouseDelayMet$;
    }, $_num$:function($value$$193$$) {
      return parseInt($value$$193$$, 10) || 0;
    }, $_isNumber$:function($value$$194$$) {
      return!isNaN(parseInt($value$$194$$, 10));
    }, $_hasScroll$:function($el$$10$$, $a$$74$$) {
      if ("hidden" === $$$$24$$($el$$10$$).css("overflow")) {
        return!1;
      }
      var $scroll$$13$$ = $a$$74$$ && "left" === $a$$74$$ ? "scrollLeft" : "scrollTop", $has$$ = !1;
      if (0 < $el$$10$$[$scroll$$13$$]) {
        return!0;
      }
      $el$$10$$[$scroll$$13$$] = 1;
      $has$$ = 0 < $el$$10$$[$scroll$$13$$];
      $el$$10$$[$scroll$$13$$] = 0;
      return $has$$;
    }, _ComponentCreate:function() {
      this._super();
      var $n$$24_o$$, $i$$239$$, $handle$$19$$, $axis$$20$$, $hname$$, $that$$5$$ = this;
      $n$$24_o$$ = this.options;
      this.element.addClass("oj-resizable");
      $$$$24$$.extend(this, {$originalElement$:this.element, $_proportionallyResizeElements$:[], $_helper$:null});
      this.handles = $n$$24_o$$.handles || ($$$$24$$(".oj-resizable-handle", this.element).length ? {$n$:".oj-resizable-n", $e$:".oj-resizable-e", $s$:".oj-resizable-s", $w$:".oj-resizable-w", $se$:".oj-resizable-se", $sw$:".oj-resizable-sw", $ne$:".oj-resizable-ne", $nw$:".oj-resizable-nw"} : "e,s,se");
      if (this.handles.constructor === String) {
        for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), $n$$24_o$$ = this.handles.split(","), this.handles = {}, $i$$239$$ = 0;$i$$239$$ < $n$$24_o$$.length;$i$$239$$++) {
          $handle$$19$$ = $$$$24$$.trim($n$$24_o$$[$i$$239$$]), $hname$$ = "oj-resizable-" + $handle$$19$$, $axis$$20$$ = $$$$24$$("\x3cdiv class\x3d'oj-resizable-handle " + $hname$$ + "'\x3e\x3c/div\x3e"), this.handles[$handle$$19$$] = ".oj-resizable-" + $handle$$19$$, this.element.append($axis$$20$$);
        }
      }
      this.$_renderAxis$ = function $this$$_renderAxis$$() {
        for (var $i$$240$$ in this.handles) {
          this.handles[$i$$240$$].constructor === String && (this.handles[$i$$240$$] = this.element.children(this.handles[$i$$240$$]).first().show());
        }
      };
      this.$_renderAxis$();
      this.$_handles$ = $$$$24$$(".oj-resizable-handle", this.element);
      this.$_handles$.mouseover(function() {
        $that$$5$$.$resizing$ || (this.className && ($axis$$20$$ = this.className.match(/oj-resizable-(se|sw|ne|nw|n|e|s|w)/i)), $that$$5$$.axis = $axis$$20$$ && $axis$$20$$[1] ? $axis$$20$$[1] : "se");
      });
      this.$_mouseInit$();
    }, _destroy:function() {
      this.$_mouseDestroy$();
      $$$$24$$(this.$originalElement$).removeClass("oj-resizable oj-resizable-disabled oj-resizable-resizing").removeData("resizable").removeData("oj-resizable").unbind(".resizable").find(".oj-resizable-handle").remove();
      return this;
    }, $_mouseCapture$:function($event$$265$$) {
      var $i$$241$$, $handle$$20$$, $capture$$ = !1;
      for ($i$$241$$ in this.handles) {
        if ($handle$$20$$ = $$$$24$$(this.handles[$i$$241$$])[0], $handle$$20$$ === $event$$265$$.target || $$$$24$$.contains($handle$$20$$, $event$$265$$.target)) {
          $capture$$ = !0;
        }
      }
      return!this.options.disabled && $capture$$;
    }, $_mouseStart$:function($event$$266$$) {
      var $curleft_iniPos$$, $curtop$$, $cursor_o$$1$$;
      $cursor_o$$1$$ = this.options;
      $curleft_iniPos$$ = this.element.position();
      var $el$$11$$ = this.element;
      this.$resizing$ = !0;
      /absolute/.test($el$$11$$.css("position")) ? $el$$11$$.css({position:"absolute", top:$el$$11$$.css("top"), left:$el$$11$$.css("left")}) : $el$$11$$.is(".ui-draggable") && $el$$11$$.css({position:"absolute", top:$curleft_iniPos$$.top, left:$curleft_iniPos$$.left});
      this.$_renderProxy$();
      $curleft_iniPos$$ = this.$_num$(this.helper.css("left"));
      $curtop$$ = this.$_num$(this.helper.css("top"));
      $cursor_o$$1$$.containment && ($curleft_iniPos$$ += $$$$24$$($cursor_o$$1$$.containment).scrollLeft() || 0, $curtop$$ += $$$$24$$($cursor_o$$1$$.containment).scrollTop() || 0);
      this.offset = this.helper.offset();
      this.position = {left:$curleft_iniPos$$, top:$curtop$$};
      this.size = {width:$el$$11$$.width(), height:$el$$11$$.height()};
      this.$originalSize$ = {width:$el$$11$$.width(), height:$el$$11$$.height()};
      this.$originalPosition$ = {left:$curleft_iniPos$$, top:$curtop$$};
      this.$sizeDiff$ = {width:$el$$11$$.outerWidth() - $el$$11$$.width(), height:$el$$11$$.outerHeight() - $el$$11$$.height()};
      this.$originalMousePosition$ = {left:$event$$266$$.pageX, top:$event$$266$$.pageY};
      this.$aspectRatio$ = this.$originalSize$.width / this.$originalSize$.height || 1;
      $cursor_o$$1$$ = $$$$24$$(".oj-resizable-" + this.axis).css("cursor");
      $$$$24$$("body").css("cursor", "auto" === $cursor_o$$1$$ ? this.axis + "-resize" : $cursor_o$$1$$);
      $el$$11$$.addClass("oj-resizable-resizing");
      this.$_propagate$("start", $event$$266$$);
      this.$_alsoresize_start$($event$$266$$);
      this.$_containment_start$($event$$266$$);
      return!0;
    }, $_mouseDrag$:function($event$$267$$) {
      var $data$$130_dx$$4$$, $el$$12$$ = this.helper, $props$$13$$ = {}, $dy$$4_smp$$ = this.$originalMousePosition$;
      $data$$130_dx$$4$$ = $event$$267$$.pageX - $dy$$4_smp$$.left || 0;
      var $dy$$4_smp$$ = $event$$267$$.pageY - $dy$$4_smp$$.top || 0, $trigger$$ = this.$_change$[this.axis];
      this.$prevPosition$ = {top:this.position.top, left:this.position.left};
      this.$prevSize$ = {width:this.size.width, height:this.size.height};
      if (!$trigger$$) {
        return!1;
      }
      $data$$130_dx$$4$$ = $trigger$$.apply(this, [$event$$267$$, $data$$130_dx$$4$$, $dy$$4_smp$$]);
      this.$_updateVirtualBoundaries$($event$$267$$.shiftKey);
      $event$$267$$.shiftKey && ($data$$130_dx$$4$$ = this.$_updateRatio$($data$$130_dx$$4$$, $event$$267$$));
      $data$$130_dx$$4$$ = this.$_respectSize$($data$$130_dx$$4$$, $event$$267$$);
      this.$_updateCache$($data$$130_dx$$4$$);
      this.$_propagate$("resize", $event$$267$$);
      this.$_alsoresize_resize$($event$$267$$, this.ui());
      this.$_containment_resize$($event$$267$$, this.ui());
      this.position.top !== this.$prevPosition$.top && ($props$$13$$.top = this.position.top + "px");
      this.position.left !== this.$prevPosition$.left && ($props$$13$$.left = this.position.left + "px");
      this.size.width !== this.$prevSize$.width && ($props$$13$$.width = this.size.width + "px");
      this.size.height !== this.$prevSize$.height && ($props$$13$$.height = this.size.height + "px");
      $el$$12$$.css($props$$13$$);
      !this.$_helper$ && this.$_proportionallyResizeElements$.length && this.$_proportionallyResize$();
      $$$$24$$.isEmptyObject($props$$13$$) || this._trigger("resize", $event$$267$$, this.ui());
      return!1;
    }, $_mouseStop$:function($event$$268$$) {
      this.$resizing$ = !1;
      $$$$24$$("body").css("cursor", "auto");
      this.element.removeClass("oj-resizable-resizing");
      this.$_propagate$("stop", $event$$268$$);
      this.$_alsoresize_stop$($event$$268$$);
      this.$_containment_stop$($event$$268$$);
      return!1;
    }, $_updateVirtualBoundaries$:function($forceAspectRatio_pMinWidth$$) {
      var $pMaxWidth$$, $pMinHeight$$, $pMaxHeight$$, $b$$46_o$$3$$;
      $b$$46_o$$3$$ = this.options;
      $b$$46_o$$3$$ = {minWidth:this.$_isNumber$($b$$46_o$$3$$.minWidth) ? $b$$46_o$$3$$.minWidth : 0, maxWidth:this.$_isNumber$($b$$46_o$$3$$.maxWidth) ? $b$$46_o$$3$$.maxWidth : Infinity, minHeight:this.$_isNumber$($b$$46_o$$3$$.minHeight) ? $b$$46_o$$3$$.minHeight : 0, maxHeight:this.$_isNumber$($b$$46_o$$3$$.maxHeight) ? $b$$46_o$$3$$.maxHeight : Infinity};
      $forceAspectRatio_pMinWidth$$ && ($forceAspectRatio_pMinWidth$$ = $b$$46_o$$3$$.minHeight * this.$aspectRatio$, $pMinHeight$$ = $b$$46_o$$3$$.minWidth / this.$aspectRatio$, $pMaxWidth$$ = $b$$46_o$$3$$.maxHeight * this.$aspectRatio$, $pMaxHeight$$ = $b$$46_o$$3$$.maxWidth / this.$aspectRatio$, $forceAspectRatio_pMinWidth$$ > $b$$46_o$$3$$.minWidth && ($b$$46_o$$3$$.minWidth = $forceAspectRatio_pMinWidth$$), $pMinHeight$$ > $b$$46_o$$3$$.minHeight && ($b$$46_o$$3$$.minHeight = $pMinHeight$$), 
      $pMaxWidth$$ < $b$$46_o$$3$$.maxWidth && ($b$$46_o$$3$$.maxWidth = $pMaxWidth$$), $pMaxHeight$$ < $b$$46_o$$3$$.maxHeight && ($b$$46_o$$3$$.maxHeight = $pMaxHeight$$));
      this.$_vBoundaries$ = $b$$46_o$$3$$;
    }, $_updateCache$:function($data$$131$$) {
      this.offset = this.helper.offset();
      this.$_isNumber$($data$$131$$.left) && (this.position.left = $data$$131$$.left);
      this.$_isNumber$($data$$131$$.top) && (this.position.top = $data$$131$$.top);
      this.$_isNumber$($data$$131$$.height) && (this.size.height = $data$$131$$.height);
      this.$_isNumber$($data$$131$$.width) && (this.size.width = $data$$131$$.width);
    }, $_updateRatio$:function($data$$132$$) {
      var $cpos$$ = this.position, $csize$$ = this.size, $a$$76$$ = this.axis;
      this.$_isNumber$($data$$132$$.height) ? $data$$132$$.width = $data$$132$$.height * this.$aspectRatio$ : this.$_isNumber$($data$$132$$.width) && ($data$$132$$.height = $data$$132$$.width / this.$aspectRatio$);
      "sw" === $a$$76$$ && ($data$$132$$.left = $cpos$$.left + ($csize$$.width - $data$$132$$.width), $data$$132$$.top = null);
      "nw" === $a$$76$$ && ($data$$132$$.top = $cpos$$.top + ($csize$$.height - $data$$132$$.height), $data$$132$$.left = $cpos$$.left + ($csize$$.width - $data$$132$$.width));
      return $data$$132$$;
    }, $_respectSize$:function($data$$133$$) {
      var $o$$4$$ = this.$_vBoundaries$, $a$$77_ch$$2$$ = this.axis, $ismaxw$$ = this.$_isNumber$($data$$133$$.width) && $o$$4$$.maxWidth && $o$$4$$.maxWidth < $data$$133$$.width, $ismaxh$$ = this.$_isNumber$($data$$133$$.height) && $o$$4$$.maxHeight && $o$$4$$.maxHeight < $data$$133$$.height, $isminw$$ = this.$_isNumber$($data$$133$$.width) && $o$$4$$.minWidth && $o$$4$$.minWidth > $data$$133$$.width, $isminh$$ = this.$_isNumber$($data$$133$$.height) && $o$$4$$.minHeight && $o$$4$$.minHeight > $data$$133$$.height, 
      $dw$$ = this.$originalPosition$.left + this.$originalSize$.width, $dh$$ = this.position.top + this.size.height, $cw$$ = /sw|nw|w/.test($a$$77_ch$$2$$), $a$$77_ch$$2$$ = /nw|ne|n/.test($a$$77_ch$$2$$);
      $isminw$$ && ($data$$133$$.width = $o$$4$$.minWidth);
      $isminh$$ && ($data$$133$$.height = $o$$4$$.minHeight);
      $ismaxw$$ && ($data$$133$$.width = $o$$4$$.maxWidth);
      $ismaxh$$ && ($data$$133$$.height = $o$$4$$.maxHeight);
      $isminw$$ && $cw$$ && ($data$$133$$.left = $dw$$ - $o$$4$$.minWidth);
      $ismaxw$$ && $cw$$ && ($data$$133$$.left = $dw$$ - $o$$4$$.maxWidth);
      $isminh$$ && $a$$77_ch$$2$$ && ($data$$133$$.top = $dh$$ - $o$$4$$.minHeight);
      $ismaxh$$ && $a$$77_ch$$2$$ && ($data$$133$$.top = $dh$$ - $o$$4$$.maxHeight);
      $data$$133$$.width || $data$$133$$.height || $data$$133$$.left || !$data$$133$$.top ? $data$$133$$.width || $data$$133$$.height || $data$$133$$.top || !$data$$133$$.left || ($data$$133$$.left = null) : $data$$133$$.top = null;
      return $data$$133$$;
    }, $_proportionallyResize$:function() {
      if (this.$_proportionallyResizeElements$.length) {
        var $i$$242$$, $j$$37$$, $borders$$, $paddings$$, $prel$$, $element$$65$$ = this.helper || this.element;
        for ($i$$242$$ = 0;$i$$242$$ < this.$_proportionallyResizeElements$.length;$i$$242$$++) {
          $prel$$ = this.$_proportionallyResizeElements$[$i$$242$$];
          if (!this.$borderDif$) {
            for (this.$borderDif$ = [], $borders$$ = [$prel$$.css("borderTopWidth"), $prel$$.css("borderRightWidth"), $prel$$.css("borderBottomWidth"), $prel$$.css("borderLeftWidth")], $paddings$$ = [$prel$$.css("paddingTop"), $prel$$.css("paddingRight"), $prel$$.css("paddingBottom"), $prel$$.css("paddingLeft")], $j$$37$$ = 0;$j$$37$$ < $borders$$.length;$j$$37$$++) {
              this.$borderDif$[$j$$37$$] = (parseInt($borders$$[$j$$37$$], 10) || 0) + (parseInt($paddings$$[$j$$37$$], 10) || 0);
            }
          }
          $prel$$.css({height:$element$$65$$.height() - this.$borderDif$[0] - this.$borderDif$[2] || 0, width:$element$$65$$.width() - this.$borderDif$[1] - this.$borderDif$[3] || 0});
        }
      }
    }, $_renderProxy$:function() {
      this.element.offset();
      this.helper = this.element;
    }, $_change$:{e:function($event$$269$$, $dx$$5$$) {
      return{width:this.$originalSize$.width + $dx$$5$$};
    }, w:function($event$$270$$, $dx$$6$$) {
      return{left:this.$originalPosition$.left + $dx$$6$$, width:this.$originalSize$.width - $dx$$6$$};
    }, n:function($event$$271$$, $dx$$7$$, $dy$$5$$) {
      return{top:this.$originalPosition$.top + $dy$$5$$, height:this.$originalSize$.height - $dy$$5$$};
    }, s:function($event$$272$$, $dx$$8$$, $dy$$6$$) {
      return{height:this.$originalSize$.height + $dy$$6$$};
    }, se:function($event$$273$$, $dx$$9$$, $dy$$7$$) {
      return $$$$24$$.extend(this.$_change$.s.apply(this, arguments), this.$_change$.e.apply(this, [$event$$273$$, $dx$$9$$, $dy$$7$$]));
    }, sw:function($event$$274$$, $dx$$10$$, $dy$$8$$) {
      return $$$$24$$.extend(this.$_change$.s.apply(this, arguments), this.$_change$.w.apply(this, [$event$$274$$, $dx$$10$$, $dy$$8$$]));
    }, ne:function($event$$275$$, $dx$$11$$, $dy$$9$$) {
      return $$$$24$$.extend(this.$_change$.n.apply(this, arguments), this.$_change$.e.apply(this, [$event$$275$$, $dx$$11$$, $dy$$9$$]));
    }, nw:function($event$$276$$, $dx$$12$$, $dy$$10$$) {
      return $$$$24$$.extend(this.$_change$.n.apply(this, arguments), this.$_change$.w.apply(this, [$event$$276$$, $dx$$12$$, $dy$$10$$]));
    }}, $_propagate$:function($n$$25$$, $event$$277$$) {
      "resize" !== $n$$25$$ && this._trigger($n$$25$$, $event$$277$$, this.ui());
    }, $_alsoresize_start$:function() {
      function $_store$$($exp$$3$$) {
        $$$$24$$($exp$$3$$).each(function() {
          var $el$$14$$ = $$$$24$$(this);
          $el$$14$$.data("oj-resizable-alsoresize", {width:parseInt($el$$14$$.width(), 10), height:parseInt($el$$14$$.height(), 10), left:parseInt($el$$14$$.css("left"), 10), top:parseInt($el$$14$$.css("top"), 10)});
        });
      }
      var $o$$6$$ = this.options;
      "object" !== typeof $o$$6$$.alsoResize || $o$$6$$.alsoResize.parentNode ? $_store$$($o$$6$$.alsoResize) : $o$$6$$.alsoResize.length ? ($o$$6$$.alsoResize = $o$$6$$.alsoResize[0], $_store$$($o$$6$$.alsoResize)) : $$$$24$$.each($o$$6$$.alsoResize, function($exp$$4$$) {
        $_store$$($exp$$4$$);
      });
    }, $_alsoresize_resize$:function($event$$278$$, $ui$$9$$) {
      function $_alsoResize$$($exp$$5$$, $c$$26$$) {
        $$$$24$$($exp$$5$$).each(function() {
          var $el$$15$$ = $$$$24$$(this), $start$$29$$ = $$$$24$$(this).data("oj-resizable-alsoresize"), $style$$12$$ = {};
          $$$$24$$.each($c$$26$$ && $c$$26$$.length ? $c$$26$$ : $el$$15$$.parents($ui$$9$$.$originalElement$[0]).length ? ["width", "height"] : ["width", "height", "top", "left"], function($i$$243$$, $prop$$73$$) {
            var $sum$$ = ($start$$29$$[$prop$$73$$] || 0) + ($delta$$3$$[$prop$$73$$] || 0);
            $sum$$ && 0 <= $sum$$ && ($style$$12$$[$prop$$73$$] = $sum$$ || null);
          });
          $el$$15$$.css($style$$12$$);
        });
      }
      var $o$$7$$ = this.options, $os$$ = this.$originalSize$, $op$$ = this.$originalPosition$, $delta$$3$$ = {height:this.size.height - $os$$.height || 0, width:this.size.width - $os$$.width || 0, top:this.position.top - $op$$.top || 0, left:this.position.left - $op$$.left || 0};
      "object" !== typeof $o$$7$$.alsoResize || $o$$7$$.alsoResize.nodeType ? $_alsoResize$$($o$$7$$.alsoResize, null) : $$$$24$$.each($o$$7$$.alsoResize, function($exp$$6$$, $c$$27$$) {
        $_alsoResize$$($exp$$6$$, $c$$27$$);
      });
    }, $_alsoresize_stop$:function() {
      $$$$24$$(this).removeData("resizable-alsoresize");
    }, $_containment_start$:function() {
      var $element$$66$$, $p$$6$$, $co_oc$$, $ch$$3_height$$21$$, $cw$$1_width$$24$$, $that$$9$$ = this, $ce_el$$16$$ = $that$$9$$.element;
      $co_oc$$ = $that$$9$$.options.containment;
      if ($ce_el$$16$$ = $co_oc$$ instanceof $$$$24$$ ? $co_oc$$.get(0) : /parent/.test($co_oc$$) ? $ce_el$$16$$.parent().get(0) : $co_oc$$) {
        $that$$9$$.$containerElement$ = $$$$24$$($ce_el$$16$$), /document/.test($co_oc$$) || $co_oc$$ === document ? ($that$$9$$.$containerOffset$ = {left:0, top:0}, $that$$9$$.$containerPosition$ = {left:0, top:0}, $that$$9$$.$parentData$ = {element:$$$$24$$(document), left:0, top:0, width:$$$$24$$(document).width(), height:$$$$24$$(document).height() || document.body.parentNode.scrollHeight}) : ($element$$66$$ = $$$$24$$($ce_el$$16$$), $p$$6$$ = [], $$$$24$$(["Top", "Right", "Left", "Bottom"]).each(function($i$$244$$, 
        $name$$88$$) {
          $p$$6$$[$i$$244$$] = $that$$9$$.$_num$($element$$66$$.css("padding" + $name$$88$$));
        }), $that$$9$$.$containerOffset$ = $element$$66$$.offset(), $that$$9$$.$containerPosition$ = $element$$66$$.position(), $that$$9$$.$containerSize$ = {height:$element$$66$$.innerHeight() - $p$$6$$[3], width:$element$$66$$.innerWidth() - $p$$6$$[1]}, $co_oc$$ = $that$$9$$.$containerOffset$, $ch$$3_height$$21$$ = $that$$9$$.$containerSize$.height, $cw$$1_width$$24$$ = $that$$9$$.$containerSize$.width, $cw$$1_width$$24$$ = $that$$9$$.$_hasScroll$($ce_el$$16$$, "left") ? $ce_el$$16$$.scrollWidth : 
        $cw$$1_width$$24$$, $ch$$3_height$$21$$ = $that$$9$$.$_hasScroll$($ce_el$$16$$) ? $ce_el$$16$$.scrollHeight : $ch$$3_height$$21$$, $that$$9$$.$parentData$ = {element:$ce_el$$16$$, left:$co_oc$$.left, top:$co_oc$$.top, width:$cw$$1_width$$24$$, height:$ch$$3_height$$21$$});
      }
    }, $_containment_resize$:function($event$$279$$, $ui$$10$$) {
      var $o$$9_woset$$, $co$$1_hoset$$, $cop_isParent$$, $cp_isOffsetRelative$$;
      $o$$9_woset$$ = this.options;
      $co$$1_hoset$$ = this.$containerOffset$;
      $cp_isOffsetRelative$$ = this.position;
      var $pRatio$$ = $event$$279$$.shiftKey;
      $cop_isParent$$ = {top:0, left:0};
      var $ce$$1$$ = this.$containerElement$, $continueResize$$ = !0;
      $ce$$1$$[0] !== document && /static/.test($ce$$1$$.css("position")) && ($cop_isParent$$ = $co$$1_hoset$$);
      $cp_isOffsetRelative$$.left < (this.$_helper$ ? $co$$1_hoset$$.left : 0) && (this.size.width += this.$_helper$ ? this.position.left - $co$$1_hoset$$.left : this.position.left - $cop_isParent$$.left, $pRatio$$ && (this.size.height = this.size.width / this.$aspectRatio$, $continueResize$$ = !1), this.position.left = $o$$9_woset$$.helper ? $co$$1_hoset$$.left : 0);
      $cp_isOffsetRelative$$.top < (this.$_helper$ ? $co$$1_hoset$$.top : 0) && (this.size.height += this.$_helper$ ? this.position.top - $co$$1_hoset$$.top : this.position.top, $pRatio$$ && (this.size.width = this.size.height * this.$aspectRatio$, $continueResize$$ = !1), this.position.top = this.$_helper$ ? $co$$1_hoset$$.top : 0);
      this.offset.left = this.$parentData$.left + this.position.left;
      this.offset.top = this.$parentData$.top + this.position.top;
      $o$$9_woset$$ = Math.abs((this.$_helper$ ? this.offset.left - $cop_isParent$$.left : this.offset.left - $co$$1_hoset$$.left) + this.$sizeDiff$.width);
      $co$$1_hoset$$ = Math.abs((this.$_helper$ ? this.offset.top - $cop_isParent$$.top : this.offset.top - $co$$1_hoset$$.top) + this.$sizeDiff$.height);
      $cop_isParent$$ = this.$containerElement$.get(0) === this.element.parent().get(0);
      $cp_isOffsetRelative$$ = /relative|absolute/.test(this.$containerElement$.css("position"));
      $cop_isParent$$ && $cp_isOffsetRelative$$ && ($o$$9_woset$$ -= Math.abs(this.$parentData$.left));
      $o$$9_woset$$ + this.size.width >= this.$parentData$.width && (this.size.width = this.$parentData$.width - $o$$9_woset$$, $pRatio$$ && (this.size.height = this.size.width / this.$aspectRatio$, $continueResize$$ = !1));
      $co$$1_hoset$$ + this.size.height >= this.$parentData$.height && (this.size.height = this.$parentData$.height - $co$$1_hoset$$, $pRatio$$ && (this.size.width = this.size.height * this.$aspectRatio$, $continueResize$$ = !1));
      $continueResize$$ || (this.position.left = $ui$$10$$.$prevPosition$.left, this.position.top = $ui$$10$$.$prevPosition$.top, this.size.width = $ui$$10$$.$prevSize$.width, this.size.height = $ui$$10$$.$prevSize$.height);
    }, $_containment_stop$:function() {
      var $o$$10$$ = this.options, $co$$2$$ = this.$containerOffset$, $cop$$1$$ = this.$containerPosition$, $ce$$2$$ = this.$containerElement$, $h$$6_helper$$ = $$$$24$$(this.helper), $ho$$ = $h$$6_helper$$.offset(), $w$$7$$ = $h$$6_helper$$.outerWidth() - this.$sizeDiff$.width, $h$$6_helper$$ = $h$$6_helper$$.outerHeight() - this.$sizeDiff$.height;
      this.$_helper$ && !$o$$10$$.animate && /relative/.test($ce$$2$$.css("position")) && $$$$24$$(this).css({left:$ho$$.left - $cop$$1$$.left - $co$$2$$.left, width:$w$$7$$, height:$h$$6_helper$$});
      this.$_helper$ && !$o$$10$$.animate && /static/.test($ce$$2$$.css("position")) && $$$$24$$(this).css({left:$ho$$.left - $cop$$1$$.left - $co$$2$$.left, width:$w$$7$$, height:$h$$6_helper$$});
    }, ui:function() {
      return{$originalElement$:this.$originalElement$, element:this.element, helper:this.helper, position:this.position, size:this.size, $originalSize$:this.$originalSize$, $originalPosition$:this.$originalPosition$, $prevSize$:this.$prevSize$, $prevPosition$:this.$prevPosition$};
    }});
  })();
  (function() {
    var $sizeRelatedOptions$$ = {}, $resizableRelatedOptions$$ = {};
    $oj$$24$$.$__registerWidget$("oj.ojDialog", $$$$24$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{cancelBehavior:"icon", dragAffordance:"title-bar", initialVisibility:"show", modality:"modal", position:{my:"center", at:"center", of:window, collision:"fit", $using$:function($pos$$7$$) {
      var $topOffset$$ = $$$$24$$(this).css($pos$$7$$).offset().top;
      0 > $topOffset$$ && $$$$24$$(this).css("top", $pos$$7$$.top - $topOffset$$);
    }}, resizeBehavior:"resizable", role:"dialog", title:null, beforeClose:null, beforeOpen:null, close:null, focus:null, open:null, resize:null, resizeStart:null, resizeStop:null}, _ComponentCreate:function() {
      this._super();
      this.$originalCss$ = {display:this.element[0].style.display, width:this.element[0].style.width, height:this.element[0].style.height};
      this.$originalPosition$ = {parent:this.element.parent(), index:this.element.parent().children().index(this.element)};
      this.$originalTitle$ = this.element.attr("title");
      this.options.title = this.options.title || this.$originalTitle$;
      this.$_createWrapper$();
      this.element.show().removeAttr("title").addClass("oj-dialog-content oj-dialog-default-content").appendTo(this.$uiDialog$);
      this.$userDefinedDialogHeader$ = !1;
      if (this.element.find(".oj-dialog").length) {
        var $that$$12$$ = this;
        this.element.find(".oj-dialog-header").each(function($index$$168$$, $li$$) {
          var $dialogHeader$$ = $$$$24$$($li$$);
          if (!$dialogHeader$$.closest(".oj-dialog-body").length) {
            return $that$$12$$.$_userDefinedHeader$ = $dialogHeader$$, $that$$12$$.$userDefinedDialogHeader$ = !0, !1;
          }
        });
      } else {
        this.$_userDefinedHeader$ = this.element.find(".oj-dialog-header"), this.$_userDefinedHeader$.length && (this.$userDefinedDialogHeader$ = !0);
      }
      this.$userDefinedDialogHeader$ ? (this.$_createPlaceHolderHeader$(this.$_userDefinedHeader$), this.$_userDefinedHeader$.prependTo(this.$uiDialog$), "icon" === this.options.cancelBehavior && this.$_createCloseButton$(this.$_userDefinedHeader$)) : this.$_createTitlebar$();
      this.$uiDialogFooter$ = this.element.find(".oj-dialog-footer");
      this.$_createPlaceHolderFooter$(this.$uiDialogFooter$);
      this.$uiDialogFooter$ && (this.$uiDialogFooter$.addClass("oj-helper-clearfix"), this.$uiDialogFooter$.appendTo(this.$uiDialog$));
      "title-bar" === this.options.dragAffordance && $$$$24$$.fn.draggable && this.$_makeDraggable$();
      this._isOpen = !1;
      this._super();
    }, _init:function() {
      "show" === this.options.initialVisibility && this.open();
    }, $_appendTo$:function() {
      return this.document.find("body").eq(0);
    }, _destroy:function() {
      this.$_destroyOverlay$();
      this.$uiDialogFooter$ && (this.$uiDialogFooter$.removeClass("oj-helper-clearfix"), $$$$24$$("#" + this.$_placeHolderFooterId$).replaceWith(this.$uiDialogFooter$));
      this.$uiDialogTitlebarCloseWrapper$ && (this.$uiDialogTitlebarCloseWrapper$.remove(), this.$uiDialogTitlebarCloseWrapper$ = null);
      this.$uiDialogTitlebarClose$ = null;
      if (this.$userDefinedDialogHeader$) {
        var $header$$6$$ = this.$uiDialog$.find(".oj-dialog-header");
        $header$$6$$ && $$$$24$$("#" + this.$_placeHolderHeaderId$).replaceWith($header$$6$$);
      }
      this.element.removeUniqueId().removeClass("oj-dialog-content oj-dialog-default-content").css(this.$originalCss$).detach();
      this.$uiDialog$.stop(!0, !0).remove();
      this.$originalTitle$ && this.element.attr("title", this.$originalTitle$);
      $$$$24$$("#" + this.$_placeHolderId$).replaceWith(this.element);
      this.$_destroyPutback$();
    }, refresh:function() {
      this._super();
    }, widget:function() {
      return this.$uiDialog$;
    }, disable:$$$$24$$.noop, enable:$$$$24$$.noop, close:function($event$$280$$) {
      var $that$$13$$ = this;
      this._isOpen && !1 !== this._trigger("beforeClose", $event$$280$$) && (this._isOpen = !1, this.$_destroyOverlay$(), this.opener.filter(":focusable").focus().length || $$$$24$$(this.document[0].activeElement).blur(), this._hide(this.$uiDialog$, null, function() {
        $that$$13$$._trigger("close", $event$$280$$);
      }), $$$$24$$("#" + this.$_placeHolderId$).replaceWith($$$$24$$("#" + this.$_wrapperId$)));
    }, isOpen:function() {
      return this._isOpen;
    }, $_moveToTop$:function($event$$281$$, $silent$$21$$) {
      var $moved$$ = !!this.$uiDialog$.nextAll(":visible").insertBefore(this.$uiDialog$).length;
      $moved$$ && !$silent$$21$$ && this._trigger("focus", $event$$281$$);
      return $moved$$;
    }, open:function($event$$282$$) {
      if (!1 !== this._trigger("beforeOpen", $event$$282$$)) {
        var $that$$14$$ = this;
        this._isOpen ? this.$_moveToTop$() && this.$_focusTabbable$() : (this._isOpen = !0, this.opener = $$$$24$$(this.document[0].activeElement), this.$_size$(), this.$_relocateWithPutback$(), this.$_createOverlay$(), this.$_position$(), this.$_moveToTop$(null, !0), this._show(this.$uiDialog$, null, function() {
          $that$$14$$.$_focusTabbable$();
          $that$$14$$._trigger("focus");
        }), this._trigger("open"));
      }
    }, $_focusTabbable$:function() {
      var $hasFocus$$ = this.element.find("[autofocus]");
      $hasFocus$$.length || ($hasFocus$$ = this.element.find(":tabbable"));
      $hasFocus$$.length || this.$uiDialogFooter$ && ($hasFocus$$ = this.$uiDialogFooter$.filter(":tabbable"));
      $hasFocus$$.length || this.$uiDialogTitlebarClose$ && ($hasFocus$$ = this.$uiDialogTitlebarClose$.filter(":tabbable"));
      $hasFocus$$.length || ($hasFocus$$ = this.$uiDialog$);
      $hasFocus$$.eq(0).focus();
    }, _keepFocus:function($event$$283$$) {
      function $checkFocus$$() {
        var $activeElement$$ = this.document[0].activeElement;
        this.$uiDialog$[0] === $activeElement$$ || $$$$24$$.contains(this.$uiDialog$[0], $activeElement$$) || this.$_focusTabbable$();
      }
      $event$$283$$.preventDefault();
      $checkFocus$$.call(this);
      this._delay($checkFocus$$);
    }, $_AfterCreate$:function() {
      this._super();
      var $tempE$$ = $$$$24$$("\x3cdiv\x3e\x3c/div\x3e");
      this.$_cssMinWidth$ = this.$uiDialog$.css("min-width");
      "none" != this.$_cssMinWidth$ ? ($tempE$$.width(this.$_cssMinWidth$), this.$_cssMinWidthNumeric$ = $tempE$$.width(), this.$_isNumber$(this.$_cssMinWidthNumeric$) && (this.$_cssMinWidthNumeric$ = Math.round(this.$_cssMinWidthNumeric$))) : this.$_cssMinWidthNumeric$ = "none";
      this.$_cssMaxWidth$ = this.$uiDialog$.css("max-width");
      "none" != this.$_cssMaxWidth$ ? ($tempE$$.width(this.$_cssMaxWidth$), this.$_cssMaxWidthNumeric$ = $tempE$$.width(), this.$_isNumber$(this.$_cssMaxWidthNumeric$) && (this.$_cssMaxWidthNumeric$ = Math.round(this.$_cssMaxWidthNumeric$))) : this.$_cssMaxWidthNumeric$ = "none";
      this.$_cssMinHeight$ = this.$uiDialog$.css("min-height");
      "none" != this.$_cssMinHeight$ ? ($tempE$$.height(this.$_cssMinHeight$), this.$_cssMinHeightNumeric$ = $tempE$$.height(), this.$_isNumber$(this.$_cssMinHeightNumeric$) && (this.$_cssMinHeightNumeric$ = Math.round(this.$_cssMinHeightNumeric$))) : this.$_cssMinHeightNumeric$ = "none";
      this.$_cssMaxHeight$ = this.$uiDialog$.css("max-height");
      "none" != this.$_cssMaxHeight$ ? ($tempE$$.height(this.$_cssMaxHeight$), this.$_cssMaxHeightNumeric$ = $tempE$$.height(), this.$_isNumber$(this.$_cssMaxHeightNumeric$) && (this.$_cssMaxHeightNumeric$ = Math.round(this.$_cssMaxHeightNumeric$))) : this.$_cssMaxHeightNumeric$ = "none";
      this.$_cssHeight$ = this.$uiDialog$.css("height");
      "auto" != this.$_cssHeight$ ? ($tempE$$.height(this.$_cssHeight$), this.$_cssHeightNumeric$ = $tempE$$.height(), this.$_isNumber$(this.$_cssHeightNumeric$) && (this.$_cssHeightNumeric$ = Math.ceil(this.$_cssHeightNumeric$))) : this.$_cssHeightNumeric$ = "auto";
      this.$_cssWidth$ = this.$uiDialog$.css("width");
      "auto" != this.$_cssWidth$ ? ($tempE$$.height(this.$_cssWidth$), this.$_cssWidthNumeric$ = $tempE$$.height(), this.$_isNumber$(this.$_cssWidthNumeric$) && (this.$_cssWidthNumeric$ = Math.ceil(this.$_cssWidthNumeric$))) : this.$_cssWidthNumeric$ = "auto";
      $tempE$$.remove();
      "resizable" === this.options.resizeBehavior && $$$$24$$.fn.resizable && this.$_makeResizable$();
    }, $_isNumber$:function($value$$195$$) {
      return!isNaN(parseInt($value$$195$$, 10));
    }, $_createWrapper$:function() {
      this.element.uniqueId();
      this.$_elementId$ = this.element.attr("id");
      this.$_wrapperId$ = "ojDialogWrapper-" + this.$_elementId$;
      this.$uiDialog$ = $$$$24$$("\x3cdiv\x3e").addClass("oj-dialog oj-helper-reset-inheritable oj-component oj-dialog-front ").hide().attr({tabIndex:-1, role:this.options.role, id:this.$_wrapperId$});
      this.$uiDialog$.insertBefore(this.element);
      this._on(this.$uiDialog$, {keydown:function($event$$284$$) {
        if ("none" != this.options.cancelBehavior && !$event$$284$$.isDefaultPrevented() && $event$$284$$.keyCode && $event$$284$$.keyCode === $$$$24$$.ui.keyCode.ESCAPE) {
          $event$$284$$.preventDefault(), this.close($event$$284$$);
        } else {
          if ($event$$284$$.keyCode === $$$$24$$.ui.keyCode.TAB) {
            var $last$$3_tabbables$$ = this.$uiDialog$.find(":tabbable"), $first$$5$$ = $last$$3_tabbables$$.filter(":first"), $last$$3_tabbables$$ = $last$$3_tabbables$$.filter(":last");
            $event$$284$$.target !== $last$$3_tabbables$$[0] && $event$$284$$.target !== this.$uiDialog$[0] || $event$$284$$.shiftKey ? $event$$284$$.target !== $first$$5$$[0] && $event$$284$$.target !== this.$uiDialog$[0] || !$event$$284$$.shiftKey || ($last$$3_tabbables$$.focus(1), $event$$284$$.preventDefault()) : ($first$$5$$.focus(1), $event$$284$$.preventDefault());
          }
        }
      }, mousedown:function($event$$285$$) {
        this.$_moveToTop$($event$$285$$) && this.$_focusTabbable$();
      }});
      this.element.find("[aria-describedby]").length || this.$uiDialog$.attr({"aria-describedby":this.element.uniqueId().attr("id")});
    }, $_createCloseButton$:function($domDestination$$) {
      this.$uiDialogTitlebarCloseWrapper$ = $$$$24$$("\x3cdiv\x3e").addClass("oj-dialog-header-close-wrapper").attr("tabindex", "1").attr("aria-label", "close").attr("role", "button").appendTo($domDestination$$);
      this.$uiDialogTitlebarClose$ = $$$$24$$("\x3cspan\x3e").addClass("oj-component-icon oj-clickable-icon oj-dialog-close-icon").attr("alt", "close icon").prependTo(this.$uiDialogTitlebarCloseWrapper$);
      this._on(this.$uiDialogTitlebarCloseWrapper$, {click:function($event$$286$$) {
        $event$$286$$.preventDefault();
        this.close($event$$286$$);
      }, mousedown:function($event$$287$$) {
        $$$$24$$($event$$287$$.currentTarget).addClass("oj-active");
      }, mouseup:function($event$$288$$) {
        $$$$24$$($event$$288$$.currentTarget).removeClass("oj-active");
      }, mouseenter:function($event$$289$$) {
        $$$$24$$($event$$289$$.currentTarget).addClass("oj-hover");
      }, mouseleave:function($currTarget$$7_event$$290$$) {
        $currTarget$$7_event$$290$$ = $currTarget$$7_event$$290$$.currentTarget;
        $$$$24$$($currTarget$$7_event$$290$$).removeClass("oj-hover");
        $$$$24$$($currTarget$$7_event$$290$$).removeClass("oj-active");
      }, keydown:function($event$$291$$) {
        $event$$291$$.keyCode && $event$$291$$.keyCode === $$$$24$$.ui.keyCode.SPACE && ($event$$291$$.preventDefault(), this.close($event$$291$$));
      }});
    }, $_createTitlebar$:function() {
      var $uiDialogTitle$$;
      this.$uiDialogTitlebar$ = $$$$24$$("\x3cdiv\x3e").addClass("oj-dialog-header oj-helper-clearfix").prependTo(this.$uiDialog$);
      this._on(this.$uiDialogTitlebar$, {mousedown:function($event$$292$$) {
        $$$$24$$($event$$292$$.target).closest(".oj-dialog-close-icon") || this.$uiDialog$.focus();
      }});
      "icon" === this.options.cancelBehavior && this.$_createCloseButton$(this.$uiDialogTitlebar$);
      $uiDialogTitle$$ = $$$$24$$("\x3cspan\x3e").uniqueId().addClass("oj-dialog-title").prependTo(this.$uiDialogTitlebar$);
      this.$_title$($uiDialogTitle$$);
      this.$uiDialog$.attr({"aria-labelledby":$uiDialogTitle$$.attr("id")});
    }, $_title$:function($title$$9$$) {
      this.options.title || $title$$9$$.html("\x26#160;");
      $title$$9$$.text(this.options.title);
    }, $_makeDraggable$:function() {
      function $filteredUi$$($ui$$11$$) {
        return{position:$ui$$11$$.position, offset:$ui$$11$$.offset};
      }
      var $that$$15$$ = this, $options$$290$$ = this.options;
      this.$uiDialog$.draggable({cancel:".oj-dialog-content, .oj-dialog-header-close", handle:".oj-dialog-header", containment:"document", start:function($event$$293$$, $ui$$12$$) {
        $$$$24$$(this).addClass("oj-dialog-dragging");
        $that$$15$$.$_blockFrames$();
        $that$$15$$._trigger("dragStart", $event$$293$$, $filteredUi$$($ui$$12$$));
      }, drag:function($event$$294$$, $ui$$13$$) {
        $that$$15$$._trigger("drag", $event$$294$$, $filteredUi$$($ui$$13$$));
      }, stop:function($event$$295$$, $ui$$14$$) {
        $options$$290$$.position = [$ui$$14$$.position.left - $that$$15$$.document.scrollLeft(), $ui$$14$$.position.top - $that$$15$$.document.scrollTop()];
        $$$$24$$(this).removeClass("oj-dialog-dragging");
        $that$$15$$.$_unblockFrames$();
        $that$$15$$._trigger("dragStop", $event$$295$$, $filteredUi$$($ui$$14$$));
      }});
    }, $_makeResizable$:function() {
      function $filteredUi$$1$$($ui$$15$$) {
        return{originalPosition:$ui$$15$$.$originalPosition$, originalSize:$ui$$15$$.$originalSize$, position:$ui$$15$$.position, size:$ui$$15$$.size};
      }
      var $that$$16$$ = this, $position$$9$$ = this.$uiDialog$.css("position");
      this.$_resizableComponent$ = this.$uiDialog$.ojResizable.bind(this.$uiDialog$);
      this.$_resizableComponent$({cancel:".oj-dialog-content", containment:"document", alsoResize:this.element, minHeight:this.$_minHeight$(), maxHeight:this.$_cssMaxHeightNumeric$, minWidth:this.$_cssMinWidthNumeric$, maxWidth:this.$_cssMaxWidthNumeric$, handles:"n,e,s,w,se,sw,ne,nw", start:function($event$$296$$, $ui$$16$$) {
        $$$$24$$(this).addClass("oj-dialog-resizing");
        $that$$16$$.$_blockFrames$();
        $that$$16$$._trigger("resizeStart", $event$$296$$, $filteredUi$$1$$($ui$$16$$));
      }, resize:function($event$$297$$, $ui$$17$$) {
        $that$$16$$._trigger("resize", $event$$297$$, $filteredUi$$1$$($ui$$17$$));
      }, stop:function($event$$298$$, $ui$$18$$) {
        this.$_cssHeightNumeric$ = $$$$24$$(this).height();
        this.$_cssWidthNumeric$ = $$$$24$$(this).width();
        $$$$24$$(this).removeClass("oj-dialog-resizing");
        $that$$16$$.$_unblockFrames$();
        $that$$16$$._trigger("resizeStop", $event$$298$$, $filteredUi$$1$$($ui$$18$$));
      }}).css("position", $position$$9$$);
    }, $_minHeight$:function() {
      return "auto" === this.$_cssHeightNumeric$ ? this.$_cssMinHeightNumeric$ : this.$_cssMinHeightNumeric$ < this.$_cssHeightNumeric$ ? this.$_cssMinHeightNumeric$ : this.$_cssHeightNumeric$;
    }, $_position$:function() {
      var $isVisible$$ = this.$uiDialog$.is(":visible");
      $isVisible$$ || this.$uiDialog$.show();
      var $pos$$8$$ = this.options.position, $isRtl$$1$$ = "rtl" === this.$_GetReadingDirection$();
      this.$uiDialog$.position($oj$$24$$.$PositionUtils$.$normalizeHorizontalAlignment$($pos$$8$$, $isRtl$$1$$));
      $isVisible$$ || this.$uiDialog$.hide();
    }, _setOptions:function($options$$293$$, $flags$$29$$) {
      var $that$$17$$ = this, $resize$$2$$ = !1, $resizableOptions$$ = {};
      $$$$24$$.each($options$$293$$, function($key$$83$$, $value$$196$$) {
        $that$$17$$._setOption($key$$83$$, $value$$196$$, $flags$$29$$);
        $key$$83$$ in $sizeRelatedOptions$$ && ($resize$$2$$ = !0);
        $key$$83$$ in $resizableRelatedOptions$$ && ($resizableOptions$$[$key$$83$$] = $value$$196$$);
      });
      $resize$$2$$ && (this.$_size$(), this.$_position$());
      this.$uiDialog$.is(":data(oj-resizable)") && this.$_resizableComponent$("option", $resizableOptions$$);
    }, _setOption:function($key$$84$$, $value$$197$$, $flags$$30_isDraggable$$) {
      var $isResizable_uiDialog$$;
      $isResizable_uiDialog$$ = this.$uiDialog$;
      "disabled" !== $key$$84$$ && (this._super($key$$84$$, $value$$197$$, $flags$$30_isDraggable$$), "dragAffordance" === $key$$84$$ && (($flags$$30_isDraggable$$ = $isResizable_uiDialog$$.is(":data(oj-draggable)")) && !$value$$197$$ && $isResizable_uiDialog$$.draggable("destroy"), !$flags$$30_isDraggable$$ && $value$$197$$ && this.$_makeDraggable$()), "position" === $key$$84$$ && this.$_position$(), "resizeBehavior" === $key$$84$$ && ($isResizable_uiDialog$$ = !1, this.$_resizableComponent$ && 
      ($isResizable_uiDialog$$ = !0), $isResizable_uiDialog$$ && "resizable" != $value$$197$$ && (this.$_resizableComponent$("destroy"), this.$_resizableComponent$ = null), $isResizable_uiDialog$$ || "resizable" !== $value$$197$$ || this.$_makeResizable$()), "title" === $key$$84$$ && this.$_title$(this.$uiDialogTitlebar$.find(".oj-dialog-title")));
    }, $_size$:function() {
      var $nonContentHeight$$, $minContentHeight$$, $maxContentHeight$$;
      this.element.show().css({width:"auto", minHeight:0, maxHeight:"none", height:0});
      this.$_cssMinWidthNumeric$ > this.$_cssWidthNumeric$ && (this.$_cssWidthNumeric$ = this.$_cssMinWidthNumeric$);
      $nonContentHeight$$ = this.$uiDialog$.css({height:"auto", width:this.$_cssWidthNumeric$}).outerHeight();
      $minContentHeight$$ = Math.max(0, this.$_cssMinHeightNumeric$ - $nonContentHeight$$);
      $maxContentHeight$$ = "number" === typeof this.$_cssMaxHeightNumeric$ ? Math.max(0, this.$_cssMaxHeightNumeric$ - $nonContentHeight$$) : "none";
      "auto" === this.$_cssHeightNumeric$ ? this.element.css({minHeight:$minContentHeight$$, maxHeight:$maxContentHeight$$, height:"auto"}) : this.element.height(Math.max(0, this.$_cssHeightNumeric$ + 2 - $nonContentHeight$$));
      this.$uiDialog$.is(":data(oj-resizable)") && this.$_resizableComponent$("option", "minHeight", this.$_minHeight$());
    }, $_blockFrames$:function() {
      this.$iframeBlocks$ = this.document.find("iframe").map(function() {
        var $iframe$$ = $$$$24$$(this), $offset$$23$$ = $iframe$$.offset();
        return $$$$24$$("\x3cdiv\x3e").css({position:"absolute", width:$iframe$$.outerWidth(), height:$iframe$$.outerHeight()}).appendTo($iframe$$.parent()).offset($offset$$23$$)[0];
      });
    }, $_unblockFrames$:function() {
      this.$iframeBlocks$ && (this.$iframeBlocks$.remove(), delete this.$iframeBlocks$);
    }, $_allowInteraction$:function($event$$299$$) {
      return $$$$24$$($event$$299$$.target).closest(".oj-dialog").length ? !0 : !!$$$$24$$($event$$299$$.target).closest(".oj-datepicker").length;
    }, $_relocateWithPutback$:function() {
      this.$_placeHolderId$ = "ojDialogPlaceHolder-" + this.$_elementId$;
      this.$_placeHolder$ = $$$$24$$("\x3cdiv\x3e").hide().attr({id:this.$_placeHolderId$});
      this.$_placeHolder$.insertBefore($$$$24$$("#" + this.$_wrapperId$));
      this.$uiDialog$.appendTo(this.$_appendTo$());
    }, $_createPlaceHolderFooter$:function($domElement$$) {
      this.$_placeHolderFooterId$ = "ojDialogPlaceHolderFooter-" + this.$_elementId$;
      this.$_placeHolderFooter$ = $$$$24$$("\x3cdiv\x3e").hide().attr({id:this.$_placeHolderFooterId$});
      this.$_placeHolderFooter$.insertBefore($domElement$$);
    }, $_createPlaceHolderHeader$:function($domElement$$1$$) {
      this.$_placeHolderHeaderId$ = "ojDialogPlaceHolderHeader-" + this.$_elementId$;
      this.$_placeHolderHeader$ = $$$$24$$("\x3cdiv\x3e").hide().attr({id:this.$_placeHolderHeaderId$});
      this.$_placeHolderHeader$.insertBefore($domElement$$1$$);
    }, $_destroyPutback$:function() {
      this.$placeHolder$ && (this.$placeHolder$.remove(), this.$placeHolder$ = null);
    }, $_createOverlay$:function() {
      if ("modeless" !== this.options.modality) {
        var $that$$18$$ = this, $widgetFullName$$ = this.widgetFullName;
        $$$$24$$.ui.dialog.overlayInstances || this._delay(function() {
          $$$$24$$.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function($event$$300$$) {
            $that$$18$$.$_allowInteraction$($event$$300$$) || ($event$$300$$.preventDefault(), $$$$24$$(".oj-dialog:visible:last .oj-dialog-content").data($widgetFullName$$).$_focusTabbable$());
          });
        });
        this.$overlay$ = $$$$24$$("\x3cdiv\x3e").addClass("oj-dialog-overlay oj-dialog-front");
        this.$overlay$.appendTo(this.$_appendTo$());
        this._on(this.$overlay$, {mousedown:"_keepFocus"});
        $$$$24$$.ui.dialog.overlayInstances++;
      }
    }, $_destroyOverlay$:function() {
      "modeless" !== this.options.modality && this.$overlay$ && ($$$$24$$.ui.dialog.overlayInstances--, $$$$24$$.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.$overlay$.remove(), this.$overlay$ = null);
    }, getNodeBySubId:function($dotSubId_locator$$17_subId$$13$$) {
      if (null == $dotSubId_locator$$17_subId$$13$$) {
        return this.element ? this.element[0] : null;
      }
      $dotSubId_locator$$17_subId$$13$$ = $dotSubId_locator$$17_subId$$13$$.subId;
      switch($dotSubId_locator$$17_subId$$13$$) {
        case "oj-dialog":
        ;
        case "oj-dialog-header":
        ;
        case "oj-dialog-body":
        ;
        case "oj-dialog-footer":
        ;
        case "oj-dialog-content":
        ;
        case "oj-dialog-header-close":
        ;
        case "oj-resizable-n":
        ;
        case "oj-resizable-e":
        ;
        case "oj-resizable-s":
        ;
        case "oj-resizable-w":
        ;
        case "oj-resizable-se":
        ;
        case "oj-resizable-sw":
        ;
        case "oj-resizable-ne":
        ;
        case "oj-resizable-nw":
          return $dotSubId_locator$$17_subId$$13$$ = "." + $dotSubId_locator$$17_subId$$13$$, this.widget().find($dotSubId_locator$$17_subId$$13$$)[0];
      }
      return null;
    }});
    $$$$24$$.ui.dialog.overlayInstances = 0;
  })();
});
