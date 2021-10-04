import * as React from 'react';

const SvgSmile = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgSmile"
    {...props}
  >
    <path
      d="M12 20.991a9.01 9.01 0 10-9.009-9.01A9.01 9.01 0 0012 20.991zm-3.658-7.04a4.86 4.86 0 003.6 1.8 4.86 4.86 0 003.6-1.8m-6.3-4.5h.009m5.391 0h.009"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSmile;
