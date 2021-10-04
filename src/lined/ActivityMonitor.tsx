import * as React from 'react';

const SvgActivityMonitor = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgActivityMonitor"
    {...props}
  >
    <rect x={2} y={3} width={20} height={14} rx={2} />
    <path d="M8 21h8m-4-4v4m3.698-11h-1.479l-1.11 3.328-2.218-6.656L9.781 10H8.302" />
  </svg>
);

export default SvgActivityMonitor;
