import * as React from 'react';

const SvgCheckList = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit={10}
    width={24}
    height={24}
    viewBox="0 0 24 24"
    data-icon="SvgCheckList"
    {...props}
  >
    <path d="M12.768 4.019L6.973 9.82 5.235 8.082" />
    <path d="M12.656 9.793a5.8 5.8 0 11-4.54-6.823l.04.008m8.112 5.165h6.554m-8.242 6h8.242m-18 6h18" />
  </svg>
);

export default SvgCheckList;
