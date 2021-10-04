import * as React from 'react';

const SvgTruck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgTruck"
    {...props}
  >
    <path
      d="M15.666 13.673a1.584 1.584 0 01-1.58 1.579H4.579A1.584 1.584 0 013 13.673V6.2a1.584 1.584 0 011.579-1.581h9.507a1.584 1.584 0 011.58 1.581zm-3.474 1.579H21v-2.165a3.982 3.982 0 00-1.166-2.815h0a3.983 3.983 0 00-2.816-1.167h-1.35m1.8 6.154a2.061 2.061 0 102.061 2.061 2.061 2.061 0 00-2.058-2.061zm-10.234 0A2.061 2.061 0 109.3 17.32a2.061 2.061 0 00-2.063-2.061z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTruck;
