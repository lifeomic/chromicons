import * as React from 'react';

const SvgToggleRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgToggleRight"
    {...props}
  >
    <path
      d="M16.75 16.2h-9.6a4.225 4.225 0 01-4.2-4.2h0a4.224 4.224 0 014.2-4.2h9.7a4.225 4.225 0 014.2 4.2h0a4.432 4.432 0 01-1.325 2.962A4.238 4.238 0 0116.75 16.2zm.3-8.2a4 4 0 11-2.828 1.172A3.984 3.984 0 0117.05 8z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgToggleRight;
