import * as React from 'react';

const SvgLifeBuoy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgLifeBuoy"
    {...props}
  >
    <path
      d="M12 21a9 9 0 10-9-9 9 9 0 009 9zm0-5.4A3.6 3.6 0 108.4 12a3.6 3.6 0 003.6 3.6zM5.637 5.637l3.816 3.816m5.094 5.094l3.816 3.816m-3.816-8.91l3.816-3.816m-3.816 3.816l3.177-3.177M5.637 18.363l3.816-3.816"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgLifeBuoy;
