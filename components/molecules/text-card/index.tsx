import { FC } from "react";
import FadeContent from "../fade-content";
import FadeDown from "../fade-down";

interface TextCardProps {
  title: string;
  description: string;
  className: string;
}

const TextCard: FC<TextCardProps> = ({ title, description, className }) => {
  return (
    <FadeDown
      className={`relative flex flex-col justify-between z-10 slate-bg rounded-[24px] px-[20px] py-[16px] 2xl:h-[300px] xl:h-[250px] lg:h-[200px] h-[150px] ${className}`}
    >
      <FadeContent delay={150}>
        <h2 className="2xl:text-[24px] text-[18px] text-white font-semibold">
          {title}
        </h2>
      </FadeContent>
      <FadeContent>
        <p className="paragraph text-white line-clamp-3">{description}</p>
      </FadeContent>
    </FadeDown>
  );
};

export default TextCard;
