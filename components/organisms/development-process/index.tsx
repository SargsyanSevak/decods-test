import { Button } from "@/components/atoms/button";
import {
  AnimatedCounter,
  FadeContent,
  MultiCarousel,
} from "@/components/molecules";
import { slides } from "@/mock";
import React from "react";

const DevelopmentProcess = () => {
  return (
    <div className="w-full flex justify-between 2xl:gap-20 gap-16 xl:flex-row flex-col ralative overflow-hidden">
      {/* Left Side  Start*/}
      <div className="xl:w-[50%] w-full max-w-[700px]">
        <FadeContent>
          <h2 className="section-title text-black">
            Our Proven Development Process
          </h2>
        </FadeContent>
        <FadeContent>
          <p className="paragraph mt-6 xl:max-w-[620px] max-w-full slate-text">
            At Decods, we&lsquo;ve refined our software development process
            through hundreds of successful projects. This creates a methodology
            that balances agile development principles with predictable
            outcomes. Our end-to-end software development approach ensures that
            every custom software solution we deliver not only meets technical
            requirements but drives real business value from day one.
          </p>
        </FadeContent>

        <div className="w-full flex xl:flex-row flex-col xl:gap-0 gap-2 justify-between mt-10">
          <div className="flex gap-3  min-w-[240px] xl:h-[300px] h-fit">
            <div className="flex flex-col justify-between xl:gap-16 gap-6 p-4 border-l-[1px] border-l-[#05050529] h-full">
              <h2 className="sub-title text-[#292929]">
                <AnimatedCounter to={100} duration={1} />+
              </h2>
              <FadeContent>
                <p className="text-[16px] leading-[20px] font-medium text-black">
                  100+ happy customers who have contacted us.
                </p>
              </FadeContent>
            </div>
          </div>

          <div className="flex gap-3  min-w-[240px] xl:h-[300px] h-fit">
            <div className="flex flex-col justify-between xl:gap-16 gap-6 p-4 border-l-[1px] border-l-[#05050529] h-full">
              <h2 className="sub-title text-[#292929]">
                <AnimatedCounter to={150} duration={1} />+
              </h2>
              <FadeContent>
                <p className="text-[16px] leading-[20px] font-medium text-black">
                  Resolved technical issues within the first hour.
                </p>
              </FadeContent>
            </div>
          </div>

          <div className="flex gap-3 min-w-[240px] xl:h-[300px] h-fit">
            <div className="flex flex-col justify-between xl:gap-16 gap-6 p-4 border-l-[1px] border-l-[#05050529] h-full">
              <h2 className="sub-title text-[#292929] whitespace-nowrap">
                <AnimatedCounter to={5} duration={1} />X <br /> Faster
              </h2>
              <FadeContent>
                <p className="text-[16px] leading-[20px] font-medium text-black">
                  IT solution deployment vs. in-house teams.
                </p>
              </FadeContent>
            </div>
          </div>
        </div>
        <FadeContent>
          <p className="paragraph xl:mt-20 mt-16 slate-text max-w-[577px]">
            This proven software development methodology has helped us maintain
            a 98% client satisfaction rate. We establish long-term partnerships
            across diverse industries. Whether you&apos;re building a minimum
            viable product (MVP) for market validation or developing
            enterprise-grade software solutions, our process adapts to your
            specific timeline, budget, and technical constraints.
          </p>
        </FadeContent>

        <FadeContent className="overflow-hidden">
          <Button
            iconArrow
            iconPosition="right"
            variant="default"
            className="w-[171px] mt-10 [@media(max-width:460px)]:w-full"
          >
            About Us
          </Button>
        </FadeContent>
      </div>
      {/* Left Side  End*/}

      {/* Carousel Start*/}
      <div className="xl:w-[50%] w-full xl:mt-2 mt-0">
        <MultiCarousel slides={slides} />
      </div>
      {/* Carousel End*/}
    </div>
  );
};

export default DevelopmentProcess;
