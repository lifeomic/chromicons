import * as React from 'react';

const SvgMousePointer = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgMousePointer"
    {...props}
  >
    <path
      d="M15.755 11.322L21 9.518 3 3l6.936 18 2.5-6.427L19.35 21"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMousePointer;
