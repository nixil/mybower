/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojvalidation", "ojs/ojpopup"], function($oj$$4$$, $$$$4$$) {
  $oj$$4$$.$PopupMessagingStrategy$ = function $$oj$$4$$$$PopupMessagingStrategy$$($displayOptions$$5$$) {
    this.Init($displayOptions$$5$$);
  };
  $oj$$4$$.$ComponentMessaging$.$registerMessagingStrategy$($oj$$4$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$NOTEWINDOW$, $oj$$4$$.$PopupMessagingStrategy$);
  $oj$$4$$.$Object$.$createSubclass$($oj$$4$$.$PopupMessagingStrategy$, $oj$$4$$.$MessagingStrategy$, "oj.PopupMessagingStrategy");
  $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$ = {ojRadioset:{position:"launcher", $events$:{open:"focusin mouseover", close:"mouseout"}}, ojCheckboxset:{position:"launcher", $events$:{open:"focusin mouseover", close:"mouseout"}}, "default":{$events$:{open:"focusin"}}};
  $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULT_STATUS_ICON_SELECTORS$ = "oj-component-icon oj-message-status-icon ";
  $oj$$4$$.$PopupMessagingStrategy$.prototype.Init = function $$oj$$4$$$$PopupMessagingStrategy$$$Init$($displayOptions$$6$$) {
    $oj$$4$$.$PopupMessagingStrategy$.$superclass$.Init.call(this, $displayOptions$$6$$);
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$activate$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$activate$$($component$$5$$, $launcher$$6$$, $content$$20$$) {
    $oj$$4$$.$PopupMessagingStrategy$.$superclass$.$activate$.call(this, $component$$5$$, $launcher$$6$$, $content$$20$$);
    this.$_initMessagingPopup$();
    this.update($content$$20$$);
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.update = function $$oj$$4$$$$PopupMessagingStrategy$$$update$($content$$21$$) {
    $oj$$4$$.$PopupMessagingStrategy$.$superclass$.update.call(this, $content$$21$$);
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$deactivate$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$deactivate$$($content$$22$$) {
    var $compDefaults_events$$ = $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$[this.$_component$.widgetName], $compDefaults_events$$ = $compDefaults_events$$ ? $compDefaults_events$$.$events$ : $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$["default"].$events$;
    $compDefaults_events$$.open && this.$_launcher$.off($compDefaults_events$$.open, this.$_openPopup$);
    $compDefaults_events$$.close && this.$_launcher$.off($compDefaults_events$$.close, this.$_closePopup$);
    this.$_destroyTooltip$();
    $oj$$4$$.$PopupMessagingStrategy$.$superclass$.$deactivate$.call(this, $content$$22$$);
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.getNodeBySubId = function $$oj$$4$$$$PopupMessagingStrategy$$$getNodeBySubId$($subId$$2$$, $index$$81$$) {
    return this.$_isPopupInitialized$() ? "oj-messaging-popup-content" === $subId$$2$$ ? this.$$messagingContentRoot$[0] : "oj-messaging-popup-message" === $subId$$2$$ ? this.$$messagingContentRoot$.find(".oj-message \x3e .oj-message-content")[$index$$81$$ || 0] : "oj-messaging-popup-validator-hint" === $subId$$2$$ ? this.$$messagingContentRoot$.find(".oj-form-control-hints \x3e .oj-form-control-hint-validator")[$index$$81$$ || 0] : "oj-messaging-popup-converter-hint" === $subId$$2$$ ? this.$$messagingContentRoot$.find(".oj-form-control-hints \x3e .oj-form-control-hint-converter")[0] : 
    "oj-messaging-popup-title" === $subId$$2$$ ? this.$$messagingContentRoot$.find(".oj-form-control-hints \x3e .oj-form-control-hint-title")[0] : null : null;
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_openPopup$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_openPopup$$($event$$22_self$$32$$) {
    $event$$22_self$$32$$ = $event$$22_self$$32$$.data && $event$$22_self$$32$$.data.strategy;
    var $domNode$$, $latestContent$$ = $event$$22_self$$32$$.$_buildPopupHtml$();
    $event$$22_self$$32$$.$_isPopupInitialized$() && $latestContent$$ && ($domNode$$ = $event$$22_self$$32$$.$$messagingContentRoot$[0], $domNode$$.innerHTML = "", $domNode$$.innerHTML = $latestContent$$, $event$$22_self$$32$$.$$messagingContentRoot$.ojPopup("open", $event$$22_self$$32$$.$_launcher$));
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_closePopup$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_closePopup$$($event$$23_self$$33$$) {
    $event$$23_self$$33$$ = $event$$23_self$$33$$.data && $event$$23_self$$33$$.data.strategy;
    $event$$23_self$$33$$.$$messagingContentRoot$.ojPopup("close", $event$$23_self$$33$$.$_launcher$);
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_initMessagingPopup$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_initMessagingPopup$$() {
    if (!this.$_isPopupInitialized$()) {
      var $jqLauncher$$ = this.$_launcher$, $jPositionOf$$ = this.$_getPopupPosition$(), $compDefaults$$1_events$$1$$ = $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$[this.$_component$.widgetName], $compDefaults$$1_events$$1$$ = $compDefaults$$1_events$$1$$ ? $compDefaults$$1_events$$1$$.$events$ : $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$["default"].$events$;
      this.$_component$.widget();
      this.$$messagingContentRoot$ = $$$$4$$("\x3cdiv class\x3d'oj-messaging-popup-container'\x3e\x3c/div\x3e");
      $$$$4$$("body").append(this.$$messagingContentRoot$);
      this.$$messagingContentRoot$.ojPopup({rootAttributes:{"class":"oj-messaging-popup"}, initialFocus:"none", tail:"simple", autoDismiss:"focusLoss", position:{my:"start bottom", at:"end top", collision:"flipfit", of:$jPositionOf$$}});
      if ($compDefaults$$1_events$$1$$.open) {
        $jqLauncher$$.on($compDefaults$$1_events$$1$$.open, {strategy:this}, this.$_openPopup$);
      }
      if ($compDefaults$$1_events$$1$$.close) {
        $jqLauncher$$.on($compDefaults$$1_events$$1$$.close, {strategy:this}, this.$_closePopup$);
      }
    }
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_getPopupPosition$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_getPopupPosition$$() {
    var $compDefaults$$2$$ = $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$[this.$_component$.widgetName];
    return $compDefaults$$2$$ && $compDefaults$$2$$.position && "launcher" === $compDefaults$$2$$.position ? this.$_launcher$ : this.$_component$.widget();
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_destroyTooltip$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_destroyTooltip$$() {
    this.$_isPopupInitialized$() && this.$$messagingContentRoot$ && (this.$$messagingContentRoot$.ojPopup("destroy"), this.$$messagingContentRoot$.remove());
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_buildPopupHtml$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_buildPopupHtml$$() {
    var $nwHtml$$ = "", $document$$1$$ = this.$_component$.document[0], $nwContent$$ = [], $addSeparator$$ = !1, $that$$1$$ = this;
    this.$ShowMessages$() && $nwContent$$.push(this.$_buildMessagesHtml$());
    (this.$ShowConverterHint$() || this.$ShowValidatorHint$() || this.$ShowTitle$()) && $nwContent$$.push(this.$_buildHintsHtml$($document$$1$$));
    $$$$4$$.each($nwContent$$, function($i$$77$$, $content$$23$$) {
      $content$$23$$ && ($addSeparator$$ ? $nwHtml$$ = $nwHtml$$.concat($that$$1$$.$_getSeparatorHtml$($document$$1$$)) : $addSeparator$$ = !0, $nwHtml$$ = $nwHtml$$.concat($content$$23$$));
    });
    return $nwHtml$$;
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_buildMessagesHtml$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_buildMessagesHtml$$() {
    var $messages$$9_messagesByType$$, $content$$24$$ = "", $i$$78$$, $j$$9_maxSeverity$$2$$, $severityStr$$, $severityLevel$$, $detail$$7_message$$29_messageObj$$;
    $j$$9_maxSeverity$$2$$ = this.$GetMaxSeverity$();
    var $summary$$4$$, $messagesByTypes$$ = {};
    $messages$$9_messagesByType$$ = [];
    if (this.$HasMessages$()) {
      $messages$$9_messagesByType$$ = this.$GetMessages$();
      for ($i$$78$$ = 0;$i$$78$$ < $messages$$9_messagesByType$$.length;$i$$78$$++) {
        $detail$$7_message$$29_messageObj$$ = $messages$$9_messagesByType$$[$i$$78$$], $detail$$7_message$$29_messageObj$$ = $detail$$7_message$$29_messageObj$$ instanceof $oj$$4$$.$Message$ ? $detail$$7_message$$29_messageObj$$ : new $oj$$4$$.$Message$($detail$$7_message$$29_messageObj$$.summary, $detail$$7_message$$29_messageObj$$.detail, $detail$$7_message$$29_messageObj$$.severity), $severityLevel$$ = $oj$$4$$.$Message$.$getSeverityLevel$($detail$$7_message$$29_messageObj$$.severity), $messagesByTypes$$[$severityLevel$$] || 
        ($messagesByTypes$$[$severityLevel$$] = []), $messagesByTypes$$[$severityLevel$$].push($detail$$7_message$$29_messageObj$$);
      }
      for ($i$$78$$ = $j$$9_maxSeverity$$2$$;$i$$78$$ >= $oj$$4$$.$Message$.$SEVERITY_LEVEL$.CONFIRMATION;$i$$78$$--) {
        for ($messages$$9_messagesByType$$ = $messagesByTypes$$[$i$$78$$] || [], $j$$9_maxSeverity$$2$$ = 0;$j$$9_maxSeverity$$2$$ < $messages$$9_messagesByType$$.length;$j$$9_maxSeverity$$2$$++) {
          $detail$$7_message$$29_messageObj$$ = $messages$$9_messagesByType$$[$j$$9_maxSeverity$$2$$], $oj$$4$$.$Assert$.$assertPrototype$($detail$$7_message$$29_messageObj$$, $oj$$4$$.$Message$), $severityLevel$$ = $oj$$4$$.$Message$.$getSeverityLevel$($detail$$7_message$$29_messageObj$$.severity), $severityStr$$ = this.$_getSeverityTranslatedString$($severityLevel$$), $summary$$4$$ = $detail$$7_message$$29_messageObj$$.summary || $severityStr$$, $detail$$7_message$$29_messageObj$$ = $detail$$7_message$$29_messageObj$$.detail || 
          "", $content$$24$$ = $content$$24$$.concat("\x3cdiv class\x3d'oj-message'\x3e").concat("\x3cspan class\x3d'" + this.$_getSeverityIconSelector$($severityLevel$$) + "' title\x3d'" + $severityStr$$ + "' role\x3d'img'\x3e\x3c/span\x3e").concat("\x3cspan class\x3d'oj-message-content'\x3e").concat("\x3cdiv class\x3d'oj-message-summary'\x3e" + $summary$$4$$ + "\x3c/div\x3e"), $detail$$7_message$$29_messageObj$$ && ($content$$24$$ = $content$$24$$.concat("\x3cdiv class\x3d'oj-message-detail'\x3e" + 
          $detail$$7_message$$29_messageObj$$ + "\x3c/div\x3e")), $content$$24$$ = $content$$24$$.concat("\x3c/div\x3e");
        }
      }
    }
    return $content$$24$$;
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_buildHintsHtml$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_buildHintsHtml$$($document$$2$$) {
    var $hint$$2_hints$$3$$ = [], $i$$79$$, $hintsHtml$$ = "";
    this.$ShowConverterHint$() && ($hint$$2_hints$$3$$ = this.$GetConverterHint$(), $hint$$2_hints$$3$$ = $hint$$2_hints$$3$$.length ? $hint$$2_hints$$3$$[0] : "", $hintsHtml$$ += this.$_buildHintHtml$($document$$2$$, "oj-form-control-hint-converter", $hint$$2_hints$$3$$));
    if (this.$ShowValidatorHint$()) {
      for ($hint$$2_hints$$3$$ = this.$GetValidatorHints$(), $i$$79$$ = 0;$i$$79$$ < $hint$$2_hints$$3$$.length;$i$$79$$++) {
        $hintsHtml$$ += this.$_buildHintHtml$($document$$2$$, "oj-form-control-hint-validator", $hint$$2_hints$$3$$[$i$$79$$]);
      }
    }
    this.$ShowTitle$() && ($hintsHtml$$ += this.$_buildHintHtml$($document$$2$$, "oj-form-control-hint-title", this.$GetTitle$()));
    return $hintsHtml$$ ? "\x3cdiv class\x3d'oj-form-control-hints'\x3e" + $hintsHtml$$ + "\x3c/div\x3e" : "";
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_buildHintHtml$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_buildHintHtml$$($document$$3$$, $selector$$14$$, $hintText$$) {
    var $jTitleDom$$, $classes$$ = "oj-form-control-hint";
    $hintText$$ && ($jTitleDom$$ = $$$$4$$($document$$3$$.createElement("div")), $jTitleDom$$.addClass($classes$$ + (" " + $selector$$14$$)), $jTitleDom$$.append(this.$_getHintDom$($document$$3$$, $hintText$$)));
    return $jTitleDom$$ ? $jTitleDom$$.get(0).outerHTML : "";
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_getHintDom$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_getHintDom$$($document$$4$$, $hintText$$1$$) {
    var $jHintDom$$ = null;
    $oj$$4$$.$DomUtils$.$isHTMLContent$($hintText$$1$$) ? $jHintDom$$ = $oj$$4$$.$DomUtils$.$cleanHtml$($hintText$$1$$.substring(6, $hintText$$1$$.length - 7)) : ($jHintDom$$ = $$$$4$$($document$$4$$.createElement("div")), $jHintDom$$.text($hintText$$1$$), $jHintDom$$ = $jHintDom$$.get(0));
    return $jHintDom$$;
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_getSeparatorHtml$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_getSeparatorHtml$$($document$$5_jSeparatorDom$$) {
    return($document$$5_jSeparatorDom$$ = $$$$4$$($document$$5_jSeparatorDom$$.createElement("hr"))) ? $document$$5_jSeparatorDom$$.get(0).outerHTML : "";
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_getSeverityTranslatedString$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_getSeverityTranslatedString$$($severity$$6$$) {
    var $sevTypeStr$$;
    switch($severity$$6$$) {
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.FATAL:
        $sevTypeStr$$ = $oj$$4$$.$Translations$.$getTranslatedString$("oj-message.fatal");
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.ERROR:
        $sevTypeStr$$ = $oj$$4$$.$Translations$.$getTranslatedString$("oj-message.error");
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.WARNING:
        $sevTypeStr$$ = $oj$$4$$.$Translations$.$getTranslatedString$("oj-message.warning");
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.INFO:
        $sevTypeStr$$ = $oj$$4$$.$Translations$.$getTranslatedString$("oj-message.info");
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.CONFIRMATION:
        $sevTypeStr$$ = $oj$$4$$.$Translations$.$getTranslatedString$("oj-message.confirmation");
    }
    return $sevTypeStr$$;
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_getSeverityIconSelector$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_getSeverityIconSelector$$($severity$$7$$) {
    var $sevIconStr$$;
    switch($severity$$7$$) {
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.FATAL:
        $sevIconStr$$ = "oj-message-error-icon";
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.ERROR:
        $sevIconStr$$ = "oj-message-error-icon";
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.WARNING:
        $sevIconStr$$ = "oj-message-warning-icon";
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.INFO:
        $sevIconStr$$ = "oj-message-info-icon";
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.CONFIRMATION:
        $sevIconStr$$ = "oj-message-confirmation-icon";
    }
    return $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULT_STATUS_ICON_SELECTORS$ + $sevIconStr$$;
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_isPopupInitialized$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_isPopupInitialized$$() {
    return this.$$messagingContentRoot$ ? this.$$messagingContentRoot$.is(":oj-popup") : !1;
  };
  $oj$$4$$.$__registerWidget$("oj.editableValue", $$$$4$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{disabled:void 0, help:{definition:null, source:null}, messagesComponent:void 0, messagesCustom:void 0, messagingDisplayOptions:void 0, required:void 0, title:void 0, validators:void 0, value:void 0, optionChange:void 0}, getMessages:function() {
    for (var $allMsgs$$ = [], $msg$$4$$, $allMsgs$$ = this.options.messagesComponent.concat(this.options.messagesCustom), $i$$80$$ = 0;$i$$80$$ < $allMsgs$$.length;$i$$80$$++) {
      $msg$$4$$ = $allMsgs$$[$i$$80$$], $msg$$4$$ instanceof $oj$$4$$.$ComponentMessage$ || $msg$$4$$ instanceof $oj$$4$$.$Message$ ? $msg$$4$$.display = $msg$$4$$.$canDisplay$() ? "immediate" : "deferred" : $msg$$4$$ instanceof Object && ($msg$$4$$.display = "immediate");
    }
    return $allMsgs$$;
  }, getNodeBySubId:function($cm$$1_locator$$2$$) {
    var $node$$13$$ = this._super($cm$$1_locator$$2$$), $subId$$3$$, $index$$82$$ = 0;
    if (!$node$$13$$) {
      switch($subId$$3$$ = $cm$$1_locator$$2$$.subId, $index$$82$$ = $cm$$1_locator$$2$$.index || 0, $cm$$1_locator$$2$$ = this.$_getComponentMessaging$(), $subId$$3$$) {
        case "oj-messaging-popup-content":
        ;
        case "oj-messaging-popup-converter-hint":
        ;
        case "oj-messaging-popup-title":
          $node$$13$$ = $cm$$1_locator$$2$$.getNodeBySubId($subId$$3$$);
          break;
        case "oj-messaging-popup-validator-hint":
        ;
        case "oj-messaging-popup-message":
          $node$$13$$ = $cm$$1_locator$$2$$.getNodeBySubId($subId$$3$$, $index$$82$$);
      }
    }
    return $node$$13$$ || null;
  }, isValid:function() {
    return void 0 === this.$__valid$ ? !0 : this.$__valid$;
  }, refresh:function() {
    this._super();
    this.$_doRefresh$(!0);
  }, reset:function() {
    var $resetValue$$ = this.options.value;
    this.$_clearAllMessages$();
    this.$_updateValueOption$($resetValue$$);
  }, showMessages:function() {
    var $msgs$$ = this.$_messagesComponent$, $msg$$5$$, $mutated$$ = !1, $i$$81$$, $clonedMsgs$$ = [];
    for ($i$$81$$ = 0;$i$$81$$ < $msgs$$.length;$i$$81$$++) {
      $msg$$5$$ = $msgs$$[$i$$81$$], $msg$$5$$ instanceof $oj$$4$$.$ComponentMessage$ && ($mutated$$ = $mutated$$ || $msg$$5$$.$_forceDisplayImmediate$()), $clonedMsgs$$.push($msg$$5$$.clone());
    }
    $mutated$$ && (this.options.messagesComponent = $clonedMsgs$$, this.$_TriggerOptionChange$("messagesComponent", $msgs$$, !1));
  }, validate:function() {
    var $mode$$11$$ = this.$_VALIDATION_MODE$.$VALIDATORS_ONLY$;
    if (this.isValid()) {
      return this.$_doRunImmediateValidation$(this.options.value, void 0, $mode$$11$$, this.$_VALIDATION_CONTEXT$.$COMPONENT_VALIDATE$), this.isValid() ? !0 : !1;
    }
    this.showMessages();
    return!1;
  }, $_VALIDATION_MODE$:{$FULL$:1, $VALIDATORS_ONLY$:2, $REQUIRED_VALIDATOR_ONLY$:3}, _InitOptions:function($originalDefaults$$3$$, $constructorOptions$$3$$) {
    this._super($originalDefaults$$3$$, $constructorOptions$$3$$);
    this.$_optionsInitializedFromDom$ = [];
  }, _ComponentCreate:function() {
    var $node$$14$$ = this.element, $savedAttributes$$1$$ = this.$_GetSavedAttributes$($node$$14$$);
    this._super();
    this.options.messagesComponent = this.options.messagesComponent || [];
    this.options.messagesCustom = this.options.messagesCustom || [];
    this.$_messagesComponent$ = [];
    "boolean" === typeof this.options.disabled && $node$$14$$.prop("disabled", this.options.disabled);
    this.options.placeholder && this._SetPlaceholder(this.options.placeholder);
    $$$$4$$.each(["required", "title"], function($index$$83$$, $value$$73$$) {
      $value$$73$$ in $savedAttributes$$1$$ && $node$$14$$.removeAttr($value$$73$$);
    });
  }, $_AfterCreate$:function() {
    this._super();
    this.$_createOjLabel$();
    this.$_doRefresh$(!1);
    this.$_initComponentMessaging$();
    this.$_doAfterCreateOptionChanges$();
    this.$_doAfterCreateValidation$();
    this.widget().addClass("oj-form-control");
  }, _destroy:function() {
    var $widget$$2$$ = this.widget();
    this.$_clearAllMessages$(null, !0);
    this.$_getComponentMessaging$().$deactivate$(this.$_getMessagingContent$());
    $$$$4$$.each(this.$_OPTION_TO_CSS_MAPPING$, function() {
      $widget$$2$$.removeClass(this.toString());
    });
    $widget$$2$$.removeClass("oj-form-control");
    this.element.removeAttr("aria-required");
    this.$$label$ && this.$$label$._ojLabel("destroy");
    return this._super();
  }, Focus:function() {
    this.$_GetContentElement$().focus();
    return!0;
  }, _setOption:function($name$$67$$, $value$$74$$, $flags$$7$$) {
    var $retVal$$4_skipSetOption$$, $previous$$, $shouldRefresh$$ = !0, $forceDisplayValueRefresh$$ = !1, $runDeferredValidationAfterSetOptions$$ = !1;
    $retVal$$4_skipSetOption$$ = !1;
    if ("string" === typeof $name$$67$$ && void 0 !== $value$$74$$) {
      switch($name$$67$$) {
        case "value":
          $previous$$ = this.options.value;
          break;
        case "messagesComponent":
          $retVal$$4_skipSetOption$$ = !0;
          break;
        case "messagesCustom":
          $previous$$ = this.options.messagesCustom || [];
          break;
        case "messagingDisplayOptions":
          $previous$$ = $$$$4$$.extend({}, this.options.messagingDisplayOptions);
      }
    }
    if ($retVal$$4_skipSetOption$$) {
      return this;
    }
    $retVal$$4_skipSetOption$$ = this._superApply(arguments);
    switch($name$$67$$) {
      case "converter":
        $forceDisplayValueRefresh$$ = !0;
        this.$_converterOptionChanged$();
        break;
      case "messagesCustom":
        this.$_messagesCustomOptionChanged$($previous$$, $flags$$7$$);
        break;
      case "messagingDisplayOptions":
        this.$_initComponentMessaging$();
        break;
      case "placeholder":
        $shouldRefresh$$ = !1;
        this.$_placeholderOptionChanged$($flags$$7$$);
        break;
      case "required":
        $runDeferredValidationAfterSetOptions$$ = !0;
        break;
      case "title":
        this.$_getComponentMessaging$().update(this.$_getMessagingContent$(this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$TITLE$));
        break;
      case "validators":
        this.$_ResetAllValidators$();
        $shouldRefresh$$ = !1;
        break;
      case "value":
        $runDeferredValidationAfterSetOptions$$ = $forceDisplayValueRefresh$$ = !0, this.$_valueOptionChanged$($previous$$, $flags$$7$$);
    }
    $shouldRefresh$$ && (this.$_Refresh$($name$$67$$, $value$$74$$, $forceDisplayValueRefresh$$), this.$_refreshAria$($name$$67$$, $value$$74$$), this.$_refreshTheming$($name$$67$$, $value$$74$$));
    $runDeferredValidationAfterSetOptions$$ && this.$_doSetOptionValidation$($name$$67$$, $flags$$7$$);
    return $retVal$$4_skipSetOption$$;
  }, $_GetContentElement$:function() {
    return this.element;
  }, $_GetLabelElement$:function() {
    var $ariaElement_id$$10_queryResult$$ = this.$_getAriaLabelledByElement$(this.element);
    if (null !== $ariaElement_id$$10_queryResult$$ && 0 !== $ariaElement_id$$10_queryResult$$.length) {
      return $ariaElement_id$$10_queryResult$$;
    }
    $ariaElement_id$$10_queryResult$$ = this.element.prop("id");
    if (void 0 !== $ariaElement_id$$10_queryResult$$ && ($ariaElement_id$$10_queryResult$$ = $$$$4$$("label[for\x3d'" + $ariaElement_id$$10_queryResult$$ + "']"), 0 !== $ariaElement_id$$10_queryResult$$.length)) {
      return $ariaElement_id$$10_queryResult$$;
    }
    $ariaElement_id$$10_queryResult$$ = this.element.closest("[aria-labelledby]");
    return 0 !== $ariaElement_id$$10_queryResult$$.length && ($ariaElement_id$$10_queryResult$$ = this.$_getAriaLabelledByElement$($ariaElement_id$$10_queryResult$$), null !== $ariaElement_id$$10_queryResult$$ && 0 !== $ariaElement_id$$10_queryResult$$.length) ? $ariaElement_id$$10_queryResult$$ : null;
  }, $_GetElementValue$:function() {
    return this.element.val();
  }, _GetMessagingLauncherElement:function() {
    return this.$_GetContentElement$();
  }, $_GetConverter$:function() {
    this.$__converter$ || (this.$__converter$ = $oj$$4$$.$IntlConverterUtils$.getConverterInstance(this.options.converter));
    return this.$__converter$ || null;
  }, $_GetDefaultValidators$:function() {
    this.$__defaultValidators$ || (this.$__defaultValidators$ = {});
    return this.$__defaultValidators$;
  }, $_GetDisplayValue$:function() {
    return this.$_GetContentElement$().val();
  }, $_GetAllValidators$:function() {
    if (!this.$__allValidators$) {
      var $allValidators$$ = [], $validatorsOption$$ = this.options.validators, $vOptions_validator$$, $isValidatorInstance$$ = !0, $defaultValidatorMap_vType$$ = this.$_GetDefaultValidators$(), $defaultValidators_normalizedValidators$$ = [], $vTypeStr$$, $i$$82_val$$20$$;
      for ($i$$82_val$$20$$ in $defaultValidatorMap_vType$$) {
        $defaultValidatorMap_vType$$.hasOwnProperty($i$$82_val$$20$$) && $defaultValidators_normalizedValidators$$.push($defaultValidatorMap_vType$$[$i$$82_val$$20$$]);
      }
      $allValidators$$ = $allValidators$$.concat($defaultValidators_normalizedValidators$$);
      if ($validatorsOption$$) {
        $defaultValidators_normalizedValidators$$ = [];
        for ($i$$82_val$$20$$ = 0;$i$$82_val$$20$$ < $validatorsOption$$.length;$i$$82_val$$20$$++) {
          $vOptions_validator$$ = $validatorsOption$$[$i$$82_val$$20$$], "object" === typeof $vOptions_validator$$ ? ($vOptions_validator$$.validate && "function" === typeof $vOptions_validator$$.validate || ($isValidatorInstance$$ = !1), $isValidatorInstance$$ || ($vTypeStr$$ = $vOptions_validator$$.type) && "string" === typeof $vTypeStr$$ && (($defaultValidatorMap_vType$$ = $oj$$4$$.$Validation$.$validatorFactory$($vTypeStr$$)) ? ($vOptions_validator$$ = $$$$4$$.extend({}, $vOptions_validator$$.options) || 
          {}, $vOptions_validator$$.converter = $vOptions_validator$$.converter || this.$_GetConverter$(), $vOptions_validator$$.label = $vOptions_validator$$.label || this.$_getLabelText$(), $vOptions_validator$$ = $defaultValidatorMap_vType$$.createValidator($vOptions_validator$$)) : $oj$$4$$.$Logger$.error("Unable to locate a validatorFactory for the requested type: " + $vTypeStr$$)), $defaultValidators_normalizedValidators$$.push($vOptions_validator$$)) : $oj$$4$$.$Logger$.error("Unable to parse the validator provided:" + 
          $vOptions_validator$$);
        }
        $allValidators$$ = $allValidators$$.concat($defaultValidators_normalizedValidators$$);
      }
      this.$__allValidators$ = $allValidators$$;
    }
    return this.$__allValidators$ || [];
  }, $_ResetAllValidators$:function() {
    this.$__allValidators$ && (this.$__allValidators$.length = 0);
    this.$__allValidators$ = null;
    this.$_getComponentMessaging$().update(this.$_getMessagingContent$(this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$VALIDATOR_HINTS$));
  }, $_IsRequired$:function() {
    return "required" === this.options.required;
  }, $_HandleChangeEvent$:function($event$$24$$) {
    var $submittedValue$$ = this.$_GetDisplayValue$();
    this.$_SetValue$($submittedValue$$, $event$$24$$);
  }, $_Refresh$:function($helpDef_name$$68$$, $helpSource_value$$76$$, $forceDisplayValueRefresh$$1_labelHelpIconWrapper$$) {
    switch($helpDef_name$$68$$) {
      case "converter":
        $helpSource_value$$76$$ = this.options.value;
        this.$_refreshComponentDisplayValue$($helpSource_value$$76$$, $forceDisplayValueRefresh$$1_labelHelpIconWrapper$$);
        break;
      case "value":
        this.$_refreshComponentDisplayValue$($helpSource_value$$76$$, $forceDisplayValueRefresh$$1_labelHelpIconWrapper$$);
        break;
      case "required":
        this.$$label$ && this.$$label$._ojLabel("option", "required", $helpSource_value$$76$$);
        break;
      case "help":
        $helpDef_name$$68$$ = this.options.help.definition, $helpSource_value$$76$$ = this.options.help.source, $forceDisplayValueRefresh$$1_labelHelpIconWrapper$$ = this.$_ariaDescribedByHelpIconWrapper$($helpSource_value$$76$$), this.$$label$ && (this.$$label$._ojLabel("option", "describedById", $forceDisplayValueRefresh$$1_labelHelpIconWrapper$$), this.$$label$._ojLabel("option", "help", {definition:$helpDef_name$$68$$, source:$helpSource_value$$76$$}));
    }
  }, $_RefreshAriaRequired$:function($ariaValue_value$$77$$) {
    var $contentNode$$ = this.$_GetContentElement$();
    ($ariaValue_value$$77$$ = "required" == $ariaValue_value$$77$$ ? !0 : !1) && $contentNode$$ ? $contentNode$$.attr("aria-required", $ariaValue_value$$77$$) : $contentNode$$.removeAttr("aria-required");
  }, $_SetDisplayValue$:function($displayValue$$) {
    this.$_GetContentElement$().val($displayValue$$);
  }, $_SetValue$:function($newValue$$, $event$$25$$, $mode$$12_options$$109$$) {
    if (void 0 === $newValue$$) {
      return $oj$$4$$.$Logger$.warn("Attempt to set a value of undefined"), !1;
    }
    if (this.$_CanSetValue$()) {
      $mode$$12_options$$109$$ = $mode$$12_options$$109$$ && $mode$$12_options$$109$$.$validationMode$ ? $mode$$12_options$$109$$.$validationMode$ : this.$_VALIDATION_MODE$.$FULL$;
      if ($newValue$$ !== this.$__oj_lastElementValue$) {
        if (this.$_clearAllMessages$($event$$25$$), this.$_setLastSubmittedValue$($newValue$$), $newValue$$ = this.$_doRunImmediateValidation$($newValue$$, $event$$25$$, $mode$$12_options$$109$$, this.$_VALIDATION_CONTEXT$.$USER_ACTION$), !this.isValid()) {
          return!1;
        }
      } else {
        return $oj$$4$$.$Logger$.$level$ > $oj$$4$$.$Logger$.$LEVEL_WARN$ && $oj$$4$$.$Logger$.info("Validation skipped and value option not updated as submitted value '" + $newValue$$.toString ? $newValue$$.toString() : $newValue$$ + " same as previous."), !1;
      }
      this.$_updateValueOption$($newValue$$, $event$$25$$);
    }
    return!0;
  }, $_CanSetValue$:function() {
    return this.options.disabled ? !1 : !0;
  }, $_RefreshLabelDependents$:function() {
    this.$__defaultReqValOptions$ = {};
    this.$_ResetAllValidators$();
  }, _SetPlaceholder:function($value$$78$$) {
    this.$_GetContentElement$().attr("placeholder", $value$$78$$);
  }, $_InitializedOptionFromDom$:function($option$$, $previousValue$$) {
    this.$_optionsInitializedFromDom$.push({option:$option$$, previousValue:$previousValue$$});
  }, $_TriggerOptionChange$:function($option$$1$$, $dataHash_previousValue$$1$$, $shouldWriteback_writebackVal$$, $originalEvent$$) {
    $oj$$4$$.$Assert$.$assertNonEmptyString$($option$$1$$, "");
    $shouldWriteback_writebackVal$$ = $shouldWriteback_writebackVal$$ ? {writeback:"shouldWrite"} : {writeback:"shouldNotWrite"};
    $dataHash_previousValue$$1$$ = {option:$option$$1$$, component:$oj$$4$$.Components.$getWidgetConstructor$(this.element), previousValue:$dataHash_previousValue$$1$$, value:this.options[$option$$1$$], optionMetadata:$shouldWriteback_writebackVal$$};
    switch($option$$1$$) {
      case "messagesComponent":
      ;
      case "messagesCustom":
        this._trigger("optionChange", $originalEvent$$ || null, $dataHash_previousValue$$1$$);
        this.$_getComponentMessaging$().update(this.$_getMessagingContent$());
        break;
      case "value":
        this._trigger("optionChange", $originalEvent$$ || null, $dataHash_previousValue$$1$$);
    }
  }, $_ValueEquals$:function($value1$$6$$, $value2$$6$$) {
    return $oj$$4$$.$Object$.$compareValues$($value1$$6$$, $value2$$6$$);
  }, _GetDefaultStyleClass:function() {
    return "oj-editablevalue";
  }, $__MESSAGING_CONTENT_UPDATE_TYPE$:{$ALL$:1, $VALIDITY_STATE$:2, $CONVERTER_HINT$:3, $VALIDATOR_HINTS$:4, $TITLE$:5}, $_OPTION_TO_CSS_MAPPING$:{disabled:"oj-disabled", required:"oj-required"}, $_VALIDATION_CONTEXT$:{$COMPONENT_CREATE$:1, $VALUE_OPTION_CHANGE$:2, $REQUIRED_OPTION_CHANGE$:3, $USER_ACTION$:4, $COMPONENT_VALIDATE$:5}, $_clearAllMessages$:function($event$$26$$, $doNotSetOption$$) {
    $doNotSetOption$$ ? (this.$_messagesComponent$ = [], this.options.messagesComponent = [], this.options.messagesCustom = []) : (this.$_clearComponentMessages$($event$$26$$), this.$_clearCustomMessages$($event$$26$$));
  }, $_clearComponentMessages$:function($event$$27$$) {
    var $flags$$8$$ = {};
    $event$$27$$ && ($flags$$8$$._oj_originalEvent = $event$$27$$);
    $flags$$8$$.changed = !this.$_messagesEquals$(this.$_messagesComponent$, []);
    this.$_messagesComponent$ = [];
    this.options.messagesComponent = [];
    this.$_messagesComponentOptionChanged$(this.options.messagesComponent, $flags$$8$$);
  }, $_clearCustomMessages$:function($event$$28$$) {
    var $msgsHash$$ = {}, $flags$$9$$ = {};
    $msgsHash$$.messagesCustom = [];
    $event$$28$$ && ($flags$$9$$._oj_originalEvent = $event$$28$$);
    this.option($msgsHash$$, $flags$$9$$);
  }, $_converterOptionChanged$:function() {
    this.$__converter$ = null;
    this.$_getComponentMessaging$().update(this.$_getMessagingContent$(this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$CONVERTER_HINT$));
  }, $_createOjLabel$:function() {
    if (this.$$label$ = this.$_GetLabelElement$()) {
      var $helpDef$$1$$ = this.options.help.definition, $helpSource$$1$$ = this.options.help.source, $labelHelpIconWrapper$$1$$ = this.$_ariaDescribedByHelpIconWrapper$($helpSource$$1$$);
      this.$$label$._ojLabel({rootAttributes:{"class":this._GetDefaultStyleClass() + "-label"}, describedById:$labelHelpIconWrapper$$1$$, required:this.options.required, help:{definition:$helpDef$$1$$, source:$helpSource$$1$$}});
    }
  }, $_doAfterCreateOptionChanges$:function() {
    var $self$$35$$ = this;
    $$$$4$$.each(this.$_optionsInitializedFromDom$, function($index$$84$$, $item$$1$$) {
      $self$$35$$.$_TriggerOptionChange$($item$$1$$.option, $item$$1$$.previousValue, !0);
    });
    this.$_optionsInitializedFromDom$ = null;
  }, $_doAfterCreateValidation$:function() {
    var $validationMsg$$ = this.$_runDeferredValidators$(this.$_VALIDATION_CONTEXT$.$COMPONENT_CREATE$);
    $validationMsg$$ ? this.$_updateComponentMessagesOption$($validationMsg$$) : this.$_messagesComponentOptionChanged$(this.options.messagesComponent, {changed:!0});
    this.$_messagesCustomOptionChanged$(this.options.messagesCustom, {changed:!0});
  }, $_doSetOptionValidation$:function($option$$2$$, $flags$$10$$) {
    var $isUIValueChange_valMsg$$;
    $isUIValueChange_valMsg$$ = !1;
    switch($option$$2$$) {
      case "value":
        $flags$$10$$ && ($isUIValueChange_valMsg$$ = $flags$$10$$._oj_originalEvent ? !0 : !1);
        $isUIValueChange_valMsg$$ || (this.$_clearComponentMessages$(null), ($isUIValueChange_valMsg$$ = this.$_runDeferredValidators$(this.$_VALIDATION_CONTEXT$.$VALUE_OPTION_CHANGE$)) && this.$_updateComponentMessagesOption$($isUIValueChange_valMsg$$));
        break;
      case "required":
        this.$_clearComponentMessages$(null), this.$_IsRequired$() && this.$_runDeferredValidators$(this.$_VALIDATION_CONTEXT$.$REQUIRED_OPTION_CHANGE$);
    }
  }, $_doRefresh$:function($fullRefresh$$) {
    $fullRefresh$$ && (this.$$label$ && this.$$label$._ojLabel("refresh"), this.$_RefreshLabelDependents$(), this.$_initComponentMessaging$());
    this.$_Refresh$("value", this.options.value);
    this.$_refreshAria$("required", this.options.required);
    this.$_refreshTheming$("required", this.options.required);
    this.$_refreshTheming$("disabled", this.options.disabled);
  }, $_doRunDeferredValidation$:function($context$$31$$, $event$$29$$) {
    var $newMsg_value$$79$$ = this.options.value;
    try {
      this.$_validateValue$($newMsg_value$$79$$, this.$_VALIDATION_MODE$.$REQUIRED_VALIDATOR_ONLY$);
    } catch ($ve$$) {
      throw $newMsg_value$$79$$ = this.$_processValidationError$($ve$$, $event$$29$$, $context$$31$$), $newMsg_value$$79$$;
    }
    return $newMsg_value$$79$$;
  }, $_doRunImmediateValidation$:function($newMsg$$1_value$$80$$, $event$$30$$, $mode$$13$$, $context$$32$$) {
    var $newValue$$1$$ = $newMsg$$1_value$$80$$;
    try {
      $mode$$13$$ === this.$_VALIDATION_MODE$.$FULL$ && ($newValue$$1$$ = this.$_parseValue$($newMsg$$1_value$$80$$)), this.$_validateValue$($newValue$$1$$, $mode$$13$$ === this.$_VALIDATION_MODE$.$REQUIRED_VALIDATOR_ONLY$);
    } catch ($ve$$1$$) {
      $newMsg$$1_value$$80$$ = this.$_processValidationError$($ve$$1$$, $event$$30$$, $context$$32$$), this.$_updateComponentMessagesOption$($newMsg$$1_value$$80$$, $event$$30$$);
    }
    return $newValue$$1$$;
  }, $_getLastModelValue$:function() {
    return this.$__oj_lastModelValue$;
  }, $_getLastSubmittedValue$:function() {
    return this.$__oj_lastElementValue$;
  }, $_getAriaLabelledByElement$:function($ariaId_elem$$17$$) {
    $ariaId_elem$$17$$ = $ariaId_elem$$17$$.attr("aria-labelledby");
    return void 0 !== $ariaId_elem$$17$$ ? $$$$4$$("label[id\x3d'" + $ariaId_elem$$17$$ + "']") : null;
  }, $_ariaDescribedByHelpIconWrapper$:function($helpSource$$2$$) {
    this.element.uniqueId();
    var $labelHelpIconWrapperId$$ = this.element.prop("id") + "Icons";
    $helpSource$$2$$ && this.$_GetContentElement$().each(function() {
      var $ariaDescBy$$ = $$$$4$$(this).attr("aria-describedby");
      $ariaDescBy$$ ? $$$$4$$(this).attr("aria-describedby", $ariaDescBy$$ + " " + $labelHelpIconWrapperId$$) : $$$$4$$(this).attr("aria-describedby", $labelHelpIconWrapperId$$);
    });
    return $labelHelpIconWrapperId$$;
  }, $_getMessages$:function() {
    return this.options.messagesCustom.concat(this.$_messagesComponent$);
  }, $_getLabelText$:function() {
    if (this.$$label$) {
      return this.$$label$.text();
    }
  }, $_getValidityState$:function() {
    this.$__validityState$ || (this.$__validityState$ = new $oj$$4$$.$ComponentValidity$(this.isValid(), this.$_getMessages$()));
    return this.$__validityState$;
  }, $_hasInvalidMessages$:function() {
    return $oj$$4$$.$Message$.$getMaxSeverity$(this.$_getMessages$()) >= $oj$$4$$.$Message$.$SEVERITY_LEVEL$.ERROR ? !0 : !1;
  }, $_initComponentMessaging$:function() {
    var $compMessaging$$ = this.$_getComponentMessaging$(), $messagingLauncher$$ = this._GetMessagingLauncherElement(), $messagingContent$$ = this.$_getMessagingContent$(this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$);
    this.$__customPlaceholderSet$ || (this.options.placeholder = "");
    $compMessaging$$.$activate$($messagingLauncher$$, $messagingContent$$);
  }, $_messagesComponentOptionChanged$:function($previous$$1$$, $flags$$11$$) {
    this.$_messagesChanged$("messagesComponent", $previous$$1$$, $flags$$11$$);
  }, $_messagesCustomOptionChanged$:function($previous$$2$$, $flags$$12$$) {
    this.$_messagesChanged$("messagesCustom", $previous$$2$$, $flags$$12$$);
  }, $_messagesChanged$:function($option$$3$$, $previous$$3$$, $flags$$13$$) {
    var $shouldTriggerOptionChange$$ = !1, $msgs$$1$$ = this.options[$option$$3$$], $shouldWriteback$$1$$ = !1, $originalEvent$$1$$;
    $flags$$13$$ && ($shouldTriggerOptionChange$$ = $flags$$13$$.changed || !1, $shouldWriteback$$1$$ = ($originalEvent$$1$$ = $flags$$13$$._oj_originalEvent || null) ? !0 : !1);
    this.$_updateValid$();
    this.$_getComponentMessaging$().update(this.$_getMessagingContent$());
    !$shouldTriggerOptionChange$$ && this.$_messagesEquals$($previous$$3$$, $msgs$$1$$) || this.$_TriggerOptionChange$($option$$3$$, $previous$$3$$, $shouldWriteback$$1$$, $originalEvent$$1$$);
  }, $_placeholderOptionChanged$:function($flags$$14_refreshMessagingOptions$$) {
    $flags$$14_refreshMessagingOptions$$ = $flags$$14_refreshMessagingOptions$$ && $flags$$14_refreshMessagingOptions$$._oj_messaging_update ? !1 : !0;
    this._SetPlaceholder(this.options.placeholder);
    $flags$$14_refreshMessagingOptions$$ ? (this.$__customPlaceholderSet$ = !0, this.$_initComponentMessaging$()) : this.$__customPlaceholderSet$ = !1;
  }, $_setLastModelValue$:function($value$$82$$) {
    this.$__oj_lastModelValue$ = $value$$82$$;
  }, $_setLastSubmittedValue$:function($value$$83$$) {
    this.$__oj_lastElementValue$ = $value$$83$$;
  }, $_updateComponentMessagesOption$:function($message$$30$$, $event$$31$$) {
    var $flags$$15$$ = {};
    $oj$$4$$.$Assert$.$assertPrototype$($message$$30$$, $oj$$4$$.$Message$);
    $message$$30$$ && (this.$_messagesComponent$.push($message$$30$$), this.options.messagesComponent.push($message$$30$$.clone()), $flags$$15$$.changed = !0);
    $event$$31$$ && ($flags$$15$$._oj_originalEvent = $event$$31$$);
    this.$_messagesComponentOptionChanged$(this.options.messagesComponent, $flags$$15$$);
  }, $_updateValueOption$:function($newValue$$2$$, $event$$32$$) {
    var $values$$7$$ = {}, $flags$$16$$ = {};
    $values$$7$$.value = $newValue$$2$$;
    $event$$32$$ && ($flags$$16$$._oj_originalEvent = $event$$32$$);
    this.option($values$$7$$, $flags$$16$$);
  }, $_updateValid$:function() {
    var $hasMessages_msgs$$2$$ = this.$_getMessages$(), $hasMessages_msgs$$2$$ = $hasMessages_msgs$$2$$ && 0 !== $hasMessages_msgs$$2$$.length;
    this.$__valid$ = !0;
    $hasMessages_msgs$$2$$ && (this.$__valid$ = !this.$_hasInvalidMessages$());
  }, $_valueOptionChanged$:function($previous$$4$$, $flags$$17$$) {
    var $newValue$$3$$ = this.options.value, $shouldTriggerOptionChange$$1$$ = !1, $shouldWriteback$$2$$ = !1, $originalEvent$$2$$;
    $flags$$17$$ && ($shouldTriggerOptionChange$$1$$ = $flags$$17$$.changed || !1, $originalEvent$$2$$ = $flags$$17$$._oj_originalEvent || null, $shouldWriteback$$2$$ = $flags$$17$$._oj_originalEvent ? !0 : !1);
    !$shouldTriggerOptionChange$$1$$ && this.$_ValueEquals$($previous$$4$$, $newValue$$3$$) || this.$_TriggerOptionChange$("value", $previous$$4$$, $shouldWriteback$$2$$, $originalEvent$$2$$);
  }, $_formatValue$:function($value$$84$$) {
    var $formattedValue$$ = $value$$84$$, $converter$$ = this.$_GetConverter$();
    $converter$$ && "object" === typeof $converter$$ && ($converter$$.format && "function" === typeof $converter$$.format ? $formattedValue$$ = $converter$$.format($value$$84$$) : $oj$$4$$.$Logger$.$level$ > $oj$$4$$.$Logger$.$LEVEL_WARN$ && $oj$$4$$.$Logger$.info("converter does not support the format method."));
    return $formattedValue$$;
  }, $_getComponentMessaging$:function() {
    this.$__componentMessaging$ || (this.$__componentMessaging$ = new $oj$$4$$.$ComponentMessaging$(this));
    return this.$__componentMessaging$;
  }, $_getDefaultRequiredValidator$:function() {
    var $vf$$;
    this.$__defaultReqValOptions$ = {label:this.$_getLabelText$()};
    return($vf$$ = $oj$$4$$.$Validation$.$validatorFactory$($oj$$4$$.$ValidatorFactory$.VALIDATOR_TYPE_REQUIRED)) ? $vf$$.createValidator(this.$__defaultReqValOptions$) : null;
  }, $_getHintsForAllValidators$:function($allValidators$$1$$) {
    var $vHint_validator$$1$$, $validatorHints$$ = [];
    $vHint_validator$$1$$ = "";
    var $i$$83$$;
    this.$_IsRequired$() && ($vHint_validator$$1$$ = this.$_hasRequiredInValidators$($allValidators$$1$$), $vHint_validator$$1$$ || ($vHint_validator$$1$$ = this.$_getDefaultRequiredValidator$(), $vHint_validator$$1$$.getHint && "function" === typeof $vHint_validator$$1$$.getHint && ($vHint_validator$$1$$ = $vHint_validator$$1$$.getHint()) && $validatorHints$$.push($vHint_validator$$1$$)));
    for ($i$$83$$ = 0;$i$$83$$ < $allValidators$$1$$.length;$i$$83$$++) {
      $vHint_validator$$1$$ = $allValidators$$1$$[$i$$83$$], "object" === typeof $vHint_validator$$1$$ && $vHint_validator$$1$$.getHint && "function" === typeof $vHint_validator$$1$$.getHint && ($vHint_validator$$1$$ = $vHint_validator$$1$$.getHint()) && $validatorHints$$.push($vHint_validator$$1$$);
    }
    return $validatorHints$$;
  }, $_getMessagingContent$:function($updateType$$) {
    var $messagingContent$$1$$ = {}, $allValidators$$2_converter$$1_converterHint$$1$$ = this.$_GetConverter$(), $messages$$10_validatorHints$$1$$ = [];
    $updateType$$ = $updateType$$ || this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$VALIDITY_STATE$;
    if ($updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$VALIDITY_STATE$) {
      $messages$$10_validatorHints$$1$$ = this.$_getMessages$(), this.$_getValidityState$().update(this.isValid(), $messages$$10_validatorHints$$1$$), $messagingContent$$1$$.validityState = this.$_getValidityState$();
    }
    ($updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$CONVERTER_HINT$) && $allValidators$$2_converter$$1_converterHint$$1$$ && "object" === typeof $allValidators$$2_converter$$1_converterHint$$1$$ && $allValidators$$2_converter$$1_converterHint$$1$$.getHint && "function" === typeof $allValidators$$2_converter$$1_converterHint$$1$$.getHint && ($allValidators$$2_converter$$1_converterHint$$1$$ = $allValidators$$2_converter$$1_converterHint$$1$$.getHint() || 
    "", $messagingContent$$1$$.converterHint = $allValidators$$2_converter$$1_converterHint$$1$$);
    if ($updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$VALIDATOR_HINTS$) {
      $allValidators$$2_converter$$1_converterHint$$1$$ = this.$_GetAllValidators$(), $messages$$10_validatorHints$$1$$ = this.$_getHintsForAllValidators$($allValidators$$2_converter$$1_converterHint$$1$$) || [], $messagingContent$$1$$.validatorHint = $messages$$10_validatorHints$$1$$;
    }
    if ($updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$__MESSAGING_CONTENT_UPDATE_TYPE$.$TITLE$) {
      $messagingContent$$1$$.title = this.options.title || "";
    }
    return $messagingContent$$1$$;
  }, $_hasRequiredInValidators$:function($allValidators$$3$$) {
    var $validator$$2$$ = null, $i$$84$$, $required$$ = null;
    for ($i$$84$$ = 0;$i$$84$$ < $allValidators$$3$$.length;$i$$84$$++) {
      if ($validator$$2$$ = $allValidators$$3$$[$i$$84$$], $validator$$2$$ instanceof $oj$$4$$.$RequiredValidator$) {
        $required$$ = $validator$$2$$;
        break;
      }
    }
    return $required$$;
  }, $_messagesEquals$:function($pm$$, $m$$10$$) {
    var $match$$ = -1, $pmo$$, $passed$$ = !0, $previousMsgs$$ = $$$$4$$.extend([], $pm$$), $msgs$$3$$ = $$$$4$$.extend([], $m$$10$$);
    if ($previousMsgs$$ === $msgs$$3$$) {
      return!0;
    }
    if (null == $previousMsgs$$ || null == $msgs$$3$$ || $previousMsgs$$.length !== $msgs$$3$$.length) {
      return!1;
    }
    $$$$4$$.each($previousMsgs$$, function($i$$85$$, $pMsg$$) {
      $pmo$$ = $pMsg$$ instanceof $oj$$4$$.$Message$ ? $pMsg$$ : new $oj$$4$$.$Message$($pMsg$$.summary, $pMsg$$.detail, $pMsg$$.severity);
      $match$$ = -1;
      $$$$4$$.each($msgs$$3$$, function($j$$10$$, $msg$$6$$) {
        $pmo$$.$equals$($msg$$6$$) && ($match$$ = $j$$10$$);
      });
      -1 < $match$$ ? $msgs$$3$$.splice($match$$, 1) : $passed$$ = !1;
    });
    return $passed$$;
  }, $_parseValue$:function($submittedValue$$1$$) {
    var $converter$$2$$ = this.$_GetConverter$(), $parsedValue$$ = $submittedValue$$1$$;
    $converter$$2$$ && "object" === typeof $converter$$2$$ && ($converter$$2$$.parse && "function" === typeof $converter$$2$$.parse ? $parsedValue$$ = $converter$$2$$.parse($submittedValue$$1$$) : $oj$$4$$.$Logger$.$level$ > $oj$$4$$.$Logger$.$LEVEL_WARN$ && $oj$$4$$.$Logger$.info("converter does not support the parse method."));
    return $parsedValue$$;
  }, $_processValidationError$:function($detail$$8_e$$29_ojmessage$$, $event$$33_summary$$5$$, $context$$33$$) {
    var $severity$$8$$, $options$$110$$ = {};
    $detail$$8_e$$29_ojmessage$$ instanceof $oj$$4$$.$ConverterError$ || $detail$$8_e$$29_ojmessage$$ instanceof $oj$$4$$.$ValidatorError$ ? ($detail$$8_e$$29_ojmessage$$ = $detail$$8_e$$29_ojmessage$$.$getMessage$(), $oj$$4$$.$Assert$.$assertPrototype$($detail$$8_e$$29_ojmessage$$, $oj$$4$$.$Message$), $severity$$8$$ = $detail$$8_e$$29_ojmessage$$.severity, $event$$33_summary$$5$$ = $detail$$8_e$$29_ojmessage$$.summary, $detail$$8_e$$29_ojmessage$$ = $detail$$8_e$$29_ojmessage$$.detail) : ($severity$$8$$ = 
    $oj$$4$$.$Message$.$SEVERITY_LEVEL$.ERROR, $event$$33_summary$$5$$ = $oj$$4$$.$Translations$.$getTranslatedString$("oj-message.error"), $detail$$8_e$$29_ojmessage$$ = $detail$$8_e$$29_ojmessage$$.message || $oj$$4$$.$Translations$.$getTranslatedString$("oj-converter.detail"));
    $options$$110$$.context = $context$$33$$ || 0;
    switch($context$$33$$) {
      case this.$_VALIDATION_CONTEXT$.$COMPONENT_CREATE$:
      ;
      case this.$_VALIDATION_CONTEXT$.$VALUE_OPTION_CHANGE$:
      ;
      case this.$_VALIDATION_CONTEXT$.$REQUIRED_OPTION_CHANGE$:
        $options$$110$$.display = $oj$$4$$.$ComponentMessage$.$DISPLAY_TYPE$.$DEFERRED$;
        break;
      default:
        $options$$110$$.display = $oj$$4$$.$ComponentMessage$.$DISPLAY_TYPE$.$IMMEDIATE$;
    }
    return new $oj$$4$$.$ComponentMessage$($event$$33_summary$$5$$, $detail$$8_e$$29_ojmessage$$, $severity$$8$$, $options$$110$$);
  }, $_refreshAria$:function($option$$4$$, $value$$85$$) {
    switch($option$$4$$) {
      case "required":
        this.$_RefreshAriaRequired$($value$$85$$);
    }
  }, $_refreshComponentDisplayValue$:function($value$$86$$, $fullRefresh$$1$$) {
    var $modelValue$$ = $value$$86$$ || this.options.value, $lastModelValue$$;
    $lastModelValue$$ = this.$__oj_lastModelValue$;
    ($fullRefresh$$1$$ || $modelValue$$ !== $lastModelValue$$) && this.$_updateElementDisplayValue$($modelValue$$);
  }, $_refreshTheming$:function($option$$5$$, $value$$87$$) {
    this.$_OPTION_TO_CSS_MAPPING$.hasOwnProperty($option$$5$$) && ("required" !== $option$$5$$ ? this.widget().toggleClass(this.$_OPTION_TO_CSS_MAPPING$[$option$$5$$], !!$value$$87$$) : this.widget().toggleClass(this.$_OPTION_TO_CSS_MAPPING$[$option$$5$$], "required" === $value$$87$$));
  }, $_runDeferredValidators$:function($context$$34$$) {
    var $msg$$7$$;
    switch($context$$34$$) {
      case this.$_VALIDATION_CONTEXT$.$VALUE_OPTION_CHANGE$:
      ;
      case this.$_VALIDATION_CONTEXT$.$REQUIRED_OPTION_CHANGE$:
      ;
      case this.$_VALIDATION_CONTEXT$.$COMPONENT_CREATE$:
        try {
          this.$_doRunDeferredValidation$($context$$34$$);
        } catch ($e$$30$$) {
          $msg$$7$$ = $e$$30$$;
        }
      ;
    }
    return $msg$$7$$ || null;
  }, $_updateElementDisplayValue$:function($modelValue$$1$$, $event$$34$$) {
    var $displayValue$$1$$, $newMsg$$2$$;
    this.$_setLastModelValue$($modelValue$$1$$);
    $displayValue$$1$$ = $modelValue$$1$$;
    try {
      $displayValue$$1$$ = this.$_formatValue$($modelValue$$1$$);
    } catch ($e$$31$$) {
      $newMsg$$2$$ = this.$_processValidationError$($e$$31$$, $event$$34$$), this.$_updateComponentMessagesOption$($newMsg$$2$$, $event$$34$$);
    }
    this.$_SetDisplayValue$($displayValue$$1$$);
    this.$_setLastSubmittedValue$(this.$_GetDisplayValue$());
  }, $_validateValue$:function($value$$88$$, $requiredOnly$$) {
    if (this.isValid()) {
      var $allValidators$$4$$ = this.$_GetAllValidators$(), $validator$$3$$, $i$$86$$, $reqValRun$$ = !1;
      this.$_IsRequired$() && (($validator$$3$$ = this.$_hasRequiredInValidators$($allValidators$$4$$)) || ($validator$$3$$ = this.$_getDefaultRequiredValidator$()), $validator$$3$$.validate($value$$88$$), $reqValRun$$ = !0);
      if (!$requiredOnly$$) {
        for ($i$$86$$ = 0;$i$$86$$ < $allValidators$$4$$.length;$i$$86$$++) {
          $validator$$3$$ = $allValidators$$4$$[$i$$86$$], "object" === typeof $validator$$3$$ && ($validator$$3$$.validate && "function" === typeof $validator$$3$$.validate ? $validator$$3$$ instanceof $oj$$4$$.$RequiredValidator$ && $reqValRun$$ || $validator$$3$$.validate($value$$88$$) : $oj$$4$$.$Logger$.$level$ > $oj$$4$$.$Logger$.$LEVEL_WARN$ && $oj$$4$$.$Logger$.info("validator does not support the validate method."));
        }
      }
    }
  }});
  $oj$$4$$.Components.$setDefaultOptions$({editableValue:{messagingDisplayOptions:$oj$$4$$.Components.$createDynamicPropertyGetter$(function() {
    return{messages:["notewindow"], converterHint:["placeholder", "notewindow"], validatorHint:["notewindow"], title:["notewindow"]};
  })}});
  $oj$$4$$.$__registerWidget$("oj._ojLabel", $$$$4$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3clabel\x3e", widgetEventPrefix:"oj", options:{describedById:null, help:{definition:null, source:null}, required:null, rootAttributes:void 0}, $_BUNDLE_KEY$:{$_TOOLTIP_HELP$:"tooltipHelp", $_TOOLTIP_REQUIRED$:"tooltipRequired"}, widget:function() {
    return this.$uiLabel$;
  }, refresh:function() {
    this._super();
    this.$_refreshRequired$();
    this.$_refreshHelp$();
  }, _create:function() {
    this._super();
    this.$_drawOnCreate$();
  }, $_drawOnCreate$:function() {
    this.$uiLabel$ = this.element.wrap(this.$_uiLabelWrapperHtml$()).closest(".oj-component");
    this.$_moveClassesToRoot$();
    if (this.options.help.definition || this.options.help.source) {
      this.$_insertHelpHtml$(), this.$_addHelpDefToLabel$();
    }
    "required" === this.options.required && this.element.before(this.$_requiredHtml$());
  }, $_moveClassesToRoot$:function() {
    var $arrayOfClasses_classes$$1$$ = this.element.attr("class");
    this.$movedClassArray$ = [];
    if ($arrayOfClasses_classes$$1$$) {
      for (var $arrayOfClasses_classes$$1$$ = $arrayOfClasses_classes$$1$$.split(/\s+/), $numClasses$$ = $arrayOfClasses_classes$$1$$.length, $i$$87$$ = 0;$i$$87$$ < $numClasses$$;$i$$87$$++) {
        var $className$$6$$ = $arrayOfClasses_classes$$1$$[$i$$87$$];
        0 < $className$$6$$.indexOf("-label") && (this.$uiLabel$.addClass($className$$6$$), this.element.removeClass($className$$6$$), this.$movedClassArray$.push($className$$6$$));
      }
    }
  }, $_uiLabelWrapperHtml$:function() {
    var $inputLabelClass$$;
    this.options.rootAttributes && ($inputLabelClass$$ = this.options.rootAttributes["class"]);
    return null !== $inputLabelClass$$ ? "\x3cdiv class\x3d'oj-label oj-component " + $inputLabelClass$$ + "'\x3e\x3cdiv class\x3d'oj-label-group'\x3e\x3c/div\x3e\x3c/div\x3e" : "\x3cdiv class\x3d'oj-label oj-component'\x3e\x3cdiv class\x3d'oj-label-group'\x3e\x3c/div\x3e\x3c/div\x3e";
  }, $_requiredHtml$:function() {
    return "\x3cspan class\x3d'oj-label-required-icon oj-component-icon' title\x3d'" + this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_REQUIRED$) + "'\x3e\x3c/span\x3e";
  }, $_helpHtml$:function($helpDef$$2_tooltipHelp$$, $source$$7$$, $describedById$$) {
    if ($source$$7$$) {
      var $helpHtml$$;
      $helpHtml$$ = "\x3cspan id\x3d'" + $describedById$$ + "'\x3e" + ("\x3ca href\x3d'" + $source$$7$$ + "' target\x3d'_blank'\x3e\x3cspan class\x3d");
      $helpHtml$$ += "'oj-label-help-icon oj-component-icon oj-clickable-icon' title\x3d'";
      $helpDef$$2_tooltipHelp$$ || ($helpDef$$2_tooltipHelp$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_HELP$));
      $helpHtml$$ += $helpDef$$2_tooltipHelp$$;
      $helpHtml$$ += "' role\x3d'img'\x3e\x3c/span\x3e";
      $helpHtml$$ += "\x3c/a\x3e\x3c/span\x3e";
    }
    return $helpHtml$$;
  }, $_addHelpDefToLabel$:function() {
    var $helpDef$$3$$ = this.options.help.definition;
    if ($helpDef$$3$$) {
      this.element.addClass("oj-label-help-def");
      var $title$$7$$ = this.element.attr("title");
      $title$$7$$ ? this.element.attr("title", $title$$7$$ + " " + $helpDef$$3$$) : this.element.attr("title", $helpDef$$3$$);
    }
  }, $_removeHelpDefToLabel$:function() {
    this.element.removeClass("oj-label-help-def");
    this.element.attr("title", "");
  }, $_insertHelpHtml$:function() {
    var $helpSource$$3$$ = this.options.help.source;
    if ($helpSource$$3$$) {
      var $helpDef$$4$$ = this.options.help.definition;
      this.$uiLabel$.find(".oj-label-group").prepend(this.$_helpHtml$($helpDef$$4$$, $helpSource$$3$$, this.options.describedById));
    }
  }, $_refreshHelp$:function() {
    null !== this.options.describedById && this.$uiLabel$.find("#" + this.options.describedById).remove();
    this.$_removeHelpDefToLabel$();
    this.$_insertHelpHtml$();
    this.$_addHelpDefToLabel$();
  }, $_refreshRequired$:function() {
    "required" === this.options.required ? 0 === this.$uiLabel$.find(".oj-label-required-icon").length && this.element.before(this.$_requiredHtml$()) : this.$uiLabel$.find(".oj-label-required-icon").remove();
  }, _setOption:function($key$$34$$, $value$$89$$) {
    this._superApply(arguments);
    "required" === $key$$34$$ && this.$_refreshRequired$();
    "help" === $key$$34$$ && this.$_refreshHelp$();
  }, getNodeBySubId:function($locator$$3_subId$$4$$) {
    var $node$$15$$ = this._super($locator$$3_subId$$4$$);
    $node$$15$$ || ($locator$$3_subId$$4$$ = $locator$$3_subId$$4$$.subId, "oj-label-help-icon" === $locator$$3_subId$$4$$ && ($node$$15$$ = this.widget().find(".oj-label-help-icon")[0]), "oj-label-help-icon-anchor" === $locator$$3_subId$$4$$ && ($node$$15$$ = this.widget().find(".oj-label-help-icon").parent()[0]), "oj-label-required-icon" === $locator$$3_subId$$4$$ && ($node$$15$$ = this.widget().find(".oj-label-required-icon")[0]));
    return $node$$15$$ || null;
  }, _destroy:function() {
    this._super();
    for (var $i$$88$$ = 0;$i$$88$$ < this.$movedClassArray$.length;$i$$88$$++) {
      this.element.addClass(this.$movedClassArray$[$i$$88$$]);
    }
    this.$_removeHelpDefToLabel$();
    this.$uiLabel$.replaceWith(this.element);
  }});
  $oj$$4$$.$EditableValueUtils$ = {};
  $goog$exportPath_$$("EditableValueUtils", $oj$$4$$.$EditableValueUtils$, $oj$$4$$);
  $oj$$4$$.$EditableValueUtils$.$getAttributeValue$ = function $$oj$$4$$$$EditableValueUtils$$$getAttributeValue$$($element$$21$$, $attribute$$2$$) {
    var $attrVal_result$$3$$, $propVal$$, $returnVal$$ = {};
    if ($element$$21$$ && $attribute$$2$$) {
      switch($attribute$$2$$) {
        case "disabled":
          $attrVal_result$$3$$ = void 0 !== $element$$21$$.attr("disabled") ? !!$element$$21$$.prop("disabled") : void 0;
          break;
        case "pattern":
          $attrVal_result$$3$$ = $element$$21$$.prop("pattern") || void 0;
          break;
        case "placeholder":
          $attrVal_result$$3$$ = $element$$21$$.prop("placeholder") || void 0;
          break;
        case "readonly":
          $attrVal_result$$3$$ = void 0 !== $element$$21$$.attr("readonly") ? !!$element$$21$$.prop("readonly") : void 0;
          break;
        case "required":
          $attrVal_result$$3$$ = $element$$21$$.attr("required");
          $propVal$$ = $element$$21$$.prop("required");
          $attrVal_result$$3$$ = void 0 !== $attrVal_result$$3$$ ? void 0 !== $propVal$$ ? !!$propVal$$ : !!$attrVal_result$$3$$ : void 0;
          break;
        case "title":
          $attrVal_result$$3$$ = $element$$21$$.prop("title");
          break;
        case "value":
          $attrVal_result$$3$$ = $element$$21$$.val() || void 0;
          break;
        default:
          $attrVal_result$$3$$ = $element$$21$$.attr($attribute$$2$$) || void 0;
      }
    }
    void 0 !== $attrVal_result$$3$$ ? ($returnVal$$.$fromDom$ = !0, $returnVal$$.value = $attrVal_result$$3$$) : $returnVal$$.$fromDom$ = !1;
    return $returnVal$$;
  };
  $oj$$4$$.$EditableValueUtils$.$initializeOptionsFromDom$ = function $$oj$$4$$$$EditableValueUtils$$$initializeOptionsFromDom$$($props$$4$$, $constructorOptions$$4$$, $comp$$1$$) {
    $$$$4$$.each($props$$4$$, function($index$$85$$, $prop$$47$$) {
      var $attribute$$3_finalValue_result$$4$$ = $prop$$47$$.attribute, $option$$6$$ = $prop$$47$$.option || $attribute$$3_finalValue_result$$4$$, $coerceDomValue$$ = $prop$$47$$.coerceDomValue, $validateOption$$ = $prop$$47$$.validateOption, $element$$22$$ = $comp$$1$$.element, $previousValue$$2$$ = $comp$$1$$.options[$option$$6$$];
      void 0 === $constructorOptions$$4$$[$option$$6$$] && ($previousValue$$2$$ = $comp$$1$$.options[$option$$6$$], $attribute$$3_finalValue_result$$4$$ = $oj$$4$$.$EditableValueUtils$.$getAttributeValue$($element$$22$$, $attribute$$3_finalValue_result$$4$$), $attribute$$3_finalValue_result$$4$$.$fromDom$ ? ($attribute$$3_finalValue_result$$4$$ = $attribute$$3_finalValue_result$$4$$.value, $coerceDomValue$$ && ("boolean" === typeof $coerceDomValue$$ ? $attribute$$3_finalValue_result$$4$$ = $oj$$4$$.$EditableValueUtils$.$coerceDomValueForOption$($option$$6$$, 
      $attribute$$3_finalValue_result$$4$$) : "function" === typeof $coerceDomValue$$ && ($attribute$$3_finalValue_result$$4$$ = $coerceDomValue$$.call($comp$$1$$, $attribute$$3_finalValue_result$$4$$))), $comp$$1$$.options[$option$$6$$] = $attribute$$3_finalValue_result$$4$$, $comp$$1$$.$_InitializedOptionFromDom$($option$$6$$, $previousValue$$2$$)) : void 0 === $previousValue$$2$$ && ($comp$$1$$.options[$option$$6$$] = $prop$$47$$.defaultOptionValue));
      $validateOption$$ && ("boolean" === typeof $validateOption$$ ? $oj$$4$$.$EditableValueUtils$.$validateValueForOption$($option$$6$$, $comp$$1$$.options[$option$$6$$]) : "function" === typeof $validateOption$$ && $validateOption$$.call($comp$$1$$));
    });
  };
  $oj$$4$$.$EditableValueUtils$.$validateValueForOption$ = function $$oj$$4$$$$EditableValueUtils$$$validateValueForOption$$($option$$7$$, $value$$90$$) {
    var $error$$12$$ = !1;
    switch($option$$7$$) {
      case "required":
        "required" !== $value$$90$$ && "optional" !== $value$$90$$ && ($error$$12$$ = !0);
        break;
      case "readOnly":
      ;
      case "disabled":
        null !== $value$$90$$ && "boolean" !== typeof $value$$90$$ && ($error$$12$$ = !0);
    }
    if ($error$$12$$) {
      throw "Option '" + $option$$7$$ + " 'has invalid value set: " + $value$$90$$;
    }
  };
  $oj$$4$$.$EditableValueUtils$.$coerceDomValueForOption$ = function $$oj$$4$$$$EditableValueUtils$$$coerceDomValueForOption$$($option$$8$$, $domValue$$) {
    var $coerced$$ = $domValue$$;
    switch($option$$8$$) {
      case "required":
        $coerced$$ = $domValue$$ ? "required" : "optional";
    }
    return $coerced$$;
  };
});
