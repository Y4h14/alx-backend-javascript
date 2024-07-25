#!/usr/bin/node
const http = require('http');

const app = http.createServer();

app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
});

app.listen('1245', 'localhost', () => {
  console.log('listening on port 1245');
});

module.exports = app;
