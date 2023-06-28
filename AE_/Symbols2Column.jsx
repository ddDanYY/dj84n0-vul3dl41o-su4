var CurComp = app.project.activeItem;

// Check activeItem
if (CurComp && CurComp instanceof CompItem){  

// Import dialog
var filesToImport = File.openDialog("Select Symbols to import", "All files:*.*", true);

// Create Files Selection
if (filesToImport.length >0){
  
// Create "Symbol_" folder
var SymbolFolder = app.project.items.addFolder("Symbol_");

// Import Symbol file
for (var i = 0; i < filesToImport.length; i++) {
	var file = filesToImport[i];
	var importedFootage = app.project.importFile(new ImportOptions(file));
	importedFootage.parentFolder = SymbolFolder;
}
}


// Create "Symbol_" comp
var SquareSize_X = 250;
var SquareSize_Y = 250;
var SymbolSize_X = Math.ceil(SquareSize_X*1.2);
var SymbolSize_Y = Math.ceil(SquareSize_Y*1.2);
var FrameRate = 30;
var SymbolComp = app.project.items.addComp("Symbol_", SymbolSize_X, SymbolSize_Y, 1, filesToImport.length / FrameRate, FrameRate);

// Import Symbols to "Symbol_" comp
for (var i = 1; i <= SymbolFolder.numItems; i++) {
	var item = SymbolFolder.item(i);
	var footageItem = SymbolComp.layers.add(item);
}

// Sequence Symbol
var layerDuration = SymbolComp.duration / SymbolComp.numLayers;
for (var i = 1; i <= SymbolComp.numLayers; i++) {
	var layer = SymbolComp.layer(i);
	layer.startTime = (i - 1) * layerDuration;
	layer.outPoint = layer.startTime + layerDuration;
}

// Create Square 
var SquareSolid = SymbolComp.layers.addSolid([1, 0, 0], "Square", SquareSize_X, SquareSize_Y, 1, SymbolComp.duration);
var SquareFill = SquareSolid.Effects.addProperty("ADBE Fill");
SquareFill.name = "Color";

// Add Fill to Essential Graphics
SquareFill.property("Color").addToMotionGraphicsTemplateAs(SymbolComp, SquareFill.name);
SquareSolid.moveToEnd();

// Create "Column_" comp 
var Symbolnum = 20;
var ColumnComp = app.project.items.addComp("Column_", Math.ceil(SymbolSize_X * 1.5), Symbolnum * SquareSize_Y, 1, 30, FrameRate);

// Add Null for Seed Control
var SeedControlContainer = ColumnComp.layers.addNull();
SeedControlContainer.name = "SeedControlContainer";
var SeedControl = SeedControlContainer.Effects.addProperty("ADBE Slider Control");
SeedControl.name = "Seed";

// Add Seed to Essential Graphics 
SeedControl.property("Slider").addToMotionGraphicsTemplateAs(ColumnComp, SeedControl.name);
SquareFill.property("Opacity").addToMotionGraphicsTemplateAs(ColumnComp, SquareSolid.name);

// TimeRemap expression
var TimeRemapExpression = "v = " + (filesToImport.length-1) + "; \n" + 
                          "s = thisComp.layer(\"" + SeedControlContainer.name + "\").effect(\""+ SeedControl.name + "\")(\"Slider\");\n" +
                          "seedRandom(index+s,true);\n" +
                          "x = Math.round(random(0,v));\n" +
                          "framesToTime(x);";
// Random Color expression
var ColorRandomExpression = "seedRandom(index, true);\n" + 
                            "r = random(0,1);\n" + 
                            "g = random(0,1);\n" +                          
                            "b = random(0,1);\n" + 
                            "[r,g,b,1];";

// Duplicate "Symbol_" comp
for (var i = 0; i < Symbolnum; i++) {
	var ColumnCompLayer = ColumnComp.layers.add(SymbolComp);
	ColumnCompLayer.position.setValue([(ColumnComp.width)/2, (i * SquareSize_Y) + (SquareSize_Y / 2)]);

	// TimeRemap Setting
	ColumnCompLayer.timeRemapEnabled = true;
	ColumnCompLayer.property("Time Remap").removeKey(2);
	ColumnCompLayer.property("Time Remap").setInterpolationTypeAtKey(1, KeyframeInterpolationType.HOLD, KeyframeInterpolationType.HOLD);
	ColumnCompLayer.outPoint = ColumnComp.duration;
	ColumnCompLayer.property("Time Remap").expression = TimeRemapExpression;
	ColumnCompLayer.property("Essential Properties").property("Color").expression = ColorRandomExpression;
}

// Add Column Control Null
var ColumnControlContainer = CurComp.layers.addNull();
ColumnControlContainer.name = "ColumnControlContainer";
ColumnControlContainer.label = 0;
ColumnControlContainer.moveToEnd();
ColumnControlContainer.enabled = false;

var SpaceX = 15;
var OffSetY = 0;

// Add Space Control
var SpaceXControl = ColumnControlContainer.Effects.addProperty("ADBE Slider Control");
SpaceXControl.name = "SpaceX";
var SpaceXName = SpaceXControl.name;
SpaceXControl.property("Slider").setValue(SpaceX);

var OffSetYControl = ColumnControlContainer.Effects.addProperty("ADBE Slider Control");
OffSetYControl.name = "OffSetY";
var OffSetYName = OffSetYControl.name;
OffSetYControl.property("Slider").setValue(OffSetY);

var SquareControl = ColumnControlContainer.Effects.addProperty("ADBE Checkbox Control");
    SquareControl.name = "Square";
var SquareName = SquareControl.name;
    SquareControl.property("Checkbox").setValue(true);

var TotalSeedControl = ColumnControlContainer.Effects.addProperty("ADBE Slider Control");
    TotalSeedControl.name = "Seed";
var TotalSeedControlName = TotalSeedControl.name;
    TotalSeedControl.property("Slider").setValue(0);
    TotalSeedControl.property("Slider").addToMotionGraphicsTemplateAs(CurComp, TotalSeedControlName); 

// Duplicate "Column_" comp to Board comp and add Expression on Seed
for (var i = 5; i >= 1 ; i--){
 var ColumninBoard = CurComp.layers.add(ColumnComp);
 ColumninBoard.label = i;
 ColumninBoard.name = "Column_" + i;
 
 // Motion Tile
 var MotionTile_Value = 100 + (Math.floor(((30000-ColumnComp.height)/(SquareSize_Y*2)))*10);
 var MotionTile = ColumninBoard.Effects.addProperty("ADBE Tile"); 
 MotionTile.property("Output Height").setValue(MotionTile_Value);
 
 // Set Position
 ColumninBoard.position.setValue([(CurComp.width/2-SpaceX*2)+(i-1)*SpaceX, CurComp.height /2 - 14500]);
 
 ColumninBoard.property("Essential Properties").property(SeedControl.name).expression =  "Seed = thisComp.layer(\"" +  ColumnControlContainer.name + "\").effect(\"" + TotalSeedControlName + "\")(\"Slider\");\n" +
                                                                                                    "Value = Seed + index;";
 ColumninBoard.property("Essential Properties").property(SquareSolid.name).expression =  "Check = thisComp.layer(\"" +  ColumnControlContainer.name + "\").effect(\"" + SquareName + "\")(\"Checkbox\");\n" +
 																						 "Check ==true? value =100: value =0;";                                                                  
// Add Slider to Column Control Null 
 var ColumnControl = ColumnControlContainer.Effects.addProperty("ADBE Slider Control");
 	ColumnControl.name = "Column" + i;

 // Add ColumnControl to Essential Graphics 
ColumnControl.property("Slider").addToMotionGraphicsTemplateAs(CurComp, ColumnControl.name);
 

 // Colunm Expression to Position
 		ColumninBoard.property("Position").expression = "n = thisComp.layer(\"" +  ColumnControlContainer.name + "\").effect(\"" + ColumnControl.name + "\")(\"Slider\");\n" + 
                                                 "Mid = thisComp.layer(\"Column_3\").transform.position[0];\n" +
												 "i = " + i + ";\n" +
                                                 "SpaceX = thisComp.layer(\"" +  ColumnControlContainer.name + "\").effect(\"" + SpaceXName + "\")(\"Slider\")+250;\n" +
                                                 "OffSetY = thisComp.layer(\"" +  ColumnControlContainer.name + "\").effect(\"" + OffSetYName + "\")(\"Slider\");\n" +
												 "x = (Mid-SpaceX*2) + Math.abs((SpaceX*(i-1)));\n" +
                                                 "y = value[1] + OffSetY +" + SquareSize_Y + "*n;\n" + 
                                                 "value = [x,y];";

ColumnControl.moveTo(1);
}

}

else {
  
alert("Open a Comp!");

}

