import * as React from 'react';

const SvgNodeMesh = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgNodeMesh"
    {...props}
  >
    <circle cx={4.5} cy={4.5} r={2.5} />
    <circle cx={19.5} cy={19.5} r={2.5} />
    <circle cx={19.5} cy={4.5} r={2.5} />
    <circle cx={4.5} cy={19.5} r={2.5} />
    <circle cx={12} cy={12} r={2.5} />
    <path d="M7.2 10.3A8.561 8.561 0 014.9 7m14.2 0a8.338 8.338 0 01-2.2 3.3m0 3.4a7.406 7.406 0 012.2 3.3M4.9 17a8.338 8.338 0 012.2-3.3" />
  </svg>
);

export default SvgNodeMesh;
