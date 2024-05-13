export const Status = {
  WON: "WON",
  LOST: "LOST",
  RUNNING: "RUNNING",
} as const;

export type GameStatus = (typeof Status)[keyof typeof Status];

export type ResultStatus = Exclude<GameStatus, "RUNNING">;
