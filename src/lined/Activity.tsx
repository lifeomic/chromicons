import * as React from 'react';

const SvgActivity = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgActivity"
    {...props}
  >
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12.3h3.3l.8-2.4.8-2.4 1.8 6.75L11.5 21l1.95-9 1.95-9 1 4.65 1 4.65H21"
    />
  </svg>
);

export default SvgActivity;
