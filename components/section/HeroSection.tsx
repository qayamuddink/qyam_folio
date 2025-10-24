"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionProps } from "@/lib/types";
import { SkeletonBox } from "../ui/Skeleton";
import Logo from "../layout/Logo";
import Button from "../ui/Button";


const HeroSection = ({ isDarkMode, loading }: SectionProps) => {
  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4 pt-24">
        <div className="max-w-6xl mx-auto text-center">
          <SkeletonBox className="w-44 h-44 rounded-full mx-auto mb-8" />
          <SkeletonBox className="h-16 w-96 mx-auto mb-4" />
          <SkeletonBox className="h-12 w-64 mx-auto mb-6" />
          <SkeletonBox className="h-6 w-full max-w-2xl mx-auto mb-8" />
          <div className="flex gap-4 justify-center">
            <SkeletonBox className="h-12 w-32" />
            <SkeletonBox className="h-12 w-32" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 sm:pt-24"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.5 }}
          className="mb-6 sm:mb-8 flex justify-center items-center"
        >
          <div className="relative group">
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
              className={cn(
                "absolute inset-0 bg-gradient-to-r rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity",
                isDarkMode
                  ? "from-purple-500 via-blue-500 to-cyan-500"
                  : "from-blue-400 via-cyan-400 to-blue-500"
              )}
            ></motion.div>
            <Logo isDarkMode={isDarkMode} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight font-sans tracking-tight">
            <span
              className={cn(
                "bg-gradient-to-r",
                isDarkMode
                  ? "from-purple-400 via-blue-400 to-cyan-400"
                  : "from-blue-500 to-cyan-500",
                "bg-clip-text text-transparent"
              )}
            >
              Qayamuddin
            </span>
            <br />
            <span className={isDarkMode ? "text-white" : "text-gray-900"}>
              Khan
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6 sm:mb-8"
        >
          <div
            className={cn(
              "inline-block bg-gradient-to-r rounded-full px-4 sm:px-6 py-2 shadow-lg",
              isDarkMode
                ? "from-purple-500/10 to-blue-500/10 border-purple-500/20 shadow-purple-500/10"
                : "from-blue-500/10 to-cyan-500/10 border-blue-500/20 shadow-blue-500/10",
              "backdrop-blur-sm border"
            )}
          >
            <p
              className={cn(
                "text-base sm:text-lg font-semibold bg-gradient-to-r bg-clip-text text-transparent",
                isDarkMode
                  ? "from-purple-400 via-blue-400 to-cyan-400"
                  : "from-blue-500 to-cyan-500"
              )}
            >
              Full Stack Developer
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className={cn(
            "text-base sm:text-lg md:text-xl max-w-md sm:max-w-lg md:max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed font-medium",
            isDarkMode ? "text-gray-300" : "text-gray-700"
          )}
        >
          Building cutting-edge web applications and intelligent systems with
          modern TypeScript stacks, real-time architectures, and scalable cloud
          solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap"
        >
          <Button
            variant="primary"
            text="Let's Talk"
            href="mailto:qayamuddin1k@gmail.com"
            external
            startIcon={
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            }
          />
          <Button
            variant="secondary"
            text="View GitHub"
            href="https://github.com/qayamuddink"
            external
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 sm:mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className={cn(
              "transition-colors duration-500",
              isDarkMode ? "text-gray-600" : "text-blue-300"
            )}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
