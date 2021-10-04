import * as React from 'react';

const SvgFacebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgFacebook"
    {...props}
  >
    <path
      d="M16.95 3h-2.7a4.5 4.5 0 00-4.5 4.5v2.7h-2.7v3.6h2.7V21h3.6v-7.2h2.7l.9-3.6h-3.6V7.5a.9.9 0 01.9-.9h2.7z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgFacebook;
