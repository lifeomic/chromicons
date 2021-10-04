import * as React from 'react';

const SvgRectangles = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgRectangles"
    {...props}
  >
    <path
      d="M6.459 20.449v-3.944a.614.614 0 01.614-.615h9.854a.614.614 0 01.614.615h0v3.944a.614.614 0 01-.614.615H7.073a.614.614 0 01-.614-.615zM13.972 12.082h-3.944a.615.615 0 01-.615-.615h0V3.614A.614.614 0 0110.028 3h3.944a.614.614 0 01.615.614h0v7.853a.615.615 0 01-.615.615z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgRectangles;
