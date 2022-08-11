import { IMarkedGuess } from "./types";
import updateModifiedTarget from "./updateModifiedTarget";

export default function checkForHalfMatches(
  modifiedTarget: string,
  outputArray: IMarkedGuess,
): [string, IMarkedGuess] {
  for (const object of outputArray) {
    if (object.score === "noMatch") {
      for (const item of modifiedTarget) {
        if (object.letter === item) {
          object.score = "halfMatch";
          const i = modifiedTarget.indexOf(item);
          modifiedTarget = updateModifiedTarget(modifiedTarget, i);
        }
      }
    }
  }
  return [modifiedTarget, outputArray];
}
