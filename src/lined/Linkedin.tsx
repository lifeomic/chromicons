import * as React from 'react';

const SvgLinkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgLinkedin"
    {...props}
  >
    <path
      d="M21.024 14.807v5.968h-3.553v-5.968a1.778 1.778 0 00-3.553 0v5.968h-3.552V9.691h3.509v.326a5.476 5.476 0 011.82-.326 5.226 5.226 0 015.329 5.116zM2.976 20.775h3.7V9.691h-3.7zm0-15.7a1.848 1.848 0 101.848-1.85 1.848 1.848 0 00-1.848 1.847z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgLinkedin;
