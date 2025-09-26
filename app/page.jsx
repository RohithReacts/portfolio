"use client";
import AboutMe from "@/pages/aboutme";
import { Avatar } from "@/pages/avatars";
import Blog from "@/pages/blog";
import ColorPalette from "@/pages/color";
import Connect from "@/pages/connect";
import Hero from "@/pages/hero";
import Projects from "@/pages/projects";
import TemplatesSection from "@/pages/templatessection";
import { Testimonials } from "@/pages/testimonials";
import TypographyGuide from "@/pages/type";
import Work from "@/pages/work";
import { motion } from "motion/react";

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-smooth">
      <motion.main className="space-y-24 py-12">
        <Hero/>
        <Projects/>
        <TemplatesSection/>
        <Avatar/>
     
        <AboutMe/>
        <Work/>
        <ColorPalette/>
        <Blog/>
        <TypographyGuide/>
        <Testimonials/>
        <Connect/>
      </motion.main>
    </div>
  );
}
