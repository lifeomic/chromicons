import * as React from 'react';

const SvgXSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgXSquare"
    {...props}
  >
    <path
      d="M12 12l1.678 1.679 1.679 1.679m-6.715 0l1.679-1.679L12 12m0 0l-1.679-1.678-1.683-1.675m6.715 0l-1.679 1.679L12 12m9-6.557A2.454 2.454 0 0018.551 3H5.447A2.454 2.454 0 003 5.446v13.1A2.454 2.454 0 005.447 21h13.108A2.452 2.452 0 0021 18.554z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgXSquare;
