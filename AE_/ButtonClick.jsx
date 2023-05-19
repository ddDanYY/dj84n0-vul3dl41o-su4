if (app.project.activeItem && app.project.activeItem instanceof CompItem && app.project.activeItem.selectedLayers.length > 0) {
    var selectedLayers = app.project.activeItem.selectedLayers;
for (var i = 0; i < selectedLayers.length; i++) {
    
    var markerTime = app.project.activeItem.time; 
    selectedLayers[i].property("Marker").setValueAtTime(markerTime, new MarkerValue(""));
    
    var scaleSlider = selectedLayers[i].property("Effects").addProperty("ADBE Slider Control");
    scaleSlider.name = "Scale%";
    var scalename = scaleSlider.name;
    scaleSlider.property("Slider").setValue(65);
    var amplitudeSlider = selectedLayers[i].property("Effects").addProperty("ADBE Slider Control");
    amplitudeSlider.name = "Amplitude";
    var ampname = amplitudeSlider.name;
    amplitudeSlider.property("Slider").setValue(1.3);
    var frequencySlider = selectedLayers[i].property("Effects").addProperty("ADBE Slider Control");
    frequencySlider.name = "Frequency";
    var freqname = frequencySlider.name;
    frequencySlider.property("Slider").setValue(2.5);
    var exposValueSlider = selectedLayers[i].property("Effects").addProperty("ADBE Slider Control");
    exposValueSlider.name = "ExposValue";
    var exposname = exposValueSlider.name;
    exposValueSlider.property("Slider").setValue(-3);
    var exposureEffect = selectedLayers[i].property("Effects").addProperty("ADBE Exposure2");
    exposureEffect.property("Exposure").setValue(0);
   
    var scaleexpressionString = "dur = divide(5); // 整體動態時間 5 = Marker 前5格 + 後5格\n" +
                                               "amp = effect(\"" + ampname + "\")(\"Slider\"); // 震盪幅度\n" +
                                               "freq = effect(\"" + freqname + "\")(\"Slider\"); // 震盪頻率\n" +
                                               "scal = effect(\"" + scalename + "\")(\"Slider\")/100; // 縮放比例\n" +
                                               "startoffset = 2; // 動態起始時間偏移 MinValue = 0 = 不偏移\n\n" +
                                               "if (marker.numKeys == 0) {\n" +
                                               "  value;\n" +
                                               "} else {\n" +
                                               "  k = marker.nearestKey(time);\n" +
                                               "  t = k.time;\n" +
                                               "  a = easeIn(time, t - (dur-divide(startoffset)), t, value, value * scal);\n" +
                                               "  b = linear(time, t, t + dur, value * scal, value);\n" +
                                               "  if (time < t) {\n" +
                                               "    value = a;\n" +
                                               "  }else{\n" +
                                               "    d = (time - t) * freq * 2 * Math.PI;\n" +
                                               "    offset = (value - b) * Math.pow(Math.sin(d), 2) * amp;\n" +
                                               "    value = b + offset;\n" +
                                               "  }\n" +
                                               "}\n\n" +
                                               "// frametotime的組合包\n" +
                                               "function divide(z){\n" +
                                               "  framerate = 1/thisComp.frameDuration;\n" +
                                               "  v = z/framerate;\n" +
                                               "  return v;\n" +
                                               "}";          
                                               
     var scaleProperty = selectedLayers[i].property("Scale");
        scaleProperty.expression = scaleexpressionString;

    
    var exposexpressionString = "dur = divide(5); // 整體動態時間 5 = Marker 前5格 + 後5格\n" +
                                               "expos = effect(\"" + exposname + "\")(\"Slider\"); // Exposure最大值\n" +
                                               "startoffset = 2; // 動態起始時間偏移 MinValue = 0 = 不偏移\n\n" +
                                               "if (marker.numKeys == 0) {\n" +
                                               "  value;\n" +
                                               "} else {\n" +
                                               "  k = marker.nearestKey(time);\n" +
                                               "  t = k.time;\n" +
                                               "  a = easeIn(time, t - (dur-divide(startoffset)), t, 0, 0 + expos);\n" +
                                               "  b = linear(time, t, t + (dur-divide(startoffset)), 0 + expos, 0);\n" +
                                               "  if (time < t) {\n" +
                                               "    value = a;\n" +
                                               "  }else{\n" +
                                               "    value = b;\n" +
                                               "  }\n" +
                                               "}\n\n" +
                                               "// frametotime的組合包\n" +
                                               "function divide(z){\n" +
                                               "  framerate = 1/thisComp.frameDuration;\n" +
                                               "  v = z/framerate;\n" +
                                               "  return v;\n" +
                                               "}";          
                                               
    var exposProperty = selectedLayers[i].property("Effects")("Exposure")("Exposure");                        
    exposProperty.expression = exposexpressionString;
    
  
    }
  
} else {
  alert("Please select at least one layer in the active composition.");
}



    
