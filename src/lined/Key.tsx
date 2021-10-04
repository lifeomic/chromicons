import * as React from 'react';

const SvgKey = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgKey"
    {...props}
  >
    <path
      d="M9.9 14.3a3.717 3.717 0 01.813 1.2A3.874 3.874 0 0111 17a4 4 0 11-7.263-2.3A3.77 3.77 0 015.6 13.3M21 3l-5.6 5.6-5.6 5.6m6.1-5.7l1.8 1.75L19.5 12m-1-6l1.25 1.25L21 8.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgKey;
