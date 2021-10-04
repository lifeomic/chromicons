import * as React from 'react';

const SvgMoreHorizontal = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgMoreHorizontal"
    {...props}
  >
    <path
      d="M4 11a1 1 0 11-.707.293A1 1 0 014 11zm8 0a1 1 0 11-.707.293A1 1 0 0112 11zm8 0a1 1 0 11-.707.293A1 1 0 0120 11z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMoreHorizontal;
