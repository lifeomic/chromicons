import * as React from 'react';

const SvgMolecule = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgMolecule"
    {...props}
  >
    <path
      d="M9.654 6.327A3.327 3.327 0 116.327 3a3.328 3.328 0 013.327 3.327zM17.1 6.8a3.906 3.906 0 103.9 3.9 3.906 3.906 0 00-3.9-3.9zm-9.359 9.167a2.517 2.517 0 102.516 2.517 2.517 2.517 0 00-2.516-2.517zM9.38 7.649l3.809 1.374m-3.558 7.816l4.282-3.252"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMolecule;
