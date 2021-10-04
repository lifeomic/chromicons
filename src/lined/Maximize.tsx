import * as React from 'react';

const SvgMaximize = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgMaximize"
    {...props}
  >
    <path
      d="M3 8.3V3h5.3M3 15.7V21h5.3M21 8.3V3h-5.3m0 18H21v-5.3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMaximize;
