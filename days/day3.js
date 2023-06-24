const fs = require('fs');
const file = require('../util/file');

const LetterMap = {};

function run() {

    try {
        const lines = file.readFile('./input/day3.txt');
        // Make sure there are some lines
        if (lines == null) {
            throw new Error('No lines found in file');
        }
        BuildLetterMap();
        console.log(`The total score for part one is: ${runGamePartOne(lines)}`);


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

function calcScore(type) {
    try {
        return LetterMap[type];
    } catch (err) { 
        console.error(err);
    }
}

function findCommonItem(rucksackleft, rucksackright) {
    rucksackleft = [...rucksackleft].filter(x => rucksackright.has(x));
    return rucksackleft[0];
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

