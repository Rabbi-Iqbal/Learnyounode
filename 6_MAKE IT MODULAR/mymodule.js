
var fs = require('fs');
module.exports = function (dirName, fileExt, callback) {

  fs.readdir(dirName, function(err, list){
    if (err) {
          return callback(err);
        }

      list = list.filter(function (file) {
        var a = file.split(".");
				return a[1] === fileExt;
			})
      callback(null, list)
  })
}
