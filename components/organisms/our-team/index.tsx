"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/atoms/carousel";
import { FadeContent, FadeDown } from "@/components/molecules";
import { IconLinkedinBlack } from "@/assets";
import { ourTeamData } from "@/mock";

const OurTeam = () => {
  return (
    <div className="w-full">
      <FadeContent className="flex flex-col justify-center items-center">
        <FadeContent>
          <h2 className="section-title  text-black text-center">
            Meet Our Team
          </h2>
        </FadeContent>
        <FadeDown>
          <p className="paragraph slate-text text-center max-w-[500px] mt-4">
            Our software leadership team brings together proven development
            experience with fresh perspectives on emerging technologies.
          </p>
        </FadeDown>
      </FadeContent>

      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full mt-10"
      >
        <CarouselContent>
          {ourTeamData.map((el, index) => (
            <CarouselItem
              key={index}
              className="lg:basis-1/3 xl:basis-1/4 sm:basis-1/2  h-fit "
            >
              <div className="lg:rounded-[20px] rounded-[24px] lg:rounded-tl-[98px] rounded-tl-[80px]  lg:rounded-br-[98px] rouned-tl-[80px] overflow-hidden sm:h-[415px] h-[330px]">
                <Image
                  width={348}
                  height={415}
                  src={el.image}
                  className="w-full  object-cover sm:h-[415px] h-[330px]"
                  alt={el.fullName}
                />
              </div>
              <div>
                <h2 className="text-[24px] font-semibold text-black mt-3">
                  {el.fullName}
                </h2>
                <p className="text-[14px] slate-text font-medium">
                  {el.position}
                </p>
                <a
                  href={el.linkedinUrl}
                  target="_blank"
                  className="flex items-center gap-2 mt-4"
                >
                  <IconLinkedinBlack />
                  <span className="paragraph font-bold text-[#0A0A0A] border-b border-b-[#0A0A0A]">
                    View LinkedIn Profile
                  </span>
                </a>
                <p className="paragraph slate-text mt-4 xl:max-w-[360px] max-w-full">
                  {el.bio}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="w-full flex justify-center items-center gap-2 mt-10">
          <CarouselPrevious
            variant={"secondary"}
            className="!w-[56px] !h-[56px] !rounded-full !p-0 bg-[#292929]"
          />
          <CarouselNext
            variant={"secondary"}
            className="!w-[56px] !h-[56px] !rounded-full !p-0 bg-[#292929]"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default OurTeam;
