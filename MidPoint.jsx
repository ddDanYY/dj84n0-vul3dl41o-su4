var selected_layers = app.project.activeItem.selectedLayers;

if(selected_layers.length > 0) {
var posX = 0;
var posY = 0;
for(var i = 0; i < selected_layers.length; i++) {
posX += selected_layers[i].transform.position.value[0];
posY += selected_layers[i].transform.position.value[1];
}

var mid_point = [posX/selected_layers.length, posY/selected_layers.length];
var null_object = app.project.activeItem.layers.addNull();

    null_object.name = "Mid_Point";
    null_object.transform.position.setValue(mid_point);
    
} else {
alert("Please select at least 1 layer.");
}