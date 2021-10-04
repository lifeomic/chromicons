import * as React from 'react';

const SvgTriangle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgTriangle"
    {...props}
  >
    <path
      d="M10.211 4.663L6.732 11.03 3.249 17.4a2.028 2.028 0 00.037 1.978 1.989 1.989 0 001.754 1.006h13.933a2 2 0 001.716-.97 2.061 2.061 0 00.075-2.015l-3.483-6.369L13.8 4.661a2.058 2.058 0 00-3.583 0z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTriangle;
