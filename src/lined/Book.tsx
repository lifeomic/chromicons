import * as React from 'react';

const SvgBook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgBook"
    {...props}
  >
    <path
      d="M18.259 21h-11.2a2.318 2.318 0 01-2.318-2.318V5.318A2.318 2.318 0 017.059 3h11.2a1 1 0 011 1v16a1 1 0 01-1 1zm1-4.438H6.96a2.22 2.22 0 00-2.219 2.219h0M8.936 3v5.659"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBook;
