import * as React from 'react';

const SvgAlertTriangle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgAlertTriangle"
    {...props}
  >
    <path
      d="M10.206 4.625l-3.5 6.4-3.5 6.4a2.04 2.04 0 00.038 1.987 2 2 0 001.762 1.013h14a2.007 2.007 0 001.725-.975 2.075 2.075 0 00.075-2.025l-3.5-6.4-3.5-6.4a2.068 2.068 0 00-3.6 0zM12.006 8.825v5.2M12.006 16.99v-.065h0"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgAlertTriangle;
