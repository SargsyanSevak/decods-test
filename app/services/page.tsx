import { ServicesScreen } from "@/screens";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Custom Software Development Services | Technology Consulting",
  description:
    "Expert custom software development company delivering scalable digital solutions. End-to-end services from MVPs to enterprise platforms. Get a free consultation today.",
  keywords: [
    "custom software development services",
    "enterprise software solutions",
    "it solutions provider",
    "digital transformation services",
    "technology consulting services",
    "end-to-end software development",
    "business application development",
    "software development consulting",
    "bespoke software development services",
    "tailored software solutions for business",
    "full-cycle software development services",
    "enterprise software development company",
    "technology consulting for startups",
    "custom business software solutions",
    "hire custom software development team",
    "outsource software development services",
    "affordable digital transformation solutions",
    "software development lifecycle",
    "digital transformation strategies",
    "enterprise application development",
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
    title: "Custom Software Development Services | Technology Consulting",
    description:
      "Explore Decods' full-cycle software development services — from strategy to deployment. Scalable enterprise solutions, digital transformation, and custom business apps.",
    url: "https://decods.com/services",
    siteName: "Decods",
    images: [
      {
        url: "https://res.cloudinary.com/dprl3uqvi/image/upload/v1748181638/Og_Image_wl0qad.jpg", // Replace if you have a services-specific image
        width: 1200,
        height: 630,
        alt: "Custom Software Development Services by Decods",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Services | Technology Consulting",
    description:
      "Need reliable software solutions? Decods delivers tailored services from MVPs to full-scale enterprise systems. Let’s build your next product.",
    creator: "@decods",
    images: [
      "https://res.cloudinary.com/dprl3uqvi/image/upload/v1748181638/Og_Image_wl0qad.jpg",
    ],
  },
};
const Services = () => {
  return <ServicesScreen />;
};

export default Services;
