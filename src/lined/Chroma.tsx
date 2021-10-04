import * as React from 'react';

const SvgChroma = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgChroma"
    {...props}
  >
    <path
      d="M12 7.8a6.6 6.6 0 11-4.667 1.933A6.58 6.58 0 0112 7.8zM5.4 3h13.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgChroma;
