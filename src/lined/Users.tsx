import * as React from 'react';

const SvgUsers = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgUsers"
    {...props}
  >
    <path
      d="M12.1 3.8a3.4 3.4 0 011.037-.588A3.786 3.786 0 0114.4 3a3.5 3.5 0 010 7 3.761 3.761 0 01-1.263-.213A3.378 3.378 0 0112.1 9.2M16.2 21H21a8.881 8.881 0 00-1.95-5.65A6.074 6.074 0 0014.4 13a5.683 5.683 0 00-1.038.088 3.6 3.6 0 00-.962.312M9.6 3a3.5 3.5 0 11-2.475 1.025A3.493 3.493 0 019.6 3zm6.6 18a8.881 8.881 0 00-1.95-5.65A6.074 6.074 0 009.6 13h0a6.074 6.074 0 00-4.65 2.35A8.881 8.881 0 003 21h13.2z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgUsers;
