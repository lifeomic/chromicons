import * as React from 'react';

const SvgDelete = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgDelete"
    {...props}
  >
    <path
      d="M14 12l2.71 2.71m-5.42-5.42L14 12m2.71-2.71L14 12l-2.71 2.71M18 4.978H9.079L3 12.167l6.079 6.855H18a3 3 0 003-3V7.978a3 3 0 00-3-3z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgDelete;
