import * as React from 'react';

const SvgPauseCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgPauseCircle"
    {...props}
  >
    <path
      d="M21 12a9 9 0 11-9-9 9 9 0 019 9zm-6.955 3.409V8.864m-3.818 6.545V8.864"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPauseCircle;
