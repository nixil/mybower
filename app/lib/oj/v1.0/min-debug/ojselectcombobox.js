/*
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright 2012 Igor Vaynberg

 This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
 General Public License version 2 (the "GPL License"). You may choose either license to govern your
 use of this software only upon the condition that you accept all of the terms of either the Apache
 License or the GPL License.

 You may obtain a copy of the Apache License and the GPL License at:

 http://www.apache.org/licenses/LICENSE-2.0
 http://www.gnu.org/licenses/gpl-2.0.html

 Unless required by applicable law or agreed to in writing, software distributed under the
 Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
 the specific language governing permissions and limitations under the Apache License and the GPL License.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue"], function($oj$$12$$, $$$$12$$) {
  var $_ComboUtils$$ = {$KEY$:{TAB:9, ENTER:13, $ESC$:27, SPACE:32, LEFT:37, UP:38, RIGHT:39, DOWN:40, $SHIFT$:16, $CTRL$:17, $ALT$:18, PAGE_UP:33, PAGE_DOWN:34, HOME:36, END:35, $BACKSPACE$:8, $DELETE$:46, $isArrow$:function($k$$3$$) {
    $k$$3$$ = $k$$3$$.which ? $k$$3$$.which : $k$$3$$;
    switch($k$$3$$) {
      case $_ComboUtils$$.$KEY$.LEFT:
      ;
      case $_ComboUtils$$.$KEY$.RIGHT:
      ;
      case $_ComboUtils$$.$KEY$.UP:
      ;
      case $_ComboUtils$$.$KEY$.DOWN:
        return!0;
    }
    return!1;
  }, $isControl$:function($e$$45$$) {
    switch($e$$45$$.which) {
      case $_ComboUtils$$.$KEY$.$SHIFT$:
      ;
      case $_ComboUtils$$.$KEY$.$CTRL$:
      ;
      case $_ComboUtils$$.$KEY$.$ALT$:
        return!0;
    }
    return $e$$45$$.metaKey ? !0 : !1;
  }, $isFunctionKey$:function($k$$5$$) {
    $k$$5$$ = $k$$5$$.which ? $k$$5$$.which : $k$$5$$;
    return 112 <= $k$$5$$ && 123 >= $k$$5$$;
  }}, $lastMousePosition$:{x:0, y:0}, $nextUid$:function() {
    var $counter$$ = 1;
    return function() {
      return $counter$$++;
    };
  }(), $scrollBarDimensions$:null, $each2$:function($list$$, $c$$25$$) {
    for (var $j$$24$$ = $$$$12$$($list$$[0]), $i$$157$$ = -1, $l$$4$$ = $list$$.length;++$i$$157$$ < $l$$4$$ && ($j$$24$$.context = $j$$24$$[0] = $list$$[$i$$157$$]) && !1 !== $c$$25$$.call($j$$24$$[0], $i$$157$$, $j$$24$$);) {
    }
    return $list$$;
  }, $measureScrollbar$:function() {
    var $$template$$ = $$$$12$$("\x3cdiv class\x3d'oj-listbox-measure-scrollbar'\x3e\x3c/div\x3e");
    $$template$$.appendTo("body");
    var $dim$$ = {width:$$template$$.width() - $$template$$[0].clientWidth, height:$$template$$.height() - $$template$$[0].clientHeight};
    $$template$$.remove();
    return $dim$$;
  }, $splitVal$:function($string$$3$$, $separator$$) {
    var $val$$26$$, $i$$158$$, $l$$5$$;
    if (null === $string$$3$$ || 1 > $string$$3$$.length) {
      return[];
    }
    $val$$26$$ = $string$$3$$.split($separator$$);
    $i$$158$$ = 0;
    for ($l$$5$$ = $val$$26$$.length;$i$$158$$ < $l$$5$$;$i$$158$$ += 1) {
      $val$$26$$[$i$$158$$] = $$$$12$$.trim($val$$26$$[$i$$158$$]);
    }
    return $val$$26$$;
  }, $getSideBorderPadding$:function($element$$39$$) {
    return $element$$39$$.outerWidth(!1) - $element$$39$$.width();
  }, $installKeyUpChangeEvent$:function($element$$40$$) {
    $element$$40$$.on("keydown", function() {
      void 0 === $$$$12$$.data($element$$40$$, "keyup-change-value") && $$$$12$$.data($element$$40$$, "keyup-change-value", $element$$40$$.val());
    });
    $element$$40$$.on("keyup", function($e$$46_val$$27$$) {
      $e$$46_val$$27$$.which === $_ComboUtils$$.$KEY$.ENTER ? $e$$46_val$$27$$.stopPropagation() : ($e$$46_val$$27$$ = $$$$12$$.data($element$$40$$, "keyup-change-value"), void 0 !== $e$$46_val$$27$$ && $element$$40$$.val() !== $e$$46_val$$27$$ && ($$$$12$$.removeData($element$$40$$, "keyup-change-value"), $element$$40$$.trigger("keyup-change")));
    });
  }, $installFilteredMouseMove$:function($element$$41$$) {
    $element$$41$$.on("mousemove", function($e$$47$$) {
      var $lastpos$$ = $_ComboUtils$$.$lastMousePosition$;
      if (void 0 === $lastpos$$ || $lastpos$$.x !== $e$$47$$.pageX || $lastpos$$.y !== $e$$47$$.pageY) {
        $$$$12$$($e$$47$$.target).trigger("mousemove-filtered", $e$$47$$), $_ComboUtils$$.$lastMousePosition$.x = $e$$47$$.pageX, $_ComboUtils$$.$lastMousePosition$.y = $e$$47$$.pageY;
      }
    });
  }, $thunk$:function($formula$$) {
    var $evaluated$$ = !1, $value$$159$$;
    return function() {
      !1 === $evaluated$$ && ($value$$159$$ = $formula$$(), $evaluated$$ = !0);
      return $value$$159$$;
    };
  }, $_focus$:function($$el$$) {
    $$el$$[0] !== document.activeElement && window.setTimeout(function() {
      var $el$$3_range$$18$$ = $$el$$[0], $pos$$5$$ = $$el$$.val().length;
      $$el$$.focus();
      $$el$$.is(":visible") && $el$$3_range$$18$$ === document.activeElement && ($el$$3_range$$18$$.setSelectionRange ? $el$$3_range$$18$$.setSelectionRange($pos$$5$$, $pos$$5$$) : $el$$3_range$$18$$.createTextRange && ($el$$3_range$$18$$ = $el$$3_range$$18$$.createTextRange(), $el$$3_range$$18$$.collapse(!1), $el$$3_range$$18$$.select()));
    }, 0);
  }, $getCursorInfo$:function($el$$4$$) {
    $el$$4$$ = $$$$12$$($el$$4$$)[0];
    var $offset$$17_sel$$ = 0, $length$$14$$ = 0;
    "selectionStart" in $el$$4$$ ? ($offset$$17_sel$$ = $el$$4$$.selectionStart, $length$$14$$ = $el$$4$$.selectionEnd - $offset$$17_sel$$) : "selection" in document && ($el$$4$$.focus(), $offset$$17_sel$$ = document.selection.createRange(), $length$$14$$ = document.selection.createRange().text.length, $offset$$17_sel$$.moveStart("character", -$el$$4$$.value.length), $offset$$17_sel$$ = $offset$$17_sel$$.text.length - $length$$14$$);
    return{offset:$offset$$17_sel$$, length:$length$$14$$};
  }, $killEvent$:function($event$$72$$) {
    $event$$72$$.preventDefault();
    $event$$72$$.stopPropagation();
  }, $killEventImmediately$:function($event$$73$$) {
    $event$$73$$.preventDefault();
    $event$$73$$.stopImmediatePropagation();
  }, $defaultEscapeMarkup$:function($markup$$) {
    var $replace_map$$ = {"\\":"\x26#92;", "\x26":"\x26amp;", "\x3c":"\x26lt;", "\x3e":"\x26gt;", '"':"\x26quot;", "'":"\x26#39;"};
    return String($markup$$).replace(/[&<>"'\\]/g, function($match$$14$$) {
      return $replace_map$$[$match$$14$$];
    });
  }, $local$:function($options$$235$$, $keys$$12$$) {
    function $text$$9$$($item$$7$$) {
      return "" + $item$$7$$[$keys$$12$$.labelKey] || $item$$7$$[$keys$$12$$.optgroupLabelKey];
    }
    var $data$$74$$ = $options$$235$$, $dataText$$, $tmp$$1$$;
    $$$$12$$.isArray($data$$74$$) && ($tmp$$1$$ = $data$$74$$, $data$$74$$ = {$results$:$tmp$$1$$});
    !1 === $$$$12$$.isFunction($data$$74$$) && ($tmp$$1$$ = $data$$74$$, $data$$74$$ = function $$data$$74$$$() {
      return $tmp$$1$$;
    });
    var $dataItem$$ = $data$$74$$();
    $dataItem$$ && $dataItem$$.text && ($text$$9$$ = $dataItem$$.text, $$$$12$$.isFunction($text$$9$$) || ($dataText$$ = $dataItem$$.text, $text$$9$$ = function $$text$$9$$$($item$$8$$) {
      return $item$$8$$[$dataText$$];
    }));
    return function($query$$3$$) {
      var $t$$ = $query$$3$$.$term$, $filtered$$ = {$results$:[]}, $process$$;
      "" === $t$$ ? $query$$3$$.$callback$($data$$74$$()) : ($process$$ = function $$process$$$($datum$$, $collection$$24$$) {
        var $group$$, $attr$$15$$;
        $datum$$ = $datum$$[0];
        if ($datum$$.children) {
          $group$$ = {};
          for ($attr$$15$$ in $datum$$) {
            $datum$$.hasOwnProperty($attr$$15$$) && ($group$$[$attr$$15$$] = $datum$$[$attr$$15$$]);
          }
          $group$$.children = [];
          $_ComboUtils$$.$each2$($$$$12$$($datum$$.children), function($i$$159$$, $childDatum$$) {
            $process$$($childDatum$$, $group$$.children);
          });
          ($group$$.children.length || $query$$3$$.$matcher$($t$$, $text$$9$$($group$$), $datum$$)) && $collection$$24$$.push($group$$);
        } else {
          $query$$3$$.$matcher$($t$$, $text$$9$$($datum$$), $datum$$) && $collection$$24$$.push($datum$$);
        }
      }, $_ComboUtils$$.$each2$($$$$12$$($data$$74$$().$results$), function($i$$160$$, $datum$$1$$) {
        $process$$($datum$$1$$, $filtered$$.$results$);
      }), $query$$3$$.$callback$($filtered$$));
    };
  }, $checkFormatter$:function($ojContext$$, $formatter$$, $formatterName$$) {
    if ($$$$12$$.isFunction($formatter$$)) {
      return!0;
    }
    if (!$formatter$$) {
      return!1;
    }
    throw Error($formatterName$$ + " must be a function or a false value");
  }, $clazz$:function($SuperClass$$, $methods$$1$$) {
    function $constructor$$1$$() {
    }
    $oj$$12$$.$Object$.$createSubclass$($constructor$$1$$, $SuperClass$$, "");
    $constructor$$1$$.prototype = $$$$12$$.extend($constructor$$1$$.prototype, $methods$$1$$);
    return $constructor$$1$$;
  }}, $_AbstractOjChoice$$ = $_ComboUtils$$.$clazz$(Object, {$_bind$:function($func$$10$$) {
    var $self$$47$$ = this;
    return function() {
      $func$$10$$.apply($self$$47$$, arguments);
    };
  }, _init:function($opts$$11$$) {
    var $search$$1$$, $className$$10$$ = this.$_classNm$, $elemName$$ = this.$_elemNm$;
    this.$ojContext$ = $opts$$11$$.$ojContext$;
    this.$opts$ = $opts$$11$$ = this.$_prepareOpts$($opts$$11$$);
    this.id = $opts$$11$$.id;
    void 0 !== $opts$$11$$.element.data($elemName$$) && null !== $opts$$11$$.element.data($elemName$$) && $opts$$11$$.element.data($elemName$$)._destroy();
    this.$container$ = this.$_createContainer$();
    var $clickAwayHandler_clickAwayListener_disabled$$1_readonly_rootAttr$$ = this.$opts$.rootAttributes;
    this.$containerId$ = $clickAwayHandler_clickAwayListener_disabled$$1_readonly_rootAttr$$ && $clickAwayHandler_clickAwayListener_disabled$$1_readonly_rootAttr$$.id ? $clickAwayHandler_clickAwayListener_disabled$$1_readonly_rootAttr$$.id : "ojChoiceId_" + ($opts$$11$$.element.attr("id") || "autogen" + $_ComboUtils$$.$nextUid$());
    this.$containerId$.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1");
    this.$container$.attr("id", this.$containerId$);
    this.body = $_ComboUtils$$.$thunk$(function() {
      return $opts$$11$$.element.closest("body");
    });
    this.$container$.attr("style", $opts$$11$$.element.attr("style"));
    this.$elementTabIndex$ = this.$opts$.element.attr("tabindex");
    this.$opts$.element.data($elemName$$, this).attr("tabindex", "-1").before(this.$container$);
    this.$container$.data($elemName$$, this);
    this.$dropdown$ = this.$container$.find(".oj-listbox-drop");
    this.$dropdown$.data($elemName$$, this);
    this.$dropdown$.on("click", $_ComboUtils$$.$killEvent$);
    this.$results$ = this.$container$.find(".oj-listbox-results");
    this.search = $search$$1$$ = "oj-select" == $className$$10$$ ? this.$container$.find("input.oj-listbox-input") : this.$container$.find("input." + $className$$10$$ + "-input");
    this.$resultsPage$ = this.$queryCount$ = 0;
    this.context = null;
    this.$_initContainer$();
    this.$container$.on("click", $_ComboUtils$$.$killEvent$);
    $_ComboUtils$$.$installFilteredMouseMove$(this.$results$);
    this.$dropdown$.on("mousemove-filtered touchstart touchmove touchend", ".oj-listbox-results", this.$_bind$(this.$_highlightUnderEvent$));
    $$$$12$$(this.$container$).on("change", "." + $className$$10$$ + "-input", function($e$$48$$) {
      $e$$48$$.stopPropagation();
    });
    $$$$12$$(this.$dropdown$).on("change", "." + $className$$10$$ + "-input", function($e$$49$$) {
      $e$$49$$.stopPropagation();
    });
    $_ComboUtils$$.$installKeyUpChangeEvent$($search$$1$$);
    $search$$1$$.on("keyup-change input paste", this.$_bind$(this.$_updateResults$));
    $search$$1$$.on("focus", function() {
      $search$$1$$.addClass($className$$10$$ + "-focused");
    });
    $search$$1$$.on("blur", function() {
      $search$$1$$.removeClass($className$$10$$ + "-focused");
    });
    this.$dropdown$.on("mouseup", ".oj-listbox-results", this.$_bind$(function($e$$50$$) {
      0 < $$$$12$$($e$$50$$.target).closest(".oj-listbox-result-selectable").length && (this.$_highlightUnderEvent$($e$$50$$), this.$_selectHighlighted$(null, $e$$50$$));
    }));
    this.$dropdown$.on("click mouseup mousedown", function($e$$51$$) {
      $e$$51$$.stopPropagation();
    });
    $$$$12$$.isFunction(this.$opts$.$initSelection$) && this.$_initSelection$();
    $clickAwayHandler_clickAwayListener_disabled$$1_readonly_rootAttr$$ = $opts$$11$$.element.prop("disabled");
    void 0 === $clickAwayHandler_clickAwayListener_disabled$$1_readonly_rootAttr$$ && ($clickAwayHandler_clickAwayListener_disabled$$1_readonly_rootAttr$$ = !1);
    this.$_enable$(!$clickAwayHandler_clickAwayListener_disabled$$1_readonly_rootAttr$$);
    $clickAwayHandler_clickAwayListener_disabled$$1_readonly_rootAttr$$ = $opts$$11$$.element.prop("readonly");
    void 0 === $clickAwayHandler_clickAwayListener_disabled$$1_readonly_rootAttr$$ && ($clickAwayHandler_clickAwayListener_disabled$$1_readonly_rootAttr$$ = !1);
    this.$_readonly$($clickAwayHandler_clickAwayListener_disabled$$1_readonly_rootAttr$$);
    $_ComboUtils$$.$scrollBarDimensions$ = $_ComboUtils$$.$scrollBarDimensions$ || $_ComboUtils$$.$measureScrollbar$();
    this.autofocus = $opts$$11$$.element.prop("autofocus");
    $opts$$11$$.element.prop("autofocus", !1);
    this.autofocus && this.$_focus$();
    ($clickAwayHandler_clickAwayListener_disabled$$1_readonly_rootAttr$$ = $$$$12$$(document).data("ojChoiceClickAwayHandler-" + $elemName$$)) ? $clickAwayHandler_clickAwayListener_disabled$$1_readonly_rootAttr$$.$components$.push(this) : ($clickAwayHandler_clickAwayListener_disabled$$1_readonly_rootAttr$$ = function $$clickAwayHandler_clickAwayListener_disabled$$1_readonly_rootAttr$$$($event$$74$$) {
      var $dropdown_self$$48$$ = $$$$12$$("#oj-listbox-drop");
      !$$$$12$$($event$$74$$.target).closest($dropdown_self$$48$$).length && 0 < $dropdown_self$$48$$.length && ($dropdown_self$$48$$ = $dropdown_self$$48$$.data($elemName$$), $dropdown_self$$48$$.$opts$.$selectOnBlur$ && $dropdown_self$$48$$.$_selectHighlighted$({$noFocus$:!0}, $event$$74$$), $dropdown_self$$48$$.close($event$$74$$));
    }, document.addEventListener("mousedown", $clickAwayHandler_clickAwayListener_disabled$$1_readonly_rootAttr$$, !0), $clickAwayHandler_clickAwayListener_disabled$$1_readonly_rootAttr$$ = {$listener$:$clickAwayHandler_clickAwayListener_disabled$$1_readonly_rootAttr$$, $components$:[]}, $clickAwayHandler_clickAwayListener_disabled$$1_readonly_rootAttr$$.$components$.push(this), $$$$12$$(document).data("ojChoiceClickAwayHandler-" + $elemName$$, $clickAwayHandler_clickAwayListener_disabled$$1_readonly_rootAttr$$));
  }, _destroy:function() {
    var $clickAwayHandler$$1_element$$42$$ = this.$opts$.element, $index$$144_ojcomp$$ = $clickAwayHandler$$1_element$$42$$.data(this.$_elemNm$);
    this.close();
    this.$propertyObserver$ && (delete this.$propertyObserver$, this.$propertyObserver$ = null);
    void 0 !== $index$$144_ojcomp$$ && ($index$$144_ojcomp$$.$container$.remove(), $index$$144_ojcomp$$.$dropdown$.remove(), $clickAwayHandler$$1_element$$42$$.removeAttr("aria-hidden").removeData(this.$_elemNm$).off("." + this.$_classNm$).prop("autofocus", this.autofocus || !1), this.$elementTabIndex$ ? $clickAwayHandler$$1_element$$42$$.attr({$tabindex$:this.$elementTabIndex$}) : $clickAwayHandler$$1_element$$42$$.removeAttr("tabindex"), $clickAwayHandler$$1_element$$42$$.show());
    $clickAwayHandler$$1_element$$42$$ = $$$$12$$(document).data("ojChoiceClickAwayHandler-" + this.$_elemNm$);
    $index$$144_ojcomp$$ = $clickAwayHandler$$1_element$$42$$.$components$.indexOf(this);
    -1 < $index$$144_ojcomp$$ && ($clickAwayHandler$$1_element$$42$$.$components$.splice($index$$144_ojcomp$$, 1), $clickAwayHandler$$1_element$$42$$.$components$.length || (document.removeEventListener("mousedown", $clickAwayHandler$$1_element$$42$$.$listener$, !0), $$$$12$$(document).removeData("ojChoiceClickAwayHandler-" + this.$_elemNm$)));
  }, $_optionToData$:function($element$$43$$) {
    if ($element$$43$$.is("option")) {
      return{value:$element$$43$$.prop("value"), label:$element$$43$$.text(), element:$element$$43$$.get(), css:$element$$43$$.attr("class"), disabled:$element$$43$$.prop("disabled"), locked:"locked" === $element$$43$$.attr("locked") || !0 === $element$$43$$.data("locked")};
    }
    if ($element$$43$$.is("optgroup")) {
      return{label:$element$$43$$.attr("label"), children:[], element:$element$$43$$.get(), css:$element$$43$$.attr("class")};
    }
  }, $_prepareOpts$:function($opts$$12$$) {
    var $element$$44$$, $datalist$$, $keys$$13$$ = {}, $self$$49$$ = this;
    $element$$44$$ = $opts$$12$$.element;
    var $tagName$$2$$ = $element$$44$$.get(0).tagName.toLowerCase();
    "input" === $tagName$$2$$ && $element$$44$$.attr("list") ? this.$datalist$ = $datalist$$ = $$$$12$$("#" + $element$$44$$.attr("list")) : "select" === $tagName$$2$$ && 0 < $element$$44$$.children().length && (this.$datalist$ = $datalist$$ = $element$$44$$);
    $opts$$12$$ = $$$$12$$.extend({}, {$populateResults$:function($container$$2$$, $results$$5$$, $query$$4$$, $showPlaceholder$$) {
      var $populate$$, $id$$14$$ = this.$opts$.id;
      $populate$$ = function $$populate$$$($results$$6$$, $container$$3$$, $depth$$18$$, $i$$161_showPlaceholder$$1$$) {
        var $l$$6_placeholder$$, $result$$20$$, $label$$4_selectable$$, $disabled$$2_formatted_innerContainer$$, $node$$19$$;
        $l$$6_placeholder$$ = $self$$49$$.$_getPlaceholder$();
        $i$$161_showPlaceholder$$1$$ && null !== $l$$6_placeholder$$ && !$query$$4$$.$term$ && ($result$$20$$ = {value:"", label:$l$$6_placeholder$$}, $node$$19$$ = $$$$12$$("\x3cli\x3e\x3c/li\x3e"), $node$$19$$.addClass("oj-listbox-placeholder oj-listbox-results-depth-0 oj-listbox-result oj-listbox-result-selectable"), $node$$19$$.attr("role", "presentation"), $label$$4_selectable$$ = $$$$12$$(document.createElement("div")), $label$$4_selectable$$.addClass("oj-listbox-result-label"), $label$$4_selectable$$.attr("id", 
        "oj-listbox-result-label-" + $_ComboUtils$$.$nextUid$()), $label$$4_selectable$$.attr("role", "option"), $disabled$$2_formatted_innerContainer$$ = $opts$$12$$.$formatResult$($result$$20$$), void 0 !== $disabled$$2_formatted_innerContainer$$ && $label$$4_selectable$$.html($disabled$$2_formatted_innerContainer$$), $node$$19$$.append($label$$4_selectable$$), $node$$19$$.data($self$$49$$.$_elemNm$, $result$$20$$), $container$$3$$.append($node$$19$$));
        $i$$161_showPlaceholder$$1$$ = 0;
        for ($l$$6_placeholder$$ = $results$$6$$.length;$i$$161_showPlaceholder$$1$$ < $l$$6_placeholder$$;$i$$161_showPlaceholder$$1$$ += 1) {
          $result$$20$$ = $results$$6$$[$i$$161_showPlaceholder$$1$$], $disabled$$2_formatted_innerContainer$$ = !0 === $result$$20$$.disabled, $label$$4_selectable$$ = !$disabled$$2_formatted_innerContainer$$ && void 0 !== $id$$14$$($result$$20$$), $node$$19$$ = $$$$12$$("\x3cli\x3e\x3c/li\x3e"), $node$$19$$.addClass("oj-listbox-results-depth-" + $depth$$18$$), $node$$19$$.addClass("oj-listbox-result"), $node$$19$$.addClass($label$$4_selectable$$ ? "oj-listbox-result-selectable" : "oj-listbox-result-unselectable"), 
          $disabled$$2_formatted_innerContainer$$ && $node$$19$$.addClass("oj-disabled"), $result$$20$$.children && $node$$19$$.addClass("oj-listbox-result-with-children"), $node$$19$$.attr("role", "presentation"), $label$$4_selectable$$ = $$$$12$$(document.createElement("div")), $label$$4_selectable$$.addClass("oj-listbox-result-label"), $label$$4_selectable$$.attr("id", "oj-listbox-result-label-" + $_ComboUtils$$.$nextUid$()), $label$$4_selectable$$.attr("role", "option"), $disabled$$2_formatted_innerContainer$$ && 
          $label$$4_selectable$$.attr("aria-disabled", "true"), $disabled$$2_formatted_innerContainer$$ = $opts$$12$$.$formatResult$($result$$20$$), void 0 !== $disabled$$2_formatted_innerContainer$$ && $label$$4_selectable$$.html($disabled$$2_formatted_innerContainer$$), $node$$19$$.append($label$$4_selectable$$), $result$$20$$.children && 0 < $result$$20$$.children.length && ($disabled$$2_formatted_innerContainer$$ = $$$$12$$("\x3cul\x3e\x3c/ul\x3e"), $disabled$$2_formatted_innerContainer$$.addClass("oj-listbox-result-sub"), 
          $populate$$($result$$20$$.children, $disabled$$2_formatted_innerContainer$$, $depth$$18$$ + 1, !1), $node$$19$$.append($disabled$$2_formatted_innerContainer$$)), $node$$19$$.data($self$$49$$.$_elemNm$, $result$$20$$), $container$$3$$.append($node$$19$$);
        }
      };
      $populate$$($results$$5$$, $container$$2$$, 0, $showPlaceholder$$);
    }}, $_ojChoice_defaults$$, $opts$$12$$);
    $keys$$13$$.valueKey = $opts$$12$$.optionKeys && $opts$$12$$.optionKeys.value ? $opts$$12$$.optionKeys.value : "value";
    $keys$$13$$.labelKey = $opts$$12$$.optionKeys && $opts$$12$$.optionKeys.label ? $opts$$12$$.optionKeys.label : "label";
    $keys$$13$$.optgroupLabelKey = $opts$$12$$.optgroupKeys && $opts$$12$$.optgroupKeys.label ? $opts$$12$$.optgroupKeys.label : "label";
    $opts$$12$$.id = function $$opts$$12$$$id$($e$$52$$) {
      return $e$$52$$[$keys$$13$$.valueKey];
    };
    $opts$$12$$.$formatResult$ = function $$opts$$12$$$$formatResult$$($result$$21$$) {
      var $markup$$1$$ = [];
      $markup$$1$$.push($opts$$12$$.$escapeMarkup$($result$$21$$.children ? $result$$21$$[$keys$$13$$.optgroupLabelKey] : $result$$21$$[$keys$$13$$.labelKey]));
      return $markup$$1$$.join("");
    };
    $opts$$12$$.$formatSelection$ = function $$opts$$12$$$$formatSelection$$($data$$75$$, $container$$4$$, $escapeMarkup$$1$$) {
      return $data$$75$$ && $data$$75$$[$keys$$13$$.labelKey] ? $escapeMarkup$$1$$($data$$75$$[$keys$$13$$.labelKey]) : void 0;
    };
    "select" !== $tagName$$2$$ && ($opts$$12$$.$manageNewEntry$ = function $$opts$$12$$$$manageNewEntry$$($term$$) {
      var $entry$$ = {};
      $entry$$[$keys$$13$$.valueKey] = $entry$$[$keys$$13$$.labelKey] = $$$$12$$.trim($term$$);
      return $entry$$;
    });
    $datalist$$ ? $opts$$12$$.$query$ = this.$_bind$(function($query$$5$$) {
      var $data$$76$$ = {$results$:[], $more$:!1}, $term$$1$$ = $query$$5$$.$term$, $children$$2$$, $process$$1$$;
      $process$$1$$ = function $$process$$1$$$($element$$45$$, $collection$$25$$) {
        var $group$$1$$;
        $element$$45$$.is("option") ? $query$$5$$.$matcher$($term$$1$$, $element$$45$$.text(), $element$$45$$) && $collection$$25$$.push($self$$49$$.$_optionToData$($element$$45$$)) : $element$$45$$.is("optgroup") && ($group$$1$$ = $self$$49$$.$_optionToData$($element$$45$$), $_ComboUtils$$.$each2$($element$$45$$.children(), function($i$$162$$, $elm$$1$$) {
          $process$$1$$($elm$$1$$, $group$$1$$.children);
        }), 0 < $group$$1$$.children.length && $collection$$25$$.push($group$$1$$));
      };
      $children$$2$$ = $datalist$$.children();
      void 0 !== this.$_getPlaceholder$() && 0 < $children$$2$$.length && "" == $children$$2$$.first().attr("value") && ($children$$2$$ = $children$$2$$.slice(1));
      $_ComboUtils$$.$each2$($children$$2$$, function($i$$163$$, $elm$$2$$) {
        $process$$1$$($elm$$2$$, $data$$76$$.$results$);
      });
      $query$$5$$.$callback$($data$$76$$);
    }) : "options" in $opts$$12$$ && ($opts$$12$$.$query$ = $_ComboUtils$$.$local$($opts$$12$$.options, $keys$$13$$));
    return $opts$$12$$;
  }, $_triggerSelect$:function($data$$77_evt$$18$$) {
    $data$$77_evt$$18$$ = $$$$12$$.Event(this.$_elemNm$ + "-selecting", {val:this.id($data$$77_evt$$18$$), object:$data$$77_evt$$18$$});
    this.$opts$.element.trigger($data$$77_evt$$18$$);
    return!$data$$77_evt$$18$$.isDefaultPrevented();
  }, $_isInterfaceEnabled$:function() {
    return!0 === this.$enabledInterface$;
  }, $_enableInterface$:function() {
    var $enabled$$ = this.$_enabled$ && !this.$_readonly$;
    if ($enabled$$ === this.$enabledInterface$) {
      return!1;
    }
    this.$container$.toggleClass("oj-disabled", !$enabled$$);
    this.close();
    this.$enabledInterface$ = $enabled$$;
    return!0;
  }, $_enable$:function($enabled$$1$$) {
    void 0 === $enabled$$1$$ && ($enabled$$1$$ = !0);
    this.$_enabled$ !== $enabled$$1$$ && (this.$_enabled$ = $enabled$$1$$, this.$opts$.element.prop("disabled", !$enabled$$1$$), this.$_enableInterface$());
  }, $_disable$:function() {
    this.$_enable$(!1);
  }, $_readonly$:function($enabled$$2$$) {
    void 0 === $enabled$$2$$ && ($enabled$$2$$ = !1);
    if (this.$_readonly$ === $enabled$$2$$) {
      return!1;
    }
    this.$_readonly$ = $enabled$$2$$;
    this.$opts$.element.prop("readonly", $enabled$$2$$);
    this.$_enableInterface$();
    return!0;
  }, $_opened$:function() {
    return this.$container$.hasClass("oj-listbox-dropdown-open");
  }, $_positionDropdown$:function() {
    var $$dropdown$$ = this.$dropdown$, $offset$$18$$ = this.$container$.offset(), $dropTop_height$$14$$ = this.$container$.outerHeight(!1), $css_width$$15$$ = this.$container$.outerWidth(!1), $above_dropHeight$$ = $$dropdown$$.outerHeight(!1), $$window_bodyOffset$$ = $$$$12$$(window), $windowWidth$$ = $$window_bodyOffset$$.width(), $windowHeight$$ = $$window_bodyOffset$$.height(), $enoughRoomOnRight_viewPortRight$$ = $$window_bodyOffset$$.scrollLeft() + $windowWidth$$, $enoughRoomBelow_viewportBottom$$ = 
    $$window_bodyOffset$$.scrollTop() + $windowHeight$$, $dropTop_height$$14$$ = $offset$$18$$.top + $dropTop_height$$14$$, $dropLeft$$ = $offset$$18$$.left, $enoughRoomBelow_viewportBottom$$ = $dropTop_height$$14$$ + $above_dropHeight$$ <= $enoughRoomBelow_viewportBottom$$, $enoughRoomAbove$$ = $offset$$18$$.top - $above_dropHeight$$ >= this.body().scrollTop(), $dropWidth$$ = $$dropdown$$.outerWidth(!1), $enoughRoomOnRight_viewPortRight$$ = $dropLeft$$ + $dropWidth$$ <= $enoughRoomOnRight_viewPortRight$$, 
    $changeDirection$$;
    $$dropdown$$.hasClass("oj-listbox-drop-above") ? ($above_dropHeight$$ = !0, !$enoughRoomAbove$$ && $enoughRoomBelow_viewportBottom$$ && ($changeDirection$$ = !0, $above_dropHeight$$ = !1)) : ($above_dropHeight$$ = !1, !$enoughRoomBelow_viewportBottom$$ && $enoughRoomAbove$$ && ($above_dropHeight$$ = $changeDirection$$ = !0));
    $changeDirection$$ ? ($$dropdown$$.hide(), $offset$$18$$ = this.$container$.offset(), $dropTop_height$$14$$ = this.$container$.outerHeight(!1), $css_width$$15$$ = this.$container$.outerWidth(!1), $$dropdown$$.outerHeight(!1), $enoughRoomOnRight_viewPortRight$$ = $$window_bodyOffset$$.scrollLeft() + $windowWidth$$, $$window_bodyOffset$$.scrollTop(), $dropTop_height$$14$$ = $offset$$18$$.top + $dropTop_height$$14$$, !$above_dropHeight$$ && this.$_hasSearchBox$() && ($dropTop_height$$14$$ -= 1), 
    $dropLeft$$ = $offset$$18$$.left, $dropWidth$$ = $$dropdown$$.outerWidth(!1), $enoughRoomOnRight_viewPortRight$$ = $dropLeft$$ + $dropWidth$$ <= $enoughRoomOnRight_viewPortRight$$, $$dropdown$$.show()) : !$above_dropHeight$$ && this.$_hasSearchBox$() && ($dropTop_height$$14$$ -= 1);
    "static" !== this.body().css("position") && ($$window_bodyOffset$$ = this.body().offset(), $dropTop_height$$14$$ -= $$window_bodyOffset$$.top, $dropLeft$$ -= $$window_bodyOffset$$.left);
    $enoughRoomOnRight_viewPortRight$$ || ($dropLeft$$ = $offset$$18$$.left + $css_width$$15$$ - $dropWidth$$);
    $css_width$$15$$ = {left:$dropLeft$$, width:$css_width$$15$$};
    $above_dropHeight$$ ? ($css_width$$15$$.bottom = $windowHeight$$ - $offset$$18$$.top, $css_width$$15$$.top = "auto", this.$container$.addClass("oj-listbox-drop-above"), $$dropdown$$.addClass("oj-listbox-drop-above")) : ($css_width$$15$$.top = $dropTop_height$$14$$, $css_width$$15$$.bottom = "auto", this.$container$.removeClass("oj-listbox-drop-above"), $$dropdown$$.removeClass("oj-listbox-drop-above"));
    $$dropdown$$.css($css_width$$15$$);
  }, $_shouldOpen$:function() {
    var $event$$75$$;
    if (this.$_opened$() || !1 === this.$_enabled$ || !0 === this.$_readonly$) {
      return!1;
    }
    $event$$75$$ = $$$$12$$.Event(this.$_elemNm$ + "-opening");
    this.$opts$.element.trigger($event$$75$$);
    return!$event$$75$$.isDefaultPrevented();
  }, $_clearDropdownAlignmentPreference$:function() {
    this.$container$.removeClass("oj-listbox-drop-above");
    this.$dropdown$.removeClass("oj-listbox-drop-above");
  }, open:function($e$$54$$) {
    if (!this.$_shouldOpen$($e$$54$$)) {
      return!1;
    }
    this.$_opening$();
    return!0;
  }, $_clearPlaceholder$:function() {
    this.search.hasClass(this.$_classNm$ + "-default") && this.search.val("").removeClass(this.$_classNm$ + "-default");
  }, $_opening$:function() {
    var $cid$$6$$ = this.$containerId$, $scroll$$ = "scroll." + $cid$$6$$, $resize$$ = "resize." + $cid$$6$$, $orient$$ = "orientationchange." + $cid$$6$$;
    this.$_clearPlaceholder$();
    this.$container$.addClass("oj-listbox-dropdown-open");
    this.$_clearDropdownAlignmentPreference$();
    this.$dropdown$[0] !== this.body().children().last()[0] && this.$dropdown$.detach().appendTo(this.body());
    this.$dropdown$.appendTo(this.body());
    $$$$12$$("#oj-listbox-drop").removeAttr("id");
    this.$dropdown$.attr("id", "oj-listbox-drop");
    this.$_positionDropdown$();
    this.$dropdown$.show();
    this.$_positionDropdown$();
    this.$_getActiveContainer$().attr("aria-expanded", !0);
    var $that$$2$$ = this;
    this.$container$.parents().add(window).each(function() {
      $$$$12$$(this).on($resize$$ + " " + $scroll$$ + " " + $orient$$, function() {
        $that$$2$$.$_positionDropdown$();
      });
    });
  }, close:function() {
    if (this.$_opened$()) {
      var $cid$$7$$ = this.$containerId$, $scroll$$1$$ = "scroll." + $cid$$7$$, $resize$$1$$ = "resize." + $cid$$7$$, $orient$$1$$ = "orientationchange." + $cid$$7$$;
      this.$container$.parents().add(window).each(function() {
        $$$$12$$(this).off($scroll$$1$$).off($resize$$1$$).off($orient$$1$$);
      });
      this.$_clearDropdownAlignmentPreference$();
      this.$dropdown$.removeAttr("id");
      this.$dropdown$.hide();
      this.$container$.removeClass("oj-listbox-dropdown-open");
      this.$results$.empty();
      this.$_getActiveContainer$().attr("aria-expanded", !1);
    }
  }, $_clearSearch$:function() {
  }, $_ensureHighlightVisible$:function() {
    var $results$$7$$ = this.$results$, $children$$3_more_rb$$, $index$$145$$, $child$$5$$, $hb_y$$37$$;
    $index$$145$$ = this.$_highlight$();
    0 > $index$$145$$ || (0 == $index$$145$$ ? $results$$7$$.scrollTop(0) : ($children$$3_more_rb$$ = this.$_findHighlightableChoices$().find(".oj-listbox-result-label"), $child$$5$$ = $$$$12$$($children$$3_more_rb$$[$index$$145$$]), $hb_y$$37$$ = $child$$5$$.offset().top + $child$$5$$.outerHeight(!0), $index$$145$$ === $children$$3_more_rb$$.length - 1 && ($children$$3_more_rb$$ = $results$$7$$.find("li.oj-listbox-more-results"), 0 < $children$$3_more_rb$$.length && ($hb_y$$37$$ = $children$$3_more_rb$$.offset().top + 
    $children$$3_more_rb$$.outerHeight(!0))), $children$$3_more_rb$$ = $results$$7$$.offset().top + $results$$7$$.outerHeight(!0), $hb_y$$37$$ > $children$$3_more_rb$$ && $results$$7$$.scrollTop($results$$7$$.scrollTop() + ($hb_y$$37$$ - $children$$3_more_rb$$)), $hb_y$$37$$ = $child$$5$$.offset().top - $results$$7$$.offset().top, 0 > $hb_y$$37$$ && "none" != $child$$5$$.css("display") && $results$$7$$.scrollTop($results$$7$$.scrollTop() + $hb_y$$37$$)));
  }, $_findHighlightableChoices$:function() {
    return this.$results$.find(".oj-listbox-result-selectable:not(.oj-disabled, .oj-selected)");
  }, $_moveHighlight$:function($delta$$2$$) {
    for (var $choices$$ = this.$_findHighlightableChoices$(), $index$$146$$ = this.$_highlight$();-1 < $index$$146$$ && $index$$146$$ < $choices$$.length;) {
      var $index$$146$$ = $index$$146$$ + $delta$$2$$, $choice$$ = $$$$12$$($choices$$[$index$$146$$]);
      if ($choice$$.hasClass("oj-listbox-result-selectable") && !$choice$$.hasClass("oj-disabled") && !$choice$$.hasClass("oj-selected")) {
        this.$_highlight$($index$$146$$);
        break;
      }
    }
  }, $_highlight$:function($index$$147$$) {
    var $choice$$1_choices$$1$$ = this.$_findHighlightableChoices$();
    if (0 === arguments.length) {
      return $choice$$1_choices$$1$$.get().indexOf($choice$$1_choices$$1$$.filter(".oj-hover")[0]);
    }
    $index$$147$$ >= $choice$$1_choices$$1$$.length && ($index$$147$$ = $choice$$1_choices$$1$$.length - 1);
    0 > $index$$147$$ && ($index$$147$$ = 0);
    this.$_removeHighlight$();
    $choice$$1_choices$$1$$ = $$$$12$$($choice$$1_choices$$1$$[$index$$147$$]);
    $choice$$1_choices$$1$$.addClass("oj-hover");
    this.$_getActiveContainer$().attr("aria-activedescendant", $choice$$1_choices$$1$$.find(".oj-listbox-result-label").attr("id"));
    this.$_ensureHighlightVisible$();
  }, $_removeHighlight$:function() {
    this.$results$.find(".oj-hover").removeClass("oj-hover");
  }, $_highlightUnderEvent$:function($el$$5_event$$77$$) {
    $el$$5_event$$77$$ = $$$$12$$($el$$5_event$$77$$.target).closest(".oj-listbox-result-selectable");
    if (0 < $el$$5_event$$77$$.length && !$el$$5_event$$77$$.is(".oj-hover")) {
      var $choices$$2$$ = this.$_findHighlightableChoices$();
      this.$_highlight$($choices$$2$$.index($el$$5_event$$77$$));
    } else {
      0 == $el$$5_event$$77$$.length && this.$_removeHighlight$();
    }
  }, $_updateResults$:function($initial$$) {
    function $render$$($html$$) {
      $results$$8$$.html($html$$);
      $self$$50$$.$_positionDropdown$();
    }
    var $search$$2$$ = this.search, $results$$8$$ = this.$results$, $opts$$13$$ = this.$opts$, $self$$50$$ = this, $input$$2_term$$2$$;
    $input$$2_term$$2$$ = $search$$2$$.val();
    var $lastTerm$$ = $$$$12$$.data(this.$container$, this.$_classNm$ + "-last-term"), $queryNumber$$;
    !0 !== $initial$$ && $lastTerm$$ && $input$$2_term$$2$$ === $lastTerm$$ || ($$$$12$$.data(this.$container$, this.$_classNm$ + "-last-term", $input$$2_term$$2$$), $queryNumber$$ = ++this.$queryCount$, this.$_removeHighlight$(), $input$$2_term$$2$$ = this.search.val(), this.$resultsPage$ = 1, $opts$$13$$.$query$({element:$opts$$13$$.element, $term$:void 0 !== $input$$2_term$$2$$ && null != $input$$2_term$$2$$ && !0 !== $initial$$ ? $input$$2_term$$2$$ : "", page:this.$resultsPage$, context:null, 
    $matcher$:$opts$$13$$.$matcher$, $callback$:this.$_bind$(function($data$$80$$) {
      var $def$$;
      $queryNumber$$ == this.$queryCount$ && this.$_opened$() && (this.context = void 0 === $data$$80$$.context ? null : $data$$80$$.context, 0 === $data$$80$$.$results$.length && $opts$$13$$.$manageNewEntry$ && "" !== $search$$2$$.val() && ($def$$ = $opts$$13$$.$manageNewEntry$.call($self$$50$$, $search$$2$$.val()), void 0 !== $def$$ && null !== $def$$ && void 0 !== $self$$50$$.id($def$$) && null !== $self$$50$$.id($def$$) && "" !== $self$$50$$.id($def$$) && 0 === $$$$12$$($data$$80$$.$results$).filter(function() {
        return $self$$50$$.id(this) === $self$$50$$.id($def$$);
      }).length && $data$$80$$.$results$.unshift($def$$)), 0 === $data$$80$$.$results$.length && $_ComboUtils$$.$checkFormatter$($self$$50$$.$ojContext$, $opts$$13$$.$formatNoMatches$, "formatNoMatches") ? $render$$("\x3cli class\x3d'oj-listbox-no-results'\x3e" + $opts$$13$$.$formatNoMatches$($self$$50$$.$ojContext$, $search$$2$$.val()) + "\x3c/li\x3e") : ($results$$8$$.empty(), $self$$50$$.$opts$.$populateResults$.call(this, $results$$8$$, $data$$80$$.$results$, {$term$:$search$$2$$.val(), page:this.$resultsPage$, 
      context:null}, this.$_showPlaceholder$()), this.$_postprocessResults$($data$$80$$, $initial$$), $self$$50$$.$_positionDropdown$()));
    })}));
  }, $_cancel$:function($event$$78$$) {
    this.close($event$$78$$);
  }, $_focusSearch$:function() {
    $_ComboUtils$$.$_focus$(this.search);
  }, $_selectHighlighted$:function($options$$236$$, $event$$79$$) {
    var $index$$148$$ = this.$_highlight$(), $data$$81$$ = this.$results$.find(".oj-hover").closest(".oj-listbox-result").data(this.$_elemNm$);
    $data$$81$$ ? (this.$_highlight$($index$$148$$), this.$_onSelect$($data$$81$$, $options$$236$$, $event$$79$$)) : $options$$236$$ && $options$$236$$.$noFocus$ && this.close($event$$79$$);
  }, $_getPlaceholder$:function() {
    return this.$opts$.element.attr("placeholder") || this.$opts$.element.attr("data-placeholder") || this.$opts$.element.data("placeholder") || this.$opts$.placeholder;
  }, $_initContainerWidth$:function() {
    var $attrs$$inline_670_style$$inline_669_width$$16$$;
    a: {
      var $attr$$inline_674_matches$$inline_671$$, $i$$inline_672$$, $l$$inline_673$$;
      $attrs$$inline_670_style$$inline_669_width$$16$$ = this.$opts$.element.attr("style");
      if (void 0 !== $attrs$$inline_670_style$$inline_669_width$$16$$) {
        for ($attrs$$inline_670_style$$inline_669_width$$16$$ = $attrs$$inline_670_style$$inline_669_width$$16$$.split(";"), $i$$inline_672$$ = 0, $l$$inline_673$$ = $attrs$$inline_670_style$$inline_669_width$$16$$.length;$i$$inline_672$$ < $l$$inline_673$$;$i$$inline_672$$ += 1) {
          if ($attr$$inline_674_matches$$inline_671$$ = $attrs$$inline_670_style$$inline_669_width$$16$$[$i$$inline_672$$].replace(/\s/g, ""), $attr$$inline_674_matches$$inline_671$$ = $attr$$inline_674_matches$$inline_671$$.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== $attr$$inline_674_matches$$inline_671$$ && 1 <= $attr$$inline_674_matches$$inline_671$$.length) {
            $attrs$$inline_670_style$$inline_669_width$$16$$ = $attr$$inline_674_matches$$inline_671$$[1];
            break a;
          }
        }
      }
      $attrs$$inline_670_style$$inline_669_width$$16$$ = void 0;
    }
    null !== $attrs$$inline_670_style$$inline_669_width$$16$$ && this.$container$.css("width", $attrs$$inline_670_style$$inline_669_width$$16$$);
  }, $getVal$:function() {
    return this.$ojContext$.option("value");
  }, $setVal$:function($val$$28$$, $event$$80$$) {
    "string" === typeof $val$$28$$ ? this.$ojContext$.$_SetValue$([$val$$28$$], $event$$80$$) : this.$ojContext$.$_SetValue$($val$$28$$, $event$$80$$);
    this.$opts$.element.val($val$$28$$);
  }, $_showPlaceholder$:function() {
    return!1;
  }, $_getActiveContainer$:function() {
    return this.search;
  }, $_hasSearchBox$:function() {
    return void 0 !== this.$opts$.minimumResultsForSearch && void 0 !== this.$container$.$_hasSearchBox$;
  }}), $_ojChoice_defaults$$ = {$closeOnSelect$:!0, $openOnEnter$:!0, $formatNoMatches$:function() {
    return "No matches found";
  }, id:function($e$$56$$) {
    return $e$$56$$.id;
  }, $matcher$:function($term$$3$$, $text$$10$$) {
    return 0 <= ("" + $text$$10$$).toUpperCase().indexOf(("" + $term$$3$$).toUpperCase());
  }, separator:",", $escapeMarkup$:$_ComboUtils$$.$defaultEscapeMarkup$, $blurOnChange$:!1, $selectOnBlur$:!1}, $_AbstractSingleChoice$$ = $_ComboUtils$$.$clazz$($_AbstractOjChoice$$, {$_enableInterface$:function() {
    $_AbstractSingleChoice$$.$superclass$.$_enableInterface$.apply(this, arguments) && this.search.prop("disabled", !this.$_isInterfaceEnabled$());
  }, $_focus$:function() {
    this.$_opened$() && this.close();
  }, _destroy:function() {
    $$$$12$$("label[for\x3d'" + this.search.attr("id") + "']").attr("for", this.$opts$.element.attr("id"));
    $_AbstractSingleChoice$$.$superclass$._destroy.apply(this, arguments);
  }, $_clear$:function($event$$81$$) {
    this.selection.data(this.$_elemNm$) && ($event$$81$$ || $oj$$12$$.$Logger$.warn("Event should not be null when user modified the value in UI"), this.$setVal$([], $event$$81$$), this.search.val(""), this.selection.removeData(this.$_elemNm$));
    this.$_setPlaceholder$();
  }, $_initSelection$:function() {
    this.$opts$.$initSelection$.call(null, this.$datalist$ ? this.$datalist$ : this.$opts$.element, this.$_bind$(this.$_updateSelectedOption$));
  }, $_containerKeydownHandler$:function($e$$57$$) {
    if (this.$_isInterfaceEnabled$()) {
      if ($e$$57$$.which === $_ComboUtils$$.$KEY$.PAGE_UP || $e$$57$$.which === $_ComboUtils$$.$KEY$.PAGE_DOWN) {
        $_ComboUtils$$.$killEvent$($e$$57$$);
      } else {
        switch($e$$57$$.which) {
          case $_ComboUtils$$.$KEY$.UP:
          ;
          case $_ComboUtils$$.$KEY$.DOWN:
            this.$_opened$() ? this.$_moveHighlight$($e$$57$$.which === $_ComboUtils$$.$KEY$.UP ? -1 : 1) : this.open($e$$57$$);
            $_ComboUtils$$.$killEvent$($e$$57$$);
            return;
          case $_ComboUtils$$.$KEY$.ENTER:
            this.$_selectHighlighted$(null, $e$$57$$);
            $_ComboUtils$$.$killEvent$($e$$57$$);
            return;
          case $_ComboUtils$$.$KEY$.TAB:
            this.$_selectHighlighted$({$noFocus$:!0}, $e$$57$$);
            return;
          case $_ComboUtils$$.$KEY$.$ESC$:
            this.$_cancel$($e$$57$$);
            $_ComboUtils$$.$killEvent$($e$$57$$);
            return;
        }
        this.$_userTyping$ = !0;
        this.$_opened$() || this.open($e$$57$$);
      }
    }
  }, $_containerKeyupHandler$:function($e$$58$$) {
    this.$_isInterfaceEnabled$() && !this.$_opened$() && this.open($e$$58$$);
  }, $_initContainer$:function() {
    var $container$$5_selection$$;
    $container$$5_selection$$ = this.$container$;
    var $idSuffix$$ = $_ComboUtils$$.$nextUid$(), $elementLabel$$;
    this.selection = $container$$5_selection$$ = $container$$5_selection$$.find("." + this.$_classNm$ + "-choice");
    $elementLabel$$ = $$$$12$$("label[for\x3d'" + this.$opts$.element.attr("id") + "']");
    $elementLabel$$.attr("id") || $elementLabel$$.attr("id", this.$_classNm$ + "-label-" + $idSuffix$$);
    $container$$5_selection$$.find("." + this.$_classNm$ + "-input").attr("id", this.$_classNm$ + "-input-" + $idSuffix$$);
    this.$results$.attr("id", "oj-listbox-results-" + $idSuffix$$);
    this.search.attr("aria-owns", "oj-listbox-results-" + $idSuffix$$);
    this.search.attr("aria-labelledby", $elementLabel$$.attr("id"));
    this.search.on("keydown", this.$_bind$(this.$_containerKeydownHandler$));
    this.search.on("keyup-change input", this.$_bind$(this.$_containerKeyupHandler$));
    $container$$5_selection$$.on("mousedown", "abbr", this.$_bind$(function($e$$59$$) {
      this.$_isInterfaceEnabled$() && (this.$_clear$($e$$59$$), $_ComboUtils$$.$killEventImmediately$($e$$59$$), this.close($e$$59$$), this.selection.focus());
    }));
    $container$$5_selection$$.on("mousedown", this.$_bind$(function($e$$60$$) {
      this.$opts$.element.prop("disabled") && $_ComboUtils$$.$killEvent$($e$$60$$);
      this.$_opened$() ? this.close($e$$60$$) : this.$_isInterfaceEnabled$() && this.open($e$$60$$);
      this.search.focus();
    }));
    $container$$5_selection$$.on("focus", this.$_bind$(function($e$$61$$) {
      $_ComboUtils$$.$killEvent$($e$$61$$);
    }));
    this.search.on("blur", this.$_bind$(function() {
      this.search.removeClass(this.$_classNm$ + "-focused");
    }));
    this.$_initContainerWidth$();
    this.$opts$.element.hide().attr("aria-hidden", !0);
    this.$_setPlaceholder$();
  }, $_prepareOpts$:function() {
    var $opts$$14$$ = $_AbstractSingleChoice$$.$superclass$.$_prepareOpts$.apply(this, arguments), $self$$52$$ = this, $tagName$$3$$ = $opts$$14$$.element.get(0).tagName.toLowerCase();
    if ("input" === $tagName$$3$$ && $opts$$14$$.element.prop("list") || "select" === $tagName$$3$$ && 0 < $opts$$14$$.element.children().length) {
      $opts$$14$$.$initSelection$ = function $$opts$$14$$$$initSelection$$($element$$47$$, $callback$$84$$) {
        var $selected$$1$$, $value$$160$$ = $self$$52$$.$getVal$();
        Array.isArray($value$$160$$) && ($value$$160$$ = $value$$160$$[0]);
        $selected$$1$$ = void 0 !== $value$$160$$ && null !== $value$$160$$ ? $self$$52$$.$_optionToData$($element$$47$$.find("option").filter(function() {
          return this.value === $value$$160$$;
        })) : $self$$52$$.$_optionToData$($element$$47$$.find("option").filter(function() {
          return this.selected;
        }));
        $callback$$84$$($selected$$1$$);
      };
    } else {
      if ("options" in $opts$$14$$ || this.$getVal$() && 0 < this.$getVal$().length) {
        $opts$$14$$.$initSelection$ = $opts$$14$$.$initSelection$ || function($element$$48$$, $callback$$85$$) {
          var $id$$15$$ = "";
          $self$$52$$.$getVal$() && $self$$52$$.$getVal$().length && ($id$$15$$ = $self$$52$$.$getVal$()[0]);
          var $first$$4$$ = null, $match$$15$$ = null;
          $opts$$14$$.$query$({$matcher$:function($is_match_term$$4$$, $text$$11$$, $el$$6$$) {
            ($is_match_term$$4$$ = $id$$15$$ === $opts$$14$$.id($el$$6$$)) && ($match$$15$$ = $el$$6$$);
            $first$$4$$ || ($first$$4$$ = $el$$6$$);
            return $is_match_term$$4$$;
          }, $callback$:$$$$12$$.isFunction($callback$$85$$) ? function() {
            $match$$15$$ || "select" !== $tagName$$3$$ || ($match$$15$$ = $first$$4$$);
            $callback$$85$$($match$$15$$);
          } : $$$$12$$.noop});
        };
      }
    }
    return $opts$$14$$;
  }, $_setPlaceholder$:function() {
    var $placeholder$$1$$ = this.$_getPlaceholder$();
    void 0 === $placeholder$$1$$ && ($placeholder$$1$$ = "");
    this.search.val($placeholder$$1$$).addClass(this.$_classNm$ + "-default");
    this.$container$.removeClass(this.$_classNm$ + "-allowclear");
  }, $_postprocessResults$:function($data$$83_highlightableChoices$$, $initial$$1$$, $noHighlightUpdate$$) {
    var $selected$$2$$ = 0, $self$$53$$ = this;
    $data$$83_highlightableChoices$$ = this.$_findHighlightableChoices$();
    $_ComboUtils$$.$each2$($data$$83_highlightableChoices$$, function($i$$165$$, $elm$$3$$) {
      if ($self$$53$$.$getVal$() && $self$$53$$.$getVal$()[0] === $self$$53$$.id($elm$$3$$.data($self$$53$$.$_elemNm$))) {
        return $selected$$2$$ = $i$$165$$, !1;
      }
    });
    !1 !== $noHighlightUpdate$$ && (!0 === $initial$$1$$ && 0 <= $selected$$2$$ ? this.$_highlight$($selected$$2$$) : this.$_highlight$(0));
  }, $_onSelect$:function($data$$84$$, $old_options$$237$$, $event$$82$$) {
    this.$_triggerSelect$($data$$84$$) && ($old_options$$237$$ = this.$getVal$() ? this.$getVal$()[0] : null, this.$_updateSelection$($data$$84$$), this.close($event$$82$$), $old_options$$237$$ !== this.id($data$$84$$) && this.$setVal$(this.id($data$$84$$), $event$$82$$));
  }, $_shouldOpen$:function($e$$62$$) {
    return this.$_opened$() || !1 === this.$_enabled$ || !0 === this.$_readonly$ ? !1 : this.$ojContext$._trigger("beforeExpand", $e$$62$$, {component:this.$opts$.element});
  }, $_clearSearch$:function() {
    this.search.val("");
  }}), $_OjSingleCombobox$$ = $_ComboUtils$$.$clazz$($_AbstractSingleChoice$$, {$_elemNm$:"ojcombobox", $_classNm$:"oj-combobox", $_createContainer$:function() {
    return $$$$12$$(document.createElement("div")).attr({"class":"oj-combobox oj-component"}).html("\x3cdiv class\x3d'oj-combobox-choice' tabindex\x3d'-1' role\x3d'presentation'\x3e   \x3cinput type\x3d'text' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off'       spellcheck\x3d'false' class\x3d'oj-combobox-input' role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' /\x3e   \x3cabbr class\x3d'oj-combobox-search-choice-close' role\x3d'presentation'\x3e\x3c/abbr\x3e   \x3ca class\x3d'oj-combobox-arrow' role\x3d'presentation'\x3e\x3cb class\x3d'oj-combobox-icon oj-component-icon oj-clickable-icon oj-combobox-open-icon' role\x3d'presentation'\x3e\x3c/b\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'oj-listbox-drop oj-combobox-display-none' role\x3d'presentation'\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e");
  }, close:function($event$$83$$) {
    if (this.$_opened$()) {
      $_OjSingleCombobox$$.$superclass$.close.apply(this, arguments);
      var $data$$85_formatted$$1$$ = this.selection.data(this.$_elemNm$);
      "" == this.search.val() ? this.$_clear$($event$$83$$) : $data$$85_formatted$$1$$ || "" === this.search.val() ? ($data$$85_formatted$$1$$ = this.$opts$.$formatSelection$($data$$85_formatted$$1$$, 0, this.$opts$.$escapeMarkup$), void 0 !== $data$$85_formatted$$1$$ && this.search.val($data$$85_formatted$$1$$)) : this.$_clearSearch$();
    }
  }, $_opening$:function($event$$84$$) {
    var $el$$7_range$$19$$, $len$$8$$;
    this.$ojContext$._trigger("beforeExpand", $event$$84$$) && ($_OjSingleCombobox$$.$superclass$.$_opening$.apply(this, arguments), $el$$7_range$$19$$ = this.search.get(0), $el$$7_range$$19$$.createTextRange ? ($el$$7_range$$19$$ = $el$$7_range$$19$$.createTextRange(), $el$$7_range$$19$$.collapse(!1), $el$$7_range$$19$$.select()) : $el$$7_range$$19$$.setSelectionRange && ($len$$8$$ = this.search.val().length, $el$$7_range$$19$$.setSelectionRange($len$$8$$, $len$$8$$)), this.$_updateResults$(!0));
  }, $_updateSelection$:function($data$$86_formatted$$2$$) {
    this.selection.data(this.$_elemNm$, $data$$86_formatted$$2$$);
    null !== $data$$86_formatted$$2$$ ? ($data$$86_formatted$$2$$ = this.$opts$.$formatSelection$($data$$86_formatted$$2$$, 0, this.$opts$.$escapeMarkup$), void 0 !== $data$$86_formatted$$2$$ && this.search.val($data$$86_formatted$$2$$), this.search.removeClass(this.$_classNm$ + "-default")) : this.$_setPlaceholder$();
    this.$opts$.$allowClear$ && this.$container$.addClass(this.$_classNm$ + "-allowclear");
  }, $_updateSelectedOption$:function($data$$87_selected$$3_value$$161$$) {
    if (void 0 === $data$$87_selected$$3_value$$161$$ || null === $data$$87_selected$$3_value$$161$$) {
      $data$$87_selected$$3_value$$161$$ = ($data$$87_selected$$3_value$$161$$ = this.$getVal$()) ? Array.isArray($data$$87_selected$$3_value$$161$$) ? Array.isArray($data$$87_selected$$3_value$$161$$) && $data$$87_selected$$3_value$$161$$.length ? {label:$data$$87_selected$$3_value$$161$$[0]} : null : {label:$data$$87_selected$$3_value$$161$$} : null;
    }
    this.$_updateSelection$($data$$87_selected$$3_value$$161$$);
    this.close();
  }}), $_OjSingleSelect$$ = $_ComboUtils$$.$clazz$($_AbstractSingleChoice$$, {$_elemNm$:"ojselect", $_classNm$:"oj-select", $_userTyping$:!1, $_createContainer$:function() {
    return $$$$12$$(document.createElement("div")).attr({"class":"oj-select oj-component"}).html("\x3cdiv class\x3d'oj-select-choice' tabindex\x3d'0' role\x3d'combobox'      aria-autocomplete\x3d'none' aria-expanded\x3d'false' aria-ready\x3d'true'\x3e  \x3cspan class\x3d'oj-select-chosen'\x3e\x3c/span\x3e  \x3cabbr class\x3d'oj-select-search-choice-close' role\x3d'presentation'\x3e\x3c/abbr\x3e  \x3ca class\x3d'oj-select-arrow' role\x3d'presentation'\x3e    \x3cb class\x3d'oj-component-icon oj-clickable-icon oj-select-open-icon' role\x3d'presentation'\x3e\x3c/b\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d'oj-listbox-drop' style\x3d'display:none' role\x3d'presentation'\x3e  \x3cdiv class\x3d'oj-listbox-search-wrapper'\x3e  \x3cdiv class\x3d'oj-listbox-search'\x3e    \x3cinput type\x3d'text' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off'           spellcheck\x3d'false' class\x3d'oj-listbox-input' title\x3d'Search field'            role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' /\x3e    \x3cspan class\x3d'oj-listbox-spyglass-box'\x3e      \x3cspan class\x3d'oj-component-icon oj-listbox-search-icon' role\x3d'presentation'\x3e       \x3cb role\x3d'presentation'\x3e\x3c/b\x3e\x3c/span\x3e    \x3c/span\x3e  \x3c/div\x3e  \x3c/div\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e");
  }, $_enable$:function($enabled$$3$$) {
    $_OjSingleSelect$$.$superclass$.$_enable$.apply(this, arguments);
    this.$_enabled$ ? (this.$container$.find(".oj-select-choice").attr("tabindex", "0"), this.$container$.find(".oj-select-arrow").removeClass("oj-disabled")) : (this.$container$.find(".oj-select-choice").attr("tabindex", "-1"), this.$container$.find(".oj-select-arrow").addClass("oj-disabled"));
  }, close:function($event$$85$$) {
    this.$_opened$() && ($_OjSingleSelect$$.$superclass$.close.apply(this, arguments), this.$_testClear$($event$$85$$) || this.$_clearSearch$(), $_ComboUtils$$.$_focus$(this.selection), this.$container$.find(".oj-listbox-spyglass-box").off("mouseup click"));
  }, $_opening$:function($event$$86$$) {
    var $el$$8_range$$20$$, $len$$9$$;
    $_OjSingleSelect$$.$superclass$.$_opening$.apply(this, arguments);
    this.$_showSearchBox$();
    this.$_hasSearchBox$() && ($el$$8_range$$20$$ = this.search.get(0), $el$$8_range$$20$$.createTextRange ? ($el$$8_range$$20$$ = $el$$8_range$$20$$.createTextRange(), $el$$8_range$$20$$.collapse(!1), $el$$8_range$$20$$.select()) : $el$$8_range$$20$$.setSelectionRange && ($len$$9$$ = this.search.val().length, $el$$8_range$$20$$.setSelectionRange($len$$9$$, $len$$9$$)));
    this.$_updateResults$(!0);
  }, $_initContainer$:function() {
    var $selectedId$$ = this.$containerId$ + "_selected";
    this.text = this.$container$.find(".oj-select-chosen").attr("id", $selectedId$$);
    $_OjSingleSelect$$.$superclass$.$_initContainer$.apply(this, arguments);
    this.$container$.find(".oj-select-choice").attr({"aria-owns":this.search.attr("aria-owns"), "aria-labelledby":this.search.attr("aria-labelledby"), "aria-describedby":$selectedId$$});
    this.selection.on("keydown", this.$_bind$(this.$_containerKeydownHandler$));
    this.selection.on("keyup-change input", this.$_bind$(this.$_containerKeyupHandler$));
    var $self$$54$$ = this;
    this.selection.on("blur", function($e$$63$$) {
      $self$$54$$.$_testClear$($e$$63$$);
    });
  }, $_initSelection$:function() {
    this.$_isPlaceholderOptionSelected$() ? (this.$_updateSelection$(null), this.close(), this.$_setPlaceholder$()) : $_OjSingleSelect$$.$superclass$.$_initSelection$.apply(this, arguments);
  }, $_updateSelectedOption$:function($selected$$4$$) {
    if (void 0 !== $selected$$4$$ && null !== $selected$$4$$) {
      var $selectedVal$$, $value$$162$$ = this.$getVal$(), $value$$162$$ = Array.isArray($value$$162$$) ? $value$$162$$[0] : $value$$162$$;
      $selectedVal$$ = this.$opts$.id($selected$$4$$);
      $value$$162$$ !== $selectedVal$$ && (this.$ojContext$.options.value = Array.isArray($value$$162$$) ? [$selectedVal$$] : $selectedVal$$);
      this.$_updateSelection$($selected$$4$$);
      this.close();
    }
  }, $_updateSelection$:function($data$$88$$) {
    this.selection.data(this.$_elemNm$, $data$$88$$);
    null !== $data$$88$$ && this.text.text(this.$opts$.optionKeys && this.$opts$.optionKeys.label ? $data$$88$$[this.$opts$.optionKeys.label] : $data$$88$$.label);
    $data$$88$$ && "" != $data$$88$$.id && this.text.removeClass(this.$_classNm$ + "-default");
    this.$opts$.$allowClear$ && this.$container$.addClass(this.$_classNm$ + "-allowclear");
  }, $_getActiveContainer$:function() {
    return this.search.attr("aria-expanded") && this.$_hasSearchBox$() ? this.search : this.selection;
  }, $_isPlaceholderOptionSelected$:function() {
    if (null === this.$_getPlaceholder$()) {
      return!1;
    }
    var $cval$$ = this.$getVal$(), $cval$$ = Array.isArray($cval$$) ? $cval$$[0] : $cval$$;
    return "" === $cval$$ || void 0 === $cval$$ || null === $cval$$;
  }, $_getPlaceholder$:function() {
    return this.$opts$.placeholder;
  }, $_showPlaceholder$:function() {
    return!0;
  }, $_setPlaceholder$:function() {
    var $placeholder$$2$$ = this.$_getPlaceholder$();
    this.$_isPlaceholderOptionSelected$() && void 0 !== $placeholder$$2$$ && (void 0 === $placeholder$$2$$ && ($placeholder$$2$$ = ""), this.text.text($placeholder$$2$$).addClass(this.$_classNm$ + "-default"), this.$container$.removeClass(this.$_classNm$ + "-allowclear"));
  }, $_clearPlaceholder$:function() {
  }, $setVal$:function($val$$30$$, $event$$87$$) {
    $_OjSingleSelect$$.$superclass$.$setVal$.call(this, $val$$30$$, $event$$87$$);
    this.selection.data("selectVal", $val$$30$$);
  }, $_containerKeydownHandler$:function($e$$64$$) {
    if (!$_ComboUtils$$.$KEY$.$isControl$($e$$64$$) && !$_ComboUtils$$.$KEY$.$isFunctionKey$($e$$64$$)) {
      switch($e$$64$$.which) {
        case $_ComboUtils$$.$KEY$.TAB:
          this.$_selectHighlighted$({$noFocus$:!0}, $e$$64$$);
          this.selection.focus();
          this.$_testClear$($e$$64$$);
          return;
        case $_ComboUtils$$.$KEY$.ENTER:
          if ($e$$64$$.target === this.selection[0] && !this.$_opened$()) {
            this.open($e$$64$$);
            $_ComboUtils$$.$killEvent$($e$$64$$);
            return;
          }
        ;
      }
      $_OjSingleSelect$$.$superclass$.$_containerKeydownHandler$.apply(this, arguments);
    }
  }, $_testClear$:function($event$$88$$) {
    return "" == this.text.text() ? (this.$_clear$($event$$88$$), !0) : !1;
  }, $_showSearchBox$:function() {
    var $focusOnSearchBox$$ = !1, $searchBox$$ = this.$dropdown$.find(".oj-listbox-search");
    $searchBox$$ && (this.$_hasSearchBox$() ? (this.$dropdown$.find(".oj-listbox-search-wrapper").removeClass("oj-helper-hidden-accessible"), $$$$12$$($searchBox$$).removeAttr("aria-hidden"), $focusOnSearchBox$$ = !0) : (this.$dropdown$.find(".oj-listbox-search-wrapper").addClass("oj-helper-hidden-accessible"), $$$$12$$($searchBox$$).attr({"aria-hidden":"true"})));
    $_ComboUtils$$.$_focus$($focusOnSearchBox$$ ? this.search : this.selection);
    if ($focusOnSearchBox$$) {
      var $self$$55$$ = this;
      $searchBox$$.find(".oj-listbox-spyglass-box").on("mouseup click", function($e$$65$$) {
        $self$$55$$.search.focus();
        $e$$65$$.stopPropagation();
      });
    }
  }, $_hasSearchBox$:function() {
    return(this.$datalist$ ? this.$datalist$[0].length : this.$opts$.options.length) > this.$opts$.minimumResultsForSearch || this.$_userTyping$;
  }});
  $oj$$12$$.$__registerWidget$("oj.ojCombobox", $$$$12$$.oj.editableValue, {defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{converter:void 0, placeholder:void 0, multiple:!1, options:null, optionKeys:null, optgroupKeys:null, beforeExpand:null}, widget:function() {
    return this.$combobox$.$container$;
  }, _ComponentCreate:function() {
    this._super();
    this.$_setup$();
  }, _InitOptions:function($originalDefaults$$5$$, $constructorOptions$$6$$) {
    this._super($originalDefaults$$5$$, $constructorOptions$$6$$);
    $oj$$12$$.$EditableValueUtils$.$initializeOptionsFromDom$([{attribute:"disabled", defaultOptionValue:null, validateOption:!0}, {attribute:"placeholder", defaultOptionValue:""}, {attribute:"required", defaultOptionValue:"optional", coerceDomValue:!0, validateOption:!0}, {attribute:"title", defaultOptionValue:""}], $constructorOptions$$6$$, this);
    if (void 0 === this.options.value) {
      this.options.value = void 0 !== this.element.attr("value") ? $_ComboUtils$$.$splitVal$(this.element.val(), ",") : null;
    } else {
      var $value$$163$$ = this.options.value;
      Array.isArray($value$$163$$) ? $value$$163$$ = $value$$163$$.slice(0) : "string" === typeof $value$$163$$ && ($value$$163$$ = $_ComboUtils$$.$splitVal$($value$$163$$, ","));
      this.options.value = $value$$163$$;
    }
  }, $_setup$:function() {
    var $opts$$15$$, $multiple$$ = this.options.multiple;
    $opts$$15$$ = {};
    $opts$$15$$.element = this.element;
    $opts$$15$$.$ojContext$ = this;
    $opts$$15$$ = $$$$12$$.extend(this.options, $opts$$15$$);
    this.$combobox$ = $multiple$$ ? new $_OjMultiCombobox$$ : new $_OjSingleCombobox$$;
    this.$combobox$._init($opts$$15$$);
  }, _destroy:function() {
    this.$combobox$._destroy();
  }, refresh:function() {
    this._super();
    this.$combobox$._destroy();
    this.$_setup$();
  }, _setOption:function($key$$68$$, $value$$164$$, $flags$$22$$) {
    "value" === $key$$68$$ && (Array.isArray($value$$164$$) ? $value$$164$$ = $value$$164$$.slice(0) : "string" === typeof $value$$164$$ && ($value$$164$$ = $_ComboUtils$$.$splitVal$($value$$164$$, ",")));
    this._super($key$$68$$, $value$$164$$, $flags$$22$$);
    "disabled" === $key$$68$$ && ($value$$164$$ ? this.$combobox$.$_disable$() : this.$combobox$.$_enable$());
  }, $_SetDisplayValue$:function() {
    this.$combobox$.$_initSelection$();
  }, _SetPlaceholder:function($value$$165$$) {
    this.$combobox$ && (this.$combobox$.$opts$.placeholder = $value$$165$$, this.$combobox$.$_setPlaceholder$());
  }, _GetMessagingLauncherElement:function() {
    return this.$combobox$.search;
  }, $_GetContentElement$:function() {
    return this.$combobox$.search;
  }, _GetDefaultStyleClass:function() {
    return "oj-combobox";
  }, getNodeBySubId:function($locator$$7_subId$$7$$) {
    var $node$$20$$ = null;
    if (null == $locator$$7_subId$$7$$) {
      return this.$combobox$.$container$ ? this.$combobox$.$container$[0] : null;
    }
    $node$$20$$ = this._super($locator$$7_subId$$7$$);
    if (!$node$$20$$) {
      switch($locator$$7_subId$$7$$ = $locator$$7_subId$$7$$.subId, "oj-combobox-drop" === $locator$$7_subId$$7$$ && ($locator$$7_subId$$7$$ = "oj-listbox-drop"), "oj-combobox-results" === $locator$$7_subId$$7$$ && ($locator$$7_subId$$7$$ = "oj-listbox-results"), "oj-combobox-selection" === $locator$$7_subId$$7$$ && ($locator$$7_subId$$7$$ = "oj-combobox-search-choice"), $locator$$7_subId$$7$$) {
        case "oj-combobox-input":
        ;
        case "oj-combobox-arrow":
        ;
        case "oj-listbox-drop":
        ;
        case "oj-listbox-results":
          $node$$20$$ = this.widget().find("." + $locator$$7_subId$$7$$)[0];
          break;
        case "oj-combobox-search-choice":
          $node$$20$$ = this.widget().find("." + $locator$$7_subId$$7$$);
      }
    }
    return $node$$20$$ || null;
  }});
  $oj$$12$$.$__registerWidget$("oj.ojSelect", $$$$12$$.oj.editableValue, {defaultElement:"\x3cselect\x3e", widgetEventPrefix:"oj", options:{minimumResultsForSearch:10, placeholder:void 0, options:null, optionKeys:null, optgroupKeys:null, beforeExpand:null}, widget:function() {
    return this.select.$container$;
  }, _ComponentCreate:function() {
    this._super();
    this.$_setup$();
  }, $_setup$:function() {
    var $opts$$16$$ = {};
    $opts$$16$$.element = this.element;
    $opts$$16$$.$ojContext$ = this;
    $opts$$16$$ = $$$$12$$.extend(this.options, $opts$$16$$);
    this.select = new $_OjSingleSelect$$;
    this.select._init($opts$$16$$);
    this.$_placeHolderTemp$ && (this.select.$opts$.placeholder = this.$_placeHolderTemp$, this.$_placeHolderTemp$ = void 0, this.select.$_setPlaceholder$());
  }, refresh:function() {
    this._super();
    this.select._destroy();
    this.$_setup$();
  }, _destroy:function() {
    this.select._destroy();
  }, _SetPlaceholder:function($value$$166$$) {
    this.select ? (this.select.$opts$.placeholder = $value$$166$$, this.select.$_setPlaceholder$()) : this.$_placeHolderTemp$ = $value$$166$$;
  }, _InitOptions:function($originalDefaults$$6$$, $constructorOptions$$7$$) {
    this._super($originalDefaults$$6$$, $constructorOptions$$7$$);
    $oj$$12$$.$EditableValueUtils$.$initializeOptionsFromDom$([{attribute:"disabled", defaultOptionValue:null, validateOption:!0}, {attribute:"placeholder", defaultOptionValue:null}, {attribute:"required", defaultOptionValue:"optional", coerceDomValue:!0, validateOption:!0}, {attribute:"title", defaultOptionValue:""}], $constructorOptions$$7$$, this);
    if (void 0 === this.options.value) {
      this.options.value = void 0 !== this.element.attr("value") ? $_ComboUtils$$.$splitVal$(this.element.val(), ",") : null;
    } else {
      var $value$$167$$ = this.options.value;
      Array.isArray($value$$167$$) ? $value$$167$$ = $value$$167$$.slice(0) : "string" === typeof $value$$167$$ && ($value$$167$$ = [$value$$167$$]);
      this.options.value = $value$$167$$;
    }
  }, $_SetDisplayValue$:function() {
    this.select.$_initSelection$();
  }, _setOption:function($key$$69$$, $value$$168$$, $flags$$23$$) {
    "value" === $key$$69$$ && (Array.isArray($value$$168$$) ? $value$$168$$ = $value$$168$$.slice(0) : "string" === typeof $value$$168$$ && ($value$$168$$ = [$value$$168$$]));
    this._super($key$$69$$, $value$$168$$, $flags$$23$$);
    "disabled" === $key$$69$$ ? $value$$168$$ ? this.select.$_disable$() : this.select.$_enable$() : "data" === $key$$69$$ && this.$_setup$();
  }, getNodeBySubId:function($index$$149_locator$$8$$) {
    var $node$$21$$ = null, $subId$$8$$;
    if (null == $index$$149_locator$$8$$) {
      return this.select.$container$ ? this.select.$container$[0] : null;
    }
    $node$$21$$ = this._super($index$$149_locator$$8$$);
    if (!$node$$21$$) {
      switch($subId$$8$$ = $index$$149_locator$$8$$.subId, "oj-select-drop" === $subId$$8$$ && ($subId$$8$$ = "oj-listbox-drop"), "oj-select-results" === $subId$$8$$ && ($subId$$8$$ = "oj-listbox-results"), "oj-select-search" === $subId$$8$$ && ($subId$$8$$ = "oj-listbox-search"), $subId$$8$$) {
        case "oj-select-choice":
        ;
        case "oj-select-chosen":
        ;
        case "oj-listbox-search":
        ;
        case "oj-listbox-drop":
        ;
        case "oj-listbox-results":
          $node$$21$$ = this.widget().find("." + $subId$$8$$)[0];
          break;
        case "oj-listbox-result-label":
          if (this.select && this.select.$results$) {
            var $ddlist$$ = $$$$12$$("#" + this.select.$results$.attr("id")).children();
            $index$$149_locator$$8$$ = $index$$149_locator$$8$$.index;
            $ddlist$$.length && $index$$149_locator$$8$$ < $ddlist$$.length && ($node$$21$$ = $ddlist$$.eq($index$$149_locator$$8$$).find("." + $subId$$8$$)[0]);
          }
        ;
      }
    }
    return $node$$21$$ || null;
  }, _GetDefaultStyleClass:function() {
    return "oj-select";
  }, _GetMessagingLauncherElement:function() {
    return this.select.selection;
  }, $_GetContentElement$:function() {
    return this.select.selection;
  }});
  var $_OjMultiCombobox$$ = $_ComboUtils$$.$clazz$($_AbstractOjChoice$$, {$_elemNm$:"ojcombobox", $_classNm$:"oj-combobox", $_createContainer$:function() {
    return $$$$12$$(document.createElement("div")).attr({"class":"oj-combobox oj-combobox-multi oj-component"}).html("\x3cul class\x3d'oj-combobox-choices'\x3e  \x3cli class\x3d'oj-combobox-search-field'\x3e    \x3cinput type\x3d'text' role\x3d'combobox' aria-expanded\x3d'false' aria-autocomplete\x3d'list' autocomplete\x3d'off' autocorrect\x3d'off' autocapitalize\x3d'off' spellcheck\x3d'false' class\x3d'oj-combobox-input'\x3e  \x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d'oj-combobox-description oj-helper-hidden-accessible'/\x3e\x3cdiv class\x3d'oj-listbox-drop oj-listbox-drop-multi oj-combobox-display-none'\x3e   \x3cul class\x3d'oj-listbox-results' role\x3d'listbox'\x3e   \x3c/ul\x3e\x3c/div\x3e");
  }, $_prepareOpts$:function() {
    var $opts$$17$$ = $_OjMultiCombobox$$.$superclass$.$_prepareOpts$.apply(this, arguments), $self$$56$$ = this;
    "input" === $opts$$17$$.element.get(0).tagName.toLowerCase() && $opts$$17$$.element.prop("list") ? $opts$$17$$.$initSelection$ = function $$opts$$17$$$$initSelection$$($element$$49$$, $callback$$86$$) {
      var $data$$89$$ = [];
      if ($self$$56$$.$getVal$() && $self$$56$$.$getVal$().length) {
        for (var $selected$$5$$, $ids$$ = $self$$56$$.$getVal$(), $i$$166$$ = 0;$i$$166$$ < $ids$$.length;$i$$166$$++) {
          var $id$$16$$ = $ids$$[$i$$166$$];
          ($selected$$5$$ = $element$$49$$.find("option").filter(function() {
            return this.value === $id$$16$$;
          })) && $selected$$5$$.length ? $data$$89$$.push($self$$56$$.$_optionToData$($selected$$5$$)) : $data$$89$$.push({value:$id$$16$$, label:$id$$16$$});
        }
      } else {
        $selected$$5$$ = $element$$49$$.find("option").filter(function() {
          return this.selected;
        }), $_ComboUtils$$.$each2$($selected$$5$$, function($i$$167$$, $elm$$4$$) {
          $data$$89$$.push($self$$56$$.$_optionToData$($elm$$4$$));
        });
      }
      $callback$$86$$($data$$89$$);
    } : "options" in $opts$$17$$ && ($opts$$17$$.$initSelection$ = $opts$$17$$.$initSelection$ || function($element$$50$$, $callback$$87$$) {
      var $ids$$1$$ = $self$$56$$.$getVal$(), $matches$$2$$ = [];
      $opts$$17$$.$query$({$matcher$:function($is_match$$1_term$$5$$, $text$$12$$, $el$$9$$) {
        ($is_match$$1_term$$5$$ = $$$$12$$.grep($ids$$1$$, function($id$$17$$) {
          return $id$$17$$ === $opts$$17$$.id($el$$9$$);
        }).length) && $matches$$2$$.push($el$$9$$);
        return $is_match$$1_term$$5$$;
      }, $callback$:$$$$12$$.isFunction($callback$$87$$) ? function() {
        for (var $ordered$$ = [], $i$$168$$ = 0;$i$$168$$ < $ids$$1$$.length;$i$$168$$++) {
          for (var $id$$18$$ = $ids$$1$$[$i$$168$$], $found$$3$$ = !1, $j$$25$$ = 0;$j$$25$$ < $matches$$2$$.length;$j$$25$$++) {
            var $match$$16$$ = $matches$$2$$[$j$$25$$];
            if ($id$$18$$ === $opts$$17$$.id($match$$16$$)) {
              $ordered$$.push($match$$16$$);
              $matches$$2$$.splice($j$$25$$, 1);
              $found$$3$$ = !0;
              break;
            }
          }
          $found$$3$$ || $ordered$$.push({value:$id$$18$$, label:$id$$18$$});
        }
        $callback$$87$$($ordered$$);
      } : $$$$12$$.noop});
    });
    return $opts$$17$$;
  }, $_selectChoice$:function($choice$$2$$) {
    var $selected$$6$$ = this.$container$.find("." + this.$_classNm$ + "-search-choice-focus");
    $selected$$6$$.length && $choice$$2$$ && $choice$$2$$[0] == $selected$$6$$[0] || ($selected$$6$$.length && this.$opts$.element.trigger("choice-deselected", $selected$$6$$), $selected$$6$$.removeClass(this.$_classNm$ + "-search-choice-focus"), $choice$$2$$ && $choice$$2$$.length && (this.close(), $choice$$2$$.addClass(this.$_classNm$ + "-search-choice-focus"), this.$container$.find(".oj-combobox-description").html($choice$$2$$.attr("valueText") + ". Press back space to delete.").attr("aria-live", 
    "assertive"), this.$opts$.element.trigger("choice-selected", $choice$$2$$)));
  }, _destroy:function() {
    $$$$12$$("label[for\x3d'" + this.search.attr("id") + "']").attr("for", this.$opts$.element.attr("id"));
    $_OjMultiCombobox$$.$superclass$._destroy.apply(this, arguments);
  }, $_initContainer$:function() {
    var $selector$$15$$ = "." + this.$_classNm$ + "-choices", $selection$$1$$, $idSuffix$$1$$ = $_ComboUtils$$.$nextUid$(), $elementLabel$$1$$;
    this.$searchContainer$ = this.$container$.find("." + this.$_classNm$ + "-search-field");
    this.selection = $selection$$1$$ = this.$container$.find($selector$$15$$);
    var $_this$$ = this;
    this.selection.on("click", "." + this.$_classNm$ + "-search-choice:not(." + this.$_classNm$ + "-locked)", function() {
      $_this$$.search[0].focus();
      $_this$$.$_selectChoice$($$$$12$$(this));
    });
    $elementLabel$$1$$ = $$$$12$$("label[for\x3d'" + this.$opts$.element.attr("id") + "']");
    $elementLabel$$1$$.attr("id") || $elementLabel$$1$$.attr("id", this.$_classNm$ + "-label-" + $idSuffix$$1$$);
    $selection$$1$$.find("." + this.$_classNm$ + "-input").attr("id", this.$_classNm$ + "-input-" + $idSuffix$$1$$);
    this.$results$.attr("id", "oj-listbox-results-" + $idSuffix$$1$$);
    this.search.attr("aria-owns", "oj-listbox-results-" + $idSuffix$$1$$);
    this.search.attr("aria-labelledby", $elementLabel$$1$$.attr("id"));
    this.search.on("input paste", this.$_bind$(function() {
      this.$_isInterfaceEnabled$() && !this.$_opened$() && this.open();
    }));
    this.search.attr("tabindex", this.$elementTabIndex$);
    this.$keydowns$ = 0;
    this.search.on("keydown", this.$_bind$(function($e$$67$$) {
      if (this.$_isInterfaceEnabled$()) {
        ++this.$keydowns$;
        var $selected$$7$$ = $selection$$1$$.find("." + this.$_classNm$ + "-search-choice-focus"), $prev$$ = $selected$$7$$.prev("." + this.$_classNm$ + "-search-choice:not(." + this.$_classNm$ + "-locked)"), $next$$ = $selected$$7$$.next("." + this.$_classNm$ + "-search-choice:not(." + this.$_classNm$ + "-locked)"), $pos$$6_selectedChoice$$ = $_ComboUtils$$.$getCursorInfo$(this.search);
        if (!$selected$$7$$.length || $e$$67$$.which != $_ComboUtils$$.$KEY$.LEFT && $e$$67$$.which != $_ComboUtils$$.$KEY$.RIGHT && $e$$67$$.which != $_ComboUtils$$.$KEY$.$BACKSPACE$ && $e$$67$$.which != $_ComboUtils$$.$KEY$.$DELETE$ && $e$$67$$.which != $_ComboUtils$$.$KEY$.ENTER) {
          if (($e$$67$$.which !== $_ComboUtils$$.$KEY$.$BACKSPACE$ || 1 != this.$keydowns$) && $e$$67$$.which != $_ComboUtils$$.$KEY$.LEFT || 0 != $pos$$6_selectedChoice$$.offset || $pos$$6_selectedChoice$$.length) {
            this.$_selectChoice$(null);
            if (this.$_opened$()) {
              switch($e$$67$$.which) {
                case $_ComboUtils$$.$KEY$.UP:
                ;
                case $_ComboUtils$$.$KEY$.DOWN:
                  this.$_moveHighlight$($e$$67$$.which === $_ComboUtils$$.$KEY$.UP ? -1 : 1);
                  $_ComboUtils$$.$killEvent$($e$$67$$);
                  return;
                case $_ComboUtils$$.$KEY$.ENTER:
                  this.$_selectHighlighted$(null, $e$$67$$);
                  $_ComboUtils$$.$killEvent$($e$$67$$);
                  return;
                case $_ComboUtils$$.$KEY$.TAB:
                  this.$_selectHighlighted$({$noFocus$:!0}, $e$$67$$);
                  this.close($e$$67$$);
                  return;
                case $_ComboUtils$$.$KEY$.$ESC$:
                  this.$_cancel$($e$$67$$);
                  $_ComboUtils$$.$killEvent$($e$$67$$);
                  return;
              }
            }
            $e$$67$$.which === $_ComboUtils$$.$KEY$.TAB || $_ComboUtils$$.$KEY$.$isControl$($e$$67$$) || $_ComboUtils$$.$KEY$.$isFunctionKey$($e$$67$$) || $e$$67$$.which === $_ComboUtils$$.$KEY$.$BACKSPACE$ || $e$$67$$.which === $_ComboUtils$$.$KEY$.$ESC$ || $e$$67$$.which === $_ComboUtils$$.$KEY$.ENTER && (!1 === this.$opts$.$openOnEnter$ || $e$$67$$.altKey || $e$$67$$.ctrlKey || $e$$67$$.shiftKey || $e$$67$$.metaKey) || (this.open(), $e$$67$$.which !== $_ComboUtils$$.$KEY$.PAGE_UP && $e$$67$$.which !== 
            $_ComboUtils$$.$KEY$.PAGE_DOWN || $_ComboUtils$$.$killEvent$($e$$67$$), $e$$67$$.which === $_ComboUtils$$.$KEY$.ENTER && $_ComboUtils$$.$killEvent$($e$$67$$));
          } else {
            this.$_selectChoice$($selection$$1$$.find("." + this.$_classNm$ + "-search-choice:not(." + this.$_classNm$ + "-locked)").last()), $_ComboUtils$$.$killEvent$($e$$67$$);
          }
        } else {
          $pos$$6_selectedChoice$$ = $selected$$7$$, $e$$67$$.which == $_ComboUtils$$.$KEY$.LEFT && $prev$$.length ? $pos$$6_selectedChoice$$ = $prev$$ : $e$$67$$.which == $_ComboUtils$$.$KEY$.RIGHT ? $pos$$6_selectedChoice$$ = $next$$.length ? $next$$ : null : $e$$67$$.which === $_ComboUtils$$.$KEY$.$BACKSPACE$ ? (this.$_unselect$($selected$$7$$.first(), $e$$67$$), this.search.width(10), $pos$$6_selectedChoice$$ = $prev$$.length ? $prev$$ : $next$$) : $e$$67$$.which == $_ComboUtils$$.$KEY$.$DELETE$ ? 
          (this.$_unselect$($selected$$7$$.first(), $e$$67$$), this.search.width(10), $pos$$6_selectedChoice$$ = $next$$.length ? $next$$ : null) : $e$$67$$.which == $_ComboUtils$$.$KEY$.ENTER && ($pos$$6_selectedChoice$$ = null), this.$_selectChoice$($pos$$6_selectedChoice$$), $_ComboUtils$$.$killEvent$($e$$67$$), $pos$$6_selectedChoice$$ && $pos$$6_selectedChoice$$.length || this.open();
        }
      }
    }));
    this.search.on("keyup", this.$_bind$(function() {
      this.$keydowns$ = 0;
      this.$_resizeSearch$();
    }));
    this.search.on("blur", this.$_bind$(function($e$$69$$) {
      this.search.removeClass(this.$_classNm$ + "-focused");
      this.$_selectChoice$(null);
      this.$_opened$() || this.$_clearSearch$();
      $e$$69$$.stopImmediatePropagation();
    }));
    this.$container$.on("click", $selector$$15$$, this.$_bind$(function($e$$70$$) {
      !this.$_isInterfaceEnabled$() || 0 < $$$$12$$($e$$70$$.target).closest("." + this.$_classNm$ + "-search-choice").length || (this.$_selectChoice$(null), this.$_clearPlaceholder$(), this.open(), this.$_focusSearch$(), $e$$70$$.preventDefault());
    }));
    this.$container$.on("focus", $selector$$15$$, this.$_bind$(function() {
      this.$_isInterfaceEnabled$() && this.$_clearPlaceholder$();
    }));
    this.$_initContainerWidth$();
    this.$opts$.element.hide().attr("aria-hidden", !0);
    this.$_clearSearch$();
  }, $_enableInterface$:function() {
    $_OjMultiCombobox$$.$superclass$.$_enableInterface$.apply(this, arguments) && this.search.prop("disabled", !this.$_isInterfaceEnabled$());
  }, $_initSelection$:function() {
    null !== this.$getVal$() && 0 !== this.$getVal$().length || "" !== this.$opts$.element.text() || (this.$_updateSelection$([]), this.close(), this.$_clearSearch$());
    if (this.$datalist$ || null !== this.$getVal$() && this.$getVal$().length) {
      var $self$$57$$ = this;
      this.$opts$.$initSelection$.call(null, this.$datalist$ ? this.$datalist$ : this.$opts$.element, function($data$$91$$) {
        void 0 !== $data$$91$$ && null !== $data$$91$$ && ($self$$57$$.$_updateSelection$($data$$91$$), $self$$57$$.close(), $self$$57$$.$_clearSearch$());
      });
    }
  }, $_clearSearch$:function() {
    var $placeholder$$3$$ = this.$_getPlaceholder$(), $maxWidth$$ = this.$_getMaxSearchWidth$();
    void 0 === $placeholder$$3$$ || this.$getVal$() && 0 !== this.$getVal$().length ? this.search.val("").width(10) : (this.search.val($placeholder$$3$$).addClass(this.$_classNm$ + "-default"), this.search.width(0 < $maxWidth$$ ? $maxWidth$$ : this.$container$.css("width")));
  }, $_clearPlaceholder$:function() {
    this.search.hasClass(this.$_classNm$ + "-default") && this.search.val("").removeClass(this.$_classNm$ + "-default");
  }, $_opening$:function($event$$89$$) {
    this.$ojContext$._trigger("beforeExpand", $event$$89$$) && (this.$_resizeSearch$(), $_OjMultiCombobox$$.$superclass$.$_opening$.apply(this, arguments), this.$_focusSearch$(), this.$_updateResults$(!0), this.search.focus());
  }, close:function($event$$90$$) {
    this.$_opened$() && (this.$_clearSearch$(), $_OjMultiCombobox$$.$superclass$.close.apply(this, arguments));
  }, $_focus$:function() {
    this.close();
    this.search.focus();
  }, $_updateSelection$:function($data$$92$$) {
    var $ids$$2$$ = [], $filtered$$1$$ = [], $self$$58$$ = this;
    $$$$12$$($data$$92$$).each(function() {
      0 > $ids$$2$$.indexOf($self$$58$$.id(this)) && ($ids$$2$$.push($self$$58$$.id(this)), $filtered$$1$$.push(this));
    });
    $data$$92$$ = $filtered$$1$$;
    this.selection.find("." + this.$_classNm$ + "-search-choice").remove();
    $$$$12$$($data$$92$$).each(function() {
      $self$$58$$.$_addSelectedChoice$(this);
    });
    $self$$58$$.$_postprocessResults$();
  }, $_onSelect$:function($data$$93$$, $options$$238$$, $event$$91$$) {
    if (this.$_triggerSelect$($data$$93$$)) {
      this.$_addSelectedChoice$($data$$93$$);
      var $id$$19$$ = this.id($data$$93$$), $val$$31$$ = this.$getVal$() ? this.$getVal$().slice(0) : [];
      $$$$12$$($data$$93$$).each(function() {
        0 > $val$$31$$.indexOf($id$$19$$) && $val$$31$$.push($id$$19$$);
      });
      this.$setVal$($val$$31$$, $event$$91$$);
      !this.select && this.$opts$.$closeOnSelect$ || this.$_postprocessResults$($data$$93$$, !1, !0 === this.$opts$.$closeOnSelect$);
      this.$opts$.$closeOnSelect$ ? (this.close($event$$91$$), this.search.width(10)) : 0 < this.$_findHighlightableChoices$().length ? (this.$_clearSearch$(), this.search.width(10), this.$_resizeSearch$(), this.$_positionDropdown$()) : (this.close($event$$91$$), this.search.width(10));
      $options$$238$$ && $options$$238$$.$noFocus$ || this.$_focusSearch$();
    }
  }, $_cancel$:function($event$$92$$) {
    this.close($event$$92$$);
    this.$_focusSearch$();
  }, $_addSelectedChoice$:function($data$$94$$) {
    var $enableChoice$$ = !$data$$94$$.locked, $choice$$3_enabledItem$$ = $$$$12$$("\x3cli class\x3d'" + this.$_classNm$ + "-search-choice'\x3e    \x3cdiv\x3e\x3c/div\x3e    \x3ca href\x3d'#' onclick\x3d'return false;' class\x3d'" + this.$_classNm$ + "-search-choice-close' tabindex\x3d'-1'\x3e    \x3cspan class\x3d'oj-component-icon oj-clickable-icon oj-combobox-clear-entry-icon' role\x3d'presentation'\x3e\x3c/a\x3e\x3c/li\x3e"), $disabledItem_formatted$$4$$ = $$$$12$$("\x3cli class\x3d'" + this.$_classNm$ + 
    "-search-choice " + this.$_classNm$ + "-locked'\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/li\x3e"), $choice$$3_enabledItem$$ = $enableChoice$$ ? $choice$$3_enabledItem$$ : $disabledItem_formatted$$4$$;
    this.id($data$$94$$);
    this.$getVal$();
    $disabledItem_formatted$$4$$ = this.$opts$.$formatSelection$($data$$94$$, $choice$$3_enabledItem$$.find("div"), this.$opts$.$escapeMarkup$);
    void 0 !== $disabledItem_formatted$$4$$ && ($choice$$3_enabledItem$$.find("div").replaceWith("\x3cdiv\x3e" + $disabledItem_formatted$$4$$ + "\x3c/div\x3e"), $choice$$3_enabledItem$$.attr("valueText", $disabledItem_formatted$$4$$));
    if ($enableChoice$$) {
      $choice$$3_enabledItem$$.find("." + this.$_classNm$ + "-search-choice-close").on("mousedown", $_ComboUtils$$.$killEvent$).on("click dblclick", this.$_bind$(function($e$$71$$) {
        this.$_isInterfaceEnabled$() && ($$$$12$$($e$$71$$.target).closest("." + this.$_classNm$ + "-search-choice").fadeOut("fast", this.$_bind$(function() {
          this.$_unselect$($$$$12$$($e$$71$$.target), $e$$71$$);
          this.selection.find("." + this.$_classNm$ + "-search-choice-focus").removeClass(this.$_classNm$ + "-search-choice-focus");
          this.close($e$$71$$);
          this.$_focusSearch$();
        })).dequeue(), $_ComboUtils$$.$killEvent$($e$$71$$));
      }));
    }
    $choice$$3_enabledItem$$.data(this.$_elemNm$, $data$$94$$);
    $choice$$3_enabledItem$$.insertBefore(this.$searchContainer$);
  }, $_unselect$:function($selected$$8$$, $event$$93$$) {
    var $val$$33$$ = this.$getVal$() ? this.$getVal$().slice(0) : [], $data$$95$$, $index$$150$$;
    $selected$$8$$ = $selected$$8$$.closest("." + this.$_classNm$ + "-search-choice");
    if (0 === $selected$$8$$.length) {
      throw "Invalid argument: " + $selected$$8$$ + ". Must be ." + this.$_classNm$ + "-search-choice";
    }
    if ($data$$95$$ = $selected$$8$$.data(this.$_elemNm$)) {
      for (;0 <= ($index$$150$$ = $val$$33$$.indexOf(this.id($data$$95$$)));) {
        $val$$33$$.splice($index$$150$$, 1), this.$setVal$($val$$33$$, $event$$93$$), this.select && this.$_postprocessResults$();
      }
      $selected$$8$$.remove();
    }
  }, $_postprocessResults$:function($data$$96$$, $choices$$3_initial$$2$$, $noHighlightUpdate$$1$$) {
    var $val$$34$$ = this.$getVal$();
    $choices$$3_initial$$2$$ = this.$results$.find(".oj-listbox-result");
    var $compound$$ = this.$results$.find(".oj-listbox-result-with-children"), $self$$59$$ = this;
    $_ComboUtils$$.$each2$($choices$$3_initial$$2$$, function($i$$169$$, $choice$$4$$) {
      var $id$$21$$ = $self$$59$$.id($choice$$4$$.data($self$$59$$.$_elemNm$));
      $val$$34$$ && 0 <= $val$$34$$.indexOf($id$$21$$) && ($choice$$4$$.addClass("oj-selected"), $choice$$4$$.find(".oj-listbox-result-selectable").addClass("oj-selected"));
    });
    $_ComboUtils$$.$each2$($compound$$, function($i$$170$$, $choice$$5$$) {
      $choice$$5$$.is(".oj-listbox-result-selectable") || 0 !== $choice$$5$$.find(".oj-listbox-result-selectable:not(.oj-selected)").length || $choice$$5$$.addClass("oj-selected");
    });
    -1 == this.$_highlight$() && !1 !== $noHighlightUpdate$$1$$ && $self$$59$$.$_highlight$(0);
    !this.$opts$.$manageNewEntry$ && 0 < !$choices$$3_initial$$2$$.filter(".oj-listbox-result:not(.oj-selected)").length && (!$data$$96$$ || $data$$96$$ && !$data$$96$$.$more$ && 0 === this.$results$.find(".oj-listbox-no-results").length) && $_ComboUtils$$.$checkFormatter$($self$$59$$.$ojContext$, $self$$59$$.$opts$.$formatNoMatches$, "formatNoMatches") && this.$results$.append("\x3cli class\x3d'oj-listbox-no-results'\x3e" + $self$$59$$.$opts$.$formatNoMatches$($self$$59$$.$ojContext$, $self$$59$$.search.val()) + 
    "\x3c/li\x3e");
  }, $_getMaxSearchWidth$:function() {
    return this.selection.width() - $_ComboUtils$$.$getSideBorderPadding$(this.search);
  }, $_resizeSearch$:function() {
    var $minimumWidth$$, $left$$5_searchWidth$$, $maxWidth$$1$$, $containerLeft$$, $sideBorderPadding$$ = $_ComboUtils$$.$getSideBorderPadding$(this.search);
    $minimumWidth$$ = this.search.width() + 10;
    $left$$5_searchWidth$$ = this.search.offset().left;
    $maxWidth$$1$$ = this.selection.width();
    $containerLeft$$ = this.selection.offset().left;
    $left$$5_searchWidth$$ = $maxWidth$$1$$ - ($left$$5_searchWidth$$ - $containerLeft$$) - $sideBorderPadding$$;
    $left$$5_searchWidth$$ < $minimumWidth$$ && ($left$$5_searchWidth$$ = $maxWidth$$1$$ - $sideBorderPadding$$);
    40 > $left$$5_searchWidth$$ && ($left$$5_searchWidth$$ = $maxWidth$$1$$ - $sideBorderPadding$$);
    0 >= $left$$5_searchWidth$$ && ($left$$5_searchWidth$$ = $minimumWidth$$);
    this.search.width(Math.floor($left$$5_searchWidth$$));
  }, $setVal$:function($val$$35$$, $event$$94$$) {
    var $unique$$;
    $unique$$ = [];
    "string" === typeof $val$$35$$ && ($val$$35$$ = $_ComboUtils$$.$splitVal$($val$$35$$, this.$opts$.separator));
    for (var $i$$171$$ = 0;$i$$171$$ < $val$$35$$.length;$i$$171$$++) {
      0 > $unique$$.indexOf($val$$35$$[$i$$171$$]) && $unique$$.push($val$$35$$[$i$$171$$]);
    }
    this.$ojContext$.$_SetValue$($unique$$, $event$$94$$);
    this.$opts$.element.val(0 === $unique$$.length ? "" : $unique$$.join(this.$opts$.separator));
    this.search.attr("aria-activedescendant", this.$opts$.element.attr("id"));
  }});
});
