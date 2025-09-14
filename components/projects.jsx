"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/ui/card";

// ✅ Projects Data
const projects = [
  {
    id: 1,
    title: "Travel UI",
    description: "Booking app interface with animations.",
    image: "/assets/amt4.png",
    stack: "React · Tailwind",
    previewLink: "/preview",
    codeLink: "/code",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "Minimal fashion e-commerce template.",
    image: "/assets/amt5.png",
    stack: "Next.js · Tailwind",
    previewLink: "/preview",
    codeLink: "/code",
  },
  {
    id: 3,
    title: "Dashboard UI",
    description: "Analytics dashboard with charts.",
    image: "/assets/amt6.png",
    stack: "React · ShadcnUI",
    previewLink: "/preview",
    codeLink: "/code",
  },
];

export default function MinimalPortfolio() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full text-center"
      >
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-800 dark:text-neutral-100">
            Minimal Portfolio Template
          </h1>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            An elegant, feature-rich portfolio website template with a minimal
            center design and tasteful microinteractions.
          </p>
        </header>

        {/* Main Card */}
        <Card className="rounded-2xl shadow-lg border border-neutral-100 dark:border-neutral-700">
          <CardHeader className="flex flex-row items-center gap-6">
            {/* Profile / Logo */}
            <div className="w-28 h-28 rounded-xl overflow-hidden bg-gradient-to-tr from-indigo-400 to-sky-400 flex items-center justify-center text-white shrink-0">
              <img
                src="/assets/pic.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="text-left flex-1">
              <CardTitle className="text-xl">Rohithreacts.dev</CardTitle>
              <CardDescription className="mt-1">
                Frontend engineer — crafting clean interfaces with delightful
                microinteractions. Available for freelance & full-time work.
              </CardDescription>

              {/* Actions */}
              <div className="mt-4 flex flex-wrap gap-3">
                <motion.a
                  href="#"
                  whileHover={{ translateY: -3 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-900 text-white text-sm font-medium shadow-md hover:shadow-lg"
                >
                  Live Preview
                </motion.a>

                <motion.button
                  whileHover={{ translateY: -3 }}
                  className="inline-flex items-center cursor-pointer gap-2 px-4 py-2 rounded-md border border-neutral-200 dark:border-neutral-700 text-sm font-medium"
                >
                  Buy
                  <span className="px-2 py-1 ml-2 text-xs rounded bg-neutral-100 dark:bg-neutral-700">
                    $59
                  </span>
                </motion.button>
              </div>
            </div>

            {/* Featured */}
            <div className="hidden sm:flex sm:flex-col items-end gap-3">
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                Featured
              </span>
              <motion.div
                initial={{ rotate: -4 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                className="w-36 h-24 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-600"
              >
                <img
                  src="/assets/pic1.png"
                  alt="Featured Project"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </CardHeader>

          <CardContent>
            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="p-3 border border-neutral-100 dark:border-neutral-800 bg-white/60 dark:bg-white/5">
                    {/* ✅ Project Image */}
                    <div className="h-24 rounded-md overflow-hidden border border-neutral-200 dark:border-neutral-700">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Project Info */}
                    <div className="mt-2 text-left">
                      <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                        {project.title}
                      </h3>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400">
                        {project.description}
                      </p>
                    </div>

                    {/* Footer */}
                    <CardFooter className="flex items-center justify-between mt-3 p-0">
                      <span className="text-xs text-neutral-600 dark:text-neutral-400">
                        {project.stack}
                      </span>
                      <div className="flex items-center gap-2">
                        <Link href={project.previewLink}>
                          <button className="text-xs px-2 py-1 cursor-pointer rounded-md border border-neutral-200 dark:border-neutral-700">
                            Preview
                          </button>
                        </Link>
                        <Link href={project.codeLink}>
                          <button className="text-xs px-2 py-1 cursor-pointer rounded-md bg-neutral-900 text-white">
                            Code
                          </button>
                        </Link>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.main>
    </div>
  );
}
