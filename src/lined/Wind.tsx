import * as React from 'react';

const SvgWind = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgWind"
    {...props}
  >
    <path
      d="M8.126 5.514a2.514 2.514 0 112.514 2.513H3m9.331 10.459a2.514 2.514 0 102.513-2.513H3m0-3.457h15.185a2.826 2.826 0 10-2.826-2.826"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgWind;
