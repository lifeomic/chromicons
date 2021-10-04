import * as React from 'react';

const SvgX = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgX"
    {...props}
  >
    <path
      d="M5.636 5.636l12.728 12.728m-12.728 0L18.364 5.636m0 0"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgX;
