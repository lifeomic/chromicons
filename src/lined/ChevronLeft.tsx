import * as React from 'react';

const SvgChevronLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgChevronLeft"
    {...props}
  >
    <path
      d="M14.9 6L12 9l-2.9 3 2.9 3 2.9 3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgChevronLeft;
