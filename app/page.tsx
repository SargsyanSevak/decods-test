import { Home } from "@/screens";
import { Metadata } from "next";
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Custom Software Development Company | Decods",
  description:
    "Decods is your trusted offshore software development company. We deliver full-cycle custom software development services — from IT consulting and enterprise solutions to web/mobile apps.",
  keywords: [
    // 🎯 Основные ключевые слова
    "software development company",
    "custom software development services",
    "enterprise software solutions",
    "offshore software development",
    "full-cycle software development",
    "digital product development company",
    "IT solutions provider",
    "software engineering services",
    "trusted software development partner",
    "end-to-end software development",
    "custom business applications",
    "IT consulting and development services",

    // 🔧 Вспомогательные ключи
    "business software solutions",
    "software development expertise",
    "scalable software development",
    "comprehensive IT services",
    "tailored business software",
    "advanced programming services",
    "integrated software solutions",
    "software development outsourcing services",
    "software engineering quality assurance",
    "software development services company",

    // 💰 Коммерческие ключи
    "hire software development company",
    "software development company near me",
    "custom software development cost",
    "software development consulting companies",
    "software development services provider",
    "offshore software development company",
    "remote software development team",
    "dedicated software development team",
    "enterprise software solutions cost",
    "digital product development agency",

    // 📊 LSI ключи — технологические
    "React development services",
    "Node.js development company",
    "Python software development",
    "JavaScript application development",
    "microservices architecture development",
    "cloud native development",

    // 📊 LSI ключи — отраслевые
    "fintech software development",
    "healthcare software solutions",
    "SaaS application development",
    "mobile app development services",
    "web application development",
    "e-commerce platform development",

    // 📊 LSI ключи — процессы и методологии
    "agile software development",
    "scrum development methodology",
    "DevOps implementation services",
    "software testing and QA",
    "code review and audit",
    "technical documentation services",

    // ❓ Ключи для FAQ
    "what is a software development company",
    "what does a software development company do",
    "how to choose a software development company",
    "why hire a software development company",
    "how to find reliable software development partner",
    "what to look for in a development partner",
    "what is custom software development",
    "what is offshore software development",
    "what is enterprise software development",
    "what is agile software development",
    "what programming languages for enterprise software",
    "how much does custom software cost",
    "what is full-cycle software development",
    "how long does custom software development take",
    "difference between custom and off-the-shelf software",
    "how IT solutions provider helps businesses",
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
    title: "Custom Software Development Company | Decods",
    description:
      "Decods provides scalable and cost-effective offshore software development services. We build business-critical custom applications using agile methods and modern tech stacks.",
    url: "https://decods.com",
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
    title: "Custom Software Development Company | Decods",
    description:
      "Decods is a reliable offshore software development partner. From mobile apps to enterprise software — our developers deliver top-tier IT solutions.",
    creator: "@decods",
    images: [
      "https://res.cloudinary.com/dprl3uqvi/image/upload/v1748181638/Og_Image_wl0qad.jpg",
    ],
  },
};
export default function HomePage() {
  return <Home />;
}
