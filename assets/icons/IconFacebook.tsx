import React from "react";

const IconFacebook = ({
  width,
  height,
  fill,
}: {
  width?: string;
  height?: string;
  fill?: string;
}) => {
  return (
    <svg
      width={width || "8"}
      height={height || "15"}
      viewBox="0 0 8 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.23414 14.7854V8.13773H-0.00292969V5.54701H2.23414V3.63644C2.23414 1.41923 3.58833 0.211914 5.56624 0.211914C6.51367 0.211914 7.32795 0.282453 7.56525 0.313981V2.6311L6.19347 2.63172C5.11777 2.63172 4.90949 3.14287 4.90949 3.89296V5.54701H7.47492L7.14089 8.13773H4.90949V14.7854H2.23414Z"
        fill={fill ? "black" : "#FFFFFFB3"}
      />
    </svg>
  );
};

export default IconFacebook;
