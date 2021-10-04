import * as React from 'react';

const SvgHash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgHash"
    {...props}
  >
    <path
      d="M10.45 2.75l-2 9-2 9m10.6-18l-2 9-2 9m7.7-12.1h-17m16 6.7h-17"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgHash;
