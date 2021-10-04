import * as React from 'react';

const SvgCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgCheck"
    {...props}
  >
    <path
      d="M3 14.7l2.7 2.45 2.7 2.45 6.3-7.6L21 4.4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCheck;
