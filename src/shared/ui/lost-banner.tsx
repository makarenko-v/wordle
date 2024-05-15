import { createPortal } from "react-dom";
import { Status } from "../lib/game-status";
import { Banner } from "./banner";

interface LostBannerProps {
  answer: string;
}

export function LostBanner({ answer }: LostBannerProps) {
  return createPortal(
    <Banner status={Status.LOST}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>
      </p>
    </Banner>,
    document.getElementById("banner")!,
  );
}
