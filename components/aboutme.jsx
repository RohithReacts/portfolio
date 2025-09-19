import React from "react";
import Image from "next/image";
import { Mail, FolderOpen } from "lucide-react";
import Link from "next/link";
import { EMAIL } from "./data/data";
import { Button } from "@radix-ui/themes";

export default function AboutMe() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 py-12 md:py-20">
      {/* Left: Profile Image */}
      <div className="w-40 h-40 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700">
        <Image
          src="/assets/rohith.jpg" // replace with your image path
          alt="Rohith Kumar"
          width={324}
          height={324}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right: Text */}
      <div className="mt-6 md:mb-0 md:ml-12 max-w-2xl text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
          About Me
        </h2>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Hi, I’m <span className="font-semibold">Rohith Kumar</span> — a
          passionate developer who loves crafting clean, responsive, and
          user-friendly web applications. I specialize in building modern
          front-end experiences using{" "}
          <span className="font-medium">Next.js</span>,{" "}
          <span className="font-medium">Tailwind CSS</span>, and various UI
          libraries like Radix UI and Shadcn/UI.
        </p>
        <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
          When I’m not coding, I enjoy exploring new tech trends, improving my
          design skills, and occasionally diving into automation testing with
          Playwright and Cucumber.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
          <Button asChild className="flex items-center gap-2">
            <Link href={`mailto:${EMAIL}`}>
              <Mail className="w-4 h-4" />
              Get In Touch
            </Link>
          </Button>
          <Button asChild className="flex items-center gap-2">
            <Link
              href="https://github.com/RohithReacts"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            >
              <FolderOpen className="w-4 h-4" />
              View My Work
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
