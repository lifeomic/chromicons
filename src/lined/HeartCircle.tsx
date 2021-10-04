import * as React from 'react';

const SvgHeartCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit={10}
    width={24}
    height={24}
    viewBox="0 0 24 24"
    data-icon="SvgHeartCircle"
    {...props}
  >
    <path d="M12 9.2a1.5 1.5 0 01-.9-.3 2.261 2.261 0 00-1.6-.4 2.028 2.028 0 00-1.1.7 1.841 1.841 0 00-.5 1.3 5.433 5.433 0 00.8 2.5 6.829 6.829 0 002.6 2.4c.2.1.5.209.7.3.216-.1.5-.2.7-.3a6.829 6.829 0 002.6-2.4 5.433 5.433 0 00.8-2.5 1.841 1.841 0 00-.5-1.3 2.028 2.028 0 00-1.1-.7 2.261 2.261 0 00-1.6.4 1.5 1.5 0 01-.9.3z" />
    <circle cx={12} cy={12} r={9} />
  </svg>
);

export default SvgHeartCircle;
