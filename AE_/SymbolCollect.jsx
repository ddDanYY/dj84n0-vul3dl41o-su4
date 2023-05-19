if (app.project.activeItem && app.project.activeItem instanceof CompItem && app.project.activeItem.selectedLayers.length > 0) {
	var selectedLayers = app.project.activeItem.selectedLayers;
	var LayerOffsetInput = prompt("LayerOffset", "2");
	var LayerOffsetValue = parseFloat(LayerOffsetInput);
	var Target = app.project.activeItem.layers.addNull();
	Target.name = "Target";
	var scaleSlider = Target.property("Effects").addProperty("Slider Control");
	scaleSlider.name = "Scale%";
	var scalename = scaleSlider.name;
	scaleSlider.property("Slider").setValue(250);
	var MidOffset = Target.property("Effects").addProperty("Slider Control");
	MidOffset.name = "MidOffset";
	var MidOffsetname = MidOffset.name;
	MidOffset.property("Slider").setValue(0);
	
	for (var i = 0; i < selectedLayers.length; i++) {
		var CompRate = app.project.activeItem.frameRate;
		var markerTime = app.project.activeItem.time;
		
		selectedLayers[i].property("Marker").setValueAtTime(markerTime+(LayerOffsetValue/CompRate)*(i), new MarkerValue(""));
		selectedLayers[i].property("Marker").setValueAtTime((markerTime+15/CompRate)+(LayerOffsetValue/CompRate)*(i), new MarkerValue(""));
		
		var lastMarker = selectedLayers[i].property("Marker").keyTime(selectedLayers[i].property("Marker").numKeys);
		selectedLayers[i].outPoint = lastMarker;

		var ScaleexpressionString = "os = thisComp.layer(\"" + Target.name + "\").effect(\"" + MidOffsetname + "\")(\"Slider\"); \n"+
                                "scal = thisComp.layer(\"" + Target.name + "\").effect(\"" + scalename + "\")(\"Slider\") / 100; \n"+
                                "In = marker.nearestKey(inPoint).time; \n"+
                                "Out = marker.nearestKey(outPoint).time; \n"+
                                "MidOffset = divide(os); \n"+
                                "MidPoint = (In + Out) / 2; \n"+
                                "if (time < MidPoint + MidOffset) { \n"+
                               	"  v = easeIn(time, In, MidPoint + MidOffset, value[0], value[0] * scal); \n"+
                                "} else if (time >= MidPoint + MidOffset) { \n"+
                               	"  v = easeIn(time, MidPoint + MidOffset, Out, value[0] * scal, value[0]); \n"+
                                "}; \n"+
                                "value = [v, v]; \n"+
                                " \n"+
                                "function divide(z) { \n"+
                                "	framerate = 1 / thisComp.frameDuration; \n"+
                                "	v = z / framerate; \n"+
                                "	return v; \n"+
                                "};";

    var PosexpressionString =   "os = thisComp.layer(\"" + Target.name + "\").effect(\"" + MidOffsetname + "\")(\"Slider\"); \n"+
                                "TargetPos = thisComp.layer(\"" + Target.name + "\").transform.position; \n"+
                                "In = marker.nearestKey(inPoint).time; \n"+
                                "Out = marker.nearestKey(outPoint).time; \n"+
                                " \n"+
                                "value = easeIn(time, In, Out, value, TargetPos);";
                              
    
		var ScaleProperty = selectedLayers[i].property("Scale");
		var PosProperty = selectedLayers[i].property("Position");
		ScaleProperty.expression = ScaleexpressionString;
		PosProperty.expression = PosexpressionString;
	}

} else {
	alert("Please select at least one layer in the active composition.");
}
