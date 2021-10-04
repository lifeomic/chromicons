import * as React from 'react';

const SvgItalic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgItalic"
    {...props}
  >
    <path
      d="M14.818 3L9.182 21m-3.364 0h6.729M11.453 3h6.729"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgItalic;
