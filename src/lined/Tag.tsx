import * as React from 'react';

const SvgTag = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgTag"
    {...props}
  >
    <path
      d="M20.437 13.9L13.9 20.437a1.936 1.936 0 01-2.73 0L3 12.269V3h9.269l8.168 8.168a1.936 1.936 0 010 2.732zM7.45 7.164v-.01"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTag;
