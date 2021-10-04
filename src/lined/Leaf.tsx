import * as React from 'react';

const SvgLeaf = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgLeaf"
    {...props}
  >
    <path
      d="M12.031 3A8.952 8.952 0 1021 11.956L21.01 3s-8.97.013-8.979 0zM3.015 20.988l13.74-13.741m-1.666 8.505H8.251V8.914m8.909 2.692H12.4V6.843"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgLeaf;
