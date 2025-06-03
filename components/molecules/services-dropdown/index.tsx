"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  "Software Development Company",
  "Custom Software Development Services",
  "Enterprise Software Solutions",
  "Offshore Software Development",
  "Full-Cycle Software Development",
  "Digital Product Development Company",
  "IT Solutions Provider",
  "Software Engineering Services",
  "Trusted Software Development Partner",
  "End-To-End Software Development",
  "Custom Business Applications",
  "IT Consulting And Development Services",
];

const ServicesDropdown = ({ scrolled }: { scrolled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        name="services-btn"
        aria-label="services-btn"
        className={cn(
          "flex items-center gap-1 cursor-pointer text-white hover:text-gray-300",
          scrolled && "text-black hover:text-gray-700"
        )}
      >
        Services <ChevronDown size={16} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              "fixed left-0 top-[98px] w-full bg-black/70 backdrop-blur-md text-white z-40 p-10 rounded-none transition-all duration-300",
              scrolled && "bg-white"
            )}
          >
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
              {/* Left Block */}
              <div className="lg:w-1/3 space-y-4">
                <h2 className="text-4xl font-semibold">Our Services</h2>
                <h3 className="text-xl text-gray-300 font-medium">
                  Planning, Design,{" "}
                  <span className="text-white font-semibold">Develop</span>!
                </h3>
                <p className="text-sm text-gray-400">
                  DECODS brings together a team of expert developers and
                  innovators, delivering cutting-edge web development and
                  tailor-made software solutions.
                </p>
                <Link
                  href="/services"
                  className="inline-block mt-4 text-sm text-white hover:underline"
                >
                  Explore All Services →
                </Link>
              </div>

              {/* Right Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-3 text-sm lg:w-2/3">
                {services.map((label, idx) => (
                  <span
                    key={idx}
                    className="text-gray-200 hover:text-white transition-colors cursor-default"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesDropdown;
