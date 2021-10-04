import * as React from 'react';

const SvgTablet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgTablet"
    {...props}
  >
    <path
      d="M12 17.276v.01m-7.834 1.841a1.87 1.87 0 001.864 1.864h11.94a1.87 1.87 0 001.864-1.864V4.864A1.87 1.87 0 0017.97 3H6.03a1.87 1.87 0 00-1.864 1.864z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTablet;
