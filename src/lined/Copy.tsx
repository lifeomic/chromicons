import * as React from 'react';

const SvgCopy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgCopy"
    {...props}
  >
    <path
      d="M19 21H9.4a2 2 0 01-2-2V9.4a2 2 0 012-2H19a2 2 0 012 2V19a2 2 0 01-2 2zM7.3 16.6H5a2.006 2.006 0 01-2-2V5a2.008 2.008 0 012-2h9.6a2.006 2.006 0 012 2v2.3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCopy;
