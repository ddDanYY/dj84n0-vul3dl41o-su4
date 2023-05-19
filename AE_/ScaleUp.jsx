if (app.project.activeItem && app.project.activeItem instanceof CompItem && app.project.activeItem.selectedLayers.length > 0) {
    var selectedLayers = app.project.activeItem.selectedLayers;
    
for (var i = 0; i < selectedLayers.length; i++) {
    
    var CompRate = app.project.activeItem.frameRate;  
    var LayerInPoint = selectedLayers[i].inPoint; 
    var key = new KeyframeEase(0.33, 33);  
    
    // Scale
    var propscale = selectedLayers[i].property("Scale");     
    propscale.setValueAtTime(LayerInPoint + 5/CompRate,  propscale.value);       
    propscale.setValueAtTime(LayerInPoint ,  [0,0]);  
    propscale.setTemporalEaseAtKey(1, [key,key,key],[key,key,key]);
    propscale.setInterpolationTypeAtKey(1,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER);
   
    //Rotation
    var proprota = selectedLayers[i].property("Rotation");  
    proprota.setValueAtTime(LayerInPoint + 5/CompRate,  proprota.value);   
    proprota.setValueAtTime(LayerInPoint ,  proprota.value+70);
    proprota.setTemporalEaseAtKey(1, [key],[key]);
    proprota.setInterpolationTypeAtKey(1,KeyframeInterpolationType.BEZIER,KeyframeInterpolationType.BEZIER);   
   
    var OverShootexpressionString =   "freq = 5; \n" + 
                                                        "decay = 15;\n" + 
                                                        "n = 0;\n" + 
                                                        "if (numKeys > 0){\n" + 
                                                        "n = nearestKey(time).index;\n" + 
                                                        "if (key(n).time > time) n--;\n" + 
                                                        "}\n" + 
                                                        "if (n > 0){\n" + 
                                                        "t = time - key(n).time;\n" + 
                                                        "amp = velocityAtTime(key(n).time - .001);\n" + 
                                                        "w = freq*Math.PI*2;\n" + 
                                                        "value + amp*(Math.sin(t*w)/Math.exp(decay*t)/w);\n" + 
                                                        "}else{\n" + 
                                                        "  value;\n" + 
                                                        "};\n";
    
   propscale.expression = OverShootexpressionString;
   proprota.expression = OverShootexpressionString;
   
    }
  
} else {
  alert("Please select at least one layer in the active composition.");
}


