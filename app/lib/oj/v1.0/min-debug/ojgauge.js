/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtGauge"], function($oj$$17$$, $$$$17$$) {
  $oj$$17$$.$__registerWidget$("oj.dvtBaseGauge", $$$$17$$.oj.dvtBaseComponent, {_setOption:function($key$$78$$, $value$$185$$) {
    var $bUserDrivenChange$$ = this.$_bUserDrivenChange$;
    this.$_bUserDrivenChange$ = !1;
    var $previousValue$$3$$, $newValue$$7_valueOptionSet$$ = !1;
    "string" === typeof $key$$78$$ && void 0 !== $value$$185$$ ? "value" === $key$$78$$ && ($newValue$$7_valueOptionSet$$ = !0, $previousValue$$3$$ = this.options.value) : "object" === typeof $key$$78$$ && $key$$78$$ && void 0 !== $key$$78$$.value && ($newValue$$7_valueOptionSet$$ = !0, $previousValue$$3$$ = this.options.value);
    var $ret$$27$$ = this._superApply(arguments);
    $newValue$$7_valueOptionSet$$ && ($newValue$$7_valueOptionSet$$ = this.options.value, $oj$$17$$.$Object$.$__innerEquals$($previousValue$$3$$, $newValue$$7_valueOptionSet$$) || this._trigger("optionChange", null, {option:"value", previousValue:$previousValue$$3$$, value:$newValue$$7_valueOptionSet$$, optionMetadata:{writeback:$bUserDrivenChange$$ ? "shouldWrite" : "shouldNotWrite"}}));
    return $ret$$27$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$1$$ = this._super();
    $styleClasses$$1$$["oj-gauge-metric-label"] = {path:"metricLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$1$$["oj-gauge-tick-label"] = {path:"tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    return $styleClasses$$1$$;
  }, $_GetTranslationMap$:function() {
    var $ret$$28$$ = this._super();
    $ret$$28$$["DvtGaugeBundle.EMPTY_TEXT"] = this.$_GetTranslatedResource$("msgNoData");
    return $ret$$28$$;
  }, $_HandleEvent$:function($event$$186$$) {
    var $type$$79$$ = $event$$186$$ && $event$$186$$.getType ? $event$$186$$.getType() : null;
    $type$$79$$ === DvtValueChangeEvent.TYPE ? (this.$_bUserDrivenChange$ = !0, this.option("value", $event$$186$$.getNewValue())) : $type$$79$$ === DvtValueChangeEvent.TYPE_INPUT ? this._trigger("input", null, {value:$event$$186$$.getNewValue()}) : this._super($event$$186$$);
  }});
  $oj$$17$$.$__registerWidget$("oj.ojStatusMeterGauge", $$$$17$$.oj.dvtBaseGauge, {version:"1.0.0", widgetEventPrefix:"oj", options:{input:null, optionChange:null}, $_CreateDvtComponent$:function($context$$42$$, $callback$$89$$, $callbackObj$$1$$) {
    return DvtStatusMeterGauge.newInstance($context$$42$$, $callback$$89$$, $callbackObj$$1$$);
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$2$$ = this._super();
    $styleClasses$$2$$.push("oj-statusmetergauge");
    return $styleClasses$$2$$;
  }, $_Render$:function() {
    this.options.shortDesc = this.element.attr("title");
    this._super();
  }, getMetricLabel:function() {
    return this.$_component$.getAutomation().getMetricLabel();
  }});
  $oj$$17$$.$__registerWidget$("oj.ojLedGauge", $$$$17$$.oj.dvtBaseGauge, {version:"1.0.0", widgetEventPrefix:"oj", options:{}, $_CreateDvtComponent$:function($context$$43$$, $callback$$90$$, $callbackObj$$2$$) {
    return DvtLedGauge.newInstance($context$$43$$, $callback$$90$$, $callbackObj$$2$$);
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$3$$ = this._super();
    $styleClasses$$3$$.push("oj-ledgauge");
    return $styleClasses$$3$$;
  }, $_Render$:function() {
    this.options.shortDesc = this.element.attr("title");
    this._super();
  }, getMetricLabel:function() {
    return this.$_component$.getAutomation().getMetricLabel();
  }});
  $oj$$17$$.$__registerWidget$("oj.ojRatingGauge", $$$$17$$.oj.dvtBaseGauge, {version:"1.0.0", widgetEventPrefix:"oj", options:{input:null, optionChange:null}, $_CreateDvtComponent$:function($context$$44$$, $callback$$91$$, $callbackObj$$3$$) {
    return DvtRatingGauge.newInstance($context$$44$$, $callback$$91$$, $callbackObj$$3$$);
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$4$$ = this._super();
    $styleClasses$$4$$.push("oj-ratinggauge");
    return $styleClasses$$4$$;
  }, $_Render$:function() {
    this.options.shortDesc = this.element.attr("title");
    this._super();
  }});
  $oj$$17$$.$__registerWidget$("oj.ojDialGauge", $$$$17$$.oj.dvtBaseGauge, {version:"1.0.0", widgetEventPrefix:"oj", options:{input:null, optionChange:null}, $_CreateDvtComponent$:function($context$$45$$, $callback$$92$$, $callbackObj$$4$$) {
    return DvtDialGauge.newInstance($context$$45$$, $callback$$92$$, $callbackObj$$4$$);
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$5$$ = this._super();
    $styleClasses$$5$$.push("oj-dialgauge");
    return $styleClasses$$5$$;
  }, $_Render$:function() {
    this.options.shortDesc = this.element.attr("title");
    this.$_SetImages$();
    this._super();
  }, $_SetImages$:function() {
    var $backgroundImages$$ = this.options.background, $indicatorImages$$ = this.options.indicator, $background_indicator$$ = "", $background_indicator$$ = "";
    "string" === typeof $backgroundImages$$ && ($background_indicator$$ = "rectangleAlta" === $backgroundImages$$ ? [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-rectangle-200x200.png"), width:200, height:154}, {src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-rectangle-400x400.png"), width:400, height:309}] : "domeAlta" === $backgroundImages$$ ? [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-dome-200x200.png"), 
    width:200, height:154}, {src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-dome-400x400.png"), width:400, height:309}] : "circleAntique" === $backgroundImages$$ ? [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-circle-200x200.png"), width:200, height:200}, {src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-circle-400x400.png"), width:400, height:400}] : "rectangleAntique" === $backgroundImages$$ ? 
    [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-rectangle-200x200.png"), width:200, height:168}, {src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-rectangle-400x400.png"), width:400, height:335}] : "domeAntique" === $backgroundImages$$ ? [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-dome-200x200.png"), width:200, height:176}, {src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-dome-400x400.png"), 
    width:400, height:352}] : "circleLight" === $backgroundImages$$ ? [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-circle-200x200.png"), width:200, height:200}, {src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-circle-400x400.png"), width:400, height:400}] : "rectangleLight" === $backgroundImages$$ ? [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-rectangle-200x200.png"), width:200, height:154}, 
    {src:$oj$$17$$.$Config$.$getResourceUrl$("resourcesinternal-deps/dvt/gauge/light-rectangle-400x400.png"), width:400, height:307}] : "domeLight" === $backgroundImages$$ ? [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-dome-200x200.png"), width:200, height:138}, {src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-dome-400x400.png"), width:400, height:276}] : "circleDark" === $backgroundImages$$ ? [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-circle-200x200.png"), 
    width:200, height:200}, {src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-circle-400x400.png"), width:400, height:400}] : "rectangleDark" === $backgroundImages$$ ? [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-rectangle-200x200.png"), width:200, height:154}, {src:$oj$$17$$.$Config$.$getResourceUrl$("resourcesinternal-deps/dvt/gauge/dark-rectangle-400x400.png"), width:400, height:307}] : "domeDark" === $backgroundImages$$ ? [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-dome-200x200.png"), 
    width:200, height:138}, {src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-dome-400x400.png"), width:400, height:276}] : [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-circle-200x200.png"), width:200, height:200}, {src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-circle-400x400.png"), width:400, height:400}], this.options._backgroundImages = $background_indicator$$);
    "string" === typeof $indicatorImages$$ && ($background_indicator$$ = "needleAntique" === $indicatorImages$$ ? [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-needle-1600x1600.png"), width:81, height:734}] : "needleDark" === $indicatorImages$$ ? [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-needle-1600x1600.png"), width:454, height:652}] : "needleLight" === $indicatorImages$$ ? [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-needle-1600x1600.png"), 
    width:454, height:652}] : [{src:$oj$$17$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-needle-1600x1600.png"), width:374, height:575}], this.options._indicatorImages = $background_indicator$$);
  }, getMetricLabel:function() {
    return this.$_component$.getAutomation().getMetricLabel();
  }});
});
