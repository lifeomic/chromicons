import * as React from 'react';

const SvgSidebar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgSidebar"
    {...props}
  >
    <path
      d="M3 4.955A1.961 1.961 0 014.955 3h14.09A1.961 1.961 0 0121 4.955v14.09A1.961 1.961 0 0119.045 21H4.955A1.961 1.961 0 013 19.045zm6.667-1.67v17.43"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSidebar;
