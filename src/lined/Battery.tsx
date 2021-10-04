import * as React from 'react';

const SvgBattery = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgBattery"
    {...props}
  >
    <path
      d="M15.3 17.593H5a2 2 0 01-2-2V8.407a2 2 0 012-2h10.3a2 2 0 012 2v7.186a2 2 0 01-2 2zm5.7-7.087v2.988"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBattery;
