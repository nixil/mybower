define(["ojs/ojcore", "knockout", "ojs/ojmodel"], function($oj$$35$$, $ko$$4$$) {
  $oj$$35$$.$KnockoutUtils$ = function $$oj$$35$$$$KnockoutUtils$$() {
  };
  $goog$exportPath_$$("KnockoutUtils", $oj$$35$$.$KnockoutUtils$, $oj$$35$$);
  $oj$$35$$.$KnockoutUtils$.$internalObjectProperty$ = "oj._internalObj";
  $oj$$35$$.$KnockoutUtils$.$underUpdateProp$ = "oj._underUpdate";
  $oj$$35$$.$KnockoutUtils$.$collUpdatingProp$ = "oj.collectionUpdating";
  $oj$$35$$.$KnockoutUtils$.map = function $$oj$$35$$$$KnockoutUtils$$map$($m$$27$$, $callback$$104$$, $array$$15_data$$159_updateObservable_updateObservableArrayRemove$$) {
    function $_makeUpdateModel$$($argProp$$) {
      return function($value$$215$$) {
        $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] || $m$$27$$.set($argProp$$, $value$$215$$);
      };
    }
    var $koObject$$, $i$$278_prop$$80_updateCollection_updateObservableArrayAdd$$, $converted_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$;
    if ($m$$27$$ instanceof $oj$$35$$.$Collection$) {
      $koObject$$ = $array$$15_data$$159_updateObservable_updateObservableArrayRemove$$ ? $ko$$4$$.observableArray() : [];
      $oj$$35$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$27$$);
      for ($i$$278_prop$$80_updateCollection_updateObservableArrayAdd$$ = 0;$i$$278_prop$$80_updateCollection_updateObservableArrayAdd$$ < $m$$27$$.$_getLength$();$i$$278_prop$$80_updateCollection_updateObservableArrayAdd$$ += 1) {
        $koObject$$.push($oj$$35$$.$KnockoutUtils$.map($m$$27$$.$_atInternal$($i$$278_prop$$80_updateCollection_updateObservableArrayAdd$$, null, !0, !1), $callback$$104$$));
      }
      $i$$278_prop$$80_updateCollection_updateObservableArrayAdd$$ = function $$i$$278_prop$$80_updateCollection_updateObservableArrayAdd$$$($changes$$2$$) {
        var $i$$279$$;
        try {
          if (!$koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$]) {
            $koObject$$[$oj$$35$$.$KnockoutUtils$.$collUpdatingProp$] = !0;
            for ($i$$279$$ = 0;$i$$279$$ < $changes$$2$$.length;$i$$279$$++) {
              var $index$$206$$ = $changes$$2$$[$i$$279$$].index, $model$$80$$ = $oj$$35$$.$KnockoutUtils$.$_getModel$($changes$$2$$[$i$$279$$].value), $status$$13$$ = $changes$$2$$[$i$$279$$].status;
              "added" === $status$$13$$ ? $index$$206$$ >= $m$$27$$.length - 1 ? $m$$27$$.add($model$$80$$) : $m$$27$$.add($model$$80$$, {at:$index$$206$$}) : "deleted" === $status$$13$$ && $m$$27$$.$_removeInternal$($model$$80$$, $index$$206$$);
            }
            $m$$27$$.comparator && ($koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$83$$, $b$$50$$) {
              return $oj$$35$$.$Collection$.$SortFunc$($a$$83$$, $b$$50$$, $m$$27$$.comparator, $m$$27$$, this);
            }), $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !1);
          }
        } catch ($e$$123$$) {
          throw $e$$123$$;
        } finally {
          $koObject$$[$oj$$35$$.$KnockoutUtils$.$collUpdatingProp$] = !1;
        }
      };
      $array$$15_data$$159_updateObservable_updateObservableArrayRemove$$ && $koObject$$.subscribe && $koObject$$.subscribe($i$$278_prop$$80_updateCollection_updateObservableArrayAdd$$, null, "arrayChange");
      $array$$15_data$$159_updateObservable_updateObservableArrayRemove$$ = function $$array$$15_data$$159_updateObservable_updateObservableArrayRemove$$$($model$$81$$, $collection$$54$$, $options$$316$$) {
        var $index$$207$$;
        try {
          !$koObject$$[$oj$$35$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$54$$ instanceof $oj$$35$$.$Collection$ && ($koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$207$$ = $options$$316$$.index, $koObject$$.splice($index$$207$$, 1));
        } catch ($e$$124$$) {
          throw $e$$124$$;
        } finally {
          $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $i$$278_prop$$80_updateCollection_updateObservableArrayAdd$$ = function $$i$$278_prop$$80_updateCollection_updateObservableArrayAdd$$$($model$$82$$, $collection$$55$$, $options$$317$$) {
        var $index$$208$$, $newObservable$$;
        try {
          if (!$koObject$$[$oj$$35$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$55$$ instanceof $oj$$35$$.$Collection$ && ($koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !0, $index$$208$$ = $collection$$55$$.$_localIndexOf$($model$$82$$), void 0 !== $index$$208$$ && -1 < $index$$208$$)) {
            if ($newObservable$$ = $oj$$35$$.$KnockoutUtils$.map($model$$82$$, $callback$$104$$), $options$$317$$.fillIn) {
              for (var $i$$280$$ = Array.isArray($koObject$$) ? $koObject$$.length : $koObject$$().length;$i$$280$$ < $index$$208$$;$i$$280$$++) {
                $koObject$$.splice($i$$280$$, 0, $oj$$35$$.$KnockoutUtils$.map($collection$$55$$.$_atInternal$($i$$280$$, null, !0, !1), $callback$$104$$));
              }
              $koObject$$.splice($index$$208$$, 1, $newObservable$$);
            } else {
              $koObject$$.splice($index$$208$$, 0, $newObservable$$);
            }
          }
        } catch ($e$$125$$) {
          throw $e$$125$$;
        } finally {
          $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $converted_updateObservableArrayReset$$ = function $$converted_updateObservableArrayReset$$$($collection$$56$$) {
        try {
          !$koObject$$[$oj$$35$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$56$$ instanceof $oj$$35$$.$Collection$ && ($koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !0, $ko$$4$$.isObservable($koObject$$) ? $koObject$$.removeAll() : $koObject$$ = []);
        } catch ($e$$126$$) {
          throw $e$$126$$;
        } finally {
          $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $updateModel_updateObservableArraySort$$ = function $$updateModel_updateObservableArraySort$$$($collection$$57$$) {
        try {
          !$koObject$$[$oj$$35$$.$KnockoutUtils$.$collUpdatingProp$] && $collection$$57$$ instanceof $oj$$35$$.$Collection$ && ($koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !0, $koObject$$.sort(function($a$$84$$, $b$$51$$) {
            return $oj$$35$$.$Collection$.$SortFunc$($a$$84$$, $b$$51$$, $m$$27$$.comparator, $collection$$57$$, this);
          }));
        } catch ($e$$127$$) {
          throw $e$$127$$;
        } finally {
          $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $m$$27$$.$OnInternal$($oj$$35$$.$Events$.$EventType$.ADD, $i$$278_prop$$80_updateCollection_updateObservableArrayAdd$$, void 0, void 0, !0);
      $m$$27$$.$OnInternal$($oj$$35$$.$Events$.$EventType$.REMOVE, $array$$15_data$$159_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $m$$27$$.$OnInternal$($oj$$35$$.$Events$.$EventType$.RESET, $converted_updateObservableArrayReset$$, void 0, void 0, !0);
      $m$$27$$.$OnInternal$($oj$$35$$.$Events$.$EventType$.SORT, $updateModel_updateObservableArraySort$$, void 0, void 0, !0);
    } else {
      if (void 0 === $m$$27$$) {
        return;
      }
      $koObject$$ = {};
      $array$$15_data$$159_updateObservable_updateObservableArrayRemove$$ = $m$$27$$.attributes;
      $i$$278_prop$$80_updateCollection_updateObservableArrayAdd$$ = null;
      for ($i$$278_prop$$80_updateCollection_updateObservableArrayAdd$$ in $array$$15_data$$159_updateObservable_updateObservableArrayRemove$$) {
        $array$$15_data$$159_updateObservable_updateObservableArrayRemove$$.hasOwnProperty($i$$278_prop$$80_updateCollection_updateObservableArrayAdd$$) && ($converted_updateObservableArrayReset$$ = $ko$$4$$.observable($m$$27$$.get($i$$278_prop$$80_updateCollection_updateObservableArrayAdd$$)), $koObject$$[$i$$278_prop$$80_updateCollection_updateObservableArrayAdd$$] = $converted_updateObservableArrayReset$$, $updateModel_updateObservableArraySort$$ = $_makeUpdateModel$$($i$$278_prop$$80_updateCollection_updateObservableArrayAdd$$), 
        $updateModel_updateObservableArraySort$$.$_prop$ = $i$$278_prop$$80_updateCollection_updateObservableArrayAdd$$, $converted_updateObservableArrayReset$$.subscribe && $converted_updateObservableArrayReset$$.subscribe($updateModel_updateObservableArraySort$$));
      }
      $array$$15_data$$159_updateObservable_updateObservableArrayRemove$$ = function $$array$$15_data$$159_updateObservable_updateObservableArrayRemove$$$($model$$83$$) {
        var $attrs$$19$$, $prop$$81$$;
        try {
          for ($prop$$81$$ in $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !0, $attrs$$19$$ = $model$$83$$.$changedAttributes$(), $attrs$$19$$) {
            if ($attrs$$19$$.hasOwnProperty($prop$$81$$)) {
              $koObject$$[$prop$$81$$]($model$$83$$.get($prop$$81$$));
            }
          }
        } catch ($e$$128$$) {
          throw $e$$128$$;
        } finally {
          $koObject$$[$oj$$35$$.$KnockoutUtils$.$underUpdateProp$] = !1;
        }
      };
      $m$$27$$.$OnInternal$($oj$$35$$.$Events$.$EventType$.CHANGE, $array$$15_data$$159_updateObservable_updateObservableArrayRemove$$, void 0, void 0, !0);
      $oj$$35$$.$KnockoutUtils$.$_storeOriginalObject$($koObject$$, $m$$27$$);
      $callback$$104$$ && $callback$$104$$($koObject$$);
    }
    return $koObject$$;
  };
  $goog$exportPath_$$("KnockoutUtils.map", $oj$$35$$.$KnockoutUtils$.map, $oj$$35$$);
  $oj$$35$$.$KnockoutUtils$.$_getModels$ = function $$oj$$35$$$$KnockoutUtils$$$_getModels$$($arr$$24$$) {
    var $modelArray$$2$$ = [], $i$$281$$, $model$$84$$;
    for ($i$$281$$ = 0;$i$$281$$ < $arr$$24$$.length;$i$$281$$ += 1) {
      $model$$84$$ = $oj$$35$$.$KnockoutUtils$.$_getModel$($arr$$24$$[$i$$281$$]), $modelArray$$2$$.push($model$$84$$);
    }
    return $modelArray$$2$$;
  };
  $oj$$35$$.$KnockoutUtils$.$_getModel$ = function $$oj$$35$$$$KnockoutUtils$$$_getModel$$($val$$58$$) {
    return $val$$58$$ instanceof $oj$$35$$.$Model$ ? $val$$58$$ : $val$$58$$[$oj$$35$$.$KnockoutUtils$.$internalObjectProperty$];
  };
  $oj$$35$$.$KnockoutUtils$.$_storeOriginalObject$ = function $$oj$$35$$$$KnockoutUtils$$$_storeOriginalObject$$($object$$7$$, $value$$216$$) {
    Object.defineProperty($object$$7$$, $oj$$35$$.$KnockoutUtils$.$internalObjectProperty$, {value:$value$$216$$, enumerable:!1});
  };
});
