import * as React from 'react';

const SvgHelix = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgHelix"
    {...props}
  >
    <path
      d="M16.889 3.007a7.99 7.99 0 00-2.023 2.372m.092 7.885a2.979 2.979 0 01-.3.489 2.362 2.362 0 01-.391.4 4.4 4.4 0 01-1.848 1.005 5.23 5.23 0 01-2.074.1 16.557 16.557 0 01-2.162-.616 3.446 3.446 0 00-2.162-.088 4.956 4.956 0 00-1.622.968c-.49.415-.942.892-1.395 1.345M21 7.116a12.366 12.366 0 01-2.009 1.741 3.942 3.942 0 01-2.516.672 4.963 4.963 0 01-.742-.214 6.494 6.494 0 01-.666-.289 5.033 5.033 0 00-2.778-.44A4.306 4.306 0 009.737 9.73a3.534 3.534 0 00-.518.66 4.223 4.223 0 00-.36.758M9 18.9a7.281 7.281 0 01-.868 1.127 13.5 13.5 0 01-1.01.968"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgHelix;
