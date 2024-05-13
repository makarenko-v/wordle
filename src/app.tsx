import { useState } from "react";
import { GuessForm } from "./components/guess-form";
import { Guesses } from "./components/guesses";
import { NUM_OF_GUESSES_ALLOWED } from "./constants";
import { Header } from "./components/header";
import { checkGuess } from "./helpers";
import { Letter, Word } from "./types";

export function App() {
  const [guesses, setGuesses] = useState<Word[]>(
    Array.from({ length: NUM_OF_GUESSES_ALLOWED }, () =>
      Array.from(
        { length: 5 },
        (): Letter => ({ letter: "", status: "empty" }),
      ),
    ),
  );
  const [currentTry, setCurrentTry] = useState(0);

  function handleGuess(guess: string) {
    const newWord = checkGuess(guess, "WORLD");

    setGuesses((prevGuesses) =>
      prevGuesses.map((word, index) => (index === currentTry ? newWord : word)),
    );

    setCurrentTry((prevTry) => prevTry + 1);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col flex-1 p-10 max-w-lg w-full mx-auto">
        <Guesses guesses={guesses} />
        <GuessForm onGuess={handleGuess} />
      </div>
    </div>
  );
}
