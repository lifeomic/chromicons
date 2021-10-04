import * as React from 'react';

const SvgDisguise = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgDisguise"
    {...props}
  >
    <circle cx={7} cy={17.5} r={4} />
    <circle cx={17} cy={17.5} r={4} />
    <path d="M10.942 16.838a2.124 2.124 0 012.116-.069M1 11.051h22m-3.777-.077s-.834-6.693-.9-7.147-.085-1.718-1.8-1a9.938 9.938 0 01-4.336 1.224h-.5A9.936 9.936 0 017.358 2.83c-1.71-.721-1.728.542-1.8 1s-.9 7.147-.9 7.147M5.5 8.051h13m1.779 7.157a2.121 2.121 0 011.253-.252m-19.064 0a2.121 2.121 0 011.253.252" />
  </svg>
);

export default SvgDisguise;
