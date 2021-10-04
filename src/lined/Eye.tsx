import * as React from 'react';

const SvgEye = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgEye"
    {...props}
  >
    <path
      d="M12 9.5a2.5 2.5 0 11-1.768.732A2.5 2.5 0 0112 9.5zm0-3.9a9.078 9.078 0 017.05 3.2A10.727 10.727 0 0121 12a10.727 10.727 0 01-1.95 3.2A9.078 9.078 0 0112 18.4a9.078 9.078 0 01-7.05-3.2A10.727 10.727 0 013 12a10.727 10.727 0 011.95-3.2A9.078 9.078 0 0112 5.6z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgEye;
