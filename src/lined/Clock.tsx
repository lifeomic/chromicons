import * as React from 'react';

const SvgClock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgClock"
    {...props}
  >
    <path
      d="M11.75 2.75a9 9 0 11-6.364 2.636A8.972 8.972 0 0111.75 2.75zm0 5.2v4h4.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgClock;
