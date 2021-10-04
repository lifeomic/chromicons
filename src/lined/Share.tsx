import * as React from 'react';

const SvgShare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgShare"
    {...props}
  >
    <path
      d="M21 14.183v4.862a2.266 2.266 0 01-2.449 2H5.449a2.266 2.266 0 01-2.449-2v-4.862m9 1.823v-6.98a2.786 2.786 0 012.786-2.786H21m-3.289-3.285L21 6.24m-3.289 3.285L21 6.237"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgShare;
