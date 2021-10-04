import * as React from 'react';

const SvgMicOff = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgMicOff"
    {...props}
  >
    <path
      d="M10.13 3.8a2.816 2.816 0 011.962-.8h0a2.816 2.816 0 011.963.8 2.771 2.771 0 01.837 2v2.95m-1.07 5.122a2.759 2.759 0 01-1.73.628 2.816 2.816 0 01-1.962-.8 2.768 2.768 0 01-.838-2V9.334m6.748 6.846a5.9 5.9 0 01-9.848-4.38m11.8 0c0 .147-.005.293-.016.438M12.092 17.7V21m-2.8 0h5.6M3 3l8.875 8.875.981.981L21 21"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMicOff;
