import { Button } from "@/components/atoms/button";
import { AnimatedCounter, MultiCarousel } from "@/components/molecules";
import { slides } from "@/mock";
import React from "react";

const DevelopmentProcess = () => {
  return (
    <div className="w-full flex justify-between 2xl:gap-20 gap-16 ralative">
      {/* Left Side  Start*/}
      <div className="w-[50%] max-w-[700px]">
        <h2 className="text-[48px] leading-[56px]">
          Our Proven Development Process
        </h2>
        <p className="paragraph mt-8 2xl:leading-[27px] leading-[24px] max-w-[677px]">
          At Decods, we&lsquo;ve refined our software development process
          through hundreds of successful projects. This creates a methodology
          that balances agile development principles with predictable outcomes.
          Our end-to-end software development approach ensures that every custom
          software solution we deliver not only meets technical requirements but
          drives real business value from day one.
        </p>

        <div className="w-full flex justify-between gap-8 mt-10">
          <div className="flex gap-3 max-w-[200px]">
            <div className="min-w-[2px] h-[170px] w-[2px] bg-gradient-to-b from-[#292929] to-transparent opacity-60" />
            <div className="flex flex-col gap-16">
              <h2 className="sub-title text-[#292929]">
                <AnimatedCounter to={100} duration={1} />+
              </h2>
              <p className="paragraph 2xl:leading-[24px] leading-[20px]">
                100+ happy customers who have contacted us.
              </p>
            </div>
          </div>

          <div className="flex gap-3 max-w-[200px]">
            <div className="min-w-[2px] h-[170px] w-[2px] bg-gradient-to-b from-[#292929] to-transparent opacity-60" />
            <div className="flex flex-col gap-16">
              <h2 className="sub-title text-[#292929]">
                <AnimatedCounter to={150} duration={1} />+
              </h2>
              <p className="paragraph 2xl:leading-[24px] leading-[20px]">
                Resolved technical issues within the first hour.
              </p>
            </div>
          </div>

          <div className="flex gap-3 max-w-[200px]">
            <div className="min-w-[2px] h-[170px] w-[2px] bg-gradient-to-b from-[#292929] to-transparent opacity-60" />
            <div className="flex flex-col gap-16">
              <h2 className="sub-title text-[#292929] whitespace-nowrap">
                <AnimatedCounter to={5} duration={1} />X Faster
              </h2>
              <p className="paragraph 2xl:leading-[24px] leading-[20px]">
                IT solution deployment vs. in-house teams.
              </p>
            </div>
          </div>
        </div>

        <p className="paragraph mt-10 2xl:leading-[27px] leading-[24px] max-w-[677px]">
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
          variant="secondary"
          className="mt-6 w-[150px]"
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
