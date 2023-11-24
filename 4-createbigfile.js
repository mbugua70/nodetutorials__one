const { writeFileSync } = require("fs");

for (let i = 0; i < 10000; i++) {
  writeFileSync("./content/bigfile.txt", `Hello node app ${i} \n`, {
    flag: "a",
  });
}
