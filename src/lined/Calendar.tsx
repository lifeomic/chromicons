import * as React from 'react';

const SvgCalendar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgCalendar"
    {...props}
  >
    <path
      d="M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2zm11-2v4M8 3v4m-5 3h18M7.858 13.954h.1m4.342 0h.1m4.3 0h.1M7.827 17.4h.1m4.373 0h.1m4.269 0h.1"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCalendar;
