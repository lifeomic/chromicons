import * as React from 'react';

const SvgAnchor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgAnchor"
    {...props}
  >
    <path
      d="M7.5 19.792A9.23 9.23 0 013 12m9-4.835V21a9.081 9.081 0 009-9m-9-9a2.083 2.083 0 102.083 2.083A2.083 2.083 0 0012 3zm-2.5 9h5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgAnchor;
