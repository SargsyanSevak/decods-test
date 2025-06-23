import { Button } from "@/components/atoms/button";
import { FadeContent, FadeDown } from "@/components/molecules";
import {
  FAQ,
  HiringSolutions,
  ImageAndText,
  StackCoverage,
  Testimonials,
} from "@/components/organisms";
import { hireDeveloperFaqDataLeft, hireDeveloperFaqDataRight } from "@/mock";
import { Metadata } from "next";
import Image from "next/image";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Hire Software Developers | Remote & Dedicated Teams | Decods",
  description:
    "Hire pre-vetted software developers, designers, and tech teams from Decods. Build your product faster with top-tier remote talent, available on-demand.",
  keywords: [
    "hire software developers",
    "remote developers",
    "dedicated development teams",
    "tech talent on demand",
    "Decods developers",
    "outsourced development",
    "IT staffing solutions",
    "hire remote engineers",
    "freelance programmers",
    "scalable tech teams",
  ],
  authors: [{ name: "Decods", url: "https://decods.com" }],
  creator: "Decods",
  publisher: "Decods",
  applicationName: "Decods",
  category: "Technology",
  generator: "Next.js",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    title: "Hire Software Developers | Remote & Dedicated Teams | Decods",
    description:
      "Get access to highly skilled remote developers and dedicated tech teams. Decods helps startups and enterprises scale faster with reliable engineering talent.",
    url: "https://decods.com/en/hire-developer",
    siteName: "Decods",
    images: [
      {
        url: "https://res.cloudinary.com/dprl3uqvi/image/upload/v1748181638/Og_Image_wl0qad.jpg",
        width: 1200,
        height: 630,
        alt: "Hire Developers from Decods",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Top Remote Developers | Decods Tech Talent",
    description:
      "Decods connects you with experienced software developers and scalable tech teams — ready to bring your product to life.",
    creator: "@decods",
    images: [
      "https://res.cloudinary.com/dprl3uqvi/image/upload/v1748181638/Og_Image_wl0qad.jpg",
    ],
  },
};

