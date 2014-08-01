define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$36$$, $$$$35$$) {
  (function() {
    $oj$$36$$.$__registerWidget$("oj.ojTrain", $$$$35$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{steps:[], selection:"next", currentStep:"", optionChange:null}, $_stepNum$:0, $_stepArray$:null, _create:function() {
      var $options$$321$$ = this.options;
      this._super();
      this.$_stepNum$ = $options$$321$$.steps.length;
      this.$_marginType$ = (this.$_isRtl$ = "rtl" === this.$_GetReadingDirection$()) ? "margin-right" : "margin-left";
      this.$_alignType$ = this.$_isRtl$ ? "right" : "left";
      var $bar_i$$282$$ = $$$$35$$("\x3cdiv class\x3d'oj-train-bar'\x3e\x3c/div\x3e");
      this.$_maxStepWidth$ = this.element.width() < 107 * (this.$_stepNum$ - 1) + 72 ? (this.element.width() - 72) / (this.$_stepNum$ - 1) : 107;
      this.$_centerMargin$ = (this.element.width() - this.$_maxStepWidth$ * (this.$_stepNum$ - 1) - 72) / 2;
      this.$_stepList$ = $$$$35$$("\x3cul\x3e").attr({"aria-label":"Train Component"}).css({margin:"0", padding:"0"});
      1 < this.$_stepNum$ && $bar_i$$282$$.css({"margin-top":"7px", width:(this.$_stepNum$ - 1) * this.$_maxStepWidth$ + "px"}).css(this.$_marginType$, 36 + this.$_centerMargin$ + "px").css(this.$_alignType$, 0);
      $bar_i$$282$$.appendTo(this.element);
      this.$_progressbar$ = $$$$35$$("\x3cdiv class\x3d'oj-train-bar-overlay'\x3e\x3c/div\x3e");
      this.$_progressbar$.appendTo(this.element);
      this.$_setupArray$();
      this.$_currentStepIndex$ = this.$_getCurrentStepIndex$($options$$321$$.currentStep);
      for ($bar_i$$282$$ = 0;$bar_i$$282$$ < this.$_stepNum$;$bar_i$$282$$++) {
        var $stepTag$$ = $$$$35$$("\x3cli\x3e").attr({id:this.$_stepArray$[$bar_i$$282$$][1]}).css({"list-style-type":"none", position:"absolute"}).css(this.$_marginType$, this.$_centerMargin$ + this.$_maxStepWidth$ * $bar_i$$282$$ + "px").css(this.$_alignType$, 0);
        this.$_stepList$.append($stepTag$$);
        $bar_i$$282$$ == this.$_currentStepIndex$ + 1 && "next" == $options$$321$$.selection && (this.$_stepArray$[$bar_i$$282$$][2] = "on");
        this.$_drawLabel$($bar_i$$282$$);
        this.$_drawStepFill$($bar_i$$282$$);
        this.$_drawButton$($bar_i$$282$$);
        this.$_drawMessageType$($bar_i$$282$$);
      }
      this.$_updateProgressWidth$();
      this.element.addClass("oj-train");
    }, $_updateProgressWidth$:function() {
      this.$_progressbar$.css({"margin-top":"7px", width:(this.$_currentStepIndex$ === this.$_stepNum$ - 1 ? (this.$_stepNum$ - 1) * this.$_maxStepWidth$ : this.$_maxStepWidth$ * this.$_currentStepIndex$ + this.$_maxStepWidth$ / 107 * 53.5) + "px"}).css(this.$_marginType$, this.$_centerMargin$ + 36 + "px").css(this.$_alignType$, 0);
      this.$_stepList$.appendTo(this.element);
    }, $_setupArray$:function() {
      var $options$$322$$ = this.options;
      this.$_stepArray$ = [];
      for (var $i$$283$$ = 0;$i$$283$$ < this.$_stepNum$;$i$$283$$++) {
        var $step$$2$$ = $options$$322$$.steps[$i$$283$$];
        this.$_stepArray$[$i$$283$$] = Array(5);
        this.$_stepArray$[$i$$283$$][2] = $options$$322$$.selection && "next" != $options$$322$$.selection ? $options$$322$$.selection : "off";
        this.$_stepArray$[$i$$283$$][3] = "unvisited";
        for (var $key$$108$$ in $step$$2$$) {
          "name" === $key$$108$$ ? this.$_stepArray$[$i$$283$$][0] = $step$$2$$[$key$$108$$] : "id" === $key$$108$$ ? this.$_stepArray$[$i$$283$$][1] = $step$$2$$[$key$$108$$] : "selection" === $key$$108$$ ? this.$_stepArray$[$i$$283$$][2] = $step$$2$$[$key$$108$$] : "state" === $key$$108$$ ? this.$_stepArray$[$i$$283$$][3] = $step$$2$$[$key$$108$$] : "messageType" === $key$$108$$ && (this.$_stepArray$[$i$$283$$][4] = $step$$2$$[$key$$108$$]);
        }
      }
    }, $_drawButton$:function($index$$209$$) {
      var $button$$1$$ = $$$$35$$("\x3cdiv/\x3e"), $scrnRead$$ = $$$$35$$("\x3cspan/\x3e"), $self$$123$$ = this, $desc$$ = "";
      if (this.$_stepArray$[$index$$209$$]) {
        var $state$$5_stepLi$$ = this.$_stepArray$[$index$$209$$][3];
        this.$_currentStepIndex$ === $index$$209$$ ? ($button$$1$$.addClass("oj-train-button-current"), $desc$$ = ". This is the current step.") : "visited" === $state$$5_stepLi$$ ? ($button$$1$$.addClass("oj-train-button-visited"), $desc$$ = ". This step has been visited.") : "unvisited" === $state$$5_stepLi$$ ? ($button$$1$$.addClass("oj-train-button-unvisited"), $desc$$ = ". This step has not been visited yet.") : $button$$1$$.addClass("oj-train-button-disabled");
        "disabled" === this.$_stepArray$[$index$$209$$][3] || null != this.options.disabled && this.options.disabled || "on" !== this.$_stepArray$[$index$$209$$][2] || (this._hoverable($button$$1$$), $button$$1$$.bind("click" + this.eventNamespace, function() {
          var $oldStep$$ = $self$$123$$.options.currentStep;
          $self$$123$$.options.currentStep = this.parentNode.id;
          $self$$123$$.$_fireOptionChange$("currentStep", $oldStep$$, this.parentNode.id, !0);
        }));
        $button$$1$$.css({"margin-top":"4px", width:"12px", height:"12px"}).css(this.$_marginType$, "29px").css(this.$_alignType$, 0);
        $state$$5_stepLi$$ = this.$_stepList$.children().eq($index$$209$$).children();
        3 <= $state$$5_stepLi$$.length ? ($state$$5_stepLi$$[2].parentNode.removeChild($state$$5_stepLi$$[2]), $button$$1$$.insertAfter($state$$5_stepLi$$[1])) : this.$_stepList$.children().eq($index$$209$$).append($button$$1$$);
        $scrnRead$$.text($desc$$);
        $scrnRead$$.css("display", "none");
        this.$_stepList$.children().eq($index$$209$$).find("a").append($scrnRead$$);
      }
    }, $_drawMessageType$:function($index$$210$$) {
      var $icon$$4$$ = $$$$35$$("\x3cdiv/\x3e"), $scrnRead$$1$$ = $$$$35$$("\x3cspan/\x3e"), $desc$$1$$ = "", $self$$124$$ = this;
      if (this.$_stepArray$[$index$$210$$]) {
        var $messageType$$ = this.$_stepArray$[$index$$210$$][4];
        "complete" === $messageType$$ ? ($icon$$4$$.addClass("oj-train-icon-complete"), $desc$$1$$ = " Complete") : "info" === $messageType$$ ? ($icon$$4$$.addClass("oj-train-icon-info"), $desc$$1$$ = " Info") : "error" === $messageType$$ ? ($icon$$4$$.addClass("oj-train-icon-error"), $desc$$1$$ = " Error") : "warning" === $messageType$$ && ($icon$$4$$.addClass("oj-train-icon-warning"), $desc$$1$$ = " Warning");
        var $stepLi$$1$$ = this.$_stepList$.children().eq($index$$210$$).children();
        4 <= $stepLi$$1$$.length && $stepLi$$1$$[3].parentNode.removeChild($stepLi$$1$$[3]);
        "disabled" === this.$_stepArray$[$index$$210$$][3] || null != this.options.disabled && this.options.disabled || "on" !== this.$_stepArray$[$index$$210$$][2] || (this._hoverable($icon$$4$$), $icon$$4$$.bind("click" + this.eventNamespace, function() {
          var $oldStep$$1$$ = $self$$124$$.options.currentStep;
          $self$$124$$.options.currentStep = this.parentNode.id;
          $self$$124$$.$_fireOptionChange$("currentStep", $oldStep$$1$$, this.parentNode.id, !0);
        }));
        null != $messageType$$ && "none" != $messageType$$ && ($icon$$4$$.css({"margin-top":"9px", height:"9px", width:"9px"}).css(this.$_marginType$, "34px").css(this.$_alignType$, 0), $scrnRead$$1$$.text($desc$$1$$), $scrnRead$$1$$.css("display", "none"), this.$_stepList$.children().eq($index$$210$$).find("a").append($scrnRead$$1$$), this.$_stepList$.children().eq($index$$210$$).append($icon$$4$$));
      }
    }, $_fireOptionChange$:function($key$$109$$, $previousValue$$8$$, $value$$217$$, $originalEvent$$6$$) {
      this._trigger("optionChange", $originalEvent$$6$$, {option:$key$$109$$, previousValue:$previousValue$$8$$, value:$value$$217$$, optionMetadata:{writeback:$originalEvent$$6$$ ? "shouldWrite" : "shouldNotWrite"}});
    }, $_drawStepFill$:function($index$$211_stepLi$$2$$) {
      var $stepFill$$ = $$$$35$$("\x3cdiv/\x3e");
      this.$_stepArray$[$index$$211_stepLi$$2$$] && ($index$$211_stepLi$$2$$ <= this.$_currentStepIndex$ ? $stepFill$$.addClass("oj-train-stepBackground-overlay") : $stepFill$$.addClass("oj-train-stepBackground"), $stepFill$$.css(this.$_marginType$, "25px").css(this.$_alignType$, 0), $index$$211_stepLi$$2$$ = this.$_stepList$.children().eq($index$$211_stepLi$$2$$).children(), 1 < $index$$211_stepLi$$2$$.length && $index$$211_stepLi$$2$$[1].parentNode.removeChild($index$$211_stepLi$$2$$[1]), $stepFill$$.insertAfter($index$$211_stepLi$$2$$[0]));
    }, $_drawLabel$:function($index$$212$$) {
      var $self$$125$$ = this;
      if (this.$_stepArray$[$index$$212$$]) {
        var $label$$7$$ = $$$$35$$("\x3ca\x3e" + this.$_stepArray$[$index$$212$$][0] + "\x3c/a\x3e");
        $label$$7$$.addClass("oj-train-label");
        $label$$7$$.css("margin-bottom", "7px");
        $label$$7$$.css(this.$_alignType$, 0);
        $index$$212$$ === this.$_currentStepIndex$ ? $label$$7$$.addClass("oj-selected") : "visited" === this.$_stepArray$[$index$$212$$][3] ? $label$$7$$.addClass("oj-visited") : "disabled" === this.$_stepArray$[$index$$212$$][3] && $label$$7$$.addClass("oj-disabled");
        "on" !== this.$_stepArray$[$index$$212$$][2] || null != this.options.disabled && this.options.disabled || ($label$$7$$.attr("href", "#"), this._hoverable($label$$7$$), $label$$7$$.bind("click keydown" + this.eventNamespace, function($event$$372_oldStep$$2$$) {
          $event$$372_oldStep$$2$$.preventDefault();
          if ($event$$372_oldStep$$2$$.keyCode === $$$$35$$.ui.keyCode.ENTER || "click" == $event$$372_oldStep$$2$$.type) {
            $event$$372_oldStep$$2$$ = $self$$125$$.options.currentStep, $self$$125$$.options.currentStep = this.parentNode.id, $self$$125$$.$_fireOptionChange$("currentStep", $event$$372_oldStep$$2$$, this.parentNode.id, !0);
          }
        }));
        var $stepLi$$3$$ = this.$_stepList$.children().eq($index$$212$$).children();
        1 <= $stepLi$$3$$.length && $stepLi$$3$$[0].parentNode.removeChild($stepLi$$3$$[0]);
        this.$_stepList$.children().eq($index$$212$$).prepend($label$$7$$);
      }
    }, $_getCurrentStepIndex$:function($id$$40$$) {
      for (var $i$$284$$ = 0;$i$$284$$ < this.$_stepNum$;$i$$284$$++) {
        if (this.$_stepArray$[$i$$284$$] && this.$_stepArray$[$i$$284$$][1] === $id$$40$$) {
          return $i$$284$$;
        }
      }
      return 0;
    }, getStepName:function($id$$41$$) {
      for (var $i$$285$$ = 0;$i$$285$$ < this.$_stepNum$;$i$$285$$++) {
        if (this.$_stepArray$[$i$$285$$] && this.$_stepArray$[$i$$285$$][1] === $id$$41$$) {
          return this.$_stepArray$[$i$$285$$][0];
        }
      }
      return null;
    }, getStepId:function($name$$92$$) {
      for (var $i$$286$$ = 0;$i$$286$$ < this.$_stepNum$;$i$$286$$++) {
        if (this.$_stepArray$[$i$$286$$] && this.$_stepArray$[$i$$286$$][0] === $name$$92$$) {
          return this.$_stepArray$[$i$$286$$][1];
        }
      }
      return null;
    }, select:function($id$$42$$) {
      for (var $i$$287$$ = 0;$i$$287$$ < this.$_stepNum$;$i$$287$$++) {
        if (this.$_stepArray$[$i$$287$$] && this.$_stepArray$[$i$$287$$][1] === $id$$42$$) {
          "next" === this.options.selection && $i$$287$$ + 1 < this.$_stepNum$ && (this.$_stepArray$[$i$$287$$ + 1][2] = "on", this.$_drawLabel$($i$$287$$ + 1), this.$_drawButton$($i$$287$$ + 1));
          this.$_stepArray$[$i$$287$$][3] = "current";
          this.$_currentStepIndex$ = $i$$287$$;
          this.options.currentStep = $id$$42$$;
          this.$_drawLabel$($i$$287$$);
          this.$_drawButton$($i$$287$$);
          this.$_updateProgressWidth$();
          break;
        }
      }
      for ($i$$287$$ = 0;$i$$287$$ < this.$_stepNum$;$i$$287$$++) {
        this.$_drawStepFill$($i$$287$$);
      }
    }, deselect:function($id$$43$$, $selection$$7$$, $state$$6$$, $messageType$$1$$) {
      for (var $i$$288$$ = 0;$i$$288$$ < this.$_stepNum$;$i$$288$$++) {
        if (this.$_stepArray$[$i$$288$$] && this.$_stepArray$[$i$$288$$][1] === $id$$43$$) {
          $selection$$7$$ ? this.$_stepArray$[$i$$288$$][2] = $selection$$7$$ : this.$_stepArray$[$i$$288$$][2] = "off";
          $state$$6$$ ? this.$_stepArray$[$i$$288$$][3] = $state$$6$$ : this.$_stepArray$[$i$$288$$][3] = "visited";
          $messageType$$1$$ ? this.$_stepArray$[$i$$288$$][4] = $messageType$$1$$ : this.$_stepArray$[$i$$288$$][4] = "none";
          this.$_currentStepIndex$ = -1;
          "next" === this.options.selection && $i$$288$$ + 1 < this.$_stepNum$ && (this.$_stepArray$[$i$$288$$ + 1][2] = "off", this.$_drawLabel$($i$$288$$ + 1), this.$_drawButton$($i$$288$$ + 1));
          this.$_drawLabel$($i$$288$$);
          this.$_drawButton$($i$$288$$);
          this.$_drawMessageType$($i$$288$$);
          break;
        }
      }
    }, nextSelectableStep:function() {
      for (var $i$$289$$ = this.$_currentStepIndex$;$i$$289$$ < this.$_stepNum$;$i$$289$$++) {
        if ($i$$289$$ + 1 < this.$_stepNum$ && this.$_stepArray$[$i$$289$$ + 1] && "on" === this.$_stepArray$[$i$$289$$ + 1][2]) {
          return this.$_stepArray$[$i$$289$$ + 1][1];
        }
      }
      return this.$_stepArray$[this.$_currentStepIndex$][1];
    }, previousSelectableStep:function() {
      for (var $i$$290$$ = this.$_currentStepIndex$;0 <= $i$$290$$;$i$$290$$--) {
        if (this.$_stepArray$[$i$$290$$ - 1] && "on" === this.$_stepArray$[$i$$290$$ - 1][2]) {
          return this.$_stepArray$[$i$$290$$ - 1][1];
        }
      }
      return this.$_stepArray$[this.$_currentStepIndex$][1];
    }});
  })();
});
