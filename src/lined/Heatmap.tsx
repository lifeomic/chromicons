import * as React from 'react';

const SvgHeatmap = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgHeatmap"
    {...props}
  >
    <path
      d="M3 21h18M3 16.8h13.2m4.8 0h-.9M3 12h5.6m3.1 0h4m3.1 0H21M3 7.2h1.4m3.7 0h1.5m4.1 0h1.9m3.8 0H21M3 3.1V3h0m7 .1V3h0m11 .1V3h0"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgHeatmap;
