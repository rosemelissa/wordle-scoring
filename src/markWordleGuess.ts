import checkForFullMatches from "./checkForFullMatches";
import checkForHalfMatches from "./checkForHalfMatches";
import { IMarkedGuess, IGuess } from "./types";

export default function markWordleGuess(
  guess: string,
  hiddenTarget: string,
): IMarkedGuess {
  let outputArray: IMarkedGuess = [];
  for (const guessLetter of guess) {
    const guessLetterObject: IGuess = { letter: guessLetter, score: "noMatch" };
    outputArray.push(guessLetterObject);
  }
  let modifiedTarget: string = hiddenTarget;
  [modifiedTarget, outputArray] = checkForFullMatches(
    modifiedTarget,
    outputArray,
  );
  [modifiedTarget, outputArray] = checkForHalfMatches(
    modifiedTarget,
    outputArray,
  );
  return outputArray;
}

console.log(markWordleGuess("HOUSE", "MOUSE"));
console.log(markWordleGuess("LEVEL", "APPLE"));
console.log(markWordleGuess("ABCDE", "ACDDF"));

/*
PSEUDOCODE:
create empty IMarkedGuess array called OUTPUTARRAY
put each letter from our guess into OUTPUTARRAY, each with value 'noMatch'
make copy of HIDDENTARGET string, called MODIFIEDTARGET
for each letter of GUESS
    if letter should get 'fullMatch'
        update value of letter in OUTPUTARRAY to be 'fullMatch'
        replace character in MODIFIEDTARGET with same index of letter, to be '0'
for each IGuess of OUTPUTARRAY
    for each letter in IGuess
        if IGuess[letter] === 'noMatch'
            for each targetLetter of MODIFIEDTARGET
                if letter should get 'halfMatch'
                    update value of letter in OUTPUTARRAY to be 'halfMatch'
                    replace targetletter in MODIFIEDTARGET with same index of letter, to be '0'
return OUTPUTARRAY
*/
