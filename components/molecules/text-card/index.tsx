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
      className={`relative flex flex-col justify-between z-10 bg-white/15 rounded-[24px] px-[20px] py-[16px] 2xl:h-[300px] h-[250px] ${className}`}
    >
      <FadeContent delay={150}>
        <h2 className="2xl:text-[24px] text-[20px] text-white font-semibold">
          {title}
        </h2>
      </FadeContent>
      <FadeContent>
        <p className="paragraph text-white/50 line-clamp-3">{description}</p>
      </FadeContent>
    </FadeDown>
  );
};

export default TextCard;
