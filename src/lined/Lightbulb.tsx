import * as React from 'react';

const SvgLightbulb = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgLightbulb"
    {...props}
  >
    <path
      d="M15.087 15.428v-.484a2.645 2.645 0 01.243-1.121 2.769 2.769 0 01.7-.931 5.633 5.633 0 001.789-2.9 5.437 5.437 0 00-.245-3.358 5.749 5.749 0 00-2.2-2.638 6.22 6.22 0 00-6.752 0 5.749 5.749 0 00-2.2 2.638 5.437 5.437 0 00-.245 3.358 5.633 5.633 0 001.789 2.9 2.805 2.805 0 01.7.937 2.667 2.667 0 01.243 1.124v.484m.885 2.59h4.46m-3.989 2.958H13.8"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgLightbulb;
