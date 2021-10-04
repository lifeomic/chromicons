import * as React from 'react';

const SvgAlignCenter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgAlignCenter"
    {...props}
  >
    <path
      d="M3 3h18M6.669 8.75h10.662M6.669 21h10.662M3 14.875h18"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgAlignCenter;
