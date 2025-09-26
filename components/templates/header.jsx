"use client";

import { motion } from "framer-motion";
import { Navbar } from "./navbar";

export function Header() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, }}
    >
      <Navbar />
    </motion.section>
  );
}
