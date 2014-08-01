define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojvalidation"],function(a,f){function b(a,b){this.mQ=b;this.qR=a;this.kM="/"}a.be=function(a){this.Init(a)};o_("AttributeGroupHandler",a.be,a);a.b.oa(a.be,a.b,"oj.AttributeGroupHandler");a.be.prototype.Init=function(b){a.be.t.Init.call(this);this.Pm=b?b:{};this.$l={};this.Uq=0;this.Do=this.ll();for(var d in this.Pm)b=this.Do.indexOf(this.Pm[d]),-1!==b&&this.Do.splice(b,1)};a.be.prototype.ll=function(){return[]};a.b.g("AttributeGroupHandler.prototype.getValueRamp",
{ll:a.be.prototype.ll});a.be.prototype.pg=function(a){if(this.Pm[a])return this.Pm[a];this.$l[a]||(this.$l[a]=this.Do[this.Uq],this.Uq==this.Do.length-1?this.Uq=0:this.Uq++);return this.$l[a]};a.b.g("AttributeGroupHandler.prototype.getValue",{pg:a.be.prototype.pg});a.be.prototype.hG=function(){var a=[],b;for(b in this.$l)a.push({category:b,value:this.$l[b]});return a};a.b.g("AttributeGroupHandler.prototype.getCategoryAssignments",{hG:a.be.prototype.hG});a.be.prototype.CF=function(a,b){this.Pm[a]=
b};a.b.g("AttributeGroupHandler.prototype.addMatchRule",{CF:a.be.prototype.CF});var d={CSS_TEXT_PROPERTIES:function(a,b){var f={};a&&(a.hasClass("oj-gaugeMetricLabel")&&a.hasClass(a.parentNode,"oj-ledGauge")&&(f["font-size"]=!0,f.color=!0),a.hasClass(a,"oj-chartSliceLabel")&&(f.color=!0));return d.XC(a,b,!1,f)},CSS_BACKGROUND_PROPERTIES:function(a,b){return d.XC(a,b,!0,{})},CSS_URL:function(a){return d.lQ(a)},oy:"rgb(254, 0, 254)",py:"Times",qy:"1px",sy:"1",ry:"normal",rT:function(a,b){return a.css(b)},
lQ:function(a){return(a=a.css("content"))&&-1!==a.indexOf("url(")?a.slice(a.indexOf("url(")+4,a.length-1).replace(/"/g,""):a},YK:function(a){var b="";a.css("border-top-color")&&(b+="border-color: "+a.css("border-top-color")+";");a.css("border-width")&&a.css("border-style")&&"none"!=a.css("border-style")&&(b+="border-width: "+a.css("border-width")+";");a.css("background-color")&&(b+="background-color: "+a.css("background-color")+";");return b},cL:function(a,b){var f="",h=a.css("font-family");h&&h!==
d.py&&(f+="font-family: "+h.replace(/"/g,"'")+";");(h=a.css("font-size"))&&h!==d.qy&&!b["font-size"]&&(f+="font-size: "+h+";");(h=a.css("font-weight"))&&h!==d.sy&&(f+="font-weight: "+h+";");(h=a.css("color"))&&h!==d.oy&&!b.color&&(f+="color: "+h+";");(h=a.css("font-style"))&&h!==d.ry&&(f+="font-style: "+h+";");return f},XC:function(a,b,d,f){f||(f={});if(!a)return b;var k;b&&((k=a.attr("style"))?a.attr("style",k+b):a.attr("style",b));b="";!0!==d&&(b+=this.cL(a,f));!1!==d&&(b+=this.YK(a));k&&a.attr("style",
k);return b},BU:function(a,b,g,h){var k=f(document.createElement("div"));k.attr("style","display:none;");a.append(k);a="";for(var l=0;l<g.length;l++)a=a+g[l]+" ";k.attr("class",a);g=f(document.createElement("div"));k.append(g);g.css("font-family",d.py);g.css("font-size",d.qy);g.css("color",d.oy);g.css("font-weight",d.sy);g.css("font-style",d.ry);for(var n in h)k=f(document.createElement("div")),k.addClass(n),g.append(k),d.CQ(b,k,h[n])},CQ:function(a,b,f){if(f instanceof Array)for(var h=0;h<f.length;h++)d.mE(a,
b,f[h]);else d.mE(a,b,f)},mE:function(a,e,f){a=new b(a,f.path);var h;f.property&&(h=(h=d[f.property])?h(e,a.pg()):d.rT(e,f.property));null==h||"string"==typeof h&&""==h.replace(/^\s+/g,"")||a.VU(h)}};a.Fa("oj.dvtBaseComponent",f.oj.baseComponent,{_ComponentCreate:function(){this._super();this.ck=new DvtContext(this.element[0]);this.ck.setReadingDirection(this.uc());this.ck.setTooltipStyleClass("oj-dvt-tooltip");this.ck.setDatatipStyleClass("oj-dvt-datatip");f(document.body).hasClass("oj-hicontrast")&&
DvtAgent.setHighContrast(!0);this.element.attr("tabIndex",0);this.ta=this.pf(this.ck,this.Li,this);this.ck.getStage().addChild(this.ta);this.Uy();this.AD();this.ns();this.Zf();a.Aa.bh(this.element[0],f.proxy(this.Rh,this))},refresh:function(){this._super();this.ck.setReadingDirection(this.uc());this.AD();this.Zf()},getNodeBySubId:function(a){var b;this.ta&&this.ta.getAutomation&&(b=this.ta.getAutomation());return b?b.getDomElementForSubId(a.subId):null},getSubIdByNode:function(a){var b;this.ta&&this.ta.getAutomation&&
(b=this.ta.getAutomation());return b?b.getSubIdForDomElement(a):null},Uy:function(){for(var a=this.Ue(),b=0;b<a.length;b++)this.element.addClass(a[b]);d.BU(this.element,this.options,this.Ue(),this.Ki())},Ue:function(){return["oj-dvtbase"]},Ki:function(){return{}},Rl:function(){var b={"DvtUtilBundle.CLEAR_SELECTION":this.Hc("labelClearSelection"),"DvtUtilBundle.STATE_SELECTED":this.Hc("stateSelected"),"DvtUtilBundle.STATE_UNSELECTED":this.Hc("stateUnselected"),"DvtUtilBundle.STATE_MAXIMIZED":this.Hc("stateMaximized"),
"DvtUtilBundle.STATE_MINIMIZED":this.Hc("stateMinimized"),"DvtUtilBundle.STATE_EXPANDED":this.Hc("stateExpanded"),"DvtUtilBundle.STATE_COLLAPSED":this.Hc("stateCollapsed"),"DvtUtilBundle.STATE_ISOLATED":this.Hc("stateIsolated"),"DvtUtilBundle.STATE_HIDDEN":this.Hc("stateHidden"),"DvtUtilBundle.STATE_VISIBLE":this.Hc("stateVisible"),"DvtUtilBundle.SCALING_SUFFIX_THOUSAND":this.Hc("labelScalingSuffixThousand"),"DvtUtilBundle.SCALING_SUFFIX_MILLION":this.Hc("labelScalingSuffixMillion"),"DvtUtilBundle.SCALING_SUFFIX_BILLION":this.Hc("labelScalingSuffixBillion"),
"DvtUtilBundle.SCALING_SUFFIX_TRILLION":this.Hc("labelScalingSuffixTrillion"),"DvtUtilBundle.SCALING_SUFFIX_QUADRILLION":this.Hc("labelScalingSuffixQuadrillion")},d=a.Ca.kr("abbreviated");b["DvtUtilBundle.MONTH_SHORT_JANUARY"]=d[0];b["DvtUtilBundle.MONTH_SHORT_FEBRUARY"]=d[1];b["DvtUtilBundle.MONTH_SHORT_MARCH"]=d[2];b["DvtUtilBundle.MONTH_SHORT_APRIL"]=d[3];b["DvtUtilBundle.MONTH_SHORT_MAY"]=d[4];b["DvtUtilBundle.MONTH_SHORT_JUNE"]=d[5];b["DvtUtilBundle.MONTH_SHORT_JULY"]=d[6];b["DvtUtilBundle.MONTH_SHORT_AUGUST"]=
d[7];b["DvtUtilBundle.MONTH_SHORT_SEPTEMBER"]=d[8];b["DvtUtilBundle.MONTH_SHORT_OCTOBER"]=d[9];b["DvtUtilBundle.MONTH_SHORT_NOVEMBER"]=d[10];b["DvtUtilBundle.MONTH_SHORT_DECEMBER"]=d[11];return b},vc:function(b,d){var f=this.Hc(b);if(d){for(var h={},k=0;k<d.length;k++)h[d[k]]="{"+k+"}";f=a.da.pb(f,h)}return f},AD:function(){var a=this.Rl();DvtBundle.addLocalizedStrings(a)},_destroy:function(){this.ta.destroy&&this.ta.destroy();a.Aa.vl(this.element[0],f.proxy(this.Rh,this));this.element.children().remove();
this.element.removeAttr("role").removeAttr("tabIndex");for(var b=this.Ue(),d=0;d<b.length;d++)this.element.removeClass(b[d]);this._super()},_setOptions:function(a){this._superApply(arguments);this.Zf()},pf:function(){return null},Li:function(){},Rh:function(){var a=this.element.width(),b=this.element.height();5<=Math.abs(a-this.dw)+Math.abs(b-this.Bu)&&(this.ta.render(null,a,b),this.dw=a,this.Bu=b)},ns:function(){},Zf:function(){this.element.offsetParent()?(this.dw=this.element.width(),this.Bu=this.element.height(),
this.ta.render(this.options,this.dw,this.Bu)):a.T.error(this.Hc("notReadyToRender").summary)}});a.Jl=function(a){this.Init(a)};o_("ShapeAttributeGroupHandler",a.Jl,a);a.b.oa(a.Jl,a.be,"oj.ShapeAttributeGroupHandler");a.Jl.bm="square circle diamond plus triangleDown triangleUp human".split(" ");a.Jl.prototype.ll=function(){return a.Jl.bm.slice()};a.zg=function(b){this.bm=[];if(f(document.body).hasClass("oj-hicontrast"))this.bm=a.zg.iM.slice();else{var d=f(document.createElement("div"));d.attr("style",
"display:none;");d.attr("id","attrGps");f(document.body).append(d);for(var g=0;g<a.zg.cF.length;g++){var h=f(document.createElement("div"));h.addClass(a.zg.cF[g]);d.append(h);this.bm.push(h.css("color"))}d.remove()}this.Init(b)};o_("ColorAttributeGroupHandler",a.zg,a);a.b.oa(a.zg,a.be,"oj.ColorAttributeGroupHandler");a.zg.cF="oj-dvt-category1 oj-dvt-category2 oj-dvt-category3 oj-dvt-category4 oj-dvt-category5 oj-dvt-category6 oj-dvt-category7 oj-dvt-category8 oj-dvt-category9 oj-dvt-category10 oj-dvt-category11 oj-dvt-category12".split(" ");
a.zg.iM="#267db3 #68c182 #fad55c #ed6647 #8561c8 #6ddbdb #ffb54d #e371b2 #47bdef #a2bf39 #a75dba #f7f37b".split(" ");a.zg.prototype.ll=function(){return this.bm.slice()};b.prototype.mR=function(a,b,d,f){for(var k={};a&&-1<b.indexOf(d);){var l=b.substring(0,b.indexOf(d));f&&void 0===a[l]&&(a[l]={});a=a[l];b=b.substring(b.indexOf(d)+1,b.length)}a&&(k.object=a,k.parameter=b);return k};b.prototype.lE=function(a){void 0===this.Om&&(a=this.mR(this.qR,this.mQ,this.kM,a),this.Om=a.object,this.fv=a.parameter)};
b.prototype.pg=function(){this.lE(!1);return void 0===this.Om?void 0:this.Om[this.fv]};b.prototype.VU=function(a){this.lE(!0);this.Om[this.fv]!==a&&(this.Om[this.fv]=a)}});
//# sourceMappingURL=oj-modular.map