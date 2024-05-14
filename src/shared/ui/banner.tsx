import React from "react";
import { Status, ResultStatus } from "../lib/game-status";

interface BannerProps {
  status: ResultStatus;
}

const styles: Record<ResultStatus, string> = {
  [Status.WON]: "bg-emerald-800",
  [Status.LOST]: "bg-red-600",
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
