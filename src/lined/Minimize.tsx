import * as React from 'react';

const SvgMinimize = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgMinimize"
    {...props}
  >
    <path
      d="M8.3 3v5.3H3M8.3 21v-5.3H3M15.7 3v5.3H21m0 7.4h-5.3V21"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMinimize;
