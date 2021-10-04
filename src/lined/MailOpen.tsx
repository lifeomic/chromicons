import * as React from 'react';

const SvgMailOpen = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgMailOpen"
    {...props}
  >
    <path
      d="M21 21.438V8.937l-7.8 6a2.107 2.107 0 01-2.4 0l-3.9-3-3.9-3v12.5zM3 8.937l7.8-6a2.108 2.108 0 012.4 0l7.8 6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMailOpen;
