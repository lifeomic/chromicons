import * as React from 'react';

const SvgRadio = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgRadio"
    {...props}
  >
    <path
      d="M11.969 14.01a2.01 2.01 0 112.01-2.01 2.01 2.01 0 01-2.01 2.01zm6.531 4.213a9 9 0 000-12.446M16.091 15.81a5.6 5.6 0 000-7.621M5.472 5.777a9 9 0 000 12.446M7.884 8.19a5.6 5.6 0 000 7.621"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgRadio;
