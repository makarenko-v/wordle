import { Status, Word } from "../types";

interface GuessesProps {
  guesses: Word[];
}

const styles: Record<Status, string> = {
  empty: "border-slate-500",
  misplaced: "bg-orange-500 border-orange-500",
  correct: "bg-emerald-800 border-emerald-800",
  incorrect: "bg-neutral-800 border-neutral-800",
};

export function Guesses({ guesses }: GuessesProps) {
  return (
    <div className="flex flex-col gap-2.5 text-xl flex-1">
      {guesses.map((guess) => (
        <div className="flex justify-between">
          {guess.map(({ letter, status }) => (
            <span
              className={`h-20 w-20 border-2 flex items-center justify-center font-bold text-3xl text-white ${styles[status]}`}
            >
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
