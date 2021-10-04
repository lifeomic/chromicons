import * as React from 'react';

const SvgPlayCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgPlayCircle"
    {...props}
  >
    <path
      d="M15.149 12.418a.582.582 0 000-.9L12.5 9.351l-2.247-1.839a.581.581 0 00-.949.45v8.012a.581.581 0 00.949.449l2.247-1.839zM21 12a9 9 0 11-9-9 9 9 0 019 9z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPlayCircle;
