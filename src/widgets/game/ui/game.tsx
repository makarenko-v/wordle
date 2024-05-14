import { useState } from "react";
import { GuessForm } from "@/features/create-guess/ui/guess-form";
import { GameStatus, Status } from "@/shared/lib/game-status";
import { LostBanner } from "@/shared/ui/lost-banner";
import { WonBanner } from "@/shared/ui/won-banner";
import { Word } from "@/entities/guess/model/types";
import { NUM_OF_GUESSES_ALLOWED } from "@/shared/config/constants";
import { initGuesses } from "../lib/init";
import { sample } from "@/shared/lib/utils";
import { WORDS } from "@/shared/lib/data";
import { checkGuess } from "../lib/check-guess";
import { Guesses } from "@/widgets/game/ui/guesses";
import { Button } from "@/shared/ui/button";

export function Game() {
  const [guesses, setGuesses] = useState<Word[]>(initGuesses);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameStatus, setGameStatus] = useState<GameStatus>(Status.RUNNING);
  const [answer, setAnswer] = useState(sample(WORDS));

  const gameOver = gameStatus !== Status.RUNNING;

  function handleGuess(guess: string) {
    const newWord = checkGuess(guess, answer);

    setGuesses((prevGuesses) =>
      prevGuesses.map((word, index) =>
        index === currentIndex ? newWord : word,
      ),
    );

    setCurrentIndex((prevIndex) => prevIndex + 1);

    if (guess === answer) {
      setGameStatus(Status.WON);
    } else if (currentIndex === NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus(Status.LOST);
    }
  }

  function handleReset() {
    setCurrentIndex(0);
    setGuesses(initGuesses);
    setGameStatus(Status.RUNNING);
    setAnswer(sample(WORDS));
  }

  return (
    <div className="flex flex-col flex-1 mt-10 max-w-md w-full mx-auto relative">
      {answer}
      <Guesses guesses={guesses} />
      {gameOver ? (
        <div className="flex-1">
          <Button onClick={handleReset}>Reset</Button>
        </div>
      ) : (
        <GuessForm onGuess={handleGuess} />
      )}
      {gameStatus === Status.LOST && <LostBanner answer={answer} />}
      {gameStatus === Status.WON && <WonBanner tookGuesses={currentIndex} />}
    </div>
  );
}
