import { IconFacebook, IconInstagram, IconLinkedin, IconX } from "@/assets";

const SocLinks = () => {
  return (
    <div className="flex items-center gap-2">
      <a
        aria-label="facebook"
        href="https://www.facebook.com/decodscom"
        target="_blank"
        rel="noreferrer"
        className="w-[40px] h-[40px] bg-white/15 hover:bg-primary transition-all duration-300 rounded-full center"
      >
        <IconFacebook />
      </a>

      <a
        aria-label="instagram"
        href="https://www.instagram.com/decods_com"
        target="_blank"
        rel="noreferrer"
        className="w-[40px] h-[40px] bg-white/15 hover:bg-primary transition-all duration-300 rounded-full center"
      >
        <IconInstagram />
      </a>
      <a
        aria-label="linkedin"
        href="https://www.linkedin.com/company/decods"
        target="_blank"
        rel="noreferrer"
        className="w-[40px] h-[40px] bg-white/15 hover:bg-primary transition-all duration-300 rounded-full center"
      >
        <IconLinkedin />
      </a>
      <a
        aria-label="x"
        href="https://x.com/decods_com"
        target="_blank"
        rel="noreferrer"
        className="w-[40px] h-[40px] bg-white/15 hover:bg-primary transition-all duration-300 rounded-full center"
      >
        <IconX />
      </a>
    </div>
  );
};

export default SocLinks;
