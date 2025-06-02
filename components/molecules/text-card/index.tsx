import { ArrowRight } from "lucide-react";
import { FC } from "react";

interface TextCardProps {
  title: string;
  id: string;
  description: string;
  className: string;
}

const TextCard: FC<TextCardProps> = ({ title, description, id, className }) => {
  return (
    <div className={`relative z-10 ${className}`}>
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

// <div className="row-start-3 col-start-3 space-y-2">
//             <p className="text-sm text-gray-400">07</p>
//             <h3 className="text-lg font-semibold">
//               Industry Compliance & Security
//             </h3>
//             <p className="text-sm text-gray-300">
//               Whether you&lsquo;re in healthcare, finance, e-commerce, or any
//               regulated industry, we ensure your custom business software meets
//               all relevant compliance requirements, including GDPR, HIPAA, PCI
//               DSS, and industry-specific regulations.
//             </p>
//           </div>
