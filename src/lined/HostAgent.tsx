import * as React from 'react';

const SvgHostAgent = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgHostAgent"
    {...props}
  >
    <path d="M10.348 16H4a2 2 0 01-2-2v-4a2 2 0 012-2h16a2 2 0 012 2v4a1.982 1.982 0 01-.109.652M6 12h0" />
    <path d="M23 18.652h-1.932L19.619 23l-2.899-8.695-1.449 4.347h-1.932" />
  </svg>
);

export default SvgHostAgent;
