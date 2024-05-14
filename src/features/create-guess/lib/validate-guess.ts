import { ANSWER_REGEX } from "@/shared/lib/regex";

export function validateGuess(guess: string) {
  return ANSWER_REGEX.test(guess);
}
