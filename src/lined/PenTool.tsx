import * as React from 'react';

const SvgPenTool = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgPenTool"
    {...props}
  >
    <path
      d="M17.783 13.232l-4.551 4.551-5.4-.952L3.016 3.016l13.815 4.819zm-4.089-2.26a1.925 1.925 0 100 2.722 1.924 1.924 0 000-2.722zM3.016 3.016l7.956 7.956m1 8.071l1.942 1.941 7.07-7.07-1.941-1.942z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPenTool;
