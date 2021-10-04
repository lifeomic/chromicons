import * as React from 'react';

const SvgAperture = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgAperture"
    {...props}
  >
    <path
      d="M21 12a9 9 0 11-9-9 9 9 0 019 9zm-13.983-.014L12 3.355M4.541 7.7l4.953 8.578m4.206.022H4.907m12.076-4.289l-4.9 8.482m7.376-4.193l-4.953-8.575M9.8 7.7h9.289"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgAperture;
