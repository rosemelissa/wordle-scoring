import { IMarkedGuess } from "./types";
import updateModifiedTarget from "./updateModifiedTarget";

export default function checkForFullMatches(
  modifiedTarget: string,
  outputArray: IMarkedGuess,
): [string, IMarkedGuess] {
  for (let i = 0; i < 5; i++) {
    if (outputArray[i].letter === modifiedTarget.charAt(i)) {
      outputArray[i].score = "fullMatch";
      modifiedTarget = updateModifiedTarget(modifiedTarget, i);
    }
  }
  return [modifiedTarget, outputArray];
}
