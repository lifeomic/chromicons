import * as React from 'react';

const SvgHost = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgHost"
    {...props}
  >
    <rect x={2} y={8} width={20} height={8} rx={2} />
    <path d="M6 12h0" />
  </svg>
);

export default SvgHost;
