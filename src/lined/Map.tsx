import * as React from 'react';

const SvgMap = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgMap"
    {...props}
  >
    <path
      d="M3 7.091v13.091l5.727-3.273 6.546 3.273L21 16.909V3.818l-5.727 3.273-6.546-3.273zm5.727 1.727v8.091m6.546-9.818v12.091"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMap;
