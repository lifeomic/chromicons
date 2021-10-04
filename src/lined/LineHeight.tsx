import * as React from 'react';

const SvgLineHeight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgLineHeight"
    {...props}
  >
    <path
      d="M3 5.6h8.01M3 12h8.01M3 18.4h8.01M18.217 3v18m-2.79-15.213L18.214 3 21 5.787m0 12.426L18.214 21l-2.787-2.787"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgLineHeight;
