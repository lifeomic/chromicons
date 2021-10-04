import * as React from 'react';

const SvgSend = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgSend"
    {...props}
  >
    <path
      d="M21 3l-9 3-9 3 4.55 1.45 4.55 1.45 4.45-4.45zm0 0l-3 9-3 9-1.45-4.55-1.45-4.55 4.45-4.45z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSend;
