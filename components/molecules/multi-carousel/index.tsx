"use client";

import { useState, useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/atoms/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface MultiCarouselProps {
  slides: {
    title: string;
    description: string;
    image: string;
  }[];
}

const MultiCarousel = ({ slides }: MultiCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const slidesPerView =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1.1 : 1.5;

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setSlideWidth(width / slidesPerView);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [slidesPerView]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrent((prev) =>
        Math.min(prev + 1, slides.length - Math.ceil(slidesPerView))
      ),
    onSwipedRight: () => setCurrent((prev) => Math.max(prev - 1, 0)),
    trackMouse: true,
  });

  return (
    <div
      className="relative overflow-hidden"
      {...swipeHandlers}
      ref={containerRef}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${current * slideWidth}px)`,
        }}
      >
        {slides.map((slide, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 px-4"
            style={{ width: `${slideWidth}px` }}
          >
            <div className="overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.title}
                width={486}
                height={324}
                className="rounded-[3px] rounded-tl-[80px] rounded-br-[80px] object-contain w-full h-full"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-[28px] font-semibold text-black">
                {slide.title}
              </h3>
              <p className="paragraph font-normal mt-1 2xl:leading-[23px] leading-[20px]">
                {slide.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full flex justify-center items-center gap-4 mt-12">
        <Button
          onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
          className="!w-[72px] !h-[48px] !rounded-[160px] !p-0 bg-[#292929]"
          disabled={current === 0}
        >
          <ArrowLeft />
        </Button>
        <Button
          onClick={() =>
            setCurrent((prev) =>
              Math.min(prev + 1, slides.length - Math.ceil(slidesPerView))
            )
          }
          className="!w-[72px] !h-[48px] !rounded-[160px] !p-0 bg-[#292929]"
          disabled={current >= slides.length - Math.ceil(slidesPerView)}
        >
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default MultiCarousel;
