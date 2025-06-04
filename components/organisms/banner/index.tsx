import { Button } from "@/components/atoms/button";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full flex justify-between gap-20">
      <div className="flex flex-col gap-8">
        <h2 className="section-title text-black max-w-[700px]">
          Ready to Transform Your Business with Decods?
        </h2>
        <p className="paragraph mt-[-6px]">
          Join 200+ satisfied clients who trusted us to build their digital
          solutions. Get started with a free consultation and detailed project
          estimate.
        </p>
        <div className="flex items-center gap-4 mt-2">
          <Button
            iconArrow
            iconPosition="right"
            className="!h-[56px] !w-[187px]"
          >
            Book a Call
          </Button>

          <Button
            iconArrow
            iconPosition="right"
            className="!h-[56px] !w-[187px]"
            variant="ghost"
          >
            Contact Us
          </Button>
        </div>
        <p className="paragraph mt-3">
          Speak directly with our technical experts. No sales pressure, just
          honest advice on the best approach for your project.
        </p>
      </div>
      <div className="min-w-[600px]">
        <Image
          src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1749046356/65a153381e5c2c69089a039805a893ac99547596_f8quwj.jpg"
          width={722}
          height={482}
          alt="banner"
          className="object-contain rounded-tr-[148px] rounded-bl-[148px]"
        />
      </div>
    </div>
  );
};

export default Banner;
