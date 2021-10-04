import * as React from 'react';

const SvgSlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgSlash"
    {...props}
  >
    <path
      d="M20.991 11.986A8.991 8.991 0 1112 3a8.991 8.991 0 018.991 8.986zM5.808 5.794L18.216 18.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSlash;
