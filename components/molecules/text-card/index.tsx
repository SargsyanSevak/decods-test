import { ArrowRight } from "lucide-react";
import { FC } from "react";

interface TextCardProps {
  title: string;
  id: string;
  description: string;
}

const TextCard: FC<TextCardProps> = ({ title, description, id }) => {
  return (
    <div className="w-full max-w-[500px]">
      <div className="flex justify-between items-center">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-between 2xl:w-[63px] w-[50px]">
              <div className="w-[1px] h-[34px] bg-[#FCFDFF]" />
              <h2 className="paragraph text-white">{id}</h2>
            </div>
            <h2 className="text-white text-[20px] whitespace-nowrap">
              {title}
            </h2>
          </div>
          <span className="rotate-[-45deg]">
            <ArrowRight color="#7F7F7F" size={34} />
          </span>
        </div>
      </div>
      <p className="paragraph text-[#7F7F7F] pl-12 mt-4 text-left">
        {description}
      </p>
    </div>
  );
};

export default TextCard;
