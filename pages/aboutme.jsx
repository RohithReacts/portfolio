"use client";

import React from "react";
import Image from "next/image";
import { Mail, FolderOpen } from "lucide-react";
import { motion } from "framer-motion";
import { EMAIL } from "@/components/data/constants";

const leftButton = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

const rightButton = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

export default function AboutMe() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 py-12 md:py-20"
    >
      {/* Left: Profile Image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-700 flex-shrink-0"
      >
        <Image
          src="/images/rohith.png"
          alt="Rohith Kumar"
          width={324}
          height={324}
          className="object-cover w-full h-full"
          priority
        />
      </motion.div>

      {/* Right: Text */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-6 md:mt-0 md:ml-12 max-w-2xl text-center md:text-left"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
          About Me
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
          Hi, I’m <span className="font-semibold">Rohith Kumar</span> — a
          passionate developer who loves crafting clean, responsive, and
          user-friendly web applications. I specialize in building modern
          front-end experiences using{" "}
          <span className="font-medium">Next.js</span>,{" "}
          <span className="font-medium">Tailwind CSS</span>, and UI
          libraries like Radix UI and Shadcn/UI.
        </p>
        <p className="mt-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
          When I’m not coding, I enjoy exploring new tech trends, improving my
          design skills, and diving into automation testing with Playwright and
          Cucumber.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
          <motion.a
            variants={leftButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href={`mailto:${EMAIL}`}
            className="flex items-center justify-center gap-2 px-5 py-2 rounded-md bg-black text-white text-sm sm:text-base font-medium hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors shadow-sm"
          >
            <Mail className="w-4 h-4" />
            Get In Touch
          </motion.a>

          <motion.a
            variants={rightButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="https://github.com/RohithReacts/portfolio"
            className="flex items-center justify-center gap-2 px-5 py-2 rounded-md bg-gray-100 text-sm sm:text-base font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors shadow-sm"
          >
            <FolderOpen className="w-4 h-4" />
            View My Work
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
}
