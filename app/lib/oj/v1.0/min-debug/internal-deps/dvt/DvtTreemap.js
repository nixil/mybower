define(['./DvtToolkit', './DvtBaseTreeView'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtBaseTreemap$$ = function $$DvtBaseTreemap$$$($context$$381$$, $callback$$94$$, $callbackObj$$65$$) {
  this.Init($context$$381$$, $callback$$94$$, $callbackObj$$65$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreemap$$, D.$DvtBaseTreeView$$, "DvtBaseTreemap");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreemap$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$382$$, $callback$$95$$, $callbackObj$$66$$) {
  D.$DvtBaseTreemap$$.$superclass$.Init.call(this, $context$$382$$, $callback$$95$$, $callbackObj$$66$$);
  this.$Defaults$ = new D.$DvtTreemapDefaults$$
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($xmlString$$11$$) {
  return(new D.$DvtTreemapParser$$(this)).parse($xmlString$$11$$)
};
D.$JSCompiler_prototypeAlias$$.$ApplyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$ApplyParsedProperties$$($isolateRowKey$$inline_6181_props$$24$$) {
  D.$DvtBaseTreemap$$.$superclass$.$ApplyParsedProperties$.call(this, $isolateRowKey$$inline_6181_props$$24$$);
  this.$_layout$ = $isolateRowKey$$inline_6181_props$$24$$.$layout$;
  this.$_groupGaps$ = $isolateRowKey$$inline_6181_props$$24$$.$groupGaps$;
  this.$_layout$ && (this.$_layout$.$Sorting$ = this.$Sorting$);
  this.$_isolatedNodes$ = [];
  if(($isolateRowKey$$inline_6181_props$$24$$ = $isolateRowKey$$inline_6181_props$$24$$.$isolateRowKey$) && this.$_root$) {
    var $allNodes$$inline_6182$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)(this.$_root$);
    $allNodes$$inline_6182$$.push(this.$_root$);
    for(var $i$$inline_6183$$ = 0;$i$$inline_6183$$ < $allNodes$$inline_6182$$.length;$i$$inline_6183$$++) {
      if($allNodes$$inline_6182$$[$i$$inline_6183$$].getId() == $isolateRowKey$$inline_6181_props$$24$$) {
        this.$_isolatedNodes$.push($allNodes$$inline_6182$$[$i$$inline_6183$$]);
        break
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$Layout$ = function $$JSCompiler_prototypeAlias$$$$Layout$$($availSpace$$87$$) {
  var $bufferSpace_gap$$18_numIsolated$$ = window.Math.max(window.Math.ceil(7 * window.Math.min($availSpace$$87$$.$w$, $availSpace$$87$$.$h$) / 400), 2);
  $availSpace$$87$$.x += $bufferSpace_gap$$18_numIsolated$$;
  $availSpace$$87$$.y += $bufferSpace_gap$$18_numIsolated$$;
  $availSpace$$87$$.$w$ -= 2 * $bufferSpace_gap$$18_numIsolated$$;
  $availSpace$$87$$.$h$ -= 2 * $bufferSpace_gap$$18_numIsolated$$;
  $bufferSpace_gap$$18_numIsolated$$ = this.$_layout$.$getGapSize$(this, 1);
  $availSpace$$87$$.x += $bufferSpace_gap$$18_numIsolated$$;
  $availSpace$$87$$.$w$ -= 2 * $bufferSpace_gap$$18_numIsolated$$;
  (0,D.$JSCompiler_StaticMethods_LayoutBreadcrumbs$$)(this, $availSpace$$87$$);
  (0,D.$JSCompiler_StaticMethods_LayoutLegend$$)(this, $availSpace$$87$$);
  $availSpace$$87$$.x -= $bufferSpace_gap$$18_numIsolated$$;
  $availSpace$$87$$.$w$ += 2 * $bufferSpace_gap$$18_numIsolated$$;
  $bufferSpace_gap$$18_numIsolated$$ = this.$_isolatedNodes$.length;
  if(0 < $bufferSpace_gap$$18_numIsolated$$ && this.$_isolateRestoreLayout$) {
    this.$_layout$.$layout$(this, this.$_isolatedNodes$[$bufferSpace_gap$$18_numIsolated$$ - 1], $availSpace$$87$$.x, $availSpace$$87$$.y, $availSpace$$87$$.$w$, $availSpace$$87$$.$h$, D.$JSCompiler_alias_TRUE$$)
  }else {
    this.$_root$ && this.$_layout$.$layout$(this, this.$_root$, $availSpace$$87$$.x, $availSpace$$87$$.y, $availSpace$$87$$.$w$, $availSpace$$87$$.$h$, D.$JSCompiler_alias_FALSE$$);
    for(var $i$$592$$ = 0;$i$$592$$ < $bufferSpace_gap$$18_numIsolated$$;$i$$592$$++) {
      this.$_layout$.$layout$(this, this.$_isolatedNodes$[$i$$592$$], $availSpace$$87$$.x, $availSpace$$87$$.y, $availSpace$$87$$.$w$, $availSpace$$87$$.$h$, D.$JSCompiler_alias_TRUE$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$137_i$$593$$) {
  (0,D.$JSCompiler_StaticMethods_RenderBackground$$)(this, $container$$137_i$$593$$);
  this.$_breadcrumbs$ && $container$$137_i$$593$$.$addChild$(this.$_breadcrumbs$);
  this.$_legend$ && ($container$$137_i$$593$$.$addChild$(this.$_legend$), this.$_legend$ = D.$JSCompiler_alias_NULL$$);
  if((0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    this.$_groupTextLayer$ = new D.$DvtContainer$$(this.$_context$);
    $container$$137_i$$593$$.$addChild$(this.$_groupTextLayer$);
    this.$_isolatedNode$ ? this.$_isolatedNode$.$render$($container$$137_i$$593$$) : this.$_root$.$hasChildren$() ? this.$_root$.$renderChildren$($container$$137_i$$593$$) : this.$_root$.$render$($container$$137_i$$593$$);
    this.$_isolatedLayer$ = new D.$DvtContainer$$(this.$_context$);
    $container$$137_i$$593$$.$addChild$(this.$_isolatedLayer$);
    this.$_selectedLayer$ = new D.$DvtContainer$$(this.$_context$);
    $container$$137_i$$593$$.$addChild$(this.$_selectedLayer$);
    $container$$137_i$$593$$.$addChild$(this.$_groupTextLayer$);
    this.$_hoverEffect$ = new D.$DvtPolyline$$(this.$_context$, []);
    this.$_hoverEffect$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
    this.$_hoverEffect$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_hoverEffect$);
    $container$$137_i$$593$$.$addChild$(this.$_hoverEffect$);
    for($container$$137_i$$593$$ = 0;$container$$137_i$$593$$ < this.$_isolatedNodes$.length;$container$$137_i$$593$$++) {
      var $displayable$$64$$ = this.$_isolatedNodes$[$container$$137_i$$593$$].$getDisplayable$();
      this.$_isolatedLayer$.$addChild$($displayable$$64$$)
    }
  }else {
    (0,D.$JSCompiler_StaticMethods_RenderEmptyText$$)(this, $container$$137_i$$593$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$AnimationStopped$ || (this.$_container$.$removeChildren$(), this.$Layout$(new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$)), this.$Render$(this.$_container$), this.$ReselectNodes$());
  D.$DvtBaseTreemap$$.$superclass$.$OnAnimationEnd$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$ReselectNodes$ = function $$JSCompiler_prototypeAlias$$$$ReselectNodes$$() {
  for(var $selectedNodes$$1$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$594$$ = 0;$i$$594$$ < $selectedNodes$$1$$.length;$i$$594$$++) {
    if(0 < this.$_isolatedNodes$.length) {
      var $lastIsolated$$1$$ = this.$_isolatedNodes$[this.$_isolatedNodes$.length - 1];
      ($selectedNodes$$1$$[$i$$594$$] == $lastIsolated$$1$$ || $selectedNodes$$1$$[$i$$594$$].$isDescendantOf$($lastIsolated$$1$$)) && $selectedNodes$$1$$[$i$$594$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
    }else {
      $selectedNodes$$1$$[$i$$594$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$CreateKeyboardHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateKeyboardHandler$$($manager$$16$$) {
  return new D.$DvtTreemapKeyboardHandler$$($manager$$16$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$66$$, $context$$383$$, $callback$$96$$, $callbackObj$$67$$) {
  return new D.$DvtTreemapEventManager$$($view$$66$$, $context$$383$$, $callback$$96$$, $callbackObj$$67$$)
};
D.$JSCompiler_prototypeAlias$$.$GetInitialFocusedItem$ = function $$JSCompiler_prototypeAlias$$$$GetInitialFocusedItem$$($root$$13$$) {
  var $isolatedRootNode$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this);
  return $isolatedRootNode$$ ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this, (0,D.$JSCompiler_StaticMethods_getLeafNodes$$)($isolatedRootNode$$)) : $root$$13$$ ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this, (0,D.$JSCompiler_StaticMethods_getLeafNodes$$)($root$$13$$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__moveToSelectedLayer$ = function $$JSCompiler_prototypeAlias$$$$__moveToSelectedLayer$$($rect$$34$$) {
  for(var $newIndex$$6$$ = 0, $numChildren$$14$$ = this.$_selectedLayer$.$getNumChildren$(), $i$$595$$ = 0;$i$$595$$ < $numChildren$$14$$;$i$$595$$++) {
    var $child$$70$$ = this.$_selectedLayer$.$getChildAt$($i$$595$$);
    $rect$$34$$.zIndex > $child$$70$$.zIndex && ($newIndex$$6$$ = $i$$595$$ + 1)
  }
  $newIndex$$6$$ < $numChildren$$14$$ ? this.$_selectedLayer$.$addChildAt$($rect$$34$$, $newIndex$$6$$) : this.$_selectedLayer$.$addChild$($rect$$34$$)
};
D.$JSCompiler_StaticMethods___getLastIsolatedNode$$ = function $$JSCompiler_StaticMethods___getLastIsolatedNode$$$($JSCompiler_StaticMethods___getLastIsolatedNode$self$$) {
  return $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$ && 0 < $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$.length ? $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$[$JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$.length - 1] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__renderIsolateRestore$$ = function $$JSCompiler_StaticMethods__renderIsolateRestore$$$($JSCompiler_StaticMethods__renderIsolateRestore$self$$, $node$$299$$) {
  if($JSCompiler_StaticMethods__renderIsolateRestore$self$$.$AnimationOnDataChange$) {
    for(var $playables$$inline_6195_selectedNodes$$2$$ = $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_selectionHandler$ ? $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_selectionHandler$.getSelection() : [], $descendants$$inline_6196_i$$596$$ = 0;$descendants$$inline_6196_i$$596$$ < $playables$$inline_6195_selectedNodes$$2$$.length;$descendants$$inline_6196_i$$596$$++) {
      $playables$$inline_6195_selectedNodes$$2$$[$descendants$$inline_6196_i$$596$$].$setSelected$(D.$JSCompiler_alias_FALSE$$)
    }
    for(var $playables$$inline_6195_selectedNodes$$2$$ = [(0,D.$JSCompiler_StaticMethods__getIsolateAnimation$$)($node$$299$$)], $descendants$$inline_6196_i$$596$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($node$$299$$), $i$$inline_6197$$ = 0;$i$$inline_6197$$ < $descendants$$inline_6196_i$$596$$.length;$i$$inline_6197$$++) {
      $playables$$inline_6195_selectedNodes$$2$$.push((0,D.$JSCompiler_StaticMethods__getIsolateAnimation$$)($descendants$$inline_6196_i$$596$$[$i$$inline_6197$$]))
    }
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$ = new D.$DvtParallelPlayable$$($JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_context$, $playables$$inline_6195_selectedNodes$$2$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$.$setOnEnd$($JSCompiler_StaticMethods__renderIsolateRestore$self$$.$OnAnimationEnd$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_eventHandler$.$removeListeners$($JSCompiler_StaticMethods__renderIsolateRestore$self$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$.play()
  }else {
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$render$(D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Width$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Height$, D.$JSCompiler_alias_TRUE$$)
  }
};
D.$JSCompiler_StaticMethods___getDefaultNavigable$$ = function $$JSCompiler_StaticMethods___getDefaultNavigable$$$($JSCompiler_StaticMethods___getDefaultNavigable$self$$, $navigableItems$$3$$) {
  var $keyboardHandler$$2$$ = $JSCompiler_StaticMethods___getDefaultNavigable$self$$.$_eventHandler$.$KeyboardHandler$;
  return $keyboardHandler$$2$$ ? $keyboardHandler$$2$$.$getDefaultNavigable$($navigableItems$$3$$) : $navigableItems$$3$$ && 0 < $navigableItems$$3$$.length ? $navigableItems$$3$$[0] : D.$JSCompiler_alias_NULL$$
};
D.$DvtTreemap$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtTreemap", D.$DvtTreemap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTreemap$$, D.$DvtBaseTreemap$$, "DvtTreemap");
D.$DvtTreemap$$.newInstance = function $$DvtTreemap$$$newInstance$($context$$380$$, $callback$$93$$, $callbackObj$$64$$) {
  var $component$$18$$ = new D.$DvtTreemap$$;
  $component$$18$$.Init($context$$380$$, $callback$$93$$, $callbackObj$$64$$);
  return $component$$18$$
};
D.$DvtTreemap$$.getDefaults = function $$DvtTreemap$$$getDefaults$($skin$$5$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtTreemapDefaults$$, $skin$$5$$)
};
D.$DvtTreemap$$.prototype.$render$ = function $$DvtTreemap$$$$$render$$($options$$223_xmlString$$10$$, $width$$119$$, $height$$100$$, $bSkipXml$$) {
  $options$$223_xmlString$$10$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$223_xmlString$$10$$), (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  $options$$223_xmlString$$10$$ = $bSkipXml$$ ? D.$JSCompiler_alias_NULL$$ : (new D.$DvtTreemapJsonUtils$$(this.$_context$)).$toXml$(this.$Options$);
  D.$DvtTreemap$$.$superclass$.$render$.call(this, $options$$223_xmlString$$10$$, $width$$119$$, $height$$100$$)
};
D.$DvtTreemap$$.prototype.render = D.$DvtTreemap$$.prototype.$render$;
D.$DvtTreemap$$.prototype.$getBundle$ = function $$DvtTreemap$$$$$getBundle$$() {
  this.$_bundle$ || (this.$_bundle$ = new D.$DvtTreemapBundle$$);
  return this.$_bundle$
};
D.$DvtTreemapParser$$ = function $$DvtTreemapParser$$$($treemap$$1$$) {
  this.Init($treemap$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapParser$$, D.$DvtBaseTreeParser$$, "DvtTreemapParser");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.$CreateNode$ = function $$JSCompiler_prototypeAlias$$$$CreateNode$$($treeView$$, $props$$2$$, $templates$$1$$) {
  return new D.$DvtTreemapNode$$($treeView$$, $props$$2$$, $templates$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$($xmlNode$$) {
  var $ret$$ = D.$DvtTreemapParser$$.$superclass$.$ParseRootAttributes$.call(this, $xmlNode$$), $layoutStr$$ = $xmlNode$$.$getAttr$("layout");
  $ret$$.$layout$ = "h" == $layoutStr$$ ? new D.$DvtSliceAndDiceLayout$$(D.$JSCompiler_alias_TRUE$$) : "v" == $layoutStr$$ ? new D.$DvtSliceAndDiceLayout$$(D.$JSCompiler_alias_FALSE$$) : new D.$DvtSquarifyingLayout$$;
  $ret$$.$groupGaps$ = $xmlNode$$.$getAttr$("gg");
  $ret$$.$groupGaps$ || ($ret$$.$groupGaps$ = "o");
  $ret$$.$isolateRowKey$ = $xmlNode$$.$getAttr$("irk");
  this.$_isolateRowKey$ = $ret$$.$isolateRowKey$;
  return $ret$$
};
D.$JSCompiler_prototypeAlias$$.$ParseNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseNodeAttributes$$($headerLabelStyle_xmlNode$$1$$) {
  var $ret$$1$$ = D.$DvtTreemapParser$$.$superclass$.$ParseNodeAttributes$.call(this, $headerLabelStyle_xmlNode$$1$$);
  $ret$$1$$.$groupLabelDisplay$ = $headerLabelStyle_xmlNode$$1$$.$getAttr$("gld");
  $ret$$1$$.$labelHalign$ = $headerLabelStyle_xmlNode$$1$$.$getAttr$("ha");
  $ret$$1$$.$labelValign$ = $headerLabelStyle_xmlNode$$1$$.$getAttr$("va");
  $ret$$1$$.$isolate$ = $headerLabelStyle_xmlNode$$1$$.$getAttr$("hi");
  $ret$$1$$.$headerUseNodeColor$ = $headerLabelStyle_xmlNode$$1$$.$getAttr$("unc");
  $ret$$1$$.$headerHalign$ = $headerLabelStyle_xmlNode$$1$$.$getAttr$("hha");
  if($headerLabelStyle_xmlNode$$1$$ = $headerLabelStyle_xmlNode$$1$$.$getAttr$("hls")) {
    $ret$$1$$.$headerLabelStyle$ = new D.$DvtCSSStyle$$($headerLabelStyle_xmlNode$$1$$)
  }
  this.$_isolateRowKey$ == $ret$$1$$.id && ($ret$$1$$.$isIsolated$ = D.$JSCompiler_alias_TRUE$$);
  return $ret$$1$$
};
D.$JSCompiler_prototypeAlias$$.$ParseAdditionalNodeStyles$ = function $$JSCompiler_prototypeAlias$$$$ParseAdditionalNodeStyles$$($nodeStyle$$, $nodeHoverStyle$$, $nodeSelectedStyle$$, $styles$$) {
  $styles$$.NODE_HOVER_COLOR = $nodeHoverStyle$$.$getStyle$("border-color");
  $styles$$.NODE_SELECTED_OUTER_COLOR = $nodeSelectedStyle$$.$getStyle$("-tr-outer-color");
  $styles$$.NODE_SELECTED_INNER_COLOR = $nodeSelectedStyle$$.$getStyle$("-tr-inner-color")
};
D.$JSCompiler_prototypeAlias$$.$ParseAdditionalStyles$ = function $$JSCompiler_prototypeAlias$$$$ParseAdditionalStyles$$($xmlNode$$2$$, $styles$$1$$) {
  var $nodeHeaderDrillStyle_nodeHeaderStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$2$$.$getAttr$("nodeHeader"));
  $styles$$1$$.HEADER_TEXT_DEFAULT_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$;
  $styles$$1$$.HEADER_BACKGROUND_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$;
  var $nodeHeaderHoverStyle$$ = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$2$$.$getAttr$("nodeHeader-hover")));
  $styles$$1$$.HEADER_TEXT_HOVER_DEFAULT_STYLE = $nodeHeaderHoverStyle$$;
  $styles$$1$$.HEADER_BACKGROUND_HOVER_STYLE = $nodeHeaderHoverStyle$$;
  var $nodeHeaderSelectedStyle$$ = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$2$$.$getAttr$("nodeHeader-selected")));
  $styles$$1$$.HEADER_TEXT_SELECTED_DEFAULT_STYLE = $nodeHeaderSelectedStyle$$;
  $styles$$1$$.HEADER_BACKGROUND_SELECTED_STYLE = $nodeHeaderSelectedStyle$$;
  $nodeHeaderDrillStyle_nodeHeaderStyle$$ = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$2$$.$getAttr$("nodeHeaderDrill")));
  $styles$$1$$.HEADER_DRILL_TEXT_DEFAULT_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$;
  $styles$$1$$.HEADER_DRILL_TEXT_HOVER_DEFAULT_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$2$$.$getAttr$("nodeHeaderDrill-hover")));
  $styles$$1$$.HEADER_DRILL_TEXT_SELECTED_DEFAULT_STYLE = $nodeHeaderDrillStyle_nodeHeaderStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$2$$.$getAttr$("nodeHeaderDrill-selected")));
  $styles$$1$$.HEADER_HOVER_OUTER_COLOR_STYLE = $nodeHeaderHoverStyle$$.$getStyle$("-tr-outer-color");
  $styles$$1$$.HEADER_HOVER_INNER_COLOR_STYLE = $nodeHeaderHoverStyle$$.$getStyle$("-tr-inner-color");
  $styles$$1$$.HEADER_SELECTED_OUTER_COLOR_STYLE = $nodeHeaderSelectedStyle$$.$getStyle$("-tr-outer-color");
  $styles$$1$$.HEADER_SELECTED_INNER_COLOR_STYLE = $nodeHeaderSelectedStyle$$.$getStyle$("-tr-inner-color")
};
D.$DvtTreemapNode$$ = function $$DvtTreemapNode$$$($treemap$$, $props$$1$$, $templates$$) {
  this.Init($treemap$$, $props$$1$$, $templates$$);
  this.$_labelDisplay$ = $props$$1$$.$labelDisplay$ ? $props$$1$$.$labelDisplay$ : "n";
  this.$_groupLabelDisplay$ = $props$$1$$.$groupLabelDisplay$ ? $props$$1$$.$groupLabelDisplay$ : "h";
  this.$_labelHalign$ = $props$$1$$.$labelHalign$ ? $props$$1$$.$labelHalign$ : "c";
  this.$_labelValign$ = $props$$1$$.$labelValign$ ? $props$$1$$.$labelValign$ : "c";
  this.$_headerHalign$ = $props$$1$$.$headerHalign$ ? $props$$1$$.$headerHalign$ : "s";
  this.$_headerLabelStyle$ = $props$$1$$.$headerLabelStyle$;
  this.$_headerUseNodeColor$ = "on" == $props$$1$$.$headerUseNodeColor$;
  this.$_isolate$ = $props$$1$$.$isolate$ ? $props$$1$$.$isolate$ : "on";
  this.$_isIsolated$ = $props$$1$$.$isIsolated$
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapNode$$, D.$DvtBaseTreeNode$$, "DvtTreemapNode");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container_dim_dims$$2_text$$inline_651_transX$$) {
  if(this.$_hasLayout$) {
    this.$_shape$ = this.$_createShapeNode$();
    $container_dim_dims$$2_text$$inline_651_transX$$.$addChild$(this.$_shape$);
    var $afRoot_template$$;
    this.$hasChildren$() ? (this.$_childNodeGroup$ = new D.$DvtContainer$$(this.$_view$.$_context$), this.$_shape$.$addChild$(this.$_childNodeGroup$), this.$renderChildren$(this.$_childNodeGroup$)) : $afRoot_template$$ = this.$_template$;
    if($afRoot_template$$) {
      var $afContext$$ = this.$_view$.$_afContext$;
      $afContext$$.$_elContext$ = this.$_elAttributes$;
      var $aw$$ = this.$_width$ - 8 - 2, $ah$$ = this.$_height$ - 4 - 2;
      0 < $aw$$ && 0 < $ah$$ && ((0,D.$JSCompiler_StaticMethods_setAvailableWidth$$)($afContext$$, $aw$$), (0,D.$JSCompiler_StaticMethods_setAvailableHeight$$)($afContext$$, $ah$$), $afContext$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this)), this.$_contentRoot$ = $afRoot_template$$ = D.$DvtAfComponentFactory$$.$parseAndLayout$($afContext$$, $afRoot_template$$, this.$_shape$), (0,D.$DvtAgent$isRightToLeft$$)($container_dim_dims$$2_text$$inline_651_transX$$.$_context$) ? ($container_dim_dims$$2_text$$inline_651_transX$$ = 
      $afRoot_template$$.$getDimensions$(), $container_dim_dims$$2_text$$inline_651_transX$$ = this.$_x$ + this.$_width$ - 4 - 1 - $container_dim_dims$$2_text$$inline_651_transX$$.$w$) : $container_dim_dims$$2_text$$inline_651_transX$$ = this.$_x$ + 4 + 1, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($afRoot_template$$, $container_dim_dims$$2_text$$inline_651_transX$$, this.$_y$ + 2 + 1))
    }else {
      this.$_text$ = this.$_createTextNode$(this.$_shape$), this.$_text$ != D.$JSCompiler_alias_NULL$$ && (this.$_pattern$ && "h" != this.$_textStyle$) && ($container_dim_dims$$2_text$$inline_651_transX$$ = this.$_text$.$measureDimensions$(), this.$_textBackground$ = new D.$DvtRect$$(this.$_view$.$_context$, $container_dim_dims$$2_text$$inline_651_transX$$.x, $container_dim_dims$$2_text$$inline_651_transX$$.y, $container_dim_dims$$2_text$$inline_651_transX$$.$w$, $container_dim_dims$$2_text$$inline_651_transX$$.$h$), 
      this.$_textBackground$.$setSolidFill$("#FFFFFF"), this.$_textBackground$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$_shape$.$addChild$(this.$_textBackground$), $container_dim_dims$$2_text$$inline_651_transX$$ = this.$_text$, "n" == this.$_textStyle$ && this.$hasChildren$() ? this.$_view$.$_groupTextLayer$.$addChild$($container_dim_dims$$2_text$$inline_651_transX$$) : this.$_shape$.$addChild$($container_dim_dims$$2_text$$inline_651_transX$$))
    }
    (0,D.$JSCompiler_StaticMethods_setAriaRole$$)(this.$_shape$, "img");
    this.$UpdateAriaLabel$()
  }
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($parentNode$$1_selected_x$$70$$) {
  if("off" != this.$Selectable$ && (D.$DvtTreemapNode$$.$superclass$.$setSelected$.call(this, $parentNode$$1_selected_x$$70$$), this.$_shape$)) {
    if(this.$isSelected$()) {
      $parentNode$$1_selected_x$$70$$ = this.$_x$;
      var $y$$50$$ = this.$_y$ + 1, $w$$6$$ = this.$_width$ - 1, $h$$5$$ = this.$_height$ - 1;
      (0,D.$DvtAgent$isPlatformWebkit$$)() && ($y$$50$$ -= 1);
      (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$);
      (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionInner$);
      this.$_selectionInner$ = this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$;
      this.$_selectionOuter$ = new D.$DvtRect$$(this.$_view$.$_context$, $parentNode$$1_selected_x$$70$$, $y$$50$$, $w$$6$$, $h$$5$$);
      this.$_selectionOuter$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      this.$_selectionOuter$.$setFill$(D.$JSCompiler_alias_NULL$$);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_selectionOuter$);
      this.$_shape$.$addChild$(this.$_selectionOuter$);
      this.$_selectionInner$ = new D.$DvtRect$$(this.$_view$.$_context$, $parentNode$$1_selected_x$$70$$ + 1, $y$$50$$ + 1, $w$$6$$ - 2, $h$$5$$ - 2);
      this.$_selectionInner$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      this.$_selectionInner$.$setFill$(D.$JSCompiler_alias_NULL$$);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_selectionInner$);
      this.$_shape$.$addChild$(this.$_selectionInner$);
      "h" == this.$_textStyle$ ? (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#C4DCFF;", "HEADER_BACKGROUND_HOVER_STYLE") : ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#9CACC9;", "HEADER_BACKGROUND_SELECTED_STYLE"), this.$_text$ && (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_SELECTED_DEFAULT_STYLE", 
      "#003D5B")), this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "HEADER_SELECTED_OUTER_COLOR_STYLE"), 1), this.$_selectionInner$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "HEADER_SELECTED_INNER_COLOR_STYLE"), 1)) : (this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "NODE_SELECTED_OUTER_COLOR"), 1), this.$_selectionInner$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, 
      "#FFFFFF", "NODE_SELECTED_INNER_COLOR"), 1), !(0,D.$DvtAgent$isBrowserSafari$$)() && !(0,D.$DvtAgent$isPlatformGecko$$)() && (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(this.$_shape$, D.$DvtBaseTreeNode$__NODE_SELECTED_SHADOW$$), this.$_view$.$__moveToSelectedLayer$(this.$_shape$))
    }else {
      (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionInner$), this.$_selectionInner$ = D.$JSCompiler_alias_NULL$$, "h" == this.$_textStyle$ ? (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#C4DCFF;", "HEADER_BACKGROUND_HOVER_STYLE") : ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#FFFFFF;border-color:#E1E6EE;", 
      "HEADER_BACKGROUND_STYLE"), this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_DEFAULT_STYLE", "#003286") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_DEFAULT_STYLE", "#003D5B"))), this.$_selectionOuter$ && (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, 
      "#00AEFF", "HEADER_HOVER_OUTER_COLOR_STYLE"), "1") : ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$), this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$))) : ((0,D.$JSCompiler_StaticMethods_removeAllDrawEffects$$)(this.$_shape$), this.$_selectionOuter$ && ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$), this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$), ($parentNode$$1_selected_x$$70$$ = this.$_parent$) && $parentNode$$1_selected_x$$70$$.$_childNodeGroup$ && 
      $parentNode$$1_selected_x$$70$$.$_childNodeGroup$.$addChild$(this.$_shape$))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  if(this.$_shape$ && this.$_hasLayout$) {
    var $isolatedNode_points$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this.$_view$);
    if(!($isolatedNode_points$$ != D.$JSCompiler_alias_NULL$$ && $isolatedNode_points$$ != this && !this.$isDescendantOf$($isolatedNode_points$$))) {
      var $isolatedNode_points$$ = [], $stroke_stroke$$inline_655_y$$51_y1$$4$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_653_x$$71_x1$$4$$, $w$$7_x2$$2$$, $h$$6_y2$$2$$;
      "h" == this.$_textStyle$ ? ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#C4DCFF;", "HEADER_BACKGROUND_HOVER_STYLE"), this.$_selectionOuter$ || ($JSCompiler_StaticMethods___showHoverEffect$self$$inline_653_x$$71_x1$$4$$ = this.$_x$, $stroke_stroke$$inline_655_y$$51_y1$$4$$ = this.$_y$ + 1, $w$$7_x2$$2$$ = this.$_width$ - 1, $h$$6_y2$$2$$ = this.$_height$ - 1, (0,D.$DvtAgent$isPlatformWebkit$$)() && ($stroke_stroke$$inline_655_y$$51_y1$$4$$ -= 
      1), this.$_selectionOuter$ = new D.$DvtRect$$(this.$_view$.$_context$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_653_x$$71_x1$$4$$, $stroke_stroke$$inline_655_y$$51_y1$$4$$, $w$$7_x2$$2$$, $h$$6_y2$$2$$), this.$_selectionOuter$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$_selectionOuter$.$setFill$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_selectionOuter$), this.$_shape$.$addChild$(this.$_selectionOuter$)), this.$isSelected$() ? 
      this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "HEADER_SELECTED_OUTER_COLOR_STYLE"), D.$DvtTreemapNode$$.$GROUP_SELECTED_OUTER_OPACITY$) : this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#00AEFF", "HEADER_HOVER_OUTER_COLOR_STYLE"), "1"), $JSCompiler_StaticMethods___showHoverEffect$self$$inline_653_x$$71_x1$$4$$ = this.$_x$ + 1.5 + 1, $w$$7_x2$$2$$ = this.$_x$ + this.$_width$ - 1.5 - 
      1, $stroke_stroke$$inline_655_y$$51_y1$$4$$ = this.$_y$ + this.$_titleBarHeight$, $h$$6_y2$$2$$ = this.$_y$ + this.$_height$ - 1.5 - 1, $isolatedNode_points$$.push($w$$7_x2$$2$$, $stroke_stroke$$inline_655_y$$51_y1$$4$$, $w$$7_x2$$2$$, $h$$6_y2$$2$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_653_x$$71_x1$$4$$, $h$$6_y2$$2$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_653_x$$71_x1$$4$$, $stroke_stroke$$inline_655_y$$51_y1$$4$$), $stroke_stroke$$inline_655_y$$51_y1$$4$$ = 
      new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#C4DCFF", "HEADER_HOVER_INNER_COLOR_STYLE"), 0.8, 3), this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_DRILL_TEXT_HOVER_DEFAULT_STYLE", "#000000") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_HOVER_DEFAULT_STYLE", "#000000"))) : ($JSCompiler_StaticMethods___showHoverEffect$self$$inline_653_x$$71_x1$$4$$ = 
      this.$_x$ + 1, $w$$7_x2$$2$$ = this.$_x$ + this.$_width$ - 1, $stroke_stroke$$inline_655_y$$51_y1$$4$$ = this.$_y$ + 1, $h$$6_y2$$2$$ = this.$_y$ + this.$_height$ - 1, $isolatedNode_points$$.push(this.$_x$, $stroke_stroke$$inline_655_y$$51_y1$$4$$, $w$$7_x2$$2$$, $stroke_stroke$$inline_655_y$$51_y1$$4$$, $w$$7_x2$$2$$, $h$$6_y2$$2$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_653_x$$71_x1$$4$$, $h$$6_y2$$2$$, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_653_x$$71_x1$$4$$, 
      $stroke_stroke$$inline_655_y$$51_y1$$4$$), $stroke_stroke$$inline_655_y$$51_y1$$4$$ = new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "NODE_HOVER_COLOR"), 1, 2));
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_653_x$$71_x1$$4$$ = this.$_view$;
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_653_x$$71_x1$$4$$.$_hoverEffect$.$setPoints$($isolatedNode_points$$);
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_653_x$$71_x1$$4$$.$_hoverEffect$.$setStroke$($stroke_stroke$$inline_655_y$$51_y1$$4$$);
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_653_x$$71_x1$$4$$.$_hoverEffect$.$setVisible$(D.$JSCompiler_alias_TRUE$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_shape$ && this.$_hasLayout$ && ("h" == this.$_textStyle$ && (this.$isSelected$() ? ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#9CACC9;", "HEADER_BACKGROUND_SELECTED_STYLE"), this.$_selectionOuter$.$setSolidStroke$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "HEADER_SELECTED_OUTER_COLOR_STYLE"), D.$DvtTreemapNode$$.$GROUP_SELECTED_OUTER_OPACITY$), this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, 
  this.$_text$, "HEADER_DRILL_TEXT_SELECTED_DEFAULT_STYLE", "#003D5B") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_SELECTED_DEFAULT_STYLE", "#003D5B"))) : ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$, "background-color:#FFFFFF;border-color:#E1E6EE;", "HEADER_BACKGROUND_STYLE"), this.$_selectionOuter$ && (this.$_shape$.removeChild(this.$_selectionOuter$), this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$), 
  this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_DRILL_TEXT_DEFAULT_STYLE", "#003286") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "HEADER_TEXT_DEFAULT_STYLE", "#003D5B")))), this.$_view$.$_hoverEffect$.$setVisible$(D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_prototypeAlias$$.$isIsolateEnabled$ = function $$JSCompiler_prototypeAlias$$$$isIsolateEnabled$$() {
  return"on" == this.$_isolate$ && "h" == this.$_textStyle$
};
D.$JSCompiler_prototypeAlias$$.$getPopupBounds$ = function $$JSCompiler_prototypeAlias$$$$getPopupBounds$$($behavior$$1$$) {
  return!$behavior$$1$$ || !$behavior$$1$$.$getAlign$() ? D.$DvtTreemapNode$$.$superclass$.$getPopupBounds$.call(this, $behavior$$1$$) : new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$4_lastChild_next$$) {
  var $keyCode_navigables_parent$$2$$;
  if($event$$4_lastChild_next$$.type == D.$DvtMouseEvent$CLICK$$) {
    return D.$DvtTreemapNode$$.$superclass$.$getNextNavigable$.call(this, $event$$4_lastChild_next$$)
  }
  $keyCode_navigables_parent$$2$$ = $event$$4_lastChild_next$$.keyCode;
  if(32 == $keyCode_navigables_parent$$2$$ && $event$$4_lastChild_next$$.ctrlKey) {
    return this
  }
  if(38 == $keyCode_navigables_parent$$2$$ && $event$$4_lastChild_next$$.altKey || 221 == $keyCode_navigables_parent$$2$$) {
    ($keyCode_navigables_parent$$2$$ = this.$_parent$) && $keyCode_navigables_parent$$2$$.getId() != this.$_view$.$_root$.getId() ? ($event$$4_lastChild_next$$ = $keyCode_navigables_parent$$2$$, (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($keyCode_navigables_parent$$2$$)) : $event$$4_lastChild_next$$ = this
  }else {
    if(40 == $keyCode_navigables_parent$$2$$ && $event$$4_lastChild_next$$.altKey || 219 == $keyCode_navigables_parent$$2$$) {
      $event$$4_lastChild_next$$ = ($event$$4_lastChild_next$$ = this.$_lastVisitedChild$) ? $event$$4_lastChild_next$$ : this.$hasChildren$() ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this.$_view$, this.$getChildNodes$()) : this
    }else {
      var $root$$1$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this.$_view$), $depth$$1$$ = 0;
      if($root$$1$$) {
        if(this == $root$$1$$) {
          $depth$$1$$ = 0
        }else {
          $keyCode_navigables_parent$$2$$ = this.$_parent$;
          for($depth$$1$$ = 1;$root$$1$$ != $keyCode_navigables_parent$$2$$;) {
            $depth$$1$$++, $keyCode_navigables_parent$$2$$ = $keyCode_navigables_parent$$2$$.$_parent$
          }
        }
      }else {
        for($root$$1$$ = this;$root$$1$$.$_parent$;) {
          $root$$1$$ = $root$$1$$.$_parent$
        }
        $depth$$1$$ = (0,D.$JSCompiler_StaticMethods_GetDepth$$)(this)
      }
      $keyCode_navigables_parent$$2$$ = (0,D.$JSCompiler_StaticMethods_GetNodesAtDepth$$)(this, $root$$1$$, $depth$$1$$);
      $event$$4_lastChild_next$$ = (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $event$$4_lastChild_next$$, $keyCode_navigables_parent$$2$$)
    }
  }
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($event$$4_lastChild_next$$);
  return $event$$4_lastChild_next$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_shape$ ? this.$_shape$.$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setLayoutParams$ = function $$JSCompiler_prototypeAlias$$$$setLayoutParams$$($headerLabelHeight_text$$11_x$$72_xx$$, $y$$52_yy$$, $width$$17_ww$$1$$, $height$$15_hh$$1$$) {
  if(!(0 >= $width$$17_ww$$1$$ || 0 >= $height$$15_hh$$1$$)) {
    this.$_hasLayout$ = D.$JSCompiler_alias_TRUE$$;
    this.$_oldState$ = this.$GetAnimationParams$();
    this.$_x$ = $headerLabelHeight_text$$11_x$$72_xx$$;
    this.$_y$ = $y$$52_yy$$;
    this.$_width$ = $width$$17_ww$$1$$ ? $width$$17_ww$$1$$ : 0;
    this.$_height$ = $height$$15_hh$$1$$ ? $height$$15_hh$$1$$ : 0;
    this.$_textStyle$ = this.$hasChildren$() ? this.$_groupLabelDisplay$ : this.$_labelDisplay$;
    this.$_textStr$ || (this.$_textStyle$ = "o");
    if("h" == this.$_textStyle$) {
      this.$_titleBarHeight$ = 15;
      $headerLabelHeight_text$$11_x$$72_xx$$ = new D.$DvtOutputText$$(this.$_view$.$_context$, this.$_textStr$);
      $headerLabelHeight_text$$11_x$$72_xx$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this));
      (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $headerLabelHeight_text$$11_x$$72_xx$$, "HEADER_TEXT_DEFAULT_STYLE", "#003D5B");
      $headerLabelHeight_text$$11_x$$72_xx$$ = D.$DvtTextUtils$$.$guessTextDimensions$($headerLabelHeight_text$$11_x$$72_xx$$).$h$;
      this.$_titleBarHeight$ = window.Math.max(this.$_titleBarHeight$, $headerLabelHeight_text$$11_x$$72_xx$$);
      this.$isIsolateEnabled$() && (this.$_titleBarHeight$ = window.Math.max(this.$_titleBarHeight$, 15));
      $headerLabelHeight_text$$11_x$$72_xx$$ = this.$_x$;
      $y$$52_yy$$ = this.$_y$ + this.$_titleBarHeight$;
      $width$$17_ww$$1$$ = this.$_width$;
      $height$$15_hh$$1$$ = this.$_height$ - this.$_titleBarHeight$;
      if(0 <= $width$$17_ww$$1$$ && 0 <= $height$$15_hh$$1$$) {
        return new D.$DvtRectangle$$($headerLabelHeight_text$$11_x$$72_xx$$, $y$$52_yy$$, $width$$17_ww$$1$$, $height$$15_hh$$1$$)
      }
      this.$_textStyle$ = D.$JSCompiler_alias_NULL$$
    }
    return new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
  }
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$74$$, $y$$54$$) {
  return $x$$74$$ >= this.$_x$ && $x$$74$$ <= this.$_x$ + this.$_width$ && $y$$54$$ >= this.$_y$ && $y$$54$$ <= this.$_y$ + this.$_height$
};
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  var $r$$ = D.$DvtColorUtils$$.$getRed$(this.$_color$), $g$$ = D.$DvtColorUtils$$.$getGreen$(this.$_color$), $b$$3$$ = D.$DvtColorUtils$$.$getBlue$(this.$_color$);
  return[this.$_x$, this.$_y$, this.$_width$, this.$_height$, $r$$, $g$$, $b$$3$$, this.$hasChildren$() ? 0 : window.Math.random()]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$) {
  this.$setLayoutParams$($params$$[0], $params$$[1], $params$$[2], $params$$[3]);
  this.$_color$ = D.$DvtColorUtils$$.$makeRGB$(window.Math.round($params$$[4]), window.Math.round($params$$[5]), window.Math.round($params$$[6]));
  this.$_shape$ && ((0,D.$JSCompiler_StaticMethods_setRect$$)(this.$_shape$, this.$_x$, this.$_y$, this.$_width$, this.$_height$), this.$_innerShape$ && (0,D.$JSCompiler_StaticMethods_setRect$$)(this.$_innerShape$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), ("h" != this.$_textStyle$ || this.$_headerUseNodeColor$) && this.$_shape$.$setFill$(this.$GetFill$()), this.$isSelected$() && this.$setSelected$(D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, 
  this.$_fillShape$), (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_topLeftShape$), this.$_topLeftShape$ = this.$_fillShape$ = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this), this.$_template$ ? ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_contentRoot$), this.$_contentRoot$ = D.$JSCompiler_alias_NULL$$) : ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_textBackground$), this.$_textBackground$ = 
  D.$JSCompiler_alias_NULL$$, this.$_text$ && this.$_text$.getParent().removeChild(this.$_text$), this.$_text$ = this.$_createTextNode$(this.$_shape$)))
};
D.$JSCompiler_StaticMethods__getIsolateAnimation$$ = function $$JSCompiler_StaticMethods__getIsolateAnimation$$$($JSCompiler_StaticMethods__getIsolateAnimation$self$$) {
  if($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_oldState$) {
    var $playable$$ = new D.$DvtCustomAnimation$$($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_view$.$_context$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$, 0.3);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$.$_animator$, "typeNumberArray", $JSCompiler_StaticMethods__getIsolateAnimation$self$$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$GetAnimationParams$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$SetAnimationParams$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$GetAnimationParams$());
    $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$SetAnimationParams$($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_oldState$);
    return $playable$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTreemapNode$$.prototype.$animateUpdate$ = function $$DvtTreemapNode$$$$$animateUpdate$$($handler$$3$$, $oldNode$$) {
  return 0 == (0,D.$JSCompiler_StaticMethods_GetDepth$$)(this) || $oldNode$$.$_hasLayout$ && 0 < $oldNode$$.$_width$ && 0 < $oldNode$$.$_height$ ? D.$DvtTreemapNode$$.$superclass$.$animateUpdate$.call(this, $handler$$3$$, $oldNode$$) : this.$animateInsert$($handler$$3$$)
};
D.$DvtTreemapNode$$.prototype.$_createShapeNode$ = function $$DvtTreemapNode$$$$$_createShapeNode$$() {
  var $context$$18$$ = this.$_view$.$_context$, $shape$$;
  if("h" == this.$_textStyle$) {
    $shape$$ = new D.$DvtRect$$($context$$18$$, this.$_x$, this.$_y$, this.$_width$, this.$_height$), this.$_innerShape$ = new D.$DvtRect$$($context$$18$$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), (0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, $shape$$, this.$_innerShape$, "background-color:#FFFFFF;border-color:#E1E6EE;", "HEADER_BACKGROUND_STYLE"), this.$_innerShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$.$addChild$(this.$_innerShape$), this.$_isIsolated$ && 
    (this.$_isolateButton$ = (0,D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$)(this, $shape$$))
  }else {
    var $fill$$1$$ = this.$GetFill$();
    $shape$$ = new D.$DvtRect$$($context$$18$$, this.$_x$, this.$_y$, this.$_width$, this.$_height$);
    if((1E3 > this.$_view$.$_nodeCount$ || !(0,D.$DvtAgent$isTouchDevice$$)()) && 2 <= this.$_width$ && 2 <= this.$_height$) {
      new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "LEAF_NODE_TOP_BORDER_COLOR_STYLE"), 0.3);
      new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "LEAF_NODE_BOTTOM_BORDER_COLOR_STYLE"), 0.3);
      this.$_pattern$ && new D.$DvtSolidStroke$$(this.$_color$, 0.15);
      var $fillColor_minDim$$ = this.$getColor$(), $topLeftColor$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "LEAF_NODE_TOP_BORDER_COLOR_STYLE"), $topLeftColor$$ = D.$DvtColorUtils$$.$interpolateColor$($topLeftColor$$, $fillColor_minDim$$, 0.7), $bottomRightColor$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "LEAF_NODE_BOTTOM_BORDER_COLOR_STYLE"), $bottomRightColor$$ = D.$DvtColorUtils$$.$interpolateColor$($bottomRightColor$$, $fillColor_minDim$$, 
      0.7), $fillColor_minDim$$ = window.Math.min(this.$_width$, this.$_height$);
      4 <= $fillColor_minDim$$ ? ($shape$$.$setSolidFill$($bottomRightColor$$), this.$_topLeftShape$ = new D.$DvtRect$$($context$$18$$, this.$_x$, this.$_y$, this.$_width$ - 1, this.$_height$ - 1), this.$_topLeftShape$.$setSolidFill$($topLeftColor$$), this.$_topLeftShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$.$addChild$(this.$_topLeftShape$), this.$_fillShape$ = new D.$DvtRect$$($context$$18$$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), this.$_fillShape$.$setFill$($fill$$1$$), 
      this.$_fillShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$.$addChild$(this.$_fillShape$)) : 2 <= $fillColor_minDim$$ ? ($shape$$.$setSolidFill$($bottomRightColor$$), this.$_fillShape$ = new D.$DvtRect$$($context$$18$$, this.$_x$, this.$_y$, this.$_width$ - 1, this.$_height$ - 1), this.$_fillShape$.$setFill$($fill$$1$$), this.$_fillShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$.$addChild$(this.$_fillShape$)) : $shape$$.$setFill$($fill$$1$$)
    }else {
      $shape$$.$setFill$($fill$$1$$)
    }
  }
  this.$_view$.$__getEventManager$().$associate$($shape$$, this);
  this.$_view$.$_nodeSelection$ != D.$JSCompiler_alias_NULL$$ && "off" != this.$Selectable$ ? $shape$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$) : $shape$$.setCursor("default");
  $shape$$.zIndex = this.$_zIndex$;
  return $shape$$
};
D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$ = function $$JSCompiler_StaticMethods__createIsolateRestoreButton$$$($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$, $container$$1$$) {
  if("h" != $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_textStyle$ || !$JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$isIsolateEnabled$()) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $JSCompiler_temp$$424_button_button$$inline_667_button$$inline_675_context$$inline_662_context$$inline_670$$ = D.$JSCompiler_alias_NULL$$, $transX$$1_x1$$5$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_x$, $x2$$3$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_x$ + $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_width$ - 1, $rect$$1_tooltip_y1$$5$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_y$ + 1, $y2$$3$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_y$ + 
  $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_titleBarHeight$;
  if(12 < $x2$$3$$ - $transX$$1_x1$$5$$ - 2) {
    if($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_isIsolated$) {
      var $JSCompiler_temp$$424_button_button$$inline_667_button$$inline_675_context$$inline_662_context$$inline_670$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_context$, $downState$$inline_666_downState$$inline_674_resources$$inline_663_resources$$inline_671$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$, $upState$$inline_664_upState$$inline_672$$ = new D.$DvtImage$$($JSCompiler_temp$$424_button_button$$inline_667_button$$inline_675_context$$inline_662_context$$inline_670$$, 
      $downState$$inline_666_downState$$inline_674_resources$$inline_663_resources$$inline_671$$.restoreUp, 0, 0, 12, 12), $overState$$inline_665_overState$$inline_673$$ = new D.$DvtImage$$($JSCompiler_temp$$424_button_button$$inline_667_button$$inline_675_context$$inline_662_context$$inline_670$$, $downState$$inline_666_downState$$inline_674_resources$$inline_663_resources$$inline_671$$.restoreOver, 0, 0, 12, 12), $downState$$inline_666_downState$$inline_674_resources$$inline_663_resources$$inline_671$$ = 
      new D.$DvtImage$$($JSCompiler_temp$$424_button_button$$inline_667_button$$inline_675_context$$inline_662_context$$inline_670$$, $downState$$inline_666_downState$$inline_674_resources$$inline_663_resources$$inline_671$$.restoreDown, 0, 0, 12, 12);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($upState$$inline_664_upState$$inline_672$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$inline_665_overState$$inline_673$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downState$$inline_666_downState$$inline_674_resources$$inline_663_resources$$inline_671$$);
      $JSCompiler_temp$$424_button_button$$inline_667_button$$inline_675_context$$inline_662_context$$inline_670$$ = new D.$DvtButton$$($JSCompiler_temp$$424_button_button$$inline_667_button$$inline_675_context$$inline_662_context$$inline_670$$, $upState$$inline_664_upState$$inline_672$$, $overState$$inline_665_overState$$inline_673$$, $downState$$inline_666_downState$$inline_674_resources$$inline_663_resources$$inline_671$$);
      $JSCompiler_temp$$424_button_button$$inline_667_button$$inline_675_context$$inline_662_context$$inline_670$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$__restoreNode$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$)
    }else {
      $JSCompiler_temp$$424_button_button$$inline_667_button$$inline_675_context$$inline_662_context$$inline_670$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_context$, $downState$$inline_666_downState$$inline_674_resources$$inline_663_resources$$inline_671$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$, $upState$$inline_664_upState$$inline_672$$ = new D.$DvtImage$$($JSCompiler_temp$$424_button_button$$inline_667_button$$inline_675_context$$inline_662_context$$inline_670$$, 
      $downState$$inline_666_downState$$inline_674_resources$$inline_663_resources$$inline_671$$.maximizeUp, 0, 0, 12, 12), $overState$$inline_665_overState$$inline_673$$ = new D.$DvtImage$$($JSCompiler_temp$$424_button_button$$inline_667_button$$inline_675_context$$inline_662_context$$inline_670$$, $downState$$inline_666_downState$$inline_674_resources$$inline_663_resources$$inline_671$$.maximizeOver, 0, 0, 12, 12), $downState$$inline_666_downState$$inline_674_resources$$inline_663_resources$$inline_671$$ = 
      new D.$DvtImage$$($JSCompiler_temp$$424_button_button$$inline_667_button$$inline_675_context$$inline_662_context$$inline_670$$, $downState$$inline_666_downState$$inline_674_resources$$inline_663_resources$$inline_671$$.maximizeDown, 0, 0, 12, 12), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($upState$$inline_664_upState$$inline_672$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$inline_665_overState$$inline_673$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downState$$inline_666_downState$$inline_674_resources$$inline_663_resources$$inline_671$$), 
      $JSCompiler_temp$$424_button_button$$inline_667_button$$inline_675_context$$inline_662_context$$inline_670$$ = new D.$DvtButton$$($JSCompiler_temp$$424_button_button$$inline_667_button$$inline_675_context$$inline_662_context$$inline_670$$, $upState$$inline_664_upState$$inline_672$$, $overState$$inline_665_overState$$inline_673$$, $downState$$inline_666_downState$$inline_674_resources$$inline_663_resources$$inline_671$$), $JSCompiler_temp$$424_button_button$$inline_667_button$$inline_675_context$$inline_662_context$$inline_670$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, 
      $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$__isolateNode$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$)
    }
    $transX$$1_x1$$5$$ = (0,D.$DvtAgent$isRightToLeft$$)($container$$1$$.$_context$) ? $transX$$1_x1$$5$$ + 1 : $x2$$3$$ - 12 - 1;
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_temp$$424_button_button$$inline_667_button$$inline_675_context$$inline_662_context$$inline_670$$, $transX$$1_x1$$5$$, ($y2$$3$$ + $rect$$1_tooltip_y1$$5$$ - 12) / 2);
    $container$$1$$.$addChild$($JSCompiler_temp$$424_button_button$$inline_667_button$$inline_675_context$$inline_662_context$$inline_670$$);
    (0,D.$DvtAgent$isTouchDevice$$)() && ($rect$$1_tooltip_y1$$5$$ = new D.$DvtRect$$($container$$1$$.$_context$, -2, -2, 16, 16), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$1_tooltip_y1$$5$$), $JSCompiler_temp$$424_button_button$$inline_667_button$$inline_675_context$$inline_662_context$$inline_670$$.$addChild$($rect$$1_tooltip_y1$$5$$));
    "true" == $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$.alta ? $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$__getEventManager$().$associate$($JSCompiler_temp$$424_button_button$$inline_667_button$$inline_675_context$$inline_662_context$$inline_670$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$) : ($rect$$1_tooltip_y1$$5$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_isIsolated$ ? $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$.restore : 
    $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$_resources$.isolate, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$__getEventManager$().$associate$($JSCompiler_temp$$424_button_button$$inline_667_button$$inline_675_context$$inline_662_context$$inline_670$$, new D.$DvtBaseTreePeer$$($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.getId(), $rect$$1_tooltip_y1$$5$$)))
  }
  return $JSCompiler_temp$$424_button_button$$inline_667_button$$inline_675_context$$inline_662_context$$inline_670$$
};
D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$ = function $$JSCompiler_StaticMethods__removeIsolateRestoreButton$$$($JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$) {
  $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$ && ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)($JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$, $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$), $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtTreemapNode$$.prototype.$_createTextNode$ = function $$DvtTreemapNode$$$$$_createTextNode$$($container$$2$$) {
  var $chromeAdjustment_isRTL_peer$$ = (0,D.$DvtAgent$isRightToLeft$$)($container$$2$$.$_context$);
  if(!this.$_textStr$ || !$container$$2$$ || !this.$_textStyle$ || "o" == this.$_textStyle$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $availHeight$$ = this.$_height$;
  if((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this) > $availHeight$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $hAlign$$ = "n" == this.$_textStyle$ ? this.$_labelHalign$ : this.$_headerHalign$;
  $chromeAdjustment_isRTL_peer$$ && ("s" == $hAlign$$ ? $hAlign$$ = "e" : "e" == $hAlign$$ && ($hAlign$$ = "s"));
  var $availWidth$$ = this.$_width$ - 6, $isolateWidth$$ = 0;
  this.$isIsolateEnabled$() && ($isolateWidth$$ = 13, $availWidth$$ = "c" == $hAlign$$ ? $availWidth$$ - 2 * $isolateWidth$$ : $availWidth$$ - $isolateWidth$$);
  if(0 >= $availWidth$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $text$$12$$ = new D.$DvtOutputText$$(this.$_view$.$_context$, this.$_textStr$);
  $text$$12$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this));
  "s" == $hAlign$$ ? ($chromeAdjustment_isRTL_peer$$ ? $text$$12$$.$setX$(this.$_x$ + 4 + $isolateWidth$$) : $text$$12$$.$setX$(this.$_x$ + 4), $text$$12$$.$alignLeft$()) : "c" == $hAlign$$ ? ($text$$12$$.$setX$(this.$_x$ + this.$_width$ / 2), $text$$12$$.$alignCenter$()) : "e" == $hAlign$$ && ($chromeAdjustment_isRTL_peer$$ ? $text$$12$$.$setX$(this.$_x$ + this.$_width$ - 4) : $text$$12$$.$setX$(this.$_x$ + this.$_width$ - 4 - $isolateWidth$$), $text$$12$$.$alignRight$());
  "n" == this.$_textStyle$ ? ($availHeight$$ = this.$_height$ - 4, "t" == this.$_labelValign$ ? ($text$$12$$.$setY$(this.$_y$ + 2), $text$$12$$.$alignTop$()) : "c" == this.$_labelValign$ ? ($text$$12$$.$setY$(this.$_y$ + this.$_height$ / 2), $text$$12$$.$alignMiddle$()) : "b" == this.$_labelValign$ && ($text$$12$$.$setY$(this.$_y$ + this.$_height$ - 2), $text$$12$$.$alignBottom$()), (0,D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$)(this, $text$$12$$)) : "h" == this.$_textStyle$ && ($chromeAdjustment_isRTL_peer$$ = 
  (0,D.$DvtAgent$isPlatformWebkit$$)() ? 1 : 0, $text$$12$$.$setY$(this.$_y$ + 1 + this.$_titleBarHeight$ / 2 + $chromeAdjustment_isRTL_peer$$), $text$$12$$.$alignMiddle$(), (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $text$$12$$, "HEADER_TEXT_DEFAULT_STYLE", "#003D5B"));
  if($text$$12$$ != D.$JSCompiler_alias_NULL$$) {
    return"h" == this.$_textStyle$ && this.$isDrillReplaceEnabled$() ? ((0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $text$$12$$, "HEADER_DRILL_TEXT_DEFAULT_STYLE", "#003286"), $text$$12$$.setCursor("pointer"), $chromeAdjustment_isRTL_peer$$ = new D.$DvtBaseTreePeer$$(this, this.getId(), D.$JSCompiler_alias_NULL$$, this.$getDatatip$(), this.$getDatatipColor$()), $chromeAdjustment_isRTL_peer$$.$setDrillable$(D.$JSCompiler_alias_TRUE$$), this.$_view$.$__getEventManager$().$associate$($text$$12$$, 
    $chromeAdjustment_isRTL_peer$$)) : $text$$12$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), D.$DvtTextUtils$$.$fitText$($text$$12$$, $availWidth$$, $availHeight$$, $container$$2$$) ? $text$$12$$ : D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$ = function $$JSCompiler_StaticMethods_ApplyHeaderStyle$$$($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$1$$, $shape$$1$$, $innerShape$$, $backgroundColor_defaultStyle$$, $styleDef$$) {
  var $borderColor_style$$2$$ = new D.$DvtCSSStyle$$($backgroundColor_defaultStyle$$);
  $borderColor_style$$2$$.$merge$($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$1$$.$_view$.$_styles$[$styleDef$$]);
  $backgroundColor_defaultStyle$$ = $borderColor_style$$2$$.$getStyle$("background-color");
  $borderColor_style$$2$$ = $borderColor_style$$2$$.$getStyle$("border-color");
  $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$1$$.$_headerUseNodeColor$ && "HEADER_BACKGROUND_STYLE" == $styleDef$$ ? ($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$1$$ = $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$1$$.$getColor$(), $innerShape$$.$setSolidFill$($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$1$$), $borderColor_style$$2$$ = D.$DvtColorUtils$$.$interpolateColor$($borderColor_style$$2$$, $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$1$$, 
  0.5), $shape$$1$$.$setSolidFill$($borderColor_style$$2$$)) : ($shape$$1$$.$setSolidFill$($borderColor_style$$2$$), $innerShape$$.$setSolidFill$($backgroundColor_defaultStyle$$))
};
D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$ = function $$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$$($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$, $text$$13$$, $styleDef$$1$$, $defaultFillColor_textStyle$$) {
  $JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_headerUseNodeColor$ && "HEADER_TEXT_DEFAULT_STYLE" == $styleDef$$1$$ ? $text$$13$$.$setSolidFill$((0,D.$DvtBaseTreeNode$GetNodeTextColor$$)($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$)) : $text$$13$$.$setSolidFill$($defaultFillColor_textStyle$$);
  $defaultFillColor_textStyle$$ = [];
  1 >= (0,D.$JSCompiler_StaticMethods_GetDepth$$)($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$) && $JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$hasChildren$() && $defaultFillColor_textStyle$$.push(new D.$DvtCSSStyle$$("font-weight:bold;"));
  $defaultFillColor_textStyle$$.push($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_view$.$_styles$[$styleDef$$1$$]);
  $JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_headerLabelStyle$ && $defaultFillColor_textStyle$$.push($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_headerLabelStyle$);
  $text$$13$$.$setCSSStyle$((0,D.$DvtCSSStyle$mergeStyles$$)($defaultFillColor_textStyle$$))
};
D.$DvtTreemapNode$$.prototype.$handleMouseOver$ = function $$DvtTreemapNode$$$$$handleMouseOver$$() {
  this.$_isolateButton$ || (this.$_isolateButton$ = (0,D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$)(this, this.$_shape$));
  D.$DvtTreemapNode$$.$superclass$.$handleMouseOver$.call(this)
};
D.$DvtTreemapNode$$.prototype.$handleMouseOut$ = function $$DvtTreemapNode$$$$$handleMouseOut$$() {
  this.$_isIsolated$ !== D.$JSCompiler_alias_TRUE$$ && (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this);
  D.$DvtTreemapNode$$.$superclass$.$handleMouseOut$.call(this)
};
D.$JSCompiler_StaticMethods__removeChildShape$$ = function $$JSCompiler_StaticMethods__removeChildShape$$$($JSCompiler_StaticMethods__removeChildShape$self$$, $childShape$$) {
  $childShape$$ && $JSCompiler_StaticMethods__removeChildShape$self$$.$_shape$.removeChild($childShape$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$__isolateNode$ = function $$JSCompiler_prototypeAlias$$$$__isolateNode$$() {
  this.$_isIsolated$ = D.$JSCompiler_alias_TRUE$$;
  this.$hideHoverEffect$();
  var $JSCompiler_StaticMethods___isolate$self$$inline_677$$ = this.$_view$, $currentNavigable$$inline_679_displayable$$inline_680$$ = $JSCompiler_StaticMethods___isolate$self$$inline_677$$.$__getEventManager$().$getFocus$();
  $currentNavigable$$inline_679_displayable$$inline_680$$ && $currentNavigable$$inline_679_displayable$$inline_680$$.$hideKeyboardFocusEffect$();
  $JSCompiler_StaticMethods___isolate$self$$inline_677$$.$_isolatedNodes$.push(this);
  $JSCompiler_StaticMethods___isolate$self$$inline_677$$.$__dispatchEvent$(new D.$DvtTreemapIsolateEvent$$(this.getId()));
  $JSCompiler_StaticMethods___isolate$self$$inline_677$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods___isolate$self$$inline_677$$.$Layout$(new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods___isolate$self$$inline_677$$.$Width$, $JSCompiler_StaticMethods___isolate$self$$inline_677$$.$Height$));
  $JSCompiler_StaticMethods___isolate$self$$inline_677$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_FALSE$$;
  $currentNavigable$$inline_679_displayable$$inline_680$$ = this.$getDisplayable$();
  $JSCompiler_StaticMethods___isolate$self$$inline_677$$.$_isolatedLayer$.$addChild$($currentNavigable$$inline_679_displayable$$inline_680$$);
  (0,D.$JSCompiler_StaticMethods__renderIsolateRestore$$)($JSCompiler_StaticMethods___isolate$self$$inline_677$$, this);
  (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this);
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$__restoreNode$ = function $$JSCompiler_prototypeAlias$$$$__restoreNode$$() {
  this.$_isIsolated$ = D.$JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$();
  var $JSCompiler_StaticMethods___restore$self$$inline_682$$ = this.$_view$, $restoreNode$$inline_683$$ = $JSCompiler_StaticMethods___restore$self$$inline_682$$.$_isolatedNodes$.pop(), $currentNavigable$$inline_684_id$$inline_9030$$ = $JSCompiler_StaticMethods___restore$self$$inline_682$$.$__getEventManager$().$getFocus$();
  $currentNavigable$$inline_684_id$$inline_9030$$ && $currentNavigable$$inline_684_id$$inline_9030$$.$hideKeyboardFocusEffect$();
  $currentNavigable$$inline_684_id$$inline_9030$$ = $restoreNode$$inline_683$$.getId();
  $JSCompiler_StaticMethods___restore$self$$inline_682$$.$_navigableIdToFocus$ = $currentNavigable$$inline_684_id$$inline_9030$$;
  $JSCompiler_StaticMethods___restore$self$$inline_682$$.$__dispatchEvent$(new D.$DvtTreemapIsolateEvent$$);
  $JSCompiler_StaticMethods___restore$self$$inline_682$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods___restore$self$$inline_682$$.$Layout$(new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods___restore$self$$inline_682$$.$Width$, $JSCompiler_StaticMethods___restore$self$$inline_682$$.$Height$));
  $JSCompiler_StaticMethods___restore$self$$inline_682$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods__renderIsolateRestore$$)($JSCompiler_StaticMethods___restore$self$$inline_682$$, $restoreNode$$inline_683$$);
  (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this);
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($target$$41$$, $x$$75$$, $y$$55$$) {
  return $target$$41$$ && $target$$41$$ instanceof D.$DvtButton$$ ? D.$JSCompiler_alias_NULL$$ : D.$DvtTreemapNode$$.$superclass$.$getDatatip$.call(this, $target$$41$$, $x$$75$$, $y$$55$$)
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$($target$$42$$) {
  return $target$$42$$ && $target$$42$$ instanceof D.$DvtButton$$ ? D.$JSCompiler_alias_NULL$$ : D.$DvtTreemapNode$$.$superclass$.$getDatatipColor$.call(this, $target$$42$$)
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = function $$JSCompiler_prototypeAlias$$$$getTooltip$$($target$$43$$) {
  return $target$$43$$ && $target$$43$$ instanceof D.$DvtButton$$ ? this.$_isIsolated$ ? this.$_view$.$_resources$.restore : this.$_view$.$_resources$.isolate : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$ = [];
  "off" != this.$Selectable$ && $states$$.push((0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  this.$_isIsolated$ && $states$$.push((0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, "STATE_ISOLATED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$_datatip$, $states$$, this.$Bundle$)
};
D.$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$UpdateAriaLabel$$() {
  !(0,D.$DvtAgent$deferAriaCreation$$)() && this.$_shape$ && (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this.$_shape$, "label", this.$getAriaLabel$())
};
D.$DvtBaseTreemapLayout$$ = function $$DvtBaseTreemapLayout$$$() {
  this.Init()
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreemapLayout$$, D.$DvtObj$$, "DvtBaseTreemapLayout");
D.$DvtBaseTreemapLayout$$.prototype.Init = function $$DvtBaseTreemapLayout$$$$Init$() {
  this.$_zIndex$ = 0
};
D.$DvtBaseTreemapLayout$$.prototype.$layout$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_setNodeBounds$$ = function $$JSCompiler_StaticMethods_setNodeBounds$$$($JSCompiler_StaticMethods_setNodeBounds$self_gap$$, $availBounds$$1_node$$5$$, $x$$77$$, $y$$57$$, $width$$19$$, $height$$17$$, $isRoot$$2_xx$$1$$) {
  $availBounds$$1_node$$5$$.$_zIndex$ = $JSCompiler_StaticMethods_setNodeBounds$self_gap$$.$_zIndex$;
  $JSCompiler_StaticMethods_setNodeBounds$self_gap$$.$_zIndex$++;
  if(!$isRoot$$2_xx$$1$$ || !$availBounds$$1_node$$5$$.$hasChildren$()) {
    $JSCompiler_StaticMethods_setNodeBounds$self_gap$$ = $JSCompiler_StaticMethods_setNodeBounds$self_gap$$.$getGapSize$($availBounds$$1_node$$5$$.$_view$, (0,D.$JSCompiler_StaticMethods_GetDepth$$)($availBounds$$1_node$$5$$));
    $isRoot$$2_xx$$1$$ = window.Math.round($x$$77$$ + $JSCompiler_StaticMethods_setNodeBounds$self_gap$$);
    var $yy$$1$$ = window.Math.round($y$$57$$ + $JSCompiler_StaticMethods_setNodeBounds$self_gap$$);
    if($availBounds$$1_node$$5$$ = $availBounds$$1_node$$5$$.$setLayoutParams$($isRoot$$2_xx$$1$$, $yy$$1$$, window.Math.round($x$$77$$ + $width$$19$$ - $JSCompiler_StaticMethods_setNodeBounds$self_gap$$) - $isRoot$$2_xx$$1$$, window.Math.round($y$$57$$ + $height$$17$$ - $JSCompiler_StaticMethods_setNodeBounds$self_gap$$) - $yy$$1$$)) {
      return $availBounds$$1_node$$5$$
    }
  }
  return new D.$DvtRectangle$$($x$$77$$, $y$$57$$, $width$$19$$, $height$$17$$)
};
D.$DvtBaseTreemapLayout$$.prototype.$getGapSize$ = function $$DvtBaseTreemapLayout$$$$$getGapSize$$($view$$7$$, $depth$$2$$) {
  var $groupGaps$$ = $view$$7$$.$_groupGaps$;
  return"o" == $groupGaps$$ ? 1 == $depth$$2$$ && 2 <= $view$$7$$.$_maxDepth$ ? 3 : 0 : "a" == $groupGaps$$ ? $depth$$2$$ < $view$$7$$.$_maxDepth$ ? 3 : 0 : 0
};
D.$DvtSquarifyingLayout$$ = function $$DvtSquarifyingLayout$$$() {
  this.Init()
};
D.$DvtObj$$.$createSubclass$(D.$DvtSquarifyingLayout$$, D.$DvtBaseTreemapLayout$$, "DvtSquarifyingLayout");
D.$DvtSquarifyingLayout$$.prototype.$layout$ = function $$DvtSquarifyingLayout$$$$$layout$$($view$$8$$, $root$$3$$, $x$$78$$, $y$$58$$, $width$$20$$, $height$$18$$, $bShowRoot$$2$$) {
  this.$_layout$($root$$3$$, $x$$78$$, $y$$58$$, $width$$20$$, $height$$18$$, $bShowRoot$$2$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$)
};
D.$DvtSquarifyingLayout$$.prototype.$_layout$ = function $$DvtSquarifyingLayout$$$$$_layout$$($children$$2_node$$6$$, $availBounds$$2_x$$79$$, $children$$inline_697_w$$8_y$$59$$, $i$$inline_700_width$$21$$, $area$$inline_698_factor$$inline_701_height$$19$$, $child$$inline_702_isRoot$$4_total$$inline_699$$) {
  $availBounds$$2_x$$79$$ = (0,D.$JSCompiler_StaticMethods_setNodeBounds$$)(this, $children$$2_node$$6$$, $availBounds$$2_x$$79$$, $children$$inline_697_w$$8_y$$59$$, $i$$inline_700_width$$21$$, $area$$inline_698_factor$$inline_701_height$$19$$, $child$$inline_702_isRoot$$4_total$$inline_699$$);
  $children$$2_node$$6$$ = $children$$2_node$$6$$.$getChildNodes$();
  if($children$$2_node$$6$$ != D.$JSCompiler_alias_NULL$$ && 0 < $children$$2_node$$6$$.length) {
    $children$$inline_697_w$$8_y$$59$$ = $children$$2_node$$6$$;
    $area$$inline_698_factor$$inline_701_height$$19$$ = $availBounds$$2_x$$79$$.$w$ * $availBounds$$2_x$$79$$.$h$;
    for($i$$inline_700_width$$21$$ = $i$$inline_700_width$$21$$ = $child$$inline_702_isRoot$$4_total$$inline_699$$ = 0;$i$$inline_700_width$$21$$ < $children$$inline_697_w$$8_y$$59$$.length;$i$$inline_700_width$$21$$++) {
      $child$$inline_702_isRoot$$4_total$$inline_699$$ += 0 < $children$$inline_697_w$$8_y$$59$$[$i$$inline_700_width$$21$$].$getSize$() ? $children$$inline_697_w$$8_y$$59$$[$i$$inline_700_width$$21$$].$getSize$() : 0
    }
    $area$$inline_698_factor$$inline_701_height$$19$$ = 0 == $area$$inline_698_factor$$inline_701_height$$19$$ ? 0 : $area$$inline_698_factor$$inline_701_height$$19$$ / $child$$inline_702_isRoot$$4_total$$inline_699$$;
    for($i$$inline_700_width$$21$$ = 0;$i$$inline_700_width$$21$$ < $children$$inline_697_w$$8_y$$59$$.length;$i$$inline_700_width$$21$$++) {
      $child$$inline_702_isRoot$$4_total$$inline_699$$ = $children$$inline_697_w$$8_y$$59$$[$i$$inline_700_width$$21$$], $child$$inline_702_isRoot$$4_total$$inline_699$$.$__pxSize$ = $child$$inline_702_isRoot$$4_total$$inline_699$$.$getSize$() * $area$$inline_698_factor$$inline_701_height$$19$$
    }
    $children$$2_node$$6$$ = $children$$2_node$$6$$.slice(0).sort(function($children$$2_node$$6$$, $availBounds$$2_x$$79$$) {
      return $children$$2_node$$6$$.$getSize$() - $availBounds$$2_x$$79$$.$getSize$()
    });
    $children$$inline_697_w$$8_y$$59$$ = window.Math.min($availBounds$$2_x$$79$$.$w$, $availBounds$$2_x$$79$$.$h$);
    (0,D.$JSCompiler_StaticMethods__squarify$$)(this, $children$$2_node$$6$$, $children$$inline_697_w$$8_y$$59$$, new D.$DvtRectangle$$($availBounds$$2_x$$79$$.x, $availBounds$$2_x$$79$$.y, $availBounds$$2_x$$79$$.$w$, $availBounds$$2_x$$79$$.$h$))
  }
};
D.$JSCompiler_StaticMethods__squarify$$ = function $$JSCompiler_StaticMethods__squarify$$$($JSCompiler_StaticMethods__squarify$self$$, $children$$4$$, $w$$9$$, $r$$3$$) {
  var $row$$ = [], $worst$$ = window.Infinity;
  if($children$$4$$ == D.$JSCompiler_alias_NULL$$ || 0 == $children$$4$$.length) {
    (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$, $w$$9$$, $r$$3$$)
  }else {
    for(;0 < $children$$4$$.length;) {
      var $c$$ = $children$$4$$.pop();
      if(0 > $c$$.$__pxSize$) {
        (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$, $w$$9$$, $r$$3$$);
        break
      }
      $row$$.push($c$$);
      var $min$$inline_707_newWorst$$, $areas$$inline_704_s2$$inline_710$$ = $row$$, $w$$inline_705_w2$$inline_711$$ = $w$$9$$, $total$$inline_706$$ = 0;
      $min$$inline_707_newWorst$$ = window.Infinity;
      for(var $max$$inline_708$$ = -window.Infinity, $i$$inline_709$$ = 0;$i$$inline_709$$ < $areas$$inline_704_s2$$inline_710$$.length;$i$$inline_709$$++) {
        $total$$inline_706$$ += $areas$$inline_704_s2$$inline_710$$[$i$$inline_709$$].$__pxSize$, $min$$inline_707_newWorst$$ = window.Math.min($min$$inline_707_newWorst$$, $areas$$inline_704_s2$$inline_710$$[$i$$inline_709$$].$__pxSize$), $max$$inline_708$$ = window.Math.max($max$$inline_708$$, $areas$$inline_704_s2$$inline_710$$[$i$$inline_709$$].$__pxSize$)
      }
      $areas$$inline_704_s2$$inline_710$$ = $total$$inline_706$$ * $total$$inline_706$$;
      $w$$inline_705_w2$$inline_711$$ *= $w$$inline_705_w2$$inline_711$$;
      $min$$inline_707_newWorst$$ = window.Math.max($w$$inline_705_w2$$inline_711$$ * $max$$inline_708$$ / $areas$$inline_704_s2$$inline_710$$, $areas$$inline_704_s2$$inline_710$$ / ($w$$inline_705_w2$$inline_711$$ * $min$$inline_707_newWorst$$));
      if($min$$inline_707_newWorst$$ > $worst$$) {
        $children$$4$$.push($c$$);
        $row$$.pop();
        $r$$3$$ = (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$, $w$$9$$, $r$$3$$);
        (0,D.$JSCompiler_StaticMethods__squarify$$)($JSCompiler_StaticMethods__squarify$self$$, $children$$4$$, window.Math.min($r$$3$$.$w$, $r$$3$$.$h$), $r$$3$$);
        break
      }else {
        if(0 == $children$$4$$.length) {
          (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$, $w$$9$$, $r$$3$$);
          break
        }else {
          $worst$$ = $min$$inline_707_newWorst$$
        }
      }
    }
  }
};
D.$JSCompiler_StaticMethods__layoutRow$$ = function $$JSCompiler_StaticMethods__layoutRow$$$($JSCompiler_StaticMethods__layoutRow$self$$, $row$$1$$, $w$$11_width$$22$$, $r$$4$$) {
  var $height$$20_total$$3$$ = 0, $i$$24$$;
  for($i$$24$$ = 0;$i$$24$$ < $row$$1$$.length;$i$$24$$++) {
    $height$$20_total$$3$$ += $row$$1$$[$i$$24$$].$__pxSize$
  }
  var $x$$80$$ = $r$$4$$.x, $y$$60$$ = $r$$4$$.y;
  if($w$$11_width$$22$$ == $r$$4$$.$w$) {
    $height$$20_total$$3$$ = 0 == $w$$11_width$$22$$ ? 0 : $height$$20_total$$3$$ / $w$$11_width$$22$$;
    for($i$$24$$ = 0;$i$$24$$ < $row$$1$$.length;$i$$24$$++) {
      $w$$11_width$$22$$ = $row$$1$$[$i$$24$$].$__pxSize$ / $height$$20_total$$3$$, $JSCompiler_StaticMethods__layoutRow$self$$.$_layout$($row$$1$$[$i$$24$$], $x$$80$$, $y$$60$$, $w$$11_width$$22$$, $height$$20_total$$3$$, D.$JSCompiler_alias_FALSE$$), $x$$80$$ += $w$$11_width$$22$$
    }
    return new D.$DvtRectangle$$($r$$4$$.x, $r$$4$$.y + $height$$20_total$$3$$, $r$$4$$.$w$, $r$$4$$.$h$ - $height$$20_total$$3$$)
  }
  $w$$11_width$$22$$ = 0 == $w$$11_width$$22$$ ? 0 : $height$$20_total$$3$$ / $w$$11_width$$22$$;
  for($i$$24$$ = 0;$i$$24$$ < $row$$1$$.length;$i$$24$$++) {
    $height$$20_total$$3$$ = $row$$1$$[$i$$24$$].$__pxSize$ / $w$$11_width$$22$$, $JSCompiler_StaticMethods__layoutRow$self$$.$_layout$($row$$1$$[$i$$24$$], $x$$80$$, $y$$60$$, $w$$11_width$$22$$, $height$$20_total$$3$$, D.$JSCompiler_alias_FALSE$$), $y$$60$$ += $height$$20_total$$3$$
  }
  return new D.$DvtRectangle$$($r$$4$$.x + $w$$11_width$$22$$, $r$$4$$.y, $r$$4$$.$w$ - $w$$11_width$$22$$, $r$$4$$.$h$)
};
D.$DvtSliceAndDiceLayout$$ = function $$DvtSliceAndDiceLayout$$$($isHoriz$$) {
  this.Init();
  this.$_isHoriz$ = $isHoriz$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtSliceAndDiceLayout$$, D.$DvtBaseTreemapLayout$$, "DvtSliceAndDiceLayout");
D.$DvtSliceAndDiceLayout$$.prototype.$layout$ = function $$DvtSliceAndDiceLayout$$$$$layout$$($view$$3$$, $root$$, $x$$68$$, $y$$48$$, $width$$15$$, $height$$13$$, $bShowRoot$$) {
  this.$_layout$(this.$_isHoriz$, $view$$3$$, $root$$, $x$$68$$, $y$$48$$, $width$$15$$, $height$$13$$, $bShowRoot$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$)
};
D.$DvtSliceAndDiceLayout$$.prototype.$_layout$ = function $$DvtSliceAndDiceLayout$$$$$_layout$$($isHoriz$$1$$, $view$$4$$, $children$$1_node$$3$$, $availBounds_x$$69$$, $childX_y$$49$$, $childY_width$$16$$, $childWidth_height$$14$$, $childHeight_isRoot$$1$$) {
  $availBounds_x$$69$$ = (0,D.$JSCompiler_StaticMethods_setNodeBounds$$)(this, $children$$1_node$$3$$, $availBounds_x$$69$$, $childX_y$$49$$, $childY_width$$16$$, $childWidth_height$$14$$, $childHeight_isRoot$$1$$);
  $children$$1_node$$3$$ = $children$$1_node$$3$$.$getChildNodes$();
  if($children$$1_node$$3$$ != D.$JSCompiler_alias_NULL$$) {
    $childX_y$$49$$ = $availBounds_x$$69$$.x;
    $childY_width$$16$$ = $availBounds_x$$69$$.y;
    $childWidth_height$$14$$ = $availBounds_x$$69$$.$w$;
    $childHeight_isRoot$$1$$ = $availBounds_x$$69$$.$h$;
    var $total$$ = 0, $i$$19$$;
    for($i$$19$$ = 0;$i$$19$$ < $children$$1_node$$3$$.length;$i$$19$$++) {
      $total$$ += 0 < $children$$1_node$$3$$[$i$$19$$].$getSize$() ? $children$$1_node$$3$$[$i$$19$$].$getSize$() : 0
    }
    "on" == this.$Sorting$ && ($children$$1_node$$3$$ = $children$$1_node$$3$$.slice(0), $children$$1_node$$3$$.sort(function($isHoriz$$1$$, $view$$4$$) {
      return $view$$4$$.$getSize$() - $isHoriz$$1$$.$getSize$()
    }));
    $isHoriz$$1$$ && (0,D.$DvtAgent$isRightToLeft$$)($view$$4$$.$_context$) && ($children$$1_node$$3$$ = $children$$1_node$$3$$.slice(0).reverse());
    for($i$$19$$ = 0;$i$$19$$ < $children$$1_node$$3$$.length;$i$$19$$++) {
      var $child$$2$$ = $children$$1_node$$3$$[$i$$19$$];
      if(!(0 >= $child$$2$$.$getSize$())) {
        var $sizeRatio$$ = $child$$2$$.$getSize$() / $total$$;
        $isHoriz$$1$$ ? $childWidth_height$$14$$ = $availBounds_x$$69$$.$w$ * $sizeRatio$$ : $childHeight_isRoot$$1$$ = $availBounds_x$$69$$.$h$ * $sizeRatio$$;
        this.$_layout$(!$isHoriz$$1$$, $view$$4$$, $child$$2$$, $childX_y$$49$$, $childY_width$$16$$, $childWidth_height$$14$$, $childHeight_isRoot$$1$$, D.$JSCompiler_alias_FALSE$$);
        $isHoriz$$1$$ ? $childX_y$$49$$ += $childWidth_height$$14$$ : $childY_width$$16$$ += $childHeight_isRoot$$1$$
      }
    }
  }
};
D.$DvtTreemapIsolateEvent$$ = function $$DvtTreemapIsolateEvent$$$($id$$8$$) {
  this.Init("treemapIsolate");
  this.$_id$ = $id$$8$$ ? $id$$8$$ : D.$JSCompiler_alias_NULL$$
};
(0,D.$goog$exportSymbol$$)("DvtTreemapIsolateEvent", D.$DvtTreemapIsolateEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapIsolateEvent$$, D.$DvtBaseComponentEvent$$, "DvtTreemapIsolateEvent");
D.$DvtTreemapIsolateEvent$$.TYPE = "treemapIsolate";
D.$DvtTreemapIsolateEvent$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtTreemapIsolateEvent$$.prototype.getId = D.$DvtTreemapIsolateEvent$$.prototype.getId;
D.$DvtTreemapKeyboardHandler$$ = function $$DvtTreemapKeyboardHandler$$$($manager$$) {
  this.Init($manager$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapKeyboardHandler$$, D.$DvtBaseTreeKeyboardHandler$$, "DvtTreemapKeyboardHandler");
D.$DvtTreemapKeyboardHandler$$.prototype.$isNavigationEvent$ = function $$DvtTreemapKeyboardHandler$$$$$isNavigationEvent$$($event$$5_keyCode$$1$$) {
  var $isNavigable$$ = D.$DvtTreemapKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$5_keyCode$$1$$);
  if(!$isNavigable$$ && ($event$$5_keyCode$$1$$ = $event$$5_keyCode$$1$$.keyCode, 219 == $event$$5_keyCode$$1$$ || 221 == $event$$5_keyCode$$1$$)) {
    $isNavigable$$ = D.$JSCompiler_alias_TRUE$$
  }
  return $isNavigable$$
};
D.$DvtTreemapEventManager$$ = function $$DvtTreemapEventManager$$$($view$$5$$, $context$$21$$, $callback$$25$$, $callbackObj$$2$$) {
  D.$DvtBaseTreeEventManager$$.call(this, $view$$5$$, $context$$21$$, $callback$$25$$, $callbackObj$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapEventManager$$, D.$DvtBaseTreeEventManager$$, "DvtTreemapEventManager");
D.$DvtTreemapEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtTreemapEventManager$$$$$ProcessKeyboardEvent$$($event$$6$$) {
  var $eventConsumed$$ = D.$JSCompiler_alias_TRUE$$;
  if(13 == $event$$6$$.keyCode && $event$$6$$.ctrlKey) {
    var $node$$4$$ = this.$getFocus$();
    $node$$4$$.$isIsolateEnabled$() && ($node$$4$$.$_isIsolated$ ? $node$$4$$.$__restoreNode$() : $node$$4$$.$__isolateNode$());
    $event$$6$$.preventDefault()
  }else {
    $eventConsumed$$ = D.$DvtTreemapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$6$$)
  }
  return $eventConsumed$$
};
D.$DvtTreemapEventManager$$.prototype.$isClearMenuAllowed$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$DvtTreemapBundle$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapBundle$$, D.$DvtUtilBundle$$, "DvtTreemapBundle");
D.$DvtTreemapBundle$$._defaults = {COLOR:"Color", SIZE:"Size"};
D.$DvtTreemapBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtTreemapBundle$$$$$GetDefaultStringForKey$$($key$$25$$) {
  var $defaultStr$$ = D.$DvtTreemapBundle$$.$superclass$.$GetDefaultStringForKey$.call(this, $key$$25$$);
  return $defaultStr$$ ? $defaultStr$$ : D.$DvtTreemapBundle$$._defaults[$key$$25$$]
};
D.$DvtTreemapBundle$$.prototype.$GetBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtTreemapBundle");
D.$DvtTreemapDefaults$$ = function $$DvtTreemapDefaults$$$() {
  this.Init({skyros:D.$DvtTreemapDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapDefaults$$, D.$DvtBaseTreeDefaults$$, "DvtTreemapDefaults");
D.$DvtTreemapDefaults$VERSION_1$$ = {nodeDefaults:{header:{labelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;")}}};
D.$DvtTreemapJsonUtils$$ = (0,D.$JSCompiler_set$$)("$_context$");
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapJsonUtils$$, D.$DvtBaseTreeJsonUtils$$, "DvtTreemapJsonUtils");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapJsonUtils$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetComponentName$ = (0,D.$JSCompiler_returnArg$$)("treemap");
D.$JSCompiler_prototypeAlias$$.$WriteComponentAttributes$ = function $$JSCompiler_prototypeAlias$$$$WriteComponentAttributes$$($animationOnDisplay_options$$7$$) {
  var $ret$$2$$ = D.$DvtTreemapJsonUtils$$.$superclass$.$WriteComponentAttributes$.call(this, $animationOnDisplay_options$$7$$), $ret$$2$$ = $ret$$2$$ + this.$WriteAttr$("irk", $animationOnDisplay_options$$7$$.isolatedNode), $groupGaps$$1_layout$$ = $animationOnDisplay_options$$7$$.groupGaps;
  "all" == $groupGaps$$1_layout$$ ? $ret$$2$$ += this.$WriteAttr$("gg", "a") : "none" == $groupGaps$$1_layout$$ && ($ret$$2$$ += this.$WriteAttr$("gg", "n"));
  $groupGaps$$1_layout$$ = $animationOnDisplay_options$$7$$.layout;
  "sliceAndDiceHorizontal" == $groupGaps$$1_layout$$ ? $ret$$2$$ += this.$WriteAttr$("layout", "h") : "sliceAndDiceVertical" == $groupGaps$$1_layout$$ && ($ret$$2$$ += this.$WriteAttr$("layout", "v"));
  $animationOnDisplay_options$$7$$ = $animationOnDisplay_options$$7$$.animationOnDisplay;
  return $ret$$2$$ = "auto" == $animationOnDisplay_options$$7$$ ? $ret$$2$$ + this.$WriteAttr$("adi", "alphaFade") : $ret$$2$$ + this.$WriteAttr$("adi", $animationOnDisplay_options$$7$$)
};
D.$JSCompiler_prototypeAlias$$.$WriteNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$WriteNodeAttributes$$($options$$8$$, $nodeData$$) {
  var $ret$$3$$ = D.$DvtTreemapJsonUtils$$.$superclass$.$WriteNodeAttributes$.call(this, $options$$8$$, $nodeData$$);
  if("off" == ($nodeData$$.labelDisplay ? $nodeData$$.labelDisplay : $options$$8$$.nodeDefaults.labelDisplay)) {
    $ret$$3$$ += this.$WriteAttr$("ld", "o")
  }
  var $groupLabelDisplay_header$$2_labelHalign_labelValign$$ = $nodeData$$.groupLabelDisplay ? $nodeData$$.groupLabelDisplay : $options$$8$$.nodeDefaults.groupLabelDisplay;
  "node" == $groupLabelDisplay_header$$2_labelHalign_labelValign$$ ? $ret$$3$$ += this.$WriteAttr$("gld", "n") : "off" == $groupLabelDisplay_header$$2_labelHalign_labelValign$$ && ($ret$$3$$ += this.$WriteAttr$("gld", "o"));
  $groupLabelDisplay_header$$2_labelHalign_labelValign$$ = $nodeData$$.labelHalign ? $nodeData$$.labelHalign : $options$$8$$.nodeDefaults.labelHalign;
  "start" == $groupLabelDisplay_header$$2_labelHalign_labelValign$$ ? $ret$$3$$ += this.$WriteAttr$("ha", "s") : "end" == $groupLabelDisplay_header$$2_labelHalign_labelValign$$ && ($ret$$3$$ += this.$WriteAttr$("ha", "e"));
  $groupLabelDisplay_header$$2_labelHalign_labelValign$$ = $nodeData$$.labelValign ? $nodeData$$.labelValign : $options$$8$$.nodeDefaults.labelValign;
  "top" == $groupLabelDisplay_header$$2_labelHalign_labelValign$$ ? $ret$$3$$ += this.$WriteAttr$("va", "t") : "bottom" == $groupLabelDisplay_header$$2_labelHalign_labelValign$$ && ($ret$$3$$ += this.$WriteAttr$("va", "b"));
  var $groupLabelDisplay_header$$2_labelHalign_labelValign$$ = $nodeData$$.header, $ret$$3$$ = $ret$$3$$ + this.$WriteAttr$("hls", $groupLabelDisplay_header$$2_labelHalign_labelValign$$ && $groupLabelDisplay_header$$2_labelHalign_labelValign$$.labelStyle ? $groupLabelDisplay_header$$2_labelHalign_labelValign$$.labelStyle : $options$$8$$.nodeDefaults.header.labelStyle), $headerHalign$$ = $groupLabelDisplay_header$$2_labelHalign_labelValign$$ && $groupLabelDisplay_header$$2_labelHalign_labelValign$$.labelHalign ? 
  $groupLabelDisplay_header$$2_labelHalign_labelValign$$.labelHalign : $options$$8$$.nodeDefaults.header.labelHalign;
  "center" == $headerHalign$$ ? $ret$$3$$ += this.$WriteAttr$("hha", "c") : "end" == $headerHalign$$ && ($ret$$3$$ += this.$WriteAttr$("hha", "e"));
  if("off" == ($groupLabelDisplay_header$$2_labelHalign_labelValign$$ && $groupLabelDisplay_header$$2_labelHalign_labelValign$$.isolate ? $groupLabelDisplay_header$$2_labelHalign_labelValign$$.isolate : $options$$8$$.nodeDefaults.header.isolate)) {
    $ret$$3$$ += this.$WriteAttr$("hi", "off")
  }
  if("on" == ($groupLabelDisplay_header$$2_labelHalign_labelValign$$ && $groupLabelDisplay_header$$2_labelHalign_labelValign$$.useNodeColor ? $groupLabelDisplay_header$$2_labelHalign_labelValign$$.useNodeColor : $options$$8$$.nodeDefaults.header.useNodeColor)) {
    $ret$$3$$ += this.$WriteAttr$("unc", "on")
  }
  return $ret$$3$$
};
D.$JSCompiler_prototypeAlias$$.$WriteResourcesElement$ = function $$JSCompiler_prototypeAlias$$$$WriteResourcesElement$$($options$$9_resources$$2$$) {
  var $ret$$4$$, $bRtl$$1_bundle$$ = new D.$DvtTreemapBundle$$;
  $ret$$4$$ = "\x3cresources" + this.$WriteAttr$("legendSize", (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bRtl$$1_bundle$$, "SIZE"));
  $ret$$4$$ += this.$WriteAttr$("legendColor", (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bRtl$$1_bundle$$, "COLOR"));
  $options$$9_resources$$2$$ = $options$$9_resources$$2$$._resources;
  $bRtl$$1_bundle$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$);
  $ret$$4$$ += this.$WriteAttr$("maximizeUp", $bRtl$$1_bundle$$ && $options$$9_resources$$2$$.isolateRtl ? $options$$9_resources$$2$$.isolateRtl : $options$$9_resources$$2$$.isolate);
  $ret$$4$$ += this.$WriteAttr$("maximizeDown", $bRtl$$1_bundle$$ && $options$$9_resources$$2$$.isolateDownRtl ? $options$$9_resources$$2$$.isolateDownRtl : $options$$9_resources$$2$$.isolateDown);
  $ret$$4$$ += this.$WriteAttr$("maximizeOver", $bRtl$$1_bundle$$ && $options$$9_resources$$2$$.isolateOverRtl ? $options$$9_resources$$2$$.isolateOverRtl : $options$$9_resources$$2$$.isolateOver);
  $ret$$4$$ += this.$WriteAttr$("restoreUp", $bRtl$$1_bundle$$ && $options$$9_resources$$2$$.restoreRtl ? $options$$9_resources$$2$$.restoreRtl : $options$$9_resources$$2$$.restore);
  $ret$$4$$ += this.$WriteAttr$("restoreDown", $bRtl$$1_bundle$$ && $options$$9_resources$$2$$.restoreDownRtl ? $options$$9_resources$$2$$.restoreDownRtl : $options$$9_resources$$2$$.restoreDown);
  $ret$$4$$ += this.$WriteAttr$("restoreOver", $bRtl$$1_bundle$$ && $options$$9_resources$$2$$.restoreOverRtl ? $options$$9_resources$$2$$.restoreOverRtl : $options$$9_resources$$2$$.restoreOver);
  $ret$$4$$ += this.$WriteAttr$("alta", "true");
  return $ret$$4$$ + "/\x3e\n"
};
D.$JSCompiler_prototypeAlias$$.$WriteStyleElement$ = function $$JSCompiler_prototypeAlias$$$$WriteStyleElement$$($nodeHeaderSelectedOuterColor_options$$10$$) {
  var $ret$$5$$ = D.$DvtTreemapJsonUtils$$.$superclass$.$WriteStyleElement$.call(this, $nodeHeaderSelectedOuterColor_options$$10$$), $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$10$$.animationUpdateColor;
  $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ && ($ret$$5$$ += this.$WriteAttr$("top", "-tr-animation-update-color: " + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$10$$.nodeDefaults.hoverColor) && ($ret$$5$$ += this.$WriteAttr$("node-hover", "border-color: " + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  var $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$10$$.nodeDefaults.selectedInnerColor, $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = $nodeHeaderSelectedOuterColor_options$$10$$.nodeDefaults.selectedOuterColor;
  ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ ? "-tr-inner-color:" + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ + 
  ";" : "") + ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ ? "-tr-outer-color:" + $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ : "")) && ($ret$$5$$ += this.$WriteAttr$("node-selected", $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$10$$.nodeDefaults.header.backgroundColor;
  $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = $nodeHeaderSelectedOuterColor_options$$10$$.nodeDefaults.header.borderColor;
  ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ ? "background-color:" + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ + 
  ";" : "") + ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ ? "border-color:" + $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ : "")) && ($ret$$5$$ += this.$WriteAttr$("nodeHeader", $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  var $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = $nodeHeaderSelectedOuterColor_options$$10$$.nodeDefaults.header.hoverBackgroundColor, $nodeHeaderHoverInnerColor$$ = $nodeHeaderSelectedOuterColor_options$$10$$.nodeDefaults.header.hoverInnerColor, $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = 
  $nodeHeaderSelectedOuterColor_options$$10$$.nodeDefaults.header.hoverOuterColor, $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ ? "background-color:" + $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ + ";" : "") + 
  ($nodeHeaderHoverInnerColor$$ ? "-tr-inner-color:" + $nodeHeaderHoverInnerColor$$ + ";" : "");
  ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ += $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ ? "-tr-outer-color:" + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ : 
  "") && ($ret$$5$$ += this.$WriteAttr$("nodeHeader-hover", $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$));
  $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = $nodeHeaderSelectedOuterColor_options$$10$$.nodeDefaults.header.selectedBackgroundColor;
  $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ = $nodeHeaderSelectedOuterColor_options$$10$$.nodeDefaults.header.selectedInnerColor;
  $nodeHeaderSelectedOuterColor_options$$10$$ = $nodeHeaderSelectedOuterColor_options$$10$$.nodeDefaults.header.selectedOuterColor;
  $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ = ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ ? "background-color:" + $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ + 
  ";" : "") + ($nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ ? "-tr-inner-color:" + $nodeHeaderBorderColor_nodeHeaderHoverBackgroundColor_nodeHeaderHoverStr_nodeHeaderSelectedInnerColor_nodeSelectedOuterColor$$ + ";" : "");
  ($animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$ += $nodeHeaderSelectedOuterColor_options$$10$$ ? "-tr-outer-color:" + $nodeHeaderSelectedOuterColor_options$$10$$ : "") && ($ret$$5$$ += this.$WriteAttr$("nodeHeader-selected", $animationColor_nodeHeaderBackgroundColor_nodeHeaderHoverOuterColor_nodeHeaderSelectedBackgroundColor_nodeHeaderSelectedStr_nodeHeaderStr_nodeHoverColor_nodeSelectedInnerColor_nodeSelectedStr$$));
  return $ret$$5$$ + "/\x3e\n"
};
});