const fs = require('fs');
const textutils = require('../util/text')

function run() {
    try {
        const lines = readFile('./input/day1.txt');
        const ElfTotals = createElfTotals(lines);
        partOne(ElfTotals);
        partTwo(ElfTotals);
        } catch (err) {
        console.error(err);
    }
}


function readFile(inputPath){
    try {
        const data = fs.readFileSync(inputPath, 'utf8');
        return data.split('\n');
    } catch (err) {
        console.error(err);
    }
}

function createElfTotals(lines){
    let ElfTotals = [];
    let count = 0;

    for (let line of lines){
        if (textutils.isWhitespace(line)) {
            ElfTotals.push(count);
            count = 0;
        } else {
            count += parseInt(line);
        }            
    }
    ElfTotals.push(count); // Catch the final ElfTotal
    return ElfTotals.sort((a, b) => (b - a));
}


function partOne(ElfTotals){
    console.log(`The Elf with the most calories had: ${ElfTotals[0]} calories.`);
}

function partTwo(ElfTotals){
    const topThree = ElfTotals[0] + ElfTotals[1] + ElfTotals[2];
    console.log(`The top three Elf's had: ${topThree} calories.`);
}


module.exports = { run };