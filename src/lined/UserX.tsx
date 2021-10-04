import * as React from 'react';

const SvgUserX = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgUserX"
    {...props}
  >
    <path
      d="M11.5 3a3.5 3.5 0 11-2.475 1.025A3.493 3.493 0 0111.5 3zM14 13.325a7.722 7.722 0 00-2.5-.425 8.024 8.024 0 00-8 8h9.4m5.583-2.418l1.259 1.259L21 21m-5.037 0l1.26-1.259 1.259-1.259m0 0l-1.259-1.259-1.26-1.26m5.037 0l-1.259 1.26-1.259 1.259"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgUserX;
