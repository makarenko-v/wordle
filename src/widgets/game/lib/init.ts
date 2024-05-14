import { Letter, Word } from "@/entities/guess/model/types";
import { NUM_OF_GUESSES_ALLOWED, WORD_LENGTH } from "@/shared/config/constants";

export function initGuesses(): Word[] {
  return Array.from({ length: NUM_OF_GUESSES_ALLOWED }, () =>
    Array.from(
      { length: WORD_LENGTH },
      (): Letter => ({ letter: "", status: "empty" }),
    ),
  );
}
