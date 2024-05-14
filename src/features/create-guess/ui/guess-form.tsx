import React, { useState } from "react";
import { validateGuess } from "@/features/create-guess/lib/validate-guess.ts";
import { ANSWER_ERROR } from "@/shared/lib/errors.ts";

interface GuessFormProps {
  onGuess: (guess: string) => void;
}

export function GuessForm({ onGuess }: GuessFormProps) {
  const [guess, setGuess] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setGuess(e.target.value.toUpperCase());
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
    <form onSubmit={handleGuess} className="flex-1 pb-10">
      <label className="block text-lg" htmlFor="guess">
        Enter guess:
      </label>
      <div className="w-full h-10">
        <input
          className={`w-full border-2 ${error ? "border-red-500" : "border-slate-500"} p-2 rounded-md text-xl focus:ring-2 ${error ? "focus:ring-red-500" : "focus:ring-black"}  focus:ring-offset-1 focus-visible:outline-none`}
          id="guess"
          type="text"
          value={guess}
          onChange={handleInput}
          // pattern="[A-Z]{5}"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    </form>
  );
}
