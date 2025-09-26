"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [mobileDropdown, setMobileDropdown] = React.useState(null);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = React.useState("");

  const isAmerican = pathname.startsWith("/americantourister");

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
        { href: "#projects", label: "Projects" },
        { href: "#about", label: "About" },
        { href: "#connect", label: "Connect" },

        {
          href: "/",
          label: "Menu",
          dropdown: [
            { href: "#themes", label: "Themes" },
            { href: "#blog", label: "Blog" },
            { href: "#testimonials", label: "Testimonials" },
          ],
        },

        { href: "/americantourister", label: "Store" },
      ];

  React.useEffect(() => {
    if (isAmerican) return;

    const handleScroll = () => {
      const sections = navItems.filter((i) => i.href.startsWith("#"));
      let current = "";
      for (let item of sections) {
        const section = document.querySelector < HTMLElement > item.href;
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
  }, [navItems, isAmerican]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href={isAmerican ? "/americantourister" : "/"}
          className="flex items-center space-x-2"
        >
          {isAmerican ? (
            <Image
              src="/images/amt.png"
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
        <div className="hidden md:flex">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuTrigger
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-gray-900 rounded-md">
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="flex flex-col space-y-2"
                        >
                          {item.dropdown.map((drop) => (
                            <li key={drop.href}>
                              <Link
                                href={drop.href}
                                className="flex px-2 py-1 hover:bg-gray-800 rounded"
                              >
                                {drop.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      </NavigationMenuContent>
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
                            : ""
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link href={item.href}>{item.label}</Link>
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
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
            className="md:hidden px-4 pb-4"
          >
            <ul className="flex flex-col justify-center items-center space-y-2">
              {navItems.map((item) => (
                <li key={item.href} className="w-full text-center">
                  {item.dropdown ? (
                    <>
                      <button
                        className="flex justify-center items-center w-full py-2 font-semibold"
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === item.href ? null : item.href
                          )
                        }
                      >
                        {item.label}
                      </button>
                      <AnimatePresence>
                        {mobileDropdown === item.href && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col space-y-1 overflow-hidden"
                          >
                            {item.dropdown.map((drop) => (
                              <li key={drop.href}>
                                <Link
                                  href={drop.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block py-2"
                                >
                                  {drop.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : item.href.startsWith("#") ? (
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2 ${
                        activeSection === item.href
                          ? "text-blue-600 dark:text-blue-400 font-semibold"
                          : ""
                      }`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2"
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
