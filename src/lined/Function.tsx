import * as React from 'react';

const SvgFunction = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgFunction"
    {...props}
  >
    <path d="M8 4a3 3 0 00-3 3v2a3 3 0 01-3 3 3 3 0 013 3v2a3 3 0 003 3m8 0a3 3 0 003-3v-2a3 3 0 013-3 3 3 0 01-3-3V7a3 3 0 00-3-3" />
  </svg>
);

export default SvgFunction;
