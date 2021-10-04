import * as React from 'react';

const SvgLibrary = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit={10}
    width={24}
    height={24}
    viewBox="0 0 24 24"
    data-icon="SvgLibrary"
    {...props}
  >
    <path d="M20.332 20L16.844 4M12 20V4M6 20V4" />
  </svg>
);

export default SvgLibrary;
