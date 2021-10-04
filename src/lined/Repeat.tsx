import * as React from 'react';

const SvgRepeat = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgRepeat"
    {...props}
  >
    <path
      d="M17.251 3L21 6.752 17.251 10.5M21 6.759H5.805A2.807 2.807 0 003 9.566v1.628m3.751 2.35L3 17.3 6.7 21M3 17.289h15.2a2.807 2.807 0 002.8-2.808v-1.628"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgRepeat;
