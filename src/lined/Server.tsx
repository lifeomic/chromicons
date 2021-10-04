import * as React from 'react';

const SvgServer = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgServer"
    {...props}
  >
    <path
      d="M6.726 17.513v.009m0-10.884v.009M2.988 4.841A1.858 1.858 0 014.84 2.989h14.308A1.858 1.858 0 0121 4.841v3.273a1.858 1.858 0 01-1.852 1.852H4.84a1.858 1.858 0 01-1.852-1.852zm0 11.045a1.858 1.858 0 011.852-1.852h14.308A1.858 1.858 0 0121 15.886v3.273a1.858 1.858 0 01-1.852 1.852H4.84a1.858 1.858 0 01-1.852-1.852z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgServer;
