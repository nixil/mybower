define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtAxis$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtAxis", D.$DvtAxis$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAxis$$, D.$DvtBaseComponent$$, "DvtAxis");
D.$DvtAxis$$.newInstance = function $$DvtAxis$$$newInstance$($context$$475$$, $callback$$106$$, $callbackObj$$76$$) {
  var $axis$$29$$ = new D.$DvtAxis$$;
  $axis$$29$$.Init($context$$475$$, $callback$$106$$, $callbackObj$$76$$);
  return $axis$$29$$
};
D.$DvtAxis$getDefaults$$ = function $$DvtAxis$getDefaults$$$($skin$$8$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtAxisDefaults$$, $skin$$8$$)
};
D.$DvtAxis$$.getDefaults = D.$DvtAxis$getDefaults$$;
D.$DvtAxis$$.prototype.Init = function $$DvtAxis$$$$Init$($context$$476$$, $callback$$107$$, $callbackObj$$77$$) {
  D.$DvtAxis$$.$superclass$.Init.call(this, $context$$476$$, $callback$$107$$, $callbackObj$$77$$);
  this.$Defaults$ = new D.$DvtAxisDefaults$$;
  this.$_eventHandler$ = new D.$DvtAxisEventManager$$(this);
  this.$_eventHandler$.$addListeners$(this);
  this.$_labelTruncationNeeded$ = D.$JSCompiler_alias_TRUE$$;
  this.$_bounds$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtAxis$$.prototype.$SetOptions$ = function $$DvtAxis$$$$$SetOptions$$($options$$230$$) {
  $options$$230$$ ? this.$Options$ = this.$Defaults$.$calcOptions$($options$$230$$) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtAxis$$.prototype.$getPreferredSize$ = function $$DvtAxis$$$$$getPreferredSize$$($dims$$46_options$$231$$, $maxWidth$$25$$, $maxHeight$$17$$) {
  this.$SetOptions$($dims$$46_options$$231$$);
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_TRUE$$;
  this.$render$(D.$JSCompiler_alias_NULL$$, $maxWidth$$25$$, $maxHeight$$17$$);
  $dims$$46_options$$231$$ = this.$getDimensions$();
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_FALSE$$;
  this.$removeChildren$();
  var $extraWidth_position$$31$$ = this.$__getOptions$().position;
  if("top" == $extraWidth_position$$31$$ || "bottom" == $extraWidth_position$$31$$) {
    return $dims$$46_options$$231$$.$h$ <= $maxHeight$$17$$ && (this.$_labelTruncationNeeded$ = D.$JSCompiler_alias_FALSE$$), new D.$DvtDimension$$($maxWidth$$25$$, window.Math.min($dims$$46_options$$231$$.$h$, $maxHeight$$17$$))
  }
  $extraWidth_position$$31$$ = 0 < $dims$$46_options$$231$$.$w$ ? window.Math.max(1, 0.1 * $dims$$46_options$$231$$.$w$) : 0;
  $dims$$46_options$$231$$.$w$ + $extraWidth_position$$31$$ <= $maxWidth$$25$$ && (this.$_labelTruncationNeeded$ = D.$JSCompiler_alias_FALSE$$);
  return new D.$DvtDimension$$(window.Math.min($dims$$46_options$$231$$.$w$ + $extraWidth_position$$31$$, $maxWidth$$25$$), $maxHeight$$17$$)
};
D.$DvtAxis$$.prototype.$render$ = function $$DvtAxis$$$$$render$$($options$$232$$, $width$$130$$, $height$$111$$, $x$$224$$, $y$$196$$) {
  this.$SetOptions$($options$$232$$);
  this.$Width$ = $width$$130$$;
  this.$Height$ = $height$$111$$;
  this.$removeChildren$();
  $x$$224$$ || ($x$$224$$ = 0);
  $y$$196$$ || ($y$$196$$ = 0);
  D.$DvtAxisRenderer$$.$render$(this, new D.$DvtRectangle$$($x$$224$$, $y$$196$$, $width$$130$$, $height$$111$$))
};
D.$DvtAxis$$.prototype.render = D.$DvtAxis$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxis$$.prototype;
D.$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$499$$, $source$$24$$) {
  this === $source$$24$$ && this.$__dispatchEvent$($event$$499$$)
};
D.$JSCompiler_prototypeAlias$$.$__getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$Width$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$Height$");
D.$JSCompiler_prototypeAlias$$.$destroy$ = function $$JSCompiler_prototypeAlias$$$$destroy$$() {
  this.$_eventHandler$ && (this.$_eventHandler$.$removeListeners$(this), this.$_eventHandler$.$destroy$(), this.$_eventHandler$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtAxis$$.$superclass$.$destroy$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$__setBounds$ = (0,D.$JSCompiler_set$$)("$_bounds$");
D.$JSCompiler_prototypeAlias$$.$getAutomation$ = function $$JSCompiler_prototypeAlias$$$$getAutomation$$() {
  return new D.$DvtAxisAutomation$$(this)
};
D.$DvtAxis$$.prototype.getAutomation = D.$DvtAxis$$.prototype.$getAutomation$;
D.$DvtAxisConstants$$ = {};
(0,D.$goog$exportSymbol$$)("DvtAxisConstants", D.$DvtAxisConstants$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAxisConstants$$, D.$DvtObj$$, "DvtAxisConstants");
D.$DvtAxisConstants$$.$TICK_LABEL$ = "tickLabel";
D.$DvtAxisConstants$$.TICK_LABEL = D.$DvtAxisConstants$$.$TICK_LABEL$;
D.$DvtAxisConstants$$.$TITLE$ = "title";
D.$DvtAxisConstants$$.TITLE = D.$DvtAxisConstants$$.$TITLE$;
D.$DvtAbstractAxisValueFormatter$$ = (0,D.$JSCompiler_set$$)("$_bundle$");
D.$DvtObj$$.$createSubclass$(D.$DvtAbstractAxisValueFormatter$$, D.$DvtObj$$, "DvtAbstractAxisValueFormatter");
D.$DvtAbstractAxisValueFormatter$$.prototype.$format$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtAxisAutomation$$ = function $$DvtAxisAutomation$$$($dvtComponent$$5$$) {
  this.$_axis$ = $dvtComponent$$5$$;
  this.$_options$ = this.$_axis$.$__getOptions$();
  this.$_axisInfo$ = this.$_axis$.$Info$
};
(0,D.$goog$exportSymbol$$)("DvtAxisAutomation", D.$DvtAxisAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAxisAutomation$$, D.$DvtAutomation$$, "DvtAxisAutomation");
D.$DvtAxisAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtAxisAutomation$$$$$GetSubIdForDomElement$$($displayable$$32_group$$26_logicalObj$$9$$) {
  if(($displayable$$32_group$$26_logicalObj$$9$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_axis$.$__getEventManager$(), $displayable$$32_group$$26_logicalObj$$9$$)) && $displayable$$32_group$$26_logicalObj$$9$$ instanceof D.$DvtSimpleObjPeer$$ && this.$_options$.groups) {
    $displayable$$32_group$$26_logicalObj$$9$$ = $displayable$$32_group$$26_logicalObj$$9$$.$getParams$().id;
    for(var $g$$3$$ = 0;$g$$3$$ < this.$_options$.groups.length;$g$$3$$++) {
      if(this.$_options$.groups[$g$$3$$] == $displayable$$32_group$$26_logicalObj$$9$$) {
        return"item[" + $g$$3$$ + "]"
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtAxisAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtAxisAutomation$$$$$getDomElementForSubId$$($groupIndex$$49_subId$$11$$) {
  if(this.$_axisInfo$ instanceof D.$DvtGroupAxisInfo$$) {
    var $openParen$$3$$ = $groupIndex$$49_subId$$11$$.indexOf("["), $closeParen$$3$$ = $groupIndex$$49_subId$$11$$.indexOf("]");
    if(0 < $openParen$$3$$ && 0 < $closeParen$$3$$) {
      return $groupIndex$$49_subId$$11$$ = $groupIndex$$49_subId$$11$$.substring($openParen$$3$$ + 1, $closeParen$$3$$), this.$_axisInfo$.$getLabels$(this.$_axis$.$_context$)[$groupIndex$$49_subId$$11$$].$getElem$()
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtAxisAutomation$$.prototype.getDomElementForSubId = D.$DvtAxisAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtAxisDefaults$$ = function $$DvtAxisDefaults$$$() {
  this.Init({skyros:D.$DvtAxisDefaults$VERSION_1$$, alta:D.$DvtAxisDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtAxisDefaults");
D.$DvtAxisDefaults$SKIN_ALTA$$ = {axisLine:{lineColor:"#9E9E9E"}, majorTick:{lineColor:"rgba(196,206,215,0.4)"}, minorTick:{lineColor:"rgba(196,206,215,0.2)"}, tickLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, titleStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;")};
D.$DvtAxisDefaults$VERSION_1$$ = {position:D.$JSCompiler_alias_NULL$$, baselineScaling:"zero", axisLine:{lineColor:"#8A8DAC", lineWidth:1, rendered:"on"}, majorTick:{lineColor:"rgba(138,141,172,0.4)", lineWidth:1, rendered:"auto", lineStyle:"solid"}, minorTick:{lineColor:"rgba(138,141,172,0.20)", lineWidth:1, rendered:"off", lineStyle:"solid"}, tickLabel:{scaling:"auto", style:new D.$DvtCSSStyle$$("font-size: 11px; color: #333333;"), rotation:"auto", rendered:"on"}, titleStyle:new D.$DvtCSSStyle$$("font-size: 11px; color: #737373;"), 
startGroupOffset:0, endGroupOffset:0, layout:{gapRatio:1, titleGap:4}, _useBaselineColor:D.$JSCompiler_alias_FALSE$$, isLayout:D.$JSCompiler_alias_FALSE$$};
D.$DvtAxisEventManager$$ = function $$DvtAxisEventManager$$$($axis$$26$$) {
  this.Init($axis$$26$$.$_context$, $axis$$26$$.$processEvent$, $axis$$26$$);
  this.$_axis$ = $axis$$26$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisEventManager$$, D.$DvtEventManager$$, "DvtAxisEventManager");
D.$DvtAxisEventManager$$.prototype.$FireUIEvent$ = function $$DvtAxisEventManager$$$$$FireUIEvent$$($type$$116$$, $logicalObj$$10$$) {
  $logicalObj$$10$$ instanceof D.$DvtSimpleObjPeer$$ && $logicalObj$$10$$.$getParams$() != D.$JSCompiler_alias_NULL$$ && this.$FireEvent$(new D.$DvtComponentUIEvent$$($type$$116$$, $logicalObj$$10$$.$getParams$()), this.$_axis$)
};
D.$DvtAxisRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtAxisRenderer$$, D.$DvtObj$$, "DvtAxisRenderer");
D.$DvtAxisRenderer$$.$_RADIAL_LABEL_GAP$ = 5;
D.$DvtAxisRenderer$$.$render$ = function $$DvtAxisRenderer$$$$render$$($axis$$20$$, $availSpace$$59$$) {
  var $options$$136$$ = $axis$$20$$.$__getOptions$(), $axisInfo$$1$$ = (0,D.$DvtAxisInfo$newInstance$$)($axis$$20$$.$_context$, $options$$136$$, $availSpace$$59$$);
  $axis$$20$$.$Info$ = $axisInfo$$1$$;
  "off" == $options$$136$$.rendered || (0 >= $availSpace$$59$$.$w$ || 0 >= $availSpace$$59$$.$h$) || ($axis$$20$$.$__setBounds$($availSpace$$59$$.clone()), D.$DvtAxisRenderer$$.$_renderTitle$($axis$$20$$, $axisInfo$$1$$, $availSpace$$59$$), D.$DvtAxisRenderer$$.$_renderLabels$($axis$$20$$, $axisInfo$$1$$, $availSpace$$59$$))
};
D.$DvtAxisRenderer$$.$_renderTitle$ = function $$DvtAxisRenderer$$$$_renderTitle$$($axis$$21_title$$8$$, $axisInfo$$2_position$$21$$, $availSpace$$60$$) {
  var $gap$$10_options$$137$$ = $axis$$21_title$$8$$.$__getOptions$();
  if($gap$$10_options$$137$$.title && ($axisInfo$$2_position$$21$$ = $gap$$10_options$$137$$.position, !("radial" == $axisInfo$$2_position$$21$$ || "tangential" == $axisInfo$$2_position$$21$$))) {
    if($gap$$10_options$$137$$.isLayout && "bottom" == $axisInfo$$2_position$$21$$ && ($axisInfo$$2_position$$21$$ = "top"), $axis$$21_title$$8$$ = "top" == $axisInfo$$2_position$$21$$ || "bottom" == $axisInfo$$2_position$$21$$ ? D.$DvtAxisRenderer$$.$_createText$($axis$$21_title$$8$$.$__getEventManager$(), $axis$$21_title$$8$$, $gap$$10_options$$137$$.title, $gap$$10_options$$137$$.titleStyle, $availSpace$$60$$.$w$, $availSpace$$60$$.$h$) : D.$DvtAxisRenderer$$.$_createText$($axis$$21_title$$8$$.$__getEventManager$(), 
    $axis$$21_title$$8$$, $gap$$10_options$$137$$.title, $gap$$10_options$$137$$.titleStyle, $availSpace$$60$$.$h$, $availSpace$$60$$.$w$)) {
      var $titleDims$$1$$ = $axis$$21_title$$8$$.$measureDimensions$(), $gap$$10_options$$137$$ = window.Math.ceil($gap$$10_options$$137$$.layout.titleGap * $gap$$10_options$$137$$.layout.gapRatio);
      "top" == $axisInfo$$2_position$$21$$ ? ($axis$$21_title$$8$$.$setX$($availSpace$$60$$.x + $availSpace$$60$$.$w$ / 2 - $titleDims$$1$$.$w$ / 2), $axis$$21_title$$8$$.$setY$($availSpace$$60$$.y), $availSpace$$60$$.y += $titleDims$$1$$.$h$ + $gap$$10_options$$137$$, $availSpace$$60$$.$h$ -= $titleDims$$1$$.$h$ + $gap$$10_options$$137$$) : "bottom" == $axisInfo$$2_position$$21$$ ? ($axis$$21_title$$8$$.$setX$($availSpace$$60$$.x + $availSpace$$60$$.$w$ / 2 - $titleDims$$1$$.$w$ / 2), $axis$$21_title$$8$$.$setY$($availSpace$$60$$.y + 
      $availSpace$$60$$.$h$ - $titleDims$$1$$.$h$), $availSpace$$60$$.$h$ -= $titleDims$$1$$.$h$ + $gap$$10_options$$137$$) : "left" == $axisInfo$$2_position$$21$$ ? ($axis$$21_title$$8$$.$setRotation$(3 * window.Math.PI / 2), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($axis$$21_title$$8$$, $availSpace$$60$$.x, $availSpace$$60$$.y + $availSpace$$60$$.$h$ / 2 + $titleDims$$1$$.$w$ / 2), $availSpace$$60$$.x += $titleDims$$1$$.$h$ + $gap$$10_options$$137$$, $availSpace$$60$$.$w$ -= $titleDims$$1$$.$h$ + 
      $gap$$10_options$$137$$) : "right" == $axisInfo$$2_position$$21$$ && ($axis$$21_title$$8$$.$setRotation$(3 * window.Math.PI / 2), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($axis$$21_title$$8$$, $availSpace$$60$$.x + $availSpace$$60$$.$w$ - $titleDims$$1$$.$h$, $availSpace$$60$$.y + $availSpace$$60$$.$h$ / 2 + $titleDims$$1$$.$w$ / 2), $availSpace$$60$$.$w$ -= $titleDims$$1$$.$h$ + $gap$$10_options$$137$$)
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabels$ = function $$DvtAxisRenderer$$$$_renderLabels$$($axis$$22$$, $axisInfo$$3$$, $availSpace$$61$$) {
  var $options$$138_position$$22$$ = $axis$$22$$.$__getOptions$();
  "on" == $options$$138_position$$22$$.tickLabel.rendered && ($options$$138_position$$22$$ = $options$$138_position$$22$$.position, "top" == $options$$138_position$$22$$ || "bottom" == $options$$138_position$$22$$ ? D.$DvtAxisRenderer$$.$_renderLabelsHoriz$($axis$$22$$, $axisInfo$$3$$, $availSpace$$61$$) : "tangential" == $options$$138_position$$22$$ ? D.$DvtAxisRenderer$$.$_renderLabelsTangent$($axis$$22$$, $axisInfo$$3$$, $availSpace$$61$$) : D.$DvtAxisRenderer$$.$_renderLabelsVert$($axis$$22$$, 
  $axisInfo$$3$$, $availSpace$$61$$))
};
D.$DvtAxisRenderer$$.$_renderLabelsHoriz$ = function $$DvtAxisRenderer$$$$_renderLabelsHoriz$$($axis$$23$$, $axisInfo$$4_lv2Labels$$, $availSpace$$62$$) {
  for(var $labels$$2$$ = $axisInfo$$4_lv2Labels$$.$getLabels$($axis$$23$$.$_context$), $isLayout_offset$$19$$ = $axis$$23$$.$__getOptions$().isLayout, $maxLv1Height$$ = 0, $isRTL$$4$$ = (0,D.$DvtAgent$isRightToLeft$$)($axis$$23$$.$_context$), $i$$346$$ = 0;$i$$346$$ < $labels$$2$$.length;$i$$346$$++) {
    var $label$$33$$ = $labels$$2$$[$i$$346$$];
    if($label$$33$$ != D.$JSCompiler_alias_NULL$$) {
      if($axisInfo$$4_lv2Labels$$.$isLabelRotated$()) {
        !$isLayout_offset$$19$$ && $axis$$23$$.$_labelTruncationNeeded$ && ($label$$33$$ = D.$DvtTextUtils$$.$fitText$($label$$33$$, $availSpace$$62$$.$h$, $availSpace$$62$$.$w$, $axis$$23$$) ? $label$$33$$ : D.$JSCompiler_alias_NULL$$);
        if(!$label$$33$$) {
          continue
        }
        $isRTL$$4$$ ? $label$$33$$.$alignLeft$() : $label$$33$$.$alignRight$();
        $label$$33$$.$setTranslateY$($availSpace$$62$$.y)
      }else {
        if(D.$DvtTextUtils$$.$guessTextDimensions$($label$$33$$).$h$ > $availSpace$$62$$.$h$) {
          continue
        }
        $label$$33$$.$alignTop$();
        $label$$33$$.$setY$($availSpace$$62$$.y)
      }
      $axis$$23$$.$__getEventManager$().$associate$($label$$33$$, new D.$DvtSimpleObjPeer$$($label$$33$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtAxisConstants$$.$TICK_LABEL$, id:$label$$33$$.$getTextString$()}));
      $axis$$23$$.$addChild$($label$$33$$);
      $maxLv1Height$$ = window.Math.max($maxLv1Height$$, D.$DvtTextUtils$$.$guessTextDimensions$($label$$33$$).$h$)
    }
  }
  $availSpace$$62$$.y += $maxLv1Height$$;
  $availSpace$$62$$.$h$ -= $maxLv1Height$$;
  $axisInfo$$4_lv2Labels$$ = $axisInfo$$4_lv2Labels$$.$getLabels$($axis$$23$$.$_context$, 1);
  $isLayout_offset$$19$$ = 0;
  if($axisInfo$$4_lv2Labels$$ != D.$JSCompiler_alias_NULL$$) {
    for($i$$346$$ = 0;$i$$346$$ < $axisInfo$$4_lv2Labels$$.length;$i$$346$$++) {
      $label$$33$$ = $axisInfo$$4_lv2Labels$$[$i$$346$$], $label$$33$$ != D.$JSCompiler_alias_NULL$$ && !(D.$DvtTextUtils$$.$guessTextDimensions$($label$$33$$).$h$ > $availSpace$$62$$.$h$) && ($axis$$23$$.$__getEventManager$().$associate$($label$$33$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtAxisConstants$$.$TICK_LABEL$, id:$label$$33$$.$getTextString$()})), $labels$$2$$[$i$$346$$] != D.$JSCompiler_alias_NULL$$ && ($isLayout_offset$$19$$ = 
      $labels$$2$$[$i$$346$$].$measureDimensions$().$w$ / 2), $isRTL$$4$$ ? $label$$33$$.$setX$($label$$33$$.$getX$() + $isLayout_offset$$19$$) : $label$$33$$.$setX$($label$$33$$.$getX$() - $isLayout_offset$$19$$), $label$$33$$.$alignTop$(), $label$$33$$.$setY$($availSpace$$62$$.y), $axis$$23$$.$addChild$($label$$33$$))
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabelsVert$ = function $$DvtAxisRenderer$$$$_renderLabelsVert$$($axis$$24$$, $axisInfo$$5$$, $availSpace$$63$$) {
  var $i$$347_isRTL$$5_options$$139$$ = $axis$$24$$.$__getOptions$(), $isLayout$$1$$ = $i$$347_isRTL$$5_options$$139$$.isLayout, $alwaysAlignRight_formatLabelVert$$ = $i$$347_isRTL$$5_options$$139$$._alwaysAlignRight, $position$$23$$ = $i$$347_isRTL$$5_options$$139$$.position, $i$$347_isRTL$$5_options$$139$$ = (0,D.$DvtAgent$isRightToLeft$$)($axis$$24$$.$_context$), $isAlignLeft$$ = "radial" == $position$$23$$ && $i$$347_isRTL$$5_options$$139$$ || $isLayout$$1$$ && "left" == $position$$23$$ || !$alwaysAlignRight_formatLabelVert$$ && 
  !$isLayout$$1$$ && "right" == $position$$23$$, $labelX$$5$$;
  "radial" == $position$$23$$ ? ($labelX$$5$$ = $availSpace$$63$$.x + $availSpace$$63$$.$w$ / 2, $labelX$$5$$ += D.$DvtAxisRenderer$$.$_RADIAL_LABEL_GAP$ * ($i$$347_isRTL$$5_options$$139$$ ? 1 : -1)) : $labelX$$5$$ = $isAlignLeft$$ ? $availSpace$$63$$.x : $availSpace$$63$$.x + $availSpace$$63$$.$w$;
  for(var $alwaysAlignRight_formatLabelVert$$ = function $$alwaysAlignRight_formatLabelVert$$$($i$$347_isRTL$$5_options$$139$$) {
    !$isLayout$$1$$ && $axis$$24$$.$_labelTruncationNeeded$ && ($i$$347_isRTL$$5_options$$139$$ = D.$DvtTextUtils$$.$fitText$($i$$347_isRTL$$5_options$$139$$, $availSpace$$63$$.$w$, $availSpace$$63$$.$h$, $axis$$24$$) ? $i$$347_isRTL$$5_options$$139$$ : D.$JSCompiler_alias_NULL$$);
    if($i$$347_isRTL$$5_options$$139$$) {
      $axis$$24$$.$__getEventManager$().$associate$($i$$347_isRTL$$5_options$$139$$, new D.$DvtSimpleObjPeer$$($i$$347_isRTL$$5_options$$139$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtAxisConstants$$.$TICK_LABEL$, id:$i$$347_isRTL$$5_options$$139$$.$getTextString$()}));
      $i$$347_isRTL$$5_options$$139$$.$setX$($labelX$$5$$);
      $isAlignLeft$$ ? $i$$347_isRTL$$5_options$$139$$.$alignLeft$() : $i$$347_isRTL$$5_options$$139$$.$alignRight$();
      if("radial" == $position$$23$$) {
        var $alwaysAlignRight_formatLabelVert$$ = $i$$347_isRTL$$5_options$$139$$.$getY$();
        $i$$347_isRTL$$5_options$$139$$.$setY$($availSpace$$63$$.y + $availSpace$$63$$.$h$ / 2 - $alwaysAlignRight_formatLabelVert$$);
        var $labels$$3_lv2Labels$$1$$ = $i$$347_isRTL$$5_options$$139$$.$getDimensions$(), $label$$34$$ = 0.15 * $labels$$3_lv2Labels$$1$$.$h$, $alwaysAlignRight_formatLabelVert$$ = $alwaysAlignRight_formatLabelVert$$ + $labels$$3_lv2Labels$$1$$.$h$ / 2 > $axisInfo$$5$$.$getEndCoord$() && "circle" == $axis$$24$$.$__getOptions$().polarGridShape ? 1 : 0.3, $labels$$3_lv2Labels$$1$$ = window.DvtPathUtils.$roundedRectangle$($labels$$3_lv2Labels$$1$$.x - $label$$34$$, $labels$$3_lv2Labels$$1$$.y, $labels$$3_lv2Labels$$1$$.$w$ + 
        2 * $label$$34$$, $labels$$3_lv2Labels$$1$$.$h$, 2, 2, 2, 2), $labels$$3_lv2Labels$$1$$ = new D.$DvtPath$$($axis$$24$$.$_context$, $labels$$3_lv2Labels$$1$$);
        $labels$$3_lv2Labels$$1$$.$setSolidFill$("#FFFFFF", $alwaysAlignRight_formatLabelVert$$);
        $axis$$24$$.$addChild$($labels$$3_lv2Labels$$1$$)
      }
      $axis$$24$$.$addChild$($i$$347_isRTL$$5_options$$139$$)
    }
  }, $labels$$3_lv2Labels$$1$$ = $axisInfo$$5$$.$getLabels$($axis$$24$$.$_context$), $i$$347_isRTL$$5_options$$139$$ = 0;$i$$347_isRTL$$5_options$$139$$ < $labels$$3_lv2Labels$$1$$.length;$i$$347_isRTL$$5_options$$139$$++) {
    var $label$$34$$ = $labels$$3_lv2Labels$$1$$[$i$$347_isRTL$$5_options$$139$$];
    $label$$34$$ != D.$JSCompiler_alias_NULL$$ && $alwaysAlignRight_formatLabelVert$$($label$$34$$)
  }
  $labels$$3_lv2Labels$$1$$ = $axisInfo$$5$$.$getLabels$($axis$$24$$.$_context$, 1);
  if($labels$$3_lv2Labels$$1$$ != D.$JSCompiler_alias_NULL$$) {
    for($i$$347_isRTL$$5_options$$139$$ = 0;$i$$347_isRTL$$5_options$$139$$ < $labels$$3_lv2Labels$$1$$.length;$i$$347_isRTL$$5_options$$139$$++) {
      $label$$34$$ = $labels$$3_lv2Labels$$1$$[$i$$347_isRTL$$5_options$$139$$], $label$$34$$ != D.$JSCompiler_alias_NULL$$ && $alwaysAlignRight_formatLabelVert$$($label$$34$$)
    }
  }
};
D.$DvtAxisRenderer$$.$_renderLabelsTangent$ = function $$DvtAxisRenderer$$$$_renderLabelsTangent$$($axis$$25$$, $axisInfo$$6_labels$$4$$, $availSpace$$64$$) {
  $axisInfo$$6_labels$$4$$ = $axisInfo$$6_labels$$4$$.$getLabels$($axis$$25$$.$_context$);
  for(var $i$$348$$ = 0;$i$$348$$ < $axisInfo$$6_labels$$4$$.length;$i$$348$$++) {
    var $label$$36$$ = $axisInfo$$6_labels$$4$$[$i$$348$$];
    if($label$$36$$ != D.$JSCompiler_alias_NULL$$) {
      var $textBefore$$ = $label$$36$$.$getTextString$(), $maxWidth$$16$$ = $availSpace$$64$$.$w$ / 2 - window.Math.abs($label$$36$$.$getX$()), $maxHeight$$12$$ = $availSpace$$64$$.$h$ / 2 - window.Math.abs($label$$36$$.$getY$());
      D.$DvtTextUtils$$.$fitText$($label$$36$$, $maxWidth$$16$$, $maxHeight$$12$$, $axis$$25$$) && ($axis$$25$$.$__getEventManager$().$associate$($label$$36$$, new D.$DvtSimpleObjPeer$$($label$$36$$.$isTruncated$() ? $textBefore$$ : D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtAxisConstants$$.$TICK_LABEL$, id:$textBefore$$})), $label$$36$$.$setTranslateX$($availSpace$$64$$.x + $availSpace$$64$$.$w$ / 2), $label$$36$$.$setTranslateY$($availSpace$$64$$.y + 
      $availSpace$$64$$.$h$ / 2), $axis$$25$$.$addChild$($label$$36$$))
    }
  }
};
D.$DvtAxisRenderer$$.$_createText$ = function $$DvtAxisRenderer$$$$_createText$$($eventManager$$5$$, $container$$78$$, $text$$27_textString$$1$$, $cssStyle$$4$$, $width$$68$$, $height$$53$$) {
  var $params$$34$$ = {type:D.$DvtAxisConstants$$.$TITLE$, id:D.$JSCompiler_alias_VOID$$};
  $text$$27_textString$$1$$ = new D.$DvtOutputText$$($container$$78$$.$_context$, $text$$27_textString$$1$$, 0, 0);
  $text$$27_textString$$1$$.$setCSSStyle$($cssStyle$$4$$);
  return D.$DvtTextUtils$$.$fitText$($text$$27_textString$$1$$, $width$$68$$, $height$$53$$, $container$$78$$) ? ($eventManager$$5$$.$associate$($text$$27_textString$$1$$, new D.$DvtSimpleObjPeer$$($text$$27_textString$$1$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $params$$34$$)), $text$$27_textString$$1$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtAxisInfo$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAxisInfo$$, D.$DvtObj$$, "DvtAxisInfo");
D.$DvtAxisInfo$newInstance$$ = function $$DvtAxisInfo$newInstance$$$($context$$171$$, $options$$147$$, $availSpace$$71$$) {
  return $options$$147$$.timeAxisType && "disabled" != $options$$147$$.timeAxisType ? new D.$DvtTimeAxisInfo$$($context$$171$$, $options$$147$$, $availSpace$$71$$) : (0,window.isNaN)($options$$147$$.dataMin) && (0,window.isNaN)($options$$147$$.dataMax) ? new D.$DvtGroupAxisInfo$$($context$$171$$, $options$$147$$, $availSpace$$71$$) : new D.$DvtDataAxisInfo$$($context$$171$$, $options$$147$$, $availSpace$$71$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$172$$, $options$$148$$, $availSpace$$72$$) {
  this.$_context$ = $context$$172$$;
  this.$Position$ = $options$$148$$.position;
  this.$_radius$ = $options$$148$$._radius;
  "top" == this.$Position$ || "bottom" == this.$Position$ ? (this.$StartCoord$ = $availSpace$$72$$.x, this.$EndCoord$ = $availSpace$$72$$.x + $availSpace$$72$$.$w$) : "left" == this.$Position$ || "right" == this.$Position$ ? (this.$StartCoord$ = $availSpace$$72$$.y, this.$EndCoord$ = $availSpace$$72$$.y + $availSpace$$72$$.$h$) : "radial" == this.$Position$ ? (this.$StartCoord$ = 0, this.$EndCoord$ = this.$_radius$) : "tangential" == this.$Position$ && ((0,D.$DvtAgent$isRightToLeft$$)($context$$172$$) ? 
  (this.$StartCoord$ = 2 * window.Math.PI, this.$EndCoord$ = 0) : (this.$StartCoord$ = 0, this.$EndCoord$ = 2 * window.Math.PI));
  this.$MinViewportExtent$ = this.$DataMax$ = this.$DataMin$ = this.$GlobalMax$ = this.$GlobalMin$ = this.$MaxValue$ = this.$MinValue$ = D.$JSCompiler_alias_NULL$$;
  this.$EndOverflow$ = this.$StartOverflow$ = 0;
  $options$$148$$.leftBuffer == D.$JSCompiler_alias_NULL$$ && ($options$$148$$.leftBuffer = window.Infinity);
  $options$$148$$.rightBuffer == D.$JSCompiler_alias_NULL$$ && ($options$$148$$.rightBuffer = window.Infinity);
  this.$Options$ = $options$$148$$
};
D.$JSCompiler_prototypeAlias$$.$getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$JSCompiler_prototypeAlias$$.$getLabels$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$() {
  return[]
};
D.$JSCompiler_prototypeAlias$$.$getMinorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMinorGridLines$$() {
  return[]
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$isLabelRotated$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$CreateLabel$ = function $$JSCompiler_prototypeAlias$$$$CreateLabel$$($context$$177_text$$33$$, $label$$43$$, $coord$$29$$) {
  if("tangential" == this.$Position$) {
    var $vTol$$ = 16 / 180 * window.Math.PI, $hTol$$ = 1 / 180 * window.Math.PI, $offset$$20$$ = 0.5 * (0,window.parseInt)(this.$Options$.tickLabel.style.$getStyle$("font-size")), $dist$$1$$ = this.$_radius$ + $offset$$20$$;
    if($coord$$29$$ < $hTol$$ || $coord$$29$$ > 2 * window.Math.PI - $hTol$$) {
      $dist$$1$$ += $offset$$20$$
    }
    $context$$177_text$$33$$ = new D.$DvtOutputText$$($context$$177_text$$33$$, $label$$43$$, window.Math.round($dist$$1$$ * window.Math.sin($coord$$29$$)), window.Math.round(-$dist$$1$$ * window.Math.cos($coord$$29$$)));
    $coord$$29$$ < $hTol$$ || window.Math.abs($coord$$29$$ - window.Math.PI) < $hTol$$ || $coord$$29$$ > 2 * window.Math.PI - $hTol$$ ? $context$$177_text$$33$$.$alignCenter$() : $coord$$29$$ < window.Math.PI ? $context$$177_text$$33$$.$alignLeft$() : $context$$177_text$$33$$.$alignRight$();
    window.Math.abs($coord$$29$$ - window.Math.PI / 2) < $vTol$$ || window.Math.abs($coord$$29$$ - 3 * window.Math.PI / 2) < $vTol$$ ? $context$$177_text$$33$$.$alignMiddle$() : $coord$$29$$ < window.Math.PI / 2 || $coord$$29$$ > 3 * window.Math.PI / 2 ? $context$$177_text$$33$$.$alignBottom$() : $context$$177_text$$33$$.$alignTop$()
  }else {
    $context$$177_text$$33$$ = new D.$DvtOutputText$$($context$$177_text$$33$$, $label$$43$$, $coord$$29$$, $coord$$29$$), $context$$177_text$$33$$.$alignMiddle$(), $context$$177_text$$33$$.$alignCenter$()
  }
  $context$$177_text$$33$$.$setCSSStyle$(this.$Options$.tickLabel.style);
  return $context$$177_text$$33$$
};
D.$JSCompiler_StaticMethods_CreateGridLine$$ = function $$JSCompiler_StaticMethods_CreateGridLine$$$($JSCompiler_StaticMethods_CreateGridLine$self$$, $context$$178_line$$13$$, $stroke$$43$$, $coord$$30_points$$39$$) {
  var $usePixelHinting$$ = !(0,D.$DvtAgent$isTouchDevice$$)() || 1 < (0,D.$DvtAgent$getDevicePixelRatio$$)();
  "radial" == $JSCompiler_StaticMethods_CreateGridLine$self$$.$Position$ ? ("polygon" == $JSCompiler_StaticMethods_CreateGridLine$self$$.$Options$.polarGridShape ? ($coord$$30_points$$39$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$(0, 0, $JSCompiler_StaticMethods_CreateGridLine$self$$.$Options$._numGroups, $coord$$30_points$$39$$), $context$$178_line$$13$$ = new D.$DvtPolygon$$($context$$178_line$$13$$, $coord$$30_points$$39$$)) : $context$$178_line$$13$$ = new D.$DvtCircle$$($context$$178_line$$13$$, 
  0, 0, $coord$$30_points$$39$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$178_line$$13$$)) : "tangential" == $JSCompiler_StaticMethods_CreateGridLine$self$$.$Position$ ? ($context$$178_line$$13$$ = new D.$DvtLine$$($context$$178_line$$13$$, 0, 0, $JSCompiler_StaticMethods_CreateGridLine$self$$.$_radius$ * window.Math.sin($coord$$30_points$$39$$), -$JSCompiler_StaticMethods_CreateGridLine$self$$.$_radius$ * window.Math.cos($coord$$30_points$$39$$)), 0.01 > $coord$$30_points$$39$$ % 
  window.Math.PI / 2 && $usePixelHinting$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$178_line$$13$$)) : ($context$$178_line$$13$$ = new D.$DvtLine$$($context$$178_line$$13$$, $coord$$30_points$$39$$, $coord$$30_points$$39$$, $coord$$30_points$$39$$, $coord$$30_points$$39$$), $usePixelHinting$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$178_line$$13$$));
  $context$$178_line$$13$$.$setStroke$($stroke$$43$$);
  $context$$178_line$$13$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  return $context$$178_line$$13$$
};
D.$JSCompiler_StaticMethods_IsOverlapping$$ = function $$JSCompiler_StaticMethods_IsOverlapping$$$($JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$11$$, $labelDims$$6$$, $skippedLabels$$1$$) {
  if(!$labelDims$$6$$ || 0 >= $labelDims$$6$$.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $fontSize$$4_isVert$$3$$ = (0,window.parseInt)($JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$11$$.$Options$.tickLabel.style.$getStyle$("font-size")), $gap$$14_gapHoriz$$ = $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$11$$ instanceof D.$DvtGroupAxisInfo$$ ? 0.3 * $fontSize$$4_isVert$$3$$ : 1 * $fontSize$$4_isVert$$3$$, $gapVert_pointB1$$2$$ = $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$11$$ instanceof D.$DvtGroupAxisInfo$$ ? 0.1 * $fontSize$$4_isVert$$3$$ : 0.35 * $fontSize$$4_isVert$$3$$, 
  $gap$$14_gapHoriz$$ = ($fontSize$$4_isVert$$3$$ = "left" == $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$11$$.$Position$ || "right" == $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$11$$.$Position$ || "radial" == $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$11$$.$Position$) || $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$11$$.$isLabelRotated$() ? $gapVert_pointB1$$2$$ : $gap$$14_gapHoriz$$;
  $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$11$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$11$$.$_context$);
  for(var $pointA1$$2$$, $pointA2$$2$$, $pointB2$$2$$, $j$$73$$ = 0;$j$$73$$ < $labelDims$$6$$.length;$j$$73$$ += $skippedLabels$$1$$ + 1) {
    if($labelDims$$6$$[$j$$73$$] != D.$JSCompiler_alias_NULL$$) {
      if($pointA1$$2$$ == D.$JSCompiler_alias_NULL$$ || $pointA2$$2$$ == D.$JSCompiler_alias_NULL$$) {
        $fontSize$$4_isVert$$3$$ ? ($pointA1$$2$$ = $labelDims$$6$$[$j$$73$$].y, $pointA2$$2$$ = $labelDims$$6$$[$j$$73$$].y + $labelDims$$6$$[$j$$73$$].$h$) : ($pointA1$$2$$ = $labelDims$$6$$[$j$$73$$].x, $pointA2$$2$$ = $labelDims$$6$$[$j$$73$$].x + $labelDims$$6$$[$j$$73$$].$w$)
      }else {
        if($fontSize$$4_isVert$$3$$) {
          if($gapVert_pointB1$$2$$ = $labelDims$$6$$[$j$$73$$].y, $pointB2$$2$$ = $labelDims$$6$$[$j$$73$$].y + $labelDims$$6$$[$j$$73$$].$h$, $gapVert_pointB1$$2$$ >= $pointA1$$2$$ && $gapVert_pointB1$$2$$ - $gap$$14_gapHoriz$$ < $pointA2$$2$$ || $gapVert_pointB1$$2$$ < $pointA1$$2$$ && $pointB2$$2$$ + $gap$$14_gapHoriz$$ > $pointA1$$2$$) {
            return D.$JSCompiler_alias_TRUE$$
          }
        }else {
          if($gapVert_pointB1$$2$$ = $labelDims$$6$$[$j$$73$$].x, $pointB2$$2$$ = $labelDims$$6$$[$j$$73$$].x + $labelDims$$6$$[$j$$73$$].$w$, !$JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$11$$ && $gapVert_pointB1$$2$$ - $gap$$14_gapHoriz$$ < $pointA2$$2$$ || $JSCompiler_StaticMethods_IsOverlapping$self_isRTL$$11$$ && $pointB2$$2$$ + $gap$$14_gapHoriz$$ > $pointA1$$2$$) {
            return D.$JSCompiler_alias_TRUE$$
          }
        }
        $pointA1$$2$$ = $gapVert_pointB1$$2$$;
        $pointA2$$2$$ = $pointB2$$2$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_SkipLabels$$ = function $$JSCompiler_StaticMethods_SkipLabels$$$($JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$, $labels$$12$$, $j$$74_labelDims$$7$$) {
  for(var $skippedLabels$$2$$ = 0, $bOverlaps$$1$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)($JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$, $j$$74_labelDims$$7$$, $skippedLabels$$2$$);$bOverlaps$$1$$;) {
    $skippedLabels$$2$$++, $bOverlaps$$1$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)($JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$, $j$$74_labelDims$$7$$, $skippedLabels$$2$$)
  }
  if(0 < $skippedLabels$$2$$) {
    $JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$ = [];
    for($j$$74_labelDims$$7$$ = 0;$j$$74_labelDims$$7$$ < $labels$$12$$.length;$j$$74_labelDims$$7$$ += $skippedLabels$$2$$ + 1) {
      $JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$.push($labels$$12$$[$j$$74_labelDims$$7$$])
    }
    return $JSCompiler_StaticMethods_SkipLabels$self_renderedLabels$$
  }
  return $labels$$12$$
};
D.$JSCompiler_StaticMethods_GetLabelDims$$ = function $$JSCompiler_StaticMethods_GetLabelDims$$$($labels$$13$$, $container$$84$$) {
  for(var $labelDims$$8$$ = [], $i$$362$$ = 0;$i$$362$$ < $labels$$13$$.length;$i$$362$$++) {
    var $dims$$32_text$$34$$ = $labels$$13$$[$i$$362$$];
    $dims$$32_text$$34$$ == D.$JSCompiler_alias_NULL$$ ? $labelDims$$8$$.push(D.$JSCompiler_alias_NULL$$) : ($dims$$32_text$$34$$ = $dims$$32_text$$34$$.$measureDimensions$($container$$84$$), $labelDims$$8$$.push($dims$$32_text$$34$$))
  }
  return $labelDims$$8$$
};
D.$JSCompiler_StaticMethods_GuessLabelDims$$ = function $$JSCompiler_StaticMethods_GuessLabelDims$$$($JSCompiler_StaticMethods_GuessLabelDims$self$$, $labels$$14$$, $container$$85$$, $fudgeFactor$$) {
  var $labelDims$$9$$ = [];
  "undefined" == typeof $fudgeFactor$$ && ($fudgeFactor$$ = 1);
  for(var $i$$363$$ = 0;$i$$363$$ < $labels$$14$$.length;$i$$363$$++) {
    var $dims$$33_text$$35$$ = $labels$$14$$[$i$$363$$];
    if($dims$$33_text$$35$$ == D.$JSCompiler_alias_NULL$$) {
      $labelDims$$9$$.push(D.$JSCompiler_alias_NULL$$)
    }else {
      $container$$85$$.$addChild$($dims$$33_text$$35$$);
      var $estH_estimatedSize$$ = D.$DvtTextUtils$$.$guessTextDimensions$($dims$$33_text$$35$$), $estW$$ = $estH_estimatedSize$$.$w$ * $fudgeFactor$$, $estH_estimatedSize$$ = $estH_estimatedSize$$.$h$;
      $container$$85$$.removeChild($dims$$33_text$$35$$);
      $dims$$33_text$$35$$ = $JSCompiler_StaticMethods_GuessLabelDims$self$$.$isLabelRotated$() ? new D.$DvtRectangle$$($dims$$33_text$$35$$.$getTranslateX$() - $estH_estimatedSize$$ / 2, $dims$$33_text$$35$$.$getTranslateY$() - $estW$$ / 2, $estH_estimatedSize$$, $estW$$) : new D.$DvtRectangle$$($dims$$33_text$$35$$.$getX$() - $estW$$ / 2, $dims$$33_text$$35$$.$getY$() - $estH_estimatedSize$$ / 2, $estW$$, $estH_estimatedSize$$);
      $labelDims$$9$$.push($dims$$33_text$$35$$)
    }
  }
  return $labelDims$$9$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getMajorTickCount$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$setMajorTickCount$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getMinorTickCount$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$setMinorTickCount$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getMajorIncrement$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getMinorIncrement$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getGlobalMin$ = (0,D.$JSCompiler_get$$)("$GlobalMin$");
D.$JSCompiler_prototypeAlias$$.$getGlobalMax$ = (0,D.$JSCompiler_get$$)("$GlobalMax$");
D.$JSCompiler_prototypeAlias$$.$getViewportMin$ = (0,D.$JSCompiler_get$$)("$MinValue$");
D.$JSCompiler_prototypeAlias$$.$getViewportMax$ = (0,D.$JSCompiler_get$$)("$MaxValue$");
D.$JSCompiler_prototypeAlias$$.$getDataMin$ = (0,D.$JSCompiler_get$$)("$DataMin$");
D.$JSCompiler_prototypeAlias$$.$getDataMax$ = (0,D.$JSCompiler_get$$)("$DataMax$");
D.$JSCompiler_prototypeAlias$$.$getMinimumExtent$ = (0,D.$JSCompiler_returnArg$$)(0);
D.$JSCompiler_prototypeAlias$$.$getEndCoord$ = (0,D.$JSCompiler_get$$)("$EndCoord$");
D.$JSCompiler_prototypeAlias$$.$getStartOverflow$ = (0,D.$JSCompiler_get$$)("$StartOverflow$");
D.$JSCompiler_prototypeAlias$$.$getEndOverflow$ = (0,D.$JSCompiler_get$$)("$EndOverflow$");
D.$DvtDataAxisInfo$$ = function $$DvtDataAxisInfo$$$($context$$152$$, $options$$141$$, $availSpace$$65$$) {
  this.Init($context$$152$$, $options$$141$$, $availSpace$$65$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDataAxisInfo$$, D.$DvtAxisInfo$$, "DvtDataAxisInfo");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$153_zeroBaseline$$inline_3748$$, $continuousExtent$$inline_3749_options$$142$$, $availSpace$$66_scaleUnit$$inline_3750$$) {
  D.$DvtDataAxisInfo$$.$superclass$.Init.call(this, $context$$153_zeroBaseline$$inline_3748$$, $continuousExtent$$inline_3749_options$$142$$, $availSpace$$66_scaleUnit$$inline_3750$$);
  "top" == this.$Position$ || "bottom" == this.$Position$ ? ("off" != $continuousExtent$$inline_3749_options$$142$$.tickLabel.rendered && "off" != $continuousExtent$$inline_3749_options$$142$$.rendered && (this.$StartOverflow$ = window.Math.max(10 - $continuousExtent$$inline_3749_options$$142$$.leftBuffer, 0), this.$EndOverflow$ = window.Math.max(10 - $continuousExtent$$inline_3749_options$$142$$.rightBuffer, 0)), (0,D.$DvtAgent$isRightToLeft$$)($context$$153_zeroBaseline$$inline_3748$$) ? (this.$_minCoord$ = 
  this.$EndCoord$ - this.$EndOverflow$, this.$_maxCoord$ = this.$StartCoord$ + this.$StartOverflow$) : (this.$_minCoord$ = this.$StartCoord$ + this.$StartOverflow$, this.$_maxCoord$ = this.$EndCoord$ - this.$EndOverflow$)) : "tangential" == this.$Position$ || "radial" == this.$Position$ ? (this.$_minCoord$ = this.$StartCoord$, this.$_maxCoord$ = this.$EndCoord$) : (this.$_minCoord$ = this.$EndCoord$, this.$_maxCoord$ = this.$StartCoord$);
  this.$GlobalMin$ = $continuousExtent$$inline_3749_options$$142$$.min;
  this.$GlobalMax$ = $continuousExtent$$inline_3749_options$$142$$.max;
  this.$MinValue$ = $continuousExtent$$inline_3749_options$$142$$.viewportMin == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : $continuousExtent$$inline_3749_options$$142$$.viewportMin;
  this.$MaxValue$ = $continuousExtent$$inline_3749_options$$142$$.viewportMax == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : $continuousExtent$$inline_3749_options$$142$$.viewportMax;
  this.$_majorIncrement$ = $continuousExtent$$inline_3749_options$$142$$.step;
  this.$_minorIncrement$ = $continuousExtent$$inline_3749_options$$142$$.minorStep;
  this.$_minMajorIncrement$ = $continuousExtent$$inline_3749_options$$142$$.minStep;
  this.$_converter$ = D.$JSCompiler_alias_NULL$$;
  $continuousExtent$$inline_3749_options$$142$$.tickLabel != D.$JSCompiler_alias_NULL$$ && (this.$_converter$ = $continuousExtent$$inline_3749_options$$142$$.tickLabel.converter);
  this.$DataMin$ = $continuousExtent$$inline_3749_options$$142$$.dataMin;
  this.$DataMax$ = $continuousExtent$$inline_3749_options$$142$$.dataMax;
  $context$$153_zeroBaseline$$inline_3748$$ = "zero" == this.$Options$.baselineScaling;
  $continuousExtent$$inline_3749_options$$142$$ = "on" == this.$Options$._continuousExtent;
  $context$$153_zeroBaseline$$inline_3748$$ && (this.$DataMin$ = window.Math.min(0, this.$DataMin$), this.$DataMax$ = window.Math.max(0, this.$DataMax$));
  $availSpace$$66_scaleUnit$$inline_3750$$ = (0,D.$JSCompiler_StaticMethods__calcAxisScale$$)(this, this.$GlobalMin$ != D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : this.$DataMin$, this.$GlobalMax$ != D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : this.$DataMax$);
  this.$DataMin$ == this.$DataMax$ && (0 == this.$DataMin$ ? this.$DataMax$ += 5 * $availSpace$$66_scaleUnit$$inline_3750$$ : (this.$DataMin$ -= 3 * $availSpace$$66_scaleUnit$$inline_3750$$, this.$DataMax$ += 2 * $availSpace$$66_scaleUnit$$inline_3750$$));
  if(this.$GlobalMin$ == D.$JSCompiler_alias_NULL$$) {
    if($context$$153_zeroBaseline$$inline_3748$$ && 0 <= this.$DataMin$) {
      this.$GlobalMin$ = 0
    }else {
      if($continuousExtent$$inline_3749_options$$142$$) {
        this.$GlobalMin$ = this.$DataMin$ - 0.1 * (this.$DataMax$ - this.$DataMin$), 0 <= this.$DataMin$ && (this.$GlobalMin$ = window.Math.max(this.$GlobalMin$, 0))
      }else {
        if(!$context$$153_zeroBaseline$$inline_3748$$ && this.$GlobalMax$ != D.$JSCompiler_alias_NULL$$) {
          for(this.$GlobalMin$ = this.$GlobalMax$;this.$GlobalMin$ > this.$DataMin$;) {
            this.$GlobalMin$ -= $availSpace$$66_scaleUnit$$inline_3750$$
          }
        }else {
          this.$GlobalMin$ = window.Math.floor(this.$DataMin$ / $availSpace$$66_scaleUnit$$inline_3750$$) * $availSpace$$66_scaleUnit$$inline_3750$$
        }
      }
    }
  }
  if(this.$GlobalMax$ == D.$JSCompiler_alias_NULL$$) {
    if($context$$153_zeroBaseline$$inline_3748$$ && 0 >= this.$DataMax$) {
      this.$GlobalMax$ = 0
    }else {
      if($continuousExtent$$inline_3749_options$$142$$) {
        this.$GlobalMax$ = this.$DataMax$ + 0.1 * (this.$DataMax$ - this.$DataMin$), 0 >= this.$DataMax$ && (this.$GlobalMax$ = window.Math.min(this.$GlobalMax$, 0))
      }else {
        if($context$$153_zeroBaseline$$inline_3748$$) {
          this.$GlobalMax$ = (window.Math.floor(this.$DataMax$ / $availSpace$$66_scaleUnit$$inline_3750$$) + 1) * $availSpace$$66_scaleUnit$$inline_3750$$
        }else {
          for(this.$GlobalMax$ = this.$GlobalMin$;this.$GlobalMax$ <= this.$DataMax$;) {
            this.$GlobalMax$ += $availSpace$$66_scaleUnit$$inline_3750$$
          }
        }
      }
    }
  }
  this.$GlobalMax$ == this.$GlobalMin$ && (this.$GlobalMax$ = 100, this.$GlobalMin$ = 0, $availSpace$$66_scaleUnit$$inline_3750$$ = (this.$GlobalMax$ - this.$GlobalMin$) / 10);
  this.$MinValue$ == D.$JSCompiler_alias_NULL$$ && (this.$MinValue$ = this.$GlobalMin$);
  this.$MaxValue$ == D.$JSCompiler_alias_NULL$$ && (this.$MaxValue$ = this.$GlobalMax$);
  if(this.$MinValue$ != this.$GlobalMin$ || this.$MaxValue$ != this.$GlobalMax$) {
    $availSpace$$66_scaleUnit$$inline_3750$$ = (0,D.$JSCompiler_StaticMethods__calcAxisScale$$)(this, this.$MinValue$, this.$MaxValue$)
  }
  this.$_majorIncrement$ = this.$_majorIncrement$ ? this.$_majorIncrement$ : $availSpace$$66_scaleUnit$$inline_3750$$;
  this.$_minMajorIncrement$ != D.$JSCompiler_alias_NULL$$ && this.$_majorIncrement$ < this.$_minMajorIncrement$ && (this.$_majorIncrement$ = this.$_minMajorIncrement$);
  this.$_majorTickCount$ = (this.$MaxValue$ - this.$getMinLabel$()) / this.$_majorIncrement$;
  this.$_minorIncrement$ != D.$JSCompiler_alias_NULL$$ && 2 <= this.$_majorIncrement$ / this.$_minorIncrement$ ? this.$_minorTickCount$ = this.$_majorIncrement$ / this.$_minorIncrement$ : (this.$_minorTickCount$ = 2, this.$_minorIncrement$ = this.$_majorIncrement$ / this.$_minorTickCount$)
};
D.$JSCompiler_prototypeAlias$$.$getMinLabel$ = function $$JSCompiler_prototypeAlias$$$$getMinLabel$$() {
  return"zero" == this.$Options$.baselineScaling || "on" == this.$Options$._continuousExtent && this.$Options$.min == D.$JSCompiler_alias_NULL$$ ? window.Math.ceil(this.$MinValue$ / this.$_majorIncrement$) * this.$_majorIncrement$ : window.Math.ceil((this.$MinValue$ - this.$GlobalMin$) / this.$_majorIncrement$) * this.$_majorIncrement$ + this.$GlobalMin$
};
D.$JSCompiler_prototypeAlias$$.$getLabels$ = function $$JSCompiler_prototypeAlias$$$$getLabels$$($context$$154$$, $levelIdx$$) {
  if($levelIdx$$ && 0 < $levelIdx$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $labels$$6$$ = [], $container$$79_labelDims$$1$$ = [], $container$$79_labelDims$$1$$ = $context$$154$$.$_stage$, $isTangential$$ = "tangential" == this.$Position$;
  this.$Options$.tickLabel && this.$Options$.tickLabel.scaling && (this.$_axisValueFormatter$ = new D.$DvtLinearScaleAxisValueFormatter$$(this.$MinValue$, this.$MaxValue$, this.$_majorIncrement$, this.$Options$.tickLabel.scaling, this.$Options$.tickLabel.autoPrecision ? this.$Options$.tickLabel.autoPrecision : "on"));
  for(var $i$$349$$ = 0;$i$$349$$ <= this.$_majorTickCount$;$i$$349$$++) {
    var $coord$$11_value$$84$$ = $i$$349$$ * this.$_majorIncrement$ + this.$getMinLabel$();
    if(!($isTangential$$ && $coord$$11_value$$84$$ == this.$MaxValue$)) {
      var $label$$37_text$$28$$ = this.$_formatValue$($coord$$11_value$$84$$), $coord$$11_value$$84$$ = this.$getUnboundedCoordAt$($coord$$11_value$$84$$), $label$$37_text$$28$$ = this.$CreateLabel$($context$$154$$, $label$$37_text$$28$$, $coord$$11_value$$84$$);
      $labels$$6$$.push($label$$37_text$$28$$)
    }
  }
  $isTangential$$ || ($container$$79_labelDims$$1$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels$$6$$, $container$$79_labelDims$$1$$), $labels$$6$$ = (0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $labels$$6$$, $container$$79_labelDims$$1$$));
  return $labels$$6$$
};
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = function $$JSCompiler_prototypeAlias$$$$getAxisLine$$($context$$155$$) {
  var $axisLineOptions_axisLineStroke$$ = this.$Options$.axisLine;
  return"on" == $axisLineOptions_axisLineStroke$$.rendered ? ($axisLineOptions_axisLineStroke$$ = new D.$DvtSolidStroke$$($axisLineOptions_axisLineStroke$$.lineColor, 1, $axisLineOptions_axisLineStroke$$.lineWidth), (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$155$$, $axisLineOptions_axisLineStroke$$, this.$_maxCoord$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$($context$$156$$) {
  var $gridlines$$1$$ = [], $coord$$12_value$$85$$, $line$$10_stroke$$42$$, $baselineStroke_majorTickOptions$$ = this.$Options$.majorTick;
  if("off" == $baselineStroke_majorTickOptions$$.rendered) {
    return $gridlines$$1$$
  }
  var $majorTickStroke$$ = new D.$DvtSolidStroke$$($baselineStroke_majorTickOptions$$.lineColor, 1, $baselineStroke_majorTickOptions$$.lineWidth);
  $baselineStroke_majorTickOptions$$.lineStyle && $majorTickStroke$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($baselineStroke_majorTickOptions$$.lineStyle));
  $baselineStroke_majorTickOptions$$ = $majorTickStroke$$.clone();
  if(this.$Options$._useBaselineColor) {
    var $baselineColor_i$$350$$ = D.$DvtColorUtils$$.$setAlpha$(this.$Options$.axisLine.lineColor, 0.75);
    $baselineStroke_majorTickOptions$$.$setColor$($baselineColor_i$$350$$)
  }
  for($baselineColor_i$$350$$ = 0;$baselineColor_i$$350$$ <= this.$_majorTickCount$;$baselineColor_i$$350$$++) {
    $coord$$12_value$$85$$ = $baselineColor_i$$350$$ * this.$_majorIncrement$ + this.$getMinLabel$(), "tangential" == this.$Position$ && $coord$$12_value$$85$$ == this.$MaxValue$ || ($line$$10_stroke$$42$$ = 0 == $coord$$12_value$$85$$ ? $baselineStroke_majorTickOptions$$ : $majorTickStroke$$, $coord$$12_value$$85$$ = this.$getUnboundedCoordAt$($coord$$12_value$$85$$), $line$$10_stroke$$42$$ = (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$156$$, $line$$10_stroke$$42$$, $coord$$12_value$$85$$), 
    $gridlines$$1$$.push($line$$10_stroke$$42$$))
  }
  return $gridlines$$1$$
};
D.$JSCompiler_prototypeAlias$$.$getMinorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMinorGridLines$$($context$$157$$) {
  var $gridlines$$2$$ = [], $coord$$13_line$$11_minorValue$$, $i$$351_minorTickOptions$$ = this.$Options$.minorTick;
  if("on" != $i$$351_minorTickOptions$$.rendered) {
    return $gridlines$$2$$
  }
  var $minorTickStroke$$ = new D.$DvtSolidStroke$$($i$$351_minorTickOptions$$.lineColor, 1, $i$$351_minorTickOptions$$.lineWidth);
  $i$$351_minorTickOptions$$.lineStyle && $minorTickStroke$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($i$$351_minorTickOptions$$.lineStyle));
  for($i$$351_minorTickOptions$$ = -1;$i$$351_minorTickOptions$$ <= this.$_majorTickCount$;$i$$351_minorTickOptions$$++) {
    for(var $value$$86$$ = $i$$351_minorTickOptions$$ * this.$_majorIncrement$ + this.$getMinLabel$(), $j$$69$$ = 1;$j$$69$$ < this.$_minorTickCount$;$j$$69$$++) {
      $coord$$13_line$$11_minorValue$$ = $value$$86$$ + $j$$69$$ * this.$_minorIncrement$;
      if($coord$$13_line$$11_minorValue$$ > this.$MaxValue$) {
        break
      }
      $coord$$13_line$$11_minorValue$$ < this.$MinValue$ || ($coord$$13_line$$11_minorValue$$ = this.$getUnboundedCoordAt$($coord$$13_line$$11_minorValue$$), $coord$$13_line$$11_minorValue$$ = (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$157$$, $minorTickStroke$$, $coord$$13_line$$11_minorValue$$), $gridlines$$2$$.push($coord$$13_line$$11_minorValue$$))
    }
  }
  return $gridlines$$2$$
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$87$$) {
  return $value$$87$$ < this.$MinValue$ || $value$$87$$ > this.$MaxValue$ ? D.$JSCompiler_alias_NULL$$ : this.$getUnboundedCoordAt$($value$$87$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$15$$) {
  var $minCoord$$2$$ = window.Math.min(this.$_minCoord$, this.$_maxCoord$), $maxCoord$$2$$ = window.Math.max(this.$_minCoord$, this.$_maxCoord$);
  $coord$$15$$ < $minCoord$$2$$ ? $coord$$15$$ = $minCoord$$2$$ : $coord$$15$$ > $maxCoord$$2$$ && ($coord$$15$$ = $maxCoord$$2$$);
  return this.$getUnboundedValueAt$($coord$$15$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$88$$) {
  $value$$88$$ < this.$MinValue$ ? $value$$88$$ = this.$MinValue$ : $value$$88$$ > this.$MaxValue$ && ($value$$88$$ = this.$MaxValue$);
  return this.$getUnboundedCoordAt$($value$$88$$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$16$$) {
  return this.$MinValue$ + ($coord$$16$$ - this.$_minCoord$) / (this.$_maxCoord$ - this.$_minCoord$) * (this.$MaxValue$ - this.$MinValue$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$89$$) {
  return this.$_minCoord$ + ($value$$89$$ - this.$MinValue$) / (this.$MaxValue$ - this.$MinValue$) * (this.$_maxCoord$ - this.$_minCoord$)
};
D.$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = function $$JSCompiler_prototypeAlias$$$$getBaselineCoord$$() {
  var $baseline$$5$$ = 0;
  0 > this.$MaxValue$ ? $baseline$$5$$ = this.$MaxValue$ : 0 < this.$MinValue$ && ($baseline$$5$$ = this.$MinValue$);
  return this.$getCoordAt$($baseline$$5$$)
};
D.$JSCompiler_prototypeAlias$$.$_formatValue$ = function $$JSCompiler_prototypeAlias$$$$_formatValue$$($value$$90$$) {
  if(this.$_converter$ && (this.$_converter$.getAsString || this.$_converter$.format)) {
    if(this.$_axisValueFormatter$) {
      return this.$_axisValueFormatter$.$format$($value$$90$$, this.$_converter$)
    }
    if(this.$_converter$.getAsString) {
      return this.$_converter$.getAsString($value$$90$$)
    }
    if(this.$_converter$.format) {
      return this.$_converter$.format($value$$90$$)
    }
  }else {
    if(this.$_axisValueFormatter$) {
      return this.$_axisValueFormatter$.$format$($value$$90$$)
    }
    var $decimals_t$$12$$ = window.Math.log(this.$_majorIncrement$) / window.Math.log(10), $decimals_t$$12$$ = window.Math.max(window.Math.ceil(-$decimals_t$$12$$), 0);
    return $value$$90$$.toFixed($decimals_t$$12$$)
  }
};
D.$JSCompiler_StaticMethods__calcAxisScale$$ = function $$JSCompiler_StaticMethods__calcAxisScale$$$($JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$, $min$$12_t$$13_testVal$$, $max$$12$$) {
  if($JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$.$_majorIncrement$) {
    return $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$.$_majorIncrement$
  }
  $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ = $max$$12$$ - $min$$12_t$$13_testVal$$;
  if(0 == $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$) {
    return 0 == $min$$12_t$$13_testVal$$ ? 10 : window.Math.pow(10, window.Math.floor(window.Math.log($min$$12_t$$13_testVal$$) / window.Math.LN10) - 1)
  }
  $min$$12_t$$13_testVal$$ = window.Math.log($JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$) / window.Math.log(10);
  $min$$12_t$$13_testVal$$ = window.Math.pow(10, window.Math.ceil($min$$12_t$$13_testVal$$) - 2);
  $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ = window.Math.round($JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ / $min$$12_t$$13_testVal$$);
  return(10 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 14 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 2 : 15 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 19 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 3 : 20 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 24 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 4 : 25 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 
  45 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 5 : 46 <= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ && 80 >= $JSCompiler_StaticMethods__calcAxisScale$self_first2Digits_spread$$ ? 10 : 20) * $min$$12_t$$13_testVal$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getMajorTickCount$ = (0,D.$JSCompiler_get$$)("$_majorTickCount$");
D.$JSCompiler_prototypeAlias$$.$setMajorTickCount$ = function $$JSCompiler_prototypeAlias$$$$setMajorTickCount$$($count$$18$$) {
  this.$_majorTickCount$ = $count$$18$$;
  this.$_majorIncrement$ = (this.$MaxValue$ - this.$MinValue$) / this.$_majorTickCount$
};
D.$JSCompiler_prototypeAlias$$.$getMinorTickCount$ = (0,D.$JSCompiler_get$$)("$_minorTickCount$");
D.$JSCompiler_prototypeAlias$$.$setMinorTickCount$ = function $$JSCompiler_prototypeAlias$$$$setMinorTickCount$$($count$$19$$) {
  this.$_minorTickCount$ = $count$$19$$;
  this.$_minorIncrement$ = this.$_majorIncrement$ / this.$_minorTickCount$
};
D.$JSCompiler_prototypeAlias$$.$getMajorIncrement$ = (0,D.$JSCompiler_get$$)("$_majorIncrement$");
D.$JSCompiler_prototypeAlias$$.$getMinorIncrement$ = (0,D.$JSCompiler_get$$)("$_minorIncrement$");
D.$JSCompiler_prototypeAlias$$.$getMinimumExtent$ = function $$JSCompiler_prototypeAlias$$$$getMinimumExtent$$() {
  return(this.$GlobalMax$ - this.$GlobalMin$) / 64
};
D.$JSCompiler_prototypeAlias$$.$getStartOverflow$ = function $$JSCompiler_prototypeAlias$$$$getStartOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? this.$EndOverflow$ : this.$StartOverflow$
};
D.$JSCompiler_prototypeAlias$$.$getEndOverflow$ = function $$JSCompiler_prototypeAlias$$$$getEndOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? this.$StartOverflow$ : this.$EndOverflow$
};
D.$DvtGroupAxisInfo$$ = function $$DvtGroupAxisInfo$$$($context$$165$$, $options$$145$$, $availSpace$$69$$) {
  this.Init($context$$165$$, $options$$145$$, $availSpace$$69$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGroupAxisInfo$$, D.$DvtAxisInfo$$, "DvtGroupAxisInfo");
D.$DvtGroupAxisInfo$$.prototype.Init = function $$DvtGroupAxisInfo$$$$Init$($context$$166_isRTL$$7$$, $options$$146$$, $availSpace$$70_endOffset$$1_temp$$1$$) {
  D.$DvtGroupAxisInfo$$.$superclass$.Init.call(this, $context$$166_isRTL$$7$$, $options$$146$$, $availSpace$$70_endOffset$$1_temp$$1$$);
  $context$$166_isRTL$$7$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$166_isRTL$$7$$);
  if(("top" == this.$Position$ || "bottom" == this.$Position$) && $context$$166_isRTL$$7$$) {
    $availSpace$$70_endOffset$$1_temp$$1$$ = this.$StartCoord$, this.$StartCoord$ = this.$EndCoord$, this.$EndCoord$ = $availSpace$$70_endOffset$$1_temp$$1$$
  }
  this.$_groups$ = $options$$146$$.groups;
  $availSpace$$70_endOffset$$1_temp$$1$$ = 0 < $options$$146$$.endGroupOffset ? (0,window.Number)($options$$146$$.endGroupOffset) : 0;
  var $startOffset$$1$$ = 0 < $options$$146$$.startGroupOffset ? (0,window.Number)($options$$146$$.startGroupOffset) : 0;
  this.$DataMin$ = 0;
  this.$DataMax$ = this.$_groups$.length - 1;
  this.$GlobalMin$ = $options$$146$$.min == D.$JSCompiler_alias_NULL$$ ? this.$DataMin$ - $startOffset$$1$$ : $options$$146$$.min;
  this.$GlobalMax$ = $options$$146$$.max == D.$JSCompiler_alias_NULL$$ ? this.$DataMax$ + $availSpace$$70_endOffset$$1_temp$$1$$ : $options$$146$$.max;
  this.$MinValue$ = $options$$146$$.viewportMin == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : $options$$146$$.viewportMin;
  this.$MaxValue$ = $options$$146$$.viewportMax == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : $options$$146$$.viewportMax;
  var $startIndex$$1$$ = (0,D.$JSCompiler_StaticMethods_getIndexByLabel$$)(this, $options$$146$$.viewportStartGroup), $endIndex$$ = (0,D.$JSCompiler_StaticMethods_getIndexByLabel$$)(this, $options$$146$$.viewportEndGroup);
  -1 != $startIndex$$1$$ && (this.$MinValue$ = $startIndex$$1$$ - $startOffset$$1$$);
  -1 != $endIndex$$ && (this.$MaxValue$ = $endIndex$$ + $availSpace$$70_endOffset$$1_temp$$1$$);
  this.$_startBuffer$ = $context$$166_isRTL$$7$$ ? $options$$146$$.rightBuffer : $options$$146$$.leftBuffer;
  this.$_endBuffer$ = $context$$166_isRTL$$7$$ ? $options$$146$$.leftBuffer : $options$$146$$.rightBuffer;
  this.$_isLabelRotated$ = D.$JSCompiler_alias_FALSE$$;
  this.$_renderGridAtLabels$ = $options$$146$$._renderGridAtLabels;
  this.$_level1Labels$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__rotateLabels$$ = function $$JSCompiler_StaticMethods__rotateLabels$$$($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$9$$, $container$$82_labelDims$$4$$, $overflow$$2_text$$30$$) {
  var $x$$122$$, $isRTL$$8$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__rotateLabels$self$$.$_context$);
  $JSCompiler_StaticMethods__rotateLabels$self$$.$_isLabelRotated$ = D.$JSCompiler_alias_TRUE$$;
  (0,D.$JSCompiler_StaticMethods__setOverflow$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $overflow$$2_text$$30$$, $overflow$$2_text$$30$$, $labels$$9$$);
  for(var $i$$357$$ = 0;$i$$357$$ < $labels$$9$$.length;$i$$357$$++) {
    $overflow$$2_text$$30$$ = $labels$$9$$[$i$$357$$], $overflow$$2_text$$30$$ != D.$JSCompiler_alias_NULL$$ && ($x$$122$$ = $overflow$$2_text$$30$$.$getX$(), $overflow$$2_text$$30$$.$setX$(0), $overflow$$2_text$$30$$.$setY$(0), $isRTL$$8$$ ? $overflow$$2_text$$30$$.$setRotation$(window.Math.PI / 2) : $overflow$$2_text$$30$$.$setRotation$(3 * window.Math.PI / 2), $overflow$$2_text$$30$$.$setTranslateX$($x$$122$$))
  }
  $container$$82_labelDims$$4$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$9$$, $container$$82_labelDims$$4$$);
  return(0,D.$JSCompiler_StaticMethods_SkipLabels$$)($JSCompiler_StaticMethods__rotateLabels$self$$, $labels$$9$$, $container$$82_labelDims$$4$$)
};
D.$DvtGroupAxisInfo$$.prototype.$isLabelRotated$ = (0,D.$JSCompiler_get$$)("$_isLabelRotated$");
D.$JSCompiler_StaticMethods__setOverflow$$ = function $$JSCompiler_StaticMethods__setOverflow$$$($JSCompiler_StaticMethods__setOverflow$self$$, $startOverflow$$, $endOverflow$$, $labels$$10$$) {
  $startOverflow$$ = window.Math.max($startOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$_startBuffer$, 0);
  $endOverflow$$ = window.Math.max($endOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$_endBuffer$, 0);
  var $i$$358_isRTL$$9$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__setOverflow$self$$.$_context$);
  $JSCompiler_StaticMethods__setOverflow$self$$.$StartCoord$ += ($startOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$StartOverflow$) * ($i$$358_isRTL$$9$$ ? -1 : 1);
  $JSCompiler_StaticMethods__setOverflow$self$$.$EndCoord$ -= ($endOverflow$$ - $JSCompiler_StaticMethods__setOverflow$self$$.$EndOverflow$) * ($i$$358_isRTL$$9$$ ? -1 : 1);
  for($i$$358_isRTL$$9$$ = 0;$i$$358_isRTL$$9$$ < $labels$$10$$.length;$i$$358_isRTL$$9$$++) {
    var $text$$31$$ = $labels$$10$$[$i$$358_isRTL$$9$$];
    $text$$31$$ && $text$$31$$.$setX$($JSCompiler_StaticMethods__setOverflow$self$$.$getCoordAt$($i$$358_isRTL$$9$$))
  }
  $JSCompiler_StaticMethods__setOverflow$self$$.$StartOverflow$ = $startOverflow$$;
  $JSCompiler_StaticMethods__setOverflow$self$$.$EndOverflow$ = $endOverflow$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtGroupAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getLabels$ = function $$JSCompiler_prototypeAlias$$$$getLabels$$($context$$167$$, $levelIdx$$2$$) {
  if($levelIdx$$2$$ && 0 < $levelIdx$$2$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  this.$_level1Labels$ || (this.$_level1Labels$ = this.$_generateLabels$($context$$167$$));
  return this.$_level1Labels$
};
D.$JSCompiler_prototypeAlias$$.$_generateLabels$ = function $$JSCompiler_prototypeAlias$$$$_generateLabels$$($context$$168_firstLabelDim$$) {
  for(var $labels$$11$$ = [], $container$$83$$ = $context$$168_firstLabelDim$$.$_stage$, $isHoriz$$7$$ = "top" == this.$Position$ || "bottom" == this.$Position$, $endOverflow$$1_isRTL$$10_labelDims$$5_minLabelDims$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$168_firstLabelDim$$), $maxLabelDims_numLabels_startOverflow$$1$$ = this.$_groups$.length, $firstLabel_lastLabelDim$$, $lastLabel_text$$32$$, $i$$359$$ = 0;$i$$359$$ < $maxLabelDims_numLabels_startOverflow$$1$$;$i$$359$$++) {
    var $label$$40$$ = (0,D.$JSCompiler_StaticMethods_getLabelAt$$)(this, $i$$359$$), $coord$$21$$ = this.$getCoordAt$($i$$359$$);
    $coord$$21$$ != D.$JSCompiler_alias_NULL$$ ? ($lastLabel_text$$32$$ = this.$CreateLabel$($context$$168_firstLabelDim$$, $label$$40$$, $coord$$21$$), $labels$$11$$.push($lastLabel_text$$32$$), $firstLabel_lastLabelDim$$ || ($firstLabel_lastLabelDim$$ = $lastLabel_text$$32$$)) : $labels$$11$$.push(D.$JSCompiler_alias_NULL$$)
  }
  if("tangential" == this.$Position$) {
    return $labels$$11$$
  }
  $context$$168_firstLabelDim$$ = $firstLabel_lastLabelDim$$.$measureDimensions$();
  $isHoriz$$7$$ && (this.$Options$._startOverflow != D.$JSCompiler_alias_NULL$$ && this.$Options$._endOverflow != D.$JSCompiler_alias_NULL$$ ? ($maxLabelDims_numLabels_startOverflow$$1$$ = this.$Options$._startOverflow, $endOverflow$$1_isRTL$$10_labelDims$$5_minLabelDims$$ = this.$Options$._endOverflow) : ($firstLabel_lastLabelDim$$ = $lastLabel_text$$32$$.$measureDimensions$(), $maxLabelDims_numLabels_startOverflow$$1$$ = $endOverflow$$1_isRTL$$10_labelDims$$5_minLabelDims$$ ? $context$$168_firstLabelDim$$.$w$ + 
  $context$$168_firstLabelDim$$.x - this.$StartCoord$ : this.$StartCoord$ - $context$$168_firstLabelDim$$.x, $endOverflow$$1_isRTL$$10_labelDims$$5_minLabelDims$$ = $endOverflow$$1_isRTL$$10_labelDims$$5_minLabelDims$$ ? this.$EndCoord$ - $firstLabel_lastLabelDim$$.x : $firstLabel_lastLabelDim$$.$w$ + $firstLabel_lastLabelDim$$.x - this.$EndCoord$), ($maxLabelDims_numLabels_startOverflow$$1$$ > this.$_startBuffer$ || $endOverflow$$1_isRTL$$10_labelDims$$5_minLabelDims$$ > this.$_endBuffer$) && (0,D.$JSCompiler_StaticMethods__setOverflow$$)(this, 
  $maxLabelDims_numLabels_startOverflow$$1$$, $endOverflow$$1_isRTL$$10_labelDims$$5_minLabelDims$$, $labels$$11$$));
  $endOverflow$$1_isRTL$$10_labelDims$$5_minLabelDims$$ = [];
  $endOverflow$$1_isRTL$$10_labelDims$$5_minLabelDims$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)(this, $labels$$11$$, $container$$83$$, 0.3);
  $maxLabelDims_numLabels_startOverflow$$1$$ = (0,D.$JSCompiler_StaticMethods_GuessLabelDims$$)(this, $labels$$11$$, $container$$83$$);
  if(!(0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $maxLabelDims_numLabels_startOverflow$$1$$, 0)) {
    return $labels$$11$$
  }
  if($isHoriz$$7$$) {
    if("auto" == this.$Options$.tickLabel.rotation) {
      if((0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $endOverflow$$1_isRTL$$10_labelDims$$5_minLabelDims$$, 0)) {
        return(0,D.$JSCompiler_StaticMethods__rotateLabels$$)(this, $labels$$11$$, $container$$83$$, $context$$168_firstLabelDim$$.$h$ / 2)
      }
      $endOverflow$$1_isRTL$$10_labelDims$$5_minLabelDims$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels$$11$$, $container$$83$$);
      return(0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $endOverflow$$1_isRTL$$10_labelDims$$5_minLabelDims$$, 0) ? (0,D.$JSCompiler_StaticMethods__rotateLabels$$)(this, $labels$$11$$, $container$$83$$, $context$$168_firstLabelDim$$.$h$ / 2) : $labels$$11$$
    }
    $endOverflow$$1_isRTL$$10_labelDims$$5_minLabelDims$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels$$11$$, $container$$83$$);
    return(0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $labels$$11$$, $endOverflow$$1_isRTL$$10_labelDims$$5_minLabelDims$$)
  }
  return(0,D.$JSCompiler_StaticMethods_SkipLabels$$)(this, $labels$$11$$, $maxLabelDims_numLabels_startOverflow$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = function $$JSCompiler_prototypeAlias$$$$getAxisLine$$($context$$169$$) {
  var $axisLineOptions$$2_axisLineStroke$$2$$ = this.$Options$.axisLine;
  return"on" == $axisLineOptions$$2_axisLineStroke$$2$$.rendered ? ($axisLineOptions$$2_axisLineStroke$$2$$ = new D.$DvtSolidStroke$$($axisLineOptions$$2_axisLineStroke$$2$$.lineColor, 1, $axisLineOptions$$2_axisLineStroke$$2$$.lineWidth), (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$169$$, $axisLineOptions$$2_axisLineStroke$$2$$, 0)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$($context$$170$$) {
  var $gridlines$$5$$ = [], $coord$$22_line$$12$$, $majorTickOptions$$2_numGroups$$2_rendered$$2$$ = this.$Options$.majorTick, $majorTickStroke$$2$$ = new D.$DvtSolidStroke$$($majorTickOptions$$2_numGroups$$2_rendered$$2$$.lineColor, 1, $majorTickOptions$$2_numGroups$$2_rendered$$2$$.lineWidth);
  $majorTickOptions$$2_numGroups$$2_rendered$$2$$.lineStyle && $majorTickStroke$$2$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($majorTickOptions$$2_numGroups$$2_rendered$$2$$.lineStyle));
  $majorTickOptions$$2_numGroups$$2_rendered$$2$$ = $majorTickOptions$$2_numGroups$$2_rendered$$2$$.rendered;
  if("on" == $majorTickOptions$$2_numGroups$$2_rendered$$2$$ || "auto" == $majorTickOptions$$2_numGroups$$2_rendered$$2$$ && "tangential" == this.$Position$) {
    for(var $majorTickOptions$$2_numGroups$$2_rendered$$2$$ = this.$_groups$.length, $i$$360$$ = 0;$i$$360$$ < $majorTickOptions$$2_numGroups$$2_rendered$$2$$;$i$$360$$++) {
      if(this.$_renderGridAtLabels$) {
        $coord$$22_line$$12$$ = this.$getCoordAt$($i$$360$$)
      }else {
        if(this.$getCoordAt$($i$$360$$ + 0.5)) {
          $coord$$22_line$$12$$ = this.$getCoordAt$($i$$360$$ + 0.5)
        }else {
          continue
        }
      }
      $coord$$22_line$$12$$ != D.$JSCompiler_alias_NULL$$ && ($coord$$22_line$$12$$ = (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$170$$, $majorTickStroke$$2$$, $coord$$22_line$$12$$), $gridlines$$5$$.push($coord$$22_line$$12$$))
    }
  }
  return $gridlines$$5$$
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$94$$) {
  return $value$$94$$ < this.$MinValue$ || $value$$94$$ > this.$MaxValue$ ? D.$JSCompiler_alias_NULL$$ : this.$getUnboundedCoordAt$($value$$94$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$24$$) {
  var $minCoord$$6$$ = window.Math.min(this.$StartCoord$, this.$EndCoord$), $maxCoord$$6$$ = window.Math.max(this.$StartCoord$, this.$EndCoord$);
  $coord$$24$$ < $minCoord$$6$$ ? $coord$$24$$ = $minCoord$$6$$ : $coord$$24$$ > $maxCoord$$6$$ && ($coord$$24$$ = $maxCoord$$6$$);
  return this.$getUnboundedValueAt$($coord$$24$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$95$$) {
  $value$$95$$ < this.$MinValue$ ? $value$$95$$ = this.$MinValue$ : $value$$95$$ >= this.$MaxValue$ && ($value$$95$$ = this.$MaxValue$);
  return this.$getUnboundedCoordAt$($value$$95$$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$25$$) {
  return this.$MinValue$ + ($coord$$25$$ - this.$StartCoord$) / ((this.$EndCoord$ - this.$StartCoord$) / (this.$MaxValue$ - this.$MinValue$))
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$96$$) {
  return this.$StartCoord$ + ($value$$96$$ - this.$MinValue$) * ((this.$EndCoord$ - this.$StartCoord$) / (this.$MaxValue$ - this.$MinValue$))
};
D.$JSCompiler_StaticMethods_getLabelAt$$ = function $$JSCompiler_StaticMethods_getLabelAt$$$($JSCompiler_StaticMethods_getLabelAt$self$$, $index$$94$$) {
  $index$$94$$ = window.Math.round($index$$94$$);
  if(0 > $index$$94$$ || $index$$94$$ >= $JSCompiler_StaticMethods_getLabelAt$self$$.$_groups$.length) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $label$$41$$ = $JSCompiler_StaticMethods_getLabelAt$self$$.$_groups$[$index$$94$$];
  $label$$41$$ && $label$$41$$.name && ($label$$41$$ = $label$$41$$.name);
  return $label$$41$$
};
D.$JSCompiler_StaticMethods_getIndexByLabel$$ = function $$JSCompiler_StaticMethods_getIndexByLabel$$$($JSCompiler_StaticMethods_getIndexByLabel$self$$, $label$$42$$) {
  if($label$$42$$ == D.$JSCompiler_alias_NULL$$) {
    return-1
  }
  for(var $index$$95$$ = -1, $i$$361$$ = 0;$i$$361$$ < $JSCompiler_StaticMethods_getIndexByLabel$self$$.$_groups$.length;$i$$361$$++) {
    if($label$$42$$ == (0,D.$JSCompiler_StaticMethods_getLabelAt$$)($JSCompiler_StaticMethods_getIndexByLabel$self$$, $i$$361$$)) {
      $index$$95$$ = $i$$361$$;
      break
    }
  }
  return $index$$95$$
};
D.$DvtGroupAxisInfo$$.prototype.$getMinimumExtent$ = (0,D.$JSCompiler_returnArg$$)(1);
D.$DvtLinearScaleAxisValueFormatter$$ = function $$DvtLinearScaleAxisValueFormatter$$$($minValue$$7$$, $maxValue$$7$$, $tickStep$$, $scale$$24$$, $autoPrecision$$2$$) {
  this.$_bundle$ = new D.$DvtUtilBundle$$;
  this.Init($minValue$$7$$, $maxValue$$7$$, $tickStep$$, $scale$$24$$, $autoPrecision$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtLinearScaleAxisValueFormatter$$, D.$DvtAbstractAxisValueFormatter$$, "DvtLinearScaleAxisValueFormatter");
D.$DvtLinearScaleAxisValueFormatter$$.prototype.Init = function $$DvtLinearScaleAxisValueFormatter$$$$Init$($minValue$$8_scaleFactorDiff$$inline_3817$$, $maxValue$$8$$, $tickStep$$1$$, $i$$inline_9922_scale$$25_scale$$inline_9917_scaleName$$inline_9915$$, $autoPrecision$$3$$) {
  this.$_scales$ = {};
  this.$_scalesOrder$ = [];
  this.$_factorToScaleMapping$ = {};
  var $createScale$$inline_3797_useAutoPrecision$$inline_3815$$ = function $$createScale$$inline_3797_useAutoPrecision$$inline_3815$$$($minValue$$8_scaleFactorDiff$$inline_3817$$, $maxValue$$8$$, $tickStep$$1$$) {
    var $i$$inline_9922_scale$$25_scale$$inline_9917_scaleName$$inline_9915$$;
    this.$_bundle$ && $tickStep$$1$$ && ($i$$inline_9922_scale$$25_scale$$inline_9917_scaleName$$inline_9915$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$_bundle$, $tickStep$$1$$, D.$JSCompiler_alias_NULL$$));
    $tickStep$$1$$ = {$scaleFactor$:$maxValue$$8$$, $localizedSuffix$:$i$$inline_9922_scale$$25_scale$$inline_9917_scaleName$$inline_9915$$};
    this.$_scales$[$minValue$$8_scaleFactorDiff$$inline_3817$$] = $tickStep$$1$$;
    this.$_scalesOrder$.push($tickStep$$1$$);
    this.$_factorToScaleMapping$[$maxValue$$8$$] = $tickStep$$1$$
  };
  $createScale$$inline_3797_useAutoPrecision$$inline_3815$$.call(this, "none", 0);
  $createScale$$inline_3797_useAutoPrecision$$inline_3815$$.call(this, "thousand", 3, "SCALING_SUFFIX_THOUSAND");
  $createScale$$inline_3797_useAutoPrecision$$inline_3815$$.call(this, "million", 6, "SCALING_SUFFIX_MILLION");
  $createScale$$inline_3797_useAutoPrecision$$inline_3815$$.call(this, "billion", 9, "SCALING_SUFFIX_BILLION");
  $createScale$$inline_3797_useAutoPrecision$$inline_3815$$.call(this, "trillion", 12, "SCALING_SUFFIX_TRILLION");
  $createScale$$inline_3797_useAutoPrecision$$inline_3815$$.call(this, "quadrillion", 15, "SCALING_SUFFIX_QUADRILLION");
  this.$_scalesOrder$.sort(function($minValue$$8_scaleFactorDiff$$inline_3817$$, $maxValue$$8$$) {
    return $minValue$$8_scaleFactorDiff$$inline_3817$$.$scaleFactor$ < $maxValue$$8$$.$scaleFactor$ ? -1 : $minValue$$8_scaleFactorDiff$$inline_3817$$.$scaleFactor$ > $maxValue$$8$$.$scaleFactor$ ? 1 : 0
  });
  var $absMax$$inline_3816_findScale$$inline_3812_value$$inline_9920$$ = D.$JSCompiler_alias_FALSE$$, $decimalPlaces$$inline_3813$$, $scaleFactor$$inline_3814_scaleFactor$$inline_9916_scaleFactor$$inline_9921$$, $createScale$$inline_3797_useAutoPrecision$$inline_3815$$ = D.$JSCompiler_alias_FALSE$$;
  "off" !== $autoPrecision$$3$$ && ($createScale$$inline_3797_useAutoPrecision$$inline_3815$$ = D.$JSCompiler_alias_TRUE$$);
  $i$$inline_9922_scale$$25_scale$$inline_9917_scaleName$$inline_9915$$ || ($i$$inline_9922_scale$$25_scale$$inline_9917_scaleName$$inline_9915$$ = "auto");
  if($i$$inline_9922_scale$$25_scale$$inline_9917_scaleName$$inline_9915$$ = this.$_scales$[$i$$inline_9922_scale$$25_scale$$inline_9917_scaleName$$inline_9915$$]) {
    $scaleFactor$$inline_3814_scaleFactor$$inline_9916_scaleFactor$$inline_9921$$ = $i$$inline_9922_scale$$25_scale$$inline_9917_scaleName$$inline_9915$$.$scaleFactor$
  }
  "number" !== typeof $scaleFactor$$inline_3814_scaleFactor$$inline_9916_scaleFactor$$inline_9921$$ && ($absMax$$inline_3816_findScale$$inline_3812_value$$inline_9920$$ = D.$JSCompiler_alias_TRUE$$);
  if($absMax$$inline_3816_findScale$$inline_3812_value$$inline_9920$$) {
    if($absMax$$inline_3816_findScale$$inline_3812_value$$inline_9920$$ = window.Math.max(window.Math.abs($minValue$$8_scaleFactorDiff$$inline_3817$$), window.Math.abs($maxValue$$8$$)), $absMax$$inline_3816_findScale$$inline_3812_value$$inline_9920$$ = (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($absMax$$inline_3816_findScale$$inline_3812_value$$inline_9920$$), $scaleFactor$$inline_3814_scaleFactor$$inline_9916_scaleFactor$$inline_9921$$ = 0, $absMax$$inline_3816_findScale$$inline_3812_value$$inline_9920$$ <= 
    this.$_scalesOrder$[0].$scaleFactor$) {
      $scaleFactor$$inline_3814_scaleFactor$$inline_9916_scaleFactor$$inline_9921$$ = this.$_scalesOrder$[0].$scaleFactor$
    }else {
      if($absMax$$inline_3816_findScale$$inline_3812_value$$inline_9920$$ >= this.$_scalesOrder$[this.$_scalesOrder$.length - 1].$scaleFactor$) {
        $scaleFactor$$inline_3814_scaleFactor$$inline_9916_scaleFactor$$inline_9921$$ = this.$_scalesOrder$[this.$_scalesOrder$.length - 1].$scaleFactor$
      }else {
        for($i$$inline_9922_scale$$25_scale$$inline_9917_scaleName$$inline_9915$$ = this.$_scalesOrder$.length - 1;0 <= $i$$inline_9922_scale$$25_scale$$inline_9917_scaleName$$inline_9915$$;$i$$inline_9922_scale$$25_scale$$inline_9917_scaleName$$inline_9915$$--) {
          if(this.$_scalesOrder$[$i$$inline_9922_scale$$25_scale$$inline_9917_scaleName$$inline_9915$$].$scaleFactor$ <= $absMax$$inline_3816_findScale$$inline_3812_value$$inline_9920$$) {
            $scaleFactor$$inline_3814_scaleFactor$$inline_9916_scaleFactor$$inline_9921$$ = this.$_scalesOrder$[$i$$inline_9922_scale$$25_scale$$inline_9917_scaleName$$inline_9915$$].$scaleFactor$;
            break
          }
        }
      }
    }
  }
  $createScale$$inline_3797_useAutoPrecision$$inline_3815$$ === D.$JSCompiler_alias_TRUE$$ && (0 == $tickStep$$1$$ && $minValue$$8_scaleFactorDiff$$inline_3817$$ == $maxValue$$8$$ ? ($minValue$$8_scaleFactorDiff$$inline_3817$$ = $scaleFactor$$inline_3814_scaleFactor$$inline_9916_scaleFactor$$inline_9921$$ - (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($maxValue$$8$$), $decimalPlaces$$inline_3813$$ = 0 >= $minValue$$8_scaleFactorDiff$$inline_3817$$ ? 3 + $minValue$$8_scaleFactorDiff$$inline_3817$$ : 
  window.Math.max($minValue$$8_scaleFactorDiff$$inline_3817$$, 4)) : $decimalPlaces$$inline_3813$$ = window.Math.max($scaleFactor$$inline_3814_scaleFactor$$inline_9916_scaleFactor$$inline_9921$$ - (0,D.$JSCompiler_StaticMethods__getPowerOfTen$$)($tickStep$$1$$), 0));
  this.$_useAutoPrecision$ = $createScale$$inline_3797_useAutoPrecision$$inline_3815$$;
  this.$_scaleFactor$ = $scaleFactor$$inline_3814_scaleFactor$$inline_9916_scaleFactor$$inline_9921$$;
  this.$_decimalPlaces$ = $decimalPlaces$$inline_3813$$
};
D.$DvtLinearScaleAxisValueFormatter$$.prototype.$format$ = function $$DvtLinearScaleAxisValueFormatter$$$$$format$$($value$$101$$, $converter$$2$$) {
  var $formatted$$inline_3821_parsed$$ = (0,window.parseFloat)($value$$101$$);
  if((0,window.isNaN)($formatted$$inline_3821_parsed$$)) {
    return $value$$101$$
  }
  var $i$$365_suffix$$1$$;
  if(0 < this.$_scaleFactor$) {
    for($i$$365_suffix$$1$$ = 0;$i$$365_suffix$$1$$ < this.$_scaleFactor$;$i$$365_suffix$$1$$++) {
      $formatted$$inline_3821_parsed$$ /= 10
    }
    $i$$365_suffix$$1$$ = this.$_factorToScaleMapping$[this.$_scaleFactor$].$localizedSuffix$
  }
  if($converter$$2$$ && $converter$$2$$.getAsString) {
    $formatted$$inline_3821_parsed$$ = $converter$$2$$.getAsString($formatted$$inline_3821_parsed$$)
  }else {
    if($converter$$2$$ && $converter$$2$$.format) {
      $formatted$$inline_3821_parsed$$ = $converter$$2$$.format($formatted$$inline_3821_parsed$$)
    }else {
      if(this.$_useAutoPrecision$ && !(0,window.isNaN)((0,window.parseFloat)($formatted$$inline_3821_parsed$$)) && ($formatted$$inline_3821_parsed$$ = (0,window.parseFloat)((new window.Number($formatted$$inline_3821_parsed$$)).toFixed(this.$_decimalPlaces$)), $formatted$$inline_3821_parsed$$ = "" + $formatted$$inline_3821_parsed$$, 0 < this.$_decimalPlaces$)) {
        -1 == $formatted$$inline_3821_parsed$$.indexOf(".") && ($formatted$$inline_3821_parsed$$ += ".");
        for(var $existingPlacesCount$$inline_3822$$ = $formatted$$inline_3821_parsed$$.substring($formatted$$inline_3821_parsed$$.indexOf(".") + 1).length;$existingPlacesCount$$inline_3822$$ < this.$_decimalPlaces$;) {
          $formatted$$inline_3821_parsed$$ += "0", $existingPlacesCount$$inline_3822$$++
        }
      }
    }
  }
  "string" === typeof $i$$365_suffix$$1$$ && ($formatted$$inline_3821_parsed$$ += $i$$365_suffix$$1$$);
  return $formatted$$inline_3821_parsed$$
};
D.$JSCompiler_StaticMethods__getPowerOfTen$$ = function $$JSCompiler_StaticMethods__getPowerOfTen$$$($value$$103$$) {
  $value$$103$$ = 0 <= $value$$103$$ ? $value$$103$$ : -$value$$103$$;
  var $power$$1$$ = 0;
  if(1E-15 > $value$$103$$) {
    return 0
  }
  if(window.Infinity == $value$$103$$) {
    return window.Number.MAX_VALUE
  }
  if(10 <= $value$$103$$) {
    for(;10 <= $value$$103$$;) {
      $power$$1$$ += 1, $value$$103$$ /= 10
    }
  }else {
    if(1 > $value$$103$$) {
      for(;1 > $value$$103$$;) {
        $power$$1$$ -= 1, $value$$103$$ *= 10
      }
    }
  }
  return $power$$1$$
};
D.$DvtTimeAxisInfo$$ = function $$DvtTimeAxisInfo$$$($context$$158$$, $options$$143$$, $availSpace$$67$$) {
  this.Init($context$$158$$, $options$$143$$, $availSpace$$67$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeAxisInfo$$, D.$DvtAxisInfo$$, "DvtTimeAxisInfo");
D.$DvtTimeAxisInfo$$.prototype.Init = function $$DvtTimeAxisInfo$$$$Init$($context$$159_endOffset$$, $bundle$$10_options$$144$$, $availSpace$$68_startOffset$$) {
  D.$DvtTimeAxisInfo$$.$superclass$.Init.call(this, $context$$159_endOffset$$, $bundle$$10_options$$144$$, $availSpace$$68_startOffset$$);
  "top" == this.$Position$ || "bottom" == this.$Position$ ? (!$bundle$$10_options$$144$$._isOverview && "on" == $bundle$$10_options$$144$$.tickLabel.rendered && (this.$StartOverflow$ = window.Math.max(10 - $bundle$$10_options$$144$$.leftBuffer, 0), this.$EndOverflow$ = window.Math.max(10 - $bundle$$10_options$$144$$.rightBuffer, 0)), (0,D.$DvtAgent$isRightToLeft$$)($context$$159_endOffset$$) ? (this.$_minCoord$ = this.$EndCoord$ - this.$EndOverflow$, this.$_maxCoord$ = this.$StartCoord$ + this.$StartOverflow$) : 
  (this.$_minCoord$ = this.$StartCoord$ + this.$StartOverflow$, this.$_maxCoord$ = this.$EndCoord$ - this.$EndOverflow$)) : (this.$_minCoord$ = this.$StartCoord$, this.$_maxCoord$ = this.$EndCoord$);
  this.$_converter$ = D.$JSCompiler_alias_NULL$$;
  $bundle$$10_options$$144$$.tickLabel != D.$JSCompiler_alias_NULL$$ && (this.$_converter$ = $bundle$$10_options$$144$$.tickLabel.converter);
  this.$_groups$ = $bundle$$10_options$$144$$.groups;
  this.$DataMin$ = $bundle$$10_options$$144$$.dataMin;
  this.$DataMax$ = $bundle$$10_options$$144$$.dataMax;
  this.$_averageInterval$ = 0 < this.$_groups$.length ? (this.$DataMax$ - this.$DataMin$) / (this.$_groups$.length - 1) : 0;
  this.$_step$ = $bundle$$10_options$$144$$.step;
  $context$$159_endOffset$$ = 0 < $bundle$$10_options$$144$$.endGroupOffset ? $bundle$$10_options$$144$$.endGroupOffset * this.$_averageInterval$ : 0;
  $availSpace$$68_startOffset$$ = 0 < $bundle$$10_options$$144$$.startGroupOffset ? $bundle$$10_options$$144$$.startGroupOffset * this.$_averageInterval$ : 0;
  this.$GlobalMin$ = $bundle$$10_options$$144$$.min != D.$JSCompiler_alias_NULL$$ ? $bundle$$10_options$$144$$.min : this.$DataMin$ - $availSpace$$68_startOffset$$;
  this.$GlobalMax$ = $bundle$$10_options$$144$$.max != D.$JSCompiler_alias_NULL$$ ? $bundle$$10_options$$144$$.max : this.$DataMax$ + $context$$159_endOffset$$;
  this.$MinValue$ = $bundle$$10_options$$144$$.viewportMin == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMin$ : $bundle$$10_options$$144$$.viewportMin;
  this.$MaxValue$ = $bundle$$10_options$$144$$.viewportMax == D.$JSCompiler_alias_NULL$$ ? this.$GlobalMax$ : $bundle$$10_options$$144$$.viewportMax;
  $bundle$$10_options$$144$$.viewportStartGroup != D.$JSCompiler_alias_NULL$$ && (this.$MinValue$ = $bundle$$10_options$$144$$.viewportStartGroup - $availSpace$$68_startOffset$$);
  $bundle$$10_options$$144$$.viewportEndGroup != D.$JSCompiler_alias_NULL$$ && (this.$MaxValue$ = $bundle$$10_options$$144$$.viewportEndGroup + $context$$159_endOffset$$);
  this.$_timeZoneOffset$ = 0;
  this.$_timeRange$ = this.$MaxValue$ - this.$MinValue$;
  this.$_level2Coords$ = this.$_level1Coords$ = this.$_level2Labels$ = this.$_level1Labels$ = D.$JSCompiler_alias_NULL$$;
  this.$_isOneLevel$ = D.$JSCompiler_alias_TRUE$$;
  $bundle$$10_options$$144$$ = new D.$DvtUtilBundle$$;
  this.$_timeAxisResources$ = [(0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$144$$, "MONTH_SHORT_JANUARY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$144$$, "MONTH_SHORT_FEBRUARY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$144$$, "MONTH_SHORT_MARCH", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$144$$, 
  "MONTH_SHORT_APRIL", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$144$$, "MONTH_SHORT_MAY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$144$$, "MONTH_SHORT_JUNE", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$144$$, "MONTH_SHORT_JULY", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$144$$, 
  "MONTH_SHORT_AUGUST", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$144$$, "MONTH_SHORT_SEPTEMBER", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$144$$, "MONTH_SHORT_OCTOBER", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$144$$, "MONTH_SHORT_NOVEMBER", D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$10_options$$144$$, 
  "MONTH_SHORT_DECEMBER", D.$JSCompiler_alias_NULL$$)]
};
D.$JSCompiler_StaticMethods__formatAxisLabel$$ = function $$JSCompiler_StaticMethods__formatAxisLabel$$$($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, $prevDate$$) {
  var $label1$$ = D.$JSCompiler_alias_NULL$$, $label2$$ = D.$JSCompiler_alias_NULL$$, $isVert$$ = "left" == $JSCompiler_StaticMethods__formatAxisLabel$self$$.$Position$ || "right" == $JSCompiler_StaticMethods__formatAxisLabel$self$$.$Position$;
  if($JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$ && $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$.getAsString) {
    $label1$$ = $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$.getAsString($date$$13$$)
  }else {
    if($JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$ && $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$.format) {
      $label1$$ = $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_converter$.format($date$$13$$)
    }else {
      if(31536E6 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_step$) {
        $label1$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$)
      }else {
        if(31536E6 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$ || 24192E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_step$) {
          if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getMonth() != $date$$13$$.getMonth()) {
            $label1$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$)
          }
          if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getYear() != $date$$13$$.getYear()) {
            $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$)
          }
        }else {
          if(24192E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$ || 864E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_step$) {
            if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getDate() != $date$$13$$.getDate()) {
              $label1$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$)
            }
            $prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getYear() != $date$$13$$.getYear() ? $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$) : $prevDate$$.getMonth() != $date$$13$$.getMonth() && ($label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_FALSE$$, 
            D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$))
          }else {
            if(36E5 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_timeRange$ || 6E4 <= $JSCompiler_StaticMethods__formatAxisLabel$self$$.$_step$) {
              if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getHours() != $date$$13$$.getHours() || $prevDate$$.getMinutes() != $date$$13$$.getMinutes()) {
                $label1$$ = (0,D.$JSCompiler_StaticMethods__formatTime$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_FALSE$$)
              }
            }else {
              if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getSeconds() != $date$$13$$.getSeconds()) {
                $label1$$ = (0,D.$JSCompiler_StaticMethods__formatTime$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_TRUE$$)
              }
            }
            if($isVert$$) {
              if($prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getDate() != $date$$13$$.getDate()) {
                $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$)
              }
            }else {
              $prevDate$$ == D.$JSCompiler_alias_NULL$$ || $prevDate$$.getYear() != $date$$13$$.getYear() ? $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$) : $prevDate$$.getMonth() != $date$$13$$.getMonth() ? $label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_TRUE$$, 
              D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$) : $prevDate$$.getDate() != $date$$13$$.getDate() && ($label2$$ = (0,D.$JSCompiler_StaticMethods__formatDate$$)($JSCompiler_StaticMethods__formatAxisLabel$self$$, $date$$13$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$))
            }
          }
        }
      }
    }
  }
  return[$label1$$, $label2$$]
};
D.$JSCompiler_StaticMethods__formatDate$$ = function $$JSCompiler_StaticMethods__formatDate$$$($JSCompiler_StaticMethods__formatDate$self_dateStr$$, $date$$14_dayStr$$, $showDay$$, $showMonth$$, $showYear$$) {
  var $yearStr$$ = $date$$14_dayStr$$.getFullYear(), $monthStr$$;
  $monthStr$$ = $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$ && 12 <= $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$.length ? $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$[$date$$14_dayStr$$.getMonth()] : $date$$14_dayStr$$.toString().split(" ")[1];
  $date$$14_dayStr$$ = $date$$14_dayStr$$.getDate();
  if($JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$ && 17 < $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$.length) {
    var $dayChar_dmyOrder$$ = $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$[17], $yearStr$$ = $yearStr$$ + $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$[16];
    $date$$14_dayStr$$ += $dayChar_dmyOrder$$
  }
  $dayChar_dmyOrder$$ = "DMY";
  $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$ && 15 < $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$.length && ($dayChar_dmyOrder$$ = $JSCompiler_StaticMethods__formatDate$self_dateStr$$.$_timeAxisResources$[15]);
  $JSCompiler_StaticMethods__formatDate$self_dateStr$$ = "";
  for(var $i$$352$$ = 0;$i$$352$$ < $dayChar_dmyOrder$$.length;$i$$352$$++) {
    $showDay$$ && "D" == $dayChar_dmyOrder$$[$i$$352$$] ? $JSCompiler_StaticMethods__formatDate$self_dateStr$$ += $date$$14_dayStr$$ + " " : $showMonth$$ && "M" == $dayChar_dmyOrder$$[$i$$352$$] ? $JSCompiler_StaticMethods__formatDate$self_dateStr$$ += $monthStr$$ + " " : $showYear$$ && "Y" == $dayChar_dmyOrder$$[$i$$352$$] && ($JSCompiler_StaticMethods__formatDate$self_dateStr$$ += $yearStr$$ + " ")
  }
  return 0 < $JSCompiler_StaticMethods__formatDate$self_dateStr$$.length ? $JSCompiler_StaticMethods__formatDate$self_dateStr$$.slice(0, $JSCompiler_StaticMethods__formatDate$self_dateStr$$.length - 1) : $JSCompiler_StaticMethods__formatDate$self_dateStr$$
};
D.$JSCompiler_StaticMethods__formatTime$$ = function $$JSCompiler_StaticMethods__formatTime$$$($JSCompiler_StaticMethods__formatTime$self_b12HFormat$$, $date$$15_secs$$, $showSecond$$) {
  var $hours_timeLabel$$ = $date$$15_secs$$.getHours(), $mins$$ = $date$$15_secs$$.getMinutes();
  $date$$15_secs$$ = $date$$15_secs$$.getSeconds();
  var $am$$ = "", $pm$$1$$ = "", $ampmBefore$$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$ != D.$JSCompiler_alias_NULL$$ && 14 < $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$ && ($am$$ = $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$[window.DvtTimeAxis.$AM_INDEX$], $pm$$1$$ = $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$[window.DvtTimeAxis.$PM_INDEX$], $ampmBefore$$ = "t" == $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$.$_timeAxisResources$[14]);
  $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$ = "" != $am$$ && "" != $pm$$1$$;
  var $ampm$$;
  $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$ && ($ampm$$ = $pm$$1$$, 12 < $hours_timeLabel$$ ? ($hours_timeLabel$$ -= 12, $ampm$$ = $pm$$1$$) : 0 == $hours_timeLabel$$ ? ($ampm$$ = $am$$, $hours_timeLabel$$ = 12) : 12 > $hours_timeLabel$$ && ($ampm$$ = $am$$));
  $hours_timeLabel$$ = (10 > $hours_timeLabel$$ ? "0" + $hours_timeLabel$$ : "" + $hours_timeLabel$$) + ":" + (10 > $mins$$ ? "0" + $mins$$ : "" + $mins$$);
  $showSecond$$ && ($hours_timeLabel$$ += ":" + (10 > $date$$15_secs$$ ? "0" + $date$$15_secs$$ : "" + $date$$15_secs$$));
  return $JSCompiler_StaticMethods__formatTime$self_b12HFormat$$ ? $ampmBefore$$ ? $ampm$$ + " " + $hours_timeLabel$$ : $hours_timeLabel$$ + " " + $ampm$$ : $hours_timeLabel$$
};
D.$DvtTimeAxisInfo$_getLabelPositions$$ = function $$DvtTimeAxisInfo$_getLabelPositions$$$($start$$25_time$$3$$, $end$$18$$, $step$$1$$) {
  var $anchor_times$$ = (new window.Date((new window.Date($start$$25_time$$3$$)).getFullYear(), 0, 1, 0, 0, 0)).getTime();
  $start$$25_time$$3$$ = $anchor_times$$ + window.Math.ceil(($start$$25_time$$3$$ - $anchor_times$$) / $step$$1$$) * $step$$1$$;
  for($anchor_times$$ = [];$start$$25_time$$3$$ <= $end$$18$$;) {
    $anchor_times$$.push($start$$25_time$$3$$), $start$$25_time$$3$$ += $step$$1$$
  }
  return $anchor_times$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTimeAxisInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_generateLabels$ = function $$JSCompiler_prototypeAlias$$$$_generateLabels$$($context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$) {
  var $labels1$$ = [], $labels2$$ = [], $coords1$$ = [], $coords2$$ = [], $label1$$1_prevDate$$1_text$$29$$ = D.$JSCompiler_alias_NULL$$, $c1$$2_count$$inline_3760_dims$$inline_3789_minSkip_shortLabelDims$$inline_3756$$ = 0, $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$ = 0, $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$ = $context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$.$_stage$, 
  $fontSize$$inline_3767_gap$$inline_3768_isRTL$$6_labelDims$$inline_3754_skippedLabels$$inline_3758$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$), $isVert$$1_labels1$$inline_3777$$ = "left" == this.$Position$ || "right" == this.$Position$, $j$$70_labels2$$inline_3778_scrollable$$ = "off" != this.$Options$.zoomAndScroll;
  if($j$$70_labels2$$inline_3778_scrollable$$) {
    var $bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$ = D.$JSCompiler_alias_TRUE$$
  }
  var $count$$inline_3769_levelsGap_minSkip$$inline_3755_n$$inline_3761$$ = 0;
  $isVert$$1_labels1$$inline_3777$$ && (0,D.$DvtAgent$isBrowserChrome$$)() && ($count$$inline_3769_levelsGap_minSkip$$inline_3755_n$$inline_3761$$ = 0.2 * (0,window.parseInt)(this.$Options$.tickLabel.style.$getStyle$("font-size")));
  var $pointB1$$inline_3772_times$$1$$ = [], $c1$$2_count$$inline_3760_dims$$inline_3789_minSkip_shortLabelDims$$inline_3756$$ = 0;
  this.$_step$ != D.$JSCompiler_alias_NULL$$ ? $pointB1$$inline_3772_times$$1$$ = (0,D.$DvtTimeAxisInfo$_getLabelPositions$$)(this.$MinValue$, this.$MaxValue$, this.$_step$) : "mixedFrequency" == this.$Options$.timeAxisType ? (this.$_step$ = 316224E5 <= this.$_averageInterval$ ? 316224E5 : 26784E5 <= this.$_averageInterval$ ? 26784E5 : 864E5 <= this.$_averageInterval$ ? 864E5 : 36E5 <= this.$_averageInterval$ ? 36E5 : 6E4 <= this.$_averageInterval$ ? 6E4 : 1E3, $pointB1$$inline_3772_times$$1$$ = 
  (0,D.$DvtTimeAxisInfo$_getLabelPositions$$)(this.$MinValue$, this.$MaxValue$, this.$_step$), $c1$$2_count$$inline_3760_dims$$inline_3789_minSkip_shortLabelDims$$inline_3756$$ = window.Math.floor(this.$_averageInterval$ / this.$_step$) - 1) : ($pointB1$$inline_3772_times$$1$$ = this.$_groups$, this.$_step$ = this.$_averageInterval$);
  for(var $i$$353_pointB2$$inline_3773$$ = 0;$i$$353_pointB2$$inline_3773$$ < $pointB1$$inline_3772_times$$1$$.length;$i$$353_pointB2$$inline_3773$$++) {
    window.time = $pointB1$$inline_3772_times$$1$$[$i$$353_pointB2$$inline_3773$$];
    var $coord$$17_j$$inline_3774$$ = this.$getCoordAt$(window.time);
    if($coord$$17_j$$inline_3774$$ != D.$JSCompiler_alias_NULL$$) {
      var $date$$16$$ = new window.Date(window.time + this.$_timeZoneOffset$), $label2$$1_twoLabels$$1$$ = (0,D.$JSCompiler_StaticMethods__formatAxisLabel$$)(this, $date$$16$$, $label1$$1_prevDate$$1_text$$29$$), $label1$$1_prevDate$$1_text$$29$$ = $label2$$1_twoLabels$$1$$[0], $label2$$1_twoLabels$$1$$ = $label2$$1_twoLabels$$1$$[1];
      $label1$$1_prevDate$$1_text$$29$$ != D.$JSCompiler_alias_NULL$$ ? ($label2$$1_twoLabels$$1$$ != D.$JSCompiler_alias_NULL$$ ? $labels1$$.push(this.$CreateLabel$($context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$, $label1$$1_prevDate$$1_text$$29$$, $coord$$17_j$$inline_3774$$ + $count$$inline_3769_levelsGap_minSkip$$inline_3755_n$$inline_3761$$)) : $labels1$$.push(this.$CreateLabel$($context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$, 
      $label1$$1_prevDate$$1_text$$29$$, $coord$$17_j$$inline_3774$$)), $coords1$$.push($coord$$17_j$$inline_3774$$)) : ($labels1$$.push(D.$JSCompiler_alias_NULL$$), $coords1$$.push(D.$JSCompiler_alias_NULL$$));
      $j$$70_labels2$$inline_3778_scrollable$$ && $bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$ && ($coord$$17_j$$inline_3774$$ = this.$MinValue$ ? this.$getCoordAt$(this.$MinValue$) : $coord$$17_j$$inline_3774$$, $bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$ = D.$JSCompiler_alias_FALSE$$);
      $label2$$1_twoLabels$$1$$ != D.$JSCompiler_alias_NULL$$ ? ($label1$$1_prevDate$$1_text$$29$$ = D.$JSCompiler_alias_NULL$$, $label1$$1_prevDate$$1_text$$29$$ = $label2$$1_twoLabels$$1$$ != D.$JSCompiler_alias_NULL$$ ? this.$CreateLabel$($context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$, $label2$$1_twoLabels$$1$$, $coord$$17_j$$inline_3774$$ - $count$$inline_3769_levelsGap_minSkip$$inline_3755_n$$inline_3761$$) : this.$CreateLabel$($context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$, 
      $label2$$1_twoLabels$$1$$, $coord$$17_j$$inline_3774$$), $coords2$$.push($coord$$17_j$$inline_3774$$), $isVert$$1_labels1$$inline_3777$$ || ($fontSize$$inline_3767_gap$$inline_3768_isRTL$$6_labelDims$$inline_3754_skippedLabels$$inline_3758$$ ? $label1$$1_prevDate$$1_text$$29$$.$alignRight$() : $label1$$1_prevDate$$1_text$$29$$.$alignLeft$()), $labels2$$.push($label1$$1_prevDate$$1_text$$29$$), this.$_isOneLevel$ = D.$JSCompiler_alias_FALSE$$) : ($labels2$$.push(D.$JSCompiler_alias_NULL$$), 
      $coords2$$.push(D.$JSCompiler_alias_NULL$$));
      $label1$$1_prevDate$$1_text$$29$$ = $date$$16$$
    }
  }
  $context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$ = $labels1$$;
  $fontSize$$inline_3767_gap$$inline_3768_isRTL$$6_labelDims$$inline_3754_skippedLabels$$inline_3758$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels1$$, $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$);
  $count$$inline_3769_levelsGap_minSkip$$inline_3755_n$$inline_3761$$ = $c1$$2_count$$inline_3760_dims$$inline_3789_minSkip_shortLabelDims$$inline_3756$$;
  $c1$$2_count$$inline_3760_dims$$inline_3789_minSkip_shortLabelDims$$inline_3756$$ = [];
  for($bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$ = 0;$bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$ < $fontSize$$inline_3767_gap$$inline_3768_isRTL$$6_labelDims$$inline_3754_skippedLabels$$inline_3758$$.length;$bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$++) {
    $fontSize$$inline_3767_gap$$inline_3768_isRTL$$6_labelDims$$inline_3754_skippedLabels$$inline_3758$$[$bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$] != D.$JSCompiler_alias_NULL$$ && $c1$$2_count$$inline_3760_dims$$inline_3789_minSkip_shortLabelDims$$inline_3756$$.push($fontSize$$inline_3767_gap$$inline_3768_isRTL$$6_labelDims$$inline_3754_skippedLabels$$inline_3758$$[$bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$])
  }
  $fontSize$$inline_3767_gap$$inline_3768_isRTL$$6_labelDims$$inline_3754_skippedLabels$$inline_3758$$ = $count$$inline_3769_levelsGap_minSkip$$inline_3755_n$$inline_3761$$;
  for($bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $c1$$2_count$$inline_3760_dims$$inline_3789_minSkip_shortLabelDims$$inline_3756$$, $fontSize$$inline_3767_gap$$inline_3768_isRTL$$6_labelDims$$inline_3754_skippedLabels$$inline_3758$$);$bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$;) {
    $fontSize$$inline_3767_gap$$inline_3768_isRTL$$6_labelDims$$inline_3754_skippedLabels$$inline_3758$$++, $bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$ = (0,D.$JSCompiler_StaticMethods_IsOverlapping$$)(this, $c1$$2_count$$inline_3760_dims$$inline_3789_minSkip_shortLabelDims$$inline_3756$$, $fontSize$$inline_3767_gap$$inline_3768_isRTL$$6_labelDims$$inline_3754_skippedLabels$$inline_3758$$)
  }
  $c1$$2_count$$inline_3760_dims$$inline_3789_minSkip_shortLabelDims$$inline_3756$$ = $c1$$2_count$$inline_3760_dims$$inline_3789_minSkip_shortLabelDims$$inline_3756$$.length;
  if(0 < $fontSize$$inline_3767_gap$$inline_3768_isRTL$$6_labelDims$$inline_3754_skippedLabels$$inline_3758$$) {
    for($bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$ = $count$$inline_3769_levelsGap_minSkip$$inline_3755_n$$inline_3761$$ = 0;$bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$ < $context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$.length;$bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$++) {
      $context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$[$bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$] != D.$JSCompiler_alias_NULL$$ && (0 != $count$$inline_3769_levelsGap_minSkip$$inline_3755_n$$inline_3761$$ % ($fontSize$$inline_3767_gap$$inline_3768_isRTL$$6_labelDims$$inline_3754_skippedLabels$$inline_3758$$ + 1) && ($context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$[$bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$] = 
      D.$JSCompiler_alias_NULL$$, $c1$$2_count$$inline_3760_dims$$inline_3789_minSkip_shortLabelDims$$inline_3756$$--), $count$$inline_3769_levelsGap_minSkip$$inline_3755_n$$inline_3761$$++)
    }
  }
  $context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$ = $labels2$$;
  $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$ = (0,D.$JSCompiler_StaticMethods_GetLabelDims$$)($labels2$$, $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$);
  if(!$c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$ || 0 >= $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$.length) {
    $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$ = D.$JSCompiler_alias_FALSE$$
  }else {
    for(var $bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$ = "left" == this.$Position$ || "right" == this.$Position$, $fontSize$$inline_3767_gap$$inline_3768_isRTL$$6_labelDims$$inline_3754_skippedLabels$$inline_3758$$ = (0,window.parseInt)(this.$Options$.tickLabel.style.$getStyle$("font-size")), $fontSize$$inline_3767_gap$$inline_3768_isRTL$$6_labelDims$$inline_3754_skippedLabels$$inline_3758$$ = $bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$ ? 
    0.1 * $fontSize$$inline_3767_gap$$inline_3768_isRTL$$6_labelDims$$inline_3754_skippedLabels$$inline_3758$$ : 0.3 * $fontSize$$inline_3767_gap$$inline_3768_isRTL$$6_labelDims$$inline_3754_skippedLabels$$inline_3758$$, $count$$inline_3769_levelsGap_minSkip$$inline_3755_n$$inline_3761$$ = 0, $isOverlapping$$inline_3781_pointA1$$inline_3770$$, $i$$inline_3784_pointA2$$inline_3771$$, $coord$$17_j$$inline_3774$$ = 0;$coord$$17_j$$inline_3774$$ < $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$.length;$coord$$17_j$$inline_3774$$++) {
      $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$[$coord$$17_j$$inline_3774$$] != D.$JSCompiler_alias_NULL$$ && ($bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$ ? ($pointB1$$inline_3772_times$$1$$ = $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$[$coord$$17_j$$inline_3774$$].y, $i$$353_pointB2$$inline_3773$$ = $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$[$coord$$17_j$$inline_3774$$].y + 
      $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$[$coord$$17_j$$inline_3774$$].$h$) : ($pointB1$$inline_3772_times$$1$$ = $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$[$coord$$17_j$$inline_3774$$].x, $i$$353_pointB2$$inline_3773$$ = $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$[$coord$$17_j$$inline_3774$$].x + $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$[$coord$$17_j$$inline_3774$$].$w$), 
      $isOverlapping$$inline_3781_pointA1$$inline_3770$$ != D.$JSCompiler_alias_NULL$$ && ($i$$inline_3784_pointA2$$inline_3771$$ != D.$JSCompiler_alias_NULL$$ && ($pointB1$$inline_3772_times$$1$$ >= $isOverlapping$$inline_3781_pointA1$$inline_3770$$ && $pointB1$$inline_3772_times$$1$$ - $fontSize$$inline_3767_gap$$inline_3768_isRTL$$6_labelDims$$inline_3754_skippedLabels$$inline_3758$$ < $i$$inline_3784_pointA2$$inline_3771$$ || $pointB1$$inline_3772_times$$1$$ < $isOverlapping$$inline_3781_pointA1$$inline_3770$$ && 
      $i$$353_pointB2$$inline_3773$$ + $fontSize$$inline_3767_gap$$inline_3768_isRTL$$6_labelDims$$inline_3754_skippedLabels$$inline_3758$$ > $isOverlapping$$inline_3781_pointA1$$inline_3770$$)) && ($context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$[$coord$$17_j$$inline_3774$$] = D.$JSCompiler_alias_NULL$$), $context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$[$coord$$17_j$$inline_3774$$] != 
      D.$JSCompiler_alias_NULL$$ && ($isOverlapping$$inline_3781_pointA1$$inline_3770$$ = $pointB1$$inline_3772_times$$1$$, $i$$inline_3784_pointA2$$inline_3771$$ = $i$$353_pointB2$$inline_3773$$, $count$$inline_3769_levelsGap_minSkip$$inline_3755_n$$inline_3761$$++))
    }
    $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$ = $count$$inline_3769_levelsGap_minSkip$$inline_3755_n$$inline_3761$$
  }
  if(!$j$$70_labels2$$inline_3778_scrollable$$ && 1 < $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$ && $c1$$2_count$$inline_3760_dims$$inline_3789_minSkip_shortLabelDims$$inline_3756$$ <= 1.5 * $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$) {
    $labels1$$ = $labels2$$;
    $labels2$$ = D.$JSCompiler_alias_NULL$$;
    for($j$$70_labels2$$inline_3778_scrollable$$ = 0;$j$$70_labels2$$inline_3778_scrollable$$ < $labels1$$.length;$j$$70_labels2$$inline_3778_scrollable$$++) {
      $labels1$$[$j$$70_labels2$$inline_3778_scrollable$$] != D.$JSCompiler_alias_NULL$$ && $labels1$$[$j$$70_labels2$$inline_3778_scrollable$$].$alignCenter$()
    }
  }
  if($isVert$$1_labels1$$inline_3777$$ && $labels2$$ != D.$JSCompiler_alias_NULL$$) {
    var $isVert$$1_labels1$$inline_3777$$ = $labels1$$, $j$$70_labels2$$inline_3778_scrollable$$ = $labels2$$, $gap$$inline_3780$$ = 0.1 * (0,window.parseInt)(this.$Options$.tickLabel.style.$getStyle$("font-size"));
    $isOverlapping$$inline_3781_pointA1$$inline_3770$$ = function $$isOverlapping$$inline_3781_pointA1$$inline_3770$$$($context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$, $labels1$$) {
      return $labels1$$.y >= $context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$.y && $labels1$$.y - $gap$$inline_3780$$ < $context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$.y + $context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$.$h$ || $labels1$$.y < $context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$.y && 
      $labels1$$.y + $labels1$$.$h$ + $gap$$inline_3780$$ > $context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$.y ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
    };
    $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$ = D.$JSCompiler_alias_NULL$$;
    $context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$ = D.$JSCompiler_alias_FALSE$$;
    for($i$$inline_3784_pointA2$$inline_3771$$ = 0;$i$$inline_3784_pointA2$$inline_3771$$ < $isVert$$1_labels1$$inline_3777$$.length;$i$$inline_3784_pointA2$$inline_3771$$++) {
      if($isVert$$1_labels1$$inline_3777$$[$i$$inline_3784_pointA2$$inline_3771$$] && $j$$70_labels2$$inline_3778_scrollable$$[$i$$inline_3784_pointA2$$inline_3771$$]) {
        if($isVert$$1_labels1$$inline_3777$$[$i$$inline_3784_pointA2$$inline_3771$$].$alignTop$(), $j$$70_labels2$$inline_3778_scrollable$$[$i$$inline_3784_pointA2$$inline_3771$$].$alignBottom$(), $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$ && $isOverlapping$$inline_3781_pointA1$$inline_3770$$($c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$, $isVert$$1_labels1$$inline_3777$$[$i$$inline_3784_pointA2$$inline_3771$$].$measureDimensions$())) {
          $context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$ = D.$JSCompiler_alias_TRUE$$;
          break
        }else {
          if($isVert$$1_labels1$$inline_3777$$[$i$$inline_3784_pointA2$$inline_3771$$ + 1] && $isOverlapping$$inline_3781_pointA1$$inline_3770$$($isVert$$1_labels1$$inline_3777$$[$i$$inline_3784_pointA2$$inline_3771$$].$measureDimensions$(), $isVert$$1_labels1$$inline_3777$$[$i$$inline_3784_pointA2$$inline_3771$$ + 1].$measureDimensions$())) {
            $context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$ = D.$JSCompiler_alias_TRUE$$;
            break
          }else {
            $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$ = $j$$70_labels2$$inline_3778_scrollable$$[$i$$inline_3784_pointA2$$inline_3771$$].$measureDimensions$()
          }
        }
      }else {
        if($isVert$$1_labels1$$inline_3777$$[$i$$inline_3784_pointA2$$inline_3771$$] || $j$$70_labels2$$inline_3778_scrollable$$[$i$$inline_3784_pointA2$$inline_3771$$]) {
          if($bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$ = $isVert$$1_labels1$$inline_3777$$[$i$$inline_3784_pointA2$$inline_3771$$] ? $isVert$$1_labels1$$inline_3777$$[$i$$inline_3784_pointA2$$inline_3771$$] : $j$$70_labels2$$inline_3778_scrollable$$[$i$$inline_3784_pointA2$$inline_3771$$], $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$ && $isOverlapping$$inline_3781_pointA1$$inline_3770$$($c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$, 
          $bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$.$measureDimensions$())) {
            $context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$ = D.$JSCompiler_alias_TRUE$$;
            break
          }else {
            $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$ = $bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$.$measureDimensions$()
          }
        }
      }
    }
    if($context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$) {
      $bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$ = $context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$ = $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$ = D.$JSCompiler_alias_NULL$$;
      for($i$$inline_3784_pointA2$$inline_3771$$ = 0;$i$$inline_3784_pointA2$$inline_3771$$ < $isVert$$1_labels1$$inline_3777$$.length;$i$$inline_3784_pointA2$$inline_3771$$++) {
        $j$$70_labels2$$inline_3778_scrollable$$[$i$$inline_3784_pointA2$$inline_3771$$] ? ($isVert$$1_labels1$$inline_3777$$[$i$$inline_3784_pointA2$$inline_3771$$] = D.$JSCompiler_alias_NULL$$, $j$$70_labels2$$inline_3778_scrollable$$[$i$$inline_3784_pointA2$$inline_3771$$].$alignMiddle$(), $c1$$2_count$$inline_3760_dims$$inline_3789_minSkip_shortLabelDims$$inline_3756$$ = $j$$70_labels2$$inline_3778_scrollable$$[$i$$inline_3784_pointA2$$inline_3771$$].$measureDimensions$(), $context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$ && 
        $isOverlapping$$inline_3781_pointA1$$inline_3770$$($context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$, $c1$$2_count$$inline_3760_dims$$inline_3789_minSkip_shortLabelDims$$inline_3756$$) && ($isVert$$1_labels1$$inline_3777$$[$c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$] = D.$JSCompiler_alias_NULL$$), $bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$ = 
        $c1$$2_count$$inline_3760_dims$$inline_3789_minSkip_shortLabelDims$$inline_3756$$) : $isVert$$1_labels1$$inline_3777$$[$i$$inline_3784_pointA2$$inline_3771$$] && ($c1$$2_count$$inline_3760_dims$$inline_3789_minSkip_shortLabelDims$$inline_3756$$ = $isVert$$1_labels1$$inline_3777$$[$i$$inline_3784_pointA2$$inline_3771$$].$measureDimensions$(), $bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$ && $isOverlapping$$inline_3781_pointA1$$inline_3770$$($bOverlaps$$inline_3759_first$$2_isVert$$inline_3766_j$$inline_3757_label$$inline_3785_lastLv2Dims$$inline_3788$$, 
        $c1$$2_count$$inline_3760_dims$$inline_3789_minSkip_shortLabelDims$$inline_3756$$) ? $isVert$$1_labels1$$inline_3777$$[$i$$inline_3784_pointA2$$inline_3771$$] = D.$JSCompiler_alias_NULL$$ : ($context$$160_labels$$inline_3753_labels$$inline_3764_lastLv1Dims$$inline_3787_overlapping$$inline_3783$$ = $c1$$2_count$$inline_3760_dims$$inline_3789_minSkip_shortLabelDims$$inline_3756$$, $c2$$2_container$$80_labelDims$$inline_3765_lastDims$$inline_3782_lastLv1Idx$$inline_3786$$ = $i$$inline_3784_pointA2$$inline_3771$$))
      }
    }
  }
  this.$_level1Labels$ = $labels1$$;
  this.$_level2Labels$ = $labels2$$;
  this.$_level1Coords$ = $coords1$$;
  this.$_level2Coords$ = $coords2$$
};
D.$JSCompiler_prototypeAlias$$.$getLabels$ = function $$JSCompiler_prototypeAlias$$$$getLabels$$($context$$161$$, $levelIdx$$1$$) {
  if($levelIdx$$1$$ && 1 < $levelIdx$$1$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  this.$_level1Labels$ || this.$_generateLabels$($context$$161$$);
  return 1 == $levelIdx$$1$$ ? this.$_level2Labels$ : this.$_level1Labels$
};
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = function $$JSCompiler_prototypeAlias$$$$getAxisLine$$($context$$162$$) {
  var $axisLineOptions$$1_axisLineStroke$$1$$ = this.$Options$.axisLine;
  return"on" == $axisLineOptions$$1_axisLineStroke$$1$$.rendered ? ($axisLineOptions$$1_axisLineStroke$$1$$ = new D.$DvtSolidStroke$$($axisLineOptions$$1_axisLineStroke$$1$$.lineColor, 1, $axisLineOptions$$1_axisLineStroke$$1$$.lineWidth), (0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$162$$, $axisLineOptions$$1_axisLineStroke$$1$$, 10)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$($context$$163$$) {
  var $gridlines$$3_majorTickOptions$$1$$ = this.$Options$.majorTick;
  if("on" != $gridlines$$3_majorTickOptions$$1$$.rendered) {
    return[]
  }
  var $coords$$14$$ = [];
  if(this.$_isOneLevel$) {
    for(var $i$$355$$ = 0;$i$$355$$ < this.$_level1Coords$.length;$i$$355$$++) {
      this.$_level1Coords$[$i$$355$$] != D.$JSCompiler_alias_NULL$$ && this.$_level1Labels$[$i$$355$$] != D.$JSCompiler_alias_NULL$$ && $coords$$14$$.push(this.$_level1Coords$[$i$$355$$])
    }
  }else {
    for($i$$355$$ = 0;$i$$355$$ < this.$_level2Coords$.length;$i$$355$$++) {
      this.$_level2Coords$[$i$$355$$] != D.$JSCompiler_alias_NULL$$ && $coords$$14$$.push(this.$_level2Coords$[$i$$355$$])
    }
  }
  var $majorTickStroke$$1$$ = new D.$DvtSolidStroke$$($gridlines$$3_majorTickOptions$$1$$.lineColor, 1, $gridlines$$3_majorTickOptions$$1$$.lineWidth);
  $gridlines$$3_majorTickOptions$$1$$.lineStyle && $majorTickStroke$$1$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($gridlines$$3_majorTickOptions$$1$$.lineStyle));
  $gridlines$$3_majorTickOptions$$1$$ = [];
  for($i$$355$$ = 0;$i$$355$$ < $coords$$14$$.length;$i$$355$$++) {
    $coords$$14$$[$i$$355$$] >= this.$_minCoord$ && $coords$$14$$[$i$$355$$] <= this.$_maxCoord$ && $gridlines$$3_majorTickOptions$$1$$.push((0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$163$$, $majorTickStroke$$1$$, $coords$$14$$[$i$$355$$]))
  }
  return $gridlines$$3_majorTickOptions$$1$$
};
D.$JSCompiler_prototypeAlias$$.$getMinorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMinorGridLines$$($context$$164$$) {
  var $gridlines$$4_minorTickOptions$$1$$ = this.$Options$.minorTick;
  if("on" != $gridlines$$4_minorTickOptions$$1$$.rendered || this.$_isOneLevel$) {
    return[]
  }
  for(var $coords$$15$$ = [], $i$$356$$ = 0;$i$$356$$ < this.$_level1Coords$.length;$i$$356$$++) {
    this.$_level1Coords$[$i$$356$$] != D.$JSCompiler_alias_NULL$$ && this.$_level1Labels$[$i$$356$$] != D.$JSCompiler_alias_NULL$$ && $coords$$15$$.push(this.$_level1Coords$[$i$$356$$])
  }
  var $minorTickStroke$$1$$ = new D.$DvtSolidStroke$$($gridlines$$4_minorTickOptions$$1$$.lineColor, 1, $gridlines$$4_minorTickOptions$$1$$.lineWidth);
  $gridlines$$4_minorTickOptions$$1$$.lineStyle && $minorTickStroke$$1$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($gridlines$$4_minorTickOptions$$1$$.lineStyle));
  $gridlines$$4_minorTickOptions$$1$$ = [];
  for($i$$356$$ = 0;$i$$356$$ < $coords$$15$$.length;$i$$356$$++) {
    $coords$$15$$[$i$$356$$] >= this.$_minCoord$ && $coords$$15$$[$i$$356$$] <= this.$_maxCoord$ && $gridlines$$4_minorTickOptions$$1$$.push((0,D.$JSCompiler_StaticMethods_CreateGridLine$$)(this, $context$$164$$, $minorTickStroke$$1$$, $coords$$15$$[$i$$356$$]))
  }
  return $gridlines$$4_minorTickOptions$$1$$
};
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$91$$) {
  return $value$$91$$ < this.$MinValue$ || $value$$91$$ > this.$MaxValue$ ? D.$JSCompiler_alias_NULL$$ : this.$getUnboundedCoordAt$($value$$91$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$19$$) {
  var $minCoord$$4$$ = window.Math.min(this.$_minCoord$, this.$_maxCoord$), $maxCoord$$4$$ = window.Math.max(this.$_minCoord$, this.$_maxCoord$);
  $coord$$19$$ < $minCoord$$4$$ ? $coord$$19$$ = $minCoord$$4$$ : $coord$$19$$ > $maxCoord$$4$$ && ($coord$$19$$ = $maxCoord$$4$$);
  return this.$getUnboundedValueAt$($coord$$19$$)
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$92$$) {
  $value$$92$$ < this.$MinValue$ ? $value$$92$$ = this.$MinValue$ : $value$$92$$ > this.$MaxValue$ && ($value$$92$$ = this.$MaxValue$);
  return this.$getUnboundedCoordAt$($value$$92$$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$20$$) {
  return this.$MinValue$ + ($coord$$20$$ - this.$_minCoord$) / (this.$_maxCoord$ - this.$_minCoord$) * (this.$MaxValue$ - this.$MinValue$)
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$93$$) {
  return this.$_minCoord$ + ($value$$93$$ - this.$MinValue$) / (this.$MaxValue$ - this.$MinValue$) * (this.$_maxCoord$ - this.$_minCoord$)
};
D.$JSCompiler_prototypeAlias$$.$getGroupWidth$ = function $$JSCompiler_prototypeAlias$$$$getGroupWidth$$() {
  return window.Math.abs(this.$getUnboundedCoordAt$(this.$MinValue$ + this.$_averageInterval$) - this.$getUnboundedCoordAt$(this.$MinValue$))
};
D.$JSCompiler_prototypeAlias$$.$getMinimumExtent$ = (0,D.$JSCompiler_get$$)("$_averageInterval$");
D.$JSCompiler_prototypeAlias$$.$getStartOverflow$ = function $$JSCompiler_prototypeAlias$$$$getStartOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? this.$EndOverflow$ : this.$StartOverflow$
};
D.$JSCompiler_prototypeAlias$$.$getEndOverflow$ = function $$JSCompiler_prototypeAlias$$$$getEndOverflow$$() {
  return("top" == this.$Position$ || "bottom" == this.$Position$) && (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? this.$StartOverflow$ : this.$EndOverflow$
};
});