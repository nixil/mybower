define(['./DvtToolkit', './DvtSubcomponent'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtBaseTreeView$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtBaseTreeView", D.$DvtBaseTreeView$$);
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeView$$, D.$DvtBaseComponent$$, "DvtBaseTreeView");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeView$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$477$$, $callback$$108$$, $callbackObj$$78$$) {
  D.$DvtBaseTreeView$$.$superclass$.Init.call(this, $context$$477$$, $callback$$108$$, $callbackObj$$78$$);
  this.$_eventHandler$ = this.$CreateEventManager$(this, $context$$477$$, this.$__dispatchEvent$, this);
  this.$_eventHandler$.$addListeners$(this);
  this.$_dragSource$ = new D.$DvtDragSource$$($context$$477$$);
  this.$_dropTarget$ = new D.$DvtBaseTreeDropTarget$$(this);
  (0,D.$JSCompiler_StaticMethods_setDragSource$$)(this.$_eventHandler$, this.$_dragSource$);
  this.$LastXml$ = this.$_legend$ = D.$JSCompiler_alias_NULL$$;
  this.$_hasFocus$ = D.$JSCompiler_alias_FALSE$$;
  this.$_navigableIdToFocus$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($xmlString$$12$$, $container$$141_props$$25_width$$131$$, $availSpace$$101_bBlackBoxUpdate$$2_height$$112$$) {
  this.$Width$ = $container$$141_props$$25_width$$131$$;
  this.$Height$ = $availSpace$$101_bBlackBoxUpdate$$2_height$$112$$;
  this.$_eventHandler$ && this.$_eventHandler$.$hideTooltip$();
  this.$Animation$ && !$xmlString$$12$$ && ($xmlString$$12$$ = this.$LastXml$);
  $xmlString$$12$$ && (this.$LastXml$ = $xmlString$$12$$);
  $xmlString$$12$$ && ($container$$141_props$$25_width$$131$$ = this.$Parse$($xmlString$$12$$), this.$ApplyParsedProperties$($container$$141_props$$25_width$$131$$));
  $availSpace$$101_bBlackBoxUpdate$$2_height$$112$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  this.$Layout$($availSpace$$101_bBlackBoxUpdate$$2_height$$112$$);
  $container$$141_props$$25_width$$131$$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChild$($container$$141_props$$25_width$$131$$);
  this.$_templates$ && (this.$_afContext$ = new D.$DvtAfContext$$(this.$_context$, this.$_eventHandler$), this.$_afContext$.$_rmIfNotFit$ = D.$JSCompiler_alias_TRUE$$);
  this.$Render$($container$$141_props$$25_width$$131$$, $availSpace$$101_bBlackBoxUpdate$$2_height$$112$$);
  this.$Animation$ && (this.$AnimationStopped$ = D.$JSCompiler_alias_TRUE$$, this.$Animation$.stop());
  var $ah$$4_bounds$$103$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  $availSpace$$101_bBlackBoxUpdate$$2_height$$112$$ = D.$JSCompiler_alias_FALSE$$;
  if(this.$_container$) {
    if(this.$AnimationOnDataChange$ && $xmlString$$12$$) {
      if(D.$DvtBlackBoxAnimationHandler$$.isSupported(this.$AnimationOnDataChange$)) {
        this.$Animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$_context$, this.$AnimationOnDataChange$, this.$_container$, $container$$141_props$$25_width$$131$$, $ah$$4_bounds$$103$$, this.$AnimationDuration$), $availSpace$$101_bBlackBoxUpdate$$2_height$$112$$ = D.$JSCompiler_alias_TRUE$$
      }else {
        if(this.$_oldRoot$ && "auto" == this.$AnimationOnDataChange$) {
          this.$_deleteContainer$ = this.$GetDeleteContainer$();
          this.$addChild$(this.$_deleteContainer$);
          var $ah$$4_bounds$$103$$ = new D.$DvtBaseTreeAnimationHandler$$(this.$_context$, this.$_deleteContainer$), $oldRoot$$inline_7014$$ = this.$_oldRoot$, $newRoot$$inline_7015$$ = this.$_root$, $oldAncestors$$inline_7016_oldList$$inline_7018$$ = this.$_oldAncestors$, $newAncestors$$inline_7017_newList$$inline_7019$$ = this.$_ancestors$;
          $ah$$4_bounds$$103$$.$_bDrill$ = D.$JSCompiler_alias_FALSE$$;
          $ah$$4_bounds$$103$$.$_oldRoot$ = $oldRoot$$inline_7014$$;
          $ah$$4_bounds$$103$$.$_oldAncestors$ = $oldAncestors$$inline_7016_oldList$$inline_7018$$;
          (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($newAncestors$$inline_7017_newList$$inline_7019$$, $oldRoot$$inline_7014$$) || (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($oldAncestors$$inline_7016_oldList$$inline_7018$$, $newRoot$$inline_7015$$) ? ($ah$$4_bounds$$103$$.$_bDrill$ = D.$JSCompiler_alias_TRUE$$, $oldAncestors$$inline_7016_oldList$$inline_7018$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($oldRoot$$inline_7014$$), $newAncestors$$inline_7017_newList$$inline_7019$$ = 
          (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($newRoot$$inline_7015$$), $oldAncestors$$inline_7016_oldList$$inline_7018$$.push($oldRoot$$inline_7014$$), $newAncestors$$inline_7017_newList$$inline_7019$$.push($newRoot$$inline_7015$$), (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah$$4_bounds$$103$$, $oldAncestors$$inline_7016_oldList$$inline_7018$$, $newAncestors$$inline_7017_newList$$inline_7019$$)) : (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah$$4_bounds$$103$$, 
          [$oldRoot$$inline_7014$$], [$newRoot$$inline_7015$$]);
          this.$Animation$ = $ah$$4_bounds$$103$$.$getAnimation$()
        }
      }
    }
  }else {
    this.$Animation$ = this.$GetDisplayAnimation$($container$$141_props$$25_width$$131$$, $ah$$4_bounds$$103$$)
  }
  this.$_oldAncestors$ = this.$_oldRoot$ = D.$JSCompiler_alias_NULL$$;
  this.$Animation$ && (this.$_eventHandler$.$removeListeners$(this), this.$Animation$.$setOnEnd$(this.$OnAnimationEnd$, this), this.$Animation$.play());
  $availSpace$$101_bBlackBoxUpdate$$2_height$$112$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && this.removeChild(this.$_container$);
  this.$_container$ = $container$$141_props$$25_width$$131$$;
  $xmlString$$12$$ ? (this.$_processInitialSelections$(), (0,D.$JSCompiler_StaticMethods__processInitialFocus$$)(this, !this.$Animation$)) : this.$ReselectNodes$()
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$Layout$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$Render$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_RenderBackground$$ = function $$JSCompiler_StaticMethods_RenderBackground$$$($JSCompiler_StaticMethods_RenderBackground$self$$, $container$$143$$) {
  var $background$$12$$ = new D.$DvtRect$$($JSCompiler_StaticMethods_RenderBackground$self$$.$_context$, 0, 0, $JSCompiler_StaticMethods_RenderBackground$self$$.$Width$, $JSCompiler_StaticMethods_RenderBackground$self$$.$Height$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($background$$12$$);
  $container$$143$$.$addChild$($background$$12$$)
};
D.$JSCompiler_StaticMethods_LayoutBreadcrumbs$$ = function $$JSCompiler_StaticMethods_LayoutBreadcrumbs$$$($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$, $availSpace$$103$$) {
  if($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_ancestors$ && 0 < $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_ancestors$.length) {
    var $rootLabel$$1$$ = $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_root$ ? $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_root$.$getLabel$() : D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ && (0,D.$JSCompiler_StaticMethods_removeComponentKeyboardHandler$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$.$getEventManager$());
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ = D.$DvtTreeBreadcrumbsRenderer$$.$render$($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$, $availSpace$$103$$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_ancestors$, $rootLabel$$1$$);
    (0,D.$JSCompiler_StaticMethods_addComponentKeyboardHandlerAt$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$.$getEventManager$())
  }else {
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ && (0,D.$JSCompiler_StaticMethods_removeComponentKeyboardHandler$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$.$getEventManager$()), $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ = D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_LayoutLegend$$ = function $$JSCompiler_StaticMethods_LayoutLegend$$$($JSCompiler_StaticMethods_LayoutLegend$self$$, $availSpace$$104$$) {
  var $attrGroups$$11$$ = D.$JSCompiler_alias_NULL$$;
  if($JSCompiler_StaticMethods_LayoutLegend$self$$.$_legendSource$ && $JSCompiler_StaticMethods_LayoutLegend$self$$.$_attrGroups$) {
    for(var $i$$612$$ = 0;$i$$612$$ < $JSCompiler_StaticMethods_LayoutLegend$self$$.$_attrGroups$.length;$i$$612$$++) {
      var $agDef$$1$$ = $JSCompiler_StaticMethods_LayoutLegend$self$$.$_attrGroups$[$i$$612$$];
      if($agDef$$1$$.id == $JSCompiler_StaticMethods_LayoutLegend$self$$.$_legendSource$) {
        $attrGroups$$11$$ = $agDef$$1$$.$attrGroups$;
        break
      }
    }
  }
  if($JSCompiler_StaticMethods_LayoutLegend$self$$.$_sizeValueStr$ || $JSCompiler_StaticMethods_LayoutLegend$self$$.$_colorValueStr$ || $attrGroups$$11$$) {
    $JSCompiler_StaticMethods_LayoutLegend$self$$.$_legend$ = D.$DvtTreeLegendRenderer$$.$render$($JSCompiler_StaticMethods_LayoutLegend$self$$, $availSpace$$104$$, $JSCompiler_StaticMethods_LayoutLegend$self$$.$_resources$.legendSize, $JSCompiler_StaticMethods_LayoutLegend$self$$.$_resources$.legendColor, $JSCompiler_StaticMethods_LayoutLegend$self$$.$_sizeValueStr$, $JSCompiler_StaticMethods_LayoutLegend$self$$.$_colorValueStr$, $attrGroups$$11$$)
  }
};
D.$JSCompiler_StaticMethods_RenderEmptyText$$ = function $$JSCompiler_StaticMethods_RenderEmptyText$$$($JSCompiler_StaticMethods_RenderEmptyText$self$$, $container$$146$$) {
  if($JSCompiler_StaticMethods_RenderEmptyText$self$$.$_emptyText$) {
    var $text$$87$$ = new D.$DvtOutputText$$($JSCompiler_StaticMethods_RenderEmptyText$self$$.$_context$, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$_emptyText$, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Width$ / 2, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Height$ / 2);
    $text$$87$$.$alignCenter$();
    $text$$87$$.$alignMiddle$();
    D.$DvtTextUtils$$.$fitText$($text$$87$$, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Width$ - 4, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Height$ - 4, $JSCompiler_StaticMethods_RenderEmptyText$self$$);
    $container$$146$$.$addChild$($text$$87$$)
  }
};
D.$JSCompiler_StaticMethods_HasValidData$$ = function $$JSCompiler_StaticMethods_HasValidData$$$($JSCompiler_StaticMethods_HasValidData$self$$) {
  return $JSCompiler_StaticMethods_HasValidData$self$$.$_root$ && 0 < $JSCompiler_StaticMethods_HasValidData$self$$.$_root$.$getSize$()
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeView$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$GetDisplayAnimation$$($container$$147$$, $bounds$$105$$) {
  return D.$DvtBlackBoxAnimationHandler$$.isSupported(this.$AnimationOnDisplay$) ? D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$_context$, this.$AnimationOnDisplay$, $container$$147$$, $bounds$$105$$, this.$AnimationDuration$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$_deleteContainer$ && (this.removeChild(this.$_deleteContainer$), this.$_deleteContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$AnimationStopped$ = D.$JSCompiler_alias_FALSE$$;
  this.$Animation$ = D.$JSCompiler_alias_NULL$$;
  this.$_eventHandler$.$addListeners$(this);
  (0,D.$JSCompiler_StaticMethods__processInitialFocus$$)(this, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$GetDeleteContainer$ = function $$JSCompiler_prototypeAlias$$$$GetDeleteContainer$$() {
  return new D.$DvtContainer$$(this.$_context$)
};
D.$JSCompiler_prototypeAlias$$.$CreateKeyboardHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateKeyboardHandler$$($manager$$19$$) {
  return new D.$DvtBaseTreeKeyboardHandler$$($manager$$19$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$69$$, $context$$478$$, $callback$$109$$, $callbackObj$$79$$) {
  return new D.$DvtBaseTreeEventManager$$($view$$69$$, $context$$478$$, $callback$$109$$, $callbackObj$$79$$)
};
D.$JSCompiler_prototypeAlias$$.$GetInitialFocusedItem$ = (0,D.$JSCompiler_identityFn$$)();
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$DvtBaseTreeView$_calcMaxDepth$$ = function $$DvtBaseTreeView$_calcMaxDepth$$$($node$$308$$, $depth$$20$$) {
  var $maxDepth$$2$$ = $depth$$20$$, $children$$26$$ = $node$$308$$.$getChildNodes$();
  if($children$$26$$) {
    for(var $i$$613$$ = 0;$i$$613$$ < $children$$26$$.length;$i$$613$$++) {
      var $childDepth$$ = (0,D.$DvtBaseTreeView$_calcMaxDepth$$)($children$$26$$[$i$$613$$], $depth$$20$$ + 1), $maxDepth$$2$$ = window.Math.max($maxDepth$$2$$, $childDepth$$)
    }
  }
  return $maxDepth$$2$$
};
D.$DvtBaseTreeView$$.prototype.$ApplyParsedProperties$ = function $$DvtBaseTreeView$$$$$ApplyParsedProperties$$($props$$26$$) {
  this.$_oldRoot$ = this.$_root$;
  this.$_oldAncestors$ = this.$_ancestors$;
  this.$_nodeCount$ = $props$$26$$.$nodeCount$;
  this.$_resources$ = $props$$26$$.$resources$ ? $props$$26$$.$resources$ : {};
  this.$_root$ = $props$$26$$.root;
  this.$_emptyText$ = $props$$26$$.$emptyText$;
  this.$_ancestors$ = $props$$26$$.$ancestors$;
  this.$_dropSiteFill$ = new D.$DvtSolidFill$$($props$$26$$.$dropSiteFillColor$, $props$$26$$.$dropSiteOpacity$);
  this.$_dropSiteStroke$ = new D.$DvtSolidStroke$$($props$$26$$.$dropSiteBorderColor$);
  this.$AnimationOnDisplay$ = $props$$26$$.$animationOnDisplay$;
  this.$AnimationOnDataChange$ = $props$$26$$.$animationOnDataChange$;
  this.$AnimationDuration$ = $props$$26$$.$animationDuration$;
  this.$Sorting$ = $props$$26$$.$sorting$;
  this.$_styles$ = $props$$26$$.$styles$;
  this.$_nodeSelection$ = $props$$26$$.$nodeSelection$;
  $props$$26$$.$templates$ && (this.$_templates$ = $props$$26$$.$templates$);
  this.$_nodeSelection$ ? (this.$_selectionHandler$ = new D.$DvtSelectionHandler$$($props$$26$$.$nodeSelection$), this.$_initialSelection$ = $props$$26$$.$selectedIds$) : this.$_selectionHandler$ = D.$JSCompiler_alias_NULL$$;
  this.$_eventHandler$.$setSelectionHandler$(this.$_selectionHandler$);
  this.$_eventHandler$.$ContextMenuHandler$ = $props$$26$$.$contextMenuHandler$;
  this.$_selectionHandler$ ? (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventHandler$, this.$CreateKeyboardHandler$(this.$_eventHandler$)) : (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventHandler$, D.$JSCompiler_alias_NULL$$);
  this.$_root$ && (this.$_maxDepth$ = (0,D.$DvtBaseTreeView$_calcMaxDepth$$)(this.$_root$, 0));
  this.$_attrGroups$ = $props$$26$$.$attrGroups$;
  this.$_legendSource$ = $props$$26$$.$legendSource$;
  this.$_sizeValueStr$ = $props$$26$$.$sizeValueStr$;
  this.$_colorValueStr$ = $props$$26$$.$colorValueStr$
};
D.$DvtBaseTreeView$$.prototype.$ReselectNodes$ = function $$DvtBaseTreeView$$$$$ReselectNodes$$() {
  for(var $selectedNodes$$3$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$614$$ = 0;$i$$614$$ < $selectedNodes$$3$$.length;$i$$614$$++) {
    $selectedNodes$$3$$[$i$$614$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
  }
};
D.$DvtBaseTreeView$$.prototype.$_processInitialSelections$ = function $$DvtBaseTreeView$$$$$_processInitialSelections$$() {
  if(this.$_selectionHandler$ && this.$_initialSelection$) {
    var $targets$$4$$ = [];
    (0,D.$JSCompiler_StaticMethods__addSelectableObjectsToArray$$)(this, this.$_root$, $targets$$4$$);
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, this.$_initialSelection$, $targets$$4$$);
    this.$_initialSelection$ = D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods__processInitialFocus$$ = function $$JSCompiler_StaticMethods__processInitialFocus$$$($JSCompiler_StaticMethods__processInitialFocus$self$$, $applyVisualEffects$$) {
  var $initialFocus$$ = D.$JSCompiler_alias_NULL$$, $id$$184$$ = $JSCompiler_StaticMethods__processInitialFocus$self$$.$_navigableIdToFocus$;
  $id$$184$$ && ($initialFocus$$ = (0,D.$DvtBaseTreeNode$getNodeById$$)($JSCompiler_StaticMethods__processInitialFocus$self$$.$_root$, $id$$184$$), $JSCompiler_StaticMethods__processInitialFocus$self$$.$_eventHandler$.$setFocus$($initialFocus$$));
  $applyVisualEffects$$ && ($JSCompiler_StaticMethods__processInitialFocus$self$$.$_navigableIdToFocus$ = D.$JSCompiler_alias_NULL$$);
  $initialFocus$$ || ($initialFocus$$ = $JSCompiler_StaticMethods__processInitialFocus$self$$.$GetInitialFocusedItem$($JSCompiler_StaticMethods__processInitialFocus$self$$.$_root$), $JSCompiler_StaticMethods__processInitialFocus$self$$.$_eventHandler$.$setFocus$($initialFocus$$));
  $applyVisualEffects$$ && $JSCompiler_StaticMethods__processInitialFocus$self$$.$setFocused$($JSCompiler_StaticMethods__processInitialFocus$self$$.$isFocused$())
};
D.$DvtBaseTreeView$$.prototype.$setFocused$ = function $$DvtBaseTreeView$$$$$setFocused$$($isFocused$$1$$) {
  this.$_hasFocus$ = $isFocused$$1$$;
  this.$_eventHandler$.$setFocused$($isFocused$$1$$)
};
D.$DvtBaseTreeView$$.prototype.$isFocused$ = (0,D.$JSCompiler_get$$)("$_hasFocus$");
D.$JSCompiler_StaticMethods__addSelectableObjectsToArray$$ = function $$JSCompiler_StaticMethods__addSelectableObjectsToArray$$$($JSCompiler_StaticMethods__addSelectableObjectsToArray$self$$, $children$$27_node$$309$$, $ret$$100$$) {
  if($children$$27_node$$309$$ && ($ret$$100$$.push($children$$27_node$$309$$), $children$$27_node$$309$$ = $children$$27_node$$309$$.$getChildNodes$())) {
    for(var $i$$615$$ = 0;$i$$615$$ < $children$$27_node$$309$$.length;$i$$615$$++) {
      (0,D.$JSCompiler_StaticMethods__addSelectableObjectsToArray$$)($JSCompiler_StaticMethods__addSelectableObjectsToArray$self$$, $children$$27_node$$309$$[$i$$615$$], $ret$$100$$)
    }
  }
};
D.$DvtBaseTreeView$$.prototype.$__isDragAvailable$ = function $$DvtBaseTreeView$$$$$__isDragAvailable$$($clientIds$$20$$) {
  return this.$_selectionHandler$ ? $clientIds$$20$$[0] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseTreeView$$.prototype.$__getDragTransferable$ = function $$DvtBaseTreeView$$$$$__getDragTransferable$$($node$$310_rowKeys$$3$$) {
  $node$$310_rowKeys$$3$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($node$$310_rowKeys$$3$$, D.$JSCompiler_alias_FALSE$$), this.$_eventHandler$.$fireSelectionEvent$());
  $node$$310_rowKeys$$3$$ = [];
  for(var $selection$$24$$ = this.$_selectionHandler$.getSelection(), $i$$616$$ = 0;$i$$616$$ < $selection$$24$$.length;$i$$616$$++) {
    $node$$310_rowKeys$$3$$.push($selection$$24$$[$i$$616$$].getId())
  }
  return $node$$310_rowKeys$$3$$
};
D.$DvtBaseTreeView$$.prototype.$__getDragFeedback$ = function $$DvtBaseTreeView$$$$$__getDragFeedback$$() {
  for(var $displayables$$17$$ = [], $selection$$25$$ = this.$_selectionHandler$.getSelection(), $i$$617$$ = 0;$i$$617$$ < $selection$$25$$.length;$i$$617$$++) {
    $displayables$$17$$.push($selection$$25$$[$i$$617$$].$__getDisplayable$())
  }
  return $displayables$$17$$
};
D.$DvtBaseTreeView$$.prototype.$__processBreadcrumbsEvent$ = function $$DvtBaseTreeView$$$$$__processBreadcrumbsEvent$$($event$$500$$) {
  $event$$500$$ instanceof D.$DvtBreadcrumbsDrillEvent$$ && (0,D.$JSCompiler_StaticMethods___drill$$)(this, $event$$500$$.getId(), D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods___drill$$ = function $$JSCompiler_StaticMethods___drill$$$($JSCompiler_StaticMethods___drill$self$$, $id$$185$$, $bDrillUp$$) {
  $bDrillUp$$ && $JSCompiler_StaticMethods___drill$self$$.$_root$ && $id$$185$$ == $JSCompiler_StaticMethods___drill$self$$.$_root$.getId() && $JSCompiler_StaticMethods___drill$self$$.$_ancestors$ && 0 < $JSCompiler_StaticMethods___drill$self$$.$_ancestors$.length ? ($JSCompiler_StaticMethods___drill$self$$.$_navigableIdToFocus$ = $id$$185$$, $JSCompiler_StaticMethods___drill$self$$.$__dispatchEvent$(new D.$DvtDrillReplaceEvent$$($JSCompiler_StaticMethods___drill$self$$.$_ancestors$[0].id))) : $bDrillUp$$ || 
  $JSCompiler_StaticMethods___drill$self$$.$__dispatchEvent$(new D.$DvtDrillReplaceEvent$$($id$$185$$));
  $JSCompiler_StaticMethods___drill$self$$.$_context$.$getTooltipManager$().$hideTooltip$()
};
D.$DvtBaseTreeView$$.prototype.$getLogicalObject$ = function $$DvtBaseTreeView$$$$$getLogicalObject$$($target$$72$$) {
  return(0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_eventHandler$, $target$$72$$)
};
D.$DvtBaseTreeView$$.prototype.$getBundle$ = function $$DvtBaseTreeView$$$$$getBundle$$() {
  this.$_bundle$ || (this.$_bundle$ = new D.$DvtUtilBundle$$);
  return this.$_bundle$
};
D.$DvtBaseTreeView$$.prototype.$getAutomation$ = function $$DvtBaseTreeView$$$$$getAutomation$$() {
  return new D.$DvtTreeAutomation$$(this)
};
D.$DvtBaseTreeView$$.prototype.getAutomation = D.$DvtBaseTreeView$$.prototype.$getAutomation$;
D.$DvtBaseTreeView$$.prototype.$isDragAvailable$ = function $$DvtBaseTreeView$$$$$isDragAvailable$$($mouseX$$45$$, $mouseY$$45$$, $clientIds$$19$$) {
  return this.$_dragSource$.$isDragAvailable$($clientIds$$19$$)
};
D.$DvtBaseTreeView$$.prototype.$getDragTransferable$ = function $$DvtBaseTreeView$$$$$getDragTransferable$$($mouseX$$46$$, $mouseY$$46$$) {
  return this.$_dragSource$.$getDragTransferable$($mouseX$$46$$, $mouseY$$46$$)
};

D.$DvtBaseTreeAnimationHandler$$ = function $$DvtBaseTreeAnimationHandler$$$($context$$182$$, $deleteContainer$$7$$) {
  this.Init($context$$182$$, $deleteContainer$$7$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeAnimationHandler$$, D.$DvtDataAnimationHandler$$, "DvtBaseTreeAnimationHandler");
D.$DvtBaseTreeAnimationHandler$_isAncestor$$ = function $$DvtBaseTreeAnimationHandler$_isAncestor$$$($ancestors$$7$$, $node$$203$$) {
  if(!$node$$203$$ || !$ancestors$$7$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $i$$370$$ = 0;$i$$370$$ < $ancestors$$7$$.length;$i$$370$$++) {
    if($ancestors$$7$$[$i$$370$$].id == $node$$203$$.getId()) {
      return D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtBaseTreeDropTarget$$ = (0,D.$JSCompiler_set$$)("$_view$");
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeDropTarget$$, D.$DvtDropTarget$$, "DvtBaseTreeDropTarget");
D.$DvtBaseTreeEventManager$$ = function $$DvtBaseTreeEventManager$$$($view$$23$$, $context$$183$$, $callback$$74$$, $callbackObj$$47$$) {
  this.Init($context$$183$$, $callback$$74$$, $callbackObj$$47$$);
  this.$_view$ = $view$$23$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeEventManager$$, D.$DvtEventManager$$, "DvtBaseTreeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnDblClick$$($event$$272_shiftKey$$inline_3874$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnDblClick$.call(this, $event$$272_shiftKey$$inline_3874$$);
  var $obj$$114$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$272_shiftKey$$inline_3874$$.target);
  $obj$$114$$ && ($event$$272_shiftKey$$inline_3874$$ = $event$$272_shiftKey$$inline_3874$$.shiftKey, $obj$$114$$.$isDrillReplaceEnabled$ && $obj$$114$$.$isDrillReplaceEnabled$() && (0,D.$JSCompiler_StaticMethods___drill$$)(this.$_view$, $obj$$114$$.getId(), $event$$272_shiftKey$$inline_3874$$))
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$273_obj$$115$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnClick$.call(this, $event$$273_obj$$115$$);
  $event$$273_obj$$115$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$273_obj$$115$$.target);
  (0,D.$JSCompiler_StaticMethods__processNodeLabel$$)(this, $event$$273_obj$$115$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$274_obj$$116$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$274_obj$$116$$);
  ($event$$274_obj$$116$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$274_obj$$116$$.target)) && $event$$274_obj$$116$$.$handleMouseOver$ && $event$$274_obj$$116$$.$handleMouseOver$()
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$275_relatedObj$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$275_relatedObj$$);
  var $obj$$117$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$275_relatedObj$$.target);
  $obj$$117$$ && $obj$$117$$.$handleMouseOut$ && ($event$$275_relatedObj$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$275_relatedObj$$.relatedTarget), ($event$$275_relatedObj$$ && $event$$275_relatedObj$$.getId ? $event$$275_relatedObj$$.getId() : D.$JSCompiler_alias_NULL$$) != $obj$$117$$.getId() && $obj$$117$$.$handleMouseOut$())
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$276$$) {
  var $eventConsumed$$4_obj$$118$$ = D.$JSCompiler_alias_FALSE$$, $eventConsumed$$4_obj$$118$$ = this.$getFocus$();
  13 == $event$$276$$.keyCode && !$event$$276$$.ctrlKey ? ($eventConsumed$$4_obj$$118$$ = this.$getFocus$(), $eventConsumed$$4_obj$$118$$.$isDrillReplaceEnabled$ && $eventConsumed$$4_obj$$118$$.$isDrillReplaceEnabled$() && ($event$$276$$.shiftKey && ($eventConsumed$$4_obj$$118$$ = this.$_view$.$_root$), (0,D.$JSCompiler_StaticMethods___drill$$)(this.$_view$, $eventConsumed$$4_obj$$118$$.getId(), $event$$276$$.shiftKey)), $event$$276$$.preventDefault(), $eventConsumed$$4_obj$$118$$ = D.$JSCompiler_alias_TRUE$$) : 
  $eventConsumed$$4_obj$$118$$ = D.$DvtBaseTreeEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$276$$);
  return $eventConsumed$$4_obj$$118$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($event$$277_obj$$119$$) {
  $event$$277_obj$$119$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$277_obj$$119$$.target);
  (0,D.$JSCompiler_StaticMethods__processNodeLabel$$)(this, $event$$277_obj$$119$$);
  this.$_currentHoverItem$ && this.$_currentHoverItem$ != $event$$277_obj$$119$$ && (this.$_currentHoverItem$.$handleMouseOut$(), this.$_currentHoverItem$ = D.$JSCompiler_alias_NULL$$);
  $event$$277_obj$$119$$ && $event$$277_obj$$119$$ instanceof D.$DvtBaseTreeNode$$ && this.$_currentHoverItem$ != $event$$277_obj$$119$$ && (this.$_currentHoverItem$ = $event$$277_obj$$119$$, $event$$277_obj$$119$$.$handleMouseOver$())
};
D.$JSCompiler_prototypeAlias$$.$OnComponentTouchDblClick$ = function $$JSCompiler_prototypeAlias$$$$OnComponentTouchDblClick$$($event$$278_obj$$120$$) {
  ($event$$278_obj$$120$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$278_obj$$120$$.target)) && $event$$278_obj$$120$$.$isDrillReplaceEnabled$ && $event$$278_obj$$120$$.$isDrillReplaceEnabled$() && (0,D.$JSCompiler_StaticMethods___drill$$)(this.$_view$, $event$$278_obj$$120$$.getId(), D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods__processNodeLabel$$ = function $$JSCompiler_StaticMethods__processNodeLabel$$$($JSCompiler_StaticMethods__processNodeLabel$self$$, $obj$$121$$) {
  $obj$$121$$ && ($obj$$121$$ instanceof D.$DvtBaseTreePeer$$ && $obj$$121$$.$_bDrillable$) && (0,D.$JSCompiler_StaticMethods___drill$$)($JSCompiler_StaticMethods__processNodeLabel$self$$.$_view$, $obj$$121$$.getId(), D.$JSCompiler_alias_FALSE$$)
};
D.$DvtBaseTreeParser$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeParser$$, D.$DvtObj$$, "DvtBaseTreeParser");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeParser$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($treeView$$6$$) {
  this.$_view$ = $treeView$$6$$;
  this.$_parser$ = new D.$DvtXmlParser$$;
  this.$_minAGColor$ = window.Infinity;
  this.$_maxAGColor$ = -window.Infinity
};
D.$JSCompiler_prototypeAlias$$.parse = function $$JSCompiler_prototypeAlias$$$parse$($ret$$72_xmlString$$7$$) {
  var $childNodes$$21_rootNode$$1$$ = this.$_parser$.parse($ret$$72_xmlString$$7$$);
  $ret$$72_xmlString$$7$$ = this.$ParseRootAttributes$($childNodes$$21_rootNode$$1$$);
  var $childNodes$$21_rootNode$$1$$ = $childNodes$$21_rootNode$$1$$.$getChildNodes$(), $JSCompiler_inline_result$$257_JSCompiler_temp$$285_artificialRoot$$inline_3857_i$$379_template$$inline_3845_treeView$$inline_3853$$;
  $JSCompiler_inline_result$$257_JSCompiler_temp$$285_artificialRoot$$inline_3857_i$$379_template$$inline_3845_treeView$$inline_3853$$ = (0,D.$JSCompiler_StaticMethods__getChildNodesByName$$)($childNodes$$21_rootNode$$1$$, "f");
  var $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$ = $JSCompiler_inline_result$$257_JSCompiler_temp$$285_artificialRoot$$inline_3857_i$$379_template$$inline_3845_treeView$$inline_3853$$.length;
  if(0 < $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$) {
    for(var $JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$, $ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$, $attrGroups$$inline_9934_i$$inline_9952_i$$inline_9959_minValue$$inline_9937_templateMap$$inline_3849$$ = {}, $childNodes$$inline_9942_i$$inline_3850_id$$inline_9953_ramp$$inline_9941_xmlNode$$inline_9932$$ = 0;$childNodes$$inline_9942_i$$inline_3850_id$$inline_9953_ramp$$inline_9941_xmlNode$$inline_9932$$ < 
    $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$;$childNodes$$inline_9942_i$$inline_3850_id$$inline_9953_ramp$$inline_9941_xmlNode$$inline_9932$$++) {
      $JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$ = $JSCompiler_inline_result$$257_JSCompiler_temp$$285_artificialRoot$$inline_3857_i$$379_template$$inline_3845_treeView$$inline_3853$$[$childNodes$$inline_9942_i$$inline_3850_id$$inline_9953_ramp$$inline_9941_xmlNode$$inline_9932$$], $ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$ = 
      $JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$.$getAttr$("name"), $attrGroups$$inline_9934_i$$inline_9952_i$$inline_9959_minValue$$inline_9937_templateMap$$inline_3849$$[$ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$] = D.$DvtAfComponentFactory$$.$parseXml$($JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$)
    }
    $JSCompiler_inline_result$$257_JSCompiler_temp$$285_artificialRoot$$inline_3857_i$$379_template$$inline_3845_treeView$$inline_3853$$ = $attrGroups$$inline_9934_i$$inline_9952_i$$inline_9959_minValue$$inline_9937_templateMap$$inline_3849$$
  }else {
    $JSCompiler_inline_result$$257_JSCompiler_temp$$285_artificialRoot$$inline_3857_i$$379_template$$inline_3845_treeView$$inline_3853$$ = D.$JSCompiler_alias_NULL$$
  }
  $ret$$72_xmlString$$7$$.$templates$ = $JSCompiler_inline_result$$257_JSCompiler_temp$$285_artificialRoot$$inline_3857_i$$379_template$$inline_3845_treeView$$inline_3853$$;
  this.$_nodeCount$ = 0;
  $JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$ = (0,D.$JSCompiler_StaticMethods__getChildNodesByName$$)($childNodes$$21_rootNode$$1$$, "n");
  $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$ = [];
  for($JSCompiler_inline_result$$257_JSCompiler_temp$$285_artificialRoot$$inline_3857_i$$379_template$$inline_3845_treeView$$inline_3853$$ = 0;$JSCompiler_inline_result$$257_JSCompiler_temp$$285_artificialRoot$$inline_3857_i$$379_template$$inline_3845_treeView$$inline_3853$$ < $JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$.length;$JSCompiler_inline_result$$257_JSCompiler_temp$$285_artificialRoot$$inline_3857_i$$379_template$$inline_3845_treeView$$inline_3853$$++) {
    ($ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$ = this.$_parseDataNode$($JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$[$JSCompiler_inline_result$$257_JSCompiler_temp$$285_artificialRoot$$inline_3857_i$$379_template$$inline_3845_treeView$$inline_3853$$], $ret$$72_xmlString$$7$$.$templates$)) && $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$.push($ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$)
  }
  $ret$$72_xmlString$$7$$.$nodeCount$ = this.$_nodeCount$;
  if(1 == $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$.length) {
    $JSCompiler_inline_result$$257_JSCompiler_temp$$285_artificialRoot$$inline_3857_i$$379_template$$inline_3845_treeView$$inline_3853$$ = $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$[0]
  }else {
    $JSCompiler_inline_result$$257_JSCompiler_temp$$285_artificialRoot$$inline_3857_i$$379_template$$inline_3845_treeView$$inline_3853$$ = this.$_view$;
    for($ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$ = $JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$ = 0;$ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$ < $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$.length;$ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$++) {
      $JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$ += $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$[$ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$].$getSize$()
    }
    $JSCompiler_inline_result$$257_JSCompiler_temp$$285_artificialRoot$$inline_3857_i$$379_template$$inline_3845_treeView$$inline_3853$$ = this.$CreateNode$($JSCompiler_inline_result$$257_JSCompiler_temp$$285_artificialRoot$$inline_3857_i$$379_template$$inline_3845_treeView$$inline_3853$$, {size:$JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$, $bArtificialRoot$:D.$JSCompiler_alias_TRUE$$, $disclosed$:D.$JSCompiler_alias_TRUE$$});
    (0,D.$JSCompiler_StaticMethods_setChildNodes$$)($JSCompiler_inline_result$$257_JSCompiler_temp$$285_artificialRoot$$inline_3857_i$$379_template$$inline_3845_treeView$$inline_3853$$, $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$)
  }
  $ret$$72_xmlString$$7$$.root = $JSCompiler_inline_result$$257_JSCompiler_temp$$285_artificialRoot$$inline_3857_i$$379_template$$inline_3845_treeView$$inline_3853$$;
  for($JSCompiler_inline_result$$257_JSCompiler_temp$$285_artificialRoot$$inline_3857_i$$379_template$$inline_3845_treeView$$inline_3853$$ = 0;$JSCompiler_inline_result$$257_JSCompiler_temp$$285_artificialRoot$$inline_3857_i$$379_template$$inline_3845_treeView$$inline_3853$$ < $childNodes$$21_rootNode$$1$$.length;$JSCompiler_inline_result$$257_JSCompiler_temp$$285_artificialRoot$$inline_3857_i$$379_template$$inline_3845_treeView$$inline_3853$$++) {
    if($attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$ = $childNodes$$21_rootNode$$1$$[$JSCompiler_inline_result$$257_JSCompiler_temp$$285_artificialRoot$$inline_3857_i$$379_template$$inline_3845_treeView$$inline_3853$$], $JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$ = $ret$$72_xmlString$$7$$, $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$) {
      if($ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$ = $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$.getName(), "spb" == $ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$) {
        $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$ = this.$_parseShowPopupBehavior$($attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$, $JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$), $JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$.$showPopupBehaviors$ || 
        ($JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$.$showPopupBehaviors$ = []), $JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$.$showPopupBehaviors$.push($attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$)
      }else {
        if("menus" == $ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$) {
          $JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$.$contextMenuHandler$ || ($JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$.$contextMenuHandler$ = new D.$DvtContextMenuHandler$$(this.$_view$.$_context$)), $JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$.$contextMenuHandler$.add($attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$)
        }else {
          if("ag" == $ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$) {
            $childNodes$$inline_9942_i$$inline_3850_id$$inline_9953_ramp$$inline_9941_xmlNode$$inline_9932$$ = $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$;
            $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$ = $JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$;
            $attrGroups$$inline_9934_i$$inline_9952_i$$inline_9959_minValue$$inline_9937_templateMap$$inline_3849$$ = D.$JSCompiler_alias_VOID$$;
            $JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$ = $childNodes$$inline_9942_i$$inline_3850_id$$inline_9953_ramp$$inline_9941_xmlNode$$inline_9932$$.$getAttr$("id");
            $ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$ = $childNodes$$inline_9942_i$$inline_3850_id$$inline_9953_ramp$$inline_9941_xmlNode$$inline_9932$$.$getAttr$("T");
            if("continuous" == $childNodes$$inline_9942_i$$inline_3850_id$$inline_9953_ramp$$inline_9941_xmlNode$$inline_9932$$.$getAttr$("t")) {
              var $attrGroups$$inline_9934_i$$inline_9952_i$$inline_9959_minValue$$inline_9937_templateMap$$inline_3849$$ = $childNodes$$inline_9942_i$$inline_3850_id$$inline_9953_ramp$$inline_9941_xmlNode$$inline_9932$$.$getAttr$("minValue"), $i$$inline_9943_maxValue$$inline_9938_text$$inline_9954$$ = $childNodes$$inline_9942_i$$inline_3850_id$$inline_9953_ramp$$inline_9941_xmlNode$$inline_9932$$.$getAttr$("maxValue"), $group$$inline_9945_minLabel$$inline_9939$$ = $childNodes$$inline_9942_i$$inline_3850_id$$inline_9953_ramp$$inline_9941_xmlNode$$inline_9932$$.$getAttr$("minLabel"), 
              $groupLabel$$inline_9946_maxLabel$$inline_9940$$ = $childNodes$$inline_9942_i$$inline_3850_id$$inline_9953_ramp$$inline_9941_xmlNode$$inline_9932$$.$getAttr$("maxLabel"), $childNodes$$inline_9942_i$$inline_3850_id$$inline_9953_ramp$$inline_9941_xmlNode$$inline_9932$$ = $childNodes$$inline_9942_i$$inline_3850_id$$inline_9953_ramp$$inline_9941_xmlNode$$inline_9932$$.$getAttr$("ramp").split(";");
              $attrGroups$$inline_9934_i$$inline_9952_i$$inline_9959_minValue$$inline_9937_templateMap$$inline_3849$$ == D.$JSCompiler_alias_NULL$$ && ($attrGroups$$inline_9934_i$$inline_9952_i$$inline_9959_minValue$$inline_9937_templateMap$$inline_3849$$ = this.$_minAGColor$);
              $i$$inline_9943_maxValue$$inline_9938_text$$inline_9954$$ == D.$JSCompiler_alias_NULL$$ && ($i$$inline_9943_maxValue$$inline_9938_text$$inline_9954$$ = this.$_maxAGColor$);
              $attrGroups$$inline_9934_i$$inline_9952_i$$inline_9959_minValue$$inline_9937_templateMap$$inline_3849$$ = new D.$DvtContinuousAttrGroups$$($attrGroups$$inline_9934_i$$inline_9952_i$$inline_9959_minValue$$inline_9937_templateMap$$inline_3849$$, $i$$inline_9943_maxValue$$inline_9938_text$$inline_9954$$, $group$$inline_9945_minLabel$$inline_9939$$, $groupLabel$$inline_9946_maxLabel$$inline_9940$$, $childNodes$$inline_9942_i$$inline_3850_id$$inline_9953_ramp$$inline_9941_xmlNode$$inline_9932$$)
            }else {
              $attrGroups$$inline_9934_i$$inline_9952_i$$inline_9959_minValue$$inline_9937_templateMap$$inline_3849$$ = new D.$DvtDiscreteAttrGroups$$;
              $childNodes$$inline_9942_i$$inline_3850_id$$inline_9953_ramp$$inline_9941_xmlNode$$inline_9932$$ = $childNodes$$inline_9942_i$$inline_3850_id$$inline_9953_ramp$$inline_9941_xmlNode$$inline_9932$$.$getChildNodes$();
              for($i$$inline_9943_maxValue$$inline_9938_text$$inline_9954$$ = 0;$i$$inline_9943_maxValue$$inline_9938_text$$inline_9954$$ < $childNodes$$inline_9942_i$$inline_3850_id$$inline_9953_ramp$$inline_9941_xmlNode$$inline_9932$$.length;$i$$inline_9943_maxValue$$inline_9938_text$$inline_9954$$++) {
                var $child$$inline_9944_params$$inline_9947$$ = $childNodes$$inline_9942_i$$inline_3850_id$$inline_9953_ramp$$inline_9941_xmlNode$$inline_9932$$[$i$$inline_9943_maxValue$$inline_9938_text$$inline_9954$$];
                $child$$inline_9944_params$$inline_9947$$ && ($group$$inline_9945_minLabel$$inline_9939$$ = $child$$inline_9944_params$$inline_9947$$.$getAttr$("g"), $groupLabel$$inline_9946_maxLabel$$inline_9940$$ = $child$$inline_9944_params$$inline_9947$$.$getAttr$("l"), $child$$inline_9944_params$$inline_9947$$ = {color:$child$$inline_9944_params$$inline_9947$$.$getAttr$("c"), pattern:$child$$inline_9944_params$$inline_9947$$.$getAttr$("p")}, $attrGroups$$inline_9934_i$$inline_9952_i$$inline_9959_minValue$$inline_9937_templateMap$$inline_3849$$.add($group$$inline_9945_minLabel$$inline_9939$$, 
                $groupLabel$$inline_9946_maxLabel$$inline_9940$$, $child$$inline_9944_params$$inline_9947$$))
              }
            }
            $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$.$attrGroups$ || ($attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$.$attrGroups$ = []);
            $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$.$attrGroups$.push({$attrGroups$:$attrGroups$$inline_9934_i$$inline_9952_i$$inline_9959_minValue$$inline_9937_templateMap$$inline_3849$$, $templateId$:$ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$, id:$JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$})
          }else {
            if("styles" == $ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$) {
              $JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$.$styles$ = this.$_parseStyles$($attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$, $JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$)
            }else {
              if("a" == $ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$) {
                $ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$ = [];
                $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$ = $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$.$getChildNodes$();
                for($attrGroups$$inline_9934_i$$inline_9952_i$$inline_9959_minValue$$inline_9937_templateMap$$inline_3849$$ = 0;$attrGroups$$inline_9934_i$$inline_9952_i$$inline_9959_minValue$$inline_9937_templateMap$$inline_3849$$ < $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$.length;$attrGroups$$inline_9934_i$$inline_9952_i$$inline_9959_minValue$$inline_9937_templateMap$$inline_3849$$++) {
                  $childNodes$$inline_9942_i$$inline_3850_id$$inline_9953_ramp$$inline_9941_xmlNode$$inline_9932$$ = $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$[$attrGroups$$inline_9934_i$$inline_9952_i$$inline_9959_minValue$$inline_9937_templateMap$$inline_3849$$].$getAttr$("id"), $i$$inline_9943_maxValue$$inline_9938_text$$inline_9954$$ = $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$[$attrGroups$$inline_9934_i$$inline_9952_i$$inline_9959_minValue$$inline_9937_templateMap$$inline_3849$$].$getAttr$("l"), 
                  $ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$.push({id:$childNodes$$inline_9942_i$$inline_3850_id$$inline_9953_ramp$$inline_9941_xmlNode$$inline_9932$$, text:$i$$inline_9943_maxValue$$inline_9938_text$$inline_9954$$})
                }
                $JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$.$ancestors$ = $ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$
              }else {
                if("resources" == $ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$) {
                  $ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$ = {};
                  $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$ = $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$.getAttributes();
                  for($attrGroups$$inline_9934_i$$inline_9952_i$$inline_9959_minValue$$inline_9937_templateMap$$inline_3849$$ = 0;$attrGroups$$inline_9934_i$$inline_9952_i$$inline_9959_minValue$$inline_9937_templateMap$$inline_3849$$ < $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$.length;$attrGroups$$inline_9934_i$$inline_9952_i$$inline_9959_minValue$$inline_9937_templateMap$$inline_3849$$++) {
                    $ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$[$attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$[$attrGroups$$inline_9934_i$$inline_9952_i$$inline_9959_minValue$$inline_9937_templateMap$$inline_3849$$].name] = $attrs$$inline_9958_childNodes$$inline_9951_count$$inline_3846_ret$$inline_9933_rootNodes_showPopupBehavior$$inline_3863_xmlNode$$inline_3860$$[$attrGroups$$inline_9934_i$$inline_9952_i$$inline_9959_minValue$$inline_9937_templateMap$$inline_3849$$].value
                  }
                  $JSCompiler_temp_const$$8889_JSCompiler_temp_const$$8979_id$$inline_9935_ret$$inline_3861_size$$inline_3855_temp$$inline_3847_xmlDataNodes$$.$resources$ = $ancestors$$inline_9950_i$$inline_3856_name$$inline_3862_resources$$inline_9957_root$$7_tempName$$inline_3848_templateId$$inline_9936$$
                }
              }
            }
          }
        }
      }
    }
  }
  this.$_applyParsedProperties$($ret$$72_xmlString$$7$$.root, $ret$$72_xmlString$$7$$);
  return $ret$$72_xmlString$$7$$
};
D.$JSCompiler_prototypeAlias$$.$CreateNode$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$ParseRootAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseRootAttributes$$($xmlNode$$57$$) {
  var $ret$$73$$ = {}, $duration$$31_nodeSelectionStr_selectedIdsStr$$ = $xmlNode$$57$$.$getAttr$("sel");
  $ret$$73$$.$nodeSelection$ = "none" == $duration$$31_nodeSelectionStr_selectedIdsStr$$ ? D.$JSCompiler_alias_NULL$$ : "single" == $duration$$31_nodeSelectionStr_selectedIdsStr$$ ? "s" : "m";
  $ret$$73$$.$sorting$ = $xmlNode$$57$$.$getAttr$("sort");
  if($duration$$31_nodeSelectionStr_selectedIdsStr$$ = $xmlNode$$57$$.$getAttr$("selIds")) {
    $ret$$73$$.$selectedIds$ = $duration$$31_nodeSelectionStr_selectedIdsStr$$.split(",")
  }
  $ret$$73$$.$emptyText$ = $xmlNode$$57$$.$getAttr$("emptyText");
  $ret$$73$$.$legendSource$ = $xmlNode$$57$$.$getAttr$("ls");
  $ret$$73$$.$sizeValueStr$ = $xmlNode$$57$$.$getAttr$("sv");
  $ret$$73$$.$colorValueStr$ = $xmlNode$$57$$.$getAttr$("cv");
  if($duration$$31_nodeSelectionStr_selectedIdsStr$$ = $xmlNode$$57$$.$getAttr$("adu")) {
    $ret$$73$$.$animationDuration$ = $duration$$31_nodeSelectionStr_selectedIdsStr$$ / 1E3
  }
  $ret$$73$$.$animationOnDataChange$ = $xmlNode$$57$$.$getAttr$("adc");
  $ret$$73$$.$animationOnDisplay$ = $xmlNode$$57$$.$getAttr$("adi");
  return $ret$$73$$
};
D.$JSCompiler_prototypeAlias$$.$ParseNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$ParseNodeAttributes$$($labelStyle$$9_xmlNode$$58$$) {
  var $ret$$74$$ = {};
  $ret$$74$$.$templateId$ = $labelStyle$$9_xmlNode$$58$$.$getAttr$("T");
  $ret$$74$$.$menuId$ = $labelStyle$$9_xmlNode$$58$$.$getAttr$("M");
  $ret$$74$$.$agColor$ = $labelStyle$$9_xmlNode$$58$$.$getAttr$("ag");
  $ret$$74$$.id = $labelStyle$$9_xmlNode$$58$$.$getAttr$("id");
  $ret$$74$$.size = (0,window.Number)($labelStyle$$9_xmlNode$$58$$.$getAttr$("s"));
  $ret$$74$$.color = $labelStyle$$9_xmlNode$$58$$.$getAttr$("c");
  $ret$$74$$.pattern = $labelStyle$$9_xmlNode$$58$$.$getAttr$("p");
  $ret$$74$$.label = $labelStyle$$9_xmlNode$$58$$.$getAttr$("l");
  $ret$$74$$.$tooltip$ = $labelStyle$$9_xmlNode$$58$$.$getAttr$("tt");
  $ret$$74$$.$labelDisplay$ = $labelStyle$$9_xmlNode$$58$$.$getAttr$("ld");
  $ret$$74$$.$drilling$ = $labelStyle$$9_xmlNode$$58$$.$getAttr$("d");
  $ret$$74$$.$disclosed$ = "t" == $labelStyle$$9_xmlNode$$58$$.$getAttr$("di") ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$;
  $ret$$74$$.$selectable$ = $labelStyle$$9_xmlNode$$58$$.$getAttr$("nsel");
  var $tn$$ = $labelStyle$$9_xmlNode$$58$$.$getAttr$("tn");
  $tn$$ && ($ret$$74$$.$templateName$ = $tn$$);
  if($labelStyle$$9_xmlNode$$58$$ = $labelStyle$$9_xmlNode$$58$$.$getAttr$("ls")) {
    $ret$$74$$.$labelStyle$ = new D.$DvtCSSStyle$$($labelStyle$$9_xmlNode$$58$$)
  }
  $ret$$74$$.$agColor$ != D.$JSCompiler_alias_NULL$$ && (this.$_maxAGColor$ = window.Math.max(this.$_maxAGColor$, $ret$$74$$.$agColor$), this.$_minAGColor$ = window.Math.min(this.$_minAGColor$, $ret$$74$$.$agColor$));
  return $ret$$74$$
};
D.$JSCompiler_prototypeAlias$$.$_parseDataNode$ = function $$JSCompiler_prototypeAlias$$$$_parseDataNode$$($xmlNode$$59$$, $templates$$5$$) {
  if(!$xmlNode$$59$$ || "n" != $xmlNode$$59$$.getName()) {
    return D.$JSCompiler_alias_NULL$$
  }
  this.$_nodeCount$++;
  var $props$$19_treeNode$$3$$ = this.$ParseNodeAttributes$($xmlNode$$59$$), $props$$19_treeNode$$3$$ = this.$CreateNode$(this.$_view$, $props$$19_treeNode$$3$$, $templates$$5$$);
  (0,D.$JSCompiler_StaticMethods_setChildNodes$$)($props$$19_treeNode$$3$$, this.$_parseChildren$($xmlNode$$59$$, $props$$19_treeNode$$3$$, $templates$$5$$));
  return $props$$19_treeNode$$3$$
};
D.$JSCompiler_prototypeAlias$$.$_parseChildren$ = function $$JSCompiler_prototypeAlias$$$$_parseChildren$$($childNodes$$22_xmlNode$$60$$, $treeNode$$4$$, $templates$$6$$) {
  var $treeNodes$$2$$ = [];
  $childNodes$$22_xmlNode$$60$$ = $childNodes$$22_xmlNode$$60$$.$getChildNodes$();
  for(var $i$$381$$ = 0;$i$$381$$ < $childNodes$$22_xmlNode$$60$$.length;$i$$381$$++) {
    var $child$$27$$ = $childNodes$$22_xmlNode$$60$$[$i$$381$$];
    $child$$27$$ && ("el" == $child$$27$$.getName() ? $templates$$6$$ && $treeNode$$4$$.$SetElAttributes$ && $treeNode$$4$$.$SetElAttributes$((0,D.$DvtPropMap$toELContext$$)($child$$27$$)) : $treeNode$$4$$.$isDisclosed$() && $treeNodes$$2$$.push(this.$_parseDataNode$($child$$27$$, $templates$$6$$)))
  }
  return $treeNodes$$2$$
};
D.$JSCompiler_prototypeAlias$$.$_parseShowPopupBehavior$ = function $$JSCompiler_prototypeAlias$$$$_parseShowPopupBehavior$$($xmlNode$$62$$, $ret$$76$$) {
  var $showPopupBehavior$$2$$ = (0,D.$DvtShowPopupBehavior$newInstance$$)($xmlNode$$62$$), $templateId$$3$$ = $xmlNode$$62$$.$getAttr$("T");
  $ret$$76$$.$spb$ || ($ret$$76$$.$spb$ = {});
  $ret$$76$$.$spb$[$templateId$$3$$] || ($ret$$76$$.$spb$[$templateId$$3$$] = []);
  $ret$$76$$.$spb$[$templateId$$3$$].push($showPopupBehavior$$2$$)
};
D.$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($node$$214$$, $ret$$78$$) {
  if($node$$214$$) {
    var $JSCompiler_StaticMethods_processAttrGroups$self$$inline_3868_children$$12_templateId$$5$$ = $node$$214$$.$_templateId$;
    if($ret$$78$$.$spb$) {
      var $agDef_behaviors$$3_childIndex$$5_color$$inline_3870$$ = $ret$$78$$.$spb$[$JSCompiler_StaticMethods_processAttrGroups$self$$inline_3868_children$$12_templateId$$5$$];
      $agDef_behaviors$$3_childIndex$$5_color$$inline_3870$$ && $node$$214$$.$setShowPopupBehaviors$($agDef_behaviors$$3_childIndex$$5_color$$inline_3870$$)
    }
    if($ret$$78$$.$attrGroups$) {
      for(var $i$$383$$ = 0;$i$$383$$ < $ret$$78$$.$attrGroups$.length;$i$$383$$++) {
        if($agDef_behaviors$$3_childIndex$$5_color$$inline_3870$$ = $ret$$78$$.$attrGroups$[$i$$383$$], $agDef_behaviors$$3_childIndex$$5_color$$inline_3870$$.$templateId$ == $JSCompiler_StaticMethods_processAttrGroups$self$$inline_3868_children$$12_templateId$$5$$) {
          if($agDef_behaviors$$3_childIndex$$5_color$$inline_3870$$.$attrGroups$ instanceof D.$DvtContinuousAttrGroups$$ && ($JSCompiler_StaticMethods_processAttrGroups$self$$inline_3868_children$$12_templateId$$5$$ = $node$$214$$, $agDef_behaviors$$3_childIndex$$5_color$$inline_3870$$ = $agDef_behaviors$$3_childIndex$$5_color$$inline_3870$$.$attrGroups$.get($JSCompiler_StaticMethods_processAttrGroups$self$$inline_3868_children$$12_templateId$$5$$.$_agColor$))) {
            $JSCompiler_StaticMethods_processAttrGroups$self$$inline_3868_children$$12_templateId$$5$$.$_color$ = $agDef_behaviors$$3_childIndex$$5_color$$inline_3870$$
          }
          break
        }
      }
    }
    if($JSCompiler_StaticMethods_processAttrGroups$self$$inline_3868_children$$12_templateId$$5$$ = $node$$214$$.$getChildNodes$()) {
      for($agDef_behaviors$$3_childIndex$$5_color$$inline_3870$$ = 0;$agDef_behaviors$$3_childIndex$$5_color$$inline_3870$$ < $JSCompiler_StaticMethods_processAttrGroups$self$$inline_3868_children$$12_templateId$$5$$.length;$agDef_behaviors$$3_childIndex$$5_color$$inline_3870$$++) {
        this.$_applyParsedProperties$($JSCompiler_StaticMethods_processAttrGroups$self$$inline_3868_children$$12_templateId$$5$$[$agDef_behaviors$$3_childIndex$$5_color$$inline_3870$$], $ret$$78$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods__getChildNodesByName$$ = function $$JSCompiler_StaticMethods__getChildNodesByName$$$($childNodes$$24$$, $name$$76$$) {
  for(var $nodes$$15$$ = [], $i$$384$$ = 0;$i$$384$$ < $childNodes$$24$$.length;$i$$384$$++) {
    var $child$$29$$ = $childNodes$$24$$[$i$$384$$];
    $child$$29$$ && $child$$29$$.getName() == $name$$76$$ && $nodes$$15$$.push($child$$29$$)
  }
  return $nodes$$15$$
};
D.$DvtBaseTreeParser$$.prototype.$_parseStyles$ = function $$DvtBaseTreeParser$$$$$_parseStyles$$($xmlNode$$64$$, $ret$$79$$) {
  var $styles$$12$$ = {}, $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$4_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$64$$.$getAttr$("top"));
  $styles$$12$$.BACKGROUND_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$4_topStyle$$;
  $styles$$12$$.ANIMATION_UPDATE_COLOR_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$4_topStyle$$.$getStyle$("-tr-animation-update-color");
  $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$4_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$64$$.$getAttr$("node"));
  $styles$$12$$.LABEL_TEXT_DEFAULT_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$4_topStyle$$;
  var $nodeHoverStyle$$1$$ = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$4_topStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$64$$.$getAttr$("node-hover"))), $nodeSelectedStyle$$1$$ = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$4_topStyle$$.clone().$merge$(new D.$DvtCSSStyle$$($xmlNode$$64$$.$getAttr$("node-selected")));
  $ret$$79$$.$dropSiteFillColor$ = $xmlNode$$64$$.$getAttr$("dsf");
  $ret$$79$$.$dropSiteBorderColor$ = $xmlNode$$64$$.$getAttr$("dsb");
  $ret$$79$$.$dropSiteOpacity$ = $xmlNode$$64$$.$getAttr$("dso");
  this.$ParseAdditionalNodeStyles$($attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$4_topStyle$$, $nodeHoverStyle$$1$$, $nodeSelectedStyle$$1$$, $styles$$12$$);
  this.$ParseAdditionalStyles$($xmlNode$$64$$, $styles$$12$$);
  $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$4_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$64$$.$getAttr$("rootText"));
  $styles$$12$$.TEXT_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$4_topStyle$$;
  $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$4_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$64$$.$getAttr$("attrType"));
  $styles$$12$$.ATTRIBUTE_TYPE_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$4_topStyle$$;
  $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$4_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$64$$.$getAttr$("attrValue"));
  $styles$$12$$.ATTRIBUTE_VALUE_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$4_topStyle$$;
  $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$4_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$64$$.$getAttr$("drillText"));
  $styles$$12$$.DRILL_TEXT_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$4_topStyle$$;
  $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$4_topStyle$$ = new D.$DvtCSSStyle$$($xmlNode$$64$$.$getAttr$("currentText"));
  $styles$$12$$.CURRENT_TEXT_STYLE = $attrTypeStyle$$1_attrValueStyle$$1_currentTextStyle_drillTextStyle_nodeStyle$$1_textStyle$$4_topStyle$$;
  return $styles$$12$$
};
D.$DvtBaseTreeParser$$.prototype.$ParseAdditionalNodeStyles$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreeParser$$.prototype.$ParseAdditionalStyles$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreeNode$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeNode$$, D.$DvtObj$$, "DvtBaseTreeNode");
D.$DvtBaseTreeNode$__NODE_SELECTED_SHADOW$$ = new D.$DvtShadow$$("#000000", 2, 5, 5, 45, 0.5);
D.$DvtBaseTreeNode$$.prototype.Init = function $$DvtBaseTreeNode$$$$Init$($treeView$$5$$, $props$$16$$, $templates$$4$$) {
  this.$_view$ = $treeView$$5$$;
  this.$_templateId$ = $props$$16$$.$templateId$;
  this.$_menuId$ = $props$$16$$.$menuId$;
  this.$_agColor$ = $props$$16$$.$agColor$;
  this.$_id$ = $props$$16$$.id;
  this.$_size$ = $props$$16$$.size;
  this.$_color$ = $props$$16$$.color ? $props$$16$$.color : "#000000";
  this.$_pattern$ = $props$$16$$.pattern;
  this.$_textStr$ = $props$$16$$.label;
  this.$_datatip$ = $props$$16$$.$tooltip$;
  this.$_labelStyle$ = $props$$16$$.$labelStyle$;
  this.$_drilling$ = $props$$16$$.$drilling$;
  this.$_disclosed$ = $props$$16$$.$disclosed$;
  this.$_bArtificialRoot$ = $props$$16$$.$bArtificialRoot$;
  this.$_alpha$ = 1;
  this.$_lastVisitedChild$ = D.$JSCompiler_alias_NULL$$;
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$_templates$ = $templates$$4$$;
  $props$$16$$.$templateName$ ? (0,D.$JSCompiler_StaticMethods__setTemplate$$)(this, $props$$16$$.$templateName$) : $templates$$4$$ && $templates$$4$$.content ? (0,D.$JSCompiler_StaticMethods__setTemplate$$)(this, "content") : $templates$$4$$ && $templates$$4$$.rootContent && (0,D.$JSCompiler_StaticMethods__setTemplate$$)(this, "rootContent");
  this.$IsHover$ = D.$JSCompiler_alias_FALSE$$;
  this.$Selectable$ = $props$$16$$.$selectable$;
  this.$Bundle$ = $treeView$$5$$.$getBundle$()
};
D.$JSCompiler_StaticMethods_setChildNodes$$ = function $$JSCompiler_StaticMethods_setChildNodes$$$($JSCompiler_StaticMethods_setChildNodes$self$$, $children$$8$$) {
  if($children$$8$$ != D.$JSCompiler_alias_NULL$$) {
    for(var $i$$371$$ = 0;$i$$371$$ < $children$$8$$.length;$i$$371$$++) {
      $children$$8$$[$i$$371$$].$_parent$ = $JSCompiler_StaticMethods_setChildNodes$self$$
    }
  }
  $JSCompiler_StaticMethods_setChildNodes$self$$.$_children$ = $children$$8$$
};
D.$DvtBaseTreeNode$$.prototype.$getChildNodes$ = (0,D.$JSCompiler_get$$)("$_children$");
D.$JSCompiler_StaticMethods_getDescendantNodes$$ = function $$JSCompiler_StaticMethods_getDescendantNodes$$$($JSCompiler_StaticMethods_getDescendantNodes$self$$) {
  var $descendants$$4$$ = [], $childDescendants$$, $child$$23$$;
  if(!$JSCompiler_StaticMethods_getDescendantNodes$self$$.$hasChildren$()) {
    return $descendants$$4$$
  }
  for(var $i$$372$$ = 0;$i$$372$$ < $JSCompiler_StaticMethods_getDescendantNodes$self$$.$_children$.length;$i$$372$$++) {
    $child$$23$$ = $JSCompiler_StaticMethods_getDescendantNodes$self$$.$_children$[$i$$372$$], $childDescendants$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($child$$23$$), $descendants$$4$$.push($child$$23$$), $descendants$$4$$ = $descendants$$4$$.concat($childDescendants$$)
  }
  return $descendants$$4$$
};
D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$ = function $$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$$($JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$) {
  var $parent$$35$$ = $JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$.$_parent$;
  $parent$$35$$ && ($parent$$35$$.$_lastVisitedChild$ = $JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$)
};
D.$DvtBaseTreeNode$$.prototype.$isDescendantOf$ = function $$DvtBaseTreeNode$$$$$isDescendantOf$$($node$$210$$) {
  return!$node$$210$$ || !this.$_parent$ ? D.$JSCompiler_alias_FALSE$$ : this.$_parent$ == $node$$210$$ ? D.$JSCompiler_alias_TRUE$$ : this.$_parent$.$isDescendantOf$($node$$210$$)
};
D.$JSCompiler_StaticMethods_GetNodesAtDepth$$ = function $$JSCompiler_StaticMethods_GetNodesAtDepth$$$($JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$9$$, $child$$24_root$$5$$, $depth$$11$$) {
  var $returnArray$$ = [];
  if(0 > $depth$$11$$) {
    return $returnArray$$
  }
  if(0 == $depth$$11$$) {
    return[$JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$9$$]
  }
  if($child$$24_root$$5$$.$hasChildren$()) {
    $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$9$$ = $child$$24_root$$5$$.$getChildNodes$();
    for(var $i$$373$$ = 0;$i$$373$$ < $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$9$$.length;$i$$373$$++) {
      $child$$24_root$$5$$ = $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$9$$[$i$$373$$], $returnArray$$ = $returnArray$$.concat((0,D.$JSCompiler_StaticMethods_GetNodesAtDepth$$)($child$$24_root$$5$$, $child$$24_root$$5$$, $depth$$11$$ - 1))
    }
  }
  return $returnArray$$
};
D.$JSCompiler_StaticMethods_getLeafNodes$$ = function $$JSCompiler_StaticMethods_getLeafNodes$$$($JSCompiler_StaticMethods_getLeafNodes$self$$) {
  var $leafNodes$$ = [], $child$$25_childLeafNodes$$;
  if(!$JSCompiler_StaticMethods_getLeafNodes$self$$.$hasChildren$()) {
    return[$JSCompiler_StaticMethods_getLeafNodes$self$$]
  }
  for(var $i$$374$$ = 0;$i$$374$$ < $JSCompiler_StaticMethods_getLeafNodes$self$$.$_children$.length;$i$$374$$++) {
    $child$$25_childLeafNodes$$ = $JSCompiler_StaticMethods_getLeafNodes$self$$.$_children$[$i$$374$$], $child$$25_childLeafNodes$$ = (0,D.$JSCompiler_StaticMethods_getLeafNodes$$)($child$$25_childLeafNodes$$), $leafNodes$$ = $leafNodes$$.concat($child$$25_childLeafNodes$$)
  }
  return $leafNodes$$
};
D.$DvtBaseTreeNode$getNodeById$$ = function $$DvtBaseTreeNode$getNodeById$$$($root$$6$$, $id$$100$$) {
  if($root$$6$$.getId() == $id$$100$$) {
    return $root$$6$$
  }
  for(var $child$$26_node$$211$$ = D.$JSCompiler_alias_NULL$$, $children$$10$$ = $root$$6$$.$getChildNodes$(), $length$$17$$ = $children$$10$$.length, $child$$26_node$$211$$ = D.$JSCompiler_alias_NULL$$, $i$$375$$ = 0;$i$$375$$ < $length$$17$$;$i$$375$$++) {
    if($child$$26_node$$211$$ = $children$$10$$[$i$$375$$], $child$$26_node$$211$$ = (0,D.$DvtBaseTreeNode$getNodeById$$)($child$$26_node$$211$$, $id$$100$$)) {
      return $child$$26_node$$211$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getSize$ = (0,D.$JSCompiler_get$$)("$_size$");
D.$JSCompiler_prototypeAlias$$.$getColor$ = (0,D.$JSCompiler_get$$)("$_color$");
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = (0,D.$JSCompiler_get$$)("$_datatip$");
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = (0,D.$JSCompiler_get$$)("$_color$");
D.$JSCompiler_prototypeAlias$$.$getAlpha$ = (0,D.$JSCompiler_get$$)("$_alpha$");
D.$JSCompiler_prototypeAlias$$.$setAlpha$ = function $$JSCompiler_prototypeAlias$$$$setAlpha$$($alpha$$18$$) {
  this.$_alpha$ = $alpha$$18$$;
  this.$_shape$ && this.$_shape$.$setAlpha$(this.$_alpha$)
};
D.$JSCompiler_prototypeAlias$$.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_disclosed$");
D.$JSCompiler_prototypeAlias$$.$isDrillReplaceEnabled$ = function $$JSCompiler_prototypeAlias$$$$isDrillReplaceEnabled$$() {
  return"r" == this.$_drilling$ || "ir" == this.$_drilling$
};
D.$JSCompiler_prototypeAlias$$.$setShowPopupBehaviors$ = (0,D.$JSCompiler_set$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_showPopupBehaviors$");
D.$JSCompiler_prototypeAlias$$.$getContextMenuId$ = (0,D.$JSCompiler_get$$)("$_menuId$");
D.$JSCompiler_prototypeAlias$$.$render$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$renderChildren$ = function $$JSCompiler_prototypeAlias$$$$renderChildren$$($container$$87$$) {
  var $children$$11$$ = this.$getChildNodes$();
  if($children$$11$$ != D.$JSCompiler_alias_NULL$$) {
    for(var $i$$376$$ = 0;$i$$376$$ < $children$$11$$.length;$i$$376$$++) {
      $children$$11$$[$i$$376$$].$render$($container$$87$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$() {
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)(this);
  return this
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$showHoverEffect$();
  this.$handleMouseOver$ && this.$handleMouseOver$();
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$isShowingKeyboardFocusEffect$() && this.$hideHoverEffect$();
  this.$handleMouseOut$ && this.$handleMouseOut$();
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$handleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOver$$() {
  this.$IsHover$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$handleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOut$$() {
  this.$IsHover$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_selected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$25$$) {
  this.$_selected$ = $selected$$25$$;
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$12$$) {
  return this.$_view$.$__isDragAvailable$($clientIds$$12$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_view$.$__getDragTransferable$(this)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_view$.$__getDragFeedback$()
};
D.$JSCompiler_prototypeAlias$$.$__getDisplayable$ = (0,D.$JSCompiler_get$$)("$_shape$");
D.$JSCompiler_prototypeAlias$$.$getPopupBounds$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.contains = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  return[]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$38$$, $oldNode$$16$$) {
  $handler$$38$$.$_bDrill$ || (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($handler$$38$$, $oldNode$$16$$.$getChildNodes$(), this.$getChildNodes$());
  var $animationUpdateColor_startState$$6$$ = $oldNode$$16$$.$GetAnimationParams$(), $bSizeChanged_endState$$13$$ = this.$GetAnimationParams$(), $bColorChanged_nodePlayable$$20$$;
  if(!D.$DvtArrayUtils$$.$equals$($animationUpdateColor_startState$$6$$, $bSizeChanged_endState$$13$$) && ($bColorChanged_nodePlayable$$20$$ = new D.$DvtCustomAnimation$$(this.$_view$.$_context$, this, this.$_view$.$AnimationDuration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($bColorChanged_nodePlayable$$20$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, $bSizeChanged_endState$$13$$), $handler$$38$$.add($bColorChanged_nodePlayable$$20$$, 1), $bSizeChanged_endState$$13$$ = 
  this.$_size$ != $oldNode$$16$$.$_size$, $bColorChanged_nodePlayable$$20$$ = D.$DvtColorUtils$$.$getRGBA$(this.$_color$) != D.$DvtColorUtils$$.$getRGBA$($oldNode$$16$$.$_color$), this.$SetAnimationParams$($animationUpdateColor_startState$$6$$), ($animationUpdateColor_startState$$6$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, D.$JSCompiler_alias_NULL$$, "ANIMATION_UPDATE_COLOR_STYLE")) && ($bSizeChanged_endState$$13$$ || $bColorChanged_nodePlayable$$20$$))) {
    this.$_color$ = $animationUpdateColor_startState$$6$$
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$39$$) {
  if(!$handler$$39$$.$_bDrill$ || !$handler$$39$$.$_bDrill$ || !($handler$$39$$.$_oldRoot$.getId() == this.getId() || (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($handler$$39$$.$_oldAncestors$, this))) {
    this.$setAlpha$(0);
    var $anim$$18_i$$377$$ = new D.$DvtAnimFadeIn$$(this.$_view$.$_context$, this, this.$_view$.$AnimationDuration$);
    $handler$$39$$.add($anim$$18_i$$377$$, 2);
    for($anim$$18_i$$377$$ = 0;$anim$$18_i$$377$$ < this.$_children$.length;$anim$$18_i$$377$$++) {
      this.$_children$[$anim$$18_i$$377$$].$animateInsert$($handler$$39$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$40$$, $container$$88$$) {
  $container$$88$$.$addChild$(this.$_shape$);
  var $anim$$19_i$$378$$ = new D.$DvtAnimFadeOut$$(this.$_view$.$_context$, this, this.$_view$.$AnimationDuration$);
  $handler$$40$$.add($anim$$19_i$$378$$, 0);
  if(!$handler$$40$$.$_bDrill$) {
    for($anim$$19_i$$378$$ = 0;$anim$$19_i$$378$$ < this.$_children$.length;$anim$$19_i$$378$$++) {
      this.$_children$[$anim$$19_i$$378$$].$animateDelete$($handler$$40$$, $container$$88$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$hasChildren$ = function $$JSCompiler_prototypeAlias$$$$hasChildren$$() {
  return this.$_children$ != D.$JSCompiler_alias_NULL$$ && 0 < this.$_children$.length
};
D.$JSCompiler_StaticMethods_GetDepth$$ = function $$JSCompiler_StaticMethods_GetDepth$$$($JSCompiler_StaticMethods_GetDepth$self_parent$$36$$) {
  var $depth$$12$$ = 0;
  for($JSCompiler_StaticMethods_GetDepth$self_parent$$36$$ = $JSCompiler_StaticMethods_GetDepth$self_parent$$36$$.$_parent$;$JSCompiler_StaticMethods_GetDepth$self_parent$$36$$;) {
    $depth$$12$$++, $JSCompiler_StaticMethods_GetDepth$self_parent$$36$$ = $JSCompiler_StaticMethods_GetDepth$self_parent$$36$$.$_parent$
  }
  return $depth$$12$$
};
D.$DvtBaseTreeNode$$.prototype.$GetFill$ = function $$DvtBaseTreeNode$$$$$GetFill$$() {
  return this.$_pattern$ ? new D.$DvtPatternFill$$(this.$_pattern$, this.$_color$) : new D.$DvtSolidFill$$(this.$_color$)
};
D.$DvtBaseTreeNode$GetNodeTextColor$$ = function $$DvtBaseTreeNode$GetNodeTextColor$$$($node$$212_r$$17$$) {
  if($node$$212_r$$17$$.$_pattern$) {
    return"#000000"
  }
  var $b$$20_color$$34$$ = $node$$212_r$$17$$.$_color$;
  $node$$212_r$$17$$ = D.$DvtColorUtils$$.$getRed$($b$$20_color$$34$$);
  var $g$$4$$ = D.$DvtColorUtils$$.$getGreen$($b$$20_color$$34$$), $b$$20_color$$34$$ = D.$DvtColorUtils$$.$getBlue$($b$$20_color$$34$$);
  return 128 <= (299 * $node$$212_r$$17$$ + 587 * $g$$4$$ + 114 * $b$$20_color$$34$$) / 1E3 ? "#000000" : "#FFFFFF"
};
D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$ = function $$JSCompiler_StaticMethods_ApplyLabelTextStyle$$$($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$, $text$$36$$) {
  var $defaultFillColor$$1_textStyle$$2$$ = (0,D.$DvtBaseTreeNode$GetNodeTextColor$$)($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$);
  $text$$36$$.$setSolidFill$($defaultFillColor$$1_textStyle$$2$$);
  $defaultFillColor$$1_textStyle$$2$$ = [];
  $defaultFillColor$$1_textStyle$$2$$.push($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_view$.$_styles$.LABEL_TEXT_DEFAULT_STYLE);
  $JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_labelStyle$ && $defaultFillColor$$1_textStyle$$2$$.push($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_labelStyle$);
  $text$$36$$.$setCSSStyle$((0,D.$DvtCSSStyle$mergeStyles$$)($defaultFillColor$$1_textStyle$$2$$))
};
D.$JSCompiler_StaticMethods_getResolvedColor$$ = function $$JSCompiler_StaticMethods_getResolvedColor$$$($JSCompiler_StaticMethods_getResolvedColor$self_colorValue$$, $color$$35_defaultColor$$1$$, $styleColorKey$$) {
  ($JSCompiler_StaticMethods_getResolvedColor$self_colorValue$$ = $JSCompiler_StaticMethods_getResolvedColor$self_colorValue$$.$_view$.$_styles$[$styleColorKey$$]) && ($color$$35_defaultColor$$1$$ = $JSCompiler_StaticMethods_getResolvedColor$self_colorValue$$);
  return $color$$35_defaultColor$$1$$
};
D.$JSCompiler_StaticMethods_GetTextSize$$ = function $$JSCompiler_StaticMethods_GetTextSize$$$($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$5$$) {
  var $size$$20$$ = 11;
  ($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$5$$ = $JSCompiler_StaticMethods_GetTextSize$self_fontSize$$5$$.$_view$.$_styles$.LABEL_TEXT_DEFAULT_STYLE.$getFontSize$()) && ($size$$20$$ = (0,window.parseFloat)($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$5$$));
  return $size$$20$$
};
D.$DvtBaseTreeNode$$.prototype.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$_shape$");
D.$DvtBaseTreeNode$$.prototype.$getLabel$ = (0,D.$JSCompiler_get$$)("$_textStr$");
D.$DvtBaseTreeNode$$.prototype.$SetElAttributes$ = function $$DvtBaseTreeNode$$$$$SetElAttributes$$($elAttrs$$2$$) {
  $elAttrs$$2$$ && !this.$_template$ && (0,D.$JSCompiler_StaticMethods__setTemplate$$)(this, "content");
  this.$_elAttributes$ = $elAttrs$$2$$
};
D.$JSCompiler_StaticMethods__setTemplate$$ = function $$JSCompiler_StaticMethods__setTemplate$$$($JSCompiler_StaticMethods__setTemplate$self$$, $tempName$$) {
  $tempName$$ && ($JSCompiler_StaticMethods__setTemplate$self$$.$_template$ = $JSCompiler_StaticMethods__setTemplate$self$$.$_templates$[$tempName$$])
};
D.$DvtBaseTreeNode$$.prototype.$isDoubleClickable$ = function $$DvtBaseTreeNode$$$$$isDoubleClickable$$() {
  return this.$isDrillReplaceEnabled$()
};
D.$DvtBaseTreeNode$$.prototype.$UpdateAriaLabel$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreePeer$$ = function $$DvtBaseTreePeer$$$($node$$213$$, $id$$101$$, $tooltip$$16$$, $datatip$$1$$, $datatipColor$$) {
  this.Init($tooltip$$16$$, $datatip$$1$$, $datatipColor$$);
  this.$_node$ = $node$$213$$;
  this.$_id$ = $id$$101$$;
  this.$_bDrillable$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreePeer$$, D.$DvtSimpleObjPeer$$, "DvtBaseTreePeer");
D.$DvtBaseTreePeer$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtBaseTreePeer$$.prototype.$isDrillable$ = (0,D.$JSCompiler_get$$)("$_bDrillable$");
D.$DvtBaseTreePeer$$.prototype.$setDrillable$ = (0,D.$JSCompiler_set$$)("$_bDrillable$");
D.$DvtBaseTreePeer$$.prototype.$handleMouseOut$ = function $$DvtBaseTreePeer$$$$$handleMouseOut$$() {
  this.$_node$ && this.$_node$.$handleMouseOut$ && this.$_node$.$handleMouseOut$()
};
D.$DvtTreeBreadcrumbsRenderer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTreeBreadcrumbsRenderer$$, D.$DvtObj$$, "DvtTreeBreadcrumbsRenderer");
D.$DvtTreeBreadcrumbsRenderer$$.$_COMPONENT_GAP$ = 6;
D.$DvtTreeBreadcrumbsRenderer$$.$_ENABLED_INLINE_STYLE$ = "color: #003286;";
D.$DvtTreeBreadcrumbsRenderer$$.$render$ = function $$DvtTreeBreadcrumbsRenderer$$$$render$$($treeView$$1$$, $availSpace$$73$$, $ancestors$$6_dataItems$$1$$, $dims$$34_height$$54_rootLabel$$) {
  var $breadcrumbs_context$$179$$ = $treeView$$1$$.$_context$, $enabledStyle$$1_enabledStyleArray$$ = [];
  $enabledStyle$$1_enabledStyleArray$$.push($treeView$$1$$.$_styles$.TEXT_STYLE);
  $enabledStyle$$1_enabledStyleArray$$.push(new D.$DvtCSSStyle$$(D.$DvtTreeBreadcrumbsRenderer$$.$_ENABLED_INLINE_STYLE$));
  $enabledStyle$$1_enabledStyleArray$$.push($treeView$$1$$.$_styles$.DRILL_TEXT_STYLE);
  var $enabledStyle$$1_enabledStyleArray$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($enabledStyle$$1_enabledStyleArray$$).toString(), $enabledStyleOver$$ = $enabledStyle$$1_enabledStyleArray$$ + "text-decoration: underline;", $disabledStyle_disabledStyleArray$$ = [];
  $disabledStyle_disabledStyleArray$$.push($treeView$$1$$.$_styles$.TEXT_STYLE);
  $disabledStyle_disabledStyleArray$$.push($treeView$$1$$.$_styles$.CURRENT_TEXT_STYLE);
  $disabledStyle_disabledStyleArray$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($disabledStyle_disabledStyleArray$$).toString();
  $breadcrumbs_context$$179$$ = new D.$DvtBreadcrumbs$$($breadcrumbs_context$$179$$, $treeView$$1$$.$__processBreadcrumbsEvent$, $treeView$$1$$, {$labelStyle$:$enabledStyle$$1_enabledStyleArray$$, $labelStyleOver$:$enabledStyleOver$$, $labelStyleDown$:$enabledStyleOver$$, $disabledLabelStyle$:$disabledStyle_disabledStyleArray$$});
  $treeView$$1$$.$addChild$($breadcrumbs_context$$179$$);
  $ancestors$$6_dataItems$$1$$ = $ancestors$$6_dataItems$$1$$.slice(0).reverse();
  $ancestors$$6_dataItems$$1$$.push({text:$dims$$34_height$$54_rootLabel$$});
  $breadcrumbs_context$$179$$.$render$({items:$ancestors$$6_dataItems$$1$$}, $availSpace$$73$$.$w$);
  $dims$$34_height$$54_rootLabel$$ = $breadcrumbs_context$$179$$.$getDimensions$();
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($breadcrumbs_context$$179$$, $availSpace$$73$$.x, $availSpace$$73$$.y);
  $dims$$34_height$$54_rootLabel$$ = $dims$$34_height$$54_rootLabel$$.$h$ + D.$DvtTreeBreadcrumbsRenderer$$.$_COMPONENT_GAP$;
  $availSpace$$73$$.y += $dims$$34_height$$54_rootLabel$$;
  $availSpace$$73$$.$h$ -= $dims$$34_height$$54_rootLabel$$;
  $treeView$$1$$.removeChild($breadcrumbs_context$$179$$);
  return $breadcrumbs_context$$179$$
};
D.$DvtTreeLegendRenderer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTreeLegendRenderer$$, D.$DvtObj$$, "DvtTreeLegendRenderer");
D.$DvtTreeLegendRenderer$$.$_LEGEND_GAP$ = 4;
D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$ = 7;
D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$ = 24;
D.$DvtTreeLegendRenderer$$.$_LABEL_SIZE$ = 11;
D.$DvtTreeLegendRenderer$$.$_LABEL_COLOR$ = "#636363";
D.$DvtTreeLegendRenderer$$.$_LABEL_INLINE_STYLE$ = "color:" + D.$DvtTreeLegendRenderer$$.$_LABEL_COLOR$ + ";";
D.$DvtTreeLegendRenderer$$.$render$ = function $$DvtTreeLegendRenderer$$$$render$$($treeView$$2$$, $availSpace$$74$$, $colorSpace_sizeStr$$, $colorStr$$, $sizeValueStr$$, $colorValueStr$$, $attrGroups$$5_legendDims$$) {
  var $context$$180$$ = $treeView$$2$$.$_context$, $eventManager$$6_labelSpace$$1$$ = $treeView$$2$$.$__getEventManager$(), $legend$$4$$ = new D.$DvtContainer$$($context$$180$$);
  $treeView$$2$$.$addChild$($legend$$4$$);
  var $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$180$$, $treeView$$2$$, $legend$$4$$, $availSpace$$74$$.$w$, $colorSpace_sizeStr$$, $colorStr$$, $sizeValueStr$$, $colorValueStr$$, $attrGroups$$5_legendDims$$), $borderColor$$10_colorContainer$$ = $treeView$$2$$.$_resources$.alta ? D.$JSCompiler_alias_NULL$$ : "#000000", $legendStyleArray_legendStyles$$ = [];
  $legendStyleArray_legendStyles$$.push($treeView$$2$$.$_styles$.TEXT_STYLE);
  var $legendStyleArray_legendStyles$$ = {borderColor:$borderColor$$10_colorContainer$$, $labelStyle$:(0,D.$DvtCSSStyle$mergeStyles$$)($legendStyleArray_legendStyles$$)}, $borderColor$$10_colorContainer$$ = D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$180$$, $eventManager$$6_labelSpace$$1$$, $legend$$4$$, $availSpace$$74$$.$w$, $availSpace$$74$$.$h$, $attrGroups$$5_legendDims$$, $legendStyleArray_legendStyles$$), $labelDims$$10$$ = $labelContainer$$ ? $labelContainer$$.$getDimensions$() : 
  D.$JSCompiler_alias_NULL$$, $colorDims$$ = $borderColor$$10_colorContainer$$ ? $borderColor$$10_colorContainer$$.$getDimensions$() : D.$JSCompiler_alias_NULL$$;
  if($labelContainer$$ && !$borderColor$$10_colorContainer$$) {
    $labelContainer$$.$setTranslateX$($availSpace$$74$$.y + ($availSpace$$74$$.$w$ - $labelDims$$10$$.$w$) / 2)
  }else {
    if($borderColor$$10_colorContainer$$ && !$labelContainer$$) {
      $borderColor$$10_colorContainer$$.$setTranslateX$($availSpace$$74$$.y + ($availSpace$$74$$.$w$ - $colorDims$$.$w$) / 2)
    }else {
      if($borderColor$$10_colorContainer$$ && $labelContainer$$) {
        var $availWidth$$4$$ = $availSpace$$74$$.$w$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$;
        $labelDims$$10$$.$w$ + $colorDims$$.$w$ > $availWidth$$4$$ && ($labelDims$$10$$.$w$ > $availWidth$$4$$ / 2 && $colorDims$$.$w$ > $availWidth$$4$$ / 2 ? ($legend$$4$$.removeChild($labelContainer$$), $legend$$4$$.removeChild($borderColor$$10_colorContainer$$), $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$180$$, $treeView$$2$$, $legend$$4$$, $availWidth$$4$$ / 2, $colorSpace_sizeStr$$, $colorStr$$, $sizeValueStr$$, $colorValueStr$$, $attrGroups$$5_legendDims$$), $borderColor$$10_colorContainer$$ = 
        D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$180$$, $eventManager$$6_labelSpace$$1$$, $legend$$4$$, $availWidth$$4$$ / 2, $availSpace$$74$$.$h$, $attrGroups$$5_legendDims$$, $legendStyleArray_legendStyles$$)) : $labelDims$$10$$.$w$ > $colorDims$$.$w$ ? ($eventManager$$6_labelSpace$$1$$ = $availWidth$$4$$ - $colorDims$$.$w$, $legend$$4$$.removeChild($labelContainer$$), $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$180$$, $treeView$$2$$, $legend$$4$$, 
        $eventManager$$6_labelSpace$$1$$, $colorSpace_sizeStr$$, $colorStr$$, $sizeValueStr$$, $colorValueStr$$, $attrGroups$$5_legendDims$$)) : ($colorSpace_sizeStr$$ = $availWidth$$4$$ - $labelDims$$10$$.$w$, $legend$$4$$.removeChild($borderColor$$10_colorContainer$$), $borderColor$$10_colorContainer$$ = D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$180$$, $eventManager$$6_labelSpace$$1$$, $legend$$4$$, $colorSpace_sizeStr$$, $availSpace$$74$$.$h$, $attrGroups$$5_legendDims$$, $legendStyleArray_legendStyles$$)), 
        $labelDims$$10$$ = $labelContainer$$.$getDimensions$(), $colorDims$$ = $borderColor$$10_colorContainer$$.$getDimensions$());
        (0,D.$DvtAgent$isRightToLeft$$)($context$$180$$) ? ($borderColor$$10_colorContainer$$.$setTranslateX$($availSpace$$74$$.x), $labelContainer$$.$setTranslateX$($availSpace$$74$$.x + $availSpace$$74$$.$w$ - $labelDims$$10$$.$w$)) : ($labelContainer$$.$setTranslateX$($availSpace$$74$$.x), $borderColor$$10_colorContainer$$.$setTranslateX$($availSpace$$74$$.x + $availSpace$$74$$.$w$ - $colorDims$$.$w$))
      }
    }
  }
  $attrGroups$$5_legendDims$$ = $legend$$4$$.$getDimensions$();
  $legend$$4$$.$setTranslateY$($availSpace$$74$$.y + $availSpace$$74$$.$h$ - $attrGroups$$5_legendDims$$.$h$);
  $availSpace$$74$$.$h$ -= $attrGroups$$5_legendDims$$.$h$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_GAP$;
  $treeView$$2$$.removeChild($legend$$4$$);
  return $legend$$4$$
};
D.$DvtTreeLegendRenderer$$.$_renderLabels$ = function $$DvtTreeLegendRenderer$$$$_renderLabels$$($context$$181_widthPerSection$$, $sizeWidth_treeView$$3$$, $attrTypeStyle_legend$$5$$, $availWidth$$5_x$$123$$, $colorWidth_sizeStr$$1$$, $colorStr$$1$$, $sizeValueStr$$1$$, $colorValueStr$$1$$) {
  var $isRTL$$12$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$181_widthPerSection$$), $eventManager$$7$$ = $sizeWidth_treeView$$3$$.$__getEventManager$(), $labelContainer$$1$$ = D.$JSCompiler_alias_NULL$$;
  if($sizeValueStr$$1$$ || $colorValueStr$$1$$) {
    $labelContainer$$1$$ = new D.$DvtContainer$$($context$$181_widthPerSection$$);
    $attrTypeStyle_legend$$5$$.$addChild$($labelContainer$$1$$);
    var $attrValueStyle_textStyle$$1$$ = [];
    $attrValueStyle_textStyle$$1$$.push($sizeWidth_treeView$$3$$.$_styles$.TEXT_STYLE);
    $attrValueStyle_textStyle$$1$$.push($sizeWidth_treeView$$3$$.$_styles$.ATTRIBUTE_TYPE_STYLE);
    $attrTypeStyle_legend$$5$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($attrValueStyle_textStyle$$1$$);
    $attrValueStyle_textStyle$$1$$ = [];
    $attrValueStyle_textStyle$$1$$.push($sizeWidth_treeView$$3$$.$_styles$.TEXT_STYLE);
    $attrValueStyle_textStyle$$1$$.push($sizeWidth_treeView$$3$$.$_styles$.ATTRIBUTE_VALUE_STYLE);
    var $attrValueStyle_textStyle$$1$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($attrValueStyle_textStyle$$1$$), $sizeLabel$$, $sizeValueLabel$$, $sizeLabelWidth$$, $sizeValueLabelWidth$$;
    $sizeWidth_treeView$$3$$ = 0;
    $sizeValueStr$$1$$ && ($sizeLabel$$ = new D.$DvtOutputText$$($context$$181_widthPerSection$$, $colorWidth_sizeStr$$1$$, 0, 0), $sizeLabel$$.$setCSSStyle$($attrTypeStyle_legend$$5$$), $labelContainer$$1$$.$addChild$($sizeLabel$$), $sizeLabelWidth$$ = $sizeLabel$$.$measureDimensions$().$w$, $sizeValueLabel$$ = new D.$DvtOutputText$$($context$$181_widthPerSection$$, $sizeValueStr$$1$$, 0, 0), $sizeValueLabel$$.$setCSSStyle$($attrValueStyle_textStyle$$1$$), $labelContainer$$1$$.$addChild$($sizeValueLabel$$), 
    $sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, $sizeWidth_treeView$$3$$ = $sizeLabelWidth$$ + $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$);
    var $colorLabel$$, $colorValueLabel$$, $colorLabelWidth$$, $colorValueLabelWidth$$;
    $colorWidth_sizeStr$$1$$ = 0;
    $colorValueStr$$1$$ && ($colorLabel$$ = new D.$DvtOutputText$$($context$$181_widthPerSection$$, $colorStr$$1$$, 0, 0), $colorLabel$$.$setCSSStyle$($attrTypeStyle_legend$$5$$), $labelContainer$$1$$.$addChild$($colorLabel$$), $colorLabelWidth$$ = $colorLabel$$.$measureDimensions$().$w$, $colorValueLabel$$ = new D.$DvtOutputText$$($context$$181_widthPerSection$$, $colorValueStr$$1$$, 0, 0), $colorValueLabel$$.$setCSSStyle$($attrValueStyle_textStyle$$1$$), $labelContainer$$1$$.$addChild$($colorValueLabel$$), 
    $colorValueLabelWidth$$ = $colorValueLabel$$.$measureDimensions$().$w$, $colorWidth_sizeStr$$1$$ = $colorLabelWidth$$ + $colorValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$);
    $availWidth$$5_x$$123$$ -= D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$;
    $sizeWidth_treeView$$3$$ + $colorWidth_sizeStr$$1$$ > $availWidth$$5_x$$123$$ && ($context$$181_widthPerSection$$ = $availWidth$$5_x$$123$$ / 2, $sizeWidth_treeView$$3$$ > $context$$181_widthPerSection$$ && $colorWidth_sizeStr$$1$$ > $context$$181_widthPerSection$$ ? (D.$DvtTextUtils$$.$fitText$($sizeValueLabel$$, $context$$181_widthPerSection$$ - $sizeLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, 
    $eventManager$$7$$.$associate$($sizeValueLabel$$, new D.$DvtSimpleObjPeer$$($sizeValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($sizeLabel$$), $labelContainer$$1$$.removeChild($sizeValueLabel$$), $sizeValueLabel$$ = D.$JSCompiler_alias_NULL$$, $sizeValueLabelWidth$$ = 0), D.$DvtTextUtils$$.$fitText$($colorValueLabel$$, $context$$181_widthPerSection$$ - $colorLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($colorValueLabelWidth$$ = 
    $colorValueLabel$$.$measureDimensions$().$w$, $eventManager$$7$$.$associate$($colorValueLabel$$, new D.$DvtSimpleObjPeer$$($colorValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($colorLabel$$), $labelContainer$$1$$.removeChild($colorValueLabel$$), $colorValueLabel$$ = D.$JSCompiler_alias_NULL$$, $colorValueLabelWidth$$ = 0)) : $sizeWidth_treeView$$3$$ > $colorWidth_sizeStr$$1$$ ? D.$DvtTextUtils$$.$fitText$($sizeValueLabel$$, $availWidth$$5_x$$123$$ - $colorWidth_sizeStr$$1$$ - $sizeLabelWidth$$ - 
    D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, $eventManager$$7$$.$associate$($sizeValueLabel$$, new D.$DvtSimpleObjPeer$$($sizeValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($sizeLabel$$), $labelContainer$$1$$.removeChild($sizeValueLabel$$), $sizeValueLabel$$ = D.$JSCompiler_alias_NULL$$, $sizeValueLabelWidth$$ = 0) : D.$DvtTextUtils$$.$fitText$($colorValueLabel$$, $availWidth$$5_x$$123$$ - 
    $sizeWidth_treeView$$3$$ - $colorLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($colorValueLabelWidth$$ = $colorValueLabel$$.$measureDimensions$().$w$, $eventManager$$7$$.$associate$($colorValueLabel$$, new D.$DvtSimpleObjPeer$$($colorValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($colorLabel$$), $labelContainer$$1$$.removeChild($colorValueLabel$$), $colorValueLabel$$ = D.$JSCompiler_alias_NULL$$, $colorValueLabelWidth$$ = 0));
    $availWidth$$5_x$$123$$ = 0;
    $isRTL$$12$$ ? ($colorValueLabel$$ && ($colorValueLabel$$.$setX$($availWidth$$5_x$$123$$), $availWidth$$5_x$$123$$ += $colorValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $colorLabel$$.$setX$($availWidth$$5_x$$123$$), $availWidth$$5_x$$123$$ += $colorLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$), $sizeValueLabel$$ && ($sizeValueLabel$$.$setX$($availWidth$$5_x$$123$$), $availWidth$$5_x$$123$$ += $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, 
    $sizeLabel$$.$setX$($availWidth$$5_x$$123$$))) : ($sizeValueLabel$$ && ($sizeLabel$$.$setX$($availWidth$$5_x$$123$$), $availWidth$$5_x$$123$$ += $sizeLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $sizeValueLabel$$.$setX$($availWidth$$5_x$$123$$), $availWidth$$5_x$$123$$ += $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$), $colorValueLabel$$ && ($colorLabel$$.$setX$($availWidth$$5_x$$123$$), $availWidth$$5_x$$123$$ += $colorLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, 
    $colorValueLabel$$.$setX$($availWidth$$5_x$$123$$)))
  }
  return $labelContainer$$1$$
};
D.$DvtBaseTreeKeyboardHandler$$ = function $$DvtBaseTreeKeyboardHandler$$$($manager$$9$$) {
  this.Init($manager$$9$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtBaseTreeKeyboardHandler");
D.$DvtBaseTreeKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtBaseTreeKeyboardHandler$$$$$isSelectionEvent$$($event$$269$$) {
  return this.$isNavigationEvent$($event$$269$$) && !$event$$269$$.ctrlKey
};
D.$DvtBaseTreeKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtBaseTreeKeyboardHandler$$$$$isMultiSelectEvent$$($event$$270$$) {
  return 32 == $event$$270$$.keyCode && $event$$270$$.ctrlKey
};
D.$DvtBaseTreeDefaults$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtBaseTreeDefaults");
D.$DvtBaseTreeDefaults$VERSION_1$$ = {skin:"skyros", emptyText:"No data to display", nodeDefaults:{labelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;")}, styleDefaults:{_attributeTypeTextStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:bold;color:#4F4F4F"), _attributeValueTextStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;")}, 
_resources:{}};
D.$DvtBaseTreeDefaults$$.prototype.Init = function $$DvtBaseTreeDefaults$$$$Init$($defaultsMap_ret$$63$$) {
  $defaultsMap_ret$$63$$ = {skyros:D.$DvtJSONUtils$$.$merge$($defaultsMap_ret$$63$$.skyros, D.$DvtBaseTreeDefaults$VERSION_1$$), alta:D.$DvtJSONUtils$$.$merge$($defaultsMap_ret$$63$$.alta, {})};
  D.$DvtBaseTreeDefaults$$.$superclass$.Init.call(this, $defaultsMap_ret$$63$$)
};
D.$DvtBaseTreeJsonUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeJsonUtils$$, D.$DvtObj$$, "DvtBaseTreeJsonUtils");
D.$DvtBaseTreeJsonUtils$$.prototype.$toXml$ = function $$DvtBaseTreeJsonUtils$$$$$toXml$$($JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$) {
  var $JSCompiler_temp_const$$213_ret$$64_ret$$inline_3826$$;
  $JSCompiler_temp_const$$213_ret$$64_ret$$inline_3826$$ = "\x3c" + this.$GetComponentName$();
  $JSCompiler_temp_const$$213_ret$$64_ret$$inline_3826$$ += this.$WriteComponentAttributes$($JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$);
  $JSCompiler_temp_const$$213_ret$$64_ret$$inline_3826$$ += "\x3e\n";
  if($JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$ && $JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$.nodes) {
    for(var $JSCompiler_temp_const$$8871_nodes$$13_ret$$inline_3830$$ = $JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$.nodes, $attrGroups$$inline_9926_groups$$inline_9928_i$$366$$ = 0;$attrGroups$$inline_9926_groups$$inline_9928_i$$366$$ < $JSCompiler_temp_const$$8871_nodes$$13_ret$$inline_3830$$.length;$attrGroups$$inline_9926_groups$$inline_9928_i$$366$$++) {
      $JSCompiler_temp_const$$213_ret$$64_ret$$inline_3826$$ += (0,D.$JSCompiler_StaticMethods_WriteNodeElement$$)(this, $JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$, $JSCompiler_temp_const$$8871_nodes$$13_ret$$inline_3830$$[$attrGroups$$inline_9926_groups$$inline_9928_i$$366$$])
    }
  }
  $JSCompiler_temp_const$$8871_nodes$$13_ret$$inline_3830$$ = "\x3ca/\x3e\n" + this.$WriteResourcesElement$($JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$);
  $JSCompiler_temp_const$$8871_nodes$$13_ret$$inline_3830$$ += this.$WriteStyleElement$($JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$);
  if($attrGroups$$inline_9926_groups$$inline_9928_i$$366$$ = $JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$.attributeGroups ? $JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$.attributeGroups[0] : D.$JSCompiler_alias_NULL$$) {
    if($JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$ = '\x3cag id\x3d"' + $attrGroups$$inline_9926_groups$$inline_9928_i$$366$$.id + '"', "continuous" == $attrGroups$$inline_9926_groups$$inline_9928_i$$366$$.attributeType) {
      $JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$ += this.$WriteAttr$("t", "continuous"), $JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$ += this.$WriteAttr$("ramp", $attrGroups$$inline_9926_groups$$inline_9928_i$$366$$.colors.join(";")), $JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$ += this.$WriteAttr$("minValue", $attrGroups$$inline_9926_groups$$inline_9928_i$$366$$.min), $JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$ += this.$WriteAttr$("maxValue", 
      $attrGroups$$inline_9926_groups$$inline_9928_i$$366$$.max), $JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$ += this.$WriteAttr$("minLabel", $attrGroups$$inline_9926_groups$$inline_9928_i$$366$$.minLabel), $JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$ += this.$WriteAttr$("maxLabel", $attrGroups$$inline_9926_groups$$inline_9928_i$$366$$.maxLabel), $JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$ += "/\x3e"
    }else {
      $JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$ += "\x3e\n";
      for(var $attrGroups$$inline_9926_groups$$inline_9928_i$$366$$ = $attrGroups$$inline_9926_groups$$inline_9928_i$$366$$.groups, $i$$inline_9929$$ = 0;$i$$inline_9929$$ < $attrGroups$$inline_9926_groups$$inline_9928_i$$366$$.length;$i$$inline_9929$$++) {
        $JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$ += "\x3ci", $JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$ += this.$WriteAttr$("g", $attrGroups$$inline_9926_groups$$inline_9928_i$$366$$[$i$$inline_9929$$].id), $JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$ += this.$WriteAttr$("l", $attrGroups$$inline_9926_groups$$inline_9928_i$$366$$[$i$$inline_9929$$].label), $JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$ += this.$WriteAttr$("c", 
        $attrGroups$$inline_9926_groups$$inline_9928_i$$366$$[$i$$inline_9929$$].color), $JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$ += this.$WriteAttr$("p", $attrGroups$$inline_9926_groups$$inline_9928_i$$366$$[$i$$inline_9929$$].pattern), $JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$ += "/\x3e\n"
      }
      $JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$ += "\x3c/ag\x3e\n"
    }
  }else {
    $JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$ = ""
  }
  $JSCompiler_temp_const$$8871_nodes$$13_ret$$inline_3830$$ = $JSCompiler_temp_const$$8871_nodes$$13_ret$$inline_3830$$ + $JSCompiler_inline_result$$8872_options$$149_ret$$inline_9927$$ + ("\x3c/" + this.$GetComponentName$() + "\x3e");
  return $JSCompiler_temp_const$$213_ret$$64_ret$$inline_3826$$ += $JSCompiler_temp_const$$8871_nodes$$13_ret$$inline_3830$$
};
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteAttr$ = function $$DvtBaseTreeJsonUtils$$$$$WriteAttr$$($attrName$$1$$, $value$$104$$) {
  return $value$$104$$ != D.$JSCompiler_alias_NULL$$ ? " " + $attrName$$1$$ + '\x3d"' + $value$$104$$ + '"' : ""
};
D.$DvtBaseTreeJsonUtils$$.prototype.$GetComponentName$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteComponentAttributes$ = function $$DvtBaseTreeJsonUtils$$$$$WriteComponentAttributes$$($options$$151$$) {
  var $ret$$66$$;
  $ret$$66$$ = "" + this.$WriteAttr$("sv", $options$$151$$.sizeLabel);
  $ret$$66$$ += this.$WriteAttr$("cv", $options$$151$$.colorLabel);
  var $attrGroups$$3_selectedNodes$$ = $options$$151$$.attributeGroups ? $options$$151$$.attributeGroups[0] : D.$JSCompiler_alias_NULL$$;
  $attrGroups$$3_selectedNodes$$ && ($ret$$66$$ += this.$WriteAttr$("ls", $attrGroups$$3_selectedNodes$$.id));
  for(var $attrGroups$$3_selectedNodes$$ = $options$$151$$.selectedNodes ? $options$$151$$.selectedNodes : [], $selectedNodeStr$$ = "", $i$$367$$ = 0;$i$$367$$ < $attrGroups$$3_selectedNodes$$.length;$i$$367$$++) {
    0 < $selectedNodeStr$$.length && ($selectedNodeStr$$ += ","), $selectedNodeStr$$ += $attrGroups$$3_selectedNodes$$[$i$$367$$]
  }
  0 < $selectedNodeStr$$.length && ($ret$$66$$ += this.$WriteAttr$("selIds", $selectedNodeStr$$));
  $ret$$66$$ += this.$WriteAttr$("adu", $options$$151$$.animationDuration);
  $ret$$66$$ += this.$WriteAttr$("adc", $options$$151$$.animationOnDataChange);
  $ret$$66$$ += this.$WriteAttr$("emptyText", $options$$151$$.emptyText);
  $ret$$66$$ += this.$WriteAttr$("sel", $options$$151$$.selection);
  return $ret$$66$$ += this.$WriteAttr$("sort", $options$$151$$.sorting)
};
D.$JSCompiler_StaticMethods_WriteNodeElement$$ = function $$JSCompiler_StaticMethods_WriteNodeElement$$$($JSCompiler_StaticMethods_WriteNodeElement$self$$, $options$$153$$, $nodeData$$24_nodes$$14$$) {
  var $ret$$68$$;
  $ret$$68$$ = "\x3cn" + $JSCompiler_StaticMethods_WriteNodeElement$self$$.$WriteNodeAttributes$($options$$153$$, $nodeData$$24_nodes$$14$$);
  if($nodeData$$24_nodes$$14$$ && $nodeData$$24_nodes$$14$$.nodes && 0 < $nodeData$$24_nodes$$14$$.nodes.length) {
    $ret$$68$$ += $JSCompiler_StaticMethods_WriteNodeElement$self$$.$WriteAttr$("di", "t");
    $ret$$68$$ += "\x3e\n";
    $nodeData$$24_nodes$$14$$ = $nodeData$$24_nodes$$14$$.nodes;
    for(var $i$$368$$ = 0;$i$$368$$ < $nodeData$$24_nodes$$14$$.length;$i$$368$$++) {
      $ret$$68$$ += (0,D.$JSCompiler_StaticMethods_WriteNodeElement$$)($JSCompiler_StaticMethods_WriteNodeElement$self$$, $options$$153$$, $nodeData$$24_nodes$$14$$[$i$$368$$])
    }
    $ret$$68$$ += "\x3c/n\x3e\n"
  }else {
    $ret$$68$$ += "/\x3e\n"
  }
  return $ret$$68$$
};
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteNodeAttributes$ = function $$DvtBaseTreeJsonUtils$$$$$WriteNodeAttributes$$($options$$154$$, $nodeData$$25$$) {
  var $ret$$69$$;
  $ret$$69$$ = "" + this.$WriteAttr$("id", $nodeData$$25$$.id);
  $ret$$69$$ += this.$WriteAttr$("s", $nodeData$$25$$.value);
  $ret$$69$$ += this.$WriteAttr$("c", $nodeData$$25$$.color);
  $ret$$69$$ += this.$WriteAttr$("l", $nodeData$$25$$.label);
  $ret$$69$$ += this.$WriteAttr$("p", $nodeData$$25$$.pattern);
  $ret$$69$$ += this.$WriteAttr$("tt", $nodeData$$25$$.shortDesc ? $nodeData$$25$$.shortDesc : $nodeData$$25$$.tooltip);
  $ret$$69$$ += this.$WriteAttr$("ls", $nodeData$$25$$.labelStyle ? $nodeData$$25$$.labelStyle : $options$$154$$.nodeDefaults.labelStyle);
  var $drilling$$ = $nodeData$$25$$.drilling ? $nodeData$$25$$.drilling : $options$$154$$.nodeDefaults.drilling;
  "insert" == $drilling$$ ? $ret$$69$$ += this.$WriteAttr$("d", "i") : "replace" == $drilling$$ ? $ret$$69$$ += this.$WriteAttr$("d", "r") : "insertAndReplace" == $drilling$$ && ($ret$$69$$ += this.$WriteAttr$("d", "ir"));
  return $ret$$69$$ += this.$WriteAttr$("nsel", $nodeData$$25$$.selectable ? $nodeData$$25$$.selectable : "auto")
};
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteResourcesElement$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreeJsonUtils$$.prototype.$WriteStyleElement$ = function $$DvtBaseTreeJsonUtils$$$$$WriteStyleElement$$($options$$157$$) {
  var $ret$$71$$;
  $ret$$71$$ = "\x3cstyles " + this.$WriteAttr$("attrType", $options$$157$$.styleDefaults._attributeTypeTextStyle);
  return $ret$$71$$ += this.$WriteAttr$("attrValue", $options$$157$$.styleDefaults._attributeValueTextStyle)
};
D.$DvtTreeAutomation$$ = function $$DvtTreeAutomation$$$($treeView$$4$$) {
  this.$_treeView$ = $treeView$$4$$;
  this.$_root$ = $treeView$$4$$.$_root$
};
(0,D.$goog$exportSymbol$$)("DvtTreeAutomation", D.$DvtTreeAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTreeAutomation$$, D.$DvtAutomation$$, "DvtTreeAutomation");
D.$DvtTreeAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTreeAutomation$$$$$GetSubIdForDomElement$$($displayable$$33_indices$$2$$) {
  var $childIndices_logicalObj$$11$$ = this.$_treeView$.$getLogicalObject$($displayable$$33_indices$$2$$);
  if(!$childIndices_logicalObj$$11$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  if($childIndices_logicalObj$$11$$ instanceof D.$DvtBaseTreeNode$$) {
    $displayable$$33_indices$$2$$ = "";
    if(!this.$_root$.$_bArtificialRoot$) {
      if($childIndices_logicalObj$$11$$ == this.$_root$) {
        return"node[0]"
      }
      $displayable$$33_indices$$2$$ += "[0]"
    }
    $displayable$$33_indices$$2$$ = ($childIndices_logicalObj$$11$$ = this.$_getIndicesFromNode$($childIndices_logicalObj$$11$$, this.$_root$.$getChildNodes$())) ? $displayable$$33_indices$$2$$ + $childIndices_logicalObj$$11$$ : $displayable$$33_indices$$2$$;
    if(0 < $displayable$$33_indices$$2$$.length) {
      return"node" + $displayable$$33_indices$$2$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTreeAutomation$$.prototype.$_getIndicesFromNode$ = function $$DvtTreeAutomation$$$$$_getIndicesFromNode$$($node$$204$$, $children$$6$$) {
  if($children$$6$$ && 0 < $children$$6$$.length) {
    for(var $n$$28$$ = 0;$n$$28$$ < $children$$6$$.length;$n$$28$$++) {
      if($children$$6$$[$n$$28$$] == $node$$204$$) {
        return"[" + $n$$28$$ + "]"
      }
      var $nodeIndex$$4$$ = this.$_getIndicesFromNode$($node$$204$$, $children$$6$$[$n$$28$$].$getChildNodes$());
      if($nodeIndex$$4$$) {
        return"[" + $n$$28$$ + "]" + $nodeIndex$$4$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTreeAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTreeAutomation$$$$$getDomElementForSubId$$($foundNode_subId$$12$$) {
  return!this.$_root$.$_bArtificialRoot$ && ($foundNode_subId$$12$$ = $foundNode_subId$$12$$.substring(0, $foundNode_subId$$12$$.indexOf("[")) + $foundNode_subId$$12$$.substring($foundNode_subId$$12$$.indexOf("]") + 1), "node" == $foundNode_subId$$12$$) ? this.$_root$.$__getDisplayable$().$getElem$() : ($foundNode_subId$$12$$ = (0,D.$JSCompiler_StaticMethods__getNodeFromSubId$$)(this, this.$_root$, $foundNode_subId$$12$$)) ? $foundNode_subId$$12$$.$getDisplayable$().$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$DvtTreeAutomation$$.prototype.getDomElementForSubId = D.$DvtTreeAutomation$$.prototype.$getDomElementForSubId$;
D.$JSCompiler_StaticMethods__getNodeFromSubId$$ = function $$JSCompiler_StaticMethods__getNodeFromSubId$$$($JSCompiler_StaticMethods__getNodeFromSubId$self$$, $node$$205$$, $subId$$13$$) {
  var $index$$96_openParen$$4$$ = $subId$$13$$.indexOf("["), $closeParen$$4_nextCloseParen$$ = $subId$$13$$.indexOf("]");
  if(0 <= $index$$96_openParen$$4$$ && 0 <= $closeParen$$4_nextCloseParen$$) {
    return $index$$96_openParen$$4$$ = $subId$$13$$.substring($index$$96_openParen$$4$$ + 1, $closeParen$$4_nextCloseParen$$), $subId$$13$$ = $subId$$13$$.substring($closeParen$$4_nextCloseParen$$ + 1), $closeParen$$4_nextCloseParen$$ = $subId$$13$$.indexOf("]"), 0 <= $subId$$13$$.indexOf("[") && 0 <= $closeParen$$4_nextCloseParen$$ ? (0,D.$JSCompiler_StaticMethods__getNodeFromSubId$$)($JSCompiler_StaticMethods__getNodeFromSubId$self$$, $node$$205$$.$getChildNodes$()[$index$$96_openParen$$4$$], $subId$$13$$) : 
    $node$$205$$.$getChildNodes$()[$index$$96_openParen$$4$$]
  }
};
D.$JSCompiler_StaticMethods__getNodeFromPath$$ = function $$JSCompiler_StaticMethods__getNodeFromPath$$$($JSCompiler_StaticMethods__getNodeFromPath$self$$, $children$$7_node$$206$$, $path$$11$$) {
  var $index$$97$$ = $path$$11$$.shift();
  $children$$7_node$$206$$ = $children$$7_node$$206$$.$getChildNodes$();
  return 0 == $path$$11$$.length ? $children$$7_node$$206$$[$index$$97$$] : 0 < $path$$11$$.length ? (0,D.$JSCompiler_StaticMethods__getNodeFromPath$$)($JSCompiler_StaticMethods__getNodeFromPath$self$$, $children$$7_node$$206$$[$index$$97$$], $path$$11$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtTreeAutomation$$.prototype.$getNode$ = function $$DvtTreeAutomation$$$$$getNode$$($node$$207_subIdPath$$) {
  !this.$_root$.$_bArtificialRoot$ && 0 == $node$$207_subIdPath$$[0] && $node$$207_subIdPath$$.shift();
  $node$$207_subIdPath$$ = 0 == $node$$207_subIdPath$$.length ? this.$_root$ : (0,D.$JSCompiler_StaticMethods__getNodeFromPath$$)(this, this.$_root$, $node$$207_subIdPath$$);
  return{color:$node$$207_subIdPath$$.$getColor$(), label:$node$$207_subIdPath$$.$getLabel$(), selected:$node$$207_subIdPath$$.$isSelected$() == D.$JSCompiler_alias_VOID$$ ? D.$JSCompiler_alias_FALSE$$ : $node$$207_subIdPath$$.$isSelected$(), size:$node$$207_subIdPath$$.$getSize$(), tooltip:$node$$207_subIdPath$$.$getDatatip$()}
};
D.$DvtTreeAutomation$$.prototype.getNode = D.$DvtTreeAutomation$$.prototype.$getNode$;
});