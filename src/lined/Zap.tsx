import * as React from 'react';

const SvgZap = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgZap"
    {...props}
  >
    <path
      d="M12.9 3l-2.35 2.85L8.2 8.7l-2.15 2.55L3.9 13.8H12l-.45 3.6-.45 3.6 4.5-5.4 4.5-5.4H12l.45-3.6.45-3.6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgZap;
