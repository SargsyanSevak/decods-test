import { IconBag, IconChat, IconSchedule } from "@/assets";
import { Button } from "@/components/atoms/button";
import { FadeContent, FadeDown } from "@/components/molecules";
import { FAQ, ImageAndText, OurTeam, WhoWeAre } from "@/components/organisms";
import { faqDataLeft, faqDataRight } from "@/mock";
import { Metadata } from "next";
import Image from "next/image";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About Decods - Custom Software Development Partner | Offshore Team",
  description:
    "Meet Decods — your trusted offshore development partner. 200+ successful projects, transparent pricing, and global tech talent. Get custom software solutions that drive real business results.",
  keywords: [
    "custom software development team",
    "software engineering experts",
    "technology consulting background",
    "company mission and vision",
    "software development company values",
    "software leadership team",
    "proven development experience",
    "offshore development partner",
    "global tech talent",
    "business-focused development",
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
    title: "About Decods - Custom Software Development Partner | Offshore Team",
    description:
      "We’re Decods — a team of engineers, designers, and strategists helping businesses thrive with custom software. Learn more about our story, our mission, and how we deliver results through technology.",
    url: "https://decods.com/about",
    siteName: "Decods",
    images: [
      {
        url: "https://res.cloudinary.com/dprl3uqvi/image/upload/v1748181638/Og_Image_wl0qad.jpg",
        width: 1200,
        height: 630,
        alt: "Meet the Decods team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Decods - Custom Software Development Partner | Offshore Team",
    description:
      "Discover the team behind Decods — developers, designers, and tech experts delivering high-quality custom software and digital products to businesses worldwide.",
    creator: "@decods",
    images: [
      "https://res.cloudinary.com/dprl3uqvi/image/upload/v1748181638/Og_Image_wl0qad.jpg",
    ],
  },
};

const Page = () => {
  return (
    <div className=" text-black">
      {/* Section 1 */}
      <div className="w-full bg-white">
        <div className="w-full text-black section md:pt-20 pt-10">
          <FadeContent>
            <h1 className="section-title text-black lg:max-w-[500px] sm:max-w-[480px] max-w-full">
              More than a team - your tech partner
            </h1>
          </FadeContent>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-10 items-center mt-5">
            <div
              className={`lg:h-[500px] md:h-[400px] h-[360px] min-w-[300px] rounded-[24px] overflow-hidden rounded-tr-[80px] lg:rounded-tr-[120px]`}
            >
              <Image
                src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750228242/f42a459574c12c448a60a26c585210fa47d8394e_fhcsxg.jpg"
                width={715}
                height={550}
                alt="How we work"
                className="object-cover w-full h-full"
              />
            </div>
            <div
              className={`lg:h-[500px] h-fit flex flex-col gap-2 lg:max-w-[380px] max-w-full`}
            >
              <FadeContent>
                <p className="paragraph slate-text">
                  Our team consists of designers, product strategists, and
                  experienced software engineers who approach each project with
                  care and precision.
                </p>
              </FadeContent>
              <FadeContent>
                <p className="paragraph text-black mt-4">
                  Thanks to our collective software development team expertise,
                  we craft reliable and elegant systems that solve real-world
                  problems. We believe in a hands-on approach, treating your
                  goals as our own.
                </p>
              </FadeContent>
              <FadeDown className="mt-7">
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
                    className="!h-[56px] w-[187px] [@media(max-width:480px)]:w-full"
                    type="button"
                  >
                    Book a Call
                  </Button>
                </a>
              </FadeDown>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="w-full dark-bg">
        <div className="w-full text-white section">
          <WhoWeAre />
        </div>
      </div>
      {/* Section 3 */}
      <div className="w-full bg-white">
        <div className="w-full text-black section">
          <OurTeam />
        </div>
      </div>
      {/* Section 4 */}
      <div className="w-full bg-white">
        <div className="w-full text-black section pt-5">
          <ImageAndText
            title="How We Work"
            subTitleOne="Discovery & Planning"
            subTitleTwo="Agile Development"
            descriptionOne="We start by understanding your vision, target users, and business objectives. This technology consulting approach ensures we build the right solution, not just any solution."
            descriptionTwo="Regular updates, iterative feedback, and flexible adaptation. Our custom software development team works in 2-week sprints with transparent progress tracking."
            image="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750228400/8a2fda8d890c1906db5cdc1c6c453a1e0ac1672b_mccjou.webp"
            button={
              <Button
                iconArrow
                iconPosition="right"
                className="w-[160px] lg:mt-10 mt-6 [@media(max-width:460px)]:!w-full"
              >
                Services
              </Button>
            }
          />
        </div>
      </div>
      {/* Section 5 */}
      <div className="w-full bg-white">
        <div className="w-full text-black section pt-5">
          <ImageAndText
            reversed
            title="Built-In Quality"
            subTitleOne="Quality Assurance"
            subTitleTwo="Launch & Support"
            descriptionOne="Rigorous testing, code reviews, and performance optimization. Every deliverable meets our high standards before reaching your hands."
            descriptionTwo="Smooth deployment with ongoing technical support. We're here for the long term, not just the project launch."
            image="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750228299/d6eca39e51fdbd4216c95d62e360abb944855c0e_vvyxbf.webp"
            button={
              <a
                href="https://calendly.com/help-decods/30min"
                target="_blank"
                rel="noreferrer"
                aria-label="calendly"
                className="w-fit [@media(max-width:460px)]:!w-full"
              >
                <Button
                  iconArrow
                  iconPosition="right"
                  className="!h-[56px] w-[187px] [@media(max-width:460px)]:!w-full"
                  type="button"
                >
                  Book a Call
                </Button>
              </a>
            }
          />
        </div>
      </div>

      {/* Section 6 */}
      <div className="w-full bg-white">
        <div className="w-full text-black section pt-6 flex flex-col justify-center items-center">
          <FadeContent>
            <h2 className="section-title text-black font-bold text-center lg:max-w-[900px] max-w-[380px]">
              Ready to Build Something Great?
            </h2>
          </FadeContent>
          <FadeDown>
            <FadeContent>
              <p className="paragraph slate-text max-w-[800px] text-center mt-3">
                Working with Decods means partnering with a team that cares
                about your success as much as you do. We&apos;ve helped 50+
                companies transform their ideas into profitable digital
                products.
              </p>
            </FadeContent>
          </FadeDown>

          <div className="w-full mt-16">
            <FadeContent>
              <h2 className="section-sub-title font-semibold text-black">
                Get Started Today:
              </h2>
            </FadeContent>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-6 ">
              <FadeDown className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1 sm:min-w-auto min-w-[350px]">
                <FadeContent>
                  <span className="flex items-center  mb-2">
                    <IconChat />
                  </span>
                </FadeContent>
                <FadeContent>
                  <a className="2xl:text-[24px] text-[18px] leading-[100%] font-bold lg:whitespace-nowrap whitespace-normal border-b border-b-black">
                    Schedule Free Consultation
                  </a>
                </FadeContent>
                <FadeContent>
                  <p className="paragraph slate-text">
                    Discuss your project with our experts
                  </p>
                </FadeContent>
              </FadeDown>
              <FadeDown className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1 sm:min-w-auto min-w-[350px]">
                <FadeContent>
                  <span className="flex items-center  mb-2">
                    <IconSchedule />
                  </span>
                </FadeContent>
                <FadeContent>
                  <a className="2xl:text-[24px] text-[18px] leading-[100%] font-bold lg:whitespace-nowrap whitespace-normal border-b border-b-black">
                    Request Project Estimate
                  </a>
                </FadeContent>
                <FadeContent>
                  <p className="paragraph slate-text">
                    Get transparent pricing in 24 hours
                  </p>
                </FadeContent>
              </FadeDown>
              <FadeDown className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1 sm:min-w-auto min-w-[350px]">
                <FadeContent>
                  <span className="flex items-center  mb-2">
                    <IconBag />
                  </span>
                </FadeContent>
                <FadeContent>
                  <a className="2xl:text-[24px] text-[18px] leading-[100%] font-bold lg:whitespace-nowrap whitespace-normal border-b border-b-black">
                    View Our Portfolio
                  </a>
                </FadeContent>
                <FadeContent>
                  <p className="paragraph slate-text">
                    See examples of our work
                  </p>
                </FadeContent>
              </FadeDown>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full dark-bg overflow-hidden">
        <div className="w-full text-white section">
          <FAQ faqDataLeft={faqDataLeft} faqDataRight={faqDataRight} />
        </div>
      </div>
    </div>
  );
};

export default Page;
