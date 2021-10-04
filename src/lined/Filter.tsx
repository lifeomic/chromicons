import * as React from 'react';

const SvgFilter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgFilter"
    {...props}
  >
    <path
      d="M3 4.879h18M5.152 9.433h13.7M7.6 14.277h8.8m-7.335 4.844h5.87"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgFilter;
