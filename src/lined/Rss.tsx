import * as React from 'react';

const SvgRss = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    stroke="currentColor"
    viewBox="0 0 24 24"
    data-icon="SvgRss"
    {...props}
  >
    <path
      d="M12.288 21.009a10.338 10.338 0 00-9.231-9.29M21 21A18 18 0 003 3m.036 17.964l-.08.061.088-.067"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

export default SvgRss;
