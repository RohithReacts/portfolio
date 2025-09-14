"use client";

import React from "react";
import Link from "next/link";
import {
  Globe,
  Truck,
  Award,
  Store,
  Headphones,
  Link as LinkIcon,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function AmericanTouristerCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 md:py-14">
      {/* Header */}
      <header className="mb-8 md:mb-14 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold text-neutral-900 dark:text-neutral-100">
          American Tourister — Services & Info
        </h2>
        <p className="mt-3 text-sm md:text-base text-neutral-600 dark:text-neutral-400">
          Quick access to warranty, delivery, support and useful guides.
        </p>
      </header>

      {/* Grid Layout */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* International Warranty */}
        <Card className="flex flex-col justify-between hover:shadow-lg transition-shadow">
          <CardHeader>
            <Globe className="w-6 h-6 text-neutral-700 dark:text-neutral-300 mb-3" />
            <CardTitle>International Warranty</CardTitle>
            <CardDescription>
              American Tourister is a trusted global brand offering high-quality
              travel products like luggage, backpacks, and accessories. With a
              presence in 120+ countries, it's a go-to for millions of travelers.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex items-center justify-between text-xs">
            <span className="text-neutral-500 dark:text-neutral-400">
              Since 1933 • Global Support
            </span>
            <Link
              href="https://americantourister.in/pages/brand-story"
              className="text-sm font-medium hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              Learn more
            </Link>
          </CardFooter>
        </Card>

        {/* Fast Delivery */}
        <Card className="flex flex-col justify-between hover:shadow-lg transition-shadow">
          <CardHeader>
            <Truck className="w-6 h-6 text-neutral-700 dark:text-neutral-300 mb-3" />
            <CardTitle>Fast Delivery</CardTitle>
            <CardDescription>
              We deliver online orders to most of India within 5-7 working days
              via efficient courier services.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex items-center justify-between text-xs">
            <span className="text-neutral-500 dark:text-neutral-400">
              Domestic Shipping
            </span>
            <Link
              href="https://americantourister.in/pages/fun-is-where-you-take-it"
              className="text-sm font-medium hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              Shipping info
            </Link>
          </CardFooter>
        </Card>

        {/* Trusted Globally */}
        <Card className="flex flex-col justify-between hover:shadow-lg transition-shadow">
          <CardHeader>
            <Award className="w-6 h-6 text-neutral-700 dark:text-neutral-300 mb-3" />
            <CardTitle>Trusted Globally</CardTitle>
            <CardDescription>
              American Tourister innovates with award-winning luggage produced
              with world-class quality standards.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex items-center justify-between text-xs">
            <span className="text-neutral-500 dark:text-neutral-400">
              Award-winning design
            </span>
            <Link
              href="https://americantourister.in/pages/travel-with-friends"
              className="text-sm font-medium hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              Our story
            </Link>
          </CardFooter>
        </Card>

        {/* Store */}
        <Card className="sm:col-span-2 lg:col-span-1 hover:shadow-lg transition-shadow">
          <CardHeader>
            <Store className="w-6 h-6 text-neutral-700 dark:text-neutral-300 mb-3" />
            <CardTitle>Full Original Store</CardTitle>
            <CardDescription>
              One-stop shop for exploring the complete American Tourister
              collection online.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Link
              href="/store"
              className="inline-block px-3 py-1 rounded-full border text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              Shop All
            </Link>
            <Link
              href="/new-arrivals"
              className="inline-block px-3 py-1 rounded-full border text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              New Arrivals
            </Link>
            <Link
              href="/best-sellers"
              className="inline-block px-3 py-1 rounded-full border text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              Best Sellers
            </Link>
          </CardContent>
        </Card>

        {/* Support */}
        <Card className="sm:col-span-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <Headphones className="w-6 h-6 text-neutral-700 dark:text-neutral-300 mb-3" />
            <CardTitle>Support</CardTitle>
            <CardDescription>
              Need help? Find service options, warranty details, returns and
              contact info below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: "Service and Warranty",
                  desc: "Authorized service centres & warranty claims",
                },
                {
                  title: "Return and Exchange",
                  desc: "Hassle-free returns within policy window",
                },
                { title: "Contact", desc: "Customer care & store locations" },
                {
                  title: "TSA Lock Instructions",
                  desc: "How to set and reset TSA locks",
                },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-neutral-200 dark:bg-neutral-700 mt-1" />
                  <div>
                    <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      {item.title}
                    </div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">
                      {item.desc}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-3">
            <Link
              href="https://americantourister.in/pages/service-and-warranty"
              className="px-4 py-2 rounded-lg border font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              Visit Support
            </Link>
            <Link
              href="/americantourister/connect"
              className="px-4 py-2 rounded-lg bg-neutral-900 text-white font-medium hover:bg-neutral-800"
            >
              Contact Us
            </Link>
          </CardFooter>
        </Card>

        {/* Quick Links */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <LinkIcon className="w-6 h-6 text-neutral-700 dark:text-neutral-300 mb-3" />
            <CardTitle>Quick Links</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                {
                  label: "Damage Policy",
                  href: "https://americantourister.in/pages/damage-policy",
                },
                {
                  label: "Care and Cleaning",
                  href: "https://americantourister.in/pages/care-and-cleaning",
                },
                {
                  label: "Packing Tips",
                  href: "https://americantourister.in/pages/packing-tips",
                },
                {
                  label: "Sustainability",
                  href: "https://americantourister.in/pages/sustainability",
                },
                { label: "Account", href: "/account" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-neutral-800 dark:hover:text-neutral-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
