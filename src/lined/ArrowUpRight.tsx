import * as React from 'react';

const SvgArrowUpRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgArrowUpRight"
    {...props}
  >
    <path
      d="M5.636 18.364L18.364 5.636m0 9.09v-9.09h-9.09"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgArrowUpRight;
