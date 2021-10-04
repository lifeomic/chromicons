import * as React from 'react';

const SvgTarget = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgTarget"
    {...props}
  >
    <path
      d="M13.776 12A1.776 1.776 0 1112 10.224 1.776 1.776 0 0113.776 12zM12 6.736A5.264 5.264 0 1017.264 12 5.264 5.264 0 0012 6.736zM12 3a9 9 0 109 9 9 9 0 00-9-9z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTarget;
