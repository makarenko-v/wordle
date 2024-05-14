import { Word } from "@/entities/guess/model/types";
import { Guess } from "@/entities/guess/ui/guess";

interface GuessesProps {
  guesses: Word[];
}

export function Guesses({ guesses }: GuessesProps) {
  return (
    <div className="flex flex-col gap-2.5 text-xl flex-1">
      {guesses.map((guess, index) => (
        <Guess guess={guess} key={index} />
      ))}
    </div>
  );
}
