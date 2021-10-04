import * as React from 'react';

const SvgMail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgMail"
    {...props}
  >
    <path
      d="M3 5.75h18v12.5H3V5.75zm0 0l3.9 3 3.9 3a2.107 2.107 0 002.4 0l3.9-3 3.9-3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMail;
