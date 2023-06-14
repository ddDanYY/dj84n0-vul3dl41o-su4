var panelGlobal = this;
var win = (panelGlobal instanceof Panel) ? panelGlobal : new Window("palette", undefined, undefined, {resizeable: true}); 
    if ( !(panelGlobal instanceof Panel) ) win.text = "CardsArrangementTool"; 
    win.orientation = "column"; 
    win.alignChildren = ["center","top"]; 
    win.spacing = 0; 
    win.margins = 20; 


// INPUTVALUEGROUP
// ===============
var InputValueGroup = win.add("group", undefined, {name: "InputValueGroup"}); 
    InputValueGroup.orientation = "row"; 
    InputValueGroup.alignChildren = ["left","center"]; 
    InputValueGroup.spacing = 10; 
    InputValueGroup.margins = 0; 

// X_OFFSET
// ========
var X_Offset = InputValueGroup.add("panel", undefined, undefined, {name: "X_Offset"}); 
    X_Offset.text = "X_Offset"; 
    X_Offset.orientation = "row"; 
    X_Offset.alignChildren = ["center","fill"]; 
    X_Offset.spacing = 10; 
    X_Offset.margins = 10; 

var statictext1 = X_Offset.add("statictext", undefined, undefined, {name: "statictext1"}); 
    statictext1.text = "["; 
    statictext1.justify = "center"; 
    statictext1.alignment = ["center","fill"]; 

var X_OffsetValue = X_Offset.add('edittext {justify: "center", properties: {name: "X_OffsetValue"}}'); 
    X_OffsetValue.text = "0"; 
    X_OffsetValue.preferredSize.width = 45; 

// INPUTVALUEGROUP
// ===============
var statictext2 = InputValueGroup.add("statictext", undefined, undefined, {name: "statictext2"}); 
    statictext2.text = ","; 
    statictext2.justify = "center"; 
    statictext2.alignment = ["left","bottom"]; 

// Y_OFFSET
// ========
var Y_Offset = InputValueGroup.add("panel", undefined, undefined, {name: "Y_Offset"}); 
    Y_Offset.text = "Y_Offset"; 
    Y_Offset.orientation = "row"; 
    Y_Offset.alignChildren = ["center","fill"]; 
    Y_Offset.spacing = 10; 
    Y_Offset.margins = 10; 

var Y_OffsetValue = Y_Offset.add('edittext {justify: "center", properties: {name: "Y_OffsetValue"}}'); 
    Y_OffsetValue.text = "0"; 
    Y_OffsetValue.preferredSize.width = 45; 

var statictext3 = Y_Offset.add("statictext", undefined, undefined, {name: "statictext3"}); 
    statictext3.text = "]"; 
    statictext3.justify = "center"; 
    statictext3.alignment = ["center","fill"]; 

// INPUTVALUEGROUP
// ===============
var statictext4 = InputValueGroup.add("statictext", undefined, undefined, {name: "statictext4"}); 
    statictext4.text = "X"; 
    statictext4.justify = "center"; 
    statictext4.alignment = ["left","fill"]; 

// DUPLICATE
// =========
var Duplicate = InputValueGroup.add("panel", undefined, undefined, {name: "Duplicate"}); 
    Duplicate.text = "Duplicate"; 
    Duplicate.orientation = "row"; 
    Duplicate.alignChildren = ["center","fill"]; 
    Duplicate.spacing = 10; 
    Duplicate.margins = 10; 

var DuplicateValue = Duplicate.add('edittext {justify: "center", properties: {name: "DuplicateValue"}}'); 
    DuplicateValue.text = "0"; 
    DuplicateValue.preferredSize.width = 40; 

// BUTTON_GROUP
// ============
var Button_Group = win.add("group", undefined, {name: "Button_Group"}); 
    Button_Group.orientation = "row"; 
    Button_Group.alignChildren = ["center","center"]; 
    Button_Group.spacing = 5; 
    Button_Group.margins = 5; 

