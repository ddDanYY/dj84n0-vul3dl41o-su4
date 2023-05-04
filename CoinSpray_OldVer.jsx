var CurComp = app.project.activeItem;

// Check ActiveItem
if (CurComp && CurComp instanceof CompItem){  

// Create Comp
var ParComp = app.project.items.addComp("Coin_Particular_", 1920, 1920, 1, 30, 30);

// Add Player and Target Null
var Player = ParComp.layers.addNull();
Player.name = "Player";
Player.label = 9;
Player.property("Position").setValue([(ParComp.width/2)-600, (ParComp.height/2)-600]);
var Target = ParComp.layers.addNull();
Target.name = "Target";
Target.label = 2;
Target.property("Position").setValue([(ParComp.width/2)+600, (ParComp.height/2)+600]);

// Player Lookat expression
var PlayerLookatExpression = "var toPt = thisComp.layer(\""+ Target.name + "\").transform.position;\n" + 
                             "var fromPt = transform.position;\n" +
                             "function lookAtMe(fromPt,toPt){\n" +
                             "	d = toPt - fromPt;\n" +
                             "if(d[0]==0){\n" +
                             "	A = (d[1]>0)? 90: -90;\n" +
                             "}else{\n" +
                             "   A = radiansToDegrees(Math.atan(d[1]/d[0]));\n" +
                             "}\n" +
                             "return 90 + ((d[0]>0)? A:180+A);\n" +
                             "}\n" +
                             "value = lookAtMe(fromPt, toPt);";
                             
Player.property("Rotation").expression = PlayerLookatExpression;

// Add Particular Solid 
var ParSolid = ParComp.layers.addSolid([0,0,0], "Particular_", ParComp.width, ParComp.height, 1, ParComp.duration);
ParSolid.moveToEnd();

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

// Add Null for Particles/Ses
var ParSec = ParComp.layers.addNull();
ParSec.name = "Particles/sec";
ParSec.label = 6;
ParSec.selected = false;
ParSec.enabled = false;
var ParSecControl = ParSec.Effects.addProperty("ADBE Slider Control");
ParSecControl.name = "ParSecControl";
ParSecControl.property("Slider").setValue(15);

// Add Particular Effect and Setting
var Particular = ParSolid.Effects.addProperty("Particular");


Particular.property("Direction").setValue(2);
Particular.property("Direction Spread").setValue(2);
Particular.property("Velocity").setValue(2000);
Particular.property("Velocity Random").setValue(10);
Particular.property("X Rotation").setValue(90);
Particular.property("Random Rotation").setValue(100);
Particular.property("Size").setValue(80);
Particular.property("Life Random").setValue(2);
Particular.property("tc Particular-0026").setValue(6);
Particular.property("tc Particular-0074").setValue(20);
Particular.property("tc Particular-0066").setValue(5);

Particular.property("Particles/sec").expression = "thisComp.layer(\"" + ParSec.name + "\").effect(\""+ ParSecControl.name + "\")(\"Slider\");";

Particular.property("Position").expression = "PlayerPos = thisComp.layer(\"" + Player.name + "\").transform.position;\n" + 
                                             "value = PlayerPos;";
                                             
Particular.property("Y Rotation").expression = "thisComp.layer(\"" + Player.name + "\").  transform.rotation;";   

Particular.property("tc Particular-0002").expression = "PlayerPos = thisComp.layer(\"" + Player.name + "\").transform.position;\n" +
                                                   "TargetPos = thisComp.layer(\"" + Target.name + "\").transform.position;\n" +
                                                   "v = effect(\"Particular\")(\"Velocity\");\n" +
                                                   "L = length(PlayerPos,TargetPos);\n" +
                                                   "value = L/v;";

// Add to Essential Graphics    
ParSecControl.property("Slider").addToMotionGraphicsTemplateAs(ParComp,ParSecControl.name);
Player.property("Position").addToMotionGraphicsTemplateAs(ParComp, Player.name + " Position");
Target.property("Position").addToMotionGraphicsTemplateAs(ParComp, Target.name + " Position");
Particular.property("Velocity").addToMotionGraphicsTemplateAs(ParComp, "Velocity");
Particular.property("Random Seed").addToMotionGraphicsTemplateAs(ParComp, "Seed");

CurComp.layers.add(ParComp);

ParComp.openInEssentialGraphics();

alert("QQ");
}

else {
  
alert("Open a Comp!");

}



