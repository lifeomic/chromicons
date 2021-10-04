import * as React from 'react';

const SvgGift = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgGift"
    {...props}
  >
    <path
      d="M19.2 12v9H4.8v-9M3 7.5h18V12H3zM12 21V7.5m0 0H7.95a2.25 2.25 0 110-4.5C11.1 3 12 7.5 12 7.5zm0 0h4.05a2.25 2.25 0 000-4.5C12.9 3 12 7.5 12 7.5z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgGift;
