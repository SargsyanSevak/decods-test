import { Metadata } from "next";
import React from "react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Terms And Conditions",
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
    title: "Terms And Conditions",
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
    title: "Terms And Conditions",
    description:
      "Decods is a reliable offshore software development partner. From mobile apps to enterprise software — our developers deliver top-tier IT solutions.",
    creator: "@decods",
    images: [
      "https://res.cloudinary.com/dprl3uqvi/image/upload/v1748181638/Og_Image_wl0qad.jpg",
    ],
  },
};
const TermsAndConditions = () => {
  return (
    <div className="w-full h-full bg-white section">
      <div>
        <h1 className="text-[64px]">Terms & Conditions</h1>
        <p>
          These Terms & Conditions (hereinafter referred to as the “Agreement”)
          govern the use of the website and/or digital products provided by
          Decods (hereinafter referred to as the “Company”, “we”, “us”) by users
          (hereinafter referred to as “User”, “you”).
        </p>
        <p>Effective Date: 04.08.2025</p>
      </div>
      <article className="text-[#505050] font-medium">
        <h2 className="font-bold text-md mt-10">1. General Provisions</h2>

        <ul className="text-[14px] mt-4">
          <li className="my-2">
            1.1. This Agreement regulates the relationship between the Company
            and the User regarding the use of all digital products, websites,
            services, and content provided by the Company.
          </li>
          <li className="my-2">
            1.2. Use of our services is only permitted if you fully and
            unconditionally accept all terms of this Agreement.
          </li>
          <li className="my-2">
            1.3. If you do not agree with any part of these terms, please
            discontinue use of our resources.
          </li>
        </ul>

        <h2 className="font-bold text-md mt-10">2. Services</h2>
        <ul className="text-[14px] mt-4">
          <li className="my-2">
            2.1. The Company provides access to its digital products, software,
            interfaces, and other features available online.
          </li>
          <li className="my-2">
            2.2. We reserve the right to modify, supplement, or discontinue any
            part of our services at any time without prior notice.
          </li>
        </ul>

        <h2 className="font-bold text-md mt-10">3. Intellectual Property</h2>
        <ul className="text-[14px] mt-4">
          <li className="my-2">
            3.1. All materials presented on the website and in our products
            (including design, text, code, graphics, etc.) are the intellectual
            property of the Company or are used with appropriate legal rights.
          </li>
          <li className="my-2">
            3.2. Any copying, distribution, modification, or other use of
            materials without written permission is prohibited.
          </li>
        </ul>

        <h2 className="font-bold text-md mt-10">4. Liability</h2>
        <ul className="text-[14px] mt-4">
          <li className="my-2">
            4.1. The Company is not responsible for any damages resulting from
            the use or inability to use our services.
          </li>
          <li className="my-2">
            4.2. The User agrees not to use the services for any purposes that
            violate applicable laws, public order, or moral standards.
          </li>
          <li className="my-2">
            4.3. The User is solely responsible for the accuracy of any
            submitted data, as well as for complying with copyright and other
            legal norms when interacting with our services.
          </li>
        </ul>

        <h2 className="font-bold text-md mt-10">5. Privacy</h2>
        <ul className="text-[14px] mt-4">
          <li className="my-2">
            5.1. All information provided by the User is processed in accordance
            with our Privacy Policy, which forms an integral part of this
            Agreement.
          </li>
          <li className="my-2">
            5.2. While we take reasonable measures to protect your personal
            data, we cannot guarantee absolute security during transmission over
            the internet.
          </li>
        </ul>

        <h2 className="font-bold text-md mt-10">6. Amendments</h2>
        <ul className="text-[14px] mt-4">
          <li className="my-2">
            6.1. The Company reserves the right to modify this Agreement at any
            time.
          </li>
          <li className="my-2">
            6.2. Changes become effective upon publication of the updated
            version on the website, unless stated otherwise. Continued use of
            the services implies acceptance of the updated terms.
          </li>
        </ul>

        <h2 className="font-bold text-md mt-10">7. Final Provisions</h2>
        <ul className="text-[14px] mt-4">
          <li className="my-2">
            7.1. This Agreement is governed by the laws of [insert applicable
            jurisdiction].
          </li>
          <li className="my-2">
            7.2. Any disputes shall be resolved in accordance with applicable
            legal procedures.
          </li>
          <li className="my-2">
            7.3. If any provision of this Agreement is found to be invalid or
            unenforceable, the remaining provisions shall remain in full force
            and effect.
          </li>
        </ul>
      </article>
    </div>
  );
};

export default TermsAndConditions;
