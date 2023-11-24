const { readFile, writeFile } = require("fs");
const utils = require("util");

const readFileOne = utils.promisify(readFile);
const writeFileone = utils.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFileOne("./content/first.txt", "utf8");
    const second = await readFileOne("./content/second.txt", "utf8");
    writeFileone(
      "./content/third.txt",
      `hello trying to create our third file with ${first} ${second}`
    );
  } catch (err) {}
};

start();

// the use of util and promisify
