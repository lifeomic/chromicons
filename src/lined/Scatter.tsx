import * as React from 'react';

const SvgScatter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgScatter"
    {...props}
  >
    <path
      d="M3 3v18h18M9 6.5v-.1h0m4.5 2.4v-.1h0M12 12.1V12h0m4.9 1.5v-.1h0m-2.8 4.1v-.1h0"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgScatter;
