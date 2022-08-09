import { IMarkedGuess, IGuess } from "./types";

/*
PSEUDOCODE:
create empty IMarkedGuess array called OUTPUTARRAY
put each letter from our guess into OUTPUTARRAY, each with value zero
make copy of HIDDENTARGET string, called MODIFIEDTARGET
for each letter of GUESS
    if letter should get full score
        update value of letter in OUTPUTARRAY to be 1
        replace character in MODIFIEDTARGET with same index of letter, to be '0'
for each IGuess of OUTPUTARRAY
    for each letter in IGuess
        if IGuess[letter] === 0
            for each targetLetter of MODIFIEDTARGET
                if letter should get half score
                    update value of letter in OUTPUTARRAY to be 0.5
                    replace targetletter in MODIFIEDTARGET with same index of letter, to be '0'
return OUTPUTARRAY
*/

export default function markWordleGuess(
  guess: string,
  hiddenTarget: string,
): IMarkedGuess {
  const outputArray: IMarkedGuess = [];
  for (const guessLetter of guess) {
    const guessLetterObject: IGuess = { letter: guessLetter, score: "noMatch" };
    outputArray.push(guessLetterObject);
  }
  let modifiedTarget: string = hiddenTarget;
  for (let i = 0; i < 5; i++) {
    if (outputArray[i].letter === modifiedTarget.charAt(i)) {
      outputArray[i].score = "fullMatch";
      modifiedTarget =
        modifiedTarget.slice(0, i) + "0" + modifiedTarget.slice(i + 1);
    }
  }
  return outputArray;
}

console.log(markWordleGuess("HOUSE", "MOUSE"));
