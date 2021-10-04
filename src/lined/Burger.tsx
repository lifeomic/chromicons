import * as React from 'react';

const SvgBurger = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgBurger"
    {...props}
  >
    <path
      d="M21 9.988H3A6.988 6.988 0 019.988 3h4.024A6.988 6.988 0 0121 9.988zM3.247 12.926H21M3.247 16.005H6.5l3.313 3.355 3.421-3.468H21M13.062 21h3.347a4.569 4.569 0 003.745-1.962m-16.066-.007a4.6 4.6 0 002.567 1.813"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBurger;
