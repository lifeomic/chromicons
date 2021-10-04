import * as React from 'react';

const SvgSoda = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgSoda"
    {...props}
  >
    <path
      d="M17.107 3H6.893m2.086 0L6.925 5.432a2.252 2.252 0 00-.532 1.455v12.127A1.986 1.986 0 008.379 21h7.242a1.986 1.986 0 001.986-1.986V6.887a2.252 2.252 0 00-.532-1.455L15.021 3M6.393 6.887h7.128M6.5 16.831a3.478 3.478 0 10.354-6.4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSoda;
