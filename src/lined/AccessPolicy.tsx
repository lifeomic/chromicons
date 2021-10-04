import * as React from 'react';

const SvgAccessPolicy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    width={24}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit={10}
    height={24}
    viewBox="0 0 24 24"
    data-icon="SvgAccessPolicy"
    {...props}
  >
    <path d="M12.246 22H18a2.006 2.006 0 002-2V8l-6-6H6a2.006 2.006 0 00-2 2v4.523" />
    <path d="M14 2v6h6m-4 5h-3.246M16 17h-2.815M10 9h-.96m-1.295 9.6l.6 4.4h-4.9l.6-4.4h0a3.593 3.593 0 01-1.6-2.9 3.4 3.4 0 016.8 0 3.17 3.17 0 01-1.5 2.9h0" />
  </svg>
);

export default SvgAccessPolicy;
