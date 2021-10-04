import * as React from 'react';

const SvgFastForward = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgFastForward"
    {...props}
  >
    <path
      d="M11 12.014l-8.014 6.124V5.837zm2-6.152v12.3l8.015-6.123z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgFastForward;
