import * as React from 'react';

const SvgCloudRain = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgCloudRain"
    {...props}
  >
    <path
      d="M20.2 14.925a3.677 3.677 0 00-1.308-5.612A5.551 5.551 0 107.88 7.919a4.158 4.158 0 00-.645-.065 4.234 4.234 0 00-3.094 7.126M8.2 12.648v3.22m3.788-.888V21m3.812-7.652v5.04"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCloudRain;
