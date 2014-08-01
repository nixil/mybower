/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtSunburst"], function($oj$$19$$, $$$$19$$) {
  $oj$$19$$.$SunburstNode$ = function $$oj$$19$$$$SunburstNode$$($data$$126$$) {
    this.$_data$ = $data$$126$$;
  };
  $goog$exportPath_$$("SunburstNode", $oj$$19$$.$SunburstNode$, $oj$$19$$);
  $oj$$19$$.$SunburstNode$.prototype.$getColor$ = function $$oj$$19$$$$SunburstNode$$$$getColor$$() {
    return this.$_data$ ? this.$_data$.color : null;
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("SunburstNode.prototype.getColor", {$getColor$:$oj$$19$$.$SunburstNode$.prototype.$getColor$});
  $oj$$19$$.$SunburstNode$.prototype.$getLabel$ = function $$oj$$19$$$$SunburstNode$$$$getLabel$$() {
    return this.$_data$ ? this.$_data$.label : null;
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("SunburstNode.prototype.getLabel", {$getLabel$:$oj$$19$$.$SunburstNode$.prototype.$getLabel$});
  $oj$$19$$.$SunburstNode$.prototype.$getSize$ = function $$oj$$19$$$$SunburstNode$$$$getSize$$() {
    return this.$_data$ ? this.$_data$.size : null;
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("SunburstNode.prototype.getSize", {$getSize$:$oj$$19$$.$SunburstNode$.prototype.$getSize$});
  $oj$$19$$.$SunburstNode$.prototype.$getTooltip$ = function $$oj$$19$$$$SunburstNode$$$$getTooltip$$() {
    return this.$_data$ ? this.$_data$.tooltip : null;
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("SunburstNode.prototype.getTooltip", {$getTooltip$:$oj$$19$$.$SunburstNode$.prototype.$getTooltip$});
  $oj$$19$$.$SunburstNode$.prototype.isSelected = function $$oj$$19$$$$SunburstNode$$$isSelected$() {
    return this.$_data$ ? this.$_data$.selected : !1;
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("SunburstNode.prototype.isSelected", {isSelected:$oj$$19$$.$SunburstNode$.prototype.isSelected});
  $oj$$19$$.$__registerWidget$("oj.ojSunburst", $$$$19$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{rotate:null, rotateInput:null, select:null}, $_CreateDvtComponent$:function($context$$46$$, $callback$$94$$, $callbackObj$$5$$) {
    return DvtSunburst.newInstance($context$$46$$, $callback$$94$$, $callbackObj$$5$$);
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$6$$ = this._super();
    $styleClasses$$6$$.push("oj-sunburst");
    return $styleClasses$$6$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$7$$ = this._super();
    $styleClasses$$7$$["oj-sunburst-attribute-type-text"] = {path:"styleDefaults/_attributeTypeTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$7$$["oj-sunburst-attribute-value-text"] = {path:"styleDefaults/_attributeValueTextStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$7$$["oj-sunburst-node"] = {path:"nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$7$$["oj-sunburst-node oj-hover"] = {path:"nodeDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$7$$["oj-sunburst-node oj-selected"] = [{path:"nodeDefaults/selectedOuterColor", property:"border-top-color"}, {path:"nodeDefaults/selectedInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$7$$;
  }, $_GetTranslationMap$:function() {
    var $ret$$29$$ = this._super();
    $ret$$29$$["DvtSunburstBundle.COLOR"] = this.$_GetTranslatedResource$("labelColor");
    $ret$$29$$["DvtSunburstBundle.SIZE"] = this.$_GetTranslatedResource$("labelSize");
    return $ret$$29$$;
  }, $_HandleEvent$:function($event$$189_selection$$3$$) {
    var $selectedItems_type$$80$$ = $event$$189_selection$$3$$ && $event$$189_selection$$3$$.getType ? $event$$189_selection$$3$$.getType() : null, $selectedItem$$, $i$$224$$;
    if ($selectedItems_type$$80$$ === DvtSelectionEvent.TYPE) {
      $selectedItems_type$$80$$ = [];
      $event$$189_selection$$3$$ = $event$$189_selection$$3$$.getSelection();
      for ($i$$224$$ = 0;$i$$224$$ < $event$$189_selection$$3$$.length;$i$$224$$++) {
        $selectedItem$$ = {id:$event$$189_selection$$3$$[$i$$224$$]}, $selectedItems_type$$80$$.push($selectedItem$$);
      }
      this.options.selectedNodes = $event$$189_selection$$3$$;
      this._trigger("select", null, {items:$selectedItems_type$$80$$});
    } else {
      $selectedItems_type$$80$$ === DvtSunburstRotationEvent.TYPE ? (this.options.startAngle = $event$$189_selection$$3$$.getStartAngle(), this._trigger("rotate", null, {value:$event$$189_selection$$3$$.getStartAngle()})) : $selectedItems_type$$80$$ === DvtSunburstRotationEvent.TYPE_INPUT ? this._trigger("rotateInput", null, {value:$event$$189_selection$$3$$.getStartAngle()}) : this._super($event$$189_selection$$3$$);
    }
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    this.options._resources.rotateCursor = $oj$$19$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/sunburst/rotate.cur");
  }, getNodeBySubId:function($locator$$14$$) {
    return this._super($locator$$14$$);
  }, getSubIdByNode:function($node$$29$$) {
    return this._super($node$$29$$);
  }, getNode:function($subIdPath$$) {
    var $auto$$3$$ = this.$_component$.getAutomation();
    return new $oj$$19$$.$SunburstNode$($auto$$3$$.getNode($subIdPath$$));
  }});
});
