import { useState } from "react";
import { GuessForm } from "./components/guess-form";
import { Guess } from "./types";
import { Guesses } from "./components/guesses";

export function App() {
  const [guesses, setGuesses] = useState<Guess[]>([]);

  function handleGuess(guess: Guess) {
    setGuesses((prevGuesses) => [...prevGuesses, guess]);
  }

  return (
    <div className="flex flex-col min-h-screen max-w-xl mx-auto py-10">
      <Guesses guesses={guesses} />
      <GuessForm onGuess={handleGuess} />
    </div>
  );
}
