import * as React from 'react';

const SvgPlotNeedle = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgPlotNeedle"
    {...props}
  >
    <path d="M21 21H3V3m0 2h1.6M3 9h1.6M3 13h1.6M3 17h1.6m6.4 0v4" />
    <circle cx={11} cy={15} r={2} />
    <path d="M17 9v12" />
    <circle cx={17} cy={7} r={2} />
  </svg>
);

export default SvgPlotNeedle;
