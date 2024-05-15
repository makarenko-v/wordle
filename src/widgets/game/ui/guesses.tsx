import { Word } from "@/entities/guess/model/types";
import { Guess } from "@/entities/guess/ui/guess";

interface GuessesProps {
  guesses: Word[];
}

export function Guesses({ guesses }: GuessesProps) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
      {guesses.map((guess, index) => (
        <Guess guess={guess} key={index} />
      ))}
    </div>
  );
}
