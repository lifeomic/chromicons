import * as React from 'react';

const SvgCheckCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgCheckCircle"
    {...props}
  >
    <path
      d="M8.5 13.1l1.05.95 1.05.95 2.45-3 2.45-3M12 3a9 9 0 11-6.364 2.636A8.972 8.972 0 0112 3z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCheckCircle;
