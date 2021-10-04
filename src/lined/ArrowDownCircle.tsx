import * as React from 'react';

const SvgArrowDownCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgArrowDownCircle"
    {...props}
  >
    <path
      d="M12 8.142v7.716l1.75-1.9 1.75-1.9m-7 0l1.75 1.9 1.75 1.9M21 12a9 9 0 11-9-9 9 9 0 019 9z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgArrowDownCircle;
