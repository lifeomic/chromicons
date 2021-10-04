import * as React from 'react';

const SvgFontSize = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgFontSize"
    {...props}
  >
    <path
      d="M18.215 3v18M15.426 5.787L18.213 3 21 5.787m0 12.426L18.213 21l-2.787-2.787M7.468 6.032v11.936M3 7.224V6.032h8.936v1.192M5.284 17.968h4.368"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgFontSize;
