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
      <h2 className="text-[54px] text-[#292929]">What Our Clients Say</h2>

      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full mt-10"
      >
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem key={index} className="lg:basis-1/2 xl:basis-1/3 ">
              <div className="bg-gray-100 rounded-[4px] rounded-tl-[100px] rounded-br-[100px] border-r-[2px] border-r-[#b9b9b9] border-b-[1.6px] border-b-[#b9b9b9] h-[350px] mt-10 p-8 relative">
                <div className="w-[60%] h-[1.2px] bg-gradient-to-l from-[#b9b9b9] via-red-[#b9b9b9] to-transparent via-[60%] absolute top-[0.45px] right-0 rounded-2xl" />

                <div className="absolute top-[-26px] right-8">
                  <Image
                    src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1748956684/Vector_5_fqdvwb.png"
                    width={90}
                    height={90}
                    alt="quote"
                  />
                </div>
                <div className="w-full h-[250px]">
                  <p className="break-words whitespace-normal 2xl:pt-20 sm:pt-24 md:pt-[70px] text-[#292929] font-medium text-[16px] leading-[26px]">
                    {item.text}
                  </p>
                </div>

                <div className="w-full h-[80px]">
                  <div className="text-[#594242] font-semibold text-[16px]">
                    {item.by}
                  </div>
                  <div className="text-sm italic text-[#868686] mt-1">
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
            className="!w-[72px] !h-[48px] !rounded-[160px] !p-0 bg-[#292929]"
          />
          <CarouselNext
            variant={"secondary"}
            className="!w-[72px] !h-[48px] !rounded-[160px] !p-0 bg-[#292929]"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
