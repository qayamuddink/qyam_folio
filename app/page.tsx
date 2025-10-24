"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animation/AnimatedBackground";
import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/section/HeroSection";
import ProjectsSection from "@/components/section/ProjectSection";
import SkillsSection from "@/components/section/SkillsSection";
import ExperienceSection from "@/components/section/ExperienceSection";
import ContactSection from "@/components/section/ContactSection";
import Footer from "@/components/layout/Footer";


const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  return (
    <div
      className={cn(
        "min-h-screen overflow-hidden transition-colors duration-500",
        isDarkMode ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      )}
    >
      <AnimatedBackground isDarkMode={isDarkMode} />
      <Navigation
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        loading={loading}
      />
      <HeroSection isDarkMode={isDarkMode} loading={loading} />
      <ProjectsSection isDarkMode={isDarkMode} loading={loading} />
      <SkillsSection isDarkMode={isDarkMode} loading={loading} />
      <ExperienceSection isDarkMode={isDarkMode} loading={loading} />
      <ContactSection isDarkMode={isDarkMode} loading={loading} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default Portfolio;
