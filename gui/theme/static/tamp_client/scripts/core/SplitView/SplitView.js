define(["backbone.marionette","hbs!tmpl/SplitView"],function(a,b){"use strict";var c=a.Layout.extend({className:"splitview",template:{type:"handlebars",template:b},regions:{view1:".view1 > .viewport",view2:".view2 > .viewport",view3:".view3 > .viewport",view4:".view4 > .viewport"},ui:{view1:".view1",view2:".view2",view3:".view3",view4:".view4"},initialize:function(){this.views=void 0},registerViews:function(a){this.views=a},showViewInRegion:function(a,b){var c=this[b];if(!c)return void console.log('[SplitView::setView] Region "'+b+'" is not known. Valid regions are: FIXXME');var d=this.views[a];return d?void c.show(d):void console.log('[SplitView::setView] View "'+a+'" is not known. Valid views are: FIXXME')},setFullscreen:function(a){_.each(this.ui,function(b,c){this.ui[c].removeClass("halfscreen quarterscreen"),c==a?this.ui[c].addClass("fullscreen"):this.ui[c].addClass("disabled")},this),this.updateViewSize()},setSingleScreen:function(){},setSplitscreen:function(){_.each(this.ui,function(a,b){this.ui[b].addClass("disabled").removeClass("fullscreen quarterscreen"),("view1"==b||"view2"==b)&&this.ui[b].addClass("halfscreen").removeClass("disabled")},this),this.updateViewSize()},setQuadscreen:function(){_.each(this.ui,function(a,b){this.ui[b].removeClass("disabled fullscreen halfscreen").addClass("quarterscreen")},this),this.updateViewSize()},updateViewSize:function(){_.each(this.views,function(a){a.onResize&&a.onResize()})}});return c});