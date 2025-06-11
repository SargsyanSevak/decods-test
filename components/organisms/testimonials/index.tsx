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

const Testimonials = () => {
  return (
    <div className="w-full">
      <h2 className="section-title  text-black text-center">
        What Our Clients Say
      </h2>

      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full mt-10"
      >
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem key={index} className="lg:basis-1/2 xl:basis-1/3 ">
              <div className="bg-[#0505050F] rounded-[24px] rounded-tl-[120px] rounded-br-[120px]  h-[350px] mt-10 p-6 relative">
                <div className="absolute top-[-26px] right-8">
                  <Image
                    src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1749573200/feedback-icon_kcrrvk.png"
                    width={80}
                    height={80}
                    alt="quote"
                  />
                </div>
                <div className="w-full h-[250px]">
                  <p className="break-words whitespace-normal 2xl:pt-20 sm:pt-24 md:pt-[70px] text-[#050505] font-medium paragraph">
                    {item.text}
                  </p>
                </div>

                <div className="w-full h-[100px]">
                  <div className="text-black font-semibold text-[18px]">
                    {item.by}
                  </div>
                  <div className="paragraph  text-[#05050580] mt-1">
                    {item.company}
                  </div>
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
