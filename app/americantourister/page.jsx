"use client";
import { motion } from "motion/react";
import Image from "next/image";
import AmericanTouristerCards from "./americancards";


const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};
const TRANSITION_SECTION = { duration: 0.6 };

export default function page() {
  return (
    <motion.section
    variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          >

     <Image
              src="/images/travel.webp" 
              alt="travel"
            width={1300}
            height={400}
              priority
              className="object-cover rounded-xl"
            />
            <AmericanTouristerCards/>
          <div className="relative w-full max-w-6xl mx-auto">
      <Image
        src="/images/amt3.webp" 
        alt="travel"
        width={1300}
        height={400}
        priority
        className="object-cover rounded-lg"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-2xl md:text-7xl font-bold text-center drop-shadow-lg">
          Welcome to the world of American Tourister!
        </h1>
      </div>
    </div>
    
    </motion.section>
    
  )
}
