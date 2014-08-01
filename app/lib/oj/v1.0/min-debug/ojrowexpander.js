/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojmodel", "ojs/ojdatacollection-common"], function($oj$$42$$, $$$$40$$) {
  $oj$$42$$.$__registerWidget$("oj.ojRowExpander", $$$$40$$.oj.baseComponent, {version:"1.0.0", widgetEventPrefix:"oj", options:{context:null, indent:10, expand:null, collapse:null}, $classNames$:{root:"oj-rowexpander", icon:"oj-component-icon", clickable:"oj-clickable-icon", expand:"oj-rowexpander-expand-icon", collapse:"oj-rowexpander-collapse-icon", leaf:"oj-rowexpander-leaf-icon", lazyload:"oj-rowexpander-lazyload-icon"}, _create:function() {
    this._super();
    this.element.addClass(this.$classNames$.root);
  }, _init:function() {
    var $self$$127$$ = this, $context$$55$$;
    this._super();
    this.$_addIcon$();
    $context$$55$$ = this.options.context;
    this.$component$ = $context$$55$$.component;
    this.$datasource$ = $context$$55$$.datasource;
    this.depth = $context$$55$$.depth;
    this.$indentation$ = (this.depth - 1) * this.options.indent;
    this.$iconState$ = $context$$55$$.state;
    this.$rowKey$ = $context$$55$$.key;
    this.index = $context$$55$$.index;
    this.$parentKey$ = $context$$55$$.parentKey;
    this.$_setIndentationWidth$();
    this.$_setIconStateClass$();
    if ("expanded" === this.$iconState$ || "collapsed" === this.$iconState$) {
      $$$$40$$(this.icon).on("click", function() {
        $self$$127$$.$_fireExpandCollapse$();
      }), $$$$40$$(this.element).on("keypress", function($event$$380$$) {
        (($event$$380$$.keyCode || $event$$380$$.which) === $$$$40$$.ui.keyCode.ENTER || $$$$40$$.ui.keyCode.SPACE) && $self$$127$$.$_fireExpandCollapse$();
      }), null != this.$component$ && (this.$handleKeyDownCallback$ = this.$_handleKeyDownEvent$.bind(this), $$$$40$$(this.$component$.element).on("ojkeydown", this.$handleKeyDownCallback$)), null != this.$datasource$ && (this.$handleExpandCallback$ = this.$_handleExpandEvent$.bind(this), this.$handleCollapseCallback$ = this.$_handleCollapseEvent$.bind(this), this.$datasource$.on("expand", this.$handleExpandCallback$, this), this.$datasource$.on("collapse", this.$handleCollapseCallback$, this));
    }
    null != this.$component$ && (this.$handleActiveKeyChangeCallback$ = this.$_handleActiveKeyChangeEvent$.bind(this), $$$$40$$(this.$component$.element).on("ojactive", this.$handleActiveKeyChangeCallback$));
  }, refresh:function() {
    this.element.empty();
    this._init();
  }, _destroy:function() {
    null != this.$component$ && ($$$$40$$(this.$component$.element).off("ojkeydown", this.$handleKeyDownCallback$), $$$$40$$(this.$component$.element).off("ojactive", this.$handleActiveKeyChangeCallback$));
    null != this.$datasource$ && (this.$datasource$.off("expand", this.$handleExpandCallback$, this), this.$datasource$.off("collapse", this.$handleCollapseCallback$, this));
    this.removeClass(this.$classNames$.root);
    this.element.empty();
  }, $_addIcon$:function() {
    this.icon = $$$$40$$("\x3ca\x3e\x3c/a\x3e").addClass(this.$classNames$.icon).addClass(this.$classNames$.clickable);
    this.element.append(this.icon);
  }, $_addIconClass$:function($classKey$$) {
    this.icon.addClass(this.$classNames$[$classKey$$]);
  }, $_removeIconClass$:function($classKey$$1$$) {
    this.icon.removeClass(this.$classNames$[$classKey$$1$$]);
  }, $_setIconStateClass$:function() {
    switch(this.$iconState$) {
      case "leaf":
        this.$_addIconClass$("leaf");
        break;
      case "collapsed":
        this.$_addIconClass$("expand");
        this.$_ariaExpanded$(!1);
        break;
      case "expanded":
        this.$_addIconClass$("collapse");
        this.$_ariaExpanded$(!0);
        break;
      case "loading":
        this.$_addIconClass$("lazyload");
    }
  }, $_removeIconStateClass$:function() {
    switch(this.$iconState$) {
      case "leaf":
        this.$_removeIconClass$("leaf");
        break;
      case "collapsed":
        this.$_removeIconClass$("expand");
        break;
      case "expanded":
        this.$_removeIconClass$("collapse");
        break;
      case "loading":
        this.$_removeIconClass$("lazyload");
    }
  }, $_handleActiveKeyChangeEvent$:function($event$$381$$, $ui$$32$$) {
    var $message$$37_rowKey$$27$$;
    null != $ui$$32$$.activeKey && ($message$$37_rowKey$$27$$ = $ui$$32$$.activeKey.rowKey, this.$rowKey$ !== $message$$37_rowKey$$27$$ || null != $ui$$32$$.previousActiveKey && $ui$$32$$.previousActiveKey.row == $ui$$32$$.activeKey.row || !this.$component$.$_setAccessibleContext$ || ($message$$37_rowKey$$27$$ = this.$getTranslatedString$("accessibleRowDescription", {level:this.depth, num:this.index + 1, total:this.$datasource$.getWrappedDataSource().$getChildCount$(this.$parentKey$)}), this.$component$.$_setAccessibleContext$({message:$message$$37_rowKey$$27$$})));
  }, $_handleKeyDownEvent$:function($event$$382$$, $ui$$33$$) {
    var $code$$7$$;
    this.$rowKey$ === $ui$$33$$.rowKey && ($code$$7$$ = $event$$382$$.keyCode || $event$$382$$.which, $event$$382$$.ctrlKey && ($code$$7$$ == $$$$40$$.ui.keyCode.RIGHT ? (this.$_loading$(), this.$datasource$.expand(this.$rowKey$)) : $code$$7$$ == $$$$40$$.ui.keyCode.LEFT && (this.$_loading$(), this.$datasource$.collapse(this.$rowKey$))));
  }, $_loading$:function() {
    this.$_removeIconStateClass$();
    this.$iconState$ = "loading";
    this.$_setIconStateClass$();
  }, $_handleExpandEvent$:function($event$$383$$) {
    $event$$383$$.rowKey === this.$rowKey$ && (this.$_removeIconStateClass$(), this.$iconState$ = "expanded", this.$_setIconStateClass$(), this.$_ariaExpanded$(!0), this._trigger("expand"));
  }, $_handleCollapseEvent$:function($event$$384$$) {
    $event$$384$$.rowKey === this.$rowKey$ && (this.$_removeIconStateClass$(), this.$iconState$ = "collapsed", this.$_setIconStateClass$(), this.$_ariaExpanded$(!1), this._trigger("collapse"));
  }, $_fireExpandCollapse$:function() {
    var $state$$7$$ = this.$iconState$;
    this.$_loading$();
    "collapsed" === $state$$7$$ ? this.$datasource$.expand(this.$rowKey$) : "expanded" === $state$$7$$ && this.$datasource$.collapse(this.$rowKey$);
  }, $_setIndentationWidth$:function() {
    this.$_GetReadingDirection$();
    this.element.width(this.element.width() + this.$indentation$ + "px");
  }, $_ariaExpanded$:function($bool$$) {
    this.icon.attr("aria-expanded", $bool$$);
  }});
});
