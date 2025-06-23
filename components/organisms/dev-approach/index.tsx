import { ScrollArea, ScrollBar } from "@/components/atoms/scroll-area";
import {
  DevApproachCards,
  FadeContent,
  TextCard,
} from "@/components/molecules";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const DevApproach = () => {
  return (
    <div className="w-full relative">
      <FadeContent>
        <h2 className="section-title max-w-[650px]">
          What sets our development approach apart?
        </h2>
      </FadeContent>
      <FadeContent delay={100}>
        <p className="paragraph dark-bg-text max-w-[620px] mt-6">
          Our custom app development showcases proven methods from prototype to
          production, including React, Node.js, and mobile projects. We deliver
          high-impact solutions like SaaS with 99.9% uptime and PWAs rated 4.8+.
          Our work improves performance by 40% and boosts revenue by 25%.
          Expertise includes CRM, ERP, and supply chain software for scalable
          enterprises.
        </p>
      </FadeContent>

      <div className="dark-bg text-white  py-12 pb-0 relative">
        <ScrollArea className="w-full sm:hidden block -mb-10">
          <DevApproachCards />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div
          className="sm:hidden  absolute bottom-3 left-0 flex items-center gap-2  w-full justify-end pr-4"
          style={{ animation: "scroll-right 1.2s ease-in-out infinite" }}
        >
          <p className="text-[12px] font-semibold">Scroll</p>
          <ArrowRight size={14} />
        </div>

        <div className="xl:grid sm:flex hidden flex-col grid-cols-3 grid-rows-2 xl:gap-4 gap-2 relative">
          {/* Row 1, Col 1 */}
          <TextCard
            className="row-start-1 col-start-1"
            title="Real-World Software Applications"
            description="Our portfolio showcases software projects across diverse tech stacks, delivering successful implementations and real business results."
          />

          {/* Row 1, Col 2 */}
          <TextCard
            className="row-start-1 col-start-2"
            title="Technology Excellence Across Platforms"
            description="Our case studies showcase Angular, Django, React Native, AWS, and Docker projects delivering scalable, high-performance solutions."
          />

          {/* Row 1 only, Col 3: Image + Testimonial */}
          <div className="row-start-1 col-start-3 relative xl:h-[500px] h-[400px] 2xl:mt-[-240px] xl:-mt-[280px]  mt-20 order-7">
            <div className="relative w-full h-full rounded-[24px] overflow-hidden xl:mt-[30px] mt-0">
              <Image
                src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750512259/a903ae9b73dc893cc3ae8bc6af85f18eec18a787_muz5xm.jpg"
                alt="Development Approach"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none" />
            </div>
            <div className="absolute inset-0 flex items-end xl:mb-[-30px] mb-4 z-10">
              <FadeContent>
                <p className="text-white text-sm italic font-medium leading-relaxed">
                  &ldquo;Working with this team transformed our business
                  operations. Their custom ERP solution increased our efficiency
                  by 45% and the ROI was visible within 3 months. Best software
                  development portfolio I&apos;ve seen in 15 years of
                  business.&ldquo;
                  <br />
                  <br />—{" "}
                  <strong>Sarah Mitchell, CEO, TechFlow Solutions</strong>
                </p>
              </FadeContent>
            </div>
          </div>

          {/* Row 2, Col 1 */}
          <TextCard
            className="row-start-2 col-start-1"
            title="Industry-Specific Expertise"
            description="Our portfolio features high-transaction marketplaces, Fortune 500 CRM, ERP, AI logistics, and IoT real estate platforms."
          />

          {/* Row 2, Col 2 */}
          <TextCard
            className="row-start-2 col-start-2"
            title="Development Process That Delivers"
            description="We use proven UI/UX design, responsive layouts, smooth cloud migrations, and scalable microservices."
          />

          {/* Row 2, Col 3 */}
          <TextCard
            className="row-start-2 col-start-3"
            title="Why Choose Our Portfolio Approach?"
            description="Our certified team specializes in TypeScript, Kubernetes, and CI/CD, delivering ROI-driven software solutions."
          />
        </div>
      </div>
      <div className="sm:hidden block relative lg:h-[500px] h-auto mt-16">
        <div className="relative w-full rounded-[24px] lg:rounded-tl-[120px] rounded-tl-[80px] overflow-hidden xl:mt-[30px] mt-0 lg:h-[500px] h-[400px]">
          <Image
            src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750512259/a903ae9b73dc893cc3ae8bc6af85f18eec18a787_muz5xm.jpg"
            alt="Development Approach"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none" />
        </div>
        <div className="inset-0 flex items-end z-10 lg:absolute static">
          <FadeContent>
            <p className="text-white text-sm italic font-medium leading-relaxed">
              &ldquo;Working with this team transformed our business operations.
              Their custom ERP solution increased our efficiency by 45% and the
              ROI was visible within 3 months. Best software development
              portfolio I&apos;ve seen in 15 years of business.&ldquo;
              <br />
              <br />— <strong>Sarah Mitchell, CEO, TechFlow Solutions</strong>
            </p>
          </FadeContent>
        </div>
      </div>
    </div>
  );
};

export default DevApproach;
