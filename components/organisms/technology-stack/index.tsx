import { Button } from "@/components/atoms/button";
import { FadeDown, FadeContent } from "@/components/molecules";
import { cn } from "@/lib/utils";
import { stackData, techStack } from "@/mock";
import Image from "next/image";
import React from "react";

const TechnologyStack = () => {
  return (
    <div className="w-full flex flex-col items-center relative">
      <FadeContent>
        <h2 className="section-title  2xl:leading-[56px] leading-[50px] max-w-[700px] relative z-10 text-white text-center">
          Industries We Serve & Technology Stack
        </h2>
      </FadeContent>
      <FadeDown>
        <FadeContent>
          <p className="paragraph relative z-10 text-white/50 text-center mt-6">
            Powering Digital Transformation Across Industries
          </p>
        </FadeContent>
      </FadeDown>

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
              <FadeContent>
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
                  <FadeDown>
                    <p className="paragraph text-center  text-white/50">
                      {el.description}
                    </p>
                  </FadeDown>
                )}
              </FadeContent>
            </div>
          );
        })}
      </div>

      <FadeDown className="w-full flex justify-center items-center my-16">
        <Button variant="secondary" iconArrow iconPosition="right">
          Hire Our Development Team
        </Button>
      </FadeDown>

      <div className="w-full relative z-20">
        <div className="w-full flex justify-between mt-10">
          {techStack.map((el) => {
            return (
              <div key={el.category} className="text-white">
                <FadeContent>
                  <h2 className="text24">{el.category}</h2>
                </FadeContent>
                <ul className="mt-5 flex flex-col gap-2">
                  {el.technologies.map((item, i) => {
                    return (
                      <FadeDown key={item} delay={0.3 * i}>
                        <li className="paragraph text-white/50 font-medium">
                          {item}
                        </li>
                      </FadeDown>
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
