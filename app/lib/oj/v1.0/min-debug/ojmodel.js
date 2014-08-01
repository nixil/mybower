/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery"], function($oj$$1$$, $$$$1$$) {
  $oj$$1$$.$Events$ = window.oj.Events = {on:function $window$oj$Events$on$($eventType$$8$$, $callback$$57$$, $context$$5$$) {
    return this.$OnInternal$($eventType$$8$$, $callback$$57$$, $context$$5$$, !1, !1);
  }, off:function $window$oj$Events$off$($eventType$$9$$, $callback$$58$$, $context$$6$$) {
    return this.$_offInternal$($eventType$$9$$, $callback$$58$$, $context$$6$$, !1);
  }, trigger:function $window$oj$Events$trigger$($eventType$$10$$) {
    var $args$$8$$ = Array.prototype.slice.call(arguments);
    $args$$8$$.unshift(!1);
    return $oj$$1$$.$Events$.$TriggerInternal$.apply(this, $args$$8$$);
  }, once:function $window$oj$Events$once$($eventType$$11$$, $callback$$59$$, $context$$7$$) {
    return this.$_onceInternal$($eventType$$11$$, $callback$$59$$, $context$$7$$, !1);
  }, listenTo:function $window$oj$Events$listenTo$($otherObj$$, $eventArray_eventType$$12$$, $callback$$60_e$$15$$) {
    var $event$$2_eventString$$, $attr$$, $listenerObj$$, $prop$$9$$, $eventMap$$ = {};
    $eventArray_eventType$$12$$.constructor === String ? $eventMap$$[$eventArray_eventType$$12$$] = $callback$$60_e$$15$$ : $eventMap$$ = $eventArray_eventType$$12$$;
    for ($prop$$9$$ in $eventMap$$) {
      if ($eventMap$$.hasOwnProperty($prop$$9$$)) {
        for ($eventArray_eventType$$12$$ = $oj$$1$$.$Events$.$_getEvents$($prop$$9$$), $callback$$60_e$$15$$ = 0;$callback$$60_e$$15$$ < $eventArray_eventType$$12$$.length;$callback$$60_e$$15$$ += 1) {
          $event$$2_eventString$$ = $eventArray_eventType$$12$$[$callback$$60_e$$15$$].event, $attr$$ = $eventArray_eventType$$12$$[$callback$$60_e$$15$$].$attribute$, $listenerObj$$ = {event:$event$$2_eventString$$, $attribute$:$attr$$, object:$otherObj$$, $callback$:$eventMap$$[$prop$$9$$]}, this.$_checkForHandler$(this.$listeningList$, $listenerObj$$, $oj$$1$$.$Events$.$_listenersIdentical$), $event$$2_eventString$$ = $attr$$ ? $event$$2_eventString$$ + ":" + $attr$$ : $event$$2_eventString$$, 
          void 0 === this.$listeningList$ && (this.$listeningList$ = []), this.$listeningList$.push($listenerObj$$), $otherObj$$.$OnInternal$($event$$2_eventString$$, $eventMap$$[$prop$$9$$], null, !0, !1);
        }
      }
    }
    return this;
  }, listenToOnce:function $window$oj$Events$listenToOnce$($otherObj$$1$$, $eventArray$$1_eventType$$13$$, $callback$$61_e$$16$$) {
    var $event$$3_eventString$$1$$, $attr$$1$$, $listenerObj$$1$$, $prop$$10$$, $eventMap$$1$$ = {};
    $eventArray$$1_eventType$$13$$.constructor === String ? $eventMap$$1$$[$eventArray$$1_eventType$$13$$] = $callback$$61_e$$16$$ : $eventMap$$1$$ = $eventArray$$1_eventType$$13$$;
    for ($prop$$10$$ in $eventMap$$1$$) {
      if ($eventMap$$1$$.hasOwnProperty($prop$$10$$)) {
        for ($eventArray$$1_eventType$$13$$ = $oj$$1$$.$Events$.$_getEvents$($prop$$10$$), $callback$$61_e$$16$$ = 0;$callback$$61_e$$16$$ < $eventArray$$1_eventType$$13$$.length;$callback$$61_e$$16$$ += 1) {
          $event$$3_eventString$$1$$ = $eventArray$$1_eventType$$13$$[$callback$$61_e$$16$$].event, $attr$$1$$ = $eventArray$$1_eventType$$13$$[$callback$$61_e$$16$$].$attribute$, $listenerObj$$1$$ = {event:$event$$3_eventString$$1$$, $attribute$:$attr$$1$$, object:$otherObj$$1$$, $callback$:$eventMap$$1$$[$prop$$10$$]}, this.$_checkForHandler$(this.$listeningList$, $listenerObj$$1$$, $oj$$1$$.$Events$.$_listenersIdentical$), $event$$3_eventString$$1$$ = $attr$$1$$ ? $event$$3_eventString$$1$$ + 
          ":" + $attr$$1$$ : $event$$3_eventString$$1$$, void 0 === this.$listeningList$ && (this.$listeningList$ = []), this.$listeningList$.push($listenerObj$$1$$), $otherObj$$1$$.$_onceInternal$($event$$3_eventString$$1$$, $eventMap$$1$$[$prop$$10$$], null, !0);
        }
      }
    }
    return this;
  }, stopListening:function $window$oj$Events$stopListening$($otherObj$$2$$, $eventType$$14$$, $callback$$62$$) {
    var $actualType_eventArray$$2$$, $eventMap$$2$$ = {}, $e$$17$$, $oneEvent$$, $oneAttr$$, $attrEqual_event$$4$$, $len_objEqual$$, $cb_eventEqual$$, $callbackEqual$$, $i$$11$$, $prop$$11$$;
    if (null == arguments || 0 == arguments.length) {
      $len_objEqual$$ = this.$listeningList$ ? this.$listeningList$.length : 0;
      for ($i$$11$$ = 0;$i$$11$$ < $len_objEqual$$;$i$$11$$++) {
        $cb_eventEqual$$ = this.$listeningList$[$i$$11$$].object.$_offInternal$, $cb_eventEqual$$.apply(this.$listeningList$[$i$$11$$].object, [this.$listeningList$[$i$$11$$].event, this.$listeningList$[$i$$11$$].$callback$, this.$listeningList$[$i$$11$$].context, !0]);
      }
      this.$listeningList$ = [];
      return this;
    }
    $actualType_eventArray$$2$$ = $eventType$$14$$;
    $otherObj$$2$$ && $otherObj$$2$$.constructor === String && ($actualType_eventArray$$2$$ = $otherObj$$2$$);
    $actualType_eventArray$$2$$.constructor === String ? $eventMap$$2$$[$actualType_eventArray$$2$$] = $callback$$62$$ : $eventMap$$2$$ = $actualType_eventArray$$2$$;
    for ($prop$$11$$ in $eventMap$$2$$) {
      if ($eventMap$$2$$.hasOwnProperty($prop$$11$$)) {
        for ($actualType_eventArray$$2$$ = $oj$$1$$.$Events$.$_getEvents$($prop$$11$$), $e$$17$$ = 0;$e$$17$$ < $actualType_eventArray$$2$$.length;$e$$17$$ += 1) {
          for ($oneEvent$$ = $actualType_eventArray$$2$$[$e$$17$$].event, $oneAttr$$ = $actualType_eventArray$$2$$[$e$$17$$].$attribute$, $len_objEqual$$ = this.$listeningList$ ? this.$listeningList$.length : 0, $i$$11$$ = $len_objEqual$$ - 1;0 <= $i$$11$$;$i$$11$$ -= 1) {
            $attrEqual_event$$4$$ = this.$listeningList$[$i$$11$$], $len_objEqual$$ = $otherObj$$2$$ ? $otherObj$$2$$ === $attrEqual_event$$4$$.object : !0, $cb_eventEqual$$ = $oneEvent$$ ? $oneEvent$$ === $attrEqual_event$$4$$.event : !0, $callbackEqual$$ = $callback$$62$$ ? $eventMap$$2$$[$prop$$11$$] === $attrEqual_event$$4$$.$callback$ : !0, $attrEqual_event$$4$$ = $oneAttr$$ ? $oneAttr$$ === $attrEqual_event$$4$$.$attribute$ : !0, $len_objEqual$$ && $cb_eventEqual$$ && $callbackEqual$$ && $attrEqual_event$$4$$ && 
            ($cb_eventEqual$$ = this.$listeningList$[$i$$11$$].object.$_offInternal$, $cb_eventEqual$$.apply(this.$listeningList$[$i$$11$$].object, [this.$listeningList$[$i$$11$$].event, this.$listeningList$[$i$$11$$].$callback$, this.$listeningList$[$i$$11$$].context, !0]), this.$listeningList$.splice($i$$11$$, 1));
          }
        }
      }
    }
    return this;
  }};
  $oj$$1$$.$Events$.bind = $oj$$1$$.$Events$.on;
  $oj$$1$$.$Events$.unbind = $oj$$1$$.$Events$.off;
  $oj$$1$$.$Events$.$EventType$ = {ADD:"add", REMOVE:"remove", RESET:"reset", REFRESH:"refresh", SORT:"sort", CHANGE:"change", DESTROY:"destroy", REQUEST:"request", SYNC:"sync", ERROR:"error", INVALID:"invalid", ALL:"all"};
  $goog$exportPath_$$("Events.EventType", $oj$$1$$.$Events$.$EventType$, $oj$$1$$);
  $oj$$1$$.$Events$.$Mixin$ = function $$oj$$1$$$$Events$$$Mixin$$($myClass$$, $source$$6$$) {
    var $methodName$$1$$, $obj$$47$$ = $source$$6$$ || this;
    for ($methodName$$1$$ in $obj$$47$$) {
      "function" === typeof $obj$$47$$[$methodName$$1$$] && ($myClass$$[$methodName$$1$$] = $obj$$47$$[$methodName$$1$$]);
    }
    $myClass$$.$eventHandlers$ = {};
    $myClass$$.$listeningList$ = [];
  };
  $oj$$1$$.$Events$.$_onceInternal$ = function $$oj$$1$$$$Events$$$_onceInternal$$($eventArray$$3_eventType$$15$$, $callback$$63_e$$18$$, $context$$8$$, $listenTo$$) {
    var $event$$5$$, $attr$$2$$, $eventMap$$3$$, $prop$$12$$;
    $eventMap$$3$$ = this.$_getEventMap$($eventArray$$3_eventType$$15$$, $callback$$63_e$$18$$);
    for ($prop$$12$$ in $eventMap$$3$$) {
      if ($eventMap$$3$$.hasOwnProperty($prop$$12$$)) {
        for ($eventArray$$3_eventType$$15$$ = this.$_getEvents$($prop$$12$$), $callback$$63_e$$18$$ = 0;$callback$$63_e$$18$$ < $eventArray$$3_eventType$$15$$.length;$callback$$63_e$$18$$ += 1) {
          $event$$5$$ = $eventArray$$3_eventType$$15$$[$callback$$63_e$$18$$].event, $attr$$2$$ = $eventArray$$3_eventType$$15$$[$callback$$63_e$$18$$].$attribute$, void 0 === this.$eventHandlers$ && (this.$eventHandlers$ = []), void 0 === this.$eventHandlers$[$event$$5$$] && (this.$eventHandlers$[$event$$5$$] = []), this.$eventHandlers$[$event$$5$$].push({$callback$:$eventMap$$3$$[$prop$$12$$], context:$context$$8$$, $attribute$:$attr$$2$$, $once$:!0, fired:!1, $listen$:$listenTo$$});
        }
      }
    }
    return this;
  };
  $oj$$1$$.$Events$.$_shouldFire$ = function $$oj$$1$$$$Events$$$_shouldFire$$($handler$$42$$) {
    return $handler$$42$$.$once$ ? $handler$$42$$.fired ? !1 : $handler$$42$$.fired = !0 : !0;
  };
  $oj$$1$$.$Events$.$TriggerInternal$ = function $$oj$$1$$$$Events$$$TriggerInternal$$($silent$$, $eventType$$16$$) {
    var $eventArray$$4_handlers$$1$$ = this.$_getEvents$($eventType$$16$$), $e$$19$$, $event$$6_i$$12$$, $args$$9_attr$$3$$, $eventsToFire$$, $allHandlers$$, $callback$$64$$;
    $eventsToFire$$ = [];
    for ($e$$19$$ = 0;$e$$19$$ < $eventArray$$4_handlers$$1$$.length;$e$$19$$ += 1) {
      $event$$6_i$$12$$ = $eventArray$$4_handlers$$1$$[$e$$19$$].event, $args$$9_attr$$3$$ = $eventArray$$4_handlers$$1$$[$e$$19$$].$attribute$, $eventsToFire$$.push({event:$event$$6_i$$12$$, $attribute$:$args$$9_attr$$3$$});
    }
    for ($e$$19$$ = 0;$e$$19$$ < $eventsToFire$$.length;$e$$19$$ += 1) {
      $allHandlers$$ = this.$_getHandlers$(this.$eventHandlers$, $oj$$1$$.$Events$.$EventType$.ALL);
      $eventArray$$4_handlers$$1$$ = $oj$$1$$.$Events$.$_getHandlers$(this.$eventHandlers$, $eventsToFire$$[$e$$19$$].event, !1);
      for ($event$$6_i$$12$$ = 0;$event$$6_i$$12$$ < ($eventArray$$4_handlers$$1$$ ? $eventArray$$4_handlers$$1$$.length : 0);$event$$6_i$$12$$ += 1) {
        $eventArray$$4_handlers$$1$$[$event$$6_i$$12$$].$attribute$ === $eventsToFire$$[$e$$19$$].$attribute$ && $eventArray$$4_handlers$$1$$[$event$$6_i$$12$$].$callback$ && ($args$$9_attr$$3$$ = Array.prototype.slice.call(arguments), $eventArray$$4_handlers$$1$$ && $eventArray$$4_handlers$$1$$[$event$$6_i$$12$$] && $eventArray$$4_handlers$$1$$[$event$$6_i$$12$$].$once$ && this.$_removeHandler$($oj$$1$$.$Events$.$_getHandlers$(this.$eventHandlers$, $eventsToFire$$[$e$$19$$].event, !0), $eventArray$$4_handlers$$1$$[$event$$6_i$$12$$]), 
        $eventArray$$4_handlers$$1$$ && $eventArray$$4_handlers$$1$$[$event$$6_i$$12$$] && this.$_shouldFire$($eventArray$$4_handlers$$1$$[$event$$6_i$$12$$]) && ($callback$$64$$ = $eventArray$$4_handlers$$1$$[$event$$6_i$$12$$].$callback$, $silent$$ && !$eventArray$$4_handlers$$1$$[$event$$6_i$$12$$].$ignoreSilent$ || $callback$$64$$.apply($eventArray$$4_handlers$$1$$[$event$$6_i$$12$$].context || this, $args$$9_attr$$3$$.slice(2))));
      }
      for ($event$$6_i$$12$$ = 0;$event$$6_i$$12$$ < ($allHandlers$$ ? $allHandlers$$.length : 0);$event$$6_i$$12$$ += 1) {
        $args$$9_attr$$3$$ = Array.prototype.slice.call(arguments), 0 < $args$$9_attr$$3$$.length && ($args$$9_attr$$3$$[1] = $eventsToFire$$[$e$$19$$].$attribute$ ? $eventsToFire$$[$e$$19$$].event + ":" + $eventsToFire$$[$e$$19$$].$attribute$ : $eventsToFire$$[$e$$19$$].event), $allHandlers$$ && $allHandlers$$[$event$$6_i$$12$$] && $allHandlers$$[$event$$6_i$$12$$].$callback$ && this.$_shouldFire$($allHandlers$$[$event$$6_i$$12$$]) && ($callback$$64$$ = $allHandlers$$[$event$$6_i$$12$$].$callback$, 
        $silent$$ && !$allHandlers$$[$event$$6_i$$12$$].$ignoreSilent$ || $callback$$64$$.apply($allHandlers$$[$event$$6_i$$12$$].context || this, $args$$9_attr$$3$$.slice(1))), $allHandlers$$ && $allHandlers$$[$event$$6_i$$12$$] && $allHandlers$$[$event$$6_i$$12$$].$once$ && this.$_removeHandler$(this.$_getHandlers$(this.$eventHandlers$, $oj$$1$$.$Events$.$EventType$.ALL, !0), $allHandlers$$[$event$$6_i$$12$$]);
      }
    }
    return this;
  };
  $oj$$1$$.$Events$.$OnInternal$ = function $$oj$$1$$$$Events$$$OnInternal$$($eventMap$$4_eventType$$17$$, $callback$$65_eventArray$$5$$, $context$$9$$, $listenTo$$1$$, $ignoreSilent$$) {
    var $prop$$13$$, $i$$13$$, $event$$7$$, $attr$$4_eventObj$$;
    $eventMap$$4_eventType$$17$$ = this.$_getEventMap$($eventMap$$4_eventType$$17$$, $callback$$65_eventArray$$5$$);
    for ($prop$$13$$ in $eventMap$$4_eventType$$17$$) {
      if ($eventMap$$4_eventType$$17$$.hasOwnProperty($prop$$13$$)) {
        for ($callback$$65_eventArray$$5$$ = this.$_getEvents$($prop$$13$$), $i$$13$$ = 0;$i$$13$$ < $callback$$65_eventArray$$5$$.length;$i$$13$$ += 1) {
          $event$$7$$ = $callback$$65_eventArray$$5$$[$i$$13$$].event, $attr$$4_eventObj$$ = $callback$$65_eventArray$$5$$[$i$$13$$].$attribute$, void 0 === this.$eventHandlers$ && (this.$eventHandlers$ = []), void 0 === this.$eventHandlers$[$event$$7$$] && (this.$eventHandlers$[$event$$7$$] = []), $attr$$4_eventObj$$ = {$callback$:$eventMap$$4_eventType$$17$$[$prop$$13$$], context:$context$$9$$, $attribute$:$attr$$4_eventObj$$, $listen$:$listenTo$$1$$, $ignoreSilent$:$ignoreSilent$$}, -1 === this.$_checkForHandler$(this.$eventHandlers$[$event$$7$$], 
          $attr$$4_eventObj$$, $oj$$1$$.$Events$.$_handlersIdentical$) && this.$eventHandlers$[$event$$7$$].push($attr$$4_eventObj$$);
        }
      }
    }
    return this;
  };
  $oj$$1$$.$Events$.$_offInternal$ = function $$oj$$1$$$$Events$$$_offInternal$$($eventType$$18$$, $callback$$66$$, $context$$10$$, $listen$$) {
    var $eventMap$$5$$, $prop$$14$$;
    if (null == arguments || 0 == arguments.length) {
      return this.$eventHandlers$ = {}, this;
    }
    if (null == $eventType$$18$$) {
      return this.$_removeEvent$($eventType$$18$$, $callback$$66$$, $context$$10$$, $listen$$), this;
    }
    $eventMap$$5$$ = this.$_getEventMap$($eventType$$18$$, $callback$$66$$);
    for ($prop$$14$$ in $eventMap$$5$$) {
      $eventMap$$5$$.hasOwnProperty($prop$$14$$) && this.$_removeEvent$($prop$$14$$, $eventMap$$5$$[$prop$$14$$], $context$$10$$, $listen$$);
    }
    return this;
  };
  $oj$$1$$.$Events$.$_getEventMap$ = function $$oj$$1$$$$Events$$$_getEventMap$$($eventType$$19$$, $callback$$67$$) {
    var $eventMap$$6$$ = {};
    $eventType$$19$$.constructor === String ? $eventMap$$6$$[$eventType$$19$$] = $callback$$67$$ : $eventMap$$6$$ = $eventType$$19$$;
    return $eventMap$$6$$;
  };
  $oj$$1$$.$Events$.$_removeEvent$ = function $$oj$$1$$$$Events$$$_removeEvent$$($e$$20_eventType$$20$$, $callback$$68$$, $context$$12$$, $listen$$1$$) {
    var $eventArray$$6$$ = [], $i$$14$$, $event$$8$$, $attr$$5$$, $handlers$$2$$, $callbacks$$2$$, $contexts$$, $attrs$$, $listenEq$$;
    if ($e$$20_eventType$$20$$) {
      $eventArray$$6$$ = $oj$$1$$.$Events$.$_getEvents$($e$$20_eventType$$20$$);
    } else {
      if (void 0 !== this.$eventHandlers$) {
        for ($event$$8$$ in this.$eventHandlers$) {
          this.$eventHandlers$.hasOwnProperty($event$$8$$) && $eventArray$$6$$.push({event:$event$$8$$});
        }
      }
    }
    for ($e$$20_eventType$$20$$ = 0;$e$$20_eventType$$20$$ < $eventArray$$6$$.length;$e$$20_eventType$$20$$ += 1) {
      if ($event$$8$$ = $eventArray$$6$$[$e$$20_eventType$$20$$].event, $attr$$5$$ = $eventArray$$6$$[$e$$20_eventType$$20$$].$attribute$, void 0 !== this.$eventHandlers$ && this.$eventHandlers$[$event$$8$$] instanceof Array) {
        $handlers$$2$$ = this.$eventHandlers$[$event$$8$$];
        for ($i$$14$$ = $handlers$$2$$.length - 1;0 <= $i$$14$$;$i$$14$$ -= 1) {
          $callbacks$$2$$ = void 0 === $callback$$68$$ || null === $callback$$68$$ || $handlers$$2$$[$i$$14$$].$callback$ == $callback$$68$$, $contexts$$ = void 0 === $context$$12$$ || null === $context$$12$$ || $handlers$$2$$[$i$$14$$].context == $context$$12$$, $attrs$$ = void 0 === $attr$$5$$ || null === $attr$$5$$ || $handlers$$2$$[$i$$14$$].$attribute$ == $attr$$5$$, $listenEq$$ = void 0 === $listen$$1$$ || null === $listen$$1$$ || $handlers$$2$$[$i$$14$$].$listen$ == $listen$$1$$, $callbacks$$2$$ && 
          $contexts$$ && $attrs$$ && $listenEq$$ && $handlers$$2$$.splice($i$$14$$, 1);
        }
        0 === $handlers$$2$$.length && delete this.$eventHandlers$[$event$$8$$];
      }
    }
  };
  $oj$$1$$.$Events$.$_removeHandler$ = function $$oj$$1$$$$Events$$$_removeHandler$$($handlers$$3$$, $handler$$43$$) {
    var $i$$15$$, $callbacks$$3$$, $contexts$$1$$, $attrs$$1$$, $listenEq$$1$$, $onceEq$$;
    for ($i$$15$$ = $handlers$$3$$.length - 1;0 <= $i$$15$$;$i$$15$$ -= 1) {
      $callbacks$$3$$ = void 0 === $handler$$43$$.$callback$ || null === $handler$$43$$.$callback$ || $handlers$$3$$[$i$$15$$].$callback$ == $handler$$43$$.$callback$, $contexts$$1$$ = void 0 === $handler$$43$$.context || null === $handler$$43$$.context || $handlers$$3$$[$i$$15$$].context == $handler$$43$$.context, $attrs$$1$$ = void 0 === $handler$$43$$.$attribute$ || null === $handler$$43$$.$attribute$ || $handlers$$3$$[$i$$15$$].$attribute$ == $handler$$43$$.$attribute$, $listenEq$$1$$ = void 0 === 
      $handler$$43$$.$listen$ || null === $handler$$43$$.$listen$ || $handlers$$3$$[$i$$15$$].$listen$ == $handler$$43$$.$listen$, $onceEq$$ = void 0 === $handler$$43$$.$once$ || null === $handler$$43$$.$once$ || $handlers$$3$$[$i$$15$$].$once$ == $handler$$43$$.$once$, $callbacks$$3$$ && $contexts$$1$$ && $attrs$$1$$ && $listenEq$$1$$ && $onceEq$$ && $handlers$$3$$.splice($i$$15$$, 1);
    }
  };
  $oj$$1$$.$Events$.$_getEvents$ = function $$oj$$1$$$$Events$$$_getEvents$$($eventList_eventString$$2$$) {
    $eventList_eventString$$2$$ = $eventList_eventString$$2$$ ? $eventList_eventString$$2$$.split(" ") : [];
    var $retList$$ = [], $i$$16$$, $attr$$6_eventWithAttr$$, $name$$61$$;
    for ($i$$16$$ = 0;$i$$16$$ < $eventList_eventString$$2$$.length;$i$$16$$ += 1) {
      $attr$$6_eventWithAttr$$ = $eventList_eventString$$2$$[$i$$16$$].split(":"), $name$$61$$ = $attr$$6_eventWithAttr$$[0], $attr$$6_eventWithAttr$$ = 1 < $attr$$6_eventWithAttr$$.length ? $attr$$6_eventWithAttr$$[1] : null, $retList$$.push({event:$name$$61$$, $attribute$:$attr$$6_eventWithAttr$$});
    }
    return $retList$$;
  };
  $oj$$1$$.$Events$.$_handlersIdentical$ = function $$oj$$1$$$$Events$$$_handlersIdentical$$($handler1$$, $handler2$$) {
    return $handler1$$.$callback$ === $handler2$$.$callback$ && $handler1$$.$attribute$ === $handler2$$.$attribute$ && $handler1$$.context === $handler2$$.context && $handler1$$.$listen$ === $handler2$$.$listen$ && $handler1$$.$once$ === $handler2$$.$once$;
  };
  $oj$$1$$.$Events$.$_listenersIdentical$ = function $$oj$$1$$$$Events$$$_listenersIdentical$$($listener1$$, $listener2$$) {
    return $listener1$$.event === $listener2$$.event && $listener1$$.$attribute$ === $listener2$$.$attribute$ && $listener1$$.context === $listener2$$.context && $listener1$$.object === $listener2$$.object;
  };
  $oj$$1$$.$Events$.$_checkForHandler$ = function $$oj$$1$$$$Events$$$_checkForHandler$$($handlerList$$, $handler$$44$$, $handlerTest$$) {
    var $i$$17$$;
    if (void 0 === $handlerList$$) {
      return-1;
    }
    for ($i$$17$$ = 0;$i$$17$$ < $handlerList$$.length;$i$$17$$ += 1) {
      if ($handlerTest$$($handlerList$$[$i$$17$$], $handler$$44$$)) {
        return $i$$17$$;
      }
    }
    return-1;
  };
  $oj$$1$$.$Events$.$_getHandlers$ = function $$oj$$1$$$$Events$$$_getHandlers$$($handlers$$4$$, $eventType$$21$$, $handlerReturn_original$$1$$) {
    if ($handlers$$4$$ && $handlers$$4$$[$eventType$$21$$] instanceof Array) {
      if ($handlerReturn_original$$1$$) {
        return $handlers$$4$$[$eventType$$21$$];
      }
      $handlerReturn_original$$1$$ = [];
      var $i$$18$$;
      for ($i$$18$$ = 0;$i$$18$$ < $handlers$$4$$[$eventType$$21$$].length;$i$$18$$++) {
        $handlerReturn_original$$1$$.push($handlers$$4$$[$eventType$$21$$][$i$$18$$]);
      }
      return $handlerReturn_original$$1$$;
    }
    return null;
  };
  $oj$$1$$.$Model$ = function $$oj$$1$$$$Model$$($attributes$$, $options$$10$$) {
    $oj$$1$$.$Model$._init(this, $attributes$$, $options$$10$$, null);
  };
  $goog$exportPath_$$("Model", $oj$$1$$.$Model$, $oj$$1$$);
  $oj$$1$$.$Object$.$createSubclass$($oj$$1$$.$Model$, $oj$$1$$.$Object$, "Model.Model");
  $oj$$1$$.$Model$.prototype.Init = function $$oj$$1$$$$Model$$$Init$() {
    $oj$$1$$.$Model$.$superclass$.Init.call(this);
  };
  $oj$$1$$.$Model$.prototype.attributes = {};
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.attributes", {attributes:$oj$$1$$.$Model$.prototype.attributes});
  $oj$$1$$.$Model$.prototype.$defaults$ = {};
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.defaults", {$defaults$:$oj$$1$$.$Model$.prototype.$defaults$});
  $oj$$1$$.$Model$.prototype.id = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.id", {id:$oj$$1$$.$Model$.prototype.id});
  $oj$$1$$.$Model$.prototype.$idAttribute$ = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.idAttribute", {$idAttribute$:$oj$$1$$.$Model$.prototype.$idAttribute$});
  $oj$$1$$.$Model$.prototype.$urlRoot$ = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.urlRoot", {$urlRoot$:$oj$$1$$.$Model$.prototype.$urlRoot$});
  $oj$$1$$.$Model$.prototype.$customURL$ = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.customURL", {$customURL$:$oj$$1$$.$Model$.prototype.$customURL$});
  $oj$$1$$.$Model$.$_idCount$ = 0;
  $oj$$1$$.$Model$._init = function $$oj$$1$$$$Model$$_init$($model$$, $attributes$$1$$, $options$$11$$, $parse_properties$$3$$) {
    var $prop$$15$$ = null, $attrCopy$$;
    if (!$oj$$1$$.$Model$.$_justExtending$) {
      $model$$.Init();
      $oj$$1$$.$Events$.$Mixin$($model$$);
      $model$$.$_clearChanged$();
      $model$$.$previousAttrs$ = {};
      $model$$.$nestedSet$ = !1;
      $model$$.index = -1;
      $options$$11$$ = $options$$11$$ || {};
      $model$$.attributes = {};
      $model$$.defaults && ($model$$.attributes = $oj$$1$$.$Model$.$_cloneAttributes$($oj$$1$$.$Model$.$IsFunction$($model$$.defaults) ? $model$$.defaults() : $model$$.defaults, null));
      for ($prop$$15$$ in $parse_properties$$3$$) {
        $parse_properties$$3$$.hasOwnProperty($prop$$15$$) && ($model$$[$prop$$15$$] = $parse_properties$$3$$[$prop$$15$$]);
      }
      if ($attributes$$1$$) {
        if ($parse_properties$$3$$ = $options$$11$$.parse, $oj$$1$$.$Model$.$IsFunction$($parse_properties$$3$$) && ($model$$.parse = $parse_properties$$3$$), $attrCopy$$ = $oj$$1$$.$Model$.$_cloneAttributes$($attributes$$1$$, $model$$.attributes), $attrCopy$$ = $parse_properties$$3$$ ? $model$$.parse($attrCopy$$) : $attrCopy$$, null == $attrCopy$$ || void 0 === $attrCopy$$) {
          $model$$.attributes = {};
        } else {
          for ($prop$$15$$ in $attrCopy$$) {
            $attrCopy$$.hasOwnProperty($prop$$15$$) && $model$$.$_setProp$($prop$$15$$, $attrCopy$$[$prop$$15$$], !1, !1, $options$$11$$);
          }
        }
      }
      $model$$.$SetCid$();
      $model$$.$SetCollection$($options$$11$$.collection);
      $options$$11$$.customURL && ($model$$.customURL = $options$$11$$.customURL);
      $options$$11$$.url && ($model$$.url = $options$$11$$.url);
      $options$$11$$.urlRoot && ($model$$.urlRoot = $options$$11$$.urlRoot);
      $model$$.initialize && $model$$.initialize($attributes$$1$$, $options$$11$$);
      $model$$.$SetupId$();
    }
  };
  $oj$$1$$.$Model$.extend = function $$oj$$1$$$$Model$$extend$($properties$$4$$, $classProperties$$) {
    $oj$$1$$.$Model$.$_justExtending$ = !0;
    var $obj$$48$$, $prop$$16$$;
    $obj$$48$$ = new $oj$$1$$.$Model$;
    $oj$$1$$.$Model$.$_justExtending$ = !1;
    $oj$$1$$.$Events$.$Mixin$($obj$$48$$, this.prototype);
    $properties$$4$$ = $properties$$4$$ || {};
    for ($prop$$16$$ in $properties$$4$$) {
      $properties$$4$$.hasOwnProperty($prop$$16$$) && ($obj$$48$$[$prop$$16$$] = $properties$$4$$[$prop$$16$$]);
    }
    var $Model$$;
    $Model$$ = $properties$$4$$ && $properties$$4$$.constructor && $properties$$4$$.hasOwnProperty("constructor") ? $properties$$4$$.constructor : function($attributes$$2$$, $options$$12$$) {
      $oj$$1$$.$Model$._init(this, $attributes$$2$$, $options$$12$$, $properties$$4$$);
    };
    $Model$$.prototype = $obj$$48$$;
    $Model$$.extend = $oj$$1$$.$Model$.extend;
    $Model$$.prototype.constructor = $Model$$;
    $oj$$1$$.$Events$.$Mixin$($Model$$, this);
    if ($classProperties$$) {
      for ($prop$$16$$ in $classProperties$$) {
        $classProperties$$.hasOwnProperty($prop$$16$$) && ($Model$$[$prop$$16$$] = $classProperties$$[$prop$$16$$]);
      }
    }
    return $Model$$;
  };
  $goog$exportPath_$$("Model.extend", $oj$$1$$.$Model$.extend, $oj$$1$$);
  $oj$$1$$.$Model$.prototype.$TriggerInternal$ = function $$oj$$1$$$$Model$$$$TriggerInternal$$() {
  };
  $oj$$1$$.$Model$.prototype.$SetCid$ = function $$oj$$1$$$$Model$$$$SetCid$$() {
    this.$GetCid$() || (this.cid = "id" + $oj$$1$$.$Model$.$_idCount$, $oj$$1$$.$Model$.$_idCount$ += 1);
  };
  $oj$$1$$.$Model$.prototype.$GetCid$ = function $$oj$$1$$$$Model$$$$GetCid$$() {
    return this.cid;
  };
  $oj$$1$$.$Model$.prototype.$SetIndex$ = function $$oj$$1$$$$Model$$$$SetIndex$$($index$$49$$) {
    this.index = $index$$49$$;
  };
  $oj$$1$$.$Model$.prototype.$SetNext$ = function $$oj$$1$$$$Model$$$$SetNext$$($model$$1$$) {
    this.$nextModel$ = $model$$1$$;
  };
  $oj$$1$$.$Model$.prototype.$SetPrevious$ = function $$oj$$1$$$$Model$$$$SetPrevious$$($model$$2$$) {
    var $retVal$$1$$ = this.$previousModel$;
    this.$previousModel$ = $model$$2$$;
    return $retVal$$1$$;
  };
  $oj$$1$$.$Model$.prototype.$Merge$ = function $$oj$$1$$$$Model$$$$Merge$$($model$$3$$, $comparator$$, $silent$$2$$) {
    var $prop$$17$$, $needSort$$ = !1, $isStringComparator$$ = $oj$$1$$.$StringUtils$.$isString$($comparator$$), $valueChange$$, $changes$$ = !1;
    for ($prop$$17$$ in $model$$3$$.attributes) {
      $model$$3$$.attributes.hasOwnProperty($prop$$17$$) && ($valueChange$$ = this.attributes[$prop$$17$$] != $model$$3$$.attributes[$prop$$17$$], $isStringComparator$$ ? $prop$$17$$ === $comparator$$ && $valueChange$$ && ($needSort$$ = !0) : $valueChange$$ && ($needSort$$ = !0), $valueChange$$ && ($changes$$ = !0, this.attributes[$prop$$17$$] = $model$$3$$.attributes[$prop$$17$$], this.$_addChange$($prop$$17$$, $model$$3$$.attributes[$prop$$17$$]), this.$_fireAttrChange$($prop$$17$$, this.attributes[$prop$$17$$], 
      null, $silent$$2$$)));
    }
    this.$SetupId$();
    $changes$$ && this.$_fireChange$(null, $silent$$2$$);
    return $needSort$$;
  };
  $oj$$1$$.$Model$.$_hasProperties$ = function $$oj$$1$$$$Model$$$_hasProperties$$($object$$4$$) {
    var $prop$$18$$;
    if ($object$$4$$ && $object$$4$$ instanceof Object) {
      for ($prop$$18$$ in $object$$4$$) {
        if ($object$$4$$.hasOwnProperty($prop$$18$$)) {
          return!0;
        }
      }
    }
    return!1;
  };
  $oj$$1$$.$Model$.prototype.$SetCollection$ = function $$oj$$1$$$$Model$$$$SetCollection$$($coll$$) {
    null == $coll$$ ? delete this.collection : this.collection = $coll$$;
  };
  $oj$$1$$.$Model$.prototype.$GetCollection$ = function $$oj$$1$$$$Model$$$$GetCollection$$() {
    return this.collection;
  };
  $oj$$1$$.$Model$.prototype.$_fireAttrChange$ = function $$oj$$1$$$$Model$$$$_fireAttrChange$$($prop$$19$$, $value$$57$$, $options$$14$$, $silent$$3$$) {
    null != $prop$$19$$ && this.$TriggerInternal$($silent$$3$$, $oj$$1$$.$Events$.$EventType$.CHANGE + ":" + $prop$$19$$, this, $value$$57$$, $options$$14$$);
  };
  $oj$$1$$.$Model$.prototype.$_fireChange$ = function $$oj$$1$$$$Model$$$$_fireChange$$($options$$15$$, $silent$$4$$) {
    this.$TriggerInternal$($silent$$4$$, $oj$$1$$.$Events$.$EventType$.CHANGE, this, $options$$15$$, null);
  };
  $oj$$1$$.$Model$.prototype.$SetupId$ = function $$oj$$1$$$$Model$$$$SetupId$$() {
    this.id = this.attributes[this.$_getIdAttr$()];
  };
  $oj$$1$$.$Model$.prototype.$_setPropInternal$ = function $$oj$$1$$$$Model$$$$_setPropInternal$$($prop$$20$$, $value$$58$$, $copyRegardless$$) {
    var $equality$$ = $oj$$1$$.$Object$.$__innerEquals$(this.attributes[$prop$$20$$], $value$$58$$);
    return $copyRegardless$$ || !$equality$$ ? (this.attributes[$prop$$20$$] = $value$$58$$, this.$SetupId$(), !$equality$$) : !1;
  };
  $oj$$1$$.$Model$.prototype.$_clearChanged$ = function $$oj$$1$$$$Model$$$$_clearChanged$$() {
    this.changed = {};
  };
  $oj$$1$$.$Model$.prototype.$_addChange$ = function $$oj$$1$$$$Model$$$$_addChange$$($property$$4$$, $value$$59$$) {
    this.changed[$property$$4$$] = $value$$59$$;
  };
  $oj$$1$$.$Model$.prototype.$_setProp$ = function $$oj$$1$$$$Model$$$$_setProp$$($prop$$21_silent$$5$$, $value$$60$$, $copyRegardless$$1$$, $propertyBag$$, $options$$16_opts$$) {
    if (null == $prop$$21_silent$$5$$) {
      return!0;
    }
    var $attrs$$2$$ = {}, $p$$, $isNested$$ = this.$nestedSet$;
    $options$$16_opts$$ = $oj$$1$$.$Model$.$_copyOptions$($options$$16_opts$$);
    if ($propertyBag$$) {
      for ($p$$ in $prop$$21_silent$$5$$) {
        $prop$$21_silent$$5$$.hasOwnProperty($p$$) && ($attrs$$2$$[$p$$] = $prop$$21_silent$$5$$[$p$$]);
      }
    } else {
      $attrs$$2$$[$prop$$21_silent$$5$$] = $value$$60$$;
    }
    $options$$16_opts$$ = $options$$16_opts$$ || {};
    if (!this.$_checkValid$($attrs$$2$$, {validate:$options$$16_opts$$.validate}, !1)) {
      return!1;
    }
    $isNested$$ || (this.$_clearChanged$(), this.$changes$ = []);
    this.$nestedSet$ || (this.$previousAttrs$ = $oj$$1$$.$Model$.$_cloneAttributes$(this.attributes, null));
    this.$nestedSet$ = !0;
    for ($p$$ in $attrs$$2$$) {
      $attrs$$2$$.hasOwnProperty($p$$) && (this.$_setPropInternal$($p$$, $attrs$$2$$[$p$$], $copyRegardless$$1$$) ? (this.$_addChange$($p$$, $attrs$$2$$[$p$$]), this.$changes$.push($p$$)) : delete $attrs$$2$$[$p$$]);
    }
    $prop$$21_silent$$5$$ = $options$$16_opts$$.silent;
    for ($p$$ in $attrs$$2$$) {
      $attrs$$2$$.hasOwnProperty($p$$) && (!$prop$$21_silent$$5$$ && (0 < this.$changes$.length || $isNested$$ && -1 === this.$changes$.indexOf($p$$)) && (this.$pendingChanges$ = !0), this.$_fireAttrChange$($p$$, $attrs$$2$$[$p$$], $options$$16_opts$$, $prop$$21_silent$$5$$));
    }
    if ($isNested$$) {
      return!0;
    }
    if (!$prop$$21_silent$$5$$ && !$isNested$$) {
      for (;this.$pendingChanges$;) {
        this.$pendingChanges$ = !1, this.$_fireChange$($options$$16_opts$$, $prop$$21_silent$$5$$);
      }
    }
    this.$nestedSet$ = !1;
    return!0;
  };
  $oj$$1$$.$Model$.prototype.clear = function $$oj$$1$$$$Model$$$clear$($options$$17$$) {
    var $prop$$22$$, $unsetOpt$$ = {silent:!0}, $silent$$6$$;
    $options$$17$$ = $options$$17$$ || {};
    $silent$$6$$ = $options$$17$$.silent;
    $unsetOpt$$.validate = $options$$17$$.validate;
    this.$_clearChanged$();
    for ($prop$$22$$ in this.attributes) {
      if (this.attributes.hasOwnProperty($prop$$22$$)) {
        if (!this.$_unsetInternal$($prop$$22$$, $unsetOpt$$, !0)) {
          return!1;
        }
        this.$TriggerInternal$($silent$$6$$, $oj$$1$$.$Events$.$EventType$.CHANGE + ":" + $prop$$22$$, this, void 0, null);
      }
    }
    this.attributes = {};
    this.$SetupId$();
    this.$_fireAttrChange$(null, null, null, $silent$$6$$);
    this.$_fireChange$(null, $silent$$6$$);
    return this;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.clear", {clear:$oj$$1$$.$Model$.prototype.clear});
  $oj$$1$$.$Model$.$_cloneAttributes$ = function $$oj$$1$$$$Model$$$_cloneAttributes$$($oldData$$, $newData$$) {
    var $prop$$23$$;
    if (null === $oldData$$) {
      return null;
    }
    $newData$$ = $newData$$ || {};
    var $props$$1$$ = !1;
    for ($prop$$23$$ in $oldData$$) {
      if ($props$$1$$ = !0, $oldData$$.hasOwnProperty($prop$$23$$)) {
        if ("object" !== typeof $oldData$$[$prop$$23$$]) {
          $newData$$.hasOwnProperty($prop$$23$$) ? void 0 !== $oldData$$[$prop$$23$$] && ($newData$$[$prop$$23$$] = $oldData$$[$prop$$23$$]) : $newData$$[$prop$$23$$] = $oldData$$[$prop$$23$$];
        } else {
          if ($oj$$1$$.$Model$.$IsArray$($oldData$$[$prop$$23$$])) {
            if (null === $oldData$$[$prop$$23$$]) {
              $newData$$[$prop$$23$$] = null;
            } else {
              if ($newData$$[$prop$$23$$] = [], 0 === $oldData$$[$prop$$23$$].length) {
                $newData$$[$prop$$23$$] = $oldData$$[$prop$$23$$];
              } else {
                for (var $i$$19$$ = 0;$i$$19$$ < $oldData$$[$prop$$23$$].length;$i$$19$$++) {
                  $newData$$[$prop$$23$$].push($oj$$1$$.$Model$.$_cloneAttributes$($oldData$$[$prop$$23$$][$i$$19$$], null));
                }
              }
            }
          } else {
            $newData$$[$prop$$23$$] = $oj$$1$$.$Model$.$_cloneAttributes$($oldData$$[$prop$$23$$], null);
          }
        }
      }
    }
    return $props$$1$$ || "object" === typeof $oldData$$ ? $newData$$ : $oldData$$;
  };
  $oj$$1$$.$Model$.prototype.clone = function $$oj$$1$$$$Model$$$clone$() {
    var $c$$14$$ = new this.constructor, $prop$$24$$;
    for ($prop$$24$$ in this) {
      this.hasOwnProperty($prop$$24$$) && this[$prop$$24$$] !== this.attributes && ($c$$14$$[$prop$$24$$] = this[$prop$$24$$]);
    }
    $c$$14$$.attributes = $oj$$1$$.$Model$.$_cloneAttributes$(this.attributes, null);
    delete $c$$14$$.cid;
    $c$$14$$.$SetCid$();
    $c$$14$$.$SetupId$();
    return $c$$14$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.clone", {clone:$oj$$1$$.$Model$.prototype.clone});
  $oj$$1$$.$Model$.prototype.$Match$ = function $$oj$$1$$$$Model$$$$Match$$($id$$2$$, $cid$$) {
    var $modCid_modId$$ = this.$GetId$();
    if (void 0 !== $modCid_modId$$ && $modCid_modId$$ == $id$$2$$) {
      return!0;
    }
    $modCid_modId$$ = this.cid;
    return void 0 !== $modCid_modId$$ && $modCid_modId$$ == $cid$$ ? !0 : !1;
  };
  $oj$$1$$.$Model$.prototype.set = function $$oj$$1$$$$Model$$$set$($property$$5$$, $value$$61$$, $options$$18$$) {
    var $opts$$1$$ = {}, $ignoreLastArg$$ = !1, $i$$20_prop$$25$$, $valid$$ = !0;
    if (arguments && 0 < arguments.length) {
      if (1 < arguments.length && arguments[arguments.length - 1] && ($ignoreLastArg$$ = !0, $opts$$1$$ = arguments[arguments.length - 1] || {}), $oj$$1$$.$Model$.$_hasProperties$($property$$5$$)) {
        if ($opts$$1$$.unset) {
          for ($i$$20_prop$$25$$ in $property$$5$$) {
            $property$$5$$.hasOwnProperty($i$$20_prop$$25$$) && this.$_unsetInternal$($i$$20_prop$$25$$, null, !1);
          }
        } else {
          this.$_setProp$($property$$5$$, null, !0, !0, $opts$$1$$) || ($valid$$ = !1);
        }
      } else {
        for ($i$$20_prop$$25$$ = 0;$i$$20_prop$$25$$ < arguments.length;$i$$20_prop$$25$$ += 2) {
          if (void 0 !== arguments[$i$$20_prop$$25$$] || $i$$20_prop$$25$$ < arguments.length - 1 || !$ignoreLastArg$$ && $i$$20_prop$$25$$ === arguments.length - 1) {
            $opts$$1$$.unset ? this.$_unsetInternal$(arguments[$i$$20_prop$$25$$], null, !1) : this.$_setProp$(arguments[$i$$20_prop$$25$$], arguments[$i$$20_prop$$25$$ + 1], !1, !1, $opts$$1$$) || ($valid$$ = !1);
          }
        }
      }
    }
    return $valid$$ ? this : !1;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.set", {set:$oj$$1$$.$Model$.prototype.set});
  $oj$$1$$.$Model$.prototype.$unset$ = function $$oj$$1$$$$Model$$$$unset$$($property$$6$$, $options$$19$$) {
    return this.$_unsetInternal$($property$$6$$, $options$$19$$, !1);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.unset", {$unset$:$oj$$1$$.$Model$.prototype.$unset$});
  $oj$$1$$.$Model$.prototype.$_unsetInternal$ = function $$oj$$1$$$$Model$$$$_unsetInternal$$($property$$7$$, $options$$20$$, $clear$$) {
    $options$$20$$ = $options$$20$$ || {};
    var $silent$$7$$ = $options$$20$$.silent, $attrs$$3$$ = {};
    if (this.has($property$$7$$)) {
      if (!this.$_checkValid$($attrs$$3$$, $options$$20$$, !1)) {
        return!1;
      }
      $clear$$ || this.$_clearChanged$();
      delete this.attributes[$property$$7$$];
      this.$_addChange$($property$$7$$, void 0);
      this.$_fireAttrChange$($property$$7$$, null, null, $silent$$7$$);
      this.$_fireChange$(null, $silent$$7$$);
    }
    this.$SetupId$();
    return!0;
  };
  $oj$$1$$.$Model$.prototype.get = function $$oj$$1$$$$Model$$$get$($property$$8$$) {
    return this.attributes[$property$$8$$];
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.get", {get:$oj$$1$$.$Model$.prototype.get});
  $oj$$1$$.$Model$.prototype.has = function $$oj$$1$$$$Model$$$has$($property$$9$$) {
    return void 0 !== this.attributes[$property$$9$$] && null !== this.attributes[$property$$9$$];
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.has", {has:$oj$$1$$.$Model$.prototype.has});
  $oj$$1$$.$Model$.prototype.fetch = function $$oj$$1$$$$Model$$$fetch$($options$$21$$) {
    $options$$21$$ = $options$$21$$ || {};
    var $success$$8$$ = $options$$21$$.success, $userErr$$ = $options$$21$$.error, $self$$1$$ = this, $opts$$2$$;
    $opts$$2$$ = $oj$$1$$.$Model$.$_copyOptions$($options$$21$$);
    $opts$$2$$.error = function $$opts$$2$$$error$($xhr$$, $status$$, $err$$) {
      $self$$1$$.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.ERROR, $self$$1$$, $xhr$$, $options$$21$$);
      $userErr$$ && $userErr$$.call($self$$1$$, arguments);
    };
    $opts$$2$$.success = function $$opts$$2$$$success$($response$$) {
      $oj$$1$$.$Model$.$_fireSyncEvent$($self$$1$$, $response$$, $opts$$2$$);
      $oj$$1$$.$Model$.$IsFunction$(this.parse) && this.set(this.parse($response$$), $opts$$2$$);
      $success$$8$$ && $success$$8$$.call($self$$1$$, this, $response$$, $options$$21$$);
    };
    $oj$$1$$.$Model$.$_internalSync$("read", this, $opts$$2$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.fetch", {fetch:$oj$$1$$.$Model$.prototype.fetch});
  $oj$$1$$.$Model$.prototype.parse = function $$oj$$1$$$$Model$$$parse$($rawData$$) {
    return $rawData$$;
  };
  $oj$$1$$.$Model$.prototype.url = function $$oj$$1$$$$Model$$$url$() {
    var $coll$$2_collUrl_urlRoot$$ = this.$_getUrlRoot$(), $id$$3_slash$$ = this.$GetId$();
    if ($coll$$2_collUrl_urlRoot$$) {
      return $id$$3_slash$$ ? $coll$$2_collUrl_urlRoot$$ + "/" + encodeURIComponent($id$$3_slash$$) : $coll$$2_collUrl_urlRoot$$;
    }
    if ($coll$$2_collUrl_urlRoot$$ = this.collection) {
      return $coll$$2_collUrl_urlRoot$$ = $oj$$1$$.$Model$.$IsFunction$($coll$$2_collUrl_urlRoot$$.url) ? $coll$$2_collUrl_urlRoot$$.url() : $coll$$2_collUrl_urlRoot$$.url, $id$$3_slash$$ && $coll$$2_collUrl_urlRoot$$ ? ($id$$3_slash$$ = "/" == $oj$$1$$.$Model$.$_getLastChar$($coll$$2_collUrl_urlRoot$$) ? "" : "/", $coll$$2_collUrl_urlRoot$$ + $id$$3_slash$$ + encodeURIComponent(this.$GetId$())) : $coll$$2_collUrl_urlRoot$$;
    }
    throw "No URL defined";
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.url", {url:$oj$$1$$.$Model$.prototype.url});
  $oj$$1$$.$Model$.prototype.keys = function $$oj$$1$$$$Model$$$keys$() {
    var $prop$$26$$, $retArray$$ = [];
    for ($prop$$26$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$26$$) && $retArray$$.push($prop$$26$$);
    }
    return $retArray$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.keys", {keys:$oj$$1$$.$Model$.prototype.keys});
  $oj$$1$$.$Model$.prototype.values = function $$oj$$1$$$$Model$$$values$() {
    var $prop$$27$$, $retArray$$1$$ = [];
    for ($prop$$27$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$27$$) && $retArray$$1$$.push(this.get($prop$$27$$));
    }
    return $retArray$$1$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.values", {values:$oj$$1$$.$Model$.prototype.values});
  $oj$$1$$.$Model$.prototype.pairs = function $$oj$$1$$$$Model$$$pairs$() {
    var $prop$$28$$, $retObj$$ = [], $item$$;
    for ($prop$$28$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$28$$) && ($item$$ = [], $item$$.push($prop$$28$$), $item$$.push(this.get($prop$$28$$)), $retObj$$.push($item$$));
    }
    return $retObj$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.pairs", {pairs:$oj$$1$$.$Model$.prototype.pairs});
  $oj$$1$$.$Model$.prototype.$omit$ = function $$oj$$1$$$$Model$$$$omit$$($keys$$1$$) {
    var $keyArr$$ = [], $i$$21$$, $prop$$29$$, $retObj$$1$$ = {};
    if ($keys$$1$$ instanceof Array) {
      $keyArr$$ = $keys$$1$$;
    } else {
      if (arguments) {
        for ($i$$21$$ = 0;$i$$21$$ < arguments.length;$i$$21$$++) {
          $keyArr$$.push(arguments[$i$$21$$]);
        }
      } else {
        return this.pairs();
      }
    }
    for ($prop$$29$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$29$$) && -1 == $keyArr$$.indexOf($prop$$29$$) && ($retObj$$1$$[$prop$$29$$] = this.get($prop$$29$$));
    }
    return $retObj$$1$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.omit", {$omit$:$oj$$1$$.$Model$.prototype.$omit$});
  $oj$$1$$.$Model$.prototype.$pick$ = function $$oj$$1$$$$Model$$$$pick$$($keys$$2$$) {
    var $keyArr$$1$$ = [], $i$$22$$, $retObj$$2$$ = {};
    if ($keys$$2$$ instanceof Array) {
      $keyArr$$1$$ = $keys$$2$$;
    } else {
      if (arguments) {
        for ($i$$22$$ = 0;$i$$22$$ < arguments.length;$i$$22$$++) {
          $keyArr$$1$$.push(arguments[$i$$22$$]);
        }
      } else {
        return this.pairs();
      }
    }
    for ($i$$22$$ = 0;$i$$22$$ < $keyArr$$1$$.length;$i$$22$$++) {
      this.attributes.hasOwnProperty($keyArr$$1$$[$i$$22$$]) && ($retObj$$2$$[$keyArr$$1$$[$i$$22$$]] = this.get($keyArr$$1$$[$i$$22$$]));
    }
    return $retObj$$2$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.pick", {$pick$:$oj$$1$$.$Model$.prototype.$pick$});
  $oj$$1$$.$Model$.prototype.$invert$ = function $$oj$$1$$$$Model$$$$invert$$() {
    var $prop$$30$$, $retObj$$3$$ = {}, $val$$14$$;
    for ($prop$$30$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$30$$) && ($val$$14$$ = this.get($prop$$30$$), $retObj$$3$$[$val$$14$$] = $prop$$30$$);
    }
    return $retObj$$3$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.invert", {$invert$:$oj$$1$$.$Model$.prototype.$invert$});
  $oj$$1$$.$Model$.$_getLastChar$ = function $$oj$$1$$$$Model$$$_getLastChar$$($str$$11$$) {
    return $str$$11$$.charAt($str$$11$$.length - 1);
  };
  $oj$$1$$.$Model$.prototype.$_saveUrl$ = function $$oj$$1$$$$Model$$$$_saveUrl$$() {
    var $urlRoot$$1$$ = this.$_getUrlRoot$();
    return $urlRoot$$1$$ ? $urlRoot$$1$$ : this.$GetCollection$() ? this.$GetCollection$().url : null;
  };
  $oj$$1$$.$Model$.prototype.$_getUrlRoot$ = function $$oj$$1$$$$Model$$$$_getUrlRoot$$() {
    return $oj$$1$$.$Model$.$IsFunction$(this.urlRoot) ? this.urlRoot() : this.urlRoot;
  };
  $oj$$1$$.$Model$.prototype.parseSave = function $$oj$$1$$$$Model$$$parseSave$($modelData$$) {
    return $modelData$$;
  };
  $oj$$1$$.$Model$.prototype.isValid = function $$oj$$1$$$$Model$$$isValid$() {
    var $options$$22$$ = {};
    $options$$22$$.validate = this.validate;
    return this.$_checkValid$(this.attributes, $options$$22$$, !1);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.isValid", {isValid:$oj$$1$$.$Model$.prototype.isValid});
  $oj$$1$$.$Model$.$_isValidateSet$ = function $$oj$$1$$$$Model$$$_isValidateSet$$($options$$23$$, $save$$) {
    $options$$23$$ = $options$$23$$ || {};
    return void 0 !== $options$$23$$.validate && null !== $options$$23$$.validate ? $options$$23$$.validate : $save$$;
  };
  $oj$$1$$.$Model$.prototype.$_checkValid$ = function $$oj$$1$$$$Model$$$$_checkValid$$($attributes$$3$$, $options$$24$$, $save$$1$$) {
    var $validate$$ = this.validate;
    return $validate$$ && $oj$$1$$.$Model$.$_isValidateSet$($options$$24$$, $save$$1$$) && (this.validationError = $validate$$.call(this, $attributes$$3$$, $options$$24$$)) ? (this.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.INVALID, this, this.validationError, $options$$24$$), !1) : !0;
  };
  $oj$$1$$.$Model$.$_processArgs$ = function $$oj$$1$$$$Model$$$_processArgs$$($args$$10$$) {
    var $ignoreLastArg$$1$$ = !1, $options$$25$$ = {}, $i$$23_prop$$31$$, $attributes$$4$$ = {};
    if ($args$$10$$ && 0 < $args$$10$$.length) {
      1 < $args$$10$$.length && $args$$10$$[$args$$10$$.length - 1] && $oj$$1$$.$Model$.$_hasProperties$($args$$10$$[$args$$10$$.length - 1]) && ($ignoreLastArg$$1$$ = !0, $options$$25$$ = $args$$10$$[$args$$10$$.length - 1] || {});
      if (null == $args$$10$$[0]) {
        return{attributes:null, options:$options$$25$$};
      }
      if ($oj$$1$$.$Model$.$_hasProperties$($args$$10$$[0])) {
        for ($i$$23_prop$$31$$ in $args$$10$$[0]) {
          $args$$10$$[0].hasOwnProperty($i$$23_prop$$31$$) && ($attributes$$4$$[$i$$23_prop$$31$$] = $args$$10$$[0][$i$$23_prop$$31$$]);
        }
      } else {
        for ($i$$23_prop$$31$$ = 0;$i$$23_prop$$31$$ < $args$$10$$.length;$i$$23_prop$$31$$ += 2) {
          if (void 0 !== $args$$10$$[$i$$23_prop$$31$$] || $i$$23_prop$$31$$ < $args$$10$$.length - 1 || !$ignoreLastArg$$1$$ && $i$$23_prop$$31$$ === $args$$10$$.length - 1) {
            $attributes$$4$$[$args$$10$$[$i$$23_prop$$31$$]] = $args$$10$$[$i$$23_prop$$31$$ + 1];
          }
        }
      }
    }
    return{attributes:$attributes$$4$$, options:$options$$25$$};
  };
  $oj$$1$$.$Model$.$_copyOptions$ = function $$oj$$1$$$$Model$$$_copyOptions$$($options$$26$$) {
    var $optReturn$$ = {}, $prop$$32$$;
    $options$$26$$ = $options$$26$$ || {};
    for ($prop$$32$$ in $options$$26$$) {
      $options$$26$$.hasOwnProperty($prop$$32$$) && ($optReturn$$[$prop$$32$$] = $options$$26$$[$prop$$32$$]);
    }
    return $optReturn$$;
  };
  $oj$$1$$.$Model$.prototype.save = function $$oj$$1$$$$Model$$$save$($attributes$$5$$, $options$$27$$) {
    var $argResults_forceNew$$, $success$$9$$, $callback$$69$$, $self$$2$$, $userErr$$1$$, $patch$$;
    $argResults_forceNew$$ = $oj$$1$$.$Model$.$_processArgs$(arguments);
    var $opts$$3$$, $oldAttrs$$, $attrArgs$$;
    $attrArgs$$ = void 0 === $attributes$$5$$ ? void 0 : $argResults_forceNew$$.attributes;
    $opts$$3$$ = $oj$$1$$.$Model$.$_copyOptions$($argResults_forceNew$$.options);
    $opts$$3$$.wait || this.set($attrArgs$$);
    if (!this.$_checkValid$(this.attributes, $opts$$3$$, !0)) {
      return!1;
    }
    $argResults_forceNew$$ = void 0 === $opts$$3$$.forceNew ? !1 : $opts$$3$$.forceNew;
    $self$$2$$ = this;
    $userErr$$1$$ = $opts$$3$$.error;
    $patch$$ = $opts$$3$$.patch;
    $opts$$3$$.error = function $$opts$$3$$$error$($xhr$$1$$, $status$$1$$, $err$$1$$) {
      $self$$2$$.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.ERROR, $self$$2$$, $xhr$$1$$, $options$$27$$);
      $userErr$$1$$ && $userErr$$1$$.call($self$$2$$, arguments);
    };
    $opts$$3$$.saveAttrs = $opts$$3$$.wait ? this.$_attrUnion$($attrArgs$$) : this.attributes;
    $oldAttrs$$ = this.attributes;
    this.attributes = $opts$$3$$.saveAttrs;
    $opts$$3$$.saveAttrs = this.toJSON();
    this.attributes = $oldAttrs$$;
    if (!$argResults_forceNew$$ && !this.$isNew$()) {
      return $success$$9$$ = $opts$$3$$.success, $opts$$3$$.success = function $$opts$$3$$$success$($resp$$) {
        var $attrs$$4$$;
        $resp$$ && ($attrs$$4$$ = $oj$$1$$.$Model$.$IsFunction$(this.parse) ? this.parse($resp$$) : $resp$$, $self$$2$$.attributes = $attrs$$4$$, $self$$2$$.$SetupId$());
        $oj$$1$$.$Model$.$_fireSyncEvent$($self$$2$$, $resp$$, $opts$$3$$);
        $success$$9$$ && $success$$9$$.call($oj$$1$$.$Model$.$GetContext$($opts$$3$$, $self$$2$$), $self$$2$$, $resp$$, $options$$27$$);
        $self$$2$$.$_clearChanged$();
      }, $opts$$3$$.attrs = void 0 === $attrArgs$$ ? void 0 : $patch$$ ? $attrArgs$$ : $opts$$3$$.saveAttrs, $oj$$1$$.$Model$.$_internalSync$($patch$$ ? "patch" : "update", this, $opts$$3$$);
    }
    $callback$$69$$ = $oj$$1$$.$Model$.$_getSuccess$($opts$$3$$);
    $opts$$3$$.success = function $$opts$$3$$$success$($resp$$1$$) {
      var $attrs$$5$$;
      if ($resp$$1$$) {
        $attrs$$5$$ = $oj$$1$$.$Model$.$IsFunction$($self$$2$$.parse) ? $self$$2$$.parse($resp$$1$$) : $resp$$1$$;
        if (!$self$$2$$.$_checkValid$($attrs$$5$$, $opts$$3$$, !0)) {
          return;
        }
        $self$$2$$.attributes = $attrs$$5$$;
        $self$$2$$.$SetupId$();
      }
      $opts$$3$$.wait && $self$$2$$.set($attrArgs$$);
      $oj$$1$$.$Model$.$_fireSyncEvent$($self$$2$$, $resp$$1$$, $opts$$3$$);
      $callback$$69$$ && $callback$$69$$.call($oj$$1$$.$Model$.$GetContext$($opts$$3$$, $self$$2$$), $self$$2$$, $resp$$1$$, $options$$27$$);
      $self$$2$$.$_clearChanged$();
    };
    $opts$$3$$.attrs = $opts$$3$$.saveAttrs;
    $opts$$3$$.parse = !0;
    return $oj$$1$$.$Model$.$_internalSync$("create", this, $opts$$3$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.save", {save:$oj$$1$$.$Model$.prototype.save});
  $oj$$1$$.$Model$.prototype.$_attrUnion$ = function $$oj$$1$$$$Model$$$$_attrUnion$$($attrs$$6$$) {
    var $attrReturn$$ = {}, $prop$$33$$;
    for ($prop$$33$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$33$$) && ($attrReturn$$[$prop$$33$$] = this.attributes[$prop$$33$$]);
    }
    for ($prop$$33$$ in $attrs$$6$$) {
      $attrs$$6$$.hasOwnProperty($prop$$33$$) && ($attrReturn$$[$prop$$33$$] = $attrs$$6$$[$prop$$33$$]);
    }
    return $attrReturn$$;
  };
  $oj$$1$$.$Model$.$IsArray$ = function $$oj$$1$$$$Model$$$IsArray$$($obj$$49$$) {
    return null != $obj$$49$$ && $obj$$49$$.constructor === Array;
  };
  $oj$$1$$.$Model$.$IsFunction$ = function $$oj$$1$$$$Model$$$IsFunction$$($obj$$50$$) {
    return $obj$$50$$ instanceof Function;
  };
  $oj$$1$$.$Model$.$IsComplexValue$ = function $$oj$$1$$$$Model$$$IsComplexValue$$($val$$15$$) {
    return $val$$15$$ && $val$$15$$.hasOwnProperty("value") && $val$$15$$.hasOwnProperty("comparator");
  };
  $oj$$1$$.$Model$.prototype.$_hasAttrs$ = function $$oj$$1$$$$Model$$$$_hasAttrs$$($attrs$$7$$) {
    for (var $prop$$34$$ in $attrs$$7$$) {
      if ($attrs$$7$$.hasOwnProperty($prop$$34$$)) {
        if (!this.attributes.hasOwnProperty($prop$$34$$)) {
          return!1;
        }
        for (var $val$$16$$ = $oj$$1$$.$Model$.$IsArray$($attrs$$7$$[$prop$$34$$]) ? $attrs$$7$$[$prop$$34$$] : [$attrs$$7$$[$prop$$34$$]], $i$$24$$ = 0;$i$$24$$ < $val$$16$$.length;$i$$24$$++) {
          if ($oj$$1$$.$Model$.$IsComplexValue$($val$$16$$[$i$$24$$])) {
            var $comparator$$1$$ = $val$$16$$[$i$$24$$].comparator, $value$$62$$ = $val$$16$$[$i$$24$$].value;
            if ($oj$$1$$.$StringUtils$.$isString$($comparator$$1$$)) {
              throw Error("String comparator invalid for local where/findWhere");
            }
            if (!$comparator$$1$$(this, $prop$$34$$, $value$$62$$)) {
              return!1;
            }
          } else {
            if ($attrs$$7$$[$prop$$34$$] !== this.attributes[$prop$$34$$]) {
              return!1;
            }
          }
        }
      }
    }
    return!0;
  };
  $oj$$1$$.$Model$.prototype.$Contains$ = function $$oj$$1$$$$Model$$$$Contains$$($attrList_attrs$$8$$) {
    $attrList_attrs$$8$$ = $attrList_attrs$$8$$.constructor === Array ? $attrList_attrs$$8$$ : [$attrList_attrs$$8$$];
    var $i$$25$$;
    for ($i$$25$$ = 0;$i$$25$$ < $attrList_attrs$$8$$.length;$i$$25$$++) {
      if (this.$_hasAttrs$($attrList_attrs$$8$$[$i$$25$$])) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$1$$.$Model$.$_getSuccess$ = function $$oj$$1$$$$Model$$$_getSuccess$$($options$$28$$) {
    return null != $options$$28$$ && $options$$28$$.success ? $options$$28$$.success : null;
  };
  $oj$$1$$.$Model$.$GetContext$ = function $$oj$$1$$$$Model$$$GetContext$$($options$$29$$, $model$$4$$) {
    return void 0 !== $options$$29$$ && void 0 !== $options$$29$$.context ? $options$$29$$.context : $model$$4$$;
  };
  $oj$$1$$.$Model$.prototype.$isNew$ = function $$oj$$1$$$$Model$$$$isNew$$() {
    return void 0 == this.$GetId$();
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.isNew", {$isNew$:$oj$$1$$.$Model$.prototype.$isNew$});
  $oj$$1$$.$Model$.prototype.$_getIdAttr$ = function $$oj$$1$$$$Model$$$$_getIdAttr$$() {
    return this.idAttribute || "id";
  };
  $oj$$1$$.$Model$.prototype.$GetId$ = function $$oj$$1$$$$Model$$$$GetId$$() {
    return this.id;
  };
  $oj$$1$$.$Model$.prototype.$changedAttributes$ = function $$oj$$1$$$$Model$$$$changedAttributes$$($attributes$$6$$) {
    if ($attributes$$6$$) {
      var $internalChanges$$ = {}, $prop$$35$$;
      for ($prop$$35$$ in $attributes$$6$$) {
        $attributes$$6$$.hasOwnProperty($prop$$35$$) && ($oj$$1$$.$Object$.$__innerEquals$($attributes$$6$$[$prop$$35$$], this.attributes[$prop$$35$$]) || ($internalChanges$$[$prop$$35$$] = $attributes$$6$$[$prop$$35$$]));
      }
      return $oj$$1$$.$Object$.isEmpty($internalChanges$$) ? !1 : $internalChanges$$;
    }
    return $oj$$1$$.$Object$.isEmpty(this.changed) ? !1 : this.changed;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.changedAttributes", {$changedAttributes$:$oj$$1$$.$Model$.prototype.$changedAttributes$});
  $oj$$1$$.$Model$.prototype.$hasChanged$ = function $$oj$$1$$$$Model$$$$hasChanged$$($attribute$$) {
    return void 0 !== $attribute$$ ? $oj$$1$$.$Model$.$_hasProperties$(this.changed) && this.changed.hasOwnProperty($attribute$$) : $oj$$1$$.$Model$.$_hasProperties$(this.changed);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.hasChanged", {$hasChanged$:$oj$$1$$.$Model$.prototype.$hasChanged$});
  $oj$$1$$.$Model$.prototype.destroy = function $$oj$$1$$$$Model$$$destroy$($options$$30$$) {
    $options$$30$$ = $options$$30$$ || {};
    var $isWait$$ = $options$$30$$.wait, $callback$$70$$, $userErr$$2$$ = $options$$30$$.error, $self$$3$$ = this, $xhr$$3$$, $opts$$4$$;
    $opts$$4$$ = $oj$$1$$.$Model$.$_copyOptions$($options$$30$$);
    $callback$$70$$ = $oj$$1$$.$Model$.$_getSuccess$($opts$$4$$);
    $opts$$4$$.success = function $$opts$$4$$$success$($data$$33$$) {
      $isWait$$ && $self$$3$$.$_fireDestroy$();
      $oj$$1$$.$Model$.$_fireSyncEvent$($self$$3$$, $data$$33$$, $opts$$4$$);
      $callback$$70$$ && $callback$$70$$.call($oj$$1$$.$Model$.$GetContext$($opts$$4$$, $self$$3$$), $self$$3$$, $data$$33$$, $options$$30$$);
    };
    $opts$$4$$.error = function $$opts$$4$$$error$($xhr$$5$$, $status$$4$$, $err$$2$$) {
      $self$$3$$.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.ERROR, $self$$3$$, $xhr$$5$$, $opts$$4$$);
      $userErr$$2$$ && $userErr$$2$$.call($self$$3$$, arguments);
    };
    if (!this.$isNew$()) {
      return $xhr$$3$$ = $oj$$1$$.$Model$.$_internalSync$("delete", this, $opts$$4$$), $isWait$$ || this.$_fireDestroy$(), $xhr$$3$$;
    }
    $isWait$$ || this.$_fireDestroy$();
    $callback$$70$$ && $callback$$70$$.call($oj$$1$$.$Model$.$GetContext$($opts$$4$$, $self$$3$$), $self$$3$$, null, $options$$30$$);
    return!1;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.destroy", {destroy:$oj$$1$$.$Model$.prototype.destroy});
  $oj$$1$$.$Model$.prototype.$_fireDestroy$ = function $$oj$$1$$$$Model$$$$_fireDestroy$$() {
    this.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.DESTROY, this, this.collection, null);
  };
  $oj$$1$$.$Model$.$_fireSyncEvent$ = function $$oj$$1$$$$Model$$$_fireSyncEvent$$($model$$5$$, $resp$$2$$, $options$$31$$) {
    $model$$5$$.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.SYNC, $model$$5$$, $resp$$2$$, $options$$31$$);
  };
  $oj$$1$$.$Model$.prototype.toJSON = function $$oj$$1$$$$Model$$$toJSON$() {
    var $retObj$$4$$ = {}, $prop$$36$$;
    for ($prop$$36$$ in this.attributes) {
      this.attributes.hasOwnProperty($prop$$36$$) && (Array.isArray(this.attributes[$prop$$36$$]) ? $retObj$$4$$[$prop$$36$$] = this.attributes[$prop$$36$$].slice(0) : $retObj$$4$$[$prop$$36$$] = this.attributes[$prop$$36$$]);
    }
    return $retObj$$4$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.toJSON", {toJSON:$oj$$1$$.$Model$.prototype.toJSON});
  $oj$$1$$.$Model$.prototype.previous = function $$oj$$1$$$$Model$$$previous$($attr$$7$$) {
    return this.$previousAttrs$[$attr$$7$$];
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.previous", {previous:$oj$$1$$.$Model$.prototype.previous});
  $oj$$1$$.$Model$.prototype.$previousAttributes$ = function $$oj$$1$$$$Model$$$$previousAttributes$$() {
    return this.$previousAttrs$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.previousAttributes", {$previousAttributes$:$oj$$1$$.$Model$.prototype.$previousAttributes$});
  $oj$$1$$.$Model$.prototype.$previousChanges$ = function $$oj$$1$$$$Model$$$$previousChanges$$() {
    return this.$previousAttrs$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Model.prototype.previousChanges", {$previousChanges$:$oj$$1$$.$Model$.prototype.$previousChanges$});
  $oj$$1$$.$Model$.prototype.sync = function $$oj$$1$$$$Model$$$sync$($method$$2$$, $model$$6$$, $options$$32$$) {
    return window.oj.sync($method$$2$$, $model$$6$$, $options$$32$$);
  };
  $oj$$1$$.$Model$.$_internalSync$ = function $$oj$$1$$$$Model$$$_internalSync$$($method$$3$$, $model$$7$$, $options$$33$$) {
    $options$$33$$ = $options$$33$$ || {};
    $model$$7$$.oauth && ($options$$33$$.oauthHeader = $model$$7$$.oauth.getHeader());
    !$options$$33$$.dataType && $model$$7$$.dataType && ($options$$33$$.dataType = $model$$7$$.dataType);
    !$options$$33$$.jsonpCallback && $model$$7$$.jsonpCallback && ($options$$33$$.jsonpCallback = $model$$7$$.jsonpCallback);
    if ("create" === $method$$3$$ || "patch" === $method$$3$$ || "update" === $method$$3$$) {
      $options$$33$$.$parsedData$ = $model$$7$$.parseSave.call($model$$7$$, "patch" === $method$$3$$ ? $model$$7$$.changed : $options$$33$$.saveAttrs);
    }
    return $model$$7$$.sync($method$$3$$, $model$$7$$, $options$$33$$);
  };
  $oj$$1$$.$sync$ = function $$oj$$1$$$$sync$$($method$$4$$, $model$$8$$, $options$$34$$) {
    $options$$34$$ = $options$$34$$ || {};
    var $customURL_restService$$, $success$$10$$ = $options$$34$$.success, $error$$3$$ = $options$$34$$.error;
    $customURL_restService$$ = $model$$8$$.customURL;
    if ("create" === $method$$4$$.valueOf()) {
      return $customURL_restService$$ = new $oj$$1$$.$RestImpl$($model$$8$$.$_saveUrl$(), $customURL_restService$$), $customURL_restService$$.$addRecord$($options$$34$$.$parsedData$, $error$$3$$, $options$$34$$, $model$$8$$);
    }
    if ("read" === $method$$4$$.valueOf()) {
      if ($model$$8$$ instanceof $oj$$1$$.$Model$) {
        return $customURL_restService$$ = new $oj$$1$$.$RestImpl$($model$$8$$.url(), $customURL_restService$$), $customURL_restService$$.$getRecord$($success$$10$$, $error$$3$$, $model$$8$$.$GetId$(), $options$$34$$, $oj$$1$$.$Model$.$GetContext$($options$$34$$, $model$$8$$));
      }
      $customURL_restService$$ = new $oj$$1$$.$RestImpl$($model$$8$$.$GetCollectionFetchUrl$($options$$34$$), $customURL_restService$$);
      return $customURL_restService$$.$getRecords$($success$$10$$, $error$$3$$, $options$$34$$, $model$$8$$);
    }
    $customURL_restService$$ = new $oj$$1$$.$RestImpl$($model$$8$$.url(), $customURL_restService$$);
    var $recordId$$ = null;
    $model$$8$$ instanceof $oj$$1$$.$Model$ && ($recordId$$ = $model$$8$$.$GetId$());
    return "update" === $method$$4$$.valueOf() ? $customURL_restService$$.$updateRecord$($success$$10$$, $recordId$$, $options$$34$$.$parsedData$, $error$$3$$, $options$$34$$, $model$$8$$, !1) : "patch" === $method$$4$$.valueOf() ? $customURL_restService$$.$updateRecord$($success$$10$$, $recordId$$, $options$$34$$.$parsedData$, $error$$3$$, $options$$34$$, $model$$8$$, !0) : "delete" === $method$$4$$.valueOf() ? $customURL_restService$$.$deleteRecord$($recordId$$, $error$$3$$, $options$$34$$, $model$$8$$) : 
    null;
  };
  $goog$exportPath_$$("sync", $oj$$1$$.$sync$, $oj$$1$$);
  $oj$$1$$.$Model$.$_urlError$ = function $$oj$$1$$$$Model$$$_urlError$$($ajaxOptions$$) {
    if (!$ajaxOptions$$.url) {
      throw Error("The url property or function must be specified");
    }
  };
  $oj$$1$$.ajax = function $$oj$$1$$$ajax$() {
    arguments && 0 < arguments.length && $oj$$1$$.$Model$.$_urlError$(arguments[0]);
    return $$$$1$$.ajax.apply(window.oj, arguments);
  };
  $oj$$1$$.$Collection$ = function $$oj$$1$$$$Collection$$($models$$, $options$$35$$) {
    $oj$$1$$.$Collection$.$_justExtending$ || $oj$$1$$.$Collection$._init(this, $models$$, $options$$35$$, null);
  };
  $goog$exportPath_$$("Collection", $oj$$1$$.$Collection$, $oj$$1$$);
  $oj$$1$$.$Collection$.prototype.$model$ = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.model", {$model$:$oj$$1$$.$Collection$.prototype.$model$});
  $oj$$1$$.$Collection$.prototype.length = 0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.length", {length:$oj$$1$$.$Collection$.prototype.length});
  $oj$$1$$.$Collection$.prototype.$models$ = [];
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.models", {$models$:$oj$$1$$.$Collection$.prototype.$models$});
  $oj$$1$$.$Collection$.prototype.url = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.url", {url:$oj$$1$$.$Collection$.prototype.url});
  $oj$$1$$.$Collection$.prototype.$customURL$ = function $$oj$$1$$$$Collection$$$$customURL$$() {
    return null;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.customURL", {$customURL$:$oj$$1$$.$Collection$.prototype.$customURL$});
  $oj$$1$$.$Collection$.prototype.$customPagingOptions$ = function $$oj$$1$$$$Collection$$$$customPagingOptions$$() {
    return null;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.customPagingOptions", {$customPagingOptions$:$oj$$1$$.$Collection$.prototype.$customPagingOptions$});
  $oj$$1$$.$Collection$.prototype.$lastFetchSize$ = 0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.lastFetchSize", {$lastFetchSize$:$oj$$1$$.$Collection$.prototype.$lastFetchSize$});
  $oj$$1$$.$Collection$.prototype.hasMore = !1;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.hasMore", {hasMore:$oj$$1$$.$Collection$.prototype.hasMore});
  $oj$$1$$.$Collection$.prototype.$totalResults$ = 0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.totalResults", {$totalResults$:$oj$$1$$.$Collection$.prototype.$totalResults$});
  $oj$$1$$.$Collection$.prototype.$lastFetchCount$ = 0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.lastFetchCount", {$lastFetchCount$:$oj$$1$$.$Collection$.prototype.$lastFetchCount$});
  $oj$$1$$.$Collection$.prototype.$modelLimit$ = -1;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.modelLimit", {$modelLimit$:$oj$$1$$.$Collection$.prototype.$modelLimit$});
  $oj$$1$$.$Collection$.prototype.offset = 0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.offset", {offset:$oj$$1$$.$Collection$.prototype.offset});
  $oj$$1$$.$Collection$.prototype.$fetchSize$ = -1;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.fetchSize", {$fetchSize$:$oj$$1$$.$Collection$.prototype.$fetchSize$});
  $oj$$1$$.$Collection$.prototype.$sortDirection$ = 1;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.sortDirection", {$sortDirection$:$oj$$1$$.$Collection$.prototype.$sortDirection$});
  $oj$$1$$.$Collection$.prototype.$comparator$ = null;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.comparator", {$comparator$:$oj$$1$$.$Collection$.prototype.$comparator$});
  $oj$$1$$.$Collection$.prototype.$sortSupported$ = !0;
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.sortSupported", {$sortSupported$:$oj$$1$$.$Collection$.prototype.$sortSupported$});
  $oj$$1$$.$Object$.$createSubclass$($oj$$1$$.$Collection$, $oj$$1$$.$Object$, "Collection.Collection");
  $oj$$1$$.$Collection$.prototype.Init = function $$oj$$1$$$$Collection$$$Init$() {
    $oj$$1$$.$Collection$.$superclass$.Init.call(this);
  };
  $oj$$1$$.$Collection$.extend = function $$oj$$1$$$$Collection$$extend$($properties$$5$$) {
    $oj$$1$$.$Collection$.$_justExtending$ = !0;
    var $obj$$51$$ = new $oj$$1$$.$Collection$;
    $oj$$1$$.$Collection$.$_justExtending$ = !1;
    var $Collection$$;
    $Collection$$ = $properties$$5$$ && $properties$$5$$.constructor && $properties$$5$$.hasOwnProperty("constructor") ? $properties$$5$$.constructor : function($models$$1$$, $options$$37$$) {
      $oj$$1$$.$Collection$._init(this, $models$$1$$, $options$$37$$, $properties$$5$$);
    };
    $Collection$$.prototype = $obj$$51$$;
    return $Collection$$.prototype.constructor = $Collection$$;
  };
  $goog$exportPath_$$("Collection.extend", $oj$$1$$.$Collection$.extend, $oj$$1$$);
  $oj$$1$$.$Collection$._init = function $$oj$$1$$$$Collection$$_init$($collection$$3$$, $models$$2$$, $options$$38$$, $properties$$6$$) {
    var $i$$26_prop$$37$$, $modelList_optionlist$$;
    $collection$$3$$.Init();
    $oj$$1$$.$Events$.$Mixin$($collection$$3$$);
    if ($properties$$6$$) {
      for ($i$$26_prop$$37$$ in $properties$$6$$) {
        $properties$$6$$.hasOwnProperty($i$$26_prop$$37$$) && ($collection$$3$$[$i$$26_prop$$37$$] = $properties$$6$$[$i$$26_prop$$37$$]);
      }
    }
    $options$$38$$ = $options$$38$$ || {};
    $modelList_optionlist$$ = ["url", "comparator", "model", $oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$, "modelLimit", "customURL"];
    for ($i$$26_prop$$37$$ = 0;$i$$26_prop$$37$$ < $modelList_optionlist$$.length;$i$$26_prop$$37$$++) {
      $options$$38$$.hasOwnProperty($modelList_optionlist$$[$i$$26_prop$$37$$]) && void 0 !== $options$$38$$[$modelList_optionlist$$[$i$$26_prop$$37$$]] && ($collection$$3$$[$modelList_optionlist$$[$i$$26_prop$$37$$]] = $options$$38$$[$modelList_optionlist$$[$i$$26_prop$$37$$]]);
    }
    void 0 === $collection$$3$$.$_getFetchSize$(null) && $collection$$3$$.$setFetchSize$(-1);
    void 0 === $collection$$3$$.modelLimit && $collection$$3$$.$setModelLimit$(-1);
    $collection$$3$$.hasMore = !1;
    $collection$$3$$.$lruCount$ = 0;
    $collection$$3$$.$_setModels$([]);
    $options$$38$$.parse && ($models$$2$$ = $collection$$3$$.parse($models$$2$$));
    if (null != $models$$2$$ && void 0 !== $models$$2$$) {
      for ($modelList_optionlist$$ = $models$$2$$ instanceof Array ? $models$$2$$ : [$models$$2$$], $i$$26_prop$$37$$ = 0;$i$$26_prop$$37$$ < $modelList_optionlist$$.length;$i$$26_prop$$37$$ += 1) {
        $collection$$3$$.add($modelList_optionlist$$[$i$$26_prop$$37$$], $options$$38$$);
      }
    }
    $collection$$3$$.$_setLength$();
    $properties$$6$$ && $properties$$6$$.initialize && $properties$$6$$.initialize.call($collection$$3$$, $models$$2$$, $options$$38$$);
  };
  $oj$$1$$.$Collection$.prototype.on = function $$oj$$1$$$$Collection$$$on$() {
  };
  $oj$$1$$.$Collection$.prototype.$OnInternal$ = function $$oj$$1$$$$Collection$$$$OnInternal$$() {
  };
  $oj$$1$$.$Collection$.prototype.$TriggerInternal$ = function $$oj$$1$$$$Collection$$$$TriggerInternal$$() {
  };
  $oj$$1$$.$Collection$.prototype.$_setModels$ = function $$oj$$1$$$$Collection$$$$_setModels$$($models$$3$$) {
    this.models = $models$$3$$;
  };
  $oj$$1$$.$Collection$.prototype.$_getModels$ = function $$oj$$1$$$$Collection$$$$_getModels$$() {
    return this.models;
  };
  $oj$$1$$.$Collection$.prototype.$_getModelsLength$ = function $$oj$$1$$$$Collection$$$$_getModelsLength$$() {
    return this.$_getModels$().length;
  };
  $oj$$1$$.$Collection$.prototype.$_overUpperLimit$ = function $$oj$$1$$$$Collection$$$$_overUpperLimit$$($index$$50$$) {
    return $index$$50$$ < this.$_getModelsLength$() || this.$_isVirtual$() && (!this.$_hasTotalResults$() || 0 === this.$_getModelsLength$()) ? !1 : !0;
  };
  $oj$$1$$.$Collection$.prototype.$_hasTotalResults$ = function $$oj$$1$$$$Collection$$$$_hasTotalResults$$() {
    return void 0 !== this.totalResults && null != this.totalResults;
  };
  $oj$$1$$.$Collection$.prototype.$_pushModels$ = function $$oj$$1$$$$Collection$$$$_pushModels$$($model$$9$$) {
    this.$_makeModelHead$($model$$9$$);
    this.$_getModels$().push($model$$9$$);
    this.$lruCount$++;
    $model$$9$$.$SetIndex$(this.$_getModelsLength$() - 1);
  };
  $oj$$1$$.$Collection$.prototype.$_reduceLRU$ = function $$oj$$1$$$$Collection$$$$_reduceLRU$$($removed$$) {
    if ($removed$$) {
      for (var $i$$27$$ = 0;$i$$27$$ < $removed$$.length;$i$$27$$++) {
        $removed$$[$i$$27$$] && this.$lruCount$--;
      }
    }
  };
  $oj$$1$$.$Collection$.prototype.$_spliceModels$ = function $$oj$$1$$$$Collection$$$$_spliceModels$$($start$$6$$, $count$$8$$, $model$$10$$) {
    for (var $i$$28$$ = $start$$6$$;$i$$28$$ < $start$$6$$ + $count$$8$$;$i$$28$$++) {
      this.$_removePrevNext$(this.$_getModels$()[$i$$28$$]);
    }
    void 0 === $model$$10$$ ? this.$_reduceLRU$(this.$_getModels$().splice($start$$6$$, $count$$8$$)) : (this.$_reduceLRU$(this.$_getModels$().splice($start$$6$$, $count$$8$$, $model$$10$$)), this.$_makeModelHead$($model$$10$$));
    0 > this.$lruCount$ && (this.$lruCount$ = 0);
    this.$_realignModelIndices$($start$$6$$);
  };
  $oj$$1$$.$Collection$.prototype.$_getModel$ = function $$oj$$1$$$$Collection$$$$_getModel$$($index$$51$$) {
    return this.$_getModels$()[$index$$51$$];
  };
  $oj$$1$$.$Collection$.prototype.$_realignModelIndices$ = function $$oj$$1$$$$Collection$$$$_realignModelIndices$$($start$$7$$) {
    this.$_getModels$().forEach(function($model$$11$$, $i$$29$$) {
      $i$$29$$ >= $start$$7$$ && $model$$11$$ && $model$$11$$.$SetIndex$($i$$29$$);
    });
  };
  $oj$$1$$.$Collection$.prototype.$_removePrevNext$ = function $$oj$$1$$$$Collection$$$$_removePrevNext$$($model$$12_oldNext$$) {
    if ($model$$12_oldNext$$) {
      var $oldPrev$$ = $model$$12_oldNext$$.$previousModel$;
      $model$$12_oldNext$$ = $model$$12_oldNext$$.$nextModel$;
      $oldPrev$$ ? $oldPrev$$.$SetNext$($model$$12_oldNext$$) : this.head = $model$$12_oldNext$$;
      $model$$12_oldNext$$ ? $model$$12_oldNext$$.$SetPrevious$($oldPrev$$) : this.tail = $oldPrev$$;
    }
  };
  $oj$$1$$.$Collection$.prototype.$_makeModelHead$ = function $$oj$$1$$$$Collection$$$$_makeModelHead$$($model$$13$$) {
    $model$$13$$.$SetNext$(this.head);
    this.head ? this.head.$SetPrevious$($model$$13$$) : this.tail = $model$$13$$;
    $model$$13$$.$SetPrevious$(null);
    this.head = $model$$13$$;
  };
  $oj$$1$$.$Collection$.prototype.$_setModel$ = function $$oj$$1$$$$Collection$$$$_setModel$$($index$$52$$, $model$$14$$) {
    var $oldModel$$ = this.$_getModels$()[$index$$52$$];
    this.$_removePrevNext$($oldModel$$);
    $oldModel$$ || this.$lruCount$++;
    this.$_getModels$()[$index$$52$$] = $model$$14$$;
    $model$$14$$.$SetIndex$($index$$52$$);
    this.$_makeModelHead$($model$$14$$);
  };
  $oj$$1$$.$Collection$.prototype.$_clearOutModels$ = function $$oj$$1$$$$Collection$$$$_clearOutModels$$($n$$2$$) {
    var $current$$ = this.tail, $index$$53$$, $model$$15$$, $i$$30$$ = 0;
    for (this.tail = null;$current$$ && $i$$30$$ < $n$$2$$;) {
      $index$$53$$ = $current$$.index, ($model$$15$$ = this.$_getModels$()[$index$$53$$]) && $model$$15$$.$hasChanged$() ? (this.tail || (this.tail = $current$$), $current$$ = $current$$.$previousModel$) : (this.$lruCount$--, -1 < $index$$53$$ && (this.$_getModels$()[$index$$53$$] = void 0), $current$$.$SetNext$(null), $current$$ = $current$$.$SetPrevious$(null), $i$$30$$++);
    }
    this.tail || (this.tail = $current$$);
    0 > this.$lruCount$ && (this.$lruCount$ = 0);
    0 === this.$lruCount$ && (this.tail = this.head = null);
  };
  $oj$$1$$.$Collection$.prototype.$_resetLRU$ = function $$oj$$1$$$$Collection$$$$_resetLRU$$() {
    this.$lruCount$ = 0;
    this.tail = this.head = null;
  };
  $oj$$1$$.$Collection$.prototype.$_manageLRU$ = function $$oj$$1$$$$Collection$$$$_manageLRU$$($incoming$$) {
    if (this.$_isVirtual$()) {
      var $limit$$ = this.$_getModelLimit$();
      -1 < $limit$$ && this.$lruCount$ + $incoming$$ > $limit$$ && this.$_clearOutModels$(this.$lruCount$ + $incoming$$ - $limit$$);
    }
  };
  $oj$$1$$.$Collection$.prototype.clone = function $$oj$$1$$$$Collection$$$clone$() {
    return this.$_cloneInternal$(!0);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.clone", {clone:$oj$$1$$.$Collection$.prototype.clone});
  $oj$$1$$.$Collection$.prototype.$_cloneInternal$ = function $$oj$$1$$$$Collection$$$$_cloneInternal$$($i$$31_withProperties$$) {
    var $c$$15$$ = new this.constructor, $model$$16$$;
    this.$_isVirtual$() && ($c$$15$$ = this.$_copyProperties$($c$$15$$), $c$$15$$.$_resetModelsToFullLength$());
    if ($i$$31_withProperties$$) {
      for ($i$$31_withProperties$$ = 0;$i$$31_withProperties$$ < this.$_getLength$();$i$$31_withProperties$$ += 1) {
        ($model$$16$$ = this.$_atInternal$($i$$31_withProperties$$, null, !0, !1)) && $c$$15$$.$_addInternal$($model$$16$$.clone(), {at:$i$$31_withProperties$$}, !0, !1);
      }
    }
    return $c$$15$$;
  };
  $oj$$1$$.$Collection$.prototype.$_copyProperties$ = function $$oj$$1$$$$Collection$$$$_copyProperties$$($collection$$4$$) {
    var $props$$2$$ = ["totalResults", "hasMore", $oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$], $prop$$38$$, $i$$32$$;
    for ($i$$32$$ = 0;$i$$32$$ < $props$$2$$.length;$i$$32$$++) {
      $prop$$38$$ = $props$$2$$[$i$$32$$], $collection$$4$$[$prop$$38$$] = this[$prop$$38$$];
    }
    return $collection$$4$$;
  };
  $oj$$1$$.$Collection$.prototype.$_getLength$ = function $$oj$$1$$$$Collection$$$$_getLength$$() {
    return this.length;
  };
  $oj$$1$$.$Collection$.prototype.$_setLength$ = function $$oj$$1$$$$Collection$$$$_setLength$$() {
    var $modelsLen$$ = this.$_getModelsLength$();
    this.length = $modelsLen$$;
    this.$_isVirtual$() || (this.totalResults = $modelsLen$$);
  };
  $oj$$1$$.$Collection$.prototype.$_newModel$ = function $$oj$$1$$$$Collection$$$$_newModel$$($m_validationValue$$, $parse$$1$$, $opt$$1_options$$40$$) {
    var $newModel$$ = null;
    $opt$$1_options$$40$$ = $opt$$1_options$$40$$ || {};
    $opt$$1_options$$40$$.$noparse$ = !$parse$$1$$;
    $newModel$$ = $m_validationValue$$ instanceof $oj$$1$$.$Model$ ? $m_validationValue$$ : this.model ? $oj$$1$$.$Model$.$IsFunction$(this.model) ? new this.model($m_validationValue$$, $opt$$1_options$$40$$) : new this.model.constructor($m_validationValue$$, $opt$$1_options$$40$$) : new $oj$$1$$.$Model$($m_validationValue$$, $opt$$1_options$$40$$);
    return $opt$$1_options$$40$$.validate && $newModel$$.validate && ($m_validationValue$$ = $newModel$$.validate($newModel$$.attributes)) ? ($opt$$1_options$$40$$.validationError = $m_validationValue$$, this.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.INVALID, this, $m_validationValue$$, $opt$$1_options$$40$$), null) : $newModel$$;
  };
  $oj$$1$$.$Collection$.prototype.add = function $$oj$$1$$$$Collection$$$add$($m$$1$$, $options$$41$$) {
    this.$_manageLRU$(1);
    return this.$_addInternal$($m$$1$$, $options$$41$$, !1, ($options$$41$$ || {}).deferred);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.add", {add:$oj$$1$$.$Collection$.prototype.add});
  $oj$$1$$.$Collection$.prototype.$_addInternal$ = function $$oj$$1$$$$Collection$$$$_addInternal$$($i$$33_m$$2$$, $options$$42$$, $fillIn$$, $currentStep_deferred$$2$$) {
    function $mergeAttrs$$($collection$$7$$, $modelToTryAndMerge_sortOpt$$inline_319$$, $modelFoundInCollection$$1$$, $newModel$$3$$, $deferred$$4$$) {
      var $existingModel$$1$$, $modelAdded$$ = null;
      !$force$$ && $merge$$ && $modelFoundInCollection$$1$$ ? ($needSort$$1$$ = $modelFoundInCollection$$1$$.$Merge$($modelToTryAndMerge_sortOpt$$inline_319$$, $collection$$7$$.comparator, $silent$$11$$), $modelAdded$$ = $modelFoundInCollection$$1$$) : ($force$$ || ($existingModel$$1$$ = $collection$$7$$.$_getLocal$($newModel$$3$$)) && $fillIn$$ && $at$$ !== $existingModel$$1$$.index && $oj$$1$$.$Logger$.warn("Duplicate ID fetched or added without merging, the id \x3d " + $existingModel$$1$$.$GetId$()), 
      void 0 === $existingModel$$1$$ ? (void 0 === $at$$ ? ($collection$$7$$.$_pushModels$($newModel$$3$$), $index$$54$$ = $collection$$7$$.$_getModelsLength$() - 1, $collection$$7$$.$_getModel$($index$$54$$).$SetCid$()) : ($index$$54$$ = $at$$, $collection$$7$$.$_isVirtual$() && $fillIn$$ ? $collection$$7$$.$_setModel$($index$$54$$, $newModel$$3$$) : $collection$$7$$.$_spliceModels$($index$$54$$, 0, $newModel$$3$$), $collection$$7$$.$_getModel$($index$$54$$).$SetCid$(), $at$$ += 1), void 0 === $newModel$$3$$.$GetCollection$() && 
      $newModel$$3$$.$SetCollection$($collection$$7$$), $collection$$7$$.$_setLength$(), $collection$$7$$.$_listenToModel$($newModel$$3$$), $added$$ = !0, $modelAdded$$ = $newModel$$3$$) : $modelAdded$$ = $existingModel$$1$$);
      $fillIn$$ && ($options$$42$$ = $options$$42$$ || {}, $options$$42$$.fillIn = !0);
      $needSort$$1$$ && void 0 === $existingModel$$1$$ && !$sort$$ && void 0 === $at$$ && 1 < $collection$$7$$.$_getLength$() && (-1 < $index$$54$$ && ($cid$$1$$ = $collection$$7$$.$_getModel$($index$$54$$).cid), $modelToTryAndMerge_sortOpt$$inline_319$$ = {}, $oj$$1$$.$CollectionUtils$.$copyInto$($modelToTryAndMerge_sortOpt$$inline_319$$, $options$$42$$), $modelToTryAndMerge_sortOpt$$inline_319$$.add = !0, $collection$$7$$.sort($modelToTryAndMerge_sortOpt$$inline_319$$), -1 < $index$$54$$ && ($index$$54$$ = 
      $collection$$7$$.indexOf($collection$$7$$.$getByCid$($cid$$1$$), $deferred$$4$$)));
      $added$$ && ($newModel$$3$$ ? $newModel$$3$$.$TriggerInternal$($silent$$11$$, $oj$$1$$.$Events$.$EventType$.ADD, $newModel$$3$$, $collection$$7$$, $options$$42$$) : $modelFoundInCollection$$1$$.$TriggerInternal$($silent$$11$$, $oj$$1$$.$Events$.$EventType$.ADD, $modelFoundInCollection$$1$$, $collection$$7$$, $options$$42$$));
      return $modelAdded$$;
    }
    function $doAdd$$($collection$$8$$, $model$$17_modelAdded$$1$$, $deferred$$5$$) {
      var $newModel$$4$$ = $collection$$8$$.$_newModel$($model$$17_modelAdded$$1$$, !0, $options$$42$$), $modelToTryAndMerge$$1$$ = null, $modelFoundInCollection$$2$$ = null;
      if (null != $newModel$$4$$) {
        $index$$54$$ = -1;
        $newModel$$4$$.$SetupId$();
        $modelToTryAndMerge$$1$$ = $model$$17_modelAdded$$1$$ instanceof $oj$$1$$.$Model$ ? $model$$17_modelAdded$$1$$ : $newModel$$4$$;
        if ($deferred$$5$$) {
          return $force$$ ? ($mergeAttrs$$($collection$$8$$, $modelToTryAndMerge$$1$$, void 0, $newModel$$4$$, $deferred$$5$$), $oj$$1$$.$Collection$.$_getPromise$().resolve()) : $collection$$8$$.$_getInternal$($modelToTryAndMerge$$1$$, null, $deferred$$5$$, !0).done(function($mod_modInfo$$) {
            $modelFoundInCollection$$2$$ = $mod_modInfo$$.m;
            $mod_modInfo$$ = $mergeAttrs$$($collection$$8$$, $modelToTryAndMerge$$1$$, $modelFoundInCollection$$2$$, $newModel$$4$$, $deferred$$5$$);
            $modelReturnList$$.push($mod_modInfo$$);
          });
        }
        !$force$$ && $merge$$ && ($modelFoundInCollection$$2$$ = $fillIn$$ ? $collection$$8$$.$_getLocal$($modelToTryAndMerge$$1$$) : $collection$$8$$.get($modelToTryAndMerge$$1$$));
        ($model$$17_modelAdded$$1$$ = $mergeAttrs$$($collection$$8$$, $modelToTryAndMerge$$1$$, $modelFoundInCollection$$2$$, $newModel$$4$$, $deferred$$5$$)) && $modelReturnList$$.push($model$$17_modelAdded$$1$$);
      }
    }
    $options$$42$$ = $options$$42$$ || {};
    var $modelArray$$ = [], $at$$ = $options$$42$$.at, $silent$$11$$ = $options$$42$$.silent, $force$$ = $options$$42$$.force, $index$$54$$, $cid$$1$$, $merge$$ = $options$$42$$.merge || !1, $sort$$ = $options$$42$$.sort, $needSort$$1$$ = !0, $added$$ = !1, $modelReturnList$$ = [];
    $i$$33_m$$2$$ instanceof Array ? $modelArray$$ = $i$$33_m$$2$$ : $modelArray$$.push($i$$33_m$$2$$);
    if (!$fillIn$$ && (this.$_isVirtual$() || $currentStep_deferred$$2$$)) {
      var $self$$4$$ = this, $doTask$$ = function $$doTask$$$($index$$55$$) {
        var $defer$$ = $oj$$1$$.$Collection$.$_getPromise$();
        $doAdd$$($self$$4$$, $modelArray$$[$index$$55$$], !0).done(function() {
          $defer$$.resolve($index$$55$$);
        });
        return $defer$$.promise();
      };
      $currentStep_deferred$$2$$ = $doTask$$(0);
      var $nextTask$$ = function $$nextTask$$$($j$$2$$) {
        return $doTask$$($j$$2$$ + 1);
      };
      for ($i$$33_m$$2$$ = 1;$i$$33_m$$2$$ < $modelArray$$.length;$i$$33_m$$2$$++) {
        $currentStep_deferred$$2$$ = $currentStep_deferred$$2$$.then($nextTask$$);
      }
      var $defReturn$$ = $oj$$1$$.$Collection$.$_getPromise$();
      $$$$1$$.when($currentStep_deferred$$2$$).done(function() {
        $defReturn$$.resolve($oj$$1$$.$Collection$.$_returnModels$($modelReturnList$$));
      });
      return $defReturn$$.promise();
    }
    for ($i$$33_m$$2$$ = 0;$i$$33_m$$2$$ < $modelArray$$.length;$i$$33_m$$2$$++) {
      $doAdd$$(this, $modelArray$$[$i$$33_m$$2$$], !1);
    }
    return $oj$$1$$.$Collection$.$_returnModels$($modelReturnList$$);
  };
  $oj$$1$$.$Collection$.$_returnModels$ = function $$oj$$1$$$$Collection$$$_returnModels$$($modelReturnList$$1$$) {
    return 1 === $modelReturnList$$1$$.length ? $modelReturnList$$1$$[0] : $modelReturnList$$1$$;
  };
  $oj$$1$$.$Collection$.prototype.$_hasComparator$ = function $$oj$$1$$$$Collection$$$$_hasComparator$$() {
    var $comparator$$2$$ = this.comparator;
    return void 0 !== $comparator$$2$$ && null !== $comparator$$2$$;
  };
  $oj$$1$$.$Collection$.prototype.sort = function $$oj$$1$$$$Collection$$$sort$($options$$43_totalResults$$) {
    $options$$43_totalResults$$ = $options$$43_totalResults$$ || {};
    var $silent$$12$$ = $options$$43_totalResults$$.silent, $comparator$$3$$ = this.comparator, $self$$5$$;
    this.$_hasComparator$() && (this.$_isVirtual$() && this.$_hasMore$() ? ($options$$43_totalResults$$ = this.totalResults, void 0 !== $options$$43_totalResults$$ ? this.$_setModels$(Array($options$$43_totalResults$$)) : (this.$_setModels$([]), this.$_resetLRU$(), this.$_setLength$())) : ($self$$5$$ = this, this.$_getModels$().sort(function($a$$57$$, $b$$26$$) {
      return $oj$$1$$.$Collection$.$SortFunc$($a$$57$$, $b$$26$$, $comparator$$3$$, $self$$5$$, $self$$5$$);
    }), this.$_realignModelIndices$(0), this.$TriggerInternal$($silent$$12$$, $oj$$1$$.$Events$.$EventType$.SORT, this, $options$$43_totalResults$$.add ? {add:!0} : null, null)));
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.sort", {sort:$oj$$1$$.$Collection$.prototype.sort});
  $oj$$1$$.$Collection$.$_getKey$ = function $$oj$$1$$$$Collection$$$_getKey$$($val$$17$$, $attr$$8$$) {
    return $val$$17$$ instanceof $oj$$1$$.$Model$ ? $val$$17$$.get($attr$$8$$) : $oj$$1$$.$Model$.$IsFunction$($val$$17$$[$attr$$8$$]) ? $val$$17$$[$attr$$8$$]() : $val$$17$$[$attr$$8$$];
  };
  $oj$$1$$.$Collection$.$SortFunc$ = function $$oj$$1$$$$Collection$$$SortFunc$$($a$$58$$, $b$$27$$, $attrs$$9_comparator$$4$$, $collection$$9$$, $self$$6$$) {
    var $attrs1_keyA$$, $keyB_retVal$$2$$, $i$$34$$;
    if ($oj$$1$$.$Model$.$IsFunction$($attrs$$9_comparator$$4$$)) {
      if (1 === $attrs$$9_comparator$$4$$.length) {
        $attrs1_keyA$$ = $attrs$$9_comparator$$4$$.call($self$$6$$, $a$$58$$);
        $keyB_retVal$$2$$ = $attrs$$9_comparator$$4$$.call($self$$6$$, $b$$27$$);
        $attrs1_keyA$$ = $oj$$1$$.$StringUtils$.$isString$($attrs1_keyA$$) ? $attrs1_keyA$$.split(",") : [$attrs1_keyA$$];
        var $attrs2$$ = $oj$$1$$.$StringUtils$.$isString$($keyB_retVal$$2$$) ? $keyB_retVal$$2$$.split(",") : [$keyB_retVal$$2$$];
        for ($i$$34$$ = 0;$i$$34$$ < $attrs1_keyA$$.length;$i$$34$$++) {
          if ($keyB_retVal$$2$$ = $oj$$1$$.$Collection$.$_compareKeys$($attrs1_keyA$$[$i$$34$$], $attrs2$$[$i$$34$$], $collection$$9$$.sortDirection), 0 !== $keyB_retVal$$2$$) {
            return $keyB_retVal$$2$$;
          }
        }
      }
      return $attrs$$9_comparator$$4$$.call($self$$6$$, $a$$58$$, $b$$27$$);
    }
    if ($oj$$1$$.$StringUtils$.$isString$($attrs$$9_comparator$$4$$)) {
      for ($attrs$$9_comparator$$4$$ = $attrs$$9_comparator$$4$$.split(","), $i$$34$$ = 0;$i$$34$$ < $attrs$$9_comparator$$4$$.length;$i$$34$$++) {
        if ($attrs1_keyA$$ = $oj$$1$$.$Collection$.$_getKey$($a$$58$$, $attrs$$9_comparator$$4$$[$i$$34$$]), $keyB_retVal$$2$$ = $oj$$1$$.$Collection$.$_getKey$($b$$27$$, $attrs$$9_comparator$$4$$[$i$$34$$]), $keyB_retVal$$2$$ = $oj$$1$$.$Collection$.$_compareKeys$($attrs1_keyA$$, $keyB_retVal$$2$$, $collection$$9$$.sortDirection), 0 !== $keyB_retVal$$2$$) {
          return $keyB_retVal$$2$$;
        }
      }
    }
    return 0;
  };
  $oj$$1$$.$Collection$.prototype.$sortedIndex$ = function $$oj$$1$$$$Collection$$$$sortedIndex$$($model$$18$$, $comparator$$5$$) {
    var $comp$$ = $comparator$$5$$ ? $comparator$$5$$ : this.comparator, $self$$7$$;
    if (!$comp$$) {
      return-1;
    }
    this.$_throwErrIfVirtual$("sortedIndex");
    $self$$7$$ = this;
    return $oj$$1$$.$Collection$.$_find$(this.$_getModels$(), $model$$18$$, function($a$$59$$, $b$$28$$) {
      var $attrs1$$1_keyA$$1$$, $attrs2$$1_keyB$$1$$;
      if ($oj$$1$$.$Model$.$IsFunction$($comp$$)) {
        if (1 === $comp$$.length) {
          $attrs1$$1_keyA$$1$$ = $comp$$.call($self$$7$$, $a$$59$$);
          $attrs2$$1_keyB$$1$$ = $comp$$.call($self$$7$$, $b$$28$$);
          $attrs1$$1_keyA$$1$$ = $oj$$1$$.$StringUtils$.$isString$($attrs1$$1_keyA$$1$$) ? $attrs1$$1_keyA$$1$$.split(",") : [$attrs1$$1_keyA$$1$$];
          $attrs2$$1_keyB$$1$$ = $oj$$1$$.$StringUtils$.$isString$($attrs2$$1_keyB$$1$$) ? $attrs2$$1_keyB$$1$$.split(",") : [$attrs2$$1_keyB$$1$$];
          var $retVal$$3$$, $i$$35$$;
          for ($i$$35$$ = 0;$i$$35$$ < $attrs1$$1_keyA$$1$$.length;$i$$35$$++) {
            if ($retVal$$3$$ = $oj$$1$$.$Collection$.$_compareKeys$($attrs1$$1_keyA$$1$$[$i$$35$$], $attrs2$$1_keyB$$1$$[$i$$35$$], $self$$7$$.sortDirection), 0 !== $retVal$$3$$) {
              return $retVal$$3$$;
            }
          }
        }
        return $comp$$.call($self$$7$$, $a$$59$$, $b$$28$$);
      }
      return $oj$$1$$.$StringUtils$.$isString$($comp$$) ? ($attrs1$$1_keyA$$1$$ = $a$$59$$.get($comp$$), $attrs2$$1_keyB$$1$$ = $b$$28$$.get($comp$$), $oj$$1$$.$Collection$.$_compareKeys$($attrs1$$1_keyA$$1$$, $attrs2$$1_keyB$$1$$, $self$$7$$.sortDirection)) : 0;
    });
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.sortedIndex", {$sortedIndex$:$oj$$1$$.$Collection$.prototype.$sortedIndex$});
  $oj$$1$$.$Collection$.$_find$ = function $$oj$$1$$$$Collection$$$_find$$($modelArray$$1$$, $model$$19$$, $comparator$$6$$) {
    function $search$$($min$$, $max$$) {
      var $cid$$2_mid$$, $id$$4$$;
      if ($min$$ > $max$$) {
        return-1;
      }
      $cid$$2_mid$$ = $model$$19$$.$GetCid$();
      $id$$4$$ = $model$$19$$.$GetId$();
      if ($modelArray$$1$$[$min$$].$Match$($id$$4$$, $cid$$2_mid$$)) {
        return $min$$;
      }
      if ($modelArray$$1$$[$max$$].$Match$($id$$4$$, $cid$$2_mid$$)) {
        return $max$$;
      }
      $cid$$2_mid$$ = Math.floor(($max$$ + $min$$) / 2);
      return-1 === $comparator$$6$$($modelArray$$1$$[$cid$$2_mid$$], $model$$19$$) ? $search$$($min$$ + 1, $cid$$2_mid$$) : 1 === $comparator$$6$$($modelArray$$1$$[$cid$$2_mid$$], $model$$19$$) ? $search$$($cid$$2_mid$$, $max$$ - 1) : $cid$$2_mid$$;
    }
    return $search$$(0, $modelArray$$1$$.length - 1);
  };
  $oj$$1$$.$Collection$.$_compareKeys$ = function $$oj$$1$$$$Collection$$$_compareKeys$$($keyA$$2$$, $keyB$$2$$, $sortDirection$$) {
    if (-1 === $sortDirection$$) {
      if ($keyA$$2$$ < $keyB$$2$$) {
        return 1;
      }
      if ($keyB$$2$$ < $keyA$$2$$) {
        return-1;
      }
    } else {
      if ($keyA$$2$$ > $keyB$$2$$) {
        return 1;
      }
      if ($keyB$$2$$ > $keyA$$2$$) {
        return-1;
      }
    }
    return 0;
  };
  $oj$$1$$.$Collection$.prototype.unshift = function $$oj$$1$$$$Collection$$$unshift$($m$$3$$, $options$$44$$) {
    var $opt$$3$$ = {};
    $oj$$1$$.$CollectionUtils$.$copyInto$($opt$$3$$, $options$$44$$ || {});
    $opt$$3$$.at || ($opt$$3$$.at = 0);
    this.$_manageLRU$(1);
    return this.$_addInternal$($m$$3$$, $opt$$3$$, !1, $opt$$3$$.deferred);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.unshift", {unshift:$oj$$1$$.$Collection$.prototype.unshift});
  $oj$$1$$.$Collection$.prototype.shift = function $$oj$$1$$$$Collection$$$shift$($options$$45$$) {
    var $deferred$$6$$ = this.$_getDeferred$($options$$45$$);
    if (this.$_isVirtual$() || $deferred$$6$$) {
      var $self$$8$$ = this;
      return this.at(0, $options$$45$$).then(function($model$$20$$) {
        return $self$$8$$.$_removeInternal$($model$$20$$, 0, $options$$45$$);
      });
    }
    return this.$_removeInternal$(this.at(0), 0, $options$$45$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.shift", {shift:$oj$$1$$.$Collection$.prototype.shift});
  $oj$$1$$.$Collection$.prototype.$initial$ = function $$oj$$1$$$$Collection$$$$initial$$($n$$3$$) {
    void 0 === $n$$3$$ && ($n$$3$$ = 1);
    var $array$$9$$ = [], $i$$36$$;
    for ($i$$36$$ = 0;$i$$36$$ < this.$_getLength$() - $n$$3$$;$i$$36$$ += 1) {
      $array$$9$$.push(this.at($i$$36$$));
    }
    return $array$$9$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.initial", {$initial$:$oj$$1$$.$Collection$.prototype.$initial$});
  $oj$$1$$.$Collection$.prototype.$_getDeferred$ = function $$oj$$1$$$$Collection$$$$_getDeferred$$($options$$46$$) {
    return($options$$46$$ || {}).deferred;
  };
  $oj$$1$$.$Collection$.prototype.last = function $$oj$$1$$$$Collection$$$last$($n$$4$$, $options$$47$$) {
    var $deferred$$7_i$$37$$ = this.$_getDeferred$($options$$47$$);
    void 0 === $n$$4$$ && ($n$$4$$ = 1);
    if (1 === $n$$4$$) {
      var $len$$1$$ = this.$_getModelsLength$();
      0 === $len$$1$$ && ($len$$1$$ = $n$$4$$);
      return 0 < $len$$1$$ ? this.at($len$$1$$ - 1, $deferred$$7_i$$37$$) : null;
    }
    var $array$$10_start$$8$$ = [], $len$$1$$ = this.$_getLength$();
    if ($deferred$$7_i$$37$$ || this.$_isVirtual$()) {
      return $array$$10_start$$8$$ = $len$$1$$ - $n$$4$$, 0 > $array$$10_start$$8$$ && ($array$$10_start$$8$$ = 0), 0 === $len$$1$$ && ($len$$1$$ = $n$$4$$), this.$IterativeAt$($array$$10_start$$8$$, $len$$1$$);
    }
    for ($deferred$$7_i$$37$$ = $len$$1$$ - $n$$4$$;$deferred$$7_i$$37$$ < $len$$1$$;$deferred$$7_i$$37$$ += 1) {
      $array$$10_start$$8$$.push(this.at($deferred$$7_i$$37$$));
    }
    return $array$$10_start$$8$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.last", {last:$oj$$1$$.$Collection$.prototype.last});
  $oj$$1$$.$Collection$.prototype.$IterativeAt$ = function $$oj$$1$$$$Collection$$$$IterativeAt$$($start$$9$$, $end$$3$$) {
    function $nextTask$$1$$($j$$3$$) {
      return $doTask$$1$$($j$$3$$ + 1);
    }
    function $doTask$$1$$($index$$56$$) {
      var $defer$$1$$ = $oj$$1$$.$Collection$.$_getPromise$();
      $self$$9$$.$_deferredAt$($index$$56$$, null).done(function($model$$21$$) {
        $array$$11$$.push($model$$21$$);
        $defer$$1$$.resolve($index$$56$$);
      });
      return $defer$$1$$.promise();
    }
    var $array$$11$$ = [], $i$$38$$, $self$$9$$ = this, $currentStep$$1$$ = $doTask$$1$$($start$$9$$);
    for ($i$$38$$ = $start$$9$$ + 1;$i$$38$$ < $end$$3$$;$i$$38$$++) {
      $currentStep$$1$$ = $currentStep$$1$$.then($nextTask$$1$$);
    }
    return $$$$1$$.when($currentStep$$1$$).then(function() {
      return $array$$11$$;
    });
  };
  $oj$$1$$.$Collection$.prototype.$_getDefaultFetchSize$ = function $$oj$$1$$$$Collection$$$$_getDefaultFetchSize$$($n$$5$$) {
    return void 0 === $n$$5$$ || null === $n$$5$$ ? this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] : $n$$5$$;
  };
  $oj$$1$$.$Collection$.prototype.$_calculateNextStart$ = function $$oj$$1$$$$Collection$$$$_calculateNextStart$$() {
    var $lastFetch$$ = this.lastFetchCount;
    if (void 0 === $lastFetch$$ || null === $lastFetch$$) {
      $lastFetch$$ = this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$];
    }
    return void 0 === this.offset || null === this.offset ? $lastFetch$$ : this.offset + $lastFetch$$;
  };
  $oj$$1$$.$Collection$.prototype.next = function $$oj$$1$$$$Collection$$$next$($n$$6$$, $options$$48$$) {
    $options$$48$$ = $options$$48$$ || {};
    $options$$48$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] = this.$_getDefaultFetchSize$($n$$6$$);
    var $start$$10$$ = this.$_calculateNextStart$(), $length$$12$$ = this.$_getLength$();
    if (0 === $length$$12$$ && 0 < $options$$48$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$]) {
      $start$$10$$ = 0;
    } else {
      if ($start$$10$$ >= $length$$12$$) {
        return $options$$48$$.success && $options$$48$$.success.call($oj$$1$$.$Model$.$GetContext$($options$$48$$, this), this, null, $options$$48$$), null;
      }
    }
    $options$$48$$.startIndex = $start$$10$$;
    return this.fetch($options$$48$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.next", {next:$oj$$1$$.$Collection$.prototype.next});
  $oj$$1$$.$Collection$.prototype.$_calculatePrevStart$ = function $$oj$$1$$$$Collection$$$$_calculatePrevStart$$($n$$7$$) {
    return void 0 === this.offset || null === this.offset ? 0 : this.offset - $n$$7$$;
  };
  $oj$$1$$.$Collection$.prototype.previous = function $$oj$$1$$$$Collection$$$previous$($n$$8$$, $options$$49$$) {
    $options$$49$$ = $options$$49$$ || {};
    if (0 === this.offset) {
      return $options$$49$$.success && this.lastFetchCount && $options$$49$$.success.call($oj$$1$$.$Model$.$GetContext$($options$$49$$, this), this, null, $options$$49$$), null;
    }
    $options$$49$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] = this.$_getDefaultFetchSize$($n$$8$$);
    var $start$$11$$ = this.$_calculatePrevStart$($options$$49$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$]);
    0 > $start$$11$$ && ($options$$49$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] = this.offset, $start$$11$$ = 0);
    $options$$49$$.startIndex = $start$$11$$;
    return this.fetch($options$$49$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.previous", {previous:$oj$$1$$.$Collection$.prototype.previous});
  $oj$$1$$.$Collection$.prototype.$setModelLimit$ = function $$oj$$1$$$$Collection$$$$setModelLimit$$($n$$9$$) {
    this.modelLimit = $n$$9$$;
    this.$_manageLRU$(0);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.setModelLimit", {$setModelLimit$:$oj$$1$$.$Collection$.prototype.$setModelLimit$});
  $oj$$1$$.$Collection$.prototype.$_getModelLimit$ = function $$oj$$1$$$$Collection$$$$_getModelLimit$$() {
    return this.modelLimit;
  };
  $oj$$1$$.$Collection$.prototype.$setFetchSize$ = function $$oj$$1$$$$Collection$$$$setFetchSize$$($n$$10$$) {
    this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] = $n$$10$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.setFetchSize", {$setFetchSize$:$oj$$1$$.$Collection$.prototype.$setFetchSize$});
  $oj$$1$$.$Collection$.prototype.$rest$ = function $$oj$$1$$$$Collection$$$$rest$$($n$$11$$, $options$$50$$) {
    var $deferred$$8_i$$39$$ = this.$_getDeferred$($options$$50$$);
    void 0 === $n$$11$$ && ($n$$11$$ = 1);
    var $array$$12$$ = [];
    if (this.$_isVirtual$() || $deferred$$8_i$$39$$) {
      return this.$IterativeAt$($n$$11$$, this.$_getLength$());
    }
    for ($deferred$$8_i$$39$$ = $n$$11$$;$deferred$$8_i$$39$$ < this.$_getLength$();$deferred$$8_i$$39$$ += 1) {
      $array$$12$$.push(this.at($deferred$$8_i$$39$$));
    }
    return $array$$12$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.rest", {$rest$:$oj$$1$$.$Collection$.prototype.$rest$});
  $oj$$1$$.$Collection$.prototype.remove = function $$oj$$1$$$$Collection$$$remove$($m$$4$$, $options$$51$$) {
    $options$$51$$ = $options$$51$$ || {};
    var $modArray$$ = [], $mod$$1$$;
    $m$$4$$ instanceof Array ? $modArray$$ = $m$$4$$ : $modArray$$.push($m$$4$$);
    for ($mod$$1$$ = $modArray$$.length - 1;0 <= $mod$$1$$;$mod$$1$$ -= 1) {
      this.$_removeInternal$($modArray$$[$mod$$1$$], -1, $options$$51$$);
    }
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.remove", {remove:$oj$$1$$.$Collection$.prototype.remove});
  $oj$$1$$.$Collection$.prototype.$_removeInternal$ = function $$oj$$1$$$$Collection$$$$_removeInternal$$($modInfo$$1_model$$22$$, $index$$57$$, $options$$52$$) {
    $options$$52$$ = $options$$52$$ || {};
    $modInfo$$1_model$$22$$ = -1 == $index$$57$$ ? this.$_getInternal$($modInfo$$1_model$$22$$) : $oj$$1$$.$Collection$.$_getModinfo$($index$$57$$, $modInfo$$1_model$$22$$);
    var $silent$$13$$ = $options$$52$$.silent;
    $index$$57$$ = $modInfo$$1_model$$22$$.index;
    if (-1 < $index$$57$$) {
      var $mod$$2$$ = $modInfo$$1_model$$22$$.m;
      void 0 !== $mod$$2$$ && $mod$$2$$.$GetCollection$() === this && $mod$$2$$.$SetCollection$(null);
      this.$_spliceModels$($index$$57$$, 1);
      this.$_setLength$();
      var $opt$$5$$ = {};
      $oj$$1$$.$CollectionUtils$.$copyInto$($opt$$5$$, $options$$52$$);
      $opt$$5$$.index = $index$$57$$;
      void 0 !== $mod$$2$$ && $mod$$2$$.$TriggerInternal$($silent$$13$$, $oj$$1$$.$Events$.$EventType$.REMOVE, $mod$$2$$, this, $opt$$5$$);
      this.$_unlistenToModel$($mod$$2$$);
    }
    return $modInfo$$1_model$$22$$.m;
  };
  $oj$$1$$.$Collection$.prototype.$_unlistenToModel$ = function $$oj$$1$$$$Collection$$$$_unlistenToModel$$($m$$5$$) {
    void 0 !== $m$$5$$ && $m$$5$$.off(null, null, this);
  };
  $oj$$1$$.$Collection$.prototype.$_listenToModel$ = function $$oj$$1$$$$Collection$$$$_listenToModel$$($m$$6$$) {
    $m$$6$$.$OnInternal$($oj$$1$$.$Events$.$EventType$.ALL, this.$_modelEvent$, this, !1, !0);
  };
  $oj$$1$$.$Collection$.prototype.$_modelEvent$ = function $$oj$$1$$$$Collection$$$$_modelEvent$$($event$$13$$, $model$$23$$, $collection$$10$$, $options$$53$$) {
    $event$$13$$ === $oj$$1$$.$Events$.$EventType$.DESTROY && this.remove($model$$23$$);
    void 0 !== $collection$$10$$ && $collection$$10$$ instanceof $oj$$1$$.$Collection$ && $collection$$10$$ !== this || (Array.prototype.slice.call(arguments), this.$TriggerInternal$($options$$53$$ && $options$$53$$.silent, $event$$13$$, $model$$23$$, $collection$$10$$, $options$$53$$));
  };
  $oj$$1$$.$Collection$.prototype.refresh = function $$oj$$1$$$$Collection$$$refresh$($options$$54$$) {
    $options$$54$$ = $options$$54$$ || {};
    var $dfd$$ = $oj$$1$$.$Collection$.$_getPromise$();
    if (!this.$_isVirtual$()) {
      this.reset(null, {silent:!0});
      var $self$$12$$ = this;
      this.fetch({success:function($collection$$11$$, $response$$2$$, $options$$55$$) {
        this.$TriggerInternal$(void 0 !== $options$$55$$.silent && $options$$55$$.silent, $oj$$1$$.$Events$.$EventType$.REFRESH, this, $options$$55$$, null);
        $dfd$$.resolve($collection$$11$$, $response$$2$$, $options$$55$$);
      }, error:function($xhr$$6$$, $status$$5$$, $error$$4$$) {
        $dfd$$.reject($self$$12$$, $xhr$$6$$, $status$$5$$, $error$$4$$);
      }});
      return $dfd$$;
    }
    var $totalResults$$1$$ = this.totalResults;
    void 0 !== $totalResults$$1$$ && (this.$_setModels$(Array($totalResults$$1$$)), this.$_resetLRU$());
    this.$TriggerInternal$(void 0 !== $options$$54$$.silent && $options$$54$$.silent, $oj$$1$$.$Events$.$EventType$.REFRESH, this, $options$$54$$, null);
    return $dfd$$.resolve();
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.refresh", {refresh:$oj$$1$$.$Collection$.prototype.refresh});
  $oj$$1$$.$Collection$.prototype.reset = function $$oj$$1$$$$Collection$$$reset$($data$$34$$, $options$$56$$) {
    $options$$56$$ = $options$$56$$ || {};
    $options$$56$$.previousModels = this.$_getModels$();
    this.$_getModels$().forEach(function($model$$24$$) {
      $model$$24$$ && (this.$_unlistenToModel$($model$$24$$), $model$$24$$.$SetCollection$(null));
    }, this);
    this.$_setModels$([]);
    this.$_resetLRU$();
    if ($data$$34$$) {
      if ($options$$56$$.parse && ($data$$34$$ = this.parse($data$$34$$)), $data$$34$$ instanceof Array) {
        this.$_manageLRU$($data$$34$$.length);
        for (var $i$$40$$ = 0;$i$$40$$ < $data$$34$$.length;$i$$40$$ += 1) {
          this.$_addInternal$($data$$34$$[$i$$40$$], $options$$56$$, !0, !1);
        }
      } else {
        this.$_manageLRU$(1), this.$_addInternal$($data$$34$$, $options$$56$$, !0, !1);
      }
    }
    this.$_setLength$();
    this.$TriggerInternal$(void 0 !== $options$$56$$.silent && $options$$56$$.silent, $oj$$1$$.$Events$.$EventType$.RESET, this, $options$$56$$, null);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.reset", {reset:$oj$$1$$.$Collection$.prototype.reset});
  $oj$$1$$.$Collection$.prototype.at = function $$oj$$1$$$$Collection$$$at$($index$$58$$, $options$$57$$) {
    return this.$_atInternal$($index$$58$$, $options$$57$$, !1, this.$_getDeferred$($options$$57$$));
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.at", {at:$oj$$1$$.$Collection$.prototype.at});
  $oj$$1$$.$Collection$.prototype.$_atInternal$ = function $$oj$$1$$$$Collection$$$$_atInternal$$($index$$59$$, $options$$58$$, $local$$, $deferred$$10$$) {
    return 0 > $index$$59$$ || this.$_overUpperLimit$($index$$59$$) ? null : $local$$ || !this.$_isVirtual$() && !$deferred$$10$$ ? this.$_getModel$($index$$59$$) : this.$_deferredAt$($index$$59$$, $options$$58$$).promise();
  };
  $oj$$1$$.$Collection$.prototype.$_deferredAt$ = function $$oj$$1$$$$Collection$$$$_deferredAt$$($index$$60$$, $options$$59$$) {
    function $resp$$3$$() {
      $dfd$$1$$.resolve($self$$13$$.$_getModel$($index$$60$$));
    }
    var $self$$13$$ = this, $dfd$$1$$ = $oj$$1$$.$Collection$.$_getPromise$(), $model$$25_opts$$5$$ = this.$_getModel$($index$$60$$);
    return void 0 === $model$$25_opts$$5$$ ? ($model$$25_opts$$5$$ = {}, $oj$$1$$.$CollectionUtils$.$copyInto$($model$$25_opts$$5$$, $options$$59$$ || {}), $model$$25_opts$$5$$.context = this, $model$$25_opts$$5$$.startIndex = $index$$60$$, $model$$25_opts$$5$$.error = function $$model$$25_opts$$5$$$error$($collection$$12$$, $error$$5$$) {
      $dfd$$1$$.reject($error$$5$$);
    }, this.$_fetchInternal$($model$$25_opts$$5$$, -1, !1).then($resp$$3$$, function($e$$21$$) {
      $dfd$$1$$.reject($e$$21$$);
    }), $dfd$$1$$) : $oj$$1$$.$Collection$.$_getPromise$().resolve($model$$25_opts$$5$$);
  };
  $oj$$1$$.$Collection$.prototype.$getByCid$ = function $$oj$$1$$$$Collection$$$$getByCid$$($clientId$$) {
    var $foundModel$$ = null;
    this.$_getModels$().some(function($model$$26$$) {
      return void 0 !== $model$$26$$ && $clientId$$ === $model$$26$$.cid ? ($foundModel$$ = $model$$26$$, !0) : !1;
    });
    if ($foundModel$$) {
      return $foundModel$$;
    }
    if (this.$_isVirtual$()) {
      throw Error("Not found locally and not supported by server for virtual collections");
    }
    return null;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.getByCid", {$getByCid$:$oj$$1$$.$Collection$.prototype.$getByCid$});
  $oj$$1$$.$Collection$.prototype.get = function $$oj$$1$$$$Collection$$$get$($id$$5$$, $options$$61$$) {
    var $internalGet$$ = this.$_getInternal$($id$$5$$, $options$$61$$, this.$_getDeferred$($options$$61$$));
    if ($internalGet$$) {
      if ($$$$1$$.isFunction($internalGet$$.promise)) {
        return $internalGet$$.then(function($modInfo$$2$$) {
          return $modInfo$$2$$.m;
        });
      }
      if (this.$_isVirtual$()) {
        return $oj$$1$$.$Collection$.$_getPromise$().resolve($internalGet$$.m);
      }
      if ($internalGet$$.hasOwnProperty("m")) {
        return $internalGet$$.m;
      }
    }
    return null;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.get", {get:$oj$$1$$.$Collection$.prototype.get});
  $oj$$1$$.$Collection$.prototype.$_getLocal$ = function $$oj$$1$$$$Collection$$$$_getLocal$$($id$$6_internalGet$$1$$) {
    return($id$$6_internalGet$$1$$ = this.$_getLocalInternal$($id$$6_internalGet$$1$$)) ? $id$$6_internalGet$$1$$.m : null;
  };
  $oj$$1$$.$Collection$.prototype.$_getLocalInternal$ = function $$oj$$1$$$$Collection$$$$_getLocalInternal$$($id$$7$$) {
    var $cid$$3$$ = $id$$7$$;
    $id$$7$$ instanceof $oj$$1$$.$Model$ ? ($cid$$3$$ = $id$$7$$.$GetCid$(), $id$$7$$ = $id$$7$$.$GetId$()) : void 0 !== $id$$7$$ && null != $id$$7$$ && void 0 !== $id$$7$$.id && ($id$$7$$ = $id$$7$$.id);
    var $foundObj$$ = null;
    this.$_getModels$().some(function($model$$27$$, $i$$41$$) {
      return void 0 !== $model$$27$$ && $model$$27$$.$Match$($id$$7$$, $cid$$3$$) ? ($foundObj$$ = $oj$$1$$.$Collection$.$_getModinfo$($i$$41$$, $model$$27$$), !0) : !1;
    });
    return $foundObj$$ ? $foundObj$$ : $oj$$1$$.$Collection$.$_getModinfo$(-1, void 0);
  };
  $oj$$1$$.$Collection$.prototype.$_getInternal$ = function $$oj$$1$$$$Collection$$$$_getInternal$$($id$$8$$, $options$$62_undefinedModInfo$$, $deferred$$12$$, $fillIn$$1$$) {
    var $cid$$4$$ = $id$$8$$;
    void 0 === $fillIn$$1$$ && ($fillIn$$1$$ = !1);
    $id$$8$$ instanceof $oj$$1$$.$Model$ ? ($cid$$4$$ = $id$$8$$.$GetCid$(), $id$$8$$ = $id$$8$$.$GetId$()) : void 0 !== $id$$8$$ && null != $id$$8$$ && void 0 !== $id$$8$$.id && ($id$$8$$ = $id$$8$$.id);
    var $foundObj$$1$$ = null;
    this.$_getModels$().some(function($model$$28$$, $i$$42$$) {
      if (void 0 !== $model$$28$$ && $model$$28$$.$Match$($id$$8$$, $cid$$4$$)) {
        var $retObj$$5$$ = $oj$$1$$.$Collection$.$_getModinfo$($i$$42$$, $model$$28$$);
        if ($deferred$$12$$) {
          return $foundObj$$1$$ = $oj$$1$$.$Collection$.$_getPromise$().resolve($retObj$$5$$), !0;
        }
        $foundObj$$1$$ = $retObj$$5$$;
        return!0;
      }
      return!1;
    });
    if ($foundObj$$1$$) {
      return $foundObj$$1$$;
    }
    if (this.$_isVirtual$()) {
      if (void 0 === $id$$8$$ && void 0 !== $cid$$4$$) {
        var $dfd$$2$$ = $oj$$1$$.$Collection$.$_getPromise$();
        return $dfd$$2$$.resolve($oj$$1$$.$Collection$.$_getModinfo$(-1, void 0));
      }
      var $dfd$$2$$ = $oj$$1$$.$Collection$.$_getPromise$(), $self$$14$$ = this, $opts$$6$$ = {};
      $oj$$1$$.$CollectionUtils$.$copyInto$($opts$$6$$, $options$$62_undefinedModInfo$$ || {});
      $opts$$6$$.context = this;
      $opts$$6$$.startID = $id$$8$$;
      $opts$$6$$.error = function $$opts$$6$$$error$($collection$$13$$, $error$$6$$) {
        $dfd$$2$$.reject($error$$6$$);
      };
      this.$_fetchInternal$($opts$$6$$, -1, $fillIn$$1$$).then(function($index$$61_resp$$5$$) {
        if (null != $index$$61_resp$$5$$) {
          $index$$61_resp$$5$$ = $self$$14$$.$_getOffset$();
          var $model$$29$$ = $self$$14$$.$_getModel$($index$$61_resp$$5$$);
          void 0 !== $model$$29$$ && $model$$29$$.$Match$($id$$8$$, $cid$$4$$) ? $dfd$$2$$.resolve($oj$$1$$.$Collection$.$_getModinfo$($index$$61_resp$$5$$, $model$$29$$)) : $dfd$$2$$.resolve($oj$$1$$.$Collection$.$_getModinfo$(-1, void 0));
        } else {
          $dfd$$2$$.resolve($oj$$1$$.$Collection$.$_getModinfo$(-1, void 0));
        }
      }, function($e$$22$$) {
        $dfd$$2$$.reject($e$$22$$);
      });
      return $dfd$$2$$;
    }
    $options$$62_undefinedModInfo$$ = $oj$$1$$.$Collection$.$_getModinfo$(-1, void 0);
    return $deferred$$12$$ ? $oj$$1$$.$Collection$.$_getPromise$().resolve($options$$62_undefinedModInfo$$) : $options$$62_undefinedModInfo$$;
  };
  $oj$$1$$.$Collection$.$_getPromise$ = function $$oj$$1$$$$Collection$$$_getPromise$$() {
    return $$$$1$$.Deferred();
  };
  $oj$$1$$.$Collection$.$_getModinfo$ = function $$oj$$1$$$$Collection$$$_getModinfo$$($index$$62$$, $model$$30$$) {
    return{index:$index$$62$$, m:$model$$30$$};
  };
  $oj$$1$$.$Collection$.prototype.parse = function $$oj$$1$$$$Collection$$$parse$($response$$3$$) {
    var $prop$$39$$;
    if ($response$$3$$ instanceof Array || !$response$$3$$) {
      return $response$$3$$;
    }
    for ($prop$$39$$ in $response$$3$$) {
      if ($response$$3$$.hasOwnProperty($prop$$39$$) && $response$$3$$[$prop$$39$$] instanceof Array) {
        return $response$$3$$[$prop$$39$$];
      }
    }
    return $response$$3$$;
  };
  $oj$$1$$.$Collection$.prototype.$setRangeLocal$ = function $$oj$$1$$$$Collection$$$$setRangeLocal$$($start$$12$$, $count$$9$$) {
    var $actual_deferredObj_modelLimit$$ = this.$_getLocalRange$($start$$12$$, $count$$9$$);
    if ($actual_deferredObj_modelLimit$$.start === $start$$12$$ && $actual_deferredObj_modelLimit$$.count === $count$$9$$) {
      return $oj$$1$$.$Collection$.$_getPromise$().resolve($actual_deferredObj_modelLimit$$.start, $actual_deferredObj_modelLimit$$.count);
    }
    $actual_deferredObj_modelLimit$$ = this.$_getModelLimit$();
    -1 < $actual_deferredObj_modelLimit$$ && $actual_deferredObj_modelLimit$$ < $count$$9$$ && (this.modelLimit = $count$$9$$);
    $actual_deferredObj_modelLimit$$ = $oj$$1$$.$Collection$.$_getPromise$();
    return this.$_setRangeLocalInternal$($start$$12$$, $count$$9$$, -1, {start:$start$$12$$, count:$count$$9$$}, $actual_deferredObj_modelLimit$$, !0);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.setRangeLocal", {$setRangeLocal$:$oj$$1$$.$Collection$.prototype.$setRangeLocal$});
  $oj$$1$$.$Collection$.prototype.$_setRangeLocalInternal$ = function $$oj$$1$$$$Collection$$$$_setRangeLocalInternal$$($start$$13$$, $count$$10$$, $placement$$, $original$$2$$, $deferredObj$$1$$, $fill$$) {
    var $self$$15$$ = this, $limit$$1_opts$$7$$ = this.$_getMaxLength$($start$$13$$, $count$$10$$);
    this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] && this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] > $limit$$1_opts$$7$$ - $start$$13$$ && ($limit$$1_opts$$7$$ = this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] + $start$$13$$);
    !this.$_hasTotalResults$() && $limit$$1_opts$$7$$ < $start$$13$$ + $count$$10$$ && ($limit$$1_opts$$7$$ = $start$$13$$ + $count$$10$$);
    var $newStart$$ = this.$_getFirstMissingModel$($start$$13$$, $limit$$1_opts$$7$$);
    $newStart$$ > $start$$13$$ && ($start$$13$$ = $newStart$$, $limit$$1_opts$$7$$ = this.$_getMaxLength$($newStart$$, $count$$10$$));
    $limit$$1_opts$$7$$ = this.$_isVirtual$() ? {context:this, startIndex:$start$$13$$, fetchSize:$limit$$1_opts$$7$$ - $start$$13$$} : {context:this};
    $limit$$1_opts$$7$$.error = function $$limit$$1_opts$$7$$$error$($collection$$14$$, $error$$7$$) {
      $deferredObj$$1$$.reject($error$$7$$);
    };
    this.$_fetchInternal$($limit$$1_opts$$7$$, $placement$$, -1 < $placement$$).then(function() {
      var $actual$$1$$ = $self$$15$$.$_getLocalRange$($original$$2$$.start, $original$$2$$.count);
      if ($fill$$ && $self$$15$$.$_hasTotalResults$() && $actual$$1$$.count < $original$$2$$.count) {
        var $newPlacement$$ = $actual$$1$$.start + $actual$$1$$.count, $newStart$$1$$ = $start$$13$$ + $count$$10$$;
        $newStart$$1$$ < $self$$15$$.totalResults ? $self$$15$$.$_setRangeLocalInternal$($newStart$$1$$, $count$$10$$, $newPlacement$$, $original$$2$$, $deferredObj$$1$$, $fill$$) : $deferredObj$$1$$.resolve($actual$$1$$.start, $actual$$1$$.count);
      } else {
        $deferredObj$$1$$.resolve($actual$$1$$.start, $actual$$1$$.count);
      }
    }, function($e$$23$$) {
      $deferredObj$$1$$.reject($e$$23$$);
    });
    return $deferredObj$$1$$;
  };
  $oj$$1$$.$Collection$.prototype.$_getMaxLength$ = function $$oj$$1$$$$Collection$$$$_getMaxLength$$($start$$14$$, $count$$11$$) {
    var $len$$2$$ = this.$_getModelsLength$();
    return 0 === $len$$2$$ ? $start$$14$$ + $count$$11$$ : $start$$14$$ + $count$$11$$ > $len$$2$$ ? $len$$2$$ : $start$$14$$ + $count$$11$$;
  };
  $oj$$1$$.$Collection$.prototype.$isRangeLocal$ = function $$oj$$1$$$$Collection$$$$isRangeLocal$$($start$$15$$, $count$$12$$) {
    var $localRange$$ = this.$_getLocalRange$($start$$15$$, $count$$12$$);
    return $start$$15$$ === $localRange$$.start && $count$$12$$ === $localRange$$.count;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.isRangeLocal", {$isRangeLocal$:$oj$$1$$.$Collection$.prototype.$isRangeLocal$});
  $oj$$1$$.$Collection$.prototype.$_getLocalRange$ = function $$oj$$1$$$$Collection$$$$_getLocalRange$$($start$$16$$, $count$$13$$) {
    if (!this.$_isVirtual$()) {
      return 0 < this.$_getModelsLength$() ? {start:$start$$16$$, count:$count$$13$$} : {start:$start$$16$$, count:0};
    }
    var $firstMissingModel_limit$$2$$ = this.$_getMaxLength$($start$$16$$, $count$$13$$);
    if (!this.$_hasTotalResults$() && $firstMissingModel_limit$$2$$ < $start$$16$$ + $count$$13$$ || 0 === $firstMissingModel_limit$$2$$) {
      return{start:$start$$16$$, count:0};
    }
    $firstMissingModel_limit$$2$$ = this.$_getFirstMissingModel$($start$$16$$, $firstMissingModel_limit$$2$$);
    return-1 < $firstMissingModel_limit$$2$$ ? {start:$start$$16$$, count:$firstMissingModel_limit$$2$$ - $start$$16$$} : {start:$start$$16$$, count:$count$$13$$};
  };
  $oj$$1$$.$Collection$.prototype.$_getFirstMissingModel$ = function $$oj$$1$$$$Collection$$$$_getFirstMissingModel$$($start$$17$$, $limit$$3$$) {
    for (var $i$$43$$ = $start$$17$$;$i$$43$$ < $limit$$3$$;$i$$43$$++) {
      if (void 0 === this.$_getModel$($i$$43$$)) {
        return $i$$43$$;
      }
    }
    return-1;
  };
  $oj$$1$$.$Collection$.prototype.fetch = function $$oj$$1$$$$Collection$$$fetch$($options$$65$$) {
    return this.$_fetchInternal$($options$$65$$, -1, !1);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.fetch", {fetch:$oj$$1$$.$Collection$.prototype.fetch});
  $oj$$1$$.$Collection$.prototype.$_fetchInternal$ = function $$oj$$1$$$$Collection$$$$_fetchInternal$$($options$$66$$, $placement$$1$$, $fillIn$$2$$) {
    function $doReset$$($collection$$15$$, $opt$$7$$, $fillIn$$3$$) {
      $collection$$15$$.$_isVirtual$() ? $fillIn$$3$$ || $collection$$15$$.$_resetModelsToFullLength$() : $opt$$7$$.add || $opt$$7$$.$useset$ || $collection$$15$$.reset();
    }
    var $opt$$6$$ = $options$$66$$ || {}, $success$$11$$ = $opt$$6$$.success, $self$$16$$;
    $opt$$6$$.set && ($opt$$6$$.$useset$ = $opt$$6$$.set ? !0 : !1);
    void 0 === $opt$$6$$.parse && ($opt$$6$$.parse = !0);
    $self$$16$$ = this;
    $opt$$6$$.success = function $$opt$$6$$$success$($response$$4$$) {
      $self$$16$$.$_setPagingReturnValues$($response$$4$$, $options$$66$$);
      var $data$$35$$ = $self$$16$$.parse($response$$4$$, $options$$66$$), $dataList$$ = null;
      if ($opt$$6$$.add || $self$$16$$.model) {
        $doReset$$($self$$16$$, $opt$$6$$, $fillIn$$2$$);
        try {
          $manageLRU$$ = !1, -1 === $placement$$1$$ && ($manageLRU$$ = !0, $placement$$1$$ = $self$$16$$.$_getOffset$()), $dataList$$ = $self$$16$$.$_fillInCollectionWithParsedData$($data$$35$$, $placement$$1$$, $manageLRU$$, $opt$$6$$);
        } catch ($e$$24$$) {
          $opt$$6$$.error && $opt$$6$$.error.call($oj$$1$$.$Model$.$GetContext$($options$$66$$, $self$$16$$), $self$$16$$, $e$$24$$, $options$$66$$);
          return;
        }
      } else {
        if (!$fillIn$$2$$) {
          if ($self$$16$$.$_isVirtual$()) {
            $doReset$$($self$$16$$, $opt$$6$$, $fillIn$$2$$);
            var $manageLRU$$ = !1;
            -1 === $placement$$1$$ && ($manageLRU$$ = !0, $placement$$1$$ = $self$$16$$.$_getOffset$());
            $dataList$$ = $self$$16$$.$_putDataIntoCollection$($data$$35$$, $placement$$1$$, $manageLRU$$);
          } else {
            $opt$$6$$.$useset$ ? $self$$16$$.$_setInternal$($data$$35$$, !1, $opt$$6$$, !1) : $self$$16$$.reset($data$$35$$);
          }
        }
      }
      $self$$16$$.$_isVirtual$() && $dataList$$ && ($self$$16$$.lastFetchCount = $dataList$$.length);
      $self$$16$$.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.SYNC, $self$$16$$, $response$$4$$, $opt$$6$$);
      $success$$11$$ && $success$$11$$.call($oj$$1$$.$Model$.$GetContext$($options$$66$$, $self$$16$$), $self$$16$$, $response$$4$$, $opt$$6$$);
    };
    return this.$_fetchCall$($opt$$6$$);
  };
  $oj$$1$$.$Collection$.prototype.$_putDataIntoCollection$ = function $$oj$$1$$$$Collection$$$$_putDataIntoCollection$$($addOpt_data$$36$$, $insertPos_placement$$2$$, $manageLRU$$1_virtual$$) {
    var $dataList$$1$$;
    if ($addOpt_data$$36$$) {
      $dataList$$1$$ = $addOpt_data$$36$$ instanceof Array ? $addOpt_data$$36$$ : [$addOpt_data$$36$$];
      $addOpt_data$$36$$ = {};
      $manageLRU$$1_virtual$$ && this.$_manageLRU$($dataList$$1$$.length);
      $manageLRU$$1_virtual$$ = this.$_isVirtual$();
      for (var $prevItem$$ = null, $i$$44$$ = 0;$i$$44$$ < $dataList$$1$$.length;$i$$44$$ += 1) {
        $manageLRU$$1_virtual$$ && ($addOpt_data$$36$$ = {at:$insertPos_placement$$2$$}, $prevItem$$ = this.$_atInternal$($insertPos_placement$$2$$, null, !0, !1)), $addOpt_data$$36$$.silent = !0, this.$_addInternal$($dataList$$1$$[$i$$44$$], $addOpt_data$$36$$, !0, !1), this.$_atInternal$($insertPos_placement$$2$$, null, !0, !1) !== $prevItem$$ && $insertPos_placement$$2$$++;
      }
    }
    return $dataList$$1$$;
  };
  $oj$$1$$.$Collection$.prototype.$_fillInCollectionWithParsedData$ = function $$oj$$1$$$$Collection$$$$_fillInCollectionWithParsedData$$($addOpt$$1_data$$37$$, $parsedModel_placement$$3$$, $manageLRU$$2_virtual$$1$$, $opt$$8_prevItem$$1$$) {
    $opt$$8_prevItem$$1$$ = $opt$$8_prevItem$$1$$ || {};
    var $parse$$2$$ = $opt$$8_prevItem$$1$$.parse, $modelInstance$$ = $oj$$1$$.$Collection$.$_createParsingModel$(this);
    if ($addOpt$$1_data$$37$$) {
      var $dataList$$2$$ = $addOpt$$1_data$$37$$ instanceof Array ? $addOpt$$1_data$$37$$ : [$addOpt$$1_data$$37$$];
      $addOpt$$1_data$$37$$ = {};
      $manageLRU$$2_virtual$$1$$ && this.$_manageLRU$($dataList$$2$$.length);
      $manageLRU$$2_virtual$$1$$ = this.$_isVirtual$();
      if ($opt$$8_prevItem$$1$$.$useset$ && !$manageLRU$$2_virtual$$1$$) {
        for (var $i$$45$$ = 0;$i$$45$$ < $dataList$$2$$.length;$i$$45$$ += 1) {
          $parsedModel_placement$$3$$ = $modelInstance$$ && $parse$$2$$ ? $modelInstance$$.parse($dataList$$2$$[$i$$45$$]) : $dataList$$2$$[$i$$45$$], $dataList$$2$$[$i$$45$$] = $parsedModel_placement$$3$$;
        }
        this.$_setInternal$($dataList$$2$$, !1, $opt$$8_prevItem$$1$$, !1);
      } else {
        $opt$$8_prevItem$$1$$ = null;
        for (var $insertPos$$1$$ = $parsedModel_placement$$3$$, $i$$45$$ = 0;$i$$45$$ < $dataList$$2$$.length;$i$$45$$ += 1) {
          $parsedModel_placement$$3$$ = $modelInstance$$ && $parse$$2$$ ? $modelInstance$$.parse($dataList$$2$$[$i$$45$$]) : $dataList$$2$$[$i$$45$$], $manageLRU$$2_virtual$$1$$ && ($addOpt$$1_data$$37$$ = {at:$insertPos$$1$$}, $opt$$8_prevItem$$1$$ = this.$_atInternal$($insertPos$$1$$, $addOpt$$1_data$$37$$, !0, !1)), $addOpt$$1_data$$37$$.silent = !0, this.$_addInternal$($parsedModel_placement$$3$$, $addOpt$$1_data$$37$$, !0, !1), this.$_atInternal$($insertPos$$1$$, null, !0, !1) !== $opt$$8_prevItem$$1$$ && 
          $insertPos$$1$$++;
        }
      }
    }
    return $dataList$$2$$;
  };
  $oj$$1$$.$Collection$.prototype.$_fetchOnly$ = function $$oj$$1$$$$Collection$$$$_fetchOnly$$($options$$67$$) {
    var $opt$$9$$ = $options$$67$$ || {}, $success$$12$$ = $opt$$9$$.success, $parsedModel$$1$$, $self$$17$$;
    void 0 === $opt$$9$$.parse && ($opt$$9$$.parse = !0);
    $self$$17$$ = this;
    $opt$$9$$.success = function $$opt$$9$$$success$($response$$5$$) {
      var $data$$38_i$$46$$, $modelInstance$$1$$;
      $data$$38_i$$46$$ = $self$$17$$.parse($response$$5$$, $options$$67$$);
      var $dataList$$3$$ = null, $fetchedModels$$ = [];
      if ($opt$$9$$.add || $self$$17$$.model) {
        if ($modelInstance$$1$$ = $oj$$1$$.$Collection$.$_createParsingModel$($self$$17$$), $data$$38_i$$46$$) {
          for ($dataList$$3$$ = $data$$38_i$$46$$ instanceof Array ? $data$$38_i$$46$$ : [$data$$38_i$$46$$], $data$$38_i$$46$$ = 0;$data$$38_i$$46$$ < $dataList$$3$$.length;$data$$38_i$$46$$ += 1) {
            $parsedModel$$1$$ = $modelInstance$$1$$ && $opt$$9$$.parse ? $modelInstance$$1$$.parse($dataList$$3$$[$data$$38_i$$46$$]) : $dataList$$3$$[$data$$38_i$$46$$], $fetchedModels$$.push($self$$17$$.$_newModel$($parsedModel$$1$$));
          }
        }
      }
      $self$$17$$.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.SYNC, $self$$17$$, $response$$5$$, $opt$$9$$);
      $success$$12$$ && $success$$12$$.call($oj$$1$$.$Model$.$GetContext$($options$$67$$, $self$$17$$), $self$$17$$, $fetchedModels$$, $opt$$9$$);
    };
    this.$_fetchCall$($opt$$9$$);
  };
  $oj$$1$$.$Collection$.$_createParsingModel$ = function $$oj$$1$$$$Collection$$$_createParsingModel$$($collection$$16$$) {
    if ($collection$$16$$.model) {
      return $oj$$1$$.$Model$.$IsFunction$($collection$$16$$.model) ? new $collection$$16$$.model : new $collection$$16$$.model.constructor;
    }
  };
  $oj$$1$$.$Collection$.prototype.$_fetchCall$ = function $$oj$$1$$$$Collection$$$$_fetchCall$$($opt$$10$$) {
    try {
      return $oj$$1$$.$Model$.$_internalSync$("read", this, $opt$$10$$);
    } catch ($e$$25$$) {
      throw this.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.ERROR, this, null, $opt$$10$$), $e$$25$$;
    }
  };
  $oj$$1$$.$Collection$.prototype.$_resetModelsToFullLength$ = function $$oj$$1$$$$Collection$$$$_resetModelsToFullLength$$() {
    var $totalResults$$2$$ = this.totalResults;
    void 0 !== $totalResults$$2$$ && this.$_getModelsLength$() !== $totalResults$$2$$ && (this.$_setModels$(Array($totalResults$$2$$)), this.$_resetLRU$(), this.$_setLength$());
  };
  $oj$$1$$.$Collection$.prototype.$_getFetchSize$ = function $$oj$$1$$$$Collection$$$$_getFetchSize$$($options$$68$$) {
    $options$$68$$ = $options$$68$$ || {};
    return $options$$68$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] || this[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$];
  };
  $oj$$1$$.$Collection$.prototype.$_hasMore$ = function $$oj$$1$$$$Collection$$$$_hasMore$$() {
    return void 0 !== this.hasMore && this.hasMore;
  };
  $oj$$1$$.$Collection$.prototype.$_isVirtual$ = function $$oj$$1$$$$Collection$$$$_isVirtual$$() {
    return-1 < this.$_getFetchSize$(null);
  };
  $oj$$1$$.$Collection$.prototype.$_getReturnProperty$ = function $$oj$$1$$$$Collection$$$$_getReturnProperty$$($customObj_value$$63$$, $response$$6$$, $property$$10$$, $optionValue$$, $defaultValue$$1$$) {
    $customObj_value$$63$$ = parseInt($oj$$1$$.$Collection$.$_getProp$($customObj_value$$63$$, $response$$6$$, $property$$10$$), 10);
    return void 0 === $customObj_value$$63$$ || null === $customObj_value$$63$$ || isNaN($customObj_value$$63$$) ? $optionValue$$ ? $optionValue$$ : $defaultValue$$1$$ : $customObj_value$$63$$;
  };
  $oj$$1$$.$Collection$.prototype.$_setPagingReturnValues$ = function $$oj$$1$$$$Collection$$$$_setPagingReturnValues$$($response$$7$$, $options$$69$$) {
    var $customObj$$1$$ = {};
    this.customPagingOptions && (($customObj$$1$$ = this.customPagingOptions.call(this, $response$$7$$)) || ($customObj$$1$$ = {}));
    $options$$69$$ = $options$$69$$ || {};
    this.lastFetchSize = this.$_getReturnProperty$($customObj$$1$$, $response$$7$$, "limit", $options$$69$$.fetchSize, this.fetchSize);
    this.offset = this.$_getReturnProperty$($customObj$$1$$, $response$$7$$, "offset", $options$$69$$.startIndex, 0);
    this.lastFetchCount = this.$_getReturnProperty$($customObj$$1$$, $response$$7$$, "count", this.lastFetchCount, this.lastFetchCount);
    this.totalResults = this.$_getReturnProperty$($customObj$$1$$, $response$$7$$, "totalResults", this.totalResults, this.totalResults);
    this.hasMore = this.$_getHasMore$($oj$$1$$.$Collection$.$_getProp$($customObj$$1$$, $response$$7$$, "hasMore"), this.offset, this.lastFetchSize, this.totalResults);
    !this.$_isVirtual$() && this.lastFetchSize && this.$setFetchSize$(this.lastFetchSize);
  };
  $oj$$1$$.$Collection$.prototype.$_getHasMore$ = function $$oj$$1$$$$Collection$$$$_getHasMore$$($hasMore$$, $offset$$14$$, $lastFetchSize$$, $totalResults$$3$$) {
    return $hasMore$$ && void 0 !== $hasMore$$ ? $hasMore$$ : $offset$$14$$ + $lastFetchSize$$ > $totalResults$$3$$ ? !1 : !0;
  };
  $oj$$1$$.$Collection$.$_getProp$ = function $$oj$$1$$$$Collection$$$_getProp$$($custom$$, $response$$8$$, $prop$$40$$) {
    return $custom$$.hasOwnProperty($prop$$40$$) ? $custom$$[$prop$$40$$] : $response$$8$$ ? $response$$8$$[$prop$$40$$] : void 0;
  };
  $oj$$1$$.$Collection$.prototype.$_getOffset$ = function $$oj$$1$$$$Collection$$$$_getOffset$$() {
    return void 0 !== this.offset ? this.offset : 0;
  };
  $oj$$1$$.$Collection$.prototype.create = function $$oj$$1$$$$Collection$$$create$($attributes$$7$$, $options$$70$$) {
    function $doSave$$($collection$$17$$, $newModel$$6$$, $validate$$2$$, $opt$$11$$) {
      return!1 === $newModel$$6$$.save($attributes$$7$$ instanceof $oj$$1$$.$Model$ ? null : $attributes$$7$$, $opt$$11$$) && ($options$$70$$.validationError = $newModel$$6$$.validationError, $collection$$17$$.$TriggerInternal$(!1, $oj$$1$$.$Events$.$EventType$.INVALID, $collection$$17$$, $newModel$$6$$.validationError, $opt$$11$$), $validate$$2$$) ? ($collection$$17$$.$_unlistenToModel$($newModel$$6$$), $collection$$17$$.remove($newModel$$6$$), !1) : $newModel$$6$$;
    }
    var $deferred$$13$$ = this.$_getDeferred$($options$$70$$);
    $options$$70$$ = $options$$70$$ || {};
    var $newModel$$5$$ = this.$_newModel$($attributes$$7$$, !0, $options$$70$$), $callback$$73$$ = $options$$70$$.success, $context$$15$$ = $options$$70$$.context, $validate$$1$$ = $options$$70$$.validate;
    $options$$70$$.context = this;
    $options$$70$$.success = function $$options$$70$$$success$($model$$31$$, $resp$$7$$, $options$$71$$) {
      $callback$$73$$ && $callback$$73$$.call(null != $context$$15$$ ? $context$$15$$ : this, $model$$31$$, $resp$$7$$, $options$$71$$);
    };
    if (null == $newModel$$5$$) {
      return!1;
    }
    $options$$70$$.forceNew = null != $newModel$$5$$.$GetId$();
    $newModel$$5$$.$SetCollection$(this);
    var $self$$18$$ = this;
    if ($deferred$$13$$ || this.$_isVirtual$()) {
      var $defer$$2$$ = $oj$$1$$.$Collection$.$_getPromise$();
      this.add($newModel$$5$$, {merge:!0, deferred:!0}).done(function() {
        $options$$70$$.success = function $$options$$70$$$success$($model$$33$$, $resp$$8$$, $options$$72$$) {
          $callback$$73$$ && $callback$$73$$.call(null != $context$$15$$ ? $context$$15$$ : this, $model$$33$$, $resp$$8$$, $options$$72$$);
          $defer$$2$$.resolve($model$$33$$);
        };
        var $model$$32$$ = $doSave$$($self$$18$$, $newModel$$5$$, $validate$$1$$, $options$$70$$);
        $model$$32$$ || $defer$$2$$.resolve($model$$32$$);
      });
      return $defer$$2$$.promise();
    }
    this.add($newModel$$5$$, {merge:!0});
    return $doSave$$(this, $newModel$$5$$, $validate$$1$$, $options$$70$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.create", {create:$oj$$1$$.$Collection$.prototype.create});
  $oj$$1$$.$Collection$.prototype.$pluck$ = function $$oj$$1$$$$Collection$$$$pluck$$($attr$$9$$) {
    var $arr$$17$$ = [], $i$$47$$;
    this.$_throwErrIfVirtual$("pluck");
    for ($i$$47$$ = 0;$i$$47$$ < this.$_getLength$();$i$$47$$ += 1) {
      $arr$$17$$.push(this.at($i$$47$$).get($attr$$9$$));
    }
    return $arr$$17$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.pluck", {$pluck$:$oj$$1$$.$Collection$.prototype.$pluck$});
  $oj$$1$$.$Collection$.prototype.$where$ = function $$oj$$1$$$$Collection$$$$where$$($attrs$$10$$, $options$$73$$) {
    $options$$73$$ = $options$$73$$ || {};
    var $deferred$$14$$ = this.$_getDeferred$($options$$73$$);
    if (this.$_isVirtual$()) {
      var $defer$$3$$ = $oj$$1$$.$Collection$.$_getPromise$();
      this.$_fetchOnly$({query:$attrs$$10$$, all:!0, success:function($collection$$18$$, $fetchedModels$$1$$) {
        $defer$$3$$.resolve($fetchedModels$$1$$);
      }});
      return $defer$$3$$.promise();
    }
    var $arr$$18$$ = [], $i$$48$$, $m$$7$$;
    for ($i$$48$$ = 0;$i$$48$$ < this.$_getLength$();$i$$48$$ += 1) {
      $m$$7$$ = this.at($i$$48$$), $m$$7$$.$Contains$($attrs$$10$$) && $arr$$18$$.push($m$$7$$);
    }
    return $deferred$$14$$ ? $oj$$1$$.$Collection$.$_getPromise$().resolve($arr$$18$$) : $arr$$18$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.where", {$where$:$oj$$1$$.$Collection$.prototype.$where$});
  $oj$$1$$.$Collection$.prototype.$whereToCollection$ = function $$oj$$1$$$$Collection$$$$whereToCollection$$($attrs$$11$$, $options$$75$$) {
    $options$$75$$ = $options$$75$$ || {};
    var $deferred$$15_models$$4_newCollection$$ = this.$_getDeferred$($options$$75$$), $self$$19$$ = this;
    if (this.$_isVirtual$() || $deferred$$15_models$$4_newCollection$$) {
      var $defer$$4$$ = $oj$$1$$.$Collection$.$_getPromise$();
      this.$where$($attrs$$11$$, $options$$75$$).done(function($collection$$19_models$$5$$) {
        $collection$$19_models$$5$$ = $self$$19$$.$_makeNewCollection$($collection$$19_models$$5$$);
        $defer$$4$$.resolve($collection$$19_models$$5$$);
      });
      return $defer$$4$$.promise();
    }
    $deferred$$15_models$$4_newCollection$$ = this.$where$($attrs$$11$$, $options$$75$$);
    $deferred$$15_models$$4_newCollection$$ = this.$_makeNewCollection$($deferred$$15_models$$4_newCollection$$);
    $deferred$$15_models$$4_newCollection$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] = -1;
    $deferred$$15_models$$4_newCollection$$.$_setLength$();
    return $deferred$$15_models$$4_newCollection$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.whereToCollection", {$whereToCollection$:$oj$$1$$.$Collection$.prototype.$whereToCollection$});
  $oj$$1$$.$Collection$.prototype.$_makeNewCollection$ = function $$oj$$1$$$$Collection$$$$_makeNewCollection$$($models$$6$$) {
    var $collection$$20$$ = this.$_cloneInternal$(!1);
    $collection$$20$$.$_setModels$($models$$6$$);
    $collection$$20$$.$_resetLRU$();
    $collection$$20$$.$_setLength$();
    return $collection$$20$$;
  };
  $oj$$1$$.$Collection$.prototype.$_throwErrIfVirtual$ = function $$oj$$1$$$$Collection$$$$_throwErrIfVirtual$$($func$$6$$) {
    if (this.$_isVirtual$()) {
      throw Error($func$$6$$ + " not valid on a virtual Collection");
    }
  };
  $oj$$1$$.$Collection$.prototype.map = function $$oj$$1$$$$Collection$$$map$($iterator$$, $context$$16$$) {
    var $retArr$$ = [], $value$$64$$;
    this.$_throwErrIfVirtual$("map");
    this.$_getModels$().forEach(function($model$$34$$) {
      $value$$64$$ = $iterator$$.call($context$$16$$ || this, $model$$34$$);
      $retArr$$.push($value$$64$$);
    });
    return $retArr$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.map", {map:$oj$$1$$.$Collection$.prototype.map});
  $oj$$1$$.$Collection$.prototype.each = function $$oj$$1$$$$Collection$$$each$($iterator$$1$$, $context$$17$$) {
    this.$_throwErrIfVirtual$("each");
    this.$_getModels$().forEach($iterator$$1$$, $context$$17$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.each", {each:$oj$$1$$.$Collection$.prototype.each});
  $oj$$1$$.$Collection$.prototype.size = function $$oj$$1$$$$Collection$$$size$() {
    return this.$_getLength$();
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.size", {size:$oj$$1$$.$Collection$.prototype.size});
  $oj$$1$$.$Collection$.prototype.$sortBy$ = function $$oj$$1$$$$Collection$$$$sortBy$$($iterator$$2$$, $context$$18$$) {
    var $retArr$$1$$ = [], $self$$20$$;
    this.$_throwErrIfVirtual$("sortBy");
    this.$_getModels$().forEach(function($model$$35$$) {
      $retArr$$1$$.push($model$$35$$);
    });
    $self$$20$$ = this;
    $retArr$$1$$.sort(function($a$$60$$, $b$$29$$) {
      var $keyA$$3$$, $keyB$$3$$;
      if ($oj$$1$$.$Model$.$IsFunction$($iterator$$2$$)) {
        return $keyA$$3$$ = $iterator$$2$$.call($context$$18$$ || $self$$20$$, $a$$60$$), $keyB$$3$$ = $iterator$$2$$.call($context$$18$$ || $self$$20$$, $b$$29$$), $oj$$1$$.$Collection$.$_compareKeys$($keyA$$3$$, $keyB$$3$$, $self$$20$$.sortDirection);
      }
      $keyA$$3$$ = $a$$60$$.get($iterator$$2$$);
      $keyB$$3$$ = $b$$29$$.get($iterator$$2$$);
      return $oj$$1$$.$Collection$.$_compareKeys$($keyA$$3$$, $keyB$$3$$, $self$$20$$.sortDirection);
    });
    return $retArr$$1$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.sortBy", {$sortBy$:$oj$$1$$.$Collection$.prototype.$sortBy$});
  $oj$$1$$.$Collection$.prototype.$groupBy$ = function $$oj$$1$$$$Collection$$$$groupBy$$($iterator$$3$$, $context$$19$$) {
    var $retObj$$6$$ = {}, $groupVal$$;
    this.$_throwErrIfVirtual$("groupBy");
    this.$_getModels$().forEach(function($model$$36$$) {
      $groupVal$$ = $oj$$1$$.$Model$.$IsFunction$($iterator$$3$$) ? $iterator$$3$$.call($context$$19$$ || this, $model$$36$$) : $model$$36$$.get($iterator$$3$$);
      void 0 === $retObj$$6$$[$groupVal$$] && ($retObj$$6$$[$groupVal$$] = []);
      $retObj$$6$$[$groupVal$$].push($model$$36$$);
    }, this);
    return $retObj$$6$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.groupBy", {$groupBy$:$oj$$1$$.$Collection$.prototype.$groupBy$});
  $oj$$1$$.$Collection$.prototype.min = function $$oj$$1$$$$Collection$$$min$($iterator$$4$$, $context$$20$$) {
    var $minModel$$ = {}, $minModelValue$$, $currValue$$;
    this.$_throwErrIfVirtual$("min");
    if (0 == this.$_getModelsLength$()) {
      return null;
    }
    $minModel$$ = this.$_getModel$(0);
    $minModelValue$$ = $iterator$$4$$.call($context$$20$$ || this, this.$_getModel$(0));
    this.$_getModels$().forEach(function($model$$37$$, $i$$49$$) {
      1 <= $i$$49$$ && ($currValue$$ = $iterator$$4$$.call($context$$20$$ || this, $model$$37$$), $currValue$$ < $minModelValue$$ && ($minModel$$ = $model$$37$$, $minModelValue$$ = $currValue$$));
    }, this);
    return $minModel$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.min", {min:$oj$$1$$.$Collection$.prototype.min});
  $oj$$1$$.$Collection$.prototype.max = function $$oj$$1$$$$Collection$$$max$($iterator$$5$$, $context$$21$$) {
    var $maxModel$$ = {}, $maxModelValue$$, $currValue$$1$$;
    this.$_throwErrIfVirtual$("max");
    if (0 == this.$_getModelsLength$()) {
      return null;
    }
    $maxModel$$ = this.$_getModel$(0);
    $maxModelValue$$ = $iterator$$5$$.call($context$$21$$, this.$_getModel$(0));
    this.$_getModels$().forEach(function($model$$38$$, $i$$50$$) {
      1 <= $i$$50$$ && ($currValue$$1$$ = $iterator$$5$$.call($context$$21$$ || this, $model$$38$$), $currValue$$1$$ > $maxModelValue$$ && ($maxModel$$ = $model$$38$$, $maxModelValue$$ = $currValue$$1$$));
    }, this);
    return $maxModel$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.max", {max:$oj$$1$$.$Collection$.prototype.max});
  $oj$$1$$.$Collection$.prototype.filter = function $$oj$$1$$$$Collection$$$filter$($iterator$$6$$, $context$$22$$) {
    var $retArr$$2$$ = [];
    this.$_throwErrIfVirtual$("filter");
    this.$_getModels$().forEach(function($model$$39$$) {
      $iterator$$6$$.call($context$$22$$ || this, $model$$39$$) && $retArr$$2$$.push($model$$39$$);
    });
    return $retArr$$2$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.filter", {filter:$oj$$1$$.$Collection$.prototype.filter});
  $oj$$1$$.$Collection$.prototype.$without$ = function $$oj$$1$$$$Collection$$$$without$$($var_args$$46$$) {
    var $retArr$$3$$ = [], $j$$4$$, $add$$;
    this.$_throwErrIfVirtual$("without");
    return arguments ? (this.$_getModels$().forEach(function($model$$40$$) {
      $add$$ = !0;
      for ($j$$4$$ = 0;$j$$4$$ < arguments.length;$j$$4$$ += 1) {
        if ($model$$40$$.$Match$(arguments[$j$$4$$].$GetId$(), arguments[$j$$4$$].$GetCid$())) {
          $add$$ = !1;
          break;
        }
      }
      $add$$ && $retArr$$3$$.push($model$$40$$);
    }), $retArr$$3$$) : this.$_getModels$();
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.without", {$without$:$oj$$1$$.$Collection$.prototype.$without$});
  $oj$$1$$.$Collection$.prototype.isEmpty = function $$oj$$1$$$$Collection$$$isEmpty$() {
    return 0 === this.$_getLength$();
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.isEmpty", {isEmpty:$oj$$1$$.$Collection$.prototype.isEmpty});
  $oj$$1$$.$Collection$.prototype.$any$ = function $$oj$$1$$$$Collection$$$$any$$($iterator$$7$$, $context$$23$$) {
    this.$_throwErrIfVirtual$("any");
    for (var $model$$41$$, $i$$51$$ = 0;$i$$51$$ < this.$_getModelsLength$();$i$$51$$ += 1) {
      if ($model$$41$$ = this.$_getModel$($i$$51$$), $iterator$$7$$.call($context$$23$$ || this, $model$$41$$)) {
        return!0;
      }
    }
    return!1;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.any", {$any$:$oj$$1$$.$Collection$.prototype.$any$});
  $oj$$1$$.$Collection$.prototype.$findWhere$ = function $$oj$$1$$$$Collection$$$$findWhere$$($attrs$$12$$, $options$$76$$) {
    var $arr$$19_deferred$$16$$ = this.$_getDeferred$($options$$76$$);
    if (this.$_isVirtual$() || $arr$$19_deferred$$16$$) {
      var $defer$$5$$ = $oj$$1$$.$Collection$.$_getPromise$();
      this.$where$($attrs$$12$$, $options$$76$$).done(function($modelList$$1$$) {
        $modelList$$1$$ && 0 < $modelList$$1$$.length && $defer$$5$$.resolve($modelList$$1$$[0]);
        $defer$$5$$.resolve(null);
      });
      return $defer$$5$$.promise();
    }
    $arr$$19_deferred$$16$$ = this.$where$($attrs$$12$$);
    return 0 < $arr$$19_deferred$$16$$.length ? $arr$$19_deferred$$16$$[0] : null;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.findWhere", {$findWhere$:$oj$$1$$.$Collection$.prototype.$findWhere$});
  $oj$$1$$.$Collection$.prototype.slice = function $$oj$$1$$$$Collection$$$slice$($i$$52_start$$18$$, $end$$4$$, $options$$77_ret$$1$$) {
    var $deferred$$17$$ = this.$_getDeferred$($options$$77_ret$$1$$);
    $options$$77_ret$$1$$ = [];
    if (void 0 === $end$$4$$) {
      if (this.$_isVirtual$ && !this.$_hasTotalResults$()) {
        throw Error("End must be set for virtual collections with no totalResults");
      }
      $end$$4$$ = this.$_getModelsLength$();
    }
    if ($deferred$$17$$ || this.$_isVirtual$()) {
      return this.$IterativeAt$($i$$52_start$$18$$, $end$$4$$);
    }
    for (;$i$$52_start$$18$$ < $end$$4$$;$i$$52_start$$18$$ += 1) {
      $options$$77_ret$$1$$.push(this.$_getModel$($i$$52_start$$18$$));
    }
    return $options$$77_ret$$1$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.slice", {slice:$oj$$1$$.$Collection$.prototype.slice});
  $oj$$1$$.$Collection$.prototype.set = function $$oj$$1$$$$Collection$$$set$($models$$7$$, $options$$78$$) {
    return this.$_setInternal$($models$$7$$, !0, $options$$78$$, this.$_getDeferred$($options$$78$$) || this.$_isVirtual$());
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.set", {set:$oj$$1$$.$Collection$.prototype.set});
  $oj$$1$$.$Collection$.$_removeAfterSet$ = function $$oj$$1$$$$Collection$$$_removeAfterSet$$($collection$$21$$, $i$$53_remove$$, $foundModels$$, $options$$79$$) {
    if ($i$$53_remove$$) {
      for ($i$$53_remove$$ = $collection$$21$$.$_getModelsLength$() - 1;0 <= $i$$53_remove$$;$i$$53_remove$$ -= 1) {
        -1 == $foundModels$$.indexOf($i$$53_remove$$) && $collection$$21$$.$_removeInternal$($collection$$21$$.$_getModel$($i$$53_remove$$), $i$$53_remove$$, $options$$79$$);
      }
    }
  };
  $oj$$1$$.$Collection$.prototype.$_setInternal$ = function $$oj$$1$$$$Collection$$$$_setInternal$$($i$$54_models$$8$$, $parse$$3$$, $options$$80$$, $deferred$$19$$) {
    $options$$80$$ = $options$$80$$ || {};
    var $add$$1$$ = void 0 === $options$$80$$.add ? !0 : $options$$80$$.add, $remove$$1$$ = void 0 === $options$$80$$.remove ? !0 : $options$$80$$.remove, $merge$$1$$ = void 0 === $options$$80$$.merge ? !0 : $options$$80$$.merge, $foundModels$$1$$ = [], $currModel$$ = null, $modelList$$2$$;
    $parse$$3$$ && ($i$$54_models$$8$$ = this.parse($i$$54_models$$8$$));
    $modelList$$2$$ = $oj$$1$$.$Model$.$IsArray$($i$$54_models$$8$$) ? $i$$54_models$$8$$ : [$i$$54_models$$8$$];
    if ($deferred$$19$$) {
      return this.$_deferredSet$($modelList$$2$$, $options$$80$$, $remove$$1$$, $add$$1$$, $merge$$1$$, $parse$$3$$);
    }
    for ($i$$54_models$$8$$ = 0;$i$$54_models$$8$$ < $modelList$$2$$.length;$i$$54_models$$8$$ += 1) {
      $currModel$$ = this.$_updateModel$(this.$_newModel$($modelList$$2$$[$i$$54_models$$8$$], $parse$$3$$, $options$$80$$), $add$$1$$, $merge$$1$$, $deferred$$19$$), -1 !== $currModel$$ && $foundModels$$1$$.push($currModel$$);
    }
    $oj$$1$$.$Collection$.$_removeAfterSet$(this, $remove$$1$$, $foundModels$$1$$, $options$$80$$);
  };
  $oj$$1$$.$Collection$.prototype.$_deferredSet$ = function $$oj$$1$$$$Collection$$$$_deferredSet$$($modelList$$3$$, $options$$81$$, $remove$$2$$, $add$$2$$, $merge$$2$$, $parse$$4$$) {
    function $nextTask$$2$$($j$$5$$) {
      return $doTask$$2$$($j$$5$$ + 1);
    }
    function $doTask$$2$$($index$$63$$) {
      var $defer$$6$$ = $oj$$1$$.$Collection$.$_getPromise$();
      $self$$21$$.$_updateModel$($self$$21$$.$_newModel$($modelList$$3$$[$index$$63$$], $parse$$4$$, $options$$81$$), $add$$2$$, $merge$$2$$, !0).done(function($currModel$$1$$) {
        -1 !== $currModel$$1$$ && $foundModels$$2$$.push($currModel$$1$$);
        $defer$$6$$.resolve($index$$63$$);
      });
      return $defer$$6$$.promise();
    }
    var $foundModels$$2$$ = [], $i$$55$$, $self$$21$$ = this, $currentStep$$2$$ = $doTask$$2$$(0);
    for ($i$$55$$ = 1;$i$$55$$ < $modelList$$3$$.length;$i$$55$$ += 1) {
      $currentStep$$2$$ = $currentStep$$2$$.then($nextTask$$2$$);
    }
    return $$$$1$$.when($currentStep$$2$$).then(function() {
      $oj$$1$$.$Collection$.$_removeAfterSet$($self$$21$$, $remove$$2$$, $foundModels$$2$$, $options$$81$$);
    });
  };
  $oj$$1$$.$Collection$.prototype.$_updateModel$ = function $$oj$$1$$$$Collection$$$$_updateModel$$($model$$42$$, $add$$3$$, $merge$$3$$, $deferred$$20_found$$) {
    function $update$$($collection$$22$$, $found$$1_opt$$13$$, $deferred$$21$$) {
      var $index$$64$$ = $found$$1_opt$$13$$ ? $found$$1_opt$$13$$.index : -1;
      if ($found$$1_opt$$13$$ && $found$$1_opt$$13$$.m) {
        if ($merge$$3$$) {
          $found$$1_opt$$13$$ = {merge:$merge$$3$$};
          if ($deferred$$21$$) {
            var $defer$$8$$ = $oj$$1$$.$Collection$.$_getPromise$();
            $collection$$22$$.$_addInternal$($model$$42$$, $found$$1_opt$$13$$, !1, !0).done(function() {
              $defer$$8$$.resolve($index$$64$$);
            });
            return $defer$$8$$.promise();
          }
          $collection$$22$$.add($model$$42$$, $found$$1_opt$$13$$);
        }
      } else {
        if ($add$$3$$) {
          if ($deferred$$21$$) {
            return $defer$$8$$ = $oj$$1$$.$Collection$.$_getPromise$(), $collection$$22$$.add($model$$42$$, {deferred:!0}).done(function() {
              $defer$$8$$.resolve($collection$$22$$.$_getLength$() - 1);
            }), $defer$$8$$.promise();
          }
          $collection$$22$$.add($model$$42$$);
          $index$$64$$ = $collection$$22$$.$_getLength$() - 1;
        }
      }
      return $index$$64$$;
    }
    if ($deferred$$20_found$$ || this.$_isVirtual$()) {
      var $self$$22$$ = this, $defer$$7$$ = $oj$$1$$.$Collection$.$_getPromise$();
      this.$_getInternal$($model$$42$$, null, $deferred$$20_found$$).done(function($found$$2$$) {
        $update$$($self$$22$$, $found$$2$$, !0).done(function($index$$65$$) {
          $defer$$7$$.resolve($index$$65$$);
        });
      });
      return $defer$$7$$.promise();
    }
    $deferred$$20_found$$ = this.$_getInternal$($model$$42$$);
    return $update$$(this, $deferred$$20_found$$, !1);
  };
  $oj$$1$$.$Collection$.prototype.toJSON = function $$oj$$1$$$$Collection$$$toJSON$() {
    var $retArr$$4$$ = [];
    this.$_throwErrIfVirtual$("toJSON");
    this.$_getModels$().forEach(function($model$$43$$) {
      $retArr$$4$$.push($model$$43$$.toJSON());
    });
    return $retArr$$4$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.toJSON", {toJSON:$oj$$1$$.$Collection$.prototype.toJSON});
  $oj$$1$$.$Collection$.prototype.first = function $$oj$$1$$$$Collection$$$first$($n$$12$$, $options$$82$$) {
    var $deferred$$22_i$$56_virtual$$2$$ = this.$_getDeferred$($options$$82$$), $elementCount$$ = this.$_getLength$(), $retArray$$2$$ = [];
    $n$$12$$ ? $elementCount$$ = $n$$12$$ : $n$$12$$ = 1;
    $deferred$$22_i$$56_virtual$$2$$ = this.$_isVirtual$() || $deferred$$22_i$$56_virtual$$2$$;
    if (1 === $n$$12$$) {
      return $deferred$$22_i$$56_virtual$$2$$ ? this.$_deferredAt$(0, null).promise() : 0 < this.$_getModelsLength$() ? this.$_getModel$(0) : null;
    }
    $elementCount$$ > this.$_getModelsLength$() && (!this.$_isVirtual$() || this.$_hasTotalResults$()) && ($elementCount$$ = this.$_getModelsLength$());
    if ($deferred$$22_i$$56_virtual$$2$$) {
      return this.$IterativeAt$(0, $elementCount$$);
    }
    for ($deferred$$22_i$$56_virtual$$2$$ = 0;$deferred$$22_i$$56_virtual$$2$$ < $elementCount$$;$deferred$$22_i$$56_virtual$$2$$ += 1) {
      $retArray$$2$$.push(this.$_getModel$($deferred$$22_i$$56_virtual$$2$$));
    }
    return $retArray$$2$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.first", {first:$oj$$1$$.$Collection$.prototype.first});
  $oj$$1$$.$Collection$.prototype.indexOf = function $$oj$$1$$$$Collection$$$indexOf$($model$$44$$, $options$$83$$) {
    var $deferred$$23$$ = this.$_getDeferred$($options$$83$$);
    return this.$_isVirtual$() || $deferred$$23$$ ? this.$_getInternal$($model$$44$$, null, !0).then(function($loc$$1$$) {
      return $loc$$1$$.index;
    }) : this.$_getInternal$($model$$44$$).index;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.indexOf", {indexOf:$oj$$1$$.$Collection$.prototype.indexOf});
  $oj$$1$$.$Collection$.prototype.$_localIndexOf$ = function $$oj$$1$$$$Collection$$$$_localIndexOf$$($location$$22_model$$45$$) {
    $location$$22_model$$45$$ = this.$_getLocalInternal$($location$$22_model$$45$$);
    return void 0 !== $location$$22_model$$45$$ ? $location$$22_model$$45$$.index : -1;
  };
  $oj$$1$$.$Collection$.prototype.pop = function $$oj$$1$$$$Collection$$$pop$($options$$84$$) {
    var $deferred$$24_m$$8$$ = this.$_getDeferred$($options$$84$$);
    if (this.$_isVirtual$() || $deferred$$24_m$$8$$) {
      var $self$$23$$ = this;
      return this.at(this.$_getLength$() - 1, {deferred:$deferred$$24_m$$8$$}).then(function($model$$46$$) {
        $self$$23$$.remove($model$$46$$, $options$$84$$);
        return $model$$46$$;
      });
    }
    $deferred$$24_m$$8$$ = this.at(this.$_getLength$() - 1);
    this.remove($deferred$$24_m$$8$$, $options$$84$$);
    return $deferred$$24_m$$8$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.pop", {pop:$oj$$1$$.$Collection$.prototype.pop});
  $oj$$1$$.$Collection$.prototype.push = function $$oj$$1$$$$Collection$$$push$($m$$9$$, $options$$85$$) {
    var $deferred$$25$$ = this.$_getDeferred$($options$$85$$);
    this.$_manageLRU$(1);
    return this.$_addInternal$($m$$9$$, $options$$85$$, !1, $deferred$$25$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.push", {push:$oj$$1$$.$Collection$.prototype.push});
  $oj$$1$$.$Collection$.prototype.lastIndexOf = function $$oj$$1$$$$Collection$$$lastIndexOf$($model$$47$$, $fromIndex$$2$$) {
    var $i$$57$$;
    this.$_throwErrIfVirtual$("lastIndexOf");
    void 0 === $fromIndex$$2$$ && ($fromIndex$$2$$ = 0);
    for ($i$$57$$ = this.$_getLength$() - 1;$i$$57$$ >= $fromIndex$$2$$;$i$$57$$ -= 1) {
      if ($oj$$1$$.$Object$.$__innerEquals$($model$$47$$, this.at($i$$57$$))) {
        return $i$$57$$;
      }
    }
    return-1;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("Collection.prototype.lastIndexOf", {lastIndexOf:$oj$$1$$.$Collection$.prototype.lastIndexOf});
  $oj$$1$$.$Collection$.prototype.$_getSortAttrs$ = function $$oj$$1$$$$Collection$$$$_getSortAttrs$$($sortStr$$) {
    return void 0 === $sortStr$$ ? [] : $sortStr$$.split(",");
  };
  $oj$$1$$.$Collection$.$_getQueryString$ = function $$oj$$1$$$$Collection$$$_getQueryString$$($q_queries$$) {
    $q_queries$$ = $oj$$1$$.$Model$.$IsArray$($q_queries$$) ? $q_queries$$ : [$q_queries$$];
    var $str$$12$$ = "", $query$$2$$, $exp_value$$65$$, $i$$58$$, $prop$$41$$;
    for ($i$$58$$ = 0;$i$$58$$ < $q_queries$$.length;$i$$58$$++) {
      $query$$2$$ = $q_queries$$[$i$$58$$];
      for ($prop$$41$$ in $query$$2$$) {
        if ($query$$2$$.hasOwnProperty($prop$$41$$)) {
          for (var $val$$18$$ = $oj$$1$$.$Model$.$IsArray$($query$$2$$[$prop$$41$$]) ? $query$$2$$[$prop$$41$$] : [$query$$2$$[$prop$$41$$]], $j$$6$$ = 0;$j$$6$$ < $val$$18$$.length;$j$$6$$++) {
            if ($oj$$1$$.$Model$.$IsComplexValue$($val$$18$$[$j$$6$$])) {
              $exp_value$$65$$ = $val$$18$$[$j$$6$$].value;
              var $comparator$$7_compare$$ = null, $comparator$$7_compare$$ = $val$$18$$[$j$$6$$].comparator, $comparator$$7_compare$$ = $oj$$1$$.$Model$.$IsFunction$($comparator$$7_compare$$) ? $comparator$$7_compare$$(null, $prop$$41$$, $exp_value$$65$$) : $comparator$$7_compare$$;
              $exp_value$$65$$ = $prop$$41$$ + $comparator$$7_compare$$ + $exp_value$$65$$;
            } else {
              $exp_value$$65$$ = $prop$$41$$ + "\x3d" + $query$$2$$[$prop$$41$$];
            }
            $str$$12$$ += $exp_value$$65$$ + "+";
          }
        }
      }
      $str$$12$$ = $str$$12$$.substring(0, $str$$12$$.length - 1) + ",";
    }
    return "," === $str$$12$$.substring($str$$12$$.length - 1) ? $str$$12$$.substring(0, $str$$12$$.length - 1) : $str$$12$$;
  };
  $oj$$1$$.$Collection$.prototype.$ModifyOptionsForCustomURL$ = function $$oj$$1$$$$Collection$$$$ModifyOptionsForCustomURL$$($attrs$$13_comparator$$8_options$$86$$) {
    var $opt$$14$$ = {}, $i$$59_prop$$42$$;
    for ($i$$59_prop$$42$$ in $attrs$$13_comparator$$8_options$$86$$) {
      $attrs$$13_comparator$$8_options$$86$$.hasOwnProperty($i$$59_prop$$42$$) && ($opt$$14$$[$i$$59_prop$$42$$] = $attrs$$13_comparator$$8_options$$86$$[$i$$59_prop$$42$$]);
    }
    if (($attrs$$13_comparator$$8_options$$86$$ = this.comparator) && $oj$$1$$.$StringUtils$.$isString$($attrs$$13_comparator$$8_options$$86$$)) {
      $attrs$$13_comparator$$8_options$$86$$ = this.$_getSortAttrs$($attrs$$13_comparator$$8_options$$86$$);
      for ($i$$59_prop$$42$$ = 0;$i$$59_prop$$42$$ < $attrs$$13_comparator$$8_options$$86$$.length;$i$$59_prop$$42$$++) {
        $opt$$14$$.sort = 0 === $i$$59_prop$$42$$ ? $attrs$$13_comparator$$8_options$$86$$[$i$$59_prop$$42$$] : $opt$$14$$.sort + ("," + $attrs$$13_comparator$$8_options$$86$$[$i$$59_prop$$42$$]);
      }
      $opt$$14$$.sortDir = this.$_getSortDirStr$();
    }
    this.$_isVirtual$() && ($opt$$14$$[$oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$] = this.$_getFetchSize$($opt$$14$$));
    return $opt$$14$$;
  };
  $oj$$1$$.$Collection$.prototype.$GetCollectionFetchUrl$ = function $$oj$$1$$$$Collection$$$$GetCollectionFetchUrl$$($attrs$$14_comparator$$9_options$$87_queryString$$) {
    var $url$$17$$ = $oj$$1$$.$Model$.$IsFunction$(this.url) ? this.url() : this.url;
    if (this.$_isVirtual$()) {
      var $all_sortDirStr$$ = $attrs$$14_comparator$$9_options$$87_queryString$$.all, $i$$60_limit$$4_totalResults$$4$$ = null;
      $i$$60_limit$$4_totalResults$$4$$ = $all_sortDirStr$$ ? ($i$$60_limit$$4_totalResults$$4$$ = this.totalResults) ? $i$$60_limit$$4_totalResults$$4$$ : this.$_getFetchSize$($attrs$$14_comparator$$9_options$$87_queryString$$) : this.$_getFetchSize$($attrs$$14_comparator$$9_options$$87_queryString$$);
      $url$$17$$ += "?limit\x3d" + $i$$60_limit$$4_totalResults$$4$$;
      $all_sortDirStr$$ || ($attrs$$14_comparator$$9_options$$87_queryString$$.startIndex && ($url$$17$$ += "\x26offset\x3d" + $attrs$$14_comparator$$9_options$$87_queryString$$.startIndex), $attrs$$14_comparator$$9_options$$87_queryString$$.startID && ($url$$17$$ += "\x26fromID\x3d" + $attrs$$14_comparator$$9_options$$87_queryString$$.startID), $attrs$$14_comparator$$9_options$$87_queryString$$.since && ($url$$17$$ += "\x26since\x3d" + $attrs$$14_comparator$$9_options$$87_queryString$$.since), $attrs$$14_comparator$$9_options$$87_queryString$$.until && 
      ($url$$17$$ += "\x26until\x3d" + $attrs$$14_comparator$$9_options$$87_queryString$$.until));
      $attrs$$14_comparator$$9_options$$87_queryString$$.query && ($attrs$$14_comparator$$9_options$$87_queryString$$ = $oj$$1$$.$Collection$.$_getQueryString$($attrs$$14_comparator$$9_options$$87_queryString$$.query)) && 0 < $attrs$$14_comparator$$9_options$$87_queryString$$.length && ($url$$17$$ += "\x26q\x3d" + $attrs$$14_comparator$$9_options$$87_queryString$$);
      if ($attrs$$14_comparator$$9_options$$87_queryString$$ = this.comparator) {
        for ($attrs$$14_comparator$$9_options$$87_queryString$$ = this.$_getSortAttrs$($attrs$$14_comparator$$9_options$$87_queryString$$), $all_sortDirStr$$ = this.$_getSortDirStr$(), $i$$60_limit$$4_totalResults$$4$$ = 0;$i$$60_limit$$4_totalResults$$4$$ < $attrs$$14_comparator$$9_options$$87_queryString$$.length;$i$$60_limit$$4_totalResults$$4$$++) {
          $url$$17$$ = 0 === $i$$60_limit$$4_totalResults$$4$$ ? $url$$17$$ + ("\x26orderBy\x3d" + $attrs$$14_comparator$$9_options$$87_queryString$$[$i$$60_limit$$4_totalResults$$4$$] + ":" + $all_sortDirStr$$) : $url$$17$$ + ("," + $attrs$$14_comparator$$9_options$$87_queryString$$[$i$$60_limit$$4_totalResults$$4$$] + ":" + $all_sortDirStr$$);
        }
      }
      $url$$17$$ += "\x26totalResults\x3dtrue";
    }
    return $url$$17$$;
  };
  $oj$$1$$.$Collection$.prototype.$_getSortDirStr$ = function $$oj$$1$$$$Collection$$$$_getSortDirStr$$() {
    return-1 === this.sortDirection ? "dsc" : "asc";
  };
  $oj$$1$$.$Collection$.prototype.sync = function $$oj$$1$$$$Collection$$$sync$($method$$5$$, $collection$$23$$, $options$$88$$) {
    return window.oj.sync($method$$5$$, $collection$$23$$, $options$$88$$);
  };
  $oj$$1$$.$Collection$.$_FETCH_SIZE_PROP$ = "fetchSize";
  $oj$$1$$.$RestImpl$ = function $$oj$$1$$$$RestImpl$$($rootURL$$, $custom$$1$$) {
    this.$rootURL$ = $rootURL$$;
    this.$customURL$ = $custom$$1$$;
    jQuery.support.cors = !0;
  };
  $oj$$1$$.$RestImpl$.$_HEADER_PROP$ = "headers";
  $oj$$1$$.$RestImpl$.$addOptions$ = function $$oj$$1$$$$RestImpl$$$addOptions$$($starter$$, $options$$89$$, $customOptions$$) {
    var $prop$$43$$;
    $starter$$ = $$$$1$$.extend(!0, $starter$$, $customOptions$$);
    for ($prop$$43$$ in $options$$89$$) {
      $options$$89$$.hasOwnProperty($prop$$43$$) && "oauthHeader" !== $prop$$43$$ && ($starter$$.hasOwnProperty($prop$$43$$) || ($starter$$[$prop$$43$$] = $options$$89$$[$prop$$43$$]), $prop$$43$$ === $oj$$1$$.$RestImpl$.$_HEADER_PROP$ && ($starter$$[$prop$$43$$] = $$$$1$$.extend(!0, $starter$$[$prop$$43$$], $options$$89$$[$prop$$43$$])));
    }
    if ($options$$89$$.oauthHeader) {
      for ($prop$$43$$ in $starter$$[$oj$$1$$.$RestImpl$.$_HEADER_PROP$] || ($starter$$[$oj$$1$$.$RestImpl$.$_HEADER_PROP$] = {}), $options$$89$$.oauthHeader) {
        $options$$89$$.oauthHeader.hasOwnProperty($prop$$43$$) && ($starter$$[$oj$$1$$.$RestImpl$.$_HEADER_PROP$].hasOwnProperty($prop$$43$$) || ($starter$$[$oj$$1$$.$RestImpl$.$_HEADER_PROP$][$prop$$43$$] = $options$$89$$.oauthHeader[$prop$$43$$]));
      }
    }
    return $starter$$;
  };
  $oj$$1$$.$RestImpl$.prototype.$getRecords$ = function $$oj$$1$$$$RestImpl$$$$getRecords$$($ajaxOptions$$1_callback$$74$$, $errFunc$$, $options$$90$$, $context$$24$$) {
    $options$$90$$ = $options$$90$$ || {};
    var $isJsonp$$ = "jsonp" === $options$$90$$.dataType, $urlInfo$$ = this.$_getURL$("read", this.$rootURL$, this.$customURL$, null, $context$$24$$, $options$$90$$);
    $ajaxOptions$$1_callback$$74$$ = {crossDomain:$options$$90$$.crossDomain || !$isJsonp$$, dataType:$options$$90$$.dataType || "json", jsonpCallback:$options$$90$$.jsonpCallback, context:null !== $context$$24$$ ? $context$$24$$ : this, success:$ajaxOptions$$1_callback$$74$$, error:$errFunc$$};
    $ajaxOptions$$1_callback$$74$$ = this.$_addHeaderProp$($ajaxOptions$$1_callback$$74$$);
    $ajaxOptions$$1_callback$$74$$ = $oj$$1$$.$RestImpl$.$addOptions$($ajaxOptions$$1_callback$$74$$, $options$$90$$, $urlInfo$$);
    $options$$90$$.xhr = this.ajax($ajaxOptions$$1_callback$$74$$);
    return $options$$90$$.xhr;
  };
  $oj$$1$$.$RestImpl$.prototype.$_addHeaderProp$ = function $$oj$$1$$$$RestImpl$$$$_addHeaderProp$$($options$$91$$) {
    $options$$91$$[$oj$$1$$.$RestImpl$.$_HEADER_PROP$] = {"Accept-Language":this.$getLocale$()};
    return $options$$91$$;
  };
  $oj$$1$$.$RestImpl$.prototype.$getRecord$ = function $$oj$$1$$$$RestImpl$$$$getRecord$$($ajaxOptions$$2_success$$14$$, $error$$8$$, $recordID_urlInfo$$1$$, $options$$92$$, $context$$25$$) {
    $options$$92$$ = $options$$92$$ || {};
    var $isJsonp$$1$$ = "jsonp" === $options$$92$$.dataType;
    $recordID_urlInfo$$1$$ = this.$_getURL$("read", this.$rootURL$, this.$customURL$, $recordID_urlInfo$$1$$, $context$$25$$, $options$$92$$);
    $ajaxOptions$$2_success$$14$$ = {crossDomain:$options$$92$$.crossDomain || !$isJsonp$$1$$, dataType:$options$$92$$.dataType || "json", jsonpCallback:$options$$92$$.jsonpCallback, context:null !== $context$$25$$ ? $context$$25$$ : this, success:$ajaxOptions$$2_success$$14$$, error:$error$$8$$};
    $ajaxOptions$$2_success$$14$$ = this.$_addHeaderProp$($ajaxOptions$$2_success$$14$$);
    $ajaxOptions$$2_success$$14$$ = $oj$$1$$.$RestImpl$.$addOptions$($ajaxOptions$$2_success$$14$$, $options$$92$$, $recordID_urlInfo$$1$$);
    $options$$92$$.xhr = this.ajax($ajaxOptions$$2_success$$14$$);
    return $options$$92$$.xhr;
  };
  $oj$$1$$.$RestImpl$.prototype.$updateRecord$ = function $$oj$$1$$$$RestImpl$$$$updateRecord$$($ajaxOptions$$3_callback$$75$$, $recordID$$1_urlInfo$$2$$, $record$$, $error$$9$$, $options$$93$$, $context$$26$$, $patch$$1$$) {
    $options$$93$$ = $options$$93$$ || {};
    var $isJsonp$$2$$ = "jsonp" === $options$$93$$.dataType;
    $recordID$$1_urlInfo$$2$$ = this.$_getURL$($patch$$1$$ ? "patch" : "update", this.$rootURL$, this.$customURL$, $recordID$$1_urlInfo$$2$$, $context$$26$$, $options$$93$$);
    $ajaxOptions$$3_callback$$75$$ = {crossDomain:$options$$93$$.crossDomain || !$isJsonp$$2$$, contentType:$options$$93$$.contentType || "application/json", dataType:$options$$93$$.dataType || "json", jsonpCallback:$options$$93$$.jsonpCallback, data:JSON.stringify($record$$), success:$ajaxOptions$$3_callback$$75$$, error:$error$$9$$, context:null !== $context$$26$$ ? $context$$26$$ : this};
    $ajaxOptions$$3_callback$$75$$ = this.$_addHeaderProp$($ajaxOptions$$3_callback$$75$$);
    $ajaxOptions$$3_callback$$75$$ = $oj$$1$$.$RestImpl$.$addOptions$($ajaxOptions$$3_callback$$75$$, $options$$93$$, $recordID$$1_urlInfo$$2$$);
    $options$$93$$.xhr = this.ajax($ajaxOptions$$3_callback$$75$$);
    return $options$$93$$.xhr;
  };
  $oj$$1$$.$RestImpl$.prototype.$_getHTTPMethod$ = function $$oj$$1$$$$RestImpl$$$$_getHTTPMethod$$($operation$$2$$, $options$$94$$) {
    return $options$$94$$.type ? $options$$94$$.type : "create" === $operation$$2$$ ? "POST" : "delete" === $operation$$2$$ ? "DELETE" : "patch" === $operation$$2$$ ? "PATCH" : "update" === $operation$$2$$ ? "PUT" : "GET";
  };
  $oj$$1$$.$RestImpl$.prototype.$_setCustomURLOptions$ = function $$oj$$1$$$$RestImpl$$$$_setCustomURLOptions$$($recordID$$2$$, $context$$27_options$$95$$, $opt$$15$$) {
    $context$$27_options$$95$$ = $context$$27_options$$95$$ instanceof $oj$$1$$.$Collection$ ? $context$$27_options$$95$$.$ModifyOptionsForCustomURL$($opt$$15$$) : {};
    $recordID$$2$$ && ($context$$27_options$$95$$.recordID = $recordID$$2$$);
    return $context$$27_options$$95$$;
  };
  $oj$$1$$.$RestImpl$.prototype.$_getURL$ = function $$oj$$1$$$$RestImpl$$$$_getURL$$($operation$$3$$, $rootURL$$1$$, $customURL$$1_result$$, $recordID$$3$$, $context$$28$$, $options$$96$$) {
    if ($oj$$1$$.$Model$.$IsFunction$($customURL$$1_result$$)) {
      $customURL$$1_result$$ = $customURL$$1_result$$.call(this, $operation$$3$$, $context$$28$$, this.$_setCustomURLOptions$($recordID$$3$$, $context$$28$$, $options$$96$$));
      if ($oj$$1$$.$StringUtils$.$isString$($customURL$$1_result$$)) {
        return{url:$customURL$$1_result$$, type:this.$_getHTTPMethod$($operation$$3$$, $options$$96$$)};
      }
      if ($customURL$$1_result$$) {
        return $customURL$$1_result$$.url = $customURL$$1_result$$.hasOwnProperty("url") ? $customURL$$1_result$$.url : $rootURL$$1$$, $customURL$$1_result$$.type = $customURL$$1_result$$.hasOwnProperty("type") ? $customURL$$1_result$$.type : this.$_getHTTPMethod$($operation$$3$$, $options$$96$$), $customURL$$1_result$$;
      }
    }
    return{url:$rootURL$$1$$, type:this.$_getHTTPMethod$($operation$$3$$, $options$$96$$)};
  };
  $oj$$1$$.$RestImpl$.prototype.$deleteRecord$ = function $$oj$$1$$$$RestImpl$$$$deleteRecord$$($recordID$$4_urlInfo$$3$$, $ajaxOptions$$4_error$$10$$, $options$$97$$, $context$$29$$) {
    $options$$97$$ = $options$$97$$ || {};
    var $isJsonp$$3$$ = "jsonp" === $options$$97$$.dataType;
    $recordID$$4_urlInfo$$3$$ = this.$_getURL$("delete", this.$rootURL$, this.$customURL$, $recordID$$4_urlInfo$$3$$, $context$$29$$, $options$$97$$);
    $ajaxOptions$$4_error$$10$$ = {crossDomain:$options$$97$$.crossDomain || !$isJsonp$$3$$, success:$options$$97$$.success, error:$ajaxOptions$$4_error$$10$$, context:null !== $context$$29$$ ? $context$$29$$ : this};
    $ajaxOptions$$4_error$$10$$ = $oj$$1$$.$RestImpl$.$addOptions$($ajaxOptions$$4_error$$10$$, $options$$97$$, $recordID$$4_urlInfo$$3$$);
    $options$$97$$.xhr = this.ajax($ajaxOptions$$4_error$$10$$);
    return $options$$97$$.xhr;
  };
  $oj$$1$$.$RestImpl$.prototype.$addRecord$ = function $$oj$$1$$$$RestImpl$$$$addRecord$$($record$$1_urlInfo$$4$$, $ajaxOptions$$5_error$$11$$, $options$$98$$, $context$$30$$) {
    $options$$98$$ = $options$$98$$ || {};
    var $recordStr$$ = JSON.stringify($record$$1_urlInfo$$4$$), $isJsonp$$4$$ = "jsonp" === $options$$98$$.dataType;
    $record$$1_urlInfo$$4$$ = this.$_getURL$("create", this.$rootURL$, this.$customURL$, null, $context$$30$$, $options$$98$$);
    $ajaxOptions$$5_error$$11$$ = {crossDomain:$options$$98$$.crossDomain || !$isJsonp$$4$$, contentType:$options$$98$$.contentType || "application/json", dataType:$options$$98$$.dataType || "json", jsonpCallback:$options$$98$$.jsonpCallback, data:$recordStr$$, success:$options$$98$$.success, error:$ajaxOptions$$5_error$$11$$, context:null !== $context$$30$$ ? $context$$30$$ : this};
    $ajaxOptions$$5_error$$11$$ = this.$_addHeaderProp$($ajaxOptions$$5_error$$11$$);
    $ajaxOptions$$5_error$$11$$ = $oj$$1$$.$RestImpl$.$addOptions$($ajaxOptions$$5_error$$11$$, $options$$98$$, $record$$1_urlInfo$$4$$);
    $options$$98$$.xhr = this.ajax($ajaxOptions$$5_error$$11$$);
    return $options$$98$$.xhr;
  };
  $oj$$1$$.$RestImpl$.prototype.$getLocale$ = function $$oj$$1$$$$RestImpl$$$$getLocale$$() {
    return $oj$$1$$.$Config$.$getLocale$();
  };
  $oj$$1$$.$RestImpl$.prototype.ajax = function $$oj$$1$$$$RestImpl$$$ajax$($settings$$3$$) {
    return window.oj.ajax($settings$$3$$);
  };
  $oj$$1$$.$OAuth$ = function $$oj$$1$$$$OAuth$$($header$$2$$, $attributes$$8$$) {
    $attributes$$8$$ = $attributes$$8$$ || {};
    $oj$$1$$.$OAuth$._init(this, $attributes$$8$$, $header$$2$$ || "Authorization");
  };
  $goog$exportPath_$$("OAuth", $oj$$1$$.$OAuth$, $oj$$1$$);
  $oj$$1$$.$Object$.$createSubclass$($oj$$1$$.$OAuth$, $oj$$1$$.$Object$, "OAuth.OAuth");
  $oj$$1$$.$OAuth$.prototype.Init = function $$oj$$1$$$$OAuth$$$Init$() {
    $oj$$1$$.$OAuth$.$superclass$.Init.call(this);
  };
  $oj$$1$$.$OAuth$.prototype.$getHeader$ = function $$oj$$1$$$$OAuth$$$$getHeader$$() {
    var $headers$$ = {};
    this.$accessTokenResponse$.access_token || this.$clientCredentialGrant$();
    $headers$$[this.$accessTokenRequest$.$auth_header$] = "Bearer " + this.$accessTokenResponse$.access_token;
    return $headers$$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.getHeader", {$getHeader$:$oj$$1$$.$OAuth$.prototype.$getHeader$});
  $oj$$1$$.$OAuth$.prototype.$isInitialized$ = function $$oj$$1$$$$OAuth$$$$isInitialized$$() {
    return this.$accessTokenResponse$.$access_token$ ? !0 : !1;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.isInitialized", {$isInitialized$:$oj$$1$$.$OAuth$.prototype.$isInitialized$});
  $oj$$1$$.$OAuth$.prototype.$clientCredentialGrant$ = function $$oj$$1$$$$OAuth$$$$clientCredentialGrant$$() {
    var $headers$$1$$ = {}, $self$$24$$ = this;
    $headers$$1$$[$self$$24$$.$accessTokenRequest$.$auth_header$] = "Basic " + $oj$$1$$.$OAuth$.$_base64_encode$($self$$24$$.$accessTokenRequest$.client_id + ":" + $self$$24$$.$accessTokenRequest$.client_secret);
    $$$$1$$.ajax({type:"POST", async:!1, url:this.$accessTokenRequest$.bearer_url, data:"grant_type\x3dclient_credentials", headers:$headers$$1$$, success:function($data$$39$$) {
      $oj$$1$$.$OAuth$.$_initAccessToken$($self$$24$$.$accessTokenResponse$, $data$$39$$);
    }, error:function($jqXHR$$1$$) {
      throw Error($jqXHR$$1$$.responseText);
    }});
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.clientCredentialGrant", {$clientCredentialGrant$:$oj$$1$$.$OAuth$.prototype.$clientCredentialGrant$});
  $oj$$1$$.$OAuth$.prototype.$setAccessTokenResponse$ = function $$oj$$1$$$$OAuth$$$$setAccessTokenResponse$$($data$$40$$) {
    $oj$$1$$.$OAuth$.$_initAccessToken$(this.$accessTokenResponse$, $data$$40$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.setAccessTokenResponse", {$setAccessTokenResponse$:$oj$$1$$.$OAuth$.prototype.$setAccessTokenResponse$});
  $oj$$1$$.$OAuth$.prototype.$getAccessTokenResponse$ = function $$oj$$1$$$$OAuth$$$$getAccessTokenResponse$$() {
    return this.$accessTokenResponse$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.getAccessTokenResponse", {$getAccessTokenResponse$:$oj$$1$$.$OAuth$.prototype.$getAccessTokenResponse$});
  $oj$$1$$.$OAuth$.prototype.$cleanAccessTokenResponse$ = function $$oj$$1$$$$OAuth$$$$cleanAccessTokenResponse$$() {
    $oj$$1$$.$OAuth$.$_cleanAccessToken$(this.$accessTokenResponse$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.cleanAccessTokenResponse", {$cleanAccessTokenResponse$:$oj$$1$$.$OAuth$.prototype.$cleanAccessTokenResponse$});
  $oj$$1$$.$OAuth$.prototype.$setAccessTokenRequest$ = function $$oj$$1$$$$OAuth$$$$setAccessTokenRequest$$($data$$41$$) {
    $oj$$1$$.$OAuth$.$_initAccessToken$(this.$accessTokenRequest$, $data$$41$$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.setAccessTokenRequest", {$setAccessTokenRequest$:$oj$$1$$.$OAuth$.prototype.$setAccessTokenRequest$});
  $oj$$1$$.$OAuth$.prototype.$getAccessTokenRequest$ = function $$oj$$1$$$$OAuth$$$$getAccessTokenRequest$$() {
    return this.$accessTokenRequest$;
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.getAccessTokenRequest", {$getAccessTokenRequest$:$oj$$1$$.$OAuth$.prototype.$getAccessTokenRequest$});
  $oj$$1$$.$OAuth$.prototype.$cleanAccessTokenRequest$ = function $$oj$$1$$$$OAuth$$$$cleanAccessTokenRequest$$() {
    $oj$$1$$.$OAuth$.$_cleanAccessToken$(this.$accessTokenRequest$);
  };
  $oj$$1$$.$Object$.$exportPrototypeSymbol$("OAuth.prototype.cleanAccessTokenRequest", {$cleanAccessTokenRequest$:$oj$$1$$.$OAuth$.prototype.$cleanAccessTokenRequest$});
  $oj$$1$$.$OAuth$._init = function $$oj$$1$$$$OAuth$$_init$($oauth$$, $attributes$$9$$, $header$$3$$) {
    $oauth$$.Init();
    $oauth$$.$accessTokenRequest$ = {};
    $oauth$$.$accessTokenResponse$ = {};
    $attributes$$9$$.access_token ? $oj$$1$$.$OAuth$.$_initAccessToken$($oauth$$.$accessTokenResponse$, $attributes$$9$$) : $attributes$$9$$.client_id && $attributes$$9$$.client_secret && $attributes$$9$$.bearer_url && $oj$$1$$.$OAuth$.$_initAccessToken$($oauth$$.$accessTokenRequest$, $attributes$$9$$);
    $oauth$$.$accessTokenRequest$.$auth_header$ = $header$$3$$;
  };
  $oj$$1$$.$OAuth$.$_initAccessToken$ = function $$oj$$1$$$$OAuth$$$_initAccessToken$$($oauthObj$$, $data$$42$$) {
    var $prop$$44$$;
    $data$$42$$ = $data$$42$$ || {};
    for ($prop$$44$$ in $data$$42$$) {
      $oauthObj$$[$prop$$44$$] = $data$$42$$[$prop$$44$$];
    }
  };
  $oj$$1$$.$OAuth$.$_cleanAccessToken$ = function $$oj$$1$$$$OAuth$$$_cleanAccessToken$$($oauthObj$$1$$) {
    for (var $key$$25$$ in $oauthObj$$1$$) {
      $oauthObj$$1$$.hasOwnProperty($key$$25$$) && "auth_header" !== $key$$25$$ && ($oauthObj$$1$$[$key$$25$$] = null, delete $oauthObj$$1$$[$key$$25$$]);
    }
  };
  $oj$$1$$.$OAuth$.$_base64_encode$ = function $$oj$$1$$$$OAuth$$$_base64_encode$$($a$$61$$) {
    var $d$$, $e$$26$$, $f$$, $b$$30$$, $g$$ = 0, $h$$4$$ = 0, $c$$16$$ = [];
    do {
      $d$$ = $a$$61$$.charCodeAt($g$$++), $e$$26$$ = $a$$61$$.charCodeAt($g$$++), $f$$ = $a$$61$$.charCodeAt($g$$++), $b$$30$$ = $d$$ << 16 | $e$$26$$ << 8 | $f$$, $d$$ = $b$$30$$ >> 18 & 63, $e$$26$$ = $b$$30$$ >> 12 & 63, $f$$ = $b$$30$$ >> 6 & 63, $b$$30$$ &= 63, $c$$16$$[$h$$4$$++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt($d$$) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt($e$$26$$) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt($f$$) + 
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".charAt($b$$30$$);
    } while ($g$$ < $a$$61$$.length);
    $c$$16$$ = $c$$16$$.join("");
    $d$$ = $a$$61$$.length % 3;
    return($d$$ ? $c$$16$$.slice(0, $d$$ - 3) : $c$$16$$) + "\x3d\x3d\x3d".slice($d$$ || 3);
  };
});
