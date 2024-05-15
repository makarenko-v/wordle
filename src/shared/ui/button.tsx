import React from "react";

export function Button({
  children,
  onClick,
}: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className="text-center w-full py-2 sm:py-4 uppercase rounded-md font-bold bg-slate-500 text-white text-2xl"
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
