import * as React from 'react';

const SvgTerminal = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgTerminal"
    {...props}
  >
    <path
      d="M3 4.791l6.762 6.762L3 18.314m7.767.895H21"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTerminal;
