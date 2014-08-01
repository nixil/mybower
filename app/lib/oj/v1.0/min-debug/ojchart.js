/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtChart"], function($oj$$29$$, $$$$29$$) {
  $oj$$29$$.$ChartAxis$ = function $$oj$$29$$$$ChartAxis$$($data$$152$$) {
    this.$_data$ = $data$$152$$;
  };
  $goog$exportPath_$$("ChartAxis", $oj$$29$$.$ChartAxis$, $oj$$29$$);
  $oj$$29$$.$ChartAxis$.prototype.getTitle = function $$oj$$29$$$$ChartAxis$$$getTitle$() {
    return this.$_data$ ? this.$_data$.title : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartAxis.prototype.getTitle", {getTitle:$oj$$29$$.$ChartAxis$.prototype.getTitle});
  $oj$$29$$.$ChartAxis$.prototype.$getBounds$ = function $$oj$$29$$$$ChartAxis$$$$getBounds$$() {
    return this.$_data$ ? this.$_data$.bounds : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartAxis.prototype.getBounds", {$getBounds$:$oj$$29$$.$ChartAxis$.prototype.$getBounds$});
  $oj$$29$$.$SparkChartDataItem$ = function $$oj$$29$$$$SparkChartDataItem$$($data$$153$$) {
    this.$_data$ = $data$$153$$;
  };
  $goog$exportPath_$$("SparkChartDataItem", $oj$$29$$.$SparkChartDataItem$, $oj$$29$$);
  $oj$$29$$.$SparkChartDataItem$.prototype.$getBorderColor$ = function $$oj$$29$$$$SparkChartDataItem$$$$getBorderColor$$() {
    return this.$_data$ ? this.$_data$.borderColor : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getBorderColor", {$getBorderColor$:$oj$$29$$.$SparkChartDataItem$.prototype.$getBorderColor$});
  $oj$$29$$.$SparkChartDataItem$.prototype.$getColor$ = function $$oj$$29$$$$SparkChartDataItem$$$$getColor$$() {
    return this.$_data$ ? this.$_data$.color : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getColor", {$getColor$:$oj$$29$$.$SparkChartDataItem$.prototype.$getColor$});
  $oj$$29$$.$SparkChartDataItem$.prototype.getDate = function $$oj$$29$$$$SparkChartDataItem$$$getDate$() {
    return this.$_data$ ? this.$_data$.date : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getDate", {getDate:$oj$$29$$.$SparkChartDataItem$.prototype.getDate});
  $oj$$29$$.$SparkChartDataItem$.prototype.getFloatValue = function $$oj$$29$$$$SparkChartDataItem$$$getFloatValue$() {
    return this.$_data$ ? this.$_data$.floatValue : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getFloatValue", {getFloatValue:$oj$$29$$.$SparkChartDataItem$.prototype.getFloatValue});
  $oj$$29$$.$SparkChartDataItem$.prototype.$getValue$ = function $$oj$$29$$$$SparkChartDataItem$$$$getValue$$() {
    return this.$_data$ ? this.$_data$.value : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getValue", {$getValue$:$oj$$29$$.$SparkChartDataItem$.prototype.$getValue$});
  $oj$$29$$.$__registerWidget$("oj.ojChart", $$$$29$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{categoryFilter:null, categoryHighlight:null, select:null, viewportChange:null}, $_CreateDvtComponent$:function($context$$52$$, $callback$$101$$, $callbackObj$$8$$) {
    return DvtChart.newInstance($context$$52$$, $callback$$101$$, $callbackObj$$8$$);
  }, $_ProcessStyles$:function() {
    this._super();
    this.options.styleDefaults || (this.options.styleDefaults = {});
    if (!this.options.styleDefaults.colors) {
      var $handler$$48$$ = new $oj$$29$$.$ColorAttributeGroupHandler$;
      this.options.styleDefaults.colors = $handler$$48$$.$getValueRamp$();
    }
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$12$$ = this._super();
    $styleClasses$$12$$.push("oj-chart");
    return $styleClasses$$12$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$13$$ = this._super();
    $styleClasses$$13$$["oj-chart-footnote"] = {path:"footnote/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-slice-label"] = {path:"styleDefaults/sliceLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-subtitle"] = {path:"subtitle/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-title"] = {path:"title/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-xaxis-tick-label"] = {path:"xAxis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-xaxis-title"] = {path:"xAxis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-yaxis-tick-label"] = {path:"yAxis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-yaxis-title"] = {path:"yAxis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-y2axis-tick-label"] = {path:"y2Axis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-y2axis-title"] = {path:"y2Axis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-legend"] = {path:"legend/textStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-legend-title"] = {path:"legend/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$13$$["oj-chart-pan-icon"] = {path:"_resources/panUp", property:"CSS_URL"};
    $styleClasses$$13$$["oj-chart-pan-icon oj-active"] = {path:"_resources/panDown", property:"CSS_URL"};
    $styleClasses$$13$$["oj-chart-select-icon"] = {path:"_resources/selectUp", property:"CSS_URL"};
    $styleClasses$$13$$["oj-chart-select-icon oj-active"] = {path:"_resources/selectDown", property:"CSS_URL"};
    $styleClasses$$13$$["oj-chart-zoom-icon"] = {path:"_resources/zoomUp", property:"CSS_URL"};
    $styleClasses$$13$$["oj-chart-zoom-icon oj-active"] = {path:"_resources/zoomDown", property:"CSS_URL"};
    return $styleClasses$$13$$;
  }, $_GetTranslationMap$:function() {
    var $ret$$36$$ = this._super();
    $ret$$36$$["DvtChartBundle.DEFAULT_GROUP_NAME"] = this.$_GetTranslatedResource$("labelDefaultGroupName", ["groupName"]);
    $ret$$36$$["DvtChartBundle.EMPTY_TEXT"] = this.$_GetTranslatedResource$("msgNoData");
    $ret$$36$$["DvtChartBundle.LABEL_SERIES"] = this.$_GetTranslatedResource$("labelSeries", ["seriesName"]);
    $ret$$36$$["DvtChartBundle.LABEL_GROUP"] = this.$_GetTranslatedResource$("labelGroup", ["groupName"]);
    $ret$$36$$["DvtChartBundle.LABEL_VALUE"] = this.$_GetTranslatedResource$("labelValue", ["value"]);
    $ret$$36$$["DvtChartBundle.LABEL_TARGET_VALUE"] = this.$_GetTranslatedResource$("labelTargetValue", ["targetValue"]);
    $ret$$36$$["DvtChartBundle.LABEL_X"] = this.$_GetTranslatedResource$("labelX", ["x"]);
    $ret$$36$$["DvtChartBundle.LABEL_Y"] = this.$_GetTranslatedResource$("labelY", ["y"]);
    $ret$$36$$["DvtChartBundle.LABEL_Z"] = this.$_GetTranslatedResource$("labelZ", ["z"]);
    $ret$$36$$["DvtChartBundle.LABEL_LOW"] = this.$_GetTranslatedResource$("labelLow", ["low"]);
    $ret$$36$$["DvtChartBundle.LABEL_HIGH"] = this.$_GetTranslatedResource$("labelHigh", ["high"]);
    $ret$$36$$["DvtChartBundle.LABEL_OTHER"] = this.$_GetTranslatedResource$("labelOther");
    $ret$$36$$["DvtChartBundle.PAN"] = this.$_GetTranslatedResource$("tooltipPan");
    $ret$$36$$["DvtChartBundle.MARQUEE_SELECT"] = this.$_GetTranslatedResource$("tooltipSelect");
    $ret$$36$$["DvtChartBundle.MARQUEE_ZOOM"] = this.$_GetTranslatedResource$("tooltipZoom");
    return $ret$$36$$;
  }, $_HandleEvent$:function($event$$329_selectPayload_viewportChangePayload$$) {
    var $selection$$6_type$$86$$ = $event$$329_selectPayload_viewportChangePayload$$ && $event$$329_selectPayload_viewportChangePayload$$.getType ? $event$$329_selectPayload_viewportChangePayload$$.getType() : null;
    if ($selection$$6_type$$86$$ === DvtSelectionEvent.TYPE) {
      if ($selection$$6_type$$86$$ = $event$$329_selectPayload_viewportChangePayload$$.getSelection()) {
        for (var $filterType_selectedItems$$3$$ = [], $highlightType_i$$272$$ = 0;$highlightType_i$$272$$ < $selection$$6_type$$86$$.length;$highlightType_i$$272$$++) {
          var $selectedItem$$3_series$$ = {id:$selection$$6_type$$86$$[$highlightType_i$$272$$].getId(), series:$selection$$6_type$$86$$[$highlightType_i$$272$$].getSeries(), group:$selection$$6_type$$86$$[$highlightType_i$$272$$].getGroup()};
          $filterType_selectedItems$$3$$.push($selectedItem$$3_series$$);
        }
        this.options.selectedItems = $filterType_selectedItems$$3$$;
        $event$$329_selectPayload_viewportChangePayload$$ = {items:$filterType_selectedItems$$3$$, endGroup:$event$$329_selectPayload_viewportChangePayload$$.getEndGroup(), startGroup:$event$$329_selectPayload_viewportChangePayload$$.getStartGroup(), xMax:$event$$329_selectPayload_viewportChangePayload$$.getXMax(), xMin:$event$$329_selectPayload_viewportChangePayload$$.getXMin(), yMax:$event$$329_selectPayload_viewportChangePayload$$.getYMax(), yMin:$event$$329_selectPayload_viewportChangePayload$$.getYMin()};
        this._trigger("select", null, $event$$329_selectPayload_viewportChangePayload$$);
      }
    } else {
      if ($selection$$6_type$$86$$ === DvtCategoryHideShowEvent.TYPE_HIDE || $selection$$6_type$$86$$ === DvtCategoryHideShowEvent.TYPE_SHOW) {
        $filterType_selectedItems$$3$$ = $selection$$6_type$$86$$ === DvtCategoryHideShowEvent.TYPE_HIDE ? "out" : "in";
        $selectedItem$$3_series$$ = this.options.series;
        for ($highlightType_i$$272$$ = 0;$highlightType_i$$272$$ < $selectedItem$$3_series$$.length;$highlightType_i$$272$$++) {
          $selectedItem$$3_series$$[$highlightType_i$$272$$].name == $event$$329_selectPayload_viewportChangePayload$$.getCategory() && ($selectedItem$$3_series$$[$highlightType_i$$272$$].visibility = $selection$$6_type$$86$$ === DvtCategoryHideShowEvent.TYPE_HIDE ? "hidden" : "visible");
        }
        this._trigger("categoryFilter", null, {category:$event$$329_selectPayload_viewportChangePayload$$.getCategory(), type:$filterType_selectedItems$$3$$});
      } else {
        $selection$$6_type$$86$$ === DvtCategoryRolloverEvent.TYPE_OVER || $selection$$6_type$$86$$ === DvtCategoryRolloverEvent.TYPE_OUT ? ($highlightType_i$$272$$ = $selection$$6_type$$86$$ === DvtCategoryRolloverEvent.TYPE_OVER ? "on" : "off", this._trigger("categoryHighlight", null, {categories:[$event$$329_selectPayload_viewportChangePayload$$.getCategory()], type:$highlightType_i$$272$$})) : $selection$$6_type$$86$$ === DvtChartViewportChangeEvent.TYPE ? ($event$$329_selectPayload_viewportChangePayload$$ = 
        {endGroup:$event$$329_selectPayload_viewportChangePayload$$.getEndGroup(), startGroup:$event$$329_selectPayload_viewportChangePayload$$.getStartGroup(), xMax:$event$$329_selectPayload_viewportChangePayload$$.getXMax(), xMin:$event$$329_selectPayload_viewportChangePayload$$.getXMin(), yMax:$event$$329_selectPayload_viewportChangePayload$$.getYMax(), yMin:$event$$329_selectPayload_viewportChangePayload$$.getYMin()}, this._trigger("viewportChange", null, $event$$329_selectPayload_viewportChangePayload$$)) : 
        this._super($event$$329_selectPayload_viewportChangePayload$$);
      }
    }
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    var $resources$$1$$ = this.options._resources;
    $resources$$1$$.overviewGrippy = $oj$$29$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/drag_horizontal.png");
    $resources$$1$$.panCursorDown = $oj$$29$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/hand-closed.cur");
    $resources$$1$$.panCursorUp = $oj$$29$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/hand-open.cur");
  }, getNodeBySubId:function($locator$$23$$) {
    return this._super($locator$$23$$);
  }, getSubIdByNode:function($node$$72$$) {
    return this._super($node$$72$$);
  }, getTitle:function() {
    return this.$_component$.getAutomation().getTitle();
  }, getGroup:function($groupIndex$$) {
    return this.$_component$.getAutomation().getGroup($groupIndex$$);
  }, getSeries:function($seriesIndex$$) {
    return this.$_component$.getAutomation().getSeries($seriesIndex$$);
  }, getGroupCount:function() {
    return this.$_component$.getAutomation().getGroupCount();
  }, getSeriesCount:function() {
    return this.$_component$.getAutomation().getSeriesCount();
  }, getDataItem:function($seriesIndex$$1$$, $groupIndex$$1$$) {
    var $auto$$12$$ = this.$_component$.getAutomation();
    return new $oj$$29$$.$ChartDataItem$($auto$$12$$.getDataItem($seriesIndex$$1$$, $groupIndex$$1$$));
  }, getLegend:function() {
    var $auto$$13$$ = this.$_component$.getAutomation();
    return new $oj$$29$$.$ChartLegend$($auto$$13$$.getLegend());
  }, getPlotArea:function() {
    var $auto$$14$$ = this.$_component$.getAutomation();
    return new $oj$$29$$.$ChartPlotArea$($auto$$14$$.getPlotArea());
  }, getXAxis:function() {
    var $auto$$15$$ = this.$_component$.getAutomation();
    return new $oj$$29$$.$ChartAxis$($auto$$15$$.getXAxis());
  }, getYAxis:function() {
    var $auto$$16$$ = this.$_component$.getAutomation();
    return new $oj$$29$$.$ChartAxis$($auto$$16$$.getYAxis());
  }, getY2Axis:function() {
    var $auto$$17$$ = this.$_component$.getAutomation();
    return new $oj$$29$$.$ChartAxis$($auto$$17$$.getY2Axis());
  }});
  $oj$$29$$.$ChartPlotArea$ = function $$oj$$29$$$$ChartPlotArea$$($data$$154$$) {
    this.$_data$ = $data$$154$$;
  };
  $goog$exportPath_$$("ChartPlotArea", $oj$$29$$.$ChartPlotArea$, $oj$$29$$);
  $oj$$29$$.$ChartPlotArea$.prototype.$getBounds$ = function $$oj$$29$$$$ChartPlotArea$$$$getBounds$$() {
    return this.$_data$ ? this.$_data$.bounds : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartPlotArea.prototype.getBounds", {$getBounds$:$oj$$29$$.$ChartPlotArea$.prototype.$getBounds$});
  $oj$$29$$.$ChartLegend$ = function $$oj$$29$$$$ChartLegend$$($data$$155$$) {
    this.$_data$ = $data$$155$$;
  };
  $goog$exportPath_$$("ChartLegend", $oj$$29$$.$ChartLegend$, $oj$$29$$);
  $oj$$29$$.$ChartLegend$.prototype.getTitle = function $$oj$$29$$$$ChartLegend$$$getTitle$() {
    return this.$_data$ ? this.$_data$.title : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartLegend.prototype.getTitle", {getTitle:$oj$$29$$.$ChartLegend$.prototype.getTitle});
  $oj$$29$$.$ChartLegend$.prototype.$getBounds$ = function $$oj$$29$$$$ChartLegend$$$$getBounds$$() {
    return this.$_data$ ? this.$_data$.bounds : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartLegend.prototype.getBounds", {$getBounds$:$oj$$29$$.$ChartLegend$.prototype.$getBounds$});
  $oj$$29$$.$__registerWidget$("oj.ojSparkChart", $$$$29$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", $_CreateDvtComponent$:function($context$$53$$, $callback$$102$$, $callbackObj$$9$$) {
    return DvtSparkChart.newInstance($context$$53$$, $callback$$102$$, $callbackObj$$9$$);
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$14$$ = this._super();
    $styleClasses$$14$$.push("oj-sparkchart");
    return $styleClasses$$14$$;
  }, $_Render$:function() {
    this.options.shortDesc = this.element.attr("title");
    this._super();
  }, getNodeBySubId:function($locator$$24$$) {
    return this._super($locator$$24$$);
  }, getSubIdByNode:function($node$$73$$) {
    return this._super($node$$73$$);
  }, getDataItem:function($itemIndex$$) {
    var $auto$$18$$ = this.$_component$.getAutomation();
    return new $oj$$29$$.$SparkChartDataItem$($auto$$18$$.getDataItem($itemIndex$$));
  }});
  $oj$$29$$.$ChartDataItem$ = function $$oj$$29$$$$ChartDataItem$$($data$$156$$) {
    this.$_data$ = $data$$156$$;
  };
  $goog$exportPath_$$("ChartDataItem", $oj$$29$$.$ChartDataItem$, $oj$$29$$);
  $oj$$29$$.$ChartDataItem$.prototype.getGroup = function $$oj$$29$$$$ChartDataItem$$$getGroup$() {
    return this.$_data$ ? this.$_data$.group : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getGroup", {getGroup:$oj$$29$$.$ChartDataItem$.prototype.getGroup});
  $oj$$29$$.$ChartDataItem$.prototype.getSeries = function $$oj$$29$$$$ChartDataItem$$$getSeries$() {
    return this.$_data$ ? this.$_data$.series : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getSeries", {getSeries:$oj$$29$$.$ChartDataItem$.prototype.getSeries});
  $oj$$29$$.$ChartDataItem$.prototype.$getBorderColor$ = function $$oj$$29$$$$ChartDataItem$$$$getBorderColor$$() {
    return this.$_data$ ? this.$_data$.borderColor : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getBorderColor", {$getBorderColor$:$oj$$29$$.$ChartDataItem$.prototype.$getBorderColor$});
  $oj$$29$$.$ChartDataItem$.prototype.$getColor$ = function $$oj$$29$$$$ChartDataItem$$$$getColor$$() {
    return this.$_data$ ? this.$_data$.color : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getColor", {$getColor$:$oj$$29$$.$ChartDataItem$.prototype.$getColor$});
  $oj$$29$$.$ChartDataItem$.prototype.$getLabel$ = function $$oj$$29$$$$ChartDataItem$$$$getLabel$$() {
    return this.$_data$ ? this.$_data$.label : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getLabel", {$getLabel$:$oj$$29$$.$ChartDataItem$.prototype.$getLabel$});
  $oj$$29$$.$ChartDataItem$.prototype.$getValue$ = function $$oj$$29$$$$ChartDataItem$$$$getValue$$() {
    return this.$_data$ ? this.$_data$.value : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getValue", {$getValue$:$oj$$29$$.$ChartDataItem$.prototype.$getValue$});
  $oj$$29$$.$ChartDataItem$.prototype.$getTargetValue$ = function $$oj$$29$$$$ChartDataItem$$$$getTargetValue$$() {
    return this.$_data$ ? this.$_data$.targetValue : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getTargetValue", {$getTargetValue$:$oj$$29$$.$ChartDataItem$.prototype.$getTargetValue$});
  $oj$$29$$.$ChartDataItem$.prototype.$getTooltip$ = function $$oj$$29$$$$ChartDataItem$$$$getTooltip$$() {
    return this.$_data$ ? this.$_data$.tooltip : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getTooltip", {$getTooltip$:$oj$$29$$.$ChartDataItem$.prototype.$getTooltip$});
  $oj$$29$$.$ChartDataItem$.prototype.$getX$ = function $$oj$$29$$$$ChartDataItem$$$$getX$$() {
    return this.$_data$ ? this.$_data$.x : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getX", {$getX$:$oj$$29$$.$ChartDataItem$.prototype.$getX$});
  $oj$$29$$.$ChartDataItem$.prototype.$getY$ = function $$oj$$29$$$$ChartDataItem$$$$getY$$() {
    return this.$_data$ ? this.$_data$.y : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getY", {$getY$:$oj$$29$$.$ChartDataItem$.prototype.$getY$});
  $oj$$29$$.$ChartDataItem$.prototype.$getZ$ = function $$oj$$29$$$$ChartDataItem$$$$getZ$$() {
    return this.$_data$ ? this.$_data$.z : null;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.getZ", {$getZ$:$oj$$29$$.$ChartDataItem$.prototype.$getZ$});
  $oj$$29$$.$ChartDataItem$.prototype.isSelected = function $$oj$$29$$$$ChartDataItem$$$isSelected$() {
    return this.$_data$ ? this.$_data$.selected : !1;
  };
  $oj$$29$$.$Object$.$exportPrototypeSymbol$("ChartDataItem.prototype.isSelected", {isSelected:$oj$$29$$.$ChartDataItem$.prototype.isSelected});
});
