import * as React from 'react';

const SvgTwitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgTwitter"
    {...props}
  >
    <path
      d="M21 4.668a8.9 8.9 0 01-1.234.729 8.946 8.946 0 01-1.335.522A3.666 3.666 0 0012 8.374v.818a8.721 8.721 0 01-7.364-3.706s-3.272 7.363 4.091 10.636A9.521 9.521 0 013 17.759c7.056 3.92 15.615.327 16.317-8.259"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTwitter;
