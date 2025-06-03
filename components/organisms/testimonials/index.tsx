"use client";
import { testimonials } from "@/mock";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/atoms/scroll-area";

const Testimonials = () => {
  return (
    <div className="w-full">
      <h2 className="text-[54px] text-[#292929]">What Our Clients Say</h2>
      <ScrollArea className="w-full rounded-md whitespace-nowrap py-10 pt-12">
        <div className="flex w-max space-x-8 p-4 pt-10">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="w-[561px] max-w-[561px] h-[380px] bg-gray-100 rounded-[4px] rounded-tl-[100px] rounded-br-[100px] relative p-8 border-r-[2px] border-r-[#b9b9b9] border-b-[2px] border-b-[#b9b9b9]"
            >
              <div className="w-full h-[2px] bg-gradient-to-l from-[#b9b9b9]  via-gray-100 to-transparent via-[70%] absolute top-0 left-0 rounded-[30px]" />
              <div className="w-full h-[2px] bg-gradient-to-l  via-gray-100  absolute bottom-[-2px] right-24" />
              <div className="w-[200px] h-[3px]   bg-gray-100 absolute bottom-[-2px] left-0" />
              <div className="absolute top-[-26px] right-8">
                <Image
                  src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1748956684/Vector_5_fqdvwb.png"
                  width={90}
                  height={90}
                  alt="quote"
                />
              </div>
              <div className="w-full h-[260px]">
                <p className="break-words whitespace-normal pt-24 text-[#292929] font-medium text-[16px] leading-[26px]">
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
          ))}
        </div>
        <ScrollBar color="black" orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default Testimonials;
