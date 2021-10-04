import * as React from 'react';

const SvgControlPolicy = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgControlPolicy"
    {...props}
  >
    <path d="M13.25 22H18a2 2 0 002-2V8l-6-6H6a2 2 0 00-2 2v1.572" />
    <path d="M14 2v6h6M3.25 23v-5.25m0-3V9.5m6 13.5v-6.75m0-3V9.5M1 17.75h4.5m1.5-4.5h4.5" />
  </svg>
);

export default SvgControlPolicy;
