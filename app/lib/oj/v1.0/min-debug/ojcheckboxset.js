/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojradiocheckbox"], function($oj$$26$$, $$$$26$$) {
  $oj$$26$$.$__registerWidget$("oj.ojCheckboxset", $$$$26$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{disabled:null}, refresh:function() {
    this._super();
    this.$$checkboxes$ = this.$_findCheckboxesWithMatchingName$().filter(".oj-checkbox")._ojRadioCheckbox("refresh").end().not(".oj-checkbox")._ojRadioCheckbox().end();
    this.$_setup$();
  }, widget:function() {
    return this.$uiCheckboxset$;
  }, _ComponentCreate:function() {
    this._super();
    if (this.element.is("fieldset")) {
      throw Error("ojCheckboxset cannot be bound to a fieldset. Use a div instead.");
    }
    this.$$checkboxes$ = this.$_findCheckboxesWithMatchingName$()._ojRadioCheckbox();
    this.$uiCheckboxset$ = this.element.addClass("oj-checkboxset oj-component").attr("role", "group");
    this._on(this.$_events$);
    this.$_setup$();
  }, $_findCheckboxesWithMatchingName$:function() {
    var $first$$6_name$$89$$ = this.element.find("input[type\x3dcheckbox]:first");
    0 === $first$$6_name$$89$$.length && $oj$$26$$.$Logger$.warn("Could not find any input type\x3dcheckbox within this element");
    $first$$6_name$$89$$ = $first$$6_name$$89$$.attr("name");
    return void 0 === $first$$6_name$$89$$ ? this.element.find("input[type\x3dcheckbox]").not("[name]") : this.element.find("input[type\x3dcheckbox][name\x3d" + $first$$6_name$$89$$ + "]");
  }, $_showContextMenu$:function($menu$$14$$, $event$$316$$) {
    var $checkboxes_launcher$$8$$ = this.element.find("input[type\x3dcheckbox]"), $checked$$3$$ = $checkboxes_launcher$$8$$.filter(":checked"), $checkboxes_launcher$$8$$ = $checked$$3$$.length ? $checked$$3$$ : $checkboxes_launcher$$8$$.first();
    $menu$$14$$.show($event$$316$$, {launcher:$checkboxes_launcher$$8$$, focus:"menu"});
  }, $_setup$:function() {
    this.options.disabled && this.disable();
  }, $_events$:{change:function($event$$317$$) {
    this.$_HandleChangeEvent$($event$$317$$);
  }}, $_HandleChangeEvent$:function($event$$318$$) {
    this._super($event$$318$$);
  }, $_GetDisplayValue$:function() {
    return this.$_GetElementValue$();
  }, $_SetDisplayValue$:function($checkedBoxes$$) {
    this.$$checkboxes$._ojRadioCheckbox("option", "checked", !1);
    if (null != $checkedBoxes$$) {
      for (var $i$$269$$ = 0;$i$$269$$ < $checkedBoxes$$.length;$i$$269$$++) {
        var $checkboxWithMatchingValue_valueFilter$$ = "[value\x3d'" + $checkedBoxes$$[$i$$269$$] + "']";
        void 0 !== $checkboxWithMatchingValue_valueFilter$$ && void 0 !== this.$$checkboxes$ && ($checkboxWithMatchingValue_valueFilter$$ = this.$$checkboxes$.filter($checkboxWithMatchingValue_valueFilter$$), void 0 !== $checkboxWithMatchingValue_valueFilter$$ && 0 < $checkboxWithMatchingValue_valueFilter$$.length && ($checkboxWithMatchingValue_valueFilter$$.prop("checked") || $checkboxWithMatchingValue_valueFilter$$._ojRadioCheckbox("option", "checked", !0)));
      }
    }
  }, $_GetElementValue$:function() {
    var $checkedValues$$ = [], $selectedCheckbox$$ = this.$$checkboxes$.filter(":checked");
    if (0 === $selectedCheckbox$$.length) {
      return null;
    }
    $selectedCheckbox$$.each(function() {
      $checkedValues$$.push($$$$26$$(this).val());
    });
    return $checkedValues$$;
  }, _InitOptions:function($originalDefaults$$9$$, $constructorOptions$$10$$) {
    var $checkboxes$$1_result$$25_selectedCheckbox$$1$$, $checkedValues$$1$$ = [];
    this._super($originalDefaults$$9$$, $constructorOptions$$10$$);
    $oj$$26$$.$EditableValueUtils$.$initializeOptionsFromDom$([{attribute:"disabled", defaultOptionValue:!1, validateOption:!0}, {attribute:"title", defaultOptionValue:""}, {attribute:"placeholder", defaultOptionValue:""}, {attribute:"required", defaultOptionValue:"optional", coerceDomValue:!0, validateOption:!0}], $constructorOptions$$10$$, this);
    null == this.options.value && ($checkboxes$$1_result$$25_selectedCheckbox$$1$$ = this.$_findCheckboxesWithMatchingName$(), $checkboxes$$1_result$$25_selectedCheckbox$$1$$ = $checkboxes$$1_result$$25_selectedCheckbox$$1$$.filter(":checked"), 0 === $checkboxes$$1_result$$25_selectedCheckbox$$1$$.length ? $checkboxes$$1_result$$25_selectedCheckbox$$1$$ = null : ($checkboxes$$1_result$$25_selectedCheckbox$$1$$.each(function() {
      $checkedValues$$1$$.push($$$$26$$(this).val());
    }), $checkboxes$$1_result$$25_selectedCheckbox$$1$$ = $checkedValues$$1$$), this.options.value = $checkboxes$$1_result$$25_selectedCheckbox$$1$$);
  }, _GetDefaultStyleClass:function() {
    return "oj-checkboxset";
  }, $_GetContentElement$:function() {
    return this.$_findCheckboxesWithMatchingName$();
  }, $_RefreshAriaRequired$:function($ariaValue$$1_value$$199$$) {
    var $rootNode$$ = this.$uiCheckboxset$;
    ($ariaValue$$1_value$$199$$ = "required" == $ariaValue$$1_value$$199$$ ? !0 : !1) && $rootNode$$ ? $rootNode$$.attr("aria-required", $ariaValue$$1_value$$199$$) : $rootNode$$.removeAttr("aria-required");
  }, _setOption:function($key$$90$$, $value$$200$$, $flags$$32$$) {
    this._super($key$$90$$, $value$$200$$, $flags$$32$$);
    "disabled" === $key$$90$$ && this.$$checkboxes$._ojRadioCheckbox("option", $key$$90$$, $value$$200$$);
  }, getNodeBySubId:function($locator$$20_subId$$15$$) {
    var $node$$70$$ = this._super($locator$$20_subId$$15$$);
    return $node$$70$$ || ($locator$$20_subId$$15$$ = $locator$$20_subId$$15$$.subId, "oj-checkboxset-inputs" !== $locator$$20_subId$$15$$) ? $node$$70$$ || null : this.$$checkboxes$;
  }, _destroy:function() {
    this._super();
    this.element.removeClass("oj-checkboxset oj-enabled oj-component").removeAttr("role");
    this.$$checkboxes$ && this.$$checkboxes$._ojRadioCheckbox("destroy");
  }});
});
