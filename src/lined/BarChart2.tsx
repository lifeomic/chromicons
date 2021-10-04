import * as React from 'react';

const SvgBarChart2 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgBarChart2"
    {...props}
  >
    <path
      d="M15 21V9.1h6V21H3v-5.6h6V21m0 0V3h6v18"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBarChart2;
