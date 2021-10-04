import * as React from 'react';

const SvgDownload = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgDownload"
    {...props}
  >
    <path
      d="M7.8 11.5l2.1 2.3 2.1 2.3V3m0 13.1l2.1-2.3 2.1-2.3m4.8 3.6V19a2 2 0 01-2 2H5a2.006 2.006 0 01-2-2v-3.9"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgDownload;
