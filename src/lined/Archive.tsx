import * as React from 'react';

const SvgArchive = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgArchive"
    {...props}
  >
    <path
      d="M3.6 7.1l1.3-1.75L6.2 3.6a1.065 1.065 0 01.387-.45A1.143 1.143 0 017.2 3h9.7a1.292 1.292 0 01.575.138 1.093 1.093 0 01.425.362l1.3 1.75L20.5 7a.667.667 0 01.175.35 1.771 1.771 0 01.025.35V21H3.3V7.8a.928.928 0 01.075-.387A1.036 1.036 0 013.6 7.1zm6.4 5.6h4M3.3 7.6h17.4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgArchive;
