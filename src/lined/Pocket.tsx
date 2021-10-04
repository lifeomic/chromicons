import * as React from 'react';

const SvgPocket = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgPocket"
    {...props}
  >
    <path
      d="M21 11.118c0 5.453-4.029 9.873-9 9.873s-9-4.42-9-9.873v-6.2a1.915 1.915 0 011.909-1.909h14.182A1.915 1.915 0 0121 4.918zM7.866 9.535L12 14.07l4.134-4.535"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPocket;
