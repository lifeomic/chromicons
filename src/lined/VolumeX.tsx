import * as React from 'react';

const SvgVolumeX = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgVolumeX"
    {...props}
  >
    <path
      d="M18.382 11.478l1.311 1.312 1.312 1.31m-5.246 0l1.311-1.31 1.312-1.312m0 0l-1.312-1.311-1.311-1.312m5.246 0l-1.312 1.312-1.311 1.311M11.29 17.1c0 .859-.443 1.016-.985.349L8.9 15.718a3.726 3.726 0 00-2.547-1.213H4.568a1.567 1.567 0 01-1.562-1.563v-1.884a1.567 1.567 0 011.562-1.563h1.787A3.726 3.726 0 008.9 8.282l1.4-1.728c.542-.667.985-.51.985.349z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgVolumeX;
