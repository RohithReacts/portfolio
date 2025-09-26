"use client";
import AboutMe from "@/pages/aboutme";
import Avatar from "@/pages/avatars";
import Blog from "@/pages/blog";
import Connect from "@/pages/connect";
import Hero from "@/pages/hero";
import Projects from "@/pages/projects";
import Services from "@/pages/services";
import TemplatesSection from "@/pages/templatessection";
import Testimonials from "@/pages/testimonials";
import Work from "@/pages/work";
import { Box } from "@radix-ui/themes";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-smooth">
      <motion.main className="space-y-24 py-12">
        <Hero />
        <Projects />
        <TemplatesSection />
        <Avatar />
        <AboutMe />
        <Work />
        <Services/>
        <Blog />
        <Testimonials />
        <Connect />
      </motion.main>
    </Box>
  );
}
