import * as React from 'react';

const SvgMessageSquare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgMessageSquare"
    {...props}
  >
    <path
      d="M21 15a2 2 0 01-2 2H7l-2 2-2 2V5a2 2 0 012-2h14a2 2 0 012 2v10z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMessageSquare;
