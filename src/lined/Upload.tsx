import * as React from 'react';

const SvgUpload = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgUpload"
    {...props}
  >
    <path
      d="M16.2 7.6l-2.1-2.3L12 3v13.1M12 3L9.9 5.3 7.8 7.6M21 15.1V19a2 2 0 01-2 2H5a2.006 2.006 0 01-2-2v-3.9"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgUpload;
