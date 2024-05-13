export type Status = "incorrect" | "correct" | "misplaced" | "empty";

export interface Letter {
  letter: string;
  status: Status;
}

export type Word = Letter[];
