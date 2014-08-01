define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtAttrGroups$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAttrGroups$$, D.$DvtObj$$, "DvtAttrGroups");
D.$DvtAttrGroups$$.prototype.get = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtDiscreteAttrGroups$$ = function $$DvtDiscreteAttrGroups$$$() {
  this.$_results$ = []
};
D.$DvtObj$$.$createSubclass$(D.$DvtDiscreteAttrGroups$$, D.$DvtAttrGroups$$, "DvtDiscreteAttrGroups");
D.$DvtDiscreteAttrGroups$$.prototype.add = function $$DvtDiscreteAttrGroups$$$$add$($group$$32$$, $groupLabel$$2$$, $params$$64$$) {
  this.$_results$.push({group:$group$$32$$, $groupLabel$:$groupLabel$$2$$, $params$:$params$$64$$})
};
D.$DvtDiscreteAttrGroups$$.prototype.get = function $$DvtDiscreteAttrGroups$$$$get$($group$$33$$) {
  if(window.value === D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $i$$818$$ = 0;$i$$818$$ < this.$_results$.length;$i$$818$$++) {
    if(this.$_results$[$i$$818$$].group == $group$$33$$) {
      return this.$_results$[$i$$818$$].$params$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtContinuousAttrGroups$$ = function $$DvtContinuousAttrGroups$$$($minValue$$15$$, $maxValue$$16$$, $minLabel$$3$$, $maxLabel$$3$$, $ramp$$2$$) {
  this.$_minValue$ = $minValue$$15$$;
  this.$_maxValue$ = $maxValue$$16$$;
  this.$_minLabel$ = $minLabel$$3$$ ? $minLabel$$3$$ : this.$_minValue$;
  this.$_maxLabel$ = $maxLabel$$3$$ ? $maxLabel$$3$$ : this.$_maxValue$;
  this.$_ramp$ = $ramp$$2$$;
  this.$_range$ = this.$_maxValue$ - this.$_minValue$
};
D.$DvtObj$$.$createSubclass$(D.$DvtContinuousAttrGroups$$, D.$DvtAttrGroups$$, "DvtContinuousAttrGroups");
D.$DvtContinuousAttrGroups$$.prototype.get = function $$DvtContinuousAttrGroups$$$$get$($index$$148_ratio$$11_value$$141$$) {
  if((0,window.isNaN)($index$$148_ratio$$11_value$$141$$) || $index$$148_ratio$$11_value$$141$$ === D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $index$$148_ratio$$11_value$$141$$ = ($index$$148_ratio$$11_value$$141$$ - this.$_minValue$) / this.$_range$;
  $index$$148_ratio$$11_value$$141$$ = window.Math.max(window.Math.min($index$$148_ratio$$11_value$$141$$, 1), 0);
  $index$$148_ratio$$11_value$$141$$ *= this.$_ramp$.length - 1;
  return $index$$148_ratio$$11_value$$141$$ === window.Math.round($index$$148_ratio$$11_value$$141$$) ? this.$_ramp$[$index$$148_ratio$$11_value$$141$$] : D.$DvtColorUtils$$.$interpolateColor$(this.$_ramp$[window.Math.floor($index$$148_ratio$$11_value$$141$$)], this.$_ramp$[window.Math.ceil($index$$148_ratio$$11_value$$141$$)], $index$$148_ratio$$11_value$$141$$ - window.Math.floor($index$$148_ratio$$11_value$$141$$))
};
D.$DvtContinuousAttrGroups$$.prototype.$getMinLabel$ = (0,D.$JSCompiler_get$$)("$_minLabel$");
D.$DvtLegendAttrGroupsRenderer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtLegendAttrGroupsRenderer$$, D.$DvtObj$$, "DvtLegendAttrGroupsRenderer");
D.$DvtLegendAttrGroupsRenderer$$.$_LEGEND_MAX_HEIGHT$ = 0.4;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_GROUP_GAP$ = 1;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_WIDTH$ = 50;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_HEIGHT$ = 10;
D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$ = 5;
D.$DvtLegendAttrGroupsRenderer$$.$_LABEL_SIZE$ = 11;
D.$DvtLegendAttrGroupsRenderer$$.$_LABEL_COLOR$ = "#636363";
D.$DvtLegendAttrGroupsRenderer$$.$_LABEL_VALUE_COLOR$ = "#333333";
D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$ = function $$DvtLegendAttrGroupsRenderer$$$$renderAttrGroups$$($context$$292$$, $eventManager$$10$$, $container$$92$$, $availWidth$$6$$, $availHeight$$4$$, $attrGroups$$8$$, $styles$$19$$) {
  var $colorContainer$$1$$ = D.$JSCompiler_alias_NULL$$;
  $attrGroups$$8$$ && ($attrGroups$$8$$ instanceof D.$DvtContinuousAttrGroups$$ ? $colorContainer$$1$$ = D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsContinuous$($context$$292$$, $eventManager$$10$$, $container$$92$$, $availWidth$$6$$, $attrGroups$$8$$, $styles$$19$$) : $attrGroups$$8$$ instanceof D.$DvtDiscreteAttrGroups$$ && ($colorContainer$$1$$ = D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsDiscrete$($context$$292$$, $container$$92$$, $availWidth$$6$$, $availHeight$$4$$, $attrGroups$$8$$, 
  $styles$$19$$)));
  return $colorContainer$$1$$
};
D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsContinuous$ = function $$DvtLegendAttrGroupsRenderer$$$$_renderAttrGroupsContinuous$$($context$$293_maxLabel$$1$$, $eventManager$$11$$, $container$$93_minLabelStr$$, $availWidth$$7$$, $attrGroups$$9_maxLabelStr$$, $maxLabelWidth$$3_minLabelWidth_styles$$20$$) {
  var $isRTL$$16$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$293_maxLabel$$1$$), $labelY$$4$$ = D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_HEIGHT$ / 2 + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_GROUP_GAP$, $colorContainer$$2$$ = new D.$DvtContainer$$($context$$293_maxLabel$$1$$);
  $container$$93_minLabelStr$$.$addChild$($colorContainer$$2$$);
  $container$$93_minLabelStr$$ = $attrGroups$$9_maxLabelStr$$.$getMinLabel$();
  var $minLabel$$1$$ = new D.$DvtOutputText$$($context$$293_maxLabel$$1$$, $container$$93_minLabelStr$$, 0, $labelY$$4$$);
  $minLabel$$1$$.$setCSSStyle$($maxLabelWidth$$3_minLabelWidth_styles$$20$$.$labelStyle$);
  $minLabel$$1$$.$alignMiddle$();
  $colorContainer$$2$$.$addChild$($minLabel$$1$$);
  var $gradientRect$$ = new D.$DvtRect$$($context$$293_maxLabel$$1$$, 0, D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_GROUP_GAP$, D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_WIDTH$, D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_HEIGHT$), $gradientWidth_ramp$$1$$ = $isRTL$$16$$ ? $attrGroups$$9_maxLabelStr$$.$_ramp$.slice(0).slice().reverse() : $attrGroups$$9_maxLabelStr$$.$_ramp$.slice(0);
  $gradientRect$$.$setFill$(new D.$DvtLinearGradientFill$$(0, $gradientWidth_ramp$$1$$));
  $maxLabelWidth$$3_minLabelWidth_styles$$20$$.borderColor && $gradientRect$$.$setSolidStroke$($maxLabelWidth$$3_minLabelWidth_styles$$20$$.borderColor);
  $colorContainer$$2$$.$addChild$($gradientRect$$);
  $gradientWidth_ramp$$1$$ = D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_WIDTH$ + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$;
  $attrGroups$$9_maxLabelStr$$ = $attrGroups$$9_maxLabelStr$$.$_maxLabel$;
  $context$$293_maxLabel$$1$$ = new D.$DvtOutputText$$($context$$293_maxLabel$$1$$, $attrGroups$$9_maxLabelStr$$, 0, $labelY$$4$$);
  $context$$293_maxLabel$$1$$.$setCSSStyle$($maxLabelWidth$$3_minLabelWidth_styles$$20$$.$labelStyle$);
  $context$$293_maxLabel$$1$$.$alignMiddle$();
  $colorContainer$$2$$.$addChild$($context$$293_maxLabel$$1$$);
  $isRTL$$16$$ ? ($maxLabelWidth$$3_minLabelWidth_styles$$20$$ = $context$$293_maxLabel$$1$$.$measureDimensions$().$w$ + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$, $gradientRect$$.$setTranslateX$($maxLabelWidth$$3_minLabelWidth_styles$$20$$), $minLabel$$1$$.$setX$($maxLabelWidth$$3_minLabelWidth_styles$$20$$ + $gradientWidth_ramp$$1$$)) : ($maxLabelWidth$$3_minLabelWidth_styles$$20$$ = $minLabel$$1$$.$measureDimensions$().$w$ + D.$DvtLegendAttrGroupsRenderer$$.$_CONTINUOUS_ITEM_GAP$, 
  $gradientRect$$.$setTranslateX$($maxLabelWidth$$3_minLabelWidth_styles$$20$$), $context$$293_maxLabel$$1$$.$setX$($maxLabelWidth$$3_minLabelWidth_styles$$20$$ + $gradientWidth_ramp$$1$$));
  $eventManager$$11$$.$associate$($gradientRect$$, new D.$DvtSimpleObjPeer$$($container$$93_minLabelStr$$ + " - " + $attrGroups$$9_maxLabelStr$$));
  $colorContainer$$2$$.$getDimensions$().$w$ > $availWidth$$7$$ && ($colorContainer$$2$$.removeChild($minLabel$$1$$), $colorContainer$$2$$.removeChild($context$$293_maxLabel$$1$$), $gradientRect$$.$setTranslateX$(0));
  return $colorContainer$$2$$
};
D.$DvtLegendAttrGroupsRenderer$$.$_renderAttrGroupsDiscrete$ = function $$DvtLegendAttrGroupsRenderer$$$$_renderAttrGroupsDiscrete$$($context$$294_rect$$30$$, $container$$94_preferredDims$$, $actualDims_availWidth$$8$$, $availHeight$$6$$, $attrGroups$$10_mappings$$, $component$$15_styles$$21$$) {
  var $items$$21_legendOptions$$8$$ = [];
  $attrGroups$$10_mappings$$ = $attrGroups$$10_mappings$$.$_results$.slice(0);
  for(var $i$$526$$ = 0;$i$$526$$ < $attrGroups$$10_mappings$$.length;$i$$526$$++) {
    var $mapping$$4$$ = $attrGroups$$10_mappings$$[$i$$526$$];
    $items$$21_legendOptions$$8$$.push({text:$mapping$$4$$.$groupLabel$, color:$mapping$$4$$.$params$.color, pattern:$mapping$$4$$.$params$.pattern, borderColor:$component$$15_styles$$21$$.borderColor})
  }
  $items$$21_legendOptions$$8$$ = {sections:[{items:$items$$21_legendOptions$$8$$}], orientation:"horizontal", layout:{outerGapWidth:0, outerGapHeight:0}, textStyle:$component$$15_styles$$21$$.$labelStyle$.toString()};
  $component$$15_styles$$21$$ = (0,D.$DvtLegend$newInstance$$)($context$$294_rect$$30$$);
  $component$$15_styles$$21$$.setId(D.$JSCompiler_alias_NULL$$);
  $container$$94_preferredDims$$.$addChild$($component$$15_styles$$21$$);
  $container$$94_preferredDims$$ = $component$$15_styles$$21$$.$getPreferredSize$($items$$21_legendOptions$$8$$, $actualDims_availWidth$$8$$, $availHeight$$6$$ * D.$DvtLegendAttrGroupsRenderer$$.$_LEGEND_MAX_HEIGHT$);
  $component$$15_styles$$21$$.$render$($items$$21_legendOptions$$8$$, $actualDims_availWidth$$8$$, $container$$94_preferredDims$$.$h$);
  $actualDims_availWidth$$8$$ = $component$$15_styles$$21$$.$getDimensions$();
  $context$$294_rect$$30$$ = new D.$DvtRect$$($context$$294_rect$$30$$, 0, 0, $actualDims_availWidth$$8$$.$w$, $container$$94_preferredDims$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$294_rect$$30$$);
  $component$$15_styles$$21$$.$addChildAt$($context$$294_rect$$30$$, 0);
  return $component$$15_styles$$21$$
};
D.$DvtBreadcrumbsDrillEvent$$ = function $$DvtBreadcrumbsDrillEvent$$$($id$$289$$) {
  this.Init("breadcrumbsDrill");
  this.$_id$ = $id$$289$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsDrillEvent$$, D.$DvtBaseComponentEvent$$, "DvtBreadcrumbsDrillEvent");
D.$DvtBreadcrumbsDrillEvent$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtBreadcrumbs$$ = function $$DvtBreadcrumbs$$$($context$$687$$, $callback$$134$$, $callbackObj$$104$$, $options$$243$$) {
  this.Init($context$$687$$, $callback$$134$$, $callbackObj$$104$$, $options$$243$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbs$$, D.$DvtContainer$$, "DvtBreadcrumbs");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBreadcrumbs$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$688$$, $callback$$135$$, $callbackObj$$105$$, $options$$244$$) {
  D.$DvtBreadcrumbs$$.$superclass$.Init.call(this, $context$$688$$);
  this.$setOptions$($options$$244$$);
  this.$_eventHandler$ = new D.$DvtBreadcrumbsEventManager$$(this, $context$$688$$, $callback$$135$$, $callbackObj$$105$$);
  this.$_eventHandler$.$addListeners$(this);
  this.setId("breadcrumbs1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$_curCrumbIdx$ = -1;
  this.$_crumbs$ = this.$_keyboardFocusRect$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setOptions$ = function $$JSCompiler_prototypeAlias$$$$setOptions$$($options$$245$$) {
  this.$_options$ = D.$DvtBreadcrumbsDefaults$$.$calcOptions$($options$$245$$)
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($data$$96$$, $width$$150$$) {
  this.$_data$ = $data$$96$$ ? D.$DvtJSONUtils$$.clone($data$$96$$) : this.$_data$;
  this.$removeChildren$();
  this.$_crumbs$ = D.$JSCompiler_alias_NULL$$;
  D.$DvtBreadcrumbsRenderer$$.$render$(this, this, $width$$150$$)
};
D.$JSCompiler_prototypeAlias$$.$__getOptions$ = (0,D.$JSCompiler_get$$)("$_options$");
D.$JSCompiler_prototypeAlias$$.$getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  var $prevCrumbIdx$$ = this.$_curCrumbIdx$;
  this.$_curCrumbIdx$ = -1;
  this.$_updateKeyboardFocusEffect$($prevCrumbIdx$$, this.$_curCrumbIdx$)
};
D.$JSCompiler_prototypeAlias$$.$_updateKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$_updateKeyboardFocusEffect$$($prevIdx$$, $nextIdx$$) {
  var $prevKeyboardFocusRect$$ = this.$_keyboardFocusRect$, $context$$689_nextKeyboardFocusRect$$ = D.$JSCompiler_alias_NULL$$, $matrix$$24_nextCrumbObj$$ = (0,D.$JSCompiler_StaticMethods_getCrumb$$)(this, $nextIdx$$);
  if($matrix$$24_nextCrumbObj$$) {
    var $bounds$$139_peer$$24$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_eventHandler$, $matrix$$24_nextCrumbObj$$);
    $bounds$$139_peer$$24$$ && $bounds$$139_peer$$24$$.$isDrillable$ && $bounds$$139_peer$$24$$.$_bDrillable$ ? ($context$$689_nextKeyboardFocusRect$$ = this.$_context$, $bounds$$139_peer$$24$$ = $matrix$$24_nextCrumbObj$$.$getDimensions$(), $matrix$$24_nextCrumbObj$$ = $matrix$$24_nextCrumbObj$$.$getMatrix$(), this.$_keyboardFocusRect$ = $context$$689_nextKeyboardFocusRect$$ = new D.$DvtKeyboardFocusEffect$$($context$$689_nextKeyboardFocusRect$$, this, $bounds$$139_peer$$24$$, $matrix$$24_nextCrumbObj$$)) : 
    this.$_keyboardFocusRect$ = D.$JSCompiler_alias_NULL$$
  }
  $prevKeyboardFocusRect$$ && $prevKeyboardFocusRect$$.$hide$();
  $context$$689_nextKeyboardFocusRect$$ && $context$$689_nextKeyboardFocusRect$$.show()
};
D.$JSCompiler_StaticMethods_getCrumb$$ = function $$JSCompiler_StaticMethods_getCrumb$$$($JSCompiler_StaticMethods_getCrumb$self$$, $crumbIdx$$) {
  var $crumbs$$ = $JSCompiler_StaticMethods_getCrumb$self$$.$_crumbs$;
  return 0 > $crumbIdx$$ || !$crumbs$$ || $crumbIdx$$ >= $crumbs$$.length ? D.$JSCompiler_alias_NULL$$ : $crumbs$$[$crumbIdx$$]
};
D.$DvtBreadcrumbsDefaults$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsDefaults$$, D.$DvtObj$$, "DvtBreadcrumbsDefaults");
D.$DvtBreadcrumbsDefaults$$.$VERSION_1$ = {labelStyle:"font-size: 11px; color: #003286;", disabledLabelStyle:"font-size: 11px;", $__labelGap$:2, $__labelSeparator$:"\x3e"};
D.$DvtBreadcrumbsDefaults$$.$calcOptions$ = function $$DvtBreadcrumbsDefaults$$$$calcOptions$$($userOptions$$6$$) {
  var $defaults$$12$$ = D.$DvtBreadcrumbsDefaults$$.$_getDefaults$($userOptions$$6$$);
  return $userOptions$$6$$ ? D.$DvtJSONUtils$$.$merge$($userOptions$$6$$, $defaults$$12$$) : $defaults$$12$$
};
D.$DvtBreadcrumbsDefaults$$.$_getDefaults$ = function $$DvtBreadcrumbsDefaults$$$$_getDefaults$$() {
  return D.$DvtJSONUtils$$.clone(D.$DvtBreadcrumbsDefaults$$.$VERSION_1$)
};
D.$DvtBreadcrumbsDefaults$$.$getGapSize$ = function $$DvtBreadcrumbsDefaults$$$$getGapSize$$($options$$182$$, $defaultSize$$4$$) {
  return window.Math.ceil($defaultSize$$4$$ * $options$$182$$.layout.gapRatio)
};
D.$DvtBreadcrumbsEventManager$$ = function $$DvtBreadcrumbsEventManager$$$($breadcrumbs$$5$$, $context$$299$$, $callback$$83$$, $callbackObj$$57$$) {
  this.Init($context$$299$$, $callback$$83$$, $callbackObj$$57$$);
  this.$_breadcrumbs$ = $breadcrumbs$$5$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsEventManager$$, D.$DvtEventManager$$, "DvtBreadcrumbsEventManager");
D.$DvtBreadcrumbsEventManager$$.prototype.$OnClick$ = function $$DvtBreadcrumbsEventManager$$$$$OnClick$$($event$$386$$) {
  D.$DvtBreadcrumbsEventManager$$.$superclass$.$OnClick$.call(this, $event$$386$$);
  (0,D.$JSCompiler_StaticMethods__processBreadcrumbs$$)(this, (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$386$$.target))
};
D.$DvtBreadcrumbsEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtBreadcrumbsEventManager$$$$$HandleTouchClickInternal$$($event$$387$$) {
  (0,D.$JSCompiler_StaticMethods__processBreadcrumbs$$)(this, (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$387$$.target))
};
D.$JSCompiler_StaticMethods__processBreadcrumbs$$ = function $$JSCompiler_StaticMethods__processBreadcrumbs$$$($JSCompiler_StaticMethods__processBreadcrumbs$self$$, $obj$$165$$) {
  if($obj$$165$$ && $obj$$165$$ instanceof D.$DvtBreadcrumbsPeer$$ && $obj$$165$$.$_bDrillable$) {
    var $event$$388$$ = new D.$DvtBreadcrumbsDrillEvent$$($obj$$165$$.getId());
    $JSCompiler_StaticMethods__processBreadcrumbs$self$$.$FireEvent$($event$$388$$, $JSCompiler_StaticMethods__processBreadcrumbs$self$$.$_breadcrumbs$)
  }
};
D.$DvtBreadcrumbsEventManager$$.prototype.$handleKeyboardEvent$ = function $$DvtBreadcrumbsEventManager$$$$$handleKeyboardEvent$$($event$$389$$) {
  var $eventConsumed$$6$$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5310_curCrumbIdx_keyCode$$24$$ = $event$$389$$.keyCode;
  if(9 == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5310_curCrumbIdx_keyCode$$24$$) {
    var $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5310_curCrumbIdx_keyCode$$24$$ = this.$_breadcrumbs$, $prevCrumbIdx$$inline_5312$$ = $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5310_curCrumbIdx_keyCode$$24$$.$_curCrumbIdx$, $JSCompiler_inline_result$$8945_prevIndex$$inline_10292$$;
    $JSCompiler_inline_result$$8945_prevIndex$$inline_10292$$ = $prevCrumbIdx$$inline_5312$$;
    var $bForward$$inline_10293$$ = !$event$$389$$.shiftKey;
    $JSCompiler_inline_result$$8945_prevIndex$$inline_10292$$ = -1 == $JSCompiler_inline_result$$8945_prevIndex$$inline_10292$$ ? $bForward$$inline_10293$$ ? 0 : $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5310_curCrumbIdx_keyCode$$24$$.$_data$.$items$.length - 2 : $bForward$$inline_10293$$ ? $JSCompiler_inline_result$$8945_prevIndex$$inline_10292$$ == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5310_curCrumbIdx_keyCode$$24$$.$_data$.$items$.length - 2 ? -1 : ++$JSCompiler_inline_result$$8945_prevIndex$$inline_10292$$ : 
    0 == $JSCompiler_inline_result$$8945_prevIndex$$inline_10292$$ ? -1 : --$JSCompiler_inline_result$$8945_prevIndex$$inline_10292$$;
    $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5310_curCrumbIdx_keyCode$$24$$.$_curCrumbIdx$ = $JSCompiler_inline_result$$8945_prevIndex$$inline_10292$$;
    $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5310_curCrumbIdx_keyCode$$24$$.$_updateKeyboardFocusEffect$($prevCrumbIdx$$inline_5312$$, $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5310_curCrumbIdx_keyCode$$24$$.$_curCrumbIdx$);
    $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5310_curCrumbIdx_keyCode$$24$$ = $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5310_curCrumbIdx_keyCode$$24$$.$_curCrumbIdx$;
    -1 == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5310_curCrumbIdx_keyCode$$24$$ ? $eventConsumed$$6$$ = D.$JSCompiler_alias_FALSE$$ : (0,D.$JSCompiler_StaticMethods_UpdateActiveElement$$)(this, (0,D.$JSCompiler_StaticMethods_getCrumb$$)(this.$_breadcrumbs$, $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5310_curCrumbIdx_keyCode$$24$$))
  }else {
    13 == $JSCompiler_StaticMethods_updateCrumbFocus$self$$inline_5310_curCrumbIdx_keyCode$$24$$ && (0,D.$JSCompiler_StaticMethods__processBreadcrumbs$$)(this, (0,D.$JSCompiler_StaticMethods_getCrumb$$)(this.$_breadcrumbs$, this.$_breadcrumbs$.$_curCrumbIdx$))
  }
  $eventConsumed$$6$$ && $event$$389$$.preventDefault();
  return $eventConsumed$$6$$
};
D.$DvtBreadcrumbsPeer$$ = function $$DvtBreadcrumbsPeer$$$($id$$141$$, $displayable$$62$$) {
  this.Init();
  this.$_id$ = $id$$141$$;
  this.$_bDrillable$ = D.$JSCompiler_alias_FALSE$$;
  this.$_displayable$ = $displayable$$62$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsPeer$$, D.$DvtSimpleObjPeer$$, "DvtBreadcrumbsPeer");
D.$DvtBreadcrumbsPeer$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtBreadcrumbsPeer$$.prototype.$isDrillable$ = (0,D.$JSCompiler_get$$)("$_bDrillable$");
D.$DvtBreadcrumbsPeer$$.prototype.$setDrillable$ = (0,D.$JSCompiler_set$$)("$_bDrillable$");
D.$DvtBreadcrumbsPeer$$.prototype.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$_displayable$");
D.$DvtBreadcrumbsRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtBreadcrumbsRenderer$$, D.$DvtObj$$, "DvtBreadcrumbsRenderer");
D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$ = 3;
D.$DvtBreadcrumbsRenderer$$.$render$ = function $$DvtBreadcrumbsRenderer$$$$render$$($breadcrumbs$$1$$, $container$$95$$, $width$$101$$) {
  for(var $context$$296$$ = $breadcrumbs$$1$$.$_context$, $dataItems$$2$$ = ($breadcrumbs$$1$$.$_data$ ? $breadcrumbs$$1$$.$_data$ : {}).$items$ ? ($breadcrumbs$$1$$.$_data$ ? $breadcrumbs$$1$$.$_data$ : {}).$items$ : [], $options$$177$$ = $breadcrumbs$$1$$.$__getOptions$(), $eventManager$$13$$ = $breadcrumbs$$1$$.$getEventManager$(), $labels$$18$$ = [], $peers$$6$$ = [], $i$$527$$ = 0;$i$$527$$ < $dataItems$$2$$.length;$i$$527$$++) {
    var $dataItem$$31_peer$$21$$ = $dataItems$$2$$[$i$$527$$];
    if($dataItem$$31_peer$$21$$) {
      var $label$$67$$ = D.$DvtBreadcrumbsRenderer$$.$_createLabel$($context$$296$$, $dataItem$$31_peer$$21$$.text ? $dataItem$$31_peer$$21$$.text : "", $options$$177$$, $i$$527$$ < $dataItems$$2$$.length - 1);
      $labels$$18$$.push($label$$67$$);
      $dataItem$$31_peer$$21$$ = new D.$DvtBreadcrumbsPeer$$($dataItem$$31_peer$$21$$.id, $label$$67$$);
      $eventManager$$13$$.$associate$($label$$67$$, $dataItem$$31_peer$$21$$);
      $peers$$6$$.push($dataItem$$31_peer$$21$$);
      $i$$527$$ < $dataItems$$2$$.length - 1 && ($label$$67$$.setCursor("pointer"), $dataItem$$31_peer$$21$$.$setDrillable$(D.$JSCompiler_alias_TRUE$$))
    }
  }
  $breadcrumbs$$1$$.$_crumbs$ = $labels$$18$$;
  (0,D.$DvtAgent$isRightToLeft$$)($context$$296$$) ? D.$DvtBreadcrumbsRenderer$$.$_positionLabelsBidi$($breadcrumbs$$1$$, $container$$95$$, $width$$101$$, $labels$$18$$, $peers$$6$$) : D.$DvtBreadcrumbsRenderer$$.$_positionLabels$($breadcrumbs$$1$$, $container$$95$$, $width$$101$$, $labels$$18$$, $peers$$6$$)
};
D.$DvtBreadcrumbsRenderer$$.$_createButtonState$ = function $$DvtBreadcrumbsRenderer$$$$_createButtonState$$($context$$297_state$$68$$, $dvtText_text$$52$$, $cssStyle$$14$$) {
  $dvtText_text$$52$$ = new D.$DvtOutputText$$($context$$297_state$$68$$, $dvtText_text$$52$$, 0, 0);
  $dvtText_text$$52$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $dvtText_text$$52$$.$setCSSStyle$($cssStyle$$14$$);
  var $padTop$$1$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$14$$, "padding-top"), $padRight$$1$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$14$$, "padding-right"), $padBottom$$1$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$14$$, "padding-bottom"), $padLeft$$1$$ = (0,D.$JSCompiler_StaticMethods_getPadding$$)($cssStyle$$14$$, "padding-left"), $labelDims$$11$$ = (0,D.$DvtDisplayableUtils$getDimensionsForced$$)($context$$297_state$$68$$, $dvtText_text$$52$$);
  $context$$297_state$$68$$ = new D.$DvtRect$$($context$$297_state$$68$$, 0, 0, $labelDims$$11$$.$w$ + $padLeft$$1$$ + $padRight$$1$$, $labelDims$$11$$.$h$ + $padTop$$1$$ + $padBottom$$1$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$297_state$$68$$);
  $context$$297_state$$68$$.$setCSSStyle$($cssStyle$$14$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dvtText_text$$52$$, $padLeft$$1$$, $padTop$$1$$);
  $context$$297_state$$68$$.$addChild$($dvtText_text$$52$$);
  return $context$$297_state$$68$$
};
D.$DvtBreadcrumbsRenderer$$.$_createLabel$ = function $$DvtBreadcrumbsRenderer$$$$_createLabel$$($context$$298_label$$68$$, $textStr$$1$$, $dwn$$6_dwnCss_options$$178$$, $bEnabled$$1_cssStyle$$15_ovr$$6_ovrCss$$) {
  if($bEnabled$$1_cssStyle$$15_ovr$$6_ovrCss$$ && ($dwn$$6_dwnCss_options$$178$$.$labelStyleOver$ || $dwn$$6_dwnCss_options$$178$$.$labelStyleDown$)) {
    var $ena$$10_enaCss$$ = new D.$DvtCSSStyle$$($dwn$$6_dwnCss_options$$178$$.$labelStyle$);
    $bEnabled$$1_cssStyle$$15_ovr$$6_ovrCss$$ = new D.$DvtCSSStyle$$($dwn$$6_dwnCss_options$$178$$.$labelStyleOver$);
    $dwn$$6_dwnCss_options$$178$$ = new D.$DvtCSSStyle$$($dwn$$6_dwnCss_options$$178$$.$labelStyleDown$);
    $ena$$10_enaCss$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$298_label$$68$$, $textStr$$1$$, $ena$$10_enaCss$$);
    $bEnabled$$1_cssStyle$$15_ovr$$6_ovrCss$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$298_label$$68$$, $textStr$$1$$, $bEnabled$$1_cssStyle$$15_ovr$$6_ovrCss$$);
    $dwn$$6_dwnCss_options$$178$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$298_label$$68$$, $textStr$$1$$, $dwn$$6_dwnCss_options$$178$$);
    $context$$298_label$$68$$ = new D.$DvtButton$$($context$$298_label$$68$$, $ena$$10_enaCss$$, $bEnabled$$1_cssStyle$$15_ovr$$6_ovrCss$$, $dwn$$6_dwnCss_options$$178$$);
    (0,D.$JSCompiler_StaticMethods_setAriaRole$$)($context$$298_label$$68$$, "link");
    (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($context$$298_label$$68$$, "label", $textStr$$1$$)
  }else {
    $bEnabled$$1_cssStyle$$15_ovr$$6_ovrCss$$ = new D.$DvtCSSStyle$$($bEnabled$$1_cssStyle$$15_ovr$$6_ovrCss$$ ? $dwn$$6_dwnCss_options$$178$$.$labelStyle$ : $dwn$$6_dwnCss_options$$178$$.$disabledLabelStyle$), (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$1_cssStyle$$15_ovr$$6_ovrCss$$, "padding-left") || (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$1_cssStyle$$15_ovr$$6_ovrCss$$, "padding-right") || (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$1_cssStyle$$15_ovr$$6_ovrCss$$, 
    "padding-top") || (0,D.$JSCompiler_StaticMethods_getPadding$$)($bEnabled$$1_cssStyle$$15_ovr$$6_ovrCss$$, "padding-bottom") ? $context$$298_label$$68$$ = D.$DvtBreadcrumbsRenderer$$.$_createButtonState$($context$$298_label$$68$$, $textStr$$1$$, $bEnabled$$1_cssStyle$$15_ovr$$6_ovrCss$$) : ($context$$298_label$$68$$ = new D.$DvtOutputText$$($context$$298_label$$68$$, $textStr$$1$$, 0, 0), $context$$298_label$$68$$.$setCSSStyle$($bEnabled$$1_cssStyle$$15_ovr$$6_ovrCss$$))
  }
  return $context$$298_label$$68$$
};
D.$DvtBreadcrumbsRenderer$$.$_getLabelTextString$ = function $$DvtBreadcrumbsRenderer$$$$_getLabelTextString$$($label$$69_text$$53$$) {
  if($label$$69_text$$53$$ instanceof D.$DvtButton$$) {
    return $label$$69_text$$53$$ = $label$$69_text$$53$$.$upState$.$getChildAt$(0), $label$$69_text$$53$$.$getTextString$()
  }
  $label$$69_text$$53$$ instanceof D.$DvtRect$$ && ($label$$69_text$$53$$ = $label$$69_text$$53$$.$getChildAt$(0));
  return $label$$69_text$$53$$.$getTextString$()
};
D.$DvtBreadcrumbsRenderer$$.$_truncateLabels$ = function $$DvtBreadcrumbsRenderer$$$$_truncateLabels$$($label$$70$$, $maxWidth$$21$$) {
  if($label$$70$$ instanceof D.$DvtButton$$) {
    var $text$$54$$ = $label$$70$$.$upState$.$getChildAt$(0);
    D.$DvtTextUtils$$.$fitText$($text$$54$$, window.Math.max($maxWidth$$21$$ - $text$$54$$.$getTranslateX$(), 0), window.Infinity, $text$$54$$.getParent());
    $text$$54$$ = $label$$70$$.$overState$.$getChildAt$(0);
    D.$DvtTextUtils$$.$fitText$($text$$54$$, window.Math.max($maxWidth$$21$$ - $text$$54$$.$getTranslateX$(), 0), window.Infinity, $text$$54$$.getParent());
    $text$$54$$ = $label$$70$$.$downState$.$getChildAt$(0);
    D.$DvtTextUtils$$.$fitText$($text$$54$$, window.Math.max($maxWidth$$21$$ - $text$$54$$.$getTranslateX$(), 0), window.Infinity, $text$$54$$.getParent())
  }else {
    $label$$70$$ instanceof D.$DvtRect$$ ? ($text$$54$$ = $label$$70$$.$getChildAt$(0), D.$DvtTextUtils$$.$fitText$($text$$54$$, window.Math.max($maxWidth$$21$$ - $text$$54$$.$getTranslateX$(), 0), window.Infinity, $text$$54$$.getParent())) : D.$DvtTextUtils$$.$fitText$($label$$70$$, $maxWidth$$21$$, window.Infinity, $label$$70$$.getParent())
  }
};
D.$DvtBreadcrumbsRenderer$$.$_positionLabels$ = function $$DvtBreadcrumbsRenderer$$$$_positionLabels$$($breadcrumbs$$2_labelString$$2$$, $container$$96$$, $availWidth$$9$$, $labels$$19$$, $peers$$7$$) {
  for(var $options$$179$$ = $breadcrumbs$$2_labelString$$2$$.$__getOptions$(), $eventManager$$14$$ = $breadcrumbs$$2_labelString$$2$$.$getEventManager$(), $arDims$$ = [], $maxHeight$$14$$ = 0, $i$$528$$ = 0;$i$$528$$ < $labels$$19$$.length;$i$$528$$++) {
    $container$$96$$.$addChild$($labels$$19$$[$i$$528$$]);
    var $dims$$38_separator$$1$$ = $labels$$19$$[$i$$528$$].$getDimensions$();
    $arDims$$[$i$$528$$] = $dims$$38_separator$$1$$;
    $maxHeight$$14$$ = window.Math.max($dims$$38_separator$$1$$.$h$, $maxHeight$$14$$);
    $container$$96$$.removeChild($labels$$19$$[$i$$528$$])
  }
  for(var $x$$183$$ = 0, $i$$528$$ = 0;$i$$528$$ < $labels$$19$$.length;$i$$528$$++) {
    $container$$96$$.$addChild$($labels$$19$$[$i$$528$$]);
    $dims$$38_separator$$1$$ = $arDims$$[$i$$528$$];
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($labels$$19$$[$i$$528$$], $x$$183$$, 0.5 * ($maxHeight$$14$$ - $dims$$38_separator$$1$$.$h$));
    if((0,D.$DvtAgent$isTouchDevice$$)()) {
      var $rect$$31_sepDims_separatorWidth$$ = new D.$DvtRect$$($container$$96$$.$_context$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$38_separator$$1$$.$w$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$38_separator$$1$$.$h$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$31_sepDims_separatorWidth$$);
      $labels$$19$$[$i$$528$$].$addChild$($rect$$31_sepDims_separatorWidth$$);
      $i$$528$$ < $peers$$7$$.length && $eventManager$$14$$.$associate$($rect$$31_sepDims_separatorWidth$$, $peers$$7$$[$i$$528$$])
    }
    if($x$$183$$ + $dims$$38_separator$$1$$.$w$ > $availWidth$$9$$) {
      $breadcrumbs$$2_labelString$$2$$ = D.$DvtBreadcrumbsRenderer$$.$_getLabelTextString$($labels$$19$$[$i$$528$$]);
      D.$DvtBreadcrumbsRenderer$$.$_truncateLabels$($labels$$19$$[$i$$528$$], $availWidth$$9$$ - $x$$183$$);
      $i$$528$$ < $peers$$7$$.length ? $peers$$7$$[$i$$528$$].$setTooltip$($breadcrumbs$$2_labelString$$2$$) : $eventManager$$14$$.$associate$($labels$$19$$[$i$$528$$], new D.$DvtSimpleObjPeer$$($breadcrumbs$$2_labelString$$2$$));
      break
    }else {
      $x$$183$$ += $dims$$38_separator$$1$$.$w$ + $options$$179$$.$__labelGap$
    }
    if($i$$528$$ < $labels$$19$$.length - 1) {
      $dims$$38_separator$$1$$ = D.$DvtBreadcrumbsRenderer$$.$_newSeparator$($breadcrumbs$$2_labelString$$2$$);
      $container$$96$$.$addChild$($dims$$38_separator$$1$$);
      $rect$$31_sepDims_separatorWidth$$ = $dims$$38_separator$$1$$.$getDimensions$();
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($dims$$38_separator$$1$$, $x$$183$$, 0.5 * ($maxHeight$$14$$ - $rect$$31_sepDims_separatorWidth$$.$h$));
      $rect$$31_sepDims_separatorWidth$$ = $rect$$31_sepDims_separatorWidth$$.$w$;
      if($x$$183$$ + $rect$$31_sepDims_separatorWidth$$ > $availWidth$$9$$) {
        $container$$96$$.removeChild($dims$$38_separator$$1$$);
        break
      }
      $x$$183$$ += $rect$$31_sepDims_separatorWidth$$ + $options$$179$$.$__labelGap$
    }
  }
};
D.$DvtBreadcrumbsRenderer$$.$_positionLabelsBidi$ = function $$DvtBreadcrumbsRenderer$$$$_positionLabelsBidi$$($breadcrumbs$$3_labelString$$3$$, $container$$97$$, $availWidth$$10_x$$184$$, $labels$$20$$, $peers$$8$$) {
  for(var $options$$180$$ = $breadcrumbs$$3_labelString$$3$$.$__getOptions$(), $eventManager$$15$$ = $breadcrumbs$$3_labelString$$3$$.$getEventManager$(), $i$$529$$ = 0;$i$$529$$ < $labels$$20$$.length;$i$$529$$++) {
    $container$$97$$.$addChild$($labels$$20$$[$i$$529$$]);
    var $dims$$39_separator$$2$$ = $labels$$20$$[$i$$529$$].$getDimensions$();
    if((0,D.$DvtAgent$isTouchDevice$$)()) {
      var $rect$$32_separatorWidth$$1$$ = new D.$DvtRect$$($container$$97$$.$_context$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, -D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$39_separator$$2$$.$w$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$, $dims$$39_separator$$2$$.$h$ + 2 * D.$DvtBreadcrumbsRenderer$$.$_TOUCH_BUFFER$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$32_separatorWidth$$1$$);
      $labels$$20$$[$i$$529$$].$addChild$($rect$$32_separatorWidth$$1$$);
      $i$$529$$ < $peers$$8$$.length && $eventManager$$15$$.$associate$($rect$$32_separatorWidth$$1$$, $peers$$8$$[$i$$529$$])
    }
    if(0 > $availWidth$$10_x$$184$$ - $dims$$39_separator$$2$$.$w$) {
      $breadcrumbs$$3_labelString$$3$$ = D.$DvtBreadcrumbsRenderer$$.$_getLabelTextString$($labels$$20$$[$i$$529$$]);
      D.$DvtBreadcrumbsRenderer$$.$_truncateLabels$($labels$$20$$[$i$$529$$], $availWidth$$10_x$$184$$);
      $labels$$20$$[$i$$529$$].$setTranslateX$(0);
      $i$$529$$ < $peers$$8$$.length ? $peers$$8$$[$i$$529$$].$setTooltip$($breadcrumbs$$3_labelString$$3$$) : $eventManager$$15$$.$associate$($labels$$20$$[$i$$529$$], new D.$DvtSimpleObjPeer$$($breadcrumbs$$3_labelString$$3$$));
      break
    }else {
      $labels$$20$$[$i$$529$$].$setTranslateX$($availWidth$$10_x$$184$$ - $dims$$39_separator$$2$$.$w$), $availWidth$$10_x$$184$$ -= $dims$$39_separator$$2$$.$w$ + $options$$180$$.$__labelGap$
    }
    if($i$$529$$ < $labels$$20$$.length - 1) {
      if($dims$$39_separator$$2$$ = D.$DvtBreadcrumbsRenderer$$.$_newSeparator$($breadcrumbs$$3_labelString$$3$$), $container$$97$$.$addChild$($dims$$39_separator$$2$$), $rect$$32_separatorWidth$$1$$ = $dims$$39_separator$$2$$.$getDimensions$().$w$, 0 > $availWidth$$10_x$$184$$ - $rect$$32_separatorWidth$$1$$) {
        $container$$97$$.removeChild($dims$$39_separator$$2$$);
        break
      }else {
        $dims$$39_separator$$2$$.$setTranslateX$($availWidth$$10_x$$184$$ - $rect$$32_separatorWidth$$1$$), $availWidth$$10_x$$184$$ -= $rect$$32_separatorWidth$$1$$ + $options$$180$$.$__labelGap$
      }
    }
  }
};
D.$DvtBreadcrumbsRenderer$$.$_newSeparator$ = function $$DvtBreadcrumbsRenderer$$$$_newSeparator$$($breadcrumbs$$4_label$$71$$) {
  var $options$$181$$ = $breadcrumbs$$4_label$$71$$.$__getOptions$();
  $breadcrumbs$$4_label$$71$$ = new D.$DvtOutputText$$($breadcrumbs$$4_label$$71$$.$_context$, $options$$181$$.$__labelSeparator$, 0, 0);
  $breadcrumbs$$4_label$$71$$.$setCSSStyle$(new D.$DvtCSSStyle$$($options$$181$$.$labelStyle$));
  return $breadcrumbs$$4_label$$71$$
};
D.$DvtPanelDrawerEvent$$ = function $$DvtPanelDrawerEvent$$$($subtype$$12$$, $activePanel$$) {
  this.Init("dvtPanelDrawerEvent");
  this.$_subtype$ = $subtype$$12$$;
  this.$_activePanel$ = $activePanel$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawerEvent$$, D.$DvtBaseComponentEvent$$, "DvtPanelDrawerEvent");
