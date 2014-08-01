define([], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  var D={};var $JSCompiler_alias_VOID$$ = void 0, $JSCompiler_alias_TRUE$$ = !0, $JSCompiler_alias_NULL$$ = null, $JSCompiler_alias_FALSE$$ = !1;
function $JSCompiler_identityFn$$() {
  return function($JSCompiler_identityFn_value$$) {
    return $JSCompiler_identityFn_value$$
  }
}
function $JSCompiler_emptyFn$$() {
  return function() {
  }
}
function $JSCompiler_set$$($JSCompiler_set_name$$) {
  return function($JSCompiler_set_value$$) {
    this[$JSCompiler_set_name$$] = $JSCompiler_set_value$$
  }
}
function $JSCompiler_get$$($JSCompiler_get_name$$) {
  return function() {
    return this[$JSCompiler_get_name$$]
  }
}
function $JSCompiler_returnArg$$($JSCompiler_returnArg_value$$) {
  return function() {
    return $JSCompiler_returnArg_value$$
  }
}
var $JSCompiler_prototypeAlias$$, COMPILED = $JSCompiler_alias_TRUE$$, $goog$global$$ = this == window ? this : window, $goog$basePath$$ = "";
if(!COMPILED) {
  var $goog$dependencies_$$ = {pathToNames:{}, nameToPath:{}, requires:{}, visited:{}, written:{}}, $goog$inHtmlDocument_$$ = function $$goog$inHtmlDocument_$$$() {
    var $doc$$4$$ = $goog$global$$.document;
    return"undefined" != typeof $doc$$4$$ && "write" in $doc$$4$$
  }, $goog$writeScriptTag_$$ = function $$goog$writeScriptTag_$$$($src$$6$$) {
    return $goog$inHtmlDocument_$$() ? ($goog$global$$.document.write('\x3cscript type\x3d"text/javascript" src\x3d"' + $src$$6$$ + '"\x3e\x3c/script\x3e'), $JSCompiler_alias_TRUE$$) : $JSCompiler_alias_FALSE$$
  };
  if($goog$global$$.CLOSURE_BASE_PATH) {
    $goog$basePath$$ = $goog$global$$.CLOSURE_BASE_PATH
  }else {
    if($goog$inHtmlDocument_$$()) {
      for(var $scripts$$inline_472$$ = $goog$global$$.document.getElementsByTagName("script"), $i$$inline_473$$ = $scripts$$inline_472$$.length - 1;0 <= $i$$inline_473$$;--$i$$inline_473$$) {
        var $src$$inline_474$$ = $scripts$$inline_472$$[$i$$inline_473$$].src, $qmark$$inline_475$$ = $src$$inline_474$$.lastIndexOf("?"), $l$$inline_476$$ = -1 == $qmark$$inline_475$$ ? $src$$inline_474$$.length : $qmark$$inline_475$$;
        if("base.js" == $src$$inline_474$$.substr($l$$inline_476$$ - 7, 7)) {
          $goog$basePath$$ = $src$$inline_474$$.substr(0, $l$$inline_476$$ - 7);
          break
        }
      }
    }
  }
  if(!$goog$global$$.CLOSURE_NO_DEPS) {
    var $src$$inline_478$$ = $goog$basePath$$ + "deps.js", $importScript$$inline_479$$ = $goog$global$$.CLOSURE_IMPORT_SCRIPT || $goog$writeScriptTag_$$;
    !$goog$dependencies_$$.written[$src$$inline_478$$] && $importScript$$inline_479$$($src$$inline_478$$) && ($goog$dependencies_$$.written[$src$$inline_478$$] = $JSCompiler_alias_TRUE$$)
  }
}
Math.floor(2147483648 * Math.random()).toString(36);
function $goog$exportSymbol$$($publicPath$$1$$, $object$$6$$) {
  var $parts$$inline_484$$ = $publicPath$$1$$.split("."), $cur$$inline_485$$ = $goog$global$$;
  !($parts$$inline_484$$[0] in $cur$$inline_485$$) && $cur$$inline_485$$.execScript && $cur$$inline_485$$.execScript("var " + $parts$$inline_484$$[0]);
  for(var $part$$inline_486$$;$parts$$inline_484$$.length && ($part$$inline_486$$ = $parts$$inline_484$$.shift());) {
    !$parts$$inline_484$$.length && $object$$6$$ !== $JSCompiler_alias_VOID$$ ? $cur$$inline_485$$[$part$$inline_486$$] = $object$$6$$ : $cur$$inline_485$$ = $cur$$inline_485$$[$part$$inline_486$$] ? $cur$$inline_485$$[$part$$inline_486$$] : $cur$$inline_485$$[$part$$inline_486$$] = {}
  }
}
var DVT_ADVANCED_CLOSURE = $JSCompiler_alias_TRUE$$;
function $DvtDataGridUtils$$($dataGrid_userAgent$$5$$) {
  this.$scrollbarSize$ = -1;
  this.$dataGrid$ = $dataGrid_userAgent$$5$$;
  $dataGrid_userAgent$$5$$ = navigator && navigator.userAgent ? navigator.userAgent.toLowerCase() : $JSCompiler_alias_NULL$$;
  this.$os$ = this.$_determineOS$($dataGrid_userAgent$$5$$);
  this.platform = this.$_determinePlatform$($dataGrid_userAgent$$5$$)
}
function $JSCompiler_StaticMethods_getScrollbarSize$$($JSCompiler_StaticMethods_getScrollbarSize$self$$) {
  if(-1 == $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$) {
    var $scrollDiv$$inline_7310$$ = document.createElement("div");
    $scrollDiv$$inline_7310$$.style.cssText = "width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px;";
    document.body.appendChild($scrollDiv$$inline_7310$$);
    $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$ = $scrollDiv$$inline_7310$$.offsetWidth - $scrollDiv$$inline_7310$$.clientWidth;
    document.body.removeChild($scrollDiv$$inline_7310$$)
  }
  return $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$
}
$DvtDataGridUtils$$.prototype.$isTouchDevice$ = function $$DvtDataGridUtils$$$$$isTouchDevice$$() {
  if(this.$isTouch$ == $JSCompiler_alias_VOID$$) {
    var $agentName$$ = navigator.userAgent.toLowerCase();
    this.$isTouch$ = -1 != $agentName$$.indexOf("mobile") || -1 != $agentName$$.indexOf("android") ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
  }
  return this.$isTouch$
};
function $JSCompiler_StaticMethods_addCSSClassName$$($domElement$$, $className$$7$$) {
  var $currentClassName$$, $classNameIndex$$;
  $className$$7$$ != $JSCompiler_alias_NULL$$ && ($currentClassName$$ = $domElement$$.className, $classNameIndex$$ = $DvtDataGridUtils$_getCSSClassNameIndex$$($currentClassName$$, $className$$7$$), -1 == $classNameIndex$$ && ($domElement$$.className = $currentClassName$$ ? $className$$7$$ + " " + $currentClassName$$ : $className$$7$$))
}
function $JSCompiler_StaticMethods_removeCSSClassName$$($domElement$$1$$, $className$$8$$) {
  var $afterstring_currentClassName$$1$$, $beforestring_classNameIndex$$1$$, $classNameEndIndex$$;
  $className$$8$$ != $JSCompiler_alias_NULL$$ && ($afterstring_currentClassName$$1$$ = $domElement$$1$$.className, $beforestring_classNameIndex$$1$$ = $DvtDataGridUtils$_getCSSClassNameIndex$$($afterstring_currentClassName$$1$$, $className$$8$$), -1 != $beforestring_classNameIndex$$1$$ && ($classNameEndIndex$$ = $beforestring_classNameIndex$$1$$ + $className$$8$$.length, $beforestring_classNameIndex$$1$$ = 0 == $beforestring_classNameIndex$$1$$ ? $JSCompiler_alias_NULL$$ : $afterstring_currentClassName$$1$$.substring(0, 
  $beforestring_classNameIndex$$1$$), $afterstring_currentClassName$$1$$ = $classNameEndIndex$$ == $afterstring_currentClassName$$1$$.length ? $JSCompiler_alias_NULL$$ : $afterstring_currentClassName$$1$$.substring($classNameEndIndex$$ + 1), $domElement$$1$$.className = $beforestring_classNameIndex$$1$$ == $JSCompiler_alias_NULL$$ ? $afterstring_currentClassName$$1$$ == $JSCompiler_alias_NULL$$ ? "" : $afterstring_currentClassName$$1$$ : $afterstring_currentClassName$$1$$ == $JSCompiler_alias_NULL$$ ? 
  $beforestring_classNameIndex$$1$$ : $beforestring_classNameIndex$$1$$ + $afterstring_currentClassName$$1$$))
}
function $JSCompiler_StaticMethods_containsCSSClassName$$($domElement$$2$$, $className$$9$$) {
  return $className$$9$$ != $JSCompiler_alias_NULL$$ ? -1 != $DvtDataGridUtils$_getCSSClassNameIndex$$($domElement$$2$$.className, $className$$9$$) : $JSCompiler_alias_FALSE$$
}
function $DvtDataGridUtils$_getCSSClassNameIndex$$($currentClassName$$2$$, $className$$10$$) {
  var $classNameLength$$, $currentClassNameLength$$, $nameIndex$$, $hasStart$$, $endIndex$$5_hasEnd$$, $lastNameIndex$$;
  if(!$currentClassName$$2$$ || !$currentClassName$$2$$.indexOf) {
    return-1
  }
  if($className$$10$$ === $currentClassName$$2$$) {
    return 0
  }
  $classNameLength$$ = $className$$10$$.length;
  $currentClassNameLength$$ = $currentClassName$$2$$.length;
  $nameIndex$$ = $currentClassName$$2$$.indexOf($className$$10$$);
  if(0 <= $nameIndex$$) {
    $hasStart$$ = 0 == $nameIndex$$ || " " == $currentClassName$$2$$.charAt($nameIndex$$ - 1);
    $endIndex$$5_hasEnd$$ = $nameIndex$$ + $classNameLength$$;
    $endIndex$$5_hasEnd$$ = $endIndex$$5_hasEnd$$ == $currentClassNameLength$$ || " " == $currentClassName$$2$$.charAt($endIndex$$5_hasEnd$$);
    if($hasStart$$ && $endIndex$$5_hasEnd$$) {
      return $nameIndex$$
    }
    $lastNameIndex$$ = $currentClassName$$2$$.lastIndexOf($className$$10$$);
    if($lastNameIndex$$ != $nameIndex$$) {
      return $hasStart$$ = $currentClassName$$2$$.charAt($lastNameIndex$$ - 1), $endIndex$$5_hasEnd$$ = $lastNameIndex$$ + $classNameLength$$, $endIndex$$5_hasEnd$$ = $endIndex$$5_hasEnd$$ == $currentClassNameLength$$ || " " == $currentClassName$$2$$.charAt($endIndex$$5_hasEnd$$), $hasStart$$ && $endIndex$$5_hasEnd$$ ? $lastNameIndex$$ : $currentClassName$$2$$.indexOf(" " + $className$$10$$ + " ")
    }
  }
  return-1
}
function $JSCompiler_StaticMethods_ctrlEquivalent$$($JSCompiler_StaticMethods_ctrlEquivalent$self$$, $event$$653$$) {
  return"Mac" === $JSCompiler_StaticMethods_ctrlEquivalent$self$$.$os$ ? $event$$653$$.metaKey : $event$$653$$.ctrlKey
}
function $JSCompiler_StaticMethods_setElementScrollLeft$$($JSCompiler_StaticMethods_setElementScrollLeft$self_width$$147$$, $element$$16$$, $scrollLeft$$1$$) {
  var $elemWidth$$1$$;
  $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$147$$.$dataGrid$.$getResources$().isRTLMode() ? "gecko" === $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$147$$.platform ? $element$$16$$.scrollLeft = 0 - $scrollLeft$$1$$ : "ie" == $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$147$$.platform ? $element$$16$$.scrollLeft = $scrollLeft$$1$$ : ($JSCompiler_StaticMethods_setElementScrollLeft$self_width$$147$$ = $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_setElementScrollLeft$self_width$$147$$.$dataGrid$.$m_scroller$.firstChild), 
  $elemWidth$$1$$ = parseInt($element$$16$$.style.width, 10), $element$$16$$.scrollLeft = $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$147$$ - $elemWidth$$1$$ - $scrollLeft$$1$$) : $element$$16$$.scrollLeft = $scrollLeft$$1$$
}
$DvtDataGridUtils$$.prototype.$_determineOS$ = function $$DvtDataGridUtils$$$$$_determineOS$$($userAgent$$6$$) {
  if($userAgent$$6$$) {
    if(-1 != $userAgent$$6$$.indexOf("win")) {
      return"Windows"
    }
    if(-1 != $userAgent$$6$$.indexOf("mac")) {
      return"Mac"
    }
    if(-1 != $userAgent$$6$$.indexOf("sunos")) {
      return"Solaris"
    }
  }
  return"Unknown"
};
$DvtDataGridUtils$$.prototype.$_determinePlatform$ = function $$DvtDataGridUtils$$$$$_determinePlatform$$($userAgent$$7$$) {
  if($userAgent$$7$$ && -1 == $userAgent$$7$$.indexOf("opera")) {
    if(-1 != $userAgent$$7$$.indexOf("trident") || -1 != $userAgent$$7$$.indexOf("msie")) {
      return"ie"
    }
    if(-1 != $userAgent$$7$$.indexOf("applewebkit") || -1 != $userAgent$$7$$.indexOf("safari")) {
      return"webkit"
    }
    if(-1 != $userAgent$$7$$.indexOf("gecko/")) {
      return"gecko"
    }
  }
  return"unknown"
};
function $DvtDataGridOptions$$($options$$238$$) {
  this.options = $options$$238$$
}
function $JSCompiler_StaticMethods_extract$$($JSCompiler_StaticMethods_extract$self_val1$$1$$, $arg1$$, $arg2_val2$$, $arg3$$) {
  return $arg1$$ != $JSCompiler_alias_NULL$$ ? ($JSCompiler_StaticMethods_extract$self_val1$$1$$ = $JSCompiler_StaticMethods_extract$self_val1$$1$$.options[$arg1$$], $arg2_val2$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_extract$self_val1$$1$$ != $JSCompiler_alias_NULL$$ ? ($arg2_val2$$ = $JSCompiler_StaticMethods_extract$self_val1$$1$$[$arg2_val2$$], $arg3$$ != $JSCompiler_alias_NULL$$ && $arg2_val2$$ != $JSCompiler_alias_NULL$$ ? $arg2_val2$$[$arg3$$] : $arg2_val2$$) : $JSCompiler_StaticMethods_extract$self_val1$$1$$) : 
  $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$ = $DvtDataGridOptions$$.prototype;
$JSCompiler_prototypeAlias$$.evaluate = function $$JSCompiler_prototypeAlias$$$evaluate$($value$$139$$, $obj$$353$$) {
  return"function" == typeof $value$$139$$ ? $value$$139$$.call(this, $obj$$353$$) : $value$$139$$
};
function $JSCompiler_StaticMethods_getRawProperty$$($JSCompiler_StaticMethods_getRawProperty$self$$, $prop$$20$$, $axis$$57$$) {
  var $arg1$$1$$, $arg2$$1$$, $arg3$$1$$;
  "row" == $axis$$57$$ || "column" == $axis$$57$$ ? ($arg1$$1$$ = "header", $arg2$$1$$ = $axis$$57$$, $arg3$$1$$ = $prop$$20$$) : "cell" == $axis$$57$$ && ($arg1$$1$$ = "cell", $arg2$$1$$ = $prop$$20$$);
  return $JSCompiler_StaticMethods_extract$$($JSCompiler_StaticMethods_getRawProperty$self$$, $arg1$$1$$, $arg2$$1$$, $arg3$$1$$)
}
$JSCompiler_prototypeAlias$$.$getProperty$ = function $$JSCompiler_prototypeAlias$$$$getProperty$$($prop$$21$$, $axis$$58$$, $obj$$354$$) {
  return this.evaluate($JSCompiler_StaticMethods_getRawProperty$$(this, $prop$$21$$, $axis$$58$$), $obj$$354$$)
};
function $JSCompiler_StaticMethods_getRowBandingInterval$$($JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$) {
  $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ = $JSCompiler_StaticMethods_extract$$($JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$, "bandingInterval", "row");
  return $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ != $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ : 0
}
function $JSCompiler_StaticMethods_getColumnBandingInterval$$($JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$) {
  $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ = $JSCompiler_StaticMethods_extract$$($JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$, "bandingInterval", "column");
  return $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ != $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ : 0
}
$JSCompiler_prototypeAlias$$.$getEmptyText$ = function $$JSCompiler_prototypeAlias$$$$getEmptyText$$() {
  return $JSCompiler_StaticMethods_extract$$(this, "emptyText")
};
function $JSCompiler_StaticMethods_getHorizontalGridlines$$($JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$3$$) {
  $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$3$$ = $JSCompiler_StaticMethods_extract$$($JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$3$$, "gridlines", "horizontal");
  return $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$3$$ != $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$3$$ : "visible"
}
function $JSCompiler_StaticMethods_getVerticalGridlines$$($JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$3$$) {
  $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$3$$ = $JSCompiler_StaticMethods_extract$$($JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$3$$, "gridlines", "vertical");
  return $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$3$$ != $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$3$$ : "visible"
}
function $JSCompiler_StaticMethods_getSelectionCardinality$$($JSCompiler_StaticMethods_getSelectionCardinality$self_key$$99$$) {
  var $mode$$11_val$$81$$;
  $mode$$11_val$$81$$ = $JSCompiler_StaticMethods_extract$$($JSCompiler_StaticMethods_getSelectionCardinality$self_key$$99$$, "selectionMode");
  if($mode$$11_val$$81$$ == $JSCompiler_alias_VOID$$) {
    return"none"
  }
  $JSCompiler_StaticMethods_getSelectionCardinality$self_key$$99$$ = $JSCompiler_StaticMethods_getSelectionCardinality$self_key$$99$$.$getSelectionMode$();
  $mode$$11_val$$81$$ = $mode$$11_val$$81$$[$JSCompiler_StaticMethods_getSelectionCardinality$self_key$$99$$];
  return $mode$$11_val$$81$$ != $JSCompiler_alias_NULL$$ ? $mode$$11_val$$81$$ : "none"
}
$JSCompiler_prototypeAlias$$.$getSelectionMode$ = function $$JSCompiler_prototypeAlias$$$$getSelectionMode$$() {
  var $cardinality_mode$$12$$;
  $cardinality_mode$$12$$ = $JSCompiler_StaticMethods_extract$$(this, "selectionMode");
  if($cardinality_mode$$12$$ == $JSCompiler_alias_VOID$$) {
    return"cell"
  }
  $cardinality_mode$$12$$ = $cardinality_mode$$12$$.row;
  return $cardinality_mode$$12$$ != $JSCompiler_alias_NULL$$ && "none" != $cardinality_mode$$12$$ ? "row" : "cell"
};
function $JSCompiler_StaticMethods_isResizable$$($JSCompiler_StaticMethods_isResizable$self_value$$inline_10384$$, $axis$$60$$, $obj$$356$$) {
  $JSCompiler_StaticMethods_isResizable$self_value$$inline_10384$$ = $JSCompiler_StaticMethods_isResizable$self_value$$inline_10384$$.$getProperty$("resizable", $axis$$60$$, $obj$$356$$);
  return $JSCompiler_StaticMethods_isResizable$self_value$$inline_10384$$ != $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_isResizable$self_value$$inline_10384$$ : $JSCompiler_alias_FALSE$$
}
$JSCompiler_prototypeAlias$$.$getInlineStyle$ = function $$JSCompiler_prototypeAlias$$$$getInlineStyle$$($axis$$61$$, $obj$$357$$) {
  return this.$getProperty$("style", $axis$$61$$, $obj$$357$$)
};
$JSCompiler_prototypeAlias$$.$getStyleClass$ = function $$JSCompiler_prototypeAlias$$$$getStyleClass$$($axis$$62$$, $obj$$358$$) {
  return this.$getProperty$("className", $axis$$62$$, $obj$$358$$)
};
function $JSCompiler_StaticMethods_getRenderer$$($JSCompiler_StaticMethods_getRenderer$self$$, $axis$$63$$) {
  return $JSCompiler_StaticMethods_getRawProperty$$($JSCompiler_StaticMethods_getRenderer$self$$, "renderer", $axis$$63$$)
}
;
function $DvtDataGridSizingManager$$() {
  this.$sizes$ = {column:{}, row:{}}
}
$DvtDataGridSizingManager$$.prototype.$setSize$ = function $$DvtDataGridSizingManager$$$$$setSize$$($axis$$64$$, $headerKey$$, $size$$47$$) {
  this.$sizes$[$axis$$64$$][$headerKey$$] = $size$$47$$
};
$DvtDataGridSizingManager$$.prototype.$getSize$ = function $$DvtDataGridSizingManager$$$$$getSize$$($axis$$65$$, $headerKey$$1$$) {
  return this.$sizes$[$axis$$65$$].hasOwnProperty($headerKey$$1$$) ? this.$sizes$[$axis$$65$$][$headerKey$$1$$] : $JSCompiler_alias_NULL$$
};
$DvtDataGridSizingManager$$.prototype.clear = function $$DvtDataGridSizingManager$$$$clear$() {
  this.$sizes$ = {column:{}, row:{}}
};
function $DvtDataGrid$$() {
  this.TIMEOUT = 100;
  this.$MAX_COLUMN_THRESHOLD$ = 20;
  this.$MAX_ROW_THRESHOLD$ = 30;
  this.$m_cachedRowHeight$ = [];
  this.$m_cachedColumnWidth$ = [];
  this.$m_utils$ = new $DvtDataGridUtils$$(this);
  this.$m_discontiguousSelection$ = $JSCompiler_alias_FALSE$$;
  this.$m_cachedRowHeightStartIndex$ = this.$m_cachedColumnWidthStartIndex$ = 0;
  this.$m_sizingManager$ = new $DvtDataGridSizingManager$$;
  this.$m_colHeaderHeight$ = this.$m_rowHeaderWidth$ = $JSCompiler_alias_NULL$$;
  this.$m_styleClassDimensionMap$ = {};
  this.$m_captureScrolling$ = this.$m_stopDatabodyScroll$ = $JSCompiler_alias_FALSE$$;
  this.$m_isEstimateColumnCount$ = this.$m_isEstimateRowCount$ = $JSCompiler_alias_VOID$$;
  this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = $JSCompiler_alias_FALSE$$;
  this.$callbacks$ = {}
}
$goog$exportSymbol$$("DvtDataGrid", $DvtDataGrid$$);
$DvtDataGrid$$.prototype.$SetOptions$ = function $$DvtDataGrid$$$$$SetOptions$$($options$$237$$) {
  this.$m_options$ = new $DvtDataGridOptions$$($options$$237$$)
};
$DvtDataGrid$$.prototype.SetOptions = $DvtDataGrid$$.prototype.$SetOptions$;
$DvtDataGrid$$.prototype.$SetResources$ = $JSCompiler_set$$("$m_resources$");
$DvtDataGrid$$.prototype.SetResources = $DvtDataGrid$$.prototype.$SetResources$;
$DvtDataGrid$$.prototype.$getResources$ = $JSCompiler_get$$("$m_resources$");
$DvtDataGrid$$.prototype.getResources = $DvtDataGrid$$.prototype.$getResources$;
$DvtDataGrid$$.prototype.$SetDataSource$ = function $$DvtDataGrid$$$$$SetDataSource$$($dataSource$$) {
  $dataSource$$.on("change", this.$handleModelEvent$.bind(this), this);
  $dataSource$$.on("expand", this.$handleExpandEvent$.bind(this), this);
  $dataSource$$.on("collapse", this.$handleCollapseEvent$.bind(this), this);
  this.$m_dataSource$ = $dataSource$$
};
$DvtDataGrid$$.prototype.SetDataSource = $DvtDataGrid$$.prototype.$SetDataSource$;
$DvtDataGrid$$.prototype.$getDataSource$ = $JSCompiler_get$$("$m_dataSource$");
$DvtDataGrid$$.prototype.getDataSource = $DvtDataGrid$$.prototype.$getDataSource$;
$DvtDataGrid$$.prototype.$SetCreateContextCallback$ = $JSCompiler_set$$("$m_createContextCallback$");
$DvtDataGrid$$.prototype.SetCreateContextCallback = $DvtDataGrid$$.prototype.$SetCreateContextCallback$;
function $JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_7410$$) {
  $JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_7410$$ = $JSCompiler_StaticMethods_extract$$($JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_7410$$.$m_options$, "scrollPolicy");
  $JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_7410$$ == $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_7410$$ = "auto");
  return"scroll" != $JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_7410$$
}
$DvtDataGrid$$.prototype.$destroy$ = function $$DvtDataGrid$$$$$destroy$$() {
  delete this.$m_fetching$;
  document.removeEventListener("mousemove", this.$docMouseMoveListener$, $JSCompiler_alias_FALSE$$);
  document.removeEventListener("mouseup", this.$docMouseUpListener$, $JSCompiler_alias_FALSE$$);
  this.$m_dataSource$.off("change", this.$handleModelEvent$);
  this.$m_dataSource$.off("expand", this.$handleExpandEvent$);
  this.$m_dataSource$.off("collapse", this.$handleCollapseEvent$);
  delete this.$m_styleClassDimensionMap$;
  this.$m_styleClassDimensionMap$ = {}
};
$DvtDataGrid$$.prototype.destroy = $DvtDataGrid$$.prototype.$destroy$;
$DvtDataGrid$$.prototype.getWidth = function $$DvtDataGrid$$$$getWidth$() {
  this.$m_width$ == $JSCompiler_alias_NULL$$ && (this.$m_width$ = this.$m_root$.offsetWidth);
  return this.$m_width$
};
$DvtDataGrid$$.prototype.getHeight = function $$DvtDataGrid$$$$getHeight$() {
  this.$m_height$ == $JSCompiler_alias_NULL$$ && (this.$m_height$ = this.$m_root$.offsetHeight);
  return this.$m_height$
};
function $JSCompiler_StaticMethods_getViewportWidth$$($JSCompiler_StaticMethods_getViewportWidth$self_width$$148$$) {
  $JSCompiler_StaticMethods_getViewportWidth$self_width$$148$$ = $JSCompiler_StaticMethods_getViewportWidth$self_width$$148$$.getWidth();
  return Math.round(1.5 * $JSCompiler_StaticMethods_getViewportWidth$self_width$$148$$)
}
function $JSCompiler_StaticMethods_getViewportHeight$$($JSCompiler_StaticMethods_getViewportHeight$self_height$$130$$) {
  $JSCompiler_StaticMethods_getViewportHeight$self_height$$130$$ = $JSCompiler_StaticMethods_getViewportHeight$self_height$$130$$.getHeight();
  return Math.round(1.5 * $JSCompiler_StaticMethods_getViewportHeight$self_height$$130$$)
}
function $JSCompiler_StaticMethods_getFetchSize$$($JSCompiler_StaticMethods_getFetchSize$self$$, $axis$$41$$) {
  return"row" == $axis$$41$$ ? ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$ == $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$ = Math.round($JSCompiler_StaticMethods_getViewportHeight$$($JSCompiler_StaticMethods_getFetchSize$self$$) / $JSCompiler_StaticMethods_getDefaultRowHeight$$($JSCompiler_StaticMethods_getFetchSize$self$$))), $JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$) : "column" == $axis$$41$$ ? ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$ == 
  $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$ = Math.round($JSCompiler_StaticMethods_getViewportWidth$$($JSCompiler_StaticMethods_getFetchSize$self$$) / 50)), $JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$) : 0
}
$DvtDataGrid$$.prototype.$getEmptyText$ = function $$DvtDataGrid$$$$$getEmptyText$$() {
  var $emptyText$$2_resources$$42$$;
  $emptyText$$2_resources$$42$$ = this.$m_options$.$getEmptyText$();
  $emptyText$$2_resources$$42$$ == $JSCompiler_alias_NULL$$ && ($emptyText$$2_resources$$42$$ = this.$getResources$(), $emptyText$$2_resources$$42$$ = $emptyText$$2_resources$$42$$.getTranslatedText("empty"));
  return $emptyText$$2_resources$$42$$
};
function $JSCompiler_StaticMethods_getDefaultRowHeight$$($JSCompiler_StaticMethods_getDefaultRowHeight$self$$) {
  var $div$$, $divHeight_resources$$43$$;
  $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_defaultRowHeight$ == $JSCompiler_alias_NULL$$ && ($div$$ = document.createElement("div"), $divHeight_resources$$43$$ = $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$getResources$(), $div$$.className = $divHeight_resources$$43$$.getMappedStyle("colheader") + " " + $divHeight_resources$$43$$.getMappedStyle("headercell"), $div$$.style.visibilty = "hidden", $div$$.style.top = "0px", $div$$.style.visibilty = "0px", $div$$.style.height = 
  "auto", $div$$.innerHTML = "hq", $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_root$.appendChild($div$$), $divHeight_resources$$43$$ = $div$$.offsetHeight, $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_root$.removeChild($div$$), $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_defaultRowHeight$ = Math.max($divHeight_resources$$43$$, 30));
  return $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_defaultRowHeight$
}
function $JSCompiler_StaticMethods__getStyleClassDimensionKey$$($elem$$44_inlineStyle$$12$$) {
  var $className$$11$$;
  $className$$11$$ = $elem$$44_inlineStyle$$12$$.className;
  $elem$$44_inlineStyle$$12$$ = $elem$$44_inlineStyle$$12$$.style.cssText;
  return 0 < $elem$$44_inlineStyle$$12$$.indexOf("width") || 0 < $elem$$44_inlineStyle$$12$$.indexOf("height") ? $className$$11$$.concat($elem$$44_inlineStyle$$12$$) : $className$$11$$
}
function $JSCompiler_StaticMethods_getRowHeight$$($JSCompiler_StaticMethods_getRowHeight$self$$, $elem$$45$$, $index$$141$$, $key$$91$$) {
  var $rowHeight$$11$$;
  $rowHeight$$11$$ = $JSCompiler_StaticMethods_getRowHeight$self$$.$m_sizingManager$.$getSize$("row", $key$$91$$);
  if($rowHeight$$11$$ != $JSCompiler_alias_NULL$$) {
    return $rowHeight$$11$$
  }
  $rowHeight$$11$$ = $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeight$[$index$$141$$ - $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeightStartIndex$];
  if($rowHeight$$11$$ == $JSCompiler_alias_NULL$$) {
    $key$$91$$ = $JSCompiler_StaticMethods__getStyleClassDimensionKey$$($elem$$45$$), $rowHeight$$11$$ = $JSCompiler_StaticMethods_getRowHeight$self$$.$m_styleClassDimensionMap$[$key$$91$$], $rowHeight$$11$$ == $JSCompiler_alias_NULL$$ && ($elem$$45$$.style.visibility = "hidden", document.body.appendChild($elem$$45$$), $rowHeight$$11$$ = $elem$$45$$.offsetHeight, $elem$$45$$.style.visibility = "visible", $JSCompiler_StaticMethods_getRowHeight$self$$.$m_styleClassDimensionMap$[$key$$91$$] = $rowHeight$$11$$)
  }else {
    return $rowHeight$$11$$
  }
  0 === $rowHeight$$11$$ && ($rowHeight$$11$$ = $JSCompiler_StaticMethods_getDefaultRowHeight$$($JSCompiler_StaticMethods_getRowHeight$self$$));
  0 > $index$$141$$ - $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeightStartIndex$ ? $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeight$.unshift($rowHeight$$11$$) : $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeight$[$index$$141$$ - $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeightStartIndex$] = $rowHeight$$11$$;
  return $rowHeight$$11$$
}
function $JSCompiler_StaticMethods_getColumnWidth$$($JSCompiler_StaticMethods_getColumnWidth$self$$, $elem$$46$$, $index$$142$$, $key$$92$$) {
  var $columnWidth$$1$$;
  $columnWidth$$1$$ = $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_sizingManager$.$getSize$("column", $key$$92$$);
  if($columnWidth$$1$$ != $JSCompiler_alias_NULL$$) {
    return $columnWidth$$1$$
  }
  $columnWidth$$1$$ = $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_cachedColumnWidth$[$index$$142$$ - $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_cachedColumnWidthStartIndex$];
  if($columnWidth$$1$$ == $JSCompiler_alias_NULL$$) {
    $key$$92$$ = $JSCompiler_StaticMethods__getStyleClassDimensionKey$$($elem$$46$$), $columnWidth$$1$$ = $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_styleClassDimensionMap$[$key$$92$$], $columnWidth$$1$$ == $JSCompiler_alias_NULL$$ && ("" === $elem$$46$$.style.width && $JSCompiler_StaticMethods_setElementWidth$$($elem$$46$$, 50), $elem$$46$$.style.visibility = "hidden", document.body.appendChild($elem$$46$$), $columnWidth$$1$$ = $elem$$46$$.offsetWidth, $elem$$46$$.style.visibility = "visible", 
    $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_styleClassDimensionMap$[$key$$92$$] = $columnWidth$$1$$)
  }else {
    return $columnWidth$$1$$
  }
  0 === $columnWidth$$1$$ && ($columnWidth$$1$$ = 50);
  0 > $index$$142$$ - $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_cachedColumnWidthStartIndex$ ? $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_cachedColumnWidth$.unshift($columnWidth$$1$$) : $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_cachedColumnWidth$[$index$$142$$ - $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_cachedColumnWidthStartIndex$] = $columnWidth$$1$$;
  return $columnWidth$$1$$
}
function $JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods_createSubId$self$$, $subId$$19$$) {
  var $id$$321$$ = $JSCompiler_StaticMethods_createSubId$self$$.$m_root$.id;
  $id$$321$$ == $JSCompiler_alias_NULL$$ && ($id$$321$$ = "");
  return[$id$$321$$, $subId$$19$$].join(":")
}
function $JSCompiler_StaticMethods_isHeaderFetchComplete$$($JSCompiler_StaticMethods_isHeaderFetchComplete$self$$) {
  return $JSCompiler_StaticMethods_isHeaderFetchComplete$self$$.$m_fetching$.row === $JSCompiler_alias_FALSE$$ && $JSCompiler_StaticMethods_isHeaderFetchComplete$self$$.$m_fetching$.column === $JSCompiler_alias_FALSE$$
}
function $JSCompiler_StaticMethods_isFetchComplete$$($JSCompiler_StaticMethods_isFetchComplete$self$$) {
  return $JSCompiler_StaticMethods_isHeaderFetchComplete$$($JSCompiler_StaticMethods_isFetchComplete$self$$) && $JSCompiler_StaticMethods_isFetchComplete$self$$.$m_fetching$.cells === $JSCompiler_alias_FALSE$$
}
$DvtDataGrid$$.prototype.refresh = function $$DvtDataGrid$$$$refresh$($root$$26$$) {
  this.$destroy$();
  this.$m_cachedRowHeight$ = [];
  this.$m_cachedColumnWidth$ = [];
  this.$m_sizingManager$.clear();
  this.$m_cachedRowHeightStartIndex$ = this.$m_cachedColumnWidthStartIndex$ = 0;
  this.$m_captureScrolling$ = this.$m_stopDatabodyScroll$ = $JSCompiler_alias_FALSE$$;
  this.$m_rowHeaderScrollbarSpacer$ = this.$m_columnHeaderScrollbarSpacer$ = this.$m_bottomCorner$ = this.$m_corner$ = $JSCompiler_alias_NULL$$;
  this.$m_avgColWidth$ = this.$m_avgRowHeight$ = $JSCompiler_alias_VOID$$;
  this.$m_scroller$ = this.$m_databody$ = this.$m_rowHeader$ = this.$m_colHeader$ = $JSCompiler_alias_NULL$$;
  this.$m_isEstimateColumnCount$ = this.$m_isEstimateRowCount$ = $JSCompiler_alias_VOID$$;
  this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = $JSCompiler_alias_FALSE$$;
  this.$render$($root$$26$$)
};
$DvtDataGrid$$.prototype.refresh = $DvtDataGrid$$.prototype.refresh;
$DvtDataGrid$$.prototype.$render$ = function $$DvtDataGrid$$$$$render$$($emptyText$$inline_7431_root$$27_rowCount$$inline_9913_summary$$inline_9915$$) {
  this.$m_timingStart$ = new Date;
  this.$m_fetching$ = {};
  this.$m_currentScrollTop$ = this.$m_currentScrollLeft$ = this.$m_endColHeaderPixel$ = this.$m_endRowHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_startRowHeaderPixel$ = this.$m_endColHeader$ = this.$m_endRowHeader$ = this.$m_startColHeader$ = this.$m_startRowHeader$ = this.$m_endColPixel$ = this.$m_endRowPixel$ = this.$m_startColPixel$ = this.$m_startRowPixel$ = this.$m_endCol$ = this.$m_endRow$ = this.$m_startCol$ = this.$m_startRow$ = 0;
  var $colCount$$inline_9914_datasource$$inline_9912_root$$inline_9901_rtl$$inline_7425$$, $colHeader$$inline_7426_key$$inline_9916$$, $rowHeader$$inline_7427$$, $empty$$inline_7430_root$$inline_9895_root$$inline_9898$$;
  this.$m_root$ = $emptyText$$inline_7431_root$$27_rowCount$$inline_9913_summary$$inline_9915$$;
  this.$m_root$.className = this.$getResources$().getMappedStyle("datagrid");
  this.$m_root$.setAttribute("role", "application");
  this.$m_root$.setAttribute("aria-labelledby", $JSCompiler_StaticMethods_createSubId$$(this, "info"));
  this.$m_initialized$ = $JSCompiler_alias_FALSE$$;
  $emptyText$$inline_7431_root$$27_rowCount$$inline_9913_summary$$inline_9915$$.tabIndex = 0;
  $empty$$inline_7430_root$$inline_9895_root$$inline_9898$$ = document.createElement("div");
  $empty$$inline_7430_root$$inline_9895_root$$inline_9898$$.id = $JSCompiler_StaticMethods_createSubId$$(this, "status");
  $empty$$inline_7430_root$$inline_9895_root$$inline_9898$$.className = this.$getResources$().getMappedStyle("status");
  $empty$$inline_7430_root$$inline_9895_root$$inline_9898$$.setAttribute("role", "status");
  $emptyText$$inline_7431_root$$27_rowCount$$inline_9913_summary$$inline_9915$$.appendChild($empty$$inline_7430_root$$inline_9895_root$$inline_9898$$);
  this.$m_status$ = $empty$$inline_7430_root$$inline_9895_root$$inline_9898$$;
  $empty$$inline_7430_root$$inline_9895_root$$inline_9898$$ = document.createElement("div");
  $empty$$inline_7430_root$$inline_9895_root$$inline_9898$$.id = $JSCompiler_StaticMethods_createSubId$$(this, "info");
  $empty$$inline_7430_root$$inline_9895_root$$inline_9898$$.className = this.$getResources$().getMappedStyle("info");
  $empty$$inline_7430_root$$inline_9895_root$$inline_9898$$.setAttribute("role", "status");
  $emptyText$$inline_7431_root$$27_rowCount$$inline_9913_summary$$inline_9915$$.appendChild($empty$$inline_7430_root$$inline_9895_root$$inline_9898$$);
  this.$m_accInfo$ = $empty$$inline_7430_root$$inline_9895_root$$inline_9898$$;
  $colCount$$inline_9914_datasource$$inline_9912_root$$inline_9901_rtl$$inline_7425$$ = document.createElement("div");
  $colCount$$inline_9914_datasource$$inline_9912_root$$inline_9901_rtl$$inline_7425$$.id = $JSCompiler_StaticMethods_createSubId$$(this, "state");
  $colCount$$inline_9914_datasource$$inline_9912_root$$inline_9901_rtl$$inline_7425$$.className = this.$getResources$().getMappedStyle("info");
  $emptyText$$inline_7431_root$$27_rowCount$$inline_9913_summary$$inline_9915$$.appendChild($colCount$$inline_9914_datasource$$inline_9912_root$$inline_9901_rtl$$inline_7425$$);
  this.$m_stateInfo$ = $colCount$$inline_9914_datasource$$inline_9912_root$$inline_9901_rtl$$inline_7425$$;
  if(this.$m_dataSource$ != $JSCompiler_alias_NULL$$) {
    $colCount$$inline_9914_datasource$$inline_9912_root$$inline_9901_rtl$$inline_7425$$ = this.$getResources$().isRTLMode();
    $colHeader$$inline_7426_key$$inline_9916$$ = $JSCompiler_StaticMethods_buildHeaders$$(this, "column", this.$getResources$().getMappedStyle("colheader"));
    $rowHeader$$inline_7427$$ = $JSCompiler_StaticMethods_buildHeaders$$(this, "row", this.$getResources$().getMappedStyle("rowheader"));
    var $root$$inline_9904$$ = document.createElement("div");
    $root$$inline_9904$$.id = $JSCompiler_StaticMethods_createSubId$$(this, "scroller");
    $root$$inline_9904$$.className = this.$getResources$().getMappedStyle("scrollers");
    $root$$inline_9904$$.addEventListener ? $root$$inline_9904$$.addEventListener("scroll", this.$handleScroll$.bind(this), $JSCompiler_alias_FALSE$$) : $root$$inline_9904$$.attachEvent("onscroll", this.$handleScroll$.bind(this));
    var $root$$inline_9908$$ = document.createElement("div");
    $root$$inline_9908$$.id = $JSCompiler_StaticMethods_createSubId$$(this, "databody");
    $root$$inline_9908$$.className = this.$getResources$().getMappedStyle("databody");
    this.fetchCells($root$$inline_9908$$, $root$$inline_9904$$, 0, 0);
    $colCount$$inline_9914_datasource$$inline_9912_root$$inline_9901_rtl$$inline_7425$$ && ($colHeader$$inline_7426_key$$inline_9916$$.style.direction = "rtl", $root$$inline_9908$$.style.direction = "rtl", $root$$inline_9904$$.style.direction = "rtl");
    $emptyText$$inline_7431_root$$27_rowCount$$inline_9913_summary$$inline_9915$$.appendChild($colHeader$$inline_7426_key$$inline_9916$$);
    $emptyText$$inline_7431_root$$27_rowCount$$inline_9913_summary$$inline_9915$$.appendChild($rowHeader$$inline_7427$$);
    $emptyText$$inline_7431_root$$27_rowCount$$inline_9913_summary$$inline_9915$$.appendChild($root$$inline_9904$$);
    $emptyText$$inline_7431_root$$27_rowCount$$inline_9913_summary$$inline_9915$$.appendChild($root$$inline_9908$$);
    this.$m_colHeader$ = $colHeader$$inline_7426_key$$inline_9916$$;
    this.$m_rowHeader$ = $rowHeader$$inline_7427$$;
    this.$m_databody$ = $root$$inline_9908$$;
    this.$m_scroller$ = $root$$inline_9904$$;
    $emptyText$$inline_7431_root$$27_rowCount$$inline_9913_summary$$inline_9915$$.addEventListener ? ($root$$inline_9908$$.addEventListener("mousewheel", this.$handleDatabodyMouseWheel$.bind(this), $JSCompiler_alias_FALSE$$), $root$$inline_9908$$.addEventListener("mousedown", this.$handleDatabodyMouseDown$.bind(this), $JSCompiler_alias_FALSE$$), $root$$inline_9908$$.addEventListener("mousemove", this.$handleDatabodyMouseMove$.bind(this), $JSCompiler_alias_FALSE$$), $root$$inline_9908$$.addEventListener("mouseup", 
    this.$handleDatabodyMouseUp$.bind(this), $JSCompiler_alias_FALSE$$), $root$$inline_9908$$.addEventListener("mouseout", this.$handleDatabodyMouseOut$.bind(this), $JSCompiler_alias_FALSE$$), $root$$inline_9908$$.addEventListener("mouseover", this.$handleDatabodyMouseOver$.bind(this), $JSCompiler_alias_FALSE$$), $emptyText$$inline_7431_root$$27_rowCount$$inline_9913_summary$$inline_9915$$.addEventListener("keydown", this.$handleDatabodyKeyDown$.bind(this), $JSCompiler_alias_FALSE$$), $emptyText$$inline_7431_root$$27_rowCount$$inline_9913_summary$$inline_9915$$.addEventListener("focus", 
    this.$handleFocus$.bind(this), $JSCompiler_alias_FALSE$$), this.$m_isResizing$ = $JSCompiler_alias_FALSE$$, this.$m_resizingElement$ = $JSCompiler_alias_NULL$$, this.$m_databodyDragState$ = $JSCompiler_alias_FALSE$$, this.$docMouseMoveListener$ = this.$handleMouseMove$.bind(this), this.$docMouseUpListener$ = this.$handleMouseUp$.bind(this), document.addEventListener("mousemove", this.$docMouseMoveListener$, $JSCompiler_alias_FALSE$$), document.addEventListener("mouseup", this.$docMouseUpListener$, 
    $JSCompiler_alias_FALSE$$), $rowHeader$$inline_7427$$.addEventListener("mousedown", this.$handleHeaderMouseDown$.bind(this), $JSCompiler_alias_FALSE$$), $colHeader$$inline_7426_key$$inline_9916$$.addEventListener("mousedown", this.$handleHeaderMouseDown$.bind(this), $JSCompiler_alias_FALSE$$), $rowHeader$$inline_7427$$.addEventListener("mouseover", this.$handleHeaderMouseOver$.bind(this), $JSCompiler_alias_FALSE$$), $colHeader$$inline_7426_key$$inline_9916$$.addEventListener("mouseover", this.$handleHeaderMouseOver$.bind(this), 
    $JSCompiler_alias_FALSE$$), $rowHeader$$inline_7427$$.addEventListener("mouseout", this.$handleHeaderMouseOut$.bind(this), $JSCompiler_alias_FALSE$$), $colHeader$$inline_7426_key$$inline_9916$$.addEventListener("mouseout", this.$handleHeaderMouseOut$.bind(this), $JSCompiler_alias_FALSE$$), $rowHeader$$inline_7427$$.addEventListener("click", this.$handleHeaderClick$.bind(this), $JSCompiler_alias_FALSE$$), $colHeader$$inline_7426_key$$inline_9916$$.addEventListener("click", this.$handleHeaderClick$.bind(this), 
    $JSCompiler_alias_FALSE$$), this.$m_utils$.$isTouchDevice$() ? ($root$$inline_9908$$.addEventListener("touchstart", this.$handleTouchStart$.bind(this), $JSCompiler_alias_FALSE$$), $root$$inline_9908$$.addEventListener("touchmove", this.$handleTouchMove$.bind(this), $JSCompiler_alias_FALSE$$), $root$$inline_9908$$.addEventListener("touchend", this.$handleTouchEnd$.bind(this), $JSCompiler_alias_FALSE$$), $root$$inline_9908$$.addEventListener("touchcancel", this.$handleTouchCancel$.bind(this), $JSCompiler_alias_FALSE$$)) : 
    ($root$$inline_9904$$.addEventListener("mousedown", this.$handleScrollerMouseDown$.bind(this), $JSCompiler_alias_FALSE$$), $root$$inline_9904$$.addEventListener("mouseup", this.$handleScrollerMouseUp$.bind(this), $JSCompiler_alias_FALSE$$))) : ($root$$inline_9908$$.attachEvent("onmousewheel", this.$handleDatabodyMouseWheel$.bind(this)), $root$$inline_9908$$.attachEvent("onmousedown", this.$handleDatabodyMouseDown$.bind(this)), $root$$inline_9908$$.attachEvent("onmousemove", this.$handleDatabodyMouseDown$.bind(this)), 
    $root$$inline_9908$$.attachEvent("onmouseup", this.$handleDatabodyMouseDown$.bind(this)), $emptyText$$inline_7431_root$$27_rowCount$$inline_9913_summary$$inline_9915$$.attachEvent("onkeydown", this.$handleDatabodyKeyDown$.bind(this)));
    $colCount$$inline_9914_datasource$$inline_9912_root$$inline_9901_rtl$$inline_7425$$ = this.$m_dataSource$;
    $emptyText$$inline_7431_root$$27_rowCount$$inline_9913_summary$$inline_9915$$ = $colCount$$inline_9914_datasource$$inline_9912_root$$inline_9901_rtl$$inline_7425$$.getCount("row");
    $colCount$$inline_9914_datasource$$inline_9912_root$$inline_9901_rtl$$inline_7425$$ = $colCount$$inline_9914_datasource$$inline_9912_root$$inline_9901_rtl$$inline_7425$$.getCount("column");
    $colHeader$$inline_7426_key$$inline_9916$$ = !$JSCompiler_StaticMethods__isCountUnknown$$(this, "row") && !$JSCompiler_StaticMethods__isCountUnknown$$(this, "column") ? "summary-exact" : "summary-estimate";
    $emptyText$$inline_7431_root$$27_rowCount$$inline_9913_summary$$inline_9915$$ = this.$getResources$().getTranslatedText($colHeader$$inline_7426_key$$inline_9916$$, [$emptyText$$inline_7431_root$$27_rowCount$$inline_9913_summary$$inline_9915$$, $colCount$$inline_9914_datasource$$inline_9912_root$$inline_9901_rtl$$inline_7425$$]);
    $empty$$inline_7430_root$$inline_9895_root$$inline_9898$$.innerHTML = $emptyText$$inline_7431_root$$27_rowCount$$inline_9913_summary$$inline_9915$$;
    $JSCompiler_StaticMethods_isFetchComplete$$(this) && !this.$m_initialized$ ? ($JSCompiler_StaticMethods_resizeGrid$$(this), $JSCompiler_StaticMethods_setInitialScrollPosition$$(this)) : $JSCompiler_StaticMethods_isHeaderFetchComplete$$(this) && !this.$m_initialized$ && $JSCompiler_StaticMethods_resizeHeaders$$(this)
  }else {
    $emptyText$$inline_7431_root$$27_rowCount$$inline_9913_summary$$inline_9915$$ = this.$getEmptyText$(), $empty$$inline_7430_root$$inline_9895_root$$inline_9898$$ = document.createElement("div"), $empty$$inline_7430_root$$inline_9895_root$$inline_9898$$.className = this.$getResources$().getMappedStyle("emptytext"), $empty$$inline_7430_root$$inline_9895_root$$inline_9898$$.setAttribute("id", $JSCompiler_StaticMethods_createSubId$$(this, "empty")), $empty$$inline_7430_root$$inline_9895_root$$inline_9898$$.innerHTML = 
    $emptyText$$inline_7431_root$$27_rowCount$$inline_9913_summary$$inline_9915$$, this.$m_root$.appendChild($empty$$inline_7430_root$$inline_9895_root$$inline_9898$$)
  }
};
$DvtDataGrid$$.prototype.render = $DvtDataGrid$$.prototype.$render$;
function $JSCompiler_StaticMethods_resizeHeaders$$($JSCompiler_StaticMethods_resizeHeaders$self$$) {
  var $width$$149$$, $height$$131$$, $colHeader$$4$$, $rowHeader$$3$$, $colHeaderHeight$$1$$, $rowHeaderWidth$$1$$, $dir$$14$$;
  $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_colHeader$ == $JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_rowHeader$ == $JSCompiler_alias_NULL$$ || ($width$$149$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.getWidth(), $height$$131$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.getHeight(), $colHeader$$4$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_colHeader$, $rowHeader$$3$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_rowHeader$, $colHeaderHeight$$1$$ = 
  $JSCompiler_StaticMethods_getElementHeight$$($colHeader$$4$$), $rowHeaderWidth$$1$$ = $JSCompiler_StaticMethods_getElementWidth$$($rowHeader$$3$$), $dir$$14$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.$getResources$().isRTLMode() ? "right" : "left", $JSCompiler_StaticMethods_setElementDir$$($rowHeader$$3$$, 0, $dir$$14$$), $JSCompiler_StaticMethods_setElementDir$$($rowHeader$$3$$, $colHeaderHeight$$1$$, "top"), $JSCompiler_StaticMethods_setElementHeight$$($rowHeader$$3$$, $height$$131$$ - 
  $colHeaderHeight$$1$$), $JSCompiler_StaticMethods_setElementDir$$($colHeader$$4$$, $rowHeaderWidth$$1$$, $dir$$14$$), $JSCompiler_StaticMethods_setElementWidth$$($colHeader$$4$$, $width$$149$$ - $rowHeaderWidth$$1$$), $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_utils$.$isTouchDevice$() || $JSCompiler_StaticMethods_buildCorners$$($JSCompiler_StaticMethods_resizeHeaders$self$$))
}
function $JSCompiler_StaticMethods_resizeGrid$$($JSCompiler_StaticMethods_resizeGrid$self$$) {
  var $databodyWidth$$4_width$$150$$, $databodyHeight$$4_height$$132$$, $colHeader$$5_empty$$1$$, $emptyText$$4_rowHeader$$4$$, $scroller$$4$$, $databody$$4$$, $borderWidth$$4_colHeaderHeight$$2$$, $rowHeaderWidth$$2$$, $databodyContentWidth$$, $databodyContentHeight$$, $isTouchDevice$$2$$, $isDatabodyHorizontalScrollbarRequired$$1$$, $isDatabodyVerticalScrollbarRequired$$1$$, $scrollbarSize$$1$$, $dir$$15$$;
  $JSCompiler_StaticMethods_resizeGrid$self$$.$m_databody$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_resizeGrid$self$$.$m_rootBorderWidth$ == $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_resizeGrid$self$$.$m_rootBorderWidth$ = parseInt(document.defaultView.getComputedStyle($JSCompiler_StaticMethods_resizeGrid$self$$.$m_root$, $JSCompiler_alias_NULL$$).getPropertyValue("border-top-width"), 10)), $borderWidth$$4_colHeaderHeight$$2$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_rootBorderWidth$, 
  $databodyWidth$$4_width$$150$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.getWidth() - 2 * $borderWidth$$4_colHeaderHeight$$2$$, $databodyHeight$$4_height$$132$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.getHeight() - 2 * $borderWidth$$4_colHeaderHeight$$2$$, $colHeader$$5_empty$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$, $emptyText$$4_rowHeader$$4$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_rowHeader$, $scroller$$4$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scroller$, 
  $databody$$4$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_databody$, $borderWidth$$4_colHeaderHeight$$2$$ = $JSCompiler_StaticMethods_getElementHeight$$($colHeader$$5_empty$$1$$), $rowHeaderWidth$$2$$ = $JSCompiler_StaticMethods_getElementWidth$$($emptyText$$4_rowHeader$$4$$), $databodyContentWidth$$ = $JSCompiler_StaticMethods_getElementWidth$$($databody$$4$$.firstChild), $databodyWidth$$4_width$$150$$ = Math.min($databodyContentWidth$$, $databodyWidth$$4_width$$150$$ - $rowHeaderWidth$$2$$), 
  $databodyContentHeight$$ = $JSCompiler_StaticMethods_getElementHeight$$($databody$$4$$.firstChild), $databodyHeight$$4_height$$132$$ = Math.min($databodyContentHeight$$, $databodyHeight$$4_height$$132$$ - $borderWidth$$4_colHeaderHeight$$2$$), $isTouchDevice$$2$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_utils$.$isTouchDevice$(), $scrollbarSize$$1$$ = $JSCompiler_StaticMethods_getScrollbarSize$$($JSCompiler_StaticMethods_resizeGrid$self$$.$m_utils$), ($isDatabodyHorizontalScrollbarRequired$$1$$ = 
  $JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$($JSCompiler_StaticMethods_resizeGrid$self$$, $databodyWidth$$4_width$$150$$)) ? $isDatabodyVerticalScrollbarRequired$$1$$ = $JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$($JSCompiler_StaticMethods_resizeGrid$self$$, $databodyHeight$$4_height$$132$$ - $scrollbarSize$$1$$) : ($isDatabodyVerticalScrollbarRequired$$1$$ = $JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$($JSCompiler_StaticMethods_resizeGrid$self$$, 
  $databodyHeight$$4_height$$132$$), $isDatabodyHorizontalScrollbarRequired$$1$$ && ($isDatabodyHorizontalScrollbarRequired$$1$$ = $JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$($JSCompiler_StaticMethods_resizeGrid$self$$, $databodyWidth$$4_width$$150$$ - $scrollbarSize$$1$$))), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_hasHorizontalScroller$ = $isDatabodyHorizontalScrollbarRequired$$1$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_hasVerticalScroller$ = $isDatabodyVerticalScrollbarRequired$$1$$, 
  $isDatabodyHorizontalScrollbarRequired$$1$$ && $isDatabodyVerticalScrollbarRequired$$1$$ && ($databodyHeight$$4_height$$132$$ -= $scrollbarSize$$1$$, $databodyWidth$$4_width$$150$$ -= $scrollbarSize$$1$$), $dir$$15$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$getResources$().isRTLMode() ? "right" : "left", $JSCompiler_StaticMethods_setElementDir$$($emptyText$$4_rowHeader$$4$$, 0, $dir$$15$$), $JSCompiler_StaticMethods_setElementDir$$($emptyText$$4_rowHeader$$4$$, $borderWidth$$4_colHeaderHeight$$2$$, 
  "top"), $JSCompiler_StaticMethods_setElementHeight$$($emptyText$$4_rowHeader$$4$$, $databodyHeight$$4_height$$132$$), $JSCompiler_StaticMethods_setElementDir$$($colHeader$$5_empty$$1$$, $rowHeaderWidth$$2$$, $dir$$15$$), $JSCompiler_StaticMethods_setElementWidth$$($colHeader$$5_empty$$1$$, $databodyWidth$$4_width$$150$$), $JSCompiler_StaticMethods_setElementDir$$($databody$$4$$, $borderWidth$$4_colHeaderHeight$$2$$, "top"), $JSCompiler_StaticMethods_setElementDir$$($databody$$4$$, $rowHeaderWidth$$2$$, 
  $dir$$15$$), $JSCompiler_StaticMethods_setElementWidth$$($databody$$4$$, $databodyWidth$$4_width$$150$$), $JSCompiler_StaticMethods_setElementHeight$$($databody$$4$$, $databodyHeight$$4_height$$132$$), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scrollWidth$ = $databodyContentWidth$$ - $databodyWidth$$4_width$$150$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scrollHeight$ = $databodyContentHeight$$ - $databodyHeight$$4_height$$132$$, $isDatabodyHorizontalScrollbarRequired$$1$$ && ($databodyHeight$$4_height$$132$$ += 
  $scrollbarSize$$1$$), $isDatabodyVerticalScrollbarRequired$$1$$ && ($databodyWidth$$4_width$$150$$ += $scrollbarSize$$1$$), $JSCompiler_StaticMethods_setElementDir$$($scroller$$4$$, $borderWidth$$4_colHeaderHeight$$2$$, "top"), $JSCompiler_StaticMethods_setElementDir$$($scroller$$4$$, $rowHeaderWidth$$2$$, $dir$$15$$), $JSCompiler_StaticMethods_setElementWidth$$($scroller$$4$$, $databodyWidth$$4_width$$150$$), $JSCompiler_StaticMethods_setElementHeight$$($scroller$$4$$, $databodyHeight$$4_height$$132$$), 
  $isTouchDevice$$2$$ || $JSCompiler_StaticMethods_buildCorners$$($JSCompiler_StaticMethods_resizeGrid$self$$), !$JSCompiler_StaticMethods_resizeGrid$self$$.$m_initialized$ && (0 == $JSCompiler_StaticMethods_resizeGrid$self$$.$m_startRow$ && 0 == $JSCompiler_StaticMethods_resizeGrid$self$$.$m_endRow$ && 0 == $JSCompiler_StaticMethods_resizeGrid$self$$.$m_startRowHeader$ && 0 == $JSCompiler_StaticMethods_resizeGrid$self$$.$m_endRowHeader$) && ($emptyText$$4_rowHeader$$4$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$getEmptyText$(), 
  $colHeader$$5_empty$$1$$ = document.createElement("div"), $colHeader$$5_empty$$1$$.className = $JSCompiler_StaticMethods_resizeGrid$self$$.$getResources$().getMappedStyle("emptytext"), $JSCompiler_StaticMethods_setElementDir$$($colHeader$$5_empty$$1$$, $borderWidth$$4_colHeaderHeight$$2$$, "top"), $colHeader$$5_empty$$1$$.innerHTML = $emptyText$$4_rowHeader$$4$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_root$.appendChild($colHeader$$5_empty$$1$$)), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_initialized$ = 
  $JSCompiler_alias_TRUE$$)
}
function $JSCompiler_StaticMethods_buildCorners$$($JSCompiler_StaticMethods_buildCorners$self$$) {
  var $databodyWidth$$5$$, $databodyHeight$$5$$, $scrollbarSize$$2$$, $colHeaderHeight$$3$$, $rowHeaderWidth$$3$$, $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $dir$$16$$;
  $databodyWidth$$5$$ = $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_buildCorners$self$$.$m_databody$);
  $databodyHeight$$5$$ = $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_buildCorners$self$$.$m_databody$);
  $scrollbarSize$$2$$ = $JSCompiler_StaticMethods_getScrollbarSize$$($JSCompiler_StaticMethods_buildCorners$self$$.$m_utils$);
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasHorizontalScroller$ && ($databodyHeight$$5$$ += $scrollbarSize$$2$$);
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasVerticalScroller$ && ($databodyWidth$$5$$ += $scrollbarSize$$2$$);
  $colHeaderHeight$$3$$ = $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_buildCorners$self$$.$m_colHeader$);
  $rowHeaderWidth$$3$$ = $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeader$);
  $dir$$16$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$getResources$().isRTLMode() ? "right" : "left";
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$);
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$);
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$);
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$);
  1 !== $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeader$.firstChild.childNodes.length && ($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = document.createElement("div"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = $JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods_buildCorners$self$$, "corner"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.$getResources$().getMappedStyle("topcorner"), 
  $JSCompiler_StaticMethods_setElementWidth$$($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$3$$), $JSCompiler_StaticMethods_setElementHeight$$($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $colHeaderHeight$$3$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ = $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$);
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasHorizontalScroller$ ? ($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = document.createElement("div"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = $JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods_buildCorners$self$$, "rhSbSpacer"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.$getResources$().getMappedStyle("rowheaderspacer"), 
  $JSCompiler_StaticMethods_setElementDir$$($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $colHeaderHeight$$3$$ + $databodyHeight$$5$$ - $scrollbarSize$$2$$, "top"), $JSCompiler_StaticMethods_setElementDir$$($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 0, $dir$$16$$), $JSCompiler_StaticMethods_setElementWidth$$($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$3$$), $JSCompiler_StaticMethods_setElementHeight$$($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 
  $scrollbarSize$$2$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ = $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$) : $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ = $JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasVerticalScroller$ ? ($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = document.createElement("div"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = $JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods_buildCorners$self$$, "chSbSpacer"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.$getResources$().getMappedStyle("colheaderspacer"), 
  $JSCompiler_StaticMethods_setElementDir$$($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$3$$ + $databodyWidth$$5$$ - $scrollbarSize$$2$$, $dir$$16$$), $JSCompiler_StaticMethods_setElementWidth$$($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $scrollbarSize$$2$$), $JSCompiler_StaticMethods_setElementHeight$$($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $colHeaderHeight$$3$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), 
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ = $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$) : $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ = $JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasHorizontalScroller$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasVerticalScroller$ ? ($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = document.createElement("div"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = $JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods_buildCorners$self$$, "bcorner"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = 
  $JSCompiler_StaticMethods_buildCorners$self$$.$getResources$().getMappedStyle("bottomcorner"), $JSCompiler_StaticMethods_setElementDir$$($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $colHeaderHeight$$3$$ + $databodyHeight$$5$$ - $scrollbarSize$$2$$, "top"), $JSCompiler_StaticMethods_setElementDir$$($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$3$$ + $databodyWidth$$5$$ - $scrollbarSize$$2$$, $dir$$16$$), $JSCompiler_StaticMethods_setElementWidth$$($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 
  $scrollbarSize$$2$$), $JSCompiler_StaticMethods_setElementHeight$$($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $scrollbarSize$$2$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ = $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$) : $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ = 
  $JSCompiler_alias_NULL$$
}
function $JSCompiler_StaticMethods_setInitialScrollPosition$$($JSCompiler_StaticMethods_setInitialScrollPosition$self$$) {
  var $indexes$$1_scrollMode_scrollPosition$$inline_7440$$, $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_7442_columnScrollPosition_initialScrollLeft$$, $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_7445_columnScrollPosition$$inline_7443_initialScrollTop_rowScrollPosition$$;
  $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_7445_columnScrollPosition$$inline_7443_initialScrollTop_rowScrollPosition$$ = $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_7442_columnScrollPosition_initialScrollLeft$$ = 0;
  $indexes$$1_scrollMode_scrollPosition$$inline_7440$$ = $JSCompiler_StaticMethods_extract$$($JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$, "scrollPosition");
  $indexes$$1_scrollMode_scrollPosition$$inline_7440$$ = $indexes$$1_scrollMode_scrollPosition$$inline_7440$$ == $JSCompiler_alias_VOID$$ ? $JSCompiler_alias_NULL$$ : $indexes$$1_scrollMode_scrollPosition$$inline_7440$$.key != $JSCompiler_alias_VOID$$ ? "key" : $indexes$$1_scrollMode_scrollPosition$$inline_7440$$.index != $JSCompiler_alias_VOID$$ ? "index" : $JSCompiler_alias_NULL$$;
  if($JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_scroller$ != $JSCompiler_alias_VOID$$) {
    if($indexes$$1_scrollMode_scrollPosition$$inline_7440$$ != $JSCompiler_alias_NULL$$) {
      $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_7442_columnScrollPosition_initialScrollLeft$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$;
      $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_7445_columnScrollPosition$$inline_7443_initialScrollTop_rowScrollPosition$$ = $JSCompiler_StaticMethods_extract$$($JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_7442_columnScrollPosition_initialScrollLeft$$, "scrollPosition", "key", "column");
      $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_7442_columnScrollPosition_initialScrollLeft$$ = $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_7445_columnScrollPosition$$inline_7443_initialScrollTop_rowScrollPosition$$ != $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_7445_columnScrollPosition$$inline_7443_initialScrollTop_rowScrollPosition$$ : $JSCompiler_StaticMethods_extract$$($JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_7442_columnScrollPosition_initialScrollLeft$$, 
      "scrollPosition", "index", "column");
      $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_7445_columnScrollPosition$$inline_7443_initialScrollTop_rowScrollPosition$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$;
      var $rowScrollPosition$$inline_7446$$;
      $rowScrollPosition$$inline_7446$$ = $JSCompiler_StaticMethods_extract$$($JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_7445_columnScrollPosition$$inline_7443_initialScrollTop_rowScrollPosition$$, "scrollPosition", "key", "row");
      $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_7445_columnScrollPosition$$inline_7443_initialScrollTop_rowScrollPosition$$ = $rowScrollPosition$$inline_7446$$ != $JSCompiler_alias_NULL$$ ? $rowScrollPosition$$inline_7446$$ : $JSCompiler_StaticMethods_extract$$($JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_7445_columnScrollPosition$$inline_7443_initialScrollTop_rowScrollPosition$$, "scrollPosition", "index", "row");
      "key" === $indexes$$1_scrollMode_scrollPosition$$inline_7440$$ && ($indexes$$1_scrollMode_scrollPosition$$inline_7440$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_dataSource$.indexes({$row$:$JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_7445_columnScrollPosition$$inline_7443_initialScrollTop_rowScrollPosition$$, $column$:$JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_7442_columnScrollPosition_initialScrollLeft$$}), $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_7442_columnScrollPosition_initialScrollLeft$$ = 
      -1 === $indexes$$1_scrollMode_scrollPosition$$inline_7440$$.column ? 0 : $indexes$$1_scrollMode_scrollPosition$$inline_7440$$.column, $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_7445_columnScrollPosition$$inline_7443_initialScrollTop_rowScrollPosition$$ = -1 === $indexes$$1_scrollMode_scrollPosition$$inline_7440$$.row ? 0 : $indexes$$1_scrollMode_scrollPosition$$inline_7440$$.row);
      $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_7442_columnScrollPosition_initialScrollLeft$$ *= $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_avgColWidth$;
      $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_7445_columnScrollPosition$$inline_7443_initialScrollTop_rowScrollPosition$$ *= $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_avgRowHeight$
    }
    $JSCompiler_StaticMethods_setElementScrollLeft$$($JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_utils$, $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_scroller$, $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_7442_columnScrollPosition_initialScrollLeft$$);
    $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_scroller$.scrollTop = $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_7445_columnScrollPosition$$inline_7443_initialScrollTop_rowScrollPosition$$
  }
}
function $JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$($JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$self$$, $expectedWidth$$) {
  var $databody$$5$$;
  $databody$$5$$ = $JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$self$$.$m_databody$;
  return $JSCompiler_StaticMethods_getElementWidth$$($databody$$5$$.firstChild) > ($expectedWidth$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getElementWidth$$($databody$$5$$) : $expectedWidth$$) ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
}
function $JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$($JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$self$$, $expectedHeight$$) {
  var $databody$$6$$;
  $databody$$6$$ = $JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$self$$.$m_databody$;
  return $JSCompiler_StaticMethods_getElementHeight$$($databody$$6$$.firstChild) > ($expectedHeight$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getElementHeight$$($databody$$6$$) : $expectedHeight$$) ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$
}
function $JSCompiler_StaticMethods__isCountUnknown$$($JSCompiler_StaticMethods__isCountUnknown$self$$, $axis$$42$$) {
  var $colCount$$1_datasource$$1_rowCount$$12$$, $colPrecision_rowPrecision$$;
  $colCount$$1_datasource$$1_rowCount$$12$$ = $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_dataSource$;
  return"row" === $axis$$42$$ ? ($JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateRowCount$ === $JSCompiler_alias_VOID$$ && ($colPrecision_rowPrecision$$ = $colCount$$1_datasource$$1_rowCount$$12$$.getCountPrecision("row"), $colCount$$1_datasource$$1_rowCount$$12$$ = $colCount$$1_datasource$$1_rowCount$$12$$.getCount("row"), $JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateRowCount$ = "estimate" === $colPrecision_rowPrecision$$ || 0 > $colCount$$1_datasource$$1_rowCount$$12$$ ? 
  $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateRowCount$) : "column" === $axis$$42$$ ? ($JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateColumnCount$ === $JSCompiler_alias_VOID$$ && ($colPrecision_rowPrecision$$ = $colCount$$1_datasource$$1_rowCount$$12$$.getCountPrecision("column"), $colCount$$1_datasource$$1_rowCount$$12$$ = $colCount$$1_datasource$$1_rowCount$$12$$.getCount("column"), $JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateColumnCount$ = 
  "estimate" === $colPrecision_rowPrecision$$ || 0 > $colCount$$1_datasource$$1_rowCount$$12$$ ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateColumnCount$) : $JSCompiler_alias_FALSE$$
}
function $JSCompiler_StaticMethods_buildHeaders$$($JSCompiler_StaticMethods_buildHeaders$self$$, $axis$$44$$, $styleClass$$4$$) {
  var $root$$32$$ = document.createElement("div");
  $root$$32$$.id = $JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods_buildHeaders$self$$, $axis$$44$$ + "Header");
  $root$$32$$.className = $styleClass$$4$$ + " " + $JSCompiler_StaticMethods_buildHeaders$self$$.$getResources$().getMappedStyle("header");
  $JSCompiler_StaticMethods_buildHeaders$self$$.fetchHeaders($axis$$44$$, 0, $root$$32$$);
  return $root$$32$$
}
$JSCompiler_prototypeAlias$$ = $DvtDataGrid$$.prototype;
$JSCompiler_prototypeAlias$$.fetchHeaders = function $$JSCompiler_prototypeAlias$$$fetchHeaders$($axis$$45_headerRange$$1$$, $start$$41$$, $header$$11$$, $fetchSize$$2$$, $callbacks$$6_successCallback$$26$$) {
  var $axisStart_count$$28$$, $axisEnd$$;
  this.$m_fetching$[$axis$$45_headerRange$$1$$] || (this.$m_fetching$[$axis$$45_headerRange$$1$$] = {start:$start$$41$$}, $fetchSize$$2$$ == $JSCompiler_alias_VOID$$ && ($fetchSize$$2$$ = $JSCompiler_StaticMethods_getFetchSize$$(this, $axis$$45_headerRange$$1$$), $JSCompiler_StaticMethods__isCountUnknown$$(this, $axis$$45_headerRange$$1$$) || ($axisStart_count$$28$$ = "row" == $axis$$45_headerRange$$1$$ ? this.$m_startRow$ : this.$m_startCol$, $axisEnd$$ = "row" == $axis$$45_headerRange$$1$$ ? this.$m_endRow$ : 
  this.$m_endCol$, $start$$41$$ < $axisStart_count$$28$$ ? $fetchSize$$2$$ = Math.min($fetchSize$$2$$, $axisStart_count$$28$$) : ($axisStart_count$$28$$ = this.$m_dataSource$.getCount($axis$$45_headerRange$$1$$), 0 <= $axisStart_count$$28$$ && ($fetchSize$$2$$ = Math.min($fetchSize$$2$$, Math.max(0, $axisStart_count$$28$$ - $axisEnd$$)))))), $axis$$45_headerRange$$1$$ = {axis:$axis$$45_headerRange$$1$$, start:$start$$41$$, count:$fetchSize$$2$$, header:$header$$11$$}, $callbacks$$6_successCallback$$26$$ = 
  $callbacks$$6_successCallback$$26$$ != $JSCompiler_alias_NULL$$ && $callbacks$$6_successCallback$$26$$.success != $JSCompiler_alias_NULL$$ ? $callbacks$$6_successCallback$$26$$.success : this.$handleHeadersFetchSuccess$, $JSCompiler_StaticMethods_showStatusText$$(this), this.$m_dataSource$.fetchHeaders($axis$$45_headerRange$$1$$, {success:$callbacks$$6_successCallback$$26$$, error:this.$handleHeadersFetchError$}, {success:this, error:this}))
};
$JSCompiler_prototypeAlias$$.$handleHeadersFetchSuccess$ = function $$JSCompiler_prototypeAlias$$$$handleHeadersFetchSuccess$$($results$$3$$, $headerRange$$3$$) {
  var $axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$, $avgWidth$$inline_7471_root$$33$$, $prev$$inline_7502_start$$42$$, $count$$29_totalCount$$inline_7481$$;
  if($headerRange$$3$$.start == this.$m_fetching$[$headerRange$$3$$.axis].start) {
    $axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$ = $headerRange$$3$$.axis;
    this.$m_fetching$[$axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$] = $JSCompiler_alias_FALSE$$;
    $avgWidth$$inline_7471_root$$33$$ = $headerRange$$3$$.header;
    $prev$$inline_7502_start$$42$$ = $headerRange$$3$$.start;
    $count$$29_totalCount$$inline_7481$$ = this.$m_dataSource$.getCount($axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$);
    if("column" === $axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$) {
      a: {
        var $renderer$$inline_7455_totalRowHeight$$inline_7489$$, $resizer$$inline_7485_totalColWidth$$inline_7456$$, $currentLeft$$inline_7457_renderer$$inline_7486$$, $headerCount$$inline_7458_scroller$$inline_7484$$, $firstHeader$$inline_7459_isAppend$$inline_7487$$, $headerClass$$inline_7460_top$$inline_7488$$, $dir$$inline_7461_fragment$$inline_7490$$, $i$$inline_7462_i$$inline_7492$$, $headerData$$inline_7493_index$$inline_7463_width$$inline_7470$$, $capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$, 
        $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$, $col$$inline_7500_inlineStyle$$inline_7467_sortDescendIcon$$inline_9925$$, $styleClass$$inline_7468_styleClass$$inline_7501$$, $col$$inline_7469_row$$inline_7496$$, $resizableAttribute$$inline_7503_sortableAttribute$$inline_7474$$, $content$$inline_7504_index$$inline_7491_resizableAttribute$$inline_7475$$;
        $axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$ = $JSCompiler_StaticMethods_getDefaultRowHeight$$(this);
        $headerCount$$inline_7458_scroller$$inline_7484$$ = $results$$3$$.getCount();
        if($avgWidth$$inline_7471_root$$33$$.hasChildNodes()) {
          if(0 == $headerCount$$inline_7458_scroller$$inline_7484$$ && $JSCompiler_StaticMethods__isCountUnknown$$(this, "column")) {
            this.$m_stopColumnHeaderFetch$ = $JSCompiler_alias_TRUE$$;
            break a
          }
          $axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$ = $avgWidth$$inline_7471_root$$33$$.firstChild
        }else {
          0 == $headerCount$$inline_7458_scroller$$inline_7484$$ ? $JSCompiler_StaticMethods_setElementHeight$$($avgWidth$$inline_7471_root$$33$$, 0) : $JSCompiler_StaticMethods_setElementHeight$$($avgWidth$$inline_7471_root$$33$$, $axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$), $axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$ = document.createElement("div"), $axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$.className = 
          this.$getResources$().getMappedStyle("row") + " " + (this.$m_utils$.$isTouchDevice$() ? this.$getResources$().getMappedStyle("scroller-mobile") : this.$getResources$().getMappedStyle("scroller"))
        }
        $renderer$$inline_7455_totalRowHeight$$inline_7489$$ = $JSCompiler_StaticMethods_getRenderer$$(this.$m_options$, "column");
        $resizer$$inline_7485_totalColWidth$$inline_7456$$ = 0;
        $currentLeft$$inline_7457_renderer$$inline_7486$$ = $prev$$inline_7502_start$$42$$ < this.$m_startColHeader$ ? this.$m_startColHeaderPixel$ : this.$m_endColHeaderPixel$;
        $firstHeader$$inline_7459_isAppend$$inline_7487$$ = $axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$.firstChild;
        $headerClass$$inline_7460_top$$inline_7488$$ = this.$getResources$().getMappedStyle("headercell") + " " + this.$getResources$().getMappedStyle("colheadercell");
        $dir$$inline_7461_fragment$$inline_7490$$ = this.$getResources$().isRTLMode() ? "right" : "left";
        $resizableAttribute$$inline_7503_sortableAttribute$$inline_7474$$ = this.$getResources$().getMappedAttribute("sortable");
        $content$$inline_7504_index$$inline_7491_resizableAttribute$$inline_7475$$ = this.$getResources$().getMappedAttribute("resizable");
        for($i$$inline_7462_i$$inline_7492$$ = 0;$i$$inline_7462_i$$inline_7492$$ < $headerCount$$inline_7458_scroller$$inline_7484$$;$i$$inline_7462_i$$inline_7492$$ += 1) {
          $headerData$$inline_7493_index$$inline_7463_width$$inline_7470$$ = $prev$$inline_7502_start$$42$$ < this.$m_startColHeader$ ? $prev$$inline_7502_start$$42$$ + $headerCount$$inline_7458_scroller$$inline_7484$$ - 1 - $i$$inline_7462_i$$inline_7492$$ : $prev$$inline_7502_start$$42$$ + $i$$inline_7462_i$$inline_7492$$;
          $col$$inline_7469_row$$inline_7496$$ = document.createElement("div");
          $col$$inline_7469_row$$inline_7496$$.id = $JSCompiler_StaticMethods_createSubId$$(this, "c" + $headerData$$inline_7493_index$$inline_7463_width$$inline_7470$$);
          $capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$ = $results$$3$$.getData($headerData$$inline_7493_index$$inline_7463_width$$inline_7470$$);
          $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$ = $results$$3$$.getMetadata($headerData$$inline_7493_index$$inline_7463_width$$inline_7470$$);
          $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$ = $JSCompiler_StaticMethods_createHeaderContext$$(this, "column", $headerData$$inline_7493_index$$inline_7463_width$$inline_7470$$, $capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$, 
          $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$, $col$$inline_7469_row$$inline_7496$$);
          $col$$inline_7500_inlineStyle$$inline_7467_sortDescendIcon$$inline_9925$$ = this.$m_options$.$getInlineStyle$("column", $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$);
          $styleClass$$inline_7468_styleClass$$inline_7501$$ = this.$m_options$.$getStyleClass$("column", $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$);
          $headerData$$inline_7493_index$$inline_7463_width$$inline_7470$$ === $count$$29_totalCount$$inline_7481$$ - 1 && ("left" === $dir$$inline_7461_fragment$$inline_7490$$ ? $col$$inline_7469_row$$inline_7496$$.style.borderRightStyle = "none" : $col$$inline_7469_row$$inline_7496$$.style.borderLeftStyle = "none");
          $col$$inline_7500_inlineStyle$$inline_7467_sortDescendIcon$$inline_9925$$ != $JSCompiler_alias_NULL$$ && ($col$$inline_7469_row$$inline_7496$$.style.cssText = $col$$inline_7500_inlineStyle$$inline_7467_sortDescendIcon$$inline_9925$$);
          $col$$inline_7469_row$$inline_7496$$.className = $styleClass$$inline_7468_styleClass$$inline_7501$$ != $JSCompiler_alias_NULL$$ ? $headerClass$$inline_7460_top$$inline_7488$$ + " " + $styleClass$$inline_7468_styleClass$$inline_7501$$ : $headerClass$$inline_7460_top$$inline_7488$$;
          this.$m_colHeaderHeight$ == $JSCompiler_alias_NULL$$ && "" != $col$$inline_7469_row$$inline_7496$$.style.height && (this.$m_colHeaderHeight$ = $JSCompiler_StaticMethods_getElementHeight$$($col$$inline_7469_row$$inline_7496$$), $JSCompiler_StaticMethods_setElementHeight$$($avgWidth$$inline_7471_root$$33$$, this.$m_colHeaderHeight$));
          $col$$inline_7469_row$$inline_7496$$.style.height = "100%";
          $prev$$inline_7502_start$$42$$ < this.$m_startColHeader$ ? ($headerData$$inline_7493_index$$inline_7463_width$$inline_7470$$ = $JSCompiler_StaticMethods_getColumnWidth$$(this, $col$$inline_7469_row$$inline_7496$$, $prev$$inline_7502_start$$42$$ + $headerCount$$inline_7458_scroller$$inline_7484$$ - 1 - $i$$inline_7462_i$$inline_7492$$, $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$.key), 
          this.$m_cachedColumnWidthStartIndex$ -= 1) : $headerData$$inline_7493_index$$inline_7463_width$$inline_7470$$ = $JSCompiler_StaticMethods_getColumnWidth$$(this, $col$$inline_7469_row$$inline_7496$$, $prev$$inline_7502_start$$42$$ + $i$$inline_7462_i$$inline_7492$$, $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$.key);
          $JSCompiler_StaticMethods_setElementWidth$$($col$$inline_7469_row$$inline_7496$$, $headerData$$inline_7493_index$$inline_7463_width$$inline_7470$$);
          $prev$$inline_7502_start$$42$$ < this.$m_startColHeader$ ? $JSCompiler_StaticMethods_setElementDir$$($col$$inline_7469_row$$inline_7496$$, $currentLeft$$inline_7457_renderer$$inline_7486$$ - $headerData$$inline_7493_index$$inline_7463_width$$inline_7470$$, $dir$$inline_7461_fragment$$inline_7490$$) : $JSCompiler_StaticMethods_setElementDir$$($col$$inline_7469_row$$inline_7496$$, $currentLeft$$inline_7457_renderer$$inline_7486$$, $dir$$inline_7461_fragment$$inline_7490$$);
          $JSCompiler_StaticMethods__isHeaderResizeEnabled$$(this, "column", $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$) && $col$$inline_7469_row$$inline_7496$$.setAttribute($content$$inline_7504_index$$inline_7491_resizableAttribute$$inline_7475$$, "true");
          $renderer$$inline_7455_totalRowHeight$$inline_7489$$ != $JSCompiler_alias_NULL$$ ? ($capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$ = $renderer$$inline_7455_totalRowHeight$$inline_7489$$.call(this, $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$), 
          $capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$ != $JSCompiler_alias_NULL$$ && ($capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$.parentNode === $JSCompiler_alias_NULL$$ ? $col$$inline_7469_row$$inline_7496$$.appendChild($capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$) : 
          $capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$.parentNode == $JSCompiler_alias_NULL$$ && $capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$.toString && $col$$inline_7469_row$$inline_7496$$.appendChild(document.createTextNode($capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$.toString())))) : 
          $col$$inline_7469_row$$inline_7496$$.appendChild(document.createTextNode($capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$.toString()));
          $capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$ = $JSCompiler_alias_VOID$$;
          $capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$ = this.$m_dataSource$.getCapability("sort");
          $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$ = this.$m_options$.$getProperty$("sortable", "column", $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$);
          if($headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$ != $JSCompiler_alias_NULL$$ && $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$ && ("full" === $capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$ || 
          "column" === $capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$)) {
            $col$$inline_7500_inlineStyle$$inline_7467_sortDescendIcon$$inline_9925$$ = $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$ = $capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$ = $JSCompiler_alias_VOID$$, $capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$ = 
            document.createElement("div"), $capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$.className = this.$getResources$().getMappedStyle("sortindicators"), $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$ = document.createElement("a"), 
            $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$.className = this.$getResources$().getMappedStyle("sortascending"), $col$$inline_7500_inlineStyle$$inline_7467_sortDescendIcon$$inline_9925$$ = document.createElement("a"), $col$$inline_7500_inlineStyle$$inline_7467_sortDescendIcon$$inline_9925$$.className = this.$getResources$().getMappedStyle("sortdescending"), 
            $capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$.appendChild($headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$), $capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$.appendChild($col$$inline_7500_inlineStyle$$inline_7467_sortDescendIcon$$inline_9925$$), 
            $col$$inline_7469_row$$inline_7496$$.appendChild($capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$), $col$$inline_7469_row$$inline_7496$$.setAttribute($resizableAttribute$$inline_7503_sortableAttribute$$inline_7474$$, "true")
          }
          $currentLeft$$inline_7457_renderer$$inline_7486$$ = $prev$$inline_7502_start$$42$$ < this.$m_startColHeader$ ? $currentLeft$$inline_7457_renderer$$inline_7486$$ - $headerData$$inline_7493_index$$inline_7463_width$$inline_7470$$ : $currentLeft$$inline_7457_renderer$$inline_7486$$ + $headerData$$inline_7493_index$$inline_7463_width$$inline_7470$$;
          $resizer$$inline_7485_totalColWidth$$inline_7456$$ += $headerData$$inline_7493_index$$inline_7463_width$$inline_7470$$;
          $prev$$inline_7502_start$$42$$ < this.$m_startColHeader$ ? ($axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$.insertBefore($col$$inline_7469_row$$inline_7496$$, $firstHeader$$inline_7459_isAppend$$inline_7487$$), $firstHeader$$inline_7459_isAppend$$inline_7487$$ = $col$$inline_7469_row$$inline_7496$$) : $axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$.appendChild($col$$inline_7469_row$$inline_7496$$)
        }
        $prev$$inline_7502_start$$42$$ < this.$m_startColHeader$ ? (this.$m_startColHeader$ -= $headerCount$$inline_7458_scroller$$inline_7484$$, this.$m_startColHeaderPixel$ -= $resizer$$inline_7485_totalColWidth$$inline_7456$$) : (this.$m_endColHeader$ += $headerCount$$inline_7458_scroller$$inline_7484$$, this.$m_endColHeaderPixel$ += $resizer$$inline_7485_totalColWidth$$inline_7456$$);
        $avgWidth$$inline_7471_root$$33$$.hasChildNodes() || $avgWidth$$inline_7471_root$$33$$.appendChild($axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$);
        if(0 < $headerCount$$inline_7458_scroller$$inline_7484$$ && ($avgWidth$$inline_7471_root$$33$$ = $resizer$$inline_7485_totalColWidth$$inline_7456$$ / $headerCount$$inline_7458_scroller$$inline_7484$$, 0 == this.$m_avgColHeaderWidth$ || $avgWidth$$inline_7471_root$$33$$ != this.$m_avgColHeaderWidth$)) {
          this.$m_avgColHeaderWidth$ = $avgWidth$$inline_7471_root$$33$$, $JSCompiler_StaticMethods_setElementWidth$$($axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$, $count$$29_totalCount$$inline_7481$$ * $avgWidth$$inline_7471_root$$33$$)
        }
        !$JSCompiler_StaticMethods__isCountUnknown$$(this, "column") && ($JSCompiler_StaticMethods__isHighWatermarkScrolling$$(this) && this.$m_endColHeader$ >= $count$$29_totalCount$$inline_7481$$) && (this.$m_stopColumnHeaderFetch$ = $JSCompiler_alias_TRUE$$)
      }
    }else {
      if("row" === $axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$) {
        a: {
          var $headerClass$$inline_7497$$;
          $JSCompiler_StaticMethods_getDefaultRowHeight$$(this);
          $axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$ = $results$$3$$.getCount();
          if($avgWidth$$inline_7471_root$$33$$.hasChildNodes()) {
            if(0 == $axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$ && $JSCompiler_StaticMethods__isCountUnknown$$(this, "row")) {
              this.$m_stopRowHeaderFetch$ = $JSCompiler_alias_TRUE$$;
              break a
            }
            $headerCount$$inline_7458_scroller$$inline_7484$$ = $avgWidth$$inline_7471_root$$33$$.firstChild;
            $resizer$$inline_7485_totalColWidth$$inline_7456$$ = $headerCount$$inline_7458_scroller$$inline_7484$$.firstChild
          }else {
            $headerCount$$inline_7458_scroller$$inline_7484$$ = document.createElement("div"), $headerCount$$inline_7458_scroller$$inline_7484$$.className = this.$m_utils$.$isTouchDevice$() ? this.$getResources$().getMappedStyle("scroller-mobile") : this.$getResources$().getMappedStyle("scroller"), 0 == $axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$ ? ($JSCompiler_StaticMethods_setElementWidth$$($avgWidth$$inline_7471_root$$33$$, 0), $JSCompiler_StaticMethods_setElementHeight$$($headerCount$$inline_7458_scroller$$inline_7484$$, 
            0)) : $JSCompiler_StaticMethods_setElementWidth$$($avgWidth$$inline_7471_root$$33$$, 50), $resizer$$inline_7485_totalColWidth$$inline_7456$$ = document.createElement("div"), $resizer$$inline_7485_totalColWidth$$inline_7456$$.style.display = "none", $JSCompiler_StaticMethods_setElementWidth$$($resizer$$inline_7485_totalColWidth$$inline_7456$$, 1), $JSCompiler_StaticMethods_setElementHeight$$($resizer$$inline_7485_totalColWidth$$inline_7456$$, 0), $headerCount$$inline_7458_scroller$$inline_7484$$.appendChild($resizer$$inline_7485_totalColWidth$$inline_7456$$)
          }
          $currentLeft$$inline_7457_renderer$$inline_7486$$ = $JSCompiler_StaticMethods_getRenderer$$(this.$m_options$, "row");
          $headerClass$$inline_7460_top$$inline_7488$$ = ($firstHeader$$inline_7459_isAppend$$inline_7487$$ = $prev$$inline_7502_start$$42$$ >= this.$m_startRowHeader$ ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$) ? this.$m_endRowHeaderPixel$ : this.$m_startRowHeaderPixel$;
          -1 == $count$$29_totalCount$$inline_7481$$ && ($count$$29_totalCount$$inline_7481$$ = this.$m_endRowHeader$ + $axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$);
          $resizableAttribute$$inline_7503_sortableAttribute$$inline_7474$$ = this.$getResources$().getMappedAttribute("resizable");
          $renderer$$inline_7455_totalRowHeight$$inline_7489$$ = 0;
          $dir$$inline_7461_fragment$$inline_7490$$ = document.createDocumentFragment();
          for($i$$inline_7462_i$$inline_7492$$ = 0;$i$$inline_7462_i$$inline_7492$$ < $axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$;$i$$inline_7462_i$$inline_7492$$ += 1) {
            $content$$inline_7504_index$$inline_7491_resizableAttribute$$inline_7475$$ = $firstHeader$$inline_7459_isAppend$$inline_7487$$ ? $prev$$inline_7502_start$$42$$ + $i$$inline_7462_i$$inline_7492$$ : $prev$$inline_7502_start$$42$$ + ($axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$ - 1 - $i$$inline_7462_i$$inline_7492$$), $col$$inline_7469_row$$inline_7496$$ = document.createElement("div"), $col$$inline_7469_row$$inline_7496$$.id = $JSCompiler_StaticMethods_createSubId$$(this, 
            "r" + $content$$inline_7504_index$$inline_7491_resizableAttribute$$inline_7475$$), $headerData$$inline_7493_index$$inline_7463_width$$inline_7470$$ = $results$$3$$.getData($content$$inline_7504_index$$inline_7491_resizableAttribute$$inline_7475$$), $capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$ = $results$$3$$.getMetadata($content$$inline_7504_index$$inline_7491_resizableAttribute$$inline_7475$$), 
            $capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$ = $JSCompiler_StaticMethods_createHeaderContext$$(this, "row", $content$$inline_7504_index$$inline_7491_resizableAttribute$$inline_7475$$, $headerData$$inline_7493_index$$inline_7463_width$$inline_7470$$, $capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$, 
            $col$$inline_7469_row$$inline_7496$$), $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$ = this.$m_options$.$getInlineStyle$("row", $capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$), $styleClass$$inline_7468_styleClass$$inline_7501$$ = 
            this.$m_options$.$getStyleClass$("row", $capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$), $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$ != $JSCompiler_alias_NULL$$ && ($col$$inline_7469_row$$inline_7496$$.style.cssText = $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$), 
            this.$m_rowHeaderWidth$ == $JSCompiler_alias_NULL$$ && "" != $col$$inline_7469_row$$inline_7496$$.style.width && (this.$m_rowHeaderWidth$ = $JSCompiler_StaticMethods_getElementWidth$$($col$$inline_7469_row$$inline_7496$$), $JSCompiler_StaticMethods_setElementWidth$$($avgWidth$$inline_7471_root$$33$$, this.$m_rowHeaderWidth$)), $col$$inline_7469_row$$inline_7496$$.className = this.$getResources$().getMappedStyle("row"), $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$ = 
            $JSCompiler_StaticMethods_getRowHeight$$(this, $col$$inline_7469_row$$inline_7496$$, $prev$$inline_7502_start$$42$$ + $i$$inline_7462_i$$inline_7492$$, $capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$.key), $JSCompiler_StaticMethods_setElementHeight$$($col$$inline_7469_row$$inline_7496$$, $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$), 
            $firstHeader$$inline_7459_isAppend$$inline_7487$$ ? ($col$$inline_7469_row$$inline_7496$$.style.top = $headerClass$$inline_7460_top$$inline_7488$$ + "px", $headerClass$$inline_7460_top$$inline_7488$$ += $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$) : ($headerClass$$inline_7460_top$$inline_7488$$ -= $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$, 
            $col$$inline_7469_row$$inline_7496$$.style.top = $headerClass$$inline_7460_top$$inline_7488$$ + "px"), $col$$inline_7500_inlineStyle$$inline_7467_sortDescendIcon$$inline_9925$$ = document.createElement("div"), $headerClass$$inline_7497$$ = this.$getResources$().getMappedStyle("headercell") + " " + this.$getResources$().getMappedStyle("rowheadercell"), $col$$inline_7500_inlineStyle$$inline_7467_sortDescendIcon$$inline_9925$$.className = $styleClass$$inline_7468_styleClass$$inline_7501$$ != 
            $JSCompiler_alias_NULL$$ ? $headerClass$$inline_7497$$ + " " + $styleClass$$inline_7468_styleClass$$inline_7501$$ : $headerClass$$inline_7497$$, $content$$inline_7504_index$$inline_7491_resizableAttribute$$inline_7475$$ === $count$$29_totalCount$$inline_7481$$ - 1 && ($col$$inline_7500_inlineStyle$$inline_7467_sortDescendIcon$$inline_9925$$.style.borderBottomStyle = "none"), $JSCompiler_StaticMethods__isHeaderResizeEnabled$$(this, "row", $capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$) && 
            $col$$inline_7500_inlineStyle$$inline_7467_sortDescendIcon$$inline_9925$$.setAttribute($resizableAttribute$$inline_7503_sortableAttribute$$inline_7474$$, "true"), $currentLeft$$inline_7457_renderer$$inline_7486$$ != $JSCompiler_alias_NULL$$ ? ($content$$inline_7504_index$$inline_7491_resizableAttribute$$inline_7475$$ = $currentLeft$$inline_7457_renderer$$inline_7486$$.call(this, $capability$$inline_9920_content$$inline_7473_headerContext$$inline_7495_headerData$$inline_7464_headerMetadata$$inline_7494_sortIndicators$$inline_7472_sortIndicators$$inline_9923$$), 
            $content$$inline_7504_index$$inline_7491_resizableAttribute$$inline_7475$$ != $JSCompiler_alias_NULL$$ && ($content$$inline_7504_index$$inline_7491_resizableAttribute$$inline_7475$$.parentNode === $JSCompiler_alias_NULL$$ ? $col$$inline_7500_inlineStyle$$inline_7467_sortDescendIcon$$inline_9925$$.appendChild($content$$inline_7504_index$$inline_7491_resizableAttribute$$inline_7475$$) : $content$$inline_7504_index$$inline_7491_resizableAttribute$$inline_7475$$.parentNode == $JSCompiler_alias_NULL$$ && 
            $content$$inline_7504_index$$inline_7491_resizableAttribute$$inline_7475$$.toString && $col$$inline_7500_inlineStyle$$inline_7467_sortDescendIcon$$inline_9925$$.appendChild(document.createTextNode($content$$inline_7504_index$$inline_7491_resizableAttribute$$inline_7475$$.toString())))) : $col$$inline_7500_inlineStyle$$inline_7467_sortDescendIcon$$inline_9925$$.appendChild(document.createTextNode($headerData$$inline_7493_index$$inline_7463_width$$inline_7470$$.toString())), $col$$inline_7469_row$$inline_7496$$.appendChild($col$$inline_7500_inlineStyle$$inline_7467_sortDescendIcon$$inline_9925$$), 
            $firstHeader$$inline_7459_isAppend$$inline_7487$$ ? $dir$$inline_7461_fragment$$inline_7490$$.appendChild($col$$inline_7469_row$$inline_7496$$) : $dir$$inline_7461_fragment$$inline_7490$$.insertBefore($col$$inline_7469_row$$inline_7496$$, $dir$$inline_7461_fragment$$inline_7490$$.firstChild), $renderer$$inline_7455_totalRowHeight$$inline_7489$$ += $headerContext$$inline_7466_headerContext$$inline_9919_headerMetadata$$inline_7465_height$$inline_7499_inlineStyle$$inline_7498_sortAscendIcon$$inline_9924_value$$inline_10382$$
          }
          $firstHeader$$inline_7459_isAppend$$inline_7487$$ ? ($headerCount$$inline_7458_scroller$$inline_7484$$.appendChild($dir$$inline_7461_fragment$$inline_7490$$), 0 != this.$m_endRowHeader$ && 0 != $axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$ && ($prev$$inline_7502_start$$42$$ = $headerCount$$inline_7458_scroller$$inline_7484$$.childNodes[this.$m_endRowHeader$], $prev$$inline_7502_start$$42$$ != $JSCompiler_alias_NULL$$ && ($prev$$inline_7502_start$$42$$.firstChild.style.borderBottomStyle = 
          "")), this.$m_endRowHeader$ += $axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$, this.$m_endRowHeaderPixel$ += $renderer$$inline_7455_totalRowHeight$$inline_7489$$) : ($JSCompiler_StaticMethods_setElementHeight$$($resizer$$inline_7485_totalColWidth$$inline_7456$$, Math.max(0, $JSCompiler_StaticMethods_getElementHeight$$($resizer$$inline_7485_totalColWidth$$inline_7456$$) - $renderer$$inline_7455_totalRowHeight$$inline_7489$$)), $headerCount$$inline_7458_scroller$$inline_7484$$.insertBefore($dir$$inline_7461_fragment$$inline_7490$$, 
          $resizer$$inline_7485_totalColWidth$$inline_7456$$.nextSibling), this.$m_startRowHeader$ -= $axis$$47_defaultHeight$$inline_7453_headerCount$$inline_7483_scroller$$inline_7454$$, this.$m_startRowHeaderPixel$ = Math.max(0, this.$m_startRowHeaderPixel$ - $renderer$$inline_7455_totalRowHeight$$inline_7489$$));
          $avgWidth$$inline_7471_root$$33$$.appendChild($headerCount$$inline_7458_scroller$$inline_7484$$);
          !$JSCompiler_StaticMethods__isCountUnknown$$(this, "row") && ($JSCompiler_StaticMethods__isHighWatermarkScrolling$$(this) && this.$m_endRowHeader$ >= $count$$29_totalCount$$inline_7481$$) && (this.$m_stopRowHeaderFetch$ = $JSCompiler_alias_TRUE$$)
        }
      }
    }
    $JSCompiler_StaticMethods_isFetchComplete$$(this) ? ($JSCompiler_StaticMethods_hideStatusText$$(this), this.$m_initialized$ || ($JSCompiler_StaticMethods_resizeGrid$$(this), $JSCompiler_StaticMethods_setInitialScrollPosition$$(this))) : $JSCompiler_StaticMethods_isHeaderFetchComplete$$(this) && (this.$m_initialized$ || $JSCompiler_StaticMethods_resizeHeaders$$(this));
    this.$m_initialized$ && $JSCompiler_StaticMethods__syncScrollerAndHeaders$$(this)
  }
};
$JSCompiler_prototypeAlias$$.$handleHeadersFetchError$ = function $$JSCompiler_prototypeAlias$$$$handleHeadersFetchError$$($error$$5$$, $headerRange$$4$$) {
  this.$m_fetching$[$headerRange$$4$$.axis] = $JSCompiler_alias_FALSE$$
};
function $JSCompiler_StaticMethods_createHeaderContext$$($JSCompiler_StaticMethods_createHeaderContext$self$$, $axis$$49_key$$94$$, $index$$143$$, $data$$89$$, $metadata$$, $elem$$47$$) {
  var $headerContext$$ = {};
  $headerContext$$.axis = $axis$$49_key$$94$$;
  $headerContext$$.index = $index$$143$$;
  $headerContext$$.data = $data$$89$$;
  $headerContext$$.datagrid = $JSCompiler_StaticMethods_createHeaderContext$self$$;
  $headerContext$$.parentElement = $elem$$47$$;
  $axis$$49_key$$94$$ = $metadata$$.key;
  $axis$$49_key$$94$$ != $JSCompiler_alias_NULL$$ && ($headerContext$$.key = $axis$$49_key$$94$$, $elem$$47$$.setAttribute($JSCompiler_StaticMethods_createHeaderContext$self$$.$getResources$().getMappedAttribute("key"), $axis$$49_key$$94$$));
  $JSCompiler_StaticMethods_createHeaderContext$self$$.$m_createContextCallback$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_createHeaderContext$self$$.$m_createContextCallback$.call($JSCompiler_StaticMethods_createHeaderContext$self$$, $headerContext$$);
  return $headerContext$$
}
$JSCompiler_prototypeAlias$$.fetchCells = function $$JSCompiler_prototypeAlias$$$fetchCells$($columnRange$$1_databody$$7$$, $scroller$$10$$, $rowRange$$1_rowStart$$1$$, $colStart$$, $rowCount$$13$$, $colCount$$2$$, $callbacks$$7_successCallback$$27$$) {
  var $count$$30$$;
  this.$m_fetching$.cells || (this.$m_fetching$.cells = {row:$rowRange$$1_rowStart$$1$$, column:$colStart$$}, $rowCount$$13$$ == $JSCompiler_alias_NULL$$ && ($rowCount$$13$$ = $JSCompiler_StaticMethods_getFetchSize$$(this, "row"), $JSCompiler_StaticMethods__isCountUnknown$$(this, "row") || ($rowRange$$1_rowStart$$1$$ < this.$m_startRow$ ? $rowCount$$13$$ = Math.min($rowCount$$13$$, this.$m_startRow$) : ($count$$30$$ = this.$m_dataSource$.getCount("row"), 0 <= $count$$30$$ && ($rowCount$$13$$ = Math.min($rowCount$$13$$, 
  Math.max(0, $count$$30$$ - this.$m_endRow$)))))), $colCount$$2$$ == $JSCompiler_alias_NULL$$ && ($colCount$$2$$ = $JSCompiler_StaticMethods_getFetchSize$$(this, "column"), $JSCompiler_StaticMethods__isCountUnknown$$(this, "column") || ($colStart$$ < this.$m_startCol$ ? $colCount$$2$$ = Math.min($colCount$$2$$, this.$m_startCol$) : ($count$$30$$ = this.$m_dataSource$.getCount("column"), 0 <= $count$$30$$ && ($colCount$$2$$ = Math.min($colCount$$2$$, Math.max(0, $count$$30$$ - this.$m_endCol$)))))), 
  $rowRange$$1_rowStart$$1$$ = {axis:"row", start:$rowRange$$1_rowStart$$1$$, count:$rowCount$$13$$}, $columnRange$$1_databody$$7$$ = {axis:"column", start:$colStart$$, count:$colCount$$2$$, databody:$columnRange$$1_databody$$7$$, scroller:$scroller$$10$$}, $callbacks$$7_successCallback$$27$$ = $callbacks$$7_successCallback$$27$$ != $JSCompiler_alias_NULL$$ && $callbacks$$7_successCallback$$27$$.success != $JSCompiler_alias_NULL$$ ? $callbacks$$7_successCallback$$27$$.success : this.$handleCellsFetchSuccess$, 
  $JSCompiler_StaticMethods_showStatusText$$(this), this.$m_dataSource$.fetchCells([$rowRange$$1_rowStart$$1$$, $columnRange$$1_databody$$7$$], {success:$callbacks$$7_successCallback$$27$$, error:this.$handleHeadersFetchError$}, {success:this, error:this}))
};
$JSCompiler_prototypeAlias$$.$isDraggable$ = $JSCompiler_returnArg$$($JSCompiler_alias_FALSE$$);
$JSCompiler_prototypeAlias$$.$handleCellsFetchSuccess$ = function $$JSCompiler_prototypeAlias$$$$handleCellsFetchSuccess$$($cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$, $cellRange$$4_databody$$8$$, $prev$$2_rowInsert_rows$$3$$) {
  var $JSCompiler_inline_result$$44_scrollerHeight$$inline_7547_totalRowCount$$, $scrollerWidth$$inline_7548_totalColumnCount$$, $columnStart$$2_requestRowStart$$inline_7511_rowRange$$4_rowStart$$inline_7517_rowStartPixel$$inline_7521$$, $JSCompiler_inline_result$$178_JSCompiler_temp$$177_responseRowStart$$inline_7508_rowCount$$inline_7529_rowStart$$3$$, $columnCount$$inline_7530_responseColumnStart$$inline_7509_rowCount$$15$$, $fragment$$1_rowRangeNeedsUpdate_verticalGridlines$$inline_7541_viewportLeft$$inline_7527$$, 
  $columnEndPixel$$inline_7524_columnRange$$4_columnStart$$inline_7519_inner$$5$$, $columnCount$$13_requestCellRanges$$inline_7510_requestColumnStart$$inline_7512_rowEnd$$inline_7518_rowEndPixel$$inline_7522$$, $columnRangeNeedsUpdate_columnStartPixel$$inline_7523$$, $addResult_avgHeight_scrollerContentHeight$$inline_7550_top$$8$$, $columnBandingInterval$$inline_7539_referenceRow$$, $databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$, $horizontalGridlines$$inline_7540_resizer$$1_viewportBottom$$inline_7526$$, 
  $avgWidth$$inline_7543_i$$779_isAppend$$1_row$$inline_7542$$, $avgWidth$$1_renderer$$inline_7538$$;
  $JSCompiler_inline_result$$44_scrollerHeight$$inline_7547_totalRowCount$$ = this.$m_dataSource$.getCount("row");
  $scrollerWidth$$inline_7548_totalColumnCount$$ = this.$m_dataSource$.getCount("column");
  if($prev$$2_rowInsert_rows$$3$$ === $JSCompiler_alias_VOID$$) {
    $prev$$2_rowInsert_rows$$3$$ = $JSCompiler_alias_FALSE$$;
    $JSCompiler_inline_result$$178_JSCompiler_temp$$177_responseRowStart$$inline_7508_rowCount$$inline_7529_rowStart$$3$$ = $cellRange$$4_databody$$8$$[0].start;
    $columnCount$$inline_7530_responseColumnStart$$inline_7509_rowCount$$15$$ = $cellRange$$4_databody$$8$$[1].start;
    $columnCount$$13_requestCellRanges$$inline_7510_requestColumnStart$$inline_7512_rowEnd$$inline_7518_rowEndPixel$$inline_7522$$ = this.$m_fetching$.cells;
    $columnStart$$2_requestRowStart$$inline_7511_rowRange$$4_rowStart$$inline_7517_rowStartPixel$$inline_7521$$ = $columnCount$$13_requestCellRanges$$inline_7510_requestColumnStart$$inline_7512_rowEnd$$inline_7518_rowEndPixel$$inline_7522$$.row;
    $columnCount$$13_requestCellRanges$$inline_7510_requestColumnStart$$inline_7512_rowEnd$$inline_7518_rowEndPixel$$inline_7522$$ = $columnCount$$13_requestCellRanges$$inline_7510_requestColumnStart$$inline_7512_rowEnd$$inline_7518_rowEndPixel$$inline_7522$$.column;
    if(!($columnStart$$2_requestRowStart$$inline_7511_rowRange$$4_rowStart$$inline_7517_rowStartPixel$$inline_7521$$ == $JSCompiler_inline_result$$178_JSCompiler_temp$$177_responseRowStart$$inline_7508_rowCount$$inline_7529_rowStart$$3$$ && $columnCount$$13_requestCellRanges$$inline_7510_requestColumnStart$$inline_7512_rowEnd$$inline_7518_rowEndPixel$$inline_7522$$ == $columnCount$$inline_7530_responseColumnStart$$inline_7509_rowCount$$15$$)) {
      return
    }
    if($JSCompiler_inline_result$$178_JSCompiler_temp$$177_responseRowStart$$inline_7508_rowCount$$inline_7529_rowStart$$3$$ = this.$m_startRowPixel$ == this.$m_endRowPixel$ && this.$m_startColPixel$ == this.$m_endColPixel$) {
      var $i$$inline_7544_viewportRight$$inline_7528$$;
      isNaN(this.$m_avgRowHeight$) || isNaN(this.$m_avgColWidth$) ? $JSCompiler_inline_result$$178_JSCompiler_temp$$177_responseRowStart$$inline_7508_rowCount$$inline_7529_rowStart$$3$$ = $JSCompiler_alias_TRUE$$ : ($columnStart$$2_requestRowStart$$inline_7511_rowRange$$4_rowStart$$inline_7517_rowStartPixel$$inline_7521$$ = $cellRange$$4_databody$$8$$[0].start, $JSCompiler_inline_result$$178_JSCompiler_temp$$177_responseRowStart$$inline_7508_rowCount$$inline_7529_rowStart$$3$$ = $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$.getCount("row"), 
      $columnCount$$13_requestCellRanges$$inline_7510_requestColumnStart$$inline_7512_rowEnd$$inline_7518_rowEndPixel$$inline_7522$$ = $columnStart$$2_requestRowStart$$inline_7511_rowRange$$4_rowStart$$inline_7517_rowStartPixel$$inline_7521$$ + $JSCompiler_inline_result$$178_JSCompiler_temp$$177_responseRowStart$$inline_7508_rowCount$$inline_7529_rowStart$$3$$, $columnEndPixel$$inline_7524_columnRange$$4_columnStart$$inline_7519_inner$$5$$ = $cellRange$$4_databody$$8$$[1].start, $columnCount$$inline_7530_responseColumnStart$$inline_7509_rowCount$$15$$ = 
      $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$.getCount("column"), $columnStart$$2_requestRowStart$$inline_7511_rowRange$$4_rowStart$$inline_7517_rowStartPixel$$inline_7521$$ *= this.$m_avgRowHeight$, $columnCount$$13_requestCellRanges$$inline_7510_requestColumnStart$$inline_7512_rowEnd$$inline_7518_rowEndPixel$$inline_7522$$ *= this.$m_avgRowHeight$, $columnRangeNeedsUpdate_columnStartPixel$$inline_7523$$ = this.$m_avgColWidth$ * 
      $columnEndPixel$$inline_7524_columnRange$$4_columnStart$$inline_7519_inner$$5$$, $columnEndPixel$$inline_7524_columnRange$$4_columnStart$$inline_7519_inner$$5$$ = this.$m_avgColWidth$ * ($columnEndPixel$$inline_7524_columnRange$$4_columnStart$$inline_7519_inner$$5$$ + $columnCount$$inline_7530_responseColumnStart$$inline_7509_rowCount$$15$$), $databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$ = this.$m_currentScrollTop$, $horizontalGridlines$$inline_7540_resizer$$1_viewportBottom$$inline_7526$$ = 
      this.$m_currentScrollTop$ + $JSCompiler_StaticMethods_getElementHeight$$(this.$m_databody$), $fragment$$1_rowRangeNeedsUpdate_verticalGridlines$$inline_7541_viewportLeft$$inline_7527$$ = this.$m_currentScrollLeft$, $i$$inline_7544_viewportRight$$inline_7528$$ = this.$m_currentScrollLeft$ + $JSCompiler_StaticMethods_getElementWidth$$(this.$m_databody$), !$JSCompiler_StaticMethods__isCountUnknown$$(this, "row") && (this.$m_dataSource$.getCount("row") == $JSCompiler_inline_result$$178_JSCompiler_temp$$177_responseRowStart$$inline_7508_rowCount$$inline_7529_rowStart$$3$$ && 
      $columnCount$$13_requestCellRanges$$inline_7510_requestColumnStart$$inline_7512_rowEnd$$inline_7518_rowEndPixel$$inline_7522$$ < $horizontalGridlines$$inline_7540_resizer$$1_viewportBottom$$inline_7526$$) && ($columnCount$$13_requestCellRanges$$inline_7510_requestColumnStart$$inline_7512_rowEnd$$inline_7518_rowEndPixel$$inline_7522$$ = $horizontalGridlines$$inline_7540_resizer$$1_viewportBottom$$inline_7526$$), !$JSCompiler_StaticMethods__isCountUnknown$$(this, "column") && (this.$m_dataSource$.getCount("column") == 
      $columnCount$$inline_7530_responseColumnStart$$inline_7509_rowCount$$15$$ && $columnEndPixel$$inline_7524_columnRange$$4_columnStart$$inline_7519_inner$$5$$ < $i$$inline_7544_viewportRight$$inline_7528$$) && ($columnEndPixel$$inline_7524_columnRange$$4_columnStart$$inline_7519_inner$$5$$ = $i$$inline_7544_viewportRight$$inline_7528$$), $JSCompiler_inline_result$$178_JSCompiler_temp$$177_responseRowStart$$inline_7508_rowCount$$inline_7529_rowStart$$3$$ = $databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$ >= 
      $columnStart$$2_requestRowStart$$inline_7511_rowRange$$4_rowStart$$inline_7517_rowStartPixel$$inline_7521$$ && $horizontalGridlines$$inline_7540_resizer$$1_viewportBottom$$inline_7526$$ <= $columnCount$$13_requestCellRanges$$inline_7510_requestColumnStart$$inline_7512_rowEnd$$inline_7518_rowEndPixel$$inline_7522$$ && $fragment$$1_rowRangeNeedsUpdate_verticalGridlines$$inline_7541_viewportLeft$$inline_7527$$ >= $columnRangeNeedsUpdate_columnStartPixel$$inline_7523$$ && $i$$inline_7544_viewportRight$$inline_7528$$ <= 
      $columnEndPixel$$inline_7524_columnRange$$4_columnStart$$inline_7519_inner$$5$$);
      $JSCompiler_inline_result$$178_JSCompiler_temp$$177_responseRowStart$$inline_7508_rowCount$$inline_7529_rowStart$$3$$ = !$JSCompiler_inline_result$$178_JSCompiler_temp$$177_responseRowStart$$inline_7508_rowCount$$inline_7529_rowStart$$3$$
    }
    if($JSCompiler_inline_result$$178_JSCompiler_temp$$177_responseRowStart$$inline_7508_rowCount$$inline_7529_rowStart$$3$$) {
      this.$m_fetching$.cells = $JSCompiler_alias_FALSE$$;
      this.$m_captureScrolling$ || $JSCompiler_StaticMethods_handleLongScroll$$(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
      return
    }
  }
  $JSCompiler_StaticMethods_getDefaultRowHeight$$(this);
  $columnStart$$2_requestRowStart$$inline_7511_rowRange$$4_rowStart$$inline_7517_rowStartPixel$$inline_7521$$ = $cellRange$$4_databody$$8$$[0];
  $JSCompiler_inline_result$$178_JSCompiler_temp$$177_responseRowStart$$inline_7508_rowCount$$inline_7529_rowStart$$3$$ = $columnStart$$2_requestRowStart$$inline_7511_rowRange$$4_rowStart$$inline_7517_rowStartPixel$$inline_7521$$.start;
  $columnCount$$inline_7530_responseColumnStart$$inline_7509_rowCount$$15$$ = $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$.getCount("row");
  $fragment$$1_rowRangeNeedsUpdate_verticalGridlines$$inline_7541_viewportLeft$$inline_7527$$ = 0 < $columnCount$$inline_7530_responseColumnStart$$inline_7509_rowCount$$15$$ && ($JSCompiler_inline_result$$178_JSCompiler_temp$$177_responseRowStart$$inline_7508_rowCount$$inline_7529_rowStart$$3$$ >= this.$m_endRow$ || $JSCompiler_inline_result$$178_JSCompiler_temp$$177_responseRowStart$$inline_7508_rowCount$$inline_7529_rowStart$$3$$ + $columnCount$$inline_7530_responseColumnStart$$inline_7509_rowCount$$15$$ <= 
  this.$m_startRow$);
  if(0 == $columnCount$$inline_7530_responseColumnStart$$inline_7509_rowCount$$15$$ && $JSCompiler_StaticMethods__isCountUnknown$$(this, "row") && 0 < $columnStart$$2_requestRowStart$$inline_7511_rowRange$$4_rowStart$$inline_7517_rowStartPixel$$inline_7521$$.count || $fragment$$1_rowRangeNeedsUpdate_verticalGridlines$$inline_7541_viewportLeft$$inline_7527$$ && $JSCompiler_StaticMethods__isHighWatermarkScrolling$$(this) && !$JSCompiler_StaticMethods__isCountUnknown$$(this, "row") && this.$m_endRow$ + 
  $columnCount$$inline_7530_responseColumnStart$$inline_7509_rowCount$$15$$ >= $JSCompiler_inline_result$$44_scrollerHeight$$inline_7547_totalRowCount$$) {
    this.$m_stopRowFetch$ = $JSCompiler_alias_TRUE$$
  }
  $columnEndPixel$$inline_7524_columnRange$$4_columnStart$$inline_7519_inner$$5$$ = $cellRange$$4_databody$$8$$[1];
  $columnStart$$2_requestRowStart$$inline_7511_rowRange$$4_rowStart$$inline_7517_rowStartPixel$$inline_7521$$ = $columnEndPixel$$inline_7524_columnRange$$4_columnStart$$inline_7519_inner$$5$$.start;
  $columnCount$$13_requestCellRanges$$inline_7510_requestColumnStart$$inline_7512_rowEnd$$inline_7518_rowEndPixel$$inline_7522$$ = $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$.getCount("column");
  $columnRangeNeedsUpdate_columnStartPixel$$inline_7523$$ = 0 < $columnCount$$13_requestCellRanges$$inline_7510_requestColumnStart$$inline_7512_rowEnd$$inline_7518_rowEndPixel$$inline_7522$$ && ($columnStart$$2_requestRowStart$$inline_7511_rowRange$$4_rowStart$$inline_7517_rowStartPixel$$inline_7521$$ == this.$m_endCol$ || $columnStart$$2_requestRowStart$$inline_7511_rowRange$$4_rowStart$$inline_7517_rowStartPixel$$inline_7521$$ + $columnCount$$13_requestCellRanges$$inline_7510_requestColumnStart$$inline_7512_rowEnd$$inline_7518_rowEndPixel$$inline_7522$$ == 
  this.$m_startCol$);
  if(0 == $columnCount$$13_requestCellRanges$$inline_7510_requestColumnStart$$inline_7512_rowEnd$$inline_7518_rowEndPixel$$inline_7522$$ && $JSCompiler_StaticMethods__isCountUnknown$$(this, "column") && 0 < $columnEndPixel$$inline_7524_columnRange$$4_columnStart$$inline_7519_inner$$5$$.count || $columnRangeNeedsUpdate_columnStartPixel$$inline_7523$$ && $JSCompiler_StaticMethods__isHighWatermarkScrolling$$(this) && !$JSCompiler_StaticMethods__isCountUnknown$$(this, "column") && this.$m_endCol$ + $columnCount$$13_requestCellRanges$$inline_7510_requestColumnStart$$inline_7512_rowEnd$$inline_7518_rowEndPixel$$inline_7522$$ >= 
  $scrollerWidth$$inline_7548_totalColumnCount$$) {
    this.$m_stopColumnFetch$ = $JSCompiler_alias_TRUE$$
  }
  $cellRange$$4_databody$$8$$ = this.$m_databody$;
  $cellRange$$4_databody$$8$$ == $JSCompiler_alias_NULL$$ && ($cellRange$$4_databody$$8$$ = $columnEndPixel$$inline_7524_columnRange$$4_columnStart$$inline_7519_inner$$5$$.databody);
  $databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$ = this.$m_scroller$;
  $databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$ == $JSCompiler_alias_NULL$$ && ($databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$ = $columnEndPixel$$inline_7524_columnRange$$4_columnStart$$inline_7519_inner$$5$$.scroller);
  $databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$.hasChildNodes() ? $columnEndPixel$$inline_7524_columnRange$$4_columnStart$$inline_7519_inner$$5$$ = $databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$.firstChild : ($columnEndPixel$$inline_7524_columnRange$$4_columnStart$$inline_7519_inner$$5$$ = document.createElement("div"), $databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$.appendChild($columnEndPixel$$inline_7524_columnRange$$4_columnStart$$inline_7519_inner$$5$$));
  $cellRange$$4_databody$$8$$.hasChildNodes() ? ($databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$ = $cellRange$$4_databody$$8$$.firstChild, $horizontalGridlines$$inline_7540_resizer$$1_viewportBottom$$inline_7526$$ = $databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$.firstChild) : ($databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$ = document.createElement("div"), $databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$.className = this.$m_utils$.$isTouchDevice$() ? 
  this.$getResources$().getMappedStyle("scroller-mobile") : this.$getResources$().getMappedStyle("scroller"), $horizontalGridlines$$inline_7540_resizer$$1_viewportBottom$$inline_7526$$ = document.createElement("div"), $horizontalGridlines$$inline_7540_resizer$$1_viewportBottom$$inline_7526$$.style.display = "none", $JSCompiler_StaticMethods_setElementWidth$$($horizontalGridlines$$inline_7540_resizer$$1_viewportBottom$$inline_7526$$, 1), $JSCompiler_StaticMethods_setElementHeight$$($horizontalGridlines$$inline_7540_resizer$$1_viewportBottom$$inline_7526$$, 
  0), $databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$.appendChild($horizontalGridlines$$inline_7540_resizer$$1_viewportBottom$$inline_7526$$));
  if($fragment$$1_rowRangeNeedsUpdate_verticalGridlines$$inline_7541_viewportLeft$$inline_7527$$ || $prev$$2_rowInsert_rows$$3$$) {
    if(($avgWidth$$inline_7543_i$$779_isAppend$$1_row$$inline_7542$$ = !$prev$$2_rowInsert_rows$$3$$ && $JSCompiler_inline_result$$178_JSCompiler_temp$$177_responseRowStart$$inline_7508_rowCount$$inline_7529_rowStart$$3$$ >= this.$m_startRow$ ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$) ? $addResult_avgHeight_scrollerContentHeight$$inline_7550_top$$8$$ = this.$m_endRowPixel$ : $prev$$2_rowInsert_rows$$3$$ ? ($columnBandingInterval$$inline_7539_referenceRow$$ = $databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$.childNodes[$JSCompiler_inline_result$$178_JSCompiler_temp$$177_responseRowStart$$inline_7508_rowCount$$inline_7529_rowStart$$3$$ - 
    this.$m_startRow$ + 1], $addResult_avgHeight_scrollerContentHeight$$inline_7550_top$$8$$ = parseInt($columnBandingInterval$$inline_7539_referenceRow$$.style.top)) : $addResult_avgHeight_scrollerContentHeight$$inline_7550_top$$8$$ = this.$m_startRowPixel$, $fragment$$1_rowRangeNeedsUpdate_verticalGridlines$$inline_7541_viewportLeft$$inline_7527$$ = document.createDocumentFragment(), $addResult_avgHeight_scrollerContentHeight$$inline_7550_top$$8$$ = $JSCompiler_StaticMethods__addRows$$(this, $fragment$$1_rowRangeNeedsUpdate_verticalGridlines$$inline_7541_viewportLeft$$inline_7527$$, 
    $avgWidth$$inline_7543_i$$779_isAppend$$1_row$$inline_7542$$ || $prev$$2_rowInsert_rows$$3$$, $addResult_avgHeight_scrollerContentHeight$$inline_7550_top$$8$$, $JSCompiler_inline_result$$178_JSCompiler_temp$$177_responseRowStart$$inline_7508_rowCount$$inline_7529_rowStart$$3$$, $columnCount$$inline_7530_responseColumnStart$$inline_7509_rowCount$$15$$, $columnStart$$2_requestRowStart$$inline_7511_rowRange$$4_rowStart$$inline_7517_rowStartPixel$$inline_7521$$, $columnRangeNeedsUpdate_columnStartPixel$$inline_7523$$, 
    $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$), $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$ = $addResult_avgHeight_scrollerContentHeight$$inline_7550_top$$8$$.totalRowHeight, $avgWidth$$1_renderer$$inline_7538$$ = $addResult_avgHeight_scrollerContentHeight$$inline_7550_top$$8$$.avgWidth, $addResult_avgHeight_scrollerContentHeight$$inline_7550_top$$8$$ = 
    $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$ / $columnCount$$inline_7530_responseColumnStart$$inline_7509_rowCount$$15$$, $avgWidth$$inline_7543_i$$779_isAppend$$1_row$$inline_7542$$) {
      $databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$.appendChild($fragment$$1_rowRangeNeedsUpdate_verticalGridlines$$inline_7541_viewportLeft$$inline_7527$$);
      if(0 != this.$m_endRow$ && 0 != $columnCount$$inline_7530_responseColumnStart$$inline_7509_rowCount$$15$$ && ($prev$$2_rowInsert_rows$$3$$ = $databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$.childNodes[this.$m_endRow$], $prev$$2_rowInsert_rows$$3$$ != $JSCompiler_alias_NULL$$)) {
        $prev$$2_rowInsert_rows$$3$$ = $prev$$2_rowInsert_rows$$3$$.childNodes;
        for($avgWidth$$inline_7543_i$$779_isAppend$$1_row$$inline_7542$$ = 0;$avgWidth$$inline_7543_i$$779_isAppend$$1_row$$inline_7542$$ < $prev$$2_rowInsert_rows$$3$$.length;$avgWidth$$inline_7543_i$$779_isAppend$$1_row$$inline_7542$$ += 1) {
          $prev$$2_rowInsert_rows$$3$$[$avgWidth$$inline_7543_i$$779_isAppend$$1_row$$inline_7542$$].style.borderBottomStyle = ""
        }
      }
      this.$m_endRow$ += $columnCount$$inline_7530_responseColumnStart$$inline_7509_rowCount$$15$$;
      this.$m_endRowPixel$ += $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$;
      $cellRange$$4_databody$$8$$.hasChildNodes() || ($cellRange$$4_databody$$8$$.appendChild($databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$), this.$isDraggable$() && ($cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$ = document.createElement("div"), bottomHotspot = document.createElement("div"), $cellRange$$4_databody$$8$$.appendChild($cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$), 
      $cellRange$$4_databody$$8$$.appendChild(bottomHotspot)))
    }else {
      $prev$$2_rowInsert_rows$$3$$ ? ($databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$.insertBefore($fragment$$1_rowRangeNeedsUpdate_verticalGridlines$$inline_7541_viewportLeft$$inline_7527$$, $columnBandingInterval$$inline_7539_referenceRow$$), $JSCompiler_inline_result$$178_JSCompiler_temp$$177_responseRowStart$$inline_7508_rowCount$$inline_7529_rowStart$$3$$ > this.$m_startRow$ ? (this.$m_endRow$ += $columnCount$$inline_7530_responseColumnStart$$inline_7509_rowCount$$15$$, this.$m_endRowPixel$ = 
      Math.max(0, this.$m_endRowPixel$ + $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$)) : (this.$m_startRow$ = $JSCompiler_inline_result$$178_JSCompiler_temp$$177_responseRowStart$$inline_7508_rowCount$$inline_7529_rowStart$$3$$, this.$m_startRowPixel$ = Math.max(0, this.$m_startRowPixel$ - $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$), $JSCompiler_StaticMethods_setElementHeight$$($horizontalGridlines$$inline_7540_resizer$$1_viewportBottom$$inline_7526$$, 
      Math.max(0, $JSCompiler_StaticMethods_getElementHeight$$($horizontalGridlines$$inline_7540_resizer$$1_viewportBottom$$inline_7526$$) - $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$))), $JSCompiler_StaticMethods_pushRowsDown$$($columnBandingInterval$$inline_7539_referenceRow$$, $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$)) : ($databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$.insertBefore($fragment$$1_rowRangeNeedsUpdate_verticalGridlines$$inline_7541_viewportLeft$$inline_7527$$, 
      $horizontalGridlines$$inline_7540_resizer$$1_viewportBottom$$inline_7526$$.nextSibling), this.$m_startRow$ -= $columnCount$$inline_7530_responseColumnStart$$inline_7509_rowCount$$15$$, this.$m_startRowPixel$ = Math.max(0, this.$m_startRowPixel$ - $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$), $JSCompiler_StaticMethods_setElementHeight$$($horizontalGridlines$$inline_7540_resizer$$1_viewportBottom$$inline_7526$$, Math.max(0, 
      $JSCompiler_StaticMethods_getElementHeight$$($horizontalGridlines$$inline_7540_resizer$$1_viewportBottom$$inline_7526$$) - $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$)))
    }
  }else {
    if($columnRangeNeedsUpdate_columnStartPixel$$inline_7523$$ && ($prev$$2_rowInsert_rows$$3$$ = $databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$.childNodes, $columnCount$$inline_7530_responseColumnStart$$inline_7509_rowCount$$15$$ == $prev$$2_rowInsert_rows$$3$$.length - 1)) {
      $avgWidth$$1_renderer$$inline_7538$$ = $JSCompiler_StaticMethods_getRenderer$$(this.$m_options$, "cell");
      $columnBandingInterval$$inline_7539_referenceRow$$ = $JSCompiler_StaticMethods_getColumnBandingInterval$$(this.$m_options$);
      $horizontalGridlines$$inline_7540_resizer$$1_viewportBottom$$inline_7526$$ = $JSCompiler_StaticMethods_getHorizontalGridlines$$(this.$m_options$);
      $fragment$$1_rowRangeNeedsUpdate_verticalGridlines$$inline_7541_viewportLeft$$inline_7527$$ = $JSCompiler_StaticMethods_getVerticalGridlines$$(this.$m_options$);
      for($i$$inline_7544_viewportRight$$inline_7528$$ = 0;$i$$inline_7544_viewportRight$$inline_7528$$ < $columnCount$$inline_7530_responseColumnStart$$inline_7509_rowCount$$15$$;$i$$inline_7544_viewportRight$$inline_7528$$ += 1) {
        $avgWidth$$inline_7543_i$$779_isAppend$$1_row$$inline_7542$$ = $prev$$2_rowInsert_rows$$3$$[$i$$inline_7544_viewportRight$$inline_7528$$ + 1], $avgWidth$$inline_7543_i$$779_isAppend$$1_row$$inline_7542$$ = $JSCompiler_StaticMethods_addCellsToRow$$(this, $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$, $avgWidth$$inline_7543_i$$779_isAppend$$1_row$$inline_7542$$, $JSCompiler_inline_result$$178_JSCompiler_temp$$177_responseRowStart$$inline_7508_rowCount$$inline_7529_rowStart$$3$$ + 
        $i$$inline_7544_viewportRight$$inline_7528$$, $avgWidth$$1_renderer$$inline_7538$$, $JSCompiler_alias_FALSE$$, $columnStart$$2_requestRowStart$$inline_7511_rowRange$$4_rowStart$$inline_7517_rowStartPixel$$inline_7521$$, $i$$inline_7544_viewportRight$$inline_7528$$ == $columnCount$$inline_7530_responseColumnStart$$inline_7509_rowCount$$15$$ - 1, $columnBandingInterval$$inline_7539_referenceRow$$, $horizontalGridlines$$inline_7540_resizer$$1_viewportBottom$$inline_7526$$, $fragment$$1_rowRangeNeedsUpdate_verticalGridlines$$inline_7541_viewportLeft$$inline_7527$$)
      }
      $avgWidth$$1_renderer$$inline_7538$$ = $avgWidth$$inline_7543_i$$779_isAppend$$1_row$$inline_7542$$
    }
  }
  $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$ = -1 != $scrollerWidth$$inline_7548_totalColumnCount$$ && !$JSCompiler_StaticMethods__isHighWatermarkScrolling$$(this) ? $scrollerWidth$$inline_7548_totalColumnCount$$ * $avgWidth$$1_renderer$$inline_7538$$ : this.$m_endColPixel$;
  if($avgWidth$$1_renderer$$inline_7538$$ != $JSCompiler_alias_VOID$$ && (0 == this.$m_avgColWidth$ || this.$m_avgColWidth$ == $JSCompiler_alias_VOID$$)) {
    this.$m_avgColWidth$ = $avgWidth$$1_renderer$$inline_7538$$, $JSCompiler_StaticMethods_setElementWidth$$($databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$, $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$), $JSCompiler_StaticMethods_setElementWidth$$($columnEndPixel$$inline_7524_columnRange$$4_columnStart$$inline_7519_inner$$5$$, $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$)
  }else {
    if((-1 == $scrollerWidth$$inline_7548_totalColumnCount$$ || $JSCompiler_StaticMethods__isHighWatermarkScrolling$$(this)) && $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$ > $JSCompiler_StaticMethods_getElementWidth$$($databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$)) {
      $JSCompiler_StaticMethods_setElementWidth$$($databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$, $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$), $JSCompiler_StaticMethods_setElementWidth$$($columnEndPixel$$inline_7524_columnRange$$4_columnStart$$inline_7519_inner$$5$$, $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$)
    }
  }
  $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$ = -1 != $JSCompiler_inline_result$$44_scrollerHeight$$inline_7547_totalRowCount$$ && !$JSCompiler_StaticMethods__isHighWatermarkScrolling$$(this) ? $JSCompiler_inline_result$$44_scrollerHeight$$inline_7547_totalRowCount$$ * $addResult_avgHeight_scrollerContentHeight$$inline_7550_top$$8$$ : this.$m_endRowPixel$;
  if($addResult_avgHeight_scrollerContentHeight$$inline_7550_top$$8$$ != $JSCompiler_alias_VOID$$ && (0 == this.$m_avgRowHeight$ || this.$m_avgRowHeight$ == $JSCompiler_alias_VOID$$)) {
    this.$m_avgRowHeight$ = $addResult_avgHeight_scrollerContentHeight$$inline_7550_top$$8$$, $JSCompiler_StaticMethods_setElementHeight$$($databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$, $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$), $JSCompiler_StaticMethods_setElementHeight$$($columnEndPixel$$inline_7524_columnRange$$4_columnStart$$inline_7519_inner$$5$$, $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$)
  }else {
    if((-1 == $JSCompiler_inline_result$$44_scrollerHeight$$inline_7547_totalRowCount$$ || $JSCompiler_StaticMethods__isHighWatermarkScrolling$$(this)) && $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$ > $JSCompiler_StaticMethods_getElementHeight$$($databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$) || $JSCompiler_inline_result$$44_scrollerHeight$$inline_7547_totalRowCount$$ * $addResult_avgHeight_scrollerContentHeight$$inline_7550_top$$8$$ != 
    $JSCompiler_StaticMethods_getElementHeight$$($databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$)) {
      $JSCompiler_StaticMethods_setElementHeight$$($databodyContent$$1_scroller$$11_viewportTop$$inline_7525$$, $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$), $JSCompiler_StaticMethods_setElementHeight$$($columnEndPixel$$inline_7524_columnRange$$4_columnStart$$inline_7519_inner$$5$$, $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$)
    }
  }
  $columnRangeNeedsUpdate_columnStartPixel$$inline_7523$$ && ($columnStart$$2_requestRowStart$$inline_7511_rowRange$$4_rowStart$$inline_7517_rowStartPixel$$inline_7521$$ < this.$m_startCol$ ? this.$m_startCol$ -= $columnCount$$13_requestCellRanges$$inline_7510_requestColumnStart$$inline_7512_rowEnd$$inline_7518_rowEndPixel$$inline_7522$$ : this.$m_endCol$ += $columnCount$$13_requestCellRanges$$inline_7510_requestColumnStart$$inline_7512_rowEnd$$inline_7518_rowEndPixel$$inline_7522$$);
  this.$m_fetching$.cells = $JSCompiler_alias_FALSE$$;
  this.$m_initialized$ && ($JSCompiler_StaticMethods__syncScrollerAndHeaders$$(this), $JSCompiler_StaticMethods__syncScrollerAndDatabody$$(this));
  $JSCompiler_StaticMethods_isFetchComplete$$(this) && ($JSCompiler_StaticMethods_hideStatusText$$(this), this.$m_initialized$ ? (this.$m_scroller$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_inline_result$$44_scrollerHeight$$inline_7547_totalRowCount$$ = $JSCompiler_alias_FALSE$$ : ($JSCompiler_inline_result$$44_scrollerHeight$$inline_7547_totalRowCount$$ = $JSCompiler_StaticMethods_getElementHeight$$(this.$m_scroller$), $scrollerWidth$$inline_7548_totalColumnCount$$ = $JSCompiler_StaticMethods_getElementWidth$$(this.$m_scroller$), 
  $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$ = this.$m_scroller$.firstChild, $addResult_avgHeight_scrollerContentHeight$$inline_7550_top$$8$$ = $JSCompiler_StaticMethods_getElementHeight$$($cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$), $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$ = 
  $JSCompiler_StaticMethods_getElementWidth$$($cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$), $JSCompiler_inline_result$$44_scrollerHeight$$inline_7547_totalRowCount$$ = this.$m_endRowPixel$ > $JSCompiler_inline_result$$44_scrollerHeight$$inline_7547_totalRowCount$$ && $scrollerWidth$$inline_7548_totalColumnCount$$ == $cellSet$$2_scrollerContent$$inline_7549_scrollerContentWidth$$inline_7551_topHotspot_totalColumnWidth_totalRowHeight$$1$$ || 
  this.$m_endColPixel$ > $scrollerWidth$$inline_7548_totalColumnCount$$ && $JSCompiler_inline_result$$44_scrollerHeight$$inline_7547_totalRowCount$$ == $addResult_avgHeight_scrollerContentHeight$$inline_7550_top$$8$$ ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$), $JSCompiler_inline_result$$44_scrollerHeight$$inline_7547_totalRowCount$$ && $JSCompiler_StaticMethods_resizeGrid$$(this)) : ($JSCompiler_StaticMethods_resizeGrid$$(this), $JSCompiler_StaticMethods_setInitialScrollPosition$$(this)), 
  this.$m_scrollIndexAfterFetch$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_scrollToIndex$$(this, this.$m_scrollIndexAfterFetch$), this.$m_activeHeader$ != $JSCompiler_alias_NULL$$ ? "row" === this.$m_activeHeader$.axis ? $JSCompiler_StaticMethods__focusRowHeader$$(this, this.$m_scrollIndexAfterFetch$.row) : "column" === this.$m_activeHeader$.axis && $JSCompiler_StaticMethods__focusColumnHeader$$(this, this.$m_scrollIndexAfterFetch$.column) : this.$m_scrollIndexAfterFetch$ == this.$m_active$ ? 
  $JSCompiler_StaticMethods_highlightActive$$(this) : $JSCompiler_StaticMethods_highlightIndex$$(this, this.$m_scrollIndexAfterFetch$), this.$m_scrollIndexAfterFetch$ = $JSCompiler_alias_NULL$$), $JSCompiler_StaticMethods__isSelectionEnabled$$(this) && (this.$m_databody$ == $JSCompiler_alias_NULL$$ && (this.$m_databody$ = $cellRange$$4_databody$$8$$), $JSCompiler_StaticMethods_applySelection$$(this, $JSCompiler_inline_result$$178_JSCompiler_temp$$177_responseRowStart$$inline_7508_rowCount$$inline_7529_rowStart$$3$$, 
  $JSCompiler_inline_result$$178_JSCompiler_temp$$177_responseRowStart$$inline_7508_rowCount$$inline_7529_rowStart$$3$$ + $columnCount$$inline_7530_responseColumnStart$$inline_7509_rowCount$$15$$)))
};
function $JSCompiler_StaticMethods__addRows$$($JSCompiler_StaticMethods__addRows$self$$, $fragment$$2$$, $isAppendOrInsert$$, $top$$9$$, $rowStart$$5$$, $rowCount$$17$$, $columnStart$$4$$, $columnRangeNeedsUpdate$$1$$, $cellSet$$4$$) {
  var $renderer$$4$$, $columnBandingInterval$$1$$, $rowBandingInterval$$, $horizontalGridlines$$1$$, $verticalGridlines$$1$$, $row$$11$$, $avgWidth$$3$$, $totalRowHeight$$2$$, $height$$134_index$$146$$;
  $renderer$$4$$ = $JSCompiler_StaticMethods_getRenderer$$($JSCompiler_StaticMethods__addRows$self$$.$m_options$, "cell");
  $columnBandingInterval$$1$$ = $JSCompiler_StaticMethods_getColumnBandingInterval$$($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $rowBandingInterval$$ = $JSCompiler_StaticMethods_getRowBandingInterval$$($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $horizontalGridlines$$1$$ = $JSCompiler_StaticMethods_getHorizontalGridlines$$($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $verticalGridlines$$1$$ = $JSCompiler_StaticMethods_getVerticalGridlines$$($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  for(i = $totalRowHeight$$2$$ = 0;i < $rowCount$$17$$;i += 1) {
    $height$$134_index$$146$$ = $isAppendOrInsert$$ ? $rowStart$$5$$ + i : $rowStart$$5$$ + ($rowCount$$17$$ - 1 - i), $row$$11$$ = document.createElement("div"), $row$$11$$.className = 1 === Math.floor($height$$134_index$$146$$ / $rowBandingInterval$$) % 2 ? $JSCompiler_StaticMethods__addRows$self$$.$getResources$().getMappedStyle("row") + " " + $JSCompiler_StaticMethods__addRows$self$$.$getResources$().getMappedStyle("banded") : $JSCompiler_StaticMethods__addRows$self$$.$getResources$().getMappedStyle("row"), 
    $avgWidth$$3$$ = $JSCompiler_StaticMethods_addCellsToRow$$($JSCompiler_StaticMethods__addRows$self$$, $cellSet$$4$$, $row$$11$$, $height$$134_index$$146$$, $renderer$$4$$, $JSCompiler_alias_TRUE$$, $columnStart$$4$$, i == $rowCount$$17$$ - 1 && $columnRangeNeedsUpdate$$1$$, $columnBandingInterval$$1$$, $horizontalGridlines$$1$$, $verticalGridlines$$1$$), $height$$134_index$$146$$ = $JSCompiler_StaticMethods_getRowHeight$$($JSCompiler_StaticMethods__addRows$self$$, $row$$11$$, $height$$134_index$$146$$, 
    $row$$11$$.getAttribute($JSCompiler_StaticMethods__addRows$self$$.$getResources$().getMappedAttribute("key"))), $JSCompiler_StaticMethods_setElementHeight$$($row$$11$$, $height$$134_index$$146$$), $totalRowHeight$$2$$ += $height$$134_index$$146$$, $isAppendOrInsert$$ ? ($row$$11$$.style.top = $top$$9$$ + "px", $top$$9$$ += $height$$134_index$$146$$, $fragment$$2$$.appendChild($row$$11$$)) : ($top$$9$$ -= $height$$134_index$$146$$, $row$$11$$.style.top = $top$$9$$ + "px", $fragment$$2$$.insertBefore($row$$11$$, 
    $fragment$$2$$.firstChild))
  }
  return{avgWidth:$avgWidth$$3$$, totalRowHeight:$totalRowHeight$$2$$, top:$top$$9$$}
}
function $JSCompiler_StaticMethods_pushRowsDown$$($row$$12$$, $adjustment$$1$$) {
  for(;$row$$12$$;) {
    $row$$12$$.style.top = parseInt($row$$12$$.style.top) + $adjustment$$1$$ + "px", $row$$12$$ = $row$$12$$.nextSibling
  }
}
$JSCompiler_prototypeAlias$$.$handleCellsFetchError$ = $JSCompiler_emptyFn$$();
function $JSCompiler_StaticMethods_addCellsToRow$$($JSCompiler_StaticMethods_addCellsToRow$self$$, $cellSet$$5$$, $row$$14$$, $rowIndex$$10$$, $renderer$$5$$, $isRowFetch$$, $columnStart$$5$$, $updateColumnRangeInfo$$, $columnBandingInterval$$2$$, $horizontalGridlines$$2$$, $verticalGridlines$$2$$) {
  var $isAppend$$2$$, $firstColumn$$, $indexes$$3_indexes$$inline_7554_inlineStyle$$15_inlineStyleClass$$, $cellStyleClass_data$$inline_7555$$, $currentLeft$$1$$, $dir$$18$$, $totalWidth$$5$$, $columnCount$$14$$, $cellData$$5_content$$9_rowExpander$$inline_7561$$, $cellMetadata_metadata$$inline_7556$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_7553_cell$$inline_7562_cellContext$$1_index$$inline_7564$$, $j$$107$$, $JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$, 
  $columnIndex$$6_row$$inline_7563_width$$152$$, $keyAttribute$$;
  $isAppend$$2$$ = $columnStart$$5$$ >= $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startCol$;
  $firstColumn$$ = $row$$14$$.firstChild;
  $currentLeft$$1$$ = $isRowFetch$$ || !$isAppend$$2$$ ? $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startColPixel$ : $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endColPixel$;
  $keyAttribute$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$getResources$().getMappedAttribute("key");
  $dir$$18$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$getResources$().isRTLMode() ? "right" : "left";
  $totalWidth$$5$$ = 0;
  $columnCount$$14$$ = $cellSet$$5$$.getCount("column");
  for($j$$107$$ = 0;$j$$107$$ < $columnCount$$14$$;$j$$107$$ += 1) {
    $columnIndex$$6_row$$inline_7563_width$$152$$ = $isAppend$$2$$ || $isRowFetch$$ ? $columnStart$$5$$ + $j$$107$$ : $columnStart$$5$$ + ($columnCount$$14$$ - 1 - $j$$107$$);
    $indexes$$3_indexes$$inline_7554_inlineStyle$$15_inlineStyleClass$$ = {row:$rowIndex$$10$$, column:$columnIndex$$6_row$$inline_7563_width$$152$$};
    $cellData$$5_content$$9_rowExpander$$inline_7561$$ = $cellSet$$5$$.getData($indexes$$3_indexes$$inline_7554_inlineStyle$$15_inlineStyleClass$$);
    $cellMetadata_metadata$$inline_7556$$ = $cellSet$$5$$.getMetadata($indexes$$3_indexes$$inline_7554_inlineStyle$$15_inlineStyleClass$$);
    $JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$ = document.createElement("div");
    $JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$.setAttribute("tabIndex", -1);
    $JSCompiler_StaticMethods_createCellContext$self$$inline_7553_cell$$inline_7562_cellContext$$1_index$$inline_7564$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$;
    $cellStyleClass_data$$inline_7555$$ = $cellData$$5_content$$9_rowExpander$$inline_7561$$;
    var $cellContext$$inline_7558$$ = $JSCompiler_alias_VOID$$, $cellContext$$inline_7558$$ = {};
    $cellContext$$inline_7558$$.parentElement = $JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$;
    $cellContext$$inline_7558$$.indexes = $indexes$$3_indexes$$inline_7554_inlineStyle$$15_inlineStyleClass$$;
    $cellContext$$inline_7558$$.keys = $cellMetadata_metadata$$inline_7556$$.keys;
    $cellContext$$inline_7558$$.data = $cellStyleClass_data$$inline_7555$$;
    $cellContext$$inline_7558$$.datagrid = $JSCompiler_StaticMethods_createCellContext$self$$inline_7553_cell$$inline_7562_cellContext$$1_index$$inline_7564$$;
    $cellMetadata_metadata$$inline_7556$$.row && $cellMetadata_metadata$$inline_7556$$.column && ($cellContext$$inline_7558$$.metadata = {row:$cellMetadata_metadata$$inline_7556$$.row, column:$cellMetadata_metadata$$inline_7556$$.column});
    $JSCompiler_StaticMethods_createCellContext$self$$inline_7553_cell$$inline_7562_cellContext$$1_index$$inline_7564$$.$m_createContextCallback$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_createCellContext$self$$inline_7553_cell$$inline_7562_cellContext$$1_index$$inline_7564$$.$m_createContextCallback$.call($JSCompiler_StaticMethods_createCellContext$self$$inline_7553_cell$$inline_7562_cellContext$$1_index$$inline_7564$$, $cellContext$$inline_7558$$);
    $JSCompiler_StaticMethods_createCellContext$self$$inline_7553_cell$$inline_7562_cellContext$$1_index$$inline_7564$$ = $cellContext$$inline_7558$$;
    $row$$14$$.hasAttribute($keyAttribute$$) || $row$$14$$.setAttribute($keyAttribute$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_7553_cell$$inline_7562_cellContext$$1_index$$inline_7564$$.keys.row);
    if("hidden" === $verticalGridlines$$2$$ || $columnIndex$$6_row$$inline_7563_width$$152$$ === $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_dataSource$.getCount("column") - 1) {
      "left" === $dir$$18$$ ? $JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$.style.borderRight = "none" : $JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$.style.borderLeftStyle = "none"
    }
    if("hidden" === $horizontalGridlines$$2$$ || $rowIndex$$10$$ === $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_dataSource$.getCount("row") - 1) {
      $JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$.style.borderBottomStyle = "none"
    }
    $indexes$$3_indexes$$inline_7554_inlineStyle$$15_inlineStyleClass$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getInlineStyle$("cell", $JSCompiler_StaticMethods_createCellContext$self$$inline_7553_cell$$inline_7562_cellContext$$1_index$$inline_7564$$);
    $indexes$$3_indexes$$inline_7554_inlineStyle$$15_inlineStyleClass$$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$.style.cssText = $indexes$$3_indexes$$inline_7554_inlineStyle$$15_inlineStyleClass$$);
    $cellStyleClass_data$$inline_7555$$ = 1 === Math.floor($columnIndex$$6_row$$inline_7563_width$$152$$ / $columnBandingInterval$$2$$) % 2 ? $JSCompiler_StaticMethods_addCellsToRow$self$$.$getResources$().getMappedStyle("cell") + " " + $JSCompiler_StaticMethods_addCellsToRow$self$$.$getResources$().getMappedStyle("banded") : $JSCompiler_StaticMethods_addCellsToRow$self$$.$getResources$().getMappedStyle("cell");
    $indexes$$3_indexes$$inline_7554_inlineStyle$$15_inlineStyleClass$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getStyleClass$("cell", $JSCompiler_StaticMethods_createCellContext$self$$inline_7553_cell$$inline_7562_cellContext$$1_index$$inline_7564$$);
    $JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$.className = $indexes$$3_indexes$$inline_7554_inlineStyle$$15_inlineStyleClass$$ != $JSCompiler_alias_NULL$$ ? $cellStyleClass_data$$inline_7555$$ + " " + $indexes$$3_indexes$$inline_7554_inlineStyle$$15_inlineStyleClass$$ : $cellStyleClass_data$$inline_7555$$;
    $JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$.style.height = "100%";
    $columnIndex$$6_row$$inline_7563_width$$152$$ = $JSCompiler_StaticMethods_getColumnWidth$$($JSCompiler_StaticMethods_addCellsToRow$self$$, $JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$, $columnIndex$$6_row$$inline_7563_width$$152$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_7553_cell$$inline_7562_cellContext$$1_index$$inline_7564$$.keys.column);
    $JSCompiler_StaticMethods_setElementWidth$$($JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$, $columnIndex$$6_row$$inline_7563_width$$152$$);
    $isAppend$$2$$ || $isRowFetch$$ ? $JSCompiler_StaticMethods_setElementDir$$($JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$, $currentLeft$$1$$, $dir$$18$$) : $JSCompiler_StaticMethods_setElementDir$$($JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$, $currentLeft$$1$$ - $columnIndex$$6_row$$inline_7563_width$$152$$, $dir$$18$$);
    $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_root$.appendChild($JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$);
    $renderer$$5$$ != $JSCompiler_alias_NULL$$ ? ($cellData$$5_content$$9_rowExpander$$inline_7561$$ = $renderer$$5$$.call($JSCompiler_StaticMethods_addCellsToRow$self$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_7553_cell$$inline_7562_cellContext$$1_index$$inline_7564$$), $cellData$$5_content$$9_rowExpander$$inline_7561$$ != $JSCompiler_alias_NULL$$ && ($cellData$$5_content$$9_rowExpander$$inline_7561$$.parentNode === $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$.appendChild($cellData$$5_content$$9_rowExpander$$inline_7561$$) : 
    $cellData$$5_content$$9_rowExpander$$inline_7561$$.parentNode == $JSCompiler_alias_NULL$$ && $cellData$$5_content$$9_rowExpander$$inline_7561$$.toString && $JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$.appendChild(document.createTextNode($cellData$$5_content$$9_rowExpander$$inline_7561$$.toString())))) : $JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$.appendChild(document.createTextNode($cellData$$5_content$$9_rowExpander$$inline_7561$$.toString()));
    $isAppend$$2$$ || $isRowFetch$$ ? ($row$$14$$.appendChild($JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$), $currentLeft$$1$$ += $columnIndex$$6_row$$inline_7563_width$$152$$) : ($row$$14$$.insertBefore($JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$, $firstColumn$$), $firstColumn$$ = $JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$, $currentLeft$$1$$ -= $columnIndex$$6_row$$inline_7563_width$$152$$);
    $updateColumnRangeInfo$$ && ($isAppend$$2$$ || $isRowFetch$$ ? $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endColPixel$ += $columnIndex$$6_row$$inline_7563_width$$152$$ : $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startColPixel$ -= $columnIndex$$6_row$$inline_7563_width$$152$$, $totalWidth$$5$$ += $columnIndex$$6_row$$inline_7563_width$$152$$);
    $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_currentRowExpander$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$, $cellData$$5_content$$9_rowExpander$$inline_7561$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_currentRowExpander$, $JSCompiler_StaticMethods_createCellContext$self$$inline_7553_cell$$inline_7562_cellContext$$1_index$$inline_7564$$ = $columnIndex$$6_row$$inline_7563_width$$152$$ = 
    $JSCompiler_StaticMethods_createCellContext$self$$inline_7553_cell$$inline_7562_cellContext$$1_index$$inline_7564$$ = $JSCompiler_alias_VOID$$, $cellData$$5_content$$9_rowExpander$$inline_7561$$.setAttribute($JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$.$getResources$().getMappedAttribute("expander"), "true"), $cellData$$5_content$$9_rowExpander$$inline_7561$$.firstChild.getAttribute("aria-expanded") !== $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_createCellContext$self$$inline_7553_cell$$inline_7562_cellContext$$1_index$$inline_7564$$ = 
    $JSCompiler_StaticMethods_findCell$$($JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$, $cellData$$5_content$$9_rowExpander$$inline_7561$$), $columnIndex$$6_row$$inline_7563_width$$152$$ = $JSCompiler_StaticMethods_createCellContext$self$$inline_7553_cell$$inline_7562_cellContext$$1_index$$inline_7564$$.parentNode, $JSCompiler_StaticMethods_createCellContext$self$$inline_7553_cell$$inline_7562_cellContext$$1_index$$inline_7564$$ = Array.prototype.indexOf.call($columnIndex$$6_row$$inline_7563_width$$152$$.childNodes, 
    $JSCompiler_StaticMethods_createCellContext$self$$inline_7553_cell$$inline_7562_cellContext$$1_index$$inline_7564$$), $columnIndex$$6_row$$inline_7563_width$$152$$.setAttribute($JSCompiler_StaticMethods__processRowExpander$self$$inline_7560_cell$$13$$.$getResources$().getMappedAttribute("expanderIndex"), $JSCompiler_StaticMethods_createCellContext$self$$inline_7553_cell$$inline_7562_cellContext$$1_index$$inline_7564$$), $columnIndex$$6_row$$inline_7563_width$$152$$.setAttribute("aria-expanded", 
    "true" == $cellData$$5_content$$9_rowExpander$$inline_7561$$.firstChild.getAttribute("aria-expanded"))), $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_currentRowExpander$ = $JSCompiler_alias_NULL$$)
  }
  return $updateColumnRangeInfo$$ && 0 < $columnCount$$14$$ ? $totalWidth$$5$$ / $columnCount$$14$$ : $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.$handleCellsFetchError$ = function $$JSCompiler_prototypeAlias$$$$handleCellsFetchError$$() {
  this.$m_fetching$.cells = $JSCompiler_alias_FALSE$$
};
function $JSCompiler_StaticMethods_showStatusText$$($JSCompiler_StaticMethods_showStatusText$self$$) {
  var $left$$10_msg$$7$$;
  $left$$10_msg$$7$$ = $JSCompiler_StaticMethods_showStatusText$self$$.$getResources$().getTranslatedText("fetching");
  "block" != $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.display && ($JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.innerHTML = $left$$10_msg$$7$$, $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.display = "block", $left$$10_msg$$7$$ = $JSCompiler_StaticMethods_showStatusText$self$$.getWidth() / 2 - $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.offsetWidth / 2, $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.left = $left$$10_msg$$7$$ + 
  "px")
}
function $JSCompiler_StaticMethods_hideStatusText$$($JSCompiler_StaticMethods_hideStatusText$self$$) {
  $JSCompiler_StaticMethods_hideStatusText$self$$.$m_status$.style.display = "none"
}
$JSCompiler_prototypeAlias$$.$handleScroll$ = function $$JSCompiler_prototypeAlias$$$$handleScroll$$($event$$666_scroller$$12$$) {
  var $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_7566_scrollLeft$$2_width$$inline_7568$$;
  $event$$666_scroller$$12$$ || ($event$$666_scroller$$12$$ = window.event);
  $event$$666_scroller$$12$$ = $event$$666_scroller$$12$$.target ? $event$$666_scroller$$12$$.target : $event$$666_scroller$$12$$.srcElement;
  $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_7566_scrollLeft$$2_width$$inline_7568$$ = this.$m_utils$;
  var $elemWidth$$inline_7569$$;
  $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_7566_scrollLeft$$2_width$$inline_7568$$.$dataGrid$.$getResources$().isRTLMode() ? "gecko" == $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_7566_scrollLeft$$2_width$$inline_7568$$.platform || "ie" == $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_7566_scrollLeft$$2_width$$inline_7568$$.platform ? $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_7566_scrollLeft$$2_width$$inline_7568$$ = Math.abs($event$$666_scroller$$12$$.scrollLeft) : 
  ($JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_7566_scrollLeft$$2_width$$inline_7568$$ = $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_7566_scrollLeft$$2_width$$inline_7568$$.$dataGrid$.$m_scroller$.firstChild), $elemWidth$$inline_7569$$ = parseInt($event$$666_scroller$$12$$.style.width, 10), $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_7566_scrollLeft$$2_width$$inline_7568$$ = Math.max(0, $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_7566_scrollLeft$$2_width$$inline_7568$$ - 
  $elemWidth$$inline_7569$$ - $event$$666_scroller$$12$$.scrollLeft)) : $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_7566_scrollLeft$$2_width$$inline_7568$$ = $event$$666_scroller$$12$$.scrollLeft;
  this.scrollTo($JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_7566_scrollLeft$$2_width$$inline_7568$$, $event$$666_scroller$$12$$.scrollTop)
};
function $JSCompiler_StaticMethods_scrollDelta$$($JSCompiler_StaticMethods_scrollDelta$self$$, $deltaX$$20_scrollLeft$$3$$, $deltaY$$19_scrollTop$$2$$) {
  0 != $deltaX$$20_scrollLeft$$3$$ && 0 != $deltaY$$19_scrollTop$$2$$ && ($deltaX$$20_scrollLeft$$3$$ > $deltaY$$19_scrollTop$$2$$ ? $deltaY$$19_scrollTop$$2$$ = 0 : $deltaX$$20_scrollLeft$$3$$ = 0);
  $deltaX$$20_scrollLeft$$3$$ = Math.max(0, Math.min($JSCompiler_StaticMethods_scrollDelta$self$$.$m_scrollWidth$, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_currentScrollLeft$ - $deltaX$$20_scrollLeft$$3$$));
  $deltaY$$19_scrollTop$$2$$ = Math.max(0, Math.min($JSCompiler_StaticMethods_scrollDelta$self$$.$m_scrollHeight$, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_currentScrollTop$ - $deltaY$$19_scrollTop$$2$$));
  $JSCompiler_StaticMethods_setElementScrollLeft$$($JSCompiler_StaticMethods_scrollDelta$self$$.$m_utils$, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$, $deltaX$$20_scrollLeft$$3$$);
  $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$.scrollTop = $deltaY$$19_scrollTop$$2$$
}
$JSCompiler_prototypeAlias$$.scrollTo = function $$JSCompiler_prototypeAlias$$$scrollTo$($scrollLeft$$5$$, $scrollTop$$4$$) {
  this.$m_currentScrollLeft$ = $scrollLeft$$5$$;
  this.$m_currentScrollTop$ = $scrollTop$$4$$;
  $scrollLeft$$5$$ + $JSCompiler_StaticMethods_getViewportWidth$$(this) < this.$m_startColPixel$ || $scrollLeft$$5$$ > this.$m_endColPixel$ || $scrollTop$$4$$ + $JSCompiler_StaticMethods_getViewportHeight$$(this) < this.$m_startRowPixel$ || $scrollTop$$4$$ > this.$m_endRowPixel$ ? $JSCompiler_StaticMethods_handleLongScroll$$(this, $scrollLeft$$5$$, $scrollTop$$4$$) : $JSCompiler_StaticMethods_fillViewport$$(this, $scrollLeft$$5$$, $scrollTop$$4$$);
  var $scrollerContent$$inline_7577_viewportRight$$inline_7574$$;
  $scrollerContent$$inline_7577_viewportRight$$inline_7574$$ = $scrollLeft$$5$$ + $JSCompiler_StaticMethods_getElementWidth$$(this.$m_databody$);
  if(this.$m_endRowPixel$ < $scrollTop$$4$$ + $JSCompiler_StaticMethods_getElementHeight$$(this.$m_databody$) || this.$m_startRowPixel$ > $scrollTop$$4$$ || this.$m_endColPixel$ < $scrollerContent$$inline_7577_viewportRight$$inline_7574$$ - 2 || this.$m_startColPixel$ > $scrollLeft$$5$$) {
    this.$m_stopDatabodyScroll$ = $JSCompiler_alias_TRUE$$
  }else {
    this.$m_stopDatabodyScroll$ = $JSCompiler_alias_FALSE$$;
    $JSCompiler_StaticMethods__syncScrollerAndHeaders$$(this);
    $JSCompiler_StaticMethods__syncScrollerAndDatabody$$(this);
    var $scrollerContentHeight$$inline_7578$$, $scrollerContentWidth$$inline_7579$$, $databodyContent$$inline_7580$$;
    $scrollerContent$$inline_7577_viewportRight$$inline_7574$$ = this.$m_scroller$.firstChild;
    $scrollerContentHeight$$inline_7578$$ = $JSCompiler_StaticMethods_getElementHeight$$($scrollerContent$$inline_7577_viewportRight$$inline_7574$$);
    $scrollerContentWidth$$inline_7579$$ = $JSCompiler_StaticMethods_getElementWidth$$($scrollerContent$$inline_7577_viewportRight$$inline_7574$$);
    $databodyContent$$inline_7580$$ = this.$m_databody$.firstChild;
    if(this.$m_endRowPixel$ > $scrollerContentHeight$$inline_7578$$ || this.$m_dataSource$.getCount("row") == this.$m_endRow$ && !$JSCompiler_StaticMethods__isCountUnknown$$(this, "row") && this.$m_endRowPixel$ < $scrollerContentHeight$$inline_7578$$) {
      $JSCompiler_StaticMethods_setElementHeight$$($scrollerContent$$inline_7577_viewportRight$$inline_7574$$, this.$m_endRowPixel$), $JSCompiler_StaticMethods_setElementHeight$$($databodyContent$$inline_7580$$, this.$m_endRowPixel$)
    }
    if(this.$m_endColPixel$ > $scrollerContentWidth$$inline_7579$$ || this.$m_dataSource$.getCount("column") == this.$m_endCol$ && !$JSCompiler_StaticMethods__isCountUnknown$$(this, "column") && this.$m_endColPixel$ < $scrollerContentWidth$$inline_7579$$) {
      $JSCompiler_StaticMethods_setElementWidth$$($scrollerContent$$inline_7577_viewportRight$$inline_7574$$, this.$m_endColPixel$), $JSCompiler_StaticMethods_setElementWidth$$($databodyContent$$inline_7580$$, this.$m_endColPixel$)
    }
    this.$m_cellToFocus$ != $JSCompiler_alias_NULL$$ && (this.$m_cellToFocus$.focus(), this.$m_cellToFocus$ = $JSCompiler_alias_NULL$$)
  }
};
function $JSCompiler_StaticMethods__syncScrollerAndDatabody$$($JSCompiler_StaticMethods__syncScrollerAndDatabody$self_dir$$19$$) {
  var $scrollLeft$$6$$, $scrollTop$$5$$, $databody$$9$$;
  $scrollLeft$$6$$ = $JSCompiler_StaticMethods__syncScrollerAndDatabody$self_dir$$19$$.$m_currentScrollLeft$;
  $scrollTop$$5$$ = $JSCompiler_StaticMethods__syncScrollerAndDatabody$self_dir$$19$$.$m_currentScrollTop$;
  $databody$$9$$ = $JSCompiler_StaticMethods__syncScrollerAndDatabody$self_dir$$19$$.$m_databody$.firstChild;
  window.hasOwnProperty("WebKitCSSMatrix") && (new WebKitCSSMatrix).hasOwnProperty("m11") ? $databody$$9$$.style.webkitTransform = $JSCompiler_StaticMethods__syncScrollerAndDatabody$self_dir$$19$$.$getResources$().isRTLMode() ? "translate3d(" + $scrollLeft$$6$$ + "px, " + -$scrollTop$$5$$ + "px, 0)" : "translate3d(" + -$scrollLeft$$6$$ + "px, " + -$scrollTop$$5$$ + "px, 0)" : ($JSCompiler_StaticMethods__syncScrollerAndDatabody$self_dir$$19$$ = $JSCompiler_StaticMethods__syncScrollerAndDatabody$self_dir$$19$$.$getResources$().isRTLMode() ? 
  "right" : "left", $JSCompiler_StaticMethods_setElementDir$$($databody$$9$$, -$scrollLeft$$6$$, $JSCompiler_StaticMethods__syncScrollerAndDatabody$self_dir$$19$$), $JSCompiler_StaticMethods_setElementDir$$($databody$$9$$, -$scrollTop$$5$$, "top"))
}
function $JSCompiler_StaticMethods__syncScrollerAndHeaders$$($JSCompiler_StaticMethods__syncScrollerAndHeaders$self_dir$$20$$) {
  var $scrollLeft$$7$$, $scrollTop$$6$$, $colHeader$$6$$, $rowHeader$$5$$;
  $scrollLeft$$7$$ = $JSCompiler_StaticMethods__syncScrollerAndHeaders$self_dir$$20$$.$m_currentScrollLeft$;
  $scrollTop$$6$$ = $JSCompiler_StaticMethods__syncScrollerAndHeaders$self_dir$$20$$.$m_currentScrollTop$;
  $colHeader$$6$$ = $JSCompiler_StaticMethods__syncScrollerAndHeaders$self_dir$$20$$.$m_colHeader$.firstChild;
  $rowHeader$$5$$ = $JSCompiler_StaticMethods__syncScrollerAndHeaders$self_dir$$20$$.$m_rowHeader$.firstChild;
  window.hasOwnProperty("WebKitCSSMatrix") && (new WebKitCSSMatrix).hasOwnProperty("m11") ? ($colHeader$$6$$.style.webkitTransform = $JSCompiler_StaticMethods__syncScrollerAndHeaders$self_dir$$20$$.$getResources$().isRTLMode() ? "translate3d(" + $scrollLeft$$7$$ + "px, 0, 0)" : "translate3d(" + -$scrollLeft$$7$$ + "px, 0, 0)", $rowHeader$$5$$.style.webkitTransform = "translate3d(0, " + -$scrollTop$$6$$ + "px, 0)") : ($JSCompiler_StaticMethods__syncScrollerAndHeaders$self_dir$$20$$ = $JSCompiler_StaticMethods__syncScrollerAndHeaders$self_dir$$20$$.$getResources$().isRTLMode() ? 
  "right" : "left", $JSCompiler_StaticMethods_setElementDir$$($colHeader$$6$$, -$scrollLeft$$7$$, $JSCompiler_StaticMethods__syncScrollerAndHeaders$self_dir$$20$$), $JSCompiler_StaticMethods_setElementDir$$($rowHeader$$5$$, -$scrollTop$$6$$, "top"))
}
function $JSCompiler_StaticMethods_handleLongScroll$$($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$, $scrollTop$$7_startRow$$) {
  var $startRowPixel$$, $startColPixel$$;
  $scrollTop$$7_startRow$$ = Math.round(Math.max(0, $scrollTop$$7_startRow$$ - $JSCompiler_StaticMethods_handleLongScroll$self$$.getHeight() / 2) / $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgRowHeight$);
  $scrollLeft$$8_startCol$$ = Math.round(Math.max(0, $scrollLeft$$8_startCol$$ - $JSCompiler_StaticMethods_handleLongScroll$self$$.getWidth() / 2) / $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgColWidth$);
  $startRowPixel$$ = $scrollTop$$7_startRow$$ * $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgRowHeight$;
  $startColPixel$$ = $scrollLeft$$8_startCol$$ * $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgColWidth$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRow$ = $scrollTop$$7_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRow$ = $scrollTop$$7_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowHeader$ = $scrollTop$$7_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowHeader$ = $scrollTop$$7_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowHeaderPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowHeaderPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startCol$ = $scrollLeft$$8_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endCol$ = $scrollLeft$$8_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColHeader$ = $scrollLeft$$8_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColHeader$ = $scrollLeft$$8_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColHeaderPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColHeaderPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchHeaders("row", $scrollTop$$7_startRow$$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_rowHeader$, $JSCompiler_alias_VOID$$, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$) {
    $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$(this, $JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$, $startRowPixel$$)
  }});
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchHeaders("column", $scrollLeft$$8_startCol$$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_colHeader$, $JSCompiler_alias_VOID$$, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$) {
    this.$m_colHeader$.firstChild.innerHTML = "";
    this.$handleHeadersFetchSuccess$($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$)
  }});
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchCells($JSCompiler_StaticMethods_handleLongScroll$self$$.$m_databody$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_scroller$, $scrollTop$$7_startRow$$, $scrollLeft$$8_startCol$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$) {
    $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$(this, $JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$, $startRowPixel$$)
  }})
}
function $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$($JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$, $headerSet$$4$$, $headerRange$$7$$, $startRowPixel$$1$$) {
  var $headerContent$$ = $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$.$m_rowHeader$.firstChild;
  headerResizer = $headerContent$$.firstChild.cloneNode();
  $headerContent$$.innerHTML = "";
  $headerContent$$.appendChild(headerResizer);
  $JSCompiler_StaticMethods_setElementHeight$$(headerResizer, $startRowPixel$$1$$);
  $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$.$handleHeadersFetchSuccess$($headerSet$$4$$, $headerRange$$7$$)
}
function $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$($JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$, $cellSet$$7$$, $cellRange$$7$$, $startRowPixel$$2$$) {
  databodyContent = $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$.$m_databody$.firstChild;
  databodyResizer = databodyContent.firstChild.cloneNode();
  databodyContent.innerHTML = "";
  databodyContent.appendChild(databodyResizer);
  $JSCompiler_StaticMethods_setElementHeight$$(databodyResizer, $startRowPixel$$2$$);
  $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$.$handleCellsFetchSuccess$($cellSet$$7$$, $cellRange$$7$$)
}
function $JSCompiler_StaticMethods_fillViewport$$($JSCompiler_StaticMethods_fillViewport$self$$, $fetchStartRow$$inline_7645_rows$$inline_7603_scrollLeft$$9_threshold$$inline_7617_viewportBottom$$2$$, $fetchSize$$inline_7644_scrollTop$$8$$) {
  var $columns$$inline_7618_fetchStartRow_indexToRemove$$inline_7604_rowHeaderContent$$inline_7627_rowHeaderContent$$inline_7636_viewportRight$$2$$, $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$, $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$;
  $columns$$inline_7618_fetchStartRow_indexToRemove$$inline_7604_rowHeaderContent$$inline_7627_rowHeaderContent$$inline_7636_viewportRight$$2$$ = $fetchStartRow$$inline_7645_rows$$inline_7603_scrollLeft$$9_threshold$$inline_7617_viewportBottom$$2$$ + $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$);
  if($columns$$inline_7618_fetchStartRow_indexToRemove$$inline_7604_rowHeaderContent$$inline_7627_rowHeaderContent$$inline_7636_viewportRight$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ || $columns$$inline_7618_fetchStartRow_indexToRemove$$inline_7604_rowHeaderContent$$inline_7627_rowHeaderContent$$inline_7636_viewportRight$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ && ($JSCompiler_StaticMethods__isCountUnknown$$($JSCompiler_StaticMethods_fillViewport$self$$, 
  "column") || $JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods_fillViewport$self$$)) && !$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnHeaderFetch$) {
    if($JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("column", $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$), !$JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$) {
      var $column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$, $column$$inline_7609_height$$inline_7632_left$$inline_7587_row$$inline_7623_width$$inline_7599$$, $i$$inline_7589_prevLeft$$inline_7610$$, $header$$inline_7591$$, $prevLeft$$inline_7592$$;
      $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$.firstChild;
      $column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$ = $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$.childNodes;
      for($i$$inline_7589_prevLeft$$inline_7610$$ = $column$$inline_7609_height$$inline_7632_left$$inline_7587_row$$inline_7623_width$$inline_7599$$ = $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$ = 0;$i$$inline_7589_prevLeft$$inline_7610$$ < $column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$.length;$i$$inline_7589_prevLeft$$inline_7610$$ += 
      1) {
        if($header$$inline_7591$$ = $column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$[$i$$inline_7589_prevLeft$$inline_7610$$], $prevLeft$$inline_7592$$ = $column$$inline_7609_height$$inline_7632_left$$inline_7587_row$$inline_7623_width$$inline_7599$$, $column$$inline_7609_height$$inline_7632_left$$inline_7587_row$$inline_7623_width$$inline_7599$$ = $JSCompiler_StaticMethods_getElementDir$$($header$$inline_7591$$, 
        "left"), $column$$inline_7609_height$$inline_7632_left$$inline_7587_row$$inline_7623_width$$inline_7599$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ - 0) {
          $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$ = $i$$inline_7589_prevLeft$$inline_7610$$ - 1;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ += $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$ = $prevLeft$$inline_7592$$;
          break
        }
      }
      for($column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$ = 0;$column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$ < $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$;$column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$ += 
      1) {
        $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$.removeChild($colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$.firstChild), $JSCompiler_StaticMethods_fillViewport$self$$.$m_cachedColumnWidth$.splice(0, 1)
      }
      $JSCompiler_StaticMethods_fillViewport$self$$.$m_cachedColumnWidthStartIndex$ += $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$
    }
  }else {
    if($fetchStartRow$$inline_7645_rows$$inline_7603_scrollLeft$$9_threshold$$inline_7617_viewportBottom$$2$$ < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$ && ($column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$ = Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ - $JSCompiler_StaticMethods_getFetchSize$$($JSCompiler_StaticMethods_fillViewport$self$$, 
    "column")), $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$ = Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ - $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$), $JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("column", 
    $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$, $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$), !$JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods_fillViewport$self$$) && 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && ($colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$.firstChild, $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$ = 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ + $JSCompiler_StaticMethods_getViewportWidth$$($JSCompiler_StaticMethods_fillViewport$self$$) + 0, !($JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ <= $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$)))) {
      $column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$ = $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$.lastChild;
      for($column$$inline_7609_height$$inline_7632_left$$inline_7587_row$$inline_7623_width$$inline_7599$$ = $column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$.offsetWidth;$JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ + $column$$inline_7609_height$$inline_7632_left$$inline_7587_row$$inline_7623_width$$inline_7599$$ > $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$;) {
        $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$.removeChild($column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$), $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ -= $column$$inline_7609_height$$inline_7632_left$$inline_7587_row$$inline_7623_width$$inline_7599$$, 
        $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ -= 1, $column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$ = $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$.lastChild, $column$$inline_7609_height$$inline_7632_left$$inline_7587_row$$inline_7623_width$$inline_7599$$ = 
        $column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$.offsetWidth
      }
    }
  }
  if($columns$$inline_7618_fetchStartRow_indexToRemove$$inline_7604_rowHeaderContent$$inline_7627_rowHeaderContent$$inline_7636_viewportRight$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ || $columns$$inline_7618_fetchStartRow_indexToRemove$$inline_7604_rowHeaderContent$$inline_7627_rowHeaderContent$$inline_7636_viewportRight$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ && ($JSCompiler_StaticMethods__isCountUnknown$$($JSCompiler_StaticMethods_fillViewport$self$$, 
  "column") || $JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods_fillViewport$self$$)) && !$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnFetch$) {
    if($JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$), !$JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods_fillViewport$self$$) && 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && ($fetchStartRow$$inline_7645_rows$$inline_7603_scrollLeft$$9_threshold$$inline_7617_viewportBottom$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$.firstChild.childNodes, $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$ = 
    $columns$$inline_7618_fetchStartRow_indexToRemove$$inline_7604_rowHeaderContent$$inline_7627_rowHeaderContent$$inline_7636_viewportRight$$2$$ = 0, !(2 > $fetchStartRow$$inline_7645_rows$$inline_7603_scrollLeft$$9_threshold$$inline_7617_viewportBottom$$2$$.length))) {
      $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$ = $fetchStartRow$$inline_7645_rows$$inline_7603_scrollLeft$$9_threshold$$inline_7617_viewportBottom$$2$$[1].childNodes;
      for($column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$ = 0;$column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$ < $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$.length;$column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$ += 
      1) {
        if($column$$inline_7609_height$$inline_7632_left$$inline_7587_row$$inline_7623_width$$inline_7599$$ = $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$[$column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$], $i$$inline_7589_prevLeft$$inline_7610$$ = $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$, 
        $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$ = $JSCompiler_StaticMethods_getElementDir$$($column$$inline_7609_height$$inline_7632_left$$inline_7587_row$$inline_7623_width$$inline_7599$$, "left"), $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$ > 
        $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ - 0) {
          $columns$$inline_7618_fetchStartRow_indexToRemove$$inline_7604_rowHeaderContent$$inline_7627_rowHeaderContent$$inline_7636_viewportRight$$2$$ = $column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$ - 1;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ += $columns$$inline_7618_fetchStartRow_indexToRemove$$inline_7604_rowHeaderContent$$inline_7627_rowHeaderContent$$inline_7636_viewportRight$$2$$;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColPixel$ = $i$$inline_7589_prevLeft$$inline_7610$$;
          break
        }
      }
      for($colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$ = 1;$colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$ < $fetchStartRow$$inline_7645_rows$$inline_7603_scrollLeft$$9_threshold$$inline_7617_viewportBottom$$2$$.length;$colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$ += 
      1) {
        $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$ = $fetchStartRow$$inline_7645_rows$$inline_7603_scrollLeft$$9_threshold$$inline_7617_viewportBottom$$2$$[$colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$];
        for($column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$ = 0;$column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$ < $columns$$inline_7618_fetchStartRow_indexToRemove$$inline_7604_rowHeaderContent$$inline_7627_rowHeaderContent$$inline_7636_viewportRight$$2$$;$column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$ += 
        1) {
          $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$.removeChild($column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$.firstChild)
        }
      }
    }
  }else {
    if($fetchStartRow$$inline_7645_rows$$inline_7603_scrollLeft$$9_threshold$$inline_7617_viewportBottom$$2$$ < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColPixel$ && ($column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$ = Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ - $JSCompiler_StaticMethods_getFetchSize$$($JSCompiler_StaticMethods_fillViewport$self$$, 
    "column")), $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$ = Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ - $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$), $JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$, $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$, $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$), 
    !$JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && ($colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$.firstChild.childNodes, 
    $fetchStartRow$$inline_7645_rows$$inline_7603_scrollLeft$$9_threshold$$inline_7617_viewportBottom$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ + $JSCompiler_StaticMethods_getViewportWidth$$($JSCompiler_StaticMethods_fillViewport$self$$) + 0, !($JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ <= $fetchStartRow$$inline_7645_rows$$inline_7603_scrollLeft$$9_threshold$$inline_7617_viewportBottom$$2$$)))) {
      $columns$$inline_7618_fetchStartRow_indexToRemove$$inline_7604_rowHeaderContent$$inline_7627_rowHeaderContent$$inline_7636_viewportRight$$2$$ = $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$[1];
      $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$ = $columns$$inline_7618_fetchStartRow_indexToRemove$$inline_7604_rowHeaderContent$$inline_7627_rowHeaderContent$$inline_7636_viewportRight$$2$$.lastChild;
      for($column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$ = $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$.offsetWidth;$JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ + $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$ > 
      $fetchStartRow$$inline_7645_rows$$inline_7603_scrollLeft$$9_threshold$$inline_7617_viewportBottom$$2$$;) {
        for($column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$ = 1;$column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$ < $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$.length;$column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$ += 
        1) {
          $column$$inline_7609_height$$inline_7632_left$$inline_7587_row$$inline_7623_width$$inline_7599$$ = $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$[$column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$], $column$$inline_7609_height$$inline_7632_left$$inline_7587_row$$inline_7623_width$$inline_7599$$.removeChild($column$$inline_7609_height$$inline_7632_left$$inline_7587_row$$inline_7623_width$$inline_7599$$.lastChild)
        }
        $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ -= $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$;
        $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ -= 1;
        $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$ = $columns$$inline_7618_fetchStartRow_indexToRemove$$inline_7604_rowHeaderContent$$inline_7627_rowHeaderContent$$inline_7636_viewportRight$$2$$.lastChild;
        $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$ = $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$.offsetWidth
      }
    }
  }
  $fetchStartRow$$inline_7645_rows$$inline_7603_scrollLeft$$9_threshold$$inline_7617_viewportBottom$$2$$ = $fetchSize$$inline_7644_scrollTop$$8$$ + $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$);
  if($fetchStartRow$$inline_7645_rows$$inline_7603_scrollLeft$$9_threshold$$inline_7617_viewportBottom$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ || $fetchStartRow$$inline_7645_rows$$inline_7603_scrollLeft$$9_threshold$$inline_7617_viewportBottom$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ && ($JSCompiler_StaticMethods__isCountUnknown$$($JSCompiler_StaticMethods_fillViewport$self$$, "row") || $JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods_fillViewport$self$$)) && 
  !$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopRowHeaderFetch$) {
    if($JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("row", $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$), !$JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && 
    ($columns$$inline_7618_fetchStartRow_indexToRemove$$inline_7604_rowHeaderContent$$inline_7627_rowHeaderContent$$inline_7636_viewportRight$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$.firstChild, $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$ = $columns$$inline_7618_fetchStartRow_indexToRemove$$inline_7604_rowHeaderContent$$inline_7627_rowHeaderContent$$inline_7636_viewportRight$$2$$.firstChild, 
    $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$ = $JSCompiler_StaticMethods_getElementHeight$$($colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$), !($column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$ >= 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollTop$ - 0))) {
      $column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$ = $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$.nextSibling;
      for($column$$inline_7609_height$$inline_7632_left$$inline_7587_row$$inline_7623_width$$inline_7599$$ = $column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$.offsetHeight;$column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$ + $column$$inline_7609_height$$inline_7632_left$$inline_7587_row$$inline_7623_width$$inline_7599$$ < 
      $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollTop$ - 0;) {
        $columns$$inline_7618_fetchStartRow_indexToRemove$$inline_7604_rowHeaderContent$$inline_7627_rowHeaderContent$$inline_7636_viewportRight$$2$$.removeChild($column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$), $JSCompiler_StaticMethods_fillViewport$self$$.$m_cachedRowHeight$.splice(0, 1), $JSCompiler_StaticMethods_fillViewport$self$$.$m_cachedRowHeightStartIndex$ -= 1, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeaderPixel$ += 
        $column$$inline_7609_height$$inline_7632_left$$inline_7587_row$$inline_7623_width$$inline_7599$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ += 1, $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$ += $column$$inline_7609_height$$inline_7632_left$$inline_7587_row$$inline_7623_width$$inline_7599$$, $column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$ = 
        $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$.nextSibling, $column$$inline_7609_height$$inline_7632_left$$inline_7587_row$$inline_7623_width$$inline_7599$$ = $column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$.offsetHeight
      }
      $JSCompiler_StaticMethods_setElementHeight$$($colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$, $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$)
    }
  }else {
    if(Math.max(0, $fetchSize$$inline_7644_scrollTop$$8$$ - 0) < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeaderPixel$) {
      if(0 == $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$) {
        return
      }
      $columns$$inline_7618_fetchStartRow_indexToRemove$$inline_7604_rowHeaderContent$$inline_7627_rowHeaderContent$$inline_7636_viewportRight$$2$$ = Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ - $JSCompiler_StaticMethods_getFetchSize$$($JSCompiler_StaticMethods_fillViewport$self$$, "row"));
      $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$ = Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ - $columns$$inline_7618_fetchStartRow_indexToRemove$$inline_7604_rowHeaderContent$$inline_7627_rowHeaderContent$$inline_7636_viewportRight$$2$$);
      $JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("row", $columns$$inline_7618_fetchStartRow_indexToRemove$$inline_7604_rowHeaderContent$$inline_7627_rowHeaderContent$$inline_7636_viewportRight$$2$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$, $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$);
      if(!$JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && ($columns$$inline_7618_fetchStartRow_indexToRemove$$inline_7604_rowHeaderContent$$inline_7627_rowHeaderContent$$inline_7636_viewportRight$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$.firstChild, 
      $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollTop$ + $JSCompiler_StaticMethods_getViewportHeight$$($JSCompiler_StaticMethods_fillViewport$self$$) + 0, !($JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ <= $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$))) {
        $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$ = $columns$$inline_7618_fetchStartRow_indexToRemove$$inline_7604_rowHeaderContent$$inline_7627_rowHeaderContent$$inline_7636_viewportRight$$2$$.lastChild;
        for($column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$ = $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$.offsetHeight;$JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ + $column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$ > 
        $colHeaderContent$$inline_7584_colHeaderContent$$inline_7596_fetchSize$$3_j$$inline_7611_left$$inline_7605_resizer$$inline_7628_rows$$inline_7621_threshold$$inline_7637$$;) {
          $columns$$inline_7618_fetchStartRow_indexToRemove$$inline_7604_rowHeaderContent$$inline_7627_rowHeaderContent$$inline_7636_viewportRight$$2$$.removeChild($column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$), $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ -= $column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$, 
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ -= 1, $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$ = $columns$$inline_7618_fetchStartRow_indexToRemove$$inline_7604_rowHeaderContent$$inline_7627_rowHeaderContent$$inline_7636_viewportRight$$2$$.lastChild, $column$$inline_7598_header$$inline_7631_headers$$inline_7585_height$$inline_7639_i$$inline_7608_j$$inline_7590_j$$inline_7622_k$$inline_7613$$ = 
          $column$$inline_7619_columns$$inline_7607_fetchStartCol_indexToRemove$$inline_7586_resizerHeight$$inline_7629_row$$inline_7612_row$$inline_7638_threshold$$inline_7597_width$$inline_7620$$.offsetHeight
        }
      }
    }
  }
  $fetchStartRow$$inline_7645_rows$$inline_7603_scrollLeft$$9_threshold$$inline_7617_viewportBottom$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowPixel$ || $fetchStartRow$$inline_7645_rows$$inline_7603_scrollLeft$$9_threshold$$inline_7617_viewportBottom$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowPixel$ && ($JSCompiler_StaticMethods__isCountUnknown$$($JSCompiler_StaticMethods_fillViewport$self$$, "row") || $JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods_fillViewport$self$$)) && 
  !$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopRowFetch$ ? ($JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$, $JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$), 
  !$JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && $JSCompiler_StaticMethods_removeRowsFromTop$$($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$)) : Math.max(0, $fetchSize$$inline_7644_scrollTop$$8$$ - 
  0) < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowPixel$ && 0 != $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ && ($fetchStartRow$$inline_7645_rows$$inline_7603_scrollLeft$$9_threshold$$inline_7617_viewportBottom$$2$$ = Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ - $JSCompiler_StaticMethods_getFetchSize$$($JSCompiler_StaticMethods_fillViewport$self$$, "row")), $fetchSize$$inline_7644_scrollTop$$8$$ = Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ - 
  $fetchStartRow$$inline_7645_rows$$inline_7603_scrollLeft$$9_threshold$$inline_7617_viewportBottom$$2$$), $JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $fetchStartRow$$inline_7645_rows$$inline_7603_scrollLeft$$9_threshold$$inline_7617_viewportBottom$$2$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$, $fetchSize$$inline_7644_scrollTop$$8$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - 
  $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$), !$JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && $JSCompiler_StaticMethods_removeRowsFromBottom$$($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$))
}
function $JSCompiler_StaticMethods_removeRowsFromTop$$($JSCompiler_StaticMethods_removeRowsFromTop$self$$, $databody$$12$$) {
  var $databodyContent$$6$$, $resizer$$3$$, $resizerHeight$$1$$, $row$$17$$, $height$$136$$;
  $databodyContent$$6$$ = $databody$$12$$.firstChild;
  $resizer$$3$$ = $databodyContent$$6$$.firstChild;
  $resizerHeight$$1$$ = $JSCompiler_StaticMethods_getElementHeight$$($resizer$$3$$);
  if(!($resizerHeight$$1$$ >= $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_currentScrollTop$ - 0)) {
    $row$$17$$ = $resizer$$3$$.nextSibling;
    for($height$$136$$ = $row$$17$$.offsetHeight;$resizerHeight$$1$$ + $height$$136$$ < $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_currentScrollTop$ - 0;) {
      $databodyContent$$6$$.removeChild($row$$17$$);
      $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_startRowPixel$ += $height$$136$$;
      $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_startRow$ += 1;
      $resizerHeight$$1$$ += $height$$136$$;
      $row$$17$$ = $resizer$$3$$.nextSibling;
      if($row$$17$$ == $JSCompiler_alias_NULL$$) {
        break
      }
      $height$$136$$ = $row$$17$$.offsetHeight
    }
    $JSCompiler_StaticMethods_setElementHeight$$($resizer$$3$$, $resizerHeight$$1$$)
  }
}
function $JSCompiler_StaticMethods_removeRowsFromBottom$$($JSCompiler_StaticMethods_removeRowsFromBottom$self$$, $databody$$13$$) {
  var $databodyContent$$7$$, $threshold$$8$$, $row$$19$$, $height$$138$$;
  $databodyContent$$7$$ = $databody$$13$$.firstChild;
  $threshold$$8$$ = $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_currentScrollTop$ + $JSCompiler_StaticMethods_getViewportHeight$$($JSCompiler_StaticMethods_removeRowsFromBottom$self$$) + 0;
  if(!($JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ > $threshold$$8$$)) {
    $row$$19$$ = $databodyContent$$7$$.lastChild;
    for($height$$138$$ = $row$$19$$.offsetHeight;$JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ + $height$$138$$ > $threshold$$8$$;) {
      $databodyContent$$7$$.removeChild($row$$19$$), $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ -= $height$$138$$, $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRow$ -= 1, $row$$19$$ = $databodyContent$$7$$.lastChild, $height$$138$$ = $row$$19$$.offsetHeight
    }
  }
}
$JSCompiler_prototypeAlias$$.$handleScrollerMouseDown$ = function $$JSCompiler_prototypeAlias$$$$handleScrollerMouseDown$$() {
  this.$m_captureScrolling$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$handleScrollerMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleScrollerMouseUp$$() {
  this.$m_captureScrolling$ = $JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_isFetchComplete$$(this) && this.$m_stopDatabodyScroll$ && $JSCompiler_StaticMethods_fillViewport$$(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$)
};
$JSCompiler_prototypeAlias$$.$handleContextMenuReturn$ = function $$JSCompiler_prototypeAlias$$$$handleContextMenuReturn$$($event$$669$$, $direction$$36_id$$322$$, $value$$138$$) {
  var $target$$122$$, $cell$$14$$;
  $target$$122$$ = $event$$669$$.target;
  $cell$$14$$ = $JSCompiler_StaticMethods_findCell$$(this, $target$$122$$);
  if($direction$$36_id$$322$$ === this.$m_resources$.getMappedCommand("resizeHeight")) {
    $JSCompiler_StaticMethods_isResizeEnabled$$(this) && ($target$$122$$ = $cell$$14$$ != $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getHeaderFromCell$$(this, $cell$$14$$, "row").firstChild : $JSCompiler_StaticMethods_findHeader$$(this, $target$$122$$), $JSCompiler_StaticMethods_handleContextMenuResize$$(this, $target$$122$$, "resizeHeight", $value$$138$$))
  }else {
    if($direction$$36_id$$322$$ === this.$m_resources$.getMappedCommand("resizeWidth")) {
      $JSCompiler_StaticMethods_isResizeEnabled$$(this) && ($target$$122$$ = $cell$$14$$ != $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getHeaderFromCell$$(this, $cell$$14$$, "column") : $JSCompiler_StaticMethods_findHeader$$(this, $target$$122$$), $JSCompiler_StaticMethods_handleContextMenuResize$$(this, $target$$122$$, "resizeWidth", $value$$138$$))
    }else {
      if($direction$$36_id$$322$$ === this.$m_resources$.getMappedCommand("sortColAsc") || $direction$$36_id$$322$$ === this.$m_resources$.getMappedCommand("sortColDsc")) {
        $direction$$36_id$$322$$ = $direction$$36_id$$322$$ === this.$m_resources$.getMappedCommand("sortColAsc") ? "ascending" : "descending", $cell$$14$$ != $JSCompiler_alias_NULL$$ ? ($target$$122$$ = $JSCompiler_StaticMethods_getHeaderFromCell$$(this, $cell$$14$$, "column"), $JSCompiler_StaticMethods__isDOMElementSortable$$(this, $target$$122$$) && $target$$122$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__doHeaderSort$$(this, $event$$669$$, $target$$122$$, $direction$$36_id$$322$$)) : 
        $JSCompiler_StaticMethods__isDOMElementSortable$$(this, $target$$122$$) && $JSCompiler_StaticMethods__handleHeaderSort$$(this, $event$$669$$, $direction$$36_id$$322$$)
      }else {
        if($direction$$36_id$$322$$ === this.$m_resources$.getMappedCommand("sortRowAsc") || $direction$$36_id$$322$$ === this.$m_resources$.getMappedCommand("sortRowDsc")) {
          $direction$$36_id$$322$$ = $direction$$36_id$$322$$ === this.$m_resources$.getMappedCommand("sortRowAsc") ? "ascending" : "descending", $cell$$14$$ != $JSCompiler_alias_NULL$$ ? ($target$$122$$ = $JSCompiler_StaticMethods_getHeaderFromCell$$(this, $cell$$14$$, "row"), $JSCompiler_StaticMethods__isDOMElementSortable$$(this, $target$$122$$) && $target$$122$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__doHeaderSort$$(this, $event$$669$$, $target$$122$$, $direction$$36_id$$322$$)) : 
          $JSCompiler_StaticMethods__isDOMElementSortable$$(this, $target$$122$$) && $JSCompiler_StaticMethods__handleHeaderSort$$(this, $event$$669$$, $direction$$36_id$$322$$)
        }
      }
    }
  }
};
$DvtDataGrid$$.prototype.handleContextMenuReturn = $DvtDataGrid$$.prototype.$handleContextMenuReturn$;
function $JSCompiler_StaticMethods__isDOMElementSortable$$($JSCompiler_StaticMethods__isDOMElementSortable$self$$, $element$$19$$) {
  if($JSCompiler_StaticMethods_containsCSSClassName$$($element$$19$$, $JSCompiler_StaticMethods__isDOMElementSortable$self$$.$getResources$().getMappedStyle("sortascending")) || $JSCompiler_StaticMethods_containsCSSClassName$$($element$$19$$, $JSCompiler_StaticMethods__isDOMElementSortable$self$$.$getResources$().getMappedStyle("sortdescending"))) {
    $element$$19$$ = $element$$19$$.parentNode.parentNode
  }
  return"true" == $element$$19$$.getAttribute($JSCompiler_StaticMethods__isDOMElementSortable$self$$.$getResources$().getMappedAttribute("sortable"))
}
function $JSCompiler_StaticMethods__isSelectionEnabled$$($JSCompiler_StaticMethods__isSelectionEnabled$self$$) {
  return"none" != $JSCompiler_StaticMethods_getSelectionCardinality$$($JSCompiler_StaticMethods__isSelectionEnabled$self$$.$m_options$)
}
function $JSCompiler_StaticMethods_isMultipleSelection$$($JSCompiler_StaticMethods_isMultipleSelection$self$$) {
  return"multiple" == $JSCompiler_StaticMethods_getSelectionCardinality$$($JSCompiler_StaticMethods_isMultipleSelection$self$$.$m_options$)
}
function $JSCompiler_StaticMethods_isResizeEnabled$$($JSCompiler_StaticMethods_isResizeEnabled$self_column$$7$$) {
  var $row$$20$$ = $JSCompiler_StaticMethods_isResizable$$($JSCompiler_StaticMethods_isResizeEnabled$self_column$$7$$.$m_options$, "row");
  $JSCompiler_StaticMethods_isResizeEnabled$self_column$$7$$ = $JSCompiler_StaticMethods_isResizable$$($JSCompiler_StaticMethods_isResizeEnabled$self_column$$7$$.$m_options$, "column");
  return"disable" !== $row$$20$$.width || "disable" !== $row$$20$$.height || "disable" !== $JSCompiler_StaticMethods_isResizeEnabled$self_column$$7$$.width || "disable" !== $JSCompiler_StaticMethods_isResizeEnabled$self_column$$7$$.height
}
function $JSCompiler_StaticMethods__isHeaderResizeEnabled$$($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$, $axis$$51$$, $headerContext$$4$$) {
  var $resizable$$ = $JSCompiler_StaticMethods_isResizable$$($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$.$m_options$, $axis$$51$$, $headerContext$$4$$);
  return"column" == $axis$$51$$ ? "function" == typeof $resizable$$.width ? "enable" == $resizable$$.width.call($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$, $headerContext$$4$$) ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$ : "enable" == $resizable$$.width ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$ : "row" == $axis$$51$$ ? "function" == typeof $resizable$$.height ? "enable" == $resizable$$.height.call($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$, $headerContext$$4$$) ? 
  $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$ : "enable" == $resizable$$.height ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_FALSE$$
}
$JSCompiler_prototypeAlias$$ = $DvtDataGrid$$.prototype;
$JSCompiler_prototypeAlias$$.$handleMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleMouseMove$$($event$$670_oldElementHeight$$inline_9936_oldElementWidth$$inline_9934_resizeHeaderMode$$inline_9933$$) {
  if($JSCompiler_StaticMethods_isResizeEnabled$$(this) && this.$m_databodyDragState$ == $JSCompiler_alias_FALSE$$) {
    if(this.$m_isResizing$ === $JSCompiler_alias_FALSE$$) {
      $JSCompiler_StaticMethods_containsCSSClassName$$($event$$670_oldElementHeight$$inline_9936_oldElementWidth$$inline_9934_resizeHeaderMode$$inline_9933$$.target, this.$getResources$().getMappedStyle("colheadercell")) || $JSCompiler_StaticMethods_containsCSSClassName$$($event$$670_oldElementHeight$$inline_9936_oldElementWidth$$inline_9934_resizeHeaderMode$$inline_9933$$.target, this.$getResources$().getMappedStyle("rowheadercell")) ? (this.$m_cursor$ = $JSCompiler_StaticMethods_manageHeaderCursor$$(this, 
      $event$$670_oldElementHeight$$inline_9936_oldElementWidth$$inline_9934_resizeHeaderMode$$inline_9933$$), document.body.style.cursor = this.$m_cursor$) : (this.$m_cursor$ = "default", document.body.style.cursor = "default")
    }else {
      var $newElementHeight$$inline_9937_newElementWidth$$inline_9935$$;
      this.$m_currentMouseX$ = $event$$670_oldElementHeight$$inline_9936_oldElementWidth$$inline_9934_resizeHeaderMode$$inline_9933$$.pageX;
      this.$m_currentMouseY$ = $event$$670_oldElementHeight$$inline_9936_oldElementWidth$$inline_9934_resizeHeaderMode$$inline_9933$$.pageY;
      $event$$670_oldElementHeight$$inline_9936_oldElementWidth$$inline_9934_resizeHeaderMode$$inline_9933$$ = $JSCompiler_StaticMethods_containsCSSClassName$$(this.$m_resizingElement$, this.$getResources$().getMappedStyle("colheadercell")) ? "column" : "row";
      "col-resize" === this.$m_cursor$ ? "column" === $event$$670_oldElementHeight$$inline_9936_oldElementWidth$$inline_9934_resizeHeaderMode$$inline_9933$$ ? ($event$$670_oldElementHeight$$inline_9936_oldElementWidth$$inline_9934_resizeHeaderMode$$inline_9933$$ = isNaN($JSCompiler_StaticMethods_getElementWidth$$(this.$m_resizingElement$)) ? 50 : $JSCompiler_StaticMethods_getElementWidth$$(this.$m_resizingElement$), $newElementHeight$$inline_9937_newElementWidth$$inline_9935$$ = $JSCompiler_StaticMethods_getNewElementWidth$$(this, 
      "column", $event$$670_oldElementHeight$$inline_9936_oldElementWidth$$inline_9934_resizeHeaderMode$$inline_9933$$), $JSCompiler_StaticMethods_resizeColWidth$$(this, $event$$670_oldElementHeight$$inline_9936_oldElementWidth$$inline_9934_resizeHeaderMode$$inline_9933$$, $newElementHeight$$inline_9937_newElementWidth$$inline_9935$$)) : "row" === $event$$670_oldElementHeight$$inline_9936_oldElementWidth$$inline_9934_resizeHeaderMode$$inline_9933$$ && ($event$$670_oldElementHeight$$inline_9936_oldElementWidth$$inline_9934_resizeHeaderMode$$inline_9933$$ = 
      $JSCompiler_StaticMethods_getElementWidth$$(this.$m_rowHeader$), $newElementHeight$$inline_9937_newElementWidth$$inline_9935$$ = $JSCompiler_StaticMethods_getNewElementWidth$$(this, "row", $event$$670_oldElementHeight$$inline_9936_oldElementWidth$$inline_9934_resizeHeaderMode$$inline_9933$$), $JSCompiler_StaticMethods_resizeRowWidth$$(this, $event$$670_oldElementHeight$$inline_9936_oldElementWidth$$inline_9934_resizeHeaderMode$$inline_9933$$, $newElementHeight$$inline_9937_newElementWidth$$inline_9935$$)) : 
      "row-resize" === this.$m_cursor$ && ("row" === $event$$670_oldElementHeight$$inline_9936_oldElementWidth$$inline_9934_resizeHeaderMode$$inline_9933$$ ? ($event$$670_oldElementHeight$$inline_9936_oldElementWidth$$inline_9934_resizeHeaderMode$$inline_9933$$ = isNaN($JSCompiler_StaticMethods_getElementHeight$$(this.$m_resizingElement$.parentNode)) ? $JSCompiler_StaticMethods_getDefaultRowHeight$$(this) : $JSCompiler_StaticMethods_getElementHeight$$(this.$m_resizingElement$.parentNode), $newElementHeight$$inline_9937_newElementWidth$$inline_9935$$ = 
      $JSCompiler_StaticMethods_getNewElementHeight$$(this, "row", $event$$670_oldElementHeight$$inline_9936_oldElementWidth$$inline_9934_resizeHeaderMode$$inline_9933$$), $JSCompiler_StaticMethods_resizeRowHeight$$(this, $event$$670_oldElementHeight$$inline_9936_oldElementWidth$$inline_9934_resizeHeaderMode$$inline_9933$$, $newElementHeight$$inline_9937_newElementWidth$$inline_9935$$)) : "column" === $event$$670_oldElementHeight$$inline_9936_oldElementWidth$$inline_9934_resizeHeaderMode$$inline_9933$$ && 
      ($event$$670_oldElementHeight$$inline_9936_oldElementWidth$$inline_9934_resizeHeaderMode$$inline_9933$$ = $JSCompiler_StaticMethods_getElementHeight$$(this.$m_colHeader$), $newElementHeight$$inline_9937_newElementWidth$$inline_9935$$ = $JSCompiler_StaticMethods_getNewElementHeight$$(this, "column", $event$$670_oldElementHeight$$inline_9936_oldElementWidth$$inline_9934_resizeHeaderMode$$inline_9933$$), $JSCompiler_StaticMethods_resizeColHeight$$(this, $event$$670_oldElementHeight$$inline_9936_oldElementWidth$$inline_9934_resizeHeaderMode$$inline_9933$$, 
      $newElementHeight$$inline_9937_newElementWidth$$inline_9935$$)));
      $JSCompiler_StaticMethods_buildCorners$$(this);
      this.$m_lastMouseX$ = this.$m_currentMouseX$;
      this.$m_lastMouseY$ = this.$m_currentMouseY$
    }
  }
};
$JSCompiler_prototypeAlias$$.$handleHeaderMouseDown$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseDown$$($event$$671$$) {
  $event$$671$$.preventDefault();
  if($JSCompiler_StaticMethods_isResizeEnabled$$(this) && ("col-resize" === this.$m_cursor$ || "row-resize" === this.$m_cursor$)) {
    this.$m_isResizing$ = $JSCompiler_alias_TRUE$$, this.$m_lastMouseX$ = $event$$671$$.pageX, this.$m_lastMouseY$ = $event$$671$$.pageY, this.$m_overResizeBottom$ = this.$m_overResizeRight$ = this.$m_overResizeMinTop$ = this.$m_overResizeTop$ = this.$m_overResizeMinLeft$ = this.$m_overResizeLeft$ = 0
  }
};
$JSCompiler_prototypeAlias$$.$handleMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleMouseUp$$($details$$inline_7670_event$$672$$) {
  $details$$inline_7670_event$$672$$.preventDefault();
  if($JSCompiler_StaticMethods_isResizeEnabled$$(this)) {
    var $size$$inline_7669$$;
    this.$m_isResizing$ === $JSCompiler_alias_TRUE$$ && ($size$$inline_7669$$ = "col-resize" === this.$m_cursor$ ? this.$m_resizingElement$.style.width : this.$m_resizingElement$.style.height, $details$$inline_7670_event$$672$$ = {event:$details$$inline_7670_event$$672$$, ui:{header:this.$m_resizingElement$, size:$size$$inline_7669$$}}, this.fireEvent("resize", $details$$inline_7670_event$$672$$), this.$m_isResizing$ = $JSCompiler_alias_FALSE$$, this.$m_cursor$ = document.body.style.cursor = "default")
  }
};
$JSCompiler_prototypeAlias$$.$handleHeaderMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseOver$$($event$$673$$) {
  if($JSCompiler_StaticMethods__isDOMElementSortable$$(this, $event$$673$$.target)) {
    var $clsName$$inline_7674$$, $ascendingClassName$$inline_7675$$, $descendingClassName$$inline_7676$$;
    $clsName$$inline_7674$$ = $event$$673$$.target.className;
    $ascendingClassName$$inline_7675$$ = this.$getResources$().getMappedStyle("sortascending");
    $descendingClassName$$inline_7676$$ = this.$getResources$().getMappedStyle("sortdescending");
    $clsName$$inline_7674$$ == $ascendingClassName$$inline_7675$$ || $clsName$$inline_7674$$ == $descendingClassName$$inline_7676$$ || $JSCompiler_StaticMethods__showOrHideSortIndicators$$(this, $event$$673$$, $JSCompiler_alias_FALSE$$)
  }
};
$JSCompiler_prototypeAlias$$.$handleHeaderMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseOut$$($event$$674$$) {
  if($JSCompiler_StaticMethods__isDOMElementSortable$$(this, $event$$674$$.target)) {
    var $clsName$$inline_7680$$ = $JSCompiler_alias_NULL$$, $ascendingClassName$$inline_7681$$, $descendingClassName$$inline_7682$$;
    $event$$674$$.relatedTarget != $JSCompiler_alias_NULL$$ && ($clsName$$inline_7680$$ = $event$$674$$.relatedTarget.className);
    $ascendingClassName$$inline_7681$$ = this.$getResources$().getMappedStyle("sortascending");
    $descendingClassName$$inline_7682$$ = this.$getResources$().getMappedStyle("sortdescending");
    $clsName$$inline_7680$$ == $ascendingClassName$$inline_7681$$ || $clsName$$inline_7680$$ == $descendingClassName$$inline_7682$$ || $JSCompiler_StaticMethods__showOrHideSortIndicators$$(this, $event$$674$$, $JSCompiler_alias_TRUE$$)
  }
};
$JSCompiler_prototypeAlias$$.$handleHeaderClick$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderClick$$($event$$675$$) {
  $event$$675$$.preventDefault();
  $JSCompiler_StaticMethods__isDOMElementSortable$$(this, $event$$675$$.target) && $JSCompiler_StaticMethods__handleHeaderSort$$(this, $event$$675$$)
};
$JSCompiler_prototypeAlias$$.$handleDatabodyMouseDown$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseDown$$($cell$$inline_7686_event$$676$$) {
  if($JSCompiler_StaticMethods__isSelectionEnabled$$(this)) {
    $JSCompiler_StaticMethods_handleDatabodyClickSelection$$(this, $cell$$inline_7686_event$$676$$), $JSCompiler_StaticMethods_isMultipleSelection$$(this) && (this.$m_databodyDragState$ = $JSCompiler_alias_TRUE$$)
  }else {
    var $index$$inline_7687$$;
    $cell$$inline_7686_event$$676$$ = $JSCompiler_StaticMethods_findCell$$(this, $cell$$inline_7686_event$$676$$.target);
    $cell$$inline_7686_event$$676$$ != $JSCompiler_alias_NULL$$ && ($index$$inline_7687$$ = this.createIndex(this.$getRowIndex$($cell$$inline_7686_event$$676$$.parentNode), this.$getCellIndex$($cell$$inline_7686_event$$676$$)));
    $index$$inline_7687$$ != $JSCompiler_alias_NULL$$ && $index$$inline_7687$$ != $JSCompiler_alias_VOID$$ && ($JSCompiler_StaticMethods_scrollToIndex$$(this, $index$$inline_7687$$), this.$activeAndFocus$($index$$inline_7687$$))
  }
};
$JSCompiler_prototypeAlias$$.$handleDatabodyMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseOut$$($event$$677$$) {
  var $selectionMode$$10$$ = this.$m_options$.$getSelectionMode$();
  "cell" === $selectionMode$$10$$ ? $JSCompiler_StaticMethods_removeCSSClassName$$($JSCompiler_StaticMethods_findCell$$(this, $event$$677$$.target), this.$getResources$().getMappedStyle("hover")) : "row" === $selectionMode$$10$$ && $JSCompiler_StaticMethods_removeCSSClassName$$($JSCompiler_StaticMethods_findCell$$(this, $event$$677$$.target).parentNode, this.$getResources$().getMappedStyle("hover"))
};
$JSCompiler_prototypeAlias$$.$handleDatabodyMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseOver$$($event$$678$$) {
  var $selectionMode$$11$$ = this.$m_options$.$getSelectionMode$();
  "cell" === $selectionMode$$11$$ ? $JSCompiler_StaticMethods_addCSSClassName$$($JSCompiler_StaticMethods_findCell$$(this, $event$$678$$.target), this.$getResources$().getMappedStyle("hover")) : "row" === $selectionMode$$11$$ && $JSCompiler_StaticMethods_addCSSClassName$$($JSCompiler_StaticMethods_findCell$$(this, $event$$678$$.target).parentNode, this.$getResources$().getMappedStyle("hover"))
};
$JSCompiler_prototypeAlias$$.$handleDatabodyMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseMove$$($event$$679$$) {
  if(this.$m_databodyDragState$) {
    var $cell$$inline_7692_index$$inline_7691$$;
    $cell$$inline_7692_index$$inline_7691$$ = $JSCompiler_StaticMethods_findCell$$(this, $event$$679$$.target);
    $cell$$inline_7692_index$$inline_7691$$ != $JSCompiler_alias_NULL$$ && ($cell$$inline_7692_index$$inline_7691$$ = {row:this.$getRowIndex$($cell$$inline_7692_index$$inline_7691$$.parentNode), column:this.$getCellIndex$($cell$$inline_7692_index$$inline_7691$$)}, $JSCompiler_StaticMethods_extendSelection$$(this, $cell$$inline_7692_index$$inline_7691$$));
    this.$fireSelectionEvent$($event$$679$$)
  }
};
$JSCompiler_prototypeAlias$$.$handleDatabodyMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseUp$$() {
  this.$m_databodyDragState$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$handleDatabodyKeyDown$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyKeyDown$$($dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$) {
  var $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$;
  if(!(this.$m_active$ == $JSCompiler_alias_NULL$$ && this.$m_activeHeader$ == $JSCompiler_alias_NULL$$)) {
    if(this.$m_activeHeader$ != $JSCompiler_alias_NULL$$) {
      if(this.$m_activeHeader$.elem == document.activeElement) {
        var $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$;
        if(this.$m_activeHeader$ != $JSCompiler_alias_NULL$$) {
          if($axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ = $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$.keyCode, $JSCompiler_StaticMethods_isArrowKey$$($axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$)) {
            $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$ = $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$;
            var $elem$$inline_9943_rowKey$$inline_7721_shiftKey$$inline_7705$$;
            if($JSCompiler_StaticMethods_isFetchComplete$$(this)) {
              switch(this.$getResources$().isRTLMode() && (37 == $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$ ? $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$ = 39 : 39 == $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$ && ($dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$ = 37)), $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ = 
              this.$m_activeHeader$.axis, $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ = this.$m_activeHeader$.index, $elem$$inline_9943_rowKey$$inline_7721_shiftKey$$inline_7705$$ = this.$m_activeHeader$.elem, $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$) {
                case 37:
                  "column" === $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ && 0 < $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ && ($JSCompiler_StaticMethods__setActiveHeader$$(this, 
                  $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ - 1, $elem$$inline_9943_rowKey$$inline_7721_shiftKey$$inline_7705$$.previousSibling), $JSCompiler_StaticMethods__scrollToActiveHeader$$(this));
                  break;
                case 39:
                  if("row" === $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$) {
                    $JSCompiler_StaticMethods__setActiveHeader$$(this, -1), this.$m_activeHeader$ = $JSCompiler_alias_NULL$$, $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$ = this.createIndex($JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$, 0), $JSCompiler_StaticMethods__isSelectionEnabled$$(this) ? this.$selectAndFocus$($dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$) : 
                    this.$activeAndFocus$($dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$)
                  }else {
                    if($JSCompiler_StaticMethods__isCountUnknown$$(this, "column") || $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ + 1 < this.$m_dataSource$.getCount("column")) {
                      $JSCompiler_StaticMethods__setActiveHeader$$(this, $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ + 1, $elem$$inline_9943_rowKey$$inline_7721_shiftKey$$inline_7705$$.nextSibling), $JSCompiler_StaticMethods__scrollToActiveHeader$$(this)
                    }
                  }
                  break;
                case 38:
                  "row" === $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ && 0 < $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ && ($JSCompiler_StaticMethods__setActiveHeader$$(this, 
                  $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ - 1, $elem$$inline_9943_rowKey$$inline_7721_shiftKey$$inline_7705$$.previousSibling), $JSCompiler_StaticMethods__scrollToActiveHeader$$(this));
                  break;
                case 40:
                  if("column" === $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$) {
                    $JSCompiler_StaticMethods__setActiveHeader$$(this, -1), this.$m_activeHeader$ = $JSCompiler_alias_NULL$$, $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$ = this.createIndex(0, $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$), $JSCompiler_StaticMethods__isSelectionEnabled$$(this) ? this.$selectAndFocus$($dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$) : 
                    this.$activeAndFocus$($dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$)
                  }else {
                    if($JSCompiler_StaticMethods__isCountUnknown$$(this, "row") || $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ + 1 < this.$m_dataSource$.getCount("row")) {
                      $JSCompiler_StaticMethods__setActiveHeader$$(this, $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ + 1, $elem$$inline_9943_rowKey$$inline_7721_shiftKey$$inline_7705$$.nextSibling), $JSCompiler_StaticMethods__scrollToActiveHeader$$(this)
                    }
                  }
              }
            }
          }else {
            32 == $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ ? $JSCompiler_StaticMethods__isSelectionEnabled$$(this) && $JSCompiler_StaticMethods_isMultipleSelection$$(this) && ($axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ = 
            this.$m_activeHeader$.axis, $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ = this.$m_activeHeader$.index, "row" === $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ ? 
            $JSCompiler_StaticMethods__selectEntireRow$$(this, $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$, $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$) : "column" === $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ && 
            $JSCompiler_StaticMethods__selectEntireColumn$$(this, $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$, $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$)) : 13 == $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ && 
            ($axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ = this.$m_activeHeader$.elem, "true" == $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$.getAttribute(this.$getResources$().getMappedAttribute("sortable")) && 
            ($JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ = $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$.getAttribute(this.$getResources$().getMappedAttribute("sortDir")), 
            $JSCompiler_StaticMethods__doHeaderSort$$(this, $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$, $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$, $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ == 
            $JSCompiler_alias_NULL$$ || "descending" === $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ ? "ascending" : "descending")))
          }
        }
      }
    }else {
      if($axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ = $JSCompiler_StaticMethods_getElementsInRange$$(this, this.createRange(this.$m_active$)), !($axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ == 
      $JSCompiler_alias_NULL$$ || $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$[0] != document.activeElement)) {
        if($JSCompiler_StaticMethods__isSelectionEnabled$$(this)) {
          if($axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ = $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$.keyCode, "actionable" == this.$m_keyMode$) {
            27 == $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ && ($JSCompiler_StaticMethods_setActionableMode$$(this, $JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_highlightActive$$(this));
            if($JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ = $JSCompiler_StaticMethods_isArrowKey$$($axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$)) {
              $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ = $JSCompiler_StaticMethods_findCell$$(this, $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$.target), $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ = !(0 < $JSCompiler_StaticMethods_getFocusableElementsInNode$$($JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$).length)
            }
            $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ && ($JSCompiler_StaticMethods_setActionableMode$$(this, $JSCompiler_alias_FALSE$$), $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ = $JSCompiler_StaticMethods_ctrlEquivalent$$(this.$m_utils$, $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$), 
            $elem$$inline_9943_rowKey$$inline_7721_shiftKey$$inline_7705$$ = $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$.shiftKey, ($axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$$(this, 
            $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$, $elem$$inline_9943_rowKey$$inline_7721_shiftKey$$inline_7705$$ && !$JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ && 
            $JSCompiler_StaticMethods_isMultipleSelection$$(this))) && this.$fireSelectionEvent$($dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$))
          }else {
            if(113 == $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ || 13 == $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$) {
              $JSCompiler_StaticMethods_setActionableMode$$(this, $JSCompiler_alias_TRUE$$), $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ = $JSCompiler_StaticMethods_findCell$$(this, $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$.target), 
              $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ = $JSCompiler_StaticMethods_getFocusableElementsInNode$$($axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$), 
              0 < $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$.length && $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$[0].focus()
            }else {
              if(9 == $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$) {
                $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$.preventDefault(), $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$.shiftKey ? $JSCompiler_StaticMethods_focusPrevElementOutsideGrid$$(this) : $JSCompiler_StaticMethods_focusNextElementOutsideGrid$$(this)
              }else {
                if($JSCompiler_StaticMethods_isArrowKey$$($axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$) || 36 == $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ || 
                35 == $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$) {
                  $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ = $JSCompiler_StaticMethods_ctrlEquivalent$$(this.$m_utils$, $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$), $elem$$inline_9943_rowKey$$inline_7721_shiftKey$$inline_7705$$ = $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$.shiftKey, ($axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ = 
                  $JSCompiler_StaticMethods_handleCellArrowKeys$$(this, $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$, $elem$$inline_9943_rowKey$$inline_7721_shiftKey$$inline_7705$$ && !$JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ && 
                  $JSCompiler_StaticMethods_isMultipleSelection$$(this))) && this.$fireSelectionEvent$($dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$)
                }else {
                  if($dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$.shiftKey && 119 == $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$) {
                    this.$m_discontiguousSelection$ = !this.$m_discontiguousSelection$
                  }else {
                    if(32 == $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ && ($JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ = $JSCompiler_StaticMethods_ctrlEquivalent$$(this.$m_utils$, 
                    $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$), $elem$$inline_9943_rowKey$$inline_7721_shiftKey$$inline_7705$$ = $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$.shiftKey, "cell" == this.$m_options$.$getSelectionMode$() && $JSCompiler_StaticMethods_isMultipleSelection$$(this) && ($elem$$inline_9943_rowKey$$inline_7721_shiftKey$$inline_7705$$ && !$JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ || 
                    $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$))) {
                      $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ ? ($axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ = this.$m_active$.column, $JSCompiler_StaticMethods__selectEntireColumn$$(this, 
                      $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$, $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$)) : ($axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ = 
                      this.$m_active$.row, $JSCompiler_StaticMethods__selectEntireRow$$(this, $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$, $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$))
                    }
                  }
                }
              }
            }
          }
        }else {
          $JSCompiler_StaticMethods__isFocusableElement$$($dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$.target) || ($axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ = $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$.keyCode, 
          $JSCompiler_StaticMethods_isArrowKey$$($axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$) && $JSCompiler_StaticMethods_handleCellArrowKeys$$(this, $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$, 
          $JSCompiler_alias_FALSE$$))
        }
        $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ = $JSCompiler_StaticMethods_findCell$$(this, $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$.target);
        if($axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ != $JSCompiler_alias_NULL$$ && ($axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ = 
        $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$.parentNode, $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ = $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$.getAttribute(this.$getResources$().getMappedAttribute("expanderIndex")), 
        $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ != $JSCompiler_alias_NULL$$ && !isNaN($JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$) && ($JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ = 
        $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$.keyCode, (37 === $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ || 39 === $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$) && $JSCompiler_StaticMethods_ctrlEquivalent$$(this.$m_utils$, 
        $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$)))) {
          $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$ = this.$m_dataSource$, $elem$$inline_9943_rowKey$$inline_7721_shiftKey$$inline_7705$$ = $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$.getAttribute(this.$getResources$().getMappedAttribute("key")), 
          $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ = $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$.getAttribute("aria-expanded"), 
          39 === $JSCompiler_temp$$7927_ctrlKey$$inline_7704_direction$$inline_9949_elem$$inline_9952_index$$inline_7697_index$$inline_7718_index$$inline_9942_keyCode$$inline_7719$$ ? "false" === $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ && $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$.expand($elem$$inline_9943_rowKey$$inline_7721_shiftKey$$inline_7705$$) : 
          "true" === $axis$$inline_7696_axis$$inline_9941_cell$$15_cell$$inline_7716_column$$inline_7706_elem$$inline_7698_elem$$inline_9955_elems$$inline_9956_expanded$$inline_7722_keyCode$$inline_7699_keyCode$$inline_7703_keyCode$$inline_7712_processed$$inline_7708_row$$inline_7707_row$$inline_7717$$ && $dataSource$$inline_7720_event$$681_keyCode$$inline_9940_newCellIndex$$inline_9944$$.collapse($elem$$inline_9943_rowKey$$inline_7721_shiftKey$$inline_7705$$)
        }
      }
    }
  }
};
function $JSCompiler_StaticMethods_findPos$$($JSCompiler_StaticMethods_findPos$self$$, $element$$20$$) {
  var $parentPos$$2$$, $cs$$inline_7725_element$$inline_7724_transform$$1_transform$$inline_7726_transformX$$inline_7728$$;
  if($element$$20$$) {
    $parentPos$$2$$ = $JSCompiler_StaticMethods_findPos$$($JSCompiler_StaticMethods_findPos$self$$, $element$$20$$.offsetParent);
    $cs$$inline_7725_element$$inline_7724_transform$$1_transform$$inline_7726_transformX$$inline_7728$$ = $element$$20$$.parentNode;
    var $matrixArray$$inline_7727_transformZ$$inline_7730$$, $transformY$$inline_7729$$;
    $cs$$inline_7725_element$$inline_7724_transform$$1_transform$$inline_7726_transformX$$inline_7728$$ ? ($cs$$inline_7725_element$$inline_7724_transform$$1_transform$$inline_7726_transformX$$inline_7728$$ = document.defaultView.getComputedStyle($cs$$inline_7725_element$$inline_7724_transform$$1_transform$$inline_7726_transformX$$inline_7728$$, $JSCompiler_alias_NULL$$), $cs$$inline_7725_element$$inline_7724_transform$$1_transform$$inline_7726_transformX$$inline_7728$$ = $cs$$inline_7725_element$$inline_7724_transform$$1_transform$$inline_7726_transformX$$inline_7728$$.getPropertyValue("-webkit-transform") || 
    $cs$$inline_7725_element$$inline_7724_transform$$1_transform$$inline_7726_transformX$$inline_7728$$.getPropertyValue("-moz-transform") || $cs$$inline_7725_element$$inline_7724_transform$$1_transform$$inline_7726_transformX$$inline_7728$$.getPropertyValue("-ms-transform") || $cs$$inline_7725_element$$inline_7724_transform$$1_transform$$inline_7726_transformX$$inline_7728$$.getPropertyValue("-o-transform") || $cs$$inline_7725_element$$inline_7724_transform$$1_transform$$inline_7726_transformX$$inline_7728$$.getPropertyValue("transform"), 
    $matrixArray$$inline_7727_transformZ$$inline_7730$$ = $cs$$inline_7725_element$$inline_7724_transform$$1_transform$$inline_7726_transformX$$inline_7728$$.substr(7, $cs$$inline_7725_element$$inline_7724_transform$$1_transform$$inline_7726_transformX$$inline_7728$$.length - 8).split(", "), $cs$$inline_7725_element$$inline_7724_transform$$1_transform$$inline_7726_transformX$$inline_7728$$ = isNaN(parseInt($matrixArray$$inline_7727_transformZ$$inline_7730$$[4], 10)) ? 0 : parseInt($matrixArray$$inline_7727_transformZ$$inline_7730$$[4], 
    10), $transformY$$inline_7729$$ = isNaN(parseInt($matrixArray$$inline_7727_transformZ$$inline_7730$$[5], 10)) ? 0 : parseInt($matrixArray$$inline_7727_transformZ$$inline_7730$$[5], 10), $matrixArray$$inline_7727_transformZ$$inline_7730$$ = isNaN(parseInt($matrixArray$$inline_7727_transformZ$$inline_7730$$[6], 10)) ? 0 : parseInt($matrixArray$$inline_7727_transformZ$$inline_7730$$[6], 10), $cs$$inline_7725_element$$inline_7724_transform$$1_transform$$inline_7726_transformX$$inline_7728$$ = [$cs$$inline_7725_element$$inline_7724_transform$$1_transform$$inline_7726_transformX$$inline_7728$$, 
    $transformY$$inline_7729$$, $matrixArray$$inline_7727_transformZ$$inline_7730$$]) : $cs$$inline_7725_element$$inline_7724_transform$$1_transform$$inline_7726_transformX$$inline_7728$$ = [0, 0, 0];
    return[parseInt($parentPos$$2$$[0], 10) + parseInt($element$$20$$.offsetLeft, 10) + $cs$$inline_7725_element$$inline_7724_transform$$1_transform$$inline_7726_transformX$$inline_7728$$[0], parseInt($parentPos$$2$$[1], 10) + parseInt($element$$20$$.offsetTop, 10) + $cs$$inline_7725_element$$inline_7724_transform$$1_transform$$inline_7726_transformX$$inline_7728$$[1]]
  }
  return[0, 0]
}
$JSCompiler_prototypeAlias$$.$handleDatabodyMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseWheel$$($deltaY$$20_event$$682$$) {
  var $deltaX$$21$$;
  $deltaY$$20_event$$682$$.preventDefault();
  $deltaX$$21$$ = 0;
  $deltaY$$20_event$$682$$.wheelDeltaX ? ($deltaX$$21$$ = $deltaY$$20_event$$682$$.wheelDeltaX, $deltaY$$20_event$$682$$ = $deltaY$$20_event$$682$$.wheelDeltaY) : $deltaY$$20_event$$682$$ = $deltaY$$20_event$$682$$.wheelDelta;
  $JSCompiler_StaticMethods_scrollDelta$$(this, $deltaX$$21$$, $deltaY$$20_event$$682$$)
};
$JSCompiler_prototypeAlias$$.$handleTouchStart$ = function $$JSCompiler_prototypeAlias$$$$handleTouchStart$$($event$$683$$) {
  $event$$683$$.preventDefault();
  1 == $event$$683$$.touches.length ? (this.$m_startX$ = $event$$683$$.touches[0].pageX, this.$m_startY$ = $event$$683$$.touches[0].pageY, this.$m_currentX$ = this.$m_startX$, this.$m_currentY$ = this.$m_startY$, this.$m_prevX$ = this.$m_startX$, this.$m_prevY$ = this.$m_startY$, this.$m_moveCount$ = 0, this.$m_touchActive$ = $JSCompiler_alias_TRUE$$) : this.$handleTouchCancel$()
};
$JSCompiler_prototypeAlias$$.$handleTouchMove$ = function $$JSCompiler_prototypeAlias$$$$handleTouchMove$$($diffX$$9_event$$684$$) {
  var $diffY$$10$$;
  $diffX$$9_event$$684$$.preventDefault();
  this.$m_touchActive$ ? (this.$m_currentX$ = $diffX$$9_event$$684$$.touches[0].pageX, this.$m_currentY$ = $diffX$$9_event$$684$$.touches[0].pageY, $diffX$$9_event$$684$$ = this.$m_currentX$ - this.$m_prevX$, $diffY$$10$$ = this.$m_currentY$ - this.$m_prevY$, 10 > Math.abs($diffX$$9_event$$684$$) && 10 > Math.abs($diffY$$10$$) ? ($JSCompiler_StaticMethods_scrollDelta$$(this, $diffX$$9_event$$684$$, $diffY$$10$$), this.$m_moveCount$++) : (this.$m_moveCount$ = 0, this.$m_startX$ = this.$m_currentX$, 
  this.$m_startY$ = this.$m_currentY$), this.$m_prevX$ = this.$m_currentX$, this.$m_prevY$ = this.$m_currentY$) : this.$handleTouchCancel$()
};
$JSCompiler_prototypeAlias$$.$handleTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$handleTouchEnd$$($event$$685_swipeLength$$) {
  var $swipeAngle_swipeAngle$$inline_7737$$;
  $event$$685_swipeLength$$.preventDefault();
  if(this.$m_touchActive$) {
    if($JSCompiler_StaticMethods__isSelectionEnabled$$(this) && this.$m_currentX$ == this.$m_startX$ && this.$m_currentY$ == this.$m_startY$) {
      $JSCompiler_StaticMethods_handleDatabodyClickSelection$$(this, $event$$685_swipeLength$$);
      return
    }
    if(1 < this.$m_moveCount$) {
      this.$handleTouchCancel$();
      return
    }
    $event$$685_swipeLength$$ = Math.round(Math.sqrt(Math.pow(this.$m_currentX$ - this.$m_startX$, 2) + Math.pow(this.$m_currentY$ - this.$m_startY$, 2)));
    0 < $event$$685_swipeLength$$ && ($swipeAngle_swipeAngle$$inline_7737$$ = Math.round(180 * Math.atan2(this.$m_currentY$ - this.$m_startY$, this.$m_startX$ - this.$m_currentX$) / Math.PI), 0 > $swipeAngle_swipeAngle$$inline_7737$$ && ($swipeAngle_swipeAngle$$inline_7737$$ = 360 - Math.abs($swipeAngle_swipeAngle$$inline_7737$$)), this.$handleSwipe$($event$$685_swipeLength$$, 45 >= $swipeAngle_swipeAngle$$inline_7737$$ && 0 <= $swipeAngle_swipeAngle$$inline_7737$$ ? "left" : 360 >= $swipeAngle_swipeAngle$$inline_7737$$ && 
    315 <= $swipeAngle_swipeAngle$$inline_7737$$ ? "left" : 135 <= $swipeAngle_swipeAngle$$inline_7737$$ && 225 >= $swipeAngle_swipeAngle$$inline_7737$$ ? "right" : 45 < $swipeAngle_swipeAngle$$inline_7737$$ && 135 > $swipeAngle_swipeAngle$$inline_7737$$ ? "down" : "up"))
  }
  this.$handleTouchCancel$()
};
$JSCompiler_prototypeAlias$$.$handleTouchCancel$ = function $$JSCompiler_prototypeAlias$$$$handleTouchCancel$$() {
  this.$m_touchActive$ = $JSCompiler_alias_FALSE$$;
  this.$m_currentY$ = this.$m_currentX$ = this.$m_prevY$ = this.$m_prevX$ = this.$m_startY$ = this.$m_startX$ = this.$m_moveCount$ = 0
};
$JSCompiler_prototypeAlias$$.$handleSwipe$ = function $$JSCompiler_prototypeAlias$$$$handleSwipe$$($swipeLength$$1$$, $swipeDirection$$) {
  $swipeLength$$1$$ += 10;
  "down" == $swipeDirection$$ ? $JSCompiler_StaticMethods_scrollDelta$$(this, 0, $swipeLength$$1$$) : "up" == $swipeDirection$$ ? $JSCompiler_StaticMethods_scrollDelta$$(this, 0, -$swipeLength$$1$$) : "left" == $swipeDirection$$ ? $JSCompiler_StaticMethods_scrollDelta$$(this, -$swipeLength$$1$$, 0) : "right" == $swipeDirection$$ && $JSCompiler_StaticMethods_scrollDelta$$(this, $swipeLength$$1$$, 0)
};
$JSCompiler_prototypeAlias$$.fireEvent = function $$JSCompiler_prototypeAlias$$$fireEvent$($functionName$$, $details$$4$$) {
  var $callback$$153$$;
  $functionName$$ == $JSCompiler_alias_NULL$$ || $details$$4$$ == $JSCompiler_alias_NULL$$ || ($callback$$153$$ = this.$callbacks$[$functionName$$], $callback$$153$$ != $JSCompiler_alias_NULL$$ && $callback$$153$$($details$$4$$))
};
$JSCompiler_prototypeAlias$$.addListener = function $$JSCompiler_prototypeAlias$$$addListener$($functionName$$1$$, $handler$$55$$) {
  this.$callbacks$[$functionName$$1$$] = $handler$$55$$
};
function $JSCompiler_StaticMethods_setElementHeight$$($elem$$49$$, $height$$139$$) {
  $elem$$49$$.style.height = $height$$139$$ + "px"
}
function $JSCompiler_StaticMethods_getElementHeight$$($elem$$50$$) {
  return parseInt($elem$$50$$.style.height, 10)
}
function $JSCompiler_StaticMethods_setElementWidth$$($elem$$51$$, $width$$155$$) {
  $elem$$51$$.style.width = $width$$155$$ + "px"
}
function $JSCompiler_StaticMethods_getElementWidth$$($elem$$52$$) {
  return parseInt($elem$$52$$.style.width, 10)
}
function $JSCompiler_StaticMethods_setElementDir$$($elem$$53$$, $pix$$, $dir$$21$$) {
  $elem$$53$$.style[$dir$$21$$] = $pix$$ + "px"
}
function $JSCompiler_StaticMethods_getElementDir$$($elem$$54$$, $dir$$22$$) {
  return parseInt($elem$$54$$.style[$dir$$22$$], 10)
}
function $JSCompiler_StaticMethods__isInViewport$$($JSCompiler_StaticMethods__isInViewport$self$$, $indexes$$4$$) {
  var $rowIndex$$11$$, $columnIndex$$7$$;
  $rowIndex$$11$$ = $indexes$$4$$.row;
  $columnIndex$$7$$ = $indexes$$4$$.column;
  return-1 === $rowIndex$$11$$ && -1 === $columnIndex$$7$$ ? -1 : -1 === $rowIndex$$11$$ ? $columnIndex$$7$$ < $JSCompiler_StaticMethods__isInViewport$self$$.$m_startCol$ ? 1 : $columnIndex$$7$$ > $JSCompiler_StaticMethods__isInViewport$self$$.$m_endCol$ ? 2 : 3 : -1 === $columnIndex$$7$$ ? $rowIndex$$11$$ < $JSCompiler_StaticMethods__isInViewport$self$$.$m_startRow$ ? 1 : $rowIndex$$11$$ > $JSCompiler_StaticMethods__isInViewport$self$$.$m_endRow$ ? 2 : 3 : $columnIndex$$7$$ >= $JSCompiler_StaticMethods__isInViewport$self$$.$m_startCol$ && 
  $columnIndex$$7$$ <= $JSCompiler_StaticMethods__isInViewport$self$$.$m_endCol$ && $rowIndex$$11$$ >= $JSCompiler_StaticMethods__isInViewport$self$$.$m_startRow$ && $rowIndex$$11$$ <= $JSCompiler_StaticMethods__isInViewport$self$$.$m_endRow$ ? 3 : -1
}
$JSCompiler_prototypeAlias$$.$handleModelEvent$ = function $$JSCompiler_prototypeAlias$$$$handleModelEvent$$($cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$) {
  var $columnRange$$inline_7742_i$$inline_7758_operation$$1_scrollerContent$$inline_7765$$, $databodyContentHeight$$inline_7766_indexes$$inline_7751_keys$$2_rowRange$$inline_7741_rowRange$$inline_7752_scrollTop$$inline_7747_totalHeight$$inline_7761$$;
  $columnRange$$inline_7742_i$$inline_7758_operation$$1_scrollerContent$$inline_7765$$ = $cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$.operation;
  $databodyContentHeight$$inline_7766_indexes$$inline_7751_keys$$2_rowRange$$inline_7741_rowRange$$inline_7752_scrollTop$$inline_7747_totalHeight$$inline_7761$$ = $cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$.keys;
  if("insert" === $columnRange$$inline_7742_i$$inline_7758_operation$$1_scrollerContent$$inline_7765$$) {
    $cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$ = $cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$.result, $cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$ != $JSCompiler_alias_NULL$$ ? ($databodyContentHeight$$inline_7766_indexes$$inline_7751_keys$$2_rowRange$$inline_7741_rowRange$$inline_7752_scrollTop$$inline_7747_totalHeight$$inline_7761$$ = 
    {axis:"row", start:$cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$.$getStart$("row"), count:$cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$.getCount("row")}, $columnRange$$inline_7742_i$$inline_7758_operation$$1_scrollerContent$$inline_7765$$ = {axis:"column", start:$cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$.$getStart$("column"), 
    count:$cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$.getCount("column")}, this.$_handleCellInsertsFetchSuccess$($cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$, [$databodyContentHeight$$inline_7766_indexes$$inline_7751_keys$$2_rowRange$$inline_7741_rowRange$$inline_7752_scrollTop$$inline_7747_totalHeight$$inline_7761$$, $columnRange$$inline_7742_i$$inline_7758_operation$$1_scrollerContent$$inline_7765$$])) : 
    ($cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$ = this.$m_dataSource$.indexes($databodyContentHeight$$inline_7766_indexes$$inline_7751_keys$$2_rowRange$$inline_7741_rowRange$$inline_7752_scrollTop$$inline_7747_totalHeight$$inline_7761$$), 3 === $JSCompiler_StaticMethods__isInViewport$$(this, $cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$) ? $databodyContentHeight$$inline_7766_indexes$$inline_7751_keys$$2_rowRange$$inline_7741_rowRange$$inline_7752_scrollTop$$inline_7747_totalHeight$$inline_7761$$.row && 
    this.fetchCells(this.$m_databody$, this.$m_scroller$, $cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$.row, this.$m_startCol$, 1, this.$m_endCol$ - this.$m_startCol$, {success:this.$_handleCellInsertsFetchSuccess$}) : ($databodyContentHeight$$inline_7766_indexes$$inline_7751_keys$$2_rowRange$$inline_7741_rowRange$$inline_7752_scrollTop$$inline_7747_totalHeight$$inline_7761$$ = $cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$.row * 
    this.$m_avgRowHeight$, this.$m_scroller$.scrollTop = $databodyContentHeight$$inline_7766_indexes$$inline_7751_keys$$2_rowRange$$inline_7741_rowRange$$inline_7752_scrollTop$$inline_7747_totalHeight$$inline_7761$$))
  }else {
    if("update" === $columnRange$$inline_7742_i$$inline_7758_operation$$1_scrollerContent$$inline_7765$$) {
      $databodyContentHeight$$inline_7766_indexes$$inline_7751_keys$$2_rowRange$$inline_7741_rowRange$$inline_7752_scrollTop$$inline_7747_totalHeight$$inline_7761$$ = this.$m_dataSource$.indexes($databodyContentHeight$$inline_7766_indexes$$inline_7751_keys$$2_rowRange$$inline_7741_rowRange$$inline_7752_scrollTop$$inline_7747_totalHeight$$inline_7761$$), 3 === $JSCompiler_StaticMethods__isInViewport$$(this, $databodyContentHeight$$inline_7766_indexes$$inline_7751_keys$$2_rowRange$$inline_7741_rowRange$$inline_7752_scrollTop$$inline_7747_totalHeight$$inline_7761$$) && 
      ($databodyContentHeight$$inline_7766_indexes$$inline_7751_keys$$2_rowRange$$inline_7741_rowRange$$inline_7752_scrollTop$$inline_7747_totalHeight$$inline_7761$$ = {axis:"row", start:$databodyContentHeight$$inline_7766_indexes$$inline_7751_keys$$2_rowRange$$inline_7741_rowRange$$inline_7752_scrollTop$$inline_7747_totalHeight$$inline_7761$$.row, count:1}, $cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$ = {axis:"column", start:this.$m_startCol$, 
      count:this.$m_endCol$ - this.$m_startCol$}, $JSCompiler_StaticMethods_showStatusText$$(this), this.$m_dataSource$.fetchCells([$databodyContentHeight$$inline_7766_indexes$$inline_7751_keys$$2_rowRange$$inline_7741_rowRange$$inline_7752_scrollTop$$inline_7747_totalHeight$$inline_7761$$, $cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$], {success:this.$_handleCellUpdatesFetchSuccess$, error:this.$handleHeadersFetchError$}, {success:this, 
      error:this}))
    }else {
      if("delete" === $columnRange$$inline_7742_i$$inline_7758_operation$$1_scrollerContent$$inline_7765$$) {
        $cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$ = $databodyContentHeight$$inline_7766_indexes$$inline_7751_keys$$2_rowRange$$inline_7741_rowRange$$inline_7752_scrollTop$$inline_7747_totalHeight$$inline_7761$$;
        var $key$$inline_7757_key$$inline_9959_row$$inline_7760_rowKey$$inline_7759$$, $height$$inline_7762_rows$$inline_9960$$, $referenceRow$$inline_7763_row$$inline_9961$$;
        Array.isArray($cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$) || ($cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$ = Array($cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$));
        for($columnRange$$inline_7742_i$$inline_7758_operation$$1_scrollerContent$$inline_7765$$ = $databodyContentHeight$$inline_7766_indexes$$inline_7751_keys$$2_rowRange$$inline_7741_rowRange$$inline_7752_scrollTop$$inline_7747_totalHeight$$inline_7761$$ = 0;$columnRange$$inline_7742_i$$inline_7758_operation$$1_scrollerContent$$inline_7765$$ < $cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$.length;$columnRange$$inline_7742_i$$inline_7758_operation$$1_scrollerContent$$inline_7765$$++) {
          if($key$$inline_7757_key$$inline_9959_row$$inline_7760_rowKey$$inline_7759$$ = $cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$[$columnRange$$inline_7742_i$$inline_7758_operation$$1_scrollerContent$$inline_7765$$], $key$$inline_7757_key$$inline_9959_row$$inline_7760_rowKey$$inline_7759$$.row) {
            $key$$inline_7757_key$$inline_9959_row$$inline_7760_rowKey$$inline_7759$$ = $key$$inline_7757_key$$inline_9959_row$$inline_7760_rowKey$$inline_7759$$.row;
            a: {
              var $i$$inline_9962$$ = $referenceRow$$inline_7763_row$$inline_9961$$ = $height$$inline_7762_rows$$inline_9960$$ = $JSCompiler_alias_VOID$$, $rowKey$$inline_9963$$ = $JSCompiler_alias_VOID$$, $keyAttribute$$inline_9964$$ = $JSCompiler_alias_VOID$$;
              if(this.$m_databody$ != $JSCompiler_alias_NULL$$) {
                $height$$inline_7762_rows$$inline_9960$$ = this.$m_databody$.firstChild.childNodes;
                $keyAttribute$$inline_9964$$ = this.$getResources$().getMappedAttribute("key");
                for($i$$inline_9962$$ = 1;$i$$inline_9962$$ < $height$$inline_7762_rows$$inline_9960$$.length;$i$$inline_9962$$++) {
                  if($referenceRow$$inline_7763_row$$inline_9961$$ = $height$$inline_7762_rows$$inline_9960$$[$i$$inline_9962$$], $rowKey$$inline_9963$$ = $referenceRow$$inline_7763_row$$inline_9961$$.getAttribute($keyAttribute$$inline_9964$$), $rowKey$$inline_9963$$ == $key$$inline_7757_key$$inline_9959_row$$inline_7760_rowKey$$inline_7759$$) {
                    $key$$inline_7757_key$$inline_9959_row$$inline_7760_rowKey$$inline_7759$$ = $referenceRow$$inline_7763_row$$inline_9961$$;
                    break a
                  }
                }
              }
              $key$$inline_7757_key$$inline_9959_row$$inline_7760_rowKey$$inline_7759$$ = $JSCompiler_alias_NULL$$
            }
            $key$$inline_7757_key$$inline_9959_row$$inline_7760_rowKey$$inline_7759$$ != $JSCompiler_alias_NULL$$ ? ($height$$inline_7762_rows$$inline_9960$$ = $JSCompiler_StaticMethods_getElementHeight$$($key$$inline_7757_key$$inline_9959_row$$inline_7760_rowKey$$inline_7759$$), $referenceRow$$inline_7763_row$$inline_9961$$ = $key$$inline_7757_key$$inline_9959_row$$inline_7760_rowKey$$inline_7759$$.nextSibling, $JSCompiler_StaticMethods_pushRowsDown$$($referenceRow$$inline_7763_row$$inline_9961$$, 
            0 - $height$$inline_7762_rows$$inline_9960$$), $key$$inline_7757_key$$inline_9959_row$$inline_7760_rowKey$$inline_7759$$.parentNode.removeChild($key$$inline_7757_key$$inline_9959_row$$inline_7760_rowKey$$inline_7759$$), $key$$inline_7757_key$$inline_9959_row$$inline_7760_rowKey$$inline_7759$$.style.display = "none") : $height$$inline_7762_rows$$inline_9960$$ = this.$m_avgRowHeight$;
            this.$m_endRow$ -= 1;
            this.$m_endRowPixel$ -= $height$$inline_7762_rows$$inline_9960$$;
            $databodyContentHeight$$inline_7766_indexes$$inline_7751_keys$$2_rowRange$$inline_7741_rowRange$$inline_7752_scrollTop$$inline_7747_totalHeight$$inline_7761$$ += $height$$inline_7762_rows$$inline_9960$$
          }
        }
        $cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$ = this.$m_databody$.firstChild;
        $columnRange$$inline_7742_i$$inline_7758_operation$$1_scrollerContent$$inline_7765$$ = this.$m_scroller$.firstChild;
        $databodyContentHeight$$inline_7766_indexes$$inline_7751_keys$$2_rowRange$$inline_7741_rowRange$$inline_7752_scrollTop$$inline_7747_totalHeight$$inline_7761$$ = $JSCompiler_StaticMethods_getElementHeight$$($cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$) - $databodyContentHeight$$inline_7766_indexes$$inline_7751_keys$$2_rowRange$$inline_7741_rowRange$$inline_7752_scrollTop$$inline_7747_totalHeight$$inline_7761$$;
        $JSCompiler_StaticMethods_setElementHeight$$($cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$, $databodyContentHeight$$inline_7766_indexes$$inline_7751_keys$$2_rowRange$$inline_7741_rowRange$$inline_7752_scrollTop$$inline_7747_totalHeight$$inline_7761$$);
        $JSCompiler_StaticMethods_setElementHeight$$($columnRange$$inline_7742_i$$inline_7758_operation$$1_scrollerContent$$inline_7765$$, $databodyContentHeight$$inline_7766_indexes$$inline_7751_keys$$2_rowRange$$inline_7741_rowRange$$inline_7752_scrollTop$$inline_7747_totalHeight$$inline_7761$$);
        $JSCompiler_StaticMethods_resizeGrid$$(this);
        this.$m_stopRowFetch$ = $JSCompiler_alias_FALSE$$;
        $JSCompiler_StaticMethods_fillViewport$$(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$)
      }else {
        "refresh" === $columnRange$$inline_7742_i$$inline_7758_operation$$1_scrollerContent$$inline_7765$$ ? $JSCompiler_StaticMethods_handleLongScroll$$(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$) : "sync" === $columnRange$$inline_7742_i$$inline_7758_operation$$1_scrollerContent$$inline_7765$$ && (this.$m_fetching$ = {}, this.$m_endColHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_endColPixel$ = this.$m_startColPixel$ = this.$m_endColHeader$ = this.$m_startColHeader$ = this.$m_endCol$ = 
        this.$m_startCol$ = this.$m_endRowHeaderPixel$ = this.$m_startRowHeaderPixel$ = this.$m_endRowPixel$ = this.$m_startRowPixel$ = this.$m_endRowHeader$ = this.$m_startRowHeader$ = this.$m_endRow$ = this.$m_startRow$ = 0, this.$m_cachedRowHeight$ = [], this.$m_cachedColumnWidth$ = [], this.$m_cachedColumnWidthStartIndex$ = this.$m_cachedRowHeightStartIndex$ = 0, this.$m_captureScrolling$ = this.$m_stopDatabodyScroll$ = $JSCompiler_alias_FALSE$$, this.$m_isEstimateColumnCount$ = this.$m_isEstimateRowCount$ = 
        this.$m_avgColWidth$ = this.$m_avgRowHeight$ = $JSCompiler_alias_VOID$$, this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = $JSCompiler_alias_FALSE$$, this.$m_active$ = this.$m_selection$ = $JSCompiler_alias_NULL$$, this.$m_initialized$ ? (this.fetchHeaders("row", 0, this.$m_rowHeader$, $JSCompiler_alias_VOID$$, {success:function($cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$, 
        $columnRange$$inline_7742_i$$inline_7758_operation$$1_scrollerContent$$inline_7765$$) {
          $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$(this, $cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$, $columnRange$$inline_7742_i$$inline_7758_operation$$1_scrollerContent$$inline_7765$$, 0)
        }}), this.fetchHeaders("column", 0, this.$m_colHeader$, $JSCompiler_alias_VOID$$, {success:function($cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$, $columnRange$$inline_7742_i$$inline_7758_operation$$1_scrollerContent$$inline_7765$$) {
          this.$m_colHeader$.firstChild.innerHTML = "";
          this.$handleHeadersFetchSuccess$($cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$, $columnRange$$inline_7742_i$$inline_7758_operation$$1_scrollerContent$$inline_7765$$)
        }}), this.fetchCells(this.$m_databody$, this.$m_scroller$, 0, 0, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, {success:function($cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$, $columnRange$$inline_7742_i$$inline_7758_operation$$1_scrollerContent$$inline_7765$$) {
          $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$(this, $cellSet$$8_columnRange$$inline_7753_databodyContent$$inline_7764_event$$687_indexes$$inline_7746_keys$$inline_7756$$, $columnRange$$inline_7742_i$$inline_7758_operation$$1_scrollerContent$$inline_7765$$, 0)
        }}), $JSCompiler_StaticMethods_setInitialScrollPosition$$(this)) : (this.fetchHeaders("column", 0, this.$m_colHeader$), this.fetchHeaders("row", 0, this.$m_rowHeader$), this.fetchCells(this.$m_databody$, this.$m_scroller$, 0, 0)))
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$_handleCellInsertsFetchSuccess$ = function $$JSCompiler_prototypeAlias$$$$_handleCellInsertsFetchSuccess$$($cellSet$$9$$, $cellRanges$$1$$) {
  this.$m_initialized$ = $JSCompiler_alias_FALSE$$;
  this.$handleCellsFetchSuccess$($cellSet$$9$$, $cellRanges$$1$$, this.$m_endRow$ > $cellRanges$$1$$[0].start);
  var $i$$inline_9976_i$$inline_9983_row$$inline_7780_rowTop$$inline_7783$$, $diff$$inline_7784_rows$$inline_9975_rows$$inline_9982_viewportBottom$$inline_7788_viewportTop$$inline_7781$$, $columnBandingInterval$$inline_9981_rowBandingInterval$$inline_9974_viewportBottom$$inline_7782_viewportTop$$inline_7787$$;
  $i$$inline_9976_i$$inline_9983_row$$inline_7780_rowTop$$inline_7783$$ = this.$m_databody$.firstChild.childNodes[$cellRanges$$1$$[0].start - this.$m_startRow$ + 1];
  $i$$inline_9976_i$$inline_9983_row$$inline_7780_rowTop$$inline_7783$$ != $JSCompiler_alias_NULL$$ && ($diff$$inline_7784_rows$$inline_9975_rows$$inline_9982_viewportBottom$$inline_7788_viewportTop$$inline_7781$$ = this.$m_currentScrollTop$, $columnBandingInterval$$inline_9981_rowBandingInterval$$inline_9974_viewportBottom$$inline_7782_viewportTop$$inline_7787$$ = this.$m_currentScrollTop$ + $JSCompiler_StaticMethods_getElementHeight$$(this.$m_databody$), $i$$inline_9976_i$$inline_9983_row$$inline_7780_rowTop$$inline_7783$$ = 
  $i$$inline_9976_i$$inline_9983_row$$inline_7780_rowTop$$inline_7783$$.offsetTop, $diff$$inline_7784_rows$$inline_9975_rows$$inline_9982_viewportBottom$$inline_7788_viewportTop$$inline_7781$$ -= $i$$inline_9976_i$$inline_9983_row$$inline_7780_rowTop$$inline_7783$$, 0 < $diff$$inline_7784_rows$$inline_9975_rows$$inline_9982_viewportBottom$$inline_7788_viewportTop$$inline_7781$$ ? $JSCompiler_StaticMethods_scrollDelta$$(this, 0, $diff$$inline_7784_rows$$inline_9975_rows$$inline_9982_viewportBottom$$inline_7788_viewportTop$$inline_7781$$) : 
  ($diff$$inline_7784_rows$$inline_9975_rows$$inline_9982_viewportBottom$$inline_7788_viewportTop$$inline_7781$$ = $columnBandingInterval$$inline_9981_rowBandingInterval$$inline_9974_viewportBottom$$inline_7782_viewportTop$$inline_7787$$ - $i$$inline_9976_i$$inline_9983_row$$inline_7780_rowTop$$inline_7783$$, 0 > $diff$$inline_7784_rows$$inline_9975_rows$$inline_9982_viewportBottom$$inline_7788_viewportTop$$inline_7781$$ && $JSCompiler_StaticMethods_scrollDelta$$(this, 0, $diff$$inline_7784_rows$$inline_9975_rows$$inline_9982_viewportBottom$$inline_7788_viewportTop$$inline_7781$$)));
  if(!$JSCompiler_StaticMethods__isHighWatermarkScrolling$$(this)) {
    $columnBandingInterval$$inline_9981_rowBandingInterval$$inline_9974_viewportBottom$$inline_7782_viewportTop$$inline_7787$$ = this.$m_currentScrollTop$;
    $diff$$inline_7784_rows$$inline_9975_rows$$inline_9982_viewportBottom$$inline_7788_viewportTop$$inline_7781$$ = this.$m_currentScrollTop$ + $JSCompiler_StaticMethods_getElementHeight$$(this.$m_databody$);
    $columnBandingInterval$$inline_9981_rowBandingInterval$$inline_9974_viewportBottom$$inline_7782_viewportTop$$inline_7787$$ > this.$m_startRowPixel$ ? this.$m_endRow$ - this.$m_startRow$ > this.$MAX_ROW_THRESHOLD$ && $JSCompiler_StaticMethods_removeRowsFromTop$$(this, this.$m_databody$) : $diff$$inline_7784_rows$$inline_9975_rows$$inline_9982_viewportBottom$$inline_7788_viewportTop$$inline_7781$$ < this.$m_endRowPixel$ && this.$m_endRow$ - this.$m_startRow$ > this.$MAX_ROW_THRESHOLD$ && $JSCompiler_StaticMethods_removeRowsFromBottom$$(this, 
    this.$m_databody$);
    var $index$$inline_9977_index$$inline_9984$$, $bandingClass$$inline_9978_bandingClass$$inline_9985$$;
    $columnBandingInterval$$inline_9981_rowBandingInterval$$inline_9974_viewportBottom$$inline_7782_viewportTop$$inline_7787$$ = $JSCompiler_StaticMethods_getRowBandingInterval$$(this.$m_options$);
    if(0 < $columnBandingInterval$$inline_9981_rowBandingInterval$$inline_9974_viewportBottom$$inline_7782_viewportTop$$inline_7787$$) {
      $diff$$inline_7784_rows$$inline_9975_rows$$inline_9982_viewportBottom$$inline_7788_viewportTop$$inline_7781$$ = this.$m_databody$.firstChild.childNodes;
      $bandingClass$$inline_9978_bandingClass$$inline_9985$$ = this.$getResources$().getMappedStyle("banded");
      for($i$$inline_9976_i$$inline_9983_row$$inline_7780_rowTop$$inline_7783$$ = 1;$i$$inline_9976_i$$inline_9983_row$$inline_7780_rowTop$$inline_7783$$ < $diff$$inline_7784_rows$$inline_9975_rows$$inline_9982_viewportBottom$$inline_7788_viewportTop$$inline_7781$$.length;$i$$inline_9976_i$$inline_9983_row$$inline_7780_rowTop$$inline_7783$$++) {
        $index$$inline_9977_index$$inline_9984$$ = this.$m_startRow$ + $i$$inline_9976_i$$inline_9983_row$$inline_7780_rowTop$$inline_7783$$ - 1, 1 === Math.floor($index$$inline_9977_index$$inline_9984$$ / $columnBandingInterval$$inline_9981_rowBandingInterval$$inline_9974_viewportBottom$$inline_7782_viewportTop$$inline_7787$$) % 2 ? $JSCompiler_StaticMethods_containsCSSClassName$$($diff$$inline_7784_rows$$inline_9975_rows$$inline_9982_viewportBottom$$inline_7788_viewportTop$$inline_7781$$[$i$$inline_9976_i$$inline_9983_row$$inline_7780_rowTop$$inline_7783$$], 
        $bandingClass$$inline_9978_bandingClass$$inline_9985$$) || $JSCompiler_StaticMethods_addCSSClassName$$($diff$$inline_7784_rows$$inline_9975_rows$$inline_9982_viewportBottom$$inline_7788_viewportTop$$inline_7781$$[$i$$inline_9976_i$$inline_9983_row$$inline_7780_rowTop$$inline_7783$$], $bandingClass$$inline_9978_bandingClass$$inline_9985$$) : $JSCompiler_StaticMethods_containsCSSClassName$$($diff$$inline_7784_rows$$inline_9975_rows$$inline_9982_viewportBottom$$inline_7788_viewportTop$$inline_7781$$[$i$$inline_9976_i$$inline_9983_row$$inline_7780_rowTop$$inline_7783$$], 
        $bandingClass$$inline_9978_bandingClass$$inline_9985$$) && $JSCompiler_StaticMethods_removeCSSClassName$$($diff$$inline_7784_rows$$inline_9975_rows$$inline_9982_viewportBottom$$inline_7788_viewportTop$$inline_7781$$[$i$$inline_9976_i$$inline_9983_row$$inline_7780_rowTop$$inline_7783$$], $bandingClass$$inline_9978_bandingClass$$inline_9985$$)
      }
    }
    var $j$$inline_9986$$, $row$$inline_9987$$;
    $columnBandingInterval$$inline_9981_rowBandingInterval$$inline_9974_viewportBottom$$inline_7782_viewportTop$$inline_7787$$ = $JSCompiler_StaticMethods_getColumnBandingInterval$$(this.$m_options$);
    if(0 < $columnBandingInterval$$inline_9981_rowBandingInterval$$inline_9974_viewportBottom$$inline_7782_viewportTop$$inline_7787$$) {
      $diff$$inline_7784_rows$$inline_9975_rows$$inline_9982_viewportBottom$$inline_7788_viewportTop$$inline_7781$$ = this.$m_databody$.firstChild.childNodes;
      $bandingClass$$inline_9978_bandingClass$$inline_9985$$ = this.$getResources$().getMappedStyle("banded");
      for($i$$inline_9976_i$$inline_9983_row$$inline_7780_rowTop$$inline_7783$$ = 1;$i$$inline_9976_i$$inline_9983_row$$inline_7780_rowTop$$inline_7783$$ < $diff$$inline_7784_rows$$inline_9975_rows$$inline_9982_viewportBottom$$inline_7788_viewportTop$$inline_7781$$.length;$i$$inline_9976_i$$inline_9983_row$$inline_7780_rowTop$$inline_7783$$ += 1) {
        $row$$inline_9987$$ = $diff$$inline_7784_rows$$inline_9975_rows$$inline_9982_viewportBottom$$inline_7788_viewportTop$$inline_7781$$[$i$$inline_9976_i$$inline_9983_row$$inline_7780_rowTop$$inline_7783$$].childNodes;
        for($j$$inline_9986$$ = 0;$j$$inline_9986$$ < $row$$inline_9987$$.length;$j$$inline_9986$$ += 1) {
          $index$$inline_9977_index$$inline_9984$$ = this.$m_startCol$ + $j$$inline_9986$$, 1 === Math.floor($index$$inline_9977_index$$inline_9984$$ / $columnBandingInterval$$inline_9981_rowBandingInterval$$inline_9974_viewportBottom$$inline_7782_viewportTop$$inline_7787$$) % 2 ? $JSCompiler_StaticMethods_containsCSSClassName$$($row$$inline_9987$$[$j$$inline_9986$$], $bandingClass$$inline_9978_bandingClass$$inline_9985$$) || $JSCompiler_StaticMethods_addCSSClassName$$($row$$inline_9987$$[$j$$inline_9986$$], 
          $bandingClass$$inline_9978_bandingClass$$inline_9985$$) : $JSCompiler_StaticMethods_containsCSSClassName$$($row$$inline_9987$$[$j$$inline_9986$$], $bandingClass$$inline_9978_bandingClass$$inline_9985$$) && $JSCompiler_StaticMethods_removeCSSClassName$$($diff$$inline_7784_rows$$inline_9975_rows$$inline_9982_viewportBottom$$inline_7788_viewportTop$$inline_7781$$[$j$$inline_9986$$], $bandingClass$$inline_9978_bandingClass$$inline_9985$$)
        }
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$_handleCellUpdatesFetchSuccess$ = function $$JSCompiler_prototypeAlias$$$$_handleCellUpdatesFetchSuccess$$($cellSet$$11$$, $cellRange$$8$$) {
  var $rowStart$$7$$, $databodyContent$$9$$, $renderer$$6$$, $columnBandingInterval$$3$$, $rowIndex$$12$$;
  $rowStart$$7$$ = $cellRange$$8$$[0].start;
  $databodyContent$$9$$ = this.$m_databody$.firstChild;
  $renderer$$6$$ = $JSCompiler_StaticMethods_getRenderer$$(this.$m_options$, "cell");
  $columnBandingInterval$$3$$ = $JSCompiler_StaticMethods_getColumnBandingInterval$$(this.$m_options$);
  $rowIndex$$12$$ = $rowStart$$7$$ - this.$m_startRow$;
  var $row$$inline_7792$$ = $databodyContent$$9$$.childNodes[$rowIndex$$12$$ + 1], $columnStart$$inline_7795$$ = this.$m_startCol$;
  $row$$inline_7792$$.style.left = this.getWidth() + "px";
  setTimeout(function() {
    $row$$inline_7792$$.innerHTML = "";
    $JSCompiler_StaticMethods_addCellsToRow$$(this, $cellSet$$11$$, $row$$inline_7792$$, $rowIndex$$12$$, $renderer$$6$$, $JSCompiler_alias_TRUE$$, $columnStart$$inline_7795$$, $JSCompiler_alias_FALSE$$, $columnBandingInterval$$3$$);
    $JSCompiler_StaticMethods_hideStatusText$$(this);
    setTimeout(function() {
      $row$$inline_7792$$.style.left = "0px"
    }, 250)
  }.bind(this), 250)
};
$JSCompiler_prototypeAlias$$.$activeAndFocus$ = function $$JSCompiler_prototypeAlias$$$$activeAndFocus$$($index$$149$$) {
  this.$m_active$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_unhighlightActive$$(this);
  this.$m_active$ = $index$$149$$;
  $JSCompiler_StaticMethods_highlightActive$$(this)
};
$JSCompiler_prototypeAlias$$.$getRowIndex$ = function $$JSCompiler_prototypeAlias$$$$getRowIndex$$($row$$26$$) {
  for(var $index$$150$$ = this.$m_startRow$;$row$$26$$.previousSibling;) {
    $index$$150$$ += 1, $row$$26$$ = $row$$26$$.previousSibling
  }
  return $index$$150$$ - 1
};
$JSCompiler_prototypeAlias$$.$getCellIndex$ = function $$JSCompiler_prototypeAlias$$$$getCellIndex$$($cell$$17$$) {
  for(var $index$$151$$ = this.$m_startCol$;$cell$$17$$.previousSibling;) {
    $index$$151$$ += 1, $cell$$17$$ = $cell$$17$$.previousSibling
  }
  return $index$$151$$
};
function $JSCompiler_StaticMethods_findCell$$($JSCompiler_StaticMethods_findCell$self$$, $elem$$55$$) {
  return $JSCompiler_StaticMethods_findCell$self$$.find($elem$$55$$, "cell")
}
$JSCompiler_prototypeAlias$$.find = function $$JSCompiler_prototypeAlias$$$find$($elem$$56$$, $key$$97$$, $className$$12$$) {
  if($elem$$56$$ == $JSCompiler_alias_NULL$$ || $elem$$56$$ == this.$m_root$) {
    return $JSCompiler_alias_NULL$$
  }
  $className$$12$$ == $JSCompiler_alias_VOID$$ && ($className$$12$$ = this.$getResources$().getMappedStyle($key$$97$$));
  return $className$$12$$ == $JSCompiler_alias_NULL$$ ? $JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods_containsCSSClassName$$($elem$$56$$, $className$$12$$) ? $elem$$56$$ : this.find($elem$$56$$.parentNode, $key$$97$$, $className$$12$$)
};
function $JSCompiler_StaticMethods_highlightActive$$($JSCompiler_StaticMethods_highlightActive$self$$) {
  var $cell$$18$$ = $JSCompiler_StaticMethods_highlightIndex$$($JSCompiler_StaticMethods_highlightActive$self$$, $JSCompiler_StaticMethods_highlightActive$self$$.$m_active$, "active");
  $cell$$18$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_setAriaProperties$$($JSCompiler_StaticMethods_highlightActive$self$$, $cell$$18$$, $JSCompiler_alias_TRUE$$)
}
function $JSCompiler_StaticMethods_unhighlightActive$$($JSCompiler_StaticMethods_unhighlightActive$self$$, $selectActive$$) {
  var $activeClassName$$inline_7809_cell$$19_cell$$inline_7807_range$$inline_7808$$, $selectedClassName_singleCell$$inline_7811$$;
  $activeClassName$$inline_7809_cell$$19_cell$$inline_7807_range$$inline_7808$$ = $JSCompiler_StaticMethods_unhighlightActive$self$$.createRange($JSCompiler_StaticMethods_unhighlightActive$self$$.$m_active$);
  $activeClassName$$inline_7809_cell$$19_cell$$inline_7807_range$$inline_7808$$ = $JSCompiler_StaticMethods_getElementsInRange$$($JSCompiler_StaticMethods_unhighlightActive$self$$, $activeClassName$$inline_7809_cell$$19_cell$$inline_7807_range$$inline_7808$$);
  $activeClassName$$inline_7809_cell$$19_cell$$inline_7807_range$$inline_7808$$ == $JSCompiler_alias_NULL$$ || 0 == $activeClassName$$inline_7809_cell$$19_cell$$inline_7807_range$$inline_7808$$.length ? $activeClassName$$inline_7809_cell$$19_cell$$inline_7807_range$$inline_7808$$ = $JSCompiler_alias_VOID$$ : ($selectedClassName_singleCell$$inline_7811$$ = $activeClassName$$inline_7809_cell$$19_cell$$inline_7807_range$$inline_7808$$[0], $activeClassName$$inline_7809_cell$$19_cell$$inline_7807_range$$inline_7808$$ = 
  $JSCompiler_StaticMethods_unhighlightActive$self$$.$getResources$().getMappedStyle("active"), $activeClassName$$inline_7809_cell$$19_cell$$inline_7807_range$$inline_7808$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_removeCSSClassName$$($selectedClassName_singleCell$$inline_7811$$, $activeClassName$$inline_7809_cell$$19_cell$$inline_7807_range$$inline_7808$$), $activeClassName$$inline_7809_cell$$19_cell$$inline_7807_range$$inline_7808$$ = $selectedClassName_singleCell$$inline_7811$$);
  $selectActive$$ && ($selectedClassName_singleCell$$inline_7811$$ = $JSCompiler_StaticMethods_unhighlightActive$self$$.$getResources$().getMappedStyle("selected"), $selectedClassName_singleCell$$inline_7811$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_highlightIndex$$($JSCompiler_StaticMethods_unhighlightActive$self$$, $JSCompiler_StaticMethods_unhighlightActive$self$$.$m_active$, $selectedClassName_singleCell$$inline_7811$$));
  $activeClassName$$inline_7809_cell$$19_cell$$inline_7807_range$$inline_7808$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_unsetAriaProperties$$($activeClassName$$inline_7809_cell$$19_cell$$inline_7807_range$$inline_7808$$)
}
function $JSCompiler_StaticMethods_highlightIndex$$($JSCompiler_StaticMethods_highlightIndex$self$$, $index$$152$$, $className$$13_style$$105$$) {
  var $cell$$20_range$$9_singleCell$$;
  $cell$$20_range$$9_singleCell$$ = $JSCompiler_StaticMethods_highlightIndex$self$$.createRange($index$$152$$);
  $cell$$20_range$$9_singleCell$$ = $JSCompiler_StaticMethods_getElementsInRange$$($JSCompiler_StaticMethods_highlightIndex$self$$, $cell$$20_range$$9_singleCell$$);
  if(!($cell$$20_range$$9_singleCell$$ == $JSCompiler_alias_NULL$$ || 0 == $cell$$20_range$$9_singleCell$$.length)) {
    return $className$$13_style$$105$$ == $JSCompiler_alias_VOID$$ && ($className$$13_style$$105$$ = "selected"), $cell$$20_range$$9_singleCell$$ = $cell$$20_range$$9_singleCell$$[0], $className$$13_style$$105$$ = $JSCompiler_StaticMethods_highlightIndex$self$$.$getResources$().getMappedStyle($className$$13_style$$105$$), $className$$13_style$$105$$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_addCSSClassName$$($cell$$20_range$$9_singleCell$$, $className$$13_style$$105$$), $index$$152$$.row && 
    $index$$152$$.column && $JSCompiler_StaticMethods_setAriaProperties$$($JSCompiler_StaticMethods_highlightIndex$self$$, $cell$$20_range$$9_singleCell$$)), $cell$$20_range$$9_singleCell$$
  }
}
function $JSCompiler_StaticMethods_setAriaProperties$$($JSCompiler_StaticMethods_setAriaProperties$self$$, $cell$$22$$, $focus$$) {
  $cell$$22$$.setAttribute("tabIndex", 0);
  var $label$$inline_7815$$, $colIndex$$inline_7819_row$$inline_7816_rowIndex$$inline_7817$$, $columns$$inline_7820_rows$$inline_7818$$;
  $label$$inline_7815$$ = "";
  $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_rowHeader$ != $JSCompiler_alias_NULL$$ && ($colIndex$$inline_7819_row$$inline_7816_rowIndex$$inline_7817$$ = $cell$$22$$.parentNode, $colIndex$$inline_7819_row$$inline_7816_rowIndex$$inline_7817$$ = $JSCompiler_StaticMethods_findIndexOf$$($colIndex$$inline_7819_row$$inline_7816_rowIndex$$inline_7817$$), -1 < $colIndex$$inline_7819_row$$inline_7816_rowIndex$$inline_7817$$ && ($columns$$inline_7820_rows$$inline_7818$$ = $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_rowHeader$.firstChild.childNodes, 
  $colIndex$$inline_7819_row$$inline_7816_rowIndex$$inline_7817$$ < $columns$$inline_7820_rows$$inline_7818$$.length && ($label$$inline_7815$$ = $columns$$inline_7820_rows$$inline_7818$$[$colIndex$$inline_7819_row$$inline_7816_rowIndex$$inline_7817$$].id)));
  $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_colHeader$ != $JSCompiler_alias_NULL$$ && ($colIndex$$inline_7819_row$$inline_7816_rowIndex$$inline_7817$$ = $JSCompiler_StaticMethods_findIndexOf$$($cell$$22$$), -1 < $colIndex$$inline_7819_row$$inline_7816_rowIndex$$inline_7817$$ && ($columns$$inline_7820_rows$$inline_7818$$ = $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_colHeader$.firstChild.childNodes, $colIndex$$inline_7819_row$$inline_7816_rowIndex$$inline_7817$$ < $columns$$inline_7820_rows$$inline_7818$$.length && 
  ($label$$inline_7815$$ = "" == $label$$inline_7815$$ ? $columns$$inline_7820_rows$$inline_7818$$[$colIndex$$inline_7819_row$$inline_7816_rowIndex$$inline_7817$$].id : [$label$$inline_7815$$, $columns$$inline_7820_rows$$inline_7818$$[$colIndex$$inline_7819_row$$inline_7816_rowIndex$$inline_7817$$].id].join())));
  $label$$inline_7815$$ = "" == $label$$inline_7815$$ ? $JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods_setAriaProperties$self$$, "state") : [$label$$inline_7815$$, $JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods_setAriaProperties$self$$, "state")].join();
  $cell$$22$$.setAttribute("aria-labelledby", $label$$inline_7815$$);
  $focus$$ != $JSCompiler_alias_VOID$$ && ($JSCompiler_StaticMethods_setAriaProperties$self$$.$m_cellToFocus$ == $JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_cellToFocus$ != $cell$$22$$) && $cell$$22$$.focus()
}
function $JSCompiler_StaticMethods_unsetAriaProperties$$($cell$$23$$) {
  $cell$$23$$.setAttribute("tabIndex", -1);
  $cell$$23$$.removeAttribute("contenteditable");
  $cell$$23$$.removeAttribute("aria-labelledby")
}
function $JSCompiler_StaticMethods_getHeaderFromCell$$($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$9$$, $cell$$25_colIndex$$1_row$$28_rowIndex$$15$$, $axis$$52$$) {
  if("row" === $axis$$52$$) {
    if($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$9$$.$m_rowHeader$ != $JSCompiler_alias_NULL$$ && ($cell$$25_colIndex$$1_row$$28_rowIndex$$15$$ = $cell$$25_colIndex$$1_row$$28_rowIndex$$15$$.parentNode, $cell$$25_colIndex$$1_row$$28_rowIndex$$15$$ = $JSCompiler_StaticMethods_findIndexOf$$($cell$$25_colIndex$$1_row$$28_rowIndex$$15$$), -1 < $cell$$25_colIndex$$1_row$$28_rowIndex$$15$$ && ($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$9$$ = $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$9$$.$m_rowHeader$.firstChild.childNodes, 
    $cell$$25_colIndex$$1_row$$28_rowIndex$$15$$ < $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$9$$.length))) {
      return $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$9$$[$cell$$25_colIndex$$1_row$$28_rowIndex$$15$$]
    }
  }else {
    if("column" === $axis$$52$$ && $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$9$$.$m_colHeader$ != $JSCompiler_alias_NULL$$ && ($cell$$25_colIndex$$1_row$$28_rowIndex$$15$$ = $JSCompiler_StaticMethods_findIndexOf$$($cell$$25_colIndex$$1_row$$28_rowIndex$$15$$), -1 < $cell$$25_colIndex$$1_row$$28_rowIndex$$15$$ && ($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$9$$ = $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$9$$.$m_colHeader$.firstChild.childNodes, 
    $cell$$25_colIndex$$1_row$$28_rowIndex$$15$$ < $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$9$$.length))) {
      return $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$9$$[$cell$$25_colIndex$$1_row$$28_rowIndex$$15$$]
    }
  }
  return $JSCompiler_alias_NULL$$
}
function $JSCompiler_StaticMethods_findIndexOf$$($elem$$57$$) {
  var $child$$85$$, $children$$31$$, $index$$154$$, $i$$785$$;
  $children$$31$$ = $elem$$57$$.parentNode.childNodes;
  $index$$154$$ = -1;
  for($i$$785$$ = 0;$i$$785$$ < $children$$31$$.length;$i$$785$$ += 1) {
    $child$$85$$ = $children$$31$$[$i$$785$$];
    if($child$$85$$ === $elem$$57$$) {
      return $index$$154$$ + 1
    }
    "DIV" == $child$$85$$.nodeName && $index$$154$$++
  }
  return $index$$154$$
}
$JSCompiler_prototypeAlias$$.createRange = function $$JSCompiler_prototypeAlias$$$createRange$($startIndex$$4$$, $endIndex$$6$$) {
  var $startRow$$3$$, $endRow$$, $startColumn$$, $endColumn$$;
  $endIndex$$6$$ && ($startIndex$$4$$.row < $endIndex$$6$$.row || -1 == $endIndex$$6$$.row ? ($startRow$$3$$ = $startIndex$$4$$.row, $endRow$$ = $endIndex$$6$$.row) : ($startRow$$3$$ = $endIndex$$6$$.row, $endRow$$ = $startIndex$$4$$.row), !isNaN($startIndex$$4$$.column) && !isNaN($endIndex$$6$$.column) ? ($startIndex$$4$$.column < $endIndex$$6$$.column || -1 == $endIndex$$6$$.column ? ($startColumn$$ = $startIndex$$4$$.column, $endColumn$$ = $endIndex$$6$$.column) : ($startColumn$$ = $endIndex$$6$$.column, 
  $endColumn$$ = $startIndex$$4$$.column), $startIndex$$4$$ = {row:$startRow$$3$$, column:$startColumn$$}, $endIndex$$6$$ = {row:$endRow$$, column:$endColumn$$}) : ($startIndex$$4$$ = {row:$startRow$$3$$}, $endIndex$$6$$ = {row:$endRow$$}));
  return{startIndex:$startIndex$$4$$, endIndex:$endIndex$$6$$}
};
function $JSCompiler_StaticMethods_getEndIndex$$($range$$11$$) {
  return $range$$11$$.endIndex == $JSCompiler_alias_NULL$$ ? $range$$11$$.startIndex : $range$$11$$.endIndex
}
function $JSCompiler_StaticMethods_getElementsInRange$$($JSCompiler_StaticMethods_getElementsInRange$self_i$$786$$, $range$$12_rangeEndRow$$, $nodes$$15_startRow$$4$$, $endRow$$1_rows$$10$$) {
  var $j$$111_startIndex$$5$$, $cell$$26_endIndex$$7$$, $columns$$5_rangeStartRow$$, $rangeStartColumn_row$$29$$, $rangeEndColumn$$;
  $nodes$$15_startRow$$4$$ == $JSCompiler_alias_VOID$$ && ($nodes$$15_startRow$$4$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$786$$.$m_startRow$);
  $endRow$$1_rows$$10$$ == $JSCompiler_alias_VOID$$ && ($endRow$$1_rows$$10$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$786$$.$m_endRow$);
  $j$$111_startIndex$$5$$ = $range$$12_rangeEndRow$$.startIndex;
  $cell$$26_endIndex$$7$$ = $JSCompiler_StaticMethods_getEndIndex$$($range$$12_rangeEndRow$$);
  $columns$$5_rangeStartRow$$ = $j$$111_startIndex$$5$$.row;
  $range$$12_rangeEndRow$$ = $cell$$26_endIndex$$7$$.row;
  -1 == $range$$12_rangeEndRow$$ && ($range$$12_rangeEndRow$$ = Number.MAX_VALUE);
  if($endRow$$1_rows$$10$$ < $columns$$5_rangeStartRow$$ || $range$$12_rangeEndRow$$ < $nodes$$15_startRow$$4$$ || !isNaN($j$$111_startIndex$$5$$.column) && !isNaN($cell$$26_endIndex$$7$$.column) && ($rangeStartColumn_row$$29$$ = $j$$111_startIndex$$5$$.column, $rangeEndColumn$$ = $cell$$26_endIndex$$7$$.column, -1 == $rangeEndColumn$$ && ($rangeEndColumn$$ = Number.MAX_VALUE), $JSCompiler_StaticMethods_getElementsInRange$self_i$$786$$.$m_endCol$ < $rangeStartColumn_row$$29$$ || $rangeEndColumn$$ < 
  $JSCompiler_StaticMethods_getElementsInRange$self_i$$786$$.$m_startCol$)) {
    return $JSCompiler_alias_NULL$$
  }
  $nodes$$15_startRow$$4$$ = [];
  $endRow$$1_rows$$10$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$786$$.$m_databody$.firstChild.childNodes;
  $columns$$5_rangeStartRow$$ = Math.max(0, $columns$$5_rangeStartRow$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$786$$.$m_startRow$);
  $range$$12_rangeEndRow$$ = Math.min($endRow$$1_rows$$10$$.length - 1, $range$$12_rangeEndRow$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$786$$.$m_startRow$ + 1);
  if(!isNaN($rangeStartColumn_row$$29$$) && !isNaN($rangeEndColumn$$)) {
    $rangeStartColumn_row$$29$$ = Math.max(0, $rangeStartColumn_row$$29$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$786$$.$m_startCol$);
    $rangeEndColumn$$ = $rangeEndColumn$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$786$$.$m_startCol$ + 1;
    for($JSCompiler_StaticMethods_getElementsInRange$self_i$$786$$ = $columns$$5_rangeStartRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$786$$ < $range$$12_rangeEndRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$786$$ += 1) {
      $columns$$5_rangeStartRow$$ = $endRow$$1_rows$$10$$[$JSCompiler_StaticMethods_getElementsInRange$self_i$$786$$ + 1].childNodes;
      for($j$$111_startIndex$$5$$ = $rangeStartColumn_row$$29$$;$j$$111_startIndex$$5$$ < Math.min($columns$$5_rangeStartRow$$.length, $rangeEndColumn$$);$j$$111_startIndex$$5$$ += 1) {
        $cell$$26_endIndex$$7$$ = $columns$$5_rangeStartRow$$[$j$$111_startIndex$$5$$], $nodes$$15_startRow$$4$$.push($cell$$26_endIndex$$7$$)
      }
    }
  }else {
    for($JSCompiler_StaticMethods_getElementsInRange$self_i$$786$$ = $columns$$5_rangeStartRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$786$$ < $range$$12_rangeEndRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$786$$ += 1) {
      $rangeStartColumn_row$$29$$ = $endRow$$1_rows$$10$$[$JSCompiler_StaticMethods_getElementsInRange$self_i$$786$$ + 1], $nodes$$15_startRow$$4$$.push($rangeStartColumn_row$$29$$)
    }
  }
  return $nodes$$15_startRow$$4$$
}
function $JSCompiler_StaticMethods__isFocusableElement$$($elem$$58$$) {
  var $tagName$$5$$ = $elem$$58$$.tagName;
  return"INPUT" === $tagName$$5$$ || "TEXTAREA" === $tagName$$5$$ || "SELECT" === $tagName$$5$$ || "BUTTON" === $tagName$$5$$ || "A" === $tagName$$5$$ || $elem$$58$$.getAttribute("tabIndex") != $JSCompiler_alias_NULL$$ && 0 <= parseInt($elem$$58$$.getAttribute("tabIndex"))
}
function $JSCompiler_StaticMethods_isArrowKey$$($keyCode$$32$$) {
  return 38 == $keyCode$$32$$ || 40 == $keyCode$$32$$ || 37 == $keyCode$$32$$ || 39 == $keyCode$$32$$
}
$JSCompiler_prototypeAlias$$.createIndex = function $$JSCompiler_prototypeAlias$$$createIndex$($row$$30$$, $column$$8$$) {
  return $row$$30$$ != $JSCompiler_alias_NULL$$ ? $column$$8$$ != $JSCompiler_alias_NULL$$ ? {row:$row$$30$$, column:$column$$8$$} : {row:$row$$30$$} : $JSCompiler_alias_NULL$$
};
function $JSCompiler_StaticMethods__setActiveHeader$$($JSCompiler_StaticMethods__setActiveHeader$self$$, $index$$157$$, $elem$$61$$, $axis$$55$$) {
  var $activeClassName$$1$$ = $JSCompiler_StaticMethods__setActiveHeader$self$$.$getResources$().getMappedStyle("active");
  $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem != $JSCompiler_alias_NULL$$ && ("row" === $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis ? $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_removeCSSClassName$$($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild, 
  $activeClassName$$1$$) : $JSCompiler_StaticMethods_removeCSSClassName$$($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem, $activeClassName$$1$$));
  -1 != $index$$157$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ == $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ = {}), $axis$$55$$ != $JSCompiler_alias_VOID$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis = $axis$$55$$), $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.index = $index$$157$$, $elem$$61$$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem = 
  $elem$$61$$, "row" === $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis ? $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_addCSSClassName$$($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild, $activeClassName$$1$$) : $JSCompiler_StaticMethods_addCSSClassName$$($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem, $activeClassName$$1$$)))
}
function $JSCompiler_StaticMethods__scrollToActiveHeader$$($JSCompiler_StaticMethods__scrollToActiveHeader$self$$) {
  var $axis$$56$$, $index$$158$$, $elem$$62$$, $indexes$$7$$;
  $axis$$56$$ = $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_activeHeader$.axis;
  $index$$158$$ = $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_activeHeader$.index;
  $elem$$62$$ = $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_activeHeader$.elem;
  "column" === $axis$$56$$ ? $indexes$$7$$ = {row:0, column:$index$$158$$} : "row" === $axis$$56$$ && ($indexes$$7$$ = {row:$index$$158$$, column:0});
  $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods__scrollToActiveHeader$self$$, $indexes$$7$$);
  $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_cellToFocus$ != $JSCompiler_alias_NULL$$ ? ($elem$$62$$.setAttribute("tabIndex", 0), $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_cellToFocus$ = $elem$$62$$) : $elem$$62$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__focusHeaderElem$$($elem$$62$$)
}
function $JSCompiler_StaticMethods_handleCellArrowKeys$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$35_newCellIndex$$1$$, $isExtend$$) {
  var $currentCellIndex$$, $row$$31$$, $column$$9$$, $processed$$, $focusFunc$$;
  if($JSCompiler_StaticMethods_isFetchComplete$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) && ($currentCellIndex$$ = $isExtend$$ ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_selectionFrontier$ : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$, $currentCellIndex$$ != $JSCompiler_alias_NULL$$)) {
    $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$getResources$().isRTLMode() && (37 == $keyCode$$35_newCellIndex$$1$$ ? $keyCode$$35_newCellIndex$$1$$ = 39 : 39 == $keyCode$$35_newCellIndex$$1$$ && ($keyCode$$35_newCellIndex$$1$$ = 37));
    $focusFunc$$ = $JSCompiler_StaticMethods__isSelectionEnabled$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$selectAndFocus$.bind($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$activeAndFocus$.bind($JSCompiler_StaticMethods_handleCellArrowKeys$self$$);
    $processed$$ = $JSCompiler_alias_FALSE$$;
    $row$$31$$ = $currentCellIndex$$.row;
    $column$$9$$ = $currentCellIndex$$.column;
    switch($keyCode$$35_newCellIndex$$1$$) {
      case 37:
        0 < $column$$9$$ ? ("row" == $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_options$.$getSelectionMode$() ? ($keyCode$$35_newCellIndex$$1$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$.row, $column$$9$$ - 1), $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$35_newCellIndex$$1$$), $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$activeAndFocus$($keyCode$$35_newCellIndex$$1$$)) : 
        ($keyCode$$35_newCellIndex$$1$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$31$$, $column$$9$$ - 1), $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$35_newCellIndex$$1$$), $isExtend$$ ? $JSCompiler_StaticMethods_extendSelection$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$35_newCellIndex$$1$$) : $focusFunc$$($keyCode$$35_newCellIndex$$1$$)), $processed$$ = $JSCompiler_alias_TRUE$$) : 
        $JSCompiler_StaticMethods__focusRowHeader$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $row$$31$$);
        break;
      case 39:
        $JSCompiler_StaticMethods__isCountUnknown$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "column") || $column$$9$$ + 1 < $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_dataSource$.getCount("column") ? ("row" == $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_options$.$getSelectionMode$() ? ($keyCode$$35_newCellIndex$$1$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$.row, $column$$9$$ + 
        1), $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$35_newCellIndex$$1$$), $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$activeAndFocus$($keyCode$$35_newCellIndex$$1$$)) : ($keyCode$$35_newCellIndex$$1$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$31$$, $column$$9$$ + 1), $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$35_newCellIndex$$1$$), 
        $isExtend$$ ? $JSCompiler_StaticMethods_extendSelection$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$35_newCellIndex$$1$$) : $focusFunc$$($keyCode$$35_newCellIndex$$1$$)), $processed$$ = $JSCompiler_alias_TRUE$$) : $isExtend$$ || ($focusFunc$$($currentCellIndex$$), $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $currentCellIndex$$), $processed$$ = $JSCompiler_alias_TRUE$$);
        break;
      case 38:
        0 < $row$$31$$ ? ($keyCode$$35_newCellIndex$$1$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$31$$ - 1, $column$$9$$), $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$35_newCellIndex$$1$$), $isExtend$$ ? $JSCompiler_StaticMethods_extendSelection$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$35_newCellIndex$$1$$) : $focusFunc$$($keyCode$$35_newCellIndex$$1$$), $processed$$ = $JSCompiler_alias_TRUE$$) : 
        $JSCompiler_StaticMethods__focusColumnHeader$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $column$$9$$);
        break;
      case 40:
        $JSCompiler_StaticMethods__isCountUnknown$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "row") || $row$$31$$ + 1 < $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_dataSource$.getCount("row") ? ($keyCode$$35_newCellIndex$$1$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$31$$ + 1, $column$$9$$), $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$35_newCellIndex$$1$$), $isExtend$$ ? $JSCompiler_StaticMethods_extendSelection$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, 
        $keyCode$$35_newCellIndex$$1$$) : $focusFunc$$($keyCode$$35_newCellIndex$$1$$), $processed$$ = $JSCompiler_alias_TRUE$$) : $isExtend$$ || ($focusFunc$$($currentCellIndex$$), $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $currentCellIndex$$), $processed$$ = $JSCompiler_alias_TRUE$$);
        break;
      case 36:
        $keyCode$$35_newCellIndex$$1$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$31$$, 0);
        $focusFunc$$($keyCode$$35_newCellIndex$$1$$);
        $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$35_newCellIndex$$1$$);
        $processed$$ = $JSCompiler_alias_TRUE$$;
        break;
      case 35:
        $keyCode$$35_newCellIndex$$1$$ = $JSCompiler_StaticMethods__isCountUnknown$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "column") ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$31$$, Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_endCol$ - 1)) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$31$$, Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_dataSource$.getCount("column") - 1)), $focusFunc$$($keyCode$$35_newCellIndex$$1$$), 
        $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$35_newCellIndex$$1$$), $processed$$ = $JSCompiler_alias_TRUE$$
    }
    $isExtend$$ && $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_discontiguousSelection$ && ($JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_discontiguousSelection$ = $JSCompiler_alias_FALSE$$);
    return $processed$$
  }
}
function $JSCompiler_StaticMethods__focusColumnHeader$$($JSCompiler_StaticMethods__focusColumnHeader$self$$, $columnIndex$$8$$) {
  var $column$$10_relIndex$$, $columns$$6$$;
  $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_colHeader$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_colHeader$.firstChild && ($column$$10_relIndex$$ = $columnIndex$$8$$ - $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_startColHeader$, $columns$$6$$ = $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_colHeader$.firstChild.childNodes, $column$$10_relIndex$$ < $columns$$6$$.length && ($column$$10_relIndex$$ = $columns$$6$$[$column$$10_relIndex$$], 
  $JSCompiler_StaticMethods__focusHeaderElem$$($column$$10_relIndex$$), $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_active$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unhighlightActive$$($JSCompiler_StaticMethods__focusColumnHeader$self$$), $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_active$ = $JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__isSelectionEnabled$$($JSCompiler_StaticMethods__focusColumnHeader$self$$) && $JSCompiler_StaticMethods__clearSelection$$($JSCompiler_StaticMethods__focusColumnHeader$self$$)), 
  $JSCompiler_StaticMethods__setActiveHeader$$($JSCompiler_StaticMethods__focusColumnHeader$self$$, $columnIndex$$8$$, $column$$10_relIndex$$, "column")))
}
function $JSCompiler_StaticMethods__focusHeaderElem$$($elem$$63$$) {
  $elem$$63$$.setAttribute("tabIndex", 0);
  $elem$$63$$.focus()
}
function $JSCompiler_StaticMethods__focusRowHeader$$($JSCompiler_StaticMethods__focusRowHeader$self$$, $rowIndex$$16$$) {
  var $relIndex$$1_row$$32$$, $rows$$11$$;
  $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_rowHeader$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_rowHeader$.firstChild && ($relIndex$$1_row$$32$$ = $rowIndex$$16$$ - $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_startRowHeader$ + 1, $rows$$11$$ = $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_rowHeader$.firstChild.childNodes, $relIndex$$1_row$$32$$ < $rows$$11$$.length && ($relIndex$$1_row$$32$$ = $rows$$11$$[$relIndex$$1_row$$32$$], $JSCompiler_StaticMethods__focusHeaderElem$$($relIndex$$1_row$$32$$), 
  $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_active$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_unhighlightActive$$($JSCompiler_StaticMethods__focusRowHeader$self$$), $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_active$ = $JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__isSelectionEnabled$$($JSCompiler_StaticMethods__focusRowHeader$self$$) && $JSCompiler_StaticMethods__clearSelection$$($JSCompiler_StaticMethods__focusRowHeader$self$$)), $JSCompiler_StaticMethods__setActiveHeader$$($JSCompiler_StaticMethods__focusRowHeader$self$$, 
  $rowIndex$$16$$, $relIndex$$1_row$$32$$, "row")))
}
function $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_scrollToIndex$self$$, $index$$159$$) {
  var $cellLeft_row$$33$$, $cellWidth_column$$11$$, $deltaX$$23_scrollLeft$$10$$, $deltaY$$22_scrollTop$$10$$, $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$, $rowElem_rowHeight$$12$$, $viewportBottom$$5_viewportRight$$3$$, $rowTop$$1$$, $cell$$27$$;
  $cellLeft_row$$33$$ = $index$$159$$.row;
  $cellWidth_column$$11$$ = $index$$159$$.column;
  $deltaY$$22_scrollTop$$10$$ = $deltaX$$23_scrollLeft$$10$$ = 0;
  $cellLeft_row$$33$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ || $cellLeft_row$$33$$ >= $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_endRow$ ? ($deltaY$$22_scrollTop$$10$$ = $cellLeft_row$$33$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ ? $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgRowHeight$ * $cellLeft_row$$33$$ : $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgRowHeight$ * ($cellLeft_row$$33$$ + 1) - $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), 
  $deltaY$$22_scrollTop$$10$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$ - $deltaY$$22_scrollTop$$10$$, $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ = $index$$159$$) : ($databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$.firstChild, $rowElem_rowHeight$$12$$ = $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$.childNodes[$cellLeft_row$$33$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ + 
  1], $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$, $viewportBottom$$5_viewportRight$$3$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$ + $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $rowTop$$1$$ = parseInt($rowElem_rowHeight$$12$$.style.top), $rowElem_rowHeight$$12$$ = $JSCompiler_StaticMethods_getElementHeight$$($rowElem_rowHeight$$12$$), 
  $rowTop$$1$$ + $rowElem_rowHeight$$12$$ > $viewportBottom$$5_viewportRight$$3$$ ? $deltaY$$22_scrollTop$$10$$ = $viewportBottom$$5_viewportRight$$3$$ - ($rowTop$$1$$ + $rowElem_rowHeight$$12$$) : $rowTop$$1$$ < $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ && ($deltaY$$22_scrollTop$$10$$ = $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ - $rowTop$$1$$));
  !isNaN($cellWidth_column$$11$$) && $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ == $JSCompiler_alias_NULL$$ && ($cellWidth_column$$11$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$ || $cellWidth_column$$11$$ >= $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_endCol$ ? ($deltaX$$23_scrollLeft$$10$$ = $cellWidth_column$$11$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$ ? $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgColWidth$ * 
  $cellWidth_column$$11$$ : $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgColWidth$ * ($cellWidth_column$$11$$ + 1) - $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $deltaX$$23_scrollLeft$$10$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$ - $deltaX$$23_scrollLeft$$10$$, $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ = $index$$159$$) : ($databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ = 
  $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$.firstChild, $rowElem_rowHeight$$12$$ = $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$.childNodes[$cellLeft_row$$33$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ + 1], $cell$$27$$ = $rowElem_rowHeight$$12$$.childNodes[$cellWidth_column$$11$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$], $cellLeft_row$$33$$ = $JSCompiler_StaticMethods_getElementDir$$($cell$$27$$, "left"), $cellWidth_column$$11$$ = 
  $cell$$27$$.offsetWidth, $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$, $viewportBottom$$5_viewportRight$$3$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$ + $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $cellLeft_row$$33$$ < $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ ? $deltaX$$23_scrollLeft$$10$$ = $databodyContent$$13_viewportLeft$$2_viewportTop$$4$$ - 
  $cellLeft_row$$33$$ : $cellLeft_row$$33$$ + $cellWidth_column$$11$$ > $viewportBottom$$5_viewportRight$$3$$ && ($deltaX$$23_scrollLeft$$10$$ = $viewportBottom$$5_viewportRight$$3$$ - ($cellLeft_row$$33$$ + $cellWidth_column$$11$$))));
  if(0 != $deltaX$$23_scrollLeft$$10$$ || 0 != $deltaY$$22_scrollTop$$10$$) {
    $cell$$27$$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_cellToFocus$ = $cell$$27$$), $JSCompiler_StaticMethods_scrollDelta$$($JSCompiler_StaticMethods_scrollToIndex$self$$, $deltaX$$23_scrollLeft$$10$$, $deltaY$$22_scrollTop$$10$$)
  }
}
function $JSCompiler_StaticMethods_findHeader$$($JSCompiler_StaticMethods_findHeader$self$$, $elem$$64$$, $headerCellClassName$$) {
  $headerCellClassName$$ == $JSCompiler_alias_VOID$$ && ($headerCellClassName$$ = $JSCompiler_StaticMethods_findHeader$self$$.$getResources$().getMappedStyle("headercell"));
  if($headerCellClassName$$ != $JSCompiler_alias_NULL$$) {
    if($JSCompiler_StaticMethods_containsCSSClassName$$($elem$$64$$, $headerCellClassName$$)) {
      return $elem$$64$$
    }
    if($elem$$64$$.parentNode) {
      return $JSCompiler_StaticMethods_findHeader$$($JSCompiler_StaticMethods_findHeader$self$$, $elem$$64$$.parentNode, $headerCellClassName$$)
    }
  }
  return $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.$handleFocus$ = function $$JSCompiler_prototypeAlias$$$$handleFocus$$() {
  var $active$$2$$, $activeClassName$$2$$;
  this.$m_active$ != $JSCompiler_alias_NULL$$ && ($active$$2$$ = document.activeElement, $activeClassName$$2$$ = this.$getResources$().getMappedStyle("active"), $active$$2$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_containsCSSClassName$$($active$$2$$, $activeClassName$$2$$) || $JSCompiler_StaticMethods_highlightActive$$(this))
};
$JSCompiler_prototypeAlias$$.$registerRowExpander$ = $JSCompiler_set$$("$m_currentRowExpander$");
$DvtDataGrid$$.prototype.registerRowExpander = $DvtDataGrid$$.prototype.$registerRowExpander$;
function $JSCompiler_StaticMethods__setAccInfoText$$($JSCompiler_StaticMethods__setAccInfoText$self$$, $key$$98$$) {
  var $text$$109$$ = $JSCompiler_StaticMethods__setAccInfoText$self$$.$getResources$().getTranslatedText($key$$98$$);
  $text$$109$$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setAccInfoText$self$$.$m_accInfo$.innerHTML = $text$$109$$)
}
$DvtDataGrid$$.prototype.$handleExpandEvent$ = function $$DvtDataGrid$$$$$handleExpandEvent$$() {
  $JSCompiler_StaticMethods__setAccInfoText$$(this, "expand")
};
$DvtDataGrid$$.prototype.$handleCollapseEvent$ = function $$DvtDataGrid$$$$$handleCollapseEvent$$() {
  $JSCompiler_StaticMethods__setAccInfoText$$(this, "collapse")
};
function $JSCompiler_StaticMethods_unhighlightRange$$($JSCompiler_StaticMethods_unhighlightRange$self$$, $range$$13$$) {
  var $elems$$inline_7827$$ = $JSCompiler_StaticMethods_getElementsInRange$$($JSCompiler_StaticMethods_unhighlightRange$self$$, $range$$13$$), $i$$inline_7828$$, $selectedClassName$$inline_7829$$, $activeClassName$$inline_7830$$, $elem$$inline_7831$$;
  if(!($elems$$inline_7827$$ == $JSCompiler_alias_NULL$$ || 0 == $elems$$inline_7827$$.length)) {
    if($selectedClassName$$inline_7829$$ = $JSCompiler_StaticMethods_unhighlightRange$self$$.$getResources$().getMappedStyle("selected"), $activeClassName$$inline_7830$$ = $JSCompiler_StaticMethods_unhighlightRange$self$$.$getResources$().getMappedStyle("active"), $selectedClassName$$inline_7829$$ != $JSCompiler_alias_NULL$$ && $activeClassName$$inline_7830$$ != $JSCompiler_alias_NULL$$) {
      for($i$$inline_7828$$ = 0;$i$$inline_7828$$ < $elems$$inline_7827$$.length;$i$$inline_7828$$ += 1) {
        $elem$$inline_7831$$ = $elems$$inline_7827$$[$i$$inline_7828$$], $JSCompiler_StaticMethods_removeCSSClassName$$($elem$$inline_7831$$, $activeClassName$$inline_7830$$), $JSCompiler_StaticMethods_removeCSSClassName$$($elem$$inline_7831$$, $selectedClassName$$inline_7829$$), $JSCompiler_StaticMethods_unsetAriaProperties$$($elem$$inline_7831$$)
      }
    }
  }
}
function $JSCompiler_StaticMethods_highlightElems$$($JSCompiler_StaticMethods_highlightElems$self$$, $elems$$6$$) {
  var $selectedClassName$$3$$, $i$$791$$, $elem$$67$$;
  if(!($elems$$6$$ == $JSCompiler_alias_NULL$$ || 0 == $elems$$6$$.length)) {
    if($selectedClassName$$3$$ = $JSCompiler_StaticMethods_highlightElems$self$$.$getResources$().getMappedStyle("selected"), $selectedClassName$$3$$ != $JSCompiler_alias_NULL$$) {
      for($i$$791$$ = 0;$i$$791$$ < $elems$$6$$.length;$i$$791$$ += 1) {
        $elem$$67$$ = $elems$$6$$[$i$$791$$], $JSCompiler_StaticMethods_addCSSClassName$$($elem$$67$$, $selectedClassName$$3$$), $JSCompiler_StaticMethods_setAriaProperties$$($JSCompiler_StaticMethods_highlightElems$self$$, $elem$$67$$)
      }
    }
  }
}
function $JSCompiler_StaticMethods_applySelection$$($JSCompiler_StaticMethods_applySelection$self$$, $startRow$$5$$, $endRow$$2$$) {
  var $i$$792$$, $ranges$$1$$, $elems$$7$$;
  $ranges$$1$$ = $JSCompiler_StaticMethods_applySelection$self$$.$GetSelection$();
  for($i$$792$$ = 0;$i$$792$$ < $ranges$$1$$.length;$i$$792$$ += 1) {
    $elems$$7$$ = $JSCompiler_StaticMethods_getElementsInRange$$($JSCompiler_StaticMethods_applySelection$self$$, $ranges$$1$$[$i$$792$$], $startRow$$5$$, $endRow$$2$$), $JSCompiler_StaticMethods_highlightElems$$($JSCompiler_StaticMethods_applySelection$self$$, $elems$$7$$)
  }
}
$DvtDataGrid$$.prototype.$_isSelected$ = function $$DvtDataGrid$$$$$_isSelected$$($cell$$31$$) {
  var $selectedClassName$$4$$ = this.$getResources$().getMappedStyle("selected");
  return $selectedClassName$$4$$ != $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_containsCSSClassName$$($cell$$31$$, $selectedClassName$$4$$) : $JSCompiler_alias_FALSE$$
};
function $JSCompiler_StaticMethods_handleDatabodyClickSelection$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $event$$697$$) {
  var $index$$166_rowIndex$$inline_7835$$, $cell$$32_columnIndex$$inline_7836_index$$inline_7834$$, $ctrlKey$$11_indexToRemove$$inline_7837$$, $ranges$$inline_7838_shiftKey$$7$$;
  $cell$$32_columnIndex$$inline_7836_index$$inline_7834$$ = $JSCompiler_StaticMethods_findCell$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $event$$697$$.target);
  $cell$$32_columnIndex$$inline_7836_index$$inline_7834$$ != $JSCompiler_alias_NULL$$ && ($index$$166_rowIndex$$inline_7835$$ = {row:$JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$getRowIndex$($cell$$32_columnIndex$$inline_7836_index$$inline_7834$$.parentNode), column:$JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$getCellIndex$($cell$$32_columnIndex$$inline_7836_index$$inline_7834$$)});
  if($index$$166_rowIndex$$inline_7835$$ != $JSCompiler_alias_NULL$$ && $index$$166_rowIndex$$inline_7835$$ != $JSCompiler_alias_VOID$$) {
    $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$166_rowIndex$$inline_7835$$);
    $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$GetSelection$().slice(0);
    $ctrlKey$$11_indexToRemove$$inline_7837$$ = $JSCompiler_StaticMethods_ctrlEquivalent$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_utils$, $event$$697$$);
    $ranges$$inline_7838_shiftKey$$7$$ = $event$$697$$.shiftKey;
    if($JSCompiler_StaticMethods_isMultipleSelection$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$)) {
      if($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_utils$.$isTouchDevice$()) {
        if($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$_isSelected$($cell$$32_columnIndex$$inline_7836_index$$inline_7834$$)) {
          $cell$$32_columnIndex$$inline_7836_index$$inline_7834$$ = $index$$166_rowIndex$$inline_7835$$;
          var $i$$inline_7839$$, $endIndex$$inline_7842_range$$inline_7840_rangeEndColumn$$inline_7846$$, $rangeStartColumn$$inline_7845_startIndex$$inline_7841$$, $rangeStartRow$$inline_7843$$, $rangeEndRow$$inline_7844$$;
          "row" == $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_options$.$getSelectionMode$() && ($cell$$32_columnIndex$$inline_7836_index$$inline_7834$$ = $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.createIndex($cell$$32_columnIndex$$inline_7836_index$$inline_7834$$.row));
          $index$$166_rowIndex$$inline_7835$$ = $cell$$32_columnIndex$$inline_7836_index$$inline_7834$$.row;
          $cell$$32_columnIndex$$inline_7836_index$$inline_7834$$ = $cell$$32_columnIndex$$inline_7836_index$$inline_7834$$.column;
          $ctrlKey$$11_indexToRemove$$inline_7837$$ = -1;
          $ranges$$inline_7838_shiftKey$$7$$ = $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$GetSelection$();
          for($i$$inline_7839$$ = 0;$i$$inline_7839$$ < $ranges$$inline_7838_shiftKey$$7$$.length;$i$$inline_7839$$ += 1) {
            if($endIndex$$inline_7842_range$$inline_7840_rangeEndColumn$$inline_7846$$ = $ranges$$inline_7838_shiftKey$$7$$[$i$$inline_7839$$], $rangeStartColumn$$inline_7845_startIndex$$inline_7841$$ = $endIndex$$inline_7842_range$$inline_7840_rangeEndColumn$$inline_7846$$.startIndex, $endIndex$$inline_7842_range$$inline_7840_rangeEndColumn$$inline_7846$$ = $JSCompiler_StaticMethods_getEndIndex$$($endIndex$$inline_7842_range$$inline_7840_rangeEndColumn$$inline_7846$$), $rangeStartRow$$inline_7843$$ = 
            $rangeStartColumn$$inline_7845_startIndex$$inline_7841$$.row, $rangeEndRow$$inline_7844$$ = $endIndex$$inline_7842_range$$inline_7840_rangeEndColumn$$inline_7846$$.row, !($rangeStartRow$$inline_7843$$ != $index$$166_rowIndex$$inline_7835$$ || $rangeEndRow$$inline_7844$$ != $index$$166_rowIndex$$inline_7835$$)) {
              if(!isNaN($rangeStartColumn$$inline_7845_startIndex$$inline_7841$$.column) && !isNaN($endIndex$$inline_7842_range$$inline_7840_rangeEndColumn$$inline_7846$$.column)) {
                if($rangeStartColumn$$inline_7845_startIndex$$inline_7841$$ = $rangeStartColumn$$inline_7845_startIndex$$inline_7841$$.column, $endIndex$$inline_7842_range$$inline_7840_rangeEndColumn$$inline_7846$$ = $endIndex$$inline_7842_range$$inline_7840_rangeEndColumn$$inline_7846$$.column, !($rangeStartColumn$$inline_7845_startIndex$$inline_7841$$ != $cell$$32_columnIndex$$inline_7836_index$$inline_7834$$ || $endIndex$$inline_7842_range$$inline_7840_rangeEndColumn$$inline_7846$$ != $cell$$32_columnIndex$$inline_7836_index$$inline_7834$$)) {
                  $ctrlKey$$11_indexToRemove$$inline_7837$$ = $i$$inline_7839$$;
                  break
                }
              }else {
                if(isNaN($cell$$32_columnIndex$$inline_7836_index$$inline_7834$$)) {
                  $ctrlKey$$11_indexToRemove$$inline_7837$$ = $i$$inline_7839$$;
                  break
                }
              }
            }
          }
          -1 != $ctrlKey$$11_indexToRemove$$inline_7837$$ && ($JSCompiler_StaticMethods_unhighlightRange$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $ranges$$inline_7838_shiftKey$$7$$[$ctrlKey$$11_indexToRemove$$inline_7837$$]), $ranges$$inline_7838_shiftKey$$7$$.splice($ctrlKey$$11_indexToRemove$$inline_7837$$, 1))
        }else {
          $JSCompiler_StaticMethods_augmentSelectionAndFocus$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$166_rowIndex$$inline_7835$$)
        }
      }else {
        !$ctrlKey$$11_indexToRemove$$inline_7837$$ && !$ranges$$inline_7838_shiftKey$$7$$ ? $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$166_rowIndex$$inline_7835$$) : !$ctrlKey$$11_indexToRemove$$inline_7837$$ && $ranges$$inline_7838_shiftKey$$7$$ ? $JSCompiler_StaticMethods_extendSelection$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$166_rowIndex$$inline_7835$$) : $JSCompiler_StaticMethods_augmentSelectionAndFocus$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, 
        $index$$166_rowIndex$$inline_7835$$)
      }
    }else {
      $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$166_rowIndex$$inline_7835$$)
    }
    $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$GetSelection$();
    $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$fireSelectionEvent$($event$$697$$)
  }
}
function $JSCompiler_StaticMethods__clearSelection$$($JSCompiler_StaticMethods__clearSelection$self$$) {
  var $i$$inline_7851$$, $ranges$$inline_7852$$;
  $ranges$$inline_7852$$ = $JSCompiler_StaticMethods__clearSelection$self$$.$GetSelection$();
  for($i$$inline_7851$$ = 0;$i$$inline_7851$$ < $ranges$$inline_7852$$.length;$i$$inline_7851$$ += 1) {
    $JSCompiler_StaticMethods_unhighlightRange$$($JSCompiler_StaticMethods__clearSelection$self$$, $ranges$$inline_7852$$[$i$$inline_7851$$])
  }
  $JSCompiler_StaticMethods__clearSelection$self$$.$m_active$ != $JSCompiler_alias_NULL$$ && "row" == $JSCompiler_StaticMethods__clearSelection$self$$.$m_options$.$getSelectionMode$() && $JSCompiler_StaticMethods_unhighlightActive$$($JSCompiler_StaticMethods__clearSelection$self$$);
  $JSCompiler_StaticMethods__clearSelection$self$$.$GetSelection$().length = 0
}
function $JSCompiler_StaticMethods_setActionableMode$$($JSCompiler_StaticMethods_setActionableMode$self$$, $flag$$6$$) {
  $JSCompiler_StaticMethods_setActionableMode$self$$.$m_keyMode$ = $flag$$6$$ ? "actionable" : "navigation"
}
function $JSCompiler_StaticMethods__selectEntireRow$$($JSCompiler_StaticMethods__selectEntireRow$self$$, $endIndex$$10_row$$38$$, $event$$699$$) {
  var $startIndex$$8$$;
  $startIndex$$8$$ = $JSCompiler_StaticMethods__selectEntireRow$self$$.createIndex($endIndex$$10_row$$38$$, 0);
  $endIndex$$10_row$$38$$ = $JSCompiler_StaticMethods__selectEntireRow$self$$.createIndex($endIndex$$10_row$$38$$, -1);
  $JSCompiler_StaticMethods__selectRange$$($JSCompiler_StaticMethods__selectEntireRow$self$$, $startIndex$$8$$, $endIndex$$10_row$$38$$, $event$$699$$)
}
function $JSCompiler_StaticMethods__selectEntireColumn$$($JSCompiler_StaticMethods__selectEntireColumn$self$$, $column$$13_endIndex$$11$$, $event$$700$$) {
  var $startIndex$$9$$;
  $startIndex$$9$$ = $JSCompiler_StaticMethods__selectEntireColumn$self$$.createIndex(0, $column$$13_endIndex$$11$$);
  $column$$13_endIndex$$11$$ = $JSCompiler_StaticMethods__selectEntireColumn$self$$.createIndex(-1, $column$$13_endIndex$$11$$);
  $JSCompiler_StaticMethods__selectRange$$($JSCompiler_StaticMethods__selectEntireColumn$self$$, $startIndex$$9$$, $column$$13_endIndex$$11$$, $event$$700$$)
}
function $JSCompiler_StaticMethods__selectRange$$($JSCompiler_StaticMethods__selectRange$self$$, $elems$$inline_7856_newRange$$1_startIndex$$10$$, $endIndex$$12$$, $event$$701$$) {
  $JSCompiler_StaticMethods__clearSelection$$($JSCompiler_StaticMethods__selectRange$self$$);
  $elems$$inline_7856_newRange$$1_startIndex$$10$$ = $JSCompiler_StaticMethods__selectRange$self$$.createRange($elems$$inline_7856_newRange$$1_startIndex$$10$$, $endIndex$$12$$);
  $JSCompiler_StaticMethods__selectRange$self$$.$GetSelection$().push($elems$$inline_7856_newRange$$1_startIndex$$10$$);
  $elems$$inline_7856_newRange$$1_startIndex$$10$$ = $JSCompiler_StaticMethods_getElementsInRange$$($JSCompiler_StaticMethods__selectRange$self$$, $elems$$inline_7856_newRange$$1_startIndex$$10$$);
  $JSCompiler_StaticMethods_highlightElems$$($JSCompiler_StaticMethods__selectRange$self$$, $elems$$inline_7856_newRange$$1_startIndex$$10$$);
  $JSCompiler_StaticMethods__selectRange$self$$.$m_active$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__selectRange$self$$.$m_selectionFrontier$ = $JSCompiler_StaticMethods__selectRange$self$$.$m_active$, $JSCompiler_StaticMethods_highlightActive$$($JSCompiler_StaticMethods__selectRange$self$$));
  $JSCompiler_StaticMethods__selectRange$self$$.$fireSelectionEvent$($event$$701$$)
}
function $JSCompiler_StaticMethods_focusPrevElementOutsideGrid$$($JSCompiler_StaticMethods_focusPrevElementOutsideGrid$self$$, $elem$$69$$) {
  var $lastChild$$3_parent$$99_prev$$3$$;
  $elem$$69$$ == $JSCompiler_alias_VOID$$ && ($elem$$69$$ = $JSCompiler_StaticMethods_focusPrevElementOutsideGrid$self$$.$m_root$);
  $lastChild$$3_parent$$99_prev$$3$$ = $elem$$69$$.previousElementSibling;
  $lastChild$$3_parent$$99_prev$$3$$ != $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods__isFocusableElement$$($lastChild$$3_parent$$99_prev$$3$$) ? $lastChild$$3_parent$$99_prev$$3$$.focus() : $JSCompiler_StaticMethods_focusPrevElementOutsideGrid$$($JSCompiler_StaticMethods_focusPrevElementOutsideGrid$self$$, $lastChild$$3_parent$$99_prev$$3$$) : ($lastChild$$3_parent$$99_prev$$3$$ = $elem$$69$$.parentNode, $lastChild$$3_parent$$99_prev$$3$$ != $JSCompiler_alias_NULL$$ && ($lastChild$$3_parent$$99_prev$$3$$ = 
  $lastChild$$3_parent$$99_prev$$3$$.lastElementChild, $lastChild$$3_parent$$99_prev$$3$$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__isFocusableElement$$($lastChild$$3_parent$$99_prev$$3$$) ? $lastChild$$3_parent$$99_prev$$3$$.focus() : $JSCompiler_StaticMethods_focusPrevElementOutsideGrid$$($JSCompiler_StaticMethods_focusPrevElementOutsideGrid$self$$, $lastChild$$3_parent$$99_prev$$3$$)))
}
function $JSCompiler_StaticMethods_focusNextElementOutsideGrid$$($JSCompiler_StaticMethods_focusNextElementOutsideGrid$self$$, $elem$$70$$) {
  var $firstChild_next$$10$$;
  $elem$$70$$ == $JSCompiler_alias_VOID$$ && ($elem$$70$$ = $JSCompiler_StaticMethods_focusNextElementOutsideGrid$self$$.$m_root$);
  $firstChild_next$$10$$ = $elem$$70$$.nextElementSibling;
  $firstChild_next$$10$$ != $JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods__isFocusableElement$$($firstChild_next$$10$$) ? $firstChild_next$$10$$.focus() : $JSCompiler_StaticMethods_focusNextElementOutsideGrid$$($JSCompiler_StaticMethods_focusNextElementOutsideGrid$self$$, $firstChild_next$$10$$) : ($firstChild_next$$10$$ = $elem$$70$$.firstElementChild, $firstChild_next$$10$$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__isFocusableElement$$($firstChild_next$$10$$) ? $firstChild_next$$10$$.focus() : 
  $JSCompiler_StaticMethods_focusNextElementOutsideGrid$$($JSCompiler_StaticMethods_focusNextElementOutsideGrid$self$$, $firstChild_next$$10$$)))
}
$DvtDataGrid$$.prototype.$GetSelection$ = function $$DvtDataGrid$$$$$GetSelection$$() {
  this.$m_selection$ == $JSCompiler_alias_NULL$$ && (this.$m_selection$ = []);
  return this.$m_selection$
};
$DvtDataGrid$$.prototype.GetSelection = $DvtDataGrid$$.prototype.$GetSelection$;
$DvtDataGrid$$.prototype.$SetSelection$ = function $$DvtDataGrid$$$$$SetSelection$$($selection$$28$$) {
  $selection$$28$$ != $JSCompiler_alias_VOID$$ && ($selection$$28$$ == $JSCompiler_alias_NULL$$ && ($selection$$28$$ = []), this.$m_selection$ = $selection$$28$$, this.$m_databody$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_applySelection$$(this, this.$m_startRow$, this.$m_endRow$), this.$fireSelectionEvent$($JSCompiler_alias_NULL$$))
};
$DvtDataGrid$$.prototype.SetSelection = $DvtDataGrid$$.prototype.$SetSelection$;
$DvtDataGrid$$.prototype.$fireSelectionEvent$ = function $$DvtDataGrid$$$$$fireSelectionEvent$$($details$$5_event$$702$$) {
  $details$$5_event$$702$$ = {event:$details$$5_event$$702$$, ui:{selection:this.$GetSelection$()}};
  this.fireEvent("select", $details$$5_event$$702$$)
};
function $JSCompiler_StaticMethods_extendSelection$$($JSCompiler_StaticMethods_extendSelection$self$$, $index$$167$$) {
  var $anchor$$4_elems$$inline_7868_newRange$$2$$, $selection$$29$$, $currentRange$$, $startIndexesMatch$$, $endIndexesMatch$$;
  $anchor$$4_elems$$inline_7868_newRange$$2$$ = $JSCompiler_StaticMethods_extendSelection$self$$.$m_active$;
  if($anchor$$4_elems$$inline_7868_newRange$$2$$ != $JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_extendSelection$self$$.$m_selectionFrontier$ = $index$$167$$, "row" == $JSCompiler_StaticMethods_extendSelection$self$$.$m_options$.$getSelectionMode$() && ($index$$167$$ = $JSCompiler_StaticMethods_extendSelection$self$$.createIndex($index$$167$$.row)), $anchor$$4_elems$$inline_7868_newRange$$2$$ = $JSCompiler_StaticMethods_extendSelection$self$$.createRange($anchor$$4_elems$$inline_7868_newRange$$2$$, 
  $index$$167$$), $selection$$29$$ = $JSCompiler_StaticMethods_extendSelection$self$$.$GetSelection$(), $currentRange$$ = $selection$$29$$[$selection$$29$$.length - 1], $startIndexesMatch$$ = $currentRange$$.startIndex.row == $anchor$$4_elems$$inline_7868_newRange$$2$$.startIndex.row, $currentRange$$.startIndex.column != $JSCompiler_alias_NULL$$ && $anchor$$4_elems$$inline_7868_newRange$$2$$.startIndex.column != $JSCompiler_alias_NULL$$ && ($startIndexesMatch$$ = $startIndexesMatch$$ && $currentRange$$.startIndex.column == 
  $anchor$$4_elems$$inline_7868_newRange$$2$$.startIndex.column), $endIndexesMatch$$ = $currentRange$$.endIndex.row == $anchor$$4_elems$$inline_7868_newRange$$2$$.endIndex.row, $currentRange$$.endIndex.column != $JSCompiler_alias_NULL$$ && $anchor$$4_elems$$inline_7868_newRange$$2$$.endIndex.column != $JSCompiler_alias_NULL$$ && ($endIndexesMatch$$ = $endIndexesMatch$$ && $currentRange$$.endIndex.column == $anchor$$4_elems$$inline_7868_newRange$$2$$.endIndex.column), !$startIndexesMatch$$ || !$endIndexesMatch$$)) {
    $selection$$29$$.pop(), $selection$$29$$.push($anchor$$4_elems$$inline_7868_newRange$$2$$), $JSCompiler_StaticMethods_unhighlightRange$$($JSCompiler_StaticMethods_extendSelection$self$$, $currentRange$$), $anchor$$4_elems$$inline_7868_newRange$$2$$ = $JSCompiler_StaticMethods_getElementsInRange$$($JSCompiler_StaticMethods_extendSelection$self$$, $anchor$$4_elems$$inline_7868_newRange$$2$$), $JSCompiler_StaticMethods_highlightElems$$($JSCompiler_StaticMethods_extendSelection$self$$, $anchor$$4_elems$$inline_7868_newRange$$2$$), 
    $JSCompiler_StaticMethods_highlightActive$$($JSCompiler_StaticMethods_extendSelection$self$$)
  }
}
function $JSCompiler_StaticMethods_augmentSelectionAndFocus$$($JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$, $index$$168$$) {
  var $selection$$30$$, $range$$16$$;
  $selection$$30$$ = $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$GetSelection$();
  0 < $selection$$30$$.length && $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$m_active$ != $JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_unhighlightActive$$($JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$, !$JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$m_discontiguousSelection$);
  $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$m_active$ = $index$$168$$;
  $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$m_selectionFrontier$ = $index$$168$$;
  "row" == $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$m_options$.$getSelectionMode$() && ($index$$168$$ = $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.createIndex($index$$168$$.row));
  $range$$16$$ = $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.createRange($index$$168$$, $index$$168$$);
  $selection$$30$$.push($range$$16$$);
  $JSCompiler_StaticMethods_highlightActive$$($JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$);
  $JSCompiler_StaticMethods_highlightIndex$$($JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$, $index$$168$$, "selected")
}
$DvtDataGrid$$.prototype.$selectAndFocus$ = function $$DvtDataGrid$$$$$selectAndFocus$$($index$$169$$) {
  this.$m_discontiguousSelection$ ? this.$m_active$ != $JSCompiler_alias_NULL$$ && this.$m_selectionFrontier$ == this.$m_active$ && ($JSCompiler_StaticMethods_unhighlightActive$$(this), this.$GetSelection$().pop()) : $JSCompiler_StaticMethods__clearSelection$$(this);
  $JSCompiler_StaticMethods_augmentSelectionAndFocus$$(this, $index$$169$$)
};
function $JSCompiler_StaticMethods_getFocusableElementsInNode$$($node$$307_nodes$$16$$) {
  var $inputElems$$, $elem$$72$$, $nodeCount$$10$$, $inputRegExp$$, $i$$794$$;
  $inputElems$$ = [];
  if(document.evaluate) {
    $node$$307_nodes$$16$$ = document.evaluate(".//input|.//select|.//textarea|.//button|.//a|.//INPUT|.//SELECT|.//TEXTAREA|.//BUTTON|.//A", $node$$307_nodes$$16$$, $JSCompiler_alias_NULL$$, XPathResult.ANY_TYPE, $JSCompiler_alias_NULL$$);
    for($elem$$72$$ = $node$$307_nodes$$16$$.iterateNext();$elem$$72$$;) {
      !$elem$$72$$.disabled && (!$elem$$72$$.tabIndex || 0 < $elem$$72$$.tabIndex) && $inputElems$$.push($elem$$72$$), $elem$$72$$ = $node$$307_nodes$$16$$.iterateNext()
    }
  }else {
    $node$$307_nodes$$16$$ = $node$$307_nodes$$16$$.getElementsByTagName("*");
    $nodeCount$$10$$ = $node$$307_nodes$$16$$.length;
    $inputRegExp$$ = /^INPUT|SELECT|BUTTON|^A\b|TEXTAREA/;
    for($i$$794$$ = 0;$i$$794$$ < $nodeCount$$10$$;$i$$794$$ += 1) {
      $elem$$72$$ = $node$$307_nodes$$16$$[$i$$794$$], $elem$$72$$.tagName.match($inputRegExp$$) && (!$elem$$72$$.disabled && (!$elem$$72$$.tabIndex || 0 < $elem$$72$$.tabIndex)) && $inputElems$$.push($elem$$72$$)
    }
  }
  return $inputElems$$
}
;
function $JSCompiler_StaticMethods__isDOMElementResizable$$($JSCompiler_StaticMethods__isDOMElementResizable$self$$, $element$$17$$) {
  return"true" === $element$$17$$.getAttribute($JSCompiler_StaticMethods__isDOMElementResizable$self$$.$getResources$().getMappedAttribute("resizable"))
}
function $JSCompiler_StaticMethods__isDOMElementSiblingResizable$$($JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$, $element$$18$$) {
  if($JSCompiler_StaticMethods_containsCSSClassName$$($element$$18$$, $JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.$getResources$().getMappedStyle("colheadercell"))) {
    if($element$$18$$.previousSibling !== $JSCompiler_alias_NULL$$) {
      return"true" === $element$$18$$.previousSibling.getAttribute($JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.$getResources$().getMappedAttribute("resizable"))
    }
  }else {
    if($JSCompiler_StaticMethods_containsCSSClassName$$($element$$18$$, $JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.$getResources$().getMappedStyle("rowheadercell")) && $element$$18$$.parentNode.previousSibling.firstChild !== $JSCompiler_alias_NULL$$) {
      return"true" === $element$$18$$.parentNode.previousSibling.firstChild.getAttribute($JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.$getResources$().getMappedAttribute("resizable"))
    }
  }
  return $JSCompiler_alias_FALSE$$
}
function $JSCompiler_StaticMethods_manageHeaderCursor$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $event$$664$$) {
  var $elem$$42$$ = $event$$664$$.target, $resizeHeaderMode$$, $edges_leftEdge$$inline_7360$$, $cursorX$$, $cursorY$$, $widthResizable$$, $heightResizable$$, $siblingResizable$$, $elem$$inline_7358_rtl$$15_targetHeight$$inline_7363$$, $elem$$42$$ = $event$$664$$.target;
  if($JSCompiler_StaticMethods_containsCSSClassName$$($elem$$42$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$getResources$().getMappedStyle("colheadercell"))) {
    $resizeHeaderMode$$ = "column", $heightResizable$$ = "enable" === $JSCompiler_StaticMethods_isResizable$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_options$, $resizeHeaderMode$$).height ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$, $widthResizable$$ = $JSCompiler_StaticMethods__isDOMElementResizable$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$42$$), $siblingResizable$$ = $JSCompiler_StaticMethods__isDOMElementSiblingResizable$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, 
    $elem$$42$$)
  }else {
    if($JSCompiler_StaticMethods_containsCSSClassName$$($elem$$42$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$getResources$().getMappedStyle("rowheadercell"))) {
      $resizeHeaderMode$$ = "row", $widthResizable$$ = "enable" === $JSCompiler_StaticMethods_isResizable$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_options$, $resizeHeaderMode$$).width ? $JSCompiler_alias_TRUE$$ : $JSCompiler_alias_FALSE$$, $heightResizable$$ = $JSCompiler_StaticMethods__isDOMElementResizable$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$42$$), $siblingResizable$$ = $JSCompiler_StaticMethods__isDOMElementSiblingResizable$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, 
      $elem$$42$$)
    }else {
      return"default"
    }
  }
  $cursorX$$ = $event$$664$$.pageX;
  $cursorY$$ = $event$$664$$.pageY;
  $elem$$inline_7358_rtl$$15_targetHeight$$inline_7363$$ = $elem$$42$$;
  var $elementXY$$inline_7359_topEdge$$inline_7361$$, $targetWidth$$inline_7362$$;
  $elementXY$$inline_7359_topEdge$$inline_7361$$ = $JSCompiler_StaticMethods_findPos$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$inline_7358_rtl$$15_targetHeight$$inline_7363$$);
  $edges_leftEdge$$inline_7360$$ = $elementXY$$inline_7359_topEdge$$inline_7361$$[0];
  $elementXY$$inline_7359_topEdge$$inline_7361$$ = $elementXY$$inline_7359_topEdge$$inline_7361$$[1];
  $JSCompiler_StaticMethods_containsCSSClassName$$($elem$$inline_7358_rtl$$15_targetHeight$$inline_7363$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$getResources$().getMappedStyle("colheadercell")) ? ($targetWidth$$inline_7362$$ = isNaN($JSCompiler_StaticMethods_getElementWidth$$($elem$$inline_7358_rtl$$15_targetHeight$$inline_7363$$)) ? 50 : $JSCompiler_StaticMethods_getElementWidth$$($elem$$inline_7358_rtl$$15_targetHeight$$inline_7363$$), $elem$$inline_7358_rtl$$15_targetHeight$$inline_7363$$ = 
  $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_colHeader$)) : ($targetWidth$$inline_7362$$ = $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_rowHeader$), $elem$$inline_7358_rtl$$15_targetHeight$$inline_7363$$ = isNaN($JSCompiler_StaticMethods_getElementHeight$$($elem$$inline_7358_rtl$$15_targetHeight$$inline_7363$$)) ? $JSCompiler_StaticMethods_getDefaultRowHeight$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$) : 
  $JSCompiler_StaticMethods_getElementHeight$$($elem$$inline_7358_rtl$$15_targetHeight$$inline_7363$$));
  $edges_leftEdge$$inline_7360$$ = [$edges_leftEdge$$inline_7360$$, $elementXY$$inline_7359_topEdge$$inline_7361$$, $edges_leftEdge$$inline_7360$$ + $targetWidth$$inline_7362$$, $elementXY$$inline_7359_topEdge$$inline_7361$$ + $elem$$inline_7358_rtl$$15_targetHeight$$inline_7363$$];
  $elem$$inline_7358_rtl$$15_targetHeight$$inline_7363$$ = $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$getResources$().isRTLMode();
  if($widthResizable$$ && ($elem$$inline_7358_rtl$$15_targetHeight$$inline_7363$$ ? $cursorX$$ < $edges_leftEdge$$inline_7360$$[0] + 5 : $cursorX$$ > $edges_leftEdge$$inline_7360$$[2] - 5)) {
    return $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$42$$, "col-resize"
  }
  if("column" === $resizeHeaderMode$$ && $siblingResizable$$ && ($elem$$inline_7358_rtl$$15_targetHeight$$inline_7363$$ ? $cursorX$$ > $edges_leftEdge$$inline_7360$$[2] - 5 : $cursorX$$ < $edges_leftEdge$$inline_7360$$[0] + 5)) {
    if($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$42$$.previousSibling, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ !== $JSCompiler_alias_NULL$$) {
      return"col-resize"
    }
  }
  return $heightResizable$$ && $cursorY$$ > $edges_leftEdge$$inline_7360$$[3] - 5 ? ($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$42$$, "row-resize") : "row" === $resizeHeaderMode$$ && ($siblingResizable$$ && $cursorY$$ < $edges_leftEdge$$inline_7360$$[1] + 5) && ($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$42$$.parentNode.previousSibling.firstChild, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ !== 
  $JSCompiler_alias_NULL$$) ? "row-resize" : "default"
}
function $JSCompiler_StaticMethods_resizeColWidth$$($JSCompiler_StaticMethods_resizeColWidth$self$$, $oldElementWidth$$1_widthChange$$, $newElementWidth$$1$$) {
  var $newScrollerWidth$$;
  $oldElementWidth$$1_widthChange$$ = $newElementWidth$$1$$ - $oldElementWidth$$1_widthChange$$;
  $newScrollerWidth$$ = $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_scroller$.firstChild) + $oldElementWidth$$1_widthChange$$;
  if($newScrollerWidth$$ >= $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$)) {
    $JSCompiler_StaticMethods_setElementWidth$$($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_scroller$.firstChild, $newScrollerWidth$$);
    $JSCompiler_StaticMethods_setElementWidth$$($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.firstChild, $newScrollerWidth$$);
    $JSCompiler_StaticMethods_setElementWidth$$($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.firstChild, $newScrollerWidth$$);
    $JSCompiler_StaticMethods_manageResizeScrollbars$$($JSCompiler_StaticMethods_resizeColWidth$self$$);
    $JSCompiler_StaticMethods_setElementWidth$$($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$, $newElementWidth$$1$$);
    var $dir$$inline_7368$$, $databodyRows$$inline_7369$$, $children$$inline_7370$$, $after$$inline_7371$$, $i$$inline_7372$$, $newStart$$inline_7373$$, $j$$inline_7374$$;
    $dir$$inline_7368$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$getResources$().isRTLMode() ? "right" : "left";
    $databodyRows$$inline_7369$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.firstChild.childNodes;
    $children$$inline_7370$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$.parentNode.childNodes;
    $after$$inline_7371$$ = $JSCompiler_alias_FALSE$$;
    if($children$$inline_7370$$.length === $databodyRows$$inline_7369$$[1].childNodes.length) {
      $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.style.display = "none";
      $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.style.display = "none";
      for($i$$inline_7372$$ = 0;$i$$inline_7372$$ < $children$$inline_7370$$.length;$i$$inline_7372$$ += 1) {
        if($children$$inline_7370$$[$i$$inline_7372$$] !== $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$ && $after$$inline_7371$$ === $JSCompiler_alias_TRUE$$) {
          $newStart$$inline_7373$$ = $JSCompiler_StaticMethods_getElementDir$$($children$$inline_7370$$[$i$$inline_7372$$], $dir$$inline_7368$$) + $oldElementWidth$$1_widthChange$$;
          $JSCompiler_StaticMethods_setElementDir$$($children$$inline_7370$$[$i$$inline_7372$$], $newStart$$inline_7373$$, $dir$$inline_7368$$);
          for($j$$inline_7374$$ = 1;$j$$inline_7374$$ < $databodyRows$$inline_7369$$.length;$j$$inline_7374$$ += 1) {
            $JSCompiler_StaticMethods_setElementDir$$($databodyRows$$inline_7369$$[$j$$inline_7374$$].childNodes[$i$$inline_7372$$], $newStart$$inline_7373$$, $dir$$inline_7368$$)
          }
        }else {
          if($children$$inline_7370$$[$i$$inline_7372$$] === $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$) {
            $after$$inline_7371$$ = $JSCompiler_alias_TRUE$$;
            $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_sizingManager$.$setSize$("column", $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$.getAttribute($JSCompiler_StaticMethods_resizeColWidth$self$$.$getResources$().getMappedAttribute("key")), $newElementWidth$$1$$);
            for($j$$inline_7374$$ = 1;$j$$inline_7374$$ < $databodyRows$$inline_7369$$.length;$j$$inline_7374$$ += 1) {
              $JSCompiler_StaticMethods_setElementWidth$$($databodyRows$$inline_7369$$[$j$$inline_7374$$].childNodes[$i$$inline_7372$$], $newElementWidth$$1$$)
            }
          }
        }
      }
      $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.style.display = "block";
      $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.style.display = "block"
    }
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_endColPixel$ += $oldElementWidth$$1_widthChange$$;
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_endColHeaderPixel$ += $oldElementWidth$$1_widthChange$$;
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_avgColWidth$ = $newScrollerWidth$$ / $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_dataSource$.getCount("column")
  }else {
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_overResizeLeft$ += $oldElementWidth$$1_widthChange$$
  }
}
function $JSCompiler_StaticMethods_resizeRowHeight$$($JSCompiler_StaticMethods_resizeRowHeight$self$$, $heightChange_oldElementHeight$$1$$, $newElementHeight$$1$$) {
  var $newScrollerHeight$$, $databodyRows$$inline_7379_newParentHeight$$;
  $heightChange_oldElementHeight$$1$$ = $newElementHeight$$1$$ - $heightChange_oldElementHeight$$1$$;
  $newScrollerHeight$$ = $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_scroller$.firstChild) + $heightChange_oldElementHeight$$1$$;
  if($newScrollerHeight$$ >= $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$)) {
    $JSCompiler_StaticMethods_setElementHeight$$($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode, $newElementHeight$$1$$);
    $databodyRows$$inline_7379_newParentHeight$$ = $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.firstChild) + $heightChange_oldElementHeight$$1$$;
    $JSCompiler_StaticMethods_setElementHeight$$($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.firstChild, $databodyRows$$inline_7379_newParentHeight$$);
    $JSCompiler_StaticMethods_setElementHeight$$($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_scroller$.firstChild, $newScrollerHeight$$);
    $JSCompiler_StaticMethods_setElementHeight$$($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.firstChild, $newScrollerHeight$$);
    var $rowHeaders$$inline_7380$$, $after$$inline_7381$$, $i$$inline_7382$$, $newStart$$inline_7383$$;
    $databodyRows$$inline_7379_newParentHeight$$ = $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.firstChild.childNodes;
    $rowHeaders$$inline_7380$$ = $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode.parentNode.childNodes;
    $after$$inline_7381$$ = $JSCompiler_alias_FALSE$$;
    if($databodyRows$$inline_7379_newParentHeight$$.length === $rowHeaders$$inline_7380$$.length) {
      $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.style.display = "none";
      $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.style.display = "none";
      for($i$$inline_7382$$ = 1;$i$$inline_7382$$ < $rowHeaders$$inline_7380$$.length;$i$$inline_7382$$ += 1) {
        $rowHeaders$$inline_7380$$[$i$$inline_7382$$].firstChild !== $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$ && $after$$inline_7381$$ === $JSCompiler_alias_TRUE$$ ? ($newStart$$inline_7383$$ = $JSCompiler_StaticMethods_getElementDir$$($rowHeaders$$inline_7380$$[$i$$inline_7382$$], "top") + $heightChange_oldElementHeight$$1$$, $JSCompiler_StaticMethods_setElementDir$$($rowHeaders$$inline_7380$$[$i$$inline_7382$$], $newStart$$inline_7383$$, "top"), $JSCompiler_StaticMethods_setElementDir$$($databodyRows$$inline_7379_newParentHeight$$[$i$$inline_7382$$], 
        $newStart$$inline_7383$$, "top")) : $rowHeaders$$inline_7380$$[$i$$inline_7382$$].firstChild === $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$ && ($after$$inline_7381$$ = $JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_sizingManager$.$setSize$("row", $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode.getAttribute($JSCompiler_StaticMethods_resizeRowHeight$self$$.$getResources$().getMappedAttribute("key")), $newElementHeight$$1$$), 
        $JSCompiler_StaticMethods_setElementHeight$$($databodyRows$$inline_7379_newParentHeight$$[$i$$inline_7382$$], $newElementHeight$$1$$))
      }
      $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.style.display = "block";
      $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.style.display = "block"
    }
    $JSCompiler_StaticMethods_manageResizeScrollbars$$($JSCompiler_StaticMethods_resizeRowHeight$self$$);
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_endRowPixel$ += $heightChange_oldElementHeight$$1$$;
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_endRowHeaderPixel$ += $heightChange_oldElementHeight$$1$$;
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_avgRowHeight$ = $newScrollerHeight$$ / $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_dataSource$.getCount("row")
  }
}
function $JSCompiler_StaticMethods_resizeColHeight$$($JSCompiler_StaticMethods_resizeColHeight$self$$, $heightChange$$1_oldElementHeight$$2$$, $newElementHeight$$2$$) {
  var $databody$$, $scroller$$, $rowHeader$$, $databodyHeight$$1$$;
  $JSCompiler_StaticMethods_setElementHeight$$($JSCompiler_StaticMethods_resizeColHeight$self$$.$m_colHeader$, $newElementHeight$$2$$);
  $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_colHeaderHeight$ = $newElementHeight$$2$$ + "px";
  $databody$$ = $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_databody$;
  $scroller$$ = $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_scroller$;
  $rowHeader$$ = $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_rowHeader$;
  $heightChange$$1_oldElementHeight$$2$$ = $newElementHeight$$2$$ - $heightChange$$1_oldElementHeight$$2$$;
  $databodyHeight$$1$$ = $JSCompiler_StaticMethods_getElementHeight$$($databody$$);
  $JSCompiler_StaticMethods_setElementHeight$$($databody$$, $databodyHeight$$1$$ - $heightChange$$1_oldElementHeight$$2$$);
  $JSCompiler_StaticMethods_setElementDir$$($databody$$, $newElementHeight$$2$$, "top");
  $JSCompiler_StaticMethods_setElementHeight$$($rowHeader$$, $databodyHeight$$1$$ - $heightChange$$1_oldElementHeight$$2$$);
  $JSCompiler_StaticMethods_setElementDir$$($rowHeader$$, $newElementHeight$$2$$, "top");
  $JSCompiler_StaticMethods_setElementHeight$$($scroller$$, $JSCompiler_StaticMethods_getElementHeight$$($scroller$$) - $heightChange$$1_oldElementHeight$$2$$);
  $JSCompiler_StaticMethods_setElementDir$$($scroller$$, $newElementHeight$$2$$, "top");
  $JSCompiler_StaticMethods_manageResizeScrollbars$$($JSCompiler_StaticMethods_resizeColHeight$self$$)
}
function $JSCompiler_StaticMethods_resizeRowWidth$$($JSCompiler_StaticMethods_resizeRowWidth$self_dir$$12$$, $oldElementWidth$$2_widthChange$$1$$, $newElementWidth$$2$$) {
  var $databody$$1$$, $scroller$$1$$, $colHeader$$1$$, $databodyWidth$$1$$;
  $JSCompiler_StaticMethods_setElementWidth$$($JSCompiler_StaticMethods_resizeRowWidth$self_dir$$12$$.$m_rowHeader$, $newElementWidth$$2$$);
  $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$12$$.$m_rowHeaderWidth$ = $newElementWidth$$2$$ + "px";
  $JSCompiler_StaticMethods_manageResizeScrollbars$$($JSCompiler_StaticMethods_resizeRowWidth$self_dir$$12$$);
  $databody$$1$$ = $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$12$$.$m_databody$;
  $scroller$$1$$ = $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$12$$.$m_scroller$;
  $colHeader$$1$$ = $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$12$$.$m_colHeader$;
  $oldElementWidth$$2_widthChange$$1$$ = $newElementWidth$$2$$ - $oldElementWidth$$2_widthChange$$1$$;
  $databodyWidth$$1$$ = $JSCompiler_StaticMethods_getElementWidth$$($databody$$1$$);
  $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$12$$ = $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$12$$.$getResources$().isRTLMode() ? "right" : "left";
  $JSCompiler_StaticMethods_setElementWidth$$($databody$$1$$, $databodyWidth$$1$$ - $oldElementWidth$$2_widthChange$$1$$);
  $JSCompiler_StaticMethods_setElementDir$$($databody$$1$$, $newElementWidth$$2$$, $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$12$$);
  $JSCompiler_StaticMethods_setElementWidth$$($colHeader$$1$$, $databodyWidth$$1$$ - $oldElementWidth$$2_widthChange$$1$$);
  $JSCompiler_StaticMethods_setElementDir$$($colHeader$$1$$, $newElementWidth$$2$$, $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$12$$);
  $JSCompiler_StaticMethods_setElementWidth$$($scroller$$1$$, $JSCompiler_StaticMethods_getElementWidth$$($scroller$$1$$) - $oldElementWidth$$2_widthChange$$1$$);
  $JSCompiler_StaticMethods_setElementDir$$($scroller$$1$$, $newElementWidth$$2$$, $JSCompiler_StaticMethods_resizeRowWidth$self_dir$$12$$)
}
function $JSCompiler_StaticMethods_getNewElementWidth$$($JSCompiler_StaticMethods_getNewElementWidth$self$$, $axis$$39$$, $oldElementWidth$$3$$) {
  var $databodyWidth$$2$$, $deltaWidth$$, $newElementWidth$$3$$, $oldScrollerWidth$$1$$, $halfGridWidth$$;
  $databodyWidth$$2$$ = $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_databody$);
  $deltaWidth$$ = $JSCompiler_StaticMethods_getNewElementWidth$self$$.$getResources$().isRTLMode() ? $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_lastMouseX$ - $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_currentMouseX$ : $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_currentMouseX$ - $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_lastMouseX$;
  $newElementWidth$$3$$ = $oldElementWidth$$3$$ + $deltaWidth$$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$;
  $oldScrollerWidth$$1$$ = $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_scroller$.firstChild);
  $halfGridWidth$$ = Math.round($JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_root$) / 2);
  $oldScrollerWidth$$1$$ + $deltaWidth$$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ < $databodyWidth$$2$$ ? ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ += $deltaWidth$$ - $databodyWidth$$2$$ + $oldScrollerWidth$$1$$, $newElementWidth$$3$$ = $oldElementWidth$$3$$ + ($databodyWidth$$2$$ - $oldScrollerWidth$$1$$)) : 20 > $newElementWidth$$3$$ ? ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ += $deltaWidth$$ - 20 + 
  $oldElementWidth$$3$$, $newElementWidth$$3$$ = 20) : ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ = 0, $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ = 0);
  "row" === $axis$$39$$ && ($newElementWidth$$3$$ > $halfGridWidth$$ ? ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$ += $deltaWidth$$ - $halfGridWidth$$ + $oldElementWidth$$3$$, $newElementWidth$$3$$ = $halfGridWidth$$) : $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$ = 0);
  return $newElementWidth$$3$$
}
function $JSCompiler_StaticMethods_getNewElementHeight$$($JSCompiler_StaticMethods_getNewElementHeight$self$$, $axis$$40$$, $oldElementHeight$$3$$) {
  var $databodyHeight$$2$$, $deltaHeight$$, $newElementHeight$$3$$, $oldScrollerHeight$$1$$, $halfGridHeight$$;
  $databodyHeight$$2$$ = $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_databody$);
  $deltaHeight$$ = $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_currentMouseY$ - $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_lastMouseY$;
  $newElementHeight$$3$$ = $oldElementHeight$$3$$ + $deltaHeight$$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$;
  $oldScrollerHeight$$1$$ = $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_scroller$.firstChild);
  $halfGridHeight$$ = Math.round($JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_root$) / 2);
  $oldScrollerHeight$$1$$ + $deltaHeight$$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ < $databodyHeight$$2$$ && ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ += $deltaHeight$$ - $databodyHeight$$2$$ + $oldScrollerHeight$$1$$, $newElementHeight$$3$$ = $oldElementHeight$$3$$ + $databodyHeight$$2$$ - $oldScrollerHeight$$1$$);
  20 > $newElementHeight$$3$$ ? ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ += $deltaHeight$$ - 20 + $oldElementHeight$$3$$, $newElementHeight$$3$$ = 20) : ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ = 0, $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ = 0);
  "column" === $axis$$40$$ && ($newElementHeight$$3$$ > $halfGridHeight$$ ? ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$ += $deltaHeight$$ - $halfGridHeight$$ + $oldElementHeight$$3$$, $newElementHeight$$3$$ = $halfGridHeight$$) : $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$ = 0);
  return $newElementHeight$$3$$
}
function $JSCompiler_StaticMethods_manageResizeScrollbars$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$) {
  var $databody$$2$$, $scroller$$2$$, $colHeader$$2$$, $rowHeader$$1$$, $databodyWidth$$3$$, $databodyHeight$$3$$, $isDatabodyVerticalScrollbarRequired$$, $isDatabodyHorizontalScrollbarRequired$$, $scrollbarSize$$;
  $databody$$2$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_databody$;
  $scroller$$2$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scroller$;
  $colHeader$$2$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_colHeader$;
  $rowHeader$$1$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_rowHeader$;
  $databodyWidth$$3$$ = $JSCompiler_StaticMethods_getElementWidth$$($databody$$2$$);
  $databodyHeight$$3$$ = $JSCompiler_StaticMethods_getElementHeight$$($databody$$2$$);
  $isDatabodyVerticalScrollbarRequired$$ = $JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $databodyHeight$$3$$);
  $isDatabodyHorizontalScrollbarRequired$$ = $JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $databodyWidth$$3$$);
  $scrollbarSize$$ = $JSCompiler_StaticMethods_getScrollbarSize$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_utils$);
  $isDatabodyHorizontalScrollbarRequired$$ && !$isDatabodyVerticalScrollbarRequired$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ ? $isDatabodyVerticalScrollbarRequired$$ = $JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $databodyHeight$$3$$ - $scrollbarSize$$) : !$isDatabodyHorizontalScrollbarRequired$$ && 
  $isDatabodyVerticalScrollbarRequired$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ ? $isDatabodyHorizontalScrollbarRequired$$ = $JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $databodyWidth$$3$$ - $scrollbarSize$$) : $isDatabodyHorizontalScrollbarRequired$$ && ($isDatabodyVerticalScrollbarRequired$$ && 
  $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$) && (!$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $databodyHeight$$3$$ + $scrollbarSize$$) && !$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $databodyWidth$$3$$ + $scrollbarSize$$)) && 
  ($isDatabodyVerticalScrollbarRequired$$ = $isDatabodyHorizontalScrollbarRequired$$ = $JSCompiler_alias_FALSE$$);
  !$isDatabodyVerticalScrollbarRequired$$ && !$isDatabodyHorizontalScrollbarRequired$$ && $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ ? ($JSCompiler_StaticMethods_setElementWidth$$($databody$$2$$, $databodyWidth$$3$$ + $scrollbarSize$$), $JSCompiler_StaticMethods_setElementHeight$$($databody$$2$$, $databodyHeight$$3$$ + $scrollbarSize$$), $JSCompiler_StaticMethods_setElementWidth$$($colHeader$$2$$, 
  $databodyWidth$$3$$ + $scrollbarSize$$), $JSCompiler_StaticMethods_setElementHeight$$($rowHeader$$1$$, $databodyHeight$$3$$ + $scrollbarSize$$), $scroller$$2$$.style.overflow = "visible") : !$isDatabodyVerticalScrollbarRequired$$ && $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ ? ($JSCompiler_StaticMethods_setElementWidth$$($databody$$2$$, $databodyWidth$$3$$ + $scrollbarSize$$), $JSCompiler_StaticMethods_setElementWidth$$($colHeader$$2$$, $databodyWidth$$3$$ + 
  $scrollbarSize$$)) : !$isDatabodyHorizontalScrollbarRequired$$ && $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && ($JSCompiler_StaticMethods_setElementHeight$$($databody$$2$$, $databodyHeight$$3$$ + $scrollbarSize$$), $JSCompiler_StaticMethods_setElementHeight$$($rowHeader$$1$$, $databodyHeight$$3$$ + $scrollbarSize$$));
  $isDatabodyVerticalScrollbarRequired$$ && $isDatabodyHorizontalScrollbarRequired$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ ? ($scroller$$2$$.style.overflow = "auto", $JSCompiler_StaticMethods_setElementWidth$$($databody$$2$$, $databodyWidth$$3$$ - $scrollbarSize$$), $JSCompiler_StaticMethods_setElementHeight$$($databody$$2$$, $databodyHeight$$3$$ - $scrollbarSize$$), 
  $JSCompiler_StaticMethods_setElementWidth$$($colHeader$$2$$, $databodyWidth$$3$$ - $scrollbarSize$$), $JSCompiler_StaticMethods_setElementHeight$$($rowHeader$$1$$, $databodyHeight$$3$$ - $scrollbarSize$$)) : $isDatabodyVerticalScrollbarRequired$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ ? ($scroller$$2$$.style.overflow = "auto", $JSCompiler_StaticMethods_setElementWidth$$($databody$$2$$, $databodyWidth$$3$$ - $scrollbarSize$$), $JSCompiler_StaticMethods_setElementWidth$$($colHeader$$2$$, 
  $databodyWidth$$3$$ - $scrollbarSize$$)) : $isDatabodyHorizontalScrollbarRequired$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && ($scroller$$2$$.style.overflow = "auto", $JSCompiler_StaticMethods_setElementHeight$$($databody$$2$$, $databodyHeight$$3$$ - $scrollbarSize$$), $JSCompiler_StaticMethods_setElementHeight$$($rowHeader$$1$$, $databodyHeight$$3$$ - $scrollbarSize$$));
  $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ = $isDatabodyHorizontalScrollbarRequired$$;
  $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ = $isDatabodyVerticalScrollbarRequired$$
}
function $JSCompiler_StaticMethods_handleContextMenuResize$$($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$121$$, $id$$320$$, $val$$80_value$$137$$) {
  $val$$80_value$$137$$ = parseInt($val$$80_value$$137$$, 10);
  if($JSCompiler_StaticMethods_containsCSSClassName$$($initialValue_target$$121$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$getResources$().getMappedStyle("sortascending")) || $JSCompiler_StaticMethods_containsCSSClassName$$($initialValue_target$$121$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$getResources$().getMappedStyle("sortdescending")) || $JSCompiler_StaticMethods_containsCSSClassName$$($initialValue_target$$121$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$getResources$().getMappedStyle("sortindicators"))) {
    $initialValue_target$$121$$ = $JSCompiler_StaticMethods_findHeader$$($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$121$$)
  }
  $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$ = $initialValue_target$$121$$;
  "resizeWidth" === $id$$320$$ ? ($initialValue_target$$121$$ = $initialValue_target$$121$$.offsetWidth, $initialValue_target$$121$$ !== $val$$80_value$$137$$ && ($JSCompiler_StaticMethods_containsCSSClassName$$($JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$getResources$().getMappedStyle("colheadercell")) ? $JSCompiler_StaticMethods__isDOMElementResizable$$($JSCompiler_StaticMethods_handleContextMenuResize$self$$, 
  $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$) && $JSCompiler_StaticMethods_resizeColWidth$$($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$121$$, $val$$80_value$$137$$) : $JSCompiler_StaticMethods_resizeRowWidth$$($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$121$$, $val$$80_value$$137$$))) : "resizeHeight" === $id$$320$$ && ($initialValue_target$$121$$ = $initialValue_target$$121$$.offsetHeight, 
  $initialValue_target$$121$$ !== $val$$80_value$$137$$ && ($JSCompiler_StaticMethods_containsCSSClassName$$($JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$getResources$().getMappedStyle("colheadercell")) ? $JSCompiler_StaticMethods_resizeColHeight$$($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$121$$, $val$$80_value$$137$$) : $JSCompiler_StaticMethods__isDOMElementResizable$$($JSCompiler_StaticMethods_handleContextMenuResize$self$$, 
  $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$) && $JSCompiler_StaticMethods_resizeRowHeight$$($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$121$$, $val$$80_value$$137$$)));
  $JSCompiler_StaticMethods_buildCorners$$($JSCompiler_StaticMethods_handleContextMenuResize$self$$)
}
;
function $JSCompiler_StaticMethods__showOrHideSortIndicators$$($JSCompiler_StaticMethods__showOrHideSortIndicators$self$$, $event$$656_header$$4_indicators$$, $hide$$2$$) {
  $event$$656_header$$4_indicators$$ = $JSCompiler_StaticMethods_findHeader$$($JSCompiler_StaticMethods__showOrHideSortIndicators$self$$, $event$$656_header$$4_indicators$$.target);
  $event$$656_header$$4_indicators$$ != $JSCompiler_alias_NULL$$ && ($event$$656_header$$4_indicators$$ = $event$$656_header$$4_indicators$$.lastChild, $event$$656_header$$4_indicators$$ != $JSCompiler_alias_NULL$$ && $event$$656_header$$4_indicators$$.className == $JSCompiler_StaticMethods__showOrHideSortIndicators$self$$.$getResources$().getMappedStyle("sortindicators") && ($event$$656_header$$4_indicators$$.style.display = $hide$$2$$ ? "none" : "inline-block"))
}
function $JSCompiler_StaticMethods__handleHeaderSort$$($JSCompiler_StaticMethods__handleHeaderSort$self$$, $event$$658$$, $direction$$32$$) {
  var $sortAscendClassName$$, $sortDescendClassName$$, $target$$117$$, $header$$6$$;
  $sortAscendClassName$$ = $JSCompiler_StaticMethods__handleHeaderSort$self$$.$getResources$().getMappedStyle("sortascending");
  $sortDescendClassName$$ = $JSCompiler_StaticMethods__handleHeaderSort$self$$.$getResources$().getMappedStyle("sortdescending");
  $target$$117$$ = $event$$658$$.target;
  $header$$6$$ = $JSCompiler_StaticMethods_findHeader$$($JSCompiler_StaticMethods__handleHeaderSort$self$$, $target$$117$$);
  $header$$6$$ != $JSCompiler_alias_NULL$$ && ($event$$658$$.direction == $JSCompiler_alias_NULL$$ && ($target$$117$$.className == $sortAscendClassName$$ ? $direction$$32$$ = "ascending" : $target$$117$$.className == $sortDescendClassName$$ && ($direction$$32$$ = "descending")), $JSCompiler_StaticMethods__doHeaderSort$$($JSCompiler_StaticMethods__handleHeaderSort$self$$, $event$$658$$, $header$$6$$, $direction$$32$$))
}
function $JSCompiler_StaticMethods__doHeaderSort$$($JSCompiler_StaticMethods__doHeaderSort$self$$, $details$$2_event$$660$$, $axis$$38_criteria$$2_header$$8$$, $direction$$34$$) {
  var $key$$89$$;
  $axis$$38_criteria$$2_header$$8$$.setAttribute($JSCompiler_StaticMethods__doHeaderSort$self$$.$getResources$().getMappedAttribute("sortDir"), $direction$$34$$);
  $key$$89$$ = $JSCompiler_StaticMethods__doHeaderSort$self$$.$_getKey$($axis$$38_criteria$$2_header$$8$$);
  var $columnHeaderCellClassName$$inline_7314$$, $rowHeaderCellClassName$$inline_7315$$;
  $columnHeaderCellClassName$$inline_7314$$ = $JSCompiler_StaticMethods__doHeaderSort$self$$.$getResources$().getMappedStyle("colheadercell");
  $rowHeaderCellClassName$$inline_7315$$ = $JSCompiler_StaticMethods__doHeaderSort$self$$.$getResources$().getMappedStyle("rowheadercell");
  $axis$$38_criteria$$2_header$$8$$ = $JSCompiler_StaticMethods_containsCSSClassName$$($axis$$38_criteria$$2_header$$8$$, $columnHeaderCellClassName$$inline_7314$$) ? "column" : $JSCompiler_StaticMethods_containsCSSClassName$$($axis$$38_criteria$$2_header$$8$$, $rowHeaderCellClassName$$inline_7315$$) ? "row" : $JSCompiler_alias_NULL$$;
  $direction$$34$$ != $JSCompiler_alias_NULL$$ && ($key$$89$$ != $JSCompiler_alias_NULL$$ && $axis$$38_criteria$$2_header$$8$$ != $JSCompiler_alias_NULL$$) && ($JSCompiler_StaticMethods_showStatusText$$($JSCompiler_StaticMethods__doHeaderSort$self$$), $axis$$38_criteria$$2_header$$8$$ = {axis:$axis$$38_criteria$$2_header$$8$$, key:$key$$89$$, direction:$direction$$34$$}, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_dataSource$.sort($axis$$38_criteria$$2_header$$8$$, {success:$JSCompiler_StaticMethods__doHeaderSort$self$$.$_handleSortSuccess$.bind($JSCompiler_StaticMethods__doHeaderSort$self$$), 
  error:$JSCompiler_StaticMethods__doHeaderSort$self$$.$_handleSortError$.bind($JSCompiler_StaticMethods__doHeaderSort$self$$)}), $details$$2_event$$660$$ = {event:$details$$2_event$$660$$, ui:{header:$key$$89$$, direction:$direction$$34$$}}, $JSCompiler_StaticMethods__doHeaderSort$self$$.fireEvent("sort", $details$$2_event$$660$$))
}
$DvtDataGrid$$.prototype.$_handleSortError$ = function $$DvtDataGrid$$$$$_handleSortError$$() {
  $JSCompiler_StaticMethods_hideStatusText$$(this)
};
$DvtDataGrid$$.prototype.$_getKey$ = function $$DvtDataGrid$$$$$_getKey$$($header$$9$$) {
  return $header$$9$$.getAttribute(this.$getResources$().getMappedAttribute("key"))
};
$DvtDataGrid$$.prototype.$_handleSortSuccess$ = function $$DvtDataGrid$$$$$_handleSortSuccess$$() {
  $JSCompiler_StaticMethods_hideStatusText$$(this);
  this.fetchCells(this.$m_databody$, this.$m_scroller$, this.$m_startRow$, this.$m_startCol$, this.$m_endRow$ - this.$m_startRow$, this.$m_endCol$ - this.$m_startCol$, {success:this.$handleCellsFetchSuccessForSort$, error:this.$handleCellsFetchError$})
};
$DvtDataGrid$$.prototype.$handleCellsFetchSuccessForSort$ = function $$DvtDataGrid$$$$$handleCellsFetchSuccessForSort$$($cellSet$$, $cellRange$$1$$) {
  var $oldElementSet$$inline_7318_rowStart$$, $oldLength$$inline_7327_rowCount$$10$$, $columnStart_oldSet$$inline_7328$$, $k$$inline_7344_l$$inline_7346_newRowElements$$;
  this.$m_fetching$.cells = $JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_isFetchComplete$$(this) && $JSCompiler_StaticMethods_hideStatusText$$(this);
  $oldElementSet$$inline_7318_rowStart$$ = $cellRange$$1$$[0].start;
  $oldLength$$inline_7327_rowCount$$10$$ = $cellSet$$.getCount("row");
  $columnStart_oldSet$$inline_7328$$ = $cellRange$$1$$[1].start;
  $cellSet$$.getCount("column");
  $k$$inline_7344_l$$inline_7346_newRowElements$$ = document.createDocumentFragment();
  $JSCompiler_StaticMethods__addRows$$(this, $k$$inline_7344_l$$inline_7346_newRowElements$$, $JSCompiler_alias_TRUE$$, this.$m_startRowPixel$, $oldElementSet$$inline_7318_rowStart$$, $oldLength$$inline_7327_rowCount$$10$$, $columnStart_oldSet$$inline_7328$$, $JSCompiler_alias_FALSE$$, $cellSet$$);
  $oldElementSet$$inline_7318_rowStart$$ = this.$m_databody$.firstChild;
  var $me$$inline_7325$$, $pos$$inline_7326_restSet$$inline_7331$$, $child$$inline_7355_idx$$inline_7351_newSet$$inline_7329$$, $animOrder$$inline_7330$$, $bottomLimit$$inline_7352_i$$inline_7341_v$$inline_7332$$, $gridBodyHeight$$inline_7334_limitRangeInPixels$$inline_7338$$, $rowHeight$$inline_7335$$, $offset$$inline_7336_rowsForAppend$$inline_7339_scrollTop$$inline_7337$$, $dkey$$inline_7347_order$$inline_7350_restSetLength$$inline_7340$$, $j$$inline_7342_topLimit$$inline_7353$$, $delay$$inline_7348_key$$inline_7343_kk$$inline_7345$$, 
  $keyAttr$$inline_7349$$, $rowPos$$inline_7354$$;
  $me$$inline_7325$$ = this;
  $pos$$inline_7326_restSet$$inline_7331$$ = 0;
  $oldLength$$inline_7327_rowCount$$10$$ = $oldElementSet$$inline_7318_rowStart$$.childElementCount;
  $columnStart_oldSet$$inline_7328$$ = $JSCompiler_StaticMethods_getDataKeySet$$(this, $oldElementSet$$inline_7318_rowStart$$);
  $child$$inline_7355_idx$$inline_7351_newSet$$inline_7329$$ = $JSCompiler_StaticMethods_getDataKeySet$$(this, $k$$inline_7344_l$$inline_7346_newRowElements$$);
  $animOrder$$inline_7330$$ = [];
  $pos$$inline_7326_restSet$$inline_7331$$ = [];
  $gridBodyHeight$$inline_7334_limitRangeInPixels$$inline_7338$$ = this.getHeight() - $JSCompiler_StaticMethods_getElementHeight$$(this.$m_colHeader$);
  $rowHeight$$inline_7335$$ = $JSCompiler_StaticMethods_getDefaultRowHeight$$(this);
  ($offset$$inline_7336_rowsForAppend$$inline_7339_scrollTop$$inline_7337$$ = parseInt($oldElementSet$$inline_7318_rowStart$$.firstElementChild.attributes.style.value.split("height:")[1].split("px")[0], 10)) || ($offset$$inline_7336_rowsForAppend$$inline_7339_scrollTop$$inline_7337$$ = 0);
  $offset$$inline_7336_rowsForAppend$$inline_7339_scrollTop$$inline_7337$$ = this.$m_scroller$.scrollTop - $offset$$inline_7336_rowsForAppend$$inline_7339_scrollTop$$inline_7337$$;
  $gridBodyHeight$$inline_7334_limitRangeInPixels$$inline_7338$$ = [$offset$$inline_7336_rowsForAppend$$inline_7339_scrollTop$$inline_7337$$, $offset$$inline_7336_rowsForAppend$$inline_7339_scrollTop$$inline_7337$$ + $gridBodyHeight$$inline_7334_limitRangeInPixels$$inline_7338$$];
  $offset$$inline_7336_rowsForAppend$$inline_7339_scrollTop$$inline_7337$$ = [];
  $dkey$$inline_7347_order$$inline_7350_restSetLength$$inline_7340$$ = 0;
  $keyAttr$$inline_7349$$ = this.$getResources$().getMappedAttribute("key");
  for($bottomLimit$$inline_7352_i$$inline_7341_v$$inline_7332$$ = 0;$bottomLimit$$inline_7352_i$$inline_7341_v$$inline_7332$$ < $columnStart_oldSet$$inline_7328$$.length;$bottomLimit$$inline_7352_i$$inline_7341_v$$inline_7332$$++) {
    $animOrder$$inline_7330$$[$columnStart_oldSet$$inline_7328$$[$bottomLimit$$inline_7352_i$$inline_7341_v$$inline_7332$$]] = $bottomLimit$$inline_7352_i$$inline_7341_v$$inline_7332$$
  }
  for($j$$inline_7342_topLimit$$inline_7353$$ = 0;$j$$inline_7342_topLimit$$inline_7353$$ < $child$$inline_7355_idx$$inline_7351_newSet$$inline_7329$$.length;$j$$inline_7342_topLimit$$inline_7353$$++) {
    $animOrder$$inline_7330$$.hasOwnProperty($child$$inline_7355_idx$$inline_7351_newSet$$inline_7329$$[$j$$inline_7342_topLimit$$inline_7353$$]) ? $animOrder$$inline_7330$$[$child$$inline_7355_idx$$inline_7351_newSet$$inline_7329$$[$j$$inline_7342_topLimit$$inline_7353$$]] > $j$$inline_7342_topLimit$$inline_7353$$ ? ($bottomLimit$$inline_7352_i$$inline_7341_v$$inline_7332$$ = $animOrder$$inline_7330$$[$child$$inline_7355_idx$$inline_7351_newSet$$inline_7329$$[$j$$inline_7342_topLimit$$inline_7353$$]] - 
    $j$$inline_7342_topLimit$$inline_7353$$, $animOrder$$inline_7330$$[$child$$inline_7355_idx$$inline_7351_newSet$$inline_7329$$[$j$$inline_7342_topLimit$$inline_7353$$]] = "up_-" + $bottomLimit$$inline_7352_i$$inline_7341_v$$inline_7332$$) : $animOrder$$inline_7330$$[$child$$inline_7355_idx$$inline_7351_newSet$$inline_7329$$[$j$$inline_7342_topLimit$$inline_7353$$]] < $j$$inline_7342_topLimit$$inline_7353$$ ? ($bottomLimit$$inline_7352_i$$inline_7341_v$$inline_7332$$ = $j$$inline_7342_topLimit$$inline_7353$$ - 
    $animOrder$$inline_7330$$[$child$$inline_7355_idx$$inline_7351_newSet$$inline_7329$$[$j$$inline_7342_topLimit$$inline_7353$$]], $animOrder$$inline_7330$$[$child$$inline_7355_idx$$inline_7351_newSet$$inline_7329$$[$j$$inline_7342_topLimit$$inline_7353$$]] = "down_" + $bottomLimit$$inline_7352_i$$inline_7341_v$$inline_7332$$) : $animOrder$$inline_7330$$[$child$$inline_7355_idx$$inline_7351_newSet$$inline_7329$$[$j$$inline_7342_topLimit$$inline_7353$$]] == $j$$inline_7342_topLimit$$inline_7353$$ && 
    ($animOrder$$inline_7330$$[$child$$inline_7355_idx$$inline_7351_newSet$$inline_7329$$[$j$$inline_7342_topLimit$$inline_7353$$]] = "no_0") : $pos$$inline_7326_restSet$$inline_7331$$[$child$$inline_7355_idx$$inline_7351_newSet$$inline_7329$$[$j$$inline_7342_topLimit$$inline_7353$$]] = $j$$inline_7342_topLimit$$inline_7353$$
  }
  for($delay$$inline_7348_key$$inline_7343_kk$$inline_7345$$ in $pos$$inline_7326_restSet$$inline_7331$$) {
    $pos$$inline_7326_restSet$$inline_7331$$.hasOwnProperty($delay$$inline_7348_key$$inline_7343_kk$$inline_7345$$) && ($dkey$$inline_7347_order$$inline_7350_restSetLength$$inline_7340$$++, $child$$inline_7355_idx$$inline_7351_newSet$$inline_7329$$ = $pos$$inline_7326_restSet$$inline_7331$$[$delay$$inline_7348_key$$inline_7343_kk$$inline_7345$$], $bottomLimit$$inline_7352_i$$inline_7341_v$$inline_7332$$ = $gridBodyHeight$$inline_7334_limitRangeInPixels$$inline_7338$$[1] + $oldElementSet$$inline_7318_rowStart$$.childNodes[1].clientHeight, 
    $j$$inline_7342_topLimit$$inline_7353$$ = $gridBodyHeight$$inline_7334_limitRangeInPixels$$inline_7338$$[0] - $oldElementSet$$inline_7318_rowStart$$.childNodes[1].clientHeight, $rowPos$$inline_7354$$ = $child$$inline_7355_idx$$inline_7351_newSet$$inline_7329$$ * $oldElementSet$$inline_7318_rowStart$$.childNodes[1].clientHeight, $rowPos$$inline_7354$$ < $bottomLimit$$inline_7352_i$$inline_7341_v$$inline_7332$$ && $rowPos$$inline_7354$$ > $j$$inline_7342_topLimit$$inline_7353$$ && ($child$$inline_7355_idx$$inline_7351_newSet$$inline_7329$$ = 
    $k$$inline_7344_l$$inline_7346_newRowElements$$.children[$child$$inline_7355_idx$$inline_7351_newSet$$inline_7329$$], $offset$$inline_7336_rowsForAppend$$inline_7339_scrollTop$$inline_7337$$.push($child$$inline_7355_idx$$inline_7351_newSet$$inline_7329$$)))
  }
  for($delay$$inline_7348_key$$inline_7343_kk$$inline_7345$$ = 0;$delay$$inline_7348_key$$inline_7343_kk$$inline_7345$$ < $columnStart_oldSet$$inline_7328$$.length;$delay$$inline_7348_key$$inline_7343_kk$$inline_7345$$++) {
    $animOrder$$inline_7330$$.hasOwnProperty($columnStart_oldSet$$inline_7328$$[$delay$$inline_7348_key$$inline_7343_kk$$inline_7345$$]) && /^-{0,1}\d*\.{0,1}\d+$/.test($animOrder$$inline_7330$$[$columnStart_oldSet$$inline_7328$$[$delay$$inline_7348_key$$inline_7343_kk$$inline_7345$$]]) && ($animOrder$$inline_7330$$[$columnStart_oldSet$$inline_7328$$[$delay$$inline_7348_key$$inline_7343_kk$$inline_7345$$]] = "up_30")
  }
  for($k$$inline_7344_l$$inline_7346_newRowElements$$ = 0;$k$$inline_7344_l$$inline_7346_newRowElements$$ < $offset$$inline_7336_rowsForAppend$$inline_7339_scrollTop$$inline_7337$$.length;$k$$inline_7344_l$$inline_7346_newRowElements$$++) {
    for($delay$$inline_7348_key$$inline_7343_kk$$inline_7345$$ = 0;$delay$$inline_7348_key$$inline_7343_kk$$inline_7345$$ < $offset$$inline_7336_rowsForAppend$$inline_7339_scrollTop$$inline_7337$$[$k$$inline_7344_l$$inline_7346_newRowElements$$].attributes.length;$delay$$inline_7348_key$$inline_7343_kk$$inline_7345$$++) {
      $dkey$$inline_7347_order$$inline_7350_restSetLength$$inline_7340$$ = $JSCompiler_alias_NULL$$, $offset$$inline_7336_rowsForAppend$$inline_7339_scrollTop$$inline_7337$$[$k$$inline_7344_l$$inline_7346_newRowElements$$].attributes[$delay$$inline_7348_key$$inline_7343_kk$$inline_7345$$].nodeName == $keyAttr$$inline_7349$$ && ($dkey$$inline_7347_order$$inline_7350_restSetLength$$inline_7340$$ = $offset$$inline_7336_rowsForAppend$$inline_7339_scrollTop$$inline_7337$$[$k$$inline_7344_l$$inline_7346_newRowElements$$].attributes[$delay$$inline_7348_key$$inline_7343_kk$$inline_7345$$].nodeValue, 
      $pos$$inline_7326_restSet$$inline_7331$$.hasOwnProperty($dkey$$inline_7347_order$$inline_7350_restSetLength$$inline_7340$$) && ($dkey$$inline_7347_order$$inline_7350_restSetLength$$inline_7340$$ = $pos$$inline_7326_restSet$$inline_7331$$[$dkey$$inline_7347_order$$inline_7350_restSetLength$$inline_7340$$], $JSCompiler_StaticMethods_addUpDownMoveStyle$$($offset$$inline_7336_rowsForAppend$$inline_7339_scrollTop$$inline_7337$$[$k$$inline_7344_l$$inline_7346_newRowElements$$], 0, 0, $gridBodyHeight$$inline_7334_limitRangeInPixels$$inline_7338$$[1] - 
      $dkey$$inline_7347_order$$inline_7350_restSetLength$$inline_7340$$ * $rowHeight$$inline_7335$$)))
    }
    $oldElementSet$$inline_7318_rowStart$$.appendChild($offset$$inline_7336_rowsForAppend$$inline_7339_scrollTop$$inline_7337$$[$k$$inline_7344_l$$inline_7346_newRowElements$$])
  }
  for($k$$inline_7344_l$$inline_7346_newRowElements$$ = 0;$k$$inline_7344_l$$inline_7346_newRowElements$$ < $oldElementSet$$inline_7318_rowStart$$.childElementCount;$k$$inline_7344_l$$inline_7346_newRowElements$$++) {
    if($delay$$inline_7348_key$$inline_7343_kk$$inline_7345$$ = 10 * $k$$inline_7344_l$$inline_7346_newRowElements$$ + "ms", $k$$inline_7344_l$$inline_7346_newRowElements$$ < $oldLength$$inline_7327_rowCount$$10$$ - 1 ? ($pos$$inline_7326_restSet$$inline_7331$$ = parseInt($animOrder$$inline_7330$$[$columnStart_oldSet$$inline_7328$$[$k$$inline_7344_l$$inline_7346_newRowElements$$]].split("_")[1], 10) * $rowHeight$$inline_7335$$, $pos$$inline_7326_restSet$$inline_7331$$ < $gridBodyHeight$$inline_7334_limitRangeInPixels$$inline_7338$$[1] - 
    $k$$inline_7344_l$$inline_7346_newRowElements$$ * $rowHeight$$inline_7335$$ || ($pos$$inline_7326_restSet$$inline_7331$$ = $gridBodyHeight$$inline_7334_limitRangeInPixels$$inline_7338$$[1] - ($k$$inline_7344_l$$inline_7346_newRowElements$$ - 1) * $oldElementSet$$inline_7318_rowStart$$.childNodes[1].clientHeight), $JSCompiler_StaticMethods_addUpDownMoveStyle$$($oldElementSet$$inline_7318_rowStart$$.childNodes[$k$$inline_7344_l$$inline_7346_newRowElements$$ + 1], "400ms", $delay$$inline_7348_key$$inline_7343_kk$$inline_7345$$, 
    $pos$$inline_7326_restSet$$inline_7331$$)) : $JSCompiler_StaticMethods_addUpDownMoveStyle$$($oldElementSet$$inline_7318_rowStart$$.childNodes[$k$$inline_7344_l$$inline_7346_newRowElements$$ + 1], "400ms", $delay$$inline_7348_key$$inline_7343_kk$$inline_7345$$, 0), $k$$inline_7344_l$$inline_7346_newRowElements$$ == $oldElementSet$$inline_7318_rowStart$$.childElementCount - 2) {
      $oldElementSet$$inline_7318_rowStart$$.childNodes[$k$$inline_7344_l$$inline_7346_newRowElements$$].addEventListener("transitionend", function() {
        setTimeout(function() {
          $JSCompiler_StaticMethods_handleLongScroll$$($me$$inline_7325$$, $me$$inline_7325$$.$m_currentScrollLeft$, $me$$inline_7325$$.$m_currentScrollTop$)
        }, 1E3)
      }, $JSCompiler_alias_FALSE$$);
      break
    }
  }
};
function $JSCompiler_StaticMethods_getDataKeySet$$($JSCompiler_StaticMethods_getDataKeySet$self$$, $initialData$$) {
  var $dataKeySet$$, $keyAttr$$, $i$$772$$, $j$$103$$;
  $dataKeySet$$ = [];
  $keyAttr$$ = $JSCompiler_StaticMethods_getDataKeySet$self$$.$getResources$().getMappedAttribute("key");
  for($i$$772$$ = 0;$i$$772$$ < $initialData$$.childElementCount;$i$$772$$++) {
    for($j$$103$$ = 0;$j$$103$$ < $initialData$$.children[$i$$772$$].attributes.length;$j$$103$$++) {
      if($initialData$$.children[$i$$772$$].attributes[$j$$103$$].nodeName == $keyAttr$$) {
        $dataKeySet$$.push($initialData$$.children[$i$$772$$].attributes[$j$$103$$].nodeValue);
        break
      }
    }
  }
  return $dataKeySet$$
}
function $JSCompiler_StaticMethods_getCssSupport$$($cssprop$$) {
  function $toCamel$$($cssprop$$) {
    return $cssprop$$.replace(/\-([a-z])/gi, function($cssprop$$, $toCamel$$) {
      return $toCamel$$.toUpperCase()
    })
  }
  var $vendors$$, $root$$25$$, $i$$773$$, $css3mc$$;
  $vendors$$ = " -moz- -webkit- -o- -ms- -khtml-".split(" ");
  $root$$25$$ = document.documentElement;
  for($i$$773$$ = 0;$i$$773$$ < $vendors$$.length;$i$$773$$++) {
    if($css3mc$$ = $toCamel$$($vendors$$[$i$$773$$] + $cssprop$$), "Ms" == $css3mc$$.substr(0, 2) && ($css3mc$$ = "m" + $css3mc$$.substr(1)), $css3mc$$ in $root$$25$$.style) {
      return $css3mc$$
    }
  }
}
function $JSCompiler_StaticMethods_changeStyleProperty$$($target$$119$$, $prop$$19$$, $value$$136$$) {
  "undefined" != typeof $prop$$19$$ && ($target$$119$$.style[$prop$$19$$] = $value$$136$$)
}
function $JSCompiler_StaticMethods_addUpDownMoveStyle$$($target$$120$$, $duration$$89$$, $delay$$69$$, $y$$284$$) {
  $JSCompiler_StaticMethods_changeStyleProperty$$($target$$120$$, $JSCompiler_StaticMethods_getCssSupport$$("transition-delay"), $delay$$69$$);
  $JSCompiler_StaticMethods_changeStyleProperty$$($target$$120$$, $JSCompiler_StaticMethods_getCssSupport$$("transition-timing-function"), "linear");
  $JSCompiler_StaticMethods_changeStyleProperty$$($target$$120$$, $JSCompiler_StaticMethods_getCssSupport$$("transition-duration"), $duration$$89$$);
  $JSCompiler_StaticMethods_changeStyleProperty$$($target$$120$$, $JSCompiler_StaticMethods_getCssSupport$$("transform"), "translate3d(0," + $y$$284$$ + "px,0)")
}
;
return DvtDataGrid;
});