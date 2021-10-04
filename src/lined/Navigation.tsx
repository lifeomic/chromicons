import * as React from 'react';

const SvgNavigation = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgNavigation"
    {...props}
  >
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 11.526L21 3l-8.526 18-1.895-7.579L3 11.526z"
    />
  </svg>
);

export default SvgNavigation;
