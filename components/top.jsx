"use client";

import React, { useEffect, useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300); // show after 300px
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <motion.button
                  onClick={scrollTop}
                  aria-label="Scroll to top"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="fixed right-4 sm:right-6 bottom-20 sm:bottom-8 md:bottom-20 z-50 flex h-8 w-8 sm:h-8 sm:w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-zinc-900/90 text-white shadow-lg backdrop-blur focus:outline-none focus:ring-2 focus:ring-zinc-300"
                >
                  <ArrowUp size={18} className="sm:h-5 sm:w-5" />
                </motion.button>
              </Tooltip.Trigger>
              <Tooltip.Content
                side="left"
                align="center"
                className="rounded-md bg-zinc-700 px-2 py-1 text-sm text-white"
              >
                Back to top
                <Tooltip.Arrow className="fill-zinc-700" />
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
