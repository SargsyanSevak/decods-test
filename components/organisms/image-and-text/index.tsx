import { FadeContent, FadeDown } from "@/components/molecules";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC, ReactNode } from "react";

type ImageAndTextProps = {
  reversed?: boolean;
  image: string;
  title: string;
  subTitleOne: string;
  subTitleTwo: string;
  descriptionOne: string;
  descriptionTwo: string;
  button?: ReactNode;
  dark?: boolean;
};

const ImageAndText: FC<ImageAndTextProps> = ({
  reversed = false,
  image,
  title,
  subTitleOne,
  subTitleTwo,
  descriptionOne,
  descriptionTwo,
  button,
  dark,
}) => {
  const imageOrder = reversed ? "order-2 lg:order-2" : "order-2 lg:order-1";
  const textOrder = reversed ? "order-1 lg:order-1" : "order-1 lg:order-2";

  const imageBorder = reversed
    ? "rounded-tl-[80px] lg:rounded-tl-[120px] lg:rounded-tr-[24px]"
    : "rounded-tr-[80px] lg:rounded-tr-[120px]";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-10 items-center">
      {/* Text Block */}
      <div
        className={`lg:h-[500px] h-fit flex flex-col gap-2 lg:max-w-[430px] max-w-full ${textOrder}`}
      >
        <FadeContent>
          <h2
            className={cn(
              "section-title font-bold text-black",
              dark && "text-white"
            )}
          >
            {title}
          </h2>
        </FadeContent>
        <FadeContent>
          <h3
            className={cn(
              "section-sub-title text-black font-semibold",
              dark && "text-white"
            )}
          >
            {subTitleOne}
          </h3>
        </FadeContent>
        <FadeContent>
          <p
            className={cn(
              "paragraph slate-text",
              dark && "dark-bg-text xl:max-w-[429px]"
            )}
          >
            {descriptionOne}
          </p>
        </FadeContent>
        <FadeContent>
          <h3
            className={cn(
              "section-sub-title text-black font-semibold mt-4",
              dark && "text-white"
            )}
          >
            {subTitleTwo}
          </h3>
        </FadeContent>
        <FadeContent>
          <p
            className={cn(
              "paragraph slate-text",
              dark && "dark-bg-text xl:max-w-[429px]"
            )}
          >
            {descriptionTwo}
          </p>
        </FadeContent>
        {button && (
          <FadeDown className={cn(reversed && "lg:mt-10 mt-6 ")}>
            {button}
          </FadeDown>
        )}
      </div>

      {/* Image Block */}
      <div
        className={`lg:h-[500px] md:h-[400px] h-[360px] rounded-[24px] overflow-hidden ${imageOrder} ${imageBorder}`}
      >
        <Image
          src={image}
          width={715}
          height={550}
          alt="How we work"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default ImageAndText;
