import * as React from 'react';

const SvgUserPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgUserPlus"
    {...props}
  >
    <path
      d="M11.5 3a3.5 3.5 0 11-2.475 1.025A3.493 3.493 0 0111.5 3zm2.3 10.3a7.623 7.623 0 00-1.112-.225A9.333 9.333 0 0011.5 13a8.024 8.024 0 00-8 8h10m3.7-6.7V21m3.3-3.3h-6.7"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgUserPlus;
