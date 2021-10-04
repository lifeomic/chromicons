import * as React from 'react';

const SvgShoppingBag = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgShoppingBag"
    {...props}
  >
    <path
      d="M3 8.675h18v8a4.354 4.354 0 01-4.342 4.341H7.342A4.354 4.354 0 013 16.679zm13.073 3.217V7.073a4.073 4.073 0 00-8.146 0v4.819"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgShoppingBag;
