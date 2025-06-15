"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type ScrollItem = {
  title: string;
  src: string;
};

type Props = {
  items: ScrollItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

const InfiniteHorizontalScroll: React.FC<Props> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [animationDuration, setAnimationDuration] = useState("40s");

  useEffect(() => {
    // Set animation duration based on speed prop
    if (speed === "fast") setAnimationDuration("20s");
    else if (speed === "slow") setAnimationDuration("80s");
    else setAnimationDuration("40s");
  }, [speed]);

  useEffect(() => {
    if (listRef.current) {
      const totalWidth = listRef.current.scrollWidth;
      setScrollWidth(totalWidth / 2);
    }
  }, [items]);

  const animationName = `scroll-${scrollWidth}-${direction}`;

  useEffect(() => {
    if (!scrollWidth) return;

    const styleId = `scroll-animation-${scrollWidth}-${direction}`;
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;

    const from = "0px";
    const to = direction === "left" ? `-${scrollWidth}px` : `${scrollWidth}px`;

    style.innerHTML = `
      @keyframes ${animationName} {
        0% { transform: translateX(${from}); }
        100% { transform: translateX(${to}); }
      }
    `;
    document.head.appendChild(style);

    // Cleanup not needed because we want it to persist
  }, [scrollWidth, direction, animationName]);

  const scrollingItems = [...items, ...items]; // duplicate list

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full h-full dark-bg overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={listRef}
        style={{
          animationName: animationName,
          animationDuration: animationDuration,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDirection: "normal",
          whiteSpace: "nowrap",
        }}
        className={cn(
          "flex items-center w-max min-w-full shrink-0 flex-nowrap gap-8 h-full",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {scrollingItems.map((item, index) => (
          <li className="relative pl-10" key={`${item.src}-${index}`}>
            <Image
              width={100}
              height={100}
              src={item.src}
              alt={item.title}
              className="pointer-events-none select-none"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteHorizontalScroll;
