var net = require('net');
var date = new Date();


function addZero(a) {
  if(a<10)
    return '0'+a;
    else
      return a;
}

var server = net.createServer(function(socket){
  var date = new Date();
  var str = date.getFullYear() + '-' + addZero(date.getMonth() + 1) + '-' + addZero(date.getDate()) + ' ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + '\n';
    socket.end(str);
});
server.listen(process.argv[2]);
