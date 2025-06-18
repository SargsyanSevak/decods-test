"use client";

import { useState, useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/atoms/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [slidesPerView, setSlidesPerView] = useState(1.1); // default mobile

  useEffect(() => {
    const updateDimensions = () => {
      const newSlidesPerView = window.innerWidth < 768 ? 1 : 1.5;
      setSlidesPerView(newSlidesPerView);

      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setSlideWidth(width / newSlidesPerView);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const maxIndex = Math.max(0, slides.length - slidesPerView);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setCurrent((prev) => Math.min(prev + 1, maxIndex)),
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
        className="flex xl:gap-0 gap-4 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${current * slideWidth}px)`,
        }}
      >
        {slides.map((slide, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 xl:px-4 px-0"
            style={{ width: `${slideWidth}px` }}
          >
            <div className="overflow-hidden h-[400px]">
              <Image
                src={slide.image}
                alt={slide.title}
                width={400}
                height={420}
                className="rounded-[24px] xl:rounded-tl-[120px] rounded-tl-[80px]   xl:rounded-br-[120px] rounded-br-[24px]  object-cover w-full h-full"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-[24px] font-semibold text-black">
                {slide.title}
              </h3>
              <p className="paragraph font-medium slate-text mt-1">
                {slide.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full flex items-center xl:justify-start justify-center xl:pl-4 pl-0 gap-4 xl:mt-12 mt-8">
        <Button
          onClick={() => setCurrent((prev) => Math.max(prev - 1, 0))}
          className="!w-[56px] !h-[56px] !rounded-full  !p-0 bg-[#292929]"
          disabled={current <= 0}
        >
          <ChevronLeft
            color={current <= 0 ? "gray" : "white"}
            className="size-5"
          />
        </Button>
        <Button
          onClick={() => setCurrent((prev) => Math.min(prev + 1, maxIndex))}
          className="!w-[56px] !h-[56px] !rounded-full !p-0 bg-[#292929]"
          disabled={current >= maxIndex}
        >
          <ChevronRight
            color={current >= maxIndex ? "gray" : "white"}
            className="size-5"
          />
        </Button>
      </div>
    </div>
  );
};

export default MultiCarousel;
