import { Letter } from "./types";

function getLetterIndexMap(word: string): Record<string, number> {
  return word
    .split("")
    .reduce((acc, letter, index) => ({ ...acc, [letter]: index }), {});
}

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