const Page = () => {
  return (
    <div className="text-white ">
      {/* Section 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-10  section md:pt-20 pt-10">
        {/* Text Left */}
        <div className=" h-fit flex flex-col gap-4 lg:max-w-[700px] max-w-full">
          <FadeContent className="max-w-[700px]">
            <h1 className=" text-black section-title">
              Hire Software Developers & Dedicated Development Teams
            </h1>
          </FadeContent>
          <FadeContent>
            <p className="paragraph slate-text mt-4">
              Need to hire software developers fast? We connect you with expert
              full-stack developers, dedicated teams, and specialized engineers
              ready to transform your ideas into reality. Whether you&apos;re a
              startup needing an MVP team or an enterprise scaling operations,
              our global talent pool delivers results. Around $120,000 annually
              compared to in-house hiring costs in 2025.
            </p>
          </FadeContent>
          <FadeDown className="mt-10">
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
            src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750228242/f42a459574c12c448a60a26c585210fa47d8394e_fhcsxg.jpg"
            width={715}
            height={550}
            alt="How we work"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      {/* Section 2 */}
      <div className="w-full dark-bg">
        <div className="w-full text-white section">
          <h2 className="section-title text-white max-w-[700px] mx-auto text-center">
            Why Choose Our Developer Hiring Services
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
            <FadeDown
              className={`relative flex flex-col justify-between z-10 slate-bg rounded-[24px] px-[20px] py-[16px] min-h-[250px] h-fit`}
            >
              <FadeContent delay={150}>
                <h2 className="2xl:text-[24px] text-[18px] text-white font-semibold">
                  Global Talent Access in 48 Hours
                </h2>
              </FadeContent>
              <FadeContent className="pt-4">
                <p className="paragraph dark-bg-text">
                  Skip months of recruitment. Our pre-vetted pool of 500+
                  developers lets you hire expert programmers within days, not
                  weeks. Companies that hire software engineers through
                  traditional methods often wait 3-6 months just to fill one
                  position.
                </p>
              </FadeContent>
            </FadeDown>

            <FadeDown
              className={`relative flex flex-col justify-between z-10 slate-bg rounded-[24px] px-[20px] py-[16px]  min-h-[250px]`}
            >
              <FadeContent delay={150}>
                <h2 className="2xl:text-[24px] text-[18px] text-white font-semibold">
                  Flexible Engagement Models
                </h2>
              </FadeContent>
              <FadeContent className="pt-4">
                <p className="paragraph dark-bg-text">
                  From talent scaling solutions to dedicated teams - choose the
                  model that fits your budget and project timeline perfectly.
                  Contract-based software developers, full-time remote
                  developers, or hybrid arrangements all available.
                </p>
              </FadeContent>
            </FadeDown>

            <FadeDown
              className={`relative flex flex-col justify-between z-10 slate-bg rounded-[24px] px-[20px] py-[16px]  min-h-[250px]`}
            >
              <FadeContent delay={150}>
                <h2 className="2xl:text-[24px] text-[18px] text-white font-semibold">
                  Cost-Effective Quality Solutions
                </h2>
              </FadeContent>
              <FadeContent className="pt-4">
                <p className="paragraph dark-bg-text">
                  Access world-class development talent at 40-60% lower costs
                  without compromising on code quality or delivery speed.
                  It&apos;s like having a premium restaurant meal at food truck
                  prices - unexpected but real.
                </p>
              </FadeContent>
            </FadeDown>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="w-full bg-white">
        <div className="w-full text-white section">
          <HiringSolutions />
        </div>
      </div>

      {/* Section 4 */}
      <div className="w-full bg-white">
        <div className="w-full text-black section dark-bg">
          <ImageAndText
            dark
            reversed
            title="How Our Developer Hiring Process Works"
            subTitleOne="Step 1: Requirements Gathering"
            subTitleTwo="Step 2: Talent Shortlisting"
            descriptionOne="We analyze your project scope, technical requirements, team size, and timeline. Our technical consultants help refine specifications if needed. Whether you need to hire a software developer for a quick fix or hire agile development team for long-term collaboration."
            descriptionTwo="Within 24-48 hours, we present 3-5 pre-vetted candidates matching your criteria. Each developer has completed our technical assessment. No guesswork involved."
            image="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750350950/48def86a45ddf25b30059bd6ce3272b1c8d021cd_iobe1k.webp"
          />
        </div>
      </div>
      {/* Section 5 */}
      <div className="w-full">
        <div className="w-full text-white dark-bg section xl:pt-20 pt-6">
          <ImageAndText
            dark
            title="Selection & Onboarding"
            subTitleOne="Technical Screening"
            subTitleTwo="Trial Period & Onboarding"
            descriptionOne="You conduct final interviews focusing on cultural fit. We handle live coding sessions, system design reviews, and reference checks. This is where hire a dedicated development team decisions get finalized."
            descriptionTwo="Start with a 2-week trial period. Full project kickoff includes NDA signing, development environment setup, and communication protocols. Most clients convert trial developers to permanent team members within this timeframe."
            image="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750350975/7c64f2b2e1871c0f464755122b6b9046d9db2676_fimi1k.jpg"
          />
        </div>
      </div>

      {/* Section 6 */}
      <div className="w-full bg-white">
        <div className="w-full text-white  section">
          <StackCoverage />
        </div>
      </div>

      {/* Section 7 */}
      <div className="w-full">
        <div className="w-full text-black dark-bg section">
          <h2 className="section-title text-white max-w-[700px] mx-auto text-center">
            Legal & IP Security
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
            <FadeDown
              className={`relative flex flex-col justify-between z-10 slate-bg rounded-[24px] px-[20px] py-[16px]  sm:min-h-[250px] lg:min-h-[300px] min-h-[230px]`}
            >
              <FadeContent delay={150}>
                <h2 className="2xl:text-[24px] text-[18px] text-white font-semibold">
                  ✓ Intellectual Property Protection
                </h2>
              </FadeContent>
              <FadeContent className="pt-4">
                <p className="paragraph dark-bg-text">
                  All developers sign comprehensive NDA and IP transfer
                  agreements before project start. Your code stays yours.
                  Always.
                </p>
              </FadeContent>
            </FadeDown>

            <FadeDown
              className={`relative flex flex-col justify-between z-10 slate-bg rounded-[24px] px-[20px] py-[16px]   sm:min-h-[200px] min-h-[230px]`}
            >
              <FadeContent delay={150}>
                <h2 className="2xl:text-[24px] text-[18px] text-white font-semibold">
                  ✓ Compliant Contractor Framework
                </h2>
              </FadeContent>
              <FadeContent className="pt-4">
                <p className="paragraph dark-bg-text">
                  Invoices issued through established legal entities. Clear
                  contractor agreements define scope and deliverables. Full-time
                  remote developers work under the same rigorous legal framework
                  as project-based contractors.
                </p>
              </FadeContent>
            </FadeDown>

            <FadeDown
              className={`relative flex flex-col justify-between z-10 slate-bg rounded-[24px] px-[20px] py-[16px]  sm:min-h-[200px] min-h-[230px]`}
            >
              <FadeContent delay={150}>
                <h2 className="2xl:text-[24px] text-[18px] text-white font-semibold">
                  ✓ Code Security & Audits
                </h2>
              </FadeContent>
              <FadeContent className="pt-4">
                <p className="paragraph dark-bg-text">
                  Optional time tracking, code reviews, and security audits
                  available. Full source code ownership transfers to client upon
                  project completion or monthly milestones.
                </p>
              </FadeContent>
            </FadeDown>
          </div>
        </div>
      </div>

      {/* Section 8 */}
      <div className="w-full bg-white">
        <div className="w-full text-black section">
          <Testimonials />
        </div>
      </div>

      {/* Section 9 */}
      <div className="w-full dark-bg overflow-hidden">
        <div className="w-full text-white section">
          <FAQ
            faqDataLeft={hireDeveloperFaqDataLeft}
            faqDataRight={hireDeveloperFaqDataRight}
          />
        </div>
      </div>

      {/* Section 10 */}
      <div className="w-full bg-white">
        <div className="w-full text-black section">
          <h2 className="section-title text-black text-center mx-auto lg:max-w-[800px] max-w-[600px]">
            Ready to Build Your Dream Development Team?
          </h2>
          <p className="paragraph slate-text mt-4 max-w-[900px] text-center mx-auto">
            Stop wasting time on endless interviews. Let us match you with
            pre-vetted developers who can start contributing from day one. Get
            your project estimate and team recommendations within 24 hours.
            Companies that hire software engineers through our platform
            typically fill positions 5x faster than traditional recruitment.
          </p>
          <div className="flex sm:flex-row flex-col justify-center items-center gap-4 sm:mt-16 mt-10">
            <Button
              iconArrow
              iconPosition="right"
              className="w-[260px] h-[56px] [@media(max-width:640px)]:w-full"
            >
              Get Free Consultation
            </Button>
            <Button
              variant="outline"
              iconArrow
              iconPosition="right"
              className="w-[275px] !h-[56px] [@media(max-width:640px)]:w-full"
            >
              View Developer Profiles
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
