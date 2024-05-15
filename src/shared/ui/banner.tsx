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
      className={`absolute bottom-0 rounded-t-md w-full p-4 sm:p-6 text-center text-white sm:text-lg animate-slideUp ${styles[status]}`}
    >
      {children}
    </div>
  );
}
