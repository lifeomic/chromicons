import * as React from 'react';

const SvgVirus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgVirus"
    {...props}
  >
    <path
      d="M18.7 12A6.7 6.7 0 1112 5.3a6.7 6.7 0 016.7 6.7zM12 3v2.3M7.248 7.248L5.621 5.62M3 12h2.3m6.8 9v-2.3m-6.483-.321l1.627-1.628M18.379 5.622l-1.627 1.627M18.7 12H21m-2.621 6.376l-1.627-1.627m-8.483-4.8v.1m3.209 3.43v.1m1.061-7.306v.1m2.75 6v.1"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgVirus;
