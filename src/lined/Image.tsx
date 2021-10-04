import * as React from 'react';

const SvgImage = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgImage"
    {...props}
  >
    <path
      d="M19 21H5a2.006 2.006 0 01-2-2V5a2.008 2.008 0 012-2h14a2.006 2.006 0 012 2v14a2 2 0 01-2 2zM6.2 21l4.2-4.85 4.2-4.85 3.2 3.4 3.2 3.4M8.8 6.4a2.3 2.3 0 11-1.626.674A2.289 2.289 0 018.8 6.4z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgImage;
