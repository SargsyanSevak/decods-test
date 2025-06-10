import { Button } from "@/components/atoms/button";
import { AnimatedCounter, MultiCarousel } from "@/components/molecules";
import { slides } from "@/mock";
import React from "react";

const DevelopmentProcess = () => {
  return (
    <div className="w-full flex justify-between 2xl:gap-20 gap-16 ralative overflow-hidden">
      {/* Left Side  Start*/}
      <div className="w-[50%] max-w-[700px]">
        <h2 className="section-title text-black">
          Our Proven Development Process
        </h2>
        <p className="paragraph mt-6 max-w-[620px] text-[#05050580]">
          At Decods, we&lsquo;ve refined our software development process
          through hundreds of successful projects. This creates a methodology
          that balances agile development principles with predictable outcomes.
          Our end-to-end software development approach ensures that every custom
          software solution we deliver not only meets technical requirements but
          drives real business value from day one.
        </p>

        <div className="w-full flex justify-between mt-10">
          <div className="flex gap-3  min-w-[240px] h-[300px]">
            <div className="flex flex-col justify-between gap-16 p-4 border-l-[1px] border-l-[#05050529] h-full">
              <h2 className="sub-title text-[#292929]">
                <AnimatedCounter to={100} duration={1} />+
              </h2>
              <p className="text-[16px] leading-[20px] font-medium text-black">
                100+ happy customers who have contacted us.
              </p>
            </div>
          </div>

          <div className="flex gap-3  min-w-[240px]  h-[300px]">
            <div className="flex flex-col justify-between gap-16 p-4 border-l-[1px] border-l-[#05050529] h-full">
              <h2 className="sub-title text-[#292929]">
                <AnimatedCounter to={150} duration={1} />+
              </h2>
              <p className="text-[16px] leading-[20px] font-medium text-black">
                Resolved technical issues within the first hour.
              </p>
            </div>
          </div>

          <div className="flex gap-3 min-w-[240px] h-[300px]">
            <div className="flex flex-col justify-between gap-16 p-4 border-l-[1px] border-l-[#05050529] h-full">
              <h2 className="sub-title text-[#292929] whitespace-nowrap">
                <AnimatedCounter to={5} duration={1} />X <br /> Faster
              </h2>
              <p className="text-[16px] leading-[20px] font-medium text-black">
                IT solution deployment vs. in-house teams.
              </p>
            </div>
          </div>
        </div>

        <p className="paragraph mt-20 text-[#05050580] max-w-[577px]">
          This proven software development methodology has helped us maintain a
          98% client satisfaction rate. We establish long-term partnerships
          across diverse industries. Whether you&apos;re building a minimum
          viable product (MVP) for market validation or developing
          enterprise-grade software solutions, our process adapts to your
          specific timeline, budget, and technical constraints.
        </p>
        <Button
          iconArrow
          iconPosition="right"
          variant="default"
          className="w-[171px] mt-10"
        >
          About Us
        </Button>
      </div>
      {/* Left Side  End*/}

      {/* Carousel Start*/}
      <div className="w-[50%] mt-2">
        <MultiCarousel slides={slides} />
      </div>
      {/* Carousel End*/}
    </div>
  );
};

export default DevelopmentProcess;
