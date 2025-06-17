import React from "react";

import { Metadata } from "next";
import { ContactUs } from "@/screens";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Contact Us - Custom Software Development Partner | Offshore Team",
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
const Contact = () => {
  return <ContactUs />;
};

export default Contact;
