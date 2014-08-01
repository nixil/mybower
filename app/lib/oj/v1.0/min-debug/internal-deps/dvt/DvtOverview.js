define(['./DvtToolkit'], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
    // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  D.$DvtTimeUtils$$ = {$supportsTouch$:function $$DvtTimeUtils$$$$supportsTouch$$() {
  return(0,D.$DvtAgent$isTouchDevice$$)()
}};
D.$DvtObj$$.$createSubclass$(D.$DvtTimeUtils$$, D.$DvtObj$$, "DvtTimeUtils");
D.$DvtTimeUtils$$.$getDatePosition$ = function $$DvtTimeUtils$$$$getDatePosition$$($denominator$$1_startTime$$4$$, $endTime$$4$$, $number$$2_time$$4$$, $width$$69$$) {
  $number$$2_time$$4$$ = ($number$$2_time$$4$$ - $denominator$$1_startTime$$4$$) * $width$$69$$;
  $denominator$$1_startTime$$4$$ = $endTime$$4$$ - $denominator$$1_startTime$$4$$;
  return 0 == $number$$2_time$$4$$ || 0 == $denominator$$1_startTime$$4$$ ? 0 : $number$$2_time$$4$$ / $denominator$$1_startTime$$4$$
};
D.$DvtTimeUtils$$.$getPositionDate$ = function $$DvtTimeUtils$$$$getPositionDate$$($startTime$$5$$, $endTime$$5_number$$3$$, $pos$$33$$, $width$$70$$) {
  $endTime$$5_number$$3$$ = $pos$$33$$ * ($endTime$$5_number$$3$$ - $startTime$$5$$);
  return 0 == $endTime$$5_number$$3$$ || 0 == $width$$70$$ ? $startTime$$5$$ : $endTime$$5_number$$3$$ / $width$$70$$ + $startTime$$5$$
};
D.$DvtOverview$$ = function $$DvtOverview$$$($context$$184$$, $callback$$75$$, $callbackObj$$48$$) {
  this.Init($context$$184$$, $callback$$75$$, $callbackObj$$48$$)
};
(0,D.$goog$exportSymbol$$)("DvtOverview", D.$DvtOverview$$);
D.$DvtObj$$.$createSubclass$(D.$DvtOverview$$, D.$DvtContainer$$, "DvtOverview");
D.$DvtOverview$$.prototype.Init = function $$DvtOverview$$$$Init$($context$$185$$, $callback$$76$$, $callbackObj$$49$$) {
  D.$DvtOverview$$.$superclass$.Init.call(this, $context$$185$$);
  this.$_callback$ = $callback$$76$$;
  this.$_callbackObj$ = $callbackObj$$49$$;
  this.$_lastChildIndex$ = this.$isFlashEnvironment$() ? 7 : 6;
  if(this.$_callback$ != D.$JSCompiler_alias_NULL$$ || this.$_callbackObj$ != D.$JSCompiler_alias_NULL$$) {
    D.$DvtTimeUtils$$.$supportsTouch$() ? (this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHSTART$, this.$HandleTouchStart$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHMOVE$, this.$HandleTouchMove$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtTouchEvent$$.$TOUCHEND$, this.$HandleTouchEnd$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this)) : (this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOVER$$, 
    this.$HandleShapeMouseOver$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEOUT$$, this.$HandleShapeMouseOut$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, this.$HandleShapeClick$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEDOWN$$, this.$HandleMouseDown$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEUP$$, this.$HandleMouseUp$, D.$JSCompiler_alias_FALSE$$, 
    this), this.$addEvtListener$(D.$DvtMouseEvent$MOUSEMOVE$$, this.$HandleMouseMove$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtKeyboardEvent$KEYDOWN$$, this.$HandleKeyDown$, D.$JSCompiler_alias_FALSE$$, this), this.$addEvtListener$(D.$DvtKeyboardEvent$KEYUP$$, this.$HandleKeyUp$, D.$JSCompiler_alias_FALSE$$, this))
  }
  this.$_initPos$ = 0
};
D.$DvtOverview$$.prototype.$setViewportRange$ = function $$DvtOverview$$$$$setViewportRange$$($start$$26$$, $end$$20$$) {
  var $viewportStart$$ = this.$getDatePosition$($start$$26$$), $slidingWindow$$1_viewportEnd$$ = this.$getDatePosition$($end$$20$$);
  if(!($viewportStart$$ < this.$_leftMargin$ || $slidingWindow$$1_viewportEnd$$ > (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)(this))) {
    var $size$$22$$ = window.Math.max($slidingWindow$$1_viewportEnd$$ - $viewportStart$$, (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)(this));
    0 < $size$$22$$ && (0 <= $viewportStart$$ && $slidingWindow$$1_viewportEnd$$ <= this.$Width$) && ($slidingWindow$$1_viewportEnd$$ = this.$getChildAt$(1), this.$isRTL$() ? (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $slidingWindow$$1_viewportEnd$$, this.$Width$ - ($viewportStart$$ + $size$$22$$)) : (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $slidingWindow$$1_viewportEnd$$, $viewportStart$$), (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)(this, $slidingWindow$$1_viewportEnd$$, 
    $size$$22$$), (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)(this))
  }
};
D.$JSCompiler_StaticMethods_isFeatureOff$$ = function $$JSCompiler_StaticMethods_isFeatureOff$$$($JSCompiler_StaticMethods_isFeatureOff$self$$) {
  return $JSCompiler_StaticMethods_isFeatureOff$self$$.$_featuresOff$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_FALSE$$ : -1 != $JSCompiler_StaticMethods_isFeatureOff$self$$.$_featuresOff$.indexOf("zoom")
};
D.$DvtOverview$$.prototype.$render$ = function $$DvtOverview$$$$$render$$($interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$, $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$, $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$) {
  if($interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$ == D.$JSCompiler_alias_NULL$$) {
    var $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$ = this.$_start$, $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$ = this.$_end$, $color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$ = 
    this.$getChildAt$(1), $end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$);
    $color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$ != D.$JSCompiler_alias_NULL$$ && 0 != $end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$ && (this.$_renderStart$ = D.$DvtTimeUtils$$.$getPositionDate$($day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$, 
    $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$, $end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$, this.$Width$));
    this.$removeChildren$()
  }
  $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$ != D.$JSCompiler_alias_NULL$$ && $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$ != D.$JSCompiler_alias_NULL$$ && (this.$Width$ = $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$, this.$Height$ = $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$);
  $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$ && ($interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$ = this.$Parse$($interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$), 
  this.$_applyParsedProperties$($interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$));
  $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$ = this.$_callback$ != D.$JSCompiler_alias_NULL$$ || this.$_callbackObj$ != D.$JSCompiler_alias_NULL$$;
  this.$createBackground$($actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$, $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$);
  if($interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$) {
    $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$ = ($day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$ = this.$isVertical$()) ? new D.$DvtRect$$(this.$_context$, 
    0, 0, $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$, 0, "window") : new D.$DvtRect$$(this.$_context$, 0, 0, 0, $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$, "window");
    $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$.$setSolidFill$(this.$_windowBackgroundColor$, this.$_windowBackgroundAlpha$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$);
    if(!(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)(this)) {
      var $handleSize$$inline_3885_right$$inline_3925_rightHandleBackground$$inline_3892_size$$inline_9968$$ = (0,D.$JSCompiler_StaticMethods_getHandleSize$$)(), $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)();
      if($day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$) {
        var $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ = ($actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$ - 36) / 2, $leftHandle$$inline_3897_leftHandleCmds$$inline_3889$$ = window.DvtPathUtils.moveTo($handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$, 0) + window.DvtPathUtils.$quadTo$($handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ + 3, 
        6, $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ + 8, 8) + window.DvtPathUtils.lineTo($handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ + 28, 8) + window.DvtPathUtils.$quadTo$($handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ + 33, 6, $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ + 36, 0);
        window.DvtPathUtils.closePath();
        $end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$ = window.DvtPathUtils.moveTo($handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$, 0) + window.DvtPathUtils.$quadTo$($handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ + 3, -6, $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ + 8, -8) + window.DvtPathUtils.lineTo($handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ + 
        28, -8) + window.DvtPathUtils.$quadTo$($handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ + 33, -6, $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ + 36, 0);
        window.DvtPathUtils.closePath();
        var $color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$ = new D.$DvtRect$$(this.$_context$, 0, 0, $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$, $handleSize$$inline_3885_right$$inline_3925_rightHandleBackground$$inline_3892_size$$inline_9968$$, "lhb"), $handleSize$$inline_3885_right$$inline_3925_rightHandleBackground$$inline_3892_size$$inline_9968$$ = 
        new D.$DvtRect$$(this.$_context$, 0, 0, $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$, $handleSize$$inline_3885_right$$inline_3925_rightHandleBackground$$inline_3892_size$$inline_9968$$, "rhb"), $cursor$$inline_3893_rangeStart$$inline_9965_rangeStart_pos$$inline_9969$$ = "row-resize";
        if(this.$_handleBackgroundImage$) {
          var $leftGrippy$$inline_3894$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$, 10), $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$, 
          10)
        }else {
          $leftGrippy$$inline_3894$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$), $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$)
        }
      }else {
        $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ = ($bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$ - 36) / 2, $leftHandle$$inline_3897_leftHandleCmds$$inline_3889$$ = window.DvtPathUtils.moveTo(0, $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$) + window.DvtPathUtils.$quadTo$(6, $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ + 3, 8, $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ + 
        8) + window.DvtPathUtils.lineTo(8, $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ + 28) + window.DvtPathUtils.$quadTo$(6, $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ + 33, 0, $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ + 36), window.DvtPathUtils.closePath(), $end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$ = 
        window.DvtPathUtils.moveTo(0, $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$) + window.DvtPathUtils.$quadTo$(-6, $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ + 3, -8, $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ + 8) + window.DvtPathUtils.lineTo(-8, $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ + 28) + window.DvtPathUtils.$quadTo$(-6, $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ + 
        33, 0, $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ + 36), window.DvtPathUtils.closePath(), $color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$ = new D.$DvtRect$$(this.$_context$, 0 - $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, 
        0, $handleSize$$inline_3885_right$$inline_3925_rightHandleBackground$$inline_3892_size$$inline_9968$$, $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$, "lhb"), $handleSize$$inline_3885_right$$inline_3925_rightHandleBackground$$inline_3892_size$$inline_9968$$ = new D.$DvtRect$$(this.$_context$, $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, 
        0, $handleSize$$inline_3885_right$$inline_3925_rightHandleBackground$$inline_3892_size$$inline_9968$$, $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$, "rhb"), $cursor$$inline_3893_rangeStart$$inline_9965_rangeStart_pos$$inline_9969$$ = "col-resize", this.$_handleBackgroundImage$ ? ($leftGrippy$$inline_3894$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, 10, $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$), 
        $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ = (0,D.$JSCompiler_StaticMethods_createGrippyImage$$)(this, 10, $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$)) : ($leftGrippy$$inline_3894$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$), $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$ = (0,D.$JSCompiler_StaticMethods_createGrippy$$)(this, 
        $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$))
      }
      $color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      $handleSize$$inline_3885_right$$inline_3925_rightHandleBackground$$inline_3892_size$$inline_9968$$.$setSolidFill$(this.$_windowBackgroundColor$, 0);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($handleSize$$inline_3885_right$$inline_3925_rightHandleBackground$$inline_3892_size$$inline_9968$$);
      $leftHandle$$inline_3897_leftHandleCmds$$inline_3889$$ = new D.$DvtPath$$(this.$_context$, $leftHandle$$inline_3897_leftHandleCmds$$inline_3889$$, "lh");
      $end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$ = new D.$DvtPath$$(this.$_context$, $end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$, "rh");
      $leftHandle$$inline_3897_leftHandleCmds$$inline_3889$$.$setSolidFill$(this.$_handleFillColor$);
      $leftHandle$$inline_3897_leftHandleCmds$$inline_3889$$.$setSolidStroke$(this.$_handleFillColor$);
      $end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$.$setSolidFill$(this.$_handleFillColor$);
      $end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$.$setSolidStroke$(this.$_handleFillColor$);
      this.$_windowBackgroundColor$ == this.$_handleFillColor$ && ((0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($leftHandle$$inline_3897_leftHandleCmds$$inline_3889$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$));
      $color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$.setCursor($cursor$$inline_3893_rangeStart$$inline_9965_rangeStart_pos$$inline_9969$$);
      $handleSize$$inline_3885_right$$inline_3925_rightHandleBackground$$inline_3892_size$$inline_9968$$.setCursor($cursor$$inline_3893_rangeStart$$inline_9965_rangeStart_pos$$inline_9969$$);
      $leftHandle$$inline_3897_leftHandleCmds$$inline_3889$$.setCursor($cursor$$inline_3893_rangeStart$$inline_9965_rangeStart_pos$$inline_9969$$);
      $end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$.setCursor($cursor$$inline_3893_rangeStart$$inline_9965_rangeStart_pos$$inline_9969$$);
      $leftGrippy$$inline_3894$$.setCursor($cursor$$inline_3893_rangeStart$$inline_9965_rangeStart_pos$$inline_9969$$);
      $handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$.setCursor($cursor$$inline_3893_rangeStart$$inline_9965_rangeStart_pos$$inline_9969$$);
      $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$.$addChild$($color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$);
      $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$.$addChild$($leftHandle$$inline_3897_leftHandleCmds$$inline_3889$$);
      $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$.$addChild$($leftGrippy$$inline_3894$$);
      $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$.$addChild$($handleSize$$inline_3885_right$$inline_3925_rightHandleBackground$$inline_3892_size$$inline_9968$$);
      $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$.$addChild$($end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$);
      $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$.$addChild$($handleX$$inline_3888_handleY$$inline_3896_rightGrippy$$inline_3895$$)
    }
    $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$.setCursor("move");
    this.$addChild$($end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$);
    $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$ = $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$ ? new D.$DvtLine$$(this.$_context$, $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$ - 
    this.$getTimeAxisWidth$(), 0, $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$ - this.$getTimeAxisWidth$(), $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$, "tab") : "above" == this.$_overviewPosition$ ? new D.$DvtLine$$(this.$_context$, 0, this.$getTimeAxisHeight$(), $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$, 
    this.$getTimeAxisHeight$(), "tab") : new D.$DvtLine$$(this.$_context$, 0, $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$ - this.$getTimeAxisHeight$(), $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$, $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$ - this.$getTimeAxisHeight$(), "tab");
    $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$.$setSolidStroke$(this.$_timeAxisBarColor$, this.$_timeAxisBarOpacity$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$);
    this.$addChild$($end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$);
    this.$isLeftAndRightFilterRendered$() && ($day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$ ? ($end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$ = new D.$DvtRect$$(this.$_context$, 
    0, 0, $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$, 0, "lbg"), $color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$ = new D.$DvtRect$$(this.$_context$, 0, 0, $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$, 
    0, "rbg")) : ($end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$ = new D.$DvtRect$$(this.$_context$, 0, 0, 0, $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$, "lbg"), $color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, 0, $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$, "rbg")), $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$.$setSolidFill$(this.$_leftFilterPanelColor$, this.$_leftFilterPanelAlpha$), this.$addChild$($end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$), 
    $color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$.$setSolidFill$(this.$_rightFilterPanelColor$, this.$_rightFilterPanelAlpha$), this.$addChild$($color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$), D.$DvtTimeUtils$$.$supportsTouch$() && $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$ != 
    D.$JSCompiler_alias_VOID$$ && ((0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$ ? ($day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$, $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, "lbgrh"), $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$, $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, "rbgrh")) : ($day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$, "lbgrh"), $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$ = 
    new D.$DvtRect$$(this.$_context$, 0, 0, $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$, "rbgrh")), $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$.$setSolidFill$(this.$_leftFilterPanelColor$, 
    0), this.$addChild$($day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$), $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$.$setSolidFill$(this.$_rightFilterPanelColor$, 
    0), this.$addChild$($actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$)))
  }
  this.$updateTimeAxis$($actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$, $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$);
  if(this.$_formattedTimeRanges$ != D.$JSCompiler_alias_NULL$$) {
    for($actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$ = 0;$actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$ < this.$_formattedTimeRanges$.length;$actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$++) {
      $color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$ = this.$_formattedTimeRanges$[$actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$], $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$ = 
      $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$, $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$ = $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$, $cursor$$inline_3893_rangeStart$$inline_9965_rangeStart_pos$$inline_9969$$ = 
      (0,window.parseInt)($color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$.$getAttr$("rs"), 10), $end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$ = (0,window.parseInt)($color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$.$getAttr$("re"), 
      10), $color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$ = $color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$.$getAttr$("c"), $cursor$$inline_3893_rangeStart$$inline_9965_rangeStart_pos$$inline_9969$$ != D.$JSCompiler_alias_NULL$$ && $end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$ != 
      D.$JSCompiler_alias_NULL$$ && ($handleSize$$inline_3885_right$$inline_3925_rightHandleBackground$$inline_3892_size$$inline_9968$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $cursor$$inline_3893_rangeStart$$inline_9965_rangeStart_pos$$inline_9969$$ = this.$getDatePosition$($cursor$$inline_3893_rangeStart$$inline_9965_rangeStart_pos$$inline_9969$$), $end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$ = 
      this.$getDatePosition$($end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$) - $cursor$$inline_3893_rangeStart$$inline_9965_rangeStart_pos$$inline_9969$$, this.$isRTL$() && ($cursor$$inline_3893_rangeStart$$inline_9965_rangeStart_pos$$inline_9969$$ = $handleSize$$inline_3885_right$$inline_3925_rightHandleBackground$$inline_3892_size$$inline_9968$$ - $cursor$$inline_3893_rangeStart$$inline_9965_rangeStart_pos$$inline_9969$$ - 
      $end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$), $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$ = this.$isVertical$() ? new D.$DvtRect$$(this.$_context$, 0, $cursor$$inline_3893_rangeStart$$inline_9965_rangeStart_pos$$inline_9969$$, 
      $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$ - this.$getTimeAxisWidth$(), $end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$, "ftr") : new D.$DvtRect$$(this.$_context$, $cursor$$inline_3893_rangeStart$$inline_9965_rangeStart_pos$$inline_9969$$, 
      "above" == this.$_overviewPosition$ ? this.$getTimeAxisHeight$() : 0, $end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$, $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$ - this.$getTimeAxisHeight$(), "ftr"), $color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$ != 
      D.$JSCompiler_alias_NULL$$ && $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$.$setSolidFill$($color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$, 0.4), $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$.setCursor("move"), 
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$), this.$addChild$($day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$))
    }
  }
  this.$_currentTime$ == D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)(this.$_currentTime$) || ($actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$ = this.$getDatePosition$(this.$_currentTime$), this.$isVertical$() ? $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$ = 
  new D.$DvtLine$$(this.$_context$, 0, $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$, $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, 
  "ocd") : (this.$isRTL$() && ($actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$ = $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$ - $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$), 
  $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$ = new D.$DvtLine$$(this.$_context$, $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, 
  0, $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$, "ocd")), $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$.$setSolidStroke$(this.$_currentTimeIndicatorColor$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$), this.$addChild$($actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$));
  this.$parseDataXML$($actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$, $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$);
  $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$ && ($end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$ = this.$getChildAt$(1), this.$isVertical$() ? ($interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$ = 
  $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$.$getY$(), $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$ = $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$.$getY$() + 
  $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$.getHeight() - 1, this.$isFlashEnvironment$() || (0,D.$DvtAgent$isPlatformWebkit$$)() ? ($day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$ = 
  0, $handleSize$$inline_3885_right$$inline_3925_rightHandleBackground$$inline_3892_size$$inline_9968$$ = $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$ - 1) : ($day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$ = 1, $handleSize$$inline_3885_right$$inline_3925_rightHandleBackground$$inline_3892_size$$inline_9968$$ = 
  $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$), $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$ = new D.$DvtLine$$(this.$_context$, 0, $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$, 
  $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$, $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$, "lh"), $color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$ = new D.$DvtLine$$(this.$_context$, 
  0, $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$, $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, 
  "rh"), $end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$ = new D.$DvtLine$$(this.$_context$, $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$, 0, $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$, 
  $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$, "ltb"), $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$ = new D.$DvtLine$$(this.$_context$, $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$, 
  $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$, $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$, 
  "rtb"), $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$ = new D.$DvtLine$$(this.$_context$, $handleSize$$inline_3885_right$$inline_3925_rightHandleBackground$$inline_3892_size$$inline_9968$$, $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$, $handleSize$$inline_3885_right$$inline_3925_rightHandleBackground$$inline_3892_size$$inline_9968$$, $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, 
  "bb"), $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$ = new D.$DvtLine$$(this.$_context$, $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$, $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$, 
  $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$, $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, "tb")) : ($interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$ = 
  1, this.$isFlashEnvironment$() && ($interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$ = 0), $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$ = $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$ - 
  1, $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$ = $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$.$getX$(), $handleSize$$inline_3885_right$$inline_3925_rightHandleBackground$$inline_3892_size$$inline_9968$$ = 
  $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$.$getX$() + $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$.getWidth() - 1, $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$ = 
  new D.$DvtLine$$(this.$_context$, $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$, $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$, $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$, 
  $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, "lh"), $color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$ = new D.$DvtLine$$(this.$_context$, $handleSize$$inline_3885_right$$inline_3925_rightHandleBackground$$inline_3892_size$$inline_9968$$, 
  $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$, $handleSize$$inline_3885_right$$inline_3925_rightHandleBackground$$inline_3892_size$$inline_9968$$, $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, 
  "rh"), $end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$ = new D.$DvtLine$$(this.$_context$, 0, window.Math.max(0, $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$ - 1), $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$ + 
  1, window.Math.max(0, $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$ - 1), "ltb"), $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$ = new D.$DvtLine$$(this.$_context$, $handleSize$$inline_3885_right$$inline_3925_rightHandleBackground$$inline_3892_size$$inline_9968$$ - 1, window.Math.max(0, 
  $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$ - 1), $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$, window.Math.max(0, $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$ - 
  1), "rtb"), $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$ = new D.$DvtLine$$(this.$_context$, $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$, $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, 
  $handleSize$$inline_3885_right$$inline_3925_rightHandleBackground$$inline_3892_size$$inline_9968$$, $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, "bb"), $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$ = 
  new D.$DvtLine$$(this.$_context$, $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$, $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$, $handleSize$$inline_3885_right$$inline_3925_rightHandleBackground$$inline_3892_size$$inline_9968$$, 
  $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$, "tb")), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$), 
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$), "none" != this.$_windowBorderLeftStyle$ && $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$.$setSolidStroke$(this.$_windowBorderLeftColor$), 
  this.$addChild$($end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$), "none" != this.$_windowBorderRightStyle$ && $color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$.$setSolidStroke$(this.$_windowBorderRightColor$), this.$addChild$($color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$), 
  "none" != this.$_borderTopStyle$ && this.$_borderTopColor$ && ($end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$.$setSolidStroke$(this.$_borderTopColor$), $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$.$setSolidStroke$(this.$_borderTopColor$)), this.$addChild$($end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$), 
  this.$addChild$($actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$), "none" != this.$_windowBorderBottomStyle$ && $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$.$setSolidStroke$(this.$_windowBorderBottomColor$), this.$addChild$($bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$), "none" != this.$_windowBorderTopStyle$ && $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$.$setSolidStroke$(this.$_windowBorderTopColor$), 
  this.$addChild$($interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$), this.$isFlashEnvironment$() && ($actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$ = this.$isVertical$() ? window.DvtPathUtils.moveTo(6, 0) + window.DvtPathUtils.lineTo(0, 5) + window.DvtPathUtils.lineTo(5, 5) + window.DvtPathUtils.lineTo(5, 
  17) + window.DvtPathUtils.lineTo(0, 17) + window.DvtPathUtils.lineTo(6, 22) + window.DvtPathUtils.lineTo(12, 17) + window.DvtPathUtils.lineTo(7, 17) + window.DvtPathUtils.lineTo(7, 5) + window.DvtPathUtils.lineTo(12, 5) + window.DvtPathUtils.closePath() : window.DvtPathUtils.moveTo(5, 0) + window.DvtPathUtils.lineTo(0, 6) + window.DvtPathUtils.lineTo(5, 12) + window.DvtPathUtils.lineTo(5, 7) + window.DvtPathUtils.lineTo(17, 7) + window.DvtPathUtils.lineTo(17, 12) + window.DvtPathUtils.lineTo(22, 
  6) + window.DvtPathUtils.lineTo(17, 0) + window.DvtPathUtils.lineTo(17, 4) + window.DvtPathUtils.lineTo(5, 4) + window.DvtPathUtils.lineTo(5, 0) + window.DvtPathUtils.closePath(), $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$ = new D.$DvtPath$$(this.$_context$, $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$, 
  "arr"), $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$.$setSolidFill$("#ffffff"), $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$.$setSolidStroke$("#000000"), $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$.$setVisible$(D.$JSCompiler_alias_FALSE$$), 
  this.$addChild$($actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$), this.$_resizeArrow$ = $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$), $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$ = this.$isVertical$(), 
  $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$ = this.$getChildAt$(1), $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$ = 
  $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$ ? this.$Height$ : this.$Width$, $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$ = this.$_width$, $color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$ = 
  this.$_start$, $end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$ = this.$_end$, $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$ = this.$_renderStart$, $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$ = 
  D.$DvtTimeUtils$$.$getPositionDate$($color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$, $end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$, 0, $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$), 
  $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$ = D.$DvtTimeUtils$$.$getPositionDate$($color$$inline_9967_elem$$inline_9962_leftHandleBackground$$inline_3891_rightBackground$$inline_3901_rightHandle$$inline_3927_slidingWindow$$2_start$$inline_3943$$, $end$$inline_3944_leftTopBar$$inline_3928_rangeEnd$$inline_9966_rangeWidth$$inline_9970_rightHandle$$inline_3898_rightHandleCmds$$inline_3890_slidingWindowPos$$, 
  $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, $end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$), $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$ = 
  this.$getDatePosition$($day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$), $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$ = window.Math.min($actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, 
  this.$getDatePosition$($end$$21_height$$inline_9964_leftBackground$$inline_3900_leftHandle$$inline_3926_rangeEndTime$$inline_3947_slidingWindow$$inline_3884_slidingWindow$$inline_3921_timeAxisTopBar$$inline_3899_timelineWidth$$inline_3942$$)), $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$ = this.$getDatePosition$($interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$), 
  $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$ -= $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$, this.$isRTL$() ? (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, 
  $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$, $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$ - $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$ - $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$) : 
  (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)(this, $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$, $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$), (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)(this, $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$, $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$), 
  (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)(this), $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$ = this.$_width$, $interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$ = this.$_start$, $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$ = 
  this.$_end$, $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$ = D.$DvtTimeUtils$$.$getPositionDate$($interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$, $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, 
  1, $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$), $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$ = D.$DvtTimeUtils$$.$getPositionDate$($interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$, $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, 
  2, $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$), $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$ = D.$DvtTimeUtils$$.$getDatePosition$($interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$, 
  $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$, $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$), 
  this.$_increment$ = D.$DvtTimeUtils$$.$getDatePosition$($interactive$$1_obj$$123_props$$20_renderStart$$inline_3945_renderStartPos$$inline_3950_start$$inline_9976_top$$inline_3922_topBar$$inline_3931_vertical$$inline_3938$$, $actualSize$$inline_3941_bottom$$inline_3923_end$$inline_9977_handleStart$$inline_3886_i$$inline_3910_line$$inline_3916_newWidth$$inline_3951_rangeEndPos$$inline_3949_rightBackgroundResizeHandle$$inline_3903_time_pos$$inline_3915$$, $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$, 
  $bottomBar$$inline_3930_height$$55_timelineWidth$$inline_9975_window$$inline_3939$$) - $day1$$inline_9978_displayable$$inline_9971_left$$inline_3924_leftBackgroundResizeHandle$$inline_3902_pos1$$inline_9980_rangeStartPos$$inline_3948_rangeStartTime$$inline_3946_start$$27_vertical$$inline_3883_width$$inline_9963$$);
  this.$_initialFocusTime$ != D.$JSCompiler_alias_NULL$$ && (this.$_initPos$ = window.Math.max(0, D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, this.$_initialFocusTime$, this.$_width$)));
  0 < this.$_initPos$ && ($actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$ = this.$_initPos$ / this.$_increment$, this.$isRTL$() && ($actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$ = 0 - $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$), 
  (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $actualAmount$$inline_3955_arrow$$inline_3935_arrowCmds$$inline_3934_day2$$inline_9979_rightTopBar$$inline_3929_size$$inline_3940_width$$71$$))
};
D.$DvtOverview$$.prototype.render = D.$DvtOverview$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getParser$ = function $$JSCompiler_prototypeAlias$$$$getParser$$() {
  return new D.$DvtOverviewParser$$(this)
};
D.$JSCompiler_prototypeAlias$$.$Parse$ = function $$JSCompiler_prototypeAlias$$$$Parse$$($obj$$125$$) {
  return this.$getParser$($obj$$125$$).parse($obj$$125$$)
};
D.$JSCompiler_prototypeAlias$$.$_applyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$_applyParsedProperties$$($props$$21$$) {
  this.$_start$ = $props$$21$$.start;
  this.$_end$ = $props$$21$$.end;
  this.$_width$ = $props$$21$$.width;
  this.$_renderStart$ = $props$$21$$.$renderStart$;
  this.$_currentTime$ = $props$$21$$.currentTime;
  this.$_initialFocusTime$ = $props$$21$$.$initialFocusTime$;
  this.$_animationOnClick$ = $props$$21$$.$animationOnClick$;
  this.$_leftMargin$ = window.Math.max(0, $props$$21$$.$leftMargin$);
  this.$_rightMargin$ = window.Math.max(0, $props$$21$$.$rightMargin$);
  (0,window.isNaN)(this.$_leftMargin$) && (this.$_leftMargin$ = 0);
  (0,window.isNaN)(this.$_rightMargin$) && (this.$_rightMargin$ = 0);
  this.$_orientation$ = $props$$21$$.orientation;
  this.$_overviewPosition$ = $props$$21$$.$overviewPosition$;
  this.$_isRtl$ = $props$$21$$.$isRtl$;
  $props$$21$$.$featuresOff$ != D.$JSCompiler_alias_NULL$$ && (this.$_featuresOff$ = $props$$21$$.$featuresOff$.split(" "));
  $props$$21$$.$minimumWindowSize$ != D.$JSCompiler_alias_NULL$$ && 0 < $props$$21$$.$minimumWindowSize$ && (this.$_minimumWindowSize$ = $props$$21$$.$minimumWindowSize$);
  this.$_borderStyles$ = $props$$21$$.$borderStyles$;
  this.$_timeAxisInfo$ = $props$$21$$.$timeAxisInfo$;
  $props$$21$$.$timeAxisInfo$ != D.$JSCompiler_alias_NULL$$ && (this.$_ticks$ = this.$_timeAxisInfo$.$ticks$);
  this.$_formattedTimeRanges$ = $props$$21$$.$formattedTimeRanges$;
  this.$_borderTopStyle$ = $props$$21$$.borderTopStyle;
  this.$_borderTopColor$ = $props$$21$$.borderTopColor;
  this.$_windowBackgroundColor$ = $props$$21$$.$windowBackgroundColor$;
  this.$_windowBackgroundAlpha$ = $props$$21$$.$windowBackgroundAlpha$;
  this.$_windowBorderTopStyle$ = $props$$21$$.$windowBorderTopStyle$;
  this.$_windowBorderRightStyle$ = $props$$21$$.$windowBorderRightStyle$;
  this.$_windowBorderBottomStyle$ = $props$$21$$.$windowBorderBottomStyle$;
  this.$_windowBorderLeftStyle$ = $props$$21$$.$windowBorderLeftStyle$;
  this.$_windowBorderTopColor$ = $props$$21$$.$windowBorderTopColor$;
  this.$_windowBorderRightColor$ = $props$$21$$.$windowBorderRightColor$;
  this.$_windowBorderBottomColor$ = $props$$21$$.$windowBorderBottomColor$;
  this.$_windowBorderLeftColor$ = $props$$21$$.$windowBorderLeftColor$;
  this.$_handleTextureColor$ = $props$$21$$.$handleTextureColor$;
  this.$_handleFillColor$ = $props$$21$$.$handleFillColor$;
  this.$_handleBackgroundImage$ = $props$$21$$.$handleBackgroundImage$;
  this.$_handleWidth$ = $props$$21$$.$handleWidth$;
  this.$_handleHeight$ = $props$$21$$.$handleHeight$;
  this.$_overviewBackgroundColor$ = $props$$21$$.$overviewBackgroundColor$;
  this.$_currentTimeIndicatorColor$ = $props$$21$$.$currentTimeIndicatorColor$;
  this.$_timeIndicatorColor$ = $props$$21$$.$timeIndicatorColor$;
  this.$_timeAxisBarColor$ = $props$$21$$.$timeAxisBarColor$;
  this.$_timeAxisBarOpacity$ = $props$$21$$.$timeAxisBarOpacity$;
  this.$_leftFilterPanelColor$ = $props$$21$$.$leftFilterPanelColor$;
  this.$_leftFilterPanelAlpha$ = $props$$21$$.$leftFilterPanelAlpha$;
  this.$_rightFilterPanelColor$ = $props$$21$$.$rightFilterPanelColor$;
  this.$_rightFilterPanelAlpha$ = $props$$21$$.$rightFilterPanelAlpha$
};
D.$JSCompiler_prototypeAlias$$.$getDatePosition$ = function $$JSCompiler_prototypeAlias$$$$getDatePosition$$($date$$17$$) {
  return window.Math.max(0, D.$DvtTimeUtils$$.$getDatePosition$(this.$_start$, this.$_end$, $date$$17$$, (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this))) + this.$_leftMargin$
};
D.$JSCompiler_prototypeAlias$$.$getPositionDate$ = function $$JSCompiler_prototypeAlias$$$$getPositionDate$$($pos$$35$$) {
  return D.$DvtTimeUtils$$.$getPositionDate$(this.$_start$, this.$_end$, window.Math.max(0, $pos$$35$$ - this.$_leftMargin$), (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this))
};
D.$JSCompiler_prototypeAlias$$.$isRTL$ = function $$JSCompiler_prototypeAlias$$$$isRTL$$() {
  return!this.$isVertical$() && "true" == this.$_isRtl$
};
D.$JSCompiler_prototypeAlias$$.$isVertical$ = function $$JSCompiler_prototypeAlias$$$$isVertical$$() {
  return"vertical" == this.$_orientation$
};
D.$JSCompiler_StaticMethods_getOverviewSize$$ = function $$JSCompiler_StaticMethods_getOverviewSize$$$($JSCompiler_StaticMethods_getOverviewSize$self$$) {
  return $JSCompiler_StaticMethods_getOverviewSize$self$$.$isVertical$() ? $JSCompiler_StaticMethods_getOverviewSize$self$$.$Height$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_leftMargin$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_rightMargin$ : $JSCompiler_StaticMethods_getOverviewSize$self$$.$Width$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_leftMargin$ - $JSCompiler_StaticMethods_getOverviewSize$self$$.$_rightMargin$
};
D.$JSCompiler_StaticMethods_getMaximumPosition$$ = function $$JSCompiler_StaticMethods_getMaximumPosition$$$($JSCompiler_StaticMethods_getMaximumPosition$self$$) {
  return $JSCompiler_StaticMethods_getMaximumPosition$self$$.$isVertical$() ? $JSCompiler_StaticMethods_getMaximumPosition$self$$.$Height$ - $JSCompiler_StaticMethods_getMaximumPosition$self$$.$_rightMargin$ : $JSCompiler_StaticMethods_getMaximumPosition$self$$.$Width$ - $JSCompiler_StaticMethods_getMaximumPosition$self$$.$_rightMargin$
};
D.$JSCompiler_StaticMethods_getMinimumWindowSize$$ = function $$JSCompiler_StaticMethods_getMinimumWindowSize$$$($JSCompiler_StaticMethods_getMinimumWindowSize$self$$) {
  return $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ != D.$JSCompiler_alias_NULL$$ ? $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ : $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minimumWindowSize$ != D.$JSCompiler_alias_NULL$$ ? ($JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$ = D.$DvtTimeUtils$$.$getDatePosition$($JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_start$, $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_end$, 
  $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_start$ + $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minimumWindowSize$, (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)($JSCompiler_StaticMethods_getMinimumWindowSize$self$$)), $JSCompiler_StaticMethods_getMinimumWindowSize$self$$.$_minWinSize$) : 10
};
D.$JSCompiler_StaticMethods_getHandleStart$$ = function $$JSCompiler_StaticMethods_getHandleStart$$$() {
  return D.$DvtTimeUtils$$.$supportsTouch$() ? (0,D.$JSCompiler_StaticMethods_getHandleSize$$)() / 2 : 0
};
D.$JSCompiler_StaticMethods_getHandleSize$$ = function $$JSCompiler_StaticMethods_getHandleSize$$$() {
  return D.$DvtTimeUtils$$.$supportsTouch$() ? 30 : 10
};
D.$JSCompiler_StaticMethods_isHandle$$ = function $$JSCompiler_StaticMethods_isHandle$$$($drawable$$23$$) {
  var $id$$104$$ = $drawable$$23$$.getId();
  return"lh" == $id$$104$$ || "rh" == $id$$104$$ || "lhb" == $id$$104$$ || "rhb" == $id$$104$$ || "grpy" == $id$$104$$ || "lbgrh" == $id$$104$$ || "rbgrh" == $id$$104$$ || $drawable$$23$$.getParent() != D.$JSCompiler_alias_NULL$$ && "grpy" == $drawable$$23$$.getParent().getId()
};
D.$DvtOverview$$.prototype.$getTimeAxisWidth$ = function $$DvtOverview$$$$$getTimeAxisWidth$$() {
  if(this.$_timeAxisInfo$ == D.$JSCompiler_alias_NULL$$) {
    return 0
  }
  if(this.$_timeAxisWidth$ == D.$JSCompiler_alias_NULL$$) {
    var $width$$72$$ = (0,window.parseInt)(this.$_timeAxisInfo$.width, 10);
    this.$_timeAxisWidth$ = !(0,window.isNaN)($width$$72$$) && $width$$72$$ < this.$Width$ ? $width$$72$$ : 40
  }
  return this.$_timeAxisWidth$
};
D.$DvtOverview$$.prototype.$getTimeAxisHeight$ = function $$DvtOverview$$$$$getTimeAxisHeight$$() {
  if(this.$_timeAxisInfo$ == D.$JSCompiler_alias_NULL$$) {
    return 0
  }
  if(this.$_timeAxisHeight$ == D.$JSCompiler_alias_NULL$$) {
    var $height$$56$$ = (0,window.parseInt)(this.$_timeAxisInfo$.height, 10);
    this.$_timeAxisHeight$ = !(0,window.isNaN)($height$$56$$) && $height$$56$$ < this.$Height$ ? $height$$56$$ : 20
  }
  return this.$_timeAxisHeight$
};
D.$JSCompiler_StaticMethods_getPageX$$ = function $$JSCompiler_StaticMethods_getPageX$$$($event$$279$$) {
  return D.$DvtTimeUtils$$.$supportsTouch$() && $event$$279$$.targetTouches != D.$JSCompiler_alias_NULL$$ ? 0 < $event$$279$$.targetTouches.length ? $event$$279$$.targetTouches[0].pageX : D.$JSCompiler_alias_NULL$$ : $event$$279$$.pageX
};
D.$JSCompiler_StaticMethods_getPageY$$ = function $$JSCompiler_StaticMethods_getPageY$$$($event$$280$$) {
  return D.$DvtTimeUtils$$.$supportsTouch$() && $event$$280$$.targetTouches != D.$JSCompiler_alias_NULL$$ ? 0 < $event$$280$$.targetTouches.length ? $event$$280$$.targetTouches[0].pageY : D.$JSCompiler_alias_NULL$$ : $event$$280$$.pageY
};
D.$DvtOverview$$.prototype.$isLeftAndRightFilterRendered$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_StaticMethods_getLeftBackground$$ = function $$JSCompiler_StaticMethods_getLeftBackground$$$($JSCompiler_StaticMethods_getLeftBackground$self$$) {
  return $JSCompiler_StaticMethods_getLeftBackground$self$$.$isLeftAndRightFilterRendered$() ? $JSCompiler_StaticMethods_getLeftBackground$self$$.$getChildAt$(3) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getRightBackground$$ = function $$JSCompiler_StaticMethods_getRightBackground$$$($JSCompiler_StaticMethods_getRightBackground$self$$) {
  return $JSCompiler_StaticMethods_getRightBackground$self$$.$isLeftAndRightFilterRendered$() ? $JSCompiler_StaticMethods_getRightBackground$self$$.$getChildAt$(4) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$ = function $$JSCompiler_StaticMethods_getRightBackgroundHandle$$$($JSCompiler_StaticMethods_getRightBackgroundHandle$self$$) {
  return $JSCompiler_StaticMethods_getRightBackgroundHandle$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_getRightBackgroundHandle$self$$) ? $JSCompiler_StaticMethods_getRightBackgroundHandle$self$$.$getChildAt$(6) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_setLinePos$$ = function $$JSCompiler_StaticMethods_setLinePos$$$($JSCompiler_StaticMethods_setLinePos$self$$, $line$$14$$, $pos1$$, $pos2$$) {
  $JSCompiler_StaticMethods_setLinePos$self$$.$isVertical$() ? (-1 != $pos1$$ && $line$$14$$.$setY1$($pos1$$), -1 != $pos2$$ && $line$$14$$.$setY2$($pos2$$)) : (-1 != $pos1$$ && $line$$14$$.$setX1$($pos1$$), -1 != $pos2$$ && $line$$14$$.$setX2$($pos2$$))
};
D.$JSCompiler_StaticMethods_getLinePos1$$ = function $$JSCompiler_StaticMethods_getLinePos1$$$($JSCompiler_StaticMethods_getLinePos1$self$$, $line$$15$$) {
  return $JSCompiler_StaticMethods_getLinePos1$self$$.$isVertical$() ? $line$$15$$.$getY1$() : $line$$15$$.$getX1$()
};
D.$DvtOverview$$.prototype.$_findDrawable$ = function $$DvtOverview$$$$$_findDrawable$$($event$$281_target$$61$$) {
  $event$$281_target$$61$$ = $event$$281_target$$61$$.target;
  if($event$$281_target$$61$$ != D.$JSCompiler_alias_NULL$$) {
    var $id$$105$$ = $event$$281_target$$61$$.getId();
    if($id$$105$$ == D.$JSCompiler_alias_NULL$$) {
      return D.$JSCompiler_alias_NULL$$
    }
    if("_border" == $id$$105$$.substr($id$$105$$.length - 7)) {
      return this.$getChildAfter$($event$$281_target$$61$$)
    }
    if("tick" != $id$$105$$.substr(0, 4) && "ltb" != $id$$105$$ && "rtb" != $id$$105$$ && "bb" != $id$$105$$ && "tab" != $id$$105$$) {
      return $event$$281_target$$61$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_isMovable$$ = function $$JSCompiler_StaticMethods_isMovable$$$($drawable$$24$$) {
  return"window" == $drawable$$24$$.getId() || "ftr" == $drawable$$24$$.getId() || "sta" == $drawable$$24$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$24$$) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtOverview$$.prototype.$isFlashEnvironment$ = function $$DvtOverview$$$$$isFlashEnvironment$$() {
  return window && window.$isFlashEnvironment$
};
D.$DvtOverview$$.prototype.$createBackground$ = function $$DvtOverview$$$$$createBackground$$($width$$73$$, $height$$57$$) {
  var $background$$5$$ = new D.$DvtRect$$(this.$_context$, 0, 0, $width$$73$$, $height$$57$$, "bg");
  $background$$5$$.$setSolidFill$(this.$_overviewBackgroundColor$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($background$$5$$);
  this.$addChild$($background$$5$$);
  return $background$$5$$
};
D.$JSCompiler_StaticMethods_createGrippyImage$$ = function $$JSCompiler_StaticMethods_createGrippyImage$$$($JSCompiler_StaticMethods_createGrippyImage$self$$, $width$$75$$, $height$$59$$) {
  return new D.$DvtImage$$($JSCompiler_StaticMethods_createGrippyImage$self$$.$_context$, $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleBackgroundImage$, ($width$$75$$ - $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleWidth$) / 2, ($height$$59$$ - $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleHeight$) / 2, $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleWidth$, $JSCompiler_StaticMethods_createGrippyImage$self$$.$_handleHeight$, "grpy")
};
D.$JSCompiler_StaticMethods_createGrippy$$ = function $$JSCompiler_StaticMethods_createGrippy$$$($JSCompiler_StaticMethods_createGrippy$self$$, $handlePos$$) {
  var $grippy$$ = new D.$DvtContainer$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, "grpy"), $color$$36$$ = $JSCompiler_StaticMethods_createGrippy$self$$.$_handleTextureColor$;
  if($JSCompiler_StaticMethods_createGrippy$self$$.$isVertical$()) {
    for(var $startx$$1$$ = 8 + $handlePos$$, $starty$$1$$ = 3, $i$$388$$ = 0;9 > $i$$388$$;$i$$388$$++) {
      var $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$ + 2 * $i$$388$$, $starty$$1$$, $startx$$1$$ + 2 * $i$$388$$ + 1, $starty$$1$$, "dot1" + $i$$388$$);
      $dot$$.$setSolidStroke$($color$$36$$);
      $grippy$$.$addChild$($dot$$);
      $starty$$1$$ += 2;
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$ + 1 + 2 * $i$$388$$, $starty$$1$$, $startx$$1$$ + 1 + 2 * $i$$388$$ + 1, $starty$$1$$, "dot2" + $i$$388$$);
      $dot$$.$setSolidStroke$($color$$36$$);
      $grippy$$.$addChild$($dot$$);
      $starty$$1$$ += 2;
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$ + 2 * $i$$388$$, $starty$$1$$, $startx$$1$$ + 2 * $i$$388$$ + 1, $starty$$1$$, "dot3" + $i$$388$$);
      $dot$$.$setSolidStroke$($color$$36$$);
      $grippy$$.$addChild$($dot$$);
      $starty$$1$$ = 3
    }
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$ + 18, $starty$$1$$, $startx$$1$$ + 18 + 1, $starty$$1$$, "dot4");
    $dot$$.$setSolidStroke$($color$$36$$);
    $grippy$$.$addChild$($dot$$);
    $starty$$1$$ += 4;
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$ + 18, $starty$$1$$, $startx$$1$$ + 18 + 1, $starty$$1$$, "dot5")
  }else {
    $startx$$1$$ = 3;
    $starty$$1$$ = 8 + $handlePos$$;
    for($i$$388$$ = 0;9 > $i$$388$$;$i$$388$$++) {
      $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$, $starty$$1$$ + 2 * $i$$388$$, $startx$$1$$, $starty$$1$$ + 2 * $i$$388$$ + 1, "dot1" + $i$$388$$), $dot$$.$setSolidStroke$($color$$36$$), $grippy$$.$addChild$($dot$$), $startx$$1$$ += 2, $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$, $starty$$1$$ + 1 + 2 * $i$$388$$, $startx$$1$$, $starty$$1$$ + 1 + 2 * $i$$388$$ + 1, "dot2" + $i$$388$$), $dot$$.$setSolidStroke$($color$$36$$), 
      $grippy$$.$addChild$($dot$$), $startx$$1$$ += 2, $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$, $starty$$1$$ + 2 * $i$$388$$, $startx$$1$$, $starty$$1$$ + 2 * $i$$388$$ + 1, "dot3" + $i$$388$$), $dot$$.$setSolidStroke$($color$$36$$), $grippy$$.$addChild$($dot$$), $startx$$1$$ = 3
    }
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$, $starty$$1$$ + 18, $startx$$1$$, $starty$$1$$ + 18 + 1, "dot4");
    $dot$$.$setSolidStroke$($color$$36$$);
    $grippy$$.$addChild$($dot$$);
    $startx$$1$$ += 4;
    $dot$$ = new D.$DvtLine$$($JSCompiler_StaticMethods_createGrippy$self$$.$_context$, $startx$$1$$, $starty$$1$$ + 18, $startx$$1$$, $starty$$1$$ + 18 + 1, "dot5")
  }
  $dot$$.$setSolidStroke$($color$$36$$);
  $grippy$$.$addChild$($dot$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($grippy$$);
  return $grippy$$
};
D.$JSCompiler_StaticMethods_getRectSize$$ = function $$JSCompiler_StaticMethods_getRectSize$$$($JSCompiler_StaticMethods_getRectSize$self$$, $rect$$15$$) {
  return $JSCompiler_StaticMethods_getRectSize$self$$.$isVertical$() ? $rect$$15$$.getHeight() : $rect$$15$$.getWidth()
};
D.$JSCompiler_StaticMethods_getSlidingWindowPos$$ = function $$JSCompiler_StaticMethods_getSlidingWindowPos$$$($JSCompiler_StaticMethods_getSlidingWindowPos$self$$, $slidingWindow$$5$$) {
  return $JSCompiler_StaticMethods_getSlidingWindowPos$self$$.$isVertical$() ? $slidingWindow$$5$$.$getTranslateY$() : $slidingWindow$$5$$.$getTranslateX$()
};
D.$JSCompiler_StaticMethods_setSlidingWindowPos$$ = function $$JSCompiler_StaticMethods_setSlidingWindowPos$$$($JSCompiler_StaticMethods_setSlidingWindowPos$self$$, $rightStart_slidingWindow$$6$$, $pos$$37$$) {
  $pos$$37$$ = window.Math.max(0, $pos$$37$$);
  $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isVertical$() ? $rightStart_slidingWindow$$6$$.$setTranslateY$($pos$$37$$) : $rightStart_slidingWindow$$6$$.$setTranslateX$($pos$$37$$);
  if($JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isLeftAndRightFilterRendered$()) {
    (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$).$setWidth$($pos$$37$$);
    $rightStart_slidingWindow$$6$$ = $pos$$37$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$, $rightStart_slidingWindow$$6$$);
    var $handleStart$$1_rightBackground$$1$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$);
    $handleStart$$1_rightBackground$$1$$.$setX$($rightStart_slidingWindow$$6$$);
    $handleStart$$1_rightBackground$$1$$.$setWidth$(window.Math.max(0, $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$Width$ - $rightStart_slidingWindow$$6$$));
    D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$) && ($handleStart$$1_rightBackground$$1$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), ($JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$) ? $JSCompiler_StaticMethods_setSlidingWindowPos$self$$.$getChildAt$(5) : 
    D.$JSCompiler_alias_NULL$$).$setX$($pos$$37$$ - $handleStart$$1_rightBackground$$1$$), (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_setSlidingWindowPos$self$$).$setX$($rightStart_slidingWindow$$6$$))
  }
};
D.$JSCompiler_StaticMethods_setSlidingWindowSize$$ = function $$JSCompiler_StaticMethods_setSlidingWindowSize$$$($JSCompiler_StaticMethods_setSlidingWindowSize$self$$, $rightGrippy$$1_slidingWindow$$8$$, $size$$25$$) {
  $size$$25$$ = window.Math.max((0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$), $size$$25$$);
  var $rightHandleBackground$$1_rightStart$$1_size$$inline_3963$$ = $size$$25$$ = window.Math.min($JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Height$ : $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Width$, $size$$25$$);
  $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? $rightGrippy$$1_slidingWindow$$8$$.$setHeight$($rightHandleBackground$$1_rightStart$$1_size$$inline_3963$$) : $rightGrippy$$1_slidingWindow$$8$$.$setWidth$($rightHandleBackground$$1_rightStart$$1_size$$inline_3963$$);
  if($JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isLeftAndRightFilterRendered$()) {
    var $rightHandleBackground$$1_rightStart$$1_size$$inline_3963$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$, $rightGrippy$$1_slidingWindow$$8$$) + $size$$25$$, $rightBackground$$2_rightHandle$$2$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$);
    $rightBackground$$2_rightHandle$$2$$.$setX$($rightHandleBackground$$1_rightStart$$1_size$$inline_3963$$);
    $rightBackground$$2_rightHandle$$2$$.$setWidth$(window.Math.max(0, $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$Width$ - $rightHandleBackground$$1_rightStart$$1_size$$inline_3963$$));
    D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$) && (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$).$setX$($rightHandleBackground$$1_rightStart$$1_size$$inline_3963$$)
  }
  (0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_setSlidingWindowSize$self$$) || ($rightHandleBackground$$1_rightStart$$1_size$$inline_3963$$ = $rightGrippy$$1_slidingWindow$$8$$.$getChildAt$(3), $rightBackground$$2_rightHandle$$2$$ = $rightGrippy$$1_slidingWindow$$8$$.$getChildAt$(4), $rightGrippy$$1_slidingWindow$$8$$ = $rightGrippy$$1_slidingWindow$$8$$.$getChildAt$(5), $JSCompiler_StaticMethods_setSlidingWindowSize$self$$.$isVertical$() ? ($rightBackground$$2_rightHandle$$2$$.$setTranslateY$($size$$25$$), 
  $rightHandleBackground$$1_rightStart$$1_size$$inline_3963$$.$setTranslateY$($size$$25$$ - (0,D.$JSCompiler_StaticMethods_getHandleSize$$)()), $rightGrippy$$1_slidingWindow$$8$$.$setTranslateY$($size$$25$$ - 10)) : ($rightBackground$$2_rightHandle$$2$$.$setTranslateX$($size$$25$$), $rightHandleBackground$$1_rightStart$$1_size$$inline_3963$$.$setTranslateX$($size$$25$$ - (0,D.$JSCompiler_StaticMethods_getHandleSize$$)()), $rightGrippy$$1_slidingWindow$$8$$.$setTranslateX$($size$$25$$ - 10)))
};
D.$DvtOverview$$.prototype.$updateTimeAxis$ = function $$DvtOverview$$$$$updateTimeAxis$$($width$$78$$, $height$$62$$) {
  if(this.$_ticks$ != D.$JSCompiler_alias_NULL$$) {
    this.$isVertical$();
    for(var $size$$26$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $i$$389$$ = 0;$i$$389$$ < this.$_ticks$.length;$i$$389$$++) {
      var $child$$30_label$$44$$ = this.$_ticks$[$i$$389$$], $time$$5_time_pos$$2$$ = (0,window.parseInt)($child$$30_label$$44$$.$getAttr$("time"), 10), $time$$5_time_pos$$2$$ = this.$getDatePosition$($time$$5_time_pos$$2$$), $child$$30_label$$44$$ = $child$$30_label$$44$$.$getAttr$("label"), $maxWidth$$17_next_time$$ = 0;
      $i$$389$$ + 1 < this.$_ticks$.length ? ($maxWidth$$17_next_time$$ = (0,window.parseInt)(this.$_ticks$[$i$$389$$ + 1].$getAttr$("time"), 10), $maxWidth$$17_next_time$$ = this.$getDatePosition$($maxWidth$$17_next_time$$) - $time$$5_time_pos$$2$$) : $maxWidth$$17_next_time$$ = $size$$26$$ - $time$$5_time_pos$$2$$;
      this.$isRTL$() && ($time$$5_time_pos$$2$$ = $size$$26$$ - $time$$5_time_pos$$2$$);
      this.$addTick$($time$$5_time_pos$$2$$, $width$$78$$, $height$$62$$, "tick" + $i$$389$$);
      this.$addLabel$($time$$5_time_pos$$2$$, $child$$30_label$$44$$, $width$$78$$, $height$$62$$, $maxWidth$$17_next_time$$, "label" + $i$$389$$)
    }
  }
};
D.$DvtOverview$$.prototype.$addTick$ = function $$DvtOverview$$$$$addTick$$($line$$16_pos$$38$$, $stroke$$44_width$$79$$, $height$$63$$, $id$$106$$) {
  $line$$16_pos$$38$$ = this.$isVertical$() ? new D.$DvtLine$$(this.$_context$, 0, $line$$16_pos$$38$$, $stroke$$44_width$$79$$, $line$$16_pos$$38$$, $id$$106$$) : new D.$DvtLine$$(this.$_context$, $line$$16_pos$$38$$, 0, $line$$16_pos$$38$$, $height$$63$$, $id$$106$$);
  $stroke$$44_width$$79$$ = new D.$DvtSolidStroke$$(this.$_timeIndicatorColor$);
  $stroke$$44_width$$79$$.$setStyle$(1, 3);
  $line$$16_pos$$38$$.$setStroke$($stroke$$44_width$$79$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($line$$16_pos$$38$$);
  this.$addChild$($line$$16_pos$$38$$)
};
D.$DvtOverview$$.prototype.$addLabel$ = function $$DvtOverview$$$$$addLabel$$($label$$45_pos$$39$$, $text$$38$$, $width$$80_y$$104$$, $height$$64$$, $maxWidth$$18$$, $id$$107$$) {
  this.$isVertical$() ? $label$$45_pos$$39$$ = new D.$DvtOutputText$$(this.$_context$, $text$$38$$, 4, $label$$45_pos$$39$$, $id$$107$$) : ($width$$80_y$$104$$ = "above" == this.$_overviewPosition$ ? 2 : $height$$64$$ - this.$getTimeAxisHeight$() + 2, $label$$45_pos$$39$$ = new D.$DvtOutputText$$(this.$_context$, $text$$38$$, $label$$45_pos$$39$$ + 5, $width$$80_y$$104$$, $id$$107$$));
  $label$$45_pos$$39$$.$setCSSStyle$(new D.$DvtCSSStyle$$("font-weight:bold"));
  D.$DvtTextUtils$$.$fitText$($label$$45_pos$$39$$, $maxWidth$$18$$, window.Infinity, this);
  $label$$45_pos$$39$$.$_rawText$ = $label$$45_pos$$39$$.$_untruncatedTextString$
};
D.$DvtOverview$$.prototype.$parseDataXML$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_animateSlidingWindow$$ = function $$JSCompiler_StaticMethods_animateSlidingWindow$$$($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $newLeft$$1$$) {
  var $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$(1);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getChildAt$(3);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getChildAt$(4);
  $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getChildAt$(5);
  if($newLeft$$1$$ != (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$)) {
    var $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$), $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 
    1)), $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 2)), $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - 
    ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 3)), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 4)), $rightBackgroundHandleSetter_topBar$$1$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getNumChildren$() - 
    ($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_lastChildIndex$ - 5));
    if($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isVertical$()) {
      var $posGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getTranslateY$, $posSetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$setTranslateY$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getY2$, 
      $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setY2$, $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getY2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setY2$, 
      $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getY2$, $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setY2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getY1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setY1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$getY1$, 
      $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$setY1$, $bottomBarPos2Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$getY2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$setY2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setY1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getY2$, 
      $topBarPos2Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setY2$
    }else {
      $posGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getTranslateX$, $posSetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$setTranslateX$, $leftHandlePos1Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX1$, $leftHandlePos1Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX1$, $leftHandlePos2Getter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX2$, 
      $leftHandlePos2Setter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX2$, $rightHandlePos1Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX1$, $rightHandlePos1Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX1$, $rightHandlePos2Getter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$getX2$, $rightHandlePos2Setter$$ = $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$.$setX2$, 
      $leftTopBarPosGetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$getX2$, $leftTopBarPosSetter$$ = $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$.$setX2$, $rightTopBarPosGetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX1$, $rightTopBarPosSetter$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX1$, $bottomBarPos1Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$getX1$, 
      $bottomBarPos1Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$setX1$, $bottomBarPos2Getter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$getX2$, $bottomBarPos2Setter$$ = $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$.$setX2$, $topBarPos1Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX1$, $topBarPos1Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setX1$, $topBarPos2Getter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$getX2$, 
      $topBarPos2Setter$$ = $rightBackgroundHandleSetter_topBar$$1$$.$setX2$
    }
    var $animator$$90_minPos$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_leftMargin$, $maxPos$$ = (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $rightStart$$2_slidingWindowSize$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$);
    $newLeft$$1$$ = window.Math.max($animator$$90_minPos$$, window.Math.min($maxPos$$ - $rightStart$$2_slidingWindowSize$$, $newLeft$$1$$));
    $animator$$90_minPos$$ = "off" !== $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_animationOnClick$ ? new D.$DvtAnimator$$($JSCompiler_StaticMethods_animateSlidingWindow$self$$.$_context$, 0.5, 0, D.$DvtEasing$linear$$) : D.$JSCompiler_alias_NULL$$;
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$90_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$, $posGetter$$, $posSetter$$, $newLeft$$1$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$90_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos1Getter$$, $leftHandlePos1Setter$$, $newLeft$$1$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$90_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftHandlePos2Getter$$, $leftHandlePos2Setter$$, $newLeft$$1$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$90_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos1Getter$$, $rightHandlePos1Setter$$, $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$90_minPos$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $rightHandlePos2Getter$$, $rightHandlePos2Setter$$, $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$90_minPos$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $leftTopBarPosGetter$$, $leftTopBarPosSetter$$, $newLeft$$1$$ + 1);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$90_minPos$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightTopBarPosGetter$$, $rightTopBarPosSetter$$, $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$ - 1);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$90_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$, $bottomBarPos1Getter$$, $bottomBarPos1Setter$$, $newLeft$$1$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$90_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos1Getter$$, $topBarPos1Setter$$, $newLeft$$1$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$90_minPos$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$, $bottomBarPos2Getter$$, $bottomBarPos2Setter$$, $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$);
    (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$90_minPos$$, $rightBackgroundHandleSetter_topBar$$1$$, $topBarPos2Getter$$, $topBarPos2Setter$$, $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$);
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isLeftAndRightFilterRendered$() && ($handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$90_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.getWidth, 
    $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$setWidth$, $newLeft$$1$$), $rightStart$$2_slidingWindowSize$$ = $newLeft$$1$$ + $rightStart$$2_slidingWindowSize$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.getWidth, 
    $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$setWidth$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$getX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$.$setX$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$ = 
    $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isVertical$() ? $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$Height$ : $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$Width$, (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$90_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$ - 
    $rightStart$$2_slidingWindowSize$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$90_minPos$$, $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $rightStart$$2_slidingWindowSize$$), D.$DvtTimeUtils$$.$supportsTouch$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$) && 
    ($handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$ = (0,D.$JSCompiler_StaticMethods_getHandleStart$$)(), $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$ = $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$isLeftAndRightFilterRendered$() && !(0,D.$JSCompiler_StaticMethods_isFeatureOff$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$) ? $JSCompiler_StaticMethods_animateSlidingWindow$self$$.$getChildAt$(5) : D.$JSCompiler_alias_NULL$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$ = 
    $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$getX$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$ = $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$.$setX$, $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$ = (0,D.$JSCompiler_StaticMethods_getRightBackgroundHandle$$)($JSCompiler_StaticMethods_animateSlidingWindow$self$$), $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$getX$, 
    $rightBackgroundHandleSetter_topBar$$1$$ = $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$.$setX$, (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$90_minPos$$, $leftBackgroundHandle$$1_leftHandle$$2_rightBackgroundGetter$$, $leftBackgroundHandleGetter_rightBackgroundSetter_rightHandle$$3$$, $leftBackgroundHandleSetter_leftTopBar$$1_rightBackgroundPosGetter$$, $newLeft$$1$$ - $handleStart$$2_leftBackground$$2_rightBackground$$3_slidingWindow$$9$$), (0,D.$JSCompiler_StaticMethods_animateProperty$$)($animator$$90_minPos$$, 
    $rightBackgroundHandle$$2_rightBackgroundPosSetter_rightTopBar$$1$$, $bottomBar$$1_rightBackgroundHandleGetter_timelineSize$$1$$, $rightBackgroundHandleSetter_topBar$$1$$, $rightStart$$2_slidingWindowSize$$)));
    $animator$$90_minPos$$ != D.$JSCompiler_alias_NULL$$ && $animator$$90_minPos$$.play()
  }
};
D.$JSCompiler_StaticMethods_animateProperty$$ = function $$JSCompiler_StaticMethods_animateProperty$$$($animator$$91$$, $obj$$126$$, $getter$$, $setter$$, $value$$106$$) {
  $animator$$91$$ != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$91$$, "typeNumber", $obj$$126$$, $getter$$, $setter$$, $value$$106$$) : $setter$$.call($obj$$126$$, $value$$106$$)
};
D.$DvtOverview$$.prototype.$HandleShapeMouseOver$ = function $$DvtOverview$$$$$HandleShapeMouseOver$$($event$$282_relPos$$36$$) {
  var $drawable$$25$$ = this.$_findDrawable$($event$$282_relPos$$36$$);
  if($drawable$$25$$ && !("bg" == $drawable$$25$$.getId() || "ocd" == $drawable$$25$$.getId())) {
    if("label" == $drawable$$25$$.getId().substr(0, 5) && $drawable$$25$$ instanceof D.$DvtOutputText$$) {
      $drawable$$25$$.$isTruncated$() && this.$_context$.$getTooltipManager$().$showDatatip$($event$$282_relPos$$36$$.pageX, $event$$282_relPos$$36$$.pageY, $drawable$$25$$.$_rawText$, "#000000")
    }else {
      if(this.$_resizeArrow$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$25$$) && ($event$$282_relPos$$36$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $event$$282_relPos$$36$$.pageX, $event$$282_relPos$$36$$.pageY), $event$$282_relPos$$36$$ = this.$stageToLocal$($event$$282_relPos$$36$$), this.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_resizeArrow$, $event$$282_relPos$$36$$.x + 6, $event$$282_relPos$$36$$.y - 
      10) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_resizeArrow$, $event$$282_relPos$$36$$.x - 6, $event$$282_relPos$$36$$.y - 20), this.$_resizeArrow$.$setVisible$(D.$JSCompiler_alias_TRUE$$)), "window" == $drawable$$25$$.getId() || "ftr" == $drawable$$25$$.getId() || "arr" == $drawable$$25$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$25$$)) {
        this.$isFlashEnvironment$() && this.setCursor("move")
      }else {
        return $drawable$$25$$
      }
    }
  }
};
D.$DvtOverview$$.prototype.$HandleShapeMouseOut$ = function $$DvtOverview$$$$$HandleShapeMouseOut$$($drawable$$26_event$$283$$) {
  this.$_moveDrawable$ == D.$JSCompiler_alias_NULL$$ && this.setCursor("default");
  $drawable$$26_event$$283$$ = this.$_findDrawable$($drawable$$26_event$$283$$);
  if($drawable$$26_event$$283$$ != D.$JSCompiler_alias_NULL$$) {
    return(0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$26_event$$283$$) && this.$_resizeArrow$ != D.$JSCompiler_alias_NULL$$ && this.$_resizeArrow$.$setVisible$(D.$JSCompiler_alias_FALSE$$), $drawable$$26_event$$283$$
  }
};
D.$DvtOverview$$.prototype.$HandleShapeClick$ = function $$DvtOverview$$$$$HandleShapeClick$$($event$$284_newEndTime_relPos$$37_slidingWindow$$10$$, $newPos$$2_pageX$$6$$, $evt$$48_pageY$$6_pos$$40$$) {
  $event$$284_newEndTime_relPos$$37_slidingWindow$$10$$.stopPropagation();
  var $drawable$$27_newStartTime_size$$28$$ = this.$_findDrawable$($event$$284_newEndTime_relPos$$37_slidingWindow$$10$$);
  if($drawable$$27_newStartTime_size$$28$$ && !("window" == $drawable$$27_newStartTime_size$$28$$.getId() || (0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$27_newStartTime_size$$28$$))) {
    if("bg" == $drawable$$27_newStartTime_size$$28$$.getId() || "label" == $drawable$$27_newStartTime_size$$28$$.getId().substr(0, 5) || "ocd" == $drawable$$27_newStartTime_size$$28$$.getId() || "lbg" == $drawable$$27_newStartTime_size$$28$$.getId() || "rbg" == $drawable$$27_newStartTime_size$$28$$.getId()) {
      $newPos$$2_pageX$$6$$ == D.$JSCompiler_alias_VOID$$ && ($newPos$$2_pageX$$6$$ = $event$$284_newEndTime_relPos$$37_slidingWindow$$10$$.pageX);
      $evt$$48_pageY$$6_pos$$40$$ == D.$JSCompiler_alias_VOID$$ && ($evt$$48_pageY$$6_pos$$40$$ = $event$$284_newEndTime_relPos$$37_slidingWindow$$10$$.pageY);
      $event$$284_newEndTime_relPos$$37_slidingWindow$$10$$ = (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)(this.$_context$, $newPos$$2_pageX$$6$$, $evt$$48_pageY$$6_pos$$40$$);
      $event$$284_newEndTime_relPos$$37_slidingWindow$$10$$ = this.$stageToLocal$($event$$284_newEndTime_relPos$$37_slidingWindow$$10$$);
      this.$isVertical$() ? ($evt$$48_pageY$$6_pos$$40$$ = $event$$284_newEndTime_relPos$$37_slidingWindow$$10$$.y, $drawable$$27_newStartTime_size$$28$$ = this.$Height$) : ($evt$$48_pageY$$6_pos$$40$$ = $event$$284_newEndTime_relPos$$37_slidingWindow$$10$$.x, $drawable$$27_newStartTime_size$$28$$ = this.$Width$);
      $event$$284_newEndTime_relPos$$37_slidingWindow$$10$$ = this.$getChildAt$(1);
      $newPos$$2_pageX$$6$$ = $evt$$48_pageY$$6_pos$$40$$ - (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$284_newEndTime_relPos$$37_slidingWindow$$10$$) / 2;
      (0,D.$JSCompiler_StaticMethods_animateSlidingWindow$$)(this, $newPos$$2_pageX$$6$$);
      this.$isRTL$() && ($evt$$48_pageY$$6_pos$$40$$ = this.$Width$ - $evt$$48_pageY$$6_pos$$40$$);
      var $time$$6$$ = this.$getPositionDate$($evt$$48_pageY$$6_pos$$40$$);
      $evt$$48_pageY$$6_pos$$40$$ = new D.$DvtOverviewEvent$$("scrollTime");
      $evt$$48_pageY$$6_pos$$40$$.setTime($time$$6$$);
      $newPos$$2_pageX$$6$$ = window.Math.max(0, window.Math.min($newPos$$2_pageX$$6$$, $drawable$$27_newStartTime_size$$28$$ - (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$284_newEndTime_relPos$$37_slidingWindow$$10$$)));
      this.$isRTL$() ? ($drawable$$27_newStartTime_size$$28$$ = this.$getPositionDate$(this.$Width$ - ($newPos$$2_pageX$$6$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$284_newEndTime_relPos$$37_slidingWindow$$10$$))), $event$$284_newEndTime_relPos$$37_slidingWindow$$10$$ = this.$getPositionDate$(this.$Width$ - $newPos$$2_pageX$$6$$)) : ($drawable$$27_newStartTime_size$$28$$ = this.$getPositionDate$($newPos$$2_pageX$$6$$), $event$$284_newEndTime_relPos$$37_slidingWindow$$10$$ = 
      this.$getPositionDate$($newPos$$2_pageX$$6$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $event$$284_newEndTime_relPos$$37_slidingWindow$$10$$)));
      (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$48_pageY$$6_pos$$40$$, $drawable$$27_newStartTime_size$$28$$);
      (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$48_pageY$$6_pos$$40$$, $event$$284_newEndTime_relPos$$37_slidingWindow$$10$$);
      this.dispatchEvent($evt$$48_pageY$$6_pos$$40$$)
    }else {
      return $drawable$$27_newStartTime_size$$28$$
    }
  }
};
D.$DvtOverview$$.prototype.$HandleMouseDown$ = function $$DvtOverview$$$$$HandleMouseDown$$($event$$285$$) {
  (0,D.$JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$$)(this, $event$$285$$)
};
D.$JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$$ = function $$JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$$$($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$, $event$$286$$) {
  $event$$286$$.stopPropagation();
  var $drawable$$28_evt$$49$$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_findDrawable$($event$$286$$);
  if($drawable$$28_evt$$49$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_isMovable$$)($drawable$$28_evt$$49$$)) {
    if("ftr" == $drawable$$28_evt$$49$$.getId() || "sta" == $drawable$$28_evt$$49$$.getId()) {
      $drawable$$28_evt$$49$$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$getChildAt$(1)
    }
    $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_initX$ = (0,D.$JSCompiler_StaticMethods_getPageX$$)($event$$286$$);
    $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_initY$ = (0,D.$JSCompiler_StaticMethods_getPageY$$)($event$$286$$);
    if((0,D.$JSCompiler_StaticMethods_isHandle$$)($drawable$$28_evt$$49$$)) {
      var $cursor$$inline_3966_slidingWindow$$11$$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$getChildAt$(1);
      $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$isRTL$() ? ($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldEndPos$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$Width$ - $cursor$$inline_3966_slidingWindow$$11$$.$getX$(), $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldStartPos$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldEndPos$ - $cursor$$inline_3966_slidingWindow$$11$$.getWidth()) : ($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldStartPos$ = 
      $cursor$$inline_3966_slidingWindow$$11$$.$getX$(), $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldEndPos$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_oldStartPos$ + $cursor$$inline_3966_slidingWindow$$11$$.getWidth());
      "grpy" == $drawable$$28_evt$$49$$.getParent().getId() && ($drawable$$28_evt$$49$$ = $drawable$$28_evt$$49$$.getParent());
      var $drawableId$$1_leftBackground$$inline_3968_slidingWindow$$inline_3967$$ = $drawable$$28_evt$$49$$.getId();
      "grpy" == $drawableId$$1_leftBackground$$inline_3968_slidingWindow$$inline_3967$$ && ($drawable$$28_evt$$49$$ = $cursor$$inline_3966_slidingWindow$$11$$.$getChildBefore$($drawable$$28_evt$$49$$), $drawableId$$1_leftBackground$$inline_3968_slidingWindow$$inline_3967$$ = $drawable$$28_evt$$49$$.getId());
      if("lh" == $drawableId$$1_leftBackground$$inline_3968_slidingWindow$$inline_3967$$ || "rh" == $drawableId$$1_leftBackground$$inline_3968_slidingWindow$$inline_3967$$) {
        $drawable$$28_evt$$49$$ = $cursor$$inline_3966_slidingWindow$$11$$.$getChildBefore$($drawable$$28_evt$$49$$), $drawableId$$1_leftBackground$$inline_3968_slidingWindow$$inline_3967$$ = $drawable$$28_evt$$49$$.getId()
      }
      "lbgrh" == $drawableId$$1_leftBackground$$inline_3968_slidingWindow$$inline_3967$$ && ($drawable$$28_evt$$49$$ = $cursor$$inline_3966_slidingWindow$$11$$.$getChildAt$(0));
      "rbgrh" == $drawableId$$1_leftBackground$$inline_3968_slidingWindow$$inline_3967$$ && ($drawable$$28_evt$$49$$ = $cursor$$inline_3966_slidingWindow$$11$$.$getChildAt$($cursor$$inline_3966_slidingWindow$$11$$.$getNumChildren$() - 3));
      D.$DvtTimeUtils$$.$supportsTouch$() || ($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$isVertical$() ? ($drawable$$28_evt$$49$$.$setY$(-20), $drawable$$28_evt$$49$$.$setHeight$(2 * ($drawable$$28_evt$$49$$.getHeight() + 20))) : ($drawable$$28_evt$$49$$.$setX$(-20), $drawable$$28_evt$$49$$.$setWidth$(2 * ($drawable$$28_evt$$49$$.getWidth() + 20))));
      $cursor$$inline_3966_slidingWindow$$11$$ = $drawable$$28_evt$$49$$.getCursor();
      $drawableId$$1_leftBackground$$inline_3968_slidingWindow$$inline_3967$$ = $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$getChildAt$(1);
      $drawableId$$1_leftBackground$$inline_3968_slidingWindow$$inline_3967$$ != D.$JSCompiler_alias_NULL$$ && $drawableId$$1_leftBackground$$inline_3968_slidingWindow$$inline_3967$$.setCursor($cursor$$inline_3966_slidingWindow$$11$$);
      if($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$isLeftAndRightFilterRendered$()) {
        var $drawableId$$1_leftBackground$$inline_3968_slidingWindow$$inline_3967$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$), $rightBackground$$inline_3969$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$);
        $drawableId$$1_leftBackground$$inline_3968_slidingWindow$$inline_3967$$ != D.$JSCompiler_alias_NULL$$ && $rightBackground$$inline_3969$$ != D.$JSCompiler_alias_NULL$$ && ($drawableId$$1_leftBackground$$inline_3968_slidingWindow$$inline_3967$$.setCursor($cursor$$inline_3966_slidingWindow$$11$$), $rightBackground$$inline_3969$$.setCursor($cursor$$inline_3966_slidingWindow$$11$$))
      }
    }
    $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.$_moveDrawable$ = $drawable$$28_evt$$49$$;
    $drawable$$28_evt$$49$$ = new D.$DvtOverviewEvent$$("dropCallback");
    $JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$self$$.dispatchEvent($drawable$$28_evt$$49$$)
  }
};
D.$DvtOverview$$.prototype.$HandleMouseUp$ = function $$DvtOverview$$$$$HandleMouseUp$$($event$$287$$) {
  (0,D.$JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$$)(this, $event$$287$$)
};
D.$JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$$ = function $$JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$$$($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$, $event$$288$$) {
  $event$$288$$ != D.$JSCompiler_alias_NULL$$ && $event$$288$$.stopPropagation();
  if($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$ != D.$JSCompiler_alias_NULL$$) {
    if("window" == $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.getId()) {
      $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$finishWindowDrag$(0, 0, 0)
    }else {
      if((0,D.$JSCompiler_StaticMethods_isHandle$$)($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$)) {
        $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$finishHandleDrag$();
        D.$DvtTimeUtils$$.$supportsTouch$() || ($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$isVertical$() ? ($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.$setY$(0), $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.$setHeight$((0,D.$JSCompiler_StaticMethods_getHandleSize$$)())) : ($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.$setX$(0), $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$.$setWidth$((0,D.$JSCompiler_StaticMethods_getHandleSize$$)())));
        var $leftBackground$$inline_3973_slidingWindow$$inline_3972$$ = $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$getChildAt$(1);
        $leftBackground$$inline_3973_slidingWindow$$inline_3972$$ != D.$JSCompiler_alias_NULL$$ && $leftBackground$$inline_3973_slidingWindow$$inline_3972$$.setCursor("move");
        if($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$isLeftAndRightFilterRendered$()) {
          var $leftBackground$$inline_3973_slidingWindow$$inline_3972$$ = (0,D.$JSCompiler_StaticMethods_getLeftBackground$$)($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$), $rightBackground$$inline_3974$$ = (0,D.$JSCompiler_StaticMethods_getRightBackground$$)($JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$);
          $leftBackground$$inline_3973_slidingWindow$$inline_3972$$ != D.$JSCompiler_alias_NULL$$ && $rightBackground$$inline_3974$$ != D.$JSCompiler_alias_NULL$$ && ($leftBackground$$inline_3973_slidingWindow$$inline_3972$$.setCursor("default"), $rightBackground$$inline_3974$$.setCursor("default"))
        }
      }
    }
    $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_moveDrawable$ = D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$self$$.$_initX$ = -1
  }
};
D.$DvtOverview$$.prototype.$HandleMouseMove$ = function $$DvtOverview$$$$$HandleMouseMove$$($event$$289$$) {
  (0,D.$JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$$)(this, $event$$289$$)
};
D.$JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$$ = function $$JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$$$($JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$, $event$$290$$) {
  $event$$290$$.stopPropagation();
  if($JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$ != D.$JSCompiler_alias_NULL$$ && -1 != $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initX$) {
    var $pageX$$7$$ = (0,D.$JSCompiler_StaticMethods_getPageX$$)($event$$290$$), $pageY$$7$$ = (0,D.$JSCompiler_StaticMethods_getPageY$$)($event$$290$$), $diffX$$3$$ = $pageX$$7$$ - $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initX$, $diffY$$4$$ = $pageY$$7$$ - $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initY$;
    $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initX$ = $pageX$$7$$;
    $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_initY$ = $pageY$$7$$;
    "window" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId() ? $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$handleWindowDragPositioning$(0, $diffX$$3$$, $diffY$$4$$) : "lh" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId() || "lhb" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId() ? (0,D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$)($JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$, 
    $event$$290$$, $diffX$$3$$, $diffY$$4$$, D.$JSCompiler_alias_TRUE$$) : ("rh" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId() || "rhb" == $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$_moveDrawable$.getId()) && $JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$self$$.$handleRightHandleDragPositioning$($event$$290$$, $diffX$$3$$, $diffY$$4$$)
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtOverview$$.prototype;
D.$JSCompiler_prototypeAlias$$.$HandleTouchStart$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchStart$$($event$$291$$) {
  var $target$$62$$ = $event$$291$$.targetTouches[0];
  this.$_touchStartX$ = $target$$62$$.pageX;
  this.$_touchStartY$ = $target$$62$$.pageY;
  2 == $event$$291$$.targetTouches.length ? ($event$$291$$.preventDefault(), $target$$62$$ = $event$$291$$.targetTouches[1], this.$_touchStartX2$ = $target$$62$$.pageX, this.$_touchStartY2$ = $target$$62$$.pageY, 20 > window.Math.abs(this.$_touchStartY$ - this.$_touchStartY2$) ? this.$_counter$ = 0 : this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$) : (0,D.$JSCompiler_StaticMethods_HandleMouseDownOrTouchStart$$)(this, $event$$291$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchMove$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchMove$$($event$$292$$) {
  $event$$292$$.preventDefault();
  if(this.$_touchStartX2$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY2$ != D.$JSCompiler_alias_NULL$$) {
    if(50 > this.$_counter$) {
      this.$_counter$++
    }else {
      var $target$$63$$ = $event$$292$$.targetTouches[1];
      this.$handleRightHandleDragPositioning$(D.$JSCompiler_alias_NULL$$, $target$$63$$.pageX - this.$_touchStartX2$, 0);
      this.$_touchStartX2$ = $target$$63$$.pageX;
      this.$_counter$ = 0
    }
  }else {
    $target$$63$$ = $event$$292$$.targetTouches[0];
    if(this.$_touchStartX$ != $target$$63$$.pageX || this.$_touchStartY$ != $target$$63$$.pageY) {
      this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$
    }
    (0,D.$JSCompiler_StaticMethods_HandleMouseMoveOrTouchMove$$)(this, $event$$292$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchEnd$$($event$$293$$) {
  this.$_touchStartX2$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY2$ != D.$JSCompiler_alias_NULL$$ ? this.$finishHandleDrag$() : ((0,D.$JSCompiler_StaticMethods_HandleMouseUpOrTouchEnd$$)(this, $event$$293$$), this.$_touchStartX$ != D.$JSCompiler_alias_NULL$$ && this.$_touchStartY$ != D.$JSCompiler_alias_NULL$$ && this.$HandleShapeClick$($event$$293$$, this.$_touchStartX$, this.$_touchStartY$));
  this.$_touchStartY2$ = this.$_touchStartX2$ = this.$_touchStartY$ = this.$_touchStartX$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyDown$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyDown$$($event$$294$$) {
  var $delta$$6_keyCode$$16$$ = $event$$294$$.keyCode;
  if(37 === $delta$$6_keyCode$$16$$ || 39 === $delta$$6_keyCode$$16$$) {
    $delta$$6_keyCode$$16$$ = 37 === $delta$$6_keyCode$$16$$ ? -1 : 1, ($event$$294$$.shiftKey ? this.$handleRightHandleDragPositioning$ : this.$handleWindowDragPositioning$).call(this, $event$$294$$, $delta$$6_keyCode$$16$$, $delta$$6_keyCode$$16$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyUp$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyUp$$($event$$295$$) {
  var $delta$$7_keyCode$$17$$ = $event$$295$$.keyCode;
  if(37 === $delta$$7_keyCode$$17$$ || 39 === $delta$$7_keyCode$$17$$) {
    $delta$$7_keyCode$$17$$ = 37 === $delta$$7_keyCode$$17$$ ? -1 : 1, ($event$$295$$.shiftKey ? this.$finishHandleDrag$ : this.$finishWindowDrag$).call(this, $event$$295$$, $delta$$7_keyCode$$17$$, $delta$$7_keyCode$$17$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$handleWindowDragPositioning$ = function $$JSCompiler_prototypeAlias$$$$handleWindowDragPositioning$$($event$$296$$, $deltaX$$5$$, $deltaY$$4$$) {
  (0,D.$JSCompiler_StaticMethods_fireScrollEvent$$)(this, "scrollPos", $deltaX$$5$$, $deltaY$$4$$)
};
D.$JSCompiler_prototypeAlias$$.$finishWindowDrag$ = function $$JSCompiler_prototypeAlias$$$$finishWindowDrag$$($event$$297$$, $deltaX$$6$$, $deltaY$$5$$) {
  (0,D.$JSCompiler_StaticMethods_fireScrollEvent$$)(this, "scrollEnd", $deltaX$$6$$, $deltaY$$5$$)
};
D.$JSCompiler_StaticMethods_fireScrollEvent$$ = function $$JSCompiler_StaticMethods_fireScrollEvent$$$($JSCompiler_StaticMethods_fireScrollEvent$self$$, $evt$$50_type$$117$$, $delta$$8_deltaX$$7$$, $deltaY$$6$$) {
  var $newEndTime$$1_slidingWindow$$18$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getChildAt$(1), $pos$$44$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$18$$), $newStartTime$$1_scrollTo_size$$29$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$18$$), $minPos$$1$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$, 
  $maxPos$$1$$ = (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$);
  $delta$$8_deltaX$$7$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isVertical$() ? $deltaY$$6$$ : $delta$$8_deltaX$$7$$;
  $pos$$44$$ + $delta$$8_deltaX$$7$$ <= $minPos$$1$$ ? ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$18$$, $minPos$$1$$), $newStartTime$$1_scrollTo_size$$29$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isRTL$() ? -2 : -1) : $pos$$44$$ + $newStartTime$$1_scrollTo_size$$29$$ + $delta$$8_deltaX$$7$$ >= $maxPos$$1$$ ? ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, 
  $newEndTime$$1_slidingWindow$$18$$, $maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$29$$), $newStartTime$$1_scrollTo_size$$29$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isRTL$() ? -1 : -2) : ((0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$18$$, $pos$$44$$ + $delta$$8_deltaX$$7$$), $newStartTime$$1_scrollTo_size$$29$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isRTL$() ? ($maxPos$$1$$ - $newStartTime$$1_scrollTo_size$$29$$ - 
  $pos$$44$$ - $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$) * $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_increment$ : ($pos$$44$$ - $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_leftMargin$) * $JSCompiler_StaticMethods_fireScrollEvent$self$$.$_increment$);
  (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$);
  $evt$$50_type$$117$$ = new D.$DvtOverviewEvent$$($evt$$50_type$$117$$);
  $evt$$50_type$$117$$.$setPosition$($newStartTime$$1_scrollTo_size$$29$$);
  $JSCompiler_StaticMethods_fireScrollEvent$self$$.$isRTL$() ? ($newStartTime$$1_scrollTo_size$$29$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($JSCompiler_StaticMethods_fireScrollEvent$self$$.$Width$ - ($pos$$44$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$18$$))), $newEndTime$$1_slidingWindow$$18$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($JSCompiler_StaticMethods_fireScrollEvent$self$$.$Width$ - 
  $pos$$44$$)) : ($newStartTime$$1_scrollTo_size$$29$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($pos$$44$$), $newEndTime$$1_slidingWindow$$18$$ = $JSCompiler_StaticMethods_fireScrollEvent$self$$.$getPositionDate$($pos$$44$$ + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_fireScrollEvent$self$$, $newEndTime$$1_slidingWindow$$18$$)));
  (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$50_type$$117$$, $newStartTime$$1_scrollTo_size$$29$$);
  (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$50_type$$117$$, $newEndTime$$1_slidingWindow$$18$$);
  $JSCompiler_StaticMethods_fireScrollEvent$self$$.dispatchEvent($evt$$50_type$$117$$)
};
D.$DvtOverview$$.prototype.$handleRightHandleDragPositioning$ = function $$DvtOverview$$$$$handleRightHandleDragPositioning$$($event$$299$$, $deltaX$$9$$, $deltaY$$8$$) {
  (0,D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$)(this, $event$$299$$, $deltaX$$9$$, $deltaY$$8$$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$ = function $$JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$$$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$, $deltaX$$10_newEndTime$$2_slidingWindow$$19$$, $delta$$9_deltaY$$9$$, $isLeft$$5_newStartTime$$2$$) {
  var $evt$$51_size$$30$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$);
  $delta$$9_deltaY$$9$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? $delta$$9_deltaY$$9$$ : $deltaX$$10_newEndTime$$2_slidingWindow$$19$$;
  if(0 != $delta$$9_deltaY$$9$$) {
    $deltaX$$10_newEndTime$$2_slidingWindow$$19$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getChildAt$(1);
    var $windowPos$$ = (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$10_newEndTime$$2_slidingWindow$$19$$), $windowSize$$ = (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$10_newEndTime$$2_slidingWindow$$19$$);
    if($isLeft$$5_newStartTime$$2$$) {
      if($windowSize$$ - $delta$$9_deltaY$$9$$ <= (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) || $windowPos$$ + $delta$$9_deltaY$$9$$ <= $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_leftMargin$) {
        return
      }
      $endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_context$, (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$)).y : 
      (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_context$, (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$)).x;
      $endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$stageToLocal$($endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$);
      if(0 < $delta$$9_deltaY$$9$$ && $endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$ <= $windowPos$$ || 0 > $delta$$9_deltaY$$9$$ && $endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$ >= $windowPos$$) {
        return
      }
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$10_newEndTime$$2_slidingWindow$$19$$, $windowPos$$ + $delta$$9_deltaY$$9$$);
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$10_newEndTime$$2_slidingWindow$$19$$, $windowSize$$ - $delta$$9_deltaY$$9$$)
    }else {
      if($windowSize$$ + $delta$$9_deltaY$$9$$ <= (0,D.$JSCompiler_StaticMethods_getMinimumWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$) || $windowPos$$ + $windowSize$$ + $delta$$9_deltaY$$9$$ >= (0,D.$JSCompiler_StaticMethods_getMaximumPosition$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$)) {
        return
      }
      $endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isVertical$() ? (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_context$, (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$)).y : 
      (0,D.$JSCompiler_StaticMethods_pageToStageCoords$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_context$, (0,D.$JSCompiler_StaticMethods_getPageX$$)($endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$), (0,D.$JSCompiler_StaticMethods_getPageY$$)($endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$)).x;
      $endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$stageToLocal$($endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$);
      if(0 < $delta$$9_deltaY$$9$$ && $endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$ <= $windowPos$$ + $windowSize$$ || 0 > $delta$$9_deltaY$$9$$ && $endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$ >= $windowPos$$ + $windowSize$$) {
        return
      }
      (0,D.$JSCompiler_StaticMethods_setSlidingWindowSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$10_newEndTime$$2_slidingWindow$$19$$, $windowSize$$ + $delta$$9_deltaY$$9$$)
    }
    (0,D.$JSCompiler_StaticMethods_ScrollTimeAxis$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$);
    $endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$10_newEndTime$$2_slidingWindow$$19$$));
    $endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$ = $evt$$51_size$$30$$ * ($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_end$ - $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_start$) / ($endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$ - $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$_start$);
    $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isRangeChangingSupported$() && ($evt$$51_size$$30$$ = new D.$DvtOverviewEvent$$("rangeChanging"), (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$51_size$$30$$, "newSize", $endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$), $endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isRTL$() ? $isLeft$$5_newStartTime$$2$$ : 
    !$isLeft$$5_newStartTime$$2$$, (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$51_size$$30$$, "endHandle", $endHandle$$inline_3985_event$$300_newSize$$1_relPos$$38_time$$8$$), $isLeft$$5_newStartTime$$2$$ ? (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$51_size$$30$$, "expand", 0 > $delta$$9_deltaY$$9$$) : (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$51_size$$30$$, "expand", 0 < $delta$$9_deltaY$$9$$), $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$isRTL$() ? 
    ($isLeft$$5_newStartTime$$2$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$Width$ - ((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$10_newEndTime$$2_slidingWindow$$19$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, 
    $deltaX$$10_newEndTime$$2_slidingWindow$$19$$))), $deltaX$$10_newEndTime$$2_slidingWindow$$19$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$Width$ - (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$10_newEndTime$$2_slidingWindow$$19$$))) : ($isLeft$$5_newStartTime$$2$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, 
    $deltaX$$10_newEndTime$$2_slidingWindow$$19$$)), $deltaX$$10_newEndTime$$2_slidingWindow$$19$$ = $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$10_newEndTime$$2_slidingWindow$$19$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$, $deltaX$$10_newEndTime$$2_slidingWindow$$19$$))), 
    (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$51_size$$30$$, $isLeft$$5_newStartTime$$2$$), (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$51_size$$30$$, $deltaX$$10_newEndTime$$2_slidingWindow$$19$$), $JSCompiler_StaticMethods_handleLeftOrRightHandleDragPositioning$self$$.dispatchEvent($evt$$51_size$$30$$))
  }
};
D.$DvtOverview$$.prototype.$isRangeChangingSupported$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$DvtOverview$$.prototype.$finishHandleDrag$ = function $$DvtOverview$$$$$finishHandleDrag$$() {
  var $newSize$$2_start$$34$$ = this.$_start$, $end$$28_oldStartTime$$ = this.$_end$, $oldSize$$ = this.$_width$, $oldEndTime_size$$31$$ = (0,D.$JSCompiler_StaticMethods_getOverviewSize$$)(this), $newEndTime$$3_slidingWindow$$20$$ = this.$getChildAt$(1), $newStartTime$$3_time$$9$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$20$$)), $newSize$$2_start$$34$$ = $oldEndTime_size$$31$$ * ($end$$28_oldStartTime$$ - $newSize$$2_start$$34$$) / 
  ($newStartTime$$3_time$$9$$ - $newSize$$2_start$$34$$), $end$$28_oldStartTime$$ = this.$getPositionDate$(this.$_oldStartPos$), $oldEndTime_size$$31$$ = this.$getPositionDate$(this.$_oldEndPos$);
  this.$isRTL$() ? ($newStartTime$$3_time$$9$$ = this.$getPositionDate$(this.$Width$ - ((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$20$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$20$$))), $newEndTime$$3_slidingWindow$$20$$ = this.$getPositionDate$(this.$Width$ - (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$20$$))) : ($newStartTime$$3_time$$9$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, 
  $newEndTime$$3_slidingWindow$$20$$)), $newEndTime$$3_slidingWindow$$20$$ = this.$getPositionDate$((0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)(this, $newEndTime$$3_slidingWindow$$20$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)(this, $newEndTime$$3_slidingWindow$$20$$)));
  var $evt$$52$$ = new D.$DvtOverviewEvent$$("rangeChange");
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$52$$, "oldSize", $oldSize$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$52$$, "newSize", $newSize$$2_start$$34$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$52$$, "oldStartTime", $end$$28_oldStartTime$$);
  (0,D.$JSCompiler_StaticMethods_addParam$$)($evt$$52$$, "oldEndTime", $oldEndTime_size$$31$$);
  (0,D.$JSCompiler_StaticMethods_setNewStartTime$$)($evt$$52$$, $newStartTime$$3_time$$9$$);
  (0,D.$JSCompiler_StaticMethods_setNewEndTime$$)($evt$$52$$, $newEndTime$$3_slidingWindow$$20$$);
  this.dispatchEvent($evt$$52$$)
};
D.$JSCompiler_StaticMethods_ScrollTimeAxis$$ = function $$JSCompiler_StaticMethods_ScrollTimeAxis$$$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$) {
  var $slidingWindow$$21$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$(1), $leftHandle$$3$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$), $rightHandle$$4$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 
  1)), $leftTopBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 2)), $rightTopBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 3)), $bottomBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - 
  ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 4)), $topBar$$2$$ = $JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getChildAt$($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$getNumChildren$() - ($JSCompiler_StaticMethods_ScrollTimeAxis$self$$.$_lastChildIndex$ - 5));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$, (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$), (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$, (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$), (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$) + (0,D.$JSCompiler_StaticMethods_getRectSize$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, 
  $slidingWindow$$21$$));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftTopBar$$2$$, -1, (0,D.$JSCompiler_StaticMethods_getSlidingWindowPos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $slidingWindow$$21$$) + 1);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightTopBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$) - 1, -1);
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $bottomBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$), (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$));
  (0,D.$JSCompiler_StaticMethods_setLinePos$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $topBar$$2$$, (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $leftHandle$$3$$), (0,D.$JSCompiler_StaticMethods_getLinePos1$$)($JSCompiler_StaticMethods_ScrollTimeAxis$self$$, $rightHandle$$4$$))
};
D.$DvtOverview$$.prototype.dispatchEvent = function $$DvtOverview$$$$dispatchEvent$($event$$302$$) {
  D.$DvtEventDispatcher$$.dispatchEvent(this.$_callback$, this.$_callbackObj$, this, $event$$302$$)
};
D.$DvtOverviewParser$$ = function $$DvtOverviewParser$$$($view$$24$$) {
  this.Init($view$$24$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewParser$$, D.$DvtObj$$, "DvtOverviewParser");
D.$DvtOverviewParser$$.prototype.Init = (0,D.$JSCompiler_set$$)("$_view$");
D.$DvtOverviewParser$$.prototype.parse = function $$DvtOverviewParser$$$$parse$($data$$80$$) {
  return this.$ParseRootAttributes$($data$$80$$)
};
D.$DvtOverviewParser$$.prototype.$ParseRootAttributes$ = function $$DvtOverviewParser$$$$$ParseRootAttributes$$($options$$160$$) {
  var $ret$$82$$ = {};
  $ret$$82$$.$animationOnClick$ = $options$$160$$.animationOnClick;
  $options$$160$$.startTime != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.start = $options$$160$$.startTime);
  $options$$160$$.endTime != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.end = $options$$160$$.endTime);
  $ret$$82$$.start == D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.start = (new window.Date).getTime());
  if($ret$$82$$.end == D.$JSCompiler_alias_NULL$$ || $ret$$82$$.end <= $ret$$82$$.start) {
    $ret$$82$$.end = $ret$$82$$.start + 864E5
  }
  $options$$160$$.currentTime != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.currentTime = $options$$160$$.currentTime);
  $options$$160$$.initialFocusTime != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.$initialFocusTime$ = $options$$160$$.initialFocusTime);
  $ret$$82$$.orientation = "horizontal";
  $options$$160$$.orientation != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.orientation = $options$$160$$.orientation);
  $ret$$82$$.$featuresOff$ = $options$$160$$.featuresOff;
  $ret$$82$$.$minimumWindowSize$ = $options$$160$$.minimumWindowSize;
  $ret$$82$$.$leftMargin$ = $options$$160$$.leftMargin;
  $ret$$82$$.$rightMargin$ = $options$$160$$.rightMargin;
  if($options$$160$$.viewportEndTime != D.$JSCompiler_alias_NULL$$) {
    var $viewportEndTime$$ = $options$$160$$.viewportEndTime, $viewportStartTime$$ = $ret$$82$$.start;
    $options$$160$$.viewportStartTime != D.$JSCompiler_alias_NULL$$ && $options$$160$$.viewportStartTime < $viewportEndTime$$ && ($viewportStartTime$$ = $options$$160$$.viewportStartTime);
    $ret$$82$$.width = $options$$160$$.viewportEndPos != D.$JSCompiler_alias_NULL$$ ? (0,D.$JSCompiler_StaticMethods_calculateWidth$$)($ret$$82$$.start, $ret$$82$$.end, $viewportStartTime$$, $viewportEndTime$$, $options$$160$$.viewportEndPos) : (0,D.$JSCompiler_StaticMethods_calculateWidth$$)($ret$$82$$.start, $ret$$82$$.end, $viewportStartTime$$, $viewportEndTime$$, this.$_view$.$Width$);
    $ret$$82$$.$renderStart$ = $viewportStartTime$$
  }else {
    $ret$$82$$.$renderStart$ = $ret$$82$$.start
  }
  0 == $ret$$82$$.width && ($ret$$82$$.width = 1E3);
  $ret$$82$$.$overviewPosition$ = "below";
  $ret$$82$$.$selectionMode$ = "none";
  $ret$$82$$.$isRtl$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$_view$.$_context$).toString();
  $options$$160$$.rtl != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.$isRtl$ = $options$$160$$.rtl.toString());
  $ret$$82$$.$handleFillColor$ = "#FFFFFF";
  $ret$$82$$.$handleTextureColor$ = "#B3C6DB";
  $ret$$82$$.$windowBackgroundColor$ = "#FFFFFF";
  $ret$$82$$.$windowBackgroundAlpha$ = 1;
  $ret$$82$$.$windowBorderTopStyle$ = "solid";
  $ret$$82$$.$windowBorderRightStyle$ = "solid";
  $ret$$82$$.$windowBorderBottomStyle$ = "solid";
  $ret$$82$$.$windowBorderLeftStyle$ = "solid";
  $ret$$82$$.$windowBorderTopColor$ = "#4F4F4F";
  $ret$$82$$.$windowBorderRightColor$ = "#4F4F4F";
  $ret$$82$$.$windowBorderBottomColor$ = "#4F4F4F";
  $ret$$82$$.$windowBorderLeftColor$ = "#4F4F4F";
  $ret$$82$$.$overviewBackgroundColor$ = "#E6ECF3";
  $ret$$82$$.$currentTimeIndicatorColor$ = "#C000D1";
  $ret$$82$$.$timeIndicatorColor$ = "#BCC7D2";
  $ret$$82$$.$timeAxisBarColor$ = "#e5e5e5";
  $ret$$82$$.$timeAxisBarOpacity$ = 1;
  $ret$$82$$.$leftFilterPanelColor$ = "#FFFFFF";
  $ret$$82$$.$leftFilterPanelAlpha$ = 0.7;
  $ret$$82$$.$rightFilterPanelColor$ = "#FFFFFF";
  $ret$$82$$.$rightFilterPanelAlpha$ = 0.7;
  $options$$160$$.style != D.$JSCompiler_alias_NULL$$ && ($options$$160$$.style.handleFillColor != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.$handleFillColor$ = $options$$160$$.style.handleFillColor), $options$$160$$.style.handleTextureColor != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.$handleTextureColor$ = $options$$160$$.style.handleTextureColor), $options$$160$$.style.handleBackgroundImage != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.$handleBackgroundImage$ = $options$$160$$.style.handleBackgroundImage), 
  $options$$160$$.style.handleWidth != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.$handleWidth$ = $options$$160$$.style.handleWidth), $options$$160$$.style.handleHeight != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.$handleHeight$ = $options$$160$$.style.handleHeight), $options$$160$$.style.windowBackgroundColor != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.$windowBackgroundColor$ = $options$$160$$.style.windowBackgroundColor), $options$$160$$.style.windowBackgroundAlpha != D.$JSCompiler_alias_NULL$$ && 
  ($ret$$82$$.$windowBackgroundAlpha$ = $options$$160$$.style.windowBackgroundAlpha), $options$$160$$.style.windowBorderTopStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.$windowBorderTopStyle$ = $options$$160$$.style.windowBorderTopStyle), $options$$160$$.style.windowBorderRightStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.$windowBorderRightStyle$ = $options$$160$$.style.windowBorderRightStyle), $options$$160$$.style.windowBorderBottomStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.$windowBorderBottomStyle$ = 
  $options$$160$$.style.windowBorderBottomStyle), $options$$160$$.style.windowBorderLeftStyle != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.$windowBorderLeftStyle$ = $options$$160$$.style.windowBorderLeftStyle), $options$$160$$.style.windowBorderTopColor != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.$windowBorderTopColor$ = $options$$160$$.style.windowBorderTopColor), $options$$160$$.style.windowBorderRightColor != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.$windowBorderRightColor$ = $options$$160$$.style.windowBorderRightColor), 
  $options$$160$$.style.windowBorderBottomColor != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.$windowBorderBottomColor$ = $options$$160$$.style.windowBorderBottomColor), $options$$160$$.style.windowBorderLeftColor != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.$windowBorderLeftColor$ = $options$$160$$.style.windowBorderLeftColor), $options$$160$$.style.overviewBackgroundColor != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.$overviewBackgroundColor$ = $options$$160$$.style.overviewBackgroundColor), $options$$160$$.style.currentTimeIndicatorColor != 
  D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.$currentTimeIndicatorColor$ = $options$$160$$.style.currentTimeIndicatorColor), $options$$160$$.style.timeIndicatorColor != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.$timeIndicatorColor$ = $options$$160$$.style.timeIndicatorColor), $options$$160$$.style.leftFilterPanelColor != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.$leftFilterPanelColor$ = $options$$160$$.style.leftFilterPanelColor), $options$$160$$.style.leftFilterPanelAlpha != D.$JSCompiler_alias_NULL$$ && 
  ($ret$$82$$.$leftFilterPanelAlpha$ = $options$$160$$.style.leftFilterPanelAlpha), $options$$160$$.style.rightFilterPanelColor != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.$rightFilterPanelColor$ = $options$$160$$.style.rightFilterPanelColor), $options$$160$$.style.rightFilterPanelAlpha != D.$JSCompiler_alias_NULL$$ && ($ret$$82$$.$rightFilterPanelAlpha$ = $options$$160$$.style.rightFilterPanelAlpha));
  return $ret$$82$$
};
D.$JSCompiler_StaticMethods_calculateWidth$$ = function $$JSCompiler_StaticMethods_calculateWidth$$$($number$$4_startTime$$6$$, $endTime$$6$$, $denominator$$2_viewportStartTime$$1$$, $viewportEndTime$$1$$, $viewportEndPos$$) {
  $number$$4_startTime$$6$$ = $viewportEndPos$$ * ($endTime$$6$$ - $number$$4_startTime$$6$$);
  $denominator$$2_viewportStartTime$$1$$ = $viewportEndTime$$1$$ - $denominator$$2_viewportStartTime$$1$$;
  return 0 == $number$$4_startTime$$6$$ || 0 == $denominator$$2_viewportStartTime$$1$$ ? 0 : $number$$4_startTime$$6$$ / $denominator$$2_viewportStartTime$$1$$
};
D.$DvtOverviewEvent$$ = function $$DvtOverviewEvent$$$($type$$118$$) {
  this.Init("overview");
  this.$_subtype$ = $type$$118$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtOverviewEvent$$, D.$DvtBaseComponentEvent$$, "DvtOverviewEvent");
