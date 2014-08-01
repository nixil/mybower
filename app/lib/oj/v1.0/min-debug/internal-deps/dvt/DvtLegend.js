define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtLegend$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtLegend", D.$DvtLegend$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLegend$$, D.$DvtBaseComponent$$, "DvtLegend");
D.$DvtLegend$newInstance$$ = function $$DvtLegend$newInstance$$$($context$$479$$, $callback$$110$$, $callbackObj$$80$$) {
  var $legend$$35$$ = new D.$DvtLegend$$;
  $legend$$35$$.Init($context$$479$$, $callback$$110$$, $callbackObj$$80$$);
  return $legend$$35$$
};
D.$DvtLegend$$.newInstance = D.$DvtLegend$newInstance$$;
D.$DvtLegend$$.getDefaults = function $$DvtLegend$$$getDefaults$($skin$$9$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtLegendDefaults$$, $skin$$9$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtLegend$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$480$$, $callback$$111$$, $callbackObj$$81$$) {
  D.$DvtLegend$$.$superclass$.Init.call(this, $context$$480$$, $callback$$111$$, $callbackObj$$81$$);
  this.setId("legend1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$Defaults$ = new D.$DvtLegendDefaults$$;
  this.$_eventManager$ = new D.$DvtLegendEventManager$$(this);
  this.$_eventManager$.$addListeners$(this);
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventManager$, new D.$DvtLegendKeyboardHandler$$(this.$_eventManager$, this));
  this.$_peers$ = [];
  this.$_scrollableSections$ = [];
  this.$_bounds$ = D.$JSCompiler_alias_NULL$$;
  this.$_bundle$ = new D.$DvtUtilBundle$$
};
D.$JSCompiler_prototypeAlias$$.$__getBundle$ = (0,D.$JSCompiler_get$$)("$_bundle$");
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$233$$) {
  $options$$233$$ ? this.$Options$ = this.$Defaults$.$calcOptions$($options$$233$$) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$JSCompiler_prototypeAlias$$.$getPreferredSize$ = function $$JSCompiler_prototypeAlias$$$$getPreferredSize$$($dim$$77_options$$234$$, $maxWidth$$26$$, $maxHeight$$18$$) {
  this.$SetOptions$($dim$$77_options$$234$$);
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_TRUE$$;
  $dim$$77_options$$234$$ = D.$DvtLegendRenderer$$.$render$(this, new D.$DvtRectangle$$(0, 0, $maxWidth$$26$$, $maxHeight$$18$$));
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_FALSE$$;
  return $dim$$77_options$$234$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($options$$235$$, $width$$132$$, $height$$113$$) {
  this.$SetOptions$($options$$235$$);
  this.$__getOptions$().isLayout = D.$JSCompiler_alias_FALSE$$;
  this.$removeChildren$();
  D.$DvtLegendRenderer$$.$render$(this, new D.$DvtRectangle$$(0, 0, $width$$132$$, $height$$113$$))
};
D.$DvtLegend$$.prototype.render = D.$DvtLegend$$.prototype.$render$;
D.$DvtLegend$$.prototype.$highlight$ = function $$DvtLegend$$$$$highlight$$($categories$$9$$) {
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$9$$, this.$_peers$)
};
D.$DvtLegend$$.prototype.highlight = D.$DvtLegend$$.prototype.$highlight$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtLegend$$.prototype;
D.$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$501$$, $source$$25$$) {
  var $type$$138$$ = $event$$501$$.$getType$();
  if("categoryRollOver" == $type$$138$$ || "categoryRollOut" == $type$$138$$) {
    "dim" == this.$__getOptions$().hoverBehavior && (0,D.$DvtCategoryRolloverHandler$processEvent$$)($event$$501$$, this.$_peers$);
    for(var $i$$618$$ = 0;$i$$618$$ < this.$_scrollableSections$.length;$i$$618$$++) {
      for(var $JSCompiler_StaticMethods_processCategoryRollover$self$$inline_7050$$ = this.$_scrollableSections$[$i$$618$$], $category$$inline_7052$$ = $event$$501$$.$_category$, $category$$inline_7052$$ = $category$$inline_7052$$[0] ? $category$$inline_7052$$[0] : $category$$inline_7052$$, $i$$inline_7053$$ = 0;$i$$inline_7053$$ < $JSCompiler_StaticMethods_processCategoryRollover$self$$inline_7050$$.$_peers$.length;$i$$inline_7053$$++) {
        var $obj$$inline_7054$$ = $JSCompiler_StaticMethods_processCategoryRollover$self$$inline_7050$$.$_peers$[$i$$inline_7053$$];
        if($obj$$inline_7054$$ && $obj$$inline_7054$$.$getCategories$ && -1 < D.$DvtArrayUtils$$.$getIndex$($obj$$inline_7054$$.$getCategories$(), $category$$inline_7052$$)) {
          $JSCompiler_StaticMethods_processCategoryRollover$self$$inline_7050$$.scrollIntoView($i$$inline_7053$$);
          break
        }
      }
    }
  }
  (this == $source$$25$$ || "showPopup" == $type$$138$$ || "hidePopup" == $type$$138$$) && this.$__dispatchEvent$($event$$501$$)
};
D.$JSCompiler_prototypeAlias$$.$__getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventManager$");
D.$JSCompiler_prototypeAlias$$.$__registerObject$ = function $$JSCompiler_prototypeAlias$$$$__registerObject$$($peer$$22$$) {
  this.$_peers$.push($peer$$22$$)
};
D.$JSCompiler_prototypeAlias$$.$destroy$ = function $$JSCompiler_prototypeAlias$$$$destroy$$() {
  this.$_eventManager$ && (this.$_eventManager$.$removeListeners$(this), this.$_eventManager$.$destroy$(), this.$_eventManager$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtLegend$$.$superclass$.$destroy$.call(this)
};
D.$DvtLegend$$.prototype.destroy = D.$DvtLegend$$.prototype.$destroy$;
D.$DvtLegend$$.prototype.$__setBounds$ = (0,D.$JSCompiler_set$$)("$_bounds$");
D.$DvtLegend$$.prototype.$getAutomation$ = function $$DvtLegend$$$$$getAutomation$$() {
  return new D.$DvtLegendAutomation$$(this)
};
D.$DvtLegend$$.prototype.getAutomation = D.$DvtLegend$$.prototype.$getAutomation$;
D.$DvtLegendConstants$$ = {};
(0,D.$goog$exportSymbol$$)("DvtLegendConstants", D.$DvtLegendConstants$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLegendConstants$$, D.$DvtObj$$, "DvtLegendConstants");
D.$DvtLegendConstants$$.$BACKGROUND$ = "background";
D.$DvtLegendConstants$$.BACKGROUND = D.$DvtLegendConstants$$.$BACKGROUND$;
D.$DvtLegendConstants$$.$LEGEND_ITEM$ = "legendItem";
D.$DvtLegendConstants$$.LEGEND_ITEM = D.$DvtLegendConstants$$.$LEGEND_ITEM$;
D.$DvtLegendConstants$$.$TITLE$ = "title";
D.$DvtLegendConstants$$.TITLE = D.$DvtLegendConstants$$.$TITLE$;
D.$DvtLegendAutomation$$ = function $$DvtLegendAutomation$$$($dvtComponent$$6$$) {
  this.$_legend$ = $dvtComponent$$6$$;
  this.$_options$ = this.$_legend$.$__getOptions$()
};
(0,D.$goog$exportSymbol$$)("DvtLegendAutomation", D.$DvtLegendAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLegendAutomation$$, D.$DvtAutomation$$, "DvtLegendAutomation");
D.$DvtLegendAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtLegendAutomation$$$$$GetSubIdForDomElement$$($displayable$$37_indexList$$2_item$$31_logicalObj$$13$$) {
  if(($displayable$$37_indexList$$2_item$$31_logicalObj$$13$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_legend$.$__getEventManager$(), $displayable$$37_indexList$$2_item$$31_logicalObj$$13$$)) && $displayable$$37_indexList$$2_item$$31_logicalObj$$13$$ instanceof D.$DvtLegendObjPeer$$) {
    if($displayable$$37_indexList$$2_item$$31_logicalObj$$13$$ = $displayable$$37_indexList$$2_item$$31_logicalObj$$13$$.getData(), $displayable$$37_indexList$$2_item$$31_logicalObj$$13$$ = (0,D.$JSCompiler_StaticMethods__getIndicesFromItem$$)(this, $displayable$$37_indexList$$2_item$$31_logicalObj$$13$$, this.$_options$)) {
      return"section" + $displayable$$37_indexList$$2_item$$31_logicalObj$$13$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getIndicesFromItem$$ = function $$JSCompiler_StaticMethods__getIndicesFromItem$$$($JSCompiler_StaticMethods__getIndicesFromItem$self_i$$401$$, $item$$32$$, $legendOptions$$6$$) {
  if($legendOptions$$6$$.sections && 0 < $legendOptions$$6$$.sections.length) {
    for(var $s$$85$$ = 0;$s$$85$$ < $legendOptions$$6$$.sections.length;$s$$85$$++) {
      if($legendOptions$$6$$.sections[$s$$85$$] == $item$$32$$) {
        return"[" + $s$$85$$ + "]"
      }
      var $itemIndex$$5$$ = (0,D.$JSCompiler_StaticMethods__getIndicesFromItem$$)($JSCompiler_StaticMethods__getIndicesFromItem$self_i$$401$$, $item$$32$$, $legendOptions$$6$$.sections[$s$$85$$]);
      if($itemIndex$$5$$) {
        return"[" + $s$$85$$ + "]" + $itemIndex$$5$$
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
  if($legendOptions$$6$$.items && 0 < $legendOptions$$6$$.items.length) {
    for($JSCompiler_StaticMethods__getIndicesFromItem$self_i$$401$$ = 0;$JSCompiler_StaticMethods__getIndicesFromItem$self_i$$401$$ < $legendOptions$$6$$.items.length;$JSCompiler_StaticMethods__getIndicesFromItem$self_i$$401$$++) {
      if($legendOptions$$6$$.items[$JSCompiler_StaticMethods__getIndicesFromItem$self_i$$401$$] == $item$$32$$) {
        return":item[" + $JSCompiler_StaticMethods__getIndicesFromItem$self_i$$401$$ + "]"
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_getIndicesFromSeries$$ = function $$JSCompiler_StaticMethods_getIndicesFromSeries$$$($JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$402$$, $series$$24$$, $legendOptions$$7$$) {
  if($legendOptions$$7$$.sections && 0 < $legendOptions$$7$$.sections.length) {
    for(var $s$$86$$ = 0;$s$$86$$ < $legendOptions$$7$$.sections.length;$s$$86$$++) {
      var $itemIndex$$6$$ = (0,D.$JSCompiler_StaticMethods_getIndicesFromSeries$$)($JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$402$$, $series$$24$$, $legendOptions$$7$$.sections[$s$$86$$]);
      if($itemIndex$$6$$) {
        return"[" + $s$$86$$ + "]" + $itemIndex$$6$$
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
  if($legendOptions$$7$$.items && 0 < $legendOptions$$7$$.items.length) {
    for($JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$402$$ = 0;$JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$402$$ < $legendOptions$$7$$.items.length;$JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$402$$++) {
      if($legendOptions$$7$$.items[$JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$402$$].text == $series$$24$$.name) {
        return":item[" + $JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$402$$ + "]"
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_getLegendItem$$ = function $$JSCompiler_StaticMethods_getLegendItem$$$($JSCompiler_StaticMethods_getLegendItem$self$$, $options$$172$$, $subId$$14$$) {
  var $index$$98_openParen$$5$$ = $subId$$14$$.indexOf("["), $closeParen$$5_nextCloseParen$$1$$ = $subId$$14$$.indexOf("]");
  if(0 <= $index$$98_openParen$$5$$ && 0 <= $closeParen$$5_nextCloseParen$$1$$) {
    var $index$$98_openParen$$5$$ = $subId$$14$$.substring($index$$98_openParen$$5$$ + 1, $closeParen$$5_nextCloseParen$$1$$), $colonIndex$$ = $subId$$14$$.indexOf(":");
    $subId$$14$$ = $subId$$14$$.substring($closeParen$$5_nextCloseParen$$1$$ + 1);
    $closeParen$$5_nextCloseParen$$1$$ = $subId$$14$$.indexOf("]");
    return 0 <= $subId$$14$$.indexOf("[") && 0 <= $closeParen$$5_nextCloseParen$$1$$ ? (0,D.$JSCompiler_StaticMethods_getLegendItem$$)($JSCompiler_StaticMethods_getLegendItem$self$$, $options$$172$$.sections[$index$$98_openParen$$5$$], $subId$$14$$) : 0 == $colonIndex$$ ? $options$$172$$.items[$index$$98_openParen$$5$$] : $options$$172$$.sections[$index$$98_openParen$$5$$]
  }
};
D.$DvtLegendAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtLegendAutomation$$$$$getDomElementForSubId$$($legendItem$$4_subId$$15$$) {
  $legendItem$$4_subId$$15$$ = (0,D.$JSCompiler_StaticMethods_getLegendItem$$)(this, this.$_options$, $legendItem$$4_subId$$15$$);
  for(var $legendPeers$$ = this.$_legend$.$_peers$, $i$$403$$ = 0;$i$$403$$ < $legendPeers$$.length;$i$$403$$++) {
    var $item$$33$$ = $legendPeers$$[$i$$403$$].getData();
    if($legendItem$$4_subId$$15$$ == $item$$33$$) {
      return $legendPeers$$[$i$$403$$].$getDisplayables$()[0].$getElem$()
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtLegendAutomation$$.prototype.getDomElementForSubId = D.$DvtLegendAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtLegendAutomation$$.prototype.$getTitle$ = function $$DvtLegendAutomation$$$$$getTitle$$() {
  return this.$_options$.title
};
D.$DvtLegendAutomation$$.prototype.getTitle = D.$DvtLegendAutomation$$.prototype.$getTitle$;
D.$DvtLegendAutomation$$.prototype.getItem = function $$DvtLegendAutomation$$$$getItem$($subIdPath$$1$$) {
  for(var $item$$34$$, $index$$99$$ = $subIdPath$$1$$.shift(), $options$$173$$ = this.$_options$;$index$$99$$ != D.$JSCompiler_alias_VOID$$;) {
    0 < $subIdPath$$1$$.length ? $options$$173$$ = $options$$173$$.sections[$index$$99$$] : $item$$34$$ = $options$$173$$.items[$index$$99$$], $index$$99$$ = $subIdPath$$1$$.shift()
  }
  return{text:$item$$34$$.text ? $item$$34$$.text : D.$JSCompiler_alias_NULL$$}
};
D.$DvtLegendAutomation$$.prototype.getItem = D.$DvtLegendAutomation$$.prototype.getItem;
D.$DvtLegendAutomation$$.prototype.$getSection$ = function $$DvtLegendAutomation$$$$$getSection$$($subIdPath$$2$$) {
  for(var $section$$6$$, $index$$100$$ = $subIdPath$$2$$.shift(), $options$$174$$ = this.$_options$;$index$$100$$ != D.$JSCompiler_alias_VOID$$;) {
    0 < $subIdPath$$2$$.length ? $options$$174$$ = $options$$174$$.sections[$index$$100$$] : $section$$6$$ = $options$$174$$.sections[$index$$100$$], $index$$100$$ = $subIdPath$$2$$.shift()
  }
  return{title:$section$$6$$.title ? $section$$6$$.title : D.$JSCompiler_alias_NULL$$, items:$section$$6$$.items ? (0,D.$JSCompiler_StaticMethods__generateItemObjects$$)($section$$6$$.items) : D.$JSCompiler_alias_NULL$$, sections:$section$$6$$.sections ? (0,D.$JSCompiler_StaticMethods__generateSectionObjects$$)(this, $section$$6$$.sections) : D.$JSCompiler_alias_NULL$$}
};
D.$DvtLegendAutomation$$.prototype.getSection = D.$DvtLegendAutomation$$.prototype.$getSection$;
D.$JSCompiler_StaticMethods__generateItemObjects$$ = function $$JSCompiler_StaticMethods__generateItemObjects$$$($items$$20$$) {
  for(var $itemDataArray$$ = [], $i$$404$$ = 0;$i$$404$$ < $items$$20$$.length;$i$$404$$++) {
    $itemDataArray$$.push({text:$items$$20$$[$i$$404$$].text})
  }
  return $itemDataArray$$
};
D.$JSCompiler_StaticMethods__generateSectionObjects$$ = function $$JSCompiler_StaticMethods__generateSectionObjects$$$($JSCompiler_StaticMethods__generateSectionObjects$self$$, $sections$$3$$) {
  for(var $sectionDataArray$$ = [], $i$$405$$ = 0;$i$$405$$ < $sections$$3$$.length;$i$$405$$++) {
    $sectionDataArray$$.push({title:$sections$$3$$[$i$$405$$].title ? $sections$$3$$[$i$$405$$].title : D.$JSCompiler_alias_NULL$$, items:$sections$$3$$[$i$$405$$].items ? (0,D.$JSCompiler_StaticMethods__generateItemObjects$$)($sections$$3$$[$i$$405$$].items) : D.$JSCompiler_alias_NULL$$, sections:$sections$$3$$[$i$$405$$].sections ? (0,D.$JSCompiler_StaticMethods__generateSectionObjects$$)($JSCompiler_StaticMethods__generateSectionObjects$self$$, $sections$$3$$[$i$$405$$].sections) : D.$JSCompiler_alias_NULL$$})
  }
  return $sectionDataArray$$
};
D.$DvtLegendDefaults$$ = function $$DvtLegendDefaults$$$() {
  this.Init({skyros:D.$DvtLegendDefaults$VERSION_1$$, alta:D.$DvtLegendDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtLegendDefaults");
D.$DvtLegendDefaults$SKIN_ALTA$$ = {skin:"alta", textStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), titleStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #333333;"), colors:D.$DvtCSSStyle$COLORS_ALTA$$};
D.$DvtLegendDefaults$VERSION_1$$ = {skin:"skyros", orientation:"vertical", position:D.$JSCompiler_alias_NULL$$, backgroundColor:D.$JSCompiler_alias_NULL$$, borderColor:D.$JSCompiler_alias_NULL$$, textStyle:new D.$DvtCSSStyle$$("font-size: 11px; color: #333333;"), titleStyle:new D.$DvtCSSStyle$$("font-size: 12px; color: #003d5b;"), titleHalign:"start", hideAndShowBehavior:"none", hoverBehavior:"none", scrolling:"asNeeded", colors:D.$DvtCSSStyle$COLORS_SKYROS$$, markerShape:"square", lineWidth:3, layout:{gapRatio:1, 
outerGapWidth:3, outerGapHeight:3, titleGap:3, markerSize:10, markerGap:5, rowGap:0, columnGap:8, sectionGap:6}, isLayout:D.$JSCompiler_alias_FALSE$$};
D.$DvtLegendDefaults$getGapSize$$ = function $$DvtLegendDefaults$getGapSize$$$($options$$161$$, $defaultSize$$2$$) {
  return window.Math.ceil($defaultSize$$2$$ * $options$$161$$.layout.gapRatio)
};
D.$DvtLegendEventManager$$ = function $$DvtLegendEventManager$$$($legend$$26$$) {
  this.Init($legend$$26$$.$_context$, $legend$$26$$.$processEvent$, $legend$$26$$);
  this.$_legend$ = $legend$$26$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendEventManager$$, D.$DvtEventManager$$, "DvtLegendEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtLegendEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$FireUIEvent$ = function $$JSCompiler_prototypeAlias$$$$FireUIEvent$$($type$$120$$, $logicalObj$$12$$) {
  var $id$$inline_4009_params$$39$$ = D.$JSCompiler_alias_NULL$$;
  $logicalObj$$12$$ instanceof D.$DvtSimpleObjPeer$$ && $logicalObj$$12$$.$getParams$() != D.$JSCompiler_alias_NULL$$ ? $id$$inline_4009_params$$39$$ = $logicalObj$$12$$.$getParams$() : $logicalObj$$12$$ instanceof D.$DvtLegendObjPeer$$ && ($id$$inline_4009_params$$39$$ = $logicalObj$$12$$.getId(), $id$$inline_4009_params$$39$$ = {type:D.$DvtLegendConstants$$.$LEGEND_ITEM$, id:$id$$inline_4009_params$$39$$});
  this.$FireEvent$(new D.$DvtComponentUIEvent$$($type$$120$$, $id$$inline_4009_params$$39$$), this.$_legend$)
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$305$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnClick$.call(this, $event$$305$$);
  var $action$$9_obj$$127$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$305$$.target);
  if($action$$9_obj$$127$$) {
    var $hideShow$$ = (0,D.$JSCompiler_StaticMethods_processHideShowEvent$$)(this, $action$$9_obj$$127$$), $action$$9_obj$$127$$ = (0,D.$JSCompiler_StaticMethods__processActionEvent$$)(this, $action$$9_obj$$127$$);
    ($hideShow$$ || $action$$9_obj$$127$$) && $event$$305$$.stopPropagation()
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$306$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$306$$);
  var $obj$$128$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$306$$.target);
  $obj$$128$$ && (this.$_processRolloverEvent$($obj$$128$$, D.$JSCompiler_alias_TRUE$$) && $event$$306$$.stopPropagation(), (0,D.$JSCompiler_StaticMethods_UpdateActiveElement$$)(this, $obj$$128$$))
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$307$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$307$$);
  var $obj$$129$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$307$$.target);
  $obj$$129$$ && this.$_processRolloverEvent$($obj$$129$$, D.$JSCompiler_alias_FALSE$$) && $event$$307$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($evt$$53_touchEvent$$1$$) {
  var $action$$10_obj$$130$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $evt$$53_touchEvent$$1$$.target);
  if($action$$10_obj$$130$$) {
    $evt$$53_touchEvent$$1$$ = $evt$$53_touchEvent$$1$$.$touchEvent$;
    var $hideShow$$1$$ = (0,D.$JSCompiler_StaticMethods_processHideShowEvent$$)(this, $action$$10_obj$$130$$), $action$$10_obj$$130$$ = (0,D.$JSCompiler_StaticMethods__processActionEvent$$)(this, $action$$10_obj$$130$$);
    ($hideShow$$1$$ || $action$$10_obj$$130$$) && $evt$$53_touchEvent$$1$$ && $evt$$53_touchEvent$$1$$.preventDefault()
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverStartInternal$$($event$$308$$) {
  var $obj$$131$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$308$$.target);
  this.$_processRolloverEvent$($obj$$131$$, D.$JSCompiler_alias_TRUE$$) && $event$$308$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverEndInternal$$($event$$309$$) {
  var $obj$$132$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$309$$.target);
  this.$_processRolloverEvent$($obj$$132$$, D.$JSCompiler_alias_FALSE$$) && $event$$309$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOverInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOverInternal$$($event$$310$$) {
  var $obj$$133$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$310$$.target);
  this.$_processRolloverEvent$($obj$$133$$, D.$JSCompiler_alias_TRUE$$) && $event$$310$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverOutInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverOutInternal$$($event$$311$$) {
  var $obj$$134$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$311$$.target);
  this.$_processRolloverEvent$($obj$$134$$, D.$JSCompiler_alias_FALSE$$) && $event$$311$$.stopPropagation()
};
D.$JSCompiler_StaticMethods_processHideShowEvent$$ = function $$JSCompiler_StaticMethods_processHideShowEvent$$$($JSCompiler_StaticMethods_processHideShowEvent$self$$, $obj$$135$$) {
  if("none" == $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$.$__getOptions$().hideAndShowBehavior) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $categories$$7_id$$111$$ = $obj$$135$$.$getCategories$ ? $obj$$135$$.$getCategories$() : D.$JSCompiler_alias_NULL$$;
  if(!$categories$$7_id$$111$$ || 0 >= $categories$$7_id$$111$$.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $dataItem$$30$$ = $obj$$135$$.getData(), $visibility$$3$$ = $dataItem$$30$$.categoryVisibility, $displayables$$15$$ = $obj$$135$$.$getDisplayables$(), $i$$400$$ = 0;$i$$400$$ < $displayables$$15$$.length;$i$$400$$++) {
    var $displayable$$36$$ = $displayables$$15$$[$i$$400$$];
    $displayable$$36$$ instanceof D.$DvtMarker$$ ? $displayable$$36$$.$setHollow$($obj$$135$$.$getColor$()) : $displayable$$36$$ instanceof D.$DvtRect$$ && $obj$$135$$.$UpdateAriaLabel$($displayable$$36$$)
  }
  $categories$$7_id$$111$$ = $categories$$7_id$$111$$[0];
  "hidden" == $visibility$$3$$ ? ($dataItem$$30$$.categoryVisibility = "visible", $JSCompiler_StaticMethods_processHideShowEvent$self$$.$FireEvent$(new D.$DvtCategoryHideShowEvent$$(D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$, $categories$$7_id$$111$$), $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$)) : ($dataItem$$30$$.categoryVisibility = "hidden", $JSCompiler_StaticMethods_processHideShowEvent$self$$.$FireEvent$(new D.$DvtCategoryHideShowEvent$$(D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$, 
  $categories$$7_id$$111$$), $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$));
  return D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_StaticMethods__processActionEvent$$ = function $$JSCompiler_StaticMethods__processActionEvent$$$($JSCompiler_StaticMethods__processActionEvent$self$$, $obj$$136$$) {
  return $obj$$136$$ && $obj$$136$$.$getAction$ && $obj$$136$$.$_action$ ? ($JSCompiler_StaticMethods__processActionEvent$self$$.$FireEvent$(new D.$DvtActionEvent$$("action", $obj$$136$$.$_action$, $obj$$136$$.getId()), $JSCompiler_StaticMethods__processActionEvent$self$$.$_legend$), D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_FALSE$$
};
D.$DvtLegendEventManager$$.prototype.$_processRolloverEvent$ = function $$DvtLegendEventManager$$$$$_processRolloverEvent$$($obj$$137$$, $bOver$$11$$) {
  if("none" == this.$_legend$.$__getOptions$().hoverBehavior) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $categories$$8$$ = $obj$$137$$ && $obj$$137$$.$getCategories$ ? $obj$$137$$.$getCategories$() : D.$JSCompiler_alias_NULL$$;
  if(!$categories$$8$$ || 0 >= $categories$$8$$.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  this.$FireEvent$(new D.$DvtCategoryRolloverEvent$$($bOver$$11$$ ? "categoryRollOver" : "categoryRollOut", $categories$$8$$[0]), this.$_legend$);
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtLegendKeyboardHandler$$ = function $$DvtLegendKeyboardHandler$$$($manager$$10$$, $legend$$6$$) {
  this.Init($manager$$10$$, $legend$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtLegendKeyboardHandler");
D.$DvtLegendKeyboardHandler$$.prototype.Init = function $$DvtLegendKeyboardHandler$$$$Init$($manager$$11$$, $legend$$7$$) {
  D.$DvtLegendKeyboardHandler$$.$superclass$.Init.call(this, $manager$$11$$);
  this.$_legend$ = $legend$$7$$
};
D.$DvtLegendKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtLegendKeyboardHandler$$$$$processKeyDown$$($event$$303$$) {
  var $keyCode$$18_navigables$$5$$ = $event$$303$$.keyCode, $currentNavigable$$3$$ = this.$_eventManager$.$getFocus$();
  if(9 == $keyCode$$18_navigables$$5$$) {
    if($currentNavigable$$3$$) {
      return $event$$303$$.preventDefault(), $currentNavigable$$3$$
    }
    $keyCode$$18_navigables$$5$$ = this.$_legend$.$_peers$;
    if(0 < $keyCode$$18_navigables$$5$$.length) {
      return $event$$303$$.preventDefault(), this.$getDefaultNavigable$($keyCode$$18_navigables$$5$$)
    }
  }else {
    if(13 == $keyCode$$18_navigables$$5$$) {
      $currentNavigable$$3$$ && (0,D.$JSCompiler_StaticMethods_processHideShowEvent$$)(this.$_legend$.$__getEventManager$(), $currentNavigable$$3$$)
    }else {
      return D.$DvtLegendKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$303$$)
    }
  }
};
D.$DvtLegendObjPeer$$ = function $$DvtLegendObjPeer$$$($legend$$8$$, $displayables$$12$$, $id$$108$$, $tooltip$$17$$) {
  this.Init($legend$$8$$, $displayables$$12$$, $id$$108$$, $tooltip$$17$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendObjPeer$$, D.$DvtObj$$, "DvtLegendObjPeer");
D.$DvtLegendObjPeer$$.prototype.Init = function $$DvtLegendObjPeer$$$$Init$($i$$391_legend$$9$$, $displayables$$13$$, $item$$24$$, $tooltip$$18$$) {
  this.$_legend$ = $i$$391_legend$$9$$;
  this.$_displayables$ = $displayables$$13$$;
  this.$_item$ = $item$$24$$;
  this.$_id$ = $item$$24$$.id ? $item$$24$$.id : $item$$24$$.text;
  this.$_action$ = $item$$24$$.action;
  this.$_spb$ = $item$$24$$._spb;
  this.$_tooltip$ = $tooltip$$18$$;
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  if(this.$_action$) {
    for($i$$391_legend$$9$$ = 0;$i$$391_legend$$9$$ < this.$_displayables$.length;$i$$391_legend$$9$$++) {
      this.$_displayables$[$i$$391_legend$$9$$].setCursor("pointer")
    }
  }
};
D.$DvtLegendObjPeer$associate$$ = function $$DvtLegendObjPeer$associate$$$($displayables$$14$$, $legend$$10$$, $identObj$$1_item$$25$$, $i$$392_tooltip$$19$$) {
  if(!$displayables$$14$$ || !$identObj$$1_item$$25$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $identObj$$1_item$$25$$ = new D.$DvtLegendObjPeer$$($legend$$10$$, $displayables$$14$$, $identObj$$1_item$$25$$, $i$$392_tooltip$$19$$);
  $legend$$10$$.$__registerObject$($identObj$$1_item$$25$$);
  for($i$$392_tooltip$$19$$ = 0;$i$$392_tooltip$$19$$ < $displayables$$14$$.length;$i$$392_tooltip$$19$$++) {
    $legend$$10$$.$__getEventManager$().$associate$($displayables$$14$$[$i$$392_tooltip$$19$$], $identObj$$1_item$$25$$)
  }
  return $identObj$$1_item$$25$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtLegendObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_item$");
D.$JSCompiler_prototypeAlias$$.$getColor$ = function $$JSCompiler_prototypeAlias$$$$getColor$$() {
  return this.$_item$.color
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = (0,D.$JSCompiler_get$$)("$_displayables$");
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return[this.$_id$]
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_spb$");
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  if("none" != this.$_legend$.$__getOptions$().hideAndShowBehavior) {
    var $bundle$$12$$ = this.$_legend$.$__getBundle$(), $states$$5$$ = [(0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$12$$, "hidden" == this.getData().categoryVisibility ? "STATE_HIDDEN" : "STATE_VISIBLE")];
    return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.getData().text, $states$$5$$, $bundle$$12$$)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$UpdateAriaLabel$$($displayable$$35$$) {
  (0,D.$DvtAgent$deferAriaCreation$$)() || (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($displayable$$35$$, "label", this.$getAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$304$$) {
  return $event$$304$$.type == D.$DvtMouseEvent$CLICK$$ ? this : (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $event$$304$$, this.$_legend$.$_peers$)
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$14$$) {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getDimensions$($targetCoordinateSpace$$14$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$_displayables$[0] && this.$_displayables$[0].$setSolidStroke$((0,D.$DvtAgent$getFocusColor$$)())
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$_displayables$[0] && this.$_displayables$[0].$setStroke$(D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$DvtLegendRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendRenderer$$, D.$DvtObj$$, "DvtLegendRenderer");
D.$DvtLegendRenderer$$.$_DEFAULT_ITEM_WIDTH$ = 10;
D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH$ = 5;
D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH_WITH_MARKER$ = 2;
D.$DvtLegendRenderer$$.$_LINE_MARKER_SIZE$ = 6;
D.$DvtLegendRenderer$$.$render$ = function $$DvtLegendRenderer$$$$render$$($legend$$11$$, $availSpace$$75$$) {
  var $options$$162$$ = $legend$$11$$.$__getOptions$(), $gapWidth$$2$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$162$$, $options$$162$$.layout.outerGapWidth), $gapHeight$$2$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$162$$, $options$$162$$.layout.outerGapHeight), $legendSpace$$1_sectionsDim$$ = new D.$DvtRectangle$$($availSpace$$75$$.x + $gapWidth$$2$$, $availSpace$$75$$.y + $gapHeight$$2$$, $availSpace$$75$$.$w$ - 2 * $gapWidth$$2$$, $availSpace$$75$$.$h$ - 2 * $gapHeight$$2$$);
  $legend$$11$$.$__setBounds$($legendSpace$$1_sectionsDim$$.clone());
  if(0 >= $legendSpace$$1_sectionsDim$$.$w$) {
    return new D.$DvtDimension$$(0, 0)
  }
  var $background$$6$$;
  $options$$162$$.isLayout || ($background$$6$$ = D.$DvtLegendRenderer$$.$_createBackground$($legend$$11$$, $availSpace$$75$$));
  var $isHoriz$$8_totalDim$$ = "vertical" == $options$$162$$.orientation ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$, $titleDim$$ = D.$DvtLegendRenderer$$.$_renderTitle$($legend$$11$$, $options$$162$$.title, $legendSpace$$1_sectionsDim$$, D.$JSCompiler_alias_NULL$$);
  $legendSpace$$1_sectionsDim$$.y += $titleDim$$.$h$;
  $legendSpace$$1_sectionsDim$$.$h$ -= window.Math.floor($titleDim$$.$h$);
  var $container$$89_rowHeight$$1$$ = D.$DvtLegendRenderer$$.$_getRowHeight$($legend$$11$$), $bScrollable$$ = "off" !== $options$$162$$.scrolling, $legendSpace$$1_sectionsDim$$ = $isHoriz$$8_totalDim$$ ? D.$DvtLegendRenderer$$.$_renderHorizontalSections$($legend$$11$$, $legendSpace$$1_sectionsDim$$, $container$$89_rowHeight$$1$$) : D.$DvtLegendRenderer$$.$_renderVerticalSections$($legend$$11$$, $legendSpace$$1_sectionsDim$$, $container$$89_rowHeight$$1$$, $bScrollable$$), $isHoriz$$8_totalDim$$ = 
  (0,D.$JSCompiler_StaticMethods_getUnion$$)($titleDim$$, $legendSpace$$1_sectionsDim$$);
  if(0 >= $legend$$11$$.$_scrollableSections$.length) {
    for($container$$89_rowHeight$$1$$ = new D.$DvtContainer$$($legend$$11$$.$_context$);0 < $legend$$11$$.$getNumChildren$();) {
      $container$$89_rowHeight$$1$$.$addChild$($legend$$11$$.$getChildAt$(0))
    }
    $legend$$11$$.$addChild$($container$$89_rowHeight$$1$$);
    $container$$89_rowHeight$$1$$.$setTranslateX$(($availSpace$$75$$.$w$ - $isHoriz$$8_totalDim$$.$w$) / 2 - $isHoriz$$8_totalDim$$.x)
  }
  $background$$6$$ && $legend$$11$$.$addChildAt$($background$$6$$, 0);
  return $options$$162$$.isLayout ? new D.$DvtDimension$$(window.Math.max($titleDim$$.$w$, $legendSpace$$1_sectionsDim$$.$w$) + 2 * $gapWidth$$2$$, $isHoriz$$8_totalDim$$.$h$ + 2 * $gapHeight$$2$$) : new D.$DvtDimension$$($isHoriz$$8_totalDim$$.$w$ + 2 * $gapWidth$$2$$, $isHoriz$$8_totalDim$$.$h$ + 2 * $gapHeight$$2$$)
};
D.$DvtLegendRenderer$$.$_createBackground$ = function $$DvtLegendRenderer$$$$_createBackground$$($legend$$12$$, $availSpace$$76$$) {
  var $borderColor$$11_options$$163$$ = $legend$$12$$.$__getOptions$(), $backgroundColor$$2$$ = $borderColor$$11_options$$163$$.backgroundColor, $borderColor$$11_options$$163$$ = $borderColor$$11_options$$163$$.borderColor;
  if($backgroundColor$$2$$ || $borderColor$$11_options$$163$$) {
    var $rect$$17$$ = new D.$DvtRect$$($legend$$12$$.$_context$, $availSpace$$76$$.x, $availSpace$$76$$.y, $availSpace$$76$$.$w$, $availSpace$$76$$.$h$);
    $backgroundColor$$2$$ ? $rect$$17$$.$setSolidFill$($backgroundColor$$2$$) : (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$17$$);
    $borderColor$$11_options$$163$$ && ($rect$$17$$.$setSolidStroke$($borderColor$$11_options$$163$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($rect$$17$$));
    $legend$$12$$.$__getEventManager$().$associate$($rect$$17$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtLegendConstants$$.$BACKGROUND$, id:D.$JSCompiler_alias_VOID$$}));
    return $rect$$17$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtLegendRenderer$$.$_renderTitle$ = function $$DvtLegendRenderer$$$$_renderTitle$$($legend$$13$$, $title$$9_titleStr$$, $availSpace$$77$$, $section$$3$$) {
  var $options$$164$$ = $legend$$13$$.$__getOptions$();
  if(!$title$$9_titleStr$$) {
    return new D.$DvtRectangle$$($availSpace$$77$$.x, $availSpace$$77$$.y, 0, 0)
  }
  $title$$9_titleStr$$ = new D.$DvtOutputText$$($legend$$13$$.$_context$, $title$$9_titleStr$$, $availSpace$$77$$.x, $availSpace$$77$$.y);
  var $titleDims$$2_titleStyle$$ = $section$$3$$ && $section$$3$$.titleStyle ? new D.$DvtCSSStyle$$($section$$3$$.titleStyle) : $options$$164$$.titleStyle;
  $title$$9_titleStr$$.$setCSSStyle$($titleDims$$2_titleStyle$$);
  if(D.$DvtTextUtils$$.$fitText$($title$$9_titleStr$$, $availSpace$$77$$.$w$, $availSpace$$77$$.$h$, $legend$$13$$)) {
    $legend$$13$$.$__getEventManager$().$associate$($title$$9_titleStr$$, new D.$DvtSimpleObjPeer$$($title$$9_titleStr$$.$_untruncatedTextString$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtLegendConstants$$.$TITLE$, id:D.$JSCompiler_alias_VOID$$}));
    var $titleDims$$2_titleStyle$$ = $title$$9_titleStr$$.$measureDimensions$(), $gap$$16$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$164$$, $options$$164$$.layout.titleGap);
    $options$$164$$.isLayout ? $legend$$13$$.removeChild($title$$9_titleStr$$) : (0,D.$DvtLayoutUtils$align$$)($availSpace$$77$$, $section$$3$$ && $section$$3$$.titleHalign ? $section$$3$$.titleHalign : $options$$164$$.titleHalign, $title$$9_titleStr$$, $titleDims$$2_titleStyle$$.$w$);
    $titleDims$$2_titleStyle$$.$h$ += $gap$$16$$;
    return $titleDims$$2_titleStyle$$
  }
  return new D.$DvtRectangle$$($availSpace$$77$$.x, $availSpace$$77$$.y, 0, 0)
};
D.$DvtLegendRenderer$$.$_getLegendSections$ = function $$DvtLegendRenderer$$$$_getLegendSections$$($section$$4$$, $sections$$2$$) {
  var $nestedSections$$ = $section$$4$$.sections;
  $sections$$2$$.push($section$$4$$);
  if($nestedSections$$) {
    for(var $i$$393$$ = 0;$i$$393$$ < $nestedSections$$.length;$i$$393$$++) {
      D.$DvtLegendRenderer$$.$_getLegendSections$($nestedSections$$[$i$$393$$], $sections$$2$$)
    }
  }
};
D.$DvtLegendRenderer$$.$_renderVerticalSections$ = function $$DvtLegendRenderer$$$$_renderVerticalSections$$($legend$$14$$, $availSpace$$78_sectionSpace$$, $rowHeight$$2$$, $bScrollable$$1$$) {
  for(var $options$$165_sectionGap$$ = $legend$$14$$.$__getOptions$(), $sectionHeights$$ = D.$DvtLegendRenderer$$.$_calcSectionHeights$($legend$$14$$, $availSpace$$78_sectionSpace$$, $rowHeight$$2$$, $bScrollable$$1$$), $legendSections$$ = [], $i$$394$$ = 0;$i$$394$$ < $options$$165_sectionGap$$.sections.length;$i$$394$$++) {
    D.$DvtLegendRenderer$$.$_getLegendSections$($options$$165_sectionGap$$.sections[$i$$394$$], $legendSections$$)
  }
  var $numSections$$ = $legendSections$$.length, $options$$165_sectionGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$165_sectionGap$$, $options$$165_sectionGap$$.layout.sectionGap);
  $availSpace$$78_sectionSpace$$ = $availSpace$$78_sectionSpace$$.clone();
  for(var $totalDim$$1$$ = D.$JSCompiler_alias_NULL$$, $sectionDim$$, $i$$394$$ = 0;$i$$394$$ < $legendSections$$.length;$i$$394$$++) {
    $availSpace$$78_sectionSpace$$.$h$ = $sectionHeights$$[$i$$394$$], $sectionDim$$ = D.$DvtLegendRenderer$$.$_renderSection$($legend$$14$$, $legendSections$$[$i$$394$$], $i$$394$$, $availSpace$$78_sectionSpace$$, $rowHeight$$2$$, $bScrollable$$1$$), $i$$394$$ != $numSections$$ - 1 && $legendSections$$[$i$$394$$].items && ($availSpace$$78_sectionSpace$$.y += $sectionDim$$.$h$ + $options$$165_sectionGap$$), $totalDim$$1$$ = $totalDim$$1$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($totalDim$$1$$, 
    $sectionDim$$) : $sectionDim$$
  }
  return $totalDim$$1$$
};
D.$DvtLegendRenderer$$.$_renderHorizontalSections$ = function $$DvtLegendRenderer$$$$_renderHorizontalSections$$($legend$$15$$, $availSpace$$79$$, $rowHeight$$3$$) {
  for(var $options$$166_sectionSpace$$1$$ = $legend$$15$$.$__getOptions$(), $isRTL$$13$$ = (0,D.$DvtAgent$isRightToLeft$$)($legend$$15$$.$_context$), $legendWidth$$1$$ = 0, $legendSections$$1$$ = [], $i$$395_j$$75$$ = 0;$i$$395_j$$75$$ < $options$$166_sectionSpace$$1$$.sections.length;$i$$395_j$$75$$++) {
    D.$DvtLegendRenderer$$.$_getLegendSections$($options$$166_sectionSpace$$1$$.sections[$i$$395_j$$75$$], $legendSections$$1$$)
  }
  for(var $numSections$$1$$ = $legendSections$$1$$.length, $totalItems$$ = 0, $i$$395_j$$75$$ = 0;$i$$395_j$$75$$ < $legendSections$$1$$.length;$i$$395_j$$75$$++) {
    $legendSections$$1$$[$i$$395_j$$75$$].items && ($totalItems$$ += $legendSections$$1$$[$i$$395_j$$75$$].items.length)
  }
  var $sectionGap$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$166_sectionSpace$$1$$, $options$$166_sectionSpace$$1$$.layout.sectionGap), $maxWidth$$19$$ = $availSpace$$79$$.$w$ - $sectionGap$$1$$ * ($numSections$$1$$ - 1), $sectionDim$$1_sectionItems_sectionMaxWidth$$, $totalDim$$2$$;
  if($options$$166_sectionSpace$$1$$.sections) {
    for(var $nestedSectionCounter$$ = 0, $outerSectionTitleHeight$$ = 0, $i$$395_j$$75$$ = 0;$i$$395_j$$75$$ < $numSections$$1$$;$i$$395_j$$75$$++) {
      $options$$166_sectionSpace$$1$$ = $availSpace$$79$$.clone(), ($sectionDim$$1_sectionItems_sectionMaxWidth$$ = $legendSections$$1$$[$i$$395_j$$75$$].items) ? ($sectionDim$$1_sectionItems_sectionMaxWidth$$ = window.Math.round($sectionDim$$1_sectionItems_sectionMaxWidth$$.length / $totalItems$$ * $maxWidth$$19$$), $options$$166_sectionSpace$$1$$.$w$ = $sectionDim$$1_sectionItems_sectionMaxWidth$$, $options$$166_sectionSpace$$1$$.x = $isRTL$$13$$ ? $availSpace$$79$$.x + $availSpace$$79$$.$w$ - 
      $legendWidth$$1$$ - $options$$166_sectionSpace$$1$$.$w$ : $availSpace$$79$$.x + $legendWidth$$1$$, 0 < $nestedSectionCounter$$ && ($options$$166_sectionSpace$$1$$.y += $outerSectionTitleHeight$$, $options$$166_sectionSpace$$1$$.$h$ -= $outerSectionTitleHeight$$), $sectionDim$$1_sectionItems_sectionMaxWidth$$ = D.$DvtLegendRenderer$$.$_renderSection$($legend$$15$$, $legendSections$$1$$[$i$$395_j$$75$$], $i$$395_j$$75$$, $options$$166_sectionSpace$$1$$, $rowHeight$$3$$, D.$JSCompiler_alias_FALSE$$), 
      0 < $nestedSectionCounter$$ && ($options$$166_sectionSpace$$1$$.$h$ += $outerSectionTitleHeight$$, $nestedSectionCounter$$--), $legendWidth$$1$$ += $sectionDim$$1_sectionItems_sectionMaxWidth$$.$w$, $i$$395_j$$75$$ != $numSections$$1$$ - 1 && ($legendWidth$$1$$ += $sectionGap$$1$$)) : ($options$$166_sectionSpace$$1$$.$w$ = $availSpace$$79$$.$w$ - $legendWidth$$1$$, $options$$166_sectionSpace$$1$$.x = $isRTL$$13$$ ? $availSpace$$79$$.x : $availSpace$$79$$.x + $legendWidth$$1$$, $sectionDim$$1_sectionItems_sectionMaxWidth$$ = 
      D.$DvtLegendRenderer$$.$_renderSection$($legend$$15$$, $legendSections$$1$$[$i$$395_j$$75$$], $i$$395_j$$75$$, $options$$166_sectionSpace$$1$$, $rowHeight$$3$$, D.$JSCompiler_alias_FALSE$$), $outerSectionTitleHeight$$ = $sectionDim$$1_sectionItems_sectionMaxWidth$$.$h$, $nestedSectionCounter$$ = $legendSections$$1$$[$i$$395_j$$75$$].sections.length), $totalDim$$2$$ = $totalDim$$2$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($totalDim$$2$$, $sectionDim$$1_sectionItems_sectionMaxWidth$$) : 
      $sectionDim$$1_sectionItems_sectionMaxWidth$$
    }
  }
  return $totalDim$$2$$
};
D.$DvtLegendRenderer$$.$_renderSection$ = function $$DvtLegendRenderer$$$$_renderSection$$($legend$$16$$, $section$$5$$, $i$$396_sectionIndex$$, $availSectionSpace_totalWidth$$3$$, $rowHeight$$4$$, $bScrollable$$2_item$$26$$) {
  if($section$$5$$) {
    var $availSpace$$80$$ = $availSectionSpace_totalWidth$$3$$.clone(), $options$$167$$ = $legend$$16$$.$__getOptions$(), $context$$186$$ = $legend$$16$$.$_context$, $initAvailY$$ = $availSpace$$80$$.y, $markerSize$$2$$ = $options$$167$$.layout.markerSize, $markerGap$$2$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$167$$, $options$$167$$.layout.markerGap), $rowGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$167$$, $options$$167$$.layout.rowGap), $colGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$167$$, 
    $options$$167$$.layout.columnGap), $titleDim$$1$$ = D.$DvtLegendRenderer$$.$_renderTitle$($legend$$16$$, $section$$5$$.title, $availSpace$$80$$, $section$$5$$);
    $availSpace$$80$$.y += $titleDim$$1$$.$h$;
    if($section$$5$$.items) {
      $availSpace$$80$$.$h$ -= $titleDim$$1$$.$h$;
      var $initAvailY$$ = $initAvailY$$ + $titleDim$$1$$.$h$, $legendInfo_numItems$$2$$ = D.$DvtLegendRenderer$$.$_calcSectionSpace$($legend$$16$$, $availSpace$$80$$, $rowHeight$$4$$, $section$$5$$.items, $bScrollable$$2_item$$26$$), $numCols$$ = $legendInfo_numItems$$2$$.numCols, $numRows$$ = $legendInfo_numItems$$2$$.numRows, $colWidth_itemTextWidth$$ = $legendInfo_numItems$$2$$.width;
      $availSpace$$80$$.$h$ = window.Math.ceil(window.Math.min($availSpace$$80$$.$h$, $numRows$$ * ($rowHeight$$4$$ + $rowGap$$) - $rowGap$$) + $titleDim$$1$$.$h$);
      $availSpace$$80$$.$w$ = $colWidth_itemTextWidth$$ * $numCols$$ + $colGap$$ * ($numCols$$ - 1);
      if($options$$167$$.isLayout) {
        if(1 == $numRows$$) {
          for($i$$396_sectionIndex$$ = $availSectionSpace_totalWidth$$3$$ = 0;$i$$396_sectionIndex$$ < $section$$5$$.items.length;$i$$396_sectionIndex$$++) {
            $bScrollable$$2_item$$26$$ = $section$$5$$.items[$i$$396_sectionIndex$$], $colWidth_itemTextWidth$$ = window.Math.ceil(D.$DvtLegendRenderer$$.$_getTextWidth$($legend$$16$$, $bScrollable$$2_item$$26$$.text)), $availSectionSpace_totalWidth$$3$$ += $colWidth_itemTextWidth$$ + $markerSize$$2$$ + $markerGap$$2$$ + $colGap$$
          }
          $availSpace$$80$$.$w$ = window.Math.min($availSpace$$80$$.$w$, $availSectionSpace_totalWidth$$3$$ - $colGap$$)
        }
        return $availSpace$$80$$
      }
      if(0 == $numRows$$ || 0 == $numCols$$) {
        return $availSpace$$80$$
      }
      var $extraTextSpace_scrollableLegend$$ = D.$JSCompiler_alias_NULL$$, $container$$90_handle$$1$$ = $legend$$16$$, $fullLegendHeight_textSpace$$ = $numRows$$ * ($rowHeight$$4$$ + $rowGap$$) - $rowGap$$ + $titleDim$$1$$.$h$, $legendInfo_numItems$$2$$ = $section$$5$$.items.length;
      "vertical" === $options$$167$$.orientation && ($bScrollable$$2_item$$26$$ && $fullLegendHeight_textSpace$$ > $availSpace$$80$$.$h$) && ($container$$90_handle$$1$$ = D.$DvtLegendRenderer$$.$_createHandle$($legend$$16$$, $context$$186$$, $availSpace$$80$$, $i$$396_sectionIndex$$), $extraTextSpace_scrollableLegend$$ = D.$DvtLegendRenderer$$.$_createScrollableLegend$($legend$$16$$, $context$$186$$, $availSpace$$80$$, $container$$90_handle$$1$$, $fullLegendHeight_textSpace$$, $legendInfo_numItems$$2$$), 
      $legend$$16$$.$_scrollableSections$.push($extraTextSpace_scrollableLegend$$));
      var $fullLegendHeight_textSpace$$ = $colWidth_itemTextWidth$$ - $markerSize$$2$$ - $markerGap$$2$$, $isRTL$$14$$ = (0,D.$DvtAgent$isRightToLeft$$)($legend$$16$$.$_context$), $currRow$$ = 0, $currCol$$ = 1;
      if(1 == $numRows$$) {
        for($i$$396_sectionIndex$$ = $extraTextSpace_scrollableLegend$$ = 0;$i$$396_sectionIndex$$ < $legendInfo_numItems$$2$$;$i$$396_sectionIndex$$++) {
          $bScrollable$$2_item$$26$$ = $section$$5$$.items[$i$$396_sectionIndex$$], $colWidth_itemTextWidth$$ = window.Math.ceil(D.$DvtLegendRenderer$$.$_getTextWidth$($legend$$16$$, $bScrollable$$2_item$$26$$.text)), $colWidth_itemTextWidth$$ < $fullLegendHeight_textSpace$$ && ($extraTextSpace_scrollableLegend$$ += $fullLegendHeight_textSpace$$ - $colWidth_itemTextWidth$$)
        }
        for($i$$396_sectionIndex$$ = 0;$i$$396_sectionIndex$$ < $legendInfo_numItems$$2$$;$i$$396_sectionIndex$$++) {
          $bScrollable$$2_item$$26$$ = $section$$5$$.items[$i$$396_sectionIndex$$];
          var $itemRect_markerX_startX$$1$$ = $isRTL$$14$$ ? $availSpace$$80$$.x + $availSpace$$80$$.$w$ - $markerSize$$2$$ : $availSpace$$80$$.x, $itemWidth$$1_textX_tooltip$$20$$ = $isRTL$$14$$ ? $availSpace$$80$$.x + $availSpace$$80$$.$w$ - $markerSize$$2$$ - $markerGap$$2$$ : $availSpace$$80$$.x + $markerSize$$2$$ + $markerGap$$2$$, $marker$$20$$ = D.$DvtLegendRenderer$$.$_createLegendMarker$($legend$$16$$, $itemRect_markerX_startX$$1$$, $availSpace$$80$$.y, $rowHeight$$4$$, $markerSize$$2$$, 
          $bScrollable$$2_item$$26$$, $i$$396_sectionIndex$$), $label$$46$$ = $bScrollable$$2_item$$26$$.text, $colWidth_itemTextWidth$$ = window.Math.ceil(D.$DvtLegendRenderer$$.$_getTextWidth$($legend$$16$$, $bScrollable$$2_item$$26$$.text)), $peer$$20_text$$39$$ = D.$JSCompiler_alias_NULL$$;
          $label$$46$$ && ($colWidth_itemTextWidth$$ < $fullLegendHeight_textSpace$$ ? $peer$$20_text$$39$$ = D.$DvtLegendRenderer$$.$_createLegendText$($legend$$16$$, $context$$186$$, $availSpace$$80$$, $fullLegendHeight_textSpace$$, $label$$46$$, $options$$167$$.textStyle) : ($peer$$20_text$$39$$ = D.$DvtLegendRenderer$$.$_createLegendText$($legend$$16$$, $context$$186$$, $availSpace$$80$$, $fullLegendHeight_textSpace$$ + $extraTextSpace_scrollableLegend$$, $label$$46$$, $options$$167$$.textStyle), 
          $peer$$20_text$$39$$ != D.$JSCompiler_alias_NULL$$ && ($colWidth_itemTextWidth$$ = window.Math.ceil(D.$DvtLegendRenderer$$.$_getTextWidth$($legend$$16$$, $peer$$20_text$$39$$.$getTextString$())), $extraTextSpace_scrollableLegend$$ -= $fullLegendHeight_textSpace$$ - $colWidth_itemTextWidth$$)), $colWidth_itemTextWidth$$ = $peer$$20_text$$39$$ != D.$JSCompiler_alias_NULL$$ ? window.Math.ceil(D.$DvtLegendRenderer$$.$_getTextWidth$($legend$$16$$, $peer$$20_text$$39$$.$getTextString$())) : 0, 
          $peer$$20_text$$39$$ && ($peer$$20_text$$39$$.$setX$($itemWidth$$1_textX_tooltip$$20$$), $peer$$20_text$$39$$.$setY$($availSpace$$80$$.y + $rowHeight$$4$$ / 2), $isRTL$$14$$ && $peer$$20_text$$39$$.$alignRight$()));
          $legend$$16$$.$addChild$($marker$$20$$);
          $colWidth_itemTextWidth$$ = $colWidth_itemTextWidth$$ + $markerSize$$2$$ + $markerGap$$2$$;
          $itemRect_markerX_startX$$1$$ = window.Math.min($itemRect_markerX_startX$$1$$, $itemWidth$$1_textX_tooltip$$20$$);
          $itemWidth$$1_textX_tooltip$$20$$ = $currCol$$ == $numCols$$ ? $colWidth_itemTextWidth$$ : $colWidth_itemTextWidth$$ + $colGap$$;
          $itemRect_markerX_startX$$1$$ = new D.$DvtRect$$($context$$186$$, $itemRect_markerX_startX$$1$$, $availSpace$$80$$.y, $itemWidth$$1_textX_tooltip$$20$$, $rowHeight$$4$$);
          (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($itemRect_markerX_startX$$1$$);
          $container$$90_handle$$1$$.$addChild$($itemRect_markerX_startX$$1$$);
          $itemWidth$$1_textX_tooltip$$20$$ = $peer$$20_text$$39$$ != D.$JSCompiler_alias_NULL$$ ? $peer$$20_text$$39$$.$_untruncatedTextString$ : D.$JSCompiler_alias_NULL$$;
          $peer$$20_text$$39$$ = (0,D.$DvtLegendObjPeer$associate$$)([$itemRect_markerX_startX$$1$$, $marker$$20$$, $peer$$20_text$$39$$], $legend$$16$$, $bScrollable$$2_item$$26$$, $itemWidth$$1_textX_tooltip$$20$$);
          "hidden" == $bScrollable$$2_item$$26$$.categoryVisibility && $peer$$20_text$$39$$ && $marker$$20$$.$setHollow$($peer$$20_text$$39$$.$getColor$());
          "none" != $legend$$16$$.$__getOptions$().hideAndShowBehavior && ((0,D.$JSCompiler_StaticMethods_setAriaRole$$)($itemRect_markerX_startX$$1$$, "img"), $peer$$20_text$$39$$.$UpdateAriaLabel$($itemRect_markerX_startX$$1$$));
          $availSpace$$80$$.y += $rowHeight$$4$$ + $rowGap$$;
          $currRow$$++;
          $currRow$$ === $numRows$$ && $currCol$$ !== $numCols$$ && ($availSpace$$80$$.y = $initAvailY$$, $isRTL$$14$$ ? $availSpace$$80$$.$w$ -= $colWidth_itemTextWidth$$ + $colGap$$ : $availSpace$$80$$.x += $colWidth_itemTextWidth$$ + $colGap$$, $currRow$$ = 0, $currCol$$++)
        }
      }else {
        for($i$$396_sectionIndex$$ = 0;$i$$396_sectionIndex$$ < $legendInfo_numItems$$2$$;$i$$396_sectionIndex$$++) {
          $bScrollable$$2_item$$26$$ = $section$$5$$.items[$i$$396_sectionIndex$$];
          $itemRect_markerX_startX$$1$$ = $isRTL$$14$$ ? $availSpace$$80$$.x + $availSpace$$80$$.$w$ - $markerSize$$2$$ : $availSpace$$80$$.x;
          $itemWidth$$1_textX_tooltip$$20$$ = $isRTL$$14$$ ? $availSpace$$80$$.x + $availSpace$$80$$.$w$ - $markerSize$$2$$ - $markerGap$$2$$ : $availSpace$$80$$.x + $markerSize$$2$$ + $markerGap$$2$$;
          $marker$$20$$ = D.$DvtLegendRenderer$$.$_createLegendMarker$($legend$$16$$, $itemRect_markerX_startX$$1$$, $availSpace$$80$$.y, $rowHeight$$4$$, $markerSize$$2$$, $bScrollable$$2_item$$26$$, $i$$396_sectionIndex$$);
          $label$$46$$ = $bScrollable$$2_item$$26$$.text;
          $peer$$20_text$$39$$ = D.$JSCompiler_alias_NULL$$;
          if($label$$46$$ && ($peer$$20_text$$39$$ = D.$DvtLegendRenderer$$.$_createLegendText$($container$$90_handle$$1$$, $context$$186$$, $availSpace$$80$$, $fullLegendHeight_textSpace$$, $label$$46$$, $options$$167$$.textStyle))) {
            $peer$$20_text$$39$$.$setX$($itemWidth$$1_textX_tooltip$$20$$), $peer$$20_text$$39$$.$setY$($availSpace$$80$$.y + $rowHeight$$4$$ / 2), $isRTL$$14$$ && $peer$$20_text$$39$$.$alignRight$()
          }
          $container$$90_handle$$1$$.$addChild$($marker$$20$$);
          $itemRect_markerX_startX$$1$$ = window.Math.min($itemRect_markerX_startX$$1$$, $itemWidth$$1_textX_tooltip$$20$$);
          $itemWidth$$1_textX_tooltip$$20$$ = $currCol$$ == $numCols$$ ? $colWidth_itemTextWidth$$ : $colWidth_itemTextWidth$$ + $colGap$$;
          $itemRect_markerX_startX$$1$$ = new D.$DvtRect$$($context$$186$$, $itemRect_markerX_startX$$1$$, $availSpace$$80$$.y, $itemWidth$$1_textX_tooltip$$20$$, $rowHeight$$4$$);
          (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($itemRect_markerX_startX$$1$$);
          $container$$90_handle$$1$$.$addChild$($itemRect_markerX_startX$$1$$);
          $itemWidth$$1_textX_tooltip$$20$$ = $peer$$20_text$$39$$ != D.$JSCompiler_alias_NULL$$ ? $peer$$20_text$$39$$.$_untruncatedTextString$ : D.$JSCompiler_alias_NULL$$;
          $peer$$20_text$$39$$ = (0,D.$DvtLegendObjPeer$associate$$)([$itemRect_markerX_startX$$1$$, $marker$$20$$, $peer$$20_text$$39$$], $legend$$16$$, $bScrollable$$2_item$$26$$, $itemWidth$$1_textX_tooltip$$20$$);
          $extraTextSpace_scrollableLegend$$ && $peer$$20_text$$39$$ instanceof D.$DvtLegendObjPeer$$ && $extraTextSpace_scrollableLegend$$.$__registerObject$($peer$$20_text$$39$$);
          "hidden" == $bScrollable$$2_item$$26$$.categoryVisibility && $peer$$20_text$$39$$ && $marker$$20$$.$setHollow$($peer$$20_text$$39$$.$getColor$());
          "none" != $legend$$16$$.$__getOptions$().hideAndShowBehavior && ((0,D.$JSCompiler_StaticMethods_setAriaRole$$)($itemRect_markerX_startX$$1$$, "img"), $peer$$20_text$$39$$.$UpdateAriaLabel$($itemRect_markerX_startX$$1$$));
          $availSpace$$80$$.y += $rowHeight$$4$$ + $rowGap$$;
          $currRow$$++;
          $currRow$$ === $numRows$$ && $currCol$$ !== $numCols$$ && ($availSpace$$80$$.y = $initAvailY$$, $isRTL$$14$$ ? $availSpace$$80$$.$w$ -= $colWidth_itemTextWidth$$ + $colGap$$ : $availSpace$$80$$.x += $colWidth_itemTextWidth$$ + $colGap$$, $currRow$$ = 0, $currCol$$++)
        }
      }
      $availSpace$$80$$.y = $initAvailY$$ + $availSpace$$80$$.$h$ - $titleDim$$1$$.height;
      return new D.$DvtRectangle$$($availSectionSpace_totalWidth$$3$$.x, $initAvailY$$ - $titleDim$$1$$.height, $availSectionSpace_totalWidth$$3$$.$w$, $availSpace$$80$$.$h$)
    }
    $availSpace$$80$$.$h$ = $titleDim$$1$$.$h$
  }
};
D.$DvtLegendRenderer$$.$_calcSectionHeights$ = function $$DvtLegendRenderer$$$$_calcSectionHeights$$($legend$$17$$, $availSpace$$81$$, $rowHeight$$5$$, $bScrollable$$3$$) {
  var $options$$168$$ = $legend$$17$$.$__getOptions$(), $isLayout$$2$$ = $options$$168$$.isLayout;
  $options$$168$$.isLayout = D.$JSCompiler_alias_TRUE$$;
  for(var $legendHeight$$1$$ = 0, $legendWidth$$2$$ = 0, $legendX$$ = $availSpace$$81$$.x, $legendY$$ = $availSpace$$81$$.y, $legendSections$$2$$ = [], $i$$397$$ = 0;$i$$397$$ < $options$$168$$.sections.length;$i$$397$$++) {
    D.$DvtLegendRenderer$$.$_getLegendSections$($options$$168$$.sections[$i$$397$$], $legendSections$$2$$)
  }
  for(var $numSections$$2$$ = $legendSections$$2$$.length, $sectionGap$$2$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($options$$168$$, $options$$168$$.layout.sectionGap), $maxHeight$$13_spaceNeeded$$ = $availSpace$$81$$.$h$ - $sectionGap$$2$$ * ($numSections$$2$$ - 1), $maxWidth$$20$$ = $availSpace$$81$$.$w$, $arSectionSpace$$ = [], $equalSpace_sectionDim$$2_splitSpace$$, $i$$397$$ = 0;$i$$397$$ < $numSections$$2$$;$i$$397$$++) {
    $availSpace$$81$$.$h$ = $maxHeight$$13_spaceNeeded$$, $availSpace$$81$$.$w$ = $maxWidth$$20$$, $equalSpace_sectionDim$$2_splitSpace$$ = D.$DvtLegendRenderer$$.$_renderSection$($legend$$17$$, $legendSections$$2$$[$i$$397$$], $i$$397$$, $availSpace$$81$$, $rowHeight$$5$$, $bScrollable$$3$$), $arSectionSpace$$[$i$$397$$] = $equalSpace_sectionDim$$2_splitSpace$$.$h$
  }
  window.arSectionSpaceNeeded = [];
  window.extraSpace = window.numShortSections = 0;
  $equalSpace_sectionDim$$2_splitSpace$$ = $maxHeight$$13_spaceNeeded$$ / $numSections$$2$$;
  for($i$$397$$ = 0;$i$$397$$ < $numSections$$2$$;$i$$397$$++) {
    $maxHeight$$13_spaceNeeded$$ = $arSectionSpace$$[$i$$397$$] - $equalSpace_sectionDim$$2_splitSpace$$, 0 >= $maxHeight$$13_spaceNeeded$$ ? (window.arSectionSpaceNeeded[$i$$397$$] = 0, window.extraSpace -= $maxHeight$$13_spaceNeeded$$) : ($arSectionSpace$$[$i$$397$$] = $equalSpace_sectionDim$$2_splitSpace$$, window.arSectionSpaceNeeded[$i$$397$$] = $maxHeight$$13_spaceNeeded$$, window.numShortSections++)
  }
  for(;0 < window.extraSpace && 0 < window.numShortSections;) {
    $equalSpace_sectionDim$$2_splitSpace$$ = window.extraSpace / window.numShortSections;
    for($i$$397$$ = 0;$i$$397$$ < $numSections$$2$$;$i$$397$$++) {
      0 < window.arSectionSpaceNeeded[$i$$397$$] && ($maxHeight$$13_spaceNeeded$$ = window.arSectionSpaceNeeded[$i$$397$$] - $equalSpace_sectionDim$$2_splitSpace$$, 0 >= $maxHeight$$13_spaceNeeded$$ ? ($arSectionSpace$$[$i$$397$$] += window.arSectionSpaceNeeded[$i$$397$$], window.arSectionSpaceNeeded[$i$$397$$] = 0, window.extraSpace -= $equalSpace_sectionDim$$2_splitSpace$$ + $maxHeight$$13_spaceNeeded$$, window.numShortSections--) : ($arSectionSpace$$[$i$$397$$] += $equalSpace_sectionDim$$2_splitSpace$$, 
      window.extraSpace -= $equalSpace_sectionDim$$2_splitSpace$$, window.arSectionSpaceNeeded[$i$$397$$] = $maxHeight$$13_spaceNeeded$$))
    }
  }
  $availSpace$$81$$.x = $legendX$$;
  $availSpace$$81$$.y = $legendY$$;
  $availSpace$$81$$.$w$ = $maxWidth$$20$$;
  for($i$$397$$ = 0;$i$$397$$ < $numSections$$2$$;$i$$397$$++) {
    $availSpace$$81$$.$h$ = $arSectionSpace$$[$i$$397$$], D.$DvtLegendRenderer$$.$_renderSection$($legend$$17$$, $legendSections$$2$$[$i$$397$$], $i$$397$$, $availSpace$$81$$, $rowHeight$$5$$, $bScrollable$$3$$), $availSpace$$81$$.x = $legendX$$, $legendWidth$$2$$ = window.Math.max($availSpace$$81$$.$w$, $legendWidth$$2$$), $legendHeight$$1$$ += $availSpace$$81$$.$h$, $i$$397$$ != $numSections$$2$$ - 1 && ($availSpace$$81$$.y = $availSpace$$81$$.$h$ + $legendY$$ + $sectionGap$$2$$, $legendHeight$$1$$ += 
    $sectionGap$$2$$)
  }
  $availSpace$$81$$.$w$ = $legendWidth$$2$$;
  $availSpace$$81$$.$h$ = $legendHeight$$1$$;
  $availSpace$$81$$.x = $legendX$$;
  $availSpace$$81$$.y = $legendY$$;
  $options$$168$$.isLayout = $isLayout$$2$$;
  return $arSectionSpace$$
};
D.$DvtLegendRenderer$$.$_calcSectionSpace$ = function $$DvtLegendRenderer$$$$_calcSectionSpace$$($legend$$18_markerSize$$3$$, $availSpace$$82_colWidth$$1$$, $rowHeight$$6$$, $items$$19$$, $bScrollable$$4_numRows$$1$$) {
  for(var $numCols$$1_options$$169$$ = $legend$$18_markerSize$$3$$.$__getOptions$(), $fullColWidth_textWidth$$ = 0, $i$$398_rowGap$$1$$ = 0;$i$$398_rowGap$$1$$ < $items$$19$$.length;$i$$398_rowGap$$1$$++) {
    var $colGap$$1_tempWidth$$ = D.$DvtLegendRenderer$$.$_getTextWidth$($legend$$18_markerSize$$3$$, $items$$19$$[$i$$398_rowGap$$1$$].text);
    $colGap$$1_tempWidth$$ > $fullColWidth_textWidth$$ && ($fullColWidth_textWidth$$ = $colGap$$1_tempWidth$$)
  }
  $legend$$18_markerSize$$3$$ = $numCols$$1_options$$169$$.layout.markerSize;
  var $markerGap$$3$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($numCols$$1_options$$169$$, $numCols$$1_options$$169$$.layout.markerGap), $i$$398_rowGap$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($numCols$$1_options$$169$$, $numCols$$1_options$$169$$.layout.rowGap), $colGap$$1_tempWidth$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($numCols$$1_options$$169$$, $numCols$$1_options$$169$$.layout.columnGap), $fullColWidth_textWidth$$ = $numCols$$1_options$$169$$.isLayout ? window.Math.ceil($legend$$18_markerSize$$3$$ + 
  $markerGap$$3$$ + $fullColWidth_textWidth$$) : $availSpace$$82_colWidth$$1$$.$w$;
  "vertical" == $numCols$$1_options$$169$$.orientation ? $bScrollable$$4_numRows$$1$$ ? ($numCols$$1_options$$169$$ = 1, $bScrollable$$4_numRows$$1$$ = $items$$19$$.length) : ($bScrollable$$4_numRows$$1$$ = window.Math.min(window.Math.floor(($availSpace$$82_colWidth$$1$$.$h$ + $i$$398_rowGap$$1$$) / ($rowHeight$$6$$ + $i$$398_rowGap$$1$$)), $items$$19$$.length), $numCols$$1_options$$169$$ = window.Math.ceil($items$$19$$.length / $bScrollable$$4_numRows$$1$$)) : ($numCols$$1_options$$169$$ = window.Math.min(window.Math.floor($availSpace$$82_colWidth$$1$$.$w$ / 
  $fullColWidth_textWidth$$), $items$$19$$.length), $bScrollable$$4_numRows$$1$$ = window.Math.ceil((($fullColWidth_textWidth$$ + $colGap$$1_tempWidth$$) * $items$$19$$.length - $colGap$$1_tempWidth$$) / $availSpace$$82_colWidth$$1$$.$w$), $bScrollable$$4_numRows$$1$$ * ($rowHeight$$6$$ + $i$$398_rowGap$$1$$) - $i$$398_rowGap$$1$$ > $availSpace$$82_colWidth$$1$$.$h$ && ($bScrollable$$4_numRows$$1$$ = window.Math.floor(window.Math.ceil($availSpace$$82_colWidth$$1$$.$h$ + $i$$398_rowGap$$1$$) / ($rowHeight$$6$$ + 
  $i$$398_rowGap$$1$$)), $numCols$$1_options$$169$$ = window.Math.ceil($items$$19$$.length / $bScrollable$$4_numRows$$1$$)));
  $availSpace$$82_colWidth$$1$$ = window.Math.min($fullColWidth_textWidth$$, ($availSpace$$82_colWidth$$1$$.$w$ - $colGap$$1_tempWidth$$ * ($numCols$$1_options$$169$$ - 1)) / $numCols$$1_options$$169$$);
  return $availSpace$$82_colWidth$$1$$ < $legend$$18_markerSize$$3$$ ? {width:0, height:0, numCols:0, numRows:0} : {width:$availSpace$$82_colWidth$$1$$, numCols:$numCols$$1_options$$169$$, numRows:$bScrollable$$4_numRows$$1$$}
};
D.$DvtLegendRenderer$$.$_getRowHeight$ = function $$DvtLegendRenderer$$$$_getRowHeight$$($dims$$35_legend$$19_text$$40$$) {
  var $options$$170$$ = $dims$$35_legend$$19_text$$40$$.$__getOptions$();
  $dims$$35_legend$$19_text$$40$$ = new D.$DvtOutputText$$($dims$$35_legend$$19_text$$40$$.$_context$, "Test");
  $dims$$35_legend$$19_text$$40$$.$setCSSStyle$($options$$170$$.textStyle);
  $dims$$35_legend$$19_text$$40$$.$alignMiddle$();
  $dims$$35_legend$$19_text$$40$$ = D.$DvtTextUtils$$.$guessTextDimensions$($dims$$35_legend$$19_text$$40$$);
  return window.Math.ceil(window.Math.max($dims$$35_legend$$19_text$$40$$.$h$, $options$$170$$.layout.markerSize))
};
D.$DvtLegendRenderer$$.$_getTextWidth$ = function $$DvtLegendRenderer$$$$_getTextWidth$$($legend$$20$$, $label$$47$$) {
  var $options$$171$$ = $legend$$20$$.$__getOptions$(), $text$$41$$ = new D.$DvtOutputText$$($legend$$20$$.$_context$, $label$$47$$);
  $text$$41$$.$setCSSStyle$($options$$171$$.textStyle);
  return $text$$41$$.$measureDimensions$().$w$
};
D.$DvtLegendRenderer$$.$_createLegendText$ = function $$DvtLegendRenderer$$$$_createLegendText$$($legend$$21$$, $context$$187_text$$42$$, $availSpace$$83$$, $textSpace$$1$$, $label$$48$$, $style$$30$$) {
  $context$$187_text$$42$$ = new D.$DvtOutputText$$($context$$187_text$$42$$, $label$$48$$);
  $context$$187_text$$42$$.$alignMiddle$();
  $context$$187_text$$42$$.$setCSSStyle$($style$$30$$);
  return $context$$187_text$$42$$ = D.$DvtTextUtils$$.$fitText$($context$$187_text$$42$$, $textSpace$$1$$, $availSpace$$83$$.$h$, $legend$$21$$) ? $context$$187_text$$42$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtLegendRenderer$$.$_createLegendMarker$ = function $$DvtLegendRenderer$$$$_createLegendMarker$$($legend$$22$$, $x$$126$$, $y$$105$$, $rowHeight$$7$$, $marker$$21_markerSize$$4$$, $item$$28$$, $i$$399$$) {
  var $legendOptions$$4$$ = $legend$$22$$.$__getOptions$();
  $item$$28$$.markerShape || ($item$$28$$.markerShape = $legendOptions$$4$$.markerShape);
  if(!$item$$28$$.color) {
    var $colorRamp$$ = $legendOptions$$4$$.colors;
    $item$$28$$.color = $colorRamp$$[$i$$399$$ % $colorRamp$$.length]
  }
  $item$$28$$.lineWidth || ($item$$28$$.lineWidth = $legendOptions$$4$$.lineWidth);
  "line" == $item$$28$$.type ? ($item$$28$$.lineWidth = window.Math.min($item$$28$$.lineWidth, D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH$), $marker$$21_markerSize$$4$$ = D.$DvtLegendRenderer$$.$_createLine$($legend$$22$$.$_context$, $x$$126$$, $y$$105$$, $rowHeight$$7$$, $item$$28$$)) : "lineWithMarker" == $item$$28$$.type ? ($item$$28$$.lineWidth = window.Math.min($item$$28$$.lineWidth, D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH_WITH_MARKER$), $marker$$21_markerSize$$4$$ = D.$DvtLegendRenderer$$.$_createLine$($legend$$22$$.$_context$, 
  $x$$126$$, $y$$105$$, $rowHeight$$7$$, $item$$28$$), "hidden" != $item$$28$$.categoryVisibility && $marker$$21_markerSize$$4$$.$addChild$(D.$DvtLegendRenderer$$.$_createMarker$($legend$$22$$, $x$$126$$, $y$$105$$, $rowHeight$$7$$, D.$DvtLegendRenderer$$.$_LINE_MARKER_SIZE$, $item$$28$$))) : $marker$$21_markerSize$$4$$ = D.$DvtLegendRenderer$$.$_createMarker$($legend$$22$$, $x$$126$$, $y$$105$$, $rowHeight$$7$$, $marker$$21_markerSize$$4$$, $item$$28$$);
  return $marker$$21_markerSize$$4$$
};
D.$DvtLegendRenderer$$.$_createMarker$ = function $$DvtLegendRenderer$$$$_createMarker$$($itemShape_legend$$23$$, $markerX$$1_x$$127$$, $markerY_y$$106$$, $rowHeight$$8$$, $itemSize_legendMarker$$, $item$$29$$) {
  var $context$$188$$ = $itemShape_legend$$23$$.$_context$, $legendOptions$$5$$ = $itemShape_legend$$23$$.$__getOptions$();
  $itemShape_legend$$23$$ = $item$$29$$.markerShape;
  var $itemColor$$ = $item$$29$$.markerColor ? $item$$29$$.markerColor : $item$$29$$.color, $itemPattern$$ = $item$$29$$.pattern;
  $markerY_y$$106$$ += ($rowHeight$$8$$ - $itemSize_legendMarker$$) / 2;
  $markerX$$1_x$$127$$ = "lineWithMarker" == $item$$29$$.type ? $markerX$$1_x$$127$$ + (D.$DvtLegendRenderer$$.$_DEFAULT_ITEM_WIDTH$ - $itemSize_legendMarker$$) / 2 : $markerX$$1_x$$127$$;
  $itemPattern$$ ? ($itemSize_legendMarker$$ = new D.$DvtMarker$$($context$$188$$, $itemShape_legend$$23$$, $legendOptions$$5$$.skin, 0, 0, $itemSize_legendMarker$$, $itemSize_legendMarker$$), $itemSize_legendMarker$$.$setFill$(new D.$DvtPatternFill$$($itemPattern$$, $itemColor$$, "#FFFFFF")), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($itemSize_legendMarker$$, $markerX$$1_x$$127$$, $markerY_y$$106$$)) : ($itemSize_legendMarker$$ = new D.$DvtMarker$$($context$$188$$, $itemShape_legend$$23$$, 
  $legendOptions$$5$$.skin, $markerX$$1_x$$127$$, $markerY_y$$106$$, $itemSize_legendMarker$$, $itemSize_legendMarker$$), $itemSize_legendMarker$$.$setSolidFill$($itemColor$$));
  $item$$29$$.borderColor && $itemSize_legendMarker$$.$setSolidStroke$($item$$29$$.borderColor, D.$JSCompiler_alias_NULL$$, $item$$29$$._borderWidth ? $item$$29$$._borderWidth : 1);
  "square" == $itemShape_legend$$23$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($itemSize_legendMarker$$);
  return $itemSize_legendMarker$$
};
D.$DvtLegendRenderer$$.$_createLine$ = function $$DvtLegendRenderer$$$$_createLine$$($context$$189_line$$18$$, $stroke$$45_x$$128$$, $textY_y$$107$$, $rowHeight$$9$$, $item$$30_style$$31$$) {
  $textY_y$$107$$ += $rowHeight$$9$$ / 2;
  $context$$189_line$$18$$ = new D.$DvtLine$$($context$$189_line$$18$$, $stroke$$45_x$$128$$, $textY_y$$107$$, $stroke$$45_x$$128$$ + D.$DvtLegendRenderer$$.$_DEFAULT_ITEM_WIDTH$, $textY_y$$107$$);
  $stroke$$45_x$$128$$ = new D.$DvtSolidStroke$$($item$$30_style$$31$$.color, 1, $item$$30_style$$31$$.lineWidth);
  $item$$30_style$$31$$ = $item$$30_style$$31$$.lineStyle;
  "dashed" == $item$$30_style$$31$$ ? $stroke$$45_x$$128$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($item$$30_style$$31$$), "4,2,4") : "dotted" == $item$$30_style$$31$$ && $stroke$$45_x$$128$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($item$$30_style$$31$$), "2");
  $context$$189_line$$18$$.$setStroke$($stroke$$45_x$$128$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$189_line$$18$$);
  return $context$$189_line$$18$$
};
D.$DvtLegendRenderer$$.$_createHandle$ = function $$DvtLegendRenderer$$$$_createHandle$$($legend$$24$$, $context$$190_handle$$2$$, $availSpace$$84_clipRect$$, $clipId$$1_id$$109$$) {
  var $boundRect$$ = [$availSpace$$84_clipRect$$.x, $availSpace$$84_clipRect$$.y, $availSpace$$84_clipRect$$.x + $availSpace$$84_clipRect$$.$w$, $availSpace$$84_clipRect$$.y + $availSpace$$84_clipRect$$.$h$];
  $availSpace$$84_clipRect$$ = $availSpace$$84_clipRect$$.clone();
  $clipId$$1_id$$109$$ = $legend$$24$$.getId() + "_" + $clipId$$1_id$$109$$;
  $context$$190_handle$$2$$ = new D.$DvtHandle$$($context$$190_handle$$2$$, "legendHandler", $boundRect$$, $availSpace$$84_clipRect$$, $clipId$$1_id$$109$$);
  $legend$$24$$.$addChild$($context$$190_handle$$2$$);
  return $context$$190_handle$$2$$
};
D.$DvtLegendRenderer$$.$_createScrollableLegend$ = function $$DvtLegendRenderer$$$$_createScrollableLegend$$($legend$$25$$, $context$$191_scrollableLegend$$1$$, $availSpace$$85$$, $handle$$3$$, $legendHeight$$2$$, $numItems$$3$$) {
  $context$$191_scrollableLegend$$1$$ = new D.$DvtScrollableLegend$$($context$$191_scrollableLegend$$1$$, $availSpace$$85$$.x, $availSpace$$85$$.y, $availSpace$$85$$.$w$, $availSpace$$85$$.$h$, $legendHeight$$2$$, $handle$$3$$, $numItems$$3$$);
  $context$$191_scrollableLegend$$1$$.$setTouchManager$($legend$$25$$.$__getEventManager$().$getTouchManager$());
  $legend$$25$$.$addChild$($context$$191_scrollableLegend$$1$$);
  $handle$$3$$.$render$();
  return $context$$191_scrollableLegend$$1$$
};
});