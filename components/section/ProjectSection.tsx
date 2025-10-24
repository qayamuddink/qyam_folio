"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn, getCardBaseClass, getHoverBoxShadow } from "@/lib/utils";
import { Project, projectsData } from "../data";
import Badge from "../ui/Badge";
import { SectionProps } from "@/lib/types";
import { CardSkeleton } from "../ui/Skeleton";
import SectionHeader from "../ui/SectionHeader";

const ProjectCard = ({
  project,
  index,
  isDarkMode,
}: {
  project: Project;
  index: number;
  isDarkMode: boolean;
}) => {
  const getProjectIcon = (title: string) => {
    switch (title) {
      case "Better Uptime Monitor":
        return (
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke={`url(#${project.gradient.replace(/\s/g, "")})`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 12h18M3 6l9 6 9-6M3 18l9 6 9-6" />
            <defs>
              <linearGradient
                id={project.gradient.replace(/\s/g, "")}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={project.gradient.split(" ")[1]} />
                <stop
                  offset="100%"
                  stopColor={project.gradient.split(" ")[3]}
                />
              </linearGradient>
            </defs>
          </svg>
        );
      case "Excalidraw Clone":
        return (
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke={`url(#${project.gradient.replace(/\s/g, "")})`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 20h16M4 4h16m-10 0v16m4-16v16" />
            <defs>
              <linearGradient
                id={project.gradient.replace(/\s/g, "")}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={project.gradient.split(" ")[1]} />
                <stop
                  offset="100%"
                  stopColor={project.gradient.split(" ")[3]}
                />
              </linearGradient>
            </defs>
          </svg>
        );
      case "College Website":
        return (
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke={`url(#${project.gradient.replace(/\s/g, "")})`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 9h16v2H4zm0-5h16v2H4zm8 10v8m-4-4h8" />
            <defs>
              <linearGradient
                id={project.gradient.replace(/\s/g, "")}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={project.gradient.split(" ")[1]} />
                <stop
                  offset="100%"
                  stopColor={project.gradient.split(" ")[3]}
                />
              </linearGradient>
            </defs>
          </svg>
        );
      case "Second Brain":
        return (
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke={`url(#${project.gradient.replace(/\s/g, "")})`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 4c-4 0-7 2-7 5 0 2 1.5 3.5 3 4.5 0 1.5 1 3 3 3s3-1.5 3-3c1.5-1 3-2.5 3-4.5 0-3-3-5-7-5z" />
            <path d="M8 10c1 0 2 1 2 2m4-2c-1 0-2 1-2 2" />
            <circle cx="8" cy="8" r="1" />
            <circle cx="16" cy="8" r="1" />
            <defs>
              <linearGradient
                id={project.gradient.replace(/\s/g, "")}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={project.gradient.split(" ")[1]} />
                <stop
                  offset="100%"
                  stopColor={project.gradient.split(" ")[3]}
                />
              </linearGradient>
            </defs>
          </svg>
        );
      case "Stock Price Prediction":
        return (
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke={`url(#${project.gradient.replace(/\s/g, "")})`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 20h18M6 17l3-3 3 3 5-5 3 3" />
            <defs>
              <linearGradient
                id={project.gradient.replace(/\s/g, "")}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={project.gradient.split(" ")[1]} />
                <stop
                  offset="100%"
                  stopColor={project.gradient.split(" ")[3]}
                />
              </linearGradient>
            </defs>
          </svg>
        );
      default:
        return (
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            stroke={`url(#${project.gradient.replace(/\s/g, "")})`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v20m10-10H2" />
            <defs>
              <linearGradient
                id={project.gradient.replace(/\s/g, "")}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={project.gradient.split(" ")[1]} />
                <stop
                  offset="100%"
                  stopColor={project.gradient.split(" ")[3]}
                />
              </linearGradient>
            </defs>
          </svg>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{
        y: -8,
        boxShadow: getHoverBoxShadow(isDarkMode),
      }}
      className="group relative"
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10 rounded-3xl",
          isDarkMode
            ? "from-purple-500/20 to-blue-500/20"
            : "from-blue-200/20 to-cyan-200/20"
        )}
      ></div>

      <div className={getCardBaseClass(isDarkMode)}>
        <motion.div
          className={cn(
            "inline-block bg-gradient-to-r",
            project.gradient,
            "rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6"
          )}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div
            className={cn(
              "w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center",
              isDarkMode ? "bg-white/20" : "bg-white/50"
            )}
          >
            {getProjectIcon(project.title)}
          </div>
        </motion.div>

        <div className="flex justify-between items-start mb-4">
          <h3
            className={cn(
              "text-xl sm:text-2xl md:text-3xl font-bold font-sans transition-colors duration-300",
              isDarkMode
                ? "group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text"
                : "text-gray-900 group-hover:text-blue-700"
            )}
          >
            {project.title}
          </h3>
          <span
            className={cn(
              "text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full transition-colors duration-500",
              isDarkMode
                ? "text-gray-500 bg-white/5"
                : "text-gray-600 bg-blue-50"
            )}
          >
            {project.period}
          </span>
        </div>

        <p
          className={cn(
            "mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed transition-colors duration-500 font-medium",
            isDarkMode
              ? "text-gray-300"
              : "text-gray-700 group-hover:text-gray-800"
          )}
        >
          {project.description}
        </p>

        <div className="mb-4 sm:mb-6 space-y-2">
          {project.highlights.map((highlight: string, i: number) => (
            <div
              key={i}
              className={cn(
                "flex items-start gap-2 text-sm sm:text-base transition-colors duration-500",
                isDarkMode
                  ? "text-gray-300"
                  : "text-gray-600 group-hover:text-gray-700"
              )}
            >
              <span
                className={cn(
                  "bg-gradient-to-r",
                  project.gradient,
                  "bg-clip-text text-transparent font-bold"
                )}
              >
                ✦
              </span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech: string, i: number) => (
            <Badge key={i} text={tech} isDarkMode={isDarkMode} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = ({ isDarkMode, loading }: SectionProps) => {
  if (loading) {
    return (
      <section id="projects" className="relative py-20 sm:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <CardSkeleton className="h-12 w-64 mx-auto mb-4" />
            <CardSkeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <CardSkeleton key={i} type="project" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="relative py-20 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Featured Work"
          subtitle="Crafting innovative solutions, one project at a time"
          gradientFrom="from-purple-400"
          gradientTo="to-blue-400"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
