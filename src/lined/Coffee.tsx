import * as React from 'react';

const SvgCoffee = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgCoffee"
    {...props}
  >
    <path
      d="M16.718 9.778h.858a3.458 3.458 0 010 6.916h-.858M2.993 9.778h13.725v7.78a3.444 3.444 0 01-3.431 3.458H6.424a3.444 3.444 0 01-3.431-3.458zm3.243-6.794v1.707m3.619-1.707v3.487m3.62-1.954v1.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCoffee;
