import * as React from 'react';

const SvgLinkBroken = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgLinkBroken"
    {...props}
  >
    <path
      d="M12.086 16.538l-2.8 2.8-.688.687a3.2 3.2 0 01-4.6 0m0 0a3.2 3.2 0 010-4.6l2.45-2.45 1.022-1.021m3.989-3.99l3.352-3.351.587-.588a3.253 3.253 0 114.6 4.6l-2.45 2.45-1.448 1.454M4.886 4.861l.723.724.724.723M5.161 9.2H3.025M9.227 3v2.137m9.887 14l-.723-.724-.724-.723m1.172-2.89h2.136m-6.2 6.2v-2.137"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgLinkBroken;
