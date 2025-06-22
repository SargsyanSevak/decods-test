import { Button } from "@/components/atoms/button";
import { CoreDevServices, FadeContent, FadeDown } from "@/components/molecules";
import { FAQ, ImageAndTextService, Testimonials } from "@/components/organisms";
import { serviceFaqDataLeft, serviceFaqDataRight } from "@/mock";
import Image from "next/image";
import React from "react";

const ServicesScreen = () => {
  return (
    <div className="text-white overflow-hidden">
      <div className="w-full bg-white">
        <div className="w-full text-white section md:pt-20 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-10">
            {/* Text Left */}
            <div className="flex flex-col  gap-8 lg:max-w-[588px] max-w-full  h-full pb-10">
              <FadeContent className="lg:max-w-[650px] max-w-[880px]">
                <h1 className=" text-black section-title">
                  Custom Software Development Services That Scale Your Business
                </h1>
              </FadeContent>
              <FadeContent className="slate-text paragraph">
                Transform your business with expert application development team
                delivering comprehensive digital solutions. From startup MVPs to
                enterprise platforms – we build tailored applications that drive
                measurable results worth every invested dollar in 2025.
              </FadeContent>
              <FadeDown className="mt-4">
                <a
                  href="https://calendly.com/help-decods/30min"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="calendly"
                  className="w-fit [@media(max-width:480px)]:w-full mt-6"
                >
                  <Button
                    iconArrow
                    iconPosition="right"
                    className="!h-[56px] w-[300px] [@media(max-width:480px)]:w-full"
                    type="button"
                  >
                    Request Free Consultation
                  </Button>
                </a>
              </FadeDown>
            </div>

            {/* Image Right */}
            <div className="lg:h-[500px] md:h-[400px] h-[360px] min-w-[300px] rounded-[24px] overflow-hidden rounded-tr-[80px] lg:rounded-tr-[120px]">
              <Image
                src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750593046/0bf354f783ea7822a0594ebdb1cde763264c9200_onq0jw.jpg"
                width={715}
                height={550}
                alt="How we work"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="w-full dark-bg">
        <div className="w-full text-white section">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-10">
            {/* Image Right */}
            <div className="lg:h-[500px] lg:order-1 order-2 md:h-[400px] h-[360px] min-w-[300px] rounded-[24px] overflow-hidden rounded-tr-[80px] lg:rounded-tr-[120px]">
              <Image
                src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750593046/0bf354f783ea7822a0594ebdb1cde763264c9200_onq0jw.jpg"
                width={715}
                height={550}
                alt="How we work"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Text Left */}
            <div className="flex flex-col lg:order-2 order-1 justify-center gap-8 lg:max-w-[588px] max-w-full  h-full lg:pb-10 pb-0">
              <FadeContent className="lg:max-w-[688px] max-w-[580px]">
                <h1 className=" text-white section-title">
                  Custom Software Development Services That Drive Results
                </h1>
              </FadeContent>
              <FadeContent className="dark-bg-text paragraph">
                We are a leading custom software development company offering
                strategic technology consulting services to accelerate your
                digital transformation. Our experienced team builds scalable
                digital products using cutting-edge tech stacks. Fast launch
                guaranteed. Long-term efficiency for businesses from startups to
                Fortune 500 enterprises.
              </FadeContent>
              <FadeDown className="lg:mt-10 mt-5">
                <a
                  href="https://calendly.com/help-decods/30min"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="calendly"
                  className="w-fit [@media(max-width:480px)]:w-full mt-6"
                >
                  <Button
                    variant={"secondary"}
                    iconArrow
                    iconPosition="right"
                    className="!h-[56px] w-[180px] [@media(max-width:480px)]:w-full"
                    type="button"
                  >
                    Book a Call
                  </Button>
                </a>
              </FadeDown>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:mt-20 mt-10">
            <FadeDown
              className={`relative flex flex-col justify-between z-10 slate-bg rounded-[24px] px-[20px] py-[16px] min-h-[250px] h-fit`}
            >
              <FadeContent delay={150}>
                <h2 className="2xl:text-[24px] text-[18px] text-white font-semibold">
                  Why Choose Our Development Services
                </h2>
              </FadeContent>
              <FadeContent className="pt-4">
                <p className="paragraph dark-bg-text">
                  We combine technical skill and business insight to build
                  custom software that drives real growth. Our approach ensures
                  every feature adds value, with scalable architecture, fast
                  delivery, and global expert support.
                </p>
              </FadeContent>
            </FadeDown>

            <FadeDown
              className={`relative flex flex-col justify-between z-10 slate-bg rounded-[24px] px-[20px] py-[16px]  min-h-[250px]`}
            >
              <FadeContent delay={150}>
                <h2 className="2xl:text-[24px] text-[18px] text-white font-semibold">
                  Our Development Process
                </h2>
              </FadeContent>
              <FadeContent className="pt-4">
                <p className="paragraph dark-bg-text">
                  We follow proven methods from discovery to deployment, using
                  agile 2-week sprints, clear milestones, automated testing, and
                  smooth launches for reliable, high-quality results.
                </p>
              </FadeContent>
            </FadeDown>

            <FadeDown
              className={`relative flex flex-col justify-between z-10 slate-bg rounded-[24px] px-[20px] py-[16px]  min-h-[250px]`}
            >
              <FadeContent delay={150}>
                <h2 className="2xl:text-[24px] text-[18px] text-white font-semibold">
                  Delivering Lasting Value
                </h2>
              </FadeContent>
              <FadeContent className="pt-4">
                <p className="paragraph dark-bg-text">
                  Our expertise creates software solutions that provide lasting
                  value and competitive advantage, aligning technology with your
                  business goals for measurable success.
                </p>
              </FadeContent>
            </FadeDown>
          </div>
        </div>
      </div>

      {/* Section 3 */}

      <div className="w-full bg-white">
        <div className="w-full text-black section pb-10">
          <ImageAndTextService
            reversed
            title="Why Businesses Choose Decods as Their IT Solutions Provider"
            subTitleOne="Proven Technical Excellence with Business Impact"
            descriptionOne="Our custom software development services go beyond coding – we engineer bespoke software development services that deliver measurable business outcomes. With 200+ successful projects across industries since 2020, we understand how to translate complex requirements into scalable, efficient software. Not always simple. But always effective."
            descriptionTwo="Our development teams use cutting-edge technologies like React, Node.js, Python, and cloud-native architectures to build applications that perform flawlessly under real-world conditions. Every project starts with business analysis to ensure your software investment generates positive ROI from day one. Most clients experience 40-60% efficiency improvements within the first quarter."
            image="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750593073/aa1bcba4ee79f19bfda77a68f37090921ab31457_ffqzu8.jpg"
          />
        </div>
      </div>
      {/* Section 4 */}
      <div className="w-full">
        <div className="w-full text-white  section py-10">
          <ImageAndTextService
            subTitleOne="Flexible Engagement Models That Scale With Your Needs"
            descriptionOne="Need a dedicated development team for long-term partnership? Or prefer project-based delivery for specific initiatives? We adapt to your requirements completely. Our offshore model provides access to top-tier programming talent at cost-effective rates – typically 40-60% lower than in-house teams without compromising quality."
            descriptionTwo="Staff augmentation works great for quick scaling. Managed teams handle complex projects seamlessly. Full project outsourcing? Perfect for busy executives. We integrate seamlessly with your existing processes and guarantee transparent communication through your preferred tools and methodologies."
            image="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750593084/96261d0ebeeace6ab4d65bb5b7483dfb164a6582_bsomuf.jpg"
          />
        </div>
      </div>

      {/* Section 5 */}
      <div className="w-full bg-white">
        <div className="w-full text-black section pt-10">
          <ImageAndTextService
            reversed
            subTitleOne="End-to-End Software Development and Technology Consulting"
            descriptionOne="Beyond development, we offer comprehensive technology consulting services to guide your digital transformation journey. Our experts help you choose the right tech stack, design scalable architecture, and implement best practices for long-term success. Legacy system modernization? Check. Cloud migration and DevOps implementation? Double check. We provide strategic guidance backed by hands-on execution."
            descriptionTwo="This holistic approach ensures your software solution aligns with business goals and technology roadmap. Risks reduced. Growth accelerated. Our strategic guidance provides clear direction for your digital transformation – you know exactly where you're going and the most efficient route to get there."
            descriptionThree="This combination of technical mastery, flexible delivery models, and strategic guidance makes us the ideal enterprise software development partner for businesses ready to leverage custom software development for sustainable competitive advantage."
            image="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750593093/b662c33a081e1730cf4e06c0db86ddf71e0abaab_ftg6ik.jpg"
          />
        </div>
      </div>

      {/* Section 6 */}
      <div className="w-full dark-bg">
        <div className="w-full text-white section">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-10">
            {/* Text Left */}
            <div className="flex flex-col lg:order-2 order-1 gap-8 lg:max-w-[500px] max-w-full  h-full lg:pb-10 pb-0">
              <FadeContent className="lg:max-w-[700px] max-w-[680px]">
                <h1 className=" text-white section-title">
                  Comprehensive Application Development Services
                </h1>
              </FadeContent>
              <FadeContent className="dark-bg-text paragraph">
                We are a leading custom software development company offering
                strategic technology consulting services to accelerate your
                digital transformation. Our experienced team builds scalable
                digital products using cutting-edge tech stacks. Fast launch
                guaranteed. Long-term efficiency for businesses from startups to
                Fortune 500 enterprises.
              </FadeContent>
              <FadeDown className="lg:mt-10 mt-6">
                <a
                  href="https://calendly.com/help-decods/30min"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="calendly"
                  className="w-fit [@media(max-width:480px)]:w-full mt-6"
                >
                  <Button
                    variant="secondary"
                    iconArrow
                    iconPosition="right"
                    className="!h-[56px] w-[180px] [@media(max-width:480px)]:w-full"
                    type="button"
                  >
                    Book a Call
                  </Button>
                </a>
              </FadeDown>
            </div>
            {/* Image Right */}
            <div className="lg:h-[500px] order-2 md:h-[400px] h-[360px] min-w-[300px] rounded-[24px] overflow-hidden rounded-tr-[80px] lg:rounded-tr-[120px] relative">
              <Image
                src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750593103/b517903e17888f90b9e8f7c551439d8349a5e83b_xnhuqw.jpg"
                width={715}
                height={550}
                alt="How we work"
                className="object-cover w-full h-full"
              />
              <div className="absolute  inset-0 z-10 bg-gradient-to-b from-transparent to-black pointer-events-none sm:p-4 p-2  flex items-end">
                <FadeContent>
                  <p className="text-[14px] italic text-white leading-[20px] font-medium">
                    «The global custom software development market is projected
                    to reach $146.18 billion by 2030, with businesses
                    increasingly choosing tailored solutions over off-the-shelf
                    alternatives to gain competitive advantage and operational
                    efficiency.»
                  </p>
                </FadeContent>
              </div>
            </div>
          </div>
          <CoreDevServices />
        </div>
      </div>

      {/* Section 7 */}
      <div className="w-full bg-white">
        <div className="w-full text-black section">
          <Testimonials title="What Our Clients Say About Our IT Solutions Provider Services" />
        </div>
      </div>

      {/* Section 8 */}
      <div className="w-full bg-white">
        <div className="w-full text-black section sm:pt-20 pt-10">
          <h2 className="section-title text-black text-center mx-auto lg:max-w-[800px] max-w-[600px]">
            Ready to Transform Your Business with Custom Software?
          </h2>
          <p className="paragraph slate-text mt-4 max-w-[900px] text-center mx-auto">
            Let&lsquo;s discuss your project requirements and deliver a solution
            that drives real business value. Your digital transformation journey
            starts here.
          </p>
          <div className="flex sm:flex-row flex-col justify-center items-center gap-4 sm:mt-16 mt-10">
            <Button
              iconArrow
              iconPosition="right"
              className="w-[260px] h-[56px] [@media(max-width:640px)]:w-full"
            >
              Book Strategy Session
            </Button>
          </div>
        </div>
      </div>

      {/* Section 9 */}
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

export default ServicesScreen;
