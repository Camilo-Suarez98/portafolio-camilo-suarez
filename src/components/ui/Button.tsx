import { Dispatch, SetStateAction } from "react";

interface ButtonProps {
  currentMode: "login" | "register";
  value: "login" | "register";
  setMode: Dispatch<SetStateAction<"login" | "register">>;
  children: React.ReactNode;
}

export function Button({ currentMode, value, setMode, children }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={() => setMode(value)}
      className={`rounded-full px-3 py-1 transition cursor-pointer ${currentMode === value
        ? "bg-white/10 text-white"
        : "hover:text-white"
        }`}
    >
      {children}
    </button>
  );
};
