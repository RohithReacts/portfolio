"use client";
import { motion } from "framer-motion";
import { WORK_EXPERIENCE } from "@/components/data/constants";
import { Spotlight } from "@/components/motion-primitives/spotlight";
import Image from "next/image";

export default function Work() {
  const icons = [
    "/icon-1.svg",
    "/icon-2.svg",
    "/icon-3.svg",
    "/icon-4.svg",
    "/icon-5.svg",
    "/icon-6.svg",
    "/icon-7.svg",
    "/icon-8.svg",
    "/icon-9.svg",
    "/icon-10.svg",
    "/icon-11.svg",
    "/icon-12.svg",
    "/icon-13.svg",
    "/icon-14.svg",
    "/icon-15.svg",
    "/icon-16.svg",
    "/icon-17.svg",
  ];

  return (
    <div id="work">
      <h3 className="mb-5 text-lg font-medium">Work Experience</h3>

      <div className="flex flex-col gap-4">
        {WORK_EXPERIENCE.map((job) => (
          <a
            key={job.id}
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
          >
            {/* Spotlight needs absolute positioning and blending */}
            <Spotlight className="absolute inset-0 z-0 from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50 mix-blend-overlay pointer-events-none" />

            <div className="relative z-10 h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold dark:text-zinc-100">
                    {job.title}
                  </h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {job.company}
                  </p>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {job.start} - {job.end}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Infinite scrolling icons row */}
      <div className="relative my-6 md:my-8 w-full overflow-hidden">
        <motion.div
          className="flex gap-4 w-max mt-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 8,
            ease: "linear",
          }}
        >
          {icons.concat(icons).map((icon, index) => (
            <Image
              src={icon}
              key={index}
              alt=""
              width={40}
              height={40}
              className="md:w-[50px] md:h-[50px]"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
