import * as React from 'react';

const SvgPercent = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgPercent"
    {...props}
  >
    <path
      d="M21 3L3 21m15.144-5.712A2.856 2.856 0 1021 18.144a2.855 2.855 0 00-2.856-2.856zM5.856 3a2.856 2.856 0 102.856 2.856A2.856 2.856 0 005.856 3z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPercent;
