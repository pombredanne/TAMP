define(["backbone.marionette","app","communicator","./CesiumViewController","./CesiumViewRouter","keypress"],function(a,b,c,d,e,f){"use strict";b.module("CesiumViewer",function(a){this.startsWithParent=!0,this.on("start",function(a){this.idx=0,this.instance=void 0,console.log("[CesiumViewerModule] Finished module initialization")}),this.createController=function(a){var c=this.insance;return void 0===this.insance&&(c=new d({id:"CesiumViewer",startPosition:{}}),this.insance=c),c.connectToView(),b(c),c};var b=function(a){var b=new f.Listener;b.simple_combo("ctrl d",function(){a.toggleDebug()})}})});