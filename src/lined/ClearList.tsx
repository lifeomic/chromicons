import * as React from 'react';

const SvgClearList = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgClearList"
    {...props}
  >
    <path d="M3 12h18M3 6h10.867M3 18h18m0-14l-4 4m0-4l4 4" />
  </svg>
);

export default SvgClearList;
