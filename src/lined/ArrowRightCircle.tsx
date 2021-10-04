import * as React from 'react';

const SvgArrowRightCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgArrowRightCircle"
    {...props}
  >
    <path
      d="M8.142 12h7.716l-1.9-1.75-1.9-1.75m0 7l1.9-1.75 1.9-1.75M12 3a9 9 0 11-9 9 9 9 0 019-9z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgArrowRightCircle;
