define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$44$$, $$$$42$$) {
  (function() {
    $oj$$44$$.$__registerWidget$("oj.ojProgressbar", $$$$42$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{max:100, value:0, disabled:!1}, min:0, $_indeterminate$:!1, _create:function() {
      this.oldValue = this.options.value = this.$_constrainedValue$();
      this.element.addClass("oj-progressbar").attr({role:"progressbar", "aria-valuemin":this.min});
      this.$valueDiv$ = $$$$42$$("\x3cdiv class\x3d'oj-progressbar-value'\x3e\x3c/div\x3e").appendTo(this.element);
      this.$_refreshValue$();
      this._super();
    }, _InitOptions:function($originalDefaults$$12$$, $constructorOptions$$13$$) {
      var $savedAttributes$$3$$ = this.$_GetSavedAttributes$(this.element);
      this._super($originalDefaults$$12$$, $constructorOptions$$13$$);
      null == this.options.max && (this.options.max = "max" in $savedAttributes$$3$$ ? $savedAttributes$$3$$.max.prop : void 0);
    }, value:function($newValue$$9$$) {
      if (void 0 === $newValue$$9$$) {
        return this.options.value;
      }
      this.options.value = this.$_constrainedValue$($newValue$$9$$);
    }, $_constrainedValue$:function($newValue$$10$$) {
      void 0 === $newValue$$10$$ && ($newValue$$10$$ = this.options.value);
      this.$_indeterminate$ = -1 == $newValue$$10$$;
      "number" !== typeof $newValue$$10$$ && ($newValue$$10$$ = isNaN($newValue$$10$$) ? 0 : Number($newValue$$10$$));
      return this.$_indeterminate$ ? -1 : Math.min(this.options.max, Math.max(this.min, $newValue$$10$$));
    }, _setOptions:function($options$$328$$, $flags$$37$$) {
      if (!this.options.disabled) {
        var $value$$224$$ = $options$$328$$.value;
        delete $options$$328$$.value;
        this._super($options$$328$$, $flags$$37$$);
        this.options.value = this.$_constrainedValue$($value$$224$$);
        this.$_refreshValue$();
      }
    }, _setOption:function($key$$114$$, $value$$225$$, $flags$$38$$) {
      "max" === $key$$114$$ && ($value$$225$$ = Math.max(this.min, $value$$225$$));
      this._super($key$$114$$, $value$$225$$, $flags$$38$$);
    }, $_percentage$:function() {
      return this.$_indeterminate$ ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
    }, $_refreshValue$:function() {
      var $value$$226$$ = this.options.value, $percentage$$ = this.$_percentage$();
      this.$valueDiv$.toggle(this.$_indeterminate$ || $value$$226$$ > this.min).toggleClass("oj-corner-right", $value$$226$$ === this.options.max).width($percentage$$.toFixed(0) + "%");
      this.element.toggleClass("oj-progressbar-indeterminate", this.$_indeterminate$);
      this.$_indeterminate$ ? (this.element.attr({"aria-valuetext":"In Progress"}), this.element.removeAttr("aria-valuenow"), this.element.removeAttr("aria-valuemin"), this.element.removeAttr("aria-valuemax"), this.$overlayDiv$ || (this.$overlayDiv$ = $$$$42$$("\x3cdiv class\x3d'oj-progressbar-overlay'\x3e\x3c/div\x3e").appendTo(this.$valueDiv$))) : (this.element.attr({"aria-valuemax":this.options.max, "aria-valuenow":$value$$226$$}), this.$overlayDiv$ && (this.$overlayDiv$.remove(), this.$overlayDiv$ = 
      null));
    }, _destroy:function() {
      this.element.removeClass("oj-progressbar").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
      this.$valueDiv$.remove();
    }});
  })();
});
