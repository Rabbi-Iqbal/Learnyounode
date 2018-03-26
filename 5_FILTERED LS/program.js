
var fs = require('fs');
var dirName = process.argv[2];
var fileExt = process.argv[3];

fs.readdir(dirName, function(err, list){
  if (err) {
        return console.log(err)
      }
  else {
    for (var i = 0; i < list.length; i++) {
      var a = list[i].split(".");
      if(a[1]==fileExt)
        console.log(list[i]);
    }
  }
})
