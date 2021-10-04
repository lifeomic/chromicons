import * as React from 'react';

const SvgToggleLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgToggleLeft"
    {...props}
  >
    <path
      d="M16.75 16.2h-9.6a4.227 4.227 0 01-4.2-4.2h0a4.225 4.225 0 014.2-4.2h9.7a4.225 4.225 0 014.2 4.2h0a4.432 4.432 0 01-1.325 2.962A4.238 4.238 0 0116.75 16.2zM6.95 8a4 4 0 11-2.828 1.172A3.984 3.984 0 016.95 8z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgToggleLeft;
