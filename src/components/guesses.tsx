interface GuessesProps {
  guesses: string[][];
}

export function Guesses({ guesses }: GuessesProps) {
  return (
    <div className="flex flex-col gap-2 text-xl">
      {/* {guesses.map(({ guess }: Guess) => ( */}
      {/*   */}
      {/*    {guess.split("").map((letter) => ( */}
      {/*      <span className="h-20 w-20 border-2 border-slate-500 flex items-center justify-center"> */}
      {/*        {letter} */}
      {/*      </span> */}
      {/*    ))} */}
      {/*  </div> */}
      {/* ))} */}
      {guesses.map((guess) => (
        <div className="flex gap-2">
          {guess.map((letter) => (
            <span className="h-20 w-20 border-2 border-slate-500 flex items-center justify-center">
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
