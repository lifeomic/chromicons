import * as React from 'react';

const SvgContainer = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit={10}
    width={24}
    height={24}
    viewBox="0 0 24 24"
    data-icon="SvgContainer"
    {...props}
  >
    <path d="M5 8.5h14v7H5zm4.667 0v7m4.666-7v7" />
  </svg>
);

export default SvgContainer;
