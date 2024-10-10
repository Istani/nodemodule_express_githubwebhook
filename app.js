var express = require('express');
var app = express();
var server = require("http").createServer(app);

var PORT = 5000;

var GIT_WEBHOOKS = require("@istani/web-hook-github");
app.use('/', GIT_WEBHOOKS);

app.get('*', (req, res) => {
  res.send({ error: 'Wrong URL' });
})

server.listen(PORT, () => console.log("Webinterface running! Port: " + PORT));