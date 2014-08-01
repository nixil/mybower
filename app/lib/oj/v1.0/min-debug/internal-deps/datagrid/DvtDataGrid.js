define([], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  var D={};D.$JSCompiler_alias_VOID$$ = void 0;
D.$JSCompiler_alias_TRUE$$ = !0;
D.$JSCompiler_alias_NULL$$ = null;
D.$JSCompiler_alias_FALSE$$ = !1;
D.$JSCompiler_identityFn$$ = function() {
  return function($JSCompiler_identityFn_value$$) {
    return $JSCompiler_identityFn_value$$
  }
};
D.$JSCompiler_emptyFn$$ = function() {
  return function() {
  }
};
D.$JSCompiler_set$$ = function($JSCompiler_set_name$$) {
  return function($JSCompiler_set_value$$) {
    this[$JSCompiler_set_name$$] = $JSCompiler_set_value$$
  }
};
D.$JSCompiler_get$$ = function($JSCompiler_get_name$$) {
  return function() {
    return this[$JSCompiler_get_name$$]
  }
};
D.$JSCompiler_returnArg$$ = function($JSCompiler_returnArg_value$$) {
  return function() {
    return $JSCompiler_returnArg_value$$
  }
};
D.COMPILED = D.$JSCompiler_alias_TRUE$$;
D.$goog$global$$ = this == window ? this : window;
D.$goog$basePath$$ = "";
if(!D.COMPILED) {
  D.$goog$dependencies_$$ = {pathToNames:{}, nameToPath:{}, requires:{}, visited:{}, written:{}};
  D.$goog$inHtmlDocument_$$ = function $$goog$inHtmlDocument_$$$() {
    var $doc$$4$$ = D.$goog$global$$.document;
    return"undefined" != typeof $doc$$4$$ && "write" in $doc$$4$$
  };
  D.$goog$writeScriptTag_$$ = function $$goog$writeScriptTag_$$$($src$$6$$) {
    return(0,D.$goog$inHtmlDocument_$$)() ? (D.$goog$global$$.document.write('\x3cscript type\x3d"text/javascript" src\x3d"' + $src$$6$$ + '"\x3e\x3c/script\x3e'), D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_FALSE$$
  };
  if(D.$goog$global$$.CLOSURE_BASE_PATH) {
    D.$goog$basePath$$ = D.$goog$global$$.CLOSURE_BASE_PATH
  }else {
    if((0,D.$goog$inHtmlDocument_$$)()) {
      for(D.$scripts$$inline_545$$ = D.$goog$global$$.document.getElementsByTagName("script"), D.$i$$inline_546$$ = D.$scripts$$inline_545$$.length - 1;0 <= D.$i$$inline_546$$;--D.$i$$inline_546$$) {
        D.$src$$inline_547$$ = D.$scripts$$inline_545$$[D.$i$$inline_546$$].src;
        D.$qmark$$inline_548$$ = D.$src$$inline_547$$.lastIndexOf("?");
        D.$l$$inline_549$$ = -1 == D.$qmark$$inline_548$$ ? D.$src$$inline_547$$.length : D.$qmark$$inline_548$$;
        if("base.js" == D.$src$$inline_547$$.substr(D.$l$$inline_549$$ - 7, 7)) {
          D.$goog$basePath$$ = D.$src$$inline_547$$.substr(0, D.$l$$inline_549$$ - 7);
          break
        }
      }
    }
  }
  if(!D.$goog$global$$.CLOSURE_NO_DEPS) {
    D.$src$$inline_551$$ = D.$goog$basePath$$ + "deps.js";
    D.$importScript$$inline_552$$ = D.$goog$global$$.CLOSURE_IMPORT_SCRIPT || D.$goog$writeScriptTag_$$;
    !D.$goog$dependencies_$$.written[D.$src$$inline_551$$] && (0,D.$importScript$$inline_552$$)(D.$src$$inline_551$$) && (D.$goog$dependencies_$$.written[D.$src$$inline_551$$] = D.$JSCompiler_alias_TRUE$$)
  }
}
window.Math.floor(2147483648 * window.Math.random()).toString(36);
D.$goog$exportSymbol$$ = function $$goog$exportSymbol$$$($publicPath$$1$$, $object$$6$$) {
  var $parts$$inline_557$$ = $publicPath$$1$$.split("."), $cur$$inline_558$$ = D.$goog$global$$;
  !($parts$$inline_557$$[0] in $cur$$inline_558$$) && $cur$$inline_558$$.execScript && $cur$$inline_558$$.execScript("var " + $parts$$inline_557$$[0]);
  for(var $part$$inline_559$$;$parts$$inline_557$$.length && ($part$$inline_559$$ = $parts$$inline_557$$.shift());) {
    !$parts$$inline_557$$.length && $object$$6$$ !== D.$JSCompiler_alias_VOID$$ ? $cur$$inline_558$$[$part$$inline_559$$] = $object$$6$$ : $cur$$inline_558$$ = $cur$$inline_558$$[$part$$inline_559$$] ? $cur$$inline_558$$[$part$$inline_559$$] : $cur$$inline_558$$[$part$$inline_559$$] = {}
  }
};
D.DVT_ADVANCED_CLOSURE = D.$JSCompiler_alias_TRUE$$;
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
D.$DvtDataGridUtils$$ = function $$DvtDataGridUtils$$$($dataGrid_userAgent$$) {
  this.$scrollbarSize$ = -1;
  this.$dataGrid$ = $dataGrid_userAgent$$;
  $dataGrid_userAgent$$ = window.navigator && window.navigator.userAgent ? window.navigator.userAgent.toLowerCase() : D.$JSCompiler_alias_NULL$$;
  this.$os$ = (0,D.$JSCompiler_StaticMethods__determineOS$$)($dataGrid_userAgent$$);
  this.platform = (0,D.$JSCompiler_StaticMethods__determinePlatform$$)($dataGrid_userAgent$$)
};
D.$JSCompiler_StaticMethods_getScrollbarSize$$ = function $$JSCompiler_StaticMethods_getScrollbarSize$$$($JSCompiler_StaticMethods_getScrollbarSize$self$$) {
  if(-1 == $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$) {
    var $scrollDiv$$inline_562$$ = window.document.createElement("div");
    $scrollDiv$$inline_562$$.style.cssText = "width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px;";
    window.document.body.appendChild($scrollDiv$$inline_562$$);
    $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$ = $scrollDiv$$inline_562$$.offsetWidth - $scrollDiv$$inline_562$$.clientWidth;
    window.document.body.removeChild($scrollDiv$$inline_562$$)
  }
  return $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$
};
D.$JSCompiler_StaticMethods_isTouchDevice$$ = function $$JSCompiler_StaticMethods_isTouchDevice$$$($JSCompiler_StaticMethods_isTouchDevice$self$$) {
  if($JSCompiler_StaticMethods_isTouchDevice$self$$.$isTouch$ == D.$JSCompiler_alias_VOID$$) {
    var $agentName$$ = window.navigator.userAgent.toLowerCase();
    $JSCompiler_StaticMethods_isTouchDevice$self$$.$isTouch$ = -1 != $agentName$$.indexOf("mobile") || -1 != $agentName$$.indexOf("android") ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
  }
  return $JSCompiler_StaticMethods_isTouchDevice$self$$.$isTouch$
};
D.$JSCompiler_StaticMethods_addCSSClassName$$ = function $$JSCompiler_StaticMethods_addCSSClassName$$$($domElement$$, $className$$7$$) {
  var $currentClassName$$, $classNameIndex$$;
  $className$$7$$ != D.$JSCompiler_alias_NULL$$ && $domElement$$ != D.$JSCompiler_alias_NULL$$ && ($currentClassName$$ = $domElement$$.className, $classNameIndex$$ = (0,D.$DvtDataGridUtils$_getCSSClassNameIndex$$)($currentClassName$$, $className$$7$$), -1 == $classNameIndex$$ && ($domElement$$.className = $currentClassName$$ ? $className$$7$$ + " " + $currentClassName$$ : $className$$7$$))
};
D.$JSCompiler_StaticMethods_removeCSSClassName$$ = function $$JSCompiler_StaticMethods_removeCSSClassName$$$($domElement$$1$$, $className$$8$$) {
  var $afterstring_currentClassName$$1$$, $beforestring_classNameIndex$$1$$, $classNameEndIndex$$;
  $className$$8$$ != D.$JSCompiler_alias_NULL$$ && $domElement$$1$$ != D.$JSCompiler_alias_NULL$$ && ($afterstring_currentClassName$$1$$ = $domElement$$1$$.className, $beforestring_classNameIndex$$1$$ = (0,D.$DvtDataGridUtils$_getCSSClassNameIndex$$)($afterstring_currentClassName$$1$$, $className$$8$$), -1 != $beforestring_classNameIndex$$1$$ && ($classNameEndIndex$$ = $beforestring_classNameIndex$$1$$ + $className$$8$$.length, $beforestring_classNameIndex$$1$$ = 0 == $beforestring_classNameIndex$$1$$ ? 
  D.$JSCompiler_alias_NULL$$ : $afterstring_currentClassName$$1$$.substring(0, $beforestring_classNameIndex$$1$$), $afterstring_currentClassName$$1$$ = $classNameEndIndex$$ == $afterstring_currentClassName$$1$$.length ? D.$JSCompiler_alias_NULL$$ : $afterstring_currentClassName$$1$$.substring($classNameEndIndex$$ + 1), $domElement$$1$$.className = $beforestring_classNameIndex$$1$$ == D.$JSCompiler_alias_NULL$$ ? $afterstring_currentClassName$$1$$ == D.$JSCompiler_alias_NULL$$ ? "" : $afterstring_currentClassName$$1$$ : 
  $afterstring_currentClassName$$1$$ == D.$JSCompiler_alias_NULL$$ ? $beforestring_classNameIndex$$1$$ : $beforestring_classNameIndex$$1$$ + $afterstring_currentClassName$$1$$))
};
D.$JSCompiler_StaticMethods_containsCSSClassName$$ = function $$JSCompiler_StaticMethods_containsCSSClassName$$$($domElement$$2$$, $className$$9$$) {
  return $className$$9$$ != D.$JSCompiler_alias_NULL$$ && $domElement$$2$$ != D.$JSCompiler_alias_NULL$$ ? -1 != (0,D.$DvtDataGridUtils$_getCSSClassNameIndex$$)($domElement$$2$$.className, $className$$9$$) : D.$JSCompiler_alias_FALSE$$
};
D.$DvtDataGridUtils$_getCSSClassNameIndex$$ = function $$DvtDataGridUtils$_getCSSClassNameIndex$$$($currentClassName$$2$$, $className$$10$$) {
  var $classNameLength$$, $currentClassNameLength$$, $nameIndex$$, $hasStart$$, $endIndex_hasEnd$$, $lastNameIndex$$;
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
    $endIndex_hasEnd$$ = $nameIndex$$ + $classNameLength$$;
    $endIndex_hasEnd$$ = $endIndex_hasEnd$$ == $currentClassNameLength$$ || " " == $currentClassName$$2$$.charAt($endIndex_hasEnd$$);
    if($hasStart$$ && $endIndex_hasEnd$$) {
      return $nameIndex$$
    }
    $lastNameIndex$$ = $currentClassName$$2$$.lastIndexOf($className$$10$$);
    if($lastNameIndex$$ != $nameIndex$$) {
      return $hasStart$$ = $currentClassName$$2$$.charAt($lastNameIndex$$ - 1), $endIndex_hasEnd$$ = $lastNameIndex$$ + $classNameLength$$, $endIndex_hasEnd$$ = $endIndex_hasEnd$$ == $currentClassNameLength$$ || " " == $currentClassName$$2$$.charAt($endIndex_hasEnd$$), $hasStart$$ && $endIndex_hasEnd$$ ? $lastNameIndex$$ : $currentClassName$$2$$.indexOf(" " + $className$$10$$ + " ")
    }
  }
  return-1
};
D.$JSCompiler_StaticMethods_ctrlEquivalent$$ = function $$JSCompiler_StaticMethods_ctrlEquivalent$$$($JSCompiler_StaticMethods_ctrlEquivalent$self$$, $event$$4$$) {
  return"Mac" === $JSCompiler_StaticMethods_ctrlEquivalent$self$$.$os$ ? $event$$4$$.metaKey : $event$$4$$.ctrlKey
};
D.$JSCompiler_StaticMethods_getElementScrollLeft$$ = function $$JSCompiler_StaticMethods_getElementScrollLeft$$$($JSCompiler_StaticMethods_getElementScrollLeft$self$$, $element$$5$$) {
  var $width$$12$$, $elemWidth$$;
  if($JSCompiler_StaticMethods_getElementScrollLeft$self$$.$dataGrid$.$m_resources$.isRTLMode()) {
    if("gecko" == $JSCompiler_StaticMethods_getElementScrollLeft$self$$.platform || "ie" == $JSCompiler_StaticMethods_getElementScrollLeft$self$$.platform) {
      return window.Math.abs($element$$5$$.scrollLeft)
    }
    $width$$12$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_getElementScrollLeft$self$$.$dataGrid$.$m_scroller$.firstChild);
    $elemWidth$$ = (0,window.parseInt)($element$$5$$.style.width, 10);
    return window.Math.max(0, $width$$12$$ - $elemWidth$$ - $element$$5$$.scrollLeft)
  }
  return $element$$5$$.scrollLeft
};
D.$JSCompiler_StaticMethods_setElementScrollLeft$$ = function $$JSCompiler_StaticMethods_setElementScrollLeft$$$($JSCompiler_StaticMethods_setElementScrollLeft$self_width$$13$$, $element$$6$$, $scrollLeft$$) {
  var $elemWidth$$1$$;
  $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$13$$.$dataGrid$.$m_resources$.isRTLMode() ? "gecko" === $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$13$$.platform ? $element$$6$$.scrollLeft = 0 - $scrollLeft$$ : "ie" == $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$13$$.platform ? $element$$6$$.scrollLeft = $scrollLeft$$ : ($JSCompiler_StaticMethods_setElementScrollLeft$self_width$$13$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_setElementScrollLeft$self_width$$13$$.$dataGrid$.$m_scroller$.firstChild), 
  $elemWidth$$1$$ = (0,window.parseInt)($element$$6$$.style.width, 10), $element$$6$$.scrollLeft = $JSCompiler_StaticMethods_setElementScrollLeft$self_width$$13$$ - $elemWidth$$1$$ - $scrollLeft$$) : $element$$6$$.scrollLeft = $scrollLeft$$
};
D.$JSCompiler_StaticMethods__determineOS$$ = function $$JSCompiler_StaticMethods__determineOS$$$($userAgent$$1$$) {
  if($userAgent$$1$$) {
    if(-1 != $userAgent$$1$$.indexOf("win")) {
      return"Windows"
    }
    if(-1 != $userAgent$$1$$.indexOf("mac")) {
      return"Mac"
    }
    if(-1 != $userAgent$$1$$.indexOf("sunos")) {
      return"Solaris"
    }
  }
  return"Unknown"
};
D.$JSCompiler_StaticMethods__determinePlatform$$ = function $$JSCompiler_StaticMethods__determinePlatform$$$($userAgent$$2$$) {
  if($userAgent$$2$$ && -1 == $userAgent$$2$$.indexOf("opera")) {
    if(-1 != $userAgent$$2$$.indexOf("trident") || -1 != $userAgent$$2$$.indexOf("msie")) {
      return"ie"
    }
    if(-1 != $userAgent$$2$$.indexOf("applewebkit") || -1 != $userAgent$$2$$.indexOf("safari")) {
      return"webkit"
    }
    if(-1 != $userAgent$$2$$.indexOf("gecko/")) {
      return"gecko"
    }
  }
  return"unknown"
};
D.$DvtDataGridOptions$$ = (0,D.$JSCompiler_set$$)("options");
D.$JSCompiler_StaticMethods_extract$$ = function $$JSCompiler_StaticMethods_extract$$$($JSCompiler_StaticMethods_extract$self_val1$$, $arg1$$, $arg2_val2$$, $arg3$$) {
  return $arg1$$ != D.$JSCompiler_alias_NULL$$ ? ($JSCompiler_StaticMethods_extract$self_val1$$ = $JSCompiler_StaticMethods_extract$self_val1$$.options[$arg1$$], $arg2_val2$$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_extract$self_val1$$ != D.$JSCompiler_alias_NULL$$ ? ($arg2_val2$$ = $JSCompiler_StaticMethods_extract$self_val1$$[$arg2_val2$$], $arg3$$ != D.$JSCompiler_alias_NULL$$ && $arg2_val2$$ != D.$JSCompiler_alias_NULL$$ ? $arg2_val2$$[$arg3$$] : $arg2_val2$$) : $JSCompiler_StaticMethods_extract$self_val1$$) : 
  D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGridOptions$$.prototype.evaluate = function $$DvtDataGridOptions$$$$evaluate$($value$$47$$, $obj$$28$$) {
  return"function" == typeof $value$$47$$ ? $value$$47$$.call(this, $obj$$28$$) : $value$$47$$
};
D.$JSCompiler_StaticMethods_getRawProperty$$ = function $$JSCompiler_StaticMethods_getRawProperty$$$($JSCompiler_StaticMethods_getRawProperty$self$$, $prop$$4$$, $axis$$4$$) {
  var $arg1$$1$$, $arg2$$1$$, $arg3$$1$$;
  "row" == $axis$$4$$ || "column" == $axis$$4$$ ? ($arg1$$1$$ = "header", $arg2$$1$$ = $axis$$4$$, $arg3$$1$$ = $prop$$4$$) : "cell" == $axis$$4$$ && ($arg1$$1$$ = "cell", $arg2$$1$$ = $prop$$4$$);
  return(0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRawProperty$self$$, $arg1$$1$$, $arg2$$1$$, $arg3$$1$$)
};
D.$DvtDataGridOptions$$.prototype.$getProperty$ = function $$DvtDataGridOptions$$$$$getProperty$$($prop$$5$$, $axis$$5$$, $obj$$29$$) {
  return this.evaluate((0,D.$JSCompiler_StaticMethods_getRawProperty$$)(this, $prop$$5$$, $axis$$5$$), $obj$$29$$)
};
D.$JSCompiler_StaticMethods_nullOrDefault$$ = function $$JSCompiler_StaticMethods_nullOrDefault$$$($value$$48$$) {
  return $value$$48$$ != D.$JSCompiler_alias_NULL$$ ? $value$$48$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_getRowBandingInterval$$ = function $$JSCompiler_StaticMethods_getRowBandingInterval$$$($JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$) {
  $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$, "bandingInterval", "row");
  return $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ : 0
};
D.$JSCompiler_StaticMethods_getColumnBandingInterval$$ = function $$JSCompiler_StaticMethods_getColumnBandingInterval$$$($JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$) {
  $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$, "bandingInterval", "column");
  return $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ : 0
};
D.$DvtDataGridOptions$$.prototype.$getEmptyText$ = function $$DvtDataGridOptions$$$$$getEmptyText$$() {
  return(0,D.$JSCompiler_StaticMethods_extract$$)(this, "emptyText")
};
D.$JSCompiler_StaticMethods_getHorizontalGridlines$$ = function $$JSCompiler_StaticMethods_getHorizontalGridlines$$$($JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$) {
  $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$, "gridlines", "horizontal");
  return $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$ : "visible"
};
D.$JSCompiler_StaticMethods_getVerticalGridlines$$ = function $$JSCompiler_StaticMethods_getVerticalGridlines$$$($JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$) {
  $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$, "gridlines", "vertical");
  return $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$ : "visible"
};
D.$JSCompiler_StaticMethods_getSelectionCardinality$$ = function $$JSCompiler_StaticMethods_getSelectionCardinality$$$($JSCompiler_StaticMethods_getSelectionCardinality$self_key$$25$$) {
  var $mode$$8_val$$23$$;
  $mode$$8_val$$23$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getSelectionCardinality$self_key$$25$$, "selectionMode");
  if($mode$$8_val$$23$$ == D.$JSCompiler_alias_VOID$$) {
    return"none"
  }
  $JSCompiler_StaticMethods_getSelectionCardinality$self_key$$25$$ = $JSCompiler_StaticMethods_getSelectionCardinality$self_key$$25$$.$getSelectionMode$();
  $mode$$8_val$$23$$ = $mode$$8_val$$23$$[$JSCompiler_StaticMethods_getSelectionCardinality$self_key$$25$$];
  return $mode$$8_val$$23$$ != D.$JSCompiler_alias_NULL$$ ? $mode$$8_val$$23$$ : "none"
};
D.$DvtDataGridOptions$$.prototype.$getSelectionMode$ = function $$DvtDataGridOptions$$$$$getSelectionMode$$() {
  var $cardinality_mode$$9$$;
  $cardinality_mode$$9$$ = (0,D.$JSCompiler_StaticMethods_extract$$)(this, "selectionMode");
  if($cardinality_mode$$9$$ == D.$JSCompiler_alias_VOID$$) {
    return"cell"
  }
  $cardinality_mode$$9$$ = $cardinality_mode$$9$$.row;
  return $cardinality_mode$$9$$ != D.$JSCompiler_alias_NULL$$ && "none" != $cardinality_mode$$9$$ ? "row" : "cell"
};
D.$JSCompiler_StaticMethods_isResizable$$ = function $$JSCompiler_StaticMethods_isResizable$$$($JSCompiler_StaticMethods_isResizable$self$$, $axis$$7$$, $obj$$31$$) {
  return(0,D.$JSCompiler_StaticMethods_nullOrDefault$$)($JSCompiler_StaticMethods_isResizable$self$$.$getProperty$("resizable", $axis$$7$$, $obj$$31$$))
};
D.$DvtDataGridOptions$$.prototype.$getInlineStyle$ = function $$DvtDataGridOptions$$$$$getInlineStyle$$($axis$$9$$, $obj$$32$$) {
  return this.$getProperty$("style", $axis$$9$$, $obj$$32$$)
};
D.$DvtDataGridOptions$$.prototype.$getStyleClass$ = function $$DvtDataGridOptions$$$$$getStyleClass$$($axis$$10$$, $obj$$33$$) {
  return this.$getProperty$("className", $axis$$10$$, $obj$$33$$)
};
D.$JSCompiler_StaticMethods_getRenderer$$ = function $$JSCompiler_StaticMethods_getRenderer$$$($JSCompiler_StaticMethods_getRenderer$self$$, $axis$$11$$) {
  return(0,D.$JSCompiler_StaticMethods_getRawProperty$$)($JSCompiler_StaticMethods_getRenderer$self$$, "renderer", $axis$$11$$)
};
D.$DvtDataGridSizingManager$$ = function $$DvtDataGridSizingManager$$$() {
  this.$sizes$ = {column:{}, row:{}}
};
D.$DvtDataGridSizingManager$$.prototype.$setSize$ = function $$DvtDataGridSizingManager$$$$$setSize$$($axis$$34$$, $headerKey$$, $size$$11$$) {
  this.$sizes$[$axis$$34$$][$headerKey$$] = $size$$11$$
};
D.$DvtDataGridSizingManager$$.prototype.$getSize$ = function $$DvtDataGridSizingManager$$$$$getSize$$($axis$$35$$, $headerKey$$1$$) {
  return this.$sizes$[$axis$$35$$].hasOwnProperty($headerKey$$1$$) ? this.$sizes$[$axis$$35$$][$headerKey$$1$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGridSizingManager$$.prototype.clear = function $$DvtDataGridSizingManager$$$$clear$() {
  this.$sizes$ = {column:{}, row:{}}
};
D.$DvtDataGrid$$ = function $$DvtDataGrid$$$() {
  this.TIMEOUT = 100;
  this.$MAX_COLUMN_THRESHOLD$ = 20;
  this.$MAX_ROW_THRESHOLD$ = 30;
  this.$m_cachedRowHeight$ = [];
  this.$m_cachedColumnWidth$ = [];
  this.$m_utils$ = new D.$DvtDataGridUtils$$(this);
  this.$m_discontiguousSelection$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_cachedRowHeightStartIndex$ = this.$m_cachedColumnWidthStartIndex$ = 0;
  this.$m_sizingManager$ = new D.$DvtDataGridSizingManager$$;
  this.$m_colHeaderHeight$ = this.$m_rowHeaderWidth$ = D.$JSCompiler_alias_NULL$$;
  this.$m_styleClassDimensionMap$ = {};
  this.$m_captureScrolling$ = this.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_isEstimateColumnCount$ = this.$m_isEstimateRowCount$ = D.$JSCompiler_alias_VOID$$;
  this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
  this.$callbacks$ = {}
};
(0,D.$goog$exportSymbol$$)("DvtDataGrid", D.$DvtDataGrid$$);
D.$DvtDataGrid$$.prototype.$SetOptions$ = function $$DvtDataGrid$$$$$SetOptions$$($options$$5$$) {
  this.$m_options$ = new D.$DvtDataGridOptions$$($options$$5$$)
};
D.$DvtDataGrid$$.prototype.SetOptions = D.$DvtDataGrid$$.prototype.$SetOptions$;
D.$DvtDataGrid$$.prototype.$UpdateOptions$ = function $$DvtDataGrid$$$$$UpdateOptions$$($JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$) {
  for(var $candidate$$ in $JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$) {
    $candidate$$ in this.$m_options$.options && this.$m_options$.options[$candidate$$] != $JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$[$candidate$$] && (this.$m_options$.options[$candidate$$] = $JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$[$candidate$$])
  }
  for($candidate$$ in $JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$) {
    a: {
      $JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$ = D.$JSCompiler_alias_VOID$$;
      switch($candidate$$) {
        case "bandingInterval":
          var $colObj$$inline_9034_j$$inline_9024_row$$inline_9008_rows$$inline_9015$$ = $JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$ = D.$JSCompiler_alias_VOID$$, $i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$ = D.$JSCompiler_alias_VOID$$, $headers$$inline_9036_index$$inline_9017_j$$inline_9010_rowCount$$inline_9026$$ = D.$JSCompiler_alias_VOID$$, $bandingClass$$inline_9011_bandingClass$$inline_9018_element$$inline_9037_horizontalGridlines$$inline_9027$$ = 
          D.$JSCompiler_alias_VOID$$;
          $JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$ = this.$m_databody$.firstChild.childNodes;
          $bandingClass$$inline_9011_bandingClass$$inline_9018_element$$inline_9037_horizontalGridlines$$inline_9027$$ = this.getMappedStyle("banded");
          for($i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$ = 1;$i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$ < $JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$.length;$i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$++) {
            (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$[$i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$], $bandingClass$$inline_9011_bandingClass$$inline_9018_element$$inline_9037_horizontalGridlines$$inline_9027$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$[$i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$], 
            $bandingClass$$inline_9011_bandingClass$$inline_9018_element$$inline_9037_horizontalGridlines$$inline_9027$$);
            $colObj$$inline_9034_j$$inline_9024_row$$inline_9008_rows$$inline_9015$$ = $JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$[$i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$].childNodes;
            for($headers$$inline_9036_index$$inline_9017_j$$inline_9010_rowCount$$inline_9026$$ = 0;$headers$$inline_9036_index$$inline_9017_j$$inline_9010_rowCount$$inline_9026$$ < $colObj$$inline_9034_j$$inline_9024_row$$inline_9008_rows$$inline_9015$$.length;$headers$$inline_9036_index$$inline_9017_j$$inline_9010_rowCount$$inline_9026$$ += 1) {
              (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($colObj$$inline_9034_j$$inline_9024_row$$inline_9008_rows$$inline_9015$$[$headers$$inline_9036_index$$inline_9017_j$$inline_9010_rowCount$$inline_9026$$], $bandingClass$$inline_9011_bandingClass$$inline_9018_element$$inline_9037_horizontalGridlines$$inline_9027$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($colObj$$inline_9034_j$$inline_9024_row$$inline_9008_rows$$inline_9015$$[$headers$$inline_9036_index$$inline_9017_j$$inline_9010_rowCount$$inline_9026$$], 
              $bandingClass$$inline_9011_bandingClass$$inline_9018_element$$inline_9037_horizontalGridlines$$inline_9027$$)
            }
          }
          var $j$$inline_9019_refresh$$inline_9038_verticalGridlines$$inline_9028$$ = $bandingClass$$inline_9011_bandingClass$$inline_9018_element$$inline_9037_horizontalGridlines$$inline_9027$$ = $headers$$inline_9036_index$$inline_9017_j$$inline_9010_rowCount$$inline_9026$$ = $i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$ = $colObj$$inline_9034_j$$inline_9024_row$$inline_9008_rows$$inline_9015$$ = $JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$ = 
          D.$JSCompiler_alias_VOID$$, $JSCompiler_inline_result$$inline_9039_headers$$inline_9041_row$$inline_9020_rows$$inline_9029$$ = D.$JSCompiler_alias_VOID$$;
          $JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)(this.$m_options$);
          if(0 < $JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$) {
            $colObj$$inline_9034_j$$inline_9024_row$$inline_9008_rows$$inline_9015$$ = this.$m_databody$.firstChild.childNodes;
            $bandingClass$$inline_9011_bandingClass$$inline_9018_element$$inline_9037_horizontalGridlines$$inline_9027$$ = this.getMappedStyle("banded");
            for($i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$ = 1;$i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$ < $colObj$$inline_9034_j$$inline_9024_row$$inline_9008_rows$$inline_9015$$.length;$i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$ += 1) {
              $JSCompiler_inline_result$$inline_9039_headers$$inline_9041_row$$inline_9020_rows$$inline_9029$$ = $colObj$$inline_9034_j$$inline_9024_row$$inline_9008_rows$$inline_9015$$[$i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$].childNodes;
              for($j$$inline_9019_refresh$$inline_9038_verticalGridlines$$inline_9028$$ = 0;$j$$inline_9019_refresh$$inline_9038_verticalGridlines$$inline_9028$$ < $JSCompiler_inline_result$$inline_9039_headers$$inline_9041_row$$inline_9020_rows$$inline_9029$$.length;$j$$inline_9019_refresh$$inline_9038_verticalGridlines$$inline_9028$$ += 1) {
                $headers$$inline_9036_index$$inline_9017_j$$inline_9010_rowCount$$inline_9026$$ = this.$m_startCol$ + $j$$inline_9019_refresh$$inline_9038_verticalGridlines$$inline_9028$$, 1 === window.Math.floor($headers$$inline_9036_index$$inline_9017_j$$inline_9010_rowCount$$inline_9026$$ / $JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$) % 2 ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_inline_result$$inline_9039_headers$$inline_9041_row$$inline_9020_rows$$inline_9029$$[$j$$inline_9019_refresh$$inline_9038_verticalGridlines$$inline_9028$$], 
                $bandingClass$$inline_9011_bandingClass$$inline_9018_element$$inline_9037_horizontalGridlines$$inline_9027$$) || (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_inline_result$$inline_9039_headers$$inline_9041_row$$inline_9020_rows$$inline_9029$$[$j$$inline_9019_refresh$$inline_9038_verticalGridlines$$inline_9028$$], $bandingClass$$inline_9011_bandingClass$$inline_9018_element$$inline_9037_horizontalGridlines$$inline_9027$$) : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_inline_result$$inline_9039_headers$$inline_9041_row$$inline_9020_rows$$inline_9029$$[$j$$inline_9019_refresh$$inline_9038_verticalGridlines$$inline_9028$$], 
                $bandingClass$$inline_9011_bandingClass$$inline_9018_element$$inline_9037_horizontalGridlines$$inline_9027$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($colObj$$inline_9034_j$$inline_9024_row$$inline_9008_rows$$inline_9015$$[$j$$inline_9019_refresh$$inline_9038_verticalGridlines$$inline_9028$$], $bandingClass$$inline_9011_bandingClass$$inline_9018_element$$inline_9037_horizontalGridlines$$inline_9027$$)
              }
            }
          }
          (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)(this);
          break;
        case "gridlines":
          var $dir$$inline_9030_opt$$inline_9042$$ = $JSCompiler_inline_result$$inline_9039_headers$$inline_9041_row$$inline_9020_rows$$inline_9029$$ = $j$$inline_9019_refresh$$inline_9038_verticalGridlines$$inline_9028$$ = $bandingClass$$inline_9011_bandingClass$$inline_9018_element$$inline_9037_horizontalGridlines$$inline_9027$$ = $headers$$inline_9036_index$$inline_9017_j$$inline_9010_rowCount$$inline_9026$$ = $i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$ = $colObj$$inline_9034_j$$inline_9024_row$$inline_9008_rows$$inline_9015$$ = 
          $JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$ = D.$JSCompiler_alias_VOID$$, $bandingClass$$inline_9011_bandingClass$$inline_9018_element$$inline_9037_horizontalGridlines$$inline_9027$$ = (0,D.$JSCompiler_StaticMethods_getHorizontalGridlines$$)(this.$m_options$), $j$$inline_9019_refresh$$inline_9038_verticalGridlines$$inline_9028$$ = (0,D.$JSCompiler_StaticMethods_getVerticalGridlines$$)(this.$m_options$), 
          $JSCompiler_inline_result$$inline_9039_headers$$inline_9041_row$$inline_9020_rows$$inline_9029$$ = this.$m_databody$.firstChild.childNodes, $headers$$inline_9036_index$$inline_9017_j$$inline_9010_rowCount$$inline_9026$$ = $JSCompiler_inline_result$$inline_9039_headers$$inline_9041_row$$inline_9020_rows$$inline_9029$$.length, $dir$$inline_9030_opt$$inline_9042$$ = this.$m_resources$.isRTLMode() ? "right" : "left";
          for($JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$ = 1;$JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$ < $headers$$inline_9036_index$$inline_9017_j$$inline_9010_rowCount$$inline_9026$$;$JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$ += 
          1) {
            $i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$ = $JSCompiler_inline_result$$inline_9039_headers$$inline_9041_row$$inline_9020_rows$$inline_9029$$[$JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$].childNodes;
            for($colObj$$inline_9034_j$$inline_9024_row$$inline_9008_rows$$inline_9015$$ = 0;$colObj$$inline_9034_j$$inline_9024_row$$inline_9008_rows$$inline_9015$$ < $i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$.length - 1;$colObj$$inline_9034_j$$inline_9024_row$$inline_9008_rows$$inline_9015$$ += 1) {
              "hidden" === $j$$inline_9019_refresh$$inline_9038_verticalGridlines$$inline_9028$$ ? "left" === $dir$$inline_9030_opt$$inline_9042$$ ? $i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$[$colObj$$inline_9034_j$$inline_9024_row$$inline_9008_rows$$inline_9015$$].style.borderRight = "none" : $i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$[$colObj$$inline_9034_j$$inline_9024_row$$inline_9008_rows$$inline_9015$$].style.borderLeftStyle = "none" : "left" === 
              $dir$$inline_9030_opt$$inline_9042$$ ? $i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$[$colObj$$inline_9034_j$$inline_9024_row$$inline_9008_rows$$inline_9015$$].style.borderRight = "" : $i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$[$colObj$$inline_9034_j$$inline_9024_row$$inline_9008_rows$$inline_9015$$].style.borderLeftStyle = "", $i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$[$colObj$$inline_9034_j$$inline_9024_row$$inline_9008_rows$$inline_9015$$].style.borderBottomStyle = 
              "hidden" === $bandingClass$$inline_9011_bandingClass$$inline_9018_element$$inline_9037_horizontalGridlines$$inline_9027$$ || $JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$ == $headers$$inline_9036_index$$inline_9017_j$$inline_9010_rowCount$$inline_9026$$ - 1 ? "none" : ""
            }
          }
          break;
        case "scrollPosition":
          (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this);
          break;
        case "selectionMode":
          break;
        case "emptyText":
          break;
        case "header":
          $JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$ = this.$m_options$.options.header;
          $j$$inline_9019_refresh$$inline_9038_verticalGridlines$$inline_9028$$ = $bandingClass$$inline_9011_bandingClass$$inline_9018_element$$inline_9037_horizontalGridlines$$inline_9027$$ = $headers$$inline_9036_index$$inline_9017_j$$inline_9010_rowCount$$inline_9026$$ = $i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$ = $colObj$$inline_9034_j$$inline_9024_row$$inline_9008_rows$$inline_9015$$ = D.$JSCompiler_alias_VOID$$;
          this.$m_resources$.getMappedAttribute("key");
          $j$$inline_9019_refresh$$inline_9038_verticalGridlines$$inline_9028$$ = D.$JSCompiler_alias_FALSE$$;
          for($bandingClass$$inline_9011_bandingClass$$inline_9018_element$$inline_9037_horizontalGridlines$$inline_9027$$ in $JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$) {
            if("column" == $bandingClass$$inline_9011_bandingClass$$inline_9018_element$$inline_9037_horizontalGridlines$$inline_9027$$ || "row" == $bandingClass$$inline_9011_bandingClass$$inline_9018_element$$inline_9037_horizontalGridlines$$inline_9027$$) {
              if($j$$inline_9019_refresh$$inline_9038_verticalGridlines$$inline_9028$$) {
                break
              }
              "column" == $bandingClass$$inline_9011_bandingClass$$inline_9018_element$$inline_9037_horizontalGridlines$$inline_9027$$ ? this.$m_colHeader$ && ($headers$$inline_9036_index$$inline_9017_j$$inline_9010_rowCount$$inline_9026$$ = this.$m_colHeader$.firstChild.childNodes) : this.$m_rowHeader$ && 1 < this.$m_rowHeader$.firstChild.childElementCount && ($headers$$inline_9036_index$$inline_9017_j$$inline_9010_rowCount$$inline_9026$$ = this.$m_rowHeader$.firstChild.childNodes);
              if($headers$$inline_9036_index$$inline_9017_j$$inline_9010_rowCount$$inline_9026$$) {
                for($i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$ in $colObj$$inline_9034_j$$inline_9024_row$$inline_9008_rows$$inline_9015$$ = $JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$[$bandingClass$$inline_9011_bandingClass$$inline_9018_element$$inline_9037_horizontalGridlines$$inline_9027$$], $colObj$$inline_9034_j$$inline_9024_row$$inline_9008_rows$$inline_9015$$) {
                  b: {
                    var $JSCompiler_inline_result$$inline_9039_headers$$inline_9041_row$$inline_9020_rows$$inline_9029$$ = $headers$$inline_9036_index$$inline_9017_j$$inline_9010_rowCount$$inline_9026$$, $dir$$inline_9030_opt$$inline_9042$$ = $i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$, $value$$inline_9043$$ = $colObj$$inline_9034_j$$inline_9024_row$$inline_9008_rows$$inline_9015$$[$i$$inline_9009_i$$inline_9016_opt$$inline_9035_row$$inline_9025$$], $i$$inline_9044$$ = D.$JSCompiler_alias_VOID$$, 
                    $attribute$$inline_9045$$ = D.$JSCompiler_alias_VOID$$, $val$$inline_9046$$ = D.$JSCompiler_alias_VOID$$;
                    this.$m_resources$.getMappedAttribute("key");
                    $attribute$$inline_9045$$ = this.$m_resources$.getMappedAttribute($dir$$inline_9030_opt$$inline_9042$$);
                    $val$$inline_9046$$ = $value$$inline_9043$$;
                    $value$$inline_9043$$.width ? $val$$inline_9046$$ = $value$$inline_9043$$.width : $value$$inline_9043$$.height && ($val$$inline_9046$$ = $value$$inline_9043$$.height);
                    for($i$$inline_9044$$ = 0;$i$$inline_9044$$ < $JSCompiler_inline_result$$inline_9039_headers$$inline_9041_row$$inline_9020_rows$$inline_9029$$.length;$i$$inline_9044$$++) {
                      if("disable" == $val$$inline_9046$$) {
                        $JSCompiler_inline_result$$inline_9039_headers$$inline_9041_row$$inline_9020_rows$$inline_9029$$[$i$$inline_9044$$].setAttribute($attribute$$inline_9045$$, "false")
                      }else {
                        if("enable" == $val$$inline_9046$$) {
                          $JSCompiler_inline_result$$inline_9039_headers$$inline_9041_row$$inline_9020_rows$$inline_9029$$[$i$$inline_9044$$].setAttribute($attribute$$inline_9045$$, "true")
                        }else {
                          $JSCompiler_inline_result$$inline_9039_headers$$inline_9041_row$$inline_9020_rows$$inline_9029$$ = D.$JSCompiler_alias_FALSE$$;
                          break b
                        }
                      }
                    }
                    $JSCompiler_inline_result$$inline_9039_headers$$inline_9041_row$$inline_9020_rows$$inline_9029$$ = D.$JSCompiler_alias_TRUE$$
                  }
                  if(!$JSCompiler_inline_result$$inline_9039_headers$$inline_9041_row$$inline_9020_rows$$inline_9029$$) {
                    $j$$inline_9019_refresh$$inline_9038_verticalGridlines$$inline_9028$$ = D.$JSCompiler_alias_TRUE$$;
                    break
                  }
                }
              }
            }
          }
          $j$$inline_9019_refresh$$inline_9038_verticalGridlines$$inline_9028$$ && this.refresh(this.$m_root$);
          break;
        default:
          $JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$ = D.$JSCompiler_alias_FALSE$$;
          break a
      }
      $JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$ = D.$JSCompiler_alias_TRUE$$
    }
    if(!$JSCompiler_inline_result$$28_columnBandingInterval$$inline_9014_i$$inline_9023_obj$$inline_570_obj$$inline_9033_options$$6_rows$$inline_9007$$) {
      this.refresh(this.$m_root$);
      break
    }
  }
};
D.$DvtDataGrid$$.prototype.UpdateOptions = D.$DvtDataGrid$$.prototype.$UpdateOptions$;
D.$DvtDataGrid$$.prototype.$SetResources$ = (0,D.$JSCompiler_set$$)("$m_resources$");
D.$DvtDataGrid$$.prototype.SetResources = D.$DvtDataGrid$$.prototype.$SetResources$;
D.$DvtDataGrid$$.prototype.$getResources$ = (0,D.$JSCompiler_get$$)("$m_resources$");
D.$DvtDataGrid$$.prototype.getResources = D.$DvtDataGrid$$.prototype.$getResources$;
D.$DvtDataGrid$$.prototype.getMappedStyle = function $$DvtDataGrid$$$$getMappedStyle$($key$$28$$) {
  return this.$m_resources$.getMappedStyle($key$$28$$)
};
D.$DvtDataGrid$$.prototype.$SetDataSource$ = function $$DvtDataGrid$$$$$SetDataSource$$($dataSource$$) {
  $dataSource$$ != D.$JSCompiler_alias_NULL$$ && ($dataSource$$.on("change", this.$handleModelEvent$.bind(this), this), $dataSource$$.on("expand", this.$handleExpandEvent$.bind(this), this), $dataSource$$.on("collapse", this.$handleCollapseEvent$.bind(this), this));
  this.$m_dataSource$ = $dataSource$$
};
D.$DvtDataGrid$$.prototype.SetDataSource = D.$DvtDataGrid$$.prototype.$SetDataSource$;
D.$DvtDataGrid$$.prototype.$getDataSource$ = (0,D.$JSCompiler_get$$)("$m_dataSource$");
D.$DvtDataGrid$$.prototype.getDataSource = D.$DvtDataGrid$$.prototype.$getDataSource$;
D.$JSCompiler_StaticMethods__keys$$ = function $$JSCompiler_StaticMethods__keys$$$($JSCompiler_StaticMethods__keys$self$$, $indexes$$4$$, $callback$$24$$) {
  var $keys$$2$$;
  $keys$$2$$ = $JSCompiler_StaticMethods__keys$self$$.$m_dataSource$.keys($indexes$$4$$);
  "function" === typeof $keys$$2$$.then ? $keys$$2$$.then(function($keys$$2$$) {
    $callback$$24$$.call($JSCompiler_StaticMethods__keys$self$$, $keys$$2$$, $indexes$$4$$)
  }, function() {
    $callback$$24$$.call($JSCompiler_StaticMethods__keys$self$$, {row:D.$JSCompiler_alias_NULL$$, column:D.$JSCompiler_alias_NULL$$}, $indexes$$4$$)
  }) : $callback$$24$$.call($JSCompiler_StaticMethods__keys$self$$, $keys$$2$$, $indexes$$4$$)
};
D.$DvtDataGrid$$.prototype.$SetCreateContextCallback$ = (0,D.$JSCompiler_set$$)("$m_createContextCallback$");
D.$DvtDataGrid$$.prototype.SetCreateContextCallback = D.$DvtDataGrid$$.prototype.$SetCreateContextCallback$;
D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$ = function $$JSCompiler_StaticMethods__isHighWatermarkScrolling$$$($JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_605$$) {
  $JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_605$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_605$$.$m_options$, "scrollPolicy");
  $JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_605$$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_605$$ = "auto");
  return"scroll" != $JSCompiler_StaticMethods__isHighWatermarkScrolling$self_mode$$inline_605$$
};
D.$DvtDataGrid$$.prototype.$destroy$ = function $$DvtDataGrid$$$$$destroy$$() {
  delete this.$m_fetching$;
  window.document.removeEventListener("mousemove", this.$m_docMouseMoveListener$, D.$JSCompiler_alias_FALSE$$);
  window.document.removeEventListener("mouseup", this.$m_docMouseUpListener$, D.$JSCompiler_alias_FALSE$$);
  this.$m_dataSource$ != D.$JSCompiler_alias_NULL$$ && (this.$m_dataSource$.off("change", this.$handleModelEvent$), this.$m_dataSource$.off("expand", this.$handleExpandEvent$), this.$m_dataSource$.off("collapse", this.$handleCollapseEvent$));
  this.$m_root$ != D.$JSCompiler_alias_NULL$$ && this.$m_handleDatabodyKeyDown$ && this.$m_root$.removeEventListener("keydown", this.$m_handleDatabodyKeyDown$, D.$JSCompiler_alias_FALSE$$);
  delete this.$m_styleClassDimensionMap$;
  this.$m_styleClassDimensionMap$ = {}
};
D.$DvtDataGrid$$.prototype.destroy = D.$DvtDataGrid$$.prototype.$destroy$;
D.$DvtDataGrid$$.prototype.getWidth = function $$DvtDataGrid$$$$getWidth$() {
  this.$m_width$ == D.$JSCompiler_alias_NULL$$ && (this.$m_width$ = this.$m_root$.offsetWidth);
  return this.$m_width$
};
D.$DvtDataGrid$$.prototype.getHeight = function $$DvtDataGrid$$$$getHeight$() {
  this.$m_height$ == D.$JSCompiler_alias_NULL$$ && (this.$m_height$ = this.$m_root$.offsetHeight);
  return this.$m_height$
};
D.$JSCompiler_StaticMethods_getViewportWidth$$ = function $$JSCompiler_StaticMethods_getViewportWidth$$$($JSCompiler_StaticMethods_getViewportWidth$self_width$$14$$) {
  $JSCompiler_StaticMethods_getViewportWidth$self_width$$14$$ = $JSCompiler_StaticMethods_getViewportWidth$self_width$$14$$.getWidth();
  return window.Math.round(1.5 * $JSCompiler_StaticMethods_getViewportWidth$self_width$$14$$)
};
D.$JSCompiler_StaticMethods_getViewportHeight$$ = function $$JSCompiler_StaticMethods_getViewportHeight$$$($JSCompiler_StaticMethods_getViewportHeight$self_height$$11$$) {
  $JSCompiler_StaticMethods_getViewportHeight$self_height$$11$$ = $JSCompiler_StaticMethods_getViewportHeight$self_height$$11$$.getHeight();
  return window.Math.round(1.5 * $JSCompiler_StaticMethods_getViewportHeight$self_height$$11$$)
};
D.$JSCompiler_StaticMethods_getFetchSize$$ = function $$JSCompiler_StaticMethods_getFetchSize$$$($JSCompiler_StaticMethods_getFetchSize$self$$, $axis$$12$$) {
  return"row" == $axis$$12$$ ? ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$ = window.Math.round((0,D.$JSCompiler_StaticMethods_getViewportHeight$$)($JSCompiler_StaticMethods_getFetchSize$self$$) / (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)($JSCompiler_StaticMethods_getFetchSize$self$$))), $JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$) : "column" == $axis$$12$$ ? 
  ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$ = window.Math.round((0,D.$JSCompiler_StaticMethods_getViewportWidth$$)($JSCompiler_StaticMethods_getFetchSize$self$$) / 50)), $JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$) : 0
};
D.$DvtDataGrid$$.prototype.$getEmptyText$ = function $$DvtDataGrid$$$$$getEmptyText$$() {
  var $emptyText_resources$$1$$;
  $emptyText_resources$$1$$ = this.$m_options$.$getEmptyText$();
  $emptyText_resources$$1$$ == D.$JSCompiler_alias_NULL$$ && ($emptyText_resources$$1$$ = this.$m_resources$, $emptyText_resources$$1$$ = $emptyText_resources$$1$$.getTranslatedText("msgNoData"));
  return $emptyText_resources$$1$$
};
D.$JSCompiler_StaticMethods_getDefaultRowHeight$$ = function $$JSCompiler_StaticMethods_getDefaultRowHeight$$$($JSCompiler_StaticMethods_getDefaultRowHeight$self$$) {
  var $div$$, $divHeight_resources$$2$$;
  $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_defaultRowHeight$ == D.$JSCompiler_alias_NULL$$ && ($div$$ = window.document.createElement("div"), $divHeight_resources$$2$$ = $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_resources$, $div$$.className = $divHeight_resources$$2$$.getMappedStyle("colheader") + " " + $divHeight_resources$$2$$.getMappedStyle("headercell"), $div$$.style.visibilty = "hidden", $div$$.style.top = "0px", $div$$.style.visibilty = "0px", $div$$.style.height = 
  "auto", $div$$.innerHTML = "hq", $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_root$.appendChild($div$$), $divHeight_resources$$2$$ = $div$$.offsetHeight, $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_root$.removeChild($div$$), $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_defaultRowHeight$ = window.Math.max($divHeight_resources$$2$$, 30));
  return $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_defaultRowHeight$
};
D.$JSCompiler_StaticMethods_getRootBorderWidth$$ = function $$JSCompiler_StaticMethods_getRootBorderWidth$$$($JSCompiler_StaticMethods_getRootBorderWidth$self$$) {
  $JSCompiler_StaticMethods_getRootBorderWidth$self$$.$m_rootBorderWidth$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_getRootBorderWidth$self$$.$m_rootBorderWidth$ = (0,window.parseInt)(window.document.defaultView.getComputedStyle($JSCompiler_StaticMethods_getRootBorderWidth$self$$.$m_root$, D.$JSCompiler_alias_NULL$$).getPropertyValue("border-top-width"), 10));
  return $JSCompiler_StaticMethods_getRootBorderWidth$self$$.$m_rootBorderWidth$
};
D.$JSCompiler_StaticMethods__getStyleClassDimensionKey$$ = function $$JSCompiler_StaticMethods__getStyleClassDimensionKey$$$($elem$$1_inlineStyle$$) {
  var $className$$11$$;
  $className$$11$$ = $elem$$1_inlineStyle$$.className;
  $elem$$1_inlineStyle$$ = $elem$$1_inlineStyle$$.style.cssText;
  return 0 < $elem$$1_inlineStyle$$.indexOf("width") || 0 < $elem$$1_inlineStyle$$.indexOf("height") ? $className$$11$$.concat($elem$$1_inlineStyle$$) : $className$$11$$
};
D.$JSCompiler_StaticMethods_getRowHeight$$ = function $$JSCompiler_StaticMethods_getRowHeight$$$($JSCompiler_StaticMethods_getRowHeight$self$$, $elem$$2$$, $index$$45$$, $key$$29$$) {
  var $rowHeight$$;
  $rowHeight$$ = $JSCompiler_StaticMethods_getRowHeight$self$$.$m_sizingManager$.$getSize$("row", $key$$29$$);
  if($rowHeight$$ != D.$JSCompiler_alias_NULL$$) {
    return $rowHeight$$
  }
  $rowHeight$$ = $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeight$[$index$$45$$ - $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeightStartIndex$];
  if($rowHeight$$ == D.$JSCompiler_alias_NULL$$) {
    $key$$29$$ = (0,D.$JSCompiler_StaticMethods__getStyleClassDimensionKey$$)($elem$$2$$), $rowHeight$$ = $JSCompiler_StaticMethods_getRowHeight$self$$.$m_styleClassDimensionMap$[$key$$29$$], $rowHeight$$ == D.$JSCompiler_alias_NULL$$ && ($elem$$2$$.style.visibility = "hidden", window.document.body.appendChild($elem$$2$$), $rowHeight$$ = $elem$$2$$.offsetHeight, $elem$$2$$.style.visibility = "visible", $JSCompiler_StaticMethods_getRowHeight$self$$.$m_styleClassDimensionMap$[$key$$29$$] = $rowHeight$$)
  }else {
    return $rowHeight$$
  }
  0 === $rowHeight$$ && ($rowHeight$$ = (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)($JSCompiler_StaticMethods_getRowHeight$self$$));
  0 > $index$$45$$ - $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeightStartIndex$ ? $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeight$.unshift($rowHeight$$) : $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeight$[$index$$45$$ - $JSCompiler_StaticMethods_getRowHeight$self$$.$m_cachedRowHeightStartIndex$] = $rowHeight$$;
  return $rowHeight$$
};
D.$JSCompiler_StaticMethods_getColumnWidth$$ = function $$JSCompiler_StaticMethods_getColumnWidth$$$($JSCompiler_StaticMethods_getColumnWidth$self$$, $elem$$3$$, $index$$46$$, $key$$30$$) {
  var $columnWidth$$;
  $columnWidth$$ = $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_sizingManager$.$getSize$("column", $key$$30$$);
  if($columnWidth$$ != D.$JSCompiler_alias_NULL$$) {
    return $columnWidth$$
  }
  $columnWidth$$ = $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_cachedColumnWidth$[$index$$46$$ - $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_cachedColumnWidthStartIndex$];
  if($columnWidth$$ == D.$JSCompiler_alias_NULL$$) {
    $key$$30$$ = (0,D.$JSCompiler_StaticMethods__getStyleClassDimensionKey$$)($elem$$3$$), $columnWidth$$ = $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_styleClassDimensionMap$[$key$$30$$], $columnWidth$$ == D.$JSCompiler_alias_NULL$$ && ("" === $elem$$3$$.style.width && (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($elem$$3$$, 50), $elem$$3$$.style.visibility = "hidden", window.document.body.appendChild($elem$$3$$), $columnWidth$$ = $elem$$3$$.offsetWidth, $elem$$3$$.style.visibility = 
    "visible", $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_styleClassDimensionMap$[$key$$30$$] = $columnWidth$$)
  }else {
    return $columnWidth$$
  }
  0 === $columnWidth$$ && ($columnWidth$$ = 50);
  0 > $index$$46$$ - $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_cachedColumnWidthStartIndex$ ? $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_cachedColumnWidth$.unshift($columnWidth$$) : $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_cachedColumnWidth$[$index$$46$$ - $JSCompiler_StaticMethods_getColumnWidth$self$$.$m_cachedColumnWidthStartIndex$] = $columnWidth$$;
  return $columnWidth$$
};
D.$JSCompiler_StaticMethods_createSubId$$ = function $$JSCompiler_StaticMethods_createSubId$$$($JSCompiler_StaticMethods_createSubId$self$$, $subId$$) {
  var $id$$2$$ = $JSCompiler_StaticMethods_createSubId$self$$.$m_root$.id;
  $id$$2$$ == D.$JSCompiler_alias_NULL$$ && ($id$$2$$ = "");
  return[$id$$2$$, $subId$$].join(":")
};
D.$JSCompiler_StaticMethods_isHeaderFetchComplete$$ = function $$JSCompiler_StaticMethods_isHeaderFetchComplete$$$($JSCompiler_StaticMethods_isHeaderFetchComplete$self$$) {
  return $JSCompiler_StaticMethods_isHeaderFetchComplete$self$$.$m_fetching$.row === D.$JSCompiler_alias_FALSE$$ && $JSCompiler_StaticMethods_isHeaderFetchComplete$self$$.$m_fetching$.column === D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_isFetchComplete$$ = function $$JSCompiler_StaticMethods_isFetchComplete$$$($JSCompiler_StaticMethods_isFetchComplete$self$$) {
  return(0,D.$JSCompiler_StaticMethods_isHeaderFetchComplete$$)($JSCompiler_StaticMethods_isFetchComplete$self$$) && $JSCompiler_StaticMethods_isFetchComplete$self$$.$m_fetching$.cells === D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__isLastRow$$ = function $$JSCompiler_StaticMethods__isLastRow$$$($JSCompiler_StaticMethods__isLastRow$self$$, $index$$47$$) {
  return(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods__isLastRow$self$$, "row") ? $index$$47$$ + 1 === $JSCompiler_StaticMethods__isLastRow$self$$.$m_endRow$ && $JSCompiler_StaticMethods__isLastRow$self$$.$m_stopRowFetch$ : $index$$47$$ + 1 === $JSCompiler_StaticMethods__isLastRow$self$$.$m_dataSource$.getCount("row")
};
D.$JSCompiler_StaticMethods__isLastColumn$$ = function $$JSCompiler_StaticMethods__isLastColumn$$$($JSCompiler_StaticMethods__isLastColumn$self$$, $index$$48$$) {
  return(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods__isLastColumn$self$$, "column") ? $index$$48$$ + 1 === $JSCompiler_StaticMethods__isLastColumn$self$$.$m_endCol$ && $JSCompiler_StaticMethods__isLastColumn$self$$.$m_stopColumnFetch$ : $index$$48$$ + 1 === $JSCompiler_StaticMethods__isLastColumn$self$$.$m_dataSource$.getCount("column")
};
D.$DvtDataGrid$$.prototype.empty = function $$DvtDataGrid$$$$empty$() {
  this.$m_empty$ && this.$m_root$.removeChild(this.$m_empty$);
  this.$m_root$.removeChild(this.$m_status$);
  this.$m_root$.removeChild(this.$m_accSummary$);
  this.$m_root$.removeChild(this.$m_accInfo$);
  this.$m_root$.removeChild(this.$m_stateInfo$);
  this.$m_root$.removeChild(this.$m_colHeader$);
  this.$m_root$.removeChild(this.$m_rowHeader$);
  this.$m_root$.removeChild(this.$m_databody$);
  this.$m_root$.removeChild(this.$m_scroller$)
};
D.$DvtDataGrid$$.prototype.refresh = function $$DvtDataGrid$$$$refresh$($root$$) {
  this.$destroy$();
  (0,D.$JSCompiler_StaticMethods_resetInternal$$)(this);
  this.$render$($root$$)
};
D.$DvtDataGrid$$.prototype.refresh = D.$DvtDataGrid$$.prototype.refresh;
D.$JSCompiler_StaticMethods_resetInternal$$ = function $$JSCompiler_StaticMethods_resetInternal$$$($JSCompiler_StaticMethods_resetInternal$self$$) {
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_cachedRowHeight$ = [];
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_cachedColumnWidth$ = [];
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_sizingManager$.clear();
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_cachedColumnWidthStartIndex$ = 0;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_cachedRowHeightStartIndex$ = 0;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_captureScrolling$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_corner$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_bottomCorner$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_columnHeaderScrollbarSpacer$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowHeaderScrollbarSpacer$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_avgRowHeight$ = D.$JSCompiler_alias_VOID$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_avgColWidth$ = D.$JSCompiler_alias_VOID$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_colHeader$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowHeader$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_databody$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_scroller$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_empty$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_isEstimateRowCount$ = D.$JSCompiler_alias_VOID$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_isEstimateColumnCount$ = D.$JSCompiler_alias_VOID$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopColumnFetch$ = D.$JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtDataGrid$$.prototype.$render$ = function $$DvtDataGrid$$$$$render$$($empty$$inline_626_i$$inline_628_root$$1$$) {
  this.$m_databody$ != D.$JSCompiler_alias_NULL$$ && (this.$destroy$(), (0,D.$JSCompiler_StaticMethods_resetInternal$$)(this));
  this.$m_timingStart$ = new window.Date;
  this.$m_fetching$ = {};
  this.$m_currentScrollTop$ = this.$m_currentScrollLeft$ = this.$m_endColHeaderPixel$ = this.$m_endRowHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_startRowHeaderPixel$ = this.$m_endColHeader$ = this.$m_endRowHeader$ = this.$m_startColHeader$ = this.$m_startRowHeader$ = this.$m_endColPixel$ = this.$m_endRowPixel$ = this.$m_startColPixel$ = this.$m_startRowPixel$ = this.$m_endCol$ = this.$m_endRow$ = this.$m_startCol$ = this.$m_startRow$ = 0;
  var $emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$, $colHeader$$inline_622$$, $rowHeader$$inline_623$$;
  this.$m_root$ = $empty$$inline_626_i$$inline_628_root$$1$$;
  this.$m_root$.className = this.getMappedStyle("datagrid");
  this.$m_root$.setAttribute("role", "application");
  this.$m_root$.setAttribute("aria-describedby", (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "summary"));
  this.$m_initialized$ = D.$JSCompiler_alias_FALSE$$;
  $empty$$inline_626_i$$inline_628_root$$1$$.tabIndex = 0;
  $emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$ = window.document.createElement("div");
  $emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "status");
  $emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$.className = this.getMappedStyle("status");
  $emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$.setAttribute("role", "status");
  $empty$$inline_626_i$$inline_628_root$$1$$.appendChild($emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$);
  this.$m_status$ = $emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$;
  $emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$ = window.document.createElement("div");
  $emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "summary");
  $emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$.className = this.getMappedStyle("info");
  $empty$$inline_626_i$$inline_628_root$$1$$.appendChild($emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$);
  this.$m_accSummary$ = $emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$;
  $emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$ = window.document.createElement("div");
  $emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "info");
  $emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$.className = this.getMappedStyle("info");
  $emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$.setAttribute("role", "status");
  $empty$$inline_626_i$$inline_628_root$$1$$.appendChild($emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$);
  this.$m_accInfo$ = $emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$;
  $emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$ = window.document.createElement("div");
  $emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "state");
  $emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$.className = this.getMappedStyle("info");
  $empty$$inline_626_i$$inline_628_root$$1$$.appendChild($emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$);
  this.$m_stateInfo$ = $emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$;
  if(this.$m_dataSource$ != D.$JSCompiler_alias_NULL$$) {
    this.$m_empty$ = D.$JSCompiler_alias_NULL$$;
    $emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$ = this.$m_resources$.isRTLMode();
    $colHeader$$inline_622$$ = (0,D.$JSCompiler_StaticMethods_buildHeaders$$)(this, "column", this.getMappedStyle("colheader"));
    $rowHeader$$inline_623$$ = (0,D.$JSCompiler_StaticMethods_buildHeaders$$)(this, "row", this.getMappedStyle("rowheader"));
    var $root$$inline_9062$$ = window.document.createElement("div");
    $root$$inline_9062$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "scroller");
    $root$$inline_9062$$.className = this.getMappedStyle("scrollers");
    $root$$inline_9062$$.addEventListener ? $root$$inline_9062$$.addEventListener("scroll", this.$handleScroll$.bind(this), D.$JSCompiler_alias_FALSE$$) : $root$$inline_9062$$.attachEvent("onscroll", this.$handleScroll$.bind(this));
    var $root$$inline_9066$$ = window.document.createElement("div");
    $root$$inline_9066$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "databody");
    $root$$inline_9066$$.className = this.getMappedStyle("databody");
    this.fetchCells($root$$inline_9066$$, $root$$inline_9062$$, 0, 0);
    $emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$ && ($colHeader$$inline_622$$.style.direction = "rtl", $root$$inline_9066$$.style.direction = "rtl", $root$$inline_9062$$.style.direction = "rtl");
    $empty$$inline_626_i$$inline_628_root$$1$$.appendChild($colHeader$$inline_622$$);
    $empty$$inline_626_i$$inline_628_root$$1$$.appendChild($rowHeader$$inline_623$$);
    $empty$$inline_626_i$$inline_628_root$$1$$.appendChild($root$$inline_9062$$);
    $empty$$inline_626_i$$inline_628_root$$1$$.appendChild($root$$inline_9066$$);
    this.$m_colHeader$ = $colHeader$$inline_622$$;
    this.$m_rowHeader$ = $rowHeader$$inline_623$$;
    this.$m_databody$ = $root$$inline_9066$$;
    this.$m_scroller$ = $root$$inline_9062$$;
    this.$m_isResizing$ = D.$JSCompiler_alias_FALSE$$;
    this.$m_resizingElement$ = D.$JSCompiler_alias_NULL$$;
    this.$m_databodyDragState$ = D.$JSCompiler_alias_FALSE$$;
    this.$m_handleDatabodyKeyDown$ = this.$handleDatabodyKeyDown$.bind(this);
    this.$m_docMouseMoveListener$ = this.$handleMouseMove$.bind(this);
    this.$m_docMouseUpListener$ = this.$handleMouseUp$.bind(this);
    (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) ? ($root$$inline_9066$$.addEventListener("touchstart", this.$handleTouchStart$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9066$$.addEventListener("touchmove", this.$handleTouchMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9066$$.addEventListener("touchend", this.$handleTouchEnd$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9066$$.addEventListener("touchcancel", this.$handleTouchCancel$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_622$$.addEventListener("touchstart", this.$handleHeaderTouchStart$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_622$$.addEventListener("touchmove", this.$handleHeaderTouchMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_622$$.addEventListener("touchend", this.$handleHeaderTouchEnd$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_622$$.addEventListener("touchcancel", this.$handleHeaderTouchCancel$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_623$$.addEventListener("touchstart", this.$handleHeaderTouchStart$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_623$$.addEventListener("touchmove", this.$handleHeaderTouchMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_623$$.addEventListener("touchend", this.$handleHeaderTouchEnd$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_623$$.addEventListener("touchcancel", this.$handleHeaderTouchCancel$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $empty$$inline_626_i$$inline_628_root$$1$$.addEventListener("focus", this.$handleRootFocus$.bind(this), D.$JSCompiler_alias_TRUE$$), $empty$$inline_626_i$$inline_628_root$$1$$.addEventListener("blur", this.$handleRootBlur$.bind(this), D.$JSCompiler_alias_TRUE$$)) : (window.document.addEventListener("mousemove", this.$m_docMouseMoveListener$, D.$JSCompiler_alias_FALSE$$), window.document.addEventListener("mouseup", this.$m_docMouseUpListener$, D.$JSCompiler_alias_FALSE$$), 
    $empty$$inline_626_i$$inline_628_root$$1$$.addEventListener("keydown", this.$m_handleDatabodyKeyDown$, D.$JSCompiler_alias_FALSE$$), $empty$$inline_626_i$$inline_628_root$$1$$.addEventListener("focus", this.$handleRootFocus$.bind(this), D.$JSCompiler_alias_TRUE$$), $empty$$inline_626_i$$inline_628_root$$1$$.addEventListener("blur", this.$handleRootBlur$.bind(this), D.$JSCompiler_alias_TRUE$$), $root$$inline_9066$$.addEventListener("gecko" === this.$m_utils$.platform ? "DOMMouseScroll" : "mousewheel", 
    this.$handleDatabodyMouseWheel$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9066$$.addEventListener("mousedown", this.$handleDatabodyMouseDown$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9066$$.addEventListener("mousemove", this.$handleDatabodyMouseMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9066$$.addEventListener("mouseup", this.$handleDatabodyMouseUp$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9066$$.addEventListener("mouseout", this.$handleDatabodyMouseOut$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $root$$inline_9066$$.addEventListener("mouseover", this.$handleDatabodyMouseOver$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_623$$.addEventListener("mousedown", this.$handleHeaderMouseDown$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_622$$.addEventListener("mousedown", this.$handleHeaderMouseDown$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_623$$.addEventListener("mouseover", this.$handleHeaderMouseOver$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_622$$.addEventListener("mouseover", this.$handleHeaderMouseOver$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_623$$.addEventListener("mousemove", this.$handleRowHeaderMouseMove$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_623$$.addEventListener("mouseup", this.$handleHeaderMouseUp$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_623$$.addEventListener("mouseout", this.$handleHeaderMouseOut$.bind(this), 
    D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_622$$.addEventListener("mouseout", this.$handleHeaderMouseOut$.bind(this), D.$JSCompiler_alias_FALSE$$), $rowHeader$$inline_623$$.addEventListener("click", this.$handleHeaderClick$.bind(this), D.$JSCompiler_alias_FALSE$$), $colHeader$$inline_622$$.addEventListener("click", this.$handleHeaderClick$.bind(this), D.$JSCompiler_alias_FALSE$$), $root$$inline_9062$$.addEventListener("mousedown", this.$handleScrollerMouseDown$.bind(this), D.$JSCompiler_alias_FALSE$$), 
    $root$$inline_9062$$.addEventListener("mouseup", this.$handleScrollerMouseUp$.bind(this), D.$JSCompiler_alias_FALSE$$));
    if((0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && !this.$m_initialized$) {
      if((0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this), (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this), this.$m_modelEvents$ != D.$JSCompiler_alias_NULL$$) {
        for($empty$$inline_626_i$$inline_628_root$$1$$ = 0;$empty$$inline_626_i$$inline_628_root$$1$$ < this.$m_modelEvents$.length;$empty$$inline_626_i$$inline_628_root$$1$$++) {
          this.$handleModelEvent$(this.$m_modelEvents$[$empty$$inline_626_i$$inline_628_root$$1$$])
        }
        this.$m_modelEvents$.length = 0
      }
    }else {
      (0,D.$JSCompiler_StaticMethods_isHeaderFetchComplete$$)(this) && !this.$m_initialized$ && (0,D.$JSCompiler_StaticMethods_resizeHeaders$$)(this)
    }
  }else {
    $emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$ = this.$getEmptyText$(), $empty$$inline_626_i$$inline_628_root$$1$$ = window.document.createElement("div"), $empty$$inline_626_i$$inline_628_root$$1$$.className = this.getMappedStyle("emptytext"), $empty$$inline_626_i$$inline_628_root$$1$$.setAttribute("id", (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "empty")), $empty$$inline_626_i$$inline_628_root$$1$$.innerHTML = $emptyText$$inline_627_root$$inline_9050_root$$inline_9053_root$$inline_9056_root$$inline_9059_rtl$$inline_621$$, 
    this.$m_root$.appendChild($empty$$inline_626_i$$inline_628_root$$1$$), this.$m_empty$ = $empty$$inline_626_i$$inline_628_root$$1$$
  }
};
D.$DvtDataGrid$$.prototype.render = D.$DvtDataGrid$$.prototype.$render$;
D.$JSCompiler_StaticMethods_resizeHeaders$$ = function $$JSCompiler_StaticMethods_resizeHeaders$$$($JSCompiler_StaticMethods_resizeHeaders$self$$) {
  var $width$$15$$, $height$$12$$, $colHeader$$1$$, $rowHeader$$1$$, $colHeaderHeight$$, $rowHeaderWidth$$, $dir$$2$$;
  $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_colHeader$ == D.$JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_rowHeader$ == D.$JSCompiler_alias_NULL$$ || ($width$$15$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.getWidth(), $height$$12$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.getHeight(), $colHeader$$1$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_colHeader$, $rowHeader$$1$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_rowHeader$, 
  $colHeaderHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($colHeader$$1$$), $rowHeaderWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($rowHeader$$1$$), $dir$$2$$ = $JSCompiler_StaticMethods_resizeHeaders$self$$.$m_resources$.isRTLMode() ? "right" : "left", (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$1$$, 0, $dir$$2$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$1$$, $colHeaderHeight$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($rowHeader$$1$$, 
  $height$$12$$ - $colHeaderHeight$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($colHeader$$1$$, $rowHeaderWidth$$, $dir$$2$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($colHeader$$1$$, $width$$15$$ - $rowHeaderWidth$$), (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_resizeHeaders$self$$.$m_utils$) || (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_resizeHeaders$self$$))
};
D.$DvtDataGrid$$.prototype.$HandleResize$ = function $$DvtDataGrid$$$$$HandleResize$$($width$$16$$, $height$$13$$) {
  if($width$$16$$ != this.$m_width$ || $height$$13$$ != this.$m_height$) {
    this.$m_width$ = $width$$16$$, this.$m_height$ = $height$$13$$, (0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this), (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$)
  }
};
D.$DvtDataGrid$$.prototype.HandleResize = D.$DvtDataGrid$$.prototype.$HandleResize$;
D.$JSCompiler_StaticMethods_resizeGrid$$ = function $$JSCompiler_StaticMethods_resizeGrid$$$($JSCompiler_StaticMethods_resizeGrid$self$$) {
  var $databodyWidth_width$$17$$, $height$$14_scrollerHeight$$, $borderStyle$$inline_639_borderWidth_colHeader$$2_empty$$1$$, $emptyText$$2_lastHeader$$inline_640_rowHeader$$2$$, $scroller$$1$$, $databody$$1$$, $colHeaderHeight$$1$$, $rowHeaderWidth$$1$$, $databodyContentWidth$$, $databodyContentHeight$$, $databodyHeight$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$, $isDatabodyVerticalScrollbarRequired$$, $scrollbarSize$$, $scrollerWidth$$;
  $JSCompiler_StaticMethods_resizeGrid$self$$.$m_databody$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_resizeGrid$self$$.$m_databody$.firstChild == D.$JSCompiler_alias_NULL$$ ? ($emptyText$$2_lastHeader$$inline_640_rowHeader$$2$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$getEmptyText$(), $borderStyle$$inline_639_borderWidth_colHeader$$2_empty$$1$$ = window.document.createElement("div"), $borderStyle$$inline_639_borderWidth_colHeader$$2_empty$$1$$.className = $JSCompiler_StaticMethods_resizeGrid$self$$.getMappedStyle("emptytext"), 
  $JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setElementDir$$)($borderStyle$$inline_639_borderWidth_colHeader$$2_empty$$1$$, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$), "top"), $borderStyle$$inline_639_borderWidth_colHeader$$2_empty$$1$$.innerHTML = $emptyText$$2_lastHeader$$inline_640_rowHeader$$2$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_root$.appendChild($borderStyle$$inline_639_borderWidth_colHeader$$2_empty$$1$$), 
  $JSCompiler_StaticMethods_resizeGrid$self$$.$m_empty$ = $borderStyle$$inline_639_borderWidth_colHeader$$2_empty$$1$$) : ($borderStyle$$inline_639_borderWidth_colHeader$$2_empty$$1$$ = (0,D.$JSCompiler_StaticMethods_getRootBorderWidth$$)($JSCompiler_StaticMethods_resizeGrid$self$$), $databodyWidth_width$$17$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.getWidth() - 2 * $borderStyle$$inline_639_borderWidth_colHeader$$2_empty$$1$$, $height$$14_scrollerHeight$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.getHeight() - 
  2 * $borderStyle$$inline_639_borderWidth_colHeader$$2_empty$$1$$, $borderStyle$$inline_639_borderWidth_colHeader$$2_empty$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$, $emptyText$$2_lastHeader$$inline_640_rowHeader$$2$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_rowHeader$, $scroller$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scroller$, $databody$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_databody$, $colHeaderHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($borderStyle$$inline_639_borderWidth_colHeader$$2_empty$$1$$), 
  $rowHeaderWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($emptyText$$2_lastHeader$$inline_640_rowHeader$$2$$), $databodyContentWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$1$$.firstChild), $databodyContentHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$1$$.firstChild), $height$$14_scrollerHeight$$ -= $colHeaderHeight$$1$$, $scrollerWidth$$ = $databodyWidth_width$$17$$ - $rowHeaderWidth$$1$$, $databodyWidth_width$$17$$ = window.Math.min($databodyContentWidth$$, 
  $scrollerWidth$$), $databodyHeight$$ = window.Math.min($databodyContentHeight$$, $height$$14_scrollerHeight$$), (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_resizeGrid$self$$.$m_utils$), $scrollbarSize$$ = (0,D.$JSCompiler_StaticMethods_getScrollbarSize$$)($JSCompiler_StaticMethods_resizeGrid$self$$.$m_utils$), ($dir$$3_isDatabodyHorizontalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, 
  $scrollerWidth$$)) ? $isDatabodyVerticalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, $height$$14_scrollerHeight$$ - $scrollbarSize$$) : ($isDatabodyVerticalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, $height$$14_scrollerHeight$$)) && ($dir$$3_isDatabodyHorizontalScrollbarRequired$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_resizeGrid$self$$, 
  $scrollerWidth$$ - $scrollbarSize$$)), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_hasHorizontalScroller$ = $dir$$3_isDatabodyHorizontalScrollbarRequired$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_hasVerticalScroller$ = $isDatabodyVerticalScrollbarRequired$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$ && ($height$$14_scrollerHeight$$ - $scrollbarSize$$ >= $databodyHeight$$ || ($databodyHeight$$ = $height$$14_scrollerHeight$$ - $scrollbarSize$$)), $isDatabodyVerticalScrollbarRequired$$ && 
  ($scrollerWidth$$ - $scrollbarSize$$ >= $databodyWidth_width$$17$$ || ($databodyWidth_width$$17$$ = $scrollerWidth$$ - $scrollbarSize$$)), $dir$$3_isDatabodyHorizontalScrollbarRequired$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_resources$.isRTLMode() ? "right" : "left", (0,D.$JSCompiler_StaticMethods_setElementDir$$)($emptyText$$2_lastHeader$$inline_640_rowHeader$$2$$, 0, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($emptyText$$2_lastHeader$$inline_640_rowHeader$$2$$, 
  $colHeaderHeight$$1$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($emptyText$$2_lastHeader$$inline_640_rowHeader$$2$$, $databodyHeight$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($borderStyle$$inline_639_borderWidth_colHeader$$2_empty$$1$$, $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($borderStyle$$inline_639_borderWidth_colHeader$$2_empty$$1$$, $databodyWidth_width$$17$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$1$$, 
  $colHeaderHeight$$1$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$1$$, $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databody$$1$$, $databodyWidth_width$$17$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databody$$1$$, $databodyHeight$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$1$$, $colHeaderHeight$$1$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$1$$, 
  $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($scroller$$1$$, $scrollerWidth$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scroller$$1$$, $height$$14_scrollerHeight$$), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scrollWidth$ = $databodyContentWidth$$ - $databodyWidth_width$$17$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scrollHeight$ = $databodyContentHeight$$ - $databodyHeight$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$ != 
  D.$JSCompiler_alias_NULL$$ && 0 < $JSCompiler_StaticMethods_resizeGrid$self$$.$m_endColHeader$ && (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_resizeGrid$self$$) + $JSCompiler_StaticMethods_resizeGrid$self$$.$m_endColHeaderPixel$ >= $JSCompiler_StaticMethods_resizeGrid$self$$.getWidth() - 2 && ($borderStyle$$inline_639_borderWidth_colHeader$$2_empty$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_resources$.isRTLMode() ? "borderLeftStyle" : "borderRightStyle", 
  $emptyText$$2_lastHeader$$inline_640_rowHeader$$2$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$.firstChild.lastChild, $emptyText$$2_lastHeader$$inline_640_rowHeader$$2$$.style[$borderStyle$$inline_639_borderWidth_colHeader$$2_empty$$1$$] = "none"), (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_resizeGrid$self$$)), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_initialized$ = D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_StaticMethods_buildCorners$$ = function $$JSCompiler_StaticMethods_buildCorners$$$($JSCompiler_StaticMethods_buildCorners$self$$) {
  var $colHeaderHeight$$2$$, $rowHeaderWidth$$2$$, $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $dir$$4$$, $colHeaderWidth$$, $rowHeaderHeight$$, $scrollerWidth$$1$$, $scrollerHeight$$1$$;
  (0,D.$JSCompiler_StaticMethods_getScrollbarSize$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_utils$);
  $scrollerWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_scroller$);
  $scrollerHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_scroller$);
  $colHeaderHeight$$2$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_colHeader$);
  $colHeaderWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_colHeader$);
  $rowHeaderWidth$$2$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeader$);
  $rowHeaderHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeader$);
  $dir$$4$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  1 !== $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeader$.firstChild.childNodes.length ? ($JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ != D.$JSCompiler_alias_NULL$$ ? $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ : ($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = 
  (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "corner"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("topcorner")), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 
  $colHeaderHeight$$2$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ = $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$)) : $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$), 
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ = D.$JSCompiler_alias_NULL$$);
  1 !== $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeader$.firstChild.childNodes.length ? $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasHorizontalScroller$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ != D.$JSCompiler_alias_NULL$$ ? $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ : ($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = 
  window.document.createElement("div"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "rhSbSpacer"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("rowheaderspacer")), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 
  $rowHeaderHeight$$ + $colHeaderHeight$$2$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 0, $dir$$4$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $scrollerHeight$$1$$ - $rowHeaderHeight$$), 
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ = $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$)) : ($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ != D.$JSCompiler_alias_NULL$$ && 
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ = D.$JSCompiler_alias_NULL$$);
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasVerticalScroller$ ? ($JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ != D.$JSCompiler_alias_NULL$$ ? $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ : ($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = 
  (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "chSbSpacer"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("colheaderspacer")), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$ + $colHeaderWidth$$, $dir$$4$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 
  0, "top"), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $scrollerWidth$$1$$ - $colHeaderWidth$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $colHeaderHeight$$2$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), 
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ = $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$)) : ($JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ = 
  D.$JSCompiler_alias_NULL$$);
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasHorizontalScroller$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasVerticalScroller$ ? ($JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ != D.$JSCompiler_alias_NULL$$ ? $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ : ($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), 
  $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildCorners$self$$, "bcorner"), $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("bottomcorner")), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderHeight$$ + 
  $colHeaderHeight$$2$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$ + $colHeaderWidth$$, $dir$$4$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $scrollerWidth$$1$$ - $colHeaderWidth$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 
  $scrollerHeight$$1$$ - $rowHeaderHeight$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ = $bottomCorner_columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$)) : ($JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ != D.$JSCompiler_alias_NULL$$ && 
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_StaticMethods_setInitialScrollPosition$$ = function $$JSCompiler_StaticMethods_setInitialScrollPosition$$$($JSCompiler_StaticMethods_setInitialScrollPosition$self$$) {
  var $indexes$$inline_655_scrollMode_scrollPosition$$inline_643$$, $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_645_columnScrollPosition$$1$$, $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_648_columnScrollPosition$$inline_646_rowScrollPosition$$1$$;
  $indexes$$inline_655_scrollMode_scrollPosition$$inline_643$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$, "scrollPosition");
  $indexes$$inline_655_scrollMode_scrollPosition$$inline_643$$ = $indexes$$inline_655_scrollMode_scrollPosition$$inline_643$$ == D.$JSCompiler_alias_VOID$$ ? D.$JSCompiler_alias_NULL$$ : $indexes$$inline_655_scrollMode_scrollPosition$$inline_643$$.key != D.$JSCompiler_alias_VOID$$ ? "key" : $indexes$$inline_655_scrollMode_scrollPosition$$inline_643$$.index != D.$JSCompiler_alias_VOID$$ ? "index" : D.$JSCompiler_alias_NULL$$;
  if($JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_scroller$ != D.$JSCompiler_alias_VOID$$ && $indexes$$inline_655_scrollMode_scrollPosition$$inline_643$$ != D.$JSCompiler_alias_NULL$$) {
    $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_645_columnScrollPosition$$1$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$;
    $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_648_columnScrollPosition$$inline_646_rowScrollPosition$$1$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_645_columnScrollPosition$$1$$, "scrollPosition", "key", "column");
    $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_645_columnScrollPosition$$1$$ = $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_648_columnScrollPosition$$inline_646_rowScrollPosition$$1$$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_648_columnScrollPosition$$inline_646_rowScrollPosition$$1$$ : (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_645_columnScrollPosition$$1$$, 
    "scrollPosition", "index", "column");
    $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_648_columnScrollPosition$$inline_646_rowScrollPosition$$1$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$;
    var $rowScrollPosition$$inline_649$$;
    $rowScrollPosition$$inline_649$$ = (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_648_columnScrollPosition$$inline_646_rowScrollPosition$$1$$, "scrollPosition", "key", "row");
    $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_648_columnScrollPosition$$inline_646_rowScrollPosition$$1$$ = $rowScrollPosition$$inline_649$$ != D.$JSCompiler_alias_NULL$$ ? $rowScrollPosition$$inline_649$$ : (0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_648_columnScrollPosition$$inline_646_rowScrollPosition$$1$$, "scrollPosition", "index", "row");
    if("key" === $indexes$$inline_655_scrollMode_scrollPosition$$inline_643$$) {
      var $keys$$inline_652$$ = {row:$JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_648_columnScrollPosition$$inline_646_rowScrollPosition$$1$$, column:$JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_645_columnScrollPosition$$1$$}, $callback$$inline_653$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$_intialScrollPositionCallback$;
      $indexes$$inline_655_scrollMode_scrollPosition$$inline_643$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_dataSource$.indexes($keys$$inline_652$$);
      "function" === typeof $indexes$$inline_655_scrollMode_scrollPosition$$inline_643$$.then ? $indexes$$inline_655_scrollMode_scrollPosition$$inline_643$$.then(function($indexes$$inline_655_scrollMode_scrollPosition$$inline_643$$) {
        $callback$$inline_653$$.call($JSCompiler_StaticMethods_setInitialScrollPosition$self$$, $indexes$$inline_655_scrollMode_scrollPosition$$inline_643$$, $keys$$inline_652$$)
      }, function() {
        $callback$$inline_653$$.call($JSCompiler_StaticMethods_setInitialScrollPosition$self$$, {row:-1, column:-1}, $keys$$inline_652$$)
      }) : $callback$$inline_653$$.call($JSCompiler_StaticMethods_setInitialScrollPosition$self$$, $indexes$$inline_655_scrollMode_scrollPosition$$inline_643$$, $keys$$inline_652$$)
    }else {
      $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$_intialScrollPositionCallback$({row:$JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_648_columnScrollPosition$$inline_646_rowScrollPosition$$1$$, column:$JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_645_columnScrollPosition$$1$$})
    }
  }
};
D.$DvtDataGrid$$.prototype.$_intialScrollPositionCallback$ = function $$DvtDataGrid$$$$$_intialScrollPositionCallback$$($indexes$$6_rowScrollPosition$$2$$) {
  var $columnScrollPosition$$2_initialScrollLeft$$, $initialScrollTop$$ = 0;
  $columnScrollPosition$$2_initialScrollLeft$$ = -1 === $indexes$$6_rowScrollPosition$$2$$.column ? 0 : $indexes$$6_rowScrollPosition$$2$$.column;
  $indexes$$6_rowScrollPosition$$2$$ = -1 === $indexes$$6_rowScrollPosition$$2$$.row ? 0 : $indexes$$6_rowScrollPosition$$2$$.row;
  $columnScrollPosition$$2_initialScrollLeft$$ *= this.$m_avgColWidth$;
  $initialScrollTop$$ = $indexes$$6_rowScrollPosition$$2$$ * this.$m_avgRowHeight$;
  (0,D.$JSCompiler_StaticMethods_setElementScrollLeft$$)(this.$m_utils$, this.$m_scroller$, $columnScrollPosition$$2_initialScrollLeft$$);
  this.$m_scroller$.scrollTop = $initialScrollTop$$
};
D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$ = function $$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$$($JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$self$$, $expectedWidth$$) {
  var $databody$$2$$;
  $databody$$2$$ = $JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$self$$.$m_databody$;
  return(0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$2$$.firstChild) > ($expectedWidth$$ == D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$2$$) : $expectedWidth$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$ = function $$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$$($JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$self$$, $expectedHeight$$) {
  var $databody$$3$$;
  $databody$$3$$ = $JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$self$$.$m_databody$;
  return(0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$3$$.firstChild) > ($expectedHeight$$ == D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$3$$) : $expectedHeight$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtDataGrid$$.prototype.$SetAccessibleContext$ = function $$DvtDataGrid$$$$$SetAccessibleContext$$($context$$4$$) {
  $context$$4$$ != D.$JSCompiler_alias_NULL$$ && $context$$4$$.message && (this.$m_stateInfo$.innerHTML = $context$$4$$.message)
};
D.$DvtDataGrid$$.prototype.SetAccessibleContext = D.$DvtDataGrid$$.prototype.$SetAccessibleContext$;
D.$JSCompiler_StaticMethods__updateStateInfo$$ = function $$JSCompiler_StaticMethods__updateStateInfo$$$($JSCompiler_StaticMethods__updateStateInfo$self$$, $key$$31_text$$10$$, $args$$4$$) {
  $key$$31_text$$10$$ = $JSCompiler_StaticMethods__updateStateInfo$self$$.$m_resources$.getTranslatedText($key$$31_text$$10$$, $args$$4$$);
  $key$$31_text$$10$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__updateStateInfo$self$$.$m_stateInfo$.innerHTML = $key$$31_text$$10$$)
};
D.$JSCompiler_StaticMethods__isCountUnknown$$ = function $$JSCompiler_StaticMethods__isCountUnknown$$$($JSCompiler_StaticMethods__isCountUnknown$self$$, $axis$$13$$) {
  var $colCount_datasource_rowCount$$1$$, $colPrecision_rowPrecision$$;
  $colCount_datasource_rowCount$$1$$ = $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_dataSource$;
  return"row" === $axis$$13$$ ? ($JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateRowCount$ === D.$JSCompiler_alias_VOID$$ && ($colPrecision_rowPrecision$$ = $colCount_datasource_rowCount$$1$$.getCountPrecision("row"), $colCount_datasource_rowCount$$1$$ = $colCount_datasource_rowCount$$1$$.getCount("row"), $JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateRowCount$ = "estimate" === $colPrecision_rowPrecision$$ || 0 > $colCount_datasource_rowCount$$1$$ ? D.$JSCompiler_alias_TRUE$$ : 
  D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateRowCount$) : "column" === $axis$$13$$ ? ($JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateColumnCount$ === D.$JSCompiler_alias_VOID$$ && ($colPrecision_rowPrecision$$ = $colCount_datasource_rowCount$$1$$.getCountPrecision("column"), $colCount_datasource_rowCount$$1$$ = $colCount_datasource_rowCount$$1$$.getCount("column"), $JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateColumnCount$ = 
  "estimate" === $colPrecision_rowPrecision$$ || 0 > $colCount_datasource_rowCount$$1$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods__isCountUnknown$self$$.$_isEstimateColumnCount$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$ = function $$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$$($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$, $axis$$14$$) {
  return(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$, $axis$$14$$) || (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$)
};
D.$JSCompiler_StaticMethods_buildHeaders$$ = function $$JSCompiler_StaticMethods_buildHeaders$$$($JSCompiler_StaticMethods_buildHeaders$self$$, $axis$$15$$, $styleClass$$) {
  var $root$$7$$ = window.document.createElement("div");
  $root$$7$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_buildHeaders$self$$, $axis$$15$$ + "Header");
  $root$$7$$.className = $styleClass$$ + " " + $JSCompiler_StaticMethods_buildHeaders$self$$.getMappedStyle("header");
  $JSCompiler_StaticMethods_buildHeaders$self$$.fetchHeaders($axis$$15$$, 0, $root$$7$$);
  return $root$$7$$
};
D.$DvtDataGrid$$.prototype.fetchHeaders = function $$DvtDataGrid$$$$fetchHeaders$($axis$$16_headerRange$$1$$, $start$$9$$, $header$$2$$, $fetchSize$$, $callbacks$$3_successCallback$$26$$) {
  var $axisStart_count$$6$$, $axisEnd$$;
  this.$m_fetching$[$axis$$16_headerRange$$1$$] || (this.$m_fetching$[$axis$$16_headerRange$$1$$] = {start:$start$$9$$}, $fetchSize$$ == D.$JSCompiler_alias_VOID$$ && ($fetchSize$$ = (0,D.$JSCompiler_StaticMethods_getFetchSize$$)(this, $axis$$16_headerRange$$1$$), (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, $axis$$16_headerRange$$1$$) || ($axisStart_count$$6$$ = "row" == $axis$$16_headerRange$$1$$ ? this.$m_startRow$ : this.$m_startCol$, $axisEnd$$ = "row" == $axis$$16_headerRange$$1$$ ? 
  this.$m_endRow$ : this.$m_endCol$, $start$$9$$ < $axisStart_count$$6$$ ? $fetchSize$$ = window.Math.min($fetchSize$$, $axisStart_count$$6$$) : ($axisStart_count$$6$$ = this.$m_dataSource$.getCount($axis$$16_headerRange$$1$$), 0 <= $axisStart_count$$6$$ && ($fetchSize$$ = window.Math.min($fetchSize$$, window.Math.max(0, $axisStart_count$$6$$ - $axisEnd$$)))))), $axis$$16_headerRange$$1$$ = {axis:$axis$$16_headerRange$$1$$, start:$start$$9$$, count:$fetchSize$$, header:$header$$2$$}, $callbacks$$3_successCallback$$26$$ = 
  $callbacks$$3_successCallback$$26$$ != D.$JSCompiler_alias_NULL$$ && $callbacks$$3_successCallback$$26$$.success != D.$JSCompiler_alias_NULL$$ ? $callbacks$$3_successCallback$$26$$.success : this.$handleHeadersFetchSuccess$, (0,D.$JSCompiler_StaticMethods_showStatusText$$)(this), this.$m_dataSource$.fetchHeaders($axis$$16_headerRange$$1$$, {success:$callbacks$$3_successCallback$$26$$, error:this.$handleHeadersFetchError$}, {success:this, error:this}))
};
D.$DvtDataGrid$$.prototype.$handleHeadersFetchSuccess$ = function $$DvtDataGrid$$$$$handleHeadersFetchSuccess$$($prev$$inline_717_results_rowHeader$$inline_9080$$, $adjustment$$inline_9081_headerRange$$3_start$$10$$, $rowInsert$$) {
  var $axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$, $avgWidth$$inline_685_root$$8$$, $count$$7_totalCount$$inline_695$$;
  if($adjustment$$inline_9081_headerRange$$3_start$$10$$.start == this.$m_fetching$[$adjustment$$inline_9081_headerRange$$3_start$$10$$.axis].start) {
    $axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$ = $adjustment$$inline_9081_headerRange$$3_start$$10$$.axis;
    this.$m_fetching$[$axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$] = D.$JSCompiler_alias_FALSE$$;
    $avgWidth$$inline_685_root$$8$$ = $adjustment$$inline_9081_headerRange$$3_start$$10$$.header;
    $adjustment$$inline_9081_headerRange$$3_start$$10$$ = $adjustment$$inline_9081_headerRange$$3_start$$10$$.start;
    $count$$7_totalCount$$inline_695$$ = this.$m_dataSource$.getCount($axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$);
    if("column" === $axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$) {
      a: {
        var $referenceRow$$inline_721_renderer$$inline_669$$, $totalColWidth$$inline_670_totalRowHeight$$inline_704$$, $currentLeft$$inline_671_headerCount$$inline_698$$, $headerCount$$inline_672_rowHeaderContent$$inline_720$$, $firstHeader$$inline_673_resizer$$inline_700$$, $headerClass$$inline_674_renderer$$inline_701$$, $dir$$inline_675_isAppend$$inline_702$$, $i$$inline_676_top$$inline_703$$, $content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$, 
        $capability$$inline_9070_headerData$$inline_678_headerData$$inline_708_iconClassString$$inline_9076$$, $col$$inline_715_headerMetadata$$inline_679_inlineStyle$$inline_681_width$$inline_684$$, $headerContext$$inline_680_headerContext$$inline_9074_resizableAttribute$$inline_718_sortIcon$$inline_686$$, $direction$$inline_9077_headerContext$$inline_710_headerMetadata$$inline_709_sortable$$inline_9071_styleClass$$inline_682$$, $col$$inline_683_fragment$$inline_705$$, $i$$inline_707_sortableAttribute$$inline_688$$, 
        $resizableAttribute$$inline_689_row$$inline_711$$;
        $axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$ = (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)(this);
        $headerCount$$inline_672_rowHeaderContent$$inline_720$$ = $prev$$inline_717_results_rowHeader$$inline_9080$$.getCount();
        if($avgWidth$$inline_685_root$$8$$.hasChildNodes()) {
          if(0 == $headerCount$$inline_672_rowHeaderContent$$inline_720$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column")) {
            this.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_TRUE$$;
            break a
          }
          $axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$ = $avgWidth$$inline_685_root$$8$$.firstChild
        }else {
          0 == $headerCount$$inline_672_rowHeaderContent$$inline_720$$ ? ((0,D.$JSCompiler_StaticMethods_setElementHeight$$)($avgWidth$$inline_685_root$$8$$, 0), this.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_TRUE$$) : (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($avgWidth$$inline_685_root$$8$$, $axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$), $axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$ = window.document.createElement("div"), 
          $axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$.className = this.getMappedStyle("row") + " " + ((0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) ? this.getMappedStyle("scroller-mobile") : this.getMappedStyle("scroller"))
        }
        $referenceRow$$inline_721_renderer$$inline_669$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "column");
        $totalColWidth$$inline_670_totalRowHeight$$inline_704$$ = 0;
        $currentLeft$$inline_671_headerCount$$inline_698$$ = $adjustment$$inline_9081_headerRange$$3_start$$10$$ < this.$m_startColHeader$ ? this.$m_startColHeaderPixel$ : this.$m_endColHeaderPixel$;
        $firstHeader$$inline_673_resizer$$inline_700$$ = $axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$.firstChild;
        $headerClass$$inline_674_renderer$$inline_701$$ = this.getMappedStyle("headercell") + " " + this.getMappedStyle("colheadercell");
        $dir$$inline_675_isAppend$$inline_702$$ = this.$m_resources$.isRTLMode() ? "right" : "left";
        $i$$inline_707_sortableAttribute$$inline_688$$ = this.$m_resources$.getMappedAttribute("sortable");
        $resizableAttribute$$inline_689_row$$inline_711$$ = this.$m_resources$.getMappedAttribute("resizable");
        for($i$$inline_676_top$$inline_703$$ = 0;$i$$inline_676_top$$inline_703$$ < $headerCount$$inline_672_rowHeaderContent$$inline_720$$;$i$$inline_676_top$$inline_703$$ += 1) {
          $content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$ = $adjustment$$inline_9081_headerRange$$3_start$$10$$ < this.$m_startColHeader$ ? $adjustment$$inline_9081_headerRange$$3_start$$10$$ + $headerCount$$inline_672_rowHeaderContent$$inline_720$$ - 1 - $i$$inline_676_top$$inline_703$$ : $adjustment$$inline_9081_headerRange$$3_start$$10$$ + $i$$inline_676_top$$inline_703$$;
          $col$$inline_683_fragment$$inline_705$$ = window.document.createElement("div");
          $col$$inline_683_fragment$$inline_705$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "c" + $content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$);
          $axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$.appendChild($col$$inline_683_fragment$$inline_705$$);
          $capability$$inline_9070_headerData$$inline_678_headerData$$inline_708_iconClassString$$inline_9076$$ = $prev$$inline_717_results_rowHeader$$inline_9080$$.getData($content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$);
          $col$$inline_715_headerMetadata$$inline_679_inlineStyle$$inline_681_width$$inline_684$$ = $prev$$inline_717_results_rowHeader$$inline_9080$$.getMetadata($content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$);
          $headerContext$$inline_680_headerContext$$inline_9074_resizableAttribute$$inline_718_sortIcon$$inline_686$$ = (0,D.$JSCompiler_StaticMethods_createHeaderContext$$)(this, "column", $content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$, $capability$$inline_9070_headerData$$inline_678_headerData$$inline_708_iconClassString$$inline_9076$$, $col$$inline_715_headerMetadata$$inline_679_inlineStyle$$inline_681_width$$inline_684$$, 
          $col$$inline_683_fragment$$inline_705$$);
          $col$$inline_715_headerMetadata$$inline_679_inlineStyle$$inline_681_width$$inline_684$$ = this.$m_options$.$getInlineStyle$("column", $headerContext$$inline_680_headerContext$$inline_9074_resizableAttribute$$inline_718_sortIcon$$inline_686$$);
          $direction$$inline_9077_headerContext$$inline_710_headerMetadata$$inline_709_sortable$$inline_9071_styleClass$$inline_682$$ = this.$m_options$.$getStyleClass$("column", $headerContext$$inline_680_headerContext$$inline_9074_resizableAttribute$$inline_718_sortIcon$$inline_686$$);
          $col$$inline_715_headerMetadata$$inline_679_inlineStyle$$inline_681_width$$inline_684$$ != D.$JSCompiler_alias_NULL$$ && ($col$$inline_683_fragment$$inline_705$$.style.cssText = $col$$inline_715_headerMetadata$$inline_679_inlineStyle$$inline_681_width$$inline_684$$);
          $col$$inline_683_fragment$$inline_705$$.className = $direction$$inline_9077_headerContext$$inline_710_headerMetadata$$inline_709_sortable$$inline_9071_styleClass$$inline_682$$ != D.$JSCompiler_alias_NULL$$ ? $headerClass$$inline_674_renderer$$inline_701$$ + " " + $direction$$inline_9077_headerContext$$inline_710_headerMetadata$$inline_709_sortable$$inline_9071_styleClass$$inline_682$$ : $headerClass$$inline_674_renderer$$inline_701$$;
          this.$m_colHeaderHeight$ == D.$JSCompiler_alias_NULL$$ && "" != $col$$inline_683_fragment$$inline_705$$.style.height && (this.$m_colHeaderHeight$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($col$$inline_683_fragment$$inline_705$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($avgWidth$$inline_685_root$$8$$, this.$m_colHeaderHeight$));
          $col$$inline_683_fragment$$inline_705$$.style.height = "100%";
          $adjustment$$inline_9081_headerRange$$3_start$$10$$ < this.$m_startColHeader$ ? ($col$$inline_715_headerMetadata$$inline_679_inlineStyle$$inline_681_width$$inline_684$$ = (0,D.$JSCompiler_StaticMethods_getColumnWidth$$)(this, $col$$inline_683_fragment$$inline_705$$, $adjustment$$inline_9081_headerRange$$3_start$$10$$ + $headerCount$$inline_672_rowHeaderContent$$inline_720$$ - 1 - $i$$inline_676_top$$inline_703$$, $headerContext$$inline_680_headerContext$$inline_9074_resizableAttribute$$inline_718_sortIcon$$inline_686$$.key), 
          this.$m_cachedColumnWidthStartIndex$ -= 1) : $col$$inline_715_headerMetadata$$inline_679_inlineStyle$$inline_681_width$$inline_684$$ = (0,D.$JSCompiler_StaticMethods_getColumnWidth$$)(this, $col$$inline_683_fragment$$inline_705$$, $adjustment$$inline_9081_headerRange$$3_start$$10$$ + $i$$inline_676_top$$inline_703$$, $headerContext$$inline_680_headerContext$$inline_9074_resizableAttribute$$inline_718_sortIcon$$inline_686$$.key);
          (0,D.$JSCompiler_StaticMethods__isLastColumn$$)(this, $content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$) && (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)(this) + $currentLeft$$inline_671_headerCount$$inline_698$$ + $col$$inline_715_headerMetadata$$inline_679_inlineStyle$$inline_681_width$$inline_684$$ >= this.getWidth() - 2 && ("left" === $dir$$inline_675_isAppend$$inline_702$$ ? $col$$inline_683_fragment$$inline_705$$.style.borderRightStyle = 
          "none" : $col$$inline_683_fragment$$inline_705$$.style.borderLeftStyle = "none");
          (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($col$$inline_683_fragment$$inline_705$$, $col$$inline_715_headerMetadata$$inline_679_inlineStyle$$inline_681_width$$inline_684$$);
          $adjustment$$inline_9081_headerRange$$3_start$$10$$ < this.$m_startColHeader$ ? (0,D.$JSCompiler_StaticMethods_setElementDir$$)($col$$inline_683_fragment$$inline_705$$, $currentLeft$$inline_671_headerCount$$inline_698$$ - $col$$inline_715_headerMetadata$$inline_679_inlineStyle$$inline_681_width$$inline_684$$, $dir$$inline_675_isAppend$$inline_702$$) : (0,D.$JSCompiler_StaticMethods_setElementDir$$)($col$$inline_683_fragment$$inline_705$$, $currentLeft$$inline_671_headerCount$$inline_698$$, 
          $dir$$inline_675_isAppend$$inline_702$$);
          (0,D.$JSCompiler_StaticMethods__isHeaderResizeEnabled$$)(this, "column", $headerContext$$inline_680_headerContext$$inline_9074_resizableAttribute$$inline_718_sortIcon$$inline_686$$) && $col$$inline_683_fragment$$inline_705$$.setAttribute($resizableAttribute$$inline_689_row$$inline_711$$, "true");
          $referenceRow$$inline_721_renderer$$inline_669$$ != D.$JSCompiler_alias_NULL$$ ? ($content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$ = $referenceRow$$inline_721_renderer$$inline_669$$.call(this, $headerContext$$inline_680_headerContext$$inline_9074_resizableAttribute$$inline_718_sortIcon$$inline_686$$), $content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$ != 
          D.$JSCompiler_alias_NULL$$ && ($content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$.parentNode === D.$JSCompiler_alias_NULL$$ ? $col$$inline_683_fragment$$inline_705$$.appendChild($content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$) : $content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$.parentNode == 
          D.$JSCompiler_alias_NULL$$ && $content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$.toString && $col$$inline_683_fragment$$inline_705$$.appendChild(window.document.createTextNode($content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$.toString())))) : $col$$inline_683_fragment$$inline_705$$.appendChild(window.document.createTextNode($capability$$inline_9070_headerData$$inline_678_headerData$$inline_708_iconClassString$$inline_9076$$.toString()));
          $content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$ = $headerContext$$inline_680_headerContext$$inline_9074_resizableAttribute$$inline_718_sortIcon$$inline_686$$;
          $direction$$inline_9077_headerContext$$inline_710_headerMetadata$$inline_709_sortable$$inline_9071_styleClass$$inline_682$$ = $capability$$inline_9070_headerData$$inline_678_headerData$$inline_708_iconClassString$$inline_9076$$ = D.$JSCompiler_alias_VOID$$;
          $capability$$inline_9070_headerData$$inline_678_headerData$$inline_708_iconClassString$$inline_9076$$ = this.$m_dataSource$.getCapability("sort");
          $direction$$inline_9077_headerContext$$inline_710_headerMetadata$$inline_709_sortable$$inline_9071_styleClass$$inline_682$$ = (0,D.$JSCompiler_StaticMethods_nullOrDefault$$)(this.$m_options$.$getProperty$("sortable", "column", $content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$));
          if(("enable" === $direction$$inline_9077_headerContext$$inline_710_headerMetadata$$inline_709_sortable$$inline_9071_styleClass$$inline_682$$ || "auto" === $direction$$inline_9077_headerContext$$inline_710_headerMetadata$$inline_709_sortable$$inline_9071_styleClass$$inline_682$$) && ("full" === $capability$$inline_9070_headerData$$inline_678_headerData$$inline_708_iconClassString$$inline_9076$$ || "column" === $capability$$inline_9070_headerData$$inline_678_headerData$$inline_708_iconClassString$$inline_9076$$)) {
            var $height$$inline_714_inlineStyle$$inline_713_sortContainer$$inline_9078$$ = $direction$$inline_9077_headerContext$$inline_710_headerMetadata$$inline_709_sortable$$inline_9071_styleClass$$inline_682$$ = $capability$$inline_9070_headerData$$inline_678_headerData$$inline_708_iconClassString$$inline_9076$$ = $content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$ = D.$JSCompiler_alias_VOID$$, $height$$inline_714_inlineStyle$$inline_713_sortContainer$$inline_9078$$ = 
            window.document.createElement("div");
            $height$$inline_714_inlineStyle$$inline_713_sortContainer$$inline_9078$$.className = this.getMappedStyle("sortcontainer");
            $content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$ = window.document.createElement("div");
            $capability$$inline_9070_headerData$$inline_678_headerData$$inline_708_iconClassString$$inline_9076$$ = this.getMappedStyle("icon") + " " + this.getMappedStyle("clickableicon");
            $headerContext$$inline_680_headerContext$$inline_9074_resizableAttribute$$inline_718_sortIcon$$inline_686$$.key === (this.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ ? this.$m_sortInfo$.key : D.$JSCompiler_alias_NULL$$) ? ($direction$$inline_9077_headerContext$$inline_710_headerMetadata$$inline_709_sortable$$inline_9071_styleClass$$inline_682$$ = this.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ ? this.$m_sortInfo$.direction : D.$JSCompiler_alias_NULL$$, "ascending" === $direction$$inline_9077_headerContext$$inline_710_headerMetadata$$inline_709_sortable$$inline_9071_styleClass$$inline_682$$ ? 
            $content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$.className = this.getMappedStyle("sortascending") + " " + $capability$$inline_9070_headerData$$inline_678_headerData$$inline_708_iconClassString$$inline_9076$$ + " " + this.getMappedStyle("default") : "descending" === $direction$$inline_9077_headerContext$$inline_710_headerMetadata$$inline_709_sortable$$inline_9071_styleClass$$inline_682$$ && ($content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$.className = 
            this.getMappedStyle("sortdescending") + " " + $capability$$inline_9070_headerData$$inline_678_headerData$$inline_708_iconClassString$$inline_9076$$ + " " + this.getMappedStyle("default"))) : ($capability$$inline_9070_headerData$$inline_678_headerData$$inline_708_iconClassString$$inline_9076$$ += " " + this.getMappedStyle("disabled"), $content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$.className = this.getMappedStyle("sortascending") + 
            " " + $capability$$inline_9070_headerData$$inline_678_headerData$$inline_708_iconClassString$$inline_9076$$);
            $height$$inline_714_inlineStyle$$inline_713_sortContainer$$inline_9078$$.appendChild($content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$);
            $headerContext$$inline_680_headerContext$$inline_9074_resizableAttribute$$inline_718_sortIcon$$inline_686$$ = $height$$inline_714_inlineStyle$$inline_713_sortContainer$$inline_9078$$;
            $col$$inline_683_fragment$$inline_705$$.appendChild($headerContext$$inline_680_headerContext$$inline_9074_resizableAttribute$$inline_718_sortIcon$$inline_686$$);
            $col$$inline_683_fragment$$inline_705$$.setAttribute($i$$inline_707_sortableAttribute$$inline_688$$, "true")
          }
          $currentLeft$$inline_671_headerCount$$inline_698$$ = $adjustment$$inline_9081_headerRange$$3_start$$10$$ < this.$m_startColHeader$ ? $currentLeft$$inline_671_headerCount$$inline_698$$ - $col$$inline_715_headerMetadata$$inline_679_inlineStyle$$inline_681_width$$inline_684$$ : $currentLeft$$inline_671_headerCount$$inline_698$$ + $col$$inline_715_headerMetadata$$inline_679_inlineStyle$$inline_681_width$$inline_684$$;
          $totalColWidth$$inline_670_totalRowHeight$$inline_704$$ += $col$$inline_715_headerMetadata$$inline_679_inlineStyle$$inline_681_width$$inline_684$$;
          $adjustment$$inline_9081_headerRange$$3_start$$10$$ < this.$m_startColHeader$ ? ($axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$.insertBefore($col$$inline_683_fragment$$inline_705$$, $firstHeader$$inline_673_resizer$$inline_700$$), $firstHeader$$inline_673_resizer$$inline_700$$ = $col$$inline_683_fragment$$inline_705$$) : $axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$.appendChild($col$$inline_683_fragment$$inline_705$$)
        }
        $adjustment$$inline_9081_headerRange$$3_start$$10$$ < this.$m_startColHeader$ ? (this.$m_startColHeader$ -= $headerCount$$inline_672_rowHeaderContent$$inline_720$$, this.$m_startColHeaderPixel$ -= $totalColWidth$$inline_670_totalRowHeight$$inline_704$$) : (this.$m_endColHeader$ += $headerCount$$inline_672_rowHeaderContent$$inline_720$$, this.$m_endColHeaderPixel$ += $totalColWidth$$inline_670_totalRowHeight$$inline_704$$);
        $avgWidth$$inline_685_root$$8$$.hasChildNodes() || $avgWidth$$inline_685_root$$8$$.appendChild($axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$);
        if(0 < $headerCount$$inline_672_rowHeaderContent$$inline_720$$ && ($avgWidth$$inline_685_root$$8$$ = $totalColWidth$$inline_670_totalRowHeight$$inline_704$$ / $headerCount$$inline_672_rowHeaderContent$$inline_720$$, 0 == this.$m_avgColHeaderWidth$ || $avgWidth$$inline_685_root$$8$$ != this.$m_avgColHeaderWidth$)) {
          this.$m_avgColHeaderWidth$ = $avgWidth$$inline_685_root$$8$$, (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$, $count$$7_totalCount$$inline_695$$ * $avgWidth$$inline_685_root$$8$$)
        }
        !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && ((0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && this.$m_endColHeader$ >= $count$$7_totalCount$$inline_695$$) && (this.$m_stopColumnHeaderFetch$ = D.$JSCompiler_alias_TRUE$$)
      }
    }else {
      if("row" === $axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$) {
        a: {
          var $headerClass$$inline_712$$, $styleClass$$inline_716$$;
          (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)(this);
          $currentLeft$$inline_671_headerCount$$inline_698$$ = $prev$$inline_717_results_rowHeader$$inline_9080$$.getCount();
          if($avgWidth$$inline_685_root$$8$$.hasChildNodes()) {
            if(0 == $currentLeft$$inline_671_headerCount$$inline_698$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row")) {
              this.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_TRUE$$;
              break a
            }
            $axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$ = $avgWidth$$inline_685_root$$8$$.firstChild;
            $firstHeader$$inline_673_resizer$$inline_700$$ = $axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$.firstChild
          }else {
            $axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$ = window.document.createElement("div"), $axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$.className = (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) ? this.getMappedStyle("scroller-mobile") : this.getMappedStyle("scroller"), 0 == $currentLeft$$inline_671_headerCount$$inline_698$$ ? ($avgWidth$$inline_685_root$$8$$.className = "", (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($avgWidth$$inline_685_root$$8$$, 
            0), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$, 0), this.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_TRUE$$) : (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($avgWidth$$inline_685_root$$8$$, 50), $firstHeader$$inline_673_resizer$$inline_700$$ = window.document.createElement("div"), $firstHeader$$inline_673_resizer$$inline_700$$.style.display = "none", (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($firstHeader$$inline_673_resizer$$inline_700$$, 
            1), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($firstHeader$$inline_673_resizer$$inline_700$$, 0), $axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$.appendChild($firstHeader$$inline_673_resizer$$inline_700$$)
          }
          $headerClass$$inline_674_renderer$$inline_701$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "row");
          ($dir$$inline_675_isAppend$$inline_702$$ = $adjustment$$inline_9081_headerRange$$3_start$$10$$ >= this.$m_endRowHeader$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$) ? $i$$inline_676_top$$inline_703$$ = this.$m_endRowHeaderPixel$ : $rowInsert$$ ? ($headerCount$$inline_672_rowHeaderContent$$inline_720$$ = $avgWidth$$inline_685_root$$8$$.firstChild, $referenceRow$$inline_721_renderer$$inline_669$$ = $headerCount$$inline_672_rowHeaderContent$$inline_720$$.childNodes[$adjustment$$inline_9081_headerRange$$3_start$$10$$ - 
          this.$m_startRowHeader$ + 1], $i$$inline_676_top$$inline_703$$ = (0,window.parseInt)($referenceRow$$inline_721_renderer$$inline_669$$.style.top)) : $i$$inline_676_top$$inline_703$$ = this.$m_startRowHeaderPixel$;
          -1 == $count$$7_totalCount$$inline_695$$ && ($count$$7_totalCount$$inline_695$$ = this.$m_endRowHeader$ + $currentLeft$$inline_671_headerCount$$inline_698$$);
          $headerContext$$inline_680_headerContext$$inline_9074_resizableAttribute$$inline_718_sortIcon$$inline_686$$ = this.$m_resources$.getMappedAttribute("resizable");
          $totalColWidth$$inline_670_totalRowHeight$$inline_704$$ = 0;
          $col$$inline_683_fragment$$inline_705$$ = window.document.createDocumentFragment();
          for($i$$inline_707_sortableAttribute$$inline_688$$ = 0;$i$$inline_707_sortableAttribute$$inline_688$$ < $currentLeft$$inline_671_headerCount$$inline_698$$;$i$$inline_707_sortableAttribute$$inline_688$$ += 1) {
            $content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$ = $dir$$inline_675_isAppend$$inline_702$$ ? $adjustment$$inline_9081_headerRange$$3_start$$10$$ + $i$$inline_707_sortableAttribute$$inline_688$$ : $adjustment$$inline_9081_headerRange$$3_start$$10$$ + ($currentLeft$$inline_671_headerCount$$inline_698$$ - 1 - $i$$inline_707_sortableAttribute$$inline_688$$), $resizableAttribute$$inline_689_row$$inline_711$$ = window.document.createElement("div"), 
            $resizableAttribute$$inline_689_row$$inline_711$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "r" + $content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$), $col$$inline_715_headerMetadata$$inline_679_inlineStyle$$inline_681_width$$inline_684$$ = window.document.createElement("div"), $resizableAttribute$$inline_689_row$$inline_711$$.appendChild($col$$inline_715_headerMetadata$$inline_679_inlineStyle$$inline_681_width$$inline_684$$), 
            $capability$$inline_9070_headerData$$inline_678_headerData$$inline_708_iconClassString$$inline_9076$$ = $prev$$inline_717_results_rowHeader$$inline_9080$$.getData($content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$), $direction$$inline_9077_headerContext$$inline_710_headerMetadata$$inline_709_sortable$$inline_9071_styleClass$$inline_682$$ = $prev$$inline_717_results_rowHeader$$inline_9080$$.getMetadata($content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$), 
            $direction$$inline_9077_headerContext$$inline_710_headerMetadata$$inline_709_sortable$$inline_9071_styleClass$$inline_682$$ = (0,D.$JSCompiler_StaticMethods_createHeaderContext$$)(this, "row", $content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$, $capability$$inline_9070_headerData$$inline_678_headerData$$inline_708_iconClassString$$inline_9076$$, $direction$$inline_9077_headerContext$$inline_710_headerMetadata$$inline_709_sortable$$inline_9071_styleClass$$inline_682$$, 
            $col$$inline_715_headerMetadata$$inline_679_inlineStyle$$inline_681_width$$inline_684$$), $height$$inline_714_inlineStyle$$inline_713_sortContainer$$inline_9078$$ = this.$m_options$.$getInlineStyle$("row", $direction$$inline_9077_headerContext$$inline_710_headerMetadata$$inline_709_sortable$$inline_9071_styleClass$$inline_682$$), $styleClass$$inline_716$$ = this.$m_options$.$getStyleClass$("row", $direction$$inline_9077_headerContext$$inline_710_headerMetadata$$inline_709_sortable$$inline_9071_styleClass$$inline_682$$), 
            $height$$inline_714_inlineStyle$$inline_713_sortContainer$$inline_9078$$ != D.$JSCompiler_alias_NULL$$ && ($resizableAttribute$$inline_689_row$$inline_711$$.style.cssText = $height$$inline_714_inlineStyle$$inline_713_sortContainer$$inline_9078$$), this.$m_rowHeaderWidth$ == D.$JSCompiler_alias_NULL$$ && "" != $resizableAttribute$$inline_689_row$$inline_711$$.style.width && (this.$m_rowHeaderWidth$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($resizableAttribute$$inline_689_row$$inline_711$$), 
            (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($avgWidth$$inline_685_root$$8$$, this.$m_rowHeaderWidth$)), $resizableAttribute$$inline_689_row$$inline_711$$.className = this.getMappedStyle("row"), $height$$inline_714_inlineStyle$$inline_713_sortContainer$$inline_9078$$ = (0,D.$JSCompiler_StaticMethods_getRowHeight$$)(this, $resizableAttribute$$inline_689_row$$inline_711$$, $adjustment$$inline_9081_headerRange$$3_start$$10$$ + $i$$inline_707_sortableAttribute$$inline_688$$, $direction$$inline_9077_headerContext$$inline_710_headerMetadata$$inline_709_sortable$$inline_9071_styleClass$$inline_682$$.key), 
            (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($resizableAttribute$$inline_689_row$$inline_711$$, $height$$inline_714_inlineStyle$$inline_713_sortContainer$$inline_9078$$), $dir$$inline_675_isAppend$$inline_702$$ || $rowInsert$$ ? ($resizableAttribute$$inline_689_row$$inline_711$$.style.top = $i$$inline_676_top$$inline_703$$ + "px", $i$$inline_676_top$$inline_703$$ += $height$$inline_714_inlineStyle$$inline_713_sortContainer$$inline_9078$$) : ($i$$inline_676_top$$inline_703$$ -= $height$$inline_714_inlineStyle$$inline_713_sortContainer$$inline_9078$$, 
            $resizableAttribute$$inline_689_row$$inline_711$$.style.top = $i$$inline_676_top$$inline_703$$ + "px"), $headerClass$$inline_712$$ = this.getMappedStyle("headercell") + " " + this.getMappedStyle("rowheadercell"), $col$$inline_715_headerMetadata$$inline_679_inlineStyle$$inline_681_width$$inline_684$$.className = $styleClass$$inline_716$$ != D.$JSCompiler_alias_NULL$$ ? $headerClass$$inline_712$$ + " " + $styleClass$$inline_716$$ : $headerClass$$inline_712$$, (0,D.$JSCompiler_StaticMethods__isLastRow$$)(this, 
            $content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$) && (0,D.$JSCompiler_StaticMethods_getRowBottom$$)(this, $resizableAttribute$$inline_689_row$$inline_711$$, $i$$inline_676_top$$inline_703$$) >= this.getHeight() - 2 && ($col$$inline_715_headerMetadata$$inline_679_inlineStyle$$inline_681_width$$inline_684$$.style.borderBottomStyle = "none"), (0,D.$JSCompiler_StaticMethods__isHeaderResizeEnabled$$)(this, "row", 
            $direction$$inline_9077_headerContext$$inline_710_headerMetadata$$inline_709_sortable$$inline_9071_styleClass$$inline_682$$) && $col$$inline_715_headerMetadata$$inline_679_inlineStyle$$inline_681_width$$inline_684$$.setAttribute($headerContext$$inline_680_headerContext$$inline_9074_resizableAttribute$$inline_718_sortIcon$$inline_686$$, "true"), $headerClass$$inline_674_renderer$$inline_701$$ != D.$JSCompiler_alias_NULL$$ ? ($content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$ = 
            $headerClass$$inline_674_renderer$$inline_701$$.call(this, $direction$$inline_9077_headerContext$$inline_710_headerMetadata$$inline_709_sortable$$inline_9071_styleClass$$inline_682$$), $content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$ != D.$JSCompiler_alias_NULL$$ && ($content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$.parentNode === 
            D.$JSCompiler_alias_NULL$$ ? $col$$inline_715_headerMetadata$$inline_679_inlineStyle$$inline_681_width$$inline_684$$.appendChild($content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$) : $content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$.parentNode == D.$JSCompiler_alias_NULL$$ && $content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$.toString && 
            $col$$inline_715_headerMetadata$$inline_679_inlineStyle$$inline_681_width$$inline_684$$.appendChild(window.document.createTextNode($content$$inline_687_content$$inline_719_headerContext$$inline_9069_index$$inline_677_index$$inline_706_sortIcon$$inline_9075$$.toString())))) : $col$$inline_715_headerMetadata$$inline_679_inlineStyle$$inline_681_width$$inline_684$$.appendChild(window.document.createTextNode($capability$$inline_9070_headerData$$inline_678_headerData$$inline_708_iconClassString$$inline_9076$$.toString())), 
            $dir$$inline_675_isAppend$$inline_702$$ ? $col$$inline_683_fragment$$inline_705$$.appendChild($resizableAttribute$$inline_689_row$$inline_711$$) : $col$$inline_683_fragment$$inline_705$$.insertBefore($resizableAttribute$$inline_689_row$$inline_711$$, $col$$inline_683_fragment$$inline_705$$.firstChild), $totalColWidth$$inline_670_totalRowHeight$$inline_704$$ += $height$$inline_714_inlineStyle$$inline_713_sortContainer$$inline_9078$$
          }
          if($dir$$inline_675_isAppend$$inline_702$$) {
            $axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$.appendChild($col$$inline_683_fragment$$inline_705$$), 0 != this.$m_endRowHeader$ && 0 != $currentLeft$$inline_671_headerCount$$inline_698$$ && ($prev$$inline_717_results_rowHeader$$inline_9080$$ = $axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$.childNodes[this.$m_endRowHeader$], $prev$$inline_717_results_rowHeader$$inline_9080$$ != D.$JSCompiler_alias_NULL$$ && ($prev$$inline_717_results_rowHeader$$inline_9080$$.firstChild.style.borderBottomStyle = 
            "")), this.$m_endRowHeader$ += $currentLeft$$inline_671_headerCount$$inline_698$$, this.$m_endRowHeaderPixel$ += $totalColWidth$$inline_670_totalRowHeight$$inline_704$$
          }else {
            if($rowInsert$$) {
              $headerCount$$inline_672_rowHeaderContent$$inline_720$$.insertBefore($col$$inline_683_fragment$$inline_705$$, $referenceRow$$inline_721_renderer$$inline_669$$);
              $adjustment$$inline_9081_headerRange$$3_start$$10$$ <= this.$m_startRow$ && (this.$m_startRowHeader$ = $adjustment$$inline_9081_headerRange$$3_start$$10$$, this.$m_startRowHeaderPixel$ = window.Math.max(0, this.$m_startRowHeaderPixel$ - $totalColWidth$$inline_670_totalRowHeight$$inline_704$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($firstHeader$$inline_673_resizer$$inline_700$$, window.Math.max(0, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($firstHeader$$inline_673_resizer$$inline_700$$) - 
              $totalColWidth$$inline_670_totalRowHeight$$inline_704$$)));
              this.$m_endRowHeader$ = this.$m_endRow$ + $currentLeft$$inline_671_headerCount$$inline_698$$;
              this.$m_endRowHeaderPixel$ = window.Math.max(0, this.$m_endRowHeaderPixel$ + $totalColWidth$$inline_670_totalRowHeight$$inline_704$$);
              $prev$$inline_717_results_rowHeader$$inline_9080$$ = $referenceRow$$inline_721_renderer$$inline_669$$;
              for($adjustment$$inline_9081_headerRange$$3_start$$10$$ = $totalColWidth$$inline_670_totalRowHeight$$inline_704$$;$prev$$inline_717_results_rowHeader$$inline_9080$$;) {
                $prev$$inline_717_results_rowHeader$$inline_9080$$.style.top = (0,window.parseInt)($prev$$inline_717_results_rowHeader$$inline_9080$$.style.top) + $adjustment$$inline_9081_headerRange$$3_start$$10$$ + "px", $prev$$inline_717_results_rowHeader$$inline_9080$$ = $prev$$inline_717_results_rowHeader$$inline_9080$$.nextSibling
              }
            }else {
              (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($firstHeader$$inline_673_resizer$$inline_700$$, window.Math.max(0, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($firstHeader$$inline_673_resizer$$inline_700$$) - $totalColWidth$$inline_670_totalRowHeight$$inline_704$$)), $axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$.insertBefore($col$$inline_683_fragment$$inline_705$$, $firstHeader$$inline_673_resizer$$inline_700$$.nextSibling), this.$m_startRowHeader$ -= 
              $currentLeft$$inline_671_headerCount$$inline_698$$, this.$m_startRowHeaderPixel$ = window.Math.max(0, this.$m_startRowHeaderPixel$ - $totalColWidth$$inline_670_totalRowHeight$$inline_704$$)
            }
          }
          $rowInsert$$ || $avgWidth$$inline_685_root$$8$$.appendChild($axis$$18_defaultHeight$$inline_667_scroller$$inline_668_scroller$$inline_699$$);
          !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && ((0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && this.$m_endRowHeader$ >= $count$$7_totalCount$$inline_695$$) && (this.$m_stopRowHeaderFetch$ = D.$JSCompiler_alias_TRUE$$)
        }
      }
    }
    (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) ? ((0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this), !this.$m_initialized$ && !$rowInsert$$ && ((0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this), (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this))) : (0,D.$JSCompiler_StaticMethods_isHeaderFetchComplete$$)(this) && (this.$m_initialized$ || (0,D.$JSCompiler_StaticMethods_resizeHeaders$$)(this));
    this.$m_initialized$ && (0,D.$JSCompiler_StaticMethods__syncScroller$$)(this)
  }
};
D.$DvtDataGrid$$.prototype.$handleHeadersFetchError$ = function $$DvtDataGrid$$$$$handleHeadersFetchError$$($error$$3$$, $headerRange$$4$$) {
  this.$m_fetching$[$headerRange$$4$$.axis] = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_createHeaderContext$$ = function $$JSCompiler_StaticMethods_createHeaderContext$$$($JSCompiler_StaticMethods_createHeaderContext$self$$, $axis$$20$$, $index$$49_key$$32$$, $data$$21$$, $metadata$$, $elem$$4$$) {
  var $headerContext$$ = {};
  $headerContext$$.axis = $axis$$20$$;
  $headerContext$$.index = $index$$49_key$$32$$;
  $headerContext$$.data = $data$$21$$;
  $headerContext$$.datagrid = $JSCompiler_StaticMethods_createHeaderContext$self$$;
  $headerContext$$.parentElement = $elem$$4$$;
  $index$$49_key$$32$$ = $metadata$$.key;
  $index$$49_key$$32$$ != D.$JSCompiler_alias_NULL$$ && ("row" === $axis$$20$$ ? $elem$$4$$.parentNode.setAttribute($JSCompiler_StaticMethods_createHeaderContext$self$$.$m_resources$.getMappedAttribute("key"), $index$$49_key$$32$$) : $elem$$4$$.setAttribute($JSCompiler_StaticMethods_createHeaderContext$self$$.$m_resources$.getMappedAttribute("key"), $index$$49_key$$32$$));
  for(var $prop$$6$$ in $metadata$$) {
    $metadata$$.hasOwnProperty($prop$$6$$) && ($headerContext$$[$prop$$6$$] = $metadata$$[$prop$$6$$])
  }
  $JSCompiler_StaticMethods_createHeaderContext$self$$.$m_createContextCallback$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_createHeaderContext$self$$.$m_createContextCallback$.call($JSCompiler_StaticMethods_createHeaderContext$self$$, $headerContext$$);
  return $headerContext$$
};
D.$DvtDataGrid$$.prototype.fetchCells = function $$DvtDataGrid$$$$fetchCells$($columnRange_databody$$4$$, $scroller$$7$$, $rowRange_rowStart$$, $colStart$$, $rowCount$$2$$, $colCount$$1$$, $callbacks$$4_successCallback$$27$$) {
  var $count$$8$$;
  this.$m_fetching$.cells || (this.$m_fetching$.cells = {row:$rowRange_rowStart$$, column:$colStart$$}, $rowCount$$2$$ == D.$JSCompiler_alias_NULL$$ && ($rowCount$$2$$ = (0,D.$JSCompiler_StaticMethods_getFetchSize$$)(this, "row"), (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") || ($rowRange_rowStart$$ < this.$m_startRow$ ? $rowCount$$2$$ = window.Math.min($rowCount$$2$$, this.$m_startRow$) : ($count$$8$$ = this.$m_dataSource$.getCount("row"), 0 <= $count$$8$$ && ($rowCount$$2$$ = 
  window.Math.min($rowCount$$2$$, window.Math.max(0, $count$$8$$ - this.$m_endRow$)))))), $colCount$$1$$ == D.$JSCompiler_alias_NULL$$ && ($colCount$$1$$ = (0,D.$JSCompiler_StaticMethods_getFetchSize$$)(this, "column"), (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") || ($colStart$$ < this.$m_startCol$ ? $colCount$$1$$ = window.Math.min($colCount$$1$$, this.$m_startCol$) : ($count$$8$$ = this.$m_dataSource$.getCount("column"), 0 <= $count$$8$$ && ($colCount$$1$$ = window.Math.min($colCount$$1$$, 
  window.Math.max(0, $count$$8$$ - this.$m_endCol$)))))), $rowRange_rowStart$$ = {axis:"row", start:$rowRange_rowStart$$, count:$rowCount$$2$$}, $columnRange_databody$$4$$ = {axis:"column", start:$colStart$$, count:$colCount$$1$$, databody:$columnRange_databody$$4$$, scroller:$scroller$$7$$}, $callbacks$$4_successCallback$$27$$ = $callbacks$$4_successCallback$$27$$ != D.$JSCompiler_alias_NULL$$ && $callbacks$$4_successCallback$$27$$.success != D.$JSCompiler_alias_NULL$$ ? $callbacks$$4_successCallback$$27$$.success : 
  this.$handleCellsFetchSuccess$, (0,D.$JSCompiler_StaticMethods_showStatusText$$)(this), this.$m_dataSource$.fetchCells([$rowRange_rowStart$$, $columnRange_databody$$4$$], {success:$callbacks$$4_successCallback$$27$$, error:this.$handleHeadersFetchError$}, {success:this, error:this}))
};
D.$DvtDataGrid$$.prototype.$isDraggable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$DvtDataGrid$$.prototype.$handleCellsFetchSuccess$ = function $$DvtDataGrid$$$$$handleCellsFetchSuccess$$($adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$, $cellRange$$3_databody$$5$$, $JSCompiler_inline_result$$50_rowInsert$$2_scrollerHeight$$inline_792_summary$$inline_799$$, $animate_i$$15_row$$inline_771_rows$$1$$) {
  var $scrollerWidth$$inline_793_summaryExpanded$$inline_800_totalRowCount$$, $scrollerContentHeight$$inline_795_totalColumnCount$$, $columnStart$$1_requestRowStart$$inline_728_rowRange$$3_rowStart$$inline_734_rowStartPixel$$inline_738$$, $JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$, $columnCount$$inline_747_responseColumnStart$$inline_726_rowCount$$4$$, $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_761_verticalGridlines$$inline_786_viewportLeft$$inline_744$$, 
  $columnEndPixel$$inline_741_columnRange$$3_columnStart$$inline_736_inner$$, $columnCount$$1_requestCellRanges$$inline_727_requestColumnStart$$inline_729_rowEnd$$inline_735_rowEndPixel$$inline_739$$, $columnRangeNeedsUpdate_columnStartPixel$$inline_740$$, $addResult_avgHeight_scrollerContent$$inline_794_scrollerContentWidth$$inline_796_top$$3$$, $columnBandingInterval$$inline_784_prev$$1_referenceRow$$1$$, $databodyContent$$1_scroller$$8_viewportTop$$inline_742$$, $horizontalGridlines$$inline_785_resizer$$1_viewportBottom$$inline_743$$, 
  $avgWidth$$inline_788_fragment$$1_row$$inline_787$$, $avgWidth$$1_renderer$$inline_783$$;
  $scrollerWidth$$inline_793_summaryExpanded$$inline_800_totalRowCount$$ = this.$m_dataSource$.getCount("row");
  $scrollerContentHeight$$inline_795_totalColumnCount$$ = this.$m_dataSource$.getCount("column");
  if($JSCompiler_inline_result$$50_rowInsert$$2_scrollerHeight$$inline_792_summary$$inline_799$$ === D.$JSCompiler_alias_VOID$$) {
    $JSCompiler_inline_result$$50_rowInsert$$2_scrollerHeight$$inline_792_summary$$inline_799$$ = D.$JSCompiler_alias_FALSE$$;
    $JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$ = $cellRange$$3_databody$$5$$[0].start;
    $columnCount$$inline_747_responseColumnStart$$inline_726_rowCount$$4$$ = $cellRange$$3_databody$$5$$[1].start;
    $columnCount$$1_requestCellRanges$$inline_727_requestColumnStart$$inline_729_rowEnd$$inline_735_rowEndPixel$$inline_739$$ = this.$m_fetching$.cells;
    $columnStart$$1_requestRowStart$$inline_728_rowRange$$3_rowStart$$inline_734_rowStartPixel$$inline_738$$ = $columnCount$$1_requestCellRanges$$inline_727_requestColumnStart$$inline_729_rowEnd$$inline_735_rowEndPixel$$inline_739$$.row;
    $columnCount$$1_requestCellRanges$$inline_727_requestColumnStart$$inline_729_rowEnd$$inline_735_rowEndPixel$$inline_739$$ = $columnCount$$1_requestCellRanges$$inline_727_requestColumnStart$$inline_729_rowEnd$$inline_735_rowEndPixel$$inline_739$$.column;
    if(!($columnStart$$1_requestRowStart$$inline_728_rowRange$$3_rowStart$$inline_734_rowStartPixel$$inline_738$$ == $JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$ && $columnCount$$1_requestCellRanges$$inline_727_requestColumnStart$$inline_729_rowEnd$$inline_735_rowEndPixel$$inline_739$$ == $columnCount$$inline_747_responseColumnStart$$inline_726_rowCount$$4$$)) {
      return
    }
    if($JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$ = this.$m_startRowPixel$ == this.$m_endRowPixel$ && this.$m_startColPixel$ == this.$m_endColPixel$) {
      var $avgHeight$$inline_754_i$$inline_789_jk$$inline_759_viewportRight$$inline_745$$;
      (0,window.isNaN)(this.$m_avgRowHeight$) || (0,window.isNaN)(this.$m_avgColWidth$) ? $JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$ = D.$JSCompiler_alias_TRUE$$ : ($columnStart$$1_requestRowStart$$inline_728_rowRange$$3_rowStart$$inline_734_rowStartPixel$$inline_738$$ = $cellRange$$3_databody$$5$$[0].start, $JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$ = 
      $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$.getCount("row"), $columnCount$$1_requestCellRanges$$inline_727_requestColumnStart$$inline_729_rowEnd$$inline_735_rowEndPixel$$inline_739$$ = $columnStart$$1_requestRowStart$$inline_728_rowRange$$3_rowStart$$inline_734_rowStartPixel$$inline_738$$ + $JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$, $columnEndPixel$$inline_741_columnRange$$3_columnStart$$inline_736_inner$$ = 
      $cellRange$$3_databody$$5$$[1].start, $columnCount$$inline_747_responseColumnStart$$inline_726_rowCount$$4$$ = $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$.getCount("column"), $columnStart$$1_requestRowStart$$inline_728_rowRange$$3_rowStart$$inline_734_rowStartPixel$$inline_738$$ *= this.$m_avgRowHeight$, $columnCount$$1_requestCellRanges$$inline_727_requestColumnStart$$inline_729_rowEnd$$inline_735_rowEndPixel$$inline_739$$ *= this.$m_avgRowHeight$, $columnRangeNeedsUpdate_columnStartPixel$$inline_740$$ = 
      this.$m_avgColWidth$ * $columnEndPixel$$inline_741_columnRange$$3_columnStart$$inline_736_inner$$, $columnEndPixel$$inline_741_columnRange$$3_columnStart$$inline_736_inner$$ = this.$m_avgColWidth$ * ($columnEndPixel$$inline_741_columnRange$$3_columnStart$$inline_736_inner$$ + $columnCount$$inline_747_responseColumnStart$$inline_726_rowCount$$4$$), $databodyContent$$1_scroller$$8_viewportTop$$inline_742$$ = this.$m_currentScrollTop$, $horizontalGridlines$$inline_785_resizer$$1_viewportBottom$$inline_743$$ = 
      this.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_databody$), $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_761_verticalGridlines$$inline_786_viewportLeft$$inline_744$$ = this.$m_currentScrollLeft$, $avgHeight$$inline_754_i$$inline_789_jk$$inline_759_viewportRight$$inline_745$$ = this.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_databody$), !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && (this.$m_dataSource$.getCount("row") == 
      $JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$ && $columnCount$$1_requestCellRanges$$inline_727_requestColumnStart$$inline_729_rowEnd$$inline_735_rowEndPixel$$inline_739$$ < $horizontalGridlines$$inline_785_resizer$$1_viewportBottom$$inline_743$$) && ($columnCount$$1_requestCellRanges$$inline_727_requestColumnStart$$inline_729_rowEnd$$inline_735_rowEndPixel$$inline_739$$ = $horizontalGridlines$$inline_785_resizer$$1_viewportBottom$$inline_743$$), 
      !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && (this.$m_dataSource$.getCount("column") == $columnCount$$inline_747_responseColumnStart$$inline_726_rowCount$$4$$ && $columnEndPixel$$inline_741_columnRange$$3_columnStart$$inline_736_inner$$ < $avgHeight$$inline_754_i$$inline_789_jk$$inline_759_viewportRight$$inline_745$$) && ($columnEndPixel$$inline_741_columnRange$$3_columnStart$$inline_736_inner$$ = $avgHeight$$inline_754_i$$inline_789_jk$$inline_759_viewportRight$$inline_745$$), 
      $JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$ = $databodyContent$$1_scroller$$8_viewportTop$$inline_742$$ >= $columnStart$$1_requestRowStart$$inline_728_rowRange$$3_rowStart$$inline_734_rowStartPixel$$inline_738$$ && $horizontalGridlines$$inline_785_resizer$$1_viewportBottom$$inline_743$$ <= $columnCount$$1_requestCellRanges$$inline_727_requestColumnStart$$inline_729_rowEnd$$inline_735_rowEndPixel$$inline_739$$ && $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_761_verticalGridlines$$inline_786_viewportLeft$$inline_744$$ >= 
      $columnRangeNeedsUpdate_columnStartPixel$$inline_740$$ && $avgHeight$$inline_754_i$$inline_789_jk$$inline_759_viewportRight$$inline_745$$ <= $columnEndPixel$$inline_741_columnRange$$3_columnStart$$inline_736_inner$$);
      $JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$ = !$JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$
    }
    if($JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$) {
      this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$;
      this.$m_captureScrolling$ || (0,D.$JSCompiler_StaticMethods_handleLongScroll$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
      return
    }
  }
  (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)(this);
  $columnStart$$1_requestRowStart$$inline_728_rowRange$$3_rowStart$$inline_734_rowStartPixel$$inline_738$$ = $cellRange$$3_databody$$5$$[0];
  $JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$ = $columnStart$$1_requestRowStart$$inline_728_rowRange$$3_rowStart$$inline_734_rowStartPixel$$inline_738$$.start;
  $columnCount$$inline_747_responseColumnStart$$inline_726_rowCount$$4$$ = $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$.getCount("row");
  $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_761_verticalGridlines$$inline_786_viewportLeft$$inline_744$$ = 0 < $columnCount$$inline_747_responseColumnStart$$inline_726_rowCount$$4$$ && ($JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$ >= this.$m_endRow$ || $JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$ + $columnCount$$inline_747_responseColumnStart$$inline_726_rowCount$$4$$ <= 
  this.$m_startRow$);
  if(0 == $columnCount$$inline_747_responseColumnStart$$inline_726_rowCount$$4$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && 0 < $columnStart$$1_requestRowStart$$inline_728_rowRange$$3_rowStart$$inline_734_rowStartPixel$$inline_738$$.count || $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_761_verticalGridlines$$inline_786_viewportLeft$$inline_744$$ && (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, 
  "row") && this.$m_endRow$ + $columnCount$$inline_747_responseColumnStart$$inline_726_rowCount$$4$$ >= $scrollerWidth$$inline_793_summaryExpanded$$inline_800_totalRowCount$$ || $columnCount$$inline_747_responseColumnStart$$inline_726_rowCount$$4$$ < $columnStart$$1_requestRowStart$$inline_728_rowRange$$3_rowStart$$inline_734_rowStartPixel$$inline_738$$.count) {
    this.$m_stopRowFetch$ = D.$JSCompiler_alias_TRUE$$
  }
  $columnEndPixel$$inline_741_columnRange$$3_columnStart$$inline_736_inner$$ = $cellRange$$3_databody$$5$$[1];
  $columnStart$$1_requestRowStart$$inline_728_rowRange$$3_rowStart$$inline_734_rowStartPixel$$inline_738$$ = $columnEndPixel$$inline_741_columnRange$$3_columnStart$$inline_736_inner$$.start;
  $columnCount$$1_requestCellRanges$$inline_727_requestColumnStart$$inline_729_rowEnd$$inline_735_rowEndPixel$$inline_739$$ = $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$.getCount("column");
  $columnRangeNeedsUpdate_columnStartPixel$$inline_740$$ = 0 < $columnCount$$1_requestCellRanges$$inline_727_requestColumnStart$$inline_729_rowEnd$$inline_735_rowEndPixel$$inline_739$$ && ($columnStart$$1_requestRowStart$$inline_728_rowRange$$3_rowStart$$inline_734_rowStartPixel$$inline_738$$ == this.$m_endCol$ || $columnStart$$1_requestRowStart$$inline_728_rowRange$$3_rowStart$$inline_734_rowStartPixel$$inline_738$$ + $columnCount$$1_requestCellRanges$$inline_727_requestColumnStart$$inline_729_rowEnd$$inline_735_rowEndPixel$$inline_739$$ == 
  this.$m_startCol$);
  if(0 == $columnCount$$1_requestCellRanges$$inline_727_requestColumnStart$$inline_729_rowEnd$$inline_735_rowEndPixel$$inline_739$$ && (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && 0 < $columnEndPixel$$inline_741_columnRange$$3_columnStart$$inline_736_inner$$.count || $columnRangeNeedsUpdate_columnStartPixel$$inline_740$$ && (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && this.$m_endCol$ + 
  $columnCount$$1_requestCellRanges$$inline_727_requestColumnStart$$inline_729_rowEnd$$inline_735_rowEndPixel$$inline_739$$ >= $scrollerContentHeight$$inline_795_totalColumnCount$$ || $columnCount$$1_requestCellRanges$$inline_727_requestColumnStart$$inline_729_rowEnd$$inline_735_rowEndPixel$$inline_739$$ < $columnEndPixel$$inline_741_columnRange$$3_columnStart$$inline_736_inner$$.count) {
    this.$m_stopColumnFetch$ = D.$JSCompiler_alias_TRUE$$
  }
  $cellRange$$3_databody$$5$$ = this.$m_databody$;
  $cellRange$$3_databody$$5$$ == D.$JSCompiler_alias_NULL$$ && ($cellRange$$3_databody$$5$$ = $columnEndPixel$$inline_741_columnRange$$3_columnStart$$inline_736_inner$$.databody);
  $databodyContent$$1_scroller$$8_viewportTop$$inline_742$$ = this.$m_scroller$;
  $databodyContent$$1_scroller$$8_viewportTop$$inline_742$$ == D.$JSCompiler_alias_NULL$$ && ($databodyContent$$1_scroller$$8_viewportTop$$inline_742$$ = $columnEndPixel$$inline_741_columnRange$$3_columnStart$$inline_736_inner$$.scroller);
  $databodyContent$$1_scroller$$8_viewportTop$$inline_742$$.hasChildNodes() ? $columnEndPixel$$inline_741_columnRange$$3_columnStart$$inline_736_inner$$ = $databodyContent$$1_scroller$$8_viewportTop$$inline_742$$.firstChild : ($columnEndPixel$$inline_741_columnRange$$3_columnStart$$inline_736_inner$$ = window.document.createElement("div"), $databodyContent$$1_scroller$$8_viewportTop$$inline_742$$.appendChild($columnEndPixel$$inline_741_columnRange$$3_columnStart$$inline_736_inner$$));
  $cellRange$$3_databody$$5$$.hasChildNodes() ? ($databodyContent$$1_scroller$$8_viewportTop$$inline_742$$ = $cellRange$$3_databody$$5$$.firstChild, $horizontalGridlines$$inline_785_resizer$$1_viewportBottom$$inline_743$$ = $databodyContent$$1_scroller$$8_viewportTop$$inline_742$$.firstChild) : ($databodyContent$$1_scroller$$8_viewportTop$$inline_742$$ = window.document.createElement("div"), $databodyContent$$1_scroller$$8_viewportTop$$inline_742$$.className = (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)(this.$m_utils$) ? 
  this.getMappedStyle("scroller-mobile") : this.getMappedStyle("scroller"), $horizontalGridlines$$inline_785_resizer$$1_viewportBottom$$inline_743$$ = window.document.createElement("div"), $horizontalGridlines$$inline_785_resizer$$1_viewportBottom$$inline_743$$.style.display = "none", (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($horizontalGridlines$$inline_785_resizer$$1_viewportBottom$$inline_743$$, 1), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($horizontalGridlines$$inline_785_resizer$$1_viewportBottom$$inline_743$$, 
  0), $databodyContent$$1_scroller$$8_viewportTop$$inline_742$$.appendChild($horizontalGridlines$$inline_785_resizer$$1_viewportBottom$$inline_743$$));
  if($isAppend$$1_rowRangeNeedsUpdate_tops$$inline_761_verticalGridlines$$inline_786_viewportLeft$$inline_744$$ || $JSCompiler_inline_result$$50_rowInsert$$2_scrollerHeight$$inline_792_summary$$inline_799$$) {
    if(($isAppend$$1_rowRangeNeedsUpdate_tops$$inline_761_verticalGridlines$$inline_786_viewportLeft$$inline_744$$ = !$JSCompiler_inline_result$$50_rowInsert$$2_scrollerHeight$$inline_792_summary$$inline_799$$ && $JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$ >= this.$m_startRow$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$) ? $addResult_avgHeight_scrollerContent$$inline_794_scrollerContentWidth$$inline_796_top$$3$$ = 
    this.$m_endRowPixel$ : $JSCompiler_inline_result$$50_rowInsert$$2_scrollerHeight$$inline_792_summary$$inline_799$$ ? ($columnBandingInterval$$inline_784_prev$$1_referenceRow$$1$$ = $databodyContent$$1_scroller$$8_viewportTop$$inline_742$$.childNodes[$JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$ - this.$m_startRow$ + 1], $addResult_avgHeight_scrollerContent$$inline_794_scrollerContentWidth$$inline_796_top$$3$$ = (0,window.parseInt)($columnBandingInterval$$inline_784_prev$$1_referenceRow$$1$$.style.top)) : 
    $addResult_avgHeight_scrollerContent$$inline_794_scrollerContentWidth$$inline_796_top$$3$$ = this.$m_startRowPixel$, $avgWidth$$inline_788_fragment$$1_row$$inline_787$$ = window.document.createDocumentFragment(), $addResult_avgHeight_scrollerContent$$inline_794_scrollerContentWidth$$inline_796_top$$3$$ = (0,D.$JSCompiler_StaticMethods__addRows$$)(this, $avgWidth$$inline_788_fragment$$1_row$$inline_787$$, $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_761_verticalGridlines$$inline_786_viewportLeft$$inline_744$$ || 
    $JSCompiler_inline_result$$50_rowInsert$$2_scrollerHeight$$inline_792_summary$$inline_799$$, $addResult_avgHeight_scrollerContent$$inline_794_scrollerContentWidth$$inline_796_top$$3$$, $JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$, $columnCount$$inline_747_responseColumnStart$$inline_726_rowCount$$4$$, $columnStart$$1_requestRowStart$$inline_728_rowRange$$3_rowStart$$inline_734_rowStartPixel$$inline_738$$, $columnRangeNeedsUpdate_columnStartPixel$$inline_740$$, 
    $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ = $addResult_avgHeight_scrollerContent$$inline_794_scrollerContentWidth$$inline_796_top$$3$$.totalRowHeight, $avgWidth$$1_renderer$$inline_783$$ = $addResult_avgHeight_scrollerContent$$inline_794_scrollerContentWidth$$inline_796_top$$3$$.avgWidth, $addResult_avgHeight_scrollerContent$$inline_794_scrollerContentWidth$$inline_796_top$$3$$ = 
    $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ / $columnCount$$inline_747_responseColumnStart$$inline_726_rowCount$$4$$, $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_761_verticalGridlines$$inline_786_viewportLeft$$inline_744$$) {
      $databodyContent$$1_scroller$$8_viewportTop$$inline_742$$.appendChild($avgWidth$$inline_788_fragment$$1_row$$inline_787$$);
      if(0 != this.$m_endRow$ && 0 != $columnCount$$inline_747_responseColumnStart$$inline_726_rowCount$$4$$ && ($columnBandingInterval$$inline_784_prev$$1_referenceRow$$1$$ = $databodyContent$$1_scroller$$8_viewportTop$$inline_742$$.childNodes[this.$m_endRow$], $columnBandingInterval$$inline_784_prev$$1_referenceRow$$1$$ != D.$JSCompiler_alias_NULL$$)) {
        $columnBandingInterval$$inline_784_prev$$1_referenceRow$$1$$ = $columnBandingInterval$$inline_784_prev$$1_referenceRow$$1$$.childNodes;
        for($animate_i$$15_row$$inline_771_rows$$1$$ = 0;$animate_i$$15_row$$inline_771_rows$$1$$ < $columnBandingInterval$$inline_784_prev$$1_referenceRow$$1$$.length;$animate_i$$15_row$$inline_771_rows$$1$$ += 1) {
          $columnBandingInterval$$inline_784_prev$$1_referenceRow$$1$$[$animate_i$$15_row$$inline_771_rows$$1$$].style.borderBottomStyle = ""
        }
      }
      this.$m_endRow$ += $columnCount$$inline_747_responseColumnStart$$inline_726_rowCount$$4$$;
      this.$m_endRowPixel$ += $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$;
      $cellRange$$3_databody$$5$$.hasChildNodes() || ($cellRange$$3_databody$$5$$.appendChild($databodyContent$$1_scroller$$8_viewportTop$$inline_742$$), this.$isDraggable$() && ($adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ = window.document.createElement("div"), window.bottomHotspot = window.document.createElement("div"), $cellRange$$3_databody$$5$$.appendChild($adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), $cellRange$$3_databody$$5$$.appendChild(window.bottomHotspot)))
    }else {
      if($JSCompiler_inline_result$$50_rowInsert$$2_scrollerHeight$$inline_792_summary$$inline_799$$) {
        if($animate_i$$15_row$$inline_771_rows$$1$$) {
          var $databodyContent$$inline_750$$ = $databodyContent$$1_scroller$$8_viewportTop$$inline_742$$, $referenceRow$$inline_752$$ = $columnBandingInterval$$inline_784_prev$$1_referenceRow$$1$$;
          $avgHeight$$inline_754_i$$inline_789_jk$$inline_759_viewportRight$$inline_745$$ = $addResult_avgHeight_scrollerContent$$inline_794_scrollerContentWidth$$inline_796_top$$3$$;
          var $i$$inline_757$$, $j$$inline_758$$, $shift$$inline_760$$, $beforeCount$$inline_762$$, $startRowIdx$$inline_763$$, $transition_duration$$inline_765$$, $z_index$$inline_766$$, $transition_timing$$inline_767$$, $transform$$inline_768$$;
          $startRowIdx$$inline_763$$ = $JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$ - this.$m_startRow$;
          $beforeCount$$inline_762$$ = $startRowIdx$$inline_763$$ + $avgWidth$$inline_788_fragment$$1_row$$inline_787$$.childNodes.length;
          $shift$$inline_760$$ = $avgHeight$$inline_754_i$$inline_789_jk$$inline_759_viewportRight$$inline_745$$ * $avgWidth$$inline_788_fragment$$1_row$$inline_787$$.childNodes.length;
          $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_761_verticalGridlines$$inline_786_viewportLeft$$inline_744$$ = [];
          (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$inline_750$$.childNodes[$startRowIdx$$inline_763$$], (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 1E3);
          for($j$$inline_758$$ = 0;$j$$inline_758$$ < $avgWidth$$inline_788_fragment$$1_row$$inline_787$$.childNodes.length;$j$$inline_758$$++) {
            $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_761_verticalGridlines$$inline_786_viewportLeft$$inline_744$$.push($avgWidth$$inline_788_fragment$$1_row$$inline_787$$.childNodes[$j$$inline_758$$].style.top.split("px")[0] - ($startRowIdx$$inline_763$$ - 1) * $avgHeight$$inline_754_i$$inline_789_jk$$inline_759_viewportRight$$inline_745$$)
          }
          for($avgHeight$$inline_754_i$$inline_789_jk$$inline_759_viewportRight$$inline_745$$ = 0;$avgHeight$$inline_754_i$$inline_789_jk$$inline_759_viewportRight$$inline_745$$ < $avgWidth$$inline_788_fragment$$1_row$$inline_787$$.childNodes.length;$avgHeight$$inline_754_i$$inline_789_jk$$inline_759_viewportRight$$inline_745$$++) {
            (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($avgWidth$$inline_788_fragment$$1_row$$inline_787$$.childNodes[$avgHeight$$inline_754_i$$inline_789_jk$$inline_759_viewportRight$$inline_745$$], 0, 0, "linear", "-" + $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_761_verticalGridlines$$inline_786_viewportLeft$$inline_744$$[$avgHeight$$inline_754_i$$inline_789_jk$$inline_759_viewportRight$$inline_745$$])
          }
          $databodyContent$$inline_750$$.insertBefore($avgWidth$$inline_788_fragment$$1_row$$inline_787$$, $referenceRow$$inline_752$$);
          (0,window.setTimeout)(function() {
            for($j$$inline_758$$ = $startRowIdx$$inline_763$$;$j$$inline_758$$ <= $beforeCount$$inline_762$$;$j$$inline_758$$++) {
              (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($databodyContent$$inline_750$$.childNodes[$j$$inline_758$$], "500ms", 0, "ease-out", 0)
            }
            $databodyContent$$inline_750$$.childNodes[$beforeCount$$inline_762$$].addEventListener("transitionend", function() {
              $transition_duration$$inline_765$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-duration");
              $z_index$$inline_766$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index");
              $transition_timing$$inline_767$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-timing-function");
              $transform$$inline_768$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform");
              for($i$$inline_757$$ = 1;$i$$inline_757$$ < $databodyContent$$inline_750$$.childElementCount;$i$$inline_757$$++) {
                $databodyContent$$inline_750$$.children[$i$$inline_757$$].style[(0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform")] && ((0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$inline_750$$.childNodes[$startRowIdx$$inline_763$$], $z_index$$inline_766$$, 0, "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$inline_750$$.childNodes[$i$$inline_757$$], $transition_duration$$inline_765$$, 0, "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$inline_750$$.childNodes[$i$$inline_757$$], 
                $transition_timing$$inline_767$$, "linear", "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$inline_750$$.childNodes[$i$$inline_757$$], $transform$$inline_768$$, 0, "remove"), this.removeEventListener("transitionend", arguments.callee, D.$JSCompiler_alias_FALSE$$))
              }
              (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($referenceRow$$inline_752$$, $shift$$inline_760$$)
            }, D.$JSCompiler_alias_FALSE$$)
          }, 0)
        }else {
          $databodyContent$$1_scroller$$8_viewportTop$$inline_742$$.insertBefore($avgWidth$$inline_788_fragment$$1_row$$inline_787$$, $columnBandingInterval$$inline_784_prev$$1_referenceRow$$1$$)
        }
        $JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$ < this.$m_startRow$ && (this.$m_startRow$ = $JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$, this.$m_startRowPixel$ = window.Math.max(0, this.$m_startRowPixel$ - $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($horizontalGridlines$$inline_785_resizer$$1_viewportBottom$$inline_743$$, 
        window.Math.max(0, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($horizontalGridlines$$inline_785_resizer$$1_viewportBottom$$inline_743$$) - $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)));
        this.$m_endRow$ += $columnCount$$inline_747_responseColumnStart$$inline_726_rowCount$$4$$;
        this.$m_endRowPixel$ += $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$;
        if($animate_i$$15_row$$inline_771_rows$$1$$) {
          -1 != $scrollerWidth$$inline_793_summaryExpanded$$inline_800_totalRowCount$$ && !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) ? (0,D.$JSCompiler_StaticMethods_setElementHeight$$)(this.$m_databody$, $scrollerWidth$$inline_793_summaryExpanded$$inline_800_totalRowCount$$ * $addResult_avgHeight_scrollerContent$$inline_794_scrollerContentWidth$$inline_796_top$$3$$) : (0,D.$JSCompiler_StaticMethods_setElementHeight$$)(this.$m_databody$, this.$m_endRowPixel$);
          for($animate_i$$15_row$$inline_771_rows$$1$$ = $columnBandingInterval$$inline_784_prev$$1_referenceRow$$1$$;$animate_i$$15_row$$inline_771_rows$$1$$;) {
            (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($animate_i$$15_row$$inline_771_rows$$1$$, "530ms", "0ms", "ease-out", $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), $animate_i$$15_row$$inline_771_rows$$1$$ = $animate_i$$15_row$$inline_771_rows$$1$$.nextSibling
          }
        }else {
          (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($columnBandingInterval$$inline_784_prev$$1_referenceRow$$1$$, $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)
        }
      }else {
        $databodyContent$$1_scroller$$8_viewportTop$$inline_742$$.insertBefore($avgWidth$$inline_788_fragment$$1_row$$inline_787$$, $horizontalGridlines$$inline_785_resizer$$1_viewportBottom$$inline_743$$.nextSibling), this.$m_startRow$ -= $columnCount$$inline_747_responseColumnStart$$inline_726_rowCount$$4$$, this.$m_startRowPixel$ = window.Math.max(0, this.$m_startRowPixel$ - $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($horizontalGridlines$$inline_785_resizer$$1_viewportBottom$$inline_743$$, 
        window.Math.max(0, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($horizontalGridlines$$inline_785_resizer$$1_viewportBottom$$inline_743$$) - $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$))
      }
    }
  }else {
    if($columnRangeNeedsUpdate_columnStartPixel$$inline_740$$ && ($animate_i$$15_row$$inline_771_rows$$1$$ = $databodyContent$$1_scroller$$8_viewportTop$$inline_742$$.childNodes, $columnCount$$inline_747_responseColumnStart$$inline_726_rowCount$$4$$ == $animate_i$$15_row$$inline_771_rows$$1$$.length - 1)) {
      $avgWidth$$1_renderer$$inline_783$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "cell");
      $columnBandingInterval$$inline_784_prev$$1_referenceRow$$1$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)(this.$m_options$);
      $horizontalGridlines$$inline_785_resizer$$1_viewportBottom$$inline_743$$ = (0,D.$JSCompiler_StaticMethods_getHorizontalGridlines$$)(this.$m_options$);
      $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_761_verticalGridlines$$inline_786_viewportLeft$$inline_744$$ = (0,D.$JSCompiler_StaticMethods_getVerticalGridlines$$)(this.$m_options$);
      for($avgHeight$$inline_754_i$$inline_789_jk$$inline_759_viewportRight$$inline_745$$ = 0;$avgHeight$$inline_754_i$$inline_789_jk$$inline_759_viewportRight$$inline_745$$ < $columnCount$$inline_747_responseColumnStart$$inline_726_rowCount$$4$$;$avgHeight$$inline_754_i$$inline_789_jk$$inline_759_viewportRight$$inline_745$$ += 1) {
        $avgWidth$$inline_788_fragment$$1_row$$inline_787$$ = $animate_i$$15_row$$inline_771_rows$$1$$[$avgHeight$$inline_754_i$$inline_789_jk$$inline_759_viewportRight$$inline_745$$ + 1], $avgWidth$$inline_788_fragment$$1_row$$inline_787$$ = (0,D.$JSCompiler_StaticMethods_addCellsToRow$$)(this, $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$, $avgWidth$$inline_788_fragment$$1_row$$inline_787$$, $JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$ + 
        $avgHeight$$inline_754_i$$inline_789_jk$$inline_759_viewportRight$$inline_745$$, $avgWidth$$1_renderer$$inline_783$$, D.$JSCompiler_alias_FALSE$$, $columnStart$$1_requestRowStart$$inline_728_rowRange$$3_rowStart$$inline_734_rowStartPixel$$inline_738$$, $avgHeight$$inline_754_i$$inline_789_jk$$inline_759_viewportRight$$inline_745$$ == $columnCount$$inline_747_responseColumnStart$$inline_726_rowCount$$4$$ - 1, $columnBandingInterval$$inline_784_prev$$1_referenceRow$$1$$, $horizontalGridlines$$inline_785_resizer$$1_viewportBottom$$inline_743$$, 
        $isAppend$$1_rowRangeNeedsUpdate_tops$$inline_761_verticalGridlines$$inline_786_viewportLeft$$inline_744$$)
      }
      $avgWidth$$1_renderer$$inline_783$$ = $avgWidth$$inline_788_fragment$$1_row$$inline_787$$
    }
  }
  $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ = -1 != $scrollerContentHeight$$inline_795_totalColumnCount$$ && !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) ? $scrollerContentHeight$$inline_795_totalColumnCount$$ * $avgWidth$$1_renderer$$inline_783$$ : this.$m_endColPixel$;
  if($avgWidth$$1_renderer$$inline_783$$ != D.$JSCompiler_alias_VOID$$ && (0 == this.$m_avgColWidth$ || this.$m_avgColWidth$ == D.$JSCompiler_alias_VOID$$)) {
    this.$m_avgColWidth$ = $avgWidth$$1_renderer$$inline_783$$, (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyContent$$1_scroller$$8_viewportTop$$inline_742$$, $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnEndPixel$$inline_741_columnRange$$3_columnStart$$inline_736_inner$$, $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)
  }else {
    if((-1 == $scrollerContentHeight$$inline_795_totalColumnCount$$ || (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this)) && $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ > (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databodyContent$$1_scroller$$8_viewportTop$$inline_742$$)) {
      (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyContent$$1_scroller$$8_viewportTop$$inline_742$$, $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($columnEndPixel$$inline_741_columnRange$$3_columnStart$$inline_736_inner$$, $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)
    }
  }
  $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ = -1 != $scrollerWidth$$inline_793_summaryExpanded$$inline_800_totalRowCount$$ && !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) ? $scrollerWidth$$inline_793_summaryExpanded$$inline_800_totalRowCount$$ * $addResult_avgHeight_scrollerContent$$inline_794_scrollerContentWidth$$inline_796_top$$3$$ : this.$m_endRowPixel$;
  if($addResult_avgHeight_scrollerContent$$inline_794_scrollerContentWidth$$inline_796_top$$3$$ != D.$JSCompiler_alias_VOID$$ && (0 == this.$m_avgRowHeight$ || this.$m_avgRowHeight$ == D.$JSCompiler_alias_VOID$$)) {
    this.$m_avgRowHeight$ = $addResult_avgHeight_scrollerContent$$inline_794_scrollerContentWidth$$inline_796_top$$3$$, (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$1_scroller$$8_viewportTop$$inline_742$$, $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnEndPixel$$inline_741_columnRange$$3_columnStart$$inline_736_inner$$, $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)
  }else {
    if((-1 == $scrollerWidth$$inline_793_summaryExpanded$$inline_800_totalRowCount$$ || (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this)) && $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$ > (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databodyContent$$1_scroller$$8_viewportTop$$inline_742$$) || $scrollerWidth$$inline_793_summaryExpanded$$inline_800_totalRowCount$$ * $addResult_avgHeight_scrollerContent$$inline_794_scrollerContentWidth$$inline_796_top$$3$$ != 
    (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databodyContent$$1_scroller$$8_viewportTop$$inline_742$$)) {
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$1_scroller$$8_viewportTop$$inline_742$$, $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnEndPixel$$inline_741_columnRange$$3_columnStart$$inline_736_inner$$, $adjustment$$inline_772_cellSet$$1_topHotspot_totalColumnWidth_totalRowHeight$$1$$)
    }
  }
  $columnRangeNeedsUpdate_columnStartPixel$$inline_740$$ && ($columnStart$$1_requestRowStart$$inline_728_rowRange$$3_rowStart$$inline_734_rowStartPixel$$inline_738$$ < this.$m_startCol$ ? this.$m_startCol$ -= $columnCount$$1_requestCellRanges$$inline_727_requestColumnStart$$inline_729_rowEnd$$inline_735_rowEndPixel$$inline_739$$ : this.$m_endCol$ += $columnCount$$1_requestCellRanges$$inline_727_requestColumnStart$$inline_729_rowEnd$$inline_735_rowEndPixel$$inline_739$$);
  this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$;
  this.$m_initialized$ && (0,D.$JSCompiler_StaticMethods__syncScroller$$)(this);
  (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && ((0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this), this.$m_initialized$ ? (this.$m_scroller$ == D.$JSCompiler_alias_NULL$$ ? $JSCompiler_inline_result$$50_rowInsert$$2_scrollerHeight$$inline_792_summary$$inline_799$$ = D.$JSCompiler_alias_FALSE$$ : ($JSCompiler_inline_result$$50_rowInsert$$2_scrollerHeight$$inline_792_summary$$inline_799$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_scroller$), $scrollerWidth$$inline_793_summaryExpanded$$inline_800_totalRowCount$$ = 
  (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_scroller$), $addResult_avgHeight_scrollerContent$$inline_794_scrollerContentWidth$$inline_796_top$$3$$ = this.$m_scroller$.firstChild, $scrollerContentHeight$$inline_795_totalColumnCount$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($addResult_avgHeight_scrollerContent$$inline_794_scrollerContentWidth$$inline_796_top$$3$$), $addResult_avgHeight_scrollerContent$$inline_794_scrollerContentWidth$$inline_796_top$$3$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($addResult_avgHeight_scrollerContent$$inline_794_scrollerContentWidth$$inline_796_top$$3$$), 
  $JSCompiler_inline_result$$50_rowInsert$$2_scrollerHeight$$inline_792_summary$$inline_799$$ = this.$m_endRowPixel$ > $JSCompiler_inline_result$$50_rowInsert$$2_scrollerHeight$$inline_792_summary$$inline_799$$ && $scrollerWidth$$inline_793_summaryExpanded$$inline_800_totalRowCount$$ == $addResult_avgHeight_scrollerContent$$inline_794_scrollerContentWidth$$inline_796_top$$3$$ || this.$m_endColPixel$ > $scrollerWidth$$inline_793_summaryExpanded$$inline_800_totalRowCount$$ && $JSCompiler_inline_result$$50_rowInsert$$2_scrollerHeight$$inline_792_summary$$inline_799$$ == 
  $scrollerContentHeight$$inline_795_totalColumnCount$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$), $JSCompiler_inline_result$$50_rowInsert$$2_scrollerHeight$$inline_792_summary$$inline_799$$ && (0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this)) : ((0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this), $JSCompiler_inline_result$$50_rowInsert$$2_scrollerHeight$$inline_792_summary$$inline_799$$ || (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this)), this.$m_scrollIndexAfterFetch$ != 
  D.$JSCompiler_alias_NULL$$ ? ((0,D.$JSCompiler_StaticMethods_scrollToIndex$$)(this, this.$m_scrollIndexAfterFetch$), this.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$ ? "row" === this.$m_activeHeader$.axis ? (0,D.$JSCompiler_StaticMethods__focusRowHeader$$)(this, this.$m_scrollIndexAfterFetch$.row) : "column" === this.$m_activeHeader$.axis && (0,D.$JSCompiler_StaticMethods__focusColumnHeader$$)(this, this.$m_scrollIndexAfterFetch$.column) : this.$m_scrollIndexAfterFetch$ == this.$m_active$ ? 
  this.$highlightActive$() : (0,D.$JSCompiler_StaticMethods_highlightIndex$$)(this, this.$m_scrollIndexAfterFetch$), this.$m_scrollIndexAfterFetch$ = D.$JSCompiler_alias_NULL$$) : this.$highlightActive$(), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (this.$m_databody$ == D.$JSCompiler_alias_NULL$$ && (this.$m_databody$ = $cellRange$$3_databody$$5$$), (0,D.$JSCompiler_StaticMethods_applySelection$$)(this, $JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$, 
  $JSCompiler_inline_result$$211_JSCompiler_temp$$210_responseRowStart$$inline_725_rowCount$$inline_746_rowStart$$2$$ + $columnCount$$inline_747_responseColumnStart$$inline_726_rowCount$$4$$)), $JSCompiler_inline_result$$50_rowInsert$$2_scrollerHeight$$inline_792_summary$$inline_799$$ = this.$m_resources$.getTranslatedText("accessibleSummaryExact", {rownum:this.$m_endRow$, colnum:this.$m_endCol$}), this.$m_dataSource$.getExpandedKeys && ($scrollerWidth$$inline_793_summaryExpanded$$inline_800_totalRowCount$$ = 
  this.$m_resources$.getTranslatedText("accessibleSummaryExpanded", {num:this.$m_dataSource$.getExpandedKeys().length}), $JSCompiler_inline_result$$50_rowInsert$$2_scrollerHeight$$inline_792_summary$$inline_799$$ = $JSCompiler_inline_result$$50_rowInsert$$2_scrollerHeight$$inline_792_summary$$inline_799$$ + ". " + $scrollerWidth$$inline_793_summaryExpanded$$inline_800_totalRowCount$$), this.$m_accSummary$.innerHTML = $JSCompiler_inline_result$$50_rowInsert$$2_scrollerHeight$$inline_792_summary$$inline_799$$)
};
D.$JSCompiler_StaticMethods__addRows$$ = function $$JSCompiler_StaticMethods__addRows$$$($JSCompiler_StaticMethods__addRows$self$$, $fragment$$3$$, $isAppendOrInsert$$, $top$$4$$, $rowStart$$5$$, $rowCount$$6$$, $columnStart$$3$$, $columnRangeNeedsUpdate$$1$$, $cellSet$$3$$) {
  var $renderer$$3$$, $columnBandingInterval$$1$$, $rowBandingInterval$$, $horizontalGridlines$$3$$, $verticalGridlines$$3$$, $row$$4$$, $avgWidth$$3$$, $totalRowHeight$$2$$, $height$$16_index$$52$$;
  $renderer$$3$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$, "cell");
  $columnBandingInterval$$1$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $rowBandingInterval$$ = (0,D.$JSCompiler_StaticMethods_getRowBandingInterval$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $horizontalGridlines$$3$$ = (0,D.$JSCompiler_StaticMethods_getHorizontalGridlines$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $verticalGridlines$$3$$ = (0,D.$JSCompiler_StaticMethods_getVerticalGridlines$$)($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  for(window.i = $totalRowHeight$$2$$ = 0;window.i < $rowCount$$6$$;window.i += 1) {
    $height$$16_index$$52$$ = $isAppendOrInsert$$ ? $rowStart$$5$$ + window.i : $rowStart$$5$$ + ($rowCount$$6$$ - 1 - window.i), $row$$4$$ = window.document.createElement("div"), $row$$4$$.className = 1 === window.Math.floor($height$$16_index$$52$$ / $rowBandingInterval$$) % 2 ? $JSCompiler_StaticMethods__addRows$self$$.getMappedStyle("row") + " " + $JSCompiler_StaticMethods__addRows$self$$.getMappedStyle("banded") : $JSCompiler_StaticMethods__addRows$self$$.getMappedStyle("row"), $avgWidth$$3$$ = 
    (0,D.$JSCompiler_StaticMethods_addCellsToRow$$)($JSCompiler_StaticMethods__addRows$self$$, $cellSet$$3$$, $row$$4$$, $height$$16_index$$52$$, $renderer$$3$$, D.$JSCompiler_alias_TRUE$$, $columnStart$$3$$, window.i == $rowCount$$6$$ - 1 && $columnRangeNeedsUpdate$$1$$, $columnBandingInterval$$1$$, $horizontalGridlines$$3$$, $verticalGridlines$$3$$, $top$$4$$ + (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)($JSCompiler_StaticMethods__addRows$self$$)), $height$$16_index$$52$$ = (0,D.$JSCompiler_StaticMethods_getRowHeight$$)($JSCompiler_StaticMethods__addRows$self$$, 
    $row$$4$$, $height$$16_index$$52$$, $JSCompiler_StaticMethods__addRows$self$$.$_getKey$($row$$4$$)), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($row$$4$$, $height$$16_index$$52$$), $totalRowHeight$$2$$ += $height$$16_index$$52$$, $isAppendOrInsert$$ ? ($row$$4$$.style.top = $top$$4$$ + "px", $top$$4$$ += $height$$16_index$$52$$, $fragment$$3$$.appendChild($row$$4$$)) : ($top$$4$$ -= $height$$16_index$$52$$, $row$$4$$.style.top = $top$$4$$ + "px", $fragment$$3$$.insertBefore($row$$4$$, 
    $fragment$$3$$.firstChild))
  }
  return{avgWidth:$avgWidth$$3$$, totalRowHeight:$totalRowHeight$$2$$, top:$top$$4$$}
};
D.$JSCompiler_StaticMethods_pushRowsDown$$ = function $$JSCompiler_StaticMethods_pushRowsDown$$$($row$$5$$, $adjustment$$1$$) {
  for(;$row$$5$$;) {
    $row$$5$$.style.top = (0,window.parseInt)($row$$5$$.style.top) + $adjustment$$1$$ + "px", $row$$5$$ = $row$$5$$.nextSibling
  }
};
D.$DvtDataGrid$$.prototype.$handleCellsFetchError$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_getRowHeaderWidth$$ = function $$JSCompiler_StaticMethods_getRowHeaderWidth$$$($JSCompiler_StaticMethods_getRowHeaderWidth$self$$) {
  return 0 === $JSCompiler_StaticMethods_getRowHeaderWidth$self$$.$m_endRowHeader$ ? 0 : $JSCompiler_StaticMethods_getRowHeaderWidth$self$$.$m_rowHeaderWidth$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getRowHeaderWidth$self$$.$m_rowHeaderWidth$ : 50
};
D.$JSCompiler_StaticMethods_getRowBottom$$ = function $$JSCompiler_StaticMethods_getRowBottom$$$($JSCompiler_StaticMethods_getRowBottom$self_colHeaderHeight$$3$$, $height$$17_row$$7$$, $bottom$$1_top$$7$$) {
  $JSCompiler_StaticMethods_getRowBottom$self_colHeaderHeight$$3$$ = 0 === $JSCompiler_StaticMethods_getRowBottom$self_colHeaderHeight$$3$$.$m_endColHeader$ ? 0 : $JSCompiler_StaticMethods_getRowBottom$self_colHeaderHeight$$3$$.$m_colHeaderHeight$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getRowBottom$self_colHeaderHeight$$3$$.$m_colHeaderHeight$ : (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)($JSCompiler_StaticMethods_getRowBottom$self_colHeaderHeight$$3$$);
  if($bottom$$1_top$$7$$ != D.$JSCompiler_alias_NULL$$) {
    return $JSCompiler_StaticMethods_getRowBottom$self_colHeaderHeight$$3$$ + $bottom$$1_top$$7$$
  }
  $bottom$$1_top$$7$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($height$$17_row$$7$$, "top");
  $height$$17_row$$7$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($height$$17_row$$7$$);
  return!(0,window.isNaN)($bottom$$1_top$$7$$) && !(0,window.isNaN)($height$$17_row$$7$$) ? $JSCompiler_StaticMethods_getRowBottom$self_colHeaderHeight$$3$$ + $bottom$$1_top$$7$$ + $height$$17_row$$7$$ : $JSCompiler_StaticMethods_getRowBottom$self_colHeaderHeight$$3$$
};
D.$JSCompiler_StaticMethods_addCellsToRow$$ = function $$JSCompiler_StaticMethods_addCellsToRow$$$($JSCompiler_StaticMethods_addCellsToRow$self$$, $cellSet$$4$$, $row$$8$$, $rowIndex$$, $renderer$$4$$, $isRowFetch$$, $columnStart$$4$$, $updateColumnRangeInfo$$, $columnBandingInterval$$2$$, $horizontalGridlines$$4$$, $verticalGridlines$$4$$, $bottom$$2$$) {
  var $isAppend$$2$$, $firstColumn$$, $indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$, $cellStyleClass_data$$inline_804$$, $currentLeft$$1$$, $dir$$6$$, $totalWidth$$, $columnCount$$2$$, $cellData_content$$2$$, $cellMetadata_metadata$$inline_805$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_802_cellContext$$1$$, $j$$4$$, $cell$$, $columnIndex$$, $keyAttribute$$, $selectionAffordanceAppend$$;
  $isAppend$$2$$ = $columnStart$$4$$ >= $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startCol$;
  $firstColumn$$ = $row$$8$$.firstChild;
  $currentLeft$$1$$ = $isRowFetch$$ || !$isAppend$$2$$ ? $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startColPixel$ : $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endColPixel$;
  (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_addCellsToRow$self$$.$m_utils$) && (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($row$$8$$.lastChild, $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("toucharea")) && ($selectionAffordanceAppend$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($row$$8$$.children[$row$$8$$.children.length - 2], $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("toucharea")) ? $row$$8$$.children[$row$$8$$.children.length - 
  2] : $row$$8$$.lastChild);
  $keyAttribute$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_resources$.getMappedAttribute("key");
  $dir$$6$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  $totalWidth$$ = 0;
  $columnCount$$2$$ = $cellSet$$4$$.getCount("column");
  for($j$$4$$ = 0;$j$$4$$ < $columnCount$$2$$;$j$$4$$ += 1) {
    $columnIndex$$ = $isAppend$$2$$ || $isRowFetch$$ ? $columnStart$$4$$ + $j$$4$$ : $columnStart$$4$$ + ($columnCount$$2$$ - 1 - $j$$4$$);
    $indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$ = {row:$rowIndex$$, column:$columnIndex$$};
    $cellData_content$$2$$ = $cellSet$$4$$.getData($indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$);
    $cellMetadata_metadata$$inline_805$$ = $cellSet$$4$$.getMetadata($indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$);
    $cell$$ = window.document.createElement("div");
    $cell$$.setAttribute("tabIndex", -1);
    $JSCompiler_StaticMethods_createCellContext$self$$inline_802_cellContext$$1$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$;
    $cellStyleClass_data$$inline_804$$ = $cellData_content$$2$$;
    var $cellContext$$inline_807$$ = D.$JSCompiler_alias_VOID$$, $cellContext$$inline_807$$ = {};
    $cellContext$$inline_807$$.parentElement = $cell$$;
    $cellContext$$inline_807$$.indexes = $indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$;
    $cellContext$$inline_807$$.data = $cellStyleClass_data$$inline_804$$;
    $cellContext$$inline_807$$.component = $JSCompiler_StaticMethods_createCellContext$self$$inline_802_cellContext$$1$$;
    $cellContext$$inline_807$$.datasource = $JSCompiler_StaticMethods_createCellContext$self$$inline_802_cellContext$$1$$.$m_dataSource$;
    $indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$ = D.$JSCompiler_alias_VOID$$;
    for($indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$ in $cellMetadata_metadata$$inline_805$$) {
      $cellMetadata_metadata$$inline_805$$.hasOwnProperty($indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$) && ($cellContext$$inline_807$$[$indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$] = $cellMetadata_metadata$$inline_805$$[$indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$])
    }
    $JSCompiler_StaticMethods_createCellContext$self$$inline_802_cellContext$$1$$.$m_createContextCallback$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_createCellContext$self$$inline_802_cellContext$$1$$.$m_createContextCallback$.call($JSCompiler_StaticMethods_createCellContext$self$$inline_802_cellContext$$1$$, $cellContext$$inline_807$$);
    $JSCompiler_StaticMethods_createCellContext$self$$inline_802_cellContext$$1$$ = $cellContext$$inline_807$$;
    $row$$8$$.hasAttribute($keyAttribute$$) || $row$$8$$.setAttribute($keyAttribute$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_802_cellContext$$1$$.keys.row);
    $indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getInlineStyle$("cell", $JSCompiler_StaticMethods_createCellContext$self$$inline_802_cellContext$$1$$);
    $indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$ != D.$JSCompiler_alias_NULL$$ && ($cell$$.style.cssText = $indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$);
    $cellStyleClass_data$$inline_804$$ = 1 === window.Math.floor($columnIndex$$ / $columnBandingInterval$$2$$) % 2 ? $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("cell") + " " + $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("banded") : $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("cell");
    $indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getStyleClass$("cell", $JSCompiler_StaticMethods_createCellContext$self$$inline_802_cellContext$$1$$);
    $cell$$.className = $indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$ != D.$JSCompiler_alias_NULL$$ ? $cellStyleClass_data$$inline_804$$ + " " + $indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$ : $cellStyleClass_data$$inline_804$$;
    $cell$$.style.height = "100%";
    $indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$ = (0,D.$JSCompiler_StaticMethods_getColumnWidth$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $cell$$, $columnIndex$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_802_cellContext$$1$$.keys.column);
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($cell$$, $indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$);
    if("hidden" === $verticalGridlines$$4$$ || (0,D.$JSCompiler_StaticMethods__isLastColumn$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $columnIndex$$) && (0,D.$JSCompiler_StaticMethods_getRowHeaderWidth$$)($JSCompiler_StaticMethods_addCellsToRow$self$$) + $currentLeft$$1$$ + $indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$ >= $JSCompiler_StaticMethods_addCellsToRow$self$$.getWidth() - 2) {
      "left" === $dir$$6$$ ? $cell$$.style.borderRightStyle = "none" : $cell$$.style.borderLeftStyle = "none"
    }
    if("hidden" === $horizontalGridlines$$4$$ || (0,D.$JSCompiler_StaticMethods__isLastRow$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $rowIndex$$) && (0,D.$JSCompiler_StaticMethods_getRowBottom$$)($JSCompiler_StaticMethods_addCellsToRow$self$$, $row$$8$$, $bottom$$2$$) >= $JSCompiler_StaticMethods_addCellsToRow$self$$.getHeight() - 2) {
      $cell$$.style.borderBottomStyle = "none"
    }
    $isAppend$$2$$ || $isRowFetch$$ ? (0,D.$JSCompiler_StaticMethods_setElementDir$$)($cell$$, $currentLeft$$1$$, $dir$$6$$) : (0,D.$JSCompiler_StaticMethods_setElementDir$$)($cell$$, $currentLeft$$1$$ - $indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$, $dir$$6$$);
    $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_root$.appendChild($cell$$);
    $renderer$$4$$ != D.$JSCompiler_alias_NULL$$ ? ($cellData_content$$2$$ = $renderer$$4$$.call($JSCompiler_StaticMethods_addCellsToRow$self$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_802_cellContext$$1$$), $cellData_content$$2$$ != D.$JSCompiler_alias_NULL$$ && ($cellData_content$$2$$.parentNode === D.$JSCompiler_alias_NULL$$ || $cellData_content$$2$$.parentNode instanceof window.DocumentFragment ? $cell$$.appendChild($cellData_content$$2$$) : $cellData_content$$2$$.parentNode == 
    D.$JSCompiler_alias_NULL$$ && $cellData_content$$2$$.toString && $cell$$.appendChild(window.document.createTextNode($cellData_content$$2$$.toString())))) : ($cellData_content$$2$$ == D.$JSCompiler_alias_NULL$$ && ($cellData_content$$2$$ = ""), $cell$$.appendChild(window.document.createTextNode($cellData_content$$2$$.toString())));
    $isAppend$$2$$ || $isRowFetch$$ ? ($selectionAffordanceAppend$$ ? $row$$8$$.insertBefore($cell$$, $selectionAffordanceAppend$$) : $row$$8$$.appendChild($cell$$), $currentLeft$$1$$ += $indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$) : ($row$$8$$.insertBefore($cell$$, $firstColumn$$), $firstColumn$$ = $cell$$, $currentLeft$$1$$ -= $indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$);
    $updateColumnRangeInfo$$ && ($isAppend$$2$$ || $isRowFetch$$ ? $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endColPixel$ += $indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$ : $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startColPixel$ -= $indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$, $totalWidth$$ += $indexes$$8_indexes$$inline_803_inlineStyle$$3_inlineStyleClass_prop$$inline_808_width$$19$$)
  }
  return $updateColumnRangeInfo$$ && 0 < $columnCount$$2$$ ? $totalWidth$$ / $columnCount$$2$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGrid$$.prototype.$handleCellsFetchError$ = function $$DvtDataGrid$$$$$handleCellsFetchError$$() {
  this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_showStatusText$$ = function $$JSCompiler_StaticMethods_showStatusText$$$($JSCompiler_StaticMethods_showStatusText$self$$) {
  var $left$$3_msg$$;
  $left$$3_msg$$ = $JSCompiler_StaticMethods_showStatusText$self$$.$m_resources$.getTranslatedText("msgFetchingData");
  "block" != $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.display && ($JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.innerHTML = $left$$3_msg$$, $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.display = "block", $left$$3_msg$$ = $JSCompiler_StaticMethods_showStatusText$self$$.getWidth() / 2 - $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.offsetWidth / 2, $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.left = $left$$3_msg$$ + 
  "px")
};
D.$JSCompiler_StaticMethods_hideStatusText$$ = function $$JSCompiler_StaticMethods_hideStatusText$$$($JSCompiler_StaticMethods_hideStatusText$self$$) {
  $JSCompiler_StaticMethods_hideStatusText$self$$.$m_status$.style.display = "none"
};
D.$DvtDataGrid$$.prototype.$handleScroll$ = function $$DvtDataGrid$$$$$handleScroll$$($event$$6_scrollLeft$$1$$) {
  var $scroller$$9$$;
  $event$$6_scrollLeft$$1$$ || ($event$$6_scrollLeft$$1$$ = window.event);
  $scroller$$9$$ = $event$$6_scrollLeft$$1$$.target ? $event$$6_scrollLeft$$1$$.target : $event$$6_scrollLeft$$1$$.srcElement;
  $event$$6_scrollLeft$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementScrollLeft$$)(this.$m_utils$, $scroller$$9$$);
  this.scrollTo($event$$6_scrollLeft$$1$$, $scroller$$9$$.scrollTop)
};
D.$JSCompiler_StaticMethods_scrollDelta$$ = function $$JSCompiler_StaticMethods_scrollDelta$$$($JSCompiler_StaticMethods_scrollDelta$self$$, $deltaX$$1_diff$$, $deltaY$$1$$) {
  var $scrollLeft$$2$$, $scrollTop$$1$$, $scrollerScrollLeft$$, $scrollerScrollTop$$;
  0 != $deltaX$$1_diff$$ && 0 != $deltaY$$1$$ && ($deltaX$$1_diff$$ > $deltaY$$1$$ ? $deltaY$$1$$ = 0 : $deltaX$$1_diff$$ = 0);
  $scrollLeft$$2$$ = $JSCompiler_StaticMethods_scrollDelta$self$$.$m_currentScrollLeft$ - $deltaX$$1_diff$$;
  $scrollTop$$1$$ = $JSCompiler_StaticMethods_scrollDelta$self$$.$m_currentScrollTop$ - $deltaY$$1$$;
  (0,D.$JSCompiler_StaticMethods_setElementScrollLeft$$)($JSCompiler_StaticMethods_scrollDelta$self$$.$m_utils$, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$, window.Math.max(0, window.Math.min((0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_scrollDelta$self$$, "column") ? window.Number.MAX_VALUE : $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scrollWidth$, $scrollLeft$$2$$)));
  $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$.scrollTop = window.Math.max(0, window.Math.min((0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_scrollDelta$self$$, "row") ? window.Number.MAX_VALUE : $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scrollHeight$, $scrollTop$$1$$));
  (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_scrollDelta$self$$.$m_utils$) && ($scrollerScrollTop$$ = $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$.scrollTop, $scrollerScrollLeft$$ = (0,D.$JSCompiler_StaticMethods_getElementScrollLeft$$)($JSCompiler_StaticMethods_scrollDelta$self$$.$m_utils$, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$), 0 != $deltaY$$1$$ && $scrollTop$$1$$ != $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scroller$.scrollTop ? 
  ($deltaX$$1_diff$$ = $scrollTop$$1$$ - $scrollerScrollTop$$, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_extraScrollOverY$ = 0 < $deltaX$$1_diff$$ ? window.Math.min(50, $deltaX$$1_diff$$) : window.Math.max(-50, $deltaX$$1_diff$$)) : 0 != $deltaX$$1_diff$$ && $scrollLeft$$2$$ != $scrollerScrollLeft$$ && ($deltaX$$1_diff$$ = $scrollLeft$$2$$ - $scrollerScrollLeft$$, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_extraScrollOverX$ = 0 < $deltaX$$1_diff$$ ? window.Math.min(50, $deltaX$$1_diff$$) : 
  window.Math.max(-50, $deltaX$$1_diff$$)))
};
D.$DvtDataGrid$$.prototype.scrollTo = function $$DvtDataGrid$$$$scrollTo$($scrollLeft$$4$$, $scrollTop$$3$$) {
  this.$m_currentScrollLeft$ = $scrollLeft$$4$$;
  this.$m_currentScrollTop$ = $scrollTop$$3$$;
  $scrollLeft$$4$$ + (0,D.$JSCompiler_StaticMethods_getViewportWidth$$)(this) < this.$m_startColPixel$ || $scrollLeft$$4$$ > this.$m_endColPixel$ || $scrollTop$$3$$ + (0,D.$JSCompiler_StaticMethods_getViewportHeight$$)(this) < this.$m_startRowPixel$ || $scrollTop$$3$$ > this.$m_endRowPixel$ ? (0,D.$JSCompiler_StaticMethods_handleLongScroll$$)(this, $scrollLeft$$4$$, $scrollTop$$3$$) : (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, $scrollLeft$$4$$, $scrollTop$$3$$);
  var $scrollerContent$$inline_816_viewportRight$$inline_813$$;
  $scrollerContent$$inline_816_viewportRight$$inline_813$$ = $scrollLeft$$4$$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)(this.$m_databody$);
  if(this.$m_endRowPixel$ < $scrollTop$$3$$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_databody$) || this.$m_startRowPixel$ > $scrollTop$$3$$ || this.$m_endColPixel$ < $scrollerContent$$inline_816_viewportRight$$inline_813$$ - 2 || this.$m_startColPixel$ > $scrollLeft$$4$$) {
    this.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_TRUE$$
  }else {
    this.$m_stopDatabodyScroll$ = D.$JSCompiler_alias_FALSE$$;
    (0,D.$JSCompiler_StaticMethods__syncScroller$$)(this);
    var $scrollerContentHeight$$inline_817$$, $scrollerContentWidth$$inline_818$$, $databodyContent$$inline_819$$;
    $scrollerContent$$inline_816_viewportRight$$inline_813$$ = this.$m_scroller$.firstChild;
    $scrollerContentHeight$$inline_817$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($scrollerContent$$inline_816_viewportRight$$inline_813$$);
    $scrollerContentWidth$$inline_818$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($scrollerContent$$inline_816_viewportRight$$inline_813$$);
    $databodyContent$$inline_819$$ = this.$m_databody$.firstChild;
    if(this.$m_endRowPixel$ > $scrollerContentHeight$$inline_817$$ || this.$m_dataSource$.getCount("row") == this.$m_endRow$ && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") && this.$m_endRowPixel$ < $scrollerContentHeight$$inline_817$$) {
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scrollerContent$$inline_816_viewportRight$$inline_813$$, this.$m_endRowPixel$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$inline_819$$, this.$m_endRowPixel$)
    }
    if(this.$m_endColPixel$ > $scrollerContentWidth$$inline_818$$ || this.$m_dataSource$.getCount("column") == this.$m_endCol$ && !(0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") && this.$m_endColPixel$ < $scrollerContentWidth$$inline_818$$) {
      (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($scrollerContent$$inline_816_viewportRight$$inline_813$$, this.$m_endColPixel$), (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyContent$$inline_819$$, this.$m_endColPixel$)
    }
    this.$m_cellToFocus$ != D.$JSCompiler_alias_NULL$$ && (this.$m_cellToFocus$.focus(), this.$m_cellToFocus$ = D.$JSCompiler_alias_NULL$$)
  }
};
D.$DvtDataGrid$$.prototype.$_bounceBack$ = function $$DvtDataGrid$$$$$_bounceBack$$() {
  var $scrollLeft$$5$$, $scrollTop$$4$$, $databody$$6$$, $colHeader$$3$$, $rowHeader$$5$$;
  $scrollLeft$$5$$ = this.$m_currentScrollLeft$;
  $scrollTop$$4$$ = this.$m_currentScrollTop$;
  $databody$$6$$ = this.$m_databody$.firstChild;
  $colHeader$$3$$ = this.$m_colHeader$.firstChild;
  $rowHeader$$5$$ = this.$m_rowHeader$.firstChild;
  $databody$$6$$.removeEventListener("webkitTransitionEnd", this.$m_bounceBack$);
  this.$m_resources$.isRTLMode() ? ($databody$$6$$.style.webkitTransform = "translate3d(" + $scrollLeft$$5$$ + "px, " + -$scrollTop$$4$$ + "px, 0)", $colHeader$$3$$.style.webkitTransform = "translate3d(" + $scrollLeft$$5$$ + "px, 0, 0)") : ($databody$$6$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$5$$ + "px, " + -$scrollTop$$4$$ + "px, 0)", $colHeader$$3$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$5$$ + "px, 0, 0)");
  $rowHeader$$5$$.style.webkitTransform = "translate3d(0, " + -$scrollTop$$4$$ + "px, 0)";
  this.$m_extraScrollOverY$ = this.$m_extraScrollOverX$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__syncScroller$$ = function $$JSCompiler_StaticMethods__syncScroller$$$($JSCompiler_StaticMethods__syncScroller$self_dir$$8$$) {
  var $scrollLeft$$6$$, $scrollTop$$5$$, $databody$$7$$, $colHeader$$4$$, $rowHeader$$6$$;
  $scrollLeft$$6$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_currentScrollLeft$;
  $scrollTop$$5$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_currentScrollTop$;
  $databody$$7$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_databody$.firstChild;
  $colHeader$$4$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_colHeader$.firstChild;
  $rowHeader$$6$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_rowHeader$.firstChild;
  if((0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_utils$) && window.hasOwnProperty("WebKitCSSMatrix") && (new window.WebKitCSSMatrix).hasOwnProperty("m11")) {
    if($JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_extraScrollOverX$ != D.$JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_extraScrollOverY$ != D.$JSCompiler_alias_NULL$$) {
      $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_extraScrollOverX$ != D.$JSCompiler_alias_NULL$$ ? $scrollLeft$$6$$ += $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_extraScrollOverX$ : $scrollTop$$5$$ += $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_extraScrollOverY$, $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_bounceBack$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_bounceBack$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$_bounceBack$.bind($JSCompiler_StaticMethods__syncScroller$self_dir$$8$$)), 
      $databody$$7$$.addEventListener("webkitTransitionEnd", $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_bounceBack$)
    }
    $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_resources$.isRTLMode() ? ($databody$$7$$.style.webkitTransform = "translate3d(" + $scrollLeft$$6$$ + "px, " + -$scrollTop$$5$$ + "px, 0)", $colHeader$$4$$.style.webkitTransform = "translate3d(" + $scrollLeft$$6$$ + "px, 0, 0)") : ($databody$$7$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$6$$ + "px, " + -$scrollTop$$5$$ + "px, 0)", $colHeader$$4$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$6$$ + "px, 0, 0)");
    $rowHeader$$6$$.style.webkitTransform = "translate3d(0, " + -$scrollTop$$5$$ + "px, 0)"
  }else {
    $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$ = $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$.$m_resources$.isRTLMode() ? "right" : "left", (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$7$$, -$scrollLeft$$6$$, $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$7$$, -$scrollTop$$5$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($colHeader$$4$$, -$scrollLeft$$6$$, $JSCompiler_StaticMethods__syncScroller$self_dir$$8$$), 
    (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$6$$, -$scrollTop$$5$$, "top")
  }
};
D.$JSCompiler_StaticMethods_handleLongScroll$$ = function $$JSCompiler_StaticMethods_handleLongScroll$$$($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$7_startCol$$, $scrollTop$$6_startRow$$) {
  var $startRowPixel$$, $startColPixel$$;
  $scrollTop$$6_startRow$$ = window.Math.round(window.Math.max(0, $scrollTop$$6_startRow$$ - $JSCompiler_StaticMethods_handleLongScroll$self$$.getHeight() / 2) / $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgRowHeight$);
  $scrollLeft$$7_startCol$$ = window.Math.round(window.Math.max(0, $scrollLeft$$7_startCol$$ - $JSCompiler_StaticMethods_handleLongScroll$self$$.getWidth() / 2) / $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgColWidth$);
  $startRowPixel$$ = $scrollTop$$6_startRow$$ * $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgRowHeight$;
  $startColPixel$$ = $scrollLeft$$7_startCol$$ * $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgColWidth$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRow$ = $scrollTop$$6_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRow$ = $scrollTop$$6_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowHeader$ = $scrollTop$$6_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowHeader$ = $scrollTop$$6_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowHeaderPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowHeaderPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startCol$ = $scrollLeft$$7_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endCol$ = $scrollLeft$$7_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColHeader$ = $scrollLeft$$7_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColHeader$ = $scrollLeft$$7_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColHeaderPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColHeaderPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchHeaders("row", $scrollTop$$6_startRow$$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_rowHeader$, D.$JSCompiler_alias_VOID$$, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$7_startCol$$) {
    (0,D.$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$)(this, $JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$7_startCol$$, $startRowPixel$$)
  }});
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchHeaders("column", $scrollLeft$$7_startCol$$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_colHeader$, D.$JSCompiler_alias_VOID$$, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$7_startCol$$) {
    this.$m_colHeader$.firstChild.innerHTML = "";
    this.$handleHeadersFetchSuccess$($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$7_startCol$$)
  }});
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchCells($JSCompiler_StaticMethods_handleLongScroll$self$$.$m_databody$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_scroller$, $scrollTop$$6_startRow$$, $scrollLeft$$7_startCol$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$7_startCol$$) {
    (0,D.$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$)(this, $JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$7_startCol$$, $startRowPixel$$)
  }})
};
D.$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$ = function $$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$$($JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$, $headerSet$$4$$, $headerRange$$7$$, $startRowPixel$$1$$) {
  var $headerContent$$ = $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$.$m_rowHeader$.firstChild;
  window.headerResizer = $headerContent$$.firstChild.cloneNode();
  $headerContent$$.innerHTML = "";
  $headerContent$$.appendChild(window.headerResizer);
  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)(window.headerResizer, $startRowPixel$$1$$);
  $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$.$handleHeadersFetchSuccess$($headerSet$$4$$, $headerRange$$7$$)
};
D.$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$ = function $$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$$($JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$, $cellSet$$6$$, $cellRange$$6$$, $startRowPixel$$2$$) {
  window.databodyContent = $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$.$m_databody$.firstChild;
  window.databodyResizer = window.databodyContent.firstChild.cloneNode();
  window.databodyContent.innerHTML = "";
  window.databodyContent.appendChild(window.databodyResizer);
  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)(window.databodyResizer, $startRowPixel$$2$$);
  $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$.$handleCellsFetchSuccess$($cellSet$$6$$, $cellRange$$6$$)
};
D.$JSCompiler_StaticMethods_fillViewport$$ = function $$JSCompiler_StaticMethods_fillViewport$$$($JSCompiler_StaticMethods_fillViewport$self$$, $fetchStartRow$$inline_884_rows$$inline_842_scrollLeft$$8_threshold$$inline_856_viewportBottom$$2$$, $fetchSize$$inline_883_scrollTop$$7$$) {
  var $columns$$inline_857_fetchStartRow_indexToRemove$$inline_843_rowHeaderContent$$inline_866_rowHeaderContent$$inline_875_viewportRight$$2$$, $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$, $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$;
  $columns$$inline_857_fetchStartRow_indexToRemove$$inline_843_rowHeaderContent$$inline_866_rowHeaderContent$$inline_875_viewportRight$$2$$ = $fetchStartRow$$inline_884_rows$$inline_842_scrollLeft$$8_threshold$$inline_856_viewportBottom$$2$$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$);
  if(!$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnHeaderFetch$ && ($columns$$inline_857_fetchStartRow_indexToRemove$$inline_843_rowHeaderContent$$inline_866_rowHeaderContent$$inline_875_viewportRight$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ || $columns$$inline_857_fetchStartRow_indexToRemove$$inline_843_rowHeaderContent$$inline_866_rowHeaderContent$$inline_875_viewportRight$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ && 
  (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, "column"))) {
    if($JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("column", $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$) {
      var $column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$, $column$$inline_848_height$$inline_871_left$$inline_826_row$$inline_862_width$$inline_838$$, $i$$inline_828_prevLeft$$inline_849$$, $header$$inline_830$$, $prevLeft$$inline_831$$;
      $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$.firstChild;
      $column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$ = $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$.childNodes;
      for($i$$inline_828_prevLeft$$inline_849$$ = $column$$inline_848_height$$inline_871_left$$inline_826_row$$inline_862_width$$inline_838$$ = $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$ = 0;$i$$inline_828_prevLeft$$inline_849$$ < $column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$.length;$i$$inline_828_prevLeft$$inline_849$$ += 
      1) {
        if($header$$inline_830$$ = $column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$[$i$$inline_828_prevLeft$$inline_849$$], $prevLeft$$inline_831$$ = $column$$inline_848_height$$inline_871_left$$inline_826_row$$inline_862_width$$inline_838$$, $column$$inline_848_height$$inline_871_left$$inline_826_row$$inline_862_width$$inline_838$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($header$$inline_830$$, "left"), 
        $column$$inline_848_height$$inline_871_left$$inline_826_row$$inline_862_width$$inline_838$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ - 0) {
          $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$ = $i$$inline_828_prevLeft$$inline_849$$ - 1;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ += $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$ = $prevLeft$$inline_831$$;
          break
        }
      }
      for($column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$ = 0;$column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$ < $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$;$column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$ += 
      1) {
        $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$.removeChild($colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$.firstChild), $JSCompiler_StaticMethods_fillViewport$self$$.$m_cachedColumnWidth$.splice(0, 1)
      }
      $JSCompiler_StaticMethods_fillViewport$self$$.$m_cachedColumnWidthStartIndex$ += $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$
    }
  }else {
    if($fetchStartRow$$inline_884_rows$$inline_842_scrollLeft$$8_threshold$$inline_856_viewportBottom$$2$$ < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$ && ($column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, 
    "column")), $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ - $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$), $JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("column", 
    $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$, $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && ($colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$.firstChild, $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$ = 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getViewportWidth$$)($JSCompiler_StaticMethods_fillViewport$self$$) + 0, !($JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ <= $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$)))) {
      $column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$ = $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$.lastChild;
      for($column$$inline_848_height$$inline_871_left$$inline_826_row$$inline_862_width$$inline_838$$ = $column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$.offsetWidth;$JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ + $column$$inline_848_height$$inline_871_left$$inline_826_row$$inline_862_width$$inline_838$$ > $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$;) {
        $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$.removeChild($column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$), $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ -= $column$$inline_848_height$$inline_871_left$$inline_826_row$$inline_862_width$$inline_838$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ -= 
        1, $column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$ = $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$.lastChild, $column$$inline_848_height$$inline_871_left$$inline_826_row$$inline_862_width$$inline_838$$ = $column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$.offsetWidth
      }
    }
  }
  if($columns$$inline_857_fetchStartRow_indexToRemove$$inline_843_rowHeaderContent$$inline_866_rowHeaderContent$$inline_875_viewportRight$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ || $columns$$inline_857_fetchStartRow_indexToRemove$$inline_843_rowHeaderContent$$inline_866_rowHeaderContent$$inline_875_viewportRight$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, 
  "column") && !$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnFetch$) {
    if($JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && ($fetchStartRow$$inline_884_rows$$inline_842_scrollLeft$$8_threshold$$inline_856_viewportBottom$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$.firstChild.childNodes, $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$ = 
    $columns$$inline_857_fetchStartRow_indexToRemove$$inline_843_rowHeaderContent$$inline_866_rowHeaderContent$$inline_875_viewportRight$$2$$ = 0, !(2 > $fetchStartRow$$inline_884_rows$$inline_842_scrollLeft$$8_threshold$$inline_856_viewportBottom$$2$$.length))) {
      $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$ = $fetchStartRow$$inline_884_rows$$inline_842_scrollLeft$$8_threshold$$inline_856_viewportBottom$$2$$[1].childNodes;
      for($column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$ = 0;$column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$ < $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$.length;$column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$ += 
      1) {
        if($column$$inline_848_height$$inline_871_left$$inline_826_row$$inline_862_width$$inline_838$$ = $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$[$column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$], $i$$inline_828_prevLeft$$inline_849$$ = $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$, 
        $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($column$$inline_848_height$$inline_871_left$$inline_826_row$$inline_862_width$$inline_838$$, "left"), $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ - 
        0) {
          $columns$$inline_857_fetchStartRow_indexToRemove$$inline_843_rowHeaderContent$$inline_866_rowHeaderContent$$inline_875_viewportRight$$2$$ = $column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$ - 1;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ += $columns$$inline_857_fetchStartRow_indexToRemove$$inline_843_rowHeaderContent$$inline_866_rowHeaderContent$$inline_875_viewportRight$$2$$;
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColPixel$ = $i$$inline_828_prevLeft$$inline_849$$;
          break
        }
      }
      for($colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$ = 1;$colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$ < $fetchStartRow$$inline_884_rows$$inline_842_scrollLeft$$8_threshold$$inline_856_viewportBottom$$2$$.length;$colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$ += 
      1) {
        $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$ = $fetchStartRow$$inline_884_rows$$inline_842_scrollLeft$$8_threshold$$inline_856_viewportBottom$$2$$[$colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$];
        for($column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$ = 0;$column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$ < $columns$$inline_857_fetchStartRow_indexToRemove$$inline_843_rowHeaderContent$$inline_866_rowHeaderContent$$inline_875_viewportRight$$2$$;$column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$ += 
        1) {
          $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$.removeChild($column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$.firstChild)
        }
      }
    }
  }else {
    if($fetchStartRow$$inline_884_rows$$inline_842_scrollLeft$$8_threshold$$inline_856_viewportBottom$$2$$ < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColPixel$ && ($column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, 
    "column")), $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ - $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$), $JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$, $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$, $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$), 
    !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && ($colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$.firstChild.childNodes, 
    $fetchStartRow$$inline_884_rows$$inline_842_scrollLeft$$8_threshold$$inline_856_viewportBottom$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getViewportWidth$$)($JSCompiler_StaticMethods_fillViewport$self$$) + 0, !($JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ <= $fetchStartRow$$inline_884_rows$$inline_842_scrollLeft$$8_threshold$$inline_856_viewportBottom$$2$$)))) {
      $columns$$inline_857_fetchStartRow_indexToRemove$$inline_843_rowHeaderContent$$inline_866_rowHeaderContent$$inline_875_viewportRight$$2$$ = $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$[1];
      $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$ = $columns$$inline_857_fetchStartRow_indexToRemove$$inline_843_rowHeaderContent$$inline_866_rowHeaderContent$$inline_875_viewportRight$$2$$.lastChild;
      for($column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$ = $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$.offsetWidth;$JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ + $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$ > 
      $fetchStartRow$$inline_884_rows$$inline_842_scrollLeft$$8_threshold$$inline_856_viewportBottom$$2$$;) {
        for($column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$ = 1;$column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$ < $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$.length;$column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$ += 
        1) {
          $column$$inline_848_height$$inline_871_left$$inline_826_row$$inline_862_width$$inline_838$$ = $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$[$column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$], $column$$inline_848_height$$inline_871_left$$inline_826_row$$inline_862_width$$inline_838$$.removeChild($column$$inline_848_height$$inline_871_left$$inline_826_row$$inline_862_width$$inline_838$$.lastChild)
        }
        $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ -= $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$;
        $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ -= 1;
        $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$ = $columns$$inline_857_fetchStartRow_indexToRemove$$inline_843_rowHeaderContent$$inline_866_rowHeaderContent$$inline_875_viewportRight$$2$$.lastChild;
        $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$ = $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$.offsetWidth
      }
    }
  }
  $fetchStartRow$$inline_884_rows$$inline_842_scrollLeft$$8_threshold$$inline_856_viewportBottom$$2$$ = $fetchSize$$inline_883_scrollTop$$7$$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$);
  if(!$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopRowHeaderFetch$ && ($fetchStartRow$$inline_884_rows$$inline_842_scrollLeft$$8_threshold$$inline_856_viewportBottom$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ || $fetchStartRow$$inline_884_rows$$inline_842_scrollLeft$$8_threshold$$inline_856_viewportBottom$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, 
  "row"))) {
    if($JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("row", $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && 
    ($columns$$inline_857_fetchStartRow_indexToRemove$$inline_843_rowHeaderContent$$inline_866_rowHeaderContent$$inline_875_viewportRight$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$.firstChild, $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$ = $columns$$inline_857_fetchStartRow_indexToRemove$$inline_843_rowHeaderContent$$inline_866_rowHeaderContent$$inline_875_viewportRight$$2$$.firstChild, 
    $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$), !($column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$ >= 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollTop$ - 0))) {
      $column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$ = $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$.nextSibling;
      for($column$$inline_848_height$$inline_871_left$$inline_826_row$$inline_862_width$$inline_838$$ = $column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$.offsetHeight;$column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$ + $column$$inline_848_height$$inline_871_left$$inline_826_row$$inline_862_width$$inline_838$$ < 
      $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollTop$ - 0;) {
        $columns$$inline_857_fetchStartRow_indexToRemove$$inline_843_rowHeaderContent$$inline_866_rowHeaderContent$$inline_875_viewportRight$$2$$.removeChild($column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$), $JSCompiler_StaticMethods_fillViewport$self$$.$m_cachedRowHeight$.splice(0, 1), $JSCompiler_StaticMethods_fillViewport$self$$.$m_cachedRowHeightStartIndex$ -= 1, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeaderPixel$ += 
        $column$$inline_848_height$$inline_871_left$$inline_826_row$$inline_862_width$$inline_838$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ += 1, $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$ += $column$$inline_848_height$$inline_871_left$$inline_826_row$$inline_862_width$$inline_838$$, $column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$ = 
        $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$.nextSibling, $column$$inline_848_height$$inline_871_left$$inline_826_row$$inline_862_width$$inline_838$$ = $column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$.offsetHeight
      }
      (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$, $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$)
    }
  }else {
    if(window.Math.max(0, $fetchSize$$inline_883_scrollTop$$7$$ - 0) < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeaderPixel$) {
      if(0 == $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$) {
        return
      }
      $columns$$inline_857_fetchStartRow_indexToRemove$$inline_843_rowHeaderContent$$inline_866_rowHeaderContent$$inline_875_viewportRight$$2$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, "row"));
      $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ - $columns$$inline_857_fetchStartRow_indexToRemove$$inline_843_rowHeaderContent$$inline_866_rowHeaderContent$$inline_875_viewportRight$$2$$);
      $JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("row", $columns$$inline_857_fetchStartRow_indexToRemove$$inline_843_rowHeaderContent$$inline_866_rowHeaderContent$$inline_875_viewportRight$$2$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$, $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$);
      if(!(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && ($columns$$inline_857_fetchStartRow_indexToRemove$$inline_843_rowHeaderContent$$inline_866_rowHeaderContent$$inline_875_viewportRight$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$.firstChild, 
      $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getViewportHeight$$)($JSCompiler_StaticMethods_fillViewport$self$$) + 0, !($JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ <= $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$))) {
        $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$ = $columns$$inline_857_fetchStartRow_indexToRemove$$inline_843_rowHeaderContent$$inline_866_rowHeaderContent$$inline_875_viewportRight$$2$$.lastChild;
        for($column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$ = $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$.offsetHeight;$JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ + $column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$ > 
        $colHeaderContent$$inline_823_colHeaderContent$$inline_835_fetchSize$$1_j$$inline_850_left$$inline_844_resizer$$inline_867_rows$$inline_860_threshold$$inline_876$$;) {
          $columns$$inline_857_fetchStartRow_indexToRemove$$inline_843_rowHeaderContent$$inline_866_rowHeaderContent$$inline_875_viewportRight$$2$$.removeChild($column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$), $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ -= $column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$, 
          $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ -= 1, $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$ = $columns$$inline_857_fetchStartRow_indexToRemove$$inline_843_rowHeaderContent$$inline_866_rowHeaderContent$$inline_875_viewportRight$$2$$.lastChild, $column$$inline_837_header$$inline_870_headers$$inline_824_height$$inline_878_i$$inline_847_j$$inline_829_j$$inline_861_k$$inline_852$$ = 
          $column$$inline_858_columns$$inline_846_fetchStartCol_indexToRemove$$inline_825_resizerHeight$$inline_868_row$$inline_851_row$$inline_877_threshold$$inline_836_width$$inline_859$$.offsetHeight
        }
      }
    }
  }
  $fetchStartRow$$inline_884_rows$$inline_842_scrollLeft$$8_threshold$$inline_856_viewportBottom$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowPixel$ || $fetchStartRow$$inline_884_rows$$inline_842_scrollLeft$$8_threshold$$inline_856_viewportBottom$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowPixel$ && (0,D.$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$)($JSCompiler_StaticMethods_fillViewport$self$$, "row") && !$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopRowFetch$ ? 
  ($JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && 
  $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromTop$$)($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$)) : window.Math.max(0, $fetchSize$$inline_883_scrollTop$$7$$ - 0) < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowPixel$ && 0 != $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ && 
  ($fetchStartRow$$inline_884_rows$$inline_842_scrollLeft$$8_threshold$$inline_856_viewportBottom$$2$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ - (0,D.$JSCompiler_StaticMethods_getFetchSize$$)($JSCompiler_StaticMethods_fillViewport$self$$, "row")), $fetchSize$$inline_883_scrollTop$$7$$ = window.Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ - $fetchStartRow$$inline_884_rows$$inline_842_scrollLeft$$8_threshold$$inline_856_viewportBottom$$2$$), 
  $JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $fetchStartRow$$inline_884_rows$$inline_842_scrollLeft$$8_threshold$$inline_856_viewportBottom$$2$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$, $fetchSize$$inline_883_scrollTop$$7$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$), !(0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)($JSCompiler_StaticMethods_fillViewport$self$$) && 
  $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromBottom$$)($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$))
};
D.$JSCompiler_StaticMethods_removeRowsFromTop$$ = function $$JSCompiler_StaticMethods_removeRowsFromTop$$$($JSCompiler_StaticMethods_removeRowsFromTop$self$$, $databody$$10$$) {
  var $databodyContent$$7$$, $resizer$$3$$, $resizerHeight$$1$$, $row$$11$$, $height$$19$$;
  $databodyContent$$7$$ = $databody$$10$$.firstChild;
  $resizer$$3$$ = $databodyContent$$7$$.firstChild;
  $resizerHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($resizer$$3$$);
  if(!($resizerHeight$$1$$ >= $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_currentScrollTop$ - 0)) {
    $row$$11$$ = $resizer$$3$$.nextSibling;
    for($height$$19$$ = $row$$11$$.offsetHeight;$resizerHeight$$1$$ + $height$$19$$ < $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_currentScrollTop$ - 0;) {
      $databodyContent$$7$$.removeChild($row$$11$$);
      $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_startRowPixel$ += $height$$19$$;
      $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_startRow$ += 1;
      $resizerHeight$$1$$ += $height$$19$$;
      $row$$11$$ = $resizer$$3$$.nextSibling;
      if($row$$11$$ == D.$JSCompiler_alias_NULL$$) {
        break
      }
      $height$$19$$ = $row$$11$$.offsetHeight
    }
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($resizer$$3$$, $resizerHeight$$1$$)
  }
};
D.$JSCompiler_StaticMethods_removeRowsFromBottom$$ = function $$JSCompiler_StaticMethods_removeRowsFromBottom$$$($JSCompiler_StaticMethods_removeRowsFromBottom$self$$, $databody$$11$$) {
  var $databodyContent$$8$$, $threshold$$3$$, $row$$13$$, $height$$21$$;
  $databodyContent$$8$$ = $databody$$11$$.firstChild;
  $threshold$$3$$ = $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getViewportHeight$$)($JSCompiler_StaticMethods_removeRowsFromBottom$self$$) + 0;
  if(!($JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ > $threshold$$3$$)) {
    $row$$13$$ = $databodyContent$$8$$.lastChild;
    for($height$$21$$ = $row$$13$$.offsetHeight;$JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ + $height$$21$$ > $threshold$$3$$;) {
      $databodyContent$$8$$.removeChild($row$$13$$), $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ -= $height$$21$$, $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRow$ -= 1, $row$$13$$ = $databodyContent$$8$$.lastChild, $height$$21$$ = $row$$13$$.offsetHeight
    }
  }
};
D.$DvtDataGrid$$.prototype.$handleScrollerMouseDown$ = function $$DvtDataGrid$$$$$handleScrollerMouseDown$$() {
  this.$m_captureScrolling$ = D.$JSCompiler_alias_TRUE$$
};
D.$DvtDataGrid$$.prototype.$handleScrollerMouseUp$ = function $$DvtDataGrid$$$$$handleScrollerMouseUp$$() {
  this.$m_captureScrolling$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && this.$m_stopDatabodyScroll$ && (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$)
};
D.$DvtDataGrid$$.prototype.$handleContextMenuReturn$ = function $$DvtDataGrid$$$$$handleContextMenuReturn$$($event$$9$$, $direction$$5_id$$3$$, $value$$50$$) {
  var $target$$41$$, $cell$$1$$;
  $target$$41$$ = $event$$9$$.target;
  $cell$$1$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $target$$41$$);
  $direction$$5_id$$3$$ === this.$m_resources$.getMappedCommand("resizeHeight") ? (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && ($target$$41$$ = $cell$$1$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $cell$$1$$, "row").firstChild : (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $target$$41$$), (0,D.$JSCompiler_StaticMethods_handleContextMenuResize$$)(this, $target$$41$$, "resizeHeight", $value$$50$$)) : $direction$$5_id$$3$$ === this.$m_resources$.getMappedCommand("resizeWidth") ? 
  (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && ($target$$41$$ = $cell$$1$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $cell$$1$$, "column") : (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $target$$41$$), (0,D.$JSCompiler_StaticMethods_handleContextMenuResize$$)(this, $target$$41$$, "resizeWidth", $value$$50$$)) : $direction$$5_id$$3$$ === this.$m_resources$.getMappedCommand("sortColAsc") || $direction$$5_id$$3$$ === this.$m_resources$.getMappedCommand("sortColDsc") ? 
  ($direction$$5_id$$3$$ = $direction$$5_id$$3$$ === this.$m_resources$.getMappedCommand("sortColAsc") ? "ascending" : "descending", $cell$$1$$ != D.$JSCompiler_alias_NULL$$ ? ($target$$41$$ = (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $cell$$1$$, "column"), (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $target$$41$$) && $target$$41$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)(this, $event$$9$$, $target$$41$$, $direction$$5_id$$3$$)) : 
  (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $target$$41$$) && (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, $event$$9$$, $direction$$5_id$$3$$)) : $direction$$5_id$$3$$ === this.$m_resources$.getMappedCommand("sortRowAsc") || $direction$$5_id$$3$$ === this.$m_resources$.getMappedCommand("sortRowDsc") ? ($direction$$5_id$$3$$ = $direction$$5_id$$3$$ === this.$m_resources$.getMappedCommand("sortRowAsc") ? "ascending" : "descending", $cell$$1$$ != D.$JSCompiler_alias_NULL$$ ? 
  ($target$$41$$ = (0,D.$JSCompiler_StaticMethods_getHeaderFromCell$$)(this, $cell$$1$$, "row"), (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $target$$41$$) && $target$$41$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)(this, $event$$9$$, $target$$41$$, $direction$$5_id$$3$$)) : (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $target$$41$$) && (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, $event$$9$$, $direction$$5_id$$3$$)) : 
  $direction$$5_id$$3$$ === this.$m_resources$.getMappedCommand("cut") ? (0,D.$JSCompiler_StaticMethods__handleCut$$)(this, $event$$9$$) : $direction$$5_id$$3$$ === this.$m_resources$.getMappedCommand("paste") && (0,D.$JSCompiler_StaticMethods__handlePaste$$)(this, $event$$9$$)
};
D.$DvtDataGrid$$.prototype.handleContextMenuReturn = D.$DvtDataGrid$$.prototype.$handleContextMenuReturn$;
D.$JSCompiler_StaticMethods__isDOMElementSortable$$ = function $$JSCompiler_StaticMethods__isDOMElementSortable$$$($JSCompiler_StaticMethods__isDOMElementSortable$self$$, $element$$8$$) {
  var $header$$5$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods__isDOMElementSortable$self$$, $element$$8$$);
  return $header$$5$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : "true" == $header$$5$$.getAttribute($JSCompiler_StaticMethods__isDOMElementSortable$self$$.$m_resources$.getMappedAttribute("sortable"))
};
D.$JSCompiler_StaticMethods__isSelectionEnabled$$ = function $$JSCompiler_StaticMethods__isSelectionEnabled$$$($JSCompiler_StaticMethods__isSelectionEnabled$self$$) {
  return"none" != (0,D.$JSCompiler_StaticMethods_getSelectionCardinality$$)($JSCompiler_StaticMethods__isSelectionEnabled$self$$.$m_options$)
};
D.$JSCompiler_StaticMethods_isMultipleSelection$$ = function $$JSCompiler_StaticMethods_isMultipleSelection$$$($JSCompiler_StaticMethods_isMultipleSelection$self$$) {
  return"multiple" == (0,D.$JSCompiler_StaticMethods_getSelectionCardinality$$)($JSCompiler_StaticMethods_isMultipleSelection$self$$.$m_options$)
};
D.$JSCompiler_StaticMethods_isResizeEnabled$$ = function $$JSCompiler_StaticMethods_isResizeEnabled$$$($JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$) {
  var $row$$14$$ = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.$m_options$, "row");
  $JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$ = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.$m_options$, "column");
  return"disable" !== $row$$14$$.width || "disable" !== $row$$14$$.height || "disable" !== $JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.width || "disable" !== $JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.height
};
D.$JSCompiler_StaticMethods__isHeaderResizeEnabled$$ = function $$JSCompiler_StaticMethods__isHeaderResizeEnabled$$$($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$, $axis$$22$$, $headerContext$$4$$) {
  var $resizable$$ = (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$.$m_options$, $axis$$22$$, $headerContext$$4$$);
  return"column" == $axis$$22$$ ? "function" == typeof $resizable$$.width ? "enable" == $resizable$$.width.call($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$, $headerContext$$4$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$ : "enable" == $resizable$$.width ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$ : "row" == $axis$$22$$ ? "function" == typeof $resizable$$.height ? "enable" == $resizable$$.height.call($JSCompiler_StaticMethods__isHeaderResizeEnabled$self$$, 
  $headerContext$$4$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$ : "enable" == $resizable$$.height ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataGrid$$.prototype;
D.$JSCompiler_prototypeAlias$$.$handleMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleMouseMove$$($event$$10$$) {
  (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && this.$m_databodyDragState$ == D.$JSCompiler_alias_FALSE$$ && (0,D.$JSCompiler_StaticMethods_handleResize$$)(this, $event$$10$$)
};
D.$JSCompiler_prototypeAlias$$.$handleRowHeaderMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleRowHeaderMouseMove$$($event$$11$$) {
  this.$m_databodyMove$ && (0,D.$JSCompiler_StaticMethods__handleMove$$)(this, $event$$11$$)
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseDown$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseDown$$($event$$12$$) {
  var $header$$inline_906_row$$15$$;
  if(((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$12$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$12$$.target, this.getMappedStyle("sortdescending"))) && (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$12$$.target)) {
    $event$$12$$.preventDefault(), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($event$$12$$.target, this.getMappedStyle("selected"))
  }else {
    (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_handleResizeMouseDown$$)(this, $event$$12$$);
    $header$$inline_906_row$$15$$ = (0,D.$JSCompiler_StaticMethods_findRow$$)(this, $event$$12$$.target);
    !this.$m_isResizing$ && (0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)(this, $header$$inline_906_row$$15$$) && (this.$m_databodyMove$ = D.$JSCompiler_alias_TRUE$$, this.$m_currentX$ = $event$$12$$.pageX, this.$m_currentY$ = $event$$12$$.pageY);
    if(!this.$m_isResizing$) {
      var $index$$inline_905$$, $axis$$inline_907$$;
      $header$$inline_906_row$$15$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$12$$.target);
      $header$$inline_906_row$$15$$ != D.$JSCompiler_alias_NULL$$ && ($index$$inline_905$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)(this, $header$$inline_906_row$$15$$), $axis$$inline_907$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellAxis$$)(this, $header$$inline_906_row$$15$$));
      $index$$inline_905$$ != D.$JSCompiler_alias_NULL$$ && $index$$inline_905$$ != D.$JSCompiler_alias_VOID$$ && ("row" === $axis$$inline_907$$ ? (0,D.$JSCompiler_StaticMethods__focusRowHeader$$)(this, $index$$inline_905$$) : "column" === $axis$$inline_907$$ && (0,D.$JSCompiler_StaticMethods__focusColumnHeader$$)(this, $index$$inline_905$$))
    }
    this.$processed$ === D.$JSCompiler_alias_TRUE$$ && $event$$12$$.preventDefault()
  }
};
D.$JSCompiler_prototypeAlias$$.$handleMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleMouseUp$$($event$$13$$) {
  this.$m_databodyMove$ && this.$m_moveRow$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_FALSE$$) : (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_handleResizeMouseUp$$)(this, $event$$13$$);
  this.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseOver$$($event$$14$$) {
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$14$$.target), this.getMappedStyle("hover"));
  if((0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$14$$.target)) {
    var $header$$inline_911$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$14$$.target);
    $header$$inline_911$$ && (0,D.$JSCompiler_StaticMethods__showOrHideSortIcon$$)(this, $header$$inline_911$$, D.$JSCompiler_alias_FALSE$$);
    ((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$14$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$14$$.target, this.getMappedStyle("sortdescending"))) && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($event$$14$$.target, this.getMappedStyle("hover"))
  }
  (0,D.$JSCompiler_StaticMethods__manageMoveCursor$$)(this, (0,D.$JSCompiler_StaticMethods_findRow$$)(this, $event$$14$$.target), D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseOut$$($event$$15$$) {
  (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$15$$.target), this.getMappedStyle("hover"));
  if((0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$15$$.target)) {
    var $header$$inline_915$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$15$$.target);
    ($header$$inline_915$$ == D.$JSCompiler_alias_NULL$$ || $event$$15$$.relatedTarget == D.$JSCompiler_alias_NULL$$ || $header$$inline_915$$ !== (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$15$$.relatedTarget)) && (0,D.$JSCompiler_StaticMethods__showOrHideSortIcon$$)(this, $header$$inline_915$$, D.$JSCompiler_alias_TRUE$$);
    if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$15$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$15$$.target, this.getMappedStyle("sortdescending"))) {
      (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($event$$15$$.target, this.getMappedStyle("hover")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($event$$15$$.target, this.getMappedStyle("selected"))
    }
  }
  (0,D.$JSCompiler_StaticMethods__manageMoveCursor$$)(this, (0,D.$JSCompiler_StaticMethods_findRow$$)(this, $event$$15$$.target), D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseUp$$($event$$16$$) {
  this.$m_databodyMove$ && this.$m_moveRow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods__manageMoveCursor$$)(this, (0,D.$JSCompiler_StaticMethods_findRow$$)(this, $event$$16$$.target), D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderClick$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderClick$$($event$$17$$) {
  if(((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$17$$.target, this.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($event$$17$$.target, this.getMappedStyle("sortdescending"))) && (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$17$$.target)) {
    (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, $event$$17$$), $event$$17$$.preventDefault()
  }
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseDown$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseDown$$($event$$18$$) {
  0 === $event$$18$$.button && ((0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)(this, this.find($event$$18$$.target, "row")) && (this.$m_databodyMove$ = D.$JSCompiler_alias_TRUE$$, this.$m_currentX$ = $event$$18$$.pageX, this.$m_currentY$ = $event$$18$$.pageY), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? ((0,D.$JSCompiler_StaticMethods_handleDatabodyClickSelection$$)(this, $event$$18$$), (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && (this.$m_databodyDragState$ = 
  D.$JSCompiler_alias_TRUE$$)) : (0,D.$JSCompiler_StaticMethods_handleDatabodyClickActive$$)(this, $event$$18$$))
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseOut$$($event$$19$$) {
  var $row$$16$$, $selectionMode$$;
  this.$m_databodyMove$ || ($selectionMode$$ = this.$m_options$.$getSelectionMode$(), $row$$16$$ = (0,D.$JSCompiler_StaticMethods_findRow$$)(this, $event$$19$$.target), "cell" === $selectionMode$$ ? (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$19$$.target), this.getMappedStyle("hover")) : "row" === $selectionMode$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($row$$16$$, this.getMappedStyle("hover")), (0,D.$JSCompiler_StaticMethods__manageMoveCursor$$)(this, 
  $row$$16$$))
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseOver$$($event$$20$$) {
  var $row$$17$$, $selectionMode$$1$$;
  this.$m_databodyMove$ || ($selectionMode$$1$$ = this.$m_options$.$getSelectionMode$(), $row$$17$$ = (0,D.$JSCompiler_StaticMethods_findRow$$)(this, $event$$20$$.target), "cell" === $selectionMode$$1$$ ? (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$20$$.target), this.getMappedStyle("hover")) : "row" === $selectionMode$$1$$ && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($row$$17$$, this.getMappedStyle("hover")), (0,D.$JSCompiler_StaticMethods__manageMoveCursor$$)(this, 
  $row$$17$$))
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseMove$$($event$$21$$) {
  this.$m_databodyMove$ ? (0,D.$JSCompiler_StaticMethods__handleMove$$)(this, $event$$21$$) : this.$m_databodyDragState$ && (0,D.$JSCompiler_StaticMethods_handleDatabodySelectionDrag$$)(this, $event$$21$$)
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseUp$$($event$$22$$) {
  this.$m_databodyDragState$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_databodyMove$ && this.$m_moveRow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods__manageMoveCursor$$)(this, (0,D.$JSCompiler_StaticMethods_findRow$$)(this, $event$$22$$.target))
};
D.$JSCompiler_prototypeAlias$$.$handleDatabodyKeyDown$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyKeyDown$$($event$$23$$) {
  var $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$;
  if(this.$m_active$ == D.$JSCompiler_alias_NULL$$ && this.$m_activeHeader$ == D.$JSCompiler_alias_NULL$$) {
    9 === $event$$23$$.keyCode && ($JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = this.createIndex(0, 0), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)(this, $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$), 
    (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? this.$selectAndFocus$($JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$) : this.$activeAndFocus$($JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$), 
    $event$$23$$.preventDefault())
  }else {
    if(!(9 === $event$$23$$.keyCode && (!(0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) || "actionable" != this.$m_keyMode$))) {
      if(this.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$) {
        if(this.$m_activeHeader$.elem != window.document.activeElement) {
          return
        }
        var $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$, $JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$;
        $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = D.$JSCompiler_alias_FALSE$$;
        if(this.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$) {
          if($axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ = $event$$23$$.keyCode, (0,D.$JSCompiler_StaticMethods_isArrowKey$$)($axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$)) {
            $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$;
            var $elem$$inline_9092_shiftKey$$inline_929$$, $processed$$inline_9094$$ = D.$JSCompiler_alias_FALSE$$;
            if((0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this)) {
              this.$m_resources$.isRTLMode() && (37 == $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ ? $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = 
              39 : 39 == $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ && ($JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = 
              37));
              $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ = this.$m_activeHeader$.axis;
              $JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$ = this.$m_activeHeader$.index;
              $elem$$inline_9092_shiftKey$$inline_929$$ = this.$m_activeHeader$.elem;
              switch($JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$) {
                case 37:
                  "column" === $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ && 0 < $JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$ && ((0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$ - 
                  1, $elem$$inline_9092_shiftKey$$inline_929$$.previousSibling), (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this), $processed$$inline_9094$$ = D.$JSCompiler_alias_TRUE$$);
                  break;
                case 39:
                  if("row" === $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$) {
                    (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, -1), this.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = this.createIndex($JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$, 0), 
                    (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? this.$selectAndFocus$($JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$, $event$$23$$) : this.$activeAndFocus$($JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$, 
                    $event$$23$$), $processed$$inline_9094$$ = D.$JSCompiler_alias_TRUE$$
                  }else {
                    if(!($JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$ + 1 >= this.$m_endColHeader$ && this.$m_stopColumnHeaderFetch$) && ((0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "column") || $JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$ < this.$m_dataSource$.getCount("column"))) {
                      (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$ + 1, $elem$$inline_9092_shiftKey$$inline_929$$.nextSibling), (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this), $processed$$inline_9094$$ = D.$JSCompiler_alias_TRUE$$
                    }
                  }
                  break;
                case 38:
                  "row" === $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ && 0 < $JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$ && ((0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$ - 
                  1, $elem$$inline_9092_shiftKey$$inline_929$$.previousSibling), (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this), $processed$$inline_9094$$ = D.$JSCompiler_alias_TRUE$$);
                  break;
                case 40:
                  if("column" === $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$) {
                    (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, -1), this.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = this.createIndex(0, $JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$), 
                    (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? this.$selectAndFocus$($JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$, $event$$23$$) : this.$activeAndFocus$($JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$, 
                    $event$$23$$), $processed$$inline_9094$$ = D.$JSCompiler_alias_TRUE$$
                  }else {
                    if(!($JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$ + 1 >= this.$m_endRowHeader$ && this.$m_stopRowHeaderFetch$) && ((0,D.$JSCompiler_StaticMethods__isCountUnknown$$)(this, "row") || $JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$ + 1 < this.$m_dataSource$.getCount("row"))) {
                      (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)(this, $JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$ + 1, $elem$$inline_9092_shiftKey$$inline_929$$.nextSibling), (0,D.$JSCompiler_StaticMethods__scrollToActiveHeader$$)(this), $processed$$inline_9094$$ = D.$JSCompiler_alias_TRUE$$
                    }
                  }
              }
              $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = $processed$$inline_9094$$
            }else {
              $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = D.$JSCompiler_alias_TRUE$$
            }
          }else {
            32 == $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ ? (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && ($axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ = 
            this.$m_activeHeader$.axis, $JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$ = this.$m_activeHeader$.index, "row" === $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ ? ((0,D.$JSCompiler_StaticMethods__selectEntireRow$$)(this, $JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$, 
            $event$$23$$), $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = D.$JSCompiler_alias_TRUE$$) : "column" === $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ && 
            "cell" == this.$m_options$.$getSelectionMode$() && ((0,D.$JSCompiler_StaticMethods__selectEntireColumn$$)(this, $JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$, $event$$23$$), $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = D.$JSCompiler_alias_TRUE$$)) : 
            13 == $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ ? ($axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ = this.$m_activeHeader$.elem, "true" == $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$.getAttribute(this.$m_resources$.getMappedAttribute("sortable")) && 
            ($JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$.getAttribute(this.$m_resources$.getMappedAttribute("sortDir")), 
            (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)(this, $event$$23$$, $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$, $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ == 
            D.$JSCompiler_alias_NULL$$ || "descending" === $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ ? "ascending" : "descending"), $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = 
            D.$JSCompiler_alias_TRUE$$)) : $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = (0,D.$JSCompiler_StaticMethods__handleCutPasteKeydown$$)(this, $event$$23$$)
          }
        }else {
          $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = D.$JSCompiler_alias_VOID$$
        }
      }else {
        $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, this.createRange(this.$m_active$));
        if($JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ == D.$JSCompiler_alias_NULL$$ || $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$[0] != 
        (0,D.$JSCompiler_StaticMethods_findCell$$)(this, window.document.activeElement)) {
          return
        }
        $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = (0,D.$JSCompiler_StaticMethods__handleCutPasteKeydown$$)(this, $event$$23$$);
        if(!$JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$) {
          if((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this)) {
            if($JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = D.$JSCompiler_alias_FALSE$$, $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ = $event$$23$$.keyCode, 
            "actionable" == this.$m_keyMode$) {
              27 == $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ && ((0,D.$JSCompiler_StaticMethods_setActionableMode$$)(this, D.$JSCompiler_alias_FALSE$$), this.$highlightActive$(), $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = 
              D.$JSCompiler_alias_TRUE$$);
              if($JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$ = (0,D.$JSCompiler_StaticMethods_isArrowKey$$)($axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$)) {
                $JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$23$$.target), $JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$ = !(0 < (0,D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$)($JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$).length)
              }
              if($JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$) {
                (0,D.$JSCompiler_StaticMethods_setActionableMode$$)(this, D.$JSCompiler_alias_FALSE$$), $JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$23$$), $elem$$inline_9092_shiftKey$$inline_929$$ = $event$$23$$.shiftKey, (0,D.$JSCompiler_StaticMethods__updateStateInfo$$)(this, "accessibleStateSelected"), $JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$ || 
                ($JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = (0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)(this, $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$, 
                $elem$$inline_9092_shiftKey$$inline_929$$ && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this), $event$$23$$))
              }else {
                if(9 === $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ || 13 === $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$) {
                  $elem$$inline_9092_shiftKey$$inline_929$$ = $event$$23$$.shiftKey, $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ = 9 === $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ ? 
                  $elem$$inline_9092_shiftKey$$inline_929$$ ? 37 : 39 : $elem$$inline_9092_shiftKey$$inline_929$$ ? 38 : 40, (0,D.$JSCompiler_StaticMethods__updateStateInfo$$)(this, "accessibleStateSelected"), $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = (0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)(this, 
                  $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$, D.$JSCompiler_alias_FALSE$$, $event$$23$$)
                }
              }
            }else {
              if(113 == $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ || 13 == $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$) {
                (0,D.$JSCompiler_StaticMethods_setActionableMode$$)(this, D.$JSCompiler_alias_TRUE$$), $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$23$$.target), $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ = 
                (0,D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$)($axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$), 0 < $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$.length && 
                $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$[0].focus()
              }else {
                if((0,D.$JSCompiler_StaticMethods_isArrowKey$$)($axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$) || 36 == $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ || 35 == $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ || 
                33 == $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ || 34 == $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$) {
                  $JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$23$$), $elem$$inline_9092_shiftKey$$inline_929$$ = $event$$23$$.shiftKey, (0,D.$JSCompiler_StaticMethods__updateStateInfo$$)(this, "accessibleStateSelected"), $JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$ || ($JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = 
                  (0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)(this, $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$, $elem$$inline_9092_shiftKey$$inline_929$$ && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this)))
                }else {
                  if($event$$23$$.shiftKey && 119 == $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$) {
                    this.$m_discontiguousSelection$ = !this.$m_discontiguousSelection$
                  }else {
                    if(32 == $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ && ($JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$23$$), $elem$$inline_9092_shiftKey$$inline_929$$ = $event$$23$$.shiftKey, "cell" == this.$m_options$.$getSelectionMode$() && 
                    (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this) && ($elem$$inline_9092_shiftKey$$inline_929$$ && !$JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$ || $JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$))) {
                      $JSCompiler_temp$$8900_ctrlKey$$inline_928_elem$$inline_9102_index$$inline_9091_index$$inline_920$$ ? ($JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = this.$m_active$.column, (0,D.$JSCompiler_StaticMethods__selectEntireColumn$$)(this, $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$, 
                      $event$$23$$)) : ($JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = this.$m_active$.row, (0,D.$JSCompiler_StaticMethods__selectEntireRow$$)(this, $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$, 
                      $event$$23$$)), $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = D.$JSCompiler_alias_TRUE$$
                    }
                  }
                }
              }
            }
          }else {
            $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = $event$$23$$.target, $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ = $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$.tagName, 
            "INPUT" === $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ || "TEXTAREA" === $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ || "SELECT" === $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ || 
            "BUTTON" === $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ || "A" === $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ || $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$.getAttribute("tabIndex") != 
            D.$JSCompiler_alias_NULL$$ && 0 <= (0,window.parseInt)($JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$.getAttribute("tabIndex")) && (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$) != 
            $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ ? $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = 
            D.$JSCompiler_alias_VOID$$ : ($JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = $event$$23$$.keyCode, $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ = 
            ((0,D.$JSCompiler_StaticMethods_isArrowKey$$)($JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$) || 36 == $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ || 
            35 == $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ || 33 == $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ || 
            34 == $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$) && !(0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)(this.$m_utils$, $event$$23$$) ? (0,D.$JSCompiler_StaticMethods_handleCellArrowKeys$$)(this, $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$, 
            D.$JSCompiler_alias_FALSE$$, $event$$23$$) : D.$JSCompiler_alias_FALSE$$)
          }
        }
        $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)(this, $event$$23$$.target);
        $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ != D.$JSCompiler_alias_NULL$$ && ($axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ = $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$.parentNode, 
        $axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$ = this.$_getKey$($axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$), this.fireEvent("keydown", {event:$event$$23$$, ui:{rowKey:$axis$$inline_9090_axis$$inline_919_cell$$inline_940_elem$$inline_9105_elem$$inline_921_elems$$inline_9106_keyCode$$inline_922_keyCode$$inline_927_row$$inline_941_rowKey$$inline_942_tagName$$inline_9110$$}}))
      }
      $JSCompiler_temp$$297_cell$$2_column$$inline_930_direction$$inline_9099_elem$$inline_9109_keyCode$$inline_9088_keyCode$$inline_936_newCellIndex_newCellIndex$$inline_9093_processed$$1_processed$$inline_923_processed$$inline_932_row$$inline_931$$ === D.$JSCompiler_alias_TRUE$$ && $event$$23$$.preventDefault()
    }
  }
};
D.$JSCompiler_StaticMethods_findPos$$ = function $$JSCompiler_StaticMethods_findPos$$$($JSCompiler_StaticMethods_findPos$self$$, $element$$9$$) {
  var $parentPos$$, $cs$$inline_945_element$$inline_944_transform$$1_transform$$inline_946_transformX$$inline_948$$;
  if($element$$9$$) {
    $parentPos$$ = (0,D.$JSCompiler_StaticMethods_findPos$$)($JSCompiler_StaticMethods_findPos$self$$, $element$$9$$.offsetParent);
    $cs$$inline_945_element$$inline_944_transform$$1_transform$$inline_946_transformX$$inline_948$$ = $element$$9$$.parentNode;
    var $matrixArray$$inline_947_transformZ$$inline_950$$, $transformY$$inline_949$$;
    $cs$$inline_945_element$$inline_944_transform$$1_transform$$inline_946_transformX$$inline_948$$ ? ($cs$$inline_945_element$$inline_944_transform$$1_transform$$inline_946_transformX$$inline_948$$ = window.document.defaultView.getComputedStyle($cs$$inline_945_element$$inline_944_transform$$1_transform$$inline_946_transformX$$inline_948$$, D.$JSCompiler_alias_NULL$$), $cs$$inline_945_element$$inline_944_transform$$1_transform$$inline_946_transformX$$inline_948$$ = $cs$$inline_945_element$$inline_944_transform$$1_transform$$inline_946_transformX$$inline_948$$.getPropertyValue("-webkit-transform") || 
    $cs$$inline_945_element$$inline_944_transform$$1_transform$$inline_946_transformX$$inline_948$$.getPropertyValue("-moz-transform") || $cs$$inline_945_element$$inline_944_transform$$1_transform$$inline_946_transformX$$inline_948$$.getPropertyValue("-ms-transform") || $cs$$inline_945_element$$inline_944_transform$$1_transform$$inline_946_transformX$$inline_948$$.getPropertyValue("-o-transform") || $cs$$inline_945_element$$inline_944_transform$$1_transform$$inline_946_transformX$$inline_948$$.getPropertyValue("transform"), 
    $matrixArray$$inline_947_transformZ$$inline_950$$ = $cs$$inline_945_element$$inline_944_transform$$1_transform$$inline_946_transformX$$inline_948$$.substr(7, $cs$$inline_945_element$$inline_944_transform$$1_transform$$inline_946_transformX$$inline_948$$.length - 8).split(", "), $cs$$inline_945_element$$inline_944_transform$$1_transform$$inline_946_transformX$$inline_948$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_947_transformZ$$inline_950$$[4], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_947_transformZ$$inline_950$$[4], 
    10), $transformY$$inline_949$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_947_transformZ$$inline_950$$[5], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_947_transformZ$$inline_950$$[5], 10), $matrixArray$$inline_947_transformZ$$inline_950$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_947_transformZ$$inline_950$$[6], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_947_transformZ$$inline_950$$[6], 10), $cs$$inline_945_element$$inline_944_transform$$1_transform$$inline_946_transformX$$inline_948$$ = 
    [$cs$$inline_945_element$$inline_944_transform$$1_transform$$inline_946_transformX$$inline_948$$, $transformY$$inline_949$$, $matrixArray$$inline_947_transformZ$$inline_950$$]) : $cs$$inline_945_element$$inline_944_transform$$1_transform$$inline_946_transformX$$inline_948$$ = [0, 0, 0];
    return[(0,window.parseInt)($parentPos$$[0], 10) + (0,window.parseInt)($element$$9$$.offsetLeft, 10) + $cs$$inline_945_element$$inline_944_transform$$1_transform$$inline_946_transformX$$inline_948$$[0], (0,window.parseInt)($parentPos$$[1], 10) + (0,window.parseInt)($element$$9$$.offsetTop, 10) + $cs$$inline_945_element$$inline_944_transform$$1_transform$$inline_946_transformX$$inline_948$$[1]]
  }
  return[0, 0]
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDataGrid$$.prototype;
D.$JSCompiler_prototypeAlias$$.$handleDatabodyMouseWheel$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseWheel$$($deltaY$$inline_954_event$$25$$) {
  var $delta$$1_deltaX$$inline_953$$;
  $deltaY$$inline_954_event$$25$$.preventDefault();
  $deltaY$$inline_954_event$$25$$.wheelDeltaX ? ($delta$$1_deltaX$$inline_953$$ = $deltaY$$inline_954_event$$25$$.wheelDeltaX, $deltaY$$inline_954_event$$25$$ = $deltaY$$inline_954_event$$25$$.wheelDeltaY) : ($delta$$1_deltaX$$inline_953$$ = 0, $deltaY$$inline_954_event$$25$$ = $deltaY$$inline_954_event$$25$$.detail ? -40 * $deltaY$$inline_954_event$$25$$.detail : $deltaY$$inline_954_event$$25$$.wheelDelta);
  $delta$$1_deltaX$$inline_953$$ = {deltaX:$delta$$1_deltaX$$inline_953$$, deltaY:$deltaY$$inline_954_event$$25$$};
  (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, $delta$$1_deltaX$$inline_953$$.deltaX, $delta$$1_deltaX$$inline_953$$.deltaY)
};
D.$JSCompiler_prototypeAlias$$.$handleTouchStart$ = function $$JSCompiler_prototypeAlias$$$$handleTouchStart$$($event$$26$$) {
  var $dir$$9_target$$42$$, $selection$$;
  $event$$26$$.preventDefault();
  if(1 == $event$$26$$.touches.length) {
    this.$m_startX$ = $event$$26$$.touches[0].pageX;
    this.$m_startY$ = $event$$26$$.touches[0].pageY;
    this.$m_currentX$ = this.$m_startX$;
    this.$m_currentY$ = this.$m_startY$;
    this.$m_prevX$ = this.$m_startX$;
    this.$m_prevY$ = this.$m_startY$;
    this.$m_moveCount$ = 0;
    this.$m_touchActive$ = D.$JSCompiler_alias_TRUE$$;
    $dir$$9_target$$42$$ = $event$$26$$.touches[0].target;
    if((0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)(this)) {
      if($dir$$9_target$$42$$.className === this.getMappedStyle("selectaffordancetop") || $dir$$9_target$$42$$.className === this.getMappedStyle("selectaffordancebottom")) {
        $dir$$9_target$$42$$ = $dir$$9_target$$42$$.parentNode
      }
      if($dir$$9_target$$42$$ = $dir$$9_target$$42$$ === this.$m_topSelectIconContainer$ ? "top" : $dir$$9_target$$42$$ === this.$m_bottomSelectIconContainer$ ? "bottom" : D.$JSCompiler_alias_NULL$$) {
        this.$m_touchMultipleSelect$ = D.$JSCompiler_alias_TRUE$$, $selection$$ = this.$GetSelection$(), this.$m_touchSelectAnchor$ = "top" === $dir$$9_target$$42$$ ? $selection$$[$selection$$.length - 1].endIndex : $selection$$[$selection$$.length - 1].startIndex
      }
    }
    !this.$m_touchMultipleSelect$ && (0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)(this, this.find($event$$26$$.touches[0].target, "row")) && (this.$m_databodyMove$ = D.$JSCompiler_alias_TRUE$$)
  }else {
    this.$handleTouchCancel$()
  }
};
D.$JSCompiler_prototypeAlias$$.$handleTouchMove$ = function $$JSCompiler_prototypeAlias$$$$handleTouchMove$$($deltaX$$inline_957_event$$27$$) {
  var $diffX$$, $diffY$$;
  $deltaX$$inline_957_event$$27$$.preventDefault();
  this.$m_touchActive$ ? (this.$m_currentX$ = $deltaX$$inline_957_event$$27$$.touches[0].pageX, this.$m_currentY$ = $deltaX$$inline_957_event$$27$$.touches[0].pageY, $diffX$$ = this.$m_currentX$ - this.$m_prevX$, $diffY$$ = this.$m_currentY$ - this.$m_prevY$, this.$m_touchMultipleSelect$ ? (0,D.$JSCompiler_StaticMethods_handleDatabodySelectionDrag$$)(this, $deltaX$$inline_957_event$$27$$) : this.$m_databodyMove$ ? ((0,D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$)(this), (0,D.$JSCompiler_StaticMethods__handleMove$$)(this, 
  $deltaX$$inline_957_event$$27$$)) : 10 > window.Math.abs($diffX$$) && 10 > window.Math.abs($diffY$$) ? ($deltaX$$inline_957_event$$27$$ = $diffX$$, this.$m_resources$.isRTLMode() && ($deltaX$$inline_957_event$$27$$ *= -1), (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, 1.5 * $deltaX$$inline_957_event$$27$$, 1.5 * $diffY$$), this.$m_moveCount$++) : this.$m_moveCount$ = 0, this.$m_prevX$ = this.$m_currentX$, this.$m_prevY$ = this.$m_currentY$) : this.$handleTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$handleTouchEnd$$($event$$28_swipeLength$$) {
  var $swipeAngle_swipeAngle$$inline_961_swipeDir$$;
  $event$$28_swipeLength$$.preventDefault();
  if(this.$m_touchActive$) {
    if(this.$m_touchMultipleSelect$) {
      this.$m_touchMultipleSelect$ = D.$JSCompiler_alias_FALSE$$
    }else {
      if(this.$m_databodyMove$) {
        this.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$, (0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_TRUE$$)
      }else {
        if(this.$m_currentX$ == this.$m_startX$ && this.$m_currentY$ == this.$m_startY$) {
          (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) ? (0,D.$JSCompiler_StaticMethods_handleDatabodyClickSelection$$)(this, $event$$28_swipeLength$$) : (0,D.$JSCompiler_StaticMethods_handleDatabodyClickActive$$)(this, $event$$28_swipeLength$$);
          return
        }
        if(1 < this.$m_moveCount$) {
          this.$handleTouchCancel$();
          (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$)(this);
          return
        }
        $event$$28_swipeLength$$ = window.Math.round(window.Math.sqrt(window.Math.pow(this.$m_currentX$ - this.$m_startX$, 2) + window.Math.pow(this.$m_currentY$ - this.$m_startY$, 2)));
        if(0 < $event$$28_swipeLength$$) {
          $swipeAngle_swipeAngle$$inline_961_swipeDir$$ = window.Math.round(180 * window.Math.atan2(this.$m_currentY$ - this.$m_startY$, this.$m_startX$ - this.$m_currentX$) / window.Math.PI);
          0 > $swipeAngle_swipeAngle$$inline_961_swipeDir$$ && ($swipeAngle_swipeAngle$$inline_961_swipeDir$$ = 360 - window.Math.abs($swipeAngle_swipeAngle$$inline_961_swipeDir$$));
          var $rtl$$inline_965$$, $left$$inline_966$$;
          $left$$inline_966$$ = ($rtl$$inline_965$$ = this.$m_resources$.isRTLMode()) ? "right" : "left";
          $swipeAngle_swipeAngle$$inline_961_swipeDir$$ = 45 >= $swipeAngle_swipeAngle$$inline_961_swipeDir$$ && 0 <= $swipeAngle_swipeAngle$$inline_961_swipeDir$$ ? $left$$inline_966$$ : 360 >= $swipeAngle_swipeAngle$$inline_961_swipeDir$$ && 315 <= $swipeAngle_swipeAngle$$inline_961_swipeDir$$ ? $left$$inline_966$$ : 135 <= $swipeAngle_swipeAngle$$inline_961_swipeDir$$ && 225 >= $swipeAngle_swipeAngle$$inline_961_swipeDir$$ ? $rtl$$inline_965$$ ? "left" : "right" : 45 < $swipeAngle_swipeAngle$$inline_961_swipeDir$$ && 
          135 > $swipeAngle_swipeAngle$$inline_961_swipeDir$$ ? "down" : "up";
          this.$handleSwipe$($event$$28_swipeLength$$, $swipeAngle_swipeAngle$$inline_961_swipeDir$$);
          (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$)(this)
        }
      }
    }
  }
  this.$handleTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleTouchCancel$ = function $$JSCompiler_prototypeAlias$$$$handleTouchCancel$$() {
  this.$m_databodyMove$ && ((0,D.$JSCompiler_StaticMethods__handleMoveMouseUp$$)(this, D.$JSCompiler_alias_FALSE$$), this.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$);
  this.$m_touchSelectAnchor$ = D.$JSCompiler_alias_NULL$$;
  this.$m_touchActive$ = this.$m_touchMultipleSelect$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_currentY$ = this.$m_currentX$ = this.$m_prevY$ = this.$m_prevX$ = this.$m_startY$ = this.$m_startX$ = this.$m_moveCount$ = 0
};
D.$JSCompiler_prototypeAlias$$.$handleSwipe$ = function $$JSCompiler_prototypeAlias$$$$handleSwipe$$($swipeLength$$1$$, $swipeDirection$$) {
  $swipeLength$$1$$ *= 3.5;
  "down" == $swipeDirection$$ ? (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, 0, $swipeLength$$1$$) : "up" == $swipeDirection$$ ? (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, 0, -$swipeLength$$1$$) : "left" == $swipeDirection$$ ? (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, -$swipeLength$$1$$, 0) : "right" == $swipeDirection$$ && (0,D.$JSCompiler_StaticMethods_scrollDelta$$)(this, $swipeLength$$1$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchStart$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchStart$$($event$$30$$) {
  var $header$$6$$;
  $event$$30$$.preventDefault();
  this.$m_touchStart$ = (new window.Date).getTime();
  1 == $event$$30$$.touches.length ? (this.$m_startX$ = $event$$30$$.touches[0].pageX, this.$m_startY$ = $event$$30$$.touches[0].pageY, this.$m_currentX$ = this.$m_startX$, this.$m_currentY$ = this.$m_startY$, this.$m_prevX$ = this.$m_startX$, this.$m_prevY$ = this.$m_startY$, this.$m_moveCount$ = 0, this.$m_touchActive$ = D.$JSCompiler_alias_TRUE$$, $header$$6$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$30$$.target), (0,window.setTimeout)(function() {
    this.$m_touchActive$ && !this.$m_isResizing$ && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($header$$6$$, this.getMappedStyle("active"))
  }.bind(this), 500), (0,window.setTimeout)(function() {
    this.$m_touchActive$ && !this.$m_isResizing$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($header$$6$$, this.getMappedStyle("active"))
  }.bind(this), 1E3), (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && ((0,D.$JSCompiler_StaticMethods_handleResize$$)(this, $event$$30$$), (0,D.$JSCompiler_StaticMethods_handleResizeMouseDown$$)(this, $event$$30$$))) : this.$handleHeaderTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchMove$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchMove$$($event$$31$$) {
  $event$$31$$.preventDefault();
  this.$m_touchActive$ ? (this.$m_currentX$ = $event$$31$$.touches[0].pageX, this.$m_currentY$ = $event$$31$$.touches[0].pageY, this.$m_prevX$ = this.$m_currentX$, this.$m_prevY$ = this.$m_currentY$, (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_handleResize$$)(this, $event$$31$$)) : this.$handleTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchEnd$$($event$$32_headerIndex$$) {
  var $header$$7_headerAxis_touchLength$$;
  $event$$32_headerIndex$$.preventDefault();
  $header$$7_headerAxis_touchLength$$ = (new window.Date).getTime() - this.$m_touchStart$;
  this.$m_touchActive$ && ((0,D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$)(this), this.$m_isResizing$ && (0,D.$JSCompiler_StaticMethods_isResizeEnabled$$)(this) ? (0,D.$JSCompiler_StaticMethods_handleResizeMouseUp$$)(this, $event$$32_headerIndex$$) : 500 > $header$$7_headerAxis_touchLength$$ ? (0,D.$JSCompiler_StaticMethods__isDOMElementSortable$$)(this, $event$$32_headerIndex$$.target) && (0,D.$JSCompiler_StaticMethods__handleHeaderSort$$)(this, $event$$32_headerIndex$$) : 1E3 > 
  $header$$7_headerAxis_touchLength$$ && ($header$$7_headerAxis_touchLength$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)(this, $event$$32_headerIndex$$.target), $event$$32_headerIndex$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellIndex$$)(this, $header$$7_headerAxis_touchLength$$), $header$$7_headerAxis_touchLength$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellAxis$$)(this, $header$$7_headerAxis_touchLength$$), "row" === $header$$7_headerAxis_touchLength$$ ? (0,D.$JSCompiler_StaticMethods__focusRowHeader$$)(this, 
  $event$$32_headerIndex$$) : "column" === $header$$7_headerAxis_touchLength$$ && (0,D.$JSCompiler_StaticMethods__focusColumnHeader$$)(this, $event$$32_headerIndex$$)));
  this.$handleHeaderTouchCancel$()
};
D.$JSCompiler_prototypeAlias$$.$handleHeaderTouchCancel$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchCancel$$() {
  this.$m_touchActive$ = D.$JSCompiler_alias_FALSE$$;
  this.$m_currentY$ = this.$m_currentX$ = this.$m_prevY$ = this.$m_prevX$ = this.$m_startY$ = this.$m_startX$ = this.$m_moveCount$ = 0
};
D.$JSCompiler_prototypeAlias$$.fireEvent = function $$JSCompiler_prototypeAlias$$$fireEvent$($functionName$$, $details$$3$$) {
  var $callback$$26$$;
  $functionName$$ == D.$JSCompiler_alias_NULL$$ || $details$$3$$ == D.$JSCompiler_alias_NULL$$ || ($callback$$26$$ = this.$callbacks$[$functionName$$], $callback$$26$$ != D.$JSCompiler_alias_NULL$$ && $callback$$26$$($details$$3$$))
};
D.$JSCompiler_prototypeAlias$$.addListener = function $$JSCompiler_prototypeAlias$$$addListener$($functionName$$1$$, $handler$$3$$) {
  this.$callbacks$[$functionName$$1$$] = $handler$$3$$
};
D.$JSCompiler_StaticMethods_setElementHeight$$ = function $$JSCompiler_StaticMethods_setElementHeight$$$($elem$$6$$, $height$$22$$) {
  $elem$$6$$.style.height = $height$$22$$ + "px"
};
D.$JSCompiler_StaticMethods_getElementHeight$$ = function $$JSCompiler_StaticMethods_getElementHeight$$$($elem$$7$$) {
  return(0,window.parseInt)($elem$$7$$.style.height, 10)
};
D.$JSCompiler_StaticMethods_setElementWidth$$ = function $$JSCompiler_StaticMethods_setElementWidth$$$($elem$$8$$, $width$$22$$) {
  $elem$$8$$.style.width = $width$$22$$ + "px"
};
D.$JSCompiler_StaticMethods_getElementWidth$$ = function $$JSCompiler_StaticMethods_getElementWidth$$$($elem$$9$$) {
  return(0,window.parseInt)($elem$$9$$.style.width, 10)
};
D.$JSCompiler_StaticMethods_setElementDir$$ = function $$JSCompiler_StaticMethods_setElementDir$$$($elem$$10$$, $pix$$, $dir$$10$$) {
  $elem$$10$$.style[$dir$$10$$] = $pix$$ + "px"
};
D.$JSCompiler_StaticMethods_getElementDir$$ = function $$JSCompiler_StaticMethods_getElementDir$$$($elem$$11$$, $dir$$11$$) {
  return(0,window.parseInt)($elem$$11$$.style[$dir$$11$$], 10)
};
D.$JSCompiler_StaticMethods__isInViewport$$ = function $$JSCompiler_StaticMethods__isInViewport$$$($JSCompiler_StaticMethods__isInViewport$self$$, $indexes$$9$$) {
  var $rowIndex$$1$$, $columnIndex$$1$$;
  $rowIndex$$1$$ = $indexes$$9$$.row;
  $columnIndex$$1$$ = $indexes$$9$$.column;
  return-1 === $rowIndex$$1$$ && -1 === $columnIndex$$1$$ ? -1 : -1 === $rowIndex$$1$$ ? $columnIndex$$1$$ < $JSCompiler_StaticMethods__isInViewport$self$$.$m_startCol$ ? 1 : $columnIndex$$1$$ > $JSCompiler_StaticMethods__isInViewport$self$$.$m_endCol$ ? 2 : 3 : -1 === $columnIndex$$1$$ ? $rowIndex$$1$$ < $JSCompiler_StaticMethods__isInViewport$self$$.$m_startRow$ ? 1 : $rowIndex$$1$$ > $JSCompiler_StaticMethods__isInViewport$self$$.$m_endRow$ ? 2 : 3 : $columnIndex$$1$$ >= $JSCompiler_StaticMethods__isInViewport$self$$.$m_startCol$ && 
  $columnIndex$$1$$ <= $JSCompiler_StaticMethods__isInViewport$self$$.$m_endCol$ && $rowIndex$$1$$ >= $JSCompiler_StaticMethods__isInViewport$self$$.$m_startRow$ && $rowIndex$$1$$ <= $JSCompiler_StaticMethods__isInViewport$self$$.$m_endRow$ ? 3 : -1
};
D.$DvtDataGrid$$.prototype.$handleModelEvent$ = function $$DvtDataGrid$$$$$handleModelEvent$$($cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$) {
  var $height$$inline_990_key$$inline_985_operation$$1$$, $keys$$4$$, $databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$, $columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$;
  if(this.$m_initialized$) {
    if($height$$inline_990_key$$inline_985_operation$$1$$ = $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$.operation, $keys$$4$$ = $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$.keys, $columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$ = $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$.source, $databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$ = 
    $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$.indexes, "insert" === $height$$inline_990_key$$inline_985_operation$$1$$) {
      $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$ = $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$.result, $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$ != D.$JSCompiler_alias_NULL$$ ? $columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$ && $columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$ instanceof window.oj.FlattenedTreeDataGridDataSource ? (0,D.$JSCompiler_StaticMethods__handleModelInsertRangeEvent$$)(this, 
      $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$, D.$JSCompiler_alias_TRUE$$) : (0,D.$JSCompiler_StaticMethods__handleModelInsertRangeEvent$$)(this, $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$) : 3 === (0,D.$JSCompiler_StaticMethods__isInViewport$$)(this, $databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$) ? $keys$$4$$.row != D.$JSCompiler_alias_NULL$$ && (this.fetchHeaders("row", 
      $databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$.row, this.$m_rowHeader$, 1, {success:this.$_handleHeaderInsertsFetchSuccess$}), this.fetchCells(this.$m_databody$, this.$m_scroller$, $databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$.row, this.$m_startCol$, 1, this.$m_endCol$ - this.$m_startCol$, {success:this.$_handleCellInsertsFetchSuccess$})) : 
      ($databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$ = $databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$.row * this.$m_avgRowHeight$, this.$m_scroller$.scrollTop = $databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$)
    }else {
      if("update" === $height$$inline_990_key$$inline_985_operation$$1$$) {
        3 === (0,D.$JSCompiler_StaticMethods__isInViewport$$)(this, $databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$) && ($databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$ = {axis:"row", start:$databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$.row, 
        count:1}, $columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$ = {axis:"column", start:this.$m_startCol$, count:this.$m_endCol$ - this.$m_startCol$}, (0,D.$JSCompiler_StaticMethods_showStatusText$$)(this), this.$m_dataSource$.fetchCells([$databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$, $columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$], {success:this.$_handleCellUpdatesFetchSuccess$, 
        error:this.$handleHeadersFetchError$}, {success:this, error:this}))
      }else {
        if("delete" === $height$$inline_990_key$$inline_985_operation$$1$$) {
          if($columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$ && $columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$ instanceof window.oj.FlattenedTreeDataGridDataSource) {
            var $self$$inline_981$$ = this;
            (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)((0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $keys$$4$$[0].row).parentNode, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 1E4);
            (0,window.setTimeout)(function() {
              var $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$, $height$$inline_990_key$$inline_985_operation$$1$$, $databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$, $columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$, $rowHeader$$inline_995_rowKey$$inline_987$$, $row$$inline_988$$, $referenceRow$$inline_991$$, $databodyContent$$inline_9123$$, $clickedRow$$inline_9125$$, 
              $keyAttribute$$inline_9126$$, $start$$inline_9127$$, $firstRowCase$$inline_9128$$, $transition_duration$$inline_9129$$, $transition_delay$$inline_9130$$, $transition_timing$$inline_9131$$, $transform$$inline_9132$$;
              $firstRowCase$$inline_9128$$ = D.$JSCompiler_alias_FALSE$$;
              $databodyContent$$inline_9123$$ = $self$$inline_981$$.$m_databody$.firstChild;
              $clickedRow$$inline_9125$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($self$$inline_981$$, $keys$$4$$[0].row).previousSibling;
              0 == $clickedRow$$inline_9125$$.childElementCount && ($clickedRow$$inline_9125$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($self$$inline_981$$, $keys$$4$$[0].row), $firstRowCase$$inline_9128$$ = D.$JSCompiler_alias_TRUE$$);
              $keyAttribute$$inline_9126$$ = $self$$inline_981$$.$m_resources$.getMappedAttribute("key");
              for($height$$inline_990_key$$inline_985_operation$$1$$ = $keys$$4$$.length - 1;0 <= $height$$inline_990_key$$inline_985_operation$$1$$;$height$$inline_990_key$$inline_985_operation$$1$$--) {
                $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$ = $keys$$4$$[$height$$inline_990_key$$inline_985_operation$$1$$], $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$.row && ($cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$ = $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$.row, $rowHeader$$inline_995_rowKey$$inline_987$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($self$$inline_981$$, $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$), 
                $rowHeader$$inline_995_rowKey$$inline_987$$ != D.$JSCompiler_alias_NULL$$ ? ($row$$inline_988$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($rowHeader$$inline_995_rowKey$$inline_987$$), $referenceRow$$inline_991$$ = $rowHeader$$inline_995_rowKey$$inline_987$$.nextSibling, (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($rowHeader$$inline_995_rowKey$$inline_987$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), "-1" + ($height$$inline_990_key$$inline_985_operation$$1$$ + 
                1)), (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($rowHeader$$inline_995_rowKey$$inline_987$$, "300ms", 0, "ease-out", "-" + $rowHeader$$inline_995_rowKey$$inline_987$$.offsetTop), $height$$inline_990_key$$inline_985_operation$$1$$ == $keys$$4$$.length - 1 && $rowHeader$$inline_995_rowKey$$inline_987$$.addEventListener("transitionend", function() {
                  for($databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$ = 0;$databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$ < $keys$$4$$.length;$databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$++) {
                    $keys$$4$$[$databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$].row && ($rowHeader$$inline_995_rowKey$$inline_987$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($self$$inline_981$$, $keys$$4$$[$databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$].row), $rowHeader$$inline_995_rowKey$$inline_987$$.parentNode.removeChild($rowHeader$$inline_995_rowKey$$inline_987$$), 
                    $rowHeader$$inline_995_rowKey$$inline_987$$.style.display = "none")
                  }
                  (0,window.setTimeout)(function() {
                    $transition_duration$$inline_9129$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-duration");
                    $transition_delay$$inline_9130$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-delay");
                    $transition_timing$$inline_9131$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-timing-function");
                    $transform$$inline_9132$$ = (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform");
                    $start$$inline_9127$$ = -1;
                    for($columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$ = 1;$columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$ < $databodyContent$$inline_9123$$.childElementCount;$columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$++) {
                      $clickedRow$$inline_9125$$.attributes[$keyAttribute$$inline_9126$$] && $clickedRow$$inline_9125$$.attributes[$keyAttribute$$inline_9126$$].value == $databodyContent$$inline_9123$$.childNodes[$columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$].attributes[$keyAttribute$$inline_9126$$].value && ($start$$inline_9127$$ = $columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$ + 1), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$inline_9123$$.childNodes[$columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$], 
                      (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("z-index"), 0, "remove"), $databodyContent$$inline_9123$$.children[$columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$].style[$transform$$inline_9132$$] && ((0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$inline_9123$$.childNodes[$columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$], $transition_duration$$inline_9129$$, 0, "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$inline_9123$$.childNodes[$columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$], 
                      $transition_delay$$inline_9130$$, 0, "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$inline_9123$$.childNodes[$columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$], $transition_timing$$inline_9131$$, "linear", "remove"), (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($databodyContent$$inline_9123$$.childNodes[$columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$], $transform$$inline_9132$$, 
                      0, "remove")), 0 < $start$$inline_9127$$ ? $databodyContent$$inline_9123$$.childNodes[$columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$].style.top = $clickedRow$$inline_9125$$.offsetTop + 30 * ($columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$ - $start$$inline_9127$$ + 1) + "px" : $firstRowCase$$inline_9128$$ && ($databodyContent$$inline_9123$$.childNodes[$columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$].style.top = 
                      $clickedRow$$inline_9125$$.offsetTop + 30 * ($columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$ - 1) + "px"), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($self$$inline_981$$) && ((0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)($self$$inline_981$$), (0,D.$JSCompiler_StaticMethods__clearSelection$$)($self$$inline_981$$))
                    }
                  }, 0);
                  this.removeEventListener("transitionend", arguments.callee, D.$JSCompiler_alias_FALSE$$)
                }, D.$JSCompiler_alias_FALSE$$)) : $row$$inline_988$$ = $self$$inline_981$$.$m_avgRowHeight$, $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($self$$inline_981$$, $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$), $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$ != D.$JSCompiler_alias_NULL$$ && ($row$$inline_988$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$), 
                $referenceRow$$inline_991$$ = $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$.nextSibling, (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($referenceRow$$inline_991$$, 0 - $row$$inline_988$$), $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$.parentNode.removeChild($cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$), $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$.style.display = "none", $self$$inline_981$$.$m_endRowHeader$ -= 
                1, $self$$inline_981$$.$m_endRowHeaderPixel$ -= $row$$inline_988$$), $self$$inline_981$$.$m_endRow$ -= 1, $self$$inline_981$$.$m_endRowPixel$ -= $row$$inline_988$$)
              }
              $height$$inline_990_key$$inline_985_operation$$1$$ = $referenceRow$$inline_991$$;
              $row$$inline_988$$ *= $keys$$4$$.length;
              var $i$$inline_10979$$, $databodyContent$$inline_10980$$, $scrollerContent$$inline_10981$$, $databodyContentHeight$$inline_10982$$;
              for($databodyContentHeight$$inline_10982$$ = 0;$height$$inline_990_key$$inline_985_operation$$1$$;) {
                (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($height$$inline_990_key$$inline_985_operation$$1$$, "300ms", 0, "linear", "-" + $row$$inline_988$$), $height$$inline_990_key$$inline_985_operation$$1$$.nextSibling || $height$$inline_990_key$$inline_985_operation$$1$$.addEventListener("transitionend", function() {
                  $databodyContent$$inline_10980$$ = $self$$inline_981$$.$m_databody$.firstChild;
                  $scrollerContent$$inline_10981$$ = $self$$inline_981$$.$m_scroller$.firstChild;
                  for($i$$inline_10979$$ = 1;$i$$inline_10979$$ < $databodyContent$$inline_10980$$.childElementCount;$i$$inline_10979$$++) {
                    $databodyContentHeight$$inline_10982$$ += $databodyContent$$inline_10980$$.childNodes[$i$$inline_10979$$].clientHeight
                  }
                  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyContent$$inline_10980$$, $databodyContentHeight$$inline_10982$$);
                  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scrollerContent$$inline_10981$$, $databodyContentHeight$$inline_10982$$);
                  (0,D.$JSCompiler_StaticMethods_resizeGrid$$)($self$$inline_981$$);
                  $self$$inline_981$$.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
                  (0,D.$JSCompiler_StaticMethods_fillViewport$$)($self$$inline_981$$, $self$$inline_981$$.$m_currentScrollLeft$, $self$$inline_981$$.$m_currentScrollTop$);
                  (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)($self$$inline_981$$)
                }, D.$JSCompiler_alias_FALSE$$), $height$$inline_990_key$$inline_985_operation$$1$$ = $height$$inline_990_key$$inline_985_operation$$1$$.nextSibling
              }
            }, 0)
          }else {
            $columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$ = $keys$$4$$;
            var $rowHeader$$inline_995_rowKey$$inline_987$$, $row$$inline_988$$, $referenceRow$$inline_991$$;
            window.Array.isArray($columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$) || ($columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$ = (0,window.Array)($columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$));
            for($cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$ = $databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$ = 0;$cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$ < $columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$.length;$cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$++) {
              $height$$inline_990_key$$inline_985_operation$$1$$ = $columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$[$cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$], $height$$inline_990_key$$inline_985_operation$$1$$.row != D.$JSCompiler_alias_NULL$$ && ($rowHeader$$inline_995_rowKey$$inline_987$$ = $height$$inline_990_key$$inline_985_operation$$1$$.row, $row$$inline_988$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $rowHeader$$inline_995_rowKey$$inline_987$$), 
              $row$$inline_988$$ != D.$JSCompiler_alias_NULL$$ ? ($height$$inline_990_key$$inline_985_operation$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($row$$inline_988$$), $referenceRow$$inline_991$$ = $row$$inline_988$$.nextSibling, (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($referenceRow$$inline_991$$, 0 - $height$$inline_990_key$$inline_985_operation$$1$$), $row$$inline_988$$.parentNode.removeChild($row$$inline_988$$), $row$$inline_988$$.style.display = "none") : $height$$inline_990_key$$inline_985_operation$$1$$ = 
              this.$m_avgRowHeight$, $rowHeader$$inline_995_rowKey$$inline_987$$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)(this, $rowHeader$$inline_995_rowKey$$inline_987$$), $rowHeader$$inline_995_rowKey$$inline_987$$ != D.$JSCompiler_alias_NULL$$ && ($height$$inline_990_key$$inline_985_operation$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($rowHeader$$inline_995_rowKey$$inline_987$$), $referenceRow$$inline_991$$ = $rowHeader$$inline_995_rowKey$$inline_987$$.nextSibling, 
              (0,D.$JSCompiler_StaticMethods_pushRowsDown$$)($referenceRow$$inline_991$$, 0 - $height$$inline_990_key$$inline_985_operation$$1$$), $rowHeader$$inline_995_rowKey$$inline_987$$.parentNode.removeChild($rowHeader$$inline_995_rowKey$$inline_987$$), $rowHeader$$inline_995_rowKey$$inline_987$$.style.display = "none", this.$m_endRowHeader$ -= 1, this.$m_endRowHeaderPixel$ -= $height$$inline_990_key$$inline_985_operation$$1$$), this.$m_endRow$ -= 1, this.$m_endRowPixel$ -= $height$$inline_990_key$$inline_985_operation$$1$$, 
              $databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$ += $height$$inline_990_key$$inline_985_operation$$1$$)
            }
            $columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$ = this.$m_databody$.firstChild;
            $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$ = this.$m_scroller$.firstChild;
            $databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$) - $databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$;
            (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($columnRange$$inline_977_databodyContent$$inline_992_keys$$inline_984_source$$3$$, $databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$);
            (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$, $databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$);
            (0,D.$JSCompiler_StaticMethods_resizeGrid$$)(this);
            this.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$;
            (0,D.$JSCompiler_StaticMethods_fillViewport$$)(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
            (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)(this)
          }
        }else {
          "refresh" === $height$$inline_990_key$$inline_985_operation$$1$$ ? (this.empty(), this.refresh(this.$m_root$)) : "sync" === $height$$inline_990_key$$inline_985_operation$$1$$ && ($databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$ = $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$.pageSize, this.$m_fetching$ = {}, this.$m_endColHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_endColPixel$ = 
          this.$m_startColPixel$ = this.$m_endColHeader$ = this.$m_startColHeader$ = this.$m_endCol$ = this.$m_startCol$ = this.$m_endRowHeaderPixel$ = this.$m_startRowHeaderPixel$ = this.$m_endRowPixel$ = this.$m_startRowPixel$ = this.$m_endRowHeader$ = this.$m_startRowHeader$ = this.$m_endRow$ = this.$m_startRow$ = 0, this.$m_cachedRowHeight$ = [], this.$m_cachedColumnWidth$ = [], this.$m_cachedColumnWidthStartIndex$ = this.$m_cachedRowHeightStartIndex$ = 0, this.$m_captureScrolling$ = this.$m_stopDatabodyScroll$ = 
          D.$JSCompiler_alias_FALSE$$, this.$m_isEstimateColumnCount$ = this.$m_isEstimateRowCount$ = this.$m_avgColWidth$ = this.$m_avgRowHeight$ = D.$JSCompiler_alias_VOID$$, this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = D.$JSCompiler_alias_FALSE$$, this.$m_prevActive$ = this.$m_active$ = this.$m_selection$ = D.$JSCompiler_alias_NULL$$, this.$m_initialized$ ? (this.fetchHeaders("row", 0, this.$m_rowHeader$, $databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$, 
          {success:function($cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$, $height$$inline_990_key$$inline_985_operation$$1$$) {
            (0,D.$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$)(this, $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$, $height$$inline_990_key$$inline_985_operation$$1$$, 0)
          }}), this.fetchHeaders("column", 0, this.$m_colHeader$, D.$JSCompiler_alias_VOID$$, {success:function($cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$, $height$$inline_990_key$$inline_985_operation$$1$$) {
            this.$m_colHeader$.firstChild.innerHTML = "";
            this.$handleHeadersFetchSuccess$($cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$, $height$$inline_990_key$$inline_985_operation$$1$$)
          }}), this.fetchCells(this.$m_databody$, this.$m_scroller$, 0, 0, $databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$, D.$JSCompiler_alias_NULL$$, {success:function($cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$, $height$$inline_990_key$$inline_985_operation$$1$$) {
            (0,D.$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$)(this, $cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$, $height$$inline_990_key$$inline_985_operation$$1$$, 0)
          }}), (0,D.$JSCompiler_StaticMethods_setInitialScrollPosition$$)(this)) : (this.fetchHeaders("column", 0, this.$m_colHeader$), this.fetchHeaders("row", 0, this.$m_rowHeader$, $databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$), this.fetchCells(this.$m_databody$, this.$m_scroller$, 0, 0, $databodyContentHeight$$inline_994_indexes$$10_pageSize$$inline_1001_rowRange$$inline_976_scrollTop$$inline_972_totalHeight$$inline_989$$)))
        }
      }
    }
  }else {
    this.$m_modelEvents$ == D.$JSCompiler_alias_VOID$$ && (this.$m_modelEvents$ = []), this.$m_modelEvents$.push($cellSet$$7_event$$34_i$$inline_986_scrollerContent$$inline_993$$)
  }
};
D.$DvtDataGrid$$.prototype.$_handleCellInsertsFetchSuccess$ = function $$DvtDataGrid$$$$$_handleCellInsertsFetchSuccess$$($cellSet$$8$$, $cellRanges$$1$$, $animate$$1$$) {
  this.$m_initialized$ = D.$JSCompiler_alias_FALSE$$;
  this.$handleCellsFetchSuccess$($cellSet$$8$$, $cellRanges$$1$$, this.$m_endRow$ > $cellRanges$$1$$[0].start, $animate$$1$$);
  (0,D.$JSCompiler_StaticMethods__scrollRowIntoViewport$$)(this, $cellRanges$$1$$[0].start);
  (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) || (0,D.$JSCompiler_StaticMethods__cleanupViewport$$)(this);
  (0,D.$JSCompiler_StaticMethods_updateRowBanding$$)(this)
};
D.$DvtDataGrid$$.prototype.$_handleHeaderInsertsFetchSuccess$ = function $$DvtDataGrid$$$$$_handleHeaderInsertsFetchSuccess$$($headerSet$$6$$, $headerRanges$$) {
  this.$m_initialized$ = D.$JSCompiler_alias_FALSE$$;
  this.$handleHeadersFetchSuccess$($headerSet$$6$$, $headerRanges$$, this.$m_endRowHeader$ > $headerRanges$$.start);
  (0,D.$JSCompiler_StaticMethods__scrollRowIntoViewport$$)(this, $headerRanges$$.start);
  (0,D.$JSCompiler_StaticMethods__isHighWatermarkScrolling$$)(this) || (0,D.$JSCompiler_StaticMethods__cleanupViewport$$)(this)
};
D.$JSCompiler_StaticMethods__scrollRowIntoViewport$$ = function $$JSCompiler_StaticMethods__scrollRowIntoViewport$$$($JSCompiler_StaticMethods__scrollRowIntoViewport$self$$, $index$$53$$) {
  var $row$$19_rowTop$$, $diff$$1_viewportTop$$2$$, $viewportBottom$$3$$;
  $row$$19_rowTop$$ = $JSCompiler_StaticMethods__scrollRowIntoViewport$self$$.$m_databody$.firstChild.childNodes[$index$$53$$ - $JSCompiler_StaticMethods__scrollRowIntoViewport$self$$.$m_startRow$ + 1];
  $row$$19_rowTop$$ != D.$JSCompiler_alias_NULL$$ && ($diff$$1_viewportTop$$2$$ = $JSCompiler_StaticMethods__scrollRowIntoViewport$self$$.$m_currentScrollTop$, $viewportBottom$$3$$ = $JSCompiler_StaticMethods__scrollRowIntoViewport$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods__scrollRowIntoViewport$self$$.$m_databody$), $row$$19_rowTop$$ = $row$$19_rowTop$$.offsetTop, $diff$$1_viewportTop$$2$$ -= $row$$19_rowTop$$, 0 < $diff$$1_viewportTop$$2$$ ? 
  (0,D.$JSCompiler_StaticMethods_scrollDelta$$)($JSCompiler_StaticMethods__scrollRowIntoViewport$self$$, 0, $diff$$1_viewportTop$$2$$) : ($diff$$1_viewportTop$$2$$ = $viewportBottom$$3$$ - $row$$19_rowTop$$, 0 > $diff$$1_viewportTop$$2$$ && (0,D.$JSCompiler_StaticMethods_scrollDelta$$)($JSCompiler_StaticMethods__scrollRowIntoViewport$self$$, 0, $diff$$1_viewportTop$$2$$)))
};
D.$JSCompiler_StaticMethods__cleanupViewport$$ = function $$JSCompiler_StaticMethods__cleanupViewport$$$($JSCompiler_StaticMethods__cleanupViewport$self$$) {
  var $viewportTop$$3$$, $viewportBottom$$4$$;
  $viewportTop$$3$$ = $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_currentScrollTop$;
  $viewportBottom$$4$$ = $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods__cleanupViewport$self$$.$m_databody$);
  $viewportTop$$3$$ > $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_startRowPixel$ ? $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods__cleanupViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromTop$$)($JSCompiler_StaticMethods__cleanupViewport$self$$, $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_databody$) : $viewportBottom$$4$$ < $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_endRowPixel$ && 
  $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods__cleanupViewport$self$$.$MAX_ROW_THRESHOLD$ && (0,D.$JSCompiler_StaticMethods_removeRowsFromBottom$$)($JSCompiler_StaticMethods__cleanupViewport$self$$, $JSCompiler_StaticMethods__cleanupViewport$self$$.$m_databody$)
};
D.$JSCompiler_StaticMethods__handleModelInsertRangeEvent$$ = function $$JSCompiler_StaticMethods__handleModelInsertRangeEvent$$$($JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$, $cellSet$$9$$, $animate$$2$$) {
  var $rowRange$$4$$, $columnRange$$4$$;
  $rowRange$$4$$ = {axis:"row", start:$cellSet$$9$$.getStart("row"), count:$cellSet$$9$$.getCount("row")};
  $columnRange$$4$$ = {axis:"column", start:$cellSet$$9$$.getStart("column"), count:$cellSet$$9$$.getCount("column")};
  $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$_handleCellInsertsFetchSuccess$($cellSet$$9$$, [$rowRange$$4$$, $columnRange$$4$$], $animate$$2$$)
};
D.$DvtDataGrid$$.prototype.$_handleCellUpdatesFetchSuccess$ = function $$DvtDataGrid$$$$$_handleCellUpdatesFetchSuccess$$($cellSet$$10$$, $cellRange$$7$$) {
  var $rowStart$$8$$, $databodyContent$$10$$, $renderer$$5$$, $columnBandingInterval$$3$$, $rowIndex$$2$$;
  $rowStart$$8$$ = $cellRange$$7$$[0].start;
  $databodyContent$$10$$ = this.$m_databody$.firstChild;
  $renderer$$5$$ = (0,D.$JSCompiler_StaticMethods_getRenderer$$)(this.$m_options$, "cell");
  $columnBandingInterval$$3$$ = (0,D.$JSCompiler_StaticMethods_getColumnBandingInterval$$)(this.$m_options$);
  $rowIndex$$2$$ = $rowStart$$8$$ - this.$m_startRow$;
  var $row$$inline_1011$$ = $databodyContent$$10$$.childNodes[$rowIndex$$2$$ + 1], $columnStart$$inline_1014$$ = this.$m_startCol$;
  $row$$inline_1011$$.style.left = this.getWidth() + "px";
  (0,window.setTimeout)(function() {
    $row$$inline_1011$$.innerHTML = "";
    (0,D.$JSCompiler_StaticMethods_addCellsToRow$$)(this, $cellSet$$10$$, $row$$inline_1011$$, $rowIndex$$2$$, $renderer$$5$$, D.$JSCompiler_alias_TRUE$$, $columnStart$$inline_1014$$, D.$JSCompiler_alias_FALSE$$, $columnBandingInterval$$3$$);
    (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this);
    (0,window.setTimeout)(function() {
      $row$$inline_1011$$.style.left = "0px"
    }, 250);
    (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)(this) && (0,D.$JSCompiler_StaticMethods_applySelection$$)(this);
    this.$highlightActive$(D.$JSCompiler_alias_FALSE$$)
  }.bind(this), 250)
};
D.$JSCompiler_StaticMethods__findRowByKey$$ = function $$JSCompiler_StaticMethods__findRowByKey$$$($JSCompiler_StaticMethods__findRowByKey$self$$, $key$$35$$) {
  var $rows$$5$$, $row$$25$$, $i$$23$$, $rowKey$$3$$, $keyAttribute$$2$$;
  if($JSCompiler_StaticMethods__findRowByKey$self$$.$m_databody$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $rows$$5$$ = $JSCompiler_StaticMethods__findRowByKey$self$$.$m_databody$.firstChild.childNodes;
  $keyAttribute$$2$$ = $JSCompiler_StaticMethods__findRowByKey$self$$.$m_resources$.getMappedAttribute("key");
  for($i$$23$$ = 1;$i$$23$$ < $rows$$5$$.length;$i$$23$$++) {
    if($row$$25$$ = $rows$$5$$[$i$$23$$], $rowKey$$3$$ = $row$$25$$.getAttribute($keyAttribute$$2$$), $rowKey$$3$$ == $key$$35$$) {
      return $row$$25$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__findRowHeaderByKey$$ = function $$JSCompiler_StaticMethods__findRowHeaderByKey$$$($JSCompiler_StaticMethods__findRowHeaderByKey$self$$, $key$$36$$) {
  var $rows$$6$$, $row$$26$$, $i$$24$$, $rowKey$$4$$, $keyAttribute$$3$$;
  if($JSCompiler_StaticMethods__findRowHeaderByKey$self$$.$m_rowHeader$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $rows$$6$$ = $JSCompiler_StaticMethods__findRowHeaderByKey$self$$.$m_rowHeader$.firstChild.childNodes;
  $keyAttribute$$3$$ = $JSCompiler_StaticMethods__findRowHeaderByKey$self$$.$m_resources$.getMappedAttribute("key");
  for($i$$24$$ = 1;$i$$24$$ < $rows$$6$$.length;$i$$24$$++) {
    if($row$$26$$ = $rows$$6$$[$i$$24$$], $rowKey$$4$$ = $row$$26$$.getAttribute($keyAttribute$$3$$), $rowKey$$4$$ == $key$$36$$) {
      return $row$$26$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$ = function $$JSCompiler_StaticMethods__findColumnHeaderByKey$$$($JSCompiler_StaticMethods__findColumnHeaderByKey$self$$, $key$$37$$) {
  var $columns$$2$$, $column$$4$$, $i$$25$$, $columnKey$$, $keyAttribute$$4$$;
  if($JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.$m_colHeader$ == D.$JSCompiler_alias_NULL$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $columns$$2$$ = $JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.$m_colHeader$.firstChild.childNodes;
  $keyAttribute$$4$$ = $JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.$m_resources$.getMappedAttribute("key");
  for($i$$25$$ = 0;$i$$25$$ < $columns$$2$$.length;$i$$25$$++) {
    if($column$$4$$ = $columns$$2$$[$i$$25$$], $columnKey$$ = $column$$4$$.getAttribute($keyAttribute$$4$$), $columnKey$$ == $key$$37$$) {
      return $column$$4$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDataGrid$$.prototype.setActive = function $$DvtDataGrid$$$$setActive$($active$$, $event$$36$$, $callback$$27$$) {
  $active$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods__keys$$)(this, {row:$active$$.row, column:$active$$.column}, this.$_setActiveCallback$.bind(this, $event$$36$$, $callback$$27$$)) : (this.$m_prevActive$ = this.$m_active$, this.$m_active$ = $active$$)
};
D.$DvtDataGrid$$.prototype.$_setActiveCallback$ = function $$DvtDataGrid$$$$$_setActiveCallback$$($event$$37$$, $callback$$28$$, $keys$$10$$, $indexes$$13$$) {
  if(this.$m_active$ == D.$JSCompiler_alias_NULL$$ || $keys$$10$$.row != this.$m_active$.rowKey || $keys$$10$$.column != this.$m_active$.columnKey) {
    $indexes$$13$$.rowKey = $keys$$10$$.row, $indexes$$13$$.columnKey = $keys$$10$$.column, this.$m_prevActive$ = this.$m_active$, this.$m_active$ = $indexes$$13$$, this.fireEvent("active", {event:$event$$37$$, ui:{previousActiveKey:this.$m_prevActive$, activeKey:this.$m_active$}})
  }
  $callback$$28$$.call(this)
};
D.$JSCompiler_StaticMethods_handleDatabodyClickActive$$ = function $$JSCompiler_StaticMethods_handleDatabodyClickActive$$$($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$, $event$$39$$) {
  var $cell$$4$$, $index$$54$$;
  $cell$$4$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$, $event$$39$$.target);
  $cell$$4$$ != D.$JSCompiler_alias_NULL$$ && ($index$$54$$ = $JSCompiler_StaticMethods_handleDatabodyClickActive$self$$.createIndex($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$.$getRowIndex$($cell$$4$$.parentNode), $JSCompiler_StaticMethods_handleDatabodyClickActive$self$$.$getCellIndex$($cell$$4$$)));
  $index$$54$$ != D.$JSCompiler_alias_NULL$$ && $index$$54$$ != D.$JSCompiler_alias_VOID$$ && ((0,D.$JSCompiler_StaticMethods__setActiveHeader$$)($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$, -1), $JSCompiler_StaticMethods_handleDatabodyClickActive$self$$.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$, $index$$54$$), $JSCompiler_StaticMethods_handleDatabodyClickActive$self$$.$activeAndFocus$($index$$54$$, 
  $event$$39$$))
};
D.$DvtDataGrid$$.prototype.$activeAndFocus$ = function $$DvtDataGrid$$$$$activeAndFocus$$($index$$55$$, $event$$40$$) {
  this.$m_active$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unhighlightActive$$)(this);
  this.setActive($index$$55$$, $event$$40$$, this.$highlightActive$.bind(this, D.$JSCompiler_alias_VOID$$))
};
D.$DvtDataGrid$$.prototype.$getRowIndex$ = function $$DvtDataGrid$$$$$getRowIndex$$($row$$27$$) {
  for(var $index$$56$$ = this.$m_startRow$;$row$$27$$.previousSibling;) {
    $index$$56$$ += 1, $row$$27$$ = $row$$27$$.previousSibling
  }
  return $index$$56$$ - 1
};
D.$DvtDataGrid$$.prototype.$getCellIndex$ = function $$DvtDataGrid$$$$$getCellIndex$$($cell$$5$$) {
  for(var $index$$57$$ = this.$m_startCol$;$cell$$5$$.previousSibling;) {
    $index$$57$$ += 1, $cell$$5$$ = $cell$$5$$.previousSibling
  }
  return $index$$57$$
};
D.$JSCompiler_StaticMethods_getHeaderCellIndex$$ = function $$JSCompiler_StaticMethods_getHeaderCellIndex$$$($JSCompiler_StaticMethods_getHeaderCellIndex$self$$, $header$$8$$) {
  var $axis$$23$$, $index$$58$$;
  $axis$$23$$ = (0,D.$JSCompiler_StaticMethods_getHeaderCellAxis$$)($JSCompiler_StaticMethods_getHeaderCellIndex$self$$, $header$$8$$);
  "row" === $axis$$23$$ ? ($index$$58$$ = $JSCompiler_StaticMethods_getHeaderCellIndex$self$$.$m_startRowHeader$ - 1, $header$$8$$ = $header$$8$$.parentNode) : "column" === $axis$$23$$ && ($index$$58$$ = $JSCompiler_StaticMethods_getHeaderCellIndex$self$$.$m_startColHeader$);
  for(;$header$$8$$.previousSibling;) {
    $index$$58$$ += 1, $header$$8$$ = $header$$8$$.previousSibling
  }
  return $index$$58$$
};
D.$JSCompiler_StaticMethods_getHeaderCellAxis$$ = function $$JSCompiler_StaticMethods_getHeaderCellAxis$$$($JSCompiler_StaticMethods_getHeaderCellAxis$self$$, $header$$9$$) {
  return(0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$9$$, $JSCompiler_StaticMethods_getHeaderCellAxis$self$$.getMappedStyle("colheadercell")) ? "column" : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$9$$, $JSCompiler_StaticMethods_getHeaderCellAxis$self$$.getMappedStyle("rowheadercell")) ? "row" : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_findCell$$ = function $$JSCompiler_StaticMethods_findCell$$$($JSCompiler_StaticMethods_findCell$self$$, $elem$$12$$) {
  return $JSCompiler_StaticMethods_findCell$self$$.find($elem$$12$$, "cell")
};
D.$DvtDataGrid$$.prototype.find = function $$DvtDataGrid$$$$find$($elem$$13$$, $key$$38$$, $className$$12$$) {
  if($elem$$13$$ == D.$JSCompiler_alias_NULL$$ || $elem$$13$$ == this.$m_root$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $className$$12$$ == D.$JSCompiler_alias_VOID$$ && ($className$$12$$ = this.getMappedStyle($key$$38$$));
  return $className$$12$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($elem$$13$$, $className$$12$$) ? $elem$$13$$ : this.find($elem$$13$$.parentNode, $key$$38$$, $className$$12$$)
};
D.$DvtDataGrid$$.prototype.$highlightActive$ = function $$DvtDataGrid$$$$$highlightActive$$($focus$$) {
  var $cell$$6$$, $skip$$;
  this.$m_active$ != D.$JSCompiler_alias_NULL$$ && ($cell$$6$$ = (0,D.$JSCompiler_StaticMethods_highlightIndex$$)(this, this.$m_active$, "active"));
  $cell$$6$$ != D.$JSCompiler_alias_NULL$$ && (this.$m_prevActive$ != D.$JSCompiler_alias_NULL$$ && this.$m_active$ != D.$JSCompiler_alias_NULL$$ && (this.$m_prevActive$.row === this.$m_active$.row ? $skip$$ = "row" : this.$m_prevActive$.column === this.$m_active$.column && ($skip$$ = "column")), (0,D.$JSCompiler_StaticMethods_setAriaProperties$$)(this, $cell$$6$$, $focus$$ === D.$JSCompiler_alias_VOID$$ || $focus$$ === D.$JSCompiler_alias_TRUE$$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_VOID$$, 
  $skip$$))
};
D.$JSCompiler_StaticMethods_unhighlightActive$$ = function $$JSCompiler_StaticMethods_unhighlightActive$$$($JSCompiler_StaticMethods_unhighlightActive$self$$, $selectActive$$) {
  var $cell$$7$$, $selectedClassName$$;
  $cell$$7$$ = (0,D.$JSCompiler_StaticMethods_unhighlightIndex$$)($JSCompiler_StaticMethods_unhighlightActive$self$$, $JSCompiler_StaticMethods_unhighlightActive$self$$.$m_active$, D.$JSCompiler_alias_TRUE$$);
  $selectActive$$ && ($selectedClassName$$ = $JSCompiler_StaticMethods_unhighlightActive$self$$.getMappedStyle("selected"), $selectedClassName$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_highlightIndex$$)($JSCompiler_StaticMethods_unhighlightActive$self$$, $JSCompiler_StaticMethods_unhighlightActive$self$$.$m_active$, $selectedClassName$$));
  $cell$$7$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unsetAriaProperties$$)($cell$$7$$)
};
D.$JSCompiler_StaticMethods_highlightIndex$$ = function $$JSCompiler_StaticMethods_highlightIndex$$$($JSCompiler_StaticMethods_highlightIndex$self$$, $index$$59$$, $className$$13_style$$2$$) {
  var $cell$$8_range$$5_singleCell$$;
  $cell$$8_range$$5_singleCell$$ = $JSCompiler_StaticMethods_highlightIndex$self$$.createRange($index$$59$$);
  $cell$$8_range$$5_singleCell$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_highlightIndex$self$$, $cell$$8_range$$5_singleCell$$);
  if(!($cell$$8_range$$5_singleCell$$ == D.$JSCompiler_alias_NULL$$ || 0 == $cell$$8_range$$5_singleCell$$.length)) {
    return $className$$13_style$$2$$ == D.$JSCompiler_alias_VOID$$ && ($className$$13_style$$2$$ = "selected"), $cell$$8_range$$5_singleCell$$ = $cell$$8_range$$5_singleCell$$[0], $className$$13_style$$2$$ = $JSCompiler_StaticMethods_highlightIndex$self$$.getMappedStyle($className$$13_style$$2$$), $className$$13_style$$2$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($cell$$8_range$$5_singleCell$$, $className$$13_style$$2$$), $index$$59$$.row && $index$$59$$.column && 
    (0,D.$JSCompiler_StaticMethods_setAriaProperties$$)($JSCompiler_StaticMethods_highlightIndex$self$$, $cell$$8_range$$5_singleCell$$)), $cell$$8_range$$5_singleCell$$
  }
};
D.$JSCompiler_StaticMethods_unhighlightIndex$$ = function $$JSCompiler_StaticMethods_unhighlightIndex$$$($JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$, $cell$$9_index$$60_range$$6_singleCell$$1$$, $activeOnly$$) {
  var $activeClassName$$;
  $cell$$9_index$$60_range$$6_singleCell$$1$$ = $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$.createRange($cell$$9_index$$60_range$$6_singleCell$$1$$);
  $cell$$9_index$$60_range$$6_singleCell$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$, $cell$$9_index$$60_range$$6_singleCell$$1$$);
  if(!($cell$$9_index$$60_range$$6_singleCell$$1$$ == D.$JSCompiler_alias_NULL$$ || 0 == $cell$$9_index$$60_range$$6_singleCell$$1$$.length)) {
    $cell$$9_index$$60_range$$6_singleCell$$1$$ = $cell$$9_index$$60_range$$6_singleCell$$1$$[0];
    $activeClassName$$ = $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$.getMappedStyle("active");
    $activeClassName$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($cell$$9_index$$60_range$$6_singleCell$$1$$, $activeClassName$$);
    if($activeOnly$$ == D.$JSCompiler_alias_VOID$$ || !$activeOnly$$) {
      $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$ = $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$.getMappedStyle("selected"), $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($cell$$9_index$$60_range$$6_singleCell$$1$$, $JSCompiler_StaticMethods_unhighlightIndex$self_selectedClassName$$1$$), (0,D.$JSCompiler_StaticMethods_unsetAriaProperties$$)($cell$$9_index$$60_range$$6_singleCell$$1$$))
    }
    return $cell$$9_index$$60_range$$6_singleCell$$1$$
  }
};
D.$JSCompiler_StaticMethods_setAriaProperties$$ = function $$JSCompiler_StaticMethods_setAriaProperties$$$($JSCompiler_StaticMethods_setAriaProperties$self$$, $cell$$10$$, $focus$$1$$, $colIndex$$inline_1041_skip$$1$$) {
  $cell$$10$$.setAttribute("id", (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setAriaProperties$self$$, "active"));
  $cell$$10$$.setAttribute("tabIndex", 0);
  var $label$$inline_1037$$, $columns$$inline_1042_row$$inline_1038_rowIndex$$inline_1039$$, $rows$$inline_1040$$;
  $label$$inline_1037$$ = "";
  $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_rowHeader$ != D.$JSCompiler_alias_NULL$$ && "row" != $colIndex$$inline_1041_skip$$1$$ && ($columns$$inline_1042_row$$inline_1038_rowIndex$$inline_1039$$ = $cell$$10$$.parentNode, $columns$$inline_1042_row$$inline_1038_rowIndex$$inline_1039$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($columns$$inline_1042_row$$inline_1038_rowIndex$$inline_1039$$), -1 < $columns$$inline_1042_row$$inline_1038_rowIndex$$inline_1039$$ && ($rows$$inline_1040$$ = 
  $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_rowHeader$.firstChild.childNodes, $columns$$inline_1042_row$$inline_1038_rowIndex$$inline_1039$$ < $rows$$inline_1040$$.length && ($label$$inline_1037$$ = $rows$$inline_1040$$[$columns$$inline_1042_row$$inline_1038_rowIndex$$inline_1039$$].id)));
  $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && "column" != $colIndex$$inline_1041_skip$$1$$ && ($colIndex$$inline_1041_skip$$1$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($cell$$10$$), -1 < $colIndex$$inline_1041_skip$$1$$ && ($columns$$inline_1042_row$$inline_1038_rowIndex$$inline_1039$$ = $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_colHeader$.firstChild.childNodes, $colIndex$$inline_1041_skip$$1$$ < $columns$$inline_1042_row$$inline_1038_rowIndex$$inline_1039$$.length && 
  ($label$$inline_1037$$ = "" == $label$$inline_1037$$ ? $columns$$inline_1042_row$$inline_1038_rowIndex$$inline_1039$$[$colIndex$$inline_1041_skip$$1$$].id : [$label$$inline_1037$$, $columns$$inline_1042_row$$inline_1038_rowIndex$$inline_1039$$[$colIndex$$inline_1041_skip$$1$$].id].join(" "))));
  $label$$inline_1037$$ = "" == $label$$inline_1037$$ ? (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setAriaProperties$self$$, "active") : [$label$$inline_1037$$, (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setAriaProperties$self$$, "active")].join(" ");
  $label$$inline_1037$$ = [$label$$inline_1037$$, (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setAriaProperties$self$$, "state")].join(" ");
  $cell$$10$$.setAttribute("aria-labelledby", $label$$inline_1037$$);
  $focus$$1$$ != D.$JSCompiler_alias_VOID$$ && ($JSCompiler_StaticMethods_setAriaProperties$self$$.$m_cellToFocus$ == D.$JSCompiler_alias_NULL$$ || $JSCompiler_StaticMethods_setAriaProperties$self$$.$m_cellToFocus$ != $cell$$10$$) && $cell$$10$$.focus()
};
D.$JSCompiler_StaticMethods_unsetAriaProperties$$ = function $$JSCompiler_StaticMethods_unsetAriaProperties$$$($cell$$11$$) {
  $cell$$11$$.setAttribute("tabIndex", -1);
  $cell$$11$$.removeAttribute("id");
  $cell$$11$$.removeAttribute("aria-labelledby")
};
D.$JSCompiler_StaticMethods_getHeaderFromCell$$ = function $$JSCompiler_StaticMethods_getHeaderFromCell$$$($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$, $cell$$13_colIndex$$1_row$$29_rowIndex$$5$$, $axis$$24$$) {
  if("row" === $axis$$24$$) {
    if($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$.$m_rowHeader$ != D.$JSCompiler_alias_NULL$$ && ($cell$$13_colIndex$$1_row$$29_rowIndex$$5$$ = $cell$$13_colIndex$$1_row$$29_rowIndex$$5$$.parentNode, $cell$$13_colIndex$$1_row$$29_rowIndex$$5$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($cell$$13_colIndex$$1_row$$29_rowIndex$$5$$), -1 < $cell$$13_colIndex$$1_row$$29_rowIndex$$5$$ && ($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$ = $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$.$m_rowHeader$.firstChild.childNodes, 
    $cell$$13_colIndex$$1_row$$29_rowIndex$$5$$ < $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$.length))) {
      return $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$[$cell$$13_colIndex$$1_row$$29_rowIndex$$5$$]
    }
  }else {
    if("column" === $axis$$24$$ && $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && ($cell$$13_colIndex$$1_row$$29_rowIndex$$5$$ = (0,D.$JSCompiler_StaticMethods_findIndexOf$$)($cell$$13_colIndex$$1_row$$29_rowIndex$$5$$), -1 < $cell$$13_colIndex$$1_row$$29_rowIndex$$5$$ && ($JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$ = $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$.$m_colHeader$.firstChild.childNodes, 
    $cell$$13_colIndex$$1_row$$29_rowIndex$$5$$ < $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$.length))) {
      return $JSCompiler_StaticMethods_getHeaderFromCell$self_columns$$4_rows$$8$$[$cell$$13_colIndex$$1_row$$29_rowIndex$$5$$]
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_findIndexOf$$ = function $$JSCompiler_StaticMethods_findIndexOf$$$($elem$$14$$) {
  var $child$$2$$, $children$$1$$, $index$$61$$, $i$$26$$;
  $children$$1$$ = $elem$$14$$.parentNode.childNodes;
  $index$$61$$ = -1;
  for($i$$26$$ = 0;$i$$26$$ < $children$$1$$.length;$i$$26$$ += 1) {
    $child$$2$$ = $children$$1$$[$i$$26$$];
    if($child$$2$$ === $elem$$14$$) {
      return $index$$61$$ + 1
    }
    "DIV" == $child$$2$$.nodeName && $index$$61$$++
  }
  return $index$$61$$
};
D.$DvtDataGrid$$.prototype.createRange = function $$DvtDataGrid$$$$createRange$($startIndex$$, $endColumn_endIndex$$1$$, $startKey$$, $endKey$$) {
  var $startRow$$3$$, $endRow$$, $startColumn$$, $startRowKey$$, $endRowKey$$, $startColumnKey$$, $endColumnKey$$;
  $endColumn_endIndex$$1$$ && ($startIndex$$.row < $endColumn_endIndex$$1$$.row || -1 == $endColumn_endIndex$$1$$.row ? ($startRow$$3$$ = $startIndex$$.row, $endRow$$ = $endColumn_endIndex$$1$$.row, $startKey$$ && ($startRowKey$$ = $startKey$$.row, $endRowKey$$ = $endKey$$.row)) : ($startRow$$3$$ = $endColumn_endIndex$$1$$.row, $endRow$$ = $startIndex$$.row, $startKey$$ && ($startRowKey$$ = $endKey$$.row, $endRowKey$$ = $startKey$$.row)), !(0,window.isNaN)($startIndex$$.column) && !(0,window.isNaN)($endColumn_endIndex$$1$$.column) ? 
  ($startIndex$$.column < $endColumn_endIndex$$1$$.column || -1 == $endColumn_endIndex$$1$$.column ? ($startColumn$$ = $startIndex$$.column, $endColumn_endIndex$$1$$ = $endColumn_endIndex$$1$$.column, $startKey$$ && ($startColumnKey$$ = $startKey$$.column, $endColumnKey$$ = $endKey$$.column)) : ($startColumn$$ = $endColumn_endIndex$$1$$.column, $endColumn_endIndex$$1$$ = $startIndex$$.column, $startKey$$ && ($startColumnKey$$ = $endKey$$.column, $endColumnKey$$ = $startKey$$.column)), $startIndex$$ = 
  {row:$startRow$$3$$, column:$startColumn$$}, $endColumn_endIndex$$1$$ = {row:$endRow$$, column:$endColumn_endIndex$$1$$}) : ($startIndex$$ = {row:$startRow$$3$$}, $endColumn_endIndex$$1$$ = {row:$endRow$$}), $startKey$$ && ($startKey$$ = {row:$startRowKey$$, column:$startColumnKey$$}, $endKey$$ = {row:$endRowKey$$, column:$endColumnKey$$}));
  return $startKey$$ ? {startIndex:$startIndex$$, endIndex:$endColumn_endIndex$$1$$, startKey:$startKey$$, endKey:$endKey$$} : {startIndex:$startIndex$$, endIndex:$endColumn_endIndex$$1$$}
};
D.$DvtDataGrid$$.prototype.$_createRangeStartKeyCallback$ = function $$DvtDataGrid$$$$$_createRangeStartKeyCallback$$($endIndex$$3$$, $callback$$30$$, $startKey$$1$$, $startIndex$$2$$) {
  $endIndex$$3$$ === $startIndex$$2$$ ? this.$_createRangeEndKeyCallback$($startKey$$1$$, $startIndex$$2$$, $callback$$30$$, $startKey$$1$$, $startIndex$$2$$) : $endIndex$$3$$ ? (0,D.$JSCompiler_StaticMethods__keys$$)(this, $endIndex$$3$$, this.$_createRangeEndKeyCallback$.bind(this, $startKey$$1$$, $startIndex$$2$$, $callback$$30$$)) : $callback$$30$$.call(this, {startIndex:$startIndex$$2$$, endIndex:$startIndex$$2$$, startKey:$startKey$$1$$, endKey:$startKey$$1$$})
};
D.$DvtDataGrid$$.prototype.$_createRangeEndKeyCallback$ = function $$DvtDataGrid$$$$$_createRangeEndKeyCallback$$($startKey$$2$$, $startIndex$$3$$, $callback$$31$$, $endKey$$1$$, $endIndex$$4$$) {
  $callback$$31$$.call(this, this.createRange($startIndex$$3$$, $endIndex$$4$$, $startKey$$2$$, $endKey$$1$$))
};
D.$JSCompiler_StaticMethods_getElementsInRange$$ = function $$JSCompiler_StaticMethods_getElementsInRange$$$($JSCompiler_StaticMethods_getElementsInRange$self_i$$27$$, $range$$8_rangeEndRow$$, $nodes_startRow$$4$$, $endRow$$1_rows$$9$$) {
  var $j$$9_startIndex$$4$$, $cell$$14_endIndex$$5$$, $columns$$5_rangeStartRow$$, $rangeStartColumn_row$$30$$, $rangeEndColumn$$;
  $nodes_startRow$$4$$ == D.$JSCompiler_alias_VOID$$ && ($nodes_startRow$$4$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$27$$.$m_startRow$);
  $endRow$$1_rows$$9$$ == D.$JSCompiler_alias_VOID$$ && ($endRow$$1_rows$$9$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$27$$.$m_endRow$);
  $j$$9_startIndex$$4$$ = $range$$8_rangeEndRow$$.startIndex;
  $cell$$14_endIndex$$5$$ = $range$$8_rangeEndRow$$.endIndex == D.$JSCompiler_alias_NULL$$ ? $range$$8_rangeEndRow$$.startIndex : $range$$8_rangeEndRow$$.endIndex;
  $columns$$5_rangeStartRow$$ = $j$$9_startIndex$$4$$.row;
  $range$$8_rangeEndRow$$ = $cell$$14_endIndex$$5$$.row;
  -1 == $range$$8_rangeEndRow$$ && ($range$$8_rangeEndRow$$ = window.Number.MAX_VALUE);
  if($endRow$$1_rows$$9$$ < $columns$$5_rangeStartRow$$ || $range$$8_rangeEndRow$$ < $nodes_startRow$$4$$ || !(0,window.isNaN)($j$$9_startIndex$$4$$.column) && !(0,window.isNaN)($cell$$14_endIndex$$5$$.column) && ($rangeStartColumn_row$$30$$ = $j$$9_startIndex$$4$$.column, $rangeEndColumn$$ = $cell$$14_endIndex$$5$$.column, -1 == $rangeEndColumn$$ && ($rangeEndColumn$$ = window.Number.MAX_VALUE), $JSCompiler_StaticMethods_getElementsInRange$self_i$$27$$.$m_endCol$ < $rangeStartColumn_row$$30$$ || 
  $rangeEndColumn$$ < $JSCompiler_StaticMethods_getElementsInRange$self_i$$27$$.$m_startCol$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  $nodes_startRow$$4$$ = [];
  $endRow$$1_rows$$9$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$27$$.$m_databody$.firstChild.childNodes;
  $columns$$5_rangeStartRow$$ = window.Math.max(0, $columns$$5_rangeStartRow$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$27$$.$m_startRow$);
  $range$$8_rangeEndRow$$ = window.Math.min($endRow$$1_rows$$9$$.length - 1, $range$$8_rangeEndRow$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$27$$.$m_startRow$ + 1);
  if(!(0,window.isNaN)($rangeStartColumn_row$$30$$) && !(0,window.isNaN)($rangeEndColumn$$)) {
    $rangeStartColumn_row$$30$$ = window.Math.max(0, $rangeStartColumn_row$$30$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$27$$.$m_startCol$);
    $rangeEndColumn$$ = $rangeEndColumn$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$27$$.$m_startCol$ + 1;
    for($JSCompiler_StaticMethods_getElementsInRange$self_i$$27$$ = $columns$$5_rangeStartRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$27$$ < $range$$8_rangeEndRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$27$$ += 1) {
      $columns$$5_rangeStartRow$$ = $endRow$$1_rows$$9$$[$JSCompiler_StaticMethods_getElementsInRange$self_i$$27$$ + 1].childNodes;
      for($j$$9_startIndex$$4$$ = $rangeStartColumn_row$$30$$;$j$$9_startIndex$$4$$ < window.Math.min($columns$$5_rangeStartRow$$.length, $rangeEndColumn$$);$j$$9_startIndex$$4$$ += 1) {
        $cell$$14_endIndex$$5$$ = $columns$$5_rangeStartRow$$[$j$$9_startIndex$$4$$], $nodes_startRow$$4$$.push($cell$$14_endIndex$$5$$)
      }
    }
  }else {
    for($JSCompiler_StaticMethods_getElementsInRange$self_i$$27$$ = $columns$$5_rangeStartRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$27$$ < $range$$8_rangeEndRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$27$$ += 1) {
      $rangeStartColumn_row$$30$$ = $endRow$$1_rows$$9$$[$JSCompiler_StaticMethods_getElementsInRange$self_i$$27$$ + 1], $nodes_startRow$$4$$.push($rangeStartColumn_row$$30$$)
    }
  }
  return $nodes_startRow$$4$$
};
D.$JSCompiler_StaticMethods_isArrowKey$$ = function $$JSCompiler_StaticMethods_isArrowKey$$$($keyCode$$2$$) {
  return 38 == $keyCode$$2$$ || 40 == $keyCode$$2$$ || 37 == $keyCode$$2$$ || 39 == $keyCode$$2$$
};
D.$DvtDataGrid$$.prototype.createIndex = function $$DvtDataGrid$$$$createIndex$($row$$31$$, $column$$5$$) {
  return $row$$31$$ != D.$JSCompiler_alias_NULL$$ ? $column$$5$$ != D.$JSCompiler_alias_NULL$$ ? {row:$row$$31$$, column:$column$$5$$} : {row:$row$$31$$} : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_setHeaderAriaProperties$$ = function $$JSCompiler_StaticMethods_setHeaderAriaProperties$$$($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$, $header$$10$$) {
  var $labelledBy$$, $key$$39$$;
  $labelledBy$$ = $header$$10$$.id;
  window.direction = $header$$10$$.getAttribute($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$.$m_resources$.getMappedAttribute("sortDir"));
  "ascending" === window.direction ? ($key$$39$$ = "accessibleSortAscending", $labelledBy$$ = $labelledBy$$ + " " + (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$, "state")) : "descending" === window.direction && ($key$$39$$ = "accessibleSortDescending", $labelledBy$$ = $labelledBy$$ + " " + (0,D.$JSCompiler_StaticMethods_createSubId$$)($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$, "state"));
  $key$$39$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods__updateStateInfo$$)($JSCompiler_StaticMethods_setHeaderAriaProperties$self$$, $key$$39$$, {id:""});
  $header$$10$$.setAttribute("tabIndex", 0);
  $header$$10$$.setAttribute("aria-labelledby", $labelledBy$$);
  $header$$10$$.focus()
};
D.$JSCompiler_StaticMethods__setActiveHeader$$ = function $$JSCompiler_StaticMethods__setActiveHeader$$$($JSCompiler_StaticMethods__setActiveHeader$self$$, $index$$64$$, $elem$$18$$, $axis$$27$$) {
  var $activeClassName$$1$$ = $JSCompiler_StaticMethods__setActiveHeader$self$$.getMappedStyle("active");
  if($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem != D.$JSCompiler_alias_NULL$$) {
    "row" === $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis ? $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild, $activeClassName$$1$$) : (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem, $activeClassName$$1$$);
    var $header$$inline_1044$$ = $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem;
    $header$$inline_1044$$.setAttribute("tabIndex", -1);
    $header$$inline_1044$$.removeAttribute("aria-labelledby")
  }
  -1 != $index$$64$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ == D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$ = {}), $axis$$27$$ != D.$JSCompiler_alias_VOID$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis = $axis$$27$$), $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.index = $index$$64$$, $elem$$18$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem = 
  $elem$$18$$, "row" === $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.axis ? $JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem.firstChild, $activeClassName$$1$$) : (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__setActiveHeader$self$$.$m_activeHeader$.elem, $activeClassName$$1$$), 
  (0,D.$JSCompiler_StaticMethods_setHeaderAriaProperties$$)($JSCompiler_StaticMethods__setActiveHeader$self$$, $elem$$18$$)))
};
D.$JSCompiler_StaticMethods__scrollToActiveHeader$$ = function $$JSCompiler_StaticMethods__scrollToActiveHeader$$$($JSCompiler_StaticMethods__scrollToActiveHeader$self$$) {
  var $axis$$28$$, $index$$65$$, $elem$$19$$, $indexes$$14$$;
  $axis$$28$$ = $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_activeHeader$.axis;
  $index$$65$$ = $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_activeHeader$.index;
  $elem$$19$$ = $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_activeHeader$.elem;
  "column" === $axis$$28$$ ? $indexes$$14$$ = {row:0, column:$index$$65$$} : "row" === $axis$$28$$ && ($indexes$$14$$ = {row:$index$$65$$, column:0});
  (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods__scrollToActiveHeader$self$$, $indexes$$14$$);
  $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_cellToFocus$ != D.$JSCompiler_alias_NULL$$ ? ($elem$$19$$.setAttribute("tabIndex", 0), $JSCompiler_StaticMethods__scrollToActiveHeader$self$$.$m_cellToFocus$ = $elem$$19$$) : $elem$$19$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setHeaderAriaProperties$$)($JSCompiler_StaticMethods__scrollToActiveHeader$self$$, $elem$$19$$)
};
D.$JSCompiler_StaticMethods_handleCellArrowKeys$$ = function $$JSCompiler_StaticMethods_handleCellArrowKeys$$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $isExtend$$, $event$$44$$) {
  var $currentCellIndex$$, $row$$32$$, $column$$6$$, $processed$$4$$, $focusFunc$$;
  if(!(0,D.$JSCompiler_StaticMethods_isFetchComplete$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$)) {
    return D.$JSCompiler_alias_TRUE$$
  }
  $currentCellIndex$$ = $isExtend$$ ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_selectionFrontier$ : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$;
  if($currentCellIndex$$ != D.$JSCompiler_alias_NULL$$) {
    $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_resources$.isRTLMode() && (37 == $keyCode$$5_newCellIndex$$2$$ ? $keyCode$$5_newCellIndex$$2$$ = 39 : 39 == $keyCode$$5_newCellIndex$$2$$ && ($keyCode$$5_newCellIndex$$2$$ = 37));
    $focusFunc$$ = (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$selectAndFocus$.bind($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$activeAndFocus$.bind($JSCompiler_StaticMethods_handleCellArrowKeys$self$$);
    $processed$$4$$ = D.$JSCompiler_alias_FALSE$$;
    $row$$32$$ = $currentCellIndex$$.row;
    $column$$6$$ = $currentCellIndex$$.column;
    switch($keyCode$$5_newCellIndex$$2$$) {
      case 37:
        0 < $column$$6$$ ? ("row" == $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_options$.$getSelectionMode$() ? ($keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$.row, $column$$6$$ - 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $isExtend$$), $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$activeAndFocus$($keyCode$$5_newCellIndex$$2$$, 
        $event$$44$$)) : ($keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$, $column$$6$$ - 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $event$$44$$) : $focusFunc$$($keyCode$$5_newCellIndex$$2$$, 
        $event$$44$$)), $processed$$4$$ = D.$JSCompiler_alias_TRUE$$) : $isExtend$$ || ((0,D.$JSCompiler_StaticMethods__focusRowHeader$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $row$$32$$), $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_rowHeader$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_rowHeader$.firstChild && ($processed$$4$$ = D.$JSCompiler_alias_TRUE$$));
        break;
      case 39:
        (0,D.$JSCompiler_StaticMethods__isLastColumn$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $column$$6$$) ? $isExtend$$ || ($focusFunc$$($currentCellIndex$$, $event$$44$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $currentCellIndex$$), (0,D.$JSCompiler_StaticMethods__isLastColumn$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $column$$6$$) || ($processed$$4$$ = D.$JSCompiler_alias_TRUE$$)) : ("row" == $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_options$.$getSelectionMode$() ? 
        ($keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$.row, $column$$6$$ + 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $isExtend$$), $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$activeAndFocus$($keyCode$$5_newCellIndex$$2$$, $event$$44$$)) : ($keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$, 
        $column$$6$$ + 1), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $event$$44$$) : $focusFunc$$($keyCode$$5_newCellIndex$$2$$, $event$$44$$)), $processed$$4$$ = D.$JSCompiler_alias_TRUE$$);
        break;
      case 38:
        0 < $row$$32$$ ? ($keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$ - 1, $column$$6$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $event$$44$$) : $focusFunc$$($keyCode$$5_newCellIndex$$2$$, 
        $event$$44$$), $processed$$4$$ = D.$JSCompiler_alias_TRUE$$) : $isExtend$$ || ((0,D.$JSCompiler_StaticMethods__focusColumnHeader$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $column$$6$$), $processed$$4$$ = D.$JSCompiler_alias_TRUE$$);
        break;
      case 40:
        (0,D.$JSCompiler_StaticMethods__isLastRow$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $row$$32$$) ? $isExtend$$ || ($focusFunc$$($currentCellIndex$$, $event$$44$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $currentCellIndex$$), (0,D.$JSCompiler_StaticMethods__isLastRow$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $row$$32$$) || ($processed$$4$$ = D.$JSCompiler_alias_TRUE$$)) : ($keyCode$$5_newCellIndex$$2$$ = 
        $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$ + 1, $column$$6$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$, $event$$44$$) : $focusFunc$$($keyCode$$5_newCellIndex$$2$$, $event$$44$$), $processed$$4$$ = D.$JSCompiler_alias_TRUE$$);
        break;
      case 36:
        $keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$, 0);
        $focusFunc$$($keyCode$$5_newCellIndex$$2$$, $event$$44$$);
        (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$);
        $processed$$4$$ = D.$JSCompiler_alias_TRUE$$;
        break;
      case 35:
        $keyCode$$5_newCellIndex$$2$$ = (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "column") ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$, window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_endCol$ - 1)) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$, window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_dataSource$.getCount("column") - 
        1));
        $focusFunc$$($keyCode$$5_newCellIndex$$2$$, $event$$44$$);
        (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$);
        $processed$$4$$ = D.$JSCompiler_alias_TRUE$$;
        break;
      case 33:
        $keyCode$$5_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex(0, $column$$6$$);
        $focusFunc$$($keyCode$$5_newCellIndex$$2$$, $event$$44$$);
        (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$);
        $processed$$4$$ = D.$JSCompiler_alias_TRUE$$;
        break;
      case 34:
        $keyCode$$5_newCellIndex$$2$$ = (0,D.$JSCompiler_StaticMethods__isCountUnknown$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "column") ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex(window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_endRow$ - 1), $column$$6$$) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex(window.Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_dataSource$.getCount("row") - 1), $column$$6$$), 
        $focusFunc$$($keyCode$$5_newCellIndex$$2$$, $event$$44$$), (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$5_newCellIndex$$2$$), $processed$$4$$ = D.$JSCompiler_alias_TRUE$$
    }
    $isExtend$$ && $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_discontiguousSelection$ && ($JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_discontiguousSelection$ = D.$JSCompiler_alias_FALSE$$);
    return $processed$$4$$
  }
};
D.$JSCompiler_StaticMethods__focusColumnHeader$$ = function $$JSCompiler_StaticMethods__focusColumnHeader$$$($JSCompiler_StaticMethods__focusColumnHeader$self$$, $columnIndex$$2$$) {
  var $column$$7_relIndex$$, $columns$$6$$;
  $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_colHeader$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_colHeader$.firstChild && ($column$$7_relIndex$$ = $columnIndex$$2$$ - $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_startColHeader$, $columns$$6$$ = $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_colHeader$.firstChild.childNodes, $column$$7_relIndex$$ < $columns$$6$$.length && ($column$$7_relIndex$$ = $columns$$6$$[$column$$7_relIndex$$], 
  $JSCompiler_StaticMethods__focusColumnHeader$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$), $JSCompiler_StaticMethods__focusColumnHeader$self$$.setActive(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$) && (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$)), 
  (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)($JSCompiler_StaticMethods__focusColumnHeader$self$$, $columnIndex$$2$$, $column$$7_relIndex$$, "column")))
};
D.$JSCompiler_StaticMethods__focusRowHeader$$ = function $$JSCompiler_StaticMethods__focusRowHeader$$$($JSCompiler_StaticMethods__focusRowHeader$self$$, $rowIndex$$6$$) {
  var $relIndex$$1_row$$33$$, $rows$$10$$;
  $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_rowHeader$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_rowHeader$.firstChild && ($relIndex$$1_row$$33$$ = $rowIndex$$6$$ - $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_startRowHeader$ + 1, $rows$$10$$ = $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_rowHeader$.firstChild.childNodes, $relIndex$$1_row$$33$$ < $rows$$10$$.length && ($relIndex$$1_row$$33$$ = $rows$$10$$[$relIndex$$1_row$$33$$], 
  $JSCompiler_StaticMethods__focusRowHeader$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods__focusRowHeader$self$$), $JSCompiler_StaticMethods__focusRowHeader$self$$.setActive(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__focusRowHeader$self$$) && (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__focusRowHeader$self$$)), (0,D.$JSCompiler_StaticMethods__setActiveHeader$$)($JSCompiler_StaticMethods__focusRowHeader$self$$, 
  $rowIndex$$6$$, $relIndex$$1_row$$33$$, "row")))
};
D.$JSCompiler_StaticMethods_scrollToIndex$$ = function $$JSCompiler_StaticMethods_scrollToIndex$$$($JSCompiler_StaticMethods_scrollToIndex$self$$, $cellLeft_index$$67$$, $isExtend$$1$$) {
  var $cellWidth_row$$34$$, $column$$8_viewportLeft$$2$$, $deltaX$$4_scrollLeft$$9$$, $deltaY$$4_scrollTop$$9$$, $databodyContent$$16_viewportRight$$3_viewportTop$$4$$, $rowElem_rowHeight$$1$$, $viewportBottom$$5$$, $rowTop$$1$$, $cell$$15$$;
  $cellWidth_row$$34$$ = $cellLeft_index$$67$$.row;
  $column$$8_viewportLeft$$2$$ = $cellLeft_index$$67$$.column;
  $deltaY$$4_scrollTop$$9$$ = $deltaX$$4_scrollLeft$$9$$ = 0;
  $cellWidth_row$$34$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ || $cellWidth_row$$34$$ >= $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_endRow$ ? ($deltaY$$4_scrollTop$$9$$ = $cellWidth_row$$34$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ ? $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgRowHeight$ * $cellWidth_row$$34$$ : $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgRowHeight$ * ($cellWidth_row$$34$$ + 1) - (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), 
  $deltaY$$4_scrollTop$$9$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$ - $deltaY$$4_scrollTop$$9$$, $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ = $cellLeft_index$$67$$) : ($databodyContent$$16_viewportRight$$3_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$.firstChild, $rowElem_rowHeight$$1$$ = $databodyContent$$16_viewportRight$$3_viewportTop$$4$$.childNodes[$cellWidth_row$$34$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ + 
  1], $databodyContent$$16_viewportRight$$3_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$, $viewportBottom$$5$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $rowTop$$1$$ = (0,window.parseInt)($rowElem_rowHeight$$1$$.style.top), $rowElem_rowHeight$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($rowElem_rowHeight$$1$$), 
  $rowTop$$1$$ + $rowElem_rowHeight$$1$$ > $viewportBottom$$5$$ ? $deltaY$$4_scrollTop$$9$$ = $viewportBottom$$5$$ - ($rowTop$$1$$ + $rowElem_rowHeight$$1$$) : $rowTop$$1$$ < $databodyContent$$16_viewportRight$$3_viewportTop$$4$$ && ($deltaY$$4_scrollTop$$9$$ = $databodyContent$$16_viewportRight$$3_viewportTop$$4$$ - $rowTop$$1$$));
  !(0,window.isNaN)($column$$8_viewportLeft$$2$$) && $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ == D.$JSCompiler_alias_NULL$$ && ($column$$8_viewportLeft$$2$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$ || $column$$8_viewportLeft$$2$$ >= $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_endCol$ ? ($deltaX$$4_scrollLeft$$9$$ = $column$$8_viewportLeft$$2$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$ ? $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgColWidth$ * 
  $column$$8_viewportLeft$$2$$ : $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgColWidth$ * ($column$$8_viewportLeft$$2$$ + 1) - (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $deltaX$$4_scrollLeft$$9$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$ - $deltaX$$4_scrollLeft$$9$$, $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ = $cellLeft_index$$67$$) : ($databodyContent$$16_viewportRight$$3_viewportTop$$4$$ = 
  $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$.firstChild, $rowElem_rowHeight$$1$$ = $databodyContent$$16_viewportRight$$3_viewportTop$$4$$.childNodes[$cellWidth_row$$34$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ + 1], $cell$$15$$ = $rowElem_rowHeight$$1$$.childNodes[$column$$8_viewportLeft$$2$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$], $cellLeft_index$$67$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($cell$$15$$, "left"), $cellWidth_row$$34$$ = 
  $cell$$15$$.offsetWidth, $column$$8_viewportLeft$$2$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$, $databodyContent$$16_viewportRight$$3_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $cellLeft_index$$67$$ < $column$$8_viewportLeft$$2$$ ? $deltaX$$4_scrollLeft$$9$$ = $column$$8_viewportLeft$$2$$ - $cellLeft_index$$67$$ : 
  $cellLeft_index$$67$$ + $cellWidth_row$$34$$ > $databodyContent$$16_viewportRight$$3_viewportTop$$4$$ && ($deltaX$$4_scrollLeft$$9$$ = $databodyContent$$16_viewportRight$$3_viewportTop$$4$$ - ($cellLeft_index$$67$$ + $cellWidth_row$$34$$))));
  if(0 != $deltaX$$4_scrollLeft$$9$$ || 0 != $deltaY$$4_scrollTop$$9$$) {
    $cell$$15$$ != D.$JSCompiler_alias_NULL$$ && $isExtend$$1$$ !== D.$JSCompiler_alias_TRUE$$ && ($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_cellToFocus$ = $cell$$15$$), (0,D.$JSCompiler_StaticMethods_scrollDelta$$)($JSCompiler_StaticMethods_scrollToIndex$self$$, $deltaX$$4_scrollLeft$$9$$, $deltaY$$4_scrollTop$$9$$)
  }
};
D.$JSCompiler_StaticMethods_findHeader$$ = function $$JSCompiler_StaticMethods_findHeader$$$($JSCompiler_StaticMethods_findHeader$self$$, $elem$$20$$, $headerCellClassName$$) {
  $headerCellClassName$$ == D.$JSCompiler_alias_VOID$$ && ($headerCellClassName$$ = $JSCompiler_StaticMethods_findHeader$self$$.getMappedStyle("headercell"));
  if($headerCellClassName$$ != D.$JSCompiler_alias_NULL$$) {
    if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($elem$$20$$, $headerCellClassName$$)) {
      return $elem$$20$$
    }
    if($elem$$20$$.parentNode) {
      return(0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods_findHeader$self$$, $elem$$20$$.parentNode, $headerCellClassName$$)
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_updateRowBanding$$ = function $$JSCompiler_StaticMethods_updateRowBanding$$$($JSCompiler_StaticMethods_updateRowBanding$self$$) {
  var $rowBandingInterval$$3$$, $rows$$11$$, $i$$28$$, $index$$68$$, $bandingClass$$;
  $rowBandingInterval$$3$$ = (0,D.$JSCompiler_StaticMethods_getRowBandingInterval$$)($JSCompiler_StaticMethods_updateRowBanding$self$$.$m_options$);
  if(0 < $rowBandingInterval$$3$$) {
    $rows$$11$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.$m_databody$.firstChild.childNodes;
    $bandingClass$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.getMappedStyle("banded");
    for($i$$28$$ = 1;$i$$28$$ < $rows$$11$$.length;$i$$28$$++) {
      $index$$68$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.$m_startRow$ + $i$$28$$ - 1, 1 === window.Math.floor($index$$68$$ / $rowBandingInterval$$3$$) % 2 ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($rows$$11$$[$i$$28$$], $bandingClass$$) || (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($rows$$11$$[$i$$28$$], $bandingClass$$) : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($rows$$11$$[$i$$28$$], $bandingClass$$) && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($rows$$11$$[$i$$28$$], 
      $bandingClass$$)
    }
  }
};
D.$JSCompiler_StaticMethods__setAccInfoText$$ = function $$JSCompiler_StaticMethods__setAccInfoText$$$($JSCompiler_StaticMethods__setAccInfoText$self$$, $key$$40_text$$11$$, $args$$5$$) {
  $key$$40_text$$11$$ = $JSCompiler_StaticMethods__setAccInfoText$self$$.$m_resources$.getTranslatedText($key$$40_text$$11$$, $args$$5$$);
  $key$$40_text$$11$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__setAccInfoText$self$$.$m_accInfo$.innerHTML = $key$$40_text$$11$$)
};
D.$DvtDataGrid$$.prototype.$handleExpandEvent$ = function $$DvtDataGrid$$$$$handleExpandEvent$$($event$$46$$) {
  (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $event$$46$$.rowKey).setAttribute("aria-expanded", D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleRowExpanded")
};
D.$DvtDataGrid$$.prototype.$handleCollapseEvent$ = function $$DvtDataGrid$$$$$handleCollapseEvent$$($event$$47$$) {
  (0,D.$JSCompiler_StaticMethods__findRowByKey$$)(this, $event$$47$$.rowKey).setAttribute("aria-expanded", D.$JSCompiler_alias_FALSE$$);
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)(this, "accessibleRowCollapsed")
};
D.$DvtDataGrid$$.prototype.$_getKey$ = function $$DvtDataGrid$$$$$_getKey$$($element$$11$$) {
  return $element$$11$$ != D.$JSCompiler_alias_NULL$$ ? $element$$11$$.getAttribute(this.$m_resources$.getMappedAttribute("key")) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__handleCutPasteKeydown$$ = function $$JSCompiler_StaticMethods__handleCutPasteKeydown$$$($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $event$$48$$) {
  if((0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, (0,D.$JSCompiler_StaticMethods_findRow$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $event$$48$$.target))) {
    if(88 == $event$$48$$.keyCode && (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_utils$, $event$$48$$)) {
      return(0,D.$JSCompiler_StaticMethods__handleCut$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $event$$48$$)
    }
    if(86 == $event$$48$$.keyCode && (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_utils$, $event$$48$$)) {
      return(0,D.$JSCompiler_StaticMethods__handlePaste$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $event$$48$$)
    }
    if(27 == $event$$48$$.keyCode && $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRow$ != D.$JSCompiler_alias_NULL$$) {
      return(0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.getMappedStyle("cut")), $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRow$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRowHeader$ !== D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRowHeader$, 
      $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.getMappedStyle("cut")), $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRowHeader$ = D.$JSCompiler_alias_NULL$$), D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__handleCut$$ = function $$JSCompiler_StaticMethods__handleCut$$$($JSCompiler_StaticMethods__handleCut$self$$, $event$$49$$) {
  var $rowKey$$7$$;
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handleCut$self$$.getMappedStyle("cut"));
  $rowKey$$7$$ = $JSCompiler_StaticMethods__handleCut$self$$.$_getKey$($JSCompiler_StaticMethods__handleCut$self$$.find($event$$49$$.target, "row"));
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__handleCut$self$$, $rowKey$$7$$);
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRowHeader$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__handleCut$self$$, $rowKey$$7$$);
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handleCut$self$$.getMappedStyle("cut"));
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRowHeader$ !== D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleCut$self$$.$m_cutRowHeader$, $JSCompiler_StaticMethods__handleCut$self$$.getMappedStyle("cut"));
  return D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_StaticMethods__handlePaste$$ = function $$JSCompiler_StaticMethods__handlePaste$$$($JSCompiler_StaticMethods__handlePaste$self$$, $event$$50$$) {
  var $row$$39$$;
  return $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ != D.$JSCompiler_alias_NULL$$ ? ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handlePaste$self$$.getMappedStyle("cut")), $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRowHeader$ !== D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRowHeader$, $JSCompiler_StaticMethods__handlePaste$self$$.getMappedStyle("cut")), 
  $row$$39$$ = $JSCompiler_StaticMethods__handlePaste$self$$.find($event$$50$$.target, "row"), $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ !== $row$$39$$ && ((0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__handlePaste$self$$) && ((0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)($JSCompiler_StaticMethods__handlePaste$self$$), (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__handlePaste$self$$)), $JSCompiler_StaticMethods__handlePaste$self$$.$m_dataSource$.move($JSCompiler_StaticMethods__handlePaste$self$$.$_getKey$($JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$), 
  $JSCompiler_StaticMethods__handlePaste$self$$.$_getKey$($row$$39$$))), $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ = D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods__handleMove$$ = function $$JSCompiler_StaticMethods__handleMove$$$($JSCompiler_StaticMethods__handleMove$self$$, $event$$51$$) {
  var $deltaY$$5_rowKey$$8$$, $height$$25$$;
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$ == D.$JSCompiler_alias_NULL$$ && ($deltaY$$5_rowKey$$8$$ = $JSCompiler_StaticMethods__handleMove$self$$.$_getKey$($JSCompiler_StaticMethods__handleMove$self$$.find($event$$51$$.target, "row")), $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__handleMove$self$$, $deltaY$$5_rowKey$$8$$), $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ = (0,D.$JSCompiler_StaticMethods__findRowHeaderByKey$$)($JSCompiler_StaticMethods__handleMove$self$$, 
  $deltaY$$5_rowKey$$8$$), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("move")), $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$ = window.document.createElement("div"), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, 
  $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("droptarget")), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$)), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_databody$.firstChild.appendChild($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$), 
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("move")), $JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$ = window.document.createElement("div"), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, 
  $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("droptarget")), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$)), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_rowHeader$.firstChild.appendChild($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$)));
  (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_utils$) || ($JSCompiler_StaticMethods__handleMove$self$$.$m_prevY$ = $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$, $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$ = $event$$51$$.pageY);
  $deltaY$$5_rowKey$$8$$ = $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$ - $JSCompiler_StaticMethods__handleMove$self$$.$m_prevY$;
  $height$$25$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top") + $deltaY$$5_rowKey$$8$$, "top");
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, "top") + $deltaY$$5_rowKey$$8$$, "top");
  $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.nextSibling != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.nextSibling != $JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$ && (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.nextSibling, "top") < (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top") + $height$$25$$ / 2 ? 
  (0,D.$JSCompiler_StaticMethods__moveDropRows$$)($JSCompiler_StaticMethods__handleMove$self$$, "nextSibling") : $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.previousSibling != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.previousSibling, "top") > (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top") - $height$$25$$ / 2 && (0,D.$JSCompiler_StaticMethods__moveDropRows$$)($JSCompiler_StaticMethods__handleMove$self$$, 
  "previousSibling")
};
D.$JSCompiler_StaticMethods__moveDropRows$$ = function $$JSCompiler_StaticMethods__moveDropRows$$$($JSCompiler_StaticMethods__moveDropRows$self$$, $sibling$$) {
  var $newTop$$, $databodyScroller$$, $newSiblingTop$$, $headerScroller$$;
  $databodyScroller$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$.parentNode;
  "nextSibling" == $sibling$$ ? ($newTop$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_originalTop$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$]), $newSiblingTop$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_originalTop$) : ($newTop$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$], "top"), $newSiblingTop$$ = $newTop$$ + (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$));
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_dropTarget$, $newTop$$, "top");
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$], $newSiblingTop$$, "top");
  $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && ($headerScroller$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$.parentNode, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_dropTargetHeader$, $newTop$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$[$sibling$$], $newSiblingTop$$, "top"));
  $JSCompiler_StaticMethods__moveDropRows$self$$.$m_originalTop$ = $newTop$$;
  "nextSibling" === $sibling$$ ? ($databodyScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$][$sibling$$]), $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && $headerScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$[$sibling$$][$sibling$$])) : 
  ($databodyScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$]), $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && $headerScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$[$sibling$$]))
};
D.$JSCompiler_StaticMethods__handleMoveMouseUp$$ = function $$JSCompiler_StaticMethods__handleMoveMouseUp$$$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$, $validUp$$) {
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTarget$.parentNode.removeChild($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTarget$), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.style.zIndex = 0, $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRowHeader$ !== D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTargetHeader$.parentNode.removeChild($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTargetHeader$), 
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRowHeader$.style.zIndex = 0), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.setActive(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$) && ((0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$), (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__handleMoveMouseUp$self$$)), 
  $validUp$$ == D.$JSCompiler_alias_TRUE$$ ? $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dataSource$.move($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.nextSibling === D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.nextSibling)) : 
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dataSource$.move($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$)), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$ = D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_databodyMove$ = D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$ = function $$JSCompiler_StaticMethods__isMoveOnRowEnabled$$$($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$, $row$$40$$) {
  var $JSCompiler_temp$$517_capability$$inline_1048$$;
  $row$$40$$ == D.$JSCompiler_alias_NULL$$ || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($row$$40$$.parentNode, $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.getMappedStyle("colheader")) ? $JSCompiler_temp$$517_capability$$inline_1048$$ = D.$JSCompiler_alias_FALSE$$ : ($JSCompiler_temp$$517_capability$$inline_1048$$ = $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_dataSource$.getCapability("move"), $JSCompiler_temp$$517_capability$$inline_1048$$ = "enable" === (0,D.$JSCompiler_StaticMethods_nullOrDefault$$)((0,D.$JSCompiler_StaticMethods_extract$$)($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_options$, 
  "dnd", "reorder", "row")) && ("full" === $JSCompiler_temp$$517_capability$$inline_1048$$ || "row" === $JSCompiler_temp$$517_capability$$inline_1048$$) && ($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$_getKey$($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_databody$.firstChild.childNodes[$JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_active$.row + 1 - $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_startRow$]) : 
  $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_activeHeader$ != D.$JSCompiler_alias_NULL$$ && "row" === $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_activeHeader$.axis ? $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$_getKey$($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_rowHeader$.firstChild.childNodes[$JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_activeHeader$.index + 1 - $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$m_startRowHeader$]) : 
  D.$JSCompiler_alias_NULL$$) === $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.$_getKey$($row$$40$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$);
  return $JSCompiler_temp$$517_capability$$inline_1048$$
};
D.$JSCompiler_StaticMethods__manageMoveCursor$$ = function $$JSCompiler_StaticMethods__manageMoveCursor$$$($JSCompiler_StaticMethods__manageMoveCursor$self$$, $row$$41$$, $header$$13$$) {
  $row$$41$$ != D.$JSCompiler_alias_NULL$$ && ((0,D.$JSCompiler_StaticMethods__isMoveOnRowEnabled$$)($JSCompiler_StaticMethods__manageMoveCursor$self$$, $row$$41$$) ? ($JSCompiler_StaticMethods__manageMoveCursor$self$$.$m_rowHeader$.style.cursor = "move", $header$$13$$ || ($row$$41$$.style.cursor = "move"), $JSCompiler_StaticMethods__manageMoveCursor$self$$.$m_moveCursor$ = D.$JSCompiler_alias_TRUE$$) : ("move" === $JSCompiler_StaticMethods__manageMoveCursor$self$$.$m_rowHeader$.style.cursor && ($JSCompiler_StaticMethods__manageMoveCursor$self$$.$m_rowHeader$.style.cursor = 
  "default"), "move" === $row$$41$$.style.cursor && ($row$$41$$.style.cursor = "default"), $JSCompiler_StaticMethods__manageMoveCursor$self$$.$m_moveCursor$ = D.$JSCompiler_alias_FALSE$$))
};
D.$DvtDataGrid$$.prototype.$handleRootFocus$ = function $$DvtDataGrid$$$$$handleRootFocus$$() {
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)(this.$m_root$, this.getMappedStyle("focus"))
};
D.$DvtDataGrid$$.prototype.$handleRootBlur$ = function $$DvtDataGrid$$$$$handleRootBlur$$() {
  this.$m_moveRow$ == D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)(this.$m_root$, this.getMappedStyle("focus"))
};
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
D.$JSCompiler_StaticMethods_unhighlightSelection$$ = function $$JSCompiler_StaticMethods_unhighlightSelection$$$($JSCompiler_StaticMethods_unhighlightSelection$self$$) {
  var $i$$33$$, $ranges$$;
  $ranges$$ = $JSCompiler_StaticMethods_unhighlightSelection$self$$.$GetSelection$();
  for($i$$33$$ = 0;$i$$33$$ < $ranges$$.length;$i$$33$$ += 1) {
    var $JSCompiler_StaticMethods_unhighlightRange$self$$inline_1086$$ = $JSCompiler_StaticMethods_unhighlightSelection$self$$, $elems$$inline_1088$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_unhighlightRange$self$$inline_1086$$, $ranges$$[$i$$33$$]);
    (0,D.$JSCompiler_StaticMethods_unhighlightElems$$)($JSCompiler_StaticMethods_unhighlightRange$self$$inline_1086$$, $elems$$inline_1088$$)
  }
  $JSCompiler_StaticMethods_unhighlightSelection$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && "row" == $JSCompiler_StaticMethods_unhighlightSelection$self$$.$m_options$.$getSelectionMode$() && (0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods_unhighlightSelection$self$$)
};
D.$JSCompiler_StaticMethods_highlightRange$$ = function $$JSCompiler_StaticMethods_highlightRange$$$($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$2_range$$10$$, $updateAccInfo$$) {
  $elems$$2_range$$10$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$2_range$$10$$);
  (0,D.$JSCompiler_StaticMethods_highlightElems$$)($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$2_range$$10$$);
  $updateAccInfo$$ && (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_highlightRange$self$$, "accessibleMultiCellSelected", {num:$elems$$2_range$$10$$.length})
};
D.$JSCompiler_StaticMethods_unhighlightElems$$ = function $$JSCompiler_StaticMethods_unhighlightElems$$$($JSCompiler_StaticMethods_unhighlightElems$self$$, $elems$$3$$) {
  var $i$$34$$, $selectedClassName$$2$$, $activeClassName$$2$$, $elem$$24$$;
  if(!($elems$$3$$ == D.$JSCompiler_alias_NULL$$ || 0 == $elems$$3$$.length)) {
    if($selectedClassName$$2$$ = $JSCompiler_StaticMethods_unhighlightElems$self$$.getMappedStyle("selected"), $activeClassName$$2$$ = $JSCompiler_StaticMethods_unhighlightElems$self$$.getMappedStyle("active"), $selectedClassName$$2$$ != D.$JSCompiler_alias_NULL$$ && $activeClassName$$2$$ != D.$JSCompiler_alias_NULL$$) {
      for($i$$34$$ = 0;$i$$34$$ < $elems$$3$$.length;$i$$34$$ += 1) {
        $elem$$24$$ = $elems$$3$$[$i$$34$$], (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($elem$$24$$, $activeClassName$$2$$), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($elem$$24$$, $selectedClassName$$2$$), (0,D.$JSCompiler_StaticMethods_unsetAriaProperties$$)($elem$$24$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods_highlightElems$$ = function $$JSCompiler_StaticMethods_highlightElems$$$($JSCompiler_StaticMethods_highlightElems$self$$, $elems$$4$$) {
  var $selectedClassName$$3$$, $i$$35$$, $elem$$25$$;
  if(!($elems$$4$$ == D.$JSCompiler_alias_NULL$$ || 0 == $elems$$4$$.length)) {
    if($selectedClassName$$3$$ = $JSCompiler_StaticMethods_highlightElems$self$$.getMappedStyle("selected"), $selectedClassName$$3$$ != D.$JSCompiler_alias_NULL$$) {
      for($i$$35$$ = 0;$i$$35$$ < $elems$$4$$.length;$i$$35$$ += 1) {
        $elem$$25$$ = $elems$$4$$[$i$$35$$], (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($elem$$25$$, $selectedClassName$$3$$), (0,D.$JSCompiler_StaticMethods_setAriaProperties$$)($JSCompiler_StaticMethods_highlightElems$self$$, $elem$$25$$)
      }
    }
  }
};
D.$JSCompiler_StaticMethods_applySelection$$ = function $$JSCompiler_StaticMethods_applySelection$$$($JSCompiler_StaticMethods_applySelection$self$$, $startRow$$5$$, $endRow$$2$$) {
  var $i$$36$$, $ranges$$1$$, $elems$$5$$;
  $ranges$$1$$ = $JSCompiler_StaticMethods_applySelection$self$$.$GetSelection$();
  for($i$$36$$ = 0;$i$$36$$ < $ranges$$1$$.length;$i$$36$$ += 1) {
    $elems$$5$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods_applySelection$self$$, $ranges$$1$$[$i$$36$$], $startRow$$5$$, $endRow$$2$$), (0,D.$JSCompiler_StaticMethods_highlightElems$$)($JSCompiler_StaticMethods_applySelection$self$$, $elems$$5$$)
  }
};
D.$JSCompiler_StaticMethods_handleDatabodySelectionDrag$$ = function $$JSCompiler_StaticMethods_handleDatabodySelectionDrag$$$($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, $event$$60$$) {
  var $cell$$16_index$$71$$;
  $cell$$16_index$$71$$ = (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$.$m_utils$) ? (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, window.document.elementFromPoint($event$$60$$.touches[0].pageX, $event$$60$$.touches[0].pageY)) : (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, $event$$60$$.target);
  $cell$$16_index$$71$$ != D.$JSCompiler_alias_NULL$$ && ($cell$$16_index$$71$$ = {row:$JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$.$getRowIndex$($cell$$16_index$$71$$.parentNode), column:$JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$.$getCellIndex$($cell$$16_index$$71$$)}, (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, $cell$$16_index$$71$$, $event$$60$$))
};
D.$DvtDataGrid$$.prototype.$_isSelected$ = function $$DvtDataGrid$$$$$_isSelected$$($cell$$17$$) {
  var $selectedClassName$$4$$ = this.getMappedStyle("selected");
  return"row" == this.$m_options$.$getSelectionMode$() && $selectedClassName$$4$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)((0,D.$JSCompiler_StaticMethods_findRow$$)(this, $cell$$17$$), $selectedClassName$$4$$) : $selectedClassName$$4$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($cell$$17$$, $selectedClassName$$4$$) : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_handleDatabodyClickSelection$$ = function $$JSCompiler_StaticMethods_handleDatabodyClickSelection$$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $event$$61$$) {
  var $index$$73$$, $cell$$18_ctrlKey$$2$$, $shiftKey$$2$$;
  $cell$$18_ctrlKey$$2$$ = (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $event$$61$$.target);
  $cell$$18_ctrlKey$$2$$ != D.$JSCompiler_alias_NULL$$ && ($index$$73$$ = {row:$JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$getRowIndex$($cell$$18_ctrlKey$$2$$.parentNode), column:$JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$getCellIndex$($cell$$18_ctrlKey$$2$$)});
  $index$$73$$ != D.$JSCompiler_alias_NULL$$ && $index$$73$$ != D.$JSCompiler_alias_VOID$$ && ((0,D.$JSCompiler_StaticMethods__setActiveHeader$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, -1), $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_activeHeader$ = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$73$$), $cell$$18_ctrlKey$$2$$ = (0,D.$JSCompiler_StaticMethods_ctrlEquivalent$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_utils$, 
  $event$$61$$), $shiftKey$$2$$ = $event$$61$$.shiftKey, (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$) ? (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_utils$) ? ((0,D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$), $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_active$ != 
  D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$), $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$73$$, $event$$61$$)) : !$cell$$18_ctrlKey$$2$$ && !$shiftKey$$2$$ ? $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$73$$, $event$$61$$) : !$cell$$18_ctrlKey$$2$$ && $shiftKey$$2$$ ? (0,D.$JSCompiler_StaticMethods_extendSelection$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, 
  $index$$73$$, $event$$61$$) : (0,D.$JSCompiler_StaticMethods_augmentSelectionAndFocus$$)($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$73$$, $event$$61$$) : $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$73$$, $event$$61$$))
};
D.$JSCompiler_StaticMethods_findRow$$ = function $$JSCompiler_StaticMethods_findRow$$$($JSCompiler_StaticMethods_findRow$self$$, $elem$$26$$) {
  return $JSCompiler_StaticMethods_findRow$self$$.find($elem$$26$$, "row")
};
D.$JSCompiler_StaticMethods__clearSelection$$ = function $$JSCompiler_StaticMethods__clearSelection$$$($JSCompiler_StaticMethods__clearSelection$self$$) {
  (0,D.$JSCompiler_StaticMethods_unhighlightSelection$$)($JSCompiler_StaticMethods__clearSelection$self$$);
  $JSCompiler_StaticMethods__clearSelection$self$$.$GetSelection$().length = 0
};
D.$JSCompiler_StaticMethods_setActionableMode$$ = function $$JSCompiler_StaticMethods_setActionableMode$$$($JSCompiler_StaticMethods_setActionableMode$self$$, $flag$$3$$) {
  $JSCompiler_StaticMethods_setActionableMode$self$$.$m_keyMode$ = $flag$$3$$ ? "actionable" : "navigation";
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods_setActionableMode$self$$, "actionable" === $JSCompiler_StaticMethods_setActionableMode$self$$.$m_keyMode$ ? "accessibleActionableMode" : "accessibleNavigationMode")
};
D.$JSCompiler_StaticMethods__selectEntireRow$$ = function $$JSCompiler_StaticMethods__selectEntireRow$$$($JSCompiler_StaticMethods__selectEntireRow$self$$, $endIndex$$inline_1092_row$$43$$, $callback$$inline_9159_event$$63$$) {
  var $startIndex$$6$$;
  $startIndex$$6$$ = $JSCompiler_StaticMethods__selectEntireRow$self$$.createIndex($endIndex$$inline_1092_row$$43$$, 0);
  $endIndex$$inline_1092_row$$43$$ = $JSCompiler_StaticMethods__selectEntireRow$self$$.createIndex($endIndex$$inline_1092_row$$43$$, -1);
  (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__selectEntireRow$self$$);
  $callback$$inline_9159_event$$63$$ = $JSCompiler_StaticMethods__selectEntireRow$self$$.$_selectRangeCallback$.bind($JSCompiler_StaticMethods__selectEntireRow$self$$, $callback$$inline_9159_event$$63$$);
  (0,D.$JSCompiler_StaticMethods__keys$$)($JSCompiler_StaticMethods__selectEntireRow$self$$, $startIndex$$6$$, $JSCompiler_StaticMethods__selectEntireRow$self$$.$_createRangeStartKeyCallback$.bind($JSCompiler_StaticMethods__selectEntireRow$self$$, $endIndex$$inline_1092_row$$43$$, $callback$$inline_9159_event$$63$$))
};
D.$JSCompiler_StaticMethods__selectEntireColumn$$ = function $$JSCompiler_StaticMethods__selectEntireColumn$$$($JSCompiler_StaticMethods__selectEntireColumn$self$$, $column$$10_endIndex$$inline_1097$$, $callback$$inline_9164_event$$64$$) {
  var $startIndex$$7$$;
  $startIndex$$7$$ = $JSCompiler_StaticMethods__selectEntireColumn$self$$.createIndex(0, $column$$10_endIndex$$inline_1097$$);
  $column$$10_endIndex$$inline_1097$$ = $JSCompiler_StaticMethods__selectEntireColumn$self$$.createIndex(-1, $column$$10_endIndex$$inline_1097$$);
  (0,D.$JSCompiler_StaticMethods__clearSelection$$)($JSCompiler_StaticMethods__selectEntireColumn$self$$);
  $callback$$inline_9164_event$$64$$ = $JSCompiler_StaticMethods__selectEntireColumn$self$$.$_selectRangeCallback$.bind($JSCompiler_StaticMethods__selectEntireColumn$self$$, $callback$$inline_9164_event$$64$$);
  (0,D.$JSCompiler_StaticMethods__keys$$)($JSCompiler_StaticMethods__selectEntireColumn$self$$, $startIndex$$7$$, $JSCompiler_StaticMethods__selectEntireColumn$self$$.$_createRangeStartKeyCallback$.bind($JSCompiler_StaticMethods__selectEntireColumn$self$$, $column$$10_endIndex$$inline_1097$$, $callback$$inline_9164_event$$64$$))
};
D.$DvtDataGrid$$.prototype.$_selectRangeCallback$ = function $$DvtDataGrid$$$$$_selectRangeCallback$$($event$$66$$, $newRange$$) {
  this.$GetSelection$().push($newRange$$);
  (0,D.$JSCompiler_StaticMethods_highlightRange$$)(this, $newRange$$);
  this.$m_active$ != D.$JSCompiler_alias_NULL$$ && (this.$m_selectionFrontier$ = this.$m_active$, this.$highlightActive$());
  this.$fireSelectionEvent$($event$$66$$)
};
D.$DvtDataGrid$$.prototype.$GetSelection$ = function $$DvtDataGrid$$$$$GetSelection$$() {
  this.$m_selection$ == D.$JSCompiler_alias_NULL$$ && (this.$m_selection$ = []);
  return this.$m_selection$
};
D.$DvtDataGrid$$.prototype.GetSelection = D.$DvtDataGrid$$.prototype.$GetSelection$;
D.$DvtDataGrid$$.prototype.$SetSelection$ = function $$DvtDataGrid$$$$$SetSelection$$($selection$$2$$) {
  $selection$$2$$ != D.$JSCompiler_alias_VOID$$ && ($selection$$2$$ == D.$JSCompiler_alias_NULL$$ && ($selection$$2$$ = []), this.$m_selection$ = $selection$$2$$, this.$m_databody$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_applySelection$$)(this, this.$m_startRow$, this.$m_endRow$), this.$fireSelectionEvent$(D.$JSCompiler_alias_NULL$$))
};
D.$DvtDataGrid$$.prototype.SetSelection = D.$DvtDataGrid$$.prototype.$SetSelection$;
D.$DvtDataGrid$$.prototype.$fireSelectionEvent$ = function $$DvtDataGrid$$$$$fireSelectionEvent$$($details$$6_event$$67$$) {
  $details$$6_event$$67$$ = {event:$details$$6_event$$67$$, ui:{selection:this.$GetSelection$()}};
  this.fireEvent("select", $details$$6_event$$67$$)
};
D.$JSCompiler_StaticMethods_extendSelection$$ = function $$JSCompiler_StaticMethods_extendSelection$$$($JSCompiler_StaticMethods_extendSelection$self$$, $index$$74$$, $callback$$inline_9169_event$$68$$) {
  var $anchor$$;
  $anchor$$ = (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_extendSelection$self$$.$m_utils$) ? $JSCompiler_StaticMethods_extendSelection$self$$.$m_touchSelectAnchor$ : $JSCompiler_StaticMethods_extendSelection$self$$.$m_active$;
  $anchor$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_extendSelection$self$$.$m_selectionFrontier$ = $index$$74$$, "row" == $JSCompiler_StaticMethods_extendSelection$self$$.$m_options$.$getSelectionMode$() && ($index$$74$$ = $JSCompiler_StaticMethods_extendSelection$self$$.createIndex($index$$74$$.row)), $callback$$inline_9169_event$$68$$ = $JSCompiler_StaticMethods_extendSelection$self$$.$_extendSelectionCallback$.bind($JSCompiler_StaticMethods_extendSelection$self$$, $callback$$inline_9169_event$$68$$), 
  (0,D.$JSCompiler_StaticMethods__keys$$)($JSCompiler_StaticMethods_extendSelection$self$$, $anchor$$, $JSCompiler_StaticMethods_extendSelection$self$$.$_createRangeStartKeyCallback$.bind($JSCompiler_StaticMethods_extendSelection$self$$, $index$$74$$, $callback$$inline_9169_event$$68$$)))
};
D.$DvtDataGrid$$.prototype.$_extendSelectionCallback$ = function $$DvtDataGrid$$$$$_extendSelectionCallback$$($event$$69$$, $newRange$$1$$) {
  var $elems$$inline_1110_selection$$3$$, $currentRange$$, $clone$$2_startIndexesMatch$$, $endIndexesMatch$$;
  $elems$$inline_1110_selection$$3$$ = this.$GetSelection$();
  $currentRange$$ = $elems$$inline_1110_selection$$3$$[$elems$$inline_1110_selection$$3$$.length - 1];
  $clone$$2_startIndexesMatch$$ = $currentRange$$.startIndex.row == $newRange$$1$$.startIndex.row;
  $currentRange$$.startIndex.column != D.$JSCompiler_alias_NULL$$ && $newRange$$1$$.startIndex.column != D.$JSCompiler_alias_NULL$$ && ($clone$$2_startIndexesMatch$$ = $clone$$2_startIndexesMatch$$ && $currentRange$$.startIndex.column == $newRange$$1$$.startIndex.column);
  $endIndexesMatch$$ = $currentRange$$.endIndex.row == $newRange$$1$$.endIndex.row;
  $currentRange$$.endIndex.column != D.$JSCompiler_alias_NULL$$ && $newRange$$1$$.endIndex.column != D.$JSCompiler_alias_NULL$$ && ($endIndexesMatch$$ = $endIndexesMatch$$ && $currentRange$$.endIndex.column == $newRange$$1$$.endIndex.column);
  if(!$clone$$2_startIndexesMatch$$ || !$endIndexesMatch$$) {
    $clone$$2_startIndexesMatch$$ = $elems$$inline_1110_selection$$3$$.slice(0), $elems$$inline_1110_selection$$3$$.pop(), $elems$$inline_1110_selection$$3$$.push($newRange$$1$$), (0,D.$JSCompiler_StaticMethods__compareSelectionAndFire$$)(this, $event$$69$$, $clone$$2_startIndexesMatch$$), $elems$$inline_1110_selection$$3$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)(this, $currentRange$$), (0,D.$JSCompiler_StaticMethods_unhighlightElems$$)(this, $elems$$inline_1110_selection$$3$$), (0,D.$JSCompiler_StaticMethods_highlightRange$$)(this, 
    $newRange$$1$$, D.$JSCompiler_alias_TRUE$$), this.$highlightActive$()
  }
};
D.$JSCompiler_StaticMethods_augmentSelectionAndFocus$$ = function $$JSCompiler_StaticMethods_augmentSelectionAndFocus$$$($JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$, $index$$75$$, $event$$70$$) {
  0 < $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$GetSelection$().length && $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_unhighlightActive$$)($JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$, !$JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$m_discontiguousSelection$);
  $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.setActive($index$$75$$, $event$$70$$, $JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$.$_augmentSelectionAndFocusActiveCallback$.bind($JSCompiler_StaticMethods_augmentSelectionAndFocus$self$$, $index$$75$$, $event$$70$$))
};
D.$DvtDataGrid$$.prototype.$_augmentSelectionAndFocusActiveCallback$ = function $$DvtDataGrid$$$$$_augmentSelectionAndFocusActiveCallback$$($index$$76$$, $event$$71$$) {
  this.$m_selectionFrontier$ = $index$$76$$;
  "row" == this.$m_options$.$getSelectionMode$() && ($index$$76$$ = this.createIndex($index$$76$$.row));
  var $callback$$inline_9174$$ = this.$_augmentSelectionAndFocusRangeCallback$.bind(this, $index$$76$$, $event$$71$$);
  (0,D.$JSCompiler_StaticMethods__keys$$)(this, $index$$76$$, this.$_createRangeStartKeyCallback$.bind(this, $index$$76$$, $callback$$inline_9174$$))
};
D.$DvtDataGrid$$.prototype.$_augmentSelectionAndFocusRangeCallback$ = function $$DvtDataGrid$$$$$_augmentSelectionAndFocusRangeCallback$$($index$$77$$, $event$$72$$, $range$$12$$) {
  var $selection$$5$$, $clone$$3$$;
  $selection$$5$$ = this.$GetSelection$();
  $clone$$3$$ = $selection$$5$$.slice(0);
  $selection$$5$$.push($range$$12$$);
  (0,D.$JSCompiler_StaticMethods__compareSelectionAndFire$$)(this, $event$$72$$, $clone$$3$$);
  this.$highlightActive$();
  (0,D.$JSCompiler_StaticMethods_highlightIndex$$)(this, $index$$77$$, "selected")
};
D.$DvtDataGrid$$.prototype.$selectAndFocus$ = function $$DvtDataGrid$$$$$selectAndFocus$$($index$$78$$, $event$$73$$) {
  this.$m_discontiguousSelection$ ? this.$m_active$ != D.$JSCompiler_alias_NULL$$ && this.$m_selectionFrontier$ == this.$m_active$ && ((0,D.$JSCompiler_StaticMethods_unhighlightIndex$$)(this, this.$m_active$), this.$GetSelection$().pop()) : (0,D.$JSCompiler_StaticMethods__clearSelection$$)(this);
  (0,D.$JSCompiler_StaticMethods_augmentSelectionAndFocus$$)(this, $index$$78$$, $event$$73$$)
};
D.$JSCompiler_StaticMethods_getFocusableElementsInNode$$ = function $$JSCompiler_StaticMethods_getFocusableElementsInNode$$$($node$$3_nodes$$1$$) {
  var $inputElems$$, $elem$$28$$, $nodeCount$$, $inputRegExp$$, $i$$39$$;
  $inputElems$$ = [];
  if(window.document.evaluate) {
    $node$$3_nodes$$1$$ = window.document.evaluate(".//input|.//select|.//textarea|.//button|.//a|.//INPUT|.//SELECT|.//TEXTAREA|.//BUTTON|.//A", $node$$3_nodes$$1$$, D.$JSCompiler_alias_NULL$$, window.XPathResult.ANY_TYPE, D.$JSCompiler_alias_NULL$$);
    for($elem$$28$$ = $node$$3_nodes$$1$$.iterateNext();$elem$$28$$;) {
      !$elem$$28$$.disabled && (!$elem$$28$$.tabIndex || 0 < $elem$$28$$.tabIndex) && $inputElems$$.push($elem$$28$$), $elem$$28$$ = $node$$3_nodes$$1$$.iterateNext()
    }
  }else {
    $node$$3_nodes$$1$$ = $node$$3_nodes$$1$$.getElementsByTagName("*");
    $nodeCount$$ = $node$$3_nodes$$1$$.length;
    $inputRegExp$$ = /^INPUT|SELECT|BUTTON|^A\b|TEXTAREA/;
    for($i$$39$$ = 0;$i$$39$$ < $nodeCount$$;$i$$39$$ += 1) {
      $elem$$28$$ = $node$$3_nodes$$1$$[$i$$39$$], $elem$$28$$.tagName.match($inputRegExp$$) && (!$elem$$28$$.disabled && (!$elem$$28$$.tabIndex || 0 < $elem$$28$$.tabIndex)) && $inputElems$$.push($elem$$28$$)
    }
  }
  return $inputElems$$
};
D.$JSCompiler_StaticMethods__compareSelectionAndFire$$ = function $$JSCompiler_StaticMethods__compareSelectionAndFire$$$($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $event$$74$$, $JSCompiler_inline_result$$156_clone$$4_dir$$inline_1127_row$$inline_1124_topRow$$inline_1131$$) {
  a: {
    var $bottomRow$$inline_1132_iconSize$$inline_1121_left$$inline_1126_selection1$$inline_1112$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$GetSelection$(), $bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$, $j$$inline_1115_selection$$inline_1130_topIconCell$$inline_1134$$, $bottomIconCell$$inline_1135_elementsInRange$$inline_1136_foundMatch$$inline_1116$$;
    if($bottomRow$$inline_1132_iconSize$$inline_1121_left$$inline_1126_selection1$$inline_1112$$.length !== $JSCompiler_inline_result$$156_clone$$4_dir$$inline_1127_row$$inline_1124_topRow$$inline_1131$$.length) {
      $JSCompiler_inline_result$$156_clone$$4_dir$$inline_1127_row$$inline_1124_topRow$$inline_1131$$ = D.$JSCompiler_alias_FALSE$$
    }else {
      for($bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$ = 0;$bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$ < $bottomRow$$inline_1132_iconSize$$inline_1121_left$$inline_1126_selection1$$inline_1112$$.length;$bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$ += 
      1) {
        $bottomIconCell$$inline_1135_elementsInRange$$inline_1136_foundMatch$$inline_1116$$ = D.$JSCompiler_alias_FALSE$$;
        for($j$$inline_1115_selection$$inline_1130_topIconCell$$inline_1134$$ = 0;$j$$inline_1115_selection$$inline_1130_topIconCell$$inline_1134$$ < $JSCompiler_inline_result$$156_clone$$4_dir$$inline_1127_row$$inline_1124_topRow$$inline_1131$$.length;$j$$inline_1115_selection$$inline_1130_topIconCell$$inline_1134$$ += 1) {
          $bottomRow$$inline_1132_iconSize$$inline_1121_left$$inline_1126_selection1$$inline_1112$$[$bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$].startIndex.row === $JSCompiler_inline_result$$156_clone$$4_dir$$inline_1127_row$$inline_1124_topRow$$inline_1131$$[$j$$inline_1115_selection$$inline_1130_topIconCell$$inline_1134$$].startIndex.row && ($bottomRow$$inline_1132_iconSize$$inline_1121_left$$inline_1126_selection1$$inline_1112$$[$bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$].startIndex.column === 
          $JSCompiler_inline_result$$156_clone$$4_dir$$inline_1127_row$$inline_1124_topRow$$inline_1131$$[$j$$inline_1115_selection$$inline_1130_topIconCell$$inline_1134$$].startIndex.column && $bottomRow$$inline_1132_iconSize$$inline_1121_left$$inline_1126_selection1$$inline_1112$$[$bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$].endIndex.row === $JSCompiler_inline_result$$156_clone$$4_dir$$inline_1127_row$$inline_1124_topRow$$inline_1131$$[$j$$inline_1115_selection$$inline_1130_topIconCell$$inline_1134$$].endIndex.row && 
          $bottomRow$$inline_1132_iconSize$$inline_1121_left$$inline_1126_selection1$$inline_1112$$[$bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$].endIndex.column === $JSCompiler_inline_result$$156_clone$$4_dir$$inline_1127_row$$inline_1124_topRow$$inline_1131$$[$j$$inline_1115_selection$$inline_1130_topIconCell$$inline_1134$$].endIndex.column) && ($bottomIconCell$$inline_1135_elementsInRange$$inline_1136_foundMatch$$inline_1116$$ = 
          D.$JSCompiler_alias_TRUE$$)
        }
        if($bottomIconCell$$inline_1135_elementsInRange$$inline_1136_foundMatch$$inline_1116$$ === D.$JSCompiler_alias_FALSE$$) {
          $JSCompiler_inline_result$$156_clone$$4_dir$$inline_1127_row$$inline_1124_topRow$$inline_1131$$ = D.$JSCompiler_alias_FALSE$$;
          break a
        }
      }
      $JSCompiler_inline_result$$156_clone$$4_dir$$inline_1127_row$$inline_1124_topRow$$inline_1131$$ = D.$JSCompiler_alias_TRUE$$
    }
  }
  $JSCompiler_inline_result$$156_clone$$4_dir$$inline_1127_row$$inline_1124_topRow$$inline_1131$$ || ((0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_utils$) && (0,D.$JSCompiler_StaticMethods_isMultipleSelection$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$) && ($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$ == D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$ == 
  D.$JSCompiler_alias_NULL$$ && ($JSCompiler_inline_result$$156_clone$$4_dir$$inline_1127_row$$inline_1124_topRow$$inline_1131$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_resources$.isRTLMode() ? "right" : "left", $bottomRow$$inline_1132_iconSize$$inline_1121_left$$inline_1126_selection1$$inline_1112$$ = (0,D.$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$ = 
  window.document.createElement("div"), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$.className = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("toucharea"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$, -$bottomRow$$inline_1132_iconSize$$inline_1121_left$$inline_1126_selection1$$inline_1112$$ / 2, "top"), $bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$ = 
  window.document.createElement("div"), $bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$.className = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("selectaffordancetop"), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$.appendChild($bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$), 
  $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$ = window.document.createElement("div"), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$.className = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("toucharea"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$, -1 * $bottomRow$$inline_1132_iconSize$$inline_1121_left$$inline_1126_selection1$$inline_1112$$ / 
  2, "bottom"), $bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$ = window.document.createElement("div"), $bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$.className = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("selectaffordancebottom"), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$.appendChild($bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$), 
  $bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_options$.$getSelectionMode$(), "row" === $bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$ ? ($bottomRow$$inline_1132_iconSize$$inline_1121_left$$inline_1126_selection1$$inline_1112$$ = 
  (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_databody$) / 2 + $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_currentScrollLeft$ - $bottomRow$$inline_1132_iconSize$$inline_1121_left$$inline_1126_selection1$$inline_1112$$ / 2, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$, $bottomRow$$inline_1132_iconSize$$inline_1121_left$$inline_1126_selection1$$inline_1112$$, 
  $JSCompiler_inline_result$$156_clone$$4_dir$$inline_1127_row$$inline_1124_topRow$$inline_1131$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$, $bottomRow$$inline_1132_iconSize$$inline_1121_left$$inline_1126_selection1$$inline_1112$$, $JSCompiler_inline_result$$156_clone$$4_dir$$inline_1127_row$$inline_1124_topRow$$inline_1131$$)) : ($bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$ = 
  (0,D.$JSCompiler_StaticMethods_findCell$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $event$$74$$.target), $bottomRow$$inline_1132_iconSize$$inline_1121_left$$inline_1126_selection1$$inline_1112$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$, $JSCompiler_inline_result$$156_clone$$4_dir$$inline_1127_row$$inline_1124_topRow$$inline_1131$$) - 
  $bottomRow$$inline_1132_iconSize$$inline_1121_left$$inline_1126_selection1$$inline_1112$$ / 2, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$, $bottomRow$$inline_1132_iconSize$$inline_1121_left$$inline_1126_selection1$$inline_1112$$, $JSCompiler_inline_result$$156_clone$$4_dir$$inline_1127_row$$inline_1124_topRow$$inline_1131$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$, 
  $bottomRow$$inline_1132_iconSize$$inline_1121_left$$inline_1126_selection1$$inline_1112$$ + (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$), $JSCompiler_inline_result$$156_clone$$4_dir$$inline_1127_row$$inline_1124_topRow$$inline_1131$$)), $JSCompiler_inline_result$$156_clone$$4_dir$$inline_1127_row$$inline_1124_topRow$$inline_1131$$ = (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, 
  $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.createRange($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_active$))[0].parentNode, $JSCompiler_inline_result$$156_clone$$4_dir$$inline_1127_row$$inline_1124_topRow$$inline_1131$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$), $JSCompiler_inline_result$$156_clone$$4_dir$$inline_1127_row$$inline_1124_topRow$$inline_1131$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$)), 
  $j$$inline_1115_selection$$inline_1130_topIconCell$$inline_1134$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$GetSelection$(), $bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_options$.$getSelectionMode$(), $JSCompiler_inline_result$$156_clone$$4_dir$$inline_1127_row$$inline_1124_topRow$$inline_1131$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, 
  $j$$inline_1115_selection$$inline_1130_topIconCell$$inline_1134$$[$j$$inline_1115_selection$$inline_1130_topIconCell$$inline_1134$$.length - 1].startKey.row), $bottomRow$$inline_1132_iconSize$$inline_1121_left$$inline_1126_selection1$$inline_1112$$ = (0,D.$JSCompiler_StaticMethods__findRowByKey$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $j$$inline_1115_selection$$inline_1130_topIconCell$$inline_1134$$[$j$$inline_1115_selection$$inline_1130_topIconCell$$inline_1134$$.length - 
  1].endKey.row), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$ != D.$JSCompiler_alias_NULL$$ && ("row" === $bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$ ? ($JSCompiler_inline_result$$156_clone$$4_dir$$inline_1127_row$$inline_1124_topRow$$inline_1131$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$), 
  $bottomRow$$inline_1132_iconSize$$inline_1121_left$$inline_1126_selection1$$inline_1112$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$)) : ($bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_resources$.isRTLMode() ? "right" : "left", $bottomIconCell$$inline_1135_elementsInRange$$inline_1136_foundMatch$$inline_1116$$ = 
  (0,D.$JSCompiler_StaticMethods_getElementsInRange$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $j$$inline_1115_selection$$inline_1130_topIconCell$$inline_1134$$[$j$$inline_1115_selection$$inline_1130_topIconCell$$inline_1134$$.length - 1]), $j$$inline_1115_selection$$inline_1130_topIconCell$$inline_1134$$ = $bottomIconCell$$inline_1135_elementsInRange$$inline_1136_foundMatch$$inline_1116$$[0], $bottomIconCell$$inline_1135_elementsInRange$$inline_1136_foundMatch$$inline_1116$$ = 
  $bottomIconCell$$inline_1135_elementsInRange$$inline_1136_foundMatch$$inline_1116$$[$bottomIconCell$$inline_1135_elementsInRange$$inline_1136_foundMatch$$inline_1116$$.length - 1], $JSCompiler_inline_result$$156_clone$$4_dir$$inline_1127_row$$inline_1124_topRow$$inline_1131$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$), $bottomRow$$inline_1132_iconSize$$inline_1121_left$$inline_1126_selection1$$inline_1112$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$), 
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($j$$inline_1115_selection$$inline_1130_topIconCell$$inline_1134$$, $bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$) - (0,D.$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$) / 
  2, $bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$, (0,D.$JSCompiler_StaticMethods_getElementDir$$)($bottomIconCell$$inline_1135_elementsInRange$$inline_1136_foundMatch$$inline_1116$$, $bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$) + 
  (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($bottomIconCell$$inline_1135_elementsInRange$$inline_1136_foundMatch$$inline_1116$$) - (0,D.$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$)($JSCompiler_StaticMethods__compareSelectionAndFire$self$$) / 2, $bottomIcon$$inline_1123_cell$$inline_1120_dir$$inline_1137_i$$inline_1114_selectionMode$$inline_1125_selectionMode$$inline_1133_topIcon$$inline_1122$$)))), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$fireSelectionEvent$($event$$74$$))
};
D.$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$ = function $$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$$($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$) {
  $JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_active$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$ && $JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$.parentNode) && ($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$.parentNode.removeChild($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$), 
  $JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$.parentNode.removeChild($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$))
};
D.$JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$ = function $$JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$$($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$) {
  var $newLeft$$, $dir$$16$$;
  "row" === $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_options$.$getSelectionMode$() && $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_topSelectIconContainer$ != D.$JSCompiler_alias_NULL$$ && ($dir$$16$$ = $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_resources$.isRTLMode() ? "right" : "left", $newLeft$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_databody$) / 
  2 + $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_currentScrollLeft$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_topSelectIconContainer$, $newLeft$$, $dir$$16$$), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$, $newLeft$$, $dir$$16$$))
};
D.$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$ = function $$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$$($JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$) {
  var $div$$1$$, $divWidth$$;
  $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_touchSelectionAffordanceSize$ == D.$JSCompiler_alias_NULL$$ && ($div$$1$$ = window.document.createElement("div"), $div$$1$$.className = $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.getMappedStyle("toucharea"), $div$$1$$.style.visibilty = "hidden", $div$$1$$.style.top = "0px", $div$$1$$.style.visibilty = "0px", $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_root$.appendChild($div$$1$$), 
  $divWidth$$ = $div$$1$$.offsetWidth, $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_root$.removeChild($div$$1$$), $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_touchSelectionAffordanceSize$ = $divWidth$$);
  return $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_touchSelectionAffordanceSize$
};
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
D.$JSCompiler_StaticMethods_handleResize$$ = function $$JSCompiler_StaticMethods_handleResize$$$($JSCompiler_StaticMethods_handleResize$self$$, $event$$55$$) {
  var $header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$;
  if($JSCompiler_StaticMethods_handleResize$self$$.$m_isResizing$ === D.$JSCompiler_alias_FALSE$$) {
    $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ = (0,D.$JSCompiler_StaticMethods_manageHeaderCursor$$)($JSCompiler_StaticMethods_handleResize$self$$, $event$$55$$), $JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$ != D.$JSCompiler_alias_NULL$$ && ($header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$ = $JSCompiler_StaticMethods_handleResize$self$$.find($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$, 
    "header"), $header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$ != D.$JSCompiler_alias_NULL$$ && ($header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$.style.cursor = "default" == $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ ? $JSCompiler_StaticMethods_handleResize$self$$.$m_moveCursor$ === 
    D.$JSCompiler_alias_TRUE$$ ? "move" : $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ : $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$))
  }else {
    var $newElementHeight$$inline_1056_newElementWidth$$inline_1054$$;
    $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$ = $event$$55$$.pageX;
    $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$ = $event$$55$$.pageY;
    (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_utils$) ? ($JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$ = $event$$55$$.touches[0].pageX, $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$ = $event$$55$$.touches[0].pageY) : ($JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$ = $event$$55$$.pageX, $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$ = $event$$55$$.pageY);
    $header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$, $JSCompiler_StaticMethods_handleResize$self$$.getMappedStyle("colheadercell")) ? "column" : "row";
    "col-resize" === $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ ? "column" === $header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$ ? ($header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$ = (0,window.isNaN)((0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$)) ? 
    50 : (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$), $newElementHeight$$inline_1056_newElementWidth$$inline_1054$$ = (0,D.$JSCompiler_StaticMethods_getNewElementWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, "column", $header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$), (0,D.$JSCompiler_StaticMethods_resizeColWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, 
    $header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$, $newElementHeight$$inline_1056_newElementWidth$$inline_1054$$)) : "row" === $header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$ && ($header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$ = 
    (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_rowHeader$), $header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$ = $newElementHeight$$inline_1056_newElementWidth$$inline_1054$$ = (0,D.$JSCompiler_StaticMethods_getNewElementWidth$$)($JSCompiler_StaticMethods_handleResize$self$$, "row", $header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$), 
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_rowHeader$, $header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$), $JSCompiler_StaticMethods_handleResize$self$$.$m_rowHeaderWidth$ = $header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$ + 
    "px", (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_handleResize$self$$)) : "row-resize" === $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ && ("row" === $header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$ ? ($header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$ = 
    (0,window.isNaN)((0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$.parentNode)) ? (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)($JSCompiler_StaticMethods_handleResize$self$$) : (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$.parentNode), $newElementHeight$$inline_1056_newElementWidth$$inline_1054$$ = (0,D.$JSCompiler_StaticMethods_getNewElementHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, 
    "row", $header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$), (0,D.$JSCompiler_StaticMethods_resizeRowHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, $header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$, $newElementHeight$$inline_1056_newElementWidth$$inline_1054$$)) : 
    "column" === $header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$ && ($header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_colHeader$), $header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$ = 
    $newElementHeight$$inline_1056_newElementWidth$$inline_1054$$ = (0,D.$JSCompiler_StaticMethods_getNewElementHeight$$)($JSCompiler_StaticMethods_handleResize$self$$, "column", $header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$), (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_handleResize$self$$.$m_colHeader$, $header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$), 
    $JSCompiler_StaticMethods_handleResize$self$$.$m_colHeaderHeight$ = $header$$14_newElementHeight$$inline_9148_newElementWidth$$inline_9145_oldElementHeight$$inline_1055_oldElementWidth$$inline_1053_resizeHeaderMode$$inline_1052$$ + "px", (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_handleResize$self$$)));
    (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_handleResize$self$$);
    $JSCompiler_StaticMethods_handleResize$self$$.$m_lastMouseX$ = $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$;
    $JSCompiler_StaticMethods_handleResize$self$$.$m_lastMouseY$ = $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$
  }
};
D.$JSCompiler_StaticMethods_handleResizeMouseDown$$ = function $$JSCompiler_StaticMethods_handleResizeMouseDown$$$($JSCompiler_StaticMethods_handleResizeMouseDown$self$$, $event$$56$$) {
  if("col-resize" === $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_cursor$ || "row-resize" === $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_cursor$) {
    $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_isResizing$ = D.$JSCompiler_alias_TRUE$$, (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_utils$) ? ($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseX$ = $event$$56$$.touches[0].pageX, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseY$ = $event$$56$$.touches[0].pageY) : ($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseX$ = 
    $event$$56$$.pageX, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseY$ = $event$$56$$.pageY), $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeLeft$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeMinLeft$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeTop$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeMinTop$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeRight$ = 
    0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeBottom$ = 0
  }
};
D.$JSCompiler_StaticMethods_handleResizeMouseUp$$ = function $$JSCompiler_StaticMethods_handleResizeMouseUp$$$($JSCompiler_StaticMethods_handleResizeMouseUp$self$$, $event$$57$$) {
  var $details$$5_size$$10$$;
  $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_isResizing$ === D.$JSCompiler_alias_TRUE$$ && ($details$$5_size$$10$$ = "col-resize" === $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_cursor$ ? $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$.style.width : $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$.style.height, $details$$5_size$$10$$ = {event:$event$$57$$, ui:{header:$JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$_getKey$($JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$), 
  size:$details$$5_size$$10$$}}, $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.fireEvent("resize", $details$$5_size$$10$$), $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_isResizing$ = D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_cursor$ = "default", $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.find($JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$, "header").style.cursor = $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_cursor$)
};
D.$JSCompiler_StaticMethods__isDOMElementResizable$$ = function $$JSCompiler_StaticMethods__isDOMElementResizable$$$($JSCompiler_StaticMethods__isDOMElementResizable$self$$, $element$$12$$) {
  return"true" === $element$$12$$.getAttribute($JSCompiler_StaticMethods__isDOMElementResizable$self$$.$m_resources$.getMappedAttribute("resizable"))
};
D.$JSCompiler_StaticMethods__isDOMElementSiblingResizable$$ = function $$JSCompiler_StaticMethods__isDOMElementSiblingResizable$$$($JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$, $element$$13$$) {
  if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$13$$, $JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.getMappedStyle("colheadercell"))) {
    if($element$$13$$.previousSibling !== D.$JSCompiler_alias_NULL$$) {
      return"true" === $element$$13$$.previousSibling.getAttribute($JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.$m_resources$.getMappedAttribute("resizable"))
    }
  }else {
    if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($element$$13$$, $JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.getMappedStyle("rowheadercell")) && $element$$13$$.parentNode.previousSibling.firstChild !== D.$JSCompiler_alias_NULL$$) {
      return"true" === $element$$13$$.parentNode.previousSibling.firstChild.getAttribute($JSCompiler_StaticMethods__isDOMElementSiblingResizable$self$$.$m_resources$.getMappedAttribute("resizable"))
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_manageHeaderCursor$$ = function $$JSCompiler_StaticMethods_manageHeaderCursor$$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $event$$58$$) {
  var $elem$$21$$ = $event$$58$$.target, $resizeHeaderMode$$, $edges_leftEdge$$inline_1061$$, $cursorX$$, $cursorY$$, $offsetPixel$$, $widthResizable$$, $heightResizable$$, $siblingResizable$$, $elem$$inline_1059_rtl$$2_targetHeight$$inline_1064$$;
  ($elem$$21$$ = $JSCompiler_StaticMethods_manageHeaderCursor$self$$.find($event$$58$$.target, "colheadercell")) ? $resizeHeaderMode$$ = "column" : ($elem$$21$$ = $JSCompiler_StaticMethods_manageHeaderCursor$self$$.find($event$$58$$.target, "rowheadercell"), $resizeHeaderMode$$ = "row");
  if(!$elem$$21$$) {
    return"default"
  }
  "column" === $resizeHeaderMode$$ ? ($heightResizable$$ = "enable" === (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_options$, $resizeHeaderMode$$).height ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$, $widthResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$21$$), $siblingResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementSiblingResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, 
  $elem$$21$$)) : "row" === $resizeHeaderMode$$ && ($widthResizable$$ = "enable" === (0,D.$JSCompiler_StaticMethods_isResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_options$, $resizeHeaderMode$$).width ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$, $heightResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$21$$), $siblingResizable$$ = (0,D.$JSCompiler_StaticMethods__isDOMElementSiblingResizable$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, 
  $elem$$21$$));
  (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_utils$) ? ($cursorX$$ = $event$$58$$.touches[0].pageX, $cursorY$$ = $event$$58$$.touches[0].pageY, $offsetPixel$$ = 12) : ($cursorX$$ = $event$$58$$.pageX, $cursorY$$ = $event$$58$$.pageY, $offsetPixel$$ = 5);
  $elem$$inline_1059_rtl$$2_targetHeight$$inline_1064$$ = $elem$$21$$;
  var $elementXY$$inline_1060_topEdge$$inline_1062$$, $targetWidth$$inline_1063$$;
  $elementXY$$inline_1060_topEdge$$inline_1062$$ = (0,D.$JSCompiler_StaticMethods_findPos$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$inline_1059_rtl$$2_targetHeight$$inline_1064$$);
  $edges_leftEdge$$inline_1061$$ = $elementXY$$inline_1060_topEdge$$inline_1062$$[0];
  $elementXY$$inline_1060_topEdge$$inline_1062$$ = $elementXY$$inline_1060_topEdge$$inline_1062$$[1];
  (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($elem$$inline_1059_rtl$$2_targetHeight$$inline_1064$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.getMappedStyle("colheadercell")) ? ($targetWidth$$inline_1063$$ = (0,window.isNaN)((0,D.$JSCompiler_StaticMethods_getElementWidth$$)($elem$$inline_1059_rtl$$2_targetHeight$$inline_1064$$)) ? 50 : (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($elem$$inline_1059_rtl$$2_targetHeight$$inline_1064$$), $elem$$inline_1059_rtl$$2_targetHeight$$inline_1064$$ = 
  (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_colHeader$)) : ($targetWidth$$inline_1063$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_rowHeader$), $elem$$inline_1059_rtl$$2_targetHeight$$inline_1064$$ = (0,window.isNaN)((0,D.$JSCompiler_StaticMethods_getElementHeight$$)($elem$$inline_1059_rtl$$2_targetHeight$$inline_1064$$.parentNode)) ? (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)($JSCompiler_StaticMethods_manageHeaderCursor$self$$) : 
  (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($elem$$inline_1059_rtl$$2_targetHeight$$inline_1064$$.parentNode));
  $edges_leftEdge$$inline_1061$$ = [$edges_leftEdge$$inline_1061$$, $elementXY$$inline_1060_topEdge$$inline_1062$$, $edges_leftEdge$$inline_1061$$ + $targetWidth$$inline_1063$$, $elementXY$$inline_1060_topEdge$$inline_1062$$ + $elem$$inline_1059_rtl$$2_targetHeight$$inline_1064$$];
  $elem$$inline_1059_rtl$$2_targetHeight$$inline_1064$$ = $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resources$.isRTLMode();
  if($widthResizable$$ && ($elem$$inline_1059_rtl$$2_targetHeight$$inline_1064$$ ? $cursorX$$ < $edges_leftEdge$$inline_1061$$[0] + $offsetPixel$$ : $cursorX$$ > $edges_leftEdge$$inline_1061$$[2] - $offsetPixel$$)) {
    return $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$21$$, "col-resize"
  }
  if("column" === $resizeHeaderMode$$ && $siblingResizable$$ && ($elem$$inline_1059_rtl$$2_targetHeight$$inline_1064$$ ? $cursorX$$ > $edges_leftEdge$$inline_1061$$[2] - $offsetPixel$$ : $cursorX$$ < $edges_leftEdge$$inline_1061$$[0] + $offsetPixel$$)) {
    if($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$21$$.previousSibling, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ !== D.$JSCompiler_alias_NULL$$) {
      return"col-resize"
    }
  }
  return $heightResizable$$ && $cursorY$$ > $edges_leftEdge$$inline_1061$$[3] - $offsetPixel$$ ? ($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$21$$, "row-resize") : "row" === $resizeHeaderMode$$ && ($siblingResizable$$ && $cursorY$$ < $edges_leftEdge$$inline_1061$$[1] + $offsetPixel$$) && ($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$21$$.parentNode.previousSibling.firstChild, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ !== 
  D.$JSCompiler_alias_NULL$$) ? "row-resize" : "default"
};
D.$JSCompiler_StaticMethods_resizeColWidth$$ = function $$JSCompiler_StaticMethods_resizeColWidth$$$($JSCompiler_StaticMethods_resizeColWidth$self$$, $oldElementWidth$$1_widthChange$$, $newElementWidth$$1$$) {
  var $newScrollerWidth_oldScrollerWidth$$;
  $oldElementWidth$$1_widthChange$$ = $newElementWidth$$1$$ - $oldElementWidth$$1_widthChange$$;
  if(0 != $oldElementWidth$$1_widthChange$$) {
    $newScrollerWidth_oldScrollerWidth$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_scroller$.firstChild);
    $newScrollerWidth_oldScrollerWidth$$ += $oldElementWidth$$1_widthChange$$;
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_scroller$.firstChild, $newScrollerWidth_oldScrollerWidth$$);
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.firstChild, $newScrollerWidth_oldScrollerWidth$$);
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.firstChild, $newScrollerWidth_oldScrollerWidth$$);
    (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_resizeColWidth$self$$);
    (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$, $newElementWidth$$1$$);
    var $dir$$inline_1069$$, $databodyRows$$inline_1070$$, $children$$inline_1071$$, $after$$inline_1072$$, $i$$inline_1073$$, $newStart$$inline_1074$$, $j$$inline_1075$$;
    $dir$$inline_1069$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resources$.isRTLMode() ? "right" : "left";
    $databodyRows$$inline_1070$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.firstChild.childNodes;
    $children$$inline_1071$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$.parentNode.childNodes;
    $after$$inline_1072$$ = D.$JSCompiler_alias_FALSE$$;
    if($children$$inline_1071$$.length === $databodyRows$$inline_1070$$[1].childNodes.length) {
      $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.style.display = "none";
      $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.style.display = "none";
      for($i$$inline_1073$$ = 0;$i$$inline_1073$$ < $children$$inline_1071$$.length;$i$$inline_1073$$ += 1) {
        if($children$$inline_1071$$[$i$$inline_1073$$] !== $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$ && $after$$inline_1072$$ === D.$JSCompiler_alias_TRUE$$) {
          $newStart$$inline_1074$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($children$$inline_1071$$[$i$$inline_1073$$], $dir$$inline_1069$$) + $oldElementWidth$$1_widthChange$$;
          (0,D.$JSCompiler_StaticMethods_setElementDir$$)($children$$inline_1071$$[$i$$inline_1073$$], $newStart$$inline_1074$$, $dir$$inline_1069$$);
          for($j$$inline_1075$$ = 1;$j$$inline_1075$$ < $databodyRows$$inline_1070$$.length;$j$$inline_1075$$ += 1) {
            (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databodyRows$$inline_1070$$[$j$$inline_1075$$].childNodes[$i$$inline_1073$$], $newStart$$inline_1074$$, $dir$$inline_1069$$)
          }
        }else {
          if($children$$inline_1071$$[$i$$inline_1073$$] === $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$) {
            $after$$inline_1072$$ = D.$JSCompiler_alias_TRUE$$;
            $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_sizingManager$.$setSize$("column", $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$.getAttribute($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resources$.getMappedAttribute("key")), $newElementWidth$$1$$);
            for($j$$inline_1075$$ = 1;$j$$inline_1075$$ < $databodyRows$$inline_1070$$.length;$j$$inline_1075$$ += 1) {
              (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databodyRows$$inline_1070$$[$j$$inline_1075$$].childNodes[$i$$inline_1073$$], $newElementWidth$$1$$)
            }
          }
        }
      }
      $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.style.display = "block";
      $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.style.display = "block"
    }
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_endColPixel$ += $oldElementWidth$$1_widthChange$$;
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_endColHeaderPixel$ += $oldElementWidth$$1_widthChange$$;
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_avgColWidth$ = $newScrollerWidth_oldScrollerWidth$$ / $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_dataSource$.getCount("column")
  }
};
D.$JSCompiler_StaticMethods_resizeRowHeight$$ = function $$JSCompiler_StaticMethods_resizeRowHeight$$$($JSCompiler_StaticMethods_resizeRowHeight$self$$, $heightChange_oldElementHeight$$1$$, $newElementHeight$$1$$) {
  var $newScrollerHeight_oldScrollerHeight$$, $databodyRows$$inline_1080_newParentHeight$$;
  $heightChange_oldElementHeight$$1$$ = $newElementHeight$$1$$ - $heightChange_oldElementHeight$$1$$;
  if(0 != $heightChange_oldElementHeight$$1$$) {
    $newScrollerHeight_oldScrollerHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_scroller$.firstChild);
    $newScrollerHeight_oldScrollerHeight$$ += $heightChange_oldElementHeight$$1$$;
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode, $newElementHeight$$1$$);
    $databodyRows$$inline_1080_newParentHeight$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.firstChild) + $heightChange_oldElementHeight$$1$$;
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.firstChild, $databodyRows$$inline_1080_newParentHeight$$);
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_scroller$.firstChild, $newScrollerHeight_oldScrollerHeight$$);
    (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.firstChild, $newScrollerHeight_oldScrollerHeight$$);
    var $rowHeaders$$inline_1081$$, $after$$inline_1082$$, $i$$inline_1083$$, $newStart$$inline_1084$$;
    $databodyRows$$inline_1080_newParentHeight$$ = $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.firstChild.childNodes;
    $rowHeaders$$inline_1081$$ = $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode.parentNode.childNodes;
    $after$$inline_1082$$ = D.$JSCompiler_alias_FALSE$$;
    if($databodyRows$$inline_1080_newParentHeight$$.length === $rowHeaders$$inline_1081$$.length) {
      $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.style.display = "none";
      $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.style.display = "none";
      for($i$$inline_1083$$ = 1;$i$$inline_1083$$ < $rowHeaders$$inline_1081$$.length;$i$$inline_1083$$ += 1) {
        $rowHeaders$$inline_1081$$[$i$$inline_1083$$].firstChild !== $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$ && $after$$inline_1082$$ === D.$JSCompiler_alias_TRUE$$ ? ($newStart$$inline_1084$$ = (0,D.$JSCompiler_StaticMethods_getElementDir$$)($rowHeaders$$inline_1081$$[$i$$inline_1083$$], "top") + $heightChange_oldElementHeight$$1$$, (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeaders$$inline_1081$$[$i$$inline_1083$$], $newStart$$inline_1084$$, "top"), (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databodyRows$$inline_1080_newParentHeight$$[$i$$inline_1083$$], 
        $newStart$$inline_1084$$, "top")) : $rowHeaders$$inline_1081$$[$i$$inline_1083$$].firstChild === $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$ && ($after$$inline_1082$$ = D.$JSCompiler_alias_TRUE$$, $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_sizingManager$.$setSize$("row", $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode.getAttribute($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resources$.getMappedAttribute("key")), $newElementHeight$$1$$), 
        (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databodyRows$$inline_1080_newParentHeight$$[$i$$inline_1083$$], $newElementHeight$$1$$))
      }
      $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.style.display = "block";
      $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.style.display = "block"
    }
    (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_resizeRowHeight$self$$);
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_endRowPixel$ += $heightChange_oldElementHeight$$1$$;
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_endRowHeaderPixel$ += $heightChange_oldElementHeight$$1$$;
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_avgRowHeight$ = $newScrollerHeight_oldScrollerHeight$$ / $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_dataSource$.getCount("row")
  }
};
D.$JSCompiler_StaticMethods_getNewElementWidth$$ = function $$JSCompiler_StaticMethods_getNewElementWidth$$$($JSCompiler_StaticMethods_getNewElementWidth$self$$, $axis$$31$$, $oldElementWidth$$3$$) {
  var $minWidth$$, $deltaWidth$$, $newElementWidth$$3$$, $halfGridWidth$$;
  $minWidth$$ = (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_utils$) ? 24 : 10;
  $deltaWidth$$ = $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_resources$.isRTLMode() ? $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_lastMouseX$ - $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_currentMouseX$ : $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_currentMouseX$ - $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_lastMouseX$;
  $newElementWidth$$3$$ = $oldElementWidth$$3$$ + $deltaWidth$$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$;
  $halfGridWidth$$ = window.Math.round((0,D.$JSCompiler_StaticMethods_getElementWidth$$)($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_root$) / 2);
  $newElementWidth$$3$$ < $minWidth$$ ? ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ += $deltaWidth$$ - $minWidth$$ + $oldElementWidth$$3$$, $newElementWidth$$3$$ = $minWidth$$) : ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ = 0, $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ = 0);
  "row" === $axis$$31$$ && ($newElementWidth$$3$$ > $halfGridWidth$$ ? ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$ += $deltaWidth$$ - $halfGridWidth$$ + $oldElementWidth$$3$$, $newElementWidth$$3$$ = $halfGridWidth$$) : $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$ = 0);
  return $newElementWidth$$3$$
};
D.$JSCompiler_StaticMethods_getNewElementHeight$$ = function $$JSCompiler_StaticMethods_getNewElementHeight$$$($JSCompiler_StaticMethods_getNewElementHeight$self$$, $axis$$32$$, $oldElementHeight$$3$$) {
  var $minHeight$$, $deltaHeight$$, $newElementHeight$$3$$, $halfGridHeight$$;
  $minHeight$$ = (0,D.$JSCompiler_StaticMethods_isTouchDevice$$)($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_utils$) ? 24 : 10;
  $deltaHeight$$ = $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_currentMouseY$ - $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_lastMouseY$;
  $newElementHeight$$3$$ = $oldElementHeight$$3$$ + $deltaHeight$$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$;
  $halfGridHeight$$ = window.Math.round((0,D.$JSCompiler_StaticMethods_getElementHeight$$)($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_root$) / 2);
  $newElementHeight$$3$$ < $minHeight$$ ? ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ += $deltaHeight$$ - $minHeight$$ + $oldElementHeight$$3$$, $newElementHeight$$3$$ = $minHeight$$) : ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ = 0, $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ = 0);
  "column" === $axis$$32$$ && ($newElementHeight$$3$$ > $halfGridHeight$$ ? ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$ += $deltaHeight$$ - $halfGridHeight$$ + $oldElementHeight$$3$$, $newElementHeight$$3$$ = $halfGridHeight$$) : $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$ = 0);
  return $newElementHeight$$3$$
};
D.$JSCompiler_StaticMethods_manageResizeScrollbars$$ = function $$JSCompiler_StaticMethods_manageResizeScrollbars$$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$) {
  var $databodyWidth$$3_width$$23$$, $height$$26_scrollerHeight$$3$$, $borderWidth$$1_colHeader$$7$$, $rowHeader$$11$$, $scroller$$10$$, $databody$$12$$, $colHeaderHeight$$4$$, $rowHeaderWidth$$3$$, $databodyContentWidth$$1$$, $databodyContentHeight$$3$$, $databodyHeight$$3$$, $dir$$12_isDatabodyHorizontalScrollbarRequired$$1$$, $isDatabodyVerticalScrollbarRequired$$1$$, $scrollbarSize$$2$$, $scrollerWidth$$3$$;
  $borderWidth$$1_colHeader$$7$$ = (0,D.$JSCompiler_StaticMethods_getRootBorderWidth$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$);
  $databodyWidth$$3_width$$23$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.getWidth() - 2 * $borderWidth$$1_colHeader$$7$$;
  $height$$26_scrollerHeight$$3$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.getHeight() - 2 * $borderWidth$$1_colHeader$$7$$;
  $borderWidth$$1_colHeader$$7$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_colHeader$;
  $rowHeader$$11$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_rowHeader$;
  $scroller$$10$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scroller$;
  $databody$$12$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_databody$;
  $colHeaderHeight$$4$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($borderWidth$$1_colHeader$$7$$);
  $rowHeaderWidth$$3$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($rowHeader$$11$$);
  $databodyContentWidth$$1$$ = (0,D.$JSCompiler_StaticMethods_getElementWidth$$)($databody$$12$$.firstChild);
  $databodyContentHeight$$3$$ = (0,D.$JSCompiler_StaticMethods_getElementHeight$$)($databody$$12$$.firstChild);
  $height$$26_scrollerHeight$$3$$ -= $colHeaderHeight$$4$$;
  $scrollerWidth$$3$$ = $databodyWidth$$3_width$$23$$ - $rowHeaderWidth$$3$$;
  $databodyWidth$$3_width$$23$$ = window.Math.min($databodyContentWidth$$1$$, $scrollerWidth$$3$$);
  $databodyHeight$$3$$ = window.Math.min($databodyContentHeight$$3$$, $height$$26_scrollerHeight$$3$$);
  $scrollbarSize$$2$$ = (0,D.$JSCompiler_StaticMethods_getScrollbarSize$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_utils$);
  ($dir$$12_isDatabodyHorizontalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $scrollerWidth$$3$$)) ? $isDatabodyVerticalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $height$$26_scrollerHeight$$3$$ - $scrollbarSize$$2$$) : ($isDatabodyVerticalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, 
  $height$$26_scrollerHeight$$3$$)) && ($dir$$12_isDatabodyHorizontalScrollbarRequired$$1$$ = (0,D.$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $scrollerWidth$$3$$ - $scrollbarSize$$2$$));
  $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ = $dir$$12_isDatabodyHorizontalScrollbarRequired$$1$$;
  $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ = $isDatabodyVerticalScrollbarRequired$$1$$;
  $dir$$12_isDatabodyHorizontalScrollbarRequired$$1$$ && ($height$$26_scrollerHeight$$3$$ - $scrollbarSize$$2$$ >= $databodyHeight$$3$$ || ($databodyHeight$$3$$ = $height$$26_scrollerHeight$$3$$ - $scrollbarSize$$2$$));
  $isDatabodyVerticalScrollbarRequired$$1$$ && ($scrollerWidth$$3$$ - $scrollbarSize$$2$$ >= $databodyWidth$$3_width$$23$$ || ($databodyWidth$$3_width$$23$$ = $scrollerWidth$$3$$ - $scrollbarSize$$2$$));
  $dir$$12_isDatabodyHorizontalScrollbarRequired$$1$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($rowHeader$$11$$, $colHeaderHeight$$4$$, "top");
  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($rowHeader$$11$$, $databodyHeight$$3$$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($borderWidth$$1_colHeader$$7$$, $rowHeaderWidth$$3$$, $dir$$12_isDatabodyHorizontalScrollbarRequired$$1$$);
  (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($borderWidth$$1_colHeader$$7$$, $databodyWidth$$3_width$$23$$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$12$$, $colHeaderHeight$$4$$, "top");
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($databody$$12$$, $rowHeaderWidth$$3$$, $dir$$12_isDatabodyHorizontalScrollbarRequired$$1$$);
  (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($databody$$12$$, $databodyWidth$$3_width$$23$$);
  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($databody$$12$$, $databodyHeight$$3$$);
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$10$$, $colHeaderHeight$$4$$, "top");
  (0,D.$JSCompiler_StaticMethods_setElementDir$$)($scroller$$10$$, $rowHeaderWidth$$3$$, $dir$$12_isDatabodyHorizontalScrollbarRequired$$1$$);
  (0,D.$JSCompiler_StaticMethods_setElementWidth$$)($scroller$$10$$, $scrollerWidth$$3$$);
  (0,D.$JSCompiler_StaticMethods_setElementHeight$$)($scroller$$10$$, $height$$26_scrollerHeight$$3$$);
  $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scrollWidth$ = $databodyContentWidth$$1$$ - $databodyWidth$$3_width$$23$$;
  $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scrollHeight$ = $databodyContentHeight$$3$$ - $databodyHeight$$3$$;
  (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_manageResizeScrollbars$self$$)
};
D.$JSCompiler_StaticMethods_handleContextMenuResize$$ = function $$JSCompiler_StaticMethods_handleContextMenuResize$$$($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$43$$, $id$$4$$, $val$$25_value$$51$$) {
  $val$$25_value$$51$$ = (0,window.parseInt)($val$$25_value$$51$$, 10);
  if((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($initialValue_target$$43$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("sortascending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($initialValue_target$$43$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("sortdescending")) || (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($initialValue_target$$43$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("sortindicators"))) {
    $initialValue_target$$43$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$43$$)
  }
  $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$ = $initialValue_target$$43$$;
  "resizeWidth" === $id$$4$$ ? ($initialValue_target$$43$$ = $initialValue_target$$43$$.offsetWidth, $initialValue_target$$43$$ !== $val$$25_value$$51$$ && ((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("colheadercell")) ? (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$) && 
  (0,D.$JSCompiler_StaticMethods_resizeColWidth$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $initialValue_target$$43$$, $val$$25_value$$51$$) : ((0,D.$JSCompiler_StaticMethods_setElementWidth$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_rowHeader$, $val$$25_value$$51$$), $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_rowHeaderWidth$ = $val$$25_value$$51$$ + "px", (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$)))) : 
  "resizeHeight" === $id$$4$$ && ($initialValue_target$$43$$ = $initialValue_target$$43$$.offsetHeight, $initialValue_target$$43$$ !== $val$$25_value$$51$$ && ((0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.getMappedStyle("colheadercell")) ? ((0,D.$JSCompiler_StaticMethods_setElementHeight$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_colHeader$, 
  $val$$25_value$$51$$), $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_colHeaderHeight$ = $val$$25_value$$51$$ + "px", (0,D.$JSCompiler_StaticMethods_manageResizeScrollbars$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$)) : (0,D.$JSCompiler_StaticMethods__isDOMElementResizable$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, $JSCompiler_StaticMethods_handleContextMenuResize$self$$.$m_resizingElement$) && (0,D.$JSCompiler_StaticMethods_resizeRowHeight$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$, 
  $initialValue_target$$43$$, $val$$25_value$$51$$)));
  (0,D.$JSCompiler_StaticMethods_buildCorners$$)($JSCompiler_StaticMethods_handleContextMenuResize$self$$)
};
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
D.$JSCompiler_StaticMethods__toggleSortIconDirection$$ = function $$JSCompiler_StaticMethods__toggleSortIconDirection$$$($JSCompiler_StaticMethods__toggleSortIconDirection$self$$, $header$$17_icon$$1$$, $direction$$6$$) {
  $header$$17_icon$$1$$ != D.$JSCompiler_alias_NULL$$ && ($header$$17_icon$$1$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($header$$17_icon$$1$$), "descending" === $direction$$6$$ && (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$17_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortascending")) ? ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($header$$17_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortascending")), 
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($header$$17_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortdescending"))) : "ascending" === $direction$$6$$ && (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($header$$17_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortdescending")) && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($header$$17_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortdescending")), 
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($header$$17_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortascending"))))
};
D.$JSCompiler_StaticMethods__showOrHideSortIcon$$ = function $$JSCompiler_StaticMethods__showOrHideSortIcon$$$($JSCompiler_StaticMethods__showOrHideSortIcon$self$$, $header$$18$$, $hide$$) {
  var $icon$$2$$, $sorted$$ = D.$JSCompiler_alias_FALSE$$;
  $header$$18$$ != D.$JSCompiler_alias_NULL$$ && ($icon$$2$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($header$$18$$), $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ && ($sorted$$ = $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.$m_sortInfo$.key === $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.$_getKey$($header$$18$$)), $hide$$ === D.$JSCompiler_alias_FALSE$$ && !$sorted$$ ? ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($icon$$2$$, 
  $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("disabled")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($icon$$2$$, $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("default"))) : $hide$$ === D.$JSCompiler_alias_TRUE$$ && !$sorted$$ && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($icon$$2$$, $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("default")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($icon$$2$$, $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("disabled"))))
};
D.$JSCompiler_StaticMethods__handleHeaderSort$$ = function $$JSCompiler_StaticMethods__handleHeaderSort$$$($JSCompiler_StaticMethods__handleHeaderSort$self$$, $event$$79$$, $direction$$9$$) {
  var $header$$20$$;
  $header$$20$$ = (0,D.$JSCompiler_StaticMethods_findHeader$$)($JSCompiler_StaticMethods__handleHeaderSort$self$$, $event$$79$$.target);
  $header$$20$$ != D.$JSCompiler_alias_NULL$$ && ($direction$$9$$ == D.$JSCompiler_alias_NULL$$ && ($direction$$9$$ = $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ && $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$.key === $JSCompiler_StaticMethods__handleHeaderSort$self$$.$_getKey$($header$$20$$) ? "ascending" === $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$.direction ? "descending" : "ascending" : "ascending"), (0,D.$JSCompiler_StaticMethods__doHeaderSort$$)($JSCompiler_StaticMethods__handleHeaderSort$self$$, 
  $event$$79$$, $header$$20$$, $direction$$9$$))
};
D.$JSCompiler_StaticMethods__doHeaderSort$$ = function $$JSCompiler_StaticMethods__doHeaderSort$$$($JSCompiler_StaticMethods__doHeaderSort$self$$, $details$$7_event$$81$$, $criteria$$1_header$$22_sortedHeader$$inline_1149$$, $direction$$11$$) {
  var $key$$42$$, $axis$$33_columnHeaderCellClassName$$inline_1141$$;
  $criteria$$1_header$$22_sortedHeader$$inline_1149$$.setAttribute($JSCompiler_StaticMethods__doHeaderSort$self$$.$m_resources$.getMappedAttribute("sortDir"), $direction$$11$$);
  $key$$42$$ = $JSCompiler_StaticMethods__doHeaderSort$self$$.$_getKey$($criteria$$1_header$$22_sortedHeader$$inline_1149$$);
  var $oldSortedHeader$$inline_1145_rowHeaderCellClassName$$inline_1142_sortIcon$$inline_1150$$;
  $axis$$33_columnHeaderCellClassName$$inline_1141$$ = $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("colheadercell");
  $oldSortedHeader$$inline_1145_rowHeaderCellClassName$$inline_1142_sortIcon$$inline_1150$$ = $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("rowheadercell");
  $axis$$33_columnHeaderCellClassName$$inline_1141$$ = (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($criteria$$1_header$$22_sortedHeader$$inline_1149$$, $axis$$33_columnHeaderCellClassName$$inline_1141$$) ? "column" : (0,D.$JSCompiler_StaticMethods_containsCSSClassName$$)($criteria$$1_header$$22_sortedHeader$$inline_1149$$, $oldSortedHeader$$inline_1145_rowHeaderCellClassName$$inline_1142_sortIcon$$inline_1150$$) ? "row" : D.$JSCompiler_alias_NULL$$;
  var $oldsortIcon$$inline_1146$$;
  $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ && ($oldSortedHeader$$inline_1145_rowHeaderCellClassName$$inline_1142_sortIcon$$inline_1150$$ = (0,D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.key), $oldsortIcon$$inline_1146$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($oldSortedHeader$$inline_1145_rowHeaderCellClassName$$inline_1142_sortIcon$$inline_1150$$), 
  (0,D.$JSCompiler_StaticMethods__toggleSortIconDirection$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $oldSortedHeader$$inline_1145_rowHeaderCellClassName$$inline_1142_sortIcon$$inline_1150$$, "ascending"), "descending" === $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.direction && ((0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldsortIcon$$inline_1146$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("sortdescending")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($oldsortIcon$$inline_1146$$, 
  $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("sortascending"))), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($oldsortIcon$$inline_1146$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("disabled")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldsortIcon$$inline_1146$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("default")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldSortedHeader$$inline_1145_rowHeaderCellClassName$$inline_1142_sortIcon$$inline_1150$$.lastChild, 
  $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("enabled")));
  $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ = {key:$key$$42$$, axis:$axis$$33_columnHeaderCellClassName$$inline_1141$$, direction:$direction$$11$$};
  (0,D.$JSCompiler_StaticMethods__toggleSortIconDirection$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $criteria$$1_header$$22_sortedHeader$$inline_1149$$, $direction$$11$$);
  $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ != D.$JSCompiler_alias_NULL$$ && ($criteria$$1_header$$22_sortedHeader$$inline_1149$$ = (0,D.$JSCompiler_StaticMethods__findColumnHeaderByKey$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.key), $oldSortedHeader$$inline_1145_rowHeaderCellClassName$$inline_1142_sortIcon$$inline_1150$$ = (0,D.$JSCompiler_StaticMethods__getSortIcon$$)($criteria$$1_header$$22_sortedHeader$$inline_1149$$), 
  (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($oldSortedHeader$$inline_1145_rowHeaderCellClassName$$inline_1142_sortIcon$$inline_1150$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("default")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldSortedHeader$$inline_1145_rowHeaderCellClassName$$inline_1142_sortIcon$$inline_1150$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("disabled")), (0,D.$JSCompiler_StaticMethods_removeCSSClassName$$)($oldSortedHeader$$inline_1145_rowHeaderCellClassName$$inline_1142_sortIcon$$inline_1150$$, 
  $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("selected")), (0,D.$JSCompiler_StaticMethods_addCSSClassName$$)($criteria$$1_header$$22_sortedHeader$$inline_1149$$.lastChild, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("enabled")));
  $direction$$11$$ != D.$JSCompiler_alias_NULL$$ && ($key$$42$$ != D.$JSCompiler_alias_NULL$$ && $axis$$33_columnHeaderCellClassName$$inline_1141$$ != D.$JSCompiler_alias_NULL$$) && ((0,D.$JSCompiler_StaticMethods_showStatusText$$)($JSCompiler_StaticMethods__doHeaderSort$self$$), $criteria$$1_header$$22_sortedHeader$$inline_1149$$ = {axis:$axis$$33_columnHeaderCellClassName$$inline_1141$$, key:$key$$42$$, direction:$direction$$11$$}, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_dataSource$.sort($criteria$$1_header$$22_sortedHeader$$inline_1149$$, 
  {success:$JSCompiler_StaticMethods__doHeaderSort$self$$.$_handleSortSuccess$.bind($JSCompiler_StaticMethods__doHeaderSort$self$$), error:$JSCompiler_StaticMethods__doHeaderSort$self$$.$_handleSortError$.bind($JSCompiler_StaticMethods__doHeaderSort$self$$)}), $details$$7_event$$81$$ = {event:$details$$7_event$$81$$, ui:{header:$key$$42$$, direction:$direction$$11$$}}, $JSCompiler_StaticMethods__doHeaderSort$self$$.fireEvent("sort", $details$$7_event$$81$$));
  (0,D.$JSCompiler_StaticMethods__setAccInfoText$$)($JSCompiler_StaticMethods__doHeaderSort$self$$, "ascending" === $direction$$11$$ ? "accessibleSortAscending" : "accessibleSortDescending", {id:$key$$42$$})
};
D.$DvtDataGrid$$.prototype.$_handleSortError$ = function $$DvtDataGrid$$$$$_handleSortError$$() {
  (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this)
};
D.$DvtDataGrid$$.prototype.$_handleSortSuccess$ = function $$DvtDataGrid$$$$$_handleSortSuccess$$() {
  (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this);
  var $newRowHeaderElements$$ = window.document.createElement("div");
  $newRowHeaderElements$$.id = (0,D.$JSCompiler_StaticMethods_createSubId$$)(this, "rowHeader");
  $newRowHeaderElements$$.className = this.$m_resources$.getMappedStyle("rowheader") + " " + this.$m_resources$.getMappedStyle("header");
  this.fetchHeaders("row", this.$m_startRow$, $newRowHeaderElements$$, this.$m_endRow$ - this.$m_startRow$);
  this.fetchCells(this.$m_databody$, this.$m_scroller$, this.$m_startRow$, this.$m_startCol$, this.$m_endRow$ - this.$m_startRow$, this.$m_endCol$ - this.$m_startCol$, {success:this.$handleCellsFetchSuccessForSort$.bind(this, $newRowHeaderElements$$), error:this.$handleCellsFetchError$})
};
D.$DvtDataGrid$$.prototype.$handleCellsFetchSuccessForSort$ = function $$DvtDataGrid$$$$$handleCellsFetchSuccessForSort$$($newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$, $cellSet$$13_oldRowElements$$, $cellRange$$9_delay$$inline_1185_dkey$$inline_1184_newRowElements_order$$inline_1187$$) {
  var $oldLength$$inline_1162_oldRowHeaderElements_rowStart$$9$$, $oldSet$$inline_1163_rowCount$$7$$, $animOrder$$inline_1165_columnStart$$6$$, $newRowHeaderElementsFragment$$;
  this.$m_fetching$.cells = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods_isFetchComplete$$)(this) && (0,D.$JSCompiler_StaticMethods_hideStatusText$$)(this);
  $oldLength$$inline_1162_oldRowHeaderElements_rowStart$$9$$ = $cellRange$$9_delay$$inline_1185_dkey$$inline_1184_newRowElements_order$$inline_1187$$[0].start;
  $oldSet$$inline_1163_rowCount$$7$$ = $cellSet$$13_oldRowElements$$.getCount("row");
  $animOrder$$inline_1165_columnStart$$6$$ = $cellRange$$9_delay$$inline_1185_dkey$$inline_1184_newRowElements_order$$inline_1187$$[1].start;
  $cellSet$$13_oldRowElements$$.getCount("column");
  $cellRange$$9_delay$$inline_1185_dkey$$inline_1184_newRowElements_order$$inline_1187$$ = window.document.createDocumentFragment();
  $cellRange$$9_delay$$inline_1185_dkey$$inline_1184_newRowElements_order$$inline_1187$$.appendChild(window.document.createElement("div"));
  $newRowHeaderElementsFragment$$ = window.document.createDocumentFragment();
  (0,D.$JSCompiler_StaticMethods__addRows$$)(this, $cellRange$$9_delay$$inline_1185_dkey$$inline_1184_newRowElements_order$$inline_1187$$, D.$JSCompiler_alias_TRUE$$, this.$m_startRowPixel$, $oldLength$$inline_1162_oldRowHeaderElements_rowStart$$9$$, $oldSet$$inline_1163_rowCount$$7$$, $animOrder$$inline_1165_columnStart$$6$$, D.$JSCompiler_alias_FALSE$$, $cellSet$$13_oldRowElements$$);
  $cellSet$$13_oldRowElements$$ = this.$m_databody$.firstChild;
  $oldLength$$inline_1162_oldRowHeaderElements_rowStart$$9$$ = this.$m_rowHeader$.firstChild;
  if($newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$ && $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$.firstChild) {
    for(;$newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$.firstChild.firstChild;) {
      $newRowHeaderElementsFragment$$.appendChild($newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$.firstChild.firstChild)
    }
  }
  $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$ = $oldLength$$inline_1162_oldRowHeaderElements_rowStart$$9$$;
  var $me$$inline_1160$$, $pos$$inline_1161_restSet$$inline_1166$$, $idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$, $dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$, $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$, $rowHeight$$inline_1169$$, $limitRangeInPixels$$inline_1172_offset$$inline_1170$$, $rowsForAppend$$inline_1174$$, $rowHeadersForAppend$$inline_1175$$, $restSetLength$$inline_1176$$, 
  $j$$inline_1179_rowPos$$inline_1191$$, $k$$inline_1181_key$$inline_1180_l$$inline_1183$$, $keyAttr$$inline_1186$$, $rowHeaderSupport$$inline_1193$$, $newElementSetClone$$inline_1194$$, $newRowHeaderElementsClone$$inline_1195$$;
  $rowHeaderSupport$$inline_1193$$ = D.$JSCompiler_alias_FALSE$$;
  $me$$inline_1160$$ = this;
  $pos$$inline_1161_restSet$$inline_1166$$ = 0;
  $newElementSetClone$$inline_1194$$ = $cellRange$$9_delay$$inline_1185_dkey$$inline_1184_newRowElements_order$$inline_1187$$.cloneNode(D.$JSCompiler_alias_TRUE$$);
  $newRowHeaderElementsClone$$inline_1195$$ = $newRowHeaderElementsFragment$$ ? $newRowHeaderElementsFragment$$.cloneNode(D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_NULL$$;
  $keyAttr$$inline_1186$$ = this.$m_resources$.getMappedAttribute("key");
  $oldLength$$inline_1162_oldRowHeaderElements_rowStart$$9$$ = $cellSet$$13_oldRowElements$$.childElementCount;
  $idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$ = (0,D.$JSCompiler_StaticMethods_getDataKeySet$$)(this, $cellRange$$9_delay$$inline_1185_dkey$$inline_1184_newRowElements_order$$inline_1187$$);
  $oldSet$$inline_1163_rowCount$$7$$ = (0,D.$JSCompiler_StaticMethods_getDataKeySet$$)(this, $cellSet$$13_oldRowElements$$);
  $animOrder$$inline_1165_columnStart$$6$$ = [];
  $pos$$inline_1161_restSet$$inline_1166$$ = [];
  $rowsForAppend$$inline_1174$$ = [];
  $rowHeadersForAppend$$inline_1175$$ = [];
  $restSetLength$$inline_1176$$ = 0;
  $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$ = this.getHeight() - (0,D.$JSCompiler_StaticMethods_getElementHeight$$)(this.$m_colHeader$);
  $rowHeight$$inline_1169$$ = (0,D.$JSCompiler_StaticMethods_getDefaultRowHeight$$)(this);
  ($limitRangeInPixels$$inline_1172_offset$$inline_1170$$ = (0,window.parseInt)($cellSet$$13_oldRowElements$$.childNodes[1].style.top.split("px")[0])) || ($limitRangeInPixels$$inline_1172_offset$$inline_1170$$ = 0);
  $dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$ = this.$m_currentScrollTop$ - $limitRangeInPixels$$inline_1172_offset$$inline_1170$$;
  $limitRangeInPixels$$inline_1172_offset$$inline_1170$$ = [$dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$, $dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$ + $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$];
  $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$ = [window.Math.ceil($dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$ / $rowHeight$$inline_1169$$), window.Math.floor(($dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$ + $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$) / $rowHeight$$inline_1169$$)];
  $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$.childElementCount != $oldLength$$inline_1162_oldRowHeaderElements_rowStart$$9$$ && $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$.firstChild.children.length == $oldLength$$inline_1162_oldRowHeaderElements_rowStart$$9$$ + 1 && ($newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$ = $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$.firstChild);
  if($newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$.childElementCount == $oldLength$$inline_1162_oldRowHeaderElements_rowStart$$9$$ && $newRowHeaderElementsFragment$$) {
    $rowHeaderSupport$$inline_1193$$ = D.$JSCompiler_alias_TRUE$$;
    for($dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$ = 1;$dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$ < $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$.childElementCount;$dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$++) {
      $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$.childNodes[$dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$].id += "_old"
    }
  }
  if($rowHeaderSupport$$inline_1193$$) {
    for($dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$ = 0;$dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$ < $newRowHeaderElementsClone$$inline_1195$$.childNodes.length;$dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$++) {
      $newRowHeaderElementsClone$$inline_1195$$.childNodes[$dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$].style.top = $cellSet$$13_oldRowElements$$.children[$dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$].style.top
    }
  }
  for($dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$ = 0;$dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$ < $oldSet$$inline_1163_rowCount$$7$$.length;$dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$++) {
    $animOrder$$inline_1165_columnStart$$6$$[$oldSet$$inline_1163_rowCount$$7$$[$dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$]] = $dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$
  }
  for($j$$inline_1179_rowPos$$inline_1191$$ = 0;$j$$inline_1179_rowPos$$inline_1191$$ < $idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$.length;$j$$inline_1179_rowPos$$inline_1191$$++) {
    if($animOrder$$inline_1165_columnStart$$6$$.hasOwnProperty($idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$])) {
      if($animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] < $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$[0] - 1 && $j$$inline_1179_rowPos$$inline_1191$$ < $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$[0] - 1 || $animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] > 
      $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$[1] + 1 && $j$$inline_1179_rowPos$$inline_1191$$ > $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$[1] + 1 || $animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] < $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$[0] - 
      1 && $j$$inline_1179_rowPos$$inline_1191$$ > $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$[1] + 1 || $animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] > $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$[1] + 1 && $j$$inline_1179_rowPos$$inline_1191$$ < $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$[0] - 
      1) {
        $animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] = "no_0"
      }
      (0,D.$JSCompiler_StaticMethods_isNumeric$$)($animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]]) && ($animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] > $j$$inline_1179_rowPos$$inline_1191$$ ? ($j$$inline_1179_rowPos$$inline_1191$$ < $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$[0] && 
      $animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] > $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$[0] ? $dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$ = $animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] - ($bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$[0] + 
      1) : ((0,D.$JSCompiler_StaticMethods_isNumeric$$)($animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]]) && $animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] > $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$[1] && ($dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$ = 
      $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$[1] - $animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] - 1, (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($cellSet$$13_oldRowElements$$.childNodes[$animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] + 1], 0, 0, 
      "linear", $dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$ * $rowHeight$$inline_1169$$), $rowHeaderSupport$$inline_1193$$ && (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$.childNodes[$animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] + 1], 0, 0, "linear", ($dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$ + 
      1) * $rowHeight$$inline_1169$$)), $dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$ = $animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] - $j$$inline_1179_rowPos$$inline_1191$$), $animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] = "up_-" + $dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$) : 
      $animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] < $j$$inline_1179_rowPos$$inline_1191$$ ? ($j$$inline_1179_rowPos$$inline_1191$$ > $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$[1] && $animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] < $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$[1] ? 
      $dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$ = $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$[1] + 1 - $animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] : ((0,D.$JSCompiler_StaticMethods_isNumeric$$)($animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]]) && 
      $animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] < $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$[0] && ($dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$ = $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$[0] - $animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] - 
      1, (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($cellSet$$13_oldRowElements$$.childNodes[$animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] + 1], 0, 0, "linear", $dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$ * $rowHeight$$inline_1169$$), $rowHeaderSupport$$inline_1193$$ && (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$.childNodes[$animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] + 
      1], 0, 0, "linear", $dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$ * $rowHeight$$inline_1169$$)), $dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$ = $j$$inline_1179_rowPos$$inline_1191$$ - $animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]]), $animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] = 
      "down_" + $dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$) : $animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] == $j$$inline_1179_rowPos$$inline_1191$$ && ($animOrder$$inline_1165_columnStart$$6$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] = "no_0"))
    }else {
      $pos$$inline_1161_restSet$$inline_1166$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$[$j$$inline_1179_rowPos$$inline_1191$$]] = $j$$inline_1179_rowPos$$inline_1191$$
    }
  }
  for($idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$ = 0;$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$ < $oldSet$$inline_1163_rowCount$$7$$.length;$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$++) {
    $animOrder$$inline_1165_columnStart$$6$$.hasOwnProperty($oldSet$$inline_1163_rowCount$$7$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$]) && (0,D.$JSCompiler_StaticMethods_isNumeric$$)($animOrder$$inline_1165_columnStart$$6$$[$oldSet$$inline_1163_rowCount$$7$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$]]) && ($animOrder$$inline_1165_columnStart$$6$$[$oldSet$$inline_1163_rowCount$$7$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$]] < $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$[0] && 
    ($animOrder$$inline_1165_columnStart$$6$$[$oldSet$$inline_1163_rowCount$$7$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$]] = "no_0"), $animOrder$$inline_1165_columnStart$$6$$[$oldSet$$inline_1163_rowCount$$7$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$]] > $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$[1] && ($animOrder$$inline_1165_columnStart$$6$$[$oldSet$$inline_1163_rowCount$$7$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$]] = 
    "no_0"), $animOrder$$inline_1165_columnStart$$6$$[$oldSet$$inline_1163_rowCount$$7$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$]] >= $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$[0] && $animOrder$$inline_1165_columnStart$$6$$[$oldSet$$inline_1163_rowCount$$7$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$]] <= $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$[1] && 
    ($dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$ = $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$[1] - $animOrder$$inline_1165_columnStart$$6$$[$oldSet$$inline_1163_rowCount$$7$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$]] + 2, $animOrder$$inline_1165_columnStart$$6$$[$oldSet$$inline_1163_rowCount$$7$$[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$]] = "down_" + $dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$))
  }
  for($k$$inline_1181_key$$inline_1180_l$$inline_1183$$ in $pos$$inline_1161_restSet$$inline_1166$$) {
    $pos$$inline_1161_restSet$$inline_1166$$.hasOwnProperty($k$$inline_1181_key$$inline_1180_l$$inline_1183$$) && ($restSetLength$$inline_1176$$++, $idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$ = $pos$$inline_1161_restSet$$inline_1166$$[$k$$inline_1181_key$$inline_1180_l$$inline_1183$$], $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$ = $limitRangeInPixels$$inline_1172_offset$$inline_1170$$[1] + $cellSet$$13_oldRowElements$$.childNodes[1].clientHeight, 
    $dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$ = $limitRangeInPixels$$inline_1172_offset$$inline_1170$$[0] - $cellSet$$13_oldRowElements$$.childNodes[1].clientHeight, $j$$inline_1179_rowPos$$inline_1191$$ = $idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$ * $cellSet$$13_oldRowElements$$.childNodes[1].clientHeight, $j$$inline_1179_rowPos$$inline_1191$$ < $bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$ && 
    $j$$inline_1179_rowPos$$inline_1191$$ > $dv$$inline_1177_i$$inline_1178_scrollTop$$inline_1171_topLimit$$inline_1190_v$$inline_1167$$ && ($bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$ = $cellRange$$9_delay$$inline_1185_dkey$$inline_1184_newRowElements_order$$inline_1187$$.childNodes[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$ + 1], $rowsForAppend$$inline_1174$$.push($bottomLimit$$inline_1189_child$$inline_1192_gridBodyHeight$$inline_1168_limitRangeInRows$$inline_1173$$), 
    $rowHeaderSupport$$inline_1193$$ && $rowHeadersForAppend$$inline_1175$$.push($newRowHeaderElementsFragment$$.childNodes[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$ + 1])))
  }
  for($k$$inline_1181_key$$inline_1180_l$$inline_1183$$ = 0;$k$$inline_1181_key$$inline_1180_l$$inline_1183$$ < $rowsForAppend$$inline_1174$$.length;$k$$inline_1181_key$$inline_1180_l$$inline_1183$$++) {
    for($idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$ = 0;$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$ < $rowsForAppend$$inline_1174$$[$k$$inline_1181_key$$inline_1180_l$$inline_1183$$].attributes.length;$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$++) {
      $cellRange$$9_delay$$inline_1185_dkey$$inline_1184_newRowElements_order$$inline_1187$$ = D.$JSCompiler_alias_NULL$$, $rowsForAppend$$inline_1174$$[$k$$inline_1181_key$$inline_1180_l$$inline_1183$$].attributes[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$].nodeName == $keyAttr$$inline_1186$$ && ($cellRange$$9_delay$$inline_1185_dkey$$inline_1184_newRowElements_order$$inline_1187$$ = $rowsForAppend$$inline_1174$$[$k$$inline_1181_key$$inline_1180_l$$inline_1183$$].attributes[$idx$$inline_1188_kk$$inline_1182_newSet$$inline_1164$$].nodeValue, 
      $pos$$inline_1161_restSet$$inline_1166$$.hasOwnProperty($cellRange$$9_delay$$inline_1185_dkey$$inline_1184_newRowElements_order$$inline_1187$$) && ($cellRange$$9_delay$$inline_1185_dkey$$inline_1184_newRowElements_order$$inline_1187$$ = $pos$$inline_1161_restSet$$inline_1166$$[$cellRange$$9_delay$$inline_1185_dkey$$inline_1184_newRowElements_order$$inline_1187$$], (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($rowsForAppend$$inline_1174$$[$k$$inline_1181_key$$inline_1180_l$$inline_1183$$], 
      0, 0, "linear", $limitRangeInPixels$$inline_1172_offset$$inline_1170$$[1] - $cellRange$$9_delay$$inline_1185_dkey$$inline_1184_newRowElements_order$$inline_1187$$ * $rowHeight$$inline_1169$$), $rowHeaderSupport$$inline_1193$$ && ($rowHeadersForAppend$$inline_1175$$[$k$$inline_1181_key$$inline_1180_l$$inline_1183$$].style.top = $rowsForAppend$$inline_1174$$[$k$$inline_1181_key$$inline_1180_l$$inline_1183$$].style.top, (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($rowHeadersForAppend$$inline_1175$$[$k$$inline_1181_key$$inline_1180_l$$inline_1183$$], 
      0, 0, "linear", $limitRangeInPixels$$inline_1172_offset$$inline_1170$$[1] - $cellRange$$9_delay$$inline_1185_dkey$$inline_1184_newRowElements_order$$inline_1187$$ * $rowHeight$$inline_1169$$))))
    }
    $cellSet$$13_oldRowElements$$.appendChild($rowsForAppend$$inline_1174$$[$k$$inline_1181_key$$inline_1180_l$$inline_1183$$]);
    $rowHeaderSupport$$inline_1193$$ && $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$.appendChild($rowHeadersForAppend$$inline_1175$$[$k$$inline_1181_key$$inline_1180_l$$inline_1183$$])
  }
  for($k$$inline_1181_key$$inline_1180_l$$inline_1183$$ = 0;$k$$inline_1181_key$$inline_1180_l$$inline_1183$$ < $cellSet$$13_oldRowElements$$.childElementCount;$k$$inline_1181_key$$inline_1180_l$$inline_1183$$++) {
    if($cellRange$$9_delay$$inline_1185_dkey$$inline_1184_newRowElements_order$$inline_1187$$ = 0 * $k$$inline_1181_key$$inline_1180_l$$inline_1183$$ + "ms", $k$$inline_1181_key$$inline_1180_l$$inline_1183$$ < $oldLength$$inline_1162_oldRowHeaderElements_rowStart$$9$$ - 1 ? ($pos$$inline_1161_restSet$$inline_1166$$ = (0,window.parseInt)($animOrder$$inline_1165_columnStart$$6$$[$oldSet$$inline_1163_rowCount$$7$$[$k$$inline_1181_key$$inline_1180_l$$inline_1183$$]].split("_")[1]) * $rowHeight$$inline_1169$$, 
    $pos$$inline_1161_restSet$$inline_1166$$ < $limitRangeInPixels$$inline_1172_offset$$inline_1170$$[1] - $k$$inline_1181_key$$inline_1180_l$$inline_1183$$ * $rowHeight$$inline_1169$$ || ($pos$$inline_1161_restSet$$inline_1166$$ = $limitRangeInPixels$$inline_1172_offset$$inline_1170$$[1] - ($k$$inline_1181_key$$inline_1180_l$$inline_1183$$ - 1) * $cellSet$$13_oldRowElements$$.childNodes[1].clientHeight), (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($cellSet$$13_oldRowElements$$.childNodes[$k$$inline_1181_key$$inline_1180_l$$inline_1183$$ + 
    1], "400ms", $cellRange$$9_delay$$inline_1185_dkey$$inline_1184_newRowElements_order$$inline_1187$$, "ease-in", $pos$$inline_1161_restSet$$inline_1166$$), $rowHeaderSupport$$inline_1193$$ && (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$.childNodes[$k$$inline_1181_key$$inline_1180_l$$inline_1183$$ + 1], "400ms", $cellRange$$9_delay$$inline_1185_dkey$$inline_1184_newRowElements_order$$inline_1187$$, "ease-in", $pos$$inline_1161_restSet$$inline_1166$$)) : 
    ((0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($cellSet$$13_oldRowElements$$.childNodes[$k$$inline_1181_key$$inline_1180_l$$inline_1183$$ + 1], "400ms", $cellRange$$9_delay$$inline_1185_dkey$$inline_1184_newRowElements_order$$inline_1187$$, "ease-in", 0), $rowHeaderSupport$$inline_1193$$ && (0,D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$)($newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$.childNodes[$k$$inline_1181_key$$inline_1180_l$$inline_1183$$ + 1], "400ms", $cellRange$$9_delay$$inline_1185_dkey$$inline_1184_newRowElements_order$$inline_1187$$, 
    "ease-in", 0)), $k$$inline_1181_key$$inline_1180_l$$inline_1183$$ == $cellSet$$13_oldRowElements$$.childElementCount - 2) {
      $cellSet$$13_oldRowElements$$.childNodes[$k$$inline_1181_key$$inline_1180_l$$inline_1183$$].addEventListener("transitionend", function() {
        (0,window.setTimeout)(function() {
          if($rowHeaderSupport$$inline_1193$$) {
            var $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$ = $me$$inline_1160$$.$m_rowHeader$.firstChild;
            $me$$inline_1160$$.$m_rowHeader$.firstChild = D.$JSCompiler_alias_NULL$$;
            $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$.innerHTML = "";
            $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$.appendChild($newRowHeaderElementsClone$$inline_1195$$);
            $me$$inline_1160$$.$m_startRowHeader$ = 0
          }
          $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$ = $me$$inline_1160$$.$m_databody$.firstChild;
          $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$.innerHTML = "";
          $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$.appendChild($newElementSetClone$$inline_1194$$);
          $me$$inline_1160$$.$m_active$ && ($newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$ = $me$$inline_1160$$.$m_active$, $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$ = $me$$inline_1160$$.createIndex(-1 === $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$.row ? 0 : $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$.row, -1 === $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$.column ? 0 : $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$.column), 
          (0,D.$JSCompiler_StaticMethods_scrollToIndex$$)($me$$inline_1160$$, $newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$), (0,D.$JSCompiler_StaticMethods__isSelectionEnabled$$)($me$$inline_1160$$) ? $me$$inline_1160$$.$selectAndFocus$($newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$) : $me$$inline_1160$$.$activeAndFocus$($newRowHeaderElements$$1_oldRowHeaderElements$$inline_1153$$))
        }, 100)
      }, D.$JSCompiler_alias_FALSE$$);
      break
    }
  }
};
D.$JSCompiler_StaticMethods_isNumeric$$ = function $$JSCompiler_StaticMethods_isNumeric$$$($v$$) {
  return/^-{0,1}\d*\.{0,1}\d+$/.test($v$$)
};
D.$JSCompiler_StaticMethods_getDataKeySet$$ = function $$JSCompiler_StaticMethods_getDataKeySet$$$($JSCompiler_StaticMethods_getDataKeySet$self$$, $initialData$$) {
  var $dataKeySet$$, $keyAttr$$, $i$$41$$, $j$$15$$;
  $dataKeySet$$ = [];
  $keyAttr$$ = $JSCompiler_StaticMethods_getDataKeySet$self$$.$m_resources$.getMappedAttribute("key");
  for($i$$41$$ = 0;$i$$41$$ < $initialData$$.childNodes.length;$i$$41$$++) {
    for($j$$15$$ = 0;$j$$15$$ < $initialData$$.childNodes[$i$$41$$].attributes.length;$j$$15$$++) {
      if($initialData$$.childNodes[$i$$41$$].attributes[$j$$15$$].nodeName == $keyAttr$$) {
        $dataKeySet$$.push($initialData$$.childNodes[$i$$41$$].attributes[$j$$15$$].nodeValue);
        break
      }
    }
  }
  return $dataKeySet$$
};
D.$JSCompiler_StaticMethods_getCssSupport$$ = function $$JSCompiler_StaticMethods_getCssSupport$$$($cssprop$$) {
  function $toCamel$$($cssprop$$) {
    return $cssprop$$.replace(/\-([a-z])/gi, function($cssprop$$, $toCamel$$) {
      return $toCamel$$.toUpperCase()
    })
  }
  var $vendors$$, $root$$11$$, $i$$42$$, $css3mc$$;
  $vendors$$ = " -moz- -webkit- -o- -ms- -khtml-".split(" ");
  $root$$11$$ = window.document.documentElement;
  for($i$$42$$ = 0;$i$$42$$ < $vendors$$.length;$i$$42$$++) {
    if($css3mc$$ = $toCamel$$($vendors$$[$i$$42$$] + $cssprop$$), "Ms" == $css3mc$$.substr(0, 2) && ($css3mc$$ = "m" + $css3mc$$.substr(1)), $css3mc$$ in $root$$11$$.style) {
      return $css3mc$$
    }
  }
};
D.$JSCompiler_StaticMethods_changeStyleProperty$$ = function $$JSCompiler_StaticMethods_changeStyleProperty$$$($target$$46$$, $prop$$8$$, $value$$53$$, $action$$) {
  "undefined" != typeof $prop$$8$$ && ($target$$46$$.style[$prop$$8$$] = "remove" == $action$$ ? "" : $value$$53$$)
};
D.$JSCompiler_StaticMethods_addUpDownMoveStyle$$ = function $$JSCompiler_StaticMethods_addUpDownMoveStyle$$$($target$$47$$, $duration$$6$$, $delay$$4$$, $timing$$1$$, $y$$38$$) {
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$47$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-delay"), $delay$$4$$);
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$47$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-timing-function"), $timing$$1$$);
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$47$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transition-duration"), $duration$$6$$);
  (0,D.$JSCompiler_StaticMethods_changeStyleProperty$$)($target$$47$$, (0,D.$JSCompiler_StaticMethods_getCssSupport$$)("transform"), "translate3d(0," + $y$$38$$ + "px,0)")
};
D.$JSCompiler_StaticMethods__getSortIcon$$ = function $$JSCompiler_StaticMethods__getSortIcon$$$($header$$24$$) {
  return $header$$24$$.lastChild.firstChild
};
return DvtDataGrid;
});