import * as React from 'react';

const SvgRewind = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgRewind"
    {...props}
  >
    <path
      d="M21 18.6c0 .331-.211.432-.469.225L12.51 12.38a.465.465 0 010-.754l8.021-6.445c.258-.207.469-.106.469.225zM11.679 5.4c0-.331-.211-.432-.469-.225l-8.021 6.448a.464.464 0 000 .754l8.021 6.445c.258.207.469.106.469-.225z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgRewind;
