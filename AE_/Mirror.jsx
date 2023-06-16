if (app.project.activeItem && app.project.activeItem instanceof CompItem) {
    var comp = app.project.activeItem;
    var selectedLayers = comp.selectedLayers;
  
    if (selectedLayers.length > 0) { 
      for (var i = 0; i < selectedLayers.length; i++) {
        var layer = selectedLayers[i];
        var layerScale = layer.transform.scale.value;
        var layerRotation = layer.transform.rotation.value;
        var layerPosition = layer.transform.position.value;
        var newPosition = [comp.width - layerPosition[0], layerPosition[1]];

        var newLayer = layer.duplicate();
            newLayer.name = layer.name + "_Duplicate";

        newLayer.transform.anchorPoint.expression = "value = thisComp.layer(\"" + layer.name + "\").transform.anchorPoint;";

        newLayer.transform.position.expression =    "oP = thisComp.layer(\"" + layer.name + "\").transform.position;\n" +
                                                    "x = thisComp.width - oP[0];\n" +
                                                    "y = oP[1];\n" + 
                                                    "value = [x,y];\n";

        newLayer.transform.scale.expression =       "oS = thisComp.layer(\"" + layer.name + "\").transform.scale;\n" +     
                                                    "x = -(oS[0]);\n" +
                                                    "y = oS[1];\n" +                             
                                                    "value = [x,y];\n";
                                                    
        newLayer.transform.rotation.expression =    "oR = thisComp.layer(\"" + layer.name + "\").transform.rotation;\n" +
                                                    "value = -(oR);\n";

        }  
    }
}