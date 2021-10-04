import * as React from 'react';

const SvgPower = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgPower"
    {...props}
  >
    <path
      d="M18.236 5.594a8.969 8.969 0 11-12.472 0M12 3v8.272"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPower;
