import { useState } from "react";
import { GuessForm } from "./components/guess-form";
import { Guesses } from "./components/guesses";
import { NUM_OF_GUESSES_ALLOWED } from "./constants";

export function App() {
  const [guesses, setGuesses] = useState<string[][]>(
    Array.from({ length: NUM_OF_GUESSES_ALLOWED }, () =>
      Array.from({ length: 5 }, () => ""),
    ),
  );
  const [currentTry, setCurrentTry] = useState(0);

  function handleGuess(guess: string) {
    setGuesses((prevGuesses) =>
      prevGuesses.map((word, index) =>
        index === currentTry ? guess.split("") : word,
      ),
    );
    setCurrentTry((prevTry) => prevTry + 1);
  }

  return (
    <div className="flex flex-col min-h-screen max-w-xl mx-auto py-10">
      <Guesses guesses={guesses} />
      <GuessForm onGuess={handleGuess} />
    </div>
  );
}
