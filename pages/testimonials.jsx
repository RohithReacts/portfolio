"use client";

import { motion } from "framer-motion";
import * as Avatar from "@radix-ui/react-avatar";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom...",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    avatar: "https://i.pravatar.cc/100?img=1",
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
    quote: "Call me Ishmael. Some years ago—never mind how long precisely...",
    name: "Herman Melville",
    title: "Moby-Dick",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

export function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      className="relative w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mt-15 w-full text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
          What Great Minds Say
        </h2>
        <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          Timeless wisdom and thoughts to inspire.
        </p>
      </div>

      <motion.div
        className="mt-10 h-[20rem] w-full rounded-md flex items-center justify-center dark:bg-grid-white/[0.05]"
        variants={containerVariants}
      >
        <InfiniteMovingCards
          items={testimonials.map((t, i) => ({
            ...t,
            content: (
              <motion.div key={i} variants={itemVariants}>
                <div className="flex flex-col items-center text-center px-6">
                  <p className="text-sm sm:text-base italic text-zinc-700 dark:text-zinc-300">
                    “{t.quote}”
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <Avatar.Root className="inline-flex h-10 w-10 items-center cursor-default justify-center rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-700">
                      <Avatar.Image
                        src={t.avatar}
                        alt={t.name}
                        className="h-full w-full object-cover"
                      />
                      <Avatar.Fallback className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
                        {t.name[0]}
                      </Avatar.Fallback>
                    </Avatar.Root>
                    <div className="flex flex-col text-left">
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {t.name}
                      </span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">
                        {t.title}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ),
          }))}
          direction="right"
          speed="slow"
        />
      </motion.div>
    </motion.section>
  );
}
