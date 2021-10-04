import * as React from 'react';

const SvgRectanglesOverlay = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgRectanglesOverlay"
    {...props}
  >
    <path
      d="M10.478 16.361h-6.11A1.367 1.367 0 013 14.993h0V6.207a1.368 1.368 0 011.368-1.368h15.264A1.368 1.368 0 0121 6.207h0v.954"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M19.632 21.161h-3.786a1.368 1.368 0 01-1.368-1.368h0v-7.264a1.367 1.367 0 011.368-1.368h3.786A1.367 1.367 0 0121 12.529h0v7.264a1.368 1.368 0 01-1.368 1.368z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgRectanglesOverlay;
