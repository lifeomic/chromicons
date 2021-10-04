import * as React from 'react';

const SvgAlignRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgAlignRight"
    {...props}
  >
    <path
      d="M3 3h18M10.338 8.75H21M10.338 21H21M3 14.875h18"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgAlignRight;
