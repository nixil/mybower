define(['./DvtToolkit', './DvtBaseTreeView'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtSunburstRotationEvent$$ = function $$DvtSunburstRotationEvent$$$($startAngle$$13$$, $bComplete$$1$$) {
  this.Init($bComplete$$1$$ === D.$JSCompiler_alias_FALSE$$ ? "sunburstRotationInput" : "sunburstRotation");
  this.$_startAngle$ = $startAngle$$13$$
};
(0,D.$goog$exportSymbol$$)("DvtSunburstRotationEvent", D.$DvtSunburstRotationEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstRotationEvent$$, D.$DvtBaseComponentEvent$$, "DvtSunburstRotationEvent");
D.$DvtSunburstRotationEvent$$.TYPE = "sunburstRotation";
D.$DvtSunburstRotationEvent$$.TYPE_INPUT = "sunburstRotationInput";
D.$DvtSunburstRotationEvent$$.prototype.$getStartAngle$ = (0,D.$JSCompiler_get$$)("$_startAngle$");
D.$DvtSunburstRotationEvent$$.prototype.getStartAngle = D.$DvtSunburstRotationEvent$$.prototype.$getStartAngle$;
D.$DvtBaseSunburst$$ = function $$DvtBaseSunburst$$$($context$$692$$, $callback$$136$$, $callbackObj$$106$$) {
  this.Init($context$$692$$, $callback$$136$$, $callbackObj$$106$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseSunburst$$, D.$DvtBaseTreeView$$, "DvtBaseSunburst");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseSunburst$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$693$$, $callback$$137$$, $callbackObj$$107$$) {
  D.$DvtBaseSunburst$$.$superclass$.Init.call(this, $context$$693$$, $callback$$137$$, $callbackObj$$107$$);
  this.$Defaults$ = new D.$DvtSunburstDefaults$$;
  this.$_angleExtent$ = 2 * window.Math.PI
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($xmlString$$18$$) {
  return(new D.$DvtSunburstParser$$(this)).parse($xmlString$$18$$)
};
D.$JSCompiler_prototypeAlias$$.$ApplyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$ApplyParsedProperties$$($props$$28$$) {
  D.$DvtBaseSunburst$$.$superclass$.$ApplyParsedProperties$.call(this, $props$$28$$);
  this.$_rotation$ = $props$$28$$.rotation;
  this.$_rotateCursor$ = (0,D.$DvtAgent$isPlatformIE$$)() ? "url(" + this.$_resources$.cursorRotate + "), auto" : "url(" + this.$_resources$.cursorRotate + ") 8 8, auto";
  this.$_startAngle$ = (360 - $props$$28$$.$startAngle$) * D.$DvtSunburstNode$TWO_PI$$ / 360;
  this.$_startAngle$ > window.Math.PI && (this.$_startAngle$ -= D.$DvtSunburstNode$TWO_PI$$)
};
D.$JSCompiler_prototypeAlias$$.$Layout$ = function $$JSCompiler_prototypeAlias$$$$Layout$$($availSpace$$111$$) {
  var $bufferSpace$$1$$ = window.Math.max(window.Math.ceil(3 * window.Math.min($availSpace$$111$$.$w$, $availSpace$$111$$.$h$) / 400), 2);
  $availSpace$$111$$.x += $bufferSpace$$1$$;
  $availSpace$$111$$.y += $bufferSpace$$1$$;
  $availSpace$$111$$.$w$ -= 2 * $bufferSpace$$1$$;
  $availSpace$$111$$.$h$ -= 2 * $bufferSpace$$1$$;
  (0,D.$JSCompiler_StaticMethods_LayoutBreadcrumbs$$)(this, $availSpace$$111$$);
  (0,D.$JSCompiler_StaticMethods_LayoutLegend$$)(this, $availSpace$$111$$);
  this.$_totalRadius$ = window.Math.floor(window.Math.min($availSpace$$111$$.$w$, $availSpace$$111$$.$h$) / 2);
  this.$_root$ && D.$DvtSunburstLayout$$.$layout$(this.$_totalRadius$, this.$_root$, this.$_startAngle$, this.$_angleExtent$, this.$Sorting$)
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$161$$, $bounds$$141$$) {
  (0,D.$JSCompiler_StaticMethods_RenderBackground$$)(this, $container$$161$$);
  this.$_breadcrumbs$ && $container$$161$$.$addChild$(this.$_breadcrumbs$);
  this.$_legend$ && ($container$$161$$.$addChild$(this.$_legend$), this.$_legend$ = D.$JSCompiler_alias_NULL$$);
  this.$_translatePt$ = new D.$DvtPoint$$($bounds$$141$$.x + $bounds$$141$$.$w$ / 2, $bounds$$141$$.y + $bounds$$141$$.$h$ / 2);
  if("on" == this.$_rotation$ && (0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    var $buffer$$10_nodeContainer$$12_rotationShape$$ = (0,D.$DvtAgent$isTouchDevice$$)() ? 60 : 15, $buffer$$10_nodeContainer$$12_rotationShape$$ = new D.$DvtCircle$$(this.$_context$, $bounds$$141$$.x + $bounds$$141$$.$w$ / 2, $bounds$$141$$.y + $bounds$$141$$.$h$ / 2, this.$_totalRadius$ + $buffer$$10_nodeContainer$$12_rotationShape$$);
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($buffer$$10_nodeContainer$$12_rotationShape$$);
    $buffer$$10_nodeContainer$$12_rotationShape$$.setCursor(this.$_rotateCursor$);
    $container$$161$$.$addChild$($buffer$$10_nodeContainer$$12_rotationShape$$);
    this.$__getEventManager$().$associate$($buffer$$10_nodeContainer$$12_rotationShape$$, new D.$DvtBaseTreePeer$$(D.$JSCompiler_alias_NULL$$, "_rotationShape"))
  }
  $buffer$$10_nodeContainer$$12_rotationShape$$ = new D.$DvtContainer$$(this.$_context$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($buffer$$10_nodeContainer$$12_rotationShape$$, this.$_translatePt$.x, this.$_translatePt$.y);
  $container$$161$$.$addChild$($buffer$$10_nodeContainer$$12_rotationShape$$);
  if((0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    var $nodeLayer$$ = new D.$DvtContainer$$(this.$_context$);
    $buffer$$10_nodeContainer$$12_rotationShape$$.$addChild$($nodeLayer$$);
    this.$_root$.$render$($nodeLayer$$);
    this.$_selectedLayer$ = new D.$DvtContainer$$(this.$_context$);
    $buffer$$10_nodeContainer$$12_rotationShape$$.$addChild$(this.$_selectedLayer$);
    this.$_hoverLayer$ = new D.$DvtContainer$$(this.$_context$);
    $buffer$$10_nodeContainer$$12_rotationShape$$.$addChild$(this.$_hoverLayer$)
  }else {
    (0,D.$JSCompiler_StaticMethods_RenderEmptyText$$)(this, $container$$161$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$73$$, $context$$694$$, $callback$$138$$, $callbackObj$$108$$) {
  return new D.$DvtSunburstEventManager$$($view$$73$$, $context$$694$$, $callback$$138$$, $callbackObj$$108$$)
};
D.$JSCompiler_prototypeAlias$$.$GetDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$GetDisplayAnimation$$($container$$162$$, $bounds$$142$$) {
  if("fan" === this.$AnimationOnDisplay$ && (0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    this.$_animateAngleExtent$(0);
    var $anim$$40$$ = new D.$DvtCustomAnimation$$(this.$_context$, this, this.$AnimationDuration$);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$40$$.$_animator$, "typeNumber", this, this.$_getAngleExtent$, this.$_animateAngleExtent$, 2 * window.Math.PI);
    return $anim$$40$$
  }
  return D.$DvtBaseSunburst$$.$superclass$.$GetDisplayAnimation$.call(this, $container$$162$$, $bounds$$142$$)
};
D.$JSCompiler_prototypeAlias$$.$GetDeleteContainer$ = function $$JSCompiler_prototypeAlias$$$$GetDeleteContainer$$() {
  var $ret$$129$$ = D.$DvtBaseSunburst$$.$superclass$.$GetDeleteContainer$.call(this);
  $ret$$129$$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($ret$$129$$, this.$_translatePt$.x, this.$_translatePt$.y);
  return $ret$$129$$
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  if(!this.$AnimationStopped$) {
    this.$_container$.$removeChildren$();
    var $availSpace$$112_selectedNodes$$4$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
    this.$Layout$($availSpace$$112_selectedNodes$$4$$);
    this.$Render$(this.$_container$, $availSpace$$112_selectedNodes$$4$$);
    for(var $availSpace$$112_selectedNodes$$4$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$827$$ = 0;$i$$827$$ < $availSpace$$112_selectedNodes$$4$$.length;$i$$827$$++) {
      $availSpace$$112_selectedNodes$$4$$[$i$$827$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
    }
  }
  this.$_angleExtent$ < 2 * window.Math.PI && this.$_animateAngleExtent$(2 * window.Math.PI);
  D.$DvtBaseSunburst$$.$superclass$.$OnAnimationEnd$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$__moveToSelectedLayer$ = function $$JSCompiler_prototypeAlias$$$$__moveToSelectedLayer$$($displayable$$88$$) {
  this.$_selectedLayer$.$addChild$($displayable$$88$$);
  !(0,D.$DvtAgent$isBrowserSafari$$)() && !(0,D.$DvtAgent$isPlatformGecko$$)() && ((0,D.$JSCompiler_StaticMethods_removeAllDrawEffects$$)(this.$_selectedLayer$), (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(this.$_selectedLayer$, D.$DvtBaseTreeNode$__NODE_SELECTED_SHADOW$$))
};
D.$JSCompiler_prototypeAlias$$.$_getAngleExtent$ = (0,D.$JSCompiler_get$$)("$_angleExtent$");
D.$JSCompiler_prototypeAlias$$.$_animateAngleExtent$ = function $$JSCompiler_prototypeAlias$$$$_animateAngleExtent$$($extent$$1$$) {
  this.$_angleExtent$ = $extent$$1$$;
  this.$Layout$(new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  this.$_root$ && (0,D.$JSCompiler_StaticMethods_updateShapes$$)(this.$_root$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_StaticMethods___setRotationAnchor$$ = function $$JSCompiler_StaticMethods___setRotationAnchor$$$($JSCompiler_StaticMethods___setRotationAnchor$self$$, $angle$$55$$) {
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$_currentAngle$ = $angle$$55$$;
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$ = new D.$DvtRect$$($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_context$, 0, 0, $JSCompiler_StaticMethods___setRotationAnchor$self$$.$Width$, $JSCompiler_StaticMethods___setRotationAnchor$self$$.$Height$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$);
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$.setCursor($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotateCursor$);
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$addChild$($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$);
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$__getEventManager$().$associate$($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$, new D.$DvtBaseTreePeer$$(D.$JSCompiler_alias_NULL$$, "_rotationShape"))
};
D.$JSCompiler_StaticMethods___rotate$$ = function $$JSCompiler_StaticMethods___rotate$$$($JSCompiler_StaticMethods___rotate$self$$, $newAngle$$1$$) {
  var $change$$1$$ = $newAngle$$1$$ - $JSCompiler_StaticMethods___rotate$self$$.$_currentAngle$;
  $JSCompiler_StaticMethods___rotate$self$$.$_currentAngle$ = $newAngle$$1$$;
  $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ += $change$$1$$;
  $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ < -window.Math.PI ? $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ += 2 * window.Math.PI : $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ > window.Math.PI && ($JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ -= 2 * window.Math.PI);
  $JSCompiler_StaticMethods___rotate$self$$.$Layout$(new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods___rotate$self$$.$Width$, $JSCompiler_StaticMethods___rotate$self$$.$Height$));
  $JSCompiler_StaticMethods___rotate$self$$.$_root$ && (0,D.$JSCompiler_StaticMethods_updateShapes$$)($JSCompiler_StaticMethods___rotate$self$$.$_root$, D.$JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods___rotate$self$$.$__dispatchEvent$(new D.$DvtSunburstRotationEvent$$(360 - window.Math.round(180 * $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ / window.Math.PI), D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_StaticMethods___endRotation$$ = function $$JSCompiler_StaticMethods___endRotation$$$($JSCompiler_StaticMethods___endRotation$self$$) {
  $JSCompiler_StaticMethods___endRotation$self$$.$_currentAngle$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods___endRotation$self$$.removeChild($JSCompiler_StaticMethods___endRotation$self$$.$_rotationMask$);
  $JSCompiler_StaticMethods___endRotation$self$$.$_rotationMask$ = D.$JSCompiler_alias_NULL$$;
  var $degrees$$8$$ = 360 - window.Math.round(180 * $JSCompiler_StaticMethods___endRotation$self$$.$_startAngle$ / window.Math.PI);
  $JSCompiler_StaticMethods___endRotation$self$$.$__dispatchEvent$(new D.$DvtSunburstRotationEvent$$($degrees$$8$$, D.$JSCompiler_alias_FALSE$$));
  $JSCompiler_StaticMethods___endRotation$self$$.$__dispatchEvent$(new D.$DvtSunburstRotationEvent$$($degrees$$8$$, D.$JSCompiler_alias_TRUE$$))
};
D.$JSCompiler_StaticMethods__calcAngle$$ = function $$JSCompiler_StaticMethods__calcAngle$$$($JSCompiler_StaticMethods__calcAngle$self$$, $x$$304$$, $y$$270$$) {
  return window.Math.atan2($y$$270$$ - $JSCompiler_StaticMethods__calcAngle$self$$.$_translatePt$.y, $x$$304$$ - $JSCompiler_StaticMethods__calcAngle$self$$.$_translatePt$.x)
};
D.$DvtSunburst$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportSymbol$$)("DvtSunburst", D.$DvtSunburst$$);
D.$DvtObj$$.$createSubclass$(D.$DvtSunburst$$, D.$DvtBaseSunburst$$, "DvtSunburst");
D.$DvtSunburst$$.newInstance = function $$DvtSunburst$$$newInstance$($context$$695$$, $callback$$139$$, $callbackObj$$109$$) {
  var $component$$20$$ = new D.$DvtSunburst$$;
  $component$$20$$.Init($context$$695$$, $callback$$139$$, $callbackObj$$109$$);
  return $component$$20$$
};
D.$DvtSunburst$$.getDefaults = function $$DvtSunburst$$$getDefaults$($skin$$16$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtSunburstDefaults$$, $skin$$16$$)
};
D.$DvtSunburst$$.prototype.$render$ = function $$DvtSunburst$$$$$render$$($options$$246_xmlString$$19$$, $width$$151$$, $height$$126$$) {
  $options$$246_xmlString$$19$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$246_xmlString$$19$$), (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  $options$$246_xmlString$$19$$ = (new D.$DvtSunburstJsonUtils$$).$toXml$(this.$Options$);
  D.$DvtSunburst$$.$superclass$.$render$.call(this, $options$$246_xmlString$$19$$, $width$$151$$, $height$$126$$)
};
D.$DvtSunburst$$.prototype.render = D.$DvtSunburst$$.prototype.$render$;
D.$DvtSunburst$$.prototype.$getBundle$ = function $$DvtSunburst$$$$$getBundle$$() {
  this.$_bundle$ || (this.$_bundle$ = new D.$DvtSunburstBundle$$);
  return this.$_bundle$
};
D.$DvtSunburstParser$$ = function $$DvtSunburstParser$$$($sunburst$$2$$) {
  this.Init($sunburst$$2$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstParser$$, D.$DvtBaseTreeParser$$, "DvtSunburstParser");
D.$DvtSunburstParser$$.prototype.$CreateNode$ = function $$DvtSunburstParser$$$$$CreateNode$$($treeView$$9$$, $props$$23$$, $templates$$8$$) {
  return new D.$DvtSunburstNode$$($treeView$$9$$, $props$$23$$, $templates$$8$$)
};
D.$DvtSunburstParser$$.prototype.$ParseRootAttributes$ = function $$DvtSunburstParser$$$$$ParseRootAttributes$$($xmlNode$$96$$) {
  var $ret$$94$$ = D.$DvtSunburstParser$$.$superclass$.$ParseRootAttributes$.call(this, $xmlNode$$96$$);
  $ret$$94$$.rotation = $xmlNode$$96$$.$getAttr$("r");
  $ret$$94$$.$startAngle$ = $xmlNode$$96$$.$getAttr$("sa");
  if($ret$$94$$.$startAngle$ === D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($ret$$94$$.$startAngle$)) {
    $ret$$94$$.$startAngle$ = 90
  }
  return $ret$$94$$
};
D.$DvtSunburstParser$$.prototype.$ParseNodeAttributes$ = function $$DvtSunburstParser$$$$$ParseNodeAttributes$$($xmlNode$$97$$) {
  var $ret$$95$$ = D.$DvtSunburstParser$$.$superclass$.$ParseNodeAttributes$.call(this, $xmlNode$$97$$);
  $ret$$95$$.$labelHalign$ = $xmlNode$$97$$.$getAttr$("ha");
  $ret$$95$$.$radius$ = $xmlNode$$97$$.$getAttr$("r");
  return $ret$$95$$
};
D.$DvtSunburstParser$$.prototype.$ParseAdditionalNodeStyles$ = function $$DvtSunburstParser$$$$$ParseAdditionalNodeStyles$$($nodeStyle$$3$$, $nodeHoverStyle$$3$$, $nodeSelectedStyle$$3$$, $styles$$22$$) {
  $styles$$22$$.NODE_DEFAULT_COLOR_STYLE = $nodeStyle$$3$$.$getStyle$("border-color");
  $styles$$22$$.NODE_HOVER_COLOR_STYLE = $nodeHoverStyle$$3$$.$getStyle$("border-color");
  $styles$$22$$.NODE_SELECTED_INNER_COLOR_STYLE = $nodeSelectedStyle$$3$$.$getStyle$("-tr-inner-color");
  $styles$$22$$.NODE_SELECTED_OUTER_COLOR_STYLE = $nodeSelectedStyle$$3$$.$getStyle$("-tr-outer-color")
};
D.$DvtSunburstNode$$ = function $$DvtSunburstNode$$$($sunburst$$, $props$$22$$, $templates$$7$$) {
  this.Init($sunburst$$, $props$$22$$, $templates$$7$$);
  this.$_labelDisplay$ = $props$$22$$.$labelDisplay$ ? $props$$22$$.$labelDisplay$ : "auto";
  this.$_labelHalign$ = $props$$22$$.$labelHalign$;
  this.$_radius$ = $props$$22$$.$radius$
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstNode$$, D.$DvtBaseTreeNode$$, "DvtSunburstNode");
D.$DvtSunburstNode$TWO_PI$$ = 2 * window.Math.PI;
D.$DvtSunburstNode$$.prototype.$render$ = function $$DvtSunburstNode$$$$$render$$($container$$99$$) {
  if(this.$_hasLayout$) {
    this.$_nodeContainer$ = $container$$99$$;
    this.$_shape$ = this.$_createShapeNode$();
    $container$$99$$.$addChild$(this.$_shape$);
    var $afRoot$$5_template$$27$$ = this.$_template$;
    if(!this.$_parent$ && (0 == this.$_innerRadius$ && this.$_angleExtent$ == D.$DvtSunburstNode$TWO_PI$$) && $afRoot$$5_template$$27$$) {
      var $afContext$$30_dims$$41_sqrt2$$ = window.Math.sqrt(2), $aw$$3_matrix$$11$$ = this.$_outerRadius$ * $afContext$$30_dims$$41_sqrt2$$ - 4;
      this.$_x$ = -this.$_outerRadius$ / $afContext$$30_dims$$41_sqrt2$$ + 2;
      this.$_y$ = -this.$_outerRadius$ / $afContext$$30_dims$$41_sqrt2$$ + 2;
      $afContext$$30_dims$$41_sqrt2$$ = this.$_view$.$_afContext$;
      $afContext$$30_dims$$41_sqrt2$$.$_elContext$ = this.$_elAttributes$;
      0 < $aw$$3_matrix$$11$$ && 0 < $aw$$3_matrix$$11$$ && ((0,D.$JSCompiler_StaticMethods_setAvailableWidth$$)($afContext$$30_dims$$41_sqrt2$$, $aw$$3_matrix$$11$$), (0,D.$JSCompiler_StaticMethods_setAvailableHeight$$)($afContext$$30_dims$$41_sqrt2$$, $aw$$3_matrix$$11$$), $afContext$$30_dims$$41_sqrt2$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this)), this.$_contentRoot$ = $afRoot$$5_template$$27$$ = D.$DvtAfComponentFactory$$.$parseAndLayout$($afContext$$30_dims$$41_sqrt2$$, 
      $afRoot$$5_template$$27$$, this.$_shape$), $afContext$$30_dims$$41_sqrt2$$ = $afRoot$$5_template$$27$$.$getDimensions$(), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($afRoot$$5_template$$27$$, this.$_x$ + ($aw$$3_matrix$$11$$ - $afContext$$30_dims$$41_sqrt2$$.$w$) / 2, this.$_y$ + ($aw$$3_matrix$$11$$ - $afContext$$30_dims$$41_sqrt2$$.$h$) / 2))
    }else {
      this.$_text$ = this.$_createTextNode$(this.$_shape$), this.$_text$ != D.$JSCompiler_alias_NULL$$ && (this.$_shape$.$addChild$(this.$_text$), this.$_pattern$ && ($afContext$$30_dims$$41_sqrt2$$ = this.$_text$.$measureDimensions$(), this.$_textBackground$ = new D.$DvtRect$$(this.$_view$.$_context$, $afContext$$30_dims$$41_sqrt2$$.x, $afContext$$30_dims$$41_sqrt2$$.y, $afContext$$30_dims$$41_sqrt2$$.$w$, $afContext$$30_dims$$41_sqrt2$$.$h$), this.$_textBackground$.$setSolidFill$("#FFFFFF"), this.$_textBackground$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), 
      this.$_shape$.$addChild$(this.$_textBackground$), $aw$$3_matrix$$11$$ = this.$_text$.$getMatrix$(), (0,D.$JSCompiler_StaticMethods_isIdentity$$)($aw$$3_matrix$$11$$) || this.$_textBackground$.$setMatrix$($aw$$3_matrix$$11$$), this.$_shape$.$addChild$(this.$_text$)))
    }
    (0,D.$JSCompiler_StaticMethods_setAriaRole$$)(this.$_shape$, "img");
    this.$UpdateAriaLabel$();
    this.$renderChildren$($container$$99$$)
  }
};
D.$DvtSunburstNode$$.prototype.$setSelected$ = function $$DvtSunburstNode$$$$$setSelected$$($selected$$31$$) {
  "off" != this.$Selectable$ && (D.$DvtSunburstNode$$.$superclass$.$setSelected$.call(this, $selected$$31$$), this.$isSelected$() ? (this.$_shape$.$setSelected$(D.$JSCompiler_alias_TRUE$$), this.$_view$.$__moveToSelectedLayer$(this.$_shape$)) : (this.$_shape$.$setSelected$(D.$JSCompiler_alias_FALSE$$), this.$_nodeContainer$ && this.$_nodeContainer$.$addChild$(this.$_shape$)))
};
D.$DvtSunburstNode$$.prototype.$showHoverEffect$ = function $$DvtSunburstNode$$$$$showHoverEffect$$() {
  this.$_shape$ && this.$_hasLayout$ && (this.$_shape$.$showHoverEffect$(), this.$isSelected$() ? this.$_view$.$__moveToSelectedLayer$(this.$_shape$) : this.$_view$.$_hoverLayer$.$addChild$(this.$_shape$))
};
D.$DvtSunburstNode$$.prototype.$hideHoverEffect$ = function $$DvtSunburstNode$$$$$hideHoverEffect$$() {
  this.$_shape$ && (this.$_hasLayout$ && !this.$isShowingKeyboardFocusEffect$()) && (this.$_shape$.$hideHoverEffect$(), !this.$isSelected$() && this.$_nodeContainer$ && this.$_nodeContainer$.$addChild$(this.$_shape$))
};
D.$JSCompiler_StaticMethods_isExpandCollapseEnabled$$ = function $$JSCompiler_StaticMethods_isExpandCollapseEnabled$$$($JSCompiler_StaticMethods_isExpandCollapseEnabled$self$$) {
  return"i" == $JSCompiler_StaticMethods_isExpandCollapseEnabled$self$$.$_drilling$ || "ir" == $JSCompiler_StaticMethods_isExpandCollapseEnabled$self$$.$_drilling$
};
D.$DvtSunburstNode$$.prototype.$getNextNavigable$ = function $$DvtSunburstNode$$$$$getNextNavigable$$($event$$393_next$$14$$) {
  var $keyCode$$25_lastVisitedChild$$, $lastVisitedMidAngle_navigables$$10$$, $i$$inline_5369_idx$$12$$, $root$$11$$;
  if($event$$393_next$$14$$.type == D.$DvtMouseEvent$CLICK$$) {
    return D.$DvtSunburstNode$$.$superclass$.$getNextNavigable$.call(this, $event$$393_next$$14$$)
  }
  $keyCode$$25_lastVisitedChild$$ = $event$$393_next$$14$$.keyCode;
  if(32 == $keyCode$$25_lastVisitedChild$$ && $event$$393_next$$14$$.ctrlKey) {
    return this
  }
  for($root$$11$$ = this;$root$$11$$.$_parent$;) {
    $root$$11$$ = $root$$11$$.$_parent$
  }
  $lastVisitedMidAngle_navigables$$10$$ = (0,D.$JSCompiler_StaticMethods_GetNodesAtDepth$$)(this, $root$$11$$, (0,D.$JSCompiler_StaticMethods_GetDepth$$)(this));
  a: {
    for($i$$inline_5369_idx$$12$$ = 0;$i$$inline_5369_idx$$12$$ < $lastVisitedMidAngle_navigables$$10$$.length;$i$$inline_5369_idx$$12$$++) {
      if(this === $lastVisitedMidAngle_navigables$$10$$[$i$$inline_5369_idx$$12$$]) {
        break a
      }
    }
    $i$$inline_5369_idx$$12$$ = -1
  }
  var $midAngle$$1$$ = this.$_startAngle$ + this.$_angleExtent$ / 2, $midAngle$$1$$ = (0,D.$DvtSunburstNode$_normalizedRadToDeg$$)($midAngle$$1$$);
  switch($keyCode$$25_lastVisitedChild$$) {
    case 38:
      if(this === $root$$11$$ || 180 < $midAngle$$1$$) {
        if($keyCode$$25_lastVisitedChild$$ = this.$_lastVisitedChild$) {
          if($lastVisitedMidAngle_navigables$$10$$ = $keyCode$$25_lastVisitedChild$$.$_startAngle$ + $keyCode$$25_lastVisitedChild$$.$_angleExtent$ / 2, $lastVisitedMidAngle_navigables$$10$$ = (0,D.$DvtSunburstNode$_normalizedRadToDeg$$)($lastVisitedMidAngle_navigables$$10$$), 180 < $lastVisitedMidAngle_navigables$$10$$) {
            return $keyCode$$25_lastVisitedChild$$
          }
        }
        $event$$393_next$$14$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$393_next$$14$$, (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)(this))
      }else {
        $event$$393_next$$14$$ = (0,D.$JSCompiler_StaticMethods__navigateToParent$$)(this)
      }
      break;
    case 40:
      if(this === $root$$11$$ || 0 <= $midAngle$$1$$ && 180 >= $midAngle$$1$$) {
        if($keyCode$$25_lastVisitedChild$$ = this.$_lastVisitedChild$) {
          if($lastVisitedMidAngle_navigables$$10$$ = $keyCode$$25_lastVisitedChild$$.$_startAngle$ + $keyCode$$25_lastVisitedChild$$.$_angleExtent$ / 2, $lastVisitedMidAngle_navigables$$10$$ = (0,D.$DvtSunburstNode$_normalizedRadToDeg$$)($lastVisitedMidAngle_navigables$$10$$), 0 <= $lastVisitedMidAngle_navigables$$10$$ && 180 >= $lastVisitedMidAngle_navigables$$10$$) {
            return $keyCode$$25_lastVisitedChild$$
          }
        }
        $event$$393_next$$14$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$393_next$$14$$, (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)(this))
      }else {
        $event$$393_next$$14$$ = (0,D.$JSCompiler_StaticMethods__navigateToParent$$)(this)
      }
      break;
    case 37:
      $event$$393_next$$14$$ = 1 == $lastVisitedMidAngle_navigables$$10$$.length ? this : 0 == $i$$inline_5369_idx$$12$$ ? $lastVisitedMidAngle_navigables$$10$$[$lastVisitedMidAngle_navigables$$10$$.length - 1] : $lastVisitedMidAngle_navigables$$10$$[$i$$inline_5369_idx$$12$$ - 1];
      break;
    case 39:
      $event$$393_next$$14$$ = 1 == $lastVisitedMidAngle_navigables$$10$$.length ? this : $i$$inline_5369_idx$$12$$ == $lastVisitedMidAngle_navigables$$10$$.length - 1 ? $lastVisitedMidAngle_navigables$$10$$[0] : $lastVisitedMidAngle_navigables$$10$$[$i$$inline_5369_idx$$12$$ + 1];
      break;
    default:
      $event$$393_next$$14$$ = this
  }
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($event$$393_next$$14$$);
  return $event$$393_next$$14$$
};
D.$JSCompiler_StaticMethods__navigateToParent$$ = function $$JSCompiler_StaticMethods__navigateToParent$$$($JSCompiler_StaticMethods__navigateToParent$self_next$$15$$) {
  var $parent$$51$$ = $JSCompiler_StaticMethods__navigateToParent$self_next$$15$$.$_parent$;
  $parent$$51$$ && ($JSCompiler_StaticMethods__navigateToParent$self_next$$15$$ = $parent$$51$$, (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($parent$$51$$));
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($JSCompiler_StaticMethods__navigateToParent$self_next$$15$$);
  return $JSCompiler_StaticMethods__navigateToParent$self_next$$15$$
};
D.$DvtSunburstNode$_normalizedRadToDeg$$ = function $$DvtSunburstNode$_normalizedRadToDeg$$$($deg_rad$$) {
  $deg_rad$$ = D.$DvtMath$$.$radsToDegrees$($deg_rad$$);
  0 > $deg_rad$$ ? $deg_rad$$ += 360 : 360 < $deg_rad$$ && ($deg_rad$$ -= 360);
  return $deg_rad$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtSunburstNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  if(this.$_shape$) {
    var $bounds$$58$$ = this.$_shape$.$getDimensions$(), $point$$32$$ = new D.$DvtPoint$$($bounds$$58$$.x, $bounds$$58$$.y), $point$$32$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this.$_shape$, $point$$32$$);
    $bounds$$58$$.x = $point$$32$$.x;
    $bounds$$58$$.y = $point$$32$$.y;
    return $bounds$$58$$
  }
  return new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_shape$ ? this.$_shape$.$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getContextMenuLocation$ = function $$JSCompiler_prototypeAlias$$$$getContextMenuLocation$$() {
  return(0,D.$JSCompiler_StaticMethods_localToStage$$)(this.$_shape$, (0,D.$DvtSunburstNode$_calcPointOnArc$$)(0.5 * (this.$_outerRadius$ + this.$_innerRadius$), this.$_startAngle$ + this.$_angleExtent$ / 2))
};
D.$JSCompiler_prototypeAlias$$.$setLayoutParams$ = function $$JSCompiler_prototypeAlias$$$$setLayoutParams$$($innerRadius$$, $outerRadius$$, $startAngle$$3$$, $angleExtent$$3$$) {
  this.$_innerRadius$ = $innerRadius$$;
  this.$_outerRadius$ = $outerRadius$$;
  this.$_startAngle$ = $startAngle$$3$$;
  this.$_angleExtent$ = $angleExtent$$3$$;
  this.$_hasLayout$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$GetFill$ = function $$JSCompiler_prototypeAlias$$$$GetFill$$() {
  return this.$_bArtificialRoot$ ? (0,D.$DvtSolidFill$invisibleFill$$)() : D.$DvtSunburstNode$$.$superclass$.$GetFill$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  var $r$$35$$ = D.$DvtColorUtils$$.$getRed$(this.$_color$), $g$$5$$ = D.$DvtColorUtils$$.$getGreen$(this.$_color$), $b$$29$$ = D.$DvtColorUtils$$.$getBlue$(this.$_color$);
  return[this.$_innerRadius$, this.$_outerRadius$, this.$_startAngle$, this.$_angleExtent$, $r$$35$$, $g$$5$$, $b$$29$$]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$55$$) {
  this.$setLayoutParams$($params$$55$$[0], $params$$55$$[1], $params$$55$$[2], $params$$55$$[3]);
  this.$_color$ = D.$DvtColorUtils$$.$makeRGB$(window.Math.round($params$$55$$[4]), window.Math.round($params$$55$$[5]), window.Math.round($params$$55$$[6]));
  (0,D.$JSCompiler_StaticMethods_updateShapes$$)(this, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$42$$, $oldNode$$17$$) {
  $oldNode$$17$$.$_hasLayout$ && 0 < $oldNode$$17$$.$_angleExtent$ ? D.$DvtSunburstNode$$.$superclass$.$animateUpdate$.call(this, $handler$$42$$, $oldNode$$17$$) : this.$animateInsert$($handler$$42$$)
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$187$$, $y$$161$$) {
  var $angle$$29$$ = (0,D.$DvtSunburstNode$_calcAngle$$)($x$$187$$, $y$$161$$);
  return window.Math.sqrt($x$$187$$ * $x$$187$$ + $y$$161$$ * $y$$161$$) >= this.$_innerRadius$ && window.Math.sqrt($x$$187$$ * $x$$187$$ + $y$$161$$ * $y$$161$$) <= this.$_outerRadius$ && (0,D.$JSCompiler_StaticMethods_ContainsAngle$$)(this, $angle$$29$$)
};
D.$JSCompiler_StaticMethods_ContainsAngle$$ = function $$JSCompiler_StaticMethods_ContainsAngle$$$($JSCompiler_StaticMethods_ContainsAngle$self$$, $angle$$30$$) {
  for(;$angle$$30$$ < $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$;) {
    $angle$$30$$ += D.$DvtSunburstNode$TWO_PI$$
  }
  for(;$angle$$30$$ - $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ > D.$DvtSunburstNode$TWO_PI$$;) {
    $angle$$30$$ -= D.$DvtSunburstNode$TWO_PI$$
  }
  return $angle$$30$$ >= $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ && $angle$$30$$ <= $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ + $JSCompiler_StaticMethods_ContainsAngle$self$$.$_angleExtent$
};
D.$DvtSunburstNode$_calcPointOnArc$$ = function $$DvtSunburstNode$_calcPointOnArc$$$($radius$$20$$, $angle$$31$$) {
  return{x:window.Math.cos($angle$$31$$) * $radius$$20$$, y:window.Math.sin($angle$$31$$) * $radius$$20$$}
};
D.$DvtSunburstNode$_calcAngle$$ = function $$DvtSunburstNode$_calcAngle$$$($x$$189$$, $y$$163$$) {
  var $angle$$32$$ = window.Math.atan2($y$$163$$, $x$$189$$);
  0 > $angle$$32$$ ? $angle$$32$$ += D.$DvtSunburstNode$TWO_PI$$ : $angle$$32$$ > D.$DvtSunburstNode$TWO_PI$$ && ($angle$$32$$ -= D.$DvtSunburstNode$TWO_PI$$);
  return $angle$$32$$
};
D.$DvtSunburstNode$$.prototype.$_createShapeNode$ = function $$DvtSunburstNode$$$$$_createShapeNode$$() {
  if(!this.$_angleExtent$ || 0 >= this.$_angleExtent$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $cmd$$9_shape$$33$$ = (0,D.$JSCompiler_StaticMethods__createPathCmd$$)(this), $cmd$$9_shape$$33$$ = new D.$DvtPath$$(this.$_view$.$_context$, $cmd$$9_shape$$33$$);
  this.$_view$.$__getEventManager$().$associate$($cmd$$9_shape$$33$$, this);
  $cmd$$9_shape$$33$$.$setAlpha$(this.$getAlpha$());
  $cmd$$9_shape$$33$$.$setFill$(this.$GetFill$());
  var $selectedInnerColor$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "NODE_SELECTED_INNER_COLOR_STYLE"), $selectedOuterColor$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#000000", "NODE_SELECTED_OUTER_COLOR_STYLE"), $hoverColor$$5$$ = (0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "NODE_HOVER_COLOR_STYLE");
  $cmd$$9_shape$$33$$.$setStroke$(new D.$DvtSolidStroke$$((0,D.$JSCompiler_StaticMethods_getResolvedColor$$)(this, "#FFFFFF", "NODE_DEFAULT_COLOR_STYLE"), 0.3));
  $cmd$$9_shape$$33$$.$setHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$5$$, 1, 3));
  $cmd$$9_shape$$33$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($selectedInnerColor$$, 1, 1.5), new D.$DvtSolidStroke$$($selectedOuterColor$$, 1, 3.5));
  $cmd$$9_shape$$33$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$5$$, 1, 3));
  $cmd$$9_shape$$33$$.$setSelectable$(this.$_view$.$_nodeSelection$ != D.$JSCompiler_alias_NULL$$ && "off" != this.$Selectable$);
  this.$_bArtificialRoot$ && ($cmd$$9_shape$$33$$.$setAlpha$(0.001), $cmd$$9_shape$$33$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$));
  return $cmd$$9_shape$$33$$
};
D.$JSCompiler_StaticMethods__createPathCmd$$ = function $$JSCompiler_StaticMethods__createPathCmd$$$($JSCompiler_StaticMethods__createPathCmd$self$$) {
  var $cmd$$10_p1$$3$$, $p2$$4$$, $p3$$1$$, $p4$$;
  $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ < D.$DvtSunburstNode$TWO_PI$$ ? ($cmd$$10_p1$$3$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p2$$4$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$), 
  $p3$$1$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$), $p4$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $cmd$$10_p1$$3$$ = window.DvtPathUtils.moveTo($cmd$$10_p1$$3$$.x, $cmd$$10_p1$$3$$.y) + 
  window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$, 1, $p2$$4$$.x, $p2$$4$$.y) + window.DvtPathUtils.lineTo($p3$$1$$.x, $p3$$1$$.y) + window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$, 
  0, $p4$$.x, $p4$$.y) + window.DvtPathUtils.closePath()) : ($cmd$$10_p1$$3$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p2$$4$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2), $p3$$1$$ = 
  (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p4$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2), $cmd$$10_p1$$3$$ = window.DvtPathUtils.moveTo($cmd$$10_p1$$3$$.x, $cmd$$10_p1$$3$$.y) + 
  window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 1, $p2$$4$$.x, $p2$$4$$.y) + window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 1, $cmd$$10_p1$$3$$.x, $cmd$$10_p1$$3$$.y), 
  0 < $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$ && ($cmd$$10_p1$$3$$ += window.DvtPathUtils.moveTo($p4$$.x, $p4$$.y) + window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 0, $p3$$1$$.x, $p3$$1$$.y) + window.DvtPathUtils.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, 
  $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 0, $p4$$.x, $p4$$.y)), $cmd$$10_p1$$3$$ += window.DvtPathUtils.closePath());
  return $cmd$$10_p1$$3$$
};
D.$DvtSunburstNode$$.prototype.$_createTextNode$ = function $$DvtSunburstNode$$$$$_createTextNode$$($JSCompiler_temp$$217_actualTextWidth$$inline_5379_container$$101_textAnchor$$inline_5380$$) {
  if(!this.$_textStr$ || !$JSCompiler_temp$$217_actualTextWidth$$inline_5379_container$$101_textAnchor$$inline_5380$$ || !this.$_labelDisplay$ || "off" == this.$_labelDisplay$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$ = D.$JSCompiler_alias_FALSE$$;
  if("auto" == this.$_labelDisplay$) {
    if($JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$ = !(0,D.$DvtAgent$isPlatformIE$$)()) {
      (0,D.$DvtAgent$_initialize$$)(), $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$ = "Windows" == D.$DvtAgent$_os$$
    }
    $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$ = $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
  }else {
    "rotated" == this.$_labelDisplay$ && ($JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$ = D.$JSCompiler_alias_TRUE$$)
  }
  if($JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$ && this.$_angleExtent$ < 2 * window.Math.PI) {
    var $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$ = window.Math.max(this.$_innerRadius$, 10), $availWidth$$inline_5375_estimatedDims$$inline_5389_rightAngle$$inline_5387$$ = this.$_outerRadius$ - $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$ - 6, $anchorRadius$$inline_5378_availHeight$$inline_5376_x1$$inline_5390$$ = 1.1 * this.$_angleExtent$ * ($angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$ + 
    6);
    if(6 >= $anchorRadius$$inline_5378_availHeight$$inline_5376_x1$$inline_5390$$) {
      $JSCompiler_temp$$217_actualTextWidth$$inline_5379_container$$101_textAnchor$$inline_5380$$ = D.$JSCompiler_alias_NULL$$
    }else {
      if($JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$ = new D.$DvtOutputText$$(this.$_view$.$_context$, this.$_textStr$, 0, 0), $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this)), (0,D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$)(this, $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$), 
      D.$DvtTextUtils$$.$fitText$($JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$, $availWidth$$inline_5375_estimatedDims$$inline_5389_rightAngle$$inline_5387$$, $anchorRadius$$inline_5378_availHeight$$inline_5376_x1$$inline_5390$$, $JSCompiler_temp$$217_actualTextWidth$$inline_5379_container$$101_textAnchor$$inline_5380$$)) {
        $anchorRadius$$inline_5378_availHeight$$inline_5376_x1$$inline_5390$$ = ($angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$ + this.$_outerRadius$) / 2;
        if("s" == this.$_labelHalign$ || "e" == this.$_labelHalign$) {
          $JSCompiler_temp$$217_actualTextWidth$$inline_5379_container$$101_textAnchor$$inline_5380$$.$addChild$($JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$), $JSCompiler_temp$$217_actualTextWidth$$inline_5379_container$$101_textAnchor$$inline_5380$$ = $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$.$getDimensions$().$w$, "s" == this.$_labelHalign$ ? $anchorRadius$$inline_5378_availHeight$$inline_5376_x1$$inline_5390$$ = 
          $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$ + 4.5 + $JSCompiler_temp$$217_actualTextWidth$$inline_5379_container$$101_textAnchor$$inline_5380$$ / 2 : "e" == this.$_labelHalign$ && ($anchorRadius$$inline_5378_availHeight$$inline_5376_x1$$inline_5390$$ = $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$ + $availWidth$$inline_5375_estimatedDims$$inline_5389_rightAngle$$inline_5387$$ - 4.5 - $JSCompiler_temp$$217_actualTextWidth$$inline_5379_container$$101_textAnchor$$inline_5380$$ / 
          2)
        }
        $JSCompiler_temp$$217_actualTextWidth$$inline_5379_container$$101_textAnchor$$inline_5380$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)($anchorRadius$$inline_5378_availHeight$$inline_5376_x1$$inline_5390$$, this.$_startAngle$ + this.$_angleExtent$ / 2);
        $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$.$alignCenter$();
        $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$.$alignMiddle$();
        $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$ = this.$_startAngle$ + this.$_angleExtent$ / 2;
        $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$ = $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$ >= D.$DvtSunburstNode$TWO_PI$$ ? $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$ - D.$DvtSunburstNode$TWO_PI$$ : $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$;
        $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$ = 0 > $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$ ? $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$ + D.$DvtSunburstNode$TWO_PI$$ : $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$;
        $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$ > 0.5 * window.Math.PI && $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$ < 1.5 * window.Math.PI && ($angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$ += window.Math.PI);
        $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$.$setRotation$($angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$);
        (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$, $JSCompiler_temp$$217_actualTextWidth$$inline_5379_container$$101_textAnchor$$inline_5380$$.x, $JSCompiler_temp$$217_actualTextWidth$$inline_5379_container$$101_textAnchor$$inline_5380$$.y);
        $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
        $JSCompiler_temp$$217_actualTextWidth$$inline_5379_container$$101_textAnchor$$inline_5380$$ = $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$
      }else {
        $JSCompiler_temp$$217_actualTextWidth$$inline_5379_container$$101_textAnchor$$inline_5380$$ = D.$JSCompiler_alias_NULL$$
      }
    }
  }else {
    if(0 == this.$_innerRadius$) {
      $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$ = {x:0, y:0}
    }else {
      if($JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)((this.$_innerRadius$ + this.$_outerRadius$) / 2, this.$_startAngle$ + this.$_angleExtent$ / 2), $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$ = 3 * (0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this) / 2, $availWidth$$inline_5375_estimatedDims$$inline_5389_rightAngle$$inline_5387$$ = (0,D.$DvtSunburstNode$_calcAngle$$)($JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$.x + 
      $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$ / 2, $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$.y), !(0,D.$JSCompiler_StaticMethods_ContainsAngle$$)(this, (0,D.$DvtSunburstNode$_calcAngle$$)($JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$.x - $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$ / 2, 
      $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$.y)) || !(0,D.$JSCompiler_StaticMethods_ContainsAngle$$)(this, $availWidth$$inline_5375_estimatedDims$$inline_5389_rightAngle$$inline_5387$$)) {
        $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$ = D.$JSCompiler_alias_NULL$$
      }
    }
    if($JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$) {
      $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$ = new D.$DvtOutputText$$(this.$_view$.$_context$, this.$_textStr$, $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$.x, $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$.y, D.$JSCompiler_alias_NULL$$);
      $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this));
      (0,D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$)(this, $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$);
      $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$.$alignCenter$();
      $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$.$alignMiddle$();
      $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      for(var $availWidth$$inline_5375_estimatedDims$$inline_5389_rightAngle$$inline_5387$$ = D.$DvtTextUtils$$.$guessTextDimensions$($angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$), $x2$$inline_5391$$ = $anchorRadius$$inline_5378_availHeight$$inline_5376_x1$$inline_5390$$ = $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$.x, $y1$$inline_5392$$ = $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$.y - 
      $availWidth$$inline_5375_estimatedDims$$inline_5389_rightAngle$$inline_5387$$.$h$ / 2, $y2$$inline_5393$$ = $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$.y + $availWidth$$inline_5375_estimatedDims$$inline_5389_rightAngle$$inline_5387$$.$h$ / 2;this.contains($anchorRadius$$inline_5378_availHeight$$inline_5376_x1$$inline_5390$$, $y1$$inline_5392$$) && this.contains($anchorRadius$$inline_5378_availHeight$$inline_5376_x1$$inline_5390$$, $y2$$inline_5393$$);) {
        $anchorRadius$$inline_5378_availHeight$$inline_5376_x1$$inline_5390$$--
      }
      for(;this.contains($x2$$inline_5391$$, $y1$$inline_5392$$) && this.contains($x2$$inline_5391$$, $y2$$inline_5393$$);) {
        $x2$$inline_5391$$++
      }
      $anchorRadius$$inline_5378_availHeight$$inline_5376_x1$$inline_5390$$ += 3;
      $x2$$inline_5391$$ -= 3;
      $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$ = 2 * window.Math.min($JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$.x - $anchorRadius$$inline_5378_availHeight$$inline_5376_x1$$inline_5390$$, $x2$$inline_5391$$ - $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$.x);
      $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$ < $availWidth$$inline_5375_estimatedDims$$inline_5389_rightAngle$$inline_5387$$.$w$ && ($angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$.$setX$(($anchorRadius$$inline_5378_availHeight$$inline_5376_x1$$inline_5390$$ + $x2$$inline_5391$$) / 2), $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$ = $x2$$inline_5391$$ - 
      $anchorRadius$$inline_5378_availHeight$$inline_5376_x1$$inline_5390$$);
      $JSCompiler_temp$$217_actualTextWidth$$inline_5379_container$$101_textAnchor$$inline_5380$$ = D.$DvtTextUtils$$.$fitText$($angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$, $JSCompiler_temp$$14_bRotated_text$$inline_5377_textAnchor$$inline_5385_usableSpace$$inline_5394$$, $availWidth$$inline_5375_estimatedDims$$inline_5389_rightAngle$$inline_5387$$.$h$, $JSCompiler_temp$$217_actualTextWidth$$inline_5379_container$$101_textAnchor$$inline_5380$$) ? 
      $angle$$inline_5381_approxWidth$$inline_5386_innerStartCoord$$inline_5374_text$$inline_5388$$ : D.$JSCompiler_alias_NULL$$
    }else {
      $JSCompiler_temp$$217_actualTextWidth$$inline_5379_container$$101_textAnchor$$inline_5380$$ = D.$JSCompiler_alias_VOID$$
    }
  }
  return $JSCompiler_temp$$217_actualTextWidth$$inline_5379_container$$101_textAnchor$$inline_5380$$
};
D.$DvtSunburstNode$$.prototype.$handleMouseOver$ = function $$DvtSunburstNode$$$$$handleMouseOver$$() {
  if(!this.$_expandButton$) {
    var $JSCompiler_inline_result$$514_container$$inline_5397_tooltip$$inline_5400$$;
    $JSCompiler_inline_result$$514_container$$inline_5397_tooltip$$inline_5400$$ = this.$_shape$;
    if(!$JSCompiler_inline_result$$514_container$$inline_5397_tooltip$$inline_5400$$ || !(0,D.$JSCompiler_StaticMethods_isExpandCollapseEnabled$$)(this)) {
      $JSCompiler_inline_result$$514_container$$inline_5397_tooltip$$inline_5400$$ = D.$JSCompiler_alias_NULL$$
    }else {
      var $JSCompiler_temp$$8859_button$$inline_10324_button$$inline_10332_button$$inline_5398_context$$inline_10319_context$$inline_10327$$;
      if(this.$_disclosed$) {
        $JSCompiler_temp$$8859_button$$inline_10324_button$$inline_10332_button$$inline_5398_context$$inline_10319_context$$inline_10327$$ = this.$_view$.$_context$;
        var $downState$$inline_10323_downState$$inline_10331_resources$$inline_10320_resources$$inline_10328$$ = this.$_view$.$_resources$, $center$$inline_5399_upState$$inline_10321_upState$$inline_10329$$ = new D.$DvtImage$$($JSCompiler_temp$$8859_button$$inline_10324_button$$inline_10332_button$$inline_5398_context$$inline_10319_context$$inline_10327$$, $downState$$inline_10323_downState$$inline_10331_resources$$inline_10320_resources$$inline_10328$$.collapseUp, 0, 0, 16, 16), $overState$$inline_10322_overState$$inline_10330$$ = 
        new D.$DvtImage$$($JSCompiler_temp$$8859_button$$inline_10324_button$$inline_10332_button$$inline_5398_context$$inline_10319_context$$inline_10327$$, $downState$$inline_10323_downState$$inline_10331_resources$$inline_10320_resources$$inline_10328$$.collapseOver, 0, 0, 16, 16), $downState$$inline_10323_downState$$inline_10331_resources$$inline_10320_resources$$inline_10328$$ = new D.$DvtImage$$($JSCompiler_temp$$8859_button$$inline_10324_button$$inline_10332_button$$inline_5398_context$$inline_10319_context$$inline_10327$$, 
        $downState$$inline_10323_downState$$inline_10331_resources$$inline_10320_resources$$inline_10328$$.collapseDown, 0, 0, 16, 16)
      }else {
        $JSCompiler_temp$$8859_button$$inline_10324_button$$inline_10332_button$$inline_5398_context$$inline_10319_context$$inline_10327$$ = this.$_view$.$_context$, $downState$$inline_10323_downState$$inline_10331_resources$$inline_10320_resources$$inline_10328$$ = this.$_view$.$_resources$, $center$$inline_5399_upState$$inline_10321_upState$$inline_10329$$ = new D.$DvtImage$$($JSCompiler_temp$$8859_button$$inline_10324_button$$inline_10332_button$$inline_5398_context$$inline_10319_context$$inline_10327$$, 
        $downState$$inline_10323_downState$$inline_10331_resources$$inline_10320_resources$$inline_10328$$.expandUp, 0, 0, 16, 16), $overState$$inline_10322_overState$$inline_10330$$ = new D.$DvtImage$$($JSCompiler_temp$$8859_button$$inline_10324_button$$inline_10332_button$$inline_5398_context$$inline_10319_context$$inline_10327$$, $downState$$inline_10323_downState$$inline_10331_resources$$inline_10320_resources$$inline_10328$$.expandOver, 0, 0, 16, 16), $downState$$inline_10323_downState$$inline_10331_resources$$inline_10320_resources$$inline_10328$$ = 
        new D.$DvtImage$$($JSCompiler_temp$$8859_button$$inline_10324_button$$inline_10332_button$$inline_5398_context$$inline_10319_context$$inline_10327$$, $downState$$inline_10323_downState$$inline_10331_resources$$inline_10320_resources$$inline_10328$$.expandDown, 0, 0, 16, 16)
      }
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($center$$inline_5399_upState$$inline_10321_upState$$inline_10329$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overState$$inline_10322_overState$$inline_10330$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downState$$inline_10323_downState$$inline_10331_resources$$inline_10320_resources$$inline_10328$$);
      $JSCompiler_temp$$8859_button$$inline_10324_button$$inline_10332_button$$inline_5398_context$$inline_10319_context$$inline_10327$$ = new D.$DvtButton$$($JSCompiler_temp$$8859_button$$inline_10324_button$$inline_10332_button$$inline_5398_context$$inline_10319_context$$inline_10327$$, $center$$inline_5399_upState$$inline_10321_upState$$inline_10329$$, $overState$$inline_10322_overState$$inline_10330$$, $downState$$inline_10323_downState$$inline_10331_resources$$inline_10320_resources$$inline_10328$$);
      $JSCompiler_temp$$8859_button$$inline_10324_button$$inline_10332_button$$inline_5398_context$$inline_10319_context$$inline_10327$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$expandCollapseNode$, D.$JSCompiler_alias_FALSE$$, this);
      $center$$inline_5399_upState$$inline_10321_upState$$inline_10329$$ = (0,D.$DvtSunburstNode$_calcPointOnArc$$)(this.$_outerRadius$, this.$_startAngle$ + this.$_angleExtent$ / 2);
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_temp$$8859_button$$inline_10324_button$$inline_10332_button$$inline_5398_context$$inline_10319_context$$inline_10327$$, $center$$inline_5399_upState$$inline_10321_upState$$inline_10329$$.x - 8, $center$$inline_5399_upState$$inline_10321_upState$$inline_10329$$.y - 8);
      $JSCompiler_inline_result$$514_container$$inline_5397_tooltip$$inline_5400$$.$addChild$($JSCompiler_temp$$8859_button$$inline_10324_button$$inline_10332_button$$inline_5398_context$$inline_10319_context$$inline_10327$$);
      $JSCompiler_inline_result$$514_container$$inline_5397_tooltip$$inline_5400$$ = this.$_disclosed$ ? this.$_view$.$_resources$.collapse : this.$_view$.$_resources$.expand;
      this.$_view$.$__getEventManager$().$associate$($JSCompiler_temp$$8859_button$$inline_10324_button$$inline_10332_button$$inline_5398_context$$inline_10319_context$$inline_10327$$, new D.$DvtBaseTreePeer$$(this, this.getId(), $JSCompiler_inline_result$$514_container$$inline_5397_tooltip$$inline_5400$$));
      $JSCompiler_inline_result$$514_container$$inline_5397_tooltip$$inline_5400$$ = $JSCompiler_temp$$8859_button$$inline_10324_button$$inline_10332_button$$inline_5398_context$$inline_10319_context$$inline_10327$$
    }
    this.$_expandButton$ = $JSCompiler_inline_result$$514_container$$inline_5397_tooltip$$inline_5400$$
  }
  D.$DvtSunburstNode$$.$superclass$.$handleMouseOver$.call(this)
};
D.$DvtSunburstNode$$.prototype.$handleMouseOut$ = function $$DvtSunburstNode$$$$$handleMouseOut$$() {
  this.$_expandButton$ && this.$_shape$ && (this.$_shape$.removeChild(this.$_expandButton$), this.$_expandButton$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtSunburstNode$$.$superclass$.$handleMouseOut$.call(this)
};
D.$JSCompiler_StaticMethods_updateShapes$$ = function $$JSCompiler_StaticMethods_updateShapes$$$($JSCompiler_StaticMethods_updateShapes$self$$, $bRecurse$$) {
  if($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$) {
    var $children$$16_cmd$$11$$ = (0,D.$JSCompiler_StaticMethods__createPathCmd$$)($JSCompiler_StaticMethods_updateShapes$self$$);
    $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.$setCmds$($children$$16_cmd$$11$$);
    if($JSCompiler_StaticMethods_updateShapes$self$$.$_parent$ || !(0 == $JSCompiler_StaticMethods_updateShapes$self$$.$_innerRadius$ && $JSCompiler_StaticMethods_updateShapes$self$$.$_angleExtent$ == D.$DvtSunburstNode$TWO_PI$$)) {
      $JSCompiler_StaticMethods_updateShapes$self$$.$_text$ && $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.removeChild($JSCompiler_StaticMethods_updateShapes$self$$.$_text$), $JSCompiler_StaticMethods_updateShapes$self$$.$_text$ = $JSCompiler_StaticMethods_updateShapes$self$$.$_createTextNode$($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$), $JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$ && ($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.removeChild($JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$), 
      $JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$ = D.$JSCompiler_alias_NULL$$)
    }
    $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.$setFill$($JSCompiler_StaticMethods_updateShapes$self$$.$GetFill$());
    if($bRecurse$$) {
      for(var $children$$16_cmd$$11$$ = $JSCompiler_StaticMethods_updateShapes$self$$.$getChildNodes$(), $i$$533$$ = 0;$i$$533$$ < $children$$16_cmd$$11$$.length;$i$$533$$++) {
        (0,D.$JSCompiler_StaticMethods_updateShapes$$)($children$$16_cmd$$11$$[$i$$533$$], D.$JSCompiler_alias_TRUE$$)
      }
    }
  }
};
D.$DvtSunburstNode$$.prototype.$expandCollapseNode$ = function $$DvtSunburstNode$$$$$expandCollapseNode$$() {
  this.$_disclosed$ = !this.$_disclosed$;
  var $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5402$$ = this.$_view$, $bDisclosed$$inline_5404_xmlString$$inline_10337$$ = this.$_disclosed$, $id$$inline_10335_nodeId$$inline_10338_startIndex$$inline_10339$$ = this.getId();
  $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5402$$.$_navigableIdToFocus$ = $id$$inline_10335_nodeId$$inline_10338_startIndex$$inline_10339$$;
  if($bDisclosed$$inline_5404_xmlString$$inline_10337$$) {
    $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5402$$.$__dispatchEvent$(new D.$DvtSunburstExpandCollapseEvent$$("sunburstExpand", this.getId()))
  }else {
    var $bDisclosed$$inline_5404_xmlString$$inline_10337$$ = $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5402$$.$LastXml$, $id$$inline_10335_nodeId$$inline_10338_startIndex$$inline_10339$$ = this.getId(), $id$$inline_10335_nodeId$$inline_10338_startIndex$$inline_10339$$ = $bDisclosed$$inline_5404_xmlString$$inline_10337$$.indexOf('\x3cn id\x3d"' + $id$$inline_10335_nodeId$$inline_10338_startIndex$$inline_10339$$), $endIndex$$inline_10340$$ = $bDisclosed$$inline_5404_xmlString$$inline_10337$$.indexOf("\x3e", 
    $id$$inline_10335_nodeId$$inline_10338_startIndex$$inline_10339$$), $nodeString$$inline_10341$$ = $bDisclosed$$inline_5404_xmlString$$inline_10337$$.substring($id$$inline_10335_nodeId$$inline_10338_startIndex$$inline_10339$$, $endIndex$$inline_10340$$), $nodeString$$inline_10341$$ = -1 < $nodeString$$inline_10341$$.indexOf("di\x3d") ? $nodeString$$inline_10341$$.replace('di\x3d"t"', 'di\x3d"f"') : $nodeString$$inline_10341$$ + 'di\x3d"f"';
    $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5402$$.$render$($bDisclosed$$inline_5404_xmlString$$inline_10337$$.substring(0, $id$$inline_10335_nodeId$$inline_10338_startIndex$$inline_10339$$) + $nodeString$$inline_10341$$ + $bDisclosed$$inline_5404_xmlString$$inline_10337$$.substring($endIndex$$inline_10340$$), $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5402$$.$Width$, $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5402$$.$Height$);
    $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5402$$.$__dispatchEvent$(new D.$DvtSunburstExpandCollapseEvent$$("sunburstCollapse", this.getId()))
  }
  this.$UpdateAriaLabel$()
};
D.$DvtSunburstNode$$.prototype.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_disclosed$");
D.$JSCompiler_StaticMethods___getRadius$$ = function $$JSCompiler_StaticMethods___getRadius$$$($JSCompiler_StaticMethods___getRadius$self$$) {
  return $JSCompiler_StaticMethods___getRadius$self$$.$_radius$ != D.$JSCompiler_alias_NULL$$ ? (0,window.Number)($JSCompiler_StaticMethods___getRadius$self$$.$_radius$) : $JSCompiler_StaticMethods___getRadius$self$$.$_parent$ ? 1 : $JSCompiler_StaticMethods___getRadius$self$$.$_bArtificialRoot$ ? 0.25 : $JSCompiler_StaticMethods___getRadius$self$$.$_template$ ? 1 : 0.5
};
D.$DvtSunburstNode$$.prototype.$getAriaLabel$ = function $$DvtSunburstNode$$$$$getAriaLabel$$() {
  var $states$$7$$ = [];
  "off" != this.$Selectable$ && $states$$7$$.push((0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  (0,D.$JSCompiler_StaticMethods_isExpandCollapseEnabled$$)(this) && $states$$7$$.push((0,D.$JSCompiler_StaticMethods_getTranslatedString$$)(this.$Bundle$, this.$isDisclosed$() ? "STATE_EXPANDED" : "STATE_COLLAPSED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$_datatip$, $states$$7$$, this.$Bundle$)
};
D.$DvtSunburstNode$$.prototype.$UpdateAriaLabel$ = function $$DvtSunburstNode$$$$$UpdateAriaLabel$$() {
  !(0,D.$DvtAgent$deferAriaCreation$$)() && this.$_shape$ && (0,D.$JSCompiler_StaticMethods_setAriaProperty$$)(this.$_shape$, "label", this.$getAriaLabel$())
};
D.$DvtSunburstLayout$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstLayout$$, D.$DvtObj$$, "DvtSunburstLayout");
D.$DvtSunburstLayout$$.$layout$ = function $$DvtSunburstLayout$$$$layout$$($totalRadius$$, $root$$12$$, $startAngle$$4$$, $angleExtent$$4$$, $sorting$$1$$) {
  var $longestRadius$$ = D.$DvtSunburstLayout$$.$_calcLargestRadius$($root$$12$$);
  D.$DvtSunburstLayout$$.$_layout$($totalRadius$$ / $longestRadius$$, $root$$12$$, $startAngle$$4$$, $angleExtent$$4$$, $sorting$$1$$, 0)
};
D.$DvtSunburstLayout$$.$_layout$ = function $$DvtSunburstLayout$$$$_layout$$($radiusPerDepth$$1$$, $i$$534_node$$277$$, $childStartAngle_startAngle$$5$$, $angleExtent$$5$$, $sorting$$2$$, $children$$17_innerRadius$$1$$) {
  var $outerRadius$$1$$ = $children$$17_innerRadius$$1$$ + (0,D.$JSCompiler_StaticMethods___getRadius$$)($i$$534_node$$277$$) * $radiusPerDepth$$1$$;
  $i$$534_node$$277$$.$setLayoutParams$($children$$17_innerRadius$$1$$, $outerRadius$$1$$, $childStartAngle_startAngle$$5$$, $angleExtent$$5$$);
  $children$$17_innerRadius$$1$$ = $i$$534_node$$277$$.$getChildNodes$();
  if($children$$17_innerRadius$$1$$ != D.$JSCompiler_alias_NULL$$ && $i$$534_node$$277$$.$isDisclosed$()) {
    "on" == $sorting$$2$$ && ($children$$17_innerRadius$$1$$ = $children$$17_innerRadius$$1$$.slice(0), $children$$17_innerRadius$$1$$.sort(function($radiusPerDepth$$1$$, $i$$534_node$$277$$) {
      return $i$$534_node$$277$$.$getSize$() - $radiusPerDepth$$1$$.$getSize$()
    }));
    (0,D.$DvtAgent$isRightToLeft$$)($i$$534_node$$277$$.$_view$.$_context$) && ($children$$17_innerRadius$$1$$ = $children$$17_innerRadius$$1$$.slice(0).reverse());
    var $total$$10$$ = 0;
    for($i$$534_node$$277$$ = 0;$i$$534_node$$277$$ < $children$$17_innerRadius$$1$$.length;$i$$534_node$$277$$++) {
      $total$$10$$ += 0 < $children$$17_innerRadius$$1$$[$i$$534_node$$277$$].$getSize$() ? $children$$17_innerRadius$$1$$[$i$$534_node$$277$$].$getSize$() : 0
    }
    for($i$$534_node$$277$$ = 0;$i$$534_node$$277$$ < $children$$17_innerRadius$$1$$.length;$i$$534_node$$277$$++) {
      var $child$$33$$ = $children$$17_innerRadius$$1$$[$i$$534_node$$277$$];
      if(!(0 >= $child$$33$$.$getSize$())) {
        var $childAngleExtent$$ = $child$$33$$.$getSize$() / $total$$10$$ * $angleExtent$$5$$;
        D.$DvtSunburstLayout$$.$_layout$($radiusPerDepth$$1$$, $child$$33$$, $childStartAngle_startAngle$$5$$, $childAngleExtent$$, $sorting$$2$$, $outerRadius$$1$$);
        $childStartAngle_startAngle$$5$$ += $childAngleExtent$$
      }
    }
  }
};
D.$DvtSunburstLayout$$.$_calcLargestRadius$ = function $$DvtSunburstLayout$$$$_calcLargestRadius$$($node$$278$$) {
  var $maxRadius$$2$$ = 0, $children$$18$$ = $node$$278$$.$getChildNodes$();
  if($children$$18$$ && 0 < $children$$18$$.length) {
    for(var $i$$535$$ = 0;$i$$535$$ < $children$$18$$.length;$i$$535$$++) {
      var $childRadius$$ = D.$DvtSunburstLayout$$.$_calcLargestRadius$($children$$18$$[$i$$535$$]), $maxRadius$$2$$ = window.Math.max($maxRadius$$2$$, $childRadius$$)
    }
    return $maxRadius$$2$$ + (0,D.$JSCompiler_StaticMethods___getRadius$$)($node$$278$$)
  }
  return(0,D.$JSCompiler_StaticMethods___getRadius$$)($node$$278$$)
};
D.$DvtSunburstExpandCollapseEvent$$ = function $$DvtSunburstExpandCollapseEvent$$$($type$$125$$, $id$$144$$) {
  this.Init($type$$125$$);
  this.$_id$ = $id$$144$$ ? $id$$144$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstExpandCollapseEvent$$, D.$DvtBaseComponentEvent$$, "DvtSunburstExpandCollapseEvent");
D.$DvtSunburstExpandCollapseEvent$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtSunburstEventManager$$ = function $$DvtSunburstEventManager$$$($view$$65$$, $context$$308$$, $callback$$86$$, $callbackObj$$60$$) {
  D.$DvtBaseTreeEventManager$$.call(this, $view$$65$$, $context$$308$$, $callback$$86$$, $callbackObj$$60$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstEventManager$$, D.$DvtBaseTreeEventManager$$, "DvtSunburstEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtSunburstEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$394_relPos$$39$$) {
  var $JSCompiler_StaticMethods___startRotation$self$$inline_5407_obj$$166$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$394_relPos$$39$$.target);
  $JSCompiler_StaticMethods___startRotation$self$$inline_5407_obj$$166$$ && $JSCompiler_StaticMethods___startRotation$self$$inline_5407_obj$$166$$.getId && "_rotationShape" == $JSCompiler_StaticMethods___startRotation$self$$inline_5407_obj$$166$$.getId() && !this.$_bRotating$ ? (this.$_bRotating$ = D.$JSCompiler_alias_TRUE$$, $event$$394_relPos$$39$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $event$$394_relPos$$39$$.pageX, $event$$394_relPos$$39$$.pageY), $JSCompiler_StaticMethods___startRotation$self$$inline_5407_obj$$166$$ = 
  this.$_view$, (0,D.$JSCompiler_StaticMethods___setRotationAnchor$$)($JSCompiler_StaticMethods___startRotation$self$$inline_5407_obj$$166$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___startRotation$self$$inline_5407_obj$$166$$, $event$$394_relPos$$39$$.x, $event$$394_relPos$$39$$.y))) : D.$DvtSunburstEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$394_relPos$$39$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$395_relPos$$40$$) {
  if(this.$_bRotating$) {
    $event$$395_relPos$$40$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $event$$395_relPos$$40$$.pageX, $event$$395_relPos$$40$$.pageY);
    var $JSCompiler_StaticMethods___continueRotation$self$$inline_5411$$ = this.$_view$;
    (0,D.$JSCompiler_StaticMethods___rotate$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_5411$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_5411$$, $event$$395_relPos$$40$$.x, $event$$395_relPos$$40$$.y))
  }else {
    D.$DvtSunburstEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$395_relPos$$40$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($event$$396$$) {
  this.$_bRotating$ ? (this.$_bRotating$ = D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods___endRotation$$)(this.$_view$)) : D.$DvtSunburstEventManager$$.$superclass$.$OnMouseUp$.call(this, $event$$396$$)
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$397$$) {
  var $eventConsumed$$7$$ = D.$JSCompiler_alias_TRUE$$, $keyCode$$26_newAngle$$ = $event$$397$$.keyCode, $node$$276$$ = this.$getFocus$(), $sunburst$$1$$ = this.$_view$;
  (0,D.$JSCompiler_StaticMethods_isExpandCollapseEnabled$$)($node$$276$$) && ((0,D.$DvtKeyboardEvent$isPlus$$)($event$$397$$) && !$node$$276$$.$isDisclosed$() || (0,D.$DvtKeyboardEvent$isMinus$$)($event$$397$$) && $node$$276$$.$isDisclosed$() || $event$$397$$.ctrlKey && 13 == $keyCode$$26_newAngle$$) ? ($node$$276$$.$expandCollapseNode$(), $event$$397$$.preventDefault()) : $sunburst$$1$$ && "on" == $sunburst$$1$$.$_rotation$ && (37 == $keyCode$$26_newAngle$$ || 39 == $keyCode$$26_newAngle$$) && !$event$$397$$.ctrlKey && 
  $event$$397$$.altKey && $event$$397$$.shiftKey ? ($keyCode$$26_newAngle$$ = 37 == $keyCode$$26_newAngle$$ ? -5 * (window.Math.PI / 180) : 5 * (window.Math.PI / 180), (0,D.$JSCompiler_StaticMethods___setRotationAnchor$$)($sunburst$$1$$, 0), (0,D.$JSCompiler_StaticMethods___rotate$$)($sunburst$$1$$, $keyCode$$26_newAngle$$), (0,D.$JSCompiler_StaticMethods___endRotation$$)($sunburst$$1$$), $event$$397$$.preventDefault()) : $eventConsumed$$7$$ = D.$DvtSunburstEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, 
  $event$$397$$);
  return $eventConsumed$$7$$
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$398$$) {
  var $obj$$167$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$398$$.target);
  $obj$$167$$ && ($obj$$167$$.getId && "_rotationShape" == $obj$$167$$.getId()) && (0,D.$JSCompiler_StaticMethods_processAssociatedTouchAttempt$$)($event$$398$$, this.$RotateStartTouch$, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchMoveInternal$$($event$$399$$) {
  (0,D.$JSCompiler_StaticMethods_processAssociatedTouchMove$$)(this.$TouchManager$, $event$$399$$, "rotateKey")
};
D.$JSCompiler_prototypeAlias$$.$HandleImmediateTouchEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchEndInternal$$($event$$400$$) {
  (0,D.$JSCompiler_StaticMethods_processAssociatedTouchEnd$$)(this.$TouchManager$, $event$$400$$, "rotateKey")
};
D.$JSCompiler_prototypeAlias$$.$RotateStartTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateStartTouch$$($event$$401$$, $touch$$14$$) {
  if(1 >= (0,D.$JSCompiler_StaticMethods_getTouchIdsForObj$$)(this.$TouchManager$, "rotateKey").length) {
    (0,D.$JSCompiler_StaticMethods_saveProcessedTouch$$)(this.$TouchManager$, $touch$$14$$.identifier, "rotateKey", D.$JSCompiler_alias_NULL$$, "rotateKey", "rotateKey", this.$RotateMoveTouch$, this.$RotateEndTouch$, this);
    (0,D.$JSCompiler_StaticMethods_setTooltipEnabled$$)(this.$TouchManager$, $touch$$14$$.identifier, D.$JSCompiler_alias_FALSE$$);
    var $pos$$53$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $touch$$14$$.pageX, $touch$$14$$.pageY), $JSCompiler_StaticMethods___startRotation$self$$inline_5415$$ = this.$_view$;
    (0,D.$JSCompiler_StaticMethods___setRotationAnchor$$)($JSCompiler_StaticMethods___startRotation$self$$inline_5415$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___startRotation$self$$inline_5415$$, $pos$$53$$.x, $pos$$53$$.y));
    $event$$401$$.$blockTouchHold$()
  }
};
D.$JSCompiler_prototypeAlias$$.$RotateMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateMoveTouch$$($event$$402$$, $touch$$15$$) {
  var $pos$$54$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $touch$$15$$.pageX, $touch$$15$$.pageY), $JSCompiler_StaticMethods___continueRotation$self$$inline_5419$$ = this.$_view$;
  (0,D.$JSCompiler_StaticMethods___rotate$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_5419$$, (0,D.$JSCompiler_StaticMethods__calcAngle$$)($JSCompiler_StaticMethods___continueRotation$self$$inline_5419$$, $pos$$54$$.x, $pos$$54$$.y));
  $event$$402$$.preventDefault()
};
D.$JSCompiler_prototypeAlias$$.$RotateEndTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateEndTouch$$() {
  (0,D.$JSCompiler_StaticMethods___endRotation$$)(this.$_view$)
};
D.$DvtSunburstBundle$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstBundle$$, D.$DvtUtilBundle$$, "DvtSunburstBundle");
D.$DvtSunburstBundle$$._defaults = {COLOR:"Color", SIZE:"Size"};
D.$DvtSunburstBundle$$.prototype.$GetDefaultStringForKey$ = function $$DvtSunburstBundle$$$$$GetDefaultStringForKey$$($key$$55$$) {
  var $defaultStr$$4$$ = D.$DvtSunburstBundle$$.$superclass$.$GetDefaultStringForKey$.call(this, $key$$55$$);
  return $defaultStr$$4$$ ? $defaultStr$$4$$ : D.$DvtSunburstBundle$$._defaults[$key$$55$$]
};
D.$DvtSunburstBundle$$.prototype.$GetBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtSunburstBundle");
D.$DvtSunburstDefaults$$ = function $$DvtSunburstDefaults$$$() {
  this.Init({skyros:D.$DvtSunburstDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstDefaults$$, D.$DvtBaseTreeDefaults$$, "DvtSunburstDefaults");
D.$DvtSunburstDefaults$VERSION_1$$ = {rotation:"on"};
D.$DvtSunburstJsonUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtSunburstJsonUtils$$, D.$DvtBaseTreeJsonUtils$$, "DvtSunburstJsonUtils");
D.$JSCompiler_prototypeAlias$$ = D.$DvtSunburstJsonUtils$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetComponentName$ = (0,D.$JSCompiler_returnArg$$)("sunburst");
D.$JSCompiler_prototypeAlias$$.$WriteComponentAttributes$ = function $$JSCompiler_prototypeAlias$$$$WriteComponentAttributes$$($animationOnDisplay$$3_options$$183$$) {
  var $ret$$89$$ = D.$DvtSunburstJsonUtils$$.$superclass$.$WriteComponentAttributes$.call(this, $animationOnDisplay$$3_options$$183$$), $ret$$89$$ = $ret$$89$$ + this.$WriteAttr$("r", $animationOnDisplay$$3_options$$183$$.rotation), $ret$$89$$ = $ret$$89$$ + this.$WriteAttr$("sa", ($animationOnDisplay$$3_options$$183$$.startAngle + 360) % 360);
  $animationOnDisplay$$3_options$$183$$ = $animationOnDisplay$$3_options$$183$$.animationOnDisplay;
  return $ret$$89$$ = "auto" == $animationOnDisplay$$3_options$$183$$ ? $ret$$89$$ + this.$WriteAttr$("adi", "fan") : $ret$$89$$ + this.$WriteAttr$("adi", $animationOnDisplay$$3_options$$183$$)
};
D.$JSCompiler_prototypeAlias$$.$WriteNodeAttributes$ = function $$JSCompiler_prototypeAlias$$$$WriteNodeAttributes$$($options$$184$$, $nodeData$$35$$) {
  var $ret$$90$$ = D.$DvtSunburstJsonUtils$$.$superclass$.$WriteNodeAttributes$.call(this, $options$$184$$, $nodeData$$35$$), $ret$$90$$ = $ret$$90$$ + this.$WriteAttr$("ld", $nodeData$$35$$.labelDisplay ? $nodeData$$35$$.labelDisplay : $options$$184$$.nodeDefaults.labelDisplay), $labelHalign$$1_radius$$17$$ = $nodeData$$35$$.labelHalign ? $nodeData$$35$$.labelHalign : $options$$184$$.nodeDefaults.labelHalign;
  "inner" == $labelHalign$$1_radius$$17$$ ? $ret$$90$$ += this.$WriteAttr$("ha", "s") : "outer" == $labelHalign$$1_radius$$17$$ && ($ret$$90$$ += this.$WriteAttr$("ha", "e"));
  $labelHalign$$1_radius$$17$$ = $nodeData$$35$$.radius;
  $labelHalign$$1_radius$$17$$ != D.$JSCompiler_alias_NULL$$ && !(0,window.isNaN)($labelHalign$$1_radius$$17$$) && ($ret$$90$$ += this.$WriteAttr$("r", $labelHalign$$1_radius$$17$$));
  return $ret$$90$$
};
D.$JSCompiler_prototypeAlias$$.$WriteResourcesElement$ = function $$JSCompiler_prototypeAlias$$$$WriteResourcesElement$$($options$$185$$) {
  var $ret$$91$$, $bundle$$13$$ = new D.$DvtSunburstBundle$$;
  $ret$$91$$ = "\x3cresources" + this.$WriteAttr$("legendSize", (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$13$$, "SIZE"));
  $ret$$91$$ += this.$WriteAttr$("legendColor", (0,D.$JSCompiler_StaticMethods_getTranslatedString$$)($bundle$$13$$, "COLOR"));
  $ret$$91$$ += this.$WriteAttr$("cursorRotate", $options$$185$$._resources.rotateCursor);
  $ret$$91$$ += this.$WriteAttr$("alta", "true");
  return $ret$$91$$ + "/\x3e\n"
};
D.$JSCompiler_prototypeAlias$$.$WriteStyleElement$ = function $$JSCompiler_prototypeAlias$$$$WriteStyleElement$$($options$$186_selectedColor$$) {
  var $ret$$92$$ = D.$DvtSunburstJsonUtils$$.$superclass$.$WriteStyleElement$.call(this, $options$$186_selectedColor$$), $animationColor$$1_borderColor$$30_hoverColor$$4$$ = $options$$186_selectedColor$$.animationUpdateColor;
  $animationColor$$1_borderColor$$30_hoverColor$$4$$ && ($ret$$92$$ += this.$WriteAttr$("top", "-tr-animation-update-color: " + $animationColor$$1_borderColor$$30_hoverColor$$4$$));
  ($animationColor$$1_borderColor$$30_hoverColor$$4$$ = $options$$186_selectedColor$$.nodeDefaults.borderColor) && ($ret$$92$$ += this.$WriteAttr$("node", "border-color: " + $animationColor$$1_borderColor$$30_hoverColor$$4$$));
  ($animationColor$$1_borderColor$$30_hoverColor$$4$$ = $options$$186_selectedColor$$.nodeDefaults.hoverColor) && ($ret$$92$$ += this.$WriteAttr$("node-hover", "border-color: " + $animationColor$$1_borderColor$$30_hoverColor$$4$$));
  ($options$$186_selectedColor$$ = $options$$186_selectedColor$$.nodeDefaults.selectedColor) && ($ret$$92$$ += this.$WriteAttr$("node-selected", "border-color: " + $options$$186_selectedColor$$));
  return $ret$$92$$ + "/\x3e\n"
};
});