import * as React from 'react';

const SvgCamera = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgCamera"
    {...props}
  >
    <path
      d="M19 7.6h-2.2a.945.945 0 01-1-1h0a1.914 1.914 0 00-.538-1.325A1.872 1.872 0 0013.9 4.7h-3.8a1.914 1.914 0 00-1.325.538A1.872 1.872 0 008.2 6.6h0a.945.945 0 01-1 1H5a2.008 2.008 0 00-2 2v7.7a2.008 2.008 0 002 2h14a2.006 2.006 0 002-2V9.6a2.006 2.006 0 00-2-2zm-7 2.5a2.8 2.8 0 11-1.98.82A2.791 2.791 0 0112 10.1z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCamera;
