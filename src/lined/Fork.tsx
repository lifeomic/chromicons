import * as React from 'react';

const SvgFork = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit={10}
    width={24}
    height={24}
    viewBox="0 0 24 24"
    data-icon="SvgFork"
    {...props}
  >
    <path d="M18 2v6a4.012 4.012 0 01-4 4h-4a4.012 4.012 0 01-4-4V2m6 0v20" />
  </svg>
);

export default SvgFork;
