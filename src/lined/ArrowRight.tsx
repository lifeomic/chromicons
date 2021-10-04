import * as React from 'react';

const SvgArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgArrowRight"
    {...props}
  >
    <path
      d="M21 12H3m11.573 6.427L21 12l-6.427-6.427"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgArrowRight;
