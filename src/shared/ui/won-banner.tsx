import { Banner } from "./banner";
import { Status } from "../lib/game-status";

interface WonBannerProps {
  tookGuesses: number;
}

export function WonBanner({ tookGuesses }: WonBannerProps) {
  return (
    <Banner status={Status.WON}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {tookGuesses} {tookGuesses === 1 ? "guess" : "guesses"}.
        </strong>
      </p>
    </Banner>
  );
}
