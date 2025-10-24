import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getCardBaseClass = (isDarkMode: boolean) =>
  cn(
    "backdrop-blur-xl border rounded-3xl p-6 sm:p-8 transition-all",
    isDarkMode
      ? "bg-white/5 border-white/10 hover:border-white/20"
      : "bg-white border-blue-100 hover:border-blue-200 hover:bg-blue-50/50 shadow-lg hover:shadow-xl"
  );

export const getHoverBoxShadow = (isDarkMode: boolean) =>
  isDarkMode
    ? "0 10px 30px rgba(0,0,0,0.3)"
    : "0 10px 30px rgba(59,130,246,0.2)";
