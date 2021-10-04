import * as React from 'react';

const SvgNavigation2 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgNavigation2"
    {...props}
  >
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.5 21.1L12 2.9l6.5 18.2-6.5-3.9-6.5 3.9z"
    />
  </svg>
);

export default SvgNavigation2;
