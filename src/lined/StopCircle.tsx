import * as React from 'react';

const SvgStopCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgStopCircle"
    {...props}
  >
    <path
      d="M15.087 13.333a1.79 1.79 0 01-1.787 1.784h-2.649a1.79 1.79 0 01-1.784-1.784v-2.651A1.79 1.79 0 0110.651 8.9H13.3a1.79 1.79 0 011.784 1.784zM11.977 3a9.008 9.008 0 109.008 9.008A9.008 9.008 0 0011.977 3z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgStopCircle;
