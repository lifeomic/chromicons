import * as React from 'react';

const SvgUserShield = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgUserShield"
    {...props}
  >
    <path d="M7.619 19.992A10 10 0 012 11V5a2 2 0 012-2h16a2 2 0 012 2v2.927m-7.542 10.738h-.128a2.89 2.89 0 00-2.89 2.89V23m8.542-4.335h-5.524M23 23v-1.445a2.89 2.89 0 00-2.89-2.89h-.128" />
    <circle cx={17.22} cy={12.885} r={2.89} />
  </svg>
);

export default SvgUserShield;
