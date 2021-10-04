import * as React from 'react';

const SvgLayout = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgLayout"
    {...props}
  >
    <path
      d="M19 21H5a2.006 2.006 0 01-2-2V5a2.008 2.008 0 012-2h14a2.006 2.006 0 012 2v14a2 2 0 01-2 2zm2-12.3H3m6.5 0V21"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgLayout;
