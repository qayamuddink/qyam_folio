"use client";
import React from "react";
import { motion } from "framer-motion";
import { ThemeProps } from "@/lib/types";

const Logo = ({ isDarkMode }: ThemeProps) => (
  <motion.div
    className="relative w-28 sm:w-36 md:w-44 h-28 sm:h-36 md:h-44 mx-auto"
    whileHover={{
      scale: 1.05,
      rotate: 50,
      boxShadow: isDarkMode
        ? "0 25px 50px -12px rgba(168, 85, 247, 0.5)"
        : "0 25px 50px -12px rgba(59, 130, 246, 0.5)",
    }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="100%"
      height="100%"
      aria-labelledby="logoTitle"
      role="img"
    >
      <title id="logoTitle">Qayamuddin Khan Logo</title>
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#6366f1", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#8b5cf6", stopOpacity: 1 }}
          />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#06b6d4", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#3b82f6", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <circle
        cx="100"
        cy="100"
        r="95"
        fill={isDarkMode ? "#1e293b" : "#e2e8f0"}
        opacity="0.9"
      />
      <g transform="translate(100, 100)">
        <path
          d="M -45 -50 L -55 -50 L -55 50 L -45 50 L -45 40 L -50 40 L -50 -40 L -45 -40 Z"
          fill="url(#grad1)"
          opacity="0.9"
        />
        <path
          d="M 45 -50 L 55 -50 L 55 50 L 45 50 L 45 40 L 50 40 L 50 -40 L 45 -40 Z"
          fill="url(#grad1)"
          opacity="0.9"
        />
        <rect
          x="-3"
          y="-55"
          width="6"
          height="110"
          fill="url(#grad2)"
          transform="rotate(-15)"
        />
        <circle cx="-25" cy="0" r="4" fill="#06b6d4" opacity="0.8" />
        <circle cx="25" cy="0" r="4" fill="#06b6d4" opacity="0.8" />
        <circle cx="0" cy="-30" r="3" fill="#8b5cf6" opacity="0.6" />
        <circle cx="0" cy="30" r="3" fill="#8b5cf6" opacity="0.6" />
      </g>
      <circle
        cx="100"
        cy="100"
        r="95"
        fill="none"
        stroke="url(#grad2)"
        strokeWidth="2"
        opacity={isDarkMode ? "0.3" : "0.5"}
      />
    </svg>
  </motion.div>
);

export default Logo;
