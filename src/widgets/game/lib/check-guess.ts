import { Letter } from "@/entities/guess/model/types";
import { getLetterIndexMap } from "@/shared/lib/utils";

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
