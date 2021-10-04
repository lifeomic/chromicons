import * as React from 'react';

const SvgPill = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgPill"
    {...props}
  >
    <path
      d="M4.424 19.576h0a4.822 4.822 0 010-6.819l8.333-8.333a4.822 4.822 0 016.819 0h0a4.822 4.822 0 010 6.819l-8.333 8.333a4.822 4.822 0 01-6.819 0zm11.009-4.19L8.614 8.567"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPill;