D.$DvtPanelDrawerEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtPanelDrawer$$ = function $$DvtPanelDrawer$$$($context$$683$$, $callback$$132$$, $callbackObj$$102$$, $sid$$1$$) {
  this.Init($context$$683$$, $callback$$132$$, $callbackObj$$102$$, $sid$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawer$$, D.$DvtContainer$$, "DvtPanelDrawer");
D.$DvtPanelDrawer$$.prototype.Init = function $$DvtPanelDrawer$$$$Init$($context$$684$$, $callback$$133$$, $callbackObj$$103$$, $sid$$2$$) {
  D.$DvtPanelDrawer$$.$superclass$.Init.call(this, $context$$684$$, D.$JSCompiler_alias_NULL$$, "panelDrawer" + $sid$$2$$);
  this.$_sid$ = $sid$$2$$;
  this.$_eventManager$ = new D.$DvtPanelDrawerEventManager$$($context$$684$$, $callback$$133$$, $callbackObj$$103$$);
  this.$_eventManager$.$addListeners$(this);
  this.$_eventManager$.$_rolloverTypes$.push(D.$DvtPanelDrawer$$);
  this.$_eventManager$.$associate$(this, this);
  this.$_callback$ = $callback$$133$$;
  this.$_callbackObj$ = $callbackObj$$103$$;
  this.$_panels$ = {};
  this.$_panelOrder$ = [];
  this.$_maxHeight$ = this.$_maxWidth$ = window.Number.MAX_VALUE;
  this.$_minWidth$ = 5;
  this.$_minHeight$ = 0;
  this.$_displayedPanelId$;
  this.$_oldDisplayedPanelId$;
  this.$_bTransition$ = this.$_bDisclosed$ = D.$JSCompiler_alias_FALSE$$;
  this.$_contentPane$;
  this.$_activeContent$;
  this.$_expandedContent$;
  this.$_expandedContentPanel$;
  this.$_contentClipPath$;
  this.$_expandedBorder$;
  this.$_expandedBorderResizable$;
  this.$_tabs$ = {};
  this.$_discloseDirection$ = "left";
  this.$_dockSide$ = "top";
  this.$_isFixed$ = D.$JSCompiler_alias_FALSE$$;
  this.$_styleMap$ = D.$JSCompiler_alias_NULL$$;
  $callbackObj$$103$$ && (this.$_styleMap$ = $callbackObj$$103$$.$getSubcomponentStyles$());
  this.$_bgAlpha$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "backgroundAlpha", 1);
  this.$_borderColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-color", "#bbc7d0");
  this.$_borderRadius$ = (0,window.parseInt)((0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "border-radius", 2));
  this.$_bgColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "background-color", "#ffffff");
  this.$_bgInactiveColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tab-color-inactive", "#dee4e7");
  this.$_borderInactiveColor$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "tab-border-color-inactive", "#c1cede");
  this.$_bDeferPanelVisibility$ = D.$JSCompiler_alias_FALSE$$;
  this.$_scrollEnabled$ = D.$JSCompiler_alias_TRUE$$;
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this);
  this.$_contentPadding$ = 10
};
D.$JSCompiler_StaticMethods_addPanel$$ = function $$JSCompiler_StaticMethods_addPanel$$$($JSCompiler_StaticMethods_addPanel$self$$, $panel$$3$$, $upState$$20$$, $overState$$17$$, $downState$$17$$, $tooltip$$54$$, $id$$277$$) {
  $JSCompiler_StaticMethods_addPanel$self$$.$_panels$[$id$$277$$] = {panel:$panel$$3$$, iconUp:$upState$$20$$, iconOver:$overState$$17$$, iconDown:$downState$$17$$, tooltip:$tooltip$$54$$};
  $JSCompiler_StaticMethods_addPanel$self$$.$_panelOrder$.push($id$$277$$);
  $JSCompiler_StaticMethods_addPanel$self$$.$_minHeight$ = 15 + 42 * $JSCompiler_StaticMethods_addPanel$self$$.$_panelOrder$.length
};
D.$DvtPanelDrawer$$.prototype.$setMaxWidth$ = (0,D.$JSCompiler_set$$)("$_maxWidth$");
D.$DvtPanelDrawer$$.prototype.$getMaxContentWidth$ = function $$DvtPanelDrawer$$$$$getMaxContentWidth$$() {
  return this.$_maxWidth$ - (2 * this.$_contentPadding$ + 21)
};
D.$DvtPanelDrawer$$.prototype.$setMaxHeight$ = (0,D.$JSCompiler_set$$)("$_maxHeight$");
D.$DvtPanelDrawer$$.prototype.$getMaxContentHeight$ = function $$DvtPanelDrawer$$$$$getMaxContentHeight$$() {
  return this.$_maxHeight$ - (2 * this.$_contentPadding$ + 21)
};
D.$JSCompiler_StaticMethods_GetPanel$$ = function $$JSCompiler_StaticMethods_GetPanel$$$($JSCompiler_StaticMethods_GetPanel$self$$, $id$$278$$) {
  return $JSCompiler_StaticMethods_GetPanel$self$$.$_panels$[$id$$278$$].panel
};
D.$JSCompiler_StaticMethods_setDisplayedPanelId$$ = function $$JSCompiler_StaticMethods_setDisplayedPanelId$$$($JSCompiler_StaticMethods_setDisplayedPanelId$self$$, $id$$282$$, $bImmediate$$20$$, $onEnd$$8$$) {
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_oldDisplayedPanelId$ = $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_displayedPanelId$;
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_displayedPanelId$ = $id$$282$$;
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$isDisclosed$() && ($JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$ChangeTabsState$(), (0,D.$JSCompiler_StaticMethods_ChangePanels$$)($JSCompiler_StaticMethods_setDisplayedPanelId$self$$, $id$$282$$, $bImmediate$$20$$, $onEnd$$8$$));
  $JSCompiler_StaticMethods_setDisplayedPanelId$self$$.$_oldDisplayedPanelId$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getDisplayedPanelId$$ = function $$JSCompiler_StaticMethods_getDisplayedPanelId$$$($JSCompiler_StaticMethods_getDisplayedPanelId$self$$) {
  var $panelId$$1$$ = $JSCompiler_StaticMethods_getDisplayedPanelId$self$$.$_displayedPanelId$;
  return!$panelId$$1$$ && 0 < $JSCompiler_StaticMethods_getDisplayedPanelId$self$$.$_panelOrder$.length ? $JSCompiler_StaticMethods_getDisplayedPanelId$self$$.$_panelOrder$[0] : $panelId$$1$$
};
D.$DvtPanelDrawer$$.prototype.$setDisclosed$ = function $$DvtPanelDrawer$$$$$setDisclosed$$($bDisclosed$$11_destX$$inline_8078$$, $anim$$inline_8079_anim$$inline_8085_bImmediate$$21$$, $onEnd$$9$$) {
  if(!this.$_bTransition$) {
    var $oldDisclosed$$1$$ = this.$_bDisclosed$;
    this.$_bDisclosed$ = $bDisclosed$$11_destX$$inline_8078$$;
    if($oldDisclosed$$1$$ != $bDisclosed$$11_destX$$inline_8078$$) {
      if(this.$_bTransition$ = D.$JSCompiler_alias_TRUE$$, $bDisclosed$$11_destX$$inline_8078$$) {
        var $panel$$inline_8077$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)(this, (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this));
        $panel$$inline_8077$$ && this.$_bDeferPanelVisibility$ && $panel$$inline_8077$$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
        (0,D.$JSCompiler_StaticMethods_DisplayPanel$$)(this, (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this));
        $bDisclosed$$11_destX$$inline_8078$$ = -(0.8 * this.$_expandedContent$.getWidth());
        "right" == this.$_discloseDirection$ && ($bDisclosed$$11_destX$$inline_8078$$ = -$bDisclosed$$11_destX$$inline_8078$$, this.$_expandedContent$.$setX$((0.8 - 1) * this.$_expandedContent$.getWidth()));
        if($anim$$inline_8079_anim$$inline_8085_bImmediate$$21$$) {
          this.$_contentPane$.$setTranslateX$($bDisclosed$$11_destX$$inline_8078$$), $panel$$inline_8077$$ && this.$_bDeferPanelVisibility$ && $panel$$inline_8077$$.$setVisible$(D.$JSCompiler_alias_TRUE$$), $onEnd$$9$$ && $onEnd$$9$$(), this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
        }else {
          if($anim$$inline_8079_anim$$inline_8085_bImmediate$$21$$ = new D.$DvtAnimator$$(this.$_context$, 0.25), $anim$$inline_8079_anim$$inline_8085_bImmediate$$21$$.$setEasing$(D.$DvtEasing$backOut$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$inline_8079_anim$$inline_8085_bImmediate$$21$$, "typeNumber", this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, $bDisclosed$$11_destX$$inline_8078$$), $panel$$inline_8077$$ && this.$_bDeferPanelVisibility$ ? 
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_8079_anim$$inline_8085_bImmediate$$21$$, function() {
            $panel$$inline_8077$$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
            $onEnd$$9$$ && $onEnd$$9$$()
          }) : $onEnd$$9$$ && (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_8079_anim$$inline_8085_bImmediate$$21$$, $onEnd$$9$$), $anim$$inline_8079_anim$$inline_8085_bImmediate$$21$$) {
            var $thisRef$$inline_8080$$ = this;
            (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_8079_anim$$inline_8085_bImmediate$$21$$, function() {
              $thisRef$$inline_8080$$.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
            });
            $anim$$inline_8079_anim$$inline_8085_bImmediate$$21$$.play()
          }
        }
        this.$ChangeTabsState$()
      }else {
        if($anim$$inline_8079_anim$$inline_8085_bImmediate$$21$$) {
          this.$_contentPane$.$setTranslateX$(0), this.$RemoveExpandedContent$(), $onEnd$$9$$ && $onEnd$$9$$(), this.$ChangeTabsState$(), this.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
        }else {
          $anim$$inline_8079_anim$$inline_8085_bImmediate$$21$$ = new D.$DvtAnimator$$(this.$_context$, 0.25);
          $anim$$inline_8079_anim$$inline_8085_bImmediate$$21$$.$setEasing$(D.$DvtEasing$backIn$$);
          (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$inline_8079_anim$$inline_8085_bImmediate$$21$$, "typeNumber", this.$_contentPane$, this.$_contentPane$.$getTranslateX$, this.$_contentPane$.$setTranslateX$, 0);
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_8079_anim$$inline_8085_bImmediate$$21$$, this.$RemoveExpandedContent$, this);
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_8079_anim$$inline_8085_bImmediate$$21$$, this.$ChangeTabsState$, this);
          $onEnd$$9$$ && (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_8079_anim$$inline_8085_bImmediate$$21$$, $onEnd$$9$$);
          var $thisRef$$inline_8086$$ = this;
          (0,D.$DvtPlayable$appendOnEnd$$)($anim$$inline_8079_anim$$inline_8085_bImmediate$$21$$, function() {
            $thisRef$$inline_8086$$.$_bTransition$ = D.$JSCompiler_alias_FALSE$$
          });
          $anim$$inline_8079_anim$$inline_8085_bImmediate$$21$$.play()
        }
      }
    }
  }
};
D.$DvtPanelDrawer$$.prototype.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_bDisclosed$");
D.$DvtPanelDrawer$$.prototype.$renderComponent$ = function $$DvtPanelDrawer$$$$$renderComponent$$() {
  this.$_contentPane$ || (this.$_contentPane$ = new D.$DvtContainer$$(this.$_context$, "pd_contentPane"), this.$addChild$(this.$_contentPane$), this.$_activeContent$ = new D.$DvtContainer$$(this.$_context$, "pdcp_activeContent"), this.$_contentPane$.$addChild$(this.$_activeContent$));
  if(!this.$_isFixed$) {
    var $currX$$inline_8089$$ = -42;
    "right" == this.$_discloseDirection$ && ($currX$$inline_8089$$ = 0);
    var $currY$$inline_8090$$ = 15;
    if("top" == this.$_dockSide$) {
      for(var $i$$inline_8091$$ = 0;$i$$inline_8091$$ < this.$_panelOrder$.length;$i$$inline_8091$$++) {
        var $panelId$$inline_8092_tab$$inline_8093$$ = this.$_panelOrder$[$i$$inline_8091$$], $panelId$$inline_8092_tab$$inline_8093$$ = (0,D.$JSCompiler_StaticMethods_RenderTab$$)(this, $panelId$$inline_8092_tab$$inline_8093$$);
        (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelId$$inline_8092_tab$$inline_8093$$, $currX$$inline_8089$$, $currY$$inline_8090$$);
        $currY$$inline_8090$$ += 42
      }
    }else {
      if("bottom" == this.$_dockSide$) {
        $currY$$inline_8090$$ = -57;
        for($i$$inline_8091$$ = this.$_panelOrder$.length - 1;0 <= $i$$inline_8091$$;$i$$inline_8091$$--) {
          $panelId$$inline_8092_tab$$inline_8093$$ = this.$_panelOrder$[$i$$inline_8091$$], $panelId$$inline_8092_tab$$inline_8093$$ = (0,D.$JSCompiler_StaticMethods_RenderTab$$)(this, $panelId$$inline_8092_tab$$inline_8093$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelId$$inline_8092_tab$$inline_8093$$, $currX$$inline_8089$$, $currY$$inline_8090$$), $currY$$inline_8090$$ -= 42
        }
      }
    }
  }
};
D.$JSCompiler_StaticMethods_RenderTab$$ = function $$JSCompiler_StaticMethods_RenderTab$$$($JSCompiler_StaticMethods_RenderTab$self$$, $panelId$$3$$) {
  var $closedPath_downState$$18$$, $arPoints$$inline_8096_tab$$1$$;
  switch($JSCompiler_StaticMethods_RenderTab$self$$.$_discloseDirection$) {
    case "right":
      $arPoints$$inline_8096_tab$$1$$ = ["M", 0, 0, "L", 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, 0, 1, 42, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "L", 42, 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 
      0, 0, 1, 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 42, "L", 0, 42];
      break;
    default:
      $arPoints$$inline_8096_tab$$1$$ = ["M", 42, 0, "L", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 0, 0, 0, 0, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "L", 0, 42 - $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, "A", $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 
      0, 0, 0, $JSCompiler_StaticMethods_RenderTab$self$$.$_borderRadius$, 42, "L", 42, 42]
  }
  $closedPath_downState$$18$$ = $arPoints$$inline_8096_tab$$1$$;
  $arPoints$$inline_8096_tab$$1$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $closedPath_downState$$18$$, "pdcp_tab_" + $panelId$$3$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($arPoints$$inline_8096_tab$$1$$);
  $arPoints$$inline_8096_tab$$1$$.setCursor("pointer");
  $JSCompiler_StaticMethods_RenderTab$self$$.$_contentPane$.$addChildAt$($arPoints$$inline_8096_tab$$1$$, 0);
  $arPoints$$inline_8096_tab$$1$$.$setSolidFill$($JSCompiler_StaticMethods_RenderTab$self$$.$_bgInactiveColor$, $JSCompiler_StaticMethods_RenderTab$self$$.$_bgAlpha$);
  $arPoints$$inline_8096_tab$$1$$.$setSolidStroke$($JSCompiler_StaticMethods_RenderTab$self$$.$_borderInactiveColor$, 1, 1);
  var $panelObj$$ = $JSCompiler_StaticMethods_RenderTab$self$$.$_panels$[$panelId$$3$$], $icon$$41_upState$$21$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $closedPath_downState$$18$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($icon$$41_upState$$21$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelObj$$.iconUp, 9, 9);
  $icon$$41_upState$$21$$.$addChild$($panelObj$$.iconUp);
  var $overState$$18$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $closedPath_downState$$18$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$18$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelObj$$.iconOver, 9, 9);
  $overState$$18$$.$addChild$($panelObj$$.iconOver);
  $closedPath_downState$$18$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $closedPath_downState$$18$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($closedPath_downState$$18$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelObj$$.iconDown, 9, 9);
  $closedPath_downState$$18$$.$addChild$($panelObj$$.iconDown);
  $icon$$41_upState$$21$$ = new D.$DvtButton$$($JSCompiler_StaticMethods_RenderTab$self$$.$_context$, $icon$$41_upState$$21$$, $overState$$18$$, $closedPath_downState$$18$$);
  $icon$$41_upState$$21$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  $icon$$41_upState$$21$$.setCursor("pointer");
  $panelObj$$.icon = $icon$$41_upState$$21$$;
  $arPoints$$inline_8096_tab$$1$$.$addChild$($icon$$41_upState$$21$$);
  $JSCompiler_StaticMethods_RenderTab$self$$.$_tabs$[$panelId$$3$$] = $arPoints$$inline_8096_tab$$1$$;
  $JSCompiler_StaticMethods_RenderTab$self$$.$_eventManager$.$associate$($arPoints$$inline_8096_tab$$1$$, {$HandleClick$:function() {
    $JSCompiler_StaticMethods_RenderTab$self$$.$_oldDisplayedPanelId$ = (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)($JSCompiler_StaticMethods_RenderTab$self$$);
    $JSCompiler_StaticMethods_RenderTab$self$$.$_displayedPanelId$ = $panelId$$3$$;
    var $closedPath_downState$$18$$ = function $$closedPath_downState$$18$$$() {
      var $panelId$$3$$ = $JSCompiler_StaticMethods_RenderTab$self$$.$_context$.$getTooltipManager$();
      $panelId$$3$$ && $panelId$$3$$.$hideTooltip$()
    };
    $JSCompiler_StaticMethods_RenderTab$self$$.$isDisclosed$() ? $JSCompiler_StaticMethods_RenderTab$self$$.$_oldDisplayedPanelId$ == $panelId$$3$$ ? $JSCompiler_StaticMethods_RenderTab$self$$.$setDisclosed$(D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, $closedPath_downState$$18$$) : ($JSCompiler_StaticMethods_RenderTab$self$$.$ChangeTabsState$(), (0,D.$JSCompiler_StaticMethods_ChangePanels$$)($JSCompiler_StaticMethods_RenderTab$self$$, $panelId$$3$$, D.$JSCompiler_alias_FALSE$$)) : ($JSCompiler_StaticMethods_RenderTab$self$$.$setDisclosed$(D.$JSCompiler_alias_TRUE$$, 
    D.$JSCompiler_alias_FALSE$$, $closedPath_downState$$18$$), $JSCompiler_StaticMethods_RenderTab$self$$.$ApplyAlphasRollover$());
    $JSCompiler_StaticMethods_RenderTab$self$$.$_oldDisplayedPanelId$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_RenderTab$self$$.$FireListener$(new D.$DvtPanelDrawerEvent$$($JSCompiler_StaticMethods_RenderTab$self$$.$isDisclosed$() ? "show" : "hide", $JSCompiler_StaticMethods_RenderTab$self$$.$_displayedPanelId$))
  }, $getTooltip$:function() {
    return $JSCompiler_StaticMethods_RenderTab$self$$.$_panels$[$panelId$$3$$].tooltip
  }});
  $JSCompiler_StaticMethods_RenderTab$self$$.$addAccessibilityAttributes$($arPoints$$inline_8096_tab$$1$$, $JSCompiler_StaticMethods_RenderTab$self$$.$_panels$[$panelId$$3$$].tooltip);
  return $arPoints$$inline_8096_tab$$1$$
};
D.$JSCompiler_StaticMethods_ChangePanels$$ = function $$JSCompiler_StaticMethods_ChangePanels$$$($JSCompiler_StaticMethods_ChangePanels$self$$, $panelId$$5$$, $bImmediate$$22_oldPanel$$1$$, $onEnd$$10$$) {
  var $anim$$33$$ = D.$JSCompiler_alias_NULL$$;
  $bImmediate$$22_oldPanel$$1$$ || ($anim$$33$$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods_ChangePanels$self$$.$_context$, 0.25));
  $JSCompiler_StaticMethods_ChangePanels$self$$.$_oldDisplayedPanelId$ && ($bImmediate$$22_oldPanel$$1$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods_ChangePanels$self$$, $JSCompiler_StaticMethods_ChangePanels$self$$.$_oldDisplayedPanelId$)) && $JSCompiler_StaticMethods_ChangePanels$self$$.$_expandedContentPanel$.removeChild($bImmediate$$22_oldPanel$$1$$);
  (0,D.$JSCompiler_StaticMethods_DisplayPanel$$)($JSCompiler_StaticMethods_ChangePanels$self$$, $panelId$$5$$, $anim$$33$$);
  $anim$$33$$ ? ($JSCompiler_StaticMethods_ChangePanels$self$$.$ApplyAlphasRollover$(), $onEnd$$10$$ && (0,D.$DvtPlayable$appendOnEnd$$)($anim$$33$$, $onEnd$$10$$), $anim$$33$$.play()) : $onEnd$$10$$ && $onEnd$$10$$()
};
D.$DvtPanelDrawer$$.prototype.$RemoveExpandedContent$ = function $$DvtPanelDrawer$$$$$RemoveExpandedContent$$() {
  this.$_expandedContent$ && (this.$_contentClipPath$ = D.$JSCompiler_alias_NULL$$, this.$_expandedContentPanel$.$removeChildren$(), (0,D.$JSCompiler_StaticMethods_removeAllDrawEffects$$)(this.$_activeContent$), this.$_expandedContent$.$destroy$(), this.$_activeContent$.removeChild(this.$_expandedContent$), this.$_expandedBorderResizable$ = this.$_expandedBorder$ = this.$_expandedContentPanel$ = this.$_expandedContent$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods_DisplayPanel$$ = function $$JSCompiler_StaticMethods_DisplayPanel$$$($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$283$$, $anim$$36$$) {
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$ || ($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$ = new D.$DvtRect$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_context$, 0, 0, 1, 1, "pdcp_expandedContent"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_activeContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$setSolidFill$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_bgColor$, 
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_bgAlpha$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$ = new D.$DvtScrollableContainer$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_context$, 0, 0, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_maxWidth$ == window.Number.MAX_VALUE ? D.$JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods_DisplayPanel$self$$.$_maxWidth$ - 2 * $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_maxHeight$ == 
  window.Number.MAX_VALUE ? D.$JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods_DisplayPanel$self$$.$_maxHeight$ - 2 * $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$, 10, "pdcp_expandedContentPanel" + $JSCompiler_StaticMethods_DisplayPanel$self$$.$_sid$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_scrollEnabled$ || ($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$_horizScrollEnabled$ = D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$_vertScrollEnabled$ = 
  D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$setSkinName$("alta"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$_styleMap$ = $JSCompiler_StaticMethods_DisplayPanel$self$$.$_styleMap$, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$setTranslateX$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$), 
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$setTranslateY$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$));
  var $panel$$5$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$283$$);
  if($panel$$5$$) {
    $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$addChild$($panel$$5$$);
    $anim$$36$$ && $JSCompiler_StaticMethods_DisplayPanel$self$$.$_bDeferPanelVisibility$ && ($panel$$5$$.$setVisible$(D.$JSCompiler_alias_FALSE$$), (0,D.$DvtPlayable$appendOnEnd$$)($anim$$36$$, function() {
      $panel$$5$$.$setVisible$(D.$JSCompiler_alias_TRUE$$)
    }));
    if($JSCompiler_StaticMethods_DisplayPanel$self$$.$_oldDisplayedPanelId$) {
      var $ecw$$inline_8116_oldPanel$$2$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $JSCompiler_StaticMethods_DisplayPanel$self$$.$_oldDisplayedPanelId$);
      $ecw$$inline_8116_oldPanel$$2$$ && $ecw$$inline_8116_oldPanel$$2$$.$removeEvtListener$("dvtResizeEvent", $JSCompiler_StaticMethods_DisplayPanel$self$$.$HandlePanelResize$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_DisplayPanel$self$$)
    }
    $panel$$5$$.$addEvtListener$("dvtResizeEvent", $JSCompiler_StaticMethods_DisplayPanel$self$$.$HandlePanelResize$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_DisplayPanel$self$$)
  }
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$ || ($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$ = new D.$DvtPath$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_context$, ["M", 0, 0, "L", 1, 1], "pdcp_expandedBorder"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$ = new D.$DvtPath$$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_context$, ["M", 0, 0, "L", 1, 1], "pdcp_expandedBorderResizable"), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$), 
  $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContent$.$addChild$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$.$setSolidStroke$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_borderColor$, 1), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$.$setFill$(D.$JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$.$setSolidStroke$($JSCompiler_StaticMethods_DisplayPanel$self$$.$_borderColor$, 
  1), $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$.$setFill$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorder$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedBorderResizable$));
  var $ecw$$inline_8116_oldPanel$$2$$ = 2 * $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$, $ech$$inline_8117$$ = 2 * $JSCompiler_StaticMethods_DisplayPanel$self$$.$_contentPadding$, $xx$$inline_8118$$ = 0, $dims$$inline_8120_yy$$inline_8119$$ = 0;
  (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$283$$) && ($dims$$inline_8120_yy$$inline_8119$$ = $JSCompiler_StaticMethods_DisplayPanel$self$$.$_expandedContentPanel$.$getDimensionsWithStroke$(), $ecw$$inline_8116_oldPanel$$2$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentWidth$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $dims$$inline_8120_yy$$inline_8119$$.$w$), $ech$$inline_8117$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentHeight$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, 
  $dims$$inline_8120_yy$$inline_8119$$.$h$), $xx$$inline_8118$$ = $dims$$inline_8120_yy$$inline_8119$$.x, $dims$$inline_8120_yy$$inline_8119$$ = $dims$$inline_8120_yy$$inline_8119$$.y);
  (0,D.$JSCompiler_StaticMethods__refreshPanelSize$$)($JSCompiler_StaticMethods_DisplayPanel$self$$, $id$$283$$, $anim$$36$$, $ecw$$inline_8116_oldPanel$$2$$, $ech$$inline_8117$$, $xx$$inline_8118$$, $dims$$inline_8120_yy$$inline_8119$$)
};
D.$DvtPanelDrawer$$.prototype.$HandlePanelResize$ = function $$DvtPanelDrawer$$$$$HandlePanelResize$$($event$$689_yy$$64$$) {
  var $anim$$37$$ = new D.$DvtAnimator$$(this.$_context$, 0.25);
  this.$_expandedContentPanel$.refresh();
  var $ecw_resizeWidth$$1$$ = $event$$689_yy$$64$$.getWidth(), $ech_resizeHeight$$1$$ = $event$$689_yy$$64$$.getHeight(), $sbPadding_xx$$64$$ = this.$_expandedContentPanel$.$_sbWidth$ + 10;
  this.$_expandedContentPanel$.$_hsb$ != D.$JSCompiler_alias_NULL$$ && ($ech_resizeHeight$$1$$ += $sbPadding_xx$$64$$);
  this.$_expandedContentPanel$.$_vsb$ != D.$JSCompiler_alias_NULL$$ && ($ecw_resizeWidth$$1$$ += $sbPadding_xx$$64$$);
  $ecw_resizeWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentWidth$$)(this, $ecw_resizeWidth$$1$$);
  $ech_resizeHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_GetExpandedContentHeight$$)(this, $ech_resizeHeight$$1$$);
  $sbPadding_xx$$64$$ = $event$$689_yy$$64$$.$getX$() ? $event$$689_yy$$64$$.$getX$() : 0;
  $event$$689_yy$$64$$ = $event$$689_yy$$64$$.$getY$() ? $event$$689_yy$$64$$.$getY$() : 0;
  (0,D.$JSCompiler_StaticMethods__refreshPanelSize$$)(this, (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this), $anim$$37$$, $ecw_resizeWidth$$1$$, $ech_resizeHeight$$1$$, $sbPadding_xx$$64$$, $event$$689_yy$$64$$);
  $anim$$37$$.play()
};
D.$JSCompiler_StaticMethods__refreshPanelSize$$ = function $$JSCompiler_StaticMethods__refreshPanelSize$$$($JSCompiler_StaticMethods__refreshPanelSize$self$$, $edgeX_id$$285$$, $anim$$39$$, $ecw$$2_firstTab_lastTab$$, $ech$$2$$, $expandedContentWidth_tab$$2_xx$$66$$, $yy$$66$$) {
  var $panel$$7$$ = (0,D.$JSCompiler_StaticMethods_GetPanel$$)($JSCompiler_StaticMethods__refreshPanelSize$self$$, $edgeX_id$$285$$);
  $anim$$39$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$39$$, "typeNumber", $panel$$7$$, $panel$$7$$.$getTranslateX$, $panel$$7$$.$setTranslateX$, -$expandedContentWidth_tab$$2_xx$$66$$) : $panel$$7$$.$setTranslateX$(-$expandedContentWidth_tab$$2_xx$$66$$);
  $anim$$39$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$39$$, "typeNumber", $panel$$7$$, $panel$$7$$.$getTranslateY$, $panel$$7$$.$setTranslateY$, -$yy$$66$$) : $panel$$7$$.$setTranslateY$(-$yy$$66$$);
  var $clipRect$$4$$ = new D.$DvtRectangle$$($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$, $ecw$$2_firstTab_lastTab$$ - 2 * $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$, $ech$$2$$ - 2 * $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPadding$);
  $expandedContentWidth_tab$$2_xx$$66$$ = 1.25 * $ecw$$2_firstTab_lastTab$$;
  $anim$$39$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$39$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.getWidth, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setWidth$, $expandedContentWidth_tab$$2_xx$$66$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$39$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.getHeight, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setHeight$, $ech$$2$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_bDeferPanelVisibility$ ? (0,D.$DvtPlayable$appendOnEnd$$)($anim$$39$$, function() {
    $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_setContentClipPath$($clipRect$$4$$)
  }) : (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$39$$, "typeRectangle", $JSCompiler_StaticMethods__refreshPanelSize$self$$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_getContentClipPath$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_setContentClipPath$, $clipRect$$4$$), "left" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$39$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$setTranslateX$, -$ecw$$2_firstTab_lastTab$$) : "right" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ && ((0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$39$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$getTranslateX$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_contentPane$.$setTranslateX$, $ecw$$2_firstTab_lastTab$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$39$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateX$, $ecw$$2_firstTab_lastTab$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$39$$, 
  "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$getTranslateX$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateX$, $ecw$$2_firstTab_lastTab$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$39$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$getTranslateX$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateX$, -$ecw$$2_firstTab_lastTab$$)), "bottom" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ && ((0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$39$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$getTranslateY$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateY$, 
  $ech$$2$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$39$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$getTranslateY$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateY$, $ech$$2$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$39$$, "typeNumber", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$, 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$getTranslateY$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateY$, -$ech$$2$$))) : ($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setWidth$($expandedContentWidth_tab$$2_xx$$66$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setHeight$($ech$$2$$), "right" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ && ($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateX$(-$ecw$$2_firstTab_lastTab$$), 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateX$($ecw$$2_firstTab_lastTab$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateX$($ecw$$2_firstTab_lastTab$$)), "bottom" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ && ($JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedContent$.$setTranslateY$(-$ech$$2$$), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setTranslateY$($ech$$2$$), 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setTranslateY$($ech$$2$$)), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_setContentClipPath$($clipRect$$4$$));
  $expandedContentWidth_tab$$2_xx$$66$$ = $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_tabs$[$edgeX_id$$285$$];
  var $borderPath$$;
  $edgeX_id$$285$$ = $ecw$$2_firstTab_lastTab$$;
  "right" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_discloseDirection$ && ($edgeX_id$$285$$ = -$ecw$$2_firstTab_lastTab$$);
  "top" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ ? $expandedContentWidth_tab$$2_xx$$66$$ ? ($borderPath$$ = ["M", 0, 0, "L", 0, $expandedContentWidth_tab$$2_xx$$66$$.$getTranslateY$(), "M", 0, $expandedContentWidth_tab$$2_xx$$66$$.$getTranslateY$() + 42], $ecw$$2_firstTab_lastTab$$ = $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_tabs$[$JSCompiler_StaticMethods__refreshPanelSize$self$$.$_panelOrder$[$JSCompiler_StaticMethods__refreshPanelSize$self$$.$_panelOrder$.length - 
  1]], $borderPath$$.push("L", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$() + 42), $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$), $borderPath$$ = ["M", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$() + 42, "L", 0, $ech$$2$$, "L", 1.25 * $edgeX_id$$285$$, $ech$$2$$]) : ($borderPath$$ = ["M", 0, 0, "L", 0, $ech$$2$$, "L", $edgeX_id$$285$$, $ech$$2$$], $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$)) : 
  "bottom" == $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_dockSide$ && ($expandedContentWidth_tab$$2_xx$$66$$ ? ($borderPath$$ = ["M", 0, 0, "L", 0, $expandedContentWidth_tab$$2_xx$$66$$.$getTranslateY$() + 42, "M", 0, $expandedContentWidth_tab$$2_xx$$66$$.$getTranslateY$()], $ecw$$2_firstTab_lastTab$$ = $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_tabs$[$JSCompiler_StaticMethods__refreshPanelSize$self$$.$_panelOrder$[0]], $borderPath$$.push("L", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$()), 
  $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$), $edgeX_id$$285$$ *= 1.25, $borderPath$$ = ["M", 0, $ecw$$2_firstTab_lastTab$$.$getTranslateY$(), "L", 0, -$ech$$2$$, "L", $edgeX_id$$285$$, -$ech$$2$$]) : ($borderPath$$ = ["M", 0, 0, "L", 0, -$ech$$2$$, "L", $edgeX_id$$285$$, -$ech$$2$$], $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorder$.$setCommands$($borderPath$$)));
  $anim$$39$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$39$$, "typePath", $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$getCommands$, $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setCommands$, $borderPath$$) : $JSCompiler_StaticMethods__refreshPanelSize$self$$.$_expandedBorderResizable$.$setCommands$($borderPath$$)
};
D.$DvtPanelDrawer$$.prototype.$_setContentClipPath$ = function $$DvtPanelDrawer$$$$$_setContentClipPath$$($rect$$47$$) {
  if(this.$_expandedContentPanel$ && $rect$$47$$) {
    var $clipPath$$10$$ = new D.$DvtClipPath$$("pdcp" + this.$_sid$);
    (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$10$$, $rect$$47$$.x, $rect$$47$$.y, $rect$$47$$.$w$, $rect$$47$$.$h$);
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_expandedContentPanel$, $clipPath$$10$$)
  }
  this.$_contentClipPath$ = $rect$$47$$
};
D.$DvtPanelDrawer$$.prototype.$_getContentClipPath$ = (0,D.$JSCompiler_get$$)("$_contentClipPath$");
D.$JSCompiler_StaticMethods_GetExpandedContentWidth$$ = function $$JSCompiler_StaticMethods_GetExpandedContentWidth$$$($JSCompiler_StaticMethods_GetExpandedContentWidth$self$$, $preferredWidth$$) {
  var $ww$$124$$ = $preferredWidth$$ + 2 * $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_contentPadding$;
  if(($JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$ || 0 == $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$) && $ww$$124$$ < $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$) {
    $ww$$124$$ = $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_minWidth$
  }
  $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_maxWidth$ && $ww$$124$$ > $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_maxWidth$ && ($ww$$124$$ = $JSCompiler_StaticMethods_GetExpandedContentWidth$self$$.$_maxWidth$);
  return $ww$$124$$
};
D.$JSCompiler_StaticMethods_GetExpandedContentHeight$$ = function $$JSCompiler_StaticMethods_GetExpandedContentHeight$$$($JSCompiler_StaticMethods_GetExpandedContentHeight$self$$, $preferredHeight$$) {
  var $hh$$106$$ = $preferredHeight$$ + 2 * $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_contentPadding$;
  if(($JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$ || 0 == $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$) && $hh$$106$$ < $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$) {
    $hh$$106$$ = $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_minHeight$
  }
  $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_maxHeight$ && $hh$$106$$ > $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_maxHeight$ && ($hh$$106$$ = $JSCompiler_StaticMethods_GetExpandedContentHeight$self$$.$_maxHeight$);
  return $hh$$106$$
};
D.$JSCompiler_StaticMethods_ApplyFillAlpha$$ = function $$JSCompiler_StaticMethods_ApplyFillAlpha$$$($JSCompiler_StaticMethods_ApplyFillAlpha$self$$, $alpha$$50$$) {
  if($JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_expandedContent$) {
    var $fill$$67$$ = $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_expandedContent$.$getFill$().clone();
    $fill$$67$$.$setAlpha$($alpha$$50$$);
    $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_expandedContent$.$setFill$($fill$$67$$)
  }
  for(var $panelId$$6$$ in $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_tabs$) {
    var $tab$$3$$ = $JSCompiler_StaticMethods_ApplyFillAlpha$self$$.$_tabs$[$panelId$$6$$];
    $tab$$3$$ && ($fill$$67$$ = $tab$$3$$.$getFill$().clone(), $fill$$67$$.$setAlpha$($alpha$$50$$), $tab$$3$$.$setFill$($fill$$67$$))
  }
};
D.$JSCompiler_StaticMethods_ApplyStrokeAlpha$$ = function $$JSCompiler_StaticMethods_ApplyStrokeAlpha$$$($JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$) {
  if($JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorder$) {
    var $stroke$$109$$ = $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorder$.$getStroke$().clone();
    $stroke$$109$$.$setAlpha$(1);
    $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorder$.$setStroke$($stroke$$109$$)
  }
  $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorderResizable$ && ($stroke$$109$$ = $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorderResizable$.$getStroke$().clone(), $stroke$$109$$.$setAlpha$(1), $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_expandedBorderResizable$.$setStroke$($stroke$$109$$));
  for(var $panelId$$7$$ in $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_tabs$) {
    var $tab$$4$$ = $JSCompiler_StaticMethods_ApplyStrokeAlpha$self$$.$_tabs$[$panelId$$7$$];
    $tab$$4$$ && ($stroke$$109$$ = $tab$$4$$.$getStroke$().clone(), $stroke$$109$$.$setAlpha$(1), $tab$$4$$.$setStroke$($stroke$$109$$))
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanelDrawer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$deEmphasizeStart$ = function $$JSCompiler_prototypeAlias$$$$deEmphasizeStart$$() {
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, 1);
  (0,D.$JSCompiler_StaticMethods_ApplyStrokeAlpha$$)(this);
  this.$_expandedContentPanel$ && this.$_expandedContentPanel$.$setAlpha$(1);
  for(var $panelId$$8$$ in this.$_tabs$) {
    var $icon$$42$$ = this.$_panels$[$panelId$$8$$].icon;
    $icon$$42$$ && $icon$$42$$.$setAlpha$(1)
  }
};
D.$JSCompiler_prototypeAlias$$.$deEmphasizeEnd$ = function $$JSCompiler_prototypeAlias$$$$deEmphasizeEnd$$() {
  this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, this.$_bgAlpha$);
  (0,D.$JSCompiler_StaticMethods_ApplyStrokeAlpha$$)(this);
  this.$_expandedContentPanel$ && this.$_expandedContentPanel$.$setAlpha$(1);
  for(var $panelId$$9$$ in this.$_tabs$) {
    var $icon$$43$$ = this.$_panels$[$panelId$$9$$].icon;
    $icon$$43$$ && $icon$$43$$.$setAlpha$(1)
  }
  this.$HandleRollOut$(D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleRollOver$ = function $$JSCompiler_prototypeAlias$$$$HandleRollOver$$() {
  this.$ApplyAlphasRollover$()
};
D.$JSCompiler_prototypeAlias$$.$HandleRollOut$ = function $$JSCompiler_prototypeAlias$$$$HandleRollOut$$() {
  this.$_bFocus$ || this.$ApplyAlphasRollout$()
};
D.$JSCompiler_prototypeAlias$$.$ApplyAlphasRollover$ = function $$JSCompiler_prototypeAlias$$$$ApplyAlphasRollover$$() {
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, 1)
};
D.$JSCompiler_prototypeAlias$$.$ApplyAlphasRollout$ = function $$JSCompiler_prototypeAlias$$$$ApplyAlphasRollout$$() {
  (0,D.$JSCompiler_StaticMethods_ApplyFillAlpha$$)(this, this.$_bgAlpha$)
};
D.$JSCompiler_prototypeAlias$$.$ChangeTabsState$ = function $$JSCompiler_prototypeAlias$$$$ChangeTabsState$$() {
  for(var $panelId$$10$$ in this.$_tabs$) {
    var $tab$$5$$ = this.$_tabs$[$panelId$$10$$];
    $tab$$5$$ && ($panelId$$10$$ == (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this) && this.$isDisclosed$() ? ($tab$$5$$.$setSolidFill$(this.$_bgColor$, this.$_bgAlpha$), $tab$$5$$.$setSolidStroke$(this.$_borderColor$, 1)) : ($tab$$5$$.$setSolidFill$(this.$_bgInactiveColor$, this.$_bgAlpha$), $tab$$5$$.$setSolidStroke$(this.$_borderInactiveColor$, 1)));
    var $bActivePanel$$ = this.$isDisclosed$() && $panelId$$10$$ == (0,D.$JSCompiler_StaticMethods_getDisplayedPanelId$$)(this), $icon$$44$$ = this.$_panels$[$panelId$$10$$].icon;
    $icon$$44$$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)($icon$$44$$, $bActivePanel$$);
    $bActivePanel$$ ? this.$_activeContent$.$addChild$($tab$$5$$) : this.$_contentPane$.$addChildAt$($tab$$5$$, 0)
  }
};
D.$JSCompiler_prototypeAlias$$.$addAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$addAccessibilityAttributes$$($obj$$351$$, $desc$$11$$) {
  $obj$$351$$ && $desc$$11$$ && ((0,D.$JSCompiler_StaticMethods_setAriaRole$$)($obj$$351$$, "img"), (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($obj$$351$$, "label", $desc$$11$$))
};
D.$JSCompiler_StaticMethods_setMaxContainerHeight$$ = function $$JSCompiler_StaticMethods_setMaxContainerHeight$$$($JSCompiler_StaticMethods_setMaxContainerHeight$self$$, $height$$125$$) {
  if(!$JSCompiler_StaticMethods_setMaxContainerHeight$self$$.$_maxContainerHeight$ || $JSCompiler_StaticMethods_setMaxContainerHeight$self$$.$_maxContainerHeight$ < $height$$125$$) {
    $JSCompiler_StaticMethods_setMaxContainerHeight$self$$.$_maxContainerHeight$ = $height$$125$$
  }
};
D.$DvtPanelDrawer$$.prototype.$getDimensions$ = function $$DvtPanelDrawer$$$$$getDimensions$$($dim$$88_targetCoordinateSpace$$45$$) {
  $dim$$88_targetCoordinateSpace$$45$$ = D.$DvtPanelDrawer$$.$superclass$.$getDimensions$.call(this, $dim$$88_targetCoordinateSpace$$45$$);
  $dim$$88_targetCoordinateSpace$$45$$.$w$ /= 1.25;
  return $dim$$88_targetCoordinateSpace$$45$$
};
D.$DvtPanelDrawerEventManager$$ = function $$DvtPanelDrawerEventManager$$$($context$$295$$, $callback$$82$$, $callbackObj$$56$$) {
  this.Init($context$$295$$, $callback$$82$$, $callbackObj$$56$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPanelDrawerEventManager$$, D.$DvtEventManager$$, "DvtPanelDrawerEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPanelDrawerEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$381$$) {
  var $obj$$160$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$381$$));
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnClick$.call(this, $event$$381$$);
  $obj$$160$$ && ($obj$$160$$.$HandleClick$ && $obj$$160$$.$HandleClick$($event$$381$$), $event$$381$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnDblClick$$($event$$382$$) {
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnDblClick$.call(this, $event$$382$$);
  var $obj$$161$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$382$$));
  $obj$$161$$ && ($obj$$161$$.$isDoubleClickable$ && ($obj$$161$$.$isDoubleClickable$() && $obj$$161$$.$HandleDblClick$) && $obj$$161$$.$HandleDblClick$($event$$382$$), $event$$382$$.stopPropagation())
};
D.$JSCompiler_prototypeAlias$$.$OnRollOver$ = function $$JSCompiler_prototypeAlias$$$$OnRollOver$$($event$$383$$) {
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnRollOver$.call(this, $event$$383$$);
  var $obj$$162$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$383$$));
  $obj$$162$$ && $obj$$162$$.$HandleRollOver$ && $obj$$162$$.$HandleRollOver$($event$$383$$)
};
D.$JSCompiler_prototypeAlias$$.$OnRollOut$ = function $$JSCompiler_prototypeAlias$$$$OnRollOut$$($event$$384$$) {
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnRollOut$.call(this, $event$$384$$);
  var $obj$$163$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$384$$));
  $obj$$163$$ && $obj$$163$$.$HandleRollOut$ && $obj$$163$$.$HandleRollOut$($event$$384$$)
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$385$$) {
  var $obj$$164$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$385$$));
  D.$DvtPanelDrawerEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $event$$385$$);
  $obj$$164$$ && ($obj$$164$$.$HandleClick$ && $obj$$164$$.$HandleClick$($event$$385$$), $event$$385$$.stopPropagation())
};
D.$DvtAccordion$$ = function $$DvtAccordion$$$($context$$685$$, $id$$286$$, $w$$78$$, $h$$73$$, $eventManager$$41$$, $images$$26$$, $styleMap$$94$$) {
  this.Init($context$$685$$, $id$$286$$, $w$$78$$, $h$$73$$, $eventManager$$41$$, $images$$26$$, $styleMap$$94$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtAccordion$$, D.$DvtContainer$$, "DvtAccordion");
D.$DvtAccordion$$.prototype.Init = function $$DvtAccordion$$$$Init$($context$$686$$, $id$$287$$, $w$$79$$, $h$$74$$, $eventManager$$42$$, $images$$27$$, $styleMap$$95$$) {
  D.$DvtAccordion$$.$superclass$.Init.call(this, $context$$686$$, D.$JSCompiler_alias_NULL$$, $id$$287$$);
  this.$_images$ = $images$$27$$;
  this.$_styleMap$ = (new D.$DvtAccordionDefaults$$).$calcOptions$($styleMap$$95$$);
  this.$_sections$ = {};
  this.$_sectionOrder$ = [];
  this.$_maxWidth$ = $w$$79$$;
  this.$_minWidth$ = 0;
  this.$_maxHeight$ = $h$$74$$;
  this.$_bExpandMany$ = this.$_bCollapseAll$ = D.$JSCompiler_alias_FALSE$$;
  this.$_eventManager$ = $eventManager$$42$$;
  this.$_eventManager$.$addListeners$(this);
  this.$_eventManager$.$associate$(this, this)
};
D.$JSCompiler_StaticMethods_addSection$$ = function $$JSCompiler_StaticMethods_addSection$$$($JSCompiler_StaticMethods_addSection$self$$, $accordionSection_title$$13$$, $sectionContent$$1$$, $isActive$$3$$, $id$$288$$) {
  $id$$288$$ || ($id$$288$$ = "accordion_" + $accordionSection_title$$13$$.replace(/ /g, "_") + window.Math.floor(1E9 * window.Math.random()));
  $accordionSection_title$$13$$ = new D.$DvtAccordionSection$$($JSCompiler_StaticMethods_addSection$self$$.$_context$, $sectionContent$$1$$, $accordionSection_title$$13$$, $isActive$$3$$, D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_addSection$self$$, $JSCompiler_StaticMethods_addSection$self$$.$_eventManager$, $id$$288$$, $JSCompiler_StaticMethods_addSection$self$$.$_images$, $JSCompiler_StaticMethods_addSection$self$$.$_styleMap$);
  $JSCompiler_StaticMethods_addSection$self$$.$_sections$[$id$$288$$] = $accordionSection_title$$13$$;
  $JSCompiler_StaticMethods_addSection$self$$.$_sectionOrder$.push($id$$288$$);
  $JSCompiler_StaticMethods_addSection$self$$.$addChild$($accordionSection_title$$13$$)
};
D.$DvtAccordion$$.prototype.$render$ = function $$DvtAccordion$$$$$render$$() {
  for(var $maxSectionWidth$$ = (0,D.$JSCompiler_StaticMethods_getMaxSectionWidth$$)(this), $bHasActive$$ = D.$JSCompiler_alias_FALSE$$, $i$$820$$ = 0;$i$$820$$ < this.$_sectionOrder$.length;$i$$820$$++) {
    var $section$$14$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $i$$820$$);
    $section$$14$$.$render$($maxSectionWidth$$);
    $bHasActive$$ && !this.$_bExpandMany$ && $section$$14$$.setActive(D.$JSCompiler_alias_FALSE$$);
    $section$$14$$.$_isActive$ && $section$$14$$.$_isCollapsible$ && ($bHasActive$$ = D.$JSCompiler_alias_TRUE$$)
  }
  !$bHasActive$$ && (0 < this.$_sectionOrder$.length && !this.$_bCollapseAll$) && (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, 0).setActive(D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods__drawSections$$)(this)
};
D.$DvtAccordion$$.prototype.$setMaxHeight$ = (0,D.$JSCompiler_set$$)("$_maxHeight$");
D.$DvtAccordion$$.prototype.$setMaxWidth$ = (0,D.$JSCompiler_set$$)("$_maxWidth$");
D.$DvtAccordion$$.prototype.$Update$ = function $$DvtAccordion$$$$$Update$$($activeSection_activeSectionId$$1$$) {
  $activeSection_activeSectionId$$1$$ = this.$_sections$[$activeSection_activeSectionId$$1$$];
  var $JSCompiler_temp$$323_currActiveState_i$$821_section$$inline_8131$$ = $activeSection_activeSectionId$$1$$.$_isActive$;
  if($JSCompiler_temp$$323_currActiveState_i$$821_section$$inline_8131$$) {
    if($JSCompiler_temp$$323_currActiveState_i$$821_section$$inline_8131$$) {
      if($activeSection_activeSectionId$$1$$.$_isCollapsible$) {
        if(this.$_bCollapseAll$) {
          $JSCompiler_temp$$323_currActiveState_i$$821_section$$inline_8131$$ = D.$JSCompiler_alias_TRUE$$
        }else {
          for(var $expandedSectionCounter$$inline_8132$$ = 0, $i$$inline_8133$$ = 0;$i$$inline_8133$$ < this.$_sectionOrder$.length;$i$$inline_8133$$++) {
            $JSCompiler_temp$$323_currActiveState_i$$821_section$$inline_8131$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $i$$inline_8133$$), $JSCompiler_temp$$323_currActiveState_i$$821_section$$inline_8131$$.$_isActive$ && $expandedSectionCounter$$inline_8132$$++
          }
          $JSCompiler_temp$$323_currActiveState_i$$821_section$$inline_8131$$ = 1 < $expandedSectionCounter$$inline_8132$$
        }
      }else {
        $JSCompiler_temp$$323_currActiveState_i$$821_section$$inline_8131$$ = D.$JSCompiler_alias_FALSE$$
      }
    }
    $JSCompiler_temp$$323_currActiveState_i$$821_section$$inline_8131$$ && $activeSection_activeSectionId$$1$$.setActive(D.$JSCompiler_alias_FALSE$$)
  }else {
    if(!this.$_bExpandMany$) {
      for($JSCompiler_temp$$323_currActiveState_i$$821_section$$inline_8131$$ = 0;$JSCompiler_temp$$323_currActiveState_i$$821_section$$inline_8131$$ < this.$_sectionOrder$.length;$JSCompiler_temp$$323_currActiveState_i$$821_section$$inline_8131$$++) {
        (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)(this, $JSCompiler_temp$$323_currActiveState_i$$821_section$$inline_8131$$).setActive(D.$JSCompiler_alias_FALSE$$)
      }
    }
    $activeSection_activeSectionId$$1$$.setActive(D.$JSCompiler_alias_TRUE$$)
  }
  (0,D.$JSCompiler_StaticMethods__drawSections$$)(this)
};
D.$JSCompiler_StaticMethods_getMaxSectionWidth$$ = function $$JSCompiler_StaticMethods_getMaxSectionWidth$$$($JSCompiler_StaticMethods_getMaxSectionWidth$self$$) {
  if(!$JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxSectionWidth$) {
    for(var $maxSectionWidth$$1$$ = 0, $paddingX$$1$$ = $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_styleMap$.paddingX, $i$$822$$ = 0;$i$$822$$ < $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_sectionOrder$.length;$i$$822$$++) {
      var $secWidth_section$$15$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)($JSCompiler_StaticMethods_getMaxSectionWidth$self$$, $i$$822$$), $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_8135_dim$$89$$;
      $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_8135_dim$$89$$ = $secWidth_section$$15$$;
      if(!$JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_8135_dim$$89$$.$_titleDim$) {
        var $dim$$inline_8137_text$$inline_8136$$ = new D.$DvtOutputText$$($JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_8135_dim$$89$$.$_context$, $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_8135_dim$$89$$.$_title$);
        $dim$$inline_8137_text$$inline_8136$$.$setCSSStyle$($JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_8135_dim$$89$$.$_titleStyle$);
        if($dim$$inline_8137_text$$inline_8136$$ = $dim$$inline_8137_text$$inline_8136$$.$measureDimensions$()) {
          $dim$$inline_8137_text$$inline_8136$$.$w$ = $dim$$inline_8137_text$$inline_8136$$.$w$ + $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_8135_dim$$89$$.$_imageWidth$ + $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_8135_dim$$89$$.$_textPadding$
        }
        $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_8135_dim$$89$$.$_titleDim$ = $dim$$inline_8137_text$$inline_8136$$
      }
      $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_8135_dim$$89$$ = $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_8135_dim$$89$$.$_titleDim$;
      $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_8135_dim$$89$$.$w$ > $maxSectionWidth$$1$$ && ($maxSectionWidth$$1$$ = $JSCompiler_StaticMethods_GetTitleDimensions$self$$inline_8135_dim$$89$$.$w$);
      $secWidth_section$$15$$ = $secWidth_section$$15$$.$getContentDimensions$().$w$ + 2 * $paddingX$$1$$;
      $secWidth_section$$15$$ > $maxSectionWidth$$1$$ && ($maxSectionWidth$$1$$ = $secWidth_section$$15$$)
    }
    $maxSectionWidth$$1$$ = window.Math.min($maxSectionWidth$$1$$, $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxWidth$);
    $maxSectionWidth$$1$$ = window.Math.max($maxSectionWidth$$1$$, $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_minWidth$);
    $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxSectionWidth$ = $maxSectionWidth$$1$$
  }
  return $JSCompiler_StaticMethods_getMaxSectionWidth$self$$.$_maxSectionWidth$
};
D.$JSCompiler_StaticMethods_getSectionByIndex$$ = function $$JSCompiler_StaticMethods_getSectionByIndex$$$($JSCompiler_StaticMethods_getSectionByIndex$self$$, $index$$150$$) {
  return 0 <= $index$$150$$ && $index$$150$$ < $JSCompiler_StaticMethods_getSectionByIndex$self$$.$_sectionOrder$.length ? $JSCompiler_StaticMethods_getSectionByIndex$self$$.$_sections$[$JSCompiler_StaticMethods_getSectionByIndex$self$$.$_sectionOrder$[$index$$150$$]] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__drawSections$$ = function $$JSCompiler_StaticMethods__drawSections$$$($JSCompiler_StaticMethods__drawSections$self$$) {
  for(var $currY$$22_dims$$67$$ = 0, $i$$825$$ = 0;$i$$825$$ < $JSCompiler_StaticMethods__drawSections$self$$.$_sectionOrder$.length;$i$$825$$++) {
    var $section$$18$$ = (0,D.$JSCompiler_StaticMethods_getSectionByIndex$$)($JSCompiler_StaticMethods__drawSections$self$$, $i$$825$$);
    $section$$18$$.$setTranslateY$($currY$$22_dims$$67$$);
    $section$$18$$.$_isActive$ ? ($section$$18$$.expand(), $currY$$22_dims$$67$$ += $section$$18$$.$getDimensionsWithStroke$().$h$, $currY$$22_dims$$67$$ += $JSCompiler_StaticMethods__drawSections$self$$.$_styleMap$.paddingY) : ($section$$18$$.collapse(), $currY$$22_dims$$67$$ += $JSCompiler_StaticMethods__drawSections$self$$.$_styleMap$.sectionHeader.headerHeight)
  }
  $currY$$22_dims$$67$$ = $JSCompiler_StaticMethods__drawSections$self$$.$getDimensionsWithStroke$();
  $JSCompiler_StaticMethods__drawSections$self$$.$FireListener$(new D.$DvtResizeEvent$$($currY$$22_dims$$67$$.$w$, $currY$$22_dims$$67$$.$h$, 0, 0))
};
D.$DvtAccordionSection$$ = function $$DvtAccordionSection$$$($context$$300$$, $section$$7$$, $title$$10$$, $isActive$$1$$, $isCollapsible$$, $parent$$49$$, $eventManager$$16$$, $id$$142$$, $images$$14$$, $styleMap$$39$$) {
  this.Init($context$$300$$, $section$$7$$, $title$$10$$, $isActive$$1$$, $isCollapsible$$, $parent$$49$$, $eventManager$$16$$, $id$$142$$, $images$$14$$, $styleMap$$39$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtAccordionSection$$, D.$DvtContainer$$, "DvtAccordionSection");
D.$JSCompiler_prototypeAlias$$ = D.$DvtAccordionSection$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$301$$, $section$$8$$, $title$$11$$, $isActive$$2$$, $isCollapsible$$1$$, $parent$$50$$, $eventManager$$17$$, $id$$143$$, $images$$15$$, $styleMap$$40$$) {
  D.$DvtAccordionSection$$.$superclass$.Init.call(this, $context$$301$$, D.$JSCompiler_alias_NULL$$, $id$$143$$);
  this.$_parent$ = $parent$$50$$;
  this.$_images$ = $images$$15$$;
  this.$_title$ = $title$$11$$;
  this.$_id$ = $id$$143$$;
  this.$_sectionContent$ = $section$$8$$;
  this.$_collapsedBtn$ = this.$_expandedBtn$ = D.$JSCompiler_alias_NULL$$;
  this.$_isActive$ = (this.$_isCollapsible$ = $isCollapsible$$1$$) ? $isActive$$2$$ : D.$JSCompiler_alias_TRUE$$;
  this.$_eventManager$ = $eventManager$$17$$;
  this.$_styleMap$ = $styleMap$$40$$;
  this.$_headerHeight$ = this.$_styleMap$.sectionHeader.headerHeight;
  this.$_paddingX$ = this.$_styleMap$.paddingX;
  this.$_paddingY$ = this.$_styleMap$.paddingY;
  this.$_titleStyle$ = this.$_styleMap$.sectionHeader.styleEna;
  this.$_imageWidth$ = this.$_styleMap$.sectionHeader.imageWidth;
  this.$_imageHeight$ = this.$_styleMap$.sectionHeader.imageHeight;
  this.$_textPadding$ = this.$_styleMap$.sectionHeader.textPadding
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getTitle$ = (0,D.$JSCompiler_get$$)("$_title$");
D.$JSCompiler_prototypeAlias$$.setActive = (0,D.$JSCompiler_set$$)("$_isActive$");
D.$JSCompiler_prototypeAlias$$.$getContentDimensions$ = function $$JSCompiler_prototypeAlias$$$$getContentDimensions$$() {
  var $dim$$22$$ = D.$JSCompiler_alias_NULL$$;
  0 > this.$getChildIndex$(this.$_sectionContent$) ? (this.$addChild$(this.$_sectionContent$), $dim$$22$$ = this.$_sectionContent$.$getDimensions$(), this.removeChild(this.$_sectionContent$)) : $dim$$22$$ = this.$_sectionContent$.$getDimensions$();
  return $dim$$22$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($base$$inline_5319_proxy$$inline_5318_width$$102$$) {
  var $height$$inline_5316_text$$inline_5320$$ = this.$_headerHeight$;
  if(this.$_isCollapsible$) {
    this.$_images$.$getAttr$ ? (window.ena = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.$getAttr$("sectionExpEna"), this.$_title$, $base$$inline_5319_proxy$$inline_5318_width$$102$$, $height$$inline_5316_text$$inline_5320$$), window.ovr = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 1, this.$_images$.$getAttr$("sectionExpOvr"), this.$_title$, $base$$inline_5319_proxy$$inline_5318_width$$102$$, $height$$inline_5316_text$$inline_5320$$), window.dwn = 
    (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.$getAttr$("sectionExpDwn"), this.$_title$, $base$$inline_5319_proxy$$inline_5318_width$$102$$, $height$$inline_5316_text$$inline_5320$$)) : (window.ena = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.sectionExpEna, this.$_title$, $base$$inline_5319_proxy$$inline_5318_width$$102$$, $height$$inline_5316_text$$inline_5320$$), window.ovr = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 
    1, this.$_images$.sectionExpOvr, this.$_title$, $base$$inline_5319_proxy$$inline_5318_width$$102$$, $height$$inline_5316_text$$inline_5320$$), window.dwn = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.sectionExpDwn, this.$_title$, $base$$inline_5319_proxy$$inline_5318_width$$102$$, $height$$inline_5316_text$$inline_5320$$));
    this.$_expandedBtn$ = new D.$DvtButton$$(this.$_context$, window.ena, window.ovr, window.dwn);
    this.$_images$.$getAttr$ ? (window.ena = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.$getAttr$("sectionColEna"), this.$_title$, $base$$inline_5319_proxy$$inline_5318_width$$102$$, $height$$inline_5316_text$$inline_5320$$), window.ovr = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 1, this.$_images$.$getAttr$("sectionColOvr"), this.$_title$, $base$$inline_5319_proxy$$inline_5318_width$$102$$, $height$$inline_5316_text$$inline_5320$$), window.dwn = 
    (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.$getAttr$("sectionColDwn"), this.$_title$, $base$$inline_5319_proxy$$inline_5318_width$$102$$, $height$$inline_5316_text$$inline_5320$$)) : (window.ena = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 0, this.$_images$.sectionColEna, this.$_title$, $base$$inline_5319_proxy$$inline_5318_width$$102$$, $height$$inline_5316_text$$inline_5320$$), window.ovr = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 
    1, this.$_images$.sectionColOvr, this.$_title$, $base$$inline_5319_proxy$$inline_5318_width$$102$$, $height$$inline_5316_text$$inline_5320$$), window.dwn = (0,D.$JSCompiler_StaticMethods__createHeaderState$$)(this, 2, this.$_images$.sectionColDwn, this.$_title$, $base$$inline_5319_proxy$$inline_5318_width$$102$$, $height$$inline_5316_text$$inline_5320$$));
    this.$_collapsedBtn$ = new D.$DvtButton$$(this.$_context$, window.ena, window.ovr, window.dwn);
    var $thisRef$$inline_5317$$ = this;
    $base$$inline_5319_proxy$$inline_5318_width$$102$$ = {$HandleClick$:function $$base$$inline_5319_proxy$$inline_5318_width$$102$$$$HandleClick$$() {
      $thisRef$$inline_5317$$.$_parent$.$Update$($thisRef$$inline_5317$$.getId())
    }};
    this.$_eventManager$.$associate$(this.$_expandedBtn$, $base$$inline_5319_proxy$$inline_5318_width$$102$$);
    this.$_eventManager$.$associate$(this.$_collapsedBtn$, $base$$inline_5319_proxy$$inline_5318_width$$102$$)
  }else {
    $base$$inline_5319_proxy$$inline_5318_width$$102$$ = (0,D.$JSCompiler_StaticMethods__createButtonBase$$)(this, 3, $base$$inline_5319_proxy$$inline_5318_width$$102$$, $height$$inline_5316_text$$inline_5320$$), $height$$inline_5316_text$$inline_5320$$ = (0,D.$JSCompiler_StaticMethods__createButtonText$$)(this, this.$_title$), this.$_header$ = new D.$DvtContainer$$(this.$_context$), this.$_header$.$addChild$($base$$inline_5319_proxy$$inline_5318_width$$102$$), this.$_header$.$addChild$($height$$inline_5316_text$$inline_5320$$)
  }
  this.$_isCollapsible$ ? this.$_isActive$ ? (this.$addChildAt$(this.$_expandedBtn$, 0), this.$addChild$(this.$_sectionContent$), this.$_sectionContent$.$setTranslateX$(this.$_paddingX$), this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + this.$_paddingY$)) : this.$addChild$(this.$_collapsedBtn$) : (this.$addChildAt$(this.$_header$, 0), this.$addChild$(this.$_sectionContent$), this.$_sectionContent$.$setTranslateX$(this.$_paddingX$), this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + 
  this.$_paddingY$))
};
D.$JSCompiler_prototypeAlias$$.collapse = function $$JSCompiler_prototypeAlias$$$collapse$() {
  this.$_isCollapsible$ && (0 <= this.$getChildIndex$(this.$_expandedBtn$) && this.removeChild(this.$_expandedBtn$), 0 <= this.$getChildIndex$(this.$_sectionContent$) && this.removeChild(this.$_sectionContent$), this.$addChild$(this.$_collapsedBtn$), this.setActive(D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_prototypeAlias$$.expand = function $$JSCompiler_prototypeAlias$$$expand$() {
  0 <= this.$getChildIndex$(this.$_collapsedBtn$) && this.removeChild(this.$_collapsedBtn$);
  this.$addChild$(this.$_expandedBtn$);
  this.$addChild$(this.$_sectionContent$);
  this.$_sectionContent$.$setTranslateX$(this.$_paddingX$);
  this.$_sectionContent$.$setTranslateY$(this.$_headerHeight$ + this.$_paddingY$);
  this.setActive(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_StaticMethods__createHeaderState$$ = function $$JSCompiler_StaticMethods__createHeaderState$$$($JSCompiler_StaticMethods__createHeaderState$self_dim$$26$$, $base$$4_state$$69$$, $image$$10_uri$$11$$, $label$$72_text$$57$$, $ww$$76$$, $hh$$62$$) {
  var $imageWidth$$ = $JSCompiler_StaticMethods__createHeaderState$self_dim$$26$$.$_imageWidth$, $imageHeight$$ = $JSCompiler_StaticMethods__createHeaderState$self_dim$$26$$.$_imageHeight$, $imageOffsetY$$ = ($JSCompiler_StaticMethods__createHeaderState$self_dim$$26$$.$_headerHeight$ - $imageHeight$$) / 2, $buttonState$$1$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods__createHeaderState$self_dim$$26$$.$_context$);
  $base$$4_state$$69$$ = (0,D.$JSCompiler_StaticMethods__createButtonBase$$)($JSCompiler_StaticMethods__createHeaderState$self_dim$$26$$, $base$$4_state$$69$$, $ww$$76$$, $hh$$62$$);
  $buttonState$$1$$.$addChild$($base$$4_state$$69$$);
  ($image$$10_uri$$11$$ = $image$$10_uri$$11$$ ? new D.$DvtImage$$($JSCompiler_StaticMethods__createHeaderState$self_dim$$26$$.$_context$, $image$$10_uri$$11$$, 0, $imageOffsetY$$, $imageWidth$$, $imageHeight$$) : D.$JSCompiler_alias_NULL$$) && $buttonState$$1$$.$addChild$($image$$10_uri$$11$$);
  $label$$72_text$$57$$ = (0,D.$JSCompiler_StaticMethods__createButtonText$$)($JSCompiler_StaticMethods__createHeaderState$self_dim$$26$$, $label$$72_text$$57$$, $ww$$76$$ - $imageWidth$$ - 0, $hh$$62$$, $buttonState$$1$$);
  (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__createHeaderState$self_dim$$26$$.$_context$) ? ($JSCompiler_StaticMethods__createHeaderState$self_dim$$26$$ = $label$$72_text$$57$$.$measureDimensions$(), $label$$72_text$$57$$.$setTranslateX$($ww$$76$$ - $JSCompiler_StaticMethods__createHeaderState$self_dim$$26$$.$w$ - $imageWidth$$), $image$$10_uri$$11$$ && $image$$10_uri$$11$$.$setTranslateX$($ww$$76$$ - $imageWidth$$)) : $label$$72_text$$57$$.$setTranslateX$($imageWidth$$);
  return $buttonState$$1$$
};
D.$JSCompiler_StaticMethods__createButtonText$$ = function $$JSCompiler_StaticMethods__createButtonText$$$($JSCompiler_StaticMethods__createButtonText$self$$, $dims$$40_label$$73$$, $ww$$77$$, $hh$$63$$, $container$$98$$) {
  var $text$$58$$ = D.$JSCompiler_alias_NULL$$;
  if($dims$$40_label$$73$$) {
    $text$$58$$ = new D.$DvtOutputText$$($JSCompiler_StaticMethods__createButtonText$self$$.$_context$, $dims$$40_label$$73$$);
    $text$$58$$.$setCSSStyle$($JSCompiler_StaticMethods__createButtonText$self$$.$_titleStyle$);
    D.$DvtTextUtils$$.$fitText$($text$$58$$, $ww$$77$$, $hh$$63$$, $container$$98$$);
    $dims$$40_label$$73$$ = $text$$58$$.$measureDimensions$();
    if(!$JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$ || $JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$.$w$ < $dims$$40_label$$73$$.$w$ || $JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$.$h$ < $dims$$40_label$$73$$.$h$) {
      $JSCompiler_StaticMethods__createButtonText$self$$.$_titleDim$ = $dims$$40_label$$73$$
    }
    $text$$58$$.$setTranslateY$(($JSCompiler_StaticMethods__createButtonText$self$$.$_headerHeight$ - $dims$$40_label$$73$$.$h$) / 2)
  }
  return $text$$58$$
};
D.$JSCompiler_StaticMethods__createButtonBase$$ = function $$JSCompiler_StaticMethods__createButtonBase$$$($JSCompiler_StaticMethods__createButtonBase$self_base$$5$$, $state$$71$$, $ww$$78$$, $hh$$64$$) {
  var $style$$45$$ = D.$JSCompiler_alias_NULL$$;
  switch($state$$71$$) {
    case 1:
      $style$$45$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$5$$.$_styleMap$.sectionHeader.styleOvr;
      break;
    case 2:
      $style$$45$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$5$$.$_styleMap$.sectionHeader.styleDwn;
      break;
    case 3:
      $style$$45$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$5$$.$_styleMap$.sectionHeader.styleDis;
      break;
    default:
      $style$$45$$ = $JSCompiler_StaticMethods__createButtonBase$self_base$$5$$.$_styleMap$.sectionHeader.styleEna
  }
  $JSCompiler_StaticMethods__createButtonBase$self_base$$5$$ = new D.$DvtRect$$($JSCompiler_StaticMethods__createButtonBase$self_base$$5$$.$_context$, 0, 0, $ww$$78$$, $hh$$64$$);
  $JSCompiler_StaticMethods__createButtonBase$self_base$$5$$.$setStroke$((0,D.$DvtAccordionSection$_getStroke$$)($style$$45$$));
  $JSCompiler_StaticMethods__createButtonBase$self_base$$5$$.$setFill$((0,D.$DvtAccordionSection$_getFill$$)($style$$45$$));
  return $JSCompiler_StaticMethods__createButtonBase$self_base$$5$$
};
D.$DvtAccordionSection$_getFill$$ = function $$DvtAccordionSection$_getFill$$$($angle$$28_gradObj$$1_style$$46$$) {
  var $arColors$$9_color$$45$$ = $angle$$28_gradObj$$1_style$$46$$.$getStyle$("background-color");
  $angle$$28_gradObj$$1_style$$46$$ = (0,D.$JSCompiler_StaticMethods_getBackgroundImage$$)($angle$$28_gradObj$$1_style$$46$$);
  var $arAlphas$$8_fill$$48$$ = D.$JSCompiler_alias_NULL$$;
  if($angle$$28_gradObj$$1_style$$46$$ && $angle$$28_gradObj$$1_style$$46$$ instanceof D.$DvtCSSGradient$$) {
    var $arColors$$9_color$$45$$ = $angle$$28_gradObj$$1_style$$46$$.$_arColors$, $arAlphas$$8_fill$$48$$ = $angle$$28_gradObj$$1_style$$46$$.$_arAlphas$, $arStops$$5$$ = $angle$$28_gradObj$$1_style$$46$$.$_arRatios$;
    $angle$$28_gradObj$$1_style$$46$$ = $angle$$28_gradObj$$1_style$$46$$.$getAngle$();
    $arAlphas$$8_fill$$48$$ = new D.$DvtLinearGradientFill$$($angle$$28_gradObj$$1_style$$46$$, $arColors$$9_color$$45$$, $arAlphas$$8_fill$$48$$, $arStops$$5$$)
  }else {
    $arColors$$9_color$$45$$ && ($arAlphas$$8_fill$$48$$ = new D.$DvtSolidFill$$($arColors$$9_color$$45$$, 1))
  }
  return $arAlphas$$8_fill$$48$$
};
D.$DvtAccordionSection$_getStroke$$ = function $$DvtAccordionSection$_getStroke$$$($color$$46_style$$47$$) {
  $color$$46_style$$47$$ = $color$$46_style$$47$$.$getStyle$("border-color");
  return new D.$DvtSolidStroke$$($color$$46_style$$47$$, 1, 1)
};
D.$DvtAccordionDefaults$$ = function $$DvtAccordionDefaults$$$() {
  this.Init({skyros:D.$DvtAccordionDefaults$VERSION_1$$, alta:D.$DvtAccordionDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtAccordionDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtAccordionDefaults");
D.$DvtAccordionDefaults$VERSION_1$$ = {skin:"alta", sectionHeader:{styleEna:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), styleOvr:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), styleDwn:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), 
styleDis:new D.$DvtCSSStyle$$("font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;font-weight:bold;color:#252525;border-color:#D9DFE3;background-color:#F5F5F5;"), headerHeight:33, imageWidth:24, imageHeight:24, textPadding:5}, paddingX:0, paddingY:0};
D.$DvtAccordionDefaults$SKIN_ALTA$$ = {};
D.$DvtTrain$$ = function $$DvtTrain$$$($context$$681$$, $eventManager$$38$$, $labels$$22$$, $buttonStyles$$12$$, $id$$275$$) {
  this.Init($context$$681$$, $eventManager$$38$$, $labels$$22$$, $buttonStyles$$12$$, $id$$275$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTrain$$, D.$DvtContainer$$, "DvtTrain");
D.$DvtTrain$$.prototype.Init = function $$DvtTrain$$$$Init$($context$$682$$, $eventManager$$39$$, $labels$$23$$, $buttonStyles$$13$$, $id$$276$$) {
  D.$DvtTrain$$.$superclass$.Init.call(this, $context$$682$$, D.$JSCompiler_alias_NULL$$, $id$$276$$);
  this.$_tooltipManager$ = $context$$682$$.$getTooltipManager$();
  this.$_labels$ = $labels$$23$$;
  this.$_buttonStyles$ = $buttonStyles$$13$$;
  this.$_count$ = $labels$$23$$.length;
  this.$_buttons$ = (0,window.Array)(this.$_count$);
  this.$_selectedIndex$ = 0;
  this.$RenderSelf$($eventManager$$39$$)
};
D.$DvtTrain$$.prototype.$setSelectedIndex$ = function $$DvtTrain$$$$$setSelectedIndex$$($index$$147$$) {
  0 <= $index$$147$$ && $index$$147$$ < this.$_count$ && (0,D.$JSCompiler_StaticMethods_SelectedIndexChanged$$)(this, this.$_selectedIndex$, $index$$147$$)
};
D.$DvtTrain$$.prototype.$HandleClick$ = function $$DvtTrain$$$$$HandleClick$$($event$$686_selIndex$$3$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$686_selIndex$$3$$);
  for(var $event$$inline_8057_i$$816$$ = 0;$event$$inline_8057_i$$816$$ < this.$_buttons$.length;$event$$inline_8057_i$$816$$++) {
    if($event$$686_selIndex$$3$$.target.getParent() === this.$_buttons$[$event$$inline_8057_i$$816$$]) {
      $event$$686_selIndex$$3$$ = this.$_selectedIndex$;
      (0,D.$JSCompiler_StaticMethods_SelectedIndexChanged$$)(this, $event$$686_selIndex$$3$$, $event$$inline_8057_i$$816$$);
      $event$$686_selIndex$$3$$ != $event$$inline_8057_i$$816$$ && ($event$$inline_8057_i$$816$$ = new D.$DvtTrainEvent$$(this.$_selectedIndex$), this.$FireListener$($event$$inline_8057_i$$816$$, D.$JSCompiler_alias_FALSE$$));
      break
    }
  }
};
D.$JSCompiler_StaticMethods_SelectedIndexChanged$$ = function $$JSCompiler_StaticMethods_SelectedIndexChanged$$$($JSCompiler_StaticMethods_SelectedIndexChanged$self$$, $button$$82_oldIndex$$3$$, $newIndex$$8$$) {
  $JSCompiler_StaticMethods_SelectedIndexChanged$self$$.$_selectedIndex$ = $newIndex$$8$$;
  if($button$$82_oldIndex$$3$$ = $JSCompiler_StaticMethods_SelectedIndexChanged$self$$.$_buttons$[$button$$82_oldIndex$$3$$]) {
    $button$$82_oldIndex$$3$$.$overState$ && $button$$82_oldIndex$$3$$.$overState$.setCursor("pointer"), $button$$82_oldIndex$$3$$.$downState$ && $button$$82_oldIndex$$3$$.$downState$.setCursor("pointer"), (0,D.$JSCompiler_StaticMethods_setToggled$$)($button$$82_oldIndex$$3$$, D.$JSCompiler_alias_FALSE$$)
  }
  if($button$$82_oldIndex$$3$$ = $JSCompiler_StaticMethods_SelectedIndexChanged$self$$.$_buttons$[$newIndex$$8$$]) {
    $button$$82_oldIndex$$3$$.$overState$ && $button$$82_oldIndex$$3$$.$overState$.setCursor("default"), $button$$82_oldIndex$$3$$.$downState$ && $button$$82_oldIndex$$3$$.$downState$.setCursor("default"), (0,D.$JSCompiler_StaticMethods_setToggled$$)($button$$82_oldIndex$$3$$, D.$JSCompiler_alias_TRUE$$)
  }
};
D.$DvtTrain$$.prototype.$RenderSelf$ = function $$DvtTrain$$$$$RenderSelf$$($eventManager$$40$$) {
  var $bBiDi$$6$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$), $buttonSize_buttonStyle$$inline_8060$$;
  if(!this.$_buttonSize$) {
    if(this.$_buttonStyles$ && ($buttonSize_buttonStyle$$inline_8060$$ = this.$_buttonStyles$[0])) {
      this.$_buttonSize$ = (0,D.$DvtCSSStyle$toNumber$$)($buttonSize_buttonStyle$$inline_8060$$.getWidth())
    }
    this.$_buttonSize$ || (this.$_buttonSize$ = 8)
  }
  $buttonSize_buttonStyle$$inline_8060$$ = this.$_buttonSize$;
  for(var $i$$817$$ = 0;$i$$817$$ < this.$_count$;$i$$817$$++) {
    var $button$$83$$, $button$$inline_8063_j$$113$$ = $button$$83$$ = this.$CreateButton$($buttonSize_buttonStyle$$inline_8060$$, $i$$817$$ == this.$_selectedIndex$, this.$_labels$[$i$$817$$]);
    $button$$inline_8063_j$$113$$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleClick$, D.$JSCompiler_alias_FALSE$$, this);
    (0,D.$DvtAgent$isTouchDevice$$)() || $button$$inline_8063_j$$113$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleClick$, D.$JSCompiler_alias_FALSE$$, this);
    $button$$inline_8063_j$$113$$ = $i$$817$$;
    $bBiDi$$6$$ && ($button$$inline_8063_j$$113$$ = this.$_count$ - 1 - $i$$817$$);
    $eventManager$$40$$ && $eventManager$$40$$.$associate$($button$$83$$, $button$$83$$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($button$$83$$, $button$$inline_8063_j$$113$$ * $buttonSize_buttonStyle$$inline_8060$$ + 3 * ($button$$inline_8063_j$$113$$ + 1), 1);
    this.$addChild$($button$$83$$);
    this.$_buttons$[$i$$817$$] = $button$$83$$
  }
};
D.$DvtTrain$$.prototype.$CreateButtonState$ = function $$DvtTrain$$$$$CreateButtonState$$($url$$29$$, $buttonSize$$2$$) {
  return new D.$DvtImage$$(this.$_context$, $url$$29$$, 0, 0, $buttonSize$$2$$, $buttonSize$$2$$)
};
D.$JSCompiler_StaticMethods_MakeButtonState$$ = function $$JSCompiler_StaticMethods_MakeButtonState$$$($JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$409_shape$$99_shape$$inline_8072$$, $buttonSize$$3$$, $state$$95$$, $bSelected$$5$$) {
  var $bdColor$$inline_8069_style$$109_url$$30$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$409_shape$$99_shape$$inline_8072$$.$_buttonStyles$ ? $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$409_shape$$99_shape$$inline_8072$$.$_buttonStyles$[$state$$95$$] : D.$JSCompiler_alias_NULL$$;
  if($bdColor$$inline_8069_style$$109_url$$30$$ = $bdColor$$inline_8069_style$$109_url$$30$$ ? $bdColor$$inline_8069_style$$109_url$$30$$.$getStyle$("content") : D.$JSCompiler_alias_NULL$$) {
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$409_shape$$99_shape$$inline_8072$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$409_shape$$99_shape$$inline_8072$$.$CreateButtonState$($bdColor$$inline_8069_style$$109_url$$30$$, $buttonSize$$3$$)
  }else {
    var $buttonStyle$$inline_8068$$, $bgColor$$inline_8070$$, $offset$$inline_8071$$;
    2 == $state$$95$$ ? ($offset$$inline_8071$$ = 0, $bgColor$$inline_8070$$ = "#61bde3", $bdColor$$inline_8069_style$$109_url$$30$$ = "#0066ff", $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$409_shape$$99_shape$$inline_8072$$.$_buttonStyles$ && ($buttonStyle$$inline_8068$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$409_shape$$99_shape$$inline_8072$$.$_buttonStyles$[2])) : ($offset$$inline_8071$$ = 1, $bgColor$$inline_8070$$ = "#c0cbd5", $bdColor$$inline_8069_style$$109_url$$30$$ = 
    "#5d7891", $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$409_shape$$99_shape$$inline_8072$$.$_buttonStyles$ && ($buttonStyle$$inline_8068$$ = $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$409_shape$$99_shape$$inline_8072$$.$_buttonStyles$[0]));
    $buttonStyle$$inline_8068$$ && ($buttonStyle$$inline_8068$$.$getStyle$("border-color") && ($bdColor$$inline_8069_style$$109_url$$30$$ = $buttonStyle$$inline_8068$$.$getStyle$("border-color")), $buttonStyle$$inline_8068$$.$getStyle$("background-color") && ($bgColor$$inline_8070$$ = $buttonStyle$$inline_8068$$.$getStyle$("background-color")));
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$409_shape$$99_shape$$inline_8072$$ = new D.$DvtRect$$($JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$409_shape$$99_shape$$inline_8072$$.$_context$, $offset$$inline_8071$$, $offset$$inline_8071$$, $buttonSize$$3$$ - 2 * $offset$$inline_8071$$, $buttonSize$$3$$ - 2 * $offset$$inline_8071$$);
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$409_shape$$99_shape$$inline_8072$$.$setSolidFill$($bgColor$$inline_8070$$);
    $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$409_shape$$99_shape$$inline_8072$$.$setSolidStroke$($bdColor$$inline_8069_style$$109_url$$30$$)
  }
  $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$409_shape$$99_shape$$inline_8072$$.setCursor(0 == $state$$95$$ || $bSelected$$5$$ ? "default" : "pointer");
  return $JSCompiler_StaticMethods_MakeButtonState$self_JSCompiler_temp$$409_shape$$99_shape$$inline_8072$$
};
D.$DvtTrain$$.prototype.$CreateButton$ = function $$DvtTrain$$$$$CreateButton$$($button$$86_buttonSize$$4$$, $bSelected$$6$$, $tooltip$$53$$) {
  $button$$86_buttonSize$$4$$ = new D.$DvtButton$$(this.$_context$, (0,D.$JSCompiler_StaticMethods_MakeButtonState$$)(this, $button$$86_buttonSize$$4$$, 0, $bSelected$$6$$), (0,D.$JSCompiler_StaticMethods_MakeButtonState$$)(this, $button$$86_buttonSize$$4$$, 1, $bSelected$$6$$), (0,D.$JSCompiler_StaticMethods_MakeButtonState$$)(this, $button$$86_buttonSize$$4$$, 2, $bSelected$$6$$), D.$JSCompiler_alias_NULL$$);
  $button$$86_buttonSize$$4$$.$setTooltip$($tooltip$$53$$);
  $button$$86_buttonSize$$4$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  $bSelected$$6$$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)($button$$86_buttonSize$$4$$, $bSelected$$6$$);
  return $button$$86_buttonSize$$4$$
};
D.$DvtTrainEvent$$ = function $$DvtTrainEvent$$$($index$$149$$) {
  this.Init("dvtTrain");
  this.type = this.$getType$();
  this.$_index$ = $index$$149$$
};
(0,D.$goog$exportSymbol$$)("DvtTrainEvent", D.$DvtTrainEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTrainEvent$$, D.$DvtBaseComponentEvent$$, "DvtTrainEvent");
D.$DvtTrainEvent$$.TYPE = "dvtTrain";
D.$DvtTrainEvent$$.prototype.$getIndex$ = (0,D.$JSCompiler_get$$)("$_index$");
D.$DvtTrainEvent$$.prototype.getIndex = D.$DvtTrainEvent$$.prototype.$getIndex$;
D.DvtOverviewWindow = function $DvtOverviewWindow$($context$$690$$, $id$$290$$, $x$$302$$, $y$$268$$, $ww$$125$$, $hh$$107$$) {
  this.Init($context$$690$$, $id$$290$$, $x$$302$$, $y$$268$$, $ww$$125$$, $hh$$107$$)
};
D.$DvtObj$$.$createSubclass$(D.DvtOverviewWindow, D.$DvtContainer$$, "DvtOverviewWindow");
D.DvtOverviewWindow.$VIEWPORT_BG_COLOR$ = "viewport-bg-color";
D.DvtOverviewWindow.$VIEWPORT_BORDER_COLOR$ = "viewport-border-color";
D.DvtOverviewWindow.$OVERVIEW_DISCLOSED_KEY$ = "isOverviewDisclosed";
D.$JSCompiler_prototypeAlias$$ = D.DvtOverviewWindow.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$691$$, $id$$291$$, $x$$303$$, $y$$269$$, $ww$$126$$, $hh$$108$$) {
  D.DvtOverviewWindow.$superclass$.Init.call(this, $context$$691$$, D.$JSCompiler_alias_NULL$$, $id$$291$$);
  this.$_x$ = $x$$303$$;
  this.$_y$ = $y$$269$$;
  this.$_ww$ = $ww$$126$$;
  this.$_hh$ = $hh$$108$$;
  this.$_skinStyle$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$() {
  this.$_md$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panEnable$ = D.$JSCompiler_alias_TRUE$$;
  this.$_overview$ && ((0,D.$DvtAgent$isTouchDevice$$)() ? (this.$_overview$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$_mouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this)) : (this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$_mouseDown$, 
  D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$_mouseOut$, D.$JSCompiler_alias_FALSE$$, this)), (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_overview$, D.$JSCompiler_alias_NULL$$));
  this.$removeChildren$();
  this.$_overview$ = this.$_viewport$ = D.$JSCompiler_alias_NULL$$;
  var $bgColor$$12_clipPath$$11$$ = new D.$DvtClipPath$$(this.getId());
  (0,D.$JSCompiler_StaticMethods_addRect$$)($bgColor$$12_clipPath$$11$$, 0, 0, this.$_ww$, this.$_hh$);
  this.$_overview$ = new D.$DvtRect$$(this.$_context$, 0, 0, this.$_ww$, this.$_hh$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)(this.$_overview$, $bgColor$$12_clipPath$$11$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_overview$);
  this.$addChild$(this.$_overview$);
  this.$_viewport$ = new D.$DvtRect$$(this.$_context$, 0, 0, 0, 0, this.getId() + ":viewport");
  $bgColor$$12_clipPath$$11$$ = this.$getSkinStyleAttr$(D.DvtOverviewWindow.$VIEWPORT_BG_COLOR$);
  this.$_viewport$.$setSolidStroke$(this.$getSkinStyleAttr$(D.DvtOverviewWindow.$VIEWPORT_BORDER_COLOR$), D.$JSCompiler_alias_NULL$$, 2);
  this.$_viewport$.$setSolidFill$($bgColor$$12_clipPath$$11$$);
  this.$_viewport$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_overview$.$addChild$(this.$_viewport$);
  (0,D.$DvtAgent$isTouchDevice$$)() ? (this.$_overview$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$_mouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this)) : (this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$_mouseDown$, D.$JSCompiler_alias_FALSE$$, 
  this), this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$_mouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$_mouseUp$, D.$JSCompiler_alias_FALSE$$, this), this.$_overview$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$_mouseOut$, D.$JSCompiler_alias_FALSE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_isDisclosed$");
