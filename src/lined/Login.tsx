import * as React from 'react';

const SvgLogin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgLogin"
    {...props}
  >
    <path
      d="M11.5 16.2l2.3-2.1 2.3-2.1H3m13.1 0l-2.3-2.1-2.3-2.1M15.1 3H19a2.006 2.006 0 012 2v14a2 2 0 01-2 2h-3.9"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgLogin;
