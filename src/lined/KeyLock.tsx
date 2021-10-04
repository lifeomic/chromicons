import * as React from 'react';

const SvgKeyLock = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgKeyLock"
    {...props}
  >
    <circle cx={16.551} cy={7.449} r={2} />
    <path d="M22.809 10.137a7.454 7.454 0 10-14.2 1.056L1 18.789V23h4.211l1.759-1.82V18.8h.011l.99-1.025H10.4l2.371-2.4c.129.052.26.1.393.145" />
    <path d="M21.434 18.551l.59 4.449h-4.879l.591-4.445h0a3.415 3.415 0 113.758-.04l-.059.039" />
  </svg>
);

export default SvgKeyLock;
