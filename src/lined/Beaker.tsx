import * as React from 'react';

const SvgBeaker = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgBeaker"
    {...props}
  >
    <path
      d="M15.181 3v5.822a2 2 0 00.569 1.4l4.186 4.286A3.738 3.738 0 0121 17.117v.145A3.739 3.739 0 0117.262 21H6.738A3.739 3.739 0 013 17.262h0a3.737 3.737 0 011.041-2.588l4.221-4.4a2 2 0 00.557-1.384V3M6.378 3h11.244m-4.644 2.905h2.2m-2.2 2.905h2.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBeaker;
