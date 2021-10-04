import * as React from 'react';

const SvgSunset = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgSunset"
    {...props}
  >
    <path
      d="M7.888 6.9l2.05 2.2 2.05 2.2V3m0 8.3l2-2.2 2-2.2M3 21.02h18M3 17.958h1.75m14.546 0h1.75M16.906 12l1.381-1.382m-12.825-.112l1.381 1.381m1.069 6.071a4 4 0 018 0"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSunset;
