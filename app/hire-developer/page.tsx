import { Metadata } from "next";

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
  return <div className="text-white content">Hire Developer</div>;
};

export default Page;
