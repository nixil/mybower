/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojconveyorbelt"],function(a,f){(function(){var b={cut:"ojtabscut","paste-before":"ojtabspastebefore","paste-after":"ojtabspasteafter"};a.Fa("oj.ojTabs",f.oj.baseComponent,{widgetEventPrefix:"oj",delay:300,options:{selected:0,disabled:!1,truncation:"auto",selectOn:"click",orientation:"horizontal",removable:!1,removeCueText:"Removable",reorderable:!1,beforeSelect:null,select:null,beforeDeselect:null,deselect:null,beforeRemove:null,remove:null,
optionChange:null},_ComponentCreate:function(){var a=this,b=this.options;this._super();this.sx=!1;this.NE(b.orientation);this.yD();if(Array.isArray(b.disabled)){var e=this.Kb.filter(".oj-disabled");b.disabled=f.unique(b.disabled.concat(f.map(e,function(b){return a.Kb.index(b)}))).sort()}e=b.selected;b.selected=void 0;this.$a={};this.$a.pe=!1;this.$a.Jd=!1;this.$a.Bl=!1;this.$a.ro=!1;this.Km();this.Zl();this.Pb();e=this.IB(e);void 0===e&&(e=this.Im(0));b.selected=e},_init:function(){this.gB(this.options.selected)},
gB:function(a){this.Sh(a)&&(this.options.selected=this.GB(a));this.Zj(this.options.selected)},Zg:function(a,b){a.show(b,{launcher:this.pu().children("[tabindex\x3d0]"),focus:"menu"})},dS:function(a){var b=f(this.document[0].activeElement).closest("li"),e=this.Kb.index(b),g=!0;if(!this.cC(a)){switch(a.keyCode){case f.ui.keyCode.RIGHT:case f.ui.keyCode.DOWN:e++;break;case f.ui.keyCode.UP:case f.ui.keyCode.LEFT:g=!1;e--;break;case f.ui.keyCode.END:e=this.Kb.length-1;break;case f.ui.keyCode.HOME:e=0;
break;case 46:if(b=this.la.find(".oj-tabs-close-icon"))a.preventDefault(),this.fE({target:b,currentTarget:b,preventDefault:f.noop});return;default:return}a.preventDefault();clearTimeout(this.GS);var h=this.Ht(e,g);a.ctrlKey||(b.attr("aria-selected","false"),this.tk(h).attr("aria-selected","true"),this.GS=this._delay(function(){this.option("selected",h)},this.delay))}},kQ:function(a){!this.cC(a)&&a.ctrlKey&&a.keyCode===f.ui.keyCode.UP&&(a.preventDefault(),this.la.focus())},cC:function(a){var b=this.bq(this.options.selected);
if(a.ctrlKey&&a.keyCode===f.ui.keyCode.PAGE_UP)return this.Zj(this.Ht(b-1,!1)),!0;if(a.ctrlKey&&a.keyCode===f.ui.keyCode.PAGE_DOWN)return this.Zj(this.Ht(b+1,!0)),!0},Sh:function(a){return-1!=f.inArray(a,this.options.disabled)},WM:function(a,b){function e(){a>f&&(a=0);0>a&&(a=f);return a}for(var f=this.Kb.length-1;this.Sh(e());)a=b?a+1:a-1;return a},Ht:function(a,b){a=this.WM(a,b);this.Wp(a).focus();return this.Im(a)},GB:function(a){a=this.bq(a);for(var b=a+1,e=this.Kb.length-1;b<=e;){if(!this.Sh(b))return this.Im(b);
b++}for(b=a-1;0<=b;){if(!this.Sh(b))return this.Im(b);b--}},_setOption:function(a,b,e){"selected"===a?(b=this.IB(b),void 0!==b&&this.Zj(b)):"disabled"===a?(this.Jq(b),this.refresh()):"removable"===a?this.PR(b):"reorderable"===a?b!==this.options.reorderable&&(this.options.reorderable=b,this.OE()):"orientation"===a?(this.NE(b),this.refresh()):("contextMenu"===a&&(this.pp(),b&&this.Km(b)),this._super(a,b,e),"selectOn"===a&&(this.ln(),this._super(a,b),this.pj()))},refresh:function(){this._super();this.nM();
this.yD();this.Pb()},Pb:function(){var a=this.options;this.la=this.Kb.length&&void 0!==a.selected?this.tk(a.selected):f();this.Jq(a.disabled);this.DL();this.ln();this.pj();this.Kb.not(this.la).attr({"aria-selected":"false",tabIndex:"-1"});this.pd.not(this.Mh(this.la)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});this.la.length?(this.la.addClass("oj-selected").attr({"aria-selected":"true",tabIndex:"0"}),this.Mh(this.la).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.Wp(0).attr("tabIndex",
"0");void 0!==this.Hu&&(this.gB(this.Hu),this.Hu=void 0);"horizontal"==a.orientation&&(this.nS(),this.wK());this.OE()},wK:function(){if("horizontal"==this.options.orientation){var a=this.mo.uniqueId().attr("id"),b=this.TB().wrap("\x3cdiv\x3e").parent();b.uniqueId().attr("id");b.addClass("oj-tabs-conveyorbelt");this.ki=b.ojConveyorBelt({orientation:"horizontal",contentParent:"#"+a})}},yD:function(){var a=this;this.LA();this.mo=f("\x3cul\x3e").addClass("oj-tabs-nav oj-helper-clearfix").attr("role",
"tablist").prependTo(this.element);this.Kb=f();this.pd=f();this.no=f();this.element.children(":not(.oj-tabs-nav)").each(function(b){var c=f(this).find("\x3e :first-child"),e=c.clone();e.addClass("oj-tabs-title").css({display:""}).attr({"aria-hidden":"false"});a.no=a.no.add(e);var g=e.wrap("\x3cli\x3e\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e\x3c/li\x3e").parent();g.addClass("oj-tabs-anchor").attr({role:"presentation",tabIndex:"-1"});var m=g.parent().addClass("oj-tabs-tab-content").parent().addClass("oj-tabs-default").attr({role:"tab",
"aria-hidden":"false",tabIndex:"-1"});m.appendTo(a.mo);a.Kb=a.Kb.add(m);e=e[0];e.id&&a.qz(e);c.find("[id]").each(function(){a.qz(this)});c.hide().attr({"aria-hidden":"true"});c=g.uniqueId().attr("id");g=m.attr("aria-controls");e=f(this);e.hasClass("oj-disabled")&&a.disable(b);g&&m.data("oj-tabs-aria-controls",g);m.attr({"aria-controls":e.uniqueId().attr("id"),"aria-labelledby":c});a.pd=a.pd.add(e);e.attr("aria-labelledby",c)});if("vertical"==this.options.orientation){var b=0,e=0;this.Kb.addClass("oj-selected").each(function(){var a=
f(this);b=Math.max(b,a.width());e+=a.outerHeight(!0)}).removeClass("oj-selected");this.options.removable&&(b+=28);this.Kb.css({width:b+"px"});var g=this.mo.outerWidth(!0);"rtl"==this.uc()?this.pd.css({"margin-right":g-1+"px","min-height":e+"px"}):this.pd.css({"margin-left":g-1+"px","min-height":e+"px"})}this.pd.addClass("oj-tabs-panel").attr("role","tabpanel")},Jq:function(a){Array.isArray(a)&&(a.length?a.length===this.Kb.length&&(a=!0):a=!1);var b=this;this.options.disabled=a;this.Kb.each(function(e){!0===
a||b.Sh(e)?f(this).addClass("oj-disabled").attr("aria-disabled","true"):f(this).removeClass("oj-disabled").removeAttr("aria-disabled")})},pj:function(){this.element.on("mousedown"+this.eventNamespace,".oj-tabs-nav \x3e li",function(a){f(this).is(".oj-disabled")&&a.preventDefault()});var a={keydown:this.dS},b=this.options.selectOn;if(b){var e=this;f.each(b.split(" "),function(b,c){a[c]=e.XA})}b=this.Kb.not(".oj-disabled");this._on(b,a);this._on(this.pd,{keydown:this.kQ});if(this.options.removable){var g=
{click:this.fE};this._on(b.find(".oj-tabs-close-icon"),g)}this._focusable(b);this._hoverable(b);this.Hs(b)},ln:function(){var a=this.Kb.not(".oj-disabled");this._off(a);this._off(this.pd);this.element.off("mousedown"+this.eventNamespace)},XA:function(a){var b=this.options,e=this.la,g=f(a.currentTarget).closest("li"),h=e&&g[0]===e[0],k=this.Mh(g),e={fromTab:e&&e.length?this.Mh(e):f(),toTab:k};a.preventDefault();g.hasClass("oj-disabled")||this.sx||h||!1===this._trigger("beforeDeselect",a,e)||!1===this._trigger("beforeSelect",
a,e)||(b.selected=k.attr("id"),this.la=g,e.fromTab.length||e.toTab.length||f.error("ojTabs: Mismatching fragment identifier."),this.iS(a,e))},iS:function(a,b){var e=b.toTab,g=b.fromTab,h,k;b&&(g&&(h=g.attr("id")),e&&(k=e.attr("id")));this.sx=!0;var l=this.tk(h).removeClass("oj-selected");g.hide();this.tk(k).addClass("oj-selected");e.show();this.sx=!1;this._trigger("deselect",a,b);this._trigger("select",a,b);this.dg("selected",h,k,a?!0:!1);g.attr({"aria-expanded":"false","aria-hidden":"true"});l.attr("aria-selected",
"false");e.length&&g.length?l.attr("tabIndex","-1"):e.length&&this.Kb.filter(function(){return"0"===f(this).attr("tabIndex")}).attr("tabIndex","-1");e.attr({"aria-expanded":"true","aria-hidden":"false"});this.tk(k).attr({"aria-selected":"true",tabIndex:"0"})},Zj:function(a){void 0!==a&&(a=this.tk(a),this.la&&a[0]===this.la[0]||(a=a.find(".oj-tabs-anchor")[0],this.XA({target:a,currentTarget:a,preventDefault:f.noop})))},DL:function(){if(this.options.removable){var a=this.C("removeCueText");this.Kb.not(".oj-disabled").each(function(b){var e=
f(this).find("\x3e :first-child");b="ojtabs-id_rm_"+b;f(this).attr("aria-describedby",b);f("\x3ca href\x3d'#'\x3e").addClass("oj-tabs-icon oj-component-icon oj-clickable-icon oj-tabs-close-icon").attr({id:b,tabIndex:"-1","aria-label":a,role:"presentation"}).appendTo(e)})}},nM:function(){this.Kb.find("oj-tabs-close-icon").remove()},LA:function(){this.Lq=!1;this.fC&&(a.Aa.vl(this.element[0],f.proxy(this.Rh,this)),this.fC=!1,this.nD=void 0);this.ki?(this.ki.ojConveyorBelt("destroy"),this.ki.remove(),
this.la=this.ki=null):this.element.children(".oj-tabs-nav").remove()},_destroy:function(){this.pp();var a=this.options.orientation;"vertical"==a?this.element.removeClass("oj-tabs-vertical oj-component oj-helper-clearfix"):this.element.removeClass("oj-tabs oj-component ");this.LA();this.pd.each(function(){f(this).removeAttr("tabIndex").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("role").removeClass("oj-active oj-disabled oj-tabs-panel").css("display",
"");"vertical"==a&&f(this).css("margin-left","").css("min-height","");f(this).find("\x3e :first-child").css("display","").removeAttr("aria-hidden")})},enable:function(a){var b=this.options.disabled;!1!==b&&(b=void 0===a?!1:Array.isArray(b)?f.map(b,function(b){return b!==a?b:null}):f.map(this.Kb,function(b,c){return c!==a?c:null}),this.Jq(b))},disable:function(a){var b=this.options.disabled;if(!0!==b){if(void 0===a)b=!0;else{if(this.Sh(a))return;b=Array.isArray(b)?f.merge([a],b).sort():[a]}this.Jq(b)}},
PR:function(a){a!==this.options.removable&&(this.options.removable=a,this.refresh())},fE:function(a){var b=f(a.currentTarget).closest("li"),e=this.Mh(b),g={tab:e};if(b&&!1!==this._trigger("beforeRemove",a,g)){var h=this.Kb.index(b);b.hasClass("oj-selected")&&(this.options.selected=this.GB(e.attr("id")),this.Hu=this.options.selected);if(Array.isArray(this.options.disabled))for(var k=this.options.disabled,l=k.length-1;0<=l;l--)h==k[l]?this.options.disabled=k=k.splice(l,1):h<k[l]&&(k[l]-=1);e.remove();
b.remove();this.refresh();this.la.focus();this._trigger("remove",a,g)}},addTab:function(a){this.element.append(a);var b=this.options;this.refresh();void 0===b.selected&&this.Sh(this.Kb.length-1)&&(b.selected=a.attr("id"));this.Kb.last()[0].scrollIntoView(!1)},OE:function(){var a=this.pu();if(this.options.reorderable&&!0!==this.options.disabled){var b=this;a.sortable({axis:"horizontal"==b.options.orientation?"x":"y",stop:function(a,d){var f=d.item;b.QA(f,f.prev())}})}else a.sortable({disabled:!0})},
NE:function(a){a||(a=this.options.orientation);if("horizontal"==a)"vertical"==this.options.orientation&&this.pd&&this.pd.each(function(){f(this).css("margin-left","").css("min-height","")}),this.element.addClass("oj-tabs oj-component");else if("vertical"==a)this.element.addClass("oj-tabs-vertical oj-component oj-helper-clearfix");else return;this.options.orientation=a},sR:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$\x26"):""},Mh:function(a){a=f(a).attr("aria-controls");
return this.element.find(this.sR("#"+a))},Wp:function(a){return this.Kb.eq(a)},pu:function(){return this.ki?this.ki.find(".oj-tabs-nav"):this.element.children(".oj-tabs-nav")},TB:function(){var a=this.mo.parent();a.hasClass("oj-tabs-conveyor")||(a=this.mo.wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-conveyor"));return a},qz:function(a){0>a.id.indexOf("ojtabs-id_")&&f(a).attr("id","ojtabs-id_"+a.id)},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;var b=a.subId;a=a.index;
switch(b){case "oj-conveyorbelt":return this.ki?this.ki[0]:null;case "oj-tabs-panel":return this.pd[a];case "oj-tabs-title":return this.no[a];case "oj-tabs-close-icon":return this.Wp(a).find("."+b)[0]}return null},UB:function(){return this.element[0].clientWidth},CC:function(){return this.nD>this.UB()},fW:function(){return this.Lq},HE:function(a){this.Lq=a},aO:function(){var a=Math.floor(this.UB()/this.Kb.length);this.options.removable&&(a-=28);return a},Dz:function(){if(!this.Lq){var a=this.aO();
this.no.each(function(){f(this).css("max-width",""+a+"px").addClass("oj-tabs-title-overflow")});this.HE(!0)}},dR:function(){this.Lq&&(this.no.each(function(){f(this).css("max-width","").removeClass("oj-tabs-title-overflow")}),this.HE(!1))},iW:function(){},Rh:function(){this.CC()?this.Dz():this.dR()},vP:function(){return"auto"==this.options.truncation||"progressive"==this.options.truncation},nS:function(){"horizontal"==this.options.orientation&&0<this.Kb.length&&this.vP()&&(a.Aa.bh(this.element[0],
f.proxy(this.Rh,this)),this.fC=!0,this.nD=this.TB()[0].scrollWidth,this.CC()&&this.Dz())},dg:function(a,b,e,f){this._trigger("optionChange",f,{option:a,previousValue:b,value:e,optionMetadata:{writeback:f?"shouldWrite":"shouldNotWrite"}})},Ph:function(a){this.$a.tab="keydown"===a.originalEvent.originalEvent.type?this.la:f(a.originalEvent.target).closest("li");this.$a.XW=this.$a.tab.attr("id");this.$a.Jd.ojMenu("option","menuPosition",{my:"left top",at:"left bottom",of:this.$a.tab[0]});this.$a.pe&&
(this.$a.Bl||this.$a.ro)&&(a=!this.$a.cr,this.$a.Bl.hasClass("oj-disabled")!=a&&(a?(this.$a.Bl.addClass("oj-disabled"),this.$a.ro.addClass("oj-disabled")):(this.$a.Bl.removeClass("oj-disabled"),this.$a.ro.removeClass("oj-disabled")),this.$a.Jd.ojMenu("refresh")))},Mg:function(a){var c=b[a];a='\x3ca href\x3d"#"\x3e'+this.C(a)+"\x3c/a\x3e";return f("\x3cli id\x3d"+c+"\x3e"+a+"\x3c/li\x3e")},SP:function(a){if(!a||!a.length)return!1;this.$a.cr=a},WC:function(a,b){if(!a||!a.length||!this.$a.cr)return!1;
var e=this.$a.cr;this.$a.cr=!1;this.QA(e,a,b)},Qh:function(a,b){var e=b?b.item.attr("id"):void 0;"ojtabscut"===e?this.SP(this.$a.tab):"ojtabspastebefore"===e?this.WC(this.$a.tab,!0):"ojtabspasteafter"===e&&this.WC(this.$a.tab,!1)},Km:function(a){var b,e;a||this.options.contextMenu||(b=this.element.attr("contextmenu"))&&(this.options.contextMenu="#"+b);if(a||this.options.contextMenu){b=a||this.options.contextMenu;e=f.type(b);if("function"==e){try{b=b()}catch(g){b=null}e=f.type(b)}if("string"===e){if(b=
f(b)){b.css("display","none");e=this.$a;if(!e)return;e.Jd=b;e.pe=!0}this.$a.pe&&a&&this.Zl()}}},Zl:function(){if(this.$a&&this.$a.pe&&this.options.reorderable){var a=this.$a.Jd,b=this;a.on("ojselect",f.proxy(this.Qh,this));a.on("ojbeforeshow",f.proxy(this.Ph,this));var e=!1;a.find("[data-oj-command]").each(function(){if(0===f(this).children("a").length){var a=f(this).attr("data-oj-command").slice(8);f(this).replaceWith(b.Mg(a));f(this).addClass("oj-menu-item");e=!0}});e&&a.ojMenu("refresh");this.$a.Bl=
a.find("#ojtabspastebefore");this.$a.ro=a.find("#ojtabspasteafter")}},pp:function(){var a=this.$a;a&&a.pe&&(a.pe=!1,a.Jd.off("ojselect"),a.Jd.off("beforeshow"),a.Jd=null)},QA:function(a,b,e){if(!this.Sh(a.index())){a=this.Mh(a);var g=this.pu();b.length?e?this.Mh(b).before(a):this.Mh(b).after(a):0<this.pd.length&&this.pd.first().before(a);var h=[];g.children(".oj-disabled").each(function(){h.push(f(this).index())});this.options.disabled=h;this.refresh()}},tk:function(a){return this.Wp(this.bq(a))},
IB:function(a){if("number"===typeof a){if(0<=a&&a<this.pd.length)return this.Im(a)}else if("string"===typeof a&&-1!=this.bq(a))return a},Im:function(a){return this.pd.eq(a).attr("id")},bq:function(a){return this.pd.index(f("#"+a))}})})()});
//# sourceMappingURL=oj-modular.map