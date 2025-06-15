import React from "react";
import FadeDown from "../fade-down";
import { Input } from "@/components/atoms/input";
import { Button } from "@/components/atoms/button";
import FadeContent from "../fade-content";

const Subscribe = () => {
  return (
    <div className="flex flex-col md:gap-6 gap-3 md:max-w-[300px] max-w-full">
      <FadeContent>
        <h2 className="text-[16px] text-white font-semibold">
          SUBSCRIBE
          <br /> TO NEWSLETTER
        </h2>
      </FadeContent>
      <FadeDown>
        <Input
          placeholder="Enter your email"
          type="email"
          className="py-6 pl-0 placeholder:text-[#ccc] placeholder:text-[16px] border-0 border-b border-b-[#BCBCCA] rounded-none !focus:outline-none !focus:ring-0 !outline-none !ring-0"
        />
      </FadeDown>
      <FadeDown delay={0.2}>
        <Button
          variant="secondary"
          className="!h-[44px] w-[145px] !text-[16px] md:mt-0 mt-4"
        >
          Subscribe
        </Button>
      </FadeDown>
    </div>
  );
};

export default Subscribe;
