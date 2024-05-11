import { useState } from "react";
import { GuessForm } from "./components/guess-form";
import { Guess } from "./types";

export function App() {
  const [guesses, setGuesses] = useState<Guess[]>([]);

  function handleGuess(guess: Guess) {
    setGuesses((prevGuesses) => [...prevGuesses, guess]);
  }

  return (
    <div className="flex flex-col min-h-screen max-w-56 mx-auto py-10">
      <ul className="flex-1">
        {guesses.map(({ guess }) => (
          <li key={guess}>{guess}</li>
        ))}
      </ul>
      <GuessForm onGuess={handleGuess} />
    </div>
  );
}
