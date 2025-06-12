import React from "react";

const IconXBlack = ({
  width,
  height,
}: {
  width?: string | number;
  height?: string | number;
}) => {
  return (
    <svg
      width={width || "15"}
      height={height || "14"}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_4417_8400"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="15"
      >
        <path
          d="M0.964844 0L15.5725 0L15.5725 14.6076L0.964844 14.6076L0.964844 0Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_4417_8400)">
        <path
          d="M11.8511 0.03125L14.0913 0.03125L9.19778 5.63848L14.9553 13.2699L10.4478 13.2699L6.91482 8.64244L2.87686 13.2699L0.634591 13.2699L5.86829 7.27036L0.347656 0.0322934L4.96992 0.0322934L8.15855 4.2612L11.8511 0.03125ZM11.0634 11.926L12.305 11.926L4.29171 1.30524L2.96033 1.30524L11.0634 11.926Z"
          fill="gray"
        />
      </g>
    </svg>
  );
};

export default IconXBlack;
