import * as React from 'react';

const SvgCornerDownLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgCornerDownLeft"
    {...props}
  >
    <path
      d="M21 3v7.105a5 5 0 01-5 5H3M8.9 21L3 15.105M8.9 9.21L3 15.105"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCornerDownLeft;
