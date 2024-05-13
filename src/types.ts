export type LetterStatus = "incorrect" | "correct" | "misplaced" | "empty";

export interface Letter {
  letter: string;
  status: LetterStatus;
}

export type Word = Letter[];
