import * as React from 'react';

const SvgSave = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgSave"
    {...props}
  >
    <path
      d="M7.356 20.852v-7.814h9.288v7.814M7.356 3.069V8.41h8.952M15.907 3H5.079A2.086 2.086 0 003 5.079v13.842A2.086 2.086 0 005.079 21h13.842A2.086 2.086 0 0021 18.921V8.093z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSave;
