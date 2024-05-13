import { Banner } from "./banner";
import { Status } from "../shared/lib/game-status";

interface LostBannerProps {
  answer: string;
}

export function LostBanner({ answer }: LostBannerProps) {
  return (
    <Banner status={Status.LOST}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>
      </p>
    </Banner>
  );
}
