import * as React from 'react';

const SvgThermometer = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgThermometer"
    {...props}
  >
    <path
      d="M16.232 16.768a4.232 4.232 0 11-6.554-3.518.96.96 0 00.411-.807V4.957a1.912 1.912 0 113.822 0v7.486a.958.958 0 00.41.806 4.2 4.2 0 011.911 3.519z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgThermometer;
