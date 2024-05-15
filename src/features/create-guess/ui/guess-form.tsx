import React, { useState } from "react";
import { validateGuess } from "@/features/create-guess/lib/validate-guess";
import { ANSWER_ERROR } from "@/shared/lib/errors";

interface GuessFormProps {
  onGuess: (guess: string) => void;
}

export function GuessForm({ onGuess }: GuessFormProps) {
  const [guess, setGuess] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setGuess(e.target.value.trim().toUpperCase());
  }

  function handleGuess(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const isValid = validateGuess(guess);

    if (!isValid) {
      setError(ANSWER_ERROR);

      return;
    }

    onGuess(guess);
    setGuess("");
    setError(null);
  }

  return (
    <form onSubmit={handleGuess}>
      <label className="block text-lg" htmlFor="guess">
        Enter guess:
      </label>
      <div className="h-10">
        <input
          className={`w-full border-2 ${error ? "border-red-500" : "border-slate-500"} p-2 rounded-md text-xl focus:ring-2 ${error ? "focus:ring-red-500" : "focus:ring-black"}  focus:ring-offset-1 focus-visible:outline-none`}
          id="guess"
          type="text"
          value={guess}
          onChange={handleInput}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    </form>
  );
}
