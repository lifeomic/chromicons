import * as React from 'react';

const SvgMic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgMic"
    {...props}
  >
    <path
      d="M12 14.5h0a2.81 2.81 0 01-1.962-.8 2.769 2.769 0 01-.838-2V5.8a2.769 2.769 0 01.838-2A2.81 2.81 0 0112 3h0a2.814 2.814 0 011.963.8 2.773 2.773 0 01.837 2v5.9a2.86 2.86 0 01-2.8 2.8zm5.9-2.7a5.912 5.912 0 01-5.9 5.9h0a5.91 5.91 0 01-5.9-5.9m5.9 5.9V21m-2.8 0h5.6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMic;
