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
        <h2 className="section-title   max-w-[700px] relative z-10 text-white text-center">
          Industries We Serve & Technology Stack
        </h2>
      </FadeContent>
      <FadeDown>
        <FadeContent>
          <p className="paragraph relative z-10 dark-bg-text text-center mt-6">
            Powering Digital Transformation Across Industries
          </p>
        </FadeContent>
      </FadeDown>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 text-white lg:mt-20 mt-12">
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
                  <div className="rounded-[24px] lg:rounded-tl-[120px] rounded-tl-[80px] lg:rounded-br-[120px] rounded-br-[80px] overflow-hidden md:h-[520px] h-[400px] w-full relative ">
                    <Image
                      src={el.image}
                      width={410}
                      height={518}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                    {!!el.title && (
                      <h2 className="md:text-[24px] text-[20px] text-white font-semibold absolute bottom-4 left-4 z-20">
                        {el.title}
                      </h2>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
                  </div>
                )}

                {!!el.description && (
                  <FadeDown>
                    <p className="paragraph text-center dark-bg-text">
                      {el.description}
                    </p>
                  </FadeDown>
                )}
              </FadeContent>
            </div>
          );
        })}
      </div>

      <FadeDown className="w-full flex justify-center items-center md:my-16 my-10">
        <Button
          variant="secondary"
          iconArrow
          iconPosition="right"
          className="[@media(max-width:460px)]:!w-full"
        >
          Hire Our Development Team
        </Button>
      </FadeDown>

      <div className="w-full relative z-20">
        <div className="w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10 md:mt-10 mt-2">
          {techStack.map((el) => {
            return (
              <div key={el.category} className="text-white">
                <FadeContent>
                  <h2 className="text24">{el.category}</h2>
                </FadeContent>
                <ul className="xl:mt-5 mt-3 flex flex-col gap-2">
                  {el.technologies.map((item, i) => {
                    return (
                      <FadeDown key={item} delay={0.1 * i}>
                        <li className="paragraph dark-bg-text link-hover cursor-pointer">
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
