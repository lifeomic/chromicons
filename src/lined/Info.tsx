import * as React from 'react';

const SvgInfo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgInfo"
    {...props}
  >
    <path
      d="M12 3a9 9 0 11-6.364 2.636A8.972 8.972 0 0112 3zm-1.8 8h1.6v5.3h2m-2-8.51v.01"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgInfo;
