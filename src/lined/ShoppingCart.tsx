import * as React from 'react';

const SvgShoppingCart = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgShoppingCart"
    {...props}
  >
    <path
      d="M20.112 19.4a1.629 1.629 0 11-1.629-1.629 1.63 1.63 0 011.629 1.629zM9.941 17.768a1.629 1.629 0 101.628 1.632 1.629 1.629 0 00-1.628-1.632zM3 3.006h1.678a2.113 2.113 0 011.965 1.573l2.051 9.152a2.114 2.114 0 001.965 1.574h6.788a2.153 2.153 0 001.989-1.568L20.957 8.8a1.233 1.233 0 00-1.236-1.588L11.4 7.064"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgShoppingCart;
