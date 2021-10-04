import * as React from 'react';

const SvgChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgChevronDown"
    {...props}
  >
    <path
      d="M6 9.1L9 12l3 2.9 3-2.9 3-2.9"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgChevronDown;
