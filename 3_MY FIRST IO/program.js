

var fs = require('fs');
var buf= fs.readFileSync(process.argv[2]);
var str = buf.toString();
var noOfLines = str.split("\n");
console.log(noOfLines.length - 1);
