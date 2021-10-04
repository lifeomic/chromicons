import * as React from 'react';

const SvgCryptoKey = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgCryptoKey"
    {...props}
  >
    <circle cx={16.551} cy={7.449} r={2} />
    <path d="M19.552 14.74a7.451 7.451 0 10-10.939-3.547L1 18.789V23h4.211l1.759-1.82V18.8h.011l.99-1.025h2.432l2.371-2.4a6.856 6.856 0 00.656.227m3.121-6.153v10.744m0 0H19" />
    <circle cx={21} cy={20.193} r={2} />
    <path d="M8.162 7.449H5" />
    <circle cx={3} cy={7.449} r={2} />
  </svg>
);

export default SvgCryptoKey;
