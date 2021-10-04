import * as React from 'react';

const SvgTrello = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgTrello"
    {...props}
  >
    <path
      d="M21 18.485a2.446 2.446 0 01-2.439 2.439H5.515a2.445 2.445 0 01-2.439-2.439V5.439A2.446 2.446 0 015.515 3h13.046A2.447 2.447 0 0121 5.439zM16.832 7.12a.545.545 0 00-.543-.543h-1.881a.545.545 0 00-.543.543v4.285a.544.544 0 00.543.543h1.881a.544.544 0 00.543-.543zm-6.469 0a.545.545 0 00-.543-.543H7.939a.545.545 0 00-.539.543v7.938a.545.545 0 00.543.543H9.82a.545.545 0 00.543-.543z"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgTrello;
