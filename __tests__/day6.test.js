const Day6 = require("../days/day6");

const testCases = [
    { line: "mjqjpqmgbljsphdztnvjfqwrcgsmlb", number: 14, expected: 19 },
    { line: "bvwbjplbgvbhsrlpgdmjqwftvncz", number: 14, expected: 23 },
    { line: "nppdvjthqldpwncqszvftbrmjlhg", number: 14, expected: 23 },
    { line: "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", number: 14, expected: 29 },
    { line: "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", number: 14, expected: 26 },
];

const additionalTestCases = [
    { line: "bvwbjplbgvbhsrlpgdmjqwftvncz", number: 4, expected: 5 },
    { line: "nppdvjthqldpwncqszvftbrmjlhg", number: 4, expected: 6 },
    { line: "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", number: 4, expected: 10 },
    { line: "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", number: 4, expected: 11 },
];

testCases.forEach(({ line, number, expected }) => {
    test(`getEndOfCode should return ${expected} for "${line}" with number ${number}`, () => {
        expect(Day6.getEndOfCode(line, number)).toBe(expected);
    });
});

additionalTestCases.forEach(({ line, number, expected }) => {
    test(`getEndOfCode should return ${expected} for "${line}" with number ${number}`, () => {
        expect(Day6.getEndOfCode(line, number)).toBe(expected);
    });
});