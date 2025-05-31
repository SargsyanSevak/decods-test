"use client";
import { Button } from "@/components/atoms/button";
import { FadeContent } from "@/components/molecules";
import { AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const texts = [
  "That Drives Business Growth",
  "That Boosts Your Business Potential",
  "That Fuels Your Success",
  "That Elevates Your Business",
  "That Powers Your Business Expansion",
  "That Accelerates Your Growth",
  "That Empowers Your Future",
  "That Lifts Your Business to New Heights",
  "That Sparks Your Business Growth",
  "That Shapes Your Success Story",
  "That Ignites Your Business Vision",
];

const Heroleft = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full h-full relative">
      <div className="absolute top-0 left-[-100px] w-full h-full">
        <Image
          src="https://res.cloudinary.com/dprl3uqvi/image/upload/v1748685735/Vector_1_bqrjfw.png"
          width={485}
          height={385}
          alt="Background Vector"
        />
      </div>
      <div className="flex flex-col gap-6 pt-20 relative z-10">
        <FadeContent>
          <h1 className="title">Software Development</h1>
        </FadeContent>
        <div className="relative h-[80px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              className="title text-white/50 absolute"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {texts[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <FadeContent>
          <p className="max-w-[700px] description">
            Transform your business ideas into powerful digital solutions with
            our trusted offshore development team. We deliver enterprise-grade
            software at competitive rates while ensuring quality and
            reliability. In 2025, businesses save an average of $120,000
            annually by choosing offshore development partners.
          </p>
        </FadeContent>
        <FadeContent>
          <Button
            className="w-[196px] h-[56px] mt-6"
            icon={<ArrowRight className="rotate-[-45deg]" />}
            iconPosition="right"
            variant="secondary"
          >
            Book a Call
          </Button>
        </FadeContent>

        <div className="mt-10 w-full  flex justify-between gap-10">
          <FadeContent>
            <Image
              src="https://res.cloudinary.com/dprl3uqvi/image/upload/v1748685597/Vector_wp8je1.png"
              width={522}
              height={317}
              alt="logo"
            />
          </FadeContent>

          <div className="max-w-[520px] flex flex-col gap-10 justify-between">
            <div className="w-full">
              <FadeContent>
                <h2 className="sub-title">Global Talent, Local Results</h2>
              </FadeContent>
              <FadeContent>
                <p className="text-white/50 text-[18px] leading-[24px] mt-2">
                  Access skilled developers worldwide. No compromise on
                  communication or project quality.
                </p>
              </FadeContent>
            </div>
            <div className="w-full">
              <FadeContent>
                {" "}
                <h2 className="sub-title">Cost-Effective Excellence</h2>
              </FadeContent>
              <FadeContent>
                <p className="text-white/50 text-[18px] leading-[24px] mt-2">
                  Premium software development services at 40–60% lower costs
                  than onshore alternatives.
                </p>
              </FadeContent>
            </div>
            <div className="w-full">
              <FadeContent>
                <h2 className="sub-title">Fast Team Assembly</h2>
              </FadeContent>
              <FadeContent>
                <p className="text-white/50 text-[18px] leading-[24px] mt-2">
                  Start development within 48 hours. Pre-vetted developers
                  matched to your technology stack.
                </p>
              </FadeContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroleft;
