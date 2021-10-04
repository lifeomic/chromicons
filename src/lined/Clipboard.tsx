import * as React from 'react';

const SvgClipboard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgClipboard"
    {...props}
  >
    <path
      d="M15.9 6.1a1.038 1.038 0 01-.65-.213.972.972 0 01-.35-.587A3 3 0 0012 3a3.031 3.031 0 00-1.862.65A2.886 2.886 0 009.1 5.2a.972.972 0 01-.35.587A1.038 1.038 0 018.1 6H6.7a.976.976 0 00-.725.313A1.017 1.017 0 005.7 7v13a.976.976 0 00.313.725A1.017 1.017 0 006.7 21h10.6a.979.979 0 00.725-.312A1.021 1.021 0 0018.3 20V7.1a.976.976 0 00-.313-.725A1.017 1.017 0 0017.3 6.1h-1.4zM12 6.05V6h0m-2.6 5.8V17h5.2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgClipboard;
