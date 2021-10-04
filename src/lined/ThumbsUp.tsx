import * as React from 'react';

const SvgThumbsUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgThumbsUp"
    {...props}
  >
    <path
      d="M7.643 21H4a1 1 0 01-1-1v-7.9a1 1 0 011-1h3.643c1.554-1.8 2.046-5.02 2.9-7.133a1.542 1.542 0 012.91.141c.463 1.6 0 5.192 0 5.192H18.5a2.5 2.5 0 012.414 3.164l-1.7 6.192A3.185 3.185 0 0116.141 21h-8.5v-9.9"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgThumbsUp;
