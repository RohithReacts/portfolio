"use client";

import { motion } from "framer-motion";
import { GithubIcon, Eye } from "lucide-react"; // Added Eye icon
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.1 } },
};

const leftButton = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.1 } },
};

const rightButton = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.1 } },
};

export default function TemplatesSection() {
  return (
    <motion.main>
      <motion.section
      id="projects"
        variants={container}
        initial="hidden"
        animate="show"
        className="px-6 md:px-12 lg:px-20 py-16 transition-colors duration-500"
      >
        {/* Heading */}
        <motion.div variants={item} className="max-w-3xl text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-gray-900 dark:text-white">
            Start your project with premium templates
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base font-thin md:text-md">
            Explore a curated collection of templates crafted with Tailwind CSS,
            Next.js, React, and Motion-Primitives. Designed for founders,
            startups, agencies, and creators.
          </p>
        </motion.div>

        {/* Templates List */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 items-start">
          {/* Template Card */}
          <motion.div variants={item} whileHover={{ scale: 1.02 }}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Portfolio
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Personal website template
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              A fast, minimal, and elegant personal website template with a
              built-in blog. Perfect for developers, designers, and founders who
              want a beautiful and functional online presence.
            </p>

            {/* Buttons with opposite animations */}
            <div className="flex gap-4 mt-5">
              <motion.a
                variants={leftButton}
                href="https://github.com/RohithReacts/portfolio"
                className="flex items-center gap-2 px-5 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition"
              >
                <GithubIcon className="w-4 h-4" />
                Use For Free
              </motion.a>
              <motion.a
                variants={rightButton}
                href="/"
                className="flex items-center gap-2 px-5 py-2 rounded-md bg-gray-100 text-sm font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition"
              >
                <Eye className="w-4 h-4" />
                Live Preview
              </motion.a>
            </div>
          </motion.div>

          {/* Template Images */}
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src="/images/banner.png"
                alt="Template Screenshot"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
              />
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src="/images/banner2.png"
                alt="Template Screenshot 2"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
        {/* Templates List */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 items-start">
          {/* Template Card */}
          <motion.div variants={item} whileHover={{ scale: 1.02 }}>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
             E Commerce
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Starter kit for high-performance commerce 
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              A high-performance, server-rendered Next.js App Router ecommerce application.
            </p>

            {/* Buttons with opposite animations */}
            <div className="flex gap-4 mt-5">
              <motion.a
                variants={leftButton}
                href="https://github.com/RohithReacts/portfolio"
                className="flex items-center gap-2 px-5 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition"
              >
                <GithubIcon className="w-4 h-4" />
                Use For Free
              </motion.a>
              <motion.a
                variants={rightButton}
                href="/"
                className="flex items-center gap-2 px-5 py-2 rounded-md bg-gray-100 text-sm font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition"
              >
                <Eye className="w-4 h-4" />
                Live Preview
              </motion.a>
            </div>
          </motion.div>

          {/* Template Images */}
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src="/images/banner3.png"
                alt="Template Screenshot"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
              />
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src="/images/banner4.png"
                alt="Template Screenshot 2"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.main>
  );
}
