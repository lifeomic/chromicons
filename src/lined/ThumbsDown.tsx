import * as React from 'react';

const SvgThumbsDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgThumbsDown"
    {...props}
  >
    <path
      d="M7.643 3H4a1 1 0 00-1 1v7.9a1 1 0 001 1h3.643c1.554 1.8 2.046 5.02 2.9 7.133a1.542 1.542 0 002.91-.141c.463-1.6 0-5.192 0-5.192H18.5a2.5 2.5 0 002.414-3.164l-1.7-6.192A3.185 3.185 0 0016.141 3h-8.5v9.9"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgThumbsDown;
