import * as React from 'react';

const SvgWifi = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgWifi"
    {...props}
  >
    <path
      d="M3 9.3a12.635 12.635 0 0118 .191m-2.958 2.959a8.452 8.452 0 00-12.087-.192m9.1 3.177a4.226 4.226 0 00-6.122-.2M12 18.306V18.3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgWifi;
