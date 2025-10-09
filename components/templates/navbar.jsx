"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");
  const pathname = usePathname();

  const navItems = [
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#connect", label: "Connect" },
    {
      href: "/",
      label: "Services",
      dropdown: [
        { href: "#apps", label: "Apps" },
        { href: "#blog", label: "Blog" },
        { href: "#testimonials", label: "Testimonials" },
        { href: "#team", label: "Team" },
        { href: "#skills", label: "Skills" },
        { href: "#templates", label: "Templates" },
      ],
    },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.filter((i) => i.href.startsWith("#"));
      let current = "";
      for (let item of sections) {
        const section = document.querySelector<HTMLElement>(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            current = item.href;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-medium text-gray-900 dark:text-gray-100">
            Portfolio
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <NavigationMenuItem key={item.href}>
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          className={`${navigationMenuTriggerStyle()} cursor-pointer flex items-center gap-1`}
                        >
                          {item.label} <ChevronDown className="w-4 h-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-white cursor-pointer dark:bg-gray-900 rounded-md shadow-lg">
                          {item.dropdown.map((drop) => (
                            <DropdownMenuItem key={drop.href} asChild>
                              <Link
                                href={drop.href}
                                className="w-full px-3 py-2 cursor-pointer text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
                              >
                                {drop.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </NavigationMenuItem>
                  );
                }

                return (
                  <NavigationMenuItem key={item.href}>
                    {item.href.startsWith("#") ? (
                      <a
                        href={item.href}
                        className={`${navigationMenuTriggerStyle()} ${
                          activeSection === item.href
                            ? "text-blue-600 dark:text-blue-400 font-semibold"
                            : "text-gray-800 dark:text-gray-200 cursor-pointer"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="text-gray-800 dark:text-gray-200"
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? (
              <X className="h-6 w-6 text-gray-800 dark:text-gray-200 cursor-pointer" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200 cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pb-4 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800"
          >
            <ul className="flex flex-col justify-center items-center space-y-2">
              {navItems.map((item) => (
                <li key={item.href} className="w-full text-center m-2 cursor-pointer">
                  {item.dropdown ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="w-full py-2 font-semibold text-gray-800 dark:text-gray-200 flex justify-center items-center gap-1">
                        {item.label} <ChevronDown className="w-4 h-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white dark:bg-gray-900 rounded-md shadow-lg w-full">
                        {item.dropdown.map((drop) => (
                          <DropdownMenuItem key={drop.href} asChild>
                            <Link
                              href={drop.href}
                              onClick={() => setIsOpen(false)}
                              className="block py-2 text-gray-700 cursor-pointer dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
                            >
                              {drop.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : item.href.startsWith("#") ? (
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 ${
                        activeSection === item.href
                          ? "text-blue-600 dark:text-blue-400 font-semibold"
                          : "text-gray-800 dark:text-gray-200 cursor-pointer"
                      }`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-gray-800 dark:text-gray-200 cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
