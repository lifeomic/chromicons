import * as React from 'react';

const SvgShieldOff = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgShieldOff"
    {...props}
  >
    <path
      d="M3.117 3L21 21M5.454 5.606l-.616.241v4.966h0c.017 4.113 2.813 7.774 7.162 10.144a16.023 16.023 0 004.7-3.76m2.137-4a9.146 9.146 0 00.327-2.383h0V5.847L12 3.043l-2.5.977"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgShieldOff;
