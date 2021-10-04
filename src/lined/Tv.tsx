import * as React from 'react';

const SvgTv = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgTv"
    {...props}
  >
    <path
      d="M21 18.9a2.108 2.108 0 01-2.1 2.1H5.1A2.108 2.108 0 013 18.9V9.85a2.107 2.107 0 012.1-2.1h13.8a2.107 2.107 0 012.1 2.1zM7.235 3L12 7.705 16.765 3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTv;
