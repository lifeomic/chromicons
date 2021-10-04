import * as React from 'react';

const SvgCast = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgCast"
    {...props}
  >
    <path
      d="M16.666 20.962h2.472a2.006 2.006 0 002-2v-14a2.006 2.006 0 00-2-2H4.866a1.992 1.992 0 00-2 1.972v1.972m9.131 14.054l-.042-.018h0A10.471 10.471 0 003 11.583m4.116 9.456l.252-.078A5.11 5.11 0 003 16.43m0 4.488v.045"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCast;
