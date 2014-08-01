define(['./DvtToolkit', './DvtAxis'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtGauge", D.$DvtGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtGauge$$, D.$DvtBaseComponent$$, "DvtGauge");
D.$DvtGauge$$.prototype.Init = function $$DvtGauge$$$$Init$($context$$704$$, $callback$$148$$, $callbackObj$$118$$, $bStaticRendering$$2$$) {
  D.$DvtGauge$$.$superclass$.Init.call(this, $context$$704$$, $callback$$148$$, $callbackObj$$118$$);
  this.$Bundle$ = new D.$DvtGaugeBundle$$;
  $bStaticRendering$$2$$ || (this.$_eventManager$ = this.$CreateEventManager$(), this.$_eventManager$.$addListeners$(this), (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventManager$, this.$CreateKeyboardHandler$(this.$_eventManager$)), this.setId("gauge1000" + window.Math.floor(1E9 * window.Math.random())), this.$_editingOverlay$ = new D.$DvtRect$$($context$$704$$, 0, 0), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)(this.$_editingOverlay$), 
  this.$addChild$(this.$_editingOverlay$));
  this.$_bEditing$ = D.$JSCompiler_alias_FALSE$$;
  this.$_oldValue$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtGauge$$.prototype.$SetOptions$ = function $$DvtGauge$$$$$SetOptions$$($options$$251$$) {
  this.$Options$ = $options$$251$$;
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")
};
D.$DvtGauge$$.prototype.$render$ = function $$DvtGauge$$$$$render$$($bBlackBoxUpdate$$inline_8195_options$$252$$, $container$$168_width$$156$$, $height$$131_oldShapes_tooltip$$55$$) {
  $bBlackBoxUpdate$$inline_8195_options$$252$$ ? this.$SetOptions$($bBlackBoxUpdate$$inline_8195_options$$252$$) : this.$Options$ || this.$SetOptions$(D.$JSCompiler_alias_NULL$$);
  this.$Options$.thresholds && (this.$Options$.thresholds = this.$Options$.thresholds.sort(D.$DvtGauge$_thresholdComparator$$));
  !(0,window.isNaN)($container$$168_width$$156$$) && !(0,window.isNaN)($height$$131_oldShapes_tooltip$$55$$) && (this.$Width$ = $container$$168_width$$156$$, this.$Height$ = $height$$131_oldShapes_tooltip$$55$$);
  $height$$131_oldShapes_tooltip$$55$$ = this.$__shapes$;
  this.$__shapes$ = [];
  $container$$168_width$$156$$ = new D.$DvtContainer$$(this.$_context$);
  this.$addChildAt$($container$$168_width$$156$$, 0);
  this.$Render$($container$$168_width$$156$$, this.$Width$, this.$Height$);
  var $bData$$inline_8191_newObjs$$inline_10769$$ = $bBlackBoxUpdate$$inline_8195_options$$252$$ != D.$JSCompiler_alias_NULL$$, $bounds$$inline_8199_newObj$$inline_10773_width$$inline_8193$$ = this.$Width$, $context$$inline_8200_endState$$inline_10775_height$$inline_8194$$ = this.$Height$;
  this.$_animation$ && this.$_animation$.stop();
  $bBlackBoxUpdate$$inline_8195_options$$252$$ = D.$JSCompiler_alias_FALSE$$;
  var $animatedObjs$$inline_10771_animationOnDataChange$$inline_8196$$ = this.$_bEditing$ ? "none" : this.$__getOptions$().animationOnDataChange, $animationOnDisplay$$inline_8197_i$$inline_10772$$ = this.$_bEditing$ ? "none" : this.$__getOptions$().animationOnDisplay, $animationDuration$$inline_8198$$ = this.$__getOptions$().animationDuration / 1E3;
  if($animationOnDisplay$$inline_8197_i$$inline_10772$$ || $animatedObjs$$inline_10771_animationOnDataChange$$inline_8196$$) {
    $bounds$$inline_8199_newObj$$inline_10773_width$$inline_8193$$ = new D.$DvtRectangle$$(0, 0, $bounds$$inline_8199_newObj$$inline_10773_width$$inline_8193$$, $context$$inline_8200_endState$$inline_10775_height$$inline_8194$$);
    $context$$inline_8200_endState$$inline_10775_height$$inline_8194$$ = this.$_context$;
    if(!this.$_container$ && "none" !== $animationOnDisplay$$inline_8197_i$$inline_10772$$ && this.$__shapes$[0] != D.$JSCompiler_alias_NULL$$) {
      this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$($context$$inline_8200_endState$$inline_10775_height$$inline_8194$$, $animationOnDisplay$$inline_8197_i$$inline_10772$$, $container$$168_width$$156$$, $bounds$$inline_8199_newObj$$inline_10773_width$$inline_8193$$, $animationDuration$$inline_8198$$), this.$_animation$ || (this.$_animation$ = this.$CreateAnimationOnDisplay$(this.$__shapes$, $animationOnDisplay$$inline_8197_i$$inline_10772$$, $animationDuration$$inline_8198$$))
    }else {
      if(this.$_container$ && "none" != $animatedObjs$$inline_10771_animationOnDataChange$$inline_8196$$ && $bData$$inline_8191_newObjs$$inline_10769$$ && this.$__shapes$[0] != D.$JSCompiler_alias_NULL$$) {
        if(this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$($context$$inline_8200_endState$$inline_10775_height$$inline_8194$$, $animatedObjs$$inline_10771_animationOnDataChange$$inline_8196$$, this.$_container$, $container$$168_width$$156$$, $bounds$$inline_8199_newObj$$inline_10773_width$$inline_8193$$, $animationDuration$$inline_8198$$)) {
          $bBlackBoxUpdate$$inline_8195_options$$252$$ = D.$JSCompiler_alias_TRUE$$
        }else {
          $bData$$inline_8191_newObjs$$inline_10769$$ = this.$__shapes$;
          $animatedObjs$$inline_10771_animationOnDataChange$$inline_8196$$ = [];
          for($animationOnDisplay$$inline_8197_i$$inline_10772$$ = 0;$animationOnDisplay$$inline_8197_i$$inline_10772$$ < $height$$131_oldShapes_tooltip$$55$$.length;$animationOnDisplay$$inline_8197_i$$inline_10772$$++) {
            var $bounds$$inline_8199_newObj$$inline_10773_width$$inline_8193$$ = $bData$$inline_8191_newObjs$$inline_10769$$[$animationOnDisplay$$inline_8197_i$$inline_10772$$], $animation$$inline_10776_startState$$inline_10774$$ = $height$$131_oldShapes_tooltip$$55$$[$animationOnDisplay$$inline_8197_i$$inline_10772$$].$getAnimationParams$(), $context$$inline_8200_endState$$inline_10775_height$$inline_8194$$ = $bounds$$inline_8199_newObj$$inline_10773_width$$inline_8193$$.$getAnimationParams$();
            $bounds$$inline_8199_newObj$$inline_10773_width$$inline_8193$$.$setAnimationParams$($animation$$inline_10776_startState$$inline_10774$$);
            $animation$$inline_10776_startState$$inline_10774$$ = new D.$DvtCustomAnimation$$(this.$_context$, $bounds$$inline_8199_newObj$$inline_10773_width$$inline_8193$$, $animationDuration$$inline_8198$$);
            (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$inline_10776_startState$$inline_10774$$.$_animator$, "typeNumberArray", $bounds$$inline_8199_newObj$$inline_10773_width$$inline_8193$$, $bounds$$inline_8199_newObj$$inline_10773_width$$inline_8193$$.$getAnimationParams$, $bounds$$inline_8199_newObj$$inline_10773_width$$inline_8193$$.$setAnimationParams$, $context$$inline_8200_endState$$inline_10775_height$$inline_8194$$);
            $animatedObjs$$inline_10771_animationOnDataChange$$inline_8196$$.push($animation$$inline_10776_startState$$inline_10774$$)
          }
          this.$_animation$ = new D.$DvtParallelPlayable$$(this.$_context$, $animatedObjs$$inline_10771_animationOnDataChange$$inline_8196$$)
        }
      }
    }
    $bBlackBoxUpdate$$inline_8195_options$$252$$ || this.removeChild(this.$_container$);
    this.$_animation$ && (this.$_animation$.play(), this.$_animation$.$setOnEnd$(this.$_onAnimationEnd$, this));
    $bBlackBoxUpdate$$inline_8195_options$$252$$ && (this.$_oldContainer$ = this.$_container$);
    this.$_container$ = $container$$168_width$$156$$
  }
  this.$_editingOverlay$ && (this.$Options$.readOnly === D.$JSCompiler_alias_FALSE$$ && (0,D.$DvtAgent$isTouchDevice$$)() ? (this.$_editingOverlay$.$setWidth$(this.$Width$), this.$_editingOverlay$.$setHeight$(this.$Height$)) : (this.$_editingOverlay$.$setWidth$(0), this.$_editingOverlay$.$setHeight$(0)));
  (0,D.$JSCompiler_StaticMethods_setAriaRole$$)($container$$168_width$$156$$, "img");
  $height$$131_oldShapes_tooltip$$55$$ = D.$DvtGaugeRenderer$$.$getTooltipString$(this);
  (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)($container$$168_width$$156$$, "label", $height$$131_oldShapes_tooltip$$55$$)
};
D.$DvtGauge$$.prototype.render = D.$DvtGauge$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.$Render$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_animation$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__getBundle$ = (0,D.$JSCompiler_get$$)("$Bundle$");
D.$JSCompiler_prototypeAlias$$.$__getOptions$ = (0,D.$JSCompiler_get$$)("$Options$");
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventManager$");
D.$JSCompiler_prototypeAlias$$.$__processValueChangeStart$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeStart$$() {
  this.$_bEditing$ = D.$JSCompiler_alias_TRUE$$;
  this.$_oldValue$ = this.$Options$.value
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeMove$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeMove$$($x$$316$$, $y$$282$$) {
  this.$Options$.value = D.$DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, this.$GetValueAt$($x$$316$$, $y$$282$$));
  this.$render$();
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$_oldValue$, this.$Options$.value, D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_prototypeAlias$$.$__processValueChangeEnd$ = function $$JSCompiler_prototypeAlias$$$$__processValueChangeEnd$$($x$$317$$, $y$$283$$) {
  this.$__processValueChangeMove$($x$$317$$, $y$$283$$);
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$_oldValue$, this.$Options$.value, D.$JSCompiler_alias_TRUE$$));
  this.$_bEditing$ = D.$JSCompiler_alias_FALSE$$;
  this.$_oldValue$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$() {
  return new D.$DvtGaugeEventManager$$(this)
};
D.$DvtGauge$_thresholdComparator$$ = function $$DvtGauge$_thresholdComparator$$$($a$$67$$, $b$$60$$) {
  return $a$$67$$.max && $b$$60$$.max ? $a$$67$$.max - $b$$60$$.max : $a$$67$$.max ? -window.Infinity : window.Infinity
};
D.$DvtGauge$$.prototype.$getAutomation$ = function $$DvtGauge$$$$$getAutomation$$() {
  return new D.$DvtGaugeAutomation$$(this)
};
D.$DvtGauge$$.prototype.getAutomation = D.$DvtGauge$$.prototype.$getAutomation$;
D.$DvtGauge$$.prototype.$CreateKeyboardHandler$ = function $$DvtGauge$$$$$CreateKeyboardHandler$$($manager$$24$$) {
  return new D.$DvtGaugeKeyboardHandler$$($manager$$24$$, this)
};
D.$DvtGaugeAutomation$$ = (0,D.$JSCompiler_set$$)("$_gauge$");
(0,D.$goog$exportSymbol$$)("DvtGaugeAutomation", D.$DvtGaugeAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeAutomation$$, D.$DvtAutomation$$, "DvtGaugeAutomation");
D.$DvtGaugeAutomation$$.prototype.getValue = function $$DvtGaugeAutomation$$$$getValue$() {
  return this.$_gauge$.$__getOptions$().value
};
D.$DvtGaugeAutomation$$.prototype.getValue = D.$DvtGaugeAutomation$$.prototype.getValue;
D.$DvtGaugeAutomation$$.prototype.$getMetricLabel$ = function $$DvtGaugeAutomation$$$$$getMetricLabel$$() {
  return D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$(this.getValue(), this.$_gauge$)
};
D.$DvtGaugeAutomation$$.prototype.getMetricLabel = D.$DvtGaugeAutomation$$.prototype.$getMetricLabel$;
D.$DvtGaugeBundle$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeBundle$$, D.$DvtBundle$$, "DvtGaugeBundle");
D.$DvtGaugeBundle$$._defaults = {EMPTY_TEXT:"No data to display"};
D.$DvtGaugeBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtGaugeBundle$$$$$GetDefaultStringForKey$$($key$$56$$) {
  return D.$DvtGaugeBundle$$._defaults[$key$$56$$]
};
D.$DvtGaugeBundle$$.prototype.$GetBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtGaugeBundle");
D.$DvtGaugeDefaults$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtGaugeDefaults");
D.$DvtGaugeDefaults$SKIN_ALTA$$ = {skin:"alta", color:"#393737", metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}};
D.$DvtGaugeDefaults$VERSION_1$$ = {skin:"skyros", min:0, max:100, color:"#313842", borderColor:D.$JSCompiler_alias_NULL$$, visualEffects:"auto", emptyText:D.$JSCompiler_alias_NULL$$, animationOnDataChange:"none", animationOnDisplay:"none", animationDuration:500, readOnly:"true", metricLabel:{rendered:"off", scaling:"auto", style:new D.$DvtCSSStyle$$, textType:"number"}, __layout:{outerGap:1, labelGap:3}};
D.$DvtGaugeDefaults$$.prototype.Init = function $$DvtGaugeDefaults$$$$Init$($defaultsMap$$1_ret$$96$$) {
  $defaultsMap$$1_ret$$96$$ = {skyros:D.$DvtJSONUtils$$.$merge$($defaultsMap$$1_ret$$96$$.skyros, D.$DvtGaugeDefaults$VERSION_1$$), alta:D.$DvtJSONUtils$$.$merge$($defaultsMap$$1_ret$$96$$.alta, D.$DvtGaugeDefaults$SKIN_ALTA$$)};
  D.$DvtGaugeDefaults$$.$superclass$.Init.call(this, $defaultsMap$$1_ret$$96$$)
};
D.$DvtGaugeDefaults$isSkyrosSkin$$ = function $$DvtGaugeDefaults$isSkyrosSkin$$$($gauge$$7$$) {
  return"skyros" == $gauge$$7$$.$__getOptions$().skin
};
D.$DvtGaugeDataUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeDataUtils$$, D.$DvtObj$$, "DvtGaugeDataUtils");
D.$DvtGaugeDataUtils$$.$hasData$ = function $$DvtGaugeDataUtils$$$$hasData$$($gauge$$23_options$$204$$) {
  $gauge$$23_options$$204$$ = $gauge$$23_options$$204$$.$__getOptions$();
  return!$gauge$$23_options$$204$$ || (0,window.isNaN)($gauge$$23_options$$204$$.value) || $gauge$$23_options$$204$$.value === D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$ = function $$DvtGaugeDataUtils$$$$getValueThresholdIndex$$($gauge$$24$$, $value$$112$$) {
  var $options$$205_thresholds$$ = $gauge$$24$$.$__getOptions$(), $gaugeValue$$ = $value$$112$$ ? $value$$112$$ : $options$$205_thresholds$$.value, $options$$205_thresholds$$ = $options$$205_thresholds$$.thresholds;
  if(!$options$$205_thresholds$$) {
    return-1
  }
  for(var $i$$538$$ = 0;$i$$538$$ < $options$$205_thresholds$$.length;$i$$538$$++) {
    if($gaugeValue$$ <= $options$$205_thresholds$$[$i$$538$$].max) {
      return $i$$538$$
    }
  }
  return $options$$205_thresholds$$.length - 1
};
D.$DvtGaugeDataUtils$$.$getThreshold$ = function $$DvtGaugeDataUtils$$$$getThreshold$$($gauge$$25$$, $index$$108$$) {
  var $thresholds$$1$$ = $gauge$$25$$.$__getOptions$().thresholds;
  return $thresholds$$1$$ && 0 <= $index$$108$$ && $index$$108$$ < $thresholds$$1$$.length ? $thresholds$$1$$[$index$$108$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtGaugeDataUtils$$.$getReferenceObject$ = function $$DvtGaugeDataUtils$$$$getReferenceObject$$($gauge$$26$$, $index$$109$$) {
  var $referenceObjects$$ = $gauge$$26$$.$__getOptions$().referenceLines;
  return $referenceObjects$$ && 0 <= $index$$109$$ && $index$$109$$ < $referenceObjects$$.length ? $referenceObjects$$[$index$$109$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtGaugeEventManager$$ = function $$DvtGaugeEventManager$$$($gauge$$21$$) {
  this.Init($gauge$$21$$.$_context$, $gauge$$21$$.$__dispatchEvent$, $gauge$$21$$);
  this.$_gauge$ = $gauge$$21$$;
  this.$isEditing$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeEventManager$$, D.$DvtEventManager$$, "DvtGaugeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtGaugeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($coords$$17_event$$404$$) {
  this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ ? (this.$isEditing$ = D.$JSCompiler_alias_TRUE$$, this.$hideTooltip$(), $coords$$17_event$$404$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$17_event$$404$$.pageX, $coords$$17_event$$404$$.pageY), this.$_gauge$.$__processValueChangeStart$($coords$$17_event$$404$$.x, $coords$$17_event$$404$$.y)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $coords$$17_event$$404$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($coords$$18_event$$405$$) {
  this.$isEditing$ ? (this.$isEditing$ = D.$JSCompiler_alias_FALSE$$, $coords$$18_event$$405$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$18_event$$405$$.pageX, $coords$$18_event$$405$$.pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$18_event$$405$$.x, $coords$$18_event$$405$$.y)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseUp$.call(this, $coords$$18_event$$405$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$406$$) {
  if(this.$isEditing$) {
    var $coords$$19$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$406$$.pageX, $event$$406$$.pageY);
    this.$_gauge$.$__processValueChangeMove$($coords$$19$$.x, $coords$$19$$.y)
  }
  (this.$IsShowingTooltipWhileEditing$() || !this.$isEditing$) && D.$DvtGaugeEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$406$$)
};
D.$JSCompiler_prototypeAlias$$.$IsShowingTooltipWhileEditing$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$PreEventBubble$ = function $$JSCompiler_prototypeAlias$$$$PreEventBubble$$($event$$407$$) {
  if(D.$DvtTouchEvent$$.$TOUCHSTART$ === $event$$407$$.type && this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) {
    this.$isEditing$ = D.$JSCompiler_alias_TRUE$$;
    var $coords$$20$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$407$$.touches[0].pageX, $event$$407$$.touches[0].pageY);
    this.$_gauge$.$__processValueChangeStart$($coords$$20$$.x, $coords$$20$$.y);
    $event$$407$$.preventDefault()
  }else {
    D.$DvtTouchEvent$$.$TOUCHMOVE$ === $event$$407$$.type && this.$isEditing$ ? ($coords$$20$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$407$$.touches[0].pageX, $event$$407$$.touches[0].pageY), this.$_gauge$.$__processValueChangeMove$($coords$$20$$.x, $coords$$20$$.y), $event$$407$$.preventDefault()) : D.$DvtTouchEvent$$.$TOUCHEND$ === $event$$407$$.type && this.$isEditing$ ? (this.$isEditing$ = D.$JSCompiler_alias_FALSE$$, $coords$$20$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, 
    $event$$407$$.changedTouches[0].pageX, $event$$407$$.changedTouches[0].pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$20$$.x, $coords$$20$$.y), $event$$407$$.preventDefault()) : D.$DvtGaugeEventManager$$.$superclass$.$PreEventBubble$.call(this, $event$$407$$)
  }
};
D.$JSCompiler_StaticMethods_GetRelativePosition$$ = function $$JSCompiler_StaticMethods_GetRelativePosition$$$($JSCompiler_StaticMethods_GetRelativePosition$self$$, $pageX$$8_stageCoords$$, $pageY$$8$$) {
  $pageX$$8_stageCoords$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_GetRelativePosition$self$$.$_context$, $pageX$$8_stageCoords$$, $pageY$$8$$);
  return $JSCompiler_StaticMethods_GetRelativePosition$self$$.$_gauge$.$stageToLocal$($pageX$$8_stageCoords$$)
};
D.$DvtGaugeKeyboardHandler$$ = function $$DvtGaugeKeyboardHandler$$$($manager$$14$$, $gauge$$32$$) {
  this.Init($manager$$14$$, $gauge$$32$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtGaugeKeyboardHandler");
D.$DvtGaugeKeyboardHandler$$.prototype.Init = function $$DvtGaugeKeyboardHandler$$$$Init$($manager$$15$$, $gauge$$33$$) {
  D.$DvtGaugeKeyboardHandler$$.$superclass$.Init.call(this, $manager$$15$$);
  this.$_gauge$ = $gauge$$33$$
};
D.$DvtGaugeKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtGaugeKeyboardHandler$$$$$processKeyDown$$($event$$412$$) {
  var $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$ = $event$$412$$.keyCode, $isR2L$$6_oldValue$$inline_5436_oldValue$$inline_5439$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_gauge$.$_context$);
  if(38 == $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$ || $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$ == ($isR2L$$6_oldValue$$inline_5436_oldValue$$inline_5439$$ ? 37 : 39)) {
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$ = this.$_gauge$, $isR2L$$6_oldValue$$inline_5436_oldValue$$inline_5439$$ = $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$.value, $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$.value = 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$.step != D.$JSCompiler_alias_NULL$$ ? D.$DvtGaugeRenderer$$.$adjustForStep$($JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$.value + 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$.step) : window.Math.min(window.Math.max($JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$.value + ($JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$.max - $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$.min) / 
    100, $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$.min), $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$.max), $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$render$(), $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($isR2L$$6_oldValue$$inline_5436_oldValue$$inline_5439$$, 
    $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$.value, D.$JSCompiler_alias_TRUE$$)), $event$$412$$.preventDefault()
  }else {
    if(40 == $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$ || $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$ == ($isR2L$$6_oldValue$$inline_5436_oldValue$$inline_5439$$ ? 39 : 37)) {
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$ = this.$_gauge$, $isR2L$$6_oldValue$$inline_5436_oldValue$$inline_5439$$ = $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$.value, $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$.value = 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$.step != D.$JSCompiler_alias_NULL$$ ? D.$DvtGaugeRenderer$$.$adjustForStep$($JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$, $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$.value - 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$.step) : window.Math.min(window.Math.max($JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$.value - ($JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$.max - $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$.min) / 
      100, $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$.min), $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$.max), $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$render$(), $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($isR2L$$6_oldValue$$inline_5436_oldValue$$inline_5439$$, 
      $JSCompiler_StaticMethods___decreaseValue$self$$inline_5438_JSCompiler_StaticMethods___increaseValue$self$$inline_5435_keyCode$$27$$.$Options$.value, D.$JSCompiler_alias_TRUE$$)), $event$$412$$.preventDefault()
    }
  }
};
D.$DvtGaugeStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeStyleUtils$$, D.$DvtObj$$, "DvtGaugeStyleUtils");
D.$DvtGaugeStyleUtils$$.$_THRESHOLD_COLOR_RAMP$ = ["#ed6647", "#fad55c", "#68c182"];
D.$DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$ = ["#D62800", "#FFCF21", "#84AE31"];
D.$DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$ = ["#D62800", "#FFCF21", "#84AE31"];
D.$DvtGaugeStyleUtils$$.$_ALTA_CIRCLE$ = {$startAngle$:202.5, $angleExtent$:225, $anchorX$:100, $anchorY$:103, $metricLabelBounds$:{x:80, y:86, width:40, height:34}, $indicatorLength$:0.85, $tickLabelHeight$:20, $tickLabelWidth$:30, $radius$:60, $majorTickCount$:6};
D.$DvtGaugeStyleUtils$$.$_ALTA_DOME$ = {$startAngle$:202.5, $angleExtent$:225, $anchorX$:100, $anchorY$:103, $metricLabelBounds$:{x:83, y:86, width:34, height:34}, $indicatorLength$:0.85, $tickLabelHeight$:20, $tickLabelWidth$:30, $radius$:60, $majorTickCount$:6};
D.$DvtGaugeStyleUtils$$.$_ALTA_RECTANGLE$ = {$startAngle$:202.5, $angleExtent$:225, $anchorX$:100, $anchorY$:103, $metricLabelBounds$:{x:83, y:86, width:34, height:34}, $indicatorLength$:0.85, $tickLabelHeight$:20, $tickLabelWidth$:30, $radius$:60, $majorTickCount$:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_CIRCLE$ = {$startAngle$:220.5, $angleExtent$:261.1, $anchorX$:100, $anchorY$:100, $metricLabelBounds$:{x:82, y:133, width:36, height:34}, $indicatorLength$:0.85, $tickLabelHeight$:20, $tickLabelWidth$:30, $radius$:61, $majorTickCount$:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_DOME$ = {$startAngle$:195.5, $angleExtent$:210.8, $anchorX$:100, $anchorY$:100, $metricLabelBounds$:{x:84, y:135, width:32, height:35}, $indicatorLength$:0.98, $tickLabelHeight$:20, $tickLabelWidth$:30, $radius$:63, $majorTickCount$:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_RECTANGLE$ = {$startAngle$:207.6, $angleExtent$:235, $anchorX$:100, $anchorY$:95.8, $metricLabelBounds$:{x:83, y:125, width:34, height:40}, $indicatorLength$:1.05, $tickLabelHeight$:20, $tickLabelWidth$:30, $radius$:64, $majorTickCount$:6};
D.$DvtGaugeStyleUtils$$.$_LIGHT_CIRCLE$ = {$startAngle$:220.5, $angleExtent$:261.1, $anchorX$:100, $anchorY$:100, $metricLabelBounds$:{x:80, y:82, width:40, height:40}, $indicatorLength$:0.82, $tickLabelHeight$:20, $tickLabelWidth$:30, $radius$:58, $majorTickCount$:6};
D.$DvtGaugeStyleUtils$$.$_LIGHT_DOME$ = {$startAngle$:201, $angleExtent$:222, $anchorX$:100.2, $anchorY$:89, $metricLabelBounds$:{x:80, y:70, width:41, height:39}, $indicatorLength$:1.23, $tickLabelHeight$:20, $tickLabelWidth$:30, $radius$:56, $majorTickCount$:6};
D.$DvtGaugeStyleUtils$$.$_LIGHT_RECTANGLE$ = {$startAngle$:211, $angleExtent$:242, $anchorX$:100, $anchorY$:91.445, $metricLabelBounds$:{x:78, y:75, width:44, height:38}, $indicatorLength$:1.1, $tickLabelHeight$:20, $tickLabelWidth$:30, $radius$:58, $majorTickCount$:6};
D.$DvtGaugeStyleUtils$$.$_DARK_CIRCLE$ = {$startAngle$:220.5, $angleExtent$:261.5, $metricLabelBounds$:{x:80, y:82, width:40, height:40}, $indicatorLength$:0.85, $tickLabelHeight$:20, $tickLabelWidth$:30, $radius$:60, $majorTickCount$:6};
D.$DvtGaugeStyleUtils$$.$_DARK_DOME$ = {$startAngle$:201, $angleExtent$:222, $anchorX$:100.2, $anchorY$:89, $metricLabelBounds$:{x:80, y:73, width:40, height:36}, $indicatorLength$:1.23, $tickLabelHeight$:20, $tickLabelWidth$:30, $radius$:56, $majorTickCount$:6};
D.$DvtGaugeStyleUtils$$.$_DARK_RECTANGLE$ = {$startAngle$:201, $angleExtent$:222, $anchorX$:100.2, $anchorY$:99.5, $metricLabelBounds$:{x:80, y:83, width:41, height:36}, $indicatorLength$:1.1, $tickLabelHeight$:20, $tickLabelWidth$:30, $radius$:58, $majorTickCount$:6};
D.$DvtGaugeStyleUtils$$.$_ANTIQUE_INDICATOR$ = {$anchorX$:42, $anchorY$:510};
D.$DvtGaugeStyleUtils$$.$_ALTA_INDICATOR$ = {$anchorX$:187, $anchorY$:388};
D.$DvtGaugeStyleUtils$$.$_LIGHT_INDICATOR$ = {$anchorX$:227, $anchorY$:425};
D.$DvtGaugeStyleUtils$$.$_DARK_INDICATOR$ = {$anchorX$:227, $anchorY$:425};
D.$DvtGaugeStyleUtils$$.$getColor$ = function $$DvtGaugeStyleUtils$$$$getColor$$($gauge$$28$$) {
  var $options$$207$$ = $gauge$$28$$.$__getOptions$(), $thresholdIndex$$2$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$28$$), $threshold$$3$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$28$$, $thresholdIndex$$2$$);
  return $threshold$$3$$ && (!($gauge$$28$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$28$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" == $options$$207$$.thresholdDisplay) ? D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$28$$, $threshold$$3$$, $thresholdIndex$$2$$) : $options$$207$$.color
};
D.$DvtGaugeStyleUtils$$.$getBorderColor$ = function $$DvtGaugeStyleUtils$$$$getBorderColor$$($gauge$$29$$) {
  var $options$$208$$ = $gauge$$29$$.$__getOptions$(), $threshold$$4$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$29$$, D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$29$$));
  return $threshold$$4$$ && $threshold$$4$$.borderColor && (!($gauge$$29$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$29$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" == $options$$208$$.thresholdDisplay) ? $threshold$$4$$.borderColor : $options$$208$$.borderColor
};
D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$ = function $$DvtGaugeStyleUtils$$$$getPlotAreaColor$$($gauge$$30$$) {
  var $options$$209$$ = $gauge$$30$$.$__getOptions$(), $thresholdIndex$$4$$ = D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$30$$), $threshold$$5$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$30$$, $thresholdIndex$$4$$);
  return $threshold$$5$$ && (!($gauge$$30$$ instanceof D.$DvtStatusMeterGauge$$) || $gauge$$30$$ instanceof D.$DvtStatusMeterGauge$$ && "onIndicator" != $options$$209$$.thresholdDisplay) ? D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$30$$, $threshold$$5$$, $thresholdIndex$$4$$) : $options$$209$$.plotArea.color
};
D.$DvtGaugeStyleUtils$$.$getThresholdColor$ = function $$DvtGaugeStyleUtils$$$$getThresholdColor$$($gauge$$31$$, $threshold$$6$$, $thresholdIndex$$5$$) {
  if($threshold$$6$$.color) {
    return $threshold$$6$$.color
  }
  if($thresholdIndex$$5$$ < D.$DvtGaugeStyleUtils$$.$_THRESHOLD_COLOR_RAMP$.length) {
    return(0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$31$$) ? D.$DvtGaugeStyleUtils$$.$_SKYROS_THRESHOLD_COLOR_RAMP$[$thresholdIndex$$5$$] : D.$DvtGaugeStyleUtils$$.$_THRESHOLD_COLOR_RAMP$[$thresholdIndex$$5$$]
  }
};
D.$DvtGaugeStyleUtils$$.$getDialBackground$ = function $$DvtGaugeStyleUtils$$$$getDialBackground$$($backgroundType$$) {
  return"rectangleAlta" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_ALTA_RECTANGLE$ : "domeAlta" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_ALTA_DOME$ : "circleAntique" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_CIRCLE$ : "rectangleAntique" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_RECTANGLE$ : "domeAntique" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_DOME$ : "circleLight" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_CIRCLE$ : "rectangleLight" === 
  $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_RECTANGLE$ : "domeLight" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_DOME$ : "circleDark" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_CIRCLE$ : "rectangleDark" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_RECTANGLE$ : "domeDark" === $backgroundType$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_DOME$ : D.$DvtGaugeStyleUtils$$.$_ALTA_CIRCLE$
};
D.$DvtGaugeStyleUtils$$.$getDialIndicator$ = function $$DvtGaugeStyleUtils$$$$getDialIndicator$$($indicatorType$$) {
  return"needleAntique" === $indicatorType$$ ? D.$DvtGaugeStyleUtils$$.$_ANTIQUE_INDICATOR$ : "needleLight" === $indicatorType$$ ? D.$DvtGaugeStyleUtils$$.$_LIGHT_INDICATOR$ : "needleDark" === $indicatorType$$ ? D.$DvtGaugeStyleUtils$$.$_DARK_INDICATOR$ : D.$DvtGaugeStyleUtils$$.$_ALTA_INDICATOR$
};
D.$DvtGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtGaugeRenderer$$, D.$DvtObj$$, "DvtGaugeRenderer");
D.$DvtGaugeRenderer$$.$_EMPTY_TEXT_GAP_WIDTH$ = 2;
D.$DvtGaugeRenderer$$.$_EMPTY_TEXT_GAP_HEIGHT$ = 1;
D.$DvtGaugeRenderer$$.$renderEmptyText$ = function $$DvtGaugeRenderer$$$$renderEmptyText$$($gauge$$1$$, $container$$104$$, $availSpace$$86_label$$74$$) {
  var $options$$187$$ = $gauge$$1$$.$__getOptions$(), $emptyTextStr$$1$$ = $options$$187$$.emptyText;
  $emptyTextStr$$1$$ || ($emptyTextStr$$1$$ = (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($gauge$$1$$.$__getBundle$(), "EMPTY_TEXT", D.$JSCompiler_alias_NULL$$));
  var $width$$107$$ = $availSpace$$86_label$$74$$.$w$ - 2 * D.$DvtGaugeRenderer$$.$_EMPTY_TEXT_GAP_WIDTH$, $height$$88$$ = $availSpace$$86_label$$74$$.$h$ - 2 * D.$DvtGaugeRenderer$$.$_EMPTY_TEXT_GAP_HEIGHT$;
  $availSpace$$86_label$$74$$ = new D.$DvtOutputText$$($gauge$$1$$.$_context$, $emptyTextStr$$1$$, $availSpace$$86_label$$74$$.x + $availSpace$$86_label$$74$$.$w$ / 2, $availSpace$$86_label$$74$$.y + $availSpace$$86_label$$74$$.$h$ / 2);
  $options$$187$$.metricLabel.style.$getStyle$("font-size") || $options$$187$$.metricLabel.style.$setStyle$("font-size", "13px");
  $availSpace$$86_label$$74$$.$setCSSStyle$($options$$187$$.metricLabel.style);
  $availSpace$$86_label$$74$$.$alignCenter$();
  $availSpace$$86_label$$74$$.$alignMiddle$();
  D.$DvtTextUtils$$.$fitText$($availSpace$$86_label$$74$$, $width$$107$$, $height$$88$$, $container$$104$$) && $availSpace$$86_label$$74$$.$isTruncated$() && $gauge$$1$$.$__getEventManager$().$associate$($availSpace$$86_label$$74$$, new D.$DvtSimpleObjPeer$$($emptyTextStr$$1$$))
};
D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$ = function $$DvtGaugeRenderer$$$$getFormattedMetricLabel$$($value$$107$$, $gauge$$2$$) {
  var $options$$188$$ = $gauge$$2$$.$__getOptions$(), $isPercent$$ = "percent" == $options$$188$$.metricLabel.textType;
  $isPercent$$ && ($value$$107$$ = 100 * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$188$$, $options$$188$$.min, $value$$107$$));
  var $converter$$3$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$188$$.metricLabel.rendered && $options$$188$$.metricLabel.converter && ($converter$$3$$ = $options$$188$$.metricLabel.converter);
  var $scaling$$1$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$188$$.metricLabel.rendered && $options$$188$$.metricLabel.scaling && ($scaling$$1$$ = $options$$188$$.metricLabel.scaling);
  return D.$DvtGaugeRenderer$$.$_formatLabelValue$($value$$107$$, $gauge$$2$$, $converter$$3$$, $scaling$$1$$, $options$$188$$.metricLabel.autoPrecision ? $options$$188$$.metricLabel.autoPrecision : "on", $isPercent$$)
};
D.$DvtGaugeRenderer$$.$formatTickLabelValue$ = function $$DvtGaugeRenderer$$$$formatTickLabelValue$$($value$$108$$, $gauge$$3$$) {
  var $options$$189$$ = $gauge$$3$$.$__getOptions$(), $isPercent$$1$$ = "percent" == $options$$189$$.tickLabel.textType;
  $isPercent$$1$$ && ($value$$108$$ = 100 * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$189$$, $options$$189$$.min, $value$$108$$));
  var $converter$$4$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$189$$.tickLabel.rendered && $options$$189$$.tickLabel.converter && ($converter$$4$$ = $options$$189$$.tickLabel.converter);
  var $scaling$$2$$ = D.$JSCompiler_alias_NULL$$;
  "on" == $options$$189$$.tickLabel.rendered && $options$$189$$.tickLabel.scaling && ($scaling$$2$$ = $options$$189$$.tickLabel.scaling);
  return D.$DvtGaugeRenderer$$.$_formatLabelValue$($value$$108$$, $gauge$$3$$, $converter$$4$$, $scaling$$2$$, $options$$189$$.tickLabel.autoPrecision ? $options$$189$$.tickLabel.autoPrecision : "on", $isPercent$$1$$)
};
D.$DvtGaugeRenderer$$.$_formatLabelValue$ = function $$DvtGaugeRenderer$$$$_formatLabelValue$$($value$$109$$, $gauge$$4_minValue$$11_output$$, $converter$$5$$, $formatter$$1_scaling$$3$$, $autoPrecision$$7$$, $isPercent$$2$$) {
  var $maxValue$$11_options$$190$$ = $gauge$$4_minValue$$11_output$$.$__getOptions$();
  $gauge$$4_minValue$$11_output$$ = $value$$109$$;
  $gauge$$4_minValue$$11_output$$ = $maxValue$$11_options$$190$$.min;
  var $maxValue$$11_options$$190$$ = $maxValue$$11_options$$190$$.max, $difference$$1$$ = $maxValue$$11_options$$190$$ - $gauge$$4_minValue$$11_output$$, $increment$$ = D.$JSCompiler_alias_NULL$$;
  (0,window.isNaN)($difference$$1$$) || ($increment$$ = $difference$$1$$ / (1E3 > $difference$$1$$ ? 100 : 1E3));
  $formatter$$1_scaling$$3$$ = new D.$DvtLinearScaleAxisValueFormatter$$($gauge$$4_minValue$$11_output$$, $maxValue$$11_options$$190$$, $increment$$, $formatter$$1_scaling$$3$$, $autoPrecision$$7$$);
  if($converter$$5$$ && $converter$$5$$.getAsString) {
    $gauge$$4_minValue$$11_output$$ = $formatter$$1_scaling$$3$$.$format$($value$$109$$, $converter$$5$$)
  }else {
    if($converter$$5$$ && $converter$$5$$.format) {
      return $formatter$$1_scaling$$3$$.$format$($value$$109$$, $converter$$5$$)
    }
    $gauge$$4_minValue$$11_output$$ = $formatter$$1_scaling$$3$$.$format$($value$$109$$)
  }
  return $isPercent$$2$$ ? (0,window.String)($gauge$$4_minValue$$11_output$$) + "%" : $gauge$$4_minValue$$11_output$$
};
D.$DvtGaugeRenderer$$.$getFillPercentage$ = function $$DvtGaugeRenderer$$$$getFillPercentage$$($options$$191_percentFill$$, $min$$14$$, $value$$110$$) {
  $options$$191_percentFill$$ = ($value$$110$$ - $min$$14$$) / ($options$$191_percentFill$$.max - $options$$191_percentFill$$.min);
  return $options$$191_percentFill$$ = window.Math.min(window.Math.max(0, $options$$191_percentFill$$), 1)
};
D.$DvtGaugeRenderer$$.$getTooltipString$ = function $$DvtGaugeRenderer$$$$getTooltipString$$($gauge$$5$$) {
  var $options$$192$$ = $gauge$$5$$.$__getOptions$(), $threshold$$1$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$5$$, D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$5$$));
  return $threshold$$1$$ && $threshold$$1$$.shortDesc != D.$JSCompiler_alias_NULL$$ ? $threshold$$1$$.shortDesc : $options$$192$$.shortDesc != D.$JSCompiler_alias_NULL$$ ? $options$$192$$.shortDesc : D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$192$$.value, $gauge$$5$$)
};
D.$DvtGaugeRenderer$$.$renderLabel$ = function $$DvtGaugeRenderer$$$$renderLabel$$($gauge$$6_label$$75$$, $container$$105$$, $bounds$$59$$, $color$$47$$) {
  var $i$$536_options$$193$$ = $gauge$$6_label$$75$$.$__getOptions$();
  if("on" == $i$$536_options$$193$$.metricLabel.rendered) {
    var $labelString$$4$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($i$$536_options$$193$$.value, $gauge$$6_label$$75$$), $labelWidth$$3$$ = $bounds$$59$$.$w$, $labelHeight$$5$$ = $bounds$$59$$.$h$;
    $gauge$$6_label$$75$$ = new D.$DvtOutputText$$($gauge$$6_label$$75$$.$_context$, $labelString$$4$$, $bounds$$59$$.x + $bounds$$59$$.$w$ / 2, $bounds$$59$$.y + $bounds$$59$$.$h$ / 2);
    $gauge$$6_label$$75$$.$setCSSStyle$($i$$536_options$$193$$.metricLabel.style);
    var $longestLabel_size$$34$$ = $i$$536_options$$193$$.metricLabel.style.$getStyle$("font-size");
    if(!$i$$536_options$$193$$.metricLabel.style.$getStyle$("font-size")) {
      var $longestLabel_size$$34$$ = window.Math.max($i$$536_options$$193$$.max.toString().length, $i$$536_options$$193$$.min.toString().length, $labelString$$4$$.length), $maxString$$ = "";
      "percent" == $i$$536_options$$193$$.metricLabel.textType && ($longestLabel_size$$34$$ = window.Math.max(3, $labelString$$4$$.length), $maxString$$ += "%");
      for($i$$536_options$$193$$ = 0;$i$$536_options$$193$$ < $longestLabel_size$$34$$;$i$$536_options$$193$$++) {
        $maxString$$ += "0"
      }
      $gauge$$6_label$$75$$.$setTextString$($maxString$$);
      $longestLabel_size$$34$$ = $gauge$$6_label$$75$$.$getOptimalFontSize$($bounds$$59$$);
      $gauge$$6_label$$75$$.$setTextString$($labelString$$4$$);
      $gauge$$6_label$$75$$.$setFontSize$($longestLabel_size$$34$$)
    }
    $gauge$$6_label$$75$$.$alignMiddle$();
    $gauge$$6_label$$75$$.$alignCenter$();
    $color$$47$$ != D.$JSCompiler_alias_NULL$$ && $gauge$$6_label$$75$$.$setSolidFill$($color$$47$$);
    D.$DvtTextUtils$$.$fitText$($gauge$$6_label$$75$$, $labelWidth$$3$$, $labelHeight$$5$$, $container$$105$$) && $gauge$$6_label$$75$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$)
  }
};
D.$DvtGaugeRenderer$$.$adjustForStep$ = function $$DvtGaugeRenderer$$$$adjustForStep$$($options$$194$$, $value$$111$$) {
  var $step$$2$$ = (0,window.Number)($options$$194$$.step);
  if($step$$2$$ && 0 < $step$$2$$) {
    var $stepNum$$ = ($value$$111$$ - $options$$194$$.min) / $step$$2$$;
    return 0.5 < $stepNum$$ ? window.Math.max(window.Math.min($options$$194$$.max, window.Math.round($stepNum$$) * $step$$2$$ + $options$$194$$.min), $options$$194$$.min) : $options$$194$$.min
  }
  return $value$$111$$
};
D.$DvtLedGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtLedGauge", D.$DvtLedGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLedGauge$$, D.$DvtGauge$$, "DvtLedGauge");
D.$DvtLedGauge$newInstance$$ = function $$DvtLedGauge$newInstance$$$($context$$702$$, $callback$$146$$, $callbackObj$$116$$, $bStaticRendering$$) {
  var $gauge$$59$$ = new D.$DvtLedGauge$$;
  $gauge$$59$$.Init($context$$702$$, $callback$$146$$, $callbackObj$$116$$, $bStaticRendering$$);
  return $gauge$$59$$
};
D.$DvtLedGauge$$.newInstance = D.$DvtLedGauge$newInstance$$;
D.$DvtLedGauge$$.prototype.Init = function $$DvtLedGauge$$$$Init$($context$$703$$, $callback$$147$$, $callbackObj$$117$$, $bStaticRendering$$1$$) {
  D.$DvtLedGauge$$.$superclass$.Init.call(this, $context$$703$$, $callback$$147$$, $callbackObj$$117$$, $bStaticRendering$$1$$);
  this.$Defaults$ = new D.$DvtLedGaugeDefaults$$
};
D.$DvtLedGauge$$.prototype.$SetOptions$ = function $$DvtLedGauge$$$$$SetOptions$$($options$$250$$) {
  D.$DvtLedGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$250$$));
  "auto" == this.$Options$.animationOnDisplay && (this.$Options$.animationOnDisplay = "zoom");
  "auto" == this.$Options$.animationOnDataChange && (this.$Options$.animationOnDataChange = "alphaFade");
  this.$Options$.readOnly = D.$JSCompiler_alias_TRUE$$
};
D.$DvtLedGauge$$.prototype.$Render$ = function $$DvtLedGauge$$$$$Render$$($container$$167$$, $width$$155$$, $height$$130$$) {
  D.$DvtLedGaugeRenderer$$.$render$(this, $container$$167$$, $width$$155$$, $height$$130$$)
};
D.$DvtLedGaugeDefaults$$ = function $$DvtLedGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtLedGaugeDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtLedGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtLedGaugeDefaults");
D.$DvtLedGaugeDefaults$VERSION_1$$ = {type:"circle"};
D.$DvtLedGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtLedGaugeRenderer$$, D.$DvtObj$$, "DvtLedGaugeRenderer");
D.$DvtLedGaugeRenderer$$.$__RECTANGLE_CORNER_RADIUS$ = 1 / 6;
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ = "M-42,36.6Q-50,36.6,-46.54,28.6L-4,-43.07Q0,-50,4,-43.07L46.54,28.6Q50,36.6,42,36.6Z";
D.$DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$ = [-50, 36.6, 0, -50, 50, 36.6];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$ = [-50, 36.6, 0, -50, 50, 36.6];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ = [-13.05, -12.94, -50, -11.13, -21.06, 11.9, -30.74, 47.6, 0.1, 27.18, 31.06, 47.44, 21.17, 11.79, 50, -11.39, 13.05, -13.01, -0.06, -47.59];
D.$DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$ = [-50, -11.22, -16.69, -17.94, 0, -47.55, 16.69, -17.94, 50, -11.22, 26.69, 13.8, 30.9, 47.56, 0, 33.42, -30.9, 47.56, -26.69, 13.8];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ = "M0,45L21,45Q24.414,44.414,25,41L25,10L42,10Q48.5,9.1,45,4L2,-38Q0,-39,-2,-38L-45,4Q-48.5,9.1,-42,10L-25,10L-25,41Q-24.414,44.414,-21,45Z";
D.$DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$ = [25, 48, 25, 8, 47.5, 8, 0, -39, -47.5, 8, -25, 8, -25, 48];
D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$ = [25, 48, 25, 8, 47.5, 8, 0, -39, -47.5, 8, -25, 8, -25, 48];
D.$DvtLedGaugeRenderer$$.$render$ = function $$DvtLedGaugeRenderer$$$$render$$($gauge$$10$$, $container$$106$$, $bounds$$60_width$$109$$, $height$$90_labelColor$$2$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$10$$)) {
    var $options$$195$$ = $gauge$$10$$.$__getOptions$(), $outerGap$$ = $options$$195$$.__layout.outerGap, $size$$35$$ = $options$$195$$ && (0 <= $options$$195$$.size || 1 > $options$$195$$.size) ? window.Math.sqrt($options$$195$$.size) : 1;
    $bounds$$60_width$$109$$ = new D.$DvtRectangle$$($outerGap$$ + ($bounds$$60_width$$109$$ - 2 * $outerGap$$) * (1 - $size$$35$$) / 2, $outerGap$$ + ($height$$90_labelColor$$2$$ - 2 * $outerGap$$) * (1 - $size$$35$$) / 2, ($bounds$$60_width$$109$$ - 2 * $outerGap$$) * $size$$35$$, ($height$$90_labelColor$$2$$ - 2 * $outerGap$$) * $size$$35$$);
    D.$DvtLedGaugeRenderer$$.$_renderShape$($gauge$$10$$, $container$$106$$, $bounds$$60_width$$109$$);
    D.$DvtLedGaugeRenderer$$.$_renderVisualEffects$($gauge$$10$$, $container$$106$$, $bounds$$60_width$$109$$);
    "on" == $options$$195$$.metricLabel.rendered && ($options$$195$$.metricLabel.style.$getStyle$("color") != D.$JSCompiler_alias_NULL$$ ? D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$10$$, $container$$106$$, D.$DvtLedGaugeRenderer$$.$_getLabelBounds$($gauge$$10$$, $bounds$$60_width$$109$$), D.$JSCompiler_alias_NULL$$) : ($height$$90_labelColor$$2$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$10$$), $height$$90_labelColor$$2$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($height$$90_labelColor$$2$$), 
    $options$$195$$.metricLabel.style.$setStyle$("color", $height$$90_labelColor$$2$$), D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$10$$, $container$$106$$, D.$DvtLedGaugeRenderer$$.$_getLabelBounds$($gauge$$10$$, $bounds$$60_width$$109$$), $height$$90_labelColor$$2$$)))
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$10$$, $container$$106$$, new D.$DvtRectangle$$(0, 0, $bounds$$60_width$$109$$, $height$$90_labelColor$$2$$))
  }
};
D.$DvtLedGaugeRenderer$$.$_renderShape$ = function $$DvtLedGaugeRenderer$$$$_renderShape$$($gauge$$11$$, $container$$107$$, $bounds$$61$$) {
  var $context$$312_shape$$34$$ = $gauge$$11$$.$_context$, $options$$196$$ = $gauge$$11$$.$__getOptions$(), $type$$126$$ = $options$$196$$.type, $color$$48$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$11$$), $borderColor$$31_eventManager$$18$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($gauge$$11$$), $arColors$$10_cx$$21_tooltip$$36$$ = $bounds$$61$$.x + $bounds$$61$$.$w$ / 2, $cy$$21_rotation$$7$$ = $bounds$$61$$.y + $bounds$$61$$.$h$ / 2, $r$$37$$ = window.Math.min($bounds$$61$$.$w$, $bounds$$61$$.$h$) / 
  2, $isSkyros$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$11$$), $cmds$$7$$, $scale$$55$$ = window.Math.min($bounds$$61$$.$w$ / 100, $bounds$$61$$.$h$ / 100);
  "rectangle" == $type$$126$$ ? $context$$312_shape$$34$$ = new D.$DvtRect$$($context$$312_shape$$34$$, $bounds$$61$$.x, $bounds$$61$$.y, $bounds$$61$$.$w$, $bounds$$61$$.$h$) : "diamond" == $type$$126$$ ? $context$$312_shape$$34$$ = new D.$DvtPolygon$$($context$$312_shape$$34$$, [$arColors$$10_cx$$21_tooltip$$36$$ - $r$$37$$, $cy$$21_rotation$$7$$, $arColors$$10_cx$$21_tooltip$$36$$, $cy$$21_rotation$$7$$ - $r$$37$$, $arColors$$10_cx$$21_tooltip$$36$$ + $r$$37$$, $cy$$21_rotation$$7$$, $arColors$$10_cx$$21_tooltip$$36$$, 
  $cy$$21_rotation$$7$$ + $r$$37$$]) : "star" == $type$$126$$ || "triangle" == $type$$126$$ || "arrow" == $type$$126$$ ? ("star" == $type$$126$$ ? $cmds$$7$$ = $isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_STAR_CMDS$ : "triangle" == $type$$126$$ ? $cmds$$7$$ = $isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_CMDS$ : D.$DvtLedGaugeRenderer$$.$_SHAPE_TRIANGLE_CMDS$ : "arrow" == $type$$126$$ && ($cmds$$7$$ = $isSkyros$$ ? D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_CMDS$ : 
  D.$DvtLedGaugeRenderer$$.$_SHAPE_ARROW_CMDS$), $isSkyros$$ && "triangle" == $type$$126$$ || $isSkyros$$ && "arrow" == $type$$126$$ ? ($cmds$$7$$ = window.DvtPathUtils.$transformPath$($cmds$$7$$, $bounds$$61$$.x + $bounds$$61$$.$w$ / 2, $bounds$$61$$.y + $bounds$$61$$.$h$ / 2, $scale$$55$$, $scale$$55$$), $context$$312_shape$$34$$ = new D.$DvtPath$$($context$$312_shape$$34$$, $cmds$$7$$)) : ($cmds$$7$$ = D.$DvtPolygonUtils$$.scale($cmds$$7$$, $scale$$55$$, $scale$$55$$), $cmds$$7$$ = D.$DvtPolygonUtils$$.translate($cmds$$7$$, 
  $bounds$$61$$.x + $bounds$$61$$.$w$ / 2, $bounds$$61$$.y + $bounds$$61$$.$h$ / 2), $context$$312_shape$$34$$ = new D.$DvtPolygon$$($context$$312_shape$$34$$, $cmds$$7$$))) : $context$$312_shape$$34$$ = new D.$DvtCircle$$($context$$312_shape$$34$$, $arColors$$10_cx$$21_tooltip$$36$$, $cy$$21_rotation$$7$$, $r$$37$$);
  $isSkyros$$ || "none" == $options$$196$$.visualEffects ? $context$$312_shape$$34$$.$setSolidFill$($color$$48$$) : ($arColors$$10_cx$$21_tooltip$$36$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$48$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$48$$, -0.04, -0.05)], $cy$$21_rotation$$7$$ = $options$$196$$ && 0 == $options$$196$$.rotation % 90 ? $options$$196$$.rotation : 0, $context$$312_shape$$34$$.$setFill$(new D.$DvtLinearGradientFill$$("arrow" == $type$$126$$ || "star" == $type$$126$$ || 
  "triangle" == $type$$126$$ ? $cy$$21_rotation$$7$$ - 90 : 270, $arColors$$10_cx$$21_tooltip$$36$$, [1, 1], [0, 1])));
  $borderColor$$31_eventManager$$18$$ && $context$$312_shape$$34$$.$setSolidStroke$($borderColor$$31_eventManager$$18$$);
  $borderColor$$31_eventManager$$18$$ = $gauge$$11$$.$__getEventManager$();
  ($arColors$$10_cx$$21_tooltip$$36$$ = D.$DvtGaugeRenderer$$.$getTooltipString$($gauge$$11$$)) && $borderColor$$31_eventManager$$18$$ && $borderColor$$31_eventManager$$18$$.$associate$($context$$312_shape$$34$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $arColors$$10_cx$$21_tooltip$$36$$, $color$$48$$));
  $cy$$21_rotation$$7$$ = $isSkyros$$ ? $options$$196$$.rotation + 90 : $options$$196$$.rotation;
  if(0 != $cy$$21_rotation$$7$$ && ("arrow" == $type$$126$$ || "triangle" == $type$$126$$)) {
    $context$$312_shape$$34$$ = D.$DvtLedGaugeRenderer$$.$_rotate$($gauge$$11$$, $container$$107$$, $context$$312_shape$$34$$, $bounds$$61$$)
  }
  $container$$107$$.$addChild$($context$$312_shape$$34$$)
};
D.$DvtLedGaugeRenderer$$.$_rotate$ = function $$DvtLedGaugeRenderer$$$$_rotate$$($gauge$$12_translateGroup$$, $container$$108_groupDims_matrix$$12_rotation$$8$$, $shape$$35_tx$$19$$, $bounds$$62_ty$$19$$) {
  var $options$$197_rotationMatrix$$2$$ = $gauge$$12_translateGroup$$.$__getOptions$();
  $gauge$$12_translateGroup$$ = new D.$DvtContainer$$($gauge$$12_translateGroup$$.$_context$);
  $container$$108_groupDims_matrix$$12_rotation$$8$$.$addChild$($gauge$$12_translateGroup$$);
  $gauge$$12_translateGroup$$.$addChild$($shape$$35_tx$$19$$);
  $container$$108_groupDims_matrix$$12_rotation$$8$$ = $options$$197_rotationMatrix$$2$$ && 0 == $options$$197_rotationMatrix$$2$$.rotation % 90 ? $options$$197_rotationMatrix$$2$$.rotation : 0;
  $options$$197_rotationMatrix$$2$$ = new D.$DvtMatrix$$;
  $options$$197_rotationMatrix$$2$$.rotate(window.Math.PI * $container$$108_groupDims_matrix$$12_rotation$$8$$ / 180);
  $shape$$35_tx$$19$$.$setMatrix$($options$$197_rotationMatrix$$2$$);
  $container$$108_groupDims_matrix$$12_rotation$$8$$ = $gauge$$12_translateGroup$$.$getDimensions$();
  $shape$$35_tx$$19$$ = $bounds$$62_ty$$19$$.x + $bounds$$62_ty$$19$$.$w$ / 2 - ($container$$108_groupDims_matrix$$12_rotation$$8$$.x + $container$$108_groupDims_matrix$$12_rotation$$8$$.$w$ / 2);
  $bounds$$62_ty$$19$$ = $bounds$$62_ty$$19$$.y + $bounds$$62_ty$$19$$.$h$ / 2 - ($container$$108_groupDims_matrix$$12_rotation$$8$$.y + $container$$108_groupDims_matrix$$12_rotation$$8$$.$h$ / 2);
  $container$$108_groupDims_matrix$$12_rotation$$8$$ = new D.$DvtMatrix$$;
  $container$$108_groupDims_matrix$$12_rotation$$8$$.translate($shape$$35_tx$$19$$, $bounds$$62_ty$$19$$);
  $gauge$$12_translateGroup$$.$setMatrix$($container$$108_groupDims_matrix$$12_rotation$$8$$);
  return $gauge$$12_translateGroup$$
};
D.$DvtLedGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtLedGaugeRenderer$$$$_renderVisualEffects$$($gauge$$13$$, $container$$109$$, $bounds$$63$$) {
  var $options$$198$$ = $gauge$$13$$.$__getOptions$(), $type$$127$$ = $options$$198$$.type;
  "none" != $options$$198$$.visualEffects && (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$13$$) && ("rectangle" == $type$$127$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayRectangle$($gauge$$13$$, $container$$109$$, $bounds$$63$$) : "diamond" == $type$$127$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayDiamond$($gauge$$13$$, $container$$109$$, $bounds$$63$$) : "triangle" == $type$$127$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayTriangle$($gauge$$13$$, $container$$109$$, $bounds$$63$$) : "star" == $type$$127$$ ? 
  D.$DvtLedGaugeRenderer$$.$_renderOverlayStar$($gauge$$13$$, $container$$109$$) : "arrow" == $type$$127$$ ? D.$DvtLedGaugeRenderer$$.$_renderOverlayArrow$($gauge$$13$$, $container$$109$$, $bounds$$63$$) : D.$DvtLedGaugeRenderer$$.$_renderOverlayCircle$($gauge$$13$$, $container$$109$$, $bounds$$63$$))
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayRectangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayRectangle$$($gauge$$14_overlay$$8$$, $container$$110_gradient$$3$$, $bounds$$64_overlayBounds$$1$$) {
  var $dx$$18$$ = 0.05 * $bounds$$64_overlayBounds$$1$$.$w$, $dy$$18$$ = 0.05 * $bounds$$64_overlayBounds$$1$$.$h$;
  $bounds$$64_overlayBounds$$1$$ = new D.$DvtRectangle$$($bounds$$64_overlayBounds$$1$$.x + $dx$$18$$, $bounds$$64_overlayBounds$$1$$.y + $dy$$18$$, $bounds$$64_overlayBounds$$1$$.$w$ - 2 * $dx$$18$$, $bounds$$64_overlayBounds$$1$$.$h$ - 2 * $dy$$18$$);
  $gauge$$14_overlay$$8$$ = new D.$DvtRect$$($gauge$$14_overlay$$8$$.$_context$, $bounds$$64_overlayBounds$$1$$.x, $bounds$$64_overlayBounds$$1$$.y, $bounds$$64_overlayBounds$$1$$.$w$, $bounds$$64_overlayBounds$$1$$.$h$);
  $gauge$$14_overlay$$8$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$110_gradient$$3$$.$addChild$($gauge$$14_overlay$$8$$);
  $container$$110_gradient$$3$$ = new D.$DvtLinearGradientFill$$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2], [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1]);
  $gauge$$14_overlay$$8$$.$setFill$($container$$110_gradient$$3$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayDiamond$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayDiamond$$($gauge$$15_overlay$$9$$, $container$$111_gradient$$4$$, $bounds$$65_cx$$22$$) {
  var $cy$$22_dx$$19$$ = 0.05 * $bounds$$65_cx$$22$$.$w$, $dy$$19_overlayBounds$$2_r$$38$$ = 0.05 * $bounds$$65_cx$$22$$.$h$, $dy$$19_overlayBounds$$2_r$$38$$ = new D.$DvtRectangle$$($bounds$$65_cx$$22$$.x + $cy$$22_dx$$19$$, $bounds$$65_cx$$22$$.y + $dy$$19_overlayBounds$$2_r$$38$$, $bounds$$65_cx$$22$$.$w$ - 2 * $cy$$22_dx$$19$$, $bounds$$65_cx$$22$$.$h$ - 2 * $dy$$19_overlayBounds$$2_r$$38$$);
  $bounds$$65_cx$$22$$ = $dy$$19_overlayBounds$$2_r$$38$$.x + $dy$$19_overlayBounds$$2_r$$38$$.$w$ / 2;
  $cy$$22_dx$$19$$ = $dy$$19_overlayBounds$$2_r$$38$$.y + $dy$$19_overlayBounds$$2_r$$38$$.$h$ / 2;
  $dy$$19_overlayBounds$$2_r$$38$$ = window.Math.min($dy$$19_overlayBounds$$2_r$$38$$.$w$, $dy$$19_overlayBounds$$2_r$$38$$.$h$) / 2;
  $gauge$$15_overlay$$9$$ = new D.$DvtPolygon$$($gauge$$15_overlay$$9$$.$_context$, [$bounds$$65_cx$$22$$ - $dy$$19_overlayBounds$$2_r$$38$$, $cy$$22_dx$$19$$, $bounds$$65_cx$$22$$, $cy$$22_dx$$19$$ - $dy$$19_overlayBounds$$2_r$$38$$, $bounds$$65_cx$$22$$ + $dy$$19_overlayBounds$$2_r$$38$$, $cy$$22_dx$$19$$, $bounds$$65_cx$$22$$, $cy$$22_dx$$19$$ + $dy$$19_overlayBounds$$2_r$$38$$]);
  $gauge$$15_overlay$$9$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$111_gradient$$4$$.$addChild$($gauge$$15_overlay$$9$$);
  $container$$111_gradient$$4$$ = new D.$DvtLinearGradientFill$$(270, "#FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF #FFFFFF".split(" "), [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2], [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1]);
  $gauge$$15_overlay$$9$$.$setFill$($container$$111_gradient$$4$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayTriangle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayTriangle$$($gauge$$16$$, $container$$112$$, $bounds$$66_overlay$$10$$) {
  var $dx$$20_overlayBounds$$3$$ = 0.05 * $bounds$$66_overlay$$10$$.$w$, $cmds$$8_dy$$20_options$$199_rotation$$9$$ = 0.05 * $bounds$$66_overlay$$10$$.$h$, $gradient$$5_isSkyros$$1$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$16$$), $dx$$20_overlayBounds$$3$$ = new D.$DvtRectangle$$($bounds$$66_overlay$$10$$.x + $dx$$20_overlayBounds$$3$$, $bounds$$66_overlay$$10$$.y + $cmds$$8_dy$$20_options$$199_rotation$$9$$, $bounds$$66_overlay$$10$$.$w$ - 2 * $dx$$20_overlayBounds$$3$$, $bounds$$66_overlay$$10$$.$h$ - 
  2 * $cmds$$8_dy$$20_options$$199_rotation$$9$$), $cmds$$8_dy$$20_options$$199_rotation$$9$$ = D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_TRIANGLE_INNER_CMDS$, $scale$$56$$ = window.Math.min($dx$$20_overlayBounds$$3$$.$w$ / 100, $dx$$20_overlayBounds$$3$$.$h$ / 100), $cmds$$8_dy$$20_options$$199_rotation$$9$$ = D.$DvtPolygonUtils$$.scale($cmds$$8_dy$$20_options$$199_rotation$$9$$, $scale$$56$$, $scale$$56$$), $cmds$$8_dy$$20_options$$199_rotation$$9$$ = D.$DvtPolygonUtils$$.translate($cmds$$8_dy$$20_options$$199_rotation$$9$$, 
  $bounds$$66_overlay$$10$$.x + $bounds$$66_overlay$$10$$.$w$ / 2, $bounds$$66_overlay$$10$$.y + $bounds$$66_overlay$$10$$.$h$ / 2);
  $bounds$$66_overlay$$10$$ = new D.$DvtPolygon$$($gauge$$16$$.$_context$, $cmds$$8_dy$$20_options$$199_rotation$$9$$);
  $cmds$$8_dy$$20_options$$199_rotation$$9$$ = ($cmds$$8_dy$$20_options$$199_rotation$$9$$ = $gauge$$16$$.$__getOptions$()) && 0 == $cmds$$8_dy$$20_options$$199_rotation$$9$$.rotation % 90 ? $cmds$$8_dy$$20_options$$199_rotation$$9$$.rotation : 0;
  $gradient$$5_isSkyros$$1$$ = new D.$DvtLinearGradientFill$$($gradient$$5_isSkyros$$1$$ ? $cmds$$8_dy$$20_options$$199_rotation$$9$$ - 90 : 360 - $cmds$$8_dy$$20_options$$199_rotation$$9$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.3, 0.55, 0, 0.25, 0.1], [0, 0.05, 0.4, 0.9, 1]);
  $bounds$$66_overlay$$10$$.$setFill$($gradient$$5_isSkyros$$1$$);
  $bounds$$66_overlay$$10$$ = D.$DvtLedGaugeRenderer$$.$_rotate$($gauge$$16$$, $container$$112$$, $bounds$$66_overlay$$10$$, $dx$$20_overlayBounds$$3$$);
  $bounds$$66_overlay$$10$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$112$$.$addChild$($bounds$$66_overlay$$10$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayArrow$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayArrow$$($gauge$$17$$, $container$$113$$, $bounds$$67_overlay$$11$$) {
  var $dx$$21_overlayBounds$$4$$ = 0.05 * $bounds$$67_overlay$$11$$.$w$, $cmds$$9_dy$$21_options$$200_rotation$$10$$ = 0.05 * $bounds$$67_overlay$$11$$.$h$, $gradient$$6_isSkyros$$2$$ = (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$17$$), $dx$$21_overlayBounds$$4$$ = new D.$DvtRectangle$$($bounds$$67_overlay$$11$$.x + $dx$$21_overlayBounds$$4$$, $bounds$$67_overlay$$11$$.y + $cmds$$9_dy$$21_options$$200_rotation$$10$$, $bounds$$67_overlay$$11$$.$w$ - 2 * $dx$$21_overlayBounds$$4$$, $bounds$$67_overlay$$11$$.$h$ - 
  2 * $cmds$$9_dy$$21_options$$200_rotation$$10$$), $cmds$$9_dy$$21_options$$200_rotation$$10$$ = D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_ARROW_INNER_CMDS$, $scale$$57$$ = window.Math.min($dx$$21_overlayBounds$$4$$.$w$ / 100, $dx$$21_overlayBounds$$4$$.$h$ / 100), $cmds$$9_dy$$21_options$$200_rotation$$10$$ = D.$DvtPolygonUtils$$.scale($cmds$$9_dy$$21_options$$200_rotation$$10$$, $scale$$57$$, $scale$$57$$), $cmds$$9_dy$$21_options$$200_rotation$$10$$ = D.$DvtPolygonUtils$$.translate($cmds$$9_dy$$21_options$$200_rotation$$10$$, 
  $bounds$$67_overlay$$11$$.x + $bounds$$67_overlay$$11$$.$w$ / 2, $bounds$$67_overlay$$11$$.y + $bounds$$67_overlay$$11$$.$h$ / 2);
  $bounds$$67_overlay$$11$$ = new D.$DvtPolygon$$($gauge$$17$$.$_context$, $cmds$$9_dy$$21_options$$200_rotation$$10$$);
  $cmds$$9_dy$$21_options$$200_rotation$$10$$ = ($cmds$$9_dy$$21_options$$200_rotation$$10$$ = $gauge$$17$$.$__getOptions$()) && 0 == $cmds$$9_dy$$21_options$$200_rotation$$10$$.rotation % 90 ? $cmds$$9_dy$$21_options$$200_rotation$$10$$.rotation : 0;
  $gradient$$6_isSkyros$$2$$ = new D.$DvtLinearGradientFill$$($gradient$$6_isSkyros$$2$$ ? $cmds$$9_dy$$21_options$$200_rotation$$10$$ - 90 : 360 - $cmds$$9_dy$$21_options$$200_rotation$$10$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.3, 0.55, 0, 0.25, 0.1], [0, 0.05, 0.4, 0.9, 1]);
  $bounds$$67_overlay$$11$$.$setFill$($gradient$$6_isSkyros$$2$$);
  $bounds$$67_overlay$$11$$ = D.$DvtLedGaugeRenderer$$.$_rotate$($gauge$$17$$, $container$$113$$, $bounds$$67_overlay$$11$$, $dx$$21_overlayBounds$$4$$);
  $bounds$$67_overlay$$11$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$113$$.$addChild$($bounds$$67_overlay$$11$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayStar$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayStar$$($gauge$$18$$, $container$$114$$) {
  var $overlay$$12$$ = new D.$DvtPath$$($gauge$$18$$.$_context$, D.$DvtLedGaugeRenderer$$.$_SKYROS_SHAPE_STAR_CMDS$), $gradient$$7_gradientRotation$$3_options$$201$$ = $gauge$$18$$.$__getOptions$(), $gradient$$7_gradientRotation$$3_options$$201$$ = 360 - ($gradient$$7_gradientRotation$$3_options$$201$$ && 0 == $gradient$$7_gradientRotation$$3_options$$201$$.rotation % 90 ? $gradient$$7_gradientRotation$$3_options$$201$$.rotation : 0), $arColors$$15_color$$49$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$18$$), 
  $arColors$$15_color$$49$$ = [D.$DvtColorUtils$$.$getDarker$($arColors$$15_color$$49$$, 0.9), $arColors$$15_color$$49$$, D.$DvtColorUtils$$.$getBrighter$($arColors$$15_color$$49$$)], $gradient$$7_gradientRotation$$3_options$$201$$ = new D.$DvtLinearGradientFill$$($gradient$$7_gradientRotation$$3_options$$201$$, $arColors$$15_color$$49$$, [1, 1, 1], [0.1, 0.4, 0.8]);
  $overlay$$12$$.$setFill$($gradient$$7_gradientRotation$$3_options$$201$$);
  $overlay$$12$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$114$$.$addChild$($overlay$$12$$)
};
D.$DvtLedGaugeRenderer$$.$_renderOverlayCircle$ = function $$DvtLedGaugeRenderer$$$$_renderOverlayCircle$$($gauge$$19_highlight$$, $container$$115_highlightGradient$$, $bounds$$69_gradientBounds$$) {
  var $cx$$23_dx$$23$$ = 0.05 * $bounds$$69_gradientBounds$$.$w$, $cy$$23_dy$$23$$ = 0.05 * $bounds$$69_gradientBounds$$.$h$;
  $bounds$$69_gradientBounds$$ = new D.$DvtRectangle$$($bounds$$69_gradientBounds$$.x + $cx$$23_dx$$23$$, $bounds$$69_gradientBounds$$.y + $cy$$23_dy$$23$$, $bounds$$69_gradientBounds$$.$w$ - 2 * $cx$$23_dx$$23$$, $bounds$$69_gradientBounds$$.$h$ - 2 * $cy$$23_dy$$23$$);
  var $cx$$23_dx$$23$$ = $bounds$$69_gradientBounds$$.x + $bounds$$69_gradientBounds$$.$w$ / 2, $cy$$23_dy$$23$$ = $bounds$$69_gradientBounds$$.y + $bounds$$69_gradientBounds$$.$h$ / 2, $radius$$22_ry$$16$$ = window.Math.min($bounds$$69_gradientBounds$$.$w$, $bounds$$69_gradientBounds$$.$h$) / 2, $overlay$$13_rx$$20$$ = new D.$DvtCircle$$($gauge$$19_highlight$$.$_context$, $cx$$23_dx$$23$$, $cy$$23_dy$$23$$, $radius$$22_ry$$16$$);
  $overlay$$13_rx$$20$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$115_highlightGradient$$.$addChild$($overlay$$13_rx$$20$$);
  var $gradient$$8$$ = new D.$DvtRadialGradientFill$$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, 0.25, 0.5], [0.15, 0.7, 0.95], $cx$$23_dx$$23$$, $cy$$23_dy$$23$$ - 0.6 * $radius$$22_ry$$16$$, 1.5 * $radius$$22_ry$$16$$, [$bounds$$69_gradientBounds$$.x, $bounds$$69_gradientBounds$$.y, $bounds$$69_gradientBounds$$.$w$, $bounds$$69_gradientBounds$$.$h$]);
  $overlay$$13_rx$$20$$.$setFill$($gradient$$8$$);
  $overlay$$13_rx$$20$$ = 0.6 * $radius$$22_ry$$16$$;
  $radius$$22_ry$$16$$ *= 0.4;
  $cy$$23_dy$$23$$ -= 0.3 * $radius$$22_ry$$16$$;
  $gauge$$19_highlight$$ = new D.$DvtOval$$($gauge$$19_highlight$$.$_context$, $cx$$23_dx$$23$$, $cy$$23_dy$$23$$ - $radius$$22_ry$$16$$, $overlay$$13_rx$$20$$, $radius$$22_ry$$16$$);
  $gauge$$19_highlight$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$115_highlightGradient$$.$addChild$($gauge$$19_highlight$$);
  $container$$115_highlightGradient$$ = new D.$DvtRadialGradientFill$$(["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0, 0.2, 0.5], [0.6, 0.8, 1], $cx$$23_dx$$23$$, $cy$$23_dy$$23$$, $overlay$$13_rx$$20$$, [$bounds$$69_gradientBounds$$.x, $bounds$$69_gradientBounds$$.y, $bounds$$69_gradientBounds$$.$w$, $bounds$$69_gradientBounds$$.$h$]);
  $gauge$$19_highlight$$.$setFill$($container$$115_highlightGradient$$)
};
D.$DvtLedGaugeRenderer$$.$_getLabelBounds$ = function $$DvtLedGaugeRenderer$$$$_getLabelBounds$$($gauge$$20$$, $bounds$$70$$) {
  var $options$$202_rotation$$12$$ = $gauge$$20$$.$__getOptions$(), $type$$128$$ = $options$$202_rotation$$12$$.type, $options$$202_rotation$$12$$ = 0 == $options$$202_rotation$$12$$.rotation % 90 ? $options$$202_rotation$$12$$.rotation : 0, $minDim$$1$$ = window.Math.min($bounds$$70$$.$w$, $bounds$$70$$.$h$), $newX$$8$$ = $bounds$$70$$.x + $bounds$$70$$.$w$ / 2 - $minDim$$1$$ / 2, $newY$$9$$ = $bounds$$70$$.y + $bounds$$70$$.$h$ / 2 - $minDim$$1$$ / 2, $newWidth$$4$$ = $minDim$$1$$, $newHeight$$1$$ = 
  $minDim$$1$$;
  "triangle" == $type$$128$$ ? 0 == $options$$202_rotation$$12$$ ? ($newX$$8$$ += 0.2 * $minDim$$1$$, $newY$$9$$ += 0.25 * $minDim$$1$$, $newWidth$$4$$ -= 0.4 * $minDim$$1$$, $newHeight$$1$$ -= 0.3 * $minDim$$1$$) : 90 == $options$$202_rotation$$12$$ ? ($newX$$8$$ += 0.05 * $minDim$$1$$, $newY$$9$$ += 0.2 * $minDim$$1$$, $newWidth$$4$$ -= 0.3 * $minDim$$1$$, $newHeight$$1$$ -= 0.4 * $minDim$$1$$) : 180 == $options$$202_rotation$$12$$ ? ($newX$$8$$ += 0.2 * $minDim$$1$$, $newY$$9$$ += 0.05 * $minDim$$1$$, 
  $newWidth$$4$$ -= 0.4 * $minDim$$1$$, $newHeight$$1$$ -= 0.3 * $minDim$$1$$) : 270 == $options$$202_rotation$$12$$ && ($newX$$8$$ += 0.25 * $minDim$$1$$, $newY$$9$$ += 0.2 * $minDim$$1$$, $newWidth$$4$$ -= 0.3 * $minDim$$1$$, $newHeight$$1$$ -= 0.4 * $minDim$$1$$) : "arrow" == $type$$128$$ ? 0 == $options$$202_rotation$$12$$ ? ($newX$$8$$ += 0.2 * $minDim$$1$$, $newY$$9$$ += 0.2 * $minDim$$1$$, $newWidth$$4$$ -= 0.4 * $minDim$$1$$, $newHeight$$1$$ -= 0.4 * $minDim$$1$$) : 90 == $options$$202_rotation$$12$$ ? 
  ($newX$$8$$ += 0.05 * $minDim$$1$$, $newY$$9$$ += 0.2 * $minDim$$1$$, $newWidth$$4$$ -= 0.28 * $minDim$$1$$, $newHeight$$1$$ -= 0.4 * $minDim$$1$$) : 180 == $options$$202_rotation$$12$$ ? ($newX$$8$$ += 0.2 * $minDim$$1$$, $newY$$9$$ += 0.2 * $minDim$$1$$, $newWidth$$4$$ -= 0.4 * $minDim$$1$$, $newHeight$$1$$ -= 0.4 * $minDim$$1$$) : 270 == $options$$202_rotation$$12$$ && ($newX$$8$$ += 0.23 * $minDim$$1$$, $newY$$9$$ += 0.2 * $minDim$$1$$, $newWidth$$4$$ -= 0.28 * $minDim$$1$$, $newHeight$$1$$ -= 
  0.4 * $minDim$$1$$) : "star" == $type$$128$$ ? ($newX$$8$$ += 0.25 * $minDim$$1$$, $newY$$9$$ += 0.25 * $minDim$$1$$, $newWidth$$4$$ -= 0.5 * $minDim$$1$$, $newHeight$$1$$ -= 0.4 * $minDim$$1$$) : "diamond" == $type$$128$$ ? ($newX$$8$$ += 0.15 * $minDim$$1$$, $newY$$9$$ += 0.15 * $minDim$$1$$, $newWidth$$4$$ -= 0.3 * $minDim$$1$$, $newHeight$$1$$ -= 0.3 * $minDim$$1$$) : "rectangle" == $type$$128$$ ? ($newX$$8$$ += 0.1 * $minDim$$1$$, $newY$$9$$ += 0.1 * $minDim$$1$$, $newWidth$$4$$ -= 0.2 * $minDim$$1$$, 
  $newHeight$$1$$ -= 0.2 * $minDim$$1$$) : "circle" == $type$$128$$ && ($newX$$8$$ += 0.15 * $minDim$$1$$, $newY$$9$$ += 0.15 * $minDim$$1$$, $newWidth$$4$$ -= 0.3 * $minDim$$1$$, $newHeight$$1$$ -= 0.3 * $minDim$$1$$);
  return new D.$DvtRectangle$$($newX$$8$$, $newY$$9$$, $newWidth$$4$$, $newHeight$$1$$)
};
D.$DvtStatusMeterGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtStatusMeterGauge", D.$DvtStatusMeterGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGauge$$, D.$DvtGauge$$, "DvtStatusMeterGauge");
D.$DvtStatusMeterGauge$newInstance$$ = function $$DvtStatusMeterGauge$newInstance$$$($context$$700$$, $callback$$144$$, $callbackObj$$114$$) {
  var $gauge$$58$$ = new D.$DvtStatusMeterGauge$$;
  $gauge$$58$$.Init($context$$700$$, $callback$$144$$, $callbackObj$$114$$);
  return $gauge$$58$$
};
D.$DvtStatusMeterGauge$$.newInstance = D.$DvtStatusMeterGauge$newInstance$$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtStatusMeterGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$701$$, $callback$$145$$, $callbackObj$$115$$) {
  D.$DvtStatusMeterGauge$$.$superclass$.Init.call(this, $context$$701$$, $callback$$145$$, $callbackObj$$115$$);
  this.$Defaults$ = new D.$DvtStatusMeterGaugeDefaults$$;
  this.$__axisInfo$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$249$$) {
  D.$DvtStatusMeterGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$249$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$166$$, $width$$154$$, $height$$129$$) {
  D.$DvtStatusMeterGaugeRenderer$$.$render$(this, $container$$166$$, $width$$154$$, $height$$129$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = function $$JSCompiler_prototypeAlias$$$$CreateAnimationOnDisplay$$($objs$$55$$, $animatedObjs$$1_animationType$$1$$, $animationDuration$$5$$) {
  $animatedObjs$$1_animationType$$1$$ = [];
  for(var $i$$829$$ = 0;$i$$829$$ < $objs$$55$$.length;$i$$829$$++) {
    var $obj$$353$$ = $objs$$55$$[$i$$829$$], $endState$$15$$ = $obj$$353$$.$getAnimationParams$();
    "horizontal" == this.$Options$.orientation || "vertical" == this.$Options$.orientation ? $obj$$353$$.$setAnimationParams$([$endState$$15$$[0], $endState$$15$$[0], $endState$$15$$[2], $endState$$15$$[3]]) : $obj$$353$$.$setAnimationParams$([$endState$$15$$[0], $endState$$15$$[1], 0, $endState$$15$$[3], $endState$$15$$[4]]);
    var $animation$$4$$ = new D.$DvtCustomAnimation$$(this.$_context$, $obj$$353$$, $animationDuration$$5$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$4$$.$_animator$, "typeNumberArray", $obj$$353$$, $obj$$353$$.$getAnimationParams$, $obj$$353$$.$setAnimationParams$, $endState$$15$$);
    $animation$$4$$.$_animator$.$setEasing$(function($objs$$55$$) {
      return(0,D.$DvtEasing$backOut$$)($objs$$55$$, 0.7)
    });
    $animatedObjs$$1_animationType$$1$$.push($animation$$4$$)
  }
  return new D.$DvtParallelPlayable$$(this.$_context$, $animatedObjs$$1_animationType$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$313$$, $y$$279$$) {
  if("horizontal" == this.$Options$.orientation) {
    return this.$__axisInfo$.$getBoundedValueAt$($x$$313$$)
  }
  if("vertical" == this.$Options$.orientation) {
    return this.$__axisInfo$.$getBoundedValueAt$($y$$279$$)
  }
  if("circular" == this.$Options$.orientation) {
    var $angle$$57$$ = D.$DvtMath$$.$radsToDegrees$(window.Math.atan2($y$$279$$ - this.$Height$ / 2, $x$$313$$ - this.$Width$ / 2)) - 270, $angle$$57$$ = ($angle$$57$$ + 720) % 360;
    0 <= $angle$$57$$ && 360 >= $angle$$57$$ || ($angle$$57$$ = 360 < $angle$$57$$ ? 360 - $angle$$57$$ < $angle$$57$$ - 360 ? 0 : 360 : 0 - $angle$$57$$ < $angle$$57$$ ? 0 : 360);
    if((0,D.$DvtAgent$isRightToLeft$$)(this.$_context$)) {
      for($angle$$57$$ = 360 - $angle$$57$$;0 > $angle$$57$$;) {
        $angle$$57$$ += 360
      }
    }
    var $minValue$$17$$ = this.$Options$.min;
    return $angle$$57$$ / 360 * (this.$Options$.max - $minValue$$17$$) + $minValue$$17$$
  }
};
D.$DvtStatusMeterGaugeDefaults$$ = function $$DvtStatusMeterGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtStatusMeterGaugeDefaults$VERSION_1$$, alta:D.$DvtStatusMeterGaugeDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtStatusMeterGaugeDefaults");
D.$DvtStatusMeterGaugeDefaults$SKIN_ALTA$$ = {color:"#393737", metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, plotArea:{color:"#f5f6f7", borderColor:"#D6DFE6"}};
D.$DvtStatusMeterGaugeDefaults$VERSION_1$$ = {color:"#313842", indicatorSize:1, metricLabel:{style:new D.$DvtCSSStyle$$("color: #333333;")}, orientation:"horizontal", plotArea:{color:"#AAAAAA", borderColor:"#C6C6C6", rendered:"auto"}, thresholdDisplay:"onIndicator"};
D.$DvtStatusMeterGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeRenderer$$, D.$DvtObj$$, "DvtStatusMeterGaugeRenderer");
D.$DvtStatusMeterGaugeRenderer$$.$render$ = function $$DvtStatusMeterGaugeRenderer$$$$render$$($gauge$$47$$, $container$$122$$, $bounds$$85_width$$114$$, $height$$95$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$47$$)) {
    var $maxDiameter$$1_options$$215$$ = $gauge$$47$$.$__getOptions$(), $outerGap$$2$$ = $maxDiameter$$1_options$$215$$.__layout.outerGap;
    $bounds$$85_width$$114$$ = new D.$DvtRectangle$$($outerGap$$2$$, $outerGap$$2$$, $bounds$$85_width$$114$$ - 2 * $outerGap$$2$$, $height$$95$$ - 2 * $outerGap$$2$$);
    "horizontal" == $maxDiameter$$1_options$$215$$.orientation || "vertical" == $maxDiameter$$1_options$$215$$.orientation ? (D.$DvtStatusMeterGaugeRenderer$$.$_renderLabel$($gauge$$47$$, $container$$122$$, $bounds$$85_width$$114$$), D.$DvtStatusMeterGaugeRenderer$$.$_renderShape$($gauge$$47$$, $container$$122$$, $bounds$$85_width$$114$$)) : "circular" == $maxDiameter$$1_options$$215$$.orientation && ($maxDiameter$$1_options$$215$$ = window.Math.min($bounds$$85_width$$114$$.$w$, $bounds$$85_width$$114$$.$h$), 
    D.$DvtGaugeRenderer$$.$renderLabel$($gauge$$47$$, $container$$122$$, new D.$DvtRectangle$$($bounds$$85_width$$114$$.x + $bounds$$85_width$$114$$.$w$ / 2 - 0.325 * $maxDiameter$$1_options$$215$$, $bounds$$85_width$$114$$.y + $bounds$$85_width$$114$$.$h$ / 2 - 0.25 * $maxDiameter$$1_options$$215$$, 0.65 * $maxDiameter$$1_options$$215$$, 0.5 * $maxDiameter$$1_options$$215$$), D.$JSCompiler_alias_NULL$$), D.$DvtStatusMeterGaugeRenderer$$.$_renderCircularShape$($gauge$$47$$, $container$$122$$, $bounds$$85_width$$114$$))
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$47$$, $container$$122$$, new D.$DvtRectangle$$(0, 0, $bounds$$85_width$$114$$, $height$$95$$))
  }
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderCircularShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderCircularShape$$($gauge$$48$$, $container$$123_tooltip$$39$$, $bounds$$86_overlayRect$$1$$) {
  var $options$$216$$ = $gauge$$48$$.$__getOptions$(), $angleExtent$$10_max$$15_percentFill$$1$$ = 0, $value$$114$$ = $options$$216$$.value, $indicatorSize_referenceLineWidth_thresholds$$2$$ = $options$$216$$.thresholds, $maxDiameter$$2_referenceLineColor_totalWidth$$4$$ = window.Math.min($bounds$$86_overlayRect$$1$$.$w$, $bounds$$86_overlayRect$$1$$.$h$), $innerRadius$$5_referenceObjects$$1$$ = 0.3125 * $maxDiameter$$2_referenceLineColor_totalWidth$$4$$, $i$$543_outerRadius$$5$$ = 0.4625 * $maxDiameter$$2_referenceLineColor_totalWidth$$4$$, 
  $referenceLineStyle_startAngle$$11$$ = 1.5 * window.Math.PI, $angleExtent$$10_max$$15_percentFill$$1$$ = 2 * $angleExtent$$10_max$$15_percentFill$$1$$ * window.Math.PI;
  if($indicatorSize_referenceLineWidth_thresholds$$2$$ && "off" != $options$$216$$.plotArea.rendered && "all" == $options$$216$$.thresholdDisplay) {
    for(var $currentThresholdIndex$$ = 0;$currentThresholdIndex$$ < $indicatorSize_referenceLineWidth_thresholds$$2$$.length;$currentThresholdIndex$$++) {
      var $thresholdColor$$ = D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$48$$, $indicatorSize_referenceLineWidth_thresholds$$2$$[$currentThresholdIndex$$], $currentThresholdIndex$$), $angleExtent$$10_max$$15_percentFill$$1$$ = $indicatorSize_referenceLineWidth_thresholds$$2$$[$currentThresholdIndex$$].max ? $indicatorSize_referenceLineWidth_thresholds$$2$$[$currentThresholdIndex$$].max : $options$$216$$.max, $min$$15$$ = 0 == $currentThresholdIndex$$ ? $options$$216$$.min : $indicatorSize_referenceLineWidth_thresholds$$2$$[$currentThresholdIndex$$ - 
      1].max, $referenceLineStyle_startAngle$$11$$ = 1.5 * window.Math.PI + 2 * window.Math.PI * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$216$$, $options$$216$$.min, $min$$15$$), $angleExtent$$10_max$$15_percentFill$$1$$ = D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$216$$, $min$$15$$, $angleExtent$$10_max$$15_percentFill$$1$$), $angleExtent$$10_max$$15_percentFill$$1$$ = 2 * $angleExtent$$10_max$$15_percentFill$$1$$ * window.Math.PI;
      D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$48$$, $container$$123_tooltip$$39$$, $bounds$$86_overlayRect$$1$$, $referenceLineStyle_startAngle$$11$$, $angleExtent$$10_max$$15_percentFill$$1$$, $innerRadius$$5_referenceObjects$$1$$, $i$$543_outerRadius$$5$$, $thresholdColor$$, D.$JSCompiler_alias_FALSE$$)
    }
  }else {
    "off" != $options$$216$$.plotArea.rendered && (!("auto" == $options$$216$$.plotArea.rendered && "onIndicator" == $options$$216$$.thresholdDisplay) && "all" != $options$$216$$.thresholdDisplay) && ($thresholdColor$$ = D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$($gauge$$48$$), $referenceLineStyle_startAngle$$11$$ = 1.5 * window.Math.PI, $angleExtent$$10_max$$15_percentFill$$1$$ = 2 * window.Math.PI, D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$48$$, $container$$123_tooltip$$39$$, 
    $bounds$$86_overlayRect$$1$$, $referenceLineStyle_startAngle$$11$$, $angleExtent$$10_max$$15_percentFill$$1$$, $innerRadius$$5_referenceObjects$$1$$, $i$$543_outerRadius$$5$$, $thresholdColor$$, D.$JSCompiler_alias_TRUE$$))
  }
  if(($indicatorSize_referenceLineWidth_thresholds$$2$$ = $options$$216$$.indicatorSize) && 1 != $indicatorSize_referenceLineWidth_thresholds$$2$$) {
    $maxDiameter$$2_referenceLineColor_totalWidth$$4$$ *= 0.075 * (1 - $indicatorSize_referenceLineWidth_thresholds$$2$$), $innerRadius$$5_referenceObjects$$1$$ += $maxDiameter$$2_referenceLineColor_totalWidth$$4$$, $i$$543_outerRadius$$5$$ -= $maxDiameter$$2_referenceLineColor_totalWidth$$4$$
  }
  $referenceLineStyle_startAngle$$11$$ = 1.5 * window.Math.PI;
  $angleExtent$$10_max$$15_percentFill$$1$$ = D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$216$$, $options$$216$$.min, $value$$114$$);
  $angleExtent$$10_max$$15_percentFill$$1$$ = 2 * $angleExtent$$10_max$$15_percentFill$$1$$ * window.Math.PI;
  D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$($gauge$$48$$, $container$$123_tooltip$$39$$, $bounds$$86_overlayRect$$1$$, $referenceLineStyle_startAngle$$11$$, $angleExtent$$10_max$$15_percentFill$$1$$, $innerRadius$$5_referenceObjects$$1$$, $i$$543_outerRadius$$5$$, D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$48$$), D.$JSCompiler_alias_FALSE$$);
  if($innerRadius$$5_referenceObjects$$1$$ = $options$$216$$.referenceLines) {
    for($i$$543_outerRadius$$5$$ = 0;$i$$543_outerRadius$$5$$ < $innerRadius$$5_referenceObjects$$1$$.length;$i$$543_outerRadius$$5$$++) {
      $maxDiameter$$2_referenceLineColor_totalWidth$$4$$ = $innerRadius$$5_referenceObjects$$1$$[$i$$543_outerRadius$$5$$].color ? $innerRadius$$5_referenceObjects$$1$$[$i$$543_outerRadius$$5$$].color : "black", $indicatorSize_referenceLineWidth_thresholds$$2$$ = $innerRadius$$5_referenceObjects$$1$$[$i$$543_outerRadius$$5$$].lineWidth ? $innerRadius$$5_referenceObjects$$1$$[$i$$543_outerRadius$$5$$].lineWidth : 2, $referenceLineStyle_startAngle$$11$$ = $innerRadius$$5_referenceObjects$$1$$[$i$$543_outerRadius$$5$$].lineStyle, 
      $value$$114$$ = $innerRadius$$5_referenceObjects$$1$$[$i$$543_outerRadius$$5$$].value, window.angle = 1.5 * window.Math.PI + 2 * D.$DvtGaugeRenderer$$.$getFillPercentage$($options$$216$$, $options$$216$$.min, $value$$114$$) * window.Math.PI, D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$($gauge$$48$$, $container$$123_tooltip$$39$$, $bounds$$86_overlayRect$$1$$, $maxDiameter$$2_referenceLineColor_totalWidth$$4$$, $indicatorSize_referenceLineWidth_thresholds$$2$$, $referenceLineStyle_startAngle$$11$$)
    }
  }
  $bounds$$86_overlayRect$$1$$ = new D.$DvtRect$$($gauge$$48$$.$_context$, $bounds$$86_overlayRect$$1$$.x, $bounds$$86_overlayRect$$1$$.y, $bounds$$86_overlayRect$$1$$.$w$, $bounds$$86_overlayRect$$1$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($bounds$$86_overlayRect$$1$$);
  $container$$123_tooltip$$39$$.$addChild$($bounds$$86_overlayRect$$1$$);
  (($container$$123_tooltip$$39$$ = D.$DvtGaugeRenderer$$.$getTooltipString$($gauge$$48$$)) || $gauge$$48$$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) && $gauge$$48$$.$__getEventManager$().$associate$($bounds$$86_overlayRect$$1$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $container$$123_tooltip$$39$$, D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$48$$)))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderShape$$($gauge$$49$$, $container$$124_tooltip$$40$$, $axisArea_bounds$$87$$) {
  var $options$$217$$ = $gauge$$49$$.$__getOptions$(), $color$$50_isRTL$$21$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$49$$.$_context$), $isVert$$4$$ = "vertical" == $options$$217$$.orientation, $axisInfo$$7_axisOptions$$5$$ = {layout:{}};
  $axisInfo$$7_axisOptions$$5$$.layout.gapRatio = 0;
  $axisInfo$$7_axisOptions$$5$$.timeAxisType = "disabled";
  $axisInfo$$7_axisOptions$$5$$.position = $isVert$$4$$ ? "left" : "bottom";
  $axisInfo$$7_axisOptions$$5$$.min = $options$$217$$.min;
  $axisInfo$$7_axisOptions$$5$$.max = $options$$217$$.max;
  $axisInfo$$7_axisOptions$$5$$.dataMin = $options$$217$$.min;
  $axisInfo$$7_axisOptions$$5$$.dataMax = $options$$217$$.max;
  $axisInfo$$7_axisOptions$$5$$.tickLabel = {rendered:"off"};
  $axisInfo$$7_axisOptions$$5$$ = (0,D.$DvtAxisInfo$newInstance$$)($gauge$$49$$.$_context$, $axisInfo$$7_axisOptions$$5$$, $axisArea_bounds$$87$$);
  $gauge$$49$$.$__axisInfo$ = $axisInfo$$7_axisOptions$$5$$;
  var $baseline$$6_indicatorY2_overlay$$14_referenceObjects$$2$$ = 0;
  0 >= $options$$217$$.max ? $baseline$$6_indicatorY2_overlay$$14_referenceObjects$$2$$ = $options$$217$$.max : 0 <= $options$$217$$.min && ($baseline$$6_indicatorY2_overlay$$14_referenceObjects$$2$$ = $options$$217$$.min);
  var $baselineCoord$$7_gradientAngle$$ = $axisInfo$$7_axisOptions$$5$$.$getCoordAt$($baseline$$6_indicatorY2_overlay$$14_referenceObjects$$2$$);
  "off" != $options$$217$$.plotArea.rendered && !("auto" == $options$$217$$.plotArea.rendered && "onIndicator" == $options$$217$$.thresholdDisplay) && ($baselineCoord$$7_gradientAngle$$ = $axisInfo$$7_axisOptions$$5$$.$getUnboundedCoordAt$($options$$217$$.min));
  var $endCoord$$6_i$$544_plotAreaColor_shape$$38$$ = $axisInfo$$7_axisOptions$$5$$.$getUnboundedCoordAt$($options$$217$$.value), $endCoord$$6_i$$544_plotAreaColor_shape$$38$$ = $isVert$$4$$ ? window.Math.max($axisArea_bounds$$87$$.y, window.Math.min($axisArea_bounds$$87$$.y + $axisArea_bounds$$87$$.$h$, $endCoord$$6_i$$544_plotAreaColor_shape$$38$$)) : window.Math.max($axisArea_bounds$$87$$.x, window.Math.min($axisArea_bounds$$87$$.x + $axisArea_bounds$$87$$.$w$, $endCoord$$6_i$$544_plotAreaColor_shape$$38$$)), 
  $bRender$$2_plotAreaEnd_shadow$$7_stroke$$76_value$$115$$ = 0, $bRender$$2_plotAreaEnd_shadow$$7_stroke$$76_value$$115$$ = 0 > $options$$217$$.min && 0 > $options$$217$$.value ? $axisInfo$$7_axisOptions$$5$$.$getUnboundedCoordAt$($options$$217$$.min) : $axisInfo$$7_axisOptions$$5$$.$getUnboundedCoordAt$($options$$217$$.max), $arColors$$17_gradient$$9_plotX1$$, $plotX2$$, $plotY1$$, $plotY2$$, $indicatorSize$$1_indicatorX1$$, $indicatorX2$$, $indicatorY1$$, $baseline$$6_indicatorY2_overlay$$14_referenceObjects$$2$$ = 
  0;
  $isVert$$4$$ ? ($arColors$$17_gradient$$9_plotX1$$ = $axisArea_bounds$$87$$.x, $plotX2$$ = $axisArea_bounds$$87$$.x + $axisArea_bounds$$87$$.$w$, $plotY2$$ = $baselineCoord$$7_gradientAngle$$, $plotY1$$ = window.Math.min($axisArea_bounds$$87$$.y, window.Math.min($axisArea_bounds$$87$$.y + $axisArea_bounds$$87$$.$h$, $bRender$$2_plotAreaEnd_shadow$$7_stroke$$76_value$$115$$)), $indicatorSize$$1_indicatorX1$$ = $axisArea_bounds$$87$$.x + (1 - $options$$217$$.indicatorSize) / 2 * $axisArea_bounds$$87$$.$w$ + 
  0.5, $indicatorX2$$ = $axisArea_bounds$$87$$.x + $axisArea_bounds$$87$$.$w$ * (1 - (1 - $options$$217$$.indicatorSize) / 2) - 0.5, $baseline$$6_indicatorY2_overlay$$14_referenceObjects$$2$$ = $baselineCoord$$7_gradientAngle$$ - 0.5, $indicatorY1$$ = $endCoord$$6_i$$544_plotAreaColor_shape$$38$$ + 0.5) : ($arColors$$17_gradient$$9_plotX1$$ = $baselineCoord$$7_gradientAngle$$, $plotX2$$ = window.Math.max($axisArea_bounds$$87$$.x, window.Math.max($axisArea_bounds$$87$$.x + $axisArea_bounds$$87$$.$w$, 
  $bRender$$2_plotAreaEnd_shadow$$7_stroke$$76_value$$115$$)), $plotY1$$ = $axisArea_bounds$$87$$.y, $plotY2$$ = $axisArea_bounds$$87$$.y + $axisArea_bounds$$87$$.$h$, $indicatorSize$$1_indicatorX1$$ = $color$$50_isRTL$$21$$ ? $baselineCoord$$7_gradientAngle$$ - 0.5 : $baselineCoord$$7_gradientAngle$$ + 0.5, $indicatorX2$$ = $color$$50_isRTL$$21$$ ? $endCoord$$6_i$$544_plotAreaColor_shape$$38$$ + 0.5 : $endCoord$$6_i$$544_plotAreaColor_shape$$38$$ - 0.5, $indicatorY1$$ = $axisArea_bounds$$87$$.y + 
  (1 - $options$$217$$.indicatorSize) / 2 * $axisArea_bounds$$87$$.$h$ + 0.5, $baseline$$6_indicatorY2_overlay$$14_referenceObjects$$2$$ = $axisArea_bounds$$87$$.y + $axisArea_bounds$$87$$.$h$ * (1 - (1 - $options$$217$$.indicatorSize) / 2) - 0.5);
  $bRender$$2_plotAreaEnd_shadow$$7_stroke$$76_value$$115$$ = D.$JSCompiler_alias_TRUE$$;
  $endCoord$$6_i$$544_plotAreaColor_shape$$38$$ == $baselineCoord$$7_gradientAngle$$ && ($bRender$$2_plotAreaEnd_shadow$$7_stroke$$76_value$$115$$ = D.$JSCompiler_alias_FALSE$$);
  var $borderColor$$32$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($gauge$$49$$), $plotAreaBorderColor$$ = $options$$217$$.plotArea.borderColor, $thresholds$$3$$ = $options$$217$$.thresholds, $baselineCoord$$7_gradientAngle$$ = $isVert$$4$$ ? 0 : 270;
  if($thresholds$$3$$ && "off" != $options$$217$$.plotArea.rendered && "all" == $options$$217$$.thresholdDisplay) {
    for($endCoord$$6_i$$544_plotAreaColor_shape$$38$$ = $thresholds$$3$$.length - 1;0 <= $endCoord$$6_i$$544_plotAreaColor_shape$$38$$;$endCoord$$6_i$$544_plotAreaColor_shape$$38$$--) {
      var $currentThresholdIndex$$1$$ = $endCoord$$6_i$$544_plotAreaColor_shape$$38$$, $plotArea$$3$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$49$$, $gauge$$49$$.$_context$, $arColors$$17_gradient$$9_plotX1$$, $plotX2$$, $plotY1$$, $plotY2$$, D.$JSCompiler_alias_TRUE$$), $cp$$6$$ = new D.$DvtClipPath$$("pacp" + $gauge$$49$$.getId());
      $endCoord$$6_i$$544_plotAreaColor_shape$$38$$ == $thresholds$$3$$.length - 1 ? $isVert$$4$$ ? (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$6$$, 0, 0, $axisArea_bounds$$87$$.$w$ + 2, $plotY2$$ - $plotY1$$ + 2, 0, 0) : $color$$50_isRTL$$21$$ ? (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$6$$, $axisInfo$$7_axisOptions$$5$$.$getUnboundedCoordAt$($options$$217$$.max), 0, $axisArea_bounds$$87$$.$w$ + 2, $plotY2$$ - $plotY1$$ + 2, 0, 0) : (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$6$$, 0, 
      0, $axisArea_bounds$$87$$.$w$ + 2, $plotY2$$ - $plotY1$$ + 2, 0, 0) : $isVert$$4$$ ? (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$6$$, 0, $axisInfo$$7_axisOptions$$5$$.$getUnboundedCoordAt$($options$$217$$.max), $plotX2$$ - $arColors$$17_gradient$$9_plotX1$$ + 2, 1 * window.Math.abs($options$$217$$.max - $thresholds$$3$$[$thresholds$$3$$.length - 2 - $currentThresholdIndex$$1$$].max) / window.Math.abs($options$$217$$.min - $options$$217$$.max) * $axisArea_bounds$$87$$.$h$, 0, 0) : $color$$50_isRTL$$21$$ ? 
      (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$6$$, 0, 0, 1 * ($options$$217$$.max - ($thresholds$$3$$[$thresholds$$3$$.length - 2 - $currentThresholdIndex$$1$$].max == D.$JSCompiler_alias_NULL$$ ? 100 : $thresholds$$3$$[$thresholds$$3$$.length - 2 - $currentThresholdIndex$$1$$].max)) / window.Math.abs($options$$217$$.min - $options$$217$$.max) * $axisArea_bounds$$87$$.$w$, $plotY2$$ - $plotY1$$ + 2, 0, 0) : (0,D.$JSCompiler_StaticMethods_addRect$$)($cp$$6$$, 0, 0, 1 * window.Math.abs($thresholds$$3$$[$currentThresholdIndex$$1$$].max - 
      $options$$217$$.min) / window.Math.abs($options$$217$$.min - $options$$217$$.max) * $axisArea_bounds$$87$$.$w$, $plotY2$$ - $plotY1$$ + 2, 0, 0);
      (0,D.$JSCompiler_StaticMethods_setClipPath$$)($plotArea$$3$$, $cp$$6$$);
      if($color$$50_isRTL$$21$$ || $isVert$$4$$) {
        $currentThresholdIndex$$1$$ = $thresholds$$3$$.length - 1 - $endCoord$$6_i$$544_plotAreaColor_shape$$38$$
      }
      $plotArea$$3$$.$setSolidFill$(D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$49$$, $thresholds$$3$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$));
      $plotArea$$3$$.$setSolidStroke$($plotAreaBorderColor$$);
      D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($gauge$$49$$, $container$$124_tooltip$$40$$, $plotArea$$3$$, D.$DvtGaugeStyleUtils$$.$getThresholdColor$($gauge$$49$$, $thresholds$$3$$[$currentThresholdIndex$$1$$], $currentThresholdIndex$$1$$), $baselineCoord$$7_gradientAngle$$)
    }
  }else {
    "off" != $options$$217$$.plotArea.rendered && (!("auto" == $options$$217$$.plotArea.rendered && "onIndicator" == $options$$217$$.thresholdDisplay) && "all" != $options$$217$$.thresholdDisplay) && ($plotArea$$3$$ = $isVert$$4$$ ? D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$49$$, $gauge$$49$$.$_context$, $arColors$$17_gradient$$9_plotX1$$, $plotX2$$, $axisInfo$$7_axisOptions$$5$$.$getUnboundedCoordAt$($options$$217$$.max), $axisInfo$$7_axisOptions$$5$$.$getUnboundedCoordAt$($options$$217$$.min), 
    D.$JSCompiler_alias_TRUE$$) : D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$49$$, $gauge$$49$$.$_context$, $axisInfo$$7_axisOptions$$5$$.$getUnboundedCoordAt$($options$$217$$.min), $axisInfo$$7_axisOptions$$5$$.$getUnboundedCoordAt$($options$$217$$.max), $plotY1$$, $plotY2$$, D.$JSCompiler_alias_TRUE$$), $endCoord$$6_i$$544_plotAreaColor_shape$$38$$ = D.$DvtGaugeStyleUtils$$.$getPlotAreaColor$($gauge$$49$$), $plotArea$$3$$.$setSolidFill$($endCoord$$6_i$$544_plotAreaColor_shape$$38$$), 
    $plotArea$$3$$.$setSolidStroke$($plotAreaBorderColor$$), D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$($gauge$$49$$, $container$$124_tooltip$$40$$, $plotArea$$3$$, $endCoord$$6_i$$544_plotAreaColor_shape$$38$$, $baselineCoord$$7_gradientAngle$$))
  }
  $endCoord$$6_i$$544_plotAreaColor_shape$$38$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$49$$, $gauge$$49$$.$_context$, $indicatorSize$$1_indicatorX1$$, $indicatorX2$$, $indicatorY1$$, $baseline$$6_indicatorY2_overlay$$14_referenceObjects$$2$$, D.$JSCompiler_alias_TRUE$$);
  $gauge$$49$$.$__shapes$.push($endCoord$$6_i$$544_plotAreaColor_shape$$38$$);
  $color$$50_isRTL$$21$$ = D.$DvtGaugeStyleUtils$$.$getColor$($gauge$$49$$);
  !(0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$49$$) && "none" != $options$$217$$.visualEffects ? ($arColors$$17_gradient$$9_plotX1$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$50_isRTL$$21$$, -0.09, 0.04), D.$DvtColorUtils$$.$adjustHSL$($color$$50_isRTL$$21$$, -0.04, -0.05)], $arColors$$17_gradient$$9_plotX1$$ = new D.$DvtLinearGradientFill$$($baselineCoord$$7_gradientAngle$$, $arColors$$17_gradient$$9_plotX1$$, [1, 1], [0, 1]), $endCoord$$6_i$$544_plotAreaColor_shape$$38$$.$setFill$($arColors$$17_gradient$$9_plotX1$$)) : 
  $endCoord$$6_i$$544_plotAreaColor_shape$$38$$.$setSolidFill$($color$$50_isRTL$$21$$);
  $borderColor$$32$$ && $endCoord$$6_i$$544_plotAreaColor_shape$$38$$.$setSolidStroke$($borderColor$$32$$);
  $bRender$$2_plotAreaEnd_shadow$$7_stroke$$76_value$$115$$ && $container$$124_tooltip$$40$$.$addChild$($endCoord$$6_i$$544_plotAreaColor_shape$$38$$);
  $baseline$$6_indicatorY2_overlay$$14_referenceObjects$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_createShape$($gauge$$49$$, $gauge$$49$$.$_context$, $indicatorSize$$1_indicatorX1$$, $indicatorX2$$, $indicatorY1$$, $baseline$$6_indicatorY2_overlay$$14_referenceObjects$$2$$, D.$JSCompiler_alias_TRUE$$);
  D.$DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$($gauge$$49$$, $container$$124_tooltip$$40$$, $baseline$$6_indicatorY2_overlay$$14_referenceObjects$$2$$, $bRender$$2_plotAreaEnd_shadow$$7_stroke$$76_value$$115$$, $baselineCoord$$7_gradientAngle$$);
  if($baseline$$6_indicatorY2_overlay$$14_referenceObjects$$2$$ = $options$$217$$.referenceLines) {
    for($endCoord$$6_i$$544_plotAreaColor_shape$$38$$ = 0;$endCoord$$6_i$$544_plotAreaColor_shape$$38$$ < $baseline$$6_indicatorY2_overlay$$14_referenceObjects$$2$$.length;$endCoord$$6_i$$544_plotAreaColor_shape$$38$$++) {
      $color$$50_isRTL$$21$$ = $baseline$$6_indicatorY2_overlay$$14_referenceObjects$$2$$[$endCoord$$6_i$$544_plotAreaColor_shape$$38$$].color ? $baseline$$6_indicatorY2_overlay$$14_referenceObjects$$2$$[$endCoord$$6_i$$544_plotAreaColor_shape$$38$$].color : "white", $bRender$$2_plotAreaEnd_shadow$$7_stroke$$76_value$$115$$ = $baseline$$6_indicatorY2_overlay$$14_referenceObjects$$2$$[$endCoord$$6_i$$544_plotAreaColor_shape$$38$$].value, $indicatorSize$$1_indicatorX1$$ = $options$$217$$.indicatorSize, 
      $isVert$$4$$ ? (window.referenceLineSize = ((1 - $indicatorSize$$1_indicatorX1$$) / 2 + $indicatorSize$$1_indicatorX1$$) * $axisArea_bounds$$87$$.$w$, window.xCoord = $axisArea_bounds$$87$$.x + (1 - $indicatorSize$$1_indicatorX1$$) / 4 * $axisArea_bounds$$87$$.$w$, window.yCoord = $axisInfo$$7_axisOptions$$5$$.$getUnboundedCoordAt$($bRender$$2_plotAreaEnd_shadow$$7_stroke$$76_value$$115$$), window.referenceLine = new D.$DvtLine$$($gauge$$49$$.$_context$, window.xCoord, window.yCoord, window.xCoord + 
      window.referenceLineSize, window.yCoord)) : (window.referenceLineSize = ((1 - $indicatorSize$$1_indicatorX1$$) / 2 + $indicatorSize$$1_indicatorX1$$) * $axisArea_bounds$$87$$.$h$, window.xCoord = $axisInfo$$7_axisOptions$$5$$.$getUnboundedCoordAt$($bRender$$2_plotAreaEnd_shadow$$7_stroke$$76_value$$115$$), window.yCoord = $axisArea_bounds$$87$$.y + (1 - $indicatorSize$$1_indicatorX1$$) / 4 * $axisArea_bounds$$87$$.$h$, window.referenceLine = new D.$DvtLine$$($gauge$$49$$.$_context$, window.xCoord, 
      window.yCoord, window.xCoord, window.yCoord + window.referenceLineSize)), $bRender$$2_plotAreaEnd_shadow$$7_stroke$$76_value$$115$$ = new D.$DvtSolidStroke$$($color$$50_isRTL$$21$$, 1, $baseline$$6_indicatorY2_overlay$$14_referenceObjects$$2$$[$endCoord$$6_i$$544_plotAreaColor_shape$$38$$].lineWidth ? $baseline$$6_indicatorY2_overlay$$14_referenceObjects$$2$$[$endCoord$$6_i$$544_plotAreaColor_shape$$38$$].lineWidth : 2), $baseline$$6_indicatorY2_overlay$$14_referenceObjects$$2$$[$endCoord$$6_i$$544_plotAreaColor_shape$$38$$].lineStyle && 
      $bRender$$2_plotAreaEnd_shadow$$7_stroke$$76_value$$115$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($baseline$$6_indicatorY2_overlay$$14_referenceObjects$$2$$[$endCoord$$6_i$$544_plotAreaColor_shape$$38$$].lineStyle)), window.referenceLine.$setStroke$($bRender$$2_plotAreaEnd_shadow$$7_stroke$$76_value$$115$$), $bRender$$2_plotAreaEnd_shadow$$7_stroke$$76_value$$115$$ = new D.$DvtShadow$$(D.$DvtColorUtils$$.$makeRGBA$(0, 0, 0, 0.8), 0.75, 3, 3, 50, 1, 2, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_FALSE$$, 
      D.$JSCompiler_alias_FALSE$$), $container$$124_tooltip$$40$$.$addChild$(window.referenceLine), (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(window.referenceLine, $bRender$$2_plotAreaEnd_shadow$$7_stroke$$76_value$$115$$)
    }
  }
  $axisArea_bounds$$87$$ = new D.$DvtRect$$($gauge$$49$$.$_context$, $axisArea_bounds$$87$$.x, $axisArea_bounds$$87$$.y, $axisArea_bounds$$87$$.$w$, $axisArea_bounds$$87$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($axisArea_bounds$$87$$);
  $container$$124_tooltip$$40$$.$addChild$($axisArea_bounds$$87$$);
  (($container$$124_tooltip$$40$$ = D.$DvtGaugeRenderer$$.$getTooltipString$($gauge$$49$$)) || $options$$217$$.readOnly === D.$JSCompiler_alias_FALSE$$) && $gauge$$49$$.$__getEventManager$().$associate$($axisArea_bounds$$87$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $container$$124_tooltip$$40$$, $color$$50_isRTL$$21$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_createShape$ = function $$DvtStatusMeterGaugeRenderer$$$$_createShape$$($gauge$$50$$, $context$$315$$, $x1$$24$$, $x2$$23$$, $y1$$22$$, $y2$$21$$, $roundCorners$$3$$) {
  return new window.DvtStatusMeterGaugeIndicator($gauge$$50$$, $context$$315$$, $x1$$24$$, $x2$$23$$, $y1$$22$$, $y2$$21$$, $roundCorners$$3$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderVisualEffects$$($gauge$$51$$, $container$$125$$, $shape$$39$$, $bRender$$3$$, $gradient$$10_gradientAngle$$1$$) {
  "none" != $gauge$$51$$.$__getOptions$().visualEffects && (0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($gauge$$51$$) && ($gradient$$10_gradientAngle$$1$$ = new D.$DvtLinearGradientFill$$($gradient$$10_gradientAngle$$1$$, ["#FFFFFF", "#FFFFFF", "#FFFFFF"], [0.5, 0.3125, 0], [0, 0.3, 1]), $shape$$39$$.$setFill$($gradient$$10_gradientAngle$$1$$), $gauge$$51$$.$__shapes$.push($shape$$39$$), $shape$$39$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $bRender$$3$$ && $container$$125$$.$addChild$($shape$$39$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderPlotAreaVisualEffects$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderPlotAreaVisualEffects$$($arColors$$19_gauge$$52$$, $container$$126$$, $shape$$40$$, $color$$51$$, $gradient$$11_gradientAngle$$2$$) {
  var $options$$219$$ = $arColors$$19_gauge$$52$$.$__getOptions$();
  $shape$$40$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
  $container$$126$$.$addChild$($shape$$40$$);
  "none" != $options$$219$$.visualEffects && ((0,D.$DvtGaugeDefaults$isSkyrosSkin$$)($arColors$$19_gauge$$52$$) ? ($arColors$$19_gauge$$52$$ = [D.$DvtColorUtils$$.$getDarker$($color$$51$$, 0.9), $color$$51$$, D.$DvtColorUtils$$.$getBrighter$($color$$51$$)], $gradient$$11_gradientAngle$$2$$ = new D.$DvtLinearGradientFill$$($gradient$$11_gradientAngle$$2$$, $arColors$$19_gauge$$52$$, [1, 1, 1], [0, 0.04, 0.73])) : ($arColors$$19_gauge$$52$$ = [D.$DvtColorUtils$$.$adjustHSL$($color$$51$$, -0.04, -0.05), 
  D.$DvtColorUtils$$.$adjustHSL$($color$$51$$, -0.09, 0.04)], $gradient$$11_gradientAngle$$2$$ = new D.$DvtLinearGradientFill$$($gradient$$11_gradientAngle$$2$$, $arColors$$19_gauge$$52$$, [1, 1], [0, 1])), $shape$$40$$.$setFill$($gradient$$11_gradientAngle$$2$$))
};
D.$DvtStatusMeterGaugeRenderer$$.$_renderLabel$ = function $$DvtStatusMeterGaugeRenderer$$$$_renderLabel$$($gauge$$53_minLabelDims$$1$$, $container$$127$$, $bounds$$88$$) {
  var $options$$220$$ = $gauge$$53_minLabelDims$$1$$.$__getOptions$(), $isRTL$$22_labelBounds$$10$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$53_minLabelDims$$1$$.$_context$), $isVert$$5_minValue$$14_size$$38$$ = "vertical" == $options$$220$$.orientation, $label$$78$$ = new D.$DvtOutputText$$($gauge$$53_minLabelDims$$1$$.$_context$, ""), $labelString$$7$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$220$$.value, $gauge$$53_minLabelDims$$1$$), $labelGap$$1$$ = $options$$220$$.__layout.labelGap;
  $label$$78$$.$setCSSStyle$($options$$220$$.metricLabel.style);
  if($isVert$$5_minValue$$14_size$$38$$ && "on" == $options$$220$$.metricLabel.rendered) {
    var $alignCoord_bound$$6_maxValue$$15$$ = 0 < $options$$220$$.max ? $options$$220$$.max : $options$$220$$.min, $alignCoord_bound$$6_maxValue$$15$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($alignCoord_bound$$6_maxValue$$15$$, $gauge$$53_minLabelDims$$1$$), $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$ = new D.$DvtOutputText$$($gauge$$53_minLabelDims$$1$$.$_context$, $alignCoord_bound$$6_maxValue$$15$$);
    $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.$setCSSStyle$($options$$220$$.metricLabel.style);
    $isRTL$$22_labelBounds$$10$$ = new D.$DvtRectangle$$($bounds$$88$$.x, $bounds$$88$$.y + 0.8 * $bounds$$88$$.$h$, $bounds$$88$$.$w$, 0.2 * $bounds$$88$$.$h$);
    $isVert$$5_minValue$$14_size$$38$$ = ($isVert$$5_minValue$$14_size$$38$$ = $options$$220$$.metricLabel.style.$getStyle$("font-size")) ? (0,window.parseInt)($isVert$$5_minValue$$14_size$$38$$) : $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.$getOptimalFontSize$($isRTL$$22_labelBounds$$10$$);
    $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$ = $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.$measureDimensions$();
    $bounds$$88$$.$h$ -= $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.$h$;
    window.labelSpace = $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.$w$;
    $label$$78$$.$setFontSize$($isVert$$5_minValue$$14_size$$38$$);
    $label$$78$$.$setTextString$($labelString$$7$$);
    $label$$78$$.$setX$($bounds$$88$$.x + $bounds$$88$$.$w$ / 2);
    $label$$78$$.$setY$($bounds$$88$$.y + $bounds$$88$$.$h$);
    $bounds$$88$$.$h$ -= $labelGap$$1$$;
    $label$$78$$.$alignCenter$();
    D.$DvtTextUtils$$.$fitText$($label$$78$$, $bounds$$88$$.$w$, $bounds$$88$$.$h$, $container$$127$$)
  }else {
    if(!$isVert$$5_minValue$$14_size$$38$$ && "on" == $options$$220$$.metricLabel.rendered) {
      var $isVert$$5_minValue$$14_size$$38$$ = ($isVert$$5_minValue$$14_size$$38$$ = $options$$220$$.metricLabel.style.$getStyle$("font-size")) ? (0,window.parseInt)($isVert$$5_minValue$$14_size$$38$$) : 13, $maxString$$3_minLabel$$2$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$220$$.min, $gauge$$53_minLabelDims$$1$$), $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$220$$.max, $gauge$$53_minLabelDims$$1$$), $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$ = 
      window.Math.max($longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.toString().length, $maxString$$3_minLabel$$2$$.toString().length), $maxString$$3_minLabel$$2$$ = "";
      "percent" == $options$$220$$.metricLabel.textType && ($longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$ = 3, $maxString$$3_minLabel$$2$$ += "%");
      for(var $i$$545$$ = 0;$i$$545$$ < $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$;$i$$545$$++) {
        $maxString$$3_minLabel$$2$$ += "0"
      }
      $label$$78$$.$setTextString$($maxString$$3_minLabel$$2$$);
      18 > $bounds$$88$$.$h$ && ($isVert$$5_minValue$$14_size$$38$$ = $label$$78$$.$getOptimalFontSize$($bounds$$88$$));
      $label$$78$$.$setFontSize$($isVert$$5_minValue$$14_size$$38$$);
      if(0 < $options$$220$$.max || "off" != $options$$220$$.plotArea.rendered || !("auto" == $options$$220$$.plotArea.rendered && "onIndicator" == $options$$220$$.thresholdDisplay)) {
        $alignCoord_bound$$6_maxValue$$15$$ = 0 < $options$$220$$.max ? $options$$220$$.max : $options$$220$$.min, $alignCoord_bound$$6_maxValue$$15$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($alignCoord_bound$$6_maxValue$$15$$, $gauge$$53_minLabelDims$$1$$), $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$ = new D.$DvtOutputText$$($gauge$$53_minLabelDims$$1$$.$_context$, $alignCoord_bound$$6_maxValue$$15$$), $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.$setCSSStyle$($options$$220$$.metricLabel.style), 
        $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.$setFontSize$($isVert$$5_minValue$$14_size$$38$$), $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$ = $label$$78$$.$measureDimensions$(), $alignCoord_bound$$6_maxValue$$15$$ = $isRTL$$22_labelBounds$$10$$ ? $bounds$$88$$.x + $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.$w$ : $bounds$$88$$.x + $bounds$$88$$.$w$, window.labelSpace = $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.$w$, $isRTL$$22_labelBounds$$10$$ && ($bounds$$88$$.x += $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.$w$ + 
        $labelGap$$1$$), $bounds$$88$$.$w$ -= $longestLabel$$3_maxLabel$$2_maxLabelDims$$1$$.$w$ + $labelGap$$1$$
      }
      if(0 > $options$$220$$.min && "on" != $options$$220$$.plotArea.rendered && !("auto" == $options$$220$$.plotArea.rendered && "onIndicator" == $options$$220$$.thresholdDisplay)) {
        $isVert$$5_minValue$$14_size$$38$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($options$$220$$.min, $gauge$$53_minLabelDims$$1$$);
        $maxString$$3_minLabel$$2$$ = new D.$DvtOutputText$$($gauge$$53_minLabelDims$$1$$.$_context$, $isVert$$5_minValue$$14_size$$38$$);
        $maxString$$3_minLabel$$2$$.$setCSSStyle$($options$$220$$.metricLabel.style);
        $gauge$$53_minLabelDims$$1$$ = $maxString$$3_minLabel$$2$$.$measureDimensions$();
        if(0 > $options$$220$$.value || 0 >= $options$$220$$.max) {
          $alignCoord_bound$$6_maxValue$$15$$ = $isRTL$$22_labelBounds$$10$$ ? $bounds$$88$$.x + $bounds$$88$$.$w$ : $bounds$$88$$.x + $gauge$$53_minLabelDims$$1$$.$w$, window.labelSpace = $gauge$$53_minLabelDims$$1$$.$w$
        }
        $isRTL$$22_labelBounds$$10$$ || ($bounds$$88$$.x += $gauge$$53_minLabelDims$$1$$.$w$ + $labelGap$$1$$);
        $bounds$$88$$.$w$ -= $gauge$$53_minLabelDims$$1$$.$w$ + $labelGap$$1$$
      }
      $label$$78$$.$setTextString$($labelString$$7$$);
      $label$$78$$.$setX$($alignCoord_bound$$6_maxValue$$15$$);
      $label$$78$$.$setY$($bounds$$88$$.y + $bounds$$88$$.$h$ / 2);
      $label$$78$$.$alignMiddle$();
      $label$$78$$.$alignRight$();
      D.$DvtTextUtils$$.$fitText$($label$$78$$, window.labelSpace, $bounds$$88$$.$h$, $container$$127$$)
    }
  }
};
D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_calcPointOnArc$$($bounds$$89$$, $radius$$25$$, $angle$$34$$) {
  return{x:window.Math.cos($angle$$34$$) * $radius$$25$$ + $bounds$$89$$.$w$ / 2 + $bounds$$89$$.x, y:window.Math.sin($angle$$34$$) * $radius$$25$$ + $bounds$$89$$.$h$ / 2 + $bounds$$89$$.y}
};
D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularArc$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularArc$$($borderColor$$33_gauge$$54$$, $container$$128$$, $bounds$$90_shape$$41$$, $startAngle$$12$$, $angleExtent$$11$$, $innerRadius$$6$$, $outerRadius$$6$$, $color$$52$$, $isPlotArea$$) {
  var $context$$316$$ = $borderColor$$33_gauge$$54$$.$_context$;
  (0,D.$DvtAgent$isRightToLeft$$)($borderColor$$33_gauge$$54$$.$_context$) && ($startAngle$$12$$ = window.Math.PI - $startAngle$$12$$ - $angleExtent$$11$$, $startAngle$$12$$ = 0 < $startAngle$$12$$ ? $startAngle$$12$$ : $startAngle$$12$$ + 2 * window.Math.PI);
  $bounds$$90_shape$$41$$ = new D.$DvtStatusMeterGaugeCircularIndicator$$($context$$316$$, $bounds$$90_shape$$41$$, $startAngle$$12$$, $angleExtent$$11$$, $innerRadius$$6$$, $outerRadius$$6$$);
  $borderColor$$33_gauge$$54$$.$__shapes$.push($bounds$$90_shape$$41$$);
  $bounds$$90_shape$$41$$.$setSolidFill$($color$$52$$);
  ($borderColor$$33_gauge$$54$$ = D.$DvtGaugeStyleUtils$$.$getBorderColor$($borderColor$$33_gauge$$54$$)) && !$isPlotArea$$ && $bounds$$90_shape$$41$$.$setSolidStroke$($borderColor$$33_gauge$$54$$);
  $container$$128$$.$addChild$($bounds$$90_shape$$41$$)
};
D.$DvtStatusMeterGaugeRenderer$$.$_drawCircularReferenceLine$ = function $$DvtStatusMeterGaugeRenderer$$$$_drawCircularReferenceLine$$($gauge$$55_shape$$42$$, $container$$129$$, $bounds$$91$$, $color$$53_stroke$$77$$, $lineWidth$$4$$, $lineStyle$$6$$) {
  var $angle$$35$$ = window.angle, $context$$317$$ = $gauge$$55_shape$$42$$.$_context$, $maxDiameter$$3_outerRadius$$7$$ = window.Math.min($bounds$$91$$.$w$, $bounds$$91$$.$h$), $innerRadius$$7$$ = 0.275 * $maxDiameter$$3_outerRadius$$7$$, $maxDiameter$$3_outerRadius$$7$$ = 0.5 * $maxDiameter$$3_outerRadius$$7$$;
  (0,D.$DvtAgent$isRightToLeft$$)($gauge$$55_shape$$42$$.$_context$) && ($angle$$35$$ = window.Math.PI - $angle$$35$$, $angle$$35$$ = 0 < $angle$$35$$ ? $angle$$35$$ : $angle$$35$$ + 2 * window.Math.PI);
  window.p1 = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$91$$, $innerRadius$$7$$, $angle$$35$$);
  window.p2 = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$91$$, $maxDiameter$$3_outerRadius$$7$$, $angle$$35$$);
  $gauge$$55_shape$$42$$ = new D.$DvtLine$$($context$$317$$, window.p1.x, window.p1.y, window.p2.x, window.p2.y);
  $color$$53_stroke$$77$$ = new D.$DvtSolidStroke$$($color$$53_stroke$$77$$, 1, $lineWidth$$4$$);
  $lineStyle$$6$$ && $color$$53_stroke$$77$$.$setStyle$((0,D.$DvtStroke$convertTypeString$$)($lineStyle$$6$$));
  $gauge$$55_shape$$42$$.$setStroke$($color$$53_stroke$$77$$);
  $container$$129$$.$addChild$($gauge$$55_shape$$42$$)
};
window.DvtStatusMeterGaugeIndicator = function $DvtStatusMeterGaugeIndicator$($gauge$$8$$, $context$$309$$, $x1$$21$$, $x2$$20$$, $y1$$19$$, $y2$$18$$, $roundCorners$$) {
  this.Init($gauge$$8$$, $context$$309$$, $x1$$21$$, $x2$$20$$, $y1$$19$$, $y2$$18$$, $roundCorners$$)
};
D.$DvtObj$$.$createSubclass$(window.DvtStatusMeterGaugeIndicator, D.$DvtRect$$, "DvtStatusMeterGaugeIndicator");
window.DvtStatusMeterGaugeIndicator.$_MIN_CORNER_RADIUS$ = 2.5;
window.DvtStatusMeterGaugeIndicator.prototype.Init = function $DvtStatusMeterGaugeIndicator$$Init$($gauge$$9$$, $context$$310$$, $x1$$22$$, $x2$$21$$, $y1$$20$$, $y2$$19$$, $roundCorners$$1$$) {
  window.DvtStatusMeterGaugeIndicator.$superclass$.Init.call(this, $context$$310$$);
  this.$_gauge$ = $gauge$$9$$;
  this.$_roundCorners$ = $roundCorners$$1$$;
  this.$_isVert$ = "vertical" == $gauge$$9$$.$__getOptions$().orientation;
  this.$setCoords$($x1$$22$$, $x2$$21$$, $y1$$20$$, $y2$$19$$)
};
window.DvtStatusMeterGaugeIndicator.prototype.$setCoords$ = function $DvtStatusMeterGaugeIndicator$$$setCoords$$($width$$108_x1$$23$$, $x2$$22$$, $height$$89_y1$$21$$, $y2$$20$$) {
  this.$_x1$ = $width$$108_x1$$23$$;
  this.$_x2$ = $x2$$22$$;
  this.$_y1$ = $height$$89_y1$$21$$;
  this.$_y2$ = $y2$$20$$;
  var $radius$$21_x$$192$$ = window.Math.min($width$$108_x1$$23$$, $x2$$22$$), $y$$166$$ = window.Math.min($height$$89_y1$$21$$, $y2$$20$$);
  $width$$108_x1$$23$$ = window.Math.abs($width$$108_x1$$23$$ - $x2$$22$$);
  $height$$89_y1$$21$$ = window.Math.abs($y2$$20$$ - $height$$89_y1$$21$$);
  (0,D.$JSCompiler_StaticMethods_setRect$$)(this, $radius$$21_x$$192$$, $y$$166$$, $width$$108_x1$$23$$, $height$$89_y1$$21$$);
  this.$_roundCorners$ && ($radius$$21_x$$192$$ = (this.$_isVert$ ? $width$$108_x1$$23$$ : $height$$89_y1$$21$$) * ((0,D.$DvtGaugeDefaults$isSkyrosSkin$$)(this.$_gauge$) ? 0.25 : 0.15), $radius$$21_x$$192$$ >= window.DvtStatusMeterGaugeIndicator.$_MIN_CORNER_RADIUS$ && (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)(this, $radius$$21_x$$192$$, $radius$$21_x$$192$$))
};
window.DvtStatusMeterGaugeIndicator.prototype.$getAnimationParams$ = function $DvtStatusMeterGaugeIndicator$$$getAnimationParams$$() {
  return[this.$_x1$, this.$_x2$, this.$_y1$, this.$_y2$]
};
window.DvtStatusMeterGaugeIndicator.prototype.$setAnimationParams$ = function $DvtStatusMeterGaugeIndicator$$$setAnimationParams$$($params$$56$$) {
  $params$$56$$ && 4 == $params$$56$$.length && this.$setCoords$($params$$56$$[0], $params$$56$$[1], $params$$56$$[2], $params$$56$$[3])
};
D.$DvtStatusMeterGaugeCircularIndicator$$ = function $$DvtStatusMeterGaugeCircularIndicator$$$($context$$313$$, $bounds$$72$$, $startAngle$$6$$, $angleExtent$$6$$, $innerRadius$$2$$, $outerRadius$$2$$) {
  this.Init($context$$313$$, $bounds$$72$$, $startAngle$$6$$, $angleExtent$$6$$, $innerRadius$$2$$, $outerRadius$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtStatusMeterGaugeCircularIndicator$$, D.$DvtPath$$, "DvtStatusMeterGaugeCircularIndicator");
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.Init = function $$DvtStatusMeterGaugeCircularIndicator$$$$Init$($context$$314$$, $bounds$$73$$, $startAngle$$7$$, $angleExtent$$7$$, $innerRadius$$3$$, $outerRadius$$3$$) {
  D.$DvtStatusMeterGaugeCircularIndicator$$.$superclass$.Init.call(this, $context$$314$$);
  (0,D.$JSCompiler_StaticMethods_setPath$$)(this, $bounds$$73$$, $startAngle$$7$$, $angleExtent$$7$$, $innerRadius$$3$$, $outerRadius$$3$$)
};
D.$JSCompiler_StaticMethods_setPath$$ = function $$JSCompiler_StaticMethods_setPath$$$($JSCompiler_StaticMethods_setPath$self$$, $bounds$$74_p4$$1$$, $startAngle$$8$$, $angleExtent$$8$$, $innerRadius$$4$$, $cmd$$12_outerRadius$$4$$) {
  var $p1$$4$$, $p2$$5$$, $p3$$2$$;
  $bounds$$74_p4$$1$$ && $bounds$$74_p4$$1$$ instanceof D.$DvtRectangle$$ ? $JSCompiler_StaticMethods_setPath$self$$.$_bounds$ = $bounds$$74_p4$$1$$ : $bounds$$74_p4$$1$$ = $JSCompiler_StaticMethods_setPath$self$$.$_bounds$;
  $JSCompiler_StaticMethods_setPath$self$$.$_startAngle$ = $startAngle$$8$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_angleExtent$ = $angleExtent$$8$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_innerRadius$ = $innerRadius$$4$$;
  $JSCompiler_StaticMethods_setPath$self$$.$_outerRadius$ = $cmd$$12_outerRadius$$4$$;
  $angleExtent$$8$$ < 2 * window.Math.PI ? ($p1$$4$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$74_p4$$1$$, $cmd$$12_outerRadius$$4$$, $startAngle$$8$$), $p2$$5$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$74_p4$$1$$, $cmd$$12_outerRadius$$4$$, $startAngle$$8$$ + $angleExtent$$8$$), $p3$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$74_p4$$1$$, $innerRadius$$4$$, $startAngle$$8$$ + $angleExtent$$8$$), $bounds$$74_p4$$1$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$74_p4$$1$$, 
  $innerRadius$$4$$, $startAngle$$8$$), $cmd$$12_outerRadius$$4$$ = window.DvtPathUtils.moveTo($p1$$4$$.x, $p1$$4$$.y) + window.DvtPathUtils.arcTo($cmd$$12_outerRadius$$4$$, $cmd$$12_outerRadius$$4$$, $angleExtent$$8$$, 1, $p2$$5$$.x, $p2$$5$$.y) + window.DvtPathUtils.lineTo($p3$$2$$.x, $p3$$2$$.y) + window.DvtPathUtils.arcTo($innerRadius$$4$$, $innerRadius$$4$$, $angleExtent$$8$$, 0, $bounds$$74_p4$$1$$.x, $bounds$$74_p4$$1$$.y) + window.DvtPathUtils.closePath()) : ($p1$$4$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$74_p4$$1$$, 
  $cmd$$12_outerRadius$$4$$, $startAngle$$8$$), $p2$$5$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$74_p4$$1$$, $cmd$$12_outerRadius$$4$$, $startAngle$$8$$ + $angleExtent$$8$$ / 2), $p3$$2$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$74_p4$$1$$, $innerRadius$$4$$, $startAngle$$8$$), $bounds$$74_p4$$1$$ = D.$DvtStatusMeterGaugeRenderer$$.$_calcPointOnArc$($bounds$$74_p4$$1$$, $innerRadius$$4$$, $startAngle$$8$$ + $angleExtent$$8$$ / 2), $cmd$$12_outerRadius$$4$$ = 
  window.DvtPathUtils.moveTo($p1$$4$$.x, $p1$$4$$.y) + window.DvtPathUtils.arcTo($cmd$$12_outerRadius$$4$$, $cmd$$12_outerRadius$$4$$, $angleExtent$$8$$ / 2, 1, $p2$$5$$.x, $p2$$5$$.y) + window.DvtPathUtils.arcTo($cmd$$12_outerRadius$$4$$, $cmd$$12_outerRadius$$4$$, $angleExtent$$8$$ / 2, 1, $p1$$4$$.x, $p1$$4$$.y), 0 < $innerRadius$$4$$ && ($cmd$$12_outerRadius$$4$$ += window.DvtPathUtils.moveTo($bounds$$74_p4$$1$$.x, $bounds$$74_p4$$1$$.y) + window.DvtPathUtils.arcTo($innerRadius$$4$$, $innerRadius$$4$$, 
  $angleExtent$$8$$ / 2, 0, $p3$$2$$.x, $p3$$2$$.y) + window.DvtPathUtils.arcTo($innerRadius$$4$$, $innerRadius$$4$$, $angleExtent$$8$$ / 2, 0, $bounds$$74_p4$$1$$.x, $bounds$$74_p4$$1$$.y)), $cmd$$12_outerRadius$$4$$ += window.DvtPathUtils.closePath());
  $JSCompiler_StaticMethods_setPath$self$$.$setCmds$($cmd$$12_outerRadius$$4$$)
};
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.$getAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$getAnimationParams$$() {
  return[this.$_bounds$, this.$_startAngle$, this.$_angleExtent$, this.$_innerRadius$, this.$_outerRadius$]
};
D.$DvtStatusMeterGaugeCircularIndicator$$.prototype.$setAnimationParams$ = function $$DvtStatusMeterGaugeCircularIndicator$$$$$setAnimationParams$$($params$$58$$) {
  $params$$58$$ && 5 == $params$$58$$.length && (0,D.$JSCompiler_StaticMethods_setPath$$)(this, $params$$58$$[0], $params$$58$$[1], $params$$58$$[2], $params$$58$$[3], $params$$58$$[4])
};
D.$DvtDialGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtDialGauge", D.$DvtDialGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtDialGauge$$, D.$DvtGauge$$, "DvtDialGauge");
D.$DvtDialGauge$newInstance$$ = function $$DvtDialGauge$newInstance$$$($context$$696$$, $callback$$140$$, $callbackObj$$110$$) {
  var $gauge$$56$$ = new D.$DvtDialGauge$$;
  $gauge$$56$$.Init($context$$696$$, $callback$$140$$, $callbackObj$$110$$);
  return $gauge$$56$$
};
D.$DvtDialGauge$$.newInstance = D.$DvtDialGauge$newInstance$$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtDialGauge$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$697$$, $callback$$141$$, $callbackObj$$111$$) {
  D.$DvtDialGauge$$.$superclass$.Init.call(this, $context$$697$$, $callback$$141$$, $callbackObj$$111$$);
  this.$Defaults$ = new D.$DvtDialGaugeDefaults$$;
  this.$__anchorPt$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$247$$) {
  var $backgroundType$$1$$ = $options$$247$$.background, $indicatorType$$1$$ = $options$$247$$.indicator;
  "string" === typeof $backgroundType$$1$$ && ($options$$247$$.background = D.$DvtGaugeStyleUtils$$.$getDialBackground$($backgroundType$$1$$), $options$$247$$.background.images = $options$$247$$._backgroundImages);
  "string" === typeof $indicatorType$$1$$ && ($options$$247$$.indicator = D.$DvtGaugeStyleUtils$$.$getDialIndicator$($indicatorType$$1$$), $options$$247$$.indicator.images = $options$$247$$._indicatorImages);
  D.$DvtDialGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$247$$))
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$163$$, $width$$152$$, $height$$127$$) {
  D.$DvtDialGaugeRenderer$$.$render$(this, $container$$163$$, $width$$152$$, $height$$127$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateAnimationOnDisplay$ = function $$JSCompiler_prototypeAlias$$$$CreateAnimationOnDisplay$$($objs$$54$$, $animatedObjs_animationType$$, $animationDuration$$4$$) {
  $animatedObjs_animationType$$ = [];
  for(var $i$$828$$ = 0;$i$$828$$ < $objs$$54$$.length;$i$$828$$++) {
    var $obj$$352$$ = $objs$$54$$[$i$$828$$], $endState$$14$$ = $obj$$352$$.$getAnimationParams$(), $animation$$3_startAngle$$19$$ = D.$DvtDialGaugeRenderer$$.$__getStartAngle$(this);
    $obj$$352$$.$setAngle$($animation$$3_startAngle$$19$$);
    $animation$$3_startAngle$$19$$ = new D.$DvtCustomAnimation$$(this.$_context$, $obj$$352$$, $animationDuration$$4$$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($animation$$3_startAngle$$19$$.$_animator$, "typeNumberArray", $obj$$352$$, $obj$$352$$.$getAnimationParams$, $obj$$352$$.$setAnimationParams$, $endState$$14$$);
    $animation$$3_startAngle$$19$$.$_animator$.$setEasing$(function($objs$$54$$) {
      return(0,D.$DvtEasing$backOut$$)($objs$$54$$, 0.7)
    });
    $animatedObjs_animationType$$.push($animation$$3_startAngle$$19$$)
  }
  return new D.$DvtParallelPlayable$$(this.$_context$, $animatedObjs_animationType$$)
};
D.$JSCompiler_prototypeAlias$$.$GetValueAt$ = function $$JSCompiler_prototypeAlias$$$$GetValueAt$$($x$$306$$, $y$$272$$) {
  var $angle$$56_ratio$$12$$ = D.$DvtMath$$.$radsToDegrees$(window.Math.atan2($y$$272$$ - this.$__anchorPt$.y, $x$$306$$ - this.$__anchorPt$.x));
  0 >= $angle$$56_ratio$$12$$ && ($angle$$56_ratio$$12$$ += 360);
  var $isRTL$$26_minValue$$16$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$), $angleExtent$$16_backgroundOptions$$4$$ = this.$__getOptions$().background, $startAngle$$20$$ = $isRTL$$26_minValue$$16$$ ? 180 + $angleExtent$$16_backgroundOptions$$4$$.startAngle : 360 - $angleExtent$$16_backgroundOptions$$4$$.startAngle, $angleExtent$$16_backgroundOptions$$4$$ = $angleExtent$$16_backgroundOptions$$4$$.angleExtent, $endAngle$$2$$ = $startAngle$$20$$ + $angleExtent$$16_backgroundOptions$$4$$;
  if($isRTL$$26_minValue$$16$$) {
    $endAngle$$2$$ = $startAngle$$20$$;
    for($startAngle$$20$$ -= $angleExtent$$16_backgroundOptions$$4$$;0 > $startAngle$$20$$;) {
      $startAngle$$20$$ += 360, $endAngle$$2$$ += 360
    }
  }
  $angle$$56_ratio$$12$$ + 360 >= $startAngle$$20$$ && $angle$$56_ratio$$12$$ + 360 <= $endAngle$$2$$ ? $angle$$56_ratio$$12$$ += 360 : $angle$$56_ratio$$12$$ >= $startAngle$$20$$ && $angle$$56_ratio$$12$$ <= $endAngle$$2$$ || ($angle$$56_ratio$$12$$ = $angle$$56_ratio$$12$$ > $endAngle$$2$$ ? $startAngle$$20$$ + 360 - $angle$$56_ratio$$12$$ < $angle$$56_ratio$$12$$ - $endAngle$$2$$ ? $startAngle$$20$$ : $endAngle$$2$$ : $startAngle$$20$$ - $angle$$56_ratio$$12$$ < $angle$$56_ratio$$12$$ + 360 - 
  $endAngle$$2$$ ? $startAngle$$20$$ : $endAngle$$2$$);
  $angle$$56_ratio$$12$$ = ($angle$$56_ratio$$12$$ - $startAngle$$20$$) / $angleExtent$$16_backgroundOptions$$4$$;
  $isRTL$$26_minValue$$16$$ && ($angle$$56_ratio$$12$$ = 1 - $angle$$56_ratio$$12$$);
  $isRTL$$26_minValue$$16$$ = this.$Options$.min;
  return $angle$$56_ratio$$12$$ * (this.$Options$.max - $isRTL$$26_minValue$$16$$) + $isRTL$$26_minValue$$16$$
};
D.$DvtDialGaugeDefaults$$ = function $$DvtDialGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtDialGaugeDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtDialGaugeDefaults");
D.$DvtDialGaugeDefaults$VERSION_1$$ = {background:{startAngle:180, angleExtent:180, indicatorLength:0.7}, metricLabel:{style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, tickLabel:{scaling:"auto", style:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}};
D.$DvtDialGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeRenderer$$, D.$DvtObj$$, "DvtDialGaugeRenderer");
D.$DvtDialGaugeRenderer$$.$render$ = function $$DvtDialGaugeRenderer$$$$render$$($gauge$$35$$, $container$$118$$, $bounds$$75_width$$111$$, $height$$92$$) {
  D.$DvtGaugeDataUtils$$.$hasData$($gauge$$35$$) ? ($bounds$$75_width$$111$$ = new D.$DvtRectangle$$(0, 0, $bounds$$75_width$$111$$, $height$$92$$), D.$DvtDialGaugeRenderer$$.$_renderShape$($gauge$$35$$, $container$$118$$, $bounds$$75_width$$111$$), D.$DvtDialGaugeRenderer$$.$_renderLabel$($gauge$$35$$, $container$$118$$, $bounds$$75_width$$111$$)) : D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$35$$, $container$$118$$, new D.$DvtRectangle$$(0, 0, $bounds$$75_width$$111$$, $height$$92$$))
};
D.$DvtDialGaugeRenderer$$.$_renderShape$ = function $$DvtDialGaugeRenderer$$$$_renderShape$$($gauge$$36$$, $container$$119$$, $bounds$$76_scale$$58$$) {
  var $options$$211_tooltip$$38$$ = $gauge$$36$$.$__getOptions$(), $background$$10_backgroundAnchor$$ = D.$DvtDialGaugeRenderer$$.$_createBackground$($gauge$$36$$, $bounds$$76_scale$$58$$);
  $container$$119$$.$addChild$($background$$10_backgroundAnchor$$);
  $options$$211_tooltip$$38$$.background.majorTickCount && $options$$211_tooltip$$38$$.background.radius && D.$DvtDialGaugeRenderer$$.$_renderTickLabels$($gauge$$36$$, $container$$119$$, $bounds$$76_scale$$58$$);
  var $indicator$$13$$ = D.$DvtDialGaugeRenderer$$.$_createIndicator$($gauge$$36$$, $bounds$$76_scale$$58$$), $translateContainer$$ = new D.$DvtContainer$$($gauge$$36$$.$_context$), $rotateContainer$$ = new D.$DvtDialGaugeIndicator$$($gauge$$36$$.$_context$);
  $container$$119$$.$addChild$($translateContainer$$);
  $translateContainer$$.$addChild$($rotateContainer$$);
  $rotateContainer$$.$addChild$($indicator$$13$$);
  var $indicatorBounds_mat$$23$$ = $indicator$$13$$.$getDimensions$(), $angleRads$$6$$ = D.$DvtDialGaugeRenderer$$.$_getRotation$($gauge$$36$$, $options$$211_tooltip$$38$$.value), $background$$10_backgroundAnchor$$ = D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($gauge$$36$$, $bounds$$76_scale$$58$$), $indicatorAnchor$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$($gauge$$36$$, $indicatorBounds_mat$$23$$);
  $bounds$$76_scale$$58$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$($gauge$$36$$, $bounds$$76_scale$$58$$, $indicatorBounds_mat$$23$$);
  $indicatorBounds_mat$$23$$ = new D.$DvtMatrix$$;
  $indicatorBounds_mat$$23$$.translate(-$indicatorAnchor$$.x, -$indicatorAnchor$$.y);
  $indicatorBounds_mat$$23$$.scale($bounds$$76_scale$$58$$, $bounds$$76_scale$$58$$);
  $indicator$$13$$.$setMatrix$($indicatorBounds_mat$$23$$);
  $rotateContainer$$.$setAngle$($angleRads$$6$$);
  $indicatorBounds_mat$$23$$ = new D.$DvtMatrix$$;
  $indicatorBounds_mat$$23$$.translate($background$$10_backgroundAnchor$$.x, $background$$10_backgroundAnchor$$.y);
  $translateContainer$$.$setMatrix$($indicatorBounds_mat$$23$$);
  $gauge$$36$$.$__shapes$.push($rotateContainer$$);
  (($options$$211_tooltip$$38$$ = $options$$211_tooltip$$38$$.shortDesc) || $gauge$$36$$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) && $gauge$$36$$.$__getEventManager$().$associate$($container$$119$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, $options$$211_tooltip$$38$$));
  $gauge$$36$$.$__anchorPt$ = $background$$10_backgroundAnchor$$
};
D.$DvtDialGaugeRenderer$$.$_createBackground$ = function $$DvtDialGaugeRenderer$$$$_createBackground$$($gauge$$37$$, $bounds$$77$$) {
  var $backgroundOptions$$ = $gauge$$37$$.$__getOptions$().background, $isRTL$$17_radiusScale$$1$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$37$$.$_context$), $isTouchDevice$$1_locImages$$1_metLblBounds_width$$112$$ = (0,D.$DvtAgent$isTouchDevice$$)(), $shape$$36_widthRes$$1$$ = $isTouchDevice$$1_locImages$$1_metLblBounds_width$$112$$ ? 2 * $bounds$$77$$.$w$ : $bounds$$77$$.$w$, $heightRes$$1_scale$$59$$ = $isTouchDevice$$1_locImages$$1_metLblBounds_width$$112$$ ? 2 * $bounds$$77$$.$h$ : $bounds$$77$$.$h$, 
  $images$$16_tx$$20$$ = $backgroundOptions$$.images;
  if($images$$16_tx$$20$$ && 0 < $images$$16_tx$$20$$.length) {
    var $i$$539_ty$$20$$, $refWidth$$1$$, $refHeight$$1$$, $isTouchDevice$$1_locImages$$1_metLblBounds_width$$112$$ = [];
    for($i$$539_ty$$20$$ = 0;$i$$539_ty$$20$$ < $images$$16_tx$$20$$.length;$i$$539_ty$$20$$++) {
      var $imageDims_isImageRTL_source$$17$$ = "rtl" == $images$$16_tx$$20$$[$i$$539_ty$$20$$].dir;
      $isRTL$$17_radiusScale$$1$$ && $imageDims_isImageRTL_source$$17$$ ? $isTouchDevice$$1_locImages$$1_metLblBounds_width$$112$$.push($images$$16_tx$$20$$[$i$$539_ty$$20$$]) : !$isRTL$$17_radiusScale$$1$$ && !$imageDims_isImageRTL_source$$17$$ && $isTouchDevice$$1_locImages$$1_metLblBounds_width$$112$$.push($images$$16_tx$$20$$[$i$$539_ty$$20$$])
    }
    $images$$16_tx$$20$$ = 0 < $isTouchDevice$$1_locImages$$1_metLblBounds_width$$112$$.length ? $isTouchDevice$$1_locImages$$1_metLblBounds_width$$112$$ : $images$$16_tx$$20$$;
    for($i$$539_ty$$20$$ = 0;$i$$539_ty$$20$$ < $images$$16_tx$$20$$.length;$i$$539_ty$$20$$++) {
      var $height$$93_image$$11$$ = $images$$16_tx$$20$$[$i$$539_ty$$20$$], $imageDims_isImageRTL_source$$17$$ = $height$$93_image$$11$$.src, $isTouchDevice$$1_locImages$$1_metLblBounds_width$$112$$ = $height$$93_image$$11$$.width, $height$$93_image$$11$$ = $height$$93_image$$11$$.height, $isSvg$$1$$ = $imageDims_isImageRTL_source$$17$$ && -1 < $imageDims_isImageRTL_source$$17$$.search(".svg");
      0 == $i$$539_ty$$20$$ && ($refWidth$$1$$ = $isTouchDevice$$1_locImages$$1_metLblBounds_width$$112$$, $refHeight$$1$$ = $height$$93_image$$11$$);
      if($isSvg$$1$$ || $isTouchDevice$$1_locImages$$1_metLblBounds_width$$112$$ >= $shape$$36_widthRes$$1$$ && $height$$93_image$$11$$ >= $heightRes$$1_scale$$59$$ || $i$$539_ty$$20$$ == $images$$16_tx$$20$$.length - 1) {
        var $shape$$36_widthRes$$1$$ = new D.$DvtImage$$($gauge$$37$$.$_context$, $imageDims_isImageRTL_source$$17$$, 0, 0, $isTouchDevice$$1_locImages$$1_metLblBounds_width$$112$$, $height$$93_image$$11$$), $matrix$$13$$ = new D.$DvtMatrix$$, $heightRes$$1_scale$$59$$ = window.Math.min($bounds$$77$$.$w$ / $isTouchDevice$$1_locImages$$1_metLblBounds_width$$112$$, $bounds$$77$$.$h$ / $height$$93_image$$11$$), $images$$16_tx$$20$$ = ($bounds$$77$$.$w$ - $heightRes$$1_scale$$59$$ * $isTouchDevice$$1_locImages$$1_metLblBounds_width$$112$$) / 
        2;
        $i$$539_ty$$20$$ = ($bounds$$77$$.$h$ - $heightRes$$1_scale$$59$$ * $height$$93_image$$11$$) / 2;
        $matrix$$13$$.scale($heightRes$$1_scale$$59$$, $heightRes$$1_scale$$59$$);
        $matrix$$13$$.translate($images$$16_tx$$20$$, $i$$539_ty$$20$$);
        $shape$$36_widthRes$$1$$.$setMatrix$($matrix$$13$$);
        $isSvg$$1$$ && (0,D.$DvtAgent$isPlatformWebkit$$)() && ($imageDims_isImageRTL_source$$17$$ = D.$DvtImageLoader$$.$loadImage$($gauge$$37$$.$_context$, $imageDims_isImageRTL_source$$17$$, D.$DvtObj$$.$createCallback$($shape$$36_widthRes$$1$$, $shape$$36_widthRes$$1$$.$__setDimensions$))) && $shape$$36_widthRes$$1$$.$__setDimensions$($imageDims_isImageRTL_source$$17$$);
        $bounds$$77$$.x += $images$$16_tx$$20$$;
        $bounds$$77$$.y += $i$$539_ty$$20$$;
        $bounds$$77$$.$w$ = $heightRes$$1_scale$$59$$ * $isTouchDevice$$1_locImages$$1_metLblBounds_width$$112$$;
        $bounds$$77$$.$h$ = $heightRes$$1_scale$$59$$ * $height$$93_image$$11$$;
        !(0,window.isNaN)($backgroundOptions$$.anchorX) && !(0,window.isNaN)($backgroundOptions$$.anchorY) && ($backgroundOptions$$._anchorX = $isRTL$$17_radiusScale$$1$$ ? $bounds$$77$$.x + $bounds$$77$$.$w$ - $bounds$$77$$.$w$ * $backgroundOptions$$.anchorX / $refWidth$$1$$ : $bounds$$77$$.x + $bounds$$77$$.$w$ * $backgroundOptions$$.anchorX / $refWidth$$1$$, $backgroundOptions$$._anchorY = $bounds$$77$$.y + $bounds$$77$$.$h$ * $backgroundOptions$$.anchorY / $refHeight$$1$$);
        $backgroundOptions$$.metricLabelBounds && ($isTouchDevice$$1_locImages$$1_metLblBounds_width$$112$$ = {}, $isTouchDevice$$1_locImages$$1_metLblBounds_width$$112$$.width = $bounds$$77$$.$w$ * $backgroundOptions$$.metricLabelBounds.width / $refWidth$$1$$, $isTouchDevice$$1_locImages$$1_metLblBounds_width$$112$$.height = $bounds$$77$$.$h$ * $backgroundOptions$$.metricLabelBounds.height / $refHeight$$1$$, $isTouchDevice$$1_locImages$$1_metLblBounds_width$$112$$.y = $bounds$$77$$.y + $bounds$$77$$.$h$ * 
        $backgroundOptions$$.metricLabelBounds.y / $refHeight$$1$$, $isTouchDevice$$1_locImages$$1_metLblBounds_width$$112$$.x = $isRTL$$17_radiusScale$$1$$ ? $bounds$$77$$.x + $bounds$$77$$.$w$ - $bounds$$77$$.$w$ * $backgroundOptions$$.metricLabelBounds.x / $refWidth$$1$$ - $isTouchDevice$$1_locImages$$1_metLblBounds_width$$112$$.width : $bounds$$77$$.x + $bounds$$77$$.$w$ * $backgroundOptions$$.metricLabelBounds.x / $refWidth$$1$$, $backgroundOptions$$._metricLabelBounds = $isTouchDevice$$1_locImages$$1_metLblBounds_width$$112$$);
        $isRTL$$17_radiusScale$$1$$ = window.Math.min($bounds$$77$$.$w$ / $refWidth$$1$$, $bounds$$77$$.$h$ / $refHeight$$1$$);
        $backgroundOptions$$._radius = $backgroundOptions$$.radius * $isRTL$$17_radiusScale$$1$$;
        $backgroundOptions$$._tickLabelHeight = $backgroundOptions$$.tickLabelHeight * $bounds$$77$$.$h$ / $refHeight$$1$$;
        $backgroundOptions$$._tickLabelWidth = $backgroundOptions$$.tickLabelWidth * $bounds$$77$$.$w$ / $refWidth$$1$$;
        return $shape$$36_widthRes$$1$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDialGaugeRenderer$$.$_createIndicator$ = function $$DvtDialGaugeRenderer$$$$_createIndicator$$($gauge$$38$$, $bounds$$78$$) {
  var $indicatorOptions$$ = $gauge$$38$$.$__getOptions$().indicator, $indicatorLength_source$$18$$ = D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$($gauge$$38$$, $bounds$$78$$), $heightRes$$2_shape$$37$$ = (0,D.$DvtAgent$isTouchDevice$$)() ? 2 * $indicatorLength_source$$18$$ : $indicatorLength_source$$18$$, $refWidth$$2$$, $refHeight$$2$$, $images$$17$$ = $indicatorOptions$$.images;
  if($images$$17$$ && 0 < $images$$17$$.length) {
    for(var $i$$540$$ = 0;$i$$540$$ < $images$$17$$.length;$i$$540$$++) {
      var $height$$94_image$$12$$ = $images$$17$$[$i$$540$$], $indicatorLength_source$$18$$ = $height$$94_image$$12$$.src, $width$$113$$ = $height$$94_image$$12$$.width, $height$$94_image$$12$$ = $height$$94_image$$12$$.height, $isSvg$$2$$ = $indicatorLength_source$$18$$ && -1 < $indicatorLength_source$$18$$.search(".svg");
      0 == $i$$540$$ && ($refWidth$$2$$ = $width$$113$$, $refHeight$$2$$ = $height$$94_image$$12$$);
      if($isSvg$$2$$ || $height$$94_image$$12$$ >= $heightRes$$2_shape$$37$$ || $i$$540$$ == $images$$17$$.length - 1) {
        return $heightRes$$2_shape$$37$$ = new D.$DvtImage$$($gauge$$38$$.$_context$, $indicatorLength_source$$18$$, 0, 0, $width$$113$$, $height$$94_image$$12$$), $isSvg$$2$$ && (0,D.$DvtAgent$isPlatformWebkit$$)() && D.$DvtImageLoader$$.$loadImage$($gauge$$38$$.$_context$, $indicatorLength_source$$18$$, D.$DvtObj$$.$createCallback$($heightRes$$2_shape$$37$$, $heightRes$$2_shape$$37$$.$__setDimensions$)) && ($heightRes$$2_shape$$37$$.$setWidth$($width$$113$$), $heightRes$$2_shape$$37$$.$setHeight$($height$$94_image$$12$$)), 
        !(0,window.isNaN)($indicatorOptions$$.anchorX) && !(0,window.isNaN)($indicatorOptions$$.anchorY) && ($indicatorOptions$$._anchorX = $indicatorOptions$$.anchorX * $width$$113$$ / $refWidth$$2$$, $indicatorOptions$$._anchorY = $indicatorOptions$$.anchorY * $height$$94_image$$12$$ / $refHeight$$2$$), $heightRes$$2_shape$$37$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDialGaugeRenderer$$.$__getStartAngle$ = function $$DvtDialGaugeRenderer$$$$__getStartAngle$$($gauge$$39_startAngle$$9$$) {
  var $backgroundOptions$$1$$ = $gauge$$39_startAngle$$9$$.$__getOptions$().background;
  $gauge$$39_startAngle$$9$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$39_startAngle$$9$$.$_context$) ? 180 - $backgroundOptions$$1$$.startAngle : $backgroundOptions$$1$$.startAngle;
  return window.Math.PI * (90 - $gauge$$39_startAngle$$9$$) / 180
};
D.$DvtDialGaugeRenderer$$.$_getRotation$ = function $$DvtDialGaugeRenderer$$$$_getRotation$$($gauge$$40$$, $value$$113$$) {
  var $isRTL$$19_maxValue$$13_options$$212$$ = $gauge$$40$$.$__getOptions$(), $backgroundOptions$$2$$ = $isRTL$$19_maxValue$$13_options$$212$$.background, $minValue$$12_ratio$$6$$ = $isRTL$$19_maxValue$$13_options$$212$$.min, $isRTL$$19_maxValue$$13_options$$212$$ = $isRTL$$19_maxValue$$13_options$$212$$.max;
  $value$$113$$ = window.Math.max(window.Math.min($value$$113$$, $isRTL$$19_maxValue$$13_options$$212$$), $minValue$$12_ratio$$6$$);
  $minValue$$12_ratio$$6$$ = ($value$$113$$ - $minValue$$12_ratio$$6$$) / ($isRTL$$19_maxValue$$13_options$$212$$ - $minValue$$12_ratio$$6$$);
  $isRTL$$19_maxValue$$13_options$$212$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$40$$.$_context$);
  return window.Math.PI * (90 - (($isRTL$$19_maxValue$$13_options$$212$$ ? 180 - $backgroundOptions$$2$$.startAngle : $backgroundOptions$$2$$.startAngle) - $minValue$$12_ratio$$6$$ * ($isRTL$$19_maxValue$$13_options$$212$$ ? -$backgroundOptions$$2$$.angleExtent : $backgroundOptions$$2$$.angleExtent))) / 180
};
D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getBackgroundAnchorPoint$$($gauge$$41$$, $bounds$$79$$) {
  var $anchorY$$2_backgroundOptions$$3$$ = $gauge$$41$$.$__getOptions$().background, $anchorX$$2$$ = $anchorY$$2_backgroundOptions$$3$$._anchorX, $anchorY$$2_backgroundOptions$$3$$ = $anchorY$$2_backgroundOptions$$3$$._anchorY;
  return!(0,window.isNaN)($anchorX$$2$$) && !(0,window.isNaN)($anchorY$$2_backgroundOptions$$3$$) ? new D.$DvtPoint$$($anchorX$$2$$, $anchorY$$2_backgroundOptions$$3$$) : new D.$DvtPoint$$($bounds$$79$$.x + $bounds$$79$$.$w$ / 2, $bounds$$79$$.y + $bounds$$79$$.$h$ / 2)
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorLength$$($gauge$$42$$, $bounds$$80$$) {
  var $radius$$23$$ = window.Math.min($bounds$$80$$.$w$, $bounds$$80$$.$h$) / 2;
  return $gauge$$42$$.$__getOptions$().background.indicatorLength * $radius$$23$$
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorAnchorPoint$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorAnchorPoint$$($gauge$$43$$, $indicatorBounds$$1$$) {
  var $anchorY$$3_indicatorOptions$$1$$ = $gauge$$43$$.$__getOptions$().indicator, $anchorX$$3$$ = $anchorY$$3_indicatorOptions$$1$$._anchorX, $anchorY$$3_indicatorOptions$$1$$ = $anchorY$$3_indicatorOptions$$1$$._anchorY;
  return!(0,window.isNaN)($anchorX$$3$$) && !(0,window.isNaN)($anchorY$$3_indicatorOptions$$1$$) ? new D.$DvtPoint$$($anchorX$$3$$, $anchorY$$3_indicatorOptions$$1$$) : new D.$DvtPoint$$($indicatorBounds$$1$$.x + $indicatorBounds$$1$$.$w$ / 2, $indicatorBounds$$1$$.y + $indicatorBounds$$1$$.$h$)
};
D.$DvtDialGaugeRenderer$$.$_getIndicatorScaleFactor$ = function $$DvtDialGaugeRenderer$$$$_getIndicatorScaleFactor$$($gauge$$44$$, $bounds$$82$$, $indicatorBounds$$2$$) {
  return D.$DvtDialGaugeRenderer$$.$_getIndicatorLength$($gauge$$44$$, $bounds$$82$$) / $indicatorBounds$$2$$.$h$
};
D.$DvtDialGaugeRenderer$$.$_renderLabel$ = function $$DvtDialGaugeRenderer$$$$_renderLabel$$($gauge$$45$$, $container$$120$$, $bounds$$83$$) {
  var $i$$541_options$$213$$ = $gauge$$45$$.$__getOptions$();
  if("on" == $i$$541_options$$213$$.metricLabel.rendered) {
    var $labelString$$5$$ = D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($i$$541_options$$213$$.value, $gauge$$45$$), $cx$$24_label$$76$$ = $bounds$$83$$.x + $bounds$$83$$.$w$ / 2, $cy$$24_longestLabel$$1_size$$37$$ = $bounds$$83$$.y + $bounds$$83$$.$h$ / 2, $labelWidth$$4$$ = $bounds$$83$$.$w$, $labelHeight$$6$$ = $bounds$$83$$.$h$, $maxString$$1_metricLabelBounds$$ = $i$$541_options$$213$$.background._metricLabelBounds;
    $maxString$$1_metricLabelBounds$$ && ($cx$$24_label$$76$$ = $maxString$$1_metricLabelBounds$$.x + $maxString$$1_metricLabelBounds$$.width / 2, $cy$$24_longestLabel$$1_size$$37$$ = $maxString$$1_metricLabelBounds$$.y + $maxString$$1_metricLabelBounds$$.height / 2, $bounds$$83$$.$w$ = $maxString$$1_metricLabelBounds$$.width, $bounds$$83$$.$h$ = $maxString$$1_metricLabelBounds$$.height);
    $cx$$24_label$$76$$ = new D.$DvtOutputText$$($gauge$$45$$.$_context$, $labelString$$5$$, $cx$$24_label$$76$$, $cy$$24_longestLabel$$1_size$$37$$);
    !$i$$541_options$$213$$.metricLabel.style.$getStyle$("color") && $i$$541_options$$213$$.background._isDark && $i$$541_options$$213$$.metricLabel.style.$setStyle$("color", "#CCCCCC");
    $cx$$24_label$$76$$.$setCSSStyle$($i$$541_options$$213$$.metricLabel.style);
    $cy$$24_longestLabel$$1_size$$37$$ = (0,window.parseInt)($i$$541_options$$213$$.metricLabel.style.$getFontSize$());
    if(!$cy$$24_longestLabel$$1_size$$37$$) {
      $cy$$24_longestLabel$$1_size$$37$$ = window.Math.max(D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($i$$541_options$$213$$.max, $gauge$$45$$).length, D.$DvtGaugeRenderer$$.$getFormattedMetricLabel$($i$$541_options$$213$$.min, $gauge$$45$$).length, $labelString$$5$$.length);
      $maxString$$1_metricLabelBounds$$ = "";
      "percent" == $i$$541_options$$213$$.metricLabel.textType && ($cy$$24_longestLabel$$1_size$$37$$ = window.Math.max(3, $labelString$$5$$.length), $maxString$$1_metricLabelBounds$$ += "%");
      for($i$$541_options$$213$$ = 0;$i$$541_options$$213$$ < $cy$$24_longestLabel$$1_size$$37$$;$i$$541_options$$213$$++) {
        $maxString$$1_metricLabelBounds$$ += "0"
      }
      $cx$$24_label$$76$$.$setTextString$($maxString$$1_metricLabelBounds$$);
      $cy$$24_longestLabel$$1_size$$37$$ = $cx$$24_label$$76$$.$getOptimalFontSize$($bounds$$83$$);
      $cx$$24_label$$76$$.$setTextString$($labelString$$5$$);
      $cx$$24_label$$76$$.$setFontSize$($cy$$24_longestLabel$$1_size$$37$$)
    }
    $cx$$24_label$$76$$.$alignCenter$();
    $cx$$24_label$$76$$.$alignMiddle$();
    D.$DvtTextUtils$$.$fitText$($cx$$24_label$$76$$, $labelWidth$$4$$, $labelHeight$$6$$, $container$$120$$) && $cx$$24_label$$76$$.$isTruncated$() && $gauge$$45$$.$__getEventManager$().$associate$($cx$$24_label$$76$$, new D.$DvtSimpleObjPeer$$($labelString$$5$$))
  }
};
D.$DvtDialGaugeRenderer$$.$_renderTickLabels$ = function $$DvtDialGaugeRenderer$$$$_renderTickLabels$$($gauge$$46$$, $container$$121$$, $bounds$$84$$) {
  var $options$$214$$ = $gauge$$46$$.$__getOptions$(), $isRTL$$20$$ = (0,D.$DvtAgent$isRightToLeft$$)($gauge$$46$$.$_context$);
  if($options$$214$$.background.radius && $options$$214$$.background.majorTickCount) {
    var $radius$$24$$ = $options$$214$$.background._radius, $minValue$$13$$ = $options$$214$$.min, $maxValue$$14$$ = $options$$214$$.max, $majorTickCount$$1$$ = $options$$214$$.background.majorTickCount, $fontSize$$6_longestLabel$$2$$ = 12, $labelBounds$$8$$ = new D.$DvtRectangle$$($cx$$25_i$$542_labelValue$$2$$, $angleRads$$7_cy$$25$$, $bounds$$84$$.$w$, $bounds$$84$$.$h$), $maxString$$2_style$$48_x$$194$$ = $options$$214$$.metricLabel.style.$getStyle$("font-size");
    $options$$214$$.background._tickLabelHeight && !$maxString$$2_style$$48_x$$194$$ && ($labelBounds$$8$$.$h$ = $options$$214$$.background._tickLabelHeight);
    $options$$214$$.background._tickLabelWidth && !$maxString$$2_style$$48_x$$194$$ && ($labelBounds$$8$$.$w$ = $options$$214$$.background._tickLabelWidth);
    if(!$maxString$$2_style$$48_x$$194$$) {
      var $label$$77_labelString$$6$$ = new D.$DvtOutputText$$($gauge$$46$$.$_context$, "", $cx$$25_i$$542_labelValue$$2$$, $angleRads$$7_cy$$25$$), $fontSize$$6_longestLabel$$2$$ = window.Math.max(D.$DvtGaugeRenderer$$.$formatTickLabelValue$($options$$214$$.max, $gauge$$46$$).length, D.$DvtGaugeRenderer$$.$formatTickLabelValue$($options$$214$$.min, $gauge$$46$$).length), $maxString$$2_style$$48_x$$194$$ = "";
      "percent" == $options$$214$$.tickLabel.textType && ($fontSize$$6_longestLabel$$2$$ = window.Math.max(3, D.$DvtGaugeRenderer$$.$formatTickLabelValue$(100, $gauge$$46$$).length - 1), $maxString$$2_style$$48_x$$194$$ += "%");
      for(var $cx$$25_i$$542_labelValue$$2$$ = 0;$cx$$25_i$$542_labelValue$$2$$ < $fontSize$$6_longestLabel$$2$$;$cx$$25_i$$542_labelValue$$2$$++) {
        $maxString$$2_style$$48_x$$194$$ += "0"
      }
      $label$$77_labelString$$6$$.$setTextString$($maxString$$2_style$$48_x$$194$$);
      $fontSize$$6_longestLabel$$2$$ = $label$$77_labelString$$6$$.$getOptimalFontSize$($labelBounds$$8$$)
    }
    for($maxString$$2_style$$48_x$$194$$ = 0;$maxString$$2_style$$48_x$$194$$ < $majorTickCount$$1$$;$maxString$$2_style$$48_x$$194$$++) {
      $cx$$25_i$$542_labelValue$$2$$ = $minValue$$13$$ + window.Math.abs($maxValue$$14$$ - $minValue$$13$$) * $maxString$$2_style$$48_x$$194$$ / ($majorTickCount$$1$$ - 1);
      $isRTL$$20$$ && ($cx$$25_i$$542_labelValue$$2$$ = $minValue$$13$$ + window.Math.abs($maxValue$$14$$ - $minValue$$13$$) * ($majorTickCount$$1$$ - 1 - $maxString$$2_style$$48_x$$194$$) / ($majorTickCount$$1$$ - 1));
      var $label$$77_labelString$$6$$ = D.$DvtGaugeRenderer$$.$formatTickLabelValue$($cx$$25_i$$542_labelValue$$2$$, $gauge$$46$$), $angleRads$$7_cy$$25$$ = D.$DvtDialGaugeRenderer$$.$_getRotation$($gauge$$46$$, $cx$$25_i$$542_labelValue$$2$$), $anchor$$2$$ = D.$DvtDialGaugeRenderer$$.$_getBackgroundAnchorPoint$($gauge$$46$$, $bounds$$84$$), $cx$$25_i$$542_labelValue$$2$$ = $anchor$$2$$.x + $radius$$24$$ * window.Math.cos($angleRads$$7_cy$$25$$ - window.Math.PI / 2), $angleRads$$7_cy$$25$$ = $anchor$$2$$.y + 
      $radius$$24$$ * window.Math.sin($angleRads$$7_cy$$25$$ - window.Math.PI / 2), $label$$77_labelString$$6$$ = new D.$DvtOutputText$$($gauge$$46$$.$_context$, $label$$77_labelString$$6$$, $cx$$25_i$$542_labelValue$$2$$, $angleRads$$7_cy$$25$$);
      !$options$$214$$.tickLabel.style.$getStyle$("color") && $options$$214$$.background._isDark && $options$$214$$.tickLabel.style.$setStyle$("color", "#CCCCCC");
      $label$$77_labelString$$6$$.$setCSSStyle$($options$$214$$.tickLabel.style);
      $options$$214$$.tickLabel.style.$getStyle$("font-size") || $label$$77_labelString$$6$$.$setFontSize$($fontSize$$6_longestLabel$$2$$);
      $label$$77_labelString$$6$$.$alignCenter$();
      $label$$77_labelString$$6$$.$alignMiddle$();
      D.$DvtTextUtils$$.$fitText$($label$$77_labelString$$6$$, $labelBounds$$8$$.$w$, $labelBounds$$8$$.$h$, $container$$121$$) && $label$$77_labelString$$6$$.$isTruncated$() && $gauge$$46$$.$__getEventManager$().$associate$($label$$77_labelString$$6$$, new D.$DvtSimpleObjPeer$$($label$$77_labelString$$6$$.$_untruncatedTextString$))
    }
  }
};
D.$DvtDialGaugeIndicator$$ = function $$DvtDialGaugeIndicator$$$($context$$311$$) {
  this.Init($context$$311$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDialGaugeIndicator$$, D.$DvtContainer$$, "DvtDialGaugeIndicator");
D.$DvtDialGaugeIndicator$$.prototype.$setAngle$ = function $$DvtDialGaugeIndicator$$$$$setAngle$$($angleRads$$5$$) {
  var $mat$$22$$ = new D.$DvtMatrix$$;
  $mat$$22$$.rotate($angleRads$$5$$);
  this.$setMatrix$($mat$$22$$);
  this.$_angleRads$ = $angleRads$$5$$
};
D.$DvtDialGaugeIndicator$$.prototype.$getAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$getAnimationParams$$() {
  return[this.$_angleRads$]
};
D.$DvtDialGaugeIndicator$$.prototype.$setAnimationParams$ = function $$DvtDialGaugeIndicator$$$$$setAnimationParams$$($params$$57$$) {
  $params$$57$$ && 1 == $params$$57$$.length && this.$setAngle$($params$$57$$[0])
};
D.$DvtRatingGauge$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtRatingGauge", D.$DvtRatingGauge$$);
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGauge$$, D.$DvtGauge$$, "DvtRatingGauge");
D.$DvtRatingGauge$newInstance$$ = function $$DvtRatingGauge$newInstance$$$($context$$698$$, $callback$$142$$, $callbackObj$$112$$) {
  var $gauge$$57$$ = new D.$DvtRatingGauge$$;
  $gauge$$57$$.Init($context$$698$$, $callback$$142$$, $callbackObj$$112$$);
  return $gauge$$57$$
};
D.$DvtRatingGauge$$.newInstance = D.$DvtRatingGauge$newInstance$$;
D.$DvtRatingGauge$$.prototype.Init = function $$DvtRatingGauge$$$$Init$($context$$699$$, $callback$$143$$, $callbackObj$$113$$) {
  D.$DvtRatingGauge$$.$superclass$.Init.call(this, $context$$699$$, $callback$$143$$, $callbackObj$$113$$);
  this.$Defaults$ = new D.$DvtRatingGaugeDefaults$$
};
D.$DvtRatingGauge$$.prototype.$SetOptions$ = function $$DvtRatingGauge$$$$$SetOptions$$($options$$248$$) {
  D.$DvtRatingGauge$$.$superclass$.$SetOptions$.call(this, this.$Defaults$.$calcOptions$($options$$248$$))
};
D.$DvtRatingGauge$$.prototype.$Render$ = function $$DvtRatingGauge$$$$$Render$$($container$$164$$, $width$$153$$, $height$$128$$) {
  var $outerGap$$3$$ = this.$__getOptions$().__layout.outerGap, $maxValue$$18$$ = this.$Options$.max;
  this.$_size$ = window.Math.min($height$$128$$ - 2 * $outerGap$$3$$, ($width$$153$$ - 2 * $outerGap$$3$$) / $maxValue$$18$$);
  this.$_bounds$ = new D.$DvtRectangle$$((this.$Width$ - this.$_size$ * $maxValue$$18$$) / 2, $outerGap$$3$$, this.$_size$ * $maxValue$$18$$, this.$Height$ - 2 * $outerGap$$3$$);
  D.$DvtRatingGaugeRenderer$$.$render$(this, $container$$164$$, $width$$153$$, $height$$128$$)
};
D.$DvtRatingGauge$$.prototype.$GetValueAt$ = function $$DvtRatingGauge$$$$$GetValueAt$$($x$$307$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$(this)) {
    $x$$307$$ = window.Math.max(window.Math.min($x$$307$$, this.$_bounds$.x + this.$_bounds$.$w$), this.$_bounds$.x);
    var $val$$79$$ = 0, $val$$79$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_context$) ? window.Math.max((this.$_bounds$.x + this.$_bounds$.$w$ - $x$$307$$) / this.$_size$, this.$Options$.min) : window.Math.max(($x$$307$$ - this.$_bounds$.x) / this.$_size$, this.$Options$.min);
    return D.$DvtGaugeRenderer$$.$adjustForStep$(this.$Options$, $val$$79$$)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods___processHoverEnd$$ = function $$JSCompiler_StaticMethods___processHoverEnd$$$($JSCompiler_StaticMethods___processHoverEnd$self$$) {
  (0,D.$JSCompiler_StaticMethods___updateClipRects$$)($JSCompiler_StaticMethods___processHoverEnd$self$$, $JSCompiler_StaticMethods___processHoverEnd$self$$.$Options$.value, "render")
};
D.$DvtRatingGauge$$.prototype.$__processValueChangeStart$ = function $$DvtRatingGauge$$$$$__processValueChangeStart$$($x$$310$$, $y$$276$$) {
  (0,D.$JSCompiler_StaticMethods___updateClipRects$$)(this, this.$GetValueAt$($x$$310$$, $y$$276$$), "hover")
};
D.$DvtRatingGauge$$.prototype.$__processValueChangeMove$ = function $$DvtRatingGauge$$$$$__processValueChangeMove$$($x$$311$$, $y$$277$$) {
  var $value$$144$$ = this.$GetValueAt$($x$$311$$, $y$$277$$);
  (0,D.$JSCompiler_StaticMethods___updateClipRects$$)(this, $value$$144$$, "hover");
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$(this.$Options$.value, $value$$144$$, D.$JSCompiler_alias_FALSE$$))
};
D.$DvtRatingGauge$$.prototype.$__processValueChangeEnd$ = function $$DvtRatingGauge$$$$$__processValueChangeEnd$$($x$$312$$, $y$$278$$) {
  var $oldValue$$2$$ = this.$Options$.value;
  this.$Options$.value = this.$GetValueAt$($x$$312$$, $y$$278$$);
  this.$Options$.changed = D.$JSCompiler_alias_TRUE$$;
  this.$render$();
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($oldValue$$2$$, this.$Options$.value, D.$JSCompiler_alias_FALSE$$));
  this.$__dispatchEvent$(new D.$DvtValueChangeEvent$$($oldValue$$2$$, this.$Options$.value, D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_StaticMethods___updateClipRects$$ = function $$JSCompiler_StaticMethods___updateClipRects$$$($JSCompiler_StaticMethods___updateClipRects$self$$, $selContainer$$1_unselContainer$$1_value$$145$$, $proc_selClip_unselClip$$, $container$$165_hoverContainer$$1$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($JSCompiler_StaticMethods___updateClipRects$self$$)) {
    $container$$165_hoverContainer$$1$$ || ($container$$165_hoverContainer$$1$$ = $JSCompiler_StaticMethods___updateClipRects$self$$.$_container$);
    var $isRTL$$27$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods___updateClipRects$self$$.$_context$);
    $selContainer$$1_unselContainer$$1_value$$145$$ = window.Math.max(window.Math.min($selContainer$$1_unselContainer$$1_value$$145$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$Options$.max), 0);
    var $a$$66_hoverClip$$ = 0, $b$$59$$ = $selContainer$$1_unselContainer$$1_value$$145$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$, $c$$43$$ = $selContainer$$1_unselContainer$$1_value$$145$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$;
    "render" == $proc_selClip_unselClip$$ && ($a$$66_hoverClip$$ = $selContainer$$1_unselContainer$$1_value$$145$$ * $JSCompiler_StaticMethods___updateClipRects$self$$.$_size$, $b$$59$$ = 0);
    $isRTL$$27$$ ? ($selContainer$$1_unselContainer$$1_value$$145$$ = $container$$165_hoverContainer$$1$$.$getChildAt$(0), $proc_selClip_unselClip$$ = new D.$DvtClipPath$$("unsel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($proc_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - 
    $c$$43$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($selContainer$$1_unselContainer$$1_value$$145$$, $proc_selClip_unselClip$$), $selContainer$$1_unselContainer$$1_value$$145$$ = $container$$165_hoverContainer$$1$$.$getChildAt$(1), $proc_selClip_unselClip$$ = new D.$DvtClipPath$$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($proc_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + 
    $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$43$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $a$$66_hoverClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($selContainer$$1_unselContainer$$1_value$$145$$, $proc_selClip_unselClip$$), $container$$165_hoverContainer$$1$$ = $container$$165_hoverContainer$$1$$.$getChildAt$(2), $a$$66_hoverClip$$ = new D.$DvtClipPath$$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), 
    (0,D.$JSCompiler_StaticMethods_addRect$$)($a$$66_hoverClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$43$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $b$$59$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$)) : ($selContainer$$1_unselContainer$$1_value$$145$$ = $container$$165_hoverContainer$$1$$.$getChildAt$(0), $proc_selClip_unselClip$$ = new D.$DvtClipPath$$("unsel" + 
    $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($proc_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x + $c$$43$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$w$ - $c$$43$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($selContainer$$1_unselContainer$$1_value$$145$$, 
    $proc_selClip_unselClip$$), $selContainer$$1_unselContainer$$1_value$$145$$ = $container$$165_hoverContainer$$1$$.$getChildAt$(1), $proc_selClip_unselClip$$ = new D.$DvtClipPath$$("sel" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($proc_selClip_unselClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, $a$$66_hoverClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$), 
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)($selContainer$$1_unselContainer$$1_value$$145$$, $proc_selClip_unselClip$$), $container$$165_hoverContainer$$1$$ = $container$$165_hoverContainer$$1$$.$getChildAt$(2), $a$$66_hoverClip$$ = new D.$DvtClipPath$$("hover" + $JSCompiler_StaticMethods___updateClipRects$self$$.getId()), (0,D.$JSCompiler_StaticMethods_addRect$$)($a$$66_hoverClip$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.x, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.y, 
    $b$$59$$, $JSCompiler_StaticMethods___updateClipRects$self$$.$_bounds$.$h$));
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)($container$$165_hoverContainer$$1$$, $a$$66_hoverClip$$)
  }
};
D.$DvtRatingGauge$$.prototype.$CreateEventManager$ = function $$DvtRatingGauge$$$$$CreateEventManager$$() {
  return new D.$DvtRatingGaugeEventManager$$(this)
};
D.$DvtRatingGaugeDefaults$$ = function $$DvtRatingGaugeDefaults$$$() {
  this.Init({skyros:D.$DvtRatingGaugeDefaults$VERSION_1$$, alta:D.$DvtRatingGaugeDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeDefaults$$, D.$DvtGaugeDefaults$$, "DvtRatingGaugeDefaults");
D.$DvtRatingGaugeDefaults$SKIN_ALTA$$ = {unselectedState:{shape:"star", color:"#C4CED7", borderColor:D.$JSCompiler_alias_NULL$$}, selectedState:{shape:"star", color:"#F8C15A", borderColor:D.$JSCompiler_alias_NULL$$}, hoverState:{shape:"star", color:"#007CC8", borderColor:D.$JSCompiler_alias_NULL$$}, changedState:{shape:"star", color:"#ED2C02", borderColor:D.$JSCompiler_alias_NULL$$}};
D.$DvtRatingGaugeDefaults$VERSION_1$$ = {min:0, max:5, unselectedState:{shape:"star", color:"#F2F2F2", borderColor:"#B6B6B6"}, selectedState:{shape:"star", color:"#F8C15A", borderColor:"#F5A700"}, hoverState:{shape:"star", color:"#66A7DA", borderColor:"#4A86C5"}, changedState:{shape:"star", color:"#F8C15A", borderColor:"#959595"}, step:1};
D.$DvtRatingGaugePeer$$ = function $$DvtRatingGaugePeer$$$($gauge$$34$$) {
  this.Init();
  this.$_gauge$ = $gauge$$34$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugePeer$$, D.$DvtSimpleObjPeer$$, "DvtRatingGaugePeer");
D.$DvtRatingGaugePeer$$.prototype.$getDatatip$ = function $$DvtRatingGaugePeer$$$$$getDatatip$$($options$$210_target$$66$$, $threshold$$7_thresholdIndex$$6_x$$193$$, $y$$167$$) {
  $options$$210_target$$66$$ = this.$_gauge$.$__getOptions$();
  $threshold$$7_thresholdIndex$$6_x$$193$$ = this.$_gauge$.$__getEventManager$().isEditing ? D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$(this.$_gauge$, this.$_gauge$.$GetValueAt$($threshold$$7_thresholdIndex$$6_x$$193$$, $y$$167$$)) : D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$(this.$_gauge$);
  return($threshold$$7_thresholdIndex$$6_x$$193$$ = D.$DvtGaugeDataUtils$$.$getThreshold$(this.$_gauge$, $threshold$$7_thresholdIndex$$6_x$$193$$)) && $threshold$$7_thresholdIndex$$6_x$$193$$.shortDesc ? $threshold$$7_thresholdIndex$$6_x$$193$$.shortDesc : $options$$210_target$$66$$.shortDesc
};
D.$DvtRatingGaugeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeRenderer$$, D.$DvtObj$$, "DvtRatingGaugeRenderer");
D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$ = ["circle", "diamond", "rectangle", "star", "triangle"];
D.$DvtRatingGaugeRenderer$$.$render$ = function $$DvtRatingGaugeRenderer$$$$render$$($gauge$$22$$, $container$$117$$, $threshold$$2_width$$110$$, $bounds$$71_height$$91$$) {
  if(D.$DvtGaugeDataUtils$$.$hasData$($gauge$$22$$)) {
    var $options$$203$$ = $gauge$$22$$.$__getOptions$(), $outerGap$$1_unselectedOptions$$ = $options$$203$$.__layout.outerGap, $maxValue$$12_overlayRect$$ = $options$$203$$.max, $size$$36$$ = window.Math.min($bounds$$71_height$$91$$ - 2 * $outerGap$$1_unselectedOptions$$, ($threshold$$2_width$$110$$ - 2 * $outerGap$$1_unselectedOptions$$) / $maxValue$$12_overlayRect$$);
    $bounds$$71_height$$91$$ = new D.$DvtRectangle$$(($threshold$$2_width$$110$$ - $size$$36$$ * $maxValue$$12_overlayRect$$) / 2, $outerGap$$1_unselectedOptions$$, $size$$36$$ * $maxValue$$12_overlayRect$$, $bounds$$71_height$$91$$ - 2 * $outerGap$$1_unselectedOptions$$);
    $threshold$$2_width$$110$$ = D.$DvtGaugeDataUtils$$.$getThreshold$($gauge$$22$$, D.$DvtGaugeDataUtils$$.$getValueThresholdIndex$($gauge$$22$$));
    var $selectedColor$$1_selectedOptions$$ = $options$$203$$.selectedState.color, $changedColor_changedOptions$$ = $options$$203$$.changedState.color, $selectedBorderColor_unselContainer$$ = $options$$203$$.selectedState.borderColor, $changedBorderColor_hoverOptions$$ = $options$$203$$.changedState.borderColor;
    $threshold$$2_width$$110$$ && $threshold$$2_width$$110$$.color && ($changedColor_changedOptions$$ = $selectedColor$$1_selectedOptions$$ = $threshold$$2_width$$110$$.color);
    $threshold$$2_width$$110$$ && $threshold$$2_width$$110$$.borderColor && ($changedBorderColor_hoverOptions$$ = $selectedBorderColor_unselContainer$$ = $threshold$$2_width$$110$$.borderColor);
    $outerGap$$1_unselectedOptions$$ = {value:0, type:$options$$203$$.unselectedState.shape, color:$options$$203$$.unselectedState.color, borderColor:$options$$203$$.unselectedState.borderColor, visualEffects:$options$$203$$.visualEffects};
    $selectedColor$$1_selectedOptions$$ = {value:0, type:$options$$203$$.selectedState.shape, color:$selectedColor$$1_selectedOptions$$, borderColor:$selectedBorderColor_unselContainer$$, visualEffects:$options$$203$$.visualEffects};
    $changedColor_changedOptions$$ = {value:0, type:$options$$203$$.changedState.shape, color:$changedColor_changedOptions$$, borderColor:$changedBorderColor_hoverOptions$$, visualEffects:$options$$203$$.visualEffects};
    $changedBorderColor_hoverOptions$$ = {value:0, type:$options$$203$$.hoverState.shape, color:$options$$203$$.hoverState.color, borderColor:$options$$203$$.hoverState.borderColor, visualEffects:$options$$203$$.visualEffects};
    "dot" == $options$$203$$.unselectedState.shape && ($outerGap$$1_unselectedOptions$$.type = "circle", $outerGap$$1_unselectedOptions$$.visualEffects = "none", $outerGap$$1_unselectedOptions$$.size = 0.05);
    $selectedBorderColor_unselContainer$$ = new D.$DvtContainer$$($gauge$$22$$.$_context$);
    $container$$117$$.$addChild$($selectedBorderColor_unselContainer$$);
    var $selContainer$$ = new D.$DvtContainer$$($gauge$$22$$.$_context$);
    $container$$117$$.$addChild$($selContainer$$);
    var $hoverContainer$$ = new D.$DvtContainer$$($gauge$$22$$.$_context$);
    $container$$117$$.$addChild$($hoverContainer$$);
    (0,D.$JSCompiler_StaticMethods___updateClipRects$$)($gauge$$22$$, $options$$203$$.value, "render", $container$$117$$);
    for(var $i$$537$$ = 0;$i$$537$$ < $maxValue$$12_overlayRect$$;$i$$537$$++) {
      if("none" != $options$$203$$.unselectedState.shape) {
        var $changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$22$$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$);
        $selectedBorderColor_unselContainer$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$);
        (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$71_height$$91$$.x + $i$$537$$ * $size$$36$$, $bounds$$71_height$$91$$.y + $bounds$$71_height$$91$$.$h$ / 2 - $size$$36$$ / 2);
        -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $outerGap$$1_unselectedOptions$$.type) && ($outerGap$$1_unselectedOptions$$.type = "star");
        $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($outerGap$$1_unselectedOptions$$, $size$$36$$, $size$$36$$)
      }
      $options$$203$$.changed ? ($changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$22$$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$), $selContainer$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$71_height$$91$$.x + $i$$537$$ * $size$$36$$, $bounds$$71_height$$91$$.y + $bounds$$71_height$$91$$.$h$ / 
      2 - $size$$36$$ / 2), -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $changedColor_changedOptions$$.type) && ($changedColor_changedOptions$$.type = "star"), $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($changedColor_changedOptions$$, $size$$36$$, $size$$36$$)) : ($changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$22$$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$), 
      $selContainer$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$71_height$$91$$.x + $i$$537$$ * $size$$36$$, $bounds$$71_height$$91$$.y + $bounds$$71_height$$91$$.$h$ / 2 - $size$$36$$ / 2), -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $selectedColor$$1_selectedOptions$$.type) && ($selectedColor$$1_selectedOptions$$.type = "star"), $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($selectedColor$$1_selectedOptions$$, 
      $size$$36$$, $size$$36$$));
      $changedLED_hoverLED_selectedLED_unselectedLED$$ = (0,D.$DvtLedGauge$newInstance$$)($gauge$$22$$.$_context$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$);
      $hoverContainer$$.$addChild$($changedLED_hoverLED_selectedLED_unselectedLED$$);
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($changedLED_hoverLED_selectedLED_unselectedLED$$, $bounds$$71_height$$91$$.x + $i$$537$$ * $size$$36$$, $bounds$$71_height$$91$$.y + $bounds$$71_height$$91$$.$h$ / 2 - $size$$36$$ / 2);
      -1 == D.$DvtArrayUtils$$.$getIndex$(D.$DvtRatingGaugeRenderer$$.$_VALID_SHAPES$, $changedBorderColor_hoverOptions$$.type) && ($changedBorderColor_hoverOptions$$.type = "star");
      $changedLED_hoverLED_selectedLED_unselectedLED$$.$render$($changedBorderColor_hoverOptions$$, $size$$36$$, $size$$36$$)
    }
    $maxValue$$12_overlayRect$$ = new D.$DvtRect$$($gauge$$22$$.$_context$, $bounds$$71_height$$91$$.x, $bounds$$71_height$$91$$.y, $bounds$$71_height$$91$$.$w$, $bounds$$71_height$$91$$.$h$);
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($maxValue$$12_overlayRect$$);
    $container$$117$$.$addChild$($maxValue$$12_overlayRect$$);
    ($threshold$$2_width$$110$$ && $threshold$$2_width$$110$$.shortDesc ? $threshold$$2_width$$110$$.shortDesc : $options$$203$$.shortDesc) && $gauge$$22$$.$__getEventManager$().$associate$($maxValue$$12_overlayRect$$, new D.$DvtRatingGaugePeer$$($gauge$$22$$))
  }else {
    D.$DvtGaugeRenderer$$.$renderEmptyText$($gauge$$22$$, $container$$117$$, new D.$DvtRectangle$$(0, 0, $threshold$$2_width$$110$$, $bounds$$71_height$$91$$))
  }
};
D.$DvtRatingGaugeEventManager$$ = function $$DvtRatingGaugeEventManager$$$($gauge$$27$$) {
  this.Init($gauge$$27$$.$_context$, $gauge$$27$$.$__dispatchEvent$, $gauge$$27$$);
  this.$_gauge$ = $gauge$$27$$;
  this.$_bValueChanged$ = this.$isEditing$ = D.$JSCompiler_alias_FALSE$$;
  this.$_isIE$ = (0,D.$DvtAgent$isPlatformIE$$)();
  this.$_stopAutoMouseOut$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtRatingGaugeEventManager$$, D.$DvtGaugeEventManager$$, "DvtRatingGaugeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtRatingGaugeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$408$$) {
  if(this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ && !this.$_bValueChanged$) {
    var $coords$$21$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$408$$.pageX, $event$$408$$.pageY), $JSCompiler_StaticMethods___processHoverStart$self$$inline_5431$$ = this.$_gauge$;
    (0,D.$JSCompiler_StaticMethods___updateClipRects$$)($JSCompiler_StaticMethods___processHoverStart$self$$inline_5431$$, $JSCompiler_StaticMethods___processHoverStart$self$$inline_5431$$.$GetValueAt$($coords$$21$$.x, $coords$$21$$.y), "hover");
    this.$isEditing$ = D.$JSCompiler_alias_TRUE$$
  }
  D.$DvtGaugeEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$408$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$409$$) {
  if(this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$) {
    if(this.$_isIE$ && this.$_bValueChanged$ && this.$_stopAutoMouseOut$) {
      this.$_stopAutoMouseOut$ = D.$JSCompiler_alias_FALSE$$;
      return
    }
    (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $event$$409$$.pageX, $event$$409$$.pageY);
    (0,D.$JSCompiler_StaticMethods___processHoverEnd$$)(this.$_gauge$);
    this.$_bValueChanged$ = D.$JSCompiler_alias_FALSE$$
  }
  D.$DvtGaugeEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$409$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($coords$$23_event$$410$$) {
  this.$_bValueChanged$ || (this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ ? (this.$isEditing$ = D.$JSCompiler_alias_TRUE$$, this.$hideTooltip$(), $coords$$23_event$$410$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$23_event$$410$$.pageX, $coords$$23_event$$410$$.pageY), this.$_gauge$.$__processValueChangeStart$($coords$$23_event$$410$$.x, $coords$$23_event$$410$$.y)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseDown$.call(this, $coords$$23_event$$410$$))
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($coords$$24_event$$411$$) {
  this.$isEditing$ && (this.$_gauge$.$__getOptions$().readOnly === D.$JSCompiler_alias_FALSE$$ ? (this.$isEditing$ = D.$JSCompiler_alias_FALSE$$, $coords$$24_event$$411$$ = (0,D.$JSCompiler_StaticMethods_GetRelativePosition$$)(this, $coords$$24_event$$411$$.pageX, $coords$$24_event$$411$$.pageY), this.$_gauge$.$__processValueChangeEnd$($coords$$24_event$$411$$.x, $coords$$24_event$$411$$.y), (0,D.$JSCompiler_StaticMethods___processHoverEnd$$)(this.$_gauge$), this.$_bValueChanged$ = D.$JSCompiler_alias_TRUE$$, 
  this.$_isIE$ && (this.$_stopAutoMouseOut$ = D.$JSCompiler_alias_TRUE$$)) : D.$DvtGaugeEventManager$$.$superclass$.$OnMouseUp$.call(this, $coords$$24_event$$411$$))
};
D.$JSCompiler_prototypeAlias$$.$IsShowingTooltipWhileEditing$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
});