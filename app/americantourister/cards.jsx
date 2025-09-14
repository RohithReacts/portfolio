"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSize() {
  const images = [
    "/assets/baby.jpg",
    "/assets/circurity.jpg",
    "/assets/fast.jpg",
    "/assets/alcove.jpg",
    "/assets/air.webp",
  ]; // store images in public/assets folder

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-6xl mx-auto mt-6"
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className="basis-full sm:basis-1/2 lg:basis-1/3"
          >
            <div className="p-2">
              <Card className="overflow-hidden rounded-2xl shadow-md">
                <CardContent className="relative aspect-[4/6] p-0">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Navigation arrows */}
      <CarouselPrevious className="left- bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-md" />
      <CarouselNext className="right- bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-md" />
    </Carousel>
  );
}
