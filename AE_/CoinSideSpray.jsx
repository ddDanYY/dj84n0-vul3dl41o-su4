var CurComp = app.project.activeItem;

// Check ActiveItem
if (CurComp && CurComp instanceof CompItem){  

// Create Comp
var ParComp = app.project.items.addComp("Coin_Sides_", 1920, 1920, 1, 30, 30);

// Add Particular Solid 
var ParLSolid = ParComp.layers.addSolid([0,0,0], "Particular_L_", ParComp.width, ParComp.height, 1, ParComp.duration);
var ParRSolid = ParComp.layers.addSolid([0,0,0], "Particular_R_", ParComp.width, ParComp.height, 1, ParComp.duration);


// Find Coin
var CoinFootages = [];
    for (var i = 1; i <= app.project.numItems; i++) {
        var currentItem = app.project.item(i);
      if (currentItem instanceof FootageItem && currentItem.name.indexOf("硬幣") != -1) {
            CoinFootages.push(currentItem);
        }
    }

// Import Coin to Comp
    if (CoinFootages.length > 0) {
        for (var i = 0; i < CoinFootages.length; i++) {
            var CoinLayer = ParComp.layers.add(CoinFootages[i]);
            CoinLayer.label = 0;
            CoinLayer.enabled = false;
            CoinLayer.moveToEnd();
            CoinLayer.selected = false;
            CoinLayer.name = CoinFootages[i].name;
        }
        
// Import Coin 
    } else {
        var fileToImport = File.openDialog("Import Coin");
         if (fileToImport != null) {
        var importOptions = new ImportOptions(fileToImport);
        var CoinImport = app.project.importFile(importOptions);
        var NewCoinLayer = ParComp.layers.add(CoinImport);
        NewCoinLayer.label = 0;
        NewCoinLayer.enabled = false;
        NewCoinLayer.selected = false;
        NewCoinLayer.moveToEnd();
    }
  }

// Add Particular Control Null 
var ParCrl = ParComp.layers.addNull();
ParCrl.name = "ParticularControl";
ParCrl.label = 6;
ParCrl.selected = false;
ParCrl.enabled = false;

var SliderName = ["ParSecControl", "YRotaControl", "VeloctiyControl", "SizeControl", "PositionXControl", "PositionYControl"];
var SliderValue = [25, 25, 0, 0, 1995, 2038];

for (var i=0; i<SliderName.length; i++) {
       var SlidCrl = ParCrl.Effects.addProperty("ADBE Slider Control");
    SlidCrl.name = SliderName[i];
    SlidCrl.property("Slider").setValue(SliderValue[i]);
    SlidCrl.property("Slider").addToMotionGraphicsTemplateAs(ParComp, SliderName[i]);
   }  

// Add Particular Effect and Setting
var ParticularL = ParLSolid.Effects.addProperty("tc Particular");
var ParticularR = ParRSolid.Effects.addProperty("tc Particular");

var L = [-75,2038, 1, L];
var R = [1995,2038, -1, R];

function Partiuclar(ParLR, Par){
    if(Par[2] == 1){
        ParLR.property("tc Particular-0581").expression =   "oX = thisComp.layer(\"" + ParCrl.name + "\").effect(\""+ SliderName[4] + "\")(\"Slider\");\n" +
                                                            "oY = thisComp.layer(\"" + ParCrl.name + "\").effect(\""+ SliderName[5] + "\")(\"Slider\");\n" +
                                                            "x = thisLayer.width - oX;\n" +
                                                            "y = oY;\n" +
                                                            "[x, y, 0];"
    }else if(Par[2] == -1){
        ParLR.property("tc Particular-0581").expression =   "oX = thisComp.layer(\"" + ParCrl.name + "\").effect(\""+ SliderName[4] + "\")(\"Slider\");\n" +
                                                            "oY = thisComp.layer(\"" + ParCrl.name + "\").effect(\""+ SliderName[5] + "\")(\"Slider\");\n" +
                                                            "x = oX;\n" +
                                                            "y = oY;\n" +
                                                            "[x, y, 0];"
    }
ParLR.property("tc Particular-0146").expression = "thisComp.layer(\"" + ParCrl.name + "\").effect(\""+ SliderName[0] + "\")(\"Slider\");"; // Particles/sec
ParLR.property("tc Particular-0113").setValue(2); // Direction
ParLR.property("tc Particular-0112").setValue(90); // XRotation
ParLR.property("tc Particular-0111").expression = "thisComp.layer(\"" + ParCrl.name + "\").effect(\""+ SliderName[1] + "\")(\"Slider\") * " + Par[2] + ";"; // YRotation
ParLR.property("tc Particular-0011").expression = "thisComp.layer(\"" + ParCrl.name + "\").effect(\""+ SliderName[2] + "\")(\"Slider\")*20 + 3300"; // Veloctiy
ParLR.property("tc Particular-0703").setValue(6); // Particle Type
ParLR.property("tc Particular-0066").setValue(4); // Layer
ParLR.property("tc Particular-0027").expression = "thisComp.layer(\"" + ParCrl.name + "\").effect(\""+ SliderName[3] + "\")(\"Slider\")*5 + 110;"; // Size
ParLR.property("tc Particular-0074").setValue(15); // Size Random
ParLR.property("tc Particular-0137").setValue(100); // Random Rotation
ParLR.property("tc Particular-0017").setValue(1200); // Gravity
ParLR.property("tc Particular-0729").setValue(0); // Air Density
ParLR.property("tc Particular-0230").setValue(17 * Math.floor(Math.random()*1111)) // Random Seed
}

Partiuclar(ParticularL, L);
Partiuclar(ParticularR, R);

// Add DeepGlow Effect and Setting
var DeepGlowL = ParLSolid.Effects.addProperty("PEDG");
var DeepGlowR = ParRSolid.Effects.addProperty("PEDG");

function DeepGlow(DepGlowLR){
DepGlowLR.property("PEDG-0001").setValue(100); // Radius
DepGlowLR.property("PEDG-0002").setValue(0.4); // Exposure
}
DeepGlow(DeepGlowL);
DeepGlow(DeepGlowR);

CurComp.layers.add(ParComp);

alert("QQ");
}

else {
  
alert("Open a Comp!");

}



