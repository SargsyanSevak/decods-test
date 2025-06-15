import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconX,
  IconXBlack,
} from "@/assets";
import { cn } from "@/lib/utils";
import FadeDown from "../fade-down";

const SocLinks = ({ variant }: { variant?: "outlined" | "default" }) => {
  return (
    <div className="flex items-center gap-2">
      <FadeDown>
        <a
          aria-label="facebook"
          href="https://www.facebook.com/decodscom"
          target="_blank"
          rel="noreferrer"
          className={cn(
            "w-[40px] h-[40px] bg-white/15 hover:bg-primary transition-all duration-300 rounded-full center",
            variant === "outlined" &&
              "border border-black background-white hover:!bg-white"
          )}
        >
          <IconFacebook fill={variant === "outlined" ? "black" : ""} />
        </a>
      </FadeDown>
      <FadeDown delay={0.1}>
        <a
          aria-label="instagram"
          href="https://www.instagram.com/decods_com"
          target="_blank"
          rel="noreferrer"
          className={cn(
            "w-[40px] h-[40px] bg-white/15 hover:bg-primary transition-all duration-300 rounded-full center",
            variant === "outlined" &&
              "border border-black background-white hover:!bg-white"
          )}
        >
          <IconInstagram fill={variant === "outlined" ? "black" : ""} />
        </a>
      </FadeDown>
      <FadeDown delay={0.2}>
        <a
          aria-label="linkedin"
          href="https://www.linkedin.com/company/decods"
          target="_blank"
          rel="noreferrer"
          className={cn(
            "w-[40px] h-[40px] bg-white/15 hover:bg-primary transition-all duration-300 rounded-full center",
            variant === "outlined" &&
              "border border-black background-white hover:!bg-white"
          )}
        >
          <IconLinkedin fill={variant === "outlined" ? "black" : ""} />
        </a>
      </FadeDown>
      <FadeDown delay={0.3}>
        <a
          aria-label="x"
          href="https://x.com/decods_com"
          target="_blank"
          rel="noreferrer"
          className={cn(
            "w-[40px] h-[40px] bg-white/15 hover:bg-primary transition-all duration-300 rounded-full center",
            variant === "outlined" &&
              "border border-black background-white hover:!bg-white"
          )}
        >
          {variant === "outlined" ? <IconXBlack /> : <IconX />}
        </a>
      </FadeDown>
    </div>
  );
};

export default SocLinks;
