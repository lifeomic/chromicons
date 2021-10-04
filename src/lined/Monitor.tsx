import * as React from 'react';

const SvgMonitor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgMonitor"
    {...props}
  >
    <path
      d="M12 21v-4.4H4.8A1.8 1.8 0 013 14.8v-10A1.8 1.8 0 014.8 3h14.4A1.8 1.8 0 0121 4.8v10a1.8 1.8 0 01-1.8 1.8h-2.768M8.95 21h6.15"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMonitor;
