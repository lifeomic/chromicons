import * as React from 'react';

const SvgRunning = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgRunning"
    {...props}
  >
    <path
      d="M16.155 3A1.63 1.63 0 1115 3.477 1.623 1.623 0 0116.155 3zM21 8.336l-.605.637-.606.636a2.351 2.351 0 01-2.807.453l-2.356-1.255-2.356-1.256a4.045 4.045 0 00-4.523.486l-.56.475-.561.476M3 17.907h1.867A3.571 3.571 0 007.7 16.51l3.058-3.965 3.055-3.965M14.852 21v-2.434a3.673 3.673 0 00-1.474-2.943l-1.389-1.039-1.389-1.04"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgRunning;
