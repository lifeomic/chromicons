import * as React from 'react';

const SvgTrendingUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgTrendingUp"
    {...props}
  >
    <path
      d="M3 21l2.6-5.15 2.6-5.15 2.65 2.1 2.65 2.1 2.95-5.95L19.4 3l.8 3.2.8 3.2m-7.9-3.9l3.15-1.25L19.4 3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTrendingUp;
