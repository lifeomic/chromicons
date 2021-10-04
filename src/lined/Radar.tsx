import * as React from 'react';

const SvgRadar = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgRadar"
    {...props}
  >
    <path d="M12 19.4A7.4 7.4 0 104.6 12a7.383 7.383 0 007.4 7.4zM4.6 12H1.7m20.5 0h-2.8M12 19.4v2.8m0-20.5v2.9" />
    <path d="M15.7 12a3.75 3.75 0 11-7.5 0A3.864 3.864 0 0112 8.2m0 3.8h0" />
  </svg>
);

export default SvgRadar;
