import * as React from 'react';

const SvgPhoneIncoming = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgPhoneIncoming"
    {...props}
  >
    <path
      d="M21 3l-6.08 6.015m0-6.015v6.015H21m-10.376 3.7A18.541 18.541 0 018.5 9.463l.987-.481a1.32 1.32 0 00.7-1.5c-.38-1.532-.5-2.06-.768-3.415a1.318 1.318 0 00-1.56-1.04l-3.186.655A2.067 2.067 0 003.014 5.9a17.054 17.054 0 0015.073 15.088 2.065 2.065 0 002.224-1.674l.662-3.352a1.319 1.319 0 00-1.063-1.55c-1.261-.225-2.071-.454-3.316-.781a1.315 1.315 0 00-1.535.741l-.7 1.576"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPhoneIncoming;
