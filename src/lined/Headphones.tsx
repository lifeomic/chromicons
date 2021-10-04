import * as React from 'react';

const SvgHeadphones = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgHeadphones"
    {...props}
  >
    <path
      d="M3 18v-6a9 9 0 0118 0v6m0 1a2 2 0 01-2 2h0a3 3 0 01-3-3v-1a3 3 0 013-3h2zM3 19a2 2 0 002 2h0a3 3 0 003-3v-1a3 3 0 00-3-3H3z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgHeadphones;
