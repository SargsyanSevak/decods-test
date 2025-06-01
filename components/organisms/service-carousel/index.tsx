"use client";

import { Button } from "@/components/atoms/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const slides = [
  {
    title: "Custom ERP and CRM development",
    image:
      "https://res.cloudinary.com/dprl3uqvi/image/upload/v1748778475/man-desk-with-two-computer_1_jh2hwu.png",
  },
  {
    title: "Advanced SaaS Platform Solutions",
    image:
      "https://res.cloudinary.com/dprl3uqvi/image/upload/v1748798977/ee500ca857cbc769e2c0db831cd2621e96167648_wmmq0s.jpg",
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

const ServiceCarousel = () => {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    setIndex(([current]) => [
      (current + newDirection + slides.length) % slides.length,
      newDirection,
    ]);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => paginate(1),
    onSwipedRight: () => paginate(-1),
    trackMouse: true,
  });

  const currentSlide = slides[index];

  return (
    <div className="w-full h-full">
      <h2 className="2xl:text-[54px] text-[40px] max-w-[1200px] text-center mx-auto">
        Leading Software Development Company – Comprehensive Custom Solutions
      </h2>
      <p className="text-[18px] leading-[30px] text-center italic font-semibold max-w-[893px] mx-auto mt-6">
        “The global custom software development market is projected to reach
        $146.18 billion by 2030, with businesses increasingly choosing tailored
        solutions over off-the-shelf alternatives to gain competitive advantage
        and operational efficiency.”
      </p>

      <div className="w-full mt-16 flex justify-center items-center">
        {/* Texts Start */}
        <div className="w-[calc(100%_-_600px)] min-h-[500px] 2xl:pr-20 pr-10 flex flex-col justify-between">
          <div className="w-full flex gap-10 justify-between">
            <div className="flex gap-4 w-full 2xl:max-w-[500px] max-w-[400px]">
              <div className="min-w-[2px] min-h-[240px] w-[2px] h-full bg-gradient-to-b from-[#292929] to-transparent opacity-60" />
              <p className="2xl:text-[16px] text-[14px] 2xl:leading-[23px] leading-[20px] font-medium">
                As a trusted software development company, Decods specializes in
                delivering custom software development services that transform
                business ideas into powerful digital solutions. Our offshore
                software development team combines global talent with
                cost-effective pricing. This approach makes enterprise software
                solutions accessible to businesses of all sizes.
              </p>
            </div>
            <div className="flex gap-4 w-full 2xl:max-w-[500px] max-w-[400px]">
              <div className="min-w-[2px] min-h-[240px] w-[2px] h-full bg-gradient-to-b from-[#292929] to-transparent opacity-60" />
              <p className="2xl:text-[16px] text-[14px] 2xl:leading-[23px] leading-[20px] font-medium">
                Our full-cycle software development covers every project aspect.
                From initial concept to ongoing maintenance. Whether you need
                custom business applications for workflow automation, enterprise
                software solutions for complex organizational needs, or digital
                product development for market-ready SaaS platforms, we provide
                comprehensive IT services that drive measurable business
                results.
              </p>
            </div>
          </div>
          <div className="w-full flex gap-10 justify-between mt-10">
            <div className="flex gap-4 w-full 2xl:max-w-[500px] max-w-[400px]">
              <div className="min-w-[2px] min-h-[240px] w-[2px] h-full bg-gradient-to-b from-[#292929] to-transparent opacity-60" />
              <p className="2xl:text-[16px] text-[14px] 2xl:leading-[23px] leading-[20px] font-medium">
                As a trusted software development company, Decods specializes in
                delivering custom software development services that transform
                business ideas into powerful digital solutions. Our offshore
                software development team combines global talent with
                cost-effective pricing. This approach makes enterprise software
                solutions accessible to businesses of all sizes.
              </p>
            </div>
            <div className="flex gap-4 w-full 2xl:max-w-[500px] max-w-[400px]">
              <div className="min-w-[2px] min-h-[240px] w-[2px] h-full bg-gradient-to-b from-[#292929] to-transparent opacity-60" />
              <p className="2xl:text-[16px] text-[14px] 2xl:leading-[23px] leading-[20px] font-medium">
                Our full-cycle software development covers every project aspect.
                From initial concept to ongoing maintenance. Whether you need
                custom business applications for workflow automation, enterprise
                software solutions for complex organizational needs, or digital
                product development for market-ready SaaS platforms, we provide
                comprehensive IT services that drive measurable business
                results.
              </p>
            </div>
          </div>
        </div>
        {/* Texts End */}

        {/* Carousel Start */}
        <div className="w-[600px] h-[500px] flex flex-col">
          <div
            {...swipeHandlers}
            className="relative w-full h-full bg-black rounded-[25px] rounded-tl-[180px] rounded-br-[180px] overflow-hidden"
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute w-full h-full top-0 left-0"
                style={{
                  backgroundImage: `url(${currentSlide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/50 flex justify-start items-end px-[30px] py-[20px]">
                  <h2 className="text-[22px] font-medium text-white">
                    {currentSlide.title}
                  </h2>
                </div>
                <div className="absolute -bottom-0 left-0">
                  <Image
                    src="https://res.cloudinary.com/dprl3uqvi/image/upload/v1748778997/Vector_3_yyjmvj.png"
                    width={200}
                    height={125}
                    alt="logo"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="w-full flex justify-center items-center gap-4 mt-6">
            <Button
              onClick={() => paginate(-1)}
              className="!w-[72px] !h-[48px] !rounded-[160px] !p-0 bg-[#292929]"
            >
              <ArrowLeft />
            </Button>
            <Button
              onClick={() => paginate(1)}
              className="!w-[72px] !h-[48px] !rounded-[160px] !p-0 bg-[#292929]"
            >
              <ArrowRight />
            </Button>
          </div>
        </div>
        {/* Carousel End */}
      </div>
    </div>
  );
};

export default ServiceCarousel;
