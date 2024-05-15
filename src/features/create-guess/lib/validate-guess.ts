import { ANSWER_REGEX } from "@/shared/lib/regex";

export function validateGuess(guess: string) {
  const matchArr = guess.match(ANSWER_REGEX);

  if (!matchArr) {
    return false;
  }

  return matchArr[0] === matchArr.input;
}
