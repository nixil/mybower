/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$25$$, $$$$25$$) {
  (function() {
    function $_addSheet$$($opts$$22$$) {
      var $tmp$$2$$ = !1, $isNew$$ = !0;
      $opts$$22$$.$str$ && ($opts$$22$$.title && ($tmp$$2$$ = $$$$25$$("style[id\x3d'" + $opts$$22$$.title + "-stylesheet']")[0]), $tmp$$2$$ ? $isNew$$ = !1 : ($tmp$$2$$ = document.createElement("style"), $tmp$$2$$.setAttribute("type", "text/css"), $opts$$22$$.title && $tmp$$2$$.setAttribute("id", $opts$$22$$.title + "-stylesheet")), $tmp$$2$$.styleSheet ? $isNew$$ ? (document.getElementsByTagName("head")[0].appendChild($tmp$$2$$), $tmp$$2$$.styleSheet.cssText = $opts$$22$$.$str$) : $tmp$$2$$.styleSheet.cssText = 
      $tmp$$2$$.styleSheet.cssText + " " + $opts$$22$$.$str$ : ($tmp$$2$$.appendChild(document.createTextNode($opts$$22$$.$str$)), document.getElementsByTagName("head")[0].appendChild($tmp$$2$$)));
    }
    function $_addKeyFilter$$($obj$$53$$) {
      $_aKeyHandlerStack$$.push($obj$$53$$);
      $$$$25$$($obj$$53$$.$_selector$).keydown($_KeyFilterHandler$$);
    }
    function $_KeyFilterHandler$$($e$$79$$) {
      var $s$$11$$ = "";
      $e$$79$$.ctrlKey ? $s$$11$$ += "ctrl+" : $e$$79$$.shiftKey && ($s$$11$$ += "shift+");
      var $key$$85$$ = $e$$79$$.which;
      switch($key$$85$$) {
        case 32:
          $s$$11$$ += "space";
          break;
        case 37:
          $s$$11$$ += "left";
          break;
        case 38:
          $s$$11$$ += "up";
          break;
        case 39:
          $s$$11$$ += "right";
          break;
        case 40:
          $s$$11$$ += "down";
          break;
        case 46:
          $s$$11$$ += "del";
          break;
        case 33:
          $s$$11$$ += "pgup";
          break;
        case 34:
          $s$$11$$ += "pgdn";
          break;
        case 35:
          $s$$11$$ += "end";
          break;
        case 36:
          $s$$11$$ += "home";
          break;
        case 56:
          $s$$11$$ = "*";
          break;
        case 113:
          $s$$11$$ += "f" + (1 - (112 - $key$$85$$));
      }
      if (0 !== $s$$11$$.length) {
        var $retHandler$$ = void 0;
        $$$$25$$.each($_aKeyHandlerStack$$, function($i$$245$$, $obj$$54$$) {
          if ($obj$$54$$.$_this$.$_data$.ui.$focused$ && $obj$$54$$.$_handler$[$s$$11$$]) {
            return $e$$79$$.preventDefault(), $retHandler$$ = $obj$$54$$.$_handler$[$s$$11$$].call($obj$$54$$.$_this$, $e$$79$$), !1;
          }
        });
        return $retHandler$$;
      }
    }
    function $_removeKeyFilter$$($selector$$18$$) {
      $$$$25$$.each($_aKeyHandlerStack$$, function($i$$246$$) {
        if ($_aKeyHandlerStack$$[$i$$246$$].$_selector$ === $selector$$18$$) {
          return $$$$25$$($selector$$18$$).off("keydown"), $_aKeyHandlerStack$$[$i$$246$$] = null, $_aKeyHandlerStack$$.splice($i$$246$$, 1), !1;
        }
      });
    }
    var $_arMenuCmdMap$$ = {cut:"ojtreecut", copy:"ojtreecopy", paste:"ojtreepaste", remove:"ojtreeremove", rename:"ojtreerename"}, $_aEvNames$$ = "select deselect hover dehover expand collapse loaded move remove deselectAll rename refresh expandAll collapseAll destroy create before remove cut copy paste".split(" "), $scrollbar_width$$, $e1$$, $e2$$;
    $$$$25$$(function() {
      /msie/.test(navigator.userAgent.toLowerCase()) ? ($e1$$ = $$$$25$$('\x3ctextarea cols\x3d"10" rows\x3d"2"\x3e\x3c/textarea\x3e').css({position:"absolute", top:-1E3, left:0}).appendTo("body"), $e2$$ = $$$$25$$('\x3ctextarea cols\x3d"10" rows\x3d"2" style\x3d"overflow: hidden;"\x3e\x3c/textarea\x3e').css({position:"absolute", top:-1E3, left:0}).appendTo("body"), $scrollbar_width$$ = $e1$$.width() - $e2$$.width(), $e1$$.add($e2$$).remove()) : ($e1$$ = $$$$25$$("\x3cdiv /\x3e").css({width:100, 
      height:100, overflow:"auto", position:"absolute", top:-1E3, left:0}).prependTo("body").append("\x3cdiv /\x3e").find("div").css({width:"100%", height:200}), $scrollbar_width$$ = 100 - $e1$$.width(), $e1$$.parent().remove());
    });
    var $_aKeyHandlerStack$$ = [], $_instance$$ = -1, $_aInstances$$ = [];
    $oj$$25$$.$__registerWidget$("oj.ojTree", $$$$25$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", defaultElement:"\x3cdiv\x3e", options:{animDuration:500, dnd:{$reorder$:"disable"}, expandParents:!1, initExpanded:null, $initLoaded$:[], selectionMode:"single", selectedParentCollapse:!1, selectedParentExpand:!0, selectPrevOnDelete:!1, data:null, emptyText:null, icons:!0, types:null, before:null, collapse:null, create:null, collapseAll:null, cut:null, dehover:null, remove:null, deselect:null, 
    deselectAll:null, destroy:null, expand:null, expandAll:null, hover:null, loaded:null, move:null, paste:null, refresh:null, rename:null, select:null}, collapse:function($node$$33$$, $skipAnim$$) {
      $node$$33$$ = this.$_getNode$($node$$33$$);
      var $s$$12$$ = $skipAnim$$ || this.options.animDuration, $t$$1$$ = this;
      if (!$node$$33$$.length || -1 === $node$$33$$ || !$node$$33$$.hasClass("oj-tree-open") || this.$_data$.$core$.locked || $node$$33$$.hasClass("oj-disabled")) {
        return!1;
      }
      var $rslt$$ = this.$_emitEvent$({obj:$node$$33$$, func:"collapse"}, "before");
      if ("boolean" != typeof $rslt$$ || $rslt$$) {
        $s$$12$$ && $node$$33$$.children("ul").attr("style", "display:block !important"), $node$$33$$.removeClass("oj-tree-open").addClass("oj-tree-closed").attr("aria-expanded", "false"), $s$$12$$ ? $node$$33$$.children("ul").stop(!0, !0).slideUp($s$$12$$, function() {
          this.style.display = "";
          $t$$1$$.after_close($node$$33$$);
        }) : $t$$1$$.after_close($node$$33$$), this.$_emitEvent$({obj:$node$$33$$}, "collapse");
      }
    }, collapseAll:function($node$$34$$, $anim$$) {
      var $origTarg$$ = $node$$34$$ ? $node$$34$$ : -1, $_this$$1$$ = this;
      if (!this.$_data$.$core$.locked && (($node$$34$$ = $node$$34$$ ? this.$_getNode$($node$$34$$) : this.$_$container$) && -1 !== $origTarg$$ && ($origTarg$$ = $node$$34$$), $node$$34$$ && -1 !== $origTarg$$ || ($node$$34$$ = this.$_$container_ul$), !$node$$34$$.hasClass("oj-disabled"))) {
        var $subject$$;
        -1 !== $origTarg$$ && this.isExpanded($node$$34$$) && ($subject$$ = $node$$34$$[0]);
        var $objs$$ = $node$$34$$.find("li.oj-tree-open");
        $objs$$.length && $objs$$.each(function() {
          $_this$$1$$.collapse(this, !$anim$$);
        });
        $subject$$ && (this.collapse($subject$$, !$anim$$), $objs$$.splice(0, 0, $subject$$));
        $objs$$.length && this.$_emitEvent$({obj:$objs$$, targ:$origTarg$$}, "collapseAll");
      }
    }, expand:function($node$$35$$, $skipAnim$$1$$) {
      this.$_expand$($node$$35$$, !1, $skipAnim$$1$$);
    }, expanded:function($nodes$$, $skipAnim$$2$$) {
      var $exlr$$, $exlen$$, $_this$$2$$ = this;
      if ($nodes$$ && "array" === $$$$25$$.type($nodes$$)) {
        if (this.$_data$.$core$.locked) {
          return null;
        }
        $exlen$$ = $nodes$$.length;
        $$$$25$$.each($nodes$$, function($i$$247$$, $val$$40$$) {
          $_this$$2$$.$_expand$($val$$40$$, !1, $skipAnim$$2$$);
        });
        return null;
      }
      $nodes$$ = this.$_$container_ul$.find("li.oj-tree-open");
      $exlen$$ = $nodes$$.length;
      $exlr$$ = [];
      for (var $n$$26$$ = 0;$n$$26$$ < $exlen$$;$n$$26$$++) {
        $exlr$$.push($nodes$$[$n$$26$$]);
      }
      return $$$$25$$($exlr$$);
    }, expandAll:function($node$$36$$, $anim$$1$$) {
      this.$_expandAll$($node$$36$$, $anim$$1$$);
    }, toggleExpand:function($node$$37$$, $skipAnim$$3$$) {
      $node$$37$$ = this.$_getNode$($node$$37$$);
      if (-1 !== $node$$37$$ && !$node$$37$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        if ($node$$37$$.hasClass("oj-tree-closed")) {
          return this.expand($node$$37$$, $skipAnim$$3$$);
        }
        if ($node$$37$$.hasClass("oj-tree-open")) {
          return this.collapse($node$$37$$, $skipAnim$$3$$);
        }
      }
    }, deselect:function($node$$38$$) {
      $node$$38$$ = this.$_getNode$($node$$38$$);
      if (!$node$$38$$.length) {
        return!1;
      }
      $node$$38$$.hasClass("oj-disabled") || this.$_data$.$core$.locked || !this.isSelected($node$$38$$) || ($node$$38$$.children("a").removeClass("oj-tree-clicked"), $node$$38$$.removeAttr("aria-selected"), this.$_data$.ui.selected = this.$_data$.ui.selected.not($node$$38$$), this.$_data$.ui.$last_selected$.get(0) === $node$$38$$.get(0) && (this.$_data$.ui.$last_selected$ = this.$_data$.ui.selected.eq(0)), this.$_emitEvent$({obj:$node$$38$$}, "deselect"));
    }, deselectAll:function($context$$48$$) {
      this.$_data$.$core$.locked || this.$_deselectAll$($context$$48$$, !1);
    }, select:function($node$$39$$) {
      this.$_select$($node$$39$$);
    }, selected:function($nodes$$1$$) {
      if (this.$_data$.$core$.locked) {
        return null;
      }
      if (void 0 === $nodes$$1$$) {
        return this.$_getSelected$();
      }
      if (void 0 !== $nodes$$1$$.length) {
        var $_this$$3$$ = this;
        $$$$25$$.each($nodes$$1$$, function($i$$248$$, $val$$41$$) {
          $val$$41$$ && $_this$$3$$.$_select$($val$$41$$, !0);
        });
      }
      return null;
    }, toggleSelect:function($node$$40$$) {
      $node$$40$$ = this.$_getNode$($node$$40$$);
      if (!$node$$40$$.length) {
        return!1;
      }
      $node$$40$$.hasClass("oj-disabled") || this.$_data$.$core$.locked || (this.isSelected($node$$40$$) ? this.deselect($node$$40$$) : this.$_select$($node$$40$$, !0));
    }, isCollapsed:function($node$$41$$) {
      return($node$$41$$ = this.$_getNode$($node$$41$$)) && -1 !== $node$$41$$ && $node$$41$$.hasClass("oj-tree-closed");
    }, isExpanded:function($node$$42$$) {
      return($node$$42$$ = this.$_getNode$($node$$42$$)) && -1 !== $node$$42$$ && $node$$42$$.hasClass("oj-tree-open");
    }, isLeaf:function($node$$43$$) {
      return this.$_isLeaf$($node$$43$$);
    }, isSelected:function($node$$44$$) {
      return 0 <= this.$_data$.ui.selected.index(this.$_getNode$($node$$44$$));
    }, create:function($refnode$$, $position$$10$$, $data$$134$$) {
      return this.$_create_node$($refnode$$, $position$$10$$, $data$$134$$);
    }, remove:function($node$$45$$) {
      $node$$45$$ = this.$_getNode$($node$$45$$);
      if (!$node$$45$$.length || $node$$45$$.hasClass("oj-disabled") || this.$_data$.$core$.locked) {
        return!1;
      }
      var $p$$7_rslt$$1$$ = this.$_emitEvent$({obj:$node$$45$$, func:"remove"}, "before");
      if ("boolean" == typeof $p$$7_rslt$$1$$ && !$p$$7_rslt$$1$$) {
        return!1;
      }
      this.$__rollback$();
      var $p$$7_rslt$$1$$ = this.$_getParent$($node$$45$$), $prev$$3$$ = $$$$25$$([]), $t$$2$$ = this, $sib$$ = this.$_getPrev$($node$$45$$);
      $node$$45$$.each(function() {
        $prev$$3$$ = $prev$$3$$.add($t$$2$$.$_getPrev$(this));
      });
      $node$$45$$ = $node$$45$$.detach();
      -1 !== $p$$7_rslt$$1$$ && 0 === $p$$7_rslt$$1$$.find("\x3e ul \x3e li").length && $p$$7_rslt$$1$$.removeClass("oj-tree-open oj-tree-closed").addClass("oj-tree-leaf").removeAttr("aria-expanded");
      this.$_clean_node$($p$$7_rslt$$1$$);
      this.$_emitEvent$({obj:$node$$45$$, prev:$sib$$, parent:$p$$7_rslt$$1$$}, "remove");
      return $node$$45$$;
    }, getText:function($node$$46$$) {
      $node$$46$$ = this.$_getNode$($node$$46$$);
      if (!$node$$46$$.length) {
        return!1;
      }
      var $ht$$ = this.$_data$.$core$.$htmlTitles$;
      $node$$46$$ = $node$$46$$.children("a:eq(0)");
      if ($ht$$) {
        return $node$$46$$ = $node$$46$$.clone(), $node$$46$$.children("INS").remove(), $node$$46$$.html();
      }
      $node$$46$$ = $node$$46$$.find("span:eq(0)");
      return $node$$46$$[0].textContent;
    }, rename:function($node$$47$$, $text$$14$$) {
      this.$_rename_node$($node$$47$$, $text$$14$$);
    }, hover:function($node$$48$$) {
      $node$$48$$ = this.$_getNode$($node$$48$$);
      if (!$node$$48$$.length) {
        return!1;
      }
      if (!$node$$48$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        var $rslt$$2$$ = this.$_emitEvent$({obj:$node$$48$$, func:"hover"}, "before");
        if ("boolean" != typeof $rslt$$2$$ || $rslt$$2$$) {
          $node$$48$$.hasClass("oj-tree-hovered") || this.dehover(), this.$_data$.ui.$hovered$ = $node$$48$$.children("a").addClass("oj-tree-hovered").parent(), this.$_$container_ul$.attr("aria-activedescendant", this.$_data$.ui.$hovered$.attr("id")), this.$_fix_scroll$($node$$48$$), this.$_emitEvent$({obj:$node$$48$$}, "hover");
        }
      }
    }, dehover:function() {
      var $obj$$55$$ = this.$_data$.ui.$hovered$, $p$$8$$;
      if (!$obj$$55$$ || !$obj$$55$$.length) {
        return!1;
      }
      $obj$$55$$.hasClass("oj-disabled") || this.$_data$.$core$.locked || ($p$$8$$ = $obj$$55$$.children("a").removeClass("oj-tree-hovered").parent(), this.$_$container_ul$.removeAttr("aria-activedescendant"), this.$_data$.ui.$hovered$[0] === $p$$8$$[0] && (this.$_data$.ui.$hovered$ = null), this.$_emitEvent$({obj:$obj$$55$$}, "dehover"));
    }, getPath:function($node$$49$$, $idMode$$) {
      var $p$$9$$ = [], $_this$$4$$ = this;
      $node$$49$$ = this.$_getNode$($node$$49$$);
      if (-1 === $node$$49$$ || !$node$$49$$ || !$node$$49$$.length) {
        return!1;
      }
      $node$$49$$.parentsUntil(".oj-tree", "li").each(function() {
        $p$$9$$.push($idMode$$ ? this.id : $_this$$4$$.getText(this));
      });
      $p$$9$$.reverse();
      $p$$9$$.push($idMode$$ ? $node$$49$$.attr("id") : this.getText($node$$49$$));
      return $p$$9$$;
    }, getRoot:function() {
      return this.$_$container$.children("ul:eq(0)");
    }, refresh:function($node$$50$$) {
      this._super();
      this.$_data$.$core$.locked || this.$_refresh$($node$$50$$);
    }, move:function($node$$51$$, $refnode$$1$$, $position$$11$$, $iscopy$$) {
      this.$_move_node$($node$$51$$, $refnode$$1$$, $position$$11$$, $iscopy$$);
    }, getType:function($node$$52$$) {
      return this.$_getType$($node$$52$$);
    }, setType:function($node$$53$$, $str$$17$$) {
      return this.$_setType$($node$$53$$, $str$$17$$);
    }, getNodeBySubId:function($locator$$18$$) {
      return $locator$$18$$ ? this.$_processSubId$($locator$$18$$) : this.element ? this.element[0] : null;
    }, getParent:function($l$$8_node$$54$$) {
      return($l$$8_node$$54$$ = this.$_getParent$($l$$8_node$$54$$)) && 0 < $l$$8_node$$54$$.length ? $l$$8_node$$54$$ : null;
    }, getPrevSibling:function($l$$9_node$$55$$) {
      return($l$$9_node$$55$$ = this.$_getPrev$($l$$9_node$$55$$, !0)) && 0 < $l$$9_node$$55$$.length ? $l$$9_node$$55$$ : null;
    }, getNextSibling:function($l$$10_node$$56$$) {
      return($l$$10_node$$56$$ = this.$_getNext$($l$$10_node$$56$$, !0)) && 0 < $l$$10_node$$56$$.length ? $l$$10_node$$56$$ : null;
    }, getChildren:function($l$$11_node$$57$$) {
      return($l$$11_node$$57$$ = this.$_getChildren$($l$$11_node$$57$$ ? $l$$11_node$$57$$ : -1)) && 0 < $l$$11_node$$57$$.length ? $l$$11_node$$57$$ : null;
    }, destroy:function() {
      this.$_emitEvent$({obj:-1}, "destroy");
      this._super();
    }, _ComponentCreate:function() {
      this._super();
      this.$_elemId$ = "#" + this.element.attr("id");
      var $JSCompiler_inline_result$$6_hash$$inline_757$$;
      $JSCompiler_inline_result$$6_hash$$inline_757$$ = ($JSCompiler_inline_result$$6_hash$$inline_757$$ = this.$_elemId$) ? $JSCompiler_inline_result$$6_hash$$inline_757$$.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$\x26") : "";
      this.$_$container$ = $$$$25$$($JSCompiler_inline_result$$6_hash$$inline_757$$);
      this.$_$container_ul$ = null;
      this.$_data$ = {};
      this.$_tds$ = null;
      this.$_index$ = this.$_newIndex$();
      $_aInstances$$.push(this);
      this.$_isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$_initTree$();
    }, _destroy:function() {
      this.$_clearTree$();
      this.$_data$.html.$markup_ul$ && (this.$_$container$.append(this.$_data$.html.$markup_ul$), this.$_data$.html.$markup_div$.remove(), this.$_data$.html.$markup_div$ = !1, this.$_data$.html.$useExistingMarkup$ = !1);
      this.$_data$.$ds$.type = 0;
      this._super();
    }, _setOption:function($key$$86$$, $newval$$, $flags$$31$$) {
      var $val$$42$$;
      if ("selectionMode" === $key$$86$$) {
        "none" === $newval$$ ? $val$$42$$ = 0 : "single" === $newval$$ ? $val$$42$$ = 1 : "multiple" === $newval$$ ? $val$$42$$ = -1 : ($val$$42$$ = 0, $newval$$ = "none"), $val$$42$$ != this.$_data$.$core$.$selectMode$ && (this.$_data$.$core$.$selectMode$ = $val$$42$$);
      } else {
        if ("icons" === $key$$86$$) {
          "boolean" == $$$$25$$.type($newval$$) && $newval$$ != this.$_data$.$themes$.icons && ((this.$_data$.$themes$.icons = $newval$$) ? this.$_showIcons$() : this.$_hideIcons$());
        } else {
          if ("contextMenu" === $key$$86$$) {
            this.$_clearMenu$(), $newval$$ && this.$_initMenu$($newval$$);
          } else {
            if ("disabled" === $key$$86$$) {
              this.$_handleDisabledChanged$($newval$$);
            } else {
              if ("data" === $key$$86$$) {
                this._super($key$$86$$, $newval$$, $flags$$31$$);
                this.$_initDSOpts$();
                this.$_initDataSource$();
                this.$_loadNodes$();
                return;
              }
              if ("dnd" === $key$$86$$) {
                this._super($key$$86$$, $newval$$, $flags$$31$$);
                this.$_initDnDOpts$();
                return;
              }
            }
          }
        }
      }
      this._super($key$$86$$, $newval$$, $flags$$31$$);
    }, $_clearTree$:function() {
      var $n$$27$$ = this.$_index$;
      this.$_$container$.unbind(".oj-tree").undelegate(".oj-tree").removeData("oj-tree-instance-id").find("[class^\x3d'oj-tree']").addBack().attr("class", function() {
        return this.className.replace(/oj-tree[^ ]*|$/ig, "");
      });
      var $cl$$ = this.$_$container$.attr("class"), $cl$$ = $cl$$.trim();
      0 === $cl$$.length && this.$_$container$.removeAttr("class");
      $_removeKeyFilter$$(this.$_$container_ul$);
      $$$$25$$(document).unbind(".oj-tree-" + $n$$27$$).undelegate(".oj-tree-" + $n$$27$$);
      this.$_$container_ul$.remove();
      this.$_$container_ul$ = null;
    }, $_getNodeCore$:function($obj$$56$$) {
      var $$obj$$ = $$$$25$$($obj$$56$$, this.$_$container$);
      if ($$obj$$.is(".oj-tree") || -1 == $obj$$56$$) {
        return-1;
      }
      $$obj$$ = $$obj$$.closest("li", this.$_$container$);
      return $$obj$$.length ? $$obj$$ : !1;
    }, $_getNode$:function($obj$$57$$, $allow_multiple$$) {
      if ("undefined" === typeof $obj$$57$$ || null === $obj$$57$$) {
        return $allow_multiple$$ ? this.$_data$.ui.selected : this.$_data$.ui.$last_selected$;
      }
      var $$obj$$1$$ = $$$$25$$($obj$$57$$, this.$_$container$);
      if ($$obj$$1$$.is(".oj-tree") || -1 === $obj$$57$$) {
        return-1;
      }
      $$obj$$1$$ = $$obj$$1$$.closest("li", this.$_$container$);
      return $$obj$$1$$.length ? $$obj$$1$$ : !1;
    }, $_getPrev$:function($obj$$58$$, $strict$$) {
      $obj$$58$$ = this.$_getNode$($obj$$58$$);
      if (-1 === $obj$$58$$) {
        return this.$_$container$.find("\x3e ul \x3e li:last-child");
      }
      if (!$obj$$58$$.length) {
        return!1;
      }
      if ($strict$$) {
        return 0 < $obj$$58$$.prevAll("li").length ? $obj$$58$$.prevAll("li:eq(0)") : !1;
      }
      if ($obj$$58$$.prev("li").length) {
        for ($obj$$58$$ = $obj$$58$$.prev("li").eq(0);$obj$$58$$.hasClass("oj-tree-open");) {
          $obj$$58$$ = $obj$$58$$.children("ul:eq(0)").children("li:last");
        }
        return $obj$$58$$;
      }
      var $o$$11$$ = $obj$$58$$.parentsUntil(".oj-tree", "li:eq(0)");
      return $o$$11$$.length ? $o$$11$$ : !1;
    }, $_getNext$:function($obj$$59$$, $strict$$1$$) {
      $obj$$59$$ = this.$_getNode$($obj$$59$$);
      return-1 === $obj$$59$$ ? this.$_$container$.find("\x3e ul \x3e li:first-child") : $obj$$59$$.length ? $strict$$1$$ ? 0 < $obj$$59$$.nextAll("li").size() ? $obj$$59$$.nextAll("li:eq(0)") : !1 : $obj$$59$$.hasClass("oj-tree-open") ? $obj$$59$$.find("li:eq(0)") : 0 < $obj$$59$$.nextAll("li").size() ? $obj$$59$$.nextAll("li:eq(0)") : $obj$$59$$.parentsUntil(".oj-tree", "li").next("li").eq(0) : !1;
    }, $_getParent$:function($o$$12_obj$$60$$) {
      $o$$12_obj$$60$$ = this.$_getNode$($o$$12_obj$$60$$);
      if (-1 == $o$$12_obj$$60$$ || !$o$$12_obj$$60$$.length) {
        return!1;
      }
      $o$$12_obj$$60$$ = $o$$12_obj$$60$$.parentsUntil(".oj-tree", "li:eq(0)");
      return $o$$12_obj$$60$$.length ? $o$$12_obj$$60$$ : -1;
    }, $_getChildren$:function($obj$$61$$) {
      $obj$$61$$ = this.$_getNode$($obj$$61$$);
      return-1 === $obj$$61$$ ? this.$_$container$.children("ul:eq(0)").children("li") : $obj$$61$$.length ? $obj$$61$$.children("ul:eq(0)").children("li") : !1;
    }, $_isLeaf$:function($node$$58$$) {
      return($node$$58$$ = this.$_getNode$($node$$58$$)) && -1 !== $node$$58$$ && $node$$58$$.hasClass("oj-tree-leaf");
    }, $_reference$:function($node$$59$$) {
      $node$$59$$.parents("div").eq(0);
      return this;
    }, $_applyDefaults$:function($to$$1$$, $from$$1$$) {
      void 0 != $to$$1$$ && void 0 != $from$$1$$ && $$$$25$$.each($from$$1$$, function($prop$$74$$, $val$$43$$) {
        void 0 == $to$$1$$[$prop$$74$$] && ($to$$1$$[$prop$$74$$] = $val$$43$$);
      });
    }, $_handleDisabledChanged$:function($newval$$1$$) {
      var $curState$$ = this.$_$container_ul$.hasClass("oj-disabled");
      $curState$$ || ($curState$$ = !1);
      "undefined" !== typeof $newval$$1$$ && $curState$$ != $newval$$1$$ && ($newval$$1$$ ? (this.$_$container_ul$.addClass("oj-disabled"), this.$_$container_ul$.prop("disabled", "disabled")) : (this.$_$container_ul$.removeClass("oj-disabled"), this.$_$container_ul$.removeAttr("disabled")), this.$_lock$($newval$$1$$));
    }, $_lock$:function($lstate$$) {
      $lstate$$ ? (this.$_data$.$core$.locked = !0, this.$_data$.ui.opacity = this.$_$container$.children("ul").css("opacity"), this.$_$container_ul$.addClass("oj-tree-locked").css("opacity", "0.9")) : (this.$_data$.$core$.locked = !1, this.$_$container_ul$.removeClass("oj-tree-locked").css("opacity", this.$_data$.ui.opacity));
    }, $_prepare_move$:function($o$$13$$, $r$$1$$, $pos$$9$$, $cb$$1$$, $is_cb$$) {
      var $p$$10$$ = {$ot$:this};
      $p$$10$$.$o$ = $p$$10$$.$ot$.$_getNode$($o$$13$$);
      $p$$10$$.$r$ = -1 === $r$$1$$ ? -1 : this.$_getNode$($r$$1$$);
      $p$$10$$.$p$ = "undefined" === typeof $pos$$9$$ || !1 === $pos$$9$$ ? "last" : $pos$$9$$;
      if (!$is_cb$$ && this.$_data$.$core$.$prepared_move$.$o$ && this.$_data$.$core$.$prepared_move$.$o$[0] === $p$$10$$.$o$[0] && this.$_data$.$core$.$prepared_move$.$r$[0] === $p$$10$$.$r$[0] && this.$_data$.$core$.$prepared_move$.$p$ === $p$$10$$.$p$) {
        this.$_emitEvent$(this.$_data$.$core$.$prepared_move$), $cb$$1$$ && $cb$$1$$.call(this, this.$_data$.$core$.$prepared_move$);
      } else {
        $p$$10$$.$ot$ = this;
        $p$$10$$.$rt$ = this;
        if (-1 !== $p$$10$$.$r$ && $p$$10$$.$r$) {
          if (!/^(before|after)$/.test($p$$10$$.$p$) && !this.$_is_loaded$($p$$10$$.$r$)) {
            return this.$_load_node$($p$$10$$.$r$, function() {
              this.$_prepare_move$($o$$13$$, $r$$1$$, $pos$$9$$, $cb$$1$$, !0);
            });
          }
          switch($p$$10$$.$p$) {
            case "before":
              $p$$10$$.$cp$ = $p$$10$$.$r$.index();
              $p$$10$$.$cr$ = $p$$10$$.$rt$.$_getParent$($p$$10$$.$r$);
              break;
            case "after":
              $p$$10$$.$cp$ = $p$$10$$.$r$.index() + 1;
              $p$$10$$.$cr$ = $p$$10$$.$rt$.$_getParent$($p$$10$$.$r$);
              break;
            case "inside":
            ;
            case "first":
              $p$$10$$.$cp$ = 0;
              $p$$10$$.$cr$ = $p$$10$$.$r$;
              break;
            case "last":
              $p$$10$$.$cp$ = $p$$10$$.$r$.find(" \x3e ul \x3e li").length;
              $p$$10$$.$cr$ = $p$$10$$.$r$;
              break;
            default:
              $p$$10$$.$cp$ = $p$$10$$.$p$, $p$$10$$.$cr$ = $p$$10$$.$r$;
          }
        } else {
          switch($p$$10$$.$cr$ = -1, $p$$10$$.$p$) {
            case "first":
            ;
            case "before":
            ;
            case "inside":
              $p$$10$$.$cp$ = 0;
              break;
            case "after":
            ;
            case "last":
              $p$$10$$.$cp$ = $p$$10$$.$rt$.$_$container$.find(" \x3e ul \x3e li").length;
              break;
            default:
              $p$$10$$.$cp$ = $p$$10$$.$p$;
          }
        }
        $p$$10$$.$np$ = -1 == $p$$10$$.$cr$ ? $p$$10$$.$rt$.$_$container$ : $p$$10$$.$cr$;
        $p$$10$$.$op$ = $p$$10$$.$ot$.$_getParent$($p$$10$$.$o$);
        $p$$10$$.$cop$ = $p$$10$$.$o$.index();
        -1 === $p$$10$$.$op$ && ($p$$10$$.$op$ = $p$$10$$.$ot$ ? $p$$10$$.$ot$.$_$container$ : this.$_$container$);
        !/^(before|after)$/.test($p$$10$$.$p$) && $p$$10$$.$op$ && $p$$10$$.$np$ && $p$$10$$.$op$[0] === $p$$10$$.$np$[0] && $p$$10$$.$o$.index() < $p$$10$$.$cp$ && $p$$10$$.$cp$++;
        $p$$10$$.$or$ = $p$$10$$.$np$.find(" \x3e ul \x3e li:nth-child(" + ($p$$10$$.$cp$ + 1) + ")");
        this.$_data$.$core$.$prepared_move$ = $p$$10$$;
        this.$_emitEvent$(this.$_data$.$core$.$prepared_move$, "prepare_move");
        $cb$$1$$ && $cb$$1$$.call(this, this.$_data$.$core$.$prepared_move$, "prepare_move");
      }
    }, check_move:function() {
      var $obj$$62$$ = this.$_data$.$core$.$prepared_move$, $ret$$30$$ = !0, $r$$2$$;
      $r$$2$$ = -1 === $obj$$62$$.$r$ ? this.$_$container$ : $obj$$62$$.$r$;
      if (!$obj$$62$$ || !$obj$$62$$.$o$ || $obj$$62$$.$or$[0] === $obj$$62$$.$o$[0]) {
        return!1;
      }
      if (!$obj$$62$$.$cy$) {
        if ($obj$$62$$.$op$ && $obj$$62$$.$np$ && $obj$$62$$.$op$[0] === $obj$$62$$.$np$[0] && $obj$$62$$.$cp$ - 1 === $obj$$62$$.$o$.index()) {
          return!1;
        }
        $obj$$62$$.$o$.each(function() {
          if (-1 !== $r$$2$$.parentsUntil(".oj-tree", "li").addBack().index(this)) {
            return $ret$$30$$ = !1;
          }
        });
      }
      return $ret$$30$$;
    }, $_rename_node$:function($node$$60$$, $text$$15$$) {
      var $t$$3$$;
      $node$$60$$ = this.$_getNode$($node$$60$$);
      this.$__rollback$();
      $t$$3$$ = this.getText($node$$60$$);
      if ($node$$60$$ && $node$$60$$.length) {
        var $rslt$$3$$ = this.$_emitEvent$({obj:$node$$60$$, func:"rename", title:$text$$15$$, prevTitle:$t$$3$$}, "before");
        if ("boolean" == typeof $rslt$$3$$ && !$rslt$$3$$) {
          return;
        }
      }
      $node$$60$$ && $node$$60$$.length && this.$_set_text$.apply(this, Array.prototype.slice.call(arguments)) && this.$_emitEvent$({obj:$node$$60$$, title:$text$$15$$, prevTitle:$t$$3$$}, "rename");
    }, $_move_node$:function($obj$$63$$, $d$$3_o$$14_ref$$3$$, $position$$12$$, $is_copy$$, $is_prepared$$, $skip_check$$) {
      if (!($obj$$63$$.hasClass && $obj$$63$$.hasClass("oj-disabled") || this.$_data$.$core$.locked)) {
        if (!$is_prepared$$) {
          return this.$_prepare_move$($obj$$63$$, $d$$3_o$$14_ref$$3$$, $position$$12$$, function($p$$11$$) {
            this.$_move_node$($p$$11$$, !1, !1, $is_copy$$, !0, $skip_check$$);
          });
        }
        $is_copy$$ && (this.$_data$.$core$.$prepared_move$.$cy$ = !0);
        if (!$skip_check$$ && !this.check_move()) {
          return!1;
        }
        this.$__rollback$();
        $d$$3_o$$14_ref$$3$$ = !1;
        $is_copy$$ ? ($d$$3_o$$14_ref$$3$$ = $obj$$63$$.$o$.clone(!0), $d$$3_o$$14_ref$$3$$.find("*[id]").addBack().each(function() {
          this.id && (this.id = "copy_" + this.id);
        })) : $d$$3_o$$14_ref$$3$$ = $obj$$63$$.$o$;
        $obj$$63$$.$or$.length ? $obj$$63$$.$or$.before($d$$3_o$$14_ref$$3$$) : ($obj$$63$$.$np$.children("ul").length || $$$$25$$("\x3cul /\x3e").appendTo($obj$$63$$.$np$), $obj$$63$$.$np$.children("ul:eq(0)").append($d$$3_o$$14_ref$$3$$));
        try {
          $obj$$63$$.$ot$.$_clean_node$($obj$$63$$.$op$), $obj$$63$$.$rt$.$_clean_node$($obj$$63$$.$np$), $obj$$63$$.$op$.find("\x3e ul \x3e li").length || $obj$$63$$.$op$.removeClass("oj-tree-open oj-tree-closed").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove();
        } catch ($e$$80$$) {
        }
        $is_copy$$ && (this.$_data$.$core$.$prepared_move$.$cy$ = !0, this.$_data$.$core$.$prepared_move$.$oc$ = $d$$3_o$$14_ref$$3$$);
        $d$$3_o$$14_ref$$3$$ = $$$$25$$.extend(!0, {}, this.$_data$.$core$.$prepared_move$);
        $d$$3_o$$14_ref$$3$$.obj = $obj$$63$$.$o$;
        this.$_emitEvent$($d$$3_o$$14_ref$$3$$, "move");
        return this.$_data$.$core$.$prepared_move$;
      }
    }, $_getMove$:function() {
      return this.$_data$.$crrm$.$prepared_move$;
    }, $_getType$:function($node$$61$$) {
      var $n$$28$$ = null;
      this.options.types && ($n$$28$$ = this.$_getNode$($node$$61$$));
      return $n$$28$$ && $n$$28$$.length ? $n$$28$$.attr(this.options.types.attr) || "default" : !1;
    }, $_setType$:function($str$$18$$, $node$$62$$) {
      var $s$$13$$ = this.options.types, $ret$$31$$ = !1;
      $node$$62$$ = this.$_getNode$($node$$62$$);
      ($ret$$31$$ = $s$$13$$ ? $node$$62$$.length && $str$$18$$ ? $node$$62$$.attr(this.options.types.attr, $str$$18$$) : !1 : !1) && this.$_emitEvent$({obj:$node$$62$$, type:$str$$18$$}, "settype");
      return $ret$$31$$;
    }, $_check$:function($rule$$3$$, $obj$$64$$, $opts$$23$$) {
      $obj$$64$$ = this.$_getNode$($obj$$64$$);
      var $v$$1$$ = !1, $ty$$ = this.$_getType$($obj$$64$$), $d$$4$$ = 0, $_this$$6$$ = this, $s$$14$$ = this.$_getOptions$().types, $data$$135$$ = !1;
      if (-1 === $obj$$64$$) {
        if ($s$$14$$[$rule$$3$$]) {
          $v$$1$$ = $s$$14$$[$rule$$3$$];
        } else {
          return;
        }
      } else {
        if (!1 === $ty$$) {
          return;
        }
        ($data$$135$$ = this.$_data$.types.$defaults$.useData ? $obj$$64$$.data("oj-tree") : !1) && $data$$135$$.types && "undefined" !== typeof $data$$135$$.types[$rule$$3$$] ? $v$$1$$ = $data$$135$$.types[$rule$$3$$] : $s$$14$$.types[$ty$$] && "undefined" !== typeof $s$$14$$.types[$ty$$][$rule$$3$$] ? $v$$1$$ = $s$$14$$.types[$ty$$][$rule$$3$$] : $s$$14$$.types["default"] && "undefined" !== typeof $s$$14$$.types["default"][$rule$$3$$] && ($v$$1$$ = $s$$14$$.types["default"][$rule$$3$$]);
      }
      $$$$25$$.isFunction($v$$1$$) && ($v$$1$$ = $v$$1$$.call(this, $obj$$64$$));
      var $md$$ = this.$_data$.types.$defaults$.maxDepth;
      "maxDepth" === $rule$$3$$ && -1 !== $obj$$64$$ && !1 !== $opts$$23$$ && -2 !== this.$_data$.types.$defaults$.maxDepth && 0 !== $v$$1$$ && $obj$$64$$.children("a:eq(0)").parentsUntil(".oj-tree", "li").each(function($i$$249$$) {
        if (-1 !== $md$$ && 0 >= $md$$ - ($i$$249$$ + 1)) {
          return $v$$1$$ = 0, !1;
        }
        $d$$4$$ = 0 === $i$$249$$ ? $v$$1$$ : $_this$$6$$.$_check$($rule$$3$$, this, !1);
        if (-1 !== $d$$4$$ && 0 >= $d$$4$$ - ($i$$249$$ + 1)) {
          return $v$$1$$ = 0, !1;
        }
        0 <= $d$$4$$ && ($d$$4$$ - ($i$$249$$ + 1) < $v$$1$$ || 0 > $v$$1$$) && ($v$$1$$ = $d$$4$$ - ($i$$249$$ + 1));
        0 <= $md$$ && ($md$$ - ($i$$249$$ + 1) < $v$$1$$ || 0 > $v$$1$$) && ($v$$1$$ = $md$$ - ($i$$249$$ + 1));
      });
      return $v$$1$$;
    }, $_clean_node$:function($obj$$65$$) {
      $obj$$65$$ = $obj$$65$$ && -1 != $obj$$65$$ ? $$$$25$$($obj$$65$$) : this.$_$container_ul$;
      $obj$$65$$ = $obj$$65$$.is("li") ? $obj$$65$$.find("li").addBack() : $obj$$65$$.find("li");
      $obj$$65$$.removeClass("oj-tree-last").filter("li:last-child").addClass("oj-tree-last").end().filter(":has(li)").not(".oj-tree-open").removeClass("oj-tree-leaf").addClass("oj-tree-closed").attr("aria-expanded", "false");
      $obj$$65$$.not(".oj-tree-open, .oj-tree-closed").addClass("oj-tree-leaf").children("ul").remove();
      this.$_emitEvent$({obj:$obj$$65$$}, "clean_node");
    }, $_create_node$:function($obj$$66$$, $position$$13$$, $js$$, $callback$$96$$, $is_loaded$$) {
      $obj$$66$$ = this.$_getNode$($obj$$66$$);
      if (-1 !== $obj$$66$$ && !$obj$$66$$.length) {
        return!1;
      }
      $position$$13$$ = "undefined" === typeof $position$$13$$ ? "last" : $position$$13$$;
      var $d$$5$$ = $$$$25$$("\x3cli /\x3e"), $tmp$$3$$;
      if (!$is_loaded$$ && !this.$_is_loaded$($obj$$66$$)) {
        return this.$_load_node$($obj$$66$$, function() {
          this.$_create_node$($obj$$66$$, $position$$13$$, $js$$, $callback$$96$$, !0);
        }), !1;
      }
      this.$__rollback$();
      "string" === typeof $js$$ && ($js$$ = {data:$js$$});
      $js$$ || ($js$$ = {});
      $js$$.attr && $d$$5$$.attr($js$$.attr);
      $js$$.metadata && $d$$5$$.data($js$$.metadata);
      $js$$.state && $d$$5$$.addClass("oj-tree-" + ("expanded" === $js$$.state ? "open" : "closed"));
      $js$$.data || ($js$$.data = void 0 !== $js$$.title ? $js$$.title : this.$getTranslatedString$("m_newnode"));
      $$$$25$$.isArray($js$$.data) || ($tmp$$3$$ = $js$$.data, $js$$.data = [], $js$$.data.push($tmp$$3$$));
      var $_this$$7$$ = this;
      $$$$25$$.each($js$$.data, function($i$$250$$, $m$$24$$) {
        $tmp$$3$$ = $$$$25$$("\x3ca /\x3e");
        $$$$25$$.isFunction($m$$24$$) && ($m$$24$$ = $m$$24$$.call(this, $js$$));
        if ("string" == typeof $m$$24$$) {
          $tmp$$3$$.attr("href", "#")[$_this$$7$$.$_data$.$core$.$htmlTitles$ ? "html" : "text"]($m$$24$$);
        } else {
          $m$$24$$.attr || ($m$$24$$.attr = {}), $m$$24$$.attr.href || ($m$$24$$.attr.href = "#"), $tmp$$3$$.attr($m$$24$$.attr)[$_this$$7$$.$_data$.$core$.$htmlTitles$ ? "html" : "text"]($m$$24$$.title), $m$$24$$.language && $tmp$$3$$.addClass($m$$24$$.language);
        }
        $tmp$$3$$.prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e");
        !$m$$24$$.icon && $js$$.icon && ($m$$24$$.icon = $js$$.icon);
        $m$$24$$.icon && (-1 === $m$$24$$.icon.indexOf("/") ? $tmp$$3$$.children("ins").addClass($m$$24$$.icon) : $tmp$$3$$.children("ins").css("background", "url('" + $m$$24$$.icon + "') center center no-repeat"));
        $d$$5$$.append($tmp$$3$$);
      });
      $d$$5$$.prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e");
      -1 === $obj$$66$$ && ($obj$$66$$ = this.$_$container$, "before" === $position$$13$$ && ($position$$13$$ = "first"), "after" === $position$$13$$ && ($position$$13$$ = "last"));
      switch($position$$13$$) {
        case "before":
          $obj$$66$$.before($d$$5$$);
          $tmp$$3$$ = this.$_getParent$($obj$$66$$);
          break;
        case "after":
          $obj$$66$$.after($d$$5$$);
          $tmp$$3$$ = this.$_getParent$($obj$$66$$);
          break;
        case "inside":
        ;
        case "first":
          $obj$$66$$.children("ul").length || $obj$$66$$.append("\x3cul /\x3e");
          $obj$$66$$.children("ul").prepend($d$$5$$);
          $tmp$$3$$ = $obj$$66$$;
          break;
        case "last":
          $obj$$66$$.children("ul").length || $obj$$66$$.append("\x3cul /\x3e");
          $obj$$66$$.children("ul").append($d$$5$$);
          $tmp$$3$$ = $obj$$66$$;
          break;
        default:
          $obj$$66$$.children("ul").length || $obj$$66$$.append("\x3cul /\x3e"), $position$$13$$ || ($position$$13$$ = 0), $tmp$$3$$ = $obj$$66$$.children("ul").children("li").eq($position$$13$$), $tmp$$3$$.length ? $tmp$$3$$.before($d$$5$$) : $obj$$66$$.children("ul").append($d$$5$$), $tmp$$3$$ = $obj$$66$$;
      }
      if (-1 === $tmp$$3$$ || $tmp$$3$$.get(0) === this.$_$container$.get(0)) {
        $tmp$$3$$ = -1;
      }
      this.$_clean_node$($tmp$$3$$);
      this.$_emitEvent$({obj:$d$$5$$, parent:$tmp$$3$$}, "create_node");
      $callback$$96$$ && $callback$$96$$.call(this, $d$$5$$);
      return $d$$5$$;
    }, $_expand$:function($obj$$67$$, $callback$$97$$, $skip_animation$$) {
      $obj$$67$$ = this.$_getNode$($obj$$67$$);
      if (!$obj$$67$$.length) {
        return!1;
      }
      if (!$obj$$67$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        if (!$obj$$67$$.hasClass("oj-tree-closed")) {
          return $callback$$97$$ && $callback$$97$$.call(), !1;
        }
        var $rslt$$4_s$$16$$ = this.$_emitEvent$({obj:$obj$$67$$, func:"expand"}, "before");
        if ("boolean" != typeof $rslt$$4_s$$16$$ || $rslt$$4_s$$16$$) {
          var $rslt$$4_s$$16$$ = $skip_animation$$ || this.options.animDuration, $t$$5$$ = this;
          this.$_is_loaded$($obj$$67$$) ? (this.options.expandParents && $obj$$67$$.parentsUntil(".oj-tree", ".oj-tree-closed").each(function() {
            $t$$5$$.expand(this, !1, !0);
          }), $rslt$$4_s$$16$$ && $obj$$67$$.children("ul").css("display", "none"), $obj$$67$$.removeClass("oj-tree-closed").addClass("oj-tree-open").attr("aria-expanded", "true").children("a").removeClass("oj-tree-loading"), $rslt$$4_s$$16$$ ? $obj$$67$$.children("ul").stop(!0, !0).slideDown($rslt$$4_s$$16$$, function() {
            this.style.display = "";
            $t$$5$$.after_open($obj$$67$$);
          }) : $t$$5$$.after_open($obj$$67$$), this.$_emitEvent$({obj:$obj$$67$$}, "expand"), $callback$$97$$ && $callback$$97$$.call()) : ($obj$$67$$.children("a").addClass("oj-tree-loading"), this.$_load_node$($obj$$67$$, function() {
            $t$$5$$.expand($obj$$67$$, $callback$$97$$, $skip_animation$$);
          }, $callback$$97$$));
        }
      }
    }, $_expandAll$:function($obj$$68$$, $do_animation$$, $original_obj$$) {
      var $origTarg$$1$$ = $obj$$68$$ ? $obj$$68$$ : -1;
      ($obj$$68$$ = $obj$$68$$ ? this.$_getNode$($obj$$68$$) : -1) && -1 !== $obj$$68$$ ? $origTarg$$1$$ = $obj$$68$$ : $obj$$68$$ = this.$_$container_ul$;
      $original_obj$$ ? $obj$$68$$ = $obj$$68$$.find("li.oj-tree-closed") : ($original_obj$$ = $obj$$68$$, $obj$$68$$ = $obj$$68$$.is(".oj-tree-closed") ? $obj$$68$$.find("li.oj-tree-closed").addBack() : $obj$$68$$.find("li.oj-tree-closed"));
      var $_this$$8$$ = this;
      $obj$$68$$.each(function() {
        var $__this$$ = this;
        $_this$$8$$.$_is_loaded$(this) ? $_this$$8$$.$_expand$(this, !1, !$do_animation$$) : $_this$$8$$.expand(this, function() {
          $_this$$8$$.$_expandAll$($__this$$, $do_animation$$, $original_obj$$);
        }, !$do_animation$$);
      });
      0 === $original_obj$$.find("li.oj-tree-closed").length && this.$_emitEvent$({obj:$obj$$68$$, targ:$origTarg$$1$$}, "expandAll");
    }, $_select$:function($node$$63$$, $check$$, $e$$81$$) {
      if (0 == this.$_data$.$core$.$selectMode$) {
        return!1;
      }
      $node$$63$$ = this.$_getNode$($node$$63$$);
      if (-1 == $node$$63$$ || !$node$$63$$ || !$node$$63$$.length) {
        return!1;
      }
      if (!$node$$63$$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        var $rslt$$5_s$$17$$ = this.$_emitEvent$({obj:$node$$63$$, func:"select"}, "before");
        if ("boolean" != typeof $rslt$$5_s$$17$$ || $rslt$$5_s$$17$$) {
          var $rslt$$5_s$$17$$ = this.options, $is_multiple_selMultMod$$ = this.$_data$.ui.$defaults$.selectMultipleModifier, $is_range_selRangeMod$$ = this.$_data$.ui.$defaults$.selectRangeModifier, $disSelChildren$$ = this.$_data$.ui.$defaults$.disableSelectingChildren, $is_multiple_selMultMod$$ = "on" == $is_multiple_selMultMod$$ || !1 !== $is_multiple_selMultMod$$ && $e$$81$$ && $e$$81$$[$is_multiple_selMultMod$$ + "Key"], $is_range_selRangeMod$$ = !1 !== $is_range_selRangeMod$$ && $e$$81$$ && 
          $e$$81$$[$is_range_selRangeMod$$ + "Key"] && this.$_data$.ui.$last_selected$ && this.$_data$.ui.$last_selected$[0] !== $node$$63$$[0] && this.$_data$.ui.$last_selected$.parent()[0] === $node$$63$$.parent()[0], $is_selected$$ = this.isSelected($node$$63$$), $proceed$$ = !0, $t$$6$$ = this;
          if ($check$$) {
            if ($disSelChildren$$ && $is_multiple_selMultMod$$ && ($node$$63$$.parentsUntil(".oj-tree", "li").children("a.oj-tree-clicked").length || $node$$63$$.children("ul").find("a.oj-tree-clicked:eq(0)").length)) {
              return!1;
            }
            $proceed$$ = !1;
            switch(!0) {
              case $is_range_selRangeMod$$:
                this.$_data$.ui.$last_selected$.addClass("oj-tree-last-selected");
                $node$$63$$ = $node$$63$$[$node$$63$$.index() < this.$_data$.ui.$last_selected$.index() ? "nextUntil" : "prevUntil"](".oj-tree-last-selected").addBack();
                -1 == this.$_data$.$core$.$selectMode$ || $node$$63$$.length < this.$_data$.$core$.$selectMode$ ? (this.$_data$.ui.$last_selected$.removeClass("oj-tree-last-selected"), this.$_data$.ui.selected.each(function() {
                  this !== $t$$6$$.$_data$.ui.$last_selected$[0] && $t$$6$$.deselect(this);
                }), $is_selected$$ = !1, $proceed$$ = !0) : $proceed$$ = !1;
                break;
              case $is_selected$$ && !$is_multiple_selMultMod$$:
                this.deselectAll();
                this.$_data$.ui.$spacebar$ || ($is_selected$$ = !1);
                $proceed$$ = !0;
                break;
              case !$is_selected$$ && !$is_multiple_selMultMod$$:
                $e$$81$$ ? this.$_data$.ui.selected && 1 == this.$_data$.ui.selected.length ? this.deselect(this.$_data$.ui.selected) : this.deselectAll(this.$_data$.ui.selected) : 1 === this.$_data$.$core$.$selectMode$ ? this.deselect(this.$_data$.ui.selected) : 1 < this.$_data$.$core$.$selectMode$ && this.deselectAll();
                $proceed$$ = !0;
                break;
              case $is_selected$$ && $is_multiple_selMultMod$$:
                this.deselect($node$$63$$);
                break;
              case !$is_selected$$ && $is_multiple_selMultMod$$:
                if (-1 == this.$_data$.$core$.$selectMode$ || this.$_data$.ui.selected.length + 1 <= this.$_data$.$core$.$selectMode$) {
                  $proceed$$ = !0;
                }
              ;
            }
          }
          $proceed$$ && !$is_selected$$ && ($is_range_selRangeMod$$ || (this.$_data$.ui.$last_selected$ = $node$$63$$), $node$$63$$.children("a").addClass("oj-tree-clicked"), $node$$63$$.attr("aria-selected", "true"), $rslt$$5_s$$17$$.selectedParentExpand && $node$$63$$.parents(".oj-tree-closed").each(function() {
            $t$$6$$.expand(this, !1, !0);
          }), this.$_data$.ui.selected = this.$_data$.ui.selected.add($node$$63$$), this.$_fix_scroll$($node$$63$$.eq(0)), this.$_emitEvent$({obj:$node$$63$$, e:$e$$81$$}, "select"));
        }
      }
    }, $_deselectAll$:function($context$$49$$, $bSeparate$$) {
      if (!this.$_data$.$core$.locked) {
        if ($bSeparate$$) {
          if ($origTarg$$2$$ = $context$$49$$ ? $context$$49$$ : -1, $ret$$32$$ = $context$$49$$ ? $$$$25$$($context$$49$$).find("a.oj-tree-clicked").parent() : this.$_$container$.find("a.oj-tree-clicked").parent(), !$ret$$32$$.hasClass("oj-disabled")) {
            var $_this$$9$$ = this;
            $$$$25$$.each($ret$$32$$, function() {
              $_this$$9$$.deselect(this);
            });
          }
        } else {
          var $origTarg$$2$$ = $context$$49$$ ? $context$$49$$ : -1, $ret$$32$$ = $context$$49$$ ? $$$$25$$($context$$49$$).find("a.oj-tree-clicked").parent() : this.$_$container$.find("a.oj-tree-clicked").parent();
          $ret$$32$$.hasClass("oj-disabled") || ($ret$$32$$.children("a.oj-tree-clicked").removeClass("oj-tree-clicked"), $ret$$32$$.removeAttr("aria-selected"), this.$_data$.ui.selected = $$$$25$$([]), this.$_data$.ui.$last_selected$ = !1, $ret$$32$$.length && this.$_emitEvent$({obj:$ret$$32$$, targ:$origTarg$$2$$}, "deselectAll"));
        }
      }
    }, $_refresh$:function($node$$64$$) {
      this.$_refresh_core$($node$$64$$);
    }, $_refresh_core$:function($node$$65$$) {
      var $origTarg$$3$$ = $node$$65$$ ? $node$$65$$ : -1, $_this$$10$$ = this;
      this.$_save_opened$();
      $node$$65$$ || ($node$$65$$ = -1);
      ($node$$65$$ = this.$_getNode$($node$$65$$)) ? $origTarg$$3$$ = $node$$65$$ : $node$$65$$ = -1;
      -1 !== $node$$65$$ ? $node$$65$$.children("UL").remove() : (this.$_$container_ul$.empty(), this.$_processExistingMarkup$());
      this.$_load_node$($node$$65$$, function() {
        $_this$$10$$.$_emitEvent$({obj:$origTarg$$3$$}, "refresh");
        $_this$$10$$.$_reload_nodes$();
      });
    }, $_refresh_ui$:function($obj$$69$$) {
      this.save_selected();
      this.$_refresh_core$($obj$$69$$);
    }, after_open:function($obj$$70$$) {
      this.$_emitEvent$({obj:$obj$$70$$}, "after_open");
    }, after_close:function($obj$$71$$) {
      this.$_emitEvent$({obj:$obj$$71$$}, "after_close");
    }, $_reopen$:function() {
      var $_this$$11$$ = this;
      this.$_data$.$core$.$toExpand$.length && $$$$25$$.each(this.$_data$.$core$.$toExpand$, function($i$$251$$, $val$$44$$) {
        $_this$$11$$.$_expand$($val$$44$$, !1, !0);
      });
      this.$_emitEvent$({}, "reopen");
    }, $_getSelected$:function($context$$50$$) {
      return $context$$50$$ ? $$$$25$$($context$$50$$).find("a.oj-tree-clicked").parent() : this.$_data$.ui.selected;
    }, $_set_text$:function($obj$$72$$, $val$$45$$) {
      $obj$$72$$ = this.$_getNode$($obj$$72$$);
      if (!$obj$$72$$.length) {
        return!1;
      }
      $obj$$72$$ = $obj$$72$$.children("a:eq(0)");
      if (this.$_data$.$core$.$htmlTitles$) {
        var $tmp$$4$$ = $obj$$72$$.children("INS").clone();
        $obj$$72$$.html($val$$45$$).prepend($tmp$$4$$);
        this.$_emitEvent$({obj:$obj$$72$$, name:$val$$45$$}, "set_text");
        return!0;
      }
      $obj$$72$$ = $obj$$72$$.find("span:eq(0)");
      this.$_emitEvent$({obj:$obj$$72$$, name:$val$$45$$}, "set_text");
      return $obj$$72$$[0].textContent = $val$$45$$;
    }, $_loadNodes$:function() {
      0 !== this.$_data$.$ds$.type && -1 !== this.$_data$.$ds$.type ? this.$_load_node$(-1, function() {
        this.$_loaded$();
        this.$_reload_nodes$();
      }) : (this.$_applyEmptyText$(), this.$_loaded$());
    }, $_load_node$:function($obj$$73$$) {
      this.$_emitEvent$({obj:$obj$$73$$}, "load_node");
    }, $_is_loaded$:function() {
      return!0;
    }, $_load_node_DS$:function($obj$$75$$, $s_call$$, $e_call$$) {
      var $_this$$12$$ = this;
      this.$_load_node_tree$($obj$$75$$, function() {
        $_this$$12$$.$_emitEvent$({obj:$_this$$12$$.$_getNode$($obj$$75$$)}, "load_node");
        $s_call$$.call(this);
      }, $e_call$$);
    }, $_is_loaded_DS$:function($obj$$76$$) {
      $obj$$76$$ = this.$_getNode$($obj$$76$$);
      return-1 === $obj$$76$$ || !$obj$$76$$ || $obj$$76$$.is(".oj-tree-open, .oj-tree-leaf") || 0 < $obj$$76$$.children("ul").children("li").length;
    }, $_refresh_DS$:function($obj$$77$$) {
      ($obj$$77$$ = this.$_getNode$($obj$$77$$)) && -1 !== $obj$$77$$ && $obj$$77$$.removeData("oj-tree-children");
      return this.$_refresh_ui$($obj$$77$$);
    }, $_load_node_J$:function($obj$$78$$, $s_call$$1$$, $e_call$$1$$) {
      var $_this$$13$$ = this;
      this.$_load_node_json$($obj$$78$$, function() {
        $_this$$13$$.$_emitEvent$({obj:$_this$$13$$.$_getNode$($obj$$78$$)}, "load_node");
        $s_call$$1$$.call(this);
      }, $e_call$$1$$);
    }, $_is_loaded_J$:function($obj$$79$$) {
      var $s$$18$$ = this.options.data;
      $obj$$79$$ = this.$_getNode$($obj$$79$$);
      return-1 == $obj$$79$$ || !$obj$$79$$ || !$s$$18$$.ajax && !this.$_data$.$ds$.$progressiveRender$ && !$$$$25$$.isFunction($s$$18$$.data) || $obj$$79$$.is(".oj-tree-open, .oj-tree-leaf") || 0 < $obj$$79$$.children("ul").children("li").length;
    }, $_load_node_H$:function($obj$$80$$, $s_call$$2$$, $e_call$$2$$) {
      var $_this$$14$$ = this;
      this.$_load_node_html$($obj$$80$$, function() {
        $_this$$14$$.$_emitEvent$({obj:$_this$$14$$.$_getNode$($obj$$80$$)}, "load_node");
        $s_call$$2$$.call(this);
      }, $e_call$$2$$);
    }, $_is_loaded_H$:function($obj$$81$$) {
      var $s$$19$$ = this.options.data, $data$$136$$ = null, $ajax$$ = null;
      $s$$19$$ && ($data$$136$$ = $s$$19$$.data || null, $ajax$$ = $s$$19$$.ajax || null);
      $obj$$81$$ = this.$_getNode$($obj$$81$$);
      return-1 == $obj$$81$$ || !$obj$$81$$ || !$ajax$$ && !$$$$25$$.isFunction($data$$136$$) || $obj$$81$$.is(".oj-tree-open, .oj-tree-leaf") || 0 < $obj$$81$$.children("ul").children("li").size();
    }, reselect:function() {
      var $_this$$15$$ = this, $s$$20$$ = this.$_data$.ui.$to_select$, $s$$20$$ = $$$$25$$.map($$$$25$$.makeArray($s$$20$$), function($n$$29$$) {
        return "#" + $n$$29$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
      });
      $$$$25$$.each($s$$20$$, function($i$$252$$, $val$$46$$) {
        $val$$46$$ && "#" !== $val$$46$$ && $_this$$15$$.select($val$$46$$);
      });
      this.$_data$.ui.selected = this.$_data$.ui.selected.filter(function() {
        return this.parentNode;
      });
      this.$_emitEvent$(null, "reselect");
    }, save_selected:function() {
      var $_this$$16$$ = this;
      this.$_data$.ui.$to_select$ = [];
      this.$_data$.ui.selected.each(function() {
        this.id && $_this$$16$$.$_data$.ui.$to_select$.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"));
      });
      this.$_emitEvent$(this.$_data$.ui.$to_select$, "save_selected");
    }, rollback:function($rb$$1$$) {
      $rb$$1$$ && ($$$$25$$.isArray($rb$$1$$) || ($rb$$1$$ = [$rb$$1$$]), $$$$25$$.each($rb$$1$$, function() {
      }));
    }, get_rollback:function() {
      this.$_emitEvent$(null, "get_rollback");
      return{$i$:this.$_index$, $h$:this.$_$container$.children("ul").clone(!0), $d$:this.data};
    }, set_rollback:function($html$$3$$, $data$$137$$) {
      this.$_$container$ && this.$_$container_ul$ && this.$_$container_ul$.empty().append($html$$3$$);
      this.data = $data$$137$$;
      this.$_emitEvent$(null, "set_rollback");
    }, $_load_node_tree$:function($obj$$82$$, $s_call$$3$$) {
      var $d$$6_rslt$$6$$ = this.$_JsonDSToJson$($obj$$82$$);
      if ($d$$6_rslt$$6$$.success && $d$$6_rslt$$6$$.$js$) {
        var $$u_bTree$$ = !$obj$$82$$ || -1 === $obj$$82$$, $s$$21$$ = this.options.data;
        if ($s$$21$$.data && !$s$$21$$.ajax || $s$$21$$.data && $s$$21$$.ajax && $$u_bTree$$) {
          $$u_bTree$$ && (($d$$6_rslt$$6$$ = this.$_parseJson$($d$$6_rslt$$6$$.$js$, $obj$$82$$)) ? (this.$_$container_ul$.empty().append($d$$6_rslt$$6$$.children()), this.$_clean_node$()) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty()), $s_call$$3$$ && $s_call$$3$$.call(this);
        } else {
          if (!$s$$21$$.data && $s$$21$$.ajax || $s$$21$$.data && $s$$21$$.ajax && !$$u_bTree$$) {
            ($d$$6_rslt$$6$$ = this.$_parseJson$($d$$6_rslt$$6$$.$js$, $obj$$82$$)) ? ($$u_bTree$$ ? ($$u_bTree$$ = this.$_$container_ul$, $$u_bTree$$.empty().append($d$$6_rslt$$6$$.children()), $$u_bTree$$.attr("role", "tree").attr("tabindex", "0").css("outline", "none"), -1 === this.$_data$.$core$.$selectMode$ && $$u_bTree$$.attr("aria-multiselectable", !0)) : ($obj$$82$$.append($d$$6_rslt$$6$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$82$$.removeData("oj-tree-is-loading")), 
            this.$_clean_node$($obj$$82$$), $s_call$$3$$ && $s_call$$3$$.call(this)) : $$u_bTree$$ ? this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$3$$ && $s_call$$3$$.call(this)) : ($obj$$82$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$82$$.removeData("oj-tree-is-loading"), $s$$21$$.correct_state && (this.$_correct_state$($obj$$82$$), $s_call$$3$$ && $s_call$$3$$.call(this)));
          }
        }
      }
    }, $_JsonDSToJson$:function($parentKey$$10$$, $node$$66$$) {
      var $arJson$$ = [], $ds$$ = this.$_tds$, $cc$$, $range$$22$$ = {}, $rslt$$7$$ = {success:!1, $js$:null};
      -1 == $parentKey$$10$$ && ($parentKey$$10$$ = null, $range$$22$$.start = 0);
      $cc$$ = $ds$$.$getChildCount$($parentKey$$10$$);
      0 < $cc$$ && ($range$$22$$.count = $cc$$, $ds$$.$fetchChildren$($parentKey$$10$$, $range$$22$$, {success:$$$$25$$.proxy(function($jns$$) {
        for (var $c$$28$$ = $jns$$.$getCount$(), $attr$$18_n$$30_r$$3$$, $i$$254$$ = 0;$i$$254$$ < $c$$28$$;$i$$254$$++) {
          $node$$66$$ = {};
          ($attr$$18_n$$30_r$$3$$ = $jns$$.getData($i$$254$$)) && ($node$$66$$.attr = $attr$$18_n$$30_r$$3$$);
          $node$$66$$.title = $jns$$.$m_nodes$[$i$$254$$].title;
          $attr$$18_n$$30_r$$3$$.$metadata$ && ($node$$66$$.metadata = $jns$$.$m_nodes$[$i$$254$$].metadata);
          var $key$$87$$ = $node$$66$$.attr.id;
          $attr$$18_n$$30_r$$3$$ = $ds$$.$getChildCount$($key$$87$$);
          0 < $attr$$18_n$$30_r$$3$$ && ($attr$$18_n$$30_r$$3$$ = this.$_JsonDSToJson$($key$$87$$, $node$$66$$), $node$$66$$.children = $attr$$18_n$$30_r$$3$$.$js$);
          $arJson$$.push($node$$66$$);
        }
        $rslt$$7$$.success = !0;
        $rslt$$7$$.$js$ = $arJson$$;
      }, this), error:function() {
        $rslt$$7$$.success = !1;
      }}));
      return $rslt$$7$$;
    }, $_refresh_json$:function($obj$$83$$) {
      $obj$$83$$ = this.$_getNode$($obj$$83$$);
      if (!this.$_data$.$core$.locked) {
        var $bTree$$1$$ = !$obj$$83$$ || -1 !== $obj$$83$$ || !$obj$$83$$.length;
        if ($bTree$$1$$ || !$obj$$83$$.hasClass("oj-disabled")) {
          var $s$$22$$ = this.options.data.json;
          !$bTree$$1$$ && this.$_data$.$ds$.$progressiveUnload$ && ($$$$25$$.isFunction($s$$22$$.data) || $s$$22$$.ajax) && $obj$$83$$.removeData("oj-tree-children");
          return this.$_refresh_ui$($obj$$83$$);
        }
      }
    }, $_load_node_json$:function($obj$$84$$, $s_call$$4$$, $e_call$$4$$) {
      function $success_func$$() {
      }
      function $error_func$$() {
      }
      var $d$$7_s$$23$$ = this.$_getOptions$().data, $data$$138$$ = $d$$7_s$$23$$ && $d$$7_s$$23$$.data || null, $ajax$$1$$ = $d$$7_s$$23$$ && $d$$7_s$$23$$.ajax || null;
      !$d$$7_s$$23$$ || $data$$138$$ || $ajax$$1$$ || ($data$$138$$ = $d$$7_s$$23$$);
      if (($obj$$84$$ = this.$_getNode$($obj$$84$$)) && -1 !== $obj$$84$$ && (this.$_data$.$ds$.$progressiveRender$ || this.$_data$.$ds$.$progressiveUnload$) && !$obj$$84$$.is(".oj-tree-open, .oj-tree-leaf") && 0 === $obj$$84$$.children("ul").children("li").length && $obj$$84$$.data("oj-tree-children")) {
        if ($d$$7_s$$23$$ = this.$_parseJson$($obj$$84$$.data("oj-tree-children"), $obj$$84$$)) {
          $obj$$84$$.append($d$$7_s$$23$$), this.$_data$.$ds$.$progressiveUnload$ || $obj$$84$$.removeData("oj-tree-children");
        }
        this.$_clean_node$($obj$$84$$);
        $s_call$$4$$ && $s_call$$4$$.call(this);
      } else {
        if ($obj$$84$$ && -1 !== $obj$$84$$) {
          if ($obj$$84$$.data("oj-tree-is-loading")) {
            return;
          }
          $obj$$84$$.data("oj-tree-is-loading", !0);
        }
        switch(!0) {
          case !$data$$138$$ && !$ajax$$1$$:
            throw "ojTree - neither data nor ajax settings supplied.";;
          case $$$$25$$.isFunction($data$$138$$):
            $data$$138$$.call(this, $obj$$84$$, $$$$25$$.proxy(function($d$$8$$) {
              ($d$$8$$ = this.$_parseJson$($d$$8$$, $obj$$84$$)) ? (-1 !== $obj$$84$$ && $obj$$84$$ ? ($obj$$84$$.append($d$$8$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$84$$.removeData("oj-tree-is-loading")) : this.$_$container_ul$.empty().append($d$$8$$.children()), this.$_clean_node$($obj$$84$$), $s_call$$4$$ && $s_call$$4$$.call(this)) : (-1 !== $obj$$84$$ && $obj$$84$$ ? ($obj$$84$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$84$$.removeData("oj-tree-is-loading"), 
              this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$84$$)) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty(), $e_call$$4$$ && $e_call$$4$$.call(this));
            }, this));
            break;
          case !!$data$$138$$ && !$ajax$$1$$ || !!$data$$138$$ && !!$ajax$$1$$ && (!$obj$$84$$ || -1 === $obj$$84$$):
            $obj$$84$$ && -1 != $obj$$84$$ || (($d$$7_s$$23$$ = this.$_parseJson$($data$$138$$, $obj$$84$$)) ? (this.$_$container_ul$.empty().append($d$$7_s$$23$$.children()), this.$_clean_node$()) : this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty());
            $s_call$$4$$ && $s_call$$4$$.call(this);
            break;
          case !$data$$138$$ && !!$ajax$$1$$ || !!$data$$138$$ && !!$ajax$$1$$ && $obj$$84$$ && -1 !== $obj$$84$$:
            $error_func$$ = function $$error_func$$$($x$$54$$, $t$$7$$, $e$$82$$) {
              var $ef$$ = this.$_getOptions$().data.ajax.error;
              $ef$$ && $ef$$.call(this, $t$$7$$, $e$$82$$, $x$$54$$);
              -1 != $obj$$84$$ && $obj$$84$$.length ? ($obj$$84$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$84$$.removeData("oj-tree-is-loading"), "success" === $t$$7$$ && this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$84$$)) : "success" === $t$$7$$ && this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty();
              $e_call$$4$$ && $e_call$$4$$.call(this);
            }, $success_func$$ = function $$success_func$$$($d$$9$$, $$u$$1_t$$8$$, $x$$55$$) {
              var $sf$$ = this.$_getOptions$().data.ajax.success;
              $sf$$ && ($d$$9$$ = $sf$$.call(this, $d$$9$$, $$u$$1_t$$8$$, $x$$55$$) || $d$$9$$);
              if ("" === $d$$9$$ || $d$$9$$ && $d$$9$$.toString && "" === $d$$9$$.toString().replace(/^[\s\n]+$/, "") || !$$$$25$$.isArray($d$$9$$) && !$$$$25$$.isPlainObject($d$$9$$)) {
                return $error_func$$.call(this, $x$$55$$, $$u$$1_t$$8$$, "");
              }
              ($d$$9$$ = this.$_parseJson$($d$$9$$, $obj$$84$$)) ? (-1 !== $obj$$84$$ && $obj$$84$$ ? ($obj$$84$$.append($d$$9$$).children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$84$$.removeData("oj-tree-is-loading")) : ($$u$$1_t$$8$$ = this.$_$container_ul$, $$u$$1_t$$8$$.empty().append($d$$9$$.children()), $$u$$1_t$$8$$.attr("role", "tree").attr("tabindex", "0").css("outline", "none"), -1 === this.$_data$.$core$.$selectMode$ && $$u$$1_t$$8$$.attr("aria-multiselectable", !0)), 
              this.$_clean_node$($obj$$84$$), $s_call$$4$$ && $s_call$$4$$.call(this)) : -1 !== $obj$$84$$ && $obj$$84$$ ? ($obj$$84$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$84$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$84$$), $s_call$$4$$ && $s_call$$4$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$4$$ && $s_call$$4$$.call(this));
            }, $d$$7_s$$23$$.ajax.context = this, $d$$7_s$$23$$.ajax.error = $error_func$$, $d$$7_s$$23$$.ajax.success = $success_func$$, $d$$7_s$$23$$.dataType || ($d$$7_s$$23$$.ajax.dataType = "json"), $$$$25$$.isFunction($d$$7_s$$23$$.ajax.url) && ($d$$7_s$$23$$.ajax.url = $d$$7_s$$23$$.ajax.url.call(this, $obj$$84$$)), $$$$25$$.isFunction($d$$7_s$$23$$.ajax.data) && ($d$$7_s$$23$$.ajax.data = $d$$7_s$$23$$.ajax.data.call(this, $obj$$84$$)), $$$$25$$.ajax($d$$7_s$$23$$.ajax);
        }
      }
    }, $_parseJson$:function($js$$1$$, $obj$$85_ul2$$, $isRecurse_ul1$$) {
      var $d$$10$$ = !1, $tmp$$5$$, $i$$255$$, $j$$38$$, $title$$10$$;
      if (!$js$$1$$) {
        return $d$$10$$;
      }
      this.$_data$.$ds$.$progressiveUnload$ && $obj$$85_ul2$$ && -1 !== $obj$$85_ul2$$ && $obj$$85_ul2$$.data("oj-tree-children", $d$$10$$);
      if ("string" == typeof $js$$1$$) {
        try {
          $js$$1$$ = $$$$25$$.parseJSON($js$$1$$);
        } catch ($err$$11$$) {
          $js$$1$$ = [];
        }
      }
      if ($$$$25$$.isArray($js$$1$$)) {
        $d$$10$$ = $$$$25$$("\x3cul\x3e");
        if (!$js$$1$$.length) {
          return!1;
        }
        $i$$255$$ = 0;
        for ($j$$38$$ = $js$$1$$.length;$i$$255$$ < $j$$38$$;$i$$255$$++) {
          $tmp$$5$$ = this.$_parseJson$($js$$1$$[$i$$255$$], $obj$$85_ul2$$, !0), $tmp$$5$$.length && ($d$$10$$ = $d$$10$$.append($tmp$$5$$));
        }
        $d$$10$$ = $d$$10$$.children();
      } else {
        "string" == typeof $js$$1$$ && ($js$$1$$ = {data:$js$$1$$});
        $title$$10$$ = "string" == typeof $js$$1$$.title ? $js$$1$$.title : " ";
        $d$$10$$ = $$$$25$$("\x3cli role\x3d'treeitem' /\x3e");
        $js$$1$$.attr && (this.$_data$.types.$defType$ && !$js$$1$$.attr.type && ($js$$1$$.attr.type = "oj-tree-deftype"), $d$$10$$.attr($js$$1$$.attr));
        $js$$1$$.metadata && $d$$10$$.data($js$$1$$.metadata);
        ($js$$1$$.state || $js$$1$$.children && 0 === $js$$1$$.children.length) && $d$$10$$.addClass("oj-tree-" + ("expanded" === $js$$1$$.state ? "open" : "closed"));
        $js$$1$$.data || ($js$$1$$.data = {dummy:0});
        var $ht$$1$$ = this.$_data$.$core$.$htmlTitles$, $bIns$$ = !1, $sp$$2$$;
        $tmp$$5$$ = $$$$25$$("\x3ca tabindex\x3d'-1' /\x3e");
        $$$$25$$.each($js$$1$$.data, function($i$$256$$, $m$$25$$) {
          $$$$25$$.isFunction($m$$25$$) && ($m$$25$$ = $m$$25$$.call(this, $js$$1$$));
          "string" != typeof $m$$25$$ && ("attr" == $i$$256$$ ? $tmp$$5$$.attr($m$$25$$) : "style" == $i$$256$$ && $tmp$$5$$.css($m$$25$$), "language" == $i$$256$$ && $tmp$$5$$.addClass($m$$25$$));
          $bIns$$ || ($sp$$2$$ = $$$$25$$("\x3cspan class\x3d'oj-tree-title'\x3e"), $sp$$2$$[$ht$$1$$ ? "html" : "text"]($title$$10$$), $tmp$$5$$.prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e", $sp$$2$$), $bIns$$ = !0);
          !$m$$25$$.icon && $js$$1$$.icon && ($m$$25$$.icon = $js$$1$$.icon);
          $m$$25$$.icon && (-1 === $m$$25$$.icon.indexOf("/") ? $tmp$$5$$.children("ins").addClass($m$$25$$.icon) : $tmp$$5$$.children("ins").css("background", "url('" + $m$$25$$.icon + "') center center no-repeat"));
        });
        $d$$10$$.append($tmp$$5$$);
        $d$$10$$.prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e");
        $js$$1$$.children && (this.$_data$.$ds$.$progressiveRender$ && "expanded" !== $js$$1$$.state ? $d$$10$$.addClass("oj-tree-closed").attr("aria-expanded", "false").data("oj-tree-children", $js$$1$$.children) : (this.$_data$.$ds$.$progressiveUnload$ && $d$$10$$.data("oj-tree-children", $js$$1$$.children), $$$$25$$.isArray($js$$1$$.children) && $js$$1$$.children.length && ($tmp$$5$$ = this.$_parseJson$($js$$1$$.children, $obj$$85_ul2$$, !0), $tmp$$5$$.length && ($obj$$85_ul2$$ = $$$$25$$("\x3cul role\x3d'group' /\x3e"), 
        $obj$$85_ul2$$.append($tmp$$5$$), $d$$10$$.append($obj$$85_ul2$$)))));
      }
      $isRecurse_ul1$$ || ($isRecurse_ul1$$ = $$$$25$$("\x3cul /\x3e"), $isRecurse_ul1$$.append($d$$10$$), $d$$10$$ = $isRecurse_ul1$$);
      return $d$$10$$;
    }, $_correct_state$:function($obj$$86$$) {
      $obj$$86$$ = this.$_getNode$($obj$$86$$);
      if (!$obj$$86$$ || -1 === $obj$$86$$) {
        return!1;
      }
      $obj$$86$$.removeClass("oj-tree-closed oj-tree-open").removeAttr("aria-expanded").addClass("oj-tree-leaf").children("ul").remove();
      this.$_emitEvent$({obj:$obj$$86$$}, "correct_state");
    }, $_core_notify$:function($n$$31$$, $data$$139$$) {
      $data$$139$$.$opened$ && this.$_expand$($n$$31$$, !1, !0);
    }, $_loaded$:function() {
      this.$_emitEvent$(null, "loaded");
    }, $_load_node_html$:function($obj$$87$$, $s_call$$5$$, $e_call$$5$$) {
      function $success_func$$1$$() {
      }
      function $error_func$$1$$() {
      }
      var $d$$11_s$$24$$ = this.$_getOptions$().data, $data$$140$$ = $d$$11_s$$24$$ && $d$$11_s$$24$$.data || null, $ajax$$2$$ = $d$$11_s$$24$$ && $d$$11_s$$24$$.ajax || null;
      if (($obj$$87$$ = this.$_getNode$($obj$$87$$)) && -1 !== $obj$$87$$) {
        if ($obj$$87$$.data("oj-tree-is-loading")) {
          return;
        }
        $obj$$87$$.data("oj-tree-is-loading", !0);
      }
      switch(!0) {
        case !$data$$140$$ && !$ajax$$2$$ && $d$$11_s$$24$$ && "string" === typeof $d$$11_s$$24$$:
          this.$_loadHtmlString$($d$$11_s$$24$$, $obj$$87$$, $s_call$$5$$, $e_call$$5$$);
          break;
        case $$$$25$$.isFunction($data$$140$$):
          $data$$140$$.call(this, $obj$$87$$, $$$$25$$.proxy(function($d$$12$$) {
            this.$_loadHtmlString$($d$$12$$, $obj$$87$$, $s_call$$5$$, $e_call$$5$$);
          }, this));
          break;
        case !$data$$140$$ && !$ajax$$2$$:
          $obj$$87$$ && -1 != $obj$$87$$ || (this.$_$container_ul$.empty().append(this.$_data$.html.$cloneMarkup$).find("li, a").filter(function() {
            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
          }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), this.$_insertHtmlTextSpan$(this.$_$container_ul$), this.$_data$.types.$defType$ && this.$_addDefType$(this.$_$container_ul$), this.$_clean_node$(), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"), this.$_$container_ul$.find("a").attr("tabindex", -1));
          $s_call$$5$$ && $s_call$$5$$.call(this);
          break;
        case !!$data$$140$$ && !$ajax$$2$$ || !!$data$$140$$ && !!$ajax$$2$$ && (!$obj$$87$$ || -1 === $obj$$87$$):
          $obj$$87$$ && -1 != $obj$$87$$ || ($d$$11_s$$24$$ = $$$$25$$($data$$140$$), $d$$11_s$$24$$.is("ul") || ($d$$11_s$$24$$ = $$$$25$$("\x3cul /\x3e").append($d$$11_s$$24$$)), this.$_$container_ul$.empty().append($d$$11_s$$24$$.children()).find("li, a").filter(function() {
            return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
          }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), this.$_insertHtmlTextSpan$(this.$_$container_ul$), this.$_data$.types.$defType$ && this.$_addDefType$(this.$_$container_ul$), this.$_clean_node$(), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"), this.$_$container_ul$.find("a").attr("tabindex", "-1"));
          $s_call$$5$$ && $s_call$$5$$.call(this);
          break;
        case !$data$$140$$ && !!$ajax$$2$$ || !!$data$$140$$ && !!$ajax$$2$$ && $obj$$87$$ && -1 !== $obj$$87$$:
          $obj$$87$$ = this.$_getNode$($obj$$87$$), $error_func$$1$$ = function $$error_func$$1$$$($x$$56$$, $t$$9$$, $e$$83$$) {
            var $ef$$1$$ = this.$_getOptions$().data.ajax.error;
            $ef$$1$$ && $ef$$1$$.call(this, $x$$56$$, $t$$9$$, $e$$83$$);
            -1 != $obj$$87$$ && $obj$$87$$.length ? ($obj$$87$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$87$$.removeData("oj-tree-is-loading"), "success" === $t$$9$$ && this.$_data$.$ds$.$correctState$ && this.$_correct_state$($obj$$87$$)) : "success" === $t$$9$$ && this.$_data$.$ds$.$correctState$ && this.$_$container_ul$.empty();
            $e_call$$5$$ && $e_call$$5$$.call(this);
          }, $success_func$$1$$ = function $$success_func$$1$$$($d$$13_parent$$26$$, $t$$10$$, $x$$57$$) {
            var $sf$$1$$ = this.$_getOptions$().data.ajax.success;
            $sf$$1$$ && ($d$$13_parent$$26$$ = $sf$$1$$.call(this, $d$$13_parent$$26$$, $t$$10$$, $x$$57$$) || $d$$13_parent$$26$$);
            if ("" === $d$$13_parent$$26$$ || $d$$13_parent$$26$$ && $d$$13_parent$$26$$.toString && "" === $d$$13_parent$$26$$.toString().replace(/^[\s\n]+$/, "")) {
              return $error_func$$1$$.call(this, $x$$57$$, $t$$10$$, "");
            }
            $d$$13_parent$$26$$ ? ($d$$13_parent$$26$$ = $$$$25$$($d$$13_parent$$26$$), $d$$13_parent$$26$$.is("ul") || ($d$$13_parent$$26$$ = $$$$25$$("\x3cul /\x3e").append($d$$13_parent$$26$$)), -1 != $obj$$87$$ && $obj$$87$$ ? ($obj$$87$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), this.$_removeEmptyUL$($obj$$87$$), $obj$$87$$.append($d$$13_parent$$26$$).children("ul").find("li, a").filter(function() {
              return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
            }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), $obj$$87$$.removeData("oj-tree-is-loading"), $d$$13_parent$$26$$ = $obj$$87$$) : (this.$_$container_ul$.empty().append($d$$13_parent$$26$$.children()).find("li, a").filter(function() {
              return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
            }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), $d$$13_parent$$26$$ = this.$_$container_ul$), this.$_handleHtmlParentNoChildren$($d$$13_parent$$26$$), this.$_insertHtmlTextSpan$($d$$13_parent$$26$$), this.$_data$.types.$defType$ && $d$$13_parent$$26$$ && this.$_addDefType$(this.$_$container_ul$), this.$_clean_node$($obj$$87$$), $s_call$$5$$ && $s_call$$5$$.call(this)) : 
            ($obj$$87$$ && -1 !== $obj$$87$$ ? ($obj$$87$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$87$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$87$$), $s_call$$5$$ && $s_call$$5$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$5$$ && $s_call$$5$$.call(this)), this.$_$container_ul$.find("ul").attr("role", "group"), this.$_$container_ul$.find("li").attr("role", "treeitem"));
          }, $d$$11_s$$24$$.ajax.context = this, $d$$11_s$$24$$.ajax.error = $error_func$$1$$, $d$$11_s$$24$$.ajax.success = $success_func$$1$$, $d$$11_s$$24$$.ajax.dataType || ($d$$11_s$$24$$.ajax.dataType = "html"), $$$$25$$.isFunction($d$$11_s$$24$$.ajax.url) && ($d$$11_s$$24$$.ajax.url = $d$$11_s$$24$$.ajax.url.call(this, $obj$$87$$)), $$$$25$$.isFunction($d$$11_s$$24$$.ajax.data) && ($d$$11_s$$24$$.ajax.data = $d$$11_s$$24$$.ajax.data.call(this, $obj$$87$$)), $$$$25$$.ajax($d$$11_s$$24$$.ajax);
      }
    }, $_handleHtmlParentNoChildren$:function($lazy$$1_parent$$27$$) {
      $lazy$$1_parent$$27$$ = $lazy$$1_parent$$27$$.find($lazy$$1_parent$$27$$.is("ul") ? "li ul" : "ul").filter(function() {
        return!this.firstChild || 0 == this.childNodes.length || 1 == this.childNodes.length && 3 == this.firstChild.nodeType;
      });
      $$$$25$$.each($lazy$$1_parent$$27$$, function() {
        $$$$25$$(this).closest("li").addClass("oj-tree-closed");
      });
    }, $_removeEmptyUL$:function($l$$12_parent$$28$$) {
      $l$$12_parent$$28$$ = $l$$12_parent$$28$$.find("ul").filter(function() {
        return!this.firstChild || 0 == this.childNodes.length || 1 == this.childNodes.length && 3 == this.firstChild.nodeType;
      });
      0 < $l$$12_parent$$28$$.length && $l$$12_parent$$28$$.remove();
    }, $_loadHtmlString$:function($parent$$29_s$$25$$, $obj$$88$$, $s_call$$6$$) {
      $parent$$29_s$$25$$ && "" !== $parent$$29_s$$25$$ && $parent$$29_s$$25$$.toString && "" !== $parent$$29_s$$25$$.toString().replace(/^[\s\n]+$/, "") ? ($parent$$29_s$$25$$ = $$$$25$$($parent$$29_s$$25$$), $parent$$29_s$$25$$.is("ul") || ($parent$$29_s$$25$$ = $$$$25$$("\x3cul /\x3e").append($parent$$29_s$$25$$)), -1 != $obj$$88$$ && $obj$$88$$ ? ($obj$$88$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), $obj$$88$$.append($parent$$29_s$$25$$).children("ul").find("li, a").filter(function() {
        return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
      }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), $obj$$88$$.removeData("oj-tree-is-loading"), $parent$$29_s$$25$$ = $obj$$88$$, this.$_addDefType$(this.$obj$)) : (this.$_$container_ul$.empty().append($parent$$29_s$$25$$.children()).find("li, a").filter(function() {
        return!this.firstChild || !this.firstChild.tagName || "INS" !== this.firstChild.tagName;
      }).prepend("\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e").end().filter("a").children("ins:first-child").not(".oj-tree-icon").addClass("oj-tree-icon"), $parent$$29_s$$25$$ = this.$_$container_ul$, this.$_addDefType$(this.$_$container_ul$)), $parent$$29_s$$25$$ && this.$_insertHtmlTextSpan$($parent$$29_s$$25$$), this.$_clean_node$($obj$$88$$), $s_call$$6$$ && $s_call$$6$$.call(this)) : $obj$$88$$ && -1 !== $obj$$88$$ ? ($obj$$88$$.children("a.oj-tree-loading").removeClass("oj-tree-loading"), 
      $obj$$88$$.removeData("oj-tree-is-loading"), this.$_data$.$ds$.$correctState$ && (this.$_correct_state$($obj$$88$$), $s_call$$6$$ && $s_call$$6$$.call(this))) : this.$_data$.$ds$.$correctState$ && (this.$_$container_ul$.empty(), $s_call$$6$$ && $s_call$$6$$.call(this));
    }, $_insertHtmlTextSpan$:function($elem$$44$$) {
      $$$$25$$.each($elem$$44$$.find("li a"), function($i$$257$$, $val$$48$$) {
        var $ih$$ = $val$$48$$.innerHTML, $ih$$ = $ih$$.replace("ins\x3e", "ins\x3e\x3cspan class\x3d'oj-tree-title'\x3e");
        $val$$48$$.innerHTML = $ih$$ + "\x3c/span\x3e";
      });
    }, $_addDefType$:function($obj$$89$$) {
      var $s$$26$$, $typeAttr$$;
      this.$_data$.types.$defType$ && ($typeAttr$$ = ($s$$26$$ = this.options.types) ? $s$$26$$.attr : this.$_data$.types.$defaults$.attr, $$$$25$$.each($obj$$89$$.find("li"), function($i$$258$$, $val$$49$$) {
        $val$$49$$ = $$$$25$$($val$$49$$);
        $val$$49$$.attr($typeAttr$$) || $val$$49$$.attr($typeAttr$$, "oj-tree-deftype");
      }));
    }, $_dnd_prepare$:function() {
      var $a$$78_vars$$ = this.$_data$.dnd.$vars$;
      if ($a$$78_vars$$.$r$ && $a$$78_vars$$.$r$.length) {
        this.$_data$.dnd.off = $a$$78_vars$$.$r$.offset();
        this.$_isRtl$ && (this.$_data$.dnd.off.right = this.$_data$.dnd.off.left + $a$$78_vars$$.$r$.width() - $a$$78_vars$$.$r$.find("\x3ea").width() - 18);
        this.$_data$.dnd.$targ_ml_width$ = $a$$78_vars$$.$r$.find("a").width();
        if (this.$_data$.dnd.$foreign$) {
          return $a$$78_vars$$ = this.options.dnd.drag_check.call(this, {o:$a$$78_vars$$.$o$, r:$a$$78_vars$$.$r$}), this.$_data$.dnd.after = $a$$78_vars$$.after, this.$_data$.dnd.before = $a$$78_vars$$.before, this.$_data$.dnd.inside = $a$$78_vars$$.inside, this.$_data$.dnd.$prepared$ = !0, this.$_dnd_show$();
        }
        this.$_prepare_move$($a$$78_vars$$.$o$, $a$$78_vars$$.$r$, "before");
        this.$_data$.dnd.before = this.check_move();
        this.$_prepare_move$($a$$78_vars$$.$o$, $a$$78_vars$$.$r$, "after");
        this.$_data$.dnd.after = this.check_move();
        this.$_is_loaded$($a$$78_vars$$.$r$) ? (this.$_prepare_move$($a$$78_vars$$.$o$, $a$$78_vars$$.$r$, "inside"), this.$_data$.dnd.inside = this.check_move()) : this.$_data$.dnd.inside = !1;
        this.$_data$.dnd.$prepared$ = !0;
        return this.$_dnd_show$();
      }
    }, $_dnd_show$:function() {
      var $dnd_mLeft$$ = this.$_data$.dnd, $isParent$$1_o$$15$$ = !1, $mlLeft_pos$$10$$;
      if ($dnd_mLeft$$.$prepared$) {
        var $isParent$$1_o$$15$$ = ["before", "inside", "after"], $r$$4$$ = !1, $ctl$$ = $dnd_mLeft$$.$ctl$, $vars$$1$$ = $dnd_mLeft$$.$vars$, $isParent$$1_o$$15$$ = $dnd_mLeft$$.$w$ < this.$_data$.$core$.$li_height$ / 3 ? ["before", "inside", "after"] : $dnd_mLeft$$.$w$ <= 2 * this.$_data$.$core$.$li_height$ / 3 ? $dnd_mLeft$$.$w$ < this.$_data$.$core$.$li_height$ / 2 ? ["inside", "before", "after"] : ["inside", "after", "before"] : ["after", "inside", "before"];
        $$$$25$$.each($isParent$$1_o$$15$$, $$$$25$$.proxy(function($i$$259$$, $val$$50$$) {
          if (this.$_data$.dnd[$val$$50$$]) {
            return $ctl$$.helper.children("ins").removeClass("oj-tree-invalid").addClass("oj-tree-ok"), $r$$4$$ = $val$$50$$, !1;
          }
        }, this));
        !1 === $r$$4$$ && $ctl$$.helper.children("ins").removeClass("oj-tree-ok").addClass("oj-tree-invalid");
        $mlLeft_pos$$10$$ = this.$_isRtl$ ? this.$_data$.dnd.off.right - 18 : this.$_data$.dnd.off.left + 10;
        $isParent$$1_o$$15$$ = !this.isLeaf($vars$$1$$.$r$);
        $dnd_mLeft$$ = this.$_isRtl$ ? $mlLeft_pos$$10$$ + this.$_data$.dnd.$targ_ml_width$ + 18 : $mlLeft_pos$$10$$;
        $mlLeft_pos$$10$$ = this.$_isRtl$ ? $dnd_mLeft$$ - this.$_data$.dnd.$ml_width$ : $mlLeft_pos$$10$$ + 8;
        switch($r$$4$$) {
          case "before":
            $vars$$1$$.$m$.css({left:$dnd_mLeft$$ + "px", top:this.$_data$.dnd.off.top - 8 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.css({left:$mlLeft_pos$$10$$ + "px", top:this.$_data$.dnd.off.top - 3 + "px"}).show();
            break;
          case "after":
            $vars$$1$$.$m$.css({left:$dnd_mLeft$$ + "px", top:this.$_data$.dnd.off.top + this.$_data$.$core$.$li_height$ - 8 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.css({left:$mlLeft_pos$$10$$ + "px", top:this.$_data$.dnd.off.top + this.$_data$.$core$.$li_height$ - 3 + "px"}).show();
            break;
          case "inside":
            $vars$$1$$.$m$.css({left:$dnd_mLeft$$ + (this.$_isRtl$ ? $isParent$$1_o$$15$$ ? -4 : 0 : 4) + "px", top:this.$_data$.dnd.off.top + this.$_data$.$core$.$li_height$ / 2 - 5 + "px"}).show();
            $vars$$1$$.$ml$ && $vars$$1$$.$ml$.hide();
            break;
          default:
            $vars$$1$$.$m$.hide(), $vars$$1$$.$ml$ && $vars$$1$$.$ml$.hide();
        }
        return $vars$$1$$.$last_pos$ = $r$$4$$;
      }
    }, $_dnd_enter$:function($obj$$90_openTimeout_s$$27$$) {
      var $dnd$$1$$ = this.$_data$.dnd, $vars$$2$$ = $dnd$$1$$.$vars$;
      $dnd$$1$$.$mto$ && (clearTimeout($dnd$$1$$.$mto$), $dnd$$1$$.$mto$ = !1);
      $dnd$$1$$.$prepared$ = !1;
      $vars$$2$$.$r$ = this.$_getNode$($obj$$90_openTimeout_s$$27$$);
      $obj$$90_openTimeout_s$$27$$ = this.options.dnd;
      var $checkTimeout$$ = $obj$$90_openTimeout_s$$27$$.check_timeout;
      $checkTimeout$$ ? ($dnd$$1$$.$to1$ && clearTimeout($dnd$$1$$.$to1$), $dnd$$1$$.$to1$ = setTimeout($$$$25$$.proxy(this.$_dnd_prepare$, this), $checkTimeout$$)) : this.$_dnd_prepare$();
      ($obj$$90_openTimeout_s$$27$$ = $obj$$90_openTimeout_s$$27$$.open_timeout) ? ($dnd$$1$$.$to2$ && clearTimeout($dnd$$1$$.$to2$), $vars$$2$$.$r$ && $vars$$2$$.$r$.length && $vars$$2$$.$r$.hasClass("oj-tree-closed") && ($dnd$$1$$.$to2$ = setTimeout($$$$25$$.proxy(this.$_dnd_open$, this), $obj$$90_openTimeout_s$$27$$))) : $vars$$2$$.$r$ && $vars$$2$$.$r$.length && $vars$$2$$.$r$.hasClass("oj-tree-closed") && this.$_dnd_open$();
    }, $_dnd_leave$:function($e$$84$$) {
      var $dnd$$2$$ = this.$_data$.dnd, $vars$$3$$ = this.$_data$.dnd.$vars$;
      $dnd$$2$$.after = !1;
      $dnd$$2$$.before = !1;
      $dnd$$2$$.inside = !1;
      this.$_data$.dnd.$ctl$.helper.children("ins").removeClass("oj-tree-ok").addClass("oj-tree-invalid");
      $vars$$3$$.$m$.hide();
      $vars$$3$$.$ml$ && $vars$$3$$.$ml$.hide();
      $vars$$3$$.$r$ && $vars$$3$$.$r$[0] === $e$$84$$.target.parentNode && ($dnd$$2$$.$to1$ && (clearTimeout($dnd$$2$$.$to1$), $dnd$$2$$.$to1$ = !1), $dnd$$2$$.$to2$ && (clearTimeout($dnd$$2$$.$to2$), $dnd$$2$$.$to2$ = !1));
    }, $_dnd_open$:function() {
      var $vars$$4$$ = this.$_data$.dnd.$vars$;
      this.$_data$.dnd.$to2$ = !1;
      this.expand($vars$$4$$.$r$, $$$$25$$.proxy(this.$_dnd_prepare$, this), !0);
    }, $_dnd_finish$:function($e$$85$$) {
      var $dnd$$3$$ = this.$_data$.dnd, $vars$$5$$ = this.$_data$.dnd.$vars$;
      $dnd$$3$$.$foreign$ ? ($dnd$$3$$.after || $dnd$$3$$.before || $dnd$$3$$.inside) && this.options.dnd.drag_finish.call(this, {o:$vars$$5$$.$o$, r:$vars$$5$$.$r$, p:$vars$$5$$.$last_pos$}) : (this.$_dnd_prepare$(), this.$_move_node$($vars$$5$$.$o$, $vars$$5$$.$r$, $vars$$5$$.$last_pos$, $e$$85$$[this.options.dnd.copy_modifier + "Key"]));
      $vars$$5$$.$o$ = !1;
      $vars$$5$$.$r$ = !1;
      $vars$$5$$.$m$.hide();
      $vars$$5$$.$ml$ && $vars$$5$$.$ml$.hide();
    }, $_start_drag$:function($obj$$91$$, $e$$86$$) {
      var $dnd$$4$$ = this.$_data$.dnd, $vars$$6$$ = this.$_data$.dnd.$vars$;
      $vars$$6$$.$o$ = this.$_getNode$($obj$$91$$);
      if (!$vars$$6$$.$o$.hasClass("oj-disabled") && !this.$_data$.$core$.locked) {
        this.$_data$.ui && this.isSelected($vars$$6$$.$o$) && ($vars$$6$$.$o$ = this.$_getNode$(null, !0));
        var $dt$$ = 1 < $vars$$6$$.$o$.length ? this.$getTranslatedString$("m_multisel") : this.getText($vars$$6$$.$o$), $cnt$$ = this.$_$container$;
        this.$_data$.$core$.$htmlTitles$ || ($dt$$ = $dt$$.replace(/</ig, "\x26lt;").replace(/>/ig, "\x26gt;"));
        this.$_drag_start$($e$$86$$, {$jstree$:!0, $obj$:$vars$$6$$.$o$}, "\x3cins class\x3d'oj-tree-icon'\x3e\x3c/ins\x3e" + $dt$$);
        this.$_data$.$themes$ && ($vars$$6$$.$m$ && $vars$$6$$.$m$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $dnd$$4$$.$ctl$.helper.addClass("oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$));
        $dnd$$4$$.$cof$ = $cnt$$.offset();
        $dnd$$4$$.$cw$ = parseInt($cnt$$.width(), 10);
        $dnd$$4$$.ch = parseInt($cnt$$.height(), 10);
        $dnd$$4$$.$active$ = !0;
      }
    }, $_drag_start$:function($e$$87$$, $data$$141$$, $html$$4$$) {
      var $ctl$$1$$ = this.$_data$.dnd.$ctl$;
      $ctl$$1$$.$is_drag$ && this.$_drag_stop$();
      try {
        $e$$87$$.currentTarget.unselectable = "on", $e$$87$$.currentTarget.onselectstart = function $$e$$87$$$currentTarget$onselectstart$() {
          return!1;
        }, $e$$87$$.currentTarget.style && ($e$$87$$.currentTarget.style.MozUserSelect = "none");
      } catch ($err$$12$$) {
      }
      $ctl$$1$$.$init_x$ = $e$$87$$.pageX;
      $ctl$$1$$.$init_y$ = $e$$87$$.pageY;
      $ctl$$1$$.$user_data$ = $data$$141$$;
      $ctl$$1$$.$is_down$ = !0;
      $ctl$$1$$.helper = $$$$25$$("\x3cdiv class\x3d'ojtreeu-dragged' /\x3e").html($html$$4$$);
      $$$$25$$(document).bind("mousemove", this.$_drag$.bind(this));
      $$$$25$$(document).bind("mouseup", this.$_drag_stop$.bind(this));
      return!1;
    }, $_drag$:function($e$$88$$) {
      var $ctl$$2$$ = this.$_data$.dnd.$ctl$, $vars$$7$$ = this.$_data$.dnd.$vars$;
      if ($ctl$$2$$.$is_down$) {
        if (!$ctl$$2$$.$is_drag$) {
          if (5 < Math.abs($e$$88$$.pageX - $ctl$$2$$.$init_x$) || 5 < Math.abs($e$$88$$.pageY - $ctl$$2$$.$init_y$)) {
            $ctl$$2$$.helper.appendTo("body"), $ctl$$2$$.$is_drag$ = !0, $$$$25$$(document).triggerHandler("drag_start.ojtreeu", [{event:$e$$88$$, data:$ctl$$2$$.$user_data$}]);
          } else {
            return;
          }
        }
        if ("mousemove" === $e$$88$$.type) {
          var $d$$14_l$$13$$ = $$$$25$$(document), $t$$11$$ = $d$$14_l$$13$$.scrollTop(), $d$$14_l$$13$$ = $d$$14_l$$13$$.scrollLeft();
          20 > $e$$88$$.pageY - $t$$11$$ ? ($vars$$7$$.$sti$ && "down" === $vars$$7$$.$dir1$ && (clearInterval($vars$$7$$.$sti$), $vars$$7$$.$sti$ = void 0), $vars$$7$$.$sti$ || ($vars$$7$$.$dir1$ = "up", $vars$$7$$.$sti$ = setInterval(function() {
            $$$$25$$(document).scrollTop($$$$25$$(document).scrollTop() - $ctl$$2$$.$scroll_spd$);
          }, 150))) : $vars$$7$$.$sti$ && "up" === $vars$$7$$.$dir1$ && (clearInterval($vars$$7$$.$sti$), $vars$$7$$.$sti$ = void 0);
          20 > $$$$25$$(window).height() - ($e$$88$$.pageY - $t$$11$$) ? ($vars$$7$$.$sti$ && "up" === $vars$$7$$.$dir1$ && (clearInterval($vars$$7$$.$sti$), $vars$$7$$.$sti$ = void 0), $vars$$7$$.$sti$ || ($vars$$7$$.$dir1$ = "down", $vars$$7$$.$sti$ = setInterval(function() {
            $$$$25$$(document).scrollTop(Number($$$$25$$(document).scrollTop()) + $ctl$$2$$.$scroll_spd$);
          }, 150))) : $vars$$7$$.$sti$ && "down" === $vars$$7$$.$dir1$ && (clearInterval($vars$$7$$.$sti$), $vars$$7$$.$sti$ = void 0);
          20 > $e$$88$$.pageX - $d$$14_l$$13$$ ? ($vars$$7$$.$sli$ && "right" === $vars$$7$$.$dir2$ && (clearInterval($vars$$7$$.$sli$), $vars$$7$$.$sli$ = void 0), $vars$$7$$.$sli$ || ($vars$$7$$.$dir2$ = "left", $vars$$7$$.$sli$ = setInterval(function() {
            $$$$25$$(document).scrollLeft($$$$25$$(document).scrollLeft() - $ctl$$2$$.$scroll_spd$);
          }, 150))) : $vars$$7$$.$sli$ && "left" === $vars$$7$$.$dir2$ && (clearInterval($vars$$7$$.$sli$), $vars$$7$$.$sli$ = void 0);
          20 > $$$$25$$(window).width() - ($e$$88$$.pageX - $d$$14_l$$13$$) ? ($vars$$7$$.$sli$ && "left" === $vars$$7$$.$dir2$ && (clearInterval($vars$$7$$.$sli$), $vars$$7$$.$sli$ = void 0), $vars$$7$$.$sli$ || ($vars$$7$$.$dir2$ = "right", $vars$$7$$.$sli$ = setInterval(function() {
            $$$$25$$(document).scrollLeft(Number($$$$25$$(document).scrollLeft()) + $ctl$$2$$.$scroll_spd$);
          }, 150))) : $vars$$7$$.$sli$ && "right" === $vars$$7$$.$dir2$ && (clearInterval($vars$$7$$.$sli$), $vars$$7$$.$sli$ = void 0);
        }
        $ctl$$2$$.helper.css({left:$e$$88$$.pageX + $ctl$$2$$.$helper_left$ + "px", top:$e$$88$$.pageY + $ctl$$2$$.$helper_top$ + "px"});
        $$$$25$$(document).triggerHandler("drag.ojtreeu", [{event:$e$$88$$, data:$ctl$$2$$.$user_data$}]);
      }
    }, $_drag_stop$:function($e$$89$$) {
      var $vars$$8$$ = this.$_data$.dnd.$vars$, $ctl$$3$$ = this.$_data$.dnd.$ctl$;
      $vars$$8$$.$sli$ && clearInterval($vars$$8$$.$sli$);
      $vars$$8$$.$sti$ && clearInterval($vars$$8$$.$sti$);
      $$$$25$$(document).unbind("mousemove", this.$_drag$.bind(this));
      $$$$25$$(document).unbind("mouseup", this.$_drag_stop$.bind(this));
      $$$$25$$(document).triggerHandler("drag_stop.ojtreeu", [{event:$e$$89$$ ? $e$$89$$ : {}, data:$ctl$$3$$.$user_data$}]);
      $ctl$$3$$.helper.remove();
      $ctl$$3$$.$init_x$ = 0;
      $ctl$$3$$.$init_y$ = 0;
      $ctl$$3$$.$user_data$ = {};
      $ctl$$3$$.$is_down$ = !1;
      $ctl$$3$$.$is_drag$ = !1;
    }, $_save_opened$:function() {
      var $_this$$17$$ = this;
      this.$_data$.$core$.$toExpand$ = [];
      this.$_$container_ul$.find("li.oj-tree-open").each(function() {
        this.id && $_this$$17$$.$_data$.$core$.$toExpand$.push("#" + this.id.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:"));
      });
      this.$_emitEvent$($_this$$17$$.$_data$.$core$.$toExpand$, "save_opened");
    }, $_reload_nodes$:function($bExpandAll_is_callback$$) {
      var $_this$$18$$ = this, $done$$1$$ = !0, $current$$7$$ = [], $remaining$$ = [];
      $bExpandAll_is_callback$$ || (this.$_data$.$core$.$reopen$ = !1, this.$_data$.$core$.$refreshing$ = !0, ($bExpandAll_is_callback$$ = "all" === this.$_data$.$core$.$toExpand$) ? this.$_data$.$core$.$toExpand$ = [] : "array" === $$$$25$$.type(this.$_data$.$core$.$toExpand$) && 0 < this.$_data$.$core$.$toExpand$.length && "all" === this.$_data$.$core$.$toExpand$[0] && (this.$_data$.$core$.$toExpand$.length = 0, $bExpandAll_is_callback$$ = !0), $bExpandAll_is_callback$$ && this.$_$container_ul$.find("li.oj-tree-closed").each(function() {
        $$$$25$$(this).attr("id");
        $_this$$18$$.$_data$.$core$.$toExpand$.push("#" + $$$$25$$(this).attr("id"));
      }), this.$_data$.$core$.$toExpand$ = $$$$25$$.map($$$$25$$.makeArray(this.$_data$.$core$.$toExpand$), function($n$$32$$) {
        return "#" + $n$$32$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
      }), this.$_data$.$core$.$toLoad$ = $$$$25$$.map($$$$25$$.makeArray(this.$_data$.$core$.$toLoad$), function($n$$33$$) {
        return "#" + $n$$33$$.toString().replace(/^#/, "").replace(/\\\//g, "/").replace(/\//g, "\\/").replace(/\\\./g, ".").replace(/\./g, "\\.").replace(/\:/g, "\\:");
      }), this.$_data$.$core$.$toExpand$.length && (this.$_data$.$core$.$toLoad$ = this.$_data$.$core$.$toLoad$.concat(this.$_data$.$core$.$toExpand$)));
      this.$_data$.$core$.$toLoad$.length && ($$$$25$$.each(this.$_data$.$core$.$toLoad$, function($i$$260$$, $val$$51$$) {
        if ("#" == $val$$51$$) {
          return!0;
        }
        $$$$25$$($val$$51$$).length ? $current$$7$$.push($val$$51$$) : $remaining$$.push($val$$51$$);
      }), $current$$7$$.length && (this.$_data$.$core$.$toLoad$ = $remaining$$, $$$$25$$.each($current$$7$$, function($i$$261$$, $val$$52$$) {
        $_this$$18$$.$_is_loaded$($val$$52$$) || ($_this$$18$$.$_load_node$($val$$52$$, function() {
          $_this$$18$$.$_reload_nodes$(!0);
        }, function() {
          $_this$$18$$.$_reload_nodes$(!0);
        }), $done$$1$$ = !1);
      })));
      this.$_data$.$core$.$toExpand$.length && $$$$25$$.each(this.$_data$.$core$.$toExpand$, function($i$$262$$, $val$$53$$) {
        $_this$$18$$.expand($val$$53$$, !1, !0);
      });
      $done$$1$$ && (this.$_data$.$core$.$reopen$ && clearTimeout(this.$_data$.$core$.$reopen$), this.$_data$.$core$.$reopen$ = setTimeout(function() {
        $_this$$18$$.$_emitEvent$({}, "reload_nodes");
      }, 50), this.$_data$.$core$.$refreshing$ = !1, this.$_reopen$());
    }, set_theme:function($theme_name$$, $theme_url$$) {
      if (!$theme_name$$) {
        return!1;
      }
      $theme_url$$ || ($theme_url$$ = this.$_data$.$themes$.$_themes$ + $theme_name$$ + "/style.css");
      -1 == $$$$25$$.inArray($theme_url$$, this.$_data$.$themes$.$themes_loaded$) && ($_addSheet$$({url:$theme_url$$}), this.$_data$.$themes$.$themes_loaded$.push($theme_url$$));
      this.$_data$.$themes$.$theme$ != $theme_name$$ && (this.$_$container$.removeClass("oj-tree-" + this.$_data$.$themes$.$theme$), this.$_data$.$themes$.$theme$ = $theme_name$$);
      this.$_$container$.addClass("oj-tree-" + $theme_name$$);
      this.$_data$.$themes$.$dots$ ? this.$_showDots$() : this.$_hideDots$();
      this.$_data$.$themes$.icons ? this.$_showIcons$() : this.$_hideIcons$();
      this.$_emitEvent$(null, "set_theme");
    }, isIcons:function() {
      return this.$_data$.$themes$.icons;
    }, $_showIcons$:function() {
      this.$_data$.$themes$.icons = !0;
      this.$_$container$.children("ul").removeClass("oj-tree-no-icons");
    }, $_hideIcons$:function() {
      this.$_data$.$themes$.icons = !1;
      this.$_$container$.children("ul").addClass("oj-tree-no-icons");
    }, toggleIcons:function() {
    }, $_enableKeys$:function() {
      this.$_data$.keys.$enabled$ = !0;
    }, $_initTree$:function() {
      this.$_initData$();
      this.$_initCoreOpts$();
      this.$_initDSOpts$(!0);
      this.$_initTypeOpts$();
      this.$_initDnDOpts$();
      this.$_initCore$();
      this.$_initUI$();
      this.$_initThemes$();
      this.$_initDataSource$();
      this.$_initTypes$();
      this.$_initDnD$();
      this.$_initMenu$();
      this.$_start$();
    }, $_emitEvent$:function($data$$142$$, $eventname$$) {
      if ($eventname$$ && "string" === $$$$25$$.type($eventname$$)) {
        var $args$$14_rslt$$8$$, $func$$11_inst$$;
        $args$$14_rslt$$8$$ = Array.prototype.slice.call(arguments);
        var $evname_s$$inline_759$$ = $eventname$$;
        $func$$11_inst$$ = this.$_$container$;
        var $isBefore$$ = "before" === $eventname$$, $b$$inline_762_isPublic$$ = !1, $item$$13$$;
        if (!0 !== this.$_data$.$core$.locked || "unlock" === $eventname$$ || "isLocked" === $eventname$$ || "lock" === $eventname$$) {
          $evname_s$$inline_759$$ = $eventname$$;
          "rename_node" === $evname_s$$inline_759$$ ? $evname_s$$inline_759$$ = "rename" : "set_focus" === $evname_s$$inline_759$$ ? $evname_s$$inline_759$$ = "focus" : "unset_focus" === $evname_s$$inline_759$$ ? $evname_s$$inline_759$$ = "unfocus" : "delete_node" === $evname_s$$inline_759$$ ? $evname_s$$inline_759$$ = "remove" : "move_node" === $evname_s$$inline_759$$ ? $evname_s$$inline_759$$ = "move" : "create_node" === $evname_s$$inline_759$$ && ($evname_s$$inline_759$$ = "create");
          ($b$$inline_762_isPublic$$ = 0 <= $$$$25$$.inArray($evname_s$$inline_759$$, $_aEvNames$$)) || "create_node" != $evname_s$$inline_759$$ || ($b$$inline_762_isPublic$$ = !0);
          $b$$inline_762_isPublic$$ || ($evname_s$$inline_759$$ = "tree" + $evname_s$$inline_759$$);
          $item$$13$$ = $data$$142$$ ? $data$$142$$.obj : void 0;
          "loaded" === $evname_s$$inline_759$$ && ($item$$13$$ = -1);
          var $eventdata$$ = {};
          $eventdata$$.item = $item$$13$$;
          $eventdata$$.inst = $func$$11_inst$$;
          if ($isBefore$$) {
            $func$$11_inst$$ = $data$$142$$.func, $eventdata$$.func = $func$$11_inst$$, $eventdata$$.args = $args$$14_rslt$$8$$, "rename" === $func$$11_inst$$ && ($eventdata$$.title = $data$$142$$.title, $eventdata$$.prevTitle = $data$$142$$.prevTitle);
          } else {
            if ($b$$inline_762_isPublic$$) {
              if ("move" == $evname_s$$inline_759$$) {
                $eventdata$$.position = $data$$142$$.$p$, $eventdata$$.reference = $data$$142$$.$r$, $eventdata$$.data = $data$$142$$;
              } else {
                if ("rename" == $evname_s$$inline_759$$) {
                  $eventdata$$.title = $data$$142$$.title, $eventdata$$.prevTitle = $data$$142$$.prevTitle;
                } else {
                  if ("remove" == $evname_s$$inline_759$$) {
                    $eventdata$$.parent = $data$$142$$.parent, $eventdata$$.prev = $data$$142$$.prev;
                  } else {
                    if ("delete" == $evname_s$$inline_759$$) {
                      $eventdata$$.prev = $data$$142$$.prev, $eventdata$$.parent = $data$$142$$.parent;
                    } else {
                      if ("expandAll" === $evname_s$$inline_759$$ || "collapseAll" === $evname_s$$inline_759$$ || "deselectAll" === $evname_s$$inline_759$$) {
                        $eventdata$$.targ = $data$$142$$.targ;
                      }
                    }
                  }
                }
              }
            }
          }
          if ($b$$inline_762_isPublic$$) {
            if ($args$$14_rslt$$8$$ = this._trigger($evname_s$$inline_759$$, new $$$$25$$.Event("oj" + $evname_s$$inline_759$$), $eventdata$$), $isBefore$$) {
              return "undefined" != typeof $args$$14_rslt$$8$$ && ($args$$14_rslt$$8$$ = $args$$14_rslt$$8$$ ? !0 : !1), $args$$14_rslt$$8$$;
            }
          } else {
            this.$_$container$.trigger($evname_s$$inline_759$$, $eventdata$$);
          }
        }
      }
    }, $__rollback$:function() {
      return this.get_rollback();
    }, $__call_old$:function() {
    }, $_start$:function() {
      this.$set_focus$();
      this.$_isRtl$ && this.$_$container$.addClass("oj-tree-rtl").css("direction", "rtl");
      this.$_$container$.html("\x3cul role\x3d'tree' tabindex\x3d'0' class\x3d'oj-tree-list' style\x3d'outline:none'" + (-1 === this.$_data$.$core$.$selectMode$ ? " aria-multiselectable\x3d'true'" : "") + "\x3e\x3cli class\x3d'oj-tree-last oj-tree-leaf'\x3e\x3cins\x3e\x26#160;\x3c/ins\x3e\x3ca class\x3d'oj-tree-loading' href\x3d'#'\x3e\x3cins class\x3d'oj-tree-icon'\x3e\x26#160;\x3c/ins\x3e" + this.$getTranslatedString$("m_loading") + "\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e");
      this.$_$container_ul$ = this.$_$container$.children("ul:eq(0)");
      this.$_$container$.data("oj-tree-instance-id", this.$_index$);
      this.$_data$.$core$.$li_height$ = this.$_$container_ul$.find("li.oj-tree-closed, li.oj-tree-leaf").eq(0).height() || 18;
      this.$_$container$.delegate(".oj-tree-list li \x3e ins", "click.ojtree", $$$$25$$.proxy(function($event$$301_trgt$$) {
        $event$$301_trgt$$ = $$$$25$$($event$$301_trgt$$.target);
        this.toggleExpand($event$$301_trgt$$);
      }, this)).bind("mousedown.ojtree", $$$$25$$.proxy(function() {
        this.$set_focus$();
      }, this)).bind("dblclick.ojtree", function() {
        var $sel$$2$$;
        if (document.selection && document.selection.empty) {
          document.selection.empty();
        } else {
          if (window.getSelection) {
            $sel$$2$$ = window.getSelection();
            try {
              $sel$$2$$.removeAllRanges(), $sel$$2$$.collapse(document.getElementsByTagName("body")[0], 0);
            } catch ($err$$13$$) {
            }
          }
        }
      });
      this.$_$container_ul$.focus($$$$25$$.proxy(function() {
        this.$_data$.ui.$focused$ = !0;
      }, this)).blur($$$$25$$.proxy(function() {
        this.$_data$.ui.$focused$ = !1;
      }, this));
      this.$_data$.$core$.$load_open$ && this.$_$container$.bind("treeload_node", $$$$25$$.proxy(function($e$$92$$, $ui$$19$$) {
        var $o$$16$$ = this.$_getNode$($ui$$19$$.item);
        -1 === $o$$16$$ && ($o$$16$$ = this.$_$container_ul$);
        $o$$16$$.length && $o$$16$$.find("li.oj-tree-open:not(:has(ul))").each(function() {
          this.$_load_node$(this, $$$$25$$.noop, $$$$25$$.noop);
        });
      }, this));
      this.$_emitEvent$({}, "init");
      this.$_loadNodes$();
      this.$_data$.menu.$usermenu$ && this.$_applyMenu$();
      $_addKeyFilter$$({$_handler$:this.$_keyHandler$, $_selector$:this.$_$container_ul$, $_this$:this});
      this.$_enableKeys$();
    }, $_initCore$:function() {
      this.$_data$.$core$.locked = !1;
      this.$_$container$.addClass("oj-tree oj-tree-" + this.$_index$);
      this.$_$container$.css("outline", "none");
      this.$_$container$.css("MozUserSelect", "none");
      this.$_$container$.css("WebkitTouchCallout", "none");
      this.$_$container$.css("WebkitUserSelect", "none");
      this.$_$container$.css("WebkitTapHighlightColor", "rgba(0,0,0,0)");
    }, $_initUI$:function() {
      this.$_data$.ui.selected = $$$$25$$();
      this.$_data$.ui.$last_selected$ = !1;
      this.$_data$.ui.$hovered$ = null;
      this.$_$container$.delegate(".oj-tree-list a", "click.ojtree", $$$$25$$.proxy(function($event$$303$$) {
        $event$$303$$.preventDefault();
        $event$$303$$.currentTarget.blur();
        $$$$25$$($event$$303$$.currentTarget).hasClass("oj-tree-loading") || (this.$set_focus$(), this.$_select$($event$$303$$.currentTarget, !0, $event$$303$$));
      }, this)).delegate(".oj-tree-list a", "mouseenter.ojtree", $$$$25$$.proxy(function($event$$304$$) {
        $$$$25$$($event$$304$$.currentTarget).hasClass("oj-tree-loading") || this.hover($event$$304$$.target);
      }, this)).delegate(".oj-tree-list a", "mouseleave.ojtree", $$$$25$$.proxy(function($event$$305$$) {
        $$$$25$$($event$$305$$.currentTarget).hasClass("oj-tree-loading") || this.dehover($event$$305$$.target);
      }, this)).bind("treereopen", $$$$25$$.proxy(function() {
        this.reselect();
      }, this)).bind("treeget_rollback", $$$$25$$.proxy(function() {
        this.dehover();
        this.save_selected();
      }, this)).bind("treeset_rollback", $$$$25$$.proxy(function() {
        this.reselect();
      }, this)).bind("ojcollapse", $$$$25$$.proxy(function($event$$306$$, $ui$$20$$) {
        var $obj$$92$$ = this.$_getNode$($ui$$20$$.item), $clk$$ = $obj$$92$$ && $obj$$92$$.length ? $obj$$92$$.children("ul").find("a.oj-tree-clicked") : $$$$25$$();
        !1 !== this.options.selectedParentCollapse && $clk$$.length && $clk$$.each(function() {
          this.deselect(this);
          "selectParent" === this.options.selectedParentCollapse && this.select($obj$$92$$);
        });
      }, this)).bind("ojremove", $$$$25$$.proxy(function($event$$307$$, $ui$$21$$) {
        var $s$$28$$ = this.options.selectPrevOnDelete, $clk$$1_obj$$93$$ = this.$_getNode$($ui$$21$$.item), $clk$$1_obj$$93$$ = $clk$$1_obj$$93$$ && $clk$$1_obj$$93$$.length ? $clk$$1_obj$$93$$.find("a.oj-tree-clicked") : [], $_this$$20$$ = this;
        $clk$$1_obj$$93$$.each(function() {
          $_this$$20$$.deselect(this);
        });
        $s$$28$$ && $clk$$1_obj$$93$$.length && $ui$$21$$.prev.each(function() {
          if (this.parentNode) {
            return $_this$$20$$.select(this), !1;
          }
        });
      }, this)).bind("ojmove", $$$$25$$.proxy(function($event$$308$$, $ui$$22$$) {
        var $data$$143$$ = $ui$$22$$.data;
        $data$$143$$.cy && ($data$$143$$.oc.find("a.oj-tree-clicked").removeClass("oj-tree-clicked"), $data$$143$$.oc.removeAttr("aria-selected"));
      }, this));
    }, $_initDataSource$:function() {
      this.$_initTreeData$();
      this.$_initJsonData$();
      this.$_initHtmlData$();
    }, $_initTreeData$:function() {
      1 === this.$_data$.$ds$.type && (this.$_tds$ = this.options.data || null, this.$_load_node$ = this.$_load_node_DS$, this.$_is_loaded$ = this.$_is_loaded_DS$, this.$_refresh$ = this.$_refresh_DS$);
    }, $_initJsonData$:function() {
      3 === this.$_data$.$ds$.type && (this.$_data$.$ds$.$progressiveUnload$ && this.$_$container$.bind("treeafter_close", function($e$$93$$, $ui$$23$$) {
        $ui$$23$$.item.children("ul").remove();
      }), this.$_load_node$ = this.$_load_node_J$, this.$_is_loaded$ = this.$_is_loaded_J$, this.$_refresh$ = this.$_refresh_json$);
    }, $_initHtmlData$:function() {
      4 === this.$_data$.$ds$.type && (this.$_processExistingMarkup$(), this.$_load_node$ = this.$_load_node_H$, this.$_is_loaded$ = this.$_is_loaded_H$, this.$_refresh$ = this.$_refresh_ui$);
    }, $_processExistingMarkup$:function() {
      this.$_data$.html.$useExistingMarkup$ && (this.$_data$.html.$markup_ul$ || (this.$_data$.html.$markup_ul$ = this.$_$container$.find(" \x3e ul"), this.$_data$.html.$markup_div$ = $$$$25$$("\x3cdiv id\x3d'oj-tree-existing-markup-" + this.$_index$ + "' style\x3d'display:none'\x3e").append(this.$_data$.html.$markup_ul$), this.$_$container$.after(this.$_data$.html.$markup_div$)), this.$_data$.html.$markup$ = this.$_data$.html.$markup_ul$.find(" \x3e li"), this.$_data$.html.$cloneMarkup$ = this.$_data$.html.$markup$.clone(!0), 
      this.$_data$.html.$cloneMarkup$.find("li").addBack().contents().filter(function() {
        return 3 == this.nodeType;
      }).remove());
    }, $_initThemes$:function() {
      !1 === this.$_data$.$themes$.$_themes$ && $$$$25$$("script").each(function() {
        if (this.src.toString().match(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/)) {
          return this.$_data$.$themes$.$_themes$ = this.src.toString().replace(/jquery\.oj-tree[^\/]*?\.js(\?.*)?$/, "") + "themes/", !1;
        }
      });
      !1 === this.$_data$.$themes$.$_themes$ && (this.$_data$.$themes$.$_themes$ = "themes/");
      this.$_$container$.bind("treeinit", $$$$25$$.proxy(function() {
        var $s$$29$$ = this.options;
        this.$_data$.$themes$.$dots$ = $s$$29$$.dots;
        this.$_data$.$themes$.icons = $s$$29$$.icons;
        this.set_theme(this.$_data$.$themes$.$theme$, this.$_data$.$themes$.url);
      }, this)).bind("ojloaded", $$$$25$$.proxy(function() {
        this.$_data$.$themes$.$dots$ ? this.$_showDots$() : this.$_hideDots$();
        this.$_data$.$themes$.icons ? this.$_showIcons$() : this.$_hideIcons$();
      }, this));
    }, $_initTypes$:function() {
      var $s$$30$$ = this.options.types;
      $s$$30$$ && this.$_$container$.bind("treeinit", $$$$25$$.proxy(function() {
        var $types$$ = $$$$25$$.extend(!0, {}, $s$$30$$.types), $attr$$19$$ = $s$$30$$.attr || this.$_data$.types.$defaults$.attr, $icons_css$$ = "", $_this$$21$$ = this;
        $$$$25$$.each($types$$, function($i$$263$$, $tp$$) {
          $$$$25$$.each($tp$$, function($k$$7$$) {
            /^(maxDepth|maxChildren|icon|validChildren)$/.test($k$$7$$) || $_this$$21$$.$_data$.types.$attachTo$.push($k$$7$$);
          });
          var $ot$$ = typeof $tp$$.icon;
          if ("undefined" === $ot$$) {
            $ot$$ = typeof $tp$$.image;
            if ("boolean" === $ot$$ && !$tp$$.image) {
              $tp$$.image = "ojt$none";
            } else {
              if (!$tp$$.image && !$tp$$.position) {
                return!0;
              }
            }
            $tp$$.icon = {};
            $tp$$.image && ($tp$$.icon.image = $tp$$.image, delete $tp$$.image);
            void 0 !== $tp$$.position && ($tp$$.icon.position = $tp$$.position, delete $tp$$.position);
          }
          if ($tp$$.icon.image || $tp$$.icon.position) {
            "default" == $i$$263$$ ? ($_this$$21$$.$_data$.types.$defType$ = !0, $icons_css$$ += ".oj-tree-" + $_this$$21$$.$_index$ + " .oj-tree-list a \x3e .oj-tree-icon { ", $icons_css$$ += $_this$$21$$.$_addTypeCss$($tp$$, $icons_css$$), $icons_css$$ += "} ", $icons_css$$ += ".oj-tree-" + $_this$$21$$.$_index$ + " .oj-tree-list li[" + $attr$$19$$ + '\x3d"oj-tree-deftype"] \x3e a .oj-tree-icon { ') : $tp$$.icon.image && ($icons_css$$ += ".oj-tree-" + $_this$$21$$.$_index$ + " .oj-tree-list li[" + 
            $attr$$19$$ + '\x3d"' + $i$$263$$ + '"] \x3e a \x3e ins.oj-tree-icon { '), $icons_css$$ += $_this$$21$$.$_addTypeCss$($tp$$, $icons_css$$), $icons_css$$ += "} ";
          }
        });
        "" !== $icons_css$$ && $_addSheet$$({$str$:$icons_css$$, title:"oj-tree-types"});
      }, this)).bind("ojbefore", $$$$25$$.proxy(function($e$$94$$, $data$$144$$) {
        var $d$$15_o$$17_s$$31$$, $ty$$1$$, $func$$12$$ = $data$$144$$.func, $item$$14$$ = $data$$144$$.item;
        if (($d$$15_o$$17_s$$31$$ = ($d$$15_o$$17_s$$31$$ = this.$_data$.types.$defaults$.useData ? this.$_getNode$($item$$14$$) : !1) && -1 !== $d$$15_o$$17_s$$31$$ && $d$$15_o$$17_s$$31$$.length ? $d$$15_o$$17_s$$31$$.data("oj-tree") : !1) && $d$$15_o$$17_s$$31$$.types && !1 === $d$$15_o$$17_s$$31$$[$func$$12$$] || -1 !== $$$$25$$.inArray($func$$12$$, this.$_data$.types.$attachTo$) && $data$$144$$.item && ($data$$144$$.item.tagName || $data$$144$$.item.jquery) && ($d$$15_o$$17_s$$31$$ = this.options.types.types, 
        $ty$$1$$ = this.$_getType$($item$$14$$), ($d$$15_o$$17_s$$31$$[$ty$$1$$] && "undefined" !== typeof $d$$15_o$$17_s$$31$$[$ty$$1$$][$func$$12$$] || $d$$15_o$$17_s$$31$$["default"] && "undefined" !== typeof $d$$15_o$$17_s$$31$$["default"][$func$$12$$]) && !1 === this.$_check$($func$$12$$, $item$$14$$))) {
          return $e$$94$$.stopImmediatePropagation(), !1;
        }
      }, this));
    }, $_addTypeCss$:function($tp$$1$$) {
      var $css$$2$$ = "", $css$$2$$ = "ojt$none" !== $tp$$1$$.icon.image ? $css$$2$$ + (" background-image:url(" + $tp$$1$$.icon.image + "); ") : $css$$2$$ + " background-image:none; ";
      return $css$$2$$ = $tp$$1$$.icon.position ? $css$$2$$ + (" background-position:" + $tp$$1$$.icon.position + "; ") : $css$$2$$ + " background-position:0 0; ";
    }, $_initDnD$:function() {
      if (this.$_data$.dnd.$reorder$) {
        var $s$$32_vars$$9$$ = this.$_data$.dnd.$vars$;
        $s$$32_vars$$9$$.$m$ = $$$$25$$("\x3cdiv /\x3e").addClass("oj-tree-marker").hide().html("\x26raquo;").bind("mouseleave mouseenter", $$$$25$$.proxy(function($e$$95$$) {
          var $vars$$10$$ = this.$_data$.dnd.$vars$;
          $vars$$10$$.$m$.hide();
          $vars$$10$$.$ml$.hide();
          $e$$95$$.preventDefault();
          $e$$95$$.stopImmediatePropagation();
          return!1;
        }, this)).appendTo("body");
        this.$_isRtl$ && $s$$32_vars$$9$$.$m$.addClass("oj-tree-marker-rtl");
        $s$$32_vars$$9$$.$ml$ = $$$$25$$("\x3cdiv /\x3e").addClass("oj-tree-marker-line").hide().bind("mouseup", function($e$$96$$) {
          var $vars$$11$$ = this.$_data$.dnd.$vars$;
          if ($vars$$11$$.$r$ && $vars$$11$$.$r$.length) {
            return $vars$$11$$.$r$.children("a").trigger($e$$96$$), $e$$96$$.preventDefault(), $e$$96$$.stopImmediatePropagation(), !1;
          }
        }).bind("mouseleave", $$$$25$$.proxy(function($e$$97$$) {
          var $vars$$12$$ = this.$_data$.dnd.$vars$, $rt$$ = $$$$25$$($e$$97$$.relatedTarget);
          if (($rt$$.is(".oj-tree") || 0 === $rt$$.closest(".oj-tree").length) && $vars$$12$$.$r$ && $vars$$12$$.$r$.length) {
            return $vars$$12$$.$r$.children("a").trigger($e$$97$$), $vars$$12$$.$m$.hide(), $vars$$12$$.$ml$.hide(), $e$$97$$.preventDefault(), $e$$97$$.stopImmediatePropagation(), !1;
          }
        }, this)).appendTo("body");
        this.$_data$.dnd.$ml_width$ = $s$$32_vars$$9$$.$ml$.width();
        $$$$25$$(document).bind("drag_start.ojtreeu", $$$$25$$.proxy(function($e$$98$$, $data$$145$$) {
          var $vars$$13$$ = this.$_data$.dnd.$vars$;
          $data$$145$$.data.$jstree$ && ($vars$$13$$.$m$.show(), $vars$$13$$.$ml$ && $vars$$13$$.$ml$.show());
        }, this));
        $$$$25$$(document).bind("drag_stop.ojtreeu", $$$$25$$.proxy(function($e$$99$$, $data$$146$$) {
          var $vars$$14$$ = this.$_data$.dnd.$vars$;
          $data$$146$$.data.$jstree$ && ($vars$$14$$.$m$.hide(), $vars$$14$$.$ml$ && $vars$$14$$.$ml$.hide());
        }, this));
        this.$_$container$.bind("mouseenter.ojtree", $$$$25$$.proxy(function($e$$100_tr$$1$$) {
          var $ctl$$4$$ = this.$_data$.dnd.$ctl$, $dc_vars$$15$$ = this.$_data$.dnd.$vars$;
          $ctl$$4$$.$is_drag$ && $ctl$$4$$.$user_data$.$jstree$ && (this.options.themes && ($dc_vars$$15$$.$m$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $dc_vars$$15$$.$ml$ && $dc_vars$$15$$.$ml$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $ctl$$4$$.helper.addClass("oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$)), $e$$100_tr$$1$$.currentTarget === $e$$100_tr$$1$$.target && $ctl$$4$$.$user_data$.$obj$ && $$$$25$$($ctl$$4$$.$user_data$.$obj$).length && $$$$25$$($ctl$$4$$.$user_data$.$obj$).parents(".oj-tree:eq(0)")[0] !== 
          $e$$100_tr$$1$$.target && ($e$$100_tr$$1$$ = this.$_reference$($e$$100_tr$$1$$.target), $e$$100_tr$$1$$.data.dnd.$foreign$ ? ($dc_vars$$15$$ = $e$$100_tr$$1$$.options.dnd.drag_check.call(this, {o:$dc_vars$$15$$.$o$, r:$e$$100_tr$$1$$.$_$container$, is_root:!0}), !0 !== $dc_vars$$15$$ && !0 !== $dc_vars$$15$$.inside && !0 !== $dc_vars$$15$$.before && !0 !== $dc_vars$$15$$.after || $ctl$$4$$.helper.children("ins").removeClass("oj-tree-invalid").addClass("oj-tree-ok")) : ($e$$100_tr$$1$$.$_prepare_move$($dc_vars$$15$$.$o$, 
          $e$$100_tr$$1$$.$_$container$, "last"), $e$$100_tr$$1$$.check_move() && $ctl$$4$$.helper.children("ins").removeClass("oj-tree-invalid").addClass("oj-tree-ok"))));
        }, this)).bind("mouseup.ojtree", $$$$25$$.proxy(function($dc$$1_e$$101$$) {
          var $vars$$16$$ = this.$_data$.dnd.$vars$, $ctl$$5_tr$$2$$ = this.$_data$.dnd.$ctl$;
          $ctl$$5_tr$$2$$.$is_drag$ && $ctl$$5_tr$$2$$.$user_data$.$jstree$ && $dc$$1_e$$101$$.currentTarget === $dc$$1_e$$101$$.target && $ctl$$5_tr$$2$$.$user_data$.$obj$ && $$$$25$$($ctl$$5_tr$$2$$.$user_data$.$obj$).length && $$$$25$$($ctl$$5_tr$$2$$.$user_data$.$obj$).parents(".oj-tree:eq(0)")[0] !== $dc$$1_e$$101$$.target && ($ctl$$5_tr$$2$$ = this.$_reference$($dc$$1_e$$101$$.currentTarget), $ctl$$5_tr$$2$$.data.dnd.foreign ? ($dc$$1_e$$101$$ = $ctl$$5_tr$$2$$.$_getOptions$().dnd.drag_check.call(this, 
          {o:$vars$$16$$.$o$, r:$ctl$$5_tr$$2$$.$_$container$, is_root:!0}), !0 !== $dc$$1_e$$101$$ && !0 !== $dc$$1_e$$101$$.inside && !0 !== $dc$$1_e$$101$$.before && !0 !== $dc$$1_e$$101$$.after || $ctl$$5_tr$$2$$.$_getOptions$().dnd.drag_finish.call(this, {o:$vars$$16$$.$o$, r:$ctl$$5_tr$$2$$.$_$container$, is_root:!0})) : $ctl$$5_tr$$2$$.$_move_node$($vars$$16$$.$o$, $ctl$$5_tr$$2$$.$_$container$, "last", $dc$$1_e$$101$$[$ctl$$5_tr$$2$$.options.dnd.copy_modifier + "Key"]));
        }, this)).bind("mouseleave.ojtree", $$$$25$$.proxy(function($e$$102$$) {
          var $ctl$$6$$ = this.$_data$.dnd.$ctl$;
          if ($e$$102$$.relatedTarget && $$$$25$$($e$$102$$.relatedTarget).hasClass("oj-tree-marker-line")) {
            return!1;
          }
          $ctl$$6$$.$is_drag$ && $ctl$$6$$.$user_data$.$jstree$ && (this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$), this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$), this.$_data$.dnd.$to1$ && clearTimeout(this.$_data$.dnd.$to1$), this.$_data$.dnd.$to2$ && clearTimeout(this.$_data$.dnd.$to2$), $ctl$$6$$.helper.children("ins").hasClass("oj-tree-ok") && $ctl$$6$$.helper.children("ins").removeClass("oj-tree-ok").addClass("oj-tree-invalid"));
        }, this)).bind("mousemove.ojtree", $$$$25$$.proxy(function($e$$103$$) {
          var $ctl$$7$$ = this.$_data$.dnd.$ctl$;
          if ($ctl$$7$$.$is_drag$ && $ctl$$7$$.$user_data$.$jstree$) {
            var $cnt$$1$$ = this.$_$container$[0];
            $e$$103$$.pageX + 24 > this.$_data$.dnd.$cof$.left + this.$_data$.dnd.$cw$ ? (this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$), this.$_data$.dnd.$i1$ = setInterval($$$$25$$.proxy(function() {
              this.scrollLeft += $ctl$$7$$.$scroll_spd$;
            }, $cnt$$1$$), 100)) : $e$$103$$.pageX - 24 < this.$_data$.dnd.$cof$.left ? (this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$), this.$_data$.dnd.$i1$ = setInterval($$$$25$$.proxy(function() {
              this.scrollLeft -= $ctl$$7$$.$scroll_spd$;
            }, $cnt$$1$$), 100)) : this.$_data$.dnd.$i1$ && clearInterval(this.$_data$.dnd.$i1$);
            $e$$103$$.pageY + 24 > this.$_data$.dnd.$cof$.top + this.$_data$.dnd.ch ? (this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$), this.$_data$.dnd.$i2$ = setInterval($$$$25$$.proxy(function() {
              this.scrollTop += $ctl$$7$$.$scroll_spd$;
            }, $cnt$$1$$), 100)) : $e$$103$$.pageY - 24 < this.$_data$.dnd.$cof$.top ? (this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$), this.$_data$.dnd.$i2$ = setInterval($$$$25$$.proxy(function() {
              this.scrollTop -= $ctl$$7$$.$scroll_spd$;
            }, $cnt$$1$$), 100)) : this.$_data$.dnd.$i2$ && clearInterval(this.$_data$.dnd.$i2$);
          }
        }, this)).bind("scroll.ojtree", $$$$25$$.proxy(function() {
          var $ctl$$8$$ = this.$_data$.dnd.$ctl$, $vars$$17$$ = this.$_data$.dnd.$vars$;
          $ctl$$8$$.$is_drag$ && $ctl$$8$$.$user_data$.$jstree$ && $vars$$17$$.$m$ && $vars$$17$$.$ml$ && ($vars$$17$$.$m$.hide(), $vars$$17$$.$ml$.hide());
        }, this)).delegate(".oj-tree-list a", "mousedown.ojtree", $$$$25$$.proxy(function($e$$105$$) {
          if (1 === $e$$105$$.which) {
            return this.$_start_drag$($e$$105$$.currentTarget, $e$$105$$), !1;
          }
        }, this)).delegate(".oj-tree-list a", "mouseenter.ojtree", $$$$25$$.proxy(function($e$$106$$) {
          var $ctl$$9$$ = this.$_data$.dnd.$ctl$;
          $ctl$$9$$.$is_drag$ && $ctl$$9$$.$user_data$.$jstree$ && this.$_dnd_enter$($e$$106$$.currentTarget);
        }, this)).delegate(".oj-tree-list a", "mousemove.ojtree", $$$$25$$.proxy(function($e$$107$$) {
          var $ctl$$10$$ = this.$_data$.dnd.$ctl$, $vars$$18$$ = this.$_data$.dnd.$vars$;
          $ctl$$10$$.$is_drag$ && $ctl$$10$$.$user_data$.$jstree$ && ($vars$$18$$.$r$ && $vars$$18$$.$r$.length && $vars$$18$$.$r$.children("a")[0] === $e$$107$$.currentTarget || this.$_dnd_enter$($e$$107$$.currentTarget), "undefined" === typeof this.$_data$.dnd.off.top && (this.$_data$.dnd.off = $$$$25$$($e$$107$$.target).offset()), "undefined" === typeof this.$_data$.dnd.off.top && (this.$_data$.dnd.off = $$$$25$$($e$$107$$.target).offset()), this.$_data$.dnd.$w$ = ($e$$107$$.pageY - (this.$_data$.dnd.off.top || 
          0)) % this.$_data$.$core$.$li_height$, 0 > this.$_data$.dnd.$w$ && (this.$_data$.dnd.$w$ += this.$_data$.$core$.$li_height$), this.$_dnd_show$());
        }, this)).delegate(".oj-tree-list a", "mouseleave.ojtree", $$$$25$$.proxy(function($e$$108$$) {
          var $ctl$$11$$ = this.$_data$.dnd.$ctl$, $vars$$19$$ = this.$_data$.dnd.$vars$;
          if ($ctl$$11$$.$is_drag$ && $ctl$$11$$.$user_data$.$jstree$) {
            if ($e$$108$$.relatedTarget && $$$$25$$($e$$108$$.relatedTarget).hasClass("oj-tree-marker-line")) {
              return!1;
            }
            $vars$$19$$.$m$ && $vars$$19$$.$m$.hide();
            $vars$$19$$.$ml$ && $vars$$19$$.$ml$.hide();
            this.$_data$.dnd.$mto$ = setTimeout(function($t$$13$$) {
              return function() {
                $t$$13$$.$_dnd_leave$($e$$108$$);
              };
            }(this), 0);
          }
        }, this)).delegate(".oj-tree-list a", "mouseup.ojtree", $$$$25$$.proxy(function($e$$109$$) {
          var $ctl$$12$$ = this.$_data$.dnd.$ctl$;
          $ctl$$12$$.$is_drag$ && $ctl$$12$$.$user_data$.$jstree$ && this.$_dnd_finish$($e$$109$$);
        }, this));
        $$$$25$$(document).bind("drag_stop.ojtreeu", $$$$25$$.proxy(function() {
          var $dnd$$5$$ = this.$_data$.dnd, $vars$$20$$ = this.$_data$.dnd.$vars$;
          $dnd$$5$$.$to1$ && clearTimeout($dnd$$5$$.$to1$);
          $dnd$$5$$.$to2$ && clearTimeout($dnd$$5$$.$to2$);
          $dnd$$5$$.$i1$ && clearInterval($dnd$$5$$.$i1$);
          $dnd$$5$$.$i2$ && clearInterval($dnd$$5$$.$i2$);
          $dnd$$5$$.after = !1;
          $dnd$$5$$.before = !1;
          $dnd$$5$$.inside = !1;
          $dnd$$5$$.off = !1;
          $dnd$$5$$.$prepared$ = !1;
          $dnd$$5$$.$w$ = !1;
          $dnd$$5$$.$to1$ = !1;
          $dnd$$5$$.$to2$ = !1;
          $dnd$$5$$.$i1$ = !1;
          $dnd$$5$$.$i2$ = !1;
          $dnd$$5$$.$active$ = !1;
          $dnd$$5$$.$foreign$ = !1;
          $vars$$20$$.$m$ && $vars$$20$$.$m$.css({top:"-2000px"});
          $vars$$20$$.$ml$ && $vars$$20$$.$ml$.css({top:"-2000px"});
        }, this)).bind("drag_start.ojtreeu", $$$$25$$.proxy(function($e$$110$$, $data$$147$$) {
          if ($data$$147$$.data.$jstree$) {
            var $et$$ = $$$$25$$($data$$147$$.event.target);
            $et$$.closest(".jstree").hasClass("oj-tree-" + this.$_index$) && this.$_dnd_enter$($et$$);
          }
        }, this));
        $s$$32_vars$$9$$ = this.options.dnd;
        $s$$32_vars$$9$$.drag_target && $$$$25$$(document).delegate($s$$32_vars$$9$$.drag_target, "mousedown.ojtree-" + this.$_index$, $$$$25$$.proxy(function($e$$111$$) {
          var $cnt$$2_ctl$$13$$ = this.$_data$.dnd.$ctl$, $dnd$$6$$ = this.$_data$.dnd, $vars$$21$$ = this.$_data$.dnd.$vars$;
          $vars$$21$$.$o$ = $e$$111$$.target;
          this.$_drag_start$($e$$111$$, {$jstree$:!0, $obj$:$e$$111$$.target}, "\x3cins class\x3d'oj-tree-icon'\x3e\x3c/ins\x3e" + $$$$25$$($e$$111$$.target).text());
          this.$_data$.$themes$ && ($vars$$21$$.$m$ && $vars$$21$$.$m$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $vars$$21$$.$ml$ && $vars$$21$$.$ml$.addClass("oj-tree-" + this.$_data$.$themes$.$theme$), $cnt$$2_ctl$$13$$.helper.addClass("oj-tree-dnd-helper oj-tree-" + this.$_data$.$themes$.$theme$));
          $cnt$$2_ctl$$13$$.helper.children("ins").removeClass("oj-tree-ok").addClass("oj-tree-invalid");
          $cnt$$2_ctl$$13$$ = this.$_$container$;
          $dnd$$6$$.$cof$ = $cnt$$2_ctl$$13$$.offset();
          $dnd$$6$$.$cw$ = parseInt($cnt$$2_ctl$$13$$.width(), 10);
          $dnd$$6$$.ch = parseInt($cnt$$2_ctl$$13$$.height(), 10);
          $dnd$$6$$.$foreign$ = !0;
          $e$$111$$.preventDefault();
        }, this));
        $s$$32_vars$$9$$.drop_target && $$$$25$$(document).delegate($s$$32_vars$$9$$.drop_target, "mouseenter.ojtreex-" + this.$_index$, $$$$25$$.proxy(function($e$$112$$) {
          var $dnd$$7$$ = this.$_data$.dnd, $vars$$22$$ = this.$_data$.dnd.$vars$;
          $dnd$$7$$.$active$ && this.options.dnd.drop_check.call(this, {o:$vars$$22$$.$o$, r:$$$$25$$($e$$112$$.target), e:$e$$112$$}) && $dnd$$7$$.$ctl$.helper.children("ins").removeClass("oj-tree-invalid").addClass("oj-tree-ok");
        }, this)).delegate($s$$32_vars$$9$$.drop_target, "mouseleave.ojtree-" + this.$_index$, $$$$25$$.proxy(function() {
          this.$_data$.dnd.$active$ && this.$_data$.dnd.$ctl$.helper.children("ins").removeClass("oj-tree-ok").addClass("oj-tree-invalid");
        }, this)).delegate($s$$32_vars$$9$$.drop_target, "mouseup.ojtreex-" + this.$_index$, $$$$25$$.proxy(function($e$$114$$) {
          var $vars$$23$$ = this.$_data$.dnd.$vars$;
          this.$_data$.dnd.$active$ && this.$_data$.dnd.$ctl$.helper.children("ins").hasClass("oj-tree-ok") && this.options.dnd.drop_finish.call(this, {o:$vars$$23$$.$o$, r:$$$$25$$($e$$114$$.target), e:$e$$114$$});
        }, this));
      }
    }, $_initDnDOpts$:function() {
      this.$_data$.dnd.$reorder$ = !1;
      var $opts$$24$$ = this.options.dnd, $bFixup$$ = !0;
      "object" === typeof $opts$$24$$ && ($opts$$24$$ = $opts$$24$$.reorder, "string" === typeof $opts$$24$$ && ("enable" === $opts$$24$$ ? (this.$_data$.dnd.$reorder$ = !0, $bFixup$$ = !1) : "disable" == $opts$$24$$ && ($bFixup$$ = !1)));
      this.$_data$.dnd.$reorder$ ? (this.options.dnd = {}, this.$_applyDefaults$(this.options.dnd, this.$_data$.dnd.$defaults$), this.options.dnd.reorder = "enable") : $bFixup$$ && (this.options.dnd = {reorder:"disable"});
    }, $_initKeys$:function() {
    }, $_initMenu$:function($newVal$$) {
      var $$m_menu$$12$$, $dm_t$$14$$;
      $newVal$$ || this.options.contextMenu || ($$m_menu$$12$$ = this.$_$container$.attr("contextmenu")) && (this.options.contextMenu = "#" + $$m_menu$$12$$);
      if ($newVal$$ || this.options.contextMenu) {
        $$m_menu$$12$$ = $newVal$$ || this.options.contextMenu;
        $dm_t$$14$$ = $$$$25$$.type($$m_menu$$12$$);
        if ("function" == $dm_t$$14$$) {
          try {
            $$m_menu$$12$$ = $$m_menu$$12$$();
          } catch ($e$$115$$) {
            $$m_menu$$12$$ = null;
          }
          $dm_t$$14$$ = $$$$25$$.type($$m_menu$$12$$);
        }
        if ("string" === $dm_t$$14$$) {
          if ($$m_menu$$12$$ = $$$$25$$($$m_menu$$12$$)) {
            $$m_menu$$12$$.css("display", "none"), $dm_t$$14$$ = this.$_data$.menu, $dm_t$$14$$.$$container$ = $$m_menu$$12$$, $dm_t$$14$$.$usermenu$ = !0;
          }
          this.$_data$.menu.$usermenu$ && $newVal$$ && this.$_applyMenu$();
        }
      }
    }, $_handleContextMenuBeforeShow$:function($e$$116_state$$3$$) {
      this.$_data$.menu.$node$ = "keydown" === $e$$116_state$$3$$.originalEvent.originalEvent.type ? this.$_data$.ui.$hovered$ : $$$$25$$($e$$116_state$$3$$.originalEvent.target.parentNode);
      this.$_data$.menu.$treeDivId$ = this.$_data$.menu.$node$.closest("div").attr("id");
      this.$_data$.menu.$$container$.ojMenu("option", "menuPosition", {my:"left top", at:"left bottom", of:this.$_data$.menu.$node$[0]});
      if (this.$_data$.menu.$usermenu$ && this.$_data$.menu.$$elemPaste$) {
        $e$$116_state$$3$$ = this.$_data$.menu.$$elemPaste$.hasClass("oj-disabled");
        var $disabledState$$ = !this.$_data$.$crrm$.$ct_nodes$ && !this.$_data$.$crrm$.$cp_nodes$;
        $e$$116_state$$3$$ || ($e$$116_state$$3$$ = !1);
        $e$$116_state$$3$$ != $disabledState$$ && ($disabledState$$ ? this.$_data$.menu.$$elemPaste$.addClass("oj-disabled") : this.$_data$.menu.$$elemPaste$.removeClass("oj-disabled"), this.$_data$.menu.$$container$.ojMenu("refresh"));
      }
    }, $_handleContextMenuSelect$:function($ev$$1$$, $ui$$25$$) {
      if (!$ui$$25$$.inst && this.$_data$.menu.$treeDivId$ == this.$_elemId$.substr(1)) {
        var $id$$33$$ = $ui$$25$$ ? $ui$$25$$.item.attr("id") : void 0;
        "ojtreecopy" === $id$$33$$ ? this.$_crrm_copy$(this.$_data$.menu.$node$) : "ojtreecut" === $id$$33$$ ? this.$_crrm_cut$(this.$_data$.menu.$node$) : "ojtreepaste" === $id$$33$$ ? this.$_crrm_paste$(this.$_data$.menu.$node$) : "ojtreeremove" === $id$$33$$ ? this.isSelected(this.$_data$.menu.$node$) ? this.$_crrm_remove$() : this.$_crrm_remove$(this.$_data$.menu.$node$) : "ojtreerename" === $id$$33$$ ? this.$_crrm_rename$(this.$_data$.menu.$node$) : "ojtreecreate" === $id$$33$$ && this.$_crrm_create$(this.$_data$.menu.$node$);
      }
    }, $_showContextMenu$:function($menu$$13$$, $event$$309$$) {
      $menu$$13$$.show($event$$309$$, {launcher:this.$_$container_ul$, focus:"menu"});
    }, $_initCoreOpts$:function() {
      var $val$$54$$ = this.options.selectionMode, $val$$54$$ = void 0 == $val$$54$$ ? "single" : $val$$54$$;
      "none" === $val$$54$$ ? $val$$54$$ = 0 : "single" === $val$$54$$ ? $val$$54$$ = 1 : "multiple" === $val$$54$$ && ($val$$54$$ = -1);
      this.$_data$.$core$.$selectMode$ = $val$$54$$;
      this.$_data$.$themes$.icons = this.options.icons;
      this.$_data$.$core$.$toExpand$ = this.options.initExpanded;
      null == this.$_data$.$core$.$toExpand$ && (this.$_data$.$core$.$toExpand$ = []);
      this.$_data$.$core$.$toLoad$ = this.options.initLoaded;
    }, $_initUIOpts$:function() {
    }, $_initDSOpts$:function($bInit$$2$$) {
      var $s$$33$$ = this.options.data, $dt$$1_ot$$2$$;
      this.$_data$.$ds$.type = 0;
      this.$_data$.html.$useExistingMarkup$ = !1;
      this.$_data$.html.$cloneMarkup$ = !1;
      if ($s$$33$$) {
        if ($dt$$1_ot$$2$$ = $$$$25$$.type($s$$33$$), "string" === $dt$$1_ot$$2$$) {
          this.$_isHtml$($s$$33$$) ? this.$_data$.$ds$.type = 4 : this.$_data$.$ds$.type = 3;
        } else {
          if ("array" === $dt$$1_ot$$2$$) {
            this.$_data$.$ds$.type = 3;
          } else {
            if ("object" === $dt$$1_ot$$2$$) {
              try {
                $s$$33$$ instanceof $oj$$25$$.$JsonTreeDataSource$ && (this.$_data$.$ds$.type = 1);
              } catch ($e$$117$$) {
                this.$_data$.$ds$.type = -1;
              }
              if (1 !== this.$_data$.$ds$.type) {
                try {
                  $s$$33$$ instanceof $oj$$25$$.$CollectionTreeDataSource$ && (this.$_data$.$ds$.type = 2);
                } catch ($e$$118$$) {
                  this.$_data$.$ds$.type = -1;
                }
              }
              1 !== this.$_data$.$ds$.type && 2 !== this.$_data$.$ds$.type && ($s$$33$$.data || $s$$33$$.ajax) && (($dt$$1_ot$$2$$ = $s$$33$$.dataType) ? "json" === $dt$$1_ot$$2$$ ? this.$_data$.$ds$.type = 3 : "html" === $dt$$1_ot$$2$$ && (this.$_data$.$ds$.type = 4) : ($s$$33$$.dataType = "json", this.$_data$.$ds$.type = 3));
            }
          }
        }
      }
      $bInit$$2$$ && 0 == this.$_data$.$ds$.type && 0 < this.$_$container$.find("ul").length && (this.$_data$.$ds$.type = 4, this.$_data$.html.$useExistingMarkup$ = !0);
    }, $_initTreeDSOpts$:function() {
    }, $_initJsonOpts$:function() {
    }, $_initHtmlOpts$:function() {
    }, $_initCrrmOpts$:function() {
    }, $_initMenuOpts$:function() {
    }, $_initThemeOpts$:function() {
    }, $_initTypeOpts$:function() {
      var $o$$18$$ = this.options.types;
      "object" === typeof $o$$18$$ && this.$_applyDefaults$($o$$18$$, {attr:this.$_data$.types.$defaults$.attr});
    }, $_initData$:function() {
      var $data$$148$$ = this.$_data$;
      $data$$148$$.$core$ = {$htmlTitles$:!1, $initLoaded$:[], $selectMode$:1, $load_open$:!1, $li_height$:0, $notify_plugins$:!1, $toExpand$:!1, $toLoad$:!1, $prepared_move$:{}, $initFocus$:!1};
      $data$$148$$.ui = {selected:$$$$25$$(), $last_selected$:!1, $hovered$:null, $to_select$:null, opacity:1, $spacebar$:!1, $focused$:!1};
      $data$$148$$.ui.$defaults$ = {selectMultipleModifier:"ctrl", selectRangeModifier:"shift", disableSelectingChildren:!1};
      $data$$148$$.$crrm$ = {};
      $data$$148$$.$crrm$.$cp_nodes$ = !1;
      $data$$148$$.$crrm$.$ct_nodes$ = !1;
      $data$$148$$.$crrm$.$defaults$ = {inputWidthLimit:200, move:{alwaysCopy:!1, openOnMove:!0, defaultPosition:"last", checkMove:function $$data$$148$$$$crrm$$$defaults$$move$checkMove$() {
        return!0;
      }}};
      $data$$148$$.$crrm$.$prepared_move$ = {};
      $data$$148$$.$ds$ = {};
      $data$$148$$.$ds$.$progressiveRender$ = !1;
      $data$$148$$.$ds$.$progressiveUnload$ = !1;
      $data$$148$$.$ds$.$correctState$ = !0;
      $data$$148$$.$ds$.type = 0;
      $data$$148$$.$json$ = {};
      $data$$148$$.$json$.$defaults$ = {data:!1, ajax:!1};
      $data$$148$$.html = {};
      $data$$148$$.html.$defaults$ = {data:!1, ajax:!1};
      $data$$148$$.html.$useExistingMarkup$ = !1;
      $data$$148$$.html.$markup_ul$ = !1;
      $data$$148$$.html.$markup_div$ = !1;
      $data$$148$$.html.$markup$ = !1;
      $data$$148$$.html.$cloneMarkup$ = !1;
      $data$$148$$.$themes$ = {};
      $data$$148$$.$themes$.icons = !0;
      $data$$148$$.$themes$.$dots$ = !1;
      $data$$148$$.$themes$.$theme$ = "default";
      $data$$148$$.$themes$.url = !1;
      $data$$148$$.$themes$.$themes_loaded$ = [];
      $data$$148$$.$themes$.$_themes$ = !1;
      $data$$148$$.types = {};
      $data$$148$$.types.$attachTo$ = [];
      $data$$148$$.types.$defType$ = !1;
      $data$$148$$.types.$defaults$ = {maxChildren:-1, maxDepth:-1, validChildren:"all", useData:!1, attr:"type", types:{"default":{maxChildren:-1, maxDepth:-1, validChildren:"all"}}};
      $data$$148$$.menu = {};
      $data$$148$$.menu.$usermenu$ = !1;
      $data$$148$$.menu.$$container$ = !1;
      $data$$148$$.menu.$$elemPaste$ = !1;
      $data$$148$$.menu.$node$ = !1;
      $data$$148$$.keys = {};
      $data$$148$$.keys.$enabled$ = !0;
      $data$$148$$.keys.bound = [];
      $data$$148$$.dnd = {};
      $data$$148$$.dnd.$reorder$ = !1;
      $data$$148$$.dnd.$active$ = !1;
      $data$$148$$.dnd.after = !1;
      $data$$148$$.dnd.inside = !1;
      $data$$148$$.dnd.before = !1;
      $data$$148$$.dnd.off = !1;
      $data$$148$$.dnd.$prepared$ = !1;
      $data$$148$$.dnd.$w$ = 0;
      $data$$148$$.dnd.$to1$ = !1;
      $data$$148$$.dnd.$to2$ = !1;
      $data$$148$$.dnd.$cof$ = !1;
      $data$$148$$.dnd.$cw$ = !1;
      $data$$148$$.dnd.ch = !1;
      $data$$148$$.dnd.$i1$ = !1;
      $data$$148$$.dnd.$i2$ = !1;
      $data$$148$$.dnd.$mto$ = !1;
      $data$$148$$.dnd.$ml_width$ = 100;
      $data$$148$$.dnd.$targ_ml_width$ = 100;
      $data$$148$$.dnd.$defaults$ = {copy_modifier:"ctrl", check_timeout:100, open_timeout:500, drop_target:".oj-tree-drop", drop_check:function $$data$$148$$$dnd$$defaults$$drop_check$() {
        return!0;
      }, drop_finish:$$$$25$$.noop, drag_target:".oj-tree-draggable", drag_finish:$$$$25$$.noop, drag_check:function $$data$$148$$$dnd$$defaults$$drag_check$() {
        return{after:!1, before:!1, inside:!0};
      }};
      $data$$148$$.dnd.$vars$ = {};
      $data$$148$$.dnd.$vars$.$o$ = !1;
      $data$$148$$.dnd.$vars$.$r$ = !1;
      $data$$148$$.dnd.$vars$.$m$ = !1;
      $data$$148$$.dnd.$vars$.$ml$ = !1;
      $data$$148$$.dnd.$vars$.$sli$ = void 0;
      $data$$148$$.dnd.$vars$.$sti$ = void 0;
      $data$$148$$.dnd.$vars$.$dir1$ = !1;
      $data$$148$$.dnd.$vars$.$dir2$ = !1;
      $data$$148$$.dnd.$vars$.$last_pos$ = !1;
      $data$$148$$.dnd.$ctl$ = {};
      $data$$148$$.dnd.$ctl$.$is_down$ = !1;
      $data$$148$$.dnd.$ctl$.$is_drag$ = !1;
      $data$$148$$.dnd.$ctl$.helper = !1;
      $data$$148$$.dnd.$ctl$.$scroll_spd$ = 10;
      $data$$148$$.dnd.$ctl$.$init_x$ = 0;
      $data$$148$$.dnd.$ctl$.$init_y$ = 0;
      $data$$148$$.dnd.$ctl$.$threshold$ = 5;
      $data$$148$$.dnd.$ctl$.$helper_left$ = 5;
      $data$$148$$.dnd.$ctl$.$helper_top$ = 10;
      $data$$148$$.dnd.$ctl$.$user_data$ = {};
    }, $_fix_scroll$:function($obj$$94_t$$15$$) {
      var $c$$29$$ = this.$_$container$[0];
      $c$$29$$.scrollHeight > $c$$29$$.offsetHeight && ($obj$$94_t$$15$$ = this.$_getNode$($obj$$94_t$$15$$)) && -1 !== $obj$$94_t$$15$$ && $obj$$94_t$$15$$.length && $obj$$94_t$$15$$.is(":visible") && ($obj$$94_t$$15$$ = $obj$$94_t$$15$$.offset().top - this.$_$container$.offset().top, 0 > $obj$$94_t$$15$$ && ($c$$29$$.scrollTop = $c$$29$$.scrollTop + $obj$$94_t$$15$$ - 1), $obj$$94_t$$15$$ + this.$_data$.$core$.$li_height$ + ($c$$29$$.scrollWidth > $c$$29$$.offsetWidth ? $scrollbar_width$$ : 0) > 
      $c$$29$$.offsetHeight && ($c$$29$$.scrollTop += $obj$$94_t$$15$$ - $c$$29$$.offsetHeight + this.$_data$.$core$.$li_height$ + 1 + ($c$$29$$.scrollWidth > $c$$29$$.offsetWidth ? $scrollbar_width$$ : 0)));
    }, $set_focus$:function() {
      this.$_isFocused$() || (this.$_focused$() && this.$unset_focus$(), this.$_$container$.addClass("oj-tree-focused"), this.$_$container_ul$ && this.$_$container_ul$.focus(), this.$_data$.ui.$focused$ = !0, this.$_emitEvent$(null, "set_focus"));
    }, $_isFocused$:function() {
      return this.$_data$.ui.$focused$;
    }, $unset_focus$:function() {
      this.$_isFocused$() && (this.$_$container$.removeClass("oj-tree-focused"), this.$_data$.ui.$focused$ = !1, this.$_$container_ul$ && this.$_$container_ul$.blur());
      this.$_emitEvent$(null, "unset_focus");
    }, $_focused$:function() {
      var $ret$$33$$ = null;
      $$$$25$$.each($_aInstances$$, function($i$$264$$, $_this$$22$$) {
        if ($_this$$22$$.$_data$.ui.$focused$) {
          return $ret$$33$$ = $_this$$22$$, !1;
        }
      });
      return $ret$$33$$;
    }, $_newIndex$:function() {
      return++$_instance$$;
    }, $_getIndex$:function() {
      return this.$_index$;
    }, $_getOptions$:function() {
      return $$$$25$$.extend(!0, {}, this.options);
    }, $_getContainer$:function() {
      return this.$_$container$;
    }, $_keyHandler$:{up:function() {
      this.hover(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1));
      return!1;
    }, "ctrl+up":function() {
      this.hover(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1));
      return!1;
    }, "shift+up":function() {
      this.select(this.$_getPrev$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1), -1 !== this.$_data$.ui.$selectMode$);
      return!1;
    }, down:function() {
      this.hover(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1));
      return!1;
    }, "ctrl+down":function() {
      this.hover(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1));
      return!1;
    }, "shift+down":function() {
      this.select(this.$_getNext$(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$ || -1), -1 !== this.$_data$.ui.$selectMode$);
      return!1;
    }, left:function() {
      var $o$$25$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$25$$ && ($o$$25$$.hasClass("oj-tree-open") ? this.collapse($o$$25$$) : this.hover(this.$_getPrev$($o$$25$$)));
      return!1;
    }, "ctrl+left":function() {
      var $o$$26$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$26$$ && ($o$$26$$.hasClass("oj-tree-open") ? this.collapse($o$$26$$) : this.hover(this.$_getPrev$($o$$26$$)));
      return!1;
    }, "shift+left":function() {
      var $o$$27$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$27$$ && ($o$$27$$.hasClass("oj-tree-open") ? this.collapse($o$$27$$) : this.hover(this.$_getPrev$($o$$27$$)));
      return!1;
    }, right:function() {
      var $o$$28$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$28$$ && $o$$28$$.length && ($o$$28$$.hasClass("oj-tree-closed") ? this.expand($o$$28$$) : this.hover(this.$_getNext$($o$$28$$)));
      return!1;
    }, "ctrl+right":function() {
      var $o$$29$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$29$$ && $o$$29$$.length && ($o$$29$$.hasClass("oj-tree-closed") ? this.expand($o$$29$$) : this.hover(this.$_getNext$($o$$29$$)));
      return!1;
    }, "shift+right":function() {
      var $o$$30$$ = this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$;
      $o$$30$$ && $o$$30$$.length && ($o$$30$$.hasClass("oj-tree-closed") ? this.expand($o$$30$$) : this.hover(this.$_getNext$($o$$30$$)));
      return!1;
    }, space:function() {
      this.$_data$.ui.$hovered$ && (this.$_data$.ui.$spacebar$ = !0, this.$_data$.ui.$hovered$.children("a:eq(0)").click(), this.$_data$.ui.$spacebar$ = !1);
      return!1;
    }, home:function() {
      this.hover(this.$_$container_ul$.find("li:first"));
      return!1;
    }, end:function() {
      var $a$$79$$ = this.$_$container_ul$.find("li.oj-tree-last:visible");
      this.hover($a$$79$$[$a$$79$$.length - 1]);
      return!1;
    }, "*":function() {
      this.$_$container_ul$.find("a");
      this.$_expandAll$(-1, !1);
      return!1;
    }, "ctrl+space":function() {
      if (this.$_data$.ui.$hovered$) {
        var $ev$$2$$ = $$$$25$$.Event("click");
        $ev$$2$$.ctrlKey = !0;
        this.$_data$.ui.$hovered$.children("a:eq(0)").trigger($ev$$2$$);
      }
      return!1;
    }, "shift+space":function() {
      if (this.$_data$.ui.$hovered$) {
        var $ev$$3$$ = $$$$25$$.Event("click");
        $ev$$3$$.shiftKey = !0;
        this.$_data$.ui.$hovered$.children("a:eq(0)").trigger($ev$$3$$);
      }
      return!1;
    }, "shift+home":function() {
      var $hover$$1$$ = this.$_data$.ui.$hovered$;
      if ($hover$$1$$) {
        var $bContinue$$ = !0, $_this$$23$$ = this, $nodes$$2$$ = this.$_$container_ul$.find("li:visible"), $hover$$1$$ = $hover$$1$$[0];
        $$$$25$$.each($nodes$$2$$, function($i$$265$$, $node$$67$$) {
          $node$$67$$ == $hover$$1$$ && ($bContinue$$ = !1);
          $_this$$23$$.$_select$($node$$67$$, !0);
          return $bContinue$$;
        });
      }
      return!1;
    }, "shift+pgdn":function() {
      var $hover$$2$$ = this.$_data$.ui.$hovered$;
      if ($hover$$2$$) {
        var $bFound$$ = !1, $_this$$24$$ = this, $l$$15$$ = this.$_$container_ul$.find("li:visible"), $hover$$2$$ = $hover$$2$$[0];
        $$$$25$$.each($l$$15$$, function($i$$266$$, $node$$68$$) {
          $bFound$$ || $node$$68$$ == $hover$$2$$ && ($bFound$$ = !0);
          $bFound$$ && $_this$$24$$.$_select$($node$$68$$, !0);
          return!0;
        });
      }
      return!1;
    }, f2:function() {
      this.rename(this.$_data$.ui.$hovered$ || this.$_data$.ui.$last_selected$);
      return!1;
    }, del:function() {
      this.remove(this.$_data$.ui.$hovered$ || this.$_getNode$(null));
      return!1;
    }}, $_applyMenu$:function() {
      if (this.$_data$.menu.$usermenu$) {
        var $$menuContainer$$ = this.$_data$.menu.$$container$, $_this$$25$$ = this;
        $$menuContainer$$.on("ojselect", $$$$25$$.proxy(this.$_handleContextMenuSelect$, this));
        $$menuContainer$$.on("ojbeforeshow", $$$$25$$.proxy(this.$_handleContextMenuBeforeShow$, this));
        var $bChanged$$ = !1;
        $$menuContainer$$.find("[data-oj-command]").each(function() {
          var $cmd$$;
          0 === $$$$25$$(this).children("a").length && ($cmd$$ = $$$$25$$(this).attr("data-oj-command").split("-"), $$$$25$$(this).replaceWith($_this$$25$$.$_buildContextMenuItem$($cmd$$[$cmd$$.length - 1])), $$$$25$$(this).hasClass("oj-menu-divider") && $$$$25$$(this).removeClass("oj-menu-divider").addClass("oj-menu-item"), $bChanged$$ = !0);
        });
        $bChanged$$ && $$menuContainer$$.ojMenu("refresh");
        this.$_data$.menu.$$elemPaste$ = $$menuContainer$$.find("#ojtreepaste");
      }
    }, $_clearMenu$:function() {
      var $um$$ = this.$_data$.menu;
      $um$$.$usermenu$ && ($um$$.$usermenu$ = !1, $um$$.$$container$.off("ojselect"), $um$$.$$container$.off("beforeshow"), $um$$.$$container$ = null);
    }, $_buildContextMenuItem$:function($cmd$$1$$) {
      return $$$$25$$(this.$_buildContextMenuListItem$($cmd$$1$$));
    }, $_buildContextMenuListItem$:function($cmd$$2$$) {
      return "\x3cli id\x3d" + $_arMenuCmdMap$$[$cmd$$2$$] + "\x3e" + this.$_buildContextMenuLabel$($cmd$$2$$) + "\x3c/li\x3e";
    }, $_buildContextMenuLabel$:function($cmd$$3$$) {
      return'\x3ca href\x3d"#"\x3e' + this.$getTranslatedString$("m_" + $cmd$$3$$) + "\x3c/a\x3e";
    }, $_crrm_cut$:function($obj$$95$$) {
      $obj$$95$$ = this.$_getNode$($obj$$95$$, !0);
      if (!$obj$$95$$ || !$obj$$95$$.length) {
        return!1;
      }
      this.$_data$.$crrm$.$cp_nodes$ = !1;
      this.$_data$.$crrm$.$ct_nodes$ = $obj$$95$$;
      this.$_emitEvent$({obj:$obj$$95$$}, "cut");
    }, $_crrm_copy$:function($obj$$96$$) {
      $obj$$96$$ = this.$_getNode$($obj$$96$$, !0);
      if (!$obj$$96$$ || !$obj$$96$$.length) {
        return!1;
      }
      this.$_data$.$crrm$.$ct_nodes$ = !1;
      this.$_data$.$crrm$.$cp_nodes$ = $obj$$96$$;
      this.$_emitEvent$({obj:$obj$$96$$}, "copy");
    }, $_crrm_paste$:function($obj$$97$$) {
      $obj$$97$$ = this.$_getNode$($obj$$97$$);
      if (!$obj$$97$$ || !$obj$$97$$.length) {
        return!1;
      }
      var $nodes$$3$$ = this.$_data$.$crrm$.$ct_nodes$ ? this.$_data$.$crrm$.$ct_nodes$ : this.$_data$.$crrm$.$cp_nodes$;
      if (!this.$_data$.$crrm$.$ct_nodes$ && !this.$_data$.$crrm$.$cp_nodes$) {
        return!1;
      }
      this.$_data$.$crrm$.$ct_nodes$ && (this.$_crrm_move_node$(this.$_data$.$crrm$.$ct_nodes$, $obj$$97$$), this.$_data$.$crrm$.$ct_nodes$ = !1);
      this.$_data$.$crrm$.$ct_nodes$ && (this.$_crrm_move_node$(this.$_data$.$crrm$.$ct_nodes$, $obj$$97$$), this.$_data$.$crrm$.$ct_nodes$ = !1);
      this.$_data$.$crrm$.$cp_nodes$ && this.$_crrm_move_node$(this.$_data$.$crrm$.$cp_nodes$, $obj$$97$$, !1, !0);
      this.$_emitEvent$({obj:$obj$$97$$, nodes:$nodes$$3$$}, "paste");
    }, $_crrm_move_node$:function($obj$$98$$, $ref$$4$$, $position$$14$$, $is_copy$$1$$, $is_prepared$$1$$, $skip_check$$1$$) {
      var $s$$34$$ = this.$_data$.$crrm$.$defaults$.move;
      if (!$is_prepared$$1$$) {
        return "undefined" === typeof $position$$14$$ && ($position$$14$$ = $s$$34$$.defaultPosition), "inside" !== $position$$14$$ || $s$$34$$.defaultPosition.match(/^(before|after)$/) || ($position$$14$$ = $s$$34$$.defaultPosition), this.$_move_node$($obj$$98$$, $ref$$4$$, $position$$14$$, $is_copy$$1$$, !1, $skip_check$$1$$);
      }
      if (!0 === $s$$34$$.alwaysCopy || "multitree" === $s$$34$$.alwaysCopy && $obj$$98$$.$rt$.$_index$ !== $obj$$98$$.$ot$.$_index$) {
        $is_copy$$1$$ = !0;
      }
      this.$_move_node$($obj$$98$$, $ref$$4$$, $position$$14$$, $is_copy$$1$$, !0, $skip_check$$1$$);
    }, $_crrm_remove$:function($obj$$99$$) {
      $obj$$99$$ = this.$_getNode$($obj$$99$$, !0);
      this.$__rollback$();
      this.remove($obj$$99$$);
    }, $_crrm_rename$:function($obj$$100$$) {
      $obj$$100$$ = this.$_getNode$($obj$$100$$);
      this.$__rollback$();
      this.$_crrm_showInput$($obj$$100$$, function() {
      });
    }, $_crrm_showInput$:function($obj$$102$$, $callback$$98$$) {
      $obj$$102$$ = this.$_getNode$($obj$$102$$);
      var $rtl$$2$$ = this.$_isRtl$, $w$$8$$ = this.$_data$.$crrm$.$defaults$.inputWidthLimit, $w1$$ = $obj$$102$$.children("ins").width(), $w2$$ = $obj$$102$$.find("\x3e a:visible \x3e ins").width() * $obj$$102$$.find("\x3e a:visible \x3e ins").length, $t$$17$$ = this.getText($obj$$102$$), $_this$$26$$ = this, $h1$$ = $$$$25$$("\x3cdiv /\x3e", {css:{position:"absolute", top:"-200px", left:$rtl$$2$$ ? "0px" : "-1000px", visibility:"hidden"}}).appendTo("body"), $h2$$ = $obj$$102$$.css("position", 
      "relative").append($$$$25$$("\x3cinput /\x3e", {value:$t$$17$$, "class":"oj-tree-rename-input", css:{padding:"0", border:"1px solid silver", position:"absolute", left:$rtl$$2$$ ? "auto" : $w1$$ + $w2$$ + 4 + "px", right:$rtl$$2$$ ? $w1$$ + $w2$$ + 4 + "px" : "auto", top:"0px", height:this.$_data$.$core$.$li_height$ - 2 + "px", lineHeight:this.$_data$.$core$.$li_height$ - 2 + "px", width:"150px"}, blur:$$$$25$$.proxy(function() {
        var $i$$267$$ = $obj$$102$$.children(".oj-tree-rename-input"), $v$$3$$ = $i$$267$$.val();
        "" === $v$$3$$ && ($v$$3$$ = $t$$17$$);
        $h1$$.remove();
        $i$$267$$.remove();
        this.$_set_text$($obj$$102$$, $t$$17$$);
        this.$_rename_node$($obj$$102$$, $v$$3$$);
        $callback$$98$$.call(this, $obj$$102$$, $v$$3$$, $t$$17$$);
        $obj$$102$$.css("position", "");
      }, this), keyup:function($event$$314_key$$88$$) {
        $event$$314_key$$88$$ = $event$$314_key$$88$$.keyCode || $event$$314_key$$88$$.which;
        if (!$_this$$26$$.$_done$) {
          return $_this$$26$$.$_done$ = !0, !1;
        }
        27 == $event$$314_key$$88$$ ? ($_this$$26$$.$_done$ = !1, this.value = $t$$17$$, this.blur()) : 13 == $event$$314_key$$88$$ ? ($_this$$26$$.$_done$ = !1, this.blur()) : $h2$$.width(Math.min($h1$$.text("pW" + this.value).width(), $w$$8$$));
      }, keypress:function($event$$315$$) {
        if (13 == ($event$$315$$.keyCode || $event$$315$$.which)) {
          return!1;
        }
      }})).children(".oj-tree-rename-input");
      this.$_set_text$($obj$$102$$, "");
      $h1$$.css({fontFamily:$h2$$.css("fontFamily") || "", fontSize:$h2$$.css("fontSize") || "", fontWeight:$h2$$.css("fontWeight") || "", fontStyle:$h2$$.css("fontStyle") || "", fontStretch:$h2$$.css("fontStretch") || "", fontVariant:$h2$$.css("fontVariant") || "", letterSpacing:$h2$$.css("letterSpacing") || "", wordSpacing:$h2$$.css("wordSpacing") || ""});
      $h2$$.width(Math.min($h1$$.text("pW" + $h2$$[0].value).width(), $w$$8$$))[0].select();
    }, $_crrm_create$:function($obj$$103$$, $position$$15$$, $js$$2$$, $callback$$99$$, $skip_rename$$) {
      var $_this$$27$$ = this;
      ($obj$$103$$ = this.$_getNode$($obj$$103$$)) || ($obj$$103$$ = -1);
      this.$__rollback$();
      return this.$_create_node$($obj$$103$$, $position$$15$$, $js$$2$$, function($t$$19$$) {
        var $p$$12$$ = this.$_getParent$($t$$19$$), $pos$$11$$ = $$$$25$$($t$$19$$).index();
        $callback$$99$$ && $callback$$99$$.call(this, $t$$19$$);
        $p$$12$$.length && $p$$12$$.hasClass("oj-tree-closed") && this.expand($p$$12$$, !1, !0);
        $skip_rename$$ ? $_this$$27$$.$_emitEvent$({obj:$t$$19$$, name:this.getText($t$$19$$), parent:$p$$12$$, position:$pos$$11$$}) : this.$_crrm_showInput$($t$$19$$, function($obj$$104$$, $new_name$$1$$) {
          $_this$$27$$.$_emitEvent$({obj:$obj$$104$$, name:$new_name$$1$$, parent:$p$$12$$, position:$pos$$11$$});
        });
      });
    }, $_crrm_check_move$:function() {
      return!1;
    }, $_isHtml$:function($s$$36$$) {
      if (!$s$$36$$ || 3 > $s$$36$$.length) {
        return!1;
      }
      $s$$36$$ = $s$$36$$.trim();
      return "\x3c" === $s$$36$$.charAt(0);
    }, $_applyEmptyText$:function() {
      var $d$$16_txt$$ = this.option.emptyText;
      "string" !== typeof $d$$16_txt$$ && ($d$$16_txt$$ = this.$getTranslatedString$("m_emptyText"));
      $d$$16_txt$$ && 0 < $d$$16_txt$$.length && ($d$$16_txt$$ = "\x3cli class\x3d'oj-tree-empty'\x3e" + $d$$16_txt$$ + "\x3c/li\x3e", this.$_$container_ul$.empty().append($d$$16_txt$$));
    }, $_processSubId$:function($locator$$19_sNode$$) {
      var $c$$30_i$$268_subId$$14$$, $node$$69$$, $a$$80_sKey$$;
      $a$$80_sKey$$ = null;
      var $ret$$34$$;
      $locator$$19_sNode$$ && ($c$$30_i$$268_subId$$14$$ = $locator$$19_sNode$$.subId);
      if (!$c$$30_i$$268_subId$$14$$) {
        return null;
      }
      $a$$80_sKey$$ = $c$$30_i$$268_subId$$14$$.split("[");
      if (3 === $a$$80_sKey$$.length && ($a$$80_sKey$$[0] = $a$$80_sKey$$[0].trim(), "oj-tree-node" === $a$$80_sKey$$[0] && ($a$$80_sKey$$[1] = $a$$80_sKey$$[1].trim(), $c$$30_i$$268_subId$$14$$ = $a$$80_sKey$$[1].charAt(0), $c$$30_i$$268_subId$$14$$ = $a$$80_sKey$$[1].indexOf($c$$30_i$$268_subId$$14$$, 1), 0 <= $c$$30_i$$268_subId$$14$$ && ($locator$$19_sNode$$ = $a$$80_sKey$$[1].substring(1, $c$$30_i$$268_subId$$14$$).trim(), $a$$80_sKey$$[2] = $a$$80_sKey$$[2].trim(), $c$$30_i$$268_subId$$14$$ = 
      $a$$80_sKey$$[2].charAt(0), $c$$30_i$$268_subId$$14$$ = $a$$80_sKey$$[2].indexOf($c$$30_i$$268_subId$$14$$, 1), 0 <= $c$$30_i$$268_subId$$14$$)))) {
        $a$$80_sKey$$ = $a$$80_sKey$$[2].substring(1, $c$$30_i$$268_subId$$14$$).trim();
        try {
          $node$$69$$ = this.$_getNode$($locator$$19_sNode$$);
        } catch ($e$$119$$) {
          $node$$69$$ = null;
        }
        if ($a$$80_sKey$$ && $node$$69$$ && -1 !== $node$$69$$) {
          switch($a$$80_sKey$$) {
            case "icon":
              this.$_data$.$themes$.icons && ($ret$$34$$ = $node$$69$$.find(" \x3e a \x3e ins:eq(0)"));
              break;
            case "link":
              $ret$$34$$ = $node$$69$$.find(" \x3e a:eq(0)");
              break;
            case "disclosure":
              this.$_isLeaf$($node$$69$$) || ($ret$$34$$ = $node$$69$$.find(" \x3e ins:eq(0)"));
              break;
            case "title":
              $ret$$34$$ = $node$$69$$.find(" \x3e a \x3e span");
          }
        }
      }
      return $ret$$34$$ ? $ret$$34$$.length ? $ret$$34$$[0] : null : null;
    }, $_hideDots$:function() {
      this.$_data$.$themes$.$dots$ = !1;
      this.$_$container$.children("ul").addClass("oj-tree-no-dots");
    }, $_showDots$:function() {
      this.$_data$.$themes$.$dots$ = !0;
      this.$_$container$.children("ul").removeClass("oj-tree-no-dots");
    }});
  })();
});
