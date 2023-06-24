const fs = require("fs");

function readFile(inputPath) {
  try {
    const data = fs.readFileSync(inputPath, "utf8");
    return data.split("\n");
  } catch (err) {
    console.error(err);
  }
}

module.exports = { readFile };