D.$JSCompiler_prototypeAlias$$.$setDisclosed$ = (0,D.$JSCompiler_set$$)("$_isDisclosed$");
D.$JSCompiler_prototypeAlias$$.$getContentDimensions$ = function $$JSCompiler_prototypeAlias$$$$getContentDimensions$$() {
  return new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_ww$, this.$_hh$)
};
D.$JSCompiler_StaticMethods_setViewportDimensions$$ = function $$JSCompiler_StaticMethods_setViewportDimensions$$$($JSCompiler_StaticMethods_setViewportDimensions$self$$, $dim$$90_vx$$, $animator$$132$$) {
  var $topLeft$$5_vh$$ = (0,D.$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$)($JSCompiler_StaticMethods_setViewportDimensions$self$$, $dim$$90_vx$$.x, $dim$$90_vx$$.y, $animator$$132$$), $bottomRight$$5$$ = (0,D.$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$)($JSCompiler_StaticMethods_setViewportDimensions$self$$, $dim$$90_vx$$.x + $dim$$90_vx$$.$w$, $dim$$90_vx$$.y + $dim$$90_vx$$.$h$, $animator$$132$$);
  $dim$$90_vx$$ = $topLeft$$5_vh$$.x;
  var $vy$$ = $topLeft$$5_vh$$.y, $vw$$ = $bottomRight$$5$$.x - $topLeft$$5_vh$$.x, $topLeft$$5_vh$$ = $bottomRight$$5$$.y - $topLeft$$5_vh$$.y;
  $animator$$132$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$132$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$getX$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setX$, $dim$$90_vx$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$132$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$getY$, 
  $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setY$, $vy$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$132$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.getWidth, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setWidth$, $vw$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$132$$, "typeNumber", $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$, 
  $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.getHeight, $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setHeight$, $topLeft$$5_vh$$)) : ($JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setX$($dim$$90_vx$$), $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setY$($vy$$), $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setWidth$($vw$$), $JSCompiler_StaticMethods_setViewportDimensions$self$$.$_viewport$.$setHeight$($topLeft$$5_vh$$))
};
D.$JSCompiler_StaticMethods_getViewportDimensions$$ = function $$JSCompiler_StaticMethods_getViewportDimensions$$$($JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$) {
  var $topLeft$$6$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.$_viewport$.$getX$(), $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.$_viewport$.$getY$());
  $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.$_viewport$.$getX$() + $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.$_viewport$.getWidth(), $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.$_viewport$.$getY$() + $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.$_viewport$.getHeight());
  return new D.$DvtRectangle$$($topLeft$$6$$.x, $topLeft$$6$$.y, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.x - $topLeft$$6$$.x, $JSCompiler_StaticMethods_getViewportDimensions$self_bottomRight$$6$$.y - $topLeft$$6$$.y)
};
D.$JSCompiler_prototypeAlias$$ = D.DvtOverviewWindow.prototype;
D.$JSCompiler_prototypeAlias$$.$_mouseDown$ = function $$JSCompiler_prototypeAlias$$$$_mouseDown$$($evt$$77_viewportEvent$$) {
  if(!this.$_md$ && this.$_panEnable$) {
    this.$_md$ = D.$JSCompiler_alias_TRUE$$;
    var $offset$$36$$ = this.$_getRelativePosition$($evt$$77_viewportEvent$$);
    $evt$$77_viewportEvent$$ = new D.$ViewportChangeEvent$$((0,D.$JSCompiler_StaticMethods_getViewportDimensions$$)(this), (0,D.$JSCompiler_StaticMethods__getCenteredViewportDimensions$$)(this, $offset$$36$$), $evt$$77_viewportEvent$$);
    this.$FireListener$($evt$$77_viewportEvent$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_mouseMove$ = function $$JSCompiler_prototypeAlias$$$$_mouseMove$$($evt$$78_viewportEvent$$1$$) {
  if(this.$_md$ && this.$_panEnable$) {
    var $offset$$37$$ = this.$_getRelativePosition$($evt$$78_viewportEvent$$1$$);
    $evt$$78_viewportEvent$$1$$ = new D.$ViewportChangeEvent$$((0,D.$JSCompiler_StaticMethods_getViewportDimensions$$)(this), (0,D.$JSCompiler_StaticMethods__getCenteredViewportDimensions$$)(this, $offset$$37$$), $evt$$78_viewportEvent$$1$$);
    this.$FireListener$($evt$$78_viewportEvent$$1$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_mouseUp$ = function $$JSCompiler_prototypeAlias$$$$_mouseUp$$() {
  this.$_md$ && this.$_panEnable$ && (this.$_md$ = D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$_mouseOut$ = function $$JSCompiler_prototypeAlias$$$$_mouseOut$$() {
  this.$_mouseUp$()
};
D.$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($evt$$81_touches$$12$$) {
  var $pageX$$16$$, $pageY$$16$$;
  (0,D.$DvtAgent$isTouchDevice$$)() ? ($evt$$81_touches$$12$$ = $evt$$81_touches$$12$$.touches, 0 < $evt$$81_touches$$12$$.length && ($pageX$$16$$ = $evt$$81_touches$$12$$[0].pageX, $pageY$$16$$ = $evt$$81_touches$$12$$[0].pageY)) : ($pageX$$16$$ = $evt$$81_touches$$12$$.pageX, $pageY$$16$$ = $evt$$81_touches$$12$$.pageY);
  return(0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $pageX$$16$$, $pageY$$16$$)
};
D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$ = function $$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$$($JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$, $vx$$1$$, $vy$$1$$) {
  var $tx$$28$$ = 0, $ty$$29$$ = 0, $sx$$18$$ = 1, $sy$$18$$ = 1;
  $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$ && ($tx$$28$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getTranslateX$(), $ty$$29$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getTranslateY$(), $sx$$18$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getScaleX$(), $sy$$18$$ = $JSCompiler_StaticMethods_TransformFromViewportToContentCoords$self$$.$_content$.$getScaleY$());
  return new D.$DvtPoint$$(($vx$$1$$ - $tx$$28$$) / $sx$$18$$, ($vy$$1$$ - $ty$$29$$) / $sy$$18$$)
};
D.$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$ = function $$JSCompiler_StaticMethods_TransformFromContentToViewportCoords$$$($JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$, $cx$$47$$, $cy$$48$$, $animator$$133$$) {
  var $tx$$29$$ = 0, $ty$$30$$ = 0, $sx$$19$$ = 1, $sy$$19$$ = 1;
  $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$ && ($tx$$29$$ = $animator$$133$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$133$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateX$, D.$JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateX$(), $ty$$30$$ = 
  $animator$$133$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$133$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateY$, D.$JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getTranslateY$(), $sx$$19$$ = $animator$$133$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$133$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, 
  $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleX$, D.$JSCompiler_alias_TRUE$$) : $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleX$(), $sy$$19$$ = $animator$$133$$ ? (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$133$$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$, $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleY$, D.$JSCompiler_alias_TRUE$$) : 
  $JSCompiler_StaticMethods_TransformFromContentToViewportCoords$self$$.$_content$.$getScaleY$());
  return new D.$DvtPoint$$($cx$$47$$ * $sx$$19$$ + $tx$$29$$, $cy$$48$$ * $sy$$19$$ + $ty$$30$$)
};
D.DvtOverviewWindow.prototype.$getSkinStyle$ = (0,D.$JSCompiler_get$$)("$_skinStyle$");
D.DvtOverviewWindow.prototype.$setSkinStyle$ = (0,D.$JSCompiler_set$$)("$_skinStyle$");
D.DvtOverviewWindow.prototype.$getSkinStyleAttr$ = function $DvtOverviewWindow$$$getSkinStyleAttr$$($attr$$32$$) {
  return this.$_skinStyle$ && "undefined" != this.$_skinStyle$[$attr$$32$$] ? this.$_skinStyle$[$attr$$32$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getCenteredViewportDimensions$$ = function $$JSCompiler_StaticMethods__getCenteredViewportDimensions$$$($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$, $pos$$70$$) {
  var $overviewStart_topLeft$$7$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$.$_overview$, new D.$DvtPoint$$(0, 0)), $bottomRight$$7_viewportDims$$ = $JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$.$_viewport$.$getDimensions$(), $centeredViewportX$$ = $pos$$70$$.x - $overviewStart_topLeft$$7$$.x - $bottomRight$$7_viewportDims$$.$w$ / 2, $centeredViewportY$$ = $pos$$70$$.y - $overviewStart_topLeft$$7$$.y - $bottomRight$$7_viewportDims$$.$h$ / 
  2, $overviewStart_topLeft$$7$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$, $centeredViewportX$$, $centeredViewportY$$), $bottomRight$$7_viewportDims$$ = (0,D.$JSCompiler_StaticMethods_TransformFromViewportToContentCoords$$)($JSCompiler_StaticMethods__getCenteredViewportDimensions$self$$, $centeredViewportX$$ + $bottomRight$$7_viewportDims$$.$w$, $centeredViewportY$$ + $bottomRight$$7_viewportDims$$.$h$);
  return new D.$DvtRectangle$$($overviewStart_topLeft$$7$$.x, $overviewStart_topLeft$$7$$.y, $bottomRight$$7_viewportDims$$.x - $overviewStart_topLeft$$7$$.x, $bottomRight$$7_viewportDims$$.y - $overviewStart_topLeft$$7$$.y)
};
D.DvtOverviewWindow.prototype.$SetViewportRectangle$ = function $DvtOverviewWindow$$$SetViewportRectangle$$($rect$$48$$) {
  this.$_viewport$.$setX$($rect$$48$$.x);
  this.$_viewport$.$setY$($rect$$48$$.y);
  this.$_viewport$.$setWidth$($rect$$48$$.$w$);
  this.$_viewport$.$setHeight$($rect$$48$$.$h$)
};
D.DvtOverviewWindow.prototype.$GetViewportRectangle$ = function $DvtOverviewWindow$$$GetViewportRectangle$$() {
  return new D.$DvtRectangle$$(this.$_viewport$.$getX$(), this.$_viewport$.$getY$(), this.$_viewport$.getWidth(), this.$_viewport$.getHeight())
};
D.DvtOverviewWindow.prototype.$getDimensions$ = function $DvtOverviewWindow$$$getDimensions$$($targetCoordinateSpace$$46$$) {
  var $bounds$$140$$ = new D.$DvtRectangle$$(0, 0, this.$_ww$, this.$_hh$);
  return!$targetCoordinateSpace$$46$$ || $targetCoordinateSpace$$46$$ === this ? $bounds$$140$$ : (0,D.$JSCompiler_StaticMethods_ConvertCoordSpaceRect$$)(this, $bounds$$140$$, $targetCoordinateSpace$$46$$)
};
D.DvtOverviewWindow.prototype.$getDimensionsWithStroke$ = function $DvtOverviewWindow$$$getDimensionsWithStroke$$($targetCoordinateSpace$$47$$) {
  return this.$getDimensions$($targetCoordinateSpace$$47$$)
};
D.$DvtSubcomponentBundle$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtSubcomponentBundle$$, D.$DvtUtilBundle$$, "DvtSubcomponentBundle");
D.$DvtSubcomponentBundle$$._defaults = {CONTROL_PANEL:"Control Panel", CONTROL_PANEL_ZOOMANDCENTER:"Zoom and Center", CONTROL_PANEL_PAN:"Pan", CONTROL_PANEL_LAYOUT:"Layout", CONTROL_PANEL_LAYOUT_VERT_TOP:"Vertical, Top Down", CONTROL_PANEL_LAYOUT_VERT_BOTTOM:"Vertical, Bottom Up", CONTROL_PANEL_LAYOUT_HORIZ_LEFT:"Horizontal, Left-to-Right", CONTROL_PANEL_LAYOUT_HORIZ_RIGHT:"Horizontal, Right-to-Left", CONTROL_PANEL_LAYOUT_RADIAL:"Radial", CONTROL_PANEL_LAYOUT_TREE:"Tree", CONTROL_PANEL_LAYOUT_CIRCLE:"Circle", 
CONTROL_PANEL_SYNC:"View", CONTROL_PANEL_ZOOMTOFIT:"Zoom to Fit", CONTROL_PANEL_ZOOMIN:"Zoom In", CONTROL_PANEL_ZOOMOUT:"Zoom Out", CONTROL_PANEL_RESET:"Reset Map", CONTROL_PANEL_DRILLUP:"Drill Up", CONTROL_PANEL_DRILLDOWN:"Drill Down", LEGEND:"Legend", OVERVIEW:"Overview", PALETTE:"Palette", SEARCH:"Search", SEARCH_TEXT:"Search", SEARCH_TEXT_ALTA:"Find", SEARCH_RESULTS:"Search Results [{0}]", SEARCH_RESULTS_ALTA:"{0} Results", SEARCH_RESULTS_CLOSE:"Close", SEARCH_RESULTS_NO_DATA:"No results to display"};
D.$DvtSubcomponentBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtSubcomponentBundle$$$$$GetDefaultStringForKey$$($key$$54$$) {
  var $defaultStr$$3$$ = D.$DvtSubcomponentBundle$$.$superclass$.$GetDefaultStringForKey$.call(this, $key$$54$$);
  return $defaultStr$$3$$ ? $defaultStr$$3$$ : D.$DvtSubcomponentBundle$$._defaults[$key$$54$$]
};
D.$DvtSubcomponentBundle$$.prototype.$GetBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtSubcomponentBundle");
});