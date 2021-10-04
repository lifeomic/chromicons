import * as React from 'react';

const SvgPrint = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgPrint"
    {...props}
  >
    <path
      d="M6.717 14.12h10.566V21H6.717zm10.566-5.162V3H6.717v5.958m10.707 8.522h1.788A1.794 1.794 0 0021 15.692v-4.505A1.794 1.794 0 0019.212 9.4H4.788A1.794 1.794 0 003 11.187v4.505a1.777 1.777 0 001.755 1.788h1.756"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPrint;
