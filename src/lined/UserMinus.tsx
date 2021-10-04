import * as React from 'react';

const SvgUserMinus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgUserMinus"
    {...props}
  >
    <path
      d="M11.5 3a3.5 3.5 0 11-2.475 1.025A3.493 3.493 0 0111.5 3zm4.3 11.2a6.9 6.9 0 00-2-.9 8.658 8.658 0 00-2.3-.3 8.024 8.024 0 00-8 8h16m-4.3-3.4h5.3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgUserMinus;
