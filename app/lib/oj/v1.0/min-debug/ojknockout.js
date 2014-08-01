/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "knockout"], function($oj$$7$$, $$$$7$$, $ko$$1$$) {
  function $_extractValueFromChangeEvent$$($event$$37$$, $eventData$$1$$) {
    var $nameVal$$ = {};
    $nameVal$$.value = $eventData$$1$$.value;
    return $nameVal$$;
  }
  function $_extractOptionChange$$($event$$38$$, $eventData$$2$$) {
    var $nameVal$$1$$ = {}, $metadata$$ = $eventData$$2$$.optionMetadata;
    $metadata$$ && "shouldWrite" === $metadata$$.writeback && ($nameVal$$1$$[$eventData$$2$$.option] = $eventData$$2$$.value);
    return $nameVal$$1$$;
  }
  function $GlobalChangeQueue$$() {
    this.Init();
  }
  function $ComponentChangeTracker$$($component$$7$$, $element$$24$$, $queue$$) {
    this.Init($component$$7$$, $element$$24$$, $queue$$);
  }
  function $_getDataGridHeaderRenderer$$($bindingContext$$, $template$$) {
    return function($context$$36$$) {
      var $parent$$2$$, $childContext$$;
      $parent$$2$$ = $context$$36$$.parentElement;
      $childContext$$ = $bindingContext$$.createChildContext($context$$36$$.data, null, function($binding$$) {
        $binding$$.$key = $context$$36$$.key;
        $binding$$.$metadata = $context$$36$$.metadata;
        $binding$$.$headerContext = $context$$36$$;
      });
      $ko$$1$$.renderTemplate($template$$, $childContext$$, null, $parent$$2$$);
      return null;
    };
  }
  function $_getDataGridCellRenderer$$($bindingContext$$1$$, $template$$1$$) {
    return function($context$$37$$) {
      var $parent$$3$$, $childContext$$1$$;
      $parent$$3$$ = $context$$37$$.parentElement;
      $childContext$$1$$ = $bindingContext$$1$$.createChildContext($context$$37$$.data, null, function($binding$$1$$) {
        $binding$$1$$.$keys = $context$$37$$.keys;
        $binding$$1$$.$metadata = $context$$37$$.metadata;
        $binding$$1$$.$cellContext = $context$$37$$;
      });
      $ko$$1$$.renderTemplate($template$$1$$, $childContext$$1$$, null, $parent$$3$$);
      return null;
    };
  }
  function $_getTableColumnTemplateRenderer$$($bindingContext$$2$$, $type$$75$$, $template$$2$$) {
    var $rendererOption$$ = {};
    (function($template$$3$$, $type$$76$$) {
      $rendererOption$$ = function $$rendererOption$$$($params$$11$$) {
        var $childContext$$2$$ = null, $parentElement$$ = null;
        "header" == $type$$76$$ ? ($childContext$$2$$ = $bindingContext$$2$$.extend({$column:$params$$11$$.column, $headerContext:$params$$11$$.headerContext}), $parentElement$$ = $params$$11$$.headerContext.parentElement) : "cell" == $type$$76$$ && ($childContext$$2$$ = $bindingContext$$2$$.createChildContext($params$$11$$.row, null, function($binding$$2$$) {
          $binding$$2$$.$column = $params$$11$$.column;
          $binding$$2$$.$cellContext = $params$$11$$.cellContext;
        }), $parentElement$$ = $params$$11$$.cellContext.parentElement);
        "footer" == $type$$76$$ && ($childContext$$2$$ = $bindingContext$$2$$.extend({$column:$params$$11$$.column, $footerContext:$params$$11$$.footerContext}), $parentElement$$ = $params$$11$$.footerContext.parentElement);
        $ko$$1$$.renderTemplate($template$$3$$, $childContext$$2$$, null, $parentElement$$, "replaceNode");
      };
    })($template$$2$$, $type$$75$$);
    return $rendererOption$$;
  }
  function $_getTableRowTemplateRenderer$$($bindingContext$$3$$, $template$$4$$) {
    return function($params$$12$$) {
      var $childContext$$3$$ = $bindingContext$$3$$.createChildContext($params$$12$$.row, null, function($binding$$3$$) {
        $binding$$3$$.$rowContext = $params$$12$$.rowContext;
      });
      $ko$$1$$.renderTemplate($template$$4$$, $childContext$$3$$, null, $params$$12$$.rowContext.parentElement, "replaceNode");
    };
  }
  $oj$$7$$.$ComponentBinding$ = function $$oj$$7$$$$ComponentBinding$$($name$$76$$, $options$$182$$) {
    this.Init($name$$76$$, $options$$182$$);
  };
  $goog$exportPath_$$("ComponentBinding", $oj$$7$$.$ComponentBinding$, $oj$$7$$);
  $oj$$7$$.$Object$.$createSubclass$($oj$$7$$.$ComponentBinding$, $oj$$7$$.$Object$, "oj.ComponentBinding");
  $oj$$7$$.$ComponentBinding$.create = function $$oj$$7$$$$ComponentBinding$$create$($name$$77$$, $options$$183$$) {
    if (null == $name$$77$$) {
      throw "Binding name is required!";
    }
    var $instance$$14$$ = new $oj$$7$$.$ComponentBinding$($name$$77$$, $options$$183$$), $handlers$$5$$ = $ko$$1$$.bindingHandlers, $i$$99$$, $names$$1$$ = Array.isArray($name$$77$$) ? $name$$77$$ : [$name$$77$$];
    for ($i$$99$$ = 0;$i$$99$$ < $names$$1$$.length;$i$$99$$++) {
      $handlers$$5$$[$names$$1$$[$i$$99$$]] = $instance$$14$$;
    }
    return $instance$$14$$;
  };
  $goog$exportPath_$$("ComponentBinding.create", $oj$$7$$.$ComponentBinding$.create, $oj$$7$$);
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$ = function $$oj$$7$$$$ComponentBinding$$$getDefaultInstance$$() {
    return $oj$$7$$.$ComponentBinding$.$_INSTANCE$;
  };
  $goog$exportPath_$$("ComponentBinding.getDefaultInstance", $oj$$7$$.$ComponentBinding$.$getDefaultInstance$, $oj$$7$$);
  $oj$$7$$.$ComponentBinding$.prototype.$setupManagedAttributes$ = function $$oj$$7$$$$ComponentBinding$$$$setupManagedAttributes$$($opts$$8$$) {
    var $forName$$ = $opts$$8$$["for"], $forName$$ = null == $forName$$ ? "@global" : $forName$$;
    $oj$$7$$.$Logger$.option("level") >= $oj$$7$$.$Logger$.$LEVEL_ERROR$ && this.$_managedAttrOptions$[$forName$$] && $oj$$7$$.$Logger$.error("Managed Attributes for '%s' are redefined", $forName$$);
    this.$_managedAttrOptions$[$forName$$] = $opts$$8$$;
  };
  $oj$$7$$.$Object$.$exportPrototypeSymbol$("ComponentBinding.prototype.setupManagedAttributes", {$setupManagedAttributes$:$oj$$7$$.$ComponentBinding$.prototype.$setupManagedAttributes$});
  $oj$$7$$.$ComponentBinding$.$deliverChanges$ = function $$oj$$7$$$$ComponentBinding$$$deliverChanges$$() {
    $oj$$7$$.$ComponentBinding$.$_changeQueue$.$deliverChanges$();
  };
  $goog$exportPath_$$("ComponentBinding.deliverChanges", $oj$$7$$.$ComponentBinding$.$deliverChanges$, $oj$$7$$);
  $oj$$7$$.$ComponentBinding$.prototype.Init = function $$oj$$7$$$$ComponentBinding$$$Init$($names$$2$$, $options$$184$$) {
    $oj$$7$$.$ComponentBinding$.$superclass$.Init.call(this);
    "string" === typeof $options$$184$$ && ($options$$184$$ = {componentName:$options$$184$$});
    this.$_bindingOptions$ = $options$$184$$ || {};
    this.$_bindingNames$ = Array.isArray($names$$2$$) ? $names$$2$$ : [$names$$2$$];
    this.init = $oj$$7$$.$Object$.$createCallback$(this, this._init);
    this.update = $oj$$7$$.$Object$.$createCallback$(this, this.$_update$);
    this.$_managedAttrOptions$ = {};
  };
  $oj$$7$$.$ComponentBinding$.$_NEEDS_JUIB_INIT$ = "_ojNeedsJUIBInit";
  $oj$$7$$.$ComponentBinding$.prototype._init = function $$oj$$7$$$$ComponentBinding$$$_init$($element$$25$$, $valueAccessor$$, $allBindingsAccessor$$, $viewModel$$1$$, $bindingContext$$4$$) {
    $ko$$1$$.applyBindingsToDescendants($bindingContext$$4$$, $element$$25$$);
    $$$$7$$($element$$25$$).data($oj$$7$$.$ComponentBinding$.$_NEEDS_JUIB_INIT$, !0);
    return{controlsDescendantBindings:!0};
  };
  $oj$$7$$.$ComponentBinding$.prototype.$_update$ = function $$oj$$7$$$$ComponentBinding$$$$_update$$($element$$26$$, $valueAccessor$$1$$, $allBindingsAccessor$$1$$, $jelem$$4_viewModel$$2$$, $bindingContext$$5$$) {
    $jelem$$4_viewModel$$2$$ = $$$$7$$($element$$26$$);
    $jelem$$4_viewModel$$2$$.data($oj$$7$$.$ComponentBinding$.$_NEEDS_JUIB_INIT$) && ($jelem$$4_viewModel$$2$$.data($oj$$7$$.$ComponentBinding$.$_NEEDS_JUIB_INIT$, null), this.$_initComponent$($element$$26$$, $jelem$$4_viewModel$$2$$, $valueAccessor$$1$$, $allBindingsAccessor$$1$$, $bindingContext$$5$$));
  };
  $oj$$7$$.$ComponentBinding$.prototype.$_initComponent$ = function $$oj$$7$$$$ComponentBinding$$$$_initComponent$$($element$$27$$, $jelem$$5$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$6$$) {
    var $options$$185$$ = $valueAccessor$$2$$(), $roleAttrName$$ = null, $disposed$$ = !1, $registeredListers$$ = [], $tracker$$3$$ = null, $comp$$2$$ = null, $bindingMap$$ = $oj$$7$$.$ComponentBinding$.$_getBindingValueMap$(this.$_bindingNames$, $element$$27$$, $bindingContext$$6$$), $stage$$ = 0, $attributeEvaluatorCache$$ = {}, $componentName$$1$$ = this.$_bindingOptions$.componentName;
    if (null == $componentName$$1$$) {
      $roleAttrName$$ = "component";
      if (!$bindingMap$$[$roleAttrName$$] && ($roleAttrName$$ = "role", !$bindingMap$$[$roleAttrName$$])) {
        $oj$$7$$.$Logger$.error("component attribute is required for the ojComponent binding");
        return;
      }
      var $role$$ = $options$$185$$[$roleAttrName$$];
      if (null == $role$$) {
        $oj$$7$$.$Logger$.error("non-null component attribute is required for the ojComponent binding");
        return;
      }
      $ko$$1$$.computed(function() {
        $oj$$7$$.$ComponentBinding$.$_evaluatePropertyExpression$($bindingMap$$[$roleAttrName$$], $roleAttrName$$, $attributeEvaluatorCache$$, $bindingContext$$6$$);
        if (0 == $stage$$) {
          $componentName$$1$$ = $ko$$1$$.utils.unwrapObservable($role$$);
        } else {
          $disposed$$ = !0;
          $bindingMap$$ = null;
          $oj$$7$$.$ComponentBinding$.$_unregisterWritebacks$($jelem$$5$$);
          if ($comp$$2$$) {
            $tracker$$3$$.$dispose$();
            $tracker$$3$$ = null;
            var $destroyCallback_l$$2$$ = this.$_bindingOptions$.beforeDestroy;
            $destroyCallback_l$$2$$ && $destroyCallback_l$$2$$($element$$27$$, $comp$$2$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$6$$);
            $comp$$2$$("destroy");
            $comp$$2$$ = null;
            for ($destroyCallback_l$$2$$ = 0;$destroyCallback_l$$2$$ < $registeredListers$$.length;$destroyCallback_l$$2$$++) {
              $registeredListers$$[$destroyCallback_l$$2$$].$dispose$();
            }
            $registeredListers$$ = null;
          }
          this.$_initComponent$($element$$27$$, $jelem$$5$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$6$$);
        }
        return null;
      }, this, {disposeWhenNodeIsRemoved:$element$$27$$});
    }
    if (null != $componentName$$1$$) {
      if ($comp$$2$$ = $jelem$$5$$[$componentName$$1$$], "function" === typeof $comp$$2$$) {
        var $comp$$2$$ = $comp$$2$$.bind($jelem$$5$$), $managedAttrMap$$ = $oj$$7$$.$ComponentBinding$.$_resolveManagedAttributes$(this.$_managedAttrOptions$, $bindingMap$$, $componentName$$1$$), $defaultInstance_defaultManagedMap_writablePropMap$$ = $oj$$7$$.$ComponentBinding$.$getDefaultInstance$();
        this !== $defaultInstance_defaultManagedMap_writablePropMap$$ && ($defaultInstance_defaultManagedMap_writablePropMap$$ = $defaultInstance_defaultManagedMap_writablePropMap$$.$_getManagedAttributes$($bindingMap$$, $componentName$$1$$), $oj$$7$$.$CollectionUtils$.$copyInto$($defaultInstance_defaultManagedMap_writablePropMap$$, $managedAttrMap$$), $managedAttrMap$$ = $defaultInstance_defaultManagedMap_writablePropMap$$);
        var $propertyMap$$ = {}, $tracker$$3$$ = new $ComponentChangeTracker$$($comp$$2$$, $element$$27$$, $oj$$7$$.$ComponentBinding$.$_changeQueue$), $defaultInstance_defaultManagedMap_writablePropMap$$ = {"^slider$":[{event:"slidechange", getter:$_extractValueFromChangeEvent$$}], "^oj*":[{event:"ojoptionchange", getter:$_extractOptionChange$$}]}, $handler$$45$$ = function $$handler$$45$$$() {
          var $initProps_prop$$51_updateProps$$ = this.$_property$, $exp$$1_initFunc_v$$ = $bindingMap$$[$initProps_prop$$51_updateProps$$];
          $exp$$1_initFunc_v$$ && $oj$$7$$.$ComponentBinding$.$_evaluatePropertyExpression$($exp$$1_initFunc_v$$, $initProps_prop$$51_updateProps$$, $attributeEvaluatorCache$$, $bindingContext$$6$$);
          if (0 === $stage$$) {
            var $p$$4_value$$142$$ = $oj$$7$$.$ComponentBinding$.$_toJS$($options$$185$$[$initProps_prop$$51_updateProps$$]);
            null != $managedAttrMap$$[$initProps_prop$$51_updateProps$$] ? ($exp$$1_initFunc_v$$ = $managedAttrMap$$[$initProps_prop$$51_updateProps$$].$init$, null != $exp$$1_initFunc_v$$ && ($initProps_prop$$51_updateProps$$ = $exp$$1_initFunc_v$$($initProps_prop$$51_updateProps$$, $p$$4_value$$142$$, $element$$27$$, $comp$$2$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$6$$) || {}, $oj$$7$$.$CollectionUtils$.$copyInto$($propertyMap$$, $initProps_prop$$51_updateProps$$))) : 
            $propertyMap$$[$initProps_prop$$51_updateProps$$] = $p$$4_value$$142$$;
          } else {
            if (!$disposed$$) {
              if ($exp$$1_initFunc_v$$ = $oj$$7$$.$ComponentBinding$.$_toJS$($valueAccessor$$2$$()[$initProps_prop$$51_updateProps$$]), null != $managedAttrMap$$[$initProps_prop$$51_updateProps$$]) {
                var $updateFunc$$ = $managedAttrMap$$[$initProps_prop$$51_updateProps$$].update;
                if (null != $updateFunc$$) {
                  for ($p$$4_value$$142$$ in $initProps_prop$$51_updateProps$$ = $updateFunc$$($initProps_prop$$51_updateProps$$, $exp$$1_initFunc_v$$, $element$$27$$, $comp$$2$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$6$$) || {}, $initProps_prop$$51_updateProps$$) {
                    $initProps_prop$$51_updateProps$$.hasOwnProperty($p$$4_value$$142$$) && $tracker$$3$$.$addChange$($p$$4_value$$142$$, $initProps_prop$$51_updateProps$$[$p$$4_value$$142$$]);
                  }
                }
              } else {
                $tracker$$3$$.$addChange$($initProps_prop$$51_updateProps$$, $exp$$1_initFunc_v$$);
              }
            }
          }
          return null;
        }, $mutationOptions_p$$3$$;
        for ($mutationOptions_p$$3$$ in $options$$185$$) {
          $options$$185$$.hasOwnProperty($mutationOptions_p$$3$$) && $mutationOptions_p$$3$$ !== $roleAttrName$$ && $registeredListers$$.push($ko$$1$$.computed($handler$$45$$, {$_property$:$mutationOptions_p$$3$$}, {disposeWhenNodeIsRemoved:$element$$27$$}));
        }
        $oj$$7$$.$ComponentBinding$.$_registerWritebacks$($jelem$$5$$, $componentName$$1$$, $defaultInstance_defaultManagedMap_writablePropMap$$, $valueAccessor$$2$$, $bindingMap$$, $tracker$$3$$, $bindingContext$$6$$);
        $mutationOptions_p$$3$$ = $oj$$7$$.$ComponentBinding$.$_extractDotNotationOptions$($propertyMap$$);
        $comp$$2$$($propertyMap$$);
        for (var $createCallback_mo$$ in $mutationOptions_p$$3$$) {
          $comp$$2$$("option", $createCallback_mo$$, $mutationOptions_p$$3$$[$createCallback_mo$$]);
        }
        ($createCallback_mo$$ = this.$_bindingOptions$.afterCreate) && $createCallback_mo$$($element$$27$$, $comp$$2$$, $valueAccessor$$2$$, $allBindingsAccessor$$2$$, $bindingContext$$6$$);
        $propertyMap$$ = null;
      } else {
        $oj$$7$$.$Logger$.error("Component %s is not found", $componentName$$1$$);
      }
    }
    $stage$$ = 1;
  };
  $oj$$7$$.$ComponentBinding$.$_getBindingValueMap$ = function $$oj$$7$$$$ComponentBinding$$$_getBindingValueMap$$($n$$17_names$$3$$, $elem$$18_keyValueArray$$, $bindingContext$$7_stringTrimRegex$$) {
    var $map$$ = {}, $bindingValue_i$$100_provider$$ = null, $bindingValue_i$$100_provider$$ = $ko$$1$$.bindingProvider.instance, $e$$44_selfVal$$;
    $e$$44_selfVal$$ = null;
    var $keyValueEntry$$, $bindingValue_i$$100_provider$$ = $bindingValue_i$$100_provider$$.$getBindingsString$ ? $bindingValue_i$$100_provider$$.$getBindingsString$($elem$$18_keyValueArray$$, $bindingContext$$7_stringTrimRegex$$) : $elem$$18_keyValueArray$$.getAttribute("data-bind");
    if (!$bindingValue_i$$100_provider$$) {
      return $map$$;
    }
    $elem$$18_keyValueArray$$ = $ko$$1$$.jsonExpressionRewriting.parseObjectLiteral($bindingValue_i$$100_provider$$);
    $bindingContext$$7_stringTrimRegex$$ = /^(\s|\u00A0)+|(\s|\u00A0)+$/g;
    for ($bindingValue_i$$100_provider$$ = 0;$bindingValue_i$$100_provider$$ < $elem$$18_keyValueArray$$.length;$bindingValue_i$$100_provider$$ += 1) {
      $keyValueEntry$$ = $elem$$18_keyValueArray$$[$bindingValue_i$$100_provider$$];
      var $bindingKey$$ = $keyValueEntry$$.key.replace($bindingContext$$7_stringTrimRegex$$, "");
      if (0 <= $n$$17_names$$3$$.indexOf($bindingKey$$)) {
        $e$$44_selfVal$$ = $keyValueEntry$$.value;
        break;
      }
    }
    if (!$e$$44_selfVal$$) {
      return $map$$;
    }
    $elem$$18_keyValueArray$$ = $ko$$1$$.jsonExpressionRewriting.parseObjectLiteral($e$$44_selfVal$$);
    for ($n$$17_names$$3$$ = 0;$n$$17_names$$3$$ < $elem$$18_keyValueArray$$.length;$n$$17_names$$3$$ += 1) {
      $e$$44_selfVal$$ = $elem$$18_keyValueArray$$[$n$$17_names$$3$$], $map$$[$e$$44_selfVal$$.key.replace($bindingContext$$7_stringTrimRegex$$, "")] = $e$$44_selfVal$$.value.replace($bindingContext$$7_stringTrimRegex$$, "");
    }
    return $map$$;
  };
  $oj$$7$$.$ComponentBinding$.$_evaluatePropertyExpression$ = function $$oj$$7$$$$ComponentBinding$$$_evaluatePropertyExpression$$($expOrCallback$$, $key$$38$$, $cache$$, $bindingContext$$8$$) {
    var $evaluator$$ = $cache$$[$key$$38$$];
    void 0 === $evaluator$$ && ("string" !== typeof $expOrCallback$$ && ($expOrCallback$$ = $expOrCallback$$()), $evaluator$$ = null, null !== $expOrCallback$$ && ($evaluator$$ = new Function("$context", "with($context){with($data||{}){return " + $expOrCallback$$ + ";}}")), $cache$$[$key$$38$$] = $evaluator$$);
    return $evaluator$$ ? $evaluator$$($bindingContext$$8$$) : null;
  };
  $oj$$7$$.$ComponentBinding$.prototype.$_getManagedAttributes$ = function $$oj$$7$$$$ComponentBinding$$$$_getManagedAttributes$$($bindingMap$$1$$, $componentName$$2$$) {
    return $oj$$7$$.$ComponentBinding$.$_resolveManagedAttributes$(this.$_managedAttrOptions$, $bindingMap$$1$$, $componentName$$2$$);
  };
  $oj$$7$$.$ComponentBinding$.$_resolveManagedAttributes$ = function $$oj$$7$$$$ComponentBinding$$$_resolveManagedAttributes$$($optionMap$$, $bindingMap$$2$$, $componentName$$3_global$$1_n$$18$$) {
    function $traverseOptions$$($name$$78_opt$$16_parents$$) {
      $name$$78_opt$$16_parents$$ = $optionMap$$[$name$$78_opt$$16_parents$$];
      if (null != $name$$78_opt$$16_parents$$) {
        $applicableOptions$$.push($name$$78_opt$$16_parents$$);
        $name$$78_opt$$16_parents$$ = $name$$78_opt$$16_parents$$.use;
        var $i$$101$$;
        if (null != $name$$78_opt$$16_parents$$) {
          for ($name$$78_opt$$16_parents$$ = Array.isArray($name$$78_opt$$16_parents$$) ? $name$$78_opt$$16_parents$$ : [$name$$78_opt$$16_parents$$], $i$$101$$ = 0;$i$$101$$ < $name$$78_opt$$16_parents$$.length;$i$$101$$++) {
            $traverseOptions$$($name$$78_opt$$16_parents$$[$i$$101$$]);
          }
        }
      }
    }
    var $managedAttrMap$$1$$ = {}, $applicableOptions$$ = [];
    $traverseOptions$$($componentName$$3_global$$1_n$$18$$);
    $componentName$$3_global$$1_n$$18$$ = $optionMap$$["@global"];
    var $attr$$13$$;
    $componentName$$3_global$$1_n$$18$$ && $applicableOptions$$.push($componentName$$3_global$$1_n$$18$$);
    if (0 < $applicableOptions$$.length) {
      for ($attr$$13$$ in $bindingMap$$2$$) {
        if ($bindingMap$$2$$.hasOwnProperty($attr$$13$$)) {
          for ($componentName$$3_global$$1_n$$18$$ = 0;$componentName$$3_global$$1_n$$18$$ < $applicableOptions$$.length;$componentName$$3_global$$1_n$$18$$++) {
            var $opts$$9$$ = $applicableOptions$$[$componentName$$3_global$$1_n$$18$$], $attributes$$12$$ = $opts$$9$$.attributes;
            if (null != $attributes$$12$$ && 0 <= $attributes$$12$$.indexOf($attr$$13$$)) {
              $managedAttrMap$$1$$[$attr$$13$$] = {$init$:$opts$$9$$.init, update:$opts$$9$$.update};
              break;
            }
          }
        }
      }
    }
    return $managedAttrMap$$1$$;
  };
  $oj$$7$$.$ComponentBinding$.$_HANDLER_NAMESPACE$ = ".ojWriteback";
  $oj$$7$$.$ComponentBinding$.$_unregisterWritebacks$ = function $$oj$$7$$$$ComponentBinding$$$_unregisterWritebacks$$($jelem$$6$$) {
    $jelem$$6$$ && $jelem$$6$$.off($oj$$7$$.$ComponentBinding$.$_HANDLER_NAMESPACE$);
  };
  $oj$$7$$.$ComponentBinding$.$_registerWritebacks$ = function $$oj$$7$$$$ComponentBinding$$$_registerWritebacks$$($jelem$$7$$, $componentName$$4_eventInfos$$, $i$$102_writablePropMap$$1$$, $valueAccessor$$3$$, $bindingMap$$3$$, $tracker$$4$$, $bindingContext$$9$$) {
    var $cachedPropertyExpressionWriters$$ = {}, $info_pattern$$11$$;
    for ($info_pattern$$11$$ in $i$$102_writablePropMap$$1$$) {
      if ($componentName$$4_eventInfos$$.match($info_pattern$$11$$)) {
        $componentName$$4_eventInfos$$ = $i$$102_writablePropMap$$1$$[$info_pattern$$11$$];
        for ($i$$102_writablePropMap$$1$$ = 0;$i$$102_writablePropMap$$1$$ < $componentName$$4_eventInfos$$.length;$i$$102_writablePropMap$$1$$++) {
          $info_pattern$$11$$ = $componentName$$4_eventInfos$$[$i$$102_writablePropMap$$1$$], $jelem$$7$$.on($info_pattern$$11$$.event + $oj$$7$$.$ComponentBinding$.$_HANDLER_NAMESPACE$, {$getter$:$info_pattern$$11$$.getter}, function($evt$$17$$, $data$$48$$) {
            $evt$$17$$.stopPropagation();
            var $nameValues$$ = $evt$$17$$.data.$getter$($evt$$17$$, $data$$48$$);
            $tracker$$4$$.$suspend$();
            try {
              for (var $name$$79$$ in $nameValues$$) {
                $oj$$7$$.$ComponentBinding$.$_writeValueToProperty$($name$$79$$, $valueAccessor$$3$$()[$name$$79$$], $nameValues$$[$name$$79$$], $bindingMap$$3$$[$name$$79$$], $bindingContext$$9$$, $cachedPropertyExpressionWriters$$);
              }
            } finally {
              $tracker$$4$$.$resume$();
            }
          });
        }
        break;
      }
    }
  };
  $oj$$7$$.$ComponentBinding$.$_getPropertyWriterExpression$ = function $$oj$$7$$$$ComponentBinding$$$_getPropertyWriterExpression$$($expression$$3$$) {
    var $match$$13_reserveddWords$$ = ["true", "false", "null", "undefined"];
    if (null == $expression$$3$$ || 0 <= $match$$13_reserveddWords$$.indexOf($expression$$3$$)) {
      return null;
    }
    $match$$13_reserveddWords$$ = $expression$$3$$.match(/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i);
    return null === $match$$13_reserveddWords$$ ? null : "function(v){" + ($match$$13_reserveddWords$$[1] ? "Object(" + $match$$13_reserveddWords$$[1] + ")" + $match$$13_reserveddWords$$[2] : $expression$$3$$) + "\x3dv;}";
  };
  $oj$$7$$.$ComponentBinding$.$_writeValueToProperty$ = function $$oj$$7$$$$ComponentBinding$$$_writeValueToProperty$$($func$$8_name$$80$$, $property$$16$$, $value$$143$$, $propertyExpression$$, $bindingContext$$10$$, $cachedPropertyExpressionWriters$$1$$) {
    null != $property$$16$$ && $ko$$1$$.isObservable($property$$16$$) ? $ko$$1$$.isWriteableObservable($property$$16$$) && $property$$16$$($value$$143$$) : ($func$$8_name$$80$$ = $oj$$7$$.$ComponentBinding$.$_evaluatePropertyExpression$(function() {
      return $oj$$7$$.$ComponentBinding$.$_getPropertyWriterExpression$($propertyExpression$$);
    }, $func$$8_name$$80$$, $cachedPropertyExpressionWriters$$1$$, $bindingContext$$10$$)) && $func$$8_name$$80$$($value$$143$$);
  };
  $oj$$7$$.$ComponentBinding$.$_toJS$ = function $$oj$$7$$$$ComponentBinding$$$_toJS$$($prop$$52$$) {
    $prop$$52$$ = $ko$$1$$.utils.unwrapObservable($prop$$52$$);
    (Array.isArray($prop$$52$$) || $oj$$7$$.$CollectionUtils$.isPlainObject($prop$$52$$)) && $prop$$52$$.ojConvertToJS && ($prop$$52$$ = $ko$$1$$.toJS($prop$$52$$));
    return $prop$$52$$;
  };
  $oj$$7$$.$ComponentBinding$.$_extractDotNotationOptions$ = function $$oj$$7$$$$ComponentBinding$$$_extractDotNotationOptions$$($options$$186$$) {
    var $mutationOptions$$1$$ = {}, $opt$$17$$;
    for ($opt$$17$$ in $options$$186$$) {
      0 <= $opt$$17$$.indexOf(".") && ($mutationOptions$$1$$[$opt$$17$$] = $options$$186$$[$opt$$17$$]);
    }
    for (var $mo$$1$$ in $mutationOptions$$1$$) {
      delete $options$$186$$[$mo$$1$$];
    }
    return $mutationOptions$$1$$;
  };
  $oj$$7$$.$Object$.$createSubclass$($GlobalChangeQueue$$, $oj$$7$$.$Object$, "ComponentBinding.GlobalChangeQueue");
  $GlobalChangeQueue$$.prototype.Init = function $$GlobalChangeQueue$$$$Init$() {
    $GlobalChangeQueue$$.$superclass$.Init.call(this);
    this.$_callbacks$ = [];
  };
  $GlobalChangeQueue$$.prototype.$registerComponentChanges$ = function $$GlobalChangeQueue$$$$$registerComponentChanges$$($changesCallback$$) {
    -1 === this.$_callbacks$.indexOf($changesCallback$$) && (this.$_callbacks$.push($changesCallback$$), this.$_delayTimer$ || (this.$_delayTimer$ = setTimeout($oj$$7$$.$Object$.$createCallback$(this, this.$_deliverChangesImpl$), 1)));
  };
  $GlobalChangeQueue$$.prototype.$removeComponentChanges$ = function $$GlobalChangeQueue$$$$$removeComponentChanges$$($changesCallback$$1_index$$91$$) {
    $changesCallback$$1_index$$91$$ = this.$_callbacks$.indexOf($changesCallback$$1_index$$91$$);
    0 <= $changesCallback$$1_index$$91$$ && this.$_callbacks$.splice($changesCallback$$1_index$$91$$, 1);
  };
  $GlobalChangeQueue$$.prototype.$deliverChanges$ = function $$GlobalChangeQueue$$$$$deliverChanges$$() {
    this.$_delayTimer$ && clearTimeout(this.$_delayTimer$);
    this.$_deliverChangesImpl$();
  };
  $GlobalChangeQueue$$.prototype.$_deliverChangesImpl$ = function $$GlobalChangeQueue$$$$$_deliverChangesImpl$$() {
    var $i$$103$$;
    this.$_delayTimer$ = null;
    try {
      for ($i$$103$$ = 0;$i$$103$$ < this.$_callbacks$.length;$i$$103$$ += 1) {
        this.$_callbacks$[$i$$103$$]();
      }
    } finally {
      this.$_callbacks$ = [];
    }
  };
  $oj$$7$$.$Object$.$createSubclass$($ComponentChangeTracker$$, $oj$$7$$.$Object$, "ComponentBinding.ComponentChangeTracker");
  $ComponentChangeTracker$$.prototype.Init = function $$ComponentChangeTracker$$$$Init$($component$$8$$, $element$$28$$, $queue$$1$$) {
    $ComponentChangeTracker$$.$superclass$.Init.call(this);
    this.$_component$ = $component$$8$$;
    this.$_element$ = $element$$28$$;
    this.$_queue$ = $queue$$1$$;
    this.$_updateCallback$ = $oj$$7$$.$Object$.$createCallback$(this, this.$_applyUpdates$);
    this.$_changes$ = {};
    this.$_suspendCount$ = 0;
  };
  $ComponentChangeTracker$$.prototype.$addChange$ = function $$ComponentChangeTracker$$$$$addChange$$($property$$17$$, $value$$144$$) {
    this.$_isSuspended$() || this.$_disposed$ || (this.$_changes$[$property$$17$$] = $value$$144$$, this.$_queue$.$registerComponentChanges$(this.$_updateCallback$));
  };
  $ComponentChangeTracker$$.prototype.$dispose$ = function $$ComponentChangeTracker$$$$$dispose$$() {
    this.$_queue$.$removeComponentChanges$(this.$_updateCallback$);
    this.$_disposed$ = !0;
  };
  $ComponentChangeTracker$$.prototype.$resume$ = function $$ComponentChangeTracker$$$$$resume$$() {
    $oj$$7$$.$Assert$.assert(0 < this.$_suspendCount$, "ComponentChangeTracker._suspendCount underflow");
    this.$_suspendCount$ -= 1;
  };
  $ComponentChangeTracker$$.prototype.$suspend$ = function $$ComponentChangeTracker$$$$$suspend$$() {
    this.$_suspendCount$ += 1;
  };
  $ComponentChangeTracker$$.prototype.$_isSuspended$ = function $$ComponentChangeTracker$$$$$_isSuspended$$() {
    return 1 <= this.$_suspendCount$;
  };
  $ComponentChangeTracker$$.prototype.$_applyUpdates$ = function $$ComponentChangeTracker$$$$$_applyUpdates$$() {
    try {
      if (null != $oj$$7$$.Components.$getWidgetConstructor$(this.$_element$)) {
        var $mutationOptions$$2$$ = $oj$$7$$.$ComponentBinding$.$_extractDotNotationOptions$(this.$_changes$), $flags$$18$$ = {changed:!0};
        this.$_component$("option", this.$_changes$, $flags$$18$$);
        for (var $mo$$2$$ in $mutationOptions$$2$$) {
          this.$_component$("option", $mo$$2$$, $mutationOptions$$2$$[$mo$$2$$], $flags$$18$$);
        }
      }
    } finally {
      this.$_changes$ = {};
    }
  };
  $oj$$7$$.$ComponentBinding$.$_changeQueue$ = new $GlobalChangeQueue$$;
  $oj$$7$$.$ComponentBinding$.$_INSTANCE$ = $oj$$7$$.$ComponentBinding$.create(["ojComponent", "jqueryUI"]);
  $oj$$7$$.$koStringTemplateEngine$ = {};
  $goog$exportPath_$$("koStringTemplateEngine", $oj$$7$$.$koStringTemplateEngine$, $oj$$7$$);
  $oj$$7$$.$koStringTemplateEngine$.$install$ = function $$oj$$7$$$$koStringTemplateEngine$$$install$$() {
    function $StringTemplate$$($template$$5$$) {
      this.$_templateName$ = $template$$5$$;
      this.text = function $this$text$($value$$145$$) {
        if (!$value$$145$$) {
          return $_templateText$$[this.$_templateName$];
        }
        $_templateText$$[this.$_templateName$] = $value$$145$$;
      };
      this.data = function $this$data$($key$$39$$, $value$$146$$) {
        $_templateData$$[this.$_templateName$] || ($_templateData$$[this.$_templateName$] = {});
        if (1 === arguments.length) {
          return $_templateData$$[this.$_templateName$][$key$$39$$];
        }
        $_templateData$$[this.$_templateName$][$key$$39$$] = $value$$146$$;
      };
    }
    var $_templateText$$ = {}, $_templateData$$ = {}, $_engine$$ = new $ko$$1$$.nativeTemplateEngine;
    $_engine$$.makeTemplateSource = function $$_engine$$$makeTemplateSource$($template$$6$$, $templateDocument$$) {
      if ("string" == typeof $template$$6$$) {
        $templateDocument$$ = $templateDocument$$ || document;
        var $elem$$19$$ = $templateDocument$$.getElementById($template$$6$$);
        return $elem$$19$$ ? new $ko$$1$$.templateSources.domElement($elem$$19$$) : new $StringTemplate$$($template$$6$$);
      }
      if ($template$$6$$ && 1 == $template$$6$$.nodeType || 8 == $template$$6$$.nodeType) {
        return new $ko$$1$$.templateSources.anonymousTemplate($template$$6$$);
      }
    };
    $ko$$1$$.templates = $_templateText$$;
    $ko$$1$$.setTemplateEngine($_engine$$);
  };
  $goog$exportPath_$$("koStringTemplateEngine.install", $oj$$7$$.$koStringTemplateEngine$.$install$, $oj$$7$$);
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["header", "cell"], init:function($cellTemplate_column_name$$81_row$$, $value$$147$$, $columnTemplate_element$$29_rowTemplate$$, $widgetConstructor$$, $valueAccessor$$4$$, $allBindingsAccessor$$3$$, $bindingContext$$11$$) {
    "header" === $cellTemplate_column_name$$81_row$$ ? ($cellTemplate_column_name$$81_row$$ = $value$$147$$.row, null != $cellTemplate_column_name$$81_row$$ && ($columnTemplate_element$$29_rowTemplate$$ = $cellTemplate_column_name$$81_row$$.template, null != $columnTemplate_element$$29_rowTemplate$$ && ($cellTemplate_column_name$$81_row$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$11$$, $columnTemplate_element$$29_rowTemplate$$))), $cellTemplate_column_name$$81_row$$ = $value$$147$$.column, 
    null != $cellTemplate_column_name$$81_row$$ && ($columnTemplate_element$$29_rowTemplate$$ = $cellTemplate_column_name$$81_row$$.template, null != $columnTemplate_element$$29_rowTemplate$$ && ($cellTemplate_column_name$$81_row$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$11$$, $columnTemplate_element$$29_rowTemplate$$))), $widgetConstructor$$({header:$value$$147$$})) : "cell" === $cellTemplate_column_name$$81_row$$ && ($cellTemplate_column_name$$81_row$$ = $value$$147$$.template, 
    null != $cellTemplate_column_name$$81_row$$ && ($value$$147$$.renderer = $_getDataGridCellRenderer$$($bindingContext$$11$$, $cellTemplate_column_name$$81_row$$)), $widgetConstructor$$({cell:$value$$147$$}));
  }, update:function($cellTemplate$$1_column$$1_name$$82_row$$1$$, $value$$148$$, $columnTemplate$$1_element$$30_rowTemplate$$1$$, $widgetConstructor$$1$$, $valueAccessor$$5$$, $allBindingsAccessor$$4$$, $bindingContext$$12$$) {
    return "header" === $cellTemplate$$1_column$$1_name$$82_row$$1$$ ? ($cellTemplate$$1_column$$1_name$$82_row$$1$$ = $value$$148$$.row, null != $cellTemplate$$1_column$$1_name$$82_row$$1$$ && ($columnTemplate$$1_element$$30_rowTemplate$$1$$ = $cellTemplate$$1_column$$1_name$$82_row$$1$$.template, null != $columnTemplate$$1_element$$30_rowTemplate$$1$$ && ($cellTemplate$$1_column$$1_name$$82_row$$1$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$12$$, $columnTemplate$$1_element$$30_rowTemplate$$1$$))), 
    $cellTemplate$$1_column$$1_name$$82_row$$1$$ = $value$$148$$.column, null != $cellTemplate$$1_column$$1_name$$82_row$$1$$ && ($columnTemplate$$1_element$$30_rowTemplate$$1$$ = $cellTemplate$$1_column$$1_name$$82_row$$1$$.template, null != $columnTemplate$$1_element$$30_rowTemplate$$1$$ && ($cellTemplate$$1_column$$1_name$$82_row$$1$$.renderer = $_getDataGridHeaderRenderer$$($bindingContext$$12$$, $columnTemplate$$1_element$$30_rowTemplate$$1$$))), {header:$value$$148$$}) : "cell" === $cellTemplate$$1_column$$1_name$$82_row$$1$$ ? 
    ($cellTemplate$$1_column$$1_name$$82_row$$1$$ = $value$$148$$.template, null != $cellTemplate$$1_column$$1_name$$82_row$$1$$ && ($value$$148$$.renderer = $_getDataGridCellRenderer$$($bindingContext$$12$$, $cellTemplate$$1_column$$1_name$$82_row$$1$$)), {cell:$value$$148$$}) : null;
  }, "for":"ojDataGrid"});
  $ko$$1$$.bindingHandlers.ojContextMenu = {update:function $$ko$$1$$$bindingHandlers$ojContextMenu$update$($element$$31$$, $valueAccessor$$6$$) {
    $$$$7$$($element$$31$$).off(".ojContextMenu");
    var $menu$$2$$ = $ko$$1$$.utils.unwrapObservable($valueAccessor$$6$$());
    "string" !== $$$$7$$.type($menu$$2$$) && ($menu$$2$$ = $element$$31$$.getAttribute("contextmenu")) && ($menu$$2$$ = "#" + $menu$$2$$);
    $menu$$2$$ && ($menu$$2$$ = $$$$7$$($menu$$2$$).data("oj-ojMenu"));
    if ($menu$$2$$) {
      var $$element$$ = $$$$7$$($element$$31$$);
      $$element$$.on("keydown.ojContextMenu contextmenu.ojContextMenu", function($event$$39$$) {
        return "contextmenu" === $event$$39$$.type || 121 == $event$$39$$.which && $event$$39$$.shiftKey ? ($menu$$2$$.show($event$$39$$, {launcher:$$element$$, focus:"menu"}), !1) : !0;
      });
    }
  }};
  $oj$$7$$.$ComponentBinding$.$getDefaultInstance$().$setupManagedAttributes$({attributes:["columns", "columnsDefault", "rowTemplate"], init:function($name$$83$$, $value$$149$$, $element$$32_i$$104$$, $widgetConstructor$$2$$, $template$$7_valueAccessor$$7$$, $allBindingsAccessor$$5_footerTemplate$$, $bindingContext$$14$$) {
    if ("columns" == $name$$83$$ || "columnsDefault" == $name$$83$$) {
      var $headerTemplate$$;
      for ($element$$32_i$$104$$ = 0;$element$$32_i$$104$$ < $value$$149$$.length;$element$$32_i$$104$$++) {
        var $column$$2$$ = $value$$149$$[$element$$32_i$$104$$];
        $template$$7_valueAccessor$$7$$ = $column$$2$$.template;
        $allBindingsAccessor$$5_footerTemplate$$ = $column$$2$$.footerTemplate;
        $headerTemplate$$ = $column$$2$$.headerTemplate;
        null != $template$$7_valueAccessor$$7$$ && ($column$$2$$.renderer = $_getTableColumnTemplateRenderer$$($bindingContext$$14$$, "cell", $template$$7_valueAccessor$$7$$));
        null != $allBindingsAccessor$$5_footerTemplate$$ && ($column$$2$$.footerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$14$$, "footer", $allBindingsAccessor$$5_footerTemplate$$));
        null != $headerTemplate$$ && ($column$$2$$.headerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$14$$, "header", $headerTemplate$$));
      }
      "columns" == $name$$83$$ ? $widgetConstructor$$2$$({columns:$value$$149$$}) : $widgetConstructor$$2$$({columnsDefault:$value$$149$$});
    } else {
      "rowTemplate" == $name$$83$$ && $widgetConstructor$$2$$({rowRenderer:$_getTableRowTemplateRenderer$$($bindingContext$$14$$, $value$$149$$)});
    }
  }, update:function($name$$84$$, $value$$150$$, $element$$33_i$$105$$, $widgetConstructor$$3$$, $template$$8_valueAccessor$$8$$, $allBindingsAccessor$$6_footerTemplate$$1$$, $bindingContext$$15$$) {
    if ("columns" == $name$$84$$ || "columnsDefault" == $name$$84$$) {
      var $headerTemplate$$1$$;
      for ($element$$33_i$$105$$ = 0;$element$$33_i$$105$$ < $value$$150$$.length;$element$$33_i$$105$$++) {
        var $column$$3$$ = $value$$150$$[$element$$33_i$$105$$];
        $template$$8_valueAccessor$$8$$ = $column$$3$$.template;
        $allBindingsAccessor$$6_footerTemplate$$1$$ = $column$$3$$.footerTemplate;
        $headerTemplate$$1$$ = $column$$3$$.headerTemplate;
        null != $template$$8_valueAccessor$$8$$ && ($column$$3$$.renderer = $_getTableColumnTemplateRenderer$$($bindingContext$$15$$, "cell", $template$$8_valueAccessor$$8$$));
        null != $allBindingsAccessor$$6_footerTemplate$$1$$ && ($column$$3$$.footerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$15$$, "footer", $allBindingsAccessor$$6_footerTemplate$$1$$));
        null != $headerTemplate$$1$$ && ($column$$3$$.headerRenderer = $_getTableColumnTemplateRenderer$$($bindingContext$$15$$, "header", $headerTemplate$$1$$));
      }
      "columns" == $name$$84$$ ? $widgetConstructor$$3$$({columns:$value$$150$$}) : $widgetConstructor$$3$$({columnsDefault:$value$$150$$});
    } else {
      if ("rowTemplate" == $name$$84$$) {
        return{rowRenderer:$_getTableRowTemplateRenderer$$($bindingContext$$15$$, $value$$150$$)};
      }
    }
    return null;
  }, "for":"ojTable"});
});
