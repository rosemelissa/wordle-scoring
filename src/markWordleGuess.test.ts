import markWordleGuess from "./markWordleGuess";

/*
Make sure to codify the above examples (LULLS and STEEL for
     LEVEL, for example, and APPLE for PARTY), as well as 
     other examples of your own design.
*/

test("Correct word gets full score", () => {
  expect(markWordleGuess("LEVEL", "LEVEL")).toStrictEqual([
    { L: 1 },
    { E: 1 },
    { V: 1 },
    { E: 1 },
    { L: 1 },
  ]);
  expect(markWordleGuess("HOUSE", "HOUSE")).toStrictEqual([
    { H: 1 },
    { O: 1 },
    { U: 1 },
    { S: 1 },
    { E: 1 },
  ]);
  expect(markWordleGuess("HOUSE", "AAAAA")).toStrictEqual([
    { H: 0 },
    { O: 0 },
    { U: 0 },
    { S: 0 },
    { E: 0 },
  ]);
});

test("Correct letter in wrong place gets half score", () => {
  expect(markWordleGuess("EEEEL", "LEEEE")).toStrictEqual([
    { E: 0.5 },
    { E: 1 },
    { E: 1 },
    { E: 1 },
    { L: 0.5 },
  ]);
  expect(markWordleGuess("HOUSE", "STUDY")).toStrictEqual([
    { H: 0 },
    { O: 0 },
    { U: 1 },
    { S: 0.5 },
    { E: 0 },
  ]);
});

test("Checks for full scores before half-scores", () => {
  expect(markWordleGuess("LEVEL", "STEAL")).toStrictEqual([
    { L: 0 },
    { E: 0.5 },
    { V: 0 },
    { E: 0 },
    { L: 1 },
  ]);
  expect(markWordleGuess("APPLE", "TUPLE")).toStrictEqual([
    { A: 0 },
    { P: 0 },
    { P: 1 },
    { L: 1 },
    { E: 1 },
  ]);
});

test("Each target letter can only give a score to one guess letter", () => {
  expect(markWordleGuess("LULLS", "LEVEL")).toStrictEqual([
    { L: 1 },
    { U: 0 },
    { L: 0.5 },
    { L: 0 },
    { S: 0 },
  ]);
  expect(markWordleGuess("APPLE", "PARTY")).toStrictEqual([
    { A: 0.5 },
    { P: 0.5 },
    { P: 0 },
    { L: 0 },
    { E: 0 },
  ]);
});
