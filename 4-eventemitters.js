const http = require("http");

const server = http.createServer();

// event listening
// listening to the request event

server.on("request", (req, res) => {
  res.end("Welcome");
});

server.listen(5000);
