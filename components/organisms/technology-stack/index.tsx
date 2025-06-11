import { Button } from "@/components/atoms/button";
import { cn } from "@/lib/utils";
import { stackData, techStack } from "@/mock";
import Image from "next/image";
import React from "react";

const TechnologyStack = () => {
  return (
    <div className="w-full flex flex-col items-center relative">
      <h2 className="section-title  2xl:leading-[56px] leading-[50px] max-w-[700px] relative z-10 text-white text-center">
        Industries We Serve & Technology Stack
      </h2>
      <p className="paragraph relative z-10 text-white/50 text-center mt-6">
        Powering Digital Transformation Across Industries
      </p>

      <div className="grid grid-cols-3 gap-6 text-white mt-20">
        {stackData.map((el, i) => {
          return (
            <div
              className={cn(
                "relative z-20",
                el.description && "flex justify-center items-center p-4"
              )}
              key={i}
            >
              {!!el.image && (
                <div className="rounded-[24px] rounded-tl-[120px] rounded-br-[120px] overflow-hidden h-[520px] w-full relative ">
                  <Image
                    src={el.image}
                    width={410}
                    height={518}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                  {!!el.title && (
                    <h2 className="text-[24px] text-white font-semibold absolute bottom-4 left-4 z-20">
                      {el.title}
                    </h2>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
                </div>
              )}

              {!!el.description && (
                <p className="paragraph text-center  text-white/50">
                  {el.description}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="w-full flex justify-center items-center my-16">
        <Button variant="secondary" iconArrow iconPosition="right">
          Hire Our Development Team
        </Button>
      </div>

      <div className="w-full relative z-20">
        <div className="w-full flex justify-between mt-10">
          {techStack.map((el) => {
            return (
              <div key={el.category} className="text-white">
                <div>
                  <h2 className="text24">{el.category}</h2>
                </div>
                <ul className="mt-5 flex flex-col gap-2">
                  {el.technologies.map((item) => {
                    return (
                      <li
                        className="paragraph text-white/50 font-medium"
                        key={item}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;
