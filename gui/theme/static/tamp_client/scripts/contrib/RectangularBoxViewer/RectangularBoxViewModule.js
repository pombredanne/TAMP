define(["backbone.marionette","app","communicator","./RectangularBoxViewController","./RectangularBoxViewRouter"],function(a,b,c,d,e){"use strict";b.module("RectangularBoxViewer",function(a){this.startsWithParent=!1,this.on("start",function(a){this.instances={},this.idx=0,console.log("[VirtualGlobeViewer] Finished module initialization")}),this.createController=function(a){console.log("Entered create Controller");var b=void 0;"undefined"!=typeof a&&(b=a.id);for(var c in this.instances)if(!this.instances[c].isActive())return console.log("Free RB viewer returned "+c),this.instances[c];"undefined"==typeof b&&(b="RectangularBoxViewer."+this.idx++);var e=new d;return this.instances[b]=e,e}})});