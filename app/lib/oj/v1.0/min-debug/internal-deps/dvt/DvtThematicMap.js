define(['./DvtToolkit', './DvtPanZoomCanvas', './DvtSubcomponent'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtAmxThematicMap$$ = function $$DvtAmxThematicMap$$$($context$$484$$, $callback$$115$$, $callbackObj$$85$$) {
  this.Init($context$$484$$, $callback$$115$$, $callbackObj$$85$$)
};
(0,D.$goog$exportSymbol$$)("DvtAmxThematicMap", D.$DvtAmxThematicMap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtAmxThematicMap$$, D.$DvtContainer$$, "DvtAmxThematicMap");
D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$ = 10;
D.$DvtAmxThematicMap$$.prototype.Init = function $$DvtAmxThematicMap$$$$Init$($context$$485$$, $callback$$116$$, $callbackObj$$86$$) {
  D.$DvtAmxThematicMap$$.$superclass$.Init.call(this, $context$$485$$);
  this.$_tmap$ = new D.$DvtThematicMap$$($context$$485$$, $callback$$116$$, $callbackObj$$86$$);
  this.$_tmapContainer$ = new D.$DvtContainer$$($context$$485$$);
  this.$_tmapContainer$.$addChild$(this.$_tmap$);
  this.$addChild$(this.$_tmapContainer$);
  this.$Defaults$ = new D.$DvtThematicMapDefaults$$
};
D.$DvtAmxThematicMap$$.newInstance = function $$DvtAmxThematicMap$$$newInstance$($context$$486$$, $callback$$117$$, $callbackObj$$87$$) {
  return new D.$DvtAmxThematicMap$$($context$$486$$, $callback$$117$$, $callbackObj$$87$$)
};
D.$DvtAmxThematicMap$$.newInstance = D.$DvtAmxThematicMap$$.newInstance;
D.$DvtAmxThematicMap$$.prototype.$render$ = function $$DvtAmxThematicMap$$$$$render$$($options$$237$$, $availSpace$$107_width$$133$$, $height$$114$$) {
  this.$Options$ = this.$Defaults$.$calcOptions$($options$$237$$);
  this.$_width$ = $availSpace$$107_width$$133$$;
  this.$_height$ = $height$$114$$;
  $availSpace$$107_width$$133$$ = new D.$DvtRectangle$$(0, 0, $availSpace$$107_width$$133$$, $height$$114$$);
  this.$_renderLegend$(this, $availSpace$$107_width$$133$$);
  this.$_tmap$.$render$($options$$237$$, $availSpace$$107_width$$133$$.$w$, $availSpace$$107_width$$133$$.$h$)
};
D.$DvtAmxThematicMap$$.prototype.render = D.$DvtAmxThematicMap$$.prototype.$render$;
D.$DvtAmxThematicMap$$.prototype.$_renderLegend$ = function $$DvtAmxThematicMap$$$$$_renderLegend$$($container$$148$$, $availSpace$$108$$) {
  this.$_legend$ && ($container$$148$$.removeChild(this.$_legend$), this.$_legend$ = D.$JSCompiler_alias_NULL$$);
  var $availLegendSpace$$ = new D.$DvtRectangle$$(D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, $availSpace$$108$$.$w$ - 2 * D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$, $availSpace$$108$$.$h$ - 2 * D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$), $gap$$19_options$$238$$ = this.$Options$, $position$$32_rendered$$4$$ = $gap$$19_options$$238$$.legend.rendered, $actualSize$$5_isHoriz$$10_isRTL$$25_scrolling$$1$$ = $gap$$19_options$$238$$.legend.scrolling, 
  $legendOptions$$9$$ = D.$DvtJSONUtils$$.clone($gap$$19_options$$238$$.legend);
  this.$_addLegendData$(this.$Options$, $legendOptions$$9$$);
  if($position$$32_rendered$$4$$ && !($legendOptions$$9$$.$sections$ && 0 == $legendOptions$$9$$.$sections$.length)) {
    $position$$32_rendered$$4$$ = $gap$$19_options$$238$$.legend.position;
    delete $legendOptions$$9$$.position;
    $legendOptions$$9$$.layout.gapRatio = this.$getGapRatio$();
    $legendOptions$$9$$.hideAndShowBehavior = "none";
    $legendOptions$$9$$.rolloverBehavior = "none";
    $legendOptions$$9$$.scrolling = $gap$$19_options$$238$$.legend.scrolling;
    var $legend$$36$$ = (0,D.$DvtLegend$newInstance$$)(this.$_tmap$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$);
    this.$_tmap$.getId() != D.$JSCompiler_alias_NULL$$ && $legend$$36$$.setId(this.$_tmap$.getId() + "legend");
    $container$$148$$.$addChild$($legend$$36$$);
    "auto" == $position$$32_rendered$$4$$ && "asNeeded" !== $actualSize$$5_isHoriz$$10_isRTL$$25_scrolling$$1$$ ? $position$$32_rendered$$4$$ = "bottom" : "auto" == $position$$32_rendered$$4$$ && "asNeeded" == $actualSize$$5_isHoriz$$10_isRTL$$25_scrolling$$1$$ && ($position$$32_rendered$$4$$ = "end");
    $actualSize$$5_isHoriz$$10_isRTL$$25_scrolling$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)($container$$148$$.$_context$);
    "start" == $position$$32_rendered$$4$$ ? $position$$32_rendered$$4$$ = $actualSize$$5_isHoriz$$10_isRTL$$25_scrolling$$1$$ ? "right" : "left" : "end" == $position$$32_rendered$$4$$ && ($position$$32_rendered$$4$$ = $actualSize$$5_isHoriz$$10_isRTL$$25_scrolling$$1$$ ? "left" : "right");
    $legendOptions$$9$$.orientation = "left" == $position$$32_rendered$$4$$ || "right" == $position$$32_rendered$$4$$ ? "vertical" : "horizontal";
    $actualSize$$5_isHoriz$$10_isRTL$$25_scrolling$$1$$ = "top" == $position$$32_rendered$$4$$ || "bottom" == $position$$32_rendered$$4$$;
    $actualSize$$5_isHoriz$$10_isRTL$$25_scrolling$$1$$ = $legend$$36$$.$getPreferredSize$($legendOptions$$9$$, $actualSize$$5_isHoriz$$10_isRTL$$25_scrolling$$1$$ ? $availLegendSpace$$.$w$ : $gap$$19_options$$238$$.layout.legendMaxSize * $availLegendSpace$$.$w$, $actualSize$$5_isHoriz$$10_isRTL$$25_scrolling$$1$$ ? $gap$$19_options$$238$$.layout.legendMaxSize * $availLegendSpace$$.$h$ : $availLegendSpace$$.$h$);
    if(0 < $actualSize$$5_isHoriz$$10_isRTL$$25_scrolling$$1$$.$w$ && 0 < $actualSize$$5_isHoriz$$10_isRTL$$25_scrolling$$1$$.$h$) {
      switch($legend$$36$$.$render$($legendOptions$$9$$, $actualSize$$5_isHoriz$$10_isRTL$$25_scrolling$$1$$.$w$, $actualSize$$5_isHoriz$$10_isRTL$$25_scrolling$$1$$.$h$), this.$_legend$ = $legend$$36$$, $gap$$19_options$$238$$ = window.Math.ceil($gap$$19_options$$238$$.layout.legendGap * this.$getGapRatio$()), (0,D.$DvtLayoutUtils$position$$)($availLegendSpace$$, $position$$32_rendered$$4$$, $legend$$36$$, $actualSize$$5_isHoriz$$10_isRTL$$25_scrolling$$1$$.$w$, $actualSize$$5_isHoriz$$10_isRTL$$25_scrolling$$1$$.$h$, 
      $gap$$19_options$$238$$), $position$$32_rendered$$4$$) {
        case "top":
          this.$_tmapContainer$.$setTranslateY$($actualSize$$5_isHoriz$$10_isRTL$$25_scrolling$$1$$.$h$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$);
        case "bottom":
          $availSpace$$108$$.$h$ -= $actualSize$$5_isHoriz$$10_isRTL$$25_scrolling$$1$$.$h$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$;
          break;
        case "left":
          this.$_tmapContainer$.$setTranslateX$($actualSize$$5_isHoriz$$10_isRTL$$25_scrolling$$1$$.$w$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$);
        case "right":
          $availSpace$$108$$.$w$ -= $actualSize$$5_isHoriz$$10_isRTL$$25_scrolling$$1$$.$w$ + D.$DvtAmxThematicMap$$.$_LEGEND_COMPONET_GAP$
      }
    }
  }
};
D.$DvtAmxThematicMap$$.prototype.$getGapRatio$ = function $$DvtAmxThematicMap$$$$$getGapRatio$$() {
  if(this.$Options$.layout.gapRatio !== D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)(this.$Options$.layout.gapRatio)) {
    return this.$Options$.layout.gapRatio
  }
  var $wRatio$$1$$ = window.Math.min(this.$_width$ / 400, 1), $hRatio$$1$$ = window.Math.min(this.$_height$ / 300, 1);
  return window.Math.min($wRatio$$1$$, $hRatio$$1$$)
};
D.$DvtAmxThematicMap$$.prototype.$_addLegendData$ = function $$DvtAmxThematicMap$$$$$_addLegendData$$($data$$93$$, $legendOptions$$10$$) {
  $legendOptions$$10$$.title = $data$$93$$.legend ? $data$$93$$.legend.title : D.$JSCompiler_alias_NULL$$;
  $legendOptions$$10$$.sections = [];
  if($data$$93$$ && $data$$93$$.legend && $data$$93$$.legend.sections) {
    for(var $i$$635$$ = 0;$i$$635$$ < $data$$93$$.legend.sections.length;$i$$635$$++) {
      var $dataSection$$2$$ = $data$$93$$.legend.sections[$i$$635$$];
      $dataSection$$2$$ && $legendOptions$$10$$.sections.push({title:$dataSection$$2$$.title, items:$dataSection$$2$$.items, sections:$dataSection$$2$$.sections})
    }
  }
  return $legendOptions$$10$$
};
D.$DvtThematicMap$$ = function $$DvtThematicMap$$$($context$$481$$, $callback$$112$$, $callbackObj$$82$$) {
  this.Init($context$$481$$, $callback$$112$$, $callbackObj$$82$$)
};
(0,D.$goog$exportSymbol$$)("DvtThematicMap", D.$DvtThematicMap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMap$$, D.$DvtPanZoomComponent$$, "DvtThematicMap");
D.$DvtThematicMap$$.prototype.Init = function $$DvtThematicMap$$$$Init$($context$$482$$, $callback$$113$$, $callbackObj$$83$$) {
  D.$DvtThematicMap$$.$superclass$.Init.call(this, $context$$482$$, $callback$$113$$, $callbackObj$$83$$);
  (0,D.$JSCompiler_StaticMethods__createHandlers$$)(this);
  this.$_layers$ = [];
  this.$_drillAnimFadeOutObjs$ = [];
  this.$_legendButtonImages$ = this.$_legendXml$ = this.$_legendPanel$ = this.$_legend$ = D.$JSCompiler_alias_NULL$$;
  this.$_bBaseMapChanged$ = D.$JSCompiler_alias_FALSE$$;
  this.$_drilledRowKeys$ = [];
  this.$_initDrilled$ = {};
  this.$_processingInitDrilled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_drillDataLayer$ = {};
  this.$_childToParent$ = {};
  this.$_drilled$ = [];
  this.$_areaLayers$ = new D.$DvtContainer$$(this.$_context$);
  this.$_dataAreaLayers$ = new D.$DvtContainer$$(this.$_context$);
  this.$_dataPointLayers$ = new D.$DvtContainer$$(this.$_context$);
  this.$_labelLayers$ = new D.$DvtContainer$$(this.$_context$);
  this.$_initialZooming$ = D.$JSCompiler_alias_FALSE$$;
  this.$_panning$ = this.$_zooming$ = D.$JSCompiler_alias_TRUE$$;
  this.$_maxZoomFactor$ = 6;
  this.$_isMarkerZoomBehaviorFixed$ = D.$JSCompiler_alias_TRUE$$;
  this.$_selectedAreas$ = {};
  this.$_displayedControls$ = 16777215;
  this.$Defaults$ = new D.$DvtThematicMapDefaults$$;
  this.$_bRendered$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtThematicMap$$.newInstance = function $$DvtThematicMap$$$newInstance$($context$$483$$, $callback$$114$$, $callbackObj$$84$$) {
  return new D.$DvtThematicMap$$($context$$483$$, $callback$$114$$, $callbackObj$$84$$)
};
D.$DvtThematicMap$$.prototype.$SetOptions$ = function $$DvtThematicMap$$$$$SetOptions$$($options$$236$$) {
  D.$DvtThematicMap$$.$superclass$.$SetOptions$.call(this, $options$$236$$);
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnMapChange = "none", this.$Options$.animationOnDrill = "none");
  this.$Options$.skin || (this.$Options$.skin = "alta");
  (new D.$DvtThematicMapJsonParser$$(this)).parse(this.$Options$)
};
D.$JSCompiler_StaticMethods_getLayer$$ = function $$JSCompiler_StaticMethods_getLayer$$$($JSCompiler_StaticMethods_getLayer$self$$, $layerName$$27$$) {
  for(var $i$$620$$ = 0;$i$$620$$ < $JSCompiler_StaticMethods_getLayer$self$$.$_layers$.length;$i$$620$$++) {
    if($JSCompiler_StaticMethods_getLayer$self$$.$_layers$[$i$$620$$].$LayerName$ == $layerName$$27$$) {
      return $JSCompiler_StaticMethods_getLayer$self$$.$_layers$[$i$$620$$]
    }
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMap$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = function $$JSCompiler_prototypeAlias$$$$setAnimationDuration$$($attr$$14$$) {
  this.$_animationDuration$ = (0,window.parseFloat)($attr$$14$$)
};
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animationDuration$");
D.$JSCompiler_prototypeAlias$$.$setFeaturesOff$ = function $$JSCompiler_prototypeAlias$$$$setFeaturesOff$$($attr$$16_featuresOff$$1$$) {
  $attr$$16_featuresOff$$1$$ = (0,window.parseInt)($attr$$16_featuresOff$$1$$);
  var $controls$$5$$ = this.$_displayedControls$;
  if(1 == $attr$$16_featuresOff$$1$$ || 3 == $attr$$16_featuresOff$$1$$ || 5 == $attr$$16_featuresOff$$1$$ || 7 == $attr$$16_featuresOff$$1$$) {
    $controls$$5$$ &= -17, this.$_panning$ = D.$JSCompiler_alias_FALSE$$
  }
  if(2 == $attr$$16_featuresOff$$1$$ || 3 == $attr$$16_featuresOff$$1$$ || 6 == $attr$$16_featuresOff$$1$$ || 7 == $attr$$16_featuresOff$$1$$) {
    $controls$$5$$ &= -4098, this.$_zooming$ = D.$JSCompiler_alias_FALSE$$
  }
  if(4 == $attr$$16_featuresOff$$1$$ || 5 == $attr$$16_featuresOff$$1$$ || 6 == $attr$$16_featuresOff$$1$$ || 7 == $attr$$16_featuresOff$$1$$) {
    $controls$$5$$ &= -257
  }
  this.$_displayedControls$ = $controls$$5$$
};
D.$JSCompiler_prototypeAlias$$.$setDrillMode$ = function $$JSCompiler_prototypeAlias$$$$setDrillMode$$($attr$$21$$) {
  this.$_drillMode$ = $attr$$21$$;
  this.$_eventHandler$.$setDrillMode$($attr$$21$$)
};
D.$JSCompiler_prototypeAlias$$.$PreRender$ = function $$JSCompiler_prototypeAlias$$$$PreRender$$() {
  D.$DvtThematicMap$$.$superclass$.$PreRender$.call(this);
  !this.$_isResize$ && this.$_pzcContainer$ && (this.$_layers$ = [], this.$_drilledRowKeys$ = [], this.$_initDrilled$ = {}, this.$_drillDataLayer$ = {}, this.$_childToParent$ = {}, this.$_drilled$ = [], this.removeChild(this.$_legendPanel$), this.$_legendButtonImages$ = this.$_legendXml$ = this.$_legend$ = this.$_legendPanel$ = D.$JSCompiler_alias_NULL$$, this.$_displayedControls$ = 16777215, this.$_panning$ = this.$_zooming$ = D.$JSCompiler_alias_TRUE$$, this.$_oldPzc$ = this.$_pzc$, this.$_areaLayers$ = 
  new D.$DvtContainer$$(this.$_context$), this.$_dataAreaLayers$ = new D.$DvtContainer$$(this.$_context$), this.$_dataPointLayers$ = new D.$DvtContainer$$(this.$_context$), this.$_labelLayers$ = new D.$DvtContainer$$(this.$_context$), (0,D.$JSCompiler_StaticMethods__createHandlers$$)(this), this.$_eventHandler$.$hideTooltip$())
};
D.$JSCompiler_StaticMethods__createHandlers$$ = function $$JSCompiler_StaticMethods__createHandlers$$$($JSCompiler_StaticMethods__createHandlers$self$$) {
  $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$ = new D.$DvtThematicMapEventManager$$($JSCompiler_StaticMethods__createHandlers$self$$.$_context$, $JSCompiler_StaticMethods__createHandlers$self$$.$__dispatchEvent$, $JSCompiler_StaticMethods__createHandlers$self$$);
  $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$.$addListeners$($JSCompiler_StaticMethods__createHandlers$self$$);
  (0,D.$DvtAgent$isTouchDevice$$)() ? $JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$ = D.$JSCompiler_alias_NULL$$ : ($JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$ = new D.$DvtThematicMapKeyboardHandler$$($JSCompiler_StaticMethods__createHandlers$self$$, $JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$), (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)($JSCompiler_StaticMethods__createHandlers$self$$.$_eventHandler$, $JSCompiler_StaticMethods__createHandlers$self$$.$_keyboardHandler$))
};
D.$DvtThematicMap$$.prototype.$HandleLegendResize$ = function $$DvtThematicMap$$$$$HandleLegendResize$$($event$$502_x$$226$$) {
  (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) || ($event$$502_x$$226$$ = this.$_width$ - 5 - $event$$502_x$$226$$.getWidth(), this.$_legendPanel$.$setTranslateX$($event$$502_x$$226$$))
};
D.$DvtThematicMap$$.prototype.$_renderLegend$ = function $$DvtThematicMap$$$$$_renderLegend$$() {
  if(this.$_legendXml$) {
    this.$_legendPanel$ && (this.$_legendPanel$.$destroy$(), this.removeChild(this.$_legendPanel$));
    var $disclosed$$8_object$$inline_7103_rect$$inline_10556_west$$inline_7107_width$$inline_7105_x$$227$$ = "true" == this.$_legendXml$.$getAttr$("disclosed"), $isFixed$$2$$ = "fixed" == this.$_legendXml$.$getAttr$("display") || (0,D.$DvtAgent$isEnvironmentBatik$$)();
    if(!$isFixed$$2$$ || $disclosed$$8_object$$inline_7103_rect$$inline_10556_west$$inline_7107_width$$inline_7105_x$$227$$) {
      var $expandTooltip$$4_maxWidth$$27_overState$$13$$ = this.$_legendXml$.$getAttr$("maxWidth"), $collapseTooltip$$4_downState$$13_maxHeight$$19_percentIndex$$ = $expandTooltip$$4_maxWidth$$27_overState$$13$$.indexOf("%"), $expandTooltip$$4_maxWidth$$27_overState$$13$$ = -1 != $collapseTooltip$$4_downState$$13_maxHeight$$19_percentIndex$$ ? (0,window.parseFloat)($expandTooltip$$4_maxWidth$$27_overState$$13$$.substring(0, $collapseTooltip$$4_downState$$13_maxHeight$$19_percentIndex$$)) / 100 * 
      this.$_width$ : (0,window.parseFloat)($expandTooltip$$4_maxWidth$$27_overState$$13$$), $collapseTooltip$$4_downState$$13_maxHeight$$19_percentIndex$$ = this.$_height$ - 10;
      if("alta" == this.$_skinName$) {
        this.$_legendPanel$ = new D.$DvtPanelDrawer$$(this.$_context$, D.$JSCompiler_alias_NULL$$, this, "pd"), this.$_legendPanel$.$addEvtListener$("dvtPanelDrawerEvent", this.$HandleLegendEvent$, D.$JSCompiler_alias_FALSE$$, this), this.$_legendPanel$.$setMaxWidth$($expandTooltip$$4_maxWidth$$27_overState$$13$$), this.$_legendPanel$.$setMaxHeight$($collapseTooltip$$4_downState$$13_maxHeight$$19_percentIndex$$), this.$_legendPanel$.$_isFixed$ = $isFixed$$2$$, (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? 
        (this.$_legendPanel$.$_discloseDirection$ = "right", this.$_legendPanel$.$setTranslateX$(0)) : this.$_legendPanel$.$setTranslateX$(this.$_width$)
      }else {
        this.$_legendPanel$ = new D.$DvtCollapsiblePanel$$(this.$_context$, $expandTooltip$$4_maxWidth$$27_overState$$13$$, $collapseTooltip$$4_downState$$13_maxHeight$$19_percentIndex$$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_7098_alpha$$inline_10557_dim$$78_dims$$inline_7104_height$$inline_7106_legendCollapseDir_upState$$16$$, (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this), this.$getSubcomponentStyles$(), $disclosed$$8_object$$inline_7103_rect$$inline_10556_west$$inline_7107_width$$inline_7105_x$$227$$, 
        $isFixed$$2$$);
        this.$_legendPanel$.$addEvtListener$("dvtCollapsiblePanelEvent", this.$HandleLegendEvent$, D.$JSCompiler_alias_FALSE$$, this);
        this.$_legendPanel$.$addEvtListener$("dvtResizeEvent", this.$HandleLegendResize$, D.$JSCompiler_alias_FALSE$$, this);
        var $expandTooltip$$4_maxWidth$$27_overState$$13$$ = this.$_legendXml$.$getAttr$("expandTooltip"), $collapseTooltip$$4_downState$$13_maxHeight$$19_percentIndex$$ = this.$_legendXml$.$getAttr$("collapseTooltip"), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_7098_alpha$$inline_10557_dim$$78_dims$$inline_7104_height$$inline_7106_legendCollapseDir_upState$$16$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? "col_northwest" : "col_northeast", $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_7098_alpha$$inline_10557_dim$$78_dims$$inline_7104_height$$inline_7106_legendCollapseDir_upState$$16$$ = 
        this.$_legendPanel$;
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_7098_alpha$$inline_10557_dim$$78_dims$$inline_7104_height$$inline_7106_legendCollapseDir_upState$$16$$.$_expandTooltip$ = $expandTooltip$$4_maxWidth$$27_overState$$13$$;
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_7098_alpha$$inline_10557_dim$$78_dims$$inline_7104_height$$inline_7106_legendCollapseDir_upState$$16$$.$_collapseTooltip$ = $collapseTooltip$$4_downState$$13_maxHeight$$19_percentIndex$$
      }
      this.$_legend$ = new D.DvtCommonLegend(this.$_context$, this.$_legendPanel$.$getMaxContentWidth$(), this.$_legendPanel$.$getMaxContentHeight$(), (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this), this.$_skinName$);
      this.$_legend$.$setXML$(this.$_legendXml$);
      this.$addChild$(this.$_legendPanel$);
      this.$addChild$(this.$_legend$);
      this.$_legend$.$render$();
      var $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$;
      if("alta" == this.$_skinName$) {
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_7098_alpha$$inline_10557_dim$$78_dims$$inline_7104_height$$inline_7106_legendCollapseDir_upState$$16$$ = this.$_legend$.$getDimensions$();
        (0,D.$JSCompiler_StaticMethods_setMaxContainerHeight$$)(this.$_legendPanel$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_7098_alpha$$inline_10557_dim$$78_dims$$inline_7104_height$$inline_7106_legendCollapseDir_upState$$16$$.$h$);
        this.removeChild(this.$_legend$);
        var $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_7098_alpha$$inline_10557_dim$$78_dims$$inline_7104_height$$inline_7106_legendCollapseDir_upState$$16$$ = new D.$DvtImage$$(this.$_context$, (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendEna, 0, 0, 24, 24), $expandTooltip$$4_maxWidth$$27_overState$$13$$ = new D.$DvtImage$$(this.$_context$, (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendOvr, 0, 0, 24, 24), $collapseTooltip$$4_downState$$13_maxHeight$$19_percentIndex$$ = 
        new D.$DvtImage$$(this.$_context$, (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)(this).legendDwn, 0, 0, 24, 24), $tip$$7$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$getBundle$(), "LEGEND");
        (0,D.$JSCompiler_StaticMethods_addPanel$$)(this.$_legendPanel$, this.$_legend$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_7098_alpha$$inline_10557_dim$$78_dims$$inline_7104_height$$inline_7106_legendCollapseDir_upState$$16$$, $expandTooltip$$4_maxWidth$$27_overState$$13$$, $collapseTooltip$$4_downState$$13_maxHeight$$19_percentIndex$$, $tip$$7$$, "legend");
        this.$_legendPanel$.$renderComponent$();
        $disclosed$$8_object$$inline_7103_rect$$inline_10556_west$$inline_7107_width$$inline_7105_x$$227$$ && this.$_legendPanel$.$setDisclosed$(D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$)
      }else {
        $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$ = this.$_legendPanel$, $disclosed$$8_object$$inline_7103_rect$$inline_10556_west$$inline_7107_width$$inline_7105_x$$227$$ = this.$_legend$, $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_scrollableContainer$.$addChild$($disclosed$$8_object$$inline_7103_rect$$inline_10556_west$$inline_7107_width$$inline_7105_x$$227$$), $disclosed$$8_object$$inline_7103_rect$$inline_10556_west$$inline_7107_width$$inline_7105_x$$227$$.$addEvtListener$("dvtResizeEvent", 
        $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$HandleResize$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$), $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_7098_alpha$$inline_10557_dim$$78_dims$$inline_7104_height$$inline_7106_legendCollapseDir_upState$$16$$ = $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_scrollableContainer$.$getDimensions$(), $disclosed$$8_object$$inline_7103_rect$$inline_10556_west$$inline_7107_width$$inline_7105_x$$227$$ = 
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_7098_alpha$$inline_10557_dim$$78_dims$$inline_7104_height$$inline_7106_legendCollapseDir_upState$$16$$.$w$ + 10, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_7098_alpha$$inline_10557_dim$$78_dims$$inline_7104_height$$inline_7106_legendCollapseDir_upState$$16$$ = $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_7098_alpha$$inline_10557_dim$$78_dims$$inline_7104_height$$inline_7106_legendCollapseDir_upState$$16$$.$h$ + 
        10, $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_height$ = $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_7098_alpha$$inline_10557_dim$$78_dims$$inline_7104_height$$inline_7106_legendCollapseDir_upState$$16$$, $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_width$ = $disclosed$$8_object$$inline_7103_rect$$inline_10556_west$$inline_7107_width$$inline_7105_x$$227$$, $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_background$ ? 
        ($JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_background$.$setCmds$((0,D.$JSCompiler_StaticMethods__getOutlinePath$$)($JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$, $disclosed$$8_object$$inline_7103_rect$$inline_10556_west$$inline_7107_width$$inline_7105_x$$227$$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_7098_alpha$$inline_10557_dim$$78_dims$$inline_7104_height$$inline_7106_legendCollapseDir_upState$$16$$)), $disclosed$$8_object$$inline_7103_rect$$inline_10556_west$$inline_7107_width$$inline_7105_x$$227$$ = 
        "col_northwest" == $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_collapseDir$ || "col_southwest" == $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_collapseDir$, $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_buttonFrame$ && $disclosed$$8_object$$inline_7103_rect$$inline_10556_west$$inline_7107_width$$inline_7105_x$$227$$ && $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_buttonFrame$.$setTranslateX$($JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_width$)) : 
        ($disclosed$$8_object$$inline_7103_rect$$inline_10556_west$$inline_7107_width$$inline_7105_x$$227$$ = new D.$DvtPath$$($JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_context$, (0,D.$JSCompiler_StaticMethods__getOutlinePath$$)($JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$, $disclosed$$8_object$$inline_7103_rect$$inline_10556_west$$inline_7107_width$$inline_7105_x$$227$$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_7098_alpha$$inline_10557_dim$$78_dims$$inline_7104_height$$inline_7106_legendCollapseDir_upState$$16$$)), 
        $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_7098_alpha$$inline_10557_dim$$78_dims$$inline_7104_height$$inline_7106_legendCollapseDir_upState$$16$$ = $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_styleMap$.borderAlpha, $disclosed$$8_object$$inline_7103_rect$$inline_10556_west$$inline_7107_width$$inline_7105_x$$227$$.$setSolidFill$($JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_bgColor$, $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_bgAlpha$), 
        $disclosed$$8_object$$inline_7103_rect$$inline_10556_west$$inline_7107_width$$inline_7105_x$$227$$.$setSolidStroke$($JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_borderColor$, $JSCompiler_StaticMethods_setButtonTooltips$self$$inline_7098_alpha$$inline_10557_dim$$78_dims$$inline_7104_height$$inline_7106_legendCollapseDir_upState$$16$$), $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_background$ = $disclosed$$8_object$$inline_7103_rect$$inline_10556_west$$inline_7107_width$$inline_7105_x$$227$$, 
        $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$addChildAt$($JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_background$, 0), $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_isFixed$ || ($JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_buttonFrame$ = D.$DvtControlPanelLAFUtils$$.$createEmptyViewClosedFrame$($JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_context$, 
        25, $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_styleMap$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_buttonFrame$.$setAlpha$($JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_styleMap$.borderAlpha), $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$addChild$($JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_buttonFrame$), $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_collapseExpandButton$ = 
        $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.isCollapsed() ? D.$DvtButtonLAFUtils$$.$createExpandButton$($JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_context$, $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_buttonImages$, 25, $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_styleMap$, D.$JSCompiler_alias_FALSE$$) : D.$DvtButtonLAFUtils$$.$createCollapseButton$($JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_context$, 
        $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_buttonImages$, 25, $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_styleMap$, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_buttonFrame$.$addChild$($JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_collapseExpandButton$), "col_northwest" == $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_collapseDir$ || 
        "col_southwest" == $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_collapseDir$ || ($JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_buttonFrame$.$setTranslateY$(25), $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_buttonFrame$.$setRotation$(-window.Math.PI)), (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_context$) && $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_buttonFrame$.$setTranslateX$($JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_width$), 
        (0,D.$DvtAgent$isTouchDevice$$)() ? $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$) : ($JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, 
        $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$OnButtonClick$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$), $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$OnButtonHoverOver$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$), 
        $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_collapseExpandButton$.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$OnButtonHoverOut$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$)))), $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$_collapse$ && (0,D.$JSCompiler_StaticMethods__collapseExpand$$)($JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$, 
        D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$ = this.$_legendPanel$.$getDimensions$(), $disclosed$$8_object$$inline_7103_rect$$inline_10556_west$$inline_7107_width$$inline_7105_x$$227$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? 5 : this.$_width$ - 5 - $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$w$ - $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.x, (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_legendPanel$, 
        $disclosed$$8_object$$inline_7103_rect$$inline_10556_west$$inline_7107_width$$inline_7105_x$$227$$, 5), $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$w$ += 5
      }
      if(this.$_isFixedLegend$ = $isFixed$$2$$) {
        $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$ || ($JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$ = this.$_legendPanel$.$getDimensions$()), this.$_legendWidth$ = $JSCompiler_StaticMethods_addContent$self$$inline_7102_legendPanelDim$$.$w$
      }
    }
  }
};
D.$DvtThematicMap$$.prototype.$Render$ = function $$DvtThematicMap$$$$$Render$$() {
  D.$DvtThematicMap$$.$superclass$.$Render$.call(this);
  var $pzcContainer$$ = new D.$DvtContainer$$(this.$_context$), $cpContainer$$ = new D.$DvtContainer$$(this.$_context$);
  this.$_pzc$ = this.$_panZoomCanvas$;
  this.$_pzc$.$addChild$($pzcContainer$$);
  this.$_pzc$.$_contentPane$.$addChild$($cpContainer$$);
  this.$_render$($pzcContainer$$, $cpContainer$$);
  if(this.$_topLayer$) {
    (this.$_controlPanel$ = this.$_pzc$.$_controlPanel$) && this.$_pzc$.$addChild$(this.$_controlPanel$);
    (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
    var $bounds$$107$$ = new D.$DvtRectangle$$(0, 0, this.$_width$, this.$_height$);
    if(!this.$_bRendered$ && !this.$_oldPzc$) {
      D.$DvtBlackBoxAnimationHandler$$.isSupported(this.$_animationOnDisplay$) && (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$_context$, this.$_animationOnDisplay$, this.$_pzc$, $bounds$$107$$, this.$_animationDuration$))
    }else {
      var $anim$$26$$ = D.$JSCompiler_alias_NULL$$;
      if(this.$_bBaseMapChanged$ && !this.$_isResize$) {
        $anim$$26$$ = this.$_animationOnMapChange$
      }else {
        if(this.$_topLayer$ && this.$_topLayer$.$LayerName$ != this.$_oldTopLayerName$ && ($anim$$26$$ = this.$_topLayer$.$getAnimation$(), !$anim$$26$$)) {
          var $dataLayers$$7$$ = this.$_topLayer$.$DataLayers$, $i$$621$$;
          for($i$$621$$ in $dataLayers$$7$$) {
            if($dataLayers$$7$$[$i$$621$$].$getAnimation$()) {
              $anim$$26$$ = $dataLayers$$7$$[$i$$621$$].$getAnimation$();
              break
            }
          }
        }
      }
      $anim$$26$$ && D.$DvtBlackBoxAnimationHandler$$.isSupported($anim$$26$$) ? (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_context$, $anim$$26$$, this.$_oldPzc$, this.$_pzc$, $bounds$$107$$, this.$_animationDuration$)) && this.$addChild$(this.$_oldPzc$) : this.$_pzc$.$_contentPane$.removeChild(this.$_cpContainer$)
    }
    this.$_animation$ && (this.$_controlPanel$ && this.$addChild$(this.$_controlPanel$), this.$_eventHandler$.$hideTooltip$(), this.$_eventHandler$.$removeListeners$(this), this.$_animation$.$setOnEnd$(this.$OnAnimationEnd$, this), this.$_animation$.play());
    this.$_pzcContainer$ = $pzcContainer$$;
    this.$_cpContainer$ = $cpContainer$$;
    this.$_topLayer$ && (this.$_oldTopLayerName$ = this.$_topLayer$.$LayerName$);
    this.$_bRendered$ = D.$JSCompiler_alias_TRUE$$
  }
};
D.$DvtThematicMap$$.prototype.$_render$ = function $$DvtThematicMap$$$$$_render$$($pzcContainer$$1$$, $cpContainer$$1$$) {
  this.$_renderLegend$();
  $cpContainer$$1$$.$addChild$(this.$_areaLayers$);
  $cpContainer$$1$$.$addChild$(this.$_dataAreaLayers$);
  this.$_isMarkerZoomBehaviorFixed$ ? $pzcContainer$$1$$.$addChild$(this.$_dataPointLayers$) : $cpContainer$$1$$.$addChild$(this.$_dataPointLayers$);
  $pzcContainer$$1$$.$addChild$(this.$_labelLayers$);
  var $fittedZoom$$inline_7119_navigable$$inline_7110_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_10562$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
  this.$_topLayerRendered$ = D.$JSCompiler_alias_FALSE$$;
  for(var $i$$622_mapDim$$inline_10563$$ = 0;$i$$622_mapDim$$inline_10563$$ < this.$_layers$.length;$i$$622_mapDim$$inline_10563$$++) {
    var $layer$$20_pzcDim$$inline_10564$$ = this.$_layers$[$i$$622_mapDim$$inline_10563$$];
    if(!this.$_topLayerRendered$ && $layer$$20_pzcDim$$inline_10564$$ instanceof D.$DvtMapAreaLayer$$ || !($layer$$20_pzcDim$$inline_10564$$ instanceof D.$DvtMapAreaLayer$$)) {
      $layer$$20_pzcDim$$inline_10564$$.$render$($fittedZoom$$inline_7119_navigable$$inline_7110_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_10562$$), !this.$_topLayerRendered$ && $layer$$20_pzcDim$$inline_10564$$ instanceof D.$DvtMapAreaLayer$$ && (this.$_topLayerRendered$ = D.$JSCompiler_alias_TRUE$$, this.$_topLayer$ = $layer$$20_pzcDim$$inline_10564$$)
    }
  }
  this.$_topLayer$ && ($fittedZoom$$inline_7119_navigable$$inline_7110_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_10562$$ = (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this), 0 == $fittedZoom$$inline_7119_navigable$$inline_7110_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_10562$$.length && ($fittedZoom$$inline_7119_navigable$$inline_7110_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_10562$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this)), this.$_keyboardHandler$ && 
  ($fittedZoom$$inline_7119_navigable$$inline_7110_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_10562$$ = $fittedZoom$$inline_7119_navigable$$inline_7110_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_10562$$[0]) && D.$DvtThematicMapEventManager$$.$superclass$.$setFocus$.call(this.$_eventHandler$, $fittedZoom$$inline_7119_navigable$$inline_7110_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_10562$$), this.$_pzc$.$setMinZoom$(D.$JSCompiler_alias_NULL$$), this.$_pzc$.$setMaxZoom$(D.$JSCompiler_alias_NULL$$), 
  this.$_pzc$.$_bZoomingEnabled$ = D.$JSCompiler_alias_TRUE$$, this.$_pzc$.$_bPanningEnabled$ = D.$JSCompiler_alias_TRUE$$, !this.$_bBaseMapChanged$ && !this.$_isResize$ && this.$_initialZoom$ != D.$JSCompiler_alias_NULL$$ ? ((0,D.$JSCompiler_StaticMethods_zoomTo$$)(this.$_pzc$, this.$_initialZoom$), (0,D.$JSCompiler_StaticMethods_panTo$$)(this.$_pzc$, this.$_initialCenterX$, this.$_initialCenterY$)) : this.$_initialZooming$ ? (0,D.$JSCompiler_StaticMethods__zoomData$$)(this) : this.$_pzc$.$zoomToFit$(D.$JSCompiler_alias_NULL$$, 
  this.$_topLayer$.$getLayerDim$()), (0,D.$JSCompiler_StaticMethods__processInitialDrilled$$)(this), $fittedZoom$$inline_7119_navigable$$inline_7110_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_10562$$ = this.$_pzc$.$_zoomToFitPadding$, $i$$622_mapDim$$inline_10563$$ = this.$_topLayer$.$getLayerDim$(), $layer$$20_pzcDim$$inline_10564$$ = this.$_pzc$.$getSize$(), $layer$$20_pzcDim$$inline_10564$$.$w$ = this.$_isFixedLegend$ ? $layer$$20_pzcDim$$inline_10564$$.$w$ - this.$_legendWidth$ : $layer$$20_pzcDim$$inline_10564$$.$w$, 
  $fittedZoom$$inline_7119_navigable$$inline_7110_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_10562$$ = window.Math.min(($layer$$20_pzcDim$$inline_10564$$.$w$ - 2 * $fittedZoom$$inline_7119_navigable$$inline_7110_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_10562$$) / $i$$622_mapDim$$inline_10563$$.$w$, ($layer$$20_pzcDim$$inline_10564$$.$h$ - 2 * $fittedZoom$$inline_7119_navigable$$inline_7110_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_10562$$) / $i$$622_mapDim$$inline_10563$$.$h$), 
  this.$_pzc$.$setMinZoom$($fittedZoom$$inline_7119_navigable$$inline_7110_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_10562$$), this.$_pzc$.$setMaxZoom$($fittedZoom$$inline_7119_navigable$$inline_7110_navigables$$11_pzcMatrix$$21_zoomPadding$$inline_10562$$ * (this.$_zooming$ ? this.$_maxZoomFactor$ : 1)), this.$_pzc$.$_bZoomingEnabled$ = this.$_zooming$, this.$_pzc$.$_bPanningEnabled$ = this.$_panning$)
};
D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$ = function $$JSCompiler_StaticMethods_OnUpdateLayerEnd$$$($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$) {
  (0,D.$JSCompiler_StaticMethods__processInitialDrilled$$)($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$);
  $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_initialZooming$ ? (0,D.$JSCompiler_StaticMethods__zoomData$$)($JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$) : $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_initialZoom$ == D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_pzc$.$zoomToFit$(D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_OnUpdateLayerEnd$self$$.$_topLayer$.$getLayerDim$())
};
D.$DvtThematicMap$$.prototype.$setRolloverBehavior$ = (0,D.$JSCompiler_set$$)("$_rolloverBehavior$");
D.$DvtThematicMap$$.prototype.$GetXmlDomParser$ = function $$DvtThematicMap$$$$$GetXmlDomParser$$() {
  return new D.$DvtThematicMapParser$$(this)
};
D.$JSCompiler_StaticMethods__transformContainers$$ = function $$JSCompiler_StaticMethods__transformContainers$$$($JSCompiler_StaticMethods__transformContainers$self$$, $pzcMatrix$$22$$) {
  var $mat$$26$$ = new D.$DvtMatrix$$;
  $mat$$26$$.translate($pzcMatrix$$22$$.$_tx$, $pzcMatrix$$22$$.$_ty$);
  $JSCompiler_StaticMethods__transformContainers$self$$.$_isMarkerZoomBehaviorFixed$ && $JSCompiler_StaticMethods__transformContainers$self$$.$_dataPointLayers$.$setMatrix$($mat$$26$$);
  $JSCompiler_StaticMethods__transformContainers$self$$.$_labelLayers$.$setMatrix$($mat$$26$$)
};
D.$DvtThematicMap$$.prototype.$HandleLegendEvent$ = function $$DvtThematicMap$$$$$HandleLegendEvent$$($event$$503$$) {
  var $spEvent$$1$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($spEvent$$1$$, D.DvtCommonLegend.$LEGEND_DISCLOSED_KEY$, "show" == $event$$503$$.$getSubType$());
  this.$__dispatchEvent$($spEvent$$1$$)
};
D.$JSCompiler_StaticMethods__updateAnimator$$ = function $$JSCompiler_StaticMethods__updateAnimator$$$($JSCompiler_StaticMethods__updateAnimator$self$$, $animator$$128_event$$504$$, $bRecenterObjs_transMat$$) {
  if($animator$$128_event$$504$$ = $animator$$128_event$$504$$.$_animator$) {
    var $contentPane$$2$$ = $JSCompiler_StaticMethods__updateAnimator$self$$.$_pzc$.$_contentPane$, $mat$$27$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$128_event$$504$$, $contentPane$$2$$, $contentPane$$2$$.$getMatrix$);
    $bRecenterObjs_transMat$$ && ($JSCompiler_StaticMethods__updateAnimator$self$$.$_currentAnimMatrix$ = $contentPane$$2$$.$getMatrix$(), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$128_event$$504$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_getCenteredObjsMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_setCenteredObjsMatrix$, $mat$$27$$));
    $bRecenterObjs_transMat$$ = new D.$DvtMatrix$$(1, 0, 0, 1, $mat$$27$$.$_tx$, $mat$$27$$.$_ty$);
    $JSCompiler_StaticMethods__updateAnimator$self$$.$_isMarkerZoomBehaviorFixed$ && (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$128_event$$504$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$.$getMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_dataPointLayers$.$setMatrix$, $bRecenterObjs_transMat$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$128_event$$504$$, "typeMatrix", $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$.$getMatrix$, $JSCompiler_StaticMethods__updateAnimator$self$$.$_labelLayers$.$setMatrix$, $bRecenterObjs_transMat$$)
  }
};
D.$DvtThematicMap$$.prototype.$HandleZoomEvent$ = function $$DvtThematicMap$$$$$HandleZoomEvent$$($event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$) {
  switch($event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$.$getSubType$()) {
    case "adjustPanConstraints":
      if(this.$_panning$) {
        var $i$$623_zoom$$inline_7152_zoomedMapH$$inline_7160$$ = $event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$.$_newZoom$;
        $event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$ = this.$_pzc$.$_zoomToFitPadding$;
        var $pzcDim$$inline_7154_pzcMatrix$$23_zoomedMapY$$inline_7158$$ = this.$_pzc$.$getSize$();
        $event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$ = new D.$DvtRectangle$$($event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$, $event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$, $pzcDim$$inline_7154_pzcMatrix$$23_zoomedMapY$$inline_7158$$.$w$ - 2 * $event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$, $pzcDim$$inline_7154_pzcMatrix$$23_zoomedMapY$$inline_7158$$.$h$ - 2 * 
        $event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$);
        var $legendAdjust$$inline_7161_mapDim$$inline_7156$$ = this.$_topLayer$.$getLayerDim$(), $minMaxX$$inline_7162_zoomedMapX$$inline_7157$$ = $legendAdjust$$inline_7161_mapDim$$inline_7156$$.x * $i$$623_zoom$$inline_7152_zoomedMapH$$inline_7160$$, $pzcDim$$inline_7154_pzcMatrix$$23_zoomedMapY$$inline_7158$$ = $legendAdjust$$inline_7161_mapDim$$inline_7156$$.y * $i$$623_zoom$$inline_7152_zoomedMapH$$inline_7160$$, $zoomedMapW$$inline_7159$$ = $legendAdjust$$inline_7161_mapDim$$inline_7156$$.$w$ * 
        $i$$623_zoom$$inline_7152_zoomedMapH$$inline_7160$$, $i$$623_zoom$$inline_7152_zoomedMapH$$inline_7160$$ = $legendAdjust$$inline_7161_mapDim$$inline_7156$$.$h$ * $i$$623_zoom$$inline_7152_zoomedMapH$$inline_7160$$;
        $zoomedMapW$$inline_7159$$ > $event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$.$w$ ? (this.$_pzc$.$_minPanX$ = $event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$.x + $event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$.$w$ - ($minMaxX$$inline_7162_zoomedMapX$$inline_7157$$ + $zoomedMapW$$inline_7159$$), this.$_pzc$.$_maxPanX$ = $event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$.x - 
        $minMaxX$$inline_7162_zoomedMapX$$inline_7157$$) : ($legendAdjust$$inline_7161_mapDim$$inline_7156$$ = 0, this.$_isFixedLegend$ && ((0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? $legendAdjust$$inline_7161_mapDim$$inline_7156$$ = this.$_isZoomingToFit$ ? 2 * -this.$_legendWidth$ : -this.$_legendWidth$ : this.$_isZoomingToFit$ || ($legendAdjust$$inline_7161_mapDim$$inline_7156$$ = this.$_legendWidth$)), $minMaxX$$inline_7162_zoomedMapX$$inline_7157$$ = ($event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$.x + 
        $event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$.$w$ - $legendAdjust$$inline_7161_mapDim$$inline_7156$$) / 2 - ($minMaxX$$inline_7162_zoomedMapX$$inline_7157$$ + $zoomedMapW$$inline_7159$$ / 2), this.$_pzc$.$_minPanX$ = $minMaxX$$inline_7162_zoomedMapX$$inline_7157$$, this.$_pzc$.$_maxPanX$ = $minMaxX$$inline_7162_zoomedMapX$$inline_7157$$);
        $i$$623_zoom$$inline_7152_zoomedMapH$$inline_7160$$ > $event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$.$h$ ? (this.$_pzc$.$_minPanY$ = $event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$.y + $event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$.$h$ - ($pzcDim$$inline_7154_pzcMatrix$$23_zoomedMapY$$inline_7158$$ + $i$$623_zoom$$inline_7152_zoomedMapH$$inline_7160$$), this.$_pzc$.$_maxPanY$ = $event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$.y - 
        $pzcDim$$inline_7154_pzcMatrix$$23_zoomedMapY$$inline_7158$$) : ($event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$ = ($event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$.y + $event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$.$h$) / 2 - ($pzcDim$$inline_7154_pzcMatrix$$23_zoomedMapY$$inline_7158$$ + $i$$623_zoom$$inline_7152_zoomedMapH$$inline_7160$$ / 2), this.$_pzc$.$_minPanY$ = $event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$, 
        this.$_pzc$.$_maxPanY$ = $event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$)
      }
      break;
    case "zooming":
    ;
    case "elasticAnimBegin":
      (0,D.$JSCompiler_StaticMethods__updateAnimator$$)(this, $event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$, D.$JSCompiler_alias_TRUE$$);
      break;
    case "zoomed":
      if($event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$.$_newZoom$ != D.$JSCompiler_alias_NULL$$) {
        $pzcDim$$inline_7154_pzcMatrix$$23_zoomedMapY$$inline_7158$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
        (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$, "panX", $pzcDim$$inline_7154_pzcMatrix$$23_zoomedMapY$$inline_7158$$.$_tx$);
        (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$, "panY", $pzcDim$$inline_7154_pzcMatrix$$23_zoomedMapY$$inline_7158$$.$_ty$);
        $event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$.$_animator$ = D.$JSCompiler_alias_NULL$$;
        this.$__dispatchEvent$($event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$);
        (0,D.$JSCompiler_StaticMethods__transformContainers$$)(this, $pzcDim$$inline_7154_pzcMatrix$$23_zoomedMapY$$inline_7158$$);
        for($i$$623_zoom$$inline_7152_zoomedMapH$$inline_7160$$ = 0;$i$$623_zoom$$inline_7152_zoomedMapH$$inline_7160$$ < this.$_layers$.length;$i$$623_zoom$$inline_7152_zoomedMapH$$inline_7160$$++) {
          this.$_layers$[$i$$623_zoom$$inline_7152_zoomedMapH$$inline_7160$$].$HandleZoomEvent$($event$$505_minMaxY$$inline_7163_padding$$inline_7153_viewportDim$$inline_7155$$, $pzcDim$$inline_7154_pzcMatrix$$23_zoomedMapY$$inline_7158$$)
        }
      }
      break;
    case "zoomAndCenter":
      (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)(this);
      break;
    case "zoomToFitBegin":
      this.$_isZoomingToFit$ = D.$JSCompiler_alias_TRUE$$;
      this.$_isFixedLegend$ && this.$_pzc$.$setSize$(this.$_width$ - this.$_legendWidth$, this.$_height$, D.$JSCompiler_alias_TRUE$$);
      break;
    case "zoomToFitEnd":
      this.$_isZoomingToFit$ = D.$JSCompiler_alias_FALSE$$, this.$_isFixedLegend$ && this.$_pzc$.$setSize$(this.$_width$, this.$_height$, D.$JSCompiler_alias_TRUE$$), this.$__dispatchEvent$(new D.$DvtZoomEvent$$)
  }
};
D.$DvtThematicMap$$.prototype.$HandlePanEvent$ = function $$DvtThematicMap$$$$$HandlePanEvent$$($event$$506_i$$624_stroke$$89$$) {
  var $subType$$8$$ = $event$$506_i$$624_stroke$$89$$.$getSubType$();
  if("elasticAnimBegin" == $subType$$8$$) {
    (0,D.$JSCompiler_StaticMethods__updateAnimator$$)(this, $event$$506_i$$624_stroke$$89$$, D.$JSCompiler_alias_FALSE$$)
  }else {
    if("panned" == $subType$$8$$ && $event$$506_i$$624_stroke$$89$$.$_newX$ != D.$JSCompiler_alias_NULL$$) {
      var $pzcMatrix$$24_styleMap$$86$$ = this.$_pzc$.$_contentPane$.$getMatrix$();
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$506_i$$624_stroke$$89$$, "zoom", this.$_pzc$.$getZoom$());
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$506_i$$624_stroke$$89$$, "panX", $pzcMatrix$$24_styleMap$$86$$.$_tx$);
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$506_i$$624_stroke$$89$$, "panY", $pzcMatrix$$24_styleMap$$86$$.$_ty$);
      $event$$506_i$$624_stroke$$89$$.$_animator$ = D.$JSCompiler_alias_NULL$$;
      this.$__dispatchEvent$($event$$506_i$$624_stroke$$89$$);
      (0,D.$JSCompiler_StaticMethods__transformContainers$$)(this, $pzcMatrix$$24_styleMap$$86$$);
      for($event$$506_i$$624_stroke$$89$$ = 0;$event$$506_i$$624_stroke$$89$$ < this.$_layers$.length;$event$$506_i$$624_stroke$$89$$++) {
        this.$_layers$[$event$$506_i$$624_stroke$$89$$].$HandlePanEvent$($pzcMatrix$$24_styleMap$$86$$)
      }
    }
  }
  this.$_legendPanel$ && ("alta" == this.$_skinName$ ? "dragPanBegin" === $subType$$8$$ ? this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$) : "dragPanEnd" === $subType$$8$$ && this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$) : ($pzcMatrix$$24_styleMap$$86$$ = this.$getSubcomponentStyles$(), $event$$506_i$$624_stroke$$89$$ = this.$_legendPanel$.$_background$.$getStroke$().clone(), "dragPanBegin" === $subType$$8$$ ? (this.$_legend$.$setAlpha$($pzcMatrix$$24_styleMap$$86$$.backgroundDragAlpha), 
  $event$$506_i$$624_stroke$$89$$.$setAlpha$($pzcMatrix$$24_styleMap$$86$$.borderDragAlpha), this.$_legendPanel$.$_background$.$setStroke$($event$$506_i$$624_stroke$$89$$), this.$_legendPanel$.$_buttonFrame$ && this.$_legendPanel$.$_buttonFrame$.$setAlpha$($pzcMatrix$$24_styleMap$$86$$.borderDragAlpha), this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$)) : "dragPanEnd" === $subType$$8$$ && (this.$_legend$.$setAlpha$(1), $event$$506_i$$624_stroke$$89$$.$setAlpha$($pzcMatrix$$24_styleMap$$86$$.borderAlpha), 
  this.$_legendPanel$.$_background$.$setStroke$($event$$506_i$$624_stroke$$89$$), this.$_legendPanel$.$_buttonFrame$ && this.$_legendPanel$.$_buttonFrame$.$setAlpha$($pzcMatrix$$24_styleMap$$86$$.borderAlpha), this.$_legendPanel$.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$))))
};
D.$DvtThematicMap$$.prototype.$GetControlPanelBehavior$ = function $$DvtThematicMap$$$$$GetControlPanelBehavior$$() {
  return"none" == this.$_drillMode$ && !this.$_zooming$ && (!this.$_panning$ || "alta" == this.$_skinName$) ? "hidden" : D.$DvtThematicMap$$.$superclass$.$GetControlPanelBehavior$.call(this)
};
D.$DvtThematicMap$$.prototype.$GetControlPanel$ = function $$DvtThematicMap$$$$$GetControlPanel$$() {
  var $cpBehavior$$3$$ = this.$GetControlPanelBehavior$();
  return"hidden" != $cpBehavior$$3$$ ? new D.$DvtThematicMapControlPanel$$(this.$_context$, this, "initCollapsed" == $cpBehavior$$3$$ ? 1 : 2) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__processInitialDrilled$$ = function $$JSCompiler_StaticMethods__processInitialDrilled$$$($JSCompiler_StaticMethods__processInitialDrilled$self$$) {
  $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_processingInitDrilled$ = D.$JSCompiler_alias_TRUE$$;
  for(var $i$$625$$ = 0;$i$$625$$ < $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_layers$.length;$i$$625$$++) {
    var $layerName$$29$$ = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_layers$[$i$$625$$].$LayerName$;
    $layerName$$29$$ in $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$ && ($JSCompiler_StaticMethods__processInitialDrilled$self$$.$_selectedAreas$[$layerName$$29$$] = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$[$layerName$$29$$][1], $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_clickedLayerName$ = $layerName$$29$$, $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_clickedDataLayerId$ = $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_initDrilled$[$layerName$$29$$][0], 
    $JSCompiler_StaticMethods__processInitialDrilled$self$$.$drillDown$())
  }
  $JSCompiler_StaticMethods__processInitialDrilled$self$$.$_processingInitDrilled$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtThematicMap$$.prototype.$resetMap$ = function $$DvtThematicMap$$$$$resetMap$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  for(var $animator$$inline_7166_removeObjs$$ = [], $addObjs$$ = [], $i$$626_j$$96$$ = this.$_layers$.length - 1;-1 < $i$$626_j$$96$$;$i$$626_j$$96$$--) {
    this.$_layers$[$i$$626_j$$96$$].$LayerName$ == this.$_topLayer$.$LayerName$ ? this.$_layers$[$i$$626_j$$96$$].reset($addObjs$$) : this.$_layers$[$i$$626_j$$96$$].reset($animator$$inline_7166_removeObjs$$)
  }
  for($i$$626_j$$96$$ = 0;$i$$626_j$$96$$ < $animator$$inline_7166_removeObjs$$.length;$i$$626_j$$96$$++) {
    if($animator$$inline_7166_removeObjs$$[$i$$626_j$$96$$]) {
      var $parent$$80$$ = $animator$$inline_7166_removeObjs$$[$i$$626_j$$96$$].getParent();
      $parent$$80$$ && $parent$$80$$.removeChild($animator$$inline_7166_removeObjs$$[$i$$626_j$$96$$])
    }
  }
  for($i$$626_j$$96$$ = 0;$i$$626_j$$96$$ < $addObjs$$.length;$i$$626_j$$96$$++) {
    $addObjs$$[$i$$626_j$$96$$] && $addObjs$$[$i$$626_j$$96$$].$setAlpha$(1)
  }
  this.$_drilledRowKeys$ = [];
  $animator$$inline_7166_removeObjs$$ = new D.$DvtAnimator$$(this.$_context$, 0.3);
  this.$_pzc$.$zoomToFit$($animator$$inline_7166_removeObjs$$);
  $animator$$inline_7166_removeObjs$$.play();
  this.$_drilled$ = [];
  this.$_controlPanel$ && "none" != this.$_drillMode$ && ((0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)(this.$_controlPanel$, D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_StaticMethods__zoomData$$ = function $$JSCompiler_StaticMethods__zoomData$$$($JSCompiler_StaticMethods__zoomData$self$$) {
  var $areaBounds_bounds$$108$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_dataAreaLayers$.$getDimensions$(), $pointBounds$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_dataPointLayers$.$getDimensions$();
  if($JSCompiler_StaticMethods__zoomData$self$$.$_isMarkerZoomBehaviorFixed$) {
    var $mat$$28$$ = $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$_contentPane$.$getMatrix$();
    $pointBounds$$.$w$ /= $mat$$28$$.$_a$;
    $pointBounds$$.$h$ /= $mat$$28$$.$_d$;
    $pointBounds$$.x /= $mat$$28$$.$_a$;
    $pointBounds$$.y /= $mat$$28$$.$_d$
  }
  $areaBounds_bounds$$108$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($areaBounds_bounds$$108$$, $pointBounds$$);
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)($JSCompiler_StaticMethods__zoomData$self$$);
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() && ($JSCompiler_StaticMethods__zoomData$self$$.$_animation$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods__zoomData$self$$.$_context$, 0.3));
  0 < $areaBounds_bounds$$108$$.$w$ && 0 < $areaBounds_bounds$$108$$.$h$ ? $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$zoomToFit$($JSCompiler_StaticMethods__zoomData$self$$.$_animation$, $areaBounds_bounds$$108$$) : $JSCompiler_StaticMethods__zoomData$self$$.$_pzc$.$zoomToFit$($JSCompiler_StaticMethods__zoomData$self$$.$_animation$, $JSCompiler_StaticMethods__zoomData$self$$.$_topLayer$.$getLayerDim$());
  $JSCompiler_StaticMethods__zoomData$self$$.$_animation$ && $JSCompiler_StaticMethods__zoomData$self$$.$_animation$.play()
};
D.$DvtThematicMap$$.prototype.$_zoomToFitBounds$ = function $$DvtThematicMap$$$$$_zoomToFitBounds$$($bounds$$109$$) {
  var $animator$$129$$ = new D.$DvtAnimator$$(this.$_context$, 0.3);
  this.$_pzc$.$zoomToFit$($animator$$129$$, $bounds$$109$$);
  $animator$$129$$.play()
};
D.$JSCompiler_StaticMethods_fitSelectedRegions$$ = function $$JSCompiler_StaticMethods_fitSelectedRegions$$$($JSCompiler_StaticMethods_fitSelectedRegions$self$$) {
  if($JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedDataLayerId$) {
    var $dataLayer$$29_selection$$26_selectionHandler$$5$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_fitSelectedRegions$self$$, $JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedLayerName$).$getDataLayer$($JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_clickedDataLayerId$);
    if($dataLayer$$29_selection$$26_selectionHandler$$5$$ && ($dataLayer$$29_selection$$26_selectionHandler$$5$$ = $dataLayer$$29_selection$$26_selectionHandler$$5$$.$_selectionHandler$)) {
      for(var $dataLayer$$29_selection$$26_selectionHandler$$5$$ = $dataLayer$$29_selection$$26_selectionHandler$$5$$.getSelection(), $i$$627$$ = 0;$i$$627$$ < $dataLayer$$29_selection$$26_selectionHandler$$5$$.length;$i$$627$$++) {
        $dataLayer$$29_selection$$26_selectionHandler$$5$$[$i$$627$$] = $dataLayer$$29_selection$$26_selectionHandler$$5$$[$i$$627$$].$getDisplayable$()
      }
      if(0 < $dataLayer$$29_selection$$26_selectionHandler$$5$$.length) {
        for(var $bounds$$110$$ = $dataLayer$$29_selection$$26_selectionHandler$$5$$[0].$getDimensions$(), $i$$627$$ = 1;$i$$627$$ < $dataLayer$$29_selection$$26_selectionHandler$$5$$.length;$i$$627$$++) {
          $bounds$$110$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($bounds$$110$$, $dataLayer$$29_selection$$26_selectionHandler$$5$$[$i$$627$$].$getDimensions$())
        }
        $JSCompiler_StaticMethods_fitSelectedRegions$self$$.$_zoomToFitBounds$($bounds$$110$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods_getDrillParentLayer$$ = function $$JSCompiler_StaticMethods_getDrillParentLayer$$$($JSCompiler_StaticMethods_getDrillParentLayer$self$$, $layerName$$30$$) {
  var $parentLayerName$$1$$ = D.$DvtBaseMapManager$$.$getParentLayerName$($JSCompiler_StaticMethods_getDrillParentLayer$self$$.$_mapName$, $layerName$$30$$);
  return(0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_getDrillParentLayer$self$$, $parentLayerName$$1$$)
};
D.$JSCompiler_StaticMethods_getDrillChildLayer$$ = function $$JSCompiler_StaticMethods_getDrillChildLayer$$$($JSCompiler_StaticMethods_getDrillChildLayer$self$$, $layerName$$31$$) {
  var $childLayerName$$1$$ = D.$DvtBaseMapManager$$.$getChildLayerName$($JSCompiler_StaticMethods_getDrillChildLayer$self$$.$_mapName$, $layerName$$31$$);
  return(0,D.$JSCompiler_StaticMethods_getLayer$$)($JSCompiler_StaticMethods_getDrillChildLayer$self$$, $childLayerName$$1$$)
};
D.$JSCompiler_StaticMethods_getNavigableAreas$$ = function $$JSCompiler_StaticMethods_getNavigableAreas$$$($JSCompiler_StaticMethods_getNavigableAreas$self$$) {
  var $disclosed$$9$$ = [];
  if($JSCompiler_StaticMethods_getNavigableAreas$self$$.$_topLayer$) {
    for(var $i$$628$$ = 0;$i$$628$$ < $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$.length;$i$$628$$++) {
      var $dataLayers$$8$$ = $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$[$i$$628$$].$DataLayers$, $id$$187$$;
      for($id$$187$$ in $dataLayers$$8$$) {
        $disclosed$$9$$ = $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_topLayer$.$LayerName$ == $JSCompiler_StaticMethods_getNavigableAreas$self$$.$_layers$[$i$$628$$].$LayerName$ ? $disclosed$$9$$.concat((0,D.$JSCompiler_StaticMethods_getNavigableAreaObjects$$)($dataLayers$$8$$[$id$$187$$])) : $disclosed$$9$$.concat((0,D.$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$)($dataLayers$$8$$[$id$$187$$]))
      }
    }
  }
  return $disclosed$$9$$
};
D.$JSCompiler_StaticMethods_getNavigableObjects$$ = function $$JSCompiler_StaticMethods_getNavigableObjects$$$($JSCompiler_StaticMethods_getNavigableObjects$self$$) {
  var $navigable$$8$$ = [];
  if($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_topLayer$) {
    for(var $i$$629$$ = 0;$i$$629$$ < $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$.length;$i$$629$$++) {
      var $dataLayers$$9$$ = $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$629$$].$DataLayers$;
      if($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_topLayer$.$LayerName$ == $JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$629$$].$LayerName$ || !($JSCompiler_StaticMethods_getNavigableObjects$self$$.$_layers$[$i$$629$$] instanceof D.$DvtMapAreaLayer$$)) {
        for(var $id$$188$$ in $dataLayers$$9$$) {
          $navigable$$8$$ = $navigable$$8$$.concat($dataLayers$$9$$[$id$$188$$].$_dataObjs$)
        }
      }
    }
  }
  return $navigable$$8$$
};
D.$DvtThematicMap$$.prototype.$_setCenteredObjsMatrix$ = function $$DvtThematicMap$$$$$_setCenteredObjsMatrix$$($matrix$$15$$) {
  this.$_currentAnimMatrix$ = $matrix$$15$$;
  if(this.$_isMarkerZoomBehaviorFixed$) {
    for(var $numLabelLayers_objs$$4$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this), $i$$630_j$$97$$ = 0;$i$$630_j$$97$$ < $numLabelLayers_objs$$4$$.length;$i$$630_j$$97$$++) {
      $numLabelLayers_objs$$4$$[$i$$630_j$$97$$].$HandleZoomEvent$($matrix$$15$$)
    }
    $numLabelLayers_objs$$4$$ = this.$_labelLayers$.$getNumChildren$();
    for($i$$630_j$$97$$ = 0;$i$$630_j$$97$$ < $numLabelLayers_objs$$4$$;$i$$630_j$$97$$++) {
      for(var $labelLayer$$ = this.$_labelLayers$.$getChildAt$($i$$630_j$$97$$), $numLabels$$1$$ = $labelLayer$$.$getNumChildren$(), $k$$6$$ = 0;$k$$6$$ < $numLabels$$1$$;$k$$6$$++) {
        var $label$$84$$ = $labelLayer$$.$getChildAt$($k$$6$$);
        $label$$84$$ instanceof D.$DvtMapLabel$$ && $label$$84$$.update($matrix$$15$$)
      }
    }
  }
};
D.$DvtThematicMap$$.prototype.$_getCenteredObjsMatrix$ = (0,D.$JSCompiler_get$$)("$_currentAnimMatrix$");
D.$DvtThematicMap$$.prototype.$drillDown$ = function $$DvtThematicMap$$$$$drillDown$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  var $childLayer$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)(this, this.$_clickedLayerName$), $parentLayer$$3$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$), $fadeInObjs$$5$$ = [];
  if($childLayer$$) {
    this.$_drillDataLayer$[this.$_clickedLayerName$] = this.$_clickedDataLayerId$;
    var $selectedAreas$$1$$ = this.$_selectedAreas$[this.$_clickedLayerName$];
    !this.$_processingInitDrilled$ && "single" == this.$_drillMode$ && (this.$_drilled$.pop(), $parentLayer$$3$$.reset($fadeInObjs$$5$$, $selectedAreas$$1$$), $childLayer$$.reset(this.$_drillAnimFadeOutObjs$));
    for(var $newSelectedAreas$$ = [], $i$$631$$ = 0;$i$$631$$ < $selectedAreas$$1$$.length;$i$$631$$++) {
      var $parentArea$$ = $selectedAreas$$1$$[$i$$631$$], $JSCompiler_StaticMethods_drill$self$$inline_7168_childrenToDisclose_drillLayer$$ = (0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)($parentLayer$$3$$, $parentArea$$);
      $newSelectedAreas$$.push($JSCompiler_StaticMethods_drill$self$$inline_7168_childrenToDisclose_drillLayer$$[0]);
      for(var $areaName$$inline_7169_j$$98$$ = 0;$areaName$$inline_7169_j$$98$$ < $JSCompiler_StaticMethods_drill$self$$inline_7168_childrenToDisclose_drillLayer$$.length;$areaName$$inline_7169_j$$98$$++) {
        this.$_childToParent$[$JSCompiler_StaticMethods_drill$self$$inline_7168_childrenToDisclose_drillLayer$$[$areaName$$inline_7169_j$$98$$]] = $selectedAreas$$1$$[$i$$631$$]
      }
      $childLayer$$.$discloseAreas$($JSCompiler_StaticMethods_drill$self$$inline_7168_childrenToDisclose_drillLayer$$, $fadeInObjs$$5$$);
      if($JSCompiler_StaticMethods_drill$self$$inline_7168_childrenToDisclose_drillLayer$$ = $parentLayer$$3$$.$getDataLayer$(this.$_clickedDataLayerId$)) {
        for(var $areaName$$inline_7169_j$$98$$ = $parentArea$$, $fadeOutObjs$$inline_7170$$ = this.$_drillAnimFadeOutObjs$, $i$$inline_7171_label$$inline_7172_leaderLine$$inline_7173$$ = 0;$i$$inline_7171_label$$inline_7172_leaderLine$$inline_7173$$ < $JSCompiler_StaticMethods_drill$self$$inline_7168_childrenToDisclose_drillLayer$$.$_areaObjs$.length;$i$$inline_7171_label$$inline_7172_leaderLine$$inline_7173$$++) {
          if($JSCompiler_StaticMethods_drill$self$$inline_7168_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_7171_label$$inline_7172_leaderLine$$inline_7173$$].$AreaId$ == $areaName$$inline_7169_j$$98$$) {
            $JSCompiler_StaticMethods_drill$self$$inline_7168_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_7171_label$$inline_7172_leaderLine$$inline_7173$$].$setDrilled$(D.$JSCompiler_alias_TRUE$$);
            $JSCompiler_StaticMethods_drill$self$$inline_7168_childrenToDisclose_drillLayer$$.$_drilled$.push($areaName$$inline_7169_j$$98$$);
            $fadeOutObjs$$inline_7170$$.push($JSCompiler_StaticMethods_drill$self$$inline_7168_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_7171_label$$inline_7172_leaderLine$$inline_7173$$].$getDisplayable$());
            if($i$$inline_7171_label$$inline_7172_leaderLine$$inline_7173$$ = $JSCompiler_StaticMethods_drill$self$$inline_7168_childrenToDisclose_drillLayer$$.$_areaObjs$[$i$$inline_7171_label$$inline_7172_leaderLine$$inline_7173$$].$getLabel$()) {
              $fadeOutObjs$$inline_7170$$.push($i$$inline_7171_label$$inline_7172_leaderLine$$inline_7173$$), ($i$$inline_7171_label$$inline_7172_leaderLine$$inline_7173$$ = $i$$inline_7171_label$$inline_7172_leaderLine$$inline_7173$$.$_leaderLine$) && $fadeOutObjs$$inline_7170$$.push($i$$inline_7171_label$$inline_7172_leaderLine$$inline_7173$$)
            }
            break
          }
        }
        for($i$$inline_7171_label$$inline_7172_leaderLine$$inline_7173$$ = 0;$i$$inline_7171_label$$inline_7172_leaderLine$$inline_7173$$ < $JSCompiler_StaticMethods_drill$self$$inline_7168_childrenToDisclose_drillLayer$$.$_dataObjs$.length;$i$$inline_7171_label$$inline_7172_leaderLine$$inline_7173$$++) {
          if($JSCompiler_StaticMethods_drill$self$$inline_7168_childrenToDisclose_drillLayer$$.$_dataObjs$[$i$$inline_7171_label$$inline_7172_leaderLine$$inline_7173$$].$AreaId$ == $areaName$$inline_7169_j$$98$$) {
            $fadeOutObjs$$inline_7170$$.push($JSCompiler_StaticMethods_drill$self$$inline_7168_childrenToDisclose_drillLayer$$.$_dataObjs$[$i$$inline_7171_label$$inline_7172_leaderLine$$inline_7173$$].$getDisplayable$());
            break
          }
        }
      }
      this.$_drilled$.push($parentArea$$)
    }
    (0,D.$JSCompiler_StaticMethods__handleDrillAnimations$$)(this, this.$_drillAnimFadeOutObjs$, $fadeInObjs$$5$$, D.$JSCompiler_alias_FALSE$$);
    (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, $childLayer$$.$LayerName$);
    this.$_clickedLayerName$ = $childLayer$$.$LayerName$;
    this.$_selectedAreas$[this.$_clickedLayerName$] = $newSelectedAreas$$
  }
};
D.$DvtThematicMap$$.prototype.$drillUp$ = function $$DvtThematicMap$$$$$drillUp$$() {
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)(this);
  for(var $childLayer$$1$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$), $parentLayer$$4$$ = (0,D.$JSCompiler_StaticMethods_getDrillParentLayer$$)(this, this.$_clickedLayerName$), $fadeInObjs$$6$$ = [], $newSelectedAreas$$1$$ = [], $selectedAreas$$2$$ = this.$_selectedAreas$[this.$_clickedLayerName$], $i$$632$$ = 0;$i$$632$$ < $selectedAreas$$2$$.length;$i$$632$$++) {
    var $index$$130_parentArea$$1$$ = this.$_childToParent$[$selectedAreas$$2$$[$i$$632$$]];
    $newSelectedAreas$$1$$.push($index$$130_parentArea$$1$$);
    if(-1 != D.$DvtArrayUtils$$.$getIndex$(this.$_drilled$, $index$$130_parentArea$$1$$)) {
      $childLayer$$1$$.$undiscloseAreas$((0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)($parentLayer$$4$$, $index$$130_parentArea$$1$$), this.$_drillAnimFadeOutObjs$);
      for(var $JSCompiler_StaticMethods_undrill$self$$inline_7175$$ = $parentLayer$$4$$.$getDataLayer$(this.$_drillDataLayer$[$parentLayer$$4$$.$LayerName$]), $areaName$$inline_7176$$ = $index$$130_parentArea$$1$$, $fadeInObjs$$inline_7177$$ = $fadeInObjs$$6$$, $i$$inline_7178_label$$inline_7180$$ = 0;$i$$inline_7178_label$$inline_7180$$ < $JSCompiler_StaticMethods_undrill$self$$inline_7175$$.$_areaObjs$.length;$i$$inline_7178_label$$inline_7180$$++) {
        if($JSCompiler_StaticMethods_undrill$self$$inline_7175$$.$_areaObjs$[$i$$inline_7178_label$$inline_7180$$].$AreaId$ == $areaName$$inline_7176$$) {
          $JSCompiler_StaticMethods_undrill$self$$inline_7175$$.$_drilled$.splice(D.$DvtArrayUtils$$.$getIndex$($JSCompiler_StaticMethods_undrill$self$$inline_7175$$.$_drilled$, $areaName$$inline_7176$$), 1);
          $JSCompiler_StaticMethods_undrill$self$$inline_7175$$.$_areaObjs$[$i$$inline_7178_label$$inline_7180$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
          var $displayable$$inline_7179$$ = $JSCompiler_StaticMethods_undrill$self$$inline_7175$$.$_areaObjs$[$i$$inline_7178_label$$inline_7180$$].$getDisplayable$();
          $JSCompiler_StaticMethods_undrill$self$$inline_7175$$.$_dataAreaLayer$.$addChild$($displayable$$inline_7179$$);
          $fadeInObjs$$inline_7177$$.push($displayable$$inline_7179$$);
          if($i$$inline_7178_label$$inline_7180$$ = $JSCompiler_StaticMethods_undrill$self$$inline_7175$$.$_areaObjs$[$i$$inline_7178_label$$inline_7180$$].$getLabel$()) {
            $i$$inline_7178_label$$inline_7180$$.update($JSCompiler_StaticMethods_undrill$self$$inline_7175$$.$_pzcMatrix$), $fadeInObjs$$inline_7177$$.push($i$$inline_7178_label$$inline_7180$$), $fadeInObjs$$inline_7177$$.push($i$$inline_7178_label$$inline_7180$$.$_leaderLine$)
          }
          break
        }
      }
      for($i$$inline_7178_label$$inline_7180$$ = 0;$i$$inline_7178_label$$inline_7180$$ < $JSCompiler_StaticMethods_undrill$self$$inline_7175$$.$_dataObjs$.length;$i$$inline_7178_label$$inline_7180$$++) {
        if($JSCompiler_StaticMethods_undrill$self$$inline_7175$$.$_dataObjs$[$i$$inline_7178_label$$inline_7180$$].$AreaId$ == $areaName$$inline_7176$$) {
          $displayable$$inline_7179$$ = $JSCompiler_StaticMethods_undrill$self$$inline_7175$$.$_dataObjs$[$i$$inline_7178_label$$inline_7180$$].$getDisplayable$();
          $JSCompiler_StaticMethods_undrill$self$$inline_7175$$.$_dataPointLayer$.$addChild$($displayable$$inline_7179$$);
          $fadeInObjs$$inline_7177$$.push($displayable$$inline_7179$$);
          break
        }
      }
      $index$$130_parentArea$$1$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_drilled$, $index$$130_parentArea$$1$$);
      -1 != $index$$130_parentArea$$1$$ && this.$_drilled$.splice($index$$130_parentArea$$1$$, 1)
    }
  }
  (0,D.$JSCompiler_StaticMethods__handleDrillAnimations$$)(this, this.$_drillAnimFadeOutObjs$, $fadeInObjs$$6$$, D.$JSCompiler_alias_TRUE$$);
  this.$_clickedLayerName$ = $parentLayer$$4$$.$LayerName$;
  this.$_clickedDataLayerId$ = this.$_drillDataLayer$[this.$_clickedLayerName$];
  this.$_selectedAreas$[this.$_clickedLayerName$] = $newSelectedAreas$$1$$;
  (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, this.$_clickedLayerName$)
};
D.$JSCompiler_StaticMethods__stopAnimation$$ = function $$JSCompiler_StaticMethods__stopAnimation$$$($JSCompiler_StaticMethods__stopAnimation$self$$) {
  $JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$ && ($JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$.stop(D.$JSCompiler_alias_TRUE$$), $JSCompiler_StaticMethods__stopAnimation$self$$.$_animation$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods__handleDrillAnimations$$ = function $$JSCompiler_StaticMethods__handleDrillAnimations$$$($JSCompiler_StaticMethods__handleDrillAnimations$self$$, $oldObjs$$2$$, $newObjs$$2$$, $isDrillUp$$) {
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_pzc$.$_contentPane$.$getMatrix$();
  if($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_drillZoomToFit$ && !$JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_processingInitDrilled$) {
    var $animator$$131$$ = new D.$DvtAnimator$$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_context$, 0.3);
    (0,D.$DvtAgent$isEnvironmentBrowser$$)() || ($animator$$131$$ = D.$JSCompiler_alias_NULL$$);
    $isDrillUp$$ ? $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_pzc$.$zoomToFit$($animator$$131$$) : (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$);
    $animator$$131$$ && $animator$$131$$.play()
  }
  (0,D.$JSCompiler_StaticMethods__stopAnimation$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$);
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_context$, $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animationOnDrill$, $oldObjs$$2$$, $newObjs$$2$$, D.$JSCompiler_alias_NULL$$, 0.5);
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() || ($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ = D.$JSCompiler_alias_NULL$$);
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$ ? ($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_eventHandler$.$hideTooltip$(), $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_eventHandler$.$removeListeners$($JSCompiler_StaticMethods__handleDrillAnimations$self$$), $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$.$setOnEnd$($JSCompiler_StaticMethods__handleDrillAnimations$self$$.$OnDrillAnimationEnd$, $JSCompiler_StaticMethods__handleDrillAnimations$self$$), 
  $JSCompiler_StaticMethods__handleDrillAnimations$self$$.$_animation$.play()) : (0,D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$)($JSCompiler_StaticMethods__handleDrillAnimations$self$$)
};
D.$DvtThematicMap$$.prototype.$__dispatchEvent$ = function $$DvtThematicMap$$$$$__dispatchEvent$$($event$$507$$) {
  var $JSCompiler_temp_const$$8861_drillType$$inline_7187_type$$140$$ = $event$$507$$.$getType$();
  if("selection" == $JSCompiler_temp_const$$8861_drillType$$inline_7187_type$$140$$) {
    if(this.$_clickedDataLayerId$) {
      this.$_selectedRowKeys$ = $event$$507$$.getSelection();
      for(var $JSCompiler_temp_const$$8861_drillType$$inline_7187_type$$140$$ = this.$_selectedAreas$, $JSCompiler_temp_const$$8860$$ = this.$_clickedLayerName$, $selectedObjs$$inline_10591$$ = this.$_selectedRowKeys$, $selectedAreas$$inline_10592$$ = [], $areaObjs$$inline_10593$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this, this.$_clickedLayerName$).$getDataLayer$(this.$_clickedDataLayerId$).$_areaObjs$, $i$$inline_10594$$ = 0;$i$$inline_10594$$ < $selectedObjs$$inline_10591$$.length;$i$$inline_10594$$++) {
        for(var $j$$inline_10595$$ = 0;$j$$inline_10595$$ < $areaObjs$$inline_10593$$.length;$j$$inline_10595$$++) {
          if($areaObjs$$inline_10593$$[$j$$inline_10595$$].getId() == $selectedObjs$$inline_10591$$[$i$$inline_10594$$]) {
            $selectedAreas$$inline_10592$$.push($areaObjs$$inline_10593$$[$j$$inline_10595$$].$AreaId$);
            break
          }
        }
      }
      $JSCompiler_temp_const$$8861_drillType$$inline_7187_type$$140$$[$JSCompiler_temp_const$$8860$$] = $selectedAreas$$inline_10592$$;
      (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, this.$_clickedLayerName$);
      (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$507$$, "clientId", this.$_clickedDataLayerId$);
      this.$_clickedObject$ && !(this.$_clickedObject$ instanceof D.$DvtMarker$$) && (this.$_zoomToFitObject$ = this.$_clickedObject$)
    }else {
      (0,D.$JSCompiler_StaticMethods__updateDrillButton$$)(this, D.$JSCompiler_alias_NULL$$), this.$_zoomToFitObject$ = D.$JSCompiler_alias_NULL$$
    }
  }else {
    $JSCompiler_temp_const$$8861_drillType$$inline_7187_type$$140$$ == D.$DvtMapDrillEvent$$.$TYPE$ ? ((0,D.$JSCompiler_StaticMethods_addParam$$)($event$$507$$, "clientId", this.$_eventClientId$), this.$_drilledRowKeys$ = "multiple" == this.$_drillMode$ ? this.$_drilledRowKeys$.concat(this.$_selectedRowKeys$) : this.$_selectedRowKeys$, $JSCompiler_temp_const$$8861_drillType$$inline_7187_type$$140$$ = $event$$507$$.$_drillType$, $JSCompiler_temp_const$$8861_drillType$$inline_7187_type$$140$$ == D.$DvtMapDrillEvent$$.$DRILL_UP$ && 
    this.$drillUp$(), $JSCompiler_temp_const$$8861_drillType$$inline_7187_type$$140$$ == D.$DvtMapDrillEvent$$.$DRILL_DOWN$ ? this.$drillDown$() : $JSCompiler_temp_const$$8861_drillType$$inline_7187_type$$140$$ == D.$DvtMapDrillEvent$$.$RESET$ && this.$resetMap$(), $event$$507$$.$setDisclosed$(this.$_drilledRowKeys$)) : ("showPopup" == $JSCompiler_temp_const$$8861_drillType$$inline_7187_type$$140$$ || "hidePopup" == $JSCompiler_temp_const$$8861_drillType$$inline_7187_type$$140$$) && (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$507$$, 
    "clientId", this.$_eventClientId$)
  }
  D.$DvtThematicMap$$.$superclass$.$__dispatchEvent$.call(this, $event$$507$$)
};
D.$JSCompiler_StaticMethods__updateDrillButton$$ = function $$JSCompiler_StaticMethods__updateDrillButton$$$($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$33$$) {
  if($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$ && $JSCompiler_StaticMethods__updateDrillButton$self$$.$_drillMode$ && "none" != $JSCompiler_StaticMethods__updateDrillButton$self$$.$_drillMode$) {
    var $childLayer$$2$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$33$$), $parentLayer$$5$$ = (0,D.$JSCompiler_StaticMethods_getDrillParentLayer$$)($JSCompiler_StaticMethods__updateDrillButton$self$$, $layerName$$33$$);
    $childLayer$$2$$ ? (0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_TRUE$$) : (0,D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_FALSE$$);
    $parentLayer$$5$$ ? (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_TRUE$$) : (0,D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$)($JSCompiler_StaticMethods__updateDrillButton$self$$.$_controlPanel$, D.$JSCompiler_alias_FALSE$$)
  }
};
D.$DvtThematicMap$$.prototype.$destroy$ = function $$DvtThematicMap$$$$$destroy$$() {
  D.$DvtThematicMap$$.$superclass$.$destroy$.call(this);
  this.$_eventHandler$ && (this.$_eventHandler$.$destroy$(), this.$_eventHandler$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtThematicMap$$.prototype.destroy = D.$DvtThematicMap$$.prototype.$destroy$;
D.$DvtThematicMap$$.prototype.$OnAnimationEnd$ = function $$DvtThematicMap$$$$$OnAnimationEnd$$() {
  this.$_controlPanel$ && this.$_pzc$.$addChild$(this.$_controlPanel$);
  this.$_oldPzc$ && (this.removeChild(this.$_oldPzc$), this.$_oldPzc$ = D.$JSCompiler_alias_NULL$$);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$_eventHandler$.$addListeners$(this)
};
D.$DvtThematicMap$$.prototype.$OnDrillAnimationEnd$ = function $$DvtThematicMap$$$$$OnDrillAnimationEnd$$() {
  (0,D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$)(this);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$_eventHandler$.$addListeners$(this)
};
D.$JSCompiler_StaticMethods__cleanUpDrilledObjects$$ = function $$JSCompiler_StaticMethods__cleanUpDrilledObjects$$$($JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$) {
  if(0 < $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$.length) {
    for(var $i$$633$$ = 0;$i$$633$$ < $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$.length;$i$$633$$++) {
      var $obj$$193$$ = $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$[$i$$633$$];
      if($obj$$193$$) {
        if($obj$$193$$ instanceof D.$DvtMapLabel$$) {
          $obj$$193$$.reset()
        }else {
          if($obj$$193$$.$isDrilled$ && $obj$$193$$.$isDrilled$()) {
            $obj$$193$$.$setAlpha$(0)
          }else {
            var $parent$$81$$ = $obj$$193$$.getParent();
            $parent$$81$$ && $parent$$81$$.removeChild($obj$$193$$)
          }
        }
      }
    }
    $JSCompiler_StaticMethods__cleanUpDrilledObjects$self$$.$_drillAnimFadeOutObjs$ = []
  }
};
D.$DvtThematicMap$$.prototype.$_rolloverCallback$ = function $$DvtThematicMap$$$$$_rolloverCallback$$($event$$510$$) {
  this.$_fireRolloverEvent$("mouseover" == $event$$510$$.$_mouseState$ ? "categoryRollOver" : "categoryRollOut", $event$$510$$.$getHideAttributes$())
};
D.$DvtThematicMap$$.prototype.$_fireRolloverEvent$ = function $$DvtThematicMap$$$$$_fireRolloverEvent$$($type$$142$$, $category$$17$$) {
  var $rolloverEvent$$1$$ = new D.$DvtCategoryRolloverEvent$$($type$$142$$, $category$$17$$), $objects$$5$$ = [], $layerId_legendItems$$2$$;
  for($layerId_legendItems$$2$$ in this.$_areas$) {
    for(var $key$$67_wrapper$$1$$ in this.$_areas$[$layerId_legendItems$$2$$]) {
      $objects$$5$$.push(this.$_areas$[$layerId_legendItems$$2$$][$key$$67_wrapper$$1$$])
    }
  }
  for($layerId_legendItems$$2$$ in this.$_markers$) {
    for($key$$67_wrapper$$1$$ in this.$_markers$[$layerId_legendItems$$2$$]) {
      $objects$$5$$.push(this.$_markers$[$layerId_legendItems$$2$$][$key$$67_wrapper$$1$$])
    }
  }
  $layerId_legendItems$$2$$ = this.$_legend$.$_hideAttrsLookUp$;
  for(var $legendCategory$$1$$ in $layerId_legendItems$$2$$) {
    $key$$67_wrapper$$1$$ = new D.$DvtThematicMapCategoryWrapper$$($layerId_legendItems$$2$$[$legendCategory$$1$$].$getContentShape$(), $legendCategory$$1$$), $objects$$5$$.push($key$$67_wrapper$$1$$)
  }
  (0,D.$DvtCategoryRolloverHandler$processEvent$$)($rolloverEvent$$1$$, $objects$$5$$, 0.1)
};
D.$DvtThematicMap$$.prototype.$getAutomation$ = function $$DvtThematicMap$$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new D.$DvtThematicMapAutomation$$(this));
  return this.$Automation$
};
D.$DvtThematicMap$$.prototype.getAutomation = D.$DvtThematicMap$$.prototype.$getAutomation$;
D.$DvtThematicMapDefaults$$ = function $$DvtThematicMapDefaults$$$() {
  this.Init({fusion:D.$DvtThematicMapDefaults$DEFAULT$$, skyros:D.$DvtThematicMapDefaults$SKIN_SKYROS$$, alta:D.$DvtThematicMapDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtThematicMapDefaults");
D.$DvtThematicMapDefaults$DEFAULT$$ = {skin:D.$JSCompiler_alias_NULL$$, animationDuration:500, animationOnDisplay:"none", animationOnDrill:"none", animationOnMapChange:"none", controlPanelBehavior:"hidden", drilling:"off", initialZooming:"none", maintainDrill:"off", markerZoomBehavior:"fixed", panning:"none", tooltipDisplay:"auto", zooming:"none", styleDefaults:{areaStyle:"background-color:#B8CDEC;border-color:#FFFFFF;", dataAreaDefaults:{borderColor:"#FFFFFF", drilledInnerColor:"#FFFFFF", drilledOuterColor:"#000000", 
hoverColor:"#FFFFFF", opacity:1, selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000"}, dataMarkerDefaults:{borderColor:"#FFFFFF", borderStyle:"solid", borderWidth:"0.5px", color:"#000000", height:8, labelStyle:"font-family:Tahoma;font-size:13pt;color:#000000", opacity:0.4, scaleX:1, scaleY:1, shape:"circle", width:8}, labelStyle:"font-family:Tahoma;font-size:11pt;"}, legend:{position:"auto", rendered:D.$JSCompiler_alias_TRUE$$, layout:{gapRatio:1}}, layout:{gapRatio:D.$JSCompiler_alias_NULL$$, 
legendMaxSize:0.3, legendGap:10}, resources:{images:{}, translations:{}}};
D.$DvtThematicMapDefaults$SKIN_SKYROS$$ = {styleDefaults:{backgroundColor:"#FFFFFF"}};
D.$DvtThematicMapDefaults$SKIN_ALTA$$ = {skin:"alta", styleDefaults:{areaStyle:"background-color:#DDDDDD;border-color:#FFFFFF;", backgroundColor:"#FFFFFF", dataAreaDefaults:{drilledOuterColor:"#0572CE"}, dataMarkerDefaults:{color:"rgb(51,51,51)", labelStyle:'font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;color:#333333', opacity:1}, labelStyle:'font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:12px;'}};
D.$DvtThematicMapDefaults$DEFAULT_AREA_LAYER$$ = {animationOnLayerChange:"none", labelDisplay:"auto", labelType:"short"};
D.$DvtThematicMapDefaults$DEFAULT_DATA_LAYER$$ = {animationOnDataChange:"none", selection:"none"};
D.$JSCompiler_StaticMethods__getCurrentDragSource$$ = function $$JSCompiler_StaticMethods__getCurrentDragSource$$$($JSCompiler_StaticMethods__getCurrentDragSource$self$$) {
  for(var $i$$443$$ = 0;$i$$443$$ < $JSCompiler_StaticMethods__getCurrentDragSource$self$$.$_layers$.length;$i$$443$$++) {
    var $dataLayers$$4$$ = $JSCompiler_StaticMethods__getCurrentDragSource$self$$.$_layers$[$i$$443$$].$DataLayers$, $id$$119$$;
    for($id$$119$$ in $dataLayers$$4$$) {
      var $dragSource$$2$$ = $dataLayers$$4$$[$id$$119$$].$_dragSource$;
      if($dragSource$$2$$ && $dragSource$$2$$.$_dragCandidate$) {
        return $dragSource$$2$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtThematicMap$$.prototype.$isDragAvailable$ = function $$DvtThematicMap$$$$$isDragAvailable$$($dragSource$$3_mouseX$$31$$, $mouseY$$31$$, $clientIds$$15$$) {
  this.$_dragAllowed$ = D.$JSCompiler_alias_FALSE$$;
  return($dragSource$$3_mouseX$$31$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this)) ? $dragSource$$3_mouseX$$31$$.$isDragAvailable$($clientIds$$15$$) : D.$JSCompiler_alias_FALSE$$
};
D.$DvtThematicMap$$.prototype.$getDragTransferable$ = function $$DvtThematicMap$$$$$getDragTransferable$$($mouseX$$32$$, $mouseY$$32$$) {
  var $dragSource$$4$$ = (0,D.$JSCompiler_StaticMethods__getCurrentDragSource$$)(this);
  return $dragSource$$4$$ ? $dragSource$$4$$.$getDragTransferable$($mouseX$$32$$, $mouseY$$32$$) : D.$JSCompiler_alias_NULL$$
};

D.$DvtThematicMapDropTarget$$ = function $$DvtThematicMapDropTarget$$$($areaLayer$$, $basemap$$) {
  this.$_areaLayer$ = $areaLayer$$;
  this.$_basemap$ = $basemap$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapDropTarget$$, D.$DvtDropTarget$$, "DvtThematicMapDropTarget");
D.$DvtThematicMapAutomation$$ = (0,D.$JSCompiler_set$$)("$_tmap$");
(0,D.$goog$exportSymbol$$)("DvtThematicMapAutomation", D.$DvtThematicMapAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapAutomation$$, D.$DvtAutomation$$, "DvtThematicMapAutomation");
D.$DvtThematicMapAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtThematicMapAutomation$$$$$GetSubIdForDomElement$$($displayable$$51_logicalObj$$16$$) {
  $displayable$$51_logicalObj$$16$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_tmap$.$_eventHandler$, $displayable$$51_logicalObj$$16$$);
  var $JSCompiler_temp$$473_id$$inline_4385$$;
  if($displayable$$51_logicalObj$$16$$ && ($displayable$$51_logicalObj$$16$$ instanceof D.$DvtMapDataArea$$ || $displayable$$51_logicalObj$$16$$ instanceof D.$DvtMapDataMarker$$)) {
    a: {
      for(var $layers$$inline_4382$$ = this.$_tmap$.$_layers$, $i$$inline_4383$$ = 0;$i$$inline_4383$$ < $layers$$inline_4382$$.length;$i$$inline_4383$$++) {
        var $dataLayers$$inline_4384$$ = $layers$$inline_4382$$[$i$$inline_4383$$].$DataLayers$;
        for($JSCompiler_temp$$473_id$$inline_4385$$ in $dataLayers$$inline_4384$$) {
          if($displayable$$51_logicalObj$$16$$ instanceof D.$DvtMapDataArea$$) {
            for(var $areas$$inline_4386_markers$$inline_4388$$ = $dataLayers$$inline_4384$$[$JSCompiler_temp$$473_id$$inline_4385$$].$_areaObjs$, $k$$inline_4387$$ = 0;$k$$inline_4387$$ < $areas$$inline_4386_markers$$inline_4388$$.length;$k$$inline_4387$$++) {
              if($areas$$inline_4386_markers$$inline_4388$$[$k$$inline_4387$$] === $displayable$$51_logicalObj$$16$$) {
                $JSCompiler_temp$$473_id$$inline_4385$$ = (0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($JSCompiler_temp$$473_id$$inline_4385$$) + ":area[" + $displayable$$51_logicalObj$$16$$.getId() + "]";
                break a
              }
            }
          }else {
            if($displayable$$51_logicalObj$$16$$ instanceof D.$DvtMapDataMarker$$) {
              $areas$$inline_4386_markers$$inline_4388$$ = $dataLayers$$inline_4384$$[$JSCompiler_temp$$473_id$$inline_4385$$].$_dataObjs$;
              for($k$$inline_4387$$ = 0;$k$$inline_4387$$ < $areas$$inline_4386_markers$$inline_4388$$.length;$k$$inline_4387$$++) {
                if($areas$$inline_4386_markers$$inline_4388$$[$k$$inline_4387$$] === $displayable$$51_logicalObj$$16$$) {
                  $JSCompiler_temp$$473_id$$inline_4385$$ = (0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($JSCompiler_temp$$473_id$$inline_4385$$) + ":marker[" + $displayable$$51_logicalObj$$16$$.getId() + "]";
                  break a
                }
              }
            }
          }
        }
      }
      $JSCompiler_temp$$473_id$$inline_4385$$ = D.$JSCompiler_alias_NULL$$
    }
  }else {
    $JSCompiler_temp$$473_id$$inline_4385$$ = D.$JSCompiler_alias_NULL$$
  }
  return $JSCompiler_temp$$473_id$$inline_4385$$
};
D.$DvtThematicMapAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtThematicMapAutomation$$$$$getDomElementForSubId$$($JSCompiler_temp$$433_dataObj$$inline_4394_subId$$16$$) {
  var $colonIdx$$1$$ = $JSCompiler_temp$$433_dataObj$$inline_4394_subId$$16$$.indexOf(":"), $parenIdx$$ = $JSCompiler_temp$$433_dataObj$$inline_4394_subId$$16$$.indexOf("[");
  $JSCompiler_temp$$433_dataObj$$inline_4394_subId$$16$$ = 0 < $colonIdx$$1$$ && 0 < $parenIdx$$ ? ($JSCompiler_temp$$433_dataObj$$inline_4394_subId$$16$$ = (0,D.$JSCompiler_StaticMethods__getDataObject$$)(this, $JSCompiler_temp$$433_dataObj$$inline_4394_subId$$16$$.substring(0, $colonIdx$$1$$), $JSCompiler_temp$$433_dataObj$$inline_4394_subId$$16$$.substring($colonIdx$$1$$ + 1, $parenIdx$$), $JSCompiler_temp$$433_dataObj$$inline_4394_subId$$16$$.substring($parenIdx$$ + 1, $JSCompiler_temp$$433_dataObj$$inline_4394_subId$$16$$.length - 
  1))) ? $JSCompiler_temp$$433_dataObj$$inline_4394_subId$$16$$.$getDisplayable$().$getElem$() : D.$JSCompiler_alias_NULL$$ : D.$JSCompiler_alias_NULL$$;
  return $JSCompiler_temp$$433_dataObj$$inline_4394_subId$$16$$
};
D.$DvtThematicMapAutomation$$.prototype.getDomElementForSubId = D.$DvtThematicMapAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtThematicMapAutomation$$.prototype.getData = function $$DvtThematicMapAutomation$$$$getData$($dataLayerId$$2_dataObj$$16$$, $data$$88_dataObjType$$1$$, $dataObjId$$1_label$$64$$) {
  return($dataLayerId$$2_dataObj$$16$$ = (0,D.$JSCompiler_StaticMethods__getDataObject$$)(this, $dataLayerId$$2_dataObj$$16$$, $data$$88_dataObjType$$1$$, $dataObjId$$1_label$$64$$)) ? ($data$$88_dataObjType$$1$$ = {}, $data$$88_dataObjType$$1$$.color = $dataLayerId$$2_dataObj$$16$$.$getDatatipColor$(), $data$$88_dataObjType$$1$$.tooltip = $dataLayerId$$2_dataObj$$16$$.$getDatatip$(), $dataObjId$$1_label$$64$$ = $dataLayerId$$2_dataObj$$16$$.$getLabel$(), $data$$88_dataObjType$$1$$.label = $dataObjId$$1_label$$64$$ ? 
  $dataObjId$$1_label$$64$$.$getTextString$() : D.$JSCompiler_alias_NULL$$, $data$$88_dataObjType$$1$$.isSelected = $dataLayerId$$2_dataObj$$16$$.$isSelected$(), $data$$88_dataObjType$$1$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtThematicMapAutomation$$.prototype.getData = D.$DvtThematicMapAutomation$$.prototype.getData;
D.$JSCompiler_StaticMethods__getDataObject$$ = function $$JSCompiler_StaticMethods__getDataObject$$$($JSCompiler_StaticMethods__getDataObject$self_layers$$2$$, $dataLayerId$$4$$, $dataObjType$$3$$, $dataObjId$$3$$) {
  $JSCompiler_StaticMethods__getDataObject$self_layers$$2$$ = $JSCompiler_StaticMethods__getDataObject$self_layers$$2$$.$_tmap$.$_layers$;
  for(var $i$$445$$ = 0;$i$$445$$ < $JSCompiler_StaticMethods__getDataObject$self_layers$$2$$.length;$i$$445$$++) {
    var $dataLayers$$6$$ = $JSCompiler_StaticMethods__getDataObject$self_layers$$2$$[$i$$445$$].$DataLayers$, $id$$121$$;
    for($id$$121$$ in $dataLayers$$6$$) {
      if((0,D.$JSCompiler_StaticMethods__getDataLayerId$$)($id$$121$$) == $dataLayerId$$4$$) {
        if("area" == $dataObjType$$3$$) {
          for(var $areas$$8_markers$$10$$ = $dataLayers$$6$$[$id$$121$$].$_areaObjs$, $k$$4$$ = 0;$k$$4$$ < $areas$$8_markers$$10$$.length;$k$$4$$++) {
            if($areas$$8_markers$$10$$[$k$$4$$].getId() === $dataObjId$$3$$) {
              return $areas$$8_markers$$10$$[$k$$4$$]
            }
          }
        }else {
          if("marker" == $dataObjType$$3$$) {
            $areas$$8_markers$$10$$ = $dataLayers$$6$$[$id$$121$$].$_dataObjs$;
            for($k$$4$$ = 0;$k$$4$$ < $areas$$8_markers$$10$$.length;$k$$4$$++) {
              if($areas$$8_markers$$10$$[$k$$4$$].getId() === $dataObjId$$3$$) {
                return $areas$$8_markers$$10$$[$k$$4$$]
              }
            }
          }
        }
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getDataLayerId$$ = function $$JSCompiler_StaticMethods__getDataLayerId$$$($dataLayerId$$5$$) {
  var $colonIdx$$2$$ = $dataLayerId$$5$$.lastIndexOf(":");
  return 0 < $colonIdx$$2$$ ? $dataLayerId$$5$$.substring($colonIdx$$2$$ + 1) : $dataLayerId$$5$$
};
D.$DvtDrillablePath$$ = function $$DvtDrillablePath$$$($context$$219$$, $bSupportsVectorEffects$$4$$) {
  this.Init($context$$219$$, $bSupportsVectorEffects$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDrillablePath$$, D.$DvtPath$$, "DvtDrillablePath");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDrillablePath$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$220$$, $bSupportsVectorEffects$$5$$) {
  D.$DvtDrillablePath$$.$superclass$.Init.call(this, $context$$220$$);
  this.$_disclosedOuterShape$ = this.$_disclosedInnerShape$ = this.$_disclosedOuterStroke$ = this.$_disclosedInnerStroke$ = D.$JSCompiler_alias_NULL$$;
  this.$_isDrilled$ = D.$JSCompiler_alias_FALSE$$;
  this.Zoom = 1;
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$5$$
};
D.$JSCompiler_prototypeAlias$$.$isDrilled$ = (0,D.$JSCompiler_get$$)("$_isDrilled$");
D.$JSCompiler_prototypeAlias$$.$setDrilled$ = function $$JSCompiler_prototypeAlias$$$$setDrilled$$($drilled$$1_parent$$38$$) {
  this.$_isDrilled$ != $drilled$$1_parent$$38$$ && (this.$_isDrilled$ = $drilled$$1_parent$$38$$, this.$isDrilled$() ? (this.$_disclosedInnerShape$ = this.$copyShape$(), this.$_disclosedInnerShape$.$setFill$(D.$JSCompiler_alias_NULL$$), this.$_disclosedInnerShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$_disclosedOuterShape$ = this.$copyShape$(), this.$_disclosedOuterShape$.$setFill$(D.$JSCompiler_alias_NULL$$), this.$_disclosedOuterShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), 
  $drilled$$1_parent$$38$$ = this.getParent(), $drilled$$1_parent$$38$$.$addChild$(this.$_disclosedOuterShape$), $drilled$$1_parent$$38$$.$addChild$(this.$_disclosedInnerShape$), this.$_disclosedInnerShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$_disclosedInnerStroke$, 2)), this.$_disclosedOuterShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$_disclosedOuterStroke$, 4)), this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), 
  this.$IsShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$) : (this.$isHoverEffectShown$() && (this.$UpdateSelectionEffect$(), this.$InnerShape$.$setStroke$((0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$HoverInnerStroke$, 1), 2)), this.$_disclosedOuterShape$.getParent().removeChild(this.$_disclosedOuterShape$), this.$_disclosedInnerShape$.getParent().removeChild(this.$_disclosedInnerShape$), this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$), this.$setAlpha$(1)))
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$28$$) {
  this.$IsSelected$ != $selected$$28$$ && ($selected$$28$$ && (this.$isHoverEffectShown$() ? (this.$CreateSelectedHoverStrokes$(), this.$SelectedHoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverInnerStroke$, 2), this.$SelectedHoverOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverOuterStroke$, 6)) : (this.$SelectedInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedInnerStroke$, 
  1), this.$SelectedOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedOuterStroke$, 4))), D.$DvtDrillablePath$$.$superclass$.$setSelected$.call(this, $selected$$28$$))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$isSelected$() ? (this.$CreateSelectedHoverStrokes$(), this.$SelectedHoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverInnerStroke$, 2), this.$SelectedHoverOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedHoverOuterStroke$, 6)) : this.$HoverInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$HoverInnerStroke$, 2);
  D.$DvtDrillablePath$$.$superclass$.$showHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$CreateSelectedHoverStrokes$ = function $$JSCompiler_prototypeAlias$$$$CreateSelectedHoverStrokes$$() {
  this.$SelectedHoverInnerStroke$ || (this.$SelectedHoverInnerStroke$ = this.$HoverInnerStroke$.clone(), this.$SelectedHoverInnerStroke$.$setWidth$(2), this.$_bSupportsVectorEffects$ && (this.$SelectedHoverInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  this.$SelectedHoverOuterStroke$ || (this.$SelectedHoverOuterStroke$ = this.$SelectedOuterStroke$.clone(), this.$SelectedHoverOuterStroke$.$setWidth$(6), this.$_bSupportsVectorEffects$ && (this.$SelectedHoverOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$isSelected$() && (this.$SelectedInnerStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedInnerStroke$, 1), this.$SelectedOuterStroke$ = (0,D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$)(this, this.$SelectedOuterStroke$, 4));
  D.$DvtDrillablePath$$.$superclass$.$hideHoverEffect$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$setHoverStroke$ = function $$JSCompiler_prototypeAlias$$$$setHoverStroke$$($innerStroke$$, $outerStroke$$) {
  D.$DvtDrillablePath$$.$superclass$.$setHoverStroke$.call(this, $innerStroke$$, $outerStroke$$);
  this.$_bSupportsVectorEffects$ && (this.$HoverInnerStroke$ && (this.$HoverInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), this.$HoverOuterStroke$ && (this.$HoverOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  return this
};
D.$JSCompiler_prototypeAlias$$.$setSelectedStroke$ = function $$JSCompiler_prototypeAlias$$$$setSelectedStroke$$($innerStroke$$1$$, $outerStroke$$1$$) {
  D.$DvtDrillablePath$$.$superclass$.$setSelectedStroke$.call(this, $innerStroke$$1$$, $outerStroke$$1$$);
  this.$_bSupportsVectorEffects$ && (this.$SelectedInnerStroke$ && (this.$SelectedInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), this.$SelectedOuterStroke$ && (this.$SelectedOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  return this
};
D.$JSCompiler_prototypeAlias$$.$setSelectedHoverStroke$ = function $$JSCompiler_prototypeAlias$$$$setSelectedHoverStroke$$($innerStroke$$2$$, $outerStroke$$2$$) {
  D.$DvtDrillablePath$$.$superclass$.$setSelectedHoverStroke$.call(this, $innerStroke$$2$$, $outerStroke$$2$$);
  this.$_bSupportsVectorEffects$ && (this.$SelectedHoverInnerStroke$ && (this.$SelectedHoverInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), this.$SelectedHoverOuterStroke$ && (this.$SelectedHoverOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$));
  return this
};
D.$JSCompiler_StaticMethods_setDisclosedStroke$$ = function $$JSCompiler_StaticMethods_setDisclosedStroke$$$($JSCompiler_StaticMethods_setDisclosedStroke$self$$, $innerStroke$$3$$, $outerStroke$$3$$) {
  $JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_disclosedInnerStroke$ = $innerStroke$$3$$;
  $JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_disclosedInnerStroke$ && $JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_bSupportsVectorEffects$ && ($JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_disclosedInnerStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_disclosedOuterStroke$ = $outerStroke$$3$$;
  $JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_disclosedOuterStroke$ && $JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_bSupportsVectorEffects$ && ($JSCompiler_StaticMethods_setDisclosedStroke$self$$.$_disclosedOuterStroke$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$ = function $$JSCompiler_StaticMethods__updateStrokeZoomWidth$$$($JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$, $shape$$22$$, $fixedWidth$$) {
  if(!$JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$.$_bSupportsVectorEffects$) {
    var $stroke$$53$$ = $shape$$22$$.$getStroke$();
    $stroke$$53$$ && ($stroke$$53$$ = $stroke$$53$$.clone(), $stroke$$53$$.$setWidth$($fixedWidth$$ / $JSCompiler_StaticMethods__updateStrokeZoomWidth$self$$.Zoom), $shape$$22$$.$setStroke$($stroke$$53$$))
  }
};
D.$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$ = function $$JSCompiler_StaticMethods__adjustStrokeZoomWidth$$$($JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$, $adjustedStroke_stroke$$54$$, $fixedWidth$$1$$) {
  $JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$.$_bSupportsVectorEffects$ || ($adjustedStroke_stroke$$54$$ = $adjustedStroke_stroke$$54$$.clone(), $adjustedStroke_stroke$$54$$.$setWidth$($fixedWidth$$1$$ / $JSCompiler_StaticMethods__adjustStrokeZoomWidth$self$$.Zoom));
  return $adjustedStroke_stroke$$54$$
};
D.$JSCompiler_StaticMethods_handleZoomEvent$$ = function $$JSCompiler_StaticMethods_handleZoomEvent$$$($JSCompiler_StaticMethods_handleZoomEvent$self$$, $pzcMatrix$$14$$) {
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.Zoom = $pzcMatrix$$14$$.$_a$;
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isDrilled$() ? ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$_disclosedInnerShape$, 2), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$_disclosedOuterShape$, 4)) : $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isSelected$() ? 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isHoverEffectShown$() ? ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 2), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$, 6)) : ((0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 1), (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$, 4)) : $JSCompiler_StaticMethods_handleZoomEvent$self$$.$isHoverEffectShown$() ? (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, $JSCompiler_StaticMethods_handleZoomEvent$self$$.$InnerShape$, 2) : (0,D.$JSCompiler_StaticMethods__updateStrokeZoomWidth$$)($JSCompiler_StaticMethods_handleZoomEvent$self$$, 
  $JSCompiler_StaticMethods_handleZoomEvent$self$$, 1)
};
D.$DvtBaseMapManager$$ = this.DvtBaseMapManager;
D.$DvtBaseMapManager$$ ? (D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$ = D.$DvtBaseMapManager$$._UNPROCESSED_MAPS, D.$DvtBaseMapManager$$.$_UNPROCESSED_PARENT_UPDATES$ = D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES) : D.$DvtBaseMapManager$$ = {$_UNPROCESSED_MAPS$:[[], [], []], $_UNPROCESSED_PARENT_UPDATES$:[[], [], []]};
"undefined" != typeof D.DVT_ADVANCED_CLOSURE && ((0,D.$goog$exportSymbol$$)("DvtBaseMapManager", D.$DvtBaseMapManager$$), D.$DvtBaseMapManager$$._UNPROCESSED_MAPS = D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$, D.$DvtBaseMapManager$$._UNPROCESSED_PARENT_UPDATES = D.$DvtBaseMapManager$$.$_UNPROCESSED_PARENT_UPDATES$);
D.$DvtObj$$.$createSubclass$(D.$DvtBaseMapManager$$, D.$DvtObj$$, "DvtBaseMapManager");
D.$DvtBaseMapManager$$.$TYPE_LABELS$ = 0;
D.$DvtBaseMapManager$$.$TYPE_PATH$ = 1;
D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$ = 2;
D.$DvtBaseMapManager$$.$TYPE_LABELINFO$ = 3;
D.$DvtBaseMapManager$$.$TYPE_DIM$ = 4;
D.$DvtBaseMapManager$$.$_INDEX$ = "__index";
D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$ = {};
D.$DvtBaseMapManager$$.$getBaseMapDim$ = function $$DvtBaseMapManager$$$$getBaseMapDim$$($baseMapName$$1$$, $layerName$$13$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $dimAr_layer$$11$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$1$$][$layerName$$13$$];
  return $dimAr_layer$$11$$ && ($dimAr_layer$$11$$ = $dimAr_layer$$11$$[D.$DvtBaseMapManager$$.$TYPE_DIM$]) ? new D.$DvtRectangle$$($dimAr_layer$$11$$[0], $dimAr_layer$$11$$[1], $dimAr_layer$$11$$[2], $dimAr_layer$$11$$[3]) : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaLabelInfo$ = function $$DvtBaseMapManager$$$$getAreaLabelInfo$$($baseMapName$$2$$, $layerName$$14$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$12$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$2$$][$layerName$$14$$];
  return $layer$$12$$ ? $layer$$12$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaNames$ = function $$DvtBaseMapManager$$$$getAreaNames$$($baseMapName$$3$$, $layerName$$15$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$13$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$3$$][$layerName$$15$$];
  return $layer$$13$$ ? $layer$$13$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getLongAreaLabel$ = function $$DvtBaseMapManager$$$$getLongAreaLabel$$($baseMapName$$4_layer$$14$$, $layerName$$16$$, $areaId$$10$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  $baseMapName$$4_layer$$14$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$4_layer$$14$$][$layerName$$16$$];
  var $labels$$17$$;
  $baseMapName$$4_layer$$14$$ && ($labels$$17$$ = $baseMapName$$4_layer$$14$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$]);
  return $labels$$17$$ && $labels$$17$$[$areaId$$10$$] ? $labels$$17$$[$areaId$$10$$][1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getCityCoordinates$ = function $$DvtBaseMapManager$$$$getCityCoordinates$$($baseMapName$$5$$, $city$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap$$4_cityLayer_coords$$16$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$5$$];
  if($basemap$$4_cityLayer_coords$$16$$ && ($basemap$$4_cityLayer_coords$$16$$ = $basemap$$4_cityLayer_coords$$16$$.cities)) {
    if($basemap$$4_cityLayer_coords$$16$$ = $basemap$$4_cityLayer_coords$$16$$[D.$DvtBaseMapManager$$.$TYPE_PATH$][$city$$]) {
      return new D.$DvtPoint$$($basemap$$4_cityLayer_coords$$16$$[0], $basemap$$4_cityLayer_coords$$16$$[1])
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getCityLabel$ = function $$DvtBaseMapManager$$$$getCityLabel$$($baseMapName$$6$$, $city$$1$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap$$5_cityLabel_cityLayer$$1$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$6$$];
  if($basemap$$5_cityLabel_cityLayer$$1$$ && ($basemap$$5_cityLabel_cityLayer$$1$$ = $basemap$$5_cityLabel_cityLayer$$1$$.cities)) {
    if($basemap$$5_cityLabel_cityLayer$$1$$ = $basemap$$5_cityLabel_cityLayer$$1$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$][$city$$1$$]) {
      return $basemap$$5_cityLabel_cityLayer$$1$$[1]
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaCenter$ = function $$DvtBaseMapManager$$$$getAreaCenter$$($arPath$$2_baseMapName$$7_path$$14$$, $layerName$$17$$, $areaId$$11$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $basemap$$6_labelInfo$$10_layer$$15$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$arPath$$2_baseMapName$$7_path$$14$$];
  if($basemap$$6_labelInfo$$10_layer$$15$$ && ($basemap$$6_labelInfo$$10_layer$$15$$ = $basemap$$6_labelInfo$$10_layer$$15$$[$layerName$$17$$])) {
    if(($basemap$$6_labelInfo$$10_layer$$15$$ = $basemap$$6_labelInfo$$10_layer$$15$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$]) && $basemap$$6_labelInfo$$10_layer$$15$$[$areaId$$11$$]) {
      return(0,D.$DvtRectangle$create$$)($basemap$$6_labelInfo$$10_layer$$15$$[$areaId$$11$$][0]).$getCenter$()
    }
    $arPath$$2_baseMapName$$7_path$$14$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$arPath$$2_baseMapName$$7_path$$14$$][$layerName$$17$$][D.$DvtBaseMapManager$$.$TYPE_PATH$][$areaId$$11$$];
    if(!$arPath$$2_baseMapName$$7_path$$14$$) {
      return D.$JSCompiler_alias_NULL$$
    }
    $arPath$$2_baseMapName$$7_path$$14$$ = window.DvtPathUtils.$createPathArray$($arPath$$2_baseMapName$$7_path$$14$$);
    return window.DvtPathUtils.$getDimensions$($arPath$$2_baseMapName$$7_path$$14$$).$getCenter$()
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getChildLayerName$ = function $$DvtBaseMapManager$$$$getChildLayerName$$($baseMapName$$8$$, $layerName$$18$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $layer$$16$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][$layerName$$18$$];
  return $layer$$16$$ ? D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$8$$][D.$DvtBaseMapManager$$.$_INDEX$][$layer$$16$$.__index + 1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getParentLayerName$ = function $$DvtBaseMapManager$$$$getParentLayerName$$($baseMapName$$9$$, $layerName$$19$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$9$$][$layerName$$19$$] ? D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$9$$][D.$DvtBaseMapManager$$.$_INDEX$][D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$9$$][$layerName$$19$$].__index - 1] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseMapManager$$.$getAreaPaths$ = function $$DvtBaseMapManager$$$$getAreaPaths$$($baseMapName$$10$$, $layerName$$20$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$10$$][$layerName$$20$$][D.$DvtBaseMapManager$$.$TYPE_PATH$]
};
D.$DvtBaseMapManager$$.$getPathForArea$ = function $$DvtBaseMapManager$$$$getPathForArea$$($baseMapName$$11$$, $layerName$$21$$, $area$$26$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$11$$][$layerName$$21$$][D.$DvtBaseMapManager$$.$TYPE_PATH$][$area$$26$$]
};
D.$DvtBaseMapManager$$.$getChildrenForLayerAreas$ = function $$DvtBaseMapManager$$$$getChildrenForLayerAreas$$($baseMapName$$12$$, $layerName$$22$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  var $childLayerName_children$$14$$ = D.$DvtBaseMapManager$$.$getChildLayerName$($baseMapName$$12$$, $layerName$$22$$);
  return $childLayerName_children$$14$$ && ($childLayerName_children$$14$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$12$$][$childLayerName_children$$14$$][D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$]) ? $childLayerName_children$$14$$ : []
};
D.$DvtBaseMapManager$$.$getMapLayerName$ = function $$DvtBaseMapManager$$$$getMapLayerName$$($baseMapName$$13$$, $index$$101$$) {
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$();
  return D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$13$$][D.$DvtBaseMapManager$$.$_INDEX$][$index$$101$$]
};
D.$DvtBaseMapManager$$.$registerBaseMapLayer$ = function $$DvtBaseMapManager$$$$registerBaseMapLayer$$($baseMapName$$14_layerMetadata$$, $layerName$$23$$, $labelMetadata$$, $pathMetadata$$, $parentsRegionMetadata$$, $labelInfoMetadata$$, $index$$102$$, $dim$$13$$) {
  var $basemapMetadata$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$14_layerMetadata$$];
  $basemapMetadata$$ || ($basemapMetadata$$ = {}, $basemapMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$] = [], D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$14_layerMetadata$$] = $basemapMetadata$$);
  $baseMapName$$14_layerMetadata$$ = $basemapMetadata$$[$layerName$$23$$];
  $baseMapName$$14_layerMetadata$$ || ($baseMapName$$14_layerMetadata$$ = {}, $basemapMetadata$$[$layerName$$23$$] = $baseMapName$$14_layerMetadata$$, $index$$102$$ != D.$JSCompiler_alias_NULL$$ && ($basemapMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$][$index$$102$$] = $layerName$$23$$));
  $baseMapName$$14_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] = $labelMetadata$$;
  $baseMapName$$14_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_PATH$] = $pathMetadata$$;
  $baseMapName$$14_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $parentsRegionMetadata$$;
  $baseMapName$$14_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_LABELINFO$] = $labelInfoMetadata$$;
  $baseMapName$$14_layerMetadata$$[D.$DvtBaseMapManager$$.$TYPE_DIM$] = $dim$$13$$;
  $baseMapName$$14_layerMetadata$$[D.$DvtBaseMapManager$$.$_INDEX$] = $index$$102$$
};
(0,D.$goog$exportSymbol$$)("DvtBaseMapManager.registerBaseMapLayer", D.$DvtBaseMapManager$$.$registerBaseMapLayer$);
D.$DvtBaseMapManager$$.$registerResourceBundle$ = function $$DvtBaseMapManager$$$$registerResourceBundle$$($baseMapName$$15_layerMetadata$$1$$, $layerName$$24$$, $labelMetadata$$1$$) {
  var $basemapMetadata$$1$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$15_layerMetadata$$1$$];
  $basemapMetadata$$1$$ || ($basemapMetadata$$1$$ = {}, D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$15_layerMetadata$$1$$] = $basemapMetadata$$1$$);
  $baseMapName$$15_layerMetadata$$1$$ = $basemapMetadata$$1$$[$layerName$$24$$];
  $baseMapName$$15_layerMetadata$$1$$ || ($baseMapName$$15_layerMetadata$$1$$ = {}, $basemapMetadata$$1$$[$layerName$$24$$] = $baseMapName$$15_layerMetadata$$1$$);
  ($baseMapName$$15_layerMetadata$$1$$ = $basemapMetadata$$1$$[$layerName$$24$$]) && ($baseMapName$$15_layerMetadata$$1$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$] = $labelMetadata$$1$$)
};
(0,D.$goog$exportSymbol$$)("DvtBaseMapManager.registerResourceBundle", D.$DvtBaseMapManager$$.$registerResourceBundle$);
D.$DvtBaseMapManager$$.$updateResourceBundle$ = function $$DvtBaseMapManager$$$$updateResourceBundle$$($baseMapName$$16_basemapMetadata$$2$$, $layerMetadata$$2_layerName$$25$$, $labelMetadata$$2$$) {
  if($baseMapName$$16_basemapMetadata$$2$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$baseMapName$$16_basemapMetadata$$2$$]) {
    if($layerMetadata$$2_layerName$$25$$ = $baseMapName$$16_basemapMetadata$$2$$[$layerMetadata$$2_layerName$$25$$]) {
      for(var $prop$$10$$ in $labelMetadata$$2$$) {
        $layerMetadata$$2_layerName$$25$$[D.$DvtBaseMapManager$$.$TYPE_LABELS$][$prop$$10$$] = $labelMetadata$$2$$[$prop$$10$$]
      }
    }
  }
};
(0,D.$goog$exportSymbol$$)("DvtBaseMapManager.updateResourceBundle", D.$DvtBaseMapManager$$.$updateResourceBundle$);
D.$DvtBaseMapManager$$.$loadUnprocessedMaps$ = function $$DvtBaseMapManager$$$$loadUnprocessedMaps$$($unprocessedMaps$$, $hierarchyUpdates$$) {
  D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$ = $unprocessedMaps$$;
  D.$DvtBaseMapManager$$.$_UNPROCESSED_PARENT_UPDATES$ = $hierarchyUpdates$$;
  D.$DvtBaseMapManager$$.$_processUnprocessedMaps$()
};
(0,D.$goog$exportSymbol$$)("DvtBaseMapManager.loadUnprocessedMaps", D.$DvtBaseMapManager$$.$loadUnprocessedMaps$);
D.$DvtBaseMapManager$$.$_processUnprocessedMaps$ = function $$DvtBaseMapManager$$$$_processUnprocessedMaps$$() {
  var $i$$449_index$$103$$, $args$$4$$;
  if(D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$) {
    for($i$$449_index$$103$$ = 0;$i$$449_index$$103$$ < D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[0].length;$i$$449_index$$103$$++) {
      $args$$4$$ = D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[0][$i$$449_index$$103$$], D.$DvtBaseMapManager$$.$registerBaseMapLayer$($args$$4$$[0], $args$$4$$[1], $args$$4$$[2], $args$$4$$[3], $args$$4$$[4], $args$$4$$[5], $args$$4$$[6], $args$$4$$[7])
    }
    for($i$$449_index$$103$$ = 0;$i$$449_index$$103$$ < D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[1].length;$i$$449_index$$103$$++) {
      $args$$4$$ = D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[1][$i$$449_index$$103$$], D.$DvtBaseMapManager$$.$registerResourceBundle$($args$$4$$[0], $args$$4$$[1], $args$$4$$[2])
    }
    for($i$$449_index$$103$$ = 0;$i$$449_index$$103$$ < D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[2].length;$i$$449_index$$103$$++) {
      $args$$4$$ = D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$[2][$i$$449_index$$103$$], D.$DvtBaseMapManager$$.$updateResourceBundle$($args$$4$$[0], $args$$4$$[1], $args$$4$$[2])
    }
    D.$DvtBaseMapManager$$.$_UNPROCESSED_MAPS$ = D.$JSCompiler_alias_NULL$$
  }
  if(D.$DvtBaseMapManager$$.$_UNPROCESSED_PARENT_UPDATES$) {
    for($i$$449_index$$103$$ = 0;$i$$449_index$$103$$ < D.$DvtBaseMapManager$$.$_UNPROCESSED_PARENT_UPDATES$[0].length;$i$$449_index$$103$$++) {
      $args$$4$$ = D.$DvtBaseMapManager$$.$_UNPROCESSED_PARENT_UPDATES$[0][$i$$449_index$$103$$];
      var $extendedLayer_indicies_layerMetadata$$3$$ = $args$$4$$[1], $layerName$$26_lowerLayer$$ = $args$$4$$[2], $basemapMetadata$$3$$ = D.$DvtBaseMapManager$$.$_GLOBAL_MAPS$[$args$$4$$[0]], $basemapDim$$;
      if($basemapMetadata$$3$$) {
        if($extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[$extendedLayer_indicies_layerMetadata$$3$$]) {
          $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_PARENTREGION_CHILDREN$] = $args$$4$$[3];
          $basemapDim$$ = $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_DIM$];
          $i$$449_index$$103$$ = $extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$_INDEX$];
          $extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[D.$DvtBaseMapManager$$.$_INDEX$];
          $extendedLayer_indicies_layerMetadata$$3$$.splice($i$$449_index$$103$$, 0, $layerName$$26_lowerLayer$$);
          $basemapMetadata$$3$$[$layerName$$26_lowerLayer$$][D.$DvtBaseMapManager$$.$_INDEX$] = $i$$449_index$$103$$;
          for($i$$449_index$$103$$ += 1;$i$$449_index$$103$$ < $extendedLayer_indicies_layerMetadata$$3$$.length;$i$$449_index$$103$$++) {
            ($layerName$$26_lowerLayer$$ = $basemapMetadata$$3$$[$extendedLayer_indicies_layerMetadata$$3$$[$i$$449_index$$103$$]]) && $layerName$$26_lowerLayer$$[D.$DvtBaseMapManager$$.$_INDEX$]++
          }
        }
        ($extendedLayer_indicies_layerMetadata$$3$$ = $basemapMetadata$$3$$[$args$$4$$[2]]) && ($extendedLayer_indicies_layerMetadata$$3$$[D.$DvtBaseMapManager$$.$TYPE_DIM$] = $basemapDim$$)
      }
    }
  }
};
D.$DvtBaseMapManager$$.$simplifyAreaPaths$ = function $$DvtBaseMapManager$$$$simplifyAreaPaths$$($paths$$, $basemapW_scale$$29$$, $basemapH_simplifiedPaths$$, $pathAr_viewportW$$, $viewportH$$, $zoomFactor$$1$$) {
  if(0 < $zoomFactor$$1$$) {
    $basemapW_scale$$29$$ = 1 / (window.Math.min($pathAr_viewportW$$ / $basemapW_scale$$29$$, $viewportH$$ / $basemapH_simplifiedPaths$$) * $zoomFactor$$1$$);
    if(1 >= $basemapW_scale$$29$$) {
      return $paths$$
    }
    $basemapH_simplifiedPaths$$ = [];
    if($paths$$) {
      for(var $path$$15$$ in $paths$$) {
        $pathAr_viewportW$$ = $paths$$[$path$$15$$], (0,window.isNaN)($pathAr_viewportW$$) && ($pathAr_viewportW$$ = window.DvtPathUtils.$createPathArray$($paths$$[$path$$15$$])), $basemapH_simplifiedPaths$$[$path$$15$$] = window.DvtPathUtils.$simplifyPath$($pathAr_viewportW$$, $basemapW_scale$$29$$)
      }
    }
    return $basemapH_simplifiedPaths$$
  }
  return $paths$$
};
D.$DvtThematicMapCategoryWrapper$$ = function $$DvtThematicMapCategoryWrapper$$$($displayable$$52$$, $category$$12$$) {
  this.Init($displayable$$52$$, $category$$12$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapCategoryWrapper$$, D.$DvtObj$$, "DvtThematicMapCategoryWrapper");
D.$DvtThematicMapCategoryWrapper$$.prototype.Init = function $$DvtThematicMapCategoryWrapper$$$$Init$($displayable$$53$$, $category$$13$$) {
  this.$_displayable$ = $displayable$$53$$;
  this.$_category$ = $category$$13$$
};
D.$DvtThematicMapCategoryWrapper$$.prototype.$getCategories$ = (0,D.$JSCompiler_get$$)("$_category$");
D.$DvtThematicMapCategoryWrapper$$.prototype.$getDisplayables$ = function $$DvtThematicMapCategoryWrapper$$$$$getDisplayables$$() {
  return[this.$_displayable$]
};
D.$DvtMapDrillEvent$$ = function $$DvtMapDrillEvent$$$($drillType$$) {
  this.Init(D.$DvtMapDrillEvent$$.$TYPE$);
  this.$_drillType$ = $drillType$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDrillEvent$$, D.$DvtBaseComponentEvent$$, "DvtMapDrillEvent");
D.$DvtMapDrillEvent$$.$TYPE$ = "drill";
D.$DvtMapDrillEvent$$.$DRILL_UP$ = 0;
D.$DvtMapDrillEvent$$.$DRILL_DOWN$ = 1;
D.$DvtMapDrillEvent$$.$RESET$ = 2;
D.$DvtMapDrillEvent$$.prototype.$setDisclosed$ = (0,D.$JSCompiler_set$$)("$_disclosed$");
D.$DvtMapActionEvent$$ = function $$DvtMapActionEvent$$$($clientId$$8$$, $rowKey$$9$$, $action$$11$$) {
  this.Init("action");
  this.$_clientId$ = $clientId$$8$$;
  this.$_rowKey$ = $rowKey$$9$$;
  this.$_action$ = $action$$11$$
};
(0,D.$goog$exportSymbol$$)("DvtMapActionEvent", D.$DvtMapActionEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtMapActionEvent$$, D.$DvtBaseComponentEvent$$, "DvtMapActionEvent");
D.$DvtMapActionEvent$$.TYPE = "action";
D.$DvtMapActionEvent$$.prototype.$getClientId$ = (0,D.$JSCompiler_get$$)("$_clientId$");
D.$DvtMapActionEvent$$.prototype.getClientId = D.$DvtMapActionEvent$$.prototype.$getClientId$;
D.$DvtMapActionEvent$$.prototype.$getRowKey$ = (0,D.$JSCompiler_get$$)("$_rowKey$");
D.$DvtMapActionEvent$$.prototype.getRowKey = D.$DvtMapActionEvent$$.prototype.$getRowKey$;
D.$DvtMapActionEvent$$.prototype.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$DvtMapActionEvent$$.prototype.getAction = D.$DvtMapActionEvent$$.prototype.$getAction$;
D.$DvtMapLabel$$ = function $$DvtMapLabel$$$($context$$202$$, $label$$50$$, $labelInfo$$8$$, $labelDisplay$$5$$, $parentContainer$$1$$, $bSupportsVectorEffects$$2$$) {
  this.Init($context$$202$$, $label$$50$$, $labelInfo$$8$$, $labelDisplay$$5$$, $parentContainer$$1$$, $bSupportsVectorEffects$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapLabel$$, D.$DvtOutputText$$, "DvtMapLabel");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapLabel$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$203$$, $i$$419_label$$51$$, $labelInfo$$9$$, $labelDisplay$$6_line$$19_polyline$$, $parentContainer$$2_stroke$$49$$, $bSupportsVectorEffects$$3$$) {
  D.$DvtMapLabel$$.$superclass$.Init.call(this, $context$$203$$, $i$$419_label$$51$$, 0, 0);
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$3$$;
  this.$_boundRectangle$ = [];
  this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  this.$alignCenter$();
  this.$alignMiddle$();
  this.$_center$ = D.$JSCompiler_alias_NULL$$;
  this.$_labelDisplay$ = $labelDisplay$$6_line$$19_polyline$$;
  this.$_parentContainer$ = $parentContainer$$2_stroke$$49$$;
  if($labelInfo$$9$$ && (this.$_boundRectangle$.push((0,D.$DvtRectangle$create$$)($labelInfo$$9$$[0])), 1 < $labelInfo$$9$$.length)) {
    this.$_leaderLines$ = [];
    for($i$$419_label$$51$$ = 1;$i$$419_label$$51$$ < $labelInfo$$9$$.length;$i$$419_label$$51$$++) {
      $labelDisplay$$6_line$$19_polyline$$ = $labelInfo$$9$$[$i$$419_label$$51$$], this.$_boundRectangle$.push((0,D.$DvtRectangle$create$$)($labelDisplay$$6_line$$19_polyline$$[0])), $labelDisplay$$6_line$$19_polyline$$ = new D.$DvtPolyline$$($context$$203$$, $labelDisplay$$6_line$$19_polyline$$[1]), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($labelDisplay$$6_line$$19_polyline$$), $parentContainer$$2_stroke$$49$$ = new D.$DvtSolidStroke$$("#000000"), this.$_bSupportsVectorEffects$ && ($parentContainer$$2_stroke$$49$$.$_bFixedWidth$ = 
      D.$JSCompiler_alias_TRUE$$), $labelDisplay$$6_line$$19_polyline$$.$setStroke$($parentContainer$$2_stroke$$49$$), this.$_leaderLines$.push($labelDisplay$$6_line$$19_polyline$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.update = function $$JSCompiler_prototypeAlias$$$update$($pzcMatrix$$3_zoom$$9$$) {
  $pzcMatrix$$3_zoom$$9$$ = $pzcMatrix$$3_zoom$$9$$.$_a$;
  for(var $mat$$15_state$$22_stroke$$50$$ = -1, $center$$12_estimatedDims$$1$$ = D.$DvtTextUtils$$.$guessTextDimensions$(this), $labelBox_remove_style$$34$$ = D.$JSCompiler_alias_FALSE$$, $i$$420_leaderLinePoints$$ = 0;$i$$420_leaderLinePoints$$ < this.$_boundRectangle$.length;$i$$420_leaderLinePoints$$++) {
    var $numPoints$$2_zoomW$$ = this.$_boundRectangle$[$i$$420_leaderLinePoints$$].$w$ * $pzcMatrix$$3_zoom$$9$$;
    if($center$$12_estimatedDims$$1$$.$w$ <= $numPoints$$2_zoomW$$) {
      $mat$$15_state$$22_stroke$$50$$ = $i$$420_leaderLinePoints$$;
      break
    }else {
      if(this.getParent() || ($labelBox_remove_style$$34$$ = D.$JSCompiler_alias_TRUE$$, this.$_parentContainer$.$addChild$(this)), this.$getDimensions$().$w$ <= $numPoints$$2_zoomW$$) {
        $mat$$15_state$$22_stroke$$50$$ = $i$$420_leaderLinePoints$$;
        break
      }
    }
  }
  -1 == $mat$$15_state$$22_stroke$$50$$ && "on" == this.$_labelDisplay$ && ($mat$$15_state$$22_stroke$$50$$ = this.$_boundRectangle$.length - 1);
  this.$_currentState$ != $mat$$15_state$$22_stroke$$50$$ ? (-1 == $mat$$15_state$$22_stroke$$50$$ ? this.reset() : (this.getParent() || this.$_parentContainer$.$addChild$(this), $center$$12_estimatedDims$$1$$ = this.$_boundRectangle$[$mat$$15_state$$22_stroke$$50$$].$getCenter$(), this.$setCenter$($center$$12_estimatedDims$$1$$), this.$_leaderLines$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = D.$JSCompiler_alias_NULL$$, 0 < $mat$$15_state$$22_stroke$$50$$ ? 
  (this.$_leaderLine$ = this.$_leaderLines$[$mat$$15_state$$22_stroke$$50$$ - 1], this.$_parentContainer$.$addChild$(this.$_leaderLine$), $labelBox_remove_style$$34$$ = this.$getCSSStyle$(), $labelBox_remove_style$$34$$.$setStyle$("color", "#000000"), this.$setCSSStyle$($labelBox_remove_style$$34$$), $labelBox_remove_style$$34$$ = this.$_boundRectangle$[$mat$$15_state$$22_stroke$$50$$], $i$$420_leaderLinePoints$$ = this.$_leaderLine$.$getPoints$(), $numPoints$$2_zoomW$$ = $i$$420_leaderLinePoints$$.length, 
  $labelBox_remove_style$$34$$.x > $i$$420_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 2] ? (this.$alignLeft$(), this.$alignMiddle$(), this.$setCenter$(new D.$DvtPoint$$($labelBox_remove_style$$34$$.x, $center$$12_estimatedDims$$1$$.y))) : $labelBox_remove_style$$34$$.y > $i$$420_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 1] ? (this.$alignTop$(), this.$alignCenter$(), this.$setCenter$(new D.$DvtPoint$$($center$$12_estimatedDims$$1$$.x, $labelBox_remove_style$$34$$.y))) : $labelBox_remove_style$$34$$.x + 
  $labelBox_remove_style$$34$$.$w$ < $i$$420_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 2] ? (this.$alignRight$(), this.$alignMiddle$(), this.$setCenter$(new D.$DvtPoint$$($labelBox_remove_style$$34$$.x + $labelBox_remove_style$$34$$.$w$, $center$$12_estimatedDims$$1$$.y))) : $labelBox_remove_style$$34$$.y + $labelBox_remove_style$$34$$.$h$ < $i$$420_leaderLinePoints$$[$numPoints$$2_zoomW$$ - 1] && (this.$alignBottom$(), this.$alignCenter$(), this.$setCenter$(new D.$DvtPoint$$($center$$12_estimatedDims$$1$$.x, 
  $labelBox_remove_style$$34$$.y + $labelBox_remove_style$$34$$.$h$)))) : (this.$alignCenter$(), this.$alignMiddle$(), $labelBox_remove_style$$34$$ = this.$getCSSStyle$(), $labelBox_remove_style$$34$$.$setStyle$("color", this.$_labelColor$), this.$setCSSStyle$($labelBox_remove_style$$34$$)))), this.$_currentState$ = $mat$$15_state$$22_stroke$$50$$) : -1 == $mat$$15_state$$22_stroke$$50$$ && $labelBox_remove_style$$34$$ && this.$_parentContainer$.removeChild(this);
  -1 != this.$_currentState$ && ($mat$$15_state$$22_stroke$$50$$ = new D.$DvtMatrix$$, $mat$$15_state$$22_stroke$$50$$.translate($pzcMatrix$$3_zoom$$9$$ * this.$_center$.x - this.$_center$.x, $pzcMatrix$$3_zoom$$9$$ * this.$_center$.y - this.$_center$.y), this.$setMatrix$($mat$$15_state$$22_stroke$$50$$), this.$_leaderLine$ && (this.$_leaderLine$.$setMatrix$(new D.$DvtMatrix$$($pzcMatrix$$3_zoom$$9$$, 0, 0, $pzcMatrix$$3_zoom$$9$$)), this.$_bSupportsVectorEffects$ || ($mat$$15_state$$22_stroke$$50$$ = 
  this.$_leaderLine$.$getStroke$().clone(), $mat$$15_state$$22_stroke$$50$$.$setWidth$(1 / $pzcMatrix$$3_zoom$$9$$), this.$_leaderLine$.$setStroke$($mat$$15_state$$22_stroke$$50$$))))
};
D.$JSCompiler_prototypeAlias$$.$setCenter$ = function $$JSCompiler_prototypeAlias$$$$setCenter$$($p$$4$$) {
  this.$_center$ = $p$$4$$;
  this.$setX$($p$$4$$.x);
  this.$setY$($p$$4$$.y)
};
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$_center$");
D.$JSCompiler_prototypeAlias$$.$setCSSStyle$ = function $$JSCompiler_prototypeAlias$$$$setCSSStyle$$($cssStyle$$10$$) {
  D.$DvtMapLabel$$.$superclass$.$setCSSStyle$.call(this, $cssStyle$$10$$);
  this.$_labelColor$ || (this.$_labelColor$ = $cssStyle$$10$$.$getStyle$("color"))
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$() {
  this.$_parentContainer$.removeChild(this);
  this.$_currentState$ = -1;
  this.$_leaderLine$ && (this.$_parentContainer$.removeChild(this.$_leaderLine$), this.$_leaderLine$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtMapDataObject$$ = function $$DvtMapDataObject$$$($context$$221$$, $dataLayer$$22$$, $rowKey$$14$$, $clientId$$23$$, $regionId$$8$$) {
  this.Init($context$$221$$, $dataLayer$$22$$, $rowKey$$14$$, $clientId$$23$$, $regionId$$8$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataObject$$, D.$DvtContainer$$, "DvtMapDataObject");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataObject$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$222$$, $dataLayer$$23$$, $rowKey$$15$$, $clientId$$24$$, $regionId$$9$$) {
  D.$DvtMapDataObject$$.$superclass$.Init.call(this, $context$$222$$, D.$JSCompiler_alias_NULL$$, $clientId$$24$$);
  this.$_categories$ = [];
  this.$Shape$ = D.$JSCompiler_alias_NULL$$;
  this.$_id$ = $rowKey$$15$$;
  this.$_clientId$ = $clientId$$24$$;
  this.$AreaId$ = $regionId$$9$$;
  this.$_selectionLayer$ = D.$JSCompiler_alias_NULL$$;
  this.$_datatipColor$ = "#000000";
  this.Zoom = 1;
  this.$_hasAction$ = D.$JSCompiler_alias_FALSE$$;
  this.$_dataLayer$ = $dataLayer$$23$$;
  this.$Bundle$ = $dataLayer$$23$$.$_tmap$.$getBundle$()
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getClientId$ = (0,D.$JSCompiler_get$$)("$_clientId$");
D.$JSCompiler_prototypeAlias$$.$setDisplayable$ = function $$JSCompiler_prototypeAlias$$$$setDisplayable$$($disp$$3$$) {
  (this.$Shape$ = $disp$$3$$) && (0,D.$JSCompiler_StaticMethods_setAriaRole$$)(this.$Shape$, "img")
};
D.$JSCompiler_prototypeAlias$$.$setCenter$ = (0,D.$JSCompiler_set$$)("$Center$");
D.$JSCompiler_prototypeAlias$$.$getCenter$ = (0,D.$JSCompiler_get$$)("$Center$");
D.$JSCompiler_prototypeAlias$$.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$Shape$");
D.$JSCompiler_prototypeAlias$$.$setLabel$ = (0,D.$JSCompiler_set$$)("$Label$");
D.$JSCompiler_prototypeAlias$$.$getLabel$ = (0,D.$JSCompiler_get$$)("$Label$");
D.$JSCompiler_prototypeAlias$$.$setLabelPosition$ = (0,D.$JSCompiler_set$$)("$LabelPos$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$setVisible$ = function $$JSCompiler_prototypeAlias$$$$setVisible$$($bVisible$$6$$) {
  D.$DvtMapDataObject$$.$superclass$.$setVisible$.call(this, $bVisible$$6$$);
  this.$Label$ && this.$Label$.$setVisible$($bVisible$$6$$)
};
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return[this.$Shape$]
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = (0,D.$JSCompiler_get$$)("$_categories$");
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = (0,D.$JSCompiler_get$$)("$_datatip$");
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = (0,D.$JSCompiler_get$$)("$_datatipColor$");
D.$JSCompiler_prototypeAlias$$.$setDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$setDatatipColor$$($color$$38$$) {
  this.$_datatipColor$ = $color$$38$$;
  this.$Shape$ && this.$Shape$.$setDataColor$ && this.$Shape$.$setDataColor$($color$$38$$)
};
D.$JSCompiler_prototypeAlias$$.$setDatatip$ = function $$JSCompiler_prototypeAlias$$$$setDatatip$$($datatip$$4$$) {
  this.$_datatip$ = $datatip$$4$$;
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$6$$ = [];
  this.$isSelectable$() && $states$$6$$.push((0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getDatatip$(), $states$$6$$, this.$Bundle$)
};
D.$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$UpdateAriaLabel$$() {
  !(0,D.$DvtAgent$deferAriaCreation$$)() && this.$Shape$ && (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this.$Shape$, "label", this.$getAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$Shape$.$isSelectable$()
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = function $$JSCompiler_prototypeAlias$$$$isSelected$$() {
  return this.$Shape$.$isSelected$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ || this.$HideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$HideHoverEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$setShowPopupBehaviors$ = (0,D.$JSCompiler_set$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$16$$) {
  for(var $parentId$$18$$ = this.$_dataLayer$.$getClientId$(), $i$$446$$ = 0;$i$$446$$ < $clientIds$$16$$.length && $clientIds$$16$$[$i$$446$$] != $parentId$$18$$;$i$$446$$++) {
  }
  return $parentId$$18$$
};
D.$JSCompiler_prototypeAlias$$.$getDataLayer$ = (0,D.$JSCompiler_get$$)("$_dataLayer$");
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_dataLayer$.$__getDragTransferable$(this)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_dataLayer$.$__getDragFeedback$()
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$329$$) {
  return $event$$329$$.type == D.$DvtMouseEvent$CLICK$$ ? this : 32 == $event$$329$$.keyCode && $event$$329$$.ctrlKey ? this : (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$329$$, this.$GetNavigables$())
};
D.$JSCompiler_prototypeAlias$$.$GetNavigables$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$15$$) {
  return this.$Shape$ && this.$Shape$.getParent() ? this.$Shape$.$getDimensions$($targetCoordinateSpace$$15$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$Shape$ ? this.$Shape$.$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ && (this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$, this.$hideHoverEffect$())
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$15$$) {
  this.$Shape$.getParent() && (this.Zoom = $pzcMatrix$$15$$.$_a$, this.$recenter$())
};
D.$JSCompiler_prototypeAlias$$.$PositionLabel$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$recenter$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getSize$ = (0,D.$JSCompiler_returnArg$$)(0);
D.$DvtMapDataArea$$ = function $$DvtMapDataArea$$$($context$$211$$, $dataLayer$$17$$, $rowKey$$10$$, $clientId$$19$$, $regionId$$4$$) {
  this.Init($context$$211$$, $dataLayer$$17$$, $rowKey$$10$$, $clientId$$19$$, $regionId$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataArea$$, D.$DvtMapDataObject$$, "DvtMapDataArea");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$212$$, $dataLayer$$18$$, $rowKey$$11$$, $clientId$$20$$, $regionId$$5$$) {
  D.$DvtMapDataArea$$.$superclass$.Init.call(this, $context$$212$$, $dataLayer$$18$$, $rowKey$$11$$, $clientId$$20$$, $regionId$$5$$);
  this.$_isHoverEffectShowing$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$setDisplayable$ = function $$JSCompiler_prototypeAlias$$$$setDisplayable$$($disp$$2$$) {
  D.$DvtMapDataArea$$.$superclass$.$setDisplayable$.call(this, $disp$$2$$)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$26$$) {
  $selected$$26$$ && !this.$_isHoverEffectShowing$ && this.$_dataAreaLayer$.$addChild$(this.$Shape$);
  this.$Shape$.$setSelected$($selected$$26$$);
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_dataAreaLayer$.$addChild$(this.$Shape$);
  this.$Shape$.$showHoverEffect$();
  this.$_isHoverEffectShowing$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$HideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$HideHoverEffect$$() {
  this.$isSelected$() ? this.$_dataAreaLayer$.$addChild$(this.$Shape$) : this.$_dataAreaLayer$.$addChildAt$(this.$Shape$, 0);
  this.$Shape$.$hideHoverEffect$();
  this.$_isHoverEffectShowing$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$isDrilled$ = function $$JSCompiler_prototypeAlias$$$$isDrilled$$() {
  return this.$Shape$.$isDrilled$()
};
D.$JSCompiler_prototypeAlias$$.$setDrilled$ = function $$JSCompiler_prototypeAlias$$$$setDrilled$$($drilled$$) {
  (this.$_isDrilled$ = $drilled$$) ? this.$_dataAreaLayer$.$addChild$(this.$Shape$) : this.$_dataAreaLayer$.$addChildAt$(this.$Shape$, 0);
  this.$Shape$.$setDrilled$($drilled$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$11$$) {
  this.$Shape$.getParent() && (D.$DvtMapDataArea$$.$superclass$.$HandleZoomEvent$.call(this, $pzcMatrix$$11$$), (0,D.$JSCompiler_StaticMethods_handleZoomEvent$$)(this.$Shape$, $pzcMatrix$$11$$), this.$isDrilled$() || this.$PositionLabel$($pzcMatrix$$11$$))
};
D.$JSCompiler_prototypeAlias$$.$PositionLabel$ = function $$JSCompiler_prototypeAlias$$$$PositionLabel$$($pzcMatrix$$12$$) {
  this.$Label$ && this.$Label$.update($pzcMatrix$$12$$)
};
D.$JSCompiler_prototypeAlias$$.$GetNavigables$ = function $$JSCompiler_prototypeAlias$$$$GetNavigables$$() {
  return(0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this.$getDataLayer$().$_tmap$)
};
D.$DvtMapDataMarker$$ = function $$DvtMapDataMarker$$$($context$$217$$, $dataLayer$$20$$, $rowKey$$12$$, $clientId$$21$$, $regionId$$6$$) {
  this.Init($context$$217$$, $dataLayer$$20$$, $rowKey$$12$$, $clientId$$21$$, $regionId$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataMarker$$, D.$DvtMapDataObject$$, "DvtMapDataMarker");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataMarker$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$218$$, $dataLayer$$21$$, $rowKey$$13$$, $clientId$$22$$, $regionId$$7$$) {
  D.$DvtMapDataMarker$$.$superclass$.Init.call(this, $context$$218$$, $dataLayer$$21$$, $rowKey$$13$$, $clientId$$22$$, $regionId$$7$$);
  this.$InitCanvasZoom$ = 1;
  this.$_size$ = 0
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$27$$) {
  this.$Shape$.$setSelected$($selected$$27$$);
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$Shape$.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$HideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$HideHoverEffect$$() {
  this.$Shape$.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$PositionLabel$ = function $$JSCompiler_prototypeAlias$$$$PositionLabel$$() {
  if(this.$Label$) {
    this.$Label$.$alignCenter$();
    var $x$$152$$ = (this.$Shape$.$getX$() + (0,D.$JSCompiler_StaticMethods_getScaledWidth$$)(this.$Shape$) / 2) * this.Zoom, $markerY$$1_y$$129$$ = this.$Shape$.$getY$() * this.Zoom, $markerH$$ = (0,D.$JSCompiler_StaticMethods_getScaledHeight$$)(this.$Shape$), $markerType$$1$$ = this.$Shape$.$getType$();
    "top" == this.$LabelPos$ ? ($markerY$$1_y$$129$$ -= 4, this.$Label$.$alignBottom$()) : "bottom" == this.$LabelPos$ ? ($markerY$$1_y$$129$$ += $markerH$$, this.$Label$.$alignTop$()) : ($markerY$$1_y$$129$$ = "triangleUp" == $markerType$$1$$ ? $markerY$$1_y$$129$$ + 2 * $markerH$$ / 3 : "triangleDown" == $markerType$$1$$ ? $markerY$$1_y$$129$$ + $markerH$$ / 3 : $markerY$$1_y$$129$$ + $markerH$$ / 2, this.$Label$.$alignMiddle$());
    this.$Label$.$setX$($x$$152$$);
    this.$Label$.$setY$($markerY$$1_y$$129$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$recenter$ = function $$JSCompiler_prototypeAlias$$$$recenter$$() {
  var $parent$$37$$ = this.$Shape$.getParent(), $height$$73_rotation$$6$$ = (0,D.$JSCompiler_StaticMethods_getScaledHeight$$)(this.$Shape$);
  (0,D.$JSCompiler_StaticMethods_getScaledWidth$$)(this.$Shape$) != D.$JSCompiler_alias_NULL$$ && ($height$$73_rotation$$6$$ != D.$JSCompiler_alias_NULL$$ && $parent$$37$$) && ($height$$73_rotation$$6$$ = this.$Shape$.$getRotation$(), this.$Label$ && this.$Shape$.$getRotation$() ? ((0,D.$JSCompiler_StaticMethods_setTranslate$$)($parent$$37$$, this.$Center$.x * this.Zoom - this.$Center$.x, this.$Center$.y * this.Zoom - this.$Center$.y), (0,D.$DvtAgent$workaroundFirefoxRepaint$$)($parent$$37$$)) : 
  ((0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$Shape$, this.$Center$.x * this.Zoom - (this.$Center$.x * window.Math.cos($height$$73_rotation$$6$$) - this.$Center$.y * window.Math.sin($height$$73_rotation$$6$$)), this.$Center$.y * this.Zoom - (this.$Center$.x * window.Math.sin($height$$73_rotation$$6$$) + this.$Center$.y * window.Math.cos($height$$73_rotation$$6$$))), (0,D.$DvtAgent$workaroundFirefoxRepaint$$)(this.$Shape$)))
};
D.$JSCompiler_prototypeAlias$$.$GetNavigables$ = function $$JSCompiler_prototypeAlias$$$$GetNavigables$$() {
  return(0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this.$getDataLayer$().$_tmap$)
};
D.$JSCompiler_prototypeAlias$$.$setSize$ = (0,D.$JSCompiler_set$$)("$_size$");
D.$JSCompiler_prototypeAlias$$.$getSize$ = (0,D.$JSCompiler_get$$)("$_size$");
D.$DvtMapDataImage$$ = function $$DvtMapDataImage$$$($context$$192$$, $dataLayer$$5$$, $rowKey$$7$$, $clientId$$1$$, $regionId$$) {
  this.Init($context$$192$$, $dataLayer$$5$$, $rowKey$$7$$, $clientId$$1$$, $regionId$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataImage$$, D.$DvtMapDataObject$$, "DvtMapDataImage");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataImage$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$193$$, $dataLayer$$6$$, $rowKey$$8$$, $clientId$$2$$, $regionId$$1$$) {
  D.$DvtMapDataImage$$.$superclass$.Init.call(this, $context$$193$$, $dataLayer$$6$$, $rowKey$$8$$, $clientId$$2$$, $regionId$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$onImageLoaded$ = function $$JSCompiler_prototypeAlias$$$$onImageLoaded$$($image$$4$$) {
  $image$$4$$ && ($image$$4$$.width && $image$$4$$.height) && (this.$Shape$.getWidth() || this.$Shape$.$setWidth$($image$$4$$.width), this.$Shape$.getHeight() || this.$Shape$.$setHeight$($image$$4$$.height), this.$setSize$($image$$4$$.width * $image$$4$$.height), this.$Shape$.$setX$(this.$Center$.x - $image$$4$$.width / 2), this.$Shape$.$setY$(this.$Center$.y - $image$$4$$.height / 2), this.$recenter$())
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$recenter$ = function $$JSCompiler_prototypeAlias$$$$recenter$$() {
  var $curCenterX_width$$85$$ = this.$Shape$.getWidth(), $curCenterY_height$$69$$ = this.$Shape$.getHeight();
  $curCenterX_width$$85$$ != D.$JSCompiler_alias_NULL$$ && ($curCenterY_height$$69$$ != D.$JSCompiler_alias_NULL$$ && this.$Shape$.getParent()) && ($curCenterX_width$$85$$ = this.$Shape$.$getX$() + $curCenterX_width$$85$$ / 2, $curCenterY_height$$69$$ = this.$Shape$.$getY$() + $curCenterY_height$$69$$ / 2, (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$Shape$, $curCenterX_width$$85$$ * this.Zoom - this.$Center$.x, $curCenterY_height$$69$$ * this.Zoom - this.$Center$.y))
};
D.$JSCompiler_prototypeAlias$$.$setSize$ = (0,D.$JSCompiler_set$$)("$_size$");
D.$JSCompiler_prototypeAlias$$.$getSize$ = (0,D.$JSCompiler_get$$)("$_size$");
D.$DvtMapDataComponent$$ = function $$DvtMapDataComponent$$$($context$$223$$, $dataLayer$$27$$, $rowKey$$16$$, $clientId$$26$$, $regionId$$10$$) {
  this.Init($context$$223$$, $dataLayer$$27$$, $rowKey$$16$$, $clientId$$26$$, $regionId$$10$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataComponent$$, D.$DvtMapDataObject$$, "DvtMapDataComponent");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataComponent$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$224$$, $dataLayer$$28$$, $rowKey$$17$$, $clientId$$27$$, $regionId$$11$$) {
  D.$DvtMapDataComponent$$.$superclass$.Init.call(this, $context$$224$$, $dataLayer$$28$$, $rowKey$$17$$, $clientId$$27$$, $regionId$$11$$)
};
D.$JSCompiler_prototypeAlias$$.$setWidth$ = (0,D.$JSCompiler_set$$)("$_width$");
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$_width$");
D.$JSCompiler_prototypeAlias$$.$setHeight$ = (0,D.$JSCompiler_set$$)("$_height$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$_height$");
D.$JSCompiler_prototypeAlias$$.$setX$ = (0,D.$JSCompiler_set$$)("$_x$");
D.$JSCompiler_prototypeAlias$$.$setY$ = (0,D.$JSCompiler_set$$)("$_y$");
D.$JSCompiler_prototypeAlias$$.$recenter$ = function $$JSCompiler_prototypeAlias$$$$recenter$$() {
  if(this.$Shape$.getParent()) {
    var $curCenterY$$1$$ = this.$_y$ + this.$_height$ / 2;
    this.$Shape$.$setTranslateX$(this.$_x$ + (this.$_x$ + this.$_width$ / 2) * this.Zoom - this.$Center$.x);
    this.$Shape$.$setTranslateY$(this.$_y$ + $curCenterY$$1$$ * this.Zoom - this.$Center$.y)
  }
};
D.$DvtMapDataImage$$.prototype.$getSize$ = function $$DvtMapDataImage$$$$$getSize$$() {
  return this.$_width$ * this.$_height$
};
D.$DvtMapArea$$ = function $$DvtMapArea$$$($context$$194$$, $dvtShape$$, $areaName$$1$$, $bSupportsVectorEffects$$) {
  this.Init($context$$194$$, $dvtShape$$, $areaName$$1$$, $bSupportsVectorEffects$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapArea$$, D.$DvtContainer$$, "DvtMapArea");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapArea$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$195_stroke$$46$$, $dvtShape$$1$$, $areaName$$2$$, $bSupportsVectorEffects$$1$$) {
  D.$DvtMapArea$$.$superclass$.Init.call(this, $context$$195_stroke$$46$$);
  this.$_isSelected$ = this.$_bSelectable$ = D.$JSCompiler_alias_FALSE$$;
  this.$_areaName$ = $areaName$$2$$;
  this.$_shape$ = $dvtShape$$1$$;
  this.$addChild$(this.$_shape$);
  this.$_bSupportsVectorEffects$ = $bSupportsVectorEffects$$1$$;
  if($context$$195_stroke$$46$$ = $dvtShape$$1$$.$getStroke$()) {
    this.$_areaStrokeWidth$ = $context$$195_stroke$$46$$.getWidth()
  }
  this.$_shape$ && (0,D.$JSCompiler_StaticMethods_setAriaRole$$)(this.$_shape$, "img")
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$setTooltip$ = (0,D.$JSCompiler_set$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$getStroke$ = function $$JSCompiler_prototypeAlias$$$$getStroke$$() {
  return this.$_shape$ instanceof D.$DvtShape$$ ? this.$_shape$.$getStroke$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setStroke$ = function $$JSCompiler_prototypeAlias$$$$setStroke$$($stroke$$47$$) {
  this.$_shape$ instanceof D.$DvtShape$$ && this.$_shape$.$setStroke$($stroke$$47$$)
};
D.$JSCompiler_prototypeAlias$$.$setFill$ = function $$JSCompiler_prototypeAlias$$$$setFill$$($fill$$30$$) {
  this.$_shape$ instanceof D.$DvtShape$$ && this.$_shape$.$setFill$($fill$$30$$)
};
D.$JSCompiler_prototypeAlias$$.$getFill$ = function $$JSCompiler_prototypeAlias$$$$getFill$$() {
  return this.$_shape$ instanceof D.$DvtShape$$ ? this.$_shape$.$getFill$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getCmds$ = function $$JSCompiler_prototypeAlias$$$$getCmds$$() {
  return this.$_shape$ instanceof D.$DvtPath$$ ? this.$_shape$.$getCmds$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setCmds$ = function $$JSCompiler_prototypeAlias$$$$setCmds$$($cmds$$6$$) {
  this.$_shape$ instanceof D.$DvtPath$$ && this.$_shape$.$setCmds$($cmds$$6$$)
};
D.$JSCompiler_prototypeAlias$$.$setSrc$ = function $$JSCompiler_prototypeAlias$$$$setSrc$$($src$$8$$) {
  this.$_shape$ instanceof D.$DvtImage$$ && this.$_shape$.$setSrc$($src$$8$$)
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$129$$, $y$$108$$) {
  var $dims$$37$$ = this.$getDimensions$();
  return $x$$129$$ >= $dims$$37$$.x && $x$$129$$ <= $dims$$37$$.x + $dims$$37$$.$w$ && $y$$108$$ >= $dims$$37$$.y && $y$$108$$ <= $dims$$37$$.y + $dims$$37$$.$h$
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($pzcMatrix$$) {
  if(!this.$_bSupportsVectorEffects$ && this.$_shape$ && this.$_areaStrokeWidth$) {
    var $zoomStroke$$ = this.$_shape$.$getStroke$().clone();
    $zoomStroke$$.$setWidth$(this.$_areaStrokeWidth$ / $pzcMatrix$$.$_a$);
    this.$_shape$.$setStroke$($zoomStroke$$)
  }
};
D.$DvtMapLayer$$ = function $$DvtMapLayer$$$($tmap$$13$$, $eventHandler$$6$$) {
  this.Init($tmap$$13$$, $eventHandler$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapLayer$$, D.$DvtObj$$, "DvtMapLayer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$14$$, $eventHandler$$7$$) {
  this.$_tmap$ = $tmap$$14$$;
  this.$LayerName$ = "cities";
  this.$ClientId$ = D.$JSCompiler_alias_NULL$$;
  this.$EventHandler$ = $eventHandler$$7$$;
  this.$DataLayers$ = {};
  this.$PzcMatrix$ = new D.$DvtMatrix$$
};
D.$JSCompiler_prototypeAlias$$.$PreDataLayerUpdate$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$PostDataLayerUpdate$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$updateDataLayer$ = function $$JSCompiler_prototypeAlias$$$$updateDataLayer$$($dataLayer$$25$$, $pzcMatrix$$17$$) {
  this.$_animation$ && (this.$_animationStopped$ = D.$JSCompiler_alias_TRUE$$, this.$_animation$.stop(D.$JSCompiler_alias_TRUE$$));
  this.$PzcMatrix$ = $pzcMatrix$$17$$;
  this.$_oldDataLayer$ = this.$getDataLayer$($dataLayer$$25$$.$getClientId$());
  this.$DataLayers$[$dataLayer$$25$$.$getClientId$()] = $dataLayer$$25$$;
  $dataLayer$$25$$.$render$(this.$PzcMatrix$);
  $dataLayer$$25$$.$HandleZoomEvent$(new D.$DvtZoomEvent$$("zoomed"), this.$PzcMatrix$);
  if(this.$_oldDataLayer$) {
    var $anim$$20_oldContainers$$ = $dataLayer$$25$$.$getAnimation$(), $animDur$$4$$ = $dataLayer$$25$$.$getAnimationDuration$();
    if(D.$DvtBlackBoxAnimationHandler$$.isSupported($anim$$20_oldContainers$$)) {
      for(var $anim1_bounds1$$ = new D.$DvtRectangle$$(0, 0, this.$_tmap$.$_width$, this.$_tmap$.$_height$), $bounds2_oldNonScaledContainers$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)(this.$_oldDataLayer$), $anim2_i$$447$$ = 0;$anim2_i$$447$$ < $bounds2_oldNonScaledContainers$$.length;$anim2_i$$447$$++) {
        var $rect$$18$$ = new D.$DvtRect$$(this.$_tmap$.$_context$, 0, 0, this.$_tmap$.$_width$, this.$_tmap$.$_height$);
        $rect$$18$$.$setFill$(D.$JSCompiler_alias_NULL$$);
        $bounds2_oldNonScaledContainers$$[$anim2_i$$447$$].$addChild$($rect$$18$$)
      }
      for(var $newNonScaledContainers_oldScaledContainers$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)($dataLayer$$25$$), $anim2_i$$447$$ = 0;$anim2_i$$447$$ < $newNonScaledContainers_oldScaledContainers$$.length;$anim2_i$$447$$++) {
        $rect$$18$$ = new D.$DvtRect$$(this.$_tmap$.$_context$, 0, 0, this.$_tmap$.$_width$, this.$_tmap$.$_height$), $rect$$18$$.$setFill$(D.$JSCompiler_alias_NULL$$), $newNonScaledContainers_oldScaledContainers$$[$anim2_i$$447$$].$addChild$($rect$$18$$)
      }
      $anim1_bounds1$$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_tmap$.$_context$, $anim$$20_oldContainers$$, $bounds2_oldNonScaledContainers$$, $newNonScaledContainers_oldScaledContainers$$, $anim1_bounds1$$, $animDur$$4$$);
      $bounds2_oldNonScaledContainers$$ = new D.$DvtRectangle$$(0, 0, this.$_tmap$.$_width$ / this.$PzcMatrix$.$_a$, this.$_tmap$.$_height$ / this.$PzcMatrix$.$_a$);
      $newNonScaledContainers_oldScaledContainers$$ = [this.$_oldDataLayer$.$_dataAreaLayer$];
      for($anim2_i$$447$$ = 0;$anim2_i$$447$$ < $newNonScaledContainers_oldScaledContainers$$.length;$anim2_i$$447$$++) {
        $rect$$18$$ = new D.$DvtRect$$(this.$_tmap$.$_context$, 0, 0, this.$_tmap$.$_width$ / this.$PzcMatrix$.$_a$, this.$_tmap$.$_height$ / this.$PzcMatrix$.$_a$), $rect$$18$$.$setFill$(D.$JSCompiler_alias_NULL$$), $newNonScaledContainers_oldScaledContainers$$[$anim2_i$$447$$].$addChild$($rect$$18$$)
      }
      for(var $newScaledContainers$$ = [$dataLayer$$25$$.$_dataAreaLayer$], $anim2_i$$447$$ = 0;$anim2_i$$447$$ < $newScaledContainers$$.length;$anim2_i$$447$$++) {
        $rect$$18$$ = new D.$DvtRect$$(this.$_tmap$.$_context$, 0, 0, this.$_tmap$.$_width$ / this.$PzcMatrix$.$_a$, this.$_tmap$.$_height$ / this.$PzcMatrix$.$_a$), $rect$$18$$.$setFill$(D.$JSCompiler_alias_NULL$$), $newScaledContainers$$[$anim2_i$$447$$].$addChild$($rect$$18$$)
      }
      $anim2_i$$447$$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_tmap$.$_context$, $anim$$20_oldContainers$$, $newNonScaledContainers_oldScaledContainers$$, $newScaledContainers$$, $bounds2_oldNonScaledContainers$$, $animDur$$4$$);
      this.$_animation$ = new D.$DvtParallelPlayable$$(this.$_tmap$.$_context$, [$anim1_bounds1$$, $anim2_i$$447$$])
    }else {
      $anim$$20_oldContainers$$ = [this.$_oldDataLayer$.$_dataAreaLayer$, this.$_oldDataLayer$.$_dataPointLayer$, this.$_oldDataLayer$.$_dataLabelLayer$];
      for($anim2_i$$447$$ = 0;$anim2_i$$447$$ < $anim$$20_oldContainers$$.length;$anim2_i$$447$$++) {
        $anim$$20_oldContainers$$[$anim2_i$$447$$].getParent().removeChild($anim$$20_oldContainers$$[$anim2_i$$447$$])
      }
      this.$PostDataLayerUpdate$()
    }
    this.$PreDataLayerUpdate$();
    if(this.$_animation$) {
      this.$EventHandler$.$removeListeners$(this.$_callbackObj$);
      var $thisRef$$25$$ = this;
      this.$_animation$.$setOnEnd$(function() {
        $thisRef$$25$$.$OnAnimationEnd$($dataLayer$$25$$)
      }, this);
      this.$_animation$.play()
    }
  }else {
    this.$PostDataLayerUpdate$(), (0,D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$)(this.$_tmap$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getDataLayer$ = function $$JSCompiler_prototypeAlias$$$$getDataLayer$$($clientId$$25$$) {
  return this.$DataLayers$ ? this.$DataLayers$[$clientId$$25$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getClientId$ = (0,D.$JSCompiler_get$$)("$ClientId$");
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$18$$) {
  this.$PzcMatrix$ = $pzcMatrix$$18$$;
  for(var $id$$122$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$122$$].$render$($pzcMatrix$$18$$)
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutContainer$$, $doNotResetAreas$$2$$) {
  for(var $id$$123$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$123$$].reset($fadeOutContainer$$, $doNotResetAreas$$2$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$330$$, $pzcMatrix$$19$$) {
  this.$PzcMatrix$ = $pzcMatrix$$19$$;
  for(var $id$$124$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$124$$].$HandleZoomEvent$($event$$330$$, $pzcMatrix$$19$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = function $$JSCompiler_prototypeAlias$$$$HandlePanEvent$$($pzcMatrix$$20$$) {
  this.$PzcMatrix$ = $pzcMatrix$$20$$;
  for(var $id$$125$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$125$$].$HandlePanEvent$($pzcMatrix$$20$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$($dataLayer$$26_newScaledContainers$$1$$) {
  if(this.$_oldDataLayer$) {
    for(var $newNonScaledContainers$$1_oldContainers$$1$$ = [this.$_oldDataLayer$.$_dataAreaLayer$, this.$_oldDataLayer$.$_dataPointLayer$, this.$_oldDataLayer$.$_dataLabelLayer$], $i$$448$$ = 0;$i$$448$$ < $newNonScaledContainers$$1_oldContainers$$1$$.length;$i$$448$$++) {
      var $parent$$40$$ = $newNonScaledContainers$$1_oldContainers$$1$$[$i$$448$$].getParent();
      $parent$$40$$ && $parent$$40$$.removeChild($newNonScaledContainers$$1_oldContainers$$1$$[$i$$448$$])
    }
  }
  $newNonScaledContainers$$1_oldContainers$$1$$ = (0,D.$JSCompiler_StaticMethods_getNonScaledContainers$$)($dataLayer$$26_newScaledContainers$$1$$);
  for($i$$448$$ = 0;$i$$448$$ < $newNonScaledContainers$$1_oldContainers$$1$$.length;$i$$448$$++) {
    $newNonScaledContainers$$1_oldContainers$$1$$[$i$$448$$].$removeChildAt$($newNonScaledContainers$$1_oldContainers$$1$$[$i$$448$$].$getNumChildren$() - 1)
  }
  $dataLayer$$26_newScaledContainers$$1$$ = [$dataLayer$$26_newScaledContainers$$1$$.$_dataAreaLayer$];
  for($i$$448$$ = 0;$i$$448$$ < $dataLayer$$26_newScaledContainers$$1$$.length;$i$$448$$++) {
    $dataLayer$$26_newScaledContainers$$1$$[$i$$448$$].$removeChildAt$($dataLayer$$26_newScaledContainers$$1$$[$i$$448$$].$getNumChildren$() - 1)
  }
  this.$PostDataLayerUpdate$();
  (0,D.$JSCompiler_StaticMethods_OnUpdateLayerEnd$$)(this.$_tmap$);
  this.$_animationStopped$ = D.$JSCompiler_alias_FALSE$$;
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$EventHandler$.$addListeners$(this.$_callbackObj$)
};
D.$DvtMapAreaLayer$$ = function $$DvtMapAreaLayer$$$($tmap$$8$$, $layerName$$11$$, $clientId$$11$$, $labelDisplay$$8$$, $labelType$$4$$, $eventHandler$$4$$) {
  this.Init($tmap$$8$$, $layerName$$11$$, $clientId$$11$$, $labelDisplay$$8$$, $labelType$$4$$, $eventHandler$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapAreaLayer$$, D.$DvtMapLayer$$, "DvtMapAreaLayer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapAreaLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$9$$, $layerName$$12$$, $clientId$$12$$, $labelDisplay$$9$$, $labelType$$5$$, $eventHandler$$5$$) {
  D.$DvtMapAreaLayer$$.$superclass$.Init.call(this, $tmap$$9$$, $eventHandler$$5$$);
  this.$_labelDisplay$ = $labelDisplay$$9$$;
  this.$LayerName$ = $layerName$$12$$;
  this.$ClientId$ = $clientId$$12$$;
  this.$_labelType$ = $labelType$$5$$;
  this.$_areaLabels$ = {};
  this.$Areas$ = {};
  this.$AreaShapes$ = {};
  this.$_labelInfo$ = this.$AreaNames$ = D.$JSCompiler_alias_NULL$$;
  this.$_disclosed$ = [];
  this.$_renderArea$ = {};
  this.$_renderLabel$ = {};
  this.$_renderedLabels$ = {};
  this.$AreaContainer$ = new D.$DvtContainer$$(this.$_tmap$.$_context$);
  this.$LabelContainer$ = new D.$DvtContainer$$(this.$_tmap$.$_context$);
  this.$_tmap$.$_areaLayers$.$addChildAt$(this.$AreaContainer$, 0);
  this.$_tmap$.$_labelLayers$.$addChildAt$(this.$LabelContainer$, 0);
  this.$_dropTarget$ = new D.$DvtThematicMapDropTarget$$(this, this.$_tmap$.$_mapName$)
};
D.$JSCompiler_prototypeAlias$$.$setAnimation$ = (0,D.$JSCompiler_set$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$getAnimation$ = (0,D.$JSCompiler_get$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = (0,D.$JSCompiler_set$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animDur$");
D.$JSCompiler_StaticMethods_setAreaNames$$ = function $$JSCompiler_StaticMethods_setAreaNames$$$($JSCompiler_StaticMethods_setAreaNames$self$$, $values$$7$$) {
  $JSCompiler_StaticMethods_setAreaNames$self$$.$AreaNames$ = $values$$7$$;
  for(var $area$$8$$ in $JSCompiler_StaticMethods_setAreaNames$self$$.$AreaNames$) {
    $JSCompiler_StaticMethods_setAreaNames$self$$.$_renderArea$[$area$$8$$] = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_setAreaNames$self$$.$_renderLabel$[$area$$8$$] = D.$JSCompiler_alias_TRUE$$
  }
};
D.$DvtMapAreaLayer$$.prototype.$getLabelInfoForArea$ = function $$DvtMapAreaLayer$$$$$getLabelInfoForArea$$($area$$11$$) {
  return!this.$_labelInfo$ ? D.$JSCompiler_alias_NULL$$ : this.$_labelInfo$[$area$$11$$]
};
D.$JSCompiler_StaticMethods_getChildrenForArea$$ = function $$JSCompiler_StaticMethods_getChildrenForArea$$$($JSCompiler_StaticMethods_getChildrenForArea$self$$, $area$$12$$) {
  return $JSCompiler_StaticMethods_getChildrenForArea$self$$.$_children$[$area$$12$$] ? $JSCompiler_StaticMethods_getChildrenForArea$self$$.$_children$[$area$$12$$].split(",") : []
};
D.$DvtMapAreaLayer$$.prototype.$getLabelDisplay$ = (0,D.$JSCompiler_get$$)("$_labelDisplay$");
D.$JSCompiler_StaticMethods_setIsolatedArea$$ = function $$JSCompiler_StaticMethods_setIsolatedArea$$$($JSCompiler_StaticMethods_setIsolatedArea$self$$, $isolatedArea$$) {
  $JSCompiler_StaticMethods_setIsolatedArea$self$$.$_isolatedArea$ = $isolatedArea$$;
  $JSCompiler_StaticMethods_setIsolatedArea$self$$.$_layerDim$ = D.$JSCompiler_alias_NULL$$;
  for(var $area$$15$$ in $JSCompiler_StaticMethods_setIsolatedArea$self$$.$AreaShapes$) {
    $area$$15$$ != $isolatedArea$$ && ($JSCompiler_StaticMethods_setIsolatedArea$self$$.$_renderArea$[$area$$15$$] = D.$JSCompiler_alias_FALSE$$)
  }
};
D.$DvtMapAreaLayer$$.prototype.$getLayerDim$ = function $$DvtMapAreaLayer$$$$$getLayerDim$$() {
  if(!this.$_layerDim$) {
    if(this.$_isolatedArea$) {
      this.$_layerDim$ = window.DvtPathUtils.$getDimensions$(window.DvtPathUtils.$createPathArray$(D.$DvtBaseMapManager$$.$getPathForArea$(this.$_tmap$.$_mapName$, this.$LayerName$, this.$_isolatedArea$)))
    }else {
      if("world" != this.$_tmap$.$_mapName$ && "worldRegions" != this.$_tmap$.$_mapName$ && (this.$_layerDim$ = D.$DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$)), !this.$_layerDim$) {
        var $dim$$11$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)(this.$AreaContainer$.$getDimensions$(), this.$_tmap$.$_dataAreaLayers$.$getDimensions$());
        0 < $dim$$11$$.$w$ && 0 < $dim$$11$$.$h$ && (this.$_layerDim$ = $dim$$11$$)
      }
    }
  }
  return this.$_layerDim$
};
D.$JSCompiler_StaticMethods__createAreaAndLabel$$ = function $$JSCompiler_StaticMethods__createAreaAndLabel$$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$, $area$$16$$, $bForceUpdateArea_label$$60_labelText$$4_mapArea$$) {
  var $areaDim$$1_areaShape$$2$$ = $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaShapes$[$area$$16$$];
  if($areaDim$$1_areaShape$$2$$ && (($bForceUpdateArea_label$$60_labelText$$4_mapArea$$ || !$JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$16$$]) && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$updateAreaShape$($area$$16$$), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$16$$] || ($bForceUpdateArea_label$$60_labelText$$4_mapArea$$ = new D.$DvtMapArea$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_context$, $areaDim$$1_areaShape$$2$$, 
  $area$$16$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$Areas$[$area$$16$$] = $bForceUpdateArea_label$$60_labelText$$4_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$EventHandler$.$associate$($areaDim$$1_areaShape$$2$$, $bForceUpdateArea_label$$60_labelText$$4_mapArea$$), $bForceUpdateArea_label$$60_labelText$$4_mapArea$$.$setTooltip$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$ && 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$16$$] ? $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$16$$][1] : D.$JSCompiler_alias_NULL$$)), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_renderLabel$[$area$$16$$] && ($bForceUpdateArea_label$$60_labelText$$4_mapArea$$ = $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_areaLabels$[$area$$16$$], !$bForceUpdateArea_label$$60_labelText$$4_mapArea$$ && ("off" != $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$ && 
  $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$) && ($bForceUpdateArea_label$$60_labelText$$4_mapArea$$ = "short" == $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelType$ ? $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$16$$][0] : $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$AreaNames$[$area$$16$$][1])))) {
    $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$ && $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$[$area$$16$$] ? $bForceUpdateArea_label$$60_labelText$$4_mapArea$$ = new D.$DvtMapLabel$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_context$, $bForceUpdateArea_label$$60_labelText$$4_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelInfo$[$area$$16$$], $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$, 
    $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$LabelContainer$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$) : ($areaDim$$1_areaShape$$2$$ = (0,D.$DvtDisplayableUtils$getDimensionsForced$$)($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_context$, $areaDim$$1_areaShape$$2$$), $bForceUpdateArea_label$$60_labelText$$4_mapArea$$ = new D.$DvtMapLabel$$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_context$, $bForceUpdateArea_label$$60_labelText$$4_mapArea$$, 
    [[$areaDim$$1_areaShape$$2$$.x, $areaDim$$1_areaShape$$2$$.y, $areaDim$$1_areaShape$$2$$.$w$, $areaDim$$1_areaShape$$2$$.$h$]], $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_labelDisplay$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$LabelContainer$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_tmap$.$_bSupportsVectorEffects$)), $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_areaLabels$[$area$$16$$] = $bForceUpdateArea_label$$60_labelText$$4_mapArea$$, $JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_layerCSSStyle$ && 
    $bForceUpdateArea_label$$60_labelText$$4_mapArea$$.$setCSSStyle$($JSCompiler_StaticMethods__createAreaAndLabel$self$$.$_layerCSSStyle$)
  }
};
D.$JSCompiler_StaticMethods__addAreaAndLabel$$ = function $$JSCompiler_StaticMethods__addAreaAndLabel$$$($JSCompiler_StaticMethods__addAreaAndLabel$self$$, $area$$17$$, $fadeInObjs$$2$$) {
  if($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$AreaShapes$[$area$$17$$]) {
    $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$AreaContainer$.$addChild$($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$Areas$[$area$$17$$]);
    var $label$$61$$ = $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_areaLabels$[$area$$17$$];
    $label$$61$$ && ($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderLabel$[$area$$17$$] ? $label$$61$$.update($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$PzcMatrix$) : $label$$61$$.reset(), $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderedLabels$[$area$$17$$] = $JSCompiler_StaticMethods__addAreaAndLabel$self$$.$_renderLabel$[$area$$17$$]);
    $fadeInObjs$$2$$ && ($fadeInObjs$$2$$.push($JSCompiler_StaticMethods__addAreaAndLabel$self$$.$Areas$[$area$$17$$]), $label$$61$$ && ($fadeInObjs$$2$$.push($label$$61$$), $fadeInObjs$$2$$.push($label$$61$$.$_leaderLine$)))
  }
};
D.$DvtMapAreaLayer$$.prototype.$updateAreaShape$ = function $$DvtMapAreaLayer$$$$$updateAreaShape$$($area$$18$$) {
  if(!this.$_paths$ || this.$_bUpdateShapesForRender$) {
    this.$_bUpdateShapesForRender$ = D.$JSCompiler_alias_FALSE$$;
    var $cmd$$8_layerDim$$;
    this.$_paths$ = ($cmd$$8_layerDim$$ = "world" == this.$_tmap$.$_mapName$ || "worldRegions" == this.$_tmap$.$_mapName$ ? D.$DvtBaseMapManager$$.$getBaseMapDim$(this.$_tmap$.$_mapName$, this.$LayerName$) : this.$getLayerDim$()) ? D.$DvtBaseMapManager$$.$simplifyAreaPaths$(D.$DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$), $cmd$$8_layerDim$$.$w$, $cmd$$8_layerDim$$.$h$, this.$_tmap$.$_width$, this.$_tmap$.$_height$, this.$_tmap$.$_zooming$ ? this.$_tmap$.$_maxZoomFactor$ : 
    1) : D.$DvtBaseMapManager$$.$getAreaPaths$(this.$_tmap$.$_mapName$, this.$LayerName$)
  }
  $cmd$$8_layerDim$$ = this.$_paths$[$area$$18$$];
  this.$AreaShapes$[$area$$18$$] && $cmd$$8_layerDim$$ ? this.$AreaShapes$[$area$$18$$].$setCmds$($cmd$$8_layerDim$$) : delete this.$AreaShapes$[$area$$18$$]
};
D.$JSCompiler_StaticMethods_resetRenderedAreas$$ = function $$JSCompiler_StaticMethods_resetRenderedAreas$$$($JSCompiler_StaticMethods_resetRenderedAreas$self$$) {
  for(var $area$$19$$ in $JSCompiler_StaticMethods_resetRenderedAreas$self$$.$AreaNames$) {
    $JSCompiler_StaticMethods_resetRenderedAreas$self$$.$_renderArea$[$area$$19$$] = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_resetRenderedAreas$self$$.$_renderLabel$[$area$$19$$] = D.$JSCompiler_alias_TRUE$$
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapAreaLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$updateDataLayer$ = function $$JSCompiler_prototypeAlias$$$$updateDataLayer$$($dataLayer$$15$$, $pzcMatrix$$8$$, $topLayerName$$1$$) {
  D.$DvtMapAreaLayer$$.$superclass$.$updateDataLayer$.call(this, $dataLayer$$15$$, $pzcMatrix$$8$$, $topLayerName$$1$$);
  if($topLayerName$$1$$ == this.$LayerName$) {
    for(var $area$$20$$ in this.$AreaShapes$) {
      (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$20$$, D.$JSCompiler_alias_TRUE$$), this.$_renderArea$[$area$$20$$] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$20$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$9$$) {
  this.$_bUpdateShapesForRender$ = D.$JSCompiler_alias_TRUE$$;
  for(var $area$$21$$ in this.$AreaShapes$) {
    (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$21$$, D.$JSCompiler_alias_TRUE$$), this.$_renderArea$[$area$$21$$] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$21$$)
  }
  D.$DvtMapAreaLayer$$.$superclass$.$render$.call(this, $pzcMatrix$$9$$)
};
D.$JSCompiler_prototypeAlias$$.$PreDataLayerUpdate$ = function $$JSCompiler_prototypeAlias$$$$PreDataLayerUpdate$$() {
  for(var $area$$22$$ in this.$_renderArea$) {
    this.$_renderArea$[$area$$22$$] || ((0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $area$$22$$, D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $area$$22$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$PostDataLayerUpdate$ = function $$JSCompiler_prototypeAlias$$$$PostDataLayerUpdate$$() {
  for(var $area$$23$$ in this.$_renderArea$) {
    if(!this.$_renderArea$[$area$$23$$]) {
      this.$AreaContainer$.removeChild(this.$Areas$[$area$$23$$]);
      var $label$$62_leaderLine$$2$$ = this.$_areaLabels$[$area$$23$$];
      $label$$62_leaderLine$$2$$ && (this.$_renderedLabels$[$area$$23$$] = D.$JSCompiler_alias_FALSE$$, this.$LabelContainer$.removeChild($label$$62_leaderLine$$2$$), ($label$$62_leaderLine$$2$$ = $label$$62_leaderLine$$2$$.$_leaderLine$) && this.$LabelContainer$.removeChild($label$$62_leaderLine$$2$$))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$discloseAreas$ = function $$JSCompiler_prototypeAlias$$$$discloseAreas$$($areas$$5$$, $fadeInObjs$$4$$) {
  for(var $i$$inline_4361$$ = 0;$i$$inline_4361$$ < $areas$$5$$.length;$i$$inline_4361$$++) {
    (0,D.$JSCompiler_StaticMethods__createAreaAndLabel$$)(this, $areas$$5$$[$i$$inline_4361$$], D.$JSCompiler_alias_FALSE$$), this.$_renderArea$[$areas$$5$$[$i$$inline_4361$$]] && (0,D.$JSCompiler_StaticMethods__addAreaAndLabel$$)(this, $areas$$5$$[$i$$inline_4361$$], $fadeInObjs$$4$$)
  }
  for(var $id$$116$$ in this.$DataLayers$) {
    this.$DataLayers$[$id$$116$$].$discloseAreas$($areas$$5$$, $fadeInObjs$$4$$, this.$PzcMatrix$)
  }
  this.$_disclosed$ = this.$_disclosed$.concat($areas$$5$$)
};
D.$JSCompiler_prototypeAlias$$.$undiscloseAreas$ = function $$JSCompiler_prototypeAlias$$$$undiscloseAreas$$($areas$$6$$, $fadeOutObjs$$3$$) {
  for(var $childAreaLayer_id$$117$$ in this.$DataLayers$) {
    this.$DataLayers$[$childAreaLayer_id$$117$$].$undiscloseAreas$($areas$$6$$, $fadeOutObjs$$3$$)
  }
  $childAreaLayer_id$$117$$ = (0,D.$JSCompiler_StaticMethods_getDrillChildLayer$$)(this.$_tmap$, this.$LayerName$);
  for(var $i$$441$$ = 0;$i$$441$$ < $areas$$6$$.length;$i$$441$$++) {
    var $areaName$$5$$ = $areas$$6$$[$i$$441$$];
    if(this.$Areas$[$areaName$$5$$]) {
      var $idx$$11$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_disclosed$, $areaName$$5$$);
      -1 !== $idx$$11$$ && (this.$_disclosed$.splice($idx$$11$$, 1), $fadeOutObjs$$3$$.push(this.$Areas$[$areaName$$5$$]))
    }
    $childAreaLayer_id$$117$$ && $childAreaLayer_id$$117$$.$undiscloseAreas$((0,D.$JSCompiler_StaticMethods_getChildrenForArea$$)(this, $areaName$$5$$), $fadeOutObjs$$3$$)
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutObjs$$4$$, $doNotResetAreas$$1$$) {
  D.$DvtMapAreaLayer$$.$superclass$.reset.call(this, $fadeOutObjs$$4$$, $doNotResetAreas$$1$$);
  "none" != this.$_tmap$.$_drillMode$ && (this.$undiscloseAreas$(this.$_disclosed$, $fadeOutObjs$$4$$), this.$_disclosed$ = [])
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$314$$, $pzcMatrix$$10$$) {
  D.$DvtMapAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $event$$314$$, $pzcMatrix$$10$$);
  if(!this.$_tmap$.$_bSupportsVectorEffects$) {
    for(var $area$$24$$ in this.$Areas$) {
      this.$Areas$[$area$$24$$].$HandleZoomEvent$($pzcMatrix$$10$$)
    }
  }
  for($area$$24$$ in this.$_renderedLabels$) {
    if(this.$_renderedLabels$[$area$$24$$]) {
      var $label$$63$$ = this.$_areaLabels$[$area$$24$$];
      $label$$63$$ && $label$$63$$.update($pzcMatrix$$10$$)
    }
  }
};
D.$DvtMapCustomAreaLayer$$ = function $$DvtMapCustomAreaLayer$$$($tmap$$, $layerName$$, $clientId$$3$$, $labelDisplay$$1$$, $labelType$$1$$, $eventHandler$$) {
  this.Init($tmap$$, $layerName$$, $clientId$$3$$, $labelDisplay$$1$$, $labelType$$1$$, $eventHandler$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapCustomAreaLayer$$, D.$DvtMapAreaLayer$$, "DvtMapCustomAreaLayer");
D.$DvtMapCustomAreaLayer$$.prototype.Init = function $$DvtMapCustomAreaLayer$$$$Init$($tmap$$1$$, $layerName$$1$$, $clientId$$4$$, $labelDisplay$$2$$, $labelType$$2$$, $eventHandler$$1$$) {
  D.$DvtMapCustomAreaLayer$$.$superclass$.Init.call(this, $tmap$$1$$, $layerName$$1$$, $clientId$$4$$, $labelDisplay$$2$$, $labelType$$2$$, $eventHandler$$1$$)
};
D.$DvtMapCustomAreaLayer$$.prototype.$updateAreaShape$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtMapCustomAreaLayer$$.prototype.$getLayerDim$ = function $$DvtMapCustomAreaLayer$$$$$getLayerDim$$() {
  return new D.$DvtRectangle$$(0, 0, this.$_layerWidth$, this.$_layerHeight$)
};
D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$ = function $$JSCompiler_StaticMethods__selectImageBasedOnResolution$$$($JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$10$$) {
  var $widthRes$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$10$$.$_tmap$.$_width$, $heightRes$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$10$$.$_tmap$.$_height$;
  $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$10$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$10$$.$_areaLayerImages$;
  for(var $i$$406$$ = 0;$i$$406$$ < $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$10$$.length;$i$$406$$++) {
    var $height$$70_image$$5$$ = $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$10$$[$i$$406$$], $source$$15$$ = $height$$70_image$$5$$.source, $width$$86$$ = $height$$70_image$$5$$.width, $height$$70_image$$5$$ = $height$$70_image$$5$$.height;
    if($source$$15$$ && -1 < $source$$15$$.search(".svg") || $width$$86$$ >= $widthRes$$ && $height$$70_image$$5$$ >= $heightRes$$ || $i$$406$$ == $JSCompiler_StaticMethods__selectImageBasedOnResolution$self_images$$10$$.length - 1) {
      return $source$$15$$
    }
  }
};
D.$JSCompiler_StaticMethods_setAreaLayerImage$$ = function $$JSCompiler_StaticMethods_setAreaLayerImage$$$($JSCompiler_StaticMethods_setAreaLayerImage$self$$, $images$$11$$) {
  var $refWidth_shape$$21$$ = D.$JSCompiler_alias_NULL$$, $isRTL$$15$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_tmap$.$_context$);
  if($images$$11$$ && 0 < $images$$11$$.length) {
    var $refWidth_shape$$21$$ = $images$$11$$[0].width, $refHeight$$ = $images$$11$$[0].height;
    $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_layerWidth$ = $refWidth_shape$$21$$;
    $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_layerHeight$ = $refHeight$$;
    for(var $locImages$$ = [], $i$$407$$ = 0;$i$$407$$ < $images$$11$$.length;$i$$407$$++) {
      $isRTL$$15$$ && "rtl" == $images$$11$$[$i$$407$$].dir ? $locImages$$.push($images$$11$$[$i$$407$$]) : !$isRTL$$15$$ && "ltr" == $images$$11$$[$i$$407$$].dir && $locImages$$.push($images$$11$$[$i$$407$$])
    }
    $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_areaLayerImages$ = 0 < $locImages$$.length ? $locImages$$ : $images$$11$$;
    $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_imageSrc$ = (0,D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$);
    $refWidth_shape$$21$$ = new D.$DvtImage$$($JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_tmap$.$_context$, $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$_imageSrc$, 0, 0, $refWidth_shape$$21$$, $refHeight$$)
  }
  $refWidth_shape$$21$$ && ((0,D.$JSCompiler_StaticMethods_setAreaNames$$)($JSCompiler_StaticMethods_setAreaLayerImage$self$$, {image:[D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$]}), $JSCompiler_StaticMethods_setAreaLayerImage$self$$.$AreaShapes$ = {image:$refWidth_shape$$21$$})
};
D.$DvtMapCustomAreaLayer$$.prototype.$HandleZoomEvent$ = function $$DvtMapCustomAreaLayer$$$$$HandleZoomEvent$$($event$$312$$, $pzcMatrix$$1$$) {
  D.$DvtMapCustomAreaLayer$$.$superclass$.$HandleZoomEvent$.call(this, $event$$312$$, $pzcMatrix$$1$$);
  if(this.$Areas$.image) {
    var $newImageSrc$$ = (0,D.$JSCompiler_StaticMethods__selectImageBasedOnResolution$$)(this);
    $newImageSrc$$ != this.$_imageSrc$ && (this.$_imageSrc$ = $newImageSrc$$, this.$Areas$[window.areaName].$setSrc$(this.$_imageSrc$))
  }
};
D.$DvtMapDataLayer$$ = function $$DvtMapDataLayer$$$($tmap$$6$$, $parentLayer$$1$$, $clientId$$9$$, $eventHandler$$2$$) {
  this.Init($tmap$$6$$, $parentLayer$$1$$, $clientId$$9$$, $eventHandler$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapDataLayer$$, D.$DvtObj$$, "DvtMapDataLayer");
D.$DvtMapDataLayer$$.prototype.Init = function $$DvtMapDataLayer$$$$Init$($tmap$$7$$, $parentLayer$$2$$, $clientId$$10$$, $eventHandler$$3$$) {
  this.$_tmap$ = $tmap$$7$$;
  this.$_clientId$ = $clientId$$10$$;
  this.$_areaObjs$ = [];
  this.$_dataObjs$ = [];
  this.$_eventHandler$ = $eventHandler$$3$$;
  this.$_dragSource$ = new D.$DvtDragSource$$($tmap$$7$$.$_context$);
  (0,D.$JSCompiler_StaticMethods_setDragSource$$)(this.$_eventHandler$, this.$_dragSource$);
  this.$_dataAreaLayer$ = new D.$DvtContainer$$(this.$_tmap$.$_context$);
  this.$_dataPointLayer$ = new D.$DvtContainer$$(this.$_tmap$.$_context$);
  this.$_dataLabelLayer$ = new D.$DvtContainer$$(this.$_tmap$.$_context$);
  this.$_tmap$.$_dataAreaLayers$.$addChildAt$(this.$_dataAreaLayer$, 0);
  this.$_tmap$.$_dataPointLayers$.$addChildAt$(this.$_dataPointLayer$, 0);
  this.$_tmap$.$_labelLayers$.$addChildAt$(this.$_dataLabelLayer$, 0);
  this.$_parentLayer$ = $parentLayer$$2$$;
  this.$_disclosed$ = [];
  this.$_drilled$ = []
};
D.$JSCompiler_StaticMethods_getNonScaledContainers$$ = function $$JSCompiler_StaticMethods_getNonScaledContainers$$$($JSCompiler_StaticMethods_getNonScaledContainers$self$$) {
  var $containers$$1$$ = [$JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_dataLabelLayer$];
  $JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ && $containers$$1$$.push($JSCompiler_StaticMethods_getNonScaledContainers$self$$.$_dataPointLayer$);
  return $containers$$1$$
};
D.$JSCompiler_StaticMethods_getNavigableAreaObjects$$ = function $$JSCompiler_StaticMethods_getNavigableAreaObjects$$$($JSCompiler_StaticMethods_getNavigableAreaObjects$self$$) {
  for(var $navigables$$7$$ = [], $i$$428$$ = 0;$i$$428$$ < $JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$.length;$i$$428$$++) {
    $JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$[$i$$428$$].$isDrilled$() || $navigables$$7$$.push($JSCompiler_StaticMethods_getNavigableAreaObjects$self$$.$_areaObjs$[$i$$428$$])
  }
  return $navigables$$7$$
};
D.$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$ = function $$JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$$$($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$) {
  for(var $navigables$$8$$ = [], $i$$429$$ = 0;$i$$429$$ < $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$.length;$i$$429$$++) {
    for(var $j$$79$$ = 0;$j$$79$$ < $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_disclosed$.length;$j$$79$$++) {
      $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$429$$].$AreaId$ == $JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_disclosed$[$j$$79$$] && ($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$429$$].$isDrilled$() || $navigables$$8$$.push($JSCompiler_StaticMethods_getNavigableDisclosedAreaObjects$self$$.$_areaObjs$[$i$$429$$]))
    }
  }
  return $navigables$$8$$
};
D.$JSCompiler_StaticMethods_addAreaObject$$ = function $$JSCompiler_StaticMethods_addAreaObject$$$($JSCompiler_StaticMethods_addAreaObject$self$$, $obj$$141$$) {
  $JSCompiler_StaticMethods_addAreaObject$self$$.$_areaObjs$.push($obj$$141$$);
  $JSCompiler_StaticMethods_addAreaObject$self$$.$_eventHandler$.$associate$($obj$$141$$.$getDisplayable$(), $obj$$141$$);
  $obj$$141$$.$_dataAreaLayer$ = $JSCompiler_StaticMethods_addAreaObject$self$$.$_dataAreaLayer$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getClientId$ = (0,D.$JSCompiler_get$$)("$_clientId$");
D.$JSCompiler_prototypeAlias$$.$setAnimation$ = (0,D.$JSCompiler_set$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$getAnimation$ = (0,D.$JSCompiler_get$$)("$_animType$");
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = (0,D.$JSCompiler_set$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animDur$");
D.$JSCompiler_prototypeAlias$$.$setSelectionMode$ = function $$JSCompiler_prototypeAlias$$$$setSelectionMode$$($mode$$8$$) {
  if(this.$_selectionMode$ = $mode$$8$$) {
    this.$_selectionHandler$ = new D.$DvtSelectionHandler$$(this.$_selectionMode$), this.$_eventHandler$.$setSelectionHandler$(this.$_clientId$, this.$_selectionHandler$)
  }
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$_selectionMode$ != D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__renderAreaAndLabel$$ = function $$JSCompiler_StaticMethods__renderAreaAndLabel$$$($JSCompiler_StaticMethods__renderAreaAndLabel$self$$, $areaIndex$$1$$) {
  var $JSCompiler_inline_result$$372_areaObj$$inline_4335_idx$$inline_10123_label$$53$$;
  $JSCompiler_inline_result$$372_areaObj$$inline_4335_idx$$inline_10123_label$$53$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$1$$];
  var $areaDim_displayable$$45_displayable$$inline_4336$$ = $JSCompiler_inline_result$$372_areaObj$$inline_4335_idx$$inline_10123_label$$53$$.$getDisplayable$(), $pathToCopy$$inline_4337$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_parentLayer$.$AreaShapes$[$JSCompiler_inline_result$$372_areaObj$$inline_4335_idx$$inline_10123_label$$53$$.$AreaId$];
  $pathToCopy$$inline_4337$$ ? ($areaDim_displayable$$45_displayable$$inline_4336$$.$setCmds$($pathToCopy$$inline_4337$$.$getCmds$()), $JSCompiler_inline_result$$372_areaObj$$inline_4335_idx$$inline_10123_label$$53$$ = D.$JSCompiler_alias_TRUE$$) : ($JSCompiler_inline_result$$372_areaObj$$inline_4335_idx$$inline_10123_label$$53$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$.indexOf($JSCompiler_inline_result$$372_areaObj$$inline_4335_idx$$inline_10123_label$$53$$), -1 !== $JSCompiler_inline_result$$372_areaObj$$inline_4335_idx$$inline_10123_label$$53$$ && 
  $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$.splice($JSCompiler_inline_result$$372_areaObj$$inline_4335_idx$$inline_10123_label$$53$$, 1), $JSCompiler_inline_result$$372_areaObj$$inline_4335_idx$$inline_10123_label$$53$$ = D.$JSCompiler_alias_FALSE$$);
  if($JSCompiler_inline_result$$372_areaObj$$inline_4335_idx$$inline_10123_label$$53$$) {
    $areaDim_displayable$$45_displayable$$inline_4336$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$1$$].$getDisplayable$();
    $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_dataAreaLayer$.$addChild$($areaDim_displayable$$45_displayable$$inline_4336$$);
    if($JSCompiler_inline_result$$372_areaObj$$inline_4335_idx$$inline_10123_label$$53$$ = $JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_areaObjs$[$areaIndex$$1$$].$getLabel$()) {
      0 < $JSCompiler_inline_result$$372_areaObj$$inline_4335_idx$$inline_10123_label$$53$$.$_boundRectangle$.length || ($areaDim_displayable$$45_displayable$$inline_4336$$ = $areaDim_displayable$$45_displayable$$inline_4336$$.$getDimensions$(), $JSCompiler_inline_result$$372_areaObj$$inline_4335_idx$$inline_10123_label$$53$$.$_boundRectangle$.push($areaDim_displayable$$45_displayable$$inline_4336$$)), $JSCompiler_inline_result$$372_areaObj$$inline_4335_idx$$inline_10123_label$$53$$.update($JSCompiler_StaticMethods__renderAreaAndLabel$self$$.$_pzcMatrix$)
    }
    return D.$JSCompiler_alias_TRUE$$
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtMapDataLayer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($pzcMatrix$$4$$) {
  this.$_bFixPatterns$ = D.$JSCompiler_alias_TRUE$$;
  this.$_pzcMatrix$ = $pzcMatrix$$4$$;
  var $areaLabelsToRemove$$ = {};
  this.$_dataObjs$.sort(function compare($pzcMatrix$$4$$, $areaLabelsToRemove$$) {
    return $pzcMatrix$$4$$.$getSize$() < $areaLabelsToRemove$$.$getSize$() ? 1 : $pzcMatrix$$4$$.$getSize$() > $areaLabelsToRemove$$.$getSize$() ? -1 : 0
  });
  for(var $i$$430$$ = 0;$i$$430$$ < this.$_dataObjs$.length;$i$$430$$++) {
    var $dataObj$$15_regionId$$2$$ = this.$_dataObjs$[$i$$430$$], $displayable$$46$$ = $dataObj$$15_regionId$$2$$.$getDisplayable$(), $json$$1_label$$54$$ = $dataObj$$15_regionId$$2$$.$getLabel$();
    if($json$$1_label$$54$$) {
      if($displayable$$46$$.$getRotation$()) {
        var $container$$91$$ = new D.$DvtContainer$$($displayable$$46$$.$_context$);
        this.$_dataPointLayer$.$addChild$($container$$91$$);
        $container$$91$$.$addChild$($displayable$$46$$);
        $container$$91$$.$addChild$($json$$1_label$$54$$)
      }else {
        this.$_dataPointLayer$.$addChild$($displayable$$46$$), $displayable$$46$$.$addChild$($json$$1_label$$54$$)
      }
      $dataObj$$15_regionId$$2$$.$PositionLabel$($pzcMatrix$$4$$)
    }else {
      this.$_dataPointLayer$.$addChild$($displayable$$46$$)
    }
    if($dataObj$$15_regionId$$2$$ instanceof D.$DvtMapDataComponent$$) {
      if($json$$1_label$$54$$ = $dataObj$$15_regionId$$2$$.$_json$) {
        $displayable$$46$$.$render$(window.JSON.parse($json$$1_label$$54$$), $dataObj$$15_regionId$$2$$.getWidth(), $dataObj$$15_regionId$$2$$.getHeight())
      }else {
        continue
      }
    }
    ($dataObj$$15_regionId$$2$$ = $dataObj$$15_regionId$$2$$.$AreaId$) && ($areaLabelsToRemove$$[$dataObj$$15_regionId$$2$$] = D.$JSCompiler_alias_TRUE$$)
  }
  for($i$$430$$ = 0;$i$$430$$ < this.$_areaObjs$.length;$i$$430$$++) {
    $areaLabelsToRemove$$[this.$_areaObjs$[$i$$430$$].$AreaId$] && this.$_areaObjs$[$i$$430$$].$setLabel$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__renderAreaAndLabel$$)(this, $i$$430$$) || $i$$430$$--
  }
  this.$_initSelections$ && this.$_processInitialSelections$()
};
D.$JSCompiler_prototypeAlias$$.$discloseAreas$ = function $$JSCompiler_prototypeAlias$$$$discloseAreas$$($areas$$2$$, $fadeInObjs$$, $pzcMatrix$$5_regionId$$3$$) {
  this.$_pzcMatrix$ = $pzcMatrix$$5_regionId$$3$$;
  for(var $drilledAreas$$ = [], $j$$80$$ = 0;$j$$80$$ < $areas$$2$$.length;$j$$80$$++) {
    for(var $i$$431_label$$55_leaderLine$$ = 0;$i$$431_label$$55_leaderLine$$ < this.$_areaObjs$.length;$i$$431_label$$55_leaderLine$$++) {
      if(this.$_areaObjs$[$i$$431_label$$55_leaderLine$$].$AreaId$ == $areas$$2$$[$j$$80$$]) {
        $drilledAreas$$.push(this.$_areaObjs$[$i$$431_label$$55_leaderLine$$].$AreaId$);
        (0,D.$JSCompiler_StaticMethods__renderAreaAndLabel$$)(this, $i$$431_label$$55_leaderLine$$);
        var $displayable$$47$$ = this.$_areaObjs$[$i$$431_label$$55_leaderLine$$].$getDisplayable$();
        $fadeInObjs$$.push($displayable$$47$$);
        (0,D.$JSCompiler_StaticMethods_handleZoomEvent$$)($displayable$$47$$, $pzcMatrix$$5_regionId$$3$$);
        if($i$$431_label$$55_leaderLine$$ = this.$_areaObjs$[$i$$431_label$$55_leaderLine$$].$getLabel$()) {
          $fadeInObjs$$.push($i$$431_label$$55_leaderLine$$), ($i$$431_label$$55_leaderLine$$ = $i$$431_label$$55_leaderLine$$.$_leaderLine$) && $fadeInObjs$$.push($i$$431_label$$55_leaderLine$$)
        }
        break
      }
    }
  }
  for($i$$431_label$$55_leaderLine$$ = 0;$i$$431_label$$55_leaderLine$$ < this.$_dataObjs$.length;$i$$431_label$$55_leaderLine$$++) {
    for($j$$80$$ = 0;$j$$80$$ < $areas$$2$$.length;$j$$80$$++) {
      $pzcMatrix$$5_regionId$$3$$ = this.$_dataObjs$[$i$$431_label$$55_leaderLine$$].$AreaId$, $displayable$$47$$ = this.$_dataObjs$[$i$$431_label$$55_leaderLine$$].$getDisplayable$(), $pzcMatrix$$5_regionId$$3$$ != D.$JSCompiler_alias_NULL$$ ? $pzcMatrix$$5_regionId$$3$$ == $areas$$2$$[$j$$80$$] && (this.$_dataPointLayer$.$addChild$($displayable$$47$$), $fadeInObjs$$.push($displayable$$47$$)) : (this.$_dataPointLayer$.$addChild$($displayable$$47$$), $fadeInObjs$$.push($displayable$$47$$))
    }
  }
  this.$_disclosed$ = this.$_disclosed$.concat($drilledAreas$$)
};
D.$JSCompiler_prototypeAlias$$.$undiscloseAreas$ = function $$JSCompiler_prototypeAlias$$$$undiscloseAreas$$($areas$$3$$, $fadeOutObjs$$) {
  for(var $j$$81$$ = 0;$j$$81$$ < $areas$$3$$.length;$j$$81$$++) {
    for(var $i$$432_label$$56$$ = 0;$i$$432_label$$56$$ < this.$_areaObjs$.length;$i$$432_label$$56$$++) {
      if(this.$_areaObjs$[$i$$432_label$$56$$].$AreaId$ == $areas$$3$$[$j$$81$$]) {
        this.$_areaObjs$[$i$$432_label$$56$$].$isDrilled$() && this.$_areaObjs$[$i$$432_label$$56$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
        this.$_areaObjs$[$i$$432_label$$56$$].$isSelected$() && this.$_selectionHandler$.$removeFromSelection$(this.$_areaObjs$[$i$$432_label$$56$$]);
        var $idx$$9$$ = D.$DvtArrayUtils$$.$getIndex$(this.$_disclosed$, $areas$$3$$[$j$$81$$]);
        if(-1 < $idx$$9$$ && (this.$_disclosed$.splice($idx$$9$$, 1), $fadeOutObjs$$.push(this.$_areaObjs$[$i$$432_label$$56$$].$getDisplayable$()), $i$$432_label$$56$$ = this.$_areaObjs$[$i$$432_label$$56$$].$getLabel$())) {
          $fadeOutObjs$$.push($i$$432_label$$56$$), $fadeOutObjs$$.push($i$$432_label$$56$$.$_leaderLine$)
        }
        break
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.reset = function $$JSCompiler_prototypeAlias$$$reset$($fadeOutObjs$$2$$, $doNotResetAreas$$) {
  if(this.$_selectionHandler$) {
    for(var $j$$82_selectedObjs$$ = this.$_selectionHandler$.getSelection(), $i$$435_label$$59$$ = 0;$i$$435_label$$59$$ < $j$$82_selectedObjs$$.length;$i$$435_label$$59$$++) {
      (!$doNotResetAreas$$ || $doNotResetAreas$$ && -1 == D.$DvtArrayUtils$$.$getIndex$($doNotResetAreas$$, $j$$82_selectedObjs$$[$i$$435_label$$59$$].$AreaId$)) && this.$_selectionHandler$.$removeFromSelection$($j$$82_selectedObjs$$[$i$$435_label$$59$$])
    }
  }
  if("none" != this.$_tmap$.$_drillMode$) {
    for($j$$82_selectedObjs$$ = 0;$j$$82_selectedObjs$$ < this.$_drilled$.length;$j$$82_selectedObjs$$++) {
      for($i$$435_label$$59$$ = 0;$i$$435_label$$59$$ < this.$_areaObjs$.length;$i$$435_label$$59$$++) {
        if(this.$_areaObjs$[$i$$435_label$$59$$].$AreaId$ == this.$_drilled$[$j$$82_selectedObjs$$]) {
          this.$_areaObjs$[$i$$435_label$$59$$].$setDrilled$(D.$JSCompiler_alias_FALSE$$);
          var $displayable$$49$$ = this.$_areaObjs$[$i$$435_label$$59$$].$getDisplayable$();
          this.$_dataAreaLayer$.$addChild$($displayable$$49$$);
          $fadeOutObjs$$2$$.push($displayable$$49$$);
          if($i$$435_label$$59$$ = this.$_areaObjs$[$i$$435_label$$59$$].$getLabel$()) {
            $i$$435_label$$59$$.update(this.$_pzcMatrix$), $fadeOutObjs$$2$$.push($i$$435_label$$59$$), $fadeOutObjs$$2$$.push($i$$435_label$$59$$.$_leaderLine$)
          }
          break
        }
      }
      for($i$$435_label$$59$$ = 0;$i$$435_label$$59$$ < this.$_dataObjs$.length;$i$$435_label$$59$$++) {
        if(this.$_dataObjs$[$i$$435_label$$59$$].$AreaId$ == this.$_drilled$[$j$$82_selectedObjs$$]) {
          $displayable$$49$$ = this.$_dataObjs$[$i$$435_label$$59$$].$getDisplayable$();
          this.$_dataPointLayer$.$addChild$($displayable$$49$$);
          $fadeOutObjs$$2$$.push($displayable$$49$$);
          break
        }
      }
    }
  }
  this.$_drilled$ = []
};
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$313$$, $pzcMatrix$$6$$) {
  this.$_pzcMatrix$ = $pzcMatrix$$6$$;
  var $i$$436_zoom$$12$$ = $pzcMatrix$$6$$.$_a$, $areaObjs_dataObjs_j$$83_type$$121$$ = $event$$313$$.$getSubType$();
  if(this.$_bFixPatterns$ && "zoomed" == $areaObjs_dataObjs_j$$83_type$$121$$) {
    this.$_bFixPatterns$ = D.$JSCompiler_alias_FALSE$$;
    for($areaObjs_dataObjs_j$$83_type$$121$$ = 0;$areaObjs_dataObjs_j$$83_type$$121$$ < this.$_areaObjs$.length;$areaObjs_dataObjs_j$$83_type$$121$$++) {
      var $displayable$$50$$ = this.$_areaObjs$[$areaObjs_dataObjs_j$$83_type$$121$$].$getDisplayable$(), $fill$$31$$ = $displayable$$50$$.$_ptFill$;
      if($fill$$31$$) {
        var $scaledFill$$ = new D.$DvtPatternFill$$;
        $fill$$31$$.$mergeProps$($scaledFill$$);
        $scaledFill$$.$setMatrix$(new D.$DvtMatrix$$(1 / $i$$436_zoom$$12$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 1 / $i$$436_zoom$$12$$));
        $displayable$$50$$.$setFill$($scaledFill$$)
      }
    }
  }
  $areaObjs_dataObjs_j$$83_type$$121$$ = this.$_areaObjs$;
  for($i$$436_zoom$$12$$ = 0;$i$$436_zoom$$12$$ < $areaObjs_dataObjs_j$$83_type$$121$$.length;$i$$436_zoom$$12$$++) {
    $areaObjs_dataObjs_j$$83_type$$121$$[$i$$436_zoom$$12$$].$HandleZoomEvent$($pzcMatrix$$6$$)
  }
  if(this.$_tmap$.$_isMarkerZoomBehaviorFixed$) {
    $areaObjs_dataObjs_j$$83_type$$121$$ = this.$_dataObjs$;
    for($i$$436_zoom$$12$$ = 0;$i$$436_zoom$$12$$ < $areaObjs_dataObjs_j$$83_type$$121$$.length;$i$$436_zoom$$12$$++) {
      $areaObjs_dataObjs_j$$83_type$$121$$[$i$$436_zoom$$12$$].$HandleZoomEvent$($pzcMatrix$$6$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$HandlePanEvent$ = (0,D.$JSCompiler_set$$)("$_pzcMatrix$");
D.$JSCompiler_prototypeAlias$$.$_processInitialSelections$ = function $$JSCompiler_prototypeAlias$$$$_processInitialSelections$$() {
  this.$_selectionHandler$ && ((0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, this.$_initSelections$, this.$_dataObjs$.concat(this.$_areaObjs$)), this.$_initSelections$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$__getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$__getDragTransferable$$($obj$$143_rowKeys$$2$$) {
  if(this.$_selectionHandler$) {
    $obj$$143_rowKeys$$2$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($obj$$143_rowKeys$$2$$, D.$JSCompiler_alias_FALSE$$), this.$_eventHandler$.$fireSelectionEvent$($obj$$143_rowKeys$$2$$));
    $obj$$143_rowKeys$$2$$ = [];
    for(var $selection$$19$$ = this.$_selectionHandler$.getSelection(), $i$$437$$ = 0;$i$$437$$ < $selection$$19$$.length;$i$$437$$++) {
      $obj$$143_rowKeys$$2$$.push($selection$$19$$[$i$$437$$].getId())
    }
    return $obj$$143_rowKeys$$2$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$__getDragFeedback$$() {
  for(var $displayables$$16$$ = [], $selection$$20$$ = this.$_selectionHandler$.getSelection(), $i$$438$$ = 0;$i$$438$$ < $selection$$20$$.length;$i$$438$$++) {
    $displayables$$16$$.push($selection$$20$$[$i$$438$$].$getDisplayable$())
  }
  return $displayables$$16$$
};
D.$DvtThematicMapKeyboardHandler$$ = function $$DvtThematicMapKeyboardHandler$$$($tmap$$11$$, $manager$$12$$) {
  this.Init($tmap$$11$$, $manager$$12$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapKeyboardHandler$$, D.$DvtPanZoomCanvasKeyboardHandler$$, "DvtThematicMapKeyboardHandler");
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapKeyboardHandler$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$12$$, $manager$$13$$) {
  D.$DvtThematicMapKeyboardHandler$$.$superclass$.Init($tmap$$12$$, $manager$$13$$);
  this.$_tmap$ = $tmap$$12$$
};
D.$JSCompiler_prototypeAlias$$.$isSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$isSelectionEvent$$($event$$324$$) {
  return this.$isNavigationEvent$($event$$324$$) && !$event$$324$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$processKeyDown$ = function $$JSCompiler_prototypeAlias$$$$processKeyDown$$($event$$325$$) {
  var $focusObj$$1_keyCode$$20$$ = $event$$325$$.keyCode;
  if(221 == $focusObj$$1_keyCode$$20$$) {
    var $focusObj$$1_keyCode$$20$$ = this.$_eventManager$.$getFocus$(), $navigables$$9$$ = (0,D.$JSCompiler_StaticMethods_getNavigableObjects$$)(this.$_tmap$);
    $focusObj$$1_keyCode$$20$$ instanceof D.$DvtMapDataArea$$ && 0 < $navigables$$9$$.length && ($focusObj$$1_keyCode$$20$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)($focusObj$$1_keyCode$$20$$, $event$$325$$, $navigables$$9$$));
    (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, $focusObj$$1_keyCode$$20$$)
  }else {
    219 == $focusObj$$1_keyCode$$20$$ ? ($focusObj$$1_keyCode$$20$$ = this.$_eventManager$.$getFocus$(), $navigables$$9$$ = (0,D.$JSCompiler_StaticMethods_getNavigableAreas$$)(this.$_tmap$), !($focusObj$$1_keyCode$$20$$ instanceof D.$DvtMapDataArea$$) && 0 < $navigables$$9$$.length && ($focusObj$$1_keyCode$$20$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)($focusObj$$1_keyCode$$20$$, $event$$325$$, $navigables$$9$$)), (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, 
    $focusObj$$1_keyCode$$20$$)) : ($focusObj$$1_keyCode$$20$$ = D.$DvtThematicMapKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$325$$), this.$isNavigationEvent$($event$$325$$) && !$event$$325$$.ctrlKey && (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this.$_eventManager$, $focusObj$$1_keyCode$$20$$))
  }
  return $focusObj$$1_keyCode$$20$$
};
D.$JSCompiler_prototypeAlias$$.$isMultiSelectEvent$ = function $$JSCompiler_prototypeAlias$$$$isMultiSelectEvent$$($event$$326$$) {
  return 32 == $event$$326$$.keyCode && $event$$326$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$isNavigationEvent$ = function $$JSCompiler_prototypeAlias$$$$isNavigationEvent$$($event$$327_keyCode$$21$$) {
  var $isNavigable$$1$$ = D.$DvtThematicMapKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$327_keyCode$$21$$);
  if(!$isNavigable$$1$$ && ($event$$327_keyCode$$21$$ = $event$$327_keyCode$$21$$.keyCode, 219 == $event$$327_keyCode$$21$$ || 221 == $event$$327_keyCode$$21$$)) {
    $isNavigable$$1$$ = D.$JSCompiler_alias_TRUE$$
  }
  return $isNavigable$$1$$
};
D.$DvtThematicMapEventManager$$ = function $$DvtThematicMapEventManager$$$($context$$209$$, $callback$$77$$, $callbackObj$$50$$) {
  this.Init($context$$209$$, $callback$$77$$, $callbackObj$$50$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapEventManager$$, D.$DvtEventManager$$, "DvtThematicMapEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$210$$, $callback$$78$$, $callbackObj$$51$$) {
  D.$DvtThematicMapEventManager$$.$superclass$.Init.call(this, $context$$210$$, $callback$$78$$, $callbackObj$$51$$);
  this.$_selectionHandlers$ = {};
  this.$_tmap$ = $callbackObj$$51$$;
  this.$_bDragged$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = function $$JSCompiler_prototypeAlias$$$$getSelectionHandler$$($logicalObj$$14$$) {
  if($logicalObj$$14$$ && $logicalObj$$14$$.$getDataLayer$) {
    return this.$_selectionHandlers$[$logicalObj$$14$$.$getDataLayer$().$getClientId$()]
  }
};
D.$JSCompiler_prototypeAlias$$.$setSelectionHandler$ = function $$JSCompiler_prototypeAlias$$$$setSelectionHandler$$($dataLayerId$$, $handler$$41$$) {
  this.$_selectionHandlers$[$dataLayerId$$] = $handler$$41$$
};
D.$JSCompiler_prototypeAlias$$.$setDrillMode$ = (0,D.$JSCompiler_set$$)("$_drillMode$");
D.$JSCompiler_prototypeAlias$$.$removeFromSelection$ = function $$JSCompiler_prototypeAlias$$$$removeFromSelection$$($clientId$$14$$, $obj$$145$$) {
  var $selectionHandler$$3$$ = this.$_selectionHandlers$[$clientId$$14$$];
  $selectionHandler$$3$$ && $selectionHandler$$3$$.$removeFromSelection$($obj$$145$$)
};
D.$JSCompiler_prototypeAlias$$.$clearSelection$ = function $$JSCompiler_prototypeAlias$$$$clearSelection$$($clientId$$15_selectionHandler$$4$$) {
  ($clientId$$15_selectionHandler$$4$$ = this.$_selectionHandlers$[$clientId$$15_selectionHandler$$4$$]) && $clientId$$15_selectionHandler$$4$$.$clearSelection$()
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$315$$) {
  var $obj$$146$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$315$$.target);
  $obj$$146$$ && ($obj$$146$$.$getShowPopupBehaviors$ && $obj$$146$$.$getDataLayer$) && (this.$_tmap$.$_eventClientId$ = $obj$$146$$.$getDataLayer$().$getClientId$());
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$315$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$316$$) {
  this.$_bDragged$ = D.$JSCompiler_alias_FALSE$$;
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$316$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$317$$) {
  this.$_bDragged$ = D.$JSCompiler_alias_TRUE$$;
  D.$DvtThematicMapEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$317$$)
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$318$$) {
  if(!this.$_bDragged$) {
    var $obj$$147$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$318$$.target);
    (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $obj$$147$$);
    if(!$obj$$147$$ || !$obj$$147$$.$isSelectable$ || !$obj$$147$$.$isSelectable$()) {
      for(var $clientId$$16$$ in this.$_selectionHandlers$) {
        if(this.$_selectionHandlers$[$clientId$$16$$].$processClick$(D.$JSCompiler_alias_NULL$$, $event$$318$$.ctrlKey)) {
          var $selectionEvent$$ = new D.$DvtSelectionEvent$$([]);
          (0,D.$JSCompiler_StaticMethods_addParam$$)($selectionEvent$$, "clientId", $clientId$$16$$);
          this.$_callback$.call(this.$_callbackObj$, $selectionEvent$$)
        }
      }
    }
    D.$DvtThematicMapEventManager$$.$superclass$.$OnClick$.call(this, $event$$318$$);
    this.$_handleClick$($obj$$147$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_handleClick$ = function $$JSCompiler_prototypeAlias$$$$_handleClick$$($obj$$148$$) {
  $obj$$148$$ instanceof D.$DvtMapDataObject$$ && ($obj$$148$$.$_hasAction$ ? (0,D.$JSCompiler_StaticMethods_HandleAction$$)(this, $obj$$148$$) : $obj$$148$$.$getShowPopupBehaviors$() && (this.$_tmap$.$_eventClientId$ = $obj$$148$$.$getDataLayer$().$getClientId$()))
};
D.$JSCompiler_StaticMethods_HandleAction$$ = function $$JSCompiler_StaticMethods_HandleAction$$$($JSCompiler_StaticMethods_HandleAction$self$$, $obj$$149$$) {
  var $actionEvent$$2$$ = new D.$DvtMapActionEvent$$($obj$$149$$.$getClientId$(), $obj$$149$$.getId(), $obj$$149$$.$_action$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($actionEvent$$2$$, "clientId", $obj$$149$$.$getDataLayer$().$getClientId$());
  $JSCompiler_StaticMethods_HandleAction$self$$.$hideTooltip$();
  $JSCompiler_StaticMethods_HandleAction$self$$.$_callback$.call($JSCompiler_StaticMethods_HandleAction$self$$.$_callbackObj$, $actionEvent$$2$$)
};
D.$JSCompiler_StaticMethods_SetClickInfo$$ = function $$JSCompiler_StaticMethods_SetClickInfo$$$($JSCompiler_StaticMethods_SetClickInfo$self$$, $obj$$150$$) {
  var $clientId$$17$$ = D.$JSCompiler_alias_NULL$$, $dataLayer$$16_mapLayer$$1$$ = D.$JSCompiler_alias_NULL$$, $area$$25$$ = D.$JSCompiler_alias_NULL$$;
  $obj$$150$$ && ($obj$$150$$ instanceof D.$DvtMapDataObject$$ ? $area$$25$$ = $obj$$150$$.$getDisplayable$() : $obj$$150$$ instanceof D.$DvtMapArea$$ && ($area$$25$$ = $obj$$150$$), $obj$$150$$.$getDataLayer$ && ($dataLayer$$16_mapLayer$$1$$ = $obj$$150$$.$getDataLayer$(), $clientId$$17$$ = $dataLayer$$16_mapLayer$$1$$.$getClientId$(), $dataLayer$$16_mapLayer$$1$$ = $dataLayer$$16_mapLayer$$1$$.$_parentLayer$.$LayerName$));
  var $JSCompiler_StaticMethods_setClickInfo$self$$inline_4369$$ = $JSCompiler_StaticMethods_SetClickInfo$self$$.$_tmap$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_4369$$.$_clickedLayerName$ = $dataLayer$$16_mapLayer$$1$$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_4369$$.$_clickedDataLayerId$ = $clientId$$17$$;
  $JSCompiler_StaticMethods_setClickInfo$self$$inline_4369$$.$_clickedObject$ = $area$$25$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnDblClick$$($drillEvent_event$$319_obj$$151$$) {
  D.$DvtThematicMapEventManager$$.$superclass$.$OnDblClick$.call(this, $drillEvent_event$$319_obj$$151$$);
  $drillEvent_event$$319_obj$$151$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $drillEvent_event$$319_obj$$151$$.target);
  this.$getSelectionHandler$($drillEvent_event$$319_obj$$151$$) && (this.$_drillMode$ && "none" != this.$_drillMode$) && ($drillEvent_event$$319_obj$$151$$ = new D.$DvtMapDrillEvent$$(D.$DvtMapDrillEvent$$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $drillEvent_event$$319_obj$$151$$))
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$320$$) {
  var $eventConsumed$$5$$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$ = $event$$320$$.keyCode;
  if((48 == $JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$ || 96 == $JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$) && $event$$320$$.ctrlKey && $event$$320$$.shiftKey) {
    this.$_tmap$.$resetMap$(), $event$$320$$.preventDefault()
  }else {
    if(220 == $JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$) {
      ($JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$ = this.$_tmap$.$_legendPanel$) && ($JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$ instanceof D.$DvtCollapsiblePanel$$ ? (0,D.$JSCompiler_StaticMethods_setCollapsed$$)($JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$, !$JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$.isCollapsed()) : 
      $JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$ instanceof D.$DvtPanelDrawer$$ && $JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$.$setDisclosed$(!$JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$.$isDisclosed$())), $event$$320$$.preventDefault()
    }else {
      if(13 == $JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$) {
        $JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$ = this.$getFocus$(), $JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$ instanceof D.$DvtMapDataObject$$ && $JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$.$_hasAction$ ? (0,D.$JSCompiler_StaticMethods_HandleAction$$)(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$) : 
        ($event$$320$$.shiftKey ? this.$_tmap$.$drillUp$() : this.$_tmap$.$drillDown$(), $event$$320$$.preventDefault())
      }else {
        if(32 == $JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$ && $event$$320$$.ctrlKey) {
          $JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$ = this.$getFocus$(), (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$), (0,D.$JSCompiler_StaticMethods_ProcessSelectionEventHelper$$)(this, $JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$, D.$JSCompiler_alias_TRUE$$), $event$$320$$.preventDefault()
        }else {
          if((48 == $JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$ || 96 == $JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$) && $event$$320$$.ctrlKey) {
            var $focusObj_toFit$$inline_4375$$ = this.$getFocus$();
            $event$$320$$.altKey ? ($JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$ = this.$_tmap$, $focusObj_toFit$$inline_4375$$ = $focusObj_toFit$$inline_4375$$.$getDisplayable$(), $focusObj_toFit$$inline_4375$$ || ($focusObj_toFit$$inline_4375$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$.$_zoomToFitObject$), $focusObj_toFit$$inline_4375$$ || ($focusObj_toFit$$inline_4375$$ = $JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$.$_clickedObject$), 
            $JSCompiler_StaticMethods_fitRegion$self$$inline_4374_keyCode$$19_legendPanel_logicalObj$$15$$.$_zoomToFitBounds$($focusObj_toFit$$inline_4375$$.$getDimensions$())) : (0,D.$JSCompiler_StaticMethods_fitSelectedRegions$$)(this.$_tmap$);
            $event$$320$$.preventDefault()
          }else {
            $eventConsumed$$5$$ = D.$DvtThematicMapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$320$$)
          }
        }
      }
    }
  }
  return $eventConsumed$$5$$
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchClick$$($event$$321$$) {
  var $obj$$152$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$321$$.target);
  (0,D.$JSCompiler_StaticMethods_SetClickInfo$$)(this, $obj$$152$$);
  if(!$obj$$152$$ || $obj$$152$$.$isClearSelection$) {
    for(var $clientId$$18$$ in this.$_selectionHandlers$) {
      if(this.$_selectionHandlers$[$clientId$$18$$].$processClick$(D.$JSCompiler_alias_NULL$$, $event$$321$$.ctrlKey)) {
        for(var $selectedObjs$$2_selectionEvent$$1$$ = this.$_selectionHandlers$[$clientId$$18$$].getSelection(), $selectedIds$$7$$ = [], $i$$442$$ = 0;$i$$442$$ < $selectedObjs$$2_selectionEvent$$1$$.length;$i$$442$$++) {
          $selectedIds$$7$$.push($selectedObjs$$2_selectionEvent$$1$$[$i$$442$$].getId())
        }
        $selectedObjs$$2_selectionEvent$$1$$ = new D.$DvtSelectionEvent$$($selectedIds$$7$$);
        this.$_callback$.call(this.$_callbackObj$, $selectedObjs$$2_selectionEvent$$1$$)
      }
    }
  }
  D.$DvtThematicMapEventManager$$.$superclass$.$OnComponentTouchClick$.call(this, $event$$321$$);
  this.$_handleClick$($obj$$152$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOverInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOverInternal$$($event$$322_obj$$153$$) {
  if(($event$$322_obj$$153$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$322_obj$$153$$.target)) && $event$$322_obj$$153$$.$getShowPopupBehaviors$ && $event$$322_obj$$153$$.$getDataLayer$) {
    this.$_tmap$.$_eventClientId$ = $event$$322_obj$$153$$.$getDataLayer$().$getClientId$()
  }
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchDblClick$$($drillEvent$$1_event$$323$$) {
  var $obj$$154$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $drillEvent$$1_event$$323$$.target);
  $obj$$154$$ && (this.$getSelectionHandler$($obj$$154$$) && this.$_drillMode$ && "none" != this.$_drillMode$) && ((0,D.$JSCompiler_StaticMethods_ProcessSelectionEventHelper$$)(this, $obj$$154$$, $drillEvent$$1_event$$323$$.ctrlKey), $drillEvent$$1_event$$323$$ = new D.$DvtMapDrillEvent$$(D.$DvtMapDrillEvent$$.$DRILL_DOWN$), this.$_callback$.call(this.$_callbackObj$, $drillEvent$$1_event$$323$$))
};
D.$DvtThematicMapParser$$ = function $$DvtThematicMapParser$$$($tmap$$2$$) {
  this.Init($tmap$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapParser$$, D.$DvtObj$$, "DvtThematicMapParser");
D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$ = "inlineStyle";
D.$DvtThematicMapParser$_ATTR_ANIM_ON_MAP_CHANGE$$ = "animationOnMapChange";
D.$DvtThematicMapParser$_ATTR_ANIM_ON_MAP_CHANGE$$ = "animationOnMapChange";
D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$ = "inlineStyle";
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$3$$) {
  this.$_tmap$ = $tmap$$3$$;
  this.$_customMarkerDefs$ = {};
  this.$_areaDiscloseStyle$ = this.$_areaSelectStyle$ = this.$_areaHoverStyle$ = this.$_areaLayerStyle$ = D.$JSCompiler_alias_NULL$$;
  this.$_isMobile$ = (0,D.$DvtAgent$isTouchDevice$$)()
};
D.$JSCompiler_prototypeAlias$$.$loadXmlInitial$ = function $$JSCompiler_prototypeAlias$$$$loadXmlInitial$$($childNodes$$27_rootXmlNode$$4$$) {
  $childNodes$$27_rootXmlNode$$4$$ = $childNodes$$27_rootXmlNode$$4$$.$getChildNodes$();
  for(var $childNodes$$inline_4031_node$$215$$, $i$$inline_4032_nodeName$$6$$, $i$$408$$ = 0;$i$$408$$ < $childNodes$$27_rootXmlNode$$4$$.length;$i$$408$$++) {
    if($childNodes$$inline_4031_node$$215$$ = $childNodes$$27_rootXmlNode$$4$$[$i$$408$$], $i$$inline_4032_nodeName$$6$$ = $childNodes$$inline_4031_node$$215$$.getName(), "mapProperties" == $i$$inline_4032_nodeName$$6$$) {
      this.$ParseMapProperties$($childNodes$$inline_4031_node$$215$$)
    }else {
      if("customLayer" == $i$$inline_4032_nodeName$$6$$) {
        this.$ParseCustomRegionLayer$($childNodes$$inline_4031_node$$215$$)
      }else {
        if("layers" == $i$$inline_4032_nodeName$$6$$) {
          this.$ParseDataLayers$($childNodes$$inline_4031_node$$215$$)
        }else {
          if("legend" == $i$$inline_4032_nodeName$$6$$) {
            this.$ParseLegend$($childNodes$$inline_4031_node$$215$$)
          }else {
            if("childResources" == $i$$inline_4032_nodeName$$6$$) {
              $childNodes$$inline_4031_node$$215$$ = $childNodes$$inline_4031_node$$215$$.$getChildNodes$();
              for($i$$inline_4032_nodeName$$6$$ = 0;$i$$inline_4032_nodeName$$6$$ < $childNodes$$inline_4031_node$$215$$.length;$i$$inline_4032_nodeName$$6$$++) {
                var $resourceBundle$$inline_4033$$ = $childNodes$$inline_4031_node$$215$$[$i$$inline_4032_nodeName$$6$$].getTextContent();
                $resourceBundle$$inline_4033$$ && (0,D.$DvtBundle$addLocalizedStrings$$)(window.JSON.parse($resourceBundle$$inline_4033$$))
              }
            }
          }
        }
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$ParseMapProperties$ = function $$JSCompiler_prototypeAlias$$$$ParseMapProperties$$($childNodes$$29_xmlNode$$70$$) {
  var $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$;
  if($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = $childNodes$$29_xmlNode$$70$$.$getAttr$("source")) {
    this.$_isCustomBasemap$ = D.$JSCompiler_alias_TRUE$$
  }
  if($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = $childNodes$$29_xmlNode$$70$$.$getAttr$("baseMapName")) {
    var $JSCompiler_StaticMethods_setMapName$self$$inline_9982_i$$410$$ = this.$_tmap$;
    $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = this.$_isCustomBasemap$ ? "$" + $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ : $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$;
    $JSCompiler_StaticMethods_setMapName$self$$inline_9982_i$$410$$.$_bBaseMapChanged$ = $JSCompiler_StaticMethods_setMapName$self$$inline_9982_i$$410$$.$_mapName$ && $JSCompiler_StaticMethods_setMapName$self$$inline_9982_i$$410$$.$_mapName$ != $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$;
    $JSCompiler_StaticMethods_setMapName$self$$inline_9982_i$$410$$.$_mapName$ = $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$
  }
  if($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = $childNodes$$29_xmlNode$$70$$.$getAttr$("animationOnDisplay")) {
    this.$_tmap$.$_animationOnDisplay$ = $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$
  }
  if($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = $childNodes$$29_xmlNode$$70$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_ANIM_ON_MAP_CHANGE$$)) {
    this.$_tmap$.$_animationOnMapChange$ = $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$
  }
  ($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = $childNodes$$29_xmlNode$$70$$.$getAttr$("animationDuration")) && this.$_tmap$.$setAnimationDuration$($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$);
  if($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = $childNodes$$29_xmlNode$$70$$.$getAttr$("displayTooltips")) {
    this.$_tmap$.$_displayTooltips$ = $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$
  }
  if($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = $childNodes$$29_xmlNode$$70$$.$getAttr$("dropTargetStyle")) {
    this.$_areaDropSiteStyle$ = new D.$DvtCSSStyle$$($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$)
  }
  if($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = $childNodes$$29_xmlNode$$70$$.$getAttr$("controlPanelBehavior")) {
    this.$_tmap$.$_controlPanelBehavior$ = $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$
  }
  ($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = $childNodes$$29_xmlNode$$70$$.$getAttr$("featuresOff")) && this.$_tmap$.$setFeaturesOff$($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$);
  if($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = $childNodes$$29_xmlNode$$70$$.$getAttr$("centerX")) {
    this.$_tmap$.$_initialCenterX$ = (0,window.parseFloat)($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$)
  }
  if($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = $childNodes$$29_xmlNode$$70$$.$getAttr$("centerY")) {
    this.$_tmap$.$_initialCenterY$ = (0,window.parseFloat)($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$)
  }
  if($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = $childNodes$$29_xmlNode$$70$$.$getAttr$("curZoom")) {
    this.$_tmap$.$_initialZoom$ = (0,window.parseFloat)($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$)
  }
  if(($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = $childNodes$$29_xmlNode$$70$$.$getAttr$("animationOnDrill")) && "alphaFade" == $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$) {
    this.$_tmap$.$_animationOnDrill$ = $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$
  }
  ($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = $childNodes$$29_xmlNode$$70$$.$getAttr$("drillMode")) && this.$_tmap$.$setDrillMode$($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$);
  if($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = $childNodes$$29_xmlNode$$70$$.$getAttr$("drillZoomToFit")) {
    this.$_tmap$.$_drillZoomToFit$ = "true" == $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$
  }
  $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = $childNodes$$29_xmlNode$$70$$.$getAttr$("initialZooming");
  "auto" == $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ && (this.$_tmap$.$_initialZooming$ = D.$JSCompiler_alias_TRUE$$);
  $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = $childNodes$$29_xmlNode$$70$$.$getAttr$("zooming");
  "none" == $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ && (this.$_tmap$.$_zooming$ = D.$JSCompiler_alias_FALSE$$);
  $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = $childNodes$$29_xmlNode$$70$$.$getAttr$("panning");
  "none" == $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ && (this.$_tmap$.$_panning$ = D.$JSCompiler_alias_FALSE$$);
  $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = (0,window.parseFloat)($childNodes$$29_xmlNode$$70$$.$getAttr$("maxZoom"));
  (0,window.isNaN)($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$) || (this.$_tmap$.$_maxZoomFactor$ = $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$);
  if($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = $childNodes$$29_xmlNode$$70$$.$getAttr$("markerZoomBehavior")) {
    this.$_tmap$.$_isMarkerZoomBehaviorFixed$ = "fixed" == $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$
  }
  (0,D.$JSCompiler_StaticMethods_parseComponentAttrs$$)(this.$_tmap$, $childNodes$$29_xmlNode$$70$$);
  $childNodes$$29_xmlNode$$70$$ = $childNodes$$29_xmlNode$$70$$.$getChildNodes$();
  for(var $attr$$5_baseMapName$$inline_4042_nodeName$$7$$, $JSCompiler_StaticMethods_setMapName$self$$inline_9982_i$$410$$ = 0;$JSCompiler_StaticMethods_setMapName$self$$inline_9982_i$$410$$ < $childNodes$$29_xmlNode$$70$$.length;$JSCompiler_StaticMethods_setMapName$self$$inline_9982_i$$410$$++) {
    if($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = $childNodes$$29_xmlNode$$70$$[$JSCompiler_StaticMethods_setMapName$self$$inline_9982_i$$410$$], $attr$$5_baseMapName$$inline_4042_nodeName$$7$$ = $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$.getName(), "mapHierarchy" == $attr$$5_baseMapName$$inline_4042_nodeName$$7$$) {
      $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$.$getChildNodes$();
      $attr$$5_baseMapName$$inline_4042_nodeName$$7$$ = this.$_tmap$.$_mapName$;
      for(var $children$$inline_10034_layerName$$inline_4043$$ = D.$JSCompiler_alias_VOID$$, $labelDisplay$$inline_4044_layer$$inline_4047$$ = D.$JSCompiler_alias_VOID$$, $clientId$$inline_4045_shapes$$inline_10028$$ = D.$JSCompiler_alias_VOID$$, $labelType$$inline_4046$$ = D.$JSCompiler_alias_VOID$$, $labelDisplay$$inline_4044_layer$$inline_4047$$ = D.$JSCompiler_alias_VOID$$, $i$$inline_4048$$ = 0;$i$$inline_4048$$ < $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$.length;$i$$inline_4048$$++) {
        var $animDur$$inline_4052_node$$inline_4049$$ = $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$[$i$$inline_4048$$];
        if("pointLayer" != $animDur$$inline_4052_node$$inline_4049$$.getName()) {
          var $children$$inline_10034_layerName$$inline_4043$$ = $animDur$$inline_4052_node$$inline_4049$$.$getAttr$("layerName"), $labelDisplay$$inline_4044_layer$$inline_4047$$ = $animDur$$inline_4052_node$$inline_4049$$.$getAttr$("labelDisplay"), $clientId$$inline_4045_shapes$$inline_10028$$ = $animDur$$inline_4052_node$$inline_4049$$.$getAttr$("clientId"), $labelType$$inline_4046$$ = $animDur$$inline_4052_node$$inline_4049$$.$getAttr$("labelType"), $areaNames$$inline_4051_attr$$inline_4050_values$$inline_10031$$ = 
          $animDur$$inline_4052_node$$inline_4049$$.$getAttr$("areaStyle");
          $areaNames$$inline_4051_attr$$inline_4050_values$$inline_10031$$ && this.$_areaLayerStyle$.$merge$(new D.$DvtCSSStyle$$($areaNames$$inline_4051_attr$$inline_4050_values$$inline_10031$$));
          ($areaNames$$inline_4051_attr$$inline_4050_values$$inline_10031$$ = $animDur$$inline_4052_node$$inline_4049$$.$getAttr$("labelStyle")) && this.$_areaLayerStyle$.$merge$(new D.$DvtCSSStyle$$($areaNames$$inline_4051_attr$$inline_4050_values$$inline_10031$$));
          this.$_isCustomBasemap$ ? $labelDisplay$$inline_4044_layer$$inline_4047$$ = new D.$DvtMapCustomAreaLayer$$(this.$_tmap$, $children$$inline_10034_layerName$$inline_4043$$, $clientId$$inline_4045_shapes$$inline_10028$$, $labelDisplay$$inline_4044_layer$$inline_4047$$, $labelType$$inline_4046$$, this.$_tmap$.$_eventHandler$) : ($labelDisplay$$inline_4044_layer$$inline_4047$$ = new D.$DvtMapAreaLayer$$(this.$_tmap$, $children$$inline_10034_layerName$$inline_4043$$, $clientId$$inline_4045_shapes$$inline_10028$$, 
          $labelDisplay$$inline_4044_layer$$inline_4047$$, $labelType$$inline_4046$$, this.$_tmap$.$_eventHandler$), $areaNames$$inline_4051_attr$$inline_4050_values$$inline_10031$$ = D.$DvtBaseMapManager$$.$getAreaNames$($attr$$5_baseMapName$$inline_4042_nodeName$$7$$, $children$$inline_10034_layerName$$inline_4043$$), $clientId$$inline_4045_shapes$$inline_10028$$ = this.$_createPathShapes$($areaNames$$inline_4051_attr$$inline_4050_values$$inline_10031$$), $labelDisplay$$inline_4044_layer$$inline_4047$$.$AreaShapes$ = 
          $clientId$$inline_4045_shapes$$inline_10028$$, (0,D.$JSCompiler_StaticMethods_setAreaNames$$)($labelDisplay$$inline_4044_layer$$inline_4047$$, $areaNames$$inline_4051_attr$$inline_4050_values$$inline_10031$$), $areaNames$$inline_4051_attr$$inline_4050_values$$inline_10031$$ = D.$DvtBaseMapManager$$.$getAreaLabelInfo$($attr$$5_baseMapName$$inline_4042_nodeName$$7$$, $children$$inline_10034_layerName$$inline_4043$$), $labelDisplay$$inline_4044_layer$$inline_4047$$.$_labelInfo$ = $areaNames$$inline_4051_attr$$inline_4050_values$$inline_10031$$, 
          $children$$inline_10034_layerName$$inline_4043$$ = D.$DvtBaseMapManager$$.$getChildrenForLayerAreas$(this.$_tmap$.$_mapName$, $children$$inline_10034_layerName$$inline_4043$$), $labelDisplay$$inline_4044_layer$$inline_4047$$.$_children$ = $children$$inline_10034_layerName$$inline_4043$$, $labelDisplay$$inline_4044_layer$$inline_4047$$.$_areaHoverStyle$ = this.$_areaHoverStyle$, $labelDisplay$$inline_4044_layer$$inline_4047$$.$_areaSelectStyle$ = this.$_areaSelectStyle$, $labelDisplay$$inline_4044_layer$$inline_4047$$.$_areaDiscloseStyle$ = 
          this.$_areaDiscloseStyle$);
          $labelDisplay$$inline_4044_layer$$inline_4047$$.$_layerCSSStyle$ = this.$_areaLayerStyle$;
          $labelDisplay$$inline_4044_layer$$inline_4047$$.$_dropSiteCSSStyle$ = this.$_areaDropSiteStyle$;
          if($areaNames$$inline_4051_attr$$inline_4050_values$$inline_10031$$ = $animDur$$inline_4052_node$$inline_4049$$.$getAttr$("animationOnLayerChange")) {
            ($animDur$$inline_4052_node$$inline_4049$$ = $animDur$$inline_4052_node$$inline_4049$$.$getAttr$("animationDuration")) && ($animDur$$inline_4052_node$$inline_4049$$ = (0,window.parseFloat)($animDur$$inline_4052_node$$inline_4049$$));
            if(!$animDur$$inline_4052_node$$inline_4049$$ || (0,window.isNaN)($animDur$$inline_4052_node$$inline_4049$$)) {
              $animDur$$inline_4052_node$$inline_4049$$ = 1
            }
            $labelDisplay$$inline_4044_layer$$inline_4047$$.$setAnimation$($areaNames$$inline_4051_attr$$inline_4050_values$$inline_10031$$);
            $labelDisplay$$inline_4044_layer$$inline_4047$$.$setAnimationDuration$($animDur$$inline_4052_node$$inline_4049$$)
          }
          $labelDisplay$$inline_4044_layer$$inline_4047$$ && this.$_tmap$.$_layers$.push($labelDisplay$$inline_4044_layer$$inline_4047$$)
        }
      }
    }else {
      if("regionLayer" == $attr$$5_baseMapName$$inline_4042_nodeName$$7$$) {
        if($attr$$5_baseMapName$$inline_4042_nodeName$$7$$ = $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$)) {
          this.$_areaLayerStyle$ = new D.$DvtCSSStyle$$($attr$$5_baseMapName$$inline_4042_nodeName$$7$$)
        }
        if($attr$$5_baseMapName$$inline_4042_nodeName$$7$$ = $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$.$getAttr$("hoverStyle")) {
          this.$_areaHoverStyle$ = new D.$DvtCSSStyle$$($attr$$5_baseMapName$$inline_4042_nodeName$$7$$)
        }
        if($attr$$5_baseMapName$$inline_4042_nodeName$$7$$ = $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$.$getAttr$("selectStyle")) {
          this.$_areaSelectStyle$ = new D.$DvtCSSStyle$$($attr$$5_baseMapName$$inline_4042_nodeName$$7$$)
        }
        if($attr$$5_baseMapName$$inline_4042_nodeName$$7$$ = $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$.$getAttr$("disclosedStyle")) {
          this.$_areaDiscloseStyle$ = new D.$DvtCSSStyle$$($attr$$5_baseMapName$$inline_4042_nodeName$$7$$)
        }
      }else {
        "markerStyle" == $attr$$5_baseMapName$$inline_4042_nodeName$$7$$ ? ($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$ = new D.$DvtCSSStyle$$($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$)), this.$_tmap$.$_markerStyle$ = $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$) : "basemap" == $attr$$5_baseMapName$$inline_4042_nodeName$$7$$ && 
        this.$_tmap$.$_mapName$ == "$" + $attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$.$getAttr$("id") && this.$ParseCustomBasemap$($attr$$inline_4037_attr$$inline_9983_layerNodes$$inline_4041_node$$216_style$$inline_4055$$)
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$ParseDataLayers$ = function $$JSCompiler_prototypeAlias$$$$ParseDataLayers$$($i$$411_legend$$27_xmlNode$$71$$, $pzcMatrix$$2$$, $topLayerName$$) {
  var $layers$$ = $i$$411_legend$$27_xmlNode$$71$$.getElementsByTagName("layer");
  $i$$411_legend$$27_xmlNode$$71$$ = $i$$411_legend$$27_xmlNode$$71$$.getElementsByTagName("legend");
  $pzcMatrix$$2$$ && ($i$$411_legend$$27_xmlNode$$71$$ && $i$$411_legend$$27_xmlNode$$71$$[0]) && this.$ParseLegend$($i$$411_legend$$27_xmlNode$$71$$[0]);
  for($i$$411_legend$$27_xmlNode$$71$$ = 0;$i$$411_legend$$27_xmlNode$$71$$ < $layers$$.length;$i$$411_legend$$27_xmlNode$$71$$++) {
    var $clientId$$5_dataLayer$$7$$ = $layers$$[$i$$411_legend$$27_xmlNode$$71$$].$getAttr$("clientId"), $id$$112$$ = $layers$$[$i$$411_legend$$27_xmlNode$$71$$].$getAttr$("id"), $layer_parentLayerName$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this.$_tmap$, $id$$112$$);
    $layer_parentLayerName$$ ? $layer_parentLayerName$$ instanceof D.$DvtMapAreaLayer$$ && (0,D.$JSCompiler_StaticMethods_resetRenderedAreas$$)($layer_parentLayerName$$) : ($layer_parentLayerName$$ = $layers$$[$i$$411_legend$$27_xmlNode$$71$$].$getAttr$("showWith")) ? $layer_parentLayerName$$ = (0,D.$JSCompiler_StaticMethods_getLayer$$)(this.$_tmap$, $layer_parentLayerName$$) : ($layer_parentLayerName$$ = new D.$DvtMapLayer$$(this.$_tmap$, this.$_tmap$.$_eventHandler$), this.$_tmap$.$_layers$.push($layer_parentLayerName$$));
    var $clientId$$5_dataLayer$$7$$ = new D.$DvtMapDataLayer$$(this.$_tmap$, $layer_parentLayerName$$, $clientId$$5_dataLayer$$7$$, this.$_tmap$.$_eventHandler$), $animOnDataChange_isolatedRowKey_selectionMode$$8$$ = $layers$$[$i$$411_legend$$27_xmlNode$$71$$].$getAttr$("selectionMode");
    "single" == $animOnDataChange_isolatedRowKey_selectionMode$$8$$ ? $clientId$$5_dataLayer$$7$$.$setSelectionMode$("s") : "multiple" == $animOnDataChange_isolatedRowKey_selectionMode$$8$$ && $clientId$$5_dataLayer$$7$$.$setSelectionMode$("m");
    if($animOnDataChange_isolatedRowKey_selectionMode$$8$$ = $layers$$[$i$$411_legend$$27_xmlNode$$71$$].$getAttr$("animationDataChange")) {
      var $animDur_initSelections$$ = $layers$$[$i$$411_legend$$27_xmlNode$$71$$].$getAttr$("animationDuration");
      $animDur_initSelections$$ && ($animDur_initSelections$$ = (0,window.parseFloat)($animDur_initSelections$$));
      if(!$animDur_initSelections$$ || (0,window.isNaN)($animDur_initSelections$$)) {
        $animDur_initSelections$$ = 1
      }
      $clientId$$5_dataLayer$$7$$.$setAnimation$($animOnDataChange_isolatedRowKey_selectionMode$$8$$);
      $clientId$$5_dataLayer$$7$$.$setAnimationDuration$($animDur_initSelections$$)
    }
    $animOnDataChange_isolatedRowKey_selectionMode$$8$$ = D.$JSCompiler_alias_NULL$$;
    $layer_parentLayerName$$ instanceof D.$DvtMapAreaLayer$$ && ($animOnDataChange_isolatedRowKey_selectionMode$$8$$ = $layers$$[$i$$411_legend$$27_xmlNode$$71$$].$getAttr$("isolatedRowKey"));
    for(var $animDur_initSelections$$ = [], $initDrilled$$ = [], $styles$$15$$ = this.$_parseStyles$($layers$$[$i$$411_legend$$27_xmlNode$$71$$].getElementsByTagName("styles")), $data$$81$$ = $layers$$[$i$$411_legend$$27_xmlNode$$71$$].getElementsByTagName("row"), $spb$$5$$ = this.$_parseShowPopupBehavior$($layers$$[$i$$411_legend$$27_xmlNode$$71$$], $styles$$15$$), $j$$76$$ = 0;$j$$76$$ < $data$$81$$.length;$j$$76$$++) {
      var $JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$ = $data$$81$$[$j$$76$$].$getAttr$("styleId"), $dataObj$$2_layerName$$inline_4063_obj$$inline_4094$$;
      a: {
        var $displayTooltips$$inline_4089_layer$$inline_4061_preDatatip$$inline_4091_textStyle$$inline_4088$$ = $layer_parentLayerName$$, $cssTextStyle$$inline_4087_dataLayer$$inline_4062_labelPosition$$inline_4086$$ = $clientId$$5_dataLayer$$7$$;
        $dataObj$$2_layerName$$inline_4063_obj$$inline_4094$$ = $id$$112$$;
        var $datatip$$inline_4090_node$$inline_4064$$ = $data$$81$$[$j$$76$$], $context$$inline_10059_dataObj$$inline_10075_displayable$$inline_4075_style$$inline_4065$$ = $styles$$15$$[$JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$], $initSelections$$inline_4066_labelText$$inline_4082$$ = $animDur_initSelections$$, $initDrilled$$inline_4067_labelDisplay$$inline_4083$$ = $initDrilled$$, $action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$ = 
        $animOnDataChange_isolatedRowKey_selectionMode$$8$$, $context$$inline_4069$$ = this.$_tmap$.$_context$, $id$$inline_4070_labelInfo$$inline_4084$$ = $datatip$$inline_4090_node$$inline_4064$$.$getAttr$("rowKey"), $center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$ = $datatip$$inline_4090_node$$inline_4064$$.$getAttr$("clientId"), $JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$ = $datatip$$inline_4090_node$$inline_4064$$.$getAttr$("id"), 
        $dataObj$$inline_4073$$ = D.$JSCompiler_alias_VOID$$, $styleType$$inline_4074$$ = $context$$inline_10059_dataObj$$inline_10075_displayable$$inline_4075_style$$inline_4065$$.getName();
        if("colorStyles" == $styleType$$inline_4074$$) {
          if($action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$) {
            if($action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$ != $id$$inline_4070_labelInfo$$inline_4084$$) {
              $dataObj$$2_layerName$$inline_4063_obj$$inline_4094$$ = D.$JSCompiler_alias_NULL$$;
              break a
            }
            this.$_isolatedArea$ = $JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$
          }
          $displayTooltips$$inline_4089_layer$$inline_4061_preDatatip$$inline_4091_textStyle$$inline_4088$$.$_renderArea$[$JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$] = D.$JSCompiler_alias_FALSE$$;
          $dataObj$$inline_4073$$ = new D.$DvtMapDataArea$$($context$$inline_4069$$, $cssTextStyle$$inline_4087_dataLayer$$inline_4062_labelPosition$$inline_4086$$, $id$$inline_4070_labelInfo$$inline_4084$$, $center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$);
          this.$_parseMapArea$($context$$inline_4069$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$, $displayTooltips$$inline_4089_layer$$inline_4061_preDatatip$$inline_4091_textStyle$$inline_4088$$, $datatip$$inline_4090_node$$inline_4064$$, $dataObj$$inline_4073$$)
        }else {
          if("graduatedSymbol" == $styleType$$inline_4074$$) {
            $dataObj$$inline_4073$$ = new D.$DvtMapDataMarker$$($context$$inline_4069$$, $cssTextStyle$$inline_4087_dataLayer$$inline_4062_labelPosition$$inline_4086$$, $id$$inline_4070_labelInfo$$inline_4084$$, $center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$), this.$_parseMapMarker$($context$$inline_4069$$, $context$$inline_10059_dataObj$$inline_10075_displayable$$inline_4075_style$$inline_4065$$, 
            $dataObj$$2_layerName$$inline_4063_obj$$inline_4094$$, $datatip$$inline_4090_node$$inline_4064$$, $dataObj$$inline_4073$$)
          }else {
            if("image" == $styleType$$inline_4074$$) {
              var $dataObj$$inline_4073$$ = new D.$DvtMapDataImage$$($context$$inline_4069$$, $cssTextStyle$$inline_4087_dataLayer$$inline_4062_labelPosition$$inline_4086$$, $id$$inline_4070_labelInfo$$inline_4084$$, $center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$), $context$$inline_10059_dataObj$$inline_10075_displayable$$inline_4075_style$$inline_4065$$ = 
              $context$$inline_4069$$, $center$$inline_10065_cssStyle$$inline_10081_gaugeType$$inline_10076_height$$inline_10079_layerName$$inline_10060$$ = $dataObj$$2_layerName$$inline_4063_obj$$inline_4094$$, $cssStyle$$inline_10069_inlineStyle$$inline_10068_node$$inline_10061$$ = $datatip$$inline_4090_node$$inline_4064$$, $action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$ = 
              $dataObj$$inline_4073$$, $center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$ = $cssStyle$$inline_10069_inlineStyle$$inline_10068_node$$inline_10061$$.$getAttr$("url"), $context$$inline_10072_image$$inline_10064_inlineStyle$$inline_10080_width$$inline_10078$$ = D.$JSCompiler_alias_NULL$$;
              if($center$$inline_10065_cssStyle$$inline_10081_gaugeType$$inline_10076_height$$inline_10079_layerName$$inline_10060$$ = (0,D.$JSCompiler_StaticMethods__parseCenter$$)(this, $center$$inline_10065_cssStyle$$inline_10081_gaugeType$$inline_10076_height$$inline_10079_layerName$$inline_10060$$, $cssStyle$$inline_10069_inlineStyle$$inline_10068_node$$inline_10061$$, "cities" != $center$$inline_10065_cssStyle$$inline_10081_gaugeType$$inline_10076_height$$inline_10079_layerName$$inline_10060$$)) {
                $context$$inline_10072_image$$inline_10064_inlineStyle$$inline_10080_width$$inline_10078$$ = new D.$DvtImage$$($context$$inline_10059_dataObj$$inline_10075_displayable$$inline_4075_style$$inline_4065$$, $center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$);
                $action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$.$setCenter$($center$$inline_10065_cssStyle$$inline_10081_gaugeType$$inline_10076_height$$inline_10079_layerName$$inline_10060$$);
                $action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$.$setDisplayable$($context$$inline_10072_image$$inline_10064_inlineStyle$$inline_10080_width$$inline_10078$$);
                var $width$$inline_10066$$ = D.$JSCompiler_alias_VOID$$, $height$$inline_10067$$ = D.$JSCompiler_alias_VOID$$;
                if($cssStyle$$inline_10069_inlineStyle$$inline_10068_node$$inline_10061$$ = $cssStyle$$inline_10069_inlineStyle$$inline_10068_node$$inline_10061$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$)) {
                  $cssStyle$$inline_10069_inlineStyle$$inline_10068_node$$inline_10061$$ = new D.$DvtCSSStyle$$($cssStyle$$inline_10069_inlineStyle$$inline_10068_node$$inline_10061$$), ($width$$inline_10066$$ = $cssStyle$$inline_10069_inlineStyle$$inline_10068_node$$inline_10061$$.$getStyle$("width").substring(0, $cssStyle$$inline_10069_inlineStyle$$inline_10068_node$$inline_10061$$.$getStyle$("width").indexOf("px"))) && $context$$inline_10072_image$$inline_10064_inlineStyle$$inline_10080_width$$inline_10078$$.$setWidth$($width$$inline_10066$$), 
                  ($height$$inline_10067$$ = $cssStyle$$inline_10069_inlineStyle$$inline_10068_node$$inline_10061$$.$getStyle$("height").substring(0, $cssStyle$$inline_10069_inlineStyle$$inline_10068_node$$inline_10061$$.$getStyle$("height").indexOf("px"))) && $context$$inline_10072_image$$inline_10064_inlineStyle$$inline_10080_width$$inline_10078$$.$setHeight$($height$$inline_10067$$), $width$$inline_10066$$ != D.$JSCompiler_alias_NULL$$ && $height$$inline_10067$$ != D.$JSCompiler_alias_NULL$$ && 
                  ($context$$inline_10072_image$$inline_10064_inlineStyle$$inline_10080_width$$inline_10078$$.$setX$($center$$inline_10065_cssStyle$$inline_10081_gaugeType$$inline_10076_height$$inline_10079_layerName$$inline_10060$$.x - $width$$inline_10066$$ / 2), $context$$inline_10072_image$$inline_10064_inlineStyle$$inline_10080_width$$inline_10078$$.$setY$($center$$inline_10065_cssStyle$$inline_10081_gaugeType$$inline_10076_height$$inline_10079_layerName$$inline_10060$$.y - $height$$inline_10067$$ / 
                  2), $action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$.$setSize$($width$$inline_10066$$ * $height$$inline_10067$$))
                }
                (!$width$$inline_10066$$ || !$height$$inline_10067$$) && D.$DvtImageLoader$$.$loadImage$($context$$inline_10059_dataObj$$inline_10075_displayable$$inline_4075_style$$inline_4065$$, $center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$, D.$DvtObj$$.$createCallback$($action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$, 
                $action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$.$onImageLoaded$))
              }
            }else {
              if($dataObj$$inline_4073$$ = new D.$DvtMapDataComponent$$($context$$inline_4069$$, $cssTextStyle$$inline_4087_dataLayer$$inline_4062_labelPosition$$inline_4086$$, $id$$inline_4070_labelInfo$$inline_4084$$, $center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$), $context$$inline_10072_image$$inline_10064_inlineStyle$$inline_10080_width$$inline_10078$$ = 
              $context$$inline_4069$$, $action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$ = $datatip$$inline_4090_node$$inline_4064$$, $context$$inline_10059_dataObj$$inline_10075_displayable$$inline_4075_style$$inline_4065$$ = $dataObj$$inline_4073$$, $center$$inline_10065_cssStyle$$inline_10081_gaugeType$$inline_10076_height$$inline_10079_layerName$$inline_10060$$ = 
              $styleType$$inline_4074$$, $center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$ = (0,D.$JSCompiler_StaticMethods__parseCenter$$)(this, $dataObj$$2_layerName$$inline_4063_obj$$inline_4094$$, $action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$, "cities" != $dataObj$$2_layerName$$inline_4063_obj$$inline_4094$$)) {
                "statusMeterGauge" == $center$$inline_10065_cssStyle$$inline_10081_gaugeType$$inline_10076_height$$inline_10079_layerName$$inline_10060$$ ? window.gauge = (0,D.$DvtStatusMeterGauge$newInstance$$)($context$$inline_10072_image$$inline_10064_inlineStyle$$inline_10080_width$$inline_10078$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$) : "ledGauge" == $center$$inline_10065_cssStyle$$inline_10081_gaugeType$$inline_10076_height$$inline_10079_layerName$$inline_10060$$ ? window.gauge = 
                (0,D.$DvtLedGauge$newInstance$$)($context$$inline_10072_image$$inline_10064_inlineStyle$$inline_10080_width$$inline_10078$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$) : "dialGauge" == $center$$inline_10065_cssStyle$$inline_10081_gaugeType$$inline_10076_height$$inline_10079_layerName$$inline_10060$$ ? window.gauge = (0,D.$DvtDialGauge$newInstance$$)($context$$inline_10072_image$$inline_10064_inlineStyle$$inline_10080_width$$inline_10078$$, D.$JSCompiler_alias_NULL$$, 
                D.$JSCompiler_alias_NULL$$) : "ratingGauge" == $center$$inline_10065_cssStyle$$inline_10081_gaugeType$$inline_10076_height$$inline_10079_layerName$$inline_10060$$ && (window.gauge = (0,D.$DvtRatingGauge$newInstance$$)($context$$inline_10072_image$$inline_10064_inlineStyle$$inline_10080_width$$inline_10078$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$));
                $context$$inline_10059_dataObj$$inline_10075_displayable$$inline_4075_style$$inline_4065$$.$setCenter$($center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$);
                $context$$inline_10059_dataObj$$inline_10075_displayable$$inline_4075_style$$inline_4065$$.$setDisplayable$(window.gauge);
                $center$$inline_10065_cssStyle$$inline_10081_gaugeType$$inline_10076_height$$inline_10079_layerName$$inline_10060$$ = $context$$inline_10072_image$$inline_10064_inlineStyle$$inline_10080_width$$inline_10078$$ = D.$JSCompiler_alias_VOID$$;
                if($context$$inline_10072_image$$inline_10064_inlineStyle$$inline_10080_width$$inline_10078$$ = $action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$)) {
                  $center$$inline_10065_cssStyle$$inline_10081_gaugeType$$inline_10076_height$$inline_10079_layerName$$inline_10060$$ = new D.$DvtCSSStyle$$($context$$inline_10072_image$$inline_10064_inlineStyle$$inline_10080_width$$inline_10078$$), $context$$inline_10072_image$$inline_10064_inlineStyle$$inline_10080_width$$inline_10078$$ = $center$$inline_10065_cssStyle$$inline_10081_gaugeType$$inline_10076_height$$inline_10079_layerName$$inline_10060$$.width ? (0,window.parseInt)($center$$inline_10065_cssStyle$$inline_10081_gaugeType$$inline_10076_height$$inline_10079_layerName$$inline_10060$$.width.substring(0, 
                  $center$$inline_10065_cssStyle$$inline_10081_gaugeType$$inline_10076_height$$inline_10079_layerName$$inline_10060$$.width.indexOf("px"))) : 50, $context$$inline_10059_dataObj$$inline_10075_displayable$$inline_4075_style$$inline_4065$$.$setWidth$($context$$inline_10072_image$$inline_10064_inlineStyle$$inline_10080_width$$inline_10078$$), $center$$inline_10065_cssStyle$$inline_10081_gaugeType$$inline_10076_height$$inline_10079_layerName$$inline_10060$$ = $center$$inline_10065_cssStyle$$inline_10081_gaugeType$$inline_10076_height$$inline_10079_layerName$$inline_10060$$.height ? 
                  (0,window.parseInt)($center$$inline_10065_cssStyle$$inline_10081_gaugeType$$inline_10076_height$$inline_10079_layerName$$inline_10060$$.height.substring(0, $center$$inline_10065_cssStyle$$inline_10081_gaugeType$$inline_10076_height$$inline_10079_layerName$$inline_10060$$.height.indexOf("px"))) : 50, $context$$inline_10059_dataObj$$inline_10075_displayable$$inline_4075_style$$inline_4065$$.$setHeight$($center$$inline_10065_cssStyle$$inline_10081_gaugeType$$inline_10076_height$$inline_10079_layerName$$inline_10060$$), 
                  $context$$inline_10059_dataObj$$inline_10075_displayable$$inline_4075_style$$inline_4065$$.$setX$($center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$.x - $context$$inline_10072_image$$inline_10064_inlineStyle$$inline_10080_width$$inline_10078$$ / 2), $context$$inline_10059_dataObj$$inline_10075_displayable$$inline_4075_style$$inline_4065$$.$setY$($center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$.y - 
                  $center$$inline_10065_cssStyle$$inline_10081_gaugeType$$inline_10076_height$$inline_10079_layerName$$inline_10060$$ / 2)
                }
                if($action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$ = $action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$.$getAttr$("json")) {
                  $context$$inline_10059_dataObj$$inline_10075_displayable$$inline_4075_style$$inline_4065$$.$_json$ = $action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$
                }
              }
            }
          }
        }
        if($context$$inline_10059_dataObj$$inline_10075_displayable$$inline_4075_style$$inline_4065$$ = $dataObj$$inline_4073$$.$getDisplayable$()) {
          if($action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$ = (0,window.parseInt)($datatip$$inline_4090_node$$inline_4064$$.$getAttr$("rotation"))) {
            $action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$ = $action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$ * window.Math.PI / 180, $context$$inline_10059_dataObj$$inline_10075_displayable$$inline_4075_style$$inline_4065$$.$setRotation$($action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$), 
            $center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$ = $dataObj$$inline_4073$$.$getCenter$(), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($context$$inline_10059_dataObj$$inline_10075_displayable$$inline_4075_style$$inline_4065$$, $center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$.x - ($center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$.x * 
            window.Math.cos($action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$) - $center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$.y * window.Math.sin($action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$)), 
            $center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$.y - ($center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$.x * window.Math.sin($action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$) + $center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$.y * 
            window.Math.cos($action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$)))
          }
          $JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$ && $displayTooltips$$inline_4089_layer$$inline_4061_preDatatip$$inline_4091_textStyle$$inline_4088$$ instanceof D.$DvtMapAreaLayer$$ && ($displayTooltips$$inline_4089_layer$$inline_4061_preDatatip$$inline_4091_textStyle$$inline_4088$$.$_renderLabel$[$JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$] = D.$JSCompiler_alias_FALSE$$);
          $action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$ = "true" == $datatip$$inline_4090_node$$inline_4064$$.$getAttr$("hasAction");
          if($dataObj$$inline_4073$$.$_hasAction$ = $action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$) {
            $action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$ = $datatip$$inline_4090_node$$inline_4064$$.$getAttr$("action"), $dataObj$$inline_4073$$.$_action$ = $action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$
          }
          if($action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$ = $datatip$$inline_4090_node$$inline_4064$$.$getAttr$("destination")) {
            $center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$ = [], $center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$.destination = $action$$inline_10092_dataObj$$inline_10062_destination$$inline_4080_hasAction$$inline_4079_isolatedRowKey$$inline_4068_json$$inline_10082_node$$inline_10074_radianRot$$inline_4077_rotation$$inline_4076$$, $center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$.targetFrame = 
            "_blank", $center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$.focusable = D.$JSCompiler_alias_TRUE$$, (0,D.$JSCompiler_StaticMethods_setHyperlink$$)($context$$inline_10059_dataObj$$inline_10075_displayable$$inline_4075_style$$inline_4065$$, $center$$inline_10077_center$$inline_4078_clientId$$inline_4071_linkObj$$inline_4081_source$$inline_10063$$)
          }
          "true" == $datatip$$inline_4090_node$$inline_4064$$.$getAttr$("selected") && $initSelections$$inline_4066_labelText$$inline_4082$$.push($id$$inline_4070_labelInfo$$inline_4084$$);
          "true" == $datatip$$inline_4090_node$$inline_4064$$.$getAttr$("drilled") && ($initDrilled$$inline_4067_labelDisplay$$inline_4083$$.push($datatip$$inline_4090_node$$inline_4064$$.$getAttr$("id")), this.$_tmap$.$_drilledRowKeys$.push($id$$inline_4070_labelInfo$$inline_4084$$));
          $initSelections$$inline_4066_labelText$$inline_4082$$ = $datatip$$inline_4090_node$$inline_4064$$.$getAttr$("label");
          $initDrilled$$inline_4067_labelDisplay$$inline_4083$$ = "off";
          $initSelections$$inline_4066_labelText$$inline_4082$$ ? $initDrilled$$inline_4067_labelDisplay$$inline_4083$$ = "on" : "colorStyles" == $styleType$$inline_4074$$ && ($initDrilled$$inline_4067_labelDisplay$$inline_4083$$ = $displayTooltips$$inline_4089_layer$$inline_4061_preDatatip$$inline_4091_textStyle$$inline_4088$$.$getLabelDisplay$());
          !$initSelections$$inline_4066_labelText$$inline_4082$$ && ($JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$ && "off" != $initDrilled$$inline_4067_labelDisplay$$inline_4083$$) && ($initSelections$$inline_4066_labelText$$inline_4082$$ = "long" == $displayTooltips$$inline_4089_layer$$inline_4061_preDatatip$$inline_4091_textStyle$$inline_4088$$.$_labelType$ ? $displayTooltips$$inline_4089_layer$$inline_4061_preDatatip$$inline_4091_textStyle$$inline_4088$$.$AreaNames$[$JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$][1] : 
          $displayTooltips$$inline_4089_layer$$inline_4061_preDatatip$$inline_4091_textStyle$$inline_4088$$.$AreaNames$[$JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$][0]);
          if($initSelections$$inline_4066_labelText$$inline_4082$$) {
            $id$$inline_4070_labelInfo$$inline_4084$$ = D.$JSCompiler_alias_VOID$$;
            $displayTooltips$$inline_4089_layer$$inline_4061_preDatatip$$inline_4091_textStyle$$inline_4088$$.$getLabelInfoForArea$ && ($id$$inline_4070_labelInfo$$inline_4084$$ = $displayTooltips$$inline_4089_layer$$inline_4061_preDatatip$$inline_4091_textStyle$$inline_4088$$.$getLabelInfoForArea$($JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$));
            var $label$$inline_4085$$ = D.$JSCompiler_alias_VOID$$, $label$$inline_4085$$ = $id$$inline_4070_labelInfo$$inline_4084$$ ? new D.$DvtMapLabel$$($context$$inline_4069$$, $initSelections$$inline_4066_labelText$$inline_4082$$, $id$$inline_4070_labelInfo$$inline_4084$$, $initDrilled$$inline_4067_labelDisplay$$inline_4083$$, $cssTextStyle$$inline_4087_dataLayer$$inline_4062_labelPosition$$inline_4086$$.$_dataLabelLayer$, this.$_tmap$.$_bSupportsVectorEffects$) : "colorStyles" != $styleType$$inline_4074$$ ? 
            new D.$DvtOutputText$$($context$$inline_4069$$, $initSelections$$inline_4066_labelText$$inline_4082$$, 0, 0) : new D.$DvtMapLabel$$($context$$inline_4069$$, $initSelections$$inline_4066_labelText$$inline_4082$$, D.$JSCompiler_alias_NULL$$, $initDrilled$$inline_4067_labelDisplay$$inline_4083$$, $cssTextStyle$$inline_4087_dataLayer$$inline_4062_labelPosition$$inline_4086$$.$_dataLabelLayer$, this.$_tmap$.$_bSupportsVectorEffects$);
            ($cssTextStyle$$inline_4087_dataLayer$$inline_4062_labelPosition$$inline_4086$$ = $datatip$$inline_4090_node$$inline_4064$$.$getAttr$("labelPosition")) && $dataObj$$inline_4073$$.$setLabelPosition$($cssTextStyle$$inline_4087_dataLayer$$inline_4062_labelPosition$$inline_4086$$);
            $cssTextStyle$$inline_4087_dataLayer$$inline_4062_labelPosition$$inline_4086$$ = new D.$DvtCSSStyle$$;
            "colorStyles" == $styleType$$inline_4074$$ ? $cssTextStyle$$inline_4087_dataLayer$$inline_4062_labelPosition$$inline_4086$$.$merge$($displayTooltips$$inline_4089_layer$$inline_4061_preDatatip$$inline_4091_textStyle$$inline_4088$$.$_layerCSSStyle$) : "graduatedSymbol" == $styleType$$inline_4074$$ && $cssTextStyle$$inline_4087_dataLayer$$inline_4062_labelPosition$$inline_4086$$.$merge$(this.$_tmap$.$_markerStyle$);
            ($displayTooltips$$inline_4089_layer$$inline_4061_preDatatip$$inline_4091_textStyle$$inline_4088$$ = $datatip$$inline_4090_node$$inline_4064$$.$getAttr$("labelStyle")) && $cssTextStyle$$inline_4087_dataLayer$$inline_4062_labelPosition$$inline_4086$$.$merge$(new D.$DvtCSSStyle$$($displayTooltips$$inline_4089_layer$$inline_4061_preDatatip$$inline_4091_textStyle$$inline_4088$$));
            $label$$inline_4085$$ instanceof D.$DvtMapLabel$$ && ($cssTextStyle$$inline_4087_dataLayer$$inline_4062_labelPosition$$inline_4086$$.$getStyle$("color") || $cssTextStyle$$inline_4087_dataLayer$$inline_4062_labelPosition$$inline_4086$$.$setStyle$("color", D.$DvtColorUtils$$.$getContrastingTextColor$($dataObj$$inline_4073$$.$getDatatipColor$())));
            $label$$inline_4085$$.$setCSSStyle$($cssTextStyle$$inline_4087_dataLayer$$inline_4062_labelPosition$$inline_4086$$)
          }
          $dataObj$$inline_4073$$.$setLabel$($label$$inline_4085$$);
          $displayTooltips$$inline_4089_layer$$inline_4061_preDatatip$$inline_4091_textStyle$$inline_4088$$ = this.$_tmap$.$_displayTooltips$;
          "none" != $displayTooltips$$inline_4089_layer$$inline_4061_preDatatip$$inline_4091_textStyle$$inline_4088$$ && ($datatip$$inline_4090_node$$inline_4064$$ = $datatip$$inline_4090_node$$inline_4064$$.$getAttr$("shortDesc"), "auto" == $displayTooltips$$inline_4089_layer$$inline_4061_preDatatip$$inline_4091_textStyle$$inline_4088$$ && ($displayTooltips$$inline_4089_layer$$inline_4061_preDatatip$$inline_4091_textStyle$$inline_4088$$ = D.$JSCompiler_alias_VOID$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$ && 
          ($displayTooltips$$inline_4089_layer$$inline_4061_preDatatip$$inline_4091_textStyle$$inline_4088$$ = "cities" == $dataObj$$2_layerName$$inline_4063_obj$$inline_4094$$ || this.$_isCustomBasemap$ ? D.$DvtBaseMapManager$$.$getCityLabel$(this.$_tmap$.$_mapName$, $JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$) : D.$DvtBaseMapManager$$.$getLongAreaLabel$(this.$_tmap$.$_mapName$, $dataObj$$2_layerName$$inline_4063_obj$$inline_4094$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$)), 
          $displayTooltips$$inline_4089_layer$$inline_4061_preDatatip$$inline_4091_textStyle$$inline_4088$$ && ($datatip$$inline_4090_node$$inline_4064$$ = $datatip$$inline_4090_node$$inline_4064$$ ? $displayTooltips$$inline_4089_layer$$inline_4061_preDatatip$$inline_4091_textStyle$$inline_4088$$ + ": " + $datatip$$inline_4090_node$$inline_4064$$ : $displayTooltips$$inline_4089_layer$$inline_4061_preDatatip$$inline_4091_textStyle$$inline_4088$$)), $datatip$$inline_4090_node$$inline_4064$$ && $dataObj$$inline_4073$$.$setDatatip$($datatip$$inline_4090_node$$inline_4064$$));
          $dataObj$$2_layerName$$inline_4063_obj$$inline_4094$$ = $dataObj$$inline_4073$$
        }else {
          $dataObj$$2_layerName$$inline_4063_obj$$inline_4094$$ = D.$JSCompiler_alias_NULL$$
        }
      }
      $dataObj$$2_layerName$$inline_4063_obj$$inline_4094$$ && ($JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$ = $dataObj$$2_layerName$$inline_4063_obj$$inline_4094$$.$getDisplayable$(), $JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$.$setSelectable$ && $JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$.$setSelectable$($clientId$$5_dataLayer$$7$$.$isSelectable$() && 
      !($dataObj$$2_layerName$$inline_4063_obj$$inline_4094$$ instanceof D.$DvtMapDataImage$$)), 0 < $spb$$5$$.length && $dataObj$$2_layerName$$inline_4063_obj$$inline_4094$$.$setShowPopupBehaviors$($spb$$5$$), $dataObj$$2_layerName$$inline_4063_obj$$inline_4094$$ instanceof D.$DvtMapDataArea$$ ? (0,D.$JSCompiler_StaticMethods_addAreaObject$$)($clientId$$5_dataLayer$$7$$, $dataObj$$2_layerName$$inline_4063_obj$$inline_4094$$) : ($JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$ = 
      $clientId$$5_dataLayer$$7$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$.$_dataObjs$.push($dataObj$$2_layerName$$inline_4063_obj$$inline_4094$$), $JSCompiler_StaticMethods_addDataObject$self$$inline_4093_areaId$$inline_4072_displayable$$38_styleId$$.$_eventHandler$.$associate$($dataObj$$2_layerName$$inline_4063_obj$$inline_4094$$.$getDisplayable$(), $dataObj$$2_layerName$$inline_4063_obj$$inline_4094$$)))
    }
    $animOnDataChange_isolatedRowKey_selectionMode$$8$$ && this.$_isolatedArea$ && ($clientId$$5_dataLayer$$7$$.$_isolatedAreaRowKey$ = $animOnDataChange_isolatedRowKey_selectionMode$$8$$, (0,D.$JSCompiler_StaticMethods_setIsolatedArea$$)($layer_parentLayerName$$, this.$_isolatedArea$));
    $clientId$$5_dataLayer$$7$$.$isSelectable$() && 0 < $animDur_initSelections$$.length && ($clientId$$5_dataLayer$$7$$.$_initSelections$ = $animDur_initSelections$$);
    0 < $initDrilled$$.length && (this.$_tmap$.$_initDrilled$[$layer_parentLayerName$$.$LayerName$] = [$clientId$$5_dataLayer$$7$$.$getClientId$(), $initDrilled$$]);
    $pzcMatrix$$2$$ || $layer_parentLayerName$$.$getDataLayer$($clientId$$5_dataLayer$$7$$.$getClientId$()) ? $layer_parentLayerName$$.$updateDataLayer$($clientId$$5_dataLayer$$7$$, $pzcMatrix$$2$$, $topLayerName$$) : $layer_parentLayerName$$.$DataLayers$[$clientId$$5_dataLayer$$7$$.$getClientId$()] = $clientId$$5_dataLayer$$7$$
  }
};
D.$JSCompiler_prototypeAlias$$.$ParseLegend$ = function $$JSCompiler_prototypeAlias$$$$ParseLegend$$($xmlNode$$72$$) {
  this.$_tmap$.$_legendXml$ = $xmlNode$$72$$
};
D.$JSCompiler_prototypeAlias$$.$ParseCustomBasemap$ = function $$JSCompiler_prototypeAlias$$$$ParseCustomBasemap$$($childNodes$$30_xmlNode$$74$$) {
  $childNodes$$30_xmlNode$$74$$ = $childNodes$$30_xmlNode$$74$$.$getChildNodes$();
  for(var $node$$218$$, $nodeName$$9$$, $i$$413$$ = 0;$i$$413$$ < $childNodes$$30_xmlNode$$74$$.length;$i$$413$$++) {
    $node$$218$$ = $childNodes$$30_xmlNode$$74$$[$i$$413$$], $nodeName$$9$$ = $node$$218$$.getName(), "layer" == $nodeName$$9$$ ? this.$_parseCustomLayer$($node$$218$$) : "points" == $nodeName$$9$$ && this.$_parseCustomPoints$($node$$218$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_parseCustomLayer$ = function $$JSCompiler_prototypeAlias$$$$_parseCustomLayer$$($layerName$$3_xmlNode$$75$$) {
  var $childNodes$$31$$ = $layerName$$3_xmlNode$$75$$.$getChildNodes$();
  $layerName$$3_xmlNode$$75$$ = $layerName$$3_xmlNode$$75$$.$getAttr$("id");
  for(var $dir$$1_node$$219$$, $image$$6_nodeName$$10$$, $images$$12$$ = [], $i$$414$$ = 0;$i$$414$$ < $childNodes$$31$$.length;$i$$414$$++) {
    if($dir$$1_node$$219$$ = $childNodes$$31$$[$i$$414$$], $image$$6_nodeName$$10$$ = $dir$$1_node$$219$$.getName(), "image" == $image$$6_nodeName$$10$$) {
      $image$$6_nodeName$$10$$ = {};
      $image$$6_nodeName$$10$$.source = $dir$$1_node$$219$$.$getAttr$("source");
      $image$$6_nodeName$$10$$.width = $dir$$1_node$$219$$.$getAttr$("width");
      $image$$6_nodeName$$10$$.height = $dir$$1_node$$219$$.$getAttr$("height");
      var $bidi$$1$$ = $dir$$1_node$$219$$.$getAttr$("bidi");
      $dir$$1_node$$219$$ = $dir$$1_node$$219$$.$getAttr$("dir");
      $image$$6_nodeName$$10$$.dir = "true" == $bidi$$1$$ || "rtl" == $dir$$1_node$$219$$ ? "rtl" : "ltr";
      $images$$12$$.push($image$$6_nodeName$$10$$)
    }
  }
  (0,D.$JSCompiler_StaticMethods_setAreaLayerImage$$)((0,D.$JSCompiler_StaticMethods_getLayer$$)(this.$_tmap$, $layerName$$3_xmlNode$$75$$), $images$$12$$)
};
D.$JSCompiler_prototypeAlias$$.$_parseCustomPoints$ = function $$JSCompiler_prototypeAlias$$$$_parseCustomPoints$$($childNodes$$32_xmlNode$$76$$) {
  $childNodes$$32_xmlNode$$76$$ = $childNodes$$32_xmlNode$$76$$.$getChildNodes$();
  for(var $node$$220$$, $nodeName$$11$$, $points$$40$$ = {}, $labels$$15$$ = {}, $i$$415$$ = 0;$i$$415$$ < $childNodes$$32_xmlNode$$76$$.length;$i$$415$$++) {
    $node$$220$$ = $childNodes$$32_xmlNode$$76$$[$i$$415$$], $nodeName$$11$$ = $node$$220$$.getName(), "point" == $nodeName$$11$$ && ($points$$40$$[$node$$220$$.$getAttr$("name")] = [$node$$220$$.$getAttr$("x"), $node$$220$$.$getAttr$("y")], $labels$$15$$[$node$$220$$.$getAttr$("name")] = [D.$JSCompiler_alias_NULL$$, $node$$220$$.$getAttr$("longLabel")])
  }
  D.$DvtBaseMapManager$$.$registerBaseMapLayer$(this.$_tmap$.$_mapName$, "cities", $labels$$15$$, $points$$40$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$_createPathShapes$ = function $$JSCompiler_prototypeAlias$$$$_createPathShapes$$($areaNames$$1$$) {
  var $shapes$$6$$ = {}, $context$$196$$ = this.$_tmap$.$_context$, $area$$6$$;
  for($area$$6$$ in $areaNames$$1$$) {
    $shapes$$6$$[$area$$6$$] = new D.$DvtPath$$($context$$196$$), (0,D.$JSCompiler_StaticMethods__parseDataObjectFill$$)(this, "colorStyles", this.$_areaLayerStyle$, $shapes$$6$$[$area$$6$$])
  }
  return $shapes$$6$$
};
D.$JSCompiler_prototypeAlias$$.$_parseStyles$ = function $$JSCompiler_prototypeAlias$$$$_parseStyles$$($node$$221_styleNodes$$) {
  var $styles$$16$$ = {};
  if($node$$221_styleNodes$$ && 0 < $node$$221_styleNodes$$.length) {
    $node$$221_styleNodes$$ = $node$$221_styleNodes$$[0].$getChildNodes$();
    for(var $i$$416$$ = 0;$i$$416$$ < $node$$221_styleNodes$$.length;$i$$416$$++) {
      var $styleId$$1$$ = $node$$221_styleNodes$$[$i$$416$$].$getAttr$("id");
      $styles$$16$$[$styleId$$1$$] = $node$$221_styleNodes$$[$i$$416$$]
    }
  }
  return $styles$$16$$
};
D.$JSCompiler_prototypeAlias$$.$_parseShowPopupBehavior$ = function $$JSCompiler_prototypeAlias$$$$_parseShowPopupBehavior$$($node$$222$$, $styles$$17$$) {
  for(var $spbNodes$$ = $node$$222$$.getElementsByTagName("spb"), $spbs$$3$$ = [], $i$$417$$ = 0;$i$$417$$ < $spbNodes$$.length;$i$$417$$++) {
    var $alignId$$3$$ = $spbNodes$$[$i$$417$$].$getAttr$("alignId"), $popup$$ = (0,D.$DvtShowPopupBehavior$newInstance$$)($spbNodes$$[$i$$417$$]), $styleId$$2$$;
    for($styleId$$2$$ in $styles$$17$$) {
      if($alignId$$3$$ == $styleId$$2$$) {
        $popup$$ = new D.$DvtShowPopupBehavior$$($popup$$.$getPopupId$(), $popup$$.$getTriggerType$(), D.$JSCompiler_alias_NULL$$, $popup$$.$getAlign$());
        break
      }
    }
    $spbs$$3$$.push($popup$$)
  }
  return $spbs$$3$$
};
D.$JSCompiler_StaticMethods__parseCenter$$ = function $$JSCompiler_StaticMethods__parseCenter$$$($JSCompiler_StaticMethods__parseCenter$self_mapName$$, $layerName$$5_x$$130$$, $node$$224_y$$109$$, $isAreaMarker$$) {
  $JSCompiler_StaticMethods__parseCenter$self_mapName$$ = $JSCompiler_StaticMethods__parseCenter$self_mapName$$.$_tmap$.$_mapName$;
  var $areaId$$1$$ = $node$$224_y$$109$$.$getAttr$("id");
  if($areaId$$1$$) {
    return $isAreaMarker$$ ? D.$DvtBaseMapManager$$.$getAreaCenter$($JSCompiler_StaticMethods__parseCenter$self_mapName$$, $layerName$$5_x$$130$$, $areaId$$1$$) : D.$DvtBaseMapManager$$.$getCityCoordinates$($JSCompiler_StaticMethods__parseCenter$self_mapName$$, $areaId$$1$$)
  }
  $layerName$$5_x$$130$$ = (0,window.parseFloat)($node$$224_y$$109$$.$getAttr$("x"));
  $node$$224_y$$109$$ = (0,window.parseFloat)($node$$224_y$$109$$.$getAttr$("y"));
  return new D.$DvtPoint$$($layerName$$5_x$$130$$, $node$$224_y$$109$$)
};
D.$DvtThematicMapParser$$.prototype.$_parseMapArea$ = function $$DvtThematicMapParser$$$$$_parseMapArea$$($context$$200_path$$12$$, $areaId$$2_cssStyle$$7$$, $dis$$1_hs_layer$$3$$, $discloseStyle_dos_node$$227$$, $dataObj$$6$$) {
  if($dis$$1_hs_layer$$3$$.$AreaShapes$[$areaId$$2_cssStyle$$7$$]) {
    $areaId$$2_cssStyle$$7$$ = new D.$DvtCSSStyle$$($discloseStyle_dos_node$$227$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$));
    $context$$200_path$$12$$ = new D.$DvtDrillablePath$$($context$$200_path$$12$$, this.$_tmap$.$_bSupportsVectorEffects$);
    var $selectStyle_sos$$1$$ = $dis$$1_hs_layer$$3$$.$_areaSelectStyle$;
    $discloseStyle_dos_node$$227$$ = $dis$$1_hs_layer$$3$$.$_areaDiscloseStyle$;
    $dis$$1_hs_layer$$3$$ = new D.$DvtSolidStroke$$($dis$$1_hs_layer$$3$$.$_areaHoverStyle$.$getStyle$("border-color"), 1, 2);
    var $sis$$1$$ = new D.$DvtSolidStroke$$($selectStyle_sos$$1$$.$getStyle$("-tr-inner-color"), 1, 1), $selectStyle_sos$$1$$ = new D.$DvtSolidStroke$$($selectStyle_sos$$1$$.$getStyle$("-tr-outer-color"), 1, 4);
    $context$$200_path$$12$$.$setHoverStroke$($dis$$1_hs_layer$$3$$, D.$JSCompiler_alias_NULL$$).$setSelectedStroke$($sis$$1$$, $selectStyle_sos$$1$$);
    $discloseStyle_dos_node$$227$$ && ($dis$$1_hs_layer$$3$$ = new D.$DvtSolidStroke$$($discloseStyle_dos_node$$227$$.$getStyle$("-tr-inner-color"), 1, 2), $discloseStyle_dos_node$$227$$ = new D.$DvtSolidStroke$$($discloseStyle_dos_node$$227$$.$getStyle$("-tr-outer-color"), 1, 4), (0,D.$JSCompiler_StaticMethods_setDisclosedStroke$$)($context$$200_path$$12$$, $dis$$1_hs_layer$$3$$, $discloseStyle_dos_node$$227$$));
    $dataObj$$6$$.$setDisplayable$($context$$200_path$$12$$);
    (0,D.$JSCompiler_StaticMethods__parseDataObjectFill$$)(this, "colorStyles", $areaId$$2_cssStyle$$7$$, $context$$200_path$$12$$, $dataObj$$6$$)
  }
};
D.$DvtThematicMapParser$$.prototype.$_parseMapMarker$ = function $$DvtThematicMapParser$$$$$_parseMapMarker$$($context$$201_cssStyle$$8_inlineStyle$$9$$, $markerDefs_style$$33_sx$$5$$, $center$$11_layerName$$8$$, $node$$228$$, $dataObj$$7$$) {
  var $imgSrc_marker$$22_shapeType$$ = D.$JSCompiler_alias_NULL$$;
  if($center$$11_layerName$$8$$ = (0,D.$JSCompiler_StaticMethods__parseCenter$$)(this, $center$$11_layerName$$8$$, $node$$228$$, "cities" != $center$$11_layerName$$8$$)) {
    if($imgSrc_marker$$22_shapeType$$ = $node$$228$$.$getAttr$("source")) {
      $imgSrc_marker$$22_shapeType$$ = [$imgSrc_marker$$22_shapeType$$, $node$$228$$.$getAttr$("sourceSelected"), $node$$228$$.$getAttr$("sourceHover"), $node$$228$$.$getAttr$("sourceHoverSelected")]
    }else {
      if(($imgSrc_marker$$22_shapeType$$ = $node$$228$$.$getAttr$("shapeType")) || ($imgSrc_marker$$22_shapeType$$ = "c"), !(0,D.$DvtMarker$isBuiltInShape$$)($imgSrc_marker$$22_shapeType$$)) {
        $markerDefs_style$$33_sx$$5$$ = $markerDefs_style$$33_sx$$5$$.getElementsByTagName("markerDef");
        for(var $i$$418_sy$$5$$ = 0;$i$$418_sy$$5$$ < $markerDefs_style$$33_sx$$5$$.length;$i$$418_sy$$5$$++) {
          !this.$_customMarkerDefs$[$imgSrc_marker$$22_shapeType$$] && $markerDefs_style$$33_sx$$5$$[$i$$418_sy$$5$$].$getAttr$("id") == $imgSrc_marker$$22_shapeType$$ && (this.$_customMarkerDefs$[$imgSrc_marker$$22_shapeType$$] = D.$DvtMarkerUtils$$.$createMarkerDef$($context$$201_cssStyle$$8_inlineStyle$$9$$, $markerDefs_style$$33_sx$$5$$[$i$$418_sy$$5$$]))
        }
      }
    }
    $markerDefs_style$$33_sx$$5$$ = $node$$228$$.$getAttr$("scaleX");
    $markerDefs_style$$33_sx$$5$$ = (0,window.isNaN)($markerDefs_style$$33_sx$$5$$) ? 1 : (0,window.parseFloat)($markerDefs_style$$33_sx$$5$$);
    var $i$$418_sy$$5$$ = $node$$228$$.$getAttr$("scaleY"), $i$$418_sy$$5$$ = (0,window.isNaN)($i$$418_sy$$5$$) ? 1 : (0,window.parseFloat)($i$$418_sy$$5$$), $w$$20$$ = $node$$228$$.$getAttr$("width"), $h$$13$$ = $node$$228$$.$getAttr$("height"), $w$$20$$ = !$w$$20$$ || (0,window.isNaN)($w$$20$$) ? 8 : (0,window.parseInt)($w$$20$$), $h$$13$$ = !$h$$13$$ || (0,window.isNaN)($h$$13$$) ? 8 : (0,window.parseInt)($h$$13$$), $imgSrc_marker$$22_shapeType$$ = new D.$DvtMarker$$($context$$201_cssStyle$$8_inlineStyle$$9$$, 
    $imgSrc_marker$$22_shapeType$$, this.$_tmap$.$_skinName$, $center$$11_layerName$$8$$.x - $w$$20$$ * $markerDefs_style$$33_sx$$5$$ / 2, $center$$11_layerName$$8$$.y - $h$$13$$ * $i$$418_sy$$5$$ / 2, $w$$20$$, $h$$13$$, D.$JSCompiler_alias_NULL$$, $markerDefs_style$$33_sx$$5$$, $i$$418_sy$$5$$);
    $dataObj$$7$$.$setCenter$($center$$11_layerName$$8$$);
    $dataObj$$7$$.$setDisplayable$($imgSrc_marker$$22_shapeType$$);
    $dataObj$$7$$.$setSize$($w$$20$$ * $markerDefs_style$$33_sx$$5$$ * $h$$13$$ * $i$$418_sy$$5$$);
    if($context$$201_cssStyle$$8_inlineStyle$$9$$ = $node$$228$$.$getAttr$(D.$DvtThematicMapParser$_ATTR_INLINE_STYLE$$)) {
      $context$$201_cssStyle$$8_inlineStyle$$9$$ = new D.$DvtCSSStyle$$($context$$201_cssStyle$$8_inlineStyle$$9$$), (0,D.$JSCompiler_StaticMethods__parseDataObjectFill$$)(this, "graduatedSymbol", $context$$201_cssStyle$$8_inlineStyle$$9$$, $imgSrc_marker$$22_shapeType$$, $dataObj$$7$$)
    }
  }
};
D.$JSCompiler_StaticMethods__parseDataObjectFill$$ = function $$JSCompiler_StaticMethods__parseDataObjectFill$$$($JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_4190$$, $markerStyle_styleType$$1$$, $cssStyle$$9_stroke$$48_strokeWidth$$6$$, $displayable$$40$$, $dataObj$$8_strokeStyle$$) {
  $cssStyle$$9_stroke$$48_strokeWidth$$6$$ || ($cssStyle$$9_stroke$$48_strokeWidth$$6$$ = {});
  var $pattern$$7$$ = $cssStyle$$9_stroke$$48_strokeWidth$$6$$.$getStyle$("pattern"), $patternColor$$ = $cssStyle$$9_stroke$$48_strokeWidth$$6$$.$getStyle$("pattern-color"), $backgroundColor$$3$$ = $cssStyle$$9_stroke$$48_strokeWidth$$6$$.$getStyle$("background-color"), $borderColor$$12_gradient$$1$$ = $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_4190$$.$_isMobile$ || "alta" == $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_4190$$.$_tmap$.$_skinName$ ? D.$JSCompiler_alias_FALSE$$ : 
  $cssStyle$$9_stroke$$48_strokeWidth$$6$$.$getStyle$("gradient");
  $backgroundColor$$3$$ && $dataObj$$8_strokeStyle$$ ? $dataObj$$8_strokeStyle$$.$_categories$.push($backgroundColor$$3$$) : $patternColor$$ && $dataObj$$8_strokeStyle$$ && $dataObj$$8_strokeStyle$$.$_categories$.push($patternColor$$);
  var $opacity$$2$$;
  $opacity$$2$$ = $cssStyle$$9_stroke$$48_strokeWidth$$6$$.$getStyle$("opacity") ? (0,window.parseFloat)($cssStyle$$9_stroke$$48_strokeWidth$$6$$.$getStyle$("opacity")) : 1;
  $dataObj$$8_strokeStyle$$ && $dataObj$$8_strokeStyle$$.$setDatatipColor$($backgroundColor$$3$$ ? $backgroundColor$$3$$ : $patternColor$$);
  if("graduatedSymbol" == $markerStyle_styleType$$1$$ && (0,D.$DvtMarker$isBuiltInShape$$)($displayable$$40$$.$getType$())) {
    $markerStyle_styleType$$1$$ = $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_4190$$.$_tmap$.$_markerStyle$;
    $dataObj$$8_strokeStyle$$ = $cssStyle$$9_stroke$$48_strokeWidth$$6$$.$getStyle$("border-style") ? $cssStyle$$9_stroke$$48_strokeWidth$$6$$.$getStyle$("border-style") : $markerStyle_styleType$$1$$.$getStyle$("border-style");
    if("none" != $dataObj$$8_strokeStyle$$) {
      var $strokeColor$$4$$ = $cssStyle$$9_stroke$$48_strokeWidth$$6$$.$getStyle$("border-color") ? $cssStyle$$9_stroke$$48_strokeWidth$$6$$.$getStyle$("border-color") : $markerStyle_styleType$$1$$.$getStyle$("border-color");
      ($cssStyle$$9_stroke$$48_strokeWidth$$6$$ = $cssStyle$$9_stroke$$48_strokeWidth$$6$$.$getStyle$("border-width") ? $cssStyle$$9_stroke$$48_strokeWidth$$6$$.$getStyle$("border-width") : $markerStyle_styleType$$1$$.$getStyle$("border-width")) && ($cssStyle$$9_stroke$$48_strokeWidth$$6$$ = (0,window.parseFloat)($cssStyle$$9_stroke$$48_strokeWidth$$6$$.substring(0, $cssStyle$$9_stroke$$48_strokeWidth$$6$$.indexOf("px"))));
      $cssStyle$$9_stroke$$48_strokeWidth$$6$$ = new D.$DvtSolidStroke$$($strokeColor$$4$$, 1, $cssStyle$$9_stroke$$48_strokeWidth$$6$$);
      $cssStyle$$9_stroke$$48_strokeWidth$$6$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($dataObj$$8_strokeStyle$$));
      $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_4190$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ || ($cssStyle$$9_stroke$$48_strokeWidth$$6$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$);
      $displayable$$40$$.$setStroke$($cssStyle$$9_stroke$$48_strokeWidth$$6$$)
    }
    "true" == $borderColor$$12_gradient$$1$$ && $backgroundColor$$3$$ ? $displayable$$40$$.$setFill$(new D.$DvtMarkerGradient$$.$createMarkerGradient$($backgroundColor$$3$$, $displayable$$40$$, $opacity$$2$$)) : $pattern$$7$$ ? $displayable$$40$$.$setFill$(new D.$DvtPatternFill$$($pattern$$7$$, $patternColor$$, $backgroundColor$$3$$)) : $backgroundColor$$3$$ ? $displayable$$40$$.$setSolidFill$($backgroundColor$$3$$, $opacity$$2$$) : $displayable$$40$$.$setSolidFill$($markerStyle_styleType$$1$$.$getStyle$("background-color"), 
    $opacity$$2$$)
  }else {
    if("colorStyles" == $markerStyle_styleType$$1$$) {
      if(($borderColor$$12_gradient$$1$$ = $cssStyle$$9_stroke$$48_strokeWidth$$6$$.$getStyle$("border-color")) && "transparent" != $borderColor$$12_gradient$$1$$) {
        $cssStyle$$9_stroke$$48_strokeWidth$$6$$ = new D.$DvtSolidStroke$$($borderColor$$12_gradient$$1$$), $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_4190$$.$_tmap$.$_bSupportsVectorEffects$ && ($cssStyle$$9_stroke$$48_strokeWidth$$6$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), $displayable$$40$$.$setStroke$($cssStyle$$9_stroke$$48_strokeWidth$$6$$)
      }
      $pattern$$7$$ ? ($JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_4190$$ = new D.$DvtPatternFill$$($pattern$$7$$, $patternColor$$, $backgroundColor$$3$$), $displayable$$40$$.$_ptFill$ = $JSCompiler_StaticMethods__parseDataObjectFill$self_fill$$inline_4190$$) : $backgroundColor$$3$$ && "transparent" != $backgroundColor$$3$$ ? $displayable$$40$$.$setSolidFill$($backgroundColor$$3$$, $opacity$$2$$) : $displayable$$40$$.$setFill$(D.$JSCompiler_alias_NULL$$)
    }
  }
};
D.$DvtThematicMapJsonParser$$ = function $$DvtThematicMapJsonParser$$$($tmap$$4$$) {
  this.Init($tmap$$4$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapJsonParser$$, D.$DvtObj$$, "DvtThematicMapJsonParser");
D.$JSCompiler_prototypeAlias$$ = D.$DvtThematicMapJsonParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tmap$$5$$) {
  this.$_tmap$ = $tmap$$5$$;
  this.$_isCustomBasemap$ = D.$JSCompiler_alias_FALSE$$;
  this.$_areaLayerStyle$ = D.$JSCompiler_alias_NULL$$;
  this.$_isMobile$ = (0,D.$DvtAgent$isTouchDevice$$)();
  this.$_customAreaLayerImages$ = {}
};
D.$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$($options$$175$$) {
  $options$$175$$.skin = "alta";
  this.$ParseMapProperties$($options$$175$$);
  var $areaLayers$$inline_4215_styles$$inline_4212_xmlNode$$78$$ = $options$$175$$.styleDefaults;
  this.$_areaLayerStyle$ = new D.$DvtCSSStyle$$($areaLayers$$inline_4215_styles$$inline_4212_xmlNode$$78$$.areaStyle + $areaLayers$$inline_4215_styles$$inline_4212_xmlNode$$78$$.labelStyle);
  this.$_tmap$.$_styleDefaults$ = $areaLayers$$inline_4215_styles$$inline_4212_xmlNode$$78$$;
  this.$_isCustomBasemap$ && ($areaLayers$$inline_4215_styles$$inline_4212_xmlNode$$78$$ = (new D.$DvtXmlParser$$).parse($options$$175$$.sourceXml)) && this.$ParseCustomBasemap$($areaLayers$$inline_4215_styles$$inline_4212_xmlNode$$78$$);
  for(var $areaLayers$$inline_4215_styles$$inline_4212_xmlNode$$78$$ = $options$$175$$.areaLayers, $basemap$$inline_4216$$ = this.$_tmap$.$_mapName$, $i$$inline_4217$$ = 0;$i$$inline_4217$$ < $areaLayers$$inline_4215_styles$$inline_4212_xmlNode$$78$$.length;$i$$inline_4217$$++) {
    var $areaLayer$$inline_4218$$ = D.$DvtJSONUtils$$.$merge$($areaLayers$$inline_4215_styles$$inline_4212_xmlNode$$78$$[$i$$inline_4217$$], D.$DvtThematicMapDefaults$DEFAULT_AREA_LAYER$$), $children$$inline_10107_layer$$inline_4219$$ = $areaLayer$$inline_4218$$.layer;
    if($children$$inline_10107_layer$$inline_4219$$) {
      var $mapLayer$$inline_4220$$;
      $areaLayer$$inline_4218$$.areaStyle && (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)(this.$_areaLayerStyle$, $areaLayer$$inline_4218$$.areaStyle);
      if(this.$_isCustomBasemap$) {
        $mapLayer$$inline_4220$$ = new D.$DvtMapCustomAreaLayer$$(this.$_tmap$, $children$$inline_10107_layer$$inline_4219$$, D.$JSCompiler_alias_NULL$$, $areaLayer$$inline_4218$$.labelDisplay, $areaLayer$$inline_4218$$.labelType, this.$_tmap$.$_eventHandler$), (0,D.$JSCompiler_StaticMethods_setAreaLayerImage$$)($mapLayer$$inline_4220$$, this.$_customAreaLayerImages$[$children$$inline_10107_layer$$inline_4219$$])
      }else {
        $mapLayer$$inline_4220$$ = new D.$DvtMapAreaLayer$$(this.$_tmap$, $children$$inline_10107_layer$$inline_4219$$, D.$JSCompiler_alias_NULL$$, $areaLayer$$inline_4218$$.labelDisplay, $areaLayer$$inline_4218$$.labelType, this.$_tmap$.$_eventHandler$);
        var $areaNames$$inline_4221_values$$inline_10104$$ = D.$DvtBaseMapManager$$.$getAreaNames$($basemap$$inline_4216$$, $children$$inline_10107_layer$$inline_4219$$), $shapes$$inline_10101$$ = this.$_createPathShapes$($areaNames$$inline_4221_values$$inline_10104$$);
        $mapLayer$$inline_4220$$.$AreaShapes$ = $shapes$$inline_10101$$;
        (0,D.$JSCompiler_StaticMethods_setAreaNames$$)($mapLayer$$inline_4220$$, $areaNames$$inline_4221_values$$inline_10104$$);
        $areaNames$$inline_4221_values$$inline_10104$$ = D.$DvtBaseMapManager$$.$getAreaLabelInfo$($basemap$$inline_4216$$, $children$$inline_10107_layer$$inline_4219$$);
        $mapLayer$$inline_4220$$.$_labelInfo$ = $areaNames$$inline_4221_values$$inline_10104$$;
        $children$$inline_10107_layer$$inline_4219$$ = D.$DvtBaseMapManager$$.$getChildrenForLayerAreas$(this.$_tmap$.$_mapName$, $children$$inline_10107_layer$$inline_4219$$);
        $mapLayer$$inline_4220$$.$_children$ = $children$$inline_10107_layer$$inline_4219$$
      }
      $mapLayer$$inline_4220$$.$_layerCSSStyle$ = this.$_areaLayerStyle$;
      $mapLayer$$inline_4220$$.$setAnimation$("auto" == $areaLayer$$inline_4218$$.animationOnLayerChange ? "alphaFade" : $areaLayer$$inline_4218$$.animationOnLayerChange);
      $mapLayer$$inline_4220$$.$setAnimationDuration$(this.$_tmap$.$getAnimationDuration$());
      this.$_tmap$.$_layers$.push($mapLayer$$inline_4220$$);
      $areaLayer$$inline_4218$$.areaDataLayer && this.$ParseDataLayers$([$areaLayer$$inline_4218$$.areaDataLayer], $mapLayer$$inline_4220$$, D.$JSCompiler_alias_TRUE$$);
      $areaLayer$$inline_4218$$.pointDataLayers && this.$ParseDataLayers$($areaLayer$$inline_4218$$.pointDataLayers, $mapLayer$$inline_4220$$, D.$JSCompiler_alias_FALSE$$)
    }
  }
  this.$ParseDataLayers$($options$$175$$.pointDataLayers, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$ParseMapProperties$ = function $$JSCompiler_prototypeAlias$$$$ParseMapProperties$$($options$$176$$) {
  (0,D.$JSCompiler_StaticMethods_parseComponentJson$$)(this.$_tmap$, $options$$176$$);
  this.$_tmap$.$setAnimationDuration$($options$$176$$.animationDuration / 1E3);
  this.$_tmap$.$_animationOnDisplay$ = "auto" == $options$$176$$.animationOnDisplay ? "alphaFade" : $options$$176$$.animationOnDisplay;
  this.$_tmap$.$_animationOnMapChange$ = "auto" == $options$$176$$.animationOnMapChange ? "alphaFade" : $options$$176$$.animationOnMapChange;
  this.$_isCustomBasemap$ = $options$$176$$.source != D.$JSCompiler_alias_NULL$$;
  var $JSCompiler_StaticMethods_setMapName$self$$inline_10115_tooltipDisplay$$ = this.$_tmap$, $attr$$inline_10116$$ = this.$_isCustomBasemap$ ? "$" + $options$$176$$.basemap : $options$$176$$.basemap;
  $JSCompiler_StaticMethods_setMapName$self$$inline_10115_tooltipDisplay$$.$_bBaseMapChanged$ = $JSCompiler_StaticMethods_setMapName$self$$inline_10115_tooltipDisplay$$.$_mapName$ && $JSCompiler_StaticMethods_setMapName$self$$inline_10115_tooltipDisplay$$.$_mapName$ != $attr$$inline_10116$$;
  $JSCompiler_StaticMethods_setMapName$self$$inline_10115_tooltipDisplay$$.$_mapName$ = $attr$$inline_10116$$;
  this.$_tmap$.$_controlPanelBehavior$ = $options$$176$$.controlPanelBehavior;
  this.$_tmap$.$setDrillMode$("none");
  this.$_tmap$.$_initialZooming$ = "auto" == $options$$176$$.initialZooming;
  this.$_tmap$.$_isMarkerZoomBehaviorFixed$ = "fixed" == $options$$176$$.markerZoomBehavior;
  this.$_tmap$.$_panning$ = "auto" == $options$$176$$.panning;
  $JSCompiler_StaticMethods_setMapName$self$$inline_10115_tooltipDisplay$$ = $options$$176$$.tooltipDisplay;
  "shortDesc" == $JSCompiler_StaticMethods_setMapName$self$$inline_10115_tooltipDisplay$$ ? $JSCompiler_StaticMethods_setMapName$self$$inline_10115_tooltipDisplay$$ = "shortDescOnly" : "labelAndShortDesc" == $JSCompiler_StaticMethods_setMapName$self$$inline_10115_tooltipDisplay$$ && ($JSCompiler_StaticMethods_setMapName$self$$inline_10115_tooltipDisplay$$ = "auto");
  this.$_tmap$.$_displayTooltips$ = $JSCompiler_StaticMethods_setMapName$self$$inline_10115_tooltipDisplay$$;
  this.$_tmap$.$_zooming$ = "auto" == $options$$176$$.zooming
};
D.$JSCompiler_prototypeAlias$$.$ParseDataLayers$ = function $$JSCompiler_prototypeAlias$$$$ParseDataLayers$$($dataLayers$$3$$, $parentLayer$$, $isAreaDataLayer$$) {
  if($dataLayers$$3$$) {
    for(var $i$$424$$ = 0;$i$$424$$ < $dataLayers$$3$$.length;$i$$424$$++) {
      var $dataLayerOptions_initSelections$$2$$ = D.$DvtJSONUtils$$.$merge$($dataLayers$$3$$[$i$$424$$], D.$DvtThematicMapDefaults$DEFAULT_DATA_LAYER$$);
      $parentLayer$$ ? $parentLayer$$ instanceof D.$DvtMapAreaLayer$$ && (0,D.$JSCompiler_StaticMethods_resetRenderedAreas$$)($parentLayer$$) : ($parentLayer$$ = new D.$DvtMapLayer$$(this.$_tmap$, this.$_tmap$.$_eventHandler$), this.$_tmap$.$_layers$.push($parentLayer$$));
      var $dataLayer$$9$$ = new D.$DvtMapDataLayer$$(this.$_tmap$, $parentLayer$$, $dataLayerOptions_initSelections$$2$$.id, this.$_tmap$.$_eventHandler$), $initDisclosed_selectionMode$$9$$ = $dataLayerOptions_initSelections$$2$$.selection;
      "single" == $initDisclosed_selectionMode$$9$$ ? $dataLayer$$9$$.$setSelectionMode$("s") : "multiple" == $initDisclosed_selectionMode$$9$$ && $dataLayer$$9$$.$setSelectionMode$("m");
      $dataLayer$$9$$.$setAnimation$("auto" == $dataLayerOptions_initSelections$$2$$.animationOnDataChange ? "alphaFade" : $dataLayerOptions_initSelections$$2$$.animationOnDataChange);
      $dataLayer$$9$$.$setAnimationDuration$(this.$_tmap$.$getAnimationDuration$());
      var $isolatedRowKey$$2$$ = D.$JSCompiler_alias_NULL$$;
      $parentLayer$$ instanceof D.$DvtMapAreaLayer$$ && ($isolatedRowKey$$2$$ = $dataLayerOptions_initSelections$$2$$.isolatedItem);
      var $disclosedItems_markers$$8$$ = $dataLayerOptions_initSelections$$2$$.disclosedItems, $initDisclosed_selectionMode$$9$$ = [], $isolatedAreaId$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_4259_areas$$1$$ = $dataLayerOptions_initSelections$$2$$.areas;
      if($JSCompiler_StaticMethods_addDataObject$self$$inline_4259_areas$$1$$) {
        for(var $j$$78$$ = 0;$j$$78$$ < $JSCompiler_StaticMethods_addDataObject$self$$inline_4259_areas$$1$$.length;$j$$78$$++) {
          var $areaId$$3_dataObj$$9_obj$$inline_4260$$ = $JSCompiler_StaticMethods_addDataObject$self$$inline_4259_areas$$1$$[$j$$78$$].location;
          if($isolatedRowKey$$2$$) {
            if($isolatedRowKey$$2$$ != $JSCompiler_StaticMethods_addDataObject$self$$inline_4259_areas$$1$$[$j$$78$$].id) {
              continue
            }else {
              $isolatedAreaId$$ = $areaId$$3_dataObj$$9_obj$$inline_4260$$
            }
          }
          $disclosedItems_markers$$8$$ && -1 != $disclosedItems_markers$$8$$.indexOf($JSCompiler_StaticMethods_addDataObject$self$$inline_4259_areas$$1$$[$j$$78$$].id) && $initDisclosed_selectionMode$$9$$.push($areaId$$3_dataObj$$9_obj$$inline_4260$$);
          if($areaId$$3_dataObj$$9_obj$$inline_4260$$ = this.$_parseMapArea$($parentLayer$$, $dataLayer$$9$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_4259_areas$$1$$[$j$$78$$])) {
            if($dataLayer$$9$$.$isSelectable$()) {
              var $displayable$$41$$ = $areaId$$3_dataObj$$9_obj$$inline_4260$$.$getDisplayable$();
              $displayable$$41$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$)
            }
            (0,D.$JSCompiler_StaticMethods_addAreaObject$$)($dataLayer$$9$$, $areaId$$3_dataObj$$9_obj$$inline_4260$$)
          }
        }
      }
      if($disclosedItems_markers$$8$$ = $dataLayerOptions_initSelections$$2$$.markers) {
        for($j$$78$$ = 0;$j$$78$$ < $disclosedItems_markers$$8$$.length;$j$$78$$++) {
          $areaId$$3_dataObj$$9_obj$$inline_4260$$ = $disclosedItems_markers$$8$$[$j$$78$$].location;
          if($isAreaDataLayer$$ && $isolatedRowKey$$2$$) {
            if($isolatedRowKey$$2$$ != $disclosedItems_markers$$8$$[$j$$78$$].id) {
              continue
            }else {
              $isolatedAreaId$$ = $areaId$$3_dataObj$$9_obj$$inline_4260$$
            }
          }
          if($areaId$$3_dataObj$$9_obj$$inline_4260$$ = this.$_parseMapMarker$($parentLayer$$, $dataLayer$$9$$, $disclosedItems_markers$$8$$[$j$$78$$], $isAreaDataLayer$$)) {
            $dataLayer$$9$$.$isSelectable$() && ($displayable$$41$$ = $areaId$$3_dataObj$$9_obj$$inline_4260$$.$getDisplayable$(), $displayable$$41$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$)), $JSCompiler_StaticMethods_addDataObject$self$$inline_4259_areas$$1$$ = $dataLayer$$9$$, $JSCompiler_StaticMethods_addDataObject$self$$inline_4259_areas$$1$$.$_dataObjs$.push($areaId$$3_dataObj$$9_obj$$inline_4260$$), $JSCompiler_StaticMethods_addDataObject$self$$inline_4259_areas$$1$$.$_eventHandler$.$associate$($areaId$$3_dataObj$$9_obj$$inline_4260$$.$getDisplayable$(), 
            $areaId$$3_dataObj$$9_obj$$inline_4260$$)
          }
        }
      }
      $isolatedAreaId$$ && ($dataLayer$$9$$.$_isolatedAreaRowKey$ = $isolatedRowKey$$2$$, (0,D.$JSCompiler_StaticMethods_setIsolatedArea$$)($parentLayer$$, $isolatedAreaId$$));
      if(($dataLayerOptions_initSelections$$2$$ = $dataLayerOptions_initSelections$$2$$.selectedItems) && 0 < $dataLayerOptions_initSelections$$2$$.length) {
        $dataLayer$$9$$.$_initSelections$ = $dataLayerOptions_initSelections$$2$$
      }
      $initDisclosed_selectionMode$$9$$ && 0 < $initDisclosed_selectionMode$$9$$.length && (this.$_tmap$.$_initDrilled$[$parentLayer$$.$LayerName$] = [$dataLayer$$9$$.$getClientId$(), $initDisclosed_selectionMode$$9$$]);
      $parentLayer$$.$DataLayers$[$dataLayer$$9$$.$getClientId$()] = $dataLayer$$9$$
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$ParseCustomBasemap$ = function $$JSCompiler_prototypeAlias$$$$ParseCustomBasemap$$($childNodes$$33_xmlNode$$79$$) {
  $childNodes$$33_xmlNode$$79$$ = $childNodes$$33_xmlNode$$79$$.$getChildNodes$();
  for(var $node$$229$$, $nodeName$$12$$, $i$$425$$ = 0;$i$$425$$ < $childNodes$$33_xmlNode$$79$$.length;$i$$425$$++) {
    $node$$229$$ = $childNodes$$33_xmlNode$$79$$[$i$$425$$], $nodeName$$12$$ = $node$$229$$.getName(), "layer" == $nodeName$$12$$ ? this.$_parseCustomLayer$($node$$229$$) : "points" == $nodeName$$12$$ && this.$_parseCustomPoints$($node$$229$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_parseCustomLayer$ = function $$JSCompiler_prototypeAlias$$$$_parseCustomLayer$$($layerName$$9_xmlNode$$80$$) {
  var $childNodes$$34$$ = $layerName$$9_xmlNode$$80$$.$getChildNodes$();
  $layerName$$9_xmlNode$$80$$ = $layerName$$9_xmlNode$$80$$.$getAttr$("id");
  for(var $dir$$2_node$$230$$, $image$$8_nodeName$$13$$, $images$$13$$ = [], $i$$426$$ = 0;$i$$426$$ < $childNodes$$34$$.length;$i$$426$$++) {
    if($dir$$2_node$$230$$ = $childNodes$$34$$[$i$$426$$], $image$$8_nodeName$$13$$ = $dir$$2_node$$230$$.getName(), "image" == $image$$8_nodeName$$13$$) {
      $image$$8_nodeName$$13$$ = {};
      $image$$8_nodeName$$13$$.source = $dir$$2_node$$230$$.$getAttr$("source");
      $image$$8_nodeName$$13$$.width = $dir$$2_node$$230$$.$getAttr$("width");
      $image$$8_nodeName$$13$$.height = $dir$$2_node$$230$$.$getAttr$("height");
      var $bidi$$2$$ = $dir$$2_node$$230$$.$getAttr$("bidi");
      $dir$$2_node$$230$$ = $dir$$2_node$$230$$.$getAttr$("dir");
      $image$$8_nodeName$$13$$.dir = "true" == $bidi$$2$$ || "rtl" == $dir$$2_node$$230$$ ? "rtl" : "ltr";
      $images$$13$$.push($image$$8_nodeName$$13$$)
    }
  }
  this.$_customAreaLayerImages$[$layerName$$9_xmlNode$$80$$] = $images$$13$$
};
D.$JSCompiler_prototypeAlias$$.$_parseCustomPoints$ = function $$JSCompiler_prototypeAlias$$$$_parseCustomPoints$$($childNodes$$35_xmlNode$$81$$) {
  $childNodes$$35_xmlNode$$81$$ = $childNodes$$35_xmlNode$$81$$.$getChildNodes$();
  for(var $node$$231$$, $nodeName$$14$$, $points$$41$$ = {}, $labels$$16$$ = {}, $i$$427$$ = 0;$i$$427$$ < $childNodes$$35_xmlNode$$81$$.length;$i$$427$$++) {
    $node$$231$$ = $childNodes$$35_xmlNode$$81$$[$i$$427$$], $nodeName$$14$$ = $node$$231$$.getName(), "point" == $nodeName$$14$$ && ($points$$41$$[$node$$231$$.$getAttr$("name")] = [$node$$231$$.$getAttr$("x"), $node$$231$$.$getAttr$("y")], $labels$$16$$[$node$$231$$.$getAttr$("name")] = [D.$JSCompiler_alias_NULL$$, $node$$231$$.$getAttr$("longLabel")])
  }
  D.$DvtBaseMapManager$$.$registerBaseMapLayer$(this.$_tmap$.$_mapName$, "cities", $labels$$16$$, $points$$41$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$_createPathShapes$ = function $$JSCompiler_prototypeAlias$$$$_createPathShapes$$($areaNames$$3$$) {
  var $shapes$$7$$ = {}, $context$$204$$ = this.$_tmap$.$_context$, $area$$7$$;
  for($area$$7$$ in $areaNames$$3$$) {
    $shapes$$7$$[$area$$7$$] = new D.$DvtPath$$($context$$204$$), (0,D.$JSCompiler_StaticMethods__styleDisplayable$$)(this, this.$_areaLayerStyle$, $shapes$$7$$[$area$$7$$])
  }
  return $shapes$$7$$
};
D.$JSCompiler_prototypeAlias$$.$_parseMapArea$ = function $$JSCompiler_prototypeAlias$$$$_parseMapArea$$($layer$$5$$, $dataLayer$$10$$, $data$$82$$) {
  var $areaId$$4_dataObj$$10$$ = $data$$82$$.location;
  if($layer$$5$$.$AreaShapes$[$areaId$$4_dataObj$$10$$] && $data$$82$$.color) {
    $layer$$5$$.$_renderArea$[$areaId$$4_dataObj$$10$$] = D.$JSCompiler_alias_FALSE$$;
    var $context$$205$$ = this.$_tmap$.$_context$, $path$$13$$ = new D.$DvtDrillablePath$$($context$$205$$, this.$_tmap$.$_bSupportsVectorEffects$);
    $data$$82$$ = D.$DvtJSONUtils$$.$merge$($data$$82$$, this.$_tmap$.$_styleDefaults$.dataAreaDefaults);
    $data$$82$$.labelStyle || ($data$$82$$.labelStyle = this.$_tmap$.$_styleDefaults$.labelStyle);
    var $dis$$2_hs$$1$$ = new D.$DvtSolidStroke$$($data$$82$$.hoverColor, 1, 2), $dos$$1_sis$$2$$ = new D.$DvtSolidStroke$$($data$$82$$.selectedInnerColor, 1, 1), $sos$$2$$ = new D.$DvtSolidStroke$$($data$$82$$.selectedOuterColor, 1, 4);
    $path$$13$$.$setHoverStroke$($dis$$2_hs$$1$$, D.$JSCompiler_alias_NULL$$).$setSelectedStroke$($dos$$1_sis$$2$$, $sos$$2$$);
    $dis$$2_hs$$1$$ = new D.$DvtSolidStroke$$($data$$82$$.drilledInnerColor, 1, 2);
    $dos$$1_sis$$2$$ = new D.$DvtSolidStroke$$($data$$82$$.drilledOuterColor, 1, 4);
    (0,D.$JSCompiler_StaticMethods_setDisclosedStroke$$)($path$$13$$, $dis$$2_hs$$1$$, $dos$$1_sis$$2$$);
    $areaId$$4_dataObj$$10$$ = new D.$DvtMapDataArea$$($context$$205$$, $dataLayer$$10$$, $data$$82$$.id, $data$$82$$.clientId, $areaId$$4_dataObj$$10$$);
    $areaId$$4_dataObj$$10$$.$setDisplayable$($path$$13$$);
    (0,D.$JSCompiler_StaticMethods__parseCommonData$$)(this, $layer$$5$$, $dataLayer$$10$$, $data$$82$$, $path$$13$$, $areaId$$4_dataObj$$10$$, D.$JSCompiler_alias_TRUE$$);
    return $areaId$$4_dataObj$$10$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$_parseMapMarker$ = function $$JSCompiler_prototypeAlias$$$$_parseMapMarker$$($layer$$6$$, $dataLayer$$11$$, $data$$83$$, $isParentAreaDataLayer$$) {
  var $center$$15_data$$inline_4284_rotation$$4$$;
  $center$$15_data$$inline_4284_rotation$$4$$ = $data$$83$$;
  var $context$$206_mapName$$inline_4286_radianRot$$1$$ = this.$_tmap$.$_mapName$, $areaId$$inline_4287_imgSrc$$1_shapeType$$1$$ = $center$$15_data$$inline_4284_rotation$$4$$.location;
  $center$$15_data$$inline_4284_rotation$$4$$ = $areaId$$inline_4287_imgSrc$$1_shapeType$$1$$ ? $isParentAreaDataLayer$$ ? D.$DvtBaseMapManager$$.$getAreaCenter$($context$$206_mapName$$inline_4286_radianRot$$1$$, $layer$$6$$.$LayerName$, $areaId$$inline_4287_imgSrc$$1_shapeType$$1$$) : D.$DvtBaseMapManager$$.$getCityCoordinates$($context$$206_mapName$$inline_4286_radianRot$$1$$, $areaId$$inline_4287_imgSrc$$1_shapeType$$1$$) : D.$DvtThematicMapProjections$$.$project$($center$$15_data$$inline_4284_rotation$$4$$.x, 
  $center$$15_data$$inline_4284_rotation$$4$$.y, this.$_tmap$.$_mapName$);
  if(!$center$$15_data$$inline_4284_rotation$$4$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $context$$206_mapName$$inline_4286_radianRot$$1$$ = this.$_tmap$.$_context$;
  window.dataObj = new D.$DvtMapDataMarker$$($context$$206_mapName$$inline_4286_radianRot$$1$$, $dataLayer$$11$$, $data$$83$$.id, $data$$83$$.clientId, $data$$83$$.location);
  window.dataObj.$setCenter$($center$$15_data$$inline_4284_rotation$$4$$);
  $data$$83$$ = D.$DvtJSONUtils$$.$merge$($data$$83$$, this.$_tmap$.$_styleDefaults$.dataMarkerDefaults);
  ($areaId$$inline_4287_imgSrc$$1_shapeType$$1$$ = $data$$83$$.source) ? $areaId$$inline_4287_imgSrc$$1_shapeType$$1$$ = [$areaId$$inline_4287_imgSrc$$1_shapeType$$1$$, $data$$83$$.sourceSelected, $data$$83$$.sourceHover, $data$$83$$.sourceHoverSelected] : ($areaId$$inline_4287_imgSrc$$1_shapeType$$1$$ = $data$$83$$.shape) || ($areaId$$inline_4287_imgSrc$$1_shapeType$$1$$ = "c");
  var $sx$$6$$ = $data$$83$$.scaleX;
  (0,window.isNaN)($sx$$6$$) && ($sx$$6$$ = 1);
  var $sy$$6$$ = $data$$83$$.scaleY;
  (0,window.isNaN)($sy$$6$$) && ($sy$$6$$ = 1);
  var $w$$21$$ = $data$$83$$.width, $h$$14$$ = $data$$83$$.height;
  if(!$w$$21$$ || (0,window.isNaN)($w$$21$$)) {
    $w$$21$$ = 8
  }
  if(!$h$$14$$ || (0,window.isNaN)($h$$14$$)) {
    $h$$14$$ = 8
  }
  window.marker = new D.$DvtMarker$$($context$$206_mapName$$inline_4286_radianRot$$1$$, $areaId$$inline_4287_imgSrc$$1_shapeType$$1$$, "alta", $center$$15_data$$inline_4284_rotation$$4$$.x - $w$$21$$ * $sx$$6$$ / 2, $center$$15_data$$inline_4284_rotation$$4$$.y - $h$$14$$ * $sy$$6$$ / 2, $w$$21$$, $h$$14$$, D.$JSCompiler_alias_NULL$$, $sx$$6$$, $sy$$6$$);
  window.dataObj.$setDisplayable$(window.marker);
  window.dataObj.$setSize$($w$$21$$ * $sx$$6$$ * $h$$14$$ * $sy$$6$$);
  window.dataObj.$setLabelPosition$($data$$83$$.labelPosition);
  if($center$$15_data$$inline_4284_rotation$$4$$ = $data$$83$$.rotation) {
    $context$$206_mapName$$inline_4286_radianRot$$1$$ = $center$$15_data$$inline_4284_rotation$$4$$ * window.Math.PI / 180, window.marker.$setRotation$($context$$206_mapName$$inline_4286_radianRot$$1$$), $center$$15_data$$inline_4284_rotation$$4$$ = window.dataObj.$getCenter$(), (0,D.$JSCompiler_StaticMethods_setTranslate$$)(window.marker, $center$$15_data$$inline_4284_rotation$$4$$.x - ($center$$15_data$$inline_4284_rotation$$4$$.x * window.Math.cos($context$$206_mapName$$inline_4286_radianRot$$1$$) - 
    $center$$15_data$$inline_4284_rotation$$4$$.y * window.Math.sin($context$$206_mapName$$inline_4286_radianRot$$1$$)), $center$$15_data$$inline_4284_rotation$$4$$.y - ($center$$15_data$$inline_4284_rotation$$4$$.x * window.Math.sin($context$$206_mapName$$inline_4286_radianRot$$1$$) + $center$$15_data$$inline_4284_rotation$$4$$.y * window.Math.cos($context$$206_mapName$$inline_4286_radianRot$$1$$)))
  }
  (0,D.$JSCompiler_StaticMethods__parseCommonData$$)(this, $layer$$6$$, $dataLayer$$11$$, $data$$83$$, window.marker, window.dataObj, $isParentAreaDataLayer$$);
  return window.dataObj
};
D.$JSCompiler_StaticMethods__parseCommonData$$ = function $$JSCompiler_StaticMethods__parseCommonData$$$($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_4320$$, $layer$$7$$, $dataLayer$$12$$, $data$$84$$, $areaId$$inline_4315_displayable$$42$$, $dataObj$$11$$, $isParentAreaDataLayer$$1$$) {
  var $areaId$$6_datatip$$inline_4305_destination$$2_labelDisplay$$inline_4317$$ = $data$$84$$.location;
  $isParentAreaDataLayer$$1$$ && "auto" == $layer$$7$$.$getLabelDisplay$() && ($layer$$7$$.$_renderLabel$[$areaId$$6_datatip$$inline_4305_destination$$2_labelDisplay$$inline_4317$$] = D.$JSCompiler_alias_FALSE$$);
  $data$$84$$.action && ($dataObj$$11$$.$_hasAction$ = D.$JSCompiler_alias_TRUE$$, $dataObj$$11$$.$_action$ = $data$$84$$.action);
  if($areaId$$6_datatip$$inline_4305_destination$$2_labelDisplay$$inline_4317$$ = $data$$84$$.destination) {
    var $areaId$$inline_4307_displayTooltips$$inline_4304_linkObj$$2$$ = [];
    $areaId$$inline_4307_displayTooltips$$inline_4304_linkObj$$2$$.destination = $areaId$$6_datatip$$inline_4305_destination$$2_labelDisplay$$inline_4317$$;
    $areaId$$inline_4307_displayTooltips$$inline_4304_linkObj$$2$$.targetFrame = "_blank";
    $areaId$$inline_4307_displayTooltips$$inline_4304_linkObj$$2$$.focusable = D.$JSCompiler_alias_TRUE$$;
    (0,D.$JSCompiler_StaticMethods_setHyperlink$$)($areaId$$inline_4315_displayable$$42$$, $areaId$$inline_4307_displayTooltips$$inline_4304_linkObj$$2$$)
  }
  $areaId$$inline_4307_displayTooltips$$inline_4304_linkObj$$2$$ = $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_4320$$.$_tmap$.$_displayTooltips$;
  if("none" != $areaId$$inline_4307_displayTooltips$$inline_4304_linkObj$$2$$) {
    $areaId$$6_datatip$$inline_4305_destination$$2_labelDisplay$$inline_4317$$ = $data$$84$$.shortDesc;
    if("auto" == $areaId$$inline_4307_displayTooltips$$inline_4304_linkObj$$2$$) {
      var $cssStyle$$11_labelText$$inline_4316_preDatatip$$inline_4306$$;
      ($areaId$$inline_4307_displayTooltips$$inline_4304_linkObj$$2$$ = $data$$84$$.location) && ($cssStyle$$11_labelText$$inline_4316_preDatatip$$inline_4306$$ = !$isParentAreaDataLayer$$1$$ || $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_4320$$.$_isCustomBasemap$ ? D.$DvtBaseMapManager$$.$getCityLabel$($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_4320$$.$_tmap$.$_mapName$, $areaId$$inline_4307_displayTooltips$$inline_4304_linkObj$$2$$) : D.$DvtBaseMapManager$$.$getLongAreaLabel$($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_4320$$.$_tmap$.$_mapName$, 
      $layer$$7$$.$LayerName$, $areaId$$inline_4307_displayTooltips$$inline_4304_linkObj$$2$$));
      $cssStyle$$11_labelText$$inline_4316_preDatatip$$inline_4306$$ && ($areaId$$6_datatip$$inline_4305_destination$$2_labelDisplay$$inline_4317$$ = $areaId$$6_datatip$$inline_4305_destination$$2_labelDisplay$$inline_4317$$ ? $cssStyle$$11_labelText$$inline_4316_preDatatip$$inline_4306$$ + ": " + $areaId$$6_datatip$$inline_4305_destination$$2_labelDisplay$$inline_4317$$ : $cssStyle$$11_labelText$$inline_4316_preDatatip$$inline_4306$$)
    }
    $areaId$$6_datatip$$inline_4305_destination$$2_labelDisplay$$inline_4317$$ && $dataObj$$11$$.$setDatatip$($areaId$$6_datatip$$inline_4305_destination$$2_labelDisplay$$inline_4317$$)
  }
  $cssStyle$$11_labelText$$inline_4316_preDatatip$$inline_4306$$ = new D.$DvtCSSStyle$$;
  $cssStyle$$11_labelText$$inline_4316_preDatatip$$inline_4306$$.$setStyle$("background-color", $data$$84$$.color);
  $cssStyle$$11_labelText$$inline_4316_preDatatip$$inline_4306$$.$setStyle$("pattern", $data$$84$$.pattern);
  $cssStyle$$11_labelText$$inline_4316_preDatatip$$inline_4306$$.$setStyle$("border-color", $data$$84$$.borderColor);
  $cssStyle$$11_labelText$$inline_4316_preDatatip$$inline_4306$$.$setStyle$("border-style", $data$$84$$.borderStyle);
  $data$$84$$.borderWidth && $cssStyle$$11_labelText$$inline_4316_preDatatip$$inline_4306$$.$setStyle$("border-width", $data$$84$$.borderWidth);
  $cssStyle$$11_labelText$$inline_4316_preDatatip$$inline_4306$$.$setStyle$("opacity", $data$$84$$.opacity);
  (0,D.$JSCompiler_StaticMethods__styleDisplayable$$)($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_4320$$, $cssStyle$$11_labelText$$inline_4316_preDatatip$$inline_4306$$, $areaId$$inline_4315_displayable$$42$$, $dataObj$$11$$);
  $areaId$$inline_4315_displayable$$42$$ = $data$$84$$.location;
  $areaId$$6_datatip$$inline_4305_destination$$2_labelDisplay$$inline_4317$$ = ($cssStyle$$11_labelText$$inline_4316_preDatatip$$inline_4306$$ = $data$$84$$.label) ? "on" : "off";
  $isParentAreaDataLayer$$1$$ && ($areaId$$6_datatip$$inline_4305_destination$$2_labelDisplay$$inline_4317$$ = $layer$$7$$.$getLabelDisplay$());
  if(!$cssStyle$$11_labelText$$inline_4316_preDatatip$$inline_4306$$ && $isParentAreaDataLayer$$1$$ && ($dataObj$$11$$ instanceof D.$DvtMapDataArea$$ && "off" != $areaId$$6_datatip$$inline_4305_destination$$2_labelDisplay$$inline_4317$$ || !($dataObj$$11$$ instanceof D.$DvtMapDataArea$$) && "on" == $areaId$$6_datatip$$inline_4305_destination$$2_labelDisplay$$inline_4317$$)) {
    $cssStyle$$11_labelText$$inline_4316_preDatatip$$inline_4306$$ = "long" == $layer$$7$$.$_labelType$ ? $layer$$7$$.$AreaNames$[$areaId$$inline_4315_displayable$$42$$][1] : $layer$$7$$.$AreaNames$[$areaId$$inline_4315_displayable$$42$$][0]
  }
  if($cssStyle$$11_labelText$$inline_4316_preDatatip$$inline_4306$$) {
    var $context$$inline_4318_label$$inline_4319$$ = $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_4320$$.$_tmap$.$_context$, $context$$inline_4318_label$$inline_4319$$ = $dataObj$$11$$ instanceof D.$DvtMapDataMarker$$ ? new D.$DvtOutputText$$($context$$inline_4318_label$$inline_4319$$, $cssStyle$$11_labelText$$inline_4316_preDatatip$$inline_4306$$, 0, 0) : new D.$DvtMapLabel$$($context$$inline_4318_label$$inline_4319$$, $cssStyle$$11_labelText$$inline_4316_preDatatip$$inline_4306$$, 
    $layer$$7$$.$getLabelInfoForArea$ ? $layer$$7$$.$getLabelInfoForArea$($areaId$$inline_4315_displayable$$42$$) : D.$JSCompiler_alias_NULL$$, $areaId$$6_datatip$$inline_4305_destination$$2_labelDisplay$$inline_4317$$, $dataLayer$$12$$.$_dataLabelLayer$, $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_4320$$.$_tmap$.$_bSupportsVectorEffects$);
    $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_4320$$ = new D.$DvtCSSStyle$$($data$$84$$.labelStyle);
    $context$$inline_4318_label$$inline_4319$$ instanceof D.$DvtMapLabel$$ && ($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_4320$$.$getStyle$("color") || $JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_4320$$.$setStyle$("color", D.$DvtColorUtils$$.$getContrastingTextColor$($dataObj$$11$$.$getDatatipColor$())));
    $context$$inline_4318_label$$inline_4319$$.$setCSSStyle$($JSCompiler_StaticMethods__parseCommonData$self_labelStyle$$inline_4320$$)
  }
  $dataObj$$11$$.$setLabel$($context$$inline_4318_label$$inline_4319$$)
};
D.$JSCompiler_StaticMethods__styleDisplayable$$ = function $$JSCompiler_StaticMethods__styleDisplayable$$$($JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_4329$$, $borderColor$$13_cssStyle$$12$$, $displayable$$43$$, $dataObj$$14_stroke$$51$$) {
  $borderColor$$13_cssStyle$$12$$ || ($borderColor$$13_cssStyle$$12$$ = {});
  var $pattern$$8$$ = $borderColor$$13_cssStyle$$12$$.$getStyle$("pattern"), $backgroundColor$$4$$ = $borderColor$$13_cssStyle$$12$$.$getStyle$("background-color");
  $dataObj$$14_stroke$$51$$ && $dataObj$$14_stroke$$51$$.$setDatatipColor$($backgroundColor$$4$$);
  if($displayable$$43$$ instanceof D.$DvtMarker$$ && (0,D.$DvtMarker$isBuiltInShape$$)($displayable$$43$$.$getType$())) {
    "none" != $borderColor$$13_cssStyle$$12$$.$getStyle$("border-style") && ($dataObj$$14_stroke$$51$$ = new D.$DvtSolidStroke$$($borderColor$$13_cssStyle$$12$$.$getStyle$("border-color"), 1, $borderColor$$13_cssStyle$$12$$.$getStyle$("border-width")), $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_4329$$.$_tmap$.$_isMarkerZoomBehaviorFixed$ || ($dataObj$$14_stroke$$51$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), $dataObj$$14_stroke$$51$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($borderColor$$13_cssStyle$$12$$.$getStyle$("border-style"))), 
    $displayable$$43$$.$setStroke$($dataObj$$14_stroke$$51$$));
    var $opacity$$3$$ = $borderColor$$13_cssStyle$$12$$.$getStyle$("opacity");
    "true" == D.$JSCompiler_alias_FALSE$$ && $backgroundColor$$4$$ ? $displayable$$43$$.$setFill$(new D.$DvtMarkerGradient$$.$createMarkerGradient$($backgroundColor$$4$$, $displayable$$43$$, $opacity$$3$$)) : $pattern$$8$$ ? $displayable$$43$$.$setFill$(new D.$DvtPatternFill$$($pattern$$8$$, $backgroundColor$$4$$, "#FFFFFF")) : $backgroundColor$$4$$ ? $displayable$$43$$.$setSolidFill$($backgroundColor$$4$$, $opacity$$3$$) : $displayable$$43$$.$setSolidFill$($borderColor$$13_cssStyle$$12$$.$getStyle$("background-color"), 
    $opacity$$3$$)
  }else {
    if($displayable$$43$$ instanceof D.$DvtPath$$) {
      if(($borderColor$$13_cssStyle$$12$$ = $borderColor$$13_cssStyle$$12$$.$getStyle$("border-color")) && "transparent" != $borderColor$$13_cssStyle$$12$$) {
        $dataObj$$14_stroke$$51$$ = new D.$DvtSolidStroke$$($borderColor$$13_cssStyle$$12$$), $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_4329$$.$_tmap$.$_bSupportsVectorEffects$ && ($dataObj$$14_stroke$$51$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$), $displayable$$43$$.$setStroke$($dataObj$$14_stroke$$51$$)
      }
      $pattern$$8$$ ? ($JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_4329$$ = new D.$DvtPatternFill$$($pattern$$8$$, $backgroundColor$$4$$, "#FFFFFF"), $displayable$$43$$.$_ptFill$ = $JSCompiler_StaticMethods__styleDisplayable$self_fill$$inline_4329$$) : "transparent" != $backgroundColor$$4$$ ? $displayable$$43$$.$setSolidFill$($backgroundColor$$4$$, $opacity$$3$$) : $displayable$$43$$.$setFill$(D.$JSCompiler_alias_NULL$$)
    }
  }
};
D.$DvtThematicMapProjections$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapProjections$$, D.$DvtObj$$, "DvtThematicMapProjections");
D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$ = new D.$DvtRectangle$$(0, 0, 800, 500);
D.$DvtThematicMapProjections$$.$_RADIUS$ = 6378206.4;
D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$ = new D.$DvtRectangle$$(500, 200, 200, 200);
D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$ = new D.$DvtRectangle$$(163, -49, 17, 17);
D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$ = new D.$DvtRectangle$$(-17.379205428479874, -37.201510854305546, 68.66391442808313, 77.50071544582713);
D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$ = new D.$DvtRectangle$$(-0.8436866097568272, -0.7626456732012923, 1.8336308036296942, 1.5748427214611724);
D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$ = new D.$DvtRectangle$$(113.29667079927977, -52.89550592498755, 65.25257389065216, 42.123114617504626);
D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$ = new D.$DvtRectangle$$(-0.47944476148667076, -0.0014669405958800579, 0.7364925893845453, 0.6293972741802124);
D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-0.6154469465354344, -0.24589767758847714, 1.2448236795108683, 1.2631535127174947);
D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-80.60817722658722, -60.796273249672765, 46.608687602908056, 66.96595767361796);
D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$ = new D.$DvtRectangle$$(68.20516856593524, -52.89892708045518, 111.65739821771903, 116.55460214469134);
D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$ = new D.$DvtRectangle$$(-24.543831069368586, -37.202500659225905, 204.54283106936856, 164.9634493690208);
D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$ = new D.$DvtRectangle$$(-117.12451221229134, -54.95921623126266, 82.33223251442891, 87.67786623127876);
D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$ = new D.$DvtRectangle$$(-0.6154656300926513, 0.0507209798775865, 1.0153104799231851, 0.966537441082997);
D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$ = new D.$DvtRectangle$$(-171.9, -62.6, 349.8, 150.8);
D.$DvtThematicMapProjections$$.$_ALASKA1_RECT$ = new D.$DvtRectangle$$(172, 51, 8, 3);
D.$DvtThematicMapProjections$$.$_ALASKA2_RECT$ = new D.$DvtRectangle$$(-180, 51, 51, 21);
D.$DvtThematicMapProjections$$.$_HAWAII_RECT$ = new D.$DvtRectangle$$(-178.5, 18.9, 35, 11);
D.$DvtThematicMapProjections$$.$_USA_RECT$ = new D.$DvtRectangle$$(-124.8, 24.4, 58, 25.5);
D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$ = new D.$DvtRectangle$$(-187.5517578125, 59.82610321044922, 57.562225341796875, 43.83738708496094);
D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$ = new D.$DvtRectangle$$(-160.23606872558594, 18.91549301147461, 5.4374847412109375, 3.3189010620117188);
D.$DvtThematicMapProjections$$.$_USA_BOUNDS$ = new D.$DvtRectangle$$(-2386803.25, -1183550.5, 4514111, 2908402);
D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$ = new D.$DvtRectangle$$(165, 400, 100, 100);
D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$ = new D.$DvtRectangle$$(-75, 350, 240, 150);
D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$ = [[1, 0], [0.9986, 0.0314], [0.9954, 0.0629], [0.99, 0.0943], [0.9822, 0.1258], [0.973, 0.1572], [0.96, 0.1887], [0.9427, 0.2201], [0.9216, 0.2515], [0.8962, 0.2826], [0.8679, 0.3132], [0.835, 0.3433], [0.7986, 0.3726], [0.7597, 0.4008], [0.6732, 0.4532], [0.6213, 0.4765], [0.5722, 0.4951], [0.5322, 0.5072]];
D.$DvtThematicMapProjections$$.$project$ = function $$DvtThematicMapProjections$$$$project$$($x$$132$$, $y$$111$$, $basemap$$1$$) {
  var $point$$23$$;
  switch($basemap$$1$$) {
    case "africa":
      $point$$23$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$132$$, $y$$111$$));
      break;
    case "asia":
      $point$$23$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(40, 95, 20, 60, $x$$132$$, $y$$111$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "australia":
      $point$$23$$ = D.$DvtThematicMapProjections$$.$_getAustraliaProjection$($x$$132$$, $y$$111$$);
      break;
    case "europe":
      $point$$23$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(35, 25, 40, 65, $x$$132$$, $y$$111$$), D.$DvtThematicMapProjections$$.$toRadians$(10));
      break;
    case "northAmerica":
      $point$$23$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $x$$132$$, $y$$111$$));
      break;
    case "southAmerica":
      $point$$23$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$132$$, $y$$111$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "apac":
      $point$$23$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$132$$, $y$$111$$));
      break;
    case "emea":
      $point$$23$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$132$$, $y$$111$$));
      break;
    case "latinAmerica":
      $point$$23$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$132$$, $y$$111$$));
      break;
    case "usaAndCanada":
      $point$$23$$ = D.$DvtThematicMapProjections$$.$_getAffineProjection$(D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$(23, -96, 20, 60, $x$$132$$, $y$$111$$));
      break;
    case "worldRegions":
      $point$$23$$ = D.$DvtThematicMapProjections$$.$_getWorldProjection$($x$$132$$, $y$$111$$);
      break;
    case "usa":
      $point$$23$$ = D.$DvtThematicMapProjections$$.$_getUSAProjection$($x$$132$$, $y$$111$$);
      break;
    case "world":
      $point$$23$$ = D.$DvtThematicMapProjections$$.$_getWorldProjection$($x$$132$$, $y$$111$$)
  }
  return $point$$23$$ ? new D.$DvtPoint$$(10 * $point$$23$$.x, 10 * $point$$23$$.y) : new D.$DvtPoint$$($x$$132$$, $y$$111$$)
};
D.$DvtThematicMapProjections$$.$_getUSAProjection$ = function $$DvtThematicMapProjections$$$$_getUSAProjection$$($x$$133$$, $y$$112$$) {
  var $viewPortTransform$$;
  return(0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA1_RECT$, $x$$133$$, $y$$112$$) || (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA2_RECT$, $x$$133$$, $y$$112$$) ? ($viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$), D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$, 
  D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$133$$, $y$$112$$))) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_HAWAII_RECT$, $x$$133$$, $y$$112$$) ? ($viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$), D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$, new D.$DvtPoint$$($x$$133$$, $y$$112$$))) : 
  (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_USA_RECT$, $x$$133$$, $y$$112$$) ? ($viewPortTransform$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_USA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$, D.$DvtThematicMapProjections$$.$_getOrthographicProjection$(new D.$DvtPoint$$(-95, 36), $x$$133$$, $y$$112$$))) : new D.$DvtPoint$$($x$$133$$, 
  $y$$112$$)
};
D.$DvtThematicMapProjections$$.$_getWorldProjection$ = function $$DvtThematicMapProjections$$$$_getWorldProjection$$($x$$134$$, $y$$113$$) {
  var $viewPortTransform$$1$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  return D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$1$$, D.$DvtThematicMapProjections$$.$_getRobinsonProjection$($x$$134$$, $y$$113$$))
};
D.$DvtThematicMapProjections$$.$_getAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getAustraliaProjection$$($x$$135$$, $y$$114$$) {
  var $viewPortTransform$$2$$;
  $viewPortTransform$$2$$ = (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, $x$$135$$, $y$$114$$) ? D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  return D.$DvtThematicMapProjections$$.$_applyAffineTransform$($viewPortTransform$$2$$, D.$DvtThematicMapProjections$$.$_getMercatorProjection$($x$$135$$, $y$$114$$))
};
D.$DvtThematicMapProjections$$.$_getAffineProjection$ = function $$DvtThematicMapProjections$$$$_getAffineProjection$$($mapBounds_viewPortTransform$$3$$, $point$$24$$, $rotRadians$$) {
  $mapBounds_viewPortTransform$$3$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$($mapBounds_viewPortTransform$$3$$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  if($rotRadians$$) {
    var $rotMatrix$$ = new D.$DvtMatrix$$;
    $rotMatrix$$.rotate($rotRadians$$);
    $mapBounds_viewPortTransform$$3$$ = D.$DvtThematicMapProjections$$.$_concatAffineTransforms$($mapBounds_viewPortTransform$$3$$, $rotMatrix$$)
  }
  return(0,D.$JSCompiler_StaticMethods_transformPoint$$)($mapBounds_viewPortTransform$$3$$, $point$$24$$)
};
D.$DvtThematicMapProjections$$.$_getAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getAlbersEqualAreaConicProjection$$($latOfOrigin_phi0_rho0$$, $lambda0_lonOfOrigin$$, $c$$15_sP1$$, $n$$29_sP2$$, $theta$$1_x$$136$$, $rho_y$$115$$) {
  $lambda0_lonOfOrigin$$ = D.$DvtThematicMapProjections$$.$toRadians$($lambda0_lonOfOrigin$$);
  $latOfOrigin_phi0_rho0$$ = D.$DvtThematicMapProjections$$.$toRadians$($latOfOrigin_phi0_rho0$$);
  $c$$15_sP1$$ = D.$DvtThematicMapProjections$$.$toRadians$($c$$15_sP1$$);
  $n$$29_sP2$$ = D.$DvtThematicMapProjections$$.$toRadians$($n$$29_sP2$$);
  $n$$29_sP2$$ = 0.5 * (window.Math.sin($c$$15_sP1$$) + window.Math.sin($n$$29_sP2$$));
  $c$$15_sP1$$ = window.Math.pow(window.Math.cos($c$$15_sP1$$), 2) + 2 * $n$$29_sP2$$ * window.Math.sin($c$$15_sP1$$);
  $latOfOrigin_phi0_rho0$$ = $c$$15_sP1$$ - 2 * $n$$29_sP2$$ * window.Math.sin($latOfOrigin_phi0_rho0$$);
  $latOfOrigin_phi0_rho0$$ = window.Math.sqrt($latOfOrigin_phi0_rho0$$) / $n$$29_sP2$$;
  $theta$$1_x$$136$$ = $n$$29_sP2$$ * (D.$DvtThematicMapProjections$$.$toRadians$($theta$$1_x$$136$$) - $lambda0_lonOfOrigin$$);
  $rho_y$$115$$ = $c$$15_sP1$$ - 2 * $n$$29_sP2$$ * window.Math.sin(D.$DvtThematicMapProjections$$.$toRadians$($rho_y$$115$$));
  $rho_y$$115$$ = window.Math.sqrt($rho_y$$115$$) / $n$$29_sP2$$;
  return new D.$DvtPoint$$($rho_y$$115$$ * window.Math.sin($theta$$1_x$$136$$), $latOfOrigin_phi0_rho0$$ - $rho_y$$115$$ * window.Math.cos($theta$$1_x$$136$$))
};
D.$DvtThematicMapProjections$$.$_getMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getMercatorProjection$$($x$$137$$, $y$$116$$) {
  var $pY$$1$$ = window.Math.log(window.Math.tan(0.25 * window.Math.PI + 0.5 * D.$DvtThematicMapProjections$$.$toRadians$($y$$116$$)));
  return new D.$DvtPoint$$($x$$137$$, D.$DvtThematicMapProjections$$.$toDegrees$($pY$$1$$))
};
D.$DvtThematicMapProjections$$.$_getOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getOrthographicProjection$$($center$$13_centerY$$, $radX_x$$138$$, $radY_y$$117$$) {
  $radX_x$$138$$ = D.$DvtThematicMapProjections$$.$toRadians$($radX_x$$138$$);
  $radY_y$$117$$ = D.$DvtThematicMapProjections$$.$toRadians$($radY_y$$117$$);
  var $centerX$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$13_centerY$$.x);
  $center$$13_centerY$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$13_centerY$$.y);
  return new D.$DvtPoint$$(window.Math.cos($radY_y$$117$$) * window.Math.sin($radX_x$$138$$ - $centerX$$) * D.$DvtThematicMapProjections$$.$_RADIUS$, (window.Math.cos($center$$13_centerY$$) * window.Math.sin($radY_y$$117$$) - window.Math.sin($center$$13_centerY$$) * window.Math.cos($radY_y$$117$$) * window.Math.cos($radX_x$$138$$ - $centerX$$)) * D.$DvtThematicMapProjections$$.$_RADIUS$)
};
D.$DvtThematicMapProjections$$.$_getRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getRobinsonProjection$$($x$$139$$, $y$$118$$) {
  var $newY$$6_ycriteria$$ = window.Math.floor(window.Math.abs($y$$118$$) / 5);
  $newY$$6_ycriteria$$ >= D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($newY$$6_ycriteria$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
  var $yInterval$$ = (window.Math.abs($y$$118$$) - 5 * $newY$$6_ycriteria$$) / 5, $newX$$5$$ = $x$$139$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$6_ycriteria$$][0] + $yInterval$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$6_ycriteria$$ + 1][0] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$6_ycriteria$$][0])), $newY$$6_ycriteria$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$6_ycriteria$$][1] + $yInterval$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$6_ycriteria$$ + 
  1][1] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$newY$$6_ycriteria$$][1]);
  0 > $y$$118$$ && ($newY$$6_ycriteria$$ *= -1);
  return new D.$DvtPoint$$($newX$$5$$, 180 * $newY$$6_ycriteria$$)
};
D.$DvtThematicMapProjections$$.$_applyAffineTransform$ = function $$DvtThematicMapProjections$$$$_applyAffineTransform$$($matrix$$10$$, $point$$25$$) {
  return new D.$DvtPoint$$($point$$25$$.x * $matrix$$10$$.$_a$ + $matrix$$10$$.$_tx$, $point$$25$$.y * $matrix$$10$$.$_d$ + $matrix$$10$$.$_ty$)
};
D.$DvtThematicMapProjections$$.$_concatAffineTransforms$ = function $$DvtThematicMapProjections$$$$_concatAffineTransforms$$($transform1$$, $transform2$$) {
  var $t1A$$ = $transform1$$.$_a$, $t1D$$ = $transform1$$.$_d$;
  return new D.$DvtMatrix$$($transform2$$.$_a$ * $t1A$$, $transform2$$.$_b$ * $t1A$$, $transform2$$.$_c$ * $t1D$$, $transform2$$.$_d$ * $t1D$$, $transform1$$.$_tx$ + $transform2$$.$_tx$ * $t1A$$, $transform1$$.$_ty$ + $transform2$$.$_ty$ * $t1D$$)
};
D.$DvtThematicMapProjections$$.$_getViewPortTransformation$ = function $$DvtThematicMapProjections$$$$_getViewPortTransformation$$($mapBound$$, $deviceView$$) {
  var $d5_i$$421$$ = $deviceView$$.x, $d6_j$$77$$ = $deviceView$$.y, $d$$4$$ = $mapBound$$.$w$, $d1$$ = $mapBound$$.$h$, $d2_d3$$ = 0, $d2_d3$$ = $deviceView$$.$w$ / $d$$4$$, $d4$$ = $deviceView$$.$h$ / $d1$$, $d2_d3$$ = $d2_d3$$ <= $d4$$ ? $d2_d3$$ : $d4$$, $d5_i$$421$$ = $d5_i$$421$$ - $mapBound$$.x * $d2_d3$$, $d6_j$$77$$ = $d6_j$$77$$ + $mapBound$$.y * $d2_d3$$, $d5_i$$421$$ = $d5_i$$421$$ + ($deviceView$$.$w$ - $d$$4$$ * $d2_d3$$) / 2, $d6_j$$77$$ = $d6_j$$77$$ + ($deviceView$$.$h$ - ($deviceView$$.$h$ - 
  $d1$$ * $d2_d3$$) / 2);
  return new D.$DvtMatrix$$($d2_d3$$, 0, 0, -$d2_d3$$, $d5_i$$421$$, $d6_j$$77$$)
};
D.$DvtThematicMapProjections$$.$toRadians$ = function $$DvtThematicMapProjections$$$$toRadians$$($x$$140$$) {
  return $x$$140$$ * (window.Math.PI / 180)
};
D.$DvtThematicMapProjections$$.$toDegrees$ = function $$DvtThematicMapProjections$$$$toDegrees$$($x$$141$$) {
  return $x$$141$$ * (180 / window.Math.PI)
};
D.$DvtThematicMapProjections$$.$inverseProject$ = function $$DvtThematicMapProjections$$$$inverseProject$$($x$$142$$, $y$$119$$, $basemap$$2$$) {
  var $point$$26$$;
  $x$$142$$ /= 10;
  $y$$119$$ /= 10;
  switch($basemap$$2$$) {
    case "africa":
      $point$$26$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_AFRICA_BOUNDS$, new D.$DvtPoint$$($x$$142$$, $y$$119$$));
      $point$$26$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$26$$.x, $point$$26$$.y);
      break;
    case "asia":
      $point$$26$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_ASIA_BOUNDS$, new D.$DvtPoint$$($x$$142$$, $y$$119$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      $point$$26$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(40, 95, 20, 60, $point$$26$$.x, $point$$26$$.y);
      break;
    case "australia":
      $point$$26$$ = D.$DvtThematicMapProjections$$.$_getInverseAustraliaProjection$($x$$142$$, $y$$119$$);
      break;
    case "europe":
      $point$$26$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_EUROPE_BOUNDS$, new D.$DvtPoint$$($x$$142$$, $y$$119$$), D.$DvtThematicMapProjections$$.$toRadians$(10));
      $point$$26$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(35, 25, 40, 65, $point$$26$$.x, $point$$26$$.y);
      break;
    case "northAmerica":
      $point$$26$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_N_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$142$$, $y$$119$$));
      $point$$26$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $point$$26$$.x, $point$$26$$.y);
      break;
    case "southAmerica":
      $point$$26$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_S_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$142$$, $y$$119$$), D.$DvtThematicMapProjections$$.$toRadians$(5));
      break;
    case "apac":
      $point$$26$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_APAC_BOUNDS$, new D.$DvtPoint$$($x$$142$$, $y$$119$$));
      $point$$26$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$26$$.x, $point$$26$$.y);
      break;
    case "emea":
      $point$$26$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_EMEA_BOUNDS$, new D.$DvtPoint$$($x$$142$$, $y$$119$$));
      $point$$26$$ = D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$26$$.x, $point$$26$$.y);
      break;
    case "latinAmerica":
      $point$$26$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_L_AMERICA_BOUNDS$, new D.$DvtPoint$$($x$$142$$, $y$$119$$));
      break;
    case "usaAndCanada":
      $point$$26$$ = D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$(D.$DvtThematicMapProjections$$.$_USA_CANADA_BOUNDS$, new D.$DvtPoint$$($x$$142$$, $y$$119$$));
      $point$$26$$ = D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$(23, -96, 20, 60, $point$$26$$.x, $point$$26$$.y);
      break;
    case "worldRegions":
      $point$$26$$ = D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$($x$$142$$, $y$$119$$);
      break;
    case "usa":
      $point$$26$$ = D.$DvtThematicMapProjections$$.$_getInverseUSAProjection$($x$$142$$, $y$$119$$);
      break;
    case "world":
      $point$$26$$ = D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$($x$$142$$, $y$$119$$)
  }
  return $point$$26$$ ? $point$$26$$ : new D.$DvtPoint$$($x$$142$$, $y$$119$$)
};
D.$DvtThematicMapProjections$$.$_getInverseUSAProjection$ = function $$DvtThematicMapProjections$$$$_getInverseUSAProjection$$($x$$143$$, $y$$120$$) {
  var $point$$27_viewPortTransform$$4$$;
  return(0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$, $x$$143$$, $y$$120$$) ? ($point$$27_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_ALASKA_BOUNDS$, D.$DvtThematicMapProjections$$.$_ALASKA_WINDOW$), $point$$27_viewPortTransform$$4$$.$invert$(), $point$$27_viewPortTransform$$4$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$27_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$143$$, 
  $y$$120$$)), D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$27_viewPortTransform$$4$$.x, $point$$27_viewPortTransform$$4$$.y)) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$, $x$$143$$, $y$$120$$) ? ($point$$27_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_HAWAII_BOUNDS$, D.$DvtThematicMapProjections$$.$_HAWAII_WINDOW$), $point$$27_viewPortTransform$$4$$.$invert$(), 
  (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$27_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$143$$, $y$$120$$))) : (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$, $x$$143$$, $y$$120$$) ? ($point$$27_viewPortTransform$$4$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_USA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$), $point$$27_viewPortTransform$$4$$.$invert$(), $point$$27_viewPortTransform$$4$$ = 
  (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$27_viewPortTransform$$4$$, new D.$DvtPoint$$($x$$143$$, $y$$120$$)), D.$DvtThematicMapProjections$$.$_getInverseOrthographicProjection$(new D.$DvtPoint$$(-95, 36), $point$$27_viewPortTransform$$4$$.x, $point$$27_viewPortTransform$$4$$.y)) : new D.$DvtPoint$$($x$$143$$, $y$$120$$)
};
D.$DvtThematicMapProjections$$.$_getInverseWorldProjection$ = function $$DvtThematicMapProjections$$$$_getInverseWorldProjection$$($x$$144$$, $y$$121$$) {
  var $point$$28_viewPortTransform$$5$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_WORLD_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  $point$$28_viewPortTransform$$5$$.$invert$();
  $point$$28_viewPortTransform$$5$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$28_viewPortTransform$$5$$, new D.$DvtPoint$$($x$$144$$, $y$$121$$));
  return D.$DvtThematicMapProjections$$.$_getInverseRobinsonProjection$($point$$28_viewPortTransform$$5$$.x, $point$$28_viewPortTransform$$5$$.y)
};
D.$DvtThematicMapProjections$$.$_getInverseAustraliaProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAustraliaProjection$$($x$$145$$, $y$$122$$) {
  var $point$$29_viewPortTransform$$6$$;
  $point$$29_viewPortTransform$$6$$ = (0,D.$JSCompiler_StaticMethods_containsPoint$$)(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$, $x$$145$$, $y$$122$$) ? D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_BOUNDS$, D.$DvtThematicMapProjections$$.$_NEW_ZEALAND_RECT$) : D.$DvtThematicMapProjections$$.$_getViewPortTransformation$(D.$DvtThematicMapProjections$$.$_AUSTRALIA_BOUNDS$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  $point$$29_viewPortTransform$$6$$.$invert$();
  $point$$29_viewPortTransform$$6$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($point$$29_viewPortTransform$$6$$, new D.$DvtPoint$$($x$$145$$, $y$$122$$));
  return D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$($point$$29_viewPortTransform$$6$$.x, $point$$29_viewPortTransform$$6$$.y)
};
D.$DvtThematicMapProjections$$.$_getInverseAffineProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAffineProjection$$($mapBounds$$1_viewPortTransform$$7$$, $point$$30$$, $rotRadians$$1$$) {
  $mapBounds$$1_viewPortTransform$$7$$ = D.$DvtThematicMapProjections$$.$_getViewPortTransformation$($mapBounds$$1_viewPortTransform$$7$$, D.$DvtThematicMapProjections$$.$_VIEWPORT_BOUNDS$);
  if($rotRadians$$1$$) {
    var $rotMatrix$$1$$ = new D.$DvtMatrix$$;
    $rotMatrix$$1$$.rotate($rotRadians$$1$$);
    $mapBounds$$1_viewPortTransform$$7$$ = D.$DvtThematicMapProjections$$.$_concatAffineTransforms$($mapBounds$$1_viewPortTransform$$7$$, $rotMatrix$$1$$)
  }
  $mapBounds$$1_viewPortTransform$$7$$.$invert$();
  return(0,D.$JSCompiler_StaticMethods_transformPoint$$)($mapBounds$$1_viewPortTransform$$7$$, $point$$30$$)
};
D.$DvtThematicMapProjections$$.$_getInverseAlbersEqualAreaConicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseAlbersEqualAreaConicProjection$$($latOfOrigin$$1_p0_phi0$$1$$, $lambda0$$1_lonOfOrigin$$1$$, $c$$17_sP1$$1$$, $n$$30_sP2$$1$$, $x$$146$$, $y$$123$$) {
  $lambda0$$1_lonOfOrigin$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($lambda0$$1_lonOfOrigin$$1$$);
  $latOfOrigin$$1_p0_phi0$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($latOfOrigin$$1_p0_phi0$$1$$);
  $c$$17_sP1$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($c$$17_sP1$$1$$);
  $n$$30_sP2$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($n$$30_sP2$$1$$);
  $n$$30_sP2$$1$$ = 0.5 * (window.Math.sin($c$$17_sP1$$1$$) + window.Math.sin($n$$30_sP2$$1$$));
  $c$$17_sP1$$1$$ = window.Math.pow(window.Math.cos($c$$17_sP1$$1$$), 2) + 2 * $n$$30_sP2$$1$$ * window.Math.sin($c$$17_sP1$$1$$);
  $latOfOrigin$$1_p0_phi0$$1$$ = $c$$17_sP1$$1$$ - 2 * $n$$30_sP2$$1$$ * window.Math.sin($latOfOrigin$$1_p0_phi0$$1$$);
  $latOfOrigin$$1_p0_phi0$$1$$ = window.Math.sqrt($latOfOrigin$$1_p0_phi0$$1$$) / $n$$30_sP2$$1$$;
  var $p$$5$$ = window.Math.sqrt($x$$146$$ * $x$$146$$ + ($latOfOrigin$$1_p0_phi0$$1$$ - $y$$123$$) * ($latOfOrigin$$1_p0_phi0$$1$$ - $y$$123$$));
  return new D.$DvtPoint$$(D.$DvtThematicMapProjections$$.$toDegrees$($lambda0$$1_lonOfOrigin$$1$$ + window.Math.atan($x$$146$$ / ($latOfOrigin$$1_p0_phi0$$1$$ - $y$$123$$)) / $n$$30_sP2$$1$$), D.$DvtThematicMapProjections$$.$toDegrees$(window.Math.asin(($c$$17_sP1$$1$$ - $p$$5$$ * $p$$5$$ * $n$$30_sP2$$1$$ * $n$$30_sP2$$1$$) / (2 * $n$$30_sP2$$1$$))))
};
D.$DvtThematicMapProjections$$.$_getInverseMercatorProjection$ = function $$DvtThematicMapProjections$$$$_getInverseMercatorProjection$$($x$$147$$, $y$$124$$) {
  return new D.$DvtPoint$$($x$$147$$, D.$DvtThematicMapProjections$$.$toDegrees$(2 * window.Math.atan(window.Math.exp(D.$DvtThematicMapProjections$$.$toRadians$($y$$124$$))) - 0.5 * window.Math.PI))
};
D.$DvtThematicMapProjections$$.$_getInverseOrthographicProjection$ = function $$DvtThematicMapProjections$$$$_getInverseOrthographicProjection$$($center$$14$$, $radX$$1_x$$148$$, $radY$$1_y$$125$$) {
  $radX$$1_x$$148$$ /= D.$DvtThematicMapProjections$$.$_RADIUS$;
  $radY$$1_y$$125$$ /= D.$DvtThematicMapProjections$$.$_RADIUS$;
  var $centerY$$1$$ = D.$DvtThematicMapProjections$$.$toRadians$($center$$14$$.y), $p$$6$$ = window.Math.sqrt($radX$$1_x$$148$$ * $radX$$1_x$$148$$ + $radY$$1_y$$125$$ * $radY$$1_y$$125$$), $c$$18$$ = window.Math.asin($p$$6$$);
  return new D.$DvtPoint$$(D.$DvtThematicMapProjections$$.$toDegrees$(D.$DvtThematicMapProjections$$.$toRadians$($center$$14$$.x) + window.Math.atan($radX$$1_x$$148$$ * window.Math.sin($c$$18$$) / ($p$$6$$ * window.Math.cos($centerY$$1$$) * window.Math.cos($c$$18$$) - $radY$$1_y$$125$$ * window.Math.sin($centerY$$1$$) * window.Math.sin($c$$18$$)))), D.$DvtThematicMapProjections$$.$toDegrees$(window.Math.asin(window.Math.cos($c$$18$$) * window.Math.sin($centerY$$1$$) + $radY$$1_y$$125$$ * window.Math.sin($c$$18$$) * 
  window.Math.cos($centerY$$1$$) / $p$$6$$)))
};
D.$DvtThematicMapProjections$$.$_getInverseRobinsonProjection$ = function $$DvtThematicMapProjections$$$$_getInverseRobinsonProjection$$($x$$149$$, $y$$126$$) {
  var $criteria$$1_originalX$$ = window.Math.floor(window.Math.abs($y$$126$$) / 5);
  $criteria$$1_originalX$$ >= D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 1 && ($criteria$$1_originalX$$ = D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$.length - 2);
  var $yInterval$$1$$ = (window.Math.abs($y$$126$$ / 180) - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$][1]) / (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$ + 1][1] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$][1]), $originalY$$ = 5 * $yInterval$$1$$ + 5 * $criteria$$1_originalX$$, $criteria$$1_originalX$$ = $x$$149$$ / (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$][0] + 
  $yInterval$$1$$ * (D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$ + 1][0] - D.$DvtThematicMapProjections$$.$_ROBINSON_COORDINATES$[$criteria$$1_originalX$$][0]));
  0 > $y$$126$$ && ($originalY$$ *= -1);
  return new D.$DvtPoint$$($criteria$$1_originalX$$, $originalY$$)
};
D.$DvtMapControlButton$$ = function $$DvtMapControlButton$$$($context$$215$$, $button$$28$$, $mapCallback$$, $panZoomCanvas$$3$$, $btype$$, $resources$$6$$, $eventManager$$8$$) {
  this.Init($context$$215$$, $button$$28$$, $mapCallback$$, $panZoomCanvas$$3$$, $btype$$, $resources$$6$$, $eventManager$$8$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtMapControlButton$$, D.$DvtBaseControl$$, "DvtMapControlButton");
D.$DvtMapControlButton$$.prototype.Init = function $$DvtMapControlButton$$$$Init$($context$$216_proxy$$6$$, $button$$29$$, $mapCallback$$1$$, $panZoomCanvas$$4$$, $btype$$1$$, $resources$$7$$, $eventManager$$9$$) {
  D.$DvtMapControlButton$$.$superclass$.Init.call(this, $context$$216_proxy$$6$$, $panZoomCanvas$$4$$, $resources$$7$$);
  this.$_btype$ = $btype$$1$$;
  this.$_button$ = $button$$29$$;
  this.$_eventManager$ = $eventManager$$9$$;
  (0,D.$JSCompiler_StaticMethods_setCallback$$)(this.$_button$, this.$HandleOnClick$, this);
  this.$_button$.setCursor("pointer");
  $context$$216_proxy$$6$$ = new D.$DvtControlPanelEventHandlerProxy$$(this, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, 0 == this.$_btype$ ? (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_DRILLUP") : 1 == this.$_btype$ ? (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "CONTROL_PANEL_DRILLDOWN") : 2 == this.$_btype$ ? (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, 
  "CONTROL_PANEL_RESET") : D.$JSCompiler_alias_NULL$$);
  this.$_eventManager$.$associate$(this.$_button$, $context$$216_proxy$$6$$);
  this.$addChild$(this.$_button$);
  this.$_mapCallback$ = $mapCallback$$1$$;
  this.$_isEnabled$ = D.$JSCompiler_alias_TRUE$$
};
D.$DvtMapControlButton$$.prototype.$setEnabled$ = function $$DvtMapControlButton$$$$$setEnabled$$($enabled$$7$$) {
  this.$setAlpha$($enabled$$7$$ ? 1 : 0.4);
  this.$_button$.setCursor($enabled$$7$$ ? "pointer" : D.$JSCompiler_alias_NULL$$);
  this.$_isEnabled$ = $enabled$$7$$;
  this.$_button$.$setEnabled$($enabled$$7$$);
  (0,D.$JSCompiler_StaticMethods_initState$$)(this.$_button$)
};
D.$DvtMapControlButton$$.prototype.$HandleOnClick$ = function $$DvtMapControlButton$$$$$HandleOnClick$$($event$$328$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$328$$);
  this.$_isEnabled$ && this.$_mapCallback$ && this.$_mapCallback$()
};
D.$DvtThematicMapControlPanel$$ = function $$DvtThematicMapControlPanel$$$($context$$213$$, $view$$26$$, $state$$23$$) {
  this.Init($context$$213$$, $view$$26$$, $state$$23$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtThematicMapControlPanel$$, D.$DvtControlPanel$$, "DvtThematicMapControlPanel");
D.$DvtThematicMapControlPanel$$.prototype.Init = function $$DvtThematicMapControlPanel$$$$Init$($context$$214$$, $view$$27$$, $state$$24$$) {
  D.$DvtThematicMapControlPanel$$.$superclass$.Init.call(this, $context$$214$$, $view$$27$$, $state$$24$$);
  this.$_drillMode$ = $view$$27$$.$_drillMode$;
  this.$_buttonImages$ = (0,D.$JSCompiler_StaticMethods_getResourcesMap$$)($view$$27$$);
  this.$_drillUpCallback$ = D.$DvtObj$$.$createCallback$($view$$27$$, $view$$27$$.$drillUp$);
  this.$_drillDownCallback$ = D.$DvtObj$$.$createCallback$($view$$27$$, $view$$27$$.$drillDown$);
  this.$_resetCallback$ = D.$DvtObj$$.$createCallback$($view$$27$$, $view$$27$$.$resetMap$);
  this.$_drillDownButton$ = this.$_drillUpButton$ = this.$_resetButton$ = D.$JSCompiler_alias_NULL$$;
  this.$_drillUpButtonEnabled$ = this.$_drillDownButtonEnabled$ = D.$JSCompiler_alias_FALSE$$;
  this.$_styleMap$ = $view$$27$$.$getSubcomponentStyles$()
};
D.$JSCompiler_StaticMethods_setEnabledDrillDownButton$$ = function $$JSCompiler_StaticMethods_setEnabledDrillDownButton$$$($JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$, $enable$$) {
  $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButtonEnabled$ = $enable$$;
  $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButton$ && $JSCompiler_StaticMethods_setEnabledDrillDownButton$self$$.$_drillDownButton$.$setEnabled$($enable$$)
};
D.$JSCompiler_StaticMethods_setEnabledDrillUpButton$$ = function $$JSCompiler_StaticMethods_setEnabledDrillUpButton$$$($JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$, $enable$$1$$) {
  $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButtonEnabled$ = $enable$$1$$;
  $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButton$ && $JSCompiler_StaticMethods_setEnabledDrillUpButton$self$$.$_drillUpButton$.$setEnabled$($enable$$1$$)
};
D.$DvtThematicMapControlPanel$$.prototype.$PopulateHorzContentBar$ = function $$DvtThematicMapControlPanel$$$$$PopulateHorzContentBar$$($contentSprite$$) {
  if(this.$_drillMode$ && "none" != this.$_drillMode$) {
    var $buttonOffset$$ = (0,D.$DvtStyleUtils$getStyle$$)(this.$_styleMap$, "buttonWidth", 0);
    this.$_resetButton$ = D.$DvtButtonLAFUtils$$.$createResetButton$(this.$_context$, this.$_resetCallback$, this.$_panZoomCanvas$, this.$Bundle$, this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    $contentSprite$$.$addChild$(this.$_resetButton$);
    this.$_drillDownButton$ = D.$DvtButtonLAFUtils$$.$createDrillDownButton$(this.$_context$, this.$_drillDownCallback$, this.$_panZoomCanvas$, this.$Bundle$, this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    this.$_drillDownButton$.$setTranslateX$($buttonOffset$$);
    this.$_drillDownButton$.$setEnabled$(this.$_drillDownButtonEnabled$);
    $contentSprite$$.$addChild$(this.$_drillDownButton$);
    this.$_drillUpButton$ = D.$DvtButtonLAFUtils$$.$createDrillUpButton$(this.$_context$, this.$_drillUpCallback$, this.$_panZoomCanvas$, this.$Bundle$, this.$_buttonImages$, this.$_eventManager$, this.$_styleMap$);
    this.$_drillUpButton$.$setTranslateX$(2 * $buttonOffset$$);
    this.$_drillUpButton$.$setEnabled$(this.$_drillUpButtonEnabled$);
    $contentSprite$$.$addChild$(this.$_drillUpButton$)
  }
};
});