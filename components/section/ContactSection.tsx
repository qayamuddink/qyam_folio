"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionProps } from "@/lib/types";
import { SkeletonBox } from "../ui/Skeleton";
import Button from "../ui/Button";
import { socialLinksData } from "../data";


const ContactSection = ({ isDarkMode, loading }: SectionProps) => {
  if (loading) {
    return (
      <section id="contact" className="relative py-20 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SkeletonBox className="h-16 w-96 mx-auto mb-6" />
          <SkeletonBox className="h-24 w-full max-w-2xl mx-auto mb-12" />
          <div className="flex gap-4 justify-center mb-12">
            <SkeletonBox className="h-12 w-64" />
            <SkeletonBox className="h-12 w-40" />
          </div>
          <div className="flex gap-4 justify-center">
            <SkeletonBox className="h-12 w-32" />
            <SkeletonBox className="h-12 w-32" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-20 sm:py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 font-sans tracking-tight">
            <span
              className={cn(
                "bg-gradient-to-r bg-clip-text text-transparent",
                isDarkMode
                  ? "from-purple-400 via-blue-400 to-cyan-400"
                  : "from-blue-500 to-cyan-500"
              )}
            >
              Let's Build Together
            </span>
          </h2>
          <p
            className={cn(
              "text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-md sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed font-medium",
              isDarkMode ? "text-gray-300" : "text-gray-700"
            )}
          >
            Got a visionary project? Let's transform ideas into reality. I'm
            excited to collaborate on innovative solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12"
        >
          <Button
            variant="primary"
            text="qayamuddin1k@gmail.com"
            href="mailto:qayamuddin1k@gmail.com"
            external
            startIcon={
              <span className="flex items-center justify-center group-hover:rotate-12 transition-transform">
                ✉
              </span>
            }
          />
          <Button
            variant="secondary"
            text="+91 7983252394"
            href="tel:+917983252394"
            external
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          {socialLinksData.map((social) => (
            <Button
              key={social.name}
              variant="secondary"
              text={social.name}
              href={social.url}
              external={social.external}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
