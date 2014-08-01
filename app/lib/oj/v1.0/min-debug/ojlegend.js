/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtLegend"], function($oj$$40$$, $$$$38$$) {
  $oj$$40$$.$LegendItem$ = function $$oj$$40$$$$LegendItem$$($data$$160$$) {
    this.$_data$ = $data$$160$$;
  };
  $goog$exportPath_$$("LegendItem", $oj$$40$$.$LegendItem$, $oj$$40$$);
  $oj$$40$$.$LegendItem$.prototype.getText = function $$oj$$40$$$$LegendItem$$$getText$() {
    return this.$_data$ ? this.$_data$.text : null;
  };
  $oj$$40$$.$Object$.$exportPrototypeSymbol$("LegendItem.prototype.getText", {getText:$oj$$40$$.$LegendItem$.prototype.getText});
  $oj$$40$$.$__registerWidget$("oj.ojLegend", $$$$38$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{categoryFilter:null, categoryHighlight:null}, $_CreateDvtComponent$:function($context$$54$$, $callback$$105$$, $callbackObj$$10$$) {
    return DvtLegend.newInstance($context$$54$$, $callback$$105$$, $callbackObj$$10$$);
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$15$$ = this._super();
    $styleClasses$$15$$["oj-legend"] = {path:"textStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$15$$["oj-legendTitle"] = {path:"titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$15$$["oj-legendSectionTitle"] = {path:"_sectionTitleStyle", property:"CSS_TEXT_PROPERTIES"};
    return $styleClasses$$15$$;
  }, $_HandleEvent$:function($event$$376$$) {
    var $filterType$$1_highlightType$$1_type$$89$$ = $event$$376$$ && $event$$376$$.getType ? $event$$376$$.getType() : null;
    $filterType$$1_highlightType$$1_type$$89$$ === DvtCategoryHideShowEvent.TYPE_HIDE || $filterType$$1_highlightType$$1_type$$89$$ === DvtCategoryHideShowEvent.TYPE_SHOW ? ($filterType$$1_highlightType$$1_type$$89$$ = $filterType$$1_highlightType$$1_type$$89$$ === DvtCategoryHideShowEvent.TYPE_HIDE ? "out" : "in", this.$_updateLegendItemVisibility$(this.options.sections, $event$$376$$.getCategory(), $filterType$$1_highlightType$$1_type$$89$$), this._trigger("categoryFilter", null, {category:$event$$376$$.getCategory(), 
    type:$filterType$$1_highlightType$$1_type$$89$$})) : $filterType$$1_highlightType$$1_type$$89$$ === DvtCategoryRolloverEvent.TYPE_OVER || $filterType$$1_highlightType$$1_type$$89$$ === DvtCategoryRolloverEvent.TYPE_OUT ? ($filterType$$1_highlightType$$1_type$$89$$ = $filterType$$1_highlightType$$1_type$$89$$ === DvtCategoryRolloverEvent.TYPE_OVER ? "on" : "off", this._trigger("categoryHighlight", null, {categories:[$event$$376$$.getCategory()], type:$filterType$$1_highlightType$$1_type$$89$$})) : 
    this._super($event$$376$$);
  }, $_updateLegendItemVisibility$:function($sections$$, $category$$2$$, $filterType$$2$$) {
    if ($sections$$) {
      for (var $i$$291$$ = 0;$i$$291$$ < $sections$$.length;$i$$291$$++) {
        if ($sections$$[$i$$291$$].items) {
          for (var $items$$ = $sections$$[$i$$291$$].items, $j$$39$$ = 0;$j$$39$$ < $items$$.length;$j$$39$$++) {
            if ($items$$[$j$$39$$].id && $items$$[$j$$39$$].id == $category$$2$$ || !$items$$[$j$$39$$].id && $items$$[$j$$39$$].text == $category$$2$$) {
              $items$$[$j$$39$$].categoryVisibility = "out" == $filterType$$2$$ ? "hidden" : "visible";
            }
          }
        } else {
          this.$_updateLegendItemVisibility$($sections$$[$i$$291$$].sections, $category$$2$$, $filterType$$2$$);
        }
      }
    }
  }, getNodeBySubId:function($locator$$30$$) {
    return this._super($locator$$30$$);
  }, getSubIdByNode:function($node$$78$$) {
    return this._super($node$$78$$);
  }, getTitle:function() {
    return this.$_component$.getAutomation().getTitle();
  }, getSection:function($subIdPath$$2$$) {
    var $auto$$20$$ = this.$_component$.getAutomation();
    return new $oj$$40$$.$LegendSection$($auto$$20$$.getSection($subIdPath$$2$$));
  }, getItem:function($subIdPath$$3$$) {
    var $auto$$21$$ = this.$_component$.getAutomation();
    return new $oj$$40$$.$LegendItem$($auto$$21$$.getItem($subIdPath$$3$$));
  }});
  $oj$$40$$.$LegendSection$ = function $$oj$$40$$$$LegendSection$$($data$$161$$) {
    this.$_data$ = $data$$161$$;
  };
  $goog$exportPath_$$("LegendSection", $oj$$40$$.$LegendSection$, $oj$$40$$);
  $oj$$40$$.$LegendSection$.prototype.getTitle = function $$oj$$40$$$$LegendSection$$$getTitle$() {
    return this.$_data$ ? this.$_data$.title : null;
  };
  $oj$$40$$.$Object$.$exportPrototypeSymbol$("LegendSection.prototype.getTitle", {getTitle:$oj$$40$$.$LegendSection$.prototype.getTitle});
  $oj$$40$$.$LegendSection$.prototype.getSection = function $$oj$$40$$$$LegendSection$$$getSection$($sectionIndex$$) {
    return this.$_data$.sections ? new $oj$$40$$.$LegendSection$(this.$_data$.sections[$sectionIndex$$]) : null;
  };
  $oj$$40$$.$Object$.$exportPrototypeSymbol$("LegendSection.prototype.getSection", {getSection:$oj$$40$$.$LegendSection$.prototype.getSection});
  $oj$$40$$.$LegendSection$.prototype.getItem = function $$oj$$40$$$$LegendSection$$$getItem$($itemIndex$$1$$) {
    return this.$_data$.items ? new $oj$$40$$.$LegendItem$(this.$_data$.items[$itemIndex$$1$$]) : null;
  };
  $oj$$40$$.$Object$.$exportPrototypeSymbol$("LegendSection.prototype.getItem", {getItem:$oj$$40$$.$LegendSection$.prototype.getItem});
});
