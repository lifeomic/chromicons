import * as React from 'react';

const SvgChrome = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgChrome"
    {...props}
  >
    <path
      d="M21 12a9 9 0 11-9-9 9 9 0 019 9zm-9-3.67A3.67 3.67 0 1015.67 12 3.67 3.67 0 0012 8.33zm7.977 0h-7.988m-3.171 5.494L4.835 6.9M11.2 20.748l3.983-6.924"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgChrome;
