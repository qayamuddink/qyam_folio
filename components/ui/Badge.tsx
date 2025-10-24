"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";


const Badge = ({
  text,
  variant = "default",
  isDarkMode,
}: {
  text: string;
  variant?: "default" | "colored";
  isDarkMode: boolean;
}) => {
  const baseStyles =
    "px-3 py-1 sm:px-4 sm:py-2 backdrop-blur-sm border rounded-xl text-xs sm:text-sm font-medium transition-all";
  const variantStyles =
    variant === "colored"
      ? "bg-white/5 border-white/10 hover:bg-white/10"
      : isDarkMode
      ? "bg-white/5 border-white/10 hover:bg-white/10"
      : "bg-blue-50 border-blue-200 text-gray-800 hover:border-blue-300 hover:bg-blue-100";

  return (
    <motion.span
      whileHover={{ scale: 1.1, y: -2 }}
      className={cn(baseStyles, variantStyles, "cursor-default")}
    >
      {text}
    </motion.span>
  );
};

export default Badge;
