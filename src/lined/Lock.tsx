import * as React from 'react';

const SvgLock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgLock"
    {...props}
  >
    <path
      d="M18.644 21h-13.2a.945.945 0 01-1-1v-7.2a.945.945 0 011-1h13.1a.945.945 0 011 1V20a.808.808 0 01-.225.725.966.966 0 01-.675.275zm-10.9-9.2V7.3a4.3 4.3 0 118.6 0v4.5m-4.3 3.7v2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgLock;
