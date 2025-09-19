"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import * as Avatar from "@radix-ui/react-avatar";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="h-[20rem] rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
    >
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom...",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    avatar: "https://i.pravatar.cc/100?img=1", // demo avatar
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind...",
    name: "William Shakespeare",
    title: "Hamlet",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession...",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely...",
    name: "Herman Melville",
    title: "Moby-Dick",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
];
