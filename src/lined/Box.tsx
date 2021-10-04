import * as React from 'react';

const SvgBox = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgBox"
    {...props}
  >
    <path
      d="M12 21l-4.2-1.8-4.2-1.8V6.6l4.2 1.8 4.2 1.8V21zm0 0l4.2-1.8 4.2-1.8V6.6l-4.2 1.8-4.2 1.8V21zm8.4-14.4l-4.2-1.8L12 3 7.8 4.8 3.6 6.6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBox;
