var viewIDs = app.getProjectViewIDs();
var selectedItems = app.getProjectViewSelection(viewIDs[0]);
var itemAttr = selectedItems[0];
var clip = selectedItems[0];
var clipIn= clip.getInPoint().seconds
var clipOut = clip.getOutPoint().seconds

var clipMarkersObject = clip.getMarkers();


var numMarkers = clipMarkersObject.numMarkers;
//alert(numMarkers.toString())
var markers = clip.markers;
var markAry = [];
var currentMarker;
currentMarker = clipMarkersObject.getFirstMarker();
//var myNewMarker = clipMarkersObject.createMarker(clipIn);
var error = [];
for(i=0; i < clipMarkersObject.length;i++){
        //alert(currentMarker.start.seconds.toString())
        //alert(clipMarkersObject[i].start.seconds.toString() + ' ' + clipIn)
        if(clipIn.toString() == clipMarkersObject[i].start.seconds.toString()){
            //alert('match')    
            error.push('cannot create dur marker')
            
            
            }
    }
//alert(error.length.toString())
if(error.length == 0){
    var myNewMarker = clipMarkersObject.createMarker(clipIn);

    }

var clipMarkersObject = clip.getMarkers();

for(i=0; i < clipMarkersObject.length ;i++){
        //alert(currentMarker.start.seconds.toString())
        //alert(clipMarkersObject[i].start.seconds.toString())
        //alert(clipMarkersObject[i].start.seconds.toString() + ' ' + clipIn.toString())
        if(clipIn.toString() == clipMarkersObject[i].start.seconds.toString()){
                   // alert(clipMarkersObject[i].name.toString())
            var myCurrentMarker = clipMarkersObject[i]
            myCurrentMarker.end = clipOut
            
            
            }
    }
 var myCurrentMarker = clipMarkersObject[0]
 //alert(myCurrentMarker.name.toString())
 //myCurrentMarker.end = clipOut
//alert(currentMarker.name.toString())
/*
for(a=0;a<numMarkers;a++){
var tempAry = [];
if(a==0){
currentMarker = clipMarkersObject.getFirstMarker();
alert(currentMarker.name.toString())
tempAry.push(currentMarker.name);
tempAry.push(currentMarker.start.seconds);
tempAry.push(currentMarker.end.seconds);
tempAry.push(currentMarker.type);
tempAry.push(currentMarker.comments);
markAry.push(tempAry);
}
}
alert(tempAry.toString())
*/


//GET MARKER IDS
//FIND NEW MARKER// MUST WORK WITH PREV MARKERS
//alert(clipMarkersObject[0].name.toString())

//var myNewMarker = clipMarkersObject.createMarker(clipIn);


//var myCurrentMarker = clipMarkersObject[a]
            //myCurrentMarker.end = endSeconds[a]
                           
            
            //var myCurrentMarker = clipMarkersObject[clipMarkersObject.length - 1]
            
                //alert(myCurrentMarker.toString())
            //var myCurrentMarker = clipMarkersObject[a]
            //myCurrentMarker.end = endSeconds[a]
            