import Image from "next/image";
import { FadeContent } from "@/components/molecules";

const HiringSolutions = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between xl:flex-row flex-col-reverse xl:gap-20 sm:gap-10 gap-2">
        <div>
          <FadeContent className="xl:block hidden">
            <h2 className="section-title text-black font-bold max-w-[600px]">
              Complete Developer Hiring Solutions for Every Business Need
            </h2>
          </FadeContent>
          <FadeContent>
            <div className="flex justify-between xl:flex-row flex-col lg:gap-10 gap-6  mt-6">
              <p className="paragraph slate-text 2xl:max-w-[500px] max-w-full w-full">
                Finding reliable software developers shouldn&apos;t feel like
                searching for a needle in a haystack. The hiring market is
                brutal now. Honestly speaking, after working with hundreds of
                companies since 2018, we&apos;ve seen the same pain points
                repeatedly: lengthy hiring processes, mismatched skill sets, and
                budget overruns that can sink projects before they start.
                <br />
                <br />
                Quality developers command $150,000+ annually in major US
                markets. Timeline pressure keeps mounting. Smart companies are
                adapting fast through IT development outsourcing strategies that
                make financial sense.
                <br />
                <br />
                <span className="text-black italic font-semibold">
                  &ldquo;The best time to hire offshore developers was
                  yesterday. The second best time is today - global talent
                  arbitrage won&apos;t last forever as markets equalize&ldquo;
                </span>
                <br />
                <br />
                Our dedicated development teams work like an extension of your
                in-house staff. Remote developers for hire through our platform
                average 5+ years of experience and pass rigorous technical
                screenings. We&apos;re not just another external development
                provider - think of us as your strategic development partner. In
                our experience, this approach eliminates 90% of typical
                outsourcing headaches while maintaining code ownership and
                project control.
              </p>
              <div className="2xl:w-[576px] 2xl:max-w-[576px] max-w-full w-full xl:min-w-[576px] min-w-full rounded-[24px] lg:rounded-bl-[24px] rounded-bl-none sm:rounded-tl-[120px] rounded-tl-[80px]   overflow-hidden sm:mt-4 mt-0 relative xl:hidden block xl:max-h-full max-h-[700px]">
                <Image
                  src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750350918/5a0e954b9a066dcddec5dbab2535601617a7c351_trgajc.jpg"
                  width={576}
                  height={916}
                  alt="image"
                  className="w-full h-full object-cover [@media(max-width:600px)]:h-[400px] rounded-[24px] sm:rounded-tl-[120px] rounded-tl-[80px] xl:max-h-full max-h-[700px]"
                />
              </div>
              <p className="paragraph slate-text 2xl:max-w-[500px] max-w-full w-full">
                Developer augmentation services let you scale instantly. Need
                three React developers for Q2? Done. Our clients often start
                with one specialist and grow to full teams within months -
                it&lsquo;s like having a development department that adapts to
                your business needs without the overhead of permanent hires.
                <br />
                <br />
                <span className="text-black italic font-semibold">
                  &ldquo;Successful offshore collaboration isn&apos;t about
                  finding the cheapest developers - it&apos;s about finding the
                  right developers at the right price point for your specific
                  project requirements.&ldquo;
                </span>
                <br />
                <br />
                Whether you&lsquo;re hiring developers for startup MVP
                development or enterprise-level applications, our process stays
                consistent. We match technical requirements with cultural fit,
                ensuring your remote team integrates seamlessly. Clear
                communication. Aligned expectations. Efficient delivery․
                <br />
                <br />
                From full-stack developers to specialized engineers in AI,
                blockchain, or mobile development - our talent pool spans every
                major technology stack. Companies that hire offshore development
                teams through us typically see 30% faster time-to-market
                compared to traditional hiring methods. We also excel at
                outsource app development and outsource website development
                projects.
              </p>
            </div>
          </FadeContent>
        </div>
        <div className="2xl:w-[576px] 2xl:max-w-[576px] max-w-full w-full xl:min-w-[576px] min-w-full rounded-[24px] lg:rounded-bl-[24px] rounded-bl-none sm:rounded-tl-[120px] rounded-tl-[80px]   overflow-hidden sm:mt-4 mt-0 relative xl:block hidden">
          <Image
            src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1750350918/5a0e954b9a066dcddec5dbab2535601617a7c351_trgajc.jpg"
            width={576}
            height={916}
            alt="image"
            className="w-full h-full object-cover [@media(max-width:600px)]:h-[400px] rounded-[24px] sm:rounded-tl-[120px] rounded-tl-[80px]"
          />
        </div>
        <FadeContent className="xl:hidden block lg:pb-5 pb-3">
          <h2 className="2xl:text-[52px] section-title text-black font-bold max-w-[600px]">
            Complete Developer Hiring Solutions for Every Business Need
          </h2>
        </FadeContent>
      </div>
    </div>
  );
};

export default HiringSolutions;
