
var http = require('http')
var url = require('url')


function unixTime (time) {
  return {unixtime: time.getTime()}
}


var parseTime = function (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

var parseQuery = function (url) {
  switch (url.pathname) {
    case '/api/parsetime':
      return parseTime(new Date(url.query.iso))
    case '/api/unixtime':
      return unixTime(new Date(url.query.iso))
    default: return 'please enter a valid endpoint url'
  }
}



http.createServer(function (request, response) {
  if (request.method === 'GET') {
    response.writeHead(200, {'Content-Type': 'application/json'})
    url = url.parse(request.url, true)
    response.end(JSON.stringify(parseQuery(url)))
  } else {
    response.end()
  }
}).listen(+process.argv[2], function () {
  console.log('Server listening to port' + ' ' + process.argv[2])
})
