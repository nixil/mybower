define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtComboBox$$ = function $$DvtComboBox$$$($context$$423$$, $id$$168$$, $styleMap$$73$$) {
  this.Init($context$$423$$, $id$$168$$, $styleMap$$73$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtComboBox$$, D.$DvtContainer$$, "DvtComboBox");
D.$DvtComboBox$$.prototype.Init = function $$DvtComboBox$$$$Init$($context$$424$$, $id$$169$$, $styleMap$$74$$) {
  D.$DvtComboBox$$.$superclass$.Init.call(this, $context$$424$$, D.$JSCompiler_alias_NULL$$, $id$$169$$);
  this.$_styleMap$ = $styleMap$$74$$;
  this.$_itemButtonStates$ = [];
  this.$_items$ = [];
  this.$_tooltips$ = [];
  this.$_selectedIndex$ = 0;
  this.$_bRemoveDropdown$ = this.$_bStaticButtonStates$ = D.$JSCompiler_alias_FALSE$$;
  this.$_maxItemDim$ = new D.$DvtRectangle$$(0, 0, 0, 0);
  this.$_dim$ = new D.$DvtRectangle$$(0, 0, 0, 0);
  this.$_tooltipManager$ = $context$$424$$.$getTooltipManager$();
  this.$_isTouchDevice$ = (0,D.$DvtAgent$isTouchDevice$$)();
  this.$_button$ = (0,D.$JSCompiler_StaticMethods_createButton$$)(this, $id$$169$$ + "_cl");
  this.$addChild$(this.$_button$);
  this.$_contentArea$ = new D.$DvtContainer$$($context$$424$$);
  this.$_contentArea$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$addChild$(this.$_contentArea$);
  this.$_hideDropdownTimer$ = new D.$DvtTimer$$($context$$424$$, 100, this.$HandleHideDropdownTimer$, this, 1);
  this.$_outOfFocusCheckTimer$ = new D.$DvtTimer$$($context$$424$$, 100, this.$HandleOutOfFocusCheckTimer$, this, 1);
  this.$_dropdownItemClickEvent$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtComboBox$$.prototype.$setSelectedIndex$ = function $$DvtComboBox$$$$$setSelectedIndex$$($comboBoxEvent$$inline_6361_selectedIndex$$5$$) {
  this.$_selectedIndex$ = $comboBoxEvent$$inline_6361_selectedIndex$$5$$;
  this.$_bStaticButtonStates$ || (0,D.$JSCompiler_StaticMethods_UpdateContentArea$$)(this);
  $comboBoxEvent$$inline_6361_selectedIndex$$5$$ = new D.$DvtComboBoxEvent$$("cbItemChange", $comboBoxEvent$$inline_6361_selectedIndex$$5$$, this.$_event$);
  this.$_event$ = D.$JSCompiler_alias_NULL$$;
  this.$FireListener$($comboBoxEvent$$inline_6361_selectedIndex$$5$$)
};
D.$JSCompiler_StaticMethods_createButton$$ = function $$JSCompiler_StaticMethods_createButton$$$($JSCompiler_StaticMethods_createButton$self$$, $id$$170$$) {
  var $JSCompiler_temp_const$$125_button$$67$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $context$$inline_6365_dim$$inline_6372_s$$inline_6373$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $dim$$inline_6366_s$$inline_6367$$ = $JSCompiler_StaticMethods_createButton$self$$.$getDimensions$(), $dim$$inline_6366_s$$inline_6367$$ = new D.$DvtRect$$($context$$inline_6365_dim$$inline_6372_s$$inline_6373$$, 0, 0, $dim$$inline_6366_s$$inline_6367$$.$w$, $dim$$inline_6366_s$$inline_6367$$.$h$, 
  $id$$170$$ + "_up");
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($dim$$inline_6366_s$$inline_6367$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($dim$$inline_6366_s$$inline_6367$$);
  $dim$$inline_6366_s$$inline_6367$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_6365_dim$$inline_6372_s$$inline_6373$$, $dim$$inline_6366_s$$inline_6367$$.getWidth(), $dim$$inline_6366_s$$inline_6367$$.getHeight()));
  var $context$$inline_6371_context$$inline_6377$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $context$$inline_6365_dim$$inline_6372_s$$inline_6373$$ = $JSCompiler_StaticMethods_createButton$self$$.$getDimensions$(), $context$$inline_6365_dim$$inline_6372_s$$inline_6373$$ = new D.$DvtRect$$($context$$inline_6371_context$$inline_6377$$, 0, 0, $context$$inline_6365_dim$$inline_6372_s$$inline_6373$$.$w$, $context$$inline_6365_dim$$inline_6372_s$$inline_6373$$.$h$, $id$$170$$ + "_up");
  $context$$inline_6365_dim$$inline_6372_s$$inline_6373$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$inline_6365_dim$$inline_6372_s$$inline_6373$$.$setFill$(new D.$DvtLinearGradientFill$$(0, [D.$DvtButtonLAFUtils$$.$GRADIENT_LIGHT$, D.$DvtButtonLAFUtils$$.$GRADIENT_DARK$]));
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($context$$inline_6365_dim$$inline_6372_s$$inline_6373$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  $context$$inline_6365_dim$$inline_6372_s$$inline_6373$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_6371_context$$inline_6377$$, $context$$inline_6365_dim$$inline_6372_s$$inline_6373$$.getWidth(), $context$$inline_6365_dim$$inline_6372_s$$inline_6373$$.getHeight()));
  var $context$$inline_6371_context$$inline_6377$$ = $JSCompiler_StaticMethods_createButton$self$$.$_context$, $dim$$inline_6378_s$$inline_6379$$ = $JSCompiler_StaticMethods_createButton$self$$.$getDimensions$(), $dim$$inline_6378_s$$inline_6379$$ = new D.$DvtRect$$($context$$inline_6371_context$$inline_6377$$, 0, 0, $dim$$inline_6378_s$$inline_6379$$.$w$, $dim$$inline_6378_s$$inline_6379$$.$h$, $id$$170$$ + "_up");
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($dim$$inline_6378_s$$inline_6379$$, D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$);
  $dim$$inline_6378_s$$inline_6379$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $dim$$inline_6378_s$$inline_6379$$.$setFill$(new D.$DvtLinearGradientFill$$(0, [D.$DvtButtonLAFUtils$$.$GRADIENT_DARK$, D.$DvtButtonLAFUtils$$.$GRADIENT_LIGHT$]));
  $dim$$inline_6378_s$$inline_6379$$.$addChild$((0,D.$DvtComboBox$DrawArrow$$)($context$$inline_6371_context$$inline_6377$$, $dim$$inline_6378_s$$inline_6379$$.getWidth(), $dim$$inline_6378_s$$inline_6379$$.getHeight()));
  $JSCompiler_temp_const$$125_button$$67$$ = new D.$DvtButton$$($JSCompiler_temp_const$$125_button$$67$$, $dim$$inline_6366_s$$inline_6367$$, $context$$inline_6365_dim$$inline_6372_s$$inline_6373$$, $dim$$inline_6378_s$$inline_6379$$, D.$JSCompiler_alias_NULL$$, $id$$170$$);
  (0,D.$JSCompiler_StaticMethods_setCallback$$)($JSCompiler_temp_const$$125_button$$67$$, $JSCompiler_StaticMethods_createButton$self$$.$HandleExpandClick$, $JSCompiler_StaticMethods_createButton$self$$);
  $JSCompiler_temp_const$$125_button$$67$$.setCursor("pointer");
  $JSCompiler_StaticMethods_createButton$self$$.$_isTouchDevice$ || $JSCompiler_temp_const$$125_button$$67$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, $JSCompiler_StaticMethods_createButton$self$$.$HandleButtonDown$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_createButton$self$$);
  $JSCompiler_temp_const$$125_button$$67$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  return $JSCompiler_temp_const$$125_button$$67$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtComboBox$$.prototype;
D.$JSCompiler_prototypeAlias$$.$addItem$ = function $$JSCompiler_prototypeAlias$$$$addItem$$($obj$$188$$, $buttonStates_itdim_tooltip$$43$$, $enaState$$1$$, $ovrState$$4$$, $dwnState$$4$$) {
  $obj$$188$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_items$.push($obj$$188$$);
  this.$_tooltips$.push($buttonStates_itdim_tooltip$$43$$);
  $buttonStates_itdim_tooltip$$43$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$(this.$_context$, $enaState$$1$$ ? $enaState$$1$$ : $obj$$188$$);
  var $maxItemDim$$ = this.$_maxItemDim$, $dim$$66$$ = this.$getDimensions$();
  $buttonStates_itdim_tooltip$$43$$.$w$ > $maxItemDim$$.$w$ && ($maxItemDim$$.$w$ = $buttonStates_itdim_tooltip$$43$$.$w$, $dim$$66$$.$w$ = $buttonStates_itdim_tooltip$$43$$.$w$ + 16);
  $buttonStates_itdim_tooltip$$43$$.$h$ > $maxItemDim$$.$h$ && ($maxItemDim$$.$h$ = $buttonStates_itdim_tooltip$$43$$.$h$, $dim$$66$$.$h$ = $buttonStates_itdim_tooltip$$43$$.$h$);
  this.$_maxItemDim$ = $maxItemDim$$;
  $buttonStates_itdim_tooltip$$43$$ = D.$JSCompiler_alias_NULL$$;
  $enaState$$1$$ && ($ovrState$$4$$ && $dwnState$$4$$) && ($buttonStates_itdim_tooltip$$43$$ = [], $buttonStates_itdim_tooltip$$43$$[0] = $enaState$$1$$, $buttonStates_itdim_tooltip$$43$$[1] = $ovrState$$4$$, $buttonStates_itdim_tooltip$$43$$[2] = $dwnState$$4$$);
  this.$_itemButtonStates$.push($buttonStates_itdim_tooltip$$43$$);
  this.$_bStaticButtonStates$ || (this.removeChild(this.$_button$), this.$_button$ = (0,D.$JSCompiler_StaticMethods_createButton$$)(this, $obj$$188$$.getId()), this.$addChildAt$(this.$_button$, 0), (0,D.$JSCompiler_StaticMethods_UpdateContentArea$$)(this))
};
D.$JSCompiler_prototypeAlias$$.getItem = function $$JSCompiler_prototypeAlias$$$getItem$($i$$598$$) {
  return this.$_items$[$i$$598$$]
};
D.$JSCompiler_prototypeAlias$$.$getSelectedItem$ = function $$JSCompiler_prototypeAlias$$$$getSelectedItem$$() {
  var $selIndex$$1$$ = this.$_selectedIndex$;
  return 0 > $selIndex$$1$$ || $selIndex$$1$$ > this.$_items$.length - 1 ? D.$JSCompiler_alias_NULL$$ : this.$_items$[$selIndex$$1$$]
};
D.$JSCompiler_prototypeAlias$$.$HandleExpandClick$ = function $$JSCompiler_prototypeAlias$$$$HandleExpandClick$$($context$$429_event$$459_stage$$11$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($context$$429_event$$459_stage$$11$$);
  this.$_bRemoveDropdown$ && (this.$_bRemoveDropdown$ = D.$JSCompiler_alias_FALSE$$, this.$_dropdown$ && (this.$_dropdown$.$setVisible$(D.$JSCompiler_alias_FALSE$$), this.$_dropdown$.getParent().removeChild(this.$_dropdown$), this.$_dropdown$ = D.$JSCompiler_alias_NULL$$));
  $context$$429_event$$459_stage$$11$$ = this.$_context$;
  for(var $comboBoxStyles$$inline_6384_dd$$inline_6397_dddim_transX$$7$$ = this.$_styleMap$ ? this.$_styleMap$.comboBox : D.$JSCompiler_alias_NULL$$, $bgAlpha$$inline_6399_leftPadding$$inline_6385$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_6384_dd$$inline_6397_dddim_transX$$7$$, "paddingLeft", 0), $bottomPadding$$inline_6386$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_6384_dd$$inline_6397_dddim_transX$$7$$, "paddingBottom", 0), $rightPadding$$inline_6387$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_6384_dd$$inline_6397_dddim_transX$$7$$, 
  "paddingRight", 0), $interItemPadding$$inline_6388$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_6384_dd$$inline_6397_dddim_transX$$7$$, "paddingInner", 0), $currY$$inline_6389$$ = (0,D.$DvtStyleUtils$getStyle$$)($comboBoxStyles$$inline_6384_dd$$inline_6397_dddim_transX$$7$$, "paddingTop", 0), $context$$inline_6390$$ = this.$_context$, $dim$$inline_6391_proxy$$inline_6396$$, $itemSprite$$inline_6392$$, $item$$inline_6393$$, $bgColor$$inline_6398_content$$inline_6394_dim$$67$$ = new D.$DvtContainer$$($context$$inline_6390$$, 
  "__dd"), $i$$inline_6395$$ = 0;$i$$inline_6395$$ < this.$_items$.length;$i$$inline_6395$$++) {
    $item$$inline_6393$$ = this.$_items$[$i$$inline_6395$$], $dim$$inline_6391_proxy$$inline_6396$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$inline_6390$$, $item$$inline_6393$$), $itemSprite$$inline_6392$$ = new D.$DvtContainer$$($context$$inline_6390$$, "__it" + $i$$inline_6395$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($itemSprite$$inline_6392$$, $bgAlpha$$inline_6399_leftPadding$$inline_6385$$, $currY$$inline_6389$$), $itemSprite$$inline_6392$$.$addChild$($item$$inline_6393$$), 
    $item$$inline_6393$$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), $item$$inline_6393$$.setCursor("pointer"), $currY$$inline_6389$$ += $dim$$inline_6391_proxy$$inline_6396$$.$h$ + $interItemPadding$$inline_6388$$, this.$_eventManager$ && ($dim$$inline_6391_proxy$$inline_6396$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, this.$HandleDropdownItemClick$, this.$HandleButtonDown$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, this.$_tooltips$[$i$$inline_6395$$]), 
    this.$_eventManager$.$associate$($item$$inline_6393$$, $dim$$inline_6391_proxy$$inline_6396$$)), $bgColor$$inline_6398_content$$inline_6394_dim$$67$$.$addChild$($itemSprite$$inline_6392$$)
  }
  $comboBoxStyles$$inline_6384_dd$$inline_6397_dddim_transX$$7$$ = D.$DvtButtonLAFUtils$$.$drawDropdownShape$($context$$inline_6390$$, this.$_maxItemDim$.$w$ + $bgAlpha$$inline_6399_leftPadding$$inline_6385$$ + $rightPadding$$inline_6387$$, $currY$$inline_6389$$ + $bottomPadding$$inline_6386$$ - $interItemPadding$$inline_6388$$, $comboBoxStyles$$inline_6384_dd$$inline_6397_dddim_transX$$7$$);
  $comboBoxStyles$$inline_6384_dd$$inline_6397_dddim_transX$$7$$.$addChild$($bgColor$$inline_6398_content$$inline_6394_dim$$67$$);
  $bgColor$$inline_6398_content$$inline_6394_dim$$67$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "background-color", D.$JSCompiler_alias_NULL$$);
  $bgAlpha$$inline_6399_leftPadding$$inline_6385$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "backgroundAlpha", 1);
  $comboBoxStyles$$inline_6384_dd$$inline_6397_dddim_transX$$7$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", D.$JSCompiler_alias_NULL$$), (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "borderAlpha", 1));
  $bgColor$$inline_6398_content$$inline_6394_dim$$67$$ && $comboBoxStyles$$inline_6384_dd$$inline_6397_dddim_transX$$7$$.$setSolidFill$($bgColor$$inline_6398_content$$inline_6394_dim$$67$$, $bgAlpha$$inline_6399_leftPadding$$inline_6385$$);
  this.$_dropdown$ = $comboBoxStyles$$inline_6384_dd$$inline_6397_dddim_transX$$7$$;
  $comboBoxStyles$$inline_6384_dd$$inline_6397_dddim_transX$$7$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$429_event$$459_stage$$11$$, this.$_dropdown$);
  this.$addChild$(this.$_dropdown$);
  $bgColor$$inline_6398_content$$inline_6394_dim$$67$$ = this.$_button$.$getDimensions$();
  $comboBoxStyles$$inline_6384_dd$$inline_6397_dddim_transX$$7$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$429_event$$459_stage$$11$$) ? -$comboBoxStyles$$inline_6384_dd$$inline_6397_dddim_transX$$7$$.$w$ + 1 * $bgColor$$inline_6398_content$$inline_6394_dim$$67$$.$w$ / 4 : 3 * $bgColor$$inline_6398_content$$inline_6394_dim$$67$$.$w$ / 4;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_dropdown$, $comboBoxStyles$$inline_6384_dd$$inline_6397_dddim_transX$$7$$, 3 * $bgColor$$inline_6398_content$$inline_6394_dim$$67$$.$h$ / 4);
  this.$_button$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$_button$, D.$JSCompiler_alias_TRUE$$);
  this.$FireListener$(new D.$DvtComboBoxEvent$$("cbShowDropdown"));
  ($context$$429_event$$459_stage$$11$$ = $context$$429_event$$459_stage$$11$$.$_stage$) && (this.$_isTouchDevice$ ? $context$$429_event$$459_stage$$11$$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, this) : $context$$429_event$$459_stage$$11$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$HandleHideDropdownTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleHideDropdownTimer$$() {
  (0,D.$JSCompiler_StaticMethods_HideDropdown$$)(this);
  this.$_bStaticButtonStates$ || (0,D.$JSCompiler_StaticMethods_UpdateContentArea$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$HandleStageMouseFocusChange$ = function $$JSCompiler_prototypeAlias$$$$HandleStageMouseFocusChange$$() {
  this.$_dropdownItemClickEvent$ = D.$JSCompiler_alias_FALSE$$;
  this.$_outOfFocusCheckTimer$.reset();
  this.$_outOfFocusCheckTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleOutOfFocusCheckTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleOutOfFocusCheckTimer$$() {
  this.$_dropdownItemClickEvent$ || (this.$_hideDropdownTimer$.reset(), this.$_hideDropdownTimer$.start())
};
D.$JSCompiler_prototypeAlias$$.$HandleButtonDown$ = function $$JSCompiler_prototypeAlias$$$$HandleButtonDown$$() {
  (0,D.$DvtEventManager$consumeEvent$$)()
};
D.$JSCompiler_prototypeAlias$$.$HandleDropdownItemClick$ = function $$JSCompiler_prototypeAlias$$$$HandleDropdownItemClick$$($event$$464$$) {
  this.$_dropdownItemClickEvent$ = D.$JSCompiler_alias_TRUE$$;
  this.$_hideDropdownTimer$.stop();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$464$$);
  var $displayObject$$inline_6401_eventTarget$$;
  $displayObject$$inline_6401_eventTarget$$ = $event$$464$$.target;
  for(var $content$$5_n$$inline_6402$$, $id$$inline_6403$$;$displayObject$$inline_6401_eventTarget$$;) {
    if(($id$$inline_6403$$ = $displayObject$$inline_6401_eventTarget$$.getId()) && $displayObject$$inline_6401_eventTarget$$ instanceof D.$DvtContainer$$ && "__it" == $id$$inline_6403$$.substr(0, 4)) {
      $content$$5_n$$inline_6402$$ = $displayObject$$inline_6401_eventTarget$$;
      break
    }
    $displayObject$$inline_6401_eventTarget$$ = $displayObject$$inline_6401_eventTarget$$.getParent()
  }
  $displayObject$$inline_6401_eventTarget$$ = $content$$5_n$$inline_6402$$;
  var $index$$125$$;
  this.$_dropdown$ && $displayObject$$inline_6401_eventTarget$$ && ($content$$5_n$$inline_6402$$ = this.$_dropdown$.$getChildAt$(0)) && ($index$$125$$ = $content$$5_n$$inline_6402$$.$getChildIndex$($displayObject$$inline_6401_eventTarget$$));
  (0,D.$JSCompiler_StaticMethods_HideDropdown$$)(this);
  this.$_event$ = $event$$464$$;
  this.$setSelectedIndex$($index$$125$$)
};
D.$JSCompiler_StaticMethods_HideDropdown$$ = function $$JSCompiler_StaticMethods_HideDropdown$$$($JSCompiler_StaticMethods_HideDropdown$self$$) {
  $JSCompiler_StaticMethods_HideDropdown$self$$.$_dropdown$ && ($JSCompiler_StaticMethods_HideDropdown$self$$.$_dropdown$.$setVisible$(D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setToggled$$)($JSCompiler_StaticMethods_HideDropdown$self$$.$_button$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_HideDropdown$self$$.$FireListener$(new D.$DvtComboBoxEvent$$("cbHideDropdown")), $JSCompiler_StaticMethods_HideDropdown$self$$.$_bRemoveDropdown$ = D.$JSCompiler_alias_TRUE$$);
  var $stage$$12$$ = $JSCompiler_StaticMethods_HideDropdown$self$$.$_context$.$_stage$;
  $stage$$12$$ && ($JSCompiler_StaticMethods_HideDropdown$self$$.$_isTouchDevice$ ? $stage$$12$$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, $JSCompiler_StaticMethods_HideDropdown$self$$.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_HideDropdown$self$$) : $stage$$12$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, $JSCompiler_StaticMethods_HideDropdown$self$$.$HandleStageMouseFocusChange$, D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_HideDropdown$self$$));
  $JSCompiler_StaticMethods_HideDropdown$self$$.$_button$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$)
};
D.$DvtComboBox$$.prototype.$getDimensions$ = (0,D.$JSCompiler_get$$)("$_dim$");
D.$JSCompiler_StaticMethods_UpdateContentArea$$ = function $$JSCompiler_StaticMethods_UpdateContentArea$$$($JSCompiler_StaticMethods_UpdateContentArea$self$$) {
  var $bUseItem$$ = D.$JSCompiler_alias_TRUE$$, $buttonStates$$1_selIndex$$2$$ = $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_selectedIndex$;
  if($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_itemButtonStates$ && $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_itemButtonStates$.length > $buttonStates$$1_selIndex$$2$$ && ($buttonStates$$1_selIndex$$2$$ = $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_itemButtonStates$[$buttonStates$$1_selIndex$$2$$]) && 2 < $buttonStates$$1_selIndex$$2$$.length) {
    (0,D.$JSCompiler_StaticMethods_setUpState$$)($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_button$, $buttonStates$$1_selIndex$$2$$[0]), (0,D.$JSCompiler_StaticMethods_setOverState$$)($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_button$, $buttonStates$$1_selIndex$$2$$[1]), (0,D.$JSCompiler_StaticMethods_setDownState$$)($JSCompiler_StaticMethods_UpdateContentArea$self$$.$_button$, $buttonStates$$1_selIndex$$2$$[2]), $bUseItem$$ = D.$JSCompiler_alias_FALSE$$
  }
  $bUseItem$$ && (0 < $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_contentArea$.$getNumChildren$() && $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_contentArea$.$removeChildAt$(0), $JSCompiler_StaticMethods_UpdateContentArea$self$$.$_contentArea$.$addChild$($JSCompiler_StaticMethods_UpdateContentArea$self$$.$getSelectedItem$()))
};
D.$DvtComboBox$DrawArrow$$ = function $$DvtComboBox$DrawArrow$$$($context$$431_shape$$87$$, $ww$$113$$, $hh$$96$$) {
  var $aPoints$$ = [];
  $aPoints$$.push($ww$$113$$ - 12, $hh$$96$$ / 2 - 2);
  $aPoints$$.push($ww$$113$$ - 4, $hh$$96$$ / 2 - 2);
  $aPoints$$.push($ww$$113$$ - 8, $hh$$96$$ / 2 + 2);
  $aPoints$$.push($ww$$113$$ - 12, $hh$$96$$ / 2 - 2);
  $context$$431_shape$$87$$ = new D.$DvtPolygon$$($context$$431_shape$$87$$, $aPoints$$, D.$JSCompiler_alias_NULL$$);
  $context$$431_shape$$87$$.$setSolidStroke$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$431_shape$$87$$.$setSolidFill$(D.$DvtButtonLAFUtils$$.$BORDER_COLOR$);
  $context$$431_shape$$87$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  return $context$$431_shape$$87$$
};
D.$DvtComboBox$$.prototype.$setEventManager$ = (0,D.$JSCompiler_set$$)("$_eventManager$");
D.$DropdownItemSprite$$ = function $$DropdownItemSprite$$$($context$$432$$, $x$$215$$, $y$$187$$, $w$$33$$, $h$$26$$, $id$$175$$) {
  this.Init($context$$432$$, $x$$215$$, $y$$187$$, $w$$33$$, $h$$26$$, $id$$175$$)
};
D.$DvtObj$$.$createSubclass$(D.$DropdownItemSprite$$, D.$DvtRect$$, "DropdownItemSprite");
D.$DropdownItemSprite$$.prototype.Init = function $$DropdownItemSprite$$$$Init$($context$$433$$) {
  D.$DvtRect$$.$superclass$.Init.call(this, $context$$433$$)
};
D.$DvtComboBoxEvent$$ = function $$DvtComboBoxEvent$$$($subtype$$8$$, $index$$126$$, $evt$$61$$) {
  this.Init($subtype$$8$$, $index$$126$$, $evt$$61$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtComboBoxEvent$$, D.$DvtBaseEvent$$, "DvtComboBoxEvent");
D.$DvtComboBoxEvent$$.prototype.Init = function $$DvtComboBoxEvent$$$$Init$($subtype$$9$$, $index$$127$$, $evt$$62$$) {
  D.$DvtComboBoxEvent$$.$superclass$.Init.call(this, "comboBoxEvent");
  $index$$127$$ === D.$JSCompiler_alias_VOID$$ && ($index$$127$$ = -1);
  this.$subtype$ = $subtype$$9$$;
  this.$_index$ = $index$$127$$;
  this.$_evt$ = $evt$$62$$
};
D.$DvtComboBoxEvent$$.prototype.$getIndex$ = (0,D.$JSCompiler_get$$)("$_index$");
D.$DvtBaseControl$$ = function $$DvtBaseControl$$$($context$$434$$, $panZoomCanvas$$17$$, $resources$$20$$) {
  this.Init($context$$434$$, $panZoomCanvas$$17$$, $resources$$20$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseControl$$, D.$DvtContainer$$, "DvtBaseControl");
D.$DvtBaseControl$$.prototype.Init = function $$DvtBaseControl$$$$Init$($context$$435$$, $panZoomCanvas$$18$$, $resources$$21$$) {
  D.$DvtBaseControl$$.$superclass$.Init.call(this, $context$$435$$);
  this.$_panZoomCanvas$ = $panZoomCanvas$$18$$;
  this.$_context$ = $context$$435$$;
  this.$_tooltipManager$ = $context$$435$$.$getTooltipManager$();
  this.$Bundle$ = $resources$$21$$
};
D.$DvtBaseControl$$.prototype.$getTooltipManager$ = (0,D.$JSCompiler_get$$)("$_tooltipManager$");
D.$DvtZoomInButton$$ = function $$DvtZoomInButton$$$($context$$436$$, $button$$68$$, $panZoomCanvas$$19$$, $resources$$22$$, $eventManager$$32$$) {
  this.Init($context$$436$$, $button$$68$$, $panZoomCanvas$$19$$, $resources$$22$$, $eventManager$$32$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomInButton$$, D.$DvtBaseControl$$, "DvtZoomInButton");
D.$JSCompiler_prototypeAlias$$ = D.$DvtZoomInButton$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$437_proxy$$10$$, $button$$69$$, $panZoomCanvas$$20$$, $resources$$23$$, $eventManager$$33$$) {
  D.$DvtZoomInButton$$.$superclass$.Init.call(this, $context$$437_proxy$$10$$, $panZoomCanvas$$20$$, $resources$$23$$);
  this.$_bZoomInMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_zoomInTimer$ = new D.$DvtTimer$$($context$$437_proxy$$10$$, 100, this.$HandleZoomInTimer$, this);
  this.$_zoomStartTimer$ = new D.$DvtTimer$$($context$$437_proxy$$10$$, 250, this.$HandleZoomStartTimer$, this, 1);
  this.$_zoomInButton$ = $button$$69$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomInButton$, this.$HandleZoomInClick$, this);
  this.$_eventManager$ = $eventManager$$33$$;
  $context$$437_proxy$$10$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, this.$HandleZoomInMouseDown$, this.$HandleZoomInMouseUp$, this.$HandleZoomInMouseUp$, D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_ZOOMIN"));
  this.$_eventManager$.$associate$(this.$_zoomInButton$, $context$$437_proxy$$10$$);
  this.$addChild$(this.$_zoomInButton$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInClick$$() {
  if(!this.$_zoomInTimer$.$isRunning$()) {
    var $currZoom$$8_newZoom$$5$$ = this.$_panZoomCanvas$.$getZoom$(), $currZoom$$8_newZoom$$5$$ = (0,D.$JSCompiler_StaticMethods_getNextZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$8_newZoom$$5$$), $animator$$123$$ = new D.$DvtAnimator$$(this.$_context$, this.$_panZoomCanvas$.$getAnimationDuration$());
    (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_panZoomCanvas$, $currZoom$$8_newZoom$$5$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, $animator$$123$$);
    $animator$$123$$.play()
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInMouseDown$$() {
  this.$_bZoomInMouseDown$ = D.$JSCompiler_alias_TRUE$$;
  this.$_zoomInTimer$.stop();
  this.$_zoomStartTimer$.stop();
  this.$_zoomStartTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInMouseUp$$() {
  this.$_bZoomInMouseDown$ && (this.$_bZoomInMouseDown$ = D.$JSCompiler_alias_FALSE$$, this.$_zoomInTimer$.stop(), this.$_zoomStartTimer$.stop())
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomStartTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomStartTimer$$() {
  this.$_zoomInTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomInTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomInTimer$$() {
  var $currZoom$$9$$ = this.$_panZoomCanvas$.$getZoom$();
  (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_panZoomCanvas$, (0,D.$JSCompiler_StaticMethods_getNextZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$9$$))
};
D.$JSCompiler_prototypeAlias$$.$setEnabled$ = function $$JSCompiler_prototypeAlias$$$$setEnabled$$($enabled$$8$$) {
  this.$_zoomInButton$.setCursor($enabled$$8$$ ? "pointer" : D.$JSCompiler_alias_NULL$$);
  this.$_zoomInButton$.$setEnabled$($enabled$$8$$);
  (0,D.$JSCompiler_StaticMethods_initState$$)(this.$_zoomInButton$)
};
D.$DvtZoomOutButton$$ = function $$DvtZoomOutButton$$$($context$$440$$, $button$$72$$, $panZoomCanvas$$23$$, $resources$$26$$, $eventManager$$36$$) {
  this.Init($context$$440$$, $button$$72$$, $panZoomCanvas$$23$$, $resources$$26$$, $eventManager$$36$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomOutButton$$, D.$DvtBaseControl$$, "DvtZoomOutButton");
D.$JSCompiler_prototypeAlias$$ = D.$DvtZoomOutButton$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$441_proxy$$12$$, $button$$73$$, $panZoomCanvas$$24$$, $resources$$27$$, $eventManager$$37$$) {
  D.$DvtZoomOutButton$$.$superclass$.Init.call(this, $context$$441_proxy$$12$$, $panZoomCanvas$$24$$, $resources$$27$$);
  this.$_bZoomOutMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_zoomOutTimer$ = new D.$DvtTimer$$($context$$441_proxy$$12$$, 100, this.$HandleZoomOutTimer$, this);
  this.$_zoomStartTimer$ = new D.$DvtTimer$$($context$$441_proxy$$12$$, 250, this.$HandleZoomStartTimer$, this, 1);
  this.$_zoomOutButton$ = $button$$73$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomOutButton$, this.$HandleZoomOutClick$, this);
  this.$_eventManager$ = $eventManager$$37$$;
  $context$$441_proxy$$12$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, this.$HandleZoomOutMouseDown$, this.$HandleZoomOutMouseUp$, this.$HandleZoomOutMouseUp$, D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_ZOOMOUT"));
  this.$_eventManager$.$associate$(this.$_zoomOutButton$, $context$$441_proxy$$12$$);
  this.$addChild$(this.$_zoomOutButton$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutClick$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutClick$$() {
  if(!this.$_zoomOutTimer$.$isRunning$()) {
    var $currZoom$$10_newZoom$$7$$ = this.$_panZoomCanvas$.$getZoom$(), $currZoom$$10_newZoom$$7$$ = (0,D.$JSCompiler_StaticMethods_getPrevZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$10_newZoom$$7$$), $animator$$125$$ = new D.$DvtAnimator$$(this.$_context$, this.$_panZoomCanvas$.$getAnimationDuration$());
    (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_panZoomCanvas$, $currZoom$$10_newZoom$$7$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, $animator$$125$$);
    $animator$$125$$.play()
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutMouseDown$$() {
  this.$_bZoomOutMouseDown$ = D.$JSCompiler_alias_TRUE$$;
  this.$_zoomOutTimer$.stop();
  this.$_zoomStartTimer$.stop();
  this.$_zoomStartTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutMouseUp$$() {
  this.$_bZoomOutMouseDown$ && (this.$_bZoomOutMouseDown$ = D.$JSCompiler_alias_FALSE$$, this.$_zoomOutTimer$.stop(), this.$_zoomStartTimer$.stop())
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomStartTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomStartTimer$$() {
  this.$_zoomOutTimer$.start()
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomOutTimer$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomOutTimer$$() {
  var $currZoom$$11$$ = this.$_panZoomCanvas$.$getZoom$();
  (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_panZoomCanvas$, (0,D.$JSCompiler_StaticMethods_getPrevZoomLevel$$)(this.$_panZoomCanvas$, $currZoom$$11$$))
};
D.$JSCompiler_prototypeAlias$$.$setEnabled$ = function $$JSCompiler_prototypeAlias$$$$setEnabled$$($enabled$$9$$) {
  this.$_zoomOutButton$.setCursor($enabled$$9$$ ? "pointer" : D.$JSCompiler_alias_NULL$$);
  this.$_zoomOutButton$.$setEnabled$($enabled$$9$$);
  (0,D.$JSCompiler_StaticMethods_initState$$)(this.$_zoomOutButton$)
};
D.$DvtZoomToFitButton$$ = function $$DvtZoomToFitButton$$$($context$$438$$, $button$$70$$, $panZoomCanvas$$21$$, $resources$$24$$, $eventManager$$34$$) {
  this.Init($context$$438$$, $button$$70$$, $panZoomCanvas$$21$$, $resources$$24$$, $eventManager$$34$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtZoomToFitButton$$, D.$DvtBaseControl$$, "DvtZoomToFitButton");
D.$DvtZoomToFitButton$$.prototype.Init = function $$DvtZoomToFitButton$$$$Init$($context$$439_proxy$$11$$, $button$$71$$, $panZoomCanvas$$22$$, $resources$$25$$, $eventManager$$35$$) {
  D.$DvtZoomToFitButton$$.$superclass$.Init.call(this, $context$$439_proxy$$11$$, $panZoomCanvas$$22$$, $resources$$25$$);
  this.$_zoomToFitButton$ = $button$$71$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_zoomToFitButton$, this.$HandleZoomToFitClick$, this);
  this.$_zoomToFitButton$.setCursor("pointer");
  this.$_eventManager$ = $eventManager$$35$$;
  $context$$439_proxy$$11$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_ZOOMTOFIT"));
  this.$_eventManager$.$associate$(this.$_zoomToFitButton$, $context$$439_proxy$$11$$);
  this.$addChild$(this.$_zoomToFitButton$)
};
D.$DvtZoomToFitButton$$.prototype.$HandleZoomToFitClick$ = function $$DvtZoomToFitButton$$$$$HandleZoomToFitClick$$() {
  var $animator$$124$$ = new D.$DvtAnimator$$(this.$_context$, this.$_panZoomCanvas$.$getAnimationDuration$());
  this.$_panZoomCanvas$.$zoomToFit$($animator$$124$$);
  $animator$$124$$.play()
};
D.$DvtPanControl$$ = function $$DvtPanControl$$$($context$$421$$, $panButton$$1$$, $recenterButton$$1$$, $panZoomCanvas$$15$$, $resources$$18$$, $control$$, $styleMap$$71$$) {
  this.Init($context$$421$$, $panButton$$1$$, $recenterButton$$1$$, $panZoomCanvas$$15$$, $resources$$18$$, $control$$, $styleMap$$71$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanControl$$, D.$DvtBaseControl$$, "DvtPanControl");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanControl$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$422$$, $panButton$$2$$, $recenterButton$$2$$, $panZoomCanvas$$16$$, $resources$$19$$, $control$$1$$, $styleMap$$72$$) {
  D.$DvtPanControl$$.$superclass$.Init.call(this, $context$$422$$, $panZoomCanvas$$16$$, $resources$$19$$);
  this.$_panTimer$ = new D.$DvtTimer$$($context$$422$$, 50, this.$HandlePanTimer$, this);
  this.$_bPanMouseDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panCenter$ = new D.$DvtPoint$$(20, 20);
  this.$_controls$ = $control$$1$$ ? $control$$1$$ : 16777215;
  $panButton$$2$$.$addChild$($recenterButton$$2$$);
  $recenterButton$$2$$ && (this.$_panCenterSprite$ = $recenterButton$$2$$, this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_FALSE$$), this.$_panCenterSprite$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandlePanCenterClick$, D.$JSCompiler_alias_FALSE$$, this), (0,D.$DvtAgent$isTouchDevice$$)() || (this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandlePanCenterClick$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, 
  this.$HandlePanCenterDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandlePanCenterUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandlePanCenterRollOver$, D.$JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandlePanCenterRollOut$, D.$JSCompiler_alias_FALSE$$, this)), this.$_panCenterSprite$.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, 
  this.$HandlePanCenterMouseMove$, D.$JSCompiler_alias_FALSE$$, this));
  this.$_panButton$ = $panButton$$2$$;
  this.$_panButton$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandlePanClick$, D.$JSCompiler_alias_FALSE$$, this);
  (0,D.$DvtAgent$isTouchDevice$$)() || (this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandlePanClick$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$HandlePanMouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandlePanMouseUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandlePanRollOver$, 
  D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandlePanRollOut$, D.$JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$HandlePanMouseMove$, D.$JSCompiler_alias_FALSE$$, this));
  this.$_panControl$ = D.$DvtButtonLAFUtils$$.$createPanButtonBackground$($context$$422$$, $styleMap$$72$$);
  this.$_panControl$.$addChild$(this.$_panButton$);
  this.$addChild$(this.$_panControl$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanClick$ = function $$JSCompiler_prototypeAlias$$$$HandlePanClick$$($event$$447$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$447$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseDown$$($event$$448_localPoint$$4_stagePoint$$8$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$448_localPoint$$4_stagePoint$$8$$);
  this.$_bPanMouseDown$ = D.$JSCompiler_alias_TRUE$$;
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
  $event$$448_localPoint$$4_stagePoint$$8$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_panZoomCanvas$, $event$$448_localPoint$$4_stagePoint$$8$$);
  $event$$448_localPoint$$4_stagePoint$$8$$ = this.$_panButton$.$stageToLocal$($event$$448_localPoint$$4_stagePoint$$8$$);
  (0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$448_localPoint$$4_stagePoint$$8$$.x, $event$$448_localPoint$$4_stagePoint$$8$$.y, this.$_panButton$.$downState$);
  this.$_panMousePoint$ = new D.$DvtPoint$$($event$$448_localPoint$$4_stagePoint$$8$$.x, $event$$448_localPoint$$4_stagePoint$$8$$.y);
  this.$_panTimer$.start();
  this.$_panTimerCount$ = 0
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseUp$$($event$$449$$) {
  this.$_bPanMouseDown$ && ((0,D.$DvtEventManager$consumeEvent$$)($event$$449$$), this.$_bPanMouseDown$ = D.$JSCompiler_alias_FALSE$$, this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$), this.$_panTimer$.stop());
  this.$_panButton$.$_mouseOutHandler$($event$$449$$);
  this.$getTooltipManager$().$hideTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanRollOver$ = function $$JSCompiler_prototypeAlias$$$$HandlePanRollOver$$($event$$450$$) {
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
  var $tooltip$$inline_6349$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_PAN");
  this.$getTooltipManager$().$showTooltip$($event$$450$$.pageX, $event$$450$$.pageY, $tooltip$$inline_6349$$, $event$$450$$.target)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanRollOut$ = function $$JSCompiler_prototypeAlias$$$$HandlePanRollOut$$($event$$451$$) {
  this.$HandlePanMouseUp$($event$$451$$);
  this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanMouseMove$ = function $$JSCompiler_prototypeAlias$$$$HandlePanMouseMove$$($event$$452_localPoint$$5_stagePoint$$9$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$452_localPoint$$5_stagePoint$$9$$);
  $event$$452_localPoint$$5_stagePoint$$9$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_panZoomCanvas$, $event$$452_localPoint$$5_stagePoint$$9$$);
  $event$$452_localPoint$$5_stagePoint$$9$$ = this.$_panButton$.$stageToLocal$($event$$452_localPoint$$5_stagePoint$$9$$);
  this.$_bPanMouseDown$ ? ((0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$452_localPoint$$5_stagePoint$$9$$.x, $event$$452_localPoint$$5_stagePoint$$9$$.y, this.$_panButton$.$downState$), this.$_panMousePoint$ = new D.$DvtPoint$$($event$$452_localPoint$$5_stagePoint$$9$$.x, $event$$452_localPoint$$5_stagePoint$$9$$.y)) : (0,D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$)(this, $event$$452_localPoint$$5_stagePoint$$9$$.x, $event$$452_localPoint$$5_stagePoint$$9$$.y, 
  this.$_panButton$.$overState$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanTimer$ = function $$JSCompiler_prototypeAlias$$$$HandlePanTimer$$() {
  if(this.$_bPanMouseDown$) {
    var $angleRads$$8_deltaY$$15$$ = window.Math.atan2(this.$_panCenter$.y - this.$_panMousePoint$.y, this.$_panCenter$.x - this.$_panMousePoint$.x), $deltaX$$16$$ = window.Math.cos($angleRads$$8_deltaY$$15$$), $angleRads$$8_deltaY$$15$$ = window.Math.sin($angleRads$$8_deltaY$$15$$), $factor$$3$$ = 15;
    this.$_panTimerCount$++;
    40 < this.$_panTimerCount$ && ($factor$$3$$ *= 3);
    this.$_panZoomCanvas$.$panBy$($factor$$3$$ * $deltaX$$16$$, $factor$$3$$ * $angleRads$$8_deltaY$$15$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterClick$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterClick$$($event$$453$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$453$$);
  this.$_panZoomCanvas$.$zoomAndCenter$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterDown$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterDown$$($event$$454$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$454$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterUp$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterUp$$($event$$455$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$455$$);
  this.$getTooltipManager$().$hideTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterRollOver$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterRollOver$$($event$$456$$) {
  var $tooltip$$inline_6355$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_ZOOMANDCENTER");
  this.$getTooltipManager$().$showTooltip$($event$$456$$.pageX, $event$$456$$.pageY, $tooltip$$inline_6355$$, $event$$456$$.target);
  this.$_panCenterSprite$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
  (0,D.$DvtEventManager$consumeEvent$$)($event$$456$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterRollOut$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterRollOut$$($event$$457$$) {
  this.$getTooltipManager$().$hideTooltip$();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$457$$)
};
D.$JSCompiler_prototypeAlias$$.$HandlePanCenterMouseMove$ = function $$JSCompiler_prototypeAlias$$$$HandlePanCenterMouseMove$$($event$$458$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$458$$)
};
D.$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$ = function $$JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$$$($JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$, $localX$$, $localY$$, $displayObj$$3$$) {
  $displayObj$$3$$.$setRotation$(window.Math.atan2($localY$$ - $JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$.$_panCenter$.y, $localX$$ - $JSCompiler_StaticMethods__rotatePanControlDirectionalArrow$self$$.$_panCenter$.x) - window.Math.PI / 4)
};
D.$DvtControlPanelEvent$$ = function $$DvtControlPanelEvent$$$($subtype$$7$$) {
  this.Init("dvtPZCPExpand");
  this.$_subtype$ = $subtype$$7$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelEvent$$, D.$DvtBaseComponentEvent$$, "DvtControlPanelEvent");
D.$DvtControlPanelEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtControlPanel$$ = function $$DvtControlPanel$$$($context$$452$$, $view$$67$$, $state$$91$$) {
  this.Init($context$$452$$, $view$$67$$, $state$$91$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanel$$, D.$DvtContainer$$, "DvtControlPanel");
D.$DvtControlPanel$DEFAULT_ZOOM_LEVELS$$ = [0, 0.25, 0.5, 0.75, 1];
D.$DvtControlPanel$$.prototype.Init = function $$DvtControlPanel$$$$Init$($context$$453$$, $view$$68$$, $state$$92$$) {
  D.$DvtControlPanel$$.$superclass$.Init.call(this, $context$$453$$);
  this.$_bMouseOver$ = this.$_bMouseDragPanning$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panZoomCanvas$ = $view$$68$$.$_panZoomCanvas$;
  this.$_controls$ = $view$$68$$.$_displayedControls$;
  this.$Bundle$ = $view$$68$$.$getBundle$();
  this.$_buttonImages$ = (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)($view$$68$$);
  this.$_tooltipManager$ = $context$$453$$.$getTooltipManager$();
  this.$_styleMap$ = D.$JSCompiler_alias_NULL$$;
  if(this.$_view$ = $view$$68$$) {
    this.$_styleMap$ = this.$_view$.$getSubcomponentStyles$(), this.$_styleMap$.centerButtonDisplayed || (this.$_controls$ &= -17, this.$_view$.$_displayedControls$ = this.$_controls$)
  }
  this.$_zoomLevels$ = D.$DvtControlPanel$DEFAULT_ZOOM_LEVELS$$;
  this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bgAlpha$ = this.$_styleMap$.backgroundAlpha;
  this.$_eventManager$ = new D.$DvtControlPanelEventManager$$($context$$453$$, D.$JSCompiler_alias_NULL$$, $view$$68$$);
  this.$_eventManager$.$_rolloverTypes$.push(D.$DvtControlPanel$$);
  this.$_eventManager$.$addListeners$(this);
  this.$_eventManager$.$associate$(this, this);
  this.$_state$ = $state$$92$$;
  this.$tabChildren$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this)
};
D.$DvtControlPanel$$.prototype.$getTooltipManager$ = (0,D.$JSCompiler_get$$)("$_tooltipManager$");
D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$ = function $$JSCompiler_StaticMethods_mouseDragPanningStarted$$$($JSCompiler_StaticMethods_mouseDragPanningStarted$self$$) {
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_bMouseDragPanning$ = D.$JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_background$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_frame$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_background$.$setAlpha$($JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_styleMap$.backgroundDragAlpha);
  $JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_frame$.$setAlpha$($JSCompiler_StaticMethods_mouseDragPanningStarted$self$$.$_styleMap$.borderDragAlpha)
};
D.$JSCompiler_StaticMethods_mouseDragPanningEnded$$ = function $$JSCompiler_StaticMethods_mouseDragPanningEnded$$$($JSCompiler_StaticMethods_mouseDragPanningEnded$self$$) {
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_bMouseDragPanning$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_background$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_frame$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$_bMouseOver$ ? $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$HandleRollOver$(D.$JSCompiler_alias_NULL$$) : $JSCompiler_StaticMethods_mouseDragPanningEnded$self$$.$HandleRollOut$(D.$JSCompiler_alias_NULL$$)
};
D.$DvtControlPanel$$.prototype.$isSingleHorzRow$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$DvtControlPanel$$.prototype.$getViewPanelHeight$ = function $$DvtControlPanel$$$$$getViewPanelHeight$$() {
  var $h$$28$$ = 0, $h$$28$$ = this.$isSingleHorzRow$() ? D.$DvtControlPanelLAFUtils$$.$getViewPanelHalfHeight$() : D.$DvtControlPanelLAFUtils$$.$getViewPanelHeight$();
  return window.Math.max((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tabSize", 0), $h$$28$$)
};
D.$JSCompiler_StaticMethods_RenderCollapsed$$ = function $$JSCompiler_StaticMethods_RenderCollapsed$$$($JSCompiler_StaticMethods_RenderCollapsed$self$$) {
  var $context$$454_proxy$$13$$ = $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_context$, $contentBar$$ = new D.$DvtContainer$$($context$$454_proxy$$13$$), $hh$$102$$ = $JSCompiler_StaticMethods_RenderCollapsed$self$$.$getViewPanelHeight$(), $bR2L$$9$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$454_proxy$$13$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_background$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedShape$($context$$454_proxy$$13$$, $hh$$102$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$9$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedFrame$($context$$454_proxy$$13$$, $hh$$102$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$9$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_collapsedDim$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$454_proxy$$13$$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$ = D.$DvtButtonLAFUtils$$.$createExpandButton$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_context$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$getViewPanelHeight$(), $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_styleMap$, $bR2L$$9$$);
  (0,D.$JSCompiler_StaticMethods_setCallback$$)($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$, $JSCompiler_StaticMethods_RenderCollapsed$self$$.$HandleExpandClick$, $JSCompiler_StaticMethods_RenderCollapsed$self$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$.setCursor("pointer");
  $context$$454_proxy$$13$$ = new D.$DvtControlPanelEventHandlerProxy$$($JSCompiler_StaticMethods_RenderCollapsed$self$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($JSCompiler_StaticMethods_RenderCollapsed$self$$.$Bundle$, "CONTROL_PANEL"));
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_eventManager$.$associate$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$, $context$$454_proxy$$13$$);
  $JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_expandButton$);
  $contentBar$$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_background$);
  $contentBar$$.$addChild$($JSCompiler_StaticMethods_RenderCollapsed$self$$.$_frame$);
  return $contentBar$$
};
D.$JSCompiler_StaticMethods_RenderExpanded$$ = function $$JSCompiler_StaticMethods_RenderExpanded$$$($JSCompiler_StaticMethods_RenderExpanded$self$$) {
  var $context$$461$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $s$$132$$ = new D.$DvtContainer$$($context$$461$$);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_background$ = new D.$DvtContainer$$($context$$461$$);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_frame$ = new D.$DvtContainer$$($context$$461$$);
  $s$$132$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_background$);
  $s$$132$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_frame$);
  var $bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$461$$), $backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$ = 0, $dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$ = new D.$DvtContainer$$($context$$461$$), $cpHeight$$inline_6488_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6410_nHorzContentBarChildren$$inline_6420_zoomFrame$$inline_6490$$;
  $cpHeight$$inline_6488_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6410_nHorzContentBarChildren$$inline_6420_zoomFrame$$inline_6490$$ = 0;
  var $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $bSingleRow$$inline_6412_collapseButtonWidth$$inline_6427_currY$$16_currY$$inline_6437_currY$$inline_6444_openside$$inline_6486$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$isSingleHorzRow$();
  0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 16) && ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$ = D.$DvtButtonLAFUtils$$.$createPanControl$($context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$Bundle$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), $bSingleRow$$inline_6412_collapseButtonWidth$$inline_6427_currY$$16_currY$$inline_6437_currY$$inline_6444_openside$$inline_6486$$ && ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$ = D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$($context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$ = 
  D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$($context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), $dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$), $dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$)), 
  $dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$), $cpHeight$$inline_6488_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6410_nHorzContentBarChildren$$inline_6420_zoomFrame$$inline_6490$$++);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$ = D.$DvtButtonLAFUtils$$.$createCollapseButton$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$));
  (0,D.$JSCompiler_StaticMethods_setCallback$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$HandleCollapseClick$, $JSCompiler_StaticMethods_RenderExpanded$self$$);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$.setCursor("pointer");
  $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$ = new D.$DvtControlPanelEventHandlerProxy$$($JSCompiler_StaticMethods_RenderExpanded$self$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$Bundle$, "CONTROL_PANEL"));
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_eventManager$.$associate$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$, $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$);
  $dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ = new D.$DvtContainer$$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$);
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$PopulateHorzContentBar$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$);
  0 < $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$.$getNumChildren$() ? ($dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$), $cpHeight$$inline_6488_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6410_nHorzContentBarChildren$$inline_6420_zoomFrame$$inline_6490$$++) : $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ = D.$JSCompiler_alias_NULL$$;
  var $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$ = $backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$, $backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$ = 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$ = D.$JSCompiler_alias_NULL$$, $bSingleRow$$inline_6412_collapseButtonWidth$$inline_6427_currY$$16_currY$$inline_6437_currY$$inline_6444_openside$$inline_6486$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "openCloseButtonWidth", 0), $backgroundHeight$$inline_6460_buttonWidth$$inline_6428$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, 
  "buttonWidth", 0), $bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "tabSize", 0), $buttonWidth$$inline_6473_dim$$inline_6445_nextZoom$$inline_10517_paddingInner$$inline_6438_panelHeight$$inline_6430_panelWidth$$inline_6457$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), 
  $buttonPaddingSide$$inline_6431_dim$$inline_6440_paddingInner$$inline_6446_paddingSide$$inline_6439_prevZoom$$inline_10518_vertContentBar$$inline_6451$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.hbar, "paddingLeft", 0), $buttonPaddingInner$$inline_6432_nHorzContentBarChildren$$inline_6452_paddingSide$$inline_6447$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.hbar, "paddingInner", 0);
  $bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$ ? ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$.$setTranslateX$(0), $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$ += $bSingleRow$$inline_6412_collapseButtonWidth$$inline_6427_currY$$16_currY$$inline_6437_currY$$inline_6444_openside$$inline_6486$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ && ($dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$ = 
  D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$), $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$ += $buttonPaddingInner$$inline_6432_nHorzContentBarChildren$$inline_6452_paddingSide$$inline_6447$$, 
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$, $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$, ($buttonWidth$$inline_6473_dim$$inline_6445_nextZoom$$inline_10517_paddingInner$$inline_6438_panelHeight$$inline_6430_panelWidth$$inline_6457$$ - $dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$.$h$) / 2), $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$ += 
  window.Math.max($dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$.$w$, $backgroundHeight$$inline_6460_buttonWidth$$inline_6428$$)), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$ && ($context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$ += $buttonPaddingInner$$inline_6432_nHorzContentBarChildren$$inline_6452_paddingSide$$inline_6447$$, $dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$ = 3.5, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$, 
  $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$, $dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$, $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$, $dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$), 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$, $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$, $dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$), $dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$, 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$), $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$ += $dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$.$w$), $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$ += $buttonPaddingSide$$inline_6431_dim$$inline_6440_paddingInner$$inline_6446_paddingSide$$inline_6439_prevZoom$$inline_10518_vertContentBar$$inline_6451$$) : 
  ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$ && ($context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$ += $buttonPaddingSide$$inline_6431_dim$$inline_6440_paddingInner$$inline_6446_paddingSide$$inline_6439_prevZoom$$inline_10518_vertContentBar$$inline_6451$$, $dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$ = 3.5, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$, 
  $buttonPaddingSide$$inline_6431_dim$$inline_6440_paddingInner$$inline_6446_paddingSide$$inline_6439_prevZoom$$inline_10518_vertContentBar$$inline_6451$$, $dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay$, $buttonPaddingSide$$inline_6431_dim$$inline_6440_paddingInner$$inline_6446_paddingSide$$inline_6439_prevZoom$$inline_10518_vertContentBar$$inline_6451$$, 
  $dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControlUnderlay2$, $buttonPaddingSide$$inline_6431_dim$$inline_6440_paddingInner$$inline_6446_paddingSide$$inline_6439_prevZoom$$inline_10518_vertContentBar$$inline_6451$$, $dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$), $dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$ = 
  D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panControl$), $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$ += $buttonPaddingInner$$inline_6432_nHorzContentBarChildren$$inline_6452_paddingSide$$inline_6447$$ + 
  $dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$.$w$, $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$ += 1), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ && ($dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$, 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$), 0 == $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$ && ($context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$ += $buttonPaddingSide$$inline_6431_dim$$inline_6440_paddingInner$$inline_6446_paddingSide$$inline_6439_prevZoom$$inline_10518_vertContentBar$$inline_6451$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$, 
  $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$, ($buttonWidth$$inline_6473_dim$$inline_6445_nextZoom$$inline_10517_paddingInner$$inline_6438_panelHeight$$inline_6430_panelWidth$$inline_6457$$ - $dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$.$h$) / 2), $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$ += $dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$.$w$, 
  $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$ = window.Math.max($context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$ + $buttonPaddingInner$$inline_6432_nHorzContentBarChildren$$inline_6452_paddingSide$$inline_6447$$, $bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$)), 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_collapseButton$.$setTranslateX$($context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$), $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$ += $bSingleRow$$inline_6412_collapseButtonWidth$$inline_6427_currY$$16_currY$$inline_6437_currY$$inline_6444_openside$$inline_6486$$);
  $backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$ = $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$;
  $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$ = D.$JSCompiler_alias_NULL$$;
  $bSingleRow$$inline_6412_collapseButtonWidth$$inline_6427_currY$$16_currY$$inline_6437_currY$$inline_6444_openside$$inline_6486$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 16 || $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$ && $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.panelDrawerStyles && 0 == $cpHeight$$inline_6488_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6410_nHorzContentBarChildren$$inline_6420_zoomFrame$$inline_6490$$ ? 
  (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingTop", 0) : 0;
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$isSingleHorzRow$() && 0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 16) && ($bSingleRow$$inline_6412_collapseButtonWidth$$inline_6427_currY$$16_currY$$inline_6437_currY$$inline_6444_openside$$inline_6486$$ += D.$DvtControlPanelLAFUtils$$.$getViewPanelHeight$() - $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$());
  if(0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 256) || 0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 4097)) {
    $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$ = new D.$DvtContainer$$($context$$461$$), $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$.$setTranslateY$($dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$.$getTranslateY$() + $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$()), $bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$ = 
    $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$, 0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 256) && ($buttonWidth$$inline_6473_dim$$inline_6445_nextZoom$$inline_10517_paddingInner$$inline_6438_panelHeight$$inline_6430_panelWidth$$inline_6457$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingInner", 0), $buttonPaddingSide$$inline_6431_dim$$inline_6440_paddingInner$$inline_6446_paddingSide$$inline_6439_prevZoom$$inline_10518_vertContentBar$$inline_6451$$ = 
    (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingLeft", 0), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$ = D.$DvtButtonLAFUtils$$.$createZoomToFitButton$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$Bundle$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_eventManager$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$, $buttonPaddingSide$$inline_6431_dim$$inline_6440_paddingInner$$inline_6446_paddingSide$$inline_6439_prevZoom$$inline_10518_vertContentBar$$inline_6451$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$.$getTranslateY$() + $bSingleRow$$inline_6412_collapseButtonWidth$$inline_6427_currY$$16_currY$$inline_6437_currY$$inline_6444_openside$$inline_6486$$), 
    $buttonPaddingSide$$inline_6431_dim$$inline_6440_paddingInner$$inline_6446_paddingSide$$inline_6439_prevZoom$$inline_10518_vertContentBar$$inline_6451$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$), $bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$), 
    $bSingleRow$$inline_6412_collapseButtonWidth$$inline_6427_currY$$16_currY$$inline_6437_currY$$inline_6444_openside$$inline_6486$$ += $buttonPaddingSide$$inline_6431_dim$$inline_6440_paddingInner$$inline_6446_paddingSide$$inline_6439_prevZoom$$inline_10518_vertContentBar$$inline_6451$$.$h$, $bSingleRow$$inline_6412_collapseButtonWidth$$inline_6427_currY$$16_currY$$inline_6437_currY$$inline_6444_openside$$inline_6486$$ += $buttonWidth$$inline_6473_dim$$inline_6445_nextZoom$$inline_10517_paddingInner$$inline_6438_panelHeight$$inline_6430_panelWidth$$inline_6457$$), 
    $bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$ = $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$, $buttonWidth$$inline_6473_dim$$inline_6445_nextZoom$$inline_10517_paddingInner$$inline_6438_panelHeight$$inline_6430_panelWidth$$inline_6457$$ = D.$JSCompiler_alias_NULL$$, $buttonPaddingSide$$inline_6431_dim$$inline_6440_paddingInner$$inline_6446_paddingSide$$inline_6439_prevZoom$$inline_10518_vertContentBar$$inline_6451$$ = 
    (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingInner", 0), $buttonPaddingInner$$inline_6432_nHorzContentBarChildren$$inline_6452_paddingSide$$inline_6447$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingLeft", 0), 0 != ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 4097) && ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$ = D.$DvtButtonLAFUtils$$.$createZoomInButton$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$Bundle$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_eventManager$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$, $buttonPaddingInner$$inline_6432_nHorzContentBarChildren$$inline_6452_paddingSide$$inline_6447$$, 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$.$getTranslateY$() + $bSingleRow$$inline_6412_collapseButtonWidth$$inline_6427_currY$$16_currY$$inline_6437_currY$$inline_6444_openside$$inline_6486$$), $buttonWidth$$inline_6473_dim$$inline_6445_nextZoom$$inline_10517_paddingInner$$inline_6438_panelHeight$$inline_6430_panelWidth$$inline_6457$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$), 
    $bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$), $bSingleRow$$inline_6412_collapseButtonWidth$$inline_6427_currY$$16_currY$$inline_6437_currY$$inline_6444_openside$$inline_6486$$ += $buttonWidth$$inline_6473_dim$$inline_6445_nextZoom$$inline_10517_paddingInner$$inline_6438_panelHeight$$inline_6430_panelWidth$$inline_6457$$.$h$ + 
    $buttonPaddingSide$$inline_6431_dim$$inline_6440_paddingInner$$inline_6446_paddingSide$$inline_6439_prevZoom$$inline_10518_vertContentBar$$inline_6451$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$ = D.$DvtButtonLAFUtils$$.$createZoomOutButton$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$Bundle$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_eventManager$, 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_buttonImages$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$, $buttonPaddingInner$$inline_6432_nHorzContentBarChildren$$inline_6452_paddingSide$$inline_6447$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$.$getTranslateY$() + $bSingleRow$$inline_6412_collapseButtonWidth$$inline_6427_currY$$16_currY$$inline_6437_currY$$inline_6444_openside$$inline_6486$$), 
    $buttonWidth$$inline_6473_dim$$inline_6445_nextZoom$$inline_10517_paddingInner$$inline_6438_panelHeight$$inline_6430_panelWidth$$inline_6457$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$), $bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$.$addChild$($JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$), 
    $bSingleRow$$inline_6412_collapseButtonWidth$$inline_6427_currY$$16_currY$$inline_6437_currY$$inline_6444_openside$$inline_6486$$ += $buttonWidth$$inline_6473_dim$$inline_6445_nextZoom$$inline_10517_paddingInner$$inline_6438_panelHeight$$inline_6430_panelWidth$$inline_6457$$.$h$, $bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$.$getZoom$(), 
    $buttonWidth$$inline_6473_dim$$inline_6445_nextZoom$$inline_10517_paddingInner$$inline_6438_panelHeight$$inline_6430_panelWidth$$inline_6457$$ = (0,D.$JSCompiler_StaticMethods_getNextZoomLevel$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$), $buttonPaddingSide$$inline_6431_dim$$inline_6440_paddingInner$$inline_6446_paddingSide$$inline_6439_prevZoom$$inline_10518_vertContentBar$$inline_6451$$ = 
    (0,D.$JSCompiler_StaticMethods_getPrevZoomLevel$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_panZoomCanvas$, $bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$ && $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomInButton$.$setEnabled$($bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$ != 
    $buttonWidth$$inline_6473_dim$$inline_6445_nextZoom$$inline_10517_paddingInner$$inline_6438_panelHeight$$inline_6430_panelWidth$$inline_6457$$), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$ && $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomOutButton$.$setEnabled$($bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$ != $buttonPaddingSide$$inline_6431_dim$$inline_6440_paddingInner$$inline_6446_paddingSide$$inline_6439_prevZoom$$inline_10518_vertContentBar$$inline_6451$$)), 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_frame$.$addChild$($context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$)
  }
  var $buttonPaddingSide$$inline_6431_dim$$inline_6440_paddingInner$$inline_6446_paddingSide$$inline_6439_prevZoom$$inline_10518_vertContentBar$$inline_6451$$ = $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$, $buttonPaddingInner$$inline_6432_nHorzContentBarChildren$$inline_6452_paddingSide$$inline_6447$$ = $cpHeight$$inline_6488_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6410_nHorzContentBarChildren$$inline_6420_zoomFrame$$inline_6490$$, 
  $bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$, $buttonWidth$$inline_6456_viewFrame$$inline_6463$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "openCloseButtonWidth", 0), $buttonWidth$$inline_6473_dim$$inline_6445_nextZoom$$inline_10517_paddingInner$$inline_6438_panelHeight$$inline_6430_panelWidth$$inline_6457$$ = 
  (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "tabSize", 0), $backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$ = ($dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) ? 
  $backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$ : $backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$ - $buttonWidth$$inline_6456_viewFrame$$inline_6463$$, $backgroundHeight$$inline_6460_buttonWidth$$inline_6428$$ = 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), $backgroundFrameOffsetX$$inline_6461$$ = 0, $backgroundShapeOffsetX$$inline_6462$$ = 0;
  $dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$ ? $dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$ && 0 == $buttonPaddingInner$$inline_6432_nHorzContentBarChildren$$inline_6452_paddingSide$$inline_6447$$ && ($backgroundShapeOffsetX$$inline_6462$$ = $bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$ ? -$buttonWidth$$inline_6473_dim$$inline_6445_nextZoom$$inline_10517_paddingInner$$inline_6438_panelHeight$$inline_6430_panelWidth$$inline_6457$$ : 
  $buttonWidth$$inline_6473_dim$$inline_6445_nextZoom$$inline_10517_paddingInner$$inline_6438_panelHeight$$inline_6430_panelWidth$$inline_6457$$) : ($backgroundFrameOffsetX$$inline_6461$$ = $bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$ ? $buttonWidth$$inline_6456_viewFrame$$inline_6463$$ : 0, $backgroundShapeOffsetX$$inline_6462$$ = $bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$ ? $buttonWidth$$inline_6456_viewFrame$$inline_6463$$ : 
  0);
  if(0 < $buttonPaddingInner$$inline_6432_nHorzContentBarChildren$$inline_6452_paddingSide$$inline_6447$$ || $dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$) {
    var $r$$inline_6465_viewShape$$inline_6464$$ = $buttonWidth$$inline_6456_viewFrame$$inline_6463$$ = D.$JSCompiler_alias_NULL$$, $r$$inline_6465_viewShape$$inline_6464$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "border-radius", 0));
    $dim$$inline_6426_panelDrawerStyle$$inline_6458_yy$$inline_6433$$ ? ($bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$ = 0 < $buttonPaddingInner$$inline_6432_nHorzContentBarChildren$$inline_6452_paddingSide$$inline_6447$$ && $buttonPaddingSide$$inline_6431_dim$$inline_6440_paddingInner$$inline_6446_paddingSide$$inline_6439_prevZoom$$inline_10518_vertContentBar$$inline_6451$$ != D.$JSCompiler_alias_NULL$$ ? D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ : D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$, 
    $buttonWidth$$inline_6456_viewFrame$$inline_6463$$ = D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelperOpenSide$($bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$, $r$$inline_6465_viewShape$$inline_6464$$, $backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$, 
    $backgroundHeight$$inline_6460_buttonWidth$$inline_6428$$, $bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$, $buttonWidth$$inline_6473_dim$$inline_6445_nextZoom$$inline_10517_paddingInner$$inline_6438_panelHeight$$inline_6430_panelWidth$$inline_6457$$), $r$$inline_6465_viewShape$$inline_6464$$ = D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelperOpenSide$($bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$, 
    $r$$inline_6465_viewShape$$inline_6464$$, $backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$, $backgroundHeight$$inline_6460_buttonWidth$$inline_6428$$, $bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$, $buttonWidth$$inline_6473_dim$$inline_6445_nextZoom$$inline_10517_paddingInner$$inline_6438_panelHeight$$inline_6430_panelWidth$$inline_6457$$)) : 
    ($buttonWidth$$inline_6456_viewFrame$$inline_6463$$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewOpenShape$($bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$, $backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), 
    !$bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$), $r$$inline_6465_viewShape$$inline_6464$$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewOpenShape$($bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$, $backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$, 
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$(), !$bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$));
    $buttonWidth$$inline_6456_viewFrame$$inline_6463$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "border-color", D.$JSCompiler_alias_NULL$$));
    $buttonWidth$$inline_6456_viewFrame$$inline_6463$$.$setFill$(D.$JSCompiler_alias_NULL$$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($buttonWidth$$inline_6456_viewFrame$$inline_6463$$, $dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$.$getTranslateX$() + $backgroundFrameOffsetX$$inline_6461$$, $dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$.$getTranslateY$());
    $dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$.$addChildAt$($buttonWidth$$inline_6456_viewFrame$$inline_6463$$, 0);
    $r$$inline_6465_viewShape$$inline_6464$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "background-color", D.$JSCompiler_alias_NULL$$));
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($r$$inline_6465_viewShape$$inline_6464$$, $dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$.$getTranslateX$() + $backgroundShapeOffsetX$$inline_6462$$, $dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$.$getTranslateY$());
    $JSCompiler_StaticMethods_RenderExpanded$self$$.$_background$.$addChild$($r$$inline_6465_viewShape$$inline_6464$$)
  }
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_frame$.$addChild$($dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$);
  $bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$ = $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$;
  $backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$;
  $bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$ = (0,D.$DvtAgent$isRightToLeft$$)($backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$);
  $buttonWidth$$inline_6473_dim$$inline_6445_nextZoom$$inline_10517_paddingInner$$inline_6438_panelHeight$$inline_6430_panelWidth$$inline_6457$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "openCloseButtonWidth", 0);
  !$JSCompiler_StaticMethods_RenderExpanded$self$$.$_additionalContent$ && 0 == ($JSCompiler_StaticMethods_RenderExpanded$self$$.$_controls$ & 16) ? $bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$ ? ($dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$.$setTranslateX$(0 - $dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$.$getTranslateX$()), 
  $dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$.$setTranslateY$(0), $bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$ && (D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$, $bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$), 
  $dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$.$setTranslateX$($dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$.$getTranslateX$() - $buttonWidth$$inline_6473_dim$$inline_6445_nextZoom$$inline_10517_paddingInner$$inline_6438_panelHeight$$inline_6430_panelWidth$$inline_6457$$), $bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$.$setTranslateY$(0))) : $bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$ ? 
  ($backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "tabSize", 0), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$, 0, 0), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$, 
  $dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$.$getTranslateX$() + $backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$, 0)) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$, $dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$.$getTranslateX$(), 0) : $bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$ && 
  $bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$ && ($backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$, 
  $dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$), $bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$ = (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, "tabSize", 0), $dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$.$setTranslateX$(0), $bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$.$setTranslateX$($backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$.$w$ + 
  $backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$.x - $bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$));
  $bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$ = $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$;
  $bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$ = $bSingleRow$$inline_6412_collapseButtonWidth$$inline_6427_currY$$16_currY$$inline_6437_currY$$inline_6444_openside$$inline_6486$$;
  $context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$ = $JSCompiler_StaticMethods_RenderExpanded$self$$.$_context$;
  $bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$ && ($backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$ = $bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$.$getNumChildren$(), $backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$ = 
  1 < $backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$ || $JSCompiler_StaticMethods_RenderExpanded$self$$.$_zoomToFitButton$ == D.$JSCompiler_alias_NULL$$ || 1 < $cpHeight$$inline_6488_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6410_nHorzContentBarChildren$$inline_6420_zoomFrame$$inline_6490$$ || 0 < $cpHeight$$inline_6488_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6410_nHorzContentBarChildren$$inline_6420_zoomFrame$$inline_6490$$ && 
  1 == $backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$, $bSingleRow$$inline_6412_collapseButtonWidth$$inline_6427_currY$$16_currY$$inline_6437_currY$$inline_6444_openside$$inline_6486$$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$ && $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.panelDrawerStyles && 
  ($bSingleRow$$inline_6412_collapseButtonWidth$$inline_6427_currY$$16_currY$$inline_6437_currY$$inline_6444_openside$$inline_6486$$ = 0 < $cpHeight$$inline_6488_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6410_nHorzContentBarChildren$$inline_6420_zoomFrame$$inline_6490$$ ? D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ : D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$), $dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$, 
  $dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$), $bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$ += 4, $cpHeight$$inline_6488_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6410_nHorzContentBarChildren$$inline_6420_zoomFrame$$inline_6490$$ = $backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$ ? 
  $bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$ : window.Math.max($dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$.$h$, $bBiDi$$inline_6472_barWidth$$inline_6476_context$$inline_6455_currY$$inline_6482_currZoom$$inline_10516_panelWidth$$inline_6429_vertContentBar$$inline_6436_vertContentBar$$inline_6443$$), $cpHeight$$inline_6488_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6410_nHorzContentBarChildren$$inline_6420_zoomFrame$$inline_6490$$ += 
  (0,D.$DvtStyleUtils$getStyle$$)($JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$.vbar, "paddingBottom", 0), $dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$ = D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomShape$($context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$, $cpHeight$$inline_6488_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6410_nHorzContentBarChildren$$inline_6420_zoomFrame$$inline_6490$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, 
  $bSingleRow$$inline_6412_collapseButtonWidth$$inline_6427_currY$$16_currY$$inline_6437_currY$$inline_6444_openside$$inline_6486$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$()), $cpHeight$$inline_6488_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6410_nHorzContentBarChildren$$inline_6420_zoomFrame$$inline_6490$$ = D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomFrame$($context$$inline_6411_context$$inline_6483_currX$$inline_6424_proxy$$inline_6416_vertContentBar$$5$$, 
  $cpHeight$$inline_6488_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6410_nHorzContentBarChildren$$inline_6420_zoomFrame$$inline_6490$$, $backgroundWidth$$inline_6459_context$$inline_6425_context$$inline_6471_cpWidth$$inline_6474_currX$$13_dimHorizontal$$inline_6475_nVertContentBarChildren$$inline_6484_roundedCorner$$inline_6485$$, $JSCompiler_StaticMethods_RenderExpanded$self$$.$_styleMap$, $bSingleRow$$inline_6412_collapseButtonWidth$$inline_6427_currY$$16_currY$$inline_6437_currY$$inline_6444_openside$$inline_6486$$, 
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$getViewPanelHeight$()), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$, $bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$.$getTranslateX$(), $bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$.$getTranslateY$()), $JSCompiler_StaticMethods_RenderExpanded$self$$.$_background$.$addChild$($dim$$inline_6487_horzContentBar$$6_zoomShape$$inline_6489$$), 
  $bBiDi$$5_openSide$$inline_6466_vertContentBar$$inline_6470_vertContentBar$$inline_6480$$.$addChildAt$($cpHeight$$inline_6488_nHorzContentBarChildren$$4_nHorzContentBarChildren$$inline_6410_nHorzContentBarChildren$$inline_6420_zoomFrame$$inline_6490$$, 0));
  $JSCompiler_StaticMethods_RenderExpanded$self$$.$_expandedDim$ = D.$DvtButtonLAFUtils$$.$_getDimForced$($context$$461$$, $s$$132$$);
  return $s$$132$$
};
D.$DvtControlPanel$$.prototype.$PopulateHorzContentBar$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtControlPanel$$.prototype.$toggleExpandCollapse$ = function $$DvtControlPanel$$$$$toggleExpandCollapse$$() {
  this.$_bTransition$ || (2 === this.$_state$ ? this.$_doCollapse$() : 1 === this.$_state$ && this.$_doExpand$())
};
D.$DvtControlPanel$$.prototype.$HandleExpandClick$ = function $$DvtControlPanel$$$$$HandleExpandClick$$($event$$483$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$483$$);
  this.$_bTransition$ || (this.$_doExpand$(), this.$getTooltipManager$() && this.$getTooltipManager$().$hideTooltip$())
};
D.$DvtControlPanel$$.prototype.$_doExpand$ = function $$DvtControlPanel$$$$$_doExpand$$() {
  this.$_bTransition$ = D.$JSCompiler_alias_TRUE$$;
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  var $event$$inline_6503_s$$133$$ = (0,D.$JSCompiler_StaticMethods_RenderExpanded$$)(this);
  this.$addChild$($event$$inline_6503_s$$133$$);
  (0,D.$JSCompiler_StaticMethods__applyAlphasForMouse$$)(this);
  var $oldContent$$inline_6493$$ = this.$getChildAt$(0), $odim$$inline_6495_transX$$inline_6500$$ = $oldContent$$inline_6493$$.$getDimensions$(), $openCloseButtonWidth$$inline_6496$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "openCloseButtonWidth", 0);
  if($odim$$inline_6495_transX$$inline_6500$$ && 0 != $odim$$inline_6495_transX$$inline_6500$$.$w$) {
    var $ndim$$inline_6497$$ = $event$$inline_6503_s$$133$$.$getDimensions$(), $animator$$inline_6498$$ = new D.$DvtAnimator$$(this.$_context$, 0.25);
    $oldContent$$inline_6493$$.$setAlpha$(1);
    $event$$inline_6503_s$$133$$.$setAlpha$(0);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_6498$$, "typeNumber", $oldContent$$inline_6493$$, $oldContent$$inline_6493$$.$getAlpha$, $oldContent$$inline_6493$$.$setAlpha$, 0);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_6498$$, "typeNumber", $event$$inline_6503_s$$133$$, $event$$inline_6503_s$$133$$.$getAlpha$, $event$$inline_6503_s$$133$$.$setAlpha$, 1);
    $event$$inline_6503_s$$133$$.$setScaleX$($odim$$inline_6495_transX$$inline_6500$$.$w$ / $ndim$$inline_6497$$.$w$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_6498$$, "typeNumber", $event$$inline_6503_s$$133$$, $event$$inline_6503_s$$133$$.$getScaleX$, $event$$inline_6503_s$$133$$.$setScaleX$, 1);
    if((0,D.$DvtAgent$isRightToLeft$$)(this.$_context$)) {
      $event$$inline_6503_s$$133$$.$setTranslateX$($oldContent$$inline_6493$$.$getTranslateX$());
      var $dimWidth$$inline_6499$$ = $ndim$$inline_6497$$.$w$ + $ndim$$inline_6497$$.x;
      (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_6498$$, "typeNumber", $event$$inline_6503_s$$133$$, $event$$inline_6503_s$$133$$.$getTranslateX$, $event$$inline_6503_s$$133$$.$setTranslateX$, $oldContent$$inline_6493$$.$getTranslateX$() + $openCloseButtonWidth$$inline_6496$$ - $dimWidth$$inline_6499$$)
    }
    $event$$inline_6503_s$$133$$.$setScaleY$($odim$$inline_6495_transX$$inline_6500$$.$h$ / $ndim$$inline_6497$$.$h$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_6498$$, "typeNumber", $event$$inline_6503_s$$133$$, $event$$inline_6503_s$$133$$.$getScaleY$, $event$$inline_6503_s$$133$$.$setScaleY$, 1);
    $animator$$inline_6498$$.$setOnEnd$(function() {
      $oldContent$$inline_6493$$.getParent().removeChild($oldContent$$inline_6493$$);
      this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$;
      this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$)
    }, this);
    $animator$$inline_6498$$.play()
  }else {
    $oldContent$$inline_6493$$.getParent().removeChild($oldContent$$inline_6493$$), (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? ($ndim$$inline_6497$$ = (0,D.$DvtDisplayableUtils$_getDimForced$$)(this.$_context$, $event$$inline_6503_s$$133$$), $dimWidth$$inline_6499$$ = window.Math.floor($ndim$$inline_6497$$.$w$ + $ndim$$inline_6497$$.x), $odim$$inline_6495_transX$$inline_6500$$ = $openCloseButtonWidth$$inline_6496$$ - $dimWidth$$inline_6499$$) : $odim$$inline_6495_transX$$inline_6500$$ = 0, 
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($event$$inline_6503_s$$133$$, $odim$$inline_6495_transX$$inline_6500$$, 0)
  }
  this.$_state$ = 2;
  $event$$inline_6503_s$$133$$ = new D.$DvtControlPanelEvent$$("show");
  this.$FireListener$($event$$inline_6503_s$$133$$)
};
D.$JSCompiler_StaticMethods__applyAlphasForMouse$$ = function $$JSCompiler_StaticMethods__applyAlphasForMouse$$$($JSCompiler_StaticMethods__applyAlphasForMouse$self$$) {
  var $bMouseOver$$3$$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__applyAlphasForMouse$self$$.$_context$.$_stage$ && ($bMouseOver$$3$$ = D.$JSCompiler_alias_TRUE$$);
  $bMouseOver$$3$$ ? (0,D.$JSCompiler_StaticMethods__applyAlphasRollover$$)($JSCompiler_StaticMethods__applyAlphasForMouse$self$$) : (0,D.$JSCompiler_StaticMethods__applyAlphasRollout$$)($JSCompiler_StaticMethods__applyAlphasForMouse$self$$)
};
D.$DvtControlPanel$$.prototype.$HandleCollapseClick$ = function $$DvtControlPanel$$$$$HandleCollapseClick$$($event$$484$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$484$$);
  this.$_bTransition$ || this.$_doCollapse$()
};
D.$DvtControlPanel$$.prototype.$_doCollapse$ = function $$DvtControlPanel$$$$$_doCollapse$$() {
  this.$_bTransition$ = D.$JSCompiler_alias_TRUE$$;
  var $event$$inline_6513_s$$134$$ = (0,D.$JSCompiler_StaticMethods_RenderCollapsed$$)(this);
  this.$addChild$($event$$inline_6513_s$$134$$);
  (0,D.$JSCompiler_StaticMethods__applyAlphasForMouse$$)(this);
  var $oldContent$$inline_6506$$ = this.$getChildAt$(0), $animator$$inline_6508$$ = new D.$DvtAnimator$$(this.$_context$, 0.25);
  $oldContent$$inline_6506$$.$setAlpha$(1);
  $event$$inline_6513_s$$134$$.$setAlpha$(0);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_6508$$, "typeNumber", $oldContent$$inline_6506$$, $oldContent$$inline_6506$$.$getAlpha$, $oldContent$$inline_6506$$.$setAlpha$, 0);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_6508$$, "typeNumber", $event$$inline_6513_s$$134$$, $event$$inline_6513_s$$134$$.$getAlpha$, $event$$inline_6513_s$$134$$.$setAlpha$, 1);
  var $ndim$$inline_6509$$ = this.$_collapsedDim$, $odim$$inline_6510$$ = this.$_expandedDim$;
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_6508$$, "typeNumber", $oldContent$$inline_6506$$, $oldContent$$inline_6506$$.$getScaleX$, $oldContent$$inline_6506$$.$setScaleX$, $ndim$$inline_6509$$.$w$ / $odim$$inline_6510$$.$w$);
  (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) && (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_6508$$, "typeNumber", $oldContent$$inline_6506$$, $oldContent$$inline_6506$$.$getTranslateX$, $oldContent$$inline_6506$$.$setTranslateX$, $event$$inline_6513_s$$134$$.$getTranslateX$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$inline_6508$$, "typeNumber", $oldContent$$inline_6506$$, $oldContent$$inline_6506$$.$getScaleY$, $oldContent$$inline_6506$$.$setScaleY$, $ndim$$inline_6509$$.$h$ / $odim$$inline_6510$$.$h$);
  $animator$$inline_6508$$.$setOnEnd$(function() {
    $oldContent$$inline_6506$$.getParent().removeChild($oldContent$$inline_6506$$);
    this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
  }, this);
  $animator$$inline_6508$$.play();
  this.$_state$ = 1;
  $event$$inline_6513_s$$134$$ = new D.$DvtControlPanelEvent$$("hide");
  this.$FireListener$($event$$inline_6513_s$$134$$)
};
D.$DvtControlPanel$$.prototype.$HandleRollOver$ = function $$DvtControlPanel$$$$$HandleRollOver$$() {
  this.$_bMouseOver$ = D.$JSCompiler_alias_TRUE$$;
  this.$_bMouseDragPanning$ || (0,D.$JSCompiler_StaticMethods__applyAlphasRollover$$)(this)
};
D.$DvtControlPanel$$.prototype.$HandleRollOut$ = function $$DvtControlPanel$$$$$HandleRollOut$$() {
  this.$_bMouseOver$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bMouseDragPanning$ || (0,D.$JSCompiler_StaticMethods__applyAlphasRollout$$)(this)
};
D.$JSCompiler_StaticMethods__applyAlphasRollover$$ = function $$JSCompiler_StaticMethods__applyAlphasRollover$$$($JSCompiler_StaticMethods__applyAlphasRollover$self$$) {
  $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_background$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_styleMap$.backgroundHoverAlpha);
  $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_frame$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_styleMap$.borderHoverAlpha);
  $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_panControlUnderlay$ && $JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_panControlUnderlay$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollover$self$$.$_styleMap$.backgroundHoverAlpha)
};
D.$JSCompiler_StaticMethods__applyAlphasRollout$$ = function $$JSCompiler_StaticMethods__applyAlphasRollout$$$($JSCompiler_StaticMethods__applyAlphasRollout$self$$) {
  $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_background$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_bgAlpha$);
  $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_frame$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_styleMap$.borderAlpha);
  $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_panControlUnderlay$ && $JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_panControlUnderlay$.$setAlpha$($JSCompiler_StaticMethods__applyAlphasRollout$self$$.$_bgAlpha$)
};
D.$DvtControlPanel$$.prototype.$getDimensions$ = function $$DvtControlPanel$$$$$getDimensions$$() {
  this.$_dim$ || (this.$_dim$ = D.$DvtControlPanel$$.$superclass$.$getDimensions$.call(this));
  return this.$_dim$
};
D.$DvtControlPanel$$.prototype.$renderComponent$ = function $$DvtControlPanel$$$$$renderComponent$$() {
  var $s$$135$$;
  $s$$135$$ = 1 == this.$_state$ ? (0,D.$JSCompiler_StaticMethods_RenderCollapsed$$)(this) : (0,D.$JSCompiler_StaticMethods_RenderExpanded$$)(this);
  this.$_background$.$setAlpha$(this.$_bgAlpha$);
  this.$_frame$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.$addChild$($s$$135$$)
};
D.$DvtControlPanel$$.prototype.$getButtonImages$ = (0,D.$JSCompiler_get$$)("$_buttonImages$");
D.$JSCompiler_StaticMethods_enableZoomInControl$$ = function $$JSCompiler_StaticMethods_enableZoomInControl$$$($JSCompiler_StaticMethods_enableZoomInControl$self$$, $enabled$$10$$) {
  $JSCompiler_StaticMethods_enableZoomInControl$self$$.$_zoomInButton$ && $JSCompiler_StaticMethods_enableZoomInControl$self$$.$_zoomInButton$.$setEnabled$($enabled$$10$$)
};
D.$JSCompiler_StaticMethods_enableZoomOutControl$$ = function $$JSCompiler_StaticMethods_enableZoomOutControl$$$($JSCompiler_StaticMethods_enableZoomOutControl$self$$, $enabled$$11$$) {
  $JSCompiler_StaticMethods_enableZoomOutControl$self$$.$_zoomOutButton$ && $JSCompiler_StaticMethods_enableZoomOutControl$self$$.$_zoomOutButton$.$setEnabled$($enabled$$11$$)
};
D.$DvtControlPanelDefaults$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelDefaults$$, D.$DvtObj$$, "DvtControlPanelDefaults");
D.$DvtControlPanelDefaults$$.$SKIN_ALTA$ = {"fill-type":"solid", backgroundAlpha:1, backgroundDragAlpha:1, borderDragAlpha:1, panelDrawerStyles:D.$JSCompiler_alias_TRUE$$, buttonWidth:42, buttonHeight:42, buttonRadius:0, openCloseButtonWidth:42, tabSize:42, paddingTop:15, paddingSide:-1, imageWidth:24, imageHeight:24, centerButtonDisplayed:D.$JSCompiler_alias_FALSE$$, scrollbarBackground:"linear-gradient(bottom, #dce2e7 0%, #f8f8f8 8%)", scrollbarBorderColor:"#dce2e7", scrollbarHandleColor:"#abb0b4", 
scrollbarHandleHoverColor:"#333333", scrollbarHandleActiveColor:"#333333", comboBox:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0, itemHeight:30, imagePadding:0, itemPadding:10}, vbar:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0}, hbar:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0}};
D.$DvtControlPanelDefaults$$.$SKIN_SKYROS$ = {"fill-type":"solid"};
D.$DvtControlPanelDefaults$$.$DEFAULT$ = {"fill-type":"gradient", "border-color":"#ffffff", "background-color":"#ffffff", "border-radius":6, backgroundAlpha:0.5, backgroundHoverAlpha:1, backgroundDragAlpha:0.5, borderAlpha:1, borderHoverAlpha:1, borderDragAlpha:0.5, tabSize:26, buttonWidth:22, buttonHeight:22, buttonRadius:3, paddingTop:5, paddingSide:5, imageWidth:22, imageHeight:20, openCloseButtonWidth:10, centerButtonDisplayed:D.$JSCompiler_alias_TRUE$$, comboBox:{paddingTop:2, paddingBottom:6, 
paddingLeft:3, paddingRight:3, paddingInner:2, itemHeight:22, radius:4, imagePadding:2, itemPadding:7}, vbar:{paddingTop:2.5, paddingBottom:2.5, paddingLeft:2, paddingRight:2, paddingInner:2}, hbar:{paddingTop:2, paddingBottom:2, paddingLeft:3, paddingRight:3, paddingInner:2}};
D.$DvtControlPanelDefaults$$.$calcOptions$ = function $$DvtControlPanelDefaults$$$$calcOptions$$($userOptions$$2$$) {
  var $defaults$$10$$ = D.$DvtControlPanelDefaults$$.$_getDefaults$($userOptions$$2$$);
  return $userOptions$$2$$ ? D.$DvtJSONUtils$$.$merge$($userOptions$$2$$, $defaults$$10$$) : $defaults$$10$$
};
D.$DvtControlPanelDefaults$$.$_getDefaults$ = function $$DvtControlPanelDefaults$$$$_getDefaults$$($userOptions$$3$$) {
  var $defaults$$11$$ = D.$JSCompiler_alias_NULL$$;
  return $defaults$$11$$ = $userOptions$$3$$ && "skyros" === $userOptions$$3$$.skin ? D.$DvtJSONUtils$$.$merge$(D.$DvtControlPanelDefaults$$.$SKIN_SKYROS$, D.$DvtControlPanelDefaults$$.$DEFAULT$) : $userOptions$$3$$ && "alta" === $userOptions$$3$$.skin ? D.$DvtJSONUtils$$.$merge$(D.$DvtControlPanelDefaults$$.$SKIN_ALTA$, D.$DvtControlPanelDefaults$$.$DEFAULT$) : D.$DvtJSONUtils$$.clone(D.$DvtControlPanelDefaults$$.$DEFAULT$)
};
D.$DvtControlPanelEventManager$$ = function $$DvtControlPanelEventManager$$$($context$$31$$, $callback$$32$$, $callbackObj$$7$$) {
  this.Init($context$$31$$, $callback$$32$$, $callbackObj$$7$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelEventManager$$, D.$DvtEventManager$$, "DvtControlPanelEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtControlPanelEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$48$$) {
  var $obj$$33$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$48$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$48$$);
  $obj$$33$$ && ($obj$$33$$.$HandleMouseDown$ && $obj$$33$$.$HandleMouseDown$($event$$48$$), $event$$48$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($event$$49$$) {
  var $obj$$34$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$49$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnMouseUp$.call(this, $event$$49$$);
  $obj$$34$$ && ($obj$$34$$.$HandleMouseUp$ && $obj$$34$$.$HandleMouseUp$($event$$49$$), $event$$49$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$50$$) {
  var $obj$$35$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$50$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$50$$);
  $obj$$35$$ && ($obj$$35$$.$HandleMouseOut$ && $obj$$35$$.$HandleMouseOut$($event$$50$$), $event$$50$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$51$$) {
  var $obj$$36$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$51$$));
  D.$DvtControlPanelEventManager$$.$superclass$.$OnClick$.call(this, $event$$51$$);
  $obj$$36$$ && ($obj$$36$$.$HandleClick$ && $obj$$36$$.$HandleClick$($event$$51$$), $event$$51$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnRollOver$ = function $$JSCompiler_prototypeAlias$$$$OnRollOver$$($event$$52$$) {
  D.$DvtControlPanelEventManager$$.$superclass$.$OnRollOver$.call(this, $event$$52$$);
  var $obj$$37$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$52$$));
  $obj$$37$$ && $obj$$37$$.$HandleRollOver$ && $obj$$37$$.$HandleRollOver$($event$$52$$)
};
D.$JSCompiler_prototypeAlias$$.$OnRollOut$ = function $$JSCompiler_prototypeAlias$$$$OnRollOut$$($event$$53$$) {
  D.$DvtControlPanelEventManager$$.$superclass$.$OnRollOut$.call(this, $event$$53$$);
  var $obj$$38$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$53$$));
  $obj$$38$$ && $obj$$38$$.$HandleRollOut$ && $obj$$38$$.$HandleRollOut$($event$$53$$)
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$54$$) {
  var $obj$$39$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$54$$));
  $obj$$39$$ && ($obj$$39$$.$HandleClick$ && $obj$$39$$.$HandleClick$($event$$54$$), $event$$54$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$55$$) {
  $event$$55$$.$blockTouchHold$();
  (0,D.$DvtEventManager$consumeEvent$$)($event$$55$$)
};
D.$DvtControlPanelEventHandlerProxy$$ = function $$DvtControlPanelEventHandlerProxy$$$($callback$$102$$, $handleClick$$, $handleMouseDown$$, $handleMouseUp$$, $handleMouseOut$$, $handleMouseOver$$, $tooltip$$45$$) {
  this.Init($callback$$102$$, $handleClick$$, $handleMouseDown$$, $handleMouseUp$$, $handleMouseOut$$, $handleMouseOver$$, $tooltip$$45$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelEventHandlerProxy$$, D.$DvtObj$$, "DvtControlPanelEventHandlerProxy");
D.$JSCompiler_prototypeAlias$$ = D.$DvtControlPanelEventHandlerProxy$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($callbackObj$$73$$, $handleClick$$1$$, $handleMouseDown$$1$$, $handleMouseUp$$1$$, $handleMouseOut$$1$$, $handleMouseOver$$1$$, $tooltip$$46$$) {
  this.$_callbackObj$ = $callbackObj$$73$$;
  this.$_handleClick$ = $handleClick$$1$$;
  this.$_handleMouseUp$ = $handleMouseUp$$1$$;
  this.$_handleMouseDown$ = $handleMouseDown$$1$$;
  this.$_handleMouseOut$ = $handleMouseOut$$1$$;
  this.$_handleMouseOver$ = $handleMouseOver$$1$$;
  this.$_tooltip$ = $tooltip$$46$$
};
D.$JSCompiler_prototypeAlias$$.$HandleClick$ = function $$JSCompiler_prototypeAlias$$$$HandleClick$$($event$$478$$) {
  this.$_handleClick$ && this.$_handleClick$.call(this.$_callbackObj$, $event$$478$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseDown$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseDown$$($event$$479$$) {
  this.$_handleMouseDown$ && this.$_handleMouseDown$.call(this.$_callbackObj$, $event$$479$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseUp$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseUp$$($event$$480$$) {
  this.$_handleMouseUp$ && this.$_handleMouseUp$.call(this.$_callbackObj$, $event$$480$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOut$$($event$$481$$) {
  this.$_handleMouseOut$ && this.$_handleMouseOut$.call(this.$_callbackObj$, $event$$481$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOver$$($event$$482$$) {
  this.$_handleMouseOver$ && this.$_handleMouseOver$.call(this.$_callbackObj$, $event$$482$$)
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$DvtControlPanelLAFUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtControlPanelLAFUtils$$, D.$DvtObj$$, "DvtControlPanelLAFUtils");
D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ = "top";
D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$ = "right";
D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$ = "left";
D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ = "bottom";
D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HEIGHT$ = 47;
D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HALF_HEIGHT$ = 26;
D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ = window.Math.sin(window.Math.PI / 4);
D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ = window.Math.tan(window.Math.PI / 8);
D.$DvtControlPanelLAFUtils$$.$getViewPanelHeight$ = function $$DvtControlPanelLAFUtils$$$$getViewPanelHeight$$() {
  return D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HEIGHT$
};
D.$DvtControlPanelLAFUtils$$.$getViewPanelHalfHeight$ = function $$DvtControlPanelLAFUtils$$$$getViewPanelHalfHeight$$() {
  return D.$DvtControlPanelLAFUtils$$.$VIEW_PANEL_HALF_HEIGHT$
};
D.$DvtControlPanelLAFUtils$$.$createEmptyViewOpenShape$ = function $$DvtControlPanelLAFUtils$$$$createEmptyViewOpenShape$$($context$$443$$, $nw$$, $nh$$2$$, $bL2R$$, $r$$51_styleMap$$75$$) {
  $nw$$ || ($nw$$ = 86);
  $nh$$2$$ || ($nh$$2$$ = 47);
  $bL2R$$ === D.$JSCompiler_alias_VOID$$ && ($bL2R$$ = D.$JSCompiler_alias_TRUE$$);
  $r$$51_styleMap$$75$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($r$$51_styleMap$$75$$, "border-radius", 0));
  return D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelper$($context$$443$$, $r$$51_styleMap$$75$$, $nw$$ - 2 * $r$$51_styleMap$$75$$, $nh$$2$$ - 2 * $r$$51_styleMap$$75$$, $bL2R$$)
};
D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelper$ = function $$DvtControlPanelLAFUtils$$$$makeViewOpenShapeHelper$$($context$$444$$, $r$$52$$, $ww$$115$$, $hh$$98$$, $bL2R$$1$$) {
  var $x$$217$$ = $ww$$115$$ + $r$$52$$, $y$$189$$ = $hh$$98$$ + $r$$52$$, $cmds$$18$$ = window.DvtPathUtils.moveTo($x$$217$$ + $r$$52$$, $y$$189$$ + $r$$52$$), $cmds$$18$$ = $cmds$$18$$ + window.DvtPathUtils.lineTo($x$$217$$ - $ww$$115$$, $y$$189$$ + $r$$52$$), $x$$217$$ = $x$$217$$ - $ww$$115$$, $cmds$$18$$ = $cmds$$18$$ + window.DvtPathUtils.lineTo($x$$217$$ - $r$$52$$, $y$$189$$ + $r$$52$$), $cmds$$18$$ = $cmds$$18$$ + window.DvtPathUtils.lineTo($x$$217$$ - $r$$52$$, $y$$189$$ - $hh$$98$$), $y$$189$$ = 
  $y$$189$$ - $hh$$98$$;
  $bL2R$$1$$ ? ($cmds$$18$$ += window.DvtPathUtils.$quadTo$(-$r$$52$$ + $x$$217$$, -D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$52$$ + $y$$189$$, -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$52$$ + $x$$217$$, -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$52$$ + $y$$189$$) + window.DvtPathUtils.$quadTo$(-D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$52$$ + $x$$217$$, -$r$$52$$ + $y$$189$$, $x$$217$$, -$r$$52$$ + $y$$189$$) + window.DvtPathUtils.lineTo($x$$217$$, -$r$$52$$ + $y$$189$$), $cmds$$18$$ += 
  window.DvtPathUtils.lineTo($x$$217$$ + $ww$$115$$ + $r$$52$$, -$r$$52$$ + $y$$189$$), $cmds$$18$$ += window.DvtPathUtils.lineTo($x$$217$$ + $ww$$115$$ + $r$$52$$, $y$$189$$ + $hh$$98$$)) : ($cmds$$18$$ += window.DvtPathUtils.lineTo($x$$217$$ - $r$$52$$, -$r$$52$$ + $y$$189$$), $cmds$$18$$ += window.DvtPathUtils.lineTo($x$$217$$ + $ww$$115$$, -$r$$52$$ + $y$$189$$), $x$$217$$ += $ww$$115$$, $cmds$$18$$ += window.DvtPathUtils.$quadTo$(D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$52$$ + $x$$217$$, 
  -$r$$52$$ + $y$$189$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$52$$ + $x$$217$$, -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$52$$ + $y$$189$$) + window.DvtPathUtils.$quadTo$($r$$52$$ + $x$$217$$, -D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$52$$ + $y$$189$$, $r$$52$$ + $x$$217$$, $y$$189$$) + window.DvtPathUtils.lineTo($x$$217$$ + $r$$52$$, $y$$189$$ + $hh$$98$$));
  $cmds$$18$$ += window.DvtPathUtils.closePath();
  return new D.$DvtPath$$($context$$444$$, $cmds$$18$$)
};
D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedShape$ = function $$DvtControlPanelLAFUtils$$$$createEmptyViewClosedShape$$($context$$445_mc$$2$$, $buttonHeight$$4_nh$$3$$, $styleMap$$76$$, $arPoints$$7_bR2L$$7_color$$63$$) {
  $buttonHeight$$4_nh$$3$$ || ($buttonHeight$$4_nh$$3$$ = 47);
  var $r$$53$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$76$$, "border-radius", 0)), $buttonWidth$$7$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$76$$, "openCloseButtonWidth", 0);
  $buttonHeight$$4_nh$$3$$ = window.Math.max($buttonHeight$$4_nh$$3$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$76$$, "buttonHeight", $buttonHeight$$4_nh$$3$$));
  $arPoints$$7_bR2L$$7_color$$63$$ = D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$7$$, $buttonHeight$$4_nh$$3$$, $r$$53$$, $arPoints$$7_bR2L$$7_color$$63$$);
  $arPoints$$7_bR2L$$7_color$$63$$ = $arPoints$$7_bR2L$$7_color$$63$$.concat("Z");
  $context$$445_mc$$2$$ = new D.$DvtPath$$($context$$445_mc$$2$$, $arPoints$$7_bR2L$$7_color$$63$$, "cls_shape");
  ($arPoints$$7_bR2L$$7_color$$63$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$76$$, "tab-color-inactive", D.$JSCompiler_alias_NULL$$)) || ($arPoints$$7_bR2L$$7_color$$63$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$76$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $context$$445_mc$$2$$.$setSolidFill$($arPoints$$7_bR2L$$7_color$$63$$);
  return $context$$445_mc$$2$$
};
D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedFrame$ = function $$DvtControlPanelLAFUtils$$$$createEmptyViewClosedFrame$$($context$$446_mc$$3$$, $buttonHeight$$5_nh$$4$$, $styleMap$$77$$, $arPoints$$8_bR2L$$8$$) {
  $buttonHeight$$5_nh$$4$$ || ($buttonHeight$$5_nh$$4$$ = 47);
  var $r$$54$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$77$$, "border-radius", 0)), $buttonWidth$$8$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$77$$, "openCloseButtonWidth", 0);
  $buttonHeight$$5_nh$$4$$ = window.Math.max($buttonHeight$$5_nh$$4$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$77$$, "buttonHeight", $buttonHeight$$5_nh$$4$$));
  $arPoints$$8_bR2L$$8$$ = D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$8$$, $buttonHeight$$5_nh$$4$$, $r$$54$$, $arPoints$$8_bR2L$$8$$);
  $arPoints$$8_bR2L$$8$$ = $arPoints$$8_bR2L$$8$$.concat("Z");
  $context$$446_mc$$3$$ = new D.$DvtPath$$($context$$446_mc$$3$$, $arPoints$$8_bR2L$$8$$, "cls_shape");
  $context$$446_mc$$3$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$77$$, "border-color", D.$JSCompiler_alias_NULL$$));
  $context$$446_mc$$3$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  return $context$$446_mc$$3$$
};
D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomShape$ = function $$DvtControlPanelLAFUtils$$$$renderEmptyZoomShape$$($context$$447_mc$$4$$, $nh$$5$$, $styleMap$$78$$, $openSide$$, $openSideSize$$) {
  $nh$$5$$ || ($nh$$5$$ = 137);
  var $r$$55$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$78$$, "border-radius", 0)), $cpWidth$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$78$$, "tabSize", 0), $ww$$116$$ = $cpWidth$$ - 2 * $r$$55$$, $hh$$99$$ = $nh$$5$$ + 7 - 2 * $r$$55$$;
  $context$$447_mc$$4$$ = $openSide$$ && $openSideSize$$ ? D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$($context$$447_mc$$4$$, $r$$55$$, $cpWidth$$, $nh$$5$$, $openSide$$, $openSideSize$$) : D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelper$($context$$447_mc$$4$$, $r$$55$$, $ww$$116$$, $hh$$99$$);
  $context$$447_mc$$4$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$78$$, "background-color", D.$JSCompiler_alias_NULL$$));
  return $context$$447_mc$$4$$
};
D.$DvtControlPanelLAFUtils$$.$renderEmptyZoomFrame$ = function $$DvtControlPanelLAFUtils$$$$renderEmptyZoomFrame$$($context$$448$$, $nh$$6$$, $roundBottomRight$$, $styleMap$$79$$, $openSide$$1$$, $openSideSize$$1$$) {
  $nh$$6$$ || ($nh$$6$$ = 137);
  $roundBottomRight$$ || ($roundBottomRight$$ = D.$JSCompiler_alias_TRUE$$);
  var $r$$56$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$79$$, "border-radius", 0)), $cpWidth$$1$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$79$$, "tabSize", 0), $ww$$117$$ = $cpWidth$$1$$ - 2 * $r$$56$$, $hh$$100$$ = $nh$$6$$ + 7 - 2 * $r$$56$$, $mc$$5$$ = D.$JSCompiler_alias_NULL$$, $mc$$5$$ = $openSide$$1$$ && $openSideSize$$1$$ ? D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$($context$$448$$, $r$$56$$, $cpWidth$$1$$, $nh$$6$$, $openSide$$1$$, $openSideSize$$1$$) : 
  D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelper$($context$$448$$, $r$$56$$, $ww$$117$$, $hh$$100$$, $roundBottomRight$$);
  $mc$$5$$.$setSolidStroke$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$79$$, "border-color", D.$JSCompiler_alias_NULL$$));
  $mc$$5$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  return $mc$$5$$
};
D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelper$ = function $$DvtControlPanelLAFUtils$$$$makeZoomShapeHelper$$($context$$449$$, $r$$57$$, $ww$$118$$, $hh$$101$$, $roundBottomRight$$1$$) {
  $roundBottomRight$$1$$ || ($roundBottomRight$$1$$ = D.$JSCompiler_alias_TRUE$$);
  var $x$$218$$ = $ww$$118$$ + $r$$57$$, $y$$190$$ = $hh$$101$$, $cmds$$19$$ = window.DvtPathUtils.moveTo($x$$218$$ + $r$$57$$, $y$$190$$), $cmds$$19$$ = $roundBottomRight$$1$$ ? $cmds$$19$$ + (window.DvtPathUtils.$quadTo$($r$$57$$ + $x$$218$$, D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$57$$ + $y$$190$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$57$$ + $x$$218$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$57$$ + $y$$190$$) + window.DvtPathUtils.$quadTo$(D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * 
  $r$$57$$ + $x$$218$$, $r$$57$$ + $y$$190$$, $x$$218$$, $r$$57$$ + $y$$190$$) + window.DvtPathUtils.lineTo($x$$218$$, $r$$57$$ + $y$$190$$)) : $cmds$$19$$ + window.DvtPathUtils.lineTo($x$$218$$ + $r$$57$$, $y$$190$$ + $r$$57$$), $cmds$$19$$ = $cmds$$19$$ + window.DvtPathUtils.lineTo($x$$218$$ - $ww$$118$$, $r$$57$$ + $y$$190$$), $x$$218$$ = $x$$218$$ - $ww$$118$$, $cmds$$19$$ = $cmds$$19$$ + (window.DvtPathUtils.$quadTo$(-D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$57$$ + $x$$218$$, $r$$57$$ + 
  $y$$190$$, -D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$57$$ + $x$$218$$, D.$DvtControlPanelLAFUtils$$.$SIN_PI_4$ * $r$$57$$ + $y$$190$$) + window.DvtPathUtils.$quadTo$(-$r$$57$$ + $x$$218$$, D.$DvtControlPanelLAFUtils$$.$TAN_PI_8$ * $r$$57$$ + $y$$190$$, -$r$$57$$ + $x$$218$$, $y$$190$$) + window.DvtPathUtils.lineTo(-$r$$57$$ + $x$$218$$, $y$$190$$) + window.DvtPathUtils.lineTo(-$r$$57$$ + $x$$218$$, $y$$190$$ - $hh$$101$$)), $y$$190$$ = $y$$190$$ - $hh$$101$$, $cmds$$19$$ = $cmds$$19$$ + (window.DvtPathUtils.lineTo($x$$218$$ + 
  $ww$$118$$ + $r$$57$$, $y$$190$$) + window.DvtPathUtils.lineTo($x$$218$$ + $ww$$118$$ + $r$$57$$, $y$$190$$ + $hh$$101$$) + window.DvtPathUtils.closePath());
  return new D.$DvtPath$$($context$$449$$, $cmds$$19$$)
};
D.$DvtControlPanelLAFUtils$$.$makeZoomShapeHelperOpenSide$ = function $$DvtControlPanelLAFUtils$$$$makeZoomShapeHelperOpenSide$$($context$$450$$, $arPoints$$9_r$$58$$, $width$$125$$, $height$$106$$, $openSide$$2$$, $openSideSize$$2$$) {
  $arPoints$$9_r$$58$$ = D.$DvtControlPanelLAFUtils$$.$GetShapePathCommands$($width$$125$$, $height$$106$$, $arPoints$$9_r$$58$$, $openSide$$2$$, $openSideSize$$2$$);
  return new D.$DvtPath$$($context$$450$$, $arPoints$$9_r$$58$$)
};
D.$DvtControlPanelLAFUtils$$.$makeViewOpenShapeHelperOpenSide$ = function $$DvtControlPanelLAFUtils$$$$makeViewOpenShapeHelperOpenSide$$($context$$451$$, $arPoints$$10_r$$59$$, $width$$126$$, $height$$107$$, $openSide$$3$$, $openSideSize$$3$$) {
  $arPoints$$10_r$$59$$ = D.$DvtControlPanelLAFUtils$$.$GetShapePathCommands$($width$$126$$, $height$$107$$, $arPoints$$10_r$$59$$, $openSide$$3$$, $openSideSize$$3$$);
  return new D.$DvtPath$$($context$$451$$, $arPoints$$10_r$$59$$)
};
D.$DvtControlPanelLAFUtils$$.$GetShapePathCommands$ = function $$DvtControlPanelLAFUtils$$$$GetShapePathCommands$$($width$$127$$, $height$$108$$, $r$$60$$, $openSide$$4$$, $openSideSize$$4$$) {
  var $arPoints$$11$$, $bidi$$6$$ = (0,D.$DvtAgent$isRightToLeft$$)();
  $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ && !$bidi$$6$$ && ($arPoints$$11$$ = ["M", $width$$127$$, 0, "L", $width$$127$$, $height$$108$$ - $r$$60$$, "A", $r$$60$$, $r$$60$$, 0, 0, 1, $width$$127$$ - $r$$60$$, $height$$108$$, "L", 0, $height$$108$$, "L", 0, 0]);
  $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_TOP$ && $bidi$$6$$ ? $arPoints$$11$$ = ["M", $width$$127$$, 0, "L", $width$$127$$, $height$$108$$, "L", $r$$60$$, $height$$108$$, "A", $r$$60$$, $r$$60$$, 0, 0, 1, 0, $height$$108$$ - $r$$60$$, "L", 0, 0] : $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$ && !$bidi$$6$$ ? $arPoints$$11$$ = ["M", $width$$127$$, $openSideSize$$4$$, "L", $width$$127$$, $height$$108$$ - $r$$60$$, "A", $r$$60$$, $r$$60$$, 0, 0, 1, $width$$127$$ - $r$$60$$, 
  $height$$108$$, "L", 0, $height$$108$$, "L", 0, 0, "L", $width$$127$$, 0] : $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_RIGHT$ && $bidi$$6$$ ? $arPoints$$11$$ = ["M", 0, 0, "L", $width$$127$$, 0, "L", $width$$127$$, $height$$108$$, "L", $r$$60$$, $height$$108$$, "A", $r$$60$$, $r$$60$$, 0, 0, 1, 0, $height$$108$$ - $r$$60$$, "L", 0, $openSideSize$$4$$] : $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$ && !$bidi$$6$$ ? $arPoints$$11$$ = ["M", 0, 0, "L", $width$$127$$ - $r$$60$$, 
  0, "A", $r$$60$$, $r$$60$$, 0, 0, 1, $width$$127$$, $r$$60$$, "L", $width$$127$$, $height$$108$$ - $r$$60$$, "A", $r$$60$$, $r$$60$$, 0, 0, 1, $width$$127$$ - $r$$60$$, $height$$108$$, "L", 0, $height$$108$$] : $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_LEFT$ && $bidi$$6$$ ? $arPoints$$11$$ = ["M", $width$$127$$, $height$$108$$, "L", $r$$60$$, $height$$108$$, "A", $r$$60$$, $r$$60$$, 0, 0, 1, 0, $height$$108$$ - $r$$60$$, "L", 0, $r$$60$$, "A", $r$$60$$, $r$$60$$, 0, 0, 1, $r$$60$$, 0, 
  "L", $width$$127$$, 0] : $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ && !$bidi$$6$$ ? $arPoints$$11$$ = ["M", 0, $height$$108$$, "L", 0, 0, "L", $width$$127$$ - $r$$60$$, 0, "A", $r$$60$$, $r$$60$$, 0, 0, 1, $width$$127$$, $r$$60$$, "L", $width$$127$$, $height$$108$$ - $r$$60$$, "A", $r$$60$$, $r$$60$$, 0, 0, 1, $width$$127$$ - $r$$60$$, $height$$108$$, "L", $openSideSize$$4$$, $height$$108$$] : $openSide$$4$$ == D.$DvtControlPanelLAFUtils$$.$OPEN_BOTTOM$ && $bidi$$6$$ && ($arPoints$$11$$ = 
  ["M", $width$$127$$, $height$$108$$, "L", $width$$127$$, 0, "L", $r$$60$$, 0, "A", $r$$60$$, $r$$60$$, 0, 0, 0, 0, $r$$60$$, "L", 0, $height$$108$$ - $r$$60$$, "A", $r$$60$$, $r$$60$$, 0, 0, 0, $r$$60$$, $height$$108$$, "L", $width$$127$$ - $openSideSize$$4$$, $height$$108$$]);
  return $arPoints$$11$$
};
D.$DvtPanZoomComponent$$ = function $$DvtPanZoomComponent$$$($context$$27$$, $callback$$30$$, $callbackObj$$5$$) {
  this.Init($context$$27$$, $callback$$30$$, $callbackObj$$5$$)
};
(0,D.$goog$exportSymbol$$)("DvtPanZoomComponent", D.$DvtPanZoomComponent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomComponent$$, D.$DvtBaseComponent$$, "DvtPanZoomComponent");
D.$DvtPanZoomComponent$$.prototype.Init = function $$DvtPanZoomComponent$$$$Init$($context$$28$$, $callback$$31$$, $callbackObj$$6$$) {
  D.$DvtPanZoomComponent$$.$superclass$.Init.call(this, $context$$28$$, $callback$$31$$, $callbackObj$$6$$);
  this.$_controlPanelBehavior$ = "initCollapsed";
  this.$_displayedControls$ = 16777215;
  this.$_bSupportsVectorEffects$ = !(0,D.$DvtAgent$isPlatformIE$$)() && !((0,D.$DvtAgent$isPlatformGecko$$)() && 17 >= (0,D.$DvtAgent$getVersion$$)());
  this.$_subcomponentStyles$ = this.$_resourcesMap$ = D.$JSCompiler_alias_NULL$$;
  this.$_skinName$ = ""
};
D.$JSCompiler_StaticMethods_getPanZoomCanvas$$ = function $$JSCompiler_StaticMethods_getPanZoomCanvas$$$($JSCompiler_StaticMethods_getPanZoomCanvas$self$$) {
  return $JSCompiler_StaticMethods_getPanZoomCanvas$self$$.$_panZoomCanvas$
};
D.$JSCompiler_StaticMethods_getResourcesMap$$ = function $$JSCompiler_StaticMethods_getResourcesMap$$$($JSCompiler_StaticMethods_getResourcesMap$self$$) {
  $JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$ || ($JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$ = $JSCompiler_StaticMethods_getResourcesMap$self$$.$Options$ ? $JSCompiler_StaticMethods_getResourcesMap$self$$.$Options$.resources : {});
  return $JSCompiler_StaticMethods_getResourcesMap$self$$.$_resourcesMap$
};
D.$DvtPanZoomComponent$$.prototype.$getBundle$ = function $$DvtPanZoomComponent$$$$$getBundle$$() {
  this.$_bundle$ || (this.$_bundle$ = new D.$DvtSubcomponentBundle$$);
  return this.$_bundle$
};
D.$DvtPanZoomComponent$$.prototype.$getSubcomponentStyles$ = (0,D.$JSCompiler_get$$)("$_subcomponentStyles$");
D.$JSCompiler_StaticMethods_parseComponentJson$$ = function $$JSCompiler_StaticMethods_parseComponentJson$$$($JSCompiler_StaticMethods_parseComponentJson$self$$, $jsonObj$$) {
  var $cpStyleMap_endGradientColor_styleMap$$inline_770$$ = (new D.$DvtCSSStyle$$($jsonObj$$.inlineStyle)).$getStyle$("background-color");
  $cpStyleMap_endGradientColor_styleMap$$inline_770$$ && ($JSCompiler_StaticMethods_parseComponentJson$self$$.$_endGradientColor$ = $cpStyleMap_endGradientColor_styleMap$$inline_770$$);
  var $cpStyleMap_endGradientColor_styleMap$$inline_770$$ = {}, $skinName$$ = $jsonObj$$.skin;
  $skinName$$ && ($JSCompiler_StaticMethods_parseComponentJson$self$$.$_skinName$ = $skinName$$, $cpStyleMap_endGradientColor_styleMap$$inline_770$$.skin = $skinName$$);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_770$$, "background-color", $jsonObj$$.cpBackgroundColor);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_770$$, "border-color", $jsonObj$$.cpBorderColor);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_770$$, "border-radius", $jsonObj$$.cpBorderRadius);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_770$$, "box-shadow", $jsonObj$$.cpBoxShadow);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_770$$, "tab-color-inactive", $jsonObj$$.tabBgColorInactive);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_770$$, "tab-border-color-inactive", $jsonObj$$.tabBorderColorInactive);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_770$$, "scrollbarBackground", $jsonObj$$.scrollbarBg);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_770$$, "scrollbarBorderColor", $jsonObj$$.scrollbarBorderColor);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_770$$, "scrollbarHandleColor", $jsonObj$$.scrollbarHandleColor);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_770$$, "scrollbarHandleActiveColor", $jsonObj$$.scrollbarHandleActiveColor);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap_endGradientColor_styleMap$$inline_770$$, "scrollbarHandleHoverColor", $jsonObj$$.scrollbarHandleHoverColor);
  $cpStyleMap_endGradientColor_styleMap$$inline_770$$ = D.$DvtControlPanelDefaults$$.$calcOptions$($cpStyleMap_endGradientColor_styleMap$$inline_770$$);
  $JSCompiler_StaticMethods_parseComponentJson$self$$.$_subcomponentStyles$ = $cpStyleMap_endGradientColor_styleMap$$inline_770$$
};
D.$JSCompiler_StaticMethods_parseComponentAttrs$$ = function $$JSCompiler_StaticMethods_parseComponentAttrs$$$($JSCompiler_StaticMethods_parseComponentAttrs$self$$, $xmlNode$$3$$) {
  var $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_779$$ = (new D.$DvtCSSStyle$$($xmlNode$$3$$.$getAttr$("inlineStyle"))).$getStyle$("background-color");
  $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_779$$ && ($JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_endGradientColor$ = $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_779$$);
  var $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_779$$ = {}, $skinName$$1$$ = $xmlNode$$3$$.$getAttr$("skin");
  $skinName$$1$$ && ($JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_skinName$ = $skinName$$1$$, $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_779$$.skin = $skinName$$1$$);
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_779$$, "background-color", $xmlNode$$3$$.$getAttr$("cpBackgroundColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_779$$, "border-color", $xmlNode$$3$$.$getAttr$("cpBorderColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_779$$, "border-radius", $xmlNode$$3$$.$getAttr$("cpBorderRadius"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_779$$, "box-shadow", $xmlNode$$3$$.$getAttr$("cpBoxShadow"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_779$$, "tab-color-inactive", $xmlNode$$3$$.$getAttr$("tabBgColorInactive"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_779$$, "tab-border-color-inactive", $xmlNode$$3$$.$getAttr$("tabBorderColorInactive"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_779$$, "scrollbarBackground", $xmlNode$$3$$.$getAttr$("scrollbarBg"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_779$$, "scrollbarBorderColor", $xmlNode$$3$$.$getAttr$("scrollbarBorderColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_779$$, "scrollbarHandleColor", $xmlNode$$3$$.$getAttr$("scrollbarHandleColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_779$$, "scrollbarHandleActiveColor", $xmlNode$$3$$.$getAttr$("scrollbarHandleActiveColor"));
  (0,D.$DvtStyleUtils$setStyle$$)($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_779$$, "scrollbarHandleHoverColor", $xmlNode$$3$$.$getAttr$("scrollbarHandleHoverColor"));
  $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_779$$ = D.$DvtControlPanelDefaults$$.$calcOptions$($cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_779$$);
  $JSCompiler_StaticMethods_parseComponentAttrs$self$$.$_subcomponentStyles$ = $cpStyleMap$$1_endGradientColor$$1_styleMap$$inline_779$$
};
D.$DvtPanZoomComponent$$.prototype.$render$ = function $$DvtPanZoomComponent$$$$$render$$($options$$56$$, $width$$29$$, $height$$26$$) {
  this.$_width$ = $width$$29$$;
  this.$_height$ = $height$$26$$;
  this.$_isResize$ = !$options$$56$$;
  this.$PreRender$();
  if(!this.$_isResize$) {
    if("object" == typeof $options$$56$$) {
      this.$SetOptions$($options$$56$$)
    }else {
      if(!($options$$56$$ == D.$JSCompiler_alias_NULL$$ || 0 == $options$$56$$.length)) {
        var $parser$$inline_783_rootXmlNode$$inline_784$$ = new D.$DvtXmlParser$$;
        if($parser$$inline_783_rootXmlNode$$inline_784$$ && ($parser$$inline_783_rootXmlNode$$inline_784$$ = $parser$$inline_783_rootXmlNode$$inline_784$$.parse($options$$56$$))) {
          "r" === $parser$$inline_783_rootXmlNode$$inline_784$$.getName() && ($parser$$inline_783_rootXmlNode$$inline_784$$ = $parser$$inline_783_rootXmlNode$$inline_784$$.getFirstChild()), $parser$$inline_783_rootXmlNode$$inline_784$$ && this.$GetXmlDomParser$().$loadXmlInitial$($parser$$inline_783_rootXmlNode$$inline_784$$)
        }
      }
    }
  }
  this.$Render$($options$$56$$, $width$$29$$, $height$$26$$)
};
D.$DvtPanZoomComponent$$.prototype.render = D.$DvtPanZoomComponent$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomComponent$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetControlPanel$ = function $$JSCompiler_prototypeAlias$$$$GetControlPanel$$() {
  var $cpBehavior$$ = this.$GetControlPanelBehavior$();
  return"hidden" != $cpBehavior$$ ? new D.$DvtControlPanel$$(this.$_context$, this, "initCollapsed" == $cpBehavior$$ ? 1 : 2) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$GetControlPanelBehavior$ = (0,D.$JSCompiler_get$$)("$_controlPanelBehavior$");
D.$JSCompiler_prototypeAlias$$.$GetXmlDomParser$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$PreRender$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$() {
  if(this.$_endGradientColor$ || !this.$_skinName$) {
    var $backgroundPane_clipPath$$1_controlPanel$$ = new D.$DvtRect$$(this.$_context$, 0, 0, 0, 0);
    this.$addChild$($backgroundPane_clipPath$$1_controlPanel$$);
    $backgroundPane_clipPath$$1_controlPanel$$.$setWidth$(this.$_width$);
    $backgroundPane_clipPath$$1_controlPanel$$.$setHeight$(this.$_height$);
    $backgroundPane_clipPath$$1_controlPanel$$.$setFill$((0,D.$JSCompiler_StaticMethods__getBackgroundGradient$$)(this, this.$_endGradientColor$))
  }
  if(this.$_isResize$) {
    this.$_panZoomCanvas$.$setSize$(this.$_width$, this.$_height$)
  }else {
    this.$_panZoomCanvas$ && (this.removeChild(this.$_panZoomCanvas$), this.$_panZoomCanvas$ = D.$JSCompiler_alias_NULL$$);
    this.$_panZoomCanvas$ = new D.$DvtPanZoomCanvas$$(this.$_context$, this.$_width$, this.$_height$, this);
    this.$_panZoomCanvas$.$addEvtListener$("dvtPan", this.$HandlePanEvent$, D.$JSCompiler_alias_FALSE$$, this);
    this.$_panZoomCanvas$.$addEvtListener$("dvtZoom", this.$HandleZoomEvent$, D.$JSCompiler_alias_FALSE$$, this);
    this.$addChild$(this.$_panZoomCanvas$);
    if($backgroundPane_clipPath$$1_controlPanel$$ = this.$GetControlPanel$()) {
      $backgroundPane_clipPath$$1_controlPanel$$.$addEvtListener$("dvtPZCPExpand", this.$_handleControlPanelEvent$, D.$JSCompiler_alias_FALSE$$, this), this.$_panZoomCanvas$.$_controlPanel$ = $backgroundPane_clipPath$$1_controlPanel$$
    }
    this.$_panZoomCanvas$.$renderComponent$()
  }
  $backgroundPane_clipPath$$1_controlPanel$$ = new D.$DvtClipPath$$("comp");
  (0,D.$JSCompiler_StaticMethods_addRect$$)($backgroundPane_clipPath$$1_controlPanel$$, this.$getTranslateX$(), this.$getTranslateY$(), this.$_width$, this.$_height$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this, $backgroundPane_clipPath$$1_controlPanel$$)
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$57$$) {
  this.$Options$ = this.$Defaults$ ? this.$Defaults$.$calcOptions$($options$$57$$) : $options$$57$$
};
D.$JSCompiler_StaticMethods__getBackgroundGradient$$ = function $$JSCompiler_StaticMethods__getBackgroundGradient$$$($JSCompiler_StaticMethods__getBackgroundGradient$self$$, $color$$10$$) {
  var $arColors_newColor_rrRatio$$, $arAlphas_bgAlpha$$1$$ = 1;
  if($color$$10$$ && "#7396C8" != $color$$10$$) {
    $arAlphas_bgAlpha$$1$$ = D.$DvtColorUtils$$.$getAlpha$($color$$10$$);
    $arColors_newColor_rrRatio$$ = (D.$DvtColorUtils$$.$getRed$("#AECDEA") - D.$DvtColorUtils$$.$getRed$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getRed$("#7396C8"));
    var $arStops_bgRgb_ggRatio$$ = (D.$DvtColorUtils$$.$getGreen$("#AECDEA") - D.$DvtColorUtils$$.$getGreen$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getGreen$("#7396C8")), $bbRatio_gw$$ = (D.$DvtColorUtils$$.$getBlue$("#AECDEA") - D.$DvtColorUtils$$.$getBlue$("#7396C8")) / (255 - D.$DvtColorUtils$$.$getBlue$("#7396C8")), $gh_rr$$ = D.$DvtColorUtils$$.$getRed$($color$$10$$), $gg_gx_ww$$3$$ = D.$DvtColorUtils$$.$getGreen$($color$$10$$), $bb_cx$$5$$ = D.$DvtColorUtils$$.$getBlue$($color$$10$$);
    $arColors_newColor_rrRatio$$ = D.$DvtColorUtils$$.$makeRGB$(window.Math.round($gh_rr$$ + $arColors_newColor_rrRatio$$ * (255 - $gh_rr$$)), window.Math.round($gg_gx_ww$$3$$ + $arStops_bgRgb_ggRatio$$ * (255 - $gg_gx_ww$$3$$)), window.Math.round($bb_cx$$5$$ + $bbRatio_gw$$ * (255 - $bb_cx$$5$$)));
    $arStops_bgRgb_ggRatio$$ = D.$DvtColorUtils$$.$getRGB$($color$$10$$);
    $arColors_newColor_rrRatio$$ = ["#FFFFFF", "#FFFFFF", $arColors_newColor_rrRatio$$, $arStops_bgRgb_ggRatio$$]
  }else {
    $arColors_newColor_rrRatio$$ = ["#FFFFFF", "#FFFFFF", "#AECDEA", "#7396C8"]
  }
  var $arAlphas_bgAlpha$$1$$ = [$arAlphas_bgAlpha$$1$$, $arAlphas_bgAlpha$$1$$, $arAlphas_bgAlpha$$1$$, $arAlphas_bgAlpha$$1$$], $arStops_bgRgb_ggRatio$$ = [0, 45 / 255, 190 / 255, 1], $gg_gx_ww$$3$$ = $JSCompiler_StaticMethods__getBackgroundGradient$self$$.$_width$, $bbRatio_gw$$ = 1.7 * 1.7 * $gg_gx_ww$$3$$, $gh_rr$$ = 1.7 * $JSCompiler_StaticMethods__getBackgroundGradient$self$$.$_height$, $gg_gx_ww$$3$$ = 0 + ($gg_gx_ww$$3$$ - $bbRatio_gw$$) / 2, $bb_cx$$5$$ = $gg_gx_ww$$3$$ + $bbRatio_gw$$ / 
  2, $cy$$5$$ = -35 + $gh_rr$$ / 2, $r$$14$$ = 1.5 * window.Math.min($bbRatio_gw$$ / 2, $gh_rr$$ / 2);
  return new D.$DvtRadialGradientFill$$($arColors_newColor_rrRatio$$, $arAlphas_bgAlpha$$1$$, $arStops_bgRgb_ggRatio$$, $bb_cx$$5$$, $cy$$5$$, $r$$14$$, [$gg_gx_ww$$3$$, -35, $bbRatio_gw$$, $gh_rr$$])
};
D.$DvtPanZoomComponent$$.prototype.$_handleControlPanelEvent$ = function $$DvtPanZoomComponent$$$$$_handleControlPanelEvent$$($event$$43$$) {
  var $spEvent$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($spEvent$$, "controlPanelBehavior", "show" == $event$$43$$.$getSubType$() ? "initExpanded" : "initCollapsed");
  this.$__dispatchEvent$($spEvent$$)
};
D.$DvtPanZoomCanvas$$ = function $$DvtPanZoomCanvas$$$($context$$29$$, $ww$$4$$, $hh$$4$$, $view$$10$$) {
  this.Init($context$$29$$, $ww$$4$$, $hh$$4$$, $view$$10$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomCanvas$$, D.$DvtContainer$$, "DvtPanZoomCanvas");
D.$DvtPanZoomCanvas$$.prototype.Init = function $$DvtPanZoomCanvas$$$$Init$($context$$30$$, $ww$$5$$, $hh$$5$$, $view$$11$$) {
  D.$DvtPanZoomCanvas$$.$superclass$.Init.call(this, $context$$30$$);
  this.$_view$ = $view$$11$$;
  this.$_ww$ = $ww$$5$$;
  this.$_hh$ = $hh$$5$$;
  this.$_my$ = this.$_mx$ = this.$_py$ = this.$_px$ = 0;
  this.$_maxPanY$ = this.$_minPanY$ = this.$_maxPanX$ = this.$_minPanX$ = D.$JSCompiler_alias_NULL$$;
  this.$_minZoom$ = 0.1;
  this.$_maxZoom$ = 1;
  this.$_panIncrement$ = 15;
  this.$_zoomIncrement$ = 0.05;
  this.$_bTiltPanningEnabled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_zoomToFitPadding$ = 20;
  this.$_controlPanel$ = D.$JSCompiler_alias_NULL$$;
  this.$_bZoomToFitEnabled$ = this.$_bZoomingEnabled$ = this.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$;
  this.$_backgroundPane$ = new D.$DvtRect$$(this.$_context$, 0, 0, this.$_ww$, this.$_hh$);
  this.$addChild$(this.$_backgroundPane$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_backgroundPane$);
  this.$_contentPane$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChild$(this.$_contentPane$);
  this.$_contentPane$.$setMatrix$(new D.$DvtMatrix$$);
  this.$_animationDuration$ = 0.5;
  this.$_eventManager$ = new D.$DvtPanZoomCanvasEventManager$$($context$$30$$, this.$FireListener$, this);
  this.$_eventManager$.$addListeners$(this);
  this.$_clipIdSuffix$ = 1;
  (0,D.$JSCompiler_StaticMethods_SetClipRect$$)(this, $ww$$5$$, $hh$$5$$);
  this.$_bElasticConstraints$ = D.$JSCompiler_alias_FALSE$$;
  this.$_elasticConstraintsAnim$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtPanZoomCanvas$$.prototype.$setSize$ = function $$DvtPanZoomCanvas$$$$$setSize$$($ww$$6$$, $hh$$6$$, $bAdjustSizeOnly$$) {
  this.$_ww$ = $ww$$6$$;
  this.$_hh$ = $hh$$6$$;
  $bAdjustSizeOnly$$ || (this.$_backgroundPane$.$setWidth$($ww$$6$$), this.$_backgroundPane$.$setHeight$($hh$$6$$), this.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_PositionControlPanel$$)(this), (0,D.$JSCompiler_StaticMethods_SetClipRect$$)(this, $ww$$6$$, $hh$$6$$))
};
D.$DvtPanZoomCanvas$$.prototype.$getSize$ = function $$DvtPanZoomCanvas$$$$$getSize$$() {
  return new D.$DvtDimension$$(this.$_ww$, this.$_hh$)
};
D.$JSCompiler_StaticMethods_SetClipRect$$ = function $$JSCompiler_StaticMethods_SetClipRect$$$($JSCompiler_StaticMethods_SetClipRect$self$$, $ww$$7$$, $hh$$7$$) {
  var $clipPath$$2$$ = new D.$DvtClipPath$$("pzc");
  (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$2$$, $JSCompiler_StaticMethods_SetClipRect$self$$.$getTranslateX$(), $JSCompiler_StaticMethods_SetClipRect$self$$.$getTranslateY$(), $ww$$7$$, $hh$$7$$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)($JSCompiler_StaticMethods_SetClipRect$self$$, $clipPath$$2$$)
};
D.$JSCompiler_StaticMethods_getContentPane$$ = function $$JSCompiler_StaticMethods_getContentPane$$$($JSCompiler_StaticMethods_getContentPane$self$$) {
  return $JSCompiler_StaticMethods_getContentPane$self$$.$_contentPane$
};
D.$JSCompiler_StaticMethods_getContentPaneMatrix$$ = function $$JSCompiler_StaticMethods_getContentPaneMatrix$$$($JSCompiler_StaticMethods_getContentPaneMatrix$self$$, $animator$$6$$) {
  if($animator$$6$$) {
    var $mat$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$6$$, $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$, $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$.$getMatrix$);
    if($mat$$) {
      return $mat$$
    }
  }
  return $JSCompiler_StaticMethods_getContentPaneMatrix$self$$.$_contentPane$.$getMatrix$()
};
D.$DvtPanZoomCanvas$$.prototype.$getZoom$ = function $$DvtPanZoomCanvas$$$$$getZoom$$($animator$$7$$) {
  return(0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$7$$).$_a$
};
D.$DvtPanZoomCanvas$$.prototype.$panBy$ = function $$DvtPanZoomCanvas$$$$$panBy$$($dx$$4_mat$$1$$, $deltaX_dy$$4_fireStartEventFunc$$, $animator$$10$$) {
  if(this.$_bPanningEnabled$) {
    var $oldX$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$10$$).$_tx$, $oldY$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this, $animator$$10$$).$_ty$, $newX$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $oldX$$ + $dx$$4_mat$$1$$), $newY$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $oldY$$ + $deltaX_dy$$4_fireStartEventFunc$$);
    $deltaX_dy$$4_fireStartEventFunc$$ = $newX$$ - $oldX$$;
    var $deltaY_fireEndEventFunc$$ = $newY$$ - $oldY$$;
    $dx$$4_mat$$1$$ = D.$JSCompiler_alias_NULL$$;
    $animator$$10$$ && ($dx$$4_mat$$1$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$10$$, this.$_contentPane$, this.$_contentPane$.$getMatrix$)) && ($dx$$4_mat$$1$$ = $dx$$4_mat$$1$$.clone());
    $dx$$4_mat$$1$$ || ($dx$$4_mat$$1$$ = this.$_contentPane$.$getMatrix$().clone());
    $dx$$4_mat$$1$$.translate($deltaX_dy$$4_fireStartEventFunc$$, $deltaY_fireEndEventFunc$$);
    var $thisRef$$ = this;
    $deltaX_dy$$4_fireStartEventFunc$$ = function $$deltaX_dy$$4_fireStartEventFunc$$$() {
      var $dx$$4_mat$$1$$ = new D.$DvtPanEvent$$("panning", $newX$$, $newY$$, $oldX$$, $oldY$$, $animator$$10$$);
      $thisRef$$.$FireListener$($dx$$4_mat$$1$$)
    };
    $deltaY_fireEndEventFunc$$ = function $$deltaY_fireEndEventFunc$$$() {
      var $dx$$4_mat$$1$$ = new D.$DvtPanEvent$$("panned", $newX$$, $newY$$, $oldX$$, $oldY$$, $animator$$10$$);
      $thisRef$$.$FireListener$($dx$$4_mat$$1$$)
    };
    $animator$$10$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$10$$, "typeMatrix", this.$_contentPane$, this.$_contentPane$.$getMatrix$, this.$_contentPane$.$setMatrix$, $dx$$4_mat$$1$$), (0,D.$DvtPlayable$prependOnInit$$)($animator$$10$$, $deltaX_dy$$4_fireStartEventFunc$$), (0,D.$DvtPlayable$appendOnEnd$$)($animator$$10$$, $deltaY_fireEndEventFunc$$)) : ($deltaX_dy$$4_fireStartEventFunc$$(), this.$_contentPane$.$setMatrix$($dx$$4_mat$$1$$), $deltaY_fireEndEventFunc$$())
  }
};
D.$JSCompiler_StaticMethods_panTo$$ = function $$JSCompiler_StaticMethods_panTo$$$($JSCompiler_StaticMethods_panTo$self$$, $dx$$5_xx$$3$$, $dy$$5_yy$$3$$, $animator$$11$$) {
  $JSCompiler_StaticMethods_panTo$self$$.$_bPanningEnabled$ && ($dx$$5_xx$$3$$ -= (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_panTo$self$$, $animator$$11$$).$_tx$, $dy$$5_yy$$3$$ -= (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_panTo$self$$, $animator$$11$$).$_ty$, $JSCompiler_StaticMethods_panTo$self$$.$panBy$($dx$$5_xx$$3$$, $dy$$5_yy$$3$$, $animator$$11$$))
};
D.$DvtPanZoomCanvas$$.prototype.$zoomBy$ = function $$DvtPanZoomCanvas$$$$$zoomBy$$($currZoom$$inline_815_dz_mat$$2$$, $xx$$4$$, $yy$$4$$, $animator$$12$$) {
  if(this.$_bZoomingEnabled$) {
    !$xx$$4$$ && 0 !== $xx$$4$$ && ($xx$$4$$ = this.$_ww$ / 2);
    !$yy$$4$$ && 0 !== $yy$$4$$ && ($yy$$4$$ = this.$_hh$ / 2);
    var $oldZoom$$ = this.$getZoom$($animator$$12$$), $newZoom$$ = (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)(this, $oldZoom$$ * $currZoom$$inline_815_dz_mat$$2$$);
    this.$_controlPanel$ && ($currZoom$$inline_815_dz_mat$$2$$ = this.$getZoom$(), $newZoom$$ == this.$_minZoom$ && $newZoom$$ == this.$_maxZoom$ ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$)) : $currZoom$$inline_815_dz_mat$$2$$ <= $newZoom$$ && $newZoom$$ == this.$_maxZoom$ ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, 
    D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$)) : $currZoom$$inline_815_dz_mat$$2$$ >= $newZoom$$ && $newZoom$$ == this.$_minZoom$ ? ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$)) : ((0,D.$JSCompiler_StaticMethods_enableZoomInControl$$)(this.$_controlPanel$, 
    D.$JSCompiler_alias_TRUE$$), (0,D.$JSCompiler_StaticMethods_enableZoomOutControl$$)(this.$_controlPanel$, D.$JSCompiler_alias_TRUE$$)));
    if(window.Math.round(1E5 * $oldZoom$$) != window.Math.round(1E5 * $newZoom$$)) {
      var $deltaZoom_fireStartEventFunc$$1$$ = $newZoom$$ / $oldZoom$$;
      $currZoom$$inline_815_dz_mat$$2$$ = D.$JSCompiler_alias_NULL$$;
      $animator$$12$$ && ($currZoom$$inline_815_dz_mat$$2$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$12$$, this.$_contentPane$, this.$_contentPane$.$getMatrix$)) && ($currZoom$$inline_815_dz_mat$$2$$ = $currZoom$$inline_815_dz_mat$$2$$.clone());
      $currZoom$$inline_815_dz_mat$$2$$ || ($currZoom$$inline_815_dz_mat$$2$$ = this.$_contentPane$.$getMatrix$().clone());
      $currZoom$$inline_815_dz_mat$$2$$.scale($deltaZoom_fireStartEventFunc$$1$$, $deltaZoom_fireStartEventFunc$$1$$, $xx$$4$$, $yy$$4$$);
      var $xDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $currZoom$$inline_815_dz_mat$$2$$.$_tx$) - $currZoom$$inline_815_dz_mat$$2$$.$_tx$, $yDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $currZoom$$inline_815_dz_mat$$2$$.$_ty$) - $currZoom$$inline_815_dz_mat$$2$$.$_ty$;
      (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "adjustPanConstraints", $newZoom$$, $oldZoom$$, $animator$$12$$, D.$JSCompiler_alias_NULL$$, $xx$$4$$, $yy$$4$$, $xDiff$$, $yDiff$$);
      $xDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)(this, $currZoom$$inline_815_dz_mat$$2$$.$_tx$) - $currZoom$$inline_815_dz_mat$$2$$.$_tx$;
      $yDiff$$ = (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)(this, $currZoom$$inline_815_dz_mat$$2$$.$_ty$) - $currZoom$$inline_815_dz_mat$$2$$.$_ty$;
      $currZoom$$inline_815_dz_mat$$2$$.translate($xDiff$$, $yDiff$$);
      var $thisRef$$1$$ = this, $deltaZoom_fireStartEventFunc$$1$$ = function $$deltaZoom_fireStartEventFunc$$1$$$() {
        (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$1$$, "zooming", $newZoom$$, $oldZoom$$, $animator$$12$$, D.$JSCompiler_alias_NULL$$, $xx$$4$$, $yy$$4$$, $xDiff$$, $yDiff$$)
      }, $fireEndEventFunc$$1$$ = function $$fireEndEventFunc$$1$$$() {
        (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$1$$, "zoomed", $thisRef$$1$$.$getZoom$(), $oldZoom$$, $animator$$12$$, D.$JSCompiler_alias_NULL$$, $xx$$4$$, $yy$$4$$, $xDiff$$, $yDiff$$)
      };
      $animator$$12$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$12$$, "typeMatrix", this.$_contentPane$, this.$_contentPane$.$getMatrix$, this.$_contentPane$.$setMatrix$, $currZoom$$inline_815_dz_mat$$2$$), (0,D.$DvtPlayable$prependOnInit$$)($animator$$12$$, $deltaZoom_fireStartEventFunc$$1$$), (0,D.$DvtPlayable$appendOnEnd$$)($animator$$12$$, $fireEndEventFunc$$1$$)) : ($deltaZoom_fireStartEventFunc$$1$$(), this.$_contentPane$.$setMatrix$($currZoom$$inline_815_dz_mat$$2$$), $fireEndEventFunc$$1$$())
    }
  }
};
D.$JSCompiler_StaticMethods_zoomTo$$ = function $$JSCompiler_StaticMethods_zoomTo$$$($JSCompiler_StaticMethods_zoomTo$self$$, $dz$$1_zz$$, $xx$$5$$, $yy$$5$$, $animator$$13$$) {
  $JSCompiler_StaticMethods_zoomTo$self$$.$_bZoomingEnabled$ && ($dz$$1_zz$$ /= $JSCompiler_StaticMethods_zoomTo$self$$.$getZoom$($animator$$13$$), $JSCompiler_StaticMethods_zoomTo$self$$.$zoomBy$($dz$$1_zz$$, $xx$$5$$, $yy$$5$$, $animator$$13$$))
};
D.$DvtPanZoomCanvas$$.prototype.$center$ = function $$DvtPanZoomCanvas$$$$$center$$($animator$$14$$, $fitBounds$$) {
  var $panningEnabled$$ = this.$_bPanningEnabled$;
  this.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$;
  var $bounds$$3_cyBounds$$ = $fitBounds$$;
  $bounds$$3_cyBounds$$ || ($bounds$$3_cyBounds$$ = this.$_contentPane$.$getDimensions$());
  var $cxBounds$$ = ($bounds$$3_cyBounds$$.x + $bounds$$3_cyBounds$$.$w$ / 2) * this.$getZoom$(), $bounds$$3_cyBounds$$ = ($bounds$$3_cyBounds$$.y + $bounds$$3_cyBounds$$.$h$ / 2) * this.$getZoom$();
  (0,D.$JSCompiler_StaticMethods_panTo$$)(this, this.$_ww$ / 2 - $cxBounds$$, this.$_hh$ / 2 - $bounds$$3_cyBounds$$, $animator$$14$$);
  this.$_bPanningEnabled$ = $panningEnabled$$
};
D.$DvtPanZoomCanvas$$.prototype.$zoomToFit$ = function $$DvtPanZoomCanvas$$$$$zoomToFit$$($animator$$15$$, $fitBounds$$1$$) {
  if(this.$_bZoomToFitEnabled$) {
    var $panningEnabled$$1$$ = this.$_bPanningEnabled$, $zoomingEnabled$$ = this.$_bZoomingEnabled$;
    this.$_bZoomingEnabled$ = this.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$;
    try {
      var $bounds$$4$$ = $fitBounds$$1$$ ? $fitBounds$$1$$ : this.$_contentPane$.$getDimensions$();
      if($bounds$$4$$ = (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "zoomToFitCalcBounds", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$15$$, $bounds$$4$$).$_zoomToFitBounds$) {
        var $dz$$2$$ = window.Math.min((this.$_ww$ - 2 * this.$_zoomToFitPadding$) / $bounds$$4$$.$w$, (this.$_hh$ - 2 * this.$_zoomToFitPadding$) / $bounds$$4$$.$h$), $dz$$2$$ = (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)(this, $dz$$2$$), $dx$$7$$ = this.$_ww$ / 2 - ($bounds$$4$$.x + $bounds$$4$$.$w$ / 2) * $dz$$2$$, $dy$$7$$ = this.$_hh$ / 2 - ($bounds$$4$$.y + $bounds$$4$$.$h$ / 2) * $dz$$2$$, $thisRef$$2$$ = this, $fireStartEventFunc$$2$$ = function $$fireStartEventFunc$$2$$$() {
          (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$2$$, "zoomToFitBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$15$$, $bounds$$4$$)
        }, $fireEndEventFunc$$2$$ = function $$fireEndEventFunc$$2$$$() {
          (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($thisRef$$2$$, "zoomToFitEnd", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $animator$$15$$, $bounds$$4$$)
        };
        $animator$$15$$ ? (0,D.$DvtPlayable$prependOnInit$$)($animator$$15$$, $fireStartEventFunc$$2$$) : $fireStartEventFunc$$2$$();
        (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this, $dz$$2$$, 0, 0, $animator$$15$$);
        (0,D.$JSCompiler_StaticMethods_panTo$$)(this, $dx$$7$$, $dy$$7$$, $animator$$15$$);
        $animator$$15$$ ? (0,D.$DvtPlayable$appendOnEnd$$)($animator$$15$$, $fireEndEventFunc$$2$$) : $fireEndEventFunc$$2$$()
      }
    }finally {
      this.$_bPanningEnabled$ = $panningEnabled$$1$$, this.$_bZoomingEnabled$ = $zoomingEnabled$$
    }
  }
};
D.$DvtPanZoomCanvas$$.prototype.$getViewport$ = function $$DvtPanZoomCanvas$$$$$getViewport$$() {
  var $topLeftGlobal_topLeftLocal$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this, new D.$DvtPoint$$(0, 0)), $bottomRightGlobal_bottomRightLocal$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this, new D.$DvtPoint$$(this.$_ww$, this.$_hh$)), $topLeftGlobal_topLeftLocal$$ = this.$_contentPane$.$stageToLocal$($topLeftGlobal_topLeftLocal$$), $bottomRightGlobal_bottomRightLocal$$ = this.$_contentPane$.$stageToLocal$($bottomRightGlobal_bottomRightLocal$$);
  return new D.$DvtRectangle$$($topLeftGlobal_topLeftLocal$$.x, $topLeftGlobal_topLeftLocal$$.y, $bottomRightGlobal_bottomRightLocal$$.x - $topLeftGlobal_topLeftLocal$$.x, $bottomRightGlobal_bottomRightLocal$$.y - $topLeftGlobal_topLeftLocal$$.y)
};
D.$JSCompiler_StaticMethods_SetElasticConstraints$$ = function $$JSCompiler_StaticMethods_SetElasticConstraints$$$($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $bElastic$$) {
  if($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticConstraints$ = $bElastic$$) {
    $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$ && ($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.$isRunning$() && $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.stop(), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$ = D.$JSCompiler_alias_NULL$$)
  }else {
    var $currX_panEvent$$inline_842$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, D.$JSCompiler_alias_VOID$$).$_tx$, $currY$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, D.$JSCompiler_alias_VOID$$).$_ty$, $currZoom$$ = $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$getZoom$();
    $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ = $currX_panEvent$$inline_842$$ != (0,D.$JSCompiler_StaticMethods_ConstrainPanX$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currX_panEvent$$inline_842$$) || $currY$$ != (0,D.$JSCompiler_StaticMethods_ConstrainPanY$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currY$$);
    $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ = $currZoom$$ != (0,D.$JSCompiler_StaticMethods_ConstrainZoom$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, $currZoom$$);
    if($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ || $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$) {
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_context$, 0.4), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.$setEasing$(D.$DvtEasing$cubicOut$$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ && $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$zoomBy$(1, 0.5 * $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_ww$, 
      0.5 * $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_hh$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ && $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$panBy$(0, 0, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), (0,D.$DvtPlayable$appendOnEnd$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnimOnEnd$, 
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticPan$ && ($currX_panEvent$$inline_842$$ = new D.$DvtPanEvent$$("elasticAnimBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$FireListener$($currX_panEvent$$inline_842$$)), 
      $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_bElasticZoom$ && (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)($JSCompiler_StaticMethods_SetElasticConstraints$self$$, "elasticAnimBegin", D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$), $JSCompiler_StaticMethods_SetElasticConstraints$self$$.$_elasticConstraintsAnim$.play()
    }
  }
};
D.$DvtPanZoomCanvas$$.prototype.$_elasticConstraintsAnimOnEnd$ = function $$DvtPanZoomCanvas$$$$$_elasticConstraintsAnimOnEnd$$() {
  this.$_elasticConstraintsAnim$ = D.$JSCompiler_alias_NULL$$;
  if(this.$_bElasticPan$) {
    var $panEvent$$inline_851$$ = new D.$DvtPanEvent$$("elasticAnimEnd", D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$);
    this.$FireListener$($panEvent$$inline_851$$)
  }
  this.$_bElasticZoom$ && (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "elasticAnimEnd")
};
D.$JSCompiler_StaticMethods_ConstrainPanX$$ = function $$JSCompiler_StaticMethods_ConstrainPanX$$$($JSCompiler_StaticMethods_ConstrainPanX$self$$, $xx$$6$$) {
  var $dx$$8_offsetX$$ = $xx$$6$$;
  $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ != D.$JSCompiler_alias_NULL$$ && $dx$$8_offsetX$$ < $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ && ($JSCompiler_StaticMethods_ConstrainPanX$self$$.$_bElasticConstraints$ ? ($dx$$8_offsetX$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ - $dx$$8_offsetX$$, $dx$$8_offsetX$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$ - window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_ww$) * 
  $dx$$8_offsetX$$)) : $dx$$8_offsetX$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_minPanX$);
  $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ != D.$JSCompiler_alias_NULL$$ && $dx$$8_offsetX$$ > $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ && ($JSCompiler_StaticMethods_ConstrainPanX$self$$.$_bElasticConstraints$ ? ($dx$$8_offsetX$$ -= $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$, $dx$$8_offsetX$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$ + window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_ww$) * $dx$$8_offsetX$$)) : 
  $dx$$8_offsetX$$ = $JSCompiler_StaticMethods_ConstrainPanX$self$$.$_maxPanX$);
  return $dx$$8_offsetX$$
};
D.$JSCompiler_StaticMethods_ConstrainPanY$$ = function $$JSCompiler_StaticMethods_ConstrainPanY$$$($JSCompiler_StaticMethods_ConstrainPanY$self$$, $yy$$6$$) {
  var $dy$$8_offsetY$$ = $yy$$6$$;
  $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ != D.$JSCompiler_alias_NULL$$ && $dy$$8_offsetY$$ < $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ && ($JSCompiler_StaticMethods_ConstrainPanY$self$$.$_bElasticConstraints$ ? ($dy$$8_offsetY$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ - $dy$$8_offsetY$$, $dy$$8_offsetY$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$ - window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_hh$) * 
  $dy$$8_offsetY$$)) : $dy$$8_offsetY$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_minPanY$);
  $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$ != D.$JSCompiler_alias_NULL$$ && $dy$$8_offsetY$$ > $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$ && ($JSCompiler_StaticMethods_ConstrainPanY$self$$.$_bElasticConstraints$ ? ($dy$$8_offsetY$$ -= $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$, $dy$$8_offsetY$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$ + window.Math.sqrt(4 * (0.01 * $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_hh$) * $dy$$8_offsetY$$)) : 
  $dy$$8_offsetY$$ = $JSCompiler_StaticMethods_ConstrainPanY$self$$.$_maxPanY$);
  return $dy$$8_offsetY$$
};
D.$JSCompiler_StaticMethods_ConstrainZoom$$ = function $$JSCompiler_StaticMethods_ConstrainZoom$$$($JSCompiler_StaticMethods_ConstrainZoom$self$$, $zz$$1$$) {
  var $dz$$4_newZ$$ = window.Math.max(0, $zz$$1$$);
  $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ && $dz$$4_newZ$$ < $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ && ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_bElasticConstraints$ ? ($dz$$4_newZ$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ - $dz$$4_newZ$$, $dz$$4_newZ$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$ - window.Math.sqrt(4 * (0.002 * ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ - $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$)) * 
  $dz$$4_newZ$$)) : $dz$$4_newZ$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$);
  $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ && $dz$$4_newZ$$ > $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ && ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_bElasticConstraints$ ? ($dz$$4_newZ$$ -= $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$, $dz$$4_newZ$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ + window.Math.sqrt(4 * (0.002 * ($JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$ - $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_minZoom$)) * 
  $dz$$4_newZ$$)) : $dz$$4_newZ$$ = $JSCompiler_StaticMethods_ConstrainZoom$self$$.$_maxZoom$);
  return $dz$$4_newZ$$
};
D.$DvtPanZoomCanvas$$.prototype.$renderComponent$ = function $$DvtPanZoomCanvas$$$$$renderComponent$$() {
  var $controlPanel$$1$$ = this.$_controlPanel$;
  $controlPanel$$1$$ && (this.$addChild$($controlPanel$$1$$), (0,D.$JSCompiler_StaticMethods_PositionControlPanel$$)(this), $controlPanel$$1$$.$renderComponent$())
};
D.$JSCompiler_StaticMethods_PositionControlPanel$$ = function $$JSCompiler_StaticMethods_PositionControlPanel$$$($JSCompiler_StaticMethods_PositionControlPanel$self$$) {
  var $openCloseButtonWidth_styleMap$$1$$ = $JSCompiler_StaticMethods_PositionControlPanel$self$$.$_view$.$getSubcomponentStyles$(), $posX_transX$$2$$ = (0,D.$DvtStyleUtils$getStyle$$)($openCloseButtonWidth_styleMap$$1$$, "paddingSide", 0), $posY$$ = (0,D.$DvtStyleUtils$getStyle$$)($openCloseButtonWidth_styleMap$$1$$, "paddingTop", 0), $openCloseButtonWidth_styleMap$$1$$ = (0,D.$DvtStyleUtils$getStyle$$)($openCloseButtonWidth_styleMap$$1$$, "openCloseButtonWidth", 0), $posX_transX$$2$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_PositionControlPanel$self$$.$_context$) ? 
  $JSCompiler_StaticMethods_PositionControlPanel$self$$.$_ww$ - $openCloseButtonWidth_styleMap$$1$$ - $posX_transX$$2$$ : $posX_transX$$2$$;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_StaticMethods_PositionControlPanel$self$$.$_controlPanel$, $posX_transX$$2$$, $posY$$)
};
D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$ = function $$JSCompiler_StaticMethods_GetRelativeMousePosition$$$($JSCompiler_StaticMethods_GetRelativeMousePosition$self$$, $event$$47$$) {
  return(0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_GetRelativeMousePosition$self$$.$_context$, $event$$47$$.pageX, $event$$47$$.pageY)
};
D.$JSCompiler_StaticMethods_FireZoomEvent$$ = function $$JSCompiler_StaticMethods_FireZoomEvent$$$($JSCompiler_StaticMethods_FireZoomEvent$self$$, $subType$$1_zoomEvent$$, $newZoom$$1$$, $oldZoom$$1$$, $animator$$17$$, $zoomToFitBounds$$, $xx$$7$$, $yy$$7$$, $tx$$, $ty$$) {
  $subType$$1_zoomEvent$$ = new D.$DvtZoomEvent$$($subType$$1_zoomEvent$$, $newZoom$$1$$, $oldZoom$$1$$, $animator$$17$$, $zoomToFitBounds$$, new D.$DvtPoint$$($xx$$7$$, $yy$$7$$), $tx$$, $ty$$);
  $JSCompiler_StaticMethods_FireZoomEvent$self$$.$FireListener$($subType$$1_zoomEvent$$);
  return $subType$$1_zoomEvent$$
};
D.$DvtPanZoomCanvas$$.prototype.$zoomAndCenter$ = function $$DvtPanZoomCanvas$$$$$zoomAndCenter$$() {
  (0,D.$JSCompiler_StaticMethods_FireZoomEvent$$)(this, "zoomAndCenter")
};
D.$JSCompiler_StaticMethods_getNextZoomLevel$$ = function $$JSCompiler_StaticMethods_getNextZoomLevel$$$($JSCompiler_StaticMethods_getNextZoomLevel$self$$, $currZoom$$1$$) {
  var $zoomLevel$$3$$;
  $zoomLevel$$3$$ = $currZoom$$1$$ + $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$_zoomIncrement$;
  $zoomLevel$$3$$ > $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$_maxZoom$ && ($zoomLevel$$3$$ = $JSCompiler_StaticMethods_getNextZoomLevel$self$$.$_maxZoom$);
  return $zoomLevel$$3$$
};
D.$JSCompiler_StaticMethods_getPrevZoomLevel$$ = function $$JSCompiler_StaticMethods_getPrevZoomLevel$$$($JSCompiler_StaticMethods_getPrevZoomLevel$self$$, $currZoom$$2$$) {
  var $zoomLevel$$4$$;
  $zoomLevel$$4$$ = $currZoom$$2$$ - $JSCompiler_StaticMethods_getPrevZoomLevel$self$$.$_zoomIncrement$;
  $zoomLevel$$4$$ < $JSCompiler_StaticMethods_getPrevZoomLevel$self$$.$_minZoom$ && ($zoomLevel$$4$$ = $JSCompiler_StaticMethods_getPrevZoomLevel$self$$.$_minZoom$);
  return $zoomLevel$$4$$
};
D.$DvtPanZoomCanvas$$.prototype.$setMinZoom$ = (0,D.$JSCompiler_set$$)("$_minZoom$");
D.$DvtPanZoomCanvas$$.prototype.$setMaxZoom$ = function $$DvtPanZoomCanvas$$$$$setMaxZoom$$($n$$17$$) {
  0 > $n$$17$$ && ($n$$17$$ = 1);
  this.$_maxZoom$ = $n$$17$$
};
D.$DvtPanZoomCanvas$$.prototype.$setAnimationDuration$ = (0,D.$JSCompiler_set$$)("$_animationDuration$");
D.$DvtPanZoomCanvas$$.prototype.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animationDuration$");
D.$DvtPanZoomCanvasEventManager$$ = function $$DvtPanZoomCanvasEventManager$$$($context$$32$$, $callback$$33$$, $callbackObj$$8$$) {
  this.Init($context$$32$$, $callback$$33$$, $callbackObj$$8$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomCanvasEventManager$$, D.$DvtEventManager$$, "DvtPanZoomCanvasEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanZoomCanvasEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$33$$, $callback$$34$$, $callbackObj$$9$$) {
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.Init.call(this, $context$$33$$, $callback$$34$$, $callbackObj$$9$$);
  this.$_pzc$ = $callbackObj$$9$$;
  this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$;
  this.$_bZooming$ = this.$_bPanning$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bMomentumPanning$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$10$$) {
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$10$$);
  (0,D.$DvtAgent$isPlatformGecko$$)() ? $displayable$$10$$.$addEvtListener$("DOMMouseScroll", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$10$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$56_pos$$6$$) {
  2 != $event$$56_pos$$6$$.button && ($event$$56_pos$$6$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$56_pos$$6$$), this.$_mx$ = $event$$56_pos$$6$$.x, this.$_my$ = $event$$56_pos$$6$$.y, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_bDown$ = D.$JSCompiler_alias_TRUE$$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_tx$, this.$_origPanY$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, 
  D.$JSCompiler_alias_VOID$$).$_ty$, this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_bMomentumPanning$ && (this.$_currTime$ = (new window.Date).getTime()));
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$57_zz$$2$$) {
  if(this.$_bDown$) {
    var $pos$$7_yy$$8$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$57_zz$$2$$), $xx$$8$$ = $pos$$7_yy$$8$$.x, $pos$$7_yy$$8$$ = $pos$$7_yy$$8$$.y;
    $event$$57_zz$$2$$.ctrlKey ? (this.$_bZooming$ || (this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("dragZoomBegin")), this.$_bZooming$ = D.$JSCompiler_alias_TRUE$$, this.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)(this.$_pzc$.$_controlPanel$), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_TRUE$$)), $event$$57_zz$$2$$ = this.$_origZoom$ * window.Math.pow(1 + 0.01 * (this.$_py$ >= $pos$$7_yy$$8$$ ? 
    1 : -1), window.Math.abs(this.$_py$ - $pos$$7_yy$$8$$)), this.$_callbackObj$.$_bPanningEnabled$ ? (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $event$$57_zz$$2$$, this.$_px$, this.$_py$) : (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $event$$57_zz$$2$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$)) : (0,D.$JSCompiler_StaticMethods__handlePanMove$$)(this, $xx$$8$$, $pos$$7_yy$$8$$);
    this.$_mx$ = $xx$$8$$;
    this.$_my$ = $pos$$7_yy$$8$$
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$() {
  this.$_bDown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bPanning$ && (0,D.$JSCompiler_StaticMethods__handlePanEnd$$)(this);
  this.$_bZooming$ && (0,D.$JSCompiler_StaticMethods__handleZoomEnd$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$59$$) {
  if(this.$_bDown$ && (this.$_bPanning$ || this.$_bZooming$)) {
    (!$event$$59$$.relatedTarget || $event$$59$$.relatedTarget == D.$JSCompiler_alias_NULL$$) && this.$OnMouseUp$($event$$59$$)
  }
  D.$DvtPanZoomCanvasEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$59$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$OnMouseWheel$$($event$$60$$) {
  if($event$$60$$.wheelDelta && 0 !== $event$$60$$.wheelDelta) {
    var $currZoom$$4_oldZoomAnim_zz$$3$$ = this.$_callbackObj$.$getZoom$();
    this.$_zoomAnimator$ && ($currZoom$$4_oldZoomAnim_zz$$3$$ = this.$_zoomAnimator$, this.$_zoomAnimator$.stop(), $currZoom$$4_oldZoomAnim_zz$$3$$ = this.$_callbackObj$.$getZoom$($currZoom$$4_oldZoomAnim_zz$$3$$), this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$);
    this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$;
    var $delta$$3_pos$$8$$ = $event$$60$$.wheelDelta;
    (0,D.$DvtAgent$isPlatformGecko$$)() && ($delta$$3_pos$$8$$ = -$delta$$3_pos$$8$$);
    $currZoom$$4_oldZoomAnim_zz$$3$$ *= 1 + this.$_callbackObj$.$_zoomIncrement$ * $delta$$3_pos$$8$$ / window.Math.abs($delta$$3_pos$$8$$);
    $delta$$3_pos$$8$$ = (0,D.$JSCompiler_StaticMethods_GetRelativeMousePosition$$)(this.$_callbackObj$, $event$$60$$);
    this.$_context$.$getDocumentUtils$().$cancelDomEvent$($event$$60$$);
    this.$_callbackObj$.$_bPanningEnabled$ ? (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $currZoom$$4_oldZoomAnim_zz$$3$$, $delta$$3_pos$$8$$.x, $delta$$3_pos$$8$$.y, this.$_zoomAnimator$) : (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $currZoom$$4_oldZoomAnim_zz$$3$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, this.$_zoomAnimator$);
    this.$_zoomAnimator$ && ((0,D.$DvtPlayable$appendOnEnd$$)(this.$_zoomAnimator$, this.$_clearZoomAnimator$, this), this.$_zoomAnimator$.play())
  }
};
D.$JSCompiler_prototypeAlias$$.$_clearZoomAnimator$ = function $$JSCompiler_prototypeAlias$$$$_clearZoomAnimator$$() {
  this.$_zoomAnimator$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$_handleMomentumStartTimer$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$_handleMomentumTimer$ = function $$JSCompiler_prototypeAlias$$$$_handleMomentumTimer$$() {
  var $dy$$9_ratio$$ = 1 - 0.04 * this.$_momentumIterCount$, $dy$$9_ratio$$ = $dy$$9_ratio$$ * $dy$$9_ratio$$, $interval_newX$$2$$ = this.$_momentumTimer$.$getInterval$(), $dx$$9$$ = $dy$$9_ratio$$ * this.$_momentumXperMS$ * $interval_newX$$2$$, $dy$$9_ratio$$ = $dy$$9_ratio$$ * this.$_momentumYperMS$ * $interval_newX$$2$$;
  this.$_momentumDx$ += $dx$$9$$;
  this.$_momentumDy$ += $dy$$9_ratio$$;
  var $interval_newX$$2$$ = this.$_origPanX$ + this.$_mx$ - this.$_px$ + this.$_momentumDx$, $newY$$2$$ = this.$_origPanY$ + this.$_my$ - this.$_py$ + this.$_momentumDy$;
  (0,D.$JSCompiler_StaticMethods_panTo$$)(this.$_callbackObj$, $interval_newX$$2$$, $newY$$2$$);
  var $bStop$$ = D.$JSCompiler_alias_FALSE$$;
  if(24 <= this.$_momentumIterCount$) {
    $bStop$$ = D.$JSCompiler_alias_TRUE$$
  }else {
    var $currX$$1$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_tx$, $currY$$1$$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_ty$;
    if(window.Math.abs($currX$$1$$ - $interval_newX$$2$$) > window.Math.abs($dx$$9$$) || window.Math.abs($currY$$1$$ - $newY$$2$$) > window.Math.abs($dy$$9_ratio$$)) {
      $bStop$$ = D.$JSCompiler_alias_TRUE$$
    }
  }
  $bStop$$ ? (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset(), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_FALSE$$)) : this.$_momentumIterCount$++
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$61$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchAttempt$$)($event$$61$$, this.$ZoomStartTouch$, this);
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchAttempt$$)($event$$61$$, this.$PanStartTouch$, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchMoveInternal$$($event$$62$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchMove$$)(this.$TouchManager$, $event$$62$$, "zoomTouch");
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchMove$$)(this.$TouchManager$, $event$$62$$, "panTouch");
  $event$$62$$ && $event$$62$$.preventDefault()
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchEndInternal$$($event$$63$$) {
  this.$_callbackObj$.$_bZoomingEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchEnd$$)(this.$TouchManager$, $event$$63$$, "zoomTouch");
  this.$_callbackObj$.$_bPanningEnabled$ && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchEnd$$)(this.$TouchManager$, $event$$63$$, "panTouch")
};
D.$JSCompiler_prototypeAlias$$.$ZoomStartTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomStartTouch$$($event$$64$$, $touch$$) {
  var $targets$$inline_854_touchIds$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch");
  1 >= $targets$$inline_854_touchIds$$.length && ((0,D.$JSCompiler_StaticMethods_saveProcessedTouch$$)(this.$TouchManager$, $touch$$.identifier, "zoomTouch", D.$JSCompiler_alias_NULL$$, "zoomTouch", "zoomTouch", this.$ZoomMoveTouch$, this.$ZoomEndTouch$, this), this.$_mx$ = $touch$$.pageX, this.$_my$ = $touch$$.pageY, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_tx$, this.$_origPanY$ = 
  (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_ty$, this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_origDist$ = D.$JSCompiler_alias_NULL$$, $targets$$inline_854_touchIds$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch"), $targets$$inline_854_touchIds$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $targets$$inline_854_touchIds$$), this.$_callbackObj$.$_currTargets$ = 
  $targets$$inline_854_touchIds$$);
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$ZoomMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomMoveTouch$$() {
  var $targets$$inline_869_touchIds$$1$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch");
  if(2 == $targets$$inline_869_touchIds$$1$$.length) {
    var $data$$50_touch1Data$$inline_858$$;
    var $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_856_touch2Data$$inline_859_zz$$4$$ = this.$TouchManager$;
    if(2 == $targets$$inline_869_touchIds$$1$$.length) {
      if($data$$50_touch1Data$$inline_858$$ = $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_856_touch2Data$$inline_859_zz$$4$$.$_touchMap$[$targets$$inline_869_touchIds$$1$$[0]], $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_856_touch2Data$$inline_859_zz$$4$$ = $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_856_touch2Data$$inline_859_zz$$4$$.$_touchMap$[$targets$$inline_869_touchIds$$1$$[1]], $data$$50_touch1Data$$inline_858$$ == D.$JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_856_touch2Data$$inline_859_zz$$4$$ == 
      D.$JSCompiler_alias_NULL$$ || 0 == $data$$50_touch1Data$$inline_858$$.$dx$ && 0 == $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_856_touch2Data$$inline_859_zz$$4$$.$dy$) {
        $data$$50_touch1Data$$inline_858$$ = D.$JSCompiler_alias_NULL$$
      }else {
        var $cp_dist$$inline_862_dx$$inline_860$$ = $data$$50_touch1Data$$inline_858$$.pageX - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_856_touch2Data$$inline_859_zz$$4$$.pageX, $dy$$inline_861_prevdx$$inline_863$$ = $data$$50_touch1Data$$inline_858$$.pageY - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_856_touch2Data$$inline_859_zz$$4$$.pageY, $cp_dist$$inline_862_dx$$inline_860$$ = window.Math.sqrt($cp_dist$$inline_862_dx$$inline_860$$ * $cp_dist$$inline_862_dx$$inline_860$$ + 
        $dy$$inline_861_prevdx$$inline_863$$ * $dy$$inline_861_prevdx$$inline_863$$), $dy$$inline_861_prevdx$$inline_863$$ = $data$$50_touch1Data$$inline_858$$.$prevPageX$ - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_856_touch2Data$$inline_859_zz$$4$$.$prevPageX$, $prevdy$$inline_864$$ = $data$$50_touch1Data$$inline_858$$.$prevPageY$ - $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_856_touch2Data$$inline_859_zz$$4$$.$prevPageY$, $cx$$inline_865$$ = ($data$$50_touch1Data$$inline_858$$.pageX + 
        $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_856_touch2Data$$inline_859_zz$$4$$.pageX) / 2, $cy$$inline_866$$ = ($data$$50_touch1Data$$inline_858$$.pageY + $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_856_touch2Data$$inline_859_zz$$4$$.pageY) / 2;
        $data$$50_touch1Data$$inline_858$$ = {$dz$:$cp_dist$$inline_862_dx$$inline_860$$ - window.Math.sqrt($dy$$inline_861_prevdx$$inline_863$$ * $dy$$inline_861_prevdx$$inline_863$$ + $prevdy$$inline_864$$ * $prevdy$$inline_864$$), $cx$:$cx$$inline_865$$, $cy$:$cy$$inline_866$$, $dcx$:$cx$$inline_865$$ - ($data$$50_touch1Data$$inline_858$$.$prevPageX$ + $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_856_touch2Data$$inline_859_zz$$4$$.$prevPageX$) / 2, $dcy$:$cy$$inline_866$$ - ($data$$50_touch1Data$$inline_858$$.$prevPageY$ + 
        $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_856_touch2Data$$inline_859_zz$$4$$.$prevPageY$) / 2, $dist$:$cp_dist$$inline_862_dx$$inline_860$$}
      }
    }else {
      $data$$50_touch1Data$$inline_858$$ = D.$JSCompiler_alias_NULL$$
    }
    $data$$50_touch1Data$$inline_858$$ && (this.$_bZooming$ || (this.$_bZooming$ = D.$JSCompiler_alias_TRUE$$, this.$TouchManager$.$blockTouchHold$(), this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("dragZoomBegin")), this.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)(this.$_pzc$.$_controlPanel$)), (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)(this.$_callbackObj$, D.$JSCompiler_alias_TRUE$$), this.$_origDist$ == D.$JSCompiler_alias_NULL$$ && 
    (this.$_origDist$ = $data$$50_touch1Data$$inline_858$$.$dist$ - $data$$50_touch1Data$$inline_858$$.$dz$), $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_856_touch2Data$$inline_859_zz$$4$$ = this.$_origZoom$ * ($data$$50_touch1Data$$inline_858$$.$dist$ / this.$_origDist$), $cp_dist$$inline_862_dx$$inline_860$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_pzc$.$_context$, $data$$50_touch1Data$$inline_858$$.$cx$, $data$$50_touch1Data$$inline_858$$.$cy$), this.$hideTooltip$(), 
    $targets$$inline_869_touchIds$$1$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $targets$$inline_869_touchIds$$1$$), this.$_callbackObj$.$_currTargets$ = $targets$$inline_869_touchIds$$1$$, (0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_callbackObj$, $JSCompiler_StaticMethods_getMultiTouchData$self$$inline_856_touch2Data$$inline_859_zz$$4$$, $cp_dist$$inline_862_dx$$inline_860$$.x, $cp_dist$$inline_862_dx$$inline_860$$.y), this.$_callbackObj$.$panBy$($data$$50_touch1Data$$inline_858$$.$dcx$, 
    $data$$50_touch1Data$$inline_858$$.$dcy$))
  }
};
D.$JSCompiler_prototypeAlias$$.$ZoomEndTouch$ = function $$JSCompiler_prototypeAlias$$$$ZoomEndTouch$$() {
  this.$_bZooming$ && (this.$_origDist$ = D.$JSCompiler_alias_NULL$$, this.$TouchManager$.$_blockTouchHold$ = D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods__handleZoomEnd$$)(this));
  var $touchIds$$2$$ = (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "zoomTouch"), $targets$$inline_874$$ = (0,D.$JSCompiler_StaticMethods_getStartTargetsByIds$$)(this.$TouchManager$, $touchIds$$2$$);
  this.$_callbackObj$.$_currTargets$ = $targets$$inline_874$$;
  0 == $touchIds$$2$$.length && this.$_callback$.call(this.$_callbackObj$, new D.$DvtZoomEvent$$("zoomEnd"))
};
D.$JSCompiler_prototypeAlias$$.$PanStartTouch$ = function $$JSCompiler_prototypeAlias$$$$PanStartTouch$$($event$$67$$, $touch$$3$$) {
  !this.$_bZooming$ && 1 >= (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "panTouch").length && ((0,D.$JSCompiler_StaticMethods_saveProcessedTouch$$)(this.$TouchManager$, $touch$$3$$.identifier, "panTouch", D.$JSCompiler_alias_NULL$$, "panTouch", "panTouch", this.$PanMoveTouch$, this.$PanEndTouch$, this), this.$_mx$ = $touch$$3$$.pageX, this.$_my$ = $touch$$3$$.pageY, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_origPanX$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, 
  D.$JSCompiler_alias_VOID$$).$_tx$, this.$_origPanY$ = (0,D.$JSCompiler_StaticMethods_getContentPaneMatrix$$)(this.$_callbackObj$, D.$JSCompiler_alias_VOID$$).$_ty$, this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_bMomentumPanning$ && (this.$_currTime$ = (new window.Date).getTime()));
  this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
};
D.$JSCompiler_prototypeAlias$$.$PanMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$PanMoveTouch$$($event$$68$$, $touch$$4$$) {
  if(!this.$_bZooming$ && 1 == (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "panTouch").length) {
    var $xx$$9$$ = $touch$$4$$.pageX, $yy$$9$$ = $touch$$4$$.pageY;
    (0,D.$JSCompiler_StaticMethods__handlePanMove$$)(this, $xx$$9$$, $yy$$9$$);
    this.$_mx$ = $xx$$9$$;
    this.$_my$ = $yy$$9$$
  }
};
D.$JSCompiler_prototypeAlias$$.$PanEndTouch$ = function $$JSCompiler_prototypeAlias$$$$PanEndTouch$$() {
  !this.$_bZooming$ && this.$_bPanning$ && (0,D.$JSCompiler_StaticMethods__handlePanEnd$$)(this)
};
D.$JSCompiler_StaticMethods__handleZoomEnd$$ = function $$JSCompiler_StaticMethods__handleZoomEnd$$$($JSCompiler_StaticMethods__handleZoomEnd$self$$) {
  $JSCompiler_StaticMethods__handleZoomEnd$self$$.$_callback$.call($JSCompiler_StaticMethods__handleZoomEnd$self$$.$_callbackObj$, new D.$DvtZoomEvent$$("dragZoomEnd"));
  $JSCompiler_StaticMethods__handleZoomEnd$self$$.$_bZooming$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__handleZoomEnd$self$$.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningEnded$$)($JSCompiler_StaticMethods__handleZoomEnd$self$$.$_pzc$.$_controlPanel$);
  (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)($JSCompiler_StaticMethods__handleZoomEnd$self$$.$_callbackObj$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods__handlePanMove$$ = function $$JSCompiler_StaticMethods__handlePanMove$$$($JSCompiler_StaticMethods__handlePanMove$self$$, $xx$$10$$, $yy$$10$$) {
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_bPanning$ || ($JSCompiler_StaticMethods__handlePanMove$self$$.$_callback$.call($JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$, new D.$DvtPanEvent$$("dragPanBegin")), $JSCompiler_StaticMethods__handlePanMove$self$$.$_bPanning$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningStarted$$)($JSCompiler_StaticMethods__handlePanMove$self$$.$_pzc$.$_controlPanel$), 
  (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)($JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$, D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods__handlePanMove$self$$.$_bMomentumPanning$ && ($JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$ = []));
  (0,D.$JSCompiler_StaticMethods_panTo$$)($JSCompiler_StaticMethods__handlePanMove$self$$.$_callbackObj$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_origPanX$ + $xx$$10$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_px$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_origPanY$ + $yy$$10$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_py$);
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_bMomentumPanning$ && ($JSCompiler_StaticMethods__handlePanMove$self$$.$_lastTime$ = $JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$, $JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$ = (new window.Date).getTime(), $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$ ? ($JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.$isRunning$() && $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.stop(), 
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.reset()) : $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$ = new D.$DvtTimer$$($JSCompiler_StaticMethods__handlePanMove$self$$.$_context$, 50, $JSCompiler_StaticMethods__handlePanMove$self$$.$_handleMomentumStartTimer$, $JSCompiler_StaticMethods__handlePanMove$self$$, 1), $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.push({$dt$:$JSCompiler_StaticMethods__handlePanMove$self$$.$_currTime$ - 
  $JSCompiler_StaticMethods__handlePanMove$self$$.$_lastTime$, $dx$:$xx$$10$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_mx$, $dy$:$yy$$10$$ - $JSCompiler_StaticMethods__handlePanMove$self$$.$_my$}), 5 < $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.length && $JSCompiler_StaticMethods__handlePanMove$self$$.$_arLastNMouseMoves$.splice(0, 1), $JSCompiler_StaticMethods__handlePanMove$self$$.$_momentumStartTimer$.start())
};
D.$JSCompiler_StaticMethods__handlePanEnd$$ = function $$JSCompiler_StaticMethods__handlePanEnd$$$($JSCompiler_StaticMethods__handlePanEnd$self$$) {
  $JSCompiler_StaticMethods__handlePanEnd$self$$.$_callback$.call($JSCompiler_StaticMethods__handlePanEnd$self$$.$_callbackObj$, new D.$DvtPanEvent$$("dragPanEnd"));
  $JSCompiler_StaticMethods__handlePanEnd$self$$.$_bPanning$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__handlePanEnd$self$$.$_pzc$.$_controlPanel$ && (0,D.$JSCompiler_StaticMethods_mouseDragPanningEnded$$)($JSCompiler_StaticMethods__handlePanEnd$self$$.$_pzc$.$_controlPanel$);
  if($JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$ && $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$.$isRunning$()) {
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$.stop();
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumStartTimer$.reset();
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$ ? $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$.reset() : $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$ = new D.$DvtTimer$$($JSCompiler_StaticMethods__handlePanEnd$self$$.$_context$, 50, $JSCompiler_StaticMethods__handlePanEnd$self$$.$_handleMomentumTimer$, $JSCompiler_StaticMethods__handlePanEnd$self$$);
    for(var $dt$$ = 0, $dx$$10$$ = 0, $dy$$10$$ = 0, $numMoves$$ = $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$.length;0 < $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$.length;) {
      var $objMove$$ = $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$.pop(), $dt$$ = $dt$$ + $objMove$$.$dt$, $dx$$10$$ = $dx$$10$$ + $objMove$$.$dx$, $dy$$10$$ = $dy$$10$$ + $objMove$$.$dy$
    }
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_arLastNMouseMoves$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumXperMS$ = $dx$$10$$ / $dt$$;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumYperMS$ = $dy$$10$$ / $dt$$;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$.setInterval(window.Math.ceil($dt$$ / $numMoves$$));
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumIterCount$ = 1;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumDx$ = 0;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumDy$ = 0;
    $JSCompiler_StaticMethods__handlePanEnd$self$$.$_pzc$.$_bPanningEnabled$ && $JSCompiler_StaticMethods__handlePanEnd$self$$.$_momentumTimer$.start()
  }else {
    (0,D.$JSCompiler_StaticMethods_SetElasticConstraints$$)($JSCompiler_StaticMethods__handlePanEnd$self$$.$_callbackObj$, D.$JSCompiler_alias_FALSE$$)
  }
};
D.$DvtPanZoomCanvasKeyboardHandler$$ = function $$DvtPanZoomCanvasKeyboardHandler$$$($component$$5$$, $manager$$3$$) {
  this.Init($component$$5$$, $manager$$3$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanZoomCanvasKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtPanZoomCanvasKeyboardHandler");
D.$DvtPanZoomCanvasKeyboardHandler$$.prototype.Init = function $$DvtPanZoomCanvasKeyboardHandler$$$$Init$($component$$6$$, $manager$$4$$) {
  D.$DvtPanZoomCanvasKeyboardHandler$$.$superclass$.Init($manager$$4$$);
  this.$_component$ = $component$$6$$
};
D.$DvtPanZoomCanvasKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtPanZoomCanvasKeyboardHandler$$$$$processKeyDown$$($controlPanel$$3_event$$70$$) {
  var $keyCode$$6$$ = $controlPanel$$3_event$$70$$.keyCode, $canvas$$ = this.$_component$.$_panZoomCanvas$;
  if(33 == $keyCode$$6$$) {
    $controlPanel$$3_event$$70$$.ctrlKey || $controlPanel$$3_event$$70$$.shiftKey ? $canvas$$.$panBy$($canvas$$.$_panIncrement$, 0) : $canvas$$.$panBy$(0, $canvas$$.$_panIncrement$)
  }else {
    if(34 == $keyCode$$6$$) {
      $controlPanel$$3_event$$70$$.ctrlKey || $controlPanel$$3_event$$70$$.shiftKey ? $canvas$$.$panBy$(-$canvas$$.$_panIncrement$, 0) : $canvas$$.$panBy$(0, -$canvas$$.$_panIncrement$)
    }else {
      if(191 == $keyCode$$6$$) {
        ($controlPanel$$3_event$$70$$ = $canvas$$.$_controlPanel$) && $controlPanel$$3_event$$70$$.$toggleExpandCollapse$()
      }else {
        if((0,D.$DvtKeyboardEvent$isEquals$$)($controlPanel$$3_event$$70$$) || (0,D.$DvtKeyboardEvent$isPlus$$)($controlPanel$$3_event$$70$$)) {
          (0,D.$JSCompiler_StaticMethods_zoomTo$$)($canvas$$, $canvas$$.$getZoom$() + $canvas$$.$_zoomIncrement$)
        }else {
          if((0,D.$DvtKeyboardEvent$isMinus$$)($controlPanel$$3_event$$70$$) || (0,D.$DvtKeyboardEvent$isUnderscore$$)($controlPanel$$3_event$$70$$)) {
            (0,D.$JSCompiler_StaticMethods_zoomTo$$)($canvas$$, $canvas$$.$getZoom$() - $canvas$$.$_zoomIncrement$)
          }else {
            if((48 == $keyCode$$6$$ || 96 == $keyCode$$6$$) && !$controlPanel$$3_event$$70$$.ctrlKey && !$controlPanel$$3_event$$70$$.shiftKey) {
              $canvas$$.$zoomToFit$()
            }else {
              return D.$DvtPanZoomCanvasKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $controlPanel$$3_event$$70$$)
            }
          }
        }
      }
    }
  }
};
D.$DvtCollapsiblePanel$$ = function $$DvtCollapsiblePanel$$$($context$$419$$, $maxWidth$$23$$, $maxHeight$$15$$, $collapseDir$$, $buttonImages$$4$$, $styleMap$$69$$, $disclosed$$2$$, $isFixed$$) {
  this.Init($context$$419$$, $maxWidth$$23$$, $maxHeight$$15$$, $collapseDir$$, $buttonImages$$4$$, $styleMap$$69$$, $disclosed$$2$$, $isFixed$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCollapsiblePanel$$, D.$DvtContainer$$, "DvtCollapsiblePanel");
D.$DvtCollapsiblePanel$$.prototype.Init = function $$DvtCollapsiblePanel$$$$Init$($context$$420$$, $maxWidth$$24$$, $maxHeight$$16$$, $collapseDir$$1$$, $buttonImages$$5$$, $styleMap$$70$$, $disclosed$$3$$, $isFixed$$1$$) {
  D.$DvtCollapsiblePanel$$.$superclass$.Init.call(this, $context$$420$$);
  this.$_maxWidth$ = $maxWidth$$24$$;
  this.$_maxHeight$ = $maxHeight$$16$$;
  this.$_collapseDir$ = $collapseDir$$1$$ ? $collapseDir$$1$$ : "col_northeast";
  (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) && ("col_northeast" == this.$_collapseDir$ ? this.$_collapseDir$ = "col_northwest" : "col_northwest" == this.$_collapseDir$ ? this.$_collapseDir$ = "col_northeast" : "col_southeast" == this.$_collapseDir$ ? this.$_collapseDir$ = "col_southwest" : "col_southwest" == this.$_collapseDir$ && (this.$_collapseDir$ = "col_southeast"));
  this.$_buttonImages$ = $buttonImages$$5$$;
  this.$_isFixed$ = $isFixed$$1$$ ? $isFixed$$1$$ : (0,D.$DvtAgent$isEnvironmentBatik$$)();
  this.$_animation$ = this.$_collapseTooltip$ = this.$_expandTooltip$ = D.$JSCompiler_alias_NULL$$;
  this.$_styleMap$ = $styleMap$$70$$;
  this.$_borderColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", D.$JSCompiler_alias_NULL$$);
  this.$_borderRadius$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-radius", D.$JSCompiler_alias_NULL$$));
  this.$_bgColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "background-color", D.$JSCompiler_alias_NULL$$);
  this.$_bgAlpha$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "backgroundAlpha", 1);
  this.$_collapse$ = $disclosed$$3$$ !== D.$JSCompiler_alias_VOID$$ ? !$disclosed$$3$$ : D.$JSCompiler_alias_FALSE$$;
  this.$_scrollableContainer$ = new D.$DvtScrollableContainer$$($context$$420$$, 0, 0, $maxWidth$$24$$ - 10, $maxHeight$$16$$ - 10, 3, "collapsiblePanel");
  this.$addChild$(this.$_scrollableContainer$);
  this.$_scrollableContainer$.$_horizScrollEnabled$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_scrollableContainer$, 5, 5);
  this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandleMouseOver$, D.$JSCompiler_alias_FALSE$$, this);
  this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleMouseOut$, D.$JSCompiler_alias_FALSE$$, this)
};
D.$DvtCollapsiblePanel$$.prototype.$HandleResize$ = function $$DvtCollapsiblePanel$$$$$HandleResize$$() {
  this.$_scrollableContainer$.refresh();
  var $dims$$45_resizeHeight$$ = this.$_scrollableContainer$.$getDimensions$(), $resizeWidth$$ = $dims$$45_resizeHeight$$.$w$ + 10, $dims$$45_resizeHeight$$ = $dims$$45_resizeHeight$$.$h$ + 10;
  this.$_background$.$setCmds$((0,D.$JSCompiler_StaticMethods__getOutlinePath$$)(this, $resizeWidth$$, $dims$$45_resizeHeight$$));
  var $west$$2$$ = "col_northwest" == this.$_collapseDir$ || "col_southwest" == this.$_collapseDir$;
  this.$_buttonFrame$ && $west$$2$$ && this.$_buttonFrame$.$setTranslateX$($resizeWidth$$);
  this.$FireListener$(new D.$DvtResizeEvent$$($resizeWidth$$, $dims$$45_resizeHeight$$, 0, 0))
};
D.$DvtCollapsiblePanel$$.prototype.isCollapsed = (0,D.$JSCompiler_get$$)("$_collapse$");
D.$JSCompiler_StaticMethods_setCollapsed$$ = function $$JSCompiler_StaticMethods_setCollapsed$$$($JSCompiler_StaticMethods_setCollapsed$self$$, $collapse$$1$$) {
  $JSCompiler_StaticMethods_setCollapsed$self$$.$_collapse$ != $collapse$$1$$ && ($JSCompiler_StaticMethods_setCollapsed$self$$.$_collapse$ = $collapse$$1$$, (0,D.$JSCompiler_StaticMethods__collapseExpand$$)($JSCompiler_StaticMethods_setCollapsed$self$$, D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_setCollapsed$self$$.$FireListener$(new D.$DvtCollapsiblePanelEvent$$($collapse$$1$$ ? "hide" : "show")))
};
D.$DvtCollapsiblePanel$$.prototype.$getMaxContentWidth$ = function $$DvtCollapsiblePanel$$$$$getMaxContentWidth$$() {
  return this.$_maxWidth$ - 27
};
D.$DvtCollapsiblePanel$$.prototype.$getMaxContentHeight$ = function $$DvtCollapsiblePanel$$$$$getMaxContentHeight$$() {
  return this.$_maxHeight$ - 27
};
D.$JSCompiler_StaticMethods__getRefPoint$$ = function $$JSCompiler_StaticMethods__getRefPoint$$$($JSCompiler_StaticMethods__getRefPoint$self$$, $point$$39$$, $isScale$$) {
  return!$JSCompiler_StaticMethods__getRefPoint$self$$.isCollapsed() ? $isScale$$ ? new D.$DvtPoint$$(1 / $point$$39$$.x, 1 / $point$$39$$.y) : new D.$DvtPoint$$(-$point$$39$$.x, -$point$$39$$.y) : $point$$39$$
};
D.$JSCompiler_StaticMethods__collapseExpand$$ = function $$JSCompiler_StaticMethods__collapseExpand$$$($JSCompiler_StaticMethods__collapseExpand$self$$, $animate$$2$$) {
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$ && ($JSCompiler_StaticMethods__collapseExpand$self$$.$_animationStopped$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$.stop(D.$JSCompiler_alias_TRUE$$));
  var $moveAnim_north_translatePoint2$$ = "col_northwest" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$ || "col_northeast" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$, $west$$3$$ = "col_northwest" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseDir$, $moveAnim2_translatePoint_translateX$$2$$ = $west$$3$$ ? 0 : $JSCompiler_StaticMethods__collapseExpand$self$$.$_width$, 
  $translateY$$3$$ = $moveAnim_north_translatePoint2$$ ? 0 : $JSCompiler_StaticMethods__collapseExpand$self$$.$_height$, $scaleAnim_scalePoint$$ = new D.$DvtPoint$$(1 / $JSCompiler_StaticMethods__collapseExpand$self$$.$_width$, 1 / $JSCompiler_StaticMethods__collapseExpand$self$$.$_height$), $moveAnim2_translatePoint_translateX$$2$$ = new D.$DvtPoint$$($moveAnim2_translatePoint_translateX$$2$$, $translateY$$3$$), $moveAnim_north_translatePoint2$$ = new D.$DvtPoint$$($west$$3$$ ? -$JSCompiler_StaticMethods__collapseExpand$self$$.$_width$ : 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_width$, $translateY$$3$$ - ($moveAnim_north_translatePoint2$$ ? 0 : 25));
  $animate$$2$$ || ($JSCompiler_StaticMethods__collapseExpand$self$$.$_background$.$setAlpha$(0), $JSCompiler_StaticMethods__collapseExpand$self$$.$_buttonFrame$ && $JSCompiler_StaticMethods__collapseExpand$self$$.$_buttonFrame$.$setAlpha$(0));
  $scaleAnim_scalePoint$$ = new D.$DvtAnimScaleBy$$($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$, $JSCompiler_StaticMethods__collapseExpand$self$$.$_background$, (0,D.$JSCompiler_StaticMethods__getRefPoint$$)($JSCompiler_StaticMethods__collapseExpand$self$$, $scaleAnim_scalePoint$$, D.$JSCompiler_alias_TRUE$$), $animate$$2$$ ? 0.25 : 1E-5);
  $moveAnim_north_translatePoint2$$ = new D.$DvtAnimMoveBy$$($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$, $JSCompiler_StaticMethods__collapseExpand$self$$.$_buttonFrame$, (0,D.$JSCompiler_StaticMethods__getRefPoint$$)($JSCompiler_StaticMethods__collapseExpand$self$$, $moveAnim_north_translatePoint2$$), $animate$$2$$ ? 0.25 : 1E-5);
  $moveAnim2_translatePoint_translateX$$2$$ = new D.$DvtAnimMoveBy$$($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$, $JSCompiler_StaticMethods__collapseExpand$self$$.$_background$, (0,D.$JSCompiler_StaticMethods__getRefPoint$$)($JSCompiler_StaticMethods__collapseExpand$self$$, $moveAnim2_translatePoint_translateX$$2$$), $animate$$2$$ ? 0.25 : 1E-5);
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$ = new D.$DvtParallelPlayable$$($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$, $scaleAnim_scalePoint$$, $moveAnim_north_translatePoint2$$, $moveAnim2_translatePoint_translateX$$2$$);
  $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$ && ($JSCompiler_StaticMethods__collapseExpand$self$$.$_context$.$getTooltipManager$().$hideTooltip$(), $JSCompiler_StaticMethods__collapseExpand$self$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, $JSCompiler_StaticMethods__collapseExpand$self$$.$HandleMouseOver$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$HandleMouseOut$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$ && ($JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtMouseEvent$CLICK$$, 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonHoverOver$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_collapseExpandButton$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, 
  $JSCompiler_StaticMethods__collapseExpand$self$$.$OnButtonHoverOut$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__collapseExpand$self$$)), $JSCompiler_StaticMethods__collapseExpand$self$$.isCollapsed() && $JSCompiler_StaticMethods__collapseExpand$self$$.$_scrollableContainer$.$setAlpha$(0), $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$.$setOnEnd$($JSCompiler_StaticMethods__collapseExpand$self$$.$OnAnimationEnd$, $JSCompiler_StaticMethods__collapseExpand$self$$), $JSCompiler_StaticMethods__collapseExpand$self$$.$_animation$.play())
};
D.$JSCompiler_StaticMethods__getOutlinePath$$ = function $$JSCompiler_StaticMethods__getOutlinePath$$$($JSCompiler_StaticMethods__getOutlinePath$self$$, $width$$124$$, $height$$105$$) {
  var $r$$50$$ = $JSCompiler_StaticMethods__getOutlinePath$self$$.$_borderRadius$, $cmds$$17$$, $west$$4$$ = "col_northwest" == $JSCompiler_StaticMethods__getOutlinePath$self$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods__getOutlinePath$self$$.$_collapseDir$;
  25 >= $height$$105$$ && ($height$$105$$ = 25);
  $cmds$$17$$ = $JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ || $west$$4$$ ? window.DvtPathUtils.moveTo($r$$50$$, 0) : window.DvtPathUtils.moveTo(0, 0);
  $cmds$$17$$ += window.DvtPathUtils.lineTo($width$$124$$ - $r$$50$$, 0);
  !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && $west$$4$$ ? ($cmds$$17$$ += window.DvtPathUtils.lineTo($width$$124$$, 0), $cmds$$17$$ += window.DvtPathUtils.lineTo($width$$124$$, $r$$50$$)) : $cmds$$17$$ += window.DvtPathUtils.$quadTo$($width$$124$$, 0, $width$$124$$, $r$$50$$);
  !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && 25 == $height$$105$$ && $west$$4$$ ? $cmds$$17$$ += window.DvtPathUtils.lineTo($width$$124$$, $height$$105$$) : ($cmds$$17$$ += window.DvtPathUtils.lineTo($width$$124$$, $height$$105$$ - $r$$50$$), $cmds$$17$$ += window.DvtPathUtils.$quadTo$($width$$124$$, $height$$105$$, $width$$124$$ - $r$$50$$, $height$$105$$));
  $cmds$$17$$ += window.DvtPathUtils.lineTo($r$$50$$, $height$$105$$);
  $cmds$$17$$ = !$JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ && 25 == $height$$105$$ && !$west$$4$$ ? $cmds$$17$$ + window.DvtPathUtils.lineTo(0, $height$$105$$) : $cmds$$17$$ + window.DvtPathUtils.$quadTo$(0, $height$$105$$, 0, $height$$105$$ - $r$$50$$);
  if($JSCompiler_StaticMethods__getOutlinePath$self$$.$_isFixed$ || $west$$4$$) {
    $cmds$$17$$ += window.DvtPathUtils.lineTo(0, $r$$50$$), $cmds$$17$$ += window.DvtPathUtils.$quadTo$(0, 0, $r$$50$$, 0)
  }
  return $cmds$$17$$ += window.DvtPathUtils.closePath()
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtCollapsiblePanel$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$_animationStopped$ = D.$JSCompiler_alias_FALSE$$;
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  var $alpha$$29_stroke$$86$$ = this.$_background$.$getStroke$().clone();
  $alpha$$29_stroke$$86$$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.$_background$.$setStroke$($alpha$$29_stroke$$86$$);
  var $alpha$$29_stroke$$86$$ = this.$_styleMap$[D.$DvtControlPanel$$.$BG_ROLLOUT_ALPHA$], $fill$$54$$ = this.$_background$.$getFill$().clone();
  $fill$$54$$.$setAlpha$($alpha$$29_stroke$$86$$);
  this.$_background$.$setFill$($fill$$54$$);
  this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.isCollapsed() || this.$_scrollableContainer$.$setAlpha$(1);
  this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$HandleMouseOver$, D.$JSCompiler_alias_FALSE$$, this);
  this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleMouseOut$, D.$JSCompiler_alias_FALSE$$, this);
  this.$_collapseExpandButton$ && (this.$_collapseExpandButton$ = this.isCollapsed() ? D.$DvtButtonLAFUtils$$.$createExpandButton$(this.$_context$, this.$_buttonImages$, 25, this.$_styleMap$, D.$JSCompiler_alias_FALSE$$) : D.$DvtButtonLAFUtils$$.$createCollapseButton$(this.$_context$, this.$_buttonImages$, 25, this.$_styleMap$, D.$JSCompiler_alias_FALSE$$), this.$_buttonFrame$.$addChild$(this.$_collapseExpandButton$), this.$_buttonFrame$.$removeChildAt$(0), (0,D.$DvtAgent$isTouchDevice$$)() ? this.$_collapseExpandButton$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, 
  this.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, this) : (this.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$OnButtonHoverOver$, D.$JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$OnButtonHoverOut$, D.$JSCompiler_alias_FALSE$$, this)))
};
D.$JSCompiler_prototypeAlias$$.$OnButtonClick$ = function $$JSCompiler_prototypeAlias$$$$OnButtonClick$$() {
  this.$_context$.$getTooltipManager$().$hideTooltip$();
  (0,D.$JSCompiler_StaticMethods_setCollapsed$$)(this, !this.isCollapsed())
};
D.$JSCompiler_prototypeAlias$$.$OnButtonHoverOver$ = function $$JSCompiler_prototypeAlias$$$$OnButtonHoverOver$$($evt$$59$$) {
  var $tooltip$$42$$ = this.isCollapsed() ? this.$_expandTooltip$ : this.$_collapseTooltip$;
  $tooltip$$42$$ != D.$JSCompiler_alias_NULL$$ && this.$_context$.$getTooltipManager$().$showTooltip$($evt$$59$$.pageX, $evt$$59$$.pageY, $tooltip$$42$$, this.$_collapseExpandButton$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$OnButtonHoverOut$ = function $$JSCompiler_prototypeAlias$$$$OnButtonHoverOut$$() {
  this.$_context$.$getTooltipManager$().$hideTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOver$$() {
  var $alpha$$30_stroke$$87$$ = this.$_background$.$getStroke$().clone();
  $alpha$$30_stroke$$87$$.$setAlpha$(this.$_styleMap$.borderHoverAlpha);
  this.$_background$.$setStroke$($alpha$$30_stroke$$87$$);
  var $alpha$$30_stroke$$87$$ = this.$_styleMap$.backgroundHoverAlpha, $fill$$55$$ = this.$_background$.$getFill$().clone();
  $fill$$55$$.$setAlpha$($alpha$$30_stroke$$87$$);
  this.$_background$.$setFill$($fill$$55$$);
  this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$.borderHoverAlpha)
};
D.$JSCompiler_prototypeAlias$$.$HandleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$HandleMouseOut$$() {
  var $fill$$56_stroke$$88$$ = this.$_background$.$getStroke$().clone();
  $fill$$56_stroke$$88$$.$setAlpha$(this.$_styleMap$.borderAlpha);
  this.$_background$.$setStroke$($fill$$56_stroke$$88$$);
  $fill$$56_stroke$$88$$ = this.$_background$.$getFill$().clone();
  $fill$$56_stroke$$88$$.$setAlpha$(this.$_bgAlpha$);
  this.$_background$.$setFill$($fill$$56_stroke$$88$$);
  this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$.borderAlpha)
};
D.$DvtCollapsiblePanelEvent$$ = function $$DvtCollapsiblePanelEvent$$$($subtype$$6$$) {
  this.Init("dvtCollapsiblePanelEvent");
  this.$_subtype$ = $subtype$$6$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtCollapsiblePanelEvent$$, D.$DvtBaseComponentEvent$$, "DvtCollapsiblePanelEvent");
D.$DvtCollapsiblePanelEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtImageLAFUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtImageLAFUtils$$, D.$DvtObj$$, "DvtImageLAFUtils");
D.$DvtImageLAFUtils$$.$loadIcon$ = function $$DvtImageLAFUtils$$$$loadIcon$$($context$$386$$, $uri$$12$$) {
  var $image$$17$$ = new D.$DvtImage$$($context$$386$$, $uri$$12$$);
  $image$$17$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  D.$DvtImageLoader$$.$loadImage$($context$$386$$, $uri$$12$$, function($context$$386$$) {
    $context$$386$$ != D.$JSCompiler_alias_NULL$$ && ($context$$386$$.width && $context$$386$$.height) && ($image$$17$$.$setWidth$($context$$386$$.width), $image$$17$$.$setHeight$($context$$386$$.height))
  });
  return $image$$17$$
};
D.$DvtButtonLAFUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtButtonLAFUtils$$, D.$DvtObj$$, "DvtButtonLAFUtils");
D.$DvtButtonLAFUtils$$.$EXPAND_COLLAPSE_BUTTON_IMG_OFFSET$ = -6;
D.$DvtButtonLAFUtils$$.$CONTROL_BUTTON_WIDTH$ = 23;
D.$DvtButtonLAFUtils$$.$CONTROL_BUTTON_HEIGHT$ = 21;
D.$DvtButtonLAFUtils$$.$ZOOM_BUTTON_HEIGHT$ = 20;
D.$DvtButtonLAFUtils$$.$OPEN_CLOSE_IMAGE_WIDTH$ = 22;
D.$DvtButtonLAFUtils$$.$OPEN_CLOSE_IMAGE_HEIGHT$ = 20;
D.$DvtButtonLAFUtils$$.$VIEW_PANEL_HEIGHT$ = 47;
D.$DvtButtonLAFUtils$$.$VIEW_PANEL_HALF_HEIGHT$ = 26;
D.$DvtButtonLAFUtils$$.$SIN_PI_4$ = window.Math.sin(window.Math.PI / 4);
D.$DvtButtonLAFUtils$$.$TAN_PI_8$ = window.Math.tan(window.Math.PI / 8);
D.$DvtButtonLAFUtils$$.$BORDER_COLOR$ = "#7C8191";
D.$DvtButtonLAFUtils$$.$GRADIENT_DARK$ = "#E0E1E1";
D.$DvtButtonLAFUtils$$.$GRADIENT_LIGHT$ = "#F0F1F2";
D.$DvtButtonLAFUtils$$.$ROUND_RECT_ELLIPSE$ = 8;
D.$DvtButtonLAFUtils$$.$DEFAULT_FILL_TYPE$ = "solid";
D.$DvtButtonLAFUtils$$.$DEFAULT_BORDER_COLOR$ = "#7BA0D9";
D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$ = "#3474D3";
D.$DvtButtonLAFUtils$$.$DEFAULT_END_COLOR$ = "#BFD8FB";
D.$DvtButtonLAFUtils$$.$_ZOOMIN_ENA$ = "zoominUp";
D.$DvtButtonLAFUtils$$.$_ZOOMIN_OVR$ = "zoominOver";
D.$DvtButtonLAFUtils$$.$_ZOOMIN_DWN$ = "zoominDown";
D.$DvtButtonLAFUtils$$.$_ZOOMIN_DISABLED$ = "zoominDisabled";
D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_ENA$ = "zoomtofitUp";
D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_OVR$ = "zoomtofitOver";
D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_DWN$ = "zoomtofitDown";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_ENA$ = "zoomoutUp";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_OVR$ = "zoomoutOver";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DWN$ = "zoomoutDown";
D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DISABLED$ = "zoomoutDisabled";
D.$DvtButtonLAFUtils$$.$_PAN_ENA$ = "pandialUp";
D.$DvtButtonLAFUtils$$.$_PAN_OVR$ = "pandialOver";
D.$DvtButtonLAFUtils$$.$_PAN_DWN$ = "pandialDown";
D.$DvtButtonLAFUtils$$.$_RECENTER_ENA$ = "recenterUp";
D.$DvtButtonLAFUtils$$.$_RECENTER_OVR$ = "recenterOver";
D.$DvtButtonLAFUtils$$.$_RECENTER_DWN$ = "recenterDown";
D.$DvtButtonLAFUtils$$.$_RESET_ENA$ = "resetUp";
D.$DvtButtonLAFUtils$$.$_RESET_OVR$ = "resetOver";
D.$DvtButtonLAFUtils$$.$_RESET_DWN$ = "resetDown";
D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$ = "drillupUp";
D.$DvtButtonLAFUtils$$.$_DRILLUP_OVR$ = "drillupOver";
D.$DvtButtonLAFUtils$$.$_DRILLUP_DWN$ = "drillupDown";
D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$ = "drilldownUp";
D.$DvtButtonLAFUtils$$.$_DRILLDOWN_OVR$ = "drilldownOver";
D.$DvtButtonLAFUtils$$.$_DRILLDOWN_DWN$ = "drilldownDown";
D.$DvtButtonLAFUtils$$.$_MAX_ENA$ = "maxUp";
D.$DvtButtonLAFUtils$$.$_MAX_OVR$ = "maxOver";
D.$DvtButtonLAFUtils$$.$_MAX_DWN$ = "maxDown";
D.$DvtButtonLAFUtils$$.$_RESTORE_ENA$ = "restoreUp";
D.$DvtButtonLAFUtils$$.$_RESTORE_OVR$ = "restoreOver";
D.$DvtButtonLAFUtils$$.$_RESTORE_DWN$ = "restoreDown";
D.$DvtButtonLAFUtils$$.$_COLLAPSE_ENA$ = "collapseEna";
D.$DvtButtonLAFUtils$$.$_COLLAPSE_OVR$ = "collapseOvr";
D.$DvtButtonLAFUtils$$.$_COLLAPSE_DWN$ = "collapseDwn";
D.$DvtButtonLAFUtils$$.$_EXPAND_ENA$ = "expandEna";
D.$DvtButtonLAFUtils$$.$_EXPAND_OVR$ = "expandOvr";
D.$DvtButtonLAFUtils$$.$_EXPAND_DWN$ = "expandDwn";
D.$DvtButtonLAFUtils$$.$_QUICKQUERY_ENA$ = "quickQueryEna";
D.$DvtButtonLAFUtils$$.$_QUICKQUERY_OVR$ = "quickQueryOvr";
D.$DvtButtonLAFUtils$$.$_QUICKQUERY_DWN$ = "quickQueryDwn";
D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_ENA$ = "clearResultsEna";
D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_OVR$ = "clearResultsOvr";
D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_DWN$ = "clearResultsDwn";
D.$DvtButtonLAFUtils$$.$_UP$ = "Up";
D.$DvtButtonLAFUtils$$.$_OVER$ = "Over";
D.$DvtButtonLAFUtils$$.$_DOWN$ = "Down";
D.$DvtButtonLAFUtils$$.$_SEL$ = "Sel";
D.$DvtButtonLAFUtils$$.$_R2L$ = "_r";
D.$DvtButtonLAFUtils$$.$_SYNC$ = "synchronize";
D.$DvtButtonLAFUtils$$.$createPanControl$ = function $$DvtButtonLAFUtils$$$$createPanControl$$($context$$387$$, $panZoomCanvas$$8$$, $resources$$11$$, $controls$$3$$, $imageURIs$$2$$, $styleMap$$44$$) {
  var $panButton_panUpState$$ = D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$387$$, $imageURIs$$2$$[D.$DvtButtonLAFUtils$$.$_PAN_ENA$], $styleMap$$44$$), $panDownState$$ = new D.$DvtContainer$$($context$$387$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panDownState$$, 20, 20);
  var $downImage_panOverState$$ = D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$387$$, $imageURIs$$2$$[D.$DvtButtonLAFUtils$$.$_PAN_DWN$], $styleMap$$44$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($downImage_panOverState$$, -20, -20);
  $panDownState$$.$addChild$($downImage_panOverState$$);
  $downImage_panOverState$$ = new D.$DvtContainer$$($context$$387$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($downImage_panOverState$$, 20, 20);
  var $overImage$$ = D.$DvtButtonLAFUtils$$.$_createPanButtonState$($context$$387$$, $imageURIs$$2$$[D.$DvtButtonLAFUtils$$.$_PAN_OVR$], $styleMap$$44$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($overImage$$, -20, -20);
  $downImage_panOverState$$.$addChild$($overImage$$);
  $panButton_panUpState$$ = new D.$DvtButton$$($context$$387$$, $panButton_panUpState$$, $downImage_panOverState$$, $panDownState$$);
  if(0 < ($controls$$3$$ & 16)) {
    var $recenterButton$$ = new D.$DvtButton$$($context$$387$$, D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$387$$, $imageURIs$$2$$[D.$DvtButtonLAFUtils$$.$_RECENTER_ENA$], $styleMap$$44$$), D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$387$$, $imageURIs$$2$$[D.$DvtButtonLAFUtils$$.$_RECENTER_OVR$], $styleMap$$44$$), D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$($context$$387$$, $imageURIs$$2$$[D.$DvtButtonLAFUtils$$.$_RECENTER_DWN$], $styleMap$$44$$));
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($recenterButton$$, 9, 9)
  }
  return new D.$DvtPanControl$$($context$$387$$, $panButton_panUpState$$, $recenterButton$$, $panZoomCanvas$$8$$, $resources$$11$$, $controls$$3$$, $styleMap$$44$$)
};
D.$DvtButtonLAFUtils$$.$createDrillUpButton$ = function $$DvtButtonLAFUtils$$$$createDrillUpButton$$($context$$388$$, $mapCallback$$2$$, $panZoomCanvas$$9$$, $resources$$12$$, $dis$$5_imageURIs$$3$$, $eventManager$$25$$, $styleMap$$45$$) {
  var $ena$$13$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$388$$, 0, $dis$$5_imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$], $styleMap$$45$$), $ovr$$8$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$388$$, 1, $dis$$5_imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_OVR$], $styleMap$$45$$), $dwn$$8$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$388$$, 2, $dis$$5_imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_DWN$], $styleMap$$45$$);
  $dis$$5_imageURIs$$3$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$388$$, 0, $dis$$5_imageURIs$$3$$[D.$DvtButtonLAFUtils$$.$_DRILLUP_ENA$], $styleMap$$45$$);
  return new D.$DvtMapControlButton$$($context$$388$$, new D.$DvtButton$$($context$$388$$, $ena$$13$$, $ovr$$8$$, $dwn$$8$$, $dis$$5_imageURIs$$3$$), $mapCallback$$2$$, $panZoomCanvas$$9$$, 0, $resources$$12$$, $eventManager$$25$$)
};
D.$DvtButtonLAFUtils$$.$createDrillDownButton$ = function $$DvtButtonLAFUtils$$$$createDrillDownButton$$($context$$389$$, $mapCallback$$3$$, $panZoomCanvas$$10$$, $resources$$13$$, $dis$$6_imageURIs$$4$$, $eventManager$$26$$, $styleMap$$46$$) {
  var $ena$$14$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$389$$, 0, $dis$$6_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$], $styleMap$$46$$), $ovr$$9$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$389$$, 1, $dis$$6_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_OVR$], $styleMap$$46$$), $dwn$$9$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$389$$, 2, $dis$$6_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_DWN$], $styleMap$$46$$);
  $dis$$6_imageURIs$$4$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$389$$, 0, $dis$$6_imageURIs$$4$$[D.$DvtButtonLAFUtils$$.$_DRILLDOWN_ENA$], $styleMap$$46$$);
  return new D.$DvtMapControlButton$$($context$$389$$, new D.$DvtButton$$($context$$389$$, $ena$$14$$, $ovr$$9$$, $dwn$$9$$, $dis$$6_imageURIs$$4$$), $mapCallback$$3$$, $panZoomCanvas$$10$$, 1, $resources$$13$$, $eventManager$$26$$)
};
D.$DvtButtonLAFUtils$$.$createResetButton$ = function $$DvtButtonLAFUtils$$$$createResetButton$$($context$$390$$, $mapCallback$$4$$, $panZoomCanvas$$11$$, $resources$$14$$, $dis$$7_imageURIs$$5$$, $eventManager$$27$$, $styleMap$$47$$) {
  var $ena$$15$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$390$$, 0, $dis$$7_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_RESET_ENA$], $styleMap$$47$$), $ovr$$10$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$390$$, 1, $dis$$7_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_RESET_OVR$], $styleMap$$47$$), $dwn$$10$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$390$$, 2, $dis$$7_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_RESET_DWN$], $styleMap$$47$$);
  $dis$$7_imageURIs$$5$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$390$$, 0, $dis$$7_imageURIs$$5$$[D.$DvtButtonLAFUtils$$.$_RESET_ENA$], $styleMap$$47$$);
  return new D.$DvtMapControlButton$$($context$$390$$, new D.$DvtButton$$($context$$390$$, $ena$$15$$, $ovr$$10$$, $dwn$$10$$, $dis$$7_imageURIs$$5$$), $mapCallback$$4$$, $panZoomCanvas$$11$$, 2, $resources$$14$$, $eventManager$$27$$)
};
D.$DvtButtonLAFUtils$$.$createZoomToFitButton$ = function $$DvtButtonLAFUtils$$$$createZoomToFitButton$$($context$$391$$, $panZoomCanvas$$12$$, $resources$$15$$, $eventManager$$28$$, $dwn$$11_imageURIs$$6$$, $styleMap$$48$$) {
  var $ena$$16$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$391$$, 0, $dwn$$11_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_ENA$], $styleMap$$48$$), $ovr$$11$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$391$$, 1, $dwn$$11_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_OVR$], $styleMap$$48$$);
  $dwn$$11_imageURIs$$6$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$391$$, 2, $dwn$$11_imageURIs$$6$$[D.$DvtButtonLAFUtils$$.$_ZOOMTOFIT_DWN$], $styleMap$$48$$);
  return new D.$DvtZoomToFitButton$$($context$$391$$, new D.$DvtButton$$($context$$391$$, $ena$$16$$, $ovr$$11$$, $dwn$$11_imageURIs$$6$$), $panZoomCanvas$$12$$, $resources$$15$$, $eventManager$$28$$)
};
D.$DvtButtonLAFUtils$$.$createZoomInButton$ = function $$DvtButtonLAFUtils$$$$createZoomInButton$$($context$$392$$, $panZoomCanvas$$13$$, $resources$$16$$, $eventManager$$29$$, $dis$$8_imageURIs$$7$$, $styleMap$$49$$) {
  var $ena$$17$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$392$$, 0, $dis$$8_imageURIs$$7$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_ENA$], $styleMap$$49$$), $ovr$$12$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$392$$, 1, $dis$$8_imageURIs$$7$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_OVR$], $styleMap$$49$$), $dwn$$12$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$392$$, 2, $dis$$8_imageURIs$$7$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_DWN$], $styleMap$$49$$);
  $dis$$8_imageURIs$$7$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$392$$, 3, $dis$$8_imageURIs$$7$$[D.$DvtButtonLAFUtils$$.$_ZOOMIN_DISABLED$], $styleMap$$49$$);
  return new D.$DvtZoomInButton$$($context$$392$$, new D.$DvtButton$$($context$$392$$, $ena$$17$$, $ovr$$12$$, $dwn$$12$$, $dis$$8_imageURIs$$7$$), $panZoomCanvas$$13$$, $resources$$16$$, $eventManager$$29$$)
};
D.$DvtButtonLAFUtils$$.$createZoomOutButton$ = function $$DvtButtonLAFUtils$$$$createZoomOutButton$$($context$$393$$, $panZoomCanvas$$14$$, $resources$$17$$, $eventManager$$30$$, $dis$$9_imageURIs$$8$$, $styleMap$$50$$) {
  var $ena$$18$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$393$$, 0, $dis$$9_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_ENA$], $styleMap$$50$$), $ovr$$13$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$393$$, 1, $dis$$9_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_OVR$], $styleMap$$50$$), $dwn$$13$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$393$$, 2, $dis$$9_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DWN$], $styleMap$$50$$);
  $dis$$9_imageURIs$$8$$ = D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$393$$, 3, $dis$$9_imageURIs$$8$$[D.$DvtButtonLAFUtils$$.$_ZOOMOUT_DISABLED$], $styleMap$$50$$);
  return new D.$DvtZoomOutButton$$($context$$393$$, new D.$DvtButton$$($context$$393$$, $ena$$18$$, $ovr$$13$$, $dwn$$13$$, $dis$$9_imageURIs$$8$$), $panZoomCanvas$$14$$, $resources$$17$$, $eventManager$$30$$)
};
D.$DvtButtonLAFUtils$$.$createLayoutItemButtonState$ = function $$DvtButtonLAFUtils$$$$createLayoutItemButtonState$$($context$$394_image$$18$$, $attrb_bname$$4$$, $state$$77$$, $images$$18$$, $styleMap$$51$$) {
  var $r$$40$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$51$$, "buttonRadius", 0), $w$$31$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$51$$, "buttonWidth", 0), $h$$22$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$51$$, "buttonWidth", 0), $shape$$74$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($context$$394_image$$18$$, $r$$40$$, $w$$31$$, $h$$22$$, $styleMap$$51$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$77$$, $shape$$74$$, $w$$31$$, $h$$22$$ + 2 * $r$$40$$, $styleMap$$51$$, D.$JSCompiler_alias_TRUE$$);
  $attrb_bname$$4$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$394_image$$18$$, $state$$77$$, $attrb_bname$$4$$);
  ($context$$394_image$$18$$ = D.$DvtButtonLAFUtils$$.$_loadIcon$($context$$394_image$$18$$, $images$$18$$[$attrb_bname$$4$$], $w$$31$$, $h$$22$$)) && $shape$$74$$.$addChild$($context$$394_image$$18$$);
  return $shape$$74$$
};
D.$DvtButtonLAFUtils$$.$_getLayoutURI$ = function $$DvtButtonLAFUtils$$$$_getLayoutURI$$($context$$395$$, $state$$78$$, $attrb$$1_bname$$5$$, $bSel$$3$$) {
  var $r2l$$ = "";
  0 == $state$$78$$ ? $state$$78$$ = D.$DvtButtonLAFUtils$$.$_UP$ : 1 == $state$$78$$ ? $state$$78$$ = D.$DvtButtonLAFUtils$$.$_OVER$ : 2 == $state$$78$$ && ($state$$78$$ = D.$DvtButtonLAFUtils$$.$_DOWN$);
  $bSel$$3$$ && ($attrb$$1_bname$$5$$ += D.$DvtButtonLAFUtils$$.$_SEL$, (0,D.$DvtAgent$isRightToLeft$$)($context$$395$$) && ($r2l$$ = D.$DvtButtonLAFUtils$$.$_R2L$));
  return $attrb$$1_bname$$5$$ + ($state$$78$$ + $r2l$$)
};
D.$DvtButtonLAFUtils$$.$createPanelCardButtonState$ = function $$DvtButtonLAFUtils$$$$createPanelCardButtonState$$($context$$396$$, $state$$79$$, $styleMap$$52$$, $images$$19$$) {
  var $attrb$$2$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$396$$, $state$$79$$, D.$DvtButtonLAFUtils$$.$_SYNC$, D.$JSCompiler_alias_TRUE$$);
  return D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$396$$, $state$$79$$, $images$$19$$[$attrb$$2$$], $styleMap$$52$$)
};
D.$DvtButtonLAFUtils$$.$createPanelCardSyncItemState$ = function $$DvtButtonLAFUtils$$$$createPanelCardSyncItemState$$($base$$6_context$$397$$, $state$$80$$, $ww$$103$$, $hh$$86$$, $styleMap$$53$$) {
  var $r$$41$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$53$$, "buttonRadius", 0);
  $base$$6_context$$397$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($base$$6_context$$397$$, $r$$41$$, $ww$$103$$, $hh$$86$$, $styleMap$$53$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$80$$, $base$$6_context$$397$$, $ww$$103$$, $hh$$86$$ + 2 * $r$$41$$, $styleMap$$53$$, D.$JSCompiler_alias_TRUE$$);
  return $base$$6_context$$397$$
};
D.$DvtButtonLAFUtils$$.$createControlButtonState$ = function $$DvtButtonLAFUtils$$$$createControlButtonState$$($context$$398$$, $attrb$$3_bname$$6$$, $state$$81$$, $images$$21$$, $styleMap$$54$$) {
  $attrb$$3_bname$$6$$ = D.$DvtButtonLAFUtils$$.$_getLayoutURI$($context$$398$$, $state$$81$$, $attrb$$3_bname$$6$$);
  return D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$($context$$398$$, $state$$81$$, $images$$21$$[$attrb$$3_bname$$6$$], $styleMap$$54$$)
};
D.$DvtButtonLAFUtils$$.$createExpandButton$ = function $$DvtButtonLAFUtils$$$$createExpandButton$$($context$$399$$, $dwn$$14_imageURIs$$9$$, $h$$23$$, $styleMap$$55$$, $bR2L$$3$$) {
  var $ena$$19$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$399$$, 0, $h$$23$$, $dwn$$14_imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_EXPAND_ENA$], $styleMap$$55$$, $bR2L$$3$$), $ovr$$14$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$399$$, 1, $h$$23$$, $dwn$$14_imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_EXPAND_OVR$], $styleMap$$55$$, $bR2L$$3$$);
  $dwn$$14_imageURIs$$9$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$399$$, 2, $h$$23$$, $dwn$$14_imageURIs$$9$$[D.$DvtButtonLAFUtils$$.$_EXPAND_DWN$], $styleMap$$55$$, $bR2L$$3$$);
  return new D.$DvtButton$$($context$$399$$, $ena$$19$$, $ovr$$14$$, $dwn$$14_imageURIs$$9$$)
};
D.$DvtButtonLAFUtils$$.$createCollapseButton$ = function $$DvtButtonLAFUtils$$$$createCollapseButton$$($context$$400$$, $dwn$$15_imageURIs$$10$$, $h$$24$$, $styleMap$$56$$, $bR2L$$4$$) {
  var $ena$$20$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$400$$, 0, $h$$24$$, $dwn$$15_imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_ENA$], $styleMap$$56$$, $bR2L$$4$$), $ovr$$15$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$400$$, 1, $h$$24$$, $dwn$$15_imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_OVR$], $styleMap$$56$$, $bR2L$$4$$);
  $dwn$$15_imageURIs$$10$$ = D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$($context$$400$$, 2, $h$$24$$, $dwn$$15_imageURIs$$10$$[D.$DvtButtonLAFUtils$$.$_COLLAPSE_DWN$], $styleMap$$56$$, $bR2L$$4$$);
  return new D.$DvtButton$$($context$$400$$, $ena$$20$$, $ovr$$15$$, $dwn$$15_imageURIs$$10$$)
};
D.$DvtButtonLAFUtils$$.$createQuickQueryButton$ = function $$DvtButtonLAFUtils$$$$createQuickQueryButton$$($context$$401$$, $imageURIs$$11$$) {
  var $ena$$21$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$401$$, $imageURIs$$11$$[D.$DvtButtonLAFUtils$$.$_QUICKQUERY_ENA$]), $ovr$$16$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$401$$, $imageURIs$$11$$[D.$DvtButtonLAFUtils$$.$_QUICKQUERY_OVR$]), $dwn$$16$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$401$$, $imageURIs$$11$$[D.$DvtButtonLAFUtils$$.$_QUICKQUERY_DWN$]);
  return new D.$DvtButton$$($context$$401$$, $ena$$21$$, $ovr$$16$$, $dwn$$16$$)
};
D.$DvtButtonLAFUtils$$.$createClearResultsButton$ = function $$DvtButtonLAFUtils$$$$createClearResultsButton$$($context$$402$$, $imageURIs$$12$$) {
  var $ena$$22$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$402$$, $imageURIs$$12$$[D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_ENA$]), $ovr$$17$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$402$$, $imageURIs$$12$$[D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_OVR$]), $dwn$$17$$ = D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$($context$$402$$, $imageURIs$$12$$[D.$DvtButtonLAFUtils$$.$_CLEARRESULTS_DWN$]);
  return new D.$DvtButton$$($context$$402$$, $ena$$22$$, $ovr$$17$$, $dwn$$17$$)
};
D.$DvtButtonLAFUtils$$.$_createButtonBaseImage$ = function $$DvtButtonLAFUtils$$$$_createButtonBaseImage$$($context$$403_image$$19$$, $base$$7_state$$82$$, $uri$$13$$, $styleMap$$57$$) {
  var $w$$32$$, $h$$25$$, $r$$42$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$57$$, "buttonRadius", 0);
  if("undefined" === $w$$32$$ || $w$$32$$ == D.$JSCompiler_alias_NULL$$) {
    $w$$32$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$57$$, "buttonWidth", 0)
  }
  if("undefined" === $h$$25$$ || $h$$25$$ == D.$JSCompiler_alias_NULL$$) {
    $h$$25$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$57$$, "buttonWidth", 0)
  }
  $base$$7_state$$82$$ = D.$DvtButtonLAFUtils$$.$_drawBaseButton$($context$$403_image$$19$$, $base$$7_state$$82$$, $r$$42$$, $w$$32$$, $h$$25$$, $styleMap$$57$$);
  ($context$$403_image$$19$$ = D.$DvtButtonLAFUtils$$.$_loadIcon$($context$$403_image$$19$$, $uri$$13$$, $w$$32$$, $h$$25$$)) && $base$$7_state$$82$$.$addChild$($context$$403_image$$19$$);
  return $base$$7_state$$82$$
};
D.$DvtButtonLAFUtils$$.$_loadIcon$ = function $$DvtButtonLAFUtils$$$$_loadIcon$$($context$$404$$, $uri$$14$$, $buttonWidth$$3$$, $buttonHeight$$1$$) {
  var $image$$20$$ = new D.$DvtImage$$($context$$404$$, $uri$$14$$);
  $image$$20$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  D.$DvtImageLoader$$.$loadImage$($context$$404$$, $uri$$14$$, function($context$$404$$) {
    $context$$404$$ != D.$JSCompiler_alias_NULL$$ && ($context$$404$$.width && $context$$404$$.height) && ($image$$20$$.$setWidth$($context$$404$$.width), $image$$20$$.$setHeight$($context$$404$$.height), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($image$$20$$, $buttonWidth$$3$$ / 2 - $context$$404$$.width / 2, $buttonHeight$$1$$ / 2 - $context$$404$$.height / 2))
  });
  return $image$$20$$
};
D.$DvtButtonLAFUtils$$.$_createPanButtonState$ = function $$DvtButtonLAFUtils$$$$_createPanButtonState$$($context$$405_image$$21$$, $uri$$15$$, $styleMap$$58$$) {
  var $mc$$ = new D.$DvtContainer$$($context$$405_image$$21$$), $hitZone$$ = new D.$DvtCircle$$($context$$405_image$$21$$, 20, 20, 20);
  $hitZone$$.$setAlpha$(0);
  $hitZone$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$58$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $mc$$.$addChild$($hitZone$$);
  ($context$$405_image$$21$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$405_image$$21$$, $uri$$15$$)) && $mc$$.$addChild$($context$$405_image$$21$$);
  return $mc$$
};
D.$DvtButtonLAFUtils$$.$_createRecenterButtonState$ = function $$DvtButtonLAFUtils$$$$_createRecenterButtonState$$($context$$406_image$$22$$, $uri$$16$$, $styleMap$$59$$) {
  var $shape$$77$$ = new D.$DvtContainer$$($context$$406_image$$22$$), $hitZone$$1$$ = new D.$DvtCircle$$($context$$406_image$$22$$, 11, 11, 8);
  $hitZone$$1$$.$setAlpha$(0);
  $hitZone$$1$$.$setSolidFill$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$59$$, "background-color", D.$JSCompiler_alias_NULL$$));
  $shape$$77$$.$addChild$($hitZone$$1$$);
  ($context$$406_image$$22$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$406_image$$22$$, $uri$$16$$)) && $shape$$77$$.$addChild$($context$$406_image$$22$$);
  return $shape$$77$$
};
D.$DvtButtonLAFUtils$$.$_createCollapseExpandButtonState$ = function $$DvtButtonLAFUtils$$$$_createCollapseExpandButtonState$$($context$$407_iconLoader$$, $sprite_state$$83$$, $nh$$, $imageW_uri$$17$$, $styleMap$$60$$, $bR2L$$5_imageH$$) {
  $nh$$ || ($nh$$ = 47);
  $sprite_state$$83$$ = D.$DvtButtonLAFUtils$$.$_drawOpenCloseButtonHelper$($context$$407_iconLoader$$, $sprite_state$$83$$, $nh$$, $styleMap$$60$$, $bR2L$$5_imageH$$);
  if($context$$407_iconLoader$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$407_iconLoader$$, $imageW_uri$$17$$)) {
    $imageW_uri$$17$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$60$$, "imageWidth", 0), $bR2L$$5_imageH$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$60$$, "imageHeight", 0), $sprite_state$$83$$.$addChild$($context$$407_iconLoader$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$407_iconLoader$$, ((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$60$$, "openCloseButtonWidth", 0) - $imageW_uri$$17$$) / 2, ($nh$$ - $bR2L$$5_imageH$$) / 2)
  }
  return $sprite_state$$83$$
};
D.$DvtButtonLAFUtils$$.$_createQuickQueryButtonState$ = function $$DvtButtonLAFUtils$$$$_createQuickQueryButtonState$$($context$$408$$, $uri$$18$$) {
  var $iconLoader$$1$$ = D.$DvtImageLAFUtils$$.$loadIcon$($context$$408$$, $uri$$18$$);
  $iconLoader$$1$$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  return $iconLoader$$1$$
};
D.$DvtButtonLAFUtils$$.$createPanButtonBackground$ = function $$DvtButtonLAFUtils$$$$createPanButtonBackground$$($context$$409$$, $styleMap$$61$$) {
  var $shape$$78$$ = D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$($context$$409$$), $bgColor$$8$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$61$$, "background-color", D.$JSCompiler_alias_NULL$$), $borderColor$$41$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$61$$, "border-color", D.$JSCompiler_alias_NULL$$);
  "solid" == (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$61$$, "fill-type", D.$JSCompiler_alias_NULL$$) ? ($shape$$78$$.$setSolidStroke$($borderColor$$41$$), $shape$$78$$.$setSolidFill$($bgColor$$8$$)) : ($shape$$78$$.$setStroke$(new D.$DvtLinearGradientStroke$$(36, ["#8D93A5", "#E0EAEB", $borderColor$$41$$], [1, 1, 1], [0, 125 / 255, 1], [0, 0, 40, 40], 1)), $shape$$78$$.$setFill$(new D.$DvtLinearGradientFill$$(90, [$bgColor$$8$$, $bgColor$$8$$, "#5A83BE", $bgColor$$8$$], [0.9, 0.1, 0, 0.7], [0, 
  105 / 255, 150 / 255, 1], [0, 0, 40, 40])));
  return $shape$$78$$
};
D.$DvtButtonLAFUtils$$.$createPanButtonUnderlay$ = function $$DvtButtonLAFUtils$$$$createPanButtonUnderlay$$($context$$410$$, $styleMap$$62$$) {
  var $shape$$79$$ = D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$($context$$410$$), $color$$61$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$62$$, "background-color", D.$JSCompiler_alias_NULL$$);
  $shape$$79$$.$setSolidStroke$($color$$61$$);
  $shape$$79$$.$setSolidFill$($color$$61$$);
  return $shape$$79$$
};
D.$DvtButtonLAFUtils$$.$_drawPanButtonBase$ = function $$DvtButtonLAFUtils$$$$_drawPanButtonBase$$($context$$411$$) {
  var $cmds$$14$$ = window.DvtPathUtils.moveTo(40, 20) + window.DvtPathUtils.$quadTo$(40, 20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + window.DvtPathUtils.$quadTo$(20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20, 40) + window.DvtPathUtils.$quadTo$(20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + window.DvtPathUtils.$quadTo$(0, 
  20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20) + window.DvtPathUtils.$quadTo$(0, 20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + window.DvtPathUtils.$quadTo$(20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20, 0) + window.DvtPathUtils.$quadTo$(20 * D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 0, 20 * D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20, 20 * -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ + 20) + window.DvtPathUtils.$quadTo$(40, 
  20 * -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ + 20, 40, 20) + window.DvtPathUtils.closePath();
  return new D.$DvtPath$$($context$$411$$, $cmds$$14$$, "draw_pan_button")
};
D.$DvtButtonLAFUtils$$.$_setGradientBorder$ = function $$DvtButtonLAFUtils$$$$_setGradientBorder$$($shape$$80$$, $ww$$106$$, $hh$$89$$, $xx$$46$$, $yy$$46$$) {
  $shape$$80$$.$setSolidStroke$("#FFFFFF");
  $shape$$80$$.$setStroke$(new D.$DvtLinearGradientStroke$$(63, ["#8D93A5", "#E0EAEB", "#FFFFFF"], [1, 1, 1], [0, 155 / 255, 1], [$xx$$46$$, $yy$$46$$, $ww$$106$$, $hh$$89$$], 1))
};
D.$DvtButtonLAFUtils$$.$_setButtonColors$ = function $$DvtButtonLAFUtils$$$$_setButtonColors$$($state$$85$$, $shape$$81$$, $ww$$107$$, $hh$$90$$, $styleMap$$63$$, $isDropdownItem$$) {
  if((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$63$$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) {
    !$isDropdownItem$$ || $isDropdownItem$$ && 0 == $state$$85$$ ? (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($shape$$81$$) : (1 == $state$$85$$ || 2 == $state$$85$$) && $shape$$81$$.$setFill$(new D.$DvtSolidFill$$("#EBECED"))
  }else {
    if("skyros" == $styleMap$$63$$.skin) {
      switch($state$$85$$) {
        case 1:
          $shape$$81$$.$setFill$(new D.$DvtSolidFill$$("#FFFFFF", 0.7));
          $shape$$81$$.$setStroke$(new D.$DvtSolidStroke$$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$63$$, "border-color", D.$JSCompiler_alias_NULL$$)));
          break;
        case 2:
          $shape$$81$$.$setFill$(new D.$DvtSolidFill$$("#B3C6DB"));
          $shape$$81$$.$setStroke$(new D.$DvtSolidStroke$$((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$63$$, "border-color", D.$JSCompiler_alias_NULL$$)));
          break;
        default:
          (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($shape$$81$$)
      }
    }else {
      var $fill_colors$$10$$, $fill_alphas$$10$$, $fill_ratios$$10$$;
      switch($state$$85$$) {
        case 3:
        ;
        case 0:
          $fill_colors$$10$$ = ["#5B868A", "#FFFFFF", "#FFFFFF", "#5B868A"];
          $fill_alphas$$10$$ = [0.01, 0, 0.05, 0.01];
          $fill_ratios$$10$$ = [0, 120 / 255, 130 / 255, 1];
          break;
        case 1:
          D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$81$$, $ww$$107$$, $hh$$90$$, 0, 0);
          $fill_colors$$10$$ = ["#FFFFFF", "#4671B0", "#4671B0", "#FFFFFF"];
          $fill_alphas$$10$$ = [0.5, 0.2, 0.1, 0.7];
          $fill_ratios$$10$$ = [0, 120 / 255, 130 / 255, 1];
          break;
        case 2:
          D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$81$$, $ww$$107$$, $hh$$90$$, 0, 0), $fill_colors$$10$$ = ["#E0EAEB", "#5B868A", "#4671B0"], $fill_alphas$$10$$ = [0.1, 0.3, 0.6], $fill_ratios$$10$$ = [0, 130 / 255, 1]
      }
      $shape$$81$$.$setFill$(new D.$DvtLinearGradientFill$$(90, $fill_colors$$10$$, $fill_alphas$$10$$, $fill_ratios$$10$$, [0, 0, $ww$$107$$, $hh$$90$$]))
    }
  }
};
D.$DvtButtonLAFUtils$$.$_setCloseButtonColors$ = function $$DvtButtonLAFUtils$$$$_setCloseButtonColors$$($fill$$51_state$$86$$, $shape$$82$$, $bgColor$$9_ww$$108$$, $hh$$91$$, $styleMap$$64$$) {
  if((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$64$$, "panelDrawerStyles", D.$JSCompiler_alias_NULL$$)) {
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($shape$$82$$)
  }else {
    var $borderColor$$42_stroke$$83$$;
    $borderColor$$42_stroke$$83$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$64$$, "border-color", D.$JSCompiler_alias_NULL$$);
    if("solid" == (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$64$$, "fill-type", D.$JSCompiler_alias_NULL$$)) {
      $bgColor$$9_ww$$108$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$64$$, "background-color", D.$JSCompiler_alias_NULL$$);
      switch($fill$$51_state$$86$$) {
        case 0:
          window.bgAlpha = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$64$$, "backgroundAlpha", 1);
          window.strokeAlpha = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$64$$, "borderAlpha", 1);
          break;
        case 2:
        ;
        case 1:
          window.bgAlpha = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$64$$, "backgroundHoverAlpha", 1), window.strokeAlpha = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$64$$, "borderHoverAlpha", 1)
      }
      $fill$$51_state$$86$$ = new D.$DvtSolidFill$$($bgColor$$9_ww$$108$$, window.bgAlpha);
      $borderColor$$42_stroke$$83$$ = new D.$DvtSolidStroke$$($borderColor$$42_stroke$$83$$, window.strokeAlpha)
    }else {
      var $fill_colors$$11$$, $fill_alphas$$11$$, $fill_ratios$$11$$;
      switch($fill$$51_state$$86$$) {
        case 0:
          $fill_colors$$11$$ = ["#FFFFFF", "#5B868A", "#5B868A"];
          $fill_alphas$$11$$ = [0, 0.2, 0.3];
          $fill_ratios$$11$$ = [0, 130 / 255, 1];
          break;
        case 1:
          $fill_colors$$11$$ = ["#FFFFFF", "#FFFFFF", "#4671B0", "#4671B0"];
          $fill_alphas$$11$$ = [0.1, 0.2, 0.1, 0.6];
          $fill_ratios$$11$$ = [0, 120 / 255, 130 / 255, 1];
          break;
        case 2:
          $fill_colors$$11$$ = ["#4671B0", "#5B868A", "#5B868A"], $fill_alphas$$11$$ = [0.5, 0.2, 0.4], $fill_ratios$$11$$ = [0, 130 / 255, 1]
      }
      $fill$$51_state$$86$$ = new D.$DvtLinearGradientFill$$(0, $fill_colors$$11$$, $fill_alphas$$11$$, $fill_ratios$$11$$, [0, 0, $bgColor$$9_ww$$108$$, $hh$$91$$]);
      $borderColor$$42_stroke$$83$$ = new D.$DvtSolidStroke$$($borderColor$$42_stroke$$83$$, 1, 0.8)
    }
    $shape$$82$$.$setStroke$($borderColor$$42_stroke$$83$$);
    $shape$$82$$.$setFill$($fill$$51_state$$86$$)
  }
};
D.$DvtButtonLAFUtils$$.$_setSliderButtonColors$ = function $$DvtButtonLAFUtils$$$$_setSliderButtonColors$$($state$$87$$, $shape$$83$$, $ww$$109$$, $hh$$92$$, $xx$$49$$, $yy$$49$$) {
  var $fill_colors$$12$$, $fill_alphas$$12$$, $fill_ratios$$12$$;
  switch($state$$87$$) {
    case 0:
      $shape$$83$$.$setSolidStroke$("#FFFFFF", 1, 0.25);
      $fill_colors$$12$$ = ["#FFFFFF", "#4671B0", "#E0EAEB", "#FFFFFF"];
      $fill_alphas$$12$$ = [0.6, 0.3, 0.3, 0.8];
      $fill_ratios$$12$$ = [0, 125 / 255, 130 / 255, 1];
      break;
    case 1:
      D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$83$$, $ww$$109$$, $hh$$92$$, $xx$$49$$, $yy$$49$$);
      $fill_colors$$12$$ = ["#4671B0", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
      $fill_alphas$$12$$ = [0.4, 0.3, 0.7, 1];
      $fill_ratios$$12$$ = [0, 70 / 255, 200 / 255, 1];
      break;
    case 2:
      D.$DvtButtonLAFUtils$$.$_setGradientBorder$($shape$$83$$, $ww$$109$$, $hh$$92$$, $xx$$49$$, $yy$$49$$), $fill_colors$$12$$ = ["#FFFFFF", "#4671B0", "#E0EAEB"], $fill_alphas$$12$$ = [0.6, 0.5, 0.8], $fill_ratios$$12$$ = [0, 130 / 255, 1]
  }
  $shape$$83$$.$setFill$(new D.$DvtLinearGradientFill$$(90, $fill_colors$$12$$, $fill_alphas$$12$$, $fill_ratios$$12$$, [$xx$$49$$, $yy$$49$$, $ww$$109$$, $hh$$92$$]))
};
D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$ = function $$DvtButtonLAFUtils$$$$GetButtonPathCommands$$($buttonWidth$$5$$, $buttonHeight$$2$$, $r$$45$$, $bidi$$5$$) {
  return $bidi$$5$$ ? ["M", $buttonWidth$$5$$, 0, "L", $r$$45$$, 0, "A", $r$$45$$, $r$$45$$, 0, 0, 0, 0, $r$$45$$, "L", 0, $buttonHeight$$2$$ - $r$$45$$, "A", $r$$45$$, $r$$45$$, 0, 0, 0, $r$$45$$, $buttonHeight$$2$$, "L", $buttonWidth$$5$$, $buttonHeight$$2$$] : ["M", 0, 0, "L", $buttonWidth$$5$$ - $r$$45$$, 0, "A", $r$$45$$, $r$$45$$, 0, 0, 1, $buttonWidth$$5$$, $r$$45$$, "L", $buttonWidth$$5$$, $buttonHeight$$2$$ - $r$$45$$, "A", $r$$45$$, $r$$45$$, 0, 0, 1, $buttonWidth$$5$$ - $r$$45$$, $buttonHeight$$2$$, 
  "L", 0, $buttonHeight$$2$$]
};
D.$DvtButtonLAFUtils$$.$_drawOpenCloseButtonHelper$ = function $$DvtButtonLAFUtils$$$$_drawOpenCloseButtonHelper$$($context$$413_shape$$84$$, $state$$88$$, $buttonHeight$$3_nh$$1$$, $styleMap$$65$$, $bR2L$$6$$) {
  $buttonHeight$$3_nh$$1$$ || ($buttonHeight$$3_nh$$1$$ = 47);
  var $r$$46$$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)($styleMap$$65$$, "border-radius", 0)), $buttonWidth$$6$$ = (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$65$$, "openCloseButtonWidth", 0);
  $buttonHeight$$3_nh$$1$$ = window.Math.max($buttonHeight$$3_nh$$1$$, (0,D.$DvtStyleUtils$getStyle$$)($styleMap$$65$$, "buttonHeight", $buttonHeight$$3_nh$$1$$));
  $context$$413_shape$$84$$ = new D.$DvtPath$$($context$$413_shape$$84$$, D.$DvtButtonLAFUtils$$.$GetButtonPathCommands$($buttonWidth$$6$$, $buttonHeight$$3_nh$$1$$, $r$$46$$, $bR2L$$6$$));
  D.$DvtButtonLAFUtils$$.$_setCloseButtonColors$($state$$88$$, $context$$413_shape$$84$$, $buttonWidth$$6$$, $buttonHeight$$3_nh$$1$$, $styleMap$$65$$);
  return $context$$413_shape$$84$$
};
D.$DvtButtonLAFUtils$$.$_drawBaseButton$ = function $$DvtButtonLAFUtils$$$$_drawBaseButton$$($context$$414_shape$$85$$, $state$$89$$, $r$$47$$, $ww$$110$$, $hh$$93$$, $styleMap$$66$$) {
  $context$$414_shape$$85$$ = D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$($context$$414_shape$$85$$, $r$$47$$, $ww$$110$$, $hh$$93$$, $styleMap$$66$$);
  D.$DvtButtonLAFUtils$$.$_setButtonColors$($state$$89$$, $context$$414_shape$$85$$, $ww$$110$$, $hh$$93$$ + 2 * $r$$47$$, $styleMap$$66$$);
  return $context$$414_shape$$85$$
};
D.$DvtButtonLAFUtils$$.$_createBaseButtonShape$ = function $$DvtButtonLAFUtils$$$$_createBaseButtonShape$$($context$$415$$, $r$$48$$, $ww$$111$$, $hh$$94$$, $styleMap$$67_x$$213$$) {
  if("skyros" == $styleMap$$67_x$$213$$.skin) {
    return new D.$DvtRect$$($context$$415$$, 0, 0, $ww$$111$$, $hh$$94$$)
  }
  $ww$$111$$ -= 2 * $r$$48$$;
  $hh$$94$$ -= 2 * $r$$48$$;
  $styleMap$$67_x$$213$$ = $ww$$111$$ + $r$$48$$;
  var $y$$185$$ = $hh$$94$$ + $r$$48$$, $cmds$$15$$ = window.DvtPathUtils.moveTo($styleMap$$67_x$$213$$ + $r$$48$$, $y$$185$$) + window.DvtPathUtils.$quadTo$($r$$48$$ + $styleMap$$67_x$$213$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$48$$ + $y$$185$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$48$$ + $styleMap$$67_x$$213$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$48$$ + $y$$185$$) + window.DvtPathUtils.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$48$$ + $styleMap$$67_x$$213$$, $r$$48$$ + $y$$185$$, 
  $styleMap$$67_x$$213$$, $r$$48$$ + $y$$185$$) + window.DvtPathUtils.lineTo($styleMap$$67_x$$213$$, $y$$185$$ + $r$$48$$) + window.DvtPathUtils.lineTo($styleMap$$67_x$$213$$ - $ww$$111$$, $r$$48$$ + $y$$185$$);
  $styleMap$$67_x$$213$$ -= $ww$$111$$;
  $cmds$$15$$ += window.DvtPathUtils.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$48$$ + $styleMap$$67_x$$213$$, $r$$48$$ + $y$$185$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$48$$ + $styleMap$$67_x$$213$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$48$$ + $y$$185$$) + window.DvtPathUtils.$quadTo$(-$r$$48$$ + $styleMap$$67_x$$213$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$48$$ + $y$$185$$, -$r$$48$$ + $styleMap$$67_x$$213$$, $y$$185$$) + window.DvtPathUtils.lineTo($styleMap$$67_x$$213$$ - $r$$48$$, 
  $y$$185$$) + window.DvtPathUtils.lineTo($styleMap$$67_x$$213$$ - $r$$48$$, $y$$185$$ - $hh$$94$$);
  $y$$185$$ -= $hh$$94$$;
  $cmds$$15$$ += window.DvtPathUtils.$quadTo$(-$r$$48$$ + $styleMap$$67_x$$213$$, -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$48$$ + $y$$185$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$48$$ + $styleMap$$67_x$$213$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$48$$ + $y$$185$$) + window.DvtPathUtils.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$48$$ + $styleMap$$67_x$$213$$, -$r$$48$$ + $y$$185$$, $styleMap$$67_x$$213$$, -$r$$48$$ + $y$$185$$) + window.DvtPathUtils.lineTo($styleMap$$67_x$$213$$, -$r$$48$$ + 
  $y$$185$$) + window.DvtPathUtils.lineTo($styleMap$$67_x$$213$$ + $ww$$111$$, -$r$$48$$ + $y$$185$$);
  $styleMap$$67_x$$213$$ += $ww$$111$$;
  $cmds$$15$$ += window.DvtPathUtils.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$48$$ + $styleMap$$67_x$$213$$, -$r$$48$$ + $y$$185$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$48$$ + $styleMap$$67_x$$213$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$48$$ + $y$$185$$) + window.DvtPathUtils.$quadTo$($r$$48$$ + $styleMap$$67_x$$213$$, -D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$48$$ + $y$$185$$, $r$$48$$ + $styleMap$$67_x$$213$$, $y$$185$$) + window.DvtPathUtils.lineTo($styleMap$$67_x$$213$$ + $r$$48$$, 
  $y$$185$$ + $hh$$94$$) + window.DvtPathUtils.closePath();
  return new D.$DvtPath$$($context$$415$$, $cmds$$15$$)
};
D.$DvtButtonLAFUtils$$.$drawDropdownShape$ = function $$DvtButtonLAFUtils$$$$drawDropdownShape$$($context$$416$$, $ww$$112$$, $hh$$95$$, $r$$49_styleMap$$68$$) {
  $r$$49_styleMap$$68$$ = (0,D.$DvtStyleUtils$getStyle$$)($r$$49_styleMap$$68$$, "radius", 0);
  $ww$$112$$ -= 2 * $r$$49_styleMap$$68$$;
  $hh$$95$$ -= $r$$49_styleMap$$68$$;
  var $x$$214$$ = $ww$$112$$ + $r$$49_styleMap$$68$$, $y$$186$$ = $hh$$95$$, $cmds$$16$$ = window.DvtPathUtils.moveTo($x$$214$$ + $r$$49_styleMap$$68$$, $y$$186$$) + window.DvtPathUtils.$quadTo$($r$$49_styleMap$$68$$ + $x$$214$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$49_styleMap$$68$$ + $y$$186$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$49_styleMap$$68$$ + $x$$214$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$49_styleMap$$68$$ + $y$$186$$) + window.DvtPathUtils.$quadTo$(D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * 
  $r$$49_styleMap$$68$$ + $x$$214$$, $r$$49_styleMap$$68$$ + $y$$186$$, $x$$214$$, $r$$49_styleMap$$68$$ + $y$$186$$) + window.DvtPathUtils.lineTo($x$$214$$, $r$$49_styleMap$$68$$ + $y$$186$$) + window.DvtPathUtils.lineTo($x$$214$$ - $ww$$112$$, $r$$49_styleMap$$68$$ + $y$$186$$), $x$$214$$ = $x$$214$$ - $ww$$112$$, $cmds$$16$$ = $cmds$$16$$ + (window.DvtPathUtils.$quadTo$(-D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$49_styleMap$$68$$ + $x$$214$$, $r$$49_styleMap$$68$$ + $y$$186$$, -D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * 
  $r$$49_styleMap$$68$$ + $x$$214$$, D.$DvtButtonLAFUtils$$.$SIN_PI_4$ * $r$$49_styleMap$$68$$ + $y$$186$$) + window.DvtPathUtils.$quadTo$(-$r$$49_styleMap$$68$$ + $x$$214$$, D.$DvtButtonLAFUtils$$.$TAN_PI_8$ * $r$$49_styleMap$$68$$ + $y$$186$$, -$r$$49_styleMap$$68$$ + $x$$214$$, $y$$186$$) + window.DvtPathUtils.lineTo(-$r$$49_styleMap$$68$$ + $x$$214$$, $y$$186$$) + window.DvtPathUtils.lineTo(-$r$$49_styleMap$$68$$ + $x$$214$$, $y$$186$$ - $hh$$95$$)), $y$$186$$ = $y$$186$$ - $hh$$95$$, $cmds$$16$$ = 
  $cmds$$16$$ + (window.DvtPathUtils.lineTo($x$$214$$ + $ww$$112$$ + $r$$49_styleMap$$68$$, $y$$186$$) + window.DvtPathUtils.lineTo($x$$214$$ + $ww$$112$$ + $r$$49_styleMap$$68$$, $y$$186$$ + $hh$$95$$) + window.DvtPathUtils.closePath());
  return new D.$DvtPath$$($context$$416$$, $cmds$$16$$)
};
D.$DvtButtonLAFUtils$$.$dropShadowFilter$ = function $$DvtButtonLAFUtils$$$$dropShadowFilter$$($context$$417$$, $t$$40$$) {
  var $filter$$1$$ = new window.DvtDropShadowFilter(7, 45, "#5A83BE", 0.9, 14, 14, 1, 3, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$), $filterArray$$ = [];
  $filterArray$$.push($filter$$1$$);
  $t$$40$$.filters = $filterArray$$
};
D.$DvtButtonLAFUtils$$.$_getDimForced$ = function $$DvtButtonLAFUtils$$$$_getDimForced$$($context$$418$$, $obj$$187$$) {
  $obj$$187$$ instanceof D.$DvtButton$$ && ($obj$$187$$ = $obj$$187$$.$getChildAt$(0));
  return(0,D.$DvtDisplayableUtils$_getDimForced$$)($context$$418$$, $obj$$187$$)
};
D.$DvtButtonLAFUtils$$.$parseStyle$ = function $$DvtButtonLAFUtils$$$$parseStyle$$($dispObj$$29$$, $buttonStyle$$29$$) {
  var $fillType$$12_linearGradient$$4$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_FILL_TYPE$, $borderColor$$43_stroke$$84$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_BORDER_COLOR$, $backgroundColor$$24$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$, $background$$11$$;
  $buttonStyle$$29$$ && ($buttonStyle$$29$$.$getStyle$("fill-type") && ($fillType$$12_linearGradient$$4$$ = $buttonStyle$$29$$.$getStyle$("fill-type")), $buttonStyle$$29$$.$getStyle$("border-color") && ($borderColor$$43_stroke$$84$$ = $buttonStyle$$29$$.$getStyle$("border-color")), $buttonStyle$$29$$.$getStyle$("background-color") && ($backgroundColor$$24$$ = $buttonStyle$$29$$.$getStyle$("background-color")), $buttonStyle$$29$$.$getStyle$("background") && ($background$$11$$ = $buttonStyle$$29$$.$getStyle$("background")));
  var $borderColor$$43_stroke$$84$$ = new D.$DvtSolidStroke$$($borderColor$$43_stroke$$84$$), $fill$$52_fill_colors$$13_midColor$$11$$;
  if("solid" == $fillType$$12_linearGradient$$4$$) {
    $fill$$52_fill_colors$$13_midColor$$11$$ = new D.$DvtSolidFill$$($backgroundColor$$24$$)
  }else {
    var $endColor$$16_fill_alphas$$13$$, $fill_ratios$$13$$, $degree$$3$$;
    if($background$$11$$ && 0 <= $background$$11$$.indexOf("linear-gradient")) {
      if($fillType$$12_linearGradient$$4$$ = (0,D.$DvtGradientParser$parseCSSGradient$$)($background$$11$$)) {
        $degree$$3$$ = $fillType$$12_linearGradient$$4$$.$getAngle$(), $fill$$52_fill_colors$$13_midColor$$11$$ = $fillType$$12_linearGradient$$4$$.$_arColors$, $endColor$$16_fill_alphas$$13$$ = $fillType$$12_linearGradient$$4$$.$_arAlphas$, $fill_ratios$$13$$ = $fillType$$12_linearGradient$$4$$.$_arRatios$
      }
    }else {
      $fill$$52_fill_colors$$13_midColor$$11$$ = $backgroundColor$$24$$, $endColor$$16_fill_alphas$$13$$ = D.$DvtButtonLAFUtils$$.$DEFAULT_END_COLOR$, $fill$$52_fill_colors$$13_midColor$$11$$ != D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$ && ($endColor$$16_fill_alphas$$13$$ = D.$DvtColorUtils$$.$inferColor$(D.$DvtButtonLAFUtils$$.$DEFAULT_MID_COLOR$, D.$DvtButtonLAFUtils$$.$DEFAULT_END_COLOR$, $fill$$52_fill_colors$$13_midColor$$11$$)), $fill$$52_fill_colors$$13_midColor$$11$$ = [$fill$$52_fill_colors$$13_midColor$$11$$, 
      $endColor$$16_fill_alphas$$13$$], $endColor$$16_fill_alphas$$13$$ = [0.6, 0.8], $fill_ratios$$13$$ = [0, 1], $degree$$3$$ = -270
    }
    $fill$$52_fill_colors$$13_midColor$$11$$ = new D.$DvtLinearGradientFill$$($degree$$3$$, $fill$$52_fill_colors$$13_midColor$$11$$, $endColor$$16_fill_alphas$$13$$, $fill_ratios$$13$$)
  }
  $dispObj$$29$$.$setFill$($fill$$52_fill_colors$$13_midColor$$11$$);
  $dispObj$$29$$.$setStroke$($borderColor$$43_stroke$$84$$)
};
D.$DvtCommonLegendDefaults$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendDefaults$$, D.$DvtObj$$, "DvtCommonLegendDefaults");
D.$DvtCommonLegendDefaults$$.$SKIN_ALTA$ = {rowColGap:6, separatorGap:7, indicatorSize:16, buttonSize:12, dwn:"#0572CE", ovr:"#5D5D5D", ena:"#7E7F80", separatorColor:"#D9DFE3"};
D.$DvtCommonLegendDefaults$$.$SKIN_SKYROS$ = {dwn:"#202F48", ovr:"#184DD8", ena:"#003D5B"};
D.$DvtCommonLegendDefaults$$.$DEFAULT$ = {rowColGap:4, separatorGap:4, indicatorSize:11, buttonSize:11, dwn:"#000000", ovr:"#245EDD", ena:"#495D7C", separatorColor:"#ADB6C7"};
D.$DvtCommonLegendDefaults$$.$calcOptions$ = function $$DvtCommonLegendDefaults$$$$calcOptions$$($userOptions$$8$$) {
  var $defaults$$13$$ = D.$DvtCommonLegendDefaults$$.$_getDefaults$($userOptions$$8$$);
  return $userOptions$$8$$ ? D.$DvtJSONUtils$$.$merge$($userOptions$$8$$, $defaults$$13$$) : $defaults$$13$$
};
D.$DvtCommonLegendDefaults$$.$_getDefaults$ = function $$DvtCommonLegendDefaults$$$$_getDefaults$$($userOptions$$9$$) {
  var $defaults$$14$$ = D.$JSCompiler_alias_NULL$$;
  return $defaults$$14$$ = $userOptions$$9$$ && "skyros" === $userOptions$$9$$.skin ? D.$DvtJSONUtils$$.$merge$(D.$DvtCommonLegendDefaults$$.$SKIN_SKYROS$, D.$DvtCommonLegendDefaults$$.$DEFAULT$) : $userOptions$$9$$ && "alta" === $userOptions$$9$$.skin ? D.$DvtJSONUtils$$.$merge$(D.$DvtCommonLegendDefaults$$.$SKIN_ALTA$, D.$DvtCommonLegendDefaults$$.$DEFAULT$) : D.$DvtJSONUtils$$.clone(D.$DvtCommonLegendDefaults$$.$DEFAULT$)
};
D.DvtCommonLegend = function $DvtCommonLegend$($context$$462$$, $w$$35$$, $h$$29$$, $images$$22$$, $skinName$$3$$) {
  this.Init($context$$462$$, $w$$35$$, $h$$29$$, $images$$22$$, $skinName$$3$$)
};
D.$DvtObj$$.$createSubclass$(D.DvtCommonLegend, D.$DvtContainer$$, "DvtCommonLegend");
D.DvtCommonLegend.$LEGEND_DISCLOSED_KEY$ = "isLegendDisclosed";
D.DvtCommonLegend.$SKIN_NAME$ = "skin";
D.$JSCompiler_prototypeAlias$$ = D.DvtCommonLegend.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$463$$, $w$$36$$, $h$$30$$, $images$$23$$, $skinName$$4$$) {
  D.DvtCommonLegend.$superclass$.Init.call(this, $context$$463$$, D.$JSCompiler_alias_NULL$$, $w$$36$$, $h$$30$$);
  this.$_isBiDi$ = (0,D.$DvtAgent$isRightToLeft$$)();
  this.$_width$ = this.$_viewportWidth$ = $w$$36$$;
  this.$_height$ = $h$$30$$;
  this.$_attrLookUp$ = {};
  this.$_hideAttrsLookUp$ = {};
  this.$_associations$ = [];
  this.$_addSeparators$ = D.$JSCompiler_alias_FALSE$$;
  this.$_separators$ = [];
  this.$_rollOverEnabled$ = this.$_showHideEnabled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_hidden$ = [];
  this.$_images$ = $images$$23$$;
  this.$_styleMap$ = D.$DvtCommonLegendDefaults$$.$calcOptions$($skinName$$4$$ ? {skin:$skinName$$4$$} : D.$JSCompiler_alias_NULL$$);
  this.$_isWordWrap$ = D.$JSCompiler_alias_FALSE$$;
  this.$_bundle$ = new D.$DvtUtilBundle$$
};
D.$JSCompiler_prototypeAlias$$.$__getBundle$ = (0,D.$JSCompiler_get$$)("$_bundle$");
D.$JSCompiler_prototypeAlias$$.$isWordWrap$ = (0,D.$JSCompiler_get$$)("$_isWordWrap$");
D.$JSCompiler_prototypeAlias$$.$setXML$ = (0,D.$JSCompiler_set$$)("$_legendNode$");
D.$JSCompiler_prototypeAlias$$.$setJSON$ = function $$JSCompiler_prototypeAlias$$$$setJSON$$($json$$3$$) {
  $json$$3$$ && (this.$_legendJSON$ = $json$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_isDisclosed$");
D.$JSCompiler_prototypeAlias$$.$setDisclosed$ = (0,D.$JSCompiler_set$$)("$_isDisclosed$");
D.$JSCompiler_StaticMethods__renderLegendSection$$ = function $$JSCompiler_StaticMethods__renderLegendSection$$$($JSCompiler_StaticMethods__renderLegendSection$self$$, $childNodes$$40_legendSectionNode$$, $parent$$71$$, $availSpace$$89$$, $isBiDi$$1$$) {
  var $section$$9_sectionTitle$$ = $childNodes$$40_legendSectionNode$$.$getAttr$("label"), $section$$9_sectionTitle$$ = new D.$DvtCommonLegendSection$$($JSCompiler_StaticMethods__renderLegendSection$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSection$self$$, $section$$9_sectionTitle$$, $JSCompiler_StaticMethods__renderLegendSection$self$$.$_sectionTitleStyle$, $JSCompiler_StaticMethods__renderLegendSection$self$$.$_styleMap$);
  $section$$9_sectionTitle$$.$render$($parent$$71$$, $availSpace$$89$$, $isBiDi$$1$$);
  if($childNodes$$40_legendSectionNode$$ = $childNodes$$40_legendSectionNode$$.$getChildNodes$()) {
    for(var $i$$603$$ = 0;$i$$603$$ < $childNodes$$40_legendSectionNode$$.length;$i$$603$$++) {
      var $childNode$$14_itemChildren$$inline_6519_itemNode$$inline_6516$$ = $childNodes$$40_legendSectionNode$$[$i$$603$$], $JSCompiler_StaticMethods__parseItem$self$$inline_6515_legendListItem$$2_legendListItem$$inline_6518$$;
      if("item" == $childNode$$14_itemChildren$$inline_6519_itemNode$$inline_6516$$.getName()) {
        $JSCompiler_StaticMethods__parseItem$self$$inline_6515_legendListItem$$2_legendListItem$$inline_6518$$ = $JSCompiler_StaticMethods__renderLegendSection$self$$;
        var $i$$inline_6520_prop$$inline_6517$$ = {};
        $i$$inline_6520_prop$$inline_6517$$.itemId = $childNode$$14_itemChildren$$inline_6519_itemNode$$inline_6516$$.$getAttr$("itemId");
        $i$$inline_6520_prop$$inline_6517$$.attributeGroupId = $childNode$$14_itemChildren$$inline_6519_itemNode$$inline_6516$$.$getAttr$("attributeGroupId");
        $i$$inline_6520_prop$$inline_6517$$.hideAttrs = $childNode$$14_itemChildren$$inline_6519_itemNode$$inline_6516$$.$getAttr$("hideAttrs");
        $JSCompiler_StaticMethods__parseItem$self$$inline_6515_legendListItem$$2_legendListItem$$inline_6518$$ = new D.$DvtCommonLegendRow$$($JSCompiler_StaticMethods__parseItem$self$$inline_6515_legendListItem$$2_legendListItem$$inline_6518$$.$_context$, $JSCompiler_StaticMethods__parseItem$self$$inline_6515_legendListItem$$2_legendListItem$$inline_6518$$, $i$$inline_6520_prop$$inline_6517$$, $JSCompiler_StaticMethods__parseItem$self$$inline_6515_legendListItem$$2_legendListItem$$inline_6518$$.$_legendItemStyle$, 
        $JSCompiler_StaticMethods__parseItem$self$$inline_6515_legendListItem$$2_legendListItem$$inline_6518$$.$_styleMap$);
        $childNode$$14_itemChildren$$inline_6519_itemNode$$inline_6516$$ = $childNode$$14_itemChildren$$inline_6519_itemNode$$inline_6516$$.$getChildNodes$();
        for($i$$inline_6520_prop$$inline_6517$$ = 0;$i$$inline_6520_prop$$inline_6517$$ < $childNode$$14_itemChildren$$inline_6519_itemNode$$inline_6516$$.length;$i$$inline_6520_prop$$inline_6517$$++) {
          if("marker" == $childNode$$14_itemChildren$$inline_6519_itemNode$$inline_6516$$[$i$$inline_6520_prop$$inline_6517$$].getName()) {
            var $legendRow$$inline_10520$$ = $JSCompiler_StaticMethods__parseItem$self$$inline_6515_legendListItem$$2_legendListItem$$inline_6518$$, $markerNode$$inline_10521_opacity$$inline_10526$$ = $childNode$$14_itemChildren$$inline_6519_itemNode$$inline_6516$$[$i$$inline_6520_prop$$inline_6517$$], $url$$inline_10522$$ = $markerNode$$inline_10521_opacity$$inline_10526$$.$getAttr$("url"), $shape$$inline_10523$$ = $markerNode$$inline_10521_opacity$$inline_10526$$.$getAttr$("shapeType"), $color$$inline_10524$$ = 
            $markerNode$$inline_10521_opacity$$inline_10526$$.$getAttr$("color"), $pattern$$inline_10525$$ = $markerNode$$inline_10521_opacity$$inline_10526$$.$getAttr$("pattern");
            ($markerNode$$inline_10521_opacity$$inline_10526$$ = $markerNode$$inline_10521_opacity$$inline_10526$$.$getAttr$("opacity")) && ($markerNode$$inline_10521_opacity$$inline_10526$$ = (0,window.parseFloat)($markerNode$$inline_10521_opacity$$inline_10526$$));
            $legendRow$$inline_10520$$.setMarker($url$$inline_10522$$, $shape$$inline_10523$$, $color$$inline_10524$$, $pattern$$inline_10525$$, $markerNode$$inline_10521_opacity$$inline_10526$$)
          }else {
            "text" == $childNode$$14_itemChildren$$inline_6519_itemNode$$inline_6516$$[$i$$inline_6520_prop$$inline_6517$$].getName() && $JSCompiler_StaticMethods__parseItem$self$$inline_6515_legendListItem$$2_legendListItem$$inline_6518$$.$setText$($childNode$$14_itemChildren$$inline_6519_itemNode$$inline_6516$$[$i$$inline_6520_prop$$inline_6517$$].$getAttr$("value"))
          }
        }
      }else {
        "text" == $childNode$$14_itemChildren$$inline_6519_itemNode$$inline_6516$$.getName() && ($JSCompiler_StaticMethods__parseItem$self$$inline_6515_legendListItem$$2_legendListItem$$inline_6518$$ = new D.$DvtCommonLegendRow$$($JSCompiler_StaticMethods__renderLegendSection$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSection$self$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__renderLegendSection$self$$.$_legendItemStyle$, $JSCompiler_StaticMethods__renderLegendSection$self$$.$_styleMap$), 
        $JSCompiler_StaticMethods__parseItem$self$$inline_6515_legendListItem$$2_legendListItem$$inline_6518$$.$setText$($childNode$$14_itemChildren$$inline_6519_itemNode$$inline_6516$$.$getAttr$("value")))
      }
      $JSCompiler_StaticMethods__parseItem$self$$inline_6515_legendListItem$$2_legendListItem$$inline_6518$$ && ($JSCompiler_StaticMethods__parseItem$self$$inline_6515_legendListItem$$2_legendListItem$$inline_6518$$.$render$($section$$9_sectionTitle$$, $availSpace$$89$$, $isBiDi$$1$$), $section$$9_sectionTitle$$.$addItem$($JSCompiler_StaticMethods__parseItem$self$$inline_6515_legendListItem$$2_legendListItem$$inline_6518$$))
    }
  }
  $parent$$71$$.$addChild$($section$$9_sectionTitle$$);
  $availSpace$$89$$.y = $availSpace$$89$$.y - $JSCompiler_StaticMethods__renderLegendSection$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderLegendSection$self$$.$_styleMap$.rowColGap;
  return $section$$9_sectionTitle$$
};
D.$JSCompiler_StaticMethods__renderLegendSectionJSON$$ = function $$JSCompiler_StaticMethods__renderLegendSectionJSON$$$($JSCompiler_StaticMethods__renderLegendSectionJSON$self$$, $legendSectionNode$$1_textItems$$, $parent$$72$$, $availSpace$$90$$, $isBiDi$$2$$) {
  var $section$$10$$ = new D.$DvtCommonLegendSection$$($JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$, $legendSectionNode$$1_textItems$$.label, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_sectionTitleStyle$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_styleMap$);
  $section$$10$$.$render$($parent$$72$$, $availSpace$$90$$, $isBiDi$$2$$);
  var $legendItems$$1$$ = $legendSectionNode$$1_textItems$$.item, $itemNode$$inline_6523_legendListItem$$3$$;
  if($legendItems$$1$$) {
    for(var $i$$604$$ = 0;$i$$604$$ < $legendItems$$1$$.length;$i$$604$$++) {
      var $JSCompiler_StaticMethods__parseItemJSON$self$$inline_6522_legendListItem$$inline_6525$$ = $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$;
      $itemNode$$inline_6523_legendListItem$$3$$ = $legendItems$$1$$[$i$$604$$];
      var $prop$$inline_6524_url$$inline_10530$$ = {};
      $prop$$inline_6524_url$$inline_10530$$.itemId = $itemNode$$inline_6523_legendListItem$$3$$.itemId;
      $prop$$inline_6524_url$$inline_10530$$.attributeGroupId = $itemNode$$inline_6523_legendListItem$$3$$.attributeGroupId;
      $prop$$inline_6524_url$$inline_10530$$.hideAttrs = $itemNode$$inline_6523_legendListItem$$3$$.hideAttrs;
      var $JSCompiler_StaticMethods__parseItemJSON$self$$inline_6522_legendListItem$$inline_6525$$ = new D.$DvtCommonLegendRow$$($JSCompiler_StaticMethods__parseItemJSON$self$$inline_6522_legendListItem$$inline_6525$$.$_context$, $JSCompiler_StaticMethods__parseItemJSON$self$$inline_6522_legendListItem$$inline_6525$$, $prop$$inline_6524_url$$inline_10530$$, $JSCompiler_StaticMethods__parseItemJSON$self$$inline_6522_legendListItem$$inline_6525$$.$_legendItemStyle$, $JSCompiler_StaticMethods__parseItemJSON$self$$inline_6522_legendListItem$$inline_6525$$.$_styleMap$), 
      $markerNode$$inline_10529_opacity$$inline_10534$$ = $itemNode$$inline_6523_legendListItem$$3$$.marker, $prop$$inline_6524_url$$inline_10530$$ = $markerNode$$inline_10529_opacity$$inline_10534$$.url, $shape$$inline_10531$$ = $markerNode$$inline_10529_opacity$$inline_10534$$.shapeType, $color$$inline_10532$$ = $markerNode$$inline_10529_opacity$$inline_10534$$.color, $pattern$$inline_10533$$ = $markerNode$$inline_10529_opacity$$inline_10534$$.pattern;
      ($markerNode$$inline_10529_opacity$$inline_10534$$ = $markerNode$$inline_10529_opacity$$inline_10534$$.opacity) && ($markerNode$$inline_10529_opacity$$inline_10534$$ = (0,window.parseFloat)($markerNode$$inline_10529_opacity$$inline_10534$$));
      $JSCompiler_StaticMethods__parseItemJSON$self$$inline_6522_legendListItem$$inline_6525$$.setMarker($prop$$inline_6524_url$$inline_10530$$, $shape$$inline_10531$$, $color$$inline_10532$$, $pattern$$inline_10533$$, $markerNode$$inline_10529_opacity$$inline_10534$$);
      $JSCompiler_StaticMethods__parseItemJSON$self$$inline_6522_legendListItem$$inline_6525$$.$setText$($itemNode$$inline_6523_legendListItem$$3$$.text.value);
      if($itemNode$$inline_6523_legendListItem$$3$$ = $JSCompiler_StaticMethods__parseItemJSON$self$$inline_6522_legendListItem$$inline_6525$$) {
        $itemNode$$inline_6523_legendListItem$$3$$.$render$($section$$10$$, $availSpace$$90$$, $isBiDi$$2$$), $section$$10$$.$addItem$($itemNode$$inline_6523_legendListItem$$3$$)
      }
    }
  }
  if($legendSectionNode$$1_textItems$$ = $legendSectionNode$$1_textItems$$.text) {
    for($i$$604$$ = 0;$i$$604$$ < $legendSectionNode$$1_textItems$$.length;$i$$604$$++) {
      $itemNode$$inline_6523_legendListItem$$3$$ = new D.$DvtCommonLegendRow$$($JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_legendItemStyle$, $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_styleMap$), $itemNode$$inline_6523_legendListItem$$3$$.$setText$($legendSectionNode$$1_textItems$$[$i$$604$$].value), $itemNode$$inline_6523_legendListItem$$3$$ && 
      ($itemNode$$inline_6523_legendListItem$$3$$.$render$($section$$10$$, $availSpace$$90$$, $isBiDi$$2$$), $section$$10$$.$addItem$($itemNode$$inline_6523_legendListItem$$3$$))
    }
  }
  $parent$$72$$.$addChild$($section$$10$$);
  $availSpace$$90$$.y = $availSpace$$90$$.y - $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderLegendSectionJSON$self$$.$_styleMap$.rowColGap;
  return $section$$10$$
};
D.$JSCompiler_StaticMethods__renderLegendSectionGroup$$ = function $$JSCompiler_StaticMethods__renderLegendSectionGroup$$$($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$, $childNodes$$41_legendSectionNode$$2$$, $bidiMultiplier_parent$$73$$, $availSpace$$91$$, $isBiDi$$3$$) {
  var $sectionGroup_sectionTitle$$2$$ = $childNodes$$41_legendSectionNode$$2$$.$getAttr$("label"), $disclosed$$4_i$$605$$ = "true" == $childNodes$$41_legendSectionNode$$2$$.$getAttr$("disclosed"), $childNode$$15_expandTooltip_section$$11$$ = $childNodes$$41_legendSectionNode$$2$$.$getAttr$("expandTooltip"), $collapseTooltip$$ = $childNodes$$41_legendSectionNode$$2$$.$getAttr$("collapseTooltip"), $sectionGroup_sectionTitle$$2$$ = new D.$DvtCommonLegendSectionGroup$$($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_context$, 
  $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$, $sectionGroup_sectionTitle$$2$$, $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_sectionGroupTitleStyle$, $collapseTooltip$$, $childNode$$15_expandTooltip_section$$11$$, $disclosed$$4_i$$605$$, $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$);
  $sectionGroup_sectionTitle$$2$$.$render$($bidiMultiplier_parent$$73$$, $availSpace$$91$$, $isBiDi$$3$$);
  $bidiMultiplier_parent$$73$$ = $isBiDi$$3$$ ? -1 : 1;
  if($childNodes$$41_legendSectionNode$$2$$ = $childNodes$$41_legendSectionNode$$2$$.$getChildNodes$()) {
    for($disclosed$$4_i$$605$$ = 0;$disclosed$$4_i$$605$$ < $childNodes$$41_legendSectionNode$$2$$.length;$disclosed$$4_i$$605$$++) {
      $childNode$$15_expandTooltip_section$$11$$ = $childNodes$$41_legendSectionNode$$2$$[$disclosed$$4_i$$605$$], "section" == $childNode$$15_expandTooltip_section$$11$$.getName() && ($availSpace$$91$$.x += ($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.buttonSize + $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.rowColGap) * $bidiMultiplier_parent$$73$$, $childNode$$15_expandTooltip_section$$11$$ = (0,D.$JSCompiler_StaticMethods__renderLegendSection$$)($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$, 
      $childNode$$15_expandTooltip_section$$11$$, $sectionGroup_sectionTitle$$2$$, $availSpace$$91$$, $isBiDi$$3$$), $availSpace$$91$$.x -= ($JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.buttonSize + $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.rowColGap) * $bidiMultiplier_parent$$73$$, $sectionGroup_sectionTitle$$2$$.$addItem$($childNode$$15_expandTooltip_section$$11$$))
    }
  }
  $availSpace$$91$$.y = $availSpace$$91$$.y - $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderLegendSectionGroup$self$$.$_styleMap$.rowColGap;
  return $sectionGroup_sectionTitle$$2$$
};
D.$JSCompiler_StaticMethods__renderLegendSectionGroupJSON$$ = function $$JSCompiler_StaticMethods__renderLegendSectionGroupJSON$$$($JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$, $legendSectionNode$$3_sections$$4$$, $bidiMultiplier$$1_parent$$74$$, $availSpace$$92$$, $isBiDi$$4$$) {
  var $sectionGroup$$1$$ = new D.$DvtCommonLegendSectionGroup$$($JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_context$, $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$, $legendSectionNode$$3_sections$$4$$.label, $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_sectionGroupTitleStyle$, $legendSectionNode$$3_sections$$4$$.collapseTooltip, $legendSectionNode$$3_sections$$4$$.expandTooltip, "true" == $legendSectionNode$$3_sections$$4$$.disclosed, $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$);
  $sectionGroup$$1$$.$render$($bidiMultiplier$$1_parent$$74$$, $availSpace$$92$$, $isBiDi$$4$$);
  $bidiMultiplier$$1_parent$$74$$ = $isBiDi$$4$$ ? -1 : 1;
  if($legendSectionNode$$3_sections$$4$$ = $legendSectionNode$$3_sections$$4$$.section) {
    for(var $i$$606$$ = 0;$i$$606$$ < $legendSectionNode$$3_sections$$4$$.length;$i$$606$$++) {
      $availSpace$$92$$.x += ($JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.buttonSize + $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.rowColGap) * $bidiMultiplier$$1_parent$$74$$;
      var $section$$12$$ = (0,D.$JSCompiler_StaticMethods__renderLegendSectionJSON$$)($JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$, $legendSectionNode$$3_sections$$4$$[$i$$606$$], $sectionGroup$$1$$, $availSpace$$92$$, $isBiDi$$4$$);
      $availSpace$$92$$.x -= ($JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.buttonSize + $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.rowColGap) * $bidiMultiplier$$1_parent$$74$$;
      $sectionGroup$$1$$.$addItem$($section$$12$$)
    }
  }
  $availSpace$$92$$.y = $availSpace$$92$$.y - $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderLegendSectionGroupJSON$self$$.$_styleMap$.rowColGap;
  return $sectionGroup$$1$$
};
D.$JSCompiler_StaticMethods__renderSeparator$$ = function $$JSCompiler_StaticMethods__renderSeparator$$$($JSCompiler_StaticMethods__renderSeparator$self$$, $container$$139$$, $availSpace$$93$$) {
  $availSpace$$93$$.y = $availSpace$$93$$.y - $JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.rowColGap + $JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.separatorGap;
  var $line1$$1$$ = new D.$DvtLine$$($JSCompiler_StaticMethods__renderSeparator$self$$.$_context$, $availSpace$$93$$.x, $availSpace$$93$$.y, $availSpace$$93$$.x, $availSpace$$93$$.y);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line1$$1$$);
  $line1$$1$$.$setSolidStroke$($JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.separatorColor);
  $JSCompiler_StaticMethods__renderSeparator$self$$.$_separators$.push($line1$$1$$);
  var $separator$$3$$;
  if("alta" == $JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.skin) {
    $separator$$3$$ = $line1$$1$$
  }else {
    $availSpace$$93$$.y++;
    var $line2$$1$$ = new D.$DvtLine$$($JSCompiler_StaticMethods__renderSeparator$self$$.$_context$, $availSpace$$93$$.x, $availSpace$$93$$.y, $availSpace$$93$$.x, $availSpace$$93$$.y);
    $line2$$1$$.$setSolidStroke$("#FFFFFF");
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line2$$1$$);
    $separator$$3$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods__renderSeparator$self$$.$_context$);
    $separator$$3$$.$addChild$($line1$$1$$);
    $separator$$3$$.$addChild$($line2$$1$$);
    $JSCompiler_StaticMethods__renderSeparator$self$$.$_separators$.push($line2$$1$$)
  }
  $container$$139$$.$addChild$($separator$$3$$);
  $availSpace$$93$$.y += $JSCompiler_StaticMethods__renderSeparator$self$$.$_styleMap$.separatorGap;
  return $separator$$3$$
};
D.DvtCommonLegend.prototype.update = function $DvtCommonLegend$$update$($updatedSection$$, $diff$$4$$) {
  for(var $idx$$14$$ = this.$_children$.indexOf($updatedSection$$), $idx$$14$$ = $idx$$14$$ + 1;$idx$$14$$ < this.$_children$.length;) {
    var $oldTransY$$ = this.$_children$[$idx$$14$$].$getTranslateY$();
    this.$_children$[$idx$$14$$].$setTranslateY$($oldTransY$$ + $diff$$4$$);
    $idx$$14$$++
  }
  this.$_dim$.$h$ += $diff$$4$$;
  this.$FireListener$(new D.$DvtResizeEvent$$(this.$_dim$.$w$, this.$_dim$.$h$, 0, 0))
};
D.DvtCommonLegend.prototype.$getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.DvtCommonLegend.prototype.$render$ = function $DvtCommonLegend$$$render$$() {
  if(this.$_legendNode$) {
    this.$_eventHandler$ = new D.$DvtCommonLegendEventManager$$(this.$_context$, this.$_legendEventHandler$, this);
    this.$_title$ = this.$_legendNode$.$getAttr$("label");
    this.$_isDisclosed$ = "true" == this.$_legendNode$.$getAttr$("disclosed");
    var $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$ = this.$_legendNode$.getElementsByTagName("style");
    if($availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$ && ($availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$ = 
    $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$[0].$getChildNodes$())) {
      for(var $i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$ = 0;$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$ < $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$.length;$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$++) {
        var $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$ = $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$[$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$];
        "legend-title" == $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$.getName() ? this.$_legendTitleStyle$ = $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$.getTextContent() : "sectionGroup-title" == $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$.getName() ? 
        this.$_sectionGroupTitleStyle$ = $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$.getTextContent() : "section-title" == $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$.getName() ? this.$_sectionTitleStyle$ = $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$.getTextContent() : 
        "legend-item" == $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$.getName() && (this.$_legendItemStyle$ = $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$.getTextContent())
      }
    }
    if($availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$ = this.$_legendNode$.$getAttr$("noWrap")) {
      this.$_isWordWrap$ = "false" == $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$
    }
    $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$ = this.$_isBiDi$ ? new D.$DvtRectangle$$(this.$_width$, 0, this.$_width$, this.$_height$) : new D.$DvtRectangle$$(0, 0, this.$_width$, this.$_height$);
    this.$_legendContent$ = new D.$DvtContainer$$(this.$_context$);
    this.$addChild$(this.$_legendContent$);
    if(this.$_title$ && ($i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$ = this.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$), $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$ = $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$.$w$ - 
    $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$.x, this.$_isBiDi$ && ($childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$ = $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$.$w$ - 
    $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$), 0 < $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$ && (this.$_isBiDi$ && $i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$.$alignRight$(), 
    this.$_legendTitleStyle$ && $i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_legendTitleStyle$)), $i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$.$setTextString$(this.$_title$), $i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$.$setX$($availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$.x), 
    $i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$.$setY$($availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$.y), D.$DvtTextUtils$$.$fitText$($i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$, 
    $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$, $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$.$h$, this.$_legendContent$), $i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$.$isTruncated$() && 
    this.$_eventHandler$.$associate$($i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$, new D.$DvtSimpleObjPeer$$(this.$_title$)), ($i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$ = $i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$.$getDimensions$()) && 
    0 < $i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$.$h$))) {
      $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$.y = $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$.y + 
      $i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$.$h$ + this.$_styleMap$.rowColGap
    }
    this.$_children$ = [];
    if($childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$ = this.$_legendNode$.$getChildNodes$()) {
      for($i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$ = 0;$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$ < $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$.length;$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$++) {
        var $childNode$$inline_6535_separators$$inline_6536_separators$$inline_6548$$ = $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$[$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$];
        if("separatorDef" == $childNode$$inline_6535_separators$$inline_6536_separators$$inline_6548$$.getName() && ($childNode$$inline_6535_separators$$inline_6536_separators$$inline_6548$$ = $childNode$$inline_6535_separators$$inline_6536_separators$$inline_6548$$.$getChildNodes$(), 0 < $childNode$$inline_6535_separators$$inline_6536_separators$$inline_6548$$.length && "separator" == $childNode$$inline_6535_separators$$inline_6536_separators$$inline_6548$$[0].getName())) {
          this.$_addSeparators$ = D.$JSCompiler_alias_TRUE$$;
          break
        }
      }
      for($i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$ = 0;$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$ < $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$.length;$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$++) {
        $childNode$$inline_6535_separators$$inline_6536_separators$$inline_6548$$ = $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$[$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$], $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$.x = 
        this.$_isBiDi$ ? this.$_width$ : 0, "sectionGroup" == $childNode$$inline_6535_separators$$inline_6536_separators$$inline_6548$$.getName() ? (this.$_addSeparators$ && (this.$_title$ || 1 < $i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$) && this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderSeparator$$)(this, this.$_legendContent$, $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$)), 
        this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderLegendSectionGroup$$)(this, $childNode$$inline_6535_separators$$inline_6536_separators$$inline_6548$$, this.$_legendContent$, $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$, this.$_isBiDi$))) : "section" == $childNode$$inline_6535_separators$$inline_6536_separators$$inline_6548$$.getName() && 
        (this.$_addSeparators$ && (this.$_title$ || 1 < $i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$) && this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderSeparator$$)(this, this.$_legendContent$, $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$)), 
        this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderLegendSection$$)(this, $childNode$$inline_6535_separators$$inline_6536_separators$$inline_6548$$, this.$_legendContent$, $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$, this.$_isBiDi$)))
      }
    }
    this.$_dim$ = this.$getDimensionsWithStroke$();
    for($availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$ = 0;$availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$ < 
    this.$_separators$.length;$availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$++) {
      this.$_isBiDi$ ? this.$_separators$[$availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$].$setX2$(this.$_dim$.x) : this.$_separators$[$availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$].$setX2$(this.$_dim$.$w$)
    }
    this.$_eventHandler$.$addListeners$(this);
    for($i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$ = 0;$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$ < this.$_associations$.length;$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$++) {
      $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$ = this.$_associations$[$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$], this.$_eventHandler$.$associate$($availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$, 
      $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$), this.$_hidden$ && -1 < D.$DvtArrayUtils$$.$getIndex$(this.$_hidden$, $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$.$getAttributeGroup$() + 
      ":" + $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$.$getItemId$()) && (0,D.$JSCompiler_StaticMethods_filterRow$$)($availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$, 
      D.$JSCompiler_alias_TRUE$$)
    }
  }else {
    this.$_eventHandler$ = new D.$DvtCommonLegendEventManager$$(this.$_context$, this.$_legendEventHandler$, this);
    this.$_title$ = this.$_legendJSON$.label;
    this.$_isDisclosed$ = "true" == this.$_legendJSON$.disclosed;
    if($availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$ = this.$_legendJSON$.style) {
      this.$_legendTitleStyle$ = $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$["legend-title"], this.$_sectionGroupTitleStyle$ = $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$["sectionGroup-title"], 
      this.$_sectionTitleStyle$ = $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$["section-title"], this.$_legendItemStyle$ = $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$["legend-item"]
    }
    if($availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$ = this.$_legendJSON$.noWrap) {
      this.$_isWordWrap$ = "false" == $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$
    }
    $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$ = this.$_isBiDi$ ? new D.$DvtRectangle$$(this.$_width$, 0, this.$_width$, this.$_height$) : new D.$DvtRectangle$$(0, 0, this.$_width$, this.$_height$);
    this.$_legendContent$ = new D.$DvtContainer$$(this.$_context$);
    this.$addChild$(this.$_legendContent$);
    if(this.$_title$ && ($i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$ = this.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$), $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$ = $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$.$w$ - 
    $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$.x, this.$_isBiDi$ && ($childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$ = $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$.$w$ - 
    $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$), 0 < $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$ && (this.$_isBiDi$ && $i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$.$alignRight$(), 
    this.$_legendTitleStyle$ && $i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_legendTitleStyle$)), $i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$.$setTextString$(this.$_title$), $i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$.$setX$($availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$.x), 
    $i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$.$setY$($availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$.y), D.$DvtTextUtils$$.$fitText$($i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$, 
    $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$, $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$.$h$, this.$_legendContent$), $i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$.$isTruncated$() && 
    this.$_eventHandler$.$associate$($i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$, new D.$DvtSimpleObjPeer$$(this.$_title$)), ($i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$ = $i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$.$getDimensions$()) && 
    0 < $i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$.$h$))) {
      $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$.y = $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$.y + 
      $i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$.$h$ + this.$_styleMap$.rowColGap
    }
    this.$_children$ = [];
    if($childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$ = this.$_legendJSON$.separatorDef) {
      for($i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$ = 0;$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$ < $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$.length;$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$++) {
        if(($childNode$$inline_6535_separators$$inline_6536_separators$$inline_6548$$ = $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$[$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$].separator) && 0 < $childNode$$inline_6535_separators$$inline_6536_separators$$inline_6548$$.length) {
          this.$_addSeparators$ = D.$JSCompiler_alias_TRUE$$;
          break
        }
      }
    }
    $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$ = this.$_legendJSON$.sectionGroup;
    $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$.x = this.$_isBiDi$ ? this.$_width$ : 0;
    if($childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$) {
      for($i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$ = 0;$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$ < $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$.length;$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$++) {
        this.$_addSeparators$ && (this.$_title$ || 1 < $i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$) && this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderSeparator$$)(this, this.$_legendContent$, $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$)), 
        this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderLegendSectionGroupJSON$$)(this, $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$[$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$], this.$_legendContent$, $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$, 
        this.$_isBiDi$))
      }
    }
    if($childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$ = this.$_legendJSON$.section) {
      for($i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$ = 0;$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$ < $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$.length;$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$++) {
        this.$_addSeparators$ && (this.$_title$ || 1 < $i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$) && this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderSeparator$$)(this, this.$_legendContent$, $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$)), 
        this.$_children$.push((0,D.$JSCompiler_StaticMethods__renderLegendSectionJSON$$)(this, $childNode$$inline_10540_childNodes$$inline_6533_fitWidth$$inline_6531_fitWidth$$inline_6544_sectionGroups$$inline_6549_sections$$inline_6550_separatorDefs$$inline_6546$$[$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$], this.$_legendContent$, $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$, 
        this.$_isBiDi$))
      }
    }
    this.$_dim$ = this.$getDimensionsWithStroke$();
    for($availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$ = 0;$availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$ < 
    this.$_separators$.length;$availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$++) {
      this.$_isBiDi$ ? (this.$_dim$.x = this.$_separators$[$availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$].$getX1$() - this.$_dim$.$w$, this.$_separators$[$availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$].$setX2$(this.$_dim$.x)) : 
      this.$_separators$[$availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$].$setX2$(this.$_dim$.$w$ + this.$_separators$[$availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$].$getX1$())
    }
    this.$_eventHandler$.$addListeners$(this);
    for($i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$ = 0;$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$ < this.$_associations$.length;$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$++) {
      $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$ = this.$_associations$[$i$$inline_10539_i$$inline_6534_i$$inline_6547_legendTitle$$inline_6530_legendTitle$$inline_6543_titleDim$$inline_6532_titleDim$$inline_6545$$], this.$_eventHandler$.$associate$($availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$, 
      $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$), this.$_hidden$ && -1 < D.$DvtArrayUtils$$.$getIndex$(this.$_hidden$, $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$.$getAttributeGroup$() + 
      ":" + $availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$.$getItemId$()) && (0,D.$JSCompiler_StaticMethods_filterRow$$)($availSpace$$inline_6529_availSpace$$inline_6542_childNodes$$inline_10538_j$$inline_6537_j$$inline_6551_legendRow$$inline_6538_legendRow$$inline_6552_legendStyleNode$$inline_10537_legendStyleNode$$inline_10546_noWrap$$inline_6528_noWrap$$inline_6541$$)
    }
  }
  this.$_hidden$ && (this.$_dim$ = this.$getDimensionsWithStroke$(), this.$FireListener$(new D.$DvtResizeEvent$$(this.$_dim$.$w$, this.$_dim$.$h$, this.$_dim$.x, this.$_dim$.y)));
  this.$_isBiDi$ && this.$_legendContent$.$setTranslateX$(-this.$_dim$.x)
};
D.$DvtCommonLegendSectionGroup$$ = function $$DvtCommonLegendSectionGroup$$$($context$$464$$, $legend$$28$$, $sectionTitle$$4$$, $sectionTitleStyle$$, $collapseTooltip$$2$$, $expandTooltip$$2$$, $disclosed$$6$$, $styleMap$$80$$) {
  this.Init($context$$464$$, $legend$$28$$, $sectionTitle$$4$$, $sectionTitleStyle$$, $collapseTooltip$$2$$, $expandTooltip$$2$$, $disclosed$$6$$, $styleMap$$80$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendSectionGroup$$, D.$DvtContainer$$, "DvtCommonLegendSection");
D.$DvtCommonLegendSectionGroup$$.prototype.Init = function $$DvtCommonLegendSectionGroup$$$$Init$($context$$465$$, $legend$$29$$, $sectionTitle$$5$$, $sectionTitleStyle$$1$$, $collapseTooltip$$3$$, $expandTooltip$$3$$, $disclosed$$7$$, $styleMap$$81$$) {
  D.$DvtCommonLegendSection$$.$superclass$.Init.call(this, $context$$465$$);
  this.$_title$ = $sectionTitle$$5$$;
  this.$_titleStyle$ = $sectionTitleStyle$$1$$;
  this.$_items$ = [];
  this.$_legend$ = $legend$$29$$;
  this.$_collapseTooltip$ = $collapseTooltip$$3$$;
  this.$_expandTooltip$ = $expandTooltip$$3$$;
  this.$_buttonState$ = $disclosed$$7$$ ? 0 : 1;
  this.$_styleMap$ = $styleMap$$81$$
};
D.$JSCompiler_StaticMethods__createButton$$ = function $$JSCompiler_StaticMethods__createButton$$$($JSCompiler_StaticMethods__createButton$self$$, $dwn$$18_images$$25$$, $x$$219$$, $y$$191$$, $width$$128$$, $height$$109$$, $buttonState$$5_ena$$23$$) {
  if(!$dwn$$18_images$$25$$) {
    return new D.$DvtButton$$($JSCompiler_StaticMethods__createButton$self$$.$_context$)
  }
  switch($buttonState$$5_ena$$23$$) {
    case 1:
      $buttonState$$5_ena$$23$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$18_images$$25$$.groupColEna, $x$$219$$, $y$$191$$, $width$$128$$, $height$$109$$);
      var $ovr$$18$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$18_images$$25$$.groupColOvr, $x$$219$$, $y$$191$$, $width$$128$$, $height$$109$$);
      $dwn$$18_images$$25$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$18_images$$25$$.groupColDwn, $x$$219$$, $y$$191$$, $width$$128$$, $height$$109$$);
      return new D.$DvtButton$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $buttonState$$5_ena$$23$$, $ovr$$18$$, $dwn$$18_images$$25$$);
    default:
      return $buttonState$$5_ena$$23$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$18_images$$25$$.groupExpDwn, $x$$219$$, $y$$191$$, $width$$128$$, $height$$109$$), $ovr$$18$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$18_images$$25$$.groupExpOvr, $x$$219$$, $y$$191$$, $width$$128$$, $height$$109$$), $dwn$$18_images$$25$$ = new D.$DvtImage$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $dwn$$18_images$$25$$.groupExpDwn, 
      $x$$219$$, $y$$191$$, $width$$128$$, $height$$109$$), new D.$DvtButton$$($JSCompiler_StaticMethods__createButton$self$$.$_context$, $buttonState$$5_ena$$23$$, $ovr$$18$$, $dwn$$18_images$$25$$)
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtCommonLegendSectionGroup$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_handleMouseClick$ = function $$JSCompiler_prototypeAlias$$$$_handleMouseClick$$() {
  var $bidiMultiplier$$inline_6561_diff$$inline_6562_parent$$inline_6563$$ = (0,D.$DvtAgent$isRightToLeft$$)() ? -1 : 1;
  this.$_sectionHeight$ || (this.$_sectionHeight$ = this.$getDimensionsWithStroke$().$h$ - this.$_headerHeight$);
  0 == this.$_buttonState$ ? ("alta" == this.$_styleMap$.skin ? ($bidiMultiplier$$inline_6561_diff$$inline_6562_parent$$inline_6563$$ = this.$_button$.getParent(), $bidiMultiplier$$inline_6561_diff$$inline_6562_parent$$inline_6563$$.removeChild(this.$_button$), this.$_button$ = this.$_collapsedBtn$, $bidiMultiplier$$inline_6561_diff$$inline_6562_parent$$inline_6563$$.$addChild$(this.$_button$)) : this.$_button$.$setPoints$([this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_6561_diff$$inline_6562_parent$$inline_6563$$, 
  this.$_buttonY$ + 1.5, this.$_buttonX$ + 9.5 * $bidiMultiplier$$inline_6561_diff$$inline_6562_parent$$inline_6563$$, this.$_buttonY$ + 5.5, this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_6561_diff$$inline_6562_parent$$inline_6563$$, this.$_buttonY$ + 9.5]), this.$_itemsVisible$ = D.$JSCompiler_alias_FALSE$$, this.$_buttonState$ = 1, $bidiMultiplier$$inline_6561_diff$$inline_6562_parent$$inline_6563$$ = -this.$_sectionHeight$) : ("alta" == this.$_styleMap$.skin ? ($bidiMultiplier$$inline_6561_diff$$inline_6562_parent$$inline_6563$$ = 
  this.$_button$.getParent(), $bidiMultiplier$$inline_6561_diff$$inline_6562_parent$$inline_6563$$.removeChild(this.$_button$), this.$_button$ = this.$_expandedBtn$, $bidiMultiplier$$inline_6561_diff$$inline_6562_parent$$inline_6563$$.$addChild$(this.$_button$)) : this.$_button$.$setPoints$([this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_6561_diff$$inline_6562_parent$$inline_6563$$, this.$_buttonY$ + 1.5, this.$_buttonX$ + 9.5 * $bidiMultiplier$$inline_6561_diff$$inline_6562_parent$$inline_6563$$, 
  this.$_buttonY$ + 1.5, this.$_buttonX$ + 5.5 * $bidiMultiplier$$inline_6561_diff$$inline_6562_parent$$inline_6563$$, this.$_buttonY$ + 9.5]), this.$_itemsVisible$ = D.$JSCompiler_alias_TRUE$$, this.$_buttonState$ = 0, $bidiMultiplier$$inline_6561_diff$$inline_6562_parent$$inline_6563$$ = this.$_sectionHeight$);
  if(this.$_itemsVisible$) {
    for(var $i$$inline_6564$$ = 0;$i$$inline_6564$$ < this.$_items$.length;$i$$inline_6564$$++) {
      this.$addChild$(this.$_items$[$i$$inline_6564$$])
    }
  }else {
    for($i$$inline_6564$$ = 0;$i$$inline_6564$$ < this.$_items$.length;$i$$inline_6564$$++) {
      this.removeChild(this.$_items$[$i$$inline_6564$$])
    }
  }
  this.$_legend$.update(this, $bidiMultiplier$$inline_6561_diff$$inline_6562_parent$$inline_6563$$)
};
D.$JSCompiler_prototypeAlias$$.$_handleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$_handleMouseOver$$() {
  "alta" == !this.$_styleMap$.skin && this.$_button$.$setSolidFill$(this.$_styleMap$.ovr)
};
D.$JSCompiler_prototypeAlias$$.$_handleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$_handleMouseOut$$() {
  "alta" == !this.$_styleMap$.skin && this.$_button$.$setSolidFill$(this.$_styleMap$.ena)
};
D.$JSCompiler_prototypeAlias$$.$_handleMouseDown$ = function $$JSCompiler_prototypeAlias$$$$_handleMouseDown$$() {
  "alta" == !this.$_styleMap$.skin && this.$_button$.$setSolidFill$(this.$_styleMap$.dwn)
};
D.$JSCompiler_prototypeAlias$$.$addItem$ = function $$JSCompiler_prototypeAlias$$$$addItem$$($item$$36$$) {
  return this.$_items$.push($item$$36$$)
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($collapsibleHitArea_dim$$75_parent$$77$$, $availSpace$$97$$, $isBiDi$$6$$) {
  $collapsibleHitArea_dim$$75_parent$$77$$.$addChild$(this);
  $collapsibleHitArea_dim$$75_parent$$77$$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChild$($collapsibleHitArea_dim$$75_parent$$77$$);
  this.$_buttonX$ = $availSpace$$97$$.x;
  this.$_buttonY$ = $availSpace$$97$$.y;
  var $bidiMultiplier$$inline_6570_sectionTitle$$6$$ = $isBiDi$$6$$ ? -1 : 1;
  if("alta" == this.$_styleMap$.skin) {
    var $fitWidth$$2_images$$inline_6571$$ = this.$_legend$.$_images$;
    this.$_expandedBtn$ = (0,D.$JSCompiler_StaticMethods__createButton$$)(this, $fitWidth$$2_images$$inline_6571$$, this.$_buttonX$, this.$_buttonY$, this.$_styleMap$.buttonSize, this.$_styleMap$.buttonSize, 0);
    this.$_collapsedBtn$ = (0,D.$JSCompiler_StaticMethods__createButton$$)(this, $fitWidth$$2_images$$inline_6571$$, this.$_buttonX$, this.$_buttonY$, this.$_styleMap$.buttonSize, this.$_styleMap$.buttonSize, 1);
    this.$_button$ = this.$_expandedBtn$
  }else {
    this.$_button$ = new D.$DvtPolygon$$(this.$_context$, [this.$_buttonX$ + 1.5 * $bidiMultiplier$$inline_6570_sectionTitle$$6$$, this.$_buttonY$ + 1.5, this.$_buttonX$ + 9.5 * $bidiMultiplier$$inline_6570_sectionTitle$$6$$, this.$_buttonY$ + 1.5, this.$_buttonX$ + 5.5 * $bidiMultiplier$$inline_6570_sectionTitle$$6$$, this.$_buttonY$ + 9.5]), this.$_button$.$setSolidFill$(this.$_styleMap$.ena)
  }
  $collapsibleHitArea_dim$$75_parent$$77$$.$addChild$(this.$_button$);
  if((0,D.$DvtAgent$isTouchDevice$$)()) {
    $collapsibleHitArea_dim$$75_parent$$77$$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$_handleMouseClick$, D.$JSCompiler_alias_FALSE$$, this)
  }else {
    var $thisRef$$inline_6572$$ = this;
    this.$_legend$.$getEventManager$().$associate$($collapsibleHitArea_dim$$75_parent$$77$$, {$getTooltip$:function() {
      return 0 == $thisRef$$inline_6572$$.$_buttonState$ ? $thisRef$$inline_6572$$.$_collapseTooltip$ : $thisRef$$inline_6572$$.$_expandTooltip$
    }});
    $collapsibleHitArea_dim$$75_parent$$77$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$_handleMouseClick$, D.$JSCompiler_alias_FALSE$$, this);
    $collapsibleHitArea_dim$$75_parent$$77$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, this.$_handleMouseOver$, D.$JSCompiler_alias_FALSE$$, this);
    $collapsibleHitArea_dim$$75_parent$$77$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$_handleMouseOut$, D.$JSCompiler_alias_FALSE$$, this);
    $collapsibleHitArea_dim$$75_parent$$77$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$_handleMouseDown$, D.$JSCompiler_alias_FALSE$$, this)
  }
  this.$_buttonState$ = 0;
  $availSpace$$97$$.x += (("alta" == this.$_styleMap$.skin && $isBiDi$$6$$ ? 0 : this.$_styleMap$.buttonSize) + this.$_styleMap$.rowColGap) * $bidiMultiplier$$inline_6570_sectionTitle$$6$$;
  this.$_title$ && ($bidiMultiplier$$inline_6570_sectionTitle$$6$$ = this.$_legend$.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$), $fitWidth$$2_images$$inline_6571$$ = $availSpace$$97$$.$w$ - $availSpace$$97$$.x, $isBiDi$$6$$ && ($fitWidth$$2_images$$inline_6571$$ = $availSpace$$97$$.$w$ - $fitWidth$$2_images$$inline_6571$$), 0 < $fitWidth$$2_images$$inline_6571$$ && ($isBiDi$$6$$ && $bidiMultiplier$$inline_6570_sectionTitle$$6$$.$alignRight$(), 
  this.$_titleStyle$ && $bidiMultiplier$$inline_6570_sectionTitle$$6$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_titleStyle$)), $bidiMultiplier$$inline_6570_sectionTitle$$6$$.$setTextString$(this.$_title$), $bidiMultiplier$$inline_6570_sectionTitle$$6$$.$setX$($availSpace$$97$$.x), $bidiMultiplier$$inline_6570_sectionTitle$$6$$.$setY$($availSpace$$97$$.y), D.$DvtTextUtils$$.$fitText$($bidiMultiplier$$inline_6570_sectionTitle$$6$$, $fitWidth$$2_images$$inline_6571$$, $availSpace$$97$$.$h$, $collapsibleHitArea_dim$$75_parent$$77$$), 
  $bidiMultiplier$$inline_6570_sectionTitle$$6$$.$isTruncated$() && this.$_legend$.$getEventManager$().$associate$($bidiMultiplier$$inline_6570_sectionTitle$$6$$, new D.$DvtSimpleObjPeer$$(this.$_title$)), $collapsibleHitArea_dim$$75_parent$$77$$ = $bidiMultiplier$$inline_6570_sectionTitle$$6$$.$getDimensions$(), $availSpace$$97$$.y = $availSpace$$97$$.y + window.Math.max($collapsibleHitArea_dim$$75_parent$$77$$ ? $collapsibleHitArea_dim$$75_parent$$77$$.$h$ : 0, this.$_styleMap$.buttonSize) + this.$_styleMap$.rowColGap));
  $availSpace$$97$$.x += (this.$_styleMap$.buttonSize + this.$_styleMap$.rowColGap) * ($isBiDi$$6$$ ? 1 : -1);
  this.$_headerHeight$ = this.$getDimensionsWithStroke$().$h$
};
D.$DvtCommonLegendSection$$ = function $$DvtCommonLegendSection$$$($context$$466$$, $legend$$30$$, $sectionTitle$$7$$, $sectionTitleStyle$$2$$, $styleMap$$82$$) {
  this.Init($context$$466$$, $legend$$30$$, $sectionTitle$$7$$, $sectionTitleStyle$$2$$, $styleMap$$82$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendSection$$, D.$DvtContainer$$, "DvtCommonLegendSection");
D.$DvtCommonLegendSection$$.prototype.Init = function $$DvtCommonLegendSection$$$$Init$($context$$467$$, $legend$$31$$, $sectionTitle$$8$$, $sectionTitleStyle$$3$$, $styleMap$$83$$) {
  D.$DvtCommonLegendSection$$.$superclass$.Init.call(this, $context$$467$$);
  this.$_title$ = $sectionTitle$$8$$;
  this.$_titleStyle$ = $sectionTitleStyle$$3$$;
  this.$_items$ = [];
  this.$_legend$ = $legend$$31$$;
  this.$_styleMap$ = $styleMap$$83$$
};
D.$DvtCommonLegendSection$$.prototype.$addItem$ = function $$DvtCommonLegendSection$$$$$addItem$$($item$$37$$) {
  return this.$_items$.push($item$$37$$)
};
D.$DvtCommonLegendSection$$.prototype.$getItems$ = (0,D.$JSCompiler_get$$)("$_items$");
D.$DvtCommonLegendSection$$.prototype.$render$ = function $$DvtCommonLegendSection$$$$$render$$($parent$$78_sectionTitle$$9$$, $availSpace$$98$$, $dim$$76_isBiDi$$7$$) {
  $parent$$78_sectionTitle$$9$$.$addChild$(this);
  if(this.$_title$) {
    $parent$$78_sectionTitle$$9$$ = this.$_legend$.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$);
    var $fitWidth$$3$$ = $availSpace$$98$$.$w$ - $availSpace$$98$$.x;
    $dim$$76_isBiDi$$7$$ && ($fitWidth$$3$$ = $availSpace$$98$$.$w$ - $fitWidth$$3$$);
    0 < $fitWidth$$3$$ && ($dim$$76_isBiDi$$7$$ && $parent$$78_sectionTitle$$9$$.$alignRight$(), this.$_titleStyle$ && $parent$$78_sectionTitle$$9$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_titleStyle$)), $parent$$78_sectionTitle$$9$$.$setTextString$(this.$_title$), $parent$$78_sectionTitle$$9$$.$setX$($availSpace$$98$$.x), $parent$$78_sectionTitle$$9$$.$setY$($availSpace$$98$$.y), D.$DvtTextUtils$$.$fitText$($parent$$78_sectionTitle$$9$$, $fitWidth$$3$$, $availSpace$$98$$.$h$, this), $parent$$78_sectionTitle$$9$$.$isTruncated$() && 
    this.$_legend$.$getEventManager$().$associate$($parent$$78_sectionTitle$$9$$, new D.$DvtSimpleObjPeer$$(this.$_title$)), $dim$$76_isBiDi$$7$$ = $parent$$78_sectionTitle$$9$$.$getDimensions$(), $availSpace$$98$$.y = $availSpace$$98$$.y + ($dim$$76_isBiDi$$7$$ ? $dim$$76_isBiDi$$7$$.$h$ : 0) + this.$_styleMap$.rowColGap)
  }
};
D.$DvtCommonLegendRow$$ = function $$DvtCommonLegendRow$$$($context$$468$$, $legend$$32$$, $prop$$14$$, $itemStyle$$2$$, $styleMap$$84$$) {
  this.Init($context$$468$$, $legend$$32$$, $prop$$14$$, $itemStyle$$2$$, $styleMap$$84$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendRow$$, D.$DvtContainer$$, "DvtCommonLegendRow");
D.$JSCompiler_prototypeAlias$$ = D.$DvtCommonLegendRow$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$469$$, $legend$$33$$, $prop$$15$$, $itemStyle$$3$$, $styleMap$$85$$) {
  D.$DvtCommonLegendRow$$.$superclass$.Init.call(this, $context$$469$$);
  this.$_legend$ = $legend$$33$$;
  this.$_prop$ = $prop$$15$$;
  this.$_itemStyle$ = $itemStyle$$3$$;
  this.$_bHidden$ = D.$JSCompiler_alias_FALSE$$;
  this.$_styleMap$ = $styleMap$$85$$
};
D.$JSCompiler_prototypeAlias$$.$getAttributeGroup$ = function $$JSCompiler_prototypeAlias$$$$getAttributeGroup$$() {
  return this.$_prop$.attributeGroupId
};
D.$JSCompiler_prototypeAlias$$.$getItemId$ = function $$JSCompiler_prototypeAlias$$$$getItemId$$() {
  return this.$_prop$.itemId
};
D.$JSCompiler_prototypeAlias$$.$getHideAttributes$ = function $$JSCompiler_prototypeAlias$$$$getHideAttributes$$() {
  return this.$_prop$.hideAttrs
};
D.$JSCompiler_prototypeAlias$$.$setText$ = (0,D.$JSCompiler_set$$)("$_text$");
D.$JSCompiler_prototypeAlias$$.setMarker = function $$JSCompiler_prototypeAlias$$$setMarker$($url$$27$$, $shape$$90$$, $color$$66$$, $pattern$$14$$, $opacity$$7$$) {
  this.$_url$ = $url$$27$$;
  this.$_shape$ = $shape$$90$$;
  this.$_color$ = $color$$66$$ ? $color$$66$$ : "#000000";
  this.$_pattern$ = $pattern$$14$$;
  this.$_opacity$ = $opacity$$7$$
};
D.$JSCompiler_StaticMethods_filterRow$$ = function $$JSCompiler_StaticMethods_filterRow$$$($JSCompiler_StaticMethods_filterRow$self$$, $suppressResize$$) {
  $JSCompiler_StaticMethods_filterRow$self$$.$_bHidden$ = !$JSCompiler_StaticMethods_filterRow$self$$.$_bHidden$;
  $JSCompiler_StaticMethods_filterRow$self$$.$_marker$.$setHollow$($JSCompiler_StaticMethods_filterRow$self$$.$_color$);
  $JSCompiler_StaticMethods_filterRow$self$$.$UpdateAriaLabel$();
  $suppressResize$$ || ($JSCompiler_StaticMethods_filterRow$self$$.$_legend$.$_dim$ = $JSCompiler_StaticMethods_filterRow$self$$.$_legend$.$getDimensionsWithStroke$(), $JSCompiler_StaticMethods_filterRow$self$$.$_legend$.$FireListener$(new D.$DvtResizeEvent$$($JSCompiler_StaticMethods_filterRow$self$$.$_legend$.$_dim$.$w$, $JSCompiler_StaticMethods_filterRow$self$$.$_legend$.$_dim$.$h$, $JSCompiler_StaticMethods_filterRow$self$$.$_legend$.$_dim$.x, $JSCompiler_StaticMethods_filterRow$self$$.$_legend$.$_dim$.y)))
};
D.$DvtCommonLegendRow$$.prototype.$getAriaLabel$ = function $$DvtCommonLegendRow$$$$$getAriaLabel$$() {
  if(this.$_legend$.$_showHideEnabled$) {
    var $bundle$$14$$ = this.$_legend$.$__getBundle$(), $states$$8$$ = [(0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$14$$, this.$_bHidden$ ? "STATE_HIDDEN" : "STATE_VISIBLE")];
    return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$_text$, $states$$8$$, $bundle$$14$$)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtCommonLegendRow$$.prototype.$UpdateAriaLabel$ = function $$DvtCommonLegendRow$$$$$UpdateAriaLabel$$() {
  (0,D.$DvtAgent$deferAriaCreation$$)() || (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this, "label", this.$getAriaLabel$())
};
D.$DvtCommonLegendRow$$.prototype.$render$ = function $$DvtCommonLegendRow$$$$$render$$($parent$$79_rowX$$, $availSpace$$99$$, $isBiDi$$8$$) {
  if(this.$_prop$) {
    var $JSCompiler_StaticMethods_addAttrLookup$self$$inline_6574_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6582_fitWidth$$4_isCustomShape$$ = this.$_legend$, $attributeGroupId$$inline_6575_hideAttrs$$inline_6583_text$$86$$ = this.$_prop$.attributeGroupId, $itemId$$inline_6576$$ = this.$_prop$.itemId;
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_6574_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6582_fitWidth$$4_isCustomShape$$.$_attrLookUp$[$attributeGroupId$$inline_6575_hideAttrs$$inline_6583_text$$86$$] == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_addAttrLookup$self$$inline_6574_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6582_fitWidth$$4_isCustomShape$$.$_attrLookUp$[$attributeGroupId$$inline_6575_hideAttrs$$inline_6583_text$$86$$] = {});
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_6574_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6582_fitWidth$$4_isCustomShape$$.$_attrLookUp$[$attributeGroupId$$inline_6575_hideAttrs$$inline_6583_text$$86$$][$itemId$$inline_6576$$] = this;
    this.$_legend$.$_associations$.push(this);
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_6574_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6582_fitWidth$$4_isCustomShape$$ = this.$_legend$;
    $attributeGroupId$$inline_6575_hideAttrs$$inline_6583_text$$86$$ = this.$_prop$.hideAttrs;
    $JSCompiler_StaticMethods_addAttrLookup$self$$inline_6574_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6582_fitWidth$$4_isCustomShape$$.$_hideAttrsLookUp$[$attributeGroupId$$inline_6575_hideAttrs$$inline_6583_text$$86$$] || ($JSCompiler_StaticMethods_addAttrLookup$self$$inline_6574_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6582_fitWidth$$4_isCustomShape$$.$_hideAttrsLookUp$[$attributeGroupId$$inline_6575_hideAttrs$$inline_6583_text$$86$$] = this)
  }
  $parent$$79_rowX$$.$addChild$(this);
  $parent$$79_rowX$$ = $availSpace$$99$$.x;
  $isBiDi$$8$$ && ($availSpace$$99$$.x -= this.$_styleMap$.indicatorSize);
  var $marker$$25_textDim$$5$$;
  if(this.$_url$ || this.$_shape$ != D.$JSCompiler_alias_NULL$$) {
    $marker$$25_textDim$$5$$ = new D.$DvtMarker$$(this.$_context$, this.$_url$ ? [this.$_url$] : this.$_shape$, this.$_styleMap$[D.DvtCommonLegend.$SKIN_NAME$], $availSpace$$99$$.x, $availSpace$$99$$.y, this.$_styleMap$.indicatorSize, this.$_styleMap$.indicatorSize), $JSCompiler_StaticMethods_addAttrLookup$self$$inline_6574_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6582_fitWidth$$4_isCustomShape$$ = D.$DvtMarkerUtils$$.$getCustomMarkerInfo$(this.$_context$, this.$_shape$), !this.$_url$ && 
    !$JSCompiler_StaticMethods_addAttrLookup$self$$inline_6574_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6582_fitWidth$$4_isCustomShape$$ && (this.$_pattern$ ? $marker$$25_textDim$$5$$.$setFill$(new D.$DvtPatternFill$$(this.$_pattern$, this.$_color$)) : $marker$$25_textDim$$5$$.$setSolidFill$(this.$_color$, this.$_opacity$)), this.$addChild$($marker$$25_textDim$$5$$), $availSpace$$99$$.x = $isBiDi$$8$$ ? $availSpace$$99$$.x - this.$_styleMap$.rowColGap : $availSpace$$99$$.x + this.$_styleMap$.indicatorSize + 
    this.$_styleMap$.rowColGap
  }
  this.$_marker$ = $marker$$25_textDim$$5$$;
  $marker$$25_textDim$$5$$ = new D.$DvtRectangle$$;
  this.$_text$ && (this.$_legend$.$_showHideEnabled$ && ((0,D.$JSCompiler_StaticMethods_setAriaRole$$)(this, "img"), this.$UpdateAriaLabel$()), $JSCompiler_StaticMethods_addAttrLookup$self$$inline_6574_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6582_fitWidth$$4_isCustomShape$$ = $availSpace$$99$$.$w$ - $availSpace$$99$$.x, $isBiDi$$8$$ && ($JSCompiler_StaticMethods_addAttrLookup$self$$inline_6574_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6582_fitWidth$$4_isCustomShape$$ = 
  $availSpace$$99$$.$w$ - $JSCompiler_StaticMethods_addAttrLookup$self$$inline_6574_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6582_fitWidth$$4_isCustomShape$$), 0 > $JSCompiler_StaticMethods_addAttrLookup$self$$inline_6574_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6582_fitWidth$$4_isCustomShape$$ ? this.$_legend$.$getEventManager$().$associate$(this.$_marker$, new D.$DvtSimpleObjPeer$$(this.$_text$)) : ($attributeGroupId$$inline_6575_hideAttrs$$inline_6583_text$$86$$ = 
  this.$_legend$.$isWordWrap$() ? new D.$DvtMultilineText$$(this.$_context$) : new D.$DvtOutputText$$(this.$_context$), $isBiDi$$8$$ && $attributeGroupId$$inline_6575_hideAttrs$$inline_6583_text$$86$$.$alignRight$(), this.$_itemStyle$ && $attributeGroupId$$inline_6575_hideAttrs$$inline_6583_text$$86$$.$setCSSStyle$(new D.$DvtCSSStyle$$(this.$_itemStyle$)), $attributeGroupId$$inline_6575_hideAttrs$$inline_6583_text$$86$$.$setTextString$(this.$_text$), $attributeGroupId$$inline_6575_hideAttrs$$inline_6583_text$$86$$.$setX$($availSpace$$99$$.x), 
  $attributeGroupId$$inline_6575_hideAttrs$$inline_6583_text$$86$$.$setY$($availSpace$$99$$.y), D.$DvtTextUtils$$.$fitText$($attributeGroupId$$inline_6575_hideAttrs$$inline_6583_text$$86$$, $JSCompiler_StaticMethods_addAttrLookup$self$$inline_6574_JSCompiler_StaticMethods_addHideAttrsLookup$self$$inline_6582_fitWidth$$4_isCustomShape$$, $availSpace$$99$$.$h$, this) ? ($marker$$25_textDim$$5$$ = $attributeGroupId$$inline_6575_hideAttrs$$inline_6583_text$$86$$.$getDimensions$(), $attributeGroupId$$inline_6575_hideAttrs$$inline_6583_text$$86$$.$isTruncated$() && 
  this.$_legend$.$getEventManager$().$associate$($attributeGroupId$$inline_6575_hideAttrs$$inline_6583_text$$86$$, new D.$DvtSimpleObjPeer$$(this.$_text$))) : this.$_legend$.$getEventManager$().$associate$(this.$_marker$, new D.$DvtSimpleObjPeer$$(this.$_text$))));
  $availSpace$$99$$.y = $availSpace$$99$$.y + window.Math.max(this.$_styleMap$.indicatorSize, $marker$$25_textDim$$5$$.$h$) + this.$_styleMap$.rowColGap;
  $availSpace$$99$$.x = $parent$$79_rowX$$
};
D.$DvtCommonLegendEventManager$$ = function $$DvtCommonLegendEventManager$$$($context$$470$$, $callback$$103$$, $legend$$34$$) {
  this.Init($context$$470$$, $callback$$103$$, $legend$$34$$);
  this.$_legend$ = $legend$$34$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtCommonLegendEventManager$$, D.$DvtEventManager$$, "DvtCommonLegendEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtCommonLegendEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$493$$) {
  D.$DvtCommonLegendEventManager$$.$superclass$.$OnClick$.call(this, $event$$493$$);
  this.$_handleClick$($event$$493$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$494$$) {
  D.$DvtCommonLegendEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$494$$);
  (0,D.$JSCompiler_StaticMethods__handleRollOver$$)(this, $event$$494$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$495$$) {
  D.$DvtCommonLegendEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$495$$);
  (0,D.$JSCompiler_StaticMethods__handleRollOver$$)(this, $event$$495$$)
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$496$$) {
  D.$DvtCommonLegendEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $event$$496$$);
  this.$_handleClick$($event$$496$$)
};
D.$JSCompiler_prototypeAlias$$.$_handleClick$ = function $$JSCompiler_prototypeAlias$$$$_handleClick$$($event$$497_listItemEvent$$inline_6591$$) {
  if(this.$_legend$.$_showHideEnabled$) {
    var $obj$$189$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$497_listItemEvent$$inline_6591$$.target);
    if($obj$$189$$ instanceof D.$DvtCommonLegendRow$$) {
      var $listItemId$$inline_6589$$ = $obj$$189$$.$getItemId$(), $attributeGroupId$$inline_6590$$ = $obj$$189$$.$getAttributeGroup$();
      (0,D.$JSCompiler_StaticMethods_filterRow$$)($obj$$189$$);
      $event$$497_listItemEvent$$inline_6591$$ = new D.$DvtListItemEvent$$($listItemId$$inline_6589$$, $attributeGroupId$$inline_6590$$, $obj$$189$$.$_bHidden$ ? "hide" : "show", $event$$497_listItemEvent$$inline_6591$$);
      this.$_legend$.$FireListener$($event$$497_listItemEvent$$inline_6591$$)
    }
  }
};
D.$JSCompiler_StaticMethods__handleRollOver$$ = function $$JSCompiler_StaticMethods__handleRollOver$$$($JSCompiler_StaticMethods__handleRollOver$self$$, $event$$498$$) {
  var $obj$$190$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)($JSCompiler_StaticMethods__handleRollOver$self$$, $event$$498$$.target);
  if($obj$$190$$ instanceof D.$DvtCommonLegendRow$$) {
    if($JSCompiler_StaticMethods__handleRollOver$self$$.$_legend$.$_rollOverEnabled$) {
      var $listItemId$$inline_6596_rollOverEvent$$inline_6598$$ = $obj$$190$$.$getItemId$(), $attributeGroupId$$inline_6597$$ = $obj$$190$$.$getAttributeGroup$(), $listItemId$$inline_6596_rollOverEvent$$inline_6598$$ = new D.$DvtLegendItemRollOverEvent$$($listItemId$$inline_6596_rollOverEvent$$inline_6598$$, $attributeGroupId$$inline_6597$$, $obj$$190$$.$getHideAttributes$(), $event$$498$$.type, $event$$498$$);
      $JSCompiler_StaticMethods__handleRollOver$self$$.$_legend$.$FireListener$($listItemId$$inline_6596_rollOverEvent$$inline_6598$$)
    }
    $JSCompiler_StaticMethods__handleRollOver$self$$.$_legend$.$_showHideEnabled$ && (0,D.$JSCompiler_StaticMethods_UpdateActiveElement$$)($JSCompiler_StaticMethods__handleRollOver$self$$, $obj$$190$$)
  }
};
});