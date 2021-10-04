import * as React from 'react';

const SvgSlack = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgSlack"
    {...props}
  >
    <path
      d="M13.743 13.068H21v2.468h-7.257zm5.781-5.588A1.476 1.476 0 1021 8.956a1.476 1.476 0 00-1.476-1.476zm-9.267.984H3v2.468h7.257zM4.476 16.52A1.476 1.476 0 103 15.044a1.476 1.476 0 001.476 1.476zm11.06-6.263V3h-2.468v7.257zM7.48 4.476A1.476 1.476 0 108.956 3 1.476 1.476 0 007.48 4.476zm.984 9.267V21h2.468v-7.257zm8.056 5.781A1.476 1.476 0 1015.044 21a1.476 1.476 0 001.476-1.476z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSlack;
