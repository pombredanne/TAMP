define(["core/BaseView"],function(a){"use strict";var b=a.extend({initialize:function(b){a.prototype.initialize.call(this,b),this.$x3del=$("#"+b.x3dtag_id),this.$hideel=$("#"+b.hidden_id),this.$x3del||alert("[X3DOMView::initialize] Please specify a X3D element id or an element id containing an X3D element!"),this.$hideel||alert("[X3DOMView::initialize] Please specify an element id that acts as a hidden container!")},onShow:function(){a.prototype.onShow.call(this),this.$el.append(this.$x3del)},onClose:function(){this.$hideel.append(this.$x3del)},onResize:function(){var a=this.$x3del.parent().width(),b=this.$x3del.parent().parent().height();this.$x3del.width(a),this.$x3del.height(b),$(".x3dom-canvas").attr("width",a),$(".x3dom-canvas").attr("height",b)}});return b});