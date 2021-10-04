import * as React from 'react';

const SvgShield = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgShield"
    {...props}
  >
    <path
      d="M12 20.957c-4.347-2.37-7.143-6.031-7.158-10.144h0V5.847L12 3.043l7.162 2.8v4.966h0c-.021 4.117-2.816 7.778-7.162 10.148z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgShield;
