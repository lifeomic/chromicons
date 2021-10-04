import * as React from 'react';

const SvgVoicemail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgVoicemail"
    {...props}
  >
    <path
      d="M21.005 12a3.746 3.746 0 11-3.745-3.745A3.745 3.745 0 0121.005 12zM6.73 8.255A3.745 3.745 0 1010.476 12 3.745 3.745 0 006.73 8.255zm10.658 7.49H6.635"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgVoicemail;
