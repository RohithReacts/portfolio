"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const typography = [
  {
    title: "Screen Title",
    description:
      "The main title of the screen/page of a system/website/mobile app you are designing. Depending on how you design this will most likely be used in only one text per screen. For example a hero section header of homepage can have this text style",
    preview: "The brown fox jumped over the lazy dog.",
    font: "Poppins",
    weight: "SemiBold",
    size: "36px",
    lineHeight: "130%",
    letterSpacing: "0%",
    tag: "h1",
    className: "text-3xl sm:text-4xl font-semibold",
  },
  {
    title: "Section Title",
    description:
      "The main title of a section of the screen you are designing. For example this text style can be used for the section title of an about section in your home screen of your website",
    preview: "The brown fox jumped over the lazy dog.",
    font: "Poppins",
    weight: "SemiBold",
    size: "24px",
    lineHeight: "130%",
    letterSpacing: "0%",
    tag: "h3",
    className: "text-xl sm:text-2xl font-semibold",
  },
];

function Copyable({ label, value }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex items-center justify-between gap-2">
      <p>
        <span className="font-medium">{label}:</span> {value}
      </p>
      <Button
        variant="ghost"
        size="icon"
        className="h-6 w-6"
        onClick={handleCopy}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}

export default function TypographyGuide() {
  return (
    <div className="space-y-10 px-4 sm:px-6 lg:px-12 py-8">
      {typography.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
        >
          <Card className="p-6 hover:shadow-md transition">
            <CardContent className="p-0 space-y-6">
              {/* Title + Description */}
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-muted-foreground mt-1 max-w-3xl">
                  {item.description}
                </p>
              </div>

              {/* Preview + Info */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                {/* Preview text */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="col-span-2"
                >
                  <div className="bg-muted rounded-lg p-6 text-center">
                    <p className={item.className}>{item.preview}</p>
                  </div>
                </motion.div>

                {/* Metadata */}
                <div className="text-sm space-y-2">
                  <Copyable label="Font" value={item.font} />
                  <Copyable label="Weight" value={item.weight} />
                  <Copyable label="Size" value={item.size} />
                  <Copyable label="Line Height" value={item.lineHeight} />
                  <Copyable label="Letter Spacing" value={item.letterSpacing} />
                  <Copyable label="Preferred Tag" value={item.tag} />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
