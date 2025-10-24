import React from "react";
import StarsBackground from "./StarBackground";
import ShootingStars from "./ShootingStars";
import { ThemeProps } from "@/lib/types";


const AnimatedBackground = ({ isDarkMode }: ThemeProps) => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    {isDarkMode ? (
      <>
        <StarsBackground />
        <ShootingStars />
      </>
    ) : (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-gray-50 to-cyan-50/50" />
    )}
  </div>
);

export default AnimatedBackground;
