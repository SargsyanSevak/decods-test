import React from "react";
import FadeDown from "../fade-down";
import FadeContent from "../fade-content";

const CoreDevServices = () => {
  return (
    <div className="flex flex-col mt-10">
      <h2 className="lg:text-[24px] text-[20px] font-semibold">
        Our Core Development Services Include:
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
        <FadeDown
          className={`relative flex flex-col justify-between z-10 slate-bg rounded-[24px] px-[20px] py-[16px] min-h-[250px] h-fit`}
        >
          <FadeContent delay={150}>
            <h2 className="2xl:text-[24px] text-[18px] text-white font-semibold">
              Custom Software Development
            </h2>
          </FadeContent>
          <FadeContent className="pt-4">
            <p className="paragraph dark-bg-text">
              We create bespoke software that fits your business perfectly. From
              scalable SaaS platforms to enterprise apps and automation tools,
              our solutions are designed to meet your unique needs and integrate
              effortlessly with your existing systems.
            </p>
          </FadeContent>
        </FadeDown>

        <FadeDown
          className={`relative flex flex-col justify-between z-10 slate-bg rounded-[24px] px-[20px] py-[16px]  min-h-[250px]`}
        >
          <FadeContent delay={150}>
            <h2 className="2xl:text-[24px] text-[18px] text-white font-semibold">
              Web & Mobile Applications
            </h2>
          </FadeContent>
          <FadeContent className="pt-4">
            <p className="paragraph dark-bg-text">
              Reach your customers on any device with consistent,
              high-performance apps. Using React, Angular, and React Native, we
              build responsive web apps, native mobile solutions, and
              cross-platform applications tailored for modern user experiences.
            </p>
          </FadeContent>
        </FadeDown>

        <FadeDown
          className={`relative flex flex-col justify-between z-10 slate-bg rounded-[24px] px-[20px] py-[16px]  min-h-[250px]`}
        >
          <FadeContent delay={150}>
            <h2 className="2xl:text-[24px] text-[18px] text-white font-semibold">
              Digital Transformation Services
            </h2>
          </FadeContent>
          <FadeContent className="pt-4">
            <p className="paragraph dark-bg-text">
              Tackle complex business operations with scalable, secure software.
              We develop custom CRM systems, ERP platforms, and integrated
              business intelligence solutions that streamline processes and
              support long-term growth.
            </p>
          </FadeContent>
        </FadeDown>

        <FadeDown
          className={`relative flex flex-col justify-between z-10 slate-bg rounded-[24px] px-[20px] py-[16px]  min-h-[250px]`}
        >
          <FadeContent delay={150}>
            <h2 className="2xl:text-[24px] text-[18px] text-white font-semibold">
              Enterprise Software Solutions
            </h2>
          </FadeContent>
          <FadeContent className="pt-4">
            <p className="paragraph dark-bg-text">
              Handle complex business operations with secure, scalable software.
              We specialize in enterprise-grade solutions like custom CRMs, ERP
              systems, and integrated BI tools—built for operational efficiency
              and long-term growth.
            </p>
          </FadeContent>
        </FadeDown>

        <FadeDown
          className={`relative flex flex-col justify-between z-10 slate-bg rounded-[24px] px-[20px] py-[16px]  min-h-[250px]`}
        >
          <FadeContent delay={150}>
            <h2 className="2xl:text-[24px] text-[18px] text-white font-semibold">
              DevOps & Cloud Services
            </h2>
          </FadeContent>
          <FadeContent className="pt-4">
            <p className="paragraph dark-bg-text">
              Deploy faster, scale effortlessly, and cut infrastructure costs by
              up to 40%. We leverage infrastructure automation, CI/CD pipelines,
              and cloud-native architectures on AWS, Azure, and Google Cloud,
              using proven DevOps practices to boost deployment speed and
              reliability.
            </p>
          </FadeContent>
        </FadeDown>
        <FadeDown
          className={`relative flex flex-col justify-between z-10 slate-bg rounded-[24px] px-[20px] py-[16px]  min-h-[250px]`}
        >
          <FadeContent delay={150}>
            <h2 className="2xl:text-[24px] text-[18px] text-white font-semibold">
              Quality Assurance & Testing
            </h2>
          </FadeContent>
          <FadeContent className="pt-4">
            <p className="paragraph dark-bg-text">
              Launch confidently with bug-free, secure software. Our
              comprehensive QA services include automated testing, security
              audits, performance optimization, and continuous monitoring to
              ensure quality throughout development.
            </p>
          </FadeContent>
        </FadeDown>
      </div>
    </div>
  );
};

export default CoreDevServices;
