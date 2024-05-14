import { Word } from "@/entities/guess/model/types";
import { Guess } from "@/entities/guess/ui/guess";

interface GuessesProps {
  guesses: Word[];
}

export function Guesses({ guesses }: GuessesProps) {
  return (
    <div className="flex flex-col text-xl flex-1">
      <div className="flex flex-wrap gap-3">
        {guesses.map((guess, index) => (
          <Guess guess={guess} key={index} />
        ))}
      </div>
    </div>
  );
}
