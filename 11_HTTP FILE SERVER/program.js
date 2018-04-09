
var http = require('http')
var fs = require('fs')

// port = process.argv[2]
// file location = process.argv[3]


http.createServer(function (req, res) {
  fs.createReadStream(process.argv[3]).pipe(response)
}).listen(process.argv[2], function () {
  console.log('Listening to port'+ ' ' + process.argv[2])
})
