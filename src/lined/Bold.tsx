import * as React from 'react';

const SvgBold = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgBold"
    {...props}
  >
    <path
      d="M8.561 3v18m.674-9h3.086a4.5 4.5 0 004.5-4.5h0a4.5 4.5 0 00-4.5-4.5H5.345m0 18h8.81a4.5 4.5 0 004.5-4.5h0a4.5 4.5 0 00-4.5-4.5H8.561"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBold;
