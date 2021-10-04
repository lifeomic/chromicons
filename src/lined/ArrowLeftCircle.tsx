import * as React from 'react';

const SvgArrowLeftCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgArrowLeftCircle"
    {...props}
  >
    <path
      d="M15.858 12H8.142l1.9 1.75 1.9 1.75m0-7l-1.9 1.75-1.9 1.75M12 21a9 9 0 119-9 9 9 0 01-9 9z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgArrowLeftCircle;
