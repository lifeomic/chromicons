import * as React from 'react';

const SvgEyeOff = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgEyeOff"
    {...props}
  >
    <path
      d="M13.2 14.2a2.931 2.931 0 01-.6.225 2.466 2.466 0 01-.6.075A2.476 2.476 0 019.5 12a2.575 2.575 0 01.15-.875 1.972 1.972 0 01.45-.725m1.2-4.8h.7a9.078 9.078 0 017.05 3.2A10.727 10.727 0 0121 12a5.332 5.332 0 01-.262.65 8.949 8.949 0 01-.938 1.55M16.9 17a9.48 9.48 0 01-2.188 1 9.154 9.154 0 01-2.712.4 9.078 9.078 0 01-7.05-3.2A10.727 10.727 0 013 12a10.076 10.076 0 01.912-1.788A10.572 10.572 0 017 7M3 3l9 9 9 9"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgEyeOff;
