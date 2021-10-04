import * as React from 'react';

const SvgHexagon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgHexagon"
    {...props}
  >
    <path
      d="M20.1 15.6V8.4a1.8 1.8 0 00-.9-1.557l-6.3-3.6a1.8 1.8 0 00-1.8 0l-6.3 3.6A1.8 1.8 0 003.9 8.4v7.2a1.8 1.8 0 00.9 1.557l6.3 3.6a1.8 1.8 0 001.8 0l6.3-3.6a1.8 1.8 0 00.9-1.557z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgHexagon;
