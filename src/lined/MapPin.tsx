import * as React from 'react';

const SvgMapPin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgMapPin"
    {...props}
  >
    <path
      d="M17.116 13.391h0L12 21l-5.258-7.8q-.1-.135-.186-.276l-.027-.04h0a6.459 6.459 0 1110.585.505zM12 7.175a2.3 2.3 0 102.3 2.3 2.3 2.3 0 00-2.3-2.3z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMapPin;
