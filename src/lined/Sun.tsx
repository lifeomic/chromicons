import * as React from 'react';

const SvgSun = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgSun"
    {...props}
  >
    <path
      d="M21 12h-2M5 12H3m15.4 6.4l-.75-.75-.75-.75M5.6 5.6l.75.75.75.75M12 21v-2m0-16v2m6.4.6l-.75.75-.75.75M5.6 18.4l.75-.75.75-.75M12 8a4 4 0 11-2.828 1.172A3.984 3.984 0 0112 8z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSun;
