var selected_layers = app.project.activeItem.selectedLayers; // 定義被選中的圖層

if(selected_layers.length > 0) { //有選到圖層的話
var sliderControlContainer = app.project.activeItem.layers.addNull(); //新增一個Null
sliderControlContainer.name = "Slider Control Container"; //新增的Null命名為Slider Control Container

var sliderControl = sliderControlContainer.Effects.addProperty("ADBE Slider Control"); //在Null上新增Slider Control
sliderControl.name = "Select Layer"; //Slider Control命名為 Select Layer
sliderControl.property("Slider").setValue(1); //Slider Control數值設為1
sliderControl.property("Slider").addToMotionGraphicsTemplateAs(app.project.activeItem, "Select Layer");

var exp = "n = thisComp.layer(\"" + sliderControlContainer.name + "\").effect(\"" + sliderControl.name + "\")(\"Slider\");"; //定義Slider Control在Expression的路徑

for(var i = 0; i < selected_layers.length; i++) { //迴圈 用於編排被選中圖層index
var v = i+1; //迴圈編排的index數值 +1
selected_layers[i].opacity.expression = exp + "\nn == " + v + "? value =100: value =0;" //加入Opacity的Expression
}



} else {
alert("Please select at least 1 layer."); //沒有選中圖層的話跳出警告
}
