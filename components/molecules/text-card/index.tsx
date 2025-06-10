import { FC } from "react";

interface TextCardProps {
  title: string;
  description: string;
  className: string;
}

const TextCard: FC<TextCardProps> = ({ title, description, className }) => {
  return (
    <div
      className={`relative flex flex-col justify-between z-10 bg-white/15 rounded-[24px] px-[20px] py-[16px] h-[300px] ${className}`}
    >
      <h2 className="2xl:text-[32px] text-[28px] text-white font-semibold">
        {title}
      </h2>
      <p className="paragraph text-white/50 line-clamp-3">{description}</p>
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
