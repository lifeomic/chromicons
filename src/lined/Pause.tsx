import * as React from 'react';

const SvgPause = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgPause"
    {...props}
  >
    <path
      d="M10.205 19.033A1.973 1.973 0 018.238 21h-.9a1.973 1.973 0 01-1.967-1.967V4.967A1.973 1.973 0 017.335 3h.9a1.973 1.973 0 011.967 1.967zm8.427-14.066A1.973 1.973 0 0016.665 3h-.9A1.973 1.973 0 0013.8 4.967v14.066A1.973 1.973 0 0015.762 21h.9a1.973 1.973 0 001.967-1.967z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPause;
