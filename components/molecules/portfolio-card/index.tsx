import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface PortfolioProps {
  image: string;
  title: string;
  description: string;
  category: string;
  subTitle: string;
  stack: string[];
  id: number;
}
const PortfolioCard: FC<PortfolioProps> = ({
  image,
  title,
  description,
  category,
  stack,
  subTitle,
  id,
}) => {
  return (
    <Link href={`/portfolio/${id}`} className="bg-white rounded  text-black">
      <div className="w-full sm:h-[400px] h-[300px] rounded-[24px] overflow-hidden relative group">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="w-full h-full object-cover rounded-t transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      <div className="flex flex-col  mt-3">
        <h3 className="font-bold text-[18px] mb-2 line-clamp-2 leading-[24px] cursor-pointer hover:opacity-65 transition-all duration-300">
          {title}
        </h3>
        <p className="text-sm text-[#05050580] font-medium">{category}</p>
        <p className="text-[#05050580] text-sm font-medium mt-1">
          {description}
        </p>
        <ul className="flex items-center gap-2 my-2">
          {stack.map((el) => {
            return (
              <li
                key={el}
                className="bg-black rounded-[9999px] text-white text-sm font-medium px-[12px] py-[6px]"
              >
                {el}
              </li>
            );
          })}
        </ul>
        <p className="text-[#05050580] text-sm font-medium ">{subTitle}</p>
        <p className="flex items-center gap-3 mt-4 paragraph font-semibold text-black w-fit">
          View Case Study <ArrowRight className="rotate-[-45deg]" />
        </p>
      </div>
    </Link>
  );
};

export default PortfolioCard;
