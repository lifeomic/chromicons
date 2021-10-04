import * as React from 'react';

const SvgFlag = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgFlag"
    {...props}
  >
    <path
      d="M3 21V3m0 1.9h9.9v7.5H3m9.9-5.2H21l-1.25 2.1-1.25 2.1 1.25 2.1L21 15.6H11v-3.2m1.9 0l-.95 1.6-.95 1.6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgFlag;
