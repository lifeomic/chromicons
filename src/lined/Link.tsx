import * as React from 'react';

const SvgLink = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgLink"
    {...props}
  >
    <path
      d="M10.8 17.8l-1.512 1.513L8.6 20A3.2 3.2 0 014 20m0 0a3.2 3.2 0 010-4.6l2.45-2.45L8.9 10.5a3.284 3.284 0 012.112-.975 3.231 3.231 0 012.188.675m.2-4.2l1.413-1.412L15.4 4A3.253 3.253 0 1120 8.6l-2.45 2.45-2.45 2.45a3.143 3.143 0 01-2.012 1A3.2 3.2 0 0111 14"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgLink;
