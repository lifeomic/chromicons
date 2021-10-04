import * as React from 'react';

const SvgArrowUpCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgArrowUpCircle"
    {...props}
  >
    <path
      d="M12 15.858V8.142l-1.75 1.9-1.75 1.9m7 0l-1.75-1.9-1.75-1.9M3 12a9 9 0 119 9 9 9 0 01-9-9z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgArrowUpCircle;
