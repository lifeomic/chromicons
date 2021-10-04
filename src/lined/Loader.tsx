import * as React from 'react';

const SvgLoader = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgLoader"
    {...props}
  >
    <path
      d="M5.95 5.7L7 6.75 8.05 7.8m8.4 8.4l.95.95.95.95m.2-12.4L17.5 6.75 16.45 7.8M6.35 12h-3.1m17.5 0h-2.6m-5.9 9v-3.1m0-14.9v3.1"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgLoader;
