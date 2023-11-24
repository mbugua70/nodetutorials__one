const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/") {
    res.end("welcome to home page");
  }
  res.end("error page");
});

server.listen(5000);
