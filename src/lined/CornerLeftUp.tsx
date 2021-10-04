import * as React from 'react';

const SvgCornerLeftUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgCornerLeftUp"
    {...props}
  >
    <path
      d="M13.7 8.8L11 5.9 8.3 3v12.3A5.7 5.7 0 0014 21h7M8.3 3L5.65 5.9 3 8.8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCornerLeftUp;
