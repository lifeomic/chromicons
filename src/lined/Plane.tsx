import * as React from 'react';

const SvgPlane = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgPlane"
    {...props}
  >
    <path
      d="M13.778 8.232L10.2 12.094 4.961 9.829l2.516-2.718zm6.585-4.167a2 2 0 00-2.766.054l-.006-.006-10.749 11.57-1.715-.43L3 17.631l4.921 2.819 5.58-6.029 4.207 6.015 2.516-2.718-2.594-7.756 2.9-3.13h-.007a2 2 0 00-.16-2.767z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPlane;
