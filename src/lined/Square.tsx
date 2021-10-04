import * as React from 'react';

const SvgSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgSquare"
    {...props}
  >
    <path
      d="M21 19a2.006 2.006 0 01-2 2H5a2.006 2.006 0 01-2-2V5a2.006 2.006 0 012-2h14a2.006 2.006 0 012 2z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSquare;
