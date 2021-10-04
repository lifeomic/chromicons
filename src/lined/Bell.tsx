import * as React from 'react';

const SvgBell = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgBell"
    {...props}
  >
    <path
      d="M18.7 17.9H5.3m1.3 0v-7.5a5.4 5.4 0 1110.8 0v7.5m-7.4.4a.924.924 0 00-.088.3 2.508 2.508 0 00-.012.3 2.1 2.1 0 104.2 0 2.627 2.627 0 00-.013-.313A1.817 1.817 0 0014 18.2M12 5V3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBell;
