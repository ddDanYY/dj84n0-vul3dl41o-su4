var panelGlobal = this;


/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":20,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"Neil","windowType":"Window","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":true},"text":"Dialog","preferredSize":[0,0],"margins":15,"orientation":"column","spacing":5,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Panel","parentId":13,"style":{"enabled":true,"varName":"DistancePanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Distance","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-2":{"id":2,"type":"EditText","parentId":1,"style":{"enabled":true,"varName":"DistanceText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"60","justify":"center","preferredSize":[40,20],"alignment":null,"helpTip":null}},"item-3":{"id":3,"type":"Panel","parentId":13,"style":{"enabled":true,"varName":"DurationPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Duration","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-4":{"id":4,"type":"EditText","parentId":3,"style":{"enabled":true,"varName":"DurationText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"100","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-5":{"id":5,"type":"Panel","parentId":13,"style":{"enabled":true,"varName":"SpeedPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Speed","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-6":{"id":6,"type":"EditText","parentId":5,"style":{"enabled":true,"varName":"SpeedText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0.6","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-8":{"id":8,"type":"StaticText","parentId":13,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"X","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-9":{"id":9,"type":"StaticText","parentId":13,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"=","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-10":{"id":10,"type":"Group","parentId":23,"style":{"enabled":true,"varName":"BottomGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":1,"alignChildren":["center","center"],"alignment":null}},"item-11":{"id":11,"type":"Button","parentId":10,"style":{"enabled":true,"varName":null,"text":"Calculate","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-12":{"id":12,"type":"Button","parentId":10,"style":{"enabled":true,"varName":null,"text":"GOGO","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-13":{"id":13,"type":"Group","parentId":23,"style":{"enabled":true,"varName":"CalculateGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-15":{"id":15,"type":"Panel","parentId":10,"style":{"enabled":true,"varName":"KeyOffSetPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"KeyOffSet","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-16":{"id":16,"type":"EditText","parentId":15,"style":{"enabled":true,"varName":"KeyOffSetText","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"5","justify":"center","preferredSize":[25,20],"alignment":null,"helpTip":null}},"item-17":{"id":17,"type":"Group","parentId":0,"style":{"enabled":true,"varName":"ColumnBottomGroup","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-19":{"id":19,"type":"Button","parentId":32,"style":{"enabled":true,"varName":null,"text":"Select","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-20":{"id":20,"type":"Divider","parentId":0,"style":{"enabled":true,"varName":null}},"item-22":{"id":22,"type":"Button","parentId":32,"style":{"enabled":true,"varName":null,"text":"GOGO","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-23":{"id":23,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"RollingPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Rolling","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-24":{"id":24,"type":"Divider","parentId":23,"style":{"enabled":true,"varName":null}},"item-26":{"id":26,"type":"Panel","parentId":28,"style":{"enabled":true,"varName":"Symbol_X_Panel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Symbol_X","preferredSize":[114,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-27":{"id":27,"type":"EditText","parentId":26,"style":{"enabled":true,"varName":"Symbol_X_Text","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"250","justify":"center","preferredSize":[50,0],"alignment":null,"helpTip":null}},"item-28":{"id":28,"type":"Group","parentId":31,"style":{"enabled":true,"varName":"SymbolXYGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-31":{"id":31,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"ColumnPanel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"2Column","preferredSize":[0,0],"margins":21,"orientation":"column","spacing":51,"alignChildren":["center","center"],"alignment":null}},"item-32":{"id":32,"type":"Group","parentId":17,"style":{"enabled":true,"varName":"ColumnButtonGroup","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-33":{"id":33,"type":"Panel","parentId":28,"style":{"enabled":true,"varName":"Symbol_Y_Panel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Symbol_Y","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["center","center"],"alignment":null}},"item-34":{"id":34,"type":"EditText","parentId":33,"style":{"enabled":false,"varName":"Symbol_Y_Text","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"250","justify":"center","preferredSize":[36,0],"alignment":null,"helpTip":null}},"item-35":{"id":35,"type":"Checkbox","parentId":28,"style":{"enabled":false,"varName":null,"text":"Locked","preferredSize":[0,0],"alignment":"center","helpTip":null,"checked":false}},"item-37":{"id":37,"type":"EditText","parentId":17,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"xxxx","justify":"center","preferredSize":[141,0],"alignment":null,"helpTip":null}}},"order":[0,31,28,26,27,33,34,35,17,37,32,19,22,20,23,13,5,6,8,3,4,9,1,2,24,10,15,16,11,12],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":true,"itemReferenceList":"None"}}
*/ 

var Neil = (panelGlobal instanceof Panel) ? panelGlobal : new Window("palette", undefined, undefined, {resizeable: true}); 
    if ( !(panelGlobal instanceof Panel) )  Neil.text = "Neil";
    Neil.orientation = "column"; 
    Neil.alignChildren = ["center","top"]; 
    Neil.spacing = 5; 
    Neil.margins = 15; 


//2Column
var ColumnPanel = Neil.add("panel", undefined, undefined, {name: "ColumnPanel"}); 
    ColumnPanel.text = "2Column"; 
    ColumnPanel.orientation = "column"; 
    ColumnPanel.alignChildren = ["center","center"]; 
    ColumnPanel.spacing = 10; 
    ColumnPanel.margins = 10; 

//Symbol_X
var SymbolXYGroup = ColumnPanel.add("group", undefined, {name: "SymbolXYGroup"}); 
    SymbolXYGroup.orientation = "row"; 
    SymbolXYGroup.alignChildren = ["left","center"]; 
    SymbolXYGroup.spacing = 10; 
    SymbolXYGroup.margins = 0; 
//
var Symbol_X_Panel = SymbolXYGroup.add("panel", undefined, undefined, {name: "Symbol_X_Panel"}); 
    Symbol_X_Panel.text = "Symbol_X"; 
    Symbol_X_Panel.orientation = "column"; 
    Symbol_X_Panel.alignChildren = ["center","center"]; 
    Symbol_X_Panel.spacing = 10; 
    Symbol_X_Panel.margins = 10; 

var Symbol_X_Text = Symbol_X_Panel.add('edittext {justify: "center", properties: {name: "Symbol_X_Text"}}'); 
    Symbol_X_Text.text = "250"; 
    Symbol_X_Text.preferredSize.width = 50; 
    Symbol_X_Text.enabled = false;

//Symbol_Y
var Symbol_Y_Panel = SymbolXYGroup.add("panel", undefined, undefined, {name: "Symbol_Y_Panel"}); 
    Symbol_Y_Panel.text = "Symbol_Y"; 
    Symbol_Y_Panel.orientation = "column"; 
    Symbol_Y_Panel.alignChildren = ["center","center"]; 
    Symbol_Y_Panel.spacing = 10; 
    Symbol_Y_Panel.margins = 10; 

var Symbol_Y_Text = Symbol_Y_Panel.add('edittext {justify: "center", properties: {name: "Symbol_Y_Text"}}'); 
    Symbol_Y_Text.text = "250"; 
    Symbol_Y_Text.preferredSize.width = 50; 
    Symbol_Y_Text.enabled = false;

//Lock_Check
var Lock_Check = SymbolXYGroup.add("checkbox", undefined, undefined, {name: "checkbox1"}); 
    Lock_Check.text = "Locked"; 
    Lock_Check.alignment = ["Center","center"]; 
    Lock_Check.value = true;

//
var ColumnBottomGroup = ColumnPanel.add("group", undefined, {name: "ColumnBottomGroup"}); 
    ColumnBottomGroup.orientation = "row"; 
    ColumnBottomGroup.alignChildren = ["left","center"]; 
    ColumnBottomGroup.spacing = 10; 
    ColumnBottomGroup.margins = 10; 

var edittext1 = ColumnBottomGroup.add('edittext {justify: "center", properties: {name: "edittext1"}}'); 
    edittext1.text = ""; 
    edittext1.preferredSize.width = 120; 

////Symbol_Button
var ColumnButtonGroup = ColumnBottomGroup.add("group", undefined, {name: "ColumnButtonGroup"}); 
    ColumnButtonGroup.orientation = "row"; 
    ColumnButtonGroup.alignChildren = ["center","center"]; 
    ColumnButtonGroup.spacing = 10; 
    ColumnButtonGroup.margins = 0; 

var C_Select_Button = ColumnButtonGroup.add("button", undefined, undefined, {name: "button3"}); 
    C_Select_Button.text = "Select"; 

var C_GOGO_Button = ColumnButtonGroup.add("button", undefined, undefined, {name: "button4"}); 
    C_GOGO_Button.text = "GOGO"; 

var divider2 = Neil.add("panel", undefined, undefined, {name: "divider2"}); 
    divider2.alignment = "fill"; 


//Rolling
var RollingPanel = Neil.add("panel", undefined, undefined, {name: "RollingPanel"}); 
    RollingPanel.text = "Rolling"; 
    RollingPanel.orientation = "column"; 
    RollingPanel.alignChildren = ["center","center"]; 
    RollingPanel.spacing = 10; 
    RollingPanel.margins = 10; 

//Calculate
var CalculateGroup = RollingPanel.add("group", undefined, {name: "CalculateGroup"}); 
    CalculateGroup.orientation = "row"; 
    CalculateGroup.alignChildren = ["center","center"]; 
    CalculateGroup.spacing = 10; 
    CalculateGroup.margins = 0; 

var TextWidth = 40;
var Textheight = 20;

//Speed
var SpeedPanel = CalculateGroup.add("panel", undefined, undefined, {name: "SpeedPanel"}); 
    SpeedPanel.text = "Speed"; 
    SpeedPanel.orientation = "column"; 
    SpeedPanel.alignChildren = ["center","center"]; 
    SpeedPanel.spacing = 10; 
    SpeedPanel.margins = 10; 

var SpeedText = SpeedPanel.add('edittext {justify: "center", properties: {name: "SpeedText"}}'); 
    SpeedText.text = "0.6"; 
    SpeedText.preferredSize.width = TextWidth; 
    SpeedText.preferredSize.height = Textheight;

var statictext1 = CalculateGroup.add("statictext", undefined, undefined, {name: "statictext1"}); 
    statictext1.text = "X"; 
    statictext1.justify = "center"; 

//Duration
var DurationPanel = CalculateGroup.add("panel", undefined, undefined, {name: "DurationPanel"}); 
    DurationPanel.text = "Duration"; 
    DurationPanel.orientation = "column"; 
    DurationPanel.alignChildren = ["center","center"]; 
    DurationPanel.spacing = 10; 
    DurationPanel.margins = 10; 

var DurationText = DurationPanel.add('edittext {justify: "center", properties: {name: "DurationText"}}'); 
    DurationText.text = "40"; 
    DurationText.preferredSize.width = TextWidth; 
    DurationText.preferredSize.height = Textheight;

var statictext2 = CalculateGroup.add("statictext", undefined, undefined, {name: "statictext2"}); 
    statictext2.text = "="; 
    statictext2.justify = "center"; 

//Distance
var DistancePanel = CalculateGroup.add("panel", undefined, undefined, {name: "DistancePanel"}); 
    DistancePanel.text = "Distance"; 
    DistancePanel.orientation = "column"; 
    DistancePanel.alignChildren = ["center","center"]; 
    DistancePanel.spacing = 10; 
    DistancePanel.margins = 10; 

var DistanceText = DistancePanel.add('edittext {justify: "center", properties: {name: "DistanceText"}}'); 
    DistanceText.text = SpeedText.text*DurationText.text; 
    DistanceText.preferredSize.width = TextWidth; 
    DistanceText.preferredSize.height = Textheight;

//
var divider1 = RollingPanel.add("panel", undefined, undefined, {name: "divider1"}); 
    divider1.alignment = "fill"; 

var BottomGroup = RollingPanel.add("group", undefined, {name: "BottomGroup"}); 
    BottomGroup.orientation = "row"; 
    BottomGroup.alignChildren = ["center","center"]; 
    BottomGroup.spacing = 10; 
    BottomGroup.margins = 0; 

//OffSetKey
var OffSetKeyPanel = BottomGroup.add("panel", undefined, undefined, {name: "KeyOffSetPanel"}); 
    OffSetKeyPanel.text = "OffSetKey"; 
    OffSetKeyPanel.orientation = "column"; 
    OffSetKeyPanel.alignChildren = ["center","center"]; 
    OffSetKeyPanel.spacing = 10; 
    OffSetKeyPanel.margins = 10; 

var OffSetKeyText = OffSetKeyPanel.add('edittext {justify: "center", properties: {name: "KeyOffSetText"}}'); 
    OffSetKeyText.text = "5"; 
    OffSetKeyText.preferredSize.width = TextWidth;
    OffSetKeyText.preferredSize.height = Textheight;

//Rolling_Button
var Rolling_ButtonGroup = BottomGroup.add("group", undefined, {name: "group1"}); 
    Rolling_ButtonGroup.orientation = "row"; 
    Rolling_ButtonGroup.alignChildren = ["center","center"]; 
    Rolling_ButtonGroup.spacing = 10; 
    Rolling_ButtonGroup.margins = 0; 

var R_Calculate_Button = Rolling_ButtonGroup.add("button", undefined, undefined, {name: "button1"}); 
    R_Calculate_Button.text = "Calculate"; 

var R_GOGO_Button = Rolling_ButtonGroup.add("button", undefined, undefined, {name: "button2"}); 
    R_GOGO_Button.text = "GOGO"; 

//
    DurationText.onChange = UpdateValues;
    SpeedText.onChange = UpdateValues;
    DistanceText.onChange = UpdateValues;
;

Neil.layout.layout(true);
Neil.layout.resize();
Neil.onResizing = Neil.onResize = function () { this.layout.resize(); }

if ( Neil instanceof Window ) Neil.show();

var SymbolFiles;

if(app.project.activeItem){
var frameRate = app.project.activeItem.frameRate;
}

C_Select_Button.onClick = function(){
    SelectSymbol();
}

C_GOGO_Button.onClick = function(){
    if (app.project.activeItem instanceof CompItem){
        if(SymbolFiles){
            app.project.save();
            var X = parseFloat(Symbol_X_Text.text);
            var Y = parseFloat(Symbol_Y_Text.text);
                C_GOGO(SymbolFiles,X,Y);
                SymbolFiles = null;
                edittext1.text = "Marry Christmas!";
        }
        }else{
            alert("Open a Comp!");
    }
}

Lock_Check.onClick = function(){
    if(!Lock_Check.value){
        Symbol_X_Text.enabled = true;
        Symbol_Y_Text.enabled = true;
    }else{
        Symbol_X_Text.enabled = false;
        Symbol_Y_Text.enabled = false;
    }
}

//ButtonClick
R_Calculate_Button.onClick = function(){
    CCalculate();  
}

R_GOGO_Button.onClick = function(){
        R_GOGO();
}

//Function Rolling
function CCalculate(){
    var selectedLayer = app.project.activeItem.selectedLayers[0];
        if (selectedLayer) {
        var selectedProperties = selectedLayer.selectedProperties; // 獲取所選屬性
            if (selectedProperties.length > 0) {
                var property = selectedProperties[0];
                var selectedKeys = property.selectedKeys; // 獲取所選關鍵幀
                if (selectedKeys.length === 2) {
                var keyframeValue1 = property.keyValue(selectedKeys[0]); // 第一個關鍵幀的值
                var keyframeValue2 = property.keyValue(selectedKeys[1]); // 第二個關鍵幀的值
                var Distance = keyframeValue2 - keyframeValue1;
                var Duration = frameRate*(property.keyTime(selectedKeys[1]) - property.keyTime(selectedKeys[0]));
                var Speed = Distance / Duration;
                DistanceText.text = Math.round(Distance);
                DurationText.text = Duration;
                SpeedText.text = Speed.toFixed(2);
          }
        }
      }
}   

function UpdateValues() {
    var DDistance = parseFloat(DistanceText.text);
    var DDuration = parseFloat(DurationText.text);
    var SSpeed = parseFloat(SpeedText.text);

    if(DDuration && SSpeed){
        DDistance = Math.round((DDuration * SSpeed)*100)/100;
        DistanceText.text = Math.round(DDistance);
    }else if(DDistance && SSpeed){
        DDuration = Math.round((DDistance / SSpeed)*100)/100;
        DurationText.text = DDuration;
    }else if(DDistance && DDuration){
        SSpeed = Math.round((DDistance / DDuration)*100)/100;
        SpeedText.text = SSpeed.toFixed(2);
    }

}

function frameRate2Time(framee){
    return framee/frameRate;  
}

function R_GOGO(){
    var selectedLayer = app.project.activeItem.selectedLayers[0];
    if(selectedLayer){
        var selectedProperties = selectedLayer.selectedProperties;
        var CurrentTime = app.project.activeItem.time;
        var GODuration = parseFloat(DurationText.text);
        var GOSpeed = parseFloat(SpeedText.text);
        var OffsetKey = parseFloat(OffSetKeyText.text);
        if(selectedProperties[0].name.indexOf("1") !== -1){
                var V = 0;
            }else{
                var V = 1;
            }
        for(var i=0; i<selectedProperties.length; i++){
            var key = new KeyframeEase(0.33, 33);  
            var GODuration_Offset = OffsetKey*(parseFloat(i+V));
            var GODuration_Offset_Time = frameRate2Time(GODuration_Offset);
            var FinalDistance = Math.round(GOSpeed*(GODuration+GODuration_Offset)) 
            var selectedPropertiesValue = selectedProperties[i].value
            selectedProperties[i].setValueAtTime(CurrentTime, selectedPropertiesValue);
            selectedProperties[i].setValueAtTime(CurrentTime + frameRate2Time(GODuration) + GODuration_Offset_Time, selectedPropertiesValue + FinalDistance);
            var KeyIndex = selectedProperties[i].nearestKeyIndex(CurrentTime);
            selectedProperties[i].setTemporalEaseAtKey(KeyIndex, [key],[key]);
            selectedProperties[i].setInterpolationTypeAtKey(KeyIndex,KeyframeInterpolationType.LINEAR,KeyframeInterpolationType.BEZIER);

            }
    }
}

//Function 2Column
function SelectSymbol(){
    var filesToImport = File.openDialog("Select Symbols to import", "All files:*.*", true);
        SymbolFiles = filesToImport; 
    if(filesToImport){
        edittext1.text = "Selected " + filesToImport.length + " Symbols!";
        if (!Lock_Check.value){
            var maxWidth = 0;
            var maxHeight = 0;
            for (var i = 0; i < filesToImport.length; i++) {
                var fileSize = new File(filesToImport[i]);
                var importOptions = new ImportOptions(fileSize);
                var footageItemx = app.project.importFile(importOptions);
        if (footageItemx instanceof FootageItem) {
            var width = footageItemx.width;
            var height = footageItemx.height;
            if (width >= maxWidth && height >= maxHeight) {
                maxWidth = width;
                maxHeight = height;
                footageItemx.remove();
            } else {
                footageItemx.remove();
            }
            }
            }
            Symbol_X_Text.text = maxWidth;
            Symbol_Y_Text.text = maxHeight;
        }
        return SymbolFiles;
    }
}

function C_GOGO(filesToImport,X,Y){
    var CurComp = app.project.activeItem;
    // Check activeItem
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
    var SquareSize_X = X;
    var SquareSize_Y = Y;
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

