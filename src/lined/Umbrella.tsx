import * as React from 'react';

const SvgUmbrella = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgUmbrella"
    {...props}
  >
    <path
      d="M12 15.088v3.838a2.085 2.085 0 004.169 0M21 12.583l-1.154-.707a2.993 2.993 0 00-3.195-.068l-.05.03a2.784 2.784 0 01-2.909-.014l-.209-.129a2.787 2.787 0 00-2.773-.095l-.661.35a2.784 2.784 0 01-2.824-.125h0a2.786 2.786 0 00-3.011-.016L3 12.583v-.734a9 9 0 0118 0z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgUmbrella;
