import React from "react";
import { cn } from "@/lib/utils";
import { ThemeProps } from "@/lib/types";


const Footer = ({ isDarkMode }: ThemeProps) => (
  <footer
    className={cn(
      "relative py-8 px-4 border-t",
      isDarkMode ? "border-white/10" : "border-blue-100"
    )}
  >
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p
          className={cn(
            "text-sm font-medium",
            isDarkMode ? "text-gray-500" : "text-gray-600"
          )}
        >
          © 2025 Qayamuddin Khan. Crafted with precision.
        </p>
        <div
          className={cn(
            "flex flex-wrap gap-2 sm:gap-4 text-sm justify-center md:justify-end font-medium",
            isDarkMode ? "text-gray-500" : "text-gray-600"
          )}
        >
          <span>Full Stack Developer</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
