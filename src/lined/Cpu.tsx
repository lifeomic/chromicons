import * as React from 'react';

const SvgCpu = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgCpu"
    {...props}
  >
    <path
      d="M15.7 17.7H8.3a2.006 2.006 0 01-2-2V8.3a2.008 2.008 0 012-2h7.4a2.006 2.006 0 012 2v7.4a2 2 0 01-2 2zM9.7 3v2.5M14.3 3v2.5m-4.6 13V21m4.6-2.5V21M5.5 9.7H3m2.5 4.6H3m18-4.6h-2.5m2.5 4.6h-2.5m-5.4.2h1.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCpu;
