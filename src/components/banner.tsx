import React from "react";
import { Game, ResultStatus } from "../types";

interface BannerProps {
  status: ResultStatus;
}

const styles: Record<ResultStatus, string> = {
  [Game.WON]: "bg-emerald-800",
  [Game.LOST]: "bg-red-600",
};

export function Banner({
  children,
  status,
}: React.PropsWithChildren<BannerProps>) {
  return (
    <div
      className={`absolute bottom-0 rounded-t-md w-full p-6 text-center text-white text-lg animate-slideUp ${styles[status]}`}
    >
      {children}
    </div>
  );
}
