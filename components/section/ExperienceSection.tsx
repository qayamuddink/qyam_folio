"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn, getCardBaseClass } from "@/lib/utils";
import { Experience, experienceData } from "../data";
import { CardSkeleton } from "../ui/Skeleton";
import SectionHeader from "../ui/SectionHeader";
import { SectionProps } from "@/lib/types";

const ExperienceCard = ({
  exp,
  index,
  isDarkMode,
}: {
  exp: Experience;
  index: number;
  isDarkMode: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ x: 8 }}
    className="relative group"
  >
    <div
      className={cn(
        "absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b rounded-full",
        `from-${exp.color}-500 to-${exp.color}-600`
      )}
    ></div>

    <div className={cn("ml-4 sm:ml-6", getCardBaseClass(isDarkMode))}>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 mb-4">
        <div>
          <h3
            className={cn(
              "text-lg sm:text-xl md:text-2xl font-bold font-sans",
              isDarkMode ? "text-white" : "text-gray-900"
            )}
          >
            {exp.role}
          </h3>
          <p
            className={cn(
              "text-base sm:text-lg bg-gradient-to-r bg-clip-text text-transparent font-semibold",
              isDarkMode
                ? "from-purple-400 to-blue-400"
                : "from-blue-500 to-cyan-500"
            )}
          >
            {exp.company}
          </p>
        </div>
        <span
          className={cn(
            "text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full",
            isDarkMode ? "text-gray-400 bg-white/5" : "text-gray-600 bg-blue-50"
          )}
        >
          {exp.period}
        </span>
      </div>

      <p
        className={cn(
          "mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed font-medium",
          isDarkMode ? "text-gray-300" : "text-gray-700"
        )}
      >
        {exp.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {exp.tech.map((tech, i) => (
          <span
            key={i}
            className={cn(
              "px-3 py-1 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium",
              `bg-${exp.color}-500/10 border border-${exp.color}-500/30 text-${exp.color}-300`
            )}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ExperienceSection = ({ isDarkMode, loading }: SectionProps) => {
  if (loading) {
    return (
      <section id="experience" className="relative py-20 sm:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <CardSkeleton className="h-12 w-64 mx-auto mb-4" />
            <CardSkeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="space-y-6">
            {[1, 2].map((i) => (
              <CardSkeleton key={i} type="experience" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="relative py-20 sm:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          title="Experience"
          subtitle="My journey through tech and innovation"
          gradientFrom="from-cyan-400"
          gradientTo="to-blue-400"
        />
        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <ExperienceCard
              key={index}
              exp={exp}
              index={index}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
