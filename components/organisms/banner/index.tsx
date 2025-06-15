import { Button } from "@/components/atoms/button";
import { FadeContent, FadeDown } from "@/components/molecules";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col justify-between items-center lg:gap-20 gap-14">
      <div className="flex flex-col justify-center gap-8 h-full">
        <FadeContent>
          <h2 className="section-title text-black max-w-[700px]">
            Ready to Transform Your Business with Decods?
          </h2>
        </FadeContent>
        <FadeContent>
          <p className="paragraph mt-[-6px] slate-text max-w-[470px]">
            Join 200+ satisfied clients who trusted us to build their digital
            solutions. Get started with a free consultation and detailed project
            estimate.
          </p>
        </FadeContent>

        <div className="flex items-center sm:gap-4 gap-3 mt-2 [@media(max-width:480px)]:flex-col">
          <FadeDown className="[@media(max-width:480px)]:!w-full">
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
                className="!h-[56px] w-[187px] [@media(max-width:480px)]:w-full"
              >
                Book a Call
              </Button>
            </a>
          </FadeDown>
          <FadeDown delay={0.2} className="[@media(max-width:480px)]:!w-full">
            <Button
              iconArrow
              iconPosition="right"
              className="!h-[56px] !w-[187px] [@media(max-width:480px)]:!w-full"
              variant="outline"
            >
              Contact Us
            </Button>
          </FadeDown>
        </div>
      </div>
      <div className="lg:min-w-[470px] lg:w-auto w-full  min-h-[500px]  rounded-[24px] lg:rounded-tl-[120px] rounded-tl-[80px] relative overflow-hidden [@media(max-width:640px)]:!h-[400px]">
        <Image
          src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1749046356/65a153381e5c2c69089a039805a893ac99547596_f8quwj.jpg"
          width={470}
          height={650}
          alt="banner"
          className="object-cover h-[550px] flex-1 [@media(max-width:1024px)]:!w-full"
        />
        <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-b from-transparent to-black">
          <FadeContent>
            <p className="2xl:paragraph text-[14px] text-white font-medium italic  line-clamp-4">
              “Speak directly with our technical experts. No sales pressure,
              just honest advice on the best approach for your project.”
            </p>
          </FadeContent>
        </div>
      </div>
    </div>
  );
};

export default Banner;
