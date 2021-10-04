import * as React from 'react';

const SvgExternalLink = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgExternalLink"
    {...props}
  >
    <path
      d="M17.2 12.45v6.6a2 2 0 01-2 2H5a2.006 2.006 0 01-2-2V8.75a2.008 2.008 0 012-2h6.6m9.1 2.4l.15-3.1.15-3.1-5.45 5.45-5.45 5.45M21 2.95l-3.1.15-3.1.15"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgExternalLink;
