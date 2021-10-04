import * as React from 'react';

const SvgCornerUpRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgCornerUpRight"
    {...props}
  >
    <path
      d="M21 15.105H8a5 5 0 01-5-5V3m18 12.105L15.105 21M21 15.105L15.105 9.21"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCornerUpRight;
