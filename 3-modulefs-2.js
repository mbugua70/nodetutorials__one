const { readFile, writeFile } = require("fs");

const getData = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
};

// getData("./content/first.txt")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// instead of the code above we will async and await

const start = async () => {
  try {
    const first = await getData("./content/first.txt");
    const second = await getData("./content/second.txt");
    console.log(first, second);
  } catch (err) {
    console.log("this is the error", err);
  }
};

start();
