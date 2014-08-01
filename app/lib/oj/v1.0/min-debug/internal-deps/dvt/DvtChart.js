define(['./DvtToolkit', './DvtAxis', './DvtLegend', './DvtOverview'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtGraphSelectableArc$$ = function $$DvtGraphSelectableArc$$$($context$$10$$, $cx$$, $cy$$, $rx$$, $ry$$, $sa$$, $ae$$, $clos$$, $id$$4$$) {
  this.Init($context$$10$$, $cx$$, $cy$$, $rx$$, $ry$$, $sa$$, $ae$$, $clos$$, $id$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGraphSelectableArc$$, D.$DvtArc$$, "DvtGraphSelectableArc");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGraphSelectableArc$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$11$$, $cx$$1$$, $cy$$1$$, $rx$$1$$, $ry$$1$$, $sa$$1$$, $ae$$1$$, $clos$$1$$, $id$$5$$) {
  D.$DvtGraphSelectableArc$$.$superclass$.Init.call(this, $context$$11$$, $cx$$1$$, $cy$$1$$, $rx$$1$$, $ry$$1$$, $sa$$1$$, $ae$$1$$, $clos$$1$$, $id$$5$$);
  this.$_bHover$ = this.$_bSelected$ = D.$JSCompiler_alias_FALSE$$;
  this.$_savedStroke$ = this.$_selectionEffects$ = D.$JSCompiler_alias_NULL$$;
  this.$_bSavedStroke$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$isHoverEffectShown$ = (0,D.$JSCompiler_get$$)("$_bHover$");
D.$JSCompiler_prototypeAlias$$.$SetSelectionMouseOver$ = function $$JSCompiler_prototypeAlias$$$$SetSelectionMouseOver$$($bOver$$2$$) {
  this.$_bHover$ != $bOver$$2$$ && (this.$_bHover$ = $bOver$$2$$, D.$DvtSelectionEffectUtils$$.$applyHoverState$(this, this.$_dataColor$))
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_bSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSel$$1$$) {
  this.$_bSelected$ != $bSel$$1$$ && (this.$_bSelected$ = $bSel$$1$$, D.$DvtSelectionEffectUtils$$.$applySelectionState$(this, this.$_dataColor$, this.$_innerColor$, this.$_outerColor$))
};
D.$JSCompiler_prototypeAlias$$.$setDataColor$ = function $$JSCompiler_prototypeAlias$$$$setDataColor$$($dataColor$$2$$, $innerColor$$1$$, $outerColor$$1$$) {
  this.$_dataColor$ = $dataColor$$2$$;
  this.$_innerColor$ = $innerColor$$1$$;
  this.$_outerColor$ = $outerColor$$1$$
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtGraphSelectablePath$$ = function $$DvtGraphSelectablePath$$$($context$$12$$, $cmds$$, $id$$6$$) {
  this.Init($context$$12$$, $cmds$$, $id$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGraphSelectablePath$$, D.$DvtPath$$, "DvtGraphSelectablePath");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGraphSelectablePath$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$13$$, $cmds$$1$$, $id$$7$$) {
  D.$DvtGraphSelectablePath$$.$superclass$.Init.call(this, $context$$13$$, $cmds$$1$$, $id$$7$$);
  this.$_bHover$ = this.$_bSelected$ = D.$JSCompiler_alias_FALSE$$;
  this.$_savedStroke$ = this.$_selectionEffects$ = D.$JSCompiler_alias_NULL$$;
  this.$_bSavedStroke$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$isHoverEffectShown$ = (0,D.$JSCompiler_get$$)("$_bHover$");
D.$JSCompiler_prototypeAlias$$.$SetSelectionMouseOver$ = function $$JSCompiler_prototypeAlias$$$$SetSelectionMouseOver$$($bOver$$3$$) {
  this.$_bHover$ != $bOver$$3$$ && (this.$_bHover$ = $bOver$$3$$, D.$DvtSelectionEffectUtils$$.$applyHoverState$(this, this.$_dataColor$))
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_bSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSel$$2$$) {
  this.$_bSelected$ != $bSel$$2$$ && (this.$_bSelected$ = $bSel$$2$$, D.$DvtSelectionEffectUtils$$.$applySelectionState$(this, this.$_dataColor$, this.$_innerColor$, this.$_outerColor$))
};
D.$JSCompiler_prototypeAlias$$.$setDataColor$ = function $$JSCompiler_prototypeAlias$$$$setDataColor$$($dataColor$$3$$, $innerColor$$2$$, $outerColor$$2$$) {
  this.$_dataColor$ = $dataColor$$3$$;
  this.$_innerColor$ = $innerColor$$2$$;
  this.$_outerColor$ = $outerColor$$2$$
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtGraphSelectablePolygon$$ = function $$DvtGraphSelectablePolygon$$$($color$$2$$, $context$$8$$, $arPoints$$, $id$$2$$) {
  this.Init($color$$2$$, $context$$8$$, $arPoints$$, $id$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGraphSelectablePolygon$$, D.$DvtPolygon$$, "DvtGraphSelectablePolygon");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGraphSelectablePolygon$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$9$$, $arPoints$$1$$, $id$$3$$) {
  D.$DvtGraphSelectablePolygon$$.$superclass$.Init.call(this, $context$$9$$, $arPoints$$1$$, $id$$3$$);
  this.$_bHover$ = this.$_bSelected$ = D.$JSCompiler_alias_FALSE$$;
  this.$_savedStroke$ = this.$_selectionEffects$ = D.$JSCompiler_alias_NULL$$;
  this.$_bSavedStroke$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$SetSelectionMouseOver$(D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$isHoverEffectShown$ = (0,D.$JSCompiler_get$$)("$_bHover$");
D.$JSCompiler_prototypeAlias$$.$SetSelectionMouseOver$ = function $$JSCompiler_prototypeAlias$$$$SetSelectionMouseOver$$($bOver$$1$$) {
  this.$_bHover$ != $bOver$$1$$ && (this.$_bHover$ = $bOver$$1$$, D.$DvtSelectionEffectUtils$$.$applyHoverState$(this, this.$_dataColor$))
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_bSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSel$$) {
  this.$_bSelected$ != $bSel$$ && (this.$_bSelected$ = $bSel$$, D.$DvtSelectionEffectUtils$$.$applySelectionState$(this, this.$_dataColor$, this.$_innerColor$, this.$_outerColor$))
};
D.$JSCompiler_prototypeAlias$$.$setDataColor$ = function $$JSCompiler_prototypeAlias$$$$setDataColor$$($dataColor$$1$$, $innerColor$$, $outerColor$$) {
  this.$_dataColor$ = $dataColor$$1$$;
  this.$_innerColor$ = $innerColor$$;
  this.$_outerColor$ = $outerColor$$
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtChartAxis$$ = function $$DvtChartAxis$$$($context$$146$$, $callback$$73$$, $callbackObj$$46$$) {
  this.Init($context$$146$$, $callback$$73$$, $callbackObj$$46$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartAxis$$, D.$DvtAxis$$, "DvtChartAxis");
D.$DvtChartAxis$$.prototype.$getOptions$ = function $$DvtChartAxis$$$$$getOptions$$() {
  return this.$Info$.$Options$
};
D.$JSCompiler_StaticMethods_axisToPlotArea$$ = function $$JSCompiler_StaticMethods_axisToPlotArea$$$($JSCompiler_StaticMethods_axisToPlotArea$self_ret$$61$$, $coord$$6$$, $bRoundResult$$) {
  if("tangential" == $JSCompiler_StaticMethods_axisToPlotArea$self_ret$$61$$.$getOptions$().position) {
    return $coord$$6$$
  }
  if($coord$$6$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $JSCompiler_StaticMethods_axisToPlotArea$self_ret$$61$$ = $coord$$6$$ - (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($JSCompiler_StaticMethods_axisToPlotArea$self_ret$$61$$);
  return $bRoundResult$$ === D.$JSCompiler_alias_FALSE$$ ? $JSCompiler_StaticMethods_axisToPlotArea$self_ret$$61$$ : window.Math.round($JSCompiler_StaticMethods_axisToPlotArea$self_ret$$61$$)
};
D.$JSCompiler_StaticMethods_plotAreaToAxis$$ = function $$JSCompiler_StaticMethods_plotAreaToAxis$$$($JSCompiler_StaticMethods_plotAreaToAxis$self$$, $coord$$7$$) {
  if("tangential" == $JSCompiler_StaticMethods_plotAreaToAxis$self$$.$getOptions$().position) {
    return $coord$$7$$
  }
  if($coord$$7$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $ret$$62$$ = $coord$$7$$ + (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($JSCompiler_StaticMethods_plotAreaToAxis$self$$);
  return window.Math.round($ret$$62$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartAxis$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getCoordAt$$($value$$80$$, $bRoundResult$$2$$) {
  return this.$Info$ ? (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getCoordAt$($value$$80$$), $bRoundResult$$2$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getBoundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedValueAt$$($coord$$9$$) {
  return this.$Info$ ? this.$Info$.$getBoundedValueAt$((0,D.$JSCompiler_StaticMethods_plotAreaToAxis$$)(this, $coord$$9$$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getBoundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getBoundedCoordAt$$($value$$81$$, $bRoundResult$$3$$) {
  return this.$Info$ ? (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getBoundedCoordAt$($value$$81$$), $bRoundResult$$3$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedValueAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedValueAt$$($coord$$10$$) {
  return this.$Info$ ? this.$Info$.$getUnboundedValueAt$((0,D.$JSCompiler_StaticMethods_plotAreaToAxis$$)(this, $coord$$10$$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getUnboundedCoordAt$ = function $$JSCompiler_prototypeAlias$$$$getUnboundedCoordAt$$($value$$82$$, $bRoundResult$$4$$) {
  return this.$Info$ ? (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getUnboundedCoordAt$($value$$82$$), $bRoundResult$$4$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getBaselineCoord$ = function $$JSCompiler_prototypeAlias$$$$getBaselineCoord$$() {
  return this.$Info$ ? (0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)(this, this.$Info$.$getBaselineCoord$()) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getPosition$ = function $$JSCompiler_prototypeAlias$$$$getPosition$$() {
  return this.$__getOptions$().position
};
D.$JSCompiler_StaticMethods_isGroupAxis$$ = function $$JSCompiler_StaticMethods_isGroupAxis$$$($JSCompiler_StaticMethods_isGroupAxis$self$$) {
  return $JSCompiler_StaticMethods_isGroupAxis$self$$.$Info$ instanceof D.$DvtGroupAxisInfo$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartAxis$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getGroupWidth$ = function $$JSCompiler_prototypeAlias$$$$getGroupWidth$$() {
  return(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)(this) ? window.Math.abs(this.$getUnboundedCoordAt$(1) - this.$getUnboundedCoordAt$(0)) : this.$Info$ instanceof D.$DvtTimeAxisInfo$$ ? this.$Info$.$getGroupWidth$() : 0
};
D.$JSCompiler_prototypeAlias$$.$getAxisLine$ = function $$JSCompiler_prototypeAlias$$$$getAxisLine$$($context$$147$$) {
  return this.$Info$ ? this.$Info$.$getAxisLine$($context$$147$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMajorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMajorGridLines$$($context$$148$$) {
  return this.$Info$ ? this.$Info$.$getMajorGridLines$($context$$148$$) : []
};
D.$JSCompiler_prototypeAlias$$.$getMinorGridLines$ = function $$JSCompiler_prototypeAlias$$$$getMinorGridLines$$($context$$149$$) {
  return this.$Info$ ? this.$Info$.$getMinorGridLines$($context$$149$$) : []
};
D.$JSCompiler_prototypeAlias$$.$getMajorTickCount$ = function $$JSCompiler_prototypeAlias$$$$getMajorTickCount$$() {
  return this.$Info$ ? this.$Info$.$getMajorTickCount$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setMajorTickCount$ = function $$JSCompiler_prototypeAlias$$$$setMajorTickCount$$($count$$16$$) {
  this.$Info$ && this.$Info$.$setMajorTickCount$($count$$16$$)
};
D.$JSCompiler_prototypeAlias$$.$getMinorTickCount$ = function $$JSCompiler_prototypeAlias$$$$getMinorTickCount$$() {
  return this.$Info$ ? this.$Info$.$getMinorTickCount$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setMinorTickCount$ = function $$JSCompiler_prototypeAlias$$$$setMinorTickCount$$($count$$17$$) {
  this.$Info$ && this.$Info$.$setMinorTickCount$($count$$17$$)
};
D.$JSCompiler_prototypeAlias$$.$getMajorIncrement$ = function $$JSCompiler_prototypeAlias$$$$getMajorIncrement$$() {
  return this.$Info$ ? this.$Info$.$getMajorIncrement$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMinorIncrement$ = function $$JSCompiler_prototypeAlias$$$$getMinorIncrement$$() {
  return this.$Info$ ? this.$Info$.$getMinorIncrement$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getGlobalMin$ = function $$JSCompiler_prototypeAlias$$$$getGlobalMin$$() {
  return this.$Info$ ? this.$Info$.$getGlobalMin$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getGlobalMax$ = function $$JSCompiler_prototypeAlias$$$$getGlobalMax$$() {
  return this.$Info$ ? this.$Info$.$getGlobalMax$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getViewportMin$ = function $$JSCompiler_prototypeAlias$$$$getViewportMin$$() {
  return this.$Info$ ? this.$Info$.$getViewportMin$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getViewportMax$ = function $$JSCompiler_prototypeAlias$$$$getViewportMax$$() {
  return this.$Info$ ? this.$Info$.$getViewportMax$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getDataMin$ = function $$JSCompiler_prototypeAlias$$$$getDataMin$$() {
  return this.$Info$ ? this.$Info$.$getDataMin$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getDataMax$ = function $$JSCompiler_prototypeAlias$$$$getDataMax$$() {
  return this.$Info$ ? this.$Info$.$getDataMax$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getMinimumExtent$ = function $$JSCompiler_prototypeAlias$$$$getMinimumExtent$$() {
  return this.$Info$ ? this.$Info$.$getMinimumExtent$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_isFullViewport$$ = function $$JSCompiler_StaticMethods_isFullViewport$$$($JSCompiler_StaticMethods_isFullViewport$self$$) {
  return $JSCompiler_StaticMethods_isFullViewport$self$$.$getViewportMin$() == $JSCompiler_StaticMethods_isFullViewport$self$$.$getGlobalMin$() && $JSCompiler_StaticMethods_isFullViewport$self$$.$getViewportMax$() == $JSCompiler_StaticMethods_isFullViewport$self$$.$getGlobalMax$()
};
D.$JSCompiler_StaticMethods_getLeftOverflow$$ = function $$JSCompiler_StaticMethods_getLeftOverflow$$$($JSCompiler_StaticMethods_getLeftOverflow$self$$) {
  return(0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_getLeftOverflow$self$$.$_context$) ? $JSCompiler_StaticMethods_getLeftOverflow$self$$.$Info$ ? $JSCompiler_StaticMethods_getLeftOverflow$self$$.$Info$.$getEndOverflow$() : D.$JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods_getLeftOverflow$self$$.$Info$ ? $JSCompiler_StaticMethods_getLeftOverflow$self$$.$Info$.$getStartOverflow$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getRightOverflow$$ = function $$JSCompiler_StaticMethods_getRightOverflow$$$($JSCompiler_StaticMethods_getRightOverflow$self$$) {
  return(0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_getRightOverflow$self$$.$_context$) ? $JSCompiler_StaticMethods_getRightOverflow$self$$.$Info$ ? $JSCompiler_StaticMethods_getRightOverflow$self$$.$Info$.$getStartOverflow$() : D.$JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods_getRightOverflow$self$$.$Info$ ? $JSCompiler_StaticMethods_getRightOverflow$self$$.$Info$.$getEndOverflow$() : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartBar$$ = function $$DvtChartBar$$$($context$$145$$, $bHoriz$$9$$, $bStacked$$2$$, $axisCoord$$2$$, $baselineCoord$$2$$, $endCoord$$1$$, $x1$$11$$, $x2$$10$$) {
  this.Init($context$$145$$);
  this.$_bHoriz$ = $bHoriz$$9$$;
  this.$_bStacked$ = $bStacked$$2$$;
  this.$_axisCoord$ = $axisCoord$$2$$;
  this.$_setBarCoords$($baselineCoord$$2$$, $endCoord$$1$$, $x1$$11$$, $x2$$10$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartBar$$, D.$DvtPolygon$$, "DvtChartBar");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartBar$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setStyleProperties$ = function $$JSCompiler_prototypeAlias$$$$setStyleProperties$$($fill$$28$$, $stroke$$40$$, $dataColor$$9$$, $innerColor$$6$$, $outerColor$$6$$) {
  this.$_fill$ = $fill$$28$$;
  this.$_stroke$ = $stroke$$40$$;
  this.$_hoverColor$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$($dataColor$$9$$);
  this.$_innerColor$ = $innerColor$$6$$;
  this.$_outerColor$ = $outerColor$$6$$;
  this.$setFill$($fill$$28$$);
  $stroke$$40$$ && this.$setStroke$($stroke$$40$$)
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_TRUE$$;
  (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this, this.$_hoverColor$, this.$isSelected$() ? this.$_innerColor$ : D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$isSelected$() ? (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this, this.$_outerColor$, this.$_innerColor$) : (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$24$$) {
  this.$IsSelected$ != $selected$$24$$ && (this.$IsSelected$ = $selected$$24$$, this.$isSelected$() ? (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this, this.$isHoverEffectShown$() ? this.$_hoverColor$ : this.$_outerColor$, this.$_innerColor$) : (0,D.$JSCompiler_StaticMethods__showNestedBorders$$)(this, this.$isHoverEffectShown$() ? this.$_hoverColor$ : D.$JSCompiler_alias_NULL$$))
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_baselineCoord$, this.$_endCoord$, this.$_x1$, this.$_x2$]
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($params$$29$$, $indicator$$11$$) {
  this.$_setBarCoords$($params$$29$$[0], $params$$29$$[1], $params$$29$$[2], $params$$29$$[3]);
  if($indicator$$11$$) {
    var $indicatorPosition_x$$inline_3665$$, $widthCoord$$inline_3664_y$$inline_3666$$ = (this.$_x1$ + this.$_x2$) / 2, $lengthCoord$$inline_3668_midLength$$inline_3667$$ = this.$_bStacked$ ? (this.$_endCoord$ + this.$_baselineCoord$) / 2 : this.$_endCoord$ >= this.$_baselineCoord$ ? this.$_endCoord$ + 8 : this.$_endCoord$ - 8;
    $indicatorPosition_x$$inline_3665$$ = this.$_bHoriz$ ? $lengthCoord$$inline_3668_midLength$$inline_3667$$ : $widthCoord$$inline_3664_y$$inline_3666$$;
    $widthCoord$$inline_3664_y$$inline_3666$$ = this.$_bHoriz$ ? $widthCoord$$inline_3664_y$$inline_3666$$ : $lengthCoord$$inline_3668_midLength$$inline_3667$$;
    $indicatorPosition_x$$inline_3665$$ = new D.$DvtPoint$$($indicatorPosition_x$$inline_3665$$, $widthCoord$$inline_3664_y$$inline_3666$$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($indicator$$11$$, $indicatorPosition_x$$inline_3665$$.x, $indicatorPosition_x$$inline_3665$$.y);
    $indicator$$11$$.$setAlpha$(1);
    $indicator$$11$$.getParent().$addChild$($indicator$$11$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$($duration$$25_nodePlayable$$14$$) {
  var $endState$$8$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_axisCoord$, this.$_axisCoord$, this.$_x1$, this.$_x2$]);
  $duration$$25_nodePlayable$$14$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$25_nodePlayable$$14$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$25_nodePlayable$$14$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$8$$);
  return $duration$$25_nodePlayable$$14$$
};
D.$JSCompiler_prototypeAlias$$.$getDeleteAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDeleteAnimation$$($duration$$26_nodePlayable$$15$$) {
  var $endState$$9$$ = [this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$];
  $duration$$26_nodePlayable$$15$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$26_nodePlayable$$15$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$26_nodePlayable$$15$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$9$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$26_nodePlayable$$15$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 0);
  return $duration$$26_nodePlayable$$15$$
};
D.$JSCompiler_prototypeAlias$$.$getInsertAnimation$ = function $$JSCompiler_prototypeAlias$$$$getInsertAnimation$$($duration$$27_nodePlayable$$16$$) {
  this.$setAlpha$(0);
  $duration$$27_nodePlayable$$16$$ = this.$getDisplayAnimation$($duration$$27_nodePlayable$$16$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$27_nodePlayable$$16$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 1);
  return $duration$$27_nodePlayable$$16$$
};
D.$JSCompiler_prototypeAlias$$.$_setBarCoords$ = function $$JSCompiler_prototypeAlias$$$$_setBarCoords$$($baselineCoord$$3$$, $endCoord$$2$$, $x1$$12$$, $x2$$11$$) {
  this.$_baselineCoord$ = $baselineCoord$$3$$;
  this.$_endCoord$ = $endCoord$$2$$;
  this.$_x1$ = $x1$$12$$;
  this.$_x2$ = $x2$$11$$;
  this.$setPoints$((0,D.$JSCompiler_StaticMethods__createPointsArray$$)(this));
  this.$_outerChild$ && this.$_outerChild$.$setPoints$((0,D.$JSCompiler_StaticMethods__createPointsArray$$)(this, 2));
  this.$_innerChild$ && this.$_innerChild$.$setPoints$((0,D.$JSCompiler_StaticMethods__createPointsArray$$)(this, 3.5))
};
D.$JSCompiler_StaticMethods__createPointsArray$$ = function $$JSCompiler_StaticMethods__createPointsArray$$$($JSCompiler_StaticMethods__createPointsArray$self$$, $inset$$) {
  var $baselineCoord$$4$$ = $JSCompiler_StaticMethods__createPointsArray$self$$.$_baselineCoord$, $endCoord$$3$$ = $JSCompiler_StaticMethods__createPointsArray$self$$.$_endCoord$, $x1$$13$$ = $JSCompiler_StaticMethods__createPointsArray$self$$.$_x1$, $x2$$12$$ = $JSCompiler_StaticMethods__createPointsArray$self$$.$_x2$;
  if(0 < $inset$$) {
    if(window.Math.abs($x1$$13$$ - $x2$$12$$) < 2 * $inset$$ || window.Math.abs($baselineCoord$$4$$ - $endCoord$$3$$) < 2 * $inset$$) {
      return[]
    }
    $x1$$13$$ += $inset$$;
    $x2$$12$$ -= $inset$$;
    $endCoord$$3$$ < $baselineCoord$$4$$ ? ($baselineCoord$$4$$ -= $inset$$, $endCoord$$3$$ += $inset$$) : ($baselineCoord$$4$$ += $inset$$, $endCoord$$3$$ -= $inset$$)
  }
  return $JSCompiler_StaticMethods__createPointsArray$self$$.$_bHoriz$ ? [$endCoord$$3$$, $x1$$13$$, $endCoord$$3$$, $x2$$12$$, $baselineCoord$$4$$, $x2$$12$$, $baselineCoord$$4$$, $x1$$13$$] : [$x1$$13$$, $endCoord$$3$$, $x2$$12$$, $endCoord$$3$$, $x2$$12$$, $baselineCoord$$4$$, $x1$$13$$, $baselineCoord$$4$$]
};
D.$JSCompiler_StaticMethods__showNestedBorders$$ = function $$JSCompiler_StaticMethods__showNestedBorders$$$($JSCompiler_StaticMethods__showNestedBorders$self$$, $outerBorderColor$$, $innerBorderColor$$) {
  $JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$ || ($JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$ = new D.$DvtPolygon$$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_context$, (0,D.$JSCompiler_StaticMethods__createPointsArray$$)($JSCompiler_StaticMethods__showNestedBorders$self$$, 2)), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), 
  $JSCompiler_StaticMethods__showNestedBorders$self$$.$addChild$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$ = new D.$DvtPolygon$$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_context$, (0,D.$JSCompiler_StaticMethods__createPointsArray$$)($JSCompiler_StaticMethods__showNestedBorders$self$$, 3.5)), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$), 
  $JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$addChild$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$));
  $innerBorderColor$$ ? ($JSCompiler_StaticMethods__showNestedBorders$self$$.$setSolidFill$($outerBorderColor$$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$setStroke$(D.$JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$.$setSolidFill$($innerBorderColor$$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$.$setFill$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_fill$)) : ($outerBorderColor$$ ? ($JSCompiler_StaticMethods__showNestedBorders$self$$.$setSolidFill$($outerBorderColor$$), 
  $JSCompiler_StaticMethods__showNestedBorders$self$$.$setStroke$(D.$JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$.$setFill$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_fill$)) : ($JSCompiler_StaticMethods__showNestedBorders$self$$.$setFill$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_fill$), $JSCompiler_StaticMethods__showNestedBorders$self$$.$setStroke$($JSCompiler_StaticMethods__showNestedBorders$self$$.$_stroke$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($JSCompiler_StaticMethods__showNestedBorders$self$$.$_outerChild$)), 
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($JSCompiler_StaticMethods__showNestedBorders$self$$.$_innerChild$))
};
D.$DvtChartBar$$.prototype.$getBoundingBox$ = function $$DvtChartBar$$$$$getBoundingBox$$() {
  var $x$$117$$ = window.Math.min(this.$_x2$, this.$_x1$), $y$$98$$ = window.Math.min(this.$_endCoord$, this.$_baselineCoord$), $w$$19$$ = window.Math.abs(this.$_x2$ - this.$_x1$), $h$$12$$ = window.Math.abs(this.$_endCoord$ - this.$_baselineCoord$);
  return this.$_bHoriz$ ? new D.$DvtRectangle$$($y$$98$$, $x$$117$$, $h$$12$$, $w$$19$$) : new D.$DvtRectangle$$($x$$117$$, $y$$98$$, $w$$19$$, $h$$12$$)
};
D.$DvtChartBar$$.prototype.$getDimensionsSelf$ = function $$DvtChartBar$$$$$getDimensionsSelf$$($targetCoordinateSpace$$12$$) {
  return(0,D.$JSCompiler_StaticMethods_ConvertCoordSpaceRect$$)(this, this.$getBoundingBox$(), $targetCoordinateSpace$$12$$)
};
D.$DvtChartCoord$$ = function $$DvtChartCoord$$$($x$$118$$, $y1$$13$$, $y2$$12$$, $groupIndex$$44$$, $group$$23$$, $filtered$$) {
  this.x = $x$$118$$;
  this.$y1$ = $y1$$13$$;
  this.$y2$ = $y2$$12$$;
  this.$groupIndex$ = $groupIndex$$44$$;
  this.group = $group$$23$$;
  this.$filtered$ = $filtered$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartCoord$$, D.$DvtObj$$, "DvtChartCoord");
D.$JSCompiler_StaticMethods_isUpstep$$ = function $$JSCompiler_StaticMethods_isUpstep$$$($JSCompiler_StaticMethods_isUpstep$self$$, $baseline$$4$$) {
  return window.Math.abs($JSCompiler_StaticMethods_isUpstep$self$$.$y2$ - $baseline$$4$$) > window.Math.abs($JSCompiler_StaticMethods_isUpstep$self$$.$y1$ - $baseline$$4$$)
};
D.$DvtChartCoord$$.prototype.clone = function $$DvtChartCoord$$$$clone$() {
  return new D.$DvtChartCoord$$(this.x, this.$y1$, this.$y2$, this.$groupIndex$, this.group, this.$filtered$)
};
D.$DvtChartLineArea$$ = function $$DvtChartLineArea$$$($chart$$236$$, $bArea$$, $availSpace$$55$$, $baseline$$1$$, $fill$$27$$, $stroke$$39$$, $type$$111$$, $arCoord$$, $baseType$$, $arBaseCoord$$) {
  this.Init($chart$$236$$.$_context$);
  this.$_chart$ = $chart$$236$$;
  this.$_bArea$ = $bArea$$;
  this.$_availSpace$ = $availSpace$$55$$;
  this.$_baseline$ = $baseline$$1$$;
  this.$_fill$ = $fill$$27$$;
  this.$_stroke$ = $stroke$$39$$;
  this.$_type$ = $type$$111$$;
  this.$_baseType$ = $baseType$$ ? $baseType$$ : $type$$111$$;
  this.$_indicatorMap$ = {};
  this.$setCoords$($arCoord$$, $arBaseCoord$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartLineArea$$, D.$DvtContainer$$, "DvtChartLineArea");
D.$DvtChartLineArea$$.prototype.$setCoords$ = function $$DvtChartLineArea$$$$$setCoords$$($arCoord$$1$$, $arBaseCoord$$1$$) {
  this.$_arCoord$ = $arCoord$$1$$;
  $arBaseCoord$$1$$ && (this.$_arBaseCoord$ = $arBaseCoord$$1$$);
  this.$removeChildren$();
  this.$_bArea$ ? this.$_renderAreas$() : this.$_renderLines$();
  for(var $indicator$$inline_3545_indicatorObj$$inline_3544$$, $pos$$inline_3546_y$$inline_3547$$, $coord$$inline_3548$$, $i$$inline_3549$$ = 0;$i$$inline_3549$$ < this.$_arCoord$.length;$i$$inline_3549$$++) {
    if($coord$$inline_3548$$ = this.$_arCoord$[$i$$inline_3549$$], ($indicator$$inline_3545_indicatorObj$$inline_3544$$ = this.$_indicatorMap$[$coord$$inline_3548$$.$groupIndex$]) && $indicator$$inline_3545_indicatorObj$$inline_3544$$.$indicator$) {
      $pos$$inline_3546_y$$inline_3547$$ = ((0,D.$JSCompiler_StaticMethods_isUpstep$$)($coord$$inline_3548$$, this.$_baseline$) ? $coord$$inline_3548$$.$y2$ : $coord$$inline_3548$$.$y1$) + 8 * ($indicator$$inline_3545_indicatorObj$$inline_3544$$.direction == D.$DvtDCChartUtils$$.$DIR_UP$ ? -1 : 1), $pos$$inline_3546_y$$inline_3547$$ = (0,D.$JSCompiler_StaticMethods__convertCoord$$)(this, new D.$DvtPoint$$($coord$$inline_3548$$.x, $pos$$inline_3546_y$$inline_3547$$)), $indicator$$inline_3545_indicatorObj$$inline_3544$$ = 
      $indicator$$inline_3545_indicatorObj$$inline_3544$$.$indicator$, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($indicator$$inline_3545_indicatorObj$$inline_3544$$, $pos$$inline_3546_y$$inline_3547$$.x, $pos$$inline_3546_y$$inline_3547$$.y), $indicator$$inline_3545_indicatorObj$$inline_3544$$.$setAlpha$(1), $indicator$$inline_3545_indicatorObj$$inline_3544$$.getParent().$addChild$($indicator$$inline_3545_indicatorObj$$inline_3544$$)
    }
  }
};
D.$DvtChartLineArea$$.prototype.$isArea$ = (0,D.$JSCompiler_get$$)("$_bArea$");
D.$JSCompiler_StaticMethods__getPointArrays$$ = function $$JSCompiler_StaticMethods__getPointArrays$$$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $coords$$8_coords$$inline_3551$$, $type$$112$$) {
  var $pointsArrays$$1$$ = [], $points$$34$$ = [];
  $pointsArrays$$1$$.push($points$$34$$);
  for(var $isPolar$$4_pointCoords$$inline_3552$$ = [], $i$$inline_3553_isCentered$$ = 0;$i$$inline_3553_isCentered$$ < $coords$$8_coords$$inline_3551$$.length;$i$$inline_3553_isCentered$$++) {
    if(!$coords$$8_coords$$inline_3551$$[$i$$inline_3553_isCentered$$].$filtered$) {
      if($coords$$8_coords$$inline_3551$$[$i$$inline_3553_isCentered$$].x == D.$JSCompiler_alias_NULL$$) {
        $isPolar$$4_pointCoords$$inline_3552$$.push(D.$JSCompiler_alias_NULL$$)
      }else {
        if($isPolar$$4_pointCoords$$inline_3552$$.push(new D.$DvtPoint$$($coords$$8_coords$$inline_3551$$[$i$$inline_3553_isCentered$$].x, $coords$$8_coords$$inline_3551$$[$i$$inline_3553_isCentered$$].$y1$)), $coords$$8_coords$$inline_3551$$[$i$$inline_3553_isCentered$$].$y1$ != $coords$$8_coords$$inline_3551$$[$i$$inline_3553_isCentered$$].$y2$) {
          var $isUncentered_p2$$inline_3554$$ = new D.$DvtPoint$$($coords$$8_coords$$inline_3551$$[$i$$inline_3553_isCentered$$].x, $coords$$8_coords$$inline_3551$$[$i$$inline_3553_isCentered$$].$y2$);
          $isUncentered_p2$$inline_3554$$.$_isY2$ = D.$JSCompiler_alias_TRUE$$;
          $isPolar$$4_pointCoords$$inline_3552$$.push($isUncentered_p2$$inline_3554$$)
        }
      }
    }
  }
  $coords$$8_coords$$inline_3551$$ = $isPolar$$4_pointCoords$$inline_3552$$;
  var $isPolar$$4_pointCoords$$inline_3552$$ = D.$DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$), $i$$inline_3553_isCentered$$ = "centeredStepped" == $type$$112$$ || "centeredSegmented" == $type$$112$$, $isUncentered_p2$$inline_3554$$ = "stepped" == $type$$112$$ || "segmented" == $type$$112$$, $groupWidth$$ = $JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$.$xAxis$.$getGroupWidth$(), $lastCoord$$;
  $isPolar$$4_pointCoords$$inline_3552$$ && ($lastCoord$$ = $coords$$8_coords$$inline_3551$$[$coords$$8_coords$$inline_3551$$.length - 1]);
  for(var $coord$$2$$, $xCoord$$6$$, $isY2$$, $inBump$$ = D.$JSCompiler_alias_FALSE$$, $i$$326$$ = 0;$i$$326$$ < $coords$$8_coords$$inline_3551$$.length;$i$$326$$++) {
    if($coords$$8_coords$$inline_3551$$[$i$$326$$] == D.$JSCompiler_alias_NULL$$) {
      D.$DvtChartDataUtils$$.$hasMixedFrequency$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$) || ($points$$34$$ = [], $pointsArrays$$1$$.push($points$$34$$), $lastCoord$$ = D.$JSCompiler_alias_NULL$$)
    }else {
      $coord$$2$$ = $coords$$8_coords$$inline_3551$$[$i$$326$$];
      $isY2$$ = $coords$$8_coords$$inline_3551$$[$i$$326$$].$_isY2$;
      $xCoord$$6$$ = $i$$inline_3553_isCentered$$ ? $coord$$2$$.x - $groupWidth$$ / 2 : $coord$$2$$.x;
      if($isY2$$) {
        if($inBump$$ && ($isUncentered_p2$$inline_3554$$ || $i$$inline_3553_isCentered$$)) {
          $xCoord$$6$$ += $groupWidth$$
        }
        $inBump$$ = !$inBump$$
      }
      "curved" == $type$$112$$ && $isY2$$ && $points$$34$$.push(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$);
      $lastCoord$$ && ($isUncentered_p2$$inline_3554$$ || $i$$inline_3553_isCentered$$) && (0,D.$JSCompiler_StaticMethods__pushCoord$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$34$$, $xCoord$$6$$, $lastCoord$$.y);
      if(!$JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_bArea$ && ("segmented" == $type$$112$$ || "centeredSegmented" == $type$$112$$)) {
        $points$$34$$ = [], $pointsArrays$$1$$.push($points$$34$$)
      }
      (0,D.$JSCompiler_StaticMethods__pushCoord$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$34$$, $xCoord$$6$$, $coord$$2$$.y);
      $lastCoord$$ = $coord$$2$$
    }
  }
  !$isPolar$$4_pointCoords$$inline_3552$$ && (!$isY2$$ && $lastCoord$$) && ($i$$inline_3553_isCentered$$ ? (0,D.$JSCompiler_StaticMethods__pushCoord$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$34$$, $lastCoord$$.x + 0.5 * $groupWidth$$, $lastCoord$$.y) : $isUncentered_p2$$inline_3554$$ && (0,D.$JSCompiler_StaticMethods__pushCoord$$)($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$, $points$$34$$, $lastCoord$$.x + $groupWidth$$, $lastCoord$$.y));
  D.$DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.$_chart$) && 1 < $pointsArrays$$1$$.length && ($JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$ = $pointsArrays$$1$$.pop(), $pointsArrays$$1$$[0] = $JSCompiler_StaticMethods__getPointArrays$self_lastPoints$$.concat($pointsArrays$$1$$[0]));
  return $pointsArrays$$1$$
};
D.$JSCompiler_StaticMethods__convertCoord$$ = function $$JSCompiler_StaticMethods__convertCoord$$$($JSCompiler_StaticMethods__convertCoord$self$$, $coord$$3$$) {
  if(D.$DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__convertCoord$self$$.$_chart$)) {
    var $cartesian$$2$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($coord$$3$$.y, $coord$$3$$.x, $JSCompiler_StaticMethods__convertCoord$self$$.$_availSpace$);
    return new D.$DvtPoint$$($cartesian$$2$$.x, $cartesian$$2$$.y)
  }
  return D.$DvtChartTypeUtils$$.$isHorizontal$($JSCompiler_StaticMethods__convertCoord$self$$.$_chart$) ? new D.$DvtPoint$$($coord$$3$$.y, $coord$$3$$.x) : new D.$DvtPoint$$($coord$$3$$.x, $coord$$3$$.y)
};
D.$JSCompiler_StaticMethods__pushCoord$$ = function $$JSCompiler_StaticMethods__pushCoord$$$($JSCompiler_StaticMethods__pushCoord$self_coord$$4$$, $pointArray$$2$$, $x$$114$$, $y$$94$$) {
  $JSCompiler_StaticMethods__pushCoord$self_coord$$4$$ = (0,D.$JSCompiler_StaticMethods__convertCoord$$)($JSCompiler_StaticMethods__pushCoord$self_coord$$4$$, new D.$DvtPoint$$($x$$114$$, $y$$94$$));
  $pointArray$$2$$.push(window.Math.round($JSCompiler_StaticMethods__pushCoord$self_coord$$4$$.x), window.Math.round($JSCompiler_StaticMethods__pushCoord$self_coord$$4$$.y))
};
D.$JSCompiler_StaticMethods__isRing$$ = function $$JSCompiler_StaticMethods__isRing$$$($JSCompiler_StaticMethods__isRing$self$$) {
  if(!D.$DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__isRing$self$$.$_chart$) || !D.$DvtChartAxisUtils$$.$hasGroupAxis$($JSCompiler_StaticMethods__isRing$self$$.$_chart$) || $JSCompiler_StaticMethods__isRing$self$$.$_arCoord$.length < D.$DvtChartDataUtils$$.$getGroupCount$($JSCompiler_StaticMethods__isRing$self$$.$_chart$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $i$$327$$ = 0;$i$$327$$ < $JSCompiler_StaticMethods__isRing$self$$.$_arCoord$.length;$i$$327$$++) {
    if($JSCompiler_StaticMethods__isRing$self$$.$_arCoord$[$i$$327$$].x == D.$JSCompiler_alias_NULL$$) {
      return D.$JSCompiler_alias_FALSE$$
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_StaticMethods__getSplineType$$ = function $$JSCompiler_StaticMethods__getSplineType$$$($JSCompiler_StaticMethods__getSplineType$self$$) {
  return D.$DvtChartTypeUtils$$.$isScatterBubble$($JSCompiler_StaticMethods__getSplineType$self$$.$_chart$) ? window.DvtPathUtils.$SPLINE_TYPE_CARDINAL$ : D.$DvtChartTypeUtils$$.$isPolar$($JSCompiler_StaticMethods__getSplineType$self$$.$_chart$) ? (0,D.$JSCompiler_StaticMethods__isRing$$)($JSCompiler_StaticMethods__getSplineType$self$$) ? window.DvtPathUtils.$SPLINE_TYPE_CARDINAL_CLOSED$ : window.DvtPathUtils.$SPLINE_TYPE_CARDINAL$ : D.$DvtChartTypeUtils$$.$isHorizontal$($JSCompiler_StaticMethods__getSplineType$self$$.$_chart$) ? 
  window.DvtPathUtils.$SPLINE_TYPE_MONOTONE_HORIZONTAL$ : window.DvtPathUtils.$SPLINE_TYPE_MONOTONE_VERTICAL$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartLineArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_renderLines$ = function $$JSCompiler_prototypeAlias$$$$_renderLines$$() {
  for(var $pointArrays$$ = (0,D.$JSCompiler_StaticMethods__getPointArrays$$)(this, this.$_arCoord$, this.$_type$), $line$$9_points$$35$$, $i$$328$$ = 0;$i$$328$$ < $pointArrays$$.length;$i$$328$$++) {
    if(($line$$9_points$$35$$ = $pointArrays$$[$i$$328$$]) && 1 < $line$$9_points$$35$$.length) {
      "curved" == this.$_type$ ? (window.cmd = (0,D.$DvtChartLineArea$_getCurvedPathCommands$$)($line$$9_points$$35$$, D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods__getSplineType$$)(this)), $line$$9_points$$35$$ = new D.$DvtPath$$(this.$_context$, window.cmd), $line$$9_points$$35$$.$setFill$(D.$JSCompiler_alias_NULL$$)) : (0,D.$JSCompiler_StaticMethods__isRing$$)(this) ? ($line$$9_points$$35$$ = new D.$DvtPolygon$$(this.$_context$, $line$$9_points$$35$$), $line$$9_points$$35$$.$setFill$(D.$JSCompiler_alias_NULL$$)) : 
      $line$$9_points$$35$$ = new D.$DvtPolyline$$(this.$_context$, $line$$9_points$$35$$), $line$$9_points$$35$$.$setStroke$(this.$_stroke$), this.$addChild$($line$$9_points$$35$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$_renderAreas$ = function $$JSCompiler_prototypeAlias$$$$_renderAreas$$() {
  var $highArrays$$ = (0,D.$JSCompiler_StaticMethods__getPointArrays$$)(this, this.$_arCoord$, this.$_type$), $lowArrays$$ = (0,D.$JSCompiler_StaticMethods__getPointArrays$$)(this, this.$_arBaseCoord$, this.$_baseType$);
  if($highArrays$$.length == $lowArrays$$.length) {
    for(var $area$$4_lowCurved_points$$36$$, $i$$329$$ = 0;$i$$329$$ < $highArrays$$.length;$i$$329$$++) {
      var $cmd$$4_highArray$$ = $highArrays$$[$i$$329$$], $lowArray_splineType$$ = $lowArrays$$[$i$$329$$];
      if(!(2 > $cmd$$4_highArray$$.length)) {
        var $highCurved$$ = "curved" == this.$_type$;
        $area$$4_lowCurved_points$$36$$ = "curved" == this.$_baseType$;
        (0,D.$JSCompiler_StaticMethods__isRing$$)(this) && ($highCurved$$ || $cmd$$4_highArray$$.push($cmd$$4_highArray$$[0], $cmd$$4_highArray$$[1]), 2 <= $lowArray_splineType$$.length && !$area$$4_lowCurved_points$$36$$ && $lowArray_splineType$$.push($lowArray_splineType$$[0], $lowArray_splineType$$[1]));
        for(var $revLowArray$$ = [], $j$$66$$ = 0;$j$$66$$ < $lowArray_splineType$$.length;$j$$66$$ += 2) {
          $revLowArray$$.unshift($lowArray_splineType$$[$j$$66$$], $lowArray_splineType$$[$j$$66$$ + 1])
        }
        $highCurved$$ || $area$$4_lowCurved_points$$36$$ ? ($lowArray_splineType$$ = (0,D.$JSCompiler_StaticMethods__getSplineType$$)(this), $cmd$$4_highArray$$ = $highCurved$$ ? (0,D.$DvtChartLineArea$_getCurvedPathCommands$$)($cmd$$4_highArray$$, D.$JSCompiler_alias_FALSE$$, $lowArray_splineType$$) : window.DvtPathUtils.$polyline$($cmd$$4_highArray$$, D.$JSCompiler_alias_FALSE$$), $cmd$$4_highArray$$ += $area$$4_lowCurved_points$$36$$ ? (0,D.$DvtChartLineArea$_getCurvedPathCommands$$)($revLowArray$$, 
        D.$JSCompiler_alias_TRUE$$, $lowArray_splineType$$) : window.DvtPathUtils.$polyline$($revLowArray$$, D.$JSCompiler_alias_TRUE$$), $cmd$$4_highArray$$ += window.DvtPathUtils.closePath(), $area$$4_lowCurved_points$$36$$ = new D.$DvtPath$$(this.$_context$, $cmd$$4_highArray$$)) : ($area$$4_lowCurved_points$$36$$ = $revLowArray$$.concat($cmd$$4_highArray$$), $area$$4_lowCurved_points$$36$$ = new D.$DvtPolygon$$(this.$_context$, $area$$4_lowCurved_points$$36$$));
        $area$$4_lowCurved_points$$36$$.$setFill$(this.$_fill$);
        this.$_stroke$ && $area$$4_lowCurved_points$$36$$.$setStroke$(this.$_stroke$);
        this.$addChild$($area$$4_lowCurved_points$$36$$)
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$($other$$4$$) {
  return(0,D.$DvtChartLineArea$_coordsToAnimationParams$$)(this.$_arCoord$, $other$$4$$ ? $other$$4$$.$_arCoord$ : D.$JSCompiler_alias_NULL$$, this.$_baseline$)
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($coords$$9_params$$24$$) {
  $coords$$9_params$$24$$ = (0,D.$DvtChartLineArea$_animationParamsToCoords$$)($coords$$9_params$$24$$);
  this.$setCoords$($coords$$9_params$$24$$)
};
D.$JSCompiler_prototypeAlias$$.$getBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getBaseAnimationParams$$($other$$5$$) {
  return(0,D.$DvtChartLineArea$_coordsToAnimationParams$$)(this.$_arBaseCoord$, $other$$5$$ ? $other$$5$$.$_arBaseCoord$ : D.$JSCompiler_alias_NULL$$, this.$_baseline$)
};
D.$JSCompiler_prototypeAlias$$.$setBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setBaseAnimationParams$$($params$$25$$) {
  this.$_arBaseCoord$ = (0,D.$DvtChartLineArea$_animationParamsToCoords$$)($params$$25$$)
};
D.$JSCompiler_StaticMethods_getCommonGroupIndices$$ = function $$JSCompiler_StaticMethods_getCommonGroupIndices$$$($JSCompiler_StaticMethods_getCommonGroupIndices$self$$, $other$$6$$) {
  for(var $indices$$ = [], $i$$331$$ = 0;$i$$331$$ < $JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$.length;$i$$331$$++) {
    if(!($JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$331$$].$filtered$ || $JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$331$$].x == D.$JSCompiler_alias_NULL$$)) {
      for(var $j$$67$$ = 0;$j$$67$$ < $other$$6$$.$_arCoord$.length;$j$$67$$++) {
        if(!($other$$6$$.$_arCoord$[$j$$67$$].$filtered$ || $other$$6$$.$_arCoord$[$j$$67$$].x == D.$JSCompiler_alias_NULL$$) && $JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$331$$].group == $other$$6$$.$_arCoord$[$j$$67$$].group) {
          $indices$$.push($JSCompiler_StaticMethods_getCommonGroupIndices$self$$.$_arCoord$[$i$$331$$].$groupIndex$);
          break
        }
      }
    }
  }
  return $indices$$
};
D.$DvtChartLineArea$_coordsToAnimationParams$$ = function $$DvtChartLineArea$_coordsToAnimationParams$$$($coords$$11$$, $otherCoords_otherGroups$$1$$, $baseline$$2_params$$26$$) {
  if($otherCoords_otherGroups$$1$$ && 0 < $otherCoords_otherGroups$$1$$.length) {
    if($coords$$11$$ && 0 < $coords$$11$$.length) {
      $coords$$11$$ = $coords$$11$$.slice(0);
      $otherCoords_otherGroups$$1$$ = (0,D.$DvtChartLineArea$_coordsToGroups$$)($otherCoords_otherGroups$$1$$);
      for(var $groups$$13$$ = (0,D.$DvtChartLineArea$_coordsToGroups$$)($coords$$11$$), $idx$$6$$ = $coords$$11$$.length, $dummyCoord_group$$22_groupIdx$$, $g$$2_i$$333$$ = $otherCoords_otherGroups$$1$$.length - 1;0 <= $g$$2_i$$333$$;$g$$2_i$$333$$--) {
        if($dummyCoord_group$$22_groupIdx$$ = $otherCoords_otherGroups$$1$$[$g$$2_i$$333$$], $dummyCoord_group$$22_groupIdx$$ = $groups$$13$$.indexOf($dummyCoord_group$$22_groupIdx$$), -1 == $dummyCoord_group$$22_groupIdx$$) {
          if(0 == $idx$$6$$) {
            $dummyCoord_group$$22_groupIdx$$ = $coords$$11$$[0].clone();
            $coords$$11$$[0] = $coords$$11$$[0].clone();
            var $startCoord$$inline_3556_startCoord$$inline_3560$$ = $dummyCoord_group$$22_groupIdx$$, $endCoord$$inline_3557$$ = $coords$$11$$[0];
            (0,D.$JSCompiler_StaticMethods_isUpstep$$)($startCoord$$inline_3556_startCoord$$inline_3560$$, $baseline$$2_params$$26$$) ? $endCoord$$inline_3557$$.$y1$ = $endCoord$$inline_3557$$.$y2$ : $startCoord$$inline_3556_startCoord$$inline_3560$$.$y2$ = $startCoord$$inline_3556_startCoord$$inline_3560$$.$y1$
          }else {
            $dummyCoord_group$$22_groupIdx$$ = $coords$$11$$[$idx$$6$$ - 1].clone(), $coords$$11$$[$idx$$6$$ - 1] = $coords$$11$$[$idx$$6$$ - 1].clone(), $startCoord$$inline_3556_startCoord$$inline_3560$$ = $coords$$11$$[$idx$$6$$ - 1], (0,D.$JSCompiler_StaticMethods_isUpstep$$)($startCoord$$inline_3556_startCoord$$inline_3560$$, $baseline$$2_params$$26$$) ? $dummyCoord_group$$22_groupIdx$$.$y1$ = $dummyCoord_group$$22_groupIdx$$.$y2$ : $startCoord$$inline_3556_startCoord$$inline_3560$$.$y2$ = $startCoord$$inline_3556_startCoord$$inline_3560$$.$y1$
          }
          $dummyCoord_group$$22_groupIdx$$.$groupIndex$ = -1;
          $coords$$11$$.splice($idx$$6$$, 0, $dummyCoord_group$$22_groupIdx$$)
        }else {
          $idx$$6$$ = $dummyCoord_group$$22_groupIdx$$
        }
      }
    }else {
      $coords$$11$$ = [];
      for($g$$2_i$$333$$ = 0;$g$$2_i$$333$$ < $otherCoords_otherGroups$$1$$.length;$g$$2_i$$333$$++) {
        $coords$$11$$.push(new D.$DvtChartCoord$$($otherCoords_otherGroups$$1$$[$g$$2_i$$333$$].x, $baseline$$2_params$$26$$, $baseline$$2_params$$26$$))
      }
    }
  }
  $baseline$$2_params$$26$$ = [];
  for($g$$2_i$$333$$ = 0;$g$$2_i$$333$$ < $coords$$11$$.length;$g$$2_i$$333$$++) {
    $coords$$11$$[$g$$2_i$$333$$].$filtered$ || ($coords$$11$$[$g$$2_i$$333$$].x == D.$JSCompiler_alias_NULL$$ ? ($baseline$$2_params$$26$$.push(window.Infinity), $baseline$$2_params$$26$$.push(window.Infinity), $baseline$$2_params$$26$$.push(window.Infinity)) : ($baseline$$2_params$$26$$.push($coords$$11$$[$g$$2_i$$333$$].x), $baseline$$2_params$$26$$.push($coords$$11$$[$g$$2_i$$333$$].$y1$), $baseline$$2_params$$26$$.push($coords$$11$$[$g$$2_i$$333$$].$y2$)), $baseline$$2_params$$26$$.push($coords$$11$$[$g$$2_i$$333$$].$groupIndex$))
  }
  return $baseline$$2_params$$26$$
};
D.$DvtChartLineArea$_animationParamsToCoords$$ = function $$DvtChartLineArea$_animationParamsToCoords$$$($params$$27$$) {
  for(var $coords$$12$$ = [], $i$$334$$ = 0;$i$$334$$ < $params$$27$$.length;$i$$334$$ += 4) {
    window.Infinity == $params$$27$$[$i$$334$$] ? $coords$$12$$.push(new D.$DvtChartCoord$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $params$$27$$[$i$$334$$ + 3])) : $coords$$12$$.push(new D.$DvtChartCoord$$($params$$27$$[$i$$334$$], $params$$27$$[$i$$334$$ + 1], $params$$27$$[$i$$334$$ + 2], $params$$27$$[$i$$334$$ + 3]))
  }
  return $coords$$12$$
};
D.$DvtChartLineArea$_coordsToGroups$$ = function $$DvtChartLineArea$_coordsToGroups$$$($coords$$13$$) {
  for(var $groups$$14$$ = [], $i$$335$$ = 0;$i$$335$$ < $coords$$13$$.length;$i$$335$$++) {
    $coords$$13$$[$i$$335$$].$filtered$ || $groups$$14$$.push($coords$$13$$[$i$$335$$].group)
  }
  return $groups$$14$$
};
D.$DvtChartLineArea$_getCurvedPathCommands$$ = function $$DvtChartLineArea$_getCurvedPathCommands$$$($cmd$$5_points$$37$$, $connectWithLine$$, $lastPoints$$1_splineType$$1$$) {
  var $arP$$ = [], $p$$3$$ = [];
  $arP$$.push($p$$3$$);
  for(var $i$$336$$ = 0;$i$$336$$ < $cmd$$5_points$$37$$.length;$i$$336$$ += 2) {
    $cmd$$5_points$$37$$[$i$$336$$] == D.$JSCompiler_alias_NULL$$ ? ($p$$3$$ = [], $arP$$.push($p$$3$$)) : $p$$3$$.push($cmd$$5_points$$37$$[$i$$336$$], $cmd$$5_points$$37$$[$i$$336$$ + 1])
  }
  $lastPoints$$1_splineType$$1$$ == window.DvtPathUtils.$SPLINE_TYPE_CARDINAL_CLOSED$ && 1 < $arP$$.length && ($lastPoints$$1_splineType$$1$$ = $arP$$.pop(), $arP$$[0] = $lastPoints$$1_splineType$$1$$.concat($arP$$[0]), $lastPoints$$1_splineType$$1$$ = window.DvtPathUtils.$SPLINE_TYPE_CARDINAL$);
  $cmd$$5_points$$37$$ = "";
  for($i$$336$$ = 0;$i$$336$$ < $arP$$.length;$i$$336$$++) {
    $p$$3$$ = $arP$$[$i$$336$$], $cmd$$5_points$$37$$ += window.DvtPathUtils.$curveThroughPoints$($p$$3$$, $connectWithLine$$, $lastPoints$$1_splineType$$1$$), $connectWithLine$$ = D.$JSCompiler_alias_TRUE$$
  }
  return $cmd$$5_points$$37$$
};
D.$DvtChartLineMarker$$ = function $$DvtChartLineMarker$$$($context$$143$$, $type$$114$$, $x$$115$$, $y$$96$$, $size$$19$$) {
  this.Init($context$$143$$, $type$$114$$, D.$JSCompiler_alias_NULL$$, $x$$115$$, $y$$96$$, $size$$19$$, $size$$19$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartLineMarker$$, D.$DvtMarker$$, "DvtChartLineMarker");
D.$DvtChartLineMarker$_SELECTED_FILL$$ = new D.$DvtSolidFill$$("#FFFFFF");
D.$DvtChartLineMarker$_SELECTED_STROKE$$ = new D.$DvtSolidStroke$$("#5A5A5A", 1, 1.5);
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartLineMarker$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setDataColor$ = function $$JSCompiler_prototypeAlias$$$$setDataColor$$($dataColor$$8$$) {
  this.$_dataColor$ = $dataColor$$8$$;
  this.$_hoverStroke$ = new D.$DvtSolidStroke$$($dataColor$$8$$, 1, 1.5)
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$setStroke$(this.$_hoverStroke$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$setStroke$(this.$isSelected$() ? D.$DvtChartLineMarker$_SELECTED_STROKE$$ : D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$22$$) {
  this.$IsSelected$ != $selected$$22$$ && (this.$IsSelected$ = $selected$$22$$, this.$isSelected$() ? (this.$setFill$(D.$DvtChartLineMarker$_SELECTED_FILL$$), this.$setStroke$(this.$isHoverEffectShown$() ? this.$_hoverStroke$ : D.$DvtChartLineMarker$_SELECTED_STROKE$$)) : ((0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this), this.$setStroke$(this.$isHoverEffectShown$() ? this.$_hoverStroke$ : D.$JSCompiler_alias_NULL$$)))
};
D.$JSCompiler_prototypeAlias$$.$UpdateSelectionEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtChartPolarBar$$ = function $$DvtChartPolarBar$$$($context$$150$$, $axisCoord$$3$$, $baselineCoord$$5$$, $endCoord$$4$$, $x1$$14$$, $x2$$13$$, $availSpace$$58$$) {
  this.Init($context$$150$$);
  this.$_axisCoord$ = $axisCoord$$3$$;
  this.$_availSpace$ = $availSpace$$58$$.clone();
  this.$_bbox$ = D.$JSCompiler_alias_NULL$$;
  this.$_setBarCoords$($baselineCoord$$5$$, $endCoord$$4$$, $x1$$14$$, $x2$$13$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartPolarBar$$, D.$DvtGraphSelectablePath$$, "DvtChartPolarBar");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartPolarBar$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setStyleProperties$ = function $$JSCompiler_prototypeAlias$$$$setStyleProperties$$($fill$$29$$, $stroke$$41$$, $dataColor$$10$$, $innerColor$$7$$, $outerColor$$7$$) {
  this.$setFill$($fill$$29$$);
  this.$setStroke$($stroke$$41$$);
  this.$setDataColor$($dataColor$$10$$, $innerColor$$7$$, $outerColor$$7$$)
};
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_baselineCoord$, this.$_endCoord$, this.$_x1$, this.$_x2$]
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($params$$30$$) {
  this.$_setBarCoords$($params$$30$$[0], $params$$30$$[1], $params$$30$$[2], $params$$30$$[3])
};
D.$JSCompiler_prototypeAlias$$.$getDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDisplayAnimation$$($duration$$28_nodePlayable$$17$$) {
  var $endState$$10$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_axisCoord$, this.$_axisCoord$, 0, 0]);
  $duration$$28_nodePlayable$$17$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$28_nodePlayable$$17$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$28_nodePlayable$$17$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$10$$);
  return $duration$$28_nodePlayable$$17$$
};
D.$JSCompiler_prototypeAlias$$.$getDeleteAnimation$ = function $$JSCompiler_prototypeAlias$$$$getDeleteAnimation$$($duration$$29_nodePlayable$$18$$) {
  var $endState$$11$$ = [this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$];
  $duration$$29_nodePlayable$$18$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$29_nodePlayable$$18$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$29_nodePlayable$$18$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$11$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$29_nodePlayable$$18$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 0);
  return $duration$$29_nodePlayable$$18$$
};
D.$JSCompiler_prototypeAlias$$.$getInsertAnimation$ = function $$JSCompiler_prototypeAlias$$$$getInsertAnimation$$($duration$$30_nodePlayable$$19$$) {
  this.$setAlpha$(0);
  var $endState$$12$$ = this.$getAnimationParams$();
  this.$setAnimationParams$([this.$_baselineCoord$, this.$_baselineCoord$, this.$_x1$, this.$_x2$]);
  $duration$$30_nodePlayable$$19$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, $duration$$30_nodePlayable$$19$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$30_nodePlayable$$19$$.$_animator$, "typeNumberArray", this, this.$getAnimationParams$, this.$setAnimationParams$, $endState$$12$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$30_nodePlayable$$19$$.$_animator$, "typeNumber", this, this.$getAlpha$, this.$setAlpha$, 1);
  return $duration$$30_nodePlayable$$19$$
};
D.$JSCompiler_prototypeAlias$$.$_setBarCoords$ = function $$JSCompiler_prototypeAlias$$$$_setBarCoords$$($baselineCoord$$6$$, $endCoord$$5$$, $x1$$15$$, $x2$$14$$) {
  var $inner1_maxY$$11$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($baselineCoord$$6$$, $x1$$15$$, this.$_availSpace$), $inner2$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($baselineCoord$$6$$, $x2$$14$$, this.$_availSpace$), $outer1$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($endCoord$$5$$, $x1$$15$$, this.$_availSpace$), $outer2$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($endCoord$$5$$, $x2$$14$$, this.$_availSpace$), $cmds$$5_minX$$9$$ = window.DvtPathUtils.moveTo($inner1_maxY$$11$$.x, 
  $inner1_maxY$$11$$.y) + window.DvtPathUtils.arcTo($baselineCoord$$6$$, $baselineCoord$$6$$, $x2$$14$$ - $x1$$15$$, 1, $inner2$$.x, $inner2$$.y) + window.DvtPathUtils.lineTo($outer2$$.x, $outer2$$.y) + window.DvtPathUtils.arcTo($endCoord$$5$$, $endCoord$$5$$, $x2$$14$$ - $x1$$15$$, 0, $outer1$$.x, $outer1$$.y) + window.DvtPathUtils.lineTo($inner1_maxY$$11$$.x, $inner1_maxY$$11$$.y) + window.DvtPathUtils.closePath();
  this.$setCmds$($cmds$$5_minX$$9$$);
  var $cmds$$5_minX$$9$$ = window.Math.min($inner1_maxY$$11$$.x, $inner2$$.x, $outer1$$.x, $outer2$$.x), $maxX$$9$$ = window.Math.max($inner1_maxY$$11$$.x, $inner2$$.x, $outer1$$.x, $outer2$$.x), $minY$$11$$ = window.Math.min($inner1_maxY$$11$$.y, $inner2$$.y, $outer1$$.y, $outer2$$.y), $inner1_maxY$$11$$ = window.Math.max($inner1_maxY$$11$$.y, $inner2$$.y, $outer1$$.y, $outer2$$.y);
  this.$_bbox$ = new D.$DvtRectangle$$($cmds$$5_minX$$9$$, $minY$$11$$, $maxX$$9$$ - $cmds$$5_minX$$9$$, $inner1_maxY$$11$$ - $minY$$11$$);
  this.$_baselineCoord$ = $baselineCoord$$6$$;
  this.$_endCoord$ = $endCoord$$5$$;
  this.$_x1$ = $x1$$15$$;
  this.$_x2$ = $x2$$14$$
};
D.$JSCompiler_prototypeAlias$$.$getBoundingBox$ = (0,D.$JSCompiler_get$$)("$_bbox$");
D.$DvtFunnelSlice$$ = function $$DvtFunnelSlice$$$($chart$$239$$, $seriesIndex$$79$$, $numDrawnSeries$$1$$, $funnelWidth$$, $funnelHeight$$, $startPercent$$, $valuePercent$$, $fillPercent$$, $gap$$8$$) {
  this.Init($chart$$239$$, $seriesIndex$$79$$, $numDrawnSeries$$1$$, $funnelWidth$$, $funnelHeight$$, $startPercent$$, $valuePercent$$, $fillPercent$$, $gap$$8$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtFunnelSlice$$, D.$DvtPath$$, "DvtFunnelSlice");
D.$DvtFunnelSlice$$.prototype.Init = function $$DvtFunnelSlice$$$$Init$($JSCompiler_inline_result$$484_chart$$240_hoverColor$$inline_3636_sliceBounds$$inline_3642_sliceFill$$inline_3633$$, $barBounds$$inline_3643_cmds$$3_labelColor$$inline_3655_seriesIndex$$80$$, $innerColor$$inline_3637_label$$inline_3645_labelString$$inline_3644_numDrawnSeries$$2_sliceBorder$$inline_3634$$, $backgroundFill$$inline_3635_funnelWidth$$1_isPatternBg$$inline_3646_outerColor$$inline_3638_sliceBounds$$inline_3632$$, $funnelHeight$$1_labelStyleArray$$inline_3647_shapeForSelection$$inline_3639_style$$inline_3648$$, 
$startPercent$$1_textDim$$inline_3649$$, $pos$$inline_3650_valuePercent$$1$$, $displacement$$inline_3652_fillPercent$$1$$, $bbox$$inline_3654_cmd$$inline_3653_gap$$9_padding$$inline_3651$$) {
  D.$DvtFunnelSlice$$.$superclass$.Init.call(this, $JSCompiler_inline_result$$484_chart$$240_hoverColor$$inline_3636_sliceBounds$$inline_3642_sliceFill$$inline_3633$$.$_context$);
  this.$_chart$ = $JSCompiler_inline_result$$484_chart$$240_hoverColor$$inline_3636_sliceBounds$$inline_3642_sliceFill$$inline_3633$$;
  this.$_seriesIndex$ = $barBounds$$inline_3643_cmds$$3_labelColor$$inline_3655_seriesIndex$$80$$;
  this.$_numDrawnSeries$ = $innerColor$$inline_3637_label$$inline_3645_labelString$$inline_3644_numDrawnSeries$$2_sliceBorder$$inline_3634$$;
  this.$_funnelWidth$ = $backgroundFill$$inline_3635_funnelWidth$$1_isPatternBg$$inline_3646_outerColor$$inline_3638_sliceBounds$$inline_3632$$;
  this.$_funnelHeight$ = $funnelHeight$$1_labelStyleArray$$inline_3647_shapeForSelection$$inline_3639_style$$inline_3648$$;
  this.$_startPercent$ = $startPercent$$1_textDim$$inline_3649$$;
  this.$_valuePercent$ = $pos$$inline_3650_valuePercent$$1$$;
  this.$_fillPercent$ = $displacement$$inline_3652_fillPercent$$1$$;
  this.$_gap$ = $bbox$$inline_3654_cmd$$inline_3653_gap$$9_padding$$inline_3651$$;
  $barBounds$$inline_3643_cmds$$3_labelColor$$inline_3655_seriesIndex$$80$$ = (0,D.$JSCompiler_StaticMethods__getPath$$)(this);
  this.$_dataColor$ = D.$DvtChartStyleUtils$$.$getColor$(this.$_chart$, this.$_seriesIndex$, 0);
  this.$_backgroundColor$ = $JSCompiler_inline_result$$484_chart$$240_hoverColor$$inline_3636_sliceBounds$$inline_3642_sliceFill$$inline_3633$$.$getOptions$().styleDefaults.backgroundColor;
  this.$_backgroundColor$ || (this.$_backgroundColor$ = D.$DvtFunnelSlice$_BACKGROUND_COLOR$$);
  this.$setCmds$($barBounds$$inline_3643_cmds$$3_labelColor$$inline_3655_seriesIndex$$80$$.slice);
  $barBounds$$inline_3643_cmds$$3_labelColor$$inline_3655_seriesIndex$$80$$.bar && (this.$_bar$ = new D.$DvtPath$$(this.$_context$, $barBounds$$inline_3643_cmds$$3_labelColor$$inline_3655_seriesIndex$$80$$.bar), this.$addChild$(this.$_bar$), this.$_bar$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$));
  $backgroundFill$$inline_3635_funnelWidth$$1_isPatternBg$$inline_3646_outerColor$$inline_3638_sliceBounds$$inline_3632$$ = $barBounds$$inline_3643_cmds$$3_labelColor$$inline_3655_seriesIndex$$80$$.sliceBounds;
  $JSCompiler_inline_result$$484_chart$$240_hoverColor$$inline_3636_sliceBounds$$inline_3642_sliceFill$$inline_3633$$ = D.$DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$(this.$_chart$, this.$_seriesIndex$, this.$_dataColor$, $backgroundFill$$inline_3635_funnelWidth$$1_isPatternBg$$inline_3646_outerColor$$inline_3638_sliceBounds$$inline_3632$$);
  $innerColor$$inline_3637_label$$inline_3645_labelString$$inline_3644_numDrawnSeries$$2_sliceBorder$$inline_3634$$ = D.$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, this.$_seriesIndex$, 0);
  $backgroundFill$$inline_3635_funnelWidth$$1_isPatternBg$$inline_3646_outerColor$$inline_3638_sliceBounds$$inline_3632$$ = D.$DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$(this.$_chart$, this.$_seriesIndex$, this.$_backgroundColor$, $backgroundFill$$inline_3635_funnelWidth$$1_isPatternBg$$inline_3646_outerColor$$inline_3638_sliceBounds$$inline_3632$$, D.$JSCompiler_alias_TRUE$$);
  this.$_bar$ ? (this.$setFill$($backgroundFill$$inline_3635_funnelWidth$$1_isPatternBg$$inline_3646_outerColor$$inline_3638_sliceBounds$$inline_3632$$), this.$_bar$.$setFill$($JSCompiler_inline_result$$484_chart$$240_hoverColor$$inline_3636_sliceBounds$$inline_3642_sliceFill$$inline_3633$$)) : this.$setFill$($JSCompiler_inline_result$$484_chart$$240_hoverColor$$inline_3636_sliceBounds$$inline_3642_sliceFill$$inline_3633$$);
  this.$setSolidStroke$($innerColor$$inline_3637_label$$inline_3645_labelString$$inline_3644_numDrawnSeries$$2_sliceBorder$$inline_3634$$ != D.$JSCompiler_alias_NULL$$ ? $innerColor$$inline_3637_label$$inline_3645_labelString$$inline_3644_numDrawnSeries$$2_sliceBorder$$inline_3634$$ : "#FFFFFF");
  this.$OriginalStroke$ = this.$getStroke$();
  this.$_chart$.$isSelectionSupported$() && ($JSCompiler_inline_result$$484_chart$$240_hoverColor$$inline_3636_sliceBounds$$inline_3642_sliceFill$$inline_3633$$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$(this.$_dataColor$), $innerColor$$inline_3637_label$$inline_3645_labelString$$inline_3644_numDrawnSeries$$2_sliceBorder$$inline_3634$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$(this.$_chart$), $backgroundFill$$inline_3635_funnelWidth$$1_isPatternBg$$inline_3646_outerColor$$inline_3638_sliceBounds$$inline_3632$$ = 
  D.$DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) ? D.$DvtChartStyleUtils$$.$getSelectedOuterColor$(this.$_chart$) : this.$_dataColor$, $funnelHeight$$1_labelStyleArray$$inline_3647_shapeForSelection$$inline_3639_style$$inline_3648$$ = this.$_bar$ != D.$JSCompiler_alias_NULL$$ ? this.$_bar$ : this, $funnelHeight$$1_labelStyleArray$$inline_3647_shapeForSelection$$inline_3639_style$$inline_3648$$.$setHoverStroke$(new D.$DvtSolidStroke$$($JSCompiler_inline_result$$484_chart$$240_hoverColor$$inline_3636_sliceBounds$$inline_3642_sliceFill$$inline_3633$$, 
  1, 2)), $funnelHeight$$1_labelStyleArray$$inline_3647_shapeForSelection$$inline_3639_style$$inline_3648$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($innerColor$$inline_3637_label$$inline_3645_labelString$$inline_3644_numDrawnSeries$$2_sliceBorder$$inline_3634$$, 1, 1.5), new D.$DvtSolidStroke$$($backgroundFill$$inline_3635_funnelWidth$$1_isPatternBg$$inline_3646_outerColor$$inline_3638_sliceBounds$$inline_3632$$, 1, 4.5)), $funnelHeight$$1_labelStyleArray$$inline_3647_shapeForSelection$$inline_3639_style$$inline_3648$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($innerColor$$inline_3637_label$$inline_3645_labelString$$inline_3644_numDrawnSeries$$2_sliceBorder$$inline_3634$$, 
  1, 1.5), new D.$DvtSolidStroke$$($JSCompiler_inline_result$$484_chart$$240_hoverColor$$inline_3636_sliceBounds$$inline_3642_sliceFill$$inline_3633$$, 1, 4.5)), this.setCursor("pointer"));
  a: {
    $JSCompiler_inline_result$$484_chart$$240_hoverColor$$inline_3636_sliceBounds$$inline_3642_sliceFill$$inline_3633$$ = $barBounds$$inline_3643_cmds$$3_labelColor$$inline_3655_seriesIndex$$80$$.sliceBounds;
    $barBounds$$inline_3643_cmds$$3_labelColor$$inline_3655_seriesIndex$$80$$ = $barBounds$$inline_3643_cmds$$3_labelColor$$inline_3655_seriesIndex$$80$$.barBounds;
    if($innerColor$$inline_3637_label$$inline_3645_labelString$$inline_3644_numDrawnSeries$$2_sliceBorder$$inline_3634$$ = D.$DvtChartDataUtils$$.$getSeriesLabel$(this.$_chart$, this.$_seriesIndex$)) {
      if($innerColor$$inline_3637_label$$inline_3645_labelString$$inline_3644_numDrawnSeries$$2_sliceBorder$$inline_3634$$ = new D.$DvtOutputText$$(this.$_context$, $innerColor$$inline_3637_label$$inline_3645_labelString$$inline_3644_numDrawnSeries$$2_sliceBorder$$inline_3634$$, 0, 0), $backgroundFill$$inline_3635_funnelWidth$$1_isPatternBg$$inline_3646_outerColor$$inline_3638_sliceBounds$$inline_3632$$ = D.$DvtChartStyleUtils$$.$getPattern$(this.$_chart$, this.$_seriesIndex$, 0) != D.$JSCompiler_alias_NULL$$, 
      $funnelHeight$$1_labelStyleArray$$inline_3647_shapeForSelection$$inline_3639_style$$inline_3648$$ = [this.$_chart$.$getOptions$().styleDefaults.sliceLabelStyle, new D.$DvtCSSStyle$$(D.$DvtChartDataUtils$$.$getDataItem$(this.$_chart$, this.$_seriesIndex$, 0).labelStyle)], $funnelHeight$$1_labelStyleArray$$inline_3647_shapeForSelection$$inline_3639_style$$inline_3648$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($funnelHeight$$1_labelStyleArray$$inline_3647_shapeForSelection$$inline_3639_style$$inline_3648$$), 
      $innerColor$$inline_3637_label$$inline_3645_labelString$$inline_3644_numDrawnSeries$$2_sliceBorder$$inline_3634$$.$setCSSStyle$($funnelHeight$$1_labelStyleArray$$inline_3647_shapeForSelection$$inline_3639_style$$inline_3648$$), D.$DvtTextUtils$$.$fitText$($innerColor$$inline_3637_label$$inline_3645_labelString$$inline_3644_numDrawnSeries$$2_sliceBorder$$inline_3634$$, $JSCompiler_inline_result$$484_chart$$240_hoverColor$$inline_3636_sliceBounds$$inline_3642_sliceFill$$inline_3633$$.$h$ - 10, 
      $JSCompiler_inline_result$$484_chart$$240_hoverColor$$inline_3636_sliceBounds$$inline_3642_sliceFill$$inline_3633$$.$w$, this, 3)) {
        $startPercent$$1_textDim$$inline_3649$$ = $innerColor$$inline_3637_label$$inline_3645_labelString$$inline_3644_numDrawnSeries$$2_sliceBorder$$inline_3634$$.$measureDimensions$();
        $pos$$inline_3650_valuePercent$$1$$ = (0,D.$JSCompiler_StaticMethods__getSliceLabelPosition$$)(this, $JSCompiler_inline_result$$484_chart$$240_hoverColor$$inline_3636_sliceBounds$$inline_3642_sliceFill$$inline_3633$$);
        $backgroundFill$$inline_3635_funnelWidth$$1_isPatternBg$$inline_3646_outerColor$$inline_3638_sliceBounds$$inline_3632$$ && ($bbox$$inline_3654_cmd$$inline_3653_gap$$9_padding$$inline_3651$$ = 0.15 * $startPercent$$1_textDim$$inline_3649$$.$h$, $displacement$$inline_3652_fillPercent$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? 0.5 : -0.5, $bbox$$inline_3654_cmd$$inline_3653_gap$$9_padding$$inline_3651$$ = window.DvtPathUtils.$roundedRectangle$($startPercent$$1_textDim$$inline_3649$$.x - 
        $bbox$$inline_3654_cmd$$inline_3653_gap$$9_padding$$inline_3651$$, $startPercent$$1_textDim$$inline_3649$$.y, $startPercent$$1_textDim$$inline_3649$$.$w$ + 2 * $bbox$$inline_3654_cmd$$inline_3653_gap$$9_padding$$inline_3651$$, $startPercent$$1_textDim$$inline_3649$$.$h$, 2, 2, 2, 2), $bbox$$inline_3654_cmd$$inline_3653_gap$$9_padding$$inline_3651$$ = new D.$DvtPath$$(this.$_context$, $bbox$$inline_3654_cmd$$inline_3653_gap$$9_padding$$inline_3651$$), $bbox$$inline_3654_cmd$$inline_3653_gap$$9_padding$$inline_3651$$.$setSolidFill$("#FFFFFF", 
        0.9), $pos$$inline_3650_valuePercent$$1$$.translate($displacement$$inline_3652_fillPercent$$1$$ * $startPercent$$1_textDim$$inline_3649$$.$h$, -$displacement$$inline_3652_fillPercent$$1$$ * $startPercent$$1_textDim$$inline_3649$$.$w$), $bbox$$inline_3654_cmd$$inline_3653_gap$$9_padding$$inline_3651$$.$setMatrix$($pos$$inline_3650_valuePercent$$1$$), this.$addChild$($bbox$$inline_3654_cmd$$inline_3653_gap$$9_padding$$inline_3651$$));
        $barBounds$$inline_3643_cmds$$3_labelColor$$inline_3655_seriesIndex$$80$$ = $backgroundFill$$inline_3635_funnelWidth$$1_isPatternBg$$inline_3646_outerColor$$inline_3638_sliceBounds$$inline_3632$$ ? "#0000000" : (0,D.$JSCompiler_StaticMethods_containsPoint$$)($barBounds$$inline_3643_cmds$$3_labelColor$$inline_3655_seriesIndex$$80$$, $JSCompiler_inline_result$$484_chart$$240_hoverColor$$inline_3636_sliceBounds$$inline_3642_sliceFill$$inline_3633$$.x, $JSCompiler_inline_result$$484_chart$$240_hoverColor$$inline_3636_sliceBounds$$inline_3642_sliceFill$$inline_3633$$.y + 
        ($JSCompiler_inline_result$$484_chart$$240_hoverColor$$inline_3636_sliceBounds$$inline_3642_sliceFill$$inline_3633$$.$h$ - $startPercent$$1_textDim$$inline_3649$$.$w$) / 2) ? D.$DvtColorUtils$$.$getContrastingTextColor$(this.$_dataColor$) : D.$DvtColorUtils$$.$getContrastingTextColor$(this.$_backgroundColor$);
        $funnelHeight$$1_labelStyleArray$$inline_3647_shapeForSelection$$inline_3639_style$$inline_3648$$.$getStyle$("color") || $innerColor$$inline_3637_label$$inline_3645_labelString$$inline_3644_numDrawnSeries$$2_sliceBorder$$inline_3634$$.$setCSSStyle$($funnelHeight$$1_labelStyleArray$$inline_3647_shapeForSelection$$inline_3639_style$$inline_3648$$.$setStyle$("color", $barBounds$$inline_3643_cmds$$3_labelColor$$inline_3655_seriesIndex$$80$$));
        $innerColor$$inline_3637_label$$inline_3645_labelString$$inline_3644_numDrawnSeries$$2_sliceBorder$$inline_3634$$.$setMatrix$((0,D.$JSCompiler_StaticMethods__getSliceLabelPosition$$)(this, $JSCompiler_inline_result$$484_chart$$240_hoverColor$$inline_3636_sliceBounds$$inline_3642_sliceFill$$inline_3633$$));
        $innerColor$$inline_3637_label$$inline_3645_labelString$$inline_3644_numDrawnSeries$$2_sliceBorder$$inline_3634$$.$alignCenter$();
        $innerColor$$inline_3637_label$$inline_3645_labelString$$inline_3644_numDrawnSeries$$2_sliceBorder$$inline_3634$$.$alignMiddle$();
        $JSCompiler_inline_result$$484_chart$$240_hoverColor$$inline_3636_sliceBounds$$inline_3642_sliceFill$$inline_3633$$ = $innerColor$$inline_3637_label$$inline_3645_labelString$$inline_3644_numDrawnSeries$$2_sliceBorder$$inline_3634$$;
        break a
      }
    }
    $JSCompiler_inline_result$$484_chart$$240_hoverColor$$inline_3636_sliceBounds$$inline_3642_sliceFill$$inline_3633$$ = D.$JSCompiler_alias_VOID$$
  }
  this.$_label$ = $JSCompiler_inline_result$$484_chart$$240_hoverColor$$inline_3636_sliceBounds$$inline_3642_sliceFill$$inline_3633$$;
  this.$_label$ != D.$JSCompiler_alias_NULL$$ && (this.$_label$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$addChild$(this.$_label$))
};
D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$ = D.$DvtMath$$.$degreesToRads$(31);
D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$ = D.$DvtMath$$.$degreesToRads$(29);
D.$DvtFunnelSlice$_FUNNEL_RATIO$$ = 6 / 22;
D.$DvtFunnelSlice$_BACKGROUND_COLOR$$ = "#EDEDED";
D.$JSCompiler_StaticMethods__getPath$$ = function $$JSCompiler_StaticMethods__getPath$$$($JSCompiler_StaticMethods__getPath$self_alpha$$17$$) {
  var $is3D_rx$$9$$ = "on" == $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_chart$.$getOptions$().styleDefaults.threeDEffect ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$, $isBiDi$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_context$), $gapCount_ry$$5$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_chart$), $ar$$9_offset$$18$$ = ($JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_numDrawnSeries$ + 
  1) * $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_gap$;
  if($is3D_rx$$9$$) {
    var $is3D_rx$$9$$ = ($JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_funnelWidth$ - $gapCount_ry$$5$$ * $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_gap$) / window.Math.sin(D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$), $gapCount_ry$$5$$ = $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_funnelHeight$ / window.Math.sin(D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$), $ratio$$1$$ = 0.12 * ($JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_funnelWidth$ / $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_funnelHeight$), 
    $delta$$5_pathCommands$$2$$ = D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$ * (1 - $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_startPercent$), $barCommands_gamma$$ = D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$ * (1 - $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_startPercent$ - $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_valuePercent$), $c1$$1_sliceBounds$$ = (1 + D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_funnelHeight$ + $gapCount_ry$$5$$, 
    $c2$$1$$ = (1 - D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_funnelHeight$ - $gapCount_ry$$5$$, $arcDir1$$ = 1, $arcDir2$$ = 0;
    $isBiDi$$ ? ($ar$$9_offset$$18$$ = [$is3D_rx$$9$$ * window.Math.sin($delta$$5_pathCommands$$2$$) + $ar$$9_offset$$18$$, $c1$$1_sliceBounds$$ - $gapCount_ry$$5$$ * window.Math.cos($delta$$5_pathCommands$$2$$), $is3D_rx$$9$$ * window.Math.sin($barCommands_gamma$$) + $ar$$9_offset$$18$$, $c1$$1_sliceBounds$$ - $gapCount_ry$$5$$ * window.Math.cos($barCommands_gamma$$), $is3D_rx$$9$$ * window.Math.sin($barCommands_gamma$$) + $ar$$9_offset$$18$$, $c2$$1$$ + $gapCount_ry$$5$$ * window.Math.cos($barCommands_gamma$$), 
    $is3D_rx$$9$$ * window.Math.sin($delta$$5_pathCommands$$2$$) + $ar$$9_offset$$18$$, $c2$$1$$ + $gapCount_ry$$5$$ * window.Math.cos($delta$$5_pathCommands$$2$$)], $arcDir1$$ = 0, $arcDir2$$ = 1) : $ar$$9_offset$$18$$ = [$JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_funnelWidth$ - $ar$$9_offset$$18$$ - $is3D_rx$$9$$ * window.Math.sin($delta$$5_pathCommands$$2$$), $c1$$1_sliceBounds$$ - $gapCount_ry$$5$$ * window.Math.cos($delta$$5_pathCommands$$2$$), $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_funnelWidth$ - 
    $ar$$9_offset$$18$$ - $is3D_rx$$9$$ * window.Math.sin($barCommands_gamma$$), $c1$$1_sliceBounds$$ - $gapCount_ry$$5$$ * window.Math.cos($barCommands_gamma$$), $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_funnelWidth$ - $ar$$9_offset$$18$$ - $is3D_rx$$9$$ * window.Math.sin($barCommands_gamma$$), $c2$$1$$ + $gapCount_ry$$5$$ * window.Math.cos($barCommands_gamma$$), $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_funnelWidth$ - $ar$$9_offset$$18$$ - $is3D_rx$$9$$ * window.Math.sin($delta$$5_pathCommands$$2$$), 
    $c2$$1$$ + $gapCount_ry$$5$$ * window.Math.cos($delta$$5_pathCommands$$2$$)];
    $delta$$5_pathCommands$$2$$ = window.DvtPathUtils.moveTo($ar$$9_offset$$18$$[0], $ar$$9_offset$$18$$[1]);
    $barCommands_gamma$$ = D.$JSCompiler_alias_NULL$$;
    $delta$$5_pathCommands$$2$$ += window.DvtPathUtils.arcTo($ratio$$1$$ * ($ar$$9_offset$$18$$[1] - $ar$$9_offset$$18$$[7]) / 2, ($ar$$9_offset$$18$$[1] - $ar$$9_offset$$18$$[7]) / 2, window.Math.PI, $arcDir2$$, $ar$$9_offset$$18$$[6], $ar$$9_offset$$18$$[7]);
    $delta$$5_pathCommands$$2$$ += window.DvtPathUtils.arcTo($ratio$$1$$ * ($ar$$9_offset$$18$$[1] - $ar$$9_offset$$18$$[7]) / 2, ($ar$$9_offset$$18$$[1] - $ar$$9_offset$$18$$[7]) / 2, window.Math.PI, $arcDir2$$, $ar$$9_offset$$18$$[0], $ar$$9_offset$$18$$[1]);
    $delta$$5_pathCommands$$2$$ += window.DvtPathUtils.arcTo($is3D_rx$$9$$, $gapCount_ry$$5$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$, $arcDir1$$, $ar$$9_offset$$18$$[2], $ar$$9_offset$$18$$[3]);
    $delta$$5_pathCommands$$2$$ += window.DvtPathUtils.arcTo($ratio$$1$$ * ($ar$$9_offset$$18$$[3] - $ar$$9_offset$$18$$[5]) / 2, ($ar$$9_offset$$18$$[3] - $ar$$9_offset$$18$$[5]) / 2, window.Math.PI, $arcDir2$$, $ar$$9_offset$$18$$[4], $ar$$9_offset$$18$$[5]);
    $delta$$5_pathCommands$$2$$ += window.DvtPathUtils.arcTo($is3D_rx$$9$$, $gapCount_ry$$5$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$, $arcDir1$$, $ar$$9_offset$$18$$[6], $ar$$9_offset$$18$$[7]);
    $c1$$1_sliceBounds$$ = new D.$DvtRectangle$$(window.Math.min($ar$$9_offset$$18$$[0], $ar$$9_offset$$18$$[2]), $ar$$9_offset$$18$$[5], window.Math.abs($ar$$9_offset$$18$$[0] - $ar$$9_offset$$18$$[2]), window.Math.abs($ar$$9_offset$$18$$[3] - $ar$$9_offset$$18$$[5]));
    if($JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_fillPercent$ != D.$JSCompiler_alias_NULL$$) {
      var $barBounds_percent$$1$$ = window.Math.max(window.Math.min($JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_fillPercent$, 1), 0);
      $JSCompiler_StaticMethods__getPath$self_alpha$$17$$ = $isBiDi$$ ? -$barBounds_percent$$1$$ * window.Math.PI : $barBounds_percent$$1$$ * window.Math.PI;
      $barCommands_gamma$$ = window.DvtPathUtils.moveTo($ar$$9_offset$$18$$[0], $ar$$9_offset$$18$$[1]);
      $barCommands_gamma$$ += window.DvtPathUtils.arcTo($is3D_rx$$9$$, $gapCount_ry$$5$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$, $arcDir1$$, $ar$$9_offset$$18$$[2], $ar$$9_offset$$18$$[3]);
      $barCommands_gamma$$ += window.DvtPathUtils.arcTo($ratio$$1$$ * ($ar$$9_offset$$18$$[3] - $ar$$9_offset$$18$$[5]) / 2, ($ar$$9_offset$$18$$[3] - $ar$$9_offset$$18$$[5]) / 2, $JSCompiler_StaticMethods__getPath$self_alpha$$17$$, $arcDir2$$, $ar$$9_offset$$18$$[2] + $ratio$$1$$ * ($ar$$9_offset$$18$$[3] - $ar$$9_offset$$18$$[5]) / 2 * window.Math.sin($JSCompiler_StaticMethods__getPath$self_alpha$$17$$), ($ar$$9_offset$$18$$[5] + $ar$$9_offset$$18$$[3]) / 2 + ($ar$$9_offset$$18$$[3] - $ar$$9_offset$$18$$[5]) / 
      2 * window.Math.cos($JSCompiler_StaticMethods__getPath$self_alpha$$17$$));
      $barCommands_gamma$$ += window.DvtPathUtils.arcTo($is3D_rx$$9$$, $gapCount_ry$$5$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_3D$$, $arcDir1$$, $ar$$9_offset$$18$$[6] + $ratio$$1$$ * ($ar$$9_offset$$18$$[1] - $ar$$9_offset$$18$$[7]) / 2 * window.Math.sin($JSCompiler_StaticMethods__getPath$self_alpha$$17$$), ($ar$$9_offset$$18$$[7] + $ar$$9_offset$$18$$[1]) / 2 + ($ar$$9_offset$$18$$[1] - $ar$$9_offset$$18$$[7]) / 2 * window.Math.cos($JSCompiler_StaticMethods__getPath$self_alpha$$17$$));
      $barCommands_gamma$$ += window.DvtPathUtils.arcTo($ratio$$1$$ * ($ar$$9_offset$$18$$[1] - $ar$$9_offset$$18$$[7]) / 2, ($ar$$9_offset$$18$$[1] - $ar$$9_offset$$18$$[7]) / 2, $JSCompiler_StaticMethods__getPath$self_alpha$$17$$, $arcDir1$$, $ar$$9_offset$$18$$[0], $ar$$9_offset$$18$$[1]);
      $barBounds_percent$$1$$ = new D.$DvtRectangle$$(window.Math.min($ar$$9_offset$$18$$[0], $ar$$9_offset$$18$$[2]), $ar$$9_offset$$18$$[5] + window.Math.abs($ar$$9_offset$$18$$[3] - $ar$$9_offset$$18$$[5]) * (1 - $barBounds_percent$$1$$), window.Math.abs($ar$$9_offset$$18$$[0] - $ar$$9_offset$$18$$[2]), window.Math.abs($ar$$9_offset$$18$$[3] - $ar$$9_offset$$18$$[5]) * $barBounds_percent$$1$$)
    }
  }else {
    $is3D_rx$$9$$ = ($JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_funnelWidth$ - $gapCount_ry$$5$$ * $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_gap$) / window.Math.sin(D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$), $gapCount_ry$$5$$ = $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_funnelHeight$ / window.Math.sin(D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$), $delta$$5_pathCommands$$2$$ = D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$ * (1 - $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_startPercent$), 
    $barCommands_gamma$$ = D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$ * (1 - $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_startPercent$ - $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_valuePercent$), $c1$$1_sliceBounds$$ = (1 + D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_funnelHeight$ + $gapCount_ry$$5$$, $c2$$1$$ = (1 - D.$DvtFunnelSlice$_FUNNEL_RATIO$$) / 2 * $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_funnelHeight$ - $gapCount_ry$$5$$, 
    $arcDir1$$ = 1, $arcDir2$$ = 0, $isBiDi$$ ? ($ar$$9_offset$$18$$ = [$is3D_rx$$9$$ * window.Math.sin($delta$$5_pathCommands$$2$$) + $ar$$9_offset$$18$$, $c1$$1_sliceBounds$$ - $gapCount_ry$$5$$ * window.Math.cos($delta$$5_pathCommands$$2$$), $is3D_rx$$9$$ * window.Math.sin($barCommands_gamma$$) + $ar$$9_offset$$18$$, $c1$$1_sliceBounds$$ - $gapCount_ry$$5$$ * window.Math.cos($barCommands_gamma$$), $is3D_rx$$9$$ * window.Math.sin($barCommands_gamma$$) + $ar$$9_offset$$18$$, $c2$$1$$ + $gapCount_ry$$5$$ * 
    window.Math.cos($barCommands_gamma$$), $is3D_rx$$9$$ * window.Math.sin($delta$$5_pathCommands$$2$$) + $ar$$9_offset$$18$$, $c2$$1$$ + $gapCount_ry$$5$$ * window.Math.cos($delta$$5_pathCommands$$2$$)], $arcDir1$$ = 0, $arcDir2$$ = 1) : $ar$$9_offset$$18$$ = [$JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_funnelWidth$ - $ar$$9_offset$$18$$ - $is3D_rx$$9$$ * window.Math.sin($delta$$5_pathCommands$$2$$), $c1$$1_sliceBounds$$ - $gapCount_ry$$5$$ * window.Math.cos($delta$$5_pathCommands$$2$$), 
    $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_funnelWidth$ - $ar$$9_offset$$18$$ - $is3D_rx$$9$$ * window.Math.sin($barCommands_gamma$$), $c1$$1_sliceBounds$$ - $gapCount_ry$$5$$ * window.Math.cos($barCommands_gamma$$), $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_funnelWidth$ - $ar$$9_offset$$18$$ - $is3D_rx$$9$$ * window.Math.sin($barCommands_gamma$$), $c2$$1$$ + $gapCount_ry$$5$$ * window.Math.cos($barCommands_gamma$$), $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_funnelWidth$ - 
    $ar$$9_offset$$18$$ - $is3D_rx$$9$$ * window.Math.sin($delta$$5_pathCommands$$2$$), $c2$$1$$ + $gapCount_ry$$5$$ * window.Math.cos($delta$$5_pathCommands$$2$$)], $delta$$5_pathCommands$$2$$ = window.DvtPathUtils.moveTo($ar$$9_offset$$18$$[0], $ar$$9_offset$$18$$[1]), $barCommands_gamma$$ = D.$JSCompiler_alias_NULL$$, $delta$$5_pathCommands$$2$$ += window.DvtPathUtils.arcTo($is3D_rx$$9$$, $gapCount_ry$$5$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir1$$, $ar$$9_offset$$18$$[2], $ar$$9_offset$$18$$[3]), 
    $delta$$5_pathCommands$$2$$ += window.DvtPathUtils.lineTo($ar$$9_offset$$18$$[4], $ar$$9_offset$$18$$[5]), $delta$$5_pathCommands$$2$$ += window.DvtPathUtils.arcTo($is3D_rx$$9$$, $gapCount_ry$$5$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir1$$, $ar$$9_offset$$18$$[6], $ar$$9_offset$$18$$[7]), $delta$$5_pathCommands$$2$$ += window.DvtPathUtils.closePath(), $c1$$1_sliceBounds$$ = new D.$DvtRectangle$$(window.Math.min($ar$$9_offset$$18$$[0], $ar$$9_offset$$18$$[2]), $ar$$9_offset$$18$$[5], window.Math.abs($ar$$9_offset$$18$$[0] - 
    $ar$$9_offset$$18$$[2]), window.Math.abs($ar$$9_offset$$18$$[3] - $ar$$9_offset$$18$$[5])), $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_fillPercent$ != D.$JSCompiler_alias_NULL$$ && ($barBounds_percent$$1$$ = window.Math.max(window.Math.min($JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_fillPercent$, 1), 0), $barCommands_gamma$$ = window.DvtPathUtils.moveTo($ar$$9_offset$$18$$[0], $ar$$9_offset$$18$$[1]), $barCommands_gamma$$ += window.DvtPathUtils.arcTo($is3D_rx$$9$$, $gapCount_ry$$5$$, 
    D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir1$$, $ar$$9_offset$$18$$[2], $ar$$9_offset$$18$$[3]), $barCommands_gamma$$ += window.DvtPathUtils.lineTo($ar$$9_offset$$18$$[4], $ar$$9_offset$$18$$[3] + $barBounds_percent$$1$$ * ($ar$$9_offset$$18$$[5] - $ar$$9_offset$$18$$[3])), $barCommands_gamma$$ = 0.95 < $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_fillPercent$ ? $barCommands_gamma$$ + window.DvtPathUtils.arcTo($is3D_rx$$9$$, $gapCount_ry$$5$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, 
    $arcDir1$$, $ar$$9_offset$$18$$[6], $ar$$9_offset$$18$$[1] + $barBounds_percent$$1$$ * ($ar$$9_offset$$18$$[7] - $ar$$9_offset$$18$$[1])) : 0.05 > $JSCompiler_StaticMethods__getPath$self_alpha$$17$$.$_fillPercent$ ? $barCommands_gamma$$ + window.DvtPathUtils.arcTo($is3D_rx$$9$$, $gapCount_ry$$5$$, D.$DvtFunnelSlice$_FUNNEL_ANGLE_2D$$, $arcDir2$$, $ar$$9_offset$$18$$[6], $ar$$9_offset$$18$$[1] + $barBounds_percent$$1$$ * ($ar$$9_offset$$18$$[7] - $ar$$9_offset$$18$$[1])) : $barCommands_gamma$$ + 
    window.DvtPathUtils.lineTo($ar$$9_offset$$18$$[6], $ar$$9_offset$$18$$[1] + $barBounds_percent$$1$$ * ($ar$$9_offset$$18$$[7] - $ar$$9_offset$$18$$[1])), $barCommands_gamma$$ += window.DvtPathUtils.closePath(), $barBounds_percent$$1$$ = new D.$DvtRectangle$$(window.Math.min($ar$$9_offset$$18$$[0], $ar$$9_offset$$18$$[2]), $ar$$9_offset$$18$$[5] + window.Math.abs($ar$$9_offset$$18$$[3] - $ar$$9_offset$$18$$[5]) * (1 - $barBounds_percent$$1$$), window.Math.abs($ar$$9_offset$$18$$[0] - $ar$$9_offset$$18$$[2]), 
    window.Math.abs($ar$$9_offset$$18$$[3] - $ar$$9_offset$$18$$[5]) * $barBounds_percent$$1$$))
  }
  return{slice:$delta$$5_pathCommands$$2$$, bar:$barCommands_gamma$$, sliceBounds:$c1$$1_sliceBounds$$, barBounds:$barCommands_gamma$$ ? $barBounds_percent$$1$$ : $c1$$1_sliceBounds$$}
};
D.$JSCompiler_StaticMethods__getSliceLabelPosition$$ = function $$JSCompiler_StaticMethods__getSliceLabelPosition$$$($JSCompiler_StaticMethods__getSliceLabelPosition$self$$, $sliceBounds$$2$$) {
  var $displacement$$2$$ = "on" == $JSCompiler_StaticMethods__getSliceLabelPosition$self$$.$_chart$.$getOptions$().styleDefaults.threeDEffect ? 0.12 * ($sliceBounds$$2$$.$h$ * $JSCompiler_StaticMethods__getSliceLabelPosition$self$$.$_funnelWidth$ / $JSCompiler_StaticMethods__getSliceLabelPosition$self$$.$_funnelHeight$) / 2 : 0, $rotationMatrix$$1$$ = new D.$DvtMatrix$$;
  (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__getSliceLabelPosition$self$$.$_context$) ? ($rotationMatrix$$1$$.rotate(window.Math.PI / 2), $rotationMatrix$$1$$.translate($sliceBounds$$2$$.x + $sliceBounds$$2$$.$w$ / 2 - $displacement$$2$$, $sliceBounds$$2$$.y + $sliceBounds$$2$$.$h$ / 2)) : ($rotationMatrix$$1$$.rotate(3 * window.Math.PI / 2), $rotationMatrix$$1$$.translate($sliceBounds$$2$$.x + $sliceBounds$$2$$.$w$ / 2 + $displacement$$2$$, $sliceBounds$$2$$.y + $sliceBounds$$2$$.$h$ / 
  2));
  return $rotationMatrix$$1$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtFunnelSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$getAnimationParams$$() {
  return[this.$_startPercent$, this.$_valuePercent$, this.$_fillPercent$, this.$getAlpha$()]
};
D.$JSCompiler_prototypeAlias$$.$setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$setAnimationParams$$($ar$$10_cmds$$4$$) {
  this.$_startPercent$ = $ar$$10_cmds$$4$$[0];
  this.$_valuePercent$ = $ar$$10_cmds$$4$$[1];
  this.$_fillPercent$ = this.$_fillPercent$ != D.$JSCompiler_alias_NULL$$ ? $ar$$10_cmds$$4$$[2] : D.$JSCompiler_alias_NULL$$;
  this.$setAlpha$($ar$$10_cmds$$4$$[3]);
  $ar$$10_cmds$$4$$ = (0,D.$JSCompiler_StaticMethods__getPath$$)(this);
  this.$setCmds$($ar$$10_cmds$$4$$.slice);
  $ar$$10_cmds$$4$$.bar && this.$_bar$ && this.$_bar$.$setCmds$($ar$$10_cmds$$4$$.bar);
  this.$_label$ && this.$_label$.$setMatrix$((0,D.$JSCompiler_StaticMethods__getSliceLabelPosition$$)(this, $ar$$10_cmds$$4$$.sliceBounds))
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$23$$) {
  if(this.$_bar$ != D.$JSCompiler_alias_NULL$$) {
    if(this.$IsSelected$ == $selected$$23$$) {
      return
    }
    this.$IsSelected$ = $selected$$23$$;
    this.$_bar$.$setSelected$($selected$$23$$)
  }else {
    D.$DvtFunnelSlice$$.$superclass$.$setSelected$.call(this, $selected$$23$$)
  }
  var $dims$$29$$ = this.$getDimensions$(), $shapeForSelection$$1$$ = this.$_bar$ != D.$JSCompiler_alias_NULL$$ ? this.$_bar$ : this, $w$$18$$ = $dims$$29$$.$w$;
  $selected$$23$$ ? ($shapeForSelection$$1$$.$setScaleX$(($w$$18$$ - 3) / $w$$18$$), $shapeForSelection$$1$$.$setTranslateX$(window.Math.ceil(1.5) + 3 / $w$$18$$ * $dims$$29$$.x)) : ($shapeForSelection$$1$$.$setScaleX$(1), $shapeForSelection$$1$$.$setTranslateX$(0))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_bar$ != D.$JSCompiler_alias_NULL$$ ? this.$_bar$.$showHoverEffect$() : D.$DvtFunnelSlice$$.$superclass$.$showHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_bar$ != D.$JSCompiler_alias_NULL$$ ? this.$_bar$.$hideHoverEffect$() : D.$DvtFunnelSlice$$.$superclass$.$hideHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$copyShape$ = function $$JSCompiler_prototypeAlias$$$$copyShape$$() {
  return new D.$DvtFunnelSlice$$(this.$_chart$, this.$_seriesIndex$, this.$_numDrawnSeries$, this.$_funnelWidth$, this.$_funnelHeight$, this.$_startPercent$, this.$_valuePercent$, this.$_fillPercent$, this.$_gap$)
};
D.$DvtPieChart$$ = function $$DvtPieChart$$$($chart$$237$$, $availSpace$$56$$, $callback$$70$$, $callbackObj$$43$$) {
  this.Init($chart$$237$$, $availSpace$$56$$, $callback$$70$$, $callbackObj$$43$$)
};
D.$DvtPieChart$_THREED_TILT$$ = 0.59;
D.$DvtObj$$.$createSubclass$(D.$DvtPieChart$$, D.$DvtContainer$$, "DvtPieChart");
D.$DvtPieChart$$.prototype.Init = function $$DvtPieChart$$$$Init$($chart$$238$$, $availSpace$$57$$) {
  D.$DvtPieChart$$.$superclass$.Init.call(this, $chart$$238$$.$_context$);
  this.$chart$ = $chart$$238$$;
  this.$_options$ = $chart$$238$$.$getOptions$();
  this.$_frame$ = $availSpace$$57$$.clone();
  $chart$$238$$.$pieChart$ = this;
  this.$_labelPosition$ = this.$_options$.styleDefaults.sliceLabelPosition;
  "auto" == this.$_labelPosition$ && (this.$_labelPosition$ = "outside");
  this.$_center$ = new D.$DvtPoint$$($availSpace$$57$$.x + window.Math.floor($availSpace$$57$$.$w$ / 2), $availSpace$$57$$.y + window.Math.floor($availSpace$$57$$.$h$ / 2));
  var $radiusScale_slices$$inline_3565$$ = "outside" == this.$_labelPosition$ ? 0.38 : 0.45;
  this.$_radiusY$ = this.$_radiusX$ = window.Math.floor(window.Math.min($availSpace$$57$$.$w$, $availSpace$$57$$.$h$) * $radiusScale_slices$$inline_3565$$);
  this.$_depth$ = 0;
  this.$_anchorOffset$ = 90;
  (0,D.$JSCompiler_StaticMethods_is3D$$)(this) && (this.$_depth$ = 0.1 * $availSpace$$57$$.$h$, this.$_center$.y -= window.Math.floor(this.$_depth$ / 2), this.$_radiusY$ *= D.$DvtPieChart$_THREED_TILT$$);
  for(var $radiusScale_slices$$inline_3565$$ = [], $seriesIndex$$inline_3568_slice$$inline_3566$$, $seriesIndices$$inline_3567$$ = D.$DvtPieChartUtils$$.$getRenderedSeriesIndices$(this.$chart$), $otherValue$$inline_3569$$ = D.$DvtPieChartUtils$$.$getOtherValue$(this.$chart$), $i$$inline_3570$$ = 0;$i$$inline_3570$$ < $seriesIndices$$inline_3567$$.length;$i$$inline_3570$$++) {
    $seriesIndex$$inline_3568_slice$$inline_3566$$ = $seriesIndices$$inline_3567$$[$i$$inline_3570$$], D.$DvtChartStyleUtils$$.$isSeriesRendered$(this.$chart$, $seriesIndex$$inline_3568_slice$$inline_3566$$) && ($seriesIndex$$inline_3568_slice$$inline_3566$$ = new D.$DvtPieSlice$$(this, $seriesIndex$$inline_3568_slice$$inline_3566$$), 0 >= $seriesIndex$$inline_3568_slice$$inline_3566$$.getValue() || $radiusScale_slices$$inline_3565$$.push($seriesIndex$$inline_3568_slice$$inline_3566$$))
  }
  0 < $otherValue$$inline_3569$$ && $radiusScale_slices$$inline_3565$$.push(new D.$DvtPieSlice$$(this));
  (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) && $radiusScale_slices$$inline_3565$$.reverse();
  this.$_slices$ = $radiusScale_slices$$inline_3565$$;
  this.$_shapesContainer$ = new D.$DvtContainer$$(this.$_context$);
  this.$_numSelectedObjsInFront$ = this.$_numFrontObjs$ = 0
};
D.$DvtPieChart$$.prototype.$getOptions$ = (0,D.$JSCompiler_get$$)("$_options$");
D.$DvtPieChart$$.prototype.$processEvent$ = function $$DvtPieChart$$$$$processEvent$$($bHide$$inline_3575_event$$266$$) {
  var $objs$$inline_3573_type$$113$$ = $bHide$$inline_3575_event$$266$$.$getType$();
  if($objs$$inline_3573_type$$113$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ || $objs$$inline_3573_type$$113$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$) {
    if($objs$$inline_3573_type$$113$$ = this.$_slices$, $bHide$$inline_3575_event$$266$$ && $objs$$inline_3573_type$$113$$) {
      var $category$$inline_3574$$ = $bHide$$inline_3575_event$$266$$.$_category$;
      $bHide$$inline_3575_event$$266$$ = $bHide$$inline_3575_event$$266$$.$getType$() === D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$;
      for(var $i$$inline_3576$$ = 0;$i$$inline_3576$$ < $objs$$inline_3573_type$$113$$.length;$i$$inline_3576$$++) {
        var $displayables$$inline_9907_obj$$inline_3577$$ = $objs$$inline_3573_type$$113$$[$i$$inline_3576$$];
        if($displayables$$inline_9907_obj$$inline_3577$$ && $displayables$$inline_9907_obj$$inline_3577$$.$getCategories$ && 0 <= D.$DvtArrayUtils$$.$getIndex$($displayables$$inline_9907_obj$$inline_3577$$.$getCategories$(), $category$$inline_3574$$)) {
          var $displayables$$inline_3578$$ = $displayables$$inline_9907_obj$$inline_3577$$.$getDisplayables$($displayables$$inline_3578$$), $displayables$$inline_9907_obj$$inline_3577$$ = $displayables$$inline_3578$$, $bVisible$$inline_9908$$ = !$bHide$$inline_3575_event$$266$$;
          if($displayables$$inline_9907_obj$$inline_3577$$) {
            for(var $i$$inline_9909$$ = 0;$i$$inline_9909$$ < $displayables$$inline_9907_obj$$inline_3577$$.length;$i$$inline_9909$$++) {
              $displayables$$inline_9907_obj$$inline_3577$$[$i$$inline_9909$$].$setVisible$($bVisible$$inline_9908$$)
            }
          }
        }
      }
    }
  }else {
    ("categoryRollOver" == $objs$$inline_3573_type$$113$$ || "categoryRollOut" == $objs$$inline_3573_type$$113$$) && (0,D.$DvtCategoryRolloverHandler$processEvent$$)($bHide$$inline_3575_event$$266$$, this.$_slices$)
  }
};
D.$DvtPieChart$$.prototype.$highlight$ = function $$DvtPieChart$$$$$highlight$$($categories$$6$$) {
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$6$$, this.$_slices$)
};
(0,D.$goog$exportSymbol$$)("DvtPieChart.prototype.highlight", D.$DvtPieChart$$.prototype.$highlight$);
D.$DvtPieChart$$.prototype.$render$ = function $$DvtPieChart$$$$$render$$() {
  var $handler$$inline_3623_shadow$$1$$;
  this.contains(this.$_shapesContainer$) || (this.$_shapesContainer$ || (this.$_shapesContainer$ = new D.$DvtContainer$$(this.$_context$)), this.$addChild$(this.$_shapesContainer$), !(0,D.$JSCompiler_StaticMethods_is3D$$)(this) && "skyros" == this.$getSkin$() && ($handler$$inline_3623_shadow$$1$$ = new D.$DvtShadow$$(D.$DvtColorUtils$$.$makeRGBA$(78, 87, 101, 0.45), 4, 7, 7, 54, 2, 3, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$)));
  var $i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$ = this.$_slices$, $anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$ = this.$_anchorOffset$, $JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$, $crustFill$$inline_3605_j$$inline_3627_lateralFill$$inline_3595_nSlices$$inline_3610_slice$$inline_3583$$, 
  $angleStart$$inline_3613_arAlphas$$inline_3600_arc$$inline_3585_color$$inline_3592_percentage$$inline_3587_rotatedSlices$$inline_3617$$ = 0, $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$ = $i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$ ? $i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$.length : 0;
  360 < $anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$ && ($anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$ -= 360);
  0 > $anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$ && ($anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$ += 360);
  var $accumAngle$$inline_3618_dataTotal$$inline_3588_grAngle$$inline_3597_pattern$$inline_3593_slices$$inline_3607_useGradientFill$$inline_3603$$ = $angleStart$$inline_3613_arAlphas$$inline_3600_arc$$inline_3585_color$$inline_3592_percentage$$inline_3587_rotatedSlices$$inline_3617$$ = 0;
  0 < $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$ && ($accumAngle$$inline_3618_dataTotal$$inline_3588_grAngle$$inline_3597_pattern$$inline_3593_slices$$inline_3607_useGradientFill$$inline_3603$$ = $i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$[0].$_pieChart$.$getTotalValue$());
  for($JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$ = 0;$JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$ < $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$;$JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$++) {
    $crustFill$$inline_3605_j$$inline_3627_lateralFill$$inline_3595_nSlices$$inline_3610_slice$$inline_3583$$ = $i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$[$JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$], window.value = $crustFill$$inline_3605_j$$inline_3627_lateralFill$$inline_3595_nSlices$$inline_3610_slice$$inline_3583$$.getValue(), $angleStart$$inline_3613_arAlphas$$inline_3600_arc$$inline_3585_color$$inline_3592_percentage$$inline_3587_rotatedSlices$$inline_3617$$ = 
    0 == $accumAngle$$inline_3618_dataTotal$$inline_3588_grAngle$$inline_3597_pattern$$inline_3593_slices$$inline_3607_useGradientFill$$inline_3603$$ ? 0 : 100 * (window.Math.abs(window.value) / $accumAngle$$inline_3618_dataTotal$$inline_3588_grAngle$$inline_3597_pattern$$inline_3593_slices$$inline_3607_useGradientFill$$inline_3603$$), $angleStart$$inline_3613_arAlphas$$inline_3600_arc$$inline_3585_color$$inline_3592_percentage$$inline_3587_rotatedSlices$$inline_3617$$ *= 3.6, $anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$ -= 
    $angleStart$$inline_3613_arAlphas$$inline_3600_arc$$inline_3585_color$$inline_3592_percentage$$inline_3587_rotatedSlices$$inline_3617$$, 0 > $anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$ && ($anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$ += 360), $crustFill$$inline_3605_j$$inline_3627_lateralFill$$inline_3595_nSlices$$inline_3610_slice$$inline_3583$$.$setAngleStart$($anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$), 
    $crustFill$$inline_3605_j$$inline_3627_lateralFill$$inline_3595_nSlices$$inline_3610_slice$$inline_3583$$.$setAngleExtent$($angleStart$$inline_3613_arAlphas$$inline_3600_arc$$inline_3585_color$$inline_3592_percentage$$inline_3587_rotatedSlices$$inline_3617$$), $anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$ = $crustFill$$inline_3605_j$$inline_3627_lateralFill$$inline_3595_nSlices$$inline_3610_slice$$inline_3583$$.$getAngleStart$()
  }
  for($i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$ = 0;$i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$ < this.$_slices$.length;$i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$++) {
    $JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$ = this.$_slices$[$i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$];
    $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$ = $JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$.$_bFillerSlice$ ? "color" : D.$DvtChartStyleUtils$$.$getSeriesEffect$($JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$.$_chart$);
    $angleStart$$inline_3613_arAlphas$$inline_3600_arc$$inline_3585_color$$inline_3592_percentage$$inline_3587_rotatedSlices$$inline_3617$$ = $JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$.$getFillColor$();
    $accumAngle$$inline_3618_dataTotal$$inline_3588_grAngle$$inline_3597_pattern$$inline_3593_slices$$inline_3607_useGradientFill$$inline_3603$$ = $JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$.$getFillPattern$();
    $crustFill$$inline_3605_j$$inline_3627_lateralFill$$inline_3595_nSlices$$inline_3610_slice$$inline_3583$$ = $anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$ = D.$JSCompiler_alias_VOID$$;
    if("pattern" == $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$ || $accumAngle$$inline_3618_dataTotal$$inline_3588_grAngle$$inline_3597_pattern$$inline_3593_slices$$inline_3607_useGradientFill$$inline_3603$$ != D.$JSCompiler_alias_NULL$$) {
      $anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$ = new D.$DvtPatternFill$$($accumAngle$$inline_3618_dataTotal$$inline_3588_grAngle$$inline_3597_pattern$$inline_3593_slices$$inline_3607_useGradientFill$$inline_3603$$, $angleStart$$inline_3613_arAlphas$$inline_3600_arc$$inline_3585_color$$inline_3592_percentage$$inline_3587_rotatedSlices$$inline_3617$$)
    }else {
      if("gradient" == $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$) {
        var $arRatios$$inline_3601_skin$$inline_3596$$ = $JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$.$_pieChart$.$getSkin$(), $accumAngle$$inline_3618_dataTotal$$inline_3588_grAngle$$inline_3597_pattern$$inline_3593_slices$$inline_3607_useGradientFill$$inline_3603$$ = "skyros" == $arRatios$$inline_3601_skin$$inline_3596$$ ? 297 : 270, $arBounds$$inline_3602_style$$inline_3598$$ = !(0,D.$JSCompiler_StaticMethods_is3D$$)($JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$.$_pieChart$) ? 
        "2D" : "3D", $anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$ = D.$DvtPieRenderUtils$$.$getGradientColors$(D.$DvtColorUtils$$.$getRGB$($angleStart$$inline_3613_arAlphas$$inline_3600_arc$$inline_3585_color$$inline_3592_percentage$$inline_3587_rotatedSlices$$inline_3617$$), $arBounds$$inline_3602_style$$inline_3598$$, $arRatios$$inline_3601_skin$$inline_3596$$), $angleStart$$inline_3613_arAlphas$$inline_3600_arc$$inline_3585_color$$inline_3592_percentage$$inline_3587_rotatedSlices$$inline_3617$$ = 
        D.$DvtPieRenderUtils$$.$getGradientAlphas$(D.$DvtColorUtils$$.$getAlpha$($angleStart$$inline_3613_arAlphas$$inline_3600_arc$$inline_3585_color$$inline_3592_percentage$$inline_3587_rotatedSlices$$inline_3617$$), $arBounds$$inline_3602_style$$inline_3598$$), $arRatios$$inline_3601_skin$$inline_3596$$ = D.$DvtPieRenderUtils$$.$getGradientRatios$($arBounds$$inline_3602_style$$inline_3598$$, $arRatios$$inline_3601_skin$$inline_3596$$), $arBounds$$inline_3602_style$$inline_3598$$ = [window.Math.floor($JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$.$_pieChart$.$getCenter$().x - 
        $JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$.$_radiusX$), window.Math.floor($JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$.$_pieChart$.$getCenter$().y - $JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$.$_radiusY$), window.Math.ceil(2 * $JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$.$_radiusX$), 
        window.Math.ceil(2 * $JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$.$_radiusY$)], $anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$ = new D.$DvtLinearGradientFill$$($accumAngle$$inline_3618_dataTotal$$inline_3588_grAngle$$inline_3597_pattern$$inline_3593_slices$$inline_3607_useGradientFill$$inline_3603$$, $anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$, 
        $angleStart$$inline_3613_arAlphas$$inline_3600_arc$$inline_3585_color$$inline_3592_percentage$$inline_3587_rotatedSlices$$inline_3617$$, $arRatios$$inline_3601_skin$$inline_3596$$, $arBounds$$inline_3602_style$$inline_3598$$)
      }else {
        $anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$ = new D.$DvtSolidFill$$($angleStart$$inline_3613_arAlphas$$inline_3600_arc$$inline_3585_color$$inline_3592_percentage$$inline_3587_rotatedSlices$$inline_3617$$), $crustFill$$inline_3605_j$$inline_3627_lateralFill$$inline_3595_nSlices$$inline_3610_slice$$inline_3583$$ = new D.$DvtSolidFill$$(D.$DvtColorUtils$$.$getDarker$($angleStart$$inline_3613_arAlphas$$inline_3600_arc$$inline_3585_color$$inline_3592_percentage$$inline_3587_rotatedSlices$$inline_3617$$, 
        0.6))
      }
    }
    $JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$.$_topSurface$ = D.$DvtPieRenderUtils$$.$createTopSurface$($JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$, $anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$);
    if((0,D.$JSCompiler_StaticMethods_is3D$$)($JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$.$_pieChart$) && (0 < $JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$.$_pieChart$.$getDepth$() || $JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$.$_radiusX$ != $JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$.$radiusY$)) {
      $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$ = ($accumAngle$$inline_3618_dataTotal$$inline_3588_grAngle$$inline_3597_pattern$$inline_3593_slices$$inline_3607_useGradientFill$$inline_3603$$ = "gradient" == $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$ || "pattern" == $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$) ? 
      D.$DvtPieRenderUtils$$.$generateLateralGradientFill$($JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$, D.$DvtPieRenderUtils$$.$SIDE$) : $crustFill$$inline_3605_j$$inline_3627_lateralFill$$inline_3595_nSlices$$inline_3610_slice$$inline_3583$$, $crustFill$$inline_3605_j$$inline_3627_lateralFill$$inline_3595_nSlices$$inline_3610_slice$$inline_3583$$ = $accumAngle$$inline_3618_dataTotal$$inline_3588_grAngle$$inline_3597_pattern$$inline_3593_slices$$inline_3607_useGradientFill$$inline_3603$$ ? 
      D.$DvtPieRenderUtils$$.$generateLateralGradientFill$($JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$, D.$DvtPieRenderUtils$$.$CRUST$) : $crustFill$$inline_3605_j$$inline_3627_lateralFill$$inline_3595_nSlices$$inline_3610_slice$$inline_3583$$, $JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$.$_leftSurface$ = D.$DvtPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$, 
      D.$DvtPieRenderUtils$$.$SURFACE_LEFT$, $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$), $JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$.$_rightSurface$ = D.$DvtPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$, D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$, 
      $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$), $JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$.$_crustSurface$ = D.$DvtPieRenderUtils$$.$createLateralSurface$($JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$, D.$DvtPieRenderUtils$$.$SURFACE_CRUST$, $crustFill$$inline_3605_j$$inline_3627_lateralFill$$inline_3595_nSlices$$inline_3610_slice$$inline_3583$$)
    }
  }
  $accumAngle$$inline_3618_dataTotal$$inline_3588_grAngle$$inline_3597_pattern$$inline_3593_slices$$inline_3607_useGradientFill$$inline_3603$$ = this.$_slices$;
  $JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$ = [];
  $crustFill$$inline_3605_j$$inline_3627_lateralFill$$inline_3595_nSlices$$inline_3610_slice$$inline_3583$$ = $accumAngle$$inline_3618_dataTotal$$inline_3588_grAngle$$inline_3597_pattern$$inline_3593_slices$$inline_3607_useGradientFill$$inline_3603$$ ? $accumAngle$$inline_3618_dataTotal$$inline_3588_grAngle$$inline_3597_pattern$$inline_3593_slices$$inline_3607_useGradientFill$$inline_3603$$.length : 0;
  for(var $anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$ = -1, $accumAngleThreshold$$inline_3620_selectedIds$$inline_3625_sliceSpanBeforeNoon$$inline_3616$$, $i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$ = 0;$i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$ < $crustFill$$inline_3605_j$$inline_3627_lateralFill$$inline_3595_nSlices$$inline_3610_slice$$inline_3583$$;$i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$++) {
    if($angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$ = $accumAngle$$inline_3618_dataTotal$$inline_3588_grAngle$$inline_3597_pattern$$inline_3593_slices$$inline_3607_useGradientFill$$inline_3603$$[$i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$], $angleStart$$inline_3613_arAlphas$$inline_3600_arc$$inline_3585_color$$inline_3592_percentage$$inline_3587_rotatedSlices$$inline_3617$$ = 
    $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$.$getAngleStart$(), $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$ = $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$.$getAngleExtent$(), 
    $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$ = $angleStart$$inline_3613_arAlphas$$inline_3600_arc$$inline_3585_color$$inline_3592_percentage$$inline_3587_rotatedSlices$$inline_3617$$ + $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$, 360 < $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$ && 
    ($angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$ -= 360), 0 > $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$ && ($angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$ += 360), 
    90 == $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$ || 90 > $angleStart$$inline_3613_arAlphas$$inline_3600_arc$$inline_3585_color$$inline_3592_percentage$$inline_3587_rotatedSlices$$inline_3617$$ && 90 < $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$) {
      $anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$ = $i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$;
      $accumAngleThreshold$$inline_3620_selectedIds$$inline_3625_sliceSpanBeforeNoon$$inline_3616$$ = $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$ - 90;
      break
    }
  }
  $angleStart$$inline_3613_arAlphas$$inline_3600_arc$$inline_3585_color$$inline_3592_percentage$$inline_3587_rotatedSlices$$inline_3617$$ = [];
  for($i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$ = $anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$;$i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$ < $crustFill$$inline_3605_j$$inline_3627_lateralFill$$inline_3595_nSlices$$inline_3610_slice$$inline_3583$$;$i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$++) {
    $angleStart$$inline_3613_arAlphas$$inline_3600_arc$$inline_3585_color$$inline_3592_percentage$$inline_3587_rotatedSlices$$inline_3617$$.push($accumAngle$$inline_3618_dataTotal$$inline_3588_grAngle$$inline_3597_pattern$$inline_3593_slices$$inline_3607_useGradientFill$$inline_3603$$[$i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$])
  }
  for($i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$ = 0;$i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$ < $anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$;$i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$++) {
    $angleStart$$inline_3613_arAlphas$$inline_3600_arc$$inline_3585_color$$inline_3592_percentage$$inline_3587_rotatedSlices$$inline_3617$$.push($accumAngle$$inline_3618_dataTotal$$inline_3588_grAngle$$inline_3597_pattern$$inline_3593_slices$$inline_3607_useGradientFill$$inline_3603$$[$i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$])
  }
  $anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$ = $accumAngle$$inline_3618_dataTotal$$inline_3588_grAngle$$inline_3597_pattern$$inline_3593_slices$$inline_3607_useGradientFill$$inline_3603$$ = 0;
  $accumAngleThreshold$$inline_3620_selectedIds$$inline_3625_sliceSpanBeforeNoon$$inline_3616$$ = 180 + $accumAngleThreshold$$inline_3620_selectedIds$$inline_3625_sliceSpanBeforeNoon$$inline_3616$$;
  for($i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$ = 0;$i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$ < $crustFill$$inline_3605_j$$inline_3627_lateralFill$$inline_3595_nSlices$$inline_3610_slice$$inline_3583$$;$i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$++) {
    if($angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$ = $angleStart$$inline_3613_arAlphas$$inline_3600_arc$$inline_3585_color$$inline_3592_percentage$$inline_3587_rotatedSlices$$inline_3617$$[$i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$]) {
      if($accumAngle$$inline_3618_dataTotal$$inline_3588_grAngle$$inline_3597_pattern$$inline_3593_slices$$inline_3607_useGradientFill$$inline_3603$$ + $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$.$getAngleExtent$() > $accumAngleThreshold$$inline_3620_selectedIds$$inline_3625_sliceSpanBeforeNoon$$inline_3616$$) {
        $anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$ = $i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$;
        break
      }
      $JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$.push($angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$);
      $accumAngle$$inline_3618_dataTotal$$inline_3588_grAngle$$inline_3597_pattern$$inline_3593_slices$$inline_3607_useGradientFill$$inline_3603$$ += $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$.$getAngleExtent$()
    }
  }
  for($i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$ = $crustFill$$inline_3605_j$$inline_3627_lateralFill$$inline_3595_nSlices$$inline_3610_slice$$inline_3583$$ - 1;$i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$ >= $anchorOffset$$inline_3581_angle$$inline_3584_arColors$$inline_3599_lastSliceIndexToProcess$$inline_3619_rotateIdx$$inline_3612_topFill$$inline_3594$$;$i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$--) {
    ($angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$ = $angleStart$$inline_3613_arAlphas$$inline_3600_arc$$inline_3585_color$$inline_3592_percentage$$inline_3587_rotatedSlices$$inline_3617$$[$i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$]) && $JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$.push($angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$)
  }
  this.$_duringDisplayAnim$ || D.$DvtPieLabelUtils$$.$layoutLabelsAndFeelers$(this);
  for($i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$ = 0;$i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$ < $JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$.length;$i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$++) {
    $JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$[$i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$].$render$(this.$_duringDisplayAnim$)
  }
  (0,D.$DvtAgent$isPlatformWebkit$$)() || $handler$$inline_3623_shadow$$1$$ && (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(this.$_shapesContainer$, $handler$$inline_3623_shadow$$1$$);
  if($handler$$inline_3623_shadow$$1$$ = this.$chart$.$getSelectionHandler$()) {
    $i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$ = D.$DvtChartDataUtils$$.$getInitialSelection$(this.$chart$);
    $accumAngleThreshold$$inline_3620_selectedIds$$inline_3625_sliceSpanBeforeNoon$$inline_3616$$ = [];
    for($JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$ = 0;$JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$ < $i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$.length;$JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$++) {
      for($crustFill$$inline_3605_j$$inline_3627_lateralFill$$inline_3595_nSlices$$inline_3610_slice$$inline_3583$$ = 0;$crustFill$$inline_3605_j$$inline_3627_lateralFill$$inline_3595_nSlices$$inline_3610_slice$$inline_3583$$ < this.$_slices$.length;$crustFill$$inline_3605_j$$inline_3627_lateralFill$$inline_3595_nSlices$$inline_3610_slice$$inline_3583$$++) {
        ($angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$ = this.$_slices$[$crustFill$$inline_3605_j$$inline_3627_lateralFill$$inline_3595_nSlices$$inline_3610_slice$$inline_3583$$].getId()) && ($i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$[$JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$].id && 
        $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$.getId() == $i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$[$JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$].id || $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$.$getSeries$() == 
        $i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$[$JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$].series && $angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$.$getGroup$() == $i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$[$JSCompiler_StaticMethods_preRender$self$$inline_3590_i$$inline_3582_i$$inline_3626_zOrderedSlices$$inline_3608$$].group) && 
        $accumAngleThreshold$$inline_3620_selectedIds$$inline_3625_sliceSpanBeforeNoon$$inline_3616$$.push($angleExtent$$inline_3614_fillType$$inline_3591_nSlices$$inline_3586_peerId$$inline_3628_sideFill$$inline_3604_slice$$inline_3611_sliceSpanEnd$$inline_3615$$)
      }
    }
    D.$DvtPieChartUtils$$.$isOtherSliceSelected$(this.$chart$, $i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$) && ($i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$ = D.$DvtPieChartUtils$$.$getOtherSliceId$(this.$chart$), $accumAngleThreshold$$inline_3620_selectedIds$$inline_3625_sliceSpanBeforeNoon$$inline_3616$$.push($i$$339_i$$inline_3609_otherPeerId$$inline_3629_selected$$inline_3624_slices$$inline_3580$$));
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($handler$$inline_3623_shadow$$1$$, $accumAngleThreshold$$inline_3620_selectedIds$$inline_3625_sliceSpanBeforeNoon$$inline_3616$$, this.$_slices$)
  }
};
D.$DvtPieChart$$.prototype.$getTotalValue$ = function $$DvtPieChart$$$$$getTotalValue$$() {
  for(var $total$$9$$ = 0, $i$$340$$ = 0;$i$$340$$ < this.$_slices$.length;$i$$340$$++) {
    var $sliceValue$$ = this.$_slices$[$i$$340$$].getValue();
    0 <= $sliceValue$$ && ($total$$9$$ += $sliceValue$$)
  }
  return $total$$9$$
};
D.$JSCompiler_StaticMethods_is3D$$ = function $$JSCompiler_StaticMethods_is3D$$$($JSCompiler_StaticMethods_is3D$self$$) {
  return"on" == $JSCompiler_StaticMethods_is3D$self$$.$_options$.styleDefaults.threeDEffect
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieChart$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = function $$JSCompiler_prototypeAlias$$$$getAnimationDuration$$() {
  return D.$DvtChartStyleUtils$$.$getAnimationDuration$(this.$chart$)
};
D.$JSCompiler_prototypeAlias$$.$_restoreLabelPosition$ = function $$JSCompiler_prototypeAlias$$$$_restoreLabelPosition$$() {
  this.$_duringDisplayAnim$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$_center$");
D.$JSCompiler_prototypeAlias$$.$getDepth$ = (0,D.$JSCompiler_get$$)("$_depth$");
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$35$$, $oldPie$$) {
  var $anim$$17_sliceAnim_sliceHandler$$ = new D.$DvtDataAnimationHandler$$(this.$_context$, this);
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($anim$$17_sliceAnim_sliceHandler$$, $oldPie$$.$_slices$, this.$_slices$);
  var $anim$$17_sliceAnim_sliceHandler$$ = $anim$$17_sliceAnim_sliceHandler$$.$getAnimation$(), $renderAnim$$1$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, this.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($renderAnim$$1$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, this.$_getAnimationParams$());
  $anim$$17_sliceAnim_sliceHandler$$ = new D.$DvtParallelPlayable$$(this.$_context$, $anim$$17_sliceAnim_sliceHandler$$, $renderAnim$$1$$);
  $anim$$17_sliceAnim_sliceHandler$$.$setOnEnd$(this.$_setAnimationParams$, this);
  $handler$$35$$.add($anim$$17_sliceAnim_sliceHandler$$, 0);
  this.$_setAnimationParams$()
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$() {
  return[1]
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$() {
  this.$removeChildren$();
  this.$_shapesContainer$ && this.$_shapesContainer$.$destroy$();
  this.$_shapesContainer$ = D.$JSCompiler_alias_NULL$$;
  this.$render$()
};
D.$JSCompiler_prototypeAlias$$.$bringToFrontOfSelection$ = function $$JSCompiler_prototypeAlias$$$$bringToFrontOfSelection$$($slice$$23$$) {
  var $par$$3$$ = $slice$$23$$.$_pieChart$.$_shapesContainer$;
  if($par$$3$$) {
    var $parentChildCount$$2$$ = $par$$3$$.$getNumChildren$();
    1 < $parentChildCount$$2$$ - this.$_numFrontObjs$ && ($par$$3$$.removeChild($slice$$23$$.$_topSurface$[0]), $par$$3$$.$addChildAt$($slice$$23$$.$_topSurface$[0], $parentChildCount$$2$$ - this.$_numFrontObjs$ - 1))
  }
};
D.$JSCompiler_prototypeAlias$$.$pushToBackOfSelection$ = function $$JSCompiler_prototypeAlias$$$$pushToBackOfSelection$$($slice$$24$$) {
  var $len$$7_par$$4$$ = this.$_slices$.length, $counter$$1_newIndex$$4$$ = 0;
  for(window.i = 0;window.i < $len$$7_par$$4$$;window.i++) {
    this.$_slices$[window.i].$isSelected$() && $counter$$1_newIndex$$4$$++
  }
  this.$_numSelectedObjsInFront$ = $counter$$1_newIndex$$4$$;
  if($len$$7_par$$4$$ = $slice$$24$$.$_pieChart$.$_shapesContainer$) {
    $counter$$1_newIndex$$4$$ = $len$$7_par$$4$$.$getNumChildren$() - this.$_numFrontObjs$ - 1 - this.$_numSelectedObjsInFront$, 0 <= $counter$$1_newIndex$$4$$ && ($len$$7_par$$4$$.removeChild($slice$$24$$.$_topSurface$[0]), $len$$7_par$$4$$.$addChildAt$($slice$$24$$.$_topSurface$[0], $counter$$1_newIndex$$4$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$getLabelPosition$ = (0,D.$JSCompiler_get$$)("$_labelPosition$");
D.$JSCompiler_prototypeAlias$$.$getSkin$ = function $$JSCompiler_prototypeAlias$$$$getSkin$$() {
  return this.$_options$.skin
};
D.$DvtPieSlice$$ = function $$DvtPieSlice$$$($pieChart$$8$$, $seriesIndex$$76$$) {
  this.Init($pieChart$$8$$, $seriesIndex$$76$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtPieSlice$$, D.$DvtObj$$, "DvtPieSlice");
D.$DvtPieSlice$$.prototype.Init = function $$DvtPieSlice$$$$Init$($pieChart$$9$$, $seriesIndex$$77$$) {
  this.$_pieChart$ = $pieChart$$9$$;
  this.$_chart$ = $pieChart$$9$$.$chart$;
  this.$_angleExtent$ = this.$_angleStart$ = 0;
  this.$_crustSurface$ = this.$_rightSurface$ = this.$_leftSurface$ = this.$_topSurface$ = D.$JSCompiler_alias_NULL$$;
  this.$_explodeOffsetY$ = this.$_explodeOffsetX$ = 0;
  this.$_sliceLabelString$ = this.$_sliceLabel$ = D.$JSCompiler_alias_NULL$$;
  this.$_hasFeeler$ = D.$JSCompiler_alias_FALSE$$;
  this.$_outsideFeelerEnd$ = this.$_outsideFeelerMid$ = this.$_outsideFeelerStart$ = this.$_feelerHoriz$ = this.$_feelerRad$ = D.$JSCompiler_alias_NULL$$;
  this.$_selecting$ = this.$_selected$ = D.$JSCompiler_alias_FALSE$$;
  this.$_radiusX$ = this.$_pieChart$.$_radiusX$;
  this.$_radiusY$ = this.$_pieChart$.$_radiusY$;
  var $dataItem$$27_options$$132$$ = this.$_chart$.$getOptions$();
  $seriesIndex$$77$$ != D.$JSCompiler_alias_NULL$$ ? ($dataItem$$27_options$$132$$ = D.$DvtChartDataUtils$$.$getDataItem$(this.$_chart$, $seriesIndex$$77$$, 0), this.$_value$ = D.$DvtChartDataUtils$$.getValue(this.$_chart$, $seriesIndex$$77$$, 0), this.$_explode$ = D.$DvtPieChartUtils$$.$getSliceExplode$(this.$_chart$, $seriesIndex$$77$$), this.$_fillColor$ = D.$DvtChartStyleUtils$$.$getColor$(this.$_chart$, $seriesIndex$$77$$), this.$_fillPattern$ = D.$DvtChartStyleUtils$$.$getPattern$(this.$_chart$, 
  $seriesIndex$$77$$, 0), this.$_strokeColor$ = D.$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, $seriesIndex$$77$$), this.$_customLabel$ = $dataItem$$27_options$$132$$.label, this.$_seriesLabel$ = D.$DvtChartDataUtils$$.$getSeries$(this.$_chart$, $seriesIndex$$77$$), this.$_tooltip$ = D.$DvtChartTooltipUtils$$.$getDatatip$(D.$JSCompiler_alias_NULL$$, this.$_chart$, $seriesIndex$$77$$, 0), this.$_action$ = $dataItem$$27_options$$132$$.action, this.$_showPopupBehaviors$ = this.$_chart$.$getShowPopupBehaviors$($dataItem$$27_options$$132$$._id), 
  this.$_id$ = D.$DvtPieChartUtils$$.$getSliceId$(this.$_chart$, $seriesIndex$$77$$), this.$_seriesIndex$ = $seriesIndex$$77$$) : (this.$_value$ = D.$DvtPieChartUtils$$.$getOtherValue$(this.$_chart$), this.$_explode$ = 0, this.$_fillColor$ = $dataItem$$27_options$$132$$.styleDefaults.otherColor, this.$_fillPattern$ = D.$JSCompiler_alias_NULL$$, this.$_strokeColor$ = $dataItem$$27_options$$132$$.styleDefaults.borderColor, this.$_customLabel$ = D.$JSCompiler_alias_NULL$$, this.$_seriesLabel$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$_chart$.$getBundle$(), 
  "LABEL_OTHER", D.$JSCompiler_alias_NULL$$), this.$_tooltip$ = D.$DvtChartTooltipUtils$$.$getOtherSliceDatatip$(this.$_chart$, this.$_value$), this.$_action$ = D.$JSCompiler_alias_NULL$$, this.$_showPopupBehaviors$ = D.$DvtPieChartUtils$$.$getOtherSliceShowPopupBehaviors$(this.$_chart$), this.$_id$ = D.$DvtPieChartUtils$$.$getOtherSliceId$(this.$_chart$))
};
D.$DvtPieSlice$$.prototype.$render$ = function $$DvtPieSlice$$$$$render$$($displayable$$29_duringDisplayAnim_feelerRad$$inline_3529_oldStartX$$inline_3536_radian$$inline_3533_sliceDisplayables$$) {
  var $explodeOffset$$inline_3535_i$$323_newStartX$$inline_3538_topSurface$$inline_3520$$ = this.$_topSurface$, $leftSurface$$inline_3521_len$$5_newStartY$$inline_3539$$ = this.$_leftSurface$, $oldMidX$$inline_3540_rightSurface$$inline_3522_shapeArray$$ = this.$_rightSurface$, $crustSurface$$inline_3523_j$$65_oldMidY$$inline_3541$$ = this.$_crustSurface$, $angleStart$$inline_3524$$ = this.$_angleStart$, $angleExtent$$inline_3525$$ = this.$_angleExtent$, $feelerHoriz$$inline_3530_oldStartY$$inline_3537_sortedSurfaces$$inline_3526_tilt$$inline_3534$$ = 
  [];
  $leftSurface$$inline_3521_len$$5_newStartY$$inline_3539$$ && ($oldMidX$$inline_3540_rightSurface$$inline_3522_shapeArray$$ && $crustSurface$$inline_3523_j$$65_oldMidY$$inline_3541$$) && (270 >= $angleStart$$inline_3524$$ && 270 < $angleStart$$inline_3524$$ + $angleExtent$$inline_3525$$ ? ($feelerHoriz$$inline_3530_oldStartY$$inline_3537_sortedSurfaces$$inline_3526_tilt$$inline_3534$$.push($leftSurface$$inline_3521_len$$5_newStartY$$inline_3539$$), $feelerHoriz$$inline_3530_oldStartY$$inline_3537_sortedSurfaces$$inline_3526_tilt$$inline_3534$$.push($oldMidX$$inline_3540_rightSurface$$inline_3522_shapeArray$$), 
  $feelerHoriz$$inline_3530_oldStartY$$inline_3537_sortedSurfaces$$inline_3526_tilt$$inline_3534$$.push($crustSurface$$inline_3523_j$$65_oldMidY$$inline_3541$$)) : 270 < $angleStart$$inline_3524$$ || 90 >= $angleStart$$inline_3524$$ + $angleExtent$$inline_3525$$ ? ($feelerHoriz$$inline_3530_oldStartY$$inline_3537_sortedSurfaces$$inline_3526_tilt$$inline_3534$$.push($leftSurface$$inline_3521_len$$5_newStartY$$inline_3539$$), $feelerHoriz$$inline_3530_oldStartY$$inline_3537_sortedSurfaces$$inline_3526_tilt$$inline_3534$$.push($crustSurface$$inline_3523_j$$65_oldMidY$$inline_3541$$), 
  $feelerHoriz$$inline_3530_oldStartY$$inline_3537_sortedSurfaces$$inline_3526_tilt$$inline_3534$$.push($oldMidX$$inline_3540_rightSurface$$inline_3522_shapeArray$$)) : ($feelerHoriz$$inline_3530_oldStartY$$inline_3537_sortedSurfaces$$inline_3526_tilt$$inline_3534$$.push($oldMidX$$inline_3540_rightSurface$$inline_3522_shapeArray$$), $feelerHoriz$$inline_3530_oldStartY$$inline_3537_sortedSurfaces$$inline_3526_tilt$$inline_3534$$.push($crustSurface$$inline_3523_j$$65_oldMidY$$inline_3541$$), $feelerHoriz$$inline_3530_oldStartY$$inline_3537_sortedSurfaces$$inline_3526_tilt$$inline_3534$$.push($leftSurface$$inline_3521_len$$5_newStartY$$inline_3539$$)));
  $feelerHoriz$$inline_3530_oldStartY$$inline_3537_sortedSurfaces$$inline_3526_tilt$$inline_3534$$.push($explodeOffset$$inline_3535_i$$323_newStartX$$inline_3538_topSurface$$inline_3520$$);
  $leftSurface$$inline_3521_len$$5_newStartY$$inline_3539$$ = $feelerHoriz$$inline_3530_oldStartY$$inline_3537_sortedSurfaces$$inline_3526_tilt$$inline_3534$$.length;
  for($explodeOffset$$inline_3535_i$$323_newStartX$$inline_3538_topSurface$$inline_3520$$ = 0;$explodeOffset$$inline_3535_i$$323_newStartX$$inline_3538_topSurface$$inline_3520$$ < $leftSurface$$inline_3521_len$$5_newStartY$$inline_3539$$;$explodeOffset$$inline_3535_i$$323_newStartX$$inline_3538_topSurface$$inline_3520$$++) {
    $oldMidX$$inline_3540_rightSurface$$inline_3522_shapeArray$$ = $feelerHoriz$$inline_3530_oldStartY$$inline_3537_sortedSurfaces$$inline_3526_tilt$$inline_3534$$[$explodeOffset$$inline_3535_i$$323_newStartX$$inline_3538_topSurface$$inline_3520$$];
    window.shapeCount = $oldMidX$$inline_3540_rightSurface$$inline_3522_shapeArray$$.length;
    for($crustSurface$$inline_3523_j$$65_oldMidY$$inline_3541$$ = 0;$crustSurface$$inline_3523_j$$65_oldMidY$$inline_3541$$ < window.shapeCount;$crustSurface$$inline_3523_j$$65_oldMidY$$inline_3541$$++) {
      this.$_pieChart$.$_shapesContainer$.$addChild$($oldMidX$$inline_3540_rightSurface$$inline_3522_shapeArray$$[$crustSurface$$inline_3523_j$$65_oldMidY$$inline_3541$$]), $oldMidX$$inline_3540_rightSurface$$inline_3522_shapeArray$$[$crustSurface$$inline_3523_j$$65_oldMidY$$inline_3541$$].$render$ && $oldMidX$$inline_3540_rightSurface$$inline_3522_shapeArray$$[$crustSurface$$inline_3523_j$$65_oldMidY$$inline_3541$$].$render$()
    }
  }
  this.$_sliceLabel$ && (this.$_pieChart$.$addChild$(this.$_sliceLabel$), D.$DvtPieRenderUtils$$.$associate$(this, [this.$_sliceLabel$]), "outside" == this.$_pieChart$.$getLabelPosition$() && ($displayable$$29_duringDisplayAnim_feelerRad$$inline_3529_oldStartX$$inline_3536_radian$$inline_3533_sliceDisplayables$$ ? (this.$_pieChart$.$addChild$(this.$_feelerRad$), this.$_pieChart$.$addChild$(this.$_feelerHoriz$)) : this.$_hasFeeler$ && ($displayable$$29_duringDisplayAnim_feelerRad$$inline_3529_oldStartX$$inline_3536_radian$$inline_3533_sliceDisplayables$$ = 
  (0,D.$JSCompiler_StaticMethods__feelerFromPts$$)(this, this.$_outsideFeelerStart$, this.$_outsideFeelerMid$), $feelerHoriz$$inline_3530_oldStartY$$inline_3537_sortedSurfaces$$inline_3526_tilt$$inline_3534$$ = (0,D.$JSCompiler_StaticMethods__feelerFromPts$$)(this, this.$_outsideFeelerMid$, this.$_outsideFeelerEnd$), this.$_feelerRad$ = $displayable$$29_duringDisplayAnim_feelerRad$$inline_3529_oldStartX$$inline_3536_radian$$inline_3533_sliceDisplayables$$, this.$_feelerHoriz$ = $feelerHoriz$$inline_3530_oldStartY$$inline_3537_sortedSurfaces$$inline_3526_tilt$$inline_3534$$)));
  0 != this.$_explode$ ? ($displayable$$29_duringDisplayAnim_feelerRad$$inline_3529_oldStartX$$inline_3536_radian$$inline_3533_sliceDisplayables$$ = (360 - (this.$_angleStart$ + this.$_angleExtent$ / 2)) * D.$DvtMath$$.$RADS_PER_DEGREE$, $feelerHoriz$$inline_3530_oldStartY$$inline_3537_sortedSurfaces$$inline_3526_tilt$$inline_3534$$ = (0,D.$JSCompiler_StaticMethods_is3D$$)(this.$_pieChart$) ? D.$DvtPieChart$_THREED_TILT$$ : 1, $explodeOffset$$inline_3535_i$$323_newStartX$$inline_3538_topSurface$$inline_3520$$ = 
  this.$_explode$ * this.$_pieChart$.$_radiusX$ * (0.5 / 0.45 - 1), this.$_explodeOffsetX$ = window.Math.cos($displayable$$29_duringDisplayAnim_feelerRad$$inline_3529_oldStartX$$inline_3536_radian$$inline_3533_sliceDisplayables$$) * $explodeOffset$$inline_3535_i$$323_newStartX$$inline_3538_topSurface$$inline_3520$$, this.$_explodeOffsetY$ = window.Math.sin($displayable$$29_duringDisplayAnim_feelerRad$$inline_3529_oldStartX$$inline_3536_radian$$inline_3533_sliceDisplayables$$) * $feelerHoriz$$inline_3530_oldStartY$$inline_3537_sortedSurfaces$$inline_3526_tilt$$inline_3534$$ * 
  $explodeOffset$$inline_3535_i$$323_newStartX$$inline_3538_topSurface$$inline_3520$$, (0,D.$DvtAgent$isPlatformWebkit$$)() && (this.$_explodeOffsetX$ = window.Math.round(this.$_explodeOffsetX$), this.$_explodeOffsetY$ = window.Math.round(this.$_explodeOffsetY$))) : this.$_explodeOffsetY$ = this.$_explodeOffsetX$ = 0;
  this.$_topSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)(this.$_topSurface$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
  this.$_rightSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)(this.$_rightSurface$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
  this.$_leftSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)(this.$_leftSurface$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
  this.$_crustSurface$ && (0,D.$DvtPieSlice$_translateShapes$$)(this.$_crustSurface$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
  this.$_hasFeeler$ && ($displayable$$29_duringDisplayAnim_feelerRad$$inline_3529_oldStartX$$inline_3536_radian$$inline_3533_sliceDisplayables$$ = this.$_outsideFeelerStart$.x, $feelerHoriz$$inline_3530_oldStartY$$inline_3537_sortedSurfaces$$inline_3526_tilt$$inline_3534$$ = this.$_outsideFeelerStart$.y, $explodeOffset$$inline_3535_i$$323_newStartX$$inline_3538_topSurface$$inline_3520$$ = $displayable$$29_duringDisplayAnim_feelerRad$$inline_3529_oldStartX$$inline_3536_radian$$inline_3533_sliceDisplayables$$ + 
  this.$_explodeOffsetX$, $leftSurface$$inline_3521_len$$5_newStartY$$inline_3539$$ = $feelerHoriz$$inline_3530_oldStartY$$inline_3537_sortedSurfaces$$inline_3526_tilt$$inline_3534$$ + this.$_explodeOffsetY$, this.$_feelerRad$.$setX1$($explodeOffset$$inline_3535_i$$323_newStartX$$inline_3538_topSurface$$inline_3520$$), this.$_feelerRad$.$setY1$($leftSurface$$inline_3521_len$$5_newStartY$$inline_3539$$), $oldMidX$$inline_3540_rightSurface$$inline_3522_shapeArray$$ = this.$_outsideFeelerMid$.x, $crustSurface$$inline_3523_j$$65_oldMidY$$inline_3541$$ = 
  this.$_outsideFeelerMid$.y, 0 < $oldMidX$$inline_3540_rightSurface$$inline_3522_shapeArray$$ - $displayable$$29_duringDisplayAnim_feelerRad$$inline_3529_oldStartX$$inline_3536_radian$$inline_3533_sliceDisplayables$$ != 0 < $oldMidX$$inline_3540_rightSurface$$inline_3522_shapeArray$$ - $explodeOffset$$inline_3535_i$$323_newStartX$$inline_3538_topSurface$$inline_3520$$ ? (this.$_feelerRad$.$setX2$($explodeOffset$$inline_3535_i$$323_newStartX$$inline_3538_topSurface$$inline_3520$$), this.$_feelerHoriz$.$setX1$($explodeOffset$$inline_3535_i$$323_newStartX$$inline_3538_topSurface$$inline_3520$$)) : 
  (this.$_feelerRad$.$setX2$($oldMidX$$inline_3540_rightSurface$$inline_3522_shapeArray$$), this.$_feelerHoriz$.$setX1$($oldMidX$$inline_3540_rightSurface$$inline_3522_shapeArray$$)), 0 < $crustSurface$$inline_3523_j$$65_oldMidY$$inline_3541$$ - $feelerHoriz$$inline_3530_oldStartY$$inline_3537_sortedSurfaces$$inline_3526_tilt$$inline_3534$$ != 0 < $crustSurface$$inline_3523_j$$65_oldMidY$$inline_3541$$ - $leftSurface$$inline_3521_len$$5_newStartY$$inline_3539$$ ? (this.$_feelerRad$.$setY2$($leftSurface$$inline_3521_len$$5_newStartY$$inline_3539$$), 
  this.$_feelerHoriz$.$setY1$($leftSurface$$inline_3521_len$$5_newStartY$$inline_3539$$)) : (this.$_feelerRad$.$setY2$($crustSurface$$inline_3523_j$$65_oldMidY$$inline_3541$$), this.$_feelerHoriz$.$setY1$($crustSurface$$inline_3523_j$$65_oldMidY$$inline_3541$$)));
  this.$_sliceLabel$ && !this.$_hasFeeler$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_sliceLabel$, this.$_explodeOffsetX$, this.$_explodeOffsetY$);
  if(this.$_action$) {
    $displayable$$29_duringDisplayAnim_feelerRad$$inline_3529_oldStartX$$inline_3536_radian$$inline_3533_sliceDisplayables$$ = this.$getDisplayables$();
    for($explodeOffset$$inline_3535_i$$323_newStartX$$inline_3538_topSurface$$inline_3520$$ = 0;$explodeOffset$$inline_3535_i$$323_newStartX$$inline_3538_topSurface$$inline_3520$$ < $displayable$$29_duringDisplayAnim_feelerRad$$inline_3529_oldStartX$$inline_3536_radian$$inline_3533_sliceDisplayables$$.length;$explodeOffset$$inline_3535_i$$323_newStartX$$inline_3538_topSurface$$inline_3520$$++) {
      $displayable$$29_duringDisplayAnim_feelerRad$$inline_3529_oldStartX$$inline_3536_radian$$inline_3533_sliceDisplayables$$[$explodeOffset$$inline_3535_i$$323_newStartX$$inline_3538_topSurface$$inline_3520$$].setCursor("pointer")
    }
  }
  if($displayable$$29_duringDisplayAnim_feelerRad$$inline_3529_oldStartX$$inline_3536_radian$$inline_3533_sliceDisplayables$$ = (0,D.$JSCompiler_StaticMethods_getTopDisplayable$$)(this)) {
    (0,D.$JSCompiler_StaticMethods_setAriaRole$$)($displayable$$29_duringDisplayAnim_feelerRad$$inline_3529_oldStartX$$inline_3536_radian$$inline_3533_sliceDisplayables$$, "img"), this.$_updateAriaLabel$()
  }
};
D.$JSCompiler_StaticMethods__feelerFromPts$$ = function $$JSCompiler_StaticMethods__feelerFromPts$$$($JSCompiler_StaticMethods__feelerFromPts$self$$, $feeler$$4_pt1$$, $color$$31_pt2_stroke$$38$$) {
  $feeler$$4_pt1$$ = new D.$DvtLine$$($JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$_context$, $feeler$$4_pt1$$.x, $feeler$$4_pt1$$.y, $color$$31_pt2_stroke$$38$$.x, $color$$31_pt2_stroke$$38$$.y);
  $color$$31_pt2_stroke$$38$$ = $JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$getOptions$().styleDefaults.pieFeelerColor;
  $color$$31_pt2_stroke$$38$$ = new D.$DvtSolidStroke$$($color$$31_pt2_stroke$$38$$);
  $feeler$$4_pt1$$.$setStroke$($color$$31_pt2_stroke$$38$$);
  $JSCompiler_StaticMethods__feelerFromPts$self$$.$_pieChart$.$addChild$($feeler$$4_pt1$$);
  return $feeler$$4_pt1$$
};
D.$DvtPieSlice$_translateShapes$$ = function $$DvtPieSlice$_translateShapes$$$($shapes$$4$$, $tx$$16$$, $ty$$16$$) {
  if($shapes$$4$$) {
    for(var $len$$6$$ = $shapes$$4$$.length, $i$$324$$ = 0;$i$$324$$ < $len$$6$$;$i$$324$$++) {
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($shapes$$4$$[$i$$324$$], $tx$$16$$, $ty$$16$$)
    }
  }
};
D.$DvtPieSlice$$.prototype.$getAngleExtent$ = (0,D.$JSCompiler_get$$)("$_angleExtent$");
D.$DvtPieSlice$$.prototype.$setAngleExtent$ = (0,D.$JSCompiler_set$$)("$_angleExtent$");
D.$DvtPieSlice$$.prototype.$getAngleStart$ = (0,D.$JSCompiler_get$$)("$_angleStart$");
D.$DvtPieSlice$$.prototype.$setAngleStart$ = (0,D.$JSCompiler_set$$)("$_angleStart$");
D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$ = function $$JSCompiler_StaticMethods_setNoOutsideFeeler$$$($JSCompiler_StaticMethods_setNoOutsideFeeler$self$$) {
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_outsideFeelerStart$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_outsideFeelerMid$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_outsideFeelerEnd$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_setNoOutsideFeeler$self$$.$_hasFeeler$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_getLabelAndFeeler$$ = function $$JSCompiler_StaticMethods_getLabelAndFeeler$$$($JSCompiler_StaticMethods_getLabelAndFeeler$self$$) {
  var $ar$$7$$ = [];
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_sliceLabel$ && $ar$$7$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_sliceLabel$);
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerRad$ && $ar$$7$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerRad$);
  $JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerHoriz$ && $ar$$7$$.push($JSCompiler_StaticMethods_getLabelAndFeeler$self$$.$_feelerHoriz$);
  return $ar$$7$$
};
D.$DvtPieSlice$$.prototype.$setSliceLabel$ = (0,D.$JSCompiler_set$$)("$_sliceLabel$");
D.$DvtPieSlice$$.prototype.getValue = (0,D.$JSCompiler_get$$)("$_value$");
D.$DvtPieSlice$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtPieSlice$$.prototype.$getSeriesIndex$ = (0,D.$JSCompiler_get$$)("$_seriesIndex$");
D.$DvtPieSlice$_shapeIsSelectable$$ = function $$DvtPieSlice$_shapeIsSelectable$$$($shape$$17$$) {
  return $shape$$17$$ instanceof D.$DvtGraphSelectableArc$$ || $shape$$17$$ instanceof D.$DvtGraphSelectablePolygon$$ || $shape$$17$$ instanceof D.$DvtGraphSelectablePath$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$112$$, $y$$92$$) {
  for(var $c$$14_sin$$ = this.$_pieChart$.$getCenter$(), $cos$$ = ($x$$112$$ - $c$$14_sin$$.x) / this.$_radiusX$, $c$$14_sin$$ = ($y$$92$$ - $c$$14_sin$$.y) / this.$_radiusY$, $angle$$21_containsAngle$$ = -window.Math.atan2($c$$14_sin$$, $cos$$) * (180 / window.Math.PI);$angle$$21_containsAngle$$ < this.$_angleStart$;) {
    $angle$$21_containsAngle$$ += 360
  }
  for(;360 <= $angle$$21_containsAngle$$ - this.$_angleStart$;) {
    $angle$$21_containsAngle$$ -= 360
  }
  $angle$$21_containsAngle$$ = $angle$$21_containsAngle$$ <= this.$_angleStart$ + this.$_angleExtent$;
  return 1 >= window.Math.pow($cos$$, 2) + window.Math.pow($c$$14_sin$$, 2) && $angle$$21_containsAngle$$
};
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  return[this.$_value$, this.$_radiusX$, this.$_radiusY$, this.$_explode$]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$23$$) {
  this.$_value$ = $params$$23$$[0];
  this.$_radiusX$ = $params$$23$$[1];
  this.$_radiusY$ = $params$$23$$[2];
  this.$_explode$ = $params$$23$$[3]
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$30$$, $oldSlice$$) {
  var $startState$$5$$ = $oldSlice$$.$GetAnimationParams$(), $endState$$7$$ = this.$GetAnimationParams$();
  if(!D.$DvtArrayUtils$$.$equals$($startState$$5$$, $endState$$7$$)) {
    var $anim$$13$$ = new D.$DvtCustomAnimation$$(this.$_pieChart$.$_context$, this, this.$_pieChart$.$getAnimationDuration$());
    (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$13$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, $endState$$7$$);
    $handler$$30$$.add($anim$$13$$, 0);
    this.$SetAnimationParams$($startState$$5$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$31$$) {
  var $anim$$14$$ = new D.$DvtCustomAnimation$$(this.$_pieChart$.$_context$, this, this.$_pieChart$.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$14$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, this.$GetAnimationParams$());
  $handler$$31$$.add($anim$$14$$, 0);
  this.$SetAnimationParams$([0, 0, 0, 0])
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$32$$, $container$$76$$) {
  var $anim$$15_newSlices$$ = $container$$76$$.$_slices$, $oldSlices_prevId$$ = this.$_pieChart$.$_slices$, $i$$325_prevIndex$$2$$ = D.$DvtArrayUtils$$.$getIndex$($oldSlices_prevId$$, this) - 1;
  if(0 <= $i$$325_prevIndex$$2$$) {
    $oldSlices_prevId$$ = $oldSlices_prevId$$[$i$$325_prevIndex$$2$$].getId();
    for($i$$325_prevIndex$$2$$ = 0;$i$$325_prevIndex$$2$$ < $anim$$15_newSlices$$.length;$i$$325_prevIndex$$2$$++) {
      if($anim$$15_newSlices$$[$i$$325_prevIndex$$2$$].getId().$equals$($oldSlices_prevId$$)) {
        $anim$$15_newSlices$$.splice($i$$325_prevIndex$$2$$ + 1, 0, this);
        break
      }
    }
  }else {
    $anim$$15_newSlices$$.splice(0, 0, this)
  }
  this.$_pieChart$ = $container$$76$$;
  $anim$$15_newSlices$$ = new D.$DvtCustomAnimation$$($container$$76$$.$_context$, this, this.$_pieChart$.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$15_newSlices$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, [0, 0, 0, 0]);
  $anim$$15_newSlices$$.$setOnEnd$(this.$_removeDeletedSlice$, this);
  $handler$$32$$.add($anim$$15_newSlices$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$_removeDeletedSlice$ = function $$JSCompiler_prototypeAlias$$$$_removeDeletedSlice$$() {
  var $slices$$3$$ = this.$_pieChart$.$_slices$, $index$$91$$ = D.$DvtArrayUtils$$.$getIndex$($slices$$3$$, this);
  0 <= $index$$91$$ && $slices$$3$$.splice($index$$91$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  var $ret$$60$$ = [];
  this.$_topSurface$ && ($ret$$60$$ = $ret$$60$$.concat(this.$_topSurface$));
  this.$_leftSurface$ && ($ret$$60$$ = $ret$$60$$.concat(this.$_leftSurface$));
  this.$_rightSurface$ && ($ret$$60$$ = $ret$$60$$.concat(this.$_rightSurface$));
  this.$_crustSurface$ && ($ret$$60$$ = $ret$$60$$.concat(this.$_crustSurface$));
  this.$_sliceLabel$ && $ret$$60$$.push(this.$_sliceLabel$);
  this.$_feelerRad$ && $ret$$60$$.push(this.$_feelerRad$);
  this.$_feelerHoriz$ && $ret$$60$$.push(this.$_feelerHoriz$);
  return $ret$$60$$
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $bundle$$8$$ = this.$_chart$.$getBundle$(), $percentage$$1_tooltip$$13$$ = D.$DvtPieLabelUtils$$.$generateSliceLabelString$(this, "percent"), $percentage$$1_tooltip$$13$$ = this.$getTooltip$() + "; " + (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8$$, "LABEL_PERCENTAGE", $percentage$$1_tooltip$$13$$), $states$$4$$ = [];
  this.$isSelectable$() && $states$$4$$.push((0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$8$$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)($percentage$$1_tooltip$$13$$, $states$$4$$, $bundle$$8$$)
};
D.$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$() {
  var $displayable$$30$$ = (0,D.$JSCompiler_StaticMethods_getTopDisplayable$$)(this);
  $displayable$$30$$ && !(0,D.$DvtAgent$deferAriaCreation$$)() && (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($displayable$$30$$, "label", this.$getAriaLabel$())
};
D.$JSCompiler_StaticMethods_getTopDisplayable$$ = function $$JSCompiler_StaticMethods_getTopDisplayable$$$($JSCompiler_StaticMethods_getTopDisplayable$self$$) {
  return $JSCompiler_StaticMethods_getTopDisplayable$self$$.$_topSurface$ && 0 < $JSCompiler_StaticMethods_getTopDisplayable$self$$.$_topSurface$.length ? $JSCompiler_StaticMethods_getTopDisplayable$self$$.$_topSurface$[0] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getPhysicalShape$$ = function $$JSCompiler_StaticMethods_getPhysicalShape$$$($JSCompiler_StaticMethods_getPhysicalShape$self$$, $obj$$113$$) {
  $obj$$113$$.$setDataColor$($JSCompiler_StaticMethods_getPhysicalShape$self$$.$getFillColor$(), D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($JSCompiler_StaticMethods_getPhysicalShape$self$$.$_chart$), D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($JSCompiler_StaticMethods_getPhysicalShape$self$$.$_chart$));
  $obj$$113$$.setCursor("pointer");
  return $obj$$113$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieSlice$$.prototype;
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_selected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$1$$) {
  (this.$_selected$ = $bSelected$$1$$) ? this.$_pieChart$.$bringToFrontOfSelection$(this) : this.$_selecting$ || this.$_pieChart$.$pushToBackOfSelection$(this);
  var $shapeArr$$ = this.$getDisplayables$();
  for(window.i = 0;window.i < $shapeArr$$.length;window.i++) {
    (0,D.$DvtPieSlice$_shapeIsSelectable$$)($shapeArr$$[window.i]) && (0,D.$JSCompiler_StaticMethods_getPhysicalShape$$)(this, $shapeArr$$[window.i]).$setSelected$($bSelected$$1$$)
  }
  this.$_updateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_selecting$ = D.$JSCompiler_alias_TRUE$$;
  this.$_pieChart$.$bringToFrontOfSelection$(this);
  var $shapeArr$$1$$ = this.$getDisplayables$();
  for(window.i = 0;window.i < $shapeArr$$1$$.length;window.i++) {
    (0,D.$DvtPieSlice$_shapeIsSelectable$$)($shapeArr$$1$$[window.i]) && (0,D.$JSCompiler_StaticMethods_getPhysicalShape$$)(this, $shapeArr$$1$$[window.i]).$showHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_selecting$ = D.$JSCompiler_alias_FALSE$$;
  this.$_selected$ || this.$_pieChart$.$pushToBackOfSelection$(this);
  var $shapeArr$$2$$ = this.$getDisplayables$();
  for(window.i = 0;window.i < $shapeArr$$2$$.length;window.i++) {
    (0,D.$DvtPieSlice$_shapeIsSelectable$$)($shapeArr$$2$$[window.i]) && (0,D.$JSCompiler_StaticMethods_getPhysicalShape$$)(this, $shapeArr$$2$$[window.i]).$hideHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($target$$60$$) {
  return $target$$60$$ == this.$_sliceLabel$ && this.$_sliceLabel$ && this.$_sliceLabel$.$isTruncated$() ? this.$_sliceLabelString$ : this.$getTooltip$()
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return this.$getFillColor$()
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return[this.getId().$getSeries$()]
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$265$$) {
  if($event$$265$$.type == D.$DvtMouseEvent$CLICK$$ || 32 == $event$$265$$.keyCode && $event$$265$$.ctrlKey) {
    return this
  }
  var $slices$$4$$ = this.$_pieChart$.$_slices$, $idx$$5$$ = $slices$$4$$.indexOf(this), $next$$13$$ = D.$JSCompiler_alias_NULL$$;
  39 == $event$$265$$.keyCode ? $next$$13$$ = $idx$$5$$ < $slices$$4$$.length - 1 ? $slices$$4$$[$idx$$5$$ + 1] : $slices$$4$$[0] : 37 == $event$$265$$.keyCode && ($next$$13$$ = 0 == $idx$$5$$ ? $slices$$4$$[$slices$$4$$.length - 1] : $slices$$4$$[$idx$$5$$ - 1]);
  return $next$$13$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$11$$) {
  var $displayables$$10$$ = this.$getDisplayables$();
  return $displayables$$10$$[0] ? $displayables$$10$$[0].$getDimensions$($targetCoordinateSpace$$11$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  var $displayables$$11$$ = this.$getDisplayables$();
  return $displayables$$11$$[0] ? $displayables$$11$$[0].$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getSeriesLabel$ = (0,D.$JSCompiler_get$$)("$_seriesLabel$");
D.$JSCompiler_prototypeAlias$$.$getFillColor$ = (0,D.$JSCompiler_get$$)("$_fillColor$");
D.$JSCompiler_prototypeAlias$$.$getFillPattern$ = (0,D.$JSCompiler_get$$)("$_fillPattern$");
D.$JSCompiler_prototypeAlias$$.$getStrokeColor$ = (0,D.$JSCompiler_get$$)("$_strokeColor$");
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_showPopupBehaviors$");
D.$DvtChartOverview$$ = function $$DvtChartOverview$$$($context$$144$$, $callback$$72$$, $callbackObj$$45$$, $id$$96$$, $oldChart$$7$$) {
  this.Init($context$$144$$, $callback$$72$$, $callbackObj$$45$$);
  this.$_chart$ = $oldChart$$7$$;
  this.$_id$ = $id$$96$$ + "_overview"
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartOverview$$, D.$DvtOverview$$, "DvtChartOverview");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$createBackground$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($options$$135$$, $width$$67$$, $glassPane$$inline_3661_height$$52$$) {
  $options$$135$$.style = {overviewBackgroundColor:"rgba(0,0,0,0)", windowBackgroundColor:"rgba(0,0,0,0)", windowBorderTopColor:"#333333", windowBorderRightColor:"#333333", windowBorderBottomColor:"#333333", windowBorderLeftColor:"#333333", leftFilterPanelColor:"rgba(5,65,135,0.1)", rightFilterPanelColor:"rgba(5,65,135,0.1)", handleBackgroundImage:$options$$135$$.chart._resources.overviewGrippy, handleWidth:3, handleHeight:15, handleFillColor:"rgba(0,0,0,0)"};
  $options$$135$$.animationOnClick = "off";
  var $options$$inline_3658$$ = $options$$135$$.chart;
  this.$_chartContainer$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChild$(this.$_chartContainer$);
  window.optionsOverride = {zoomAndScroll:"off", legend:{rendered:"off"}, xAxis:{viewportMin:D.$JSCompiler_alias_NULL$$, viewportMax:D.$JSCompiler_alias_NULL$$, viewportStartGroup:D.$JSCompiler_alias_NULL$$, viewportEndGroup:D.$JSCompiler_alias_NULL$$, axisLine:{rendered:"off"}, title:D.$JSCompiler_alias_NULL$$}, yAxis:{rendered:"off"}, y2Axis:{rendered:"off"}, title:{text:D.$JSCompiler_alias_NULL$$}, subtitle:{text:D.$JSCompiler_alias_NULL$$}, footnote:{text:D.$JSCompiler_alias_NULL$$}, titleSeparator:{rendered:"off"}, 
  layout:{outerGapWidth:0, outerGapHeight:0}, _isOverview:D.$JSCompiler_alias_TRUE$$};
  $options$$inline_3658$$ = D.$DvtJSONUtils$$.$merge$(window.optionsOverride, $options$$inline_3658$$);
  "disabled" == $options$$inline_3658$$.timeAxisType && ($options$$inline_3658$$.xAxis.tickLabel.rendered = "off");
  this.$_chart$ || (this.$_chart$ = (0,D.$DvtChart$newInstance$$)(this.$_context$), this.$_chart$.setId(this.$_id$));
  this.$_chartContainer$.$addChild$(this.$_chart$);
  this.$_chart$.$render$($options$$inline_3658$$, $width$$67$$, $glassPane$$inline_3661_height$$52$$);
  $glassPane$$inline_3661_height$$52$$ = new D.$DvtRect$$(this.$_context$, 0, 0, $width$$67$$, $glassPane$$inline_3661_height$$52$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($glassPane$$inline_3661_height$$52$$);
  this.$_chartContainer$.$addChild$($glassPane$$inline_3661_height$$52$$);
  (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_chart$.$getEventManager$(), D.$JSCompiler_alias_NULL$$);
  D.$DvtChartOverview$$.$superclass$.$render$.call(this, $options$$135$$, $width$$67$$, this.$_chart$.$_plotAreaSpace$.$h$)
};
D.$JSCompiler_prototypeAlias$$.$isLeftAndRightFilterRendered$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$JSCompiler_prototypeAlias$$.$HandleKeyDown$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$HandleKeyUp$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtAnimOnDisplay$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAnimOnDisplay$$, D.$DvtObj$$, "DvtAnimOnDisplay");
D.$DvtAnimOnDisplay$$.$createAnimation$ = function $$DvtAnimOnDisplay$$$$createAnimation$$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$, $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$, $anim$$inline_3316_duration$$13_handler$$inline_3309$$) {
  $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$ = [];
  if(D.$DvtChartTypeUtils$$.$isBLAC$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$)) {
    D.$DvtAnimOnDisplay$$.$_animBarLineArea$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$, $anim$$inline_3316_duration$$13_handler$$inline_3309$$, $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$)
  }else {
    if(D.$DvtChartTypeUtils$$.$isScatterBubble$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$) || D.$DvtChartTypeUtils$$.$isFunnel$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$)) {
      D.$DvtAnimOnDisplay$$.$_animBubbleScatterFunnel$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$, $anim$$inline_3316_duration$$13_handler$$inline_3309$$, $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$)
    }else {
      if(D.$DvtChartTypeUtils$$.$isPie$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$) && $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$.$pieChart$) {
        $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$ = $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$.$pieChart$;
        $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$.$_duringDisplayAnim$ = D.$JSCompiler_alias_TRUE$$;
        $anim$$inline_3316_duration$$13_handler$$inline_3309$$ = new D.$DvtDataAnimationHandler$$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$.$_context$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$);
        $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$ = [];
        for(var $fillerAnim$$inline_3314_i$$inline_3311_value$$inline_9845$$ = 0;$fillerAnim$$inline_3314_i$$inline_3311_value$$inline_9845$$ < $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$.$_slices$.length;$fillerAnim$$inline_3314_i$$inline_3311_value$$inline_9845$$++) {
          $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$ = $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$.concat((0,D.$JSCompiler_StaticMethods_getLabelAndFeeler$$)($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$.$_slices$[$fillerAnim$$inline_3314_i$$inline_3311_value$$inline_9845$$]))
        }
        $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$ = new D.$DvtAnimFadeIn$$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$.$_context$, $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$.$getAnimationDuration$());
        $anim$$inline_3316_duration$$13_handler$$inline_3309$$.add($ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$, 0);
        $fillerAnim$$inline_3314_i$$inline_3311_value$$inline_9845$$ = $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$.$getTotalValue$();
        $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$ = new D.$DvtPieSlice$$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$);
        $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$.$_value$ = $fillerAnim$$inline_3314_i$$inline_3311_value$$inline_9845$$;
        $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$.$_bFillerSlice$ = D.$JSCompiler_alias_TRUE$$;
        $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$.$_fillColor$ = "rgba(255,255,255,0)";
        $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$.$_strokeColor$ = "rgba(255,255,255,0)";
        $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$.$_tooltip$ = D.$JSCompiler_alias_NULL$$;
        $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$.$_id$ = D.$JSCompiler_alias_NULL$$;
        $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$.$_slices$.push($ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$);
        $fillerAnim$$inline_3314_i$$inline_3311_value$$inline_9845$$ = new D.$DvtCustomAnimation$$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$.$_context$, $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$.$getAnimationDuration$());
        (0,D.$JSCompiler_StaticMethods_addProp$$)($fillerAnim$$inline_3314_i$$inline_3311_value$$inline_9845$$.$_animator$, "typeNumberArray", $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$, $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$.$GetAnimationParams$, $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$.$SetAnimationParams$, 
        [0, 0, 0]);
        $fillerAnim$$inline_3314_i$$inline_3311_value$$inline_9845$$.$setOnEnd$($ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$.$_removeDeletedSlice$, $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$);
        $anim$$inline_3316_duration$$13_handler$$inline_3309$$.add($fillerAnim$$inline_3314_i$$inline_3311_value$$inline_9845$$, 0);
        for($fillerAnim$$inline_3314_i$$inline_3311_value$$inline_9845$$ = 0;$fillerAnim$$inline_3314_i$$inline_3311_value$$inline_9845$$ < $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$.$_slices$.length - 1;$fillerAnim$$inline_3314_i$$inline_3311_value$$inline_9845$$++) {
          $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$.$_slices$[$fillerAnim$$inline_3314_i$$inline_3311_value$$inline_9845$$].$animateInsert$($anim$$inline_3316_duration$$13_handler$$inline_3309$$)
        }
        $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$ = new D.$DvtCustomAnimation$$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$.$_context$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$.$getAnimationDuration$());
        (0,D.$JSCompiler_StaticMethods_addProp$$)($ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$.$_animator$, "typeNumberArray", $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$.$_getAnimationParams$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$.$_setAnimationParams$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$.$_getAnimationParams$());
        $anim$$inline_3316_duration$$13_handler$$inline_3309$$.add($ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$, 0);
        $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$.$_setAnimationParams$();
        $anim$$inline_3316_duration$$13_handler$$inline_3309$$ = $anim$$inline_3316_duration$$13_handler$$inline_3309$$.$getAnimation$();
        $anim$$inline_3316_duration$$13_handler$$inline_3309$$.$setOnEnd$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$.$_restoreLabelPosition$, $JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$);
        $anim$$inline_3316_duration$$13_handler$$inline_3309$$.play();
        return D.$JSCompiler_alias_NULL$$
      }
    }
  }
  return 0 < $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$.length ? new D.$DvtParallelPlayable$$($JSCompiler_StaticMethods_doDisplayAnimation$self$$inline_3308_chart$$3$$.$_context$, $ar$$inline_3310_arPlayables_labelAnim$$inline_3312_renderAnim$$inline_3315_slice$$inline_9846_type$$91$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtAnimOnDisplay$$.$_animBarLineArea$ = function $$DvtAnimOnDisplay$$$$_animBarLineArea$$($chart$$4$$, $duration$$14$$, $arPlayables$$1$$) {
  var $objs$$2$$ = $chart$$4$$.$getObjects$(), $objCount$$ = $objs$$2$$ ? $objs$$2$$.length : 0;
  if($objCount$$) {
    for(var $obj$$101$$, $peer$$9$$, $nodePlayable$$4$$, $i$$268$$ = 0;$i$$268$$ < $objCount$$;$i$$268$$++) {
      $peer$$9$$ = $objs$$2$$[$i$$268$$], $obj$$101$$ = $peer$$9$$.$getDisplayables$()[0], window.seriesType = $peer$$9$$.$getSeriesType$(), $nodePlayable$$4$$ = D.$JSCompiler_alias_NULL$$, $obj$$101$$ instanceof D.$DvtChartBar$$ || $obj$$101$$ instanceof D.$DvtChartPolarBar$$ ? $nodePlayable$$4$$ = $obj$$101$$.$getDisplayAnimation$($duration$$14$$) : $obj$$101$$ instanceof D.$DvtChartLineArea$$ ? $nodePlayable$$4$$ = "line" == window.seriesType ? D.$DvtAnimOnDisplay$$.$_getLinePlayable$($chart$$4$$, 
      $obj$$101$$, $duration$$14$$) : D.$DvtAnimOnDisplay$$.$_getAreaPlayable$($chart$$4$$, $obj$$101$$, $duration$$14$$) : "on" == $peer$$9$$.$getSeriesItem$().markerDisplayed && ($nodePlayable$$4$$ = new D.$DvtAnimFadeIn$$($chart$$4$$.$_context$, $obj$$101$$, $duration$$14$$ - 0.8, 0.8)), $nodePlayable$$4$$ && $arPlayables$$1$$.push($nodePlayable$$4$$)
    }
  }
};
D.$DvtAnimOnDisplay$$.$_animBubbleScatterFunnel$ = function $$DvtAnimOnDisplay$$$$_animBubbleScatterFunnel$$($chart$$5$$, $duration$$15$$, $arPlayables$$2$$) {
  var $objs$$3$$ = $chart$$5$$.$getObjects$(), $objCount$$1$$ = $objs$$3$$ ? $objs$$3$$.length : 0;
  if($objCount$$1$$) {
    for(var $obj$$102_peer$$10$$, $nodePlayable$$5$$, $i$$269$$ = 0;$i$$269$$ < $objCount$$1$$;$i$$269$$++) {
      $obj$$102_peer$$10$$ = $objs$$3$$[$i$$269$$], $obj$$102_peer$$10$$ = $obj$$102_peer$$10$$.$getDisplayables$()[0], $obj$$102_peer$$10$$ instanceof D.$DvtMarker$$ ? $nodePlayable$$5$$ = D.$DvtChartTypeUtils$$.$isBubble$($chart$$5$$) ? D.$DvtAnimOnDisplay$$.$_getBubblePlayable$($chart$$5$$, $obj$$102_peer$$10$$, $duration$$15$$) : D.$DvtAnimOnDisplay$$.$_getScatterPlayable$($chart$$5$$, $obj$$102_peer$$10$$, $duration$$15$$) : $obj$$102_peer$$10$$ instanceof D.$DvtFunnelSlice$$ && ($nodePlayable$$5$$ = 
      D.$DvtAnimOnDisplay$$.$_getFunnelPlayable$($chart$$5$$, $obj$$102_peer$$10$$, $duration$$15$$)), $nodePlayable$$5$$ && $arPlayables$$2$$.push($nodePlayable$$5$$)
    }
  }
};
D.$DvtAnimOnDisplay$$.$_getAreaPlayable$ = function $$DvtAnimOnDisplay$$$$_getAreaPlayable$$($chart$$6_nodePlayable$$6$$, $shape$$8$$, $duration$$16_topAnim$$1$$) {
  var $context$$125$$ = $chart$$6_nodePlayable$$6$$.$_context$, $baselineCoord$$ = $shape$$8$$.$_baseline$, $baseAnim$$1_baseParams$$;
  if($shape$$8$$.$isArea$()) {
    var $baseCoords$$ = $shape$$8$$.$_arBaseCoord$;
    $baseAnim$$1_baseParams$$ = $shape$$8$$.$getBaseAnimationParams$();
    for(var $baseEndState$$1_endState$$2$$ = $baseAnim$$1_baseParams$$.slice(0), $j$$54$$ = 0;$j$$54$$ < $baseAnim$$1_baseParams$$.length;$j$$54$$++) {
      if(1 == $j$$54$$ % 4 || 2 == $j$$54$$ % 4) {
        $baseAnim$$1_baseParams$$[$j$$54$$] = $baselineCoord$$
      }
    }
    $shape$$8$$.$setBaseAnimationParams$($baseAnim$$1_baseParams$$);
    $baseAnim$$1_baseParams$$ = new D.$DvtCustomAnimation$$($context$$125$$, $shape$$8$$, $duration$$16_topAnim$$1$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($baseAnim$$1_baseParams$$.$_animator$, "typeNumberArray", $shape$$8$$, $shape$$8$$.$getBaseAnimationParams$, $shape$$8$$.$setBaseAnimationParams$, $baseEndState$$1_endState$$2$$)
  }
  for(var $coords$$1$$ = $shape$$8$$.$_arCoord$, $params$$15$$ = $shape$$8$$.$getAnimationParams$(), $baseEndState$$1_endState$$2$$ = $params$$15$$.slice(0), $j$$54$$ = 0;$j$$54$$ < $params$$15$$.length;$j$$54$$++) {
    if(1 == $j$$54$$ % 4 || 2 == $j$$54$$ % 4) {
      $params$$15$$[$j$$54$$] = $baselineCoord$$
    }
  }
  $shape$$8$$.$setAnimationParams$($params$$15$$);
  $duration$$16_topAnim$$1$$ = new D.$DvtCustomAnimation$$($context$$125$$, $shape$$8$$, $duration$$16_topAnim$$1$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$16_topAnim$$1$$.$_animator$, "typeNumberArray", $shape$$8$$, $shape$$8$$.$getAnimationParams$, $shape$$8$$.$setAnimationParams$, $baseEndState$$1_endState$$2$$);
  $chart$$6_nodePlayable$$6$$ = new D.$DvtParallelPlayable$$($chart$$6_nodePlayable$$6$$.$_context$, $baseAnim$$1_baseParams$$, $duration$$16_topAnim$$1$$);
  $chart$$6_nodePlayable$$6$$.$setOnEnd$(function() {
    $shape$$8$$.$setCoords$($coords$$1$$, $baseCoords$$)
  });
  return $chart$$6_nodePlayable$$6$$
};
D.$DvtAnimOnDisplay$$.$_getFunnelPlayable$ = function $$DvtAnimOnDisplay$$$$_getFunnelPlayable$$($chart$$7_context$$126$$, $slice$$1$$, $duration$$17_nodePlayable2$$) {
  $chart$$7_context$$126$$ = $chart$$7_context$$126$$.$_context$;
  var $arPoints$$4_nodePlayable1$$ = $slice$$1$$.$getAnimationParams$(), $endState1$$ = $arPoints$$4_nodePlayable1$$.slice(0), $endState2$$ = $arPoints$$4_nodePlayable1$$.slice(0);
  $arPoints$$4_nodePlayable1$$[0] = 0;
  $arPoints$$4_nodePlayable1$$[2] = 0;
  $endState1$$[2] = 0;
  $slice$$1$$.$setAnimationParams$($arPoints$$4_nodePlayable1$$);
  $arPoints$$4_nodePlayable1$$ = new D.$DvtCustomAnimation$$($chart$$7_context$$126$$, $slice$$1$$, $duration$$17_nodePlayable2$$ / 2);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($arPoints$$4_nodePlayable1$$.$_animator$, "typeNumberArray", $slice$$1$$, $slice$$1$$.$getAnimationParams$, $slice$$1$$.$setAnimationParams$, $endState1$$);
  $duration$$17_nodePlayable2$$ = new D.$DvtCustomAnimation$$($chart$$7_context$$126$$, $slice$$1$$, $duration$$17_nodePlayable2$$ / 2);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($duration$$17_nodePlayable2$$.$_animator$, "typeNumberArray", $slice$$1$$, $slice$$1$$.$getAnimationParams$, $slice$$1$$.$setAnimationParams$, $endState2$$);
  return new D.$DvtSequentialPlayable$$($chart$$7_context$$126$$, [$arPoints$$4_nodePlayable1$$, $duration$$17_nodePlayable2$$])
};
D.$DvtAnimOnDisplay$$.$_getBubblePlayable$ = function $$DvtAnimOnDisplay$$$$_getBubblePlayable$$($chart$$8_context$$127$$, $marker$$15_p3$$, $duration$$18$$) {
  $chart$$8_context$$127$$ = $chart$$8_context$$127$$.$_context$;
  var $endScale_p1$$1$$ = new D.$DvtPoint$$($marker$$15_p3$$.$getScaleX$(), $marker$$15_p3$$.$getScaleY$());
  $marker$$15_p3$$.$setScale$(1, 1);
  var $endScale_p1$$1$$ = new D.$DvtAnimScaleBy$$($chart$$8_context$$127$$, $marker$$15_p3$$, $endScale_p1$$1$$, $duration$$18$$), $p2$$1$$ = new D.$DvtAnimFadeIn$$($chart$$8_context$$127$$, $marker$$15_p3$$, $duration$$18$$), $size$$16$$ = $marker$$15_p3$$.$getSize$(), $matrix$$9$$ = $marker$$15_p3$$.$getMatrix$().clone();
  $matrix$$9$$.translate($size$$16$$ / 2, $size$$16$$ / 2);
  $marker$$15_p3$$.$setMatrix$($matrix$$9$$);
  $marker$$15_p3$$ = new D.$DvtAnimMoveBy$$($chart$$8_context$$127$$, $marker$$15_p3$$, new D.$DvtPoint$$(-$size$$16$$ / 2, -$size$$16$$ / 2), $duration$$18$$);
  return new D.$DvtParallelPlayable$$($chart$$8_context$$127$$, [$endScale_p1$$1$$, $p2$$1$$, $marker$$15_p3$$])
};
D.$DvtAnimOnDisplay$$.$_getLinePlayable$ = function $$DvtAnimOnDisplay$$$$_getLinePlayable$$($chart$$9_nodePlayable$$7$$, $line$$7$$, $duration$$19$$) {
  var $coords$$2$$ = $line$$7$$.$_arCoord$, $params$$16$$ = $line$$7$$.$getAnimationParams$(), $endState$$3$$ = $params$$16$$.slice(0);
  D.$DvtAnimOnDisplay$$.$_getMeanPoints$($params$$16$$);
  $line$$7$$.$setAnimationParams$($params$$16$$);
  $chart$$9_nodePlayable$$7$$ = new D.$DvtCustomAnimation$$($chart$$9_nodePlayable$$7$$.$_context$, $line$$7$$, $duration$$19$$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($chart$$9_nodePlayable$$7$$.$_animator$, "typeNumberArray", $line$$7$$, $line$$7$$.$getAnimationParams$, $line$$7$$.$setAnimationParams$, $endState$$3$$);
  $chart$$9_nodePlayable$$7$$.$setOnEnd$(function() {
    $line$$7$$.$setCoords$($coords$$2$$)
  });
  return $chart$$9_nodePlayable$$7$$
};
D.$DvtAnimOnDisplay$$.$_getScatterPlayable$ = function $$DvtAnimOnDisplay$$$$_getScatterPlayable$$($chart$$10$$, $marker$$16$$, $duration$$20$$) {
  return new D.$DvtAnimPopIn$$($chart$$10$$.$_context$, $marker$$16$$, D.$JSCompiler_alias_TRUE$$, $duration$$20$$)
};
D.$DvtAnimOnDisplay$$.$_getMeanPoints$ = function $$DvtAnimOnDisplay$$$$_getMeanPoints$$($params$$17$$) {
  var $mean$$ = 0, $min$$2$$ = window.Number.MAX_VALUE, $max$$2$$ = window.Number.MIN_VALUE, $len$$3$$ = $params$$17$$.length, $i$$270$$;
  for($i$$270$$ = 0;$i$$270$$ < $len$$3$$;$i$$270$$++) {
    var $v$$ = $params$$17$$[$i$$270$$];
    0 == $i$$270$$ % 4 || (3 == $i$$270$$ % 4 || window.Infinity == $v$$) || ($v$$ < $min$$2$$ && ($min$$2$$ = $v$$), $v$$ > $max$$2$$ && ($max$$2$$ = $v$$), $mean$$ += $v$$)
  }
  8 < $len$$3$$ ? ($mean$$ = $mean$$ - 2 * $min$$2$$ - 2 * $max$$2$$, $mean$$ /= $len$$3$$ / 2 - 4) : $mean$$ /= $len$$3$$ / 2;
  for($i$$270$$ = 0;$i$$270$$ < $len$$3$$;$i$$270$$++) {
    if(1 == $i$$270$$ % 4 || 2 == $i$$270$$ % 4) {
      $params$$17$$[$i$$270$$] = $mean$$
    }
  }
};
D.$DvtAnimOnDC$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtAnimOnDC$$, D.$DvtObj$$, "DvtAnimOnDC");
D.$DvtAnimOnDC$$.$createAnimation$ = function $$DvtAnimOnDC$$$$createAnimation$$($handler$$13_oldChart$$2$$, $newChart$$2$$, $arOldList_type$$90$$, $duration$$11$$, $delContainer$$3$$) {
  if(!D.$DvtAnimOnDC$$.$_canAnimate$($handler$$13_oldChart$$2$$, $newChart$$2$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $ctx$$1$$ = $newChart$$2$$.$_context$;
  $arOldList_type$$90$$ = [];
  var $arNewList$$ = [];
  D.$DvtChartTypeUtils$$.$isPie$($newChart$$2$$) ? ($arOldList_type$$90$$.push($handler$$13_oldChart$$2$$.$pieChart$), $arNewList$$.push($newChart$$2$$.$pieChart$)) : D.$DvtAnimOnDC$$.$_buildAnimLists$($arOldList_type$$90$$, $handler$$13_oldChart$$2$$, $arNewList$$, $newChart$$2$$, $duration$$11$$);
  var $playable$$22$$;
  $handler$$13_oldChart$$2$$ = new D.$DvtDataAnimationHandler$$($ctx$$1$$, $delContainer$$3$$);
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($handler$$13_oldChart$$2$$, $arOldList_type$$90$$, $arNewList$$);
  0 < $handler$$13_oldChart$$2$$.$_playables$.length && ($playable$$22$$ = $handler$$13_oldChart$$2$$.$getAnimation$());
  return $playable$$22$$
};
D.$DvtAnimOnDC$$.$_buildAnimLists$ = function $$DvtAnimOnDC$$$$_buildAnimLists$$($arOldList$$1_i$$267$$, $oldChart$$3$$, $arNewList$$1$$, $newChart$$3$$, $duration$$12$$) {
  var $j$$53$$, $ar$$6$$ = $oldChart$$3$$.$peers$, $aOut$$ = $arOldList$$1_i$$267$$, $peer$$8$$, $obj$$100$$, $dch$$;
  for($arOldList$$1_i$$267$$ = 0;2 > $arOldList$$1_i$$267$$;$arOldList$$1_i$$267$$++) {
    for($j$$53$$ = 0;$j$$53$$ < $ar$$6$$.length;$j$$53$$++) {
      $peer$$8$$ = $ar$$6$$[$j$$53$$], $obj$$100$$ = $peer$$8$$.$getDisplayables$()[0], $dch$$ = D.$JSCompiler_alias_NULL$$, $obj$$100$$ instanceof D.$DvtFunnelSlice$$ ? $dch$$ = new D.$DvtDCFunnelSlice$$($peer$$8$$, $duration$$12$$) : $obj$$100$$ instanceof D.$DvtChartBar$$ || $obj$$100$$ instanceof D.$DvtChartPolarBar$$ ? $dch$$ = new D.$DvtDCChart2DBar$$($peer$$8$$, $duration$$12$$) : $obj$$100$$ instanceof D.$DvtChartLineArea$$ ? $dch$$ = new D.$DvtDCChartLineArea$$($peer$$8$$, $duration$$12$$) : 
      $obj$$100$$ instanceof D.$DvtMarker$$ && ($dch$$ = new D.$DvtDCChartMarker$$($peer$$8$$, $duration$$12$$)), $dch$$ && ($aOut$$.push($dch$$), $dch$$.$_oldChart$ = $oldChart$$3$$)
    }
    $aOut$$ = $arNewList$$1$$;
    $ar$$6$$ = $newChart$$3$$.$getObjects$()
  }
};
D.$DvtAnimOnDC$$.$_canAnimate$ = function $$DvtAnimOnDC$$$$_canAnimate$$($oldChart$$4$$, $newChart$$4$$) {
  return D.$DvtChartTypeUtils$$.$isPie$($oldChart$$4$$) && D.$DvtChartTypeUtils$$.$isPie$($newChart$$4$$) ? $oldChart$$4$$ && $newChart$$4$$ : D.$DvtChartTypeUtils$$.$isBLAC$($oldChart$$4$$) && D.$DvtChartTypeUtils$$.$isBLAC$($newChart$$4$$) ? D.$JSCompiler_alias_TRUE$$ : D.$DvtChartTypeUtils$$.$isScatterBubble$($oldChart$$4$$) && D.$DvtChartTypeUtils$$.$isScatterBubble$($newChart$$4$$) ? D.$JSCompiler_alias_TRUE$$ : $oldChart$$4$$.$getType$() == $newChart$$4$$.$getType$() ? D.$JSCompiler_alias_TRUE$$ : 
  D.$JSCompiler_alias_FALSE$$
};
D.$DvtDCChartAbstract$$ = function $$DvtDCChartAbstract$$$($peer$$4$$, $duration$$7$$) {
  this.Init($peer$$4$$, $duration$$7$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartAbstract$$, D.$DvtObj$$, "DvtDCChartAbstract");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChartAbstract$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_animId$");
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$5$$, $duration$$8$$) {
  this.$_peer$ = $peer$$5$$;
  this.$_updateDuration$ = 0.75 * $duration$$8$$;
  this.$_insertDuration$ = 0.5 * $duration$$8$$;
  this.$_deleteDuration$ = 0.5 * $duration$$8$$;
  this.$_shape$ = $peer$$5$$.$getDisplayables$()[0];
  this.$_animId$ = $peer$$5$$.$getSeries$() + "/" + $peer$$5$$.$getGroup$()
};
D.$DvtDCChart2DBar$$ = function $$DvtDCChart2DBar$$$($peer$$2$$, $duration$$5$$) {
  this.Init($peer$$2$$, $duration$$5$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChart2DBar$$, D.$DvtDCChartAbstract$$, "DvtDCChart2DBar");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChart2DBar$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$3$$, $duration$$6$$) {
  D.$DvtDCChart2DBar$$.$superclass$.Init.call(this, $peer$$3$$, $duration$$6$$);
  this.$_indicator$ = D.$JSCompiler_alias_NULL$$;
  this.$_animId$ += "/bar"
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$4$$) {
  var $playable$$20$$ = this.$_shape$.$getInsertAnimation$(this.$_insertDuration$);
  $handler$$4$$.add($playable$$20$$, 2)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$5$$, $delContainer$$) {
  $delContainer$$.$addChild$(this.$_shape$);
  var $playable$$21$$ = this.$_shape$.$getDeleteAnimation$(this.$_deleteDuration$);
  $handler$$5$$.add($playable$$21$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$6$$, $oldDC$$) {
  var $nodePlayable_startState$$ = $oldDC$$.$_getAnimationParams$(), $endState$$ = this.$_getAnimationParams$();
  if(!D.$DvtArrayUtils$$.$equals$($nodePlayable_startState$$, $endState$$)) {
    var $oldChart$$ = this.$_oldChart$, $newChart$$ = this.$_peer$.$_chart$, $newSIdx$$ = this.$_peer$.$getSeriesIndex$(), $oldSIdx$$ = $oldDC$$.$_peer$.$getSeriesIndex$(), $newGIdx$$ = this.$_peer$.$getGroupIndex$(), $oldGIdx$$ = $oldDC$$.$_peer$.$getGroupIndex$();
    "none" !== D.$DvtChartStyleUtils$$.$getAnimationIndicators$($newChart$$) && (this.$_indicator$ = D.$DvtDCChartUtils$$.$makeIndicator$($oldChart$$, $oldSIdx$$, $oldGIdx$$, $newChart$$, $newSIdx$$, $newGIdx$$));
    this.$_setAnimationParams$($nodePlayable_startState$$);
    $nodePlayable_startState$$ = new D.$DvtCustomAnimation$$(this.$_shape$.$_context$, this, this.$_updateDuration$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable_startState$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, this.$_setAnimationParams$, $endState$$);
    this.$_indicator$ && ($nodePlayable_startState$$.$setOnEnd$(this.$_onEndAnimation$, this), this.$_indicator$.$setAlpha$(0));
    $handler$$6$$.add($nodePlayable_startState$$, 1)
  }
};
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$() {
  return this.$_shape$.$getAnimationParams$()
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$($ar$$5$$) {
  this.$_shape$.$setAnimationParams$($ar$$5$$, this.$_indicator$)
};
D.$JSCompiler_prototypeAlias$$.$_onEndAnimation$ = function $$JSCompiler_prototypeAlias$$$$_onEndAnimation$$() {
  this.$_indicator$.getParent().removeChild(this.$_indicator$);
  this.$_indicator$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtDCChartLineArea$$ = function $$DvtDCChartLineArea$$$($peer$$6$$, $duration$$9$$) {
  this.Init($peer$$6$$, $duration$$9$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartLineArea$$, D.$DvtDCChartAbstract$$, "DvtDCChartLineArea");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChartLineArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$10$$, $oldDC$$1$$) {
  this.$_baseCoords$ = this.$_shape$.$_arBaseCoord$;
  this.$_coords$ = this.$_shape$.$_arCoord$;
  var $i$$265_isArea$$ = this.$_shape$.$isArea$(), $nodePlayable$$1_oldChart$$1$$ = this.$_oldChart$, $newChart$$1$$ = this.$_chart$, $newSIdx$$1$$ = this.$_peer$.$getSeriesIndex$(), $oldSIdx$$1$$ = $oldDC$$1$$.$_peer$.$getSeriesIndex$(), $newGIdcs$$ = (0,D.$JSCompiler_StaticMethods_getCommonGroupIndices$$)(this.$_shape$, $oldDC$$1$$.$_shape$), $oldGIdcs$$ = (0,D.$JSCompiler_StaticMethods_getCommonGroupIndices$$)($oldDC$$1$$.$_shape$, this.$_shape$), $baseAnim$$;
  if($i$$265_isArea$$) {
    var $JSCompiler_StaticMethods_addIndicator$self$$inline_3296_baseStartState_startState$$1$$ = $oldDC$$1$$.$_getBaseAnimationParams$(this.$_shape$), $baseEndState_endState$$1_groupIndex$$inline_3297$$ = this.$_getBaseAnimationParams$($oldDC$$1$$.$_shape$);
    (0,D.$DvtDCChartLineArea$_matchGroupIndices$$)($JSCompiler_StaticMethods_addIndicator$self$$inline_3296_baseStartState_startState$$1$$, $baseEndState_endState$$1_groupIndex$$inline_3297$$);
    D.$DvtArrayUtils$$.$equals$($JSCompiler_StaticMethods_addIndicator$self$$inline_3296_baseStartState_startState$$1$$, $baseEndState_endState$$1_groupIndex$$inline_3297$$) || (this.$_setBaseAnimationParams$($JSCompiler_StaticMethods_addIndicator$self$$inline_3296_baseStartState_startState$$1$$), $baseAnim$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, this.$_updateDuration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($baseAnim$$.$_animator$, "typeNumberArray", this, this.$_getBaseAnimationParams$, 
    this.$_setBaseAnimationParams$, $baseEndState_endState$$1_groupIndex$$inline_3297$$))
  }
  var $topAnim$$, $JSCompiler_StaticMethods_addIndicator$self$$inline_3296_baseStartState_startState$$1$$ = $oldDC$$1$$.$_getAnimationParams$(this.$_shape$), $baseEndState_endState$$1_groupIndex$$inline_3297$$ = this.$_getAnimationParams$($oldDC$$1$$.$_shape$);
  (0,D.$DvtDCChartLineArea$_matchGroupIndices$$)($JSCompiler_StaticMethods_addIndicator$self$$inline_3296_baseStartState_startState$$1$$, $baseEndState_endState$$1_groupIndex$$inline_3297$$);
  D.$DvtArrayUtils$$.$equals$($JSCompiler_StaticMethods_addIndicator$self$$inline_3296_baseStartState_startState$$1$$, $baseEndState_endState$$1_groupIndex$$inline_3297$$) || (this.$_setAnimationParams$($JSCompiler_StaticMethods_addIndicator$self$$inline_3296_baseStartState_startState$$1$$), $topAnim$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, this.$_updateDuration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($topAnim$$.$_animator$, "typeNumberArray", this, this.$_getAnimationParams$, 
  this.$_setAnimationParams$, $baseEndState_endState$$1_groupIndex$$inline_3297$$));
  if("none" !== D.$DvtChartStyleUtils$$.$getAnimationIndicators$($newChart$$1$$) && !($i$$265_isArea$$ && "lineWithArea" == this.$_peer$.$getSeriesType$())) {
    for(var $direction$$12_direction$$inline_3298$$, $indicator$$6_indicator$$inline_3299$$, $i$$265_isArea$$ = 0;$i$$265_isArea$$ < $newGIdcs$$.length;$i$$265_isArea$$++) {
      if($direction$$12_direction$$inline_3298$$ = D.$DvtDCChartUtils$$.$getDirection$($nodePlayable$$1_oldChart$$1$$, $oldSIdx$$1$$, $oldGIdcs$$[$i$$265_isArea$$], $newChart$$1$$, $newSIdx$$1$$, $newGIdcs$$[$i$$265_isArea$$]), $indicator$$6_indicator$$inline_3299$$ = D.$DvtDCChartUtils$$.$makeIndicator$($nodePlayable$$1_oldChart$$1$$, $oldSIdx$$1$$, $oldGIdcs$$[$i$$265_isArea$$], $newChart$$1$$, $newSIdx$$1$$, $newGIdcs$$[$i$$265_isArea$$])) {
        $JSCompiler_StaticMethods_addIndicator$self$$inline_3296_baseStartState_startState$$1$$ = this.$_shape$, $baseEndState_endState$$1_groupIndex$$inline_3297$$ = $newGIdcs$$[$i$$265_isArea$$], $indicator$$6_indicator$$inline_3299$$.$setAlpha$(0), $JSCompiler_StaticMethods_addIndicator$self$$inline_3296_baseStartState_startState$$1$$.$_indicatorMap$[$baseEndState_endState$$1_groupIndex$$inline_3297$$] = {direction:$direction$$12_direction$$inline_3298$$, $indicator$:$indicator$$6_indicator$$inline_3299$$}
      }
    }
  }
  if($baseAnim$$ || $topAnim$$) {
    $nodePlayable$$1_oldChart$$1$$ = new D.$DvtParallelPlayable$$(this.$_context$, $baseAnim$$, $topAnim$$), $nodePlayable$$1_oldChart$$1$$.$setOnEnd$(this.$_onAnimationEnd$, this), $handler$$10$$.add($nodePlayable$$1_oldChart$$1$$, 1)
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$11$$) {
  this.$_shape$.$setAlpha$(0);
  var $nodePlayable$$2$$ = new D.$DvtAnimFadeIn$$(this.$_context$, this.$_shape$, this.$_insertDuration$);
  $handler$$11$$.add($nodePlayable$$2$$, 2)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$12$$, $delContainer$$2$$) {
  var $areaContainer_nodePlayable$$3$$;
  "area" == D.$DvtChartStyleUtils$$.$getSeriesType$(this.$_oldChart$, this.$_peer$.$getSeriesIndex$()) ? ($areaContainer_nodePlayable$$3$$ = this.$_chart$.$_areaContainer$, this.$_deletedAreas$ = this.$_shape$.getParent().getParent(), $areaContainer_nodePlayable$$3$$ && ($areaContainer_nodePlayable$$3$$.$addChild$(this.$_deletedAreas$), $areaContainer_nodePlayable$$3$$ = new D.$DvtAnimFadeOut$$(this.$_context$, this.$_deletedAreas$, this.$_deleteDuration$), $areaContainer_nodePlayable$$3$$.$setOnEnd$(this.$_removeDeletedAreas$, 
  this), $handler$$12$$.add($areaContainer_nodePlayable$$3$$, 0))) : ($delContainer$$2$$.$addChild$(this.$_shape$), $areaContainer_nodePlayable$$3$$ = new D.$DvtAnimFadeOut$$(this.$_context$, this.$_shape$, this.$_deleteDuration$), $handler$$12$$.add($areaContainer_nodePlayable$$3$$, 0))
};
D.$JSCompiler_prototypeAlias$$.$_removeDeletedAreas$ = function $$JSCompiler_prototypeAlias$$$$_removeDeletedAreas$$() {
  var $areaContainer$$1$$ = this.$_chart$.$_areaContainer$;
  $areaContainer$$1$$ && $areaContainer$$1$$.removeChild(this.$_deletedAreas$)
};
D.$JSCompiler_prototypeAlias$$.$_getAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getAnimationParams$$($otherShape$$) {
  return this.$_shape$.$getAnimationParams$($otherShape$$)
};
D.$JSCompiler_prototypeAlias$$.$_setAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setAnimationParams$$($params$$13$$) {
  this.$_shape$.$setAnimationParams$($params$$13$$)
};
D.$JSCompiler_prototypeAlias$$.$_getBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_getBaseAnimationParams$$($otherShape$$1$$) {
  return this.$_shape$.$getBaseAnimationParams$($otherShape$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$_setBaseAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$_setBaseAnimationParams$$($params$$14$$) {
  this.$_shape$.$setBaseAnimationParams$($params$$14$$)
};
D.$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  var $JSCompiler_StaticMethods_removeIndicators$self$$inline_3301$$ = this.$_shape$, $groupIndex$$inline_3302$$;
  for($groupIndex$$inline_3302$$ in $JSCompiler_StaticMethods_removeIndicators$self$$inline_3301$$.$_indicatorMap$) {
    var $indicator$$inline_3303$$ = $JSCompiler_StaticMethods_removeIndicators$self$$inline_3301$$.$_indicatorMap$[$groupIndex$$inline_3302$$].$indicator$;
    $indicator$$inline_3303$$ && $indicator$$inline_3303$$.getParent().removeChild($indicator$$inline_3303$$)
  }
  $JSCompiler_StaticMethods_removeIndicators$self$$inline_3301$$.$_indicatorMap$ = {};
  this.$_shape$.$setCoords$(this.$_coords$, this.$_baseCoords$)
};
D.$DvtDCChartLineArea$_matchGroupIndices$$ = function $$DvtDCChartLineArea$_matchGroupIndices$$$($startParams$$, $endParams$$) {
  for(var $i$$266$$ = 3;$i$$266$$ < $startParams$$.length;$i$$266$$ += 4) {
    $startParams$$[$i$$266$$] = $endParams$$[$i$$266$$]
  }
};
D.$DvtDCChartLineArea$$.prototype.Init = function $$DvtDCChartLineArea$$$$Init$($peer$$7$$, $duration$$10$$) {
  D.$DvtDCChartLineArea$$.$superclass$.Init.call(this, $peer$$7$$, $duration$$10$$);
  this.$_context$ = this.$_shape$.$_context$;
  this.$_chart$ = this.$_peer$.$_chart$;
  this.$_animId$ += "/" + (this.$_shape$.$isArea$() ? "area" : "line")
};
D.$DvtDCChartMarker$$ = function $$DvtDCChartMarker$$$($peer$$11$$, $duration$$21$$) {
  this.Init($peer$$11$$, $duration$$21$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartMarker$$, D.$DvtDCChartAbstract$$, "DvtDCChartMarker");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCChartMarker$$.prototype;
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$14$$, $oldDC$$2$$) {
  var $oldObj$$ = $oldDC$$2$$.$_shape$, $newObj$$ = this.$_shape$, $alpha$$14_chart$$11_endMatrix_fc$$1$$ = $newObj$$.$getMatrix$(), $bRet$$inline_3320_oldSIdx$$inline_3321_overlay$$7_startMatrix$$ = new D.$DvtMatrix$$;
  $bRet$$inline_3320_oldSIdx$$inline_3321_overlay$$7_startMatrix$$.translate(-$newObj$$.$getX$(), -$newObj$$.$getY$());
  $bRet$$inline_3320_oldSIdx$$inline_3321_overlay$$7_startMatrix$$.scale($oldObj$$.getWidth() / $newObj$$.getWidth(), $oldObj$$.getHeight() / $newObj$$.getHeight());
  $bRet$$inline_3320_oldSIdx$$inline_3321_overlay$$7_startMatrix$$.translate($oldObj$$.$getX$(), $oldObj$$.$getY$());
  if(!$alpha$$14_chart$$11_endMatrix_fc$$1$$.$equals$($bRet$$inline_3320_oldSIdx$$inline_3321_overlay$$7_startMatrix$$)) {
    var $nodePlayable$$8$$ = new D.$DvtCustomAnimation$$(this.$_shape$.$_context$, this, this.$_updateDuration$);
    this.$_shape$.$setMatrix$($bRet$$inline_3320_oldSIdx$$inline_3321_overlay$$7_startMatrix$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$8$$.$_animator$, "typeMatrix", this.$_shape$, this.$_shape$.$getMatrix$, this.$_shape$.$setMatrix$, $alpha$$14_chart$$11_endMatrix_fc$$1$$);
    $alpha$$14_chart$$11_endMatrix_fc$$1$$ = this.$_peer$.$_chart$;
    $bRet$$inline_3320_oldSIdx$$inline_3321_overlay$$7_startMatrix$$ = D.$JSCompiler_alias_FALSE$$;
    if($oldDC$$2$$) {
      var $bRet$$inline_3320_oldSIdx$$inline_3321_overlay$$7_startMatrix$$ = $oldDC$$2$$.$_peer$.$getSeriesIndex$(), $fa_fill$$20_oldGIdx$$inline_3322_overlayEndMatrix$$ = $oldDC$$2$$.$_peer$.$getGroupIndex$(), $newSIdx$$inline_3323$$ = this.$_peer$.$getSeriesIndex$(), $newGIdx$$inline_3324$$ = this.$_peer$.$getGroupIndex$(), $oldData$$inline_3325$$ = $oldDC$$2$$.$_oldChart$.$getOptions$(), $newData$$inline_3326$$ = this.$_peer$.$_chart$.$getOptions$(), $oldY$$inline_3327$$ = $oldData$$inline_3325$$.series[$bRet$$inline_3320_oldSIdx$$inline_3321_overlay$$7_startMatrix$$].items[$fa_fill$$20_oldGIdx$$inline_3322_overlayEndMatrix$$].y, 
      $oldZ$$inline_3328$$ = $oldData$$inline_3325$$.series[$bRet$$inline_3320_oldSIdx$$inline_3321_overlay$$7_startMatrix$$].items[$fa_fill$$20_oldGIdx$$inline_3322_overlayEndMatrix$$].z, $newY$$inline_3329$$ = $newData$$inline_3326$$.series[$newSIdx$$inline_3323$$].items[$newGIdx$$inline_3324$$].y, $newZ$$inline_3330$$ = $newData$$inline_3326$$.series[$newSIdx$$inline_3323$$].items[$newGIdx$$inline_3324$$].z, $bRet$$inline_3320_oldSIdx$$inline_3321_overlay$$7_startMatrix$$ = $newData$$inline_3326$$.series[$newSIdx$$inline_3323$$].items[$newGIdx$$inline_3324$$].x !== 
      $oldData$$inline_3325$$.series[$bRet$$inline_3320_oldSIdx$$inline_3321_overlay$$7_startMatrix$$].items[$fa_fill$$20_oldGIdx$$inline_3322_overlayEndMatrix$$].x || $newY$$inline_3329$$ !== $oldY$$inline_3327$$ || $newZ$$inline_3330$$ !== $oldZ$$inline_3328$$
    }
    $bRet$$inline_3320_oldSIdx$$inline_3321_overlay$$7_startMatrix$$ && ("none" != D.$DvtChartStyleUtils$$.$getAnimationIndicators$(this.$_peer$.$_chart$) && D.$DvtChartTypeUtils$$.$isScatterBubble$($alpha$$14_chart$$11_endMatrix_fc$$1$$)) && ($bRet$$inline_3320_oldSIdx$$inline_3321_overlay$$7_startMatrix$$ = $oldDC$$2$$.$_shape$, D.$DvtChartTypeUtils$$.$isScatter$($alpha$$14_chart$$11_endMatrix_fc$$1$$) ? ($alpha$$14_chart$$11_endMatrix_fc$$1$$ = "#FFFF2B", $fa_fill$$20_oldGIdx$$inline_3322_overlayEndMatrix$$ = 
    0.7) : ($alpha$$14_chart$$11_endMatrix_fc$$1$$ = "#D5D500", $fa_fill$$20_oldGIdx$$inline_3322_overlayEndMatrix$$ = 0.4), $fa_fill$$20_oldGIdx$$inline_3322_overlayEndMatrix$$ = new D.$DvtSolidFill$$($alpha$$14_chart$$11_endMatrix_fc$$1$$, $fa_fill$$20_oldGIdx$$inline_3322_overlayEndMatrix$$), $alpha$$14_chart$$11_endMatrix_fc$$1$$ = this.$_shape$.$getAlpha$(), this.$_shape$.$setAlpha$(0), $bRet$$inline_3320_oldSIdx$$inline_3321_overlay$$7_startMatrix$$.$setFill$($fa_fill$$20_oldGIdx$$inline_3322_overlayEndMatrix$$), 
    this.$_peer$.$_chart$.$getPlotArea$().$addChild$($bRet$$inline_3320_oldSIdx$$inline_3321_overlay$$7_startMatrix$$), $fa_fill$$20_oldGIdx$$inline_3322_overlayEndMatrix$$ = new D.$DvtMatrix$$, $fa_fill$$20_oldGIdx$$inline_3322_overlayEndMatrix$$.translate(-$oldObj$$.$getX$(), -$oldObj$$.$getY$()), $fa_fill$$20_oldGIdx$$inline_3322_overlayEndMatrix$$.scale($newObj$$.getWidth() / $oldObj$$.getWidth(), $newObj$$.getHeight() / $oldObj$$.getHeight()), $fa_fill$$20_oldGIdx$$inline_3322_overlayEndMatrix$$.translate($newObj$$.$getX$(), 
    $newObj$$.$getY$()), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$8$$.$_animator$, "typeNumber", this.$_shape$, this.$_shape$.$getAlpha$, this.$_shape$.$setAlpha$, $alpha$$14_chart$$11_endMatrix_fc$$1$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$8$$.$_animator$, "typeMatrix", $bRet$$inline_3320_oldSIdx$$inline_3321_overlay$$7_startMatrix$$, $bRet$$inline_3320_oldSIdx$$inline_3321_overlay$$7_startMatrix$$.$getMatrix$, $bRet$$inline_3320_oldSIdx$$inline_3321_overlay$$7_startMatrix$$.$setMatrix$, 
    $fa_fill$$20_oldGIdx$$inline_3322_overlayEndMatrix$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$8$$.$_animator$, "typeNumber", $bRet$$inline_3320_oldSIdx$$inline_3321_overlay$$7_startMatrix$$, $bRet$$inline_3320_oldSIdx$$inline_3321_overlay$$7_startMatrix$$.$getAlpha$, $bRet$$inline_3320_oldSIdx$$inline_3321_overlay$$7_startMatrix$$.$setAlpha$, 0), this.$_overlay$ = $bRet$$inline_3320_oldSIdx$$inline_3321_overlay$$7_startMatrix$$, $nodePlayable$$8$$.$setOnEnd$(this.$_onEndAnimation$, 
    this));
    $handler$$14$$.add($nodePlayable$$8$$, 1)
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$15$$) {
  this.$_shape$.$setAlpha$(0);
  var $nodePlayable$$9$$ = new D.$DvtAnimFadeIn$$(this.$_shape$.$_context$, this.$_shape$, this.$_insertDuration$);
  $handler$$15$$.add($nodePlayable$$9$$, 2)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$16$$, $delContainer$$4$$) {
  $delContainer$$4$$.$addChild$(this.$_shape$);
  var $nodePlayable$$10$$ = new D.$DvtAnimFadeOut$$(this.$_shape$.$_context$, this.$_shape$, this.$_deleteDuration$);
  $handler$$16$$.add($nodePlayable$$10$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$_onEndAnimation$ = function $$JSCompiler_prototypeAlias$$$$_onEndAnimation$$() {
  this.$_overlay$ && (this.$_peer$.$_chart$.$getPlotArea$().removeChild(this.$_overlay$), this.$_overlay$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($peer$$12$$, $duration$$22$$) {
  D.$DvtDCChartMarker$$.$superclass$.Init.call(this, $peer$$12$$, $duration$$22$$);
  this.$_animId$ += "/marker"
};
D.$DvtDCChartUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtDCChartUtils$$, D.$DvtObj$$, "DvtDCChartUtils");
D.$DvtDCChartUtils$$.$DIR_UP$ = 0;
D.$DvtDCChartUtils$$.$DIR_DOWN$ = 1;
D.$DvtDCChartUtils$$.$DIR_NOCHANGE$ = 2;
D.$DvtDCChartUtils$$.$makeIndicator$ = function $$DvtDCChartUtils$$$$makeIndicator$$($bDown_indicator$$7_oldChart$$5_uiDirection$$, $oldSIdx$$3$$, $oldGIdx$$2$$, $newChart$$5$$, $newSIdx$$3$$, $newGIdx$$2$$) {
  if(D.$DvtChartTypeUtils$$.$isPolar$($newChart$$5$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  $bDown_indicator$$7_oldChart$$5_uiDirection$$ = D.$DvtDCChartUtils$$.$getDirection$($bDown_indicator$$7_oldChart$$5_uiDirection$$, $oldSIdx$$3$$, $oldGIdx$$2$$, $newChart$$5$$, $newSIdx$$3$$, $newGIdx$$2$$);
  if($bDown_indicator$$7_oldChart$$5_uiDirection$$ == D.$DvtDCChartUtils$$.$DIR_NOCHANGE$) {
    return D.$JSCompiler_alias_NULL$$
  }
  window.fc = ($bDown_indicator$$7_oldChart$$5_uiDirection$$ = $bDown_indicator$$7_oldChart$$5_uiDirection$$ === D.$DvtDCChartUtils$$.$DIR_DOWN$) ? D.$DvtChartStyleUtils$$.$getAnimationDownColor$($newChart$$5$$) : D.$DvtChartStyleUtils$$.$getAnimationUpColor$($newChart$$5$$);
  $bDown_indicator$$7_oldChart$$5_uiDirection$$ = D.$DvtDCChartUtils$$.$_drawIndicator$($newChart$$5$$.$_context$, $bDown_indicator$$7_oldChart$$5_uiDirection$$, D.$DvtChartTypeUtils$$.$isHorizontal$($newChart$$5$$));
  $newChart$$5$$.$getPlotArea$().$addChild$($bDown_indicator$$7_oldChart$$5_uiDirection$$);
  return $bDown_indicator$$7_oldChart$$5_uiDirection$$
};
D.$DvtDCChartUtils$$.$getDirection$ = function $$DvtDCChartUtils$$$$getDirection$$($oldChart$$6_oldValue$$, $oldSIdx$$4$$, $oldGIdx$$3$$, $newChart$$6_newValue$$, $newSIdx$$4$$, $newGIdx$$3$$) {
  $oldChart$$6_oldValue$$ = D.$DvtChartDataUtils$$.getValue($oldChart$$6_oldValue$$, $oldSIdx$$4$$, $oldGIdx$$3$$);
  $newChart$$6_newValue$$ = D.$DvtChartDataUtils$$.getValue($newChart$$6_newValue$$, $newSIdx$$4$$, $newGIdx$$3$$);
  return $newChart$$6_newValue$$ == D.$JSCompiler_alias_NULL$$ || $oldChart$$6_oldValue$$ == D.$JSCompiler_alias_NULL$$ || $newChart$$6_newValue$$ == $oldChart$$6_oldValue$$ ? D.$DvtDCChartUtils$$.$DIR_NOCHANGE$ : $newChart$$6_newValue$$ > $oldChart$$6_oldValue$$ ? D.$DvtDCChartUtils$$.$DIR_UP$ : D.$DvtDCChartUtils$$.$DIR_DOWN$
};
D.$DvtDCChartUtils$$.$_drawIndicator$ = function $$DvtDCChartUtils$$$$_drawIndicator$$($context$$128_ret$$56$$, $bDown$$1_ptrCmds$$, $bHoriz$$4$$) {
  var $fc$$2$$ = window.fc;
  $bDown$$1_ptrCmds$$ = $bHoriz$$4$$ ? ((0,D.$DvtAgent$isRightToLeft$$)($context$$128_ret$$56$$) ? !$bDown$$1_ptrCmds$$ : $bDown$$1_ptrCmds$$) ? "M3.5,-5L3.5,5L-3.5,0L3.5,-5" : "M-3.5,-5L-3.5,5L3.5,0L-3.5,-5" : $bDown$$1_ptrCmds$$ ? "M-5,-3.5L5,-3.5L0,3.5L-5,-3.5Z" : "M-5,3.5L5,3.5L0,-3.5L-5,3.5Z";
  $context$$128_ret$$56$$ = new D.$DvtPath$$($context$$128_ret$$56$$, $bDown$$1_ptrCmds$$);
  $context$$128_ret$$56$$.$setSolidFill$($fc$$2$$);
  return $context$$128_ret$$56$$
};
D.$DvtDCFunnelSlice$$ = function $$DvtDCFunnelSlice$$$($peer$$13$$, $duration$$23$$) {
  this.Init($peer$$13$$, $duration$$23$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDCFunnelSlice$$, D.$DvtDCChartAbstract$$, "DvtDCFunnelSlice");
D.$DvtDCFunnelSlice$$.prototype.$animateUpdate$ = function $$DvtDCFunnelSlice$$$$$animateUpdate$$($handler$$17$$, $oldDC$$4$$) {
  var $obj$$103$$ = this.$_shape$, $nodePlayable$$11_startState$$2$$ = $oldDC$$4$$.$_shape$.$getAnimationParams$(), $endState$$4$$ = $obj$$103$$.$getAnimationParams$();
  D.$DvtArrayUtils$$.$equals$($nodePlayable$$11_startState$$2$$, $endState$$4$$) || ($obj$$103$$.$setAnimationParams$($nodePlayable$$11_startState$$2$$), $nodePlayable$$11_startState$$2$$ = new D.$DvtCustomAnimation$$($obj$$103$$.$_context$, this, this.$_updateDuration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$11_startState$$2$$.$_animator$, "typeNumberArray", $obj$$103$$, $obj$$103$$.$getAnimationParams$, $obj$$103$$.$setAnimationParams$, $endState$$4$$), this.$_indicator$ && $nodePlayable$$11_startState$$2$$.$setOnEnd$(this.$_onEndAnimation$, 
  this), $handler$$17$$.add($nodePlayable$$11_startState$$2$$, 1))
};
D.$DvtDCFunnelSlice$$.prototype.$animateInsert$ = function $$DvtDCFunnelSlice$$$$$animateInsert$$($handler$$18$$) {
  var $obj$$104$$ = this.$_shape$, $endState$$5$$ = $obj$$104$$.$getAnimationParams$(), $nodePlayable$$12_startState$$3$$ = $endState$$5$$.slice(0);
  $nodePlayable$$12_startState$$3$$[0] += $nodePlayable$$12_startState$$3$$[1] / 2;
  $nodePlayable$$12_startState$$3$$[1] = 0;
  $nodePlayable$$12_startState$$3$$[3] = 0;
  $obj$$104$$.$setAnimationParams$($nodePlayable$$12_startState$$3$$);
  $nodePlayable$$12_startState$$3$$ = new D.$DvtCustomAnimation$$($obj$$104$$.$_context$, this, this.$_insertDuration$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$12_startState$$3$$.$_animator$, "typeNumberArray", $obj$$104$$, $obj$$104$$.$getAnimationParams$, $obj$$104$$.$setAnimationParams$, $endState$$5$$);
  $handler$$18$$.add($nodePlayable$$12_startState$$3$$, 2)
};
D.$DvtDCFunnelSlice$$.prototype.$animateDelete$ = function $$DvtDCFunnelSlice$$$$$animateDelete$$($handler$$19$$, $delContainer$$5$$) {
  var $obj$$105$$ = this.$_shape$;
  $delContainer$$5$$.$addChild$($obj$$105$$);
  var $nodePlayable$$13_startState$$4$$ = $obj$$105$$.$getAnimationParams$(), $endState$$6$$ = $nodePlayable$$13_startState$$4$$.slice(0);
  $endState$$6$$[0] += $nodePlayable$$13_startState$$4$$[1] / 2;
  $endState$$6$$[1] = 0;
  $endState$$6$$[3] = 0;
  $nodePlayable$$13_startState$$4$$ = new D.$DvtCustomAnimation$$($obj$$105$$.$_context$, this, this.$_deleteDuration$);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($nodePlayable$$13_startState$$4$$.$_animator$, "typeNumberArray", $obj$$105$$, $obj$$105$$.$getAnimationParams$, $obj$$105$$.$setAnimationParams$, $endState$$6$$);
  $handler$$19$$.add($nodePlayable$$13_startState$$4$$, 0)
};
D.$DvtDCFunnelSlice$$.prototype.Init = function $$DvtDCFunnelSlice$$$$Init$($peer$$14$$, $duration$$24$$) {
  D.$DvtDCFunnelSlice$$.$superclass$.Init.call(this, $peer$$14$$, $duration$$24$$);
  this.$_animId$ += "/funnel"
};
D.$DvtChart$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtChart", D.$DvtChart$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChart$$, D.$DvtBaseComponent$$, "DvtChart");
D.$DvtChart$newInstance$$ = function $$DvtChart$newInstance$$$($context$$473$$, $callback$$104$$, $callbackObj$$74$$) {
  return new D.$DvtChartImpl$$($context$$473$$, $callback$$104$$, $callbackObj$$74$$)
};
D.$DvtChart$$.newInstance = D.$DvtChart$newInstance$$;
D.$DvtChart$$.getDefaults = function $$DvtChart$$$getDefaults$($skin$$7$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtChartDefaults$$, $skin$$7$$)
};
D.$DvtChart$$.prototype.Init = function $$DvtChart$$$$Init$($context$$474$$, $callback$$105$$, $callbackObj$$75$$) {
  D.$DvtChart$$.$superclass$.Init.call(this, $context$$474$$, $callback$$105$$, $callbackObj$$75$$);
  this.$Bundle$ = new D.$DvtChartBundle$$;
  this.$Defaults$ = new D.$DvtChartDefaults$$;
  this.$EventManager$ = new D.$DvtChartEventManager$$(this);
  this.$EventManager$.$addListeners$(this);
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$EventManager$, this.$CreateKeyboardHandler$(this.$EventManager$));
  this.setId("chart1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$_animation$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtChart$$.prototype.$SetOptions$ = function $$DvtChart$$$$$SetOptions$$($handler$$inline_6827_options$$228$$) {
  $handler$$inline_6827_options$$228$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($handler$$inline_6827_options$$228$$), "horizontalBar" == this.$Options$.type && (this.$Options$.type = "bar", this.$Options$.orientation = "horizontal"), D.$DvtChartDataUtils$$.$processDataObject$(this), "dim" == D.$DvtChartEventUtils$$.$getHoverBehavior$(this) ? ($handler$$inline_6827_options$$228$$ = new D.$DvtChartSeriesRolloverHandler$$(this, this.$EventManager$), this.$EventManager$.$_seriesRolloverHandler$ = 
  $handler$$inline_6827_options$$228$$) : this.$EventManager$.$_seriesRolloverHandler$ = D.$JSCompiler_alias_NULL$$, (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtChart$$.prototype.$render$ = function $$DvtChart$$$$$render$$($options$$229_paSpace$$, $container$$140_width$$129$$, $animationDuration$$3_height$$110$$) {
  var $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_6839$$ = D.$DvtChartStyleUtils$$.$getAnimationOnDataChange$(this), $oldChart$$8$$ = D.$JSCompiler_alias_NULL$$;
  this.$Options$ && "none" !== $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_6839$$ && ($oldChart$$8$$ = {options:this.$Options$, type:this.$getType$(), $seriesStyleArray$:this.$getSeriesStyleArray$(), $peers$:this.$getObjects$().slice(0), $getOptions$:(0,D.$JSCompiler_get$$)("options"), $getType$:(0,D.$JSCompiler_get$$)("type"), $getSeriesStyleArray$:(0,D.$JSCompiler_get$$)("$seriesStyleArray$"), $pieChart$:this.$pieChart$});
  this.$__cleanUp$();
  this.$SetOptions$($options$$229_paSpace$$);
  !(0,window.isNaN)($container$$140_width$$129$$) && !(0,window.isNaN)($animationDuration$$3_height$$110$$) && (this.$Width$ = $container$$140_width$$129$$, this.$Height$ = $animationDuration$$3_height$$110$$);
  $container$$140_width$$129$$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChild$($container$$140_width$$129$$);
  D.$DvtChartRenderer$$.$render$(this, $container$$140_width$$129$$, new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  this.$legend$ && "none" != D.$DvtChartEventUtils$$.$getHideAndShowBehavior$(this) && (0,D.$JSCompiler_StaticMethods_setKeyboardFocusArray$$)(this.$_context$, [this, this.$legend$]);
  this.$_animation$ && this.$_animation$.stop();
  var $animationOnDisplay$$5$$ = D.$DvtChartStyleUtils$$.$getAnimationOnDisplay$(this);
  $animationDuration$$3_height$$110$$ = D.$DvtChartStyleUtils$$.$getAnimationDuration$(this);
  var $bounds$$101$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$), $bBlackBoxUpdate$$1$$ = D.$JSCompiler_alias_FALSE$$;
  this.$_container$ ? "none" != $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_6839$$ && $options$$229_paSpace$$ && ((this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_context$, $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_6839$$, this.$_container$, $container$$140_width$$129$$, $bounds$$101$$, $animationDuration$$3_height$$110$$)) ? $bBlackBoxUpdate$$1$$ = D.$JSCompiler_alias_TRUE$$ : ($options$$229_paSpace$$ = this.$_plotAreaSpace$, 
  this.$_delContainer$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$(this, this.$_container$, new D.$DvtRectangle$$(0, 0, $options$$229_paSpace$$.$w$, $options$$229_paSpace$$.$h$)), this.$_animation$ = D.$DvtAnimOnDC$$.$createAnimation$($oldChart$$8$$, this, $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_6839$$, $animationDuration$$3_height$$110$$, this.$_delContainer$), 0 < this.$_delContainer$.$getNumChildren$() && (D.$DvtChartTypeUtils$$.$isFunnel$(this) ? this.$_funnelContainer$.$addChild$(this.$_delContainer$) : 
  this.$getPlotArea$().$addChild$(this.$_delContainer$)))) : "none" !== $animationOnDisplay$$5$$ && (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$_context$, $animationOnDisplay$$5$$, $container$$140_width$$129$$, $bounds$$101$$, $animationDuration$$3_height$$110$$), this.$_animation$ || (this.$_animation$ = D.$DvtAnimOnDisplay$$.$createAnimation$(this, $animationOnDisplay$$5$$, $animationDuration$$3_height$$110$$)));
  this.$_animation$ && (this.$_animation$.play(), this.$_animation$.$setOnEnd$(this.$_onAnimationEnd$, this));
  $bBlackBoxUpdate$$1$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && (this.removeChild(this.$_container$), this.$_container$.$destroy$(), this.$_container$ = D.$JSCompiler_alias_NULL$$);
  this.$_container$ = $container$$140_width$$129$$;
  (D.$DvtChartTypeUtils$$.$isPie$(this) || D.$DvtChartTypeUtils$$.$isFunnel$(this) || D.$DvtChartTypeUtils$$.$isPolar$(this) ? 0 : "on" === this.$Options$.dataCursor || "auto" === this.$Options$.dataCursor && (0,D.$DvtAgent$isTouchDevice$$)() && D.$DvtChartTypeUtils$$.$isLineArea$(this)) ? (this.$DataCursor$ = D.$DvtChartTypeUtils$$.$isHorizontal$(this) ? new D.$DvtDataCursor$$(this.$_context$, D.$JSCompiler_alias_TRUE$$) : new D.$DvtDataCursor$$(this.$_context$, D.$JSCompiler_alias_FALSE$$), $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_6839$$ = 
  this.$Options$.dataCursorBehavior, "auto" == $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_6839$$ && ($animationOnDataChange$$1_dataCursorBehavior_handler$$inline_6839$$ = D.$DvtChartTypeUtils$$.$isLineArea$(this) ? "smooth" : "snap"), "snap" == $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_6839$$ ? this.$DataCursor$.$_behavior$ = "SNAP" : "smooth" == $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_6839$$ && (this.$DataCursor$.$_behavior$ = "SMOOTH"), 
  this.$addChild$(this.$DataCursor$), $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_6839$$ = new D.$DvtChartDCEH$$(this), this.$EventManager$.$_dataCursorHandler$ = $animationOnDataChange$$1_dataCursorBehavior_handler$$inline_6839$$) : this.$EventManager$.$_dataCursorHandler$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtChart$$.prototype.render = D.$DvtChart$$.prototype.$render$;
D.$DvtChart$$.prototype.$destroy$ = function $$DvtChart$$$$$destroy$$() {
  this.$EventManager$ && (this.$EventManager$.$removeListeners$(this), this.$EventManager$.$destroy$(), this.$EventManager$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtChart$$.$superclass$.$destroy$.call(this)
};
D.$DvtChart$$.prototype.destroy = D.$DvtChart$$.prototype.$destroy$;
D.$DvtChart$$.prototype.$__cleanUp$ = function $$DvtChart$$$$$__cleanUp$$() {
  this.$DataCursor$ && (this.removeChild(this.$DataCursor$), this.$DataCursor$ = D.$JSCompiler_alias_NULL$$);
  var $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_6852$$ = this.$EventManager$;
  $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_6852$$.$hideTooltip$();
  $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_6852$$.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_6852$$.$_dataCursorHandler$)
};
D.$DvtChart$$.prototype.$_onAnimationEnd$ = function $$DvtChart$$$$$_onAnimationEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_delContainer$ && 0 < this.$_delContainer$.$getNumChildren$() && (D.$DvtChartTypeUtils$$.$isFunnel$(this) ? this.$_funnelContainer$.removeChild(this.$_delContainer$) : this.$getPlotArea$().removeChild(this.$_delContainer$));
  this.$_animation$ = this.$_delContainer$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtChart$$.prototype.$CreateKeyboardHandler$ = function $$DvtChart$$$$$CreateKeyboardHandler$$($manager$$18$$) {
  return new D.$DvtChartKeyboardHandler$$($manager$$18$$, this)
};
D.$DvtChart$$.prototype.$getAutomation$ = function $$DvtChart$$$$$getAutomation$$() {
  return new D.$DvtChartAutomation$$(this)
};
D.$DvtChart$$.prototype.getAutomation = D.$DvtChart$$.prototype.$getAutomation$;
D.$DvtChartConstants$$ = {};
(0,D.$goog$exportSymbol$$)("DvtChartConstants", D.$DvtChartConstants$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartConstants$$, D.$DvtObj$$, "DvtChartConstants");
D.$DvtChartConstants$$.$BACKGROUND$ = "background";
D.$DvtChartConstants$$.BACKGROUND = D.$DvtChartConstants$$.$BACKGROUND$;
D.$DvtChartConstants$$.$DATA_ITEM$ = "dataItem";
D.$DvtChartConstants$$.DATA_ITEM = D.$DvtChartConstants$$.$DATA_ITEM$;
D.$DvtChartConstants$$.$DATA_ITEM_OTHER$ = "dataItemOther";
D.$DvtChartConstants$$.DATA_ITEM_OTHER = D.$DvtChartConstants$$.$DATA_ITEM_OTHER$;
D.$DvtChartConstants$$.$FOOTNOTE$ = "footnote";
D.$DvtChartConstants$$.FOOTNOTE = D.$DvtChartConstants$$.$FOOTNOTE$;
D.$DvtChartConstants$$.$LEGEND$ = "legend";
D.$DvtChartConstants$$.LEGEND = D.$DvtChartConstants$$.$LEGEND$;
D.$DvtChartConstants$$.$LEGEND_ITEM$ = "legendItem";
D.$DvtChartConstants$$.LEGEND_ITEM = D.$DvtChartConstants$$.$LEGEND_ITEM$;
D.$DvtChartConstants$$.$LEGEND_TITLE$ = "legendTitle";
D.$DvtChartConstants$$.LEGEND_TITLE = D.$DvtChartConstants$$.$LEGEND_TITLE$;
D.$DvtChartConstants$$.$PLOT_AREA$ = "plotArea";
D.$DvtChartConstants$$.PLOT_AREA = D.$DvtChartConstants$$.$PLOT_AREA$;
D.$DvtChartConstants$$.$SERIES$ = "series";
D.$DvtChartConstants$$.SERIES = D.$DvtChartConstants$$.$SERIES$;
D.$DvtChartConstants$$.$SUBTITLE$ = "subtitle";
D.$DvtChartConstants$$.SUBTITLE = D.$DvtChartConstants$$.$SUBTITLE$;
D.$DvtChartConstants$$.$TITLE$ = "title";
D.$DvtChartConstants$$.TITLE = D.$DvtChartConstants$$.$TITLE$;
D.$DvtChartConstants$$.$X_AXIS_LABEL$ = "xAxisLabel";
D.$DvtChartConstants$$.X_AXIS_LABEL = D.$DvtChartConstants$$.$X_AXIS_LABEL$;
D.$DvtChartConstants$$.$X_AXIS_TITLE$ = "xAxisTitle";
D.$DvtChartConstants$$.X_AXIS_TITLE = D.$DvtChartConstants$$.$X_AXIS_TITLE$;
D.$DvtChartConstants$$.$Y_AXIS_LABEL$ = "yAxisLabel";
D.$DvtChartConstants$$.Y_AXIS_LABEL = D.$DvtChartConstants$$.$Y_AXIS_LABEL$;
D.$DvtChartConstants$$.$Y_AXIS_TITLE$ = "yAxisTitle";
D.$DvtChartConstants$$.Y_AXIS_TITLE = D.$DvtChartConstants$$.$Y_AXIS_TITLE$;
D.$DvtChartConstants$$.$Y2_AXIS_LABEL$ = "y2AxisLabel";
D.$DvtChartConstants$$.Y2_AXIS_LABEL = D.$DvtChartConstants$$.$Y2_AXIS_LABEL$;
D.$DvtChartConstants$$.$Y2_AXIS_TITLE$ = "y2AxisTitle";
D.$DvtChartConstants$$.Y2_AXIS_TITLE = D.$DvtChartConstants$$.$Y2_AXIS_TITLE$;
D.$DvtChartSelectionEvent$$ = function $$DvtChartSelectionEvent$$$($selection$$23$$, $xMin$$2$$, $xMax$$2$$, $startGroup$$2$$, $endGroup$$2$$, $yMin$$3$$, $yMax$$3$$, $y2Min$$, $y2Max$$) {
  D.$DvtChartSelectionEvent$$.$superclass$.Init.call(this, $selection$$23$$);
  this.$_xMin$ = $xMin$$2$$;
  this.$_xMax$ = $xMax$$2$$;
  this.$_startGroup$ = $startGroup$$2$$;
  this.$_endGroup$ = $endGroup$$2$$;
  this.$_yMin$ = $yMin$$3$$;
  this.$_yMax$ = $yMax$$3$$;
  this.$_y2Min$ = $y2Min$$;
  this.$_y2Max$ = $y2Max$$;
  this.$removedSet$ = this.$addedSet$ = D.$JSCompiler_alias_NULL$$
};
(0,D.$goog$exportSymbol$$)("DvtChartSelectionEvent", D.$DvtChartSelectionEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartSelectionEvent$$, D.$DvtSelectionEvent$$, "DvtChartSelectionEvent");
D.$DvtChartSelectionEvent$$.prototype.$getXMin$ = (0,D.$JSCompiler_get$$)("$_xMin$");
D.$DvtChartSelectionEvent$$.prototype.getXMin = D.$DvtChartSelectionEvent$$.prototype.$getXMin$;
D.$DvtChartSelectionEvent$$.prototype.$getXMax$ = (0,D.$JSCompiler_get$$)("$_xMax$");
D.$DvtChartSelectionEvent$$.prototype.getXMax = D.$DvtChartSelectionEvent$$.prototype.$getXMax$;
D.$DvtChartSelectionEvent$$.prototype.$getStartGroup$ = (0,D.$JSCompiler_get$$)("$_startGroup$");
D.$DvtChartSelectionEvent$$.prototype.getStartGroup = D.$DvtChartSelectionEvent$$.prototype.$getStartGroup$;
D.$DvtChartSelectionEvent$$.prototype.$getEndGroup$ = (0,D.$JSCompiler_get$$)("$_endGroup$");
D.$DvtChartSelectionEvent$$.prototype.getEndGroup = D.$DvtChartSelectionEvent$$.prototype.$getEndGroup$;
D.$DvtChartSelectionEvent$$.prototype.$getYMin$ = (0,D.$JSCompiler_get$$)("$_yMin$");
D.$DvtChartSelectionEvent$$.prototype.getYMin = D.$DvtChartSelectionEvent$$.prototype.$getYMin$;
D.$DvtChartSelectionEvent$$.prototype.$getYMax$ = (0,D.$JSCompiler_get$$)("$_yMax$");
D.$DvtChartSelectionEvent$$.prototype.getYMax = D.$DvtChartSelectionEvent$$.prototype.$getYMax$;
D.$DvtChartSelectionEvent$$.prototype.$getY2Min$ = (0,D.$JSCompiler_get$$)("$_y2Min$");
D.$DvtChartSelectionEvent$$.prototype.getY2Min = D.$DvtChartSelectionEvent$$.prototype.$getY2Min$;
D.$DvtChartSelectionEvent$$.prototype.$getY2Max$ = (0,D.$JSCompiler_get$$)("$_y2Max$");
D.$DvtChartSelectionEvent$$.prototype.getY2Max = D.$DvtChartSelectionEvent$$.prototype.$getY2Max$;
D.$DvtChartViewportChangeEvent$$ = function $$DvtChartViewportChangeEvent$$$($xMin$$1$$, $xMax$$1$$, $startGroup$$1$$, $endGroup$$1$$, $yMin$$2$$, $yMax$$2$$) {
  D.$DvtChartViewportChangeEvent$$.$superclass$.Init.call(this, "viewportChange");
  this.$_xMin$ = $xMin$$1$$;
  this.$_xMax$ = $xMax$$1$$;
  this.$_startGroup$ = $startGroup$$1$$;
  this.$_endGroup$ = $endGroup$$1$$;
  this.$_yMin$ = $yMin$$2$$;
  this.$_yMax$ = $yMax$$2$$
};
(0,D.$goog$exportSymbol$$)("DvtChartViewportChangeEvent", D.$DvtChartViewportChangeEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartViewportChangeEvent$$, D.$DvtBaseComponentEvent$$, "DvtChartViewportChangeEvent");
D.$DvtChartViewportChangeEvent$$.TYPE = "viewportChange";
D.$DvtChartViewportChangeEvent$$.prototype.$getXMin$ = (0,D.$JSCompiler_get$$)("$_xMin$");
D.$DvtChartViewportChangeEvent$$.prototype.getXMin = D.$DvtChartViewportChangeEvent$$.prototype.$getXMin$;
D.$DvtChartViewportChangeEvent$$.prototype.$getXMax$ = (0,D.$JSCompiler_get$$)("$_xMax$");
D.$DvtChartViewportChangeEvent$$.prototype.getXMax = D.$DvtChartViewportChangeEvent$$.prototype.$getXMax$;
D.$DvtChartViewportChangeEvent$$.prototype.$getStartGroup$ = (0,D.$JSCompiler_get$$)("$_startGroup$");
D.$DvtChartViewportChangeEvent$$.prototype.getStartGroup = D.$DvtChartViewportChangeEvent$$.prototype.$getStartGroup$;
D.$DvtChartViewportChangeEvent$$.prototype.$getEndGroup$ = (0,D.$JSCompiler_get$$)("$_endGroup$");
D.$DvtChartViewportChangeEvent$$.prototype.getEndGroup = D.$DvtChartViewportChangeEvent$$.prototype.$getEndGroup$;
D.$DvtChartViewportChangeEvent$$.prototype.$getYMin$ = (0,D.$JSCompiler_get$$)("$_yMin$");
D.$DvtChartViewportChangeEvent$$.prototype.getYMin = D.$DvtChartViewportChangeEvent$$.prototype.$getYMin$;
D.$DvtChartViewportChangeEvent$$.prototype.$getYMax$ = (0,D.$JSCompiler_get$$)("$_yMax$");
D.$DvtChartViewportChangeEvent$$.prototype.getYMax = D.$DvtChartViewportChangeEvent$$.prototype.$getYMax$;
D.$DvtChartImpl$$ = function $$DvtChartImpl$$$($context$$132$$, $callback$$67$$, $callbackObj$$40$$) {
  this.Init($context$$132$$, $callback$$67$$, $callbackObj$$40$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartImpl$$, D.$DvtChart$$, "DvtChartImpl");
D.$DvtChartImpl$$.prototype.Init = function $$DvtChartImpl$$$$Init$($context$$133$$, $callback$$68$$, $callbackObj$$41$$) {
  D.$DvtChartImpl$$.$superclass$.Init.call(this, $context$$133$$, $callback$$68$$, $callbackObj$$41$$);
  this.$pieChart$ = this.$dragButtons$ = this.$yScrollbar$ = this.$xScrollbar$ = this.$overview$ = this.$y2Axis$ = this.$yAxis$ = this.$xAxis$ = this.$legend$ = D.$JSCompiler_alias_NULL$$;
  this.$_peers$ = [];
  this.$_seriesStyleArray$ = [];
  this.$_numSelectedObjsInFront$ = this.$_numFrontObjs$ = 0
};
D.$DvtChartImpl$$.prototype.$SetOptions$ = function $$DvtChartImpl$$$$$SetOptions$$($options$$107_popupBehaviors_selectionMode$$7$$) {
  D.$DvtChartImpl$$.$superclass$.$SetOptions$.call(this, $options$$107_popupBehaviors_selectionMode$$7$$);
  $options$$107_popupBehaviors_selectionMode$$7$$ = this.$Options$.selection;
  this.$_selectionHandler$ = "single" == $options$$107_popupBehaviors_selectionMode$$7$$ ? new D.$DvtSelectionHandler$$("s") : "multiple" == $options$$107_popupBehaviors_selectionMode$$7$$ ? new D.$DvtSelectionHandler$$("m") : D.$JSCompiler_alias_NULL$$;
  this.$EventManager$.$setSelectionHandler$(this.$_selectionHandler$);
  if($options$$107_popupBehaviors_selectionMode$$7$$ = this.$Options$._spb) {
    this.$_popupBehaviors$ = {};
    for(var $stampId$$7$$ in $options$$107_popupBehaviors_selectionMode$$7$$) {
      for(var $popupBehaviorArray$$ = $options$$107_popupBehaviors_selectionMode$$7$$[$stampId$$7$$], $i$$303$$ = 0;$i$$303$$ < $popupBehaviorArray$$.length;$i$$303$$++) {
        this.$_popupBehaviors$[$stampId$$7$$] || (this.$_popupBehaviors$[$stampId$$7$$] = []);
        var $popupBehavior$$ = $popupBehaviorArray$$[$i$$303$$];
        this.$_popupBehaviors$[$stampId$$7$$].push(new D.$DvtShowPopupBehavior$$($popupBehavior$$.popupId, $popupBehavior$$.triggerType, $popupBehavior$$.alignId, $popupBehavior$$.align))
      }
    }
  }
};
D.$DvtChartImpl$$.prototype.filter = function $$DvtChartImpl$$$$filter$($category$$9$$, $type$$102$$) {
  D.$DvtChartEventUtils$$.$setVisibility$(this, $category$$9$$, "out" == $type$$102$$ ? "hidden" : "visible");
  var $JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_3355_chartFocus$$ = this.$EventManager$.$getFocus$(), $legendFocus_navigable$$inline_3356$$, $isShowingFocusEffect_isShowingFocusEffect$$inline_3357$$;
  this.$legend$ && ($legendFocus_navigable$$inline_3356$$ = this.$legend$.$_eventManager$.$getFocus$()) && ($isShowingFocusEffect_isShowingFocusEffect$$inline_3357$$ = $legendFocus_navigable$$inline_3356$$.$isShowingKeyboardFocusEffect$());
  this.$render$(this.$Options$);
  if($JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_3355_chartFocus$$) {
    for(var $i$$inline_3358_navigables$$2$$ = D.$DvtChartEventUtils$$.$getKeyboardNavigables$(this), $i$$304$$ = 0;$i$$304$$ < $i$$inline_3358_navigables$$2$$.length;$i$$304$$++) {
      var $id$$92$$ = $i$$inline_3358_navigables$$2$$[$i$$304$$].getId();
      if($id$$92$$ instanceof D.$DvtChartDataItem$$ && $id$$92$$.$equals$($JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_3355_chartFocus$$.getId())) {
        (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$EventManager$, $i$$inline_3358_navigables$$2$$[$i$$304$$]);
        break
      }
      (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$EventManager$, this.$EventManager$.$KeyboardHandler$.$getDefaultNavigable$($i$$inline_3358_navigables$$2$$))
    }
  }
  if($legendFocus_navigable$$inline_3356$$ && this.$legend$) {
    (0,D.$JSCompiler_StaticMethods_setKeyboardFocusArray$$)(this.$_context$, [this, this.$legend$]);
    (0,D.$JSCompiler_StaticMethods_nextKeyboardFocus$$)(this.$_context$);
    $JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_3355_chartFocus$$ = this.$legend$;
    for($i$$inline_3358_navigables$$2$$ = 0;$i$$inline_3358_navigables$$2$$ < $JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_3355_chartFocus$$.$_peers$.length;$i$$inline_3358_navigables$$2$$++) {
      if($JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_3355_chartFocus$$.$_peers$[$i$$inline_3358_navigables$$2$$].getId() == $legendFocus_navigable$$inline_3356$$.getId()) {
        (0,D.$JSCompiler_StaticMethods_setFocusObj$$)($JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_3355_chartFocus$$.$_eventManager$, $JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_3355_chartFocus$$.$_peers$[$i$$inline_3358_navigables$$2$$]);
        $isShowingFocusEffect_isShowingFocusEffect$$inline_3357$$ && $JSCompiler_StaticMethods_setKeyboardFocus$self$$inline_3355_chartFocus$$.$_peers$[$i$$inline_3358_navigables$$2$$].$showKeyboardFocusEffect$();
        break
      }
    }
  }
};
(0,D.$goog$exportSymbol$$)("DvtChartImpl.prototype.filter", D.$DvtChartImpl$$.prototype.filter);
D.$DvtChartImpl$$.prototype.$highlight$ = function $$DvtChartImpl$$$$$highlight$$($categories$$5$$) {
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$5$$, this.$getObjects$());
  this.$legend$ && this.$legend$.$highlight$($categories$$5$$);
  this.$pieChart$ && this.$pieChart$.$highlight$($categories$$5$$)
};
(0,D.$goog$exportSymbol$$)("DvtChartImpl.prototype.highlight", D.$DvtChartImpl$$.prototype.$highlight$);
D.$DvtChartImpl$$.prototype.$getEventManager$ = (0,D.$JSCompiler_get$$)("$EventManager$");
D.$DvtChartImpl$$.prototype.$processEvent$ = function $$DvtChartImpl$$$$$processEvent$$($event$$228$$, $source$$11$$) {
  var $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$ = $event$$228$$.$getType$();
  if($actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ || $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$) {
    this.filter($event$$228$$.$_category$, $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ ? "out" : "in")
  }else {
    if("categoryRollOver" == $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$ || "categoryRollOut" == $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$) {
      "dim" == D.$DvtChartEventUtils$$.$getHoverBehavior$(this) && ((0,D.$DvtCategoryRolloverHandler$processEvent$$)($event$$228$$, this.$getObjects$()), this.$_distributeToChildren$($event$$228$$, $source$$11$$))
    }else {
      if("selection" == $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$) {
        $event$$228$$ = this.$_processSelectionEvent$($event$$228$$)
      }else {
        if("dvtPanZoom" == $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$) {
          var $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$ = $event$$228$$, $actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$ = $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$.$getSubtype$(), $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$ = "dvtPanEndEvent" == $actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$ || 
          "dvtZoomEvent" == $actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$ || "dvtPinchEndEvent" == $actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$, $actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$ = "dvtPanStartEvent" == $actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$ || 
          "dvtPinchStartEvent" == $actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$;
          (0,D.$DvtAgent$isTouchDevice$$)() && ($actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$ && this.$_panZoomTarget$ != this.$_plotArea$) && (this.$_container$.removeChild(this.$_panZoomTarget$), this.$_panZoomTarget$ = this.$_plotArea$);
          D.$DvtChartEventUtils$$.$isLiveScroll$(this) ? ($bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$ = D.$DvtChartEventUtils$$.$getAxisBoundsByDelta$(this, $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$.$dxMin$, $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$.$dxMax$, $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$.$dyMin$, 
          $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$.$dyMax$), $actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$ || (this.$setViewport$($bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$, $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$), (0,D.$JSCompiler_StaticMethods_setScrollbarViewport$$)(this, 
          $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$))) : ($bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$ = D.$DvtChartEventUtils$$.$getAxisBoundsByDelta$(this, $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$.$dxMinTotal$, $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$.$dxMaxTotal$, 
          $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$.$dyMinTotal$, $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$.$dyMaxTotal$), (0,D.$JSCompiler_StaticMethods_setScrollbarViewport$$)(this, $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$), $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$ && this.$setViewport$($bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$, 
          $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$));
          $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$ ? (D.$DvtChartRenderer$$.$_setEventHandlers$(this), this.$_panZoomTarget$ != this.$_plotArea$ && (this.$_container$.removeChild(this.$_panZoomTarget$), this.$_panZoomTarget$ = D.$JSCompiler_alias_NULL$$), $event$$228$$ = D.$DvtChartTypeUtils$$.$isBLAC$(this) ? new D.$DvtChartViewportChangeEvent$$($bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$.$xMin$, 
          $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$.$xMax$, $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$.$startGroup$, $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$.$endGroup$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$) : new D.$DvtChartViewportChangeEvent$$($bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$.$xMin$, 
          $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$.$xMax$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$.$yMin$, $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$.$yMax$)) : $event$$228$$ = D.$JSCompiler_alias_NULL$$
        }else {
          if("dvtMarquee" == $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$) {
            $event$$228$$ = (0,D.$JSCompiler_StaticMethods__processMarqueeEvent$$)(this, $event$$228$$)
          }else {
            if("overview" == $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$) {
              if($actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$ = $event$$228$$.$getSubType$(), "dropCallback" != $actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$) {
                $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$ = $event$$228$$.$getParamValue$("newStartTime");
                $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$ = $event$$228$$.$getParamValue$("newEndTime");
                $actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$ = "scrollTime" == $actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$ || "scrollEnd" == $actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$ || "rangeChange" == $actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$;
                if(D.$DvtChartEventUtils$$.$isLiveScroll$(this) || $actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$) {
                  $source$$11$$ == this.$yScrollbar$ ? this.$setViewport$({$yMin$:$actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$, $yMax$:$bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$}, $actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$) : this.$setViewport$({$xMin$:$actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$, 
                  $xMax$:$bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$}, $actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$)
                }
                $actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$ ? $source$$11$$ == this.$yScrollbar$ ? $event$$228$$ = new D.$DvtChartViewportChangeEvent$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$, $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$) : 
                ($actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$ = D.$DvtChartEventUtils$$.$getAxisStartEndGroup$(this.$xAxis$, $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$, $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$), $event$$228$$ = new D.$DvtChartViewportChangeEvent$$($actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$, 
                $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$, $actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$.$startGroup$, $actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$.$endGroup$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$)) : $event$$228$$ = D.$JSCompiler_alias_NULL$$
              }else {
                $event$$228$$ = D.$JSCompiler_alias_VOID$$
              }
            }else {
              "showPopup" == $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$ ? ($actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$ = $event$$228$$, "mouseHover" != $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$.triggerType && (this.$isSelectionSupported$() && 0 < this.$getSelectionHandler$().$_selection$.length) && ($bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$ = 
              D.$DvtChartEventUtils$$.$processIds$(this, (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)(this.$getSelectionHandler$())), $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$ = new D.$DvtShowPopupEvent$$($actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$.$_showPopupBehavior$, $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$.$_launcherBounds$, $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$.$_launcherId$), 
              (0,D.$JSCompiler_StaticMethods_addParam$$)($actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$, "clientRowKey", $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$)), $event$$228$$ = $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$) : $event$$228$$ instanceof D.$DvtComponentUIEvent$$ && ($event$$228$$ = (0,D.$JSCompiler_StaticMethods__processComponentUIEvent$$)(this, 
              $event$$228$$, $source$$11$$))
            }
          }
        }
      }
    }
  }
  if($event$$228$$ instanceof D.$DvtChartSelectionEvent$$) {
    var $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$ = this.$getOptions$(), $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$ = $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$.selectedItems, $newItems_removedSet$$ = D.$DvtChartDataUtils$$.$getCurrentSelection$(this);
    $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$.selectedItems = $newItems_removedSet$$;
    var $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$ = $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$ ? $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$ : [], $newItems_removedSet$$ = $newItems_removedSet$$ ? $newItems_removedSet$$ : [], $newIndex_oldIndex$$, $oldItemId_oldSet$$ = {};
    for($newIndex_oldIndex$$ = 0;$newIndex_oldIndex$$ < $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$.length;$newIndex_oldIndex$$++) {
      $oldItemId_oldSet$$[$actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$[$newIndex_oldIndex$$].id] = D.$JSCompiler_alias_TRUE$$
    }
    $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$ = {};
    for($newIndex_oldIndex$$ = 0;$newIndex_oldIndex$$ < $newItems_removedSet$$.length;$newIndex_oldIndex$$++) {
      $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$[$newItems_removedSet$$[$newIndex_oldIndex$$].id] = D.$JSCompiler_alias_TRUE$$
    }
    $actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$ = {};
    for($newIndex_oldIndex$$ = 0;$newIndex_oldIndex$$ < $newItems_removedSet$$.length;$newIndex_oldIndex$$++) {
      var $newItemId$$ = $newItems_removedSet$$[$newIndex_oldIndex$$].id;
      $oldItemId_oldSet$$[$newItemId$$] || ($actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$[$newItemId$$] = D.$JSCompiler_alias_TRUE$$)
    }
    $newItems_removedSet$$ = {};
    for($newIndex_oldIndex$$ = 0;$newIndex_oldIndex$$ < $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$.length;$newIndex_oldIndex$$++) {
      $oldItemId_oldSet$$ = $actionDone$$inline_3363_event$$inline_3377_oldItems_start$$inline_3371_type$$103$$[$newIndex_oldIndex$$].id, $bounds$$inline_3365_end$$inline_3372_event$$inline_3361_newSet_options$$108_selection$$inline_3378$$[$oldItemId_oldSet$$] || ($newItems_removedSet$$[$oldItemId_oldSet$$] = D.$JSCompiler_alias_TRUE$$)
    }
    $event$$228$$.addedSet = $actionDone$$inline_3373_actionStart$$inline_3364_addedSet_startEndGroup$$inline_3374_subtype$$inline_3362_subtype$$inline_3370$$;
    $event$$228$$.removedSet = $newItems_removedSet$$
  }
  $event$$228$$ && this.$__dispatchEvent$($event$$228$$)
};
D.$DvtChartImpl$$.prototype.$_processSelectionEvent$ = function $$DvtChartImpl$$$$$_processSelectionEvent$$($event$$229_selection$$16$$) {
  $event$$229_selection$$16$$ = D.$DvtChartEventUtils$$.$processIds$(this, $event$$229_selection$$16$$.getSelection());
  if(this.$overview$) {
    var $ovChart$$ = this.$overview$.$_chart$;
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($ovChart$$.$getSelectionHandler$(), $event$$229_selection$$16$$, $ovChart$$.$getObjects$())
  }
  return new D.$DvtChartSelectionEvent$$($event$$229_selection$$16$$)
};
D.$JSCompiler_StaticMethods__processMarqueeEvent$$ = function $$JSCompiler_StaticMethods__processMarqueeEvent$$$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$231$$) {
  var $selection$$17_subtype$$4$$ = $event$$231$$.$getSubtype$(), $bounds$$33_em_ovChart$$1_selectionHandler$$1$$ = $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$EventManager$;
  D.$DvtChartEventUtils$$.$adjustBounds$($event$$231$$);
  if("select" == $bounds$$33_em_ovChart$$1_selectionHandler$$1$$.$_dragMode$) {
    $bounds$$33_em_ovChart$$1_selectionHandler$$1$$ = $bounds$$33_em_ovChart$$1_selectionHandler$$1$$.$getSelectionHandler$();
    if("dvtMarqueeStartEvent" == $selection$$17_subtype$$4$$) {
      $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$_initSelection$ = $event$$231$$.ctrlKey ? (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($bounds$$33_em_ovChart$$1_selectionHandler$$1$$) : []
    }else {
      var $targets$$3$$ = D.$DvtChartEventUtils$$.$getBoundedObjects$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$231$$);
      (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($bounds$$33_em_ovChart$$1_selectionHandler$$1$$, $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$_initSelection$, $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$getObjects$());
      for(var $target$$inline_3383$$, $i$$inline_3384$$ = 0;$i$$inline_3384$$ < $targets$$3$$.length;$i$$inline_3384$$++) {
        $target$$inline_3383$$ = $targets$$3$$[$i$$inline_3384$$], (!$target$$inline_3383$$ || !$target$$inline_3383$$.$isUnrelatedToSelection$) && (0,D.$JSCompiler_StaticMethods__addToSelection$$)($bounds$$33_em_ovChart$$1_selectionHandler$$1$$, $target$$inline_3383$$, D.$JSCompiler_alias_TRUE$$)
      }
    }
    if("dvtMarqueeEndEvent" == $selection$$17_subtype$$4$$) {
      return $selection$$17_subtype$$4$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($bounds$$33_em_ovChart$$1_selectionHandler$$1$$), $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$overview$ && ($bounds$$33_em_ovChart$$1_selectionHandler$$1$$ = $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$overview$.$_chart$, (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($bounds$$33_em_ovChart$$1_selectionHandler$$1$$.$getSelectionHandler$(), $selection$$17_subtype$$4$$, $bounds$$33_em_ovChart$$1_selectionHandler$$1$$.$getObjects$())), 
      $bounds$$33_em_ovChart$$1_selectionHandler$$1$$ = D.$DvtChartEventUtils$$.$getAxisBounds$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$231$$, D.$JSCompiler_alias_FALSE$$), new D.$DvtChartSelectionEvent$$($selection$$17_subtype$$4$$, $bounds$$33_em_ovChart$$1_selectionHandler$$1$$.$xMin$, $bounds$$33_em_ovChart$$1_selectionHandler$$1$$.$xMax$, $bounds$$33_em_ovChart$$1_selectionHandler$$1$$.$startGroup$, $bounds$$33_em_ovChart$$1_selectionHandler$$1$$.$endGroup$, $bounds$$33_em_ovChart$$1_selectionHandler$$1$$.$yMin$, 
      $bounds$$33_em_ovChart$$1_selectionHandler$$1$$.$yMax$, $bounds$$33_em_ovChart$$1_selectionHandler$$1$$.$y2Min$, $bounds$$33_em_ovChart$$1_selectionHandler$$1$$.$y2Max$)
    }
  }else {
    if("zoom" == $bounds$$33_em_ovChart$$1_selectionHandler$$1$$.$_dragMode$) {
      if("dvtMarqueeEndEvent" != $selection$$17_subtype$$4$$) {
        return D.$JSCompiler_alias_NULL$$
      }
      $bounds$$33_em_ovChart$$1_selectionHandler$$1$$ = D.$DvtChartEventUtils$$.$getAxisBounds$($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $event$$231$$, D.$JSCompiler_alias_TRUE$$);
      $JSCompiler_StaticMethods__processMarqueeEvent$self$$.$setViewport$($bounds$$33_em_ovChart$$1_selectionHandler$$1$$, D.$JSCompiler_alias_TRUE$$);
      (0,D.$JSCompiler_StaticMethods_setScrollbarViewport$$)($JSCompiler_StaticMethods__processMarqueeEvent$self$$, $bounds$$33_em_ovChart$$1_selectionHandler$$1$$);
      D.$DvtChartRenderer$$.$_setEventHandlers$($JSCompiler_StaticMethods__processMarqueeEvent$self$$);
      return D.$DvtChartTypeUtils$$.$isBLAC$($JSCompiler_StaticMethods__processMarqueeEvent$self$$) ? new D.$DvtChartViewportChangeEvent$$($bounds$$33_em_ovChart$$1_selectionHandler$$1$$.$xMin$, $bounds$$33_em_ovChart$$1_selectionHandler$$1$$.$xMax$, $bounds$$33_em_ovChart$$1_selectionHandler$$1$$.$startGroup$, $bounds$$33_em_ovChart$$1_selectionHandler$$1$$.$endGroup$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$) : new D.$DvtChartViewportChangeEvent$$($bounds$$33_em_ovChart$$1_selectionHandler$$1$$.$xMin$, 
      $bounds$$33_em_ovChart$$1_selectionHandler$$1$$.$xMax$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $bounds$$33_em_ovChart$$1_selectionHandler$$1$$.$yMin$, $bounds$$33_em_ovChart$$1_selectionHandler$$1$$.$yMax$)
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__processComponentUIEvent$$ = function $$JSCompiler_StaticMethods__processComponentUIEvent$$$($JSCompiler_StaticMethods__processComponentUIEvent$self$$, $event$$234$$, $source$$13$$) {
  var $params$$19$$ = $event$$234$$.params, $chartObjType$$ = $params$$19$$.type;
  return $source$$13$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$legend$ ? ($chartObjType$$ == D.$DvtLegendConstants$$.$LEGEND_ITEM$ ? $chartObjType$$ = D.$DvtChartConstants$$.$LEGEND_ITEM$ : $chartObjType$$ == D.$DvtLegendConstants$$.$TITLE$ ? $chartObjType$$ = D.$DvtChartConstants$$.$LEGEND_TITLE$ : $chartObjType$$ == D.$DvtLegendConstants$$.$BACKGROUND$ && ($chartObjType$$ = D.$DvtChartConstants$$.$LEGEND$), new D.$DvtComponentUIEvent$$($event$$234$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, 
  D.$JSCompiler_alias_NULL$$, $params$$19$$.id))) : $source$$13$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$xAxis$ ? ($chartObjType$$ == D.$DvtAxisConstants$$.$TICK_LABEL$ ? $chartObjType$$ = D.$DvtChartConstants$$.$X_AXIS_LABEL$ : $chartObjType$$ == D.$DvtAxisConstants$$.$TITLE$ && ($chartObjType$$ = D.$DvtChartConstants$$.$X_AXIS_TITLE$), new D.$DvtComponentUIEvent$$($event$$234$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, $params$$19$$.id))) : 
  $source$$13$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$yAxis$ ? ($chartObjType$$ == D.$DvtAxisConstants$$.$TICK_LABEL$ ? $chartObjType$$ = D.$DvtChartConstants$$.$Y_AXIS_LABEL$ : $chartObjType$$ == D.$DvtAxisConstants$$.$TITLE$ && ($chartObjType$$ = D.$DvtChartConstants$$.$Y_AXIS_TITLE$), new D.$DvtComponentUIEvent$$($event$$234$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, $params$$19$$.id))) : $source$$13$$ === $JSCompiler_StaticMethods__processComponentUIEvent$self$$.$y2Axis$ ? 
  ($chartObjType$$ == D.$DvtAxisConstants$$.$TICK_LABEL$ ? $chartObjType$$ = D.$DvtChartConstants$$.$Y2_AXIS_LABEL$ : $chartObjType$$ == D.$DvtAxisConstants$$.$TITLE$ && ($chartObjType$$ = D.$DvtChartConstants$$.$Y2_AXIS_TITLE$), new D.$DvtComponentUIEvent$$($event$$234$$.$getType$(), (0,D.$DvtChartEventManager$getUIEventParams$$)($chartObjType$$, $params$$19$$.id))) : $event$$234$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartImpl$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_distributeToChildren$ = function $$JSCompiler_prototypeAlias$$$$_distributeToChildren$$($event$$235$$, $source$$14$$) {
  this.$legend$ && this.$legend$ != $source$$14$$ && this.$legend$.$processEvent$($event$$235$$, $source$$14$$);
  this.$pieChart$ && this.$pieChart$ != $source$$14$$ && this.$pieChart$.$processEvent$($event$$235$$, $source$$14$$)
};
D.$JSCompiler_prototypeAlias$$.$__cleanUp$ = function $$JSCompiler_prototypeAlias$$$$__cleanUp$$() {
  D.$DvtChartImpl$$.$superclass$.$__cleanUp$.call(this);
  this.$_peers$.length = 0;
  this.$yScrollbar$ = this.$xScrollbar$ = D.$JSCompiler_alias_NULL$$;
  (0,D.$JSCompiler_StaticMethods_hideDragButtons$$)(this);
  this.$_areaContainer$ = this.$dragButtons$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__cleanUpAxisAndPlotArea$ = function $$JSCompiler_prototypeAlias$$$$__cleanUpAxisAndPlotArea$$() {
  var $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_3386$$ = this.$EventManager$;
  $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_3386$$.$hideTooltip$();
  $JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_3386$$.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_hideHoverFeedback$self$$inline_3386$$.$_dataCursorHandler$);
  this.$_peers$.length = 0;
  this.$_container$.removeChild(this.$xAxis$);
  this.$_container$.removeChild(this.$yAxis$);
  this.$_container$.removeChild(this.$y2Axis$);
  this.$_plotArea$ && this.$_plotArea$ == this.$_panZoomTarget$ ? this.$_plotArea$.$setVisible$(D.$JSCompiler_alias_FALSE$$) : this.$_container$.removeChild(this.$_plotArea$)
};
D.$JSCompiler_prototypeAlias$$.$registerObject$ = function $$JSCompiler_prototypeAlias$$$$registerObject$$($peer$$18$$) {
  this.$_peers$.push($peer$$18$$)
};
D.$JSCompiler_prototypeAlias$$.$getObjects$ = (0,D.$JSCompiler_get$$)("$_peers$");
D.$JSCompiler_prototypeAlias$$.$getOptions$ = function $$JSCompiler_prototypeAlias$$$$getOptions$$() {
  this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  return this.$Options$
};
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$Width$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$Height$");
D.$JSCompiler_prototypeAlias$$.$getBundle$ = (0,D.$JSCompiler_get$$)("$Bundle$");
D.$JSCompiler_prototypeAlias$$.$getSeriesStyleArray$ = (0,D.$JSCompiler_get$$)("$_seriesStyleArray$");
D.$JSCompiler_prototypeAlias$$.$getPlotArea$ = (0,D.$JSCompiler_get$$)("$_plotArea$");
D.$JSCompiler_prototypeAlias$$.$getType$ = function $$JSCompiler_prototypeAlias$$$$getType$$() {
  return this.$getOptions$().type
};
D.$JSCompiler_prototypeAlias$$.$getGapRatio$ = function $$JSCompiler_prototypeAlias$$$$getGapRatio$$() {
  var $options$$109_wRatio$$ = this.$getOptions$();
  if($options$$109_wRatio$$.layout.gapRatio !== D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)($options$$109_wRatio$$.layout.gapRatio)) {
    return $options$$109_wRatio$$.layout.gapRatio
  }
  var $options$$109_wRatio$$ = window.Math.min(this.$Width$ / 400, 1), $hRatio$$ = window.Math.min(this.$Height$ / 300, 1);
  return window.Math.min($options$$109_wRatio$$, $hRatio$$)
};
D.$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = (0,D.$JSCompiler_get$$)("$_selectionHandler$");
D.$JSCompiler_prototypeAlias$$.$isSelectionSupported$ = function $$JSCompiler_prototypeAlias$$$$isSelectionSupported$$() {
  return this.$_selectionHandler$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$($stampId$$8$$) {
  return this.$_popupBehaviors$ ? this.$_popupBehaviors$[$stampId$$8$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$bringToFrontOfSelection$ = function $$JSCompiler_prototypeAlias$$$$bringToFrontOfSelection$$($detObj$$) {
  var $par$$1$$ = $detObj$$.getParent();
  if($par$$1$$) {
    var $parentChildCount$$ = $par$$1$$.$getNumChildren$();
    1 < $parentChildCount$$ - this.$_numFrontObjs$ && ($par$$1$$.removeChild($detObj$$), $par$$1$$.$addChildAt$($detObj$$, $parentChildCount$$ - this.$_numFrontObjs$ - 1))
  }
  (!$detObj$$.$isSelected$() || !$detObj$$.$isHoverEffectShown$()) && this.$_numSelectedObjsInFront$++
};
D.$JSCompiler_prototypeAlias$$.$pushToBackOfSelection$ = function $$JSCompiler_prototypeAlias$$$$pushToBackOfSelection$$($detObj$$1$$) {
  0 < this.$_numSelectedObjsInFront$ && this.$_numSelectedObjsInFront$--;
  var $par$$2$$ = $detObj$$1$$.getParent();
  if($par$$2$$) {
    var $newIndex$$2$$ = $par$$2$$.$getNumChildren$() - this.$_numFrontObjs$ - 1 - this.$_numSelectedObjsInFront$;
    0 <= $newIndex$$2$$ && ($par$$2$$.removeChild($detObj$$1$$), $par$$2$$.$addChildAt$($detObj$$1$$, $newIndex$$2$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$setViewport$ = function $$JSCompiler_prototypeAlias$$$$setViewport$$($bounds$$34$$, $actionDone$$2$$) {
  D.$DvtChartTypeUtils$$.$isScrollSupported$(this) && ($bounds$$34$$.$xMax$ != D.$JSCompiler_alias_NULL$$ && (this.$Options$.xAxis.viewportMax = $bounds$$34$$.$xMax$), $bounds$$34$$.$xMin$ != D.$JSCompiler_alias_NULL$$ && (this.$Options$.xAxis.viewportMin = $bounds$$34$$.$xMin$), D.$DvtChartTypeUtils$$.$isBLAC$(this) ? (this.$Options$.xAxis.viewportStartGroup = D.$JSCompiler_alias_NULL$$, this.$Options$.xAxis.viewportEndGroup = D.$JSCompiler_alias_NULL$$) : ($bounds$$34$$.$yMax$ != D.$JSCompiler_alias_NULL$$ && 
  (this.$Options$.yAxis.viewportMax = $bounds$$34$$.$yMax$), $bounds$$34$$.$yMin$ != D.$JSCompiler_alias_NULL$$ && (this.$Options$.yAxis.viewportMin = $bounds$$34$$.$yMin$)), this.$Options$._duringAnimation = !$actionDone$$2$$, D.$DvtChartRenderer$$.$rerenderAxisAndPlotArea$(this, this.$_container$))
};
D.$JSCompiler_StaticMethods_setScrollbarViewport$$ = function $$JSCompiler_StaticMethods_setScrollbarViewport$$$($JSCompiler_StaticMethods_setScrollbarViewport$self$$, $bounds$$35$$) {
  $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$overview$ && $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$overview$.$setViewportRange$($bounds$$35$$.$xMin$, $bounds$$35$$.$xMax$);
  $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$xScrollbar$ && $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$xScrollbar$.$setViewportRange$($bounds$$35$$.$xMin$, $bounds$$35$$.$xMax$);
  $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$yScrollbar$ && $JSCompiler_StaticMethods_setScrollbarViewport$self$$.$yScrollbar$.$setViewportRange$($bounds$$35$$.$yMin$, $bounds$$35$$.$yMax$)
};
D.$DvtChartImpl$$.prototype.$getRadius$ = (0,D.$JSCompiler_get$$)("$_radius$");
D.$JSCompiler_StaticMethods_hideDragButtons$$ = function $$JSCompiler_StaticMethods_hideDragButtons$$$($JSCompiler_StaticMethods_hideDragButtons$self$$) {
  $JSCompiler_StaticMethods_hideDragButtons$self$$.$dragButtons$ && $JSCompiler_StaticMethods_hideDragButtons$self$$.$dragButtons$.$setVisible$(D.$JSCompiler_alias_FALSE$$)
};
D.$DvtChartAutomation$$ = function $$DvtChartAutomation$$$($dvtComponent$$4$$) {
  this.$_chart$ = $dvtComponent$$4$$;
  this.$_options$ = this.$_chart$.$getOptions$();
  this.$_legend$ = this.$_chart$.$legend$;
  this.$_axis$ = this.$_chart$.$xAxis$;
  this.$_legendAutomation$ = this.$_legend$ ? this.$_legend$.$getAutomation$() : D.$JSCompiler_alias_NULL$$;
  this.$_axisAutomation$ = this.$_axis$ ? this.$_axis$.$getAutomation$() : D.$JSCompiler_alias_NULL$$
};
(0,D.$goog$exportSymbol$$)("DvtChartAutomation", D.$DvtChartAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartAutomation$$, D.$DvtAutomation$$, "DvtChartAutomation");
D.$DvtChartAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtChartAutomation$$$$$GetSubIdForDomElement$$($JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$) {
  if($JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$.$isDescendantOf$(this.$_legend$)) {
    $JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$ = this.$_legendAutomation$.$GetSubIdForDomElement$($JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$);
    a: {
      if($JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$ = (0,D.$JSCompiler_StaticMethods_getLegendItem$$)(this.$_legendAutomation$, this.$_legend$.$__getOptions$(), $JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$)) {
        for(var $groupIndex$$45_logicalObj$$6_s$$inline_3675$$ = 0;$groupIndex$$45_logicalObj$$6_s$$inline_3675$$ < this.$_options$.series.length;$groupIndex$$45_logicalObj$$6_s$$inline_3675$$++) {
          if(this.$_options$.series[$groupIndex$$45_logicalObj$$6_s$$inline_3675$$].name == $JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$.text) {
            $JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$ = "series[" + $groupIndex$$45_logicalObj$$6_s$$inline_3675$$ + "]";
            break a
          }
        }
      }
      $JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$ = D.$JSCompiler_alias_NULL$$
    }
    return $JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$
  }
  if($JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$.$isDescendantOf$(this.$_axis$)) {
    return $JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$ = this.$_axisAutomation$.$GetSubIdForDomElement$($JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$), ($JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$ = $JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$.substring($JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$.indexOf("[") + 
    1, $JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$.indexOf("]"))) ? "group[" + $JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$ + "]" : D.$JSCompiler_alias_NULL$$
  }
  if("pie" == this.$_options$.type) {
    if($groupIndex$$45_logicalObj$$6_s$$inline_3675$$ = $JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$.$_logicalObjects$[0].logicalObject) {
      return"dataItem[" + $groupIndex$$45_logicalObj$$6_s$$inline_3675$$.$getSeriesIndex$() + "]"
    }
  }else {
    if($groupIndex$$45_logicalObj$$6_s$$inline_3675$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_chart$.$getEventManager$(), $JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$), $groupIndex$$45_logicalObj$$6_s$$inline_3675$$ instanceof D.$DvtChartObjPeer$$) {
      $JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$ = $groupIndex$$45_logicalObj$$6_s$$inline_3675$$.$getSeriesIndex$();
      $groupIndex$$45_logicalObj$$6_s$$inline_3675$$ = $groupIndex$$45_logicalObj$$6_s$$inline_3675$$.$getGroupIndex$();
      if($JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$ != D.$JSCompiler_alias_NULL$$ && 0 <= $groupIndex$$45_logicalObj$$6_s$$inline_3675$$ && "funnel" != this.$_options$.type) {
        return"dataItem[" + $JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$ + "][" + $groupIndex$$45_logicalObj$$6_s$$inline_3675$$ + "]"
      }
      if($JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$ != D.$JSCompiler_alias_NULL$$ && $groupIndex$$45_logicalObj$$6_s$$inline_3675$$ == D.$DvtFunnelRenderer$$.$_GROUP_INDEX$ && "funnel" == this.$_options$.type) {
        return"dataItem[" + $JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$ + "]"
      }
      if($JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$ != D.$JSCompiler_alias_NULL$$ && ($groupIndex$$45_logicalObj$$6_s$$inline_3675$$ == D.$JSCompiler_alias_NULL$$ || 0 > $groupIndex$$45_logicalObj$$6_s$$inline_3675$$)) {
        return"series[" + $JSCompiler_inline_result$$334_axisSubId_displayable$$31_index$$inline_3678_legendItem$$inline_3674_legendSubId_seriesIndex$$81$$ + "]"
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtChartAutomation$$$$$getDomElementForSubId$$($logicalObj$$7_subId$$9$$) {
  var $firstIndex$$1_openParen1$$ = $logicalObj$$7_subId$$9$$.indexOf("["), $closeParen1_openParen2$$ = $logicalObj$$7_subId$$9$$.indexOf("]");
  if(0 < $firstIndex$$1_openParen1$$ && 0 < $closeParen1_openParen2$$) {
    var $closeParen2_objType$$1_pieSlice$$ = $logicalObj$$7_subId$$9$$.substring(0, $firstIndex$$1_openParen1$$);
    if("group" == $closeParen2_objType$$1_pieSlice$$) {
      return this.$_axisAutomation$.$getDomElementForSubId$($logicalObj$$7_subId$$9$$)
    }
    if("series" == $closeParen2_objType$$1_pieSlice$$) {
      return $logicalObj$$7_subId$$9$$ = "section" + (0,D.$JSCompiler_StaticMethods_getIndicesFromSeries$$)(this.$_legendAutomation$, this.$_options$.series[$logicalObj$$7_subId$$9$$.substring($logicalObj$$7_subId$$9$$.indexOf("[") + 1, $logicalObj$$7_subId$$9$$.indexOf("]"))], this.$_legend$.$__getOptions$()), this.$_legendAutomation$.$getDomElementForSubId$($logicalObj$$7_subId$$9$$)
    }
    $firstIndex$$1_openParen1$$ = $logicalObj$$7_subId$$9$$.substring($firstIndex$$1_openParen1$$ + 1, $closeParen1_openParen2$$);
    if("pie" == this.$_options$.type && ($closeParen2_objType$$1_pieSlice$$ = 0 <= $firstIndex$$1_openParen1$$ && $firstIndex$$1_openParen1$$ < this.$_chart$.$pieChart$.$_slices$.length ? (0,D.$JSCompiler_StaticMethods_getTopDisplayable$$)(this.$_chart$.$pieChart$.$_slices$[$firstIndex$$1_openParen1$$]) : D.$JSCompiler_alias_NULL$$)) {
      return $closeParen2_objType$$1_pieSlice$$.$getElem$()
    }
    if("funnel" == this.$_options$.type) {
      var $secondIndex$$1$$ = D.$DvtFunnelRenderer$$.$_GROUP_INDEX$
    }else {
      $logicalObj$$7_subId$$9$$ = $logicalObj$$7_subId$$9$$.substring($closeParen1_openParen2$$ + 1), $closeParen1_openParen2$$ = $logicalObj$$7_subId$$9$$.indexOf("["), $closeParen2_objType$$1_pieSlice$$ = $logicalObj$$7_subId$$9$$.indexOf("]"), 0 <= $closeParen1_openParen2$$ && 0 <= $closeParen2_objType$$1_pieSlice$$ && ($secondIndex$$1$$ = $logicalObj$$7_subId$$9$$.substring($closeParen1_openParen2$$ + 1, $closeParen2_objType$$1_pieSlice$$))
    }
    if($logicalObj$$7_subId$$9$$ = this.$_getChartObjPeer$($firstIndex$$1_openParen1$$, $secondIndex$$1$$)) {
      return $logicalObj$$7_subId$$9$$.$getDisplayables$()[0].$getElem$()
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.getDomElementForSubId = D.$DvtChartAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtChartAutomation$$.prototype.$_getChartObjPeer$ = function $$DvtChartAutomation$$$$$_getChartObjPeer$$($firstIndex$$2$$, $secondIndex$$2$$) {
  for(var $peers$$5$$ = this.$_chart$.$getObjects$(), $i$$344$$ = 0;$i$$344$$ < $peers$$5$$.length;$i$$344$$++) {
    var $seriesIndex$$82$$ = $peers$$5$$[$i$$344$$].$getSeriesIndex$(), $groupIndex$$46$$ = $peers$$5$$[$i$$344$$].$getGroupIndex$();
    if($seriesIndex$$82$$ == $firstIndex$$2$$ && $groupIndex$$46$$ == $secondIndex$$2$$) {
      return $peers$$5$$[$i$$344$$]
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.$getDataItem$ = function $$DvtChartAutomation$$$$$getDataItem$$($firstIndex$$3$$, $secondIndex$$3$$) {
  if("pie" == this.$_options$.type || "funnel" == this.$_options$.type) {
    $secondIndex$$3$$ = 0
  }
  var $dataItem$$28$$ = D.$DvtChartDataUtils$$.$getDataItem$(this.$_chart$, $firstIndex$$3$$, $secondIndex$$3$$);
  return{borderColor:D.$DvtChartStyleUtils$$.$getBorderColor$(this.$_chart$, $firstIndex$$3$$, $secondIndex$$3$$), color:D.$DvtChartStyleUtils$$.$getColor$(this.$_chart$, $firstIndex$$3$$, $secondIndex$$3$$), label:D.$DvtChartDataUtils$$.$getDataLabel$(this.$_chart$, $firstIndex$$3$$, $secondIndex$$3$$), targetValue:D.$DvtChartDataUtils$$.$getTargetValue$(this.$_chart$, $firstIndex$$3$$), tooltip:D.$DvtChartTooltipUtils$$.$getDatatip$(D.$JSCompiler_alias_NULL$$, this.$_chart$, $firstIndex$$3$$, $secondIndex$$3$$), 
  value:D.$DvtChartDataUtils$$.getValue(this.$_chart$, $firstIndex$$3$$, $secondIndex$$3$$), x:D.$DvtChartDataUtils$$.$getXValue$(this.$_chart$, $firstIndex$$3$$, $secondIndex$$3$$), y:$dataItem$$28$$ ? $dataItem$$28$$.y : D.$JSCompiler_alias_NULL$$, z:$dataItem$$28$$ ? $dataItem$$28$$.z : D.$JSCompiler_alias_NULL$$, group:D.$DvtChartDataUtils$$.$getGroup$(this.$_chart$, $secondIndex$$3$$), series:D.$DvtChartDataUtils$$.$getSeries$(this.$_chart$, $firstIndex$$3$$), selected:D.$DvtChartDataUtils$$.$isDataSelected$(this.$_chart$, 
  $firstIndex$$3$$, $secondIndex$$3$$)}
};
D.$DvtChartAutomation$$.prototype.getDataItem = D.$DvtChartAutomation$$.prototype.$getDataItem$;
D.$DvtChartAutomation$$.prototype.$getGroup$ = function $$DvtChartAutomation$$$$$getGroup$$($groupIndex$$47$$) {
  return this.$_options$.groups[$groupIndex$$47$$]
};
D.$DvtChartAutomation$$.prototype.getGroup = D.$DvtChartAutomation$$.prototype.$getGroup$;
D.$DvtChartAutomation$$.prototype.$getSeries$ = function $$DvtChartAutomation$$$$$getSeries$$($seriesIndex$$84$$) {
  return this.$_options$.series[$seriesIndex$$84$$].name
};
D.$DvtChartAutomation$$.prototype.getSeries = D.$DvtChartAutomation$$.prototype.$getSeries$;
D.$DvtChartAutomation$$.prototype.$getGroupCount$ = function $$DvtChartAutomation$$$$$getGroupCount$$() {
  return this.$_options$.groups.length
};
D.$DvtChartAutomation$$.prototype.getGroupCount = D.$DvtChartAutomation$$.prototype.$getGroupCount$;
D.$DvtChartAutomation$$.prototype.$getSeriesCount$ = function $$DvtChartAutomation$$$$$getSeriesCount$$() {
  return this.$_options$.series.length
};
D.$DvtChartAutomation$$.prototype.getSeriesCount = D.$DvtChartAutomation$$.prototype.$getSeriesCount$;
D.$DvtChartAutomation$$.prototype.$getTitle$ = function $$DvtChartAutomation$$$$$getTitle$$() {
  return this.$_options$.title.text
};
D.$DvtChartAutomation$$.prototype.getTitle = D.$DvtChartAutomation$$.prototype.$getTitle$;
D.$DvtChartAutomation$$.prototype.$getLegend$ = function $$DvtChartAutomation$$$$$getLegend$$() {
  var $legendSpace$$ = this.$_legend$.$_bounds$, $point$$22$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this.$_chart$, new D.$DvtPoint$$($legendSpace$$.x, $legendSpace$$.y));
  return{bounds:{x:$point$$22$$.x, y:$point$$22$$.y, width:$legendSpace$$.$w$, height:$legendSpace$$.$h$}, title:this.$_legend$.$__getOptions$().title}
};
D.$DvtChartAutomation$$.prototype.getLegend = D.$DvtChartAutomation$$.prototype.$getLegend$;
D.$DvtChartAutomation$$.prototype.$getPlotArea$ = function $$DvtChartAutomation$$$$$getPlotArea$$() {
  var $plotAreaSpace$$ = this.$_chart$.$_plotAreaSpace$;
  return{bounds:{x:$plotAreaSpace$$.x, y:$plotAreaSpace$$.y, width:$plotAreaSpace$$.$w$, height:$plotAreaSpace$$.$h$}}
};
D.$DvtChartAutomation$$.prototype.getPlotArea = D.$DvtChartAutomation$$.prototype.$getPlotArea$;
D.$DvtChartAutomation$$.prototype.$getXAxis$ = function $$DvtChartAutomation$$$$$getXAxis$$() {
  if(this.$_chart$.$xAxis$) {
    var $xAxisSpace$$ = this.$_chart$.$xAxis$.$_bounds$;
    return{bounds:{x:$xAxisSpace$$.x, y:$xAxisSpace$$.y, width:$xAxisSpace$$.$w$, height:$xAxisSpace$$.$h$}, title:this.$_options$.xAxis.title}
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.getXAxis = D.$DvtChartAutomation$$.prototype.$getXAxis$;
D.$DvtChartAutomation$$.prototype.$getYAxis$ = function $$DvtChartAutomation$$$$$getYAxis$$() {
  if(this.$_chart$.$yAxis$) {
    var $yAxisSpace$$ = this.$_chart$.$yAxis$.$_bounds$;
    return{bounds:{x:$yAxisSpace$$.x, y:$yAxisSpace$$.y, width:$yAxisSpace$$.$w$, height:$yAxisSpace$$.$h$}, title:this.$_options$.yAxis.title}
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.getYAxis = D.$DvtChartAutomation$$.prototype.$getYAxis$;
D.$DvtChartAutomation$$.prototype.$getY2Axis$ = function $$DvtChartAutomation$$$$$getY2Axis$$() {
  if(this.$_chart$.$y2Axis$) {
    var $y2AxisSpace$$ = this.$_chart$.$y2Axis$.$_bounds$;
    return{bounds:{x:$y2AxisSpace$$.x, y:$y2AxisSpace$$.y, width:$y2AxisSpace$$.$w$, height:$y2AxisSpace$$.$h$}, title:this.$_options$.y2Axis.title}
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartAutomation$$.prototype.getY2Axis = D.$DvtChartAutomation$$.prototype.$getY2Axis$;
D.$DvtChartBundle$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtChartBundle$$, D.$DvtUtilBundle$$, "DvtChartBundle");
D.$DvtChartBundle$$._defaults = {EMPTY_TEXT:"No data to display", DEFAULT_GROUP_NAME:"Group {0}", LABEL_SERIES:"Series: {0}", LABEL_GROUP:"Group: {0}", LABEL_VALUE:"Value: {0}", LABEL_TARGET_VALUE:"Target: {0}", LABEL_X:"X: {0}", LABEL_Y:"Y: {0}", LABEL_Z:"Z: {0}", LABEL_LOW:"Low: {0}", LABEL_HIGH:"High: {0}", LABEL_PERCENTAGE:"Percentage: {0}", LABEL_OTHER:"Other", PAN:"Pan", MARQUEE_SELECT:"Marquee select", MARQUEE_ZOOM:"Marquee zoom"};
D.$DvtChartBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtChartBundle$$$$$GetDefaultStringForKey$$($key$$53$$) {
  var $defaultStr$$2$$ = D.$DvtChartBundle$$.$superclass$.$GetDefaultStringForKey$.call(this, $key$$53$$);
  return $defaultStr$$2$$ ? $defaultStr$$2$$ : D.$DvtChartBundle$$._defaults[$key$$53$$]
};
D.$DvtChartBundle$$.prototype.$GetBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtChartBundle");
D.$DvtChartEventManager$$ = function $$DvtChartEventManager$$$($chart$$171$$) {
  D.$DvtChartEventManager$$.$superclass$.Init.call(this, $chart$$171$$.$_context$, $chart$$171$$.$processEvent$, $chart$$171$$);
  this.$_chart$ = $chart$$171$$;
  this.$_dragMode$ = D.$JSCompiler_alias_NULL$$;
  this.$_dragButtonsVisible$ = (0,D.$DvtAgent$isTouchDevice$$)();
  this.$_stageAbsolutePosition$ = this.$_marqueeSelectHandler$ = this.$_marqueeZoomHandler$ = this.$_panZoomHandler$ = this.$_dataCursorHandler$ = this.$_seriesRolloverHandler$ = this.$selectButton$ = this.$zoomButton$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartEventManager$$, D.$DvtEventManager$$, "DvtChartEventManager");
D.$DvtChartEventManager$getUIEventParams$$ = function $$DvtChartEventManager$getUIEventParams$$$($type$$104$$, $id$$94$$, $series$$18$$) {
  return{type:$type$$104$$, id:$id$$94$$, series:$series$$18$$, group:D.$JSCompiler_alias_VOID$$}
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$addListeners$ = function $$JSCompiler_prototypeAlias$$$$addListeners$$($displayable$$25$$) {
  D.$DvtSvgDocumentUtils$$.$addDragListeners$(this.$_chart$, this.$_onDragStart$, this.$_onDragMove$, this.$_onDragEnd$, this);
  D.$DvtChartEventManager$$.$superclass$.$addListeners$.call(this, $displayable$$25$$);
  (0,D.$DvtAgent$isTouchDevice$$)() || ((0,D.$DvtAgent$isPlatformGecko$$)() ? $displayable$$25$$.$addEvtListener$("wheel", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$25$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$removeListeners$ = function $$JSCompiler_prototypeAlias$$$$removeListeners$$($displayable$$26$$) {
  D.$DvtChartEventManager$$.$superclass$.$removeListeners$.call(this, $displayable$$26$$);
  (0,D.$DvtAgent$isTouchDevice$$)() || ((0,D.$DvtAgent$isPlatformGecko$$)() ? $displayable$$26$$.$removeEvtListener$("DOMMouseScroll", this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this) : $displayable$$26$$.$removeEvtListener$(D.$DvtMouseEvent$MOUSEWHEEL$$, this.$OnMouseWheel$, D.$JSCompiler_alias_FALSE$$, this))
};
D.$JSCompiler_prototypeAlias$$.$FireUIEvent$ = function $$JSCompiler_prototypeAlias$$$$FireUIEvent$$($type$$105$$, $logicalObj$$5$$) {
  if($logicalObj$$5$$ instanceof D.$DvtSimpleObjPeer$$ && $logicalObj$$5$$.$getParams$() != D.$JSCompiler_alias_NULL$$) {
    $logicalObj$$5$$.$getParams$()
  }else {
    if($logicalObj$$5$$ instanceof D.$DvtPieSlice$$) {
      var $sliceId$$1$$ = $logicalObj$$5$$.getId();
      $sliceId$$1$$.$getSeries$() == D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ || ($sliceId$$1$$.getId(), $sliceId$$1$$.$getSeries$(), $sliceId$$1$$.$getGroup$())
    }else {
      $logicalObj$$5$$ instanceof D.$DvtChartObjPeer$$ && (0 <= $logicalObj$$5$$.$getSeriesIndex$() && 0 <= $logicalObj$$5$$.$getGroupIndex$() || $logicalObj$$5$$.$getSeriesIndex$(), $logicalObj$$5$$.$getSeries$(), $logicalObj$$5$$.$getGroup$())
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$getLogicalObject$ = function $$JSCompiler_prototypeAlias$$$$getLogicalObject$$($target$$58$$) {
  return(0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $target$$58$$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$_getRelativePosition$ = function $$JSCompiler_prototypeAlias$$$$_getRelativePosition$$($pageX$$5$$, $pageY$$5$$) {
  this.$_stageAbsolutePosition$ || (this.$_stageAbsolutePosition$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_context$));
  return new D.$DvtPoint$$($pageX$$5$$ - this.$_stageAbsolutePosition$.x, $pageY$$5$$ - this.$_stageAbsolutePosition$.y)
};
D.$JSCompiler_StaticMethods__getDragHandler$$ = function $$JSCompiler_StaticMethods__getDragHandler$$$($JSCompiler_StaticMethods__getDragHandler$self$$) {
  return"pan" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_panZoomHandler$ : "zoom" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_marqueeZoomHandler$ : "select" == $JSCompiler_StaticMethods__getDragHandler$self$$.$_dragMode$ ? $JSCompiler_StaticMethods__getDragHandler$self$$.$_marqueeSelectHandler$ : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_onDragStart$ = function $$JSCompiler_prototypeAlias$$$$_onDragStart$$($JSCompiler_temp$$279_event$$236$$) {
  if((0,D.$DvtAgent$isTouchDevice$$)()) {
    var $chartEvent$$inline_3402_relPos$$inline_3394_relPos2$$inline_3396_touches$$inline_3390$$ = $JSCompiler_temp$$279_event$$236$$.touches, $chartEvent$$inline_3391_dragHandler$$inline_3401_relPos1$$inline_3395$$, $dataCursorOn$$inline_3392_relPos$$inline_3400$$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$;
    1 == $chartEvent$$inline_3402_relPos$$inline_3394_relPos2$$inline_3396_touches$$inline_3390$$.length ? ($JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this)) ? ($chartEvent$$inline_3402_relPos$$inline_3394_relPos2$$inline_3396_touches$$inline_3390$$ = this.$_getRelativePosition$($chartEvent$$inline_3402_relPos$$inline_3394_relPos2$$inline_3396_touches$$inline_3390$$[0].pageX, $chartEvent$$inline_3402_relPos$$inline_3394_relPos2$$inline_3396_touches$$inline_3390$$[0].pageY), 
    $chartEvent$$inline_3391_dragHandler$$inline_3401_relPos1$$inline_3395$$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$.$processDragStart$($chartEvent$$inline_3402_relPos$$inline_3394_relPos2$$inline_3396_touches$$inline_3390$$, D.$JSCompiler_alias_TRUE$$)) : this.$_dataCursorHandler$ && ((0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $chartEvent$$inline_3402_relPos$$inline_3394_relPos2$$inline_3396_touches$$inline_3390$$[0].pageX, 
    $chartEvent$$inline_3402_relPos$$inline_3394_relPos2$$inline_3396_touches$$inline_3390$$[0].pageY, $JSCompiler_temp$$279_event$$236$$.target, (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $JSCompiler_temp$$279_event$$236$$.target)), $dataCursorOn$$inline_3392_relPos$$inline_3400$$ = D.$JSCompiler_alias_TRUE$$) : 2 == $chartEvent$$inline_3402_relPos$$inline_3394_relPos2$$inline_3396_touches$$inline_3390$$.length && (this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) && 
    (this.$endDrag$(), $chartEvent$$inline_3391_dragHandler$$inline_3401_relPos1$$inline_3395$$ = this.$_getRelativePosition$($chartEvent$$inline_3402_relPos$$inline_3394_relPos2$$inline_3396_touches$$inline_3390$$[0].pageX, $chartEvent$$inline_3402_relPos$$inline_3394_relPos2$$inline_3396_touches$$inline_3390$$[0].pageY), $chartEvent$$inline_3402_relPos$$inline_3394_relPos2$$inline_3396_touches$$inline_3390$$ = this.$_getRelativePosition$($chartEvent$$inline_3402_relPos$$inline_3394_relPos2$$inline_3396_touches$$inline_3390$$[1].pageX, 
    $chartEvent$$inline_3402_relPos$$inline_3394_relPos2$$inline_3396_touches$$inline_3390$$[1].pageY), $JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$ = this.$_panZoomHandler$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$.$_pinchOn$ ? $chartEvent$$inline_3391_dragHandler$$inline_3401_relPos1$$inline_3395$$ = D.$JSCompiler_alias_NULL$$ : ($JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$.$_origPt1$ = 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$.$_container$.$stageToLocal$($chartEvent$$inline_3391_dragHandler$$inline_3401_relPos1$$inline_3395$$), $JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$.$_origPt2$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$.$_container$.$stageToLocal$($chartEvent$$inline_3402_relPos$$inline_3394_relPos2$$inline_3396_touches$$inline_3390$$), 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$.$_lastPt1$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$.$_origPt1$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$.$_lastPt2$ = $JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$.$_origPt2$, !(0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$.$_bounds$, 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$.$_origPt1$.x, $JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$.$_origPt1$.y) || !(0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$.$_bounds$, $JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$.$_origPt2$.x, 
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$.$_origPt2$.y) ? $chartEvent$$inline_3391_dragHandler$$inline_3401_relPos1$$inline_3395$$ = D.$JSCompiler_alias_NULL$$ : ($JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$.$_pinchOn$ = D.$JSCompiler_alias_TRUE$$, $chartEvent$$inline_3391_dragHandler$$inline_3401_relPos1$$inline_3395$$ = new D.$DvtPanZoomEvent$$("dvtPinchStartEvent", 0, 
    0, 0, 0, 0, 0, 0, 0))));
    $chartEvent$$inline_3391_dragHandler$$inline_3401_relPos1$$inline_3395$$ && (this.$_callback$.call(this.$_callbackObj$, $chartEvent$$inline_3391_dragHandler$$inline_3401_relPos1$$inline_3395$$), this.$_context$.$getTooltipManager$().$hideTooltip$());
    $chartEvent$$inline_3391_dragHandler$$inline_3401_relPos1$$inline_3395$$ || $dataCursorOn$$inline_3392_relPos$$inline_3400$$ ? ($JSCompiler_temp$$279_event$$236$$.preventDefault(), $JSCompiler_temp$$279_event$$236$$.stopPropagation(), (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, D.$JSCompiler_alias_FALSE$$), $JSCompiler_temp$$279_event$$236$$ = D.$JSCompiler_alias_TRUE$$) : $JSCompiler_temp$$279_event$$236$$ = D.$JSCompiler_alias_FALSE$$
  }else {
    $dataCursorOn$$inline_3392_relPos$$inline_3400$$ = this.$_getRelativePosition$($JSCompiler_temp$$279_event$$236$$.pageX, $JSCompiler_temp$$279_event$$236$$.pageY);
    $chartEvent$$inline_3391_dragHandler$$inline_3401_relPos1$$inline_3395$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this);
    $JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($JSCompiler_temp$$279_event$$236$$));
    if((!$JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$ || !$JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$.$isSelectable$ || !$JSCompiler_StaticMethods_processPinchStart$self$$inline_9858_dragHandler$$inline_3393_obj$$inline_3403$$.$isSelectable$()) && 0 == $JSCompiler_temp$$279_event$$236$$.button && $chartEvent$$inline_3391_dragHandler$$inline_3401_relPos1$$inline_3395$$) {
      ($chartEvent$$inline_3402_relPos$$inline_3394_relPos2$$inline_3396_touches$$inline_3390$$ = $chartEvent$$inline_3391_dragHandler$$inline_3401_relPos1$$inline_3395$$.$processDragStart$($dataCursorOn$$inline_3392_relPos$$inline_3400$$, $JSCompiler_temp$$279_event$$236$$.ctrlKey)) && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$inline_3402_relPos$$inline_3394_relPos2$$inline_3396_touches$$inline_3390$$), this.$_chart$.setCursor($chartEvent$$inline_3391_dragHandler$$inline_3401_relPos1$$inline_3395$$.getCursor($dataCursorOn$$inline_3392_relPos$$inline_3400$$)), 
      (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, D.$JSCompiler_alias_FALSE$$)
    }
    $chartEvent$$inline_3402_relPos$$inline_3394_relPos2$$inline_3396_touches$$inline_3390$$ ? (this.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)(this.$_dataCursorHandler$), $JSCompiler_temp$$279_event$$236$$ = D.$JSCompiler_alias_TRUE$$) : $JSCompiler_temp$$279_event$$236$$ = D.$JSCompiler_alias_FALSE$$
  }
  return $JSCompiler_temp$$279_event$$236$$
};
D.$JSCompiler_prototypeAlias$$.$_onDragMove$ = function $$JSCompiler_prototypeAlias$$$$_onDragMove$$($event$$237$$) {
  if((0,D.$DvtAgent$isTouchDevice$$)()) {
    var $JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$ = $event$$237$$.touches, $chartEvent$$inline_3408_dragHandler$$inline_3418_newPt1$$inline_9867_relPos1$$inline_3412$$, $dataCursorOn$$inline_3409_relPos$$inline_3417$$;
    if(1 == $JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$.length) {
      var $dragHandler$$inline_3410_newPt2$$inline_9868_relPos2$$inline_3413$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this);
      $dragHandler$$inline_3410_newPt2$$inline_9868_relPos2$$inline_3413$$ ? ($JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$[0].pageX, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$[0].pageY), 
      $chartEvent$$inline_3408_dragHandler$$inline_3418_newPt1$$inline_9867_relPos1$$inline_3412$$ = $dragHandler$$inline_3410_newPt2$$inline_9868_relPos2$$inline_3413$$.$processDragMove$($JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$, D.$JSCompiler_alias_TRUE$$)) : this.$_dataCursorHandler$ && ((0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$[0].pageX, 
      $JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$[0].pageY, $event$$237$$.target, (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$237$$.target)), $dataCursorOn$$inline_3409_relPos$$inline_3417$$ = D.$JSCompiler_alias_TRUE$$)
    }else {
      if(2 == $JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$.length && this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) {
        if($chartEvent$$inline_3408_dragHandler$$inline_3418_newPt1$$inline_9867_relPos1$$inline_3412$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$[0].pageX, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$[0].pageY), $dragHandler$$inline_3410_newPt2$$inline_9868_relPos2$$inline_3413$$ = this.$_getRelativePosition$($JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$[1].pageX, 
        $JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$[1].pageY), $JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$ = this.$_panZoomHandler$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$.$_pinchOn$) {
          $chartEvent$$inline_3408_dragHandler$$inline_3418_newPt1$$inline_9867_relPos1$$inline_3412$$ = $JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$.$_container$.$stageToLocal$($chartEvent$$inline_3408_dragHandler$$inline_3418_newPt1$$inline_9867_relPos1$$inline_3412$$);
          var $dragHandler$$inline_3410_newPt2$$inline_9868_relPos2$$inline_3413$$ = $JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$.$_container$.$stageToLocal$($dragHandler$$inline_3410_newPt2$$inline_9868_relPos2$$inline_3413$$), $deltas$$inline_9869$$ = (0,D.$JSCompiler_StaticMethods__computePinchDeltas$$)($JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$, 
          $chartEvent$$inline_3408_dragHandler$$inline_3418_newPt1$$inline_9867_relPos1$$inline_3412$$, $dragHandler$$inline_3410_newPt2$$inline_9868_relPos2$$inline_3413$$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$.$_lastPt1$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$.$_lastPt2$), $totalDeltas$$inline_9870$$ = (0,D.$JSCompiler_StaticMethods__computePinchDeltas$$)($JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$, 
          $chartEvent$$inline_3408_dragHandler$$inline_3418_newPt1$$inline_9867_relPos1$$inline_3412$$, $dragHandler$$inline_3410_newPt2$$inline_9868_relPos2$$inline_3413$$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$.$_origPt1$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$.$_origPt2$);
          $JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$.$_lastPt1$ = $chartEvent$$inline_3408_dragHandler$$inline_3418_newPt1$$inline_9867_relPos1$$inline_3412$$;
          $JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$.$_lastPt2$ = $dragHandler$$inline_3410_newPt2$$inline_9868_relPos2$$inline_3413$$;
          $chartEvent$$inline_3408_dragHandler$$inline_3418_newPt1$$inline_9867_relPos1$$inline_3412$$ = new D.$DvtPanZoomEvent$$("dvtPinchMoveEvent", $deltas$$inline_9869$$.$dxMin$, $deltas$$inline_9869$$.$dxMax$, $deltas$$inline_9869$$.$dyMin$, $deltas$$inline_9869$$.$dyMax$, $totalDeltas$$inline_9870$$.$dxMin$, $totalDeltas$$inline_9870$$.$dxMax$, $totalDeltas$$inline_9870$$.$dyMin$, $totalDeltas$$inline_9870$$.$dyMax$)
        }else {
          $chartEvent$$inline_3408_dragHandler$$inline_3418_newPt1$$inline_9867_relPos1$$inline_3412$$ = D.$JSCompiler_alias_NULL$$
        }
      }
    }
    ($chartEvent$$inline_3408_dragHandler$$inline_3418_newPt1$$inline_9867_relPos1$$inline_3412$$ || $dataCursorOn$$inline_3409_relPos$$inline_3417$$) && $event$$237$$.preventDefault();
    $chartEvent$$inline_3408_dragHandler$$inline_3418_newPt1$$inline_9867_relPos1$$inline_3412$$ && (this.$_callback$.call(this.$_callbackObj$, $chartEvent$$inline_3408_dragHandler$$inline_3418_newPt1$$inline_9867_relPos1$$inline_3412$$), this.$_context$.$getTooltipManager$().$hideTooltip$())
  }else {
    $dataCursorOn$$inline_3409_relPos$$inline_3417$$ = this.$_getRelativePosition$($event$$237$$.pageX, $event$$237$$.pageY);
    if($chartEvent$$inline_3408_dragHandler$$inline_3418_newPt1$$inline_9867_relPos1$$inline_3412$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this)) {
      if($JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$ = $chartEvent$$inline_3408_dragHandler$$inline_3418_newPt1$$inline_9867_relPos1$$inline_3412$$.$processDragMove$($dataCursorOn$$inline_3409_relPos$$inline_3417$$, $event$$237$$.ctrlKey)) {
        this.$_callback$.call(this.$_callbackObj$, $JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$), (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, D.$JSCompiler_alias_FALSE$$)
      }
    }
    $JSCompiler_StaticMethods_processPinchMove$self$$inline_9864_chartEvent$$inline_3419_relPos$$inline_3411_touches$$inline_3407$$ && $event$$237$$.stopPropagation()
  }
};
D.$JSCompiler_prototypeAlias$$.$_onDragEnd$ = function $$JSCompiler_prototypeAlias$$$$_onDragEnd$$($axisSpace$$inline_3431_chartEvent$$inline_3430_event$$238$$) {
  if((0,D.$DvtAgent$isTouchDevice$$)()) {
    var $chartEvent1$$inline_3423_relPos$$inline_3428$$ = this.$endDrag$(), $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9872_chartEvent2$$inline_3424_dragHandler$$inline_3429$$;
    if(this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) {
      $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9872_chartEvent2$$inline_3424_dragHandler$$inline_3429$$ = this.$_panZoomHandler$;
      if($JSCompiler_StaticMethods_processPinchEnd$self$$inline_9872_chartEvent2$$inline_3424_dragHandler$$inline_3429$$.$_pinchOn$) {
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9872_chartEvent2$$inline_3424_dragHandler$$inline_3429$$.$_pinchOn$ = D.$JSCompiler_alias_FALSE$$;
        var $totalDeltas$$inline_9873$$ = (0,D.$JSCompiler_StaticMethods__computePinchDeltas$$)($JSCompiler_StaticMethods_processPinchEnd$self$$inline_9872_chartEvent2$$inline_3424_dragHandler$$inline_3429$$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9872_chartEvent2$$inline_3424_dragHandler$$inline_3429$$.$_lastPt1$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9872_chartEvent2$$inline_3424_dragHandler$$inline_3429$$.$_lastPt2$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9872_chartEvent2$$inline_3424_dragHandler$$inline_3429$$.$_origPt1$, 
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9872_chartEvent2$$inline_3424_dragHandler$$inline_3429$$.$_origPt2$);
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9872_chartEvent2$$inline_3424_dragHandler$$inline_3429$$.$_lastPt1$ = D.$JSCompiler_alias_NULL$$;
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9872_chartEvent2$$inline_3424_dragHandler$$inline_3429$$.$_lastPt2$ = D.$JSCompiler_alias_NULL$$;
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9872_chartEvent2$$inline_3424_dragHandler$$inline_3429$$ = new D.$DvtPanZoomEvent$$("dvtPinchEndEvent", 0, 0, 0, 0, $totalDeltas$$inline_9873$$.$dxMin$, $totalDeltas$$inline_9873$$.$dxMax$, $totalDeltas$$inline_9873$$.$dyMin$, $totalDeltas$$inline_9873$$.$dyMax$)
      }else {
        $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9872_chartEvent2$$inline_3424_dragHandler$$inline_3429$$ = D.$JSCompiler_alias_NULL$$
      }
      $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9872_chartEvent2$$inline_3424_dragHandler$$inline_3429$$ && this.$_callback$.call(this.$_callbackObj$, $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9872_chartEvent2$$inline_3424_dragHandler$$inline_3429$$)
    }
    if($chartEvent1$$inline_3423_relPos$$inline_3428$$ || $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9872_chartEvent2$$inline_3424_dragHandler$$inline_3429$$) {
      $axisSpace$$inline_3431_chartEvent$$inline_3430_event$$238$$.preventDefault(), this.$_context$.$getTooltipManager$().$hideTooltip$()
    }
    this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$;
    (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, D.$JSCompiler_alias_TRUE$$)
  }else {
    $chartEvent1$$inline_3423_relPos$$inline_3428$$ = this.$_getRelativePosition$($axisSpace$$inline_3431_chartEvent$$inline_3430_event$$238$$.pageX, $axisSpace$$inline_3431_chartEvent$$inline_3430_event$$238$$.pageY);
    if($JSCompiler_StaticMethods_processPinchEnd$self$$inline_9872_chartEvent2$$inline_3424_dragHandler$$inline_3429$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this)) {
      if($axisSpace$$inline_3431_chartEvent$$inline_3430_event$$238$$ = $JSCompiler_StaticMethods_processPinchEnd$self$$inline_9872_chartEvent2$$inline_3424_dragHandler$$inline_3429$$.$processDragEnd$($chartEvent1$$inline_3423_relPos$$inline_3428$$, $axisSpace$$inline_3431_chartEvent$$inline_3430_event$$238$$.ctrlKey)) {
        this.$_callback$.call(this.$_callbackObj$, $axisSpace$$inline_3431_chartEvent$$inline_3430_event$$238$$), (0,D.$JSCompiler_StaticMethods_autoToggleZoomButton$$)(this)
      }
      this.$_chart$.setCursor($JSCompiler_StaticMethods_processPinchEnd$self$$inline_9872_chartEvent2$$inline_3424_dragHandler$$inline_3429$$.getCursor($chartEvent1$$inline_3423_relPos$$inline_3428$$));
      ($axisSpace$$inline_3431_chartEvent$$inline_3430_event$$238$$ = this.$_chart$.$_axisSpace$) && (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, (0,D.$JSCompiler_StaticMethods_containsPoint$$)($axisSpace$$inline_3431_chartEvent$$inline_3430_event$$238$$, $chartEvent1$$inline_3423_relPos$$inline_3428$$.x, $chartEvent1$$inline_3423_relPos$$inline_3428$$.y))
    }
    this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$242_relPos$$31$$) {
  D.$DvtChartEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$242_relPos$$31$$);
  this.$_dataCursorHandler$ && ((0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)($event$$242_relPos$$31$$) instanceof D.$DvtButton$$ ? (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)(this.$_dataCursorHandler$) : (0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $event$$242_relPos$$31$$.pageX, $event$$242_relPos$$31$$.pageY, $event$$242_relPos$$31$$.target));
  var $dragHandler$$3$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this);
  $event$$242_relPos$$31$$ = this.$_getRelativePosition$($event$$242_relPos$$31$$.pageX, $event$$242_relPos$$31$$.pageY);
  $dragHandler$$3$$ && this.$_chart$.setCursor($dragHandler$$3$$.getCursor($event$$242_relPos$$31$$))
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$243_obj$$108$$) {
  D.$DvtChartEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$243_obj$$108$$);
  ($event$$243_obj$$108$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$243_obj$$108$$.target)) && this.$_seriesRolloverHandler$ && this.$_seriesRolloverHandler$.$processMouseOver$($event$$243_obj$$108$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$244_obj$$109$$) {
  D.$DvtChartEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$244_obj$$109$$);
  var $relPos$$32$$ = this.$_getRelativePosition$($event$$244_obj$$109$$.pageX, $event$$244_obj$$109$$.pageY), $JSCompiler_StaticMethods_processOut$self$$inline_3437_axisSpace$$1$$ = this.$_chart$.$_axisSpace$;
  $JSCompiler_StaticMethods_processOut$self$$inline_3437_axisSpace$$1$$ && (0,D.$JSCompiler_StaticMethods_setDragButtonsVisible$$)(this, (0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processOut$self$$inline_3437_axisSpace$$1$$, $relPos$$32$$.x, $relPos$$32$$.y));
  this.$_dataCursorHandler$ && ($JSCompiler_StaticMethods_processOut$self$$inline_3437_axisSpace$$1$$ = this.$_dataCursorHandler$, (0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processOut$self$$inline_3437_axisSpace$$1$$.$getPlotRect$(), $relPos$$32$$.x, $relPos$$32$$.y) || (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processOut$self$$inline_3437_axisSpace$$1$$));
  this.$_stageAbsolutePosition$ = D.$JSCompiler_alias_NULL$$;
  ($event$$244_obj$$109$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$244_obj$$109$$.target)) && this.$_seriesRolloverHandler$ && this.$_seriesRolloverHandler$.$processMouseOut$($event$$244_obj$$109$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$OnMouseWheel$$($event$$245$$) {
  if(D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$)) {
    var $delta$$4_delta$$inline_3442$$ = $event$$245$$.wheelDelta != D.$JSCompiler_alias_NULL$$ ? $event$$245$$.wheelDelta : 0, $deltaXMin$$inline_3444_relPos$$33$$ = this.$_getRelativePosition$($event$$245$$.pageX, $event$$245$$.pageY);
    if(this.$_panZoomHandler$) {
      var $JSCompiler_StaticMethods_processMouseWheel$self$$inline_3440_deltaYMax$$inline_3447_panZoomEvent$$;
      $JSCompiler_StaticMethods_processMouseWheel$self$$inline_3440_deltaYMax$$inline_3447_panZoomEvent$$ = this.$_panZoomHandler$;
      var $startPt$$inline_3443$$ = $JSCompiler_StaticMethods_processMouseWheel$self$$inline_3440_deltaYMax$$inline_3447_panZoomEvent$$.$_container$.$stageToLocal$($deltaXMin$$inline_3444_relPos$$33$$);
      if((0,D.$JSCompiler_StaticMethods_containsPoint$$)($JSCompiler_StaticMethods_processMouseWheel$self$$inline_3440_deltaYMax$$inline_3447_panZoomEvent$$.$_bounds$, $startPt$$inline_3443$$.x, $startPt$$inline_3443$$.y)) {
        var $delta$$4_delta$$inline_3442$$ = $delta$$4_delta$$inline_3442$$ * $JSCompiler_StaticMethods_processMouseWheel$self$$inline_3440_deltaYMax$$inline_3447_panZoomEvent$$.$_zoomRate$, $deltaXMin$$inline_3444_relPos$$33$$ = $delta$$4_delta$$inline_3442$$ * ($startPt$$inline_3443$$.x - $JSCompiler_StaticMethods_processMouseWheel$self$$inline_3440_deltaYMax$$inline_3447_panZoomEvent$$.$_bounds$.x), $deltaXMax$$inline_3445$$ = -$delta$$4_delta$$inline_3442$$ * ($JSCompiler_StaticMethods_processMouseWheel$self$$inline_3440_deltaYMax$$inline_3447_panZoomEvent$$.$_bounds$.x + 
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_3440_deltaYMax$$inline_3447_panZoomEvent$$.$_bounds$.$w$ - $startPt$$inline_3443$$.x), $deltaYMin$$inline_3446$$ = $delta$$4_delta$$inline_3442$$ * ($startPt$$inline_3443$$.y - $JSCompiler_StaticMethods_processMouseWheel$self$$inline_3440_deltaYMax$$inline_3447_panZoomEvent$$.$_bounds$.y);
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_3440_deltaYMax$$inline_3447_panZoomEvent$$ = -$delta$$4_delta$$inline_3442$$ * ($JSCompiler_StaticMethods_processMouseWheel$self$$inline_3440_deltaYMax$$inline_3447_panZoomEvent$$.$_bounds$.y + $JSCompiler_StaticMethods_processMouseWheel$self$$inline_3440_deltaYMax$$inline_3447_panZoomEvent$$.$_bounds$.$h$ - $startPt$$inline_3443$$.y);
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_3440_deltaYMax$$inline_3447_panZoomEvent$$ = new D.$DvtPanZoomEvent$$("dvtZoomEvent", $deltaXMin$$inline_3444_relPos$$33$$, $deltaXMax$$inline_3445$$, $deltaYMin$$inline_3446$$, $JSCompiler_StaticMethods_processMouseWheel$self$$inline_3440_deltaYMax$$inline_3447_panZoomEvent$$, $deltaXMin$$inline_3444_relPos$$33$$, $deltaXMax$$inline_3445$$, $deltaYMin$$inline_3446$$, $JSCompiler_StaticMethods_processMouseWheel$self$$inline_3440_deltaYMax$$inline_3447_panZoomEvent$$)
      }else {
        $JSCompiler_StaticMethods_processMouseWheel$self$$inline_3440_deltaYMax$$inline_3447_panZoomEvent$$ = D.$JSCompiler_alias_NULL$$
      }
      $JSCompiler_StaticMethods_processMouseWheel$self$$inline_3440_deltaYMax$$inline_3447_panZoomEvent$$ && ($event$$245$$.preventDefault(), $event$$245$$.stopPropagation(), this.$_callback$.call(this.$_callbackObj$, $JSCompiler_StaticMethods_processMouseWheel$self$$inline_3440_deltaYMax$$inline_3447_panZoomEvent$$), this.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods_processMove$$)(this.$_dataCursorHandler$, $event$$245$$.pageX, $event$$245$$.pageY, $event$$245$$.target))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$OnClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnClickInternal$$($event$$246_pos$$29$$) {
  var $obj$$110$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$246_pos$$29$$.target);
  $event$$246_pos$$29$$ = this.$_getRelativePosition$($event$$246_pos$$29$$.pageX, $event$$246_pos$$29$$.pageY);
  this.$SeriesFocusHandler$ && this.$SeriesFocusHandler$.$processSeriesFocus$($event$$246_pos$$29$$, $obj$$110$$);
  $obj$$110$$ && $obj$$110$$.$getAction$ && $obj$$110$$.$_action$ && this.$FireEvent$(new D.$DvtActionEvent$$("action", $obj$$110$$.$_action$, $obj$$110$$.getId()))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverStartInternal$$($event$$247$$) {
  var $dlo$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$247$$.target);
  (0,D.$JSCompiler_StaticMethods_setTooltipEnabled$$)(this.$TouchManager$, $event$$247$$.$touch$.identifier, this.$_dataCursorHandler$ ? $dlo$$ instanceof D.$DvtChartObjPeer$$ ? D.$JSCompiler_alias_FALSE$$ : !this.$_dataCursorHandler$.$_dataCursorShown$ : D.$JSCompiler_alias_TRUE$$);
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverMoveInternal$$($event$$248$$) {
  var $dlo$$1$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$248$$.target);
  (0,D.$JSCompiler_StaticMethods_setTooltipEnabled$$)(this.$TouchManager$, $event$$248$$.$touch$.identifier, this.$_dataCursorHandler$ ? $dlo$$1$$ instanceof D.$DvtChartObjPeer$$ ? D.$JSCompiler_alias_FALSE$$ : !this.$_dataCursorHandler$.$_dataCursorShown$ : D.$JSCompiler_alias_TRUE$$);
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverEndInternal$$($dlo$$2_event$$249$$) {
  this.$_seriesRolloverHandler$ && ($dlo$$2_event$$249$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $dlo$$2_event$$249$$.target), this.$_seriesRolloverHandler$.$processMouseOut$($dlo$$2_event$$249$$))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOverInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOverInternal$$($dlo$$3_event$$250$$) {
  this.$_seriesRolloverHandler$ && ($dlo$$3_event$$250$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $dlo$$3_event$$250$$.target), this.$_seriesRolloverHandler$.$processMouseOver$($dlo$$3_event$$250$$))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOutInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOutInternal$$($dlo$$4_event$$251$$) {
  this.$_seriesRolloverHandler$ && ($dlo$$4_event$$251$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $dlo$$4_event$$251$$.target), this.$_seriesRolloverHandler$.$processMouseOut$($dlo$$4_event$$251$$))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($evt$$47_obj$$111$$) {
  D.$DvtChartEventManager$$.$superclass$.$HandleTouchClickInternal$.call(this, $evt$$47_obj$$111$$);
  ($evt$$47_obj$$111$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $evt$$47_obj$$111$$.target)) && $evt$$47_obj$$111$$.$getAction$ && $evt$$47_obj$$111$$.$_action$ && this.$FireEvent$(new D.$DvtActionEvent$$("action", $evt$$47_obj$$111$$.$_action$, $evt$$47_obj$$111$$.getId()))
};
D.$JSCompiler_prototypeAlias$$.$endDrag$ = function $$JSCompiler_prototypeAlias$$$$endDrag$$() {
  var $dragHandler$$6$$ = (0,D.$JSCompiler_StaticMethods__getDragHandler$$)(this), $chartEvent$$5$$;
  $dragHandler$$6$$ && ($chartEvent$$5$$ = $dragHandler$$6$$.$processDragEnd$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$)) && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$5$$);
  this.$_dataCursorHandler$ && (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)(this.$_dataCursorHandler$);
  $chartEvent$$5$$ && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$5$$);
  return $chartEvent$$5$$
};
D.$JSCompiler_prototypeAlias$$.$zoomBy$ = function $$JSCompiler_prototypeAlias$$$$zoomBy$$($chartEvent$$6_dz$$8$$) {
  this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isZoomable$(this.$_chart$) && ($chartEvent$$6_dz$$8$$ = this.$_panZoomHandler$.$zoomBy$($chartEvent$$6_dz$$8$$)) && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$6_dz$$8$$)
};
D.$JSCompiler_prototypeAlias$$.$panBy$ = function $$JSCompiler_prototypeAlias$$$$panBy$$($dx$$14$$, $dy$$14$$) {
  if(this.$_panZoomHandler$ && D.$DvtChartEventUtils$$.$isScrollable$(this.$_chart$)) {
    var $chartEvent$$7$$ = this.$_panZoomHandler$.$panBy$($dx$$14$$, $dy$$14$$);
    $chartEvent$$7$$ && this.$_callback$.call(this.$_callbackObj$, $chartEvent$$7$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$hideTooltip$ = function $$JSCompiler_prototypeAlias$$$$hideTooltip$$() {
  (!this.$_dataCursorHandler$ || !this.$_dataCursorHandler$.$_dataCursorShown$) && D.$DvtChartEventManager$$.$superclass$.$hideTooltip$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$getTooltipsEnabled$ = function $$JSCompiler_prototypeAlias$$$$getTooltipsEnabled$$() {
  return this.$_dataCursorHandler$ && this.$_dataCursorHandler$.$_dataCursorShown$ ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartEventManager$$.$superclass$.$getTooltipsEnabled$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$cancelMarquee$ = function $$JSCompiler_prototypeAlias$$$$cancelMarquee$$($event$$255$$) {
  "zoom" == this.$_dragMode$ ? this.$_marqueeZoomHandler$.$cancelMarquee$() && $event$$255$$.preventDefault() : "select" == this.$_dragMode$ && this.$_marqueeSelectHandler$ && this.$_marqueeSelectHandler$.$cancelMarquee$() && this.$_chart$.$render$()
};
D.$JSCompiler_StaticMethods_setDragMode$$ = function $$JSCompiler_StaticMethods_setDragMode$$$($JSCompiler_StaticMethods_setDragMode$self$$, $dragMode$$) {
  $JSCompiler_StaticMethods_setDragMode$self$$.$_dragMode$ = $dragMode$$ == D.$JSCompiler_alias_NULL$$ ? (0,D.$DvtAgent$isTouchDevice$$)() ? "tooltip" : D.$DvtChartEventUtils$$.$isScrollable$($JSCompiler_StaticMethods_setDragMode$self$$.$_chart$) ? "pan" : "multiple" == $JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$getOptions$().selection ? "select" : D.$JSCompiler_alias_NULL$$ : $dragMode$$;
  (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$xAxis$) && (!$JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$yAxis$ || (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_setDragMode$self$$.$_chart$.$yAxis$)) && (0,D.$JSCompiler_StaticMethods_autoToggleZoomButton$$)($JSCompiler_StaticMethods_setDragMode$self$$)
};
D.$DvtChartEventManager$$.prototype.$onZoomButtonClick$ = function $$DvtChartEventManager$$$$$onZoomButtonClick$$() {
  this.$zoomButton$.$_bToggled$ ? (this.$selectButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$selectButton$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, "zoom")) : (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, D.$JSCompiler_alias_NULL$$)
};
D.$DvtChartEventManager$$.prototype.$onPanButtonClick$ = function $$DvtChartEventManager$$$$$onPanButtonClick$$() {
  this.$panButton$.$_bToggled$ ? (this.$selectButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$selectButton$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, "pan")) : (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, D.$JSCompiler_alias_NULL$$)
};
D.$DvtChartEventManager$$.prototype.$onSelectButtonClick$ = function $$DvtChartEventManager$$$$$onSelectButtonClick$$() {
  this.$selectButton$.$_bToggled$ ? (this.$zoomButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$zoomButton$, D.$JSCompiler_alias_FALSE$$), this.$panButton$ && (0,D.$JSCompiler_StaticMethods_setToggled$$)(this.$panButton$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, "select")) : (0,D.$JSCompiler_StaticMethods_setDragMode$$)(this, D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods_setDragButtonsVisible$$ = function $$JSCompiler_StaticMethods_setDragButtonsVisible$$$($JSCompiler_StaticMethods_setDragButtonsVisible$self$$, $visible$$1$$) {
  if($visible$$1$$ && !$JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$) {
    var $JSCompiler_StaticMethods_showDragButtons$self$$inline_3453$$ = $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_chart$;
    $JSCompiler_StaticMethods_showDragButtons$self$$inline_3453$$.$dragButtons$ && $JSCompiler_StaticMethods_showDragButtons$self$$inline_3453$$.$dragButtons$.$setVisible$(D.$JSCompiler_alias_TRUE$$);
    $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ = D.$JSCompiler_alias_TRUE$$
  }else {
    !$visible$$1$$ && $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ && ((0,D.$JSCompiler_StaticMethods_hideDragButtons$$)($JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_chart$), $JSCompiler_StaticMethods_setDragButtonsVisible$self$$.$_dragButtonsVisible$ = D.$JSCompiler_alias_FALSE$$)
  }
};
D.$JSCompiler_StaticMethods_autoToggleZoomButton$$ = function $$JSCompiler_StaticMethods_autoToggleZoomButton$$$($JSCompiler_StaticMethods_autoToggleZoomButton$self$$) {
  !(0,D.$DvtAgent$isTouchDevice$$)() && $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$ && ((0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_chart$.$xAxis$) && (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_chart$.$yAxis$) ? "pan" == $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_dragMode$ && ((0,D.$JSCompiler_StaticMethods_setToggled$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$, 
  D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$onZoomButtonClick$()) : "zoom" == $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$_dragMode$ && ((0,D.$JSCompiler_StaticMethods_setToggled$$)($JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$zoomButton$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_autoToggleZoomButton$self$$.$onZoomButtonClick$()))
};
D.$DvtChartKeyboardHandler$$ = function $$DvtChartKeyboardHandler$$$($manager$$7$$, $chart$$234$$) {
  this.Init($manager$$7$$, $chart$$234$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtChartKeyboardHandler");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartKeyboardHandler$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($manager$$8$$, $chart$$235$$) {
  D.$DvtChartKeyboardHandler$$.$superclass$.Init.call(this, $manager$$8$$);
  this.$_chart$ = $chart$$235$$
};
D.$JSCompiler_prototypeAlias$$.$isSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$isSelectionEvent$$($event$$262$$) {
  return this.$isNavigationEvent$($event$$262$$) && !$event$$262$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$isMultiSelectEvent$ = function $$JSCompiler_prototypeAlias$$$$isMultiSelectEvent$$($event$$263$$) {
  return 32 == $event$$263$$.keyCode && $event$$263$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$processKeyDown$ = function $$JSCompiler_prototypeAlias$$$$processKeyDown$$($event$$264$$) {
  var $currentNavigable$$2_keyCode$$14_navigables$$4$$ = $event$$264$$.keyCode;
  if(9 == $currentNavigable$$2_keyCode$$14_navigables$$4$$) {
    if($currentNavigable$$2_keyCode$$14_navigables$$4$$ = this.$_eventManager$.$getFocus$()) {
      return $event$$264$$.preventDefault(), $currentNavigable$$2_keyCode$$14_navigables$$4$$
    }
    $currentNavigable$$2_keyCode$$14_navigables$$4$$ = D.$DvtChartEventUtils$$.$getKeyboardNavigables$(this.$_chart$);
    if(0 < $currentNavigable$$2_keyCode$$14_navigables$$4$$.length) {
      return $event$$264$$.preventDefault(), this.$getDefaultNavigable$($currentNavigable$$2_keyCode$$14_navigables$$4$$)
    }
  }else {
    27 == $currentNavigable$$2_keyCode$$14_navigables$$4$$ ? this.$_eventManager$.$cancelMarquee$($event$$264$$) : 33 == $currentNavigable$$2_keyCode$$14_navigables$$4$$ ? ($event$$264$$.ctrlKey || $event$$264$$.shiftKey || D.$DvtChartTypeUtils$$.$isBLAC$(this.$_chart$) ? this.$_eventManager$.$panBy$(-0.25, 0) : this.$_eventManager$.$panBy$(0, -0.25), $event$$264$$.preventDefault()) : 34 == $currentNavigable$$2_keyCode$$14_navigables$$4$$ ? ($event$$264$$.ctrlKey || $event$$264$$.shiftKey || D.$DvtChartTypeUtils$$.$isBLAC$(this.$_chart$) ? 
    this.$_eventManager$.$panBy$(0.25, 0) : this.$_eventManager$.$panBy$(0, 0.25), $event$$264$$.preventDefault()) : (0,D.$DvtKeyboardEvent$isEquals$$)($event$$264$$) || (0,D.$DvtKeyboardEvent$isPlus$$)($event$$264$$) ? this.$_eventManager$.$zoomBy$(1.5) : ((0,D.$DvtKeyboardEvent$isMinus$$)($event$$264$$) || (0,D.$DvtKeyboardEvent$isUnderscore$$)($event$$264$$)) && this.$_eventManager$.$zoomBy$(1 / 1.5)
  }
  return D.$DvtChartKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$264$$)
};
D.$JSCompiler_prototypeAlias$$.$getDefaultNavigable$ = function $$JSCompiler_prototypeAlias$$$$getDefaultNavigable$$($navigableItems$$2$$) {
  if(!$navigableItems$$2$$ || 0 >= $navigableItems$$2$$.length) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $isPie$$ = D.$DvtChartTypeUtils$$.$isPie$(this.$_chart$), $defaultNavigable$$, $defaultSeries$$, $defaultGroup$$, $navigable$$4$$, $i$$322$$ = 0;$i$$322$$ < $navigableItems$$2$$.length;$i$$322$$++) {
    $navigable$$4$$ = $navigableItems$$2$$[$i$$322$$], !$defaultNavigable$$ || $navigable$$4$$.$getSeriesIndex$() < $defaultSeries$$ ? ($defaultNavigable$$ = $navigable$$4$$, $defaultSeries$$ = $navigable$$4$$.$getSeriesIndex$(), $isPie$$ || ($defaultGroup$$ = $navigable$$4$$.$getGroupIndex$())) : !$isPie$$ && $navigable$$4$$.$getGroupIndex$() < $defaultGroup$$ && ($defaultNavigable$$ = $navigable$$4$$, $defaultSeries$$ = $navigable$$4$$.$getSeriesIndex$(), $defaultGroup$$ = $navigable$$4$$.$getGroupIndex$())
  }
  return $defaultNavigable$$
};
D.$DvtSeriesRolloverHandler$$ = function $$DvtSeriesRolloverHandler$$$($chart$$) {
  this.Init($chart$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtSeriesRolloverHandler$$, D.$DvtObj$$, "DvtSeriesRolloverHandler");
D.$DvtSeriesRolloverHandler$$.prototype.Init = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtSeriesRolloverHandler$$.prototype.$processMouseOver$ = function $$DvtSeriesRolloverHandler$$$$$processMouseOver$$($obj$$28$$) {
  this.$ProcessEvent$($obj$$28$$, D.$JSCompiler_alias_TRUE$$)
};
D.$DvtSeriesRolloverHandler$$.prototype.$processMouseOut$ = function $$DvtSeriesRolloverHandler$$$$$processMouseOut$$($obj$$29$$) {
  this.$ProcessEvent$($obj$$29$$, D.$JSCompiler_alias_FALSE$$)
};
D.$DvtSeriesRolloverHandler$$.prototype.$ProcessEvent$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtChartSeriesRolloverHandler$$ = function $$DvtChartSeriesRolloverHandler$$$($chart$$12$$, $handler$$20$$) {
  this.Init($chart$$12$$, $handler$$20$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartSeriesRolloverHandler$$, D.$DvtSeriesRolloverHandler$$, "DvtChartSeriesRolloverHandler");
D.$DvtChartSeriesRolloverHandler$$.prototype.Init = function $$DvtChartSeriesRolloverHandler$$$$Init$($chart$$13$$, $handler$$21$$) {
  D.$DvtChartSeriesRolloverHandler$$.$superclass$.Init.call(this);
  this.$_chart$ = $chart$$13$$;
  this.$EventHandler$ = $handler$$21$$
};
D.$DvtChartSeriesRolloverHandler$$.prototype.$ProcessEvent$ = function $$DvtChartSeriesRolloverHandler$$$$$ProcessEvent$$($obj$$106$$, $bOver$$10$$) {
  this.$_rolloverHandled$ = D.$JSCompiler_alias_FALSE$$;
  if($obj$$106$$) {
    var $rolloverContainer$$ = this.$_chart$, $eventType$$9$$ = $bOver$$10$$ ? "categoryRollOver" : "categoryRollOut", $categories$$4$$ = $obj$$106$$.$getCategories$ ? $obj$$106$$.$getCategories$() : D.$JSCompiler_alias_NULL$$;
    $categories$$4$$ && 0 < $categories$$4$$.length && (this.$EventHandler$.$FireEvent$(new D.$DvtCategoryRolloverEvent$$($eventType$$9$$, $categories$$4$$), $rolloverContainer$$), this.$_rolloverHandled$ = D.$JSCompiler_alias_TRUE$$)
  }
};
D.$DvtChartObjPeer$$ = function $$DvtChartObjPeer$$$($chart$$227$$, $displayables$$8$$, $seriesIndex$$70$$, $groupIndex$$36$$, $dataPos$$3$$) {
  this.Init($chart$$227$$, $displayables$$8$$, $seriesIndex$$70$$, $groupIndex$$36$$, $dataPos$$3$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartObjPeer$$, D.$DvtObj$$, "DvtChartObjPeer");
D.$DvtChartObjPeer$$.prototype.Init = function $$DvtChartObjPeer$$$$Init$($chart$$228_dataItem$$26_i$$315_index$$90$$, $displayables$$9$$, $seriesIndex$$71$$, $groupIndex$$37$$, $dataPos$$4_seriesItem$$28$$) {
  this.$_chart$ = $chart$$228_dataItem$$26_i$$315_index$$90$$;
  this.$_displayables$ = $displayables$$9$$;
  this.$_group$ = this.$_series$ = D.$JSCompiler_alias_NULL$$;
  this.$_dataPos$ = $dataPos$$4_seriesItem$$28$$;
  this.$_bundle$ = $chart$$228_dataItem$$26_i$$315_index$$90$$.$getBundle$();
  this.$_seriesIndex$ = (0,window.isNaN)($seriesIndex$$71$$) ? -1 : $seriesIndex$$71$$;
  0 <= this.$_seriesIndex$ && (this.$_series$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$228_dataItem$$26_i$$315_index$$90$$, this.$_seriesIndex$));
  this.$_groupIndex$ = (0,window.isNaN)($groupIndex$$37$$) ? -1 : $groupIndex$$37$$;
  0 <= this.$_groupIndex$ && (this.$_group$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$228_dataItem$$26_i$$315_index$$90$$, this.$_groupIndex$));
  if($dataPos$$4_seriesItem$$28$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$228_dataItem$$26_i$$315_index$$90$$, $seriesIndex$$71$$)) {
    this.$_action$ = $dataPos$$4_seriesItem$$28$$.action, this.$_stampId$ = $dataPos$$4_seriesItem$$28$$._id
  }
  this.$_categories$ = this.$_series$ != D.$JSCompiler_alias_NULL$$ ? [this.$_series$] : [];
  if($chart$$228_dataItem$$26_i$$315_index$$90$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$228_dataItem$$26_i$$315_index$$90$$, $seriesIndex$$71$$, $groupIndex$$37$$)) {
    $chart$$228_dataItem$$26_i$$315_index$$90$$.categories && (this.$_categories$ = this.$_categories$.concat($chart$$228_dataItem$$26_i$$315_index$$90$$.categories)), this.$_dataItemId$ = $chart$$228_dataItem$$26_i$$315_index$$90$$.id, this.$_action$ = $chart$$228_dataItem$$26_i$$315_index$$90$$.action, this.$_stampId$ = $chart$$228_dataItem$$26_i$$315_index$$90$$._id
  }
  if(this.$_action$) {
    for($chart$$228_dataItem$$26_i$$315_index$$90$$ = 0;$chart$$228_dataItem$$26_i$$315_index$$90$$ < this.$_displayables$.length;$chart$$228_dataItem$$26_i$$315_index$$90$$++) {
      this.$_displayables$[$chart$$228_dataItem$$26_i$$315_index$$90$$].setCursor("pointer")
    }
  }
  this.$_isSelected$ = D.$JSCompiler_alias_FALSE$$;
  for($chart$$228_dataItem$$26_i$$315_index$$90$$ = 0;$chart$$228_dataItem$$26_i$$315_index$$90$$ < $displayables$$9$$.length;$chart$$228_dataItem$$26_i$$315_index$$90$$++) {
    (0,D.$JSCompiler_StaticMethods_setAriaRole$$)($displayables$$9$$[$chart$$228_dataItem$$26_i$$315_index$$90$$], "img"), this.$_updateAriaLabel$($displayables$$9$$[$chart$$228_dataItem$$26_i$$315_index$$90$$])
  }
};
D.$DvtChartObjPeer$associate$$ = function $$DvtChartObjPeer$associate$$$($displayable$$27$$, $chart$$229$$, $identObj_seriesIndex$$72$$, $groupIndex$$38$$, $dataPos$$5$$) {
  $displayable$$27$$ && ($identObj_seriesIndex$$72$$ = new D.$DvtChartObjPeer$$($chart$$229$$, [$displayable$$27$$], $identObj_seriesIndex$$72$$, $groupIndex$$38$$, $dataPos$$5$$), $chart$$229$$.$registerObject$($identObj_seriesIndex$$72$$), $chart$$229$$.$getEventManager$().$associate$($displayable$$27$$, $identObj_seriesIndex$$72$$))
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return this.$_series$ != D.$JSCompiler_alias_NULL$$ && this.$_group$ != D.$JSCompiler_alias_NULL$$ ? new D.$DvtChartDataItem$$(this.$_dataItemId$, this.$_series$, this.$_group$) : this.$_series$ != D.$JSCompiler_alias_NULL$$ ? this.$_series$ : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getSeries$ = (0,D.$JSCompiler_get$$)("$_series$");
D.$JSCompiler_prototypeAlias$$.$getSeriesIndex$ = (0,D.$JSCompiler_get$$)("$_seriesIndex$");
D.$JSCompiler_prototypeAlias$$.$getGroup$ = (0,D.$JSCompiler_get$$)("$_group$");
D.$JSCompiler_prototypeAlias$$.$getGroupIndex$ = (0,D.$JSCompiler_get$$)("$_groupIndex$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$getChart$ = (0,D.$JSCompiler_get$$)("$_chart$");
D.$JSCompiler_prototypeAlias$$.$getSeriesType$ = function $$JSCompiler_prototypeAlias$$$$getSeriesType$$() {
  return D.$DvtChartStyleUtils$$.$getSeriesType$(this.$_chart$, this.$_seriesIndex$)
};
D.$JSCompiler_prototypeAlias$$.$getSeriesItem$ = function $$JSCompiler_prototypeAlias$$$$getSeriesItem$$() {
  return D.$DvtChartDataUtils$$.$getSeriesItem$(this.$_chart$, this.$_seriesIndex$)
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($target$$59$$) {
  return D.$DvtChartTooltipUtils$$.$getDatatip$($target$$59$$, this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$)
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return D.$DvtChartTooltipUtils$$.$getDatatipColor$(this.$_chart$, this.$_seriesIndex$, this.$_groupIndex$)
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$_chart$.$isSelectionSupported$() && this.$_series$ != D.$JSCompiler_alias_NULL$$ && this.$_group$ != D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_isSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$) {
  this.$_isSelected$ = $bSelected$$;
  for(var $i$$316$$ = 0;$i$$316$$ < this.$_displayables$.length;$i$$316$$++) {
    this.$_displayables$[$i$$316$$].$setSelected$ && (this.$_displayables$[$i$$316$$].$setSelected$($bSelected$$), this.$_updateAriaLabel$(this.$_displayables$[$i$$316$$]))
  }
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  for(var $i$$317$$ = 0;$i$$317$$ < this.$_displayables$.length;$i$$317$$++) {
    this.$_displayables$[$i$$317$$].$showHoverEffect$ && this.$_displayables$[$i$$317$$].$showHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  for(var $i$$318$$ = 0;$i$$318$$ < this.$_displayables$.length;$i$$318$$++) {
    this.$_displayables$[$i$$318$$].$hideHoverEffect$ && this.$_displayables$[$i$$318$$].$hideHoverEffect$()
  }
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$() {
  return this.$_chart$.$getShowPopupBehaviors$(this.$_stampId$)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = (0,D.$JSCompiler_get$$)("$_displayables$");
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$3$$ = [];
  this.$isSelectable$() && $states$$3$$.push((0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$_bundle$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getDatatip$(), $states$$3$$, this.$_bundle$)
};
D.$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$($displayable$$28$$) {
  (0,D.$DvtAgent$deferAriaCreation$$)() || (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($displayable$$28$$, "label", this.$getAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = (0,D.$JSCompiler_get$$)("$_categories$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($chart$$inline_3505_event$$260$$) {
  var $chart$$230_keyCode$$12_seriesIndex$$inline_3507_seriesIndex$$inline_9904$$, $groupIndex$$inline_9905_next$$12_nextGroupIndex$$inline_3511_nextObj$$inline_3518$$;
  $chart$$230_keyCode$$12_seriesIndex$$inline_3507_seriesIndex$$inline_9904$$ = $chart$$inline_3505_event$$260$$.keyCode;
  if($chart$$inline_3505_event$$260$$.type == D.$DvtMouseEvent$CLICK$$ || 32 == $chart$$230_keyCode$$12_seriesIndex$$inline_3507_seriesIndex$$inline_9904$$ && $chart$$inline_3505_event$$260$$.ctrlKey) {
    return this
  }
  $chart$$230_keyCode$$12_seriesIndex$$inline_3507_seriesIndex$$inline_9904$$ = this.$_chart$;
  for(var $chartObjs_groupIndex$$inline_3508$$ = $chart$$230_keyCode$$12_seriesIndex$$inline_3507_seriesIndex$$inline_9904$$.$getObjects$(), $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$ = [], $groupCount$$inline_3509_i$$319_nextSeriesIndex$$inline_9899_nextValue$$inline_9888$$ = 0;$groupCount$$inline_3509_i$$319_nextSeriesIndex$$inline_9899_nextValue$$inline_9888$$ < $chartObjs_groupIndex$$inline_3508$$.length;$groupCount$$inline_3509_i$$319_nextSeriesIndex$$inline_9899_nextValue$$inline_9888$$++) {
    (0,D.$JSCompiler_StaticMethods_isNavigable$$)($chartObjs_groupIndex$$inline_3508$$[$groupCount$$inline_3509_i$$319_nextSeriesIndex$$inline_9899_nextValue$$inline_9888$$]) && $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$.push($chartObjs_groupIndex$$inline_3508$$[$groupCount$$inline_3509_i$$319_nextSeriesIndex$$inline_9899_nextValue$$inline_9888$$])
  }
  if(D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$230_keyCode$$12_seriesIndex$$inline_3507_seriesIndex$$inline_9904$$)) {
    $groupIndex$$inline_9905_next$$12_nextGroupIndex$$inline_3511_nextObj$$inline_3518$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $chart$$inline_3505_event$$260$$, $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$)
  }else {
    if(D.$DvtChartTypeUtils$$.$isLineArea$($chart$$230_keyCode$$12_seriesIndex$$inline_3507_seriesIndex$$inline_9904$$) || D.$DvtChartTypeUtils$$.$isStacked$($chart$$230_keyCode$$12_seriesIndex$$inline_3507_seriesIndex$$inline_9904$$)) {
      $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$ = $chart$$inline_3505_event$$260$$.keyCode;
      $chart$$inline_3505_event$$260$$ = this.$_chart$;
      var $context$$inline_3506_isRTL$$inline_3514_itemValue$$inline_9891$$ = $chart$$inline_3505_event$$260$$.$_context$;
      $chart$$230_keyCode$$12_seriesIndex$$inline_3507_seriesIndex$$inline_9904$$ = this.$getSeriesIndex$();
      var $chartObjs_groupIndex$$inline_3508$$ = this.$getGroupIndex$(), $groupCount$$inline_3509_i$$319_nextSeriesIndex$$inline_9899_nextValue$$inline_9888$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$inline_3505_event$$260$$), $currentValue$$inline_9897_nextSeriesIndex$$inline_3510_seriesCount$$inline_9886$$, $i$$inline_9900_isHoriz$$inline_3512_nextSeriesIndex$$inline_9889_seriesCount$$inline_9896$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$inline_3505_event$$260$$), $i$$inline_9890_isPolar$$inline_3513_itemValue$$inline_9901$$ = 
      D.$DvtChartTypeUtils$$.$isPolar$($chart$$inline_3505_event$$260$$), $context$$inline_3506_isRTL$$inline_3514_itemValue$$inline_9891$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$inline_3506_isRTL$$inline_3514_itemValue$$inline_9891$$), $isDown$$inline_3515$$ = $i$$inline_9900_isHoriz$$inline_3512_nextSeriesIndex$$inline_9889_seriesCount$$inline_9896$$ ? $context$$inline_3506_isRTL$$inline_3514_itemValue$$inline_9891$$ ? 39 == $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$ : 
      37 == $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$ : 40 == $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$, $isLeft$$inline_3516$$ = $i$$inline_9900_isHoriz$$inline_3512_nextSeriesIndex$$inline_9889_seriesCount$$inline_9896$$ ? 38 == $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$ : $context$$inline_3506_isRTL$$inline_3514_itemValue$$inline_9891$$ ? 39 == $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$ : 
      37 == $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$, $isRight$$inline_3517$$ = $i$$inline_9900_isHoriz$$inline_3512_nextSeriesIndex$$inline_9889_seriesCount$$inline_9896$$ ? 40 == $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$ : $context$$inline_3506_isRTL$$inline_3514_itemValue$$inline_9891$$ ? 37 == $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$ : 39 == $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$;
      if($i$$inline_9900_isHoriz$$inline_3512_nextSeriesIndex$$inline_9889_seriesCount$$inline_9896$$ ? $context$$inline_3506_isRTL$$inline_3514_itemValue$$inline_9891$$ ? 37 == $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$ : 39 == $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$ : 38 == $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$) {
        $groupIndex$$inline_9905_next$$12_nextGroupIndex$$inline_3511_nextObj$$inline_3518$$ = $chartObjs_groupIndex$$inline_3508$$;
        $currentValue$$inline_9897_nextSeriesIndex$$inline_3510_seriesCount$$inline_9886$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$inline_3505_event$$260$$);
        $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_3505_event$$260$$, $chart$$230_keyCode$$12_seriesIndex$$inline_3507_seriesIndex$$inline_9904$$, $chartObjs_groupIndex$$inline_3508$$);
        $i$$inline_9900_isHoriz$$inline_3512_nextSeriesIndex$$inline_9889_seriesCount$$inline_9896$$ = $groupCount$$inline_3509_i$$319_nextSeriesIndex$$inline_9899_nextValue$$inline_9888$$ = D.$JSCompiler_alias_NULL$$;
        for($i$$inline_9890_isPolar$$inline_3513_itemValue$$inline_9901$$ = 0;$i$$inline_9890_isPolar$$inline_3513_itemValue$$inline_9901$$ < $currentValue$$inline_9897_nextSeriesIndex$$inline_3510_seriesCount$$inline_9886$$;$i$$inline_9890_isPolar$$inline_3513_itemValue$$inline_9901$$++) {
          if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$inline_3505_event$$260$$, $i$$inline_9890_isPolar$$inline_3513_itemValue$$inline_9901$$) && ($context$$inline_3506_isRTL$$inline_3514_itemValue$$inline_9891$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_3505_event$$260$$, $i$$inline_9890_isPolar$$inline_3513_itemValue$$inline_9901$$, $chartObjs_groupIndex$$inline_3508$$), $context$$inline_3506_isRTL$$inline_3514_itemValue$$inline_9891$$ > $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$ || 
          $context$$inline_3506_isRTL$$inline_3514_itemValue$$inline_9891$$ == $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$ && $i$$inline_9890_isPolar$$inline_3513_itemValue$$inline_9901$$ > $chart$$230_keyCode$$12_seriesIndex$$inline_3507_seriesIndex$$inline_9904$$)) {
            if($groupCount$$inline_3509_i$$319_nextSeriesIndex$$inline_9899_nextValue$$inline_9888$$ !== D.$JSCompiler_alias_NULL$$ && $context$$inline_3506_isRTL$$inline_3514_itemValue$$inline_9891$$ < $groupCount$$inline_3509_i$$319_nextSeriesIndex$$inline_9899_nextValue$$inline_9888$$ || $groupCount$$inline_3509_i$$319_nextSeriesIndex$$inline_9899_nextValue$$inline_9888$$ == D.$JSCompiler_alias_NULL$$) {
              $groupCount$$inline_3509_i$$319_nextSeriesIndex$$inline_9899_nextValue$$inline_9888$$ = $context$$inline_3506_isRTL$$inline_3514_itemValue$$inline_9891$$, $i$$inline_9900_isHoriz$$inline_3512_nextSeriesIndex$$inline_9889_seriesCount$$inline_9896$$ = $i$$inline_9890_isPolar$$inline_3513_itemValue$$inline_9901$$
            }
          }
        }
        $currentValue$$inline_9897_nextSeriesIndex$$inline_3510_seriesCount$$inline_9886$$ = $i$$inline_9900_isHoriz$$inline_3512_nextSeriesIndex$$inline_9889_seriesCount$$inline_9896$$
      }else {
        if($isDown$$inline_3515$$) {
          $groupIndex$$inline_9905_next$$12_nextGroupIndex$$inline_3511_nextObj$$inline_3518$$ = $chartObjs_groupIndex$$inline_3508$$;
          $i$$inline_9900_isHoriz$$inline_3512_nextSeriesIndex$$inline_9889_seriesCount$$inline_9896$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$inline_3505_event$$260$$);
          $currentValue$$inline_9897_nextSeriesIndex$$inline_3510_seriesCount$$inline_9886$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_3505_event$$260$$, $chart$$230_keyCode$$12_seriesIndex$$inline_3507_seriesIndex$$inline_9904$$, $chartObjs_groupIndex$$inline_3508$$);
          $groupCount$$inline_3509_i$$319_nextSeriesIndex$$inline_9899_nextValue$$inline_9888$$ = $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$ = D.$JSCompiler_alias_NULL$$;
          for($i$$inline_9900_isHoriz$$inline_3512_nextSeriesIndex$$inline_9889_seriesCount$$inline_9896$$ -= 1;0 <= $i$$inline_9900_isHoriz$$inline_3512_nextSeriesIndex$$inline_9889_seriesCount$$inline_9896$$;$i$$inline_9900_isHoriz$$inline_3512_nextSeriesIndex$$inline_9889_seriesCount$$inline_9896$$--) {
            if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$inline_3505_event$$260$$, $i$$inline_9900_isHoriz$$inline_3512_nextSeriesIndex$$inline_9889_seriesCount$$inline_9896$$) && ($i$$inline_9890_isPolar$$inline_3513_itemValue$$inline_9901$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$inline_3505_event$$260$$, $i$$inline_9900_isHoriz$$inline_3512_nextSeriesIndex$$inline_9889_seriesCount$$inline_9896$$, $chartObjs_groupIndex$$inline_3508$$), $i$$inline_9890_isPolar$$inline_3513_itemValue$$inline_9901$$ < 
            $currentValue$$inline_9897_nextSeriesIndex$$inline_3510_seriesCount$$inline_9886$$ || $i$$inline_9890_isPolar$$inline_3513_itemValue$$inline_9901$$ == $currentValue$$inline_9897_nextSeriesIndex$$inline_3510_seriesCount$$inline_9886$$ && $i$$inline_9900_isHoriz$$inline_3512_nextSeriesIndex$$inline_9889_seriesCount$$inline_9896$$ < $chart$$230_keyCode$$12_seriesIndex$$inline_3507_seriesIndex$$inline_9904$$)) {
              if($currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$ !== D.$JSCompiler_alias_NULL$$ && $i$$inline_9890_isPolar$$inline_3513_itemValue$$inline_9901$$ > $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$ || $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$ == D.$JSCompiler_alias_NULL$$) {
                $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$ = $i$$inline_9890_isPolar$$inline_3513_itemValue$$inline_9901$$, $groupCount$$inline_3509_i$$319_nextSeriesIndex$$inline_9899_nextValue$$inline_9888$$ = $i$$inline_9900_isHoriz$$inline_3512_nextSeriesIndex$$inline_9889_seriesCount$$inline_9896$$
              }
            }
          }
          $currentValue$$inline_9897_nextSeriesIndex$$inline_3510_seriesCount$$inline_9886$$ = $groupCount$$inline_3509_i$$319_nextSeriesIndex$$inline_9899_nextValue$$inline_9888$$
        }else {
          $isRight$$inline_3517$$ ? ($currentValue$$inline_9897_nextSeriesIndex$$inline_3510_seriesCount$$inline_9886$$ = $chart$$230_keyCode$$12_seriesIndex$$inline_3507_seriesIndex$$inline_9904$$, $groupIndex$$inline_9905_next$$12_nextGroupIndex$$inline_3511_nextObj$$inline_3518$$ = $chartObjs_groupIndex$$inline_3508$$ + 1, $i$$inline_9890_isPolar$$inline_3513_itemValue$$inline_9901$$ && $groupIndex$$inline_9905_next$$12_nextGroupIndex$$inline_3511_nextObj$$inline_3518$$ >= $groupCount$$inline_3509_i$$319_nextSeriesIndex$$inline_9899_nextValue$$inline_9888$$ && 
          ($groupIndex$$inline_9905_next$$12_nextGroupIndex$$inline_3511_nextObj$$inline_3518$$ = 0)) : $isLeft$$inline_3516$$ && ($currentValue$$inline_9897_nextSeriesIndex$$inline_3510_seriesCount$$inline_9886$$ = $chart$$230_keyCode$$12_seriesIndex$$inline_3507_seriesIndex$$inline_9904$$, $groupIndex$$inline_9905_next$$12_nextGroupIndex$$inline_3511_nextObj$$inline_3518$$ = $chartObjs_groupIndex$$inline_3508$$ - 1, $i$$inline_9890_isPolar$$inline_3513_itemValue$$inline_9901$$ && 0 > $groupIndex$$inline_9905_next$$12_nextGroupIndex$$inline_3511_nextObj$$inline_3518$$ && 
          ($groupIndex$$inline_9905_next$$12_nextGroupIndex$$inline_3511_nextObj$$inline_3518$$ = $groupCount$$inline_3509_i$$319_nextSeriesIndex$$inline_9899_nextValue$$inline_9888$$ - 1))
        }
      }
      a: {
        $chart$$230_keyCode$$12_seriesIndex$$inline_3507_seriesIndex$$inline_9904$$ = $currentValue$$inline_9897_nextSeriesIndex$$inline_3510_seriesCount$$inline_9886$$;
        for(window.i = 0;window.i < $chart$$inline_3505_event$$260$$.$_peers$.length;window.i++) {
          if($chart$$inline_3505_event$$260$$.$_peers$[window.i].$getSeriesIndex$() == $chart$$230_keyCode$$12_seriesIndex$$inline_3507_seriesIndex$$inline_9904$$ && $chart$$inline_3505_event$$260$$.$_peers$[window.i].$getGroupIndex$() == $groupIndex$$inline_9905_next$$12_nextGroupIndex$$inline_3511_nextObj$$inline_3518$$) {
            $groupIndex$$inline_9905_next$$12_nextGroupIndex$$inline_3511_nextObj$$inline_3518$$ = $chart$$inline_3505_event$$260$$.$_peers$[window.i];
            break a
          }
        }
        $groupIndex$$inline_9905_next$$12_nextGroupIndex$$inline_3511_nextObj$$inline_3518$$ = D.$JSCompiler_alias_NULL$$
      }
      $groupIndex$$inline_9905_next$$12_nextGroupIndex$$inline_3511_nextObj$$inline_3518$$ = $groupIndex$$inline_9905_next$$12_nextGroupIndex$$inline_3511_nextObj$$inline_3518$$ && (0,D.$JSCompiler_StaticMethods_isNavigable$$)($groupIndex$$inline_9905_next$$12_nextGroupIndex$$inline_3511_nextObj$$inline_3518$$) ? $groupIndex$$inline_9905_next$$12_nextGroupIndex$$inline_3511_nextObj$$inline_3518$$ : this
    }else {
      if(D.$DvtChartTypeUtils$$.$isFunnel$($chart$$230_keyCode$$12_seriesIndex$$inline_3507_seriesIndex$$inline_9904$$) && (38 == $chart$$inline_3505_event$$260$$.keyCode || 40 == $chart$$inline_3505_event$$260$$.keyCode)) {
        $chart$$inline_3505_event$$260$$.keyCode -= 1
      }
      $groupIndex$$inline_9905_next$$12_nextGroupIndex$$inline_3511_nextObj$$inline_3518$$ = (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $chart$$inline_3505_event$$260$$, $currentValue$$inline_9887_keyCode$$inline_3504_navigables$$3_nextValue$$inline_9898$$)
    }
  }
  return $groupIndex$$inline_9905_next$$12_nextGroupIndex$$inline_3511_nextObj$$inline_3518$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$10$$) {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getDimensions$($targetCoordinateSpace$$10$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  (0,D.$JSCompiler_StaticMethods_isNavigable$$)(this) && (this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$, this.$showHoverEffect$())
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  (0,D.$JSCompiler_StaticMethods_isNavigable$$)(this) && (this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$, this.$hideHoverEffect$())
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_StaticMethods_isNavigable$$ = function $$JSCompiler_StaticMethods_isNavigable$$$($JSCompiler_StaticMethods_isNavigable$self$$) {
  return-1 != $JSCompiler_StaticMethods_isNavigable$self$$.$getGroupIndex$() && -1 != $JSCompiler_StaticMethods_isNavigable$self$$.$getSeriesIndex$()
};
D.$DvtChartDataItem$$ = function $$DvtChartDataItem$$$($id$$97$$, $series$$22$$, $group$$24$$) {
  this.Init($id$$97$$, $series$$22$$, $group$$24$$)
};
(0,D.$goog$exportSymbol$$)("DvtChartDataItem", D.$DvtChartDataItem$$);
D.$DvtObj$$.$createSubclass$(D.$DvtChartDataItem$$, D.$DvtObj$$, "DvtChartDataItem");
D.$DvtChartDataItem$$.prototype.Init = function $$DvtChartDataItem$$$$Init$($id$$98$$, $series$$23$$, $group$$25$$) {
  this.$_id$ = $id$$98$$;
  this.$_series$ = $series$$23$$;
  this.$_group$ = $group$$25$$
};
D.$DvtChartDataItem$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtChartDataItem$$.prototype.getId = D.$DvtChartDataItem$$.prototype.getId;
D.$DvtChartDataItem$$.prototype.$getSeries$ = (0,D.$JSCompiler_get$$)("$_series$");
D.$DvtChartDataItem$$.prototype.getSeries = D.$DvtChartDataItem$$.prototype.$getSeries$;
D.$DvtChartDataItem$$.prototype.$getGroup$ = (0,D.$JSCompiler_get$$)("$_group$");
D.$DvtChartDataItem$$.prototype.getGroup = D.$DvtChartDataItem$$.prototype.$getGroup$;
D.$DvtChartDataItem$$.prototype.$equals$ = function $$DvtChartDataItem$$$$$equals$$($dataItem$$29$$) {
  return $dataItem$$29$$ instanceof D.$DvtChartDataItem$$ ? this.$_group$ === $dataItem$$29$$.$getGroup$() && this.$_series$ === $dataItem$$29$$.$getSeries$() : D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDefaults$$ = function $$DvtChartDefaults$$$() {
  this.Init({skyros:D.$DvtChartDefaults$VERSION_1$$, alta:D.$DvtChartDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtChartDefaults");
D.$DvtChartDefaults$SKIN_ALTA$$ = {skin:"alta", title:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 13px; color: #252525;")}, subtitle:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #252525;")}, footnote:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;")}, styleDefaults:{seriesEffect:"color", colors:D.$DvtCSSStyle$COLORS_ALTA$$, sliceLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), 
dataLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}};
D.$DvtChartDefaults$VERSION_1$$ = {skin:"skyros", emptyText:D.$JSCompiler_alias_NULL$$, type:"bar", stack:"off", orientation:"vertical", polarGridShape:"circle", selection:"none", hideAndShowBehavior:"none", zoomAndScroll:"off", hoverBehavior:"none", sorting:"off", otherThreshold:0, animationOnDataChange:"none", animationOnDisplay:"none", timeAxisType:"disabled", __sparkBarSpacing:"subpixel", __spark:D.$JSCompiler_alias_FALSE$$, dataCursor:"auto", dataCursorBehavior:"auto", title:{style:new D.$DvtCSSStyle$$("font-size: 12px; color: #003d5b; font-weight: bold"), 
hAlign:"start"}, subtitle:{style:new D.$DvtCSSStyle$$("font-size: 12px; color: #003d5b;")}, footnote:{style:new D.$DvtCSSStyle$$("font-size: 10px; color: #333333;"), hAlign:"start"}, titleSeparator:{upperColor:"#74779A", lowerColor:"#FFFFFF", rendered:"off"}, xAxis:{baselineScaling:"zero", tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, minorTick:{rendered:"off"}, axisLine:{rendered:"on"}, layout:{gapRatio:1}}, yAxis:{baselineScaling:"zero", tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, 
minorTick:{rendered:"off"}, axisLine:{rendered:"on"}, layout:{gapRatio:1}}, y2Axis:{baselineScaling:"zero", tickLabel:{rendered:"on"}, majorTick:{rendered:"auto"}, minorTick:{rendered:"off"}, axisLine:{rendered:"on"}, layout:{gapRatio:1}, alignTickMarks:"on"}, plotArea:{backgroundColor:D.$JSCompiler_alias_NULL$$}, legend:{position:"auto", rendered:"on", layout:{gapRatio:1}}, overview:{rendered:"off"}, styleDefaults:{colors:D.$DvtCSSStyle$COLORS_SKYROS$$, patterns:"smallDiagonalRight smallChecker smallDiagonalLeft smallTriangle smallCrosshatch smallDiamond largeDiagonalRight largeChecker largeDiagonalLeft largeTriangle largeCrosshatch largeDiamond".split(" "), 
shapes:"square circle diamond plus triangleDown triangleUp".split(" "), seriesEffect:"gradient", threeDEffect:"off", groupTooltipType:"auto", seriesTooltipType:"auto", valueTooltipType:"auto", animationDuration:1E3, animationIndicators:"all", animationUpColor:"#0099FF", animationDownColor:"#FF3300", lineStyle:"solid", lineType:"auto", markerDisplayed:"auto", markerColor:D.$JSCompiler_alias_NULL$$, markerShape:"auto", markerSize:8, marqueeColor:"rgba(255,255,255,0.5)", marqueeBorderColor:"rgba(0,0,0,0.2)", 
pieFeelerColor:"#BAC5D6", selectedInnerColor:"#ffffff", selectedOuterColor:"#5a5a5a", sliceLabelPosition:"auto", sliceLabelStyle:new D.$DvtCSSStyle$$("font-size: 11px;"), sliceLabelType:"percent", otherColor:"#4b4b4b", dataLabelStyle:new D.$DvtCSSStyle$$("font-size: 11px;"), dataLabelPosition:"auto", x1Format:{}, y1Format:{}, y2Format:{}, zFormat:{}, _defaultSliceLabelColor:"#333333", _scrollbarHeight:3, _scrollbarTrackColor:"#F0F0F0", _scrollbarHandleColor:"#9E9E9E"}, layout:{gapRatio:D.$JSCompiler_alias_NULL$$, 
outerGapWidth:10, outerGapHeight:8, titleSubtitleGapWidth:14, titleSubtitleGapHeight:4, titleSeparatorGap:6, titlePlotAreaGap:10, footnoteGap:7, verticalAxisGap:6, legendMaxSize:0.3, legendGap:10, axisMaxSize:0.33, tickLabelGapHeight:5, tickLabelGapWidth:7}, _resources:{}};
D.$DvtChartDefaults$getGapSize$$ = function $$DvtChartDefaults$getGapSize$$$($chart$$241$$, $defaultSize$$) {
  return window.Math.ceil($defaultSize$$ * $chart$$241$$.$getGapRatio$())
};
D.$DvtChartAxisUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartAxisUtils$$, D.$DvtObj$$, "DvtChartAxisUtils");
D.$DvtChartAxisUtils$$.$getXAxisPosition$ = function $$DvtChartAxisUtils$$$$getXAxisPosition$$($chart$$14$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$14$$) ? "tangential" : D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$14$$) ? (0,D.$DvtAgent$isRightToLeft$$)($chart$$14$$.$_context$) ? "right" : "left" : "bottom"
};
D.$DvtChartAxisUtils$$.$getYAxisPosition$ = function $$DvtChartAxisUtils$$$$getYAxisPosition$$($chart$$15$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$15$$) ? "radial" : D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$15$$) ? "bottom" : (0,D.$DvtAgent$isRightToLeft$$)($chart$$15$$.$_context$) ? "right" : "left"
};
D.$DvtChartAxisUtils$$.$getY2AxisPosition$ = function $$DvtChartAxisUtils$$$$getY2AxisPosition$$($chart$$16$$) {
  return D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$16$$) ? "top" : (0,D.$DvtAgent$isRightToLeft$$)($chart$$16$$.$_context$) ? "left" : "right"
};
D.$DvtChartAxisUtils$$.$hasTimeAxis$ = function $$DvtChartAxisUtils$$$$hasTimeAxis$$($chart$$17$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$17$$) ? "disabled" != $chart$$17$$.$getOptions$().timeAxisType : D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartAxisUtils$$.$hasGroupAxis$ = function $$DvtChartAxisUtils$$$$hasGroupAxis$$($chart$$18$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$18$$) ? "disabled" == $chart$$18$$.$getOptions$().timeAxisType : D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartAxisUtils$$.$getAxisOffset$ = function $$DvtChartAxisUtils$$$$getAxisOffset$$($chart$$19$$) {
  return D.$DvtChartTypeUtils$$.$hasBarSeries$($chart$$19$$) || D.$DvtChartTypeUtils$$.$hasCenteredSeries$($chart$$19$$) || D.$DvtChartTypeUtils$$.$isBLAC$($chart$$19$$) && 1 == D.$DvtChartDataUtils$$.$getGroupCount$($chart$$19$$) ? 0.5 : 0
};
D.$DvtChartAxisUtils$$.$isGridShifted$ = function $$DvtChartAxisUtils$$$$isGridShifted$$($chart$$20$$) {
  if(!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$20$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $seriesCount$$6$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$20$$), $i$$271$$ = 0;$i$$271$$ < $seriesCount$$6$$;$i$$271$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$20$$, $i$$271$$)) {
      var $seriesType$$2$$ = D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$20$$, $i$$271$$), $lineType$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$20$$, $i$$271$$);
      if("bar" != $seriesType$$2$$ && "centeredSegmented" != $lineType$$ && "centeredStepped" != $lineType$$) {
        return D.$JSCompiler_alias_FALSE$$
      }
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartAxisUtils$$.$isGridPolygonal$ = function $$DvtChartAxisUtils$$$$isGridPolygonal$$($chart$$21$$) {
  return!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$21$$) || D.$DvtChartTypeUtils$$.$hasBarSeries$($chart$$21$$) ? D.$JSCompiler_alias_FALSE$$ : "polygon" == $chart$$21$$.$getOptions$().polarGridShape
};
D.$DvtChartAxisUtils$$.$isAxisRendered$ = function $$DvtChartAxisUtils$$$$isAxisRendered$$($chart$$22$$, $type$$92$$) {
  if("y" == $type$$92$$ && D.$DvtChartTypeUtils$$.$hasY2DataOnly$($chart$$22$$) || "y2" == $type$$92$$ && !D.$DvtChartTypeUtils$$.$hasY2Data$($chart$$22$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $axisOptions_options$$72$$ = $chart$$22$$.$getOptions$(), $axisOptions_options$$72$$ = "x" == $type$$92$$ ? $axisOptions_options$$72$$.xAxis : "y" == $type$$92$$ ? $axisOptions_options$$72$$.yAxis : $axisOptions_options$$72$$.y2Axis;
  return"off" == $axisOptions_options$$72$$.rendered || "off" == $axisOptions_options$$72$$.tickLabel.rendered && !$axisOptions_options$$72$$.title ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartAxisUtils$$.$getTickLabelFontSize$ = function $$DvtChartAxisUtils$$$$getTickLabelFontSize$$($chart$$23$$, $type$$93$$) {
  var $options$$73$$ = $chart$$23$$.$getOptions$(), $tickLabelStyle$$ = ("x" == $type$$93$$ ? $options$$73$$.xAxis : "y" == $type$$93$$ ? $options$$73$$.yAxis : $options$$73$$.y2Axis).tickLabel.style;
  $tickLabelStyle$$ instanceof D.$DvtCSSStyle$$ || ($tickLabelStyle$$ = new D.$DvtCSSStyle$$($tickLabelStyle$$));
  (0,D.$JSCompiler_StaticMethods_mergeUnder$$)($tickLabelStyle$$, (0,D.$DvtAxis$getDefaults$$)($options$$73$$.skin).tickLabel.style);
  return(0,window.parseInt)($tickLabelStyle$$.$getStyle$("font-size"))
};
D.$DvtChartDataUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartDataUtils$$, D.$DvtObj$$, "DvtChartDataUtils");
D.$DvtChartDataUtils$$.$_TYPE_LABEL$ = "label";
D.$DvtChartDataUtils$$.$hasData$ = function $$DvtChartDataUtils$$$$hasData$$($chart$$104$$) {
  var $options$$100_seriesCount$$11$$ = $chart$$104$$.$getOptions$();
  if(!$options$$100_seriesCount$$11$$ || !$options$$100_seriesCount$$11$$.series || 1 > $options$$100_seriesCount$$11$$.series.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $options$$100_seriesCount$$11$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$104$$), $i$$293$$ = 0;$i$$293$$ < $options$$100_seriesCount$$11$$;$i$$293$$++) {
    var $seriesItem$$18$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$104$$, $i$$293$$);
    if($seriesItem$$18$$ && $seriesItem$$18$$.items && 1 <= $seriesItem$$18$$.items.length) {
      return D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$hasSeriesData$ = function $$DvtChartDataUtils$$$$hasSeriesData$$($chart$$105$$, $seriesIndex$$36$$) {
  var $dataItems$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$105$$, $seriesIndex$$36$$).items;
  if($dataItems$$) {
    for(var $i$$294$$ = 0;$i$$294$$ < $dataItems$$.length;$i$$294$$++) {
      if($dataItems$$[$i$$294$$] != D.$JSCompiler_alias_NULL$$) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$processDataObject$ = function $$DvtChartDataUtils$$$$processDataObject$$($chart$$106$$) {
  if(D.$DvtChartDataUtils$$.$hasData$($chart$$106$$)) {
    for(var $maxGroups$$ = 0, $arSeriesStyle_options$$101$$ = $chart$$106$$.$getSeriesStyleArray$(), $bundle$$7_seriesCount$$12$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$106$$), $group$$14_i$$295$$ = 0;$group$$14_i$$295$$ < $bundle$$7_seriesCount$$12$$;$group$$14_i$$295$$++) {
      var $series$$14_seriesItem$$20$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$106$$, $group$$14_i$$295$$);
      $series$$14_seriesItem$$20$$ != D.$JSCompiler_alias_NULL$$ && 0 > D.$DvtArrayUtils$$.$getIndex$($arSeriesStyle_options$$101$$, $series$$14_seriesItem$$20$$) && $arSeriesStyle_options$$101$$.push($series$$14_seriesItem$$20$$);
      if(($series$$14_seriesItem$$20$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$106$$, $group$$14_i$$295$$)) && $series$$14_seriesItem$$20$$.items && $series$$14_seriesItem$$20$$.items.length > $maxGroups$$) {
        $maxGroups$$ = $series$$14_seriesItem$$20$$.items.length
      }
      D.$DvtChartTypeUtils$$.$isFunnel$($chart$$106$$) && ($series$$14_seriesItem$$20$$.displayInLegend = "off")
    }
    $arSeriesStyle_options$$101$$ = $chart$$106$$.$getOptions$();
    $arSeriesStyle_options$$101$$.groups || ($arSeriesStyle_options$$101$$.groups = []);
    for($bundle$$7_seriesCount$$12$$ = $chart$$106$$.$getBundle$();$arSeriesStyle_options$$101$$.groups.length < $maxGroups$$;) {
      $group$$14_i$$295$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$7_seriesCount$$12$$, "DEFAULT_GROUP_NAME", $arSeriesStyle_options$$101$$.groups.length + 1), $arSeriesStyle_options$$101$$.groups.push($group$$14_i$$295$$)
    }
    D.$DvtChartTypeUtils$$.$isFunnel$($chart$$106$$) && ($arSeriesStyle_options$$101$$.styleDefaults.groupTooltipType = "none")
  }
};
D.$DvtChartDataUtils$$.$getSeriesCount$ = function $$DvtChartDataUtils$$$$getSeriesCount$$($chart$$107$$) {
  return $chart$$107$$.$getOptions$().series.length
};
D.$DvtChartDataUtils$$.$getSeries$ = function $$DvtChartDataUtils$$$$getSeries$$($chart$$108$$, $seriesIndex$$37$$) {
  var $seriesItem$$21$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$108$$, $seriesIndex$$37$$);
  return $seriesItem$$21$$ ? $seriesItem$$21$$.id ? $seriesItem$$21$$.id : $seriesItem$$21$$.name || "" == $seriesItem$$21$$.name ? $seriesItem$$21$$.name : (0,window.String)($seriesIndex$$37$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getSeriesLabel$ = function $$DvtChartDataUtils$$$$getSeriesLabel$$($chart$$109$$, $seriesIndex$$38$$) {
  var $seriesItem$$22$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$109$$, $seriesIndex$$38$$);
  return $seriesItem$$22$$ && ($seriesItem$$22$$.name || "" == $seriesItem$$22$$.name) ? $seriesItem$$22$$.name : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getSeriesIndex$ = function $$DvtChartDataUtils$$$$getSeriesIndex$$($chart$$110$$, $series$$15$$) {
  for(var $numSeries$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$110$$), $seriesIndex$$39$$ = 0;$seriesIndex$$39$$ < $numSeries$$;$seriesIndex$$39$$++) {
    if(D.$DvtChartDataUtils$$.$getSeries$($chart$$110$$, $seriesIndex$$39$$) == $series$$15$$) {
      return $seriesIndex$$39$$
    }
  }
  return-1
};
D.$DvtChartDataUtils$$.$getSeriesStyleIndex$ = function $$DvtChartDataUtils$$$$getSeriesStyleIndex$$($chart$$111$$, $series$$16$$) {
  return $series$$16$$ ? D.$DvtArrayUtils$$.$getIndex$($chart$$111$$.$getSeriesStyleArray$(), $series$$16$$) : D.$DvtChartDataUtils$$.$getSeriesIndex$($chart$$111$$, $series$$16$$)
};
D.$DvtChartDataUtils$$.$getSeriesItem$ = function $$DvtChartDataUtils$$$$getSeriesItem$$($chart$$112$$, $seriesIndex$$40$$) {
  if((0,window.isNaN)($seriesIndex$$40$$) || $seriesIndex$$40$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $options$$102$$ = $chart$$112$$.$getOptions$();
  if($options$$102$$.series && $options$$102$$.series.length > $seriesIndex$$40$$) {
    return $options$$102$$.series[$seriesIndex$$40$$]
  }
};
D.$DvtChartDataUtils$$.$getDataItem$ = function $$DvtChartDataUtils$$$$getDataItem$$($chart$$113_seriesItem$$23$$, $seriesIndex$$41$$, $groupIndex$$18$$) {
  if((0,window.isNaN)($groupIndex$$18$$) || $groupIndex$$18$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  if(($chart$$113_seriesItem$$23$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$113_seriesItem$$23$$, $seriesIndex$$41$$)) && $chart$$113_seriesItem$$23$$.items && 0 <= $groupIndex$$18$$ && $chart$$113_seriesItem$$23$$.items.length > $groupIndex$$18$$) {
    return $chart$$113_seriesItem$$23$$.items[$groupIndex$$18$$]
  }
};
D.$DvtChartDataUtils$$.$getGroupCount$ = function $$DvtChartDataUtils$$$$getGroupCount$$($chart$$114$$) {
  return $chart$$114$$.$getOptions$().groups.length
};
D.$DvtChartDataUtils$$.$getGroup$ = function $$DvtChartDataUtils$$$$getGroup$$($chart$$115$$, $groupIndex$$19$$) {
  var $group$$15_groupItems$$ = $chart$$115$$.$getOptions$().groups;
  return 0 <= $groupIndex$$19$$ && $groupIndex$$19$$ < $group$$15_groupItems$$.length && ($group$$15_groupItems$$ = $group$$15_groupItems$$[$groupIndex$$19$$]) ? $group$$15_groupItems$$.id ? $group$$15_groupItems$$.id : $group$$15_groupItems$$.name || "" == $group$$15_groupItems$$.name ? $group$$15_groupItems$$.name : $group$$15_groupItems$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getGroupIndex$ = function $$DvtChartDataUtils$$$$getGroupIndex$$($chart$$116$$, $group$$16$$) {
  return D.$DvtChartDataUtils$$.$getGroups$($chart$$116$$).indexOf($group$$16$$)
};
D.$DvtChartDataUtils$$.$getGroupLabel$ = function $$DvtChartDataUtils$$$$getGroupLabel$$($chart$$117$$, $groupIndex$$20$$) {
  var $group$$17_groupItems$$1$$ = $chart$$117$$.$getOptions$().groups;
  return 0 <= $groupIndex$$20$$ && $groupIndex$$20$$ < $group$$17_groupItems$$1$$.length && ($group$$17_groupItems$$1$$ = $group$$17_groupItems$$1$$[$groupIndex$$20$$]) ? $group$$17_groupItems$$1$$.name ? $group$$17_groupItems$$1$$.name : $group$$17_groupItems$$1$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getGroups$ = function $$DvtChartDataUtils$$$$getGroups$$($chart$$118$$) {
  for(var $groupCount$$ = $chart$$118$$.$getOptions$().groups.length, $groups$$12$$ = [], $groupIndex$$21$$ = 0;$groupIndex$$21$$ < $groupCount$$;$groupIndex$$21$$++) {
    $groups$$12$$.push(D.$DvtChartDataUtils$$.$getGroup$($chart$$118$$, $groupIndex$$21$$))
  }
  return $groups$$12$$
};
D.$DvtChartDataUtils$$.getValue = function $$DvtChartDataUtils$$$getValue$($chart$$119_dataItem$$16$$, $seriesIndex$$42$$, $groupIndex$$22$$) {
  $chart$$119_dataItem$$16$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$119_dataItem$$16$$, $seriesIndex$$42$$, $groupIndex$$22$$);
  if($chart$$119_dataItem$$16$$ != D.$JSCompiler_alias_NULL$$) {
    if((0,window.isNaN)($chart$$119_dataItem$$16$$)) {
      if($chart$$119_dataItem$$16$$.value != D.$JSCompiler_alias_NULL$$) {
        return $chart$$119_dataItem$$16$$.value
      }
      if($chart$$119_dataItem$$16$$.y != D.$JSCompiler_alias_NULL$$) {
        return $chart$$119_dataItem$$16$$.y
      }
    }else {
      return $chart$$119_dataItem$$16$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartDataUtils$$.$getCumulativeValue$ = function $$DvtChartDataUtils$$$$getCumulativeValue$$($chart$$120$$, $seriesIndex$$43$$, $groupIndex$$23$$, $bIncludeHiddenSeries$$) {
  if(D.$DvtChartTypeUtils$$.$isStacked$($chart$$120$$)) {
    for(var $seriesType$$4$$ = D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$120$$, $seriesIndex$$43$$), $bAssignedToY2$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$120$$, $seriesIndex$$43$$), $total$$8$$ = 0, $i$$296$$ = 0;$i$$296$$ <= $seriesIndex$$43$$;$i$$296$$++) {
      if(($bIncludeHiddenSeries$$ || D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$120$$, $i$$296$$)) && $seriesType$$4$$ == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$120$$, $i$$296$$) && $bAssignedToY2$$ == D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$120$$, $i$$296$$)) {
        var $groupValue$$ = D.$DvtChartDataUtils$$.getValue($chart$$120$$, $i$$296$$, $groupIndex$$23$$), $total$$8$$ = $total$$8$$ + ($groupValue$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($groupValue$$) ? 0 : $groupValue$$)
      }
    }
    return $total$$8$$
  }
  return D.$DvtChartDataUtils$$.getValue($chart$$120$$, $seriesIndex$$43$$, $groupIndex$$23$$)
};
D.$DvtChartDataUtils$$.$getXValue$ = function $$DvtChartDataUtils$$$$getXValue$$($chart$$121$$, $dataItem$$17_seriesIndex$$44_xVal$$, $groupIndex$$24$$) {
  if(D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$121$$)) {
    return $groupIndex$$24$$
  }
  $dataItem$$17_seriesIndex$$44_xVal$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$121$$, $dataItem$$17_seriesIndex$$44_xVal$$, $groupIndex$$24$$);
  if($dataItem$$17_seriesIndex$$44_xVal$$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $dataItem$$17_seriesIndex$$44_xVal$$ = $dataItem$$17_seriesIndex$$44_xVal$$.x;
  return(0,window.isNaN)($dataItem$$17_seriesIndex$$44_xVal$$) ? D.$DvtChartDataUtils$$.$getGroupLabel$($chart$$121$$, $groupIndex$$24$$) : $dataItem$$17_seriesIndex$$44_xVal$$
};
D.$DvtChartDataUtils$$.$getTargetValue$ = function $$DvtChartDataUtils$$$$getTargetValue$$($chart$$122$$, $seriesIndex$$45$$) {
  var $dataItem$$18$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$122$$, $seriesIndex$$45$$, 0);
  return!(0,window.isNaN)($dataItem$$18$$) || $dataItem$$18$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : $dataItem$$18$$.targetValue
};
D.$DvtChartDataUtils$$.$isXInViewport$ = function $$DvtChartDataUtils$$$$isXInViewport$$($chart$$123_minMax$$1$$, $seriesIndex$$46_xVal$$1$$, $groupIndex$$25$$) {
  $seriesIndex$$46_xVal$$1$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$123_minMax$$1$$, $seriesIndex$$46_xVal$$1$$, $groupIndex$$25$$);
  if((0,window.isNaN)($seriesIndex$$46_xVal$$1$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  $chart$$123_minMax$$1$$ = D.$DvtChartDataUtils$$.$_getXAxisViewportMinMax$($chart$$123_minMax$$1$$);
  return $chart$$123_minMax$$1$$.min != D.$JSCompiler_alias_NULL$$ && $seriesIndex$$46_xVal$$1$$ < $chart$$123_minMax$$1$$.min || $chart$$123_minMax$$1$$.max != D.$JSCompiler_alias_NULL$$ && $seriesIndex$$46_xVal$$1$$ > $chart$$123_minMax$$1$$.max ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartDataUtils$$.$_computeYAlongLine$ = function $$DvtChartDataUtils$$$$_computeYAlongLine$$($x1$$9$$, $y1$$11$$, $x2$$8$$, $y2$$10$$, $X$$) {
  return $y1$$11$$ + ($y2$$10$$ - $y1$$11$$) * ($X$$ - $x1$$9$$) / ($x2$$8$$ - $x1$$9$$)
};
D.$DvtChartDataUtils$$.$getViewportEdgeYValues$ = function $$DvtChartDataUtils$$$$getViewportEdgeYValues$$($chart$$124$$, $seriesIndex$$47$$) {
  var $seriesData$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$124$$, $seriesIndex$$47$$).items;
  if(!$seriesData$$) {
    return{min:D.$JSCompiler_alias_NULL$$, max:D.$JSCompiler_alias_NULL$$}
  }
  for(var $bIncludeHiddenSeries$$1$$ = "withoutRescale" == D.$DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$124$$), $max$$8_minMax$$2$$ = D.$DvtChartDataUtils$$.$_getXAxisViewportMinMax$($chart$$124$$), $min$$8$$ = $max$$8_minMax$$2$$.min, $max$$8_minMax$$2$$ = $max$$8_minMax$$2$$.max, $x$$109$$, $y$$90$$, $prevX$$1$$, $prevY$$1$$, $yMin$$1$$, $yMax$$1$$, $groupIndex$$26$$ = 0;$groupIndex$$26$$ < $seriesData$$.length;$groupIndex$$26$$++) {
    if($bIncludeHiddenSeries$$1$$ || D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$124$$, $seriesIndex$$47$$, $groupIndex$$26$$)) {
      $x$$109$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$124$$, $seriesIndex$$47$$, $groupIndex$$26$$), $y$$90$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$124$$, $seriesIndex$$47$$, $groupIndex$$26$$, $bIncludeHiddenSeries$$1$$), $prevX$$1$$ != D.$JSCompiler_alias_NULL$$ && ($min$$8$$ != D.$JSCompiler_alias_NULL$$ && ($min$$8$$ > $prevX$$1$$ && $min$$8$$ < $x$$109$$) && ($yMin$$1$$ = D.$DvtChartDataUtils$$.$_computeYAlongLine$($prevX$$1$$, $prevY$$1$$, $x$$109$$, $y$$90$$, $min$$8$$)), 
      $max$$8_minMax$$2$$ != D.$JSCompiler_alias_NULL$$ && ($max$$8_minMax$$2$$ > $prevX$$1$$ && $max$$8_minMax$$2$$ < $x$$109$$) && ($yMax$$1$$ = D.$DvtChartDataUtils$$.$_computeYAlongLine$($prevX$$1$$, $prevY$$1$$, $x$$109$$, $y$$90$$, $max$$8_minMax$$2$$))), $prevX$$1$$ = $x$$109$$, $prevY$$1$$ = $y$$90$$
    }
  }
  return{min:$yMin$$1$$, max:$yMax$$1$$}
};
D.$DvtChartDataUtils$$.$_getXAxisViewportMinMax$ = function $$DvtChartDataUtils$$$$_getXAxisViewportMinMax$$($chart$$125$$) {
  var $options$$103$$ = $chart$$125$$.$getOptions$().xAxis, $isGroupAxis$$ = D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$125$$), $min$$9$$ = D.$JSCompiler_alias_NULL$$, $min$$9$$ = $options$$103$$.viewportMin != D.$JSCompiler_alias_NULL$$ ? $options$$103$$.viewportMin : $options$$103$$.viewportStartGroup != D.$JSCompiler_alias_NULL$$ ? $isGroupAxis$$ ? D.$DvtChartDataUtils$$.$getGroupIndex$($chart$$125$$, $options$$103$$.viewportStartGroup) : $options$$103$$.viewportStartGroup : $options$$103$$.min, 
  $max$$9$$ = D.$JSCompiler_alias_NULL$$, $max$$9$$ = $options$$103$$.viewportMax != D.$JSCompiler_alias_NULL$$ ? $options$$103$$.viewportMax : $options$$103$$.viewportEndGroup != D.$JSCompiler_alias_NULL$$ ? $isGroupAxis$$ ? D.$DvtChartDataUtils$$.$getGroupIndex$($chart$$125$$, $options$$103$$.viewportEndGroup) : $options$$103$$.viewportEndGroup : $options$$103$$.max;
  return{min:$min$$9$$, max:$max$$9$$}
};
D.$DvtChartDataUtils$$.$getMinMaxValue$ = function $$DvtChartDataUtils$$$$getMinMaxValue$$($chart$$126$$, $type$$96$$, $limitToViewport$$) {
  var $isY2Value$$ = "y2" == $type$$96$$;
  $isY2Value$$ && ($type$$96$$ = "y");
  var $isYValue$$ = "y" == $type$$96$$;
  if(!$isYValue$$ || !D.$DvtChartTypeUtils$$.$isBLAC$($chart$$126$$)) {
    $limitToViewport$$ = D.$JSCompiler_alias_FALSE$$
  }
  for(var $bIncludeHiddenSeries$$2$$ = "withoutRescale" == D.$DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$126$$), $isBubble$$ = "bubble" == $chart$$126$$.$getType$(), $maxValue$$5$$ = -window.Infinity, $minValue$$5$$ = window.Infinity, $options$$104$$ = $chart$$126$$.$getOptions$(), $seriesCount$$13$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$126$$), $seriesIndex$$48$$ = 0;$seriesIndex$$48$$ < $seriesCount$$13$$;$seriesIndex$$48$$++) {
    var $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$126$$, $seriesIndex$$48$$);
    if($bIncludeHiddenSeries$$2$$ || D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$126$$, $seriesIndex$$48$$)) {
      var $groupIndex$$27_i$$297_isY2Series$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$126$$, $seriesIndex$$48$$);
      if(!($isYValue$$ && $isY2Value$$ != $groupIndex$$27_i$$297_isY2Series$$) && ($edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ = $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.items)) {
        for($groupIndex$$27_i$$297_isY2Series$$ = 0;$groupIndex$$27_i$$297_isY2Series$$ < $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.length;$groupIndex$$27_i$$297_isY2Series$$++) {
          if($bIncludeHiddenSeries$$2$$ || D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$126$$, $seriesIndex$$48$$, $groupIndex$$27_i$$297_isY2Series$$)) {
            "object" != typeof $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$[$groupIndex$$27_i$$297_isY2Series$$] && ($edgeValues_refObjects_seriesData$$1_seriesItem$$25$$[$groupIndex$$27_i$$297_isY2Series$$] = {y:$edgeValues_refObjects_seriesData$$1_seriesItem$$25$$[$groupIndex$$27_i$$297_isY2Series$$]});
            var $data$$77_items$$14$$ = $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$[$groupIndex$$27_i$$297_isY2Series$$], $timeAxisGroupLabel_value$$75$$;
            $isYValue$$ ? $timeAxisGroupLabel_value$$75$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$126$$, $seriesIndex$$48$$, $groupIndex$$27_i$$297_isY2Series$$, $bIncludeHiddenSeries$$2$$) : $data$$77_items$$14$$ != D.$JSCompiler_alias_NULL$$ && ($options$$104$$.timeAxisType && ("enabled" == $options$$104$$.timeAxisType && $data$$77_items$$14$$.x == D.$JSCompiler_alias_NULL$$) && ($timeAxisGroupLabel_value$$75$$ = D.$DvtChartDataUtils$$.$getGroupLabel$($chart$$126$$, $groupIndex$$27_i$$297_isY2Series$$), 
            (0,window.isNaN)($timeAxisGroupLabel_value$$75$$) || ($data$$77_items$$14$$.x = $timeAxisGroupLabel_value$$75$$)), $timeAxisGroupLabel_value$$75$$ = $data$$77_items$$14$$[$type$$96$$]);
            if((!$limitToViewport$$ || D.$DvtChartDataUtils$$.$isXInViewport$($chart$$126$$, $seriesIndex$$48$$, $groupIndex$$27_i$$297_isY2Series$$)) && !(0,window.isNaN)($timeAxisGroupLabel_value$$75$$)) {
              var $j$$61_radius$$10$$ = 0;
              $isBubble$$ && $data$$77_items$$14$$.markerSize && ($isYValue$$ ? $j$$61_radius$$10$$ = $data$$77_items$$14$$._yAxisRadius : "x" == $type$$96$$ && ($j$$61_radius$$10$$ = $data$$77_items$$14$$._xAxisRadius));
              $maxValue$$5$$ = window.Math.max($maxValue$$5$$, $timeAxisGroupLabel_value$$75$$ + $j$$61_radius$$10$$);
              $minValue$$5$$ = window.Math.min($minValue$$5$$, $timeAxisGroupLabel_value$$75$$ - $j$$61_radius$$10$$)
            }
          }
        }
        $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ = D.$JSCompiler_alias_NULL$$;
        "x" == $type$$96$$ ? $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ = D.$DvtChartRefObjUtils$$.$getXAxisObjects$($chart$$126$$) : "y" == $type$$96$$ ? $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ = D.$DvtChartRefObjUtils$$.$getYAxisObjects$($chart$$126$$) : "y2" == $type$$96$$ && ($edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ = D.$DvtChartRefObjUtils$$.$getY2AxisObjects$($chart$$126$$));
        if($edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ != D.$JSCompiler_alias_NULL$$) {
          for($groupIndex$$27_i$$297_isY2Series$$ = 0;$groupIndex$$27_i$$297_isY2Series$$ < $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.length;$groupIndex$$27_i$$297_isY2Series$$++) {
            if($data$$77_items$$14$$ = $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$[$groupIndex$$27_i$$297_isY2Series$$].items, $data$$77_items$$14$$ != D.$JSCompiler_alias_NULL$$) {
              for($j$$61_radius$$10$$ = 0;$j$$61_radius$$10$$ < $data$$77_items$$14$$.length;$j$$61_radius$$10$$++) {
                if($data$$77_items$$14$$[$j$$61_radius$$10$$] != D.$JSCompiler_alias_NULL$$) {
                  var $min$$10$$ = $data$$77_items$$14$$[$j$$61_radius$$10$$].min, $max$$10$$ = $data$$77_items$$14$$[$j$$61_radius$$10$$].max, $val$$29$$ = (0,window.isNaN)($data$$77_items$$14$$[$j$$61_radius$$10$$]) ? $data$$77_items$$14$$[$j$$61_radius$$10$$].value : $data$$77_items$$14$$[$j$$61_radius$$10$$];
                  $min$$10$$ != D.$JSCompiler_alias_NULL$$ && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $min$$10$$), $maxValue$$5$$ = window.Math.max($maxValue$$5$$, $min$$10$$));
                  $max$$10$$ != D.$JSCompiler_alias_NULL$$ && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $max$$10$$), $maxValue$$5$$ = window.Math.max($maxValue$$5$$, $max$$10$$));
                  $val$$29$$ != D.$JSCompiler_alias_NULL$$ && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $val$$29$$), $maxValue$$5$$ = window.Math.max($maxValue$$5$$, $val$$29$$))
                }
              }
            }
          }
        }
        $limitToViewport$$ && ($edgeValues_refObjects_seriesData$$1_seriesItem$$25$$ = D.$DvtChartDataUtils$$.$getViewportEdgeYValues$($chart$$126$$, $seriesIndex$$48$$), $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.min != D.$JSCompiler_alias_NULL$$ && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.min), $maxValue$$5$$ = window.Math.max($maxValue$$5$$, $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.min)), $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.max != 
        D.$JSCompiler_alias_NULL$$ && ($minValue$$5$$ = window.Math.min($minValue$$5$$, $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.max), $maxValue$$5$$ = window.Math.max($maxValue$$5$$, $edgeValues_refObjects_seriesData$$1_seriesItem$$25$$.max)))
      }
    }
  }
  return{min:$minValue$$5$$, max:$maxValue$$5$$}
};
D.$DvtChartDataUtils$$.$isAssignedToY2$ = function $$DvtChartDataUtils$$$$isAssignedToY2$$($chart$$127$$, $seriesIndex$$49$$) {
  var $seriesItem$$26$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$127$$, $seriesIndex$$49$$);
  return $seriesItem$$26$$ && "on" == $seriesItem$$26$$.assignedToY2 && D.$DvtChartTypeUtils$$.$isDualY$($chart$$127$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$hasMixedFrequency$ = function $$DvtChartDataUtils$$$$hasMixedFrequency$$($chart$$128$$) {
  return"mixedFrequency" == $chart$$128$$.$getOptions$().timeAxisType
};
D.$DvtChartDataUtils$$.$getInitialSelection$ = function $$DvtChartDataUtils$$$$getInitialSelection$$($chart$$129_peers$$4$$) {
  var $selection$$14$$ = $chart$$129_peers$$4$$.$getOptions$().selectedItems;
  $selection$$14$$ || ($selection$$14$$ = []);
  $chart$$129_peers$$4$$ = $chart$$129_peers$$4$$.$getObjects$();
  for(var $i$$298$$ = 0;$i$$298$$ < $selection$$14$$.length;$i$$298$$++) {
    var $id$$91$$ = $selection$$14$$[$i$$298$$].id;
    if($id$$91$$ && (!$selection$$14$$[$i$$298$$].series || !$selection$$14$$[$i$$298$$].group)) {
      for(var $j$$62$$ = 0;$j$$62$$ < $chart$$129_peers$$4$$.length;$j$$62$$++) {
        var $peer$$17$$ = $chart$$129_peers$$4$$[$j$$62$$];
        if($id$$91$$ == $peer$$17$$.$_dataItemId$) {
          $selection$$14$$[$i$$298$$].series = $peer$$17$$.$getSeries$();
          $selection$$14$$[$i$$298$$].group = $peer$$17$$.$getGroup$();
          break
        }
      }
    }
  }
  return $selection$$14$$
};
D.$DvtChartDataUtils$$.$getCurrentSelection$ = function $$DvtChartDataUtils$$$$getCurrentSelection$$($chart$$130_handler$$23_selectedIds$$3$$) {
  var $selection$$15$$ = [];
  if($chart$$130_handler$$23_selectedIds$$3$$ = $chart$$130_handler$$23_selectedIds$$3$$.$getSelectionHandler$()) {
    $chart$$130_handler$$23_selectedIds$$3$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($chart$$130_handler$$23_selectedIds$$3$$);
    for(var $i$$299$$ = 0;$i$$299$$ < $chart$$130_handler$$23_selectedIds$$3$$.length;$i$$299$$++) {
      var $selectedId$$2$$ = $chart$$130_handler$$23_selectedIds$$3$$[$i$$299$$];
      $selection$$15$$.push({series:$selectedId$$2$$.$getSeries$(), group:$selectedId$$2$$.$getGroup$(), id:$selectedId$$2$$.getId()})
    }
  }
  return $selection$$15$$
};
D.$DvtChartDataUtils$$.$isDataSelected$ = function $$DvtChartDataUtils$$$$isDataSelected$$($chart$$131_group$$18$$, $series$$17_seriesIndex$$50$$, $groupIndex$$28_i$$300$$) {
  var $handler$$24_selectedIds$$4$$ = $chart$$131_group$$18$$.$getSelectionHandler$();
  $series$$17_seriesIndex$$50$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$131_group$$18$$, $series$$17_seriesIndex$$50$$);
  $chart$$131_group$$18$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$131_group$$18$$, $groupIndex$$28_i$$300$$);
  if($handler$$24_selectedIds$$4$$ && $series$$17_seriesIndex$$50$$ != D.$JSCompiler_alias_NULL$$ && $chart$$131_group$$18$$ != D.$JSCompiler_alias_NULL$$) {
    $handler$$24_selectedIds$$4$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($handler$$24_selectedIds$$4$$);
    for($groupIndex$$28_i$$300$$ = 0;$groupIndex$$28_i$$300$$ < $handler$$24_selectedIds$$4$$.length;$groupIndex$$28_i$$300$$++) {
      var $selectedId$$3$$ = $handler$$24_selectedIds$$4$$[$groupIndex$$28_i$$300$$];
      if($selectedId$$3$$.$getSeries$() == $series$$17_seriesIndex$$50$$ && $selectedId$$3$$.$getGroup$() == $chart$$131_group$$18$$) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartDataUtils$$.$getDataLabel$ = function $$DvtChartDataUtils$$$$getDataLabel$$($axis$$10_chart$$132$$, $seriesIndex$$51$$, $groupIndex$$29_label$$30$$) {
  var $dataItem$$19_options$$105$$ = D.$DvtChartDataUtils$$.$getDataItem$($axis$$10_chart$$132$$, $seriesIndex$$51$$, $groupIndex$$29_label$$30$$);
  if($dataItem$$19_options$$105$$.label) {
    $groupIndex$$29_label$$30$$ = (0,window.parseFloat)($dataItem$$19_options$$105$$.label);
    if((0,window.isNaN)($groupIndex$$29_label$$30$$)) {
      return $dataItem$$19_options$$105$$.label
    }
    var $dataItem$$19_options$$105$$ = $axis$$10_chart$$132$$.$getOptions$(), $min$$11$$, $max$$11$$;
    if($axis$$10_chart$$132$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($axis$$10_chart$$132$$, $seriesIndex$$51$$) && $axis$$10_chart$$132$$.$y2Axis$ ? $axis$$10_chart$$132$$.$y2Axis$ : $axis$$10_chart$$132$$.$yAxis$) {
      $min$$11$$ = $axis$$10_chart$$132$$.$getGlobalMin$(), $max$$11$$ = $axis$$10_chart$$132$$.$getGlobalMax$(), window.majorIncrement = $axis$$10_chart$$132$$.$getMajorIncrement$()
    }
    return $groupIndex$$29_label$$30$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($dataItem$$19_options$$105$$.valueFormats, D.$DvtChartDataUtils$$.$_TYPE_LABEL$, $groupIndex$$29_label$$30$$, $min$$11$$, $max$$11$$, window.majorIncrement)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartEventUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartEventUtils$$, D.$DvtObj$$, "DvtChartEventUtils");
D.$DvtChartEventUtils$$.$getHideAndShowBehavior$ = function $$DvtChartEventUtils$$$$getHideAndShowBehavior$$($chart$$76$$) {
  return $chart$$76$$.$getOptions$().hideAndShowBehavior
};
D.$DvtChartEventUtils$$.$getHoverBehavior$ = function $$DvtChartEventUtils$$$$getHoverBehavior$$($chart$$77$$) {
  return $chart$$77$$.$getOptions$().hoverBehavior
};
D.$DvtChartEventUtils$$.$setVisibility$ = function $$DvtChartEventUtils$$$$setVisibility$$($chart$$78_options$$97$$, $category$$8$$, $visibility$$) {
  var $hiddenCategories$$4_i$$283_seriesItem$$15$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$78_options$$97$$, D.$DvtChartDataUtils$$.$getSeriesIndex$($chart$$78_options$$97$$, $category$$8$$));
  if($category$$8$$ == D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ && D.$DvtPieChartUtils$$.$getOtherSliceVisibility$($chart$$78_options$$97$$) !== $visibility$$) {
    D.$DvtPieChartUtils$$.$setOtherSliceVisibility$($chart$$78_options$$97$$, $visibility$$)
  }else {
    if($hiddenCategories$$4_i$$283_seriesItem$$15$$ && $hiddenCategories$$4_i$$283_seriesItem$$15$$.visibility !== $visibility$$) {
      $hiddenCategories$$4_i$$283_seriesItem$$15$$.visibility = $visibility$$
    }else {
      if(!D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$78_options$$97$$)) {
        return D.$JSCompiler_alias_FALSE$$
      }
      $hiddenCategories$$4_i$$283_seriesItem$$15$$ = D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$78_options$$97$$);
      "hidden" == $visibility$$ ? $hiddenCategories$$4_i$$283_seriesItem$$15$$.push($category$$8$$) : $hiddenCategories$$4_i$$283_seriesItem$$15$$.splice(D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$4_i$$283_seriesItem$$15$$, $category$$8$$), 1);
      if(($chart$$78_options$$97$$ = $chart$$78_options$$97$$.$getOptions$()) && $chart$$78_options$$97$$.legend && $chart$$78_options$$97$$.legend.sections) {
        for($hiddenCategories$$4_i$$283_seriesItem$$15$$ = 0;$hiddenCategories$$4_i$$283_seriesItem$$15$$ < $chart$$78_options$$97$$.legend.sections.length;$hiddenCategories$$4_i$$283_seriesItem$$15$$++) {
          var $dataSection$$ = $chart$$78_options$$97$$.legend.sections[$hiddenCategories$$4_i$$283_seriesItem$$15$$];
          if($dataSection$$ && $dataSection$$.items) {
            for(var $j$$58$$ = 0;$j$$58$$ < $dataSection$$.items.length;$j$$58$$++) {
              $dataSection$$.items[$j$$58$$].id == $category$$8$$ && ($dataSection$$.items[$j$$58$$].categoryVisibility = $visibility$$)
            }
          }
        }
      }
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartEventUtils$$.$isScrollable$ = function $$DvtChartEventUtils$$$$isScrollable$$($chart$$79$$) {
  return"off" != $chart$$79$$.$getOptions$().zoomAndScroll
};
D.$DvtChartEventUtils$$.$isZoomable$ = function $$DvtChartEventUtils$$$$isZoomable$$($chart$$80_zs$$) {
  $chart$$80_zs$$ = $chart$$80_zs$$.$getOptions$().zoomAndScroll;
  return"live" == $chart$$80_zs$$ || "delayed" == $chart$$80_zs$$
};
D.$DvtChartEventUtils$$.$isLiveScroll$ = function $$DvtChartEventUtils$$$$isLiveScroll$$($chart$$81_zs$$1$$) {
  $chart$$81_zs$$1$$ = $chart$$81_zs$$1$$.$getOptions$().zoomAndScroll;
  return"live" == $chart$$81_zs$$1$$ || "liveScrollOnly" == $chart$$81_zs$$1$$
};
D.$DvtChartEventUtils$$.$isDelayedScroll$ = function $$DvtChartEventUtils$$$$isDelayedScroll$$($chart$$82_zs$$2$$) {
  $chart$$82_zs$$2$$ = $chart$$82_zs$$2$$.$getOptions$().zoomAndScroll;
  return"delayed" == $chart$$82_zs$$2$$ || "delayedScrollOnly" == $chart$$82_zs$$2$$
};
D.$DvtChartEventUtils$$.$processIds$ = function $$DvtChartEventUtils$$$$processIds$$($chart$$83$$, $selection$$13$$) {
  for(var $ret$$58$$ = [], $i$$284$$ = 0;$i$$284$$ < $selection$$13$$.length;$i$$284$$++) {
    var $item$$22_otherItems$$ = $selection$$13$$[$i$$284$$];
    $item$$22_otherItems$$.$getSeries$() == D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ ? ($item$$22_otherItems$$ = D.$DvtPieChartUtils$$.$getOtherSliceIds$($chart$$83$$), $ret$$58$$ = $ret$$58$$.concat($item$$22_otherItems$$)) : $ret$$58$$.push($item$$22_otherItems$$)
  }
  return $ret$$58$$
};
D.$DvtChartEventUtils$$.$adjustBounds$ = function $$DvtChartEventUtils$$$$adjustBounds$$($event$$225$$) {
  $event$$225$$.x != D.$JSCompiler_alias_NULL$$ && ($event$$225$$.x -= 1);
  $event$$225$$.$w$ != D.$JSCompiler_alias_NULL$$ && ($event$$225$$.$w$ += 2);
  $event$$225$$.y != D.$JSCompiler_alias_NULL$$ && ($event$$225$$.y -= 1);
  $event$$225$$.$h$ != D.$JSCompiler_alias_NULL$$ && ($event$$225$$.$h$ += 2)
};
D.$DvtChartEventUtils$$.$getBoundedObjects$ = function $$DvtChartEventUtils$$$$getBoundedObjects$$($chart$$84$$, $event$$226$$) {
  for(var $peers$$1$$ = $chart$$84$$.$getObjects$(), $boundedPeers$$ = [], $i$$285$$ = 0;$i$$285$$ < $peers$$1$$.length;$i$$285$$++) {
    var $peer$$15$$ = $peers$$1$$[$i$$285$$], $dataPos$$ = $peer$$15$$.$_dataPos$;
    if($dataPos$$) {
      var $dataPos$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($chart$$84$$.$getPlotArea$(), $dataPos$$), $withinY$$ = $event$$226$$.y == D.$JSCompiler_alias_NULL$$ || $dataPos$$.y >= $event$$226$$.y && $dataPos$$.y <= $event$$226$$.y + $event$$226$$.$h$;
      ($event$$226$$.x == D.$JSCompiler_alias_NULL$$ || $dataPos$$.x >= $event$$226$$.x && $dataPos$$.x <= $event$$226$$.x + $event$$226$$.$w$) && $withinY$$ && $boundedPeers$$.push($peer$$15$$)
    }
  }
  return $boundedPeers$$
};
D.$DvtChartEventUtils$$.$getAxisBounds$ = function $$DvtChartEventUtils$$$$getAxisBounds$$($chart$$85$$, $event$$227_maxPt_xMinMax$$1$$, $limitExtent$$) {
  var $plotArea_yMinMax$$1$$ = $chart$$85$$.$getPlotArea$(), $coords$$3_minPt$$ = $plotArea_yMinMax$$1$$.$stageToLocal$(new D.$DvtPoint$$($event$$227_maxPt_xMinMax$$1$$.x, $event$$227_maxPt_xMinMax$$1$$.y));
  $event$$227_maxPt_xMinMax$$1$$ = $plotArea_yMinMax$$1$$.$stageToLocal$(new D.$DvtPoint$$($event$$227_maxPt_xMinMax$$1$$.x + $event$$227_maxPt_xMinMax$$1$$.$w$, $event$$227_maxPt_xMinMax$$1$$.y + $event$$227_maxPt_xMinMax$$1$$.$h$));
  $coords$$3_minPt$$ = D.$DvtChartEventUtils$$.$_convertToAxisCoord$($chart$$85$$, $coords$$3_minPt$$.x, $event$$227_maxPt_xMinMax$$1$$.x, $coords$$3_minPt$$.y, $event$$227_maxPt_xMinMax$$1$$.y);
  $event$$227_maxPt_xMinMax$$1$$ = {};
  var $plotArea_yMinMax$$1$$ = {}, $y2MinMax$$ = {}, $startEndGroup$$ = {};
  $chart$$85$$.$xAxis$ && ($event$$227_maxPt_xMinMax$$1$$ = D.$DvtChartEventUtils$$.$_getAxisMinMax$($chart$$85$$.$xAxis$, $coords$$3_minPt$$.$xMin$, $coords$$3_minPt$$.$xMax$, $limitExtent$$), $startEndGroup$$ = D.$DvtChartEventUtils$$.$getAxisStartEndGroup$($chart$$85$$.$xAxis$, $event$$227_maxPt_xMinMax$$1$$.min, $event$$227_maxPt_xMinMax$$1$$.max));
  $chart$$85$$.$yAxis$ && ($plotArea_yMinMax$$1$$ = D.$DvtChartEventUtils$$.$_getAxisMinMax$($chart$$85$$.$yAxis$, $coords$$3_minPt$$.$yMin$, $coords$$3_minPt$$.$yMax$, $limitExtent$$));
  $chart$$85$$.$y2Axis$ && ($y2MinMax$$ = D.$DvtChartEventUtils$$.$_getAxisMinMax$($chart$$85$$.$y2Axis$, $coords$$3_minPt$$.$yMin$, $coords$$3_minPt$$.$yMax$, $limitExtent$$));
  return{$xMin$:$event$$227_maxPt_xMinMax$$1$$.min, $xMax$:$event$$227_maxPt_xMinMax$$1$$.max, $yMin$:$plotArea_yMinMax$$1$$.min, $yMax$:$plotArea_yMinMax$$1$$.max, $y2Min$:$y2MinMax$$.min, $y2Max$:$y2MinMax$$.max, $startGroup$:$startEndGroup$$.$startGroup$, $endGroup$:$startEndGroup$$.$endGroup$}
};
D.$DvtChartEventUtils$$.$_getAxisMinMax$ = function $$DvtChartEventUtils$$$$_getAxisMinMax$$($axis$$6$$, $center$$7_min$$4_minCoord$$, $max$$4_maxCoord$$, $limitExtent$$1_minExtent$$) {
  $center$$7_min$$4_minCoord$$ = $axis$$6$$.$getUnboundedValueAt$($center$$7_min$$4_minCoord$$);
  $max$$4_maxCoord$$ = $axis$$6$$.$getUnboundedValueAt$($max$$4_maxCoord$$);
  return $limitExtent$$1_minExtent$$ ? ($limitExtent$$1_minExtent$$ = $axis$$6$$.$getMinimumExtent$(), $max$$4_maxCoord$$ - $center$$7_min$$4_minCoord$$ < $limitExtent$$1_minExtent$$ && ($center$$7_min$$4_minCoord$$ = ($max$$4_maxCoord$$ + $center$$7_min$$4_minCoord$$) / 2, $max$$4_maxCoord$$ = $center$$7_min$$4_minCoord$$ + $limitExtent$$1_minExtent$$ / 2, $center$$7_min$$4_minCoord$$ -= $limitExtent$$1_minExtent$$ / 2), D.$DvtChartEventUtils$$.$_limitToGlobal$($axis$$6$$, $center$$7_min$$4_minCoord$$, 
  $max$$4_maxCoord$$)) : {min:$center$$7_min$$4_minCoord$$, max:$max$$4_maxCoord$$}
};
D.$DvtChartEventUtils$$.$getAxisBoundsByDelta$ = function $$DvtChartEventUtils$$$$getAxisBoundsByDelta$$($chart$$86$$, $deltas_xMinDelta$$, $xMaxDelta_xMinMax$$2$$, $yMinDelta_yMinMax$$2$$, $y2MinMax$$1_yMaxDelta$$) {
  $deltas_xMinDelta$$ = D.$DvtChartEventUtils$$.$_convertToAxisCoord$($chart$$86$$, $deltas_xMinDelta$$, $xMaxDelta_xMinMax$$2$$, $yMinDelta_yMinMax$$2$$, $y2MinMax$$1_yMaxDelta$$);
  $xMaxDelta_xMinMax$$2$$ = {};
  $yMinDelta_yMinMax$$2$$ = {};
  $y2MinMax$$1_yMaxDelta$$ = {};
  var $startEndGroup$$1$$ = {};
  $chart$$86$$.$xAxis$ && ($xMaxDelta_xMinMax$$2$$ = D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$86$$.$xAxis$, $deltas_xMinDelta$$.$xMin$, $deltas_xMinDelta$$.$xMax$), $startEndGroup$$1$$ = D.$DvtChartEventUtils$$.$getAxisStartEndGroup$($chart$$86$$.$xAxis$, $xMaxDelta_xMinMax$$2$$.min, $xMaxDelta_xMinMax$$2$$.max));
  $chart$$86$$.$yAxis$ && ($yMinDelta_yMinMax$$2$$ = D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$86$$.$yAxis$, $deltas_xMinDelta$$.$yMin$, $deltas_xMinDelta$$.$yMax$));
  $chart$$86$$.$y2Axis$ && ($y2MinMax$$1_yMaxDelta$$ = D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$($chart$$86$$.$y2Axis$, $deltas_xMinDelta$$.$yMin$, $deltas_xMinDelta$$.$yMax$));
  return{$xMin$:$xMaxDelta_xMinMax$$2$$.min, $xMax$:$xMaxDelta_xMinMax$$2$$.max, $yMin$:$yMinDelta_yMinMax$$2$$.min, $yMax$:$yMinDelta_yMinMax$$2$$.max, $y2Min$:$y2MinMax$$1_yMaxDelta$$.min, $y2Max$:$y2MinMax$$1_yMaxDelta$$.max, $startGroup$:$startEndGroup$$1$$.$startGroup$, $endGroup$:$startEndGroup$$1$$.$endGroup$}
};
D.$DvtChartEventUtils$$.$_getAxisMinMaxByDelta$ = function $$DvtChartEventUtils$$$$_getAxisMinMaxByDelta$$($axis$$7$$, $minDelta$$, $maxDelta$$) {
  var $min$$5$$ = $axis$$7$$.$getViewportMin$(), $max$$5$$ = $axis$$7$$.$getViewportMax$();
  if($maxDelta$$ == $minDelta$$ && (0,D.$JSCompiler_StaticMethods_isFullViewport$$)($axis$$7$$)) {
    return{min:$min$$5$$, max:$max$$5$$}
  }
  var $minDeltaVal$$ = $axis$$7$$.$getUnboundedValueAt$($minDelta$$) - $axis$$7$$.$getUnboundedValueAt$(0), $maxDeltaVal$$ = $axis$$7$$.$getUnboundedValueAt$($maxDelta$$) - $axis$$7$$.$getUnboundedValueAt$(0), $weight$$ = 1;
  $minDelta$$ != $maxDelta$$ && $max$$5$$ + $maxDeltaVal$$ - ($min$$5$$ + $minDeltaVal$$) < $axis$$7$$.$getMinimumExtent$() && ($weight$$ = ($max$$5$$ - $min$$5$$ - $axis$$7$$.$getMinimumExtent$()) / ($minDeltaVal$$ - $maxDeltaVal$$));
  return D.$DvtChartEventUtils$$.$_limitToGlobal$($axis$$7$$, $min$$5$$ + $minDeltaVal$$ * $weight$$, $max$$5$$ + $maxDeltaVal$$ * $weight$$)
};
D.$DvtChartEventUtils$$.$_convertToAxisCoord$ = function $$DvtChartEventUtils$$$$_convertToAxisCoord$$($chart$$87$$, $xMin$$, $xMax$$, $yMin$$, $yMax$$) {
  var $axisCoord$$ = {}, $isRTL$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$87$$.$_context$);
  D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$87$$) ? ($axisCoord$$.$xMin$ = $yMin$$, $axisCoord$$.$xMax$ = $yMax$$, $axisCoord$$.$yMin$ = $isRTL$$1$$ ? $xMax$$ : $xMin$$, $axisCoord$$.$yMin$ = $isRTL$$1$$ ? $xMin$$ : $xMax$$) : ($axisCoord$$.$xMin$ = $isRTL$$1$$ ? $xMax$$ : $xMin$$, $axisCoord$$.$xMax$ = $isRTL$$1$$ ? $xMin$$ : $xMax$$, $axisCoord$$.$yMin$ = $yMax$$, $axisCoord$$.$yMax$ = $yMin$$);
  return $axisCoord$$
};
D.$DvtChartEventUtils$$.$_limitToGlobal$ = function $$DvtChartEventUtils$$$$_limitToGlobal$$($axis$$8_globalMax$$, $min$$6$$, $max$$6$$) {
  var $globalMin$$ = $axis$$8_globalMax$$.$getGlobalMin$();
  $axis$$8_globalMax$$ = $axis$$8_globalMax$$.$getGlobalMax$();
  $max$$6$$ - $min$$6$$ >= $axis$$8_globalMax$$ - $globalMin$$ ? ($min$$6$$ = $globalMin$$, $max$$6$$ = $axis$$8_globalMax$$) : $min$$6$$ < $globalMin$$ ? ($max$$6$$ += $globalMin$$ - $min$$6$$, $min$$6$$ = $globalMin$$) : $max$$6$$ > $axis$$8_globalMax$$ && ($min$$6$$ -= $max$$6$$ - $axis$$8_globalMax$$, $max$$6$$ = $axis$$8_globalMax$$);
  return{min:$min$$6$$, max:$max$$6$$}
};
D.$DvtChartEventUtils$$.$getAxisStartEndGroup$ = function $$DvtChartEventUtils$$$$getAxisStartEndGroup$$($axis$$9$$, $min$$7_startIdx$$, $endIdx_max$$7$$) {
  return(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$9$$) && ($min$$7_startIdx$$ = window.Math.ceil($min$$7_startIdx$$), $endIdx_max$$7$$ = window.Math.floor($endIdx_max$$7$$), $endIdx_max$$7$$ >= $min$$7_startIdx$$) ? {$startGroup$:(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$9$$) ? $axis$$9$$.$Info$ ? (0,D.$JSCompiler_StaticMethods_getLabelAt$$)($axis$$9$$.$Info$, $min$$7_startIdx$$) : D.$JSCompiler_alias_NULL$$ : D.$JSCompiler_alias_NULL$$, $endGroup$:(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$9$$) ? 
  $axis$$9$$.$Info$ ? (0,D.$JSCompiler_StaticMethods_getLabelAt$$)($axis$$9$$.$Info$, $endIdx_max$$7$$) : D.$JSCompiler_alias_NULL$$ : D.$JSCompiler_alias_NULL$$} : {$startGroup$:D.$JSCompiler_alias_NULL$$, $endGroup$:D.$JSCompiler_alias_NULL$$}
};
D.$DvtChartEventUtils$$.$setInitialSelection$ = function $$DvtChartEventUtils$$$$setInitialSelection$$($chart$$88$$, $selected$$17$$) {
  var $handler$$22$$ = $chart$$88$$.$getSelectionHandler$();
  if($handler$$22$$) {
    for(var $peers$$2$$ = $chart$$88$$.$getObjects$(), $selectedIds$$2$$ = [], $i$$286$$ = 0;$i$$286$$ < $selected$$17$$.length;$i$$286$$++) {
      for(var $j$$59$$ = 0;$j$$59$$ < $peers$$2$$.length;$j$$59$$++) {
        var $peer$$16$$ = $peers$$2$$[$j$$59$$];
        $peer$$16$$.$getSeries$() === $selected$$17$$[$i$$286$$].series && $peer$$16$$.$getGroup$() === $selected$$17$$[$i$$286$$].group && $selectedIds$$2$$.push($peer$$16$$.getId())
      }
    }
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($handler$$22$$, $selectedIds$$2$$, $peers$$2$$)
  }
};
D.$DvtChartEventUtils$$.$getKeyboardNavigables$ = function $$DvtChartEventUtils$$$$getKeyboardNavigables$$($chart$$89_peers$$3$$) {
  var $navigables$$1$$ = [];
  if(D.$DvtChartTypeUtils$$.$isPie$($chart$$89_peers$$3$$)) {
    for(var $slices$$2$$ = $chart$$89_peers$$3$$.$pieChart$.$_slices$, $i$$287$$ = 0;$i$$287$$ < $slices$$2$$.length;$i$$287$$++) {
      D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$89_peers$$3$$, $slices$$2$$[$i$$287$$].$getSeriesIndex$()) && $navigables$$1$$.push($slices$$2$$[$i$$287$$])
    }
  }else {
    $chart$$89_peers$$3$$ = $chart$$89_peers$$3$$.$getObjects$();
    for($i$$287$$ = 0;$i$$287$$ < $chart$$89_peers$$3$$.length;$i$$287$$++) {
      (0,D.$JSCompiler_StaticMethods_isNavigable$$)($chart$$89_peers$$3$$[$i$$287$$]) && $navigables$$1$$.push($chart$$89_peers$$3$$[$i$$287$$])
    }
  }
  return $navigables$$1$$
};
D.$DvtChartRefObjUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartRefObjUtils$$, D.$DvtObj$$, "DvtChartRefObjUtils");
D.$DvtChartRefObjUtils$$.$getObjects$ = function $$DvtChartRefObjUtils$$$$getObjects$$($chart$$72_y2$$8$$) {
  var $x$$107$$ = D.$DvtChartRefObjUtils$$.$getXAxisObjects$($chart$$72_y2$$8$$), $y$$88$$ = D.$DvtChartRefObjUtils$$.$getYAxisObjects$($chart$$72_y2$$8$$);
  $chart$$72_y2$$8$$ = D.$DvtChartRefObjUtils$$.$getY2AxisObjects$($chart$$72_y2$$8$$);
  return $x$$107$$.concat($y$$88$$, $chart$$72_y2$$8$$)
};
D.$DvtChartRefObjUtils$$.$getXAxisObjects$ = function $$DvtChartRefObjUtils$$$$getXAxisObjects$$($chart$$73_options$$94$$) {
  return($chart$$73_options$$94$$ = $chart$$73_options$$94$$.$getOptions$()) && $chart$$73_options$$94$$.xAxis && $chart$$73_options$$94$$.xAxis.referenceObjects ? $chart$$73_options$$94$$.xAxis.referenceObjects : []
};
D.$DvtChartRefObjUtils$$.$getYAxisObjects$ = function $$DvtChartRefObjUtils$$$$getYAxisObjects$$($chart$$74_options$$95$$) {
  return($chart$$74_options$$95$$ = $chart$$74_options$$95$$.$getOptions$()) && $chart$$74_options$$95$$.yAxis && $chart$$74_options$$95$$.yAxis.referenceObjects ? $chart$$74_options$$95$$.yAxis.referenceObjects : []
};
D.$DvtChartRefObjUtils$$.$getY2AxisObjects$ = function $$DvtChartRefObjUtils$$$$getY2AxisObjects$$($chart$$75_options$$96$$) {
  return($chart$$75_options$$96$$ = $chart$$75_options$$96$$.$getOptions$()) && $chart$$75_options$$96$$.y2Axis && $chart$$75_options$$96$$.y2Axis.referenceObjects ? $chart$$75_options$$96$$.y2Axis.referenceObjects : []
};
D.$DvtChartRefObjUtils$$.$getType$ = function $$DvtChartRefObjUtils$$$$getType$$($refObj$$1$$) {
  return"area" == $refObj$$1$$.type ? "area" : "line"
};
D.$DvtChartRefObjUtils$$.$getLocation$ = function $$DvtChartRefObjUtils$$$$getLocation$$($refObj$$2$$) {
  return"front" == $refObj$$2$$.location ? "front" : "back"
};
D.$DvtChartRefObjUtils$$.$getColor$ = function $$DvtChartRefObjUtils$$$$getColor$$($refObj$$3$$) {
  return $refObj$$3$$.color ? $refObj$$3$$.color : "#333333"
};
D.$DvtChartRefObjUtils$$.$getLineWidth$ = function $$DvtChartRefObjUtils$$$$getLineWidth$$($refObj$$4$$) {
  return $refObj$$4$$.lineWidth ? $refObj$$4$$.lineWidth : 1
};
D.$DvtChartRefObjUtils$$.$getLineType$ = function $$DvtChartRefObjUtils$$$$getLineType$$($refObj$$5$$) {
  return $refObj$$5$$.lineType ? $refObj$$5$$.lineType : "straight"
};
D.$DvtChartSeriesEffectUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartSeriesEffectUtils$$, D.$DvtObj$$, "DvtChartSeriesEffectUtils");
D.$DvtChartSeriesEffectUtils$$.$getBarFill$ = function $$DvtChartSeriesEffectUtils$$$$getBarFill$$($chart$$24_colors$$3$$, $pattern$$2_seriesIndex$$1$$, $groupIndex_seriesEffect$$, $angle$$12_bHoriz$$5$$, $barWidth$$) {
  var $color$$24_stops$$1$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$24_colors$$3$$, $pattern$$2_seriesIndex$$1$$, $groupIndex_seriesEffect$$);
  $pattern$$2_seriesIndex$$1$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$24_colors$$3$$, $pattern$$2_seriesIndex$$1$$, $groupIndex_seriesEffect$$);
  $groupIndex_seriesEffect$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$24_colors$$3$$);
  return $pattern$$2_seriesIndex$$1$$ ? new D.$DvtPatternFill$$($pattern$$2_seriesIndex$$1$$, $color$$24_stops$$1$$) : "gradient" == $groupIndex_seriesEffect$$ && 3 < $barWidth$$ ? ($angle$$12_bHoriz$$5$$ = $angle$$12_bHoriz$$5$$ ? 270 : 0, D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$24_colors$$3$$) ? ($chart$$24_colors$$3$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$24_stops$$1$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$24_stops$$1$$, -0.04, -0.05)], $color$$24_stops$$1$$ = 
  [0, 1]) : ($chart$$24_colors$$3$$ = [D.$DvtColorUtils$$.$getPastel$($color$$24_stops$$1$$, 0.15), D.$DvtColorUtils$$.$getPastel$($color$$24_stops$$1$$, 0.45), D.$DvtColorUtils$$.$getPastel$($color$$24_stops$$1$$, 0.25), $color$$24_stops$$1$$, D.$DvtColorUtils$$.$getPastel$($color$$24_stops$$1$$, 0.15), D.$DvtColorUtils$$.$getDarker$($color$$24_stops$$1$$, 0.9)], $color$$24_stops$$1$$ = [0, 0.15, 0.3, 0.65, 0.85, 1]), new D.$DvtLinearGradientFill$$($angle$$12_bHoriz$$5$$, $chart$$24_colors$$3$$, 
  D.$JSCompiler_alias_NULL$$, $color$$24_stops$$1$$)) : new D.$DvtSolidFill$$($color$$24_stops$$1$$)
};
D.$DvtChartSeriesEffectUtils$$.$getAreaFill$ = function $$DvtChartSeriesEffectUtils$$$$getAreaFill$$($chart$$25$$, $seriesIndex$$2$$) {
  var $alpha$$15_colors$$4_isLineWithArea$$ = "lineWithArea" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$25$$, $seriesIndex$$2$$), $color$$25_seriesItem_stops$$2$$;
  ($color$$25_seriesItem_stops$$2$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$25$$, $seriesIndex$$2$$)) && $color$$25_seriesItem_stops$$2$$.areaColor ? $color$$25_seriesItem_stops$$2$$ = $color$$25_seriesItem_stops$$2$$.areaColor : ($color$$25_seriesItem_stops$$2$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$25$$, $seriesIndex$$2$$), $alpha$$15_colors$$4_isLineWithArea$$ && ($color$$25_seriesItem_stops$$2$$ = D.$DvtColorUtils$$.$setAlpha$($color$$25_seriesItem_stops$$2$$, 0.2)));
  var $angle$$13_pattern$$3$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$25$$, $seriesIndex$$2$$), $seriesEffect$$1$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$25$$);
  return $angle$$13_pattern$$3$$ ? new D.$DvtPatternFill$$($angle$$13_pattern$$3$$, $color$$25_seriesItem_stops$$2$$) : "gradient" == $seriesEffect$$1$$ ? ($angle$$13_pattern$$3$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$25$$) ? 180 : 270, $alpha$$15_colors$$4_isLineWithArea$$ ? ($alpha$$15_colors$$4_isLineWithArea$$ = D.$DvtColorUtils$$.$getAlpha$($color$$25_seriesItem_stops$$2$$), $alpha$$15_colors$$4_isLineWithArea$$ = [D.$DvtColorUtils$$.$setAlpha$($color$$25_seriesItem_stops$$2$$, window.Math.min($alpha$$15_colors$$4_isLineWithArea$$ + 
  0.2, 1)), D.$DvtColorUtils$$.$setAlpha$($color$$25_seriesItem_stops$$2$$, window.Math.max($alpha$$15_colors$$4_isLineWithArea$$ - 0.15, 0))], $color$$25_seriesItem_stops$$2$$ = [0, 1]) : D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$25$$) ? ($alpha$$15_colors$$4_isLineWithArea$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$25_seriesItem_stops$$2$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$25_seriesItem_stops$$2$$, -0.04, -0.05)], $color$$25_seriesItem_stops$$2$$ = [0, 1]) : 
  ($alpha$$15_colors$$4_isLineWithArea$$ = D.$DvtChartTypeUtils$$.$isSpark$($chart$$25$$) ? [D.$DvtColorUtils$$.$getDarker$($color$$25_seriesItem_stops$$2$$, 0.5), $color$$25_seriesItem_stops$$2$$, D.$DvtColorUtils$$.$getPastel$($color$$25_seriesItem_stops$$2$$, 0.5)] : [D.$DvtColorUtils$$.$getPastel$($color$$25_seriesItem_stops$$2$$, 0.5), $color$$25_seriesItem_stops$$2$$, D.$DvtColorUtils$$.$getDarker$($color$$25_seriesItem_stops$$2$$, 0.7)], $color$$25_seriesItem_stops$$2$$ = [0, 0.5, 1]), new D.$DvtLinearGradientFill$$($angle$$13_pattern$$3$$, 
  $alpha$$15_colors$$4_isLineWithArea$$, D.$JSCompiler_alias_NULL$$, $color$$25_seriesItem_stops$$2$$)) : new D.$DvtSolidFill$$($color$$25_seriesItem_stops$$2$$)
};
D.$DvtChartSeriesEffectUtils$$.$getMarkerFill$ = function $$DvtChartSeriesEffectUtils$$$$getMarkerFill$$($chart$$26_linearColors_radialColors$$, $seriesIndex$$3$$, $groupIndex$$1$$) {
  var $color$$26$$ = D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$26_linearColors_radialColors$$, $seriesIndex$$3$$, $groupIndex$$1$$), $pattern$$4$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$26_linearColors_radialColors$$, $seriesIndex$$3$$, $groupIndex$$1$$);
  if("bubble" == $chart$$26_linearColors_radialColors$$.$getType$()) {
    var $seriesEffect$$2$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$26_linearColors_radialColors$$);
    if($pattern$$4$$) {
      return new D.$DvtPatternFill$$($pattern$$4$$, $color$$26$$)
    }
    if("gradient" == $seriesEffect$$2$$) {
      if(D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$($chart$$26_linearColors_radialColors$$)) {
        return window.colors = [D.$DvtColorUtils$$.$adjustHSL$($color$$26$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$26$$, -0.04, -0.05)], window.stops = [0, 1], new D.$DvtLinearGradientFill$$(270, window.colors, D.$JSCompiler_alias_NULL$$, window.stops)
      }
      if("human" == D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$26_linearColors_radialColors$$, $seriesIndex$$3$$, $groupIndex$$1$$)) {
        return $chart$$26_linearColors_radialColors$$ = [D.$DvtColorUtils$$.$getPastel$($color$$26$$, 0.2), D.$DvtColorUtils$$.$getPastel$($color$$26$$, 0.1), $color$$26$$, D.$DvtColorUtils$$.$getDarker$($color$$26$$, 0.8)], new D.$DvtLinearGradientFill$$(315, $chart$$26_linearColors_radialColors$$, D.$JSCompiler_alias_NULL$$, [0, 0.3, 0.7, 1])
      }
      $chart$$26_linearColors_radialColors$$ = [D.$DvtColorUtils$$.$getPastel$($color$$26$$, 0.15), $color$$26$$, D.$DvtColorUtils$$.$getDarker$($color$$26$$, 0.9), D.$DvtColorUtils$$.$getDarker$($color$$26$$, 0.8)];
      return new D.$DvtRadialGradientFill$$($chart$$26_linearColors_radialColors$$, D.$JSCompiler_alias_NULL$$, [0, 0.5, 0.75, 1])
    }
  }
  return new D.$DvtSolidFill$$($color$$26$$)
};
D.$DvtChartSeriesEffectUtils$$.$getFunnelSliceFill$ = function $$DvtChartSeriesEffectUtils$$$$getFunnelSliceFill$$($chart$$27_colors$$5$$, $pattern$$5_seriesIndex$$4$$, $color$$27_stops$$3$$, $dimensions$$1_fill$$21$$, $bBackground$$) {
  $pattern$$5_seriesIndex$$4$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$27_colors$$5$$, $pattern$$5_seriesIndex$$4$$, 0);
  var $seriesEffect$$3$$ = D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$27_colors$$5$$);
  return $pattern$$5_seriesIndex$$4$$ && !$bBackground$$ ? ($dimensions$$1_fill$$21$$ = new D.$DvtPatternFill$$($pattern$$5_seriesIndex$$4$$, $color$$27_stops$$3$$), "vertical" == $chart$$27_colors$$5$$.$getOptions$().orientation && ((0,D.$DvtAgent$isRightToLeft$$)($chart$$27_colors$$5$$.$_context$) ? $dimensions$$1_fill$$21$$.$setMatrix$(new D.$DvtMatrix$$(0, -1, 1, 0)) : $dimensions$$1_fill$$21$$.$setMatrix$(new D.$DvtMatrix$$(0, 1, -1, 0))), $dimensions$$1_fill$$21$$) : "gradient" == $seriesEffect$$3$$ ? 
  ("on" == $chart$$27_colors$$5$$.$getOptions$().styleDefaults.threeDEffect ? ($chart$$27_colors$$5$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$27_stops$$3$$, 0, -0.1), D.$DvtColorUtils$$.$adjustHSL$($color$$27_stops$$3$$, 0, 0.12), $color$$27_stops$$3$$], $color$$27_stops$$3$$ = [0, 0.65, 1]) : ($chart$$27_colors$$5$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$27_stops$$3$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$27_stops$$3$$, -0.04, -0.05)], $color$$27_stops$$3$$ = [0, 1]), new D.$DvtLinearGradientFill$$(90, 
  $chart$$27_colors$$5$$, D.$JSCompiler_alias_NULL$$, $color$$27_stops$$3$$, [$dimensions$$1_fill$$21$$.x, $dimensions$$1_fill$$21$$.y, $dimensions$$1_fill$$21$$.$w$, $dimensions$$1_fill$$21$$.$h$])) : new D.$DvtSolidFill$$($color$$27_stops$$3$$)
};
D.$DvtChartSeriesEffectUtils$$.$_useAltaGradients$ = function $$DvtChartSeriesEffectUtils$$$$_useAltaGradients$$($chart$$28$$) {
  return"skyros" != $chart$$28$$.$getOptions$().skin
};
D.$DvtChartStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartStyleUtils$$, D.$DvtObj$$, "DvtChartStyleUtils");
D.$DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$ = ["bar", "line", "area"];
D.$DvtChartStyleUtils$$.$getSeriesType$ = function $$DvtChartStyleUtils$$$$getSeriesType$$($chart$$37$$, $seriesIndex$$10$$) {
  if(!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$37$$)) {
    return"auto"
  }
  var $series$$9_seriesItem$$1_seriesType$$3_typeIndex$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$37$$, $seriesIndex$$10$$), $series$$9_seriesItem$$1_seriesType$$3_typeIndex$$ = $series$$9_seriesItem$$1_seriesType$$3_typeIndex$$ ? $series$$9_seriesItem$$1_seriesType$$3_typeIndex$$.type : D.$JSCompiler_alias_NULL$$;
  if(!$series$$9_seriesItem$$1_seriesType$$3_typeIndex$$ || "auto" == $series$$9_seriesItem$$1_seriesType$$3_typeIndex$$) {
    if(D.$DvtChartTypeUtils$$.$isBar$($chart$$37$$)) {
      return"bar"
    }
    if(D.$DvtChartTypeUtils$$.$isLine$($chart$$37$$)) {
      return"line"
    }
    if(D.$DvtChartTypeUtils$$.$isArea$($chart$$37$$)) {
      return"area"
    }
    if(D.$DvtChartTypeUtils$$.$isLineWithArea$($chart$$37$$)) {
      return"lineWithArea"
    }
    if(D.$DvtChartTypeUtils$$.$isCombo$($chart$$37$$)) {
      return $series$$9_seriesItem$$1_seriesType$$3_typeIndex$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$37$$, $seriesIndex$$10$$), $series$$9_seriesItem$$1_seriesType$$3_typeIndex$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$37$$, $series$$9_seriesItem$$1_seriesType$$3_typeIndex$$) % D.$DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$.length, D.$DvtChartStyleUtils$$.$_SERIES_TYPE_RAMP$[$series$$9_seriesItem$$1_seriesType$$3_typeIndex$$]
    }
  }else {
    return $series$$9_seriesItem$$1_seriesType$$3_typeIndex$$
  }
};
D.$DvtChartStyleUtils$$.$getSeriesEffect$ = function $$DvtChartStyleUtils$$$$getSeriesEffect$$($chart$$38$$) {
  return $chart$$38$$.$getOptions$().styleDefaults.seriesEffect
};
D.$DvtChartStyleUtils$$.$getColor$ = function $$DvtChartStyleUtils$$$$getColor$$($chart$$39_colorIndex$$, $series$$10_seriesIndex$$11$$, $dataItem$$5_groupIndex$$8_options$$80_seriesItem$$2$$) {
  if(($dataItem$$5_groupIndex$$8_options$$80_seriesItem$$2$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$39_colorIndex$$, $series$$10_seriesIndex$$11$$, $dataItem$$5_groupIndex$$8_options$$80_seriesItem$$2$$)) && $dataItem$$5_groupIndex$$8_options$$80_seriesItem$$2$$.color || ($dataItem$$5_groupIndex$$8_options$$80_seriesItem$$2$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$39_colorIndex$$, $series$$10_seriesIndex$$11$$)) && $dataItem$$5_groupIndex$$8_options$$80_seriesItem$$2$$.color) {
    return $dataItem$$5_groupIndex$$8_options$$80_seriesItem$$2$$.color
  }
  $dataItem$$5_groupIndex$$8_options$$80_seriesItem$$2$$ = $chart$$39_colorIndex$$.$getOptions$();
  var $defaultColors$$ = $dataItem$$5_groupIndex$$8_options$$80_seriesItem$$2$$.styleDefaults.colors;
  $series$$10_seriesIndex$$11$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$39_colorIndex$$, $series$$10_seriesIndex$$11$$);
  $chart$$39_colorIndex$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$39_colorIndex$$, $series$$10_seriesIndex$$11$$) % $defaultColors$$.length;
  return $dataItem$$5_groupIndex$$8_options$$80_seriesItem$$2$$.styleDefaults.colors[$chart$$39_colorIndex$$]
};
D.$DvtChartStyleUtils$$.$getPattern$ = function $$DvtChartStyleUtils$$$$getPattern$$($chart$$40_patternIndex$$, $series$$11_seriesIndex$$12$$, $dataItem$$6_groupIndex$$9_options$$81_seriesItem$$3$$) {
  if(D.$DvtChartTypeUtils$$.$isScatter$($chart$$40_patternIndex$$) || "line" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$40_patternIndex$$, $series$$11_seriesIndex$$12$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  if(($dataItem$$6_groupIndex$$9_options$$81_seriesItem$$3$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$40_patternIndex$$, $series$$11_seriesIndex$$12$$, $dataItem$$6_groupIndex$$9_options$$81_seriesItem$$3$$)) && $dataItem$$6_groupIndex$$9_options$$81_seriesItem$$3$$.pattern && "auto" != $dataItem$$6_groupIndex$$9_options$$81_seriesItem$$3$$.pattern || ($dataItem$$6_groupIndex$$9_options$$81_seriesItem$$3$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$40_patternIndex$$, $series$$11_seriesIndex$$12$$)) && 
  $dataItem$$6_groupIndex$$9_options$$81_seriesItem$$3$$.pattern && "auto" != $dataItem$$6_groupIndex$$9_options$$81_seriesItem$$3$$.pattern) {
    return $dataItem$$6_groupIndex$$9_options$$81_seriesItem$$3$$.pattern
  }
  if("pattern" == D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$40_patternIndex$$)) {
    $dataItem$$6_groupIndex$$9_options$$81_seriesItem$$3$$ = $chart$$40_patternIndex$$.$getOptions$();
    var $defaultPatterns$$ = $dataItem$$6_groupIndex$$9_options$$81_seriesItem$$3$$.styleDefaults.patterns;
    $series$$11_seriesIndex$$12$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$40_patternIndex$$, $series$$11_seriesIndex$$12$$);
    $chart$$40_patternIndex$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$40_patternIndex$$, $series$$11_seriesIndex$$12$$) % $defaultPatterns$$.length;
    return $dataItem$$6_groupIndex$$9_options$$81_seriesItem$$3$$.styleDefaults.patterns[$chart$$40_patternIndex$$]
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtChartStyleUtils$$.$getBorderColor$ = function $$DvtChartStyleUtils$$$$getBorderColor$$($chart$$41_markerColor$$, $seriesIndex$$13$$, $groupIndex$$10$$) {
  var $dataItem$$7_options$$82_seriesItem$$4$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$41_markerColor$$, $seriesIndex$$13$$, $groupIndex$$10$$);
  if($dataItem$$7_options$$82_seriesItem$$4$$ && $dataItem$$7_options$$82_seriesItem$$4$$.borderColor || ($dataItem$$7_options$$82_seriesItem$$4$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$41_markerColor$$, $seriesIndex$$13$$)) && $dataItem$$7_options$$82_seriesItem$$4$$.borderColor) {
    return $dataItem$$7_options$$82_seriesItem$$4$$.borderColor
  }
  $dataItem$$7_options$$82_seriesItem$$4$$ = $chart$$41_markerColor$$.$getOptions$();
  return"undefined" != typeof $dataItem$$7_options$$82_seriesItem$$4$$.styleDefaults.borderColor ? $dataItem$$7_options$$82_seriesItem$$4$$.styleDefaults.borderColor : "bubble" == $chart$$41_markerColor$$.$getType$() && "alta" == $chart$$41_markerColor$$.$getOptions$().skin && "gradient" != D.$DvtChartStyleUtils$$.$getSeriesEffect$($chart$$41_markerColor$$) ? ($chart$$41_markerColor$$ = D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$41_markerColor$$, $seriesIndex$$13$$, $groupIndex$$10$$), D.$DvtColorUtils$$.$adjustHSL$($chart$$41_markerColor$$, 
  0.15, -0.25)) : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartStyleUtils$$.$getMarkerColor$ = function $$DvtChartStyleUtils$$$$getMarkerColor$$($chart$$42$$, $seriesIndex$$14$$, $groupIndex$$11$$) {
  var $dataItem$$8_defaultMarkerColor_seriesItem$$5$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$42$$, $seriesIndex$$14$$, $groupIndex$$11$$);
  return $dataItem$$8_defaultMarkerColor_seriesItem$$5$$ && $dataItem$$8_defaultMarkerColor_seriesItem$$5$$.color ? $dataItem$$8_defaultMarkerColor_seriesItem$$5$$.color : ($dataItem$$8_defaultMarkerColor_seriesItem$$5$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$42$$, $seriesIndex$$14$$)) && $dataItem$$8_defaultMarkerColor_seriesItem$$5$$.markerColor ? $dataItem$$8_defaultMarkerColor_seriesItem$$5$$.markerColor : ($dataItem$$8_defaultMarkerColor_seriesItem$$5$$ = $chart$$42$$.$getOptions$().styleDefaults.markerColor) ? 
  $dataItem$$8_defaultMarkerColor_seriesItem$$5$$ : D.$DvtChartStyleUtils$$.$getColor$($chart$$42$$, $seriesIndex$$14$$, $groupIndex$$11$$)
};
D.$DvtChartStyleUtils$$.$getMarkerShape$ = function $$DvtChartStyleUtils$$$$getMarkerShape$$($chart$$43_styleIndex$$3$$, $series$$12_seriesIndex$$15$$, $dataItem$$9_groupIndex$$12$$) {
  var $options$$84_shapeRamp$$ = $chart$$43_styleIndex$$3$$.$getOptions$(), $shape$$10$$ = $options$$84_shapeRamp$$.styleDefaults.markerShape, $seriesItem$$6$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$43_styleIndex$$3$$, $series$$12_seriesIndex$$15$$);
  $seriesItem$$6$$ && $seriesItem$$6$$.markerShape && ($shape$$10$$ = $seriesItem$$6$$.markerShape);
  ($dataItem$$9_groupIndex$$12$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$43_styleIndex$$3$$, $series$$12_seriesIndex$$15$$, $dataItem$$9_groupIndex$$12$$)) && $dataItem$$9_groupIndex$$12$$.markerShape && ($shape$$10$$ = $dataItem$$9_groupIndex$$12$$.markerShape);
  "auto" == $shape$$10$$ && ("bubble" == $chart$$43_styleIndex$$3$$.$getType$() ? $shape$$10$$ = "circle" : ($series$$12_seriesIndex$$15$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$43_styleIndex$$3$$, $series$$12_seriesIndex$$15$$), $chart$$43_styleIndex$$3$$ = D.$DvtChartDataUtils$$.$getSeriesStyleIndex$($chart$$43_styleIndex$$3$$, $series$$12_seriesIndex$$15$$), $options$$84_shapeRamp$$ = $options$$84_shapeRamp$$.styleDefaults.shapes, $shape$$10$$ = $options$$84_shapeRamp$$[$chart$$43_styleIndex$$3$$ % 
  $options$$84_shapeRamp$$.length]));
  return $shape$$10$$
};
D.$DvtChartStyleUtils$$.$getMarkerSize$ = function $$DvtChartStyleUtils$$$$getMarkerSize$$($chart$$44_options$$85$$, $seriesIndex$$16_seriesItem$$7$$, $dataItem$$10_groupIndex$$13_markerSize$$) {
  $dataItem$$10_groupIndex$$13_markerSize$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$44_options$$85$$, $seriesIndex$$16_seriesItem$$7$$, $dataItem$$10_groupIndex$$13_markerSize$$);
  $seriesIndex$$16_seriesItem$$7$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$44_options$$85$$, $seriesIndex$$16_seriesItem$$7$$);
  $chart$$44_options$$85$$ = $chart$$44_options$$85$$.$getOptions$();
  $dataItem$$10_groupIndex$$13_markerSize$$ = $dataItem$$10_groupIndex$$13_markerSize$$ && $dataItem$$10_groupIndex$$13_markerSize$$.markerSize ? $dataItem$$10_groupIndex$$13_markerSize$$.markerSize : $seriesIndex$$16_seriesItem$$7$$ && $seriesIndex$$16_seriesItem$$7$$.markerSize ? $seriesIndex$$16_seriesItem$$7$$.markerSize : $chart$$44_options$$85$$.styleDefaults.markerSize;
  $chart$$44_options$$85$$._isOverview && ($dataItem$$10_groupIndex$$13_markerSize$$ = window.Math.ceil(0.6 * $dataItem$$10_groupIndex$$13_markerSize$$));
  return $dataItem$$10_groupIndex$$13_markerSize$$
};
D.$DvtChartStyleUtils$$.$isMarkerDisplayed$ = function $$DvtChartStyleUtils$$$$isMarkerDisplayed$$($chart$$45$$, $seriesIndex$$17$$, $dataItem$$11_displayed_groupIndex$$14$$) {
  $dataItem$$11_displayed_groupIndex$$14$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$45$$, $seriesIndex$$17$$, $dataItem$$11_displayed_groupIndex$$14$$);
  var $seriesItem$$8$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$45$$, $seriesIndex$$17$$);
  $dataItem$$11_displayed_groupIndex$$14$$ = $dataItem$$11_displayed_groupIndex$$14$$ && $dataItem$$11_displayed_groupIndex$$14$$.markerDisplayed != D.$JSCompiler_alias_NULL$$ ? $dataItem$$11_displayed_groupIndex$$14$$.markerDisplayed : $seriesItem$$8$$ && $seriesItem$$8$$.markerDisplayed != D.$JSCompiler_alias_NULL$$ ? $seriesItem$$8$$.markerDisplayed : $chart$$45$$.$getOptions$().styleDefaults.markerDisplayed;
  return"on" == $dataItem$$11_displayed_groupIndex$$14$$ ? D.$JSCompiler_alias_TRUE$$ : "off" == $dataItem$$11_displayed_groupIndex$$14$$ ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$45$$) || "none" == D.$DvtChartStyleUtils$$.$getLineType$($chart$$45$$, $seriesIndex$$17$$)
};
D.$DvtChartStyleUtils$$.$getLineWidth$ = function $$DvtChartStyleUtils$$$$getLineWidth$$($chart$$46$$, $seriesIndex$$18$$) {
  var $lineWidth_seriesItem$$9$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$46$$, $seriesIndex$$18$$), $options$$86$$ = $chart$$46$$.$getOptions$(), $lineWidth_seriesItem$$9$$ = $lineWidth_seriesItem$$9$$ && $lineWidth_seriesItem$$9$$.lineWidth ? $lineWidth_seriesItem$$9$$.lineWidth : $options$$86$$.styleDefaults.lineWidth ? $options$$86$$.styleDefaults.lineWidth : "lineWithArea" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$46$$, $seriesIndex$$18$$) ? 2 : 3;
  $options$$86$$._isOverview && ($lineWidth_seriesItem$$9$$ = window.Math.ceil(0.6 * $lineWidth_seriesItem$$9$$));
  return $lineWidth_seriesItem$$9$$
};
D.$DvtChartStyleUtils$$.$getLineStyle$ = function $$DvtChartStyleUtils$$$$getLineStyle$$($chart$$47$$, $seriesIndex$$19$$) {
  var $seriesItem$$10$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$47$$, $seriesIndex$$19$$);
  return $seriesItem$$10$$ && $seriesItem$$10$$.lineStyle ? $seriesItem$$10$$.lineStyle : $chart$$47$$.$getOptions$().styleDefaults.lineStyle
};
D.$DvtChartStyleUtils$$.$getLineType$ = function $$DvtChartStyleUtils$$$$getLineType$$($chart$$48$$, $seriesIndex$$20$$) {
  var $lineType$$1_seriesItem$$11$$;
  $lineType$$1_seriesItem$$11$$ = ($lineType$$1_seriesItem$$11$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$48$$, $seriesIndex$$20$$)) && $lineType$$1_seriesItem$$11$$.lineType ? $lineType$$1_seriesItem$$11$$.lineType : $chart$$48$$.$getOptions$().styleDefaults.lineType;
  "auto" == $lineType$$1_seriesItem$$11$$ && ($lineType$$1_seriesItem$$11$$ = D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$48$$) ? "none" : "straight");
  D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$48$$) && ("none" != $lineType$$1_seriesItem$$11$$ && "straight" != $lineType$$1_seriesItem$$11$$ && "curved" != $lineType$$1_seriesItem$$11$$) && ($lineType$$1_seriesItem$$11$$ = "none");
  D.$DvtChartTypeUtils$$.$isPolar$($chart$$48$$) && ("centeredSegmented" == $lineType$$1_seriesItem$$11$$ && ($lineType$$1_seriesItem$$11$$ = "segmented"), "centeredStepped" == $lineType$$1_seriesItem$$11$$ && ($lineType$$1_seriesItem$$11$$ = "stepped"));
  return $lineType$$1_seriesItem$$11$$
};
D.$DvtChartStyleUtils$$.$getBarSpacing$ = function $$DvtChartStyleUtils$$$$getBarSpacing$$($chart$$49$$) {
  return $chart$$49$$.$getOptions$().__sparkBarSpacing
};
D.$DvtChartStyleUtils$$.$getBarWidth$ = function $$DvtChartStyleUtils$$$$getBarWidth$$($chart$$50$$, $barCount_barSeriesCount$$, $axis$$5_barWidth$$1$$) {
  var $maxBarWidth_options$$89$$ = $chart$$50$$.$getOptions$(), $isPolar$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$50$$);
  $barCount_barSeriesCount$$ = D.$DvtChartTypeUtils$$.$isStacked$($chart$$50$$) ? D.$DvtChartTypeUtils$$.$hasY2BarData$($chart$$50$$) ? 2 : 1 : $barCount_barSeriesCount$$;
  var $barGapRatio$$ = $maxBarWidth_options$$89$$.styleDefaults.barGapRatio;
  "string" == typeof $barGapRatio$$ && "%" == $barGapRatio$$.slice(-1) && ($barGapRatio$$ = (0,window.Number)($barGapRatio$$.slice(0, -1)) / 100);
  $barGapRatio$$ == D.$JSCompiler_alias_NULL$$ && ($barGapRatio$$ = $isPolar$$ ? 1 == $barCount_barSeriesCount$$ || D.$DvtChartTypeUtils$$.$isStacked$($chart$$50$$) ? 0 : 0.25 : 1 == $barCount_barSeriesCount$$ ? 0.625 : 0.25);
  $axis$$5_barWidth$$1$$ = $axis$$5_barWidth$$1$$.$getGroupWidth$() * (1 - $barGapRatio$$) / $barCount_barSeriesCount$$;
  $maxBarWidth_options$$89$$ = $maxBarWidth_options$$89$$.styleDefaults.maxBarWidth;
  $maxBarWidth_options$$89$$ != D.$JSCompiler_alias_NULL$$ && !$isPolar$$ && ($axis$$5_barWidth$$1$$ = window.Math.min($axis$$5_barWidth$$1$$, $maxBarWidth_options$$89$$));
  "pixel" == D.$DvtChartStyleUtils$$.$getBarSpacing$($chart$$50$$) && ($axis$$5_barWidth$$1$$ = window.Math.max(window.Math.floor($axis$$5_barWidth$$1$$), 1));
  return $axis$$5_barWidth$$1$$
};
D.$DvtChartStyleUtils$$.$getBarOffset$ = function $$DvtChartStyleUtils$$$$getBarOffset$$($chart$$51$$, $barWidth$$2$$, $barSeriesCount$$1_offset$$15$$) {
  $barSeriesCount$$1_offset$$15$$ = -($barWidth$$2$$ * $barSeriesCount$$1_offset$$15$$ / 2);
  if(D.$DvtChartTypeUtils$$.$isStacked$($chart$$51$$) || D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$51$$)) {
    $barSeriesCount$$1_offset$$15$$ = D.$DvtChartTypeUtils$$.$hasY2BarData$($chart$$51$$) ? (0,D.$DvtAgent$isRightToLeft$$)($chart$$51$$.$_context$) ? 0 : -$barWidth$$2$$ : -$barWidth$$2$$ / 2
  }
  return $barSeriesCount$$1_offset$$15$$
};
D.$DvtChartStyleUtils$$.$getY2BarOffset$ = function $$DvtChartStyleUtils$$$$getY2BarOffset$$($chart$$52$$, $barWidth$$3$$) {
  return D.$DvtChartTypeUtils$$.$isStacked$($chart$$52$$) ? (0,D.$DvtAgent$isRightToLeft$$)($chart$$52$$.$_context$) ? -$barWidth$$3$$ : $barWidth$$3$$ : 0
};
D.$DvtChartStyleUtils$$.$getVisibility$ = function $$DvtChartStyleUtils$$$$getVisibility$$($chart$$53$$, $seriesIndex$$21$$) {
  var $seriesItem$$12$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$53$$, $seriesIndex$$21$$);
  return $seriesItem$$12$$ && $seriesItem$$12$$.visibility ? $seriesItem$$12$$.visibility : "visible"
};
D.$DvtChartStyleUtils$$.$isSeriesRendered$ = function $$DvtChartStyleUtils$$$$isSeriesRendered$$($chart$$54$$, $seriesIndex$$22$$) {
  return"hidden" == D.$DvtChartStyleUtils$$.$getVisibility$($chart$$54$$, $seriesIndex$$22$$) ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartStyleUtils$$.$isDataItemRendered$ = function $$DvtChartStyleUtils$$$$isDataItemRendered$$($chart$$55_dataItem$$12$$, $i$$277_seriesIndex$$23$$, $groupIndex$$15$$) {
  if("hidden" == D.$DvtChartStyleUtils$$.$getVisibility$($chart$$55_dataItem$$12$$, $i$$277_seriesIndex$$23$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $hiddenCategories$$3$$ = D.$DvtChartStyleUtils$$.$getHiddenCategories$($chart$$55_dataItem$$12$$);
  $chart$$55_dataItem$$12$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$55_dataItem$$12$$, $i$$277_seriesIndex$$23$$, $groupIndex$$15$$);
  if(0 < $hiddenCategories$$3$$.length && $chart$$55_dataItem$$12$$ && $chart$$55_dataItem$$12$$.categories) {
    for($i$$277_seriesIndex$$23$$ = 0;$i$$277_seriesIndex$$23$$ < $chart$$55_dataItem$$12$$.categories.length;$i$$277_seriesIndex$$23$$++) {
      if(0 <= D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$3$$, $chart$$55_dataItem$$12$$.categories[$i$$277_seriesIndex$$23$$])) {
        return D.$JSCompiler_alias_FALSE$$
      }
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartStyleUtils$$.$getAnimationOnDisplay$ = function $$DvtChartStyleUtils$$$$getAnimationOnDisplay$$($chart$$56$$) {
  return $chart$$56$$.$getOptions$().animationOnDisplay
};
D.$DvtChartStyleUtils$$.$getAnimationOnDataChange$ = function $$DvtChartStyleUtils$$$$getAnimationOnDataChange$$($chart$$57$$) {
  return $chart$$57$$.$getOptions$().animationOnDataChange
};
D.$DvtChartStyleUtils$$.$getAnimationDuration$ = function $$DvtChartStyleUtils$$$$getAnimationDuration$$($chart$$58$$) {
  return $chart$$58$$.$getOptions$().styleDefaults.animationDuration / 1E3
};
D.$DvtChartStyleUtils$$.$getAnimationIndicators$ = function $$DvtChartStyleUtils$$$$getAnimationIndicators$$($chart$$59$$) {
  return $chart$$59$$.$getOptions$().styleDefaults.animationIndicators
};
D.$DvtChartStyleUtils$$.$getAnimationUpColor$ = function $$DvtChartStyleUtils$$$$getAnimationUpColor$$($chart$$60$$) {
  return $chart$$60$$.$getOptions$().styleDefaults.animationUpColor
};
D.$DvtChartStyleUtils$$.$getAnimationDownColor$ = function $$DvtChartStyleUtils$$$$getAnimationDownColor$$($chart$$61$$) {
  return $chart$$61$$.$getOptions$().styleDefaults.animationDownColor
};
D.$DvtChartStyleUtils$$.$getHiddenCategories$ = function $$DvtChartStyleUtils$$$$getHiddenCategories$$($chart$$62_options$$90$$) {
  $chart$$62_options$$90$$ = $chart$$62_options$$90$$.$getOptions$();
  $chart$$62_options$$90$$._hiddenCategories || ($chart$$62_options$$90$$._hiddenCategories = []);
  return $chart$$62_options$$90$$._hiddenCategories
};
D.$DvtChartStyleUtils$$.$getSelectedInnerColor$ = function $$DvtChartStyleUtils$$$$getSelectedInnerColor$$($chart$$63$$) {
  return $chart$$63$$.$getOptions$().styleDefaults.selectedInnerColor
};
D.$DvtChartStyleUtils$$.$getSelectedOuterColor$ = function $$DvtChartStyleUtils$$$$getSelectedOuterColor$$($chart$$64$$) {
  return $chart$$64$$.$getOptions$().styleDefaults.selectedOuterColor
};
D.$DvtChartStyleUtils$$.$getDataLabelStyle$ = function $$DvtChartStyleUtils$$$$getDataLabelStyle$$($chart$$65$$, $seriesIndex$$24$$, $groupIndex$$16$$, $dataColor$$4_labelColor$$, $position$$5$$) {
  var $labelStyleArray$$ = [];
  $dataColor$$4_labelColor$$ && ("bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$65$$, $seriesIndex$$24$$) || D.$DvtChartTypeUtils$$.$isBubble$($chart$$65$$)) && ("center" == $position$$5$$ || "inBottom" == $position$$5$$ || "inTop" == $position$$5$$ || "inRight" == $position$$5$$ || "inLeft" == $position$$5$$) ? ($dataColor$$4_labelColor$$ = D.$DvtChartStyleUtils$$.$getPattern$($chart$$65$$, $seriesIndex$$24$$, $groupIndex$$16$$) != D.$JSCompiler_alias_NULL$$ ? "#000000" : D.$DvtColorUtils$$.$getContrastingTextColor$($dataColor$$4_labelColor$$), 
  $labelStyleArray$$.push(new D.$DvtCSSStyle$$("color: " + $dataColor$$4_labelColor$$ + ";"))) : $labelStyleArray$$.push(new D.$DvtCSSStyle$$("color: #333333;"));
  $labelStyleArray$$.push($chart$$65$$.$getOptions$().styleDefaults.dataLabelStyle);
  $labelStyleArray$$.push(new D.$DvtCSSStyle$$(D.$DvtChartDataUtils$$.$getDataItem$($chart$$65$$, $seriesIndex$$24$$, $groupIndex$$16$$).labelStyle));
  return(0,D.$DvtCSSStyle$mergeStyles$$)($labelStyleArray$$)
};
D.$DvtChartStyleUtils$$.$getDataLabelPosition$ = function $$DvtChartStyleUtils$$$$getDataLabelPosition$$($chart$$66$$, $bNegative_seriesIndex$$25$$, $groupIndex$$17$$) {
  var $position$$6$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$66$$, $bNegative_seriesIndex$$25$$, $groupIndex$$17$$).labelPosition;
  $position$$6$$ || ($position$$6$$ = $chart$$66$$.$getOptions$().styleDefaults.dataLabelPosition);
  var $bBidi$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$66$$.$_context$);
  if("bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$66$$, $bNegative_seriesIndex$$25$$)) {
    if(D.$DvtChartTypeUtils$$.$isPolar$($chart$$66$$)) {
      return"center"
    }
    if("insideBarEdge" != $position$$6$$ && "center" != $position$$6$$) {
      if(D.$DvtChartTypeUtils$$.$isStacked$($chart$$66$$)) {
        return"center"
      }
      "outsideBarEdge" != $position$$6$$ && ($position$$6$$ = "insideBarEdge")
    }
    $bNegative_seriesIndex$$25$$ = 0 > D.$DvtChartDataUtils$$.getValue($chart$$66$$, $bNegative_seriesIndex$$25$$, $groupIndex$$17$$);
    return"outsideBarEdge" == $position$$6$$ ? D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$66$$) ? !$bNegative_seriesIndex$$25$$ && !$bBidi$$ || $bNegative_seriesIndex$$25$$ && $bBidi$$ ? "right" : "left" : $bNegative_seriesIndex$$25$$ ? "below" : "above" : "insideBarEdge" == $position$$6$$ ? D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$66$$) ? !$bNegative_seriesIndex$$25$$ && !$bBidi$$ || $bNegative_seriesIndex$$25$$ && $bBidi$$ ? "inRight" : "inLeft" : $bNegative_seriesIndex$$25$$ ? "inBottom" : 
    "inTop" : "center"
  }
  if("belowMarker" == $position$$6$$) {
    return"below"
  }
  if("aboveMarker" == $position$$6$$) {
    return"above"
  }
  if("afterMarker" != $position$$6$$ && "beforeMarker" != $position$$6$$ && "center" != $position$$6$$) {
    if(D.$DvtChartTypeUtils$$.$isBubble$($chart$$66$$)) {
      return"center"
    }
    $position$$6$$ = "afterMarker"
  }
  return!$bBidi$$ && "afterMarker" == $position$$6$$ || $bBidi$$ && "beforeMarker" == $position$$6$$ ? "right" : !$bBidi$$ && "beforeMarker" == $position$$6$$ || $bBidi$$ && "afterMarker" == $position$$6$$ ? "left" : "center"
};
D.$DvtChartStyleUtils$$.$isOverviewRendered$ = function $$DvtChartStyleUtils$$$$isOverviewRendered$$($chart$$67$$) {
  var $options$$91$$ = $chart$$67$$.$getOptions$();
  return D.$DvtChartTypeUtils$$.$isOverviewSupported$($chart$$67$$) && "off" != $options$$91$$.overview.rendered
};
D.$DvtChartStyleUtils$$.$getOverviewHeight$ = function $$DvtChartStyleUtils$$$$getOverviewHeight$$($chart$$68$$) {
  var $defaultRatio_options$$92$$ = $chart$$68$$.$getOptions$(), $height$$44$$ = $defaultRatio_options$$92$$.overview.height;
  if($height$$44$$ != D.$JSCompiler_alias_NULL$$ && ("string" == typeof $height$$44$$ && ($height$$44$$ = "%" == $height$$44$$.slice(-1) ? $chart$$68$$.getHeight() * (0,window.Number)($height$$44$$.slice(0, -1)) / 100 : "px" == $height$$44$$.slice(-2) ? (0,window.Number)($height$$44$$.slice(0, -2)) : (0,window.Number)($height$$44$$)), !(0,window.isNaN)($height$$44$$) && 0 < $height$$44$$)) {
    return $height$$44$$
  }
  $defaultRatio_options$$92$$ = "disabled" == $defaultRatio_options$$92$$.timeAxisType ? 0.2 : 0.25;
  return $chart$$68$$.getHeight() * $defaultRatio_options$$92$$
};
D.$DvtChartTextUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartTextUtils$$, D.$DvtObj$$, "DvtChartTextUtils");
D.$DvtChartTextUtils$$.$createText$ = function $$DvtChartTextUtils$$$$createText$$($eventManager$$3$$, $container$$36$$, $text$$25_textString$$, $cssStyle$$3$$, $x$$108$$, $y$$89$$, $width$$62$$, $height$$47$$, $params$$18$$) {
  $text$$25_textString$$ = new D.$DvtOutputText$$($container$$36$$.$_context$, $text$$25_textString$$, $x$$108$$, $y$$89$$);
  $text$$25_textString$$.$setCSSStyle$($cssStyle$$3$$);
  return D.$DvtTextUtils$$.$fitText$($text$$25_textString$$, $width$$62$$, $height$$47$$, $container$$36$$) ? ($eventManager$$3$$.$associate$($text$$25_textString$$, new D.$DvtSimpleObjPeer$$($text$$25_textString$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $params$$18$$)), $text$$25_textString$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtChartTextUtils$$.$areTitlesRendered$ = function $$DvtChartTextUtils$$$$areTitlesRendered$$($chart$$90_options$$98$$) {
  $chart$$90_options$$98$$ = $chart$$90_options$$98$$.$getOptions$();
  return $chart$$90_options$$98$$.title.text || $chart$$90_options$$98$$.subtitle.text || $chart$$90_options$$98$$.footnote.text
};
D.$DvtChartTooltipUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartTooltipUtils$$, D.$DvtObj$$, "DvtChartTooltipUtils");
D.$DvtChartTooltipUtils$$.$_TYPE_X$ = "x";
D.$DvtChartTooltipUtils$$.$_TYPE_Y$ = "y";
D.$DvtChartTooltipUtils$$.$_TYPE_Y2$ = "y2";
D.$DvtChartTooltipUtils$$.$_TYPE_Z$ = "z";
D.$DvtChartTooltipUtils$$.$_TYPE_VALUE$ = "value";
D.$DvtChartTooltipUtils$$.$_TYPE_TARGET_VALUE$ = "targetValue";
D.$DvtChartTooltipUtils$$.$hasDatatips$ = function $$DvtChartTooltipUtils$$$$hasDatatips$$($chart$$29_options$$74$$) {
  $chart$$29_options$$74$$ = $chart$$29_options$$74$$.$getOptions$();
  return"none" == $chart$$29_options$$74$$.styleDefaults.seriesTooltipType && "none" == $chart$$29_options$$74$$.styleDefaults.groupTooltipType && "none" == $chart$$29_options$$74$$.styleDefaults.valueTooltipType ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTooltipUtils$$.$getDatatipColor$ = function $$DvtChartTooltipUtils$$$$getDatatipColor$$($chart$$30$$, $seriesIndex$$5$$, $groupIndex$$2$$) {
  return D.$DvtChartStyleUtils$$.$getColor$($chart$$30$$, $seriesIndex$$5$$, $groupIndex$$2$$)
};
D.$DvtChartTooltipUtils$$.$getDatatip$ = function $$DvtChartTooltipUtils$$$$getDatatip$$($arTooltip_dataItem$$2_target$$56$$, $chart$$31$$, $seriesIndex$$6$$, $groupIndex$$3$$) {
  if(0 > $seriesIndex$$6$$ || 0 > $groupIndex$$3$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  if(($arTooltip_dataItem$$2_target$$56$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$31$$, $seriesIndex$$6$$, $groupIndex$$3$$)) && $arTooltip_dataItem$$2_target$$56$$.shortDesc) {
    return $arTooltip_dataItem$$2_target$$56$$.shortDesc
  }
  $arTooltip_dataItem$$2_target$$56$$ = [];
  D.$DvtChartTooltipUtils$$.$_addSeriesStrings$($arTooltip_dataItem$$2_target$$56$$, $chart$$31$$, $seriesIndex$$6$$);
  D.$DvtChartTooltipUtils$$.$_addGroupStrings$($arTooltip_dataItem$$2_target$$56$$, $chart$$31$$, $seriesIndex$$6$$, $groupIndex$$3$$);
  D.$DvtChartTooltipUtils$$.$_addValueStrings$($arTooltip_dataItem$$2_target$$56$$, $chart$$31$$, $seriesIndex$$6$$, $groupIndex$$3$$);
  return D.$DvtChartTooltipUtils$$.$_convertLinesToString$($arTooltip_dataItem$$2_target$$56$$)
};
D.$DvtChartTooltipUtils$$.$getOtherSliceDatatip$ = function $$DvtChartTooltipUtils$$$$getOtherSliceDatatip$$($chart$$32$$, $otherValue$$) {
  var $arTooltip$$1$$ = [], $options$$75_val$$27$$ = $chart$$32$$.$getOptions$(), $bundle$$3_labelValue$$ = $chart$$32$$.$getBundle$();
  if("none" != $options$$75_val$$27$$.styleDefaults.seriesTooltipType) {
    var $otherStr$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$3_labelValue$$, "LABEL_OTHER", D.$JSCompiler_alias_NULL$$);
    $arTooltip$$1$$.push($otherStr$$)
  }
  D.$DvtChartTooltipUtils$$.$_addGroupStrings$($arTooltip$$1$$, $chart$$32$$, 0, 0);
  "none" != $options$$75_val$$27$$.styleDefaults.valueTooltipType && ($options$$75_val$$27$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$75_val$$27$$.valueFormats, D.$DvtChartTooltipUtils$$.$_TYPE_VALUE$, $otherValue$$), $bundle$$3_labelValue$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$3_labelValue$$, "LABEL_VALUE", $options$$75_val$$27$$), $arTooltip$$1$$.push($bundle$$3_labelValue$$));
  return D.$DvtChartTooltipUtils$$.$_convertLinesToString$($arTooltip$$1$$)
};
D.$DvtChartTooltipUtils$$.$getRefObjTooltip$ = function $$DvtChartTooltipUtils$$$$getRefObjTooltip$$($refObj$$) {
  if($refObj$$.shortDesc) {
    return $refObj$$.shortDesc
  }
};
D.$DvtChartTooltipUtils$$.$_addSeriesStrings$ = function $$DvtChartTooltipUtils$$$$_addSeriesStrings$$($arTooltip$$2$$, $chart$$34_labelSeries$$, $seriesIndex$$7_seriesLabel$$1$$) {
  if("none" != $chart$$34_labelSeries$$.$getOptions$().styleDefaults.seriesTooltipType) {
    var $bundle$$4$$ = $chart$$34_labelSeries$$.$getBundle$();
    if($seriesIndex$$7_seriesLabel$$1$$ = D.$DvtChartDataUtils$$.$getSeriesLabel$($chart$$34_labelSeries$$, $seriesIndex$$7_seriesLabel$$1$$)) {
      "funnel" == $chart$$34_labelSeries$$.$getType$() ? $arTooltip$$2$$.push($seriesIndex$$7_seriesLabel$$1$$) : ($chart$$34_labelSeries$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$4$$, "LABEL_SERIES", $seriesIndex$$7_seriesLabel$$1$$), $arTooltip$$2$$.push($chart$$34_labelSeries$$))
    }
  }
};
D.$DvtChartTooltipUtils$$.$_addGroupStrings$ = function $$DvtChartTooltipUtils$$$$_addGroupStrings$$($arTooltip$$3$$, $JSCompiler_StaticMethods_formatLabel$self$$inline_3332_JSCompiler_temp$$318_chart$$35_groupLabel_twoLabels$$inline_3334$$, $bundle$$5_labelGroup_seriesIndex$$8$$, $groupIndex$$6$$) {
  var $options$$77$$ = $JSCompiler_StaticMethods_formatLabel$self$$inline_3332_JSCompiler_temp$$318_chart$$35_groupLabel_twoLabels$$inline_3334$$.$getOptions$(), $dataItem$$3$$ = D.$DvtChartDataUtils$$.$getDataItem$($JSCompiler_StaticMethods_formatLabel$self$$inline_3332_JSCompiler_temp$$318_chart$$35_groupLabel_twoLabels$$inline_3334$$, $bundle$$5_labelGroup_seriesIndex$$8$$, $groupIndex$$6$$);
  "none" == $options$$77$$.styleDefaults.groupTooltipType || D.$DvtChartTypeUtils$$.$isPie$($JSCompiler_StaticMethods_formatLabel$self$$inline_3332_JSCompiler_temp$$318_chart$$35_groupLabel_twoLabels$$inline_3334$$) || ($bundle$$5_labelGroup_seriesIndex$$8$$ = $JSCompiler_StaticMethods_formatLabel$self$$inline_3332_JSCompiler_temp$$318_chart$$35_groupLabel_twoLabels$$inline_3334$$.$getBundle$(), $options$$77$$.timeAxisType && "disabled" != $options$$77$$.timeAxisType ? ($JSCompiler_StaticMethods_formatLabel$self$$inline_3332_JSCompiler_temp$$318_chart$$35_groupLabel_twoLabels$$inline_3334$$ = 
  $JSCompiler_StaticMethods_formatLabel$self$$inline_3332_JSCompiler_temp$$318_chart$$35_groupLabel_twoLabels$$inline_3334$$.$xAxis$.$Info$, $JSCompiler_StaticMethods_formatLabel$self$$inline_3332_JSCompiler_temp$$318_chart$$35_groupLabel_twoLabels$$inline_3334$$ = (0,D.$JSCompiler_StaticMethods__formatAxisLabel$$)($JSCompiler_StaticMethods_formatLabel$self$$inline_3332_JSCompiler_temp$$318_chart$$35_groupLabel_twoLabels$$inline_3334$$, new window.Date($dataItem$$3$$.x + $JSCompiler_StaticMethods_formatLabel$self$$inline_3332_JSCompiler_temp$$318_chart$$35_groupLabel_twoLabels$$inline_3334$$.$_timeZoneOffset$), 
  D.$JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods_formatLabel$self$$inline_3332_JSCompiler_temp$$318_chart$$35_groupLabel_twoLabels$$inline_3334$$ = $JSCompiler_StaticMethods_formatLabel$self$$inline_3332_JSCompiler_temp$$318_chart$$35_groupLabel_twoLabels$$inline_3334$$[1] != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_formatLabel$self$$inline_3332_JSCompiler_temp$$318_chart$$35_groupLabel_twoLabels$$inline_3334$$[0] + " " + $JSCompiler_StaticMethods_formatLabel$self$$inline_3332_JSCompiler_temp$$318_chart$$35_groupLabel_twoLabels$$inline_3334$$[1] : 
  $JSCompiler_StaticMethods_formatLabel$self$$inline_3332_JSCompiler_temp$$318_chart$$35_groupLabel_twoLabels$$inline_3334$$[0]) : $JSCompiler_StaticMethods_formatLabel$self$$inline_3332_JSCompiler_temp$$318_chart$$35_groupLabel_twoLabels$$inline_3334$$ = D.$DvtChartDataUtils$$.$getGroupLabel$($JSCompiler_StaticMethods_formatLabel$self$$inline_3332_JSCompiler_temp$$318_chart$$35_groupLabel_twoLabels$$inline_3334$$, $groupIndex$$6$$), $JSCompiler_StaticMethods_formatLabel$self$$inline_3332_JSCompiler_temp$$318_chart$$35_groupLabel_twoLabels$$inline_3334$$ && 
  ($bundle$$5_labelGroup_seriesIndex$$8$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$5_labelGroup_seriesIndex$$8$$, "LABEL_GROUP", $JSCompiler_StaticMethods_formatLabel$self$$inline_3332_JSCompiler_temp$$318_chart$$35_groupLabel_twoLabels$$inline_3334$$), $arTooltip$$3$$.push($bundle$$5_labelGroup_seriesIndex$$8$$)))
};
D.$DvtChartTooltipUtils$$.$_addValueStrings$ = function $$DvtChartTooltipUtils$$$$_addValueStrings$$($arTooltip$$4$$, $chart$$36_target$$57_type$$94_zValue$$, $labelY$$2_seriesIndex$$9_y1Value$$, $groupIndex$$7_labelX$$4_xValue$$) {
  var $options$$78_valueFormats$$1$$ = $chart$$36_target$$57_type$$94_zValue$$.$getOptions$();
  if("none" != $options$$78_valueFormats$$1$$.styleDefaults.valueTooltipType) {
    var $bundle$$6_labelValue2_labelZ$$ = $chart$$36_target$$57_type$$94_zValue$$.$getBundle$(), $dataItem$$4_labelValue$$1_val$$28_yValue$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$36_target$$57_type$$94_zValue$$, $labelY$$2_seriesIndex$$9_y1Value$$, $groupIndex$$7_labelX$$4_xValue$$), $options$$78_valueFormats$$1$$ = $options$$78_valueFormats$$1$$.valueFormats;
    if("scatter" == $chart$$36_target$$57_type$$94_zValue$$.$getType$() || "bubble" == $chart$$36_target$$57_type$$94_zValue$$.$getType$()) {
      $groupIndex$$7_labelX$$4_xValue$$ = $dataItem$$4_labelValue$$1_val$$28_yValue$$.x, $labelY$$2_seriesIndex$$9_y1Value$$ = $dataItem$$4_labelValue$$1_val$$28_yValue$$.y, $groupIndex$$7_labelX$$4_xValue$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$78_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_X$, $groupIndex$$7_labelX$$4_xValue$$), $labelY$$2_seriesIndex$$9_y1Value$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$78_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_Y$, 
      $labelY$$2_seriesIndex$$9_y1Value$$), $groupIndex$$7_labelX$$4_xValue$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$6_labelValue2_labelZ$$, "LABEL_X", $groupIndex$$7_labelX$$4_xValue$$), $labelY$$2_seriesIndex$$9_y1Value$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$6_labelValue2_labelZ$$, "LABEL_Y", $labelY$$2_seriesIndex$$9_y1Value$$), $arTooltip$$4$$.push($groupIndex$$7_labelX$$4_xValue$$), $arTooltip$$4$$.push($labelY$$2_seriesIndex$$9_y1Value$$), 
      "bubble" == $chart$$36_target$$57_type$$94_zValue$$.$getType$() && ($chart$$36_target$$57_type$$94_zValue$$ = $dataItem$$4_labelValue$$1_val$$28_yValue$$.z, $chart$$36_target$$57_type$$94_zValue$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$78_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_Z$, $chart$$36_target$$57_type$$94_zValue$$), $bundle$$6_labelValue2_labelZ$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$6_labelValue2_labelZ$$, "LABEL_Z", $chart$$36_target$$57_type$$94_zValue$$), 
      $arTooltip$$4$$.push($bundle$$6_labelValue2_labelZ$$))
    }else {
      if("pie" == $chart$$36_target$$57_type$$94_zValue$$.$getType$()) {
        $dataItem$$4_labelValue$$1_val$$28_yValue$$ = D.$DvtChartDataUtils$$.getValue($chart$$36_target$$57_type$$94_zValue$$, $labelY$$2_seriesIndex$$9_y1Value$$, $groupIndex$$7_labelX$$4_xValue$$), $dataItem$$4_labelValue$$1_val$$28_yValue$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$78_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_VALUE$, $dataItem$$4_labelValue$$1_val$$28_yValue$$), $dataItem$$4_labelValue$$1_val$$28_yValue$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$6_labelValue2_labelZ$$, 
        "LABEL_VALUE", $dataItem$$4_labelValue$$1_val$$28_yValue$$), $arTooltip$$4$$.push($dataItem$$4_labelValue$$1_val$$28_yValue$$)
      }else {
        if("funnel" == $chart$$36_target$$57_type$$94_zValue$$.$getType$()) {
          if($dataItem$$4_labelValue$$1_val$$28_yValue$$ = D.$DvtChartDataUtils$$.getValue($chart$$36_target$$57_type$$94_zValue$$, $labelY$$2_seriesIndex$$9_y1Value$$, $groupIndex$$7_labelX$$4_xValue$$), $dataItem$$4_labelValue$$1_val$$28_yValue$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$78_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_VALUE$, $dataItem$$4_labelValue$$1_val$$28_yValue$$), $dataItem$$4_labelValue$$1_val$$28_yValue$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$6_labelValue2_labelZ$$, 
          "LABEL_VALUE", $dataItem$$4_labelValue$$1_val$$28_yValue$$), $arTooltip$$4$$.push($dataItem$$4_labelValue$$1_val$$28_yValue$$), $chart$$36_target$$57_type$$94_zValue$$ = D.$DvtChartDataUtils$$.$getTargetValue$($chart$$36_target$$57_type$$94_zValue$$, $labelY$$2_seriesIndex$$9_y1Value$$)) {
            $chart$$36_target$$57_type$$94_zValue$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$78_valueFormats$$1$$, D.$DvtChartTooltipUtils$$.$_TYPE_TARGET_VALUE$, $chart$$36_target$$57_type$$94_zValue$$), $bundle$$6_labelValue2_labelZ$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$6_labelValue2_labelZ$$, "LABEL_TARGET_VALUE", $chart$$36_target$$57_type$$94_zValue$$), $arTooltip$$4$$.push($bundle$$6_labelValue2_labelZ$$)
          }
        }else {
          $dataItem$$4_labelValue$$1_val$$28_yValue$$ = D.$DvtChartDataUtils$$.getValue($chart$$36_target$$57_type$$94_zValue$$, $labelY$$2_seriesIndex$$9_y1Value$$, $groupIndex$$7_labelX$$4_xValue$$), $chart$$36_target$$57_type$$94_zValue$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$36_target$$57_type$$94_zValue$$, $labelY$$2_seriesIndex$$9_y1Value$$) ? D.$DvtChartTooltipUtils$$.$_TYPE_Y2$ : D.$DvtChartTooltipUtils$$.$_TYPE_Y$, $dataItem$$4_labelValue$$1_val$$28_yValue$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($options$$78_valueFormats$$1$$, 
          $chart$$36_target$$57_type$$94_zValue$$, $dataItem$$4_labelValue$$1_val$$28_yValue$$), $bundle$$6_labelValue2_labelZ$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$6_labelValue2_labelZ$$, "LABEL_VALUE", $dataItem$$4_labelValue$$1_val$$28_yValue$$), $arTooltip$$4$$.push($bundle$$6_labelValue2_labelZ$$)
        }
      }
    }
  }
};
D.$DvtChartTooltipUtils$$.$_convertLinesToString$ = function $$DvtChartTooltipUtils$$$$_convertLinesToString$$($arTooltip$$5$$) {
  for(var $ret$$57$$ = "", $i$$272$$ = 0;$i$$272$$ < $arTooltip$$5$$.length;$i$$272$$++) {
    0 < $ret$$57$$.length && ($ret$$57$$ += "\n"), $ret$$57$$ += $arTooltip$$5$$[$i$$272$$]
  }
  return $ret$$57$$
};
D.$DvtChartTooltipUtils$$.$_formatValue$ = function $$DvtChartTooltipUtils$$$$_formatValue$$($formatter_valueFormats$$2$$, $type$$95$$, $value$$70$$, $min$$3$$, $max$$3$$, $majorIncrement$$1$$) {
  var $scaling$$ = "auto", $autoPrecision$$ = "on", $converter$$1$$;
  if($formatter_valueFormats$$2$$) {
    for(var $i$$273$$ = 0;$i$$273$$ < $formatter_valueFormats$$2$$.length;$i$$273$$++) {
      if($formatter_valueFormats$$2$$[$i$$273$$].type == $type$$95$$) {
        $formatter_valueFormats$$2$$[$i$$273$$].scaling && ($scaling$$ = $formatter_valueFormats$$2$$[$i$$273$$].scaling);
        $formatter_valueFormats$$2$$[$i$$273$$].autoPrecision && ($autoPrecision$$ = $formatter_valueFormats$$2$$[$i$$273$$].autoPrecision);
        $formatter_valueFormats$$2$$[$i$$273$$].converter && ($converter$$1$$ = $formatter_valueFormats$$2$$[$i$$273$$].converter);
        break
      }
    }
  }
  $formatter_valueFormats$$2$$ = new D.$DvtLinearScaleAxisValueFormatter$$($min$$3$$ != D.$JSCompiler_alias_NULL$$ ? $min$$3$$ : $value$$70$$, $max$$3$$ != D.$JSCompiler_alias_NULL$$ ? $max$$3$$ : $value$$70$$, $majorIncrement$$1$$ != D.$JSCompiler_alias_NULL$$ ? $majorIncrement$$1$$ : 0, $scaling$$, $autoPrecision$$);
  return $converter$$1$$ && ($converter$$1$$.getAsString || $converter$$1$$.format) ? $formatter_valueFormats$$2$$.$format$($value$$70$$, $converter$$1$$) : $formatter_valueFormats$$2$$.$format$($value$$70$$)
};
D.$DvtChartTypeUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartTypeUtils$$, D.$DvtObj$$, "DvtChartTypeUtils");
D.$DvtChartTypeUtils$$.$isSpark$ = function $$DvtChartTypeUtils$$$$isSpark$$($chart$$133$$) {
  return $chart$$133$$.$getOptions$().__spark
};
D.$DvtChartTypeUtils$$.$isCombo$ = function $$DvtChartTypeUtils$$$$isCombo$$($chart$$134$$) {
  return"combo" == $chart$$134$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isVertical$ = function $$DvtChartTypeUtils$$$$isVertical$$($chart$$135$$) {
  return!D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$135$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$135$$)
};
D.$DvtChartTypeUtils$$.$isHorizontal$ = function $$DvtChartTypeUtils$$$$isHorizontal$$($chart$$136$$) {
  return"horizontal" == $chart$$136$$.$getOptions$().orientation && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$136$$) && (D.$DvtChartTypeUtils$$.$isBLAC$($chart$$136$$) || D.$DvtChartTypeUtils$$.$isFunnel$($chart$$136$$))
};
D.$DvtChartTypeUtils$$.$isPolar$ = function $$DvtChartTypeUtils$$$$isPolar$$($chart$$137$$) {
  return"polar" == $chart$$137$$.$getOptions$().coordinateSystem
};
D.$DvtChartTypeUtils$$.$isStacked$ = function $$DvtChartTypeUtils$$$$isStacked$$($chart$$138$$) {
  return"on" != $chart$$138$$.$getOptions$().stack || D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$138$$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$138$$)
};
D.$DvtChartTypeUtils$$.$isBar$ = function $$DvtChartTypeUtils$$$$isBar$$($chart$$139$$) {
  return"bar" == $chart$$139$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isLine$ = function $$DvtChartTypeUtils$$$$isLine$$($chart$$140$$) {
  return"line" == $chart$$140$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isLineWithArea$ = function $$DvtChartTypeUtils$$$$isLineWithArea$$($chart$$141$$) {
  return"lineWithArea" == $chart$$141$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isArea$ = function $$DvtChartTypeUtils$$$$isArea$$($chart$$142$$) {
  return"area" == $chart$$142$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isScatter$ = function $$DvtChartTypeUtils$$$$isScatter$$($chart$$143$$) {
  return"scatter" == $chart$$143$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isBubble$ = function $$DvtChartTypeUtils$$$$isBubble$$($chart$$144$$) {
  return"bubble" == $chart$$144$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isPie$ = function $$DvtChartTypeUtils$$$$isPie$$($chart$$145$$) {
  return"pie" == $chart$$145$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isFunnel$ = function $$DvtChartTypeUtils$$$$isFunnel$$($chart$$146$$) {
  return"funnel" == $chart$$146$$.$getType$()
};
D.$DvtChartTypeUtils$$.$isDualY$ = function $$DvtChartTypeUtils$$$$isDualY$$($chart$$147$$) {
  return!D.$DvtChartTypeUtils$$.$hasAxes$($chart$$147$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$147$$) || D.$DvtChartTypeUtils$$.$isPolar$($chart$$147$$) ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$isBLAC$ = function $$DvtChartTypeUtils$$$$isBLAC$$($chart$$148_type$$97$$) {
  $chart$$148_type$$97$$ = $chart$$148_type$$97$$.$getType$();
  return"bar" == $chart$$148_type$$97$$ || "line" == $chart$$148_type$$97$$ || "area" == $chart$$148_type$$97$$ || "lineWithArea" == $chart$$148_type$$97$$ || "combo" == $chart$$148_type$$97$$
};
D.$DvtChartTypeUtils$$.$isScatterBubble$ = function $$DvtChartTypeUtils$$$$isScatterBubble$$($chart$$149_type$$98$$) {
  $chart$$149_type$$98$$ = $chart$$149_type$$98$$.$getType$();
  return"scatter" == $chart$$149_type$$98$$ || "bubble" == $chart$$149_type$$98$$
};
D.$DvtChartTypeUtils$$.$isLineArea$ = function $$DvtChartTypeUtils$$$$isLineArea$$($chart$$150_type$$99$$) {
  $chart$$150_type$$99$$ = $chart$$150_type$$99$$.$getType$();
  return"line" == $chart$$150_type$$99$$ || "area" == $chart$$150_type$$99$$ || "lineWithArea" == $chart$$150_type$$99$$
};
D.$DvtChartTypeUtils$$.$isTimeAxisSupported$ = function $$DvtChartTypeUtils$$$$isTimeAxisSupported$$($chart$$151$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$151$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$151$$)
};
D.$DvtChartTypeUtils$$.$isScrollSupported$ = function $$DvtChartTypeUtils$$$$isScrollSupported$$($chart$$152$$) {
  return!D.$DvtChartTypeUtils$$.$isPie$($chart$$152$$) && !D.$DvtChartTypeUtils$$.$isFunnel$($chart$$152$$) && !D.$DvtChartTypeUtils$$.$isPolar$($chart$$152$$)
};
D.$DvtChartTypeUtils$$.$isOverviewSupported$ = function $$DvtChartTypeUtils$$$$isOverviewSupported$$($chart$$153$$) {
  return D.$DvtChartTypeUtils$$.$isBLAC$($chart$$153$$) && D.$DvtChartTypeUtils$$.$isVertical$($chart$$153$$)
};
D.$DvtChartTypeUtils$$.$isHorizScrollbarSupported$ = function $$DvtChartTypeUtils$$$$isHorizScrollbarSupported$$($chart$$154$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$154$$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$154$$) && D.$DvtChartTypeUtils$$.$isVertical$($chart$$154$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$154$$)
};
D.$DvtChartTypeUtils$$.$isVertScrollbarSupported$ = function $$DvtChartTypeUtils$$$$isVertScrollbarSupported$$($chart$$155$$) {
  return D.$DvtChartTypeUtils$$.$isPolar$($chart$$155$$) ? D.$JSCompiler_alias_FALSE$$ : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$155$$) && D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$155$$) || D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$155$$)
};
D.$DvtChartTypeUtils$$.$hasAxes$ = function $$DvtChartTypeUtils$$$$hasAxes$$($chart$$156$$) {
  return!("pie" == $chart$$156$$.$getType$() || "funnel" == $chart$$156$$.$getType$())
};
D.$DvtChartTypeUtils$$.$hasY2DataOnly$ = function $$DvtChartTypeUtils$$$$hasY2DataOnly$$($chart$$157$$) {
  if(!D.$DvtChartTypeUtils$$.$isDualY$($chart$$157$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $seriesCount$$14$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$157$$);
  if(0 == $seriesCount$$14$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $i$$301$$ = 0;$i$$301$$ < $seriesCount$$14$$;$i$$301$$++) {
    if(!D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$157$$, $i$$301$$)) {
      return D.$JSCompiler_alias_FALSE$$
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$hasY2Data$ = function $$DvtChartTypeUtils$$$$hasY2Data$$($chart$$158$$, $type$$100$$) {
  if(!D.$DvtChartTypeUtils$$.$isDualY$($chart$$158$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $seriesCount$$15$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$158$$), $i$$302$$ = 0;$i$$302$$ < $seriesCount$$15$$;$i$$302$$++) {
    if(!($type$$100$$ && D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$158$$, $i$$302$$) != $type$$100$$) && D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$158$$, $i$$302$$)) {
      return D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartTypeUtils$$.$hasY2BarData$ = function $$DvtChartTypeUtils$$$$hasY2BarData$$($chart$$159$$) {
  return D.$DvtChartTypeUtils$$.$hasY2Data$($chart$$159$$, "bar")
};
D.$DvtChartTypeUtils$$.$hasBarSeries$ = function $$DvtChartTypeUtils$$$$hasBarSeries$$($chart$$160$$) {
  return D.$DvtChartTypeUtils$$.$_hasSeriesType$($chart$$160$$, "bar")
};
D.$DvtChartTypeUtils$$.$hasLineSeries$ = function $$DvtChartTypeUtils$$$$hasLineSeries$$($chart$$161$$) {
  return D.$DvtChartTypeUtils$$.$_hasSeriesType$($chart$$161$$, "line")
};
D.$DvtChartTypeUtils$$.$hasAreaSeries$ = function $$DvtChartTypeUtils$$$$hasAreaSeries$$($chart$$162$$) {
  return D.$DvtChartTypeUtils$$.$_hasSeriesType$($chart$$162$$, "area")
};
D.$DvtChartTypeUtils$$.$hasLineWithAreaSeries$ = function $$DvtChartTypeUtils$$$$hasLineWithAreaSeries$$($chart$$163$$) {
  return D.$DvtChartTypeUtils$$.$_hasSeriesType$($chart$$163$$, "lineWithArea")
};
D.$DvtChartTypeUtils$$.$_hasSeriesType$ = function $$DvtChartTypeUtils$$$$_hasSeriesType$$($chart$$164$$, $type$$101$$) {
  if(D.$DvtChartTypeUtils$$.$isBLAC$($chart$$164$$)) {
    for(var $seriesCount$$16$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$164$$), $seriesIndex$$52$$ = 0;$seriesIndex$$52$$ < $seriesCount$$16$$;$seriesIndex$$52$$++) {
      if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$164$$, $seriesIndex$$52$$) && D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$164$$, $seriesIndex$$52$$) == $type$$101$$) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartTypeUtils$$.$hasCenteredSeries$ = function $$DvtChartTypeUtils$$$$hasCenteredSeries$$($chart$$165$$) {
  if(!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$165$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $seriesCount$$17$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$165$$), $seriesIndex$$53$$ = 0;$seriesIndex$$53$$ < $seriesCount$$17$$;$seriesIndex$$53$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$165$$, $seriesIndex$$53$$) && "bar" != D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$165$$, $seriesIndex$$53$$)) {
      var $lineType$$2$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$165$$, $seriesIndex$$53$$);
      if("centeredSegmented" == $lineType$$2$$ || "centeredStepped" == $lineType$$2$$) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartTypeUtils$$.$hasUncenteredSeries$ = function $$DvtChartTypeUtils$$$$hasUncenteredSeries$$($chart$$166$$) {
  if(!D.$DvtChartTypeUtils$$.$isBLAC$($chart$$166$$)) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $seriesCount$$18$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$166$$), $seriesIndex$$54$$ = 0;$seriesIndex$$54$$ < $seriesCount$$18$$;$seriesIndex$$54$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$166$$, $seriesIndex$$54$$) && "bar" != D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$166$$, $seriesIndex$$54$$)) {
      var $lineType$$3$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$166$$, $seriesIndex$$54$$);
      if("segmented" == $lineType$$3$$ || "stepped" == $lineType$$3$$) {
        return D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtChartTypeUtils$$.$isStandalonePlotArea$ = function $$DvtChartTypeUtils$$$$isStandalonePlotArea$$($chart$$167$$) {
  window.options = $chart$$167$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$167$$) || "off" != window.options.legend.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$167$$, "x") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$167$$, "y") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$167$$, "y2") ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$isStandaloneXAxis$ = function $$DvtChartTypeUtils$$$$isStandaloneXAxis$$($chart$$168$$) {
  window.options = $chart$$168$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$168$$) || "off" != window.options.legend.rendered || "off" != window.options.plotArea.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$168$$, "y") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$168$$, "y2") ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$isStandaloneYAxis$ = function $$DvtChartTypeUtils$$$$isStandaloneYAxis$$($chart$$169$$) {
  window.options = $chart$$169$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$169$$) || "off" != window.options.legend.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$169$$, "x") || "off" != window.options.plotArea.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$169$$, "y2") ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$ = function $$DvtChartTypeUtils$$$$isStandaloneY2Axis$$($chart$$170$$) {
  window.options = $chart$$170$$.$getOptions$();
  return D.$DvtChartTextUtils$$.$areTitlesRendered$($chart$$170$$) || "off" != window.options.legend.rendered || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$170$$, "x") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$170$$, "y") || "off" != window.options.plotArea.rendered ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtChartMarkerUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartMarkerUtils$$, D.$DvtObj$$, "DvtChartMarkerUtils");
D.$DvtChartMarkerUtils$$.$_MIN_RADIUS$ = 5;
D.$DvtChartMarkerUtils$$.$_MAX_RADIUS_PERCENT$ = 0.125;
D.$DvtChartMarkerUtils$$.$_DEFAULT_MARKER_SIZE_PERCENT$ = 0.2;
D.$DvtChartMarkerUtils$$.$calcBubbleSizes$ = function $$DvtChartMarkerUtils$$$$calcBubbleSizes$$($chart$$69$$, $areaRange_maxArea_maxRadius_minMaxArea_width$$60$$, $height$$45_seriesCount$$7$$) {
  var $minMax_xAxisValueRange_xMinMax$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$69$$, "z"), $minValue$$2$$ = $minMax_xAxisValueRange_xMinMax$$.min, $maxValue$$2_valueRange$$ = $minMax_xAxisValueRange_xMinMax$$.max, $axisHeight$$1_options$$93$$ = $chart$$69$$.$getOptions$(), $minMax_xAxisValueRange_xMinMax$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$69$$, "x"), $xAxisMin_yAxisValueRange_yMinMax$$ = $axisHeight$$1_options$$93$$.xAxis.min ? $axisHeight$$1_options$$93$$.xAxis.min : 
  window.Math.min(0, $minMax_xAxisValueRange_xMinMax$$.min), $minMax_xAxisValueRange_xMinMax$$ = ($axisHeight$$1_options$$93$$.xAxis.max ? $axisHeight$$1_options$$93$$.xAxis.max : window.Math.max(0, $minMax_xAxisValueRange_xMinMax$$.max)) - $xAxisMin_yAxisValueRange_yMinMax$$, $xAxisMin_yAxisValueRange_yMinMax$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$69$$, "y"), $axisWidth_yAxisMin$$ = $axisHeight$$1_options$$93$$.yAxis.min ? $axisHeight$$1_options$$93$$.yAxis.min : window.Math.min(0, 
  $xAxisMin_yAxisValueRange_yMinMax$$.min), $xAxisMin_yAxisValueRange_yMinMax$$ = ($axisHeight$$1_options$$93$$.yAxis.max ? $axisHeight$$1_options$$93$$.yAxis.max : window.Math.max(0, $xAxisMin_yAxisValueRange_yMinMax$$.max)) - $axisWidth_yAxisMin$$;
  D.$DvtChartTypeUtils$$.$isPolar$($chart$$69$$) ? ($axisWidth_yAxisMin$$ = window.Infinity, $axisHeight$$1_options$$93$$ = $chart$$69$$.$getRadius$()) : ($axisWidth_yAxisMin$$ = (1 - $axisHeight$$1_options$$93$$.layout.axisMaxSize) * $areaRange_maxArea_maxRadius_minMaxArea_width$$60$$, $axisHeight$$1_options$$93$$ = (1 - $axisHeight$$1_options$$93$$.layout.axisMaxSize) * $height$$45_seriesCount$$7$$);
  var $minArea$$ = window.Math.PI * window.Math.pow(D.$DvtChartMarkerUtils$$.$_MIN_RADIUS$, 2);
  $areaRange_maxArea_maxRadius_minMaxArea_width$$60$$ = D.$DvtChartMarkerUtils$$.$_MAX_RADIUS_PERCENT$ * window.Math.min($areaRange_maxArea_maxRadius_minMaxArea_width$$60$$, $height$$45_seriesCount$$7$$);
  $areaRange_maxArea_maxRadius_minMaxArea_width$$60$$ = window.Math.PI * window.Math.pow($areaRange_maxArea_maxRadius_minMaxArea_width$$60$$, 2);
  $areaRange_maxArea_maxRadius_minMaxArea_width$$60$$ = D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForCount$($chart$$69$$, $minArea$$, $areaRange_maxArea_maxRadius_minMaxArea_width$$60$$, $minValue$$2$$, $maxValue$$2_valueRange$$);
  $minArea$$ = $areaRange_maxArea_maxRadius_minMaxArea_width$$60$$.minArea;
  $areaRange_maxArea_maxRadius_minMaxArea_width$$60$$ = $areaRange_maxArea_maxRadius_minMaxArea_width$$60$$.maxArea;
  $areaRange_maxArea_maxRadius_minMaxArea_width$$60$$ = D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForDataRange$($minArea$$, $areaRange_maxArea_maxRadius_minMaxArea_width$$60$$, $minValue$$2$$, $maxValue$$2_valueRange$$);
  $minArea$$ = $areaRange_maxArea_maxRadius_minMaxArea_width$$60$$.minArea;
  $areaRange_maxArea_maxRadius_minMaxArea_width$$60$$ = $areaRange_maxArea_maxRadius_minMaxArea_width$$60$$.maxArea;
  $maxValue$$2_valueRange$$ -= $minValue$$2$$;
  $areaRange_maxArea_maxRadius_minMaxArea_width$$60$$ -= $minArea$$;
  $height$$45_seriesCount$$7$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$69$$);
  for(var $seriesIndex$$26$$ = 0;$seriesIndex$$26$$ < $height$$45_seriesCount$$7$$;$seriesIndex$$26$$++) {
    for(var $seriesItem$$13$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$69$$, $seriesIndex$$26$$), $numGroups$$ = $seriesItem$$13$$.items ? $seriesItem$$13$$.items.length : 0, $j$$55$$ = 0;$j$$55$$ < $numGroups$$;$j$$55$$++) {
      var $dataItem$$13$$ = $seriesItem$$13$$.items[$j$$55$$];
      $dataItem$$13$$ && $dataItem$$13$$.z && (1 === $height$$45_seriesCount$$7$$ && 1 === $numGroups$$ ? ($dataItem$$13$$.markerSize = D.$DvtChartMarkerUtils$$.$_DEFAULT_MARKER_SIZE_PERCENT$ * window.Math.min($axisWidth_yAxisMin$$, $axisHeight$$1_options$$93$$), $minMax_xAxisValueRange_xMinMax$$ = 0 === $minMax_xAxisValueRange_xMinMax$$ ? 100 : $minMax_xAxisValueRange_xMinMax$$, $xAxisMin_yAxisValueRange_yMinMax$$ = 0 === $xAxisMin_yAxisValueRange_yMinMax$$ ? 100 : $xAxisMin_yAxisValueRange_yMinMax$$) : 
      $dataItem$$13$$.markerSize = 2 * window.Math.sqrt(($minArea$$ + ($dataItem$$13$$.z - $minValue$$2$$) / $maxValue$$2_valueRange$$ * $areaRange_maxArea_maxRadius_minMaxArea_width$$60$$) / window.Math.PI), $dataItem$$13$$._xAxisRadius = 0.5 * ($dataItem$$13$$.markerSize / $axisWidth_yAxisMin$$) * $minMax_xAxisValueRange_xMinMax$$, $dataItem$$13$$._yAxisRadius = 0.5 * ($dataItem$$13$$.markerSize / $axisHeight$$1_options$$93$$) * $xAxisMin_yAxisValueRange_yMinMax$$)
    }
  }
};
D.$DvtChartMarkerUtils$$.$sortMarkers$ = function $$DvtChartMarkerUtils$$$$sortMarkers$$($markers$$2$$) {
  $markers$$2$$.sort(D.$DvtChartMarkerUtils$$.$_compareSize$)
};
D.$DvtChartMarkerUtils$$.$_compareSize$ = function $$DvtChartMarkerUtils$$$$_compareSize$$($a$$31$$, $b$$17$$) {
  var $aSize$$ = $a$$31$$.$getSize$(), $bSize$$ = $b$$17$$.$getSize$();
  return $aSize$$ > $bSize$$ ? -1 : $aSize$$ < $bSize$$ ? 1 : 0
};
D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForCount$ = function $$DvtChartMarkerUtils$$$$_adjustBubbleSizeRangeForCount$$($avgRelSize_chart$$70_s2$$2$$, $minArea$$1$$, $maxArea$$1$$, $minValue$$3_s1_t1$$, $maxValue$$3_t2$$) {
  for(var $bubbleCount$$ = 0, $sizeTotal$$ = 0, $seriesCount$$8$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($avgRelSize_chart$$70_s2$$2$$), $seriesIndex$$27$$ = 0;$seriesIndex$$27$$ < $seriesCount$$8$$;$seriesIndex$$27$$++) {
    for(var $seriesItem$$14$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($avgRelSize_chart$$70_s2$$2$$, $seriesIndex$$27$$), $numDataItems$$ = $seriesItem$$14$$.items.length, $j$$56$$ = 0;$j$$56$$ < $numDataItems$$;$j$$56$$++) {
      var $dataItem$$14$$ = $seriesItem$$14$$.items[$seriesIndex$$27$$];
      $dataItem$$14$$ && $dataItem$$14$$.z && ($bubbleCount$$++, $sizeTotal$$ += $dataItem$$14$$.z)
    }
  }
  $avgRelSize_chart$$70_s2$$2$$ = ($sizeTotal$$ / $bubbleCount$$ - $minValue$$3_s1_t1$$) / ($maxValue$$3_t2$$ - $minValue$$3_s1_t1$$);
  $minValue$$3_s1_t1$$ = 15 + window.Math.floor(30 * (1 - $avgRelSize_chart$$70_s2$$2$$));
  $maxValue$$3_t2$$ = 30 + window.Math.floor(150 * (1 - $avgRelSize_chart$$70_s2$$2$$));
  $bubbleCount$$ >= $maxValue$$3_t2$$ ? $maxArea$$1$$ = $minArea$$1$$ + 0.15 * ($maxArea$$1$$ - $minArea$$1$$) : $bubbleCount$$ >= $minValue$$3_s1_t1$$ && ($maxArea$$1$$ -= 0.85 / ($maxValue$$3_t2$$ - $minValue$$3_s1_t1$$) * ($bubbleCount$$ - $minValue$$3_s1_t1$$) * ($maxArea$$1$$ - $minArea$$1$$));
  $minValue$$3_s1_t1$$ = 5 + window.Math.floor(15 * (1 - $avgRelSize_chart$$70_s2$$2$$));
  $avgRelSize_chart$$70_s2$$2$$ = 30 + window.Math.floor(70 * (1 - $avgRelSize_chart$$70_s2$$2$$));
  $bubbleCount$$ < $minValue$$3_s1_t1$$ ? $minArea$$1$$ += 0.005 * ($maxArea$$1$$ - $minArea$$1$$) : $bubbleCount$$ < $avgRelSize_chart$$70_s2$$2$$ && ($minArea$$1$$ += (0.005 - 0.005 / ($avgRelSize_chart$$70_s2$$2$$ - $minValue$$3_s1_t1$$) * ($bubbleCount$$ - $minValue$$3_s1_t1$$)) * ($maxArea$$1$$ - $minArea$$1$$));
  return{minArea:$minArea$$1$$, maxArea:$maxArea$$1$$}
};
D.$DvtChartMarkerUtils$$.$_adjustBubbleSizeRangeForDataRange$ = function $$DvtChartMarkerUtils$$$$_adjustBubbleSizeRangeForDataRange$$($minArea$$2$$, $maxArea$$2$$, $buffer$$8_minValue$$4$$, $maxValue$$4$$) {
  if(0 != $maxValue$$4$$ - $buffer$$8_minValue$$4$$) {
    var $bubbleRatio$$ = $maxArea$$2$$ / $minArea$$2$$, $dataRatio$$ = $bubbleRatio$$;
    0 < $maxValue$$4$$ && 0 < $buffer$$8_minValue$$4$$ ? $dataRatio$$ = $maxValue$$4$$ / $buffer$$8_minValue$$4$$ : 0 > $buffer$$8_minValue$$4$$ && 0 > $maxValue$$4$$ && ($dataRatio$$ = $buffer$$8_minValue$$4$$ / $maxValue$$4$$);
    $dataRatio$$ < $bubbleRatio$$ && ($buffer$$8_minValue$$4$$ = $maxArea$$2$$ / $dataRatio$$ - $minArea$$2$$, 0 < $buffer$$8_minValue$$4$$ && ($minArea$$2$$ += $buffer$$8_minValue$$4$$))
  }else {
    $minArea$$2$$ = $maxArea$$2$$
  }
  return{minArea:$minArea$$2$$, maxArea:$maxArea$$2$$}
};
D.$DvtPieChartUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtPieChartUtils$$, D.$DvtObj$$, "DvtPieChartUtils");
D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$ = "_dvtOther";
D.$DvtPieChartUtils$$.$getSliceId$ = function $$DvtPieChartUtils$$$$getSliceId$$($chart$$91$$, $seriesIndex$$28$$) {
  var $dataItem$$15_id$$90$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$91$$, $seriesIndex$$28$$, 0), $dataItem$$15_id$$90$$ = $dataItem$$15_id$$90$$ ? $dataItem$$15_id$$90$$.id : D.$JSCompiler_alias_NULL$$, $series$$13$$ = D.$DvtChartDataUtils$$.$getSeries$($chart$$91$$, $seriesIndex$$28$$), $group$$12$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$91$$, 0);
  return new D.$DvtChartDataItem$$($dataItem$$15_id$$90$$, $series$$13$$, $group$$12$$)
};
D.$DvtPieChartUtils$$.$getOtherSliceId$ = function $$DvtPieChartUtils$$$$getOtherSliceId$$($chart$$92_group$$13$$) {
  $chart$$92_group$$13$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$92_group$$13$$, 0);
  return new D.$DvtChartDataItem$$(D.$JSCompiler_alias_NULL$$, D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$, $chart$$92_group$$13$$)
};
D.$DvtPieChartUtils$$.$getRenderedSeriesIndices$ = function $$DvtPieChartUtils$$$$getRenderedSeriesIndices$$($chart$$93$$) {
  return D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$93$$).$rendered$
};
D.$DvtPieChartUtils$$.$hasOtherSeries$ = function $$DvtPieChartUtils$$$$hasOtherSeries$$($chart$$94$$) {
  return 0 < D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$94$$).$other$.length
};
D.$DvtPieChartUtils$$.$getOtherValue$ = function $$DvtPieChartUtils$$$$getOtherValue$$($chart$$95$$) {
  for(var $otherSeries$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$95$$).$other$, $otherValue$$1$$ = 0, $i$$288$$ = 0;$i$$288$$ < $otherSeries$$.length;$i$$288$$++) {
    var $seriesIndex$$29_value$$72$$ = $otherSeries$$[$i$$288$$];
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$95$$, $seriesIndex$$29_value$$72$$) && ($seriesIndex$$29_value$$72$$ = D.$DvtChartDataUtils$$.getValue($chart$$95$$, $seriesIndex$$29_value$$72$$, 0), 0 < $seriesIndex$$29_value$$72$$ && ($otherValue$$1$$ += $seriesIndex$$29_value$$72$$))
  }
  return $otherValue$$1$$
};
D.$DvtPieChartUtils$$.$getOtherSliceIds$ = function $$DvtPieChartUtils$$$$getOtherSliceIds$$($chart$$96$$) {
  for(var $otherSeries$$1$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$96$$).$other$, $seriesIds$$ = [], $i$$289$$ = 0;$i$$289$$ < $otherSeries$$1$$.length;$i$$289$$++) {
    $seriesIds$$.push(D.$DvtPieChartUtils$$.$getSliceId$($chart$$96$$, $otherSeries$$1$$[$i$$289$$]))
  }
  return $seriesIds$$
};
D.$DvtPieChartUtils$$.$getOtherSliceVisibility$ = function $$DvtPieChartUtils$$$$getOtherSliceVisibility$$($chart$$97$$) {
  for(var $otherSeries$$2$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$97$$).$other$, $i$$290$$ = 0;$i$$290$$ < $otherSeries$$2$$.length;$i$$290$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$97$$, $otherSeries$$2$$[$i$$290$$])) {
      return"visible"
    }
  }
  return"hidden"
};
D.$DvtPieChartUtils$$.$setOtherSliceVisibility$ = function $$DvtPieChartUtils$$$$setOtherSliceVisibility$$($chart$$98$$, $visibility$$1$$) {
  for(var $otherSeries$$3$$ = D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$($chart$$98$$).$other$, $i$$291$$ = 0;$i$$291$$ < $otherSeries$$3$$.length;$i$$291$$++) {
    D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$98$$, $otherSeries$$3$$[$i$$291$$]).visibility = $visibility$$1$$
  }
};
D.$DvtPieChartUtils$$.$isOtherSliceSelected$ = function $$DvtPieChartUtils$$$$isOtherSliceSelected$$($chart$$99$$, $selected$$18$$) {
  for(var $otherIds$$ = D.$DvtPieChartUtils$$.$getOtherSliceIds$($chart$$99$$), $j$$60$$ = 0;$j$$60$$ < $otherIds$$.length;$j$$60$$++) {
    for(var $sliceId$$ = $otherIds$$[$j$$60$$], $sliceSelected$$ = D.$JSCompiler_alias_FALSE$$, $i$$292$$ = 0;$i$$292$$ < $selected$$18$$.length;$i$$292$$++) {
      if($selected$$18$$[$i$$292$$].id && $sliceId$$.getId() === $selected$$18$$[$i$$292$$].id || $sliceId$$.$getSeries$() === $selected$$18$$[$i$$292$$].series && $sliceId$$.$getGroup$() === $selected$$18$$[$i$$292$$].group) {
        $sliceSelected$$ = D.$JSCompiler_alias_TRUE$$;
        break
      }
    }
    if(!$sliceSelected$$) {
      return D.$JSCompiler_alias_FALSE$$
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtPieChartUtils$$.$_getSeriesIndicesArrays$ = function $$DvtPieChartUtils$$$$_getSeriesIndicesArrays$$($chart$$100$$) {
  for(var $renderedSeries$$ = [], $otherSeries$$4$$ = [], $seriesCount$$9$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$100$$), $options$$99$$ = $chart$$100$$.$getOptions$(), $otherThreshold$$ = $options$$99$$.otherThreshold * D.$DvtPieChartUtils$$.$getTotalValue$($chart$$100$$), $seriesIndex$$33$$ = 0;$seriesIndex$$33$$ < $seriesCount$$9$$;$seriesIndex$$33$$++) {
    var $value$$73$$ = D.$DvtChartDataUtils$$.getValue($chart$$100$$, $seriesIndex$$33$$, 0);
    0 < $otherThreshold$$ && $value$$73$$ < $otherThreshold$$ ? $otherSeries$$4$$.push($seriesIndex$$33$$) : $renderedSeries$$.push($seriesIndex$$33$$)
  }
  "on" == $options$$99$$.sorting && $renderedSeries$$.sort(function($renderedSeries$$, $otherSeries$$4$$) {
    return D.$DvtChartDataUtils$$.getValue($chart$$100$$, $otherSeries$$4$$, 0) - D.$DvtChartDataUtils$$.getValue($chart$$100$$, $renderedSeries$$, 0)
  });
  return{$rendered$:$renderedSeries$$, $other$:$otherSeries$$4$$}
};
D.$DvtPieChartUtils$$.$getTotalValue$ = function $$DvtPieChartUtils$$$$getTotalValue$$($chart$$101$$) {
  for(var $seriesCount$$10$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$101$$), $totalValue$$ = 0, $seriesIndex$$34$$ = 0;$seriesIndex$$34$$ < $seriesCount$$10$$;$seriesIndex$$34$$++) {
    var $value$$74$$ = D.$DvtChartDataUtils$$.getValue($chart$$101$$, $seriesIndex$$34$$, 0);
    0 < $value$$74$$ && ($totalValue$$ += $value$$74$$)
  }
  return $totalValue$$
};
D.$DvtPieChartUtils$$.$getSliceExplode$ = function $$DvtPieChartUtils$$$$getSliceExplode$$($chart$$102$$, $seriesIndex$$35$$) {
  var $seriesItem$$17$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$102$$, $seriesIndex$$35$$);
  return $seriesItem$$17$$ && $seriesItem$$17$$.pieSliceExplode ? $seriesItem$$17$$.pieSliceExplode : 0
};
D.$DvtPieChartUtils$$.$getOtherSliceShowPopupBehaviors$ = function $$DvtPieChartUtils$$$$getOtherSliceShowPopupBehaviors$$($chart$$103$$) {
  var $firstDataItemSeriesIndex_otherSliceIds_stampId$$6$$ = D.$DvtPieChartUtils$$.$getOtherSliceIds$($chart$$103$$);
  if($firstDataItemSeriesIndex_otherSliceIds_stampId$$6$$ && 1 <= $firstDataItemSeriesIndex_otherSliceIds_stampId$$6$$.length) {
    return $firstDataItemSeriesIndex_otherSliceIds_stampId$$6$$ = D.$DvtChartDataUtils$$.$getSeriesIndex$($chart$$103$$, $firstDataItemSeriesIndex_otherSliceIds_stampId$$6$$[0].$getSeries$()), $firstDataItemSeriesIndex_otherSliceIds_stampId$$6$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$103$$, $firstDataItemSeriesIndex_otherSliceIds_stampId$$6$$, 0)._id, $chart$$103$$.$getShowPopupBehaviors$($firstDataItemSeriesIndex_otherSliceIds_stampId$$6$$)
  }
};
D.$DvtPieRenderUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtPieRenderUtils$$, D.$DvtObj$$, "DvtPieRenderUtils");
D.$DvtPieRenderUtils$$.$TWOD$ = "2D";
D.$DvtPieRenderUtils$$.$THREED$ = "3D";
D.$DvtPieRenderUtils$$.$CRUST$ = "CRUST";
D.$DvtPieRenderUtils$$.$SIDE$ = "SIDE";
D.$DvtPieRenderUtils$$.$BORDER$ = "BORDER";
D.$DvtPieRenderUtils$$.$SURFACE_CRUST$ = 0;
D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ = 1;
D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$ = 2;
D.$DvtPieRenderUtils$$.$SURFACE_TOP$ = 3;
D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$ = function $$DvtPieRenderUtils$$$$reflectAngleOverYAxis$$($angle$$15_radian$$, $cx$$10$$, $cy$$10$$, $rx$$7$$, $ry$$3$$) {
  $angle$$15_radian$$ = D.$DvtMath$$.$degreesToRads$(360 - $angle$$15_radian$$);
  return{x:$cx$$10$$ + window.Math.cos($angle$$15_radian$$) * $rx$$7$$, y:$cy$$10$$ + window.Math.sin($angle$$15_radian$$) * $ry$$3$$}
};
D.$DvtPieRenderUtils$$.$getGradientColors$ = function $$DvtPieRenderUtils$$$$getGradientColors$$($baseColor_c3$$, $arColors$$2_style$$20$$, $c$$13_skin$$) {
  if($c$$13_skin$$ && "skyros" != $c$$13_skin$$) {
    if($arColors$$2_style$$20$$ == D.$DvtPieRenderUtils$$.$TWOD$ || $arColors$$2_style$$20$$ == D.$DvtPieRenderUtils$$.$THREED$) {
      return[D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05), D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.09, 0.04)]
    }
    if($arColors$$2_style$$20$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
      return[D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05), D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, 0, -0.14)]
    }
    if($arColors$$2_style$$20$$ == D.$DvtPieRenderUtils$$.$SIDE$) {
      return[D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.1, 0.06), D.$DvtColorUtils$$.$adjustHSL$($baseColor_c3$$, -0.04, -0.05)]
    }
  }else {
    if($arColors$$2_style$$20$$ == D.$DvtPieRenderUtils$$.$TWOD$) {
      return $arColors$$2_style$$20$$ = [], $arColors$$2_style$$20$$[0] = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.1)), $arColors$$2_style$$20$$[1] = $arColors$$2_style$$20$$[0], $arColors$$2_style$$20$$[2] = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getDarker$($baseColor_c3$$, 0.9)), $arColors$$2_style$$20$$
    }
    if($arColors$$2_style$$20$$ == D.$DvtPieRenderUtils$$.$BORDER$) {
      return["#FFFFFF", "#000000", "#000000"]
    }
    $c$$13_skin$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getDarker$($baseColor_c3$$, 0.88));
    var $c1$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.05)), $c2$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.15));
    $baseColor_c3$$ = D.$DvtColorUtils$$.$getRGB$(D.$DvtColorUtils$$.$getPastel$($baseColor_c3$$, 0.35));
    if($arColors$$2_style$$20$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
      return[$c$$13_skin$$, $c2$$, $baseColor_c3$$, $c$$13_skin$$]
    }
    if("SIDE" == $arColors$$2_style$$20$$) {
      return[$c$$13_skin$$, $baseColor_c3$$]
    }
    if("3D" == $arColors$$2_style$$20$$) {
      return[$baseColor_c3$$, $c2$$, $c$$13_skin$$, $c1$$, $baseColor_c3$$]
    }
  }
};
D.$DvtPieRenderUtils$$.$getGradientAlphas$ = function $$DvtPieRenderUtils$$$$getGradientAlphas$$($baseAlpha$$, $style$$21$$) {
  var $alpha$$16$$ = $baseAlpha$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($baseAlpha$$) || 0 == $baseAlpha$$ ? 1 : $baseAlpha$$;
  if($style$$21$$ == D.$DvtPieRenderUtils$$.$TWOD$) {
    return[$alpha$$16$$, $alpha$$16$$, $alpha$$16$$]
  }
  if($style$$21$$ == D.$DvtPieRenderUtils$$.$BORDER$) {
    return[$alpha$$16$$ / 1.59375, $alpha$$16$$ / 5.3125, $alpha$$16$$ / 2.65625]
  }
  if($style$$21$$ == D.$DvtPieRenderUtils$$.$THREED$) {
    return[$alpha$$16$$, $alpha$$16$$, $alpha$$16$$, $alpha$$16$$, $alpha$$16$$]
  }
  if($style$$21$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
    return[$alpha$$16$$, $alpha$$16$$, $alpha$$16$$, $alpha$$16$$]
  }
  if($style$$21$$ == D.$DvtPieRenderUtils$$.$SIDE$) {
    return[$alpha$$16$$, $alpha$$16$$]
  }
};
D.$DvtPieRenderUtils$$.$getGradientRatios$ = function $$DvtPieRenderUtils$$$$getGradientRatios$$($style$$22$$, $skin$$1$$) {
  if($skin$$1$$ && "skyros" != $skin$$1$$) {
    return[0, 1]
  }
  if($style$$22$$ == D.$DvtPieRenderUtils$$.$TWOD$) {
    return[0.2, 0.5, 1]
  }
  if($style$$22$$ == D.$DvtPieRenderUtils$$.$BORDER$) {
    return[0, 0.5, 1]
  }
  if($style$$22$$ == D.$DvtPieRenderUtils$$.$THREED$) {
    return[0, 0.29, 0.55, 0.84, 1]
  }
  if($style$$22$$ == D.$DvtPieRenderUtils$$.$CRUST$) {
    return[0, 0.43, 0.91, 1]
  }
  if($style$$22$$ == D.$DvtPieRenderUtils$$.$SIDE$) {
    return[0, 1]
  }
};
D.$DvtPieRenderUtils$$.$createTopSurface$ = function $$DvtPieRenderUtils$$$$createTopSurface$$($slice$$2$$, $fill$$22$$) {
  var $edge_pieChart$$ = $slice$$2$$.$_pieChart$, $context$$129_shapes$$1_wedge$$ = $edge_pieChart$$.$_context$, $pieCenter$$ = $edge_pieChart$$.$getCenter$(), $sliceClosureType$$ = "PIE";
  360 == $slice$$2$$.$getAngleExtent$() && ($sliceClosureType$$ = "OPEN");
  $context$$129_shapes$$1_wedge$$ = new D.$DvtGraphSelectableArc$$($context$$129_shapes$$1_wedge$$, $pieCenter$$.x, $pieCenter$$.y, $slice$$2$$.$_radiusX$, $slice$$2$$.$_radiusY$, $slice$$2$$.$getAngleStart$(), $slice$$2$$.$getAngleExtent$(), $sliceClosureType$$);
  $context$$129_shapes$$1_wedge$$.$setDataColor$($slice$$2$$.$getFillColor$(), D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($edge_pieChart$$.$chart$), D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($edge_pieChart$$.$chart$));
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$129_shapes$$1_wedge$$, $slice$$2$$.$_explodeOffsetX$, $slice$$2$$.$_explodeOffsetY$);
  $context$$129_shapes$$1_wedge$$.$setFill$($fill$$22$$);
  $slice$$2$$.$getStrokeColor$() && $context$$129_shapes$$1_wedge$$.$setSolidStroke$($slice$$2$$.$getStrokeColor$());
  $context$$129_shapes$$1_wedge$$ = [$context$$129_shapes$$1_wedge$$];
  if(!$slice$$2$$.$getStrokeColor$() && "skyros" == $edge_pieChart$$.$getSkin$() && (0,D.$JSCompiler_StaticMethods_is3D$$)($edge_pieChart$$) && 0 < $edge_pieChart$$.$getDepth$() && "gradient" == D.$DvtChartStyleUtils$$.$getSeriesEffect$($edge_pieChart$$.$chart$) && (180 <= $slice$$2$$.$getAngleStart$() || 180 <= $slice$$2$$.$getAngleStart$() + $slice$$2$$.$getAngleExtent$() || 360 == $slice$$2$$.$getAngleExtent$())) {
    $edge_pieChart$$ = D.$DvtPieRenderUtils$$.$_createGradientPieBorder$($slice$$2$$, $fill$$22$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($edge_pieChart$$, $slice$$2$$.$_explodeOffsetX$, $slice$$2$$.$_explodeOffsetY$), $context$$129_shapes$$1_wedge$$.push($edge_pieChart$$)
  }
  D.$DvtPieRenderUtils$$.$associate$($slice$$2$$, $context$$129_shapes$$1_wedge$$);
  return $context$$129_shapes$$1_wedge$$
};
D.$DvtPieRenderUtils$$.$associate$ = function $$DvtPieRenderUtils$$$$associate$$($slice$$3$$, $displayables$$7$$) {
  if($displayables$$7$$) {
    for(var $i$$274$$ = 0;$i$$274$$ < $displayables$$7$$.length;$i$$274$$++) {
      $slice$$3$$.$_pieChart$.$chart$.$getEventManager$().$associate$($displayables$$7$$[$i$$274$$], $slice$$3$$)
    }
  }
};
D.$DvtPieRenderUtils$$.$_createGradientPieBorder$ = function $$DvtPieRenderUtils$$$$_createGradientPieBorder$$($slice$$4$$, $topFill$$) {
  var $angExtent_arRatios_diff$$1_style$$23$$ = D.$DvtPieRenderUtils$$.$BORDER$, $arColors$$3_gradBorder$$ = D.$DvtPieRenderUtils$$.$getGradientColors$(D.$JSCompiler_alias_NULL$$, $angExtent_arRatios_diff$$1_style$$23$$), $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$ = D.$DvtPieRenderUtils$$.$getGradientAlphas$(D.$JSCompiler_alias_NULL$$, $angExtent_arRatios_diff$$1_style$$23$$), $angExtent_arRatios_diff$$1_style$$23$$ = D.$DvtPieRenderUtils$$.$getGradientRatios$($angExtent_arRatios_diff$$1_style$$23$$), 
  $arBounds$$1_pieChart$$1$$ = $topFill$$.$getBounds$();
  window.grAngle = 120;
  $arColors$$3_gradBorder$$ = new D.$DvtLinearGradientStroke$$(window.grAngle, $arColors$$3_gradBorder$$, $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$, $angExtent_arRatios_diff$$1_style$$23$$, $arBounds$$1_pieChart$$1$$);
  $arColors$$3_gradBorder$$.$setWidth$(1);
  $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$ = $slice$$4$$.$getAngleStart$();
  $angExtent_arRatios_diff$$1_style$$23$$ = 180 > $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$ ? 180 - $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$ : 0;
  $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$ = 0 < $angExtent_arRatios_diff$$1_style$$23$$ ? 180 : $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$;
  $angExtent_arRatios_diff$$1_style$$23$$ = $slice$$4$$.$getAngleExtent$() - $angExtent_arRatios_diff$$1_style$$23$$;
  360 < $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$ + $angExtent_arRatios_diff$$1_style$$23$$ && ($angExtent_arRatios_diff$$1_style$$23$$ = 360 - $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$);
  var $arBounds$$1_pieChart$$1$$ = $slice$$4$$.$_pieChart$, $pieCenter$$1$$ = $arBounds$$1_pieChart$$1$$.$getCenter$(), $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$ = new D.$DvtArc$$($arBounds$$1_pieChart$$1$$.$_context$, $pieCenter$$1$$.x, $pieCenter$$1$$.y, $arBounds$$1_pieChart$$1$$.$_radiusX$, $arBounds$$1_pieChart$$1$$.$_radiusY$, $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$, $angExtent_arRatios_diff$$1_style$$23$$, "OPEN");
  $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$.$setStroke$($arColors$$3_gradBorder$$);
  return $angStart_arAlphas$$2_edge$$1_sliceAngleStart$$
};
D.$DvtPieRenderUtils$$.$createLateralSurface$ = function $$DvtPieRenderUtils$$$$createLateralSurface$$($slice$$5$$, $pathType$$, $fill$$23$$) {
  if(0 == $slice$$5$$.$getAngleExtent$()) {
    return[]
  }
  var $shapes$$2$$ = [];
  if(0 < D.$DvtColorUtils$$.$getAlpha$($slice$$5$$.$getFillColor$())) {
    if($pathType$$ == D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ || $pathType$$ == D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$) {
      $shapes$$2$$.push(D.$DvtPieRenderUtils$$.$_generateLateralShape$($slice$$5$$, $pathType$$, D.$JSCompiler_alias_NULL$$, $fill$$23$$))
    }else {
      if($pathType$$ == D.$DvtPieRenderUtils$$.$SURFACE_CRUST$) {
        for(var $pathCommands$$ = D.$DvtPieRenderUtils$$.$_createCrustPathCommands$($slice$$5$$), $len$$4$$ = $pathCommands$$.length, $i$$275$$ = 0;$i$$275$$ < $len$$4$$;$i$$275$$++) {
          $shapes$$2$$.push(D.$DvtPieRenderUtils$$.$_generateLateralShape$($slice$$5$$, $pathType$$, $pathCommands$$[$i$$275$$], $fill$$23$$))
        }
      }
    }
  }
  D.$DvtPieRenderUtils$$.$associate$($slice$$5$$, $shapes$$2$$);
  return $shapes$$2$$
};
D.$DvtPieRenderUtils$$.$generateLateralGradientFill$ = function $$DvtPieRenderUtils$$$$generateLateralGradientFill$$($slice$$6$$, $objType$$) {
  var $pieChart$$2$$ = $slice$$6$$.$_pieChart$, $skin$$2$$ = $pieChart$$2$$.$getSkin$(), $yOffset$$3$$ = $objType$$ == D.$DvtPieRenderUtils$$.$CRUST$ ? $pieChart$$2$$.$getDepth$() : 0, $angle$$16$$ = "skyros" == $skin$$2$$ ? 0 : 270, $arColors$$4$$ = D.$DvtPieRenderUtils$$.$getGradientColors$(D.$DvtColorUtils$$.$getRGB$($slice$$6$$.$getFillColor$()), $objType$$, $skin$$2$$), $arAlphas$$3$$ = D.$DvtPieRenderUtils$$.$getGradientAlphas$(D.$DvtColorUtils$$.$getAlpha$($slice$$6$$.$getFillColor$()), $objType$$), 
  $arRatios$$1$$ = D.$DvtPieRenderUtils$$.$getGradientRatios$($objType$$, $skin$$2$$), $arBounds$$2$$ = D.$JSCompiler_alias_NULL$$;
  "skyros" == $skin$$2$$ && ($arBounds$$2$$ = [window.Math.floor($pieChart$$2$$.$getCenter$().x - $pieChart$$2$$.$_radiusX$), window.Math.floor($pieChart$$2$$.$getCenter$().y - $pieChart$$2$$.$_radiusY$) + $yOffset$$3$$, window.Math.ceil(2 * $pieChart$$2$$.$_radiusX$), window.Math.ceil(2 * $pieChart$$2$$.$_radiusY$)]);
  return new D.$DvtLinearGradientFill$$($angle$$16$$, $arColors$$4$$, $arAlphas$$3$$, $arRatios$$1$$, $arBounds$$2$$)
};
D.$DvtPieRenderUtils$$.$_generateLateralShape$ = function $$DvtPieRenderUtils$$$$_generateLateralShape$$($slice$$7$$, $pathType$$1_pointArray_pt$$, $pathCommand_points$$29_xCenter$$, $fill$$24$$) {
  var $pie$$ = $slice$$7$$.$_pieChart$, $context$$130_path$$10_polygon$$ = $pie$$.$_context$;
  if($pathType$$1_pointArray_pt$$ == D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ || $pathType$$1_pointArray_pt$$ == D.$DvtPieRenderUtils$$.$SURFACE_RIGHT$) {
    var $angle$$17$$ = $slice$$7$$.$getAngleStart$(), $arc$$ = $slice$$7$$.$getAngleExtent$();
    $pathCommand_points$$29_xCenter$$ = $pie$$.$getCenter$().x;
    var $i$$276_yCenter$$ = $pie$$.$getCenter$().y, $xRadius$$ = $slice$$7$$.$_radiusX$, $yRadius$$ = $slice$$7$$.$_radiusY$, $depth$$7$$ = $pie$$.$getDepth$();
    $pathType$$1_pointArray_pt$$ = $pathType$$1_pointArray_pt$$ == D.$DvtPieRenderUtils$$.$SURFACE_LEFT$ ? D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($angle$$17$$ + $arc$$, $pathCommand_points$$29_xCenter$$, $i$$276_yCenter$$, $xRadius$$, $yRadius$$) : D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($angle$$17$$, $pathCommand_points$$29_xCenter$$, $i$$276_yCenter$$, $xRadius$$, $yRadius$$);
    $pathType$$1_pointArray_pt$$ = D.$DvtPieRenderUtils$$.$_generateInnerPoints$($pathCommand_points$$29_xCenter$$, $i$$276_yCenter$$, $pathType$$1_pointArray_pt$$.x, $pathType$$1_pointArray_pt$$.y, $depth$$7$$);
    $pathCommand_points$$29_xCenter$$ = [];
    for($i$$276_yCenter$$ = 0;$i$$276_yCenter$$ < $pathType$$1_pointArray_pt$$.length;$i$$276_yCenter$$++) {
      $pathCommand_points$$29_xCenter$$.push($pathType$$1_pointArray_pt$$[$i$$276_yCenter$$].x, $pathType$$1_pointArray_pt$$[$i$$276_yCenter$$].y)
    }
    $context$$130_path$$10_polygon$$ = new D.$DvtGraphSelectablePolygon$$($context$$130_path$$10_polygon$$, $pathCommand_points$$29_xCenter$$);
    $context$$130_path$$10_polygon$$.$setDataColor$($slice$$7$$.$getFillColor$(), D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($pie$$.$chart$), D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($pie$$.$chart$));
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$130_path$$10_polygon$$, $slice$$7$$.$_explodeOffsetX$, $slice$$7$$.$_explodeOffsetY$);
    $context$$130_path$$10_polygon$$.$setFill$($fill$$24$$);
    $slice$$7$$.$getStrokeColor$() && $context$$130_path$$10_polygon$$.$setSolidStroke$($slice$$7$$.$getStrokeColor$());
    return $context$$130_path$$10_polygon$$
  }
  return $pathCommand_points$$29_xCenter$$ ? ($context$$130_path$$10_polygon$$ = new D.$DvtGraphSelectablePath$$($context$$130_path$$10_polygon$$, D.$JSCompiler_alias_NULL$$), $context$$130_path$$10_polygon$$.$setDataColor$($slice$$7$$.$getFillColor$(), D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($pie$$.$chart$), D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($pie$$.$chart$)), $context$$130_path$$10_polygon$$.$setCmds$($pathCommand_points$$29_xCenter$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$130_path$$10_polygon$$, 
  $slice$$7$$.$_explodeOffsetX$, $slice$$7$$.$_explodeOffsetY$), $context$$130_path$$10_polygon$$.$setFill$($fill$$24$$), $slice$$7$$.$getStrokeColor$() && $context$$130_path$$10_polygon$$.$setSolidStroke$($slice$$7$$.$getStrokeColor$()), $context$$130_path$$10_polygon$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtPieRenderUtils$$.$_createCrustPathCommands$ = function $$DvtPieRenderUtils$$$$_createCrustPathCommands$$($slice$$8_yRadius$$1$$) {
  var $angle$$18$$ = $slice$$8_yRadius$$1$$.$getAngleStart$(), $arc$$1$$ = $slice$$8_yRadius$$1$$.$getAngleExtent$(), $angleEnd$$ = $angle$$18$$ + $arc$$1$$, $depth$$8_pie$$1$$ = $slice$$8_yRadius$$1$$.$_pieChart$, $xCenter$$1$$ = $depth$$8_pie$$1$$.$getCenter$().x, $yCenter$$1$$ = $depth$$8_pie$$1$$.$getCenter$().y, $xRadius$$1$$ = $slice$$8_yRadius$$1$$.$_radiusX$;
  $slice$$8_yRadius$$1$$ = $slice$$8_yRadius$$1$$.$_radiusY$;
  var $depth$$8_pie$$1$$ = $depth$$8_pie$$1$$.$getDepth$(), $arOuterPath$$ = [];
  180 > $angle$$18$$ && 360 < $angleEnd$$ ? ($arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$8_yRadius$$1$$, $depth$$8_pie$$1$$, $angle$$18$$, 180 - $angle$$18$$)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$8_yRadius$$1$$, $depth$$8_pie$$1$$, 360, $angleEnd$$ - 360)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, 
  $slice$$8_yRadius$$1$$, $depth$$8_pie$$1$$, 180, 180))) : 360 < $angleEnd$$ ? ($arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$8_yRadius$$1$$, $depth$$8_pie$$1$$, $angle$$18$$, 360 - $angle$$18$$)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$8_yRadius$$1$$, $depth$$8_pie$$1$$, 360, $angleEnd$$ - 360))) : 180 > $angle$$18$$ && 180 < $angleEnd$$ ? ($arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, 
  $yCenter$$1$$, $xRadius$$1$$, $slice$$8_yRadius$$1$$, $depth$$8_pie$$1$$, $angle$$18$$, 180 - $angle$$18$$)), $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$8_yRadius$$1$$, $depth$$8_pie$$1$$, 180, $angleEnd$$ - 180))) : $arOuterPath$$.push(D.$DvtPieRenderUtils$$.$_makeOuterPath$($xCenter$$1$$, $yCenter$$1$$, $xRadius$$1$$, $slice$$8_yRadius$$1$$, $depth$$8_pie$$1$$, $angle$$18$$, $arc$$1$$));
  return $arOuterPath$$
};
D.$DvtPieRenderUtils$$.$_makeOuterPath$ = function $$DvtPieRenderUtils$$$$_makeOuterPath$$($cx$$11_endPointTopX$$, $cy$$11_endPointTopY$$, $rx$$8$$, $ry$$4$$, $depth$$9$$, $startAngle$$1_startPointTop$$, $angleExtent_angleExtentRads$$) {
  $angleExtent_angleExtentRads$$ = D.$DvtMath$$.$degreesToRads$($angleExtent_angleExtentRads$$);
  var $endAngleRads_pathCommands$$1$$ = -(D.$DvtMath$$.$degreesToRads$($startAngle$$1_startPointTop$$) + $angleExtent_angleExtentRads$$);
  $cy$$11_endPointTopY$$ -= 1;
  $startAngle$$1_startPointTop$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($startAngle$$1_startPointTop$$, $cx$$11_endPointTopX$$, $cy$$11_endPointTopY$$, $rx$$8$$, $ry$$4$$);
  $cx$$11_endPointTopX$$ += window.Math.cos($endAngleRads_pathCommands$$1$$) * $rx$$8$$;
  $cy$$11_endPointTopY$$ += window.Math.sin($endAngleRads_pathCommands$$1$$) * $ry$$4$$;
  $endAngleRads_pathCommands$$1$$ = window.DvtPathUtils.moveTo($startAngle$$1_startPointTop$$.x, $startAngle$$1_startPointTop$$.y);
  $endAngleRads_pathCommands$$1$$ += window.DvtPathUtils.arcTo($rx$$8$$, $ry$$4$$, $angleExtent_angleExtentRads$$, 0, $cx$$11_endPointTopX$$, $cy$$11_endPointTopY$$);
  $endAngleRads_pathCommands$$1$$ += window.DvtPathUtils.lineTo($cx$$11_endPointTopX$$, $cy$$11_endPointTopY$$ + $depth$$9$$);
  $endAngleRads_pathCommands$$1$$ += window.DvtPathUtils.arcTo($rx$$8$$, $ry$$4$$, $angleExtent_angleExtentRads$$, 1, $startAngle$$1_startPointTop$$.x, $startAngle$$1_startPointTop$$.y + $depth$$9$$);
  return $endAngleRads_pathCommands$$1$$ += window.DvtPathUtils.lineTo($startAngle$$1_startPointTop$$.x, $startAngle$$1_startPointTop$$.y)
};
D.$DvtPieRenderUtils$$.$_generateInnerPoints$ = function $$DvtPieRenderUtils$$$$_generateInnerPoints$$($cx$$12$$, $cy$$12$$, $xpos$$, $ypos$$, $tilt$$) {
  var $pointArray$$1$$ = [];
  $pointArray$$1$$.push({x:$cx$$12$$, y:$cy$$12$$});
  $pointArray$$1$$.push({x:$xpos$$, y:$ypos$$});
  $pointArray$$1$$.push({x:$xpos$$, y:$ypos$$ + $tilt$$});
  $pointArray$$1$$.push({x:$cx$$12$$, y:$cy$$12$$ + $tilt$$});
  return $pointArray$$1$$
};
D.$DvtPieLabelInfo$$ = function $$DvtPieLabelInfo$$$() {
  this.$_slice$ = this.$_sliceLabel$ = D.$JSCompiler_alias_NULL$$;
  this.$_initialNumLines$ = this.$_y$ = this.$_x$ = this.$_height$ = this.$_width$ = this.$_position$ = this.$_angle$ = -1;
  this.$_hasFeeler$ = D.$JSCompiler_alias_FALSE$$;
  this.$_minY$ = this.$_maxY$ = -1
};
D.$DvtObj$$.$createSubclass$(D.$DvtPieLabelInfo$$, D.$DvtObj$$, "DvtPieLabelInfo");
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieLabelInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getAngle$ = (0,D.$JSCompiler_get$$)("$_angle$");
D.$JSCompiler_prototypeAlias$$.$setAngle$ = (0,D.$JSCompiler_set$$)("$_angle$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$_height$");
D.$JSCompiler_prototypeAlias$$.$setHeight$ = (0,D.$JSCompiler_set$$)("$_height$");
D.$JSCompiler_prototypeAlias$$.$getMaxY$ = (0,D.$JSCompiler_get$$)("$_maxY$");
D.$JSCompiler_prototypeAlias$$.$getMinY$ = (0,D.$JSCompiler_get$$)("$_minY$");
D.$JSCompiler_StaticMethods_boundY$$ = function $$JSCompiler_StaticMethods_boundY$$$($JSCompiler_StaticMethods_boundY$self$$, $y$$86$$) {
  $y$$86$$ = window.Math.max($y$$86$$, $JSCompiler_StaticMethods_boundY$self$$.$_minY$);
  return $y$$86$$ = window.Math.min($y$$86$$, $JSCompiler_StaticMethods_boundY$self$$.$_maxY$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtPieLabelInfo$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getPosition$ = (0,D.$JSCompiler_get$$)("$_position$");
D.$JSCompiler_prototypeAlias$$.$setPosition$ = (0,D.$JSCompiler_set$$)("$_position$");
D.$JSCompiler_prototypeAlias$$.$setSliceLabel$ = (0,D.$JSCompiler_set$$)("$_sliceLabel$");
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$_width$");
D.$JSCompiler_prototypeAlias$$.$setWidth$ = (0,D.$JSCompiler_set$$)("$_width$");
D.$JSCompiler_prototypeAlias$$.$getX$ = (0,D.$JSCompiler_get$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$setX$ = (0,D.$JSCompiler_set$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$getY$ = (0,D.$JSCompiler_get$$)("$_y$");
D.$JSCompiler_prototypeAlias$$.$setY$ = (0,D.$JSCompiler_set$$)("$_y$");
D.$DvtPieLabelUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtPieLabelUtils$$, D.$DvtObj$$, "DvtPieLabelUtils");
D.$DvtPieLabelUtils$$.$_MAX_LINES_PER_LABEL$ = 3;
D.$DvtPieLabelUtils$$.$_COLLISION_MARGIN$ = 1;
D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$ = 1;
D.$DvtPieLabelUtils$$.$_RIGHT_SIDE_LABELS$ = 2;
D.$DvtPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$ = 0.04;
D.$DvtPieLabelUtils$$.$_FEELER_RAD_MINSIZE$ = 0.1;
D.$DvtPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$ = 0.1;
D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$ = 0.5;
D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$ = 3;
D.$DvtPieLabelUtils$$.$_NO_COLLISION$ = 0;
D.$DvtPieLabelUtils$$.$_HALF_COLLISION$ = 1;
D.$DvtPieLabelUtils$$.$_ALL_COLLISION$ = 2;
D.$DvtPieLabelUtils$$.$layoutLabelsAndFeelers$ = function $$DvtPieLabelUtils$$$$layoutLabelsAndFeelers$$($pie$$2$$) {
  var $labelPosition$$ = $pie$$2$$.$getLabelPosition$();
  "none" != $labelPosition$$ && ("inside" == $labelPosition$$ ? D.$DvtPieLabelUtils$$.$_layoutInsideLabels$($pie$$2$$) : D.$DvtPieLabelUtils$$.$_layoutOutsideLabelsAndFeelers$($pie$$2$$))
};
D.$DvtPieLabelUtils$$.$_layoutInsideLabels$ = function $$DvtPieLabelUtils$$$$_layoutInsideLabels$$($pie$$3$$) {
  if($pie$$3$$ != D.$JSCompiler_alias_NULL$$) {
    var $slices$$ = $pie$$3$$.$_slices$, $n$$25$$ = $slices$$.length;
    if(0 < $n$$25$$) {
      for(window.i = 0;window.i < $n$$25$$;window.i++) {
        var $slice$$10$$ = $slices$$[window.i], $estimatedDims_midAngle_midPt$$;
        $estimatedDims_midAngle_midPt$$ = $slice$$10$$.$getAngleStart$() + $slice$$10$$.$getAngleExtent$() / 2;
        var $center$$6_x1$$8$$ = $pie$$3$$.$getCenter$(), $posX$$3_usableSpace$$ = 0, $posY$$2_stage_y2$$9$$ = 0, $sliceLabel$$ = D.$DvtPieLabelUtils$$.$_createLabel$($slice$$10$$, D.$JSCompiler_alias_TRUE$$);
        1 == $n$$25$$ ? ($posX$$3_usableSpace$$ = $center$$6_x1$$8$$.x, $posY$$2_stage_y2$$9$$ = $center$$6_x1$$8$$.y) : ($estimatedDims_midAngle_midPt$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($estimatedDims_midAngle_midPt$$, $center$$6_x1$$8$$.x, $center$$6_x1$$8$$.y, 0.66 * $pie$$3$$.$_radiusX$, 0.66 * $pie$$3$$.$_radiusY$), $posX$$3_usableSpace$$ = $estimatedDims_midAngle_midPt$$.x, $posY$$2_stage_y2$$9$$ = $estimatedDims_midAngle_midPt$$.y);
        $sliceLabel$$.$setX$($posX$$3_usableSpace$$);
        $sliceLabel$$.$setY$($posY$$2_stage_y2$$9$$);
        $sliceLabel$$.$alignMiddle$();
        $sliceLabel$$.$alignCenter$();
        $estimatedDims_midAngle_midPt$$ = D.$DvtTextUtils$$.$guessTextDimensions$($sliceLabel$$);
        for(var $x2$$7$$ = $center$$6_x1$$8$$ = $posX$$3_usableSpace$$, $y1$$10$$ = $posY$$2_stage_y2$$9$$ - $estimatedDims_midAngle_midPt$$.$h$ / 2, $posY$$2_stage_y2$$9$$ = $posY$$2_stage_y2$$9$$ + $estimatedDims_midAngle_midPt$$.$h$ / 2;$slice$$10$$.contains($center$$6_x1$$8$$, $y1$$10$$) && $slice$$10$$.contains($center$$6_x1$$8$$, $posY$$2_stage_y2$$9$$);) {
          $center$$6_x1$$8$$--
        }
        for(;$slice$$10$$.contains($x2$$7$$, $y1$$10$$) && $slice$$10$$.contains($x2$$7$$, $posY$$2_stage_y2$$9$$);) {
          $x2$$7$$++
        }
        $center$$6_x1$$8$$ += 3;
        $x2$$7$$ -= 3;
        $posX$$3_usableSpace$$ = 2 * window.Math.min($posX$$3_usableSpace$$ - $center$$6_x1$$8$$, $x2$$7$$ - $posX$$3_usableSpace$$);
        $posX$$3_usableSpace$$ < $estimatedDims_midAngle_midPt$$.$w$ && ($sliceLabel$$.$setX$(($center$$6_x1$$8$$ + $x2$$7$$) / 2), $posX$$3_usableSpace$$ = $x2$$7$$ - $center$$6_x1$$8$$);
        $posY$$2_stage_y2$$9$$ = $slice$$10$$.$_pieChart$.$_context$.$_stage$;
        D.$DvtTextUtils$$.$fitText$($sliceLabel$$, $posX$$3_usableSpace$$, $estimatedDims_midAngle_midPt$$.$h$, $posY$$2_stage_y2$$9$$) && ($posY$$2_stage_y2$$9$$.removeChild($sliceLabel$$), $slice$$10$$.$setSliceLabel$($sliceLabel$$))
      }
    }
  }
};
D.$DvtPieLabelUtils$$.$_layoutOutsideLabelsAndFeelers$ = function $$DvtPieLabelUtils$$$$_layoutOutsideLabelsAndFeelers$$($pie$$4$$) {
  if($pie$$4$$ != D.$JSCompiler_alias_NULL$$) {
    var $leftLabels$$ = [], $alabels_rightLabels$$ = [], $alabels_rightLabels$$ = D.$DvtPieLabelUtils$$.$_generateInitialLayout$($pie$$4$$), $leftLabels$$ = $alabels_rightLabels$$[0], $alabels_rightLabels$$ = $alabels_rightLabels$$[1], $leftColl$$ = D.$DvtPieLabelUtils$$.$_refineInitialLayout$($pie$$4$$, $leftLabels$$, D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$), $rightColl$$ = D.$DvtPieLabelUtils$$.$_refineInitialLayout$($pie$$4$$, $alabels_rightLabels$$, D.$DvtPieLabelUtils$$.$_RIGHT_SIDE_LABELS$);
    $leftColl$$ == D.$DvtPieLabelUtils$$.$_HALF_COLLISION$ && $rightColl$$ != D.$DvtPieLabelUtils$$.$_NO_COLLISION$ && D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$4$$, $leftLabels$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$);
    $leftColl$$ != D.$DvtPieLabelUtils$$.$_NO_COLLISION$ && $rightColl$$ == D.$DvtPieLabelUtils$$.$_HALF_COLLISION$ && D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$4$$, $alabels_rightLabels$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$);
    D.$DvtPieLabelUtils$$.$_setLabelsAndFeelers$($pie$$4$$, $leftLabels$$, D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$);
    D.$DvtPieLabelUtils$$.$_setLabelsAndFeelers$($pie$$4$$, $alabels_rightLabels$$, D.$DvtPieLabelUtils$$.$_RIGHT_SIDE_LABELS$)
  }
};
D.$DvtPieLabelUtils$$.$_createLabel$ = function $$DvtPieLabelUtils$$$$_createLabel$$($slice$$11$$, $noWrap$$3$$) {
  var $backgroundColor$$1_labelStr_pieChart$$3$$ = $slice$$11$$.$_pieChart$;
  if("none" == $backgroundColor$$1_labelStr_pieChart$$3$$.$getLabelPosition$()) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $context$$131_sliceLabel$$1$$ = $backgroundColor$$1_labelStr_pieChart$$3$$.$_context$, $context$$131_sliceLabel$$1$$ = $noWrap$$3$$ ? new D.$DvtOutputText$$($context$$131_sliceLabel$$1$$) : new D.$DvtMultilineText$$($context$$131_sliceLabel$$1$$), $sd$$ = $backgroundColor$$1_labelStr_pieChart$$3$$.$getOptions$().styleDefaults, $defaultColor_style$$24$$ = $sd$$.sliceLabelStyle;
  if($defaultColor_style$$24$$) {
    var $styleStr$$ = $defaultColor_style$$24$$.toString();
    -1 == $styleStr$$.indexOf("color") && ($defaultColor_style$$24$$ = $sd$$._defaultSliceLabelColor, "inside" == $backgroundColor$$1_labelStr_pieChart$$3$$.$getLabelPosition$() && ($backgroundColor$$1_labelStr_pieChart$$3$$ = $slice$$11$$.$getFillColor$(), $defaultColor_style$$24$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($backgroundColor$$1_labelStr_pieChart$$3$$)), $defaultColor_style$$24$$ = new D.$DvtCSSStyle$$($styleStr$$ + ("color: " + $defaultColor_style$$24$$ + ";")))
  }
  D.$DvtPieLabelUtils$$.$_setFontPropsOnLabel$($defaultColor_style$$24$$, $context$$131_sliceLabel$$1$$);
  $backgroundColor$$1_labelStr_pieChart$$3$$ = D.$DvtPieLabelUtils$$.$generateSliceLabelString$($slice$$11$$, $sd$$.sliceLabelType);
  $context$$131_sliceLabel$$1$$.$setTextString$($backgroundColor$$1_labelStr_pieChart$$3$$);
  $slice$$11$$.$_sliceLabelString$ = $backgroundColor$$1_labelStr_pieChart$$3$$;
  return $context$$131_sliceLabel$$1$$
};
D.$DvtPieLabelUtils$$.$generateSliceLabelString$ = function $$DvtPieLabelUtils$$$$generateSliceLabelString$$($slice$$12$$, $labelType$$) {
  var $dataTotal_pieChart$$4$$ = $slice$$12$$.$_pieChart$;
  if("none" == $dataTotal_pieChart$$4$$.$getLabelPosition$()) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $customLabel_svalue$$ = $slice$$12$$.$_customLabel$;
  if($customLabel_svalue$$ != D.$JSCompiler_alias_NULL$$) {
    return $customLabel_svalue$$
  }
  var $percentage_s$$83_spercent$$ = "", $stext_value$$71$$ = $customLabel_svalue$$ = "", $percentage_s$$83_spercent$$ = "", $stext_value$$71$$ = $slice$$12$$.getValue(), $valueFormats$$3$$ = $slice$$12$$.$_chart$.$getOptions$().valueFormats, $percentage_s$$83_spercent$$ = 0, $dataTotal_pieChart$$4$$ = $dataTotal_pieChart$$4$$.$getTotalValue$(), $percentage_s$$83_spercent$$ = 0 == $dataTotal_pieChart$$4$$ ? 0 : 100 * (window.Math.abs($stext_value$$71$$) / $dataTotal_pieChart$$4$$);
  if($valueFormats$$3$$) {
    $percentage_s$$83_spercent$$ = D.$DvtChartTooltipUtils$$.$_formatValue$($valueFormats$$3$$, D.$DvtChartDataUtils$$.$_TYPE_LABEL$, $slice$$12$$.getValue() / 100)
  }else {
    $percentage_s$$83_spercent$$ = $percentage_s$$83_spercent$$.toString();
    if(5 < $percentage_s$$83_spercent$$.length) {
      $percentage_s$$83_spercent$$ = $percentage_s$$83_spercent$$.slice(0, 5)
    }else {
      for(0 > $percentage_s$$83_spercent$$.indexOf(".", 0) && 4 > $percentage_s$$83_spercent$$.length && ($percentage_s$$83_spercent$$ += ".");5 > $percentage_s$$83_spercent$$.length;) {
        $percentage_s$$83_spercent$$ += "0"
      }
    }
    $percentage_s$$83_spercent$$ += "%"
  }
  (0,window.isNaN)($stext_value$$71$$) || ($customLabel_svalue$$ = $valueFormats$$3$$ ? D.$DvtChartTooltipUtils$$.$_formatValue$($valueFormats$$3$$, D.$DvtChartDataUtils$$.$_TYPE_LABEL$, $slice$$12$$.getValue()) : $stext_value$$71$$.toString());
  $stext_value$$71$$ = $slice$$12$$.$getSeriesLabel$();
  return"percent" == $labelType$$ ? $percentage_s$$83_spercent$$ : "number" == $labelType$$ ? $customLabel_svalue$$ : "text" == $labelType$$ ? $stext_value$$71$$ : "textAndPercent" == $labelType$$ ? $stext_value$$71$$ + ", " + $percentage_s$$83_spercent$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtPieLabelUtils$$.$_setFontPropsOnLabel$ = function $$DvtPieLabelUtils$$$$_setFontPropsOnLabel$$($style$$25$$, $sliceLabel$$2$$) {
  $sliceLabel$$2$$ == D.$JSCompiler_alias_NULL$$ || $style$$25$$ == D.$JSCompiler_alias_NULL$$ || $sliceLabel$$2$$.$setCSSStyle$($style$$25$$)
};
D.$DvtPieLabelUtils$$.$_refineInitialLayout$ = function $$DvtPieLabelUtils$$$$_refineInitialLayout$$($pie$$5$$, $labelInfoArray$$, $isLeftSideLabels_side$$4$$) {
  if($labelInfoArray$$ && 0 < $labelInfoArray$$.length) {
    var $lastY$$ = $pie$$5$$.$_frame$.y, $collisionTop$$ = D.$JSCompiler_alias_FALSE$$, $collisionCentral$$ = D.$JSCompiler_alias_FALSE$$, $collisionBottom$$ = D.$JSCompiler_alias_FALSE$$, $labelBottom$$ = 0, $collide_labelInfo$$, $bottomQuarter$$ = D.$JSCompiler_alias_FALSE$$, $prevBottomQuarter$$ = $bottomQuarter$$;
    $collide_labelInfo$$ = D.$JSCompiler_alias_FALSE$$;
    $isLeftSideLabels_side$$4$$ = $isLeftSideLabels_side$$4$$ == D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$;
    for(var $i$$278$$ = 0;$i$$278$$ < $labelInfoArray$$.length;$i$$278$$++) {
      $collide_labelInfo$$ = $labelInfoArray$$[$i$$278$$], $prevBottomQuarter$$ = $bottomQuarter$$, 90 < $collide_labelInfo$$.$getPosition$() && ($bottomQuarter$$ = D.$JSCompiler_alias_TRUE$$), $labelBottom$$ = $collide_labelInfo$$.$getY$() + $collide_labelInfo$$.getHeight(), ($collide_labelInfo$$ = $lastY$$ - $collide_labelInfo$$.$getY$() > D.$DvtPieLabelUtils$$.$_COLLISION_MARGIN$) && ($bottomQuarter$$ ? $bottomQuarter$$ && !$prevBottomQuarter$$ ? $collisionCentral$$ = D.$JSCompiler_alias_TRUE$$ : 
      $collisionBottom$$ = D.$JSCompiler_alias_TRUE$$ : $collisionTop$$ = D.$JSCompiler_alias_TRUE$$), $labelBottom$$ > $lastY$$ && ($lastY$$ = $labelBottom$$)
    }
    return $collisionTop$$ && $collisionBottom$$ || $collisionCentral$$ ? (D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$5$$, $labelInfoArray$$, $isLeftSideLabels_side$$4$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$), D.$DvtPieLabelUtils$$.$_ALL_COLLISION$) : $collisionTop$$ ? (D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$5$$, $labelInfoArray$$, $isLeftSideLabels_side$$4$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$), D.$DvtPieLabelUtils$$.$_HALF_COLLISION$) : $collisionBottom$$ ? 
    (D.$DvtPieLabelUtils$$.$_columnLabels$($pie$$5$$, $labelInfoArray$$, $isLeftSideLabels_side$$4$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$), D.$DvtPieLabelUtils$$.$_HALF_COLLISION$) : D.$DvtPieLabelUtils$$.$_NO_COLLISION$
  }
};
D.$DvtPieLabelUtils$$.$_setLabelsAndFeelers$ = function $$DvtPieLabelUtils$$$$_setLabelsAndFeelers$$($pie$$6$$, $alabels$$1$$, $i$$279_side$$5$$) {
  if(!($alabels$$1$$ == D.$JSCompiler_alias_NULL$$ || 0 >= $alabels$$1$$.length)) {
    var $excessLength_slice$$13$$, $sliceLabel$$3$$, $labelInfo$$1$$, $isLeftSide$$ = $i$$279_side$$5$$ == D.$DvtPieLabelUtils$$.$_LEFT_SIDE_LABELS$, $excessWidth$$ = window.Infinity;
    for($i$$279_side$$5$$ = 0;$i$$279_side$$5$$ < $alabels$$1$$.length;$i$$279_side$$5$$++) {
      $labelInfo$$1$$ = $alabels$$1$$[$i$$279_side$$5$$], $excessLength_slice$$13$$ = $labelInfo$$1$$.$_slice$, $labelInfo$$1$$.$_hasFeeler$ ? ($excessLength_slice$$13$$ = D.$DvtPieLabelUtils$$.$_calculateFeeler$($labelInfo$$1$$, $excessLength_slice$$13$$, $isLeftSide$$), $excessWidth$$ = window.Math.min($excessWidth$$, $excessLength_slice$$13$$)) : (0,D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$)($excessLength_slice$$13$$)
    }
    for($i$$279_side$$5$$ = 0;$i$$279_side$$5$$ < $alabels$$1$$.length;$i$$279_side$$5$$++) {
      $labelInfo$$1$$ = $alabels$$1$$[$i$$279_side$$5$$];
      $excessLength_slice$$13$$ = $labelInfo$$1$$.$_slice$;
      $sliceLabel$$3$$ = $labelInfo$$1$$.$_sliceLabel$;
      $labelInfo$$1$$.$_hasFeeler$ && ($isLeftSide$$ ? $labelInfo$$1$$.$setX$($labelInfo$$1$$.$getX$() + $excessWidth$$) : $labelInfo$$1$$.$setX$($labelInfo$$1$$.$getX$() - $excessWidth$$), D.$DvtPieLabelUtils$$.$_calculateFeeler$($labelInfo$$1$$, $excessLength_slice$$13$$, $isLeftSide$$), $sliceLabel$$3$$.$setMaxLines$(1));
      $sliceLabel$$3$$.$setY$($labelInfo$$1$$.$getY$());
      $sliceLabel$$3$$.$setX$($labelInfo$$1$$.$getX$());
      var $frame$$1$$ = $pie$$6$$.$_frame$;
      $labelInfo$$1$$.$getY$() < $frame$$1$$.y || $labelInfo$$1$$.$getY$() + $labelInfo$$1$$.getHeight() > $frame$$1$$.y + $frame$$1$$.$h$ ? ($excessLength_slice$$13$$.$setSliceLabel$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_setNoOutsideFeeler$$)($excessLength_slice$$13$$)) : (D.$DvtPieLabelUtils$$.$_truncateSliceLabel$($pie$$6$$, $excessLength_slice$$13$$, $labelInfo$$1$$, $isLeftSide$$), $excessLength_slice$$13$$.$setSliceLabel$($sliceLabel$$3$$))
    }
  }
};
D.$DvtPieLabelUtils$$.$_calculateFeeler$ = function $$DvtPieLabelUtils$$$$_calculateFeeler$$($labelInfo$$2_pa$$1$$, $slice$$14$$, $isLeft$$) {
  var $pieChart$$5_radFeelerAngle$$ = $slice$$14$$.$_pieChart$, $endPt_targetX$$ = $labelInfo$$2_pa$$1$$.$getX$(), $horizOffset_targetY_tilt$$1$$ = $labelInfo$$2_pa$$1$$.$getY$() + $labelInfo$$2_pa$$1$$.getHeight() * D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$, $minHorizLength$$ = D.$DvtPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$ * $pieChart$$5_radFeelerAngle$$.$_radiusX$, $midPt$$1_midX$$;
  $isLeft$$ ? ($endPt_targetX$$ += D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$, $midPt$$1_midX$$ = $endPt_targetX$$ + $minHorizLength$$) : ($endPt_targetX$$ -= D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_DISTANCE$, $midPt$$1_midX$$ = $endPt_targetX$$ - $minHorizLength$$);
  if("outside" == $pieChart$$5_radFeelerAngle$$.$getLabelPosition$()) {
    var $ma_startPt$$ = {x:0, y:0};
    $midPt$$1_midX$$ = {x:$midPt$$1_midX$$, y:$horizOffset_targetY_tilt$$1$$};
    $endPt_targetX$$ = {x:$endPt_targetX$$, y:$horizOffset_targetY_tilt$$1$$};
    $ma_startPt$$ = $labelInfo$$2_pa$$1$$.$getAngle$();
    $horizOffset_targetY_tilt$$1$$ = D.$DvtPieLabelUtils$$.$_adjustForDepth$($ma_startPt$$, $pieChart$$5_radFeelerAngle$$.$getDepth$());
    $ma_startPt$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($ma_startPt$$, $pieChart$$5_radFeelerAngle$$.$getCenter$().x, $pieChart$$5_radFeelerAngle$$.$getCenter$().y + $horizOffset_targetY_tilt$$1$$, $pieChart$$5_radFeelerAngle$$.$_radiusX$, $pieChart$$5_radFeelerAngle$$.$_radiusY$);
    $labelInfo$$2_pa$$1$$ = D.$DvtMath$$.$degreesToRads$($labelInfo$$2_pa$$1$$.$getPosition$());
    $pieChart$$5_radFeelerAngle$$ = window.Math.abs(window.Math.atan2($midPt$$1_midX$$.x - $ma_startPt$$.x, $ma_startPt$$.y - $midPt$$1_midX$$.y));
    $horizOffset_targetY_tilt$$1$$ = ($ma_startPt$$.y - $midPt$$1_midX$$.y) * window.Math.tan($labelInfo$$2_pa$$1$$);
    if($labelInfo$$2_pa$$1$$ > window.Math.PI / 2 && $pieChart$$5_radFeelerAngle$$ > window.Math.PI / 2 && $pieChart$$5_radFeelerAngle$$ < $labelInfo$$2_pa$$1$$ || $labelInfo$$2_pa$$1$$ < window.Math.PI / 2 && $pieChart$$5_radFeelerAngle$$ < window.Math.PI / 2 && $pieChart$$5_radFeelerAngle$$ > $labelInfo$$2_pa$$1$$) {
      $midPt$$1_midX$$.x = $isLeft$$ ? $ma_startPt$$.x - $horizOffset_targetY_tilt$$1$$ : $ma_startPt$$.x + $horizOffset_targetY_tilt$$1$$
    }
    $slice$$14$$.$_outsideFeelerStart$ = $ma_startPt$$;
    $slice$$14$$.$_outsideFeelerMid$ = $midPt$$1_midX$$;
    $slice$$14$$.$_outsideFeelerEnd$ = $endPt_targetX$$;
    $slice$$14$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$;
    return window.Math.abs($endPt_targetX$$.x - $midPt$$1_midX$$.x) - $minHorizLength$$
  }
  return 0
};
D.$DvtPieLabelUtils$$.$_adjustForDepth$ = function $$DvtPieLabelUtils$$$$_adjustForDepth$$($ma$$1$$, $pieDepth$$) {
  var $depth$$10$$ = 0;
  189 < $ma$$1$$ && 351 > $ma$$1$$ && ($depth$$10$$ = $pieDepth$$);
  return $depth$$10$$
};
D.$DvtPieLabelUtils$$.$_getMiddleLabel$ = function $$DvtPieLabelUtils$$$$_getMiddleLabel$$($alabels$$2$$) {
  for(var $bestAngle$$ = 91, $bestIndex$$ = -1, $i$$280$$ = 0;$i$$280$$ < $alabels$$2$$.length;$i$$280$$++) {
    window.pa = $alabels$$2$$[$i$$280$$].$getPosition$(), window.Math.abs(window.pa - 90) < $bestAngle$$ && ($bestAngle$$ = window.Math.abs(window.pa - 90), $bestIndex$$ = $i$$280$$)
  }
  return $bestIndex$$
};
D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$ = function $$DvtPieLabelUtils$$$$_setOptimalLabelPosition$$($optimalY_pie$$7$$, $labelInfo$$3$$, $heightFromCenter_vertX$$) {
  $labelInfo$$3$$.$setX$($heightFromCenter_vertX$$);
  $heightFromCenter_vertX$$ = $optimalY_pie$$7$$.$_radiusY$ * (1 + D.$DvtPieLabelUtils$$.$_FEELER_RAD_MINSIZE$) * window.Math.cos(D.$DvtMath$$.$degreesToRads$($labelInfo$$3$$.$getPosition$()));
  var $tilt$$2$$ = D.$DvtPieLabelUtils$$.$_adjustForDepth$($labelInfo$$3$$.$getAngle$(), $optimalY_pie$$7$$.$getDepth$());
  $optimalY_pie$$7$$ = $optimalY_pie$$7$$.$getCenter$().y - $heightFromCenter_vertX$$ - $labelInfo$$3$$.getHeight() * D.$DvtPieLabelUtils$$.$_LABEL_TO_FEELER_OFFSET$ + $tilt$$2$$;
  $labelInfo$$3$$.$setY$((0,D.$JSCompiler_StaticMethods_boundY$$)($labelInfo$$3$$, $optimalY_pie$$7$$))
};
D.$DvtPieLabelUtils$$.$_columnLabels$ = function $$DvtPieLabelUtils$$$$_columnLabels$$($pie$$8$$, $alabels$$3$$, $i$$281_isLeft$$2_startLabel$$, $isTop_labelInfo$$4$$, $isBottom$$) {
  var $frame$$2_vertX$$1$$ = $pie$$8$$.$_frame$, $minY$$10_startIndex$$ = $frame$$2_vertX$$1$$.y, $highestY_isStartAtTop_maxY$$10$$ = $frame$$2_vertX$$1$$.y + $frame$$2_vertX$$1$$.$h$, $frame$$2_vertX$$1$$ = $pie$$8$$.$getCenter$().x, $lowestY_minFeelerDist$$ = $pie$$8$$.$_radiusX$ * (1 + D.$DvtPieLabelUtils$$.$_FEELER_RAD_MINSIZE$ + D.$DvtPieLabelUtils$$.$_FEELER_HORIZ_MINSIZE$), $frame$$2_vertX$$1$$ = $i$$281_isLeft$$2_startLabel$$ ? $frame$$2_vertX$$1$$ - $lowestY_minFeelerDist$$ : $frame$$2_vertX$$1$$ + 
  $lowestY_minFeelerDist$$;
  for($i$$281_isLeft$$2_startLabel$$ = 0;$i$$281_isLeft$$2_startLabel$$ < $alabels$$3$$.length;$i$$281_isLeft$$2_startLabel$$++) {
    $alabels$$3$$[$i$$281_isLeft$$2_startLabel$$].$_minY$ = $minY$$10_startIndex$$, $minY$$10_startIndex$$ += $alabels$$3$$[$i$$281_isLeft$$2_startLabel$$].getHeight()
  }
  for($i$$281_isLeft$$2_startLabel$$ = $alabels$$3$$.length - 1;0 <= $i$$281_isLeft$$2_startLabel$$;$i$$281_isLeft$$2_startLabel$$--) {
    $highestY_isStartAtTop_maxY$$10$$ -= $alabels$$3$$[$i$$281_isLeft$$2_startLabel$$].getHeight(), $alabels$$3$$[$i$$281_isLeft$$2_startLabel$$].$_maxY$ = $highestY_isStartAtTop_maxY$$10$$
  }
  if($alabels$$3$$[0].$_minY$ >= $alabels$$3$$[0].$_maxY$) {
    for($i$$281_isLeft$$2_startLabel$$ = 0;$i$$281_isLeft$$2_startLabel$$ < $alabels$$3$$.length;$i$$281_isLeft$$2_startLabel$$++) {
      $isTop_labelInfo$$4$$ = $alabels$$3$$[$i$$281_isLeft$$2_startLabel$$], $isTop_labelInfo$$4$$.$setX$($frame$$2_vertX$$1$$), $isTop_labelInfo$$4$$.$setY$(($isTop_labelInfo$$4$$.$_minY$ + $isTop_labelInfo$$4$$.$_maxY$) / 2), $isTop_labelInfo$$4$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$
    }
  }else {
    $minY$$10_startIndex$$ = D.$DvtPieLabelUtils$$.$_getMiddleLabel$($alabels$$3$$);
    $i$$281_isLeft$$2_startLabel$$ = $alabels$$3$$[$minY$$10_startIndex$$];
    $highestY_isStartAtTop_maxY$$10$$ = 90 >= $i$$281_isLeft$$2_startLabel$$.$getPosition$();
    $isTop_labelInfo$$4$$ && !$isBottom$$ && $i$$281_isLeft$$2_startLabel$$.$_minY$ + $i$$281_isLeft$$2_startLabel$$.getHeight() > $pie$$8$$.$getCenter$().y && ($isBottom$$ = D.$JSCompiler_alias_TRUE$$);
    $isBottom$$ && !$isTop_labelInfo$$4$$ && $i$$281_isLeft$$2_startLabel$$.$_maxY$ < $pie$$8$$.$getCenter$().y && ($isTop_labelInfo$$4$$ = D.$JSCompiler_alias_TRUE$$);
    if($isTop_labelInfo$$4$$ && $highestY_isStartAtTop_maxY$$10$$ || $isBottom$$ && !$highestY_isStartAtTop_maxY$$10$$) {
      D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$8$$, $i$$281_isLeft$$2_startLabel$$, $frame$$2_vertX$$1$$), $i$$281_isLeft$$2_startLabel$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$
    }
    var $highestY_isStartAtTop_maxY$$10$$ = $i$$281_isLeft$$2_startLabel$$.$getY$(), $lowestY_minFeelerDist$$ = $i$$281_isLeft$$2_startLabel$$.$getY$() + $i$$281_isLeft$$2_startLabel$$.getHeight(), $optimalY$$1$$, $labelHeight$$4$$;
    if($isTop_labelInfo$$4$$) {
      for($i$$281_isLeft$$2_startLabel$$ = $minY$$10_startIndex$$ - 1;0 <= $i$$281_isLeft$$2_startLabel$$;$i$$281_isLeft$$2_startLabel$$--) {
        $isTop_labelInfo$$4$$ = $alabels$$3$$[$i$$281_isLeft$$2_startLabel$$], $labelHeight$$4$$ = $isTop_labelInfo$$4$$.getHeight(), D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$8$$, $isTop_labelInfo$$4$$, $frame$$2_vertX$$1$$), $isTop_labelInfo$$4$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$, $optimalY$$1$$ = $isTop_labelInfo$$4$$.$getY$(), $highestY_isStartAtTop_maxY$$10$$ = $optimalY$$1$$ + $labelHeight$$4$$ < $highestY_isStartAtTop_maxY$$10$$ ? $optimalY$$1$$ : $highestY_isStartAtTop_maxY$$10$$ - 
        $labelHeight$$4$$, $isTop_labelInfo$$4$$.$setY$($highestY_isStartAtTop_maxY$$10$$)
      }
    }
    if($isBottom$$) {
      for($i$$281_isLeft$$2_startLabel$$ = $minY$$10_startIndex$$ + 1;$i$$281_isLeft$$2_startLabel$$ < $alabels$$3$$.length;$i$$281_isLeft$$2_startLabel$$++) {
        $isTop_labelInfo$$4$$ = $alabels$$3$$[$i$$281_isLeft$$2_startLabel$$], $labelHeight$$4$$ = $isTop_labelInfo$$4$$.getHeight(), D.$DvtPieLabelUtils$$.$_setOptimalLabelPosition$($pie$$8$$, $isTop_labelInfo$$4$$, $frame$$2_vertX$$1$$), $isTop_labelInfo$$4$$.$_hasFeeler$ = D.$JSCompiler_alias_TRUE$$, $optimalY$$1$$ = $isTop_labelInfo$$4$$.$getY$(), $lowestY_minFeelerDist$$ = $optimalY$$1$$ > $lowestY_minFeelerDist$$ ? $optimalY$$1$$ + $labelHeight$$4$$ : $lowestY_minFeelerDist$$ + $labelHeight$$4$$, 
        $isTop_labelInfo$$4$$.$setY$($lowestY_minFeelerDist$$ - $labelHeight$$4$$)
      }
    }
  }
};
D.$DvtPieLabelUtils$$.$_truncateSliceLabel$ = function $$DvtPieLabelUtils$$$$_truncateSliceLabel$$($pie$$9_tmDimPt$$, $frame$$3_slice$$15$$, $labelInfo$$5$$, $isLeft$$3$$) {
  var $sliceLabel$$4$$ = $labelInfo$$5$$.$_sliceLabel$, $style$$26$$ = $sliceLabel$$4$$.$getCSSStyle$(), $maxLabelWidth$$1_numChildren$$8$$ = 0, $maxLabelWidth$$1_numChildren$$8$$ = $pie$$9_tmDimPt$$.$getNumChildren$(), $removeTextArea$$ = D.$JSCompiler_alias_FALSE$$;
  $pie$$9_tmDimPt$$.contains($sliceLabel$$4$$) || ($pie$$9_tmDimPt$$.$addChild$($sliceLabel$$4$$), $removeTextArea$$ = D.$JSCompiler_alias_TRUE$$);
  $sliceLabel$$4$$.$setCSSStyle$($style$$26$$);
  $sliceLabel$$4$$.$setTextString$($frame$$3_slice$$15$$.$_sliceLabelString$);
  $removeTextArea$$ && $pie$$9_tmDimPt$$.$removeChildAt$($maxLabelWidth$$1_numChildren$$8$$);
  $frame$$3_slice$$15$$ = $pie$$9_tmDimPt$$.$_frame$;
  $maxLabelWidth$$1_numChildren$$8$$ = $isLeft$$3$$ ? $labelInfo$$5$$.$getX$() - $frame$$3_slice$$15$$.x : $frame$$3_slice$$15$$.x + $frame$$3_slice$$15$$.$w$ - $labelInfo$$5$$.$getX$();
  $pie$$9_tmDimPt$$ = D.$DvtPieLabelUtils$$.$_getTextDimension$($pie$$9_tmDimPt$$, $sliceLabel$$4$$, $maxLabelWidth$$1_numChildren$$8$$, $labelInfo$$5$$.$_initialNumLines$);
  $labelInfo$$5$$.$setWidth$($pie$$9_tmDimPt$$.x);
  $labelInfo$$5$$.getHeight() != $pie$$9_tmDimPt$$.y && $labelInfo$$5$$.$setHeight$($pie$$9_tmDimPt$$.y)
};
D.$DvtPieLabelUtils$$.$_generateInitialLayout$ = function $$DvtPieLabelUtils$$$$_generateInitialLayout$$($pie$$10$$) {
  var $arArrays$$ = (0,window.Array)(2), $leftLabels$$1$$ = [], $rightLabels$$1$$ = [], $dist_labelPt$$, $maxLabelWidth$$2_tmDimPt$$1$$, $ma$$2$$ = 0, $pa$$2_tilt$$3$$ = 0, $i$$282$$, $s_label$$, $slices$$1$$ = $pie$$10$$.$_slices$, $n$$26$$ = $slices$$1$$.length, $frame$$4$$ = $pie$$10$$.$_frame$;
  if(0 < $n$$26$$) {
    for($i$$282$$ = 0;$i$$282$$ < $n$$26$$;$i$$282$$++) {
      window.slice = $slices$$1$$[$i$$282$$], $s_label$$ = D.$DvtPieLabelUtils$$.$_createLabel$(window.slice), $ma$$2$$ = window.slice.$getAngleStart$() + window.slice.$getAngleExtent$() / 2, 360 < $ma$$2$$ && ($ma$$2$$ -= 360), 0 > $ma$$2$$ && ($ma$$2$$ += 360), $dist_labelPt$$ = 1 + D.$DvtPieLabelUtils$$.$_OUTSIDE_LABEL_DISTANCE$, $dist_labelPt$$ = D.$DvtPieRenderUtils$$.$reflectAngleOverYAxis$($ma$$2$$, $pie$$10$$.$getCenter$().x, $pie$$10$$.$getCenter$().y, $pie$$10$$.$_radiusX$ * $dist_labelPt$$, 
      $pie$$10$$.$_radiusY$ * $dist_labelPt$$), $maxLabelWidth$$2_tmDimPt$$1$$ = 90 <= $ma$$2$$ && 270 > $ma$$2$$ ? $dist_labelPt$$.x - $frame$$4$$.x : $frame$$4$$.x + $frame$$4$$.$w$ - $dist_labelPt$$.x, $maxLabelWidth$$2_tmDimPt$$1$$ = D.$DvtPieLabelUtils$$.$_getTextDimension$($pie$$10$$, $s_label$$, $maxLabelWidth$$2_tmDimPt$$1$$, D.$DvtPieLabelUtils$$.$_MAX_LINES_PER_LABEL$), 165 > $ma$$2$$ && 15 < $ma$$2$$ ? $dist_labelPt$$.y -= 1 * $maxLabelWidth$$2_tmDimPt$$1$$.y : 15 > $ma$$2$$ || 345 < $ma$$2$$ ? 
      ($dist_labelPt$$.y -= 0.5 * $maxLabelWidth$$2_tmDimPt$$1$$.y, $dist_labelPt$$.x += 0.2 * $maxLabelWidth$$2_tmDimPt$$1$$.y) : 165 < $ma$$2$$ && 195 > $ma$$2$$ && ($dist_labelPt$$.y -= 0.5 * $maxLabelWidth$$2_tmDimPt$$1$$.y, $dist_labelPt$$.x -= 0.2 * $maxLabelWidth$$2_tmDimPt$$1$$.y), $pa$$2_tilt$$3$$ = D.$DvtPieLabelUtils$$.$_adjustForDepth$($ma$$2$$, $pie$$10$$.$getDepth$()), $dist_labelPt$$.y += $pa$$2_tilt$$3$$, 1 == $n$$26$$ && ($dist_labelPt$$.x -= $maxLabelWidth$$2_tmDimPt$$1$$.x / 2), 
      $dist_labelPt$$.y < $frame$$4$$.y && ($dist_labelPt$$.y = $frame$$4$$.y), $dist_labelPt$$.y + $maxLabelWidth$$2_tmDimPt$$1$$.y > $frame$$4$$.y + $frame$$4$$.$h$ && ($dist_labelPt$$.y = $frame$$4$$.y + $frame$$4$$.$h$ - $maxLabelWidth$$2_tmDimPt$$1$$.y), 90 <= $ma$$2$$ && 270 > $ma$$2$$ ? ($s_label$$.$alignRight$(), $pa$$2_tilt$$3$$ = $ma$$2$$ - 90, D.$DvtPieLabelUtils$$.$_createLabelInfo$($s_label$$, $ma$$2$$, $pa$$2_tilt$$3$$, $maxLabelWidth$$2_tmDimPt$$1$$, $dist_labelPt$$, $leftLabels$$1$$)) : 
      ($pa$$2_tilt$$3$$ = 90 >= $ma$$2$$ ? window.Math.abs(90 - $ma$$2$$) : 180 - ($ma$$2$$ - 270), D.$DvtPieLabelUtils$$.$_createLabelInfo$($s_label$$, $ma$$2$$, $pa$$2_tilt$$3$$, $maxLabelWidth$$2_tmDimPt$$1$$, $dist_labelPt$$, $rightLabels$$1$$))
    }
  }
  $arArrays$$[0] = $leftLabels$$1$$;
  $arArrays$$[1] = $rightLabels$$1$$;
  return $arArrays$$
};
D.$DvtPieLabelUtils$$.$_createLabelInfo$ = function $$DvtPieLabelUtils$$$$_createLabelInfo$$($sliceLabel$$5$$, $ma$$3$$, $pa$$3$$, $tmDimPt$$2$$, $labelPt$$1$$, $labelInfoArray$$1$$) {
  for(var $slice$$16$$ = window.slice, $insertPos$$ = -1, $labelInfo$$6$$, $j$$57$$ = 0;$j$$57$$ < $labelInfoArray$$1$$.length;$j$$57$$++) {
    if($labelInfo$$6$$ = $labelInfoArray$$1$$[$j$$57$$], $labelInfo$$6$$.$getPosition$() > $pa$$3$$) {
      $insertPos$$ = $j$$57$$;
      break
    }
  }
  -1 == $insertPos$$ && ($insertPos$$ = $labelInfoArray$$1$$.length);
  $labelInfo$$6$$ = new D.$DvtPieLabelInfo$$;
  $labelInfo$$6$$.$setPosition$($pa$$3$$);
  $labelInfo$$6$$.$setAngle$($ma$$3$$);
  $labelInfo$$6$$.$setSliceLabel$($sliceLabel$$5$$);
  $labelInfo$$6$$.$_slice$ = $slice$$16$$;
  $labelInfo$$6$$.$setWidth$($tmDimPt$$2$$.x);
  $labelInfo$$6$$.$setHeight$($tmDimPt$$2$$.y);
  $labelInfo$$6$$.$setX$($labelPt$$1$$.x);
  $labelInfo$$6$$.$setY$($labelPt$$1$$.y);
  $labelInfoArray$$1$$.splice($insertPos$$, 0, $labelInfo$$6$$)
};
D.$DvtPieLabelUtils$$.$_getTextDimension$ = function $$DvtPieLabelUtils$$$$_getTextDimension$$($pieChart$$6$$, $sliceLabel$$6$$, $dimensions$$2_maxWidth$$9$$, $maxLines$$) {
  $sliceLabel$$6$$.$setMaxLines$($maxLines$$);
  D.$DvtTextUtils$$.$fitText$($sliceLabel$$6$$, $dimensions$$2_maxWidth$$9$$, window.Infinity, $pieChart$$6$$);
  $pieChart$$6$$.$addChild$($sliceLabel$$6$$);
  $dimensions$$2_maxWidth$$9$$ = $sliceLabel$$6$$.$getDimensions$();
  $pieChart$$6$$.removeChild($sliceLabel$$6$$);
  return{x:$dimensions$$2_maxWidth$$9$$.$w$, y:$dimensions$$2_maxWidth$$9$$.$h$}
};
D.$DvtChartRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartRenderer$$, D.$DvtObj$$, "DvtChartRenderer");
D.$DvtChartRenderer$$.$_EMPTY_TEXT_GAP_WIDTH$ = 2;
D.$DvtChartRenderer$$.$_EMPTY_TEXT_GAP_HEIGHT$ = 1;
D.$DvtChartRenderer$$.$_BUTTON_SIZE$ = 16;
D.$DvtChartRenderer$$.$_BUTTON_PADDING$ = 5;
D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$ = 4;
D.$DvtChartRenderer$$.$_BUTTON_OPACITY$ = 0.8;
D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_SLOW$ = 0.05;
D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_FAST$ = 0.2;
D.$DvtChartRenderer$$.$render$ = function $$DvtChartRenderer$$$$render$$($chart$$188$$, $container$$46$$, $availSpace$$21$$) {
  D.$DvtChartRenderer$$.$_renderBackground$($chart$$188$$, $container$$46$$, $availSpace$$21$$);
  if(D.$DvtChartDataUtils$$.$hasData$($chart$$188$$)) {
    D.$DvtChartRenderer$$.$_addOuterGaps$($chart$$188$$, $availSpace$$21$$);
    D.$DvtChartRenderer$$.$_renderTitles$($chart$$188$$, $container$$46$$, $availSpace$$21$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$21$$);
    D.$DvtChartLegendRenderer$$.$render$($chart$$188$$, $container$$46$$, $availSpace$$21$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$21$$);
    var $horizSbDim$$ = D.$DvtChartRenderer$$.$_prerenderHorizScrollbar$($chart$$188$$, $container$$46$$, $availSpace$$21$$), $vertSbDim$$ = D.$DvtChartRenderer$$.$_prerenderVertScrollbar$($chart$$188$$, $container$$46$$, $availSpace$$21$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$21$$);
    var $maxHeight$$inline_3461_space$$inline_3459$$ = $availSpace$$21$$.clone();
    $chart$$188$$.$_axisSpace$ = $maxHeight$$inline_3461_space$$inline_3459$$;
    var $maxWidth$$inline_3460_space$$inline_3464$$ = 0.8 * $maxHeight$$inline_3461_space$$inline_3459$$.$w$, $maxHeight$$inline_3461_space$$inline_3459$$ = $maxHeight$$inline_3461_space$$inline_3459$$.$h$ - 5 * D.$DvtChartAxisUtils$$.$getTickLabelFontSize$($chart$$188$$, "x");
    $chart$$188$$.$_radius$ = window.Math.min($maxWidth$$inline_3460_space$$inline_3464$$, $maxHeight$$inline_3461_space$$inline_3459$$) / 2;
    D.$DvtChartAxisRenderer$$.$render$($chart$$188$$, $container$$46$$, $availSpace$$21$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$21$$);
    $maxWidth$$inline_3460_space$$inline_3464$$ = $availSpace$$21$$.clone();
    $chart$$188$$.$_plotAreaSpace$ = $maxWidth$$inline_3460_space$$inline_3464$$;
    D.$DvtChartRenderer$$.$_setEventHandlers$($chart$$188$$);
    D.$DvtChartRenderer$$.$_renderScrollbars$($chart$$188$$, $horizSbDim$$, $vertSbDim$$);
    D.$DvtChartRenderer$$.$_renderPlotArea$($chart$$188$$, $container$$46$$, $availSpace$$21$$);
    D.$DvtChartTypeUtils$$.$isPolar$($chart$$188$$) && $container$$46$$.$addChild$($chart$$188$$.$yAxis$);
    D.$DvtChartRenderer$$.$_renderDragButtons$($chart$$188$$)
  }else {
    D.$DvtChartRenderer$$.$renderEmptyText$($chart$$188$$, $container$$46$$, $availSpace$$21$$)
  }
};
D.$DvtChartRenderer$$.$_setEventHandlers$ = function $$DvtChartRenderer$$$$_setEventHandlers$$($chart$$189$$) {
  var $options$$113$$ = $chart$$189$$.$getOptions$(), $em$$1$$ = $chart$$189$$.$getEventManager$();
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$189$$) && !$options$$113$$._isOverview) {
    var $chartBounds$$ = new D.$DvtRectangle$$(0, 0, $chart$$189$$.getWidth(), $chart$$189$$.getHeight()), $plotAreaBounds$$7$$ = $chart$$189$$.$_plotAreaSpace$, $axisBounds_vertAxisBounds$$ = $chart$$189$$.$_axisSpace$, $horizAxisBounds$$ = new D.$DvtRectangle$$($plotAreaBounds$$7$$.x, $axisBounds_vertAxisBounds$$.y, $plotAreaBounds$$7$$.$w$, $axisBounds_vertAxisBounds$$.$h$), $axisBounds_vertAxisBounds$$ = new D.$DvtRectangle$$($axisBounds_vertAxisBounds$$.x, $plotAreaBounds$$7$$.y, $axisBounds_vertAxisBounds$$.$w$, 
    $plotAreaBounds$$7$$.$h$), $marqueeFill$$ = new D.$DvtSolidFill$$($options$$113$$.styleDefaults.marqueeColor), $marqueeStroke$$ = new D.$DvtSolidStroke$$($options$$113$$.styleDefaults.marqueeBorderColor), $marqueeHandler_panZoomHandler_zoomRate$$;
    if(D.$DvtChartTypeUtils$$.$isScrollSupported$($chart$$189$$) && D.$DvtChartEventUtils$$.$isScrollable$($chart$$189$$)) {
      $marqueeHandler_panZoomHandler_zoomRate$$ = D.$DvtChartEventUtils$$.$isDelayedScroll$($chart$$189$$) ? D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_FAST$ : D.$DvtChartRenderer$$.$_MOUSE_WHEEL_ZOOM_RATE_SLOW$;
      $marqueeHandler_panZoomHandler_zoomRate$$ = new D.$DvtPanZoomHandler$$($chart$$189$$, $plotAreaBounds$$7$$, $chartBounds$$, $marqueeHandler_panZoomHandler_zoomRate$$);
      var $panUpCursor$$inline_3467$$ = $options$$113$$._resources.panCursorUp, $panDownCursor$$inline_3468$$ = $options$$113$$._resources.panCursorDown;
      (0,D.$DvtAgent$isPlatformIE$$)() || ($panUpCursor$$inline_3467$$ && ($marqueeHandler_panZoomHandler_zoomRate$$.$_panUpCursor$ = "url(" + $panUpCursor$$inline_3467$$ + ") 8 8, auto"), $panDownCursor$$inline_3468$$ && ($marqueeHandler_panZoomHandler_zoomRate$$.$_panDownCursor$ = "url(" + $panDownCursor$$inline_3468$$ + ") 8 8, auto"));
      $em$$1$$.$_panZoomHandler$ = $marqueeHandler_panZoomHandler_zoomRate$$;
      D.$DvtChartEventUtils$$.$isZoomable$($chart$$189$$) && ($marqueeHandler_panZoomHandler_zoomRate$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$189$$) ? new D.$DvtMarqueeHandler$$($chart$$189$$, $plotAreaBounds$$7$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_NULL$$, $axisBounds_vertAxisBounds$$) : D.$DvtChartTypeUtils$$.$isBLAC$($chart$$189$$) ? new D.$DvtMarqueeHandler$$($chart$$189$$, $plotAreaBounds$$7$$, 
      $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_FALSE$$, $horizAxisBounds$$, D.$JSCompiler_alias_NULL$$) : new D.$DvtMarqueeHandler$$($chart$$189$$, $plotAreaBounds$$7$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, $horizAxisBounds$$, $axisBounds_vertAxisBounds$$), $em$$1$$.$_marqueeZoomHandler$ = $marqueeHandler_panZoomHandler_zoomRate$$)
    }
    "multiple" == $options$$113$$.selection && ($marqueeHandler_panZoomHandler_zoomRate$$ = new D.$DvtMarqueeHandler$$($chart$$189$$, $plotAreaBounds$$7$$, $chartBounds$$, $marqueeFill$$, $marqueeStroke$$, D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$, $horizAxisBounds$$, $axisBounds_vertAxisBounds$$), $em$$1$$.$_marqueeSelectHandler$ = $marqueeHandler_panZoomHandler_zoomRate$$)
  }
};
D.$DvtChartRenderer$$.$rerenderAxisAndPlotArea$ = function $$DvtChartRenderer$$$$rerenderAxisAndPlotArea$$($chart$$190$$, $container$$47$$) {
  if(D.$DvtChartDataUtils$$.$hasData$($chart$$190$$)) {
    var $availSpace$$22$$ = $chart$$190$$.$_axisSpace$.clone(), $selectionHandler$$2$$ = $chart$$190$$.$getSelectionHandler$();
    if($selectionHandler$$2$$) {
      var $selectedIds$$5$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)($selectionHandler$$2$$)
    }
    $chart$$190$$.$__cleanUpAxisAndPlotArea$();
    D.$DvtChartAxisRenderer$$.$render$($chart$$190$$, $container$$47$$, $availSpace$$22$$);
    D.$DvtChartRenderer$$.$_adjustAvailSpace$($availSpace$$22$$);
    var $space$$inline_3480$$ = $availSpace$$22$$.clone();
    $chart$$190$$.$_plotAreaSpace$ = $space$$inline_3480$$;
    D.$DvtChartRenderer$$.$_renderPlotArea$($chart$$190$$, $container$$47$$, $availSpace$$22$$);
    $selectionHandler$$2$$ && (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($selectionHandler$$2$$, $selectedIds$$5$$, $chart$$190$$.$getObjects$());
    (0,D.$JSCompiler_StaticMethods_autoToggleZoomButton$$)($chart$$190$$.$getEventManager$());
    D.$DvtChartRenderer$$.$positionDragButtons$($chart$$190$$)
  }
};
D.$DvtChartRenderer$$.$_renderBackground$ = function $$DvtChartRenderer$$$$_renderBackground$$($chart$$191$$, $container$$48$$, $availSpace$$23_rect$$12$$) {
  var $options$$114$$ = $chart$$191$$.$getOptions$();
  $availSpace$$23_rect$$12$$ = new D.$DvtRect$$($chart$$191$$.$_context$, $availSpace$$23_rect$$12$$.x, $availSpace$$23_rect$$12$$.y, $availSpace$$23_rect$$12$$.$w$, $availSpace$$23_rect$$12$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($availSpace$$23_rect$$12$$);
  $container$$48$$.$addChild$($availSpace$$23_rect$$12$$);
  $chart$$191$$.$getEventManager$().$associate$($availSpace$$23_rect$$12$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$BACKGROUND$)));
  (0,D.$JSCompiler_StaticMethods_setAriaRole$$)($availSpace$$23_rect$$12$$, "img");
  (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($availSpace$$23_rect$$12$$, "label", $options$$114$$.shortDesc)
};
D.$DvtChartRenderer$$.$_addOuterGaps$ = function $$DvtChartRenderer$$$$_addOuterGaps$$($chart$$192$$, $availSpace$$24$$) {
  var $gapHeight_options$$115$$ = $chart$$192$$.$getOptions$(), $gapWidth$$ = (0,D.$DvtChartDefaults$getGapSize$$)($chart$$192$$, $gapHeight_options$$115$$.layout.outerGapWidth), $gapHeight_options$$115$$ = (0,D.$DvtChartDefaults$getGapSize$$)($chart$$192$$, $gapHeight_options$$115$$.layout.outerGapHeight);
  if(D.$DvtChartTypeUtils$$.$isStandalonePlotArea$($chart$$192$$) || D.$DvtChartTypeUtils$$.$isStandaloneXAxis$($chart$$192$$) || D.$DvtChartTypeUtils$$.$isStandaloneYAxis$($chart$$192$$) || D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$($chart$$192$$)) {
    $gapWidth$$ = window.Math.min($gapWidth$$, 1), $gapHeight_options$$115$$ = window.Math.min($gapHeight_options$$115$$, 1)
  }
  $availSpace$$24$$.x += $gapWidth$$;
  $availSpace$$24$$.$w$ -= 2 * $gapWidth$$;
  $availSpace$$24$$.y += $gapHeight_options$$115$$;
  $availSpace$$24$$.$h$ -= 2 * $gapHeight_options$$115$$
};
D.$DvtChartRenderer$$.$_renderTitles$ = function $$DvtChartRenderer$$$$_renderTitles$$($chart$$193$$, $container$$49_footnoteObj$$, $availSpace$$25$$) {
  var $options$$116$$ = $chart$$193$$.$getOptions$();
  if($options$$116$$.title.text) {
    var $lowerSepObj_titleGapBelow_titleObj$$ = D.$DvtChartTextUtils$$.$createText$($chart$$193$$.$getEventManager$(), $container$$49_footnoteObj$$, $options$$116$$.title.text, $options$$116$$.title.style, $availSpace$$25$$.x, $availSpace$$25$$.y, $availSpace$$25$$.$w$, $availSpace$$25$$.$h$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$TITLE$)), $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$, $titleDims$$;
    $lowerSepObj_titleGapBelow_titleObj$$ ? ($titleDims$$ = $lowerSepObj_titleGapBelow_titleObj$$.$getDimensions$(), $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ = $titleDims$$.$h$) : ($footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ = 0, $titleDims$$ = new D.$DvtRectangle$$(0, 0, 0, 0));
    if($options$$116$$.subtitle.text) {
      var $subtitleObj$$ = new D.$DvtOutputText$$($chart$$193$$.$_context$, $options$$116$$.subtitle.text, $availSpace$$25$$.x, $availSpace$$25$$.y);
      $subtitleObj$$.$setCSSStyle$($options$$116$$.subtitle.style);
      $container$$49_footnoteObj$$.$addChild$($subtitleObj$$);
      var $subtitleDims$$ = $subtitleObj$$.$measureDimensions$(), $titleSubtitleGap$$ = (0,D.$DvtChartDefaults$getGapSize$$)($chart$$193$$, $options$$116$$.layout.titleSubtitleGapWidth), $titleSpace$$ = $titleDims$$.$w$ + $titleSubtitleGap$$ + $subtitleDims$$.$w$;
      $titleSpace$$ > $availSpace$$25$$.$w$ ? ($titleSubtitleGap$$ = (0,D.$DvtChartDefaults$getGapSize$$)($chart$$193$$, $options$$116$$.layout.titleSubtitleGapHeight), $subtitleObj$$.$setY$($availSpace$$25$$.y + $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ + $titleSubtitleGap$$), $container$$49_footnoteObj$$.removeChild($subtitleObj$$), D.$DvtTextUtils$$.$fitText$($subtitleObj$$, $availSpace$$25$$.$w$, $availSpace$$25$$.$h$, $chart$$193$$) && ($subtitleDims$$ = $subtitleObj$$.$measureDimensions$(), 
      $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ += $subtitleDims$$.$h$ + $titleSubtitleGap$$, (0,D.$DvtAgent$isRightToLeft$$)($chart$$193$$.$_context$) && ($subtitleObj$$ && $subtitleObj$$.$setX$($availSpace$$25$$.$w$ - $subtitleDims$$.$w$), $lowerSepObj_titleGapBelow_titleObj$$ && $lowerSepObj_titleGapBelow_titleObj$$.$setX$($availSpace$$25$$.$w$ - $titleDims$$.$w$)))) : ($subtitleObj$$.$setY$($titleDims$$.$h$ - $subtitleDims$$.$h$ + $availSpace$$25$$.y), (0,D.$DvtLayoutUtils$align$$)($availSpace$$25$$, 
      $options$$116$$.title.hAlign, $lowerSepObj_titleGapBelow_titleObj$$, $titleSpace$$), (0,D.$DvtAgent$isRightToLeft$$)($chart$$193$$.$_context$) ? ($subtitleObj$$.$setX$($lowerSepObj_titleGapBelow_titleObj$$.$getX$()), $lowerSepObj_titleGapBelow_titleObj$$ && $lowerSepObj_titleGapBelow_titleObj$$.$setX$($lowerSepObj_titleGapBelow_titleObj$$.$getX$() + $subtitleDims$$.$w$ + $titleSubtitleGap$$)) : $subtitleObj$$.$setX$($lowerSepObj_titleGapBelow_titleObj$$.$getX$() + $titleSpace$$ - $subtitleDims$$.$w$));
      (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($subtitleObj$$, "hidden", D.$JSCompiler_alias_NULL$$);
      $chart$$193$$.$getEventManager$().$associate$($subtitleObj$$, new D.$DvtSimpleObjPeer$$($subtitleObj$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$SUBTITLE$)))
    }else {
      (0,D.$DvtLayoutUtils$align$$)($availSpace$$25$$, $options$$116$$.title.hAlign, $lowerSepObj_titleGapBelow_titleObj$$, $titleDims$$.$w$)
    }
    (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($lowerSepObj_titleGapBelow_titleObj$$, "hidden", D.$JSCompiler_alias_NULL$$);
    $lowerSepObj_titleGapBelow_titleObj$$ = "on" == $options$$116$$.titleSeparator.rendered ? $options$$116$$.layout.titleSeparatorGap : $options$$116$$.layout.titlePlotAreaGap;
    $availSpace$$25$$.y += $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ + (0,D.$DvtChartDefaults$getGapSize$$)($chart$$193$$, $lowerSepObj_titleGapBelow_titleObj$$);
    $availSpace$$25$$.$h$ -= $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ + (0,D.$DvtChartDefaults$getGapSize$$)($chart$$193$$, $lowerSepObj_titleGapBelow_titleObj$$);
    "on" == $options$$116$$.titleSeparator.rendered && ($footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ = new D.$DvtLine$$($chart$$193$$.$_context$, $availSpace$$25$$.x, $availSpace$$25$$.y, $availSpace$$25$$.x + $availSpace$$25$$.$w$, $availSpace$$25$$.y), $lowerSepObj_titleGapBelow_titleObj$$ = new D.$DvtLine$$($chart$$193$$.$_context$, $availSpace$$25$$.x, $availSpace$$25$$.y + 1, $availSpace$$25$$.x + $availSpace$$25$$.$w$, $availSpace$$25$$.y + 1), $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$.$setSolidStroke$($options$$116$$.titleSeparator.upperColor), 
    $lowerSepObj_titleGapBelow_titleObj$$.$setSolidStroke$($options$$116$$.titleSeparator.lowerColor), $container$$49_footnoteObj$$.$addChild$($footnoteDims_titleHeight_titleSepHeight_upperSepObj$$), $container$$49_footnoteObj$$.$addChild$($lowerSepObj_titleGapBelow_titleObj$$), $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ = 2 + (0,D.$DvtChartDefaults$getGapSize$$)($chart$$193$$, $options$$116$$.layout.titlePlotAreaGap), $availSpace$$25$$.y += $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$, 
    $availSpace$$25$$.$h$ -= $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$)
  }
  if($options$$116$$.footnote.text) {
    if($container$$49_footnoteObj$$ = D.$DvtChartTextUtils$$.$createText$($chart$$193$$.$getEventManager$(), $container$$49_footnoteObj$$, $options$$116$$.footnote.text, $options$$116$$.footnote.style, $availSpace$$25$$.x, 0, $availSpace$$25$$.$w$, $availSpace$$25$$.$h$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$FOOTNOTE$))) {
      $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$ = $container$$49_footnoteObj$$.$getDimensions$(), $container$$49_footnoteObj$$.$setY$($availSpace$$25$$.y + $availSpace$$25$$.$h$ - $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$.$h$), $availSpace$$25$$.$h$ -= $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$.$h$ + (0,D.$DvtChartDefaults$getGapSize$$)($chart$$193$$, $options$$116$$.layout.footnoteGap), (0,D.$DvtLayoutUtils$align$$)($availSpace$$25$$, $options$$116$$.footnote.hAlign, 
      $container$$49_footnoteObj$$, $footnoteDims_titleHeight_titleSepHeight_upperSepObj$$.$w$)
    }
    (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($container$$49_footnoteObj$$, "hidden", D.$JSCompiler_alias_NULL$$)
  }
};
D.$DvtChartRenderer$$.$_renderPlotArea$ = function $$DvtChartRenderer$$$$_renderPlotArea$$($chart$$194$$, $container$$50$$, $availSpace$$26$$) {
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$194$$)) {
    var $pieChart$$7_plotArea$$1$$ = new D.$DvtContainer$$($chart$$194$$.$_context$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($pieChart$$7_plotArea$$1$$, $availSpace$$26$$.x, $availSpace$$26$$.y);
    $container$$50$$.$addChild$($pieChart$$7_plotArea$$1$$);
    $chart$$194$$.$_plotArea$ = $pieChart$$7_plotArea$$1$$;
    D.$DvtPlotAreaRenderer$$.$render$($chart$$194$$, $pieChart$$7_plotArea$$1$$, new D.$DvtRectangle$$(0, 0, $availSpace$$26$$.$w$, $availSpace$$26$$.$h$))
  }else {
    D.$DvtChartTypeUtils$$.$isPie$($chart$$194$$) ? ($pieChart$$7_plotArea$$1$$ = new D.$DvtPieChart$$($chart$$194$$, $availSpace$$26$$), 0 < $pieChart$$7_plotArea$$1$$.$_slices$.length ? ($container$$50$$.$addChild$($pieChart$$7_plotArea$$1$$), $pieChart$$7_plotArea$$1$$.$render$()) : D.$DvtChartRenderer$$.$renderEmptyText$($chart$$194$$, $container$$50$$, $availSpace$$26$$)) : D.$DvtChartTypeUtils$$.$isFunnel$($chart$$194$$) && D.$DvtFunnelRenderer$$.$render$($chart$$194$$, $container$$50$$, $availSpace$$26$$)
  }
  $availSpace$$26$$.$w$ = 0;
  $availSpace$$26$$.$h$ = 0
};
D.$DvtChartRenderer$$.$renderEmptyText$ = function $$DvtChartRenderer$$$$renderEmptyText$$($chart$$195$$, $container$$51$$, $availSpace$$27$$) {
  var $options$$117$$ = $chart$$195$$.$getOptions$(), $emptyTextStr_text$$26$$ = $options$$117$$.emptyText;
  $emptyTextStr_text$$26$$ || ($emptyTextStr_text$$26$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$195$$.$getBundle$(), "EMPTY_TEXT", D.$JSCompiler_alias_NULL$$));
  $emptyTextStr_text$$26$$ = new D.$DvtOutputText$$($chart$$195$$.$_context$, $emptyTextStr_text$$26$$, $availSpace$$27$$.x + $availSpace$$27$$.$w$ / 2, $availSpace$$27$$.y + $availSpace$$27$$.$h$ / 2);
  $emptyTextStr_text$$26$$.$setCSSStyle$($options$$117$$.title.style);
  $emptyTextStr_text$$26$$.$alignCenter$();
  $emptyTextStr_text$$26$$.$alignMiddle$();
  D.$DvtTextUtils$$.$fitText$($emptyTextStr_text$$26$$, $availSpace$$27$$.$w$ - 2 * D.$DvtChartRenderer$$.$_EMPTY_TEXT_GAP_WIDTH$, window.Infinity, $container$$51$$, 0) && ($emptyTextStr_text$$26$$.$isTruncated$() && $chart$$195$$.$getEventManager$().$associate$($emptyTextStr_text$$26$$, new D.$DvtSimpleObjPeer$$($emptyTextStr_text$$26$$.$_untruncatedTextString$)), (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($emptyTextStr_text$$26$$, "hidden", D.$JSCompiler_alias_NULL$$))
};
D.$DvtChartRenderer$$.$_prerenderHorizScrollbar$ = function $$DvtChartRenderer$$$$_prerenderHorizScrollbar$$($chart$$196$$, $container$$52$$, $availSpace$$28$$) {
  var $width$$63$$ = $availSpace$$28$$.$w$, $height$$48$$ = 0;
  if(D.$DvtChartEventUtils$$.$isScrollable$($chart$$196$$) && D.$DvtChartTypeUtils$$.$isHorizScrollbarSupported$($chart$$196$$)) {
    if(D.$DvtChartStyleUtils$$.$isOverviewRendered$($chart$$196$$)) {
      var $height$$48$$ = window.Math.min(D.$DvtChartStyleUtils$$.$getOverviewHeight$($chart$$196$$), $availSpace$$28$$.$h$), $oldOverviewChart$$ = $chart$$196$$.$overview$ ? $chart$$196$$.$overview$.$_chart$ : D.$JSCompiler_alias_NULL$$;
      $chart$$196$$.$overview$ = new D.$DvtChartOverview$$($chart$$196$$.$_context$, $chart$$196$$.$processEvent$, $chart$$196$$, $chart$$196$$.getId(), $oldOverviewChart$$);
      $container$$52$$.$addChild$($chart$$196$$.$overview$);
      (0,D.$DvtLayoutUtils$position$$)($availSpace$$28$$, "bottom", $chart$$196$$.$overview$, $width$$63$$, $height$$48$$, 10)
    }else {
      $height$$48$$ = $chart$$196$$.$getOptions$().styleDefaults._scrollbarHeight, $chart$$196$$.$xScrollbar$ = new D.$DvtSimpleScrollbar$$($chart$$196$$.$_context$, $chart$$196$$.$processEvent$, $chart$$196$$), $container$$52$$.$addChild$($chart$$196$$.$xScrollbar$), (0,D.$DvtLayoutUtils$position$$)($availSpace$$28$$, "bottom", $chart$$196$$.$xScrollbar$, $width$$63$$, $height$$48$$, 8), $chart$$196$$.$overview$ = D.$JSCompiler_alias_NULL$$
    }
  }
  return new D.$DvtDimension$$($width$$63$$, $height$$48$$)
};
D.$DvtChartRenderer$$.$_prerenderVertScrollbar$ = function $$DvtChartRenderer$$$$_prerenderVertScrollbar$$($chart$$197$$, $container$$53$$, $availSpace$$29$$) {
  var $width$$64$$ = 0, $height$$49$$ = $availSpace$$29$$.$h$;
  if(D.$DvtChartEventUtils$$.$isScrollable$($chart$$197$$) && D.$DvtChartTypeUtils$$.$isVertScrollbarSupported$($chart$$197$$)) {
    var $width$$64$$ = $chart$$197$$.$getOptions$().styleDefaults._scrollbarHeight, $scrollbar$$ = new D.$DvtSimpleScrollbar$$($chart$$197$$.$_context$, $chart$$197$$.$processEvent$, $chart$$197$$);
    $container$$53$$.$addChild$($scrollbar$$);
    (0,D.$DvtLayoutUtils$position$$)($availSpace$$29$$, (0,D.$DvtAgent$isRightToLeft$$)($chart$$197$$.$_context$) ? "right" : "left", $scrollbar$$, $width$$64$$, $height$$49$$, 8);
    D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$197$$) ? $chart$$197$$.$xScrollbar$ = $scrollbar$$ : $chart$$197$$.$yScrollbar$ = $scrollbar$$
  }
  return new D.$DvtDimension$$($width$$64$$, $height$$49$$)
};
D.$DvtChartRenderer$$.$_renderScrollbars$ = function $$DvtChartRenderer$$$$_renderScrollbars$$($chart$$198$$, $horizScrollbarDim$$, $ovOptions_vertScrollbarDim$$) {
  var $options$$118$$ = $chart$$198$$.$getOptions$(), $sbOptions$$ = {color:$options$$118$$.styleDefaults._scrollbarHandleColor, backgroundColor:$options$$118$$.styleDefaults._scrollbarTrackColor}, $plotAreaDim$$ = $chart$$198$$.$_plotAreaSpace$, $hitAreaSize$$ = (0,D.$DvtAgent$isTouchDevice$$)() ? 8 : 4;
  if($chart$$198$$.$xScrollbar$) {
    $sbOptions$$.min = $chart$$198$$.$xAxis$.$getGlobalMin$();
    $sbOptions$$.max = $chart$$198$$.$xAxis$.$getGlobalMax$();
    if(D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$198$$)) {
      $sbOptions$$.isHorizontal = D.$JSCompiler_alias_FALSE$$, $sbOptions$$.isReversed = D.$JSCompiler_alias_FALSE$$, $chart$$198$$.$xScrollbar$.$setTranslateY$($plotAreaDim$$.y), $chart$$198$$.$xScrollbar$.$render$($sbOptions$$, $ovOptions_vertScrollbarDim$$.$w$, $plotAreaDim$$.$h$)
    }else {
      $sbOptions$$.isHorizontal = D.$JSCompiler_alias_TRUE$$;
      $sbOptions$$.isReversed = (0,D.$DvtAgent$isRightToLeft$$)($chart$$198$$.$_context$);
      $chart$$198$$.$xScrollbar$.$setTranslateX$($plotAreaDim$$.x);
      $chart$$198$$.$xScrollbar$.$render$($sbOptions$$, $plotAreaDim$$.$w$, $horizScrollbarDim$$.$h$);
      var $hitArea$$ = new D.$DvtRect$$($chart$$198$$.$_context$, 0, -$hitAreaSize$$, $plotAreaDim$$.$w$, $horizScrollbarDim$$.$h$ + 2 * $hitAreaSize$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($hitArea$$);
      $chart$$198$$.$xScrollbar$.$addChild$($hitArea$$)
    }
    $chart$$198$$.$xScrollbar$.$setViewportRange$($chart$$198$$.$xAxis$.$getViewportMin$(), $chart$$198$$.$xAxis$.$getViewportMax$())
  }
  $chart$$198$$.$yScrollbar$ && ($sbOptions$$.min = $chart$$198$$.$yAxis$.$getGlobalMin$(), $sbOptions$$.max = $chart$$198$$.$yAxis$.$getGlobalMax$(), $sbOptions$$.isHorizontal = D.$JSCompiler_alias_FALSE$$, $sbOptions$$.isReversed = D.$JSCompiler_alias_TRUE$$, $chart$$198$$.$yScrollbar$.$setTranslateY$($plotAreaDim$$.y), $chart$$198$$.$yScrollbar$.$render$($sbOptions$$, $ovOptions_vertScrollbarDim$$.$w$, $plotAreaDim$$.$h$), $chart$$198$$.$yScrollbar$.$setViewportRange$($chart$$198$$.$yAxis$.$getViewportMin$(), 
  $chart$$198$$.$yAxis$.$getViewportMax$()), $hitArea$$ = new D.$DvtRect$$($chart$$198$$.$_context$, -$hitAreaSize$$, 0, $ovOptions_vertScrollbarDim$$.$w$ + 2 * $hitAreaSize$$, $plotAreaDim$$.$h$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($hitArea$$), $chart$$198$$.$yScrollbar$.$addChild$($hitArea$$));
  $chart$$198$$.$overview$ && ($ovOptions_vertScrollbarDim$$ = {startTime:$chart$$198$$.$xAxis$.$getGlobalMin$(), endTime:$chart$$198$$.$xAxis$.$getGlobalMax$(), viewportStartTime:$chart$$198$$.$xAxis$.$getViewportMin$(), viewportEndTime:$chart$$198$$.$xAxis$.$getViewportMax$(), minimumWindowSize:$chart$$198$$.$xAxis$.$getMinimumExtent$(), chart:D.$DvtJSONUtils$$.clone($options$$118$$)}, D.$DvtChartEventUtils$$.$isZoomable$($chart$$198$$) || ($ovOptions_vertScrollbarDim$$.featuresOff = "zoom"), $chart$$198$$.$overview$.$setTranslateX$($plotAreaDim$$.x), 
  $chart$$198$$.$overview$.$render$($ovOptions_vertScrollbarDim$$, $plotAreaDim$$.$w$, $horizScrollbarDim$$.$h$), $chart$$198$$.$overview$.$setViewportRange$($chart$$198$$.$xAxis$.$getViewportMin$(), $chart$$198$$.$xAxis$.$getViewportMax$()))
};
D.$DvtChartRenderer$$.$_renderDragButtons$ = function $$DvtChartRenderer$$$$_renderDragButtons$$($chart$$199$$) {
  var $options$$119_position$$11_tooltip$$12$$ = $chart$$199$$.$getOptions$();
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$199$$) && !$options$$119_position$$11_tooltip$$12$$._isOverview) {
    var $isTouch$$ = (0,D.$DvtAgent$isTouchDevice$$)(), $isScrollable$$ = D.$DvtChartTypeUtils$$.$isScrollSupported$($chart$$199$$) && D.$DvtChartEventUtils$$.$isScrollable$($chart$$199$$), $em$$2$$ = $chart$$199$$.$getEventManager$();
    $chart$$199$$.$dragButtons$ = new D.$DvtContainer$$($chart$$199$$.$_context$);
    var $resources$$4$$ = $options$$119_position$$11_tooltip$$12$$._resources;
    if("multiple" == $options$$119_position$$11_tooltip$$12$$.selection && ($isTouch$$ || $isScrollable$$)) {
      $options$$119_position$$11_tooltip$$12$$ = $isScrollable$$ && ($isTouch$$ || D.$DvtChartEventUtils$$.$isZoomable$($chart$$199$$)) ? "end" : "solo", $em$$2$$.$selectButton$ = D.$DvtChartRenderer$$.$_createDragButton$($chart$$199$$, $chart$$199$$.$dragButtons$, $resources$$4$$.selectUp, $resources$$4$$.selectDown, $em$$2$$.$onSelectButtonClick$, $em$$2$$, $options$$119_position$$11_tooltip$$12$$), $options$$119_position$$11_tooltip$$12$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$199$$.$getBundle$(), 
      "MARQUEE_SELECT"), $em$$2$$.$associate$($em$$2$$.$selectButton$, new D.$DvtSimpleObjPeer$$($options$$119_position$$11_tooltip$$12$$))
    }
    $isScrollable$$ && ($options$$119_position$$11_tooltip$$12$$ = $em$$2$$.$selectButton$ == D.$JSCompiler_alias_NULL$$ ? "solo" : "start", $isTouch$$ ? ($em$$2$$.$panButton$ = D.$DvtChartRenderer$$.$_createDragButton$($chart$$199$$, $chart$$199$$.$dragButtons$, $resources$$4$$.panUp, $resources$$4$$.panDown, $em$$2$$.$onPanButtonClick$, $em$$2$$, $options$$119_position$$11_tooltip$$12$$), $options$$119_position$$11_tooltip$$12$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$199$$.$getBundle$(), 
    "PAN"), $em$$2$$.$associate$($em$$2$$.$panButton$, new D.$DvtSimpleObjPeer$$($options$$119_position$$11_tooltip$$12$$))) : D.$DvtChartEventUtils$$.$isZoomable$($chart$$199$$) && ($em$$2$$.$zoomButton$ = D.$DvtChartRenderer$$.$_createDragButton$($chart$$199$$, $chart$$199$$.$dragButtons$, $resources$$4$$.zoomUp, $resources$$4$$.zoomDown, $em$$2$$.$onZoomButtonClick$, $em$$2$$, $options$$119_position$$11_tooltip$$12$$), $options$$119_position$$11_tooltip$$12$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$199$$.$getBundle$(), 
    "MARQUEE_ZOOM"), $em$$2$$.$associate$($em$$2$$.$zoomButton$, new D.$DvtSimpleObjPeer$$($options$$119_position$$11_tooltip$$12$$))));
    D.$DvtChartRenderer$$.$positionDragButtons$($chart$$199$$);
    (0,D.$JSCompiler_StaticMethods_setDragMode$$)($em$$2$$, D.$JSCompiler_alias_NULL$$);
    0 < $chart$$199$$.$dragButtons$.$getNumChildren$() && ($chart$$199$$.$addChild$($chart$$199$$.$dragButtons$), $isTouch$$ ? $isScrollable$$ && ((0,D.$JSCompiler_StaticMethods_setToggled$$)($em$$2$$.$panButton$, D.$JSCompiler_alias_TRUE$$), $em$$2$$.$onPanButtonClick$()) : (0,D.$JSCompiler_StaticMethods_hideDragButtons$$)($chart$$199$$), $chart$$199$$.$dragButtons$.setCursor("default"))
  }
};
D.$DvtChartRenderer$$.$_positionDragButton$ = function $$DvtChartRenderer$$$$_positionDragButton$$($chart$$200_transX$$6$$, $button$$26$$, $availSpace$$30$$) {
  (0,D.$DvtAgent$isRightToLeft$$)($chart$$200_transX$$6$$.$_context$) ? ($chart$$200_transX$$6$$ = $availSpace$$30$$.x + D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $availSpace$$30$$.x += D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$) : $chart$$200_transX$$6$$ = $availSpace$$30$$.x + $availSpace$$30$$.$w$ - D.$DvtChartRenderer$$.$_BUTTON_SIZE$ - D.$DvtChartRenderer$$.$_BUTTON_PADDING$;
  $availSpace$$30$$.$w$ -= D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($button$$26$$, $chart$$200_transX$$6$$, $availSpace$$30$$.y + D.$DvtChartRenderer$$.$_BUTTON_PADDING$)
};
D.$DvtChartRenderer$$.$positionDragButtons$ = function $$DvtChartRenderer$$$$positionDragButtons$$($chart$$201$$) {
  var $availSpace$$31$$ = $chart$$201$$.$_plotAreaSpace$.clone();
  $availSpace$$31$$.x += D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  $availSpace$$31$$.$w$ -= 2 * D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  $availSpace$$31$$.y += D.$DvtChartRenderer$$.$_BUTTON_CORNER_DIST$;
  var $em$$3$$ = $chart$$201$$.$getEventManager$();
  $em$$3$$.$selectButton$ && D.$DvtChartRenderer$$.$_positionDragButton$($chart$$201$$, $em$$3$$.$selectButton$, $availSpace$$31$$);
  $em$$3$$.$panButton$ && D.$DvtChartRenderer$$.$_positionDragButton$($chart$$201$$, $em$$3$$.$panButton$, $availSpace$$31$$);
  $em$$3$$.$zoomButton$ && D.$DvtChartRenderer$$.$_positionDragButton$($chart$$201$$, $em$$3$$.$zoomButton$, $availSpace$$31$$)
};
D.$DvtChartRenderer$$.$_createDragButtonBackground$ = function $$DvtChartRenderer$$$$_createDragButtonBackground$$($context$$136$$, $position$$12$$) {
  var $background$$3_blcr_cmd$$2$$ = 2, $trcr$$ = 2, $isR2L_pos$$30$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$136$$);
  "start" == $position$$12$$ ? $isR2L_pos$$30$$ ? $background$$3_blcr_cmd$$2$$ = 0 : $trcr$$ = 0 : "end" == $position$$12$$ && ($isR2L_pos$$30$$ ? $trcr$$ = 0 : $background$$3_blcr_cmd$$2$$ = 0);
  var $isR2L_pos$$30$$ = -D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $size$$17$$ = D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $background$$3_blcr_cmd$$2$$ = window.DvtPathUtils.$roundedRectangle$($isR2L_pos$$30$$, $isR2L_pos$$30$$, $size$$17$$, $size$$17$$, $background$$3_blcr_cmd$$2$$, $trcr$$, $trcr$$, $background$$3_blcr_cmd$$2$$), $background$$3_blcr_cmd$$2$$ = new D.$DvtPath$$($context$$136$$, $background$$3_blcr_cmd$$2$$);
  1 < (0,D.$DvtAgent$getDevicePixelRatio$$)() ? ($background$$3_blcr_cmd$$2$$.$setSolidStroke$("#D8DEE3", 1, 1), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($background$$3_blcr_cmd$$2$$)) : $background$$3_blcr_cmd$$2$$.$setSolidStroke$("#B8BDC1", 1, 1);
  return $background$$3_blcr_cmd$$2$$
};
D.$DvtChartRenderer$$.$_createDragButton$ = function $$DvtChartRenderer$$$$_createDragButton$$($chart$$202_context$$137$$, $container$$55_isR2L$$1$$, $overDownState_upSrc$$, $button$$27_downSrc$$, $callback$$69_enabled$$inline_3487_hitPadding$$, $callbackObj$$42$$, $hitArea$$1_position$$13$$) {
  $chart$$202_context$$137$$ = $chart$$202_context$$137$$.$_context$;
  var $upState$$7$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$202_context$$137$$, $hitArea$$1_position$$13$$);
  $upState$$7$$.$setSolidFill$("#FFFFFF", D.$DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $upState$$7$$.$addChild$(new D.$DvtImage$$($chart$$202_context$$137$$, $overDownState_upSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  var $overState$$7$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$202_context$$137$$, $hitArea$$1_position$$13$$);
  $overState$$7$$.$setSolidFill$("#E2E3E4", D.$DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $overState$$7$$.$addChild$(new D.$DvtImage$$($chart$$202_context$$137$$, $overDownState_upSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  var $downState$$7$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$202_context$$137$$, $hitArea$$1_position$$13$$);
  $downState$$7$$.$setFill$(new D.$DvtLinearGradientFill$$(90, ["#0527CE", "#0586F0"], [D.$DvtChartRenderer$$.$_BUTTON_OPACITY$, D.$DvtChartRenderer$$.$_BUTTON_OPACITY$]));
  $downState$$7$$.$addChild$(new D.$DvtImage$$($chart$$202_context$$137$$, $button$$27_downSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  $overDownState_upSrc$$ = D.$DvtChartRenderer$$.$_createDragButtonBackground$($chart$$202_context$$137$$, $hitArea$$1_position$$13$$);
  $overDownState_upSrc$$.$setSolidFill$("#0586F0", D.$DvtChartRenderer$$.$_BUTTON_OPACITY$);
  $overDownState_upSrc$$.$addChild$(new D.$DvtImage$$($chart$$202_context$$137$$, $button$$27_downSrc$$, 0, 0, D.$DvtChartRenderer$$.$_BUTTON_SIZE$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$));
  $button$$27_downSrc$$ = new D.$DvtButton$$($chart$$202_context$$137$$, $upState$$7$$, $overState$$7$$, $downState$$7$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $callback$$69_enabled$$inline_3487_hitPadding$$, $callbackObj$$42$$);
  if(!$button$$27_downSrc$$.$overDownState$ || $button$$27_downSrc$$.$overDownState$ == $overDownState_upSrc$$) {
    $callback$$69_enabled$$inline_3487_hitPadding$$ = D.$JSCompiler_alias_FALSE$$, $button$$27_downSrc$$.$overDownState$ && ($callback$$69_enabled$$inline_3487_hitPadding$$ = (0,D.$JSCompiler_StaticMethods__isButtonEnabled$$)($button$$27_downSrc$$.$overDownState$), $button$$27_downSrc$$.removeChild($button$$27_downSrc$$.$overDownState$)), $overDownState_upSrc$$ && $button$$27_downSrc$$.$addChild$($overDownState_upSrc$$), $button$$27_downSrc$$.$overDownState$ = $overDownState_upSrc$$, (0,D.$JSCompiler_StaticMethods__enableButton$$)($button$$27_downSrc$$.$overDownState$, 
    $callback$$69_enabled$$inline_3487_hitPadding$$)
  }
  $button$$27_downSrc$$.$_bToggleEnabled$ = D.$JSCompiler_alias_TRUE$$;
  $container$$55_isR2L$$1$$.$addChild$($button$$27_downSrc$$);
  $button$$27_downSrc$$.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, function($chart$$202_context$$137$$) {
    $chart$$202_context$$137$$.stopPropagation()
  });
  (0,D.$DvtAgent$isTouchDevice$$)() && ($container$$55_isR2L$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$202_context$$137$$), $callback$$69_enabled$$inline_3487_hitPadding$$ = 2 * D.$DvtChartRenderer$$.$_BUTTON_PADDING$, $hitArea$$1_position$$13$$ = "solo" == $hitArea$$1_position$$13$$ ? new D.$DvtRect$$($chart$$202_context$$137$$, -$callback$$69_enabled$$inline_3487_hitPadding$$, -$callback$$69_enabled$$inline_3487_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$69_enabled$$inline_3487_hitPadding$$, 
  D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$69_enabled$$inline_3487_hitPadding$$) : "start" == $hitArea$$1_position$$13$$ && !$container$$55_isR2L$$1$$ || "end" == $hitArea$$1_position$$13$$ && $container$$55_isR2L$$1$$ ? new D.$DvtRect$$($chart$$202_context$$137$$, -$callback$$69_enabled$$inline_3487_hitPadding$$, -$callback$$69_enabled$$inline_3487_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 1.5 * $callback$$69_enabled$$inline_3487_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 
  2 * $callback$$69_enabled$$inline_3487_hitPadding$$) : new D.$DvtRect$$($chart$$202_context$$137$$, -0.5 * $callback$$69_enabled$$inline_3487_hitPadding$$, -$callback$$69_enabled$$inline_3487_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 1.5 * $callback$$69_enabled$$inline_3487_hitPadding$$, D.$DvtChartRenderer$$.$_BUTTON_SIZE$ + 2 * $callback$$69_enabled$$inline_3487_hitPadding$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($hitArea$$1_position$$13$$), $button$$27_downSrc$$.$addChild$($hitArea$$1_position$$13$$));
  return $button$$27_downSrc$$
};
D.$DvtChartRenderer$$.$_adjustAvailSpace$ = function $$DvtChartRenderer$$$$_adjustAvailSpace$$($availSpace$$32$$) {
  $availSpace$$32$$.x = window.Math.round($availSpace$$32$$.x);
  $availSpace$$32$$.y = window.Math.round($availSpace$$32$$.y);
  $availSpace$$32$$.$w$ = window.Math.round($availSpace$$32$$.$w$);
  $availSpace$$32$$.$h$ = window.Math.round($availSpace$$32$$.$h$)
};
D.$DvtChartAxisRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartAxisRenderer$$, D.$DvtObj$$, "DvtChartAxisRenderer");
D.$DvtChartAxisRenderer$$.$render$ = function $$DvtChartAxisRenderer$$$$render$$($chart$$221$$, $container$$72_xAxisInfo$$, $availSpace$$50$$) {
  if(D.$DvtChartTypeUtils$$.$hasAxes$($chart$$221$$)) {
    var $options$$126$$ = $chart$$221$$.$getOptions$(), $isHorizGraph_leftOverflow$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$221$$), $isVertGraph_yAxisInfo$$ = D.$DvtChartTypeUtils$$.$isVertical$($chart$$221$$), $isPolarGraph_rightOverflow$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$221$$), $isR2L$$2$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$221$$.$_context$), $newWidth$$1_numGroups$$1$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$221$$), $totalAvailSpace$$ = $availSpace$$50$$.clone(), 
    $axisGap$$1_y2AxisInfo$$ = $options$$126$$.layout.verticalAxisGap;
    if(D.$DvtChartTypeUtils$$.$isStandaloneXAxis$($chart$$221$$)) {
      $isHorizGraph_leftOverflow$$ && ($axisGap$$1_y2AxisInfo$$ *= D.$DvtChartAxisRenderer$$.$_getGapScalingFactor$($chart$$221$$, "x"), $availSpace$$50$$.y += $axisGap$$1_y2AxisInfo$$, $availSpace$$50$$.$h$ -= 2 * $axisGap$$1_y2AxisInfo$$)
    }else {
      if(D.$DvtChartTypeUtils$$.$isStandaloneYAxis$($chart$$221$$) || D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$($chart$$221$$)) {
        $isVertGraph_yAxisInfo$$ && ($axisGap$$1_y2AxisInfo$$ *= D.$DvtChartAxisRenderer$$.$_getGapScalingFactor$($chart$$221$$, D.$DvtChartTypeUtils$$.$isStandaloneYAxis$($chart$$221$$) ? "y" : "y2"), $availSpace$$50$$.y += $axisGap$$1_y2AxisInfo$$, $availSpace$$50$$.$h$ -= 2 * $axisGap$$1_y2AxisInfo$$)
      }else {
        if($isHorizGraph_leftOverflow$$ && D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$221$$, "x") && !D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$221$$, "y2") || $isVertGraph_yAxisInfo$$ && (D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$221$$, "y") || D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$221$$, "y2"))) {
          $axisGap$$1_y2AxisInfo$$ *= D.$DvtChartAxisRenderer$$.$_getGapScalingFactor$($chart$$221$$, $isHorizGraph_leftOverflow$$ ? "x" : "y"), $availSpace$$50$$.y += $axisGap$$1_y2AxisInfo$$, $availSpace$$50$$.$h$ -= $axisGap$$1_y2AxisInfo$$
        }
      }
    }
    "bubble" == $chart$$221$$.$getType$() && D.$DvtChartMarkerUtils$$.$calcBubbleSizes$($chart$$221$$, $availSpace$$50$$.$w$, $availSpace$$50$$.$h$);
    $isVertGraph_yAxisInfo$$ = D.$DvtChartAxisRenderer$$.$_createYAxis$($chart$$221$$, $container$$72_xAxisInfo$$, $availSpace$$50$$);
    $axisGap$$1_y2AxisInfo$$ = D.$DvtChartAxisRenderer$$.$_createY2Axis$($chart$$221$$, $container$$72_xAxisInfo$$, $availSpace$$50$$);
    D.$DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$50$$, $isVertGraph_yAxisInfo$$, D.$DvtChartAxisRenderer$$.$_getTickLabelGap$($chart$$221$$, "y"));
    D.$DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$50$$, $axisGap$$1_y2AxisInfo$$, D.$DvtChartAxisRenderer$$.$_getTickLabelGap$($chart$$221$$, "y2"));
    "bubble" == $chart$$221$$.$getType$() && D.$DvtChartMarkerUtils$$.$calcBubbleSizes$($chart$$221$$, $availSpace$$50$$.$w$, $availSpace$$50$$.$h$);
    "pixel" == D.$DvtChartStyleUtils$$.$getBarSpacing$($chart$$221$$) && D.$DvtChartTypeUtils$$.$isBar$($chart$$221$$) && $availSpace$$50$$.$w$ > $newWidth$$1_numGroups$$1$$ && ($newWidth$$1_numGroups$$1$$ *= window.Math.floor($availSpace$$50$$.$w$ / $newWidth$$1_numGroups$$1$$), $availSpace$$50$$.x += ($availSpace$$50$$.$w$ - $newWidth$$1_numGroups$$1$$) / 2, $availSpace$$50$$.$w$ = $newWidth$$1_numGroups$$1$$);
    $container$$72_xAxisInfo$$ = D.$DvtChartAxisRenderer$$.$_createXAxis$($chart$$221$$, $container$$72_xAxisInfo$$, $availSpace$$50$$, $totalAvailSpace$$);
    $isPolarGraph_rightOverflow$$ ? ($container$$72_xAxisInfo$$.axis.$setTranslateX$($availSpace$$50$$.x), $container$$72_xAxisInfo$$.axis.$setTranslateY$($availSpace$$50$$.y), $container$$72_xAxisInfo$$.axis.$render$($container$$72_xAxisInfo$$.options, $availSpace$$50$$.$w$, $availSpace$$50$$.$h$)) : ($container$$72_xAxisInfo$$.axis.$render$($container$$72_xAxisInfo$$.options, $container$$72_xAxisInfo$$.$dim$.$w$, $container$$72_xAxisInfo$$.$dim$.$h$), D.$DvtChartAxisRenderer$$.$_positionAxis$($availSpace$$50$$, 
    $container$$72_xAxisInfo$$, D.$DvtChartAxisRenderer$$.$_getTickLabelGap$($chart$$221$$, "x")));
    $isPolarGraph_rightOverflow$$ && $isVertGraph_yAxisInfo$$ ? ($isVertGraph_yAxisInfo$$.axis.$setTranslateX$($availSpace$$50$$.x), $isVertGraph_yAxisInfo$$.axis.$setTranslateY$($availSpace$$50$$.y), $isVertGraph_yAxisInfo$$.axis.$render$($isVertGraph_yAxisInfo$$.options, $availSpace$$50$$.$w$, $availSpace$$50$$.$h$)) : $isHorizGraph_leftOverflow$$ ? ($isVertGraph_yAxisInfo$$ && ($isVertGraph_yAxisInfo$$.axis.$setTranslateX$($availSpace$$50$$.x), $isVertGraph_yAxisInfo$$.axis.$render$($isVertGraph_yAxisInfo$$.options, 
    $availSpace$$50$$.$w$, $isVertGraph_yAxisInfo$$.$dim$.$h$)), $axisGap$$1_y2AxisInfo$$ && ($isVertGraph_yAxisInfo$$ && this.$_alignYAxes$($isVertGraph_yAxisInfo$$.axis, $axisGap$$1_y2AxisInfo$$.axis, $options$$126$$, $axisGap$$1_y2AxisInfo$$.options), $axisGap$$1_y2AxisInfo$$.axis.$setTranslateX$($availSpace$$50$$.x), $axisGap$$1_y2AxisInfo$$.axis.$render$($axisGap$$1_y2AxisInfo$$.options, $availSpace$$50$$.$w$, $axisGap$$1_y2AxisInfo$$.$dim$.$h$)), $isHorizGraph_leftOverflow$$ = (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($isVertGraph_yAxisInfo$$.axis), 
    $isPolarGraph_rightOverflow$$ = (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($isVertGraph_yAxisInfo$$.axis), $availSpace$$50$$.x += $isHorizGraph_leftOverflow$$, $availSpace$$50$$.$w$ -= $isHorizGraph_leftOverflow$$ + $isPolarGraph_rightOverflow$$) : ($isHorizGraph_leftOverflow$$ = (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($container$$72_xAxisInfo$$.axis), $isPolarGraph_rightOverflow$$ = (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($container$$72_xAxisInfo$$.axis), $availSpace$$50$$.x += 
    $isHorizGraph_leftOverflow$$, $availSpace$$50$$.$w$ -= $isHorizGraph_leftOverflow$$ + $isPolarGraph_rightOverflow$$, $isVertGraph_yAxisInfo$$ && ($isVertGraph_yAxisInfo$$.axis.$setTranslateX$($isVertGraph_yAxisInfo$$.axis.$getTranslateX$() + ($isR2L$$2$$ ? -$isPolarGraph_rightOverflow$$ : $isHorizGraph_leftOverflow$$)), $isVertGraph_yAxisInfo$$.axis.$render$($isVertGraph_yAxisInfo$$.options, $isVertGraph_yAxisInfo$$.$dim$.$w$, $availSpace$$50$$.$h$)), $axisGap$$1_y2AxisInfo$$ && ($isVertGraph_yAxisInfo$$ && 
    this.$_alignYAxes$($isVertGraph_yAxisInfo$$.axis, $axisGap$$1_y2AxisInfo$$.axis, $options$$126$$, $axisGap$$1_y2AxisInfo$$.options), $axisGap$$1_y2AxisInfo$$.axis.$setTranslateX$($axisGap$$1_y2AxisInfo$$.axis.$getTranslateX$() + ($isR2L$$2$$ ? $isHorizGraph_leftOverflow$$ : -$isPolarGraph_rightOverflow$$)), $axisGap$$1_y2AxisInfo$$.axis.$render$($axisGap$$1_y2AxisInfo$$.options, $axisGap$$1_y2AxisInfo$$.$dim$.$w$, $availSpace$$50$$.$h$)));
    $chart$$221$$.$xAxis$ && ($chart$$221$$.$xAxis$.$destroy$(), $chart$$221$$.removeChild($chart$$221$$.$xAxis$));
    $chart$$221$$.$yAxis$ && ($chart$$221$$.$yAxis$.$destroy$(), $chart$$221$$.removeChild($chart$$221$$.$yAxis$));
    $chart$$221$$.$y2Axis$ && ($chart$$221$$.$y2Axis$.$destroy$(), $chart$$221$$.removeChild($chart$$221$$.$y2Axis$));
    $chart$$221$$.$xAxis$ = $container$$72_xAxisInfo$$.axis;
    $chart$$221$$.$yAxis$ = $isVertGraph_yAxisInfo$$ ? $isVertGraph_yAxisInfo$$.axis : D.$JSCompiler_alias_NULL$$;
    $chart$$221$$.$y2Axis$ = $axisGap$$1_y2AxisInfo$$ ? $axisGap$$1_y2AxisInfo$$.axis : D.$JSCompiler_alias_NULL$$
  }
};
D.$DvtChartAxisRenderer$$.$_createXAxis$ = function $$DvtChartAxisRenderer$$$$_createXAxis$$($chart$$222$$, $container$$73_maxWidth$$13$$, $availSpace$$51_isR2L$$3_maxHeight$$9$$, $axis$$17_totalAvailSpace$$1$$) {
  var $actualSize$$1_options$$127$$ = $chart$$222$$.$getOptions$(), $position$$18$$ = D.$DvtChartAxisUtils$$.$getXAxisPosition$($chart$$222$$), $isStandalone$$ = D.$DvtChartTypeUtils$$.$isStandaloneXAxis$($chart$$222$$), $axisOptions$$2$$ = D.$DvtJSONUtils$$.clone($actualSize$$1_options$$127$$.xAxis);
  $axisOptions$$2$$.skin = $actualSize$$1_options$$127$$.skin;
  $axisOptions$$2$$.layout.gapRatio = $chart$$222$$.$getGapRatio$();
  $axisOptions$$2$$.position = $position$$18$$;
  $axisOptions$$2$$.isStandalone = $isStandalone$$;
  $axisOptions$$2$$.baselineScaling = $actualSize$$1_options$$127$$.xAxis.baselineScaling;
  $axisOptions$$2$$.title = $actualSize$$1_options$$127$$.xAxis ? $actualSize$$1_options$$127$$.xAxis.title : D.$JSCompiler_alias_NULL$$;
  $axisOptions$$2$$.groups = $actualSize$$1_options$$127$$.groups;
  $axisOptions$$2$$.timeAxisType = $actualSize$$1_options$$127$$.timeAxisType && D.$DvtChartTypeUtils$$.$isTimeAxisSupported$($chart$$222$$) ? $actualSize$$1_options$$127$$.timeAxisType : "disabled";
  $axisOptions$$2$$.zoomAndScroll = $actualSize$$1_options$$127$$.zoomAndScroll;
  $axisOptions$$2$$._isOverview = $actualSize$$1_options$$127$$._isOverview;
  D.$DvtChartTypeUtils$$.$isPolar$($chart$$222$$) && ($axisOptions$$2$$.polarGridShape = D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$222$$) ? "polygon" : "circle", $axisOptions$$2$$._radius = $chart$$222$$.$getRadius$(), $axisOptions$$2$$._numGroups = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$222$$), $axisOptions$$2$$.axisLine = D.$DvtJSONUtils$$.clone($actualSize$$1_options$$127$$.yAxis.axisLine));
  if(!D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$222$$)) {
    var $axisOffset_dataValues_isHoriz$$3$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($chart$$222$$, "x");
    $axisOptions$$2$$.dataMin = $axisOptions$$2$$.dataMin != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$2$$.dataMin : $axisOffset_dataValues_isHoriz$$3$$.min;
    $axisOptions$$2$$.dataMax = $axisOptions$$2$$.dataMax != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$2$$.dataMax : $axisOffset_dataValues_isHoriz$$3$$.max
  }
  var $isGridShifted_tickLabelGap$$ = D.$DvtChartAxisUtils$$.$isGridShifted$($chart$$222$$);
  "tangential" == $position$$18$$ && D.$DvtChartAxisUtils$$.$hasGroupAxis$($chart$$222$$) ? $isGridShifted_tickLabelGap$$ ? ($axisOptions$$2$$.startGroupOffset = 0.5, $axisOptions$$2$$.endGroupOffset = 0.5) : $axisOptions$$2$$.endGroupOffset = 1 : ($axisOffset_dataValues_isHoriz$$3$$ = D.$DvtChartAxisUtils$$.$getAxisOffset$($chart$$222$$), $axisOptions$$2$$.startGroupOffset = $axisOffset_dataValues_isHoriz$$3$$, $axisOptions$$2$$.endGroupOffset = $axisOffset_dataValues_isHoriz$$3$$, D.$DvtChartTypeUtils$$.$hasUncenteredSeries$($chart$$222$$) && 
  ($axisOptions$$2$$.endGroupOffset = 1));
  $axisOffset_dataValues_isHoriz$$3$$ = "top" == $position$$18$$ || "bottom" == $position$$18$$;
  $axisOptions$$2$$.leftBuffer = $axisOffset_dataValues_isHoriz$$3$$ ? $availSpace$$51_isR2L$$3_maxHeight$$9$$.x - $axis$$17_totalAvailSpace$$1$$.x : 0;
  $axisOptions$$2$$.rightBuffer = $axisOffset_dataValues_isHoriz$$3$$ ? $axis$$17_totalAvailSpace$$1$$.$w$ + $axis$$17_totalAvailSpace$$1$$.x - ($availSpace$$51_isR2L$$3_maxHeight$$9$$.$w$ + $availSpace$$51_isR2L$$3_maxHeight$$9$$.x) : 0;
  $axisOptions$$2$$._renderGridAtLabels = !$isGridShifted_tickLabelGap$$ || "disabled" != $axisOptions$$2$$.timeAxisType;
  $axis$$17_totalAvailSpace$$1$$ = new D.$DvtChartAxis$$($chart$$222$$.$_context$, $chart$$222$$.$processEvent$, $chart$$222$$);
  $container$$73_maxWidth$$13$$.$addChild$($axis$$17_totalAvailSpace$$1$$);
  $isGridShifted_tickLabelGap$$ = D.$DvtChartAxisRenderer$$.$_getTickLabelGap$($chart$$222$$, "x");
  $container$$73_maxWidth$$13$$ = $axisOffset_dataValues_isHoriz$$3$$ ? $availSpace$$51_isR2L$$3_maxHeight$$9$$.$w$ : $isStandalone$$ ? $availSpace$$51_isR2L$$3_maxHeight$$9$$.$w$ - $isGridShifted_tickLabelGap$$ : $actualSize$$1_options$$127$$.layout.axisMaxSize * $availSpace$$51_isR2L$$3_maxHeight$$9$$.$w$;
  $availSpace$$51_isR2L$$3_maxHeight$$9$$ = $axisOffset_dataValues_isHoriz$$3$$ ? $isStandalone$$ ? $availSpace$$51_isR2L$$3_maxHeight$$9$$.$h$ - $isGridShifted_tickLabelGap$$ : $actualSize$$1_options$$127$$.layout.axisMaxSize * $availSpace$$51_isR2L$$3_maxHeight$$9$$.$h$ : $availSpace$$51_isR2L$$3_maxHeight$$9$$.$h$;
  "tangential" == $position$$18$$ ? $actualSize$$1_options$$127$$ = new D.$DvtDimension$$(0, 0) : $actualSize$$1_options$$127$$._duringAnimation ? $axisOffset_dataValues_isHoriz$$3$$ ? ($actualSize$$1_options$$127$$ = new D.$DvtDimension$$($container$$73_maxWidth$$13$$, $chart$$222$$.$xAxis$.getHeight()), $availSpace$$51_isR2L$$3_maxHeight$$9$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$222$$.$_context$), $axisOptions$$2$$._startOverflow = $availSpace$$51_isR2L$$3_maxHeight$$9$$ ? (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($chart$$222$$.$xAxis$) : 
  (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($chart$$222$$.$xAxis$), $axisOptions$$2$$._endOverflow = $availSpace$$51_isR2L$$3_maxHeight$$9$$ ? (0,D.$JSCompiler_StaticMethods_getLeftOverflow$$)($chart$$222$$.$xAxis$) : (0,D.$JSCompiler_StaticMethods_getRightOverflow$$)($chart$$222$$.$xAxis$)) : $actualSize$$1_options$$127$$ = new D.$DvtDimension$$($chart$$222$$.$xAxis$.getWidth(), $availSpace$$51_isR2L$$3_maxHeight$$9$$) : $actualSize$$1_options$$127$$ = $axis$$17_totalAvailSpace$$1$$.$getPreferredSize$($axisOptions$$2$$, 
  $container$$73_maxWidth$$13$$, $availSpace$$51_isR2L$$3_maxHeight$$9$$);
  return{axis:$axis$$17_totalAvailSpace$$1$$, options:$axisOptions$$2$$, position:$position$$18$$, $dim$:$actualSize$$1_options$$127$$}
};
D.$DvtChartAxisRenderer$$.$_createYAxis$ = function $$DvtChartAxisRenderer$$$$_createYAxis$$($actualSize$$2_chart$$223$$, $container$$74_maxWidth$$14$$, $availSpace$$52_maxHeight$$10$$) {
  var $options$$128$$ = $actualSize$$2_chart$$223$$.$getOptions$();
  if(D.$DvtChartTypeUtils$$.$hasY2DataOnly$($actualSize$$2_chart$$223$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $position$$19$$ = D.$DvtChartAxisUtils$$.$getYAxisPosition$($actualSize$$2_chart$$223$$), $isHoriz$$4$$ = "top" == $position$$19$$ || "bottom" == $position$$19$$, $isStandalone$$1$$ = D.$DvtChartTypeUtils$$.$isStandaloneYAxis$($actualSize$$2_chart$$223$$), $axisOptions$$3$$ = D.$DvtJSONUtils$$.clone($options$$128$$.yAxis);
  $axisOptions$$3$$.skin = $options$$128$$.skin;
  $axisOptions$$3$$.layout.gapRatio = $actualSize$$2_chart$$223$$.$getGapRatio$();
  $axisOptions$$3$$.position = $position$$19$$;
  $axisOptions$$3$$.isStandalone = $isStandalone$$1$$;
  $axisOptions$$3$$.baselineScaling = $options$$128$$.yAxis.baselineScaling;
  var $axis$$18_dataValues$$1_isR2L$$4$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($actualSize$$2_chart$$223$$, "y", D.$DvtChartTypeUtils$$.$isBLAC$($actualSize$$2_chart$$223$$));
  $axisOptions$$3$$.dataMin = $axisOptions$$3$$.dataMin != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$3$$.dataMin : $axis$$18_dataValues$$1_isR2L$$4$$.min;
  $axisOptions$$3$$.dataMax = $axisOptions$$3$$.dataMax != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$3$$.dataMax : $axis$$18_dataValues$$1_isR2L$$4$$.max;
  $axisOptions$$3$$.title = $options$$128$$.yAxis ? $options$$128$$.yAxis.title : D.$JSCompiler_alias_NULL$$;
  $axisOptions$$3$$.timeAxisType = "disabled";
  $axisOptions$$3$$.zoomAndScroll = $options$$128$$.zoomAndScroll;
  D.$DvtChartTypeUtils$$.$isPolar$($actualSize$$2_chart$$223$$) && ($axisOptions$$3$$.polarGridShape = D.$DvtChartAxisUtils$$.$isGridPolygonal$($actualSize$$2_chart$$223$$) ? "polygon" : "circle", $axisOptions$$3$$._radius = $actualSize$$2_chart$$223$$.$getRadius$(), $axisOptions$$3$$._numGroups = D.$DvtChartDataUtils$$.$getGroupCount$($actualSize$$2_chart$$223$$), $axisOptions$$3$$.axisLine = D.$DvtJSONUtils$$.clone($options$$128$$.xAxis.axisLine));
  $axisOptions$$3$$._useBaselineColor = D.$DvtChartTypeUtils$$.$isBLAC$($actualSize$$2_chart$$223$$);
  D.$DvtChartEventUtils$$.$isLiveScroll$($actualSize$$2_chart$$223$$) && (D.$DvtChartTypeUtils$$.$isBLAC$($actualSize$$2_chart$$223$$) && !D.$DvtChartTypeUtils$$.$isPolar$($actualSize$$2_chart$$223$$)) && ($axisOptions$$3$$._continuousExtent = "on");
  $isStandalone$$1$$ ? ($axisOptions$$3$$.leftBuffer = 0, $axisOptions$$3$$.rightBuffer = 0) : ($axis$$18_dataValues$$1_isR2L$$4$$ = (0,D.$DvtAgent$isRightToLeft$$)($actualSize$$2_chart$$223$$.$_context$), $axisOptions$$3$$.leftBuffer = $axis$$18_dataValues$$1_isR2L$$4$$ ? 0 : 10, $axisOptions$$3$$.rightBuffer = $axis$$18_dataValues$$1_isR2L$$4$$ ? 10 : 0);
  $axisOptions$$3$$._alwaysAlignRight = D.$JSCompiler_alias_TRUE$$;
  $axis$$18_dataValues$$1_isR2L$$4$$ = new D.$DvtChartAxis$$($actualSize$$2_chart$$223$$.$_context$, $actualSize$$2_chart$$223$$.$processEvent$, $actualSize$$2_chart$$223$$);
  $container$$74_maxWidth$$14$$.$addChild$($axis$$18_dataValues$$1_isR2L$$4$$);
  var $tickLabelGap$$1$$ = D.$DvtChartAxisRenderer$$.$_getTickLabelGap$($actualSize$$2_chart$$223$$, "x");
  $container$$74_maxWidth$$14$$ = $isHoriz$$4$$ ? $availSpace$$52_maxHeight$$10$$.$w$ : $isStandalone$$1$$ ? $availSpace$$52_maxHeight$$10$$.$w$ - $tickLabelGap$$1$$ : $options$$128$$.layout.axisMaxSize * $availSpace$$52_maxHeight$$10$$.$w$;
  $availSpace$$52_maxHeight$$10$$ = $isHoriz$$4$$ ? $isStandalone$$1$$ ? $availSpace$$52_maxHeight$$10$$.$h$ - $tickLabelGap$$1$$ : $options$$128$$.layout.axisMaxSize * $availSpace$$52_maxHeight$$10$$.$h$ : $availSpace$$52_maxHeight$$10$$.$h$;
  $actualSize$$2_chart$$223$$ = "radial" == $position$$19$$ ? new D.$DvtDimension$$(0, 0) : $options$$128$$._duringAnimation ? $isHoriz$$4$$ ? new D.$DvtDimension$$($container$$74_maxWidth$$14$$, $actualSize$$2_chart$$223$$.$yAxis$.getHeight()) : new D.$DvtDimension$$($actualSize$$2_chart$$223$$.$yAxis$.getWidth(), $availSpace$$52_maxHeight$$10$$) : $axis$$18_dataValues$$1_isR2L$$4$$.$getPreferredSize$($axisOptions$$3$$, $container$$74_maxWidth$$14$$, $availSpace$$52_maxHeight$$10$$);
  $options$$128$$.yAxis.min = $axisOptions$$3$$.min;
  $options$$128$$.yAxis.max = $axisOptions$$3$$.max;
  return{axis:$axis$$18_dataValues$$1_isR2L$$4$$, options:$axisOptions$$3$$, position:$position$$19$$, $dim$:$actualSize$$2_chart$$223$$}
};
D.$DvtChartAxisRenderer$$.$_createY2Axis$ = function $$DvtChartAxisRenderer$$$$_createY2Axis$$($actualSize$$3_chart$$224$$, $container$$75_maxWidth$$15$$, $availSpace$$53_maxHeight$$11$$) {
  var $options$$129$$ = $actualSize$$3_chart$$224$$.$getOptions$();
  if(D.$DvtChartTypeUtils$$.$hasY2Data$($actualSize$$3_chart$$224$$)) {
    var $position$$20$$ = D.$DvtChartAxisUtils$$.$getY2AxisPosition$($actualSize$$3_chart$$224$$), $isHoriz$$5$$ = "top" == $position$$20$$ || "bottom" == $position$$20$$, $isStandalone$$2$$ = D.$DvtChartTypeUtils$$.$isStandaloneY2Axis$($actualSize$$3_chart$$224$$), $axisOptions$$4$$ = D.$DvtJSONUtils$$.clone($options$$129$$.y2Axis);
    $axisOptions$$4$$.skin = $options$$129$$.skin;
    $axisOptions$$4$$.layout.gapRatio = $actualSize$$3_chart$$224$$.$getGapRatio$();
    $axisOptions$$4$$.position = $position$$20$$;
    $axisOptions$$4$$.isStandalone = $isStandalone$$2$$;
    $axisOptions$$4$$.baselineScaling = $options$$129$$.y2Axis.baselineScaling;
    var $axis$$19_dataValues$$2_isR2L$$5$$ = D.$DvtChartDataUtils$$.$getMinMaxValue$($actualSize$$3_chart$$224$$, "y2", D.$DvtChartTypeUtils$$.$isBLAC$($actualSize$$3_chart$$224$$));
    $axisOptions$$4$$.dataMin = $axisOptions$$4$$.dataMin != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$4$$.dataMin : $axis$$19_dataValues$$2_isR2L$$5$$.min;
    $axisOptions$$4$$.dataMax = $axisOptions$$4$$.dataMax != D.$JSCompiler_alias_NULL$$ ? $axisOptions$$4$$.dataMax : $axis$$19_dataValues$$2_isR2L$$5$$.max;
    $axisOptions$$4$$.title = $options$$129$$.y2Axis ? $options$$129$$.y2Axis.title : D.$JSCompiler_alias_NULL$$;
    $axisOptions$$4$$.timeAxisType = "disabled";
    $axisOptions$$4$$.zoomAndScroll = $options$$129$$.zoomAndScroll;
    D.$DvtChartEventUtils$$.$isLiveScroll$($actualSize$$3_chart$$224$$) && (D.$DvtChartTypeUtils$$.$isBLAC$($actualSize$$3_chart$$224$$) && !D.$DvtChartTypeUtils$$.$isPolar$($actualSize$$3_chart$$224$$)) && ($axisOptions$$4$$._continuousExtent = "on");
    $isStandalone$$2$$ ? ($axisOptions$$4$$.leftBuffer = 0, $axisOptions$$4$$.rightBuffer = 0) : ($axis$$19_dataValues$$2_isR2L$$5$$ = (0,D.$DvtAgent$isRightToLeft$$)($actualSize$$3_chart$$224$$.$_context$), $axisOptions$$4$$.leftBuffer = $axis$$19_dataValues$$2_isR2L$$5$$ ? 0 : 10, $axisOptions$$4$$.rightBuffer = $axis$$19_dataValues$$2_isR2L$$5$$ ? 10 : 0);
    $axisOptions$$4$$._alwaysAlignRight = D.$JSCompiler_alias_TRUE$$;
    $axis$$19_dataValues$$2_isR2L$$5$$ = new D.$DvtChartAxis$$($actualSize$$3_chart$$224$$.$_context$, $actualSize$$3_chart$$224$$.$processEvent$, $actualSize$$3_chart$$224$$);
    $container$$75_maxWidth$$15$$.$addChild$($axis$$19_dataValues$$2_isR2L$$5$$);
    var $tickLabelGap$$2$$ = D.$DvtChartAxisRenderer$$.$_getTickLabelGap$($actualSize$$3_chart$$224$$, "x");
    $container$$75_maxWidth$$15$$ = $isHoriz$$5$$ ? $availSpace$$53_maxHeight$$11$$.$w$ : $isStandalone$$2$$ ? $availSpace$$53_maxHeight$$11$$.$w$ - $tickLabelGap$$2$$ : $options$$129$$.layout.axisMaxSize * $availSpace$$53_maxHeight$$11$$.$w$;
    $availSpace$$53_maxHeight$$11$$ = $isHoriz$$5$$ ? $isStandalone$$2$$ ? $availSpace$$53_maxHeight$$11$$.$h$ - $tickLabelGap$$2$$ : $options$$129$$.layout.axisMaxSize * $availSpace$$53_maxHeight$$11$$.$h$ : $availSpace$$53_maxHeight$$11$$.$h$;
    $actualSize$$3_chart$$224$$ = $options$$129$$._duringAnimation ? $isHoriz$$5$$ ? new D.$DvtDimension$$($container$$75_maxWidth$$15$$, $actualSize$$3_chart$$224$$.$y2Axis$.getHeight()) : new D.$DvtDimension$$($actualSize$$3_chart$$224$$.$y2Axis$.getWidth(), $availSpace$$53_maxHeight$$11$$) : $axis$$19_dataValues$$2_isR2L$$5$$.$getPreferredSize$($axisOptions$$4$$, $container$$75_maxWidth$$15$$, $availSpace$$53_maxHeight$$11$$);
    $options$$129$$.y2Axis.min = $axisOptions$$4$$.min;
    $options$$129$$.y2Axis.max = $axisOptions$$4$$.max;
    return{axis:$axis$$19_dataValues$$2_isR2L$$5$$, options:$axisOptions$$4$$, position:$position$$20$$, $dim$:$actualSize$$3_chart$$224$$}
  }
};
D.$DvtChartAxisRenderer$$.$_alignYAxes$ = function $$DvtChartAxisRenderer$$$$_alignYAxes$$($minorTickCount_yAxis$$3$$, $y2Axis$$, $options$$130$$, $y2AxisOptions$$) {
  var $majorTickCount$$ = $minorTickCount_yAxis$$3$$.$getMajorTickCount$();
  $minorTickCount_yAxis$$3$$ = $minorTickCount_yAxis$$3$$.$getMinorTickCount$();
  "on" == $options$$130$$.y2Axis.alignTickMarks && $options$$130$$.y2Axis.step == D.$JSCompiler_alias_NULL$$ && ($y2Axis$$.$setMajorTickCount$($majorTickCount$$), $y2Axis$$.$setMinorTickCount$($minorTickCount_yAxis$$3$$), $y2AxisOptions$$.step = $y2Axis$$.$getMajorIncrement$(), $y2AxisOptions$$.minorStep = $y2Axis$$.$getMinorIncrement$())
};
D.$DvtChartAxisRenderer$$.$_positionAxis$ = function $$DvtChartAxisRenderer$$$$_positionAxis$$($availSpace$$54_bounds$$37$$, $axisInfo_shiftedPos$$1$$, $gap$$7$$) {
  if($axisInfo_shiftedPos$$1$$) {
    if($axisInfo_shiftedPos$$1$$.options.isStandalone) {
      var $excessHeight$$ = $availSpace$$54_bounds$$37$$.$h$ - $axisInfo_shiftedPos$$1$$.$dim$.$h$ - $gap$$7$$, $excessWidth$$1$$ = $availSpace$$54_bounds$$37$$.$w$ - $axisInfo_shiftedPos$$1$$.$dim$.$w$ - $gap$$7$$;
      "top" == $axisInfo_shiftedPos$$1$$.position ? ($availSpace$$54_bounds$$37$$.y += $excessHeight$$, $availSpace$$54_bounds$$37$$.$h$ -= $excessHeight$$) : "bottom" == $axisInfo_shiftedPos$$1$$.position ? $availSpace$$54_bounds$$37$$.$h$ -= $excessHeight$$ : "left" == $axisInfo_shiftedPos$$1$$.position ? ($availSpace$$54_bounds$$37$$.x += $excessWidth$$1$$, $availSpace$$54_bounds$$37$$.$w$ -= $excessWidth$$1$$) : "right" == $axisInfo_shiftedPos$$1$$.position && ($availSpace$$54_bounds$$37$$.$w$ -= 
      $excessWidth$$1$$)
    }
    (0,D.$DvtLayoutUtils$position$$)($availSpace$$54_bounds$$37$$, $axisInfo_shiftedPos$$1$$.position, $axisInfo_shiftedPos$$1$$.axis, $axisInfo_shiftedPos$$1$$.$dim$.$w$, $axisInfo_shiftedPos$$1$$.$dim$.$h$, $gap$$7$$);
    if($availSpace$$54_bounds$$37$$ = $axisInfo_shiftedPos$$1$$.axis.$_bounds$) {
      $axisInfo_shiftedPos$$1$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($axisInfo_shiftedPos$$1$$.axis, new D.$DvtPoint$$($availSpace$$54_bounds$$37$$.x, $availSpace$$54_bounds$$37$$.y)), $availSpace$$54_bounds$$37$$.x = $axisInfo_shiftedPos$$1$$.x, $availSpace$$54_bounds$$37$$.y = $axisInfo_shiftedPos$$1$$.y
    }
  }
};
D.$DvtChartAxisRenderer$$.$_getTickLabelGap$ = function $$DvtChartAxisRenderer$$$$_getTickLabelGap$$($chart$$225$$, $type$$109$$) {
  var $gapHeight$$1_options$$131$$ = $chart$$225$$.$getOptions$(), $isHorizGraph$$1$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$225$$), $scalingFactor$$ = D.$DvtChartAxisRenderer$$.$_getGapScalingFactor$($chart$$225$$, $type$$109$$), $gapWidth$$1$$ = $gapHeight$$1_options$$131$$.layout.tickLabelGapWidth * $scalingFactor$$, $gapHeight$$1_options$$131$$ = $gapHeight$$1_options$$131$$.layout.tickLabelGapHeight * $scalingFactor$$;
  return"x" == $type$$109$$ ? D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$225$$, "x") ? $isHorizGraph$$1$$ ? $gapWidth$$1$$ : $gapHeight$$1_options$$131$$ : 0 : "y" == $type$$109$$ ? D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$225$$, "y") ? $isHorizGraph$$1$$ ? $gapHeight$$1_options$$131$$ : $gapWidth$$1$$ : 0 : D.$DvtChartAxisUtils$$.$isAxisRendered$($chart$$225$$, "y2") ? $isHorizGraph$$1$$ ? $gapHeight$$1_options$$131$$ : $gapWidth$$1$$ : 0
};
D.$DvtChartAxisRenderer$$.$_getGapScalingFactor$ = function $$DvtChartAxisRenderer$$$$_getGapScalingFactor$$($chart$$226$$, $type$$110$$) {
  return D.$DvtChartAxisUtils$$.$getTickLabelFontSize$($chart$$226$$, $type$$110$$) / 11
};
D.$DvtChartLegendRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtChartLegendRenderer$$, D.$DvtObj$$, "DvtChartLegendRenderer");
D.$DvtChartLegendRenderer$$.$render$ = function $$DvtChartLegendRenderer$$$$render$$($chart$$180$$, $container$$43$$, $availSpace$$18_bounds$$36$$) {
  var $gap$$6_options$$110$$ = $chart$$180$$.$getOptions$(), $position$$10_shiftedPos$$ = $gap$$6_options$$110$$.legend.position, $actualSize_isHoriz$$2_isRTL$$2_scrolling$$ = $gap$$6_options$$110$$.legend.scrolling;
  if("on" == $gap$$6_options$$110$$.legend.rendered) {
    var $legendOptions$$ = D.$DvtJSONUtils$$.clone($gap$$6_options$$110$$.legend);
    delete $legendOptions$$.position;
    $legendOptions$$.skin = $gap$$6_options$$110$$.skin;
    $legendOptions$$.layout.gapRatio = $chart$$180$$.$getGapRatio$();
    $legendOptions$$.hideAndShowBehavior = D.$DvtChartEventUtils$$.$getHideAndShowBehavior$($chart$$180$$);
    $legendOptions$$.hoverBehavior = D.$DvtChartEventUtils$$.$getHoverBehavior$($chart$$180$$);
    D.$DvtChartLegendRenderer$$.$_addLegendData$($chart$$180$$, $legendOptions$$);
    if(0 != $legendOptions$$.sections.length) {
      var $legend$$2$$ = (0,D.$DvtLegend$newInstance$$)($chart$$180$$.$_context$, $chart$$180$$.$processEvent$, $chart$$180$$);
      $chart$$180$$.getId() != D.$JSCompiler_alias_NULL$$ && $legend$$2$$.setId($chart$$180$$.getId() + "legend");
      $container$$43$$.$addChild$($legend$$2$$);
      "auto" == $position$$10_shiftedPos$$ && "asNeeded" !== $actualSize_isHoriz$$2_isRTL$$2_scrolling$$ ? $position$$10_shiftedPos$$ = $availSpace$$18_bounds$$36$$.$w$ >= $availSpace$$18_bounds$$36$$.$h$ ? "end" : "bottom" : "auto" == $position$$10_shiftedPos$$ && "asNeeded" == $actualSize_isHoriz$$2_isRTL$$2_scrolling$$ && ($position$$10_shiftedPos$$ = "end");
      $actualSize_isHoriz$$2_isRTL$$2_scrolling$$ = (0,D.$DvtAgent$isRightToLeft$$)($chart$$180$$.$_context$);
      "start" == $position$$10_shiftedPos$$ ? $position$$10_shiftedPos$$ = $actualSize_isHoriz$$2_isRTL$$2_scrolling$$ ? "right" : "left" : "end" == $position$$10_shiftedPos$$ && ($position$$10_shiftedPos$$ = $actualSize_isHoriz$$2_isRTL$$2_scrolling$$ ? "left" : "right");
      $legendOptions$$.orientation = "left" == $position$$10_shiftedPos$$ || "right" == $position$$10_shiftedPos$$ ? "vertical" : "horizontal";
      $actualSize_isHoriz$$2_isRTL$$2_scrolling$$ = "top" == $position$$10_shiftedPos$$ || "bottom" == $position$$10_shiftedPos$$;
      $actualSize_isHoriz$$2_isRTL$$2_scrolling$$ = $legend$$2$$.$getPreferredSize$($legendOptions$$, $actualSize_isHoriz$$2_isRTL$$2_scrolling$$ ? $availSpace$$18_bounds$$36$$.$w$ : $gap$$6_options$$110$$.layout.legendMaxSize * $availSpace$$18_bounds$$36$$.$w$, $actualSize_isHoriz$$2_isRTL$$2_scrolling$$ ? $gap$$6_options$$110$$.layout.legendMaxSize * $availSpace$$18_bounds$$36$$.$h$ : $availSpace$$18_bounds$$36$$.$h$);
      $legend$$2$$.$render$($legendOptions$$, $actualSize_isHoriz$$2_isRTL$$2_scrolling$$.$w$, $actualSize_isHoriz$$2_isRTL$$2_scrolling$$.$h$);
      $gap$$6_options$$110$$ = (0,D.$DvtChartDefaults$getGapSize$$)($chart$$180$$, $gap$$6_options$$110$$.layout.legendGap);
      (0,D.$DvtLayoutUtils$position$$)($availSpace$$18_bounds$$36$$, $position$$10_shiftedPos$$, $legend$$2$$, $actualSize_isHoriz$$2_isRTL$$2_scrolling$$.$w$, $actualSize_isHoriz$$2_isRTL$$2_scrolling$$.$h$, $gap$$6_options$$110$$);
      $availSpace$$18_bounds$$36$$ = $legend$$2$$.$_bounds$;
      $position$$10_shiftedPos$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($legend$$2$$, new D.$DvtPoint$$($availSpace$$18_bounds$$36$$.x, $availSpace$$18_bounds$$36$$.y));
      $availSpace$$18_bounds$$36$$.x = $position$$10_shiftedPos$$.x;
      $availSpace$$18_bounds$$36$$.y = $position$$10_shiftedPos$$.y;
      $chart$$180$$.$legend$ && ($chart$$180$$.$legend$.$destroy$(), $container$$43$$.removeChild($chart$$180$$.$legend$));
      $chart$$180$$.$legend$ = $legend$$2$$
    }
  }
};
D.$DvtChartLegendRenderer$$.$_addLegendData$ = function $$DvtChartLegendRenderer$$$$_addLegendData$$($chart$$181$$, $legendOptions$$1$$) {
  var $chartOptions$$2$$ = $chart$$181$$.$getOptions$();
  $legendOptions$$1$$.title = $chartOptions$$2$$.legend ? $chartOptions$$2$$.legend.title : D.$JSCompiler_alias_NULL$$;
  $legendOptions$$1$$.sections = [];
  var $refObjItems_seriesItems$$1$$ = D.$DvtChartLegendRenderer$$.$_getSeriesItems$($chart$$181$$);
  0 < $refObjItems_seriesItems$$1$$.length && $legendOptions$$1$$.sections.push({items:$refObjItems_seriesItems$$1$$});
  D.$DvtChartLegendRenderer$$.$_addLegendSections$($chart$$181$$, $legendOptions$$1$$.sections);
  $refObjItems_seriesItems$$1$$ = D.$DvtChartLegendRenderer$$.$_getRefObjItems$($chart$$181$$);
  0 < $refObjItems_seriesItems$$1$$.length && $legendOptions$$1$$.sections.push({items:$refObjItems_seriesItems$$1$$, title:$chartOptions$$2$$.legend ? $chartOptions$$2$$.legend.referenceObjectTitle : D.$JSCompiler_alias_NULL$$});
  return $legendOptions$$1$$
};
D.$DvtChartLegendRenderer$$.$_getSeriesItems$ = function $$DvtChartLegendRenderer$$$$_getSeriesItems$$($chart$$182$$) {
  var $ret$$59$$ = [], $legendItem$$1$$;
  if("pie" == $chart$$182$$.$getType$()) {
    for(var $seriesCount$$19_seriesIndices$$ = D.$DvtPieChartUtils$$.$getRenderedSeriesIndices$($chart$$182$$), $seriesIndex$$56$$, $i$$307$$ = 0;$i$$307$$ < $seriesCount$$19_seriesIndices$$.length;$i$$307$$++) {
      $seriesIndex$$56$$ = $seriesCount$$19_seriesIndices$$[$i$$307$$], ($legendItem$$1$$ = D.$DvtChartLegendRenderer$$.$_createLegendItem$($chart$$182$$, $seriesIndex$$56$$)) && $ret$$59$$.push($legendItem$$1$$)
    }
    D.$DvtPieChartUtils$$.$hasOtherSeries$($chart$$182$$) && ($legendItem$$1$$ = {id:D.$DvtPieChartUtils$$.$OTHER_SLICE_SERIES_ID$, text:(0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($chart$$182$$.$getBundle$(), "LABEL_OTHER", D.$JSCompiler_alias_NULL$$), categoryVisibility:D.$DvtPieChartUtils$$.$getOtherSliceVisibility$($chart$$182$$), type:"marker", color:$chart$$182$$.$getOptions$().styleDefaults.otherColor, borderColor:$chart$$182$$.$getOptions$().styleDefaults.borderColor}, $ret$$59$$.push($legendItem$$1$$))
  }else {
    $seriesCount$$19_seriesIndices$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$182$$);
    for($seriesIndex$$56$$ = 0;$seriesIndex$$56$$ < $seriesCount$$19_seriesIndices$$;$seriesIndex$$56$$++) {
      ($legendItem$$1$$ = D.$DvtChartLegendRenderer$$.$_createLegendItem$($chart$$182$$, $seriesIndex$$56$$)) && $ret$$59$$.push($legendItem$$1$$)
    }
  }
  D.$DvtChartTypeUtils$$.$isStacked$($chart$$182$$) && D.$DvtChartTypeUtils$$.$isVertical$($chart$$182$$) && $ret$$59$$.reverse();
  return $ret$$59$$
};
D.$DvtChartLegendRenderer$$.$_createLegendItem$ = function $$DvtChartLegendRenderer$$$$_createLegendItem$$($chart$$183$$, $seriesIndex$$57$$) {
  var $seriesItem$$27$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$183$$, $seriesIndex$$57$$), $chartType$$ = $chart$$183$$.$getType$(), $seriesType$$5$$ = D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$183$$, $seriesIndex$$57$$), $lineType$$6$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$183$$, $seriesIndex$$57$$);
  if(!$seriesItem$$27$$ || "off" == $seriesItem$$27$$.displayInLegend || "on" != $seriesItem$$27$$.displayInLegend && !D.$DvtChartDataUtils$$.$hasSeriesData$($chart$$183$$, $seriesIndex$$57$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $legendItem$$2_seriesLabel$$2$$ = D.$DvtChartDataUtils$$.$getSeriesLabel$($chart$$183$$, $seriesIndex$$57$$);
  if(!$legendItem$$2_seriesLabel$$2$$ || 0 >= $legendItem$$2_seriesLabel$$2$$.trim().length) {
    return D.$JSCompiler_alias_NULL$$
  }
  $legendItem$$2_seriesLabel$$2$$ = {id:D.$DvtChartDataUtils$$.$getSeries$($chart$$183$$, $seriesIndex$$57$$), text:$legendItem$$2_seriesLabel$$2$$, categoryVisibility:$seriesItem$$27$$.visibility};
  "line" == $seriesType$$5$$ || "scatter" == $chartType$$ || "bubble" == $chartType$$ ? ($legendItem$$2_seriesLabel$$2$$.lineStyle = D.$DvtChartStyleUtils$$.$getLineStyle$($chart$$183$$, $seriesIndex$$57$$), $legendItem$$2_seriesLabel$$2$$.lineWidth = D.$DvtChartStyleUtils$$.$getLineWidth$($chart$$183$$, $seriesIndex$$57$$), D.$DvtChartStyleUtils$$.$isMarkerDisplayed$($chart$$183$$, $seriesIndex$$57$$) ? ($legendItem$$2_seriesLabel$$2$$.type = "none" == $lineType$$6$$ ? "marker" : "lineWithMarker", 
  $legendItem$$2_seriesLabel$$2$$.markerShape = D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$183$$, $seriesIndex$$57$$), $legendItem$$2_seriesLabel$$2$$.markerColor = D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$183$$, $seriesIndex$$57$$)) : $legendItem$$2_seriesLabel$$2$$.type = "line") : ($legendItem$$2_seriesLabel$$2$$.type = "marker", "none" == D.$DvtChartStyleUtils$$.$getLineType$($chart$$183$$, $seriesIndex$$57$$) && ($legendItem$$2_seriesLabel$$2$$.markerShape = D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$183$$, 
  $seriesIndex$$57$$)));
  $legendItem$$2_seriesLabel$$2$$.color = D.$DvtChartStyleUtils$$.$getColor$($chart$$183$$, $seriesIndex$$57$$);
  $legendItem$$2_seriesLabel$$2$$.borderColor = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$183$$, $seriesIndex$$57$$);
  $legendItem$$2_seriesLabel$$2$$.pattern = D.$DvtChartStyleUtils$$.$getPattern$($chart$$183$$, $seriesIndex$$57$$);
  "bubble" == $chartType$$ && ($legendItem$$2_seriesLabel$$2$$._borderWidth = 0.5);
  $legendItem$$2_seriesLabel$$2$$.action = $seriesItem$$27$$.action;
  $legendItem$$2_seriesLabel$$2$$._spb = $chart$$183$$.$getShowPopupBehaviors$($seriesItem$$27$$._id);
  return $legendItem$$2_seriesLabel$$2$$
};
D.$DvtChartLegendRenderer$$.$_addLegendSections$ = function $$DvtChartLegendRenderer$$$$_addLegendSections$$($chart$$184$$, $sections$$1$$) {
  var $options$$111$$ = $chart$$184$$.$getOptions$();
  if($options$$111$$ && $options$$111$$.legend && $options$$111$$.legend.sections) {
    for(var $i$$308$$ = 0;$i$$308$$ < $options$$111$$.legend.sections.length;$i$$308$$++) {
      var $dataSection$$1$$ = $options$$111$$.legend.sections[$i$$308$$];
      $dataSection$$1$$ && $dataSection$$1$$.items && $sections$$1$$.push({title:$dataSection$$1$$.title, items:$dataSection$$1$$.items})
    }
  }
};
D.$DvtChartLegendRenderer$$.$_getRefObjItems$ = function $$DvtChartLegendRenderer$$$$_getRefObjItems$$($chart$$185_refObjs$$) {
  $chart$$185_refObjs$$ = D.$DvtChartRefObjUtils$$.$getObjects$($chart$$185_refObjs$$);
  if(0 >= $chart$$185_refObjs$$.length) {
    return[]
  }
  for(var $items$$18$$ = [], $i$$309$$ = 0;$i$$309$$ < $chart$$185_refObjs$$.length;$i$$309$$++) {
    var $refObj$$10$$ = $chart$$185_refObjs$$[$i$$309$$];
    if($refObj$$10$$ && "on" == $refObj$$10$$.displayInLegend && $refObj$$10$$.text) {
      var $type$$107$$ = D.$DvtChartRefObjUtils$$.$getType$($refObj$$10$$);
      $items$$18$$.push({type:"area" == $type$$107$$ ? "square" : "line", text:$refObj$$10$$.text, color:D.$DvtChartRefObjUtils$$.$getColor$($refObj$$10$$), lineStyle:$refObj$$10$$.lineStyle, lineWidth:D.$DvtChartRefObjUtils$$.$getLineWidth$($refObj$$10$$)})
    }
  }
  return $items$$18$$
};
D.$DvtPlotAreaRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtPlotAreaRenderer$$, D.$DvtObj$$, "DvtPlotAreaRenderer");
D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ = 16;
D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ = 4;
D.$DvtPlotAreaRenderer$$.$_MIN_CHARS_DATA_LABEL$ = 3;
D.$DvtPlotAreaRenderer$$.$render$ = function $$DvtPlotAreaRenderer$$$$render$$($chart$$203$$, $container$$56$$, $availSpace$$33$$) {
  "off" == $chart$$203$$.$getOptions$().plotArea.rendered ? D.$DvtPlotAreaRenderer$$.$_renderAxisLines$($chart$$203$$, $container$$56$$, $availSpace$$33$$) : 0 < $availSpace$$33$$.$w$ && 0 < $availSpace$$33$$.$h$ && ($chart$$203$$.$_currentMarkers$ = [], $chart$$203$$.$_currentAreas$ = [], D.$DvtPlotAreaRenderer$$.$_renderBackgroundObjects$($chart$$203$$, $container$$56$$, $availSpace$$33$$), D.$DvtPlotAreaRenderer$$.$_renderGridLines$($chart$$203$$, $container$$56$$, $availSpace$$33$$), D.$DvtPlotAreaRenderer$$.$_renderAxisLines$($chart$$203$$, 
  $container$$56$$, $availSpace$$33$$), D.$DvtPlotAreaRenderer$$.$_renderForegroundObjects$($chart$$203$$, $container$$56$$, $availSpace$$33$$))
};
D.$DvtPlotAreaRenderer$$.$_renderBackgroundObjects$ = function $$DvtPlotAreaRenderer$$$$_renderBackgroundObjects$$($chart$$204$$, $container$$57$$, $availSpace$$34$$) {
  var $areaContainer$$2_options$$120$$ = $chart$$204$$.$getOptions$(), $background$$4_cx$$15_points$$32$$, $context$$138$$ = $chart$$204$$.$_context$;
  if(D.$DvtChartTypeUtils$$.$isPolar$($chart$$204$$)) {
    $background$$4_cx$$15_points$$32$$ = $availSpace$$34$$.x + $availSpace$$34$$.$w$ / 2;
    var $cy$$15$$ = $availSpace$$34$$.y + $availSpace$$34$$.$h$ / 2;
    D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$204$$) ? ($background$$4_cx$$15_points$$32$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($background$$4_cx$$15_points$$32$$, $cy$$15$$, D.$DvtChartDataUtils$$.$getGroupCount$($chart$$204$$), $chart$$204$$.$getRadius$()), $background$$4_cx$$15_points$$32$$ = new D.$DvtPolygon$$($context$$138$$, $background$$4_cx$$15_points$$32$$)) : $background$$4_cx$$15_points$$32$$ = new D.$DvtCircle$$($context$$138$$, $background$$4_cx$$15_points$$32$$, 
    $cy$$15$$, $chart$$204$$.$getRadius$())
  }else {
    $background$$4_cx$$15_points$$32$$ = new D.$DvtRect$$($context$$138$$, $availSpace$$34$$.x, $availSpace$$34$$.y, $availSpace$$34$$.$w$, $availSpace$$34$$.$h$)
  }
  $areaContainer$$2_options$$120$$.plotArea.backgroundColor ? $background$$4_cx$$15_points$$32$$.$setSolidFill$($areaContainer$$2_options$$120$$.plotArea.backgroundColor) : (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($background$$4_cx$$15_points$$32$$);
  $container$$57$$.$addChild$($background$$4_cx$$15_points$$32$$);
  $chart$$204$$.$getEventManager$().$associate$($background$$4_cx$$15_points$$32$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, (0,D.$DvtChartEventManager$getUIEventParams$$)(D.$DvtChartConstants$$.$PLOT_AREA$)));
  if($areaContainer$$2_options$$120$$.xAxis.referenceObjects || $areaContainer$$2_options$$120$$.yAxis.referenceObjects || $areaContainer$$2_options$$120$$.y2Axis.referenceObjects) {
    window.clipGroup = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$204$$, $container$$57$$, $availSpace$$34$$), D.$DvtRefObjRenderer$$.$renderBackgroundObjects$($chart$$204$$, $availSpace$$34$$)
  }
  D.$DvtChartTypeUtils$$.$isBLAC$($chart$$204$$) && ($areaContainer$$2_options$$120$$ = new D.$DvtContainer$$($context$$138$$), $container$$57$$.$addChild$($areaContainer$$2_options$$120$$), $chart$$204$$.$_areaContainer$ = $areaContainer$$2_options$$120$$, D.$DvtChartTypeUtils$$.$hasAreaSeries$($chart$$204$$) && D.$DvtPlotAreaRenderer$$.$_renderAreas$($chart$$204$$, $areaContainer$$2_options$$120$$, $availSpace$$34$$, D.$JSCompiler_alias_FALSE$$))
};
D.$DvtPlotAreaRenderer$$.$_renderGridLines$ = function $$DvtPlotAreaRenderer$$$$_renderGridLines$$($chart$$205$$, $container$$58$$, $availSpace$$35$$) {
  var $context$$139$$ = $container$$58$$.$_context$, $options$$121_renderY2Axis$$ = $chart$$205$$.$getOptions$(), $renderXAxis$$ = $chart$$205$$.$xAxis$ && "off" != $options$$121_renderY2Axis$$.xAxis.rendered, $renderYAxis$$ = $chart$$205$$.$yAxis$ && "off" != $options$$121_renderY2Axis$$.yAxis.rendered, $options$$121_renderY2Axis$$ = $chart$$205$$.$y2Axis$ && "off" != $options$$121_renderY2Axis$$.y2Axis.rendered;
  $renderXAxis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$58$$, $availSpace$$35$$, $chart$$205$$.$xAxis$, $chart$$205$$.$xAxis$.$getMinorGridLines$($context$$139$$));
  $renderYAxis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$58$$, $availSpace$$35$$, $chart$$205$$.$yAxis$, $chart$$205$$.$yAxis$.$getMinorGridLines$($context$$139$$));
  $options$$121_renderY2Axis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$58$$, $availSpace$$35$$, $chart$$205$$.$y2Axis$, $chart$$205$$.$y2Axis$.$getMinorGridLines$($context$$139$$));
  $renderXAxis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$58$$, $availSpace$$35$$, $chart$$205$$.$xAxis$, $chart$$205$$.$xAxis$.$getMajorGridLines$($context$$139$$));
  $renderYAxis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$58$$, $availSpace$$35$$, $chart$$205$$.$yAxis$, $chart$$205$$.$yAxis$.$getMajorGridLines$($context$$139$$));
  $options$$121_renderY2Axis$$ && D.$DvtPlotAreaRenderer$$.$_positionGridLines$($container$$58$$, $availSpace$$35$$, $chart$$205$$.$y2Axis$, $chart$$205$$.$y2Axis$.$getMajorGridLines$($context$$139$$))
};
D.$DvtPlotAreaRenderer$$.$_renderAxisLines$ = function $$DvtPlotAreaRenderer$$$$_renderAxisLines$$($chart$$206$$, $container$$59$$, $availSpace$$36$$) {
  var $options$$122_renderY2Axis$$1$$ = $chart$$206$$.$getOptions$(), $renderXAxis$$1$$ = $chart$$206$$.$xAxis$ && "off" != $options$$122_renderY2Axis$$1$$.xAxis.rendered, $renderYAxis$$1$$ = $chart$$206$$.$yAxis$ && "off" != $options$$122_renderY2Axis$$1$$.yAxis.rendered, $options$$122_renderY2Axis$$1$$ = $chart$$206$$.$y2Axis$ && "off" != $options$$122_renderY2Axis$$1$$.y2Axis.rendered, $isPolar$$1$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$206$$);
  $renderXAxis$$1$$ && D.$DvtPlotAreaRenderer$$.$_positionAxisLine$($container$$59$$, $availSpace$$36$$, $isPolar$$1$$ ? $chart$$206$$.$yAxis$ : $chart$$206$$.$xAxis$);
  $renderYAxis$$1$$ && D.$DvtPlotAreaRenderer$$.$_positionAxisLine$($container$$59$$, $availSpace$$36$$, $isPolar$$1$$ ? $chart$$206$$.$xAxis$ : $chart$$206$$.$yAxis$);
  $options$$122_renderY2Axis$$1$$ && D.$DvtPlotAreaRenderer$$.$_positionAxisLine$($container$$59$$, $availSpace$$36$$, $chart$$206$$.$y2Axis$)
};
D.$DvtPlotAreaRenderer$$.$_positionGridLines$ = function $$DvtPlotAreaRenderer$$$$_positionGridLines$$($container$$60$$, $availSpace$$37$$, $axis$$15$$, $gridlines$$) {
  for(var $position$$14$$ = $axis$$15$$.$getPosition$(), $i$$310$$ = 0;$i$$310$$ < $gridlines$$.length;$i$$310$$++) {
    var $gridline$$ = $gridlines$$[$i$$310$$];
    $container$$60$$.$addChild$($gridline$$);
    "radial" == $position$$14$$ || "tangential" == $position$$14$$ ? ($gridline$$.$setTranslateX$($availSpace$$37$$.x + $availSpace$$37$$.$w$ / 2), $gridline$$.$setTranslateY$($availSpace$$37$$.y + $availSpace$$37$$.$h$ / 2)) : "top" == $position$$14$$ || "bottom" == $position$$14$$ ? ($gridline$$.$setY1$($availSpace$$37$$.y), $gridline$$.$setY2$($availSpace$$37$$.y + $availSpace$$37$$.$h$), $gridline$$.$setX1$((0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($axis$$15$$, $gridline$$.$getX1$())), 
    $gridline$$.$setX2$((0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($axis$$15$$, $gridline$$.$getX2$()))) : ($gridline$$.$setX1$($availSpace$$37$$.x), $gridline$$.$setX2$($availSpace$$37$$.x + $availSpace$$37$$.$w$), $gridline$$.$setY1$((0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($axis$$15$$, $gridline$$.$getY1$())), $gridline$$.$setY2$((0,D.$JSCompiler_StaticMethods_axisToPlotArea$$)($axis$$15$$, $gridline$$.$getY2$())))
  }
};
D.$DvtPlotAreaRenderer$$.$_positionAxisLine$ = function $$DvtPlotAreaRenderer$$$$_positionAxisLine$$($container$$61_position$$15$$, $availSpace$$38$$, $axis$$16$$) {
  var $axisLine$$ = $axis$$16$$.$getAxisLine$($container$$61_position$$15$$.$_context$);
  $axisLine$$ && ($container$$61_position$$15$$.$addChild$($axisLine$$), $container$$61_position$$15$$ = $axis$$16$$.$getPosition$(), "radial" == $container$$61_position$$15$$ || "tangential" == $container$$61_position$$15$$ ? ($axisLine$$.$setTranslateX$($availSpace$$38$$.x + $availSpace$$38$$.$w$ / 2), $axisLine$$.$setTranslateY$($availSpace$$38$$.y + $availSpace$$38$$.$h$ / 2)) : "top" == $container$$61_position$$15$$ ? ($axisLine$$.$setX1$($availSpace$$38$$.x), $axisLine$$.$setX2$($availSpace$$38$$.x + 
  $availSpace$$38$$.$w$), $axisLine$$.$setY1$($availSpace$$38$$.y), $axisLine$$.$setY2$($availSpace$$38$$.y)) : "bottom" == $container$$61_position$$15$$ ? ($axisLine$$.$setX1$($availSpace$$38$$.x), $axisLine$$.$setX2$($availSpace$$38$$.x + $availSpace$$38$$.$w$), $axisLine$$.$setY1$($availSpace$$38$$.y + $availSpace$$38$$.$h$), $axisLine$$.$setY2$($availSpace$$38$$.y + $availSpace$$38$$.$h$)) : "left" == $container$$61_position$$15$$ ? ($axisLine$$.$setX1$($availSpace$$38$$.x), $axisLine$$.$setX2$($availSpace$$38$$.x), 
  $axisLine$$.$setY1$($availSpace$$38$$.y), $axisLine$$.$setY2$($availSpace$$38$$.y + $availSpace$$38$$.$h$)) : "right" == $container$$61_position$$15$$ && ($axisLine$$.$setX1$($availSpace$$38$$.x + $availSpace$$38$$.$w$), $axisLine$$.$setX2$($availSpace$$38$$.x + $availSpace$$38$$.$w$), $axisLine$$.$setY1$($availSpace$$38$$.y), $axisLine$$.$setY2$($availSpace$$38$$.y + $availSpace$$38$$.$h$)))
};
D.$DvtPlotAreaRenderer$$.$_renderForegroundObjects$ = function $$DvtPlotAreaRenderer$$$$_renderForegroundObjects$$($chart$$207$$, $container$$62_selected$$20$$, $availSpace$$39$$) {
  window.clipGroup = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$207$$, $container$$62_selected$$20$$, $availSpace$$39$$);
  D.$DvtChartTypeUtils$$.$isBLAC$($chart$$207$$) ? (D.$DvtChartTypeUtils$$.$hasLineWithAreaSeries$($chart$$207$$) && D.$DvtPlotAreaRenderer$$.$_renderAreas$($chart$$207$$, $container$$62_selected$$20$$, $availSpace$$39$$, D.$JSCompiler_alias_TRUE$$), D.$DvtChartTypeUtils$$.$hasBarSeries$($chart$$207$$) && D.$DvtPlotAreaRenderer$$.$_renderBars$($chart$$207$$, $availSpace$$39$$), D.$DvtChartTypeUtils$$.$hasLineSeries$($chart$$207$$) && D.$DvtPlotAreaRenderer$$.$_renderLines$($chart$$207$$, $container$$62_selected$$20$$, 
  window.clipGroup, $availSpace$$39$$)) : D.$DvtChartTypeUtils$$.$isScatter$($chart$$207$$) ? D.$DvtPlotAreaRenderer$$.$_renderDataMarkers$($chart$$207$$, $container$$62_selected$$20$$, $availSpace$$39$$) : D.$DvtChartTypeUtils$$.$isBubble$($chart$$207$$) && D.$DvtPlotAreaRenderer$$.$_renderDataMarkers$($chart$$207$$, window.clipGroup, $availSpace$$39$$);
  var $options$$123$$ = $chart$$207$$.$getOptions$();
  if($options$$123$$.xAxis.referenceObjects || $options$$123$$.yAxis.referenceObjects || $options$$123$$.y2Axis.referenceObjects) {
    window.clipGroup = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$207$$, $container$$62_selected$$20$$, $availSpace$$39$$), D.$DvtRefObjRenderer$$.$renderForegroundObjects$($chart$$207$$, $availSpace$$39$$)
  }
  $container$$62_selected$$20$$ = D.$DvtChartDataUtils$$.$getInitialSelection$($chart$$207$$);
  D.$DvtChartEventUtils$$.$setInitialSelection$($chart$$207$$, $container$$62_selected$$20$$)
};
D.$DvtPlotAreaRenderer$$.$_renderDataLabel$ = function $$DvtPlotAreaRenderer$$$$_renderDataLabel$$($bbox$$3_chart$$208$$, $container$$63$$, $cmd$$3_dataItemBounds_padding$$10$$, $seriesIndex$$59$$, $groupIndex$$31$$, $dataColor$$5_style$$27_textDim$$) {
  if(!$bbox$$3_chart$$208$$.$getOptions$()._isOverview) {
    var $label$$31_labelString$$ = D.$DvtChartDataUtils$$.$getDataLabel$($bbox$$3_chart$$208$$, $seriesIndex$$59$$, $groupIndex$$31$$);
    if($label$$31_labelString$$) {
      $label$$31_labelString$$ = new D.$DvtOutputText$$($bbox$$3_chart$$208$$.$_context$, $label$$31_labelString$$, 0, 0);
      $label$$31_labelString$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      var $position$$16_size$$18$$ = D.$DvtChartStyleUtils$$.$getDataLabelPosition$($bbox$$3_chart$$208$$, $seriesIndex$$59$$, $groupIndex$$31$$);
      $dataColor$$5_style$$27_textDim$$ = D.$DvtChartStyleUtils$$.$getDataLabelStyle$($bbox$$3_chart$$208$$, $seriesIndex$$59$$, $groupIndex$$31$$, $dataColor$$5_style$$27_textDim$$, $position$$16_size$$18$$);
      $label$$31_labelString$$.$setCSSStyle$($dataColor$$5_style$$27_textDim$$);
      $label$$31_labelString$$.$setY$($cmd$$3_dataItemBounds_padding$$10$$.y + $cmd$$3_dataItemBounds_padding$$10$$.$h$ / 2);
      $label$$31_labelString$$.$setX$($cmd$$3_dataItemBounds_padding$$10$$.x + $cmd$$3_dataItemBounds_padding$$10$$.$w$ / 2);
      $label$$31_labelString$$.$alignCenter$();
      $label$$31_labelString$$.$alignMiddle$();
      $dataColor$$5_style$$27_textDim$$ = $label$$31_labelString$$.$measureDimensions$();
      if("center" == $position$$16_size$$18$$ || "inBottom" == $position$$16_size$$18$$ || "inTop" == $position$$16_size$$18$$ || "inRight" == $position$$16_size$$18$$ || "inLeft" == $position$$16_size$$18$$) {
        $cmd$$3_dataItemBounds_padding$$10$$.x += D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2;
        $cmd$$3_dataItemBounds_padding$$10$$.y += D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2;
        $cmd$$3_dataItemBounds_padding$$10$$.$h$ -= D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$;
        $cmd$$3_dataItemBounds_padding$$10$$.$w$ -= D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$;
        if("bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($bbox$$3_chart$$208$$, $seriesIndex$$59$$)) {
          if($dataColor$$5_style$$27_textDim$$.$w$ > $cmd$$3_dataItemBounds_padding$$10$$.$w$ || $dataColor$$5_style$$27_textDim$$.$h$ > $cmd$$3_dataItemBounds_padding$$10$$.$h$) {
            return
          }
          "inRight" == $position$$16_size$$18$$ ? $label$$31_labelString$$.$setX$($cmd$$3_dataItemBounds_padding$$10$$.x + $cmd$$3_dataItemBounds_padding$$10$$.$w$ - $dataColor$$5_style$$27_textDim$$.$w$ / 2 - D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inLeft" == $position$$16_size$$18$$ ? $label$$31_labelString$$.$setX$($cmd$$3_dataItemBounds_padding$$10$$.x + $dataColor$$5_style$$27_textDim$$.$w$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inTop" == $position$$16_size$$18$$ ? 
          $label$$31_labelString$$.$setY$($cmd$$3_dataItemBounds_padding$$10$$.y + $dataColor$$5_style$$27_textDim$$.$h$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "inBottom" == $position$$16_size$$18$$ && $label$$31_labelString$$.$setY$($cmd$$3_dataItemBounds_padding$$10$$.y + $cmd$$3_dataItemBounds_padding$$10$$.$h$ - $dataColor$$5_style$$27_textDim$$.$h$ / 2 - D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2)
        }else {
          if(D.$DvtChartTypeUtils$$.$isBubble$($bbox$$3_chart$$208$$) && ($position$$16_size$$18$$ = $label$$31_labelString$$.$getOptimalFontSize$($cmd$$3_dataItemBounds_padding$$10$$), $label$$31_labelString$$.$setFontSize$($position$$16_size$$18$$), !D.$DvtTextUtils$$.$fitText$($label$$31_labelString$$, $cmd$$3_dataItemBounds_padding$$10$$.$w$, $cmd$$3_dataItemBounds_padding$$10$$.$h$, $container$$63$$, D.$DvtPlotAreaRenderer$$.$_MIN_CHARS_DATA_LABEL$))) {
            return
          }
        }
        D.$DvtChartStyleUtils$$.$getPattern$($bbox$$3_chart$$208$$, $seriesIndex$$59$$, $groupIndex$$31$$) != D.$JSCompiler_alias_NULL$$ && ($dataColor$$5_style$$27_textDim$$ = $label$$31_labelString$$.$getDimensions$(), $cmd$$3_dataItemBounds_padding$$10$$ = 0.15 * $dataColor$$5_style$$27_textDim$$.$h$, $cmd$$3_dataItemBounds_padding$$10$$ = window.DvtPathUtils.$roundedRectangle$($dataColor$$5_style$$27_textDim$$.x - $cmd$$3_dataItemBounds_padding$$10$$, $dataColor$$5_style$$27_textDim$$.y, $dataColor$$5_style$$27_textDim$$.$w$ + 
        2 * $cmd$$3_dataItemBounds_padding$$10$$, $dataColor$$5_style$$27_textDim$$.$h$, 2, 2, 2, 2), $bbox$$3_chart$$208$$ = new D.$DvtPath$$($bbox$$3_chart$$208$$.$_context$, $cmd$$3_dataItemBounds_padding$$10$$), $bbox$$3_chart$$208$$.$setSolidFill$("#FFFFFF", 0.9), $container$$63$$.$addChild$($bbox$$3_chart$$208$$))
      }else {
        "right" == $position$$16_size$$18$$ ? $label$$31_labelString$$.$setX$($cmd$$3_dataItemBounds_padding$$10$$.x + $cmd$$3_dataItemBounds_padding$$10$$.$w$ + $dataColor$$5_style$$27_textDim$$.$w$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "left" == $position$$16_size$$18$$ ? $label$$31_labelString$$.$setX$($cmd$$3_dataItemBounds_padding$$10$$.x - $dataColor$$5_style$$27_textDim$$.$w$ / 2 - D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$) : "above" == $position$$16_size$$18$$ ? 
        $label$$31_labelString$$.$setY$($cmd$$3_dataItemBounds_padding$$10$$.y - $dataColor$$5_style$$27_textDim$$.$h$ / 2) : "below" == $position$$16_size$$18$$ && $label$$31_labelString$$.$setY$($cmd$$3_dataItemBounds_padding$$10$$.y + $cmd$$3_dataItemBounds_padding$$10$$.$h$ + $dataColor$$5_style$$27_textDim$$.$h$ / 2 + D.$DvtPlotAreaRenderer$$.$_MARKER_DATA_LABEL_GAP$ / 2)
      }
      $container$$63$$.$addChild$($label$$31_labelString$$)
    }
  }
};
D.$DvtPlotAreaRenderer$$.$_renderLabelForDataMarker$ = function $$DvtPlotAreaRenderer$$$$_renderLabelForDataMarker$$($chart$$209$$, $container$$64$$, $marker$$18$$) {
  var $logicalObject$$3$$ = $chart$$209$$.$getEventManager$().$getLogicalObject$($marker$$18$$), $markerBounds$$ = new D.$DvtRectangle$$($marker$$18$$.$getX$(), $marker$$18$$.$getY$(), $marker$$18$$.getWidth(), $marker$$18$$.getHeight());
  D.$DvtPlotAreaRenderer$$.$_renderDataLabel$($chart$$209$$, $container$$64$$, $markerBounds$$, $logicalObject$$3$$.$getSeriesIndex$(), $logicalObject$$3$$.$getGroupIndex$(), $marker$$18$$.$_dataColor$)
};
D.$DvtPlotAreaRenderer$$.$_renderDataMarkers$ = function $$DvtPlotAreaRenderer$$$$_renderDataMarkers$$($chart$$210$$, $container$$65$$, $availSpace$$40_numMarkers$$) {
  for(var $markers$$3$$ = [], $i$$311_seriesCount$$21$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$210$$), $seriesIndex$$60$$ = 0;$seriesIndex$$60$$ < $i$$311_seriesCount$$21$$;$seriesIndex$$60$$++) {
    "none" != D.$DvtChartStyleUtils$$.$getLineType$($chart$$210$$, $seriesIndex$$60$$) && D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$210$$, $container$$65$$, $seriesIndex$$60$$, $availSpace$$40_numMarkers$$);
    var $seriesMarkers$$ = D.$DvtPlotAreaRenderer$$.$_getMarkersForSeries$($chart$$210$$, $seriesIndex$$60$$, $availSpace$$40_numMarkers$$), $markers$$3$$ = $markers$$3$$.concat($seriesMarkers$$)
  }
  D.$DvtChartMarkerUtils$$.$sortMarkers$($markers$$3$$);
  $availSpace$$40_numMarkers$$ = $markers$$3$$.length;
  for($i$$311_seriesCount$$21$$ = 0;$i$$311_seriesCount$$21$$ < $availSpace$$40_numMarkers$$;$i$$311_seriesCount$$21$$++) {
    $container$$65$$.$addChild$($markers$$3$$[$i$$311_seriesCount$$21$$]), D.$DvtPlotAreaRenderer$$.$_renderLabelForDataMarker$($chart$$210$$, $container$$65$$, $markers$$3$$[$i$$311_seriesCount$$21$$])
  }
  $chart$$210$$.$_currentMarkers$.push($markers$$3$$)
};
D.$DvtPlotAreaRenderer$$.$_renderDataMarkersForSeries$ = function $$DvtPlotAreaRenderer$$$$_renderDataMarkersForSeries$$($chart$$211$$, $container$$66$$, $markers$$4_seriesIndex$$61$$, $availSpace$$41_numMarkers$$1$$) {
  $markers$$4_seriesIndex$$61$$ = D.$DvtPlotAreaRenderer$$.$_getMarkersForSeries$($chart$$211$$, $markers$$4_seriesIndex$$61$$, $availSpace$$41_numMarkers$$1$$);
  $availSpace$$41_numMarkers$$1$$ = $markers$$4_seriesIndex$$61$$.length;
  for(var $i$$312$$ = 0;$i$$312$$ < $availSpace$$41_numMarkers$$1$$;$i$$312$$++) {
    $container$$66$$.$addChild$($markers$$4_seriesIndex$$61$$[$i$$312$$]), D.$DvtPlotAreaRenderer$$.$_renderLabelForDataMarker$($chart$$211$$, $container$$66$$, $markers$$4_seriesIndex$$61$$[$i$$312$$])
  }
  $chart$$211$$.$_currentMarkers$.push($markers$$4_seriesIndex$$61$$)
};
D.$DvtPlotAreaRenderer$$.$_getMarkersForSeries$ = function $$DvtPlotAreaRenderer$$$$_getMarkersForSeries$$($chart$$212$$, $seriesIndex$$62$$, $availSpace$$42$$) {
  if(!D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$212$$, $seriesIndex$$62$$)) {
    return[]
  }
  var $isTouchDevice$$ = (0,D.$DvtAgent$isTouchDevice$$)(), $context$$140$$ = $chart$$212$$.$_context$, $xAxis$$1$$ = $chart$$212$$.$xAxis$, $yAxis$$ = $chart$$212$$.$yAxis$;
  D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$212$$, $seriesIndex$$62$$) && ($yAxis$$ = $chart$$212$$.$y2Axis$);
  for(var $options$$124$$ = $chart$$212$$.$getOptions$(), $bHasDatatips$$ = D.$DvtChartTooltipUtils$$.$hasDatatips$($chart$$212$$), $bBubbleChart$$ = D.$DvtChartTypeUtils$$.$isBubble$($chart$$212$$), $isPolar$$2$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$212$$), $markers$$5$$ = [], $groupIndex$$32$$ = 0;$groupIndex$$32$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$212$$);$groupIndex$$32$$++) {
    var $dataValue_hitArea$$2_xCoord$$3_xValue$$1$$ = D.$DvtChartDataUtils$$.getValue($chart$$212$$, $seriesIndex$$62$$, $groupIndex$$32$$);
    if(!($dataValue_hitArea$$2_xCoord$$3_xValue$$1$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($dataValue_hitArea$$2_xCoord$$3_xValue$$1$$)) && !("multiple" != $options$$124$$.selection && D.$DvtPlotAreaRenderer$$.$_isDataItemFiltered$($chart$$212$$, $seriesIndex$$62$$, $groupIndex$$32$$)) && D.$DvtChartStyleUtils$$.$isDataItemRendered$($chart$$212$$, $seriesIndex$$62$$, $groupIndex$$32$$)) {
      var $dataValue_hitArea$$2_xCoord$$3_xValue$$1$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$212$$, $seriesIndex$$62$$, $groupIndex$$32$$), $cartesian$$1_yCoord$$2_yValue$$1$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$212$$, $seriesIndex$$62$$, $groupIndex$$32$$);
      if($bBubbleChart$$) {
        if($isPolar$$2$$ && $cartesian$$1_yCoord$$2_yValue$$1$$ < $yAxis$$.$getViewportMin$()) {
          continue
        }
        $dataValue_hitArea$$2_xCoord$$3_xValue$$1$$ = $isPolar$$2$$ ? $xAxis$$1$$.$getCoordAt$($dataValue_hitArea$$2_xCoord$$3_xValue$$1$$) : $xAxis$$1$$.$getUnboundedCoordAt$($dataValue_hitArea$$2_xCoord$$3_xValue$$1$$);
        $cartesian$$1_yCoord$$2_yValue$$1$$ = $yAxis$$.$getUnboundedCoordAt$($cartesian$$1_yCoord$$2_yValue$$1$$)
      }else {
        $dataValue_hitArea$$2_xCoord$$3_xValue$$1$$ = $xAxis$$1$$.$getCoordAt$($dataValue_hitArea$$2_xCoord$$3_xValue$$1$$), $cartesian$$1_yCoord$$2_yValue$$1$$ = $yAxis$$.$getCoordAt$($cartesian$$1_yCoord$$2_yValue$$1$$)
      }
      if(!($dataValue_hitArea$$2_xCoord$$3_xValue$$1$$ == D.$JSCompiler_alias_NULL$$ || $cartesian$$1_yCoord$$2_yValue$$1$$ == D.$JSCompiler_alias_NULL$$)) {
        if($isPolar$$2$$) {
          $cartesian$$1_yCoord$$2_yValue$$1$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($cartesian$$1_yCoord$$2_yValue$$1$$, $dataValue_hitArea$$2_xCoord$$3_xValue$$1$$, $availSpace$$42$$), $dataValue_hitArea$$2_xCoord$$3_xValue$$1$$ = $cartesian$$1_yCoord$$2_yValue$$1$$.x, $cartesian$$1_yCoord$$2_yValue$$1$$ = $cartesian$$1_yCoord$$2_yValue$$1$$.y
        }else {
          if(D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$212$$)) {
            var $bMarkerDisplayed_temp$$ = $dataValue_hitArea$$2_xCoord$$3_xValue$$1$$, $dataValue_hitArea$$2_xCoord$$3_xValue$$1$$ = $cartesian$$1_yCoord$$2_yValue$$1$$, $cartesian$$1_yCoord$$2_yValue$$1$$ = $bMarkerDisplayed_temp$$
          }
        }
        $bMarkerDisplayed_temp$$ = D.$DvtChartStyleUtils$$.$isMarkerDisplayed$($chart$$212$$, $seriesIndex$$62$$, $groupIndex$$32$$);
        if(!$bMarkerDisplayed_temp$$) {
          var $lastIndex_prevValue_shape$$14$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$212$$) - 1, $dataPos$$1_nextIndex$$1_nextValue$$ = $isPolar$$2$$ && 0 < $lastIndex_prevValue_shape$$14$$ && $groupIndex$$32$$ == $lastIndex_prevValue_shape$$14$$ ? 0 : $groupIndex$$32$$ + 1, $lastIndex_prevValue_shape$$14$$ = D.$DvtChartDataUtils$$.getValue($chart$$212$$, $seriesIndex$$62$$, $isPolar$$2$$ && 0 < $lastIndex_prevValue_shape$$14$$ && 0 == $groupIndex$$32$$ ? $lastIndex_prevValue_shape$$14$$ : 
          $groupIndex$$32$$ - 1), $dataPos$$1_nextIndex$$1_nextValue$$ = D.$DvtChartDataUtils$$.getValue($chart$$212$$, $seriesIndex$$62$$, $dataPos$$1_nextIndex$$1_nextValue$$);
          if(($lastIndex_prevValue_shape$$14$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($lastIndex_prevValue_shape$$14$$)) && ($dataPos$$1_nextIndex$$1_nextValue$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($dataPos$$1_nextIndex$$1_nextValue$$)) && !D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$212$$)) {
            $bMarkerDisplayed_temp$$ = D.$JSCompiler_alias_TRUE$$
          }
        }
        if(!$options$$124$$._duringAnimation || $bMarkerDisplayed_temp$$ || D.$DvtChartDataUtils$$.$isDataSelected$($chart$$212$$, $seriesIndex$$62$$, $groupIndex$$32$$)) {
          var $dataPos$$1_nextIndex$$1_nextValue$$ = new D.$DvtPoint$$($dataValue_hitArea$$2_xCoord$$3_xValue$$1$$, $cartesian$$1_yCoord$$2_yValue$$1$$), $lastIndex_prevValue_shape$$14$$ = D.$DvtChartStyleUtils$$.$getMarkerShape$($chart$$212$$, $seriesIndex$$62$$, $groupIndex$$32$$), $borderColor$$7$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$212$$, $seriesIndex$$62$$, $groupIndex$$32$$), $borderWidth$$1$$ = $bBubbleChart$$ ? 0.5 : 1, $markerSize$$1$$ = D.$DvtChartStyleUtils$$.$getMarkerSize$($chart$$212$$, 
          $seriesIndex$$62$$, $groupIndex$$32$$), $halfMarkerSize_marker$$19$$ = $markerSize$$1$$ / 2;
          window.xCoordMinHalf = $dataValue_hitArea$$2_xCoord$$3_xValue$$1$$ - D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ / 2;
          window.yCoordMinHalf = $cartesian$$1_yCoord$$2_yValue$$1$$ - D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ / 2;
          var $dataValue_hitArea$$2_xCoord$$3_xValue$$1$$ = $dataValue_hitArea$$2_xCoord$$3_xValue$$1$$ - $halfMarkerSize_marker$$19$$, $cartesian$$1_yCoord$$2_yValue$$1$$ = $cartesian$$1_yCoord$$2_yValue$$1$$ - $halfMarkerSize_marker$$19$$, $halfMarkerSize_marker$$19$$ = D.$JSCompiler_alias_NULL$$, $dataColor$$6$$ = $bMarkerDisplayed_temp$$ ? D.$DvtChartStyleUtils$$.$getMarkerColor$($chart$$212$$, $seriesIndex$$62$$, $groupIndex$$32$$) : D.$DvtChartStyleUtils$$.$getColor$($chart$$212$$, $seriesIndex$$62$$, 
          $groupIndex$$32$$), $hoverColor$$2$$ = D.$DvtSelectionEffectUtils$$.$getHoverBorderColor$($dataColor$$6$$), $innerColor$$3$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($chart$$212$$), $outerColor$$3$$ = D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$212$$) ? D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$212$$) : $dataColor$$6$$;
          $bMarkerDisplayed_temp$$ ? ($halfMarkerSize_marker$$19$$ = new D.$DvtMarker$$($context$$140$$, $lastIndex_prevValue_shape$$14$$, "alta", $dataValue_hitArea$$2_xCoord$$3_xValue$$1$$, $cartesian$$1_yCoord$$2_yValue$$1$$, $markerSize$$1$$, $markerSize$$1$$), $chart$$212$$.$isSelectionSupported$() && $halfMarkerSize_marker$$19$$.setCursor("pointer"), $halfMarkerSize_marker$$19$$.$setFill$(D.$DvtChartSeriesEffectUtils$$.$getMarkerFill$($chart$$212$$, $seriesIndex$$62$$, $groupIndex$$32$$)), 
          $borderColor$$7$$ && $halfMarkerSize_marker$$19$$.$setSolidStroke$($borderColor$$7$$, D.$JSCompiler_alias_NULL$$, $borderWidth$$1$$), $halfMarkerSize_marker$$19$$.$setDataColor$($dataColor$$6$$), $halfMarkerSize_marker$$19$$.$setHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$2$$, 1, 2)), $halfMarkerSize_marker$$19$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($innerColor$$3$$, 1, 1.5), new D.$DvtSolidStroke$$($outerColor$$3$$, 1, 4.5)), $halfMarkerSize_marker$$19$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($innerColor$$3$$, 
          1, 1.5), new D.$DvtSolidStroke$$($hoverColor$$2$$, 1, 4.5)), $isTouchDevice$$ && $markerSize$$1$$ < D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$ && ($dataValue_hitArea$$2_xCoord$$3_xValue$$1$$ = new D.$DvtRect$$($context$$140$$, $dataValue_hitArea$$2_xCoord$$3_xValue$$1$$, $cartesian$$1_yCoord$$2_yValue$$1$$, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($dataValue_hitArea$$2_xCoord$$3_xValue$$1$$), 
          $halfMarkerSize_marker$$19$$.$addChild$($dataValue_hitArea$$2_xCoord$$3_xValue$$1$$))) : ($chart$$212$$.$isSelectionSupported$() ? ($halfMarkerSize_marker$$19$$ = new D.$DvtChartLineMarker$$($context$$140$$, $lastIndex_prevValue_shape$$14$$, $dataValue_hitArea$$2_xCoord$$3_xValue$$1$$, $cartesian$$1_yCoord$$2_yValue$$1$$, $markerSize$$1$$), $halfMarkerSize_marker$$19$$.setCursor("pointer"), $isTouchDevice$$ && ($dataValue_hitArea$$2_xCoord$$3_xValue$$1$$ = new D.$DvtRect$$($context$$140$$, 
          window.xCoordMinHalf, window.yCoordMinHalf, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$, D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($dataValue_hitArea$$2_xCoord$$3_xValue$$1$$), $halfMarkerSize_marker$$19$$.$addChild$($dataValue_hitArea$$2_xCoord$$3_xValue$$1$$))) : ($isTouchDevice$$ && ($dataValue_hitArea$$2_xCoord$$3_xValue$$1$$ = window.xCoordMinHalf, $cartesian$$1_yCoord$$2_yValue$$1$$ = window.yCoordMinHalf, $markerSize$$1$$ = 
          D.$DvtPlotAreaRenderer$$.$_MIN_TOUCH_MARKER_SIZE$), $bHasDatatips$$ && ($halfMarkerSize_marker$$19$$ = new D.$DvtMarker$$($context$$140$$, "square", D.$JSCompiler_alias_NULL$$, $dataValue_hitArea$$2_xCoord$$3_xValue$$1$$, $cartesian$$1_yCoord$$2_yValue$$1$$, $markerSize$$1$$, $markerSize$$1$$))), $halfMarkerSize_marker$$19$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($halfMarkerSize_marker$$19$$), $halfMarkerSize_marker$$19$$.$setDataColor$($dataColor$$6$$, 
          $innerColor$$3$$, $outerColor$$3$$)));
          $halfMarkerSize_marker$$19$$ != D.$JSCompiler_alias_NULL$$ && ($markers$$5$$.push($halfMarkerSize_marker$$19$$), (0,D.$DvtChartObjPeer$associate$$)($halfMarkerSize_marker$$19$$, $chart$$212$$, $seriesIndex$$62$$, $groupIndex$$32$$, $dataPos$$1_nextIndex$$1_nextValue$$))
        }
      }
    }
  }
  return $markers$$5$$
};
D.$DvtPlotAreaRenderer$$.$_renderBars$ = function $$DvtPlotAreaRenderer$$$$_renderBars$$($chart$$213$$, $availSpace$$43$$) {
  for(var $container$$67$$ = window.clipGroup, $context$$141$$ = $chart$$213$$.$_context$, $options$$125$$ = $chart$$213$$.$getOptions$(), $xAxis$$2$$ = $chart$$213$$.$xAxis$, $bHoriz$$8$$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$213$$), $bPolar$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$213$$), $bStacked$$ = D.$DvtChartTypeUtils$$.$isStacked$($chart$$213$$), $bPixelSpacing$$ = "pixel" == D.$DvtChartStyleUtils$$.$getBarSpacing$($chart$$213$$), $barSeries$$ = [], $groupCount$$1_seriesCount$$22$$ = 
  D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$213$$), $seriesIndex$$63$$ = 0;$seriesIndex$$63$$ < $groupCount$$1_seriesCount$$22$$;$seriesIndex$$63$$++) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$213$$, $seriesIndex$$63$$) && "bar" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$213$$, $seriesIndex$$63$$) && $barSeries$$.push($seriesIndex$$63$$)
  }
  (0,D.$DvtAgent$isRightToLeft$$)($context$$141$$) && (!$bStacked$$ && !$bHoriz$$8$$) && $barSeries$$.reverse();
  for(var $groupCount$$1_seriesCount$$22$$ = $options$$125$$.groups ? $options$$125$$.groups.length : 0, $barSeriesCount$$2$$ = $barSeries$$.length, $barWidth$$4$$ = D.$DvtChartStyleUtils$$.$getBarWidth$($chart$$213$$, $barSeriesCount$$2$$, $xAxis$$2$$), $offset$$17$$ = D.$DvtChartStyleUtils$$.$getBarOffset$($chart$$213$$, $barWidth$$4$$, $barSeriesCount$$2$$), $y2Offset$$ = D.$DvtChartStyleUtils$$.$getY2BarOffset$($chart$$213$$, $barWidth$$4$$), $barSeriesIndex$$ = 0;$barSeriesIndex$$ < $barSeriesCount$$2$$;$barSeriesIndex$$++) {
    for(var $seriesIndex$$63$$ = $barSeries$$[$barSeriesIndex$$], $bY2Series$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$213$$, $seriesIndex$$63$$), $yAxis$$1$$ = $bY2Series$$ ? $chart$$213$$.$y2Axis$ : $chart$$213$$.$yAxis$, $groupIndex$$33$$ = 0;$groupIndex$$33$$ < $groupCount$$1_seriesCount$$22$$;$groupIndex$$33$$++) {
      var $dataItem$$23_markers$$6_parentContainer$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$213$$, $seriesIndex$$63$$, $groupIndex$$33$$), $shape$$15_xValue$$2_yCoord$$3$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$213$$, $seriesIndex$$63$$, $groupIndex$$33$$), $bInvisible_fill$$25_yValue$$2$$ = D.$DvtChartDataUtils$$.getValue($chart$$213$$, $seriesIndex$$63$$, $groupIndex$$33$$), $dataPos$$2_totalYValue$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$213$$, $seriesIndex$$63$$, 
      $groupIndex$$33$$);
      if(!($bInvisible_fill$$25_yValue$$2$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($bInvisible_fill$$25_yValue$$2$$))) {
        var $innerColor$$4_x1$$10_xCoord$$4$$ = $xAxis$$2$$.$getUnboundedCoordAt$($shape$$15_xValue$$2_yCoord$$3$$, D.$JSCompiler_alias_FALSE$$), $shape$$15_xValue$$2_yCoord$$3$$ = $yAxis$$1$$.$getBoundedCoordAt$($dataPos$$2_totalYValue$$), $axisCoord$$1_stroke$$35$$ = $yAxis$$1$$.$getBaselineCoord$(), $baseCoord_borderColor$$8_dataColor$$7$$ = $bStacked$$ ? $yAxis$$1$$.$getBoundedCoordAt$($dataPos$$2_totalYValue$$ - $bInvisible_fill$$25_yValue$$2$$) : $axisCoord$$1_stroke$$35$$;
        if(!($shape$$15_xValue$$2_yCoord$$3$$ == $baseCoord_borderColor$$8_dataColor$$7$$ && $yAxis$$1$$.$getCoordAt$($dataPos$$2_totalYValue$$) === D.$JSCompiler_alias_NULL$$)) {
          $bInvisible_fill$$25_yValue$$2$$ = D.$JSCompiler_alias_FALSE$$;
          1 > window.Math.abs($shape$$15_xValue$$2_yCoord$$3$$ - $baseCoord_borderColor$$8_dataColor$$7$$) && ($bInvisible_fill$$25_yValue$$2$$ = D.$JSCompiler_alias_TRUE$$, $shape$$15_xValue$$2_yCoord$$3$$ > $baseCoord_borderColor$$8_dataColor$$7$$ ? $shape$$15_xValue$$2_yCoord$$3$$ = $baseCoord_borderColor$$8_dataColor$$7$$ + 3 : $shape$$15_xValue$$2_yCoord$$3$$ <= $baseCoord_borderColor$$8_dataColor$$7$$ && ($shape$$15_xValue$$2_yCoord$$3$$ = $baseCoord_borderColor$$8_dataColor$$7$$ - 3));
          var $innerColor$$4_x1$$10_xCoord$$4$$ = $bY2Series$$ ? $innerColor$$4_x1$$10_xCoord$$4$$ + $offset$$17$$ + $y2Offset$$ : $innerColor$$4_x1$$10_xCoord$$4$$ + $offset$$17$$, $outerColor$$4_x2$$9$$ = $innerColor$$4_x1$$10_xCoord$$4$$ + $barWidth$$4$$, $dataPos$$2_totalYValue$$ = $bPolar$$ ? D.$DvtPlotAreaRenderer$$.$polarToCartesian$($shape$$15_xValue$$2_yCoord$$3$$, ($innerColor$$4_x1$$10_xCoord$$4$$ + $outerColor$$4_x2$$9$$) / 2, $availSpace$$43$$) : $bHoriz$$8$$ ? new D.$DvtPoint$$($shape$$15_xValue$$2_yCoord$$3$$, 
          ($innerColor$$4_x1$$10_xCoord$$4$$ + $outerColor$$4_x2$$9$$) / 2) : new D.$DvtPoint$$(($innerColor$$4_x1$$10_xCoord$$4$$ + $outerColor$$4_x2$$9$$) / 2, $shape$$15_xValue$$2_yCoord$$3$$), $shape$$15_xValue$$2_yCoord$$3$$ = $bPolar$$ ? new D.$DvtChartPolarBar$$($context$$141$$, $axisCoord$$1_stroke$$35$$, $baseCoord_borderColor$$8_dataColor$$7$$, $shape$$15_xValue$$2_yCoord$$3$$, $innerColor$$4_x1$$10_xCoord$$4$$, $outerColor$$4_x2$$9$$, $availSpace$$43$$) : new D.$DvtChartBar$$($context$$141$$, 
          $bHoriz$$8$$, $bStacked$$, $axisCoord$$1_stroke$$35$$, $baseCoord_borderColor$$8_dataColor$$7$$, $shape$$15_xValue$$2_yCoord$$3$$, $innerColor$$4_x1$$10_xCoord$$4$$, $outerColor$$4_x2$$9$$);
          $container$$67$$.$addChild$($shape$$15_xValue$$2_yCoord$$3$$);
          $chart$$213$$.$isSelectionSupported$() && $shape$$15_xValue$$2_yCoord$$3$$.setCursor("pointer");
          $axisCoord$$1_stroke$$35$$ = D.$JSCompiler_alias_NULL$$;
          $bInvisible_fill$$25_yValue$$2$$ ? $bInvisible_fill$$25_yValue$$2$$ = (0,D.$DvtSolidFill$invisibleFill$$)() : ($bInvisible_fill$$25_yValue$$2$$ = D.$DvtChartSeriesEffectUtils$$.$getBarFill$($chart$$213$$, $seriesIndex$$63$$, $groupIndex$$33$$, $bHoriz$$8$$, $barWidth$$4$$), ($baseCoord_borderColor$$8_dataColor$$7$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$213$$, $seriesIndex$$63$$, $groupIndex$$33$$)) && ($axisCoord$$1_stroke$$35$$ = new D.$DvtSolidStroke$$($baseCoord_borderColor$$8_dataColor$$7$$)));
          $baseCoord_borderColor$$8_dataColor$$7$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$213$$, $seriesIndex$$63$$, $groupIndex$$33$$);
          $innerColor$$4_x1$$10_xCoord$$4$$ = D.$DvtChartStyleUtils$$.$getSelectedInnerColor$($chart$$213$$);
          $outerColor$$4_x2$$9$$ = D.$DvtChartStyleUtils$$.$getSelectedOuterColor$($chart$$213$$);
          $shape$$15_xValue$$2_yCoord$$3$$.$setStyleProperties$($bInvisible_fill$$25_yValue$$2$$, $axisCoord$$1_stroke$$35$$, $baseCoord_borderColor$$8_dataColor$$7$$, $innerColor$$4_x1$$10_xCoord$$4$$, $outerColor$$4_x2$$9$$);
          $bPixelSpacing$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($shape$$15_xValue$$2_yCoord$$3$$);
          $dataItem$$23_markers$$6_parentContainer$$ = "outsideBarEdge" == ($dataItem$$23_markers$$6_parentContainer$$.labelPosition ? $dataItem$$23_markers$$6_parentContainer$$.labelPosition : $options$$125$$.styleDefaults.dataLabelPosition) && !D.$DvtChartTypeUtils$$.$isStacked$($chart$$213$$) ? $container$$67$$ : $shape$$15_xValue$$2_yCoord$$3$$;
          D.$DvtPlotAreaRenderer$$.$_renderDataLabel$($chart$$213$$, $dataItem$$23_markers$$6_parentContainer$$, $shape$$15_xValue$$2_yCoord$$3$$.$getBoundingBox$(), $seriesIndex$$63$$, $groupIndex$$33$$, D.$DvtChartStyleUtils$$.$getColor$($chart$$213$$, $seriesIndex$$63$$, $groupIndex$$33$$));
          (0,D.$DvtChartObjPeer$associate$$)($shape$$15_xValue$$2_yCoord$$3$$, $chart$$213$$, $seriesIndex$$63$$, $groupIndex$$33$$, $dataPos$$2_totalYValue$$);
          $dataItem$$23_markers$$6_parentContainer$$ = [];
          $dataItem$$23_markers$$6_parentContainer$$.push($shape$$15_xValue$$2_yCoord$$3$$);
          $chart$$213$$.$_currentMarkers$.push($dataItem$$23_markers$$6_parentContainer$$)
        }
      }
    }
    !$bStacked$$ && !D.$DvtChartDataUtils$$.$hasMixedFrequency$($chart$$213$$) && ($offset$$17$$ += $barWidth$$4$$)
  }
};
D.$DvtPlotAreaRenderer$$.$_renderLines$ = function $$DvtPlotAreaRenderer$$$$_renderLines$$($chart$$214$$, $container$$68$$, $clipGroup$$1$$, $availSpace$$44$$) {
  for(var $lineSeries$$ = [], $lineIndex_seriesCount$$23$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$214$$), $seriesIndex$$64$$ = 0;$seriesIndex$$64$$ < $lineIndex_seriesCount$$23$$;$seriesIndex$$64$$++) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$214$$, $seriesIndex$$64$$) && "line" == D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$214$$, $seriesIndex$$64$$) && $lineSeries$$.push($seriesIndex$$64$$)
  }
  for($lineIndex_seriesCount$$23$$ = 0;$lineIndex_seriesCount$$23$$ < $lineSeries$$.length;$lineIndex_seriesCount$$23$$++) {
    $seriesIndex$$64$$ = $lineSeries$$[$lineIndex_seriesCount$$23$$], "none" != D.$DvtChartStyleUtils$$.$getLineType$($chart$$214$$, $seriesIndex$$64$$) && (D.$DvtChartTypeUtils$$.$isPolar$($chart$$214$$) || D.$DvtPlotAreaRenderer$$.$_filterPointsForSeries$($chart$$214$$, $seriesIndex$$64$$), D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$214$$, $clipGroup$$1$$, $seriesIndex$$64$$, $availSpace$$44$$))
  }
  for($lineIndex_seriesCount$$23$$ = 0;$lineIndex_seriesCount$$23$$ < $lineSeries$$.length;$lineIndex_seriesCount$$23$$++) {
    D.$DvtPlotAreaRenderer$$.$_renderDataMarkersForSeries$($chart$$214$$, $container$$68$$, $lineSeries$$[$lineIndex_seriesCount$$23$$], $availSpace$$44$$)
  }
};
D.$DvtPlotAreaRenderer$$.$_renderAreas$ = function $$DvtPlotAreaRenderer$$$$_renderAreas$$($chart$$215$$, $container$$69$$, $availSpace$$45$$, $isLineWithArea$$1$$) {
  for(var $bStacked$$1$$ = D.$DvtChartTypeUtils$$.$isStacked$($chart$$215$$), $bPolar$$1$$ = D.$DvtChartTypeUtils$$.$isPolar$($chart$$215$$), $group$$20_seriesType$$6$$ = $isLineWithArea$$1$$ ? "lineWithArea" : "area", $areaSeries$$ = [], $baselineCoord$$1_seriesCount$$24$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$215$$), $seriesIndex$$65$$ = 0;$seriesIndex$$65$$ < $baselineCoord$$1_seriesCount$$24$$;$seriesIndex$$65$$++) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$215$$, $seriesIndex$$65$$) && D.$DvtChartStyleUtils$$.$getSeriesType$($chart$$215$$, $seriesIndex$$65$$) == $group$$20_seriesType$$6$$ && $areaSeries$$.push($seriesIndex$$65$$)
  }
  for(var $group$$20_seriesType$$6$$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$215$$, $container$$69$$, $availSpace$$45$$), $baselineCoord$$1_seriesCount$$24$$ = $chart$$215$$.$yAxis$ ? $chart$$215$$.$yAxis$.$getBaselineCoord$() : $chart$$215$$.$y2Axis$.$getBaselineCoord$(), $prevCoords$$ = [], $i$$313$$ = 0;$i$$313$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$215$$);$i$$313$$++) {
    $prevCoords$$.push(new D.$DvtChartCoord$$(D.$JSCompiler_alias_NULL$$, $baselineCoord$$1_seriesCount$$24$$, $baselineCoord$$1_seriesCount$$24$$, $i$$313$$, D.$DvtChartDataUtils$$.$getGroup$($chart$$215$$, $i$$313$$), D.$JSCompiler_alias_TRUE$$))
  }
  for(var $prevType$$, $rawCoords$$, $borderColor$$9_coords$$5$$, $area$$3_fill$$26$$, $stroke$$36$$, $type$$108$$, $areaIndex$$ = 0;$areaIndex$$ < $areaSeries$$.length;$areaIndex$$++) {
    if($seriesIndex$$65$$ = $areaSeries$$[$areaIndex$$], "none" == D.$DvtChartStyleUtils$$.$getLineType$($chart$$215$$, $seriesIndex$$65$$)) {
      D.$DvtPlotAreaRenderer$$.$_renderDataMarkersForSeries$($chart$$215$$, $container$$69$$, $seriesIndex$$65$$, $availSpace$$45$$)
    }else {
      $area$$3_fill$$26$$ = D.$DvtChartSeriesEffectUtils$$.$getAreaFill$($chart$$215$$, $seriesIndex$$65$$);
      $stroke$$36$$ = ($borderColor$$9_coords$$5$$ = D.$DvtChartStyleUtils$$.$getBorderColor$($chart$$215$$, $seriesIndex$$65$$)) ? new D.$DvtSolidStroke$$($borderColor$$9_coords$$5$$) : D.$JSCompiler_alias_NULL$$;
      $type$$108$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$215$$, $seriesIndex$$65$$);
      $bPolar$$1$$ || D.$DvtPlotAreaRenderer$$.$_filterPointsForSeries$($chart$$215$$, $seriesIndex$$65$$);
      $rawCoords$$ = D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$($chart$$215$$, $seriesIndex$$65$$);
      $borderColor$$9_coords$$5$$ = [];
      for($i$$313$$ = 0;$i$$313$$ < $prevCoords$$.length;$i$$313$$++) {
        $borderColor$$9_coords$$5$$.push($prevCoords$$[$i$$313$$].clone())
      }
      for(var $lastIndex$$1$$ = $rawCoords$$.length - 1, $i$$313$$ = 0;$i$$313$$ < $rawCoords$$.length;$i$$313$$++) {
        if($rawCoords$$[$i$$313$$].x != D.$JSCompiler_alias_NULL$$) {
          var $coord$$ = $borderColor$$9_coords$$5$$[$rawCoords$$[$i$$313$$].$groupIndex$], $prevIndex$$1$$ = $bPolar$$1$$ && 0 == $i$$313$$ ? $lastIndex$$1$$ : $i$$313$$ - 1, $nextIndex$$2$$ = $bPolar$$1$$ && $i$$313$$ == $lastIndex$$1$$ ? 0 : $i$$313$$ + 1;
          0 <= $prevIndex$$1$$ && $rawCoords$$[$prevIndex$$1$$].x != D.$JSCompiler_alias_NULL$$ && ($coord$$.$y1$ = $rawCoords$$[$i$$313$$].$y1$);
          $nextIndex$$2$$ <= $lastIndex$$1$$ && $rawCoords$$[$nextIndex$$2$$].x != D.$JSCompiler_alias_NULL$$ && ($coord$$.$y2$ = $rawCoords$$[$i$$313$$].$y2$);
          $coord$$.x = $rawCoords$$[$i$$313$$].x;
          $coord$$.$filtered$ = $rawCoords$$[$i$$313$$].$filtered$
        }
      }
      $area$$3_fill$$26$$ = new D.$DvtChartLineArea$$($chart$$215$$, D.$JSCompiler_alias_TRUE$$, $availSpace$$45$$, $baselineCoord$$1_seriesCount$$24$$, $area$$3_fill$$26$$, $stroke$$36$$, $type$$108$$, $borderColor$$9_coords$$5$$, $prevType$$, $bStacked$$1$$ && 0 < $areaIndex$$ ? $prevCoords$$ : []);
      $group$$20_seriesType$$6$$.$addChild$($area$$3_fill$$26$$);
      $chart$$215$$.$_currentAreas$.push($area$$3_fill$$26$$);
      (0,D.$DvtChartObjPeer$associate$$)($area$$3_fill$$26$$, $chart$$215$$, $seriesIndex$$65$$);
      $bStacked$$1$$ && ($prevCoords$$ = $borderColor$$9_coords$$5$$, $prevType$$ = $type$$108$$);
      $bStacked$$1$$ || ($isLineWithArea$$1$$ && D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$215$$, $group$$20_seriesType$$6$$, $seriesIndex$$65$$, $availSpace$$45$$), D.$DvtPlotAreaRenderer$$.$_renderDataMarkersForSeries$($chart$$215$$, $container$$69$$, $seriesIndex$$65$$, $availSpace$$45$$), $areaIndex$$ + 1 < $areaSeries$$.length && ($group$$20_seriesType$$6$$ = D.$DvtPlotAreaRenderer$$.$createClippedGroup$($chart$$215$$, $container$$69$$, $availSpace$$45$$)))
    }
  }
  if($bStacked$$1$$) {
    for($areaIndex$$ = 0;$areaIndex$$ < $areaSeries$$.length;$areaIndex$$++) {
      $seriesIndex$$65$$ = $areaSeries$$[$areaIndex$$], "none" != D.$DvtChartStyleUtils$$.$getLineType$($chart$$215$$, $seriesIndex$$65$$) && ($isLineWithArea$$1$$ && D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$($chart$$215$$, $group$$20_seriesType$$6$$, $seriesIndex$$65$$, $availSpace$$45$$), D.$DvtPlotAreaRenderer$$.$_renderDataMarkersForSeries$($chart$$215$$, $container$$69$$, $seriesIndex$$65$$, $availSpace$$45$$))
    }
  }
};
D.$DvtPlotAreaRenderer$$.$_renderLinesForSeries$ = function $$DvtPlotAreaRenderer$$$$_renderLinesForSeries$$($chart$$216$$, $container$$70$$, $seriesIndex$$66$$, $availSpace$$46_line$$8$$) {
  var $color$$30_stroke$$37$$ = D.$DvtChartStyleUtils$$.$getColor$($chart$$216$$, $seriesIndex$$66$$), $lineType$$7$$ = D.$DvtChartStyleUtils$$.$getLineType$($chart$$216$$, $seriesIndex$$66$$), $baseline_lineWidth$$2$$ = D.$DvtChartStyleUtils$$.$getLineWidth$($chart$$216$$, $seriesIndex$$66$$), $coords$$6_lineStyle$$ = (0,D.$DvtStroke$convertTypeString$$)(D.$DvtChartStyleUtils$$.$getLineStyle$($chart$$216$$, $seriesIndex$$66$$)), $color$$30_stroke$$37$$ = new D.$DvtSolidStroke$$($color$$30_stroke$$37$$, 
  1, $baseline_lineWidth$$2$$);
  $color$$30_stroke$$37$$.$setStyle$($coords$$6_lineStyle$$);
  $coords$$6_lineStyle$$ = D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$($chart$$216$$, $seriesIndex$$66$$);
  $baseline_lineWidth$$2$$ = D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$216$$, $seriesIndex$$66$$) ? $chart$$216$$.$y2Axis$.$getBaselineCoord$() : $chart$$216$$.$yAxis$.$getBaselineCoord$();
  $availSpace$$46_line$$8$$ = new D.$DvtChartLineArea$$($chart$$216$$, D.$JSCompiler_alias_FALSE$$, $availSpace$$46_line$$8$$, $baseline_lineWidth$$2$$, D.$JSCompiler_alias_NULL$$, $color$$30_stroke$$37$$, $lineType$$7$$, $coords$$6_lineStyle$$);
  $container$$70$$.$addChild$($availSpace$$46_line$$8$$);
  (0,D.$DvtChartObjPeer$associate$$)($availSpace$$46_line$$8$$, $chart$$216$$, $seriesIndex$$66$$)
};
D.$DvtPlotAreaRenderer$$.$_filterPointsForSeries$ = function $$DvtPlotAreaRenderer$$$$_filterPointsForSeries$$($chart$$217$$, $seriesIndex$$67$$) {
  var $maxNumPts_setSize$$ = $chart$$217$$.$_plotAreaSpace$.$w$, $seriesItems$$2$$ = D.$DvtChartDataUtils$$.$getSeriesItem$($chart$$217$$, $seriesIndex$$67$$).items, $maxNumPts_setSize$$ = window.Math.round(2 * ($seriesItems$$2$$.length / (($chart$$217$$.$xAxis$.$getDataMax$() - $chart$$217$$.$xAxis$.$getDataMin$()) / ($chart$$217$$.$xAxis$.$getViewportMax$() - $chart$$217$$.$xAxis$.$getViewportMin$()))) / $maxNumPts_setSize$$);
  if(2 >= $maxNumPts_setSize$$) {
    for(var $i$$314$$ = 0;$i$$314$$ < $seriesItems$$2$$.length;$i$$314$$++) {
      ($dataItem$$24$$ = $seriesItems$$2$$[$i$$314$$]) && ($dataItem$$24$$._filtered = D.$JSCompiler_alias_FALSE$$)
    }
  }else {
    for(var $maxIndex$$, $maxValue$$6$$, $minIndex$$, $minValue$$6$$, $dataItem$$24$$, $dataValue$$1$$, $i$$314$$ = 0;$i$$314$$ < $seriesItems$$2$$.length;$i$$314$$ += $maxNumPts_setSize$$) {
      $maxIndex$$ = -1;
      $maxValue$$6$$ = -window.Infinity;
      $minIndex$$ = -1;
      $minValue$$6$$ = window.Infinity;
      for(var $j$$64$$ = $i$$314$$;$j$$64$$ < window.Math.min($i$$314$$ + $maxNumPts_setSize$$, $seriesItems$$2$$.length);$j$$64$$++) {
        $dataValue$$1$$ = D.$DvtChartDataUtils$$.getValue($chart$$217$$, $seriesIndex$$67$$, $j$$64$$), $dataItem$$24$$ = $seriesItems$$2$$[$j$$64$$], $dataValue$$1$$ == D.$JSCompiler_alias_NULL$$ || $dataItem$$24$$ == D.$JSCompiler_alias_NULL$$ || ($dataValue$$1$$ > $maxValue$$6$$ && ($maxIndex$$ = $j$$64$$, $maxValue$$6$$ = $dataValue$$1$$), $dataValue$$1$$ < $minValue$$6$$ && ($minIndex$$ = $j$$64$$, $minValue$$6$$ = $dataValue$$1$$), $dataItem$$24$$._filtered = D.$JSCompiler_alias_TRUE$$)
      }
      for($j$$64$$ = $i$$314$$;$j$$64$$ < window.Math.min($i$$314$$ + $maxNumPts_setSize$$, $seriesItems$$2$$.length);$j$$64$$++) {
        if($dataItem$$24$$ = $seriesItems$$2$$[$j$$64$$], $dataItem$$24$$ != D.$JSCompiler_alias_NULL$$ && ($j$$64$$ == $maxIndex$$ || $j$$64$$ == $minIndex$$)) {
          $dataItem$$24$$._filtered = D.$JSCompiler_alias_FALSE$$
        }
      }
    }
  }
};
D.$DvtPlotAreaRenderer$$.$_isDataItemFiltered$ = function $$DvtPlotAreaRenderer$$$$_isDataItemFiltered$$($chart$$218_dataItem$$25$$, $seriesIndex$$68$$, $groupIndex$$34$$) {
  return($chart$$218_dataItem$$25$$ = D.$DvtChartDataUtils$$.$getDataItem$($chart$$218_dataItem$$25$$, $seriesIndex$$68$$, $groupIndex$$34$$)) && $chart$$218_dataItem$$25$$._filtered ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtPlotAreaRenderer$$.$_getCoordsForSeries$ = function $$DvtPlotAreaRenderer$$$$_getCoordsForSeries$$($chart$$219$$, $seriesIndex$$69$$) {
  var $xAxis$$3$$ = $chart$$219$$.$xAxis$, $yAxis$$2$$ = $chart$$219$$.$yAxis$;
  D.$DvtChartDataUtils$$.$isAssignedToY2$($chart$$219$$, $seriesIndex$$69$$) && ($yAxis$$2$$ = $chart$$219$$.$y2Axis$);
  for(var $coords$$7$$ = [], $groupIndex$$35$$ = 0;$groupIndex$$35$$ < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$219$$);$groupIndex$$35$$++) {
    var $dataValue$$2_yCoord$$4_yValue$$3$$ = D.$DvtChartDataUtils$$.getValue($chart$$219$$, $seriesIndex$$69$$, $groupIndex$$35$$), $coord$$1_group$$21$$ = D.$DvtChartDataUtils$$.$getGroup$($chart$$219$$, $groupIndex$$35$$);
    if($dataValue$$2_yCoord$$4_yValue$$3$$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($dataValue$$2_yCoord$$4_yValue$$3$$)) {
      $coords$$7$$.push(new D.$DvtChartCoord$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $groupIndex$$35$$, $coord$$1_group$$21$$, D.$JSCompiler_alias_FALSE$$))
    }else {
      var $xCoord$$5_xValue$$3$$ = D.$DvtChartDataUtils$$.$getXValue$($chart$$219$$, $seriesIndex$$69$$, $groupIndex$$35$$), $dataValue$$2_yCoord$$4_yValue$$3$$ = D.$DvtChartDataUtils$$.$getCumulativeValue$($chart$$219$$, $seriesIndex$$69$$, $groupIndex$$35$$);
      D.$DvtChartTypeUtils$$.$isPolar$($chart$$219$$) && ($dataValue$$2_yCoord$$4_yValue$$3$$ = window.Math.max($dataValue$$2_yCoord$$4_yValue$$3$$, $yAxis$$2$$.$getViewportMin$()));
      $xCoord$$5_xValue$$3$$ = $xAxis$$3$$.$getUnboundedCoordAt$($xCoord$$5_xValue$$3$$);
      $dataValue$$2_yCoord$$4_yValue$$3$$ = $yAxis$$2$$.$getUnboundedCoordAt$($dataValue$$2_yCoord$$4_yValue$$3$$);
      $coord$$1_group$$21$$ = new D.$DvtChartCoord$$($xCoord$$5_xValue$$3$$, $dataValue$$2_yCoord$$4_yValue$$3$$, $dataValue$$2_yCoord$$4_yValue$$3$$, $groupIndex$$35$$, $coord$$1_group$$21$$, D.$DvtPlotAreaRenderer$$.$_isDataItemFiltered$($chart$$219$$, $seriesIndex$$69$$, $groupIndex$$35$$));
      $coords$$7$$.push($coord$$1_group$$21$$)
    }
  }
  return $coords$$7$$
};
D.$DvtPlotAreaRenderer$$.$createClippedGroup$ = function $$DvtPlotAreaRenderer$$$$createClippedGroup$$($chart$$220_obj$$inline_3494_r$$inline_3499$$, $clip_container$$71$$, $availSpace$$48_cy$$16$$) {
  var $clipGroup$$2$$ = new D.$DvtContainer$$($clip_container$$71$$.$_context$);
  $clip_container$$71$$.$addChild$($clipGroup$$2$$);
  $clip_container$$71$$ = new D.$DvtClipPath$$($chart$$220_obj$$inline_3494_r$$inline_3499$$.getId());
  if(D.$DvtChartTypeUtils$$.$isPolar$($chart$$220_obj$$inline_3494_r$$inline_3499$$)) {
    var $cx$$16_points$$33$$ = $availSpace$$48_cy$$16$$.x + $availSpace$$48_cy$$16$$.$w$ / 2;
    $availSpace$$48_cy$$16$$ = $availSpace$$48_cy$$16$$.y + $availSpace$$48_cy$$16$$.$h$ / 2;
    if(D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$220_obj$$inline_3494_r$$inline_3499$$)) {
      $cx$$16_points$$33$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($cx$$16_points$$33$$, $availSpace$$48_cy$$16$$, D.$DvtChartDataUtils$$.$getGroupCount$($chart$$220_obj$$inline_3494_r$$inline_3499$$), $chart$$220_obj$$inline_3494_r$$inline_3499$$.$getRadius$()), $chart$$220_obj$$inline_3494_r$$inline_3499$$ = {type:3}, $chart$$220_obj$$inline_3494_r$$inline_3499$$.$points$ = $cx$$16_points$$33$$, $chart$$220_obj$$inline_3494_r$$inline_3499$$ && $clip_container$$71$$.$_regions$.push($chart$$220_obj$$inline_3494_r$$inline_3499$$)
    }else {
      $chart$$220_obj$$inline_3494_r$$inline_3499$$ = $chart$$220_obj$$inline_3494_r$$inline_3499$$.$getRadius$();
      var $obj$$inline_3500$$ = {type:5};
      $obj$$inline_3500$$.$cx$ = $cx$$16_points$$33$$;
      $obj$$inline_3500$$.$cy$ = $availSpace$$48_cy$$16$$;
      $obj$$inline_3500$$.$r$ = $chart$$220_obj$$inline_3494_r$$inline_3499$$;
      $obj$$inline_3500$$ && $clip_container$$71$$.$_regions$.push($obj$$inline_3500$$)
    }
  }else {
    (0,D.$JSCompiler_StaticMethods_addRect$$)($clip_container$$71$$, $availSpace$$48_cy$$16$$.x, $availSpace$$48_cy$$16$$.y, $availSpace$$48_cy$$16$$.$w$, $availSpace$$48_cy$$16$$.$h$)
  }
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)($clipGroup$$2$$, $clip_container$$71$$);
  return $clipGroup$$2$$
};
D.$DvtPlotAreaRenderer$$.$polarToCartesian$ = function $$DvtPlotAreaRenderer$$$$polarToCartesian$$($r$$16$$, $theta$$, $availSpace$$49$$) {
  window.x = $availSpace$$49$$.x + $availSpace$$49$$.$w$ / 2 + $r$$16$$ * window.Math.sin($theta$$);
  window.y = $availSpace$$49$$.y + $availSpace$$49$$.$h$ / 2 - $r$$16$$ * window.Math.cos($theta$$);
  return new D.$DvtPoint$$(window.x, window.y)
};
D.$DvtFunnelRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtFunnelRenderer$$, D.$DvtObj$$, "DvtFunnelRenderer");
D.$DvtFunnelRenderer$$.$_DEFAULT_3D_GAP_RATIO$ = 1 / 36;
D.$DvtFunnelRenderer$$.$_DEFAULT_2D_GAP_RATIO$ = 1 / 60;
D.$DvtFunnelRenderer$$.$_DEFAULT_NO_GAP_RATIO$ = 1 / 360;
D.$DvtFunnelRenderer$$.$_MAX_WIDTH_FOR_GAPS$ = 0.25;
D.$DvtFunnelRenderer$$.$_GROUP_INDEX$ = 0;
D.$DvtFunnelRenderer$$.$render$ = function $$DvtFunnelRenderer$$$$render$$($chart$$186$$, $container$$44_selected$$19$$, $availSpace$$19$$) {
  var $funnelContainer$$ = new D.$DvtContainer$$($chart$$186$$.$_context$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($funnelContainer$$, $availSpace$$19$$.x, $availSpace$$19$$.y);
  $container$$44_selected$$19$$.$addChild$($funnelContainer$$);
  $chart$$186$$.$_funnelContainer$ = $funnelContainer$$;
  var $bbox$$2$$;
  if("horizontal" == $chart$$186$$.$getOptions$().orientation) {
    $bbox$$2$$ = new D.$DvtRectangle$$(0, 0, $availSpace$$19$$.$w$, $availSpace$$19$$.$h$)
  }else {
    var $rotationMatrix$$ = new D.$DvtMatrix$$;
    (0,D.$DvtAgent$isRightToLeft$$)($chart$$186$$.$_context$) ? ($rotationMatrix$$.translate($availSpace$$19$$.y - $availSpace$$19$$.$h$ / 2, $availSpace$$19$$.y - $availSpace$$19$$.$w$ / 2), $rotationMatrix$$.rotate(-window.Math.PI / 2), $rotationMatrix$$.translate($availSpace$$19$$.x + $availSpace$$19$$.$w$ / 2, $availSpace$$19$$.x + $availSpace$$19$$.$h$ / 2)) : ($rotationMatrix$$.translate(-$availSpace$$19$$.$h$ / 2, -$availSpace$$19$$.$w$ / 2), $rotationMatrix$$.rotate(window.Math.PI / 2), $rotationMatrix$$.translate($availSpace$$19$$.$w$ / 
    2, $availSpace$$19$$.y + $availSpace$$19$$.$h$ / 2));
    $bbox$$2$$ = new D.$DvtRectangle$$(0, 0, $availSpace$$19$$.$h$, $availSpace$$19$$.$w$);
    $funnelContainer$$.$setMatrix$($rotationMatrix$$)
  }
  D.$DvtFunnelRenderer$$.$_renderFunnelSlices$($chart$$186$$, $funnelContainer$$, $bbox$$2$$) || D.$DvtChartRenderer$$.$renderEmptyText$($chart$$186$$, $container$$44_selected$$19$$, $availSpace$$19$$);
  $container$$44_selected$$19$$ = D.$DvtChartDataUtils$$.$getInitialSelection$($chart$$186$$);
  D.$DvtChartEventUtils$$.$setInitialSelection$($chart$$186$$, $container$$44_selected$$19$$)
};
D.$DvtFunnelRenderer$$.$_renderFunnelSlices$ = function $$DvtFunnelRenderer$$$$_renderFunnelSlices$$($chart$$187$$, $container$$45$$, $availSpace$$20$$) {
  for(var $options$$112_totalValue$$1$$ = $chart$$187$$.$getOptions$(), $seriesCount$$20_slice$$17_targetValue$$ = D.$DvtChartDataUtils$$.$getSeriesCount$($chart$$187$$), $gapSize$$ = "on" == $options$$112_totalValue$$1$$.styleDefaults.threeDEffect ? D.$DvtFunnelRenderer$$.$_DEFAULT_3D_GAP_RATIO$ * $availSpace$$20$$.$w$ : D.$DvtFunnelRenderer$$.$_DEFAULT_2D_GAP_RATIO$ * $availSpace$$20$$.$w$, $gapSize$$ = "on" == $options$$112_totalValue$$1$$.styleDefaults.funnelSliceGaps ? window.Math.min(D.$DvtFunnelRenderer$$.$_MAX_WIDTH_FOR_GAPS$ * 
  $availSpace$$20$$.$w$ / ($seriesCount$$20_slice$$17_targetValue$$ - 1), $gapSize$$) : D.$DvtFunnelRenderer$$.$_DEFAULT_NO_GAP_RATIO$ * $availSpace$$20$$.$w$, $numDrawnSeries$$ = $options$$112_totalValue$$1$$ = 0, $cumulativeValue$$ = 0, $seriesIndex$$58$$ = 0;$seriesIndex$$58$$ < $seriesCount$$20_slice$$17_targetValue$$;$seriesIndex$$58$$++) {
    if(D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$187$$, $seriesIndex$$58$$)) {
      var $value$$78$$ = D.$DvtChartDataUtils$$.$getTargetValue$($chart$$187$$, $seriesIndex$$58$$);
      $value$$78$$ == D.$JSCompiler_alias_NULL$$ && ($value$$78$$ = D.$DvtChartDataUtils$$.getValue($chart$$187$$, $seriesIndex$$58$$, D.$DvtFunnelRenderer$$.$_GROUP_INDEX$));
      0 >= $value$$78$$ || ($options$$112_totalValue$$1$$ += $value$$78$$)
    }
  }
  if(0 == $options$$112_totalValue$$1$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for($seriesIndex$$58$$ = $seriesCount$$20_slice$$17_targetValue$$ - 1;0 <= $seriesIndex$$58$$;$seriesIndex$$58$$--) {
    D.$DvtChartStyleUtils$$.$isSeriesRendered$($chart$$187$$, $seriesIndex$$58$$) && ($value$$78$$ = D.$DvtChartDataUtils$$.getValue($chart$$187$$, $seriesIndex$$58$$, D.$DvtFunnelRenderer$$.$_GROUP_INDEX$), $seriesCount$$20_slice$$17_targetValue$$ = D.$DvtChartDataUtils$$.$getTargetValue$($chart$$187$$, $seriesIndex$$58$$), 0 >= $value$$78$$ && $seriesCount$$20_slice$$17_targetValue$$ == D.$JSCompiler_alias_NULL$$ || $seriesCount$$20_slice$$17_targetValue$$ != D.$JSCompiler_alias_NULL$$ && 0 >= 
    $seriesCount$$20_slice$$17_targetValue$$ || ($seriesCount$$20_slice$$17_targetValue$$ != D.$JSCompiler_alias_NULL$$ ? ($cumulativeValue$$ += $seriesCount$$20_slice$$17_targetValue$$ / $options$$112_totalValue$$1$$, $seriesCount$$20_slice$$17_targetValue$$ = new D.$DvtFunnelSlice$$($chart$$187$$, $seriesIndex$$58$$, $numDrawnSeries$$, $availSpace$$20$$.$w$, $availSpace$$20$$.$h$, 1 - $cumulativeValue$$, $seriesCount$$20_slice$$17_targetValue$$ / $options$$112_totalValue$$1$$, $value$$78$$ / $seriesCount$$20_slice$$17_targetValue$$, 
    $gapSize$$)) : ($cumulativeValue$$ += $value$$78$$ / $options$$112_totalValue$$1$$, $seriesCount$$20_slice$$17_targetValue$$ = new D.$DvtFunnelSlice$$($chart$$187$$, $seriesIndex$$58$$, $numDrawnSeries$$, $availSpace$$20$$.$w$, $availSpace$$20$$.$h$, 1 - $cumulativeValue$$, $value$$78$$ / $options$$112_totalValue$$1$$, D.$JSCompiler_alias_NULL$$, $gapSize$$)), $numDrawnSeries$$++, $container$$45$$.$addChild$($seriesCount$$20_slice$$17_targetValue$$), (0,D.$DvtChartObjPeer$associate$$)($seriesCount$$20_slice$$17_targetValue$$, 
    $chart$$187$$, $seriesIndex$$58$$, D.$DvtFunnelRenderer$$.$_GROUP_INDEX$)))
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtRefObjRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtRefObjRenderer$$, D.$DvtObj$$, "DvtRefObjRenderer");
D.$DvtRefObjRenderer$$.$renderBackgroundObjects$ = function $$DvtRefObjRenderer$$$$renderBackgroundObjects$$($chart$$172$$, $plotAreaBounds$$1$$) {
  D.$DvtRefObjRenderer$$.$_renderObjects$($chart$$172$$, $plotAreaBounds$$1$$, "back")
};
D.$DvtRefObjRenderer$$.$renderForegroundObjects$ = function $$DvtRefObjRenderer$$$$renderForegroundObjects$$($chart$$173$$, $plotAreaBounds$$2$$) {
  D.$DvtRefObjRenderer$$.$_renderObjects$($chart$$173$$, $plotAreaBounds$$2$$, "front")
};
D.$DvtRefObjRenderer$$.$_renderObjects$ = function $$DvtRefObjRenderer$$$$_renderObjects$$($chart$$174$$, $plotAreaBounds$$3$$, $location$$22$$) {
  var $container$$41$$ = window.clipGroup;
  D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$($chart$$174$$, $container$$41$$, $plotAreaBounds$$3$$, $location$$22$$, $chart$$174$$.$xAxis$, D.$DvtChartRefObjUtils$$.$getXAxisObjects$($chart$$174$$));
  D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$($chart$$174$$, $container$$41$$, $plotAreaBounds$$3$$, $location$$22$$, $chart$$174$$.$yAxis$, D.$DvtChartRefObjUtils$$.$getYAxisObjects$($chart$$174$$));
  D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$($chart$$174$$, $container$$41$$, $plotAreaBounds$$3$$, $location$$22$$, $chart$$174$$.$y2Axis$, D.$DvtChartRefObjUtils$$.$getY2AxisObjects$($chart$$174$$))
};
D.$DvtRefObjRenderer$$.$_renderObjectsForAxis$ = function $$DvtRefObjRenderer$$$$_renderObjectsForAxis$$($chart$$175$$, $container$$42$$, $plotAreaBounds$$4$$, $location$$23$$, $axis$$11$$, $objects$$4$$) {
  if($objects$$4$$ && $axis$$11$$) {
    for(var $i$$306$$ = 0;$i$$306$$ < $objects$$4$$.length;$i$$306$$++) {
      var $refObj$$7_tooltip$$11$$ = $objects$$4$$[$i$$306$$];
      if($refObj$$7_tooltip$$11$$ && D.$DvtChartRefObjUtils$$.$getLocation$($refObj$$7_tooltip$$11$$) == $location$$23$$) {
        var $shape$$11$$, $type$$106$$ = D.$DvtChartRefObjUtils$$.$getType$($refObj$$7_tooltip$$11$$);
        "area" == $type$$106$$ ? $shape$$11$$ = D.$DvtRefObjRenderer$$.$_createReferenceArea$($refObj$$7_tooltip$$11$$, $chart$$175$$, $plotAreaBounds$$4$$, $axis$$11$$) : "line" == $type$$106$$ && ($shape$$11$$ = D.$DvtRefObjRenderer$$.$_createReferenceLine$($refObj$$7_tooltip$$11$$, $chart$$175$$, $plotAreaBounds$$4$$, $axis$$11$$));
        $shape$$11$$ != D.$JSCompiler_alias_NULL$$ && ($refObj$$7_tooltip$$11$$ = D.$DvtChartTooltipUtils$$.$getRefObjTooltip$($refObj$$7_tooltip$$11$$), $chart$$175$$.$getEventManager$().$associate$($shape$$11$$, new D.$DvtSimpleObjPeer$$($refObj$$7_tooltip$$11$$)), $container$$42$$.$addChild$($shape$$11$$), (0,D.$JSCompiler_StaticMethods_setAriaRole$$)($shape$$11$$, "img"), (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($shape$$11$$, "label", $refObj$$7_tooltip$$11$$))
      }
    }
  }
};
D.$DvtRefObjRenderer$$.$_createReferenceArea$ = function $$DvtRefObjRenderer$$$$_createReferenceArea$$($cy$$13_lowCoords_refObj$$8$$, $chart$$176_outerPoints_radius$$11$$, $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$, $axis$$12_highCoord$$) {
  var $context$$134_items$$15$$ = $chart$$176_outerPoints_radius$$11$$.$_context$, $color$$28_position$$8$$ = $axis$$12_highCoord$$.$getPosition$(), $bHoriz$$6_cx$$13_highCoords$$ = "top" == $color$$28_position$$8$$ || "bottom" == $color$$28_position$$8$$, $bRadial_pLow_pointIndex$$ = "radial" == $color$$28_position$$8$$, $color$$28_position$$8$$ = D.$DvtChartRefObjUtils$$.$getColor$($cy$$13_lowCoords_refObj$$8$$), $lineType$$4_lowCoord$$ = D.$DvtChartRefObjUtils$$.$getLineType$($cy$$13_lowCoords_refObj$$8$$);
  if($cy$$13_lowCoords_refObj$$8$$.items != D.$JSCompiler_alias_NULL$$ && $axis$$12_highCoord$$ == $chart$$176_outerPoints_radius$$11$$.$yAxis$) {
    $context$$134_items$$15$$ = $cy$$13_lowCoords_refObj$$8$$.items;
    $bHoriz$$6_cx$$13_highCoords$$ = [];
    $cy$$13_lowCoords_refObj$$8$$ = [];
    if((0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($chart$$176_outerPoints_radius$$11$$.$xAxis$)) {
      for(;$context$$134_items$$15$$.length < D.$DvtChartDataUtils$$.$getGroupCount$($chart$$176_outerPoints_radius$$11$$);) {
        $context$$134_items$$15$$.push(D.$JSCompiler_alias_NULL$$)
      }
    }
    for($bRadial_pLow_pointIndex$$ = 0;$bRadial_pLow_pointIndex$$ < $context$$134_items$$15$$.length;$bRadial_pLow_pointIndex$$++) {
      var $dataItem$$20_hCoord$$ = $context$$134_items$$15$$[$bRadial_pLow_pointIndex$$];
      if($dataItem$$20_hCoord$$ == D.$JSCompiler_alias_NULL$$ || $dataItem$$20_hCoord$$.min == D.$JSCompiler_alias_NULL$$ || $dataItem$$20_hCoord$$.max == D.$JSCompiler_alias_NULL$$) {
        $bHoriz$$6_cx$$13_highCoords$$.push(new D.$DvtChartCoord$$), $cy$$13_lowCoords_refObj$$8$$.push(new D.$DvtChartCoord$$)
      }else {
        var $lCoord$$ = $axis$$12_highCoord$$.$getUnboundedCoordAt$($dataItem$$20_hCoord$$.min), $dataItem$$20_hCoord$$ = $axis$$12_highCoord$$.$getUnboundedCoordAt$($dataItem$$20_hCoord$$.max), $xCoord$$1$$ = $chart$$176_outerPoints_radius$$11$$.$xAxis$.$getUnboundedCoordAt$(D.$DvtRefObjRenderer$$.$_getXValue$($context$$134_items$$15$$, $bRadial_pLow_pointIndex$$, $chart$$176_outerPoints_radius$$11$$));
        $bHoriz$$6_cx$$13_highCoords$$.push(new D.$DvtChartCoord$$($xCoord$$1$$, $dataItem$$20_hCoord$$, $dataItem$$20_hCoord$$));
        $cy$$13_lowCoords_refObj$$8$$.push(new D.$DvtChartCoord$$($xCoord$$1$$, $lCoord$$, $lCoord$$))
      }
    }
    $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$ = new D.$DvtChartLineArea$$($chart$$176_outerPoints_radius$$11$$, D.$JSCompiler_alias_TRUE$$, $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$, D.$JSCompiler_alias_NULL$$, new D.$DvtSolidFill$$($color$$28_position$$8$$), D.$JSCompiler_alias_NULL$$, $lineType$$4_lowCoord$$, $bHoriz$$6_cx$$13_highCoords$$, $lineType$$4_lowCoord$$, $cy$$13_lowCoords_refObj$$8$$)
  }else {
    if($cy$$13_lowCoords_refObj$$8$$.min == D.$JSCompiler_alias_NULL$$ || -window.Infinity == $cy$$13_lowCoords_refObj$$8$$.min) {
      $cy$$13_lowCoords_refObj$$8$$.min = $axis$$12_highCoord$$.$getGlobalMin$()
    }
    if($cy$$13_lowCoords_refObj$$8$$.max == D.$JSCompiler_alias_NULL$$ || window.Infinity == $cy$$13_lowCoords_refObj$$8$$.max) {
      $cy$$13_lowCoords_refObj$$8$$.max = $axis$$12_highCoord$$.$getGlobalMax$()
    }
    $lineType$$4_lowCoord$$ = D.$DvtRefObjRenderer$$.$_getAxisCoord$($chart$$176_outerPoints_radius$$11$$, $axis$$12_highCoord$$, $cy$$13_lowCoords_refObj$$8$$.min);
    $axis$$12_highCoord$$ = D.$DvtRefObjRenderer$$.$_getAxisCoord$($chart$$176_outerPoints_radius$$11$$, $axis$$12_highCoord$$, $cy$$13_lowCoords_refObj$$8$$.max);
    D.$DvtChartTypeUtils$$.$isPolar$($chart$$176_outerPoints_radius$$11$$) ? ($bHoriz$$6_cx$$13_highCoords$$ = $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$.x + $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$.$w$ / 2, $cy$$13_lowCoords_refObj$$8$$ = $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$.y + $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$.$h$ / 2, $bRadial_pLow_pointIndex$$ ? D.$DvtChartAxisUtils$$.$isGridPolygonal$($chart$$176_outerPoints_radius$$11$$) ? 
    ($cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$ = D.$DvtChartDataUtils$$.$getGroupCount$($chart$$176_outerPoints_radius$$11$$), $chart$$176_outerPoints_radius$$11$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($bHoriz$$6_cx$$13_highCoords$$, $cy$$13_lowCoords_refObj$$8$$, $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$, $axis$$12_highCoord$$, 1), $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($bHoriz$$6_cx$$13_highCoords$$, 
    $cy$$13_lowCoords_refObj$$8$$, $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$, $lineType$$4_lowCoord$$, 0), $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$ = window.DvtPathUtils.$polyline$($chart$$176_outerPoints_radius$$11$$) + window.DvtPathUtils.$polyline$($cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$) + window.DvtPathUtils.closePath()) : $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$ = window.DvtPathUtils.moveTo($bHoriz$$6_cx$$13_highCoords$$, 
    $cy$$13_lowCoords_refObj$$8$$ - $axis$$12_highCoord$$) + window.DvtPathUtils.arcTo($axis$$12_highCoord$$, $axis$$12_highCoord$$, window.Math.PI, 1, $bHoriz$$6_cx$$13_highCoords$$, $cy$$13_lowCoords_refObj$$8$$ + $axis$$12_highCoord$$) + window.DvtPathUtils.arcTo($axis$$12_highCoord$$, $axis$$12_highCoord$$, window.Math.PI, 1, $bHoriz$$6_cx$$13_highCoords$$, $cy$$13_lowCoords_refObj$$8$$ - $axis$$12_highCoord$$) + window.DvtPathUtils.moveTo($bHoriz$$6_cx$$13_highCoords$$, $cy$$13_lowCoords_refObj$$8$$ - 
    $lineType$$4_lowCoord$$) + window.DvtPathUtils.arcTo($lineType$$4_lowCoord$$, $lineType$$4_lowCoord$$, window.Math.PI, 0, $bHoriz$$6_cx$$13_highCoords$$, $cy$$13_lowCoords_refObj$$8$$ + $lineType$$4_lowCoord$$) + window.DvtPathUtils.arcTo($lineType$$4_lowCoord$$, $lineType$$4_lowCoord$$, window.Math.PI, 0, $bHoriz$$6_cx$$13_highCoords$$, $cy$$13_lowCoords_refObj$$8$$ - $lineType$$4_lowCoord$$) + window.DvtPathUtils.closePath() : ($chart$$176_outerPoints_radius$$11$$ = $chart$$176_outerPoints_radius$$11$$.$getRadius$(), 
    $bRadial_pLow_pointIndex$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($chart$$176_outerPoints_radius$$11$$, $lineType$$4_lowCoord$$, $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$), $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($chart$$176_outerPoints_radius$$11$$, $axis$$12_highCoord$$, $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$), $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$ = 
    window.DvtPathUtils.moveTo($bHoriz$$6_cx$$13_highCoords$$, $cy$$13_lowCoords_refObj$$8$$) + window.DvtPathUtils.lineTo($bRadial_pLow_pointIndex$$.x, $bRadial_pLow_pointIndex$$.y) + window.DvtPathUtils.arcTo($chart$$176_outerPoints_radius$$11$$, $chart$$176_outerPoints_radius$$11$$, $axis$$12_highCoord$$ - $lineType$$4_lowCoord$$, 1, $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$.x, $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$.y) + window.DvtPathUtils.lineTo($cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$.x, 
    $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$.y) + window.DvtPathUtils.closePath()), $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$ = new D.$DvtPath$$($context$$134_items$$15$$, $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$)) : $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$ = new D.$DvtPolygon$$($context$$134_items$$15$$, $bHoriz$$6_cx$$13_highCoords$$ ? [$lineType$$4_lowCoord$$, 0, $axis$$12_highCoord$$, 0, $axis$$12_highCoord$$, 
    $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$.$h$, $lineType$$4_lowCoord$$, $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$.$h$] : [0, $lineType$$4_lowCoord$$, 0, $axis$$12_highCoord$$, $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$.$w$, $axis$$12_highCoord$$, $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$.$w$, $lineType$$4_lowCoord$$]);
    $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$.$setSolidFill$($color$$28_position$$8$$)
  }
  return $cmds$$2_innerPoints_nSides_pHigh_plotAreaBounds$$5_shape$$12$$
};
D.$DvtRefObjRenderer$$.$_createReferenceLine$ = function $$DvtRefObjRenderer$$$$_createReferenceLine$$($lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$, $cartesian_chart$$177_shape$$13$$, $plotAreaBounds$$6$$, $axis$$13_cx$$14$$) {
  var $lineWidth$$1_position$$9_stroke$$34$$ = $axis$$13_cx$$14$$.$getPosition$(), $bHoriz$$7_items$$16$$ = "top" == $lineWidth$$1_position$$9_stroke$$34$$ || "bottom" == $lineWidth$$1_position$$9_stroke$$34$$, $bRadial$$1_coords$$4_points$$31$$ = "radial" == $lineWidth$$1_position$$9_stroke$$34$$, $bTangential_pointIndex$$1$$ = "tangential" == $lineWidth$$1_position$$9_stroke$$34$$, $lineWidth$$1_position$$9_stroke$$34$$ = D.$DvtChartRefObjUtils$$.$getLineWidth$($lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$), 
  $cy$$14_lineType$$5$$ = D.$DvtChartRefObjUtils$$.$getLineType$($lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$), $color$$29_context$$135_dataItem$$21_yCoord$$1$$ = D.$DvtChartRefObjUtils$$.$getColor$($lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$), $lineWidth$$1_position$$9_stroke$$34$$ = new D.$DvtSolidStroke$$($color$$29_context$$135_dataItem$$21_yCoord$$1$$, 1, $lineWidth$$1_position$$9_stroke$$34$$);
  $lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$.lineStyle && $lineWidth$$1_position$$9_stroke$$34$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$.lineStyle));
  $color$$29_context$$135_dataItem$$21_yCoord$$1$$ = $cartesian_chart$$177_shape$$13$$.$_context$;
  if($lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$.items != D.$JSCompiler_alias_NULL$$ && $axis$$13_cx$$14$$ == $cartesian_chart$$177_shape$$13$$.$yAxis$) {
    $bHoriz$$7_items$$16$$ = $lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$.items;
    $bRadial$$1_coords$$4_points$$31$$ = [];
    if((0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($cartesian_chart$$177_shape$$13$$.$xAxis$)) {
      for(;$bHoriz$$7_items$$16$$.length < D.$DvtChartDataUtils$$.$getGroupCount$($cartesian_chart$$177_shape$$13$$);) {
        $bHoriz$$7_items$$16$$.push(D.$JSCompiler_alias_NULL$$)
      }
    }
    $bRadial$$1_coords$$4_points$$31$$ = [];
    for($bTangential_pointIndex$$1$$ = 0;$bTangential_pointIndex$$1$$ < $bHoriz$$7_items$$16$$.length;$bTangential_pointIndex$$1$$++) {
      $color$$29_context$$135_dataItem$$21_yCoord$$1$$ = $bHoriz$$7_items$$16$$[$bTangential_pointIndex$$1$$], $lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$ = D.$JSCompiler_alias_NULL$$, $color$$29_context$$135_dataItem$$21_yCoord$$1$$ != D.$JSCompiler_alias_NULL$$ && ((0,window.isNaN)($color$$29_context$$135_dataItem$$21_yCoord$$1$$) ? $color$$29_context$$135_dataItem$$21_yCoord$$1$$.value != D.$JSCompiler_alias_NULL$$ && ($lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$ = $color$$29_context$$135_dataItem$$21_yCoord$$1$$.value) : 
      $lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$ = $color$$29_context$$135_dataItem$$21_yCoord$$1$$), $lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$ == D.$JSCompiler_alias_NULL$$ ? $bRadial$$1_coords$$4_points$$31$$.push(new D.$DvtChartCoord$$) : ($color$$29_context$$135_dataItem$$21_yCoord$$1$$ = $axis$$13_cx$$14$$.$getUnboundedCoordAt$($lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$), $lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$ = $cartesian_chart$$177_shape$$13$$.$xAxis$.$getUnboundedCoordAt$(D.$DvtRefObjRenderer$$.$_getXValue$($bHoriz$$7_items$$16$$, 
      $bTangential_pointIndex$$1$$, $cartesian_chart$$177_shape$$13$$)), $bRadial$$1_coords$$4_points$$31$$.push(new D.$DvtChartCoord$$($lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$, $color$$29_context$$135_dataItem$$21_yCoord$$1$$, $color$$29_context$$135_dataItem$$21_yCoord$$1$$)))
    }
    $cartesian_chart$$177_shape$$13$$ = new D.$DvtChartLineArea$$($cartesian_chart$$177_shape$$13$$, D.$JSCompiler_alias_FALSE$$, $plotAreaBounds$$6$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $lineWidth$$1_position$$9_stroke$$34$$, $cy$$14_lineType$$5$$, $bRadial$$1_coords$$4_points$$31$$)
  }else {
    if($lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$.value) {
      $lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$ = D.$DvtRefObjRenderer$$.$_getAxisCoord$($cartesian_chart$$177_shape$$13$$, $axis$$13_cx$$14$$, $lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$.value);
      if($lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$ == D.$JSCompiler_alias_NULL$$ || window.Infinity == $lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$ || -window.Infinity == $lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$) {
        return D.$JSCompiler_alias_NULL$$
      }
      $axis$$13_cx$$14$$ = $plotAreaBounds$$6$$.x + $plotAreaBounds$$6$$.$w$ / 2;
      $cy$$14_lineType$$5$$ = $plotAreaBounds$$6$$.y + $plotAreaBounds$$6$$.$h$ / 2;
      $bRadial$$1_coords$$4_points$$31$$ ? (D.$DvtChartAxisUtils$$.$isGridPolygonal$($cartesian_chart$$177_shape$$13$$) ? ($bRadial$$1_coords$$4_points$$31$$ = D.$DvtPolygonUtils$$.$getRegularPolygonPoints$($axis$$13_cx$$14$$, $cy$$14_lineType$$5$$, D.$DvtChartDataUtils$$.$getGroupCount$($cartesian_chart$$177_shape$$13$$), $lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$), $cartesian_chart$$177_shape$$13$$ = new D.$DvtPolygon$$($color$$29_context$$135_dataItem$$21_yCoord$$1$$, $bRadial$$1_coords$$4_points$$31$$)) : 
      $cartesian_chart$$177_shape$$13$$ = new D.$DvtCircle$$($color$$29_context$$135_dataItem$$21_yCoord$$1$$, $axis$$13_cx$$14$$, $cy$$14_lineType$$5$$, $lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$), $cartesian_chart$$177_shape$$13$$.$setFill$(D.$JSCompiler_alias_NULL$$)) : $bTangential_pointIndex$$1$$ ? ($cartesian_chart$$177_shape$$13$$ = D.$DvtPlotAreaRenderer$$.$polarToCartesian$($cartesian_chart$$177_shape$$13$$.$getRadius$(), $lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$, $plotAreaBounds$$6$$), 
      $cartesian_chart$$177_shape$$13$$ = new D.$DvtLine$$($color$$29_context$$135_dataItem$$21_yCoord$$1$$, $axis$$13_cx$$14$$, $cy$$14_lineType$$5$$, $cartesian_chart$$177_shape$$13$$.x, $cartesian_chart$$177_shape$$13$$.y)) : ($cartesian_chart$$177_shape$$13$$ = $bHoriz$$7_items$$16$$ ? new D.$DvtLine$$($color$$29_context$$135_dataItem$$21_yCoord$$1$$, $lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$, 0, $lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$, $plotAreaBounds$$6$$.$h$) : new D.$DvtLine$$($color$$29_context$$135_dataItem$$21_yCoord$$1$$, 
      0, $lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$, $plotAreaBounds$$6$$.$w$, $lineCoord$$2_refObj$$9_value$$76_xCoord$$2$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($cartesian_chart$$177_shape$$13$$));
      $cartesian_chart$$177_shape$$13$$.$setStroke$($lineWidth$$1_position$$9_stroke$$34$$)
    }else {
      return D.$JSCompiler_alias_NULL$$
    }
  }
  return $cartesian_chart$$177_shape$$13$$
};
D.$DvtRefObjRenderer$$.$_getXValue$ = function $$DvtRefObjRenderer$$$$_getXValue$$($dataItem$$22_items$$17$$, $index$$88$$, $chart$$178$$) {
  $dataItem$$22_items$$17$$ = $dataItem$$22_items$$17$$[$index$$88$$];
  return(0,window.isNaN)($dataItem$$22_items$$17$$.x) ? "enabled" == $chart$$178$$.$getOptions$().timeAxisType ? D.$DvtChartDataUtils$$.$getGroupLabel$($chart$$178$$, $index$$88$$) : $index$$88$$ : $dataItem$$22_items$$17$$.x
};
D.$DvtRefObjRenderer$$.$_getAxisCoord$ = function $$DvtRefObjRenderer$$$$_getAxisCoord$$($chart$$179_index$$89$$, $axis$$14$$, $value$$77$$) {
  return(0,D.$JSCompiler_StaticMethods_isGroupAxis$$)($axis$$14$$) && ($chart$$179_index$$89$$ = D.$DvtChartDataUtils$$.$getGroupIndex$($chart$$179_index$$89$$, $value$$77$$), 0 <= $chart$$179_index$$89$$) ? $axis$$14$$.$getUnboundedCoordAt$($chart$$179_index$$89$$) : !(0,window.isNaN)($value$$77$$) ? $axis$$14$$.$getUnboundedCoordAt$($value$$77$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtDataCursor$$ = function $$DvtDataCursor$$$($context$$4$$, $bHoriz$$) {
  this.Init($context$$4$$, $bHoriz$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDataCursor$$, D.$DvtContainer$$, "DvtDataCursor");
D.$DvtDataCursor$$.prototype.Init = function $$DvtDataCursor$$$$Init$($context$$5$$, $bHoriz$$1$$) {
  D.$DvtDataCursor$$.$superclass$.Init.call(this, $context$$5$$);
  this.$_bHoriz$ = $bHoriz$$1$$;
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$setVisible$(D.$JSCompiler_alias_FALSE$$);
  $bHoriz$$1$$ ? (this.$_cursorLineRect$ = new D.$DvtRect$$(this.$_context$, 0, 0, 0, 2, "dcLine"), this.$_cursorLineRect$.$setTranslateY$(-1)) : (this.$_cursorLineRect$ = new D.$DvtRect$$(this.$_context$, 0, 0, 2, 0, "dcLine"), this.$_cursorLineRect$.$setTranslateX$(-1));
  this.$_cursorLineRect$.$setSolidFill$("#5a5a5a");
  this.$_cursorLineRect$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$addChild$(this.$_cursorLineRect$);
  this.$_marker$ = new D.$DvtContainer$$(this.$_context$, "dotContainer");
  this.$_marker$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$addChild$(this.$_marker$);
  var $middleCircle_outerCircle$$ = new D.$DvtMarker$$(this.$_context$, "circle", D.$JSCompiler_alias_NULL$$, 0, 0, 16, 16);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($middleCircle_outerCircle$$, -8, -8);
  $middleCircle_outerCircle$$.$setSolidFill$("#5a5a5a");
  $middleCircle_outerCircle$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_marker$.$addChild$($middleCircle_outerCircle$$);
  $middleCircle_outerCircle$$ = new D.$DvtMarker$$(this.$_context$, "circle", D.$JSCompiler_alias_NULL$$, 0, 0, 12, 12);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($middleCircle_outerCircle$$, -6, -6);
  $middleCircle_outerCircle$$.$setSolidFill$("white");
  $middleCircle_outerCircle$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_marker$.$addChild$($middleCircle_outerCircle$$);
  this.$_markerInnerCircle$ = new D.$DvtMarker$$(this.$_context$, "circle", D.$JSCompiler_alias_NULL$$, 0, 0, 8, 8);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_markerInnerCircle$, -4, -4);
  this.$_markerInnerCircle$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$_marker$.$addChild$(this.$_markerInnerCircle$)
};
D.$DvtDataCursor$$.prototype.$render$ = function $$DvtDataCursor$$$$$render$$($plotAreaBounds$$, $dataX_isChrome$$, $cursorHeight_dataY$$, $lineCoord$$, $startX_text$$10_tooltipBounds$$, $dataColor$$) {
  var $bHoriz$$2$$ = this.$isHorizontal$(), $bRtl$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$), $stagePageCoords$$ = (0,D.$JSCompiler_StaticMethods_getStageAbsolutePosition$$)(this.$_context$), $tooltipManager$$ = this.$_context$.$getTooltipManager$("_dvtDataCursor");
  $tooltipManager$$.$showDatatip$($dataX_isChrome$$ + $stagePageCoords$$.x, $cursorHeight_dataY$$ + $stagePageCoords$$.y, $startX_text$$10_tooltipBounds$$, $dataColor$$, D.$JSCompiler_alias_FALSE$$);
  $startX_text$$10_tooltipBounds$$ = (0,D.$JSCompiler_StaticMethods_getTooltipBounds$$)($tooltipManager$$);
  var $tooltipX$$, $tooltipY$$;
  $bHoriz$$2$$ ? ($tooltipX$$ = $bRtl$$ ? $plotAreaBounds$$.x - 0.75 * $startX_text$$10_tooltipBounds$$.$w$ : $plotAreaBounds$$.x + $plotAreaBounds$$.$w$ - $startX_text$$10_tooltipBounds$$.$w$ / 4, $tooltipY$$ = $lineCoord$$ - $startX_text$$10_tooltipBounds$$.$h$ / 2, !$bRtl$$ && 16 > $tooltipX$$ - $dataX_isChrome$$ ? $tooltipX$$ = $dataX_isChrome$$ + 16 : $bRtl$$ && 16 > $dataX_isChrome$$ - ($tooltipX$$ + $startX_text$$10_tooltipBounds$$.$w$) && ($tooltipX$$ = $dataX_isChrome$$ - 16 - $startX_text$$10_tooltipBounds$$.$w$)) : 
  ($tooltipX$$ = $lineCoord$$ - $startX_text$$10_tooltipBounds$$.$w$ / 2, $tooltipY$$ = $plotAreaBounds$$.y - 0.75 * $startX_text$$10_tooltipBounds$$.$h$, 16 > $cursorHeight_dataY$$ - ($tooltipY$$ + $startX_text$$10_tooltipBounds$$.$h$) && ($tooltipY$$ = $cursorHeight_dataY$$ - 16 - $startX_text$$10_tooltipBounds$$.$h$));
  (0,D.$JSCompiler_StaticMethods_positionTip$$)($tooltipManager$$, $tooltipX$$ + $stagePageCoords$$.x, $tooltipY$$ + $stagePageCoords$$.y);
  $startX_text$$10_tooltipBounds$$ = (0,D.$JSCompiler_StaticMethods_getTooltipBounds$$)($tooltipManager$$);
  $tooltipX$$ = $startX_text$$10_tooltipBounds$$.x - $stagePageCoords$$.x;
  $tooltipY$$ = $startX_text$$10_tooltipBounds$$.y - $stagePageCoords$$.y;
  this.$_markerInnerCircle$.$setSolidFill$($dataColor$$);
  $bHoriz$$2$$ ? ((0,D.$JSCompiler_StaticMethods_setTranslate$$)(this, $plotAreaBounds$$.x, $lineCoord$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_marker$, $dataX_isChrome$$ - $plotAreaBounds$$.x, $cursorHeight_dataY$$ - $lineCoord$$), this.$_cursorLineRect$.$setWidth$(window.Math.max($tooltipX$$ + 1 - $plotAreaBounds$$.x, 0)), $bRtl$$ && ($startX_text$$10_tooltipBounds$$ = $tooltipX$$ + $startX_text$$10_tooltipBounds$$.$w$ + 1 - $plotAreaBounds$$.x, this.$_cursorLineRect$.$setX$($startX_text$$10_tooltipBounds$$), 
  this.$_cursorLineRect$.$setWidth$(window.Math.max($plotAreaBounds$$.$w$ - $startX_text$$10_tooltipBounds$$, 0)))) : ((0,D.$JSCompiler_StaticMethods_setTranslate$$)(this, $lineCoord$$, $plotAreaBounds$$.y + 1), (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_marker$, $dataX_isChrome$$ - $lineCoord$$, $cursorHeight_dataY$$ - $plotAreaBounds$$.y), $dataX_isChrome$$ = (0,D.$DvtAgent$isBrowserChrome$$)(), $cursorHeight_dataY$$ = $plotAreaBounds$$.y + $plotAreaBounds$$.$h$ - $tooltipY$$ - $startX_text$$10_tooltipBounds$$.$h$ + 
  ($dataX_isChrome$$ ? 4 : 0), this.$_cursorLineRect$.$setTranslateY$($tooltipY$$ + $startX_text$$10_tooltipBounds$$.$h$ - ($plotAreaBounds$$.y + ($dataX_isChrome$$ ? 4 : 1))), this.$_cursorLineRect$.$setHeight$(window.Math.max($cursorHeight_dataY$$, 0)));
  (0,D.$DvtAgent$workaroundFirefoxRepaint$$)(this.$_marker$)
};
D.$DvtDataCursor$$.prototype.$isHorizontal$ = (0,D.$JSCompiler_get$$)("$_bHoriz$");
D.$DvtDCEH$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtDCEH$$, D.$DvtObj$$, "DvtDCEH");
D.$DvtDCEH$$.prototype.$_Init$ = function $$DvtDCEH$$$$$_Init$$($context$$7$$, $dataCursor$$1$$) {
  this.$_context$ = $context$$7$$;
  this.$_isNumericMainAxis$ = this.$_useAllInGroup$ = this.$_horizontal$ = this.$_dataCursorShown$ = D.$JSCompiler_alias_FALSE$$;
  this.$_dataCursor$ = $dataCursor$$1$$;
  this.$_threeDHorizontalOffset$ = 0
};
D.$JSCompiler_StaticMethods_processMove$$ = function $$JSCompiler_StaticMethods_processMove$$$($JSCompiler_StaticMethods_processMove$self$$, $dataCursor$$inline_571_pageX$$1_pos$$4$$, $dcX$$inline_574_lineCoord$$inline_579_pageY$$1_x$$59$$, $closestFirstDirectionMatches$$inline_9019_immediateMatch$$inline_9018_minDiff$$inline_10966_targetObj$$, $blockEventsRect_logicalObj$$1$$) {
  if($closestFirstDirectionMatches$$inline_9019_immediateMatch$$inline_9018_minDiff$$inline_10966_targetObj$$) {
    $dataCursor$$inline_571_pageX$$1_pos$$4$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_processMove$self$$.$_context$, $dataCursor$$inline_571_pageX$$1_pos$$4$$, $dcX$$inline_574_lineCoord$$inline_579_pageY$$1_x$$59$$);
    $dcX$$inline_574_lineCoord$$inline_579_pageY$$1_x$$59$$ = $dataCursor$$inline_571_pageX$$1_pos$$4$$.x;
    var $dcY$$inline_575_y$$38$$ = $dataCursor$$inline_571_pageX$$1_pos$$4$$.y;
    if($blockEventsRect_logicalObj$$1$$ = $JSCompiler_StaticMethods_processMove$self$$.$getActionablePlotRect$($dcX$$inline_574_lineCoord$$inline_579_pageY$$1_x$$59$$, $dcY$$inline_575_y$$38$$, $blockEventsRect_logicalObj$$1$$)) {
      $dataCursor$$inline_571_pageX$$1_pos$$4$$ = $JSCompiler_StaticMethods_processMove$self$$.$_dataCursor$;
      var $closestMatch$$inline_10976_closestMatch$$inline_572_seriesColor$$inline_578_useAllInGroup$$inline_9015$$;
      var $centerPoint$$inline_573_horizontal$$inline_9014$$ = $JSCompiler_StaticMethods_processMove$self$$.$_horizontal$;
      $closestMatch$$inline_10976_closestMatch$$inline_572_seriesColor$$inline_578_useAllInGroup$$inline_9015$$ = $JSCompiler_StaticMethods_processMove$self$$.$_useAllInGroup$;
      var $closestLowerBound$$inline_9020_i$$inline_10978_isNumericMainAxis$$inline_9016$$ = $JSCompiler_StaticMethods_processMove$self$$.$_isNumericMainAxis$, $matches$$inline_9017_minDiff$$inline_10977_tooltipText$$inline_577_xExtent$$inline_576$$ = [];
      if($closestFirstDirectionMatches$$inline_9019_immediateMatch$$inline_9018_minDiff$$inline_10966_targetObj$$ = $JSCompiler_StaticMethods_processMove$self$$.$findMatches$($dcX$$inline_574_lineCoord$$inline_579_pageY$$1_x$$59$$, $dcY$$inline_575_y$$38$$, $closestFirstDirectionMatches$$inline_9019_immediateMatch$$inline_9018_minDiff$$inline_10966_targetObj$$, $matches$$inline_9017_minDiff$$inline_10977_tooltipText$$inline_577_xExtent$$inline_576$$, $blockEventsRect_logicalObj$$1$$)) {
        $closestMatch$$inline_10976_closestMatch$$inline_572_seriesColor$$inline_578_useAllInGroup$$inline_9015$$ = $closestFirstDirectionMatches$$inline_9019_immediateMatch$$inline_9018_minDiff$$inline_10966_targetObj$$
      }else {
        $closestFirstDirectionMatches$$inline_9019_immediateMatch$$inline_9018_minDiff$$inline_10966_targetObj$$ = 1E7;
        for(var $closestFirstDirectionMatches$$inline_10967_closestHigherBound$$inline_9021_match$$inline_10979$$ = [], $diffValue$$inline_10980_i$$inline_10968_i$$inline_9023$$ = 0;$diffValue$$inline_10980_i$$inline_10968_i$$inline_9023$$ < $matches$$inline_9017_minDiff$$inline_10977_tooltipText$$inline_577_xExtent$$inline_576$$.length;$diffValue$$inline_10980_i$$inline_10968_i$$inline_9023$$++) {
          var $closestFirstDirectionMatch$$inline_9024_closestGroup$$inline_9022_matchObj$$inline_10969$$ = $matches$$inline_9017_minDiff$$inline_10977_tooltipText$$inline_577_xExtent$$inline_576$$[$diffValue$$inline_10980_i$$inline_10968_i$$inline_9023$$], $diffValue$$inline_10970_match$$inline_9025$$ = window.Math.abs((($centerPoint$$inline_573_horizontal$$inline_9014$$ ? $closestFirstDirectionMatch$$inline_9024_closestGroup$$inline_9022_matchObj$$inline_10969$$.$matchRegion$.y : $closestFirstDirectionMatch$$inline_9024_closestGroup$$inline_9022_matchObj$$inline_10969$$.$matchRegion$.x) + 
          ($centerPoint$$inline_573_horizontal$$inline_9014$$ ? $closestFirstDirectionMatch$$inline_9024_closestGroup$$inline_9022_matchObj$$inline_10969$$.$matchRegion$.y + $closestFirstDirectionMatch$$inline_9024_closestGroup$$inline_9022_matchObj$$inline_10969$$.$matchRegion$.$h$ : $closestFirstDirectionMatch$$inline_9024_closestGroup$$inline_9022_matchObj$$inline_10969$$.$matchRegion$.x + $closestFirstDirectionMatch$$inline_9024_closestGroup$$inline_9022_matchObj$$inline_10969$$.$matchRegion$.$w$)) / 
          2 - ($centerPoint$$inline_573_horizontal$$inline_9014$$ ? $dcY$$inline_575_y$$38$$ : $dcX$$inline_574_lineCoord$$inline_579_pageY$$1_x$$59$$));
          $diffValue$$inline_10970_match$$inline_9025$$ <= $closestFirstDirectionMatches$$inline_9019_immediateMatch$$inline_9018_minDiff$$inline_10966_targetObj$$ && ($diffValue$$inline_10970_match$$inline_9025$$ < $closestFirstDirectionMatches$$inline_9019_immediateMatch$$inline_9018_minDiff$$inline_10966_targetObj$$ && ($closestFirstDirectionMatches$$inline_10967_closestHigherBound$$inline_9021_match$$inline_10979$$ = []), $closestFirstDirectionMatches$$inline_10967_closestHigherBound$$inline_9021_match$$inline_10979$$.push($closestFirstDirectionMatch$$inline_9024_closestGroup$$inline_9022_matchObj$$inline_10969$$), 
          $closestFirstDirectionMatches$$inline_9019_immediateMatch$$inline_9018_minDiff$$inline_10966_targetObj$$ = $diffValue$$inline_10970_match$$inline_9025$$)
        }
        $closestFirstDirectionMatches$$inline_9019_immediateMatch$$inline_9018_minDiff$$inline_10966_targetObj$$ = $closestFirstDirectionMatches$$inline_10967_closestHigherBound$$inline_9021_match$$inline_10979$$;
        if(!$closestLowerBound$$inline_9020_i$$inline_10978_isNumericMainAxis$$inline_9016$$) {
          $closestLowerBound$$inline_9020_i$$inline_10978_isNumericMainAxis$$inline_9016$$ = 1E6;
          $closestFirstDirectionMatches$$inline_10967_closestHigherBound$$inline_9021_match$$inline_10979$$ = -1E6;
          $closestFirstDirectionMatch$$inline_9024_closestGroup$$inline_9022_matchObj$$inline_10969$$ = D.$JSCompiler_alias_NULL$$;
          for($diffValue$$inline_10980_i$$inline_10968_i$$inline_9023$$ = 0;$diffValue$$inline_10980_i$$inline_10968_i$$inline_9023$$ < $closestFirstDirectionMatches$$inline_9019_immediateMatch$$inline_9018_minDiff$$inline_10966_targetObj$$.length;$diffValue$$inline_10980_i$$inline_10968_i$$inline_9023$$++) {
            $closestFirstDirectionMatch$$inline_9024_closestGroup$$inline_9022_matchObj$$inline_10969$$ = $closestFirstDirectionMatches$$inline_9019_immediateMatch$$inline_9018_minDiff$$inline_10966_targetObj$$[$diffValue$$inline_10980_i$$inline_10968_i$$inline_9023$$], $closestLowerBound$$inline_9020_i$$inline_10978_isNumericMainAxis$$inline_9016$$ = window.Math.min($closestLowerBound$$inline_9020_i$$inline_10978_isNumericMainAxis$$inline_9016$$, $centerPoint$$inline_573_horizontal$$inline_9014$$ ? 
            $closestFirstDirectionMatch$$inline_9024_closestGroup$$inline_9022_matchObj$$inline_10969$$.$matchRegion$.y : $closestFirstDirectionMatch$$inline_9024_closestGroup$$inline_9022_matchObj$$inline_10969$$.$matchRegion$.x), $closestFirstDirectionMatches$$inline_10967_closestHigherBound$$inline_9021_match$$inline_10979$$ = window.Math.max($closestFirstDirectionMatches$$inline_10967_closestHigherBound$$inline_9021_match$$inline_10979$$, $centerPoint$$inline_573_horizontal$$inline_9014$$ ? $closestFirstDirectionMatch$$inline_9024_closestGroup$$inline_9022_matchObj$$inline_10969$$.$matchRegion$.y + 
            $closestFirstDirectionMatch$$inline_9024_closestGroup$$inline_9022_matchObj$$inline_10969$$.$matchRegion$.$h$ : $closestFirstDirectionMatch$$inline_9024_closestGroup$$inline_9022_matchObj$$inline_10969$$.$matchRegion$.x + $closestFirstDirectionMatch$$inline_9024_closestGroup$$inline_9022_matchObj$$inline_10969$$.$matchRegion$.$w$), $closestFirstDirectionMatch$$inline_9024_closestGroup$$inline_9022_matchObj$$inline_10969$$ = $closestFirstDirectionMatch$$inline_9024_closestGroup$$inline_9022_matchObj$$inline_10969$$.$gidx$
          }
          for($diffValue$$inline_10980_i$$inline_10968_i$$inline_9023$$ = 0;$diffValue$$inline_10980_i$$inline_10968_i$$inline_9023$$ < $matches$$inline_9017_minDiff$$inline_10977_tooltipText$$inline_577_xExtent$$inline_576$$.length;$diffValue$$inline_10980_i$$inline_10968_i$$inline_9023$$++) {
            var $diffValue$$inline_10970_match$$inline_9025$$ = $matches$$inline_9017_minDiff$$inline_10977_tooltipText$$inline_577_xExtent$$inline_576$$[$diffValue$$inline_10980_i$$inline_10968_i$$inline_9023$$], $itemGroup$$inline_9026_midPoint$$inline_9027$$ = $diffValue$$inline_10970_match$$inline_9025$$.$gidx$;
            $closestMatch$$inline_10976_closestMatch$$inline_572_seriesColor$$inline_578_useAllInGroup$$inline_9015$$ ? $closestFirstDirectionMatch$$inline_9024_closestGroup$$inline_9022_matchObj$$inline_10969$$ == $itemGroup$$inline_9026_midPoint$$inline_9027$$ && $closestFirstDirectionMatches$$inline_9019_immediateMatch$$inline_9018_minDiff$$inline_10966_targetObj$$.push($diffValue$$inline_10970_match$$inline_9025$$) : ($itemGroup$$inline_9026_midPoint$$inline_9027$$ = (($centerPoint$$inline_573_horizontal$$inline_9014$$ ? 
            $diffValue$$inline_10970_match$$inline_9025$$.$matchRegion$.y : $diffValue$$inline_10970_match$$inline_9025$$.$matchRegion$.x) + ($centerPoint$$inline_573_horizontal$$inline_9014$$ ? $diffValue$$inline_10970_match$$inline_9025$$.$matchRegion$.y + $diffValue$$inline_10970_match$$inline_9025$$.$matchRegion$.$h$ : $diffValue$$inline_10970_match$$inline_9025$$.$matchRegion$.x + $diffValue$$inline_10970_match$$inline_9025$$.$matchRegion$.$w$)) / 2, $closestFirstDirectionMatches$$inline_10967_closestHigherBound$$inline_9021_match$$inline_10979$$ >= 
            $itemGroup$$inline_9026_midPoint$$inline_9027$$ && $closestLowerBound$$inline_9020_i$$inline_10978_isNumericMainAxis$$inline_9016$$ <= $itemGroup$$inline_9026_midPoint$$inline_9027$$ && $closestFirstDirectionMatches$$inline_9019_immediateMatch$$inline_9018_minDiff$$inline_10966_targetObj$$.push($diffValue$$inline_10970_match$$inline_9025$$))
          }
        }
        $closestMatch$$inline_10976_closestMatch$$inline_572_seriesColor$$inline_578_useAllInGroup$$inline_9015$$ = D.$JSCompiler_alias_NULL$$;
        $matches$$inline_9017_minDiff$$inline_10977_tooltipText$$inline_577_xExtent$$inline_576$$ = 1E8;
        for($closestLowerBound$$inline_9020_i$$inline_10978_isNumericMainAxis$$inline_9016$$ = 0;$closestLowerBound$$inline_9020_i$$inline_10978_isNumericMainAxis$$inline_9016$$ < $closestFirstDirectionMatches$$inline_9019_immediateMatch$$inline_9018_minDiff$$inline_10966_targetObj$$.length;$closestLowerBound$$inline_9020_i$$inline_10978_isNumericMainAxis$$inline_9016$$++) {
          $closestFirstDirectionMatches$$inline_10967_closestHigherBound$$inline_9021_match$$inline_10979$$ = $closestFirstDirectionMatches$$inline_9019_immediateMatch$$inline_9018_minDiff$$inline_10966_targetObj$$[$closestLowerBound$$inline_9020_i$$inline_10978_isNumericMainAxis$$inline_9016$$], $diffValue$$inline_10980_i$$inline_10968_i$$inline_9023$$ = window.Math.abs((($centerPoint$$inline_573_horizontal$$inline_9014$$ ? $closestFirstDirectionMatches$$inline_10967_closestHigherBound$$inline_9021_match$$inline_10979$$.$matchRegion$.x : 
          $closestFirstDirectionMatches$$inline_10967_closestHigherBound$$inline_9021_match$$inline_10979$$.$matchRegion$.y) + ($centerPoint$$inline_573_horizontal$$inline_9014$$ ? $closestFirstDirectionMatches$$inline_10967_closestHigherBound$$inline_9021_match$$inline_10979$$.$matchRegion$.x + $closestFirstDirectionMatches$$inline_10967_closestHigherBound$$inline_9021_match$$inline_10979$$.$matchRegion$.$w$ : $closestFirstDirectionMatches$$inline_10967_closestHigherBound$$inline_9021_match$$inline_10979$$.$matchRegion$.y + 
          $closestFirstDirectionMatches$$inline_10967_closestHigherBound$$inline_9021_match$$inline_10979$$.$matchRegion$.$h$)) / 2 - ($centerPoint$$inline_573_horizontal$$inline_9014$$ ? $dcX$$inline_574_lineCoord$$inline_579_pageY$$1_x$$59$$ : $dcY$$inline_575_y$$38$$)), $diffValue$$inline_10980_i$$inline_10968_i$$inline_9023$$ < $matches$$inline_9017_minDiff$$inline_10977_tooltipText$$inline_577_xExtent$$inline_576$$ && ($matches$$inline_9017_minDiff$$inline_10977_tooltipText$$inline_577_xExtent$$inline_576$$ = 
          $diffValue$$inline_10980_i$$inline_10968_i$$inline_9023$$, $closestMatch$$inline_10976_closestMatch$$inline_572_seriesColor$$inline_578_useAllInGroup$$inline_9015$$ = $closestFirstDirectionMatches$$inline_10967_closestHigherBound$$inline_9021_match$$inline_10979$$)
        }
      }
      $closestMatch$$inline_10976_closestMatch$$inline_572_seriesColor$$inline_578_useAllInGroup$$inline_9015$$ == D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processMove$self$$) : ($centerPoint$$inline_573_horizontal$$inline_9014$$ = D.$DvtGeomUtils$$.$getCenterPoint$($closestMatch$$inline_10976_closestMatch$$inline_572_seriesColor$$inline_578_useAllInGroup$$inline_9015$$.$matchRegion$), "SNAP" == ($dataCursor$$inline_571_pageX$$1_pos$$4$$.$_behavior$ ? 
      $dataCursor$$inline_571_pageX$$1_pos$$4$$.$_behavior$ : "AUTO") && ($dataCursor$$inline_571_pageX$$1_pos$$4$$.$isHorizontal$() ? $dcY$$inline_575_y$$38$$ = window.Math.min(window.Math.max($centerPoint$$inline_573_horizontal$$inline_9014$$.y, $blockEventsRect_logicalObj$$1$$.y), $blockEventsRect_logicalObj$$1$$.y + $blockEventsRect_logicalObj$$1$$.$h$) : $dcX$$inline_574_lineCoord$$inline_579_pageY$$1_x$$59$$ = window.Math.min(window.Math.max($centerPoint$$inline_573_horizontal$$inline_9014$$.x, 
      $blockEventsRect_logicalObj$$1$$.x), $blockEventsRect_logicalObj$$1$$.x + $blockEventsRect_logicalObj$$1$$.$w$)), $JSCompiler_StaticMethods_processMove$self$$.$_threeDHorizontalOffset$ && ($matches$$inline_9017_minDiff$$inline_10977_tooltipText$$inline_577_xExtent$$inline_576$$ = $blockEventsRect_logicalObj$$1$$.x + $blockEventsRect_logicalObj$$1$$.$w$ - $JSCompiler_StaticMethods_processMove$self$$.$_threeDHorizontalOffset$, $dcX$$inline_574_lineCoord$$inline_579_pageY$$1_x$$59$$ > $matches$$inline_9017_minDiff$$inline_10977_tooltipText$$inline_577_xExtent$$inline_576$$ && 
      ($dcX$$inline_574_lineCoord$$inline_579_pageY$$1_x$$59$$ = $matches$$inline_9017_minDiff$$inline_10977_tooltipText$$inline_577_xExtent$$inline_576$$)), $matches$$inline_9017_minDiff$$inline_10977_tooltipText$$inline_577_xExtent$$inline_576$$ = $JSCompiler_StaticMethods_processMove$self$$.$getTooltipText$($closestMatch$$inline_10976_closestMatch$$inline_572_seriesColor$$inline_578_useAllInGroup$$inline_9015$$), !$matches$$inline_9017_minDiff$$inline_10977_tooltipText$$inline_577_xExtent$$inline_576$$ || 
      "" == $matches$$inline_9017_minDiff$$inline_10977_tooltipText$$inline_577_xExtent$$inline_576$$ ? $dataCursor$$inline_571_pageX$$1_pos$$4$$.$setVisible$(D.$JSCompiler_alias_FALSE$$) : ($dataCursor$$inline_571_pageX$$1_pos$$4$$.$setVisible$(D.$JSCompiler_alias_TRUE$$), $closestMatch$$inline_10976_closestMatch$$inline_572_seriesColor$$inline_578_useAllInGroup$$inline_9015$$ = $JSCompiler_StaticMethods_processMove$self$$.$getSeriesColor$($closestMatch$$inline_10976_closestMatch$$inline_572_seriesColor$$inline_578_useAllInGroup$$inline_9015$$.$sidx$, 
      $closestMatch$$inline_10976_closestMatch$$inline_572_seriesColor$$inline_578_useAllInGroup$$inline_9015$$.$gidx$), $dcX$$inline_574_lineCoord$$inline_579_pageY$$1_x$$59$$ = $dataCursor$$inline_571_pageX$$1_pos$$4$$.$isHorizontal$() ? $dcY$$inline_575_y$$38$$ : $dcX$$inline_574_lineCoord$$inline_579_pageY$$1_x$$59$$, $dataCursor$$inline_571_pageX$$1_pos$$4$$.$render$($blockEventsRect_logicalObj$$1$$, $centerPoint$$inline_573_horizontal$$inline_9014$$.x, $centerPoint$$inline_573_horizontal$$inline_9014$$.y, 
      $dcX$$inline_574_lineCoord$$inline_579_pageY$$1_x$$59$$, $matches$$inline_9017_minDiff$$inline_10977_tooltipText$$inline_577_xExtent$$inline_576$$, $closestMatch$$inline_10976_closestMatch$$inline_572_seriesColor$$inline_578_useAllInGroup$$inline_9015$$), $JSCompiler_StaticMethods_processMove$self$$.$_dataCursorShown$ = D.$JSCompiler_alias_TRUE$$))
    }else {
      (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processMove$self$$)
    }
  }else {
    (0,D.$JSCompiler_StaticMethods__removeDataCursor$$)($JSCompiler_StaticMethods_processMove$self$$)
  }
};
D.$JSCompiler_StaticMethods__removeDataCursor$$ = function $$JSCompiler_StaticMethods__removeDataCursor$$$($JSCompiler_StaticMethods__removeDataCursor$self$$) {
  $JSCompiler_StaticMethods__removeDataCursor$self$$.$_dataCursor$.$_bVisible$ && $JSCompiler_StaticMethods__removeDataCursor$self$$.$_dataCursor$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
  $JSCompiler_StaticMethods__removeDataCursor$self$$.$_context$.$getTooltipManager$("_dvtDataCursor").$hideTooltip$();
  $JSCompiler_StaticMethods__removeDataCursor$self$$.$_dataCursorShown$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDCEH$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getActionablePlotRect$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getPlotRect$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getSeriesColor$ = (0,D.$JSCompiler_returnArg$$)("black");
D.$JSCompiler_prototypeAlias$$.$getTooltipText$ = (0,D.$JSCompiler_returnArg$$)("Base class should override");
D.$JSCompiler_prototypeAlias$$.$findMatches$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$DvtChartDCEH$$ = function $$DvtChartDCEH$$$($chart$$243$$) {
  this.$_Init$($chart$$243$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtChartDCEH$$, D.$DvtDCEH$$, "DvtChartDCEH");
D.$JSCompiler_prototypeAlias$$ = D.$DvtChartDCEH$$.prototype;
D.$JSCompiler_prototypeAlias$$.$_Init$ = function $$JSCompiler_prototypeAlias$$$$_Init$$($chart$$244$$) {
  D.$DvtChartDCEH$$.$superclass$.$_Init$.call(this, $chart$$244$$.$_context$, $chart$$244$$.$DataCursor$);
  this.$_Chart$ = $chart$$244$$;
  this.$_horizontal$ = D.$DvtChartTypeUtils$$.$isHorizontal$($chart$$244$$);
  this.$_useAllInGroup$ = D.$DvtChartTypeUtils$$.$isLineArea$($chart$$244$$);
  this.$_isNumericMainAxis$ = D.$DvtChartTypeUtils$$.$isScatterBubble$($chart$$244$$);
  this.$_isStockChart$ = D.$JSCompiler_alias_FALSE$$;
  this.$_isArea$ = D.$DvtChartTypeUtils$$.$isArea$($chart$$244$$)
};
D.$JSCompiler_prototypeAlias$$.$getPlotRect$ = function $$JSCompiler_prototypeAlias$$$$getPlotRect$$() {
  return this.$_Chart$.$_plotAreaSpace$
};
D.$JSCompiler_prototypeAlias$$.$getActionablePlotRect$ = function $$JSCompiler_prototypeAlias$$$$getActionablePlotRect$$($x$$119$$, $y$$99$$) {
  var $plotRect$$5$$ = this.$getPlotRect$();
  return(0,D.$JSCompiler_StaticMethods_containsPoint$$)($plotRect$$5$$, $x$$119$$, $y$$99$$) ? $plotRect$$5$$ : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$findMatches$ = function $$JSCompiler_prototypeAlias$$$$findMatches$$($chart$$245_x$$120$$, $stage$$1_y$$100$$, $eventManager$$4_targetObj$$5$$, $matches$$4$$) {
  $chart$$245_x$$120$$ = this.$_Chart$;
  $stage$$1_y$$100$$ = $chart$$245_x$$120$$.$_context$.$_stage$;
  $eventManager$$4_targetObj$$5$$ = $chart$$245_x$$120$$.$getEventManager$();
  if(!$chart$$245_x$$120$$.$_currentMarkers$) {
    return D.$JSCompiler_alias_NULL$$
  }
  for(var $i$$345$$ = 0;$i$$345$$ < $chart$$245_x$$120$$.$_currentMarkers$.length;$i$$345$$++) {
    for(var $markers$$7$$ = $chart$$245_x$$120$$.$_currentMarkers$[$i$$345$$], $numMarkers$$2$$ = $markers$$7$$.length, $idx$$7$$ = 0;$idx$$7$$ < $numMarkers$$2$$;$idx$$7$$++) {
      var $item$$23_match$$2$$ = $markers$$7$$[$idx$$7$$], $logicalObject$$4$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)($eventManager$$4_targetObj$$5$$, $item$$23_match$$2$$), $dims$$30$$ = $item$$23_match$$2$$.$getDimensionsSelf$ ? $item$$23_match$$2$$.$getDimensionsSelf$($stage$$1_y$$100$$) : $item$$23_match$$2$$.$getDimensions$($stage$$1_y$$100$$), $item$$23_match$$2$$ = {$obj$:$item$$23_match$$2$$, $matchRegion$:$dims$$30$$, $gidx$:$logicalObject$$4$$.$getGroupIndex$(), $sidx$:$logicalObject$$4$$.$getSeriesIndex$(), 
      $marker$:D.$JSCompiler_alias_NULL$$};
      $matches$$4$$.push($item$$23_match$$2$$)
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getSeriesColor$ = function $$JSCompiler_prototypeAlias$$$$getSeriesColor$$($seriesIndex$$85$$, $groupIndex$$48$$) {
  return D.$DvtChartTooltipUtils$$.$getDatatipColor$(this.$_Chart$, $seriesIndex$$85$$, $groupIndex$$48$$)
};
D.$JSCompiler_prototypeAlias$$.$getTooltipText$ = function $$JSCompiler_prototypeAlias$$$$getTooltipText$$($closestMatch$$3$$) {
  return D.$DvtChartTooltipUtils$$.$getDatatip$($closestMatch$$3$$.$obj$, this.$_Chart$, $closestMatch$$3$$.$sidx$, $closestMatch$$3$$.$gidx$)
};
D.$DvtSparkChart$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtSparkChart", D.$DvtSparkChart$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChart$$, D.$DvtBaseComponent$$, "DvtSparkChart");
D.$DvtSparkChart$$.newInstance = function $$DvtSparkChart$$$newInstance$($context$$318$$, $callback$$88$$, $callbackObj$$62$$) {
  var $sparkChart$$ = new D.$DvtSparkChart$$;
  $sparkChart$$.Init($context$$318$$, $callback$$88$$, $callbackObj$$62$$);
  return $sparkChart$$
};
D.$DvtSparkChart$$.getDefaults = function $$DvtSparkChart$$$getDefaults$($skin$$4$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtSparkChartDefaults$$, $skin$$4$$)
};
D.$DvtSparkChart$$.prototype.Init = function $$DvtSparkChart$$$$Init$($context$$319$$, $callback$$89$$, $callbackObj$$63$$) {
  D.$DvtSparkChart$$.$superclass$.Init.call(this, $context$$319$$, $callback$$89$$, $callbackObj$$63$$);
  this.$Defaults$ = new D.$DvtSparkChartDefaults$$;
  this.$_eventHandler$ = new D.$DvtEventManager$$($context$$319$$);
  this.$_eventHandler$.$addListeners$(this);
  this.$_chart$ = (0,D.$DvtChart$newInstance$$)($context$$319$$);
  this.$addChild$(this.$_chart$);
  this.$_tooltipMask$ = new D.$DvtRect$$($context$$319$$);
  this.$addChild$(this.$_tooltipMask$);
  this.setId("sparkChart1000" + window.Math.floor(1E9 * window.Math.random()))
};
D.$DvtSparkChart$$.prototype.$SetOptions$ = function $$DvtSparkChart$$$$$SetOptions$$($options$$221$$) {
  $options$$221$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$221$$), (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtSparkChart$$.prototype.setId = function $$DvtSparkChart$$$$setId$($id$$146$$) {
  D.$DvtSparkChart$$.$superclass$.setId.call(this, $id$$146$$);
  this.$_chart$ && this.$_chart$.setId($id$$146$$ + "chart")
};
D.$DvtSparkChart$$.prototype.$render$ = function $$DvtSparkChart$$$$$render$$($options$$222_tooltip$$41$$, $width$$115$$, $height$$96$$) {
  this.$SetOptions$($options$$222_tooltip$$41$$);
  !(0,window.isNaN)($width$$115$$) && !(0,window.isNaN)($height$$96$$) && (this.$Width$ = $width$$115$$, this.$Height$ = $height$$96$$);
  D.$DvtSparkChartRenderer$$.$render$(this, this.$Width$, this.$Height$);
  $options$$222_tooltip$$41$$ = this.$Options$.shortDesc;
  this.$_tooltipMask$.$setWidth$(this.$Width$);
  this.$_tooltipMask$.$setHeight$(this.$Height$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_tooltipMask$);
  $options$$222_tooltip$$41$$ && this.$_eventHandler$.$associate$(this.$_tooltipMask$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $options$$222_tooltip$$41$$, this.$Options$.color));
  (0,D.$JSCompiler_StaticMethods_setAriaRole$$)(this, "img");
  (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this, "label", $options$$222_tooltip$$41$$)
};
D.$DvtSparkChart$$.prototype.render = D.$DvtSparkChart$$.prototype.$render$;
D.$DvtSparkChart$$.prototype.$__getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$DvtSparkChart$$.prototype.$getAutomation$ = function $$DvtSparkChart$$$$$getAutomation$$() {
  return new D.$DvtSparkChartAutomation$$(this)
};
D.$DvtSparkChart$$.prototype.getAutomation = D.$DvtSparkChart$$.prototype.$getAutomation$;
D.$DvtSparkChartAutomation$$ = function $$DvtSparkChartAutomation$$$($dvtComponent$$) {
  this.$_sparkChart$ = $dvtComponent$$;
  this.$_options$ = this.$_sparkChart$.$__getOptions$();
  this.$_seriesIndex$ = "floatingBar" == this.$_options$.type ? 1 : 0
};
(0,D.$goog$exportSymbol$$)("DvtSparkChartAutomation", D.$DvtSparkChartAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChartAutomation$$, D.$DvtAutomation$$, "DvtSparkChartAutomation");
D.$DvtSparkChartAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtSparkChartAutomation$$$$$GetSubIdForDomElement$$($displayable_itemIndex$$) {
  window.logicalObj = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_sparkChart$.$_chart$.$getEventManager$(), $displayable_itemIndex$$);
  return window.logicalObj instanceof D.$DvtChartObjPeer$$ && ($displayable_itemIndex$$ = window.logicalObj.$getGroupIndex$(), 0 <= $displayable_itemIndex$$) ? "dataItem[" + $displayable_itemIndex$$ + "]" : D.$JSCompiler_alias_NULL$$
};
D.$DvtSparkChartAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtSparkChartAutomation$$$$$getDomElementForSubId$$($logicalObj$$3_subId$$) {
  var $openParen$$ = $logicalObj$$3_subId$$.indexOf("["), $closeParen$$ = $logicalObj$$3_subId$$.indexOf("]");
  return 0 < $openParen$$ && 0 < $closeParen$$ && ($logicalObj$$3_subId$$ = this.$_getChartObjPeer$(this.$_seriesIndex$, $logicalObj$$3_subId$$.substring($openParen$$ + 1, $closeParen$$))) ? $logicalObj$$3_subId$$.$getDisplayables$()[0].$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$DvtSparkChartAutomation$$.prototype.getDomElementForSubId = D.$DvtSparkChartAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtSparkChartAutomation$$.prototype.$_getChartObjPeer$ = function $$DvtSparkChartAutomation$$$$$_getChartObjPeer$$($firstIndex$$, $secondIndex$$) {
  for(var $peers$$ = this.$_sparkChart$.$_chart$.$getObjects$(), $i$$16$$ = 0;$i$$16$$ < $peers$$.length;$i$$16$$++) {
    var $seriesIndex$$ = $peers$$[$i$$16$$].$getSeriesIndex$(), $itemIndex$$2$$ = $peers$$[$i$$16$$].$getGroupIndex$();
    if($seriesIndex$$ == $firstIndex$$ && $itemIndex$$2$$ == $secondIndex$$) {
      return $peers$$[$i$$16$$]
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtSparkChartAutomation$$.prototype.$getDataItem$ = function $$DvtSparkChartAutomation$$$$$getDataItem$$($itemIndex$$3$$) {
  var $dataItem$$ = this.$_options$.items[$itemIndex$$3$$];
  return{borderColor:D.$DvtChartStyleUtils$$.$getBorderColor$(this.$_sparkChart$.$_chart$, this.$_seriesIndex$, $itemIndex$$3$$), color:D.$DvtChartStyleUtils$$.$getColor$(this.$_sparkChart$.$_chart$, this.$_seriesIndex$, $itemIndex$$3$$), date:$dataItem$$.date ? $dataItem$$.date : D.$JSCompiler_alias_NULL$$, floatValue:$dataItem$$.floatValue ? $dataItem$$.floatValue : D.$JSCompiler_alias_NULL$$, value:D.$DvtChartDataUtils$$.getValue(this.$_sparkChart$.$_chart$, this.$_seriesIndex$, $itemIndex$$3$$)}
};
D.$DvtSparkChartAutomation$$.prototype.getDataItem = D.$DvtSparkChartAutomation$$.prototype.$getDataItem$;
D.$DvtSparkChartDefaults$$ = function $$DvtSparkChartDefaults$$$() {
  this.Init({skyros:D.$DvtSparkChartDefaults$VERSION_1$$, alta:D.$DvtSparkChartDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChartDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtSparkChartDefaults");
D.$DvtSparkChartDefaults$SKIN_ALTA$$ = {skin:"alta", color:"#267db3"};
D.$DvtSparkChartDefaults$VERSION_1$$ = {skin:"skyros", type:"line", animationOnDisplay:"none", animationOnDataChange:"none", emptyText:D.$JSCompiler_alias_NULL$$, color:"#666699", firstColor:D.$JSCompiler_alias_NULL$$, lastColor:D.$JSCompiler_alias_NULL$$, highColor:D.$JSCompiler_alias_NULL$$, lowColor:D.$JSCompiler_alias_NULL$$, visualEffects:"auto", baselineScaling:"min", barSpacing:"auto", lineWidth:1, lineStyle:"solid", lineType:"straight", markerSize:5, markerShape:"auto", barGapRatio:0.25};
D.$DvtSparkChartRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtSparkChartRenderer$$, D.$DvtObj$$, "DvtSparkChartRenderer");
D.$DvtSparkChartRenderer$$.$render$ = function $$DvtSparkChartRenderer$$$$render$$($items_spark$$, $width$$14$$, $height$$12$$) {
  var $chart$$1$$ = $items_spark$$.$_chart$, $chartOptions$$ = D.$DvtSparkChartRenderer$$.$_convertOptionsObj$($items_spark$$), $markerGap_options$$4$$ = $items_spark$$.$__getOptions$();
  if("area" == $markerGap_options$$4$$.type || "line" == $markerGap_options$$4$$.type || "lineWithArea" == $markerGap_options$$4$$.type) {
    $items_spark$$ = D.$DvtSparkChartRenderer$$.$_getDataItems$($items_spark$$);
    var $hasMarkers$$ = D.$JSCompiler_alias_FALSE$$;
    if($markerGap_options$$4$$.firstColor || $markerGap_options$$4$$.lastColor || $markerGap_options$$4$$.highColor || $markerGap_options$$4$$.lowColor) {
      $hasMarkers$$ = D.$JSCompiler_alias_TRUE$$
    }else {
      for(var $i$$17$$ = 0;$i$$17$$ < $items_spark$$.length;$i$$17$$++) {
        if($items_spark$$[$i$$17$$] && "on" == $items_spark$$[$i$$17$$].markerDisplayed) {
          $hasMarkers$$ = D.$JSCompiler_alias_TRUE$$;
          break
        }
      }
    }
    if($hasMarkers$$ && 0 < $items_spark$$.length || "none" == $markerGap_options$$4$$.lineType) {
      $markerGap_options$$4$$ = $markerGap_options$$4$$.markerSize / 2, $width$$14$$ -= 2 * $markerGap_options$$4$$, $height$$12$$ -= 2 * $markerGap_options$$4$$, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($chart$$1$$, $markerGap_options$$4$$, $markerGap_options$$4$$)
    }
  }
  $chart$$1$$.$render$($chartOptions$$, $width$$14$$, $height$$12$$)
};
D.$DvtSparkChartRenderer$$.$_getDataItems$ = function $$DvtSparkChartRenderer$$$$_getDataItems$$($options$$5_spark$$1$$) {
  return($options$$5_spark$$1$$ = $options$$5_spark$$1$$.$__getOptions$()) && $options$$5_spark$$1$$.items ? $options$$5_spark$$1$$.items : []
};
D.$DvtSparkChartRenderer$$.$_convertOptionsObj$ = function $$DvtSparkChartRenderer$$$$_convertOptionsObj$$($items$$1_spark$$2$$) {
  var $options$$6$$ = $items$$1_spark$$2$$.$__getOptions$(), $chartOptions$$1$$ = {styleDefaults:{}, xAxis:{}, yAxis:{}, groups:[]}, $bFloatingBar$$ = "floatingBar" == $options$$6$$.type, $barSpacing_chartItems_zeroBaseline$$ = [], $axisGap_floatItems$$ = [], $highIndex$$ = -1, $lowIndex$$ = -1, $highValue$$ = -window.Infinity, $lowValue$$ = window.Infinity;
  $items$$1_spark$$2$$ = D.$DvtSparkChartRenderer$$.$_getDataItems$($items$$1_spark$$2$$);
  for(var $i$$18$$ = 0;$i$$18$$ < $items$$1_spark$$2$$.length;$i$$18$$++) {
    var $item_topValue$$ = $items$$1_spark$$2$$[$i$$18$$], $baseValue_chartItem$$ = {}, $floatValue$$1$$ = 0;
    $item_topValue$$ instanceof window.Object ? ($baseValue_chartItem$$.y = $item_topValue$$.value, $item_topValue$$.date && ($chartOptions$$1$$.timeAxisType = "enabled", $chartOptions$$1$$.groups.push($item_topValue$$.date)), "on" == $item_topValue$$.markerDisplayed && ($baseValue_chartItem$$.markerDisplayed = "on"), $item_topValue$$.color && ($baseValue_chartItem$$.color = $item_topValue$$.color), $item_topValue$$.borderColor && ($baseValue_chartItem$$.borderColor = $item_topValue$$.borderColor), 
    $item_topValue$$.markerShape && ($baseValue_chartItem$$.markerShape = $item_topValue$$.markerShape), $item_topValue$$.markerSize && ($baseValue_chartItem$$.markerSize = $item_topValue$$.markerSize), $bFloatingBar$$ && ($floatValue$$1$$ = $item_topValue$$.floatValue, (0,window.isNaN)($floatValue$$1$$) && ($floatValue$$1$$ = 0), $axisGap_floatItems$$.push($floatValue$$1$$))) : ($baseValue_chartItem$$.y = $item_topValue$$, $bFloatingBar$$ && $axisGap_floatItems$$.push(0));
    $barSpacing_chartItems_zeroBaseline$$.push($baseValue_chartItem$$);
    $item_topValue$$ = $bFloatingBar$$ ? window.Math.max($floatValue$$1$$ + $baseValue_chartItem$$.y, $floatValue$$1$$) : $baseValue_chartItem$$.y;
    $highValue$$ < $item_topValue$$ && ($highValue$$ = $item_topValue$$, $highIndex$$ = $i$$18$$);
    $baseValue_chartItem$$ = $bFloatingBar$$ ? window.Math.min($floatValue$$1$$ + $baseValue_chartItem$$.y, $floatValue$$1$$) : $baseValue_chartItem$$.y;
    $lowValue$$ > $baseValue_chartItem$$ && ($lowValue$$ = $baseValue_chartItem$$, $lowIndex$$ = $i$$18$$)
  }
  $options$$6$$.highColor && 0 <= $highIndex$$ && ($barSpacing_chartItems_zeroBaseline$$[$highIndex$$].markerDisplayed = "on", $barSpacing_chartItems_zeroBaseline$$[$highIndex$$].color || ($barSpacing_chartItems_zeroBaseline$$[$highIndex$$].color = $options$$6$$.highColor));
  $options$$6$$.lowColor && 0 <= $lowIndex$$ && ($barSpacing_chartItems_zeroBaseline$$[$lowIndex$$].markerDisplayed = "on", $barSpacing_chartItems_zeroBaseline$$[$lowIndex$$].color || ($barSpacing_chartItems_zeroBaseline$$[$lowIndex$$].color = $options$$6$$.lowColor));
  $options$$6$$.firstColor && 0 < $barSpacing_chartItems_zeroBaseline$$.length && ($barSpacing_chartItems_zeroBaseline$$[0].markerDisplayed = "on", $barSpacing_chartItems_zeroBaseline$$[0].color || ($barSpacing_chartItems_zeroBaseline$$[0].color = $options$$6$$.firstColor));
  $options$$6$$.lastColor && 0 < $barSpacing_chartItems_zeroBaseline$$.length && ($barSpacing_chartItems_zeroBaseline$$[$barSpacing_chartItems_zeroBaseline$$.length - 1].markerDisplayed = "on", $barSpacing_chartItems_zeroBaseline$$[$barSpacing_chartItems_zeroBaseline$$.length - 1].color || ($barSpacing_chartItems_zeroBaseline$$[$barSpacing_chartItems_zeroBaseline$$.length - 1].color = $options$$6$$.lastColor));
  $chartOptions$$1$$.series = [{items:$barSpacing_chartItems_zeroBaseline$$, areaColor:$options$$6$$.areaColor}];
  $bFloatingBar$$ && $chartOptions$$1$$.series.splice(0, 0, {items:$axisGap_floatItems$$, color:"rgba(0, 0, 0, 0)"});
  $options$$6$$.referenceObjects && ($chartOptions$$1$$.yAxis.referenceObjects = $options$$6$$.referenceObjects);
  $chartOptions$$1$$.__spark = D.$JSCompiler_alias_TRUE$$;
  $barSpacing_chartItems_zeroBaseline$$ = $options$$6$$.barSpacing;
  "auto" == $barSpacing_chartItems_zeroBaseline$$ && ($barSpacing_chartItems_zeroBaseline$$ = 1 < (0,D.$DvtAgent$getDevicePixelRatio$$)() ? "subpixel" : "pixel");
  $chartOptions$$1$$.__sparkBarSpacing = $barSpacing_chartItems_zeroBaseline$$;
  $chartOptions$$1$$.type = $options$$6$$.type;
  $chartOptions$$1$$.animationOnDataChange = $options$$6$$.animationOnDataChange;
  $chartOptions$$1$$.animationOnDisplay = $options$$6$$.animationOnDisplay;
  $chartOptions$$1$$.emptyText = $options$$6$$.emptyText;
  $chartOptions$$1$$.styleDefaults.colors = [$options$$6$$.color];
  $chartOptions$$1$$.styleDefaults.animationDuration = $options$$6$$.animationDuration;
  $chartOptions$$1$$.styleDefaults.animationIndicators = "none";
  $chartOptions$$1$$.styleDefaults.lineWidth = $options$$6$$.lineWidth;
  $chartOptions$$1$$.styleDefaults.lineStyle = $options$$6$$.lineStyle;
  $chartOptions$$1$$.styleDefaults.lineType = $options$$6$$.lineType;
  $chartOptions$$1$$.styleDefaults.markerSize = $options$$6$$.markerSize;
  $chartOptions$$1$$.styleDefaults.markerShape = $options$$6$$.markerShape;
  $chartOptions$$1$$.styleDefaults.barGapRatio = $options$$6$$.barGapRatio;
  $chartOptions$$1$$.styleDefaults.seriesTooltipType = "none";
  $chartOptions$$1$$.styleDefaults.groupTooltipType = "none";
  $chartOptions$$1$$.styleDefaults.valueTooltipType = "none";
  $chartOptions$$1$$.xAxis.rendered = "off";
  $chartOptions$$1$$.yAxis.rendered = "off";
  $barSpacing_chartItems_zeroBaseline$$ = "zero" == $options$$6$$.baselineScaling;
  $axisGap_floatItems$$ = 0.1 * ($highValue$$ - $lowValue$$);
  $chartOptions$$1$$.yAxis.min = $barSpacing_chartItems_zeroBaseline$$ && 0 <= $lowValue$$ ? 0 : $lowValue$$ - $axisGap_floatItems$$;
  $chartOptions$$1$$.yAxis.max = $barSpacing_chartItems_zeroBaseline$$ && 0 >= $highValue$$ ? 0 : $highValue$$ + $axisGap_floatItems$$;
  $bFloatingBar$$ && ($chartOptions$$1$$.type = "bar", $chartOptions$$1$$.stack = "on");
  $chartOptions$$1$$.styleDefaults.seriesEffect = "none" == $options$$6$$.visualEffects || !("area" == $options$$6$$.type || "lineWithArea" == $options$$6$$.type) ? "color" : "gradient";
  $chartOptions$$1$$.layout = {gapRatio:0};
  $chartOptions$$1$$.legend = {rendered:"off"};
  $chartOptions$$1$$.title = $chartOptions$$1$$.title ? $chartOptions$$1$$.title : {};
  $chartOptions$$1$$.title.style = "font-size: 12px; color: #404259;";
  return $chartOptions$$1$$
};
});