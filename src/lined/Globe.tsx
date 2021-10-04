import * as React from 'react';

const SvgGlobe = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgGlobe"
    {...props}
  >
    <path
      d="M12 2.991A9.009 9.009 0 112.991 12 9.01 9.01 0 0112 2.991zM2.991 12h18.018M12 2.991A13.783 13.783 0 0115.6 12a13.783 13.783 0 01-3.6 9.009A13.783 13.783 0 018.4 12 13.783 13.783 0 0112 2.991z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgGlobe;
