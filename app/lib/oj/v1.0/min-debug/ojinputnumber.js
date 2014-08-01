/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojbutton"], function($oj$$34$$, $$$$34$$) {
  $oj$$34$$.$__registerWidget$("oj.ojInputNumber", $$$$34$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{converter:$oj$$34$$.$Validation$.$converterFactory$($oj$$34$$.$ConverterFactory$.CONVERTER_TYPE_NUMBER).createConverter(), max:void 0, min:void 0, placeholder:void 0, readOnly:void 0, step:void 0}, stepUp:function($steps$$) {
    this.$_step$($steps$$, !0);
  }, stepDown:function($steps$$1$$) {
    this.$_step$($steps$$1$$, !1);
  }, getNodeBySubId:function($locator$$27_subId$$19$$) {
    var $node$$74$$ = this._super($locator$$27_subId$$19$$);
    $node$$74$$ || ($locator$$27_subId$$19$$ = $locator$$27_subId$$19$$.subId, "oj-inputnumber-up" === $locator$$27_subId$$19$$ && ($node$$74$$ = this.widget().find(".oj-inputnumber-up")[0]), "oj-inputnumber-down" === $locator$$27_subId$$19$$ && ($node$$74$$ = this.widget().find(".oj-inputnumber-down")[0]), "oj-inputnumber-input" === $locator$$27_subId$$19$$ && ($node$$74$$ = this.widget().find(".oj-inputnumber-input")[0]));
    return $node$$74$$ || null;
  }, _InitOptions:function($originalDefaults$$10$$, $constructorOptions$$11$$) {
    this._super($originalDefaults$$10$$, $constructorOptions$$11$$);
    $oj$$34$$.$EditableValueUtils$.$initializeOptionsFromDom$([{attribute:"disabled", defaultOptionValue:!1, validateOption:!0}, {attribute:"pattern", defaultOptionValue:""}, {attribute:"placeholder", defaultOptionValue:""}, {attribute:"value", defaultOptionValue:null}, {attribute:"readonly", option:"readOnly", defaultOptionValue:!1, validateOption:!0}, {attribute:"required", defaultOptionValue:"optional", coerceDomValue:!0, validateOption:!0}, {attribute:"title", defaultOptionValue:""}, {attribute:"min", 
    defaultOptionValue:null}, {attribute:"max", defaultOptionValue:null}, {attribute:"step", defaultOptionValue:1}], $constructorOptions$$11$$, this);
    this.options.value = this.$_coerceInputNumberValue$(this.options.value);
    null != this.options.step && (this.options.step = this.$_parseStep$(this.options.step));
    null != this.options.min && (this.options.min = this.$_parse$("min", this.options.min));
    null != this.options.max && (this.options.max = this.$_parse$("max", this.options.max));
    if (null != this.options.min && null != this.options.max && this.options.max < this.options.min) {
      throw Error("max must not be less than min");
    }
  }, _ComponentCreate:function() {
    var $node$$75$$ = this.element;
    this._super();
    "boolean" === typeof this.options.readOnly && $node$$75$$.prop("readonly", this.options.readOnly);
    this.$_draw$();
    this._on(this.$_events$);
    this._on(this.window, {beforeunload:function() {
      $node$$75$$.removeAttr("autocomplete");
    }});
    $node$$75$$.removeAttr("pattern");
    this.$_inputNumberDefaultValidators$ = {};
  }, $_AfterCreate$:function() {
    this._super();
    this.$_refreshAriaMinMaxValue$();
    this.$_updateButtons$();
    this.$_refreshStateTheming$("readOnly", this.options.readOnly);
    this.$_refreshRoleSpinbutton$("readOnly", this.options.readOnly);
  }, _setOption:function($key$$107$$, $value$$208$$, $flags$$36_numberRangeOptions$$) {
    "value" === $key$$107$$ && ($value$$208$$ = this.$_coerceInputNumberValue$($value$$208$$));
    if ("max" === $key$$107$$ || "min" === $key$$107$$) {
      $value$$208$$ = this.$_parse$($key$$107$$, $value$$208$$);
    }
    "step" === $key$$107$$ && ($value$$208$$ = this.$_parseStep$($value$$208$$));
    this._super($key$$107$$, $value$$208$$, $flags$$36_numberRangeOptions$$);
    if ("max" === $key$$107$$ || "min" === $key$$107$$) {
      $flags$$36_numberRangeOptions$$ = {min:null != this.options.min ? this.options.min : void 0, max:null != this.options.max ? this.options.max : void 0, converter:this.$_GetConverter$()}, this.$_createRangeValidator$($flags$$36_numberRangeOptions$$), this.$_ResetAllValidators$();
    }
    "disabled" === $key$$107$$ && this.element.prop("disabled", !!$value$$208$$);
    "readOnly" === $key$$107$$ && (this.element.prop("readonly", !!$value$$208$$), this.$_refreshStateTheming$("readOnly", this.options.readOnly), this.$_refreshRoleSpinbutton$("readOnly", this.options.readOnly));
  }, _destroy:function() {
    this.element.removeClass("oj-inputnumber-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow").removeAttr("aria-valuetext").removeAttr("aria-disabled");
    this.element.attr("type", this.saveType);
    this._super();
    this._off(this.element, "keydown keyup focus blur mousedown mouseup mouseenter mouseleave");
    this.$uiInputNumber$.replaceWith(this.element);
    clearTimeout(this.$timer$);
  }, $_Refresh$:function($name$$90$$, $value$$209$$) {
    this._super($name$$90$$, $value$$209$$);
    var $valueMinMax$$ = "value" === $name$$90$$ || "max" === $name$$90$$ || "min" === $name$$90$$;
    $valueMinMax$$ && this.$_refreshAriaMinMaxValue$();
    ($valueMinMax$$ || "disabled" === $name$$90$$) && this.$_updateButtons$();
  }, $_CanSetValue$:function() {
    return!this._super() || this.options.readOnly ? !1 : !0;
  }, $_GetDefaultValidators$:function() {
    var $ret$$37$$ = this._superApply(arguments), $min$$7$$ = null != this.options.min ? this.options.min : void 0, $max$$9$$ = null != this.options.max ? this.options.max : void 0, $numberRangeOptions$$1$$ = {};
    if (null != $min$$7$$ || null != $max$$9$$) {
      $numberRangeOptions$$1$$ = {min:$min$$7$$, max:$max$$9$$, converter:this.$_GetConverter$()}, this.$_createRangeValidator$($numberRangeOptions$$1$$);
    }
    return $$$$34$$.extend(this.$_inputNumberDefaultValidators$, $ret$$37$$);
  }, _GetDefaultStyleClass:function() {
    return "oj-inputnumber";
  }, $_events$:{keydown:function($event$$360$$) {
    $event$$360$$.keyCode === $$$$34$$.ui.keyCode.ENTER ? (this.$_blurEnterSetValue$($event$$360$$), $event$$360$$.preventDefault()) : this.$_start$() && this.$_keydown$($event$$360$$) && $event$$360$$.preventDefault();
  }, keyup:function($event$$361$$) {
    this.$_stop$($event$$361$$);
  }, focus:function() {
    this.previous = this.element.val();
  }, blur:function($event$$362$$) {
    this.$cancelBlur$ ? delete this.$cancelBlur$ : this.$_blurEnterSetValue$($event$$362$$);
  }, "mousedown .oj-inputnumber-button":function($event$$363$$) {
    function $checkFocus$$1$$() {
      this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = $previous$$5$$, this._delay(function() {
        this.previous = $previous$$5$$;
      }));
    }
    var $previous$$5$$;
    $previous$$5$$ = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val();
    $event$$363$$.preventDefault();
    $checkFocus$$1$$.call(this);
    this.$cancelBlur$ = !0;
    this._delay(function() {
      delete this.$cancelBlur$;
      $checkFocus$$1$$.call(this);
    });
    this.$_start$();
    this.$_repeat$(null, $$$$34$$($event$$363$$.currentTarget).hasClass("oj-inputnumber-up") ? 1 : -1, $event$$363$$);
  }, "mouseup .oj-inputnumber-button":function($event$$364$$) {
    this.$_stop$($event$$364$$);
  }, "mouseenter .oj-inputnumber-button":function($event$$365$$) {
    $$$$34$$($event$$365$$.currentTarget).hasClass("oj-active") && (this.$_start$(), this.$_repeat$(null, $$$$34$$($event$$365$$.currentTarget).hasClass("oj-inputnumber-up") ? 1 : -1, $event$$365$$));
  }, "mouseleave .oj-inputnumber-button":function($event$$366$$) {
    this.$_stop$($event$$366$$);
  }}, $_BUNDLE_KEY$:{$_TOOLTIP_DECREMENT$:"tooltipDecrement", $_TOOLTIP_INCREMENT$:"tooltipIncrement"}, $_OPTION_TO_CSS_MAPPING$:{readOnly:"oj-read-only"}, $_draw$:function() {
    var $uiInputNumber$$ = this.$uiInputNumber$ = this.element.addClass("oj-inputnumber-input").attr("autocomplete", "off").wrap("\x3cspan class\x3d'oj-inputnumber oj-component'\x3e\x3c/span\x3e").parent().append("\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/a\x3e\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/a\x3e");
    this.saveType = this.element.prop("type");
    this.element.attr("type", "text");
    var $incrementString$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_INCREMENT$), $decrementString$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_DECREMENT$);
    $uiInputNumber$$.find(".oj-inputnumber-up").ojButton({display:"icons", icons:{start:"oj-component-icon oj-inputnumber-up-icon"}, label:$incrementString$$});
    $uiInputNumber$$.find(".oj-inputnumber-down").ojButton({display:"icons", icons:{start:"oj-component-icon oj-inputnumber-down-icon"}, label:$decrementString$$});
    this.buttons = $uiInputNumber$$.find(".oj-inputnumber-button").attr("tabIndex", "-1").attr("aria-hidden", !0);
  }, $_keydown$:function($event$$367$$) {
    var $keyCode$$6$$ = $$$$34$$.ui.keyCode;
    switch($event$$367$$.keyCode) {
      case $keyCode$$6$$.UP:
        return this.$_repeat$(null, 1, $event$$367$$), !0;
      case $keyCode$$6$$.DOWN:
        return this.$_repeat$(null, -1, $event$$367$$), !0;
    }
    return!1;
  }, $_uiInputNumberHtml$:function() {
    return "\x3cspan class\x3d'oj-inputnumber oj-component'\x3e\x3c/span\x3e";
  }, $_buttonHtml$:function() {
    return "\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-down'\x3e\x3c/a\x3e\x3ca class\x3d'oj-inputnumber-button oj-inputnumber-up'\x3e\x3c/a\x3e";
  }, $_start$:function() {
    return this.$spinning$ = !0;
  }, $_repeat$:function($i$$277$$, $steps$$2$$, $event$$368$$) {
    $i$$277$$ = $i$$277$$ || 500;
    clearTimeout(this.$timer$);
    this.$timer$ = this._delay(function() {
      this.$_repeat$(40, $steps$$2$$, $event$$368$$);
    }, $i$$277$$);
    this.$_spin$($steps$$2$$ * this.options.step, $event$$368$$);
  }, $_spin$:function($step$$, $event$$369$$) {
    var $displayValue$$8_value$$210$$ = this.$_GetDisplayValue$() || 0, $displayValue$$8_value$$210$$ = this.$_parseValue$($displayValue$$8_value$$210$$), $displayValue$$8_value$$210$$ = this.$_adjustValue$($displayValue$$8_value$$210$$, $step$$);
    this.$_SetValue$($displayValue$$8_value$$210$$, $event$$369$$, this.$_VALIDATION_MODE$.$VALIDATORS_ONLY$);
  }, $_precision$:function() {
    var $precision$$1$$ = this.$_precisionOf$(this.options.step);
    null != this.options.min && ($precision$$1$$ = Math.max($precision$$1$$, this.$_precisionOf$(this.options.min)));
    return $precision$$1$$;
  }, $_precisionOf$:function($num$$11_str$$19$$) {
    $num$$11_str$$19$$ = $num$$11_str$$19$$.toString();
    var $decimal$$ = $num$$11_str$$19$$.indexOf(".");
    return-1 === $decimal$$ ? 0 : $num$$11_str$$19$$.length - $decimal$$ - 1;
  }, $_adjustValue$:function($value$$211$$, $step$$1$$) {
    var $aboveMin_newValue$$8$$, $stepBase_validMax$$, $options$$314$$ = this.options, $precision$$2$$ = this.$_precision$();
    $stepBase_validMax$$ = null != $options$$314$$.min ? $options$$314$$.min : 0;
    $aboveMin_newValue$$8$$ = $value$$211$$ - $stepBase_validMax$$;
    var $rounded$$1$$ = Math.round($aboveMin_newValue$$8$$ / $options$$314$$.step) * $options$$314$$.step, $rounded$$1$$ = parseFloat($rounded$$1$$.toFixed($precision$$2$$));
    $rounded$$1$$ !== $aboveMin_newValue$$8$$ ? ($aboveMin_newValue$$8$$ = 0 > $step$$1$$ ? Math.ceil($aboveMin_newValue$$8$$ / $options$$314$$.step) * $options$$314$$.step : Math.floor($aboveMin_newValue$$8$$ / $options$$314$$.step) * $options$$314$$.step, $aboveMin_newValue$$8$$ = $stepBase_validMax$$ + $aboveMin_newValue$$8$$ + $step$$1$$) : $aboveMin_newValue$$8$$ = $value$$211$$ + $step$$1$$;
    $aboveMin_newValue$$8$$ = parseFloat($aboveMin_newValue$$8$$.toFixed($precision$$2$$));
    return null != $options$$314$$.min && $aboveMin_newValue$$8$$ < $options$$314$$.min ? $options$$314$$.min : null != $options$$314$$.max && $aboveMin_newValue$$8$$ > $options$$314$$.max ? ($stepBase_validMax$$ = Math.floor(($options$$314$$.max - $stepBase_validMax$$) / $options$$314$$.step) * $options$$314$$.step + $stepBase_validMax$$, $stepBase_validMax$$ = parseFloat($stepBase_validMax$$.toFixed($precision$$2$$))) : $aboveMin_newValue$$8$$;
  }, $_stop$:function() {
    this.$spinning$ && (clearTimeout(this.$timer$), this.$spinning$ = !1);
  }, $_updateButtons$:function() {
    var $value$$212$$;
    try {
      var $displayValue$$9_min$$8$$ = this.$_GetDisplayValue$() || 0;
      $value$$212$$ = this.$_parseValue$($displayValue$$9_min$$8$$);
    } catch ($e$$122$$) {
      $value$$212$$ = void 0;
    } finally {
      var $displayValue$$9_min$$8$$ = this.options.min, $max$$10$$ = this.options.max;
      if (!this.$uiInputNumber$) {
        return;
      }
      var $downButton$$ = this.$uiInputNumber$.find(".oj-inputnumber-down").ojButton(), $upButton$$ = this.$uiInputNumber$.find(".oj-inputnumber-up").ojButton();
      this.options.disabled || void 0 === $value$$212$$ ? ($downButton$$.ojButton("disable"), $upButton$$.ojButton("disable")) : null != $max$$10$$ && $value$$212$$ >= $max$$10$$ ? ($downButton$$.ojButton("enable"), $upButton$$.ojButton("disable")) : (null != $displayValue$$9_min$$8$$ && $value$$212$$ <= $displayValue$$9_min$$8$$ ? $downButton$$.ojButton("disable") : $downButton$$.ojButton("enable"), $upButton$$.ojButton("enable"));
    }
  }, $_blurEnterSetValue$:function($event$$371$$) {
    this.$_stop$();
    this.previous !== this.element.val() && (this.$_updateButtons$(), this.$_SetValue$(this.element.val(), $event$$371$$));
  }, $_createRangeValidator$:function($options$$315$$) {
    this.$_inputNumberDefaultValidators$[$oj$$34$$.$ValidatorFactory$.VALIDATOR_TYPE_NUMBERRANGE] = $oj$$34$$.$Validation$.$validatorFactory$($oj$$34$$.$ValidatorFactory$.VALIDATOR_TYPE_NUMBERRANGE).createValidator($options$$315$$);
  }, $_coerceInputNumberValue$:function($val$$55$$) {
    return null !== $val$$55$$ ? +$val$$55$$ : $val$$55$$;
  }, $_parse$:function($option$$19$$, $val$$56$$) {
    if (null === $val$$56$$) {
      return $val$$56$$;
    }
    var $parsedVal$$;
    $parsedVal$$ = "string" === typeof $val$$56$$ && "" !== $val$$56$$ ? +$val$$56$$ : parseFloat($val$$56$$);
    if (isNaN($parsedVal$$)) {
      throw Error($option$$19$$ + " is not a number");
    }
    return $parsedVal$$;
  }, $_parseStep$:function($parsedStep_val$$57$$) {
    if (null === $parsedStep_val$$57$$) {
      return 1;
    }
    $parsedStep_val$$57$$ = this.$_parse$("step", $parsedStep_val$$57$$);
    if (0 >= $parsedStep_val$$57$$) {
      throw Error("Invalid step; step must be \x3e 0");
    }
    if (null === $parsedStep_val$$57$$ || 0 >= $parsedStep_val$$57$$) {
      $parsedStep_val$$57$$ = 1;
    }
    return $parsedStep_val$$57$$;
  }, $_refreshStateTheming$:function($option$$20$$, $value$$213$$) {
    this.$_OPTION_TO_CSS_MAPPING$.hasOwnProperty($option$$20$$) && this.widget().toggleClass(this.$_OPTION_TO_CSS_MAPPING$[$option$$20$$], !!$value$$213$$);
  }, $_refreshRoleSpinbutton$:function($option$$21$$, $value$$214$$) {
    $value$$214$$ ? this.widget().removeAttr("role") : this.widget().attr("role", "spinbutton");
  }, $_refreshAriaMinMaxValue$:function() {
    var $valuenow$$ = this.$_coerceInputNumberValue$(this.options.value), $valuetext$$ = this.element.val();
    this.element.attr({"aria-valuemin":this.options.min, "aria-valuemax":this.options.max, "aria-valuenow":$valuenow$$});
    this.$_ValueEquals$("" + $valuenow$$, $valuetext$$) || this.element.attr({"aria-valuetext":$valuetext$$});
  }, $_step$:function($steps$$3$$, $up$$) {
    this.$_start$();
    $up$$ ? this.$_spin$(($steps$$3$$ || 1) * this.options.step) : this.$_spin$(($steps$$3$$ || 1) * -this.options.step);
    this.$_stop$();
  }, widget:function() {
    return this.$uiInputNumber$;
  }});
});
