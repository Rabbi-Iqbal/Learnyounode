var http = require('http')
var bl = require('bl')


var contents =[];

var count =0;

for (var i = 0; i < 3; i++) {
  var path = process.argv[2+i]
  getContents(path, i)
}


function getContents(path, i){

  http.get(path, function (response) {

    response.pipe(bl(function (err, data) {
      if (err)
      return console.error(err)
      else{
      data = data.toString()
      contents[i]= data;
      count++;
    }
      if(count == 3){

             display ();
             //writing the loop here doest not work

      }
    }))
  })
}

function display () {
  for (var i = 0; i < 3; i++)
    console.log(contents[i])
}
