import { Button } from "@/components/atoms/button";
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
          <h1 className="section-title text-black max-w-[600px]">
            More than a team - your tech partner
          </h1>
          <div className="w-full mt-5 flex lg:flex-row flex-col gap-20">
            <div className="overflow-hidden ">
              <Image
                src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750228242/f42a459574c12c448a60a26c585210fa47d8394e_fhcsxg.jpg"
                width={712}
                height={550}
                alt="about"
                className="object-cover rounded-[24px] w-full min-w-[500px] rounded-tr-[120px]"
              />
            </div>
            <div className="w-full  max-w-[380px] flex flex-col gap-4">
              <p className="paragraph slate-text">
                Our team consists of designers, product strategists, and
                experienced software engineers who approach each project with
                care and precision.
              </p>
              <p className="paragraph text-black">
                Thanks to our collective software development team expertise, we
                craft reliable and elegant systems that solve real-world
                problems. We believe in a hands-on approach, treating your goals
                as our own.
              </p>
              <a
                href="https://calendly.com/help-decods/30min"
                target="_blank"
                rel="noreferrer"
                aria-label="calendly"
                className="w-fit [@media(max-width:480px)]:w-full mt-4"
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
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="w-full dark-bg">
        <div className="w-full text-white section">WHO WE ARE</div>
      </div>
    </div>
  );
};

export default Page;
