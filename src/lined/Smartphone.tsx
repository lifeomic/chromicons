import * as React from 'react';

const SvgSmartphone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgSmartphone"
    {...props}
  >
    <path
      d="M16.393 21H7.607a1.368 1.368 0 01-1.368-1.368V4.368A1.368 1.368 0 017.607 3h8.786a1.368 1.368 0 011.368 1.368v15.264A1.368 1.368 0 0116.393 21zM12 18.232v.068M10.708 6.1h2.584"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSmartphone;
