import * as React from 'react';

const SvgOfficeBuilding = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgOfficeBuilding"
    {...props}
  >
    <path d="M9 15.25h0m3 0h0m3 0h0m-6-3h0m3 0h0m3 0h0m-6-3h0m3 0h0m3 0h0m-6-3h0m3 0h0m3 0h0m-3 13v2.656" />
    <rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
  </svg>
);

export default SvgOfficeBuilding;
