define(["./Point","virtualglobeviewer/GlobWeb"],function(a,b){function c(a,b){this._coords=[],this._feature=null,this._layer=a,this._baseAltitude=b||3e4,this._height=0,this._color=[1,.5,.1,.5]}return c.prototype.setUnclosedCoordinates=function(a){this._coords=a},c.prototype.setColor=function(a){this._color=a},c.prototype.add=function(a){this._coords.push(a)},c.prototype.clear=function(){this._feature&&this._layer.removeFeature(this._feature),this._coords=[]},c.prototype.setHeight=function(a){this._height=a},c.prototype.getNumPoints=function(){return this._coords.length},c.prototype.render=function(a){var c=this._projectOnSurface(this._coords,this._baseAltitude,0),d=this._color,e=this._color;e[3]=.5;var f=new b.FeatureStyle({fillColor:this._color,strokeColor:d,extrude:!0,fill:!0});this._feature={geometry:{type:"Polygon",coordinates:c},properties:{style:f}},this._layer.addFeature(this._feature)},c.prototype.getStartPoint=function(){return this._coords[0]},c.prototype._projectOnSurface=function(a,b,c){var d=[];return 0===c?d=this._convertToGeoJSON(a,b):console.log("[AOIItemTool::projectOnSurface] NIY"),d},c.prototype._convertToGeoJSON=function(a,b){for(var c=[],d=0;d<a.length;++d){var e=[];e.push(a[d].x),e.push(a[d].y),e.push(b),c.push(e)}var e=[];return e.push(a[0].x),e.push(a[0].y),e.push(b),c.push(e),c},c.prototype.toJSON=function(){return this._feature},c});