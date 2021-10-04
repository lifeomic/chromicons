import * as React from 'react';

const SvgPaperclip = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgPaperclip"
    {...props}
  >
    <path
      d="M4.08 11.947l7.488-7.488a4.892 4.892 0 016.919 0h0a4.893 4.893 0 010 6.92l-8.879 8.879a2.446 2.446 0 01-3.459 0h0a2.446 2.446 0 010-3.46l8.435-8.436"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPaperclip;
