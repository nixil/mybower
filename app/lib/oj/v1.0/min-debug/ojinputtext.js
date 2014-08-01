/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue"], function($oj$$5$$, $$$$5$$) {
  $oj$$5$$.$__registerWidget$("oj.inputBase", $$$$5$$.oj.editableValue, {version:"1.0.0", widgetEventPrefix:"oj", _ATTR_CHECK:[], _CLASS_NAMES:"", _WIDGET_CLASS_NAMES:"", _INPUT_HELPER_KEY:"", options:{converter:void 0, placeholder:void 0, readOnly:void 0}, $_SaveAttributes$:function($element$$23$$) {
    var $ret$$2$$ = this._superApply(arguments);
    this.$_processAttrCheck$();
    return $ret$$2$$;
  }, _InitOptions:function($originalDefaults$$4$$, $constructorOptions$$5$$) {
    this._super($originalDefaults$$4$$, $constructorOptions$$5$$);
    $oj$$5$$.$EditableValueUtils$.$initializeOptionsFromDom$([{attribute:"disabled", defaultOptionValue:!1, validateOption:!0}, {attribute:"pattern", defaultOptionValue:""}, {attribute:"placeholder", defaultOptionValue:""}, {attribute:"value", defaultOptionValue:null}, {attribute:"readonly", option:"readOnly", defaultOptionValue:!1, validateOption:!0}, {attribute:"required", defaultOptionValue:"optional", coerceDomValue:!0, validateOption:!0}, {attribute:"title", defaultOptionValue:""}], $constructorOptions$$5$$, 
    this);
  }, _ComponentCreate:function() {
    var $node$$16$$ = this.element, $ret$$3$$ = this._superApply(arguments), $savedAttributes$$2$$ = this.$_GetSavedAttributes$($node$$16$$);
    "boolean" === typeof this.options.readOnly && this.element.prop("readonly", this.options.readOnly);
    this.$_DoWrapElement$() && this.$_wrapElement$();
    "pattern" in $savedAttributes$$2$$ && $node$$16$$.removeAttr("pattern");
    return $ret$$3$$;
  }, $_AfterCreate$:function() {
    var $ret$$4$$ = this._superApply(arguments), $self$$36$$ = this;
    this._CLASS_NAMES && this.element.addClass(this._CLASS_NAMES);
    this.element.on("blur", $$$$5$$.proxy(this.$_onBlurHandler$, this));
    this.element.on("keydown", $$$$5$$.proxy(this.$_onKeyDownHandler$, this));
    this.element.on("drop", function() {
      this.focus();
    });
    this.$_AppendInputHelper$();
    $$$$5$$.each(["disabled", "readOnly"], function($index$$86$$, $ele$$2$$) {
      $self$$36$$._setOption($ele$$2$$, $self$$36$$.options[$ele$$2$$]);
    });
    return $ret$$4$$;
  }, _setOption:function __setOption($key$$35$$, $value$$91$$) {
    var $retVal$$5$$ = this._superApply(arguments);
    "disabled" === $key$$35$$ && this.element.prop("disabled", $value$$91$$);
    "readOnly" === $key$$35$$ && (this.element.prop("readonly", $value$$91$$), this.$_refreshStateTheming$("readOnly", $value$$91$$));
    "pattern" === $key$$35$$ && (this.$__defaultRegExpOptions$.pattern = $value$$91$$);
    return $retVal$$5$$;
  }, _destroy:function __destroy() {
    var $ret$$5$$ = this._superApply(arguments);
    this.element.off("blur drop keydown");
    this.$_inputHelper$ && this.$_inputHelper$.remove();
    this.$_DoWrapElement$() && this.element.unwrap();
    this.$_RestoreAttributes$();
    return $ret$$5$$;
  }, $_OPTION_TO_CSS_MAPPING$:{readOnly:"oj-read-only"}, $_processAttrCheck$:function __processAttrCheck() {
    for (var $attrCheck$$ = this._ATTR_CHECK, $i$$89$$ = 0, $j$$11$$ = $attrCheck$$.length;$i$$89$$ < $j$$11$$;$i$$89$$++) {
      var $attr$$12$$ = $attrCheck$$[$i$$89$$].attr;
      "setMandatory" in $attrCheck$$[$i$$89$$] && this.element.attr($attr$$12$$, $attrCheck$$[$i$$89$$].setMandatory);
    }
  }, $_onBlurHandler$:function __onBlurHandler($event$$35$$) {
    this.$_SetValue$(this.$_GetDisplayValue$(), $event$$35$$);
  }, $_onKeyDownHandler$:function __onKeyDownHandler($event$$36$$) {
    $event$$36$$.keyCode === $$$$5$$.ui.keyCode.ENTER && this.$_SetValue$(this.$_GetDisplayValue$(), $event$$36$$);
  }, $_DoWrapElement$:function() {
    return this._WIDGET_CLASS_NAMES;
  }, $_wrapElement$:function __wrapElement() {
    $$$$5$$(this.element).wrap($$$$5$$("\x3cdiv\x3e").addClass(this._WIDGET_CLASS_NAMES));
    this.$_wrapper$ = this.element.parent();
  }, $_AppendInputHelper$:function __AppendInputHelper() {
    if (this._INPUT_HELPER_KEY && this.$_DoWrapElement$()) {
      var $describedBy$$ = this.element.attr("aria-describedby") || "", $helperDescribedById$$ = this.$_GetSubId$(this._INPUT_HELPER_KEY);
      this.element.attr("aria-describedby", $describedBy$$ + (" " + $helperDescribedById$$));
      this.$_inputHelper$ = $$$$5$$("\x3cdiv class\x3d'oj-helper-hidden-accessible' id\x3d'" + $helperDescribedById$$ + "'\x3e" + this.$getTranslatedString$(this._INPUT_HELPER_KEY) + "\x3c/div\x3e");
      this.widget().append(this.$_inputHelper$);
    }
  }, $_RefreshLabelDependents$:function() {
    this.$__defaultRegExpOptions$ = {};
    this._super();
  }, $_GetDefaultValidators$:function() {
    var $ret$$6$$ = this._superApply(arguments), $validatorMap$$ = {};
    this.options.pattern && ($validatorMap$$[$oj$$5$$.$ValidatorFactory$.VALIDATOR_TYPE_REGEXP] = this.$_getDefaultRegExpValidator$());
    return $$$$5$$.extend($validatorMap$$, $ret$$6$$);
  }, $_refreshStateTheming$:function($option$$9$$, $value$$92$$) {
    this.$_OPTION_TO_CSS_MAPPING$.hasOwnProperty($option$$9$$) && this.widget().toggleClass(this.$_OPTION_TO_CSS_MAPPING$[$option$$9$$], !!$value$$92$$);
  }, $_getDefaultRegExpValidator$:function() {
    var $vf$$1$$;
    this.$__defaultRegExpOptions$ = {pattern:this.options.pattern, label:this.$_getLabelText$()};
    return($vf$$1$$ = $oj$$5$$.$Validation$.$validatorFactory$($oj$$5$$.$ValidatorFactory$.VALIDATOR_TYPE_REGEXP)) ? $vf$$1$$.createValidator(this.$__defaultRegExpOptions$) : null;
  }, $_GetSubId$:function __getSubId($sub$$) {
    return this.uuid + "_" + $sub$$;
  }, $_IsRTL$:function() {
    return "rtl" === this.$_GetReadingDirection$();
  }, getNodeBySubId:function($locator$$4$$) {
    return this._super($locator$$4$$);
  }, widget:function _widget() {
    return this.$_DoWrapElement$() ? this.$_wrapper$ : this.element;
  }});
  $oj$$5$$.$__registerWidget$("oj.ojInputText", $$$$5$$.oj.inputBase, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", _ATTR_CHECK:[{attr:"type", setMandatory:"text"}], _CLASS_NAMES:"oj-inputtext-input", _WIDGET_CLASS_NAMES:"oj-inputtext oj-form-control oj-component", options:{pattern:void 0}, _GetDefaultStyleClass:function() {
    return "oj-inputtext";
  }});
  $oj$$5$$.$__registerWidget$("oj.ojTextArea", $$$$5$$.oj.inputBase, {version:"1.0.0", defaultElement:"\x3ctextarea\x3e", widgetEventPrefix:"oj", _ATTR_CHECK:[], _CLASS_NAMES:"oj-textarea-input", _WIDGET_CLASS_NAMES:"oj-textarea oj-form-control oj-component", options:{pattern:void 0}, _GetDefaultStyleClass:function() {
    return "oj-textarea";
  }});
  $oj$$5$$.$__registerWidget$("oj.ojInputPassword", $$$$5$$.oj.inputBase, {version:"1.0.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", _ATTR_CHECK:[{attr:"type", setMandatory:"password"}], _CLASS_NAMES:"oj-inputpassword-input", _WIDGET_CLASS_NAMES:"oj-inputpassword oj-form-control oj-component", options:{pattern:void 0}, _GetDefaultStyleClass:function() {
    return "oj-inputpassword";
  }});
});
