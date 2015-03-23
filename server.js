var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 8080, host: 'localhost'});

wss.on('connection', function(ws) {
  ws.on('message', function(message) {
    wss.clients.forEach(function (client) {
      if(ws.upgradeReq.url === client.upgradeReq.url && ws !== client){
        client.send(message);
      }
    });
  });
});