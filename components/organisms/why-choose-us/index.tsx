import { Button } from "@/components/atoms/button";
import { AnimatedImage, TextCard } from "@/components/molecules";
import Link from "next/link";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="w-full">
      <h2 className="section-title 2xl:max-w-[800px] max-w-[600px]">
        Why Choose Our Software Development Company
      </h2>
      <p className="paragraph text-[#7F7F7F] 2xl:max-w-[800px] max-w-[600px] mt-10">
        When you partner with Decods, you&apos;re choosing a reliable
        development partner committed to delivering exceptional results. Our
        offshore software development model provides significant cost
        advantages—typically 40-60% lower than onshore alternatives. Quality and
        communication standards remain uncompromised.
      </p>
      <p className="section-sub-title max-w-[520px] mt-10">
        What Makes Decods Different from Other Software Development Companies
      </p>
      <div className="flex justify-between mt-10 2xl:gap-10 gap-6">
        <div className="w-[calc(100%_-_500px)] flex flex-col gap-20 mt-8">
          <div className="flex [@media(max-width:1400px)]:flex-wrap gap-10 justify-between">
            <TextCard
              id="01"
              title="48-Hour Team Assembly"
              description="Most competitors take weeks to start. We can 
assemble your dedicated development team and begin 
coding within 48 hours. Our pre-vetted developer pool 
and streamlined onboarding process ensure immediate 
productivity."
            />
            <TextCard
              id="02"
              title="Zero-Documentation-Gap Policy"
              description="Every line of code comes with comprehensive 
documentation. Our developers create detailed 
technical specifications, API documentation, and 
deployment guides. Knowledge transfer becomes 
seamless. Future maintenance stays straightforward."
            />
          </div>
          <div className="flex [@media(max-width:1400px)]:flex-wrap gap-10 justify-between">
            <TextCard
              id="03"
              title="Proactive Communication System"
              description="While typical offshore teams provide weekly updates,
we offer daily progress reports, real-time chat access,
and scheduled video calls in your timezone. Honestly,
you'll always know exactly what's happening with your
project—no surprises, no delays, no confusion."
            />
            <TextCard
              id="04"
              title="Agile Methodology"
              description="As your trusted software development partner, we do more than write code — we align technology with your business goals. By combining deep industry insight, clear communication, and an agile, collaborative process, we ensure flexible solutions and full transparency from start to finish."
            />
          </div>
        </div>

        <div className="2xl:w-[500px]  w-[400px] -mt-[250px]">
          <div className="w-full h-[670px]">
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
          </div>
          <p className="paragraph text-[#7F7F7F] italic mt-10">
            “According to recent industry research, companies that invest in
            custom software development see an average ROI of 300% within the
            first two years, primarily due to improved operational efficiency
            and competitive differentiation.”
          </p>
        </div>
      </div>
      <div className="flex [@media(max-width:1400px)]:flex-wrap gap-10 justify-between mt-20">
        <TextCard
          id="05"
          title="Quality-First Development"
          description="Every project undergoes comprehensive code review
and testing processes. Our quality assurance protocols
 include automated testing, performance optimization, 
and security audits that ensure your software meets 
enterprise-grade standards from day one."
        />
        <TextCard
          id="06"
          title="Post-Launch Partnership"
          description="Our relationship doesn't end at deployment. We 
provide comprehensive software maintenance and 
support, including bug fixes, feature enhancements,
performance monitoring, and scaling assistance as
your business grows."
        />
        <TextCard
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
  );
};

export default WhyChooseUs;
