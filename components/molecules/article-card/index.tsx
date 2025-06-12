import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface ArticleCardProps {
  image: string;
  title: string;
  category: string;
  timeToRead: string;
  id: number;
  date: string;
}
const ArticleCard: FC<ArticleCardProps> = ({
  image,
  title,
  category,
  timeToRead,
  date,
  id,
}) => {
  return (
    <Link href={`/articles/${id}`} className="bg-white rounded  text-black">
      <div className="w-full h-[400px] rounded-[24px] overflow-hidden relative group">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="w-full h-full object-cover rounded-t transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute top-[20px] right-[20px] bg-white rounded-[9999px] px-[12px] py-[6px]">
          <p className="text-sm font-medium text-[#050505]">{category}</p>
        </div>
      </div>

      <div className="flex flex-col  mt-3">
        <h3 className="font-bold text-[18px] mb-2 line-clamp-2 leading-[24px] cursor-pointer hover:opacity-65 transition-all duration-300">
          {title}
        </h3>
        <p className="text-sm text-[#05050580] font-medium">
          {date} · {timeToRead}
        </p>
      </div>
    </Link>
  );
};

export default ArticleCard;
