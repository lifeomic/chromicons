import * as React from 'react';

const SvgWebhook = (props: React.SVGProps<SVGSVGElement>) => (
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
    data-icon="SvgWebhook"
    {...props}
  >
    <path d="M9.3 10.5C7.9 9.6 7 8.1 7 6.3c0-2.8 2.2-5 5-5s5 2.2 5 5c0 .4-.1.9-.2 1.3" />
    <circle cx={12} cy={6.3} r={2} />
    <path d="M15.5 11.9c.7-.4 1.6-.7 2.5-.7 2.8 0 5 2.2 5 5s-2.2 5-5 5c-.4 0-.9-.1-1.3-.2" />
    <circle cx={18} cy={16.2} r={2} />
    <path d="M15.5 11.9l-2.3-4M11 16.2h5m-6.7-5.7l-2.3 4m4 1.7c0 2.8-2.2 5-5 5s-5-2.2-5-5c0-2.3 1.6-4.3 3.7-4.8" />
    <circle cx={6} cy={16.2} r={2} />
  </svg>
);

export default SvgWebhook;
