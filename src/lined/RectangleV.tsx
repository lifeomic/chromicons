import * as React from 'react';

const SvgRectangleV = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgRectangleV"
    {...props}
  >
    <path
      d="M7.607 3h8.786a1.367 1.367 0 011.368 1.368h0v15.264A1.367 1.367 0 0116.393 21H7.607a1.367 1.367 0 01-1.368-1.368h0V4.368A1.367 1.367 0 017.607 3z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgRectangleV;
