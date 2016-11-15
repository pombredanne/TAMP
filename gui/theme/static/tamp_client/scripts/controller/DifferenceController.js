(function(){"use strict";var a=this;a.require(["backbone","communicator","globals","app"],function(a,b,c,d){var e=a.Marionette.Controller.extend({initialize:function(a){this.selection_list=[],this.activeWPSproducts=[],this.selected_time=null,this.listenTo(b.mediator,"map:layer:change",this.changeLayer),this.listenTo(b.mediator,"selection:changed",this.onSelectionChanged),this.listenTo(b.mediator,"time:change",this.onTimeChange)},changeLayer:function(a){if(!a.isBaseLayer){var b=c.products.find(function(b){return b.get("name")==a.name});b&&(a.visible&&b.get("timeSlider")?b.get("processes")&&_.each(b.get("processes"),function(a){this.activeWPSproducts.push(a.layer_id)},this):_.each(b.get("processes"),function(a){-1!=this.activeWPSproducts.indexOf(a.layer_id)&&this.activeWPSproducts.splice(this.activeWPSproducts.indexOf(a.layer_id),1),console.log(this.activeWPSproducts)},this),this.checkSelections())}},onSelectionChanged:function(a){a?(this.selection_list.push(a),this.checkSelections()):(this.plotdata=[],this.selection_list=[],this.checkSelections())},checkSelections:function(){},onTimeChange:function(a){this.selected_time=a,this.checkSelections()},sendRequest:function(){b.mediator.trigger("map:clear:image");var a=[],d=[];if(c.products.each(function(b){if(b.get("visible")){var c=b.get("processes");_.each(c,function(c){c&&"getCoverageData"==c.id&&(a.push(c.layer_id),d.push(b.get("unit")))},this)}},this),a.length>0&&"OpenLayers.Geometry.Polygon"==this.selection_list[0].geometry.CLASS_NAME){var e=this.selection_list[0].geometry.getBounds().toBBOX(),f="http://localhost:3080/browse/ows?service=WPS&version=1.0.0&request=Execute&identifier=getCoverageDifference&DataInputs=collections="+a+"%3Bbegin_time="+getISODateTimeString(this.selected_time.start)+"%3Bend_time="+getISODateTimeString(this.selected_time.end)+"%3Bbbox="+e+"%3Bcrs=4326&rawdataoutput=processed";b.mediator.trigger("map:load:image",f,this.selection_list[0].geometry.getBounds());var g="",h=!0;_.each(d,function(a){a&&(h?(g=a,h=!1):!g==a&&(g=""))},this);var i="http://localhost:3080/browse/ows?service=WPS&version=1.0.0&request=Execute&identifier=getCoverageDifferenceLabel&DataInputs=collections="+a+"%3Bbegin_time="+getISODateTimeString(this.selected_time.start)+"%3Bend_time="+getISODateTimeString(this.selected_time.end)+"%3Bbbox="+e+"%3Bcrs=4326%3Bunit="+g+"&rawdataoutput=processed";$(".colorlegend").empty(),$(".colorlegend").append("<img id='theImg' src='"+i+"'/>")}}});return new e})}).call(this);