import React, { useState } from "react";

interface GuessFormProps {
  onGuess: (guess: string) => void;
}

export function GuessForm({ onGuess }: GuessFormProps) {
  const [guess, setGuess] = useState("");

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setGuess(e.target.value.toUpperCase());
  }

  function handleGuess(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onGuess(guess);
    setGuess("");
  }

  return (
    <form onSubmit={handleGuess} className="flex-1">
      <label className="block text-lg" htmlFor="guess">
        Enter guess:
      </label>
      <input
        className="w-full border-2 border-slate-500 p-2 rounded-md text-xl focus:ring-2 focus:ring-black focus:ring-offset-1 focus-visible:outline-none"
        id="guess"
        type="text"
        value={guess}
        onChange={handleInput}
        pattern="\w{5,5}"
      />
    </form>
  );
}
