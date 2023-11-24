const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // const text = fs.readFileSync("./content/bigfile.txt", "utf8");
  const fileStream = fs.createReadStream("./content/bigfile.txt", "utf8");
  fileStream.on("open", () => {
    fileStream.pipe(res);
  });
  fileStream.on("error", (err) => {
    res.end(err);
  });
  // res.end(text);
});

server.listen(5005);

// pipe method is used to push from the read stream to the write method.
