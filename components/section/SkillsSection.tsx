"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn, getCardBaseClass, getHoverBoxShadow } from "@/lib/utils";
import { CardSkeleton } from "../ui/Skeleton";
import { SectionProps } from "@/lib/types";
import SectionHeader from "../ui/SectionHeader";
import { skillsData } from "../data";
import Badge from "../ui/Badge";


const SkillCategoryCard = ({
  category,
  items,
  index,
  isDarkMode,
}: {
  category: string;
  items: string[];
  index: number;
  isDarkMode: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{
      scale: 1.02,
      boxShadow: getHoverBoxShadow(isDarkMode),
    }}
    className={getCardBaseClass(isDarkMode)}
  >
    <h3
      className={cn(
        "text-lg sm:text-xl font-bold mb-4 sm:mb-6 bg-gradient-to-r bg-clip-text text-transparent",
        isDarkMode ? "from-purple-400 to-blue-400" : "from-blue-500 to-cyan-500"
      )}
    >
      {category}
    </h3>
    <div className="flex flex-wrap gap-2">
      {items.map((skill, i) => (
        <Badge key={i} text={skill} isDarkMode={isDarkMode} />
      ))}
    </div>
  </motion.div>
);

const SkillsSection = ({ isDarkMode, loading }: SectionProps) => {
  if (loading) {
    return (
      <section id="skills" className="relative py-20 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <CardSkeleton className="h-12 w-64 mx-auto mb-4" />
            <CardSkeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <CardSkeleton key={i} type="skill" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="relative py-20 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Tech Arsenal"
          subtitle="Tools and technologies powering my creations"
          gradientFrom="from-blue-400"
          gradientTo="to-cyan-400"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([category, items], index) => (
            <SkillCategoryCard
              key={category}
              category={category}
              items={items}
              index={index}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
