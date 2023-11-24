const { createReadStream } = require("fs");

const stream = createReadStream("./content/bigfile.txt", {
  // the first buffer will be 90000 kilobtye and then with the reminder
  highWaterMark: 9000,
  encoding: "utf8",
});
// we will be reading the event data.
stream.on("data", (result) => {
  console.log(result);
});

// listening to the error event

stream.on("error", (error) => {
  console.log(error);
});

// the last buffer = reminder
//  highWaterMark = will control the size
// to encode we use = encoded: 'utf8'
