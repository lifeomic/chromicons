import * as React from 'react';

const SvgSkipForward = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgSkipForward"
    {...props}
  >
    <path
      d="M14.4 12.524a1 1 0 000-1.548L9.85 7.25 5.983 4.086a1 1 0 00-1.633.774v13.78a1 1 0 001.633.774L9.85 16.25zm4.75-9.774v18"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSkipForward;
