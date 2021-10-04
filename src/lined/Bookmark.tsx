import * as React from 'react';

const SvgBookmark = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgBookmark"
    {...props}
  >
    <path
      d="M19 3v18l-7-5-7 5V3M3 3h18"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBookmark;
