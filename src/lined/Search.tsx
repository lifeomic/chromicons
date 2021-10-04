import * as React from 'react';

const SvgSearch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgSearch"
    {...props}
  >
    <path
      d="M10.1 3a7.1 7.1 0 11-5.02 2.08A7.074 7.074 0 0110.1 3zM21 21l-2.9-2.9-2.9-2.9"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSearch;
