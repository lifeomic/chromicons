import * as React from 'react';

const SvgFolder = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgFolder"
    {...props}
  >
    <path
      d="M10.8 6.4h0a1.538 1.538 0 00-1.5-1.5H4a.945.945 0 00-1 1v12.2a.945.945 0 001 1h16a.945.945 0 001-1V8.9a.945.945 0 00-1-1h-7.7a1.478 1.478 0 01-1.088-.45A1.519 1.519 0 0110.8 6.4z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgFolder;
