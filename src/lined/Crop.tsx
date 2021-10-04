import * as React from 'react';

const SvgCrop = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgCrop"
    {...props}
  >
    <path
      d="M21 16.926h-9.85a4 4 0 01-4-4V2.969m9.692 18.062v-9.957a4 4 0 00-4-4H3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCrop;
