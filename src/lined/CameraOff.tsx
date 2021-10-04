import * as React from 'react';

const SvgCameraOff = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgCameraOff"
    {...props}
  >
    <path
      d="M7.5 7.6H5a2.008 2.008 0 00-2 2v7.7a2.008 2.008 0 002 2h14.031M21 15.4V9.6a2 2 0 00-2-2h-2.2a.945.945 0 01-1-1 1.914 1.914 0 00-.538-1.325A1.872 1.872 0 0013.9 4.7h-3.6m4 9.9a2.532 2.532 0 01-.962.813A3.06 3.06 0 0112 15.7a2.86 2.86 0 01-2.8-2.8 2.759 2.759 0 01.337-1.337 2.908 2.908 0 01.863-.963M3 3l8.875 8.875.981.981L21 21"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCameraOff;
