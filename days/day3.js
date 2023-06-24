const fs = require("fs");
const file = require("../util/file");

const LetterMap = {};

function run() {
  try {
    const lines = file.readFile("./input/day3.txt");
    // Make sure there are some lines
    if (lines == null) {
      throw new Error("No lines found in file");
    }
    BuildLetterMap();
    console.log(`The total score for part one is: ${runGamePartOne(lines)}`);
    console.log(`The total score for part two is: ${runGamePartTwo(lines)}`);
  } catch (err) {
    console.error(err);
  }
}

function runGamePartOne(lines) {
  totalScore = 0;
  for (let line of lines) {
    totalScore += calcScore(findCommonItem(...splitRucksack(line)));
  }
  return totalScore;
}

function runGamePartTwo(lines) {
  totalScore = 0;
  for (let i = 0; i < lines.length; i += 3) {
    totalScore += calcScore(findCommonItemsGroup(lines.slice(i, i + 3)));
  }
  return totalScore;
}

function calcScore(type) {
  // Calculates the score for a given letter
  try {
    return LetterMap[type];
  } catch (err) {
    console.error(err);
  }
}

function findCommonItem(rucksackleft, rucksackright) {
  // Locates the first common item in two rucksacks
  rucksackleft = [...rucksackleft].filter((x) => rucksackright.has(x));
  return rucksackleft[0];
}

function stringToSet(str) {
  // Converts a string to a Set
  const set = new Set();
  for (let i = 0; i < str.length; i++) {
    set.add(str[i]);
  }
  return set;
}

function findCommonItemsGroup(rucksacks) {
  if (!Array.isArray(rucksacks) || rucksacks.length < 3) {
    console.Error("Not enough rucksacks to find common items");
    return;
  }

  const rucksets = rucksacks.map(stringToSet);
  let commonItems = rucksets[0];
  commonItems = [...commonItems].filter((x) => rucksets[1].has(x));
  commonItems = [...commonItems].filter((x) => rucksets[2].has(x));
  return commonItems[0];
}

function splitRucksack(rucksack) {
  // Split the rucksack into two equal Sets
  const rucksackleft = new Set();
  const rucksackright = new Set();

  for (let i = 0; i < rucksack.length / 2; i++) {
    rucksackleft.add(rucksack[i]);
  }

  for (let i = rucksack.length / 2; i < rucksack.length; i++) {
    rucksackright.add(rucksack[i]);
  }

  return [rucksackleft, rucksackright];
}

function BuildLetterMap() {
  // This will create a dictionary of letters to numbers for lowercase and uppercase letters.
  // a = 1, b = 2, c = 3, etc.
  for (let i = 0; i < 26; i++) {
    LetterMap[String.fromCharCode(97 + i)] = i + 1;
  }
  for (let i = 0; i < 26; i++) {
    LetterMap[String.fromCharCode(65 + i)] = i + 27;
  }
}

module.exports = { run };
