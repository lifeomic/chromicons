import * as React from 'react';

const SvgPlotCurve = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgPlotCurve"
    {...props}
  >
    <path d="M8.7 3c.7 4.8 3.5 10.5 12.3 11m0 7H3V3m0 2h1.6M3 9h1.6M3 13h1.6M3 17h1.6" />
  </svg>
);

export default SvgPlotCurve;
