import * as React from 'react';

const SvgTwitch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgTwitch"
    {...props}
  >
    <path
      d="M17.981 17.746h-6.445L7.635 21v-3.254H2.921V3H21v11.832zm-1.8-10.509v4.4m-5.249-4.4v4.4"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTwitch;
