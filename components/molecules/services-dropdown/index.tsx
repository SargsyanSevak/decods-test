"use client";
import { useCallback, useState, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { servicesleft, servicesRight } from "@/mock";
import FadeContent from "../fade-content";

const ServicesDropdown = ({ scrolled }: { scrolled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsOpen(false);
  }, []);

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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <FadeContent>
        <button
          name="services-btn"
          aria-label="services-btn"
          className={cn(
            "flex items-center gap-1 cursor-pointer dark-bg-text hover:text-white transition-all duration-300 ease-in-out h-[70px]",
            scrolled && "text-black hover:text-gray-700"
          )}
        >
          Services <ChevronDown size={16} />
        </button>
      </FadeContent>

      <div
        className={cn(
          "fixed left-0 top-[76px] w-full bg-black/80 backdrop-blur-md text-white z-[9999] p-10  pb-20 rounded-none transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          scrolled && "bg-white"
        )}
        style={{
          transition: "opacity 0.3s ease-in-out",
          boxShadow: scrolled ? "0 8px 10px -6px rgba(0, 0, 0, 0.1)" : "none",
        }}
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
                "text-white text-[44px] leading-[100%] font-bold",
                scrolled && "text-black"
              )}
            >
              Our Services
            </h2>
            <p
              className={cn(
                "text-[44px] leading-[100%] dark-bg-text mt-1 font-bold",
                scrolled && "text-[#1e1e1e]"
              )}
            >
              Planning, Design, Develop !
            </p>
            <p
              className={cn(
                "paragraph dark-bg-text mt-4 font-medium",
                scrolled && "text-[#05050580]"
              )}
            >
              DECODS brings together a team of expert developers and innovators,
              delivering cutting-edge web development and tailor-made software
              solutions.
            </p>
            <Link
              href="/services"
              className="flex items-center gap-2 text-[16px] font-bold mt-20"
            >
              Explore All Services <ArrowRight className="rotate-[-45deg]" />
            </Link>
          </div>

          {/* Right Grid */}
          <div
            className={cn(
              "text-white flex gap-20 pt-8",
              scrolled && "text-black"
            )}
          >
            <ul
              className={
                "flex flex-col gap-[6px] text-[16px] font-medium max-w-[220px]"
              }
            >
              {servicesleft.map((el) => (
                <li key={el.id}>
                  <Link
                    href={el.href}
                    className={cn(
                      "transition-colors duration-200",
                      scrolled
                        ? "text-[#05050580] group-hover:text-[#d1d1d1] hover:text-black"
                        : "dark-bg-text group-hover:text-[#4d4d4d] hover:text-white"
                    )}
                  >
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul
              className={
                "flex flex-col gap-[5px]  max-w-[220px] text-[16px] font-medium"
              }
            >
              {servicesRight.map((el) => (
                <li key={el.id}>
                  <Link
                    href={el.href}
                    className={cn(
                      "transition-colors duration-200",
                      scrolled
                        ? "text-[#05050580] group-hover:text-[#d1d1d1] hover:text-black"
                        : "dark-bg-text group-hover:text-[#4d4d4d] hover:text-white"
                    )}
                  >
                    {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
