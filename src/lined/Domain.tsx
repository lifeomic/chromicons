import * as React from 'react';

const SvgDomain = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgDomain"
    {...props}
  >
    <path d="M20 10a2 2 0 002-2V4a2 2 0 00-2-2H4a2 2 0 00-2 2v4a2 2 0 002 2h8.315M9.388 22H4a2 2 0 01-2-2v-4a2 2 0 012-2h5.063M6 6h0m0 12h0" />
    <circle cx={17.658} cy={17.658} r={5.341} />
    <path d="M12.316 17.658h10.683m-5.341-5.341a8.179 8.179 0 012.142 5.341A8.176 8.176 0 0117.658 23a8.178 8.178 0 01-2.137-5.342 8.178 8.178 0 012.137-5.341z" />
  </svg>
);

export default SvgDomain;
