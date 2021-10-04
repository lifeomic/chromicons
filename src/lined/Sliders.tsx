import * as React from 'react';

const SvgSliders = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgSliders"
    {...props}
  >
    <path
      d="M15.492 15.842H21m-2.754 0V21m0-18v9.16M3 13.871h5.508m-2.754 0V21m0-18v7.189m9-2.031H9.246m2.754 0V3m0 18v-9.16"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSliders;
