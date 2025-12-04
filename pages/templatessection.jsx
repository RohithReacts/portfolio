"use client";

import { motion } from "framer-motion";
import { GithubIcon, Eye } from "lucide-react";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

const leftButton = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

const rightButton = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

export default function TemplatesSection() {
  return (
    <motion.main>
      <motion.section
        id="templates"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20 transition-colors duration-500"
      >
        <motion.div variants={item} className="max-w-3xl text-center mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Start your project with premium templates
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            Explore a curated collection of templates crafted with Tailwind CSS,
            Next.js, React, and Motion-Primitives. Designed for founders,
            startups, agencies, and creators.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.div variants={item} whileHover={{ scale: 1.02 }}>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
              Portfolio
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
              Personal website template
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
              A fast, minimal, and elegant personal website template with a
              built-in blog. Perfect for developers, designers, and founders who
              want a beautiful and functional online presence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <motion.a
                variants={leftButton}
                href="https://github.com/RohithReacts/portfolio"
                className="flex items-center justify-center gap-2 px-5 py-2 rounded-md bg-black text-white text-sm md:text-base font-medium hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
                Use For Free
              </motion.a>
              <motion.a
                variants={rightButton}
                href="https://rohithreacts.vercel.app/"
                className="flex items-center justify-center gap-2 px-5 py-2 rounded-md bg-gray-100 text-sm md:text-base font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors shadow-sm"
              >
                <Eye className="w-4 h-4" />
                Live Preview
              </motion.a>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src="/images/banner.png"
                alt="Template Screenshot"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src="/images/banner2.png"
                alt="Template Screenshot 2"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.div variants={item} whileHover={{ scale: 1.02 }}>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
              Better Auth
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
              The most comprehensive authentication framework for TypeScript.
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
              Simple starter pack for Better Auth, with Shadcn, Drizzle, and
              Neon and login signup dashboard
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <motion.a
                variants={leftButton}
                href="https://github.com/RohithReacts/Reacts.dev-Better-Auth."
                className="flex items-center justify-center gap-2 px-5 py-2 rounded-md bg-black text-white text-sm md:text-base font-medium hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
                Use For Free
              </motion.a>
              <motion.a
                variants={rightButton}
                href="https://reacts-dev-better-auth.vercel.app/"
                className="flex items-center justify-center gap-2 px-5 py-2 rounded-md bg-gray-100 text-sm md:text-base font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors shadow-sm"
              >
                <Eye className="w-4 h-4" />
                Live Preview
              </motion.a>
            </div>
          </motion.div>

          {/* Template Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src="/images/login.png"
                alt="Template Screenshot"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </motion.div>
            <motion.div
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <Image
                src="/images/dashboard.png"
                alt="Template Screenshot 2"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.main>
  );
}
