import * as React from 'react';

const SvgVideo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgVideo"
    {...props}
  >
    <path
      d="M12.562 15.116H5a2 2 0 01-2-2V6.029a2 2 0 012-2h7.562a2 2 0 012 2v7.087a2 2 0 01-2 2zm0 4.855l-3.781-4.855L5 19.971m12.961-8.435H21V7.608h-3.039M6.868 7.74v.071"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgVideo;
