import * as React from 'react';

const SvgYouTube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgYouTube"
    {...props}
  >
    <path
      d="M21.005 16.4a3 3 0 01-2.04 2.691 27.817 27.817 0 01-13.939 0 3 3 0 01-2.04-2.691V7.568a3 3 0 012.04-2.691 27.794 27.794 0 0113.939 0 3 3 0 012.04 2.691zM10.142 8.388v7.224L15.86 12z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgYouTube;
