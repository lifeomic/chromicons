import * as React from 'react';

const SvgCapsulePills = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgCapsulePills"
    {...props}
  >
    <circle cx={20.25} cy={7.825} r={2.749} />
    <rect
      x={4.239}
      y={-0.348}
      width={7.893}
      height={17.067}
      rx={3.946}
      transform="rotate(45 8.185 8.185)"
    />
    <path d="M4.626 11.113l1.2-1.2m-.431-4.518l5.023 5.023" />
    <circle cx={15.748} cy={17.86} r={5.14} />
    <path d="M13.567 16.601l6.632 3.828m-8.902-5.139l2.27 1.311" />
  </svg>
);

export default SvgCapsulePills;
