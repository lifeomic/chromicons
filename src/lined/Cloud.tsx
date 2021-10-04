import * as React from 'react';

const SvgCloud = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgCloud"
    {...props}
  >
    <path
      d="M15.55 9.451a5.437 5.437 0 011.8 0 4.283 4.283 0 012.238 1.175 4.618 4.618 0 011.262 2.225 4.564 4.564 0 01-.925 3.838 4.477 4.477 0 01-3.475 1.662h-7.6a6.049 6.049 0 01-2.137-.375 4.941 4.941 0 01-1.763-1.125 7.3 7.3 0 01-1.4-2.162 6.613 6.613 0 01-.5-2.538 6.54 6.54 0 011.888-4.562A6.32 6.32 0 019.45 5.651a6.351 6.351 0 014.65 1.863 6.527 6.527 0 011.95 4.637"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCloud;
