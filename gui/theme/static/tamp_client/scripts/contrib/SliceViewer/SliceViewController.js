define(["backbone.marionette","app","communicator","globals","./SliceView"],function(a,b,c,d,e){"use strict";var f=a.Controller.extend({initialize:function(a){this.id=a.id,this.view=new e({context:c.mediator})},getView:function(a){return this.view},show:function(){this.region.show(this.view)},isActive:function(){return!this.view.isClosed}});return f});