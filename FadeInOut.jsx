if (app.project.activeItem && app.project.activeItem instanceof CompItem && app.project.activeItem.selectedLayers.length > 0) {
    var selectedLayers = app.project.activeItem.selectedLayers;
for (var i = 0; i < selectedLayers.length; i++) {
    var CompRate = app.project.activeItem.frameRate;
    var LayerInPoint = selectedLayers[i].inPoint;
    var LayerOutPoint = selectedLayers[i].outPoint;
    selectedLayers[i].property("Marker").setValueAtTime(LayerInPoint + 5/CompRate, new MarkerValue(""));
    selectedLayers[i].property("Marker").setValueAtTime(LayerOutPoint - 5/CompRate, new MarkerValue(""));
    
    var FadeInCheck = selectedLayers[i].property("Effects").addProperty("ADBE Checkbox Control");
    FadeInCheck.name = "FadeIn";
    var FadeInname = FadeInCheck.name;
    FadeInCheck.property("Checkbox").setValue(true);
    
    var FadeOutCheck = selectedLayers[i].property("Effects").addProperty("ADBE Checkbox Control");
    FadeOutCheck.name = "FadeOut";
    var FadeOutname = FadeOutCheck.name;
    FadeOutCheck.property("Checkbox").setValue(true);
    
    var FadeInOutexpressionString =   "FadeIn = effect(\"" + FadeInname + "\")(\"Checkbox\");\n" + 
                                                        "FadeOut = effect(\"" + FadeOutname + "\")(\"Checkbox\");\n" +
                                                        "if (marker.numKeys <= 1) {\n" +
                                                        "    value;\n" +            
                                                        "}else{\n" +
                                                         "InMarker = thisLayer.marker.nearestKey(inPoint).time;\n" +
                                                        "OutMarker = thisLayer.marker.nearestKey(outPoint).time;\n" +
                                                        "In = linear(time, inPoint, InMarker, 0, value);\n" +
                                                        "Out = linear(time, OutMarker, outPoint, value, 0);\n" +
                                                        "if(FadeIn ==1 && time < InMarker){\n" +
                                                        "    value = In;\n" +
                                                        "}else if(FadeOut ==1 && time > OutMarker){\n" +
                                                        "    value = Out;\n" +
                                                        "}else{\n" +
                                                        "    value;\n" +
                                                        "}\n" +
                                                        "};"

    
    var FadeInOutProperty = selectedLayers[i].property("Opacity");
           FadeInOutProperty.expression = FadeInOutexpressionString;
    }
  
} else {
  alert("Please select at least one layer in the active composition.");
}


