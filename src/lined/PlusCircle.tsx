import * as React from 'react';

const SvgPlusCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgPlusCircle"
    {...props}
  >
    <path
      d="M12 3a9 9 0 11-6.364 2.636A8.972 8.972 0 0112 3zm0 5v8m-4-4h8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPlusCircle;
