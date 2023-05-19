// Folder 
var FolderName = "Assets_";

// Create Folder
var assetsFolder = new Folder(app.project.file.parent.fsName + "/" + FolderName);
if(!assetsFolder.exists) {
  assetsFolder.create();
}

// File in project
var projectItems = app.project.items;
var Extension = ["png", "jpg", "exr", "gif"];
var SeqText = [];


for(var i = 1; i <= projectItems.length; i++) {
    var item = projectItems[i];
    var fileExtension = item.name.split('.').pop();
    var fileLowCaseExten = fileExtension.toLowerCase();
    if (item.duration == 0){ 
        CopyFile(FolderName);
      }else if(item.duration !== 0 && CheckExtension(fileLowCaseExten) == false){
        CopyFile(FolderName);
      }else{
        SeqText.push(0)
      }
    }

if(SeqText.length > 0){
alert("Doesn't Support Image Sequences!");
}

// Check items and exclude sequence image files with png, jpg, exr, and gif extensions
function CheckExtension(fileLowCaseExten){
if(fileLowCaseExten == Extension[0] || fileLowCaseExten == Extension[1] || fileLowCaseExten == Extension[2] || fileLowCaseExten == Extension[3]){
  return true;
}else{
  return false;
}
}

// Copy and replace
function CopyFile(FolderName){
  if(item instanceof FootageItem && item.mainSource instanceof FileSource) {
    // Get filename
    var fileName = item.file.displayName;
    // Copy File
    var newPath = app.project.file.parent.fsName + "\\" + FolderName + "\\" + fileName;
    if(!File(newPath).exists) {
      item.file.copy(newPath);
    }
    // Set new Path
    item.replace(File(newPath));
}
}
