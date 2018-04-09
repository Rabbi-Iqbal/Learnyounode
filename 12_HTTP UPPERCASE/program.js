
var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {

 if (req.method == 'POST'){

   req.pipe(map(function (data) {

     data = data.toString().toUpperCase();
     return data;

   })).pipe(res)
 }

 else
   return res.end('Only POST requests allowed!\n')


})

server.listen(process.argv[2])
