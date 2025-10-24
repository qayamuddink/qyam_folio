"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavigationSkeleton } from "@/components/ui/Skeleton";
import { ThemeProps } from "@/lib/types";

const Navigation = ({
  isDarkMode,
  setIsDarkMode,
  loading,
}: ThemeProps & {
  setIsDarkMode: (value: boolean) => void;
  loading: boolean;
}) => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "projects",
        "skills",
        "experience",
        "contact",
      ].map((id) => document.getElementById(id));
      const scrollPosition = window.scrollY + 150;

      let newActiveSection = "Home";
      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            newActiveSection = [
              "Home",
              "Projects",
              "Skills",
              "Experience",
              "Contact",
            ][index];
          }
        }
      });

      if (
        scrollPosition + window.innerHeight >=
        document.documentElement.scrollHeight - 100
      ) {
        newActiveSection = "Contact";
      }

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  if (loading) return <NavigationSkeleton />;

  const navItems = ["Home", "Projects", "Skills", "Experience", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-2 sm:px-4"
    >
      <div
        className={cn(
          "backdrop-blur-3xl border rounded-full px-3 sm:px-4 py-2 shadow-2xl transition-colors duration-500",
          isDarkMode
            ? "bg-white/5 border-white/10 shadow-black/50"
            : "bg-white/10 border-gray-100/50 shadow-blue-200/50"
        )}
      >
        <div className="flex gap-2 sm:gap-3 md:gap-6 items-center justify-center text-xs sm:text-sm md:text-base">
          {navItems.map((item) => {
            const href = `/#${item.toLowerCase()}`;
            const isActive = activeSection === item;
            const textColor = cn(
              "transition-colors duration-300",
              item === "Home" && !isActive
                ? isDarkMode
                  ? "text-white"
                  : "text-gray-800"
                : isActive
                ? "text-blue-400"
                : isDarkMode
                ? "text-gray-200 hover:text-white"
                : "text-gray-800 hover:text-blue-600"
            );

            return (
              <motion.div
                key={item}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "font-semibold relative group whitespace-nowrap",
                  textColor
                )}
              >
                <Link href={href} onClick={() => setActiveSection(item)}>
                  {item}
                </Link>
                <motion.span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r rounded-full",
                    isDarkMode
                      ? "from-purple-400 via-blue-400 to-cyan-400"
                      : "from-blue-400 to-cyan-400"
                  )}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{
                    width: isActive && item !== "Home" ? "100%" : 0,
                    opacity: isActive && item !== "Home" ? 1 : 0,
                    transition: { duration: 0.3 },
                  }}
                  style={{
                    left: isActive && item !== "Home" ? 0 : "50%",
                    transform:
                      isActive && item !== "Home" ? "none" : "translateX(-50%)",
                  }}
                ></motion.span>
              </motion.div>
            );
          })}
          <motion.button
            onClick={() => setIsDarkMode(!isDarkMode)}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "ml-2 p-1 sm:p-2 rounded-full transition-colors duration-500",
              isDarkMode
                ? "bg-white/5 hover:bg-white/10"
                : "bg-blue-50/50 hover:bg-blue-100/50"
            )}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