D.$DvtOverviewEvent$$.prototype.$getSubType$ = (0,D.$JSCompiler_get$$)("$_subtype$");
D.$DvtOverviewEvent$$.prototype.setTime = function $$DvtOverviewEvent$$$$setTime$($time$$10$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)(this, "time", $time$$10$$)
};
D.$DvtOverviewEvent$$.prototype.getTime = function $$DvtOverviewEvent$$$$getTime$() {
  return this.$getParamValue$("time")
};
D.$JSCompiler_StaticMethods_setNewStartTime$$ = function $$JSCompiler_StaticMethods_setNewStartTime$$$($JSCompiler_StaticMethods_setNewStartTime$self$$, $newStartTime$$4$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)($JSCompiler_StaticMethods_setNewStartTime$self$$, "newStartTime", $newStartTime$$4$$)
};
D.$JSCompiler_StaticMethods_setNewEndTime$$ = function $$JSCompiler_StaticMethods_setNewEndTime$$$($JSCompiler_StaticMethods_setNewEndTime$self$$, $newEndTime$$4$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)($JSCompiler_StaticMethods_setNewEndTime$self$$, "newEndTime", $newEndTime$$4$$)
};
D.$DvtOverviewEvent$$.prototype.$setPosition$ = function $$DvtOverviewEvent$$$$$setPosition$$($pos$$45$$) {
  (0,D.$JSCompiler_StaticMethods_addParam$$)(this, "pos", $pos$$45$$)
};
D.$DvtOverviewEvent$$.prototype.$getPosition$ = function $$DvtOverviewEvent$$$$$getPosition$$() {
  return this.$getParamValue$("pos")
};
});