import * as React from 'react';

const SvgCompass = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgCompass"
    {...props}
  >
    <path
      d="M8.142 16.005l1.928-5.636L15.858 8l-2.252 5.91zM12 3a9 9 0 109 9 9 9 0 00-9-9z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCompass;
