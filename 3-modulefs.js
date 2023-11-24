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

getData("./content/first.txt")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
