import * as React from 'react';

const SvgScissors = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgScissors"
    {...props}
  >
    <path
      d="M9 18a3 3 0 11-3-3 3 3 0 013 3zM6 3a3 3 0 103 3 3 3 0 00-3-3zm2.065 12.747L21.006 3m-9.439 8.43L8.315 8.181m5.885 5.856l6.808 6.941"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgScissors;
