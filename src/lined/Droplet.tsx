import * as React from 'react';

const SvgDroplet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgDroplet"
    {...props}
  >
    <path
      d="M17.116 10.609h0L12 3l-5.258 7.8q-.1.135-.186.276l-.027.04h0a6.459 6.459 0 1010.585-.505z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgDroplet;
