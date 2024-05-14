import { Word } from "../model/types";
import { styles } from "./styles";

interface GuessProps {
  guess: Word;
}

export function Guess({ guess }: GuessProps) {
  return guess.map(({ letter, status }, index) => (
    <span
      className={`h-20 w-20 border-2 flex items-center justify-center font-bold text-3xl text-white ${styles[status]}`}
      key={index}
    >
      {letter}
    </span>
  ));
}
