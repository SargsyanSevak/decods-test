import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Software Development Portfolio | Custom Solutions Case Studies",
  description:
    "Explore our software development portfolio with 150+ real-world case studies. Discover custom web and mobile applications, enterprise software, and award-winning digital products built by Decods.",
  keywords: [
    // 🎯 Основные
    "software development portfolio",
    "custom software examples",
    "web developer portfolio examples",
    "software developer portfolio site",
    "web development case studies",
    "software engineering portfolio projects",

    // 💼 Коммерческие
    "hire software developer for portfolio projects",
    "software development portfolio services",
    "custom software portfolio consultation",
    "software development case studies",
    "enterprise software solutions showcase",
    "successful software implementations",
    "software project portfolio company",
    "real-world software applications",
    "business software development examples",

    // 🔍 Вспомогательные
    "mobile app development portfolio",
    "SaaS development examples",
    "CRM development projects",
    "ERP implementation examples",
    "API development showcase",
    "PWA development cases",
    "healthcare software portfolio",
    "fintech development examples",
    "education software cases",
    "real estate software examples",

    // 🧠 LSI
    "best software development case studies",
    "custom software project showcases",
    "software development lifecycle showcase",
    "agile development methodology examples",
    "performance improvement examples",
    "user experience improvements",
    "cloud migration case studies",
    "microservices architecture examples",

    // ❓ FAQ
    "what is a software development portfolio",
    "how to create a custom software portfolio",
    "software developer portfolio best practices",
    "how to showcase development projects",
    "software project documentation examples",

    // 🏢 Отраслевые
    "enterprise resource planning development examples",
    "customer relationship management software cases",
    "startup MVP development portfolio",
    "marketplace development case studies",

    // 📈 Конверсионные
    "professional software development portfolio",
    "award-winning development projects",
    "ROI-focused development cases",
    "high-performance software examples",

    // ⚙️ Технологические
    "React portfolio projects",
    "Node.js API development examples",
    "Flutter development examples",
    "AWS deployment examples",
    "CI/CD implementation examples",

    // 🎨 UX/UI
    "UI/UX design portfolio integration",
    "responsive design showcase",
    "conversion-optimized interface design",
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
    title: "Software Development Portfolio | Custom Solutions Case Studies",
    description:
      "Explore software case studies and successful digital products crafted by Decods. From MVPs to enterprise systems, see how we solve business challenges with technology.",
    url: "https://decods.com/portfolio",
    siteName: "Decods",
    images: [
      {
        url: "https://res.cloudinary.com/dprl3uqvi/image/upload/v1748181638/Og_Image_wl0qad.jpg",
        width: 1200,
        height: 630,
        alt: "Software Project Portfolio - Decods",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Portfolio | Decods Case Studies",
    description:
      "See how Decods delivers innovative software solutions. Explore project examples across industries and technologies.",
    creator: "@decods",
    images: [
      "https://res.cloudinary.com/dprl3uqvi/image/upload/v1748181638/Og_Image_wl0qad.jpg",
    ],
  },
};

const Page = () => {
  return <div className="text-white content">Portfolio</div>;
};

export default Page;
