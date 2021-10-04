import * as React from 'react';

const SvgPackage = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgPackage"
    {...props}
  >
    <path
      d="M12 21l-4.2-1.8-4.2-1.8V6.6l4.2 1.8 4.2 1.8V21zm0 0l4.2-1.8 4.2-1.8V6.6l-4.2 1.8-4.2 1.8V21zm8.4-14.4l-2.25-.95-2.25-.95-1.95-.85L12 3 7.8 4.8 3.6 6.6m4.2 1.8l3.9-1.7L15.6 5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPackage;
