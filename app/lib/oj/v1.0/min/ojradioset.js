/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore","jquery","ojs/ojeditablevalue","ojs/ojradiocheckbox"],function(a,f){a.Fa("oj.ojRadioset",f.oj.editableValue,{version:"1.0.0",defaultElement:"\x3cdiv\x3e",widgetEventPrefix:"oj",options:{disabled:null},refresh:function(){this._super();this.yg=this.Ep().filter(".oj-radio")._ojRadioCheckbox("refresh").end().not(".oj-radio")._ojRadioCheckbox().end();this.Cb()},widget:function(){return this.QH},_ComponentCreate:function(){this._super();if(this.element.is("fieldset"))throw Error("ojRadioset cannot be bound to a fieldset. Use a div instead.");
this.yg=this.Ep()._ojRadioCheckbox();this.QH=this.element.addClass("oj-radioset oj-component").attr("role","radiogroup");this._on(this.vf);this.Cb()},Ep:function(){var b=this.element.find("input[type\x3dradio]:first");0===b.length&&a.T.warn("Could not find any input type\x3dradio within this element");b=b.attr("name");return void 0===b?this.element.find("input[type\x3dradio]").not("[name]"):this.element.find("input[type\x3dradio][name\x3d"+b+"]")},Zg:function(a,d){var c=this.element.find("input[type\x3dradio]"),
e=c.filter(":checked"),c=e.length?e:c.first();a.show(d,{launcher:c,focus:"menu"})},Cb:function(){!0===this.options.disabled?this.disable():!1===this.options.disabled&&this.enable()},vf:{change:function(a){this.Lo(a)}},Lo:function(a){this._super(a)},zh:function(){return this.Rj()},Hg:function(a){null!=a&&(a="[value\x3d'"+a+"']",void 0!==a&&void 0!==this.yg&&(a=this.yg.filter(a),void 0!==a&&0<a.length?a.prop("checked")||a._ojRadioCheckbox("option","checked",!0):this.yg._ojRadioCheckbox("option","checked",
!1)))},Rj:function(){var a=this.yg.filter(":checked");return 0===a.length?null:a.val()},_InitOptions:function(b,d){var c;this._super(b,d);a.ud.vi([{attribute:"disabled",defaultOptionValue:null,validateOption:!0},{attribute:"placeholder",defaultOptionValue:""},{attribute:"required",defaultOptionValue:"optional",coerceDomValue:!0,validateOption:!0},{attribute:"title",defaultOptionValue:""}],d,this);null==this.options.value&&(c=this.Ep(),c=c.filter(":checked"),c=0===c.length?null:c.val(),this.options.value=
c)},_GetDefaultStyleClass:function(){return"oj-radioset"},rf:function(){return this.Ep()},xs:function(a){var d=this.QH;(a="required"==a?!0:!1)&&d?d.attr("aria-required",a):d.removeAttr("aria-required")},_setOption:function(a,d){this._superApply(arguments);"disabled"===a&&this.yg._ojRadioCheckbox("option",a,d)},getNodeBySubId:function(a){var d=this._super(a);d||(a=a.subId,"oj-radioset-inputs"===a&&(d=this.yg));return d||null},_destroy:function(){this._super();this.element.removeClass("oj-radioset oj-enabled oj-component").removeAttr("role");
this.yg&&this.yg._ojRadioCheckbox("destroy")}})});
//# sourceMappingURL=oj-modular.map