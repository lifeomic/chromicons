import * as React from 'react';

const SvgOctagon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgOctagon"
    {...props}
  >
    <path
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.274 3h7.452L21 8.274v7.452L15.726 21H8.274L3 15.726V8.274L8.274 3z"
    />
  </svg>
);

export default SvgOctagon;
