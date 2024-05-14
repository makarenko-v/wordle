import { LetterStatus } from "../model/types";

export const styles: Record<LetterStatus, string> = {
  empty: "border-slate-500",
  misplaced: "bg-orange-500 border-orange-500",
  correct: "bg-emerald-800 border-emerald-800",
  incorrect: "bg-neutral-800 border-neutral-800",
};
