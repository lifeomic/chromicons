import * as React from 'react';

const SvgUserCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgUserCheck"
    {...props}
  >
    <path
      d="M11.5 3a3.5 3.5 0 11-2.475 1.025A3.493 3.493 0 0111.5 3zm4.7 11.5a7.841 7.841 0 00-4.7-1.6 8.024 8.024 0 00-8 8h7.1m2.8-1.8l1.05.95 1.05.95 2.5-3 2.5-3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgUserCheck;
