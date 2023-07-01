const fs = require("fs");
const file = require("../util/file");

let lines = file.readFile("./input/day6.txt");

function run() {
  let endOfCodePartOne = getEndOfCode(lines[0], 4);
  console.log(
    "The end of the code for part one is at position: " + endOfCodePartOne
  );
  let endOfCodePartTwo = getEndOfCode(lines[0], 14);
  console.log(
    "The end of the code for part two is at position: " + endOfCodePartTwo
  );
}

function getEndOfCode(line, number) {
  let windowChars = new Set();
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < line.length; windowEnd++) {
    // If the character is already in the window, move the start of the window
    while (windowChars.has(line[windowEnd])) {
      if (windowChars.has(line[windowStart])) {
        windowChars.delete(line[windowStart]);
        windowStart++;
      }
    }

    // Add the character to the set
    windowChars.add(line[windowEnd]);

    // Check if the length of the window is 14
    if (windowChars.size === number) {
      return windowEnd + 1;
    }
  }

  return 0; // If 14 consecutive unique characters are not found, return 0.
}

module.exports = { run, getEndOfCode };
