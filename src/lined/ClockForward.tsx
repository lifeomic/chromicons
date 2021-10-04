import * as React from 'react';

const SvgClockForward = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgClockForward"
    {...props}
  >
    <path
      d="M17.128 8.372L21 8.4V4.288m0 8.412a9.038 9.038 0 01-9 8.3 9.011 9.011 0 117.5-14M12 9.183v4h4.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgClockForward;
