import { useState } from "react";
import { GuessForm } from "./components/guess-form";
import { Guesses } from "./components/guesses";
import { NUM_OF_GUESSES_ALLOWED } from "./shared/config/constants";
import { Header } from "./components/header";
import { checkGuess, initGuesses } from "./helpers";
import { Word } from "./types";
import { sample } from "./utils";
import { WORDS } from "./data";
import { LostBanner } from "./components/lost-banner";
import { WonBanner } from "./components/won-banner";
import { Status, GameStatus } from "./shared/lib/game-status";

const emptyGuesses = initGuesses();
const answer = sample(WORDS);

console.log(answer);

export function App() {
  const [guesses, setGuesses] = useState<Word[]>(emptyGuesses);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gameStatus, setGameStatus] = useState<GameStatus>(Status.RUNNING);

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col flex-1 mt-10 max-w-md w-full mx-auto relative">
        <Guesses guesses={guesses} />
        <GuessForm onGuess={handleGuess} />
        {gameStatus === Status.LOST && <LostBanner answer={answer} />}
        {gameStatus === Status.WON && <WonBanner tookGuesses={currentIndex} />}
      </div>
    </div>
  );
}
