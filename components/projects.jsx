"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import { Button } from "@radix-ui/themes";

// ✅ Projects Data
const projects = [
  {
    id: 1,
    title: "Travel UI",
    description: "Booking app interface with animations.",
    image: "/assets/amt4.png",
    stack: "React · Tailwind",
    previewLink: "https://portfolio-ten-pi-tcpu51md1f.vercel.app/",
    codeLink: "https://github.com/RohithReacts/portfolio",
  },
  {
    id: 2,
    title: "E-commerce Store",
    description: "Minimal fashion e-commerce template.",
    image: "/assets/amt5.png",
    stack: "Next.js · Tailwind",
    previewLink: "https://portfolio-ten-pi-tcpu51md1f.vercel.app/",
    codeLink: "https://github.com/RohithReacts/portfolio",
  },
  {
    id: 3,
    title: "Dashboard UI",
    description: "Analytics dashboard with charts.",
    image: "/assets/amt6.png",
    stack: "React · ShadcnUI",
    previewLink: "https://portfolio-ten-pi-tcpu51md1f.vercel.app/",
    codeLink: "https://github.com/RohithReacts/portfolio",
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
                          <Button className="text-xs px-2 py-1 cursor-pointer rounded-md border border-neutral-200 dark:border-neutral-700">
                            Preview
                          </Button>
                        </Link>
                        <Link href={project.codeLink}>
                          <Button className="text-xs px-2 py-1 cursor-pointer rounded-md bg-neutral-900 text-white">
                            Code
                          </Button>
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
