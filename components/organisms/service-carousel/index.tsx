import Image from "next/image";
import { Heart, Layers, ShoppingCart } from "lucide-react";
import { IconCloud, IconDollar, IconHome } from "@/assets";

const ServiceCarousel = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-between gap-20">
        <div className="">
          <h2 className="2xl:text-[64px] text-[50px] 2xl:leading-[64px] leading-[50px] font-bold max-w-[872px]">
            Leading Software Development Company — Comprehensive Custom
            Solutions
          </h2>
          <div className="flex gap-10 mt-20">
            <p className="paragraph text-[#6f6f6f] 2xl:max-w-[500px] max-w-[380px]">
              As a trusted software development company,{" "}
              <span className="text-black font-bold">
                Decods specializes in delivering custom software development
                services{" "}
              </span>
              that transform business ideas into powerful digital solutions. Our
              offshore software development team combines global talent with
              cost-effective pricing. This approach makes enterprise software
              solutions accessible to businesses of all sizes.
              <br />
              <br />
              Our full-cycle software development covers every project aspect.{" "}
              <span className="text-black font-bold">
                From initial concept to ongoing maintenance.
              </span>{" "}
              Whether you need custom business applications for workflow
              automation, enterprise software solutions for complex
              organizational needs, or digital product development for
              market-ready SaaS platforms, we provide comprehensive IT services
              that drive measurablebusiness results.
            </p>
            <p className="paragraph text-[#6f6f6f] 2xl:max-w-[500px] max-w-[380px]">
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
              ensuring every solution meets the highest standards of reliability
              and security.
            </p>
          </div>
        </div>
        <div className="2xl:w-[576px] w-[480px] 2xl:min-w-[576px] min-w-[480px]  rounded-[24px] rounded-tl-[120px] overflow-hidden mt-4">
          <Image
            src="https://res.cloudinary.com/dudf3yqtz/image/upload/v1749136929/2c148758ec5a882d3901266ceb7c4d8f61581922_ehkkd7.webp"
            width={576}
            height={916}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="mt-24">
        <h2 className="text-black 2xl:text-[52px] text-[44px] 2xl:leading-[52px] leading-[44px] font-bold max-w-[576px]">
          Key Technologies & Specializations
        </h2>
        <div className="grid grid-cols-3 mt-10 gap-4">
          <div className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1">
            <span>
              <Layers size={32} />
            </span>
            <h2 className="2xl:text-[24px] text-[20px] leading-[100%] font-bold whitespace-nowrap mt-2">
              Custom ERP and CRM Development
            </h2>
            <p className="paragraph text-[#05050580]">
              for streamlined business operations
            </p>
          </div>

          <div className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1">
            <span>
              <IconCloud />
            </span>
            <h2 className="2xl:text-[24px] text-[20px] leading-[100%] font-bold whitespace-nowrap mt-2">
              SaaS Application Development
            </h2>
            <p className="paragraph text-[#05050580]">
              with multi-tenant architectures
            </p>
          </div>
          <div className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1">
            <span>
              <ShoppingCart size={32} />
            </span>
            <h2 className="2xl:text-[24px] text-[20px] leading-[100%] font-bold whitespace-nowrap mt-2">
              E-commerce Development
            </h2>
            <p className="paragraph text-[#05050580]">
              with integrated payment systems
            </p>
          </div>
          <div className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1">
            <span>
              <Heart size={32} />
            </span>
            <h2 className="2xl:text-[24px] text-[20px] leading-[100%] font-bold whitespace-nowrap mt-2">
              Healthcare Solutions
            </h2>
            <p className="paragraph text-[#05050580]">(HIPAA compliance)</p>
          </div>
          <div className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1">
            <span>
              <IconDollar />
            </span>
            <h2 className="2xl:text-[24px] text-[20px] leading-[100%] font-bold whitespace-nowrap mt-2">
              Financial Applications
            </h2>
            <p className="paragraph text-[#05050580]">(PCI, KYC compliance)</p>
          </div>
          <div className="bg-[#0505050F] p-[20px] rounded-[24px] flex flex-col gap-1">
            <span>
              <IconHome />
            </span>
            <h2 className="2xl:text-[24px] text-[20px] leading-[100%] font-bold whitespace-nowrap mt-2">
              Real Estate Platforms
            </h2>
            <p className="paragraph text-[#05050580]">
              (CRM, mobile applications)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCarousel;
