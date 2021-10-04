import * as React from 'react';

const SvgUnderline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgUnderline"
    {...props}
  >
    <path
      d="M18.485 3v7.469a6.485 6.485 0 01-12.97 0V3m-.98 18h14.93"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgUnderline;
