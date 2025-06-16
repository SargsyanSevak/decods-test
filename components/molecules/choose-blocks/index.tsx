import React from "react";
import TextCard from "../text-card";

const ChooseBlocks = () => {
  return (
    <div className="flex gap-4 h-[190px]">
      {/* 01 */}
      <TextCard
        className="min-w-[350px]"
        title="48-Hour Team Assembly"
        description="Most competitors take weeks to start. We can 
assemble your dedicated development team and begin 
coding within 48 hours. Our pre-vetted developer pool 
and streamlined onboarding process ensure immediate 
productivity."
      />
      {/* 02 */}
      <TextCard
        className="min-w-[350px]"
        title="Zero-Documentation-Gap Policy"
        description="Every line of code comes with comprehensive 
documentation. Our developers create detailed 
technical specifications, API documentation, and 
deployment guides. Knowledge transfer becomes 
seamless. Future maintenance stays straightforward."
      />

      {/* 03 */}
      <TextCard
        className=" min-w-[350px]"
        title="Proactive Communication System"
        description="While typical offshore teams provide weekly updates,
we offer daily progress reports, real-time chat access,
and scheduled video calls in your timezone. Honestly,
you'll always know exactly what's happening with your
project—no surprises, no delays, no confusion."
      />
      {/* 04 */}
      <TextCard
        className="min-w-[350px]"
        title="Agile Methodology"
        description="As your trusted software development partner, we do more than write code — we align technology with your business goals. By combining deep industry insight, clear communication, and an agile, collaborative process, we ensure flexible solutions and full transparency from start to finish."
      />
      {/* 05 */}
      <TextCard
        className=" min-w-[350px]"
        title="Quality-First Development"
        description="Every project undergoes comprehensive code review
and testing processes. Our quality assurance protocols
 include automated testing, performance optimization, 
and security audits that ensure your software meets 
enterprise-grade standards from day one."
      />

      {/* 06 */}
      <TextCard
        className=" min-w-[350px]"
        title="Post-Launch Partnership"
        description="Our relationship doesn't end at deployment. We 
provide comprehensive software maintenance and 
support, including bug fixes, feature enhancements,
performance monitoring, and scaling assistance as
your business grows."
      />

      {/* 07 */}

      <TextCard
        className=" min-w-[350px]"
        title="Post-Launch Partnership"
        description="Our relationship doesn't end at deployment. We 
provide comprehensive software maintenance and 
support, including bug fixes, feature enhancements,
performance monitoring, and scaling assistance as
your business grows."
      />
    </div>
  );
};

export default ChooseBlocks;
