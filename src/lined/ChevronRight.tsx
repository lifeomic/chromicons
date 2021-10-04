import * as React from 'react';

const SvgChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgChevronRight"
    {...props}
  >
    <path
      d="M9.1 18l2.9-3 2.9-3L12 9 9.1 6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgChevronRight;
