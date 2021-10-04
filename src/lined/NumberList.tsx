import * as React from 'react';

const SvgNumberList = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgNumberList"
    {...props}
  >
    <path
      d="M8.653 5.6H21M8.653 12H21M8.653 18.4H21M4.228 6.972V2.991l-1.24.645m2.658 10.038H3.011s2.559-1.9 2.559-2.831a1.284 1.284 0 00-2.568 0m0 9.628a1.212 1.212 0 101-1.889l1.174-1.668H3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgNumberList;
