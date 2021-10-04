import * as React from 'react';

const SvgLogOut = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgLogOut"
    {...props}
  >
    <path
      d="M16.4 16.2l2.3-2.1L21 12H7.9M21 12l-2.3-2.1-2.3-2.1M8.9 21H5a2 2 0 01-2-2V5a2.006 2.006 0 012-2h3.9"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgLogOut;
