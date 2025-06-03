import { Button } from "@/components/atoms/button";
import { AnimatedImage, TextCard } from "@/components/molecules";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="w-full relative">
      <h2 className="section-title 2xl:max-w-[800px] max-w-[600px] relative z-10">
        Why Choose Our Software Development Company
      </h2>
      <p className="paragraph text-[#7F7F7F] 2xl:max-w-[800px] max-w-[600px] mt-10 relative z-10">
        When you partner with Decods, you&apos;re choosing a reliable
        development partner committed to delivering exceptional results. Our
        offshore software development model provides significant cost
        advantages—typically 40-60% lower than onshore alternatives. Quality and
        communication standards remain uncompromised.
      </p>
      <p className="section-sub-title max-w-[520px] mt-10 relative z-10">
        What Makes Decods Different from Other Software Development Companies
      </p>
      <div className="bg-black text-white  py-12 pb-0">
        <div className=" grid grid-cols-1 md:grid-cols-3 grid-rows-3 2xl:gap-20 gap-10 relative">
          {/* 01 */}
          <TextCard
            className="row-start-1 col-start-1 space-y-2"
            id="01"
            title="48-Hour Team Assembly"
            description="Most competitors take weeks to start. We can 
assemble your dedicated development team and begin 
coding within 48 hours. Our pre-vetted developer pool 
and streamlined onboarding process ensure immediate 
productivity."
          />
          {/* 02 */}
          <TextCard
            className="row-start-1 col-start-2 space-y-2"
            id="02"
            title="Zero-Documentation-Gap Policy"
            description="Every line of code comes with comprehensive 
documentation. Our developers create detailed 
technical specifications, API documentation, and 
deployment guides. Knowledge transfer becomes 
seamless. Future maintenance stays straightforward."
          />
          {/* Image */}
          <div className="row-start-1 row-span-1 col-start-3 -mt-[250px]">
            <AnimatedImage
              image="https://res.cloudinary.com/dprl3uqvi/image/upload/v1748786623/aebe55ee1fed0db6abbb2759054695dcc30610e9_rfsy0d.jpg"
              btn={
                <Link href="/services">
                  <Button
                    variant="secondary"
                    iconArrow
                    iconPosition="right"
                    className="!w-[130px] !h-[37px] !text-[12px]"
                  >
                    Services
                  </Button>
                </Link>
              }
            />
            <p className="paragraph text-[#7F7F7F] italic mt-10">
              “According to recent industry research, companies that invest in
              custom software development see an average ROI of 300% within the
              first two years, primarily due to improved operational efficiency
              and competitive differentiation.”
            </p>
          </div>

          {/* 03 */}
          <TextCard
            className="row-start-2 col-start-1 space-y-2"
            id="03"
            title="Proactive Communication System"
            description="While typical offshore teams provide weekly updates,
we offer daily progress reports, real-time chat access,
and scheduled video calls in your timezone. Honestly,
you'll always know exactly what's happening with your
project—no surprises, no delays, no confusion."
          />
          {/* 04 */}
          <TextCard
            className="row-start-2 col-start-2 space-y-2"
            id="04"
            title="Agile Methodology"
            description="As your trusted software development partner, we do more than write code — we align technology with your business goals. By combining deep industry insight, clear communication, and an agile, collaborative process, we ensure flexible solutions and full transparency from start to finish."
          />
          {/* 05 */}
          <TextCard
            className="row-start-3 col-start-1 space-y-2 mt-12"
            id="05"
            title="Quality-First Development"
            description="Every project undergoes comprehensive code review
and testing processes. Our quality assurance protocols
 include automated testing, performance optimization, 
and security audits that ensure your software meets 
enterprise-grade standards from day one."
          />

          {/* 06 */}
          <TextCard
            className="row-start-3 col-start-2 space-y-2 mt-12"
            id="06"
            title="Post-Launch Partnership"
            description="Our relationship doesn't end at deployment. We 
provide comprehensive software maintenance and 
support, including bug fixes, feature enhancements,
performance monitoring, and scaling assistance as
your business grows."
          />

          {/* 07 */}

          <TextCard
            className="row-start-3 col-start-3 space-y-2 mt-12"
            id="07"
            title="Post-Launch Partnership"
            description="Our relationship doesn't end at deployment. We 
provide comprehensive software maintenance and 
support, including bug fixes, feature enhancements,
performance monitoring, and scaling assistance as
your business grows."
          />
        </div>
      </div>
      <div className="absolute top-4 right-16">
        <Image
          src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1748965526/Vector_6_ytzsrf.png"
          width={485}
          height={385}
          alt="Background Vector"
        />
      </div>
      <div className="absolute top-[-80px] left-[-70px] bottom-[-80px] opacity-[0.075] z-0 rotate-[180deg]">
        <div className="w-[485px] h-full bg-gradient-to-b from-transparent to-black">
          <Image
            src="https://res.cloudinary.com/dprl3uqvi/image/upload/v1748768621/OBJECTS_q4iemg.png"
            width={685}
            height={385}
            alt="Background Vector"
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
