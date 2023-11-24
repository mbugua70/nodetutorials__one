const { http } = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello world");
});

server.listen(5001, () => {
  console.log("listening to port : 50001..");
});

// testing http request with a blocking code

const serverTwo = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  }

  if (req.url === "/about") {
    // BLOCKING CODE I.E FOR LOOP
    for (let i = 0; i < 1000; i++) {
      for (let a = 0; a < 1000; a++) {
        console.log(`${i} ${a}`);
      }
    }
    res.end("about page");
  }

  res.end("error page");
});

serverTwo.listen(5002, () => {
  console.log("Listening to port 5002: ...");
});
