import * as React from 'react';

const SvgMoon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgMoon"
    {...props}
  >
    <path
      d="M17.745 16.334a7.162 7.162 0 01-3.855-13.2c-.241-.04-.484-.073-.731-.1S12.664 3 12.412 3a9 9 0 104.917 16.535 9.063 9.063 0 003.259-3.79 7.144 7.144 0 01-2.843.589z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMoon;
