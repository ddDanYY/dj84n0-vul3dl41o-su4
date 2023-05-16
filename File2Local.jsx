// Folder 
var FolderName = "Assets_";

// Create Folder
var assetsFolder = new Folder(app.project.file.parent.fsName + "/" + FolderName);
if(!assetsFolder.exists) {
  assetsFolder.create();
}

// File in project
var projectItems = app.project.items;
var Extension = ["png", "jpg" , "exr" , "gif"];
var SeqText = [];

// Check items and exclude sequence image files with png, jpg, exr, and gif extensions
for(var i = 1; i <= projectItems.length; i++) {
    var item = projectItems[i];
    var fileExtension = item.file.name.split('.').pop();
    var fileLowCaseExten = fileExtension.toLowerCase();

    if (item.mainSource.isStill == false){ 
      if(fileLowCaseExten !== Extension[0] && fileLowCaseExten !== Extension[1] && fileLowCaseExten !== Extension[2] && fileLowCaseExten !== Extension[3]){
        CopyFile(FolderName);
      }else{
        SeqText.push(0)
      }
}else{
  CopyFile(FolderName);
}
}

if(SeqText[0] ==0){
alert("Doesn't Support Image Sequences!");
}


// Copy and replace
function CopyFile(FolderName){
  if(item instanceof FootageItem) {
    // Get filename
    var fileName = item.file.name;
    // Copy File
    var newPath = app.project.file.parent.fsName + "\\" + FolderName + "\\" + fileName;
    if(!File(newPath).exists) {
      item.file.copy(newPath);
    }
    // Set new Path
    item.replace(File(newPath));
}
}


