import Image from "next/image";
import { Heart, Layers, ShoppingCart } from "lucide-react";
import { IconCloud, IconDollar, IconHome } from "@/assets";
import { FadeContent, FadeDown } from "@/components/molecules";

const ServiceCarousel = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between xl:flex-row flex-col lg:gap-20 gap-10">
        <div className="">
          <FadeContent>
            <h2 className="2xl:text-[52px] lg:text-[44px] text-[32px] lg:leading-[100%] leading-[36px] font-bold max-w-[600px]">
              Leading Software Development Company
            </h2>
          </FadeContent>
          <FadeContent>
            <div className="flex justify-between md:flex-row flex-col lg:gap-10 gap-6 lg:mt-20 mt-10">
              <p className="paragraph slate-text 2xl:max-w-[500px] max-w-full w-full">
                As a trusted software development company,{" "}
                <span className="text-black font-bold">
                  Decods specializes in delivering custom software development
                  services{" "}
                </span>
                that transform business ideas into powerful digital solutions.
                Our offshore software development team combines global talent
                with cost-effective pricing. This approach makes enterprise
                software solutions accessible to businesses of all sizes.
                <br />
                <br />
                Our full-cycle software development covers every project aspect.{" "}
                <span className="text-black font-bold">
                  From initial concept to ongoing maintenance.
                </span>{" "}
                Whether you need custom business applications for workflow
                automation, enterprise software solutions for complex
                organizational needs, or digital product development for
                market-ready SaaS platforms, we provide comprehensive IT
                services that drive measurablebusiness results.
              </p>
              <p className="paragraph slate-text 2xl:max-w-[500px] max-w-full w-full">
                We excel in web application development, creating responsive,
                scalable solutions using React, Angular, and Vue. js. Our mobile
                app development services cover both native iOS and Android
                development, as well as cross-platform application development
                using React Native and Flutter.{" "}
                <span className="text-black font-bold">
                  Think of it like building with LEGO blocks — each framework
                  serves as specialized components that snap together perfectly
                  for your uniquebusiness needs.
                </span>
                <br />
                <br />
                Our expertise extends to microservices architecture development
                and cloud-native development. As an experienced IT solutions
                provider, we help businesses leverage cutting-edge technologies
                including DevOps implementation services, automated testing
                frameworks, and performance optimization strategies.
                <span className="text-black font-bold">
                  {" "}
                  Frankly, our software engineering services are backed
                  by rigorous quality assurance processes,
                </span>{" "}
                ensuring every solution meets the highest standards
                of reliability and security.
              </p>
            </div>
          </FadeContent>
        </div>
        <div className="2xl:w-[576px] 2xl:max-w-[576px] max-w-full w-full xl:min-w-[576px] min-w-full  rounded-[24px] sm:rounded-tl-[120px] rounded-tl-[80px]  overflow-hidden sm:mt-4 mt-0 relative [@media(max-width:600px)]:h-[400px]">
          <Image
            src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1749136929/2c148758ec5a882d3901266ceb7c4d8f61581922_ehkkd7.webp"
            width={576}
            height={916}
            alt="image"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black pointer-events-none p-4 flex items-end">
            <FadeContent>
              <p className="text-[14px] italic text-white leading-[20px] font-medium">
                «The global custom software development market is projected
                to reach $146.18 billion by 2030, with businesses increasingly
                choosing tailored solutions over off-the-shelf alternatives
                to gain competitive advantage and operational efficiency.»
              </p>
            </FadeContent>
          </div>
        </div>
      </div>
      <div className="lg:mt-24 md:mt-20 mt-16">
        <FadeContent>
          <h2 className="text-black section-title font-bold max-w-[576px]">
            Key Technologies & Specializations
          </h2>
        </FadeContent>

        <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:mt-10 mt-8 xl:gap-4 gap-2">
          <FadeDown className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1">
            <FadeContent>
              <span>
                <Layers size={32} />
              </span>
            </FadeContent>
            <FadeContent>
              <h2 className="2xl:text-[24px] text-[18px] leading-[100%] font-bold lg:whitespace-nowrap whitespace-normal mt-2">
                Custom ERP and CRM Development
              </h2>
            </FadeContent>
            <FadeContent>
              <p className="paragraph slate-text">
                for streamlined business operations
              </p>
            </FadeContent>
          </FadeDown>

          <FadeDown className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1">
            <FadeContent>
              <span>
                <IconCloud />
              </span>
            </FadeContent>
            <FadeContent>
              <h2 className="2xl:text-[24px] text-[18px] leading-[100%] font-bold lg:whitespace-nowrap whitespace-normal mt-2">
                SaaS Application Development
              </h2>
            </FadeContent>
            <FadeContent>
              <p className="paragraph slate-text">
                with multi-tenant architectures
              </p>
            </FadeContent>
          </FadeDown>

          <FadeDown className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1">
            <FadeContent>
              <span>
                <ShoppingCart size={32} />
              </span>
            </FadeContent>
            <FadeContent>
              <h2 className="2xl:text-[24px] text-[18px] leading-[100%] font-bold lg:whitespace-nowrap whitespace-normal mt-2">
                E-commerce Development
              </h2>
            </FadeContent>
            <FadeContent>
              <p className="paragraph slate-text">
                with integrated payment systems
              </p>
            </FadeContent>
          </FadeDown>
          <FadeDown className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1">
            <FadeContent>
              <span>
                <Heart size={32} />
              </span>
            </FadeContent>
            <FadeContent>
              <h2 className="2xl:text-[24px] text-[18px] leading-[100%] font-bold lg:whitespace-nowrap whitespace-normal mt-2">
                Healthcare Solutions
              </h2>
            </FadeContent>
            <FadeContent>
              <p className="paragraph slate-text">(HIPAA compliance)</p>
            </FadeContent>
          </FadeDown>

          <FadeDown className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1">
            <FadeContent>
              <span>
                <IconDollar />
              </span>
            </FadeContent>
            <FadeContent>
              <h2 className="2xl:text-[24px] text-[18px] leading-[100%] font-bold lg:whitespace-nowrap whitespace-normal mt-2">
                Financial Applications
              </h2>
            </FadeContent>
            <FadeContent>
              <p className="paragraph slate-text">(PCI, KYC compliance)</p>
            </FadeContent>
          </FadeDown>

          <FadeDown className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1">
            <FadeContent>
              <span>
                <IconHome />
              </span>
            </FadeContent>
            <FadeContent>
              <h2 className="2xl:text-[24px] text-[18px] leading-[100%] font-bold lg:whitespace-nowrap whitespace-normal mt-2">
                Real Estate Platforms
              </h2>
            </FadeContent>
            <FadeContent>
              <p className="paragraph slate-text">(CRM, mobile applications)</p>
            </FadeContent>
          </FadeDown>
        </div>
      </div>
    </div>
  );
};

export default ServiceCarousel;
