import * as React from 'react';

const SvgTrendingDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgTrendingDown"
    {...props}
  >
    <path
      d="M21 14.6l-.8 3.2-.8 3.2-2.95-5.95L13.5 9.1l-2.65 2.1-2.65 2.1-2.6-5.15L3 3m16.4 18l-3.15-1.25-3.15-1.25"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTrendingDown;
