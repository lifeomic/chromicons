import * as React from 'react';

const SvgAward = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgAward"
    {...props}
  >
    <path
      d="M17.507 8.507a5.507 5.507 0 11-1.613-3.894 5.49 5.49 0 011.613 3.894zM8.8 12.985l-.465 4.008L7.87 21l2.168-1.608 2.167-1.608 2.168 1.608L16.54 21l-.584-4.007-.585-4.008"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgAward;
