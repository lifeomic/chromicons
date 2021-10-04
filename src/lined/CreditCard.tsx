import * as React from 'react';

const SvgCreditCard = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgCreditCard"
    {...props}
  >
    <path
      d="M19 18.811H5a2 2 0 01-2-2V7.189a2 2 0 012-2h14a2 2 0 012 2v9.622a2 2 0 01-2 2zm2-8.65H3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCreditCard;
