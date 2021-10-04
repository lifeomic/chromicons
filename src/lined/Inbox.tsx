import * as React from 'react';

const SvgInbox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgInbox"
    {...props}
  >
    <path
      d="M20.992 12H17.2a3 3 0 00-2.5 1.336l-.017.026a3 3 0 01-2.5 1.336h-.386a3 3 0 01-2.5-1.336l-.017-.026A3 3 0 006.8 12H3.008m3.1-6.2l-3.1 6.2v5.4a1.8 1.8 0 001.8 1.8h14.386a1.8 1.8 0 001.8-1.8V12l-3.1-6.2a1.8 1.8 0 00-1.61-1H7.72a1.8 1.8 0 00-1.61 1z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgInbox;
