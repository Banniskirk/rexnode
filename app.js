const express = require('express');

const app = express();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

var http = require('http');
var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  var message = 'THIS IS A WORKING EXPRESS APP',
    version = 'NodeJS ' + process.versions.node + '\n',
    response = [message, version].join('\n');
  res.end(response);
});
server.listen();
