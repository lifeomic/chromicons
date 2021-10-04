import * as React from 'react';

const SvgBatteryCharging = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgBatteryCharging"
    {...props}
  >
    <path
      d="M9.759 17.593H5a2 2 0 01-2-2V8.407a2 2 0 012-2h.746m5.017 0H15.3a2 2 0 012 2v7.186a2 2 0 01-2 2M21 10.506v2.988M9.3 19.5l3.8-7.35H7.5l4.349-7.65"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBatteryCharging;
