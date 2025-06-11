import { Button } from "@/components/atoms/button";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full flex justify-between items-center gap-20">
      <div className="flex flex-col justify-center gap-8 h-full">
        <h2 className="section-title text-black max-w-[700px]">
          Ready to Transform Your Business with Decods?
        </h2>
        <p className="paragraph mt-[-6px] !text-[#05050580] max-w-[470px]">
          Join 200+ satisfied clients who trusted us to build their digital
          solutions. Get started with a free consultation and detailed project
          estimate.
        </p>
        <div className="flex items-center gap-4 mt-2">
          <a
            href="https://calendly.com/help-decods/30min"
            target="_blank"
            rel="noreferrer"
            aria-label="calendly"
            className="w-fit"
          >
            <Button
              iconArrow
              iconPosition="right"
              className="!h-[56px] !w-[187px]"
            >
              Book a Call
            </Button>
          </a>
          <Button
            iconArrow
            iconPosition="right"
            className="!h-[56px] !w-[187px]"
            variant="outline"
          >
            Contact Us
          </Button>
        </div>
      </div>
      <div className="min-w-[470px] min-h-[500px]  rounded-[24px] rounded-tl-[120px] relative overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1749046356/65a153381e5c2c69089a039805a893ac99547596_f8quwj.jpg"
          width={470}
          height={650}
          alt="banner"
          className="object-cover h-[550px]  flex-1"
        />
        <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-b from-transparent to-black">
          <p className="2xl:paragraph text-[14px] text-white font-medium italic  line-clamp-4">
            “Speak directly with our technical experts. No sales pressure, just
            honest advice on the best approach for your project.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
