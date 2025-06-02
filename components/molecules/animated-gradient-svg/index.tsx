"use client";
import { memo } from "react";

const AnimatedGradientSVG = () => {
  return (
    // <div className="w-[600px] h-[400px] bg-[#838384] rounded-tr-[200px] rounded-br-[200px] relative flex justify-center items-center ml-12 overflow-hidden">
    //   {/* Background Video */}
    //   <video
    //     className="absolute top-0 left-0 w-full h-full object-cover z-0"
    //     autoPlay
    //     loop
    //     muted
    //     playsInline
    //   >
    //     <source
    //       src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    //       type="video/mp4"
    //     />
    //     Your browser does not support the video tag.
    //   </video>

    //   {/* Centered Black Shape */}
    //   <div className="w-[600px] h-[60px] bg-black rounded-tr-[200px] rounded-br-[200px] mr-[124px] z-10"></div>

    //   {/* Side Covers to simulate the missing round ends */}
    //   {/* <div className="w-[110px] h-[160px] bg-[#838384] absolute top-0 left-[-26px] rounded-bl-full z-10"></div>
    //   <div className="w-[110px] h-[160px] bg-[#838384] absolute bottom-0 left-[-26px] rounded-tl-full z-10"></div> */}
    // </div>

    <svg
      width="622"
      height="417"
      viewBox="0 0 622 417"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="animatedGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#D4D4D4">
            <animate
              attributeName="stop-color"
              values="
              #52357B;
              #213448;
              #B5A8D5;
              #2C3930;
              #003161;
              #3C3D37;
              #35374B
            "
              dur="18s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" stopColor="#838384">
            <animate
              attributeName="stopColor"
              values="
              #93B1A6;
              #445069;
              #61677A;
              #D8D9DA;
              #F1F6F9;
              #9BA4B5;
              #6B728E
            "
              dur="18s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#64748b">
            <animate
              attributeName="stop-color"
              values="
              #64748b;
              #7f848a;
              #1f2937;
              #2d3748;
              #0f766e;
              #238a77;
              #64748b
            "
              dur="18s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
      <g opacity="0.6">
        <path
          d="M0.1817 0.228234L291.022 0.154493L375.588 0.121389C404.459 0.112016 433.396 -1.26269 461.744 5.47893C499.982 14.943 534.886 35.0252 562.565 63.4873C600.481 102.082 621.848 154.373 622 208.943C621.536 264.583 599.402 317.765 560.452 356.822C534.17 383.032 501.449 401.577 465.712 410.517C432.721 418.427 399.478 416.903 365.87 416.846L274.171 416.784L102.466 416.79C73.123 416.79 43.7096 417.246 14.3729 416.803C13.7151 416.793 13.0576 416.768 12.4009 416.728L0.371478 416.853L0.173117 377.83C0.133199 367.432 -0.208886 356.772 1.16061 346.45C3.1344 331.572 9.88364 311.264 19.806 299.937C33.5999 278.312 58.5284 262.007 83.0921 256.776C97.7101 253.663 112.776 254.288 127.625 254.267C127.688 265.111 127.525 276.023 127.879 286.857C194.911 287.808 262.024 287.143 329.065 287.11L386.339 287.086C400.436 287.079 415.531 287.931 429.435 285.296C444.782 282.387 458.846 275.683 470.133 264.603C477.589 257.272 483.549 248.515 487.673 238.835C491.796 229.156 494.002 218.743 494.164 208.195C494.33 188.327 485.259 167.471 471.533 153.522C460.408 142.216 446.217 134.548 430.78 131.504C418.099 128.934 404.183 129.608 391.259 129.546L338.347 129.49L155.819 129.571C146.418 129.63 137.017 129.756 127.618 129.948C127.567 140.811 127.757 151.753 127.421 162.606C89.382 162.483 58.8047 158.607 30.2946 129.189C14.6928 113.09 3.67301 91.1443 0.943227 68.5975C-0.315727 58.1966 0.0404648 47.5646 0.0644156 37.1001L0.1817 0.228234Z"
          fill="url(#animatedGradient)"
        />
      </g>
    </svg>
  );
};

export default memo(AnimatedGradientSVG);
