import * as React from 'react';

const SvgCode = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgCode"
    {...props}
  >
    <path
      d="M6.5 8.6l-1.75 1.75L3 12.1l1.65 1.65L6.3 15.4m11.2-6.8l1.75 1.75L21 12.1l-1.65 1.65-1.65 1.65m-3.5-9.6L12 12l-2.2 6.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCode;
