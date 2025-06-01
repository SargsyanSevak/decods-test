"use client";

import Image from "next/image";
import { FC, ReactNode } from "react";
interface AnimatedImageProps {
  btn: ReactNode;
  image: string;
}
const AnimatedImage: FC<AnimatedImageProps> = ({ btn, image }) => {
  return (
    <div className="group relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 z-0 transition-all duration-200 rounded-[4px] group-hover:rounded-bl-[300px] overflow-hidden">
        <Image src={image} alt="Card Image" fill className="object-cover" />
      </div>
      <div className="absolute inset-0 z-10 bg-black/50 pointer-events-none" />

      <div className="absolute bottom-4 left-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
        {btn}
      </div>
    </div>
  );
};

export default AnimatedImage;
