import * as React from 'react';

const SvgMessageCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgMessageCircle"
    {...props}
  >
    <path
      d="M21 11.5a8.386 8.386 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.386 8.386 0 01-3.8-.9L3 21l1.9-5.7a8.386 8.386 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.386 8.386 0 013.8-.9h.5a8.48 8.48 0 018 8z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMessageCircle;
