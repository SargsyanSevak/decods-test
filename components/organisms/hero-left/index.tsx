"use client";
import { Button } from "@/components/atoms/button";
import { AnimatedGradientSVG, FadeContent } from "@/components/molecules";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const texts = [
  "That Drives Business Growth",
  "That Fuels Your Success",
  "That Elevates Your Business",
  "That Powers Your Business Expansion",
  "That Accelerates Your Growth",
  "That Empowers Your Future",
  "That Boosts Your Business Potential",
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
    <div className="w-full">
      <FadeContent delay={150}>
        <div className="flex flex-col gap-6 pt-6 relative z-10">
          <h1 className="title">
            Software <br /> Development
          </h1>

          <div className="relative h-[46px] my-3 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                className="text-[44px] leading-[44px] font-medium text-white/50 absolute"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {texts[index]}
              </motion.h1>
            </AnimatePresence>
          </div>
          <div className="text-white">
            <p className="max-w-[700px] text-[18px] !antialiased">
              Transform your business ideas into powerful digital solutions
              withs our trusted offshore development team. We deliver high
              quality software development at competitive rates while ensuring
              quality and reliability.
            </p>
          </div>

          <a
            href="https://calendly.com/help-decods/30min"
            target="_blank"
            rel="noreferrer"
            aria-label="calendly"
            className="w-fit"
          >
            <Button
              className="w-[196px] h-[56px] mt-4"
              variant="secondary"
              iconArrow
              iconPosition="right"
            >
              Book a Call
            </Button>
          </a>
          <div className="mt-20 w-full  flex justify-between gap-10">
            <div className="mt-6">
              <AnimatedGradientSVG />
            </div>

            <div className="max-w-[520px]  flex flex-col gap-8 justify-between bg-gradient-to-b from-black to-transparent relative z-20">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="w-full overflow-hidden"
              >
                <FadeContent>
                  <h2 className="2xl:text-[28px] text-[24px] leading-[100%] font-semibold">
                    Global Talent, Local Results
                  </h2>
                </FadeContent>
                <FadeContent>
                  <p className="text-white/50 text-[16px] leading-[24px] mt-2">
                    Access skilled developers worldwide. No compromise on
                    communication or project quality.
                  </p>
                </FadeContent>
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="w-full overflow-hidden"
              >
                {" "}
                <FadeContent>
                  <h2 className="2xl:text-[28px] text-[24px] leading-[100%] font-semibold">
                    Cost-Effective Excellence
                  </h2>
                </FadeContent>
                <FadeContent>
                  <p className="text-white/50 text-[16px] leading-[24px] mt-2">
                    Premium software development services at 40–60% lower costs
                    than onshore alternatives.
                  </p>
                </FadeContent>
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="w-full overflow-hidden"
              >
                <FadeContent>
                  <h2 className="2xl:text-[28px] text-[24px] leading-[100%] font-semibold">
                    Fast Team Assembly
                  </h2>
                </FadeContent>
                <FadeContent>
                  <p className="text-white/50 text-[16px] leading-[24px] mt-2">
                    Start development within 48 hours. Pre-vetted developers
                    matched to your technology stack.
                  </p>
                </FadeContent>
              </motion.div>
            </div>
          </div>
        </div>
      </FadeContent>
    </div>
  );
};

export default Heroleft;
