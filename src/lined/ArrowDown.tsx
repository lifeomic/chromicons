import * as React from 'react';

const SvgArrowDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgArrowDown"
    {...props}
  >
    <path
      d="M12 3v18m-6.427-6.427L12 21l6.427-6.427"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgArrowDown;
