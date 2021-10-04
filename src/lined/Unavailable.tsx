import * as React from 'react';

const SvgUnavailable = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgUnavailable"
    {...props}
  >
    <path d="M21.778 23V3.444A2.445 2.445 0 0019.333 1H4.667a2.445 2.445 0 00-2.445 2.444V23m14.667-8.556H7.111m9.778 3.733H7.111m2.445 3.732H7.111" />
    <circle cx={12} cy={8.004} r={2.892} />
    <path d="M9.956 5.96l4.088 4.089" />
  </svg>
);

export default SvgUnavailable;
