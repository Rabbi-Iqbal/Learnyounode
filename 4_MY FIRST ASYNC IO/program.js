
var fs = require('fs');
var noOfLines = undefined;

function asyRead(callback){
var buf= fs.readFile(process.argv[2], function doneReading(err, buf){

  var str = buf.toString();
  var Lines = str.split("\n");
  noOfLines = Lines.length - 1;
  callback();

});

}

function printNoOfLines(){
  console.log(noOfLines);
}
asyRead(printNoOfLines);
