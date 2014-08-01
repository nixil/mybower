/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtThematicMap"], function($oj$$23$$, $$$$23$$) {
  $oj$$23$$.$__registerWidget$("oj.ojThematicMap", $$$$23$$.oj.dvtBaseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{select:null, load:null}, $_selectedItems$:{}, $_loadedBasemaps$:[], $_checkBasemaps$:[], $_supportedLocales$:"ar cs da de el es fi fr hu it iw ja ko nl no pl pt pt_BR ro ru sk sv th tr zh_CN zh_TW".split(" "), $_CreateDvtComponent$:function($context$$47$$, $callback$$95$$, $callbackObj$$6$$) {
    return DvtThematicMap.newInstance($context$$47$$, $callback$$95$$, $callbackObj$$6$$);
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$8$$ = this._super();
    $styleClasses$$8$$.push("oj-thematicmap");
    return $styleClasses$$8$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$9$$ = this._super();
    $styleClasses$$9$$["oj-dvtbase oj-thematicmap"] = {path:"animationDuration", property:"animation-duration"};
    $styleClasses$$9$$["oj-thematicmap-arealayer"] = [{path:"styleDefaults/areaStyle", property:"CSS_BACKGROUND_PROPERTIES"}, {path:"styleDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$9$$["oj-thematicmap-area"] = {path:"styleDefaults/dataAreaDefaults/borderColor", property:"border-top-color"};
    $styleClasses$$9$$["oj-thematicmap-area oj-hover"] = {path:"styleDefaults/dataAreaDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$9$$["oj-thematicmap-area oj-selected"] = [{path:"styleDefaults/dataAreaDefaults/selectedInnerColor", property:"border-top-color"}, {path:"styleDefaults/dataAreaDefaults/selectedOuterColor", property:"border-bottom-color"}];
    $styleClasses$$9$$["oj-thematicmap-marker"] = [{path:"styleDefaults/dataMarkerDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}, {path:"styleDefaults/dataMarkerDefaults/color", property:"background-color"}, {path:"styleDefaults/dataMarkerDefaults/opacity", property:"opacity"}, {path:"styleDefaults/dataMarkerDefaults/borderStyle", property:"border-style"}, {path:"styleDefaults/dataMarkerDefaults/borderColor", property:"border-top-color"}, {path:"styleDefaults/dataMarkerDefaults/borderWidth", 
    property:"border-width"}];
    return $styleClasses$$9$$;
  }, $_Render$:function() {
    this.$_loadBasemap$();
    for (var $i$$234$$ = 0;$i$$234$$ < this.$_checkBasemaps$.length;$i$$234$$++) {
      if (!this.$_loadedBasemaps$[this.$_checkBasemaps$[$i$$234$$]]) {
        return;
      }
    }
    this.$_checkBasemaps$ = [];
    this._super();
    this._trigger("load", null, null);
  }, $_loadBasemap$:function() {
    var $basemap$$ = this.options.basemap;
    if ($basemap$$) {
      var $locale$$22$$ = $oj$$23$$.$Config$.$getLocale$(), $basemap$$ = $basemap$$.charAt(0).toUpperCase() + $basemap$$.slice(1), $areaLayers_pointDataLayers$$ = this.options.areaLayers;
      if ($areaLayers_pointDataLayers$$) {
        for (var $i$$235$$ = 0;$i$$235$$ < $areaLayers_pointDataLayers$$.length;$i$$235$$++) {
          var $layer$$ = $areaLayers_pointDataLayers$$[$i$$235$$].layer;
          $layer$$ && ($layer$$ = $layer$$.charAt(0).toUpperCase() + $layer$$.slice(1), this.$_loadBasemapHelper$($basemap$$, $layer$$, $locale$$22$$));
        }
      }
      ($areaLayers_pointDataLayers$$ = this.options.pointDataLayers) && 0 < $areaLayers_pointDataLayers$$.length && this.$_loadBasemapHelper$($basemap$$, "Cities", $locale$$22$$);
    }
  }, $_loadResourceByUrl$:function($url$$19$$) {
    if (!this.$_loadedBasemaps$[$url$$19$$]) {
      var $resolvedUrl$$ = $oj$$23$$.$Config$.$getResourceUrl$($url$$19$$), $thisRef$$ = this, $loadedBundles$$ = this.$_loadedBasemaps$;
      $$$$23$$.getScript($resolvedUrl$$, function() {
        $loadedBundles$$[$url$$19$$] = !0;
        $thisRef$$.$_Render$();
      });
    }
  }, $_loadBasemapHelper$:function($basemap$$1_bundleName$$, $i$$236_layer$$1$$, $bundleUrl_locale$$23_localeList$$) {
    var $relativeUrl$$ = "resources/internal-deps/dvt/thematicMap/basemaps/DvtBaseMap" + $basemap$$1_bundleName$$ + $i$$236_layer$$1$$ + ".js";
    this.$_checkBasemaps$.push($relativeUrl$$);
    if (-1 === $bundleUrl_locale$$23_localeList$$.indexOf("en")) {
      var $splitLocale$$ = $bundleUrl_locale$$23_localeList$$.split("_");
      $bundleUrl_locale$$23_localeList$$ = [];
      for (var $j$$36$$ = 0;$j$$36$$ < $splitLocale$$.length;$j$$36$$++) {
        for (var $tempLocale$$ = "", $k$$6$$ = 0;$k$$6$$ < $j$$36$$ + 1;$k$$6$$++) {
          0 != $k$$6$$ && ($tempLocale$$ += "_"), $tempLocale$$ += $splitLocale$$[$k$$6$$];
        }
        $bundleUrl_locale$$23_localeList$$.push($tempLocale$$);
      }
      $basemap$$1_bundleName$$ = "resources/internal-deps/dvt/thematicMap/resourceBundles/" + $basemap$$1_bundleName$$ + $i$$236_layer$$1$$ + "Bundle";
      for ($i$$236_layer$$1$$ = $bundleUrl_locale$$23_localeList$$.length - 1;0 <= $i$$236_layer$$1$$;$i$$236_layer$$1$$++) {
        if (-1 !== this.$_supportedLocales$.indexOf($bundleUrl_locale$$23_localeList$$[$i$$236_layer$$1$$])) {
          $bundleUrl_locale$$23_localeList$$ = $basemap$$1_bundleName$$ + "_" + $bundleUrl_locale$$23_localeList$$[$i$$236_layer$$1$$] + ".js";
          this.$_checkBasemaps$.push($bundleUrl_locale$$23_localeList$$);
          this.$_loadResourceByUrl$($bundleUrl_locale$$23_localeList$$);
          break;
        }
      }
    }
    this.$_loadResourceByUrl$($relativeUrl$$);
  }, $_HandleEvent$:function($event$$256_i$$237$$) {
    var $selectedItems$$1$$, $selection$$4$$, $selectedItem$$1$$;
    if (($event$$256_i$$237$$ && $event$$256_i$$237$$.getType ? $event$$256_i$$237$$.getType() : null) === DvtSelectionEvent.TYPE) {
      $selectedItems$$1$$ = [];
      $selection$$4$$ = $event$$256_i$$237$$.getSelection();
      var $dataLayerId$$ = $event$$256_i$$237$$.getParamValue("clientId");
      for ($event$$256_i$$237$$ = 0;$event$$256_i$$237$$ < $selection$$4$$.length;$event$$256_i$$237$$++) {
        $selectedItem$$1$$ = {id:$selection$$4$$[$event$$256_i$$237$$], dataLayerId:$dataLayerId$$}, $selectedItems$$1$$.push($selectedItem$$1$$), this.$_selectedItems$[$dataLayerId$$] = $selection$$4$$;
      }
      this.$_updateSelectionItems$();
      this._trigger("select", null, {items:$selectedItems$$1$$});
    } else {
      this._super($event$$256_i$$237$$);
    }
  }, $_updateSelectionItems$:function() {
    var $als_pdls$$ = this.options.pointDataLayers;
    if ($als_pdls$$) {
      for (var $i$$238$$ = 0;$i$$238$$ < $als_pdls$$.length;$i$$238$$++) {
        this.$_selectedItems$[$als_pdls$$[$i$$238$$].id] && ($als_pdls$$[$i$$238$$].selectedItems = this.$_selectedItems$[$als_pdls$$[$i$$238$$].id]);
      }
    }
    $als_pdls$$ = this.options.areaLayers;
    for ($i$$238$$ = 0;$i$$238$$ < $als_pdls$$.length;$i$$238$$++) {
      var $adl$$ = $als_pdls$$[$i$$238$$].areaDataLayer;
      this.$_selectedItems$[$adl$$.id] && ($adl$$.selectedItems = this.$_selectedItems$[$adl$$.id]);
    }
  }, getNodeBySubId:function($locator$$16$$) {
    return this._super($locator$$16$$);
  }, getSubIdByNode:function($node$$32$$) {
    return this._super($node$$32$$);
  }, getArea:function($dataLayerId$$1$$, $id$$30$$) {
    var $auto$$4$$ = this.$_component$.getAutomation();
    return new $oj$$23$$.$ThematicMapArea$($auto$$4$$.getData($dataLayerId$$1$$, "area", $id$$30$$));
  }, getMarker:function($dataLayerId$$2$$, $id$$31$$) {
    var $auto$$5$$ = this.$_component$.getAutomation();
    return new $oj$$23$$.$ThematicMapMarker$($auto$$5$$.getData($dataLayerId$$2$$, "marker", $id$$31$$));
  }});
  $oj$$23$$.$ThematicMapMarker$ = function $$oj$$23$$$$ThematicMapMarker$$($data$$128$$) {
    this.$_data$ = $data$$128$$;
  };
  $goog$exportPath_$$("ThematicMapMarker", $oj$$23$$.$ThematicMapMarker$, $oj$$23$$);
  $oj$$23$$.$ThematicMapMarker$.prototype.$getColor$ = function $$oj$$23$$$$ThematicMapMarker$$$$getColor$$() {
    return this.$_data$ ? this.$_data$.color : null;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ThematicMapMarker.prototype.getColor", {$getColor$:$oj$$23$$.$ThematicMapMarker$.prototype.$getColor$});
  $oj$$23$$.$ThematicMapMarker$.prototype.$getTooltip$ = function $$oj$$23$$$$ThematicMapMarker$$$$getTooltip$$() {
    return this.$_data$ ? this.$_data$.tooltip : null;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ThematicMapMarker.prototype.getTooltip", {$getTooltip$:$oj$$23$$.$ThematicMapMarker$.prototype.$getTooltip$});
  $oj$$23$$.$ThematicMapMarker$.prototype.$getLabel$ = function $$oj$$23$$$$ThematicMapMarker$$$$getLabel$$() {
    return this.$_data$ ? this.$_data$.label : null;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ThematicMapMarker.prototype.getLabel", {$getLabel$:$oj$$23$$.$ThematicMapMarker$.prototype.$getLabel$});
  $oj$$23$$.$ThematicMapMarker$.prototype.isSelected = function $$oj$$23$$$$ThematicMapMarker$$$isSelected$() {
    return this.$_data$ ? this.$_data$.isSelected : !1;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ThematicMapMarker.prototype.isSelected", {isSelected:$oj$$23$$.$ThematicMapMarker$.prototype.isSelected});
  $oj$$23$$.$ThematicMapArea$ = function $$oj$$23$$$$ThematicMapArea$$($data$$129$$) {
    this.$_data$ = $data$$129$$;
  };
  $goog$exportPath_$$("ThematicMapArea", $oj$$23$$.$ThematicMapArea$, $oj$$23$$);
  $oj$$23$$.$ThematicMapArea$.prototype.$getColor$ = function $$oj$$23$$$$ThematicMapArea$$$$getColor$$() {
    return this.$_data$ ? this.$_data$.color : null;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ThematicMapArea.prototype.getColor", {$getColor$:$oj$$23$$.$ThematicMapArea$.prototype.$getColor$});
  $oj$$23$$.$ThematicMapArea$.prototype.$getTooltip$ = function $$oj$$23$$$$ThematicMapArea$$$$getTooltip$$() {
    return this.$_data$ ? this.$_data$.tooltip : null;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ThematicMapArea.prototype.getTooltip", {$getTooltip$:$oj$$23$$.$ThematicMapArea$.prototype.$getTooltip$});
  $oj$$23$$.$ThematicMapArea$.prototype.$getLabel$ = function $$oj$$23$$$$ThematicMapArea$$$$getLabel$$() {
    return this.$_data$ ? this.$_data$.label : null;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ThematicMapArea.prototype.getLabel", {$getLabel$:$oj$$23$$.$ThematicMapArea$.prototype.$getLabel$});
  $oj$$23$$.$ThematicMapArea$.prototype.isSelected = function $$oj$$23$$$$ThematicMapArea$$$isSelected$() {
    return this.$_data$ ? this.$_data$.isSelected : !1;
  };
  $oj$$23$$.$Object$.$exportPrototypeSymbol$("ThematicMapArea.prototype.isSelected", {isSelected:$oj$$23$$.$ThematicMapArea$.prototype.isSelected});
});
