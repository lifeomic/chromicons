import * as React from 'react';

const SvgSurvivalCurve = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgSurvivalCurve"
    {...props}
  >
    <path
      d="M3 3v18h18M3 16.9a6.526 6.526 0 001.813-.85A3.9 3.9 0 006.1 14.6c.3-.55.45-1.35.75-2.013A1.716 1.716 0 018.5 11.4c1.15 0 1.575.875 2.025 1.75s.925 1.75 2.175 1.75c.95 0 1.525-.725 1.887-1.625A11.843 11.843 0 0015.2 10.6a30.888 30.888 0 01.512-3.138A3.472 3.472 0 0117.5 5a1.987 1.987 0 012.2.275A4.4 4.4 0 0121 7.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSurvivalCurve;
