import * as React from 'react';

const SvgRepository = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit={10}
    width={24}
    height={24}
    viewBox="0 0 24 24"
    data-icon="SvgRepository"
    {...props}
  >
    <path d="M22 16v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4M5.966 2.143h12v6h-12z" />
    <path d="M5.966 12h12v6h-12zm4-9.857v6m4-6v6m-4 3.857v6m4-6v6" />
  </svg>
);

export default SvgRepository;
