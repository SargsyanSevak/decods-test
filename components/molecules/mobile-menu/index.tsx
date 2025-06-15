"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { href: "/about", label: "About" },

  { href: "/hire-developer", label: "Hire Developer" },
];
const menuItemsBottom = [
  { href: "/portfolio", label: "Portfolio" },

  { href: "/articles", label: "Articles" },
];

const servicesItems = [
  { href: "/services/custom-software", label: "Custom Software Development" },
  {
    href: "/services/web-mobile",
    label: "Web and Mobile Applications Development",
  },
  { href: "/services/ui-ux", label: "UI/UX Design" },
  { href: "/services/devops", label: "DevOps" },
  { href: "/services/qa", label: "Quality Assurance" },
  { href: "/services/api-backend", label: "API and Backend Development" },
  { href: "/services/support", label: "Support & Maintenance" },
  { href: "/services/performance", label: "Web Performance Optimization" },
  { href: "/services/seo", label: "Website Audit & SEO" },
  { href: "/services/code-audit", label: "Code Audit & Refactoring" },
  { href: "/services/pwa", label: "Progressive Web Apps (PWA)" },
];

const MobileMenu = ({ scrolled }: { scrolled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setServicesOpen(false);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="relative z-50">
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-800"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X size={24} color={scrolled ? "black" : "#ffffff80"} />
        ) : (
          <Menu size={24} color={scrolled ? "black" : "#ffffff80"} />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={cn(
              "fixed inset-0 top-[76px] z-50 w-full h-screen dark-bg flex flex-col p-4  pb-10  overflow-y-auto",
              scrolled && "bg-white"
            )}
          >
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "paragraph border-b-[1px] border-b-white/15 py-4",
                  scrolled && "text-black border-b-zinc-200"
                )}
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={toggleServices}
              className={cn(
                "paragraph border-b-[1px] border-b-white/15  py-4 flex justify-between",
                servicesOpen && "border-none",
                scrolled && "text-black border-b-zinc-200"
              )}
            >
              Services
              {servicesOpen ? (
                <ChevronUp
                  className="ml-2"
                  size={20}
                  color={scrolled ? "black" : "white"}
                />
              ) : (
                <ChevronDown
                  className="ml-2"
                  size={20}
                  color={scrolled ? "black" : "white"}
                />
              )}
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "linear" }}
                  className={cn(
                    "flex flex-col space-y-3 pt-2 border-b-[1px] border-b-white/15 pb-5",
                    scrolled && " border-b-zinc-200"
                  )}
                >
                  {servicesItems.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "paragraph text-[#ffffff80]",
                        scrolled && "text-zinc-600 border-b-zinc-200"
                      )}
                    >
                      {service.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            {menuItemsBottom.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "paragraph border-b-[1px] border-b-white/15 py-4",
                  scrolled && "text-black border-b-zinc-200"
                )}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
