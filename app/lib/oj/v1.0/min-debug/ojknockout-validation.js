/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define("ojs/ojcore jquery knockout jqueryui ojs/ojknockout ojs/ojmessaging".split(" "), function($oj$$8$$, $$$$8$$, $ko$$2$$) {
  $oj$$8$$.$InvalidComponentTracker$ = function $$oj$$8$$$$InvalidComponentTracker$$() {
    this.Init();
  };
  $goog$exportPath_$$("InvalidComponentTracker", $oj$$8$$.$InvalidComponentTracker$, $oj$$8$$);
  $oj$$8$$.$Object$.$createSubclass$($oj$$8$$.$InvalidComponentTracker$, $oj$$8$$.$Object$, "oj.InvalidComponentTracker");
  $oj$$8$$.$InvalidComponentTracker$.prototype.Init = function $$oj$$8$$$$InvalidComponentTracker$$$Init$() {
    var $self$$37$$ = this;
    $oj$$8$$.$InvalidComponentTracker$.$superclass$.Init.call(this);
    this.$_tracked$ = $ko$$2$$.observableArray([]);
    this.$_invalid$ = $ko$$2$$.observableArray([]);
    this.$_invalidDeferred$ = $ko$$2$$.observableArray([]);
    this.invalid = $ko$$2$$.computed(function() {
      return 0 <= $self$$37$$.$_invalid$().indexOf(!0);
    });
    this.invalidDeferred = $ko$$2$$.computed(function() {
      return 0 <= $self$$37$$.$_invalidDeferred$().indexOf(!0);
    });
  };
  $oj$$8$$.$InvalidComponentTracker$.prototype.$focusOnFirstInvalid$ = function $$oj$$8$$$$InvalidComponentTracker$$$$focusOnFirstInvalid$$() {
    var $firstInvalid$$ = null, $self$$38$$ = this, $updateCounter$$ = this.$_updateCounter$;
    this.invalid() && ($firstInvalid$$ = this.$_getFirstInvalidElement$());
    setTimeout(function() {
      ($firstInvalid$$ = $updateCounter$$ === $self$$38$$.$_updateCounter$ ? $firstInvalid$$ || $self$$38$$.$_getFirstInvalidElement$() : $self$$38$$.$_getFirstInvalidElement$()) && $firstInvalid$$.call($firstInvalid$$, "Focus");
    }, 1);
    return $firstInvalid$$ ? !0 : !1;
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("InvalidComponentTracker.prototype.focusOnFirstInvalid", {$focusOnFirstInvalid$:$oj$$8$$.$InvalidComponentTracker$.prototype.$focusOnFirstInvalid$});
  $oj$$8$$.$InvalidComponentTracker$.prototype.showMessages = function $$oj$$8$$$$InvalidComponentTracker$$$showMessages$() {
    var $deferredInvalids$$, $tracked$$, $tr$$;
    if (this.invalidDeferred()) {
      $tracked$$ = $ko$$2$$.utils.unwrapObservable(this.$_tracked$);
      $deferredInvalids$$ = $ko$$2$$.utils.unwrapObservable(this.$_invalidDeferred$);
      for (var $index$$92$$ in $deferredInvalids$$) {
        $deferredInvalids$$[$index$$92$$] && ($tr$$ = $tracked$$[$index$$92$$].call($tr$$, "showMessages"));
      }
    }
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("InvalidComponentTracker.prototype.showMessages", {showMessages:$oj$$8$$.$InvalidComponentTracker$.prototype.showMessages});
  $oj$$8$$.$InvalidComponentTracker$.prototype.$showMessagesAndFocusOnFirstInvalid$ = function $$oj$$8$$$$InvalidComponentTracker$$$$showMessagesAndFocusOnFirstInvalid$$() {
    this.showMessages();
    return this.invalid() ? this.$focusOnFirstInvalid$() : !1;
  };
  $oj$$8$$.$Object$.$exportPrototypeSymbol$("InvalidComponentTracker.prototype.showMessagesAndFocusOnFirstInvalid", {$showMessagesAndFocusOnFirstInvalid$:$oj$$8$$.$InvalidComponentTracker$.prototype.$showMessagesAndFocusOnFirstInvalid$});
  $oj$$8$$.$InvalidComponentTracker$.prototype.$_getFirstInvalidElement$ = function $$oj$$8$$$$InvalidComponentTracker$$$$_getFirstInvalidElement$$() {
    for (var $firstInvalid$$1$$, $idx$$7$$ = 0, $invalids$$ = $ko$$2$$.utils.unwrapObservable(this.$_invalid$), $tracked$$1$$ = $ko$$2$$.utils.unwrapObservable(this.$_tracked$), $idx$$7$$ = 0;$idx$$7$$ < $invalids$$.length;$idx$$7$$++) {
      if ($firstInvalid$$1$$ = $invalids$$[$idx$$7$$]) {
        return $tracked$$1$$[$idx$$7$$];
      }
    }
    return null;
  };
  $oj$$8$$.$InvalidComponentTracker$.prototype.$_update$ = function $$oj$$8$$$$InvalidComponentTracker$$$$_update$$($component$$9$$) {
    var $arr$$21_tracked$$2$$ = $ko$$2$$.utils.unwrapObservable(this.$_tracked$), $invalid$$1$$ = $ko$$2$$.utils.unwrapObservable(this.$_invalid$), $invalidDeferred$$ = $ko$$2$$.utils.unwrapObservable(this.$_invalidDeferred$), $compValid$$ = $component$$9$$.call($component$$9$$, "isValid"), $newMessages$$ = $component$$9$$.call($component$$9$$, "getMessages"), $trackedIndex$$ = -1;
    $oj$$8$$.$Assert$.$assertArray$($arr$$21_tracked$$2$$);
    $$$$8$$.each($arr$$21_tracked$$2$$, function($index$$93$$, $item$$5$$) {
      0 > $trackedIndex$$ && $item$$5$$ === $component$$9$$ && ($trackedIndex$$ = $index$$93$$);
    });
    $newMessages$$ && (0 > $trackedIndex$$ ? ($trackedIndex$$ = $arr$$21_tracked$$2$$.push($component$$9$$) - 1, $invalid$$1$$.push(!1), $invalidDeferred$$.push(!1)) : ($invalid$$1$$.splice($trackedIndex$$, 1, !1), $invalidDeferred$$.splice($trackedIndex$$, 1, !1)), $compValid$$ ? 0 <= $trackedIndex$$ && ($invalid$$1$$.splice($trackedIndex$$, 1, !1), $invalidDeferred$$.splice($trackedIndex$$, 1, !1)) : ($arr$$21_tracked$$2$$ = $oj$$8$$.$InvalidComponentTracker$.$_hasInvalidMessages$($newMessages$$) ? 
    $invalid$$1$$ : $oj$$8$$.$InvalidComponentTracker$.$_hasInvalidDeferredMessages$($newMessages$$) ? $invalidDeferred$$ : null) && (0 <= $trackedIndex$$ ? $arr$$21_tracked$$2$$.splice($trackedIndex$$, 1, !0) : $arr$$21_tracked$$2$$.push(!0)), this.$_invalid$($invalid$$1$$), this.$_invalidDeferred$($invalidDeferred$$), void 0 === this.$_updateCounter$ && (this.$_updateCounter$ = 0), this.$_updateCounter$++);
  };
  $oj$$8$$.$InvalidComponentTracker$.$_hasInvalidMessages$ = function $$oj$$8$$$$InvalidComponentTracker$$$_hasInvalidMessages$$($immediateDisplayMsgs_messages$$11$$) {
    $immediateDisplayMsgs_messages$$11$$ = $oj$$8$$.$InvalidComponentTracker$.$_getImmediateMessages$($immediateDisplayMsgs_messages$$11$$) || [];
    return $oj$$8$$.$Message$.$getMaxSeverity$($immediateDisplayMsgs_messages$$11$$) >= $oj$$8$$.$Message$.$SEVERITY_LEVEL$.ERROR ? !0 : !1;
  };
  $oj$$8$$.$InvalidComponentTracker$.$_hasInvalidDeferredMessages$ = function $$oj$$8$$$$InvalidComponentTracker$$$_hasInvalidDeferredMessages$$($deferredDisplayMsgs_messages$$12$$) {
    $deferredDisplayMsgs_messages$$12$$ = $oj$$8$$.$InvalidComponentTracker$.$_getDeferredMessages$($deferredDisplayMsgs_messages$$12$$) || [];
    return $oj$$8$$.$Message$.$getMaxSeverity$($deferredDisplayMsgs_messages$$12$$) >= $oj$$8$$.$Message$.$SEVERITY_LEVEL$.ERROR ? !0 : !1;
  };
  $oj$$8$$.$InvalidComponentTracker$.$_getImmediateMessages$ = function $$oj$$8$$$$InvalidComponentTracker$$$_getImmediateMessages$$($messages$$13$$) {
    var $immediateMsgs$$1$$ = [], $msg$$16$$, $index$$94$$;
    for ($index$$94$$ in $messages$$13$$) {
      $msg$$16$$ = $messages$$13$$[$index$$94$$], $msg$$16$$ instanceof $oj$$8$$.$ComponentMessage$ && !$msg$$16$$.$canDisplay$() || $immediateMsgs$$1$$.push($msg$$16$$);
    }
    return $immediateMsgs$$1$$;
  };
  $oj$$8$$.$InvalidComponentTracker$.$_getDeferredMessages$ = function $$oj$$8$$$$InvalidComponentTracker$$$_getDeferredMessages$$($messages$$14$$) {
    var $deferredMsgs$$ = [], $msg$$17$$, $index$$95$$;
    for ($index$$95$$ in $messages$$14$$) {
      $msg$$17$$ = $messages$$14$$[$index$$95$$], $msg$$17$$ instanceof $oj$$8$$.$ComponentMessage$ && !$msg$$17$$.$canDisplay$() && $deferredMsgs$$.push($msg$$17$$);
    }
    return $deferredMsgs$$;
  };
  $oj$$8$$.$ValueBinding$ = function $$oj$$8$$$$ValueBinding$$() {
  };
  $goog$exportPath_$$("ValueBinding", $oj$$8$$.$ValueBinding$, $oj$$8$$);
  $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$ = "invalidComponentTracker";
  $goog$exportPath_$$("ValueBinding._ATTRIBUTE_INVALID_COMPONENT_TRACKER", $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$, $oj$$8$$);
  $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_MESSAGES_COMPONENT$ = "messagesComponent";
  $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_MESSAGES_CUSTOM$ = "messagesCustom";
  $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_OPTIONCHANGE$ = "optionChange";
  $oj$$8$$.$ValueBinding$._init = function $$oj$$8$$$$ValueBinding$$_init$($property$$18$$, $initProps$$1_value$$151$$, $element$$34_optionChangeFunc$$, $component$$10$$, $options$$187_valueAccessor$$9$$) {
    $initProps$$1_value$$151$$ = {};
    $options$$187_valueAccessor$$9$$ = $options$$187_valueAccessor$$9$$.call();
    $element$$34_optionChangeFunc$$ = $oj$$8$$.$ComponentBinding$.$_toJS$($options$$187_valueAccessor$$9$$[$oj$$8$$.$ValueBinding$.$_ATTRIBUTE_OPTIONCHANGE$]);
    $property$$18$$ === $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$ ? $element$$34_optionChangeFunc$$ || $oj$$8$$.$ValueBinding$.$_registerInvalidComponentTrackerWriteback$($options$$187_valueAccessor$$9$$, $initProps$$1_value$$151$$, $component$$10$$) : $property$$18$$ === $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_OPTIONCHANGE$ && $oj$$8$$.$ValueBinding$.$_registerInvalidComponentTrackerWriteback$($options$$187_valueAccessor$$9$$, $initProps$$1_value$$151$$, $component$$10$$);
    return $initProps$$1_value$$151$$;
  };
  $oj$$8$$.$ValueBinding$.$_registerInvalidComponentTrackerWriteback$ = function $$oj$$8$$$$ValueBinding$$$_registerInvalidComponentTrackerWriteback$$($options$$188$$, $initProps$$2$$, $component$$11$$) {
    var $optionChangeProp$$1$$ = $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_OPTIONCHANGE$, $optionChangeObs$$1$$ = $options$$188$$[$optionChangeProp$$1$$], $oldOptionChangeFunc$$, $ictObs$$ = $options$$188$$[$oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$], $icTracker$$ = $ko$$2$$.utils.unwrapObservable($ictObs$$);
    $oldOptionChangeFunc$$ = $oj$$8$$.$ComponentBinding$.$_toJS$($optionChangeObs$$1$$);
    $ko$$2$$.isObservable($ictObs$$) && null == $icTracker$$ && ($icTracker$$ = new $oj$$8$$.$InvalidComponentTracker$, $ictObs$$($icTracker$$));
    null !== $icTracker$$ && (!$oldOptionChangeFunc$$ || $oldOptionChangeFunc$$ instanceof Function) && ($initProps$$2$$[$optionChangeProp$$1$$] = function $$initProps$$2$$$$optionChangeProp$$1$$$($event$$40$$, $data$$49$$) {
      $oldOptionChangeFunc$$ && $oldOptionChangeFunc$$.call(this, $event$$40$$, $data$$49$$);
      ($data$$49$$.option === $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_MESSAGES_COMPONENT$ || $data$$49$$.option === $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_MESSAGES_CUSTOM$) && $ko$$2$$.isWriteableObservable($ictObs$$) && $icTracker$$.$_update$.call($icTracker$$, $component$$11$$);
    });
  };
  $oj$$8$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojValue", attributes:[$oj$$8$$.$ValueBinding$.$_ATTRIBUTE_INVALID_COMPONENT_TRACKER$, $oj$$8$$.$ValueBinding$.$_ATTRIBUTE_OPTIONCHANGE$], init:$oj$$8$$.$ValueBinding$._init});
  $oj$$8$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputText", use:"ojValue"});
  $oj$$8$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputNumber", use:"ojValue"});
  $oj$$8$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojRadioCheckbox", use:"ojValue"});
  $oj$$8$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojRadioset", use:"ojValue"});
  $oj$$8$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojCheckboxset", use:"ojValue"});
  $oj$$8$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputDateTime", use:"ojValue"});
  $oj$$8$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputDate", use:"ojValue"});
  $oj$$8$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputTime", use:"ojValue"});
  $oj$$8$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojInputPassword", use:"ojValue"});
  $oj$$8$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojTextArea", use:"ojValue"});
  $oj$$8$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojCombobox", use:"ojValue"});
  $oj$$8$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({"for":"ojSelect", use:"ojValue"});
});
