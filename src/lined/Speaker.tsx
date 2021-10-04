import * as React from 'react';

const SvgSpeaker = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgSpeaker"
    {...props}
  >
    <path
      d="M19.33 19.394a1.623 1.623 0 01-1.618 1.619H6.288a1.623 1.623 0 01-1.618-1.619V4.62A1.623 1.623 0 016.288 3h11.424a1.623 1.623 0 011.618 1.62zM12 10.661a3.526 3.526 0 103.525 3.525A3.525 3.525 0 0012 10.661zm0-3.927v.009"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSpeaker;
