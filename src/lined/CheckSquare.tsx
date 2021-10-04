import * as React from 'react';

const SvgCheckSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgCheckSquare"
    {...props}
  >
    <path
      d="M8.5 13.1l1.05.95 1.05.95 2.45-3 2.45-3M19 21H5a2.006 2.006 0 01-2-2V5a2.008 2.008 0 012-2h14a2.006 2.006 0 012 2v14a2 2 0 01-2 2z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCheckSquare;
