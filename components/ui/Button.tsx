"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ButtonProps } from "@/lib/types";

const variantClasses = {
  primary:
    "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-purple-500/50",
  secondary:
    "backdrop-blur-sm border bg-white/5 border-white/10 hover:bg-white/10",
};

const Button = ({
  variant,
  text,
  startIcon,
  onClick,
  fullWidth,
  loading,
  href,
  external,
}: ButtonProps) => {
  const defaultStyles =
    "px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-md font-medium transition-all text-sm sm:text-base flex items-center justify-center gap-2";
  const className = cn(
    variantClasses[variant],
    defaultStyles,
    fullWidth ? "w-full" : ""
  );

  const content = (
    <>
      {startIcon && (
        <span className="flex items-center justify-center">{startIcon}</span>
      )}
      {loading ? "Loading..." : text}
    </>
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={className}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href={href} className={className}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
      disabled={loading}
    >
      {content}
    </motion.button>
  );
};

export default Button;
