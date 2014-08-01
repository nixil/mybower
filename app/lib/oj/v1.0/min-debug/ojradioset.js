/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojradiocheckbox"], function($oj$$37$$, $$$$36$$) {
  $oj$$37$$.$__registerWidget$("oj.ojRadioset", $$$$36$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{disabled:null}, refresh:function() {
    this._super();
    this.$$radios$ = this.$_findRadiosWithMatchingName$().filter(".oj-radio")._ojRadioCheckbox("refresh").end().not(".oj-radio")._ojRadioCheckbox().end();
    this.$_setup$();
  }, widget:function() {
    return this.$uiRadioset$;
  }, _ComponentCreate:function() {
    this._super();
    if (this.element.is("fieldset")) {
      throw Error("ojRadioset cannot be bound to a fieldset. Use a div instead.");
    }
    this.$$radios$ = this.$_findRadiosWithMatchingName$()._ojRadioCheckbox();
    this.$uiRadioset$ = this.element.addClass("oj-radioset oj-component").attr("role", "radiogroup");
    this._on(this.$_events$);
    this.$_setup$();
  }, $_findRadiosWithMatchingName$:function() {
    var $first$$8_name$$93$$ = this.element.find("input[type\x3dradio]:first");
    0 === $first$$8_name$$93$$.length && $oj$$37$$.$Logger$.warn("Could not find any input type\x3dradio within this element");
    $first$$8_name$$93$$ = $first$$8_name$$93$$.attr("name");
    return void 0 === $first$$8_name$$93$$ ? this.element.find("input[type\x3dradio]").not("[name]") : this.element.find("input[type\x3dradio][name\x3d" + $first$$8_name$$93$$ + "]");
  }, $_showContextMenu$:function($menu$$20$$, $event$$373$$) {
    var $launcher$$9_radios$$ = this.element.find("input[type\x3dradio]"), $checked$$4$$ = $launcher$$9_radios$$.filter(":checked"), $launcher$$9_radios$$ = $checked$$4$$.length ? $checked$$4$$ : $launcher$$9_radios$$.first();
    $menu$$20$$.show($event$$373$$, {launcher:$launcher$$9_radios$$, focus:"menu"});
  }, $_setup$:function() {
    !0 === this.options.disabled ? this.disable() : !1 === this.options.disabled && this.enable();
  }, $_events$:{change:function($event$$374$$) {
    this.$_HandleChangeEvent$($event$$374$$);
  }}, $_HandleChangeEvent$:function($event$$375$$) {
    this._super($event$$375$$);
  }, $_GetDisplayValue$:function() {
    return this.$_GetElementValue$();
  }, $_SetDisplayValue$:function($displayValue$$10_radioWithMatchingValue_valueFilter$$1$$) {
    null != $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$ && ($displayValue$$10_radioWithMatchingValue_valueFilter$$1$$ = "[value\x3d'" + $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$ + "']", void 0 !== $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$ && void 0 !== this.$$radios$ && ($displayValue$$10_radioWithMatchingValue_valueFilter$$1$$ = this.$$radios$.filter($displayValue$$10_radioWithMatchingValue_valueFilter$$1$$), void 0 !== $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$ && 
    0 < $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$.length ? $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$.prop("checked") || $displayValue$$10_radioWithMatchingValue_valueFilter$$1$$._ojRadioCheckbox("option", "checked", !0) : this.$$radios$._ojRadioCheckbox("option", "checked", !1)));
  }, $_GetElementValue$:function() {
    var $checkedRadio$$ = this.$$radios$.filter(":checked");
    return 0 === $checkedRadio$$.length ? null : $checkedRadio$$.val();
  }, _InitOptions:function($originalDefaults$$11$$, $constructorOptions$$12$$) {
    var $checkedRadio$$1_radios$$1_result$$28$$;
    this._super($originalDefaults$$11$$, $constructorOptions$$12$$);
    $oj$$37$$.$EditableValueUtils$.$initializeOptionsFromDom$([{attribute:"disabled", defaultOptionValue:null, validateOption:!0}, {attribute:"placeholder", defaultOptionValue:""}, {attribute:"required", defaultOptionValue:"optional", coerceDomValue:!0, validateOption:!0}, {attribute:"title", defaultOptionValue:""}], $constructorOptions$$12$$, this);
    null == this.options.value && ($checkedRadio$$1_radios$$1_result$$28$$ = this.$_findRadiosWithMatchingName$(), $checkedRadio$$1_radios$$1_result$$28$$ = $checkedRadio$$1_radios$$1_result$$28$$.filter(":checked"), $checkedRadio$$1_radios$$1_result$$28$$ = 0 === $checkedRadio$$1_radios$$1_result$$28$$.length ? null : $checkedRadio$$1_radios$$1_result$$28$$.val(), this.options.value = $checkedRadio$$1_radios$$1_result$$28$$);
  }, _GetDefaultStyleClass:function() {
    return "oj-radioset";
  }, $_GetContentElement$:function() {
    return this.$_findRadiosWithMatchingName$();
  }, $_RefreshAriaRequired$:function($ariaValue$$2_value$$219$$) {
    var $rootNode$$1$$ = this.$uiRadioset$;
    ($ariaValue$$2_value$$219$$ = "required" == $ariaValue$$2_value$$219$$ ? !0 : !1) && $rootNode$$1$$ ? $rootNode$$1$$.attr("aria-required", $ariaValue$$2_value$$219$$) : $rootNode$$1$$.removeAttr("aria-required");
  }, _setOption:function($key$$110$$, $value$$220$$) {
    this._superApply(arguments);
    "disabled" === $key$$110$$ && this.$$radios$._ojRadioCheckbox("option", $key$$110$$, $value$$220$$);
  }, getNodeBySubId:function($locator$$28_subId$$20$$) {
    var $node$$76$$ = this._super($locator$$28_subId$$20$$);
    $node$$76$$ || ($locator$$28_subId$$20$$ = $locator$$28_subId$$20$$.subId, "oj-radioset-inputs" === $locator$$28_subId$$20$$ && ($node$$76$$ = this.$$radios$));
    return $node$$76$$ || null;
  }, _destroy:function() {
    this._super();
    this.element.removeClass("oj-radioset oj-enabled oj-component").removeAttr("role");
    this.$$radios$ && this.$$radios$._ojRadioCheckbox("destroy");
  }});
});
