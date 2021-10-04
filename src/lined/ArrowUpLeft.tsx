import * as React from 'react';

const SvgArrowUpLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgArrowUpLeft"
    {...props}
  >
    <path
      d="M5.636 5.636l12.728 12.728M14.726 5.636h-9.09v9.09"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgArrowUpLeft;
