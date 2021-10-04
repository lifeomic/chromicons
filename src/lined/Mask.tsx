import * as React from 'react';

const SvgMask = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgMask"
    {...props}
  >
    <path
      d="M8.722 16.163l-1.356-.673a2 2 0 01-1.111-1.79v-2.754a1.854 1.854 0 011.35-1.784l3.155-.889a4.635 4.635 0 012.516 0l3.155.889a1.855 1.855 0 011.35 1.784v2.843a1.855 1.855 0 01-1.029 1.661l-1.438.713a7.411 7.411 0 01-6.592 0zM6.766 9.672c0-3.107-3.661-3.638-3.781-.5s4.158 6.274 4.05 6.111m9.982.006c-.108.163 4.119-2.862 4-5.993s-3.777-2.767-3.777.34m-5.22 7.287v-2.82"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMask;
