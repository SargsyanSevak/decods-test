import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const SolutionCard = ({
  image,
  text,
  title,
  id,
}: {
  image: string;
  text: string;
  id: number;
  title: string;
}) => {
  const even = id % 2 === 0;
  return (
    <div
      className={cn(
        "w-full flex items-center gap-20 flex-row",
        even && "flex-row-reverse"
      )}
    >
      <div
        className={cn(
          "w-full 2xl:min-w-[750px] min-w-[600px] max-w-[750px]  rounded-[4px] rounded-tl-[80px] rounded-br-[80px] overflow-hidden relative",
          even &&
            "rounded-tl-[4px] rounded-bl-[80px] rounded-tr-[80px] rounded-br-[4px] overflow-hidden relative"
        )}
      >
        <Image
          src={image}
          width={750}
          height={375}
          alt="item"
          className="h-[375px] object-cover "
        />

        <div className="absolute inset-0 bg-[#040F2491] flex items-end p-6">
          <h2
            className={cn(
              "w-full text-[20px] font-medium text-white leading-[30px] text-left",
              even && "text-right"
            )}
          >
            {title}
          </h2>
        </div>
        <div
          className={cn(
            "absolute bottom-0 right-2 rotate-[180deg]",
            even && "left-0 right-auto rotate-[0deg]"
          )}
        >
          <Image
            src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1749121713/Vector_7_pkjq7h.png"
            width={200}
            height={125}
            alt="logo"
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-[18px] text-black font-meium leading-[28px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default SolutionCard;
