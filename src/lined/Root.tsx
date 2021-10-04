import * as React from 'react';

const SvgRoot = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgRoot"
    {...props}
  >
    <circle cx={11.995} cy={15.48} r={4} />
    <path d="M1.045 15.48h6.95m8 0h6.96m-10.96-4V4.52" />
  </svg>
);

export default SvgRoot;
