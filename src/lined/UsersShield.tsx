import * as React from 'react';

const SvgUsersShield = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgUsersShield"
    {...props}
  >
    <path d="M4.415 17.517A9.961 9.961 0 012 11V5a2 2 0 012-2h16a2 2 0 012 2v2.923M18.665 23v-1.445a2.89 2.89 0 00-2.89-2.89h-5.78a2.89 2.89 0 00-2.89 2.89V23" />
    <circle cx={12.885} cy={12.885} r={2.89} />
    <path d="M23 23v-1.445a2.89 2.89 0 00-2.167-2.8m-2.891-8.666a2.89 2.89 0 010 5.6" />
  </svg>
);

export default SvgUsersShield;
