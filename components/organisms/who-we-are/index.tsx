import { IconArrowRotated } from "@/assets";
import { Button } from "@/components/atoms/button";
import { AnimatedCounter, FadeContent, FadeDown } from "@/components/molecules";
import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <div className="w-full flex flex-col md:gap-[100px] gap-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-10 items-center">
        {/* Text Block */}
        <div
          className={`lg:h-[500px] h-fit flex flex-col gap-2 lg:max-w-[430px] max-w-full order-1 lg:order-1`}
        >
          <FadeContent>
            <h2 className="section-title font-bold text-white">Who We Are</h2>
          </FadeContent>

          <FadeContent>
            <p className="paragraph dark-bg-text mt-5">
              We&apos;re a team of software engineering experts who turn complex
              business challenges into elegant digital solutions. At Decods, we
              combine deep technology consulting background with business-first
              thinking to deliver custom software that drives real results.
            </p>
          </FadeContent>

          <FadeContent>
            <p className="paragraph dark-bg-text mt-4">
              Our company mission is simple: be the offshore development partner
              you can trust with your most important projects. We don&apos;t
              just write code — we build solutions that scale with your business
              and create lasting value.
            </p>
          </FadeContent>

          <div className="w-full flex sm:flex-row flex-col xl:gap-0 gap-2 justify-between mt-10 max-w-[591px]">
            <div className="flex gap-3  md:min-w-[200px] h-fit">
              <div className="flex flex-col justify-between xl:gap-16 gap-6 p-4 border-l-[1px] border-l-[#999999] h-full">
                <h2 className="sub-title text-white">
                  <AnimatedCounter to={200} duration={1} />+
                </h2>
                <FadeContent>
                  <p className="paragraph leading-[20px] text-white">
                    Completed Projects
                  </p>
                  <span className="text-[14px] dark-bg-text mt-1">
                    2013-2025
                  </span>
                </FadeContent>
              </div>
            </div>

            <div className="flex gap-3  md:min-w-[200px] h-fit">
              <div className="flex flex-col justify-between xl:gap-16 gap-6 p-4 border-l-[1px] border-l-[#999999] h-full">
                <h2 className="sub-title text-white">
                  <AnimatedCounter to={20} duration={1} />+
                </h2>
                <FadeContent>
                  <p className="paragraph leading-[20px] text-white whitespace-nowrap">
                    In-House Team Members
                  </p>
                  <span className="text-[14px] dark-bg-text mt-1">
                    Wyoming & Worldwide
                  </span>
                </FadeContent>
              </div>
            </div>
          </div>
        </div>

        {/* Image Block */}
        <div
          className={`lg:h-[500px] md:h-[400px] h-[360px] rounded-[24px] overflow-hidden order-2 lg:order-2 rounded-tl-[80px] lg:rounded-tl-[120px] lg:rounded-tr-[24px]`}
        >
          <Image
            src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750228299/d6eca39e51fdbd4216c95d62e360abb944855c0e_vvyxbf.webp"
            width={715}
            height={550}
            alt="How we work"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-10 items-center">
        {/* Text Block */}
        <div
          className={`lg:h-[500px] h-fit flex flex-col gap-2 lg:max-w-[600px] max-w-full order-1 lg:order-2`}
        >
          <FadeContent>
            <h2 className="section-title font-bold text-white">
              Why Choose Decods
            </h2>
          </FadeContent>

          <FadeContent>
            <h3 className="section-sub-title text-white font-semibold mt-1">
              Proven Track Record
            </h3>
          </FadeContent>
          <FadeDown>
            <FadeContent>
              <p className="paragraph dark-bg-text mt-2">
                200+ successful projects delivered since 2020, from startup MVPs
                to enterprise-grade platforms. Our clients range from innovative
                startups to established businesses across North America and
                Europe.
              </p>
            </FadeContent>
          </FadeDown>

          <FadeDown>
            <Button
              iconArrow
              iconPosition="right"
              variant="secondary"
              className="mt-10 w-[160px] [@media(max-width:460px)]:w-full"
            >
              Services
            </Button>
          </FadeDown>
        </div>

        {/* Image Block */}
        <div
          className={`lg:h-[500px] md:h-[400px] h-[360px] rounded-[24px] overflow-hidden order-2 lg:order-1 rounded-tr-[80px] lg:rounded-tr-[120px]`}
        >
          <Image
            src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750228339/e22e7cbca0bdc8e4d804b8380d796809dbd6f00b_nszzfj.webp"
            width={715}
            height={550}
            alt="How we work"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
        <FadeDown
          className={`relative flex flex-col justify-between z-10 slate-bg rounded-[24px] px-[20px] py-[16px] min-h-[250px] h-fit`}
        >
          <FadeContent delay={150}>
            <h2 className="2xl:text-[24px] text-[18px] text-white font-semibold">
              Global Tech Talent
            </h2>
          </FadeContent>
          <FadeContent className="pt-4">
            <p className="paragraph dark-bg-text">
              Access to a carefully curated team of 15+ software development
              experts. We combine the advantages of offshore development with
              the reliability and communication standards you expect.
            </p>
          </FadeContent>
          <FadeContent>
            <a
              href=""
              className="flex items-center gap-3 paragraph font-semibold  w-fit"
            >
              Work with us <IconArrowRotated />
            </a>
          </FadeContent>
        </FadeDown>

        <FadeDown
          className={`relative flex flex-col justify-between z-10 slate-bg rounded-[24px] px-[20px] py-[16px]  min-h-[250px]`}
        >
          <FadeContent delay={150}>
            <h2 className="2xl:text-[24px] text-[18px] text-white font-semibold">
              Business-Focused Development
            </h2>
          </FadeContent>
          <FadeContent className="pt-4">
            <p className="paragraph dark-bg-text">
              We speak your language — whether you&apos;re a CTO evaluating
              technical approaches, a PM managing timelines, or a CEO focused on
              ROI. Every solution is designed with your business goals in mind.
            </p>
          </FadeContent>
          <FadeContent>
            <a
              href=""
              className="flex items-center gap-3 paragraph font-semibold  w-fit"
            >
              See our work <IconArrowRotated />
            </a>
          </FadeContent>
        </FadeDown>

        <FadeDown
          className={`relative flex flex-col justify-between z-10 slate-bg rounded-[24px] px-[20px] py-[16px]  min-h-[250px]`}
        >
          <FadeContent delay={150}>
            <h2 className="2xl:text-[24px] text-[18px] text-white font-semibold">
              Transparent Partnership
            </h2>
          </FadeContent>
          <FadeContent className="pt-4">
            <p className="paragraph dark-bg-text">
              Clear pricing, realistic timelines, and honest communication. No
              surprises, no hidden costs. We believe in building trust through
              transparency and delivering exactly what we promise.
            </p>
          </FadeContent>
          <FadeContent>
            <a
              href=""
              className="flex items-center gap-3 paragraph font-semibold w-fit"
            >
              We&apos;re hiring <IconArrowRotated />
            </a>
          </FadeContent>
        </FadeDown>
      </div>
    </div>
  );
};

export default WhoWeAre;
