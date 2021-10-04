import * as React from 'react';

const SvgNodeTree = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    strokeMiterlimit={10}
    viewBox="0 0 24 24"
    data-icon="SvgNodeTree"
    {...props}
  >
    <circle cx={12} cy={19.5} r={2.5} />
    <circle cx={12} cy={4.5} r={2.5} />
    <path d="M4.5 14.5V14a2.006 2.006 0 012-2h11a2.006 2.006 0 012 2v.5m-7.5-5v5" />
    <circle cx={19.5} cy={19.5} r={2.5} />
    <circle cx={4.5} cy={19.5} r={2.5} />
  </svg>
);

export default SvgNodeTree;
