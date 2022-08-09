export type IMarkedGuess = IGuess[];
export type IScore = "noMatch" | "halfMatch" | "fullMatch";

export interface IGuess {
  letter: string;
  score: IScore;
}
