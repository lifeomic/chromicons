import * as React from 'react';

const SvgArrowDownLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgArrowDownLeft"
    {...props}
  >
    <path
      d="M18.364 5.636L5.636 18.364m0-9.09v9.09h9.09"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgArrowDownLeft;
