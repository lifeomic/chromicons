import * as React from 'react';

const SvgList = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgList"
    {...props}
  >
    <path
      d="M9.6 5.6H21M9.6 12H21M9.6 18.4H21M4.5 4.1a1.5 1.5 0 11-1.061.439A1.5 1.5 0 014.5 4.1zm0 6.4a1.5 1.5 0 11-1.061.439A1.5 1.5 0 014.5 10.5zm0 6.4a1.5 1.5 0 11-1.061.439A1.5 1.5 0 014.5 16.9z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgList;
