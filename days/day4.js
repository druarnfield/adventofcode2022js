const fs = require("fs");
const file = require("../util/file");
let lines = file.readFile("./input/day4.txt");

function run() {
  lines = splitLines(lines);
  console.log(`The total score for part one is: ${partOne()}`);
  console.log(`The total score for part two is: ${partTwo()}`);
}

function partOne() {
  score = 0;
  for (let i = 0; i < lines.length; i++) {
    if (compareSets(convToSet(lines[i][0]), convToSet(lines[i][1]))) {
      score++;
    }
  }
  return score;
}

function partTwo() {
  score = 0;
  for (let i = 0; i < lines.length; i++) {
    if (looseCompareSets(convToSet(lines[i][0]), convToSet(lines[i][1]))) {
      score++;
    }
  }
  return score;
}

function splitLines(lines) {
  for (let i = 0; i < lines.length; i++) {
    lines[i] = lines[i].split(",");
  }
  return lines;
}

function compareSets(set1, set2) {
  if (set1.size <= set2.size) {
    return [...set1].every((value) => set2.has(value));
  } else if (set1.size > set2.size) {
    return [...set2].every((value) => set1.has(value));
  }
}

function looseCompareSets(set1, set2) {
  if (typeof set1 !== "object" || typeof set2 !== "object") {
    throw new TypeError("Input must be a Set");
  }
  if (set1.size <= set2.size) {
    return [...set1].some((value) => set2.has(value));
  } else {
    return [...set2].some((value) => set1.has(value));
  }
}

function convToSet(rangeStr) {
  if (typeof rangeStr !== "string") {
    throw new TypeError("Input must be a string");
  }

  let rangeParts = rangeStr.split("-");

  if (rangeParts.length !== 2) {
    throw new Error('Input should be in the format "start-end"');
  }

  let start = parseInt(rangeParts[0], 10);
  let end = parseInt(rangeParts[1], 10);

  if (isNaN(start) || isNaN(end)) {
    throw new Error("Both start and end should be valid numbers");
  }

  let numberSet = new Set();

  for (let i = start; i <= end; i++) {
    numberSet.add(i);
  }

  return numberSet;
}

module.exports = { run };
