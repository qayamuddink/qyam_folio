"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SectionHeader = ({
  title,
  subtitle,
  gradientFrom,
  gradientTo,
}: {
  title: string;
  subtitle: string;
  gradientFrom: string;
  gradientTo: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-12 sm:mb-16"
  >
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 font-sans tracking-tight">
      <span
        className={cn(
          "bg-gradient-to-r",
          gradientFrom,
          gradientTo,
          "bg-clip-text text-transparent"
        )}
      >
        {title}
      </span>
    </h2>
    <p className="text-base sm:text-lg md:text-xl text-700 font-medium">
      {subtitle}
    </p>
  </motion.div>
);

export default SectionHeader;
