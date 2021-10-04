import * as React from 'react';

const SvgBellOff = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgBellOff"
    {...props}
  >
    <path
      d="M17.4 17.9H5.3m1.3 0v-7.5a5.364 5.364 0 01.8-2.8m3.4-2.5a3.355 3.355 0 01.6-.088C11.6 5 11.8 5 12 5a5.378 5.378 0 015.4 5.4v1.4m-7.488 6.8a2.508 2.508 0 00-.012.3 2.1 2.1 0 104.2 0 2.627 2.627 0 00-.013-.313M4.3 4.5l7.7 7.65 7.7 7.65M12 5V3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBellOff;
