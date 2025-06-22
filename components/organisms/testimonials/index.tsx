"use client";
import { testimonials } from "@/mock";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/atoms/carousel";
import { FadeContent } from "@/components/molecules";

const Testimonials = ({ title }: { title?: string }) => {
  return (
    <div className="w-full">
      <FadeContent className="max-w-[900px] mx-auto">
        <h2 className="section-title  text-black text-center">
          {title || "What Our Clients Say"}
        </h2>
      </FadeContent>

      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full mt-10"
      >
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem key={index} className="lg:basis-1/2 xl:basis-1/3 ">
              <div className="bg-[#0505050F] rounded-[24px] lg:rounded-tl-[120px] rounded-tl-[80px] lg:rounded-br-[120px] rounded-bt-[24px]  h-[350px] mt-10 p-6 relative">
                <div className="absolute top-[-26px] right-8">
                  <Image
                    src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1749573200/feedback-icon_kcrrvk.png"
                    width={80}
                    height={80}
                    alt="quote"
                  />
                </div>
                <div className="w-full h-[250px] lg:pt-0 pt-10">
                  <FadeContent>
                    <p className="break-words whitespace-normal 2xl:pt-20 sm:pt-24 md:pt-[70px] text-[#050505] font-medium paragraph">
                      {item.text}
                    </p>
                  </FadeContent>
                </div>

                <div className="w-full h-[100px]">
                  <FadeContent className="text-black font-semibold text-[18px]">
                    {item.by}
                  </FadeContent>
                  <FadeContent className="paragraph  slate-text mt-1">
                    {item.company}
                  </FadeContent>
                </div>
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

export default Testimonials;
