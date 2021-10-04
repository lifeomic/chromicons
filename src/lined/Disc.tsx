import * as React from 'react';

const SvgDisc = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgDisc"
    {...props}
  >
    <path
      d="M21 12a9 9 0 11-9-9 9 9 0 019 9zm-9-2.761A2.761 2.761 0 1014.761 12 2.761 2.761 0 0012 9.239z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgDisc;
