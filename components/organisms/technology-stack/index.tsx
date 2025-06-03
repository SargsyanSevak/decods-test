import { Button } from "@/components/atoms/button";
import { cn } from "@/lib/utils";
import { stackData, techStack } from "@/mock";
import Image from "next/image";
import React from "react";

const TechnologyStack = () => {
  return (
    <div className="w-full flex flex-col items-center relative">
      <h2 className="section-title 2xl:max-w-[1000px] 2xl:leading-[56px] leading-[50px] max-w-[700px] relative z-10 text-white text-center">
        Industries We Serve & Technology Stack
      </h2>
      <p className="text-[30px] text-[#7F7F7F] relative z-10 text-center mt-6">
        Powering Digital Transformation Across Industries
      </p>

      <div className="grid grid-cols-3 gap-16 text-white mt-20">
        {stackData.map((el, i) => {
          return (
            <div
              className={cn(
                "relative z-20",
                i === 4 && "2xl:mt-[-280px] mt-[-200px]",
                i === 1 && "h-fit",
                el.description &&
                  "border-r-[1px] rounded-[4px] rounded-br-[100px] p-6 pt-4 h-fit bg-black"
              )}
              key={i}
            >
              {!!el.image && (
                <div className="rounded-tl-[50px] rounded-br-[50px] overflow-hidden h-[520px] w-full">
                  <Image
                    src={el.image}
                    width={410}
                    height={518}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              {!!el.title && (
                <h2 className="text-[20px] text-[#BFB7B7] my-6">{el.title}</h2>
              )}
              {!!el.title && (
                <div className="w-full h-[1.6px] bg-gradient-to-r from-white via-white to-transparent via-[60%]" />
              )}
              {!!el.description && (
                <p className="text-[16px] leading-[26px] text-[#BFB7B7]">
                  {el.description}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="w-full flex justify-end mt-16">
        <Button variant="secondary" iconArrow iconPosition="right">
          Hire Our Development Team
        </Button>
      </div>

      <div className="w-full relative z-20">
        <h2 className="text-[30px] text-[#BFB7B7] font-medium">
          Our Technology Expertise
        </h2>
        <div className="w-full flex justify-between mt-10">
          {techStack.map((el) => {
            return (
              <div key={el.category} className="text-[#BFB7B7]">
                <div>
                  <h2 className="text-[24px]">{el.category}</h2>
                  <div className="w-full h-[1.2px] bg-gradient-to-r from-white via-white to-transparent via-[60%] mt-1" />
                </div>
                <ul className="mt-5 flex flex-col gap-2">
                  {el.technologies.map((item) => {
                    return (
                      <li className="text-[16px] font-medium" key={item}>
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
      <div className="absolute top-[-60px] right-[5%]">
        <Image
          src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1748965526/Vector_6_ytzsrf.png"
          width={485}
          height={385}
          alt="Background Vector"
        />
      </div>

      <div className="absolute top-[-80px] left-[-70px] bottom-[-80px] opacity-[0.075] z-0 rotate-[180deg]">
        <div className="w-[485px] h-full bg-gradient-to-b from-transparent to-black">
          <Image
            src="https://res.cloudinary.com/dprl3uqvi/image/upload/v1748768621/OBJECTS_q4iemg.png"
            width={685}
            height={385}
            alt="Background Vector"
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologyStack;
