import { Button } from "@/components/atoms/button";
import { FadeContent, FadeDown } from "@/components/molecules";
import { FAQ, ImageAndTextService, Testimonials } from "@/components/organisms";
import { serviceFaqDataLeft, serviceFaqDataRight } from "@/mock";
import Image from "next/image";
import React from "react";

const CustomSoftwareDevelopment = () => {
  return (
    <div className="text-white overflow-hidden">
      <div className="w-full bg-white">
        <div className="w-full text-white section md:pt-20 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-5">
            {/* Image Right */}
            <div className="lg:h-[500px] lg:order-1 order-2 md:h-[400px] h-[360px] min-w-[300px] rounded-[24px] overflow-hidden rounded-tr-[80px] lg:rounded-tr-[120px]">
              <Image
                src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750684715/3065dac42dbfe242517dbfb66ad3712d54e7bb49_kcxrng.webp"
                width={715}
                height={550}
                alt="How we work"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Text Left */}
            <div className="flex flex-col lg:order-2 order-1 gap-8 lg:max-w-[588px] max-w-full  h-full pb-10">
              <FadeContent className="lg:max-w-[650px] max-w-[880px]">
                <h1 className=" text-black section-title">
                  Custom Software Development Services
                </h1>
              </FadeContent>
              <FadeContent className="slate-text paragraph">
                <span className="text-black">
                  Building software that actually fits your business isn&apos;t
                  optional anymore—it&apos;s essential.
                </span>
                Most companies struggle with generic solutions that force them
                to adapt their processes instead of the other way around. We
                develop tailored software solutions that work exactly how your
                team needs them to work. From React interfaces that users love
                to robust Node.js backends, Python data processing, and .NET
                enterprise integrations, every line of code serves your specific
                goals.
              </FadeContent>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="w-full dark-bg">
        <div className="w-full text-white section">
          <h2 className="section-title text-white max-w-[900px] text-center mx-auto">
            Why Choose Decods for Custom Software Development
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4  mt-10">
            <FadeDown
              className={`relative flex flex-col justify-between z-10 slate-bg rounded-[24px] px-[20px] py-[16px] lg:min-h-[250px] min-h-min h-fit`}
            >
              <FadeContent delay={150}>
                <h2 className="2xl:text-[24px] text-[18px] text-white font-semibold">
                  Rapid Project Kickoff
                </h2>
              </FadeContent>
              <FadeContent className="pt-4">
                <p className="paragraph dark-bg-text">
                  Start development within 48 hours. Our streamlined onboarding
                  gets your project moving fast without compromising quality.
                </p>
              </FadeContent>
            </FadeDown>

            <FadeDown
              className={`relative flex flex-col justify-between z-10 slate-bg rounded-[24px] px-[20px] py-[16px] lg:min-h-[250px] min-h-min `}
            >
              <FadeContent delay={150}>
                <h2 className="2xl:text-[24px] text-[18px] text-white font-semibold">
                  Scalable Team Approach
                </h2>
              </FadeContent>
              <FadeContent className="pt-4">
                <p className="paragraph dark-bg-text">
                  Flexible team scaling from 1-20 developers. Match resources
                  exactly to your project needs and specialized software
                  development requirements.
                </p>
              </FadeContent>
            </FadeDown>

            <FadeDown
              className={`relative flex flex-col justify-between z-10 slate-bg rounded-[24px] px-[20px] py-[16px] lg:min-h-[250px] min-h-min `}
            >
              <FadeContent delay={150}>
                <h2 className="2xl:text-[24px] text-[18px] text-white font-semibold">
                  Cost-Effective Excellence
                </h2>
              </FadeContent>
              <FadeContent className="pt-4">
                <p className="paragraph dark-bg-text">
                  Premium custom software development services starting at
                  $16/hour. Quality offshore talent without premium pricing for
                  your custom enterprise applications.
                </p>
              </FadeContent>
            </FadeDown>
          </div>
        </div>
      </div>

      {/* Section 3 */}

      <div className="w-full bg-white">
        <div className="w-full text-black section lg:pb-10 pb-0">
          <div className="flex flex-col justify-center items-center   text-center mx-auto lg:pb-20 pb-10">
            <h2 className="text-black section-title max-w-[900px]">
              Why Most Software Projects Fail (And How We&apos;re Different)
            </h2>
            <p className="slate-text paragraph mt-4 max-w-[1100px]">
              Here&apos;s the truth nobody talks about: 68% of bespoke software
              development projects either fail completely or deliver something
              nobody actually wants to use. Why? Because most development teams
              build what they think you need instead of what you actually need.
              We&apos;ve seen companies waste six months and $200,000 on
              &ldquo;solutions&ldquo; that create more problems than they solve.
            </p>
          </div>
          <ImageAndTextService
            reversed
            descriptionOne="Our custom software development firm starts with uncomfortable questions. What specific task takes your team 3 hours that should take 30 minutes? Which manual process makes everyone groan? Where does information get lost between departments? We dig into these pain points before writing a single line of code. This means when we build your React dashboard or configure your Python data pipeline, it actually solves real problems your people face every day."
            descriptionTwo={`Take our recent healthcare client. They came to us with a "simple" patient management request. After two weeks of discovery, we found the real issue: nurses spent 40% of their time hunting for patient information across five different systems. The solution wasn't another patient management tool—it was a unified interface that pulled data from existing systems. Our custom business software approach resulted in nurses saving 2.5 hours per shift, which translates to treating 15% more patients daily.`}
            image="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750228400/8a2fda8d890c1906db5cdc1c6c453a1e0ac1672b_mccjou.webp"
            quote={`"The biggest mistake in software development isn't picking the wrong technology—it's building the right thing wrong."`}
          />
        </div>
      </div>
      {/* Section 4 */}
      <div className="w-full">
        <div className="w-full text-white  section py-10">
          <ImageAndTextService
            descriptionOne="Technical excellence matters, but it's worthless without business context. Our developers understand that the Node.js API isn't just moving data—it's enabling a sales rep to close deals faster. The .NET integration isn't just connecting systems—it's eliminating the manual data entry that causes accounting errors. Whether it's custom ecommerce software development for online retailers or custom manufacturing software for production lines, every technical decision connects directly to a business outcome you can measure."
            descriptionTwo={`We've learned something important over the years: the companies that succeed with bespoke development are the ones that stay involved throughout the process. Not micromanaging every detail, but participating in sprint reviews, testing early versions of their custom business app, and providing honest feedback. This collaborative approach means we catch issues while they're still cheap to fix, not after deployment when they become expensive disasters. Our enterprise software solutions benefit from this continuous feedback loop, ensuring software bespoke quality meets real-world demands.`}
            image="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750228299/d6eca39e51fdbd4216c95d62e360abb944855c0e_vvyxbf.webp"
            quote={`"Good software doesn't just work—it makes everything else work better."`}
          />
        </div>
      </div>

      {/* Section 5 */}
      <div className="w-full bg-white">
        <div className="w-full text-black section sm:pt-20 pt-10 ">
          <h2 className="section-title text-black text-center mx-auto lg:max-w-[900px] max-w-[600px]">
            Ready to Build Your Custom Solution?
          </h2>
          <p className="paragraph slate-text mt-4 max-w-[800px] text-center mx-auto">
            Transform your business vision into powerful software that drives
            growth and efficiency. Our expert team is ready to discuss your
            project requirements and provide a detailed roadmap to success.
          </p>
          <p className="paragraph font-semibold text-black max-w-[800px] text-center mx-auto mt-4">
            Get started today with free project consultation within 24 hours,
            detailed technical proposal and timeline, plus team assembly and
            project kickoff in 48 hours.
          </p>
          <div className="flex sm:flex-row flex-col justify-center items-center gap-4 sm:mt-16 mt-10">
            <Button
              iconArrow
              iconPosition="right"
              className="w-[260px] h-[56px] [@media(max-width:640px)]:w-full"
            >
              Discuss Your Project
            </Button>
            <Button
              variant="outline"
              iconArrow
              iconPosition="right"
              className="w-[260px] !h-[56px] [@media(max-width:640px)]:w-full"
            >
              Get Free Estimate
            </Button>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div className="w-full bg-white">
        <div className="w-full text-black section lg:pt-20 pt-10">
          <Testimonials title="What Our Clients Say About Our IT Solutions Provider Services" />
        </div>
      </div>

      {/* Section 7 */}
      <div className="w-full dark-bg overflow-hidden">
        <div className="w-full text-white section">
          <FAQ
            faqDataLeft={serviceFaqDataLeft}
            faqDataRight={serviceFaqDataRight}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomSoftwareDevelopment;
