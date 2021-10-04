import * as React from 'react';

const SvgMove = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgMove"
    {...props}
  >
    <path
      d="M12 21V3M9 6l3-3 3 3m0 12l-3 3-3-3m-6-6h18M6 15l-3-3 3-3m12 0l3 3-3 3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMove;
