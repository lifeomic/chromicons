import * as React from 'react';

const SvgVolume = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgVolume"
    {...props}
  >
    <path
      d="M16.142 17.1c0 .859-.443 1.016-.985.349l-1.4-1.728a3.724 3.724 0 00-2.547-1.213H9.42a1.567 1.567 0 01-1.562-1.563v-1.887A1.567 1.567 0 019.42 9.495h1.787a3.724 3.724 0 002.547-1.213l1.4-1.728c.542-.667.985-.51.985.349z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgVolume;
