import React from "react";
import Image from "next/image";
import { LaptopMinimalIcon, ShoppingBagIcon, ShoppingBasketIcon } from "lucide-react";
import Link from "next/link";
import { EMAIL } from "@/components/data/data";

export default function Duffles() {
  return (
    <section className="px-6 py-12 md:py-20 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left: Product Image */}
        <div className="w-full md:w-[380px] lg:w-[420px]  rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700">
          <Image
            src="/assets/amt2.webp"
            alt="American Tourister Luggage"
            width={825}
            height={1024}
            priority
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right: Product Info */}
        <div className="flex-1 max-w-2xl text-center md:text-left">
         
          <h2 className="text-xl md:text-2xl mt-3 font-semibold text-neutral-800 dark:text-neutral-200">
            Here For You
          </h2>

          

          {/* Description */}
          <p className="mt-5 text-neutral-600 dark:text-neutral-400 leading-relaxed">
         Discover answers for our most frequently asked questions plus how to deal with any issue you might encounter.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 px-5 py-2.5 text-sm md:text-base font-medium rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
            >
              <ShoppingBasketIcon className="w-4 h-4 md:w-5 md:h-5" />
              Shop all
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
