import * as React from 'react';

const SvgArrowDownRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgArrowDownRight"
    {...props}
  >
    <path
      d="M18.364 18.364L5.636 5.636m3.638 12.728h9.09v-9.09"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgArrowDownRight;
