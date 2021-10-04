import * as React from 'react';

const SvgXOctogon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgXOctogon"
    {...props}
  >
    <path
      d="M12 12l1.678 1.679 1.679 1.679m-6.715 0l1.679-1.679L12 12m0 0l-1.679-1.678-1.683-1.675m6.715 0l-1.679 1.679L12 12m3.723-8.983H8.281l-5.26 5.26v7.438l5.26 5.26h7.438l5.26-5.26V8.281z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgXOctogon;
