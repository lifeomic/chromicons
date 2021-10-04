import * as React from 'react';

const SvgShuffle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgShuffle"
    {...props}
  >
    <path
      d="M21 18h-2.969a6 6 0 01-3.585-1.181M9.341 6.965a6.006 6.006 0 00-3.372-1.03H3m0 12.1h2.969A6.031 6.031 0 0012 12h0a6.031 6.031 0 016.031-6.031H21M18 9l3-3-3-3m.107 18.031l3-3-3-3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgShuffle;
