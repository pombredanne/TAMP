(function(){"use strict";var a=this;a.define(["backbone","communicator","hbs!tmpl/OptionsControl","underscore"],function(a,b,c){var d=a.Marionette.Layout.extend({template:{type:"handlebars",template:c},regions:{colorramp:"#colorramp"},className:"panel panel-default optionscontrol not-selectable",initialize:function(a){},onShow:function(a){this.$(".close").on("click",_.bind(this.onClose,this)),this.$el.draggable({containment:"#main",scroll:!1,handle:".panel-heading"})},onClose:function(){this.close()}});return d})}).call(this);