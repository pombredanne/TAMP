var padLeft=function(a,b,c){for(;a.length<c;)a=b+a;return a},getDateString=function(a){return a.getFullYear()+"-"+padLeft(String(a.getUTCMonth()+1),"0",2)+"-"+padLeft(String(a.getUTCDate()),"0",2)},getISODateString=function(a){return getDateString(a)+"T"},getISODateTimeString=function(a){return getISODateString(a)+padLeft(String(a.getUTCHours()),"0",2)+":"+padLeft(String(a.getUTCMinutes()),"0",2)+":"+padLeft(String(a.getUTCSeconds()),"0",2)+"Z"},htmlTemplate=function(a,b){var c=$(a).html();return _.template(c,b)},utc=function(a,b,c,d,e,f,g){var h=new Date(Date.UTC.apply(null,arguments));return h},getCoverageXML=function(a,b){if(!a)throw new Error("Parameters 'coverageid' is mandatory.");b=b||{},subsetCRS=b.subsetCRS||"http://www.opengis.net/def/crs/EPSG/0/4326";var c=['<wcs:GetCoverage service="WCS" version="2.0.0" xmlns:wcs="http://www.opengis.net/wcs/2.0" xmlns:wcscrs="http://www.opengis.net/wcs/crs/1.0" xmlns:wcsmask="http://www.opengis.net/wcs/mask/1.0">',"<wcs:CoverageId>"+a+"</wcs:CoverageId>"],d=[];if(b.format&&c.push("<wcs:format>"+b.format+"</wcs:format>"),!b.bbox||b.subsetX||b.subsetY||(b.subsetX=[b.bbox[0],b.bbox[2]],b.subsetY=[b.bbox[1],b.bbox[3]]),b.subsetX&&c.push('<wcs:DimensionTrim><wcs:Dimension crs="'+subsetCRS+'">x</wcs:Dimension><wcs:TrimLow>'+b.subsetX[0]+"</wcs:TrimLow><wcs:TrimHigh>"+b.subsetX[1]+"</wcs:TrimHigh></wcs:DimensionTrim>"),b.subsetY&&c.push('<wcs:DimensionTrim><wcs:Dimension crs="'+subsetCRS+'">y</wcs:Dimension><wcs:TrimLow>'+b.subsetY[0]+"</wcs:TrimLow><wcs:TrimHigh>"+b.subsetY[1]+"</wcs:TrimHigh></wcs:DimensionTrim>"),b.outputCRS&&c.push("<wcs:OutputCrs>"+b.outputCRS+"</wcs:OutputCrs>"),b.mask&&d.push("<wcsmask:polygonMask>"+b.mask+"</wcsmask:polygonMask>"),b.multipart&&c.push("<wcs:mediaType>multipart/related</wcs:mediaType>"),d.length>0){c.push("<wcs:Extension>");for(var e=0;e<d.length;++e)c.push(d[e]);c.push("</wcs:Extension>")}return c.push("</wcs:GetCoverage>"),c.join("")};