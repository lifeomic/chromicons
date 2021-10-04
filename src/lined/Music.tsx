import * as React from 'react';

const SvgMusic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgMusic"
    {...props}
  >
    <path
      d="M9 18V5l12-2v13M6 15a3 3 0 11-3 3 3 3 0 013-3zm12-2a3 3 0 11-3 3 3 3 0 013-3z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMusic;
