import * as React from 'react';

const SvgScreenShare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgScreenShare"
    {...props}
  >
    <path
      d="M5.976 16.355H4.491c-.816 0-1.484-.9-1.484-2V5a2 2 0 012-2h13.986a2 2 0 012 2v9.361c0 1.1-.667 2-1.484 2h-1.487m-6.073-2.242V21M12 12l-2.788 2.777M12 11.991l2.787 2.786"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgScreenShare;
