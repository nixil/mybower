/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$43$$, $$$$41$$) {
  (function() {
    function $_radioGroup$$1$$($radio$$1$$, $$elems$$1$$) {
      var $name$$94_selector$$21$$ = $radio$$1$$.name, $$radios$$1_form$$2$$ = $radio$$1$$.form;
      $name$$94_selector$$21$$ ? ($name$$94_selector$$21$$ = $name$$94_selector$$21$$.replace(/'/g, "\\'"), $name$$94_selector$$21$$ = ":radio[name\x3d'" + $name$$94_selector$$21$$ + "']:oj-button", $$radios$$1_form$$2$$ = $$elems$$1$$ ? $$elems$$1$$.filter($name$$94_selector$$21$$) : $$radios$$1_form$$2$$ ? $$$$41$$($$radios$$1_form$$2$$).find($name$$94_selector$$21$$) : $$$$41$$($name$$94_selector$$21$$, $radio$$1$$.ownerDocument).filter(function() {
        return!this.form;
      })) : $$radios$$1_form$$2$$ = ($$elems$$1$$ ? $$elems$$1$$.filter($radio$$1$$) : $$$$41$$($radio$$1$$)).filter(":oj-button");
      return $$radios$$1_form$$2$$;
    }
    $oj$$43$$.$__registerWidget$("oj.ojToolbar", $$$$41$$.oj.baseComponent, {$_items$:"button, input[type\x3dbutton], input[type\x3dsubmit], input[type\x3dreset], input[type\x3dcheckbox], input[type\x3dradio], a", widgetEventPrefix:"oj", options:{}, _create:function() {
      this.element.addClass("oj-toolbar oj-component").attr("role", "toolbar");
      this.$_setup$(!0);
      this._super();
    }, $_showContextMenu$:function($menu$$21$$, $event$$385$$) {
      $menu$$21$$.show($event$$385$$, {launcher:this.element.find(":oj-button[tabindex\x3d0]"), focus:"menu"});
    }, _setOption:function($key$$113$$, $value$$223$$) {
      "disabled" === $key$$113$$ && this.$$buttons$.ojButton("option", $key$$113$$, $value$$223$$);
      this._superApply(arguments);
    }, refresh:function() {
      this._super();
      this.$_setup$(!1);
    }, $_setup$:function($isCreate$$2$$) {
      var $self$$128$$ = this;
      this.$isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$$buttons$ = this.element.find(this.$_items$).unbind("keydown" + this.eventNamespace).bind("keydown" + this.eventNamespace, function($event$$386$$) {
        $self$$128$$.$_handleKeyDown$($event$$386$$, $$$$41$$(this));
      }).unbind("click" + this.eventNamespace).bind("click" + this.eventNamespace, function() {
        $$$$41$$(this).ojButton("option", "disabled") || $self$$128$$.$_setTabStop$($$$$41$$(this));
      }).unbind("focus" + this.eventNamespace).bind("focus" + this.eventNamespace, function() {
        $self$$128$$.$_setTabStop$($$$$41$$(this));
      });
      this.$$enabledButtons$ = this.$$buttons$.filter(function() {
        return!$$$$41$$(this).ojButton("option", "disabled");
      });
      this.$_initTabindexes$($isCreate$$2$$);
    }, $_initTabindexes$:function($$newTabStop$$1_isCreate$$3$$) {
      var $$last$$1$$ = $$$$41$$(this.$_lastTabStop$);
      this.$_lastTabStop$ = void 0;
      this.$$buttons$.attr("tabindex", "-1");
      $$newTabStop$$1_isCreate$$3$$ = $$newTabStop$$1_isCreate$$3$$ || !$$last$$1$$.is(this.$$enabledButtons$) ? this.$$enabledButtons$.first() : $$last$$1$$;
      this.$_setTabStop$($$newTabStop$$1_isCreate$$3$$);
    }, $_mapToTabbable$:function($$button$$3$$) {
      var $$enabledButtons$$2$$ = this.$$enabledButtons$;
      return $$button$$3$$.map(function($index$$215$$, $elem$$46$$) {
        if ("radio" != $elem$$46$$.type || $elem$$46$$.checked || "" == $elem$$46$$.name) {
          return $elem$$46$$;
        }
        var $$checkedRadio$$1$$ = $_radioGroup$$1$$($elem$$46$$, $$enabledButtons$$2$$).filter(":checked");
        return $$checkedRadio$$1$$.length ? $$checkedRadio$$1$$[0] : $elem$$46$$;
      });
    }, $_setTabStop$:function($$button$$4$$) {
      $$button$$4$$ = this.$_mapToTabbable$($$button$$4$$);
      var $button$$2$$ = $$button$$4$$[0], $last$$4$$ = this.$_lastTabStop$;
      $button$$2$$ !== $last$$4$$ && ($$$$41$$($last$$4$$).attr("tabindex", "-1"), $$button$$4$$.attr("tabindex", "0"), this.$_lastTabStop$ = $button$$2$$);
    }, $_handleKeyDown$:function($event$$389$$, $$button$$5$$) {
      switch($event$$389$$.which) {
        case $$$$41$$.ui.keyCode.LEFT:
        ;
        case $$$$41$$.ui.keyCode.RIGHT:
          $event$$389$$.preventDefault();
          var $$enabledButtons$$3$$ = this.$$enabledButtons$, $length$$17$$ = $$enabledButtons$$3$$.length;
          if (2 > $length$$17$$) {
            break;
          }
          var $oldIndex$$2$$ = $$enabledButtons$$3$$.index($$button$$5$$);
          $$enabledButtons$$3$$.eq(($oldIndex$$2$$ + ($event$$389$$.which == $$$$41$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? 1 : -1) + $length$$17$$) % $length$$17$$).focus();
          break;
        case $$$$41$$.ui.keyCode.UP:
        ;
        case $$$$41$$.ui.keyCode.DOWN:
          "radio" == $$button$$5$$.attr("type") && $event$$389$$.preventDefault();
      }
    }, _destroy:function() {
      this.element.removeClass("oj-toolbar oj-component").removeAttr("role");
      this.$$buttons$.attr("tabindex", "0").map(function() {
        return $$$$41$$(this).ojButton("widget")[0];
      });
    }});
  })();
});
