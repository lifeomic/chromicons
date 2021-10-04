import * as React from 'react';

const SvgBarChart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgBarChart"
    {...props}
  >
    <path
      d="M15 21V3h6v18H3v-5.6h6V21m0 0V9.1h6V21"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBarChart;
