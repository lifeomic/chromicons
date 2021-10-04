import * as React from 'react';

const SvgCheckFile = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgCheckFile"
    {...props}
  >
    <path d="M20 8.5l-7.999 9L9 14.5" />
    <path d="M20 4.5V4a2 2 0 00-2-2h-8L4 8v12a2 2 0 002 2h12a2 2 0 002-2v-4" />
    <path d="M4 8h6V2" />
  </svg>
);

export default SvgCheckFile;
