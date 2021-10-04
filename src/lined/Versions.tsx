import * as React from 'react';

const SvgVersions = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgVersions"
    {...props}
  >
    <rect x={2} y={9} width={20} height={14} rx={2} />
    <path d="M19 5H5m11-4H8" />
  </svg>
);

export default SvgVersions;
