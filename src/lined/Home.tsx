import * as React from 'react';

const SvgHome = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgHome"
    {...props}
  >
    <path
      d="M4.75 10.75v9a1.16 1.16 0 00.213.725.717.717 0 00.587.275h12.4a.737.737 0 00.55-.275 1.1 1.1 0 00.25-.725v-9m-16 2l4.5-5 4.5-5 4.5 5 4.5 5m-11.5 8v-5a.945.945 0 011-1h3a.945.945 0 011 1v5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgHome;
