import * as React from 'react';

const SvgPieChart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgPieChart"
    {...props}
  >
    <path
      d="M19.9 16.3a9.493 9.493 0 01-3.275 3.4A8.819 8.819 0 0112 21 8.989 8.989 0 014.288 7.375 9.544 9.544 0 017.6 4.1M21 12a8.963 8.963 0 00-9-9v8.9l4.5.05z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPieChart;
