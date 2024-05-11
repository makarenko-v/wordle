import React, { useState } from "react";
import { Guess } from "../types";

export function GuessForm() {
  const [input, setInput] = useState<Guess>({ guess: "" });

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInput({ guess: e.target.value.toUpperCase() });
  }

  function handleGuess(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(input);
  }

  return (
    <form onSubmit={handleGuess}>
      <label className="block text-lg" htmlFor="guess">
        Enter guess:
      </label>
      <input
        className="border-2 border-slate-500 p-2 rounded-md text-xl focus:ring-2 focus:ring-black focus:ring-offset-1 focus-visible:outline-none"
        id="guess"
        type="text"
        value={input.guess}
        onChange={handleInput}
        pattern="\w{5,5}"
      />
    </form>
  );
}
