"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const colors = {
  base: [
    { name: "Dark", hex: "#1F1F1F" },
    { name: "White", hex: "#FFFFFF" },
  ],
  gray: [
    { name: "Gray / 50", hex: "#F9FAFB" },
    { name: "Gray / 100", hex: "#F3F4F6" },
    { name: "Gray / 200", hex: "#E5E7EB" },
    { name: "Gray / 300", hex: "#D1D5DB" },
    { name: "Gray / 400", hex: "#9CA3AF" },
    { name: "Gray / 500", hex: "#6B7280" },
    { name: "Gray / 600", hex: "#4B5563" },
    { name: "Gray / 700", hex: "#374151" },
    { name: "Gray / 800", hex: "#1F2937" },
    { name: "Gray / 900", hex: "#111827" },
  ],
};

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
};

export default function ColorPalette() {
  return (
    <motion.section
    id="themes"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="space-y-12 px-4 sm:px-6 lg:px-12 py-8"
    >
      {/* Base Colors */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Base Color</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-6">
          Dark & White base UI colors.
        </p>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto" variants={containerVariants}>
          {colors.base.map((color) => (
            <motion.div key={color.name} variants={cardVariants}>
              <Card className="overflow-hidden rounded-xl shadow-sm hover:shadow-md transition">
                <CardContent className="p-0">
                  <div
                    className="h-24 sm:h-28 md:h-32"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="p-4">
                    <p className="font-medium">{color.name}</p>
                    <p className="text-xs text-muted-foreground">{color.hex}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Gray Scale */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Gray</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
          Gray is a neutral color and is the base of the color system. The majority of UI
          design utilizes Gray for backgrounds, text, dividers, etc.
        </p>
        <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6" variants={containerVariants}>
          {colors.gray.map((color) => (
            <motion.div key={color.name} variants={cardVariants}>
              <Card className="overflow-hidden rounded-xl shadow-sm hover:shadow-md transition">
                <CardContent className="p-0">
                  <div
                    className="h-20 sm:h-24 md:h-28"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="p-4">
                    <p className="font-medium text-sm sm:text-base">{color.name}</p>
                    <p className="text-xs text-muted-foreground">{color.hex}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.section>
  );
}
