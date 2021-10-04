import * as React from 'react';

const SvgUser = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgUser"
    {...props}
  >
    <path
      d="M12 3a3.5 3.5 0 11-2.475 1.025A3.493 3.493 0 0112 3zm6.2 18a9.257 9.257 0 00-1.825-5.65A5.593 5.593 0 0012 13h0a5.593 5.593 0 00-4.375 2.35A9.257 9.257 0 005.8 21h12.4z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgUser;
