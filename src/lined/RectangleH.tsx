import * as React from 'react';

const SvgRectangleH = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgRectangleH"
    {...props}
  >
    <path
      d="M21 7.607v8.786a1.367 1.367 0 01-1.368 1.368H4.368A1.367 1.367 0 013 16.393h0V7.607a1.367 1.367 0 011.368-1.368h15.264A1.367 1.367 0 0121 7.607z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgRectangleH;
