import * as React from 'react';

const SvgClockRewind = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    data-icon="SvgClockRewind"
    {...props}
  >
    <path d="M2.985 4.288V8.4l3.872-.028M4.485 7a8.989 8.989 0 11-1.5 5.7M12 9.183v4h4.2" />
  </svg>
);

export default SvgClockRewind;
