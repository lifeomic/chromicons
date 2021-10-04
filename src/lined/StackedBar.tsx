import * as React from 'react';

const SvgStackedBar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit={10}
    width={24}
    height={24}
    viewBox="0 0 24 24"
    data-icon="SvgStackedBar"
    {...props}
  >
    <path d="M18 14v-4m0 10v-2m-6-6V4m0 16v-4m-6-1v-1m0 6v-1" />
  </svg>
);

export default SvgStackedBar;
