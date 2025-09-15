"use client";
import Link from "next/link";
import { NavigationMenuDemo } from "./navbar";
import { TextEffect } from "../motion-primitives/text-effect";

export function Header() {
  return (
    <div className="mb-8">
      <NavigationMenuDemo />
      <div className="mt-5">
        <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-lg text-black dark:text-white">
          The Next Generation Of Web Development
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Modern and minimalist templates for building your next product. Built with React, NextJS, TailwindCSS, Framer Motion and Plain Javascript.
        </TextEffect>
      </div>
    </header>
      </div>
    </div>
  );
}
