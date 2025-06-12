import { Articles } from "@/screens";
import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Software Development Blog | Best Practices, Trends & Insights",
  description:
    "Read expert articles on software development trends, coding best practices, code reviews, and engineering tips. Practical insights for developers, tech leads, and product teams.",
  keywords: [
    "software development blog",
    "software development articles",
    "coding best practices",
    "software engineering best practices",
    "best code review practices",
    "development trends",
    "web development trends",
    "mobile development trends",
    "software development trends",
    "programming resources",
    "technology insights",
    "IT industry news",
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
    title: "Software Development Blog | Best Practices, Trends & Insights",
    description:
      "Discover expert insights on software engineering, industry trends, and practical programming strategies from Decods. Stay ahead in tech with actionable advice.",
    url: "https://decods.com/articles",
    siteName: "Decods",
    images: [
      {
        url: "https://res.cloudinary.com/dprl3uqvi/image/upload/v1748181638/Og_Image_wl0qad.jpg",
        width: 1200,
        height: 630,
        alt: "Software Development Blog by Decods",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Blog | Best Practices, Trends & Insights",
    description:
      "Explore top trends and expert advice in software development, coding standards, and team engineering. Stay informed with the Decods tech blog.",
    creator: "@decods",
    images: [
      "https://res.cloudinary.com/dprl3uqvi/image/upload/v1748181638/Og_Image_wl0qad.jpg",
    ],
  },
};

const Page = () => {
  return <Articles />;
};

export default Page;
