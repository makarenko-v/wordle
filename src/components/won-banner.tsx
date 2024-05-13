import { Banner } from "./banner";
import { Game } from "../types";

interface WonBannerProps {
  tookGuesses: number;
}

export function WonBanner({ tookGuesses }: WonBannerProps) {
  return (
    <Banner status={Game.WON}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {tookGuesses} {tookGuesses === 1 ? "guess" : "guesses"}.
        </strong>
      </p>
    </Banner>
  );
}
