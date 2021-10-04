import * as React from 'react';

const SvgBriefcase = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgBriefcase"
    {...props}
  >
    <path
      d="M21 19a2.006 2.006 0 01-2 2H5a2.006 2.006 0 01-2-2v-8.793a2.006 2.006 0 012-2h14a2.006 2.006 0 012 2zM15.428 8.207V5a2.006 2.006 0 00-2-2h-2.856a2.006 2.006 0 00-2 2v3.207M3 13.62h18"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBriefcase;
