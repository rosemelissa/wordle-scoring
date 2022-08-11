import markWordleGuess from "./markWordleGuess";

/*
Make sure to codify the above examples (LULLS and STEEL for
     LEVEL, for example, and APPLE for PARTY), as well as 
     other examples of your own design.
*/

test("Correct word gets full score", () => {
  expect(markWordleGuess("LEVEL", "LEVEL")).toStrictEqual([
    { letter: "L", score: "fullMatch" },
    { letter: "E", score: "fullMatch" },
    { letter: "V", score: "fullMatch" },
    { letter: "E", score: "fullMatch" },
    { letter: "L", score: "fullMatch" },
  ]);
  expect(markWordleGuess("HOUSE", "HOUSE")).toStrictEqual([
    { letter: "H", score: "fullMatch" },
    { letter: "O", score: "fullMatch" },
    { letter: "U", score: "fullMatch" },
    { letter: "S", score: "fullMatch" },
    { letter: "E", score: "fullMatch" },
  ]);
  expect(markWordleGuess("HOUSE", "AAAAA")).toStrictEqual([
    { letter: "H", score: "noMatch" },
    { letter: "O", score: "noMatch" },
    { letter: "U", score: "noMatch" },
    { letter: "S", score: "noMatch" },
    { letter: "E", score: "noMatch" },
  ]);
});

test("Correct letter in wrong place gets half score", () => {
  expect(markWordleGuess("EEEEL", "LEEEE")).toStrictEqual([
    { letter: "E", score: "halfMatch" },
    { letter: "E", score: "fullMatch" },
    { letter: "E", score: "fullMatch" },
    { letter: "E", score: "fullMatch" },
    { letter: "L", score: "halfMatch" },
  ]);
  expect(markWordleGuess("HOUSE", "STUDY")).toStrictEqual([
    { letter: "H", score: "noMatch" },
    { letter: "O", score: "noMatch" },
    { letter: "U", score: "fullMatch" },
    { letter: "S", score: "halfMatch" },
    { letter: "E", score: "noMatch" },
  ]);
});

test("Checks for full scores before half-scores", () => {
  expect(markWordleGuess("LEVEL", "STEAL")).toStrictEqual([
    { letter: "L", score: "noMatch" },
    { letter: "E", score: "halfMatch" },
    { letter: "V", score: "noMatch" },
    { letter: "E", score: "noMatch" },
    { letter: "L", score: "fullMatch" },
  ]);
  expect(markWordleGuess("APPLE", "TUPLE")).toStrictEqual([
    { letter: "A", score: "noMatch" },
    { letter: "P", score: "noMatch" },
    { letter: "P", score: "fullMatch" },
    { letter: "L", score: "fullMatch" },
    { letter: "E", score: "fullMatch" },
  ]);
});

test("Each target letter can only give a score to one guess letter", () => {
  expect(markWordleGuess("LULLS", "LEVEL")).toStrictEqual([
    { letter: "L", score: "fullMatch" },
    { letter: "U", score: "noMatch" },
    { letter: "L", score: "halfMatch" },
    { letter: "L", score: "noMatch" },
    { letter: "S", score: "noMatch" },
  ]);
  expect(markWordleGuess("APPLE", "PARTY")).toStrictEqual([
    { letter: "A", score: "halfMatch" },
    { letter: "P", score: "halfMatch" },
    { letter: "P", score: "noMatch" },
    { letter: "L", score: "noMatch" },
    { letter: "E", score: "noMatch" },
  ]);
});
