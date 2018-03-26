var mymodule = require('./mymodule.js');
var dirName = process.argv[2];
var fileExt = process.argv[3];

mymodule(dirName, fileExt, function (err, data) {

  if (err)
    return console.error(err)

    data.forEach(function (file) {
      console.log(file)
    })

})
