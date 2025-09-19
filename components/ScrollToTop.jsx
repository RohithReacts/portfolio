"use client";

import React, { useEffect, useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { ArrowUp } from "lucide-react";

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

  if (!visible) return null;

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            onClick={scrollTop}
            aria-label="Scroll to top"
            className="fixed right-6 bottom-25 z-50 flex h-8 w-8  items-center justify-center rounded-full bg-zinc-900/90 text-white shadow-lg backdrop-blur transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-zinc-300"
          >
            <ArrowUp size={18} />
          </button>
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
  );
}
