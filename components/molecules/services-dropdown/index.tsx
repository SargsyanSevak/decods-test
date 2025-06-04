"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { servicesleft, servicesRight } from "@/mock";

const ServicesDropdown = ({ scrolled }: { scrolled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={cn(
              "fixed left-0 top-[84px] w-full bg-black/70 backdrop-blur-md text-white z-40 p-10 pb-20 rounded-none transition-all duration-300",
              scrolled && "bg-white"
            )}
          >
            <div className="mx-auto flex flex-col lg:flex-row justify-between gap-10 content">
              {/* Left Block */}
              <div
                className={cn(
                  "max-w-[400px] font-medium",
                  scrolled && "text-black"
                )}
              >
                <h2
                  className={cn(
                    "text-white text-[54px] font-medium",
                    scrolled && "text-black"
                  )}
                >
                  Our Services
                </h2>
                <p
                  className={cn(
                    "text-[30px] text-[#B4B4B4] mt-1 font-medium",
                    scrolled && "text-[#5e5e5e]"
                  )}
                >
                  Planning, Design, Develop !
                </p>
                <p
                  className={cn(
                    "paragraph text-[#B4B4B4] mt-4 font-medium",
                    scrolled && "text-[#212121]"
                  )}
                >
                  DECODS brings together a team of expert developers and
                  innovators, delivering cutting-edge web development and
                  tailor-made software solutions.
                </p>
                <Link
                  href="/services"
                  className="flex items-center gap-2 text-[16px] mt-10"
                >
                  Explore All Services{" "}
                  <ArrowRight className="rotate-[-45deg]" />
                </Link>
              </div>

              {/* Right Grid */}
              <div
                className={cn(
                  "text-white flex gap-20  pt-8",
                  scrolled && "text-black"
                )}
              >
                <ul className={"flex flex-col gap-6 text-[16px] font-medium"}>
                  {servicesleft.map((el) => (
                    <li key={el.id}>
                      <Link href={el.href}>{el.title}</Link>
                    </li>
                  ))}
                </ul>
                <ul className={"flex flex-col gap-6 text-[16px] font-medium"}>
                  {servicesRight.map((el) => (
                    <li key={el.id}>
                      <Link href={el.href}>{el.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesDropdown;
