"use client";

import { motion } from "framer-motion";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=3534&q=80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

export default function Avatar() {
  return (
    <motion.section
      id="team"
      className="w-full py-12 px-4 sm:px-6 lg:px-8 flex justify-center"
      initial="hidden"
      whileInView="show"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl w-full flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
          Meet the Team
        </h2>

        {/* Staggered Avatars */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
        >
          {people.map((person) => (
            <motion.div
              key={person.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.08,
                boxShadow:
                  "0 0 20px rgba(0,0,0,0.15), 0 0 30px rgba(255,255,255,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-full"
            >
              <AnimatedTooltip items={[person]} />
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-6 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 text-center max-w-xl">
          A diverse group of professionals collaborating to build modern,
          user-friendly digital experiences.
        </p>
      </div>
    </motion.section>
  );
}
