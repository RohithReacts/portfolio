"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavigationMenuDemo() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const isAmerican = pathname.startsWith("/americantourister");

  // Navigation items
  const navItems = isAmerican
    ? [
        { href: "/americantourister/luggage", label: "Luggage" },
        { href: "/americantourister/backpacks", label: "Backpacks" },
        { href: "/americantourister/duffles", label: "Duffles" },
        { href: "/americantourister/connect", label: "Connect" },
        { href: "/", label: "Back" },
      ]
    : [
        { href: "#work", label: "Work" },
        { href: "#about", label: "About" },
        { href: "#connect", label: "Connect" },
        { href: "/americantourister", label: "Store" },
      ];

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href={isAmerican ? "/americantourister" : "/"}
          className="flex items-center space-x-2"
        >
          {isAmerican ? (
            <Image
              src="/assets/amt.png"
              alt="American Tourister Logo"
              width={120}
              height={40}
              priority
            />
          ) : (
            <span className="text-xl font-medium">Portfolio</span>
          )}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex bg-none">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    asChild
                    className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent`}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 ">
            {isOpen ? <X className="h-6 w-6 cursor-pointer" /> : <Menu className="h-6 w-6 cursor-pointer" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
