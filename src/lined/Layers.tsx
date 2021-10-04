import * as React from 'react';

const SvgLayers = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgLayers"
    {...props}
  >
    <path
      d="M11.106 3.211L3 7.264l8.106 4.053a2 2 0 001.788 0L21 7.264l-8.106-4.053a2 2 0 00-1.788 0zM3 16.736l8.106 4.053a2 2 0 001.788 0L21 16.736M3 12l8.106 4.053a2 2 0 001.788 0L21 12"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgLayers;
