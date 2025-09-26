"use client";
import { motion } from "motion/react";
import Image from "next/image";

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};
const TRANSITION_SECTION = { duration: 0.1 };

export default function Hero() {
  return (
    <motion.section
    id="home"
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
        >
          <Image
            src="/images/office.jpg"
            alt="travel"
            width={1300}
            height={400}
            priority
            className="object-cover rounded-xl"
          />
        </motion.section>
  )
}
