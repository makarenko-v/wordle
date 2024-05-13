export type Status = "incorrect" | "correct" | "misplaced" | "empty";

export interface Letter {
  letter: string;
  status: Status;
}

export type Word = Letter[];

export const Game = {
  WON: "WON",
  LOST: "LOST",
  RUNNING: "RUNNING",
} as const;

export type GameStatus = (typeof Game)[keyof typeof Game];

export type ResultStatus = Exclude<GameStatus, "RUNNING">;
