const fs = require("fs");
const file = require("../util/file");

// Some intuition about rock paper scissors:
// 1 -> 2 : win
// 2 -> 1 : loss
// 1 -> 1 : draw
// 2 -> 2 : draw
// 1 -> 3 : loss
// 3 -> 1 : win
// 2 -> 3 : win
// 3 -> 2 : loss
// 3 -> 3 : draw

// Generalisation:
// if the absolute value of the difference between the two numbers is 0, it's a draw.
// If the absolute value of the difference between the two numbers is 1, the higher number wins.
// If the absolute value of the difference between the two numbers is 2, the lower number wins.

const Opponent = {
  A: 1,
  B: 2,
  C: 3,
};

const Player = {
  X: 1,
  Y: 2,
  Z: 3,
};

const DesiredOutcome = {
  1: function (opponent) {
    switch (opponent) {
      case 3:
      case 2:
        return opponent - 1;
      case 1:
        return 3;
      default:
        return 0;
    }
  },
  2: function (opponent) {
    return opponent;
  },
  3: function (opponent) {
    switch (opponent) {
      case 1:
      case 2:
        return opponent + 1;
      case 3:
        return 1;
      default:
        return 0;
    }
  },
};

function run() {
  try {
    const lines = file.readFile("./input/day2.txt");
    const splitLines = splitLetters(lines);
    const score = runGamePartOne(splitLines);
    console.log(`The total score for part one is: ${score}`);
    const score2 = runGamePartTwo(splitLines);
    console.log(`The total score for part two is: ${score2}`);
  } catch (err) {
    console.error(err);
  }
}

function splitLetters(lines) {
  const tuples = lines.map((line) => {
    const [opponent, player] = line.split(" ");
    return [opponent, player];
  });
  return tuples;
}

function calculateScore(opponent, player) {
  const difference = Math.abs(opponent - player);

  if (difference === 0) {
    return player + 3;
  } else if (difference === 1 && player > opponent) {
    return player + 6;
  } else if (difference === 2 && player < opponent) {
    return player + 6;
  } else {
    return player;
  }
}

function runGamePartOne(matchUps) {
  totalscore = 0;
  matchUps.forEach((matchUp) => {
    const [opponent, player] = matchUp;
    totalscore += calculateScore(Opponent[opponent], Player[player]);
  });
  return totalscore;
}

function runGamePartTwo(matchUps) {
  totalscore = 0;
  matchUps.forEach((matchUp) => {
    const [opponent, player] = matchUp;
    totalscore += calculateScore(
      Opponent[opponent],
      DesiredOutcome[Player[player]](Opponent[opponent])
    );
  });
  return totalscore;
}

module.exports = { run };
