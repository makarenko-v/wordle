import { Banner } from "./banner";
import { Game } from "../types";

interface LostBannerProps {
  answer: string;
}

export function LostBanner({ answer }: LostBannerProps) {
  return (
    <Banner status={Game.LOST}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>
      </p>
    </Banner>
  );
}
