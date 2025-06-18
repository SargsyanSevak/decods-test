import { IconEmail, IconTelegram, IconWhatsapp } from "@/assets";

const ContactLinks = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
      <div className="flex flex-col  bg-[#0505050F] rounded-[12px] lg:p-[20px] p-[16px]">
        <IconWhatsapp />

        <a
          aria-label="wa"
          href="https://wa.me/19296509060"
          target="_blank"
          rel="noreferrer"
          className="font-bold md:text-[24px] text-[16px] cursor-pointer transition-all duration-300 hover:text-primary mt-2"
        >
          +1 (929) 650-9060
        </a>
        <p className="text-[#05050580] text-[16px]">Whatsapp</p>
      </div>
      <div className="flex flex-col  bg-[#0505050F] rounded-[12px] lg:p-[20px] p-[16px]">
        <IconTelegram />
        <a
          aria-label="t"
          href="https://t.me/decods"
          target="_blank"
          rel="noreferrer"
          className="font-bold md:text-[24px] text-[16px] cursor-pointer transition-all duration-300 hover:text-primary mt-2"
        >
          @decods
        </a>
        <p className="text-[#05050580] text-[16px]">Telegram</p>
      </div>
      <div className="flex flex-col  bg-[#0505050F] rounded-[12px] lg:p-[20px] p-[16px]">
        <IconEmail />
        <a
          aria-label="email"
          href="mailto:help@decods.com"
          target="_blank"
          rel="noreferrer"
          className="font-bold md:text-[24px] text-[16px] cursor-pointer transition-all duration-300 hover:text-primary mt-2"
        >
          help@decods.com
        </a>
        <p className="text-[#05050580] text-[16px]">Email</p>
      </div>
    </div>
  );
};

export default ContactLinks;
