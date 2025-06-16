import { ScrollArea, ScrollBar } from "@/components/atoms/scroll-area";
import { ChooseBlocks, FadeContent, TextCard } from "@/components/molecules";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="w-full relative">
      <FadeContent>
        <h2 className="section-title max-w-[724px]">Why Choose Decods</h2>
      </FadeContent>
      <FadeContent delay={100}>
        <p className="paragraph dark-bg-text max-w-[620px] mt-6">
          When you partner with Decods, you&apos;re choosing a reliable
          development partner committed to delivering exceptional results. Our
          offshore software development model provides significant cost
          advantages—typically 40-60% lower than onshore alternatives. Quality
          and communication standards remain uncompromised.
        </p>
      </FadeContent>
      <FadeContent delay={150}>
        {" "}
        <p className="lg:text-[32px] text-[24px] lg:leading-[36px] leading-[28px] text-white font-semibold max-w-[576px] mt-10">
          What Makes Decods Different from Other Software Development Companies
        </p>
      </FadeContent>

      <div className="dark-bg text-white  py-12 pb-0">
        <ScrollArea className="w-full sm:hidden block -mb-10">
          <ChooseBlocks />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <div className="xl:grid sm:flex hidden flex-col grid-cols-1 md:grid-cols-3 grid-rows-3 2xl:gap-6 xl:gap-4 gap-2 relative">
          {/* 01 */}
          <TextCard
            className="row-start-1 col-start-1 "
            title="48-Hour Team Assembly"
            description="Most competitors take weeks to start. We can 
assemble your dedicated development team and begin 
coding within 48 hours. Our pre-vetted developer pool 
and streamlined onboarding process ensure immediate 
productivity."
          />
          {/* 02 */}
          <TextCard
            className="row-start-1 col-start-2 "
            title="Zero-Documentation-Gap Policy"
            description="Every line of code comes with comprehensive 
documentation. Our developers create detailed 
technical specifications, API documentation, and 
deployment guides. Knowledge transfer becomes 
seamless. Future maintenance stays straightforward."
          />
          {/* Image */}
          <div className="row-start-1 row-span-1 col-start-3 2xl:-mb-[270px] xl:-mb-[220px] -mb-0 xl:h-auto h-[400px] xl:-mt-[150px] -mt-0 relative order-7">
            <div className={`group relative w-full h-full overflow-hidden`}>
              <div className="absolute inset-0 z-0 transition-all duration-200 rounded-[24px] lg:rounded-tl-[120px] rounded-tl-[80px] overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1749121822/aebe55ee1fed0db6abbb2759054695dcc30610e9_1_dxrsfr.jpg"
                  alt="Card Image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black pointer-events-none" />
            </div>
            <div className="absolute left-0 right-0 bottom-[-40px] z-10  pointer-events-none">
              <FadeContent>
                <p className="2xl:paragraph text-[14px] text-white font-medium italic  line-clamp-4">
                  “According to recent industry research, companies that invest
                  in custom software development see an average ROI of 300%
                  within the first two years, primarily due to improved
                  operational efficiency and competitive differentiation.”
                </p>
              </FadeContent>
            </div>
          </div>

          {/* 03 */}
          <TextCard
            className="row-start-2 col-start-1 space-y-2"
            title="Proactive Communication System"
            description="While typical offshore teams provide weekly updates,
we offer daily progress reports, real-time chat access,
and scheduled video calls in your timezone. Honestly,
you'll always know exactly what's happening with your
project—no surprises, no delays, no confusion."
          />
          {/* 04 */}
          <TextCard
            className="row-start-2 col-start-2"
            title="Agile Methodology"
            description="As your trusted software development partner, we do more than write code — we align technology with your business goals. By combining deep industry insight, clear communication, and an agile, collaborative process, we ensure flexible solutions and full transparency from start to finish."
          />
          {/* 05 */}
          <TextCard
            className="row-start-3 col-start-1 "
            title="Quality-First Development"
            description="Every project undergoes comprehensive code review
and testing processes. Our quality assurance protocols
 include automated testing, performance optimization, 
and security audits that ensure your software meets 
enterprise-grade standards from day one."
          />

          {/* 06 */}
          <TextCard
            className="row-start-3 col-start-2 "
            title="Post-Launch Partnership"
            description="Our relationship doesn't end at deployment. We 
provide comprehensive software maintenance and 
support, including bug fixes, feature enhancements,
performance monitoring, and scaling assistance as
your business grows."
          />

          {/* 07 */}

          <TextCard
            className="row-start-3 col-start-3 xl:mb-0 mb-10"
            title="Post-Launch Partnership"
            description="Our relationship doesn't end at deployment. We 
provide comprehensive software maintenance and 
support, including bug fixes, feature enhancements,
performance monitoring, and scaling assistance as
your business grows."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
