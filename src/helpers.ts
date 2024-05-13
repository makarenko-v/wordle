import { Letter, Word } from "./types";
import { NUM_OF_GUESSES_ALLOWED } from "./shared/config/constants";
import { getLetterIndexMap } from "./shared/lib/utils";

export function checkGuess(guess: string, answer: string): Letter[] {
  const answerMap = getLetterIndexMap(answer);

  return guess.split("").map((letter, currentIndex) => {
    const index = answerMap[letter];

    if (index === undefined) {
      return { letter, status: "incorrect" };
    }

    if (index !== currentIndex) {
      return { letter, status: "misplaced" };
    }

    return { letter, status: "correct" };
  });
}

export function initGuesses(): Word[] {
  return Array.from({ length: NUM_OF_GUESSES_ALLOWED }, () =>
    Array.from({ length: 5 }, (): Letter => ({ letter: "", status: "empty" })),
  );
}
