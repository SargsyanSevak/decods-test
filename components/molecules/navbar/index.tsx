"use client";

import { Button } from "@/components/atoms/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/utils/site";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import ServicesDropdown from "../services-dropdown";
import FadeContent from "../fade-content";
import MobileMenu from "../mobile-menu";
import { useWindowSize } from "@/hooks/useWindowSize";

export default function Navbar() {
  const { width } = useWindowSize();
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { replace } = useRouter();

  const lightMode = useMemo(() => {
    return scrolled || pathname !== "/";
  }, [scrolled, pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "w-full flex items-center bg-[#050505] border-b-[1px] border-b-white/15  h-[80px] z-50 sticky !top-0 left-[-1px] right-[-1px]  transition-colors duration-75 ease-in-out ",
        scrolled && "bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.1)]",
        pathname !== "/" && "bg-white"
      )}
    >
      <div
        className={cn(
          "w-full flex items-center justify-between h-[100px] content z-50 sticky top-0  transition-colors duration-500 ease-in-out "
        )}
      >
        <ul className="lg:flex hidden items-center gap-[46px] dark-bg-text w-fit text-[16px] font-medium tracking-wide ">
          {siteConfig.leftNavMenuItems.map((el) => {
            return (
              <li key={el.label}>
                <FadeContent>
                  {pathname === el.href ? (
                    <p
                      className={cn(
                        "relative cursor-pointer after:absolute after:left-0 after:bottom-[-2px] after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:text-white transition-all duration-300 ease-in-out after:w-full",
                        lightMode &&
                          "text-black after:bg-black hover:text-black"
                      )}
                    >
                      {el.label}
                    </p>
                  ) : (
                    <Link
                      href={el.href}
                      className={cn(
                        "relative after:absolute after:left-0 after:bottom-[-4px] after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:text-white transition-all duration-300 ease-in-out",
                        pathname === el.href
                          ? "after:w-full !select-none"
                          : "after:w-0 hover:after:w-full",
                        lightMode &&
                          "text-black after:bg-black hover:text-black"
                      )}
                    >
                      {el.label}
                    </Link>
                  )}
                </FadeContent>
              </li>
            );
          })}
        </ul>
        <motion.div
          layoutId={scrolled ? "" : "logo"}
          className="flex items-center justify-center cursor-pointer"
          role="button"
          onClick={() => {
            if (pathname !== "/") {
              replace("/");
            }
          }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          <svg
            width={width > 640 ? "52" : "40"}
            height={width > 640 ? "52" : "40"}
            viewBox="0 0 80 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.5418 0.0044382C38.0087 0.0016499 39.4804 -0.0221031 40.9451 0.0776804C50.8212 0.711771 60.1087 4.47016 67.1062 10.6656C71.221 14.2685 74.3942 18.6248 76.4031 23.4273C76.5371 23.7434 76.8321 24.38 77.0388 24.9214C78.0066 27.3203 79.1777 31.5979 78.8826 34.2437C77.0567 33.8206 75.5541 31.5993 75.031 30.5415L76.3367 25.0406C76.0912 24.6185 75.831 24.2065 75.5847 23.8169C72.8339 19.3758 68.6831 15.7369 63.6375 13.3423C60.1 11.623 55.7605 10.5132 51.7273 10.3091C49.3012 10.1864 46.8386 10.3109 44.4119 10.358C43.8899 10.368 40.8055 10.3247 40.6111 10.3746L40.699 10.4429C38.1889 10.2598 35.6574 10.3158 33.1404 10.3199C31.045 10.3233 28.934 10.2703 26.8406 10.3443C26.8523 11.6117 26.8564 12.8796 26.8523 14.147C26.852 14.9504 26.8754 15.7609 26.822 16.563C23.5989 16.4852 20.6018 15.3497 18.3826 13.2798C14.0955 9.28087 15.388 4.9745 15.1746 0.00834445L30.9461 0.0142038L36.5418 0.0044382Z"
              fill={lightMode ? "#9D9D9D" : "#fff"}
              fillOpacity={lightMode ? "0.9" : "0.83"}
            />
            <path
              d="M0.0166293 19.5992L26.6344 19.5933L34.3739 19.5907C37.0162 19.59 39.6646 19.4806 42.259 20.0168C45.7585 20.7696 48.9529 22.3669 51.4862 24.6307C54.9562 27.7005 56.9118 31.8597 56.9257 36.2C56.8832 40.6256 54.8575 44.8556 51.2928 47.9622C48.8874 50.0469 45.8928 51.5219 42.6221 52.2329C39.6028 52.8621 36.5604 52.7409 33.4845 52.7364L25.0922 52.7314L9.37771 52.7319C6.69225 52.7319 4.00032 52.7682 1.31541 52.7329C1.25521 52.7321 1.19504 52.7301 1.13494 52.727L0.0339978 52.7369L0.0158437 49.6331C0.0121904 48.8061 -0.0191173 47.9582 0.106219 47.1371C0.286862 45.9538 0.904554 44.3385 1.81266 43.4376C3.07507 41.7176 5.35654 40.4207 7.60462 40.0046C8.94246 39.7571 10.3213 39.8068 11.6803 39.8051C11.686 40.6676 11.6712 41.5355 11.7035 42.3972C17.8383 42.4729 23.9805 42.42 30.1161 42.4173L35.3579 42.4154C36.6481 42.4149 38.0296 42.4827 39.3021 42.273C40.7066 42.0417 41.9937 41.5085 43.0268 40.6272C43.7091 40.0441 44.2546 39.3476 44.632 38.5777C45.0094 37.8078 45.2113 36.9796 45.2261 36.1405C45.2412 34.5603 44.4111 32.9014 43.1549 31.792C42.1367 30.8927 40.838 30.2828 39.4252 30.0407C38.2645 29.8363 36.9909 29.8899 35.8082 29.8849L30.9656 29.8805L14.2606 29.887C13.4002 29.8917 12.5399 29.9016 11.6796 29.9169C11.675 30.7809 11.6923 31.6512 11.6616 32.5145C8.18027 32.5047 5.38183 32.1965 2.77258 29.8566C1.34469 28.5761 0.336155 26.8305 0.0863245 25.0372C-0.0288955 24.2099 0.00370336 23.3643 0.00589534 22.5319L0.0166293 19.5992Z"
              fill={lightMode ? "#9D9D9D" : "#fff"}
              fillOpacity={lightMode ? "0.9" : "0.83"}
            />
            <path
              d="M40.6999 10.4427L40.6122 10.3748C40.8055 10.3249 43.8906 10.3682 44.4128 10.3581C46.8397 10.3111 49.3026 10.1866 51.729 10.3094C55.7622 10.5136 60.1012 11.6233 63.6388 13.3427C68.6844 15.7372 72.8348 19.3762 75.5857 23.8172C76.1831 24.7625 76.8711 25.8349 77.1993 26.8822C77.2184 26.9442 77.2224 26.9915 77.2134 27.0549C77.5641 27.4336 77.2764 28.2348 77.7417 28.5586C78.2667 29.1089 78.9737 34.2048 79.0052 35.0644C79.2798 42.7393 76.7694 50.2905 71.8413 56.6129C70.7762 57.9852 69.619 59.3216 68.3285 60.5343C61.453 66.9939 52.8013 71.0723 42.7823 72.0887C39.6584 72.4053 36.5182 72.3218 33.3798 72.3208L21.168 72.3238C19.1882 72.3238 17.1963 72.2626 15.2186 72.3153C15.2378 70.6901 15.1622 69.0639 15.1641 67.4377C15.1676 64.3891 15.4547 62.2172 17.6593 59.7351C19.0672 58.1497 21.2329 56.8063 23.4288 56.2471C24.5412 55.9634 25.6826 55.8456 26.8282 55.7223C26.8837 57.8048 26.8116 59.9006 26.8144 61.9851L26.8643 61.9866C28.92 62.0382 30.9912 61.9905 33.0489 61.9955C35.4931 62.0015 37.9599 62.0462 40.3947 61.8429C47.0347 61.2878 53.2639 58.9106 58.1082 54.8287C59.1772 53.9276 60.2226 52.9838 61.1438 51.962C65.0441 47.5676 67.2264 42.1726 67.3629 36.5877C67.4898 29.8345 64.6164 23.3066 59.3599 18.4062C55.4439 14.766 50.4273 12.1979 44.9074 11.0076C43.5511 10.7167 42.0977 10.4711 40.6999 10.4427Z"
              fill={lightMode ? "#292929" : "#fff"}
            />
          </svg>
        </motion.div>
        <ul
          className={cn(
            "lg:flex hidden items-center gap-[46px] dark-bg-text w-fit text-[16px] font-medium tracking-wide relative z-50",
            lightMode && "text-black hover:text-black"
          )}
        >
          <li>
            <ServicesDropdown scrolled={lightMode} />
          </li>
          <li>
            <FadeContent>
              {pathname === "/articles" ? (
                <p
                  className={cn(
                    "relative cursor-pointer after:absolute after:left-0 after:bottom-[-2px] after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:text-white transition-all duration-300 ease-in-out after:w-full",
                    lightMode && "text-black after:bg-black hover:text-black"
                  )}
                >
                  Articles
                </p>
              ) : (
                <Link
                  href={"/articles"}
                  className={cn(
                    "relative after:absolute after:left-0 after:bottom-[-4px] after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:text-white transition-all duration-300 ease-in-out",
                    pathname === "/articles"
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full",
                    lightMode && "text-black after:bg-black hover:text-black"
                  )}
                >
                  Articles
                </Link>
              )}
            </FadeContent>
          </li>
          <li>
            <FadeContent>
              <Button
                variant={lightMode ? "default" : "secondary"}
                className="!h-[44px] !w-[127px] !text-[16px] cursor-pointer  relative z-20"
                onClick={() => {
                  if (pathname !== "/contact") {
                    replace("/contact");
                  }
                }}
              >
                Contact Us
              </Button>
            </FadeContent>
          </li>
        </ul>
        <div className="text-white lg:hidden flex items-center gap-4">
          <Button
            variant={lightMode ? "default" : "secondary"}
            className="!h-[44px] !w-[127px] !text-[16px]  relative z-20"
            onClick={() => {
              if (pathname !== "/contact") {
                replace("/contact");
              }
            }}
          >
            Contact Us
          </Button>
          <MobileMenu scrolled={lightMode} />
        </div>
      </div>
    </nav>
  );
}
