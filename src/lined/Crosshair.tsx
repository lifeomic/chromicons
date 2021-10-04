import * as React from 'react';

const SvgCrosshair = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgCrosshair"
    {...props}
  >
    <path
      d="M21 12a9 9 0 11-9-9 9 9 0 019 9zm-9-4.691V3m0 18v-4.309m-4.691-4.524H3m18 0h-4.309"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCrosshair;
