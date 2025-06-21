import React from "react";
import TextCard from "../text-card";

const DevApproachCards = () => {
  return (
    <div className="flex gap-4 h-[190px]">
      {/* 01 */}
      <TextCard
        className="min-w-[350px]"
        title="Real-World Software Applications"
        description="Our portfolio showcases software projects across diverse tech stacks, delivering successful implementations and real business results."
      />
      {/* 02 */}
      <TextCard
        className="min-w-[350px]"
        title="Technology Excellence Across Platforms"
        description="Our case studies showcase Angular, Django, React Native, AWS, and Docker projects delivering scalable, high-performance solutions."
      />

      {/* 03 */}
      <TextCard
        className=" min-w-[350px]"
        title="Industry-Specific Expertise"
        description="Our portfolio features high-transaction marketplaces, Fortune 500 CRM, ERP, AI logistics, and IoT real estate platforms."
      />
      {/* 04 */}
      <TextCard
        className="min-w-[350px]"
        title="Development Process That Delivers"
        description="We use proven UI/UX design, responsive layouts, smooth cloud migrations, and scalable microservices."
      />
      {/* 05 */}
      <TextCard
        className=" min-w-[350px]"
        title="Why Choose Our Portfolio Approach?"
        description="Our certified team specializes in TypeScript, Kubernetes, and CI/CD, delivering ROI-driven software solutions."
      />
    </div>
  );
};

export default DevApproachCards;
