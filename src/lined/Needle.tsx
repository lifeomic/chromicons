import * as React from 'react';

const SvgNeedle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgNeedle"
    {...props}
  >
    <path
      d="M3.9 17l5.05-5.1L14 6.8l1.55 1.6L17.1 10l-5.05 5.05L7 20.1l-.75-.8-.75-.8-.8-.75zm6-9.2l3.1 3.1 3.1 3.1M3 21l1.25-1.25L5.5 18.5M15.8 8.2l.7-.7.7-.7M18.9 3a2.1 2.1 0 11-1.485.615A2.093 2.093 0 0118.9 3z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgNeedle;