// CHECKPANEL
// ==========
var CheckPanel = Button_Group.add("panel", undefined, undefined, {name: "CheckPanel"}); 
    CheckPanel.orientation = "row"; 
    CheckPanel.alignChildren = ["left","top"]; 
    CheckPanel.spacing = 10; 
    CheckPanel.margins = 10; 

// BUTTONPANEL
// ===========
var ButtonPanel = Button_Group.add("panel", undefined, undefined, {name: "ButtonPanel"}); 
    ButtonPanel.orientation = "row"; 
    ButtonPanel.alignChildren = ["left","top"]; 
    ButtonPanel.spacing = 10; 
    ButtonPanel.margins = 10; 

var Calculate_Button = ButtonPanel.add("button", undefined, undefined, {name: "Calculate_Button"}); 
    Calculate_Button.text = "Calculate"; 
    Calculate_Button.alignment = ["center","center"]; 

var GOGO_Button = ButtonPanel.add("button", undefined, undefined, {name: "GOGO_Button"}); 
    GOGO_Button.text = "GOGO"; 
    GOGO_Button.alignment = ["center","center"]; 

var MidNull_Button = ButtonPanel.add("button", undefined, undefined, {name: "MidNull_Button"}); 
    MidNull_Button.text = "MidNull"; 
    MidNull_Button.alignment = ["center","center"]; 

    win.layout.layout(true);
    win.layout.resize();
    win.onResizing = win.onResize = function () { this.layout.resize(); }
    
    if ( win instanceof Window ) win.show();

Calculate_Button.onClick = function(){
    Calculate();
}

GOGO_Button.onClick = function(){
    GOGO();
}

MidNull_Button.onClick = function(){
    MidNull();
}


function Calculate(){
    var SelectedLayer = app.project.activeItem.selectedLayers[0];
    if(SelectedLayer){
    var SelectedLayer_index = SelectedLayer.index;   
        if(SelectedLayer_index+1 <= app.project.activeItem.numLayers){
            var PrevLayer = app.project.activeItem.layer(SelectedLayer_index+1);
            var SelectedLayer_PosX = SelectedLayer.transform.position.value[0];
            var SelectedLayer_PosY = SelectedLayer.transform.position.value[1];
            var PrevLayer_PosX = PrevLayer.transform.position.value[0];
            var PrevLayer_PosY = PrevLayer.transform.position.value[1];
            X_OffsetValue.text = SelectedLayer_PosX - PrevLayer_PosX;
            Y_OffsetValue.text = SelectedLayer_PosY - PrevLayer_PosY;
        }
    }
}

function MidNull(){
    var Selected_layers = app.project.activeItem.selectedLayers; 
    if(Selected_layers.length > 0) {
        var null_object = app.project.activeItem.layers.addNull();
            null_object.name = "Mid_Point";
        var posX = 0;
        var posY = 0;
            for(var i = 0; i < Selected_layers.length; i++) {
            posX += Selected_layers[i].transform.position.value[0];
            posY += Selected_layers[i].transform.position.value[1];
            }
        var mid_point = [posX/Selected_layers.length, posY/Selected_layers.length];
            null_object.transform.position.setValue(mid_point);
            for(var j = 0; j < Selected_layers.length; j++){
                Selected_layers[j].parent = null_object;
            }
    }
}

function GOGO(){
var SelectedLayer = app.project.activeItem.selectedLayers[0]; 
    if(SelectedLayer){
        for(var i = DuplicateValue.text; i > 0 ; i--) { 
            var DuplicatLayer = SelectedLayer.duplicate();
            var x = DuplicatLayer.transform.position.value[0]
            var y = DuplicatLayer.transform.position.value[1]
            DuplicatLayer.position.setValue([x+i*X_OffsetValue.text, y+i*Y_OffsetValue.text]);  
            }
    }
}


