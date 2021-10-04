import * as React from 'react';

const SvgOncoprint = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgOncoprint"
    {...props}
  >
    <path
      d="M20 3H4a.945.945 0 00-1 1v16a.945.945 0 001 1h16a.945.945 0 001-1V4a.945.945 0 00-1-1zM6.8 6.4v4.3m6.8-4.3v4.3M17 6.4v4.3M6.8 13.6v4.2m3.3-4.2v4.2m6.9-4.2v4.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgOncoprint;
