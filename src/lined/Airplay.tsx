import * as React from 'react';

const SvgAirplay = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgAirplay"
    {...props}
  >
    <path
      d="M5.7 15.6h-.9A1.8 1.8 0 013 13.8v-9A1.8 1.8 0 014.8 3h14.4A1.8 1.8 0 0121 4.8v9a1.8 1.8 0 01-1.8 1.8h-.9m-6.3-1l5.5 6.4h-11z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgAirplay;
