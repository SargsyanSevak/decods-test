import { FadeContent, FadeDown } from "@/components/molecules";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC, ReactNode } from "react";

type ImageAndTextProps = {
  reversed?: boolean;
  image: string;
  title?: string;
  subTitleOne?: string;
  descriptionOne: string;
  descriptionTwo: string;
  descriptionThree?: string;
  button?: ReactNode;
  dark?: boolean;
  quote?: string;
};

const ImageAndTextService: FC<ImageAndTextProps> = ({
  reversed = false,
  image,
  title,
  subTitleOne,
  descriptionOne,
  descriptionTwo,
  descriptionThree,
  button,
  dark,
  quote,
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
        className={cn(
          "lg:min-h-[500px] h-fit flex flex-col gap-2 lg:max-w-[530px] max-w-full",
          textOrder,
          !title && "justify-center items-center"
        )}
      >
        {!!title && (
          <FadeContent>
            <h2
              className={cn(
                "section-title leading-[100%] max-w-[600px] font-bold text-black",
                dark && "text-white"
              )}
            >
              {title}
            </h2>
          </FadeContent>
        )}
        {subTitleOne && (
          <FadeContent>
            <h3
              className={cn(
                "section-sub-title text-black font-semibold leading-[100%] mt-3",
                dark && "text-white"
              )}
            >
              {subTitleOne}
            </h3>
          </FadeContent>
        )}

        <FadeContent>
          <p
            className={cn(
              "paragraph slate-text mt-4",
              dark && "dark-bg-text xl:max-w-[429px]"
            )}
          >
            {descriptionOne}
          </p>
        </FadeContent>

        <FadeContent>
          <p
            className={cn(
              "paragraph slate-text mt-4",
              dark && "dark-bg-text xl:max-w-[429px]"
            )}
          >
            {descriptionTwo}
          </p>
        </FadeContent>
        {!!descriptionThree && (
          <FadeContent>
            <p
              className={cn(
                "paragraph slate-text mt-4",
                dark && "dark-bg-text xl:max-w-[429px]"
              )}
            >
              {descriptionTwo}
            </p>
          </FadeContent>
        )}

        {button && (
          <FadeDown className={cn(reversed && "lg:mt-10 mt-6 ")}>
            {button}
          </FadeDown>
        )}
      </div>

      {/* Image Block */}
      <div
        className={cn(
          "lg:h-[500px] md:h-[400px] h-[360px] rounded-[24px] overflow-hidden",
          imageOrder,
          imageBorder,
          quote && "relative"
        )}
      >
        <Image
          src={image}
          width={715}
          height={550}
          alt="How we work"
          className="object-cover w-full h-full"
        />
        {!!quote && (
          <div className="absolute inset-0 flex items-end bg-gradient-to-b from-transparent via-transparent to-black py-6 px-4">
            <p className="paragraph text-white">{quote}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageAndTextService;
