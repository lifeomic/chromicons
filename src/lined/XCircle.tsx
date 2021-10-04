import * as React from 'react';

const SvgXCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgXCircle"
    {...props}
  >
    <path
      d="M12 3a9 9 0 11-6.364 2.636A8.972 8.972 0 0112 3zM9 9l3 3 3 3m0-6l-3 3-3 3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgXCircle;
