import * as React from 'react';

const SvgFileText = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgFileText"
    {...props}
  >
    <path
      d="M13.15 2.75h-7.3a.945.945 0 00-1 1v16a.945.945 0 001 1h11.8a.945.945 0 001-1V8.25h-5.5v-5.5zm0 0L15.9 5.5l2.75 2.75m-9.9 4.3h6m-2.8 3.8h2.8m-6-7.86v.06"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgFileText;
